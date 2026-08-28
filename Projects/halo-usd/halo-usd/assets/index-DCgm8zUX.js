(function () {
  const N = document.createElement("link").relList;
  if (N && N.supports && N.supports("modulepreload")) return;
  for (const I of document.querySelectorAll('link[rel="modulepreload"]')) D(I);
  new MutationObserver((I) => {
    for (const F of I)
      if (F.type === "childList")
        for (const ne of F.addedNodes) ne.tagName === "LINK" && ne.rel === "modulepreload" && D(ne);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(I) {
    const F = {};
    return (
      I.integrity && (F.integrity = I.integrity),
      I.referrerPolicy && (F.referrerPolicy = I.referrerPolicy),
      I.crossOrigin === "use-credentials"
        ? (F.credentials = "include")
        : I.crossOrigin === "anonymous"
          ? (F.credentials = "omit")
          : (F.credentials = "same-origin"),
      F
    );
  }
  function D(I) {
    if (I.ep) return;
    I.ep = !0;
    const F = m(I);
    fetch(I.href, F);
  }
})();
var Po = { exports: {} },
  xr = {},
  jo = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Yf() {
  if (za) return U;
  za = 1;
  var y = Symbol.for("react.element"),
    N = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    D = Symbol.for("react.strict_mode"),
    I = Symbol.for("react.profiler"),
    F = Symbol.for("react.provider"),
    ne = Symbol.for("react.context"),
    oe = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    ae = Symbol.for("react.memo"),
    he = Symbol.for("react.lazy"),
    re = Symbol.iterator;
  function q(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (re && c[re]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var Be = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    $e = Object.assign,
    b = {};
  function Y(c, g, M) {
    ((this.props = c), (this.context = g), (this.refs = b), (this.updater = M || Be));
  }
  ((Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (c, g) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, g, "setState");
    }),
    (Y.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function yt() {}
  yt.prototype = Y.prototype;
  function at(c, g, M) {
    ((this.props = c), (this.context = g), (this.refs = b), (this.updater = M || Be));
  }
  var be = (at.prototype = new yt());
  ((be.constructor = at), $e(be, Y.prototype), (be.isPureReactComponent = !0));
  var ke = Array.isArray,
    et = Object.prototype.hasOwnProperty,
    Ce = { current: null },
    ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, g, M) {
    var A,
      V = {},
      B = null,
      G = null;
    if (g != null)
      for (A in (g.ref !== void 0 && (G = g.ref), g.key !== void 0 && (B = "" + g.key), g))
        et.call(g, A) && !ze.hasOwnProperty(A) && (V[A] = g[A]);
    var Q = arguments.length - 2;
    if (Q === 1) V.children = M;
    else if (1 < Q) {
      for (var ee = Array(Q), Ue = 0; Ue < Q; Ue++) ee[Ue] = arguments[Ue + 2];
      V.children = ee;
    }
    if (c && c.defaultProps) for (A in ((Q = c.defaultProps), Q)) V[A] === void 0 && (V[A] = Q[A]);
    return { $$typeof: y, type: c, key: B, ref: G, props: V, _owner: Ce.current };
  }
  function Pt(c, g) {
    return { $$typeof: y, type: c.type, key: g, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === y;
  }
  function Yt(c) {
    var g = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (M) {
        return g[M];
      })
    );
  }
  var ct = /\/+/g;
  function Me(c, g) {
    return typeof c == "object" && c !== null && c.key != null ? Yt("" + c.key) : g.toString(36);
  }
  function tt(c, g, M, A, V) {
    var B = typeof c;
    (B === "undefined" || B === "boolean") && (c = null);
    var G = !1;
    if (c === null) G = !0;
    else
      switch (B) {
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case y:
            case N:
              G = !0;
          }
      }
    if (G)
      return (
        (G = c),
        (V = V(G)),
        (c = A === "" ? "." + Me(G, 0) : A),
        ke(V)
          ? ((M = ""),
            c != null && (M = c.replace(ct, "$&/") + "/"),
            tt(V, g, M, "", function (Ue) {
              return Ue;
            }))
          : V != null &&
            (gt(V) &&
              (V = Pt(
                V,
                M +
                  (!V.key || (G && G.key === V.key) ? "" : ("" + V.key).replace(ct, "$&/") + "/") +
                  c,
              )),
            g.push(V)),
        1
      );
    if (((G = 0), (A = A === "" ? "." : A + ":"), ke(c)))
      for (var Q = 0; Q < c.length; Q++) {
        B = c[Q];
        var ee = A + Me(B, Q);
        G += tt(B, g, M, ee, V);
      }
    else if (((ee = q(c)), typeof ee == "function"))
      for (c = ee.call(c), Q = 0; !(B = c.next()).done;)
        ((B = B.value), (ee = A + Me(B, Q++)), (G += tt(B, g, M, ee, V)));
    else if (B === "object")
      throw (
        (g = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (g === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : g) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return G;
  }
  function ft(c, g, M) {
    if (c == null) return c;
    var A = [],
      V = 0;
    return (
      tt(c, A, "", "", function (B) {
        return g.call(M, B, V++);
      }),
      A
    );
  }
  function Le(c) {
    if (c._status === -1) {
      var g = c._result;
      ((g = g()),
        g.then(
          function (M) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = M));
          },
          function (M) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = M));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = g)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ue = { current: null },
    S = { transition: null },
    R = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: S, ReactCurrentOwner: Ce };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (U.Children = {
      map: ft,
      forEach: function (c, g, M) {
        ft(
          c,
          function () {
            g.apply(this, arguments);
          },
          M,
        );
      },
      count: function (c) {
        var g = 0;
        return (
          ft(c, function () {
            g++;
          }),
          g
        );
      },
      toArray: function (c) {
        return (
          ft(c, function (g) {
            return g;
          }) || []
        );
      },
      only: function (c) {
        if (!gt(c))
          throw Error("React.Children.only expected to receive a single React element child.");
        return c;
      },
    }),
    (U.Component = Y),
    (U.Fragment = m),
    (U.Profiler = I),
    (U.PureComponent = at),
    (U.StrictMode = D),
    (U.Suspense = H),
    (U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
    (U.act = C),
    (U.cloneElement = function (c, g, M) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var A = $e({}, c.props),
        V = c.key,
        B = c.ref,
        G = c._owner;
      if (g != null) {
        if (
          (g.ref !== void 0 && ((B = g.ref), (G = Ce.current)),
          g.key !== void 0 && (V = "" + g.key),
          c.type && c.type.defaultProps)
        )
          var Q = c.type.defaultProps;
        for (ee in g)
          et.call(g, ee) &&
            !ze.hasOwnProperty(ee) &&
            (A[ee] = g[ee] === void 0 && Q !== void 0 ? Q[ee] : g[ee]);
      }
      var ee = arguments.length - 2;
      if (ee === 1) A.children = M;
      else if (1 < ee) {
        Q = Array(ee);
        for (var Ue = 0; Ue < ee; Ue++) Q[Ue] = arguments[Ue + 2];
        A.children = Q;
      }
      return { $$typeof: y, type: c.type, key: V, ref: B, props: A, _owner: G };
    }),
    (U.createContext = function (c) {
      return (
        (c = {
          $$typeof: ne,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: F, _context: c }),
        (c.Consumer = c)
      );
    }),
    (U.createElement = Qe),
    (U.createFactory = function (c) {
      var g = Qe.bind(null, c);
      return ((g.type = c), g);
    }),
    (U.createRef = function () {
      return { current: null };
    }),
    (U.forwardRef = function (c) {
      return { $$typeof: oe, render: c };
    }),
    (U.isValidElement = gt),
    (U.lazy = function (c) {
      return { $$typeof: he, _payload: { _status: -1, _result: c }, _init: Le };
    }),
    (U.memo = function (c, g) {
      return { $$typeof: ae, type: c, compare: g === void 0 ? null : g };
    }),
    (U.startTransition = function (c) {
      var g = S.transition;
      S.transition = {};
      try {
        c();
      } finally {
        S.transition = g;
      }
    }),
    (U.unstable_act = C),
    (U.useCallback = function (c, g) {
      return ue.current.useCallback(c, g);
    }),
    (U.useContext = function (c) {
      return ue.current.useContext(c);
    }),
    (U.useDebugValue = function () {}),
    (U.useDeferredValue = function (c) {
      return ue.current.useDeferredValue(c);
    }),
    (U.useEffect = function (c, g) {
      return ue.current.useEffect(c, g);
    }),
    (U.useId = function () {
      return ue.current.useId();
    }),
    (U.useImperativeHandle = function (c, g, M) {
      return ue.current.useImperativeHandle(c, g, M);
    }),
    (U.useInsertionEffect = function (c, g) {
      return ue.current.useInsertionEffect(c, g);
    }),
    (U.useLayoutEffect = function (c, g) {
      return ue.current.useLayoutEffect(c, g);
    }),
    (U.useMemo = function (c, g) {
      return ue.current.useMemo(c, g);
    }),
    (U.useReducer = function (c, g, M) {
      return ue.current.useReducer(c, g, M);
    }),
    (U.useRef = function (c) {
      return ue.current.useRef(c);
    }),
    (U.useState = function (c) {
      return ue.current.useState(c);
    }),
    (U.useSyncExternalStore = function (c, g, M) {
      return ue.current.useSyncExternalStore(c, g, M);
    }),
    (U.useTransition = function () {
      return ue.current.useTransition();
    }),
    (U.version = "18.3.1"),
    U
  );
}
var La;
function Ro() {
  return (La || ((La = 1), (jo.exports = Yf())), jo.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function Gf() {
  if (Ta) return xr;
  Ta = 1;
  var y = Ro(),
    N = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    D = Object.prototype.hasOwnProperty,
    I = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(oe, H, ae) {
    var he,
      re = {},
      q = null,
      Be = null;
    (ae !== void 0 && (q = "" + ae),
      H.key !== void 0 && (q = "" + H.key),
      H.ref !== void 0 && (Be = H.ref));
    for (he in H) D.call(H, he) && !F.hasOwnProperty(he) && (re[he] = H[he]);
    if (oe && oe.defaultProps)
      for (he in ((H = oe.defaultProps), H)) re[he] === void 0 && (re[he] = H[he]);
    return { $$typeof: N, type: oe, key: q, ref: Be, props: re, _owner: I.current };
  }
  return ((xr.Fragment = m), (xr.jsx = ne), (xr.jsxs = ne), xr);
}
var Ra;
function Xf() {
  return (Ra || ((Ra = 1), (Po.exports = Gf())), Po.exports);
}
var h = Xf(),
  qe = Ro(),
  Tl = {},
  zo = { exports: {} },
  Ie = {},
  Lo = { exports: {} },
  To = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fa;
function Zf() {
  return (
    Fa ||
      ((Fa = 1),
      (function (y) {
        function N(S, R) {
          var C = S.length;
          S.push(R);
          e: for (; 0 < C;) {
            var c = (C - 1) >>> 1,
              g = S[c];
            if (0 < I(g, R)) ((S[c] = R), (S[C] = g), (C = c));
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function D(S) {
          if (S.length === 0) return null;
          var R = S[0],
            C = S.pop();
          if (C !== R) {
            S[0] = C;
            e: for (var c = 0, g = S.length, M = g >>> 1; c < M;) {
              var A = 2 * (c + 1) - 1,
                V = S[A],
                B = A + 1,
                G = S[B];
              if (0 > I(V, C))
                B < g && 0 > I(G, V)
                  ? ((S[c] = G), (S[B] = C), (c = B))
                  : ((S[c] = V), (S[A] = C), (c = A));
              else if (B < g && 0 > I(G, C)) ((S[c] = G), (S[B] = C), (c = B));
              else break e;
            }
          }
          return R;
        }
        function I(S, R) {
          var C = S.sortIndex - R.sortIndex;
          return C !== 0 ? C : S.id - R.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var F = performance;
          y.unstable_now = function () {
            return F.now();
          };
        } else {
          var ne = Date,
            oe = ne.now();
          y.unstable_now = function () {
            return ne.now() - oe;
          };
        }
        var H = [],
          ae = [],
          he = 1,
          re = null,
          q = 3,
          Be = !1,
          $e = !1,
          b = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function be(S) {
          for (var R = m(ae); R !== null;) {
            if (R.callback === null) D(ae);
            else if (R.startTime <= S) (D(ae), (R.sortIndex = R.expirationTime), N(H, R));
            else break;
            R = m(ae);
          }
        }
        function ke(S) {
          if (((b = !1), be(S), !$e))
            if (m(H) !== null) (($e = !0), Le(et));
            else {
              var R = m(ae);
              R !== null && ue(ke, R.startTime - S);
            }
        }
        function et(S, R) {
          (($e = !1), b && ((b = !1), yt(Qe), (Qe = -1)), (Be = !0));
          var C = q;
          try {
            for (be(R), re = m(H); re !== null && (!(re.expirationTime > R) || (S && !Yt()));) {
              var c = re.callback;
              if (typeof c == "function") {
                ((re.callback = null), (q = re.priorityLevel));
                var g = c(re.expirationTime <= R);
                ((R = y.unstable_now()),
                  typeof g == "function" ? (re.callback = g) : re === m(H) && D(H),
                  be(R));
              } else D(H);
              re = m(H);
            }
            if (re !== null) var M = !0;
            else {
              var A = m(ae);
              (A !== null && ue(ke, A.startTime - R), (M = !1));
            }
            return M;
          } finally {
            ((re = null), (q = C), (Be = !1));
          }
        }
        var Ce = !1,
          ze = null,
          Qe = -1,
          Pt = 5,
          gt = -1;
        function Yt() {
          return !(y.unstable_now() - gt < Pt);
        }
        function ct() {
          if (ze !== null) {
            var S = y.unstable_now();
            gt = S;
            var R = !0;
            try {
              R = ze(!0, S);
            } finally {
              R ? Me() : ((Ce = !1), (ze = null));
            }
          } else Ce = !1;
        }
        var Me;
        if (typeof at == "function")
          Me = function () {
            at(ct);
          };
        else if (typeof MessageChannel < "u") {
          var tt = new MessageChannel(),
            ft = tt.port2;
          ((tt.port1.onmessage = ct),
            (Me = function () {
              ft.postMessage(null);
            }));
        } else
          Me = function () {
            Y(ct, 0);
          };
        function Le(S) {
          ((ze = S), Ce || ((Ce = !0), Me()));
        }
        function ue(S, R) {
          Qe = Y(function () {
            S(y.unstable_now());
          }, R);
        }
        ((y.unstable_IdlePriority = 5),
          (y.unstable_ImmediatePriority = 1),
          (y.unstable_LowPriority = 4),
          (y.unstable_NormalPriority = 3),
          (y.unstable_Profiling = null),
          (y.unstable_UserBlockingPriority = 2),
          (y.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (y.unstable_continueExecution = function () {
            $e || Be || (($e = !0), Le(et));
          }),
          (y.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Pt = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (y.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (y.unstable_getFirstCallbackNode = function () {
            return m(H);
          }),
          (y.unstable_next = function (S) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = q;
            }
            var C = q;
            q = R;
            try {
              return S();
            } finally {
              q = C;
            }
          }),
          (y.unstable_pauseExecution = function () {}),
          (y.unstable_requestPaint = function () {}),
          (y.unstable_runWithPriority = function (S, R) {
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
            var C = q;
            q = S;
            try {
              return R();
            } finally {
              q = C;
            }
          }),
          (y.unstable_scheduleCallback = function (S, R, C) {
            var c = y.unstable_now();
            switch (
              (typeof C == "object" && C !== null
                ? ((C = C.delay), (C = typeof C == "number" && 0 < C ? c + C : c))
                : (C = c),
              S)
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
              (S = {
                id: he++,
                callback: R,
                priorityLevel: S,
                startTime: C,
                expirationTime: g,
                sortIndex: -1,
              }),
              C > c
                ? ((S.sortIndex = C),
                  N(ae, S),
                  m(H) === null &&
                    S === m(ae) &&
                    (b ? (yt(Qe), (Qe = -1)) : (b = !0), ue(ke, C - c)))
                : ((S.sortIndex = g), N(H, S), $e || Be || (($e = !0), Le(et))),
              S
            );
          }),
          (y.unstable_shouldYield = Yt),
          (y.unstable_wrapCallback = function (S) {
            var R = q;
            return function () {
              var C = q;
              q = R;
              try {
                return S.apply(this, arguments);
              } finally {
                q = C;
              }
            };
          }));
      })(To)),
    To
  );
}
var Oa;
function Jf() {
  return (Oa || ((Oa = 1), (Lo.exports = Zf())), Lo.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Da;
function qf() {
  if (Da) return Ie;
  Da = 1;
  var y = Ro(),
    N = Jf();
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
  var D = new Set(),
    I = {};
  function F(e, t) {
    (ne(e, t), ne(e + "Capture", t));
  }
  function ne(e, t) {
    for (I[e] = t, e = 0; e < t.length; e++) D.add(t[e]);
  }
  var oe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    H = Object.prototype.hasOwnProperty,
    ae =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    he = {},
    re = {};
  function q(e) {
    return H.call(re, e) ? !0 : H.call(he, e) ? !1 : ae.test(e) ? (re[e] = !0) : ((he[e] = !0), !1);
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
  function $e(e, t, n, r) {
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
  function b(e, t, n, r, l, i, o) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o));
  }
  var Y = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Y[e] = new b(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Y[t] = new b(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      Y[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        Y[e] = new b(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Y[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Y[e] = new b(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Y[e] = new b(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Y[e] = new b(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Y[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var yt = /[\-:]([a-z])/g;
  function at(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yt, at);
      Y[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yt, at);
        Y[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yt, at);
      Y[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Y[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Y.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Y[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function be(e, t, n, r) {
    var l = Y.hasOwnProperty(t) ? Y[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      ($e(t, n, l, r) && (n = null),
      r || l === null
        ? q(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
  var ke = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for("react.element"),
    Ce = Symbol.for("react.portal"),
    ze = Symbol.for("react.fragment"),
    Qe = Symbol.for("react.strict_mode"),
    Pt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Me = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    ue = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (S && e[S]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var C = Object.assign,
    c;
  function g(e) {
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
  function A(e, t) {
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
      ((M = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? g(e) : "";
  }
  function V(e) {
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
        return ((e = A(e.type, !1)), e);
      case 11:
        return ((e = A(e.type.render, !1)), e);
      case 1:
        return ((e = A(e.type, !0)), e);
      default:
        return "";
    }
  }
  function B(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ze:
        return "Fragment";
      case Ce:
        return "Portal";
      case Pt:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Me:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt:
          return (e.displayName || "Context") + ".Consumer";
        case gt:
          return (e._context.displayName || "Context") + ".Provider";
        case ct:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ft:
          return ((t = e.displayName || null), t !== null ? t : B(e.type) || "Memo");
        case Le:
          ((t = e._payload), (e = e._init));
          try {
            return B(e(t));
          } catch {}
      }
    return null;
  }
  function G(e) {
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
        return B(t);
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
  function Q(e) {
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
  function ee(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ue(e) {
    var t = ee(e) ? "checked" : "value",
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
  function kr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Do(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ee(e) ? (e.checked ? "true" : "false") : e.value),
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
  function Fl(e, t) {
    var n = t.checked;
    return C({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Io(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Q(t.value != null ? t.value : n)),
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
  function Ol(e, t) {
    Mo(e, t);
    var n = Q(t.value),
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
      ? Dl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Dl(e, t.type, Q(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Uo(e, t, n) {
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
  function Dl(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Dn = Array.isArray;
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Q(n), t = null, l = 0; l < e.length; l++) {
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
    return C({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ao(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (Dn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Q(n) };
  }
  function Ho(e, t) {
    var n = Q(t.value),
      r = Q(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Wo(e) {
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
  function Ml(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Vo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Er,
    Bo = (function (e) {
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
  function In(e, t) {
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
    Za = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mn).forEach(function (e) {
    Za.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]));
    });
  });
  function $o(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Qo(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = $o(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ja = C(
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
      if (Ja[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  var Hl = null;
  function Wl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Vl = null,
    cn = null,
    fn = null;
  function Ko(e) {
    if ((e = ir(e))) {
      if (typeof Vl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Kr(t)), Vl(e.stateNode, e.type, t));
    }
  }
  function Yo(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function Go() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), Ko(e), t)) for (e = 0; e < t.length; e++) Ko(t[e]);
    }
  }
  function Xo(e, t) {
    return e(t);
  }
  function Zo() {}
  var Bl = !1;
  function Jo(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Xo(e, t, n);
    } finally {
      ((Bl = !1), (cn !== null || fn !== null) && (Zo(), Go()));
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
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var $l = !1;
  if (oe)
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
  function qa(e, t, n, r, l, i, o, u, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (w) {
      this.onError(w);
    }
  }
  var Hn = !1,
    Nr = null,
    _r = !1,
    Ql = null,
    ba = {
      onError: function (e) {
        ((Hn = !0), (Nr = e));
      },
    };
  function ec(e, t, n, r, l, i, o, u, s) {
    ((Hn = !1), (Nr = null), qa.apply(ba, arguments));
  }
  function tc(e, t, n, r, l, i, o, u, s) {
    if ((ec.apply(this, arguments), Hn)) {
      if (Hn) {
        var p = Nr;
        ((Hn = !1), (Nr = null));
      } else throw Error(m(198));
      _r || ((_r = !0), (Ql = p));
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
  function qo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function bo(e) {
    if (Gt(e) !== e) throw Error(m(188));
  }
  function nc(e) {
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
          if (i === n) return (bo(l), e);
          if (i === r) return (bo(l), t);
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
  function eu(e) {
    return ((e = nc(e)), e !== null ? tu(e) : null);
  }
  function tu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = tu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var nu = N.unstable_scheduleCallback,
    ru = N.unstable_cancelCallback,
    rc = N.unstable_shouldYield,
    lc = N.unstable_requestPaint,
    ce = N.unstable_now,
    ic = N.unstable_getCurrentPriorityLevel,
    Kl = N.unstable_ImmediatePriority,
    lu = N.unstable_UserBlockingPriority,
    Cr = N.unstable_NormalPriority,
    oc = N.unstable_LowPriority,
    iu = N.unstable_IdlePriority,
    Pr = null,
    dt = null;
  function uc(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : cc,
    sc = Math.log,
    ac = Math.LN2;
  function cc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((sc(e) / ac) | 0)) | 0);
  }
  var jr = 64,
    zr = 4194304;
  function Wn(e) {
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
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? (r = Wn(u)) : ((i &= o), i !== 0 && (r = Wn(i)));
    } else ((o = n & ~l), o !== 0 ? (r = Wn(o)) : i !== 0 && (r = Wn(i)));
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
  function fc(e, t) {
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
  function dc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - nt(i),
        u = 1 << o,
        s = l[o];
      (s === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = fc(u, t))
        : s <= t && (e.expiredLanes |= u),
        (i &= ~u));
    }
  }
  function Yl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ou() {
    var e = jr;
    return ((jr <<= 1), (jr & 4194240) === 0 && (jr = 64), e);
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - nt(t)),
      (e[t] = n));
  }
  function pc(e, t) {
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
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - nt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var K = 0;
  function uu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var su,
    Zl,
    au,
    cu,
    fu,
    Jl = !1,
    Tr = [],
    jt = null,
    zt = null,
    Lt = null,
    Bn = new Map(),
    $n = new Map(),
    Tt = [],
    mc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function du(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jt = null;
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
        Bn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $n.delete(t.pointerId);
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
        t !== null && ((t = ir(t)), t !== null && Zl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function hc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((jt = Qn(jt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((zt = Qn(zt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Lt = Qn(Lt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Bn.set(i, Qn(Bn.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((i = l.pointerId), $n.set(i, Qn($n.get(i) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function pu(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Gt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = qo(n)), t !== null)) {
            ((e.blockedOn = t),
              fu(e.priority, function () {
                au(n);
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
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Hl = r), n.target.dispatchEvent(r), (Hl = null));
      } else return ((t = ir(n)), t !== null && Zl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function mu(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function vc() {
    ((Jl = !1),
      jt !== null && Rr(jt) && (jt = null),
      zt !== null && Rr(zt) && (zt = null),
      Lt !== null && Rr(Lt) && (Lt = null),
      Bn.forEach(mu),
      $n.forEach(mu));
  }
  function Kn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl || ((Jl = !0), N.unstable_scheduleCallback(N.unstable_NormalPriority, vc)));
  }
  function Yn(e) {
    function t(l) {
      return Kn(l, e);
    }
    if (0 < Tr.length) {
      Kn(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      jt !== null && Kn(jt, e),
        zt !== null && Kn(zt, e),
        Lt !== null && Kn(Lt, e),
        Bn.forEach(t),
        $n.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null);)
      (pu(n), n.blockedOn === null && Tt.shift());
  }
  var dn = ke.ReactCurrentBatchConfig,
    Fr = !0;
  function yc(e, t, n, r) {
    var l = K,
      i = dn.transition;
    dn.transition = null;
    try {
      ((K = 1), ql(e, t, n, r));
    } finally {
      ((K = l), (dn.transition = i));
    }
  }
  function gc(e, t, n, r) {
    var l = K,
      i = dn.transition;
    dn.transition = null;
    try {
      ((K = 4), ql(e, t, n, r));
    } finally {
      ((K = l), (dn.transition = i));
    }
  }
  function ql(e, t, n, r) {
    if (Fr) {
      var l = bl(e, t, n, r);
      if (l === null) (vi(e, t, r, Or, n), du(e, r));
      else if (hc(l, e, t, n, r)) r.stopPropagation();
      else if ((du(e, r), t & 4 && -1 < mc.indexOf(e))) {
        for (; l !== null;) {
          var i = ir(l);
          if (
            (i !== null && su(i), (i = bl(e, t, n, r)), i === null && vi(e, t, r, Or, n), i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else vi(e, t, r, null, n);
    }
  }
  var Or = null;
  function bl(e, t, n, r) {
    if (((Or = null), (e = Wl(r)), (e = Xt(e)), e !== null))
      if (((t = Gt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = qo(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Or = e), null);
  }
  function hu(e) {
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
        switch (ic()) {
          case Kl:
            return 1;
          case lu:
            return 4;
          case Cr:
          case oc:
            return 16;
          case iu:
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
    Dr = null;
  function vu() {
    if (Dr) return Dr;
    var e,
      t = ei,
      n = t.length,
      r,
      l = "value" in Rt ? Rt.value : Rt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ir(e) {
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
  function yu() {
    return !1;
  }
  function Ae(e) {
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
          ? Mr
          : yu),
        (this.isPropagationStopped = yu),
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
    ti = Ae(pn),
    Gn = C({}, pn, { view: 0, detail: 0 }),
    wc = Ae(Gn),
    ni,
    ri,
    Xn,
    Ur = C({}, Gn, {
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
          : (e !== Xn &&
              (Xn && e.type === "mousemove"
                ? ((ni = e.screenX - Xn.screenX), (ri = e.screenY - Xn.screenY))
                : (ri = ni = 0),
              (Xn = e)),
            ni);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ri;
      },
    }),
    gu = Ae(Ur),
    xc = C({}, Ur, { dataTransfer: 0 }),
    kc = Ae(xc),
    Sc = C({}, Gn, { relatedTarget: 0 }),
    li = Ae(Sc),
    Ec = C({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nc = Ae(Ec),
    _c = C({}, pn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Cc = Ae(_c),
    Pc = C({}, pn, { data: 0 }),
    wu = Ae(Pc),
    jc = {
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
    zc = {
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
    Lc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Tc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Lc[e]) ? !!t[e] : !1;
  }
  function ii() {
    return Tc;
  }
  var Rc = C({}, Gn, {
      key: function (e) {
        if (e.key) {
          var t = jc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? zc[e.keyCode] || "Unidentified"
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
    Fc = Ae(Rc),
    Oc = C({}, Ur, {
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
    xu = Ae(Oc),
    Dc = C({}, Gn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ii,
    }),
    Ic = Ae(Dc),
    Mc = C({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uc = Ae(Mc),
    Ac = C({}, Ur, {
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
    Hc = Ae(Ac),
    Wc = [9, 13, 27, 32],
    oi = oe && "CompositionEvent" in window,
    Zn = null;
  oe && "documentMode" in document && (Zn = document.documentMode);
  var Vc = oe && "TextEvent" in window && !Zn,
    ku = oe && (!oi || (Zn && 8 < Zn && 11 >= Zn)),
    Su = " ",
    Eu = !1;
  function Nu(e, t) {
    switch (e) {
      case "keyup":
        return Wc.indexOf(t.keyCode) !== -1;
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
  function _u(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var mn = !1;
  function Bc(e, t) {
    switch (e) {
      case "compositionend":
        return _u(t);
      case "keypress":
        return t.which !== 32 ? null : ((Eu = !0), Su);
      case "textInput":
        return ((e = t.data), e === Su && Eu ? null : e);
      default:
        return null;
    }
  }
  function $c(e, t) {
    if (mn)
      return e === "compositionend" || (!oi && Nu(e, t))
        ? ((e = vu()), (Dr = ei = Rt = null), (mn = !1), e)
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
        return ku && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Qc = {
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
    return t === "input" ? !!Qc[e.type] : t === "textarea";
  }
  function Pu(e, t, n, r) {
    (Yo(r),
      (t = Br(t, "onChange")),
      0 < t.length &&
        ((n = new ti("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Jn = null,
    qn = null;
  function Kc(e) {
    Qu(e, 0);
  }
  function Ar(e) {
    var t = wn(e);
    if (Do(t)) return e;
  }
  function Yc(e, t) {
    if (e === "change") return t;
  }
  var ju = !1;
  if (oe) {
    var ui;
    if (oe) {
      var si = "oninput" in document;
      if (!si) {
        var zu = document.createElement("div");
        (zu.setAttribute("oninput", "return;"), (si = typeof zu.oninput == "function"));
      }
      ui = si;
    } else ui = !1;
    ju = ui && (!document.documentMode || 9 < document.documentMode);
  }
  function Lu() {
    Jn && (Jn.detachEvent("onpropertychange", Tu), (qn = Jn = null));
  }
  function Tu(e) {
    if (e.propertyName === "value" && Ar(qn)) {
      var t = [];
      (Pu(t, qn, e, Wl(e)), Jo(Kc, t));
    }
  }
  function Gc(e, t, n) {
    e === "focusin"
      ? (Lu(), (Jn = t), (qn = n), Jn.attachEvent("onpropertychange", Tu))
      : e === "focusout" && Lu();
  }
  function Xc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ar(qn);
  }
  function Zc(e, t) {
    if (e === "click") return Ar(t);
  }
  function Jc(e, t) {
    if (e === "input" || e === "change") return Ar(t);
  }
  function qc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == "function" ? Object.is : qc;
  function bn(e, t) {
    if (rt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!H.call(t, l) || !rt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ru(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Fu(e, t) {
    var n = Ru(e);
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
      n = Ru(n);
    }
  }
  function Ou(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ou(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Du() {
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
  function bc(e) {
    var t = Du(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ou(n.ownerDocument.documentElement, n)) {
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
            (l = Fu(n, i)));
          var o = Fu(n, r);
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
  var ef = oe && "documentMode" in document && 11 >= document.documentMode,
    hn = null,
    ci = null,
    er = null,
    fi = !1;
  function Iu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fi ||
      hn == null ||
      hn !== Sr(r) ||
      ((r = hn),
      "selectionStart" in r && ai(r)
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
        (r = Br(ci, "onSelect")),
        0 < r.length &&
          ((t = new ti("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = hn))));
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
  var vn = {
      animationend: Hr("Animation", "AnimationEnd"),
      animationiteration: Hr("Animation", "AnimationIteration"),
      animationstart: Hr("Animation", "AnimationStart"),
      transitionend: Hr("Transition", "TransitionEnd"),
    },
    di = {},
    Mu = {};
  oe &&
    ((Mu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vn.animationend.animation,
      delete vn.animationiteration.animation,
      delete vn.animationstart.animation),
    "TransitionEvent" in window || delete vn.transitionend.transition);
  function Wr(e) {
    if (di[e]) return di[e];
    if (!vn[e]) return e;
    var t = vn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Mu) return (di[e] = t[n]);
    return e;
  }
  var Uu = Wr("animationend"),
    Au = Wr("animationiteration"),
    Hu = Wr("animationstart"),
    Wu = Wr("transitionend"),
    Vu = new Map(),
    Bu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ft(e, t) {
    (Vu.set(e, t), F(t, [e]));
  }
  for (var pi = 0; pi < Bu.length; pi++) {
    var mi = Bu[pi],
      tf = mi.toLowerCase(),
      nf = mi[0].toUpperCase() + mi.slice(1);
    Ft(tf, "on" + nf);
  }
  (Ft(Uu, "onAnimationEnd"),
    Ft(Au, "onAnimationIteration"),
    Ft(Hu, "onAnimationStart"),
    Ft("dblclick", "onDoubleClick"),
    Ft("focusin", "onFocus"),
    Ft("focusout", "onBlur"),
    Ft(Wu, "onTransitionEnd"),
    ne("onMouseEnter", ["mouseout", "mouseover"]),
    ne("onMouseLeave", ["mouseout", "mouseover"]),
    ne("onPointerEnter", ["pointerout", "pointerover"]),
    ne("onPointerLeave", ["pointerout", "pointerover"]),
    F("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    F(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    F("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    F("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    F(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    F(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var tr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    rf = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
  function $u(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), tc(r, t, void 0, e), (e.currentTarget = null));
  }
  function Qu(e, t) {
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
            ($u(l, u, p), (i = s));
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
            ($u(l, u, p), (i = s));
          }
      }
    }
    if (_r) throw ((e = Ql), (_r = !1), (Ql = null), e);
  }
  function Z(e, t) {
    var n = t[Si];
    n === void 0 && (n = t[Si] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ku(t, e, 2, !1), n.add(r));
  }
  function hi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ku(n, e, r, t));
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function nr(e) {
    if (!e[Vr]) {
      ((e[Vr] = !0),
        D.forEach(function (n) {
          n !== "selectionchange" && (rf.has(n) || hi(n, !1, e), hi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || ((t[Vr] = !0), hi("selectionchange", !1, t));
    }
  }
  function Ku(e, t, n, r) {
    switch (hu(t)) {
      case 1:
        var l = yc;
        break;
      case 4:
        l = gc;
        break;
      default:
        l = ql;
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
            if (((o = Xt(u)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Jo(function () {
      var p = i,
        w = Wl(n),
        x = [];
      e: {
        var v = Vu.get(e);
        if (v !== void 0) {
          var E = ti,
            P = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = Fc;
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
              E = gu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = kc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Ic;
              break;
            case Uu:
            case Au:
            case Hu:
              E = Nc;
              break;
            case Wu:
              E = Uc;
              break;
            case "scroll":
              E = wc;
              break;
            case "wheel":
              E = Hc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = Cc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = xu;
          }
          var j = (t & 4) !== 0,
            fe = !j && e === "scroll",
            f = j ? (v !== null ? v + "Capture" : null) : v;
          j = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var k = d.stateNode;
            if (
              (d.tag === 5 &&
                k !== null &&
                ((d = k), f !== null && ((k = Un(a, f)), k != null && j.push(rr(a, k, d)))),
              fe)
            )
              break;
            a = a.return;
          }
          0 < j.length && ((v = new E(v, P, null, n, w)), x.push({ event: v, listeners: j }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (E = e === "mouseout" || e === "pointerout"),
            v && n !== Hl && (P = n.relatedTarget || n.fromElement) && (Xt(P) || P[wt]))
          )
            break e;
          if (
            (E || v) &&
            ((v =
              w.window === w
                ? w
                : (v = w.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            E
              ? ((P = n.relatedTarget || n.toElement),
                (E = p),
                (P = P ? Xt(P) : null),
                P !== null &&
                  ((fe = Gt(P)), P !== fe || (P.tag !== 5 && P.tag !== 6)) &&
                  (P = null))
              : ((E = null), (P = p)),
            E !== P)
          ) {
            if (
              ((j = gu),
              (k = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((j = xu), (k = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (fe = E == null ? v : wn(E)),
              (d = P == null ? v : wn(P)),
              (v = new j(k, a + "leave", E, n, w)),
              (v.target = fe),
              (v.relatedTarget = d),
              (k = null),
              Xt(w) === p &&
                ((j = new j(f, a + "enter", P, n, w)),
                (j.target = d),
                (j.relatedTarget = fe),
                (k = j)),
              (fe = k),
              E && P)
            )
              t: {
                for (j = E, f = P, a = 0, d = j; d; d = yn(d)) a++;
                for (d = 0, k = f; k; k = yn(k)) d++;
                for (; 0 < a - d;) ((j = yn(j)), a--);
                for (; 0 < d - a;) ((f = yn(f)), d--);
                for (; a--;) {
                  if (j === f || (f !== null && j === f.alternate)) break t;
                  ((j = yn(j)), (f = yn(f)));
                }
                j = null;
              }
            else j = null;
            (E !== null && Yu(x, v, E, j, !1), P !== null && fe !== null && Yu(x, fe, P, j, !0));
          }
        }
        e: {
          if (
            ((v = p ? wn(p) : window),
            (E = v.nodeName && v.nodeName.toLowerCase()),
            E === "select" || (E === "input" && v.type === "file"))
          )
            var z = Yc;
          else if (Cu(v))
            if (ju) z = Jc;
            else {
              z = Xc;
              var L = Gc;
            }
          else
            (E = v.nodeName) &&
              E.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (z = Zc);
          if (z && (z = z(e, p))) {
            Pu(x, z, n, w);
            break e;
          }
          (L && L(e, v, p),
            e === "focusout" &&
              (L = v._wrapperState) &&
              L.controlled &&
              v.type === "number" &&
              Dl(v, "number", v.value));
        }
        switch (((L = p ? wn(p) : window), e)) {
          case "focusin":
            (Cu(L) || L.contentEditable === "true") && ((hn = L), (ci = p), (er = null));
            break;
          case "focusout":
            er = ci = hn = null;
            break;
          case "mousedown":
            fi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((fi = !1), Iu(x, n, w));
            break;
          case "selectionchange":
            if (ef) break;
          case "keydown":
          case "keyup":
            Iu(x, n, w);
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
          mn
            ? Nu(e, n) && (O = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
        (O &&
          (ku &&
            n.locale !== "ko" &&
            (mn || O !== "onCompositionStart"
              ? O === "onCompositionEnd" && mn && (T = vu())
              : ((Rt = w), (ei = "value" in Rt ? Rt.value : Rt.textContent), (mn = !0))),
          (L = Br(p, O)),
          0 < L.length &&
            ((O = new wu(O, e, null, n, w)),
            x.push({ event: O, listeners: L }),
            T ? (O.data = T) : ((T = _u(n)), T !== null && (O.data = T)))),
          (T = Vc ? Bc(e, n) : $c(e, n)) &&
            ((p = Br(p, "onBeforeInput")),
            0 < p.length &&
              ((w = new wu("onBeforeInput", "beforeinput", null, n, w)),
              x.push({ event: w, listeners: p }),
              (w.data = T))));
      }
      Qu(x, t);
    });
  }
  function rr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Br(e, t) {
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
  function yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Yu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
      var u = n,
        s = u.alternate,
        p = u.stateNode;
      if (s !== null && s === r) break;
      (u.tag === 5 &&
        p !== null &&
        ((u = p),
        l
          ? ((s = Un(n, i)), s != null && o.unshift(rr(n, s, u)))
          : l || ((s = Un(n, i)), s != null && o.push(rr(n, s, u)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var lf = /\r\n?/g,
    of = /\u0000|\uFFFD/g;
  function Gu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        lf,
        `
`,
      )
      .replace(of, "");
  }
  function $r(e, t, n) {
    if (((t = Gu(t)), Gu(e) !== t && n)) throw Error(m(425));
  }
  function Qr() {}
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
    uf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xu = typeof Promise == "function" ? Promise : void 0,
    sf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Xu < "u"
          ? function (e) {
              return Xu.resolve(null).then(e).catch(af);
            }
          : xi;
  function af(e) {
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
  function Zu(e) {
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
    pt = "__reactFiber$" + gn,
    lr = "__reactProps$" + gn,
    wt = "__reactContainer$" + gn,
    Si = "__reactEvents$" + gn,
    cf = "__reactListeners$" + gn,
    ff = "__reactHandles$" + gn;
  function Xt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[wt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Zu(e); e !== null;) {
            if ((n = e[pt])) return n;
            e = Zu(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function ir(e) {
    return (
      (e = e[pt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Kr(e) {
    return e[lr] || null;
  }
  var Ei = [],
    xn = -1;
  function Dt(e) {
    return { current: e };
  }
  function J(e) {
    0 > xn || ((e.current = Ei[xn]), (Ei[xn] = null), xn--);
  }
  function X(e, t) {
    (xn++, (Ei[xn] = e.current), (e.current = t));
  }
  var It = {},
    Se = Dt(It),
    Te = Dt(!1),
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
  function Re(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Yr() {
    (J(Te), J(Se));
  }
  function Ju(e, t, n) {
    if (Se.current !== It) throw Error(m(168));
    (X(Se, t), X(Te, n));
  }
  function qu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, G(e) || "Unknown", l));
    return C({}, n, r);
  }
  function Gr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
      (Zt = Se.current),
      X(Se, e),
      X(Te, Te.current),
      !0
    );
  }
  function bu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = qu(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        J(Te),
        J(Se),
        X(Se, e))
      : J(Te),
      X(Te, n));
  }
  var xt = null,
    Xr = !1,
    Ni = !1;
  function es(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  function df(e) {
    ((Xr = !0), es(e));
  }
  function Mt() {
    if (!Ni && xt !== null) {
      Ni = !0;
      var e = 0,
        t = K;
      try {
        var n = xt;
        for (K = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((xt = null), (Xr = !1));
      } catch (l) {
        throw (xt !== null && (xt = xt.slice(e + 1)), nu(Kl, Mt), l);
      } finally {
        ((K = t), (Ni = !1));
      }
    }
    return null;
  }
  var Sn = [],
    En = 0,
    Zr = null,
    Jr = 0,
    Ke = [],
    Ye = 0,
    Jt = null,
    kt = 1,
    St = "";
  function qt(e, t) {
    ((Sn[En++] = Jr), (Sn[En++] = Zr), (Zr = e), (Jr = t));
  }
  function ts(e, t, n) {
    ((Ke[Ye++] = kt), (Ke[Ye++] = St), (Ke[Ye++] = Jt), (Jt = e));
    var r = kt;
    e = St;
    var l = 32 - nt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - nt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      ((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (kt = (1 << (32 - nt(t) + l)) | (n << l) | r),
        (St = i + e));
    } else ((kt = (1 << i) | (n << l) | r), (St = e));
  }
  function _i(e) {
    e.return !== null && (qt(e, 1), ts(e, 1, 0));
  }
  function Ci(e) {
    for (; e === Zr;) ((Zr = Sn[--En]), (Sn[En] = null), (Jr = Sn[--En]), (Sn[En] = null));
    for (; e === Jt;)
      ((Jt = Ke[--Ye]),
        (Ke[Ye] = null),
        (St = Ke[--Ye]),
        (Ke[Ye] = null),
        (kt = Ke[--Ye]),
        (Ke[Ye] = null));
  }
  var He = null,
    We = null,
    te = !1,
    lt = null;
  function ns(e, t) {
    var n = Je(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function rs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (He = e), (We = Ot(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (He = e), (We = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: kt, overflow: St } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Je(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (He = e),
              (We = null),
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
  function ji(e) {
    if (te) {
      var t = We;
      if (t) {
        var n = t;
        if (!rs(e, t)) {
          if (Pi(e)) throw Error(m(418));
          t = Ot(n.nextSibling);
          var r = He;
          t && rs(e, t) ? ns(r, n) : ((e.flags = (e.flags & -4097) | 2), (te = !1), (He = e));
        }
      } else {
        if (Pi(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (te = !1), (He = e));
      }
    }
  }
  function ls(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    He = e;
  }
  function qr(e) {
    if (e !== He) return !1;
    if (!te) return (ls(e), (te = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps))),
      t && (t = We))
    ) {
      if (Pi(e)) throw (is(), Error(m(418)));
      for (; t;) (ns(e, t), (t = Ot(t.nextSibling)));
    }
    if ((ls(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                We = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        We = null;
      }
    } else We = He ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function is() {
    for (var e = We; e;) e = Ot(e.nextSibling);
  }
  function Nn() {
    ((We = He = null), (te = !1));
  }
  function zi(e) {
    lt === null ? (lt = [e]) : lt.push(e);
  }
  var pf = ke.ReactCurrentBatchConfig;
  function or(e, t, n) {
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
  function br(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function os(e) {
    var t = e._init;
    return t(e._payload);
  }
  function us(e) {
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
    function u(f, a, d, k) {
      return a === null || a.tag !== 6
        ? ((a = ko(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, k) {
      var z = d.type;
      return z === ze
        ? w(f, a, d.props.children, k, d.key)
        : a !== null &&
            (a.elementType === z ||
              (typeof z == "object" && z !== null && z.$$typeof === Le && os(z) === a.type))
          ? ((k = l(a, d.props)), (k.ref = or(f, a, d)), (k.return = f), k)
          : ((k = El(d.type, d.key, d.props, null, f.mode, k)),
            (k.ref = or(f, a, d)),
            (k.return = f),
            k);
    }
    function p(f, a, d, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = So(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function w(f, a, d, k, z) {
      return a === null || a.tag !== 7
        ? ((a = un(d, f.mode, k, z)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function x(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = ko("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case et:
            return (
              (d = El(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = or(f, null, a)),
              (d.return = f),
              d
            );
          case Ce:
            return ((a = So(a, f.mode, d)), (a.return = f), a);
          case Le:
            var k = a._init;
            return x(f, k(a._payload), d);
        }
        if (Dn(a) || R(a)) return ((a = un(a, f.mode, d, null)), (a.return = f), a);
        br(f, a);
      }
      return null;
    }
    function v(f, a, d, k) {
      var z = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return z !== null ? null : u(f, a, "" + d, k);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case et:
            return d.key === z ? s(f, a, d, k) : null;
          case Ce:
            return d.key === z ? p(f, a, d, k) : null;
          case Le:
            return ((z = d._init), v(f, a, z(d._payload), k));
        }
        if (Dn(d) || R(d)) return z !== null ? null : w(f, a, d, k, null);
        br(f, d);
      }
      return null;
    }
    function E(f, a, d, k, z) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((f = f.get(d) || null), u(a, f, "" + k, z));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case et:
            return ((f = f.get(k.key === null ? d : k.key) || null), s(a, f, k, z));
          case Ce:
            return ((f = f.get(k.key === null ? d : k.key) || null), p(a, f, k, z));
          case Le:
            var L = k._init;
            return E(f, a, d, L(k._payload), z);
        }
        if (Dn(k) || R(k)) return ((f = f.get(d) || null), w(a, f, k, z, null));
        br(a, k);
      }
      return null;
    }
    function P(f, a, d, k) {
      for (var z = null, L = null, T = a, O = (a = 0), ge = null; T !== null && O < d.length; O++) {
        T.index > O ? ((ge = T), (T = null)) : (ge = T.sibling);
        var $ = v(f, T, d[O], k);
        if ($ === null) {
          T === null && (T = ge);
          break;
        }
        (e && T && $.alternate === null && t(f, T),
          (a = i($, a, O)),
          L === null ? (z = $) : (L.sibling = $),
          (L = $),
          (T = ge));
      }
      if (O === d.length) return (n(f, T), te && qt(f, O), z);
      if (T === null) {
        for (; O < d.length; O++)
          ((T = x(f, d[O], k)),
            T !== null && ((a = i(T, a, O)), L === null ? (z = T) : (L.sibling = T), (L = T)));
        return (te && qt(f, O), z);
      }
      for (T = r(f, T); O < d.length; O++)
        ((ge = E(T, f, O, d[O], k)),
          ge !== null &&
            (e && ge.alternate !== null && T.delete(ge.key === null ? O : ge.key),
            (a = i(ge, a, O)),
            L === null ? (z = ge) : (L.sibling = ge),
            (L = ge)));
      return (
        e &&
          T.forEach(function (Kt) {
            return t(f, Kt);
          }),
        te && qt(f, O),
        z
      );
    }
    function j(f, a, d, k) {
      var z = R(d);
      if (typeof z != "function") throw Error(m(150));
      if (((d = z.call(d)), d == null)) throw Error(m(151));
      for (
        var L = (z = null), T = a, O = (a = 0), ge = null, $ = d.next();
        T !== null && !$.done;
        O++, $ = d.next()
      ) {
        T.index > O ? ((ge = T), (T = null)) : (ge = T.sibling);
        var Kt = v(f, T, $.value, k);
        if (Kt === null) {
          T === null && (T = ge);
          break;
        }
        (e && T && Kt.alternate === null && t(f, T),
          (a = i(Kt, a, O)),
          L === null ? (z = Kt) : (L.sibling = Kt),
          (L = Kt),
          (T = ge));
      }
      if ($.done) return (n(f, T), te && qt(f, O), z);
      if (T === null) {
        for (; !$.done; O++, $ = d.next())
          (($ = x(f, $.value, k)),
            $ !== null && ((a = i($, a, O)), L === null ? (z = $) : (L.sibling = $), (L = $)));
        return (te && qt(f, O), z);
      }
      for (T = r(f, T); !$.done; O++, $ = d.next())
        (($ = E(T, f, O, $.value, k)),
          $ !== null &&
            (e && $.alternate !== null && T.delete($.key === null ? O : $.key),
            (a = i($, a, O)),
            L === null ? (z = $) : (L.sibling = $),
            (L = $)));
      return (
        e &&
          T.forEach(function (Kf) {
            return t(f, Kf);
          }),
        te && qt(f, O),
        z
      );
    }
    function fe(f, a, d, k) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === ze &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case et:
            e: {
              for (var z = d.key, L = a; L !== null;) {
                if (L.key === z) {
                  if (((z = d.type), z === ze)) {
                    if (L.tag === 7) {
                      (n(f, L.sibling), (a = l(L, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    L.elementType === z ||
                    (typeof z == "object" && z !== null && z.$$typeof === Le && os(z) === L.type)
                  ) {
                    (n(f, L.sibling),
                      (a = l(L, d.props)),
                      (a.ref = or(f, L, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, L);
                  break;
                } else t(f, L);
                L = L.sibling;
              }
              d.type === ze
                ? ((a = un(d.props.children, f.mode, k, d.key)), (a.return = f), (f = a))
                : ((k = El(d.type, d.key, d.props, null, f.mode, k)),
                  (k.ref = or(f, a, d)),
                  (k.return = f),
                  (f = k));
            }
            return o(f);
          case Ce:
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
              ((a = So(d, f.mode, k)), (a.return = f), (f = a));
            }
            return o(f);
          case Le:
            return ((L = d._init), fe(f, a, L(d._payload), k));
        }
        if (Dn(d)) return P(f, a, d, k);
        if (R(d)) return j(f, a, d, k);
        br(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = ko(d, f.mode, k)), (a.return = f), (f = a)),
          o(f))
        : n(f, a);
    }
    return fe;
  }
  var _n = us(!0),
    ss = us(!1),
    el = Dt(null),
    tl = null,
    Cn = null,
    Li = null;
  function Ti() {
    Li = Cn = tl = null;
  }
  function Ri(e) {
    var t = el.current;
    (J(el), (e._currentValue = t));
  }
  function Fi(e, t, n) {
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
    ((tl = e),
      (Li = Cn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Fe = !0), (e.firstContext = null)));
  }
  function Ge(e) {
    var t = e._currentValue;
    if (Li !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
        if (tl === null) throw Error(m(308));
        ((Cn = e), (tl.dependencies = { lanes: 0, firstContext: e }));
      } else Cn = Cn.next = e;
    return t;
  }
  var bt = null;
  function Oi(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function as(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Oi(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Et(e, r)
    );
  }
  function Et(e, t) {
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
  function Di(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function cs(e, t) {
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
    if (((r = r.shared), (W & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Et(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Oi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Et(e, n)
    );
  }
  function nl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  function fs(e, t) {
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
  function rl(e, t, n, r) {
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
      var w = e.alternate;
      w !== null &&
        ((w = w.updateQueue),
        (u = w.lastBaseUpdate),
        u !== o && (u === null ? (w.firstBaseUpdate = p) : (u.next = p), (w.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var x = l.baseState;
      ((o = 0), (w = p = s = null), (u = i));
      do {
        var v = u.lane,
          E = u.eventTime;
        if ((r & v) === v) {
          w !== null &&
            (w = w.next =
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
              j = u;
            switch (((v = t), (E = n), j.tag)) {
              case 1:
                if (((P = j.payload), typeof P == "function")) {
                  x = P.call(E, x, v);
                  break e;
                }
                x = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = j.payload), (v = typeof P == "function" ? P.call(E, x, v) : P), v == null)
                )
                  break e;
                x = C({}, x, v);
                break e;
              case 2:
                Ut = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (v = l.effects), v === null ? (l.effects = [u]) : v.push(u));
        } else
          ((E = {
            eventTime: E,
            lane: v,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            w === null ? ((p = w = E), (s = x)) : (w = w.next = E),
            (o |= v));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((v = u),
            (u = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (w === null && (s = x),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = w),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((o |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((nn |= o), (e.lanes = o), (e.memoizedState = x));
    }
  }
  function ds(e, t, n) {
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
    mt = Dt(ur),
    sr = Dt(ur),
    ar = Dt(ur);
  function en(e) {
    if (e === ur) throw Error(m(174));
    return e;
  }
  function Ii(e, t) {
    switch ((X(ar, t), X(sr, e), X(mt, ur), (e = t.nodeType), e)) {
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
    (J(mt), X(mt, t));
  }
  function jn() {
    (J(mt), J(sr), J(ar));
  }
  function ps(e) {
    en(ar.current);
    var t = en(mt.current),
      n = Ml(t, e.type);
    t !== n && (X(sr, e), X(mt, n));
  }
  function Mi(e) {
    sr.current === e && (J(mt), J(sr));
  }
  var le = Dt(0);
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
  var Ui = [];
  function Ai() {
    for (var e = 0; e < Ui.length; e++) Ui[e]._workInProgressVersionPrimary = null;
    Ui.length = 0;
  }
  var il = ke.ReactCurrentDispatcher,
    Hi = ke.ReactCurrentBatchConfig,
    tn = 0,
    ie = null,
    pe = null,
    ve = null,
    ol = !1,
    cr = !1,
    fr = 0,
    mf = 0;
  function Ee() {
    throw Error(m(321));
  }
  function Wi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function Vi(e, t, n, r, l, i) {
    if (
      ((tn = i),
      (ie = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (il.current = e === null || e.memoizedState === null ? gf : wf),
      (e = n(r, l)),
      cr)
    ) {
      i = 0;
      do {
        if (((cr = !1), (fr = 0), 25 <= i)) throw Error(m(301));
        ((i += 1), (ve = pe = null), (t.updateQueue = null), (il.current = xf), (e = n(r, l)));
      } while (cr);
    }
    if (
      ((il.current = al),
      (t = pe !== null && pe.next !== null),
      (tn = 0),
      (ve = pe = ie = null),
      (ol = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Bi() {
    var e = fr !== 0;
    return ((fr = 0), e);
  }
  function ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ve === null ? (ie.memoizedState = ve = e) : (ve = ve.next = e), ve);
  }
  function Xe() {
    if (pe === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = pe.next;
    var t = ve === null ? ie.memoizedState : ve.next;
    if (t !== null) ((ve = t), (pe = e));
    else {
      if (e === null) throw Error(m(310));
      ((pe = e),
        (e = {
          memoizedState: pe.memoizedState,
          baseState: pe.baseState,
          baseQueue: pe.baseQueue,
          queue: pe.queue,
          next: null,
        }),
        ve === null ? (ie.memoizedState = ve = e) : (ve = ve.next = e));
    }
    return ve;
  }
  function dr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $i(e) {
    var t = Xe(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = pe,
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
        var w = p.lane;
        if ((tn & w) === w)
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
            lane: w,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          (s === null ? ((u = s = x), (o = r)) : (s = s.next = x), (ie.lanes |= w), (nn |= w));
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
      do ((i = l.lane), (ie.lanes |= i), (nn |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Qi(e) {
    var t = Xe(),
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
  function ms() {}
  function hs(e, t) {
    var n = ie,
      r = Xe(),
      l = t(),
      i = !rt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Fe = !0)),
      (r = r.queue),
      Ki(gs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (ve !== null && ve.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), pr(9, ys.bind(null, n, r, l, t), void 0, null), ye === null))
        throw Error(m(349));
      (tn & 30) !== 0 || vs(n, t, l);
    }
    return l;
  }
  function vs(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ie.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ie.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ys(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ws(t) && xs(e));
  }
  function gs(e, t, n) {
    return n(function () {
      ws(t) && xs(e);
    });
  }
  function ws(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !rt(e, n);
    } catch {
      return !0;
    }
  }
  function xs(e) {
    var t = Et(e, 1);
    t !== null && st(t, e, 1, -1);
  }
  function ks(e) {
    var t = ht();
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
      (e = e.dispatch = yf.bind(null, ie, e)),
      [t.memoizedState, e]
    );
  }
  function pr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ie.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ie.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ss() {
    return Xe().memoizedState;
  }
  function ul(e, t, n, r) {
    var l = ht();
    ((ie.flags |= e), (l.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function sl(e, t, n, r) {
    var l = Xe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (pe !== null) {
      var o = pe.memoizedState;
      if (((i = o.destroy), r !== null && Wi(r, o.deps))) {
        l.memoizedState = pr(t, n, i, r);
        return;
      }
    }
    ((ie.flags |= e), (l.memoizedState = pr(1 | t, n, i, r)));
  }
  function Es(e, t) {
    return ul(8390656, 8, e, t);
  }
  function Ki(e, t) {
    return sl(2048, 8, e, t);
  }
  function Ns(e, t) {
    return sl(4, 2, e, t);
  }
  function _s(e, t) {
    return sl(4, 4, e, t);
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
  function Ps(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), sl(4, 4, Cs.bind(null, t, e), n));
  }
  function Yi() {}
  function js(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function zs(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ls(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n))
      : (rt(n, t) || ((n = ou()), (ie.lanes |= n), (nn |= n), (e.baseState = !0)), t);
  }
  function hf(e, t) {
    var n = K;
    ((K = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Hi.transition;
    Hi.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((K = n), (Hi.transition = r));
    }
  }
  function Ts() {
    return Xe().memoizedState;
  }
  function vf(e, t, n) {
    var r = Bt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Rs(e)))
      Fs(t, n);
    else if (((n = as(e, t, n, r)), n !== null)) {
      var l = je();
      (st(n, e, r, l), Os(n, t, r));
    }
  }
  function yf(e, t, n) {
    var r = Bt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Rs(e)) Fs(t, l);
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
            (s === null ? ((l.next = l), Oi(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = as(e, t, l, r)), n !== null && ((l = je()), st(n, e, r, l), Os(n, t, r)));
    }
  }
  function Rs(e) {
    var t = e.alternate;
    return e === ie || (t !== null && t === ie);
  }
  function Fs(e, t) {
    cr = ol = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Os(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  var al = {
      readContext: Ge,
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
    gf = {
      readContext: Ge,
      useCallback: function (e, t) {
        return ((ht().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ge,
      useEffect: Es,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), ul(4194308, 4, Cs.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return ul(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ul(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = ht();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = ht();
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
          (e = e.dispatch = vf.bind(null, ie, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ks,
      useDebugValue: Yi,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = ks(!1),
          t = e[0];
        return ((e = hf.bind(null, e[1])), (ht().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ie,
          l = ht();
        if (te) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ye === null)) throw Error(m(349));
          (tn & 30) !== 0 || vs(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Es(gs.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          pr(9, ys.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = ht(),
          t = ye.identifierPrefix;
        if (te) {
          var n = St,
            r = kt;
          ((n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = fr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = mf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    wf = {
      readContext: Ge,
      useCallback: js,
      useContext: Ge,
      useEffect: Ki,
      useImperativeHandle: Ps,
      useInsertionEffect: Ns,
      useLayoutEffect: _s,
      useMemo: zs,
      useReducer: $i,
      useRef: Ss,
      useState: function () {
        return $i(dr);
      },
      useDebugValue: Yi,
      useDeferredValue: function (e) {
        var t = Xe();
        return Ls(t, pe.memoizedState, e);
      },
      useTransition: function () {
        var e = $i(dr)[0],
          t = Xe().memoizedState;
        return [e, t];
      },
      useMutableSource: ms,
      useSyncExternalStore: hs,
      useId: Ts,
      unstable_isNewReconciler: !1,
    },
    xf = {
      readContext: Ge,
      useCallback: js,
      useContext: Ge,
      useEffect: Ki,
      useImperativeHandle: Ps,
      useInsertionEffect: Ns,
      useLayoutEffect: _s,
      useMemo: zs,
      useReducer: Qi,
      useRef: Ss,
      useState: function () {
        return Qi(dr);
      },
      useDebugValue: Yi,
      useDeferredValue: function (e) {
        var t = Xe();
        return pe === null ? (t.memoizedState = e) : Ls(t, pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Qi(dr)[0],
          t = Xe().memoizedState;
        return [e, t];
      },
      useMutableSource: ms,
      useSyncExternalStore: hs,
      useId: Ts,
      unstable_isNewReconciler: !1,
    };
  function it(e, t) {
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
      return (e = e._reactInternals) ? Gt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = je(),
        l = Bt(e),
        i = Nt(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (st(t, e, l, r), nl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = je(),
        l = Bt(e),
        i = Nt(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (st(t, e, l, r), nl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = je(),
        r = Bt(e),
        l = Nt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (st(t, e, r, n), nl(t, e, r)));
    },
  };
  function Ds(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !bn(n, r) || !bn(l, i)
          : !0
    );
  }
  function Is(e, t, n) {
    var r = !1,
      l = It,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ge(i))
        : ((l = Re(t) ? Zt : Se.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? kn(e, l) : It)),
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
  function Ms(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && cl.enqueueReplaceState(t, t.state, null));
  }
  function Xi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Di(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Ge(i))
      : ((i = Re(t) ? Zt : Se.current), (l.context = kn(e, i))),
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
  function zn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += V(r)), (r = r.return));
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
  var kf = typeof WeakMap == "function" ? WeakMap : Map;
  function Us(e, t, n) {
    ((n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (yl || ((yl = !0), (po = r)), Ji(e, t));
      }),
      n
    );
  }
  function As(e, t, n) {
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
            typeof r != "function" && (Wt === null ? (Wt = new Set([this])) : Wt.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
        }),
      n
    );
  }
  function Hs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new kf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Df.bind(null, e, t, n)), t.then(e, e));
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
  var Sf = ke.ReactCurrentOwner,
    Fe = !1;
  function Pe(e, t, n, r) {
    t.child = e === null ? ss(t, null, n, r) : _n(t, e.child, n, r);
  }
  function Bs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Pn(t, l),
      (r = Vi(e, t, n, r, i, l)),
      (n = Bi()),
      e !== null && !Fe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (te && n && _i(t), (t.flags |= 1), Pe(e, t, r, l), t.child)
    );
  }
  function $s(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !xo(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Qs(e, t, i, r, l))
        : ((e = El(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : bn), n(o, r) && e.ref === t.ref))
        return _t(e, t, l);
    }
    return ((t.flags |= 1), (e = Qt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Qs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (bn(i, r) && e.ref === t.ref)
        if (((Fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Fe = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return qi(e, t, n, r, l);
  }
  function Ks(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          X(Tn, Ve),
          (Ve |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            X(Tn, Ve),
            (Ve |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = i !== null ? i.baseLanes : n),
          X(Tn, Ve),
          (Ve |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        X(Tn, Ve),
        (Ve |= r));
    return (Pe(e, t, l, n), t.child);
  }
  function Ys(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qi(e, t, n, r, l) {
    var i = Re(n) ? Zt : Se.current;
    return (
      (i = kn(t, i)),
      Pn(t, l),
      (n = Vi(e, t, n, r, i, l)),
      (r = Bi()),
      e !== null && !Fe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (te && r && _i(t), (t.flags |= 1), Pe(e, t, n, l), t.child)
    );
  }
  function Gs(e, t, n, r, l) {
    if (Re(n)) {
      var i = !0;
      Gr(t);
    } else i = !1;
    if ((Pn(t, l), t.stateNode === null)) (dl(e, t), Is(t, n, r), Xi(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var s = o.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Ge(p))
        : ((p = Re(n) ? Zt : Se.current), (p = kn(t, p)));
      var w = n.getDerivedStateFromProps,
        x = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      (x ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || s !== p) && Ms(t, o, r, p)),
        (Ut = !1));
      var v = t.memoizedState;
      ((o.state = v),
        rl(t, r, o, l),
        (s = t.memoizedState),
        u !== r || v !== s || Te.current || Ut
          ? (typeof w == "function" && (Gi(t, n, w, r), (s = t.memoizedState)),
            (u = Ut || Ds(t, n, u, r, v, s, p))
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
        cs(e, t),
        (u = t.memoizedProps),
        (p = t.type === t.elementType ? u : it(t.type, u)),
        (o.props = p),
        (x = t.pendingProps),
        (v = o.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = Re(n) ? Zt : Se.current), (s = kn(t, s))));
      var E = n.getDerivedStateFromProps;
      ((w = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== x || v !== s) && Ms(t, o, r, s)),
        (Ut = !1),
        (v = t.memoizedState),
        (o.state = v),
        rl(t, r, o, l));
      var P = t.memoizedState;
      u !== x || v !== P || Te.current || Ut
        ? (typeof E == "function" && (Gi(t, n, E, r), (P = t.memoizedState)),
          (p = Ut || Ds(t, n, p, r, v, P, s) || !1)
            ? (w ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, P, s),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, P, s)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = P)),
          (o.props = r),
          (o.state = P),
          (o.context = s),
          (r = p))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return bi(e, t, n, r, i, l);
  }
  function bi(e, t, n, r, l, i) {
    Ys(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && bu(t, n, !1), _t(e, t, i));
    ((r = t.stateNode), (Sf.current = t));
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = _n(t, e.child, null, i)), (t.child = _n(t, null, u, i)))
        : Pe(e, t, u, i),
      (t.memoizedState = r.state),
      l && bu(t, n, !0),
      t.child
    );
  }
  function Xs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ju(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ju(e, t.context, !1),
      Ii(e, t.containerInfo));
  }
  function Zs(e, t, n, r, l) {
    return (Nn(), zi(l), (t.flags |= 256), Pe(e, t, n, r), t.child);
  }
  var eo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function to(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = le.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      u;
    if (
      ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      X(le, l & 1),
      e === null)
    )
      return (
        ji(t),
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
      return Ef(e, t, o, r, u, l, n);
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
  function fl(e, t, n, r) {
    return (
      r !== null && zi(r),
      _n(t, e.child, null, n),
      (e = no(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ef(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zi(Error(m(422)))), fl(e, t, o, r))
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
            (t.mode & 1) !== 0 && _n(t, e.child, null, o),
            (t.child.memoizedState = to(o)),
            (t.memoizedState = eo),
            i);
    if ((t.mode & 1) === 0) return fl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (i = Error(m(419))), (r = Zi(i, r, void 0)), fl(e, t, o, r));
    }
    if (((u = (o & e.childLanes) !== 0), Fe || u)) {
      if (((r = ye), r !== null)) {
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
          l !== 0 && l !== i.retryLane && ((i.retryLane = l), Et(e, l), st(r, e, l, -1)));
      }
      return (wo(), (r = Zi(Error(m(421)))), fl(e, t, o, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = If.bind(null, e)), (l._reactRetry = t), null)
      : ((e = i.treeContext),
        (We = Ot(l.nextSibling)),
        (He = t),
        (te = !0),
        (lt = null),
        e !== null &&
          ((Ke[Ye++] = kt),
          (Ke[Ye++] = St),
          (Ke[Ye++] = Jt),
          (kt = e.id),
          (St = e.overflow),
          (Jt = t)),
        (t = no(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function qs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Fi(e.return, t, n));
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
  function bs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Pe(e, t, r.children, n), (r = le.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && qs(e, n, t);
          else if (e.tag === 19) qs(e, n, t);
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
    if ((X(le, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && ll(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ro(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && ll(e) === null)) {
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
  function dl(e, t) {
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
  function Nf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Xs(t), Nn());
        break;
      case 5:
        ps(t);
        break;
      case 1:
        Re(t.type) && Gr(t);
        break;
      case 4:
        Ii(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (X(el, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (X(le, le.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Js(e, t, n)
              : (X(le, le.current & 1), (e = _t(e, t, n)), e !== null ? e.sibling : null);
        X(le, le.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return bs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          X(le, le.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Ks(e, t, n));
    }
    return _t(e, t, n);
  }
  var ea, lo, ta, na;
  ((ea = function (e, t) {
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
    (ta = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(mt.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = Fl(e, l)), (r = Fl(e, r)), (i = []));
            break;
          case "select":
            ((l = C({}, l, { value: void 0 })), (r = C({}, r, { value: void 0 })), (i = []));
            break;
          case "textarea":
            ((l = Il(e, l)), (r = Il(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qr);
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
                (I.hasOwnProperty(p) ? i || (i = []) : (i = i || []).push(p, null));
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
                    (I.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && Z("scroll", e), i || u === s || (i = []))
                      : (i = i || []).push(p, s));
        }
        n && (i = i || []).push("style", n);
        var p = i;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (na = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function mr(e, t) {
    if (!te)
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
  function _f(e, t, n) {
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
        return (Ne(t), null);
      case 1:
        return (Re(t.type) && Yr(), Ne(t), null);
      case 3:
        return (
          (r = t.stateNode),
          jn(),
          J(Te),
          J(Se),
          Ai(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (qr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), lt !== null && (vo(lt), (lt = null)))),
          lo(e, t),
          Ne(t),
          null
        );
      case 5:
        Mi(t);
        var l = en(ar.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ta(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Ne(t), null);
          }
          if (((e = en(mt.current)), qr(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[pt] = t), (r[lr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (Z("cancel", r), Z("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < tr.length; l++) Z(tr[l], r);
                break;
              case "source":
                Z("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (Z("error", r), Z("load", r));
                break;
              case "details":
                Z("toggle", r);
                break;
              case "input":
                (Io(r, i), Z("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }), Z("invalid", r));
                break;
              case "textarea":
                (Ao(r, i), Z("invalid", r));
            }
            (Ul(n, i), (l = null));
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var u = i[o];
                o === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (i.suppressHydrationWarning !== !0 && $r(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (i.suppressHydrationWarning !== !0 && $r(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : I.hasOwnProperty(o) && u != null && o === "onScroll" && Z("scroll", r);
              }
            switch (n) {
              case "input":
                (kr(r), Uo(r, i, !0));
                break;
              case "textarea":
                (kr(r), Wo(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Qr);
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
              (e[pt] = t),
              (e[lr] = r),
              ea(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = Al(n, r)), n)) {
                case "dialog":
                  (Z("cancel", e), Z("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Z("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < tr.length; l++) Z(tr[l], e);
                  l = r;
                  break;
                case "source":
                  (Z("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (Z("error", e), Z("load", e), (l = r));
                  break;
                case "details":
                  (Z("toggle", e), (l = r));
                  break;
                case "input":
                  (Io(e, r), (l = Fl(e, r)), Z("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = C({}, r, { value: void 0 })),
                    Z("invalid", e));
                  break;
                case "textarea":
                  (Ao(e, r), (l = Il(e, r)), Z("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ul(n, l), (u = l));
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var s = u[i];
                  i === "style"
                    ? Qo(e, s)
                    : i === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Bo(e, s))
                      : i === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && In(e, s)
                          : typeof s == "number" && In(e, "" + s)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (I.hasOwnProperty(i)
                            ? s != null && i === "onScroll" && Z("scroll", e)
                            : s != null && be(e, i, s, o));
                }
              switch (n) {
                case "input":
                  (kr(e), Uo(e, r, !1));
                  break;
                case "textarea":
                  (kr(e), Wo(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? an(e, !!r.multiple, i, !1)
                      : r.defaultValue != null && an(e, !!r.multiple, r.defaultValue, !0));
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
        if (e && t.stateNode != null) na(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = en(ar.current)), en(mt.current), qr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (i = r.nodeValue !== n) && ((e = He), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $r(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[pt] = t),
              (t.stateNode = r));
        }
        return (Ne(t), null);
      case 13:
        if (
          (J(le),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && We !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (is(), Nn(), (t.flags |= 98560), (i = !1));
          else if (((i = qr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(m(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(m(317));
              i[pt] = t;
            } else (Nn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ne(t), (i = !1));
          } else (lt !== null && (vo(lt), (lt = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (le.current & 1) !== 0 ? me === 0 && (me = 3) : wo())),
            t.updateQueue !== null && (t.flags |= 4),
            Ne(t),
            null);
      case 4:
        return (jn(), lo(e, t), e === null && nr(t.stateNode.containerInfo), Ne(t), null);
      case 10:
        return (Ri(t.type._context), Ne(t), null);
      case 17:
        return (Re(t.type) && Yr(), Ne(t), null);
      case 19:
        if ((J(le), (i = t.memoizedState), i === null)) return (Ne(t), null);
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) mr(i, !1);
          else {
            if (me !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((o = ll(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      mr(i, !1),
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
                  return (X(le, (le.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ce() > Rn &&
              ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ll(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                mr(i, !0),
                i.tail === null && i.tailMode === "hidden" && !o.alternate && !te)
              )
                return (Ne(t), null);
            } else
              2 * ce() - i.renderingStartTime > Rn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ce()),
            (t.sibling = null),
            (n = le.current),
            X(le, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ne(t), null);
      case 22:
      case 23:
        return (
          go(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Ve & 1073741824) !== 0 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ne(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function Cf(e, t) {
    switch ((Ci(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && Yr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          jn(),
          J(Te),
          J(Se),
          Ai(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Mi(t), null);
      case 13:
        if ((J(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          Nn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (J(le), null);
      case 4:
        return (jn(), null);
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
  var pl = !1,
    _e = !1,
    Pf = typeof WeakSet == "function" ? WeakSet : Set,
    _ = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          se(e, t, r);
        }
      else n.current = null;
  }
  function io(e, t, n) {
    try {
      n();
    } catch (r) {
      se(e, t, r);
    }
  }
  var ra = !1;
  function jf(e, t) {
    if (((yi = Fr), (e = Du()), ai(e))) {
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
              w = 0,
              x = e,
              v = null;
            t: for (;;) {
              for (
                var E;
                x !== n || (l !== 0 && x.nodeType !== 3) || (u = o + l),
                  x !== i || (r !== 0 && x.nodeType !== 3) || (s = o + r),
                  x.nodeType === 3 && (o += x.nodeValue.length),
                  (E = x.firstChild) !== null;
              )
                ((v = x), (x = E));
              for (;;) {
                if (x === e) break t;
                if (
                  (v === n && ++p === l && (u = o),
                  v === i && ++w === r && (s = o),
                  (E = x.nextSibling) !== null)
                )
                  break;
                ((x = v), (v = x.parentNode));
              }
              x = E;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (gi = { focusedElem: e, selectionRange: n }, Fr = !1, _ = t; _ !== null;)
      if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (_ = e));
      else
        for (; _ !== null;) {
          t = _;
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
                      fe = P.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? j : it(t.type, j),
                        fe,
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
          } catch (k) {
            se(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (_ = e));
            break;
          }
          _ = t.return;
        }
    return ((P = ra), (ra = !1), P);
  }
  function hr(e, t, n) {
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
  function la(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), la(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[pt], delete t[lr], delete t[Si], delete t[cf], delete t[ff])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ia(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function oa(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || ia(e.return)) return null;
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
            n != null || t.onclick !== null || (t.onclick = Qr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (uo(e, t, n), e = e.sibling; e !== null;) (uo(e, t, n), (e = e.sibling));
  }
  function so(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (so(e, t, n), e = e.sibling; e !== null;) (so(e, t, n), (e = e.sibling));
  }
  var we = null,
    ot = !1;
  function Ht(e, t, n) {
    for (n = n.child; n !== null;) (ua(e, t, n), (n = n.sibling));
  }
  function ua(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Pr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        _e || Ln(n, t);
      case 6:
        var r = we,
          l = ot;
        ((we = null),
          Ht(e, t, n),
          (we = r),
          (ot = l),
          we !== null &&
            (ot
              ? ((e = we),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : we.removeChild(n.stateNode)));
        break;
      case 18:
        we !== null &&
          (ot
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8 ? ki(e.parentNode, n) : e.nodeType === 1 && ki(e, n),
              Yn(e))
            : ki(we, n.stateNode));
        break;
      case 4:
        ((r = we),
          (l = ot),
          (we = n.stateNode.containerInfo),
          (ot = !0),
          Ht(e, t, n),
          (we = r),
          (ot = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_e && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            ((i = i.tag),
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && io(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        Ht(e, t, n);
        break;
      case 1:
        if (!_e && (Ln(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            se(n, t, u);
          }
        Ht(e, t, n);
        break;
      case 21:
        Ht(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((_e = (r = _e) || n.memoizedState !== null), Ht(e, t, n), (_e = r))
          : Ht(e, t, n);
        break;
      default:
        Ht(e, t, n);
    }
  }
  function sa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Pf()),
        t.forEach(function (r) {
          var l = Mf.bind(null, e, r);
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
                ((we = u.stateNode), (ot = !1));
                break e;
              case 3:
                ((we = u.stateNode.containerInfo), (ot = !0));
                break e;
              case 4:
                ((we = u.stateNode.containerInfo), (ot = !0));
                break e;
            }
            u = u.return;
          }
          if (we === null) throw Error(m(160));
          (ua(i, o, l), (we = null), (ot = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          se(l, t, p);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (aa(t, e), (t = t.sibling));
  }
  function aa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ut(t, e), vt(e), r & 4)) {
          try {
            (hr(3, e, e.return), ml(3, e));
          } catch (j) {
            se(e, e.return, j);
          }
          try {
            hr(5, e, e.return);
          } catch (j) {
            se(e, e.return, j);
          }
        }
        break;
      case 1:
        (ut(t, e), vt(e), r & 512 && n !== null && Ln(n, n.return));
        break;
      case 5:
        if ((ut(t, e), vt(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            In(l, "");
          } catch (j) {
            se(e, e.return, j);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (u === "input" && i.type === "radio" && i.name != null && Mo(l, i), Al(u, o));
              var p = Al(u, i);
              for (o = 0; o < s.length; o += 2) {
                var w = s[o],
                  x = s[o + 1];
                w === "style"
                  ? Qo(l, x)
                  : w === "dangerouslySetInnerHTML"
                    ? Bo(l, x)
                    : w === "children"
                      ? In(l, x)
                      : be(l, w, x, p);
              }
              switch (u) {
                case "input":
                  Ol(l, i);
                  break;
                case "textarea":
                  Ho(l, i);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var E = i.value;
                  E != null
                    ? an(l, !!i.multiple, E, !1)
                    : v !== !!i.multiple &&
                      (i.defaultValue != null
                        ? an(l, !!i.multiple, i.defaultValue, !0)
                        : an(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[lr] = i;
            } catch (j) {
              se(e, e.return, j);
            }
        }
        break;
      case 6:
        if ((ut(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (j) {
            se(e, e.return, j);
          }
        }
        break;
      case 3:
        if ((ut(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Yn(t.containerInfo);
          } catch (j) {
            se(e, e.return, j);
          }
        break;
      case 4:
        (ut(t, e), vt(e));
        break;
      case 13:
        (ut(t, e),
          vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (fo = ce())),
          r & 4 && sa(e));
        break;
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((_e = (p = _e) || w), ut(t, e), (_e = p)) : ut(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !w && (e.mode & 1) !== 0)
          )
            for (_ = e, w = e.child; w !== null;) {
              for (x = _ = w; _ !== null;) {
                switch (((v = _), (E = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hr(4, v, v.return);
                    break;
                  case 1:
                    Ln(v, v.return);
                    var P = v.stateNode;
                    if (typeof P.componentWillUnmount == "function") {
                      ((r = v), (n = v.return));
                      try {
                        ((t = r),
                          (P.props = t.memoizedProps),
                          (P.state = t.memoizedState),
                          P.componentWillUnmount());
                      } catch (j) {
                        se(r, n, j);
                      }
                    }
                    break;
                  case 5:
                    Ln(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      da(x);
                      continue;
                    }
                }
                E !== null ? ((E.return = v), (_ = E)) : da(x);
              }
              w = w.sibling;
            }
          e: for (w = null, x = e; ;) {
            if (x.tag === 5) {
              if (w === null) {
                w = x;
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
                        (u.style.display = $o("display", o))));
                } catch (j) {
                  se(e, e.return, j);
                }
              }
            } else if (x.tag === 6) {
              if (w === null)
                try {
                  x.stateNode.nodeValue = p ? "" : x.memoizedProps;
                } catch (j) {
                  se(e, e.return, j);
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
        (ut(t, e), vt(e), r & 4 && sa(e));
        break;
      case 21:
        break;
      default:
        (ut(t, e), vt(e));
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (ia(n)) {
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
            r.flags & 32 && (In(l, ""), (r.flags &= -33));
            var i = oa(e);
            so(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = oa(e);
            uo(e, u, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        se(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function zf(e, t, n) {
    ((_ = e), ca(e));
  }
  function ca(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null;) {
      var l = _,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || pl;
        if (!o) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || _e;
          u = pl;
          var p = _e;
          if (((pl = o), (_e = s) && !p))
            for (_ = l; _ !== null;)
              ((o = _),
                (s = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? pa(l)
                  : s !== null
                    ? ((s.return = o), (_ = s))
                    : pa(l));
          for (; i !== null;) ((_ = i), ca(i), (i = i.sibling));
          ((_ = l), (pl = u), (_e = p));
        }
        fa(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), (_ = i)) : fa(e);
    }
  }
  function fa(e) {
    for (; _ !== null;) {
      var t = _;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                _e || ml(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !_e)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = t.updateQueue;
                i !== null && ds(t, i, r);
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
                  ds(t, o, n);
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
                    var w = p.memoizedState;
                    if (w !== null) {
                      var x = w.dehydrated;
                      x !== null && Yn(x);
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
          _e || (t.flags & 512 && oo(t));
        } catch (v) {
          se(t, t.return, v);
        }
      }
      if (t === e) {
        _ = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (_ = n));
        break;
      }
      _ = t.return;
    }
  }
  function da(e) {
    for (; _ !== null;) {
      var t = _;
      if (t === e) {
        _ = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (_ = n));
        break;
      }
      _ = t.return;
    }
  }
  function pa(e) {
    for (; _ !== null;) {
      var t = _;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ml(4, t);
            } catch (s) {
              se(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                se(t, l, s);
              }
            }
            var i = t.return;
            try {
              oo(t);
            } catch (s) {
              se(t, i, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              oo(t);
            } catch (s) {
              se(t, o, s);
            }
        }
      } catch (s) {
        se(t, t.return, s);
      }
      if (t === e) {
        _ = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (_ = u));
        break;
      }
      _ = t.return;
    }
  }
  var Lf = Math.ceil,
    hl = ke.ReactCurrentDispatcher,
    ao = ke.ReactCurrentOwner,
    Ze = ke.ReactCurrentBatchConfig,
    W = 0,
    ye = null,
    de = null,
    xe = 0,
    Ve = 0,
    Tn = Dt(0),
    me = 0,
    vr = null,
    nn = 0,
    vl = 0,
    co = 0,
    yr = null,
    Oe = null,
    fo = 0,
    Rn = 1 / 0,
    Ct = null,
    yl = !1,
    po = null,
    Wt = null,
    gl = !1,
    Vt = null,
    wl = 0,
    gr = 0,
    mo = null,
    xl = -1,
    kl = 0;
  function je() {
    return (W & 6) !== 0 ? ce() : xl !== -1 ? xl : (xl = ce());
  }
  function Bt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (W & 2) !== 0 && xe !== 0
        ? xe & -xe
        : pf.transition !== null
          ? (kl === 0 && (kl = ou()), kl)
          : ((e = K), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : hu(e.type))), e);
  }
  function st(e, t, n, r) {
    if (50 < gr) throw ((gr = 0), (mo = null), Error(m(185)));
    (Vn(e, n, r),
      ((W & 2) === 0 || e !== ye) &&
        (e === ye && ((W & 2) === 0 && (vl |= n), me === 4 && $t(e, xe)),
        De(e, r),
        n === 1 && W === 0 && (t.mode & 1) === 0 && ((Rn = ce() + 500), Xr && Mt())));
  }
  function De(e, t) {
    var n = e.callbackNode;
    dc(e, t);
    var r = Lr(e, e === ye ? xe : 0);
    if (r === 0) (n !== null && ru(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ru(n), t === 1))
        (e.tag === 0 ? df(ha.bind(null, e)) : es(ha.bind(null, e)),
          sf(function () {
            (W & 6) === 0 && Mt();
          }),
          (n = null));
      else {
        switch (uu(r)) {
          case 1:
            n = Kl;
            break;
          case 4:
            n = lu;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = iu;
            break;
          default:
            n = Cr;
        }
        n = Ea(n, ma.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function ma(e, t) {
    if (((xl = -1), (kl = 0), (W & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Fn() && e.callbackNode !== n) return null;
    var r = Lr(e, e === ye ? xe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = W;
      W |= 2;
      var i = ya();
      (ye !== e || xe !== t) && ((Ct = null), (Rn = ce() + 500), ln(e, t));
      do
        try {
          Ff();
          break;
        } catch (u) {
          va(e, u);
        }
      while (!0);
      (Ti(), (hl.current = i), (W = l), de !== null ? (t = 0) : ((ye = null), (xe = 0), (t = me)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Yl(e)), l !== 0 && ((r = l), (t = ho(e, l)))), t === 1))
        throw ((n = vr), ln(e, 0), $t(e, r), De(e, ce()), n);
      if (t === 6) $t(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Tf(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((i = Yl(e)), i !== 0 && ((r = i), (t = ho(e, i)))),
            t === 1))
        )
          throw ((n = vr), ln(e, 0), $t(e, r), De(e, ce()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            on(e, Oe, Ct);
            break;
          case 3:
            if (($t(e, r), (r & 130023424) === r && ((t = fo + 500 - ce()), 10 < t))) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (je(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = xi(on.bind(null, e, Oe, Ct), t);
              break;
            }
            on(e, Oe, Ct);
            break;
          case 4:
            if (($t(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var o = 31 - nt(r);
              ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
            }
            if (
              ((r = l),
              (r = ce() - r),
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
                            : 1960 * Lf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = xi(on.bind(null, e, Oe, Ct), r);
              break;
            }
            on(e, Oe, Ct);
            break;
          case 5:
            on(e, Oe, Ct);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (De(e, ce()), e.callbackNode === n ? ma.bind(null, e) : null);
  }
  function ho(e, t) {
    var n = yr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = Oe), (Oe = n), t !== null && vo(t)),
      e
    );
  }
  function vo(e) {
    Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
  }
  function Tf(e) {
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
  function $t(e, t) {
    for (
      t &= ~co, t &= ~vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - nt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ha(e) {
    if ((W & 6) !== 0) throw Error(m(327));
    Fn();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return (De(e, ce()), null);
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && ((t = r), (n = ho(e, r)));
    }
    if (n === 1) throw ((n = vr), ln(e, 0), $t(e, t), De(e, ce()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      on(e, Oe, Ct),
      De(e, ce()),
      null
    );
  }
  function yo(e, t) {
    var n = W;
    W |= 1;
    try {
      return e(t);
    } finally {
      ((W = n), W === 0 && ((Rn = ce() + 500), Xr && Mt()));
    }
  }
  function rn(e) {
    Vt !== null && Vt.tag === 0 && (W & 6) === 0 && Fn();
    var t = W;
    W |= 1;
    var n = Ze.transition,
      r = K;
    try {
      if (((Ze.transition = null), (K = 1), e)) return e();
    } finally {
      ((K = r), (Ze.transition = n), (W = t), (W & 6) === 0 && Mt());
    }
  }
  function go() {
    ((Ve = Tn.current), J(Tn));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), uf(n)), de !== null))
      for (n = de.return; n !== null;) {
        var r = n;
        switch ((Ci(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Yr());
            break;
          case 3:
            (jn(), J(Te), J(Se), Ai());
            break;
          case 5:
            Mi(r);
            break;
          case 4:
            jn();
            break;
          case 13:
            J(le);
            break;
          case 19:
            J(le);
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
      ((ye = e),
      (de = e = Qt(e.current, null)),
      (xe = Ve = t),
      (me = 0),
      (vr = null),
      (co = vl = nn = 0),
      (Oe = yr = null),
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
  function va(e, t) {
    do {
      var n = de;
      try {
        if ((Ti(), (il.current = al), ol)) {
          for (var r = ie.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ol = !1;
        }
        if (
          ((tn = 0),
          (ve = pe = ie = null),
          (cr = !1),
          (fr = 0),
          (ao.current = null),
          n === null || n.return === null)
        ) {
          ((me = 1), (vr = t), (de = null));
          break;
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            s = t;
          if (
            ((t = xe),
            (u.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              w = u,
              x = w.tag;
            if ((w.mode & 1) === 0 && (x === 0 || x === 11 || x === 15)) {
              var v = w.alternate;
              v
                ? ((w.updateQueue = v.updateQueue),
                  (w.memoizedState = v.memoizedState),
                  (w.lanes = v.lanes))
                : ((w.updateQueue = null), (w.memoizedState = null));
            }
            var E = Ws(o);
            if (E !== null) {
              ((E.flags &= -257), Vs(E, o, u, i, t), E.mode & 1 && Hs(i, p, t), (t = E), (s = p));
              var P = t.updateQueue;
              if (P === null) {
                var j = new Set();
                (j.add(s), (t.updateQueue = j));
              } else P.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Hs(i, p, t), wo());
                break e;
              }
              s = Error(m(426));
            }
          } else if (te && u.mode & 1) {
            var fe = Ws(o);
            if (fe !== null) {
              ((fe.flags & 65536) === 0 && (fe.flags |= 256), Vs(fe, o, u, i, t), zi(zn(s, u)));
              break e;
            }
          }
          ((i = s = zn(s, u)),
            me !== 4 && (me = 2),
            yr === null ? (yr = [i]) : yr.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var f = Us(i, s, t);
                fs(i, f);
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
                  var k = As(i, u, t);
                  fs(i, k);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        wa(n);
      } catch (z) {
        ((t = z), de === n && n !== null && (de = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ya() {
    var e = hl.current;
    return ((hl.current = al), e === null ? al : e);
  }
  function wo() {
    ((me === 0 || me === 3 || me === 2) && (me = 4),
      ye === null || ((nn & 268435455) === 0 && (vl & 268435455) === 0) || $t(ye, xe));
  }
  function Sl(e, t) {
    var n = W;
    W |= 2;
    var r = ya();
    (ye !== e || xe !== t) && ((Ct = null), ln(e, t));
    do
      try {
        Rf();
        break;
      } catch (l) {
        va(e, l);
      }
    while (!0);
    if ((Ti(), (W = n), (hl.current = r), de !== null)) throw Error(m(261));
    return ((ye = null), (xe = 0), me);
  }
  function Rf() {
    for (; de !== null;) ga(de);
  }
  function Ff() {
    for (; de !== null && !rc();) ga(de);
  }
  function ga(e) {
    var t = Sa(e.alternate, e, Ve);
    ((e.memoizedProps = e.pendingProps), t === null ? wa(e) : (de = t), (ao.current = null));
  }
  function wa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = _f(n, t, Ve)), n !== null)) {
          de = n;
          return;
        }
      } else {
        if (((n = Cf(n, t)), n !== null)) {
          ((n.flags &= 32767), (de = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((me = 6), (de = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    me === 0 && (me = 5);
  }
  function on(e, t, n) {
    var r = K,
      l = Ze.transition;
    try {
      ((Ze.transition = null), (K = 1), Of(e, t, n, r));
    } finally {
      ((Ze.transition = l), (K = r));
    }
    return null;
  }
  function Of(e, t, n, r) {
    do Fn();
    while (Vt !== null);
    if ((W & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (pc(e, i),
      e === ye && ((de = ye = null), (xe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        gl ||
        ((gl = !0),
        Ea(Cr, function () {
          return (Fn(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = Ze.transition), (Ze.transition = null));
      var o = K;
      K = 1;
      var u = W;
      ((W |= 4),
        (ao.current = null),
        jf(e, n),
        aa(n, e),
        bc(gi),
        (Fr = !!yi),
        (gi = yi = null),
        (e.current = n),
        zf(n),
        lc(),
        (W = u),
        (K = o),
        (Ze.transition = i));
    } else e.current = n;
    if (
      (gl && ((gl = !1), (Vt = e), (wl = l)),
      (i = e.pendingLanes),
      i === 0 && (Wt = null),
      uc(n.stateNode),
      De(e, ce()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (yl) throw ((yl = !1), (e = po), (po = null), e);
    return (
      (wl & 1) !== 0 && e.tag !== 0 && Fn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === mo ? gr++ : ((gr = 0), (mo = e))) : (gr = 0),
      Mt(),
      null
    );
  }
  function Fn() {
    if (Vt !== null) {
      var e = uu(wl),
        t = Ze.transition,
        n = K;
      try {
        if (((Ze.transition = null), (K = 16 > e ? 16 : e), Vt === null)) var r = !1;
        else {
          if (((e = Vt), (Vt = null), (wl = 0), (W & 6) !== 0)) throw Error(m(331));
          var l = W;
          for (W |= 4, _ = e.current; _ !== null;) {
            var i = _,
              o = i.child;
            if ((_.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var p = u[s];
                  for (_ = p; _ !== null;) {
                    var w = _;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hr(8, w, i);
                    }
                    var x = w.child;
                    if (x !== null) ((x.return = w), (_ = x));
                    else
                      for (; _ !== null;) {
                        w = _;
                        var v = w.sibling,
                          E = w.return;
                        if ((la(w), w === p)) {
                          _ = null;
                          break;
                        }
                        if (v !== null) {
                          ((v.return = E), (_ = v));
                          break;
                        }
                        _ = E;
                      }
                  }
                }
                var P = i.alternate;
                if (P !== null) {
                  var j = P.child;
                  if (j !== null) {
                    P.child = null;
                    do {
                      var fe = j.sibling;
                      ((j.sibling = null), (j = fe));
                    } while (j !== null);
                  }
                }
                _ = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) ((o.return = i), (_ = o));
            else
              e: for (; _ !== null;) {
                if (((i = _), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  ((f.return = i.return), (_ = f));
                  break e;
                }
                _ = i.return;
              }
          }
          var a = e.current;
          for (_ = a; _ !== null;) {
            o = _;
            var d = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = o), (_ = d));
            else
              e: for (o = a; _ !== null;) {
                if (((u = _), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ml(9, u);
                    }
                  } catch (z) {
                    se(u, u.return, z);
                  }
                if (u === o) {
                  _ = null;
                  break e;
                }
                var k = u.sibling;
                if (k !== null) {
                  ((k.return = u.return), (_ = k));
                  break e;
                }
                _ = u.return;
              }
          }
          if (((W = l), Mt(), dt && typeof dt.onPostCommitFiberRoot == "function"))
            try {
              dt.onPostCommitFiberRoot(Pr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((K = n), (Ze.transition = t));
      }
    }
    return !1;
  }
  function xa(e, t, n) {
    ((t = zn(n, t)),
      (t = Us(e, t, 1)),
      (e = At(e, t, 1)),
      (t = je()),
      e !== null && (Vn(e, 1, t), De(e, t)));
  }
  function se(e, t, n) {
    if (e.tag === 3) xa(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          xa(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r)))
          ) {
            ((e = zn(n, e)),
              (e = As(t, e, 1)),
              (t = At(t, e, 1)),
              (e = je()),
              t !== null && (Vn(t, 1, e), De(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Df(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = je()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ye === e &&
        (xe & n) === n &&
        (me === 4 || (me === 3 && (xe & 130023424) === xe && 500 > ce() - fo)
          ? ln(e, 0)
          : (co |= n)),
      De(e, t));
  }
  function ka(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = je();
    ((e = Et(e, t)), e !== null && (Vn(e, t, n), De(e, n)));
  }
  function If(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ka(e, n));
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
        throw Error(m(314));
    }
    (r !== null && r.delete(t), ka(e, n));
  }
  var Sa;
  Sa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Te.current) Fe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Fe = !1), Nf(e, t, n));
        Fe = (e.flags & 131072) !== 0;
      }
    else ((Fe = !1), te && (t.flags & 1048576) !== 0 && ts(t, Jr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (dl(e, t), (e = t.pendingProps));
        var l = kn(t, Se.current);
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
              Re(r) ? ((i = !0), Gr(t)) : (i = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Di(t),
              (l.updater = cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Xi(t, r, e, n),
              (t = bi(null, t, r, !0, i, n)))
            : ((t.tag = 0), te && i && _i(t), Pe(null, t, l, n), (t = t.child)),
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
            (l = t.tag = Af(r)),
            (e = it(r, e)),
            l)
          ) {
            case 0:
              t = qi(null, t, r, e, n);
              break e;
            case 1:
              t = Gs(null, t, r, e, n);
              break e;
            case 11:
              t = Bs(null, t, r, e, n);
              break e;
            case 14:
              t = $s(null, t, r, it(r.type, e), n);
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
          Gs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Xs(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            cs(e, t),
            rl(t, r, null, n));
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
              ((l = zn(Error(m(423)), t)), (t = Zs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = zn(Error(m(424)), t)), (t = Zs(e, t, r, n, l)));
              break e;
            } else
              for (
                We = Ot(t.stateNode.containerInfo.firstChild),
                  He = t,
                  te = !0,
                  lt = null,
                  n = ss(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Nn(), r === l)) {
              t = _t(e, t, n);
              break e;
            }
            Pe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ps(t),
          e === null && ji(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          wi(r, l) ? (o = null) : i !== null && wi(r, i) && (t.flags |= 32),
          Ys(e, t),
          Pe(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && ji(t), null);
      case 13:
        return Js(e, t, n);
      case 4:
        return (
          Ii(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = _n(t, null, r, n)) : Pe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          Bs(e, t, r, l, n)
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
            (i = t.memoizedProps),
            (o = l.value),
            X(el, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (rt(i.value, o)) {
              if (i.children === l.children && !Te.current) {
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
                          var w = p.pending;
                          (w === null ? (s.next = s) : ((s.next = w.next), (w.next = s)),
                            (p.pending = s));
                        }
                      }
                      ((i.lanes |= n),
                        (s = i.alternate),
                        s !== null && (s.lanes |= n),
                        Fi(i.return, n, t),
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
                    Fi(o, n, t),
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
          (Pe(e, t, l.children, n), (t = t.child));
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
          Pe(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = it(r, t.pendingProps)), (l = it(r.type, l)), $s(e, t, r, l, n));
      case 15:
        return Qs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          dl(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), Gr(t)) : (e = !1),
          Pn(t, n),
          Is(t, r, l),
          Xi(t, r, l, n),
          bi(null, t, r, !0, e, n)
        );
      case 19:
        return bs(e, t, n);
      case 22:
        return Ks(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function Ea(e, t) {
    return nu(e, t);
  }
  function Uf(e, t, n, r) {
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
    return new Uf(e, t, n, r);
  }
  function xo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Af(e) {
    if (typeof e == "function") return xo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ct)) return 11;
      if (e === ft) return 14;
    }
    return 2;
  }
  function Qt(e, t) {
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
  function El(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) xo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case ze:
          return un(n.children, l, i, t);
        case Qe:
          ((o = 8), (l |= 8));
          break;
        case Pt:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = Pt), (e.lanes = i), e);
        case Me:
          return ((e = Je(13, n, t, l)), (e.elementType = Me), (e.lanes = i), e);
        case tt:
          return ((e = Je(19, n, t, l)), (e.elementType = tt), (e.lanes = i), e);
        case ue:
          return Nl(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gt:
                o = 10;
                break e;
              case Yt:
                o = 9;
                break e;
              case ct:
                o = 11;
                break e;
              case ft:
                o = 14;
                break e;
              case Le:
                ((o = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return ((t = Je(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
  }
  function un(e, t, n, r) {
    return ((e = Je(7, e, r, t)), (e.lanes = n), e);
  }
  function Nl(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = ue),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ko(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function So(e, t, n) {
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
  function Hf(e, t, n, r, l) {
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
  function Eo(e, t, n, r, l, i, o, u, s) {
    return (
      (e = new Hf(e, t, n, u, s)),
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
      Di(i),
      e
    );
  }
  function Wf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ce,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Na(e) {
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
      if (Re(n)) return qu(e, n, t);
    }
    return t;
  }
  function _a(e, t, n, r, l, i, o, u, s) {
    return (
      (e = Eo(n, r, !0, e, l, i, o, u, s)),
      (e.context = Na(null)),
      (n = e.current),
      (r = je()),
      (l = Bt(n)),
      (i = Nt(r, l)),
      (i.callback = t ?? null),
      At(n, i, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      De(e, r),
      e
    );
  }
  function _l(e, t, n, r) {
    var l = t.current,
      i = je(),
      o = Bt(l);
    return (
      (n = Na(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Nt(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, o)),
      e !== null && (st(e, l, o, i), nl(e, l, o)),
      o
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
  function Ca(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function No(e, t) {
    (Ca(e, t), (e = e.alternate) && Ca(e, t));
  }
  function Vf() {
    return null;
  }
  var Pa =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function _o(e) {
    this._internalRoot = e;
  }
  ((Pl.prototype.render = _o.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      _l(e, t, null, null);
    }),
    (Pl.prototype.unmount = _o.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (rn(function () {
            _l(null, e, null, null);
          }),
            (t[wt] = null));
        }
      }));
  function Pl(e) {
    this._internalRoot = e;
  }
  Pl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = cu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      (Tt.splice(n, 0, e), n === 0 && pu(e));
    }
  };
  function Co(e) {
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
  function ja() {}
  function Bf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var p = Cl(o);
          i.call(p);
        };
      }
      var o = _a(t, r, e, 0, null, !1, !1, "", ja);
      return (
        (e._reactRootContainer = o),
        (e[wt] = o.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        rn(),
        o
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var p = Cl(s);
        u.call(p);
      };
    }
    var s = Eo(e, 0, !1, null, null, !1, !1, "", ja);
    return (
      (e._reactRootContainer = s),
      (e[wt] = s.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        _l(t, s, n, r);
      }),
      s
    );
  }
  function zl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var s = Cl(o);
          u.call(s);
        };
      }
      _l(t, o, e, l);
    } else o = Bf(n, t, e, l, r);
    return Cl(o);
  }
  ((su = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Wn(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), De(t, ce()), (W & 6) === 0 && ((Rn = ce() + 500), Mt()));
        }
        break;
      case 13:
        (rn(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = je();
            st(r, e, 1, l);
          }
        }),
          No(e, 1));
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = je();
          st(t, e, 134217728, n);
        }
        No(e, 134217728);
      }
    }),
    (au = function (e) {
      if (e.tag === 13) {
        var t = Bt(e),
          n = Et(e, t);
        if (n !== null) {
          var r = je();
          st(n, e, t, r);
        }
        No(e, t);
      }
    }),
    (cu = function () {
      return K;
    }),
    (fu = function (e, t) {
      var n = K;
      try {
        return ((K = e), t());
      } finally {
        K = n;
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
                if (!l) throw Error(m(90));
                (Do(r), Ol(r, l));
              }
            }
          }
          break;
        case "textarea":
          Ho(e, n);
          break;
        case "select":
          ((t = n.value), t != null && an(e, !!n.multiple, t, !1));
      }
    }),
    (Xo = yo),
    (Zo = rn));
  var $f = { usingClientEntryPoint: !1, Events: [ir, wn, Kr, Yo, Go, yo] },
    wr = {
      findFiberByHostInstance: Xt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Qf = {
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
      currentDispatcherRef: ke.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = eu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: wr.findFiberByHostInstance || Vf,
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
        ((Pr = Ll.inject(Qf)), (dt = Ll));
      } catch {}
  }
  return (
    (Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f),
    (Ie.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Co(t)) throw Error(m(200));
      return Wf(e, t, null, n);
    }),
    (Ie.createRoot = function (e, t) {
      if (!Co(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = Pa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Eo(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        new _o(t)
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
      return ((e = eu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ie.flushSync = function (e) {
      return rn(e);
    }),
    (Ie.hydrate = function (e, t, n) {
      if (!jl(t)) throw Error(m(200));
      return zl(null, e, t, !0, n);
    }),
    (Ie.hydrateRoot = function (e, t, n) {
      if (!Co(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = Pa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = _a(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[wt] = t.current),
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
    (Ie.render = function (e, t, n) {
      if (!jl(t)) throw Error(m(200));
      return zl(null, e, t, !1, n);
    }),
    (Ie.unmountComponentAtNode = function (e) {
      if (!jl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rn(function () {
            zl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ie.unstable_batchedUpdates = yo),
    (Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!jl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return zl(e, t, n, !1, r);
    }),
    (Ie.version = "18.3.1-next-f1338f8080-20240426"),
    Ie
  );
}
var Ia;
function bf() {
  if (Ia) return zo.exports;
  Ia = 1;
  function y() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (N) {
        console.error(N);
      }
  }
  return (y(), (zo.exports = qf()), zo.exports);
}
var Ma;
function ed() {
  if (Ma) return Tl;
  Ma = 1;
  var y = bf();
  return ((Tl.createRoot = y.createRoot), (Tl.hydrateRoot = y.hydrateRoot), Tl);
}
var td = ed();
function Ua(y) {
  return `#${y}`;
}
function Aa(y) {
  const N = y.replace(/^\//, "").replace(/\/$/, "");
  return N ? `#/${N}` : "#/";
}
function Fo(y) {
  const N = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return N
    ? N.startsWith("/")
      ? { kind: "route", path: N.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: N }
    : null;
}
function Oo(y, N = "smooth") {
  if (typeof document > "u") return !1;
  const m = document.getElementById(y);
  return m ? (m.scrollIntoView({ behavior: N, block: "start" }), !0) : !1;
}
function nd(y, N = "smooth") {
  if (typeof window > "u") return;
  const m = Ua(y);
  if (Oo(y, N)) {
    window.history.replaceState(null, "", m);
    return;
  }
  window.location.hash = m;
}
function rd(y) {
  typeof window > "u" || (window.location.hash = Aa(y));
}
function Ha() {
  const y = Fo();
  return (y == null ? void 0 : y.kind) === "route" ? y.path : "";
}
function ld(y) {
  return y.kind === "route" ? Aa(y.path) : Ua(y.id);
}
function id(y, N) {
  if ((y.preventDefault(), N.kind === "route")) {
    rd(N.path);
    return;
  }
  nd(N.id);
}
function Wa() {
  if (typeof window > "u") return;
  const y = Fo();
  (y == null ? void 0 : y.kind) === "section" && requestAnimationFrame(() => Oo(y.id, "auto"));
}
function Va(y, N) {
  if (typeof window > "u") return () => {};
  const m = () => {
    const D = Fo();
    if (!D) {
      y("");
      return;
    }
    if (D.kind === "route") {
      y(D.path);
      return;
    }
    (Oo(D.id, "smooth"), y(""));
  };
  return (
    m(),
    window.addEventListener("hashchange", m),
    () => window.removeEventListener("hashchange", m)
  );
}
function od(y = "") {
  const [N, m] = qe.useState(() => (typeof window < "u" ? Ha() : y));
  return (qe.useEffect(() => Va(m), []), N || y);
}
function ud({ routes: y, defaultRoute: N = "", className: m }) {
  const D = od(N);
  qe.useEffect(() => {
    Wa();
  }, []);
  const I = D in y ? D : N,
    F = y[I] ?? y[N];
  return h.jsx("div", { className: m, children: F });
}
const sd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4",
  ad =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85",
  cd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4",
  fd = [
    { label: "Network", path: "network", section: "network" },
    { label: "Ecosystem", path: "ecosystem", section: "ecosystem" },
    { label: "Rewards", path: "rewards", section: "rewards" },
    { label: "Help", path: "help", section: "help" },
    { label: "News", path: "news", section: "news" },
  ],
  dd = [
    {
      name: "Stripe",
      fontFamily: "Georgia, serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: "15px",
    },
    {
      name: "Coinbase",
      fontFamily: "Arial, sans-serif",
      fontWeight: 900,
      letterSpacing: "0.08em",
      fontSize: "13px",
      textTransform: "uppercase",
    },
    {
      name: "Uniswap",
      fontFamily: "Trebuchet MS, sans-serif",
      fontWeight: 600,
      letterSpacing: "0.01em",
      fontSize: "15px",
      fontStyle: "italic",
    },
    {
      name: "Aave",
      fontFamily: "Courier New, monospace",
      fontWeight: 700,
      letterSpacing: "0.12em",
      fontSize: "13px",
      textTransform: "uppercase",
    },
    {
      name: "Compound",
      fontFamily: 'Palatino, "Book Antiqua", serif',
      fontWeight: 400,
      letterSpacing: "-0.01em",
      fontSize: "16px",
    },
    {
      name: "MakerDAO",
      fontFamily: 'Impact, "Arial Narrow", sans-serif',
      fontWeight: 400,
      letterSpacing: "0.04em",
      fontSize: "14px",
    },
    {
      name: "Chainlink",
      fontFamily: "Verdana, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.03em",
      fontSize: "13px",
    },
  ],
  pd = [
    {
      name: "Fundamental Labs",
      fontFamily: "Times New Roman, serif",
      fontWeight: 400,
      letterSpacing: "0.02em",
      fontSize: "14px",
    },
    {
      name: "KUCOIN",
      fontFamily: '"Arial Black", sans-serif',
      fontWeight: 900,
      letterSpacing: "0.08em",
      fontSize: "16px",
    },
    {
      name: "NGC",
      fontFamily: "Impact, sans-serif",
      fontWeight: 700,
      letterSpacing: "0.05em",
      fontSize: "18px",
    },
    {
      name: "NxGen",
      fontFamily: "Georgia, serif",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      fontSize: "17px",
    },
    {
      name: "Matter Labs",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      fontSize: "15px",
    },
    {
      name: "DEXTools",
      fontFamily: "Verdana, sans-serif",
      fontWeight: 700,
      letterSpacing: "0.06em",
      fontSize: "14px",
      textTransform: "uppercase",
    },
    {
      name: "NGRAVE",
      fontFamily: "Courier New, monospace",
      fontWeight: 700,
      letterSpacing: "0.18em",
      fontSize: "14px",
    },
    {
      name: "Polychain",
      fontFamily: "Palatino, serif",
      fontWeight: 500,
      letterSpacing: "0.03em",
      fontSize: "15px",
    },
  ];
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const md = (y) => y.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ba = (...y) =>
    y
      .filter((N, m, D) => !!N && N.trim() !== "" && D.indexOf(N) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var hd = {
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
 */ const vd = qe.forwardRef(
  (
    {
      color: y = "currentColor",
      size: N = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: D,
      className: I = "",
      children: F,
      iconNode: ne,
      ...oe
    },
    H,
  ) =>
    qe.createElement(
      "svg",
      {
        ref: H,
        ...hd,
        width: N,
        height: N,
        stroke: y,
        strokeWidth: D ? (Number(m) * 24) / Number(N) : m,
        className: Ba("lucide", I),
        ...oe,
      },
      [...ne.map(([ae, he]) => qe.createElement(ae, he)), ...(Array.isArray(F) ? F : [F])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yd = (y, N) => {
  const m = qe.forwardRef(({ className: D, ...I }, F) =>
    qe.createElement(vd, { ref: F, iconNode: N, className: Ba(`lucide-${md(y)}`, D), ...I }),
  );
  return ((m.displayName = `${y}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $a = yd("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
function On({ target: y, children: N, className: m, onClick: D, ...I }) {
  return h.jsx("a", {
    href: ld(y),
    className: m,
    onClick: (F) => {
      (id(F, y), D == null || D(F));
    },
    ...I,
    children: N,
  });
}
function Rl({
  children: y,
  size: N = "lg",
  route: m,
  section: D,
  onClick: I,
  className: F = "",
  presetText: ne,
}) {
  const oe = N === "lg" ? "text-base md:text-lg pl-8 pr-2 py-2" : "text-base pl-6 pr-1.5 py-1.5",
    H = h.jsxs(h.Fragment, {
      children: [
        h.jsx("span", { "data-editable": ne ? !0 : void 0, "data-preset-text": ne, children: y }),
        h.jsx("span", {
          className:
            "rounded-full bg-white p-2 transition-colors duration-200 group-hover:bg-white",
          children: h.jsx($a, { className: "h-5 w-5 text-black" }),
        }),
      ],
    }),
    ae = `group inline-flex items-center gap-3 rounded-full bg-black font-medium text-white transition-colors duration-200 hover:bg-gray-800 ${oe} ${F}`;
  return m
    ? h.jsx(On, {
        target: { kind: "route", path: m },
        className: ae,
        "data-editable": !0,
        children: H,
      })
    : D
      ? h.jsx(On, {
          target: { kind: "section", id: D },
          className: ae,
          "data-editable": !0,
          children: H,
        })
      : h.jsx("button", {
          type: "button",
          className: ae,
          onClick: I,
          "data-editable": !0,
          children: H,
        });
}
function Qa() {
  return h.jsx("section", {
    id: "ecosystem",
    className: "scroll-mt-24 bg-[#F5F5F5] px-6 py-24",
    children: h.jsxs("div", {
      className: "mx-auto max-w-[88rem]",
      children: [
        h.jsxs("div", {
          className: "mb-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2",
          children: [
            h.jsxs("div", {
              children: [
                h.jsx("h2", {
                  className: "mb-8 text-4xl leading-tight font-semibold text-black md:text-5xl",
                  style: { letterSpacing: "-0.03em" },
                  "data-editable": !0,
                  "data-preset-text": "info-headline",
                  children: "Meet USD Halo.",
                }),
                h.jsx(Rl, {
                  size: "base",
                  section: "rewards",
                  presetText: "info-cta",
                  children: "Discover it",
                }),
              ],
            }),
            h.jsx("p", {
              className: "text-2xl leading-relaxed text-black/70 md:text-3xl",
              "data-editable": !0,
              "data-preset-text": "info-body",
              children:
                "USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar.",
            }),
          ],
        }),
        h.jsxs("div", {
          id: "rewards",
          className: "scroll-mt-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
          children: [
            h.jsxs("div", {
              className: "flex min-h-80 flex-col justify-between rounded-2xl p-7 lg:col-span-2",
              style: {
                backgroundImage: `url(${ad})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              },
              children: [
                h.jsx("h3", {
                  className: "text-2xl leading-snug font-semibold text-black",
                  style: { letterSpacing: "-0.02em" },
                  "data-editable": !0,
                  "data-preset-text": "card-savings-title",
                  children: "Savings that bloom",
                }),
                h.jsx("p", {
                  className: "max-w-xs text-base text-black/70",
                  "data-editable": !0,
                  "data-preset-text": "card-savings-body",
                  children:
                    "Gain steady returns as your dollar tokens are routed into top-performing DeFi strategies.",
                }),
              ],
            }),
            h.jsxs("div", {
              className: "flex min-h-80 flex-col justify-between rounded-2xl bg-[#2B2644] p-7",
              children: [
                h.jsxs("h3", {
                  className: "text-2xl leading-snug font-semibold text-white",
                  style: { letterSpacing: "-0.02em" },
                  "data-editable": !0,
                  "data-preset-text": "card-fluid-title",
                  children: ["Always fluid,", h.jsx("br", {}), "always pegged."],
                }),
                h.jsx("p", {
                  className: "text-base text-white/60",
                  "data-editable": !0,
                  "data-preset-text": "card-fluid-body",
                  children:
                    "Keep fully dollar-anchored with on-demand access to funds — no lockups or waits.",
                }),
              ],
            }),
            h.jsxs("div", {
              className: "flex min-h-80 flex-col justify-between rounded-2xl bg-[#2B2644] p-7",
              children: [
                h.jsxs("h3", {
                  className: "text-2xl leading-snug font-semibold text-white",
                  style: { letterSpacing: "-0.02em" },
                  "data-editable": !0,
                  "data-preset-text": "card-auto-title",
                  children: ["Fully", h.jsx("br", {}), "automated"],
                }),
                h.jsx("p", {
                  className: "text-base text-white/60",
                  "data-editable": !0,
                  "data-preset-text": "card-auto-body",
                  children:
                    "Skip the task of tuning positions yourself. USD Halo runs in the background for you.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function gd({ className: y = "w-7 h-7" }) {
  return h.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    fill: "currentColor",
    className: y,
    "aria-hidden": !0,
    children: h.jsx("path", {
      d: "M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z",
    }),
  });
}
function sn() {
  const [y, N] = qe.useState("");
  qe.useEffect(() => (N(Ha()), Va(N)), []);
  const m = y === "";
  return h.jsx("nav", {
    className: "absolute top-0 right-0 left-0 z-20 px-6 py-5",
    children: h.jsxs("div", {
      className: "mx-auto flex max-w-[88rem] items-center justify-between",
      children: [
        h.jsxs(On, {
          target: { kind: "route", path: "" },
          className: "flex items-center gap-2 text-black",
          "data-editable": !0,
          children: [
            h.jsx(gd, { className: "h-7 w-7 text-black" }),
            h.jsx("span", {
              className: "text-2xl font-medium tracking-tight",
              "data-editable": !0,
              "data-preset-text": "logo-wordmark",
              children: "Halo",
            }),
          ],
        }),
        h.jsx("div", {
          className: "hidden items-center gap-8 md:flex",
          children: fd.map((D) =>
            h.jsx(
              On,
              {
                target: m ? { kind: "section", id: D.section } : { kind: "route", path: D.path },
                className: `text-base font-medium transition-colors duration-200 hover:text-black ${y === D.path ? "text-black" : "text-gray-700"}`,
                "data-editable": !0,
                "data-preset-text": `nav-${D.path}`,
                children: D.label,
              },
              D.path,
            ),
          ),
        }),
        h.jsx(On, {
          target: { kind: "route", path: "wallet" },
          className:
            "rounded-full bg-black px-7 py-2.5 text-base font-medium text-white transition-colors duration-200 hover:bg-gray-800",
          "data-editable": !0,
          "data-preset-text": "nav-open-wallet",
          children: "Open Wallet",
        }),
      ],
    }),
  });
}
function wd() {
  return h.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5]",
    children: [
      h.jsx("div", { className: "relative pt-20", children: h.jsx(sn, {}) }),
      h.jsx(Qa, {}),
    ],
  });
}
function Ka() {
  return h.jsx("section", {
    id: "help",
    className: "scroll-mt-24 bg-[#F5F5F5] px-6 py-24",
    children: h.jsxs("div", {
      className: "mx-auto grid max-w-[88rem] grid-cols-1 items-start gap-8 md:grid-cols-2",
      children: [
        h.jsxs("div", {
          className: "md:pr-12 md:pt-2",
          children: [
            h.jsx("p", {
              className: "mb-2 text-sm text-black/60",
              "data-editable": !0,
              "data-preset-text": "usecases-eyebrow",
              children: "USD Halo in Practice",
            }),
            h.jsx("h2", {
              className: "mb-6 text-5xl leading-none font-semibold text-black md:text-6xl",
              style: { letterSpacing: "-0.04em" },
              "data-editable": !0,
              "data-preset-text": "usecases-headline",
              children: "Use modes",
            }),
            h.jsx("p", {
              className: "max-w-sm text-base leading-relaxed text-black/60",
              "data-editable": !0,
              "data-preset-text": "usecases-body",
              children:
                "USD Halo powers a wide range of modes for builders, companies and treasuries wanting safe and rewarding stablecoin integrations plus more",
            }),
          ],
        }),
        h.jsxs("div", {
          className: "relative min-h-[720px] overflow-hidden rounded-3xl",
          children: [
            h.jsx("video", {
              className: "absolute inset-0 h-full w-full object-cover",
              src: cd,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
            }),
            h.jsxs("div", {
              className: "relative z-10 p-10 md:p-12",
              children: [
                h.jsx("h3", {
                  className: "mb-5 text-4xl leading-tight font-semibold text-black md:text-5xl",
                  style: { letterSpacing: "-0.03em" },
                  "data-editable": !0,
                  "data-preset-text": "usecases-commerce-title",
                  children: "Commerce",
                }),
                h.jsx("p", {
                  className: "mb-8 max-w-md text-base text-black/70",
                  "data-editable": !0,
                  "data-preset-text": "usecases-commerce-body",
                  children:
                    "Lift customer retention by offering USD Halo, a trusted dollar-backed stablecoin with strong yields, letting your patrons earn with zero effort on your platform.",
                }),
                h.jsxs(On, {
                  target: { kind: "section", id: "ecosystem" },
                  className:
                    "group inline-flex items-center gap-3 text-base font-medium text-black transition-colors hover:text-black/80",
                  "data-editable": !0,
                  "data-preset-text": "usecases-cta",
                  children: [
                    "Know more",
                    h.jsx("span", {
                      className:
                        "flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur transition-colors duration-200 group-hover:bg-white",
                      children: h.jsx($a, { className: "h-4 w-4 text-black" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function xd() {
  return h.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5]",
    children: [
      h.jsx("div", { className: "relative pt-20", children: h.jsx(sn, {}) }),
      h.jsx(Ka, {}),
    ],
  });
}
function Ya({
  brands: y,
  trackClass: N,
  itemSpacing: m = "mx-7",
  itemClassName: D = "text-black/60",
}) {
  const I = y.map((F) =>
    h.jsx(
      "span",
      {
        className: `${m} shrink-0 whitespace-nowrap ${D}`,
        style: {
          fontFamily: F.fontFamily,
          fontWeight: F.fontWeight,
          letterSpacing: F.letterSpacing,
          fontSize: F.fontSize,
          fontStyle: F.fontStyle,
          textTransform: F.textTransform,
        },
        "data-editable": !0,
        "data-preset-text": `brand-${F.name.toLowerCase().replace(/\s+/g, "-")}`,
        children: F.name,
      },
      F.name,
    ),
  );
  return h.jsx("div", {
    className: "w-full overflow-hidden",
    children: h.jsxs("div", { className: N, children: [I, I] }),
  });
}
function Ga() {
  return h.jsx("section", {
    id: "news",
    className: "scroll-mt-24 bg-[#F5F5F5] px-6 py-16",
    children: h.jsxs("div", {
      className: "mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-8 md:grid-cols-4",
      children: [
        h.jsxs("p", {
          className: "text-base leading-relaxed text-black/70",
          "data-editable": !0,
          "data-preset-text": "backers-kicker",
          children: [
            "Funded by premier partners",
            h.jsx("br", {}),
            "and forward-thinking leaders.",
          ],
        }),
        h.jsx("div", {
          className: "overflow-hidden md:col-span-3",
          children: h.jsx(Ya, {
            brands: pd,
            trackClass: "backers-track",
            itemClassName: "text-black/50",
          }),
        }),
      ],
    }),
  });
}
function Xa() {
  return h.jsx("section", {
    className: "relative px-6 pt-20 pb-6",
    children: h.jsxs("div", {
      id: "network",
      className: "relative h-screen w-full scroll-mt-24 overflow-hidden rounded-2xl",
      style: { maxHeight: "calc(100vh - 5rem)" },
      children: [
        h.jsx("video", {
          className: "absolute inset-0 h-full w-full object-cover",
          src: sd,
          autoPlay: !0,
          muted: !0,
          loop: !0,
          playsInline: !0,
        }),
        h.jsxs("div", {
          className: "relative z-10 flex h-full flex-col items-start justify-start p-12 pt-36",
          children: [
            h.jsxs("h1", {
              className:
                "mb-4 max-w-xl text-5xl leading-tight font-semibold text-black md:text-6xl",
              style: { letterSpacing: "-0.04em" },
              "data-editable": !0,
              "data-preset-text": "hero-headline",
              children: ["Your Wealth", h.jsx("br", {}), "Works"],
            }),
            h.jsx("p", {
              className: "mb-8 max-w-md text-base leading-relaxed text-black/70 md:text-lg",
              "data-editable": !0,
              "data-preset-text": "hero-subcopy",
              children:
                "An automated, reward-powered digital dollar built for native passive earnings and effortless connection into DeFi.",
            }),
            h.jsx(Rl, { section: "ecosystem", presetText: "hero-cta", children: "Join us" }),
            h.jsx("div", {
              className: "mt-24 w-full max-w-md overflow-hidden",
              children: h.jsx(Ya, { brands: dd, trackClass: "marquee-track" }),
            }),
          ],
        }),
      ],
    }),
  });
}
function kd() {
  return h.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5]",
    children: [h.jsx(sn, {}), h.jsx(Xa, {}), h.jsx(Qa, {}), h.jsx(Ga, {}), h.jsx(Ka, {})],
  });
}
function Sd() {
  return h.jsxs("div", {
    className: "flex min-h-screen flex-col bg-[#F5F5F5]",
    children: [
      h.jsxs("div", {
        className: "flex h-screen flex-col overflow-hidden",
        children: [h.jsx(sn, {}), h.jsx(Xa, {})],
      }),
      h.jsx("section", {
        className: "px-6 py-24",
        children: h.jsxs("div", {
          className: "mx-auto max-w-[88rem]",
          children: [
            h.jsx("h2", {
              className: "text-4xl font-semibold text-black md:text-5xl",
              style: { letterSpacing: "-0.03em" },
              "data-editable": !0,
              "data-preset-text": "network-headline",
              children: "Halo network",
            }),
            h.jsx("p", {
              className: "mt-6 max-w-2xl text-xl text-black/70",
              "data-editable": !0,
              "data-preset-text": "network-body",
              children:
                "Institutional validators, seamless DeFi connectivity, and reward-earning dollars—USD Halo stays pegged while your wealth works across the network.",
            }),
          ],
        }),
      }),
    ],
  });
}
function Ed() {
  return h.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5]",
    children: [
      h.jsx("div", { className: "relative pt-20", children: h.jsx(sn, {}) }),
      h.jsx(Ga, {}),
    ],
  });
}
function Nd() {
  return h.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5]",
    children: [
      h.jsx("div", { className: "relative pt-20", children: h.jsx(sn, {}) }),
      h.jsx("section", {
        className: "scroll-mt-20 px-6 py-24",
        children: h.jsxs("div", {
          className: "mx-auto max-w-[88rem]",
          children: [
            h.jsx("h2", {
              className: "mb-8 text-4xl font-semibold text-black md:text-5xl",
              style: { letterSpacing: "-0.03em" },
              "data-editable": !0,
              "data-preset-text": "rewards-headline",
              children: "Meet USD Halo rewards",
            }),
            h.jsx("p", {
              className: "max-w-2xl text-2xl leading-relaxed text-black/70 md:text-3xl",
              "data-editable": !0,
              "data-preset-text": "rewards-body",
              children:
                "USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar—always fluid, always pegged, fully automated in the background.",
            }),
            h.jsxs("div", {
              className: "mt-12 grid gap-4 sm:grid-cols-2",
              children: [
                h.jsxs("article", {
                  className: "rounded-2xl bg-[#2B2644] p-7 text-white",
                  children: [
                    h.jsx("h3", {
                      className: "text-2xl font-semibold",
                      "data-editable": !0,
                      "data-preset-text": "rewards-yield-title",
                      children: "Passive yield",
                    }),
                    h.jsx("p", {
                      className: "mt-4 text-white/60",
                      "data-editable": !0,
                      "data-preset-text": "rewards-yield-body",
                      children: "Top-performing DeFi strategies routed automatically.",
                    }),
                  ],
                }),
                h.jsxs("article", {
                  className: "rounded-2xl bg-[#2B2644] p-7 text-white",
                  children: [
                    h.jsx("h3", {
                      className: "text-2xl font-semibold",
                      "data-editable": !0,
                      "data-preset-text": "rewards-lockups-title",
                      children: "No lockups",
                    }),
                    h.jsx("p", {
                      className: "mt-4 text-white/60",
                      "data-editable": !0,
                      "data-preset-text": "rewards-lockups-body",
                      children: "On-demand access with dollar anchoring intact.",
                    }),
                  ],
                }),
              ],
            }),
            h.jsx("div", {
              className: "mt-10",
              children: h.jsx(Rl, {
                size: "base",
                route: "wallet",
                presetText: "rewards-cta",
                children: "Open Wallet",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function _d() {
  return h.jsx("section", {
    id: "wallet",
    className: "scroll-mt-24 border-t border-black/5 bg-[#F5F5F5] px-6 py-20",
    "aria-label": "Wallet",
    children: h.jsxs("div", {
      className: "mx-auto max-w-[88rem] text-center",
      children: [
        h.jsx("h2", {
          className: "mb-4 text-3xl font-semibold text-black md:text-4xl",
          style: { letterSpacing: "-0.03em" },
          "data-editable": !0,
          "data-preset-text": "wallet-headline",
          children: "Connect your wallet",
        }),
        h.jsx("p", {
          className: "mx-auto mb-8 max-w-md text-base text-black/60",
          "data-editable": !0,
          "data-preset-text": "wallet-body",
          children:
            "Link a compatible wallet to hold USD Halo, view rewards, and move funds on-chain.",
        }),
        h.jsx(Rl, {
          size: "base",
          route: "wallet",
          presetText: "wallet-cta",
          children: "Open Wallet",
        }),
      ],
    }),
  });
}
function Cd() {
  return h.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5]",
    children: [
      h.jsx("div", { className: "relative pt-20", children: h.jsx(sn, {}) }),
      h.jsx(_d, {}),
    ],
  });
}
function Pd() {
  return (
    qe.useEffect(() => {
      Wa();
    }, []),
    h.jsx("div", {
      className: "flex flex-col bg-[#F5F5F5]",
      children: h.jsx(ud, {
        routes: {
          "": h.jsx(kd, {}),
          network: h.jsx(Sd, {}),
          ecosystem: h.jsx(wd, {}),
          rewards: h.jsx(Nd, {}),
          help: h.jsx(xd, {}),
          news: h.jsx(Ed, {}),
          wallet: h.jsx(Cd, {}),
        },
      }),
    })
  );
}
td.createRoot(document.getElementById("root")).render(
  h.jsx(qe.StrictMode, { children: h.jsx(Pd, {}) }),
);
