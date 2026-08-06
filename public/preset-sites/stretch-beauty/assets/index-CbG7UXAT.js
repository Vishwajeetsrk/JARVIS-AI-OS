(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const T of document.querySelectorAll('link[rel="modulepreload"]')) M(T);
  new MutationObserver((T) => {
    for (const O of T)
      if (O.type === "childList")
        for (const A of O.addedNodes) A.tagName === "LINK" && A.rel === "modulepreload" && M(A);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(T) {
    const O = {};
    return (
      T.integrity && (O.integrity = T.integrity),
      T.referrerPolicy && (O.referrerPolicy = T.referrerPolicy),
      T.crossOrigin === "use-credentials"
        ? (O.credentials = "include")
        : T.crossOrigin === "anonymous"
          ? (O.credentials = "omit")
          : (O.credentials = "same-origin"),
      O
    );
  }
  function M(T) {
    if (T.ep) return;
    T.ep = !0;
    const O = c(T);
    fetch(T.href, O);
  }
})();
var Nu = { exports: {} },
  xr = {},
  Cu = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function Qf() {
  if (Ta) return H;
  Ta = 1;
  var v = Symbol.for("react.element"),
    S = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    M = Symbol.for("react.strict_mode"),
    T = Symbol.for("react.profiler"),
    O = Symbol.for("react.provider"),
    A = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    me = Symbol.for("react.memo"),
    D = Symbol.for("react.lazy"),
    G = Symbol.iterator;
  function ne(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (G && f[G]) || f["@@iterator"]), typeof f == "function" ? f : null);
  }
  var Be = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Qe = Object.assign,
    re = {};
  function J(f, g, U) {
    ((this.props = f), (this.context = g), (this.refs = re), (this.updater = U || Be));
  }
  ((J.prototype.isReactComponent = {}),
    (J.prototype.setState = function (f, g) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, f, g, "setState");
    }),
    (J.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    }));
  function wt() {}
  wt.prototype = J.prototype;
  function ct(f, g, U) {
    ((this.props = f), (this.context = g), (this.refs = re), (this.updater = U || Be));
  }
  var et = (ct.prototype = new wt());
  ((et.constructor = ct), Qe(et, J.prototype), (et.isPureReactComponent = !0));
  var Se = Array.isArray,
    tt = Object.prototype.hasOwnProperty,
    Pe = { current: null },
    Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ke(f, g, U) {
    var V,
      B = {},
      Q = null,
      q = null;
    if (g != null)
      for (V in (g.ref !== void 0 && (q = g.ref), g.key !== void 0 && (Q = "" + g.key), g))
        tt.call(g, V) && !Te.hasOwnProperty(V) && (B[V] = g[V]);
    var Y = arguments.length - 2;
    if (Y === 1) B.children = U;
    else if (1 < Y) {
      for (var le = Array(Y), Ae = 0; Ae < Y; Ae++) le[Ae] = arguments[Ae + 2];
      B.children = le;
    }
    if (f && f.defaultProps) for (V in ((Y = f.defaultProps), Y)) B[V] === void 0 && (B[V] = Y[V]);
    return { $$typeof: v, type: f, key: Q, ref: q, props: B, _owner: Pe.current };
  }
  function zt(f, g) {
    return { $$typeof: v, type: f.type, key: g, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function xt(f) {
    return typeof f == "object" && f !== null && f.$$typeof === v;
  }
  function Yt(f) {
    var g = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (U) {
        return g[U];
      })
    );
  }
  var ft = /\/+/g;
  function Ue(f, g) {
    return typeof f == "object" && f !== null && f.key != null ? Yt("" + f.key) : g.toString(36);
  }
  function nt(f, g, U, V, B) {
    var Q = typeof f;
    (Q === "undefined" || Q === "boolean") && (f = null);
    var q = !1;
    if (f === null) q = !0;
    else
      switch (Q) {
        case "string":
        case "number":
          q = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case v:
            case S:
              q = !0;
          }
      }
    if (q)
      return (
        (q = f),
        (B = B(q)),
        (f = V === "" ? "." + Ue(q, 0) : V),
        Se(B)
          ? ((U = ""),
            f != null && (U = f.replace(ft, "$&/") + "/"),
            nt(B, g, U, "", function (Ae) {
              return Ae;
            }))
          : B != null &&
            (xt(B) &&
              (B = zt(
                B,
                U +
                  (!B.key || (q && q.key === B.key) ? "" : ("" + B.key).replace(ft, "$&/") + "/") +
                  f,
              )),
            g.push(B)),
        1
      );
    if (((q = 0), (V = V === "" ? "." : V + ":"), Se(f)))
      for (var Y = 0; Y < f.length; Y++) {
        Q = f[Y];
        var le = V + Ue(Q, Y);
        q += nt(Q, g, U, le, B);
      }
    else if (((le = ne(f)), typeof le == "function"))
      for (f = le.call(f), Y = 0; !(Q = f.next()).done;)
        ((Q = Q.value), (le = V + Ue(Q, Y++)), (q += nt(Q, g, U, le, B)));
    else if (Q === "object")
      throw (
        (g = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (g === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : g) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return q;
  }
  function dt(f, g, U) {
    if (f == null) return f;
    var V = [],
      B = 0;
    return (
      nt(f, V, "", "", function (Q) {
        return g.call(U, Q, B++);
      }),
      V
    );
  }
  function Le(f) {
    if (f._status === -1) {
      var g = f._result;
      ((g = g()),
        g.then(
          function (U) {
            (f._status === 0 || f._status === -1) && ((f._status = 1), (f._result = U));
          },
          function (U) {
            (f._status === 0 || f._status === -1) && ((f._status = 2), (f._result = U));
          },
        ),
        f._status === -1 && ((f._status = 0), (f._result = g)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ae = { current: null },
    E = { transition: null },
    I = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: E, ReactCurrentOwner: Pe };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (H.Children = {
      map: dt,
      forEach: function (f, g, U) {
        dt(
          f,
          function () {
            g.apply(this, arguments);
          },
          U,
        );
      },
      count: function (f) {
        var g = 0;
        return (
          dt(f, function () {
            g++;
          }),
          g
        );
      },
      toArray: function (f) {
        return (
          dt(f, function (g) {
            return g;
          }) || []
        );
      },
      only: function (f) {
        if (!xt(f))
          throw Error("React.Children.only expected to receive a single React element child.");
        return f;
      },
    }),
    (H.Component = J),
    (H.Fragment = c),
    (H.Profiler = T),
    (H.PureComponent = ct),
    (H.StrictMode = M),
    (H.Suspense = W),
    (H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
    (H.act = C),
    (H.cloneElement = function (f, g, U) {
      if (f == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            f +
            ".",
        );
      var V = Qe({}, f.props),
        B = f.key,
        Q = f.ref,
        q = f._owner;
      if (g != null) {
        if (
          (g.ref !== void 0 && ((Q = g.ref), (q = Pe.current)),
          g.key !== void 0 && (B = "" + g.key),
          f.type && f.type.defaultProps)
        )
          var Y = f.type.defaultProps;
        for (le in g)
          tt.call(g, le) &&
            !Te.hasOwnProperty(le) &&
            (V[le] = g[le] === void 0 && Y !== void 0 ? Y[le] : g[le]);
      }
      var le = arguments.length - 2;
      if (le === 1) V.children = U;
      else if (1 < le) {
        Y = Array(le);
        for (var Ae = 0; Ae < le; Ae++) Y[Ae] = arguments[Ae + 2];
        V.children = Y;
      }
      return { $$typeof: v, type: f.type, key: B, ref: Q, props: V, _owner: q };
    }),
    (H.createContext = function (f) {
      return (
        (f = {
          $$typeof: A,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: O, _context: f }),
        (f.Consumer = f)
      );
    }),
    (H.createElement = Ke),
    (H.createFactory = function (f) {
      var g = Ke.bind(null, f);
      return ((g.type = f), g);
    }),
    (H.createRef = function () {
      return { current: null };
    }),
    (H.forwardRef = function (f) {
      return { $$typeof: X, render: f };
    }),
    (H.isValidElement = xt),
    (H.lazy = function (f) {
      return { $$typeof: D, _payload: { _status: -1, _result: f }, _init: Le };
    }),
    (H.memo = function (f, g) {
      return { $$typeof: me, type: f, compare: g === void 0 ? null : g };
    }),
    (H.startTransition = function (f) {
      var g = E.transition;
      E.transition = {};
      try {
        f();
      } finally {
        E.transition = g;
      }
    }),
    (H.unstable_act = C),
    (H.useCallback = function (f, g) {
      return ae.current.useCallback(f, g);
    }),
    (H.useContext = function (f) {
      return ae.current.useContext(f);
    }),
    (H.useDebugValue = function () {}),
    (H.useDeferredValue = function (f) {
      return ae.current.useDeferredValue(f);
    }),
    (H.useEffect = function (f, g) {
      return ae.current.useEffect(f, g);
    }),
    (H.useId = function () {
      return ae.current.useId();
    }),
    (H.useImperativeHandle = function (f, g, U) {
      return ae.current.useImperativeHandle(f, g, U);
    }),
    (H.useInsertionEffect = function (f, g) {
      return ae.current.useInsertionEffect(f, g);
    }),
    (H.useLayoutEffect = function (f, g) {
      return ae.current.useLayoutEffect(f, g);
    }),
    (H.useMemo = function (f, g) {
      return ae.current.useMemo(f, g);
    }),
    (H.useReducer = function (f, g, U) {
      return ae.current.useReducer(f, g, U);
    }),
    (H.useRef = function (f) {
      return ae.current.useRef(f);
    }),
    (H.useState = function (f) {
      return ae.current.useState(f);
    }),
    (H.useSyncExternalStore = function (f, g, U) {
      return ae.current.useSyncExternalStore(f, g, U);
    }),
    (H.useTransition = function () {
      return ae.current.useTransition();
    }),
    (H.version = "18.3.1"),
    H
  );
}
var La;
function Lu() {
  return (La || ((La = 1), (Cu.exports = Qf())), Cu.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra;
function Kf() {
  if (Ra) return xr;
  Ra = 1;
  var v = Lu(),
    S = Symbol.for("react.element"),
    c = Symbol.for("react.fragment"),
    M = Object.prototype.hasOwnProperty,
    T = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(X, W, me) {
    var D,
      G = {},
      ne = null,
      Be = null;
    (me !== void 0 && (ne = "" + me),
      W.key !== void 0 && (ne = "" + W.key),
      W.ref !== void 0 && (Be = W.ref));
    for (D in W) M.call(W, D) && !O.hasOwnProperty(D) && (G[D] = W[D]);
    if (X && X.defaultProps) for (D in ((W = X.defaultProps), W)) G[D] === void 0 && (G[D] = W[D]);
    return { $$typeof: S, type: X, key: ne, ref: Be, props: G, _owner: T.current };
  }
  return ((xr.Fragment = c), (xr.jsx = A), (xr.jsxs = A), xr);
}
var Oa;
function Gf() {
  return (Oa || ((Oa = 1), (Nu.exports = Kf())), Nu.exports);
}
var h = Gf(),
  se = Lu(),
  Ll = {},
  Pu = { exports: {} },
  De = {},
  ju = { exports: {} },
  zu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ia;
function Xf() {
  return (
    Ia ||
      ((Ia = 1),
      (function (v) {
        function S(E, I) {
          var C = E.length;
          E.push(I);
          e: for (; 0 < C;) {
            var f = (C - 1) >>> 1,
              g = E[f];
            if (0 < T(g, I)) ((E[f] = I), (E[C] = g), (C = f));
            else break e;
          }
        }
        function c(E) {
          return E.length === 0 ? null : E[0];
        }
        function M(E) {
          if (E.length === 0) return null;
          var I = E[0],
            C = E.pop();
          if (C !== I) {
            E[0] = C;
            e: for (var f = 0, g = E.length, U = g >>> 1; f < U;) {
              var V = 2 * (f + 1) - 1,
                B = E[V],
                Q = V + 1,
                q = E[Q];
              if (0 > T(B, C))
                Q < g && 0 > T(q, B)
                  ? ((E[f] = q), (E[Q] = C), (f = Q))
                  : ((E[f] = B), (E[V] = C), (f = V));
              else if (Q < g && 0 > T(q, C)) ((E[f] = q), (E[Q] = C), (f = Q));
              else break e;
            }
          }
          return I;
        }
        function T(E, I) {
          var C = E.sortIndex - I.sortIndex;
          return C !== 0 ? C : E.id - I.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var O = performance;
          v.unstable_now = function () {
            return O.now();
          };
        } else {
          var A = Date,
            X = A.now();
          v.unstable_now = function () {
            return A.now() - X;
          };
        }
        var W = [],
          me = [],
          D = 1,
          G = null,
          ne = 3,
          Be = !1,
          Qe = !1,
          re = !1,
          J = typeof setTimeout == "function" ? setTimeout : null,
          wt = typeof clearTimeout == "function" ? clearTimeout : null,
          ct = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function et(E) {
          for (var I = c(me); I !== null;) {
            if (I.callback === null) M(me);
            else if (I.startTime <= E) (M(me), (I.sortIndex = I.expirationTime), S(W, I));
            else break;
            I = c(me);
          }
        }
        function Se(E) {
          if (((re = !1), et(E), !Qe))
            if (c(W) !== null) ((Qe = !0), Le(tt));
            else {
              var I = c(me);
              I !== null && ae(Se, I.startTime - E);
            }
        }
        function tt(E, I) {
          ((Qe = !1), re && ((re = !1), wt(Ke), (Ke = -1)), (Be = !0));
          var C = ne;
          try {
            for (et(I), G = c(W); G !== null && (!(G.expirationTime > I) || (E && !Yt()));) {
              var f = G.callback;
              if (typeof f == "function") {
                ((G.callback = null), (ne = G.priorityLevel));
                var g = f(G.expirationTime <= I);
                ((I = v.unstable_now()),
                  typeof g == "function" ? (G.callback = g) : G === c(W) && M(W),
                  et(I));
              } else M(W);
              G = c(W);
            }
            if (G !== null) var U = !0;
            else {
              var V = c(me);
              (V !== null && ae(Se, V.startTime - I), (U = !1));
            }
            return U;
          } finally {
            ((G = null), (ne = C), (Be = !1));
          }
        }
        var Pe = !1,
          Te = null,
          Ke = -1,
          zt = 5,
          xt = -1;
        function Yt() {
          return !(v.unstable_now() - xt < zt);
        }
        function ft() {
          if (Te !== null) {
            var E = v.unstable_now();
            xt = E;
            var I = !0;
            try {
              I = Te(!0, E);
            } finally {
              I ? Ue() : ((Pe = !1), (Te = null));
            }
          } else Pe = !1;
        }
        var Ue;
        if (typeof ct == "function")
          Ue = function () {
            ct(ft);
          };
        else if (typeof MessageChannel < "u") {
          var nt = new MessageChannel(),
            dt = nt.port2;
          ((nt.port1.onmessage = ft),
            (Ue = function () {
              dt.postMessage(null);
            }));
        } else
          Ue = function () {
            J(ft, 0);
          };
        function Le(E) {
          ((Te = E), Pe || ((Pe = !0), Ue()));
        }
        function ae(E, I) {
          Ke = J(function () {
            E(v.unstable_now());
          }, I);
        }
        ((v.unstable_IdlePriority = 5),
          (v.unstable_ImmediatePriority = 1),
          (v.unstable_LowPriority = 4),
          (v.unstable_NormalPriority = 3),
          (v.unstable_Profiling = null),
          (v.unstable_UserBlockingPriority = 2),
          (v.unstable_cancelCallback = function (E) {
            E.callback = null;
          }),
          (v.unstable_continueExecution = function () {
            Qe || Be || ((Qe = !0), Le(tt));
          }),
          (v.unstable_forceFrameRate = function (E) {
            0 > E || 125 < E
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (zt = 0 < E ? Math.floor(1e3 / E) : 5);
          }),
          (v.unstable_getCurrentPriorityLevel = function () {
            return ne;
          }),
          (v.unstable_getFirstCallbackNode = function () {
            return c(W);
          }),
          (v.unstable_next = function (E) {
            switch (ne) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = ne;
            }
            var C = ne;
            ne = I;
            try {
              return E();
            } finally {
              ne = C;
            }
          }),
          (v.unstable_pauseExecution = function () {}),
          (v.unstable_requestPaint = function () {}),
          (v.unstable_runWithPriority = function (E, I) {
            switch (E) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                E = 3;
            }
            var C = ne;
            ne = E;
            try {
              return I();
            } finally {
              ne = C;
            }
          }),
          (v.unstable_scheduleCallback = function (E, I, C) {
            var f = v.unstable_now();
            switch (
              (typeof C == "object" && C !== null
                ? ((C = C.delay), (C = typeof C == "number" && 0 < C ? f + C : f))
                : (C = f),
              E)
            ) {
              case 1:
                var g = -1;
                break;
              case 2:
                g = 250;
                break;
              case 5:
                g = 1073741823;
                break;
              case 4:
                g = 1e4;
                break;
              default:
                g = 5e3;
            }
            return (
              (g = C + g),
              (E = {
                id: D++,
                callback: I,
                priorityLevel: E,
                startTime: C,
                expirationTime: g,
                sortIndex: -1,
              }),
              C > f
                ? ((E.sortIndex = C),
                  S(me, E),
                  c(W) === null &&
                    E === c(me) &&
                    (re ? (wt(Ke), (Ke = -1)) : (re = !0), ae(Se, C - f)))
                : ((E.sortIndex = g), S(W, E), Qe || Be || ((Qe = !0), Le(tt))),
              E
            );
          }),
          (v.unstable_shouldYield = Yt),
          (v.unstable_wrapCallback = function (E) {
            var I = ne;
            return function () {
              var C = ne;
              ne = I;
              try {
                return E.apply(this, arguments);
              } finally {
                ne = C;
              }
            };
          }));
      })(zu)),
    zu
  );
}
var Ma;
function Yf() {
  return (Ma || ((Ma = 1), (ju.exports = Xf())), ju.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fa;
function Zf() {
  if (Fa) return De;
  Fa = 1;
  var v = Lu(),
    S = Yf();
  function c(e) {
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
  var M = new Set(),
    T = {};
  function O(e, t) {
    (A(e, t), A(e + "Capture", t));
  }
  function A(e, t) {
    for (T[e] = t, e = 0; e < t.length; e++) M.add(t[e]);
  }
  var X = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    W = Object.prototype.hasOwnProperty,
    me =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    D = {},
    G = {};
  function ne(e) {
    return W.call(G, e) ? !0 : W.call(D, e) ? !1 : me.test(e) ? (G[e] = !0) : ((D[e] = !0), !1);
  }
  function Be(e, t, n, r) {
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
  function Qe(e, t, n, r) {
    if (t === null || typeof t > "u" || Be(e, t, n, r)) return !0;
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
  function re(e, t, n, r, l, i, u) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u));
  }
  var J = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      J[e] = new re(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      J[t] = new re(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      J[e] = new re(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        J[e] = new re(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        J[e] = new re(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      J[e] = new re(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      J[e] = new re(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      J[e] = new re(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      J[e] = new re(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var wt = /[\-:]([a-z])/g;
  function ct(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(wt, ct);
      J[t] = new re(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(wt, ct);
        J[t] = new re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(wt, ct);
      J[t] = new re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      J[e] = new re(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (J.xlinkHref = new re(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      J[e] = new re(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function et(e, t, n, r) {
    var l = J.hasOwnProperty(t) ? J[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (Qe(t, n, l, r) && (n = null),
      r || l === null
        ? ne(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
  var Se = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tt = Symbol.for("react.element"),
    Pe = Symbol.for("react.portal"),
    Te = Symbol.for("react.fragment"),
    Ke = Symbol.for("react.strict_mode"),
    zt = Symbol.for("react.profiler"),
    xt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ft = Symbol.for("react.forward_ref"),
    Ue = Symbol.for("react.suspense"),
    nt = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    ae = Symbol.for("react.offscreen"),
    E = Symbol.iterator;
  function I(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (E && e[E]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var C = Object.assign,
    f;
  function g(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        f = (t && t[1]) || "";
      }
    return (
      `
` +
      f +
      e
    );
  }
  var U = !1;
  function V(e, t) {
    if (!e || U) return "";
    U = !0;
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
          } catch (m) {
            var r = m;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (m) {
            r = m;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (m) {
          r = m;
        }
        e();
      }
    } catch (m) {
      if (m && r && typeof m.stack == "string") {
        for (
          var l = m.stack.split(`
`),
            i = r.stack.split(`
`),
            u = l.length - 1,
            o = i.length - 1;
          1 <= u && 0 <= o && l[u] !== i[o];
        )
          o--;
        for (; 1 <= u && 0 <= o; u--, o--)
          if (l[u] !== i[o]) {
            if (u !== 1 || o !== 1)
              do
                if ((u--, o--, 0 > o || l[u] !== i[o])) {
                  var s =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= u && 0 <= o);
            break;
          }
      }
    } finally {
      ((U = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? g(e) : "";
  }
  function B(e) {
    switch (e.tag) {
      case 5:
        return g(e.type);
      case 16:
        return g("Lazy");
      case 13:
        return g("Suspense");
      case 19:
        return g("SuspenseList");
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
      case Te:
        return "Fragment";
      case Pe:
        return "Portal";
      case zt:
        return "Profiler";
      case Ke:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case nt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt:
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
        case Le:
          ((t = e._payload), (e = e._init));
          try {
            return Q(e(t));
          } catch {}
      }
    return null;
  }
  function q(e) {
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
  function Y(e) {
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
  function Ae(e) {
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
          set: function (u) {
            ((r = "" + u), i.call(this, u));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function kr(e) {
    e._valueTracker || (e._valueTracker = Ae(e));
  }
  function Mu(e) {
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
    return C({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Fu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Y(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function Du(e, t) {
    ((t = t.checked), t != null && et(e, "checked", t, !1));
  }
  function Ol(e, t) {
    Du(e, t);
    var n = Y(t.value),
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
      ? Il(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Il(e, t.type, Y(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Uu(e, t, n) {
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
  function Il(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Mn = Array.isArray;
  function cn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Y(n), t = null, l = 0; l < e.length; l++) {
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
    if (t.dangerouslySetInnerHTML != null) throw Error(c(91));
    return C({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Au(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(c(92));
        if (Mn(n)) {
          if (1 < n.length) throw Error(c(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Y(n) };
  }
  function Hu(e, t) {
    var n = Y(t.value),
      r = Y(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Vu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Wu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Wu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Er,
    $u = (function (e) {
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
          Er = Er || document.createElement("div"),
            Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Er.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Fn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dn = {
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
    Xa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dn).forEach(function (e) {
    Xa.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]));
    });
  });
  function Bu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Dn.hasOwnProperty(e) && Dn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Qu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Bu(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ya = C(
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
      if (Ya[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(c(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(c(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(c(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(c(62));
    }
  }
  function Ul(e, t) {
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
  var Al = null;
  function Hl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Vl = null,
    fn = null,
    dn = null;
  function Ku(e) {
    if ((e = ir(e))) {
      if (typeof Vl != "function") throw Error(c(280));
      var t = e.stateNode;
      t && ((t = Kr(t)), Vl(e.stateNode, e.type, t));
    }
  }
  function Gu(e) {
    fn ? (dn ? dn.push(e) : (dn = [e])) : (fn = e);
  }
  function Xu() {
    if (fn) {
      var e = fn,
        t = dn;
      if (((dn = fn = null), Ku(e), t)) for (e = 0; e < t.length; e++) Ku(t[e]);
    }
  }
  function Yu(e, t) {
    return e(t);
  }
  function Zu() {}
  var Wl = !1;
  function Ju(e, t, n) {
    if (Wl) return e(t, n);
    Wl = !0;
    try {
      return Yu(e, t, n);
    } finally {
      ((Wl = !1), (fn !== null || dn !== null) && (Zu(), Xu()));
    }
  }
  function Un(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Kr(n);
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
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var $l = !1;
  if (X)
    try {
      var An = {};
      (Object.defineProperty(An, "passive", {
        get: function () {
          $l = !0;
        },
      }),
        window.addEventListener("test", An, An),
        window.removeEventListener("test", An, An));
    } catch {
      $l = !1;
    }
  function Za(e, t, n, r, l, i, u, o, s) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (w) {
      this.onError(w);
    }
  }
  var Hn = !1,
    _r = null,
    Nr = !1,
    Bl = null,
    Ja = {
      onError: function (e) {
        ((Hn = !0), (_r = e));
      },
    };
  function qa(e, t, n, r, l, i, u, o, s) {
    ((Hn = !1), (_r = null), Za.apply(Ja, arguments));
  }
  function ba(e, t, n, r, l, i, u, o, s) {
    if ((qa.apply(this, arguments), Hn)) {
      if (Hn) {
        var m = _r;
        ((Hn = !1), (_r = null));
      } else throw Error(c(198));
      Nr || ((Nr = !0), (Bl = m));
    }
  }
  function Zt(e) {
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
  function qu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function bu(e) {
    if (Zt(e) !== e) throw Error(c(188));
  }
  function ec(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Zt(e)), t === null)) throw Error(c(188));
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
          if (i === n) return (bu(l), e);
          if (i === r) return (bu(l), t);
          i = i.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== r.return) ((n = l), (r = i));
      else {
        for (var u = !1, o = l.child; o;) {
          if (o === n) {
            ((u = !0), (n = l), (r = i));
            break;
          }
          if (o === r) {
            ((u = !0), (r = l), (n = i));
            break;
          }
          o = o.sibling;
        }
        if (!u) {
          for (o = i.child; o;) {
            if (o === n) {
              ((u = !0), (n = i), (r = l));
              break;
            }
            if (o === r) {
              ((u = !0), (r = i), (n = l));
              break;
            }
            o = o.sibling;
          }
          if (!u) throw Error(c(189));
        }
      }
      if (n.alternate !== r) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function eo(e) {
    return ((e = ec(e)), e !== null ? to(e) : null);
  }
  function to(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = to(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var no = S.unstable_scheduleCallback,
    ro = S.unstable_cancelCallback,
    tc = S.unstable_shouldYield,
    nc = S.unstable_requestPaint,
    fe = S.unstable_now,
    rc = S.unstable_getCurrentPriorityLevel,
    Ql = S.unstable_ImmediatePriority,
    lo = S.unstable_UserBlockingPriority,
    Cr = S.unstable_NormalPriority,
    lc = S.unstable_LowPriority,
    io = S.unstable_IdlePriority,
    Pr = null,
    pt = null;
  function ic(e) {
    if (pt && typeof pt.onCommitFiberRoot == "function")
      try {
        pt.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var rt = Math.clz32 ? Math.clz32 : sc,
    uc = Math.log,
    oc = Math.LN2;
  function sc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((uc(e) / oc) | 0)) | 0);
  }
  var jr = 64,
    zr = 4194304;
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
  function Tr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var o = u & ~l;
      o !== 0 ? (r = Vn(o)) : ((i &= u), i !== 0 && (r = Vn(i)));
    } else ((u = n & ~l), u !== 0 ? (r = Vn(u)) : i !== 0 && (r = Vn(i)));
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
        ((n = 31 - rt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function ac(e, t) {
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
  function cc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
      0 < i;
    ) {
      var u = 31 - rt(i),
        o = 1 << u,
        s = l[u];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[u] = ac(o, t))
        : s <= t && (e.expiredLanes |= o),
        (i &= ~o));
    }
  }
  function Kl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function uo() {
    var e = jr;
    return ((jr <<= 1), (jr & 4194240) === 0 && (jr = 64), e);
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Wn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - rt(t)),
      (e[t] = n));
  }
  function fc(e, t) {
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
      var l = 31 - rt(n),
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - rt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var Z = 0;
  function oo(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var so,
    Yl,
    ao,
    co,
    fo,
    Zl = !1,
    Lr = [],
    Tt = null,
    Lt = null,
    Rt = null,
    $n = new Map(),
    Bn = new Map(),
    Ot = [],
    dc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function po(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tt = null;
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
        $n.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bn.delete(t.pointerId);
    }
  }
  function Qn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = ir(t)), t !== null && Yl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function pc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Tt = Qn(Tt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Lt = Qn(Lt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Rt = Qn(Rt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return ($n.set(i, Qn($n.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((i = l.pointerId), Bn.set(i, Qn(Bn.get(i) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function mo(e) {
    var t = Jt(e.target);
    if (t !== null) {
      var n = Zt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = qu(n)), t !== null)) {
            ((e.blockedOn = t),
              fo(e.priority, function () {
                ao(n);
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
      var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Al = r), n.target.dispatchEvent(r), (Al = null));
      } else return ((t = ir(n)), t !== null && Yl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ho(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function mc() {
    ((Zl = !1),
      Tt !== null && Rr(Tt) && (Tt = null),
      Lt !== null && Rr(Lt) && (Lt = null),
      Rt !== null && Rr(Rt) && (Rt = null),
      $n.forEach(ho),
      Bn.forEach(ho));
  }
  function Kn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zl || ((Zl = !0), S.unstable_scheduleCallback(S.unstable_NormalPriority, mc)));
  }
  function Gn(e) {
    function t(l) {
      return Kn(l, e);
    }
    if (0 < Lr.length) {
      Kn(Lr[0], e);
      for (var n = 1; n < Lr.length; n++) {
        var r = Lr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Tt !== null && Kn(Tt, e),
        Lt !== null && Kn(Lt, e),
        Rt !== null && Kn(Rt, e),
        $n.forEach(t),
        Bn.forEach(t),
        n = 0;
      n < Ot.length;
      n++
    )
      ((r = Ot[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null);)
      (mo(n), n.blockedOn === null && Ot.shift());
  }
  var pn = Se.ReactCurrentBatchConfig,
    Or = !0;
  function hc(e, t, n, r) {
    var l = Z,
      i = pn.transition;
    pn.transition = null;
    try {
      ((Z = 1), Jl(e, t, n, r));
    } finally {
      ((Z = l), (pn.transition = i));
    }
  }
  function vc(e, t, n, r) {
    var l = Z,
      i = pn.transition;
    pn.transition = null;
    try {
      ((Z = 4), Jl(e, t, n, r));
    } finally {
      ((Z = l), (pn.transition = i));
    }
  }
  function Jl(e, t, n, r) {
    if (Or) {
      var l = ql(e, t, n, r);
      if (l === null) (hi(e, t, r, Ir, n), po(e, r));
      else if (pc(l, e, t, n, r)) r.stopPropagation();
      else if ((po(e, r), t & 4 && -1 < dc.indexOf(e))) {
        for (; l !== null;) {
          var i = ir(l);
          if (
            (i !== null && so(i), (i = ql(e, t, n, r)), i === null && hi(e, t, r, Ir, n), i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else hi(e, t, r, null, n);
    }
  }
  var Ir = null;
  function ql(e, t, n, r) {
    if (((Ir = null), (e = Hl(r)), (e = Jt(e)), e !== null))
      if (((t = Zt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = qu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Ir = e), null);
  }
  function vo(e) {
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
        switch (rc()) {
          case Ql:
            return 1;
          case lo:
            return 4;
          case Cr:
          case lc:
            return 16;
          case io:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var It = null,
    bl = null,
    Mr = null;
  function yo() {
    if (Mr) return Mr;
    var e,
      t = bl,
      n = t.length,
      r,
      l = "value" in It ? It.value : It.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
    return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Fr(e) {
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
  function go() {
    return !1;
  }
  function He(e) {
    function t(n, r, l, i, u) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null));
      for (var o in e) e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Dr
          : go),
        (this.isPropagationStopped = go),
        this
      );
    }
    return (
      C(t.prototype, {
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
  var mn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ei = He(mn),
    Xn = C({}, mn, { view: 0, detail: 0 }),
    yc = He(Xn),
    ti,
    ni,
    Yn,
    Ur = C({}, Xn, {
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
      getModifierState: li,
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
                ? ((ti = e.screenX - Yn.screenX), (ni = e.screenY - Yn.screenY))
                : (ni = ti = 0),
              (Yn = e)),
            ti);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ni;
      },
    }),
    wo = He(Ur),
    gc = C({}, Ur, { dataTransfer: 0 }),
    wc = He(gc),
    xc = C({}, Xn, { relatedTarget: 0 }),
    ri = He(xc),
    kc = C({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sc = He(kc),
    Ec = C({}, mn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    _c = He(Ec),
    Nc = C({}, mn, { data: 0 }),
    xo = He(Nc),
    Cc = {
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
    Pc = {
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
    jc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function zc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = jc[e]) ? !!t[e] : !1;
  }
  function li() {
    return zc;
  }
  var Tc = C({}, Xn, {
      key: function (e) {
        if (e.key) {
          var t = Cc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Pc[e.keyCode] || "Unidentified"
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
      getModifierState: li,
      charCode: function (e) {
        return e.type === "keypress" ? Fr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Lc = He(Tc),
    Rc = C({}, Ur, {
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
    ko = He(Rc),
    Oc = C({}, Xn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: li,
    }),
    Ic = He(Oc),
    Mc = C({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fc = He(Mc),
    Dc = C({}, Ur, {
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
    Uc = He(Dc),
    Ac = [9, 13, 27, 32],
    ii = X && "CompositionEvent" in window,
    Zn = null;
  X && "documentMode" in document && (Zn = document.documentMode);
  var Hc = X && "TextEvent" in window && !Zn,
    So = X && (!ii || (Zn && 8 < Zn && 11 >= Zn)),
    Eo = " ",
    _o = !1;
  function No(e, t) {
    switch (e) {
      case "keyup":
        return Ac.indexOf(t.keyCode) !== -1;
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
  function Co(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var hn = !1;
  function Vc(e, t) {
    switch (e) {
      case "compositionend":
        return Co(t);
      case "keypress":
        return t.which !== 32 ? null : ((_o = !0), Eo);
      case "textInput":
        return ((e = t.data), e === Eo && _o ? null : e);
      default:
        return null;
    }
  }
  function Wc(e, t) {
    if (hn)
      return e === "compositionend" || (!ii && No(e, t))
        ? ((e = yo()), (Mr = bl = It = null), (hn = !1), e)
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
        return So && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var $c = {
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
  function Po(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!$c[e.type] : t === "textarea";
  }
  function jo(e, t, n, r) {
    (Gu(r),
      (t = $r(t, "onChange")),
      0 < t.length &&
        ((n = new ei("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Jn = null,
    qn = null;
  function Bc(e) {
    Ko(e, 0);
  }
  function Ar(e) {
    var t = xn(e);
    if (Mu(t)) return e;
  }
  function Qc(e, t) {
    if (e === "change") return t;
  }
  var zo = !1;
  if (X) {
    var ui;
    if (X) {
      var oi = "oninput" in document;
      if (!oi) {
        var To = document.createElement("div");
        (To.setAttribute("oninput", "return;"), (oi = typeof To.oninput == "function"));
      }
      ui = oi;
    } else ui = !1;
    zo = ui && (!document.documentMode || 9 < document.documentMode);
  }
  function Lo() {
    Jn && (Jn.detachEvent("onpropertychange", Ro), (qn = Jn = null));
  }
  function Ro(e) {
    if (e.propertyName === "value" && Ar(qn)) {
      var t = [];
      (jo(t, qn, e, Hl(e)), Ju(Bc, t));
    }
  }
  function Kc(e, t, n) {
    e === "focusin"
      ? (Lo(), (Jn = t), (qn = n), Jn.attachEvent("onpropertychange", Ro))
      : e === "focusout" && Lo();
  }
  function Gc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ar(qn);
  }
  function Xc(e, t) {
    if (e === "click") return Ar(t);
  }
  function Yc(e, t) {
    if (e === "input" || e === "change") return Ar(t);
  }
  function Zc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var lt = typeof Object.is == "function" ? Object.is : Zc;
  function bn(e, t) {
    if (lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!W.call(t, l) || !lt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Oo(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Io(e, t) {
    var n = Oo(e);
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
      n = Oo(n);
    }
  }
  function Mo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Mo(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Fo() {
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
  function si(e) {
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
  function Jc(e) {
    var t = Fo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Mo(n.ownerDocument.documentElement, n)) {
      if (r !== null && si(n)) {
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
            (l = Io(n, i)));
          var u = Io(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode);)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var qc = X && "documentMode" in document && 11 >= document.documentMode,
    vn = null,
    ai = null,
    er = null,
    ci = !1;
  function Do(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ci ||
      vn == null ||
      vn !== Sr(r) ||
      ((r = vn),
      "selectionStart" in r && si(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (er && bn(er, r)) ||
        ((er = r),
        (r = $r(ai, "onSelect")),
        0 < r.length &&
          ((t = new ei("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = vn))));
  }
  function Hr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var yn = {
      animationend: Hr("Animation", "AnimationEnd"),
      animationiteration: Hr("Animation", "AnimationIteration"),
      animationstart: Hr("Animation", "AnimationStart"),
      transitionend: Hr("Transition", "TransitionEnd"),
    },
    fi = {},
    Uo = {};
  X &&
    ((Uo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete yn.animationend.animation,
      delete yn.animationiteration.animation,
      delete yn.animationstart.animation),
    "TransitionEvent" in window || delete yn.transitionend.transition);
  function Vr(e) {
    if (fi[e]) return fi[e];
    if (!yn[e]) return e;
    var t = yn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Uo) return (fi[e] = t[n]);
    return e;
  }
  var Ao = Vr("animationend"),
    Ho = Vr("animationiteration"),
    Vo = Vr("animationstart"),
    Wo = Vr("transitionend"),
    $o = new Map(),
    Bo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Mt(e, t) {
    ($o.set(e, t), O(t, [e]));
  }
  for (var di = 0; di < Bo.length; di++) {
    var pi = Bo[di],
      bc = pi.toLowerCase(),
      ef = pi[0].toUpperCase() + pi.slice(1);
    Mt(bc, "on" + ef);
  }
  (Mt(Ao, "onAnimationEnd"),
    Mt(Ho, "onAnimationIteration"),
    Mt(Vo, "onAnimationStart"),
    Mt("dblclick", "onDoubleClick"),
    Mt("focusin", "onFocus"),
    Mt("focusout", "onBlur"),
    Mt(Wo, "onTransitionEnd"),
    A("onMouseEnter", ["mouseout", "mouseover"]),
    A("onMouseLeave", ["mouseout", "mouseover"]),
    A("onPointerEnter", ["pointerout", "pointerover"]),
    A("onPointerLeave", ["pointerout", "pointerover"]),
    O("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    O(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    O("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    O("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    O(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    O(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var tr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    tf = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
  function Qo(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), ba(r, t, void 0, e), (e.currentTarget = null));
  }
  function Ko(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var o = r[u],
              s = o.instance,
              m = o.currentTarget;
            if (((o = o.listener), s !== i && l.isPropagationStopped())) break e;
            (Qo(l, o, m), (i = s));
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((o = r[u]),
              (s = o.instance),
              (m = o.currentTarget),
              (o = o.listener),
              s !== i && l.isPropagationStopped())
            )
              break e;
            (Qo(l, o, m), (i = s));
          }
      }
    }
    if (Nr) throw ((e = Bl), (Nr = !1), (Bl = null), e);
  }
  function ee(e, t) {
    var n = t[ki];
    n === void 0 && (n = t[ki] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Go(t, e, 2, !1), n.add(r));
  }
  function mi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Go(n, e, r, t));
  }
  var Wr = "_reactListening" + Math.random().toString(36).slice(2);
  function nr(e) {
    if (!e[Wr]) {
      ((e[Wr] = !0),
        M.forEach(function (n) {
          n !== "selectionchange" && (tf.has(n) || mi(n, !1, e), mi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wr] || ((t[Wr] = !0), mi("selectionchange", !1, t));
    }
  }
  function Go(e, t, n, r) {
    switch (vo(t)) {
      case 1:
        var l = hc;
        break;
      case 4:
        l = vc;
        break;
      default:
        l = Jl;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !$l || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function hi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var o = r.stateNode.containerInfo;
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null;) {
              var s = u.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = u.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; o !== null;) {
            if (((u = Jt(o)), u === null)) return;
            if (((s = u.tag), s === 5 || s === 6)) {
              r = i = u;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Ju(function () {
      var m = i,
        w = Hl(n),
        x = [];
      e: {
        var y = $o.get(e);
        if (y !== void 0) {
          var _ = ei,
            P = e;
          switch (e) {
            case "keypress":
              if (Fr(n) === 0) break e;
            case "keydown":
            case "keyup":
              _ = Lc;
              break;
            case "focusin":
              ((P = "focus"), (_ = ri));
              break;
            case "focusout":
              ((P = "blur"), (_ = ri));
              break;
            case "beforeblur":
            case "afterblur":
              _ = ri;
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
              _ = wo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = wc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = Ic;
              break;
            case Ao:
            case Ho:
            case Vo:
              _ = Sc;
              break;
            case Wo:
              _ = Fc;
              break;
            case "scroll":
              _ = yc;
              break;
            case "wheel":
              _ = Uc;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = _c;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = ko;
          }
          var j = (t & 4) !== 0,
            de = !j && e === "scroll",
            d = j ? (y !== null ? y + "Capture" : null) : y;
          j = [];
          for (var a = m, p; a !== null;) {
            p = a;
            var k = p.stateNode;
            if (
              (p.tag === 5 &&
                k !== null &&
                ((p = k), d !== null && ((k = Un(a, d)), k != null && j.push(rr(a, k, p)))),
              de)
            )
              break;
            a = a.return;
          }
          0 < j.length && ((y = new _(y, P, null, n, w)), x.push({ event: y, listeners: j }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === "mouseover" || e === "pointerover"),
            (_ = e === "mouseout" || e === "pointerout"),
            y && n !== Al && (P = n.relatedTarget || n.fromElement) && (Jt(P) || P[kt]))
          )
            break e;
          if (
            (_ || y) &&
            ((y =
              w.window === w
                ? w
                : (y = w.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            _
              ? ((P = n.relatedTarget || n.toElement),
                (_ = m),
                (P = P ? Jt(P) : null),
                P !== null &&
                  ((de = Zt(P)), P !== de || (P.tag !== 5 && P.tag !== 6)) &&
                  (P = null))
              : ((_ = null), (P = m)),
            _ !== P)
          ) {
            if (
              ((j = wo),
              (k = "onMouseLeave"),
              (d = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((j = ko), (k = "onPointerLeave"), (d = "onPointerEnter"), (a = "pointer")),
              (de = _ == null ? y : xn(_)),
              (p = P == null ? y : xn(P)),
              (y = new j(k, a + "leave", _, n, w)),
              (y.target = de),
              (y.relatedTarget = p),
              (k = null),
              Jt(w) === m &&
                ((j = new j(d, a + "enter", P, n, w)),
                (j.target = p),
                (j.relatedTarget = de),
                (k = j)),
              (de = k),
              _ && P)
            )
              t: {
                for (j = _, d = P, a = 0, p = j; p; p = gn(p)) a++;
                for (p = 0, k = d; k; k = gn(k)) p++;
                for (; 0 < a - p;) ((j = gn(j)), a--);
                for (; 0 < p - a;) ((d = gn(d)), p--);
                for (; a--;) {
                  if (j === d || (d !== null && j === d.alternate)) break t;
                  ((j = gn(j)), (d = gn(d)));
                }
                j = null;
              }
            else j = null;
            (_ !== null && Xo(x, y, _, j, !1), P !== null && de !== null && Xo(x, de, P, j, !0));
          }
        }
        e: {
          if (
            ((y = m ? xn(m) : window),
            (_ = y.nodeName && y.nodeName.toLowerCase()),
            _ === "select" || (_ === "input" && y.type === "file"))
          )
            var z = Qc;
          else if (Po(y))
            if (zo) z = Yc;
            else {
              z = Gc;
              var L = Kc;
            }
          else
            (_ = y.nodeName) &&
              _.toLowerCase() === "input" &&
              (y.type === "checkbox" || y.type === "radio") &&
              (z = Xc);
          if (z && (z = z(e, m))) {
            jo(x, z, n, w);
            break e;
          }
          (L && L(e, y, m),
            e === "focusout" &&
              (L = y._wrapperState) &&
              L.controlled &&
              y.type === "number" &&
              Il(y, "number", y.value));
        }
        switch (((L = m ? xn(m) : window), e)) {
          case "focusin":
            (Po(L) || L.contentEditable === "true") && ((vn = L), (ai = m), (er = null));
            break;
          case "focusout":
            er = ai = vn = null;
            break;
          case "mousedown":
            ci = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ci = !1), Do(x, n, w));
            break;
          case "selectionchange":
            if (qc) break;
          case "keydown":
          case "keyup":
            Do(x, n, w);
        }
        var R;
        if (ii)
          e: {
            switch (e) {
              case "compositionstart":
                var F = "onCompositionStart";
                break e;
              case "compositionend":
                F = "onCompositionEnd";
                break e;
              case "compositionupdate":
                F = "onCompositionUpdate";
                break e;
            }
            F = void 0;
          }
        else
          hn
            ? No(e, n) && (F = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
        (F &&
          (So &&
            n.locale !== "ko" &&
            (hn || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && hn && (R = yo())
              : ((It = w), (bl = "value" in It ? It.value : It.textContent), (hn = !0))),
          (L = $r(m, F)),
          0 < L.length &&
            ((F = new xo(F, e, null, n, w)),
            x.push({ event: F, listeners: L }),
            R ? (F.data = R) : ((R = Co(n)), R !== null && (F.data = R)))),
          (R = Hc ? Vc(e, n) : Wc(e, n)) &&
            ((m = $r(m, "onBeforeInput")),
            0 < m.length &&
              ((w = new xo("onBeforeInput", "beforeinput", null, n, w)),
              x.push({ event: w, listeners: m }),
              (w.data = R))));
      }
      Ko(x, t);
    });
  }
  function rr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function $r(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Un(e, n)),
        i != null && r.unshift(rr(e, i, l)),
        (i = Un(e, t)),
        i != null && r.push(rr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function gn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Xo(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r;) {
      var o = n,
        s = o.alternate,
        m = o.stateNode;
      if (s !== null && s === r) break;
      (o.tag === 5 &&
        m !== null &&
        ((o = m),
        l
          ? ((s = Un(n, i)), s != null && u.unshift(rr(n, s, o)))
          : l || ((s = Un(n, i)), s != null && u.push(rr(n, s, o)))),
        (n = n.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var nf = /\r\n?/g,
    rf = /\u0000|\uFFFD/g;
  function Yo(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        nf,
        `
`,
      )
      .replace(rf, "");
  }
  function Br(e, t, n) {
    if (((t = Yo(t)), Yo(e) !== t && n)) throw Error(c(425));
  }
  function Qr() {}
  var vi = null,
    yi = null;
  function gi(e, t) {
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
  var wi = typeof setTimeout == "function" ? setTimeout : void 0,
    lf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zo = typeof Promise == "function" ? Promise : void 0,
    uf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zo < "u"
          ? function (e) {
              return Zo.resolve(null).then(e).catch(of);
            }
          : wi;
  function of(e) {
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
            (e.removeChild(l), Gn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Gn(t);
  }
  function Ft(e) {
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
  function Jo(e) {
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
  var wn = Math.random().toString(36).slice(2),
    mt = "__reactFiber$" + wn,
    lr = "__reactProps$" + wn,
    kt = "__reactContainer$" + wn,
    ki = "__reactEvents$" + wn,
    sf = "__reactListeners$" + wn,
    af = "__reactHandles$" + wn;
  function Jt(e) {
    var t = e[mt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[kt] || n[mt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Jo(e); e !== null;) {
            if ((n = e[mt])) return n;
            e = Jo(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function ir(e) {
    return (
      (e = e[mt] || e[kt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function xn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Kr(e) {
    return e[lr] || null;
  }
  var Si = [],
    kn = -1;
  function Dt(e) {
    return { current: e };
  }
  function te(e) {
    0 > kn || ((e.current = Si[kn]), (Si[kn] = null), kn--);
  }
  function b(e, t) {
    (kn++, (Si[kn] = e.current), (e.current = t));
  }
  var Ut = {},
    Ee = Dt(Ut),
    Re = Dt(!1),
    qt = Ut;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ut;
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
  function Oe(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Gr() {
    (te(Re), te(Ee));
  }
  function qo(e, t, n) {
    if (Ee.current !== Ut) throw Error(c(168));
    (b(Ee, t), b(Re, n));
  }
  function bo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(c(108, q(e) || "Unknown", l));
    return C({}, n, r);
  }
  function Xr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ut),
      (qt = Ee.current),
      b(Ee, e),
      b(Re, Re.current),
      !0
    );
  }
  function es(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(c(169));
    (n
      ? ((e = bo(e, t, qt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        te(Re),
        te(Ee),
        b(Ee, e))
      : te(Re),
      b(Re, n));
  }
  var St = null,
    Yr = !1,
    Ei = !1;
  function ts(e) {
    St === null ? (St = [e]) : St.push(e);
  }
  function cf(e) {
    ((Yr = !0), ts(e));
  }
  function At() {
    if (!Ei && St !== null) {
      Ei = !0;
      var e = 0,
        t = Z;
      try {
        var n = St;
        for (Z = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((St = null), (Yr = !1));
      } catch (l) {
        throw (St !== null && (St = St.slice(e + 1)), no(Ql, At), l);
      } finally {
        ((Z = t), (Ei = !1));
      }
    }
    return null;
  }
  var En = [],
    _n = 0,
    Zr = null,
    Jr = 0,
    Ge = [],
    Xe = 0,
    bt = null,
    Et = 1,
    _t = "";
  function en(e, t) {
    ((En[_n++] = Jr), (En[_n++] = Zr), (Zr = e), (Jr = t));
  }
  function ns(e, t, n) {
    ((Ge[Xe++] = Et), (Ge[Xe++] = _t), (Ge[Xe++] = bt), (bt = e));
    var r = Et;
    e = _t;
    var l = 32 - rt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - rt(t) + l;
    if (30 < i) {
      var u = l - (l % 5);
      ((i = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Et = (1 << (32 - rt(t) + l)) | (n << l) | r),
        (_t = i + e));
    } else ((Et = (1 << i) | (n << l) | r), (_t = e));
  }
  function _i(e) {
    e.return !== null && (en(e, 1), ns(e, 1, 0));
  }
  function Ni(e) {
    for (; e === Zr;) ((Zr = En[--_n]), (En[_n] = null), (Jr = En[--_n]), (En[_n] = null));
    for (; e === bt;)
      ((bt = Ge[--Xe]),
        (Ge[Xe] = null),
        (_t = Ge[--Xe]),
        (Ge[Xe] = null),
        (Et = Ge[--Xe]),
        (Ge[Xe] = null));
  }
  var Ve = null,
    We = null,
    ie = !1,
    it = null;
  function rs(e, t) {
    var n = qe(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ls(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Ve = e), (We = Ft(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ve = e), (We = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = bt !== null ? { id: Et, overflow: _t } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = qe(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ve = e),
              (We = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ci(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Pi(e) {
    if (ie) {
      var t = We;
      if (t) {
        var n = t;
        if (!ls(e, t)) {
          if (Ci(e)) throw Error(c(418));
          t = Ft(n.nextSibling);
          var r = Ve;
          t && ls(e, t) ? rs(r, n) : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ve = e));
        }
      } else {
        if (Ci(e)) throw Error(c(418));
        ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ve = e));
      }
    }
  }
  function is(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ve = e;
  }
  function qr(e) {
    if (e !== Ve) return !1;
    if (!ie) return (is(e), (ie = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
      t && (t = We))
    ) {
      if (Ci(e)) throw (us(), Error(c(418)));
      for (; t;) (rs(e, t), (t = Ft(t.nextSibling)));
    }
    if ((is(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                We = Ft(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        We = null;
      }
    } else We = Ve ? Ft(e.stateNode.nextSibling) : null;
    return !0;
  }
  function us() {
    for (var e = We; e;) e = Ft(e.nextSibling);
  }
  function Nn() {
    ((We = Ve = null), (ie = !1));
  }
  function ji(e) {
    it === null ? (it = [e]) : it.push(e);
  }
  var ff = Se.ReactCurrentBatchConfig;
  function ur(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(c(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(c(147, e));
        var l = r,
          i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
          ? t.ref
          : ((t = function (u) {
              var o = l.refs;
              u === null ? delete o[i] : (o[i] = u);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(c(284));
      if (!n._owner) throw Error(c(290, e));
    }
    return e;
  }
  function br(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function os(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ss(e) {
    function t(d, a) {
      if (e) {
        var p = d.deletions;
        p === null ? ((d.deletions = [a]), (d.flags |= 16)) : p.push(a);
      }
    }
    function n(d, a) {
      if (!e) return null;
      for (; a !== null;) (t(d, a), (a = a.sibling));
      return null;
    }
    function r(d, a) {
      for (d = new Map(); a !== null;)
        (a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling));
      return d;
    }
    function l(d, a) {
      return ((d = Gt(d, a)), (d.index = 0), (d.sibling = null), d);
    }
    function i(d, a, p) {
      return (
        (d.index = p),
        e
          ? ((p = d.alternate),
            p !== null ? ((p = p.index), p < a ? ((d.flags |= 2), a) : p) : ((d.flags |= 2), a))
          : ((d.flags |= 1048576), a)
      );
    }
    function u(d) {
      return (e && d.alternate === null && (d.flags |= 2), d);
    }
    function o(d, a, p, k) {
      return a === null || a.tag !== 6
        ? ((a = wu(p, d.mode, k)), (a.return = d), a)
        : ((a = l(a, p)), (a.return = d), a);
    }
    function s(d, a, p, k) {
      var z = p.type;
      return z === Te
        ? w(d, a, p.props.children, k, p.key)
        : a !== null &&
            (a.elementType === z ||
              (typeof z == "object" && z !== null && z.$$typeof === Le && os(z) === a.type))
          ? ((k = l(a, p.props)), (k.ref = ur(d, a, p)), (k.return = d), k)
          : ((k = El(p.type, p.key, p.props, null, d.mode, k)),
            (k.ref = ur(d, a, p)),
            (k.return = d),
            k);
    }
    function m(d, a, p, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== p.containerInfo ||
        a.stateNode.implementation !== p.implementation
        ? ((a = xu(p, d.mode, k)), (a.return = d), a)
        : ((a = l(a, p.children || [])), (a.return = d), a);
    }
    function w(d, a, p, k, z) {
      return a === null || a.tag !== 7
        ? ((a = an(p, d.mode, k, z)), (a.return = d), a)
        : ((a = l(a, p)), (a.return = d), a);
    }
    function x(d, a, p) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = wu("" + a, d.mode, p)), (a.return = d), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case tt:
            return (
              (p = El(a.type, a.key, a.props, null, d.mode, p)),
              (p.ref = ur(d, null, a)),
              (p.return = d),
              p
            );
          case Pe:
            return ((a = xu(a, d.mode, p)), (a.return = d), a);
          case Le:
            var k = a._init;
            return x(d, k(a._payload), p);
        }
        if (Mn(a) || I(a)) return ((a = an(a, d.mode, p, null)), (a.return = d), a);
        br(d, a);
      }
      return null;
    }
    function y(d, a, p, k) {
      var z = a !== null ? a.key : null;
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return z !== null ? null : o(d, a, "" + p, k);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case tt:
            return p.key === z ? s(d, a, p, k) : null;
          case Pe:
            return p.key === z ? m(d, a, p, k) : null;
          case Le:
            return ((z = p._init), y(d, a, z(p._payload), k));
        }
        if (Mn(p) || I(p)) return z !== null ? null : w(d, a, p, k, null);
        br(d, p);
      }
      return null;
    }
    function _(d, a, p, k, z) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((d = d.get(p) || null), o(a, d, "" + k, z));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case tt:
            return ((d = d.get(k.key === null ? p : k.key) || null), s(a, d, k, z));
          case Pe:
            return ((d = d.get(k.key === null ? p : k.key) || null), m(a, d, k, z));
          case Le:
            var L = k._init;
            return _(d, a, p, L(k._payload), z);
        }
        if (Mn(k) || I(k)) return ((d = d.get(p) || null), w(a, d, k, z, null));
        br(a, k);
      }
      return null;
    }
    function P(d, a, p, k) {
      for (var z = null, L = null, R = a, F = (a = 0), we = null; R !== null && F < p.length; F++) {
        R.index > F ? ((we = R), (R = null)) : (we = R.sibling);
        var K = y(d, R, p[F], k);
        if (K === null) {
          R === null && (R = we);
          break;
        }
        (e && R && K.alternate === null && t(d, R),
          (a = i(K, a, F)),
          L === null ? (z = K) : (L.sibling = K),
          (L = K),
          (R = we));
      }
      if (F === p.length) return (n(d, R), ie && en(d, F), z);
      if (R === null) {
        for (; F < p.length; F++)
          ((R = x(d, p[F], k)),
            R !== null && ((a = i(R, a, F)), L === null ? (z = R) : (L.sibling = R), (L = R)));
        return (ie && en(d, F), z);
      }
      for (R = r(d, R); F < p.length; F++)
        ((we = _(R, d, F, p[F], k)),
          we !== null &&
            (e && we.alternate !== null && R.delete(we.key === null ? F : we.key),
            (a = i(we, a, F)),
            L === null ? (z = we) : (L.sibling = we),
            (L = we)));
      return (
        e &&
          R.forEach(function (Xt) {
            return t(d, Xt);
          }),
        ie && en(d, F),
        z
      );
    }
    function j(d, a, p, k) {
      var z = I(p);
      if (typeof z != "function") throw Error(c(150));
      if (((p = z.call(p)), p == null)) throw Error(c(151));
      for (
        var L = (z = null), R = a, F = (a = 0), we = null, K = p.next();
        R !== null && !K.done;
        F++, K = p.next()
      ) {
        R.index > F ? ((we = R), (R = null)) : (we = R.sibling);
        var Xt = y(d, R, K.value, k);
        if (Xt === null) {
          R === null && (R = we);
          break;
        }
        (e && R && Xt.alternate === null && t(d, R),
          (a = i(Xt, a, F)),
          L === null ? (z = Xt) : (L.sibling = Xt),
          (L = Xt),
          (R = we));
      }
      if (K.done) return (n(d, R), ie && en(d, F), z);
      if (R === null) {
        for (; !K.done; F++, K = p.next())
          ((K = x(d, K.value, k)),
            K !== null && ((a = i(K, a, F)), L === null ? (z = K) : (L.sibling = K), (L = K)));
        return (ie && en(d, F), z);
      }
      for (R = r(d, R); !K.done; F++, K = p.next())
        ((K = _(R, d, F, K.value, k)),
          K !== null &&
            (e && K.alternate !== null && R.delete(K.key === null ? F : K.key),
            (a = i(K, a, F)),
            L === null ? (z = K) : (L.sibling = K),
            (L = K)));
      return (
        e &&
          R.forEach(function (Bf) {
            return t(d, Bf);
          }),
        ie && en(d, F),
        z
      );
    }
    function de(d, a, p, k) {
      if (
        (typeof p == "object" &&
          p !== null &&
          p.type === Te &&
          p.key === null &&
          (p = p.props.children),
        typeof p == "object" && p !== null)
      ) {
        switch (p.$$typeof) {
          case tt:
            e: {
              for (var z = p.key, L = a; L !== null;) {
                if (L.key === z) {
                  if (((z = p.type), z === Te)) {
                    if (L.tag === 7) {
                      (n(d, L.sibling), (a = l(L, p.props.children)), (a.return = d), (d = a));
                      break e;
                    }
                  } else if (
                    L.elementType === z ||
                    (typeof z == "object" && z !== null && z.$$typeof === Le && os(z) === L.type)
                  ) {
                    (n(d, L.sibling),
                      (a = l(L, p.props)),
                      (a.ref = ur(d, L, p)),
                      (a.return = d),
                      (d = a));
                    break e;
                  }
                  n(d, L);
                  break;
                } else t(d, L);
                L = L.sibling;
              }
              p.type === Te
                ? ((a = an(p.props.children, d.mode, k, p.key)), (a.return = d), (d = a))
                : ((k = El(p.type, p.key, p.props, null, d.mode, k)),
                  (k.ref = ur(d, a, p)),
                  (k.return = d),
                  (d = k));
            }
            return u(d);
          case Pe:
            e: {
              for (L = p.key; a !== null;) {
                if (a.key === L)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === p.containerInfo &&
                    a.stateNode.implementation === p.implementation
                  ) {
                    (n(d, a.sibling), (a = l(a, p.children || [])), (a.return = d), (d = a));
                    break e;
                  } else {
                    n(d, a);
                    break;
                  }
                else t(d, a);
                a = a.sibling;
              }
              ((a = xu(p, d.mode, k)), (a.return = d), (d = a));
            }
            return u(d);
          case Le:
            return ((L = p._init), de(d, a, L(p._payload), k));
        }
        if (Mn(p)) return P(d, a, p, k);
        if (I(p)) return j(d, a, p, k);
        br(d, p);
      }
      return (typeof p == "string" && p !== "") || typeof p == "number"
        ? ((p = "" + p),
          a !== null && a.tag === 6
            ? (n(d, a.sibling), (a = l(a, p)), (a.return = d), (d = a))
            : (n(d, a), (a = wu(p, d.mode, k)), (a.return = d), (d = a)),
          u(d))
        : n(d, a);
    }
    return de;
  }
  var Cn = ss(!0),
    as = ss(!1),
    el = Dt(null),
    tl = null,
    Pn = null,
    zi = null;
  function Ti() {
    zi = Pn = tl = null;
  }
  function Li(e) {
    var t = el.current;
    (te(el), (e._currentValue = t));
  }
  function Ri(e, t, n) {
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
  function jn(e, t) {
    ((tl = e),
      (zi = Pn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ie = !0), (e.firstContext = null)));
  }
  function Ye(e) {
    var t = e._currentValue;
    if (zi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Pn === null)) {
        if (tl === null) throw Error(c(308));
        ((Pn = e), (tl.dependencies = { lanes: 0, firstContext: e }));
      } else Pn = Pn.next = e;
    return t;
  }
  var tn = null;
  function Oi(e) {
    tn === null ? (tn = [e]) : tn.push(e);
  }
  function cs(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Oi(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Nt(e, r)
    );
  }
  function Nt(e, t) {
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
  var Ht = !1;
  function Ii(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function fs(e, t) {
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
  function Vt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ($ & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Nt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Oi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Nt(e, n)
    );
  }
  function nl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  function ds(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (l = i = u) : (i = i.next = u), (n = n.next));
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
  function rl(e, t, n, r) {
    var l = e.updateQueue;
    Ht = !1;
    var i = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        m = s.next;
      ((s.next = null), u === null ? (i = m) : (u.next = m), (u = s));
      var w = e.alternate;
      w !== null &&
        ((w = w.updateQueue),
        (o = w.lastBaseUpdate),
        o !== u && (o === null ? (w.firstBaseUpdate = m) : (o.next = m), (w.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var x = l.baseState;
      ((u = 0), (w = m = s = null), (o = i));
      do {
        var y = o.lane,
          _ = o.eventTime;
        if ((r & y) === y) {
          w !== null &&
            (w = w.next =
              {
                eventTime: _,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var P = e,
              j = o;
            switch (((y = t), (_ = n), j.tag)) {
              case 1:
                if (((P = j.payload), typeof P == "function")) {
                  x = P.call(_, x, y);
                  break e;
                }
                x = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = j.payload), (y = typeof P == "function" ? P.call(_, x, y) : P), y == null)
                )
                  break e;
                x = C({}, x, y);
                break e;
              case 2:
                Ht = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64), (y = l.effects), y === null ? (l.effects = [o]) : y.push(o));
        } else
          ((_ = {
            eventTime: _,
            lane: y,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            w === null ? ((m = w = _), (s = x)) : (w = w.next = _),
            (u |= y));
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          ((y = o),
            (o = y.next),
            (y.next = null),
            (l.lastBaseUpdate = y),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (w === null && (s = x),
        (l.baseState = s),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = w),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((u |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((ln |= u), (e.lanes = u), (e.memoizedState = x));
    }
  }
  function ps(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function")) throw Error(c(191, l));
          l.call(r);
        }
      }
  }
  var or = {},
    ht = Dt(or),
    sr = Dt(or),
    ar = Dt(or);
  function nn(e) {
    if (e === or) throw Error(c(174));
    return e;
  }
  function Mi(e, t) {
    switch ((b(ar, t), b(sr, e), b(ht, or), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Fl(t, e)));
    }
    (te(ht), b(ht, t));
  }
  function zn() {
    (te(ht), te(sr), te(ar));
  }
  function ms(e) {
    nn(ar.current);
    var t = nn(ht.current),
      n = Fl(t, e.type);
    t !== n && (b(sr, e), b(ht, n));
  }
  function Fi(e) {
    sr.current === e && (te(ht), te(sr));
  }
  var ue = Dt(0);
  function ll(e) {
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
  var Di = [];
  function Ui() {
    for (var e = 0; e < Di.length; e++) Di[e]._workInProgressVersionPrimary = null;
    Di.length = 0;
  }
  var il = Se.ReactCurrentDispatcher,
    Ai = Se.ReactCurrentBatchConfig,
    rn = 0,
    oe = null,
    he = null,
    ye = null,
    ul = !1,
    cr = !1,
    fr = 0,
    df = 0;
  function _e() {
    throw Error(c(321));
  }
  function Hi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!lt(e[n], t[n])) return !1;
    return !0;
  }
  function Vi(e, t, n, r, l, i) {
    if (
      ((rn = i),
      (oe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (il.current = e === null || e.memoizedState === null ? vf : yf),
      (e = n(r, l)),
      cr)
    ) {
      i = 0;
      do {
        if (((cr = !1), (fr = 0), 25 <= i)) throw Error(c(301));
        ((i += 1), (ye = he = null), (t.updateQueue = null), (il.current = gf), (e = n(r, l)));
      } while (cr);
    }
    if (
      ((il.current = al),
      (t = he !== null && he.next !== null),
      (rn = 0),
      (ye = he = oe = null),
      (ul = !1),
      t)
    )
      throw Error(c(300));
    return e;
  }
  function Wi() {
    var e = fr !== 0;
    return ((fr = 0), e);
  }
  function vt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ye === null ? (oe.memoizedState = ye = e) : (ye = ye.next = e), ye);
  }
  function Ze() {
    if (he === null) {
      var e = oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = he.next;
    var t = ye === null ? oe.memoizedState : ye.next;
    if (t !== null) ((ye = t), (he = e));
    else {
      if (e === null) throw Error(c(310));
      ((he = e),
        (e = {
          memoizedState: he.memoizedState,
          baseState: he.baseState,
          baseQueue: he.baseQueue,
          queue: he.queue,
          next: null,
        }),
        ye === null ? (oe.memoizedState = ye = e) : (ye = ye.next = e));
    }
    return ye;
  }
  function dr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $i(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = he,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        ((l.next = i.next), (i.next = u));
      }
      ((r.baseQueue = l = i), (n.pending = null));
    }
    if (l !== null) {
      ((i = l.next), (r = r.baseState));
      var o = (u = null),
        s = null,
        m = i;
      do {
        var w = m.lane;
        if ((rn & w) === w)
          (s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: m.action,
                hasEagerState: m.hasEagerState,
                eagerState: m.eagerState,
                next: null,
              }),
            (r = m.hasEagerState ? m.eagerState : e(r, m.action)));
        else {
          var x = {
            lane: w,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          };
          (s === null ? ((o = s = x), (u = r)) : (s = s.next = x), (oe.lanes |= w), (ln |= w));
        }
        m = m.next;
      } while (m !== null && m !== i);
      (s === null ? (u = r) : (s.next = o),
        lt(r, t.memoizedState) || (Ie = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (oe.lanes |= i), (ln |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Bi(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do ((i = e(i, u.action)), (u = u.next));
      while (u !== l);
      (lt(i, t.memoizedState) || (Ie = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function hs() {}
  function vs(e, t) {
    var n = oe,
      r = Ze(),
      l = t(),
      i = !lt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Ie = !0)),
      (r = r.queue),
      Qi(ws.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (ye !== null && ye.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), pr(9, gs.bind(null, n, r, l, t), void 0, null), ge === null))
        throw Error(c(349));
      (rn & 30) !== 0 || ys(n, t, l);
    }
    return l;
  }
  function ys(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = oe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (oe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function gs(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), xs(t) && ks(e));
  }
  function ws(e, t, n) {
    return n(function () {
      xs(t) && ks(e);
    });
  }
  function xs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !lt(e, n);
    } catch {
      return !0;
    }
  }
  function ks(e) {
    var t = Nt(e, 1);
    t !== null && at(t, e, 1, -1);
  }
  function Ss(e) {
    var t = vt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = hf.bind(null, oe, e)),
      [t.memoizedState, e]
    );
  }
  function pr(e, t, n, r) {
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
  function Es() {
    return Ze().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = vt();
    ((oe.flags |= e), (l.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function sl(e, t, n, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (he !== null) {
      var u = he.memoizedState;
      if (((i = u.destroy), r !== null && Hi(r, u.deps))) {
        l.memoizedState = pr(t, n, i, r);
        return;
      }
    }
    ((oe.flags |= e), (l.memoizedState = pr(1 | t, n, i, r)));
  }
  function _s(e, t) {
    return ol(8390656, 8, e, t);
  }
  function Qi(e, t) {
    return sl(2048, 8, e, t);
  }
  function Ns(e, t) {
    return sl(4, 2, e, t);
  }
  function Cs(e, t) {
    return sl(4, 4, e, t);
  }
  function Ps(e, t) {
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
  function js(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), sl(4, 4, Ps.bind(null, t, e), n));
  }
  function Ki() {}
  function zs(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Hi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ts(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Hi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ls(e, t, n) {
    return (rn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n))
      : (lt(n, t) || ((n = uo()), (oe.lanes |= n), (ln |= n), (e.baseState = !0)), t);
  }
  function pf(e, t) {
    var n = Z;
    ((Z = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Ai.transition;
    Ai.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Z = n), (Ai.transition = r));
    }
  }
  function Rs() {
    return Ze().memoizedState;
  }
  function mf(e, t, n) {
    var r = Qt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Os(e)))
      Is(t, n);
    else if (((n = cs(e, t, n, r)), n !== null)) {
      var l = ze();
      (at(n, e, r, l), Ms(n, t, r));
    }
  }
  function hf(e, t, n) {
    var r = Qt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Os(e)) Is(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            o = i(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = o), lt(o, u))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), Oi(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = cs(e, t, l, r)), n !== null && ((l = ze()), at(n, e, r, l), Ms(n, t, r)));
    }
  }
  function Os(e) {
    var t = e.alternate;
    return e === oe || (t !== null && t === oe);
  }
  function Is(e, t) {
    cr = ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Ms(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  var al = {
      readContext: Ye,
      useCallback: _e,
      useContext: _e,
      useEffect: _e,
      useImperativeHandle: _e,
      useInsertionEffect: _e,
      useLayoutEffect: _e,
      useMemo: _e,
      useReducer: _e,
      useRef: _e,
      useState: _e,
      useDebugValue: _e,
      useDeferredValue: _e,
      useTransition: _e,
      useMutableSource: _e,
      useSyncExternalStore: _e,
      useId: _e,
      unstable_isNewReconciler: !1,
    },
    vf = {
      readContext: Ye,
      useCallback: function (e, t) {
        return ((vt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ye,
      useEffect: _s,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), ol(4194308, 4, Ps.bind(null, t, e), n));
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
          (e = e.dispatch = mf.bind(null, oe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = vt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Ss,
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        return (vt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ss(!1),
          t = e[0];
        return ((e = pf.bind(null, e[1])), (vt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = oe,
          l = vt();
        if (ie) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), ge === null)) throw Error(c(349));
          (rn & 30) !== 0 || ys(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          _s(ws.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          pr(9, gs.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = vt(),
          t = ge.identifierPrefix;
        if (ie) {
          var n = _t,
            r = Et;
          ((n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = fr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = df++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    yf = {
      readContext: Ye,
      useCallback: zs,
      useContext: Ye,
      useEffect: Qi,
      useImperativeHandle: js,
      useInsertionEffect: Ns,
      useLayoutEffect: Cs,
      useMemo: Ts,
      useReducer: $i,
      useRef: Es,
      useState: function () {
        return $i(dr);
      },
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        var t = Ze();
        return Ls(t, he.memoizedState, e);
      },
      useTransition: function () {
        var e = $i(dr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: hs,
      useSyncExternalStore: vs,
      useId: Rs,
      unstable_isNewReconciler: !1,
    },
    gf = {
      readContext: Ye,
      useCallback: zs,
      useContext: Ye,
      useEffect: Qi,
      useImperativeHandle: js,
      useInsertionEffect: Ns,
      useLayoutEffect: Cs,
      useMemo: Ts,
      useReducer: Bi,
      useRef: Es,
      useState: function () {
        return Bi(dr);
      },
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        var t = Ze();
        return he === null ? (t.memoizedState = e) : Ls(t, he.memoizedState, e);
      },
      useTransition: function () {
        var e = Bi(dr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: hs,
      useSyncExternalStore: vs,
      useId: Rs,
      unstable_isNewReconciler: !1,
    };
  function ut(e, t) {
    if (e && e.defaultProps) {
      ((t = C({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Gi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : C({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var cl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Zt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Qt(e),
        i = Ct(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = Vt(e, i, l)),
        t !== null && (at(t, e, l, r), nl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Qt(e),
        i = Ct(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Vt(e, i, l)),
        t !== null && (at(t, e, l, r), nl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ze(),
        r = Qt(e),
        l = Ct(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Vt(e, l, r)),
        t !== null && (at(t, e, r, n), nl(t, e, r)));
    },
  };
  function Fs(e, t, n, r, l, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !bn(n, r) || !bn(l, i)
          : !0
    );
  }
  function Ds(e, t, n) {
    var r = !1,
      l = Ut,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ye(i))
        : ((l = Oe(t) ? qt : Ee.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Sn(e, l) : Ut)),
      (t = new t(n, i)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Us(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && cl.enqueueReplaceState(t, t.state, null));
  }
  function Xi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ii(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Ye(i))
      : ((i = Oe(t) ? qt : Ee.current), (l.context = Sn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Gi(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && cl.enqueueReplaceState(l, l.state, null),
        rl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Tn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += B(r)), (r = r.return));
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
  function Yi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Zi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var wf = typeof WeakMap == "function" ? WeakMap : Map;
  function As(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (yl || ((yl = !0), (fu = r)), Zi(e, t));
      }),
      n
    );
  }
  function Hs(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Zi(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (Zi(e, t),
            typeof r != "function" && ($t === null ? ($t = new Set([this])) : $t.add(this)));
          var u = t.stack;
          this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
        }),
      n
    );
  }
  function Vs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new wf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Of.bind(null, e, t, n)), t.then(e, e));
  }
  function Ws(e) {
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
  function $s(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Ct(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var xf = Se.ReactCurrentOwner,
    Ie = !1;
  function je(e, t, n, r) {
    t.child = e === null ? as(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function Bs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      jn(t, l),
      (r = Vi(e, t, n, r, i, l)),
      (n = Wi()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Pt(e, t, l))
        : (ie && n && _i(t), (t.flags |= 1), je(e, t, r, l), t.child)
    );
  }
  function Qs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !gu(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Ks(e, t, i, r, l))
        : ((e = El(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var u = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : bn), n(u, r) && e.ref === t.ref))
        return Pt(e, t, l);
    }
    return ((t.flags |= 1), (e = Gt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ks(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (bn(i, r) && e.ref === t.ref)
        if (((Ie = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ie = !0);
        else return ((t.lanes = e.lanes), Pt(e, t, l));
    }
    return Ji(e, t, n, r, l);
  }
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          b(Rn, $e),
          ($e |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            b(Rn, $e),
            ($e |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = i !== null ? i.baseLanes : n),
          b(Rn, $e),
          ($e |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        b(Rn, $e),
        ($e |= r));
    return (je(e, t, l, n), t.child);
  }
  function Xs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ji(e, t, n, r, l) {
    var i = Oe(n) ? qt : Ee.current;
    return (
      (i = Sn(t, i)),
      jn(t, l),
      (n = Vi(e, t, n, r, i, l)),
      (r = Wi()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Pt(e, t, l))
        : (ie && r && _i(t), (t.flags |= 1), je(e, t, n, l), t.child)
    );
  }
  function Ys(e, t, n, r, l) {
    if (Oe(n)) {
      var i = !0;
      Xr(t);
    } else i = !1;
    if ((jn(t, l), t.stateNode === null)) (dl(e, t), Ds(t, n, r), Xi(t, n, r, l), (r = !0));
    else if (e === null) {
      var u = t.stateNode,
        o = t.memoizedProps;
      u.props = o;
      var s = u.context,
        m = n.contextType;
      typeof m == "object" && m !== null
        ? (m = Ye(m))
        : ((m = Oe(n) ? qt : Ee.current), (m = Sn(t, m)));
      var w = n.getDerivedStateFromProps,
        x = typeof w == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      (x ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((o !== r || s !== m) && Us(t, u, r, m)),
        (Ht = !1));
      var y = t.memoizedState;
      ((u.state = y),
        rl(t, r, u, l),
        (s = t.memoizedState),
        o !== r || y !== s || Re.current || Ht
          ? (typeof w == "function" && (Gi(t, n, w, r), (s = t.memoizedState)),
            (o = Ht || Fs(t, n, o, r, y, s, m))
              ? (x ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (u.props = r),
            (u.state = s),
            (u.context = m),
            (r = o))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
    } else {
      ((u = t.stateNode),
        fs(e, t),
        (o = t.memoizedProps),
        (m = t.type === t.elementType ? o : ut(t.type, o)),
        (u.props = m),
        (x = t.pendingProps),
        (y = u.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ye(s))
          : ((s = Oe(n) ? qt : Ee.current), (s = Sn(t, s))));
      var _ = n.getDerivedStateFromProps;
      ((w = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((o !== x || y !== s) && Us(t, u, r, s)),
        (Ht = !1),
        (y = t.memoizedState),
        (u.state = y),
        rl(t, r, u, l));
      var P = t.memoizedState;
      o !== x || y !== P || Re.current || Ht
        ? (typeof _ == "function" && (Gi(t, n, _, r), (P = t.memoizedState)),
          (m = Ht || Fs(t, n, m, r, y, P, s) || !1)
            ? (w ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, P, s),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, P, s)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (o === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = P)),
          (u.props = r),
          (u.state = P),
          (u.context = s),
          (r = m))
        : (typeof u.componentDidUpdate != "function" ||
            (o === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return qi(e, t, n, r, i, l);
  }
  function qi(e, t, n, r, l, i) {
    Xs(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return (l && es(t, n, !1), Pt(e, t, i));
    ((r = t.stateNode), (xf.current = t));
    var o = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = Cn(t, e.child, null, i)), (t.child = Cn(t, null, o, i)))
        : je(e, t, o, i),
      (t.memoizedState = r.state),
      l && es(t, n, !0),
      t.child
    );
  }
  function Zs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? qo(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && qo(e, t.context, !1),
      Mi(e, t.containerInfo));
  }
  function Js(e, t, n, r, l) {
    return (Nn(), ji(l), (t.flags |= 256), je(e, t, n, r), t.child);
  }
  var bi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function eu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function qs(e, t, n) {
    var r = t.pendingProps,
      l = ue.current,
      i = !1,
      u = (t.flags & 128) !== 0,
      o;
    if (
      ((o = u) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      b(ue, l & 1),
      e === null)
    )
      return (
        Pi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((u = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (u = { mode: "hidden", children: u }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = u))
                  : (i = _l(u, r, 0, null)),
                (e = an(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = eu(n)),
                (t.memoizedState = bi),
                e)
              : tu(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return kf(e, t, u, r, o, l, n);
    if (i) {
      ((i = r.fallback), (u = t.mode), (l = e.child), (o = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (u & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Gt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (i = Gt(o, i)) : ((i = an(i, u, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? eu(n)
            : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
        (i.memoizedState = u),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = bi),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Gt(i, { mode: "visible", children: r.children })),
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
  function tu(e, t) {
    return (
      (t = _l({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fl(e, t, n, r) {
    return (
      r !== null && ji(r),
      Cn(t, e.child, null, n),
      (e = tu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function kf(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Yi(Error(c(422)))), fl(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = _l({ mode: "visible", children: r.children }, l, 0, null)),
            (i = an(i, l, u, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Cn(t, e.child, null, u),
            (t.child.memoizedState = eu(u)),
            (t.memoizedState = bi),
            i);
    if ((t.mode & 1) === 0) return fl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (i = Error(c(419))), (r = Yi(i, r, void 0)), fl(e, t, u, r));
    }
    if (((o = (u & e.childLanes) !== 0), Ie || o)) {
      if (((r = ge), r !== null)) {
        switch (u & -u) {
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
        ((l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l),
          l !== 0 && l !== i.retryLane && ((i.retryLane = l), Nt(e, l), at(r, e, l, -1)));
      }
      return (yu(), (r = Yi(Error(c(421)))), fl(e, t, u, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = If.bind(null, e)), (l._reactRetry = t), null)
      : ((e = i.treeContext),
        (We = Ft(l.nextSibling)),
        (Ve = t),
        (ie = !0),
        (it = null),
        e !== null &&
          ((Ge[Xe++] = Et),
          (Ge[Xe++] = _t),
          (Ge[Xe++] = bt),
          (Et = e.id),
          (_t = e.overflow),
          (bt = t)),
        (t = tu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function bs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ri(e.return, t, n));
  }
  function nu(e, t, n, r, l) {
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
  function ea(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((je(e, t, r.children, n), (r = ue.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && bs(e, n, t);
          else if (e.tag === 19) bs(e, n, t);
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
    if ((b(ue, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && ll(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            nu(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && ll(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          nu(t, !0, n, null, i);
          break;
        case "together":
          nu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function dl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Pt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (ln |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        ((e = e.sibling), (n = n.sibling = Gt(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Sf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Zs(t), Nn());
        break;
      case 5:
        ms(t);
        break;
      case 1:
        Oe(t.type) && Xr(t);
        break;
      case 4:
        Mi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (b(el, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (b(ue, ue.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? qs(e, t, n)
              : (b(ue, ue.current & 1), (e = Pt(e, t, n)), e !== null ? e.sibling : null);
        b(ue, ue.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ea(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          b(ue, ue.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Gs(e, t, n));
    }
    return Pt(e, t, n);
  }
  var ta, ru, na, ra;
  ((ta = function (e, t) {
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
    (ru = function () {}),
    (na = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), nn(ht.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = Rl(e, l)), (r = Rl(e, r)), (i = []));
            break;
          case "select":
            ((l = C({}, l, { value: void 0 })), (r = C({}, r, { value: void 0 })), (i = []));
            break;
          case "textarea":
            ((l = Ml(e, l)), (r = Ml(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qr);
        }
        Dl(n, r);
        var u;
        n = null;
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === "style") {
              var o = l[m];
              for (u in o) o.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              m !== "dangerouslySetInnerHTML" &&
                m !== "children" &&
                m !== "suppressContentEditableWarning" &&
                m !== "suppressHydrationWarning" &&
                m !== "autoFocus" &&
                (T.hasOwnProperty(m) ? i || (i = []) : (i = i || []).push(m, null));
        for (m in r) {
          var s = r[m];
          if (
            ((o = l != null ? l[m] : void 0),
            r.hasOwnProperty(m) && s !== o && (s != null || o != null))
          )
            if (m === "style")
              if (o) {
                for (u in o)
                  !o.hasOwnProperty(u) ||
                    (s && s.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in s) s.hasOwnProperty(u) && o[u] !== s[u] && (n || (n = {}), (n[u] = s[u]));
              } else (n || (i || (i = []), i.push(m, n)), (n = s));
            else
              m === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (i = i || []).push(m, s))
                : m === "children"
                  ? (typeof s != "string" && typeof s != "number") || (i = i || []).push(m, "" + s)
                  : m !== "suppressContentEditableWarning" &&
                    m !== "suppressHydrationWarning" &&
                    (T.hasOwnProperty(m)
                      ? (s != null && m === "onScroll" && ee("scroll", e), i || o === s || (i = []))
                      : (i = i || []).push(m, s));
        }
        n && (i = i || []).push("style", n);
        var m = i;
        (t.updateQueue = m) && (t.flags |= 4);
      }
    }),
    (ra = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function mr(e, t) {
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
  function Ne(e) {
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
  function Ef(e, t, n) {
    var r = t.pendingProps;
    switch ((Ni(t), t.tag)) {
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
        return (Ne(t), null);
      case 1:
        return (Oe(t.type) && Gr(), Ne(t), null);
      case 3:
        return (
          (r = t.stateNode),
          zn(),
          te(Re),
          te(Ee),
          Ui(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (qr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), it !== null && (mu(it), (it = null)))),
          ru(e, t),
          Ne(t),
          null
        );
      case 5:
        Fi(t);
        var l = nn(ar.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (na(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return (Ne(t), null);
          }
          if (((e = nn(ht.current)), qr(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[mt] = t), (r[lr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (ee("cancel", r), ee("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < tr.length; l++) ee(tr[l], r);
                break;
              case "source":
                ee("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (ee("error", r), ee("load", r));
                break;
              case "details":
                ee("toggle", r);
                break;
              case "input":
                (Fu(r, i), ee("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }), ee("invalid", r));
                break;
              case "textarea":
                (Au(r, i), ee("invalid", r));
            }
            (Dl(n, i), (l = null));
            for (var u in i)
              if (i.hasOwnProperty(u)) {
                var o = i[u];
                u === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (i.suppressHydrationWarning !== !0 && Br(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (i.suppressHydrationWarning !== !0 && Br(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : T.hasOwnProperty(u) && o != null && u === "onScroll" && ee("scroll", r);
              }
            switch (n) {
              case "input":
                (kr(r), Uu(r, i, !0));
                break;
              case "textarea":
                (kr(r), Vu(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Qr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Wu(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === "select" &&
                        ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[mt] = t),
              (e[lr] = r),
              ta(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((u = Ul(n, r)), n)) {
                case "dialog":
                  (ee("cancel", e), ee("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ee("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < tr.length; l++) ee(tr[l], e);
                  l = r;
                  break;
                case "source":
                  (ee("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (ee("error", e), ee("load", e), (l = r));
                  break;
                case "details":
                  (ee("toggle", e), (l = r));
                  break;
                case "input":
                  (Fu(e, r), (l = Rl(e, r)), ee("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = C({}, r, { value: void 0 })),
                    ee("invalid", e));
                  break;
                case "textarea":
                  (Au(e, r), (l = Ml(e, r)), ee("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Dl(n, l), (o = l));
              for (i in o)
                if (o.hasOwnProperty(i)) {
                  var s = o[i];
                  i === "style"
                    ? Qu(e, s)
                    : i === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && $u(e, s))
                      : i === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Fn(e, s)
                          : typeof s == "number" && Fn(e, "" + s)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (T.hasOwnProperty(i)
                            ? s != null && i === "onScroll" && ee("scroll", e)
                            : s != null && et(e, i, s, u));
                }
              switch (n) {
                case "input":
                  (kr(e), Uu(e, r, !1));
                  break;
                case "textarea":
                  (kr(e), Vu(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Y(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? cn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null && cn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Qr);
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
        return (Ne(t), null);
      case 6:
        if (e && t.stateNode != null) ra(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(c(166));
          if (((n = nn(ar.current)), nn(ht.current), qr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[mt] = t),
              (i = r.nodeValue !== n) && ((e = Ve), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Br(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Br(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[mt] = t),
              (t.stateNode = r));
        }
        return (Ne(t), null);
      case 13:
        if (
          (te(ue),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ie && We !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (us(), Nn(), (t.flags |= 98560), (i = !1));
          else if (((i = qr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(c(317));
              i[mt] = t;
            } else (Nn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ne(t), (i = !1));
          } else (it !== null && (mu(it), (it = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ue.current & 1) !== 0 ? ve === 0 && (ve = 3) : yu())),
            t.updateQueue !== null && (t.flags |= 4),
            Ne(t),
            null);
      case 4:
        return (zn(), ru(e, t), e === null && nr(t.stateNode.containerInfo), Ne(t), null);
      case 10:
        return (Li(t.type._context), Ne(t), null);
      case 17:
        return (Oe(t.type) && Gr(), Ne(t), null);
      case 19:
        if ((te(ue), (i = t.memoizedState), i === null)) return (Ne(t), null);
        if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (r) mr(i, !1);
          else {
            if (ve !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((u = ll(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      mr(i, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (u = i.alternate),
                      u === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = u.childLanes),
                          (i.lanes = u.lanes),
                          (i.child = u.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = u.memoizedProps),
                          (i.memoizedState = u.memoizedState),
                          (i.updateQueue = u.updateQueue),
                          (i.type = u.type),
                          (e = u.dependencies),
                          (i.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (b(ue, (ue.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              fe() > On &&
              ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ll(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                mr(i, !0),
                i.tail === null && i.tailMode === "hidden" && !u.alternate && !ie)
              )
                return (Ne(t), null);
            } else
              2 * fe() - i.renderingStartTime > On &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = i.last), n !== null ? (n.sibling = u) : (t.child = u), (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = fe()),
            (t.sibling = null),
            (n = ue.current),
            b(ue, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ne(t), null);
      case 22:
      case 23:
        return (
          vu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? ($e & 1073741824) !== 0 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ne(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function _f(e, t) {
    switch ((Ni(t), t.tag)) {
      case 1:
        return (
          Oe(t.type) && Gr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          zn(),
          te(Re),
          te(Ee),
          Ui(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Fi(t), null);
      case 13:
        if ((te(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(c(340));
          Nn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (te(ue), null);
      case 4:
        return (zn(), null);
      case 10:
        return (Li(t.type._context), null);
      case 22:
      case 23:
        return (vu(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pl = !1,
    Ce = !1,
    Nf = typeof WeakSet == "function" ? WeakSet : Set,
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
  function lu(e, t, n) {
    try {
      n();
    } catch (r) {
      ce(e, t, r);
    }
  }
  var la = !1;
  function Cf(e, t) {
    if (((vi = Or), (e = Fo()), si(e))) {
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
            var u = 0,
              o = -1,
              s = -1,
              m = 0,
              w = 0,
              x = e,
              y = null;
            t: for (;;) {
              for (
                var _;
                x !== n || (l !== 0 && x.nodeType !== 3) || (o = u + l),
                  x !== i || (r !== 0 && x.nodeType !== 3) || (s = u + r),
                  x.nodeType === 3 && (u += x.nodeValue.length),
                  (_ = x.firstChild) !== null;
              )
                ((y = x), (x = _));
              for (;;) {
                if (x === e) break t;
                if (
                  (y === n && ++m === l && (o = u),
                  y === i && ++w === r && (s = u),
                  (_ = x.nextSibling) !== null)
                )
                  break;
                ((x = y), (y = x.parentNode));
              }
              x = _;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (yi = { focusedElem: e, selectionRange: n }, Or = !1, N = t; N !== null;)
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
                    var j = P.memoizedProps,
                      de = P.memoizedState,
                      d = t.stateNode,
                      a = d.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? j : ut(t.type, j),
                        de,
                      );
                    d.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var p = t.stateNode.containerInfo;
                  p.nodeType === 1
                    ? (p.textContent = "")
                    : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(c(163));
              }
          } catch (k) {
            ce(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (N = e));
            break;
          }
          N = t.return;
        }
    return ((P = la), (la = !1), P);
  }
  function hr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && lu(t, n, i));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ml(e, t) {
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
  function iu(e) {
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
  function ia(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ia(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[mt], delete t[lr], delete t[ki], delete t[sf], delete t[af])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ua(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function oa(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || ua(e.return)) return null;
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
  function uu(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Qr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (uu(e, t, n), e = e.sibling; e !== null;) (uu(e, t, n), (e = e.sibling));
  }
  function ou(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ou(e, t, n), e = e.sibling; e !== null;) (ou(e, t, n), (e = e.sibling));
  }
  var xe = null,
    ot = !1;
  function Wt(e, t, n) {
    for (n = n.child; n !== null;) (sa(e, t, n), (n = n.sibling));
  }
  function sa(e, t, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(Pr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ce || Ln(n, t);
      case 6:
        var r = xe,
          l = ot;
        ((xe = null),
          Wt(e, t, n),
          (xe = r),
          (ot = l),
          xe !== null &&
            (ot
              ? ((e = xe),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : xe.removeChild(n.stateNode)));
        break;
      case 18:
        xe !== null &&
          (ot
            ? ((e = xe),
              (n = n.stateNode),
              e.nodeType === 8 ? xi(e.parentNode, n) : e.nodeType === 1 && xi(e, n),
              Gn(e))
            : xi(xe, n.stateNode));
        break;
      case 4:
        ((r = xe),
          (l = ot),
          (xe = n.stateNode.containerInfo),
          (ot = !0),
          Wt(e, t, n),
          (xe = r),
          (ot = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ce && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var i = l,
              u = i.destroy;
            ((i = i.tag),
              u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && lu(n, t, u),
              (l = l.next));
          } while (l !== r);
        }
        Wt(e, t, n);
        break;
      case 1:
        if (!Ce && (Ln(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (o) {
            ce(n, t, o);
          }
        Wt(e, t, n);
        break;
      case 21:
        Wt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ce = (r = Ce) || n.memoizedState !== null), Wt(e, t, n), (Ce = r))
          : Wt(e, t, n);
        break;
      default:
        Wt(e, t, n);
    }
  }
  function aa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Nf()),
        t.forEach(function (r) {
          var l = Mf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function st(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            u = t,
            o = u;
          e: for (; o !== null;) {
            switch (o.tag) {
              case 5:
                ((xe = o.stateNode), (ot = !1));
                break e;
              case 3:
                ((xe = o.stateNode.containerInfo), (ot = !0));
                break e;
              case 4:
                ((xe = o.stateNode.containerInfo), (ot = !0));
                break e;
            }
            o = o.return;
          }
          if (xe === null) throw Error(c(160));
          (sa(i, u, l), (xe = null), (ot = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (m) {
          ce(l, t, m);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (ca(t, e), (t = t.sibling));
  }
  function ca(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((st(t, e), yt(e), r & 4)) {
          try {
            (hr(3, e, e.return), ml(3, e));
          } catch (j) {
            ce(e, e.return, j);
          }
          try {
            hr(5, e, e.return);
          } catch (j) {
            ce(e, e.return, j);
          }
        }
        break;
      case 1:
        (st(t, e), yt(e), r & 512 && n !== null && Ln(n, n.return));
        break;
      case 5:
        if ((st(t, e), yt(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Fn(l, "");
          } catch (j) {
            ce(e, e.return, j);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            u = n !== null ? n.memoizedProps : i,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === "input" && i.type === "radio" && i.name != null && Du(l, i), Ul(o, u));
              var m = Ul(o, i);
              for (u = 0; u < s.length; u += 2) {
                var w = s[u],
                  x = s[u + 1];
                w === "style"
                  ? Qu(l, x)
                  : w === "dangerouslySetInnerHTML"
                    ? $u(l, x)
                    : w === "children"
                      ? Fn(l, x)
                      : et(l, w, x, m);
              }
              switch (o) {
                case "input":
                  Ol(l, i);
                  break;
                case "textarea":
                  Hu(l, i);
                  break;
                case "select":
                  var y = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var _ = i.value;
                  _ != null
                    ? cn(l, !!i.multiple, _, !1)
                    : y !== !!i.multiple &&
                      (i.defaultValue != null
                        ? cn(l, !!i.multiple, i.defaultValue, !0)
                        : cn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[lr] = i;
            } catch (j) {
              ce(e, e.return, j);
            }
        }
        break;
      case 6:
        if ((st(t, e), yt(e), r & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (j) {
            ce(e, e.return, j);
          }
        }
        break;
      case 3:
        if ((st(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Gn(t.containerInfo);
          } catch (j) {
            ce(e, e.return, j);
          }
        break;
      case 4:
        (st(t, e), yt(e));
        break;
      case 13:
        (st(t, e),
          yt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (cu = fe())),
          r & 4 && aa(e));
        break;
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ce = (m = Ce) || w), st(t, e), (Ce = m)) : st(t, e),
          yt(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null), (e.stateNode.isHidden = m) && !w && (e.mode & 1) !== 0)
          )
            for (N = e, w = e.child; w !== null;) {
              for (x = N = w; N !== null;) {
                switch (((y = N), (_ = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hr(4, y, y.return);
                    break;
                  case 1:
                    Ln(y, y.return);
                    var P = y.stateNode;
                    if (typeof P.componentWillUnmount == "function") {
                      ((r = y), (n = y.return));
                      try {
                        ((t = r),
                          (P.props = t.memoizedProps),
                          (P.state = t.memoizedState),
                          P.componentWillUnmount());
                      } catch (j) {
                        ce(r, n, j);
                      }
                    }
                    break;
                  case 5:
                    Ln(y, y.return);
                    break;
                  case 22:
                    if (y.memoizedState !== null) {
                      pa(x);
                      continue;
                    }
                }
                _ !== null ? ((_.return = y), (N = _)) : pa(x);
              }
              w = w.sibling;
            }
          e: for (w = null, x = e; ;) {
            if (x.tag === 5) {
              if (w === null) {
                w = x;
                try {
                  ((l = x.stateNode),
                    m
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((o = x.stateNode),
                        (s = x.memoizedProps.style),
                        (u = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (o.style.display = Bu("display", u))));
                } catch (j) {
                  ce(e, e.return, j);
                }
              }
            } else if (x.tag === 6) {
              if (w === null)
                try {
                  x.stateNode.nodeValue = m ? "" : x.memoizedProps;
                } catch (j) {
                  ce(e, e.return, j);
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
              (w === x && (w = null), (x = x.return));
            }
            (w === x && (w = null), (x.sibling.return = x.return), (x = x.sibling));
          }
        }
        break;
      case 19:
        (st(t, e), yt(e), r & 4 && aa(e));
        break;
      case 21:
        break;
      default:
        (st(t, e), yt(e));
    }
  }
  function yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (ua(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(c(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Fn(l, ""), (r.flags &= -33));
            var i = oa(e);
            ou(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              o = oa(e);
            uu(e, o, u);
            break;
          default:
            throw Error(c(161));
        }
      } catch (s) {
        ce(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pf(e, t, n) {
    ((N = e), fa(e));
  }
  function fa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null;) {
      var l = N,
        i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || pl;
        if (!u) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Ce;
          o = pl;
          var m = Ce;
          if (((pl = u), (Ce = s) && !m))
            for (N = l; N !== null;)
              ((u = N),
                (s = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? ma(l)
                  : s !== null
                    ? ((s.return = u), (N = s))
                    : ma(l));
          for (; i !== null;) ((N = i), fa(i), (i = i.sibling));
          ((N = l), (pl = o), (Ce = m));
        }
        da(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), (N = i)) : da(e);
    }
  }
  function da(e) {
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
                Ce || ml(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ce)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = t.updateQueue;
                i !== null && ps(t, i, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ps(t, u, n);
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
                  var m = t.alternate;
                  if (m !== null) {
                    var w = m.memoizedState;
                    if (w !== null) {
                      var x = w.dehydrated;
                      x !== null && Gn(x);
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
                throw Error(c(163));
            }
          Ce || (t.flags & 512 && iu(t));
        } catch (y) {
          ce(t, t.return, y);
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
  function pa(e) {
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
  function ma(e) {
    for (; N !== null;) {
      var t = N;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ml(4, t);
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
              iu(t);
            } catch (s) {
              ce(t, i, s);
            }
            break;
          case 5:
            var u = t.return;
            try {
              iu(t);
            } catch (s) {
              ce(t, u, s);
            }
        }
      } catch (s) {
        ce(t, t.return, s);
      }
      if (t === e) {
        N = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        ((o.return = t.return), (N = o));
        break;
      }
      N = t.return;
    }
  }
  var jf = Math.ceil,
    hl = Se.ReactCurrentDispatcher,
    su = Se.ReactCurrentOwner,
    Je = Se.ReactCurrentBatchConfig,
    $ = 0,
    ge = null,
    pe = null,
    ke = 0,
    $e = 0,
    Rn = Dt(0),
    ve = 0,
    vr = null,
    ln = 0,
    vl = 0,
    au = 0,
    yr = null,
    Me = null,
    cu = 0,
    On = 1 / 0,
    jt = null,
    yl = !1,
    fu = null,
    $t = null,
    gl = !1,
    Bt = null,
    wl = 0,
    gr = 0,
    du = null,
    xl = -1,
    kl = 0;
  function ze() {
    return ($ & 6) !== 0 ? fe() : xl !== -1 ? xl : (xl = fe());
  }
  function Qt(e) {
    return (e.mode & 1) === 0
      ? 1
      : ($ & 2) !== 0 && ke !== 0
        ? ke & -ke
        : ff.transition !== null
          ? (kl === 0 && (kl = uo()), kl)
          : ((e = Z), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vo(e.type))), e);
  }
  function at(e, t, n, r) {
    if (50 < gr) throw ((gr = 0), (du = null), Error(c(185)));
    (Wn(e, n, r),
      (($ & 2) === 0 || e !== ge) &&
        (e === ge && (($ & 2) === 0 && (vl |= n), ve === 4 && Kt(e, ke)),
        Fe(e, r),
        n === 1 && $ === 0 && (t.mode & 1) === 0 && ((On = fe() + 500), Yr && At())));
  }
  function Fe(e, t) {
    var n = e.callbackNode;
    cc(e, t);
    var r = Tr(e, e === ge ? ke : 0);
    if (r === 0) (n !== null && ro(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ro(n), t === 1))
        (e.tag === 0 ? cf(va.bind(null, e)) : ts(va.bind(null, e)),
          uf(function () {
            ($ & 6) === 0 && At();
          }),
          (n = null));
      else {
        switch (oo(r)) {
          case 1:
            n = Ql;
            break;
          case 4:
            n = lo;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = io;
            break;
          default:
            n = Cr;
        }
        n = _a(n, ha.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function ha(e, t) {
    if (((xl = -1), (kl = 0), ($ & 6) !== 0)) throw Error(c(327));
    var n = e.callbackNode;
    if (In() && e.callbackNode !== n) return null;
    var r = Tr(e, e === ge ? ke : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = $;
      $ |= 2;
      var i = ga();
      (ge !== e || ke !== t) && ((jt = null), (On = fe() + 500), on(e, t));
      do
        try {
          Lf();
          break;
        } catch (o) {
          ya(e, o);
        }
      while (!0);
      (Ti(), (hl.current = i), ($ = l), pe !== null ? (t = 0) : ((ge = null), (ke = 0), (t = ve)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (t = pu(e, l)))), t === 1))
        throw ((n = vr), on(e, 0), Kt(e, r), Fe(e, fe()), n);
      if (t === 6) Kt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !zf(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((i = Kl(e)), i !== 0 && ((r = i), (t = pu(e, i)))),
            t === 1))
        )
          throw ((n = vr), on(e, 0), Kt(e, r), Fe(e, fe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            sn(e, Me, jt);
            break;
          case 3:
            if ((Kt(e, r), (r & 130023424) === r && ((t = cu + 500 - fe()), 10 < t))) {
              if (Tr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (ze(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = wi(sn.bind(null, e, Me, jt), t);
              break;
            }
            sn(e, Me, jt);
            break;
          case 4:
            if ((Kt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var u = 31 - rt(r);
              ((i = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~i));
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
                            : 1960 * jf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = wi(sn.bind(null, e, Me, jt), r);
              break;
            }
            sn(e, Me, jt);
            break;
          case 5:
            sn(e, Me, jt);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return (Fe(e, fe()), e.callbackNode === n ? ha.bind(null, e) : null);
  }
  function pu(e, t) {
    var n = yr;
    return (
      e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = Me), (Me = n), t !== null && mu(t)),
      e
    );
  }
  function mu(e) {
    Me === null ? (Me = e) : Me.push.apply(Me, e);
  }
  function zf(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!lt(i(), l)) return !1;
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
  function Kt(e, t) {
    for (
      t &= ~au, t &= ~vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - rt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function va(e) {
    if (($ & 6) !== 0) throw Error(c(327));
    In();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return (Fe(e, fe()), null);
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Kl(e);
      r !== 0 && ((t = r), (n = pu(e, r)));
    }
    if (n === 1) throw ((n = vr), on(e, 0), Kt(e, t), Fe(e, fe()), n);
    if (n === 6) throw Error(c(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      sn(e, Me, jt),
      Fe(e, fe()),
      null
    );
  }
  function hu(e, t) {
    var n = $;
    $ |= 1;
    try {
      return e(t);
    } finally {
      (($ = n), $ === 0 && ((On = fe() + 500), Yr && At()));
    }
  }
  function un(e) {
    Bt !== null && Bt.tag === 0 && ($ & 6) === 0 && In();
    var t = $;
    $ |= 1;
    var n = Je.transition,
      r = Z;
    try {
      if (((Je.transition = null), (Z = 1), e)) return e();
    } finally {
      ((Z = r), (Je.transition = n), ($ = t), ($ & 6) === 0 && At());
    }
  }
  function vu() {
    (($e = Rn.current), te(Rn));
  }
  function on(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), lf(n)), pe !== null))
      for (n = pe.return; n !== null;) {
        var r = n;
        switch ((Ni(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Gr());
            break;
          case 3:
            (zn(), te(Re), te(Ee), Ui());
            break;
          case 5:
            Fi(r);
            break;
          case 4:
            zn();
            break;
          case 13:
            te(ue);
            break;
          case 19:
            te(ue);
            break;
          case 10:
            Li(r.type._context);
            break;
          case 22:
          case 23:
            vu();
        }
        n = n.return;
      }
    if (
      ((ge = e),
      (pe = e = Gt(e.current, null)),
      (ke = $e = t),
      (ve = 0),
      (vr = null),
      (au = vl = ln = 0),
      (Me = yr = null),
      tn !== null)
    ) {
      for (t = 0; t < tn.length; t++)
        if (((n = tn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var u = i.next;
            ((i.next = l), (r.next = u));
          }
          n.pending = r;
        }
      tn = null;
    }
    return e;
  }
  function ya(e, t) {
    do {
      var n = pe;
      try {
        if ((Ti(), (il.current = al), ul)) {
          for (var r = oe.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ul = !1;
        }
        if (
          ((rn = 0),
          (ye = he = oe = null),
          (cr = !1),
          (fr = 0),
          (su.current = null),
          n === null || n.return === null)
        ) {
          ((ve = 1), (vr = t), (pe = null));
          break;
        }
        e: {
          var i = e,
            u = n.return,
            o = n,
            s = t;
          if (
            ((t = ke),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var m = s,
              w = o,
              x = w.tag;
            if ((w.mode & 1) === 0 && (x === 0 || x === 11 || x === 15)) {
              var y = w.alternate;
              y
                ? ((w.updateQueue = y.updateQueue),
                  (w.memoizedState = y.memoizedState),
                  (w.lanes = y.lanes))
                : ((w.updateQueue = null), (w.memoizedState = null));
            }
            var _ = Ws(u);
            if (_ !== null) {
              ((_.flags &= -257), $s(_, u, o, i, t), _.mode & 1 && Vs(i, m, t), (t = _), (s = m));
              var P = t.updateQueue;
              if (P === null) {
                var j = new Set();
                (j.add(s), (t.updateQueue = j));
              } else P.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Vs(i, m, t), yu());
                break e;
              }
              s = Error(c(426));
            }
          } else if (ie && o.mode & 1) {
            var de = Ws(u);
            if (de !== null) {
              ((de.flags & 65536) === 0 && (de.flags |= 256), $s(de, u, o, i, t), ji(Tn(s, o)));
              break e;
            }
          }
          ((i = s = Tn(s, o)),
            ve !== 4 && (ve = 2),
            yr === null ? (yr = [i]) : yr.push(i),
            (i = u));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var d = As(i, s, t);
                ds(i, d);
                break e;
              case 1:
                o = s;
                var a = i.type,
                  p = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (p !== null &&
                      typeof p.componentDidCatch == "function" &&
                      ($t === null || !$t.has(p))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var k = Hs(i, o, t);
                  ds(i, k);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        xa(n);
      } catch (z) {
        ((t = z), pe === n && n !== null && (pe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ga() {
    var e = hl.current;
    return ((hl.current = al), e === null ? al : e);
  }
  function yu() {
    ((ve === 0 || ve === 3 || ve === 2) && (ve = 4),
      ge === null || ((ln & 268435455) === 0 && (vl & 268435455) === 0) || Kt(ge, ke));
  }
  function Sl(e, t) {
    var n = $;
    $ |= 2;
    var r = ga();
    (ge !== e || ke !== t) && ((jt = null), on(e, t));
    do
      try {
        Tf();
        break;
      } catch (l) {
        ya(e, l);
      }
    while (!0);
    if ((Ti(), ($ = n), (hl.current = r), pe !== null)) throw Error(c(261));
    return ((ge = null), (ke = 0), ve);
  }
  function Tf() {
    for (; pe !== null;) wa(pe);
  }
  function Lf() {
    for (; pe !== null && !tc();) wa(pe);
  }
  function wa(e) {
    var t = Ea(e.alternate, e, $e);
    ((e.memoizedProps = e.pendingProps), t === null ? xa(e) : (pe = t), (su.current = null));
  }
  function xa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Ef(n, t, $e)), n !== null)) {
          pe = n;
          return;
        }
      } else {
        if (((n = _f(n, t)), n !== null)) {
          ((n.flags &= 32767), (pe = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ve = 6), (pe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        pe = t;
        return;
      }
      pe = t = e;
    } while (t !== null);
    ve === 0 && (ve = 5);
  }
  function sn(e, t, n) {
    var r = Z,
      l = Je.transition;
    try {
      ((Je.transition = null), (Z = 1), Rf(e, t, n, r));
    } finally {
      ((Je.transition = l), (Z = r));
    }
    return null;
  }
  function Rf(e, t, n, r) {
    do In();
    while (Bt !== null);
    if (($ & 6) !== 0) throw Error(c(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(c(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (fc(e, i),
      e === ge && ((pe = ge = null), (ke = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        gl ||
        ((gl = !0),
        _a(Cr, function () {
          return (In(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = Je.transition), (Je.transition = null));
      var u = Z;
      Z = 1;
      var o = $;
      (($ |= 4),
        (su.current = null),
        Cf(e, n),
        ca(n, e),
        Jc(yi),
        (Or = !!vi),
        (yi = vi = null),
        (e.current = n),
        Pf(n),
        nc(),
        ($ = o),
        (Z = u),
        (Je.transition = i));
    } else e.current = n;
    if (
      (gl && ((gl = !1), (Bt = e), (wl = l)),
      (i = e.pendingLanes),
      i === 0 && ($t = null),
      ic(n.stateNode),
      Fe(e, fe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (yl) throw ((yl = !1), (e = fu), (fu = null), e);
    return (
      (wl & 1) !== 0 && e.tag !== 0 && In(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === du ? gr++ : ((gr = 0), (du = e))) : (gr = 0),
      At(),
      null
    );
  }
  function In() {
    if (Bt !== null) {
      var e = oo(wl),
        t = Je.transition,
        n = Z;
      try {
        if (((Je.transition = null), (Z = 16 > e ? 16 : e), Bt === null)) var r = !1;
        else {
          if (((e = Bt), (Bt = null), (wl = 0), ($ & 6) !== 0)) throw Error(c(331));
          var l = $;
          for ($ |= 4, N = e.current; N !== null;) {
            var i = N,
              u = i.child;
            if ((N.flags & 16) !== 0) {
              var o = i.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var m = o[s];
                  for (N = m; N !== null;) {
                    var w = N;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hr(8, w, i);
                    }
                    var x = w.child;
                    if (x !== null) ((x.return = w), (N = x));
                    else
                      for (; N !== null;) {
                        w = N;
                        var y = w.sibling,
                          _ = w.return;
                        if ((ia(w), w === m)) {
                          N = null;
                          break;
                        }
                        if (y !== null) {
                          ((y.return = _), (N = y));
                          break;
                        }
                        N = _;
                      }
                  }
                }
                var P = i.alternate;
                if (P !== null) {
                  var j = P.child;
                  if (j !== null) {
                    P.child = null;
                    do {
                      var de = j.sibling;
                      ((j.sibling = null), (j = de));
                    } while (j !== null);
                  }
                }
                N = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && u !== null) ((u.return = i), (N = u));
            else
              e: for (; N !== null;) {
                if (((i = N), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(9, i, i.return);
                  }
                var d = i.sibling;
                if (d !== null) {
                  ((d.return = i.return), (N = d));
                  break e;
                }
                N = i.return;
              }
          }
          var a = e.current;
          for (N = a; N !== null;) {
            u = N;
            var p = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && p !== null) ((p.return = u), (N = p));
            else
              e: for (u = a; N !== null;) {
                if (((o = N), (o.flags & 2048) !== 0))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ml(9, o);
                    }
                  } catch (z) {
                    ce(o, o.return, z);
                  }
                if (o === u) {
                  N = null;
                  break e;
                }
                var k = o.sibling;
                if (k !== null) {
                  ((k.return = o.return), (N = k));
                  break e;
                }
                N = o.return;
              }
          }
          if ((($ = l), At(), pt && typeof pt.onPostCommitFiberRoot == "function"))
            try {
              pt.onPostCommitFiberRoot(Pr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((Z = n), (Je.transition = t));
      }
    }
    return !1;
  }
  function ka(e, t, n) {
    ((t = Tn(n, t)),
      (t = As(e, t, 1)),
      (e = Vt(e, t, 1)),
      (t = ze()),
      e !== null && (Wn(e, 1, t), Fe(e, t)));
  }
  function ce(e, t, n) {
    if (e.tag === 3) ka(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          ka(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r)))
          ) {
            ((e = Tn(n, e)),
              (e = Hs(t, e, 1)),
              (t = Vt(t, e, 1)),
              (e = ze()),
              t !== null && (Wn(t, 1, e), Fe(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Of(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ge === e &&
        (ke & n) === n &&
        (ve === 4 || (ve === 3 && (ke & 130023424) === ke && 500 > fe() - cu)
          ? on(e, 0)
          : (au |= n)),
      Fe(e, t));
  }
  function Sa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = ze();
    ((e = Nt(e, t)), e !== null && (Wn(e, t, n), Fe(e, n)));
  }
  function If(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Sa(e, n));
  }
  function Mf(e, t) {
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
        throw Error(c(314));
    }
    (r !== null && r.delete(t), Sa(e, n));
  }
  var Ea;
  Ea = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Re.current) Ie = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Ie = !1), Sf(e, t, n));
        Ie = (e.flags & 131072) !== 0;
      }
    else ((Ie = !1), ie && (t.flags & 1048576) !== 0 && ns(t, Jr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (dl(e, t), (e = t.pendingProps));
        var l = Sn(t, Ee.current);
        (jn(t, n), (l = Vi(null, t, r, e, l, n)));
        var i = Wi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Oe(r) ? ((i = !0), Xr(t)) : (i = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Ii(t),
              (l.updater = cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Xi(t, r, e, n),
              (t = qi(null, t, r, !0, i, n)))
            : ((t.tag = 0), ie && i && _i(t), je(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (dl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Df(r)),
            (e = ut(r, e)),
            l)
          ) {
            case 0:
              t = Ji(null, t, r, e, n);
              break e;
            case 1:
              t = Ys(null, t, r, e, n);
              break e;
            case 11:
              t = Bs(null, t, r, e, n);
              break e;
            case 14:
              t = Qs(null, t, r, ut(r.type, e), n);
              break e;
          }
          throw Error(c(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          Ji(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          Ys(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Zs(t), e === null)) throw Error(c(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            fs(e, t),
            rl(t, r, null, n));
          var u = t.memoizedState;
          if (((r = u.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((l = Tn(Error(c(423)), t)), (t = Js(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Tn(Error(c(424)), t)), (t = Js(e, t, r, n, l)));
              break e;
            } else
              for (
                We = Ft(t.stateNode.containerInfo.firstChild),
                  Ve = t,
                  ie = !0,
                  it = null,
                  n = as(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Nn(), r === l)) {
              t = Pt(e, t, n);
              break e;
            }
            je(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ms(t),
          e === null && Pi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (u = l.children),
          gi(r, l) ? (u = null) : i !== null && gi(r, i) && (t.flags |= 32),
          Xs(e, t),
          je(e, t, u, n),
          t.child
        );
      case 6:
        return (e === null && Pi(t), null);
      case 13:
        return qs(e, t, n);
      case 4:
        return (
          Mi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : je(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          Bs(e, t, r, l, n)
        );
      case 7:
        return (je(e, t, t.pendingProps, n), t.child);
      case 8:
        return (je(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (je(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (u = l.value),
            b(el, r._currentValue),
            (r._currentValue = u),
            i !== null)
          )
            if (lt(i.value, u)) {
              if (i.children === l.children && !Re.current) {
                t = Pt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null;) {
                var o = i.dependencies;
                if (o !== null) {
                  u = i.child;
                  for (var s = o.firstContext; s !== null;) {
                    if (s.context === r) {
                      if (i.tag === 1) {
                        ((s = Ct(-1, n & -n)), (s.tag = 2));
                        var m = i.updateQueue;
                        if (m !== null) {
                          m = m.shared;
                          var w = m.pending;
                          (w === null ? (s.next = s) : ((s.next = w.next), (w.next = s)),
                            (m.pending = s));
                        }
                      }
                      ((i.lanes |= n),
                        (s = i.alternate),
                        s !== null && (s.lanes |= n),
                        Ri(i.return, n, t),
                        (o.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((u = i.return), u === null)) throw Error(c(341));
                  ((u.lanes |= n),
                    (o = u.alternate),
                    o !== null && (o.lanes |= n),
                    Ri(u, n, t),
                    (u = i.sibling));
                } else u = i.child;
                if (u !== null) u.return = i;
                else
                  for (u = i; u !== null;) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((i = u.sibling), i !== null)) {
                      ((i.return = u.return), (u = i));
                      break;
                    }
                    u = u.return;
                  }
                i = u;
              }
          (je(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          jn(t, n),
          (l = Ye(l)),
          (r = r(l)),
          (t.flags |= 1),
          je(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = ut(r, t.pendingProps)), (l = ut(r.type, l)), Qs(e, t, r, l, n));
      case 15:
        return Ks(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          dl(e, t),
          (t.tag = 1),
          Oe(r) ? ((e = !0), Xr(t)) : (e = !1),
          jn(t, n),
          Ds(t, r, l),
          Xi(t, r, l, n),
          qi(null, t, r, !0, e, n)
        );
      case 19:
        return ea(e, t, n);
      case 22:
        return Gs(e, t, n);
    }
    throw Error(c(156, t.tag));
  };
  function _a(e, t) {
    return no(e, t);
  }
  function Ff(e, t, n, r) {
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
  function qe(e, t, n, r) {
    return new Ff(e, t, n, r);
  }
  function gu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Df(e) {
    if (typeof e == "function") return gu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ft)) return 11;
      if (e === dt) return 14;
    }
    return 2;
  }
  function Gt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = qe(e.tag, t, e.key, e.mode)),
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
  function El(e, t, n, r, l, i) {
    var u = 2;
    if (((r = e), typeof e == "function")) gu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case Te:
          return an(n.children, l, i, t);
        case Ke:
          ((u = 8), (l |= 8));
          break;
        case zt:
          return ((e = qe(12, n, t, l | 2)), (e.elementType = zt), (e.lanes = i), e);
        case Ue:
          return ((e = qe(13, n, t, l)), (e.elementType = Ue), (e.lanes = i), e);
        case nt:
          return ((e = qe(19, n, t, l)), (e.elementType = nt), (e.lanes = i), e);
        case ae:
          return _l(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case xt:
                u = 10;
                break e;
              case Yt:
                u = 9;
                break e;
              case ft:
                u = 11;
                break e;
              case dt:
                u = 14;
                break e;
              case Le:
                ((u = 16), (r = null));
                break e;
            }
          throw Error(c(130, e == null ? e : typeof e, ""));
      }
    return ((t = qe(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
  }
  function an(e, t, n, r) {
    return ((e = qe(7, e, r, t)), (e.lanes = n), e);
  }
  function _l(e, t, n, r) {
    return (
      (e = qe(22, e, r, t)),
      (e.elementType = ae),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function wu(e, t, n) {
    return ((e = qe(6, e, null, t)), (e.lanes = n), e);
  }
  function xu(e, t, n) {
    return (
      (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Uf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Gl(0)),
      (this.expirationTimes = Gl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ku(e, t, n, r, l, i, u, o, s) {
    return (
      (e = new Uf(e, t, n, o, s)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = qe(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ii(i),
      e
    );
  }
  function Af(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Pe,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Na(e) {
    if (!e) return Ut;
    e = e._reactInternals;
    e: {
      if (Zt(e) !== e || e.tag !== 1) throw Error(c(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Oe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(c(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Oe(n)) return bo(e, n, t);
    }
    return t;
  }
  function Ca(e, t, n, r, l, i, u, o, s) {
    return (
      (e = ku(n, r, !0, e, l, i, u, o, s)),
      (e.context = Na(null)),
      (n = e.current),
      (r = ze()),
      (l = Qt(n)),
      (i = Ct(r, l)),
      (i.callback = t ?? null),
      Vt(n, i, l),
      (e.current.lanes = l),
      Wn(e, l, r),
      Fe(e, r),
      e
    );
  }
  function Nl(e, t, n, r) {
    var l = t.current,
      i = ze(),
      u = Qt(l);
    return (
      (n = Na(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(i, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Vt(l, t, u)),
      e !== null && (at(e, l, u, i), nl(e, l, u)),
      u
    );
  }
  function Cl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Pa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Su(e, t) {
    (Pa(e, t), (e = e.alternate) && Pa(e, t));
  }
  function Hf() {
    return null;
  }
  var ja =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Eu(e) {
    this._internalRoot = e;
  }
  ((Pl.prototype.render = Eu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      Nl(e, t, null, null);
    }),
    (Pl.prototype.unmount = Eu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (un(function () {
            Nl(null, e, null, null);
          }),
            (t[kt] = null));
        }
      }));
  function Pl(e) {
    this._internalRoot = e;
  }
  Pl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = co();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
      (Ot.splice(n, 0, e), n === 0 && mo(e));
    }
  };
  function _u(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function jl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function za() {}
  function Vf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var m = Cl(u);
          i.call(m);
        };
      }
      var u = Ca(t, r, e, 0, null, !1, !1, "", za);
      return (
        (e._reactRootContainer = u),
        (e[kt] = u.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        un(),
        u
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var m = Cl(s);
        o.call(m);
      };
    }
    var s = ku(e, 0, !1, null, null, !1, !1, "", za);
    return (
      (e._reactRootContainer = s),
      (e[kt] = s.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      un(function () {
        Nl(t, s, n, r);
      }),
      s
    );
  }
  function zl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = Cl(u);
          o.call(s);
        };
      }
      Nl(t, u, e, l);
    } else u = Vf(n, t, e, l, r);
    return Cl(u);
  }
  ((so = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), Fe(t, fe()), ($ & 6) === 0 && ((On = fe() + 500), At()));
        }
        break;
      case 13:
        (un(function () {
          var r = Nt(e, 1);
          if (r !== null) {
            var l = ze();
            at(r, e, 1, l);
          }
        }),
          Su(e, 1));
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
          var n = ze();
          at(t, e, 134217728, n);
        }
        Su(e, 134217728);
      }
    }),
    (ao = function (e) {
      if (e.tag === 13) {
        var t = Qt(e),
          n = Nt(e, t);
        if (n !== null) {
          var r = ze();
          at(n, e, t, r);
        }
        Su(e, t);
      }
    }),
    (co = function () {
      return Z;
    }),
    (fo = function (e, t) {
      var n = Z;
      try {
        return ((Z = e), t());
      } finally {
        Z = n;
      }
    }),
    (Vl = function (e, t, n) {
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
                var l = Kr(r);
                if (!l) throw Error(c(90));
                (Mu(r), Ol(r, l));
              }
            }
          }
          break;
        case "textarea":
          Hu(e, n);
          break;
        case "select":
          ((t = n.value), t != null && cn(e, !!n.multiple, t, !1));
      }
    }),
    (Yu = hu),
    (Zu = un));
  var Wf = { usingClientEntryPoint: !1, Events: [ir, xn, Kr, Gu, Xu, hu] },
    wr = {
      findFiberByHostInstance: Jt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    $f = {
      bundleType: wr.bundleType,
      version: wr.version,
      rendererPackageName: wr.rendererPackageName,
      rendererConfig: wr.rendererConfig,
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
        return ((e = eo(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: wr.findFiberByHostInstance || Hf,
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
        ((Pr = Tl.inject($f)), (pt = Tl));
      } catch {}
  }
  return (
    (De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wf),
    (De.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_u(t)) throw Error(c(200));
      return Af(e, t, null, n);
    }),
    (De.createRoot = function (e, t) {
      if (!_u(e)) throw Error(c(299));
      var n = !1,
        r = "",
        l = ja;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ku(e, 1, !1, null, null, n, !1, r, l)),
        (e[kt] = t.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        new Eu(t)
      );
    }),
    (De.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(c(188))
          : ((e = Object.keys(e).join(",")), Error(c(268, e)));
      return ((e = eo(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (De.flushSync = function (e) {
      return un(e);
    }),
    (De.hydrate = function (e, t, n) {
      if (!jl(t)) throw Error(c(200));
      return zl(null, e, t, !0, n);
    }),
    (De.hydrateRoot = function (e, t, n) {
      if (!_u(e)) throw Error(c(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        u = ja;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Ca(t, null, e, 1, n ?? null, l, !1, i, u)),
        (e[kt] = t.current),
        nr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Pl(t);
    }),
    (De.render = function (e, t, n) {
      if (!jl(t)) throw Error(c(200));
      return zl(null, e, t, !1, n);
    }),
    (De.unmountComponentAtNode = function (e) {
      if (!jl(e)) throw Error(c(40));
      return e._reactRootContainer
        ? (un(function () {
            zl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[kt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (De.unstable_batchedUpdates = hu),
    (De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!jl(n)) throw Error(c(200));
      if (e == null || e._reactInternals === void 0) throw Error(c(38));
      return zl(e, t, n, !1, r);
    }),
    (De.version = "18.3.1-next-f1338f8080-20240426"),
    De
  );
}
var Da;
function Jf() {
  if (Da) return Pu.exports;
  Da = 1;
  function v() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (S) {
        console.error(S);
      }
  }
  return (v(), (Pu.exports = Zf()), Pu.exports);
}
var Ua;
function qf() {
  if (Ua) return Ll;
  Ua = 1;
  var v = Jf();
  return ((Ll.createRoot = v.createRoot), (Ll.hydrateRoot = v.hydrateRoot), Ll);
}
var bf = qf();
function $a(v) {
  return `#${v}`;
}
function Ba(v) {
  const S = v.replace(/^\//, "").replace(/\/$/, "");
  return S ? `#/${S}` : "#/";
}
function Ru(v) {
  const S = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return S
    ? S.startsWith("/")
      ? { kind: "route", path: S.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: S }
    : null;
}
function Ou(v, S = "smooth") {
  if (typeof document > "u") return !1;
  const c = document.getElementById(v);
  return c ? (c.scrollIntoView({ behavior: S, block: "start" }), !0) : !1;
}
function ed(v, S = "smooth") {
  if (typeof window > "u") return;
  const c = $a(v);
  if (Ou(v, S)) {
    window.history.replaceState(null, "", c);
    return;
  }
  window.location.hash = c;
}
function td(v) {
  typeof window > "u" || (window.location.hash = Ba(v));
}
function nd() {
  const v = Ru();
  return (v == null ? void 0 : v.kind) === "route" ? v.path : "";
}
function rd(v) {
  return v.kind === "route" ? Ba(v.path) : $a(v.id);
}
function ld(v, S) {
  if ((v.preventDefault(), S.kind === "route")) {
    td(S.path);
    return;
  }
  ed(S.id);
}
function Qa() {
  if (typeof window > "u") return;
  const v = Ru();
  (v == null ? void 0 : v.kind) === "section" && requestAnimationFrame(() => Ou(v.id, "auto"));
}
function id(v, S) {
  if (typeof window > "u") return () => {};
  const c = () => {
    const M = Ru();
    if (!M) {
      v("");
      return;
    }
    if (M.kind === "route") {
      v(M.path);
      return;
    }
    (Ou(M.id, "smooth"), v(""));
  };
  return (
    c(),
    window.addEventListener("hashchange", c),
    () => window.removeEventListener("hashchange", c)
  );
}
function ud(v = "") {
  const [S, c] = se.useState(() => (typeof window < "u" ? nd() : v));
  return (se.useEffect(() => id(c), []), S || v);
}
function od({ routes: v, defaultRoute: S = "", className: c }) {
  const M = ud(S);
  se.useEffect(() => {
    Qa();
  }, []);
  const T = M in v ? M : S,
    O = v[T] ?? v[S];
  return h.jsx("div", { className: c, children: O });
}
function be({ target: v, children: S, className: c, onClick: M, ...T }) {
  return h.jsx("a", {
    href: rd(v),
    className: c,
    onClick: (O) => {
      (ld(O, v), M == null || M(O));
    },
    ...T,
    children: S,
  });
}
const sd = {
  dark: {
    wrap: "min-h-screen bg-black text-white",
    eyebrow: "text-xs uppercase tracking-[0.2em] text-white/45",
    title: "mt-3 text-4xl md:text-5xl font-semibold tracking-tight",
    body: "mt-6 text-base leading-relaxed text-white/65 max-w-2xl",
    link: "text-sm text-white/50 hover:text-white transition-colors",
  },
  light: {
    wrap: "min-h-screen bg-white text-slate-900",
    eyebrow: "text-xs uppercase tracking-[0.2em] text-slate-500",
    title: "mt-3 text-4xl md:text-5xl font-semibold tracking-tight",
    body: "mt-6 text-base leading-relaxed text-slate-600 max-w-2xl",
    link: "text-sm text-slate-500 hover:text-slate-900 transition-colors",
  },
};
function ad({ title: v, eyebrow: S = "Explore", description: c, theme: M = "dark", children: T }) {
  const O = sd[M];
  return h.jsx("div", {
    className: O.wrap,
    children: h.jsxs("div", {
      className: "mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24",
      children: [
        h.jsx(be, {
          target: { kind: "route", path: "" },
          className: O.link,
          children: "← Back to home",
        }),
        h.jsx("p", { className: `${O.eyebrow} mt-10`, children: S }),
        h.jsx("h1", { className: O.title, children: v }),
        c ? h.jsx("p", { className: O.body, children: c }) : null,
        T,
      ],
    }),
  });
}
function cd(v, S, c = "dark") {
  const M = { "": v };
  for (const T of S)
    M[T.path] = h.jsx(
      ad,
      { title: T.title, eyebrow: T.eyebrow, description: T.description, theme: c },
      T.path,
    );
  return M;
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fd = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ka = (...v) =>
    v
      .filter((S, c, M) => !!S && S.trim() !== "" && M.indexOf(S) === c)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var dd = {
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
 */ const pd = se.forwardRef(
  (
    {
      color: v = "currentColor",
      size: S = 24,
      strokeWidth: c = 2,
      absoluteStrokeWidth: M,
      className: T = "",
      children: O,
      iconNode: A,
      ...X
    },
    W,
  ) =>
    se.createElement(
      "svg",
      {
        ref: W,
        ...dd,
        width: S,
        height: S,
        stroke: v,
        strokeWidth: M ? (Number(c) * 24) / Number(S) : c,
        className: Ka("lucide", T),
        ...X,
      },
      [...A.map(([me, D]) => se.createElement(me, D)), ...(Array.isArray(O) ? O : [O])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gt = (v, S) => {
  const c = se.forwardRef(({ className: M, ...T }, O) =>
    se.createElement(pd, { ref: O, iconNode: S, className: Ka(`lucide-${fd(v)}`, M), ...T }),
  );
  return ((c.displayName = `${v}`), c);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const md = gt("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hd = gt("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vd = gt("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yd = gt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gd = gt("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wd = gt("Play", [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xd = gt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kd = gt("ShoppingBag", [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sd = gt("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ed = gt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function _d() {
  return h.jsx("div", {
    className: "absolute inset-x-0 top-0 z-30 bg-[#F9F4F0] py-2.5 text-black md:py-3",
    children: h.jsxs("div", {
      className: "flex items-center justify-center gap-3 px-4 text-xs sm:text-sm",
      children: [
        h.jsx(hd, { className: "h-4 w-4 shrink-0 opacity-60", "aria-hidden": !0 }),
        h.jsx("p", { children: "free shipping for orders over 50€" }),
        h.jsx(vd, { className: "h-4 w-4 shrink-0 opacity-60", "aria-hidden": !0 }),
      ],
    }),
  });
}
const Nd =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_101925_8e509c31-4e75-4ae1-b164-2605265b2d47.png&w=1280&q=85",
  Tu = [
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_112022_cddf2487-4ffe-45b6-ba4c-99ab79003cc5.mp4",
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_175400_b46d1cd2-2050-45e2-9d13-b9c0bacb16b3.mp4",
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_182440_671605c8-2ed8-4507-a4cb-a62a8f61316f.mp4",
  ],
  Aa =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260518_193822_8c95f5ed-b142-454f-ab87-59ad1f09e758.png&w=1280&q=85",
  Ha =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260518_194048_278bf3cc-7d1f-43c1-9dc7-73d8fcd9949c.png&w=1280&q=85",
  Va =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260518_194058_d89610de-05f8-45e4-8196-0680296c565a.png&w=1280&q=85",
  Cd =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260518_194112_1763cbb2-3171-4ad3-9f38-1b738b8f1bb6.png&w=1280&q=85",
  Wa = [
    { category: "ILLUMINATE", name: "Illuminating cleansing gel", price: "€36,00", image: Aa },
    {
      category: "UNIFY",
      subcategory: "TIGHTEN PORES",
      name: "Unifying serum spray",
      price: "€34,00",
      image: Ha,
    },
    {
      category: "NATURAL GLOW",
      name: "Super glow set",
      price: "€92,00",
      oldPrice: "€99,00",
      image: Va,
      isSet: !0,
    },
    {
      category: "PROTECT",
      subcategory: "ILLUMINATE",
      name: "Radiance day oil",
      price: "€59,00",
      image: Cd,
    },
    {
      category: "HYDRATE",
      subcategory: "NOURISH",
      name: "Deep moisture cream",
      price: "€48,00",
      image: Aa,
    },
    {
      category: "RENEW",
      name: "Night repair elixir",
      price: "€72,00",
      oldPrice: "€79,00",
      image: Ha,
      isSet: !0,
    },
    {
      category: "SMOOTH",
      subcategory: "REFINE",
      name: "Gentle exfoliating toner",
      price: "€42,00",
      image: Va,
    },
  ],
  Pd = [
    {
      name: "face",
      slug: "face",
      video:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_203023_87a26602-2898-4acc-a396-c7a2b5ad84fd.mp4",
    },
    {
      name: "beauty tools",
      slug: "beauty-tools",
      video:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_203415_b86e3f19-2aec-46cd-9a86-b64c40118e38.mp4",
    },
    {
      name: "body",
      slug: "body",
      video:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_203051_85fee398-ea01-4aa0-972b-137a74213be5.mp4",
    },
  ],
  Ga = [
    { label: "shop", section: "best-sellers" },
    { label: "learn", section: "hero" },
    { label: "journal", route: "journal" },
    { label: "theme", section: "categories" },
  ];
function Iu(v = 0.15) {
  const S = se.useRef(null),
    [c, M] = se.useState(!1);
  return (
    se.useEffect(() => {
      const T = S.current;
      if (!T || c) return;
      const O = new IntersectionObserver(
        ([A]) => {
          A != null && A.isIntersecting && (M(!0), O.unobserve(T));
        },
        { threshold: v },
      );
      return (O.observe(T), () => O.disconnect());
    }, [c, v]),
    { ref: S, isVisible: c }
  );
}
function jd() {
  const { ref: v, isVisible: S } = Iu(0.15),
    [c, M] = se.useState("best-sellers"),
    [T, O] = se.useState(0),
    A = se.useRef(null),
    X = c === "sets" ? Wa.filter((D) => D.isSet) : Wa,
    W = se.useCallback(() => {
      const D = A.current;
      if (!D) return;
      const G = D.scrollWidth - D.clientWidth;
      O(G > 0 ? D.scrollLeft / G : 0);
    }, []);
  se.useEffect(() => {
    const D = A.current;
    if (D)
      return (
        W(),
        D.addEventListener("scroll", W, { passive: !0 }),
        () => D.removeEventListener("scroll", W)
      );
  }, [W, c]);
  const me = (D) => {
    const G = A.current;
    G &&
      (Math.abs(D.deltaY) <= Math.abs(D.deltaX) ||
        (D.preventDefault(), (G.scrollLeft += D.deltaY)));
  };
  return h.jsx("section", {
    id: "best-sellers",
    ref: v,
    className: "scroll-mt-24 bg-[#F9F4F0] px-4 py-12 text-black sm:px-6 sm:py-16 lg:px-10",
    children: h.jsxs("div", {
      className: `transition-all duration-[800ms] ${S ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`,
      children: [
        h.jsxs("div", {
          className: "mb-8 flex flex-wrap items-end gap-6 sm:mb-10",
          children: [
            h.jsxs("button", {
              type: "button",
              className: `flex items-center gap-3 text-2xl font-medium capitalize sm:text-4xl md:text-5xl ${c === "best-sellers" ? "text-[#1a1a1a]" : "text-gray-400 hover:text-gray-600"}`,
              onClick: () => M("best-sellers"),
              children: [
                "best sellers",
                c === "best-sellers" &&
                  h.jsx("span", {
                    className: "animate-scale-in h-5 w-5 rounded-full bg-[#1a1a1a] sm:h-6 sm:w-6",
                  }),
              ],
            }),
            h.jsxs("button", {
              type: "button",
              className: `flex items-center gap-3 text-2xl font-medium capitalize sm:text-4xl md:text-5xl ${c === "sets" ? "text-[#1a1a1a]" : "text-gray-400 hover:text-gray-600"}`,
              onClick: () => M("sets"),
              children: [
                "sets",
                c === "sets" &&
                  h.jsx("span", {
                    className: "animate-scale-in h-5 w-5 rounded-full bg-[#1a1a1a] sm:h-6 sm:w-6",
                  }),
              ],
            }),
          ],
        }),
        h.jsx("div", {
          ref: A,
          className: "scrollbar-hide flex overflow-x-auto",
          onWheel: me,
          children: X.map((D, G) =>
            h.jsxs(
              "article",
              {
                className: `group -ml-px w-[260px] shrink-0 border border-gray-200 first:ml-0 transition-all duration-500 sm:w-[280px] md:w-[300px] lg:w-[calc(25%-1px)] ${S ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`,
                style: { transitionDelay: `${200 + G * 80}ms` },
                children: [
                  h.jsxs("div", {
                    className: "flex h-12 flex-col justify-center px-4",
                    children: [
                      h.jsx("p", {
                        className: "text-xs font-medium uppercase tracking-wider",
                        children: D.category,
                      }),
                      D.subcategory &&
                        h.jsx("p", {
                          className: "mt-0.5 text-xs uppercase text-gray-500",
                          children: D.subcategory,
                        }),
                    ],
                  }),
                  h.jsx("div", {
                    className: "mx-4 aspect-[3/4] overflow-hidden rounded-lg bg-[#F9F4F0]",
                    children: h.jsx("img", {
                      src: D.image,
                      alt: D.name,
                      className:
                        "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
                      loading: "lazy",
                    }),
                  }),
                  h.jsxs("div", {
                    className: "px-4 py-5 text-center",
                    children: [
                      h.jsx("h3", { className: "text-sm", children: D.name }),
                      h.jsxs("div", {
                        className: "mt-2 flex items-center justify-center gap-2 text-sm",
                        children: [
                          h.jsx("span", { children: D.price }),
                          D.oldPrice &&
                            h.jsx("span", {
                              className: "text-gray-400 line-through",
                              children: D.oldPrice,
                            }),
                        ],
                      }),
                      h.jsx(be, {
                        target: { kind: "route", path: "shop" },
                        className: "mt-4 inline-block",
                        children: h.jsx("button", {
                          type: "button",
                          className:
                            "btn-primary rounded-full bg-[#1a1a1a] px-6 py-2 text-xs text-white",
                          children: "shop now",
                        }),
                      }),
                    ],
                  }),
                ],
              },
              D.name,
            ),
          ),
        }),
        h.jsx("div", {
          className: "mx-auto mt-8 max-w-[280px] sm:mt-10",
          children: h.jsx("div", {
            className: "relative h-[2px] overflow-hidden rounded-full bg-gray-300",
            children: h.jsx("div", {
              className:
                "absolute left-0 top-0 h-full w-[30%] rounded-full bg-[#1a1a1a] transition-transform duration-150",
              style: { transform: `translateX(${T * (100 / 0.3)}%)` },
            }),
          }),
        }),
      ],
    }),
  });
}
function zd() {
  const { ref: v, isVisible: S } = Iu(0.15);
  return h.jsx("section", {
    id: "categories",
    ref: v,
    className: "scroll-mt-24 bg-black text-white",
    children: h.jsx("div", {
      className: `grid grid-cols-1 md:grid-cols-3 ${S ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} transition-all duration-1000`,
      children: Pd.map((c) =>
        h.jsxs(
          "article",
          {
            className:
              "group relative min-h-[400px] overflow-hidden sm:min-h-[500px] md:min-h-[750px]",
            children: [
              h.jsx("div", {
                className: "absolute inset-0 overflow-hidden",
                children: h.jsx("video", {
                  src: c.video,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  className:
                    "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
                }),
              }),
              h.jsx("div", {
                className:
                  "absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20",
              }),
              h.jsxs("div", {
                className:
                  "relative z-10 flex h-full min-h-[400px] flex-col justify-between p-6 sm:min-h-[500px] sm:p-8 md:min-h-[750px] md:p-12",
                children: [
                  h.jsx("p", {
                    className:
                      "text-5xl font-medium capitalize transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-6xl md:text-7xl lg:text-8xl",
                    style: { writingMode: "vertical-lr", transform: "rotate(180deg)" },
                    children: c.name,
                  }),
                  h.jsx(be, {
                    target: { kind: "route", path: `shop/${c.slug}` },
                    children: h.jsxs("button", {
                      type: "button",
                      className:
                        "btn-primary w-fit rounded-full bg-white px-8 py-3 text-sm text-black",
                      children: ["shop ", c.name],
                    }),
                  }),
                ],
              }),
            ],
          },
          c.slug,
        ),
      ),
    }),
  });
}
function Td() {
  return h.jsxs("svg", {
    className: "absolute -bottom-1 left-0 h-4 w-full",
    viewBox: "0 0 200 16",
    fill: "none",
    "aria-hidden": !0,
    children: [
      h.jsx("path", {
        d: "M0 12 Q25 4 50 12 T100 12 T150 12 T200 12",
        stroke: "#C8A45C",
        strokeWidth: "2",
      }),
      h.jsx("path", {
        d: "M0 10 Q25 6 50 10 T100 10 T150 10 T200 10",
        stroke: "#C8A45C",
        strokeWidth: "1.5",
      }),
      h.jsx("path", {
        d: "M0 8 Q25 8 50 8 T100 8 T150 8 T200 8",
        stroke: "#C8A45C",
        strokeWidth: "1",
      }),
    ],
  });
}
function Ld() {
  const { ref: v, isVisible: S } = Iu(0.15),
    [c, M] = se.useState(0),
    [T, O] = se.useState(!0);
  return (
    se.useEffect(() => {
      if (!T) return;
      const A = window.setInterval(() => {
        M((X) => (X + 1) % Tu.length);
      }, 5e3);
      return () => window.clearInterval(A);
    }, [T]),
    h.jsxs("section", {
      id: "hero",
      ref: v,
      className: "relative flex min-h-screen scroll-mt-0 flex-col lg:flex-row",
      children: [
        h.jsxs("div", {
          className: "relative min-h-[60vh] w-full lg:min-h-0 lg:w-1/2",
          children: [
            h.jsx("img", {
              src: Nd,
              alt: "",
              className: "absolute inset-0 h-full w-full object-cover",
            }),
            h.jsx("div", { className: "absolute inset-0 bg-black/30", "aria-hidden": !0 }),
            h.jsxs("div", {
              className: `relative z-10 flex h-full min-h-[60vh] flex-col justify-end px-6 pb-16 pt-32 sm:px-10 lg:min-h-0 lg:pb-20 lg:pt-40 ${S ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} transition-all duration-1000`,
              children: [
                h.jsxs("h1", {
                  className:
                    "mb-6 text-4xl font-light leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-[clamp(3.5rem,5vw,6rem)]",
                  children: [
                    "ethical beauty,",
                    h.jsx("br", {}),
                    h.jsxs("span", {
                      className: "relative inline-block",
                      children: ["sustainable impact.", h.jsx(Td, {})],
                    }),
                  ],
                }),
                h.jsx("p", {
                  className: "mb-10 max-w-md text-sm text-white/80 md:text-base",
                  children:
                    "Committed to sustainable beauty and minimize our impact on the planet.",
                }),
                h.jsx(be, {
                  target: { kind: "route", path: "about" },
                  children: h.jsx("button", {
                    type: "button",
                    className: "btn-primary rounded-full bg-white px-10 py-4 text-sm text-black",
                    children: "about us",
                  }),
                }),
              ],
            }),
          ],
        }),
        h.jsxs("div", {
          className: "relative min-h-[40vh] w-full overflow-hidden lg:min-h-0 lg:w-1/2",
          children: [
            Tu.map((A, X) =>
              h.jsx(
                "video",
                {
                  src: A,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${X === c ? "opacity-100" : "opacity-0"}`,
                },
                A,
              ),
            ),
            h.jsxs("div", {
              className: "absolute bottom-6 right-6 z-20 flex items-center gap-3",
              children: [
                h.jsx("div", {
                  className: "flex items-center gap-2",
                  children: Tu.map((A, X) =>
                    h.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Go to slide ${X + 1}`,
                        className: `h-2 w-2 rounded-full transition-all ${X === c ? "scale-125 bg-white" : "bg-white/50"}`,
                        onClick: () => M(X),
                      },
                      A,
                    ),
                  ),
                }),
                h.jsx("button", {
                  type: "button",
                  "aria-label": T ? "Pause slideshow" : "Play slideshow",
                  className:
                    "flex h-8 w-8 items-center justify-center rounded-full border border-white/50 text-white",
                  onClick: () => O((A) => !A),
                  children: T
                    ? h.jsx(gd, { className: "h-3.5 w-3.5" })
                    : h.jsx(wd, { className: "h-3.5 w-3.5" }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Rd({ open: v, onClose: S }) {
  return (
    se.useEffect(() => {
      if (!v) return;
      const c = (M) => {
        M.key === "Escape" && S();
      };
      return (
        (document.body.style.overflow = "hidden"),
        window.addEventListener("keydown", c),
        () => {
          ((document.body.style.overflow = ""), window.removeEventListener("keydown", c));
        }
      );
    }, [v, S]),
    h.jsx("div", {
      className: `fixed inset-0 z-40 bg-black/95 backdrop-blur-sm transition-opacity duration-500 md:hidden ${v ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
      "aria-hidden": !v,
      children: h.jsx("nav", {
        className: "flex h-full flex-col items-center justify-center gap-8",
        "aria-label": "Mobile",
        children: Ga.map((c) =>
          "route" in c
            ? h.jsx(
                be,
                {
                  target: { kind: "route", path: c.route },
                  className: "text-3xl font-light capitalize text-white",
                  onClick: S,
                  children: c.label,
                },
                c.label,
              )
            : h.jsx(
                be,
                {
                  target: { kind: "section", id: c.section },
                  className: "text-3xl font-light capitalize text-white",
                  onClick: S,
                  children: c.label,
                },
                c.label,
              ),
        ),
      }),
    })
  );
}
function Od() {
  const [v, S] = se.useState(!1);
  return h.jsxs(h.Fragment, {
    children: [
      h.jsx("header", {
        className: "absolute inset-x-0 top-[38px] z-30 px-4 sm:px-6 md:top-[42px] lg:px-10",
        children: h.jsxs("div", {
          className: "flex items-center justify-between text-white",
          children: [
            h.jsx(be, {
              target: { kind: "section", id: "hero" },
              className: "text-lg font-bold uppercase tracking-[0.2em] sm:text-xl",
              children: "STRETCH",
            }),
            h.jsx("nav", {
              className: "hidden items-center gap-8 md:flex",
              "aria-label": "Primary",
              children: Ga.map((c) =>
                "route" in c
                  ? h.jsxs(
                      be,
                      {
                        target: { kind: "route", path: c.route },
                        className: "group relative text-sm capitalize",
                        children: [
                          c.label,
                          h.jsx("span", {
                            className:
                              "absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full",
                          }),
                        ],
                      },
                      c.label,
                    )
                  : h.jsxs(
                      be,
                      {
                        target: { kind: "section", id: c.section },
                        className: "group relative text-sm capitalize",
                        children: [
                          c.label,
                          h.jsx("span", {
                            className:
                              "absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full",
                          }),
                        ],
                      },
                      c.label,
                    ),
              ),
            }),
            h.jsxs("div", {
              className: "flex items-center gap-2 sm:gap-3",
              children: [
                h.jsxs("div", {
                  className: "hidden items-center gap-1.5 sm:flex",
                  children: [
                    h.jsxs("span", {
                      className: "flex h-4 w-6 overflow-hidden rounded-sm",
                      children: [
                        h.jsx("span", { className: "w-1/3 bg-blue-700" }),
                        h.jsx("span", { className: "w-1/3 bg-white" }),
                        h.jsx("span", { className: "w-1/3 bg-red-600" }),
                      ],
                    }),
                    h.jsx("span", {
                      className: "text-xs uppercase tracking-wide",
                      children: "eur €",
                    }),
                    h.jsx(md, { className: "h-3.5 w-3.5 opacity-70", "aria-hidden": !0 }),
                  ],
                }),
                h.jsx("span", {
                  className: "mx-2 hidden h-5 w-px bg-white/30 sm:block",
                  "aria-hidden": !0,
                }),
                h.jsx(be, {
                  target: { kind: "route", path: "account" },
                  className: "hidden sm:inline-flex",
                  "aria-label": "Account",
                  children: h.jsx(Sd, { className: "h-5 w-5" }),
                }),
                h.jsx(be, {
                  target: { kind: "route", path: "search" },
                  className: "inline-flex",
                  "aria-label": "Search",
                  children: h.jsx(xd, { className: "h-5 w-5" }),
                }),
                h.jsx(be, {
                  target: { kind: "route", path: "shop" },
                  className: "inline-flex",
                  "aria-label": "Shopping bag",
                  children: h.jsx(kd, { className: "h-5 w-5" }),
                }),
                h.jsx("button", {
                  type: "button",
                  className: "inline-flex md:hidden",
                  "aria-label": v ? "Close menu" : "Open menu",
                  onClick: () => S((c) => !c),
                  children: v
                    ? h.jsx(Ed, { className: "h-6 w-6" })
                    : h.jsx(yd, { className: "h-6 w-6" }),
                }),
              ],
            }),
          ],
        }),
      }),
      h.jsx(Rd, { open: v, onClose: () => S(!1) }),
    ],
  });
}
function Id() {
  return h.jsxs(h.Fragment, {
    children: [
      h.jsxs("div", {
        className: "relative",
        children: [h.jsx(_d, {}), h.jsx(Od, {}), h.jsx(Ld, {})],
      }),
      h.jsx(jd, {}),
      h.jsx(zd, {}),
    ],
  });
}
const Md = [
  { path: "shop", title: "Shop", description: "Explore STRETCH skincare, sets, and tools." },
  {
    path: "shop/face",
    title: "Shop Face",
    description: "Serums, cleansers, and daily radiance essentials.",
  },
  {
    path: "shop/beauty-tools",
    title: "Shop Beauty Tools",
    description: "Brushes, rollers, and ritual accessories.",
  },
  {
    path: "shop/body",
    title: "Shop Body",
    description: "Hydrating body care with sustainable formulas.",
  },
  {
    path: "about",
    title: "About Us",
    description: "Ethical beauty with a lighter footprint on the planet.",
  },
  {
    path: "journal",
    title: "Journal",
    description: "Stories on sustainable skincare and mindful rituals.",
  },
  { path: "account", title: "Account", description: "Manage orders, addresses, and preferences." },
  { path: "search", title: "Search", description: "Find products across the STRETCH collection." },
];
function Fd() {
  return (
    se.useEffect(() => {
      Qa();
    }, []),
    h.jsx(od, { routes: cd(h.jsx(Id, {}), Md, "light") })
  );
}
bf.createRoot(document.getElementById("root")).render(
  h.jsx(se.StrictMode, { children: h.jsx(Fd, {}) }),
);
