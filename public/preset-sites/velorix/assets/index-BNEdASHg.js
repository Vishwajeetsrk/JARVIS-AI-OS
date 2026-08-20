(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const I of document.querySelectorAll('link[rel="modulepreload"]')) D(I);
  new MutationObserver((I) => {
    for (const R of I)
      if (R.type === "childList")
        for (const q of R.addedNodes) q.tagName === "LINK" && q.rel === "modulepreload" && D(q);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(I) {
    const R = {};
    return (
      I.integrity && (R.integrity = I.integrity),
      I.referrerPolicy && (R.referrerPolicy = I.referrerPolicy),
      I.crossOrigin === "use-credentials"
        ? (R.credentials = "include")
        : I.crossOrigin === "anonymous"
          ? (R.credentials = "omit")
          : (R.credentials = "same-origin"),
      R
    );
  }
  function D(I) {
    if (I.ep) return;
    I.ep = !0;
    const R = p(I);
    fetch(I.href, R);
  }
})();
var jo = { exports: {} },
  xr = {},
  Lo = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function Bf() {
  if (La) return U;
  La = 1;
  var h = Symbol.for("react.element"),
    S = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    D = Symbol.for("react.strict_mode"),
    I = Symbol.for("react.profiler"),
    R = Symbol.for("react.provider"),
    q = Symbol.for("react.context"),
    ce = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    ge = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    re = Symbol.iterator;
  function b(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (re && c[re]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var We = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Qe = Object.assign,
    ee = {};
  function Y(c, g, M) {
    ((this.props = c), (this.context = g), (this.refs = ee), (this.updater = M || We));
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
    ((this.props = c), (this.context = g), (this.refs = ee), (this.updater = M || We));
  }
  var be = (at.prototype = new yt());
  ((be.constructor = at), Qe(be, Y.prototype), (be.isPureReactComponent = !0));
  var ke = Array.isArray,
    et = Object.prototype.hasOwnProperty,
    Ne = { current: null },
    je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ke(c, g, M) {
    var A,
      H = {},
      $ = null,
      X = null;
    if (g != null)
      for (A in (g.ref !== void 0 && (X = g.ref), g.key !== void 0 && ($ = "" + g.key), g))
        et.call(g, A) && !je.hasOwnProperty(A) && (H[A] = g[A]);
    var Q = arguments.length - 2;
    if (Q === 1) H.children = M;
    else if (1 < Q) {
      for (var te = Array(Q), Ue = 0; Ue < Q; Ue++) te[Ue] = arguments[Ue + 2];
      H.children = te;
    }
    if (c && c.defaultProps) for (A in ((Q = c.defaultProps), Q)) H[A] === void 0 && (H[A] = Q[A]);
    return { $$typeof: h, type: c, key: $, ref: X, props: H, _owner: Ne.current };
  }
  function Pt(c, g) {
    return { $$typeof: h, type: c.type, key: g, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === h;
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
  function tt(c, g, M, A, H) {
    var $ = typeof c;
    ($ === "undefined" || $ === "boolean") && (c = null);
    var X = !1;
    if (c === null) X = !0;
    else
      switch ($) {
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case h:
            case S:
              X = !0;
          }
      }
    if (X)
      return (
        (X = c),
        (H = H(X)),
        (c = A === "" ? "." + Me(X, 0) : A),
        ke(H)
          ? ((M = ""),
            c != null && (M = c.replace(ct, "$&/") + "/"),
            tt(H, g, M, "", function (Ue) {
              return Ue;
            }))
          : H != null &&
            (gt(H) &&
              (H = Pt(
                H,
                M +
                  (!H.key || (X && X.key === H.key) ? "" : ("" + H.key).replace(ct, "$&/") + "/") +
                  c,
              )),
            g.push(H)),
        1
      );
    if (((X = 0), (A = A === "" ? "." : A + ":"), ke(c)))
      for (var Q = 0; Q < c.length; Q++) {
        $ = c[Q];
        var te = A + Me($, Q);
        X += tt($, g, M, te, H);
      }
    else if (((te = b(c)), typeof te == "function"))
      for (c = te.call(c), Q = 0; !($ = c.next()).done;)
        (($ = $.value), (te = A + Me($, Q++)), (X += tt($, g, M, te, H)));
    else if ($ === "object")
      throw (
        (g = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (g === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : g) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return X;
  }
  function ft(c, g, M) {
    if (c == null) return c;
    var A = [],
      H = 0;
    return (
      tt(c, A, "", "", function ($) {
        return g.call(M, $, H++);
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
  var oe = { current: null },
    E = { transition: null },
    O = { ReactCurrentDispatcher: oe, ReactCurrentBatchConfig: E, ReactCurrentOwner: Ne };
  function N() {
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
    (U.Fragment = p),
    (U.Profiler = I),
    (U.PureComponent = at),
    (U.StrictMode = D),
    (U.Suspense = W),
    (U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
    (U.act = N),
    (U.cloneElement = function (c, g, M) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var A = Qe({}, c.props),
        H = c.key,
        $ = c.ref,
        X = c._owner;
      if (g != null) {
        if (
          (g.ref !== void 0 && (($ = g.ref), (X = Ne.current)),
          g.key !== void 0 && (H = "" + g.key),
          c.type && c.type.defaultProps)
        )
          var Q = c.type.defaultProps;
        for (te in g)
          et.call(g, te) &&
            !je.hasOwnProperty(te) &&
            (A[te] = g[te] === void 0 && Q !== void 0 ? Q[te] : g[te]);
      }
      var te = arguments.length - 2;
      if (te === 1) A.children = M;
      else if (1 < te) {
        Q = Array(te);
        for (var Ue = 0; Ue < te; Ue++) Q[Ue] = arguments[Ue + 2];
        A.children = Q;
      }
      return { $$typeof: h, type: c.type, key: H, ref: $, props: A, _owner: X };
    }),
    (U.createContext = function (c) {
      return (
        (c = {
          $$typeof: q,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: R, _context: c }),
        (c.Consumer = c)
      );
    }),
    (U.createElement = Ke),
    (U.createFactory = function (c) {
      var g = Ke.bind(null, c);
      return ((g.type = c), g);
    }),
    (U.createRef = function () {
      return { current: null };
    }),
    (U.forwardRef = function (c) {
      return { $$typeof: ce, render: c };
    }),
    (U.isValidElement = gt),
    (U.lazy = function (c) {
      return { $$typeof: me, _payload: { _status: -1, _result: c }, _init: Le };
    }),
    (U.memo = function (c, g) {
      return { $$typeof: ge, type: c, compare: g === void 0 ? null : g };
    }),
    (U.startTransition = function (c) {
      var g = E.transition;
      E.transition = {};
      try {
        c();
      } finally {
        E.transition = g;
      }
    }),
    (U.unstable_act = N),
    (U.useCallback = function (c, g) {
      return oe.current.useCallback(c, g);
    }),
    (U.useContext = function (c) {
      return oe.current.useContext(c);
    }),
    (U.useDebugValue = function () {}),
    (U.useDeferredValue = function (c) {
      return oe.current.useDeferredValue(c);
    }),
    (U.useEffect = function (c, g) {
      return oe.current.useEffect(c, g);
    }),
    (U.useId = function () {
      return oe.current.useId();
    }),
    (U.useImperativeHandle = function (c, g, M) {
      return oe.current.useImperativeHandle(c, g, M);
    }),
    (U.useInsertionEffect = function (c, g) {
      return oe.current.useInsertionEffect(c, g);
    }),
    (U.useLayoutEffect = function (c, g) {
      return oe.current.useLayoutEffect(c, g);
    }),
    (U.useMemo = function (c, g) {
      return oe.current.useMemo(c, g);
    }),
    (U.useReducer = function (c, g, M) {
      return oe.current.useReducer(c, g, M);
    }),
    (U.useRef = function (c) {
      return oe.current.useRef(c);
    }),
    (U.useState = function (c) {
      return oe.current.useState(c);
    }),
    (U.useSyncExternalStore = function (c, g, M) {
      return oe.current.useSyncExternalStore(c, g, M);
    }),
    (U.useTransition = function () {
      return oe.current.useTransition();
    }),
    (U.version = "18.3.1"),
    U
  );
}
var Ta;
function Oo() {
  return (Ta || ((Ta = 1), (Lo.exports = Bf())), Lo.exports);
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
function Wf() {
  if (Ra) return xr;
  Ra = 1;
  var h = Oo(),
    S = Symbol.for("react.element"),
    p = Symbol.for("react.fragment"),
    D = Object.prototype.hasOwnProperty,
    I = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(ce, W, ge) {
    var me,
      re = {},
      b = null,
      We = null;
    (ge !== void 0 && (b = "" + ge),
      W.key !== void 0 && (b = "" + W.key),
      W.ref !== void 0 && (We = W.ref));
    for (me in W) D.call(W, me) && !R.hasOwnProperty(me) && (re[me] = W[me]);
    if (ce && ce.defaultProps)
      for (me in ((W = ce.defaultProps), W)) re[me] === void 0 && (re[me] = W[me]);
    return { $$typeof: S, type: ce, key: b, ref: We, props: re, _owner: I.current };
  }
  return ((xr.Fragment = p), (xr.jsx = q), (xr.jsxs = q), xr);
}
var Ia;
function Qf() {
  return (Ia || ((Ia = 1), (jo.exports = Wf())), jo.exports);
}
var v = Qf(),
  Be = Oo(),
  Rl = {},
  To = { exports: {} },
  De = {},
  Ro = { exports: {} },
  Io = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oa;
function Kf() {
  return (
    Oa ||
      ((Oa = 1),
      (function (h) {
        function S(E, O) {
          var N = E.length;
          E.push(O);
          e: for (; 0 < N;) {
            var c = (N - 1) >>> 1,
              g = E[c];
            if (0 < I(g, O)) ((E[c] = O), (E[N] = g), (N = c));
            else break e;
          }
        }
        function p(E) {
          return E.length === 0 ? null : E[0];
        }
        function D(E) {
          if (E.length === 0) return null;
          var O = E[0],
            N = E.pop();
          if (N !== O) {
            E[0] = N;
            e: for (var c = 0, g = E.length, M = g >>> 1; c < M;) {
              var A = 2 * (c + 1) - 1,
                H = E[A],
                $ = A + 1,
                X = E[$];
              if (0 > I(H, N))
                $ < g && 0 > I(X, H)
                  ? ((E[c] = X), (E[$] = N), (c = $))
                  : ((E[c] = H), (E[A] = N), (c = A));
              else if ($ < g && 0 > I(X, N)) ((E[c] = X), (E[$] = N), (c = $));
              else break e;
            }
          }
          return O;
        }
        function I(E, O) {
          var N = E.sortIndex - O.sortIndex;
          return N !== 0 ? N : E.id - O.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var R = performance;
          h.unstable_now = function () {
            return R.now();
          };
        } else {
          var q = Date,
            ce = q.now();
          h.unstable_now = function () {
            return q.now() - ce;
          };
        }
        var W = [],
          ge = [],
          me = 1,
          re = null,
          b = 3,
          We = !1,
          Qe = !1,
          ee = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function be(E) {
          for (var O = p(ge); O !== null;) {
            if (O.callback === null) D(ge);
            else if (O.startTime <= E) (D(ge), (O.sortIndex = O.expirationTime), S(W, O));
            else break;
            O = p(ge);
          }
        }
        function ke(E) {
          if (((ee = !1), be(E), !Qe))
            if (p(W) !== null) ((Qe = !0), Le(et));
            else {
              var O = p(ge);
              O !== null && oe(ke, O.startTime - E);
            }
        }
        function et(E, O) {
          ((Qe = !1), ee && ((ee = !1), yt(Ke), (Ke = -1)), (We = !0));
          var N = b;
          try {
            for (be(O), re = p(W); re !== null && (!(re.expirationTime > O) || (E && !Yt()));) {
              var c = re.callback;
              if (typeof c == "function") {
                ((re.callback = null), (b = re.priorityLevel));
                var g = c(re.expirationTime <= O);
                ((O = h.unstable_now()),
                  typeof g == "function" ? (re.callback = g) : re === p(W) && D(W),
                  be(O));
              } else D(W);
              re = p(W);
            }
            if (re !== null) var M = !0;
            else {
              var A = p(ge);
              (A !== null && oe(ke, A.startTime - O), (M = !1));
            }
            return M;
          } finally {
            ((re = null), (b = N), (We = !1));
          }
        }
        var Ne = !1,
          je = null,
          Ke = -1,
          Pt = 5,
          gt = -1;
        function Yt() {
          return !(h.unstable_now() - gt < Pt);
        }
        function ct() {
          if (je !== null) {
            var E = h.unstable_now();
            gt = E;
            var O = !0;
            try {
              O = je(!0, E);
            } finally {
              O ? Me() : ((Ne = !1), (je = null));
            }
          } else Ne = !1;
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
        function Le(E) {
          ((je = E), Ne || ((Ne = !0), Me()));
        }
        function oe(E, O) {
          Ke = Y(function () {
            E(h.unstable_now());
          }, O);
        }
        ((h.unstable_IdlePriority = 5),
          (h.unstable_ImmediatePriority = 1),
          (h.unstable_LowPriority = 4),
          (h.unstable_NormalPriority = 3),
          (h.unstable_Profiling = null),
          (h.unstable_UserBlockingPriority = 2),
          (h.unstable_cancelCallback = function (E) {
            E.callback = null;
          }),
          (h.unstable_continueExecution = function () {
            Qe || We || ((Qe = !0), Le(et));
          }),
          (h.unstable_forceFrameRate = function (E) {
            0 > E || 125 < E
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Pt = 0 < E ? Math.floor(1e3 / E) : 5);
          }),
          (h.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (h.unstable_getFirstCallbackNode = function () {
            return p(W);
          }),
          (h.unstable_next = function (E) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = b;
            }
            var N = b;
            b = O;
            try {
              return E();
            } finally {
              b = N;
            }
          }),
          (h.unstable_pauseExecution = function () {}),
          (h.unstable_requestPaint = function () {}),
          (h.unstable_runWithPriority = function (E, O) {
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
            var N = b;
            b = E;
            try {
              return O();
            } finally {
              b = N;
            }
          }),
          (h.unstable_scheduleCallback = function (E, O, N) {
            var c = h.unstable_now();
            switch (
              (typeof N == "object" && N !== null
                ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? c + N : c))
                : (N = c),
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
              (g = N + g),
              (E = {
                id: me++,
                callback: O,
                priorityLevel: E,
                startTime: N,
                expirationTime: g,
                sortIndex: -1,
              }),
              N > c
                ? ((E.sortIndex = N),
                  S(ge, E),
                  p(W) === null &&
                    E === p(ge) &&
                    (ee ? (yt(Ke), (Ke = -1)) : (ee = !0), oe(ke, N - c)))
                : ((E.sortIndex = g), S(W, E), Qe || We || ((Qe = !0), Le(et))),
              E
            );
          }),
          (h.unstable_shouldYield = Yt),
          (h.unstable_wrapCallback = function (E) {
            var O = b;
            return function () {
              var N = b;
              b = O;
              try {
                return E.apply(this, arguments);
              } finally {
                b = N;
              }
            };
          }));
      })(Io)),
    Io
  );
}
var Fa;
function Yf() {
  return (Fa || ((Fa = 1), (Ro.exports = Kf())), Ro.exports);
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
function Xf() {
  if (Da) return De;
  Da = 1;
  var h = Oo(),
    S = Yf();
  function p(e) {
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
  function R(e, t) {
    (q(e, t), q(e + "Capture", t));
  }
  function q(e, t) {
    for (I[e] = t, e = 0; e < t.length; e++) D.add(t[e]);
  }
  var ce = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    W = Object.prototype.hasOwnProperty,
    ge =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    me = {},
    re = {};
  function b(e) {
    return W.call(re, e) ? !0 : W.call(me, e) ? !1 : ge.test(e) ? (re[e] = !0) : ((me[e] = !0), !1);
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
  function Qe(e, t, n, r) {
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
  function ee(e, t, n, r, l, i, o) {
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
      Y[e] = new ee(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Y[t] = new ee(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      Y[e] = new ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        Y[e] = new ee(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Y[e] = new ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Y[e] = new ee(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Y[e] = new ee(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Y[e] = new ee(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Y[e] = new ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var yt = /[\-:]([a-z])/g;
  function at(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yt, at);
      Y[t] = new ee(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yt, at);
        Y[t] = new ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yt, at);
      Y[t] = new ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Y[e] = new ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Y.xlinkHref = new ee(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Y[e] = new ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function be(e, t, n, r) {
    var l = Y.hasOwnProperty(t) ? Y[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (Qe(t, n, l, r) && (n = null),
      r || l === null
        ? b(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
  var ke = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for("react.element"),
    Ne = Symbol.for("react.portal"),
    je = Symbol.for("react.fragment"),
    Ke = Symbol.for("react.strict_mode"),
    Pt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Me = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    oe = Symbol.for("react.offscreen"),
    E = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (E && e[E]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var N = Object.assign,
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
  function H(e) {
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
  function $(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case je:
        return "Fragment";
      case Ne:
        return "Portal";
      case Pt:
        return "Profiler";
      case Ke:
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
          return ((t = e.displayName || null), t !== null ? t : $(e.type) || "Memo");
        case Le:
          ((t = e._payload), (e = e._init));
          try {
            return $(e(t));
          } catch {}
      }
    return null;
  }
  function X(e) {
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
        return $(t);
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
  function te(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ue(e) {
    var t = te(e) ? "checked" : "value",
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
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Do(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = te(e) ? (e.checked ? "true" : "false") : e.value),
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
  function Fl(e, t) {
    var n = t.checked;
    return N({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Mo(e, t) {
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
  function Uo(e, t) {
    ((t = t.checked), t != null && be(e, "checked", t, !1));
  }
  function Dl(e, t) {
    Uo(e, t);
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
      ? Ml(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ml(e, t.type, Q(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Ao(e, t, n) {
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
    (t !== "number" || Er(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Fn = Array.isArray;
  function sn(e, t, n, r) {
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
  function Ul(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return N({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Vo(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(p(92));
        if (Fn(n)) {
          if (1 < n.length) throw Error(p(93));
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
  function $o(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Bo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Al(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Bo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Cr,
    Wo = (function (e) {
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
    Ka = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mn).forEach(function (e) {
    Ka.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]));
    });
  });
  function Qo(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Ko(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Qo(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ya = N(
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
  function Vl(e, t) {
    if (t) {
      if (Ya[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(p(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(p(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(p(62));
    }
  }
  function Hl(e, t) {
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
  var $l = null;
  function Bl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Wl = null,
    an = null,
    cn = null;
  function Yo(e) {
    if ((e = ir(e))) {
      if (typeof Wl != "function") throw Error(p(280));
      var t = e.stateNode;
      t && ((t = Yr(t)), Wl(e.stateNode, e.type, t));
    }
  }
  function Xo(e) {
    an ? (cn ? cn.push(e) : (cn = [e])) : (an = e);
  }
  function Go() {
    if (an) {
      var e = an,
        t = cn;
      if (((cn = an = null), Yo(e), t)) for (e = 0; e < t.length; e++) Yo(t[e]);
    }
  }
  function Zo(e, t) {
    return e(t);
  }
  function Jo() {}
  var Ql = !1;
  function qo(e, t, n) {
    if (Ql) return e(t, n);
    Ql = !0;
    try {
      return Zo(e, t, n);
    } finally {
      ((Ql = !1), (an !== null || cn !== null) && (Jo(), Go()));
    }
  }
  function Un(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Yr(n);
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
    if (n && typeof n != "function") throw Error(p(231, t, typeof n));
    return n;
  }
  var Kl = !1;
  if (ce)
    try {
      var An = {};
      (Object.defineProperty(An, "passive", {
        get: function () {
          Kl = !0;
        },
      }),
        window.addEventListener("test", An, An),
        window.removeEventListener("test", An, An));
    } catch {
      Kl = !1;
    }
  function Xa(e, t, n, r, l, i, o, u, s) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (w) {
      this.onError(w);
    }
  }
  var Vn = !1,
    _r = null,
    Nr = !1,
    Yl = null,
    Ga = {
      onError: function (e) {
        ((Vn = !0), (_r = e));
      },
    };
  function Za(e, t, n, r, l, i, o, u, s) {
    ((Vn = !1), (_r = null), Xa.apply(Ga, arguments));
  }
  function Ja(e, t, n, r, l, i, o, u, s) {
    if ((Za.apply(this, arguments), Vn)) {
      if (Vn) {
        var m = _r;
        ((Vn = !1), (_r = null));
      } else throw Error(p(198));
      Nr || ((Nr = !0), (Yl = m));
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
  function bo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function eu(e) {
    if (Xt(e) !== e) throw Error(p(188));
  }
  function qa(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Xt(e)), t === null)) throw Error(p(188));
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
          if (i === n) return (eu(l), e);
          if (i === r) return (eu(l), t);
          i = i.sibling;
        }
        throw Error(p(188));
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
          if (!o) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function tu(e) {
    return ((e = qa(e)), e !== null ? nu(e) : null);
  }
  function nu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = nu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ru = S.unstable_scheduleCallback,
    lu = S.unstable_cancelCallback,
    ba = S.unstable_shouldYield,
    ec = S.unstable_requestPaint,
    se = S.unstable_now,
    tc = S.unstable_getCurrentPriorityLevel,
    Xl = S.unstable_ImmediatePriority,
    iu = S.unstable_UserBlockingPriority,
    Pr = S.unstable_NormalPriority,
    nc = S.unstable_LowPriority,
    ou = S.unstable_IdlePriority,
    zr = null,
    dt = null;
  function rc(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(zr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : oc,
    lc = Math.log,
    ic = Math.LN2;
  function oc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((lc(e) / ic) | 0)) | 0);
  }
  var jr = 64,
    Lr = 4194304;
  function Hn(e) {
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
      u !== 0 ? (r = Hn(u)) : ((i &= o), i !== 0 && (r = Hn(i)));
    } else ((o = n & ~l), o !== 0 ? (r = Hn(o)) : i !== 0 && (r = Hn(i)));
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
  function uc(e, t) {
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
  function sc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - nt(i),
        u = 1 << o,
        s = l[o];
      (s === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = uc(u, t))
        : s <= t && (e.expiredLanes |= u),
        (i &= ~u));
    }
  }
  function Gl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function uu() {
    var e = jr;
    return ((jr <<= 1), (jr & 4194240) === 0 && (jr = 64), e);
  }
  function Zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function $n(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - nt(t)),
      (e[t] = n));
  }
  function ac(e, t) {
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
  function Jl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - nt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var K = 0;
  function su(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var au,
    ql,
    cu,
    fu,
    du,
    bl = !1,
    Rr = [],
    zt = null,
    jt = null,
    Lt = null,
    Bn = new Map(),
    Wn = new Map(),
    Tt = [],
    cc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function pu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        jt = null;
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
        Wn.delete(t.pointerId);
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
        t !== null && ((t = ir(t)), t !== null && ql(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function fc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Qn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((jt = Qn(jt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Lt = Qn(Lt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Bn.set(i, Qn(Bn.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((i = l.pointerId), Wn.set(i, Qn(Wn.get(i) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function mu(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = bo(n)), t !== null)) {
            ((e.blockedOn = t),
              du(e.priority, function () {
                cu(n);
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
  function Ir(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (($l = r), n.target.dispatchEvent(r), ($l = null));
      } else return ((t = ir(n)), t !== null && ql(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function hu(e, t, n) {
    Ir(e) && n.delete(t);
  }
  function dc() {
    ((bl = !1),
      zt !== null && Ir(zt) && (zt = null),
      jt !== null && Ir(jt) && (jt = null),
      Lt !== null && Ir(Lt) && (Lt = null),
      Bn.forEach(hu),
      Wn.forEach(hu));
  }
  function Kn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      bl || ((bl = !0), S.unstable_scheduleCallback(S.unstable_NormalPriority, dc)));
  }
  function Yn(e) {
    function t(l) {
      return Kn(l, e);
    }
    if (0 < Rr.length) {
      Kn(Rr[0], e);
      for (var n = 1; n < Rr.length; n++) {
        var r = Rr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && Kn(zt, e),
        jt !== null && Kn(jt, e),
        Lt !== null && Kn(Lt, e),
        Bn.forEach(t),
        Wn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null);)
      (mu(n), n.blockedOn === null && Tt.shift());
  }
  var fn = ke.ReactCurrentBatchConfig,
    Or = !0;
  function pc(e, t, n, r) {
    var l = K,
      i = fn.transition;
    fn.transition = null;
    try {
      ((K = 1), ei(e, t, n, r));
    } finally {
      ((K = l), (fn.transition = i));
    }
  }
  function mc(e, t, n, r) {
    var l = K,
      i = fn.transition;
    fn.transition = null;
    try {
      ((K = 4), ei(e, t, n, r));
    } finally {
      ((K = l), (fn.transition = i));
    }
  }
  function ei(e, t, n, r) {
    if (Or) {
      var l = ti(e, t, n, r);
      if (l === null) (gi(e, t, r, Fr, n), pu(e, r));
      else if (fc(l, e, t, n, r)) r.stopPropagation();
      else if ((pu(e, r), t & 4 && -1 < cc.indexOf(e))) {
        for (; l !== null;) {
          var i = ir(l);
          if (
            (i !== null && au(i), (i = ti(e, t, n, r)), i === null && gi(e, t, r, Fr, n), i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else gi(e, t, r, null, n);
    }
  }
  var Fr = null;
  function ti(e, t, n, r) {
    if (((Fr = null), (e = Bl(r)), (e = Gt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = bo(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Fr = e), null);
  }
  function vu(e) {
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
        switch (tc()) {
          case Xl:
            return 1;
          case iu:
            return 4;
          case Pr:
          case nc:
            return 16;
          case ou:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rt = null,
    ni = null,
    Dr = null;
  function yu() {
    if (Dr) return Dr;
    var e,
      t = ni,
      n = t.length,
      r,
      l = "value" in Rt ? Rt.value : Rt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Mr(e) {
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
  function gu() {
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
          ? Ur
          : gu),
        (this.isPropagationStopped = gu),
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
    ri = Ae(dn),
    Xn = N({}, dn, { view: 0, detail: 0 }),
    hc = Ae(Xn),
    li,
    ii,
    Gn,
    Ar = N({}, Xn, {
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
      getModifierState: ui,
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
          : (e !== Gn &&
              (Gn && e.type === "mousemove"
                ? ((li = e.screenX - Gn.screenX), (ii = e.screenY - Gn.screenY))
                : (ii = li = 0),
              (Gn = e)),
            li);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ii;
      },
    }),
    wu = Ae(Ar),
    vc = N({}, Ar, { dataTransfer: 0 }),
    yc = Ae(vc),
    gc = N({}, Xn, { relatedTarget: 0 }),
    oi = Ae(gc),
    wc = N({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xc = Ae(wc),
    kc = N({}, dn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Sc = Ae(kc),
    Ec = N({}, dn, { data: 0 }),
    xu = Ae(Ec),
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
    _c = {
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
    Nc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Nc[e]) ? !!t[e] : !1;
  }
  function ui() {
    return Pc;
  }
  var zc = N({}, Xn, {
      key: function (e) {
        if (e.key) {
          var t = Cc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Mr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? _c[e.keyCode] || "Unidentified"
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
      getModifierState: ui,
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
    jc = Ae(zc),
    Lc = N({}, Ar, {
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
    ku = Ae(Lc),
    Tc = N({}, Xn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ui,
    }),
    Rc = Ae(Tc),
    Ic = N({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Oc = Ae(Ic),
    Fc = N({}, Ar, {
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
    Dc = Ae(Fc),
    Mc = [9, 13, 27, 32],
    si = ce && "CompositionEvent" in window,
    Zn = null;
  ce && "documentMode" in document && (Zn = document.documentMode);
  var Uc = ce && "TextEvent" in window && !Zn,
    Su = ce && (!si || (Zn && 8 < Zn && 11 >= Zn)),
    Eu = " ",
    Cu = !1;
  function _u(e, t) {
    switch (e) {
      case "keyup":
        return Mc.indexOf(t.keyCode) !== -1;
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
  function Nu(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var pn = !1;
  function Ac(e, t) {
    switch (e) {
      case "compositionend":
        return Nu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Cu = !0), Eu);
      case "textInput":
        return ((e = t.data), e === Eu && Cu ? null : e);
      default:
        return null;
    }
  }
  function Vc(e, t) {
    if (pn)
      return e === "compositionend" || (!si && _u(e, t))
        ? ((e = yu()), (Dr = ni = Rt = null), (pn = !1), e)
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
        return Su && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Hc = {
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
  function Pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Hc[e.type] : t === "textarea";
  }
  function zu(e, t, n, r) {
    (Xo(r),
      (t = Wr(t, "onChange")),
      0 < t.length &&
        ((n = new ri("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Jn = null,
    qn = null;
  function $c(e) {
    Ku(e, 0);
  }
  function Vr(e) {
    var t = gn(e);
    if (Do(t)) return e;
  }
  function Bc(e, t) {
    if (e === "change") return t;
  }
  var ju = !1;
  if (ce) {
    var ai;
    if (ce) {
      var ci = "oninput" in document;
      if (!ci) {
        var Lu = document.createElement("div");
        (Lu.setAttribute("oninput", "return;"), (ci = typeof Lu.oninput == "function"));
      }
      ai = ci;
    } else ai = !1;
    ju = ai && (!document.documentMode || 9 < document.documentMode);
  }
  function Tu() {
    Jn && (Jn.detachEvent("onpropertychange", Ru), (qn = Jn = null));
  }
  function Ru(e) {
    if (e.propertyName === "value" && Vr(qn)) {
      var t = [];
      (zu(t, qn, e, Bl(e)), qo($c, t));
    }
  }
  function Wc(e, t, n) {
    e === "focusin"
      ? (Tu(), (Jn = t), (qn = n), Jn.attachEvent("onpropertychange", Ru))
      : e === "focusout" && Tu();
  }
  function Qc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Vr(qn);
  }
  function Kc(e, t) {
    if (e === "click") return Vr(t);
  }
  function Yc(e, t) {
    if (e === "input" || e === "change") return Vr(t);
  }
  function Xc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == "function" ? Object.is : Xc;
  function bn(e, t) {
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
  function Iu(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Ou(e, t) {
    var n = Iu(e);
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
      n = Iu(n);
    }
  }
  function Fu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Fu(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Du() {
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
  function fi(e) {
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
  function Gc(e) {
    var t = Du(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Fu(n.ownerDocument.documentElement, n)) {
      if (r !== null && fi(n)) {
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
            (l = Ou(n, i)));
          var o = Ou(n, r);
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
  var Zc = ce && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    di = null,
    er = null,
    pi = !1;
  function Mu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    pi ||
      mn == null ||
      mn !== Er(r) ||
      ((r = mn),
      "selectionStart" in r && fi(r)
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
        (r = Wr(di, "onSelect")),
        0 < r.length &&
          ((t = new ri("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))));
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
  var hn = {
      animationend: Hr("Animation", "AnimationEnd"),
      animationiteration: Hr("Animation", "AnimationIteration"),
      animationstart: Hr("Animation", "AnimationStart"),
      transitionend: Hr("Transition", "TransitionEnd"),
    },
    mi = {},
    Uu = {};
  ce &&
    ((Uu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hn.animationend.animation,
      delete hn.animationiteration.animation,
      delete hn.animationstart.animation),
    "TransitionEvent" in window || delete hn.transitionend.transition);
  function $r(e) {
    if (mi[e]) return mi[e];
    if (!hn[e]) return e;
    var t = hn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Uu) return (mi[e] = t[n]);
    return e;
  }
  var Au = $r("animationend"),
    Vu = $r("animationiteration"),
    Hu = $r("animationstart"),
    $u = $r("transitionend"),
    Bu = new Map(),
    Wu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function It(e, t) {
    (Bu.set(e, t), R(t, [e]));
  }
  for (var hi = 0; hi < Wu.length; hi++) {
    var vi = Wu[hi],
      Jc = vi.toLowerCase(),
      qc = vi[0].toUpperCase() + vi.slice(1);
    It(Jc, "on" + qc);
  }
  (It(Au, "onAnimationEnd"),
    It(Vu, "onAnimationIteration"),
    It(Hu, "onAnimationStart"),
    It("dblclick", "onDoubleClick"),
    It("focusin", "onFocus"),
    It("focusout", "onBlur"),
    It($u, "onTransitionEnd"),
    q("onMouseEnter", ["mouseout", "mouseover"]),
    q("onMouseLeave", ["mouseout", "mouseover"]),
    q("onPointerEnter", ["pointerout", "pointerover"]),
    q("onPointerLeave", ["pointerout", "pointerover"]),
    R("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    R(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    R("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    R("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    R(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    R(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var tr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    bc = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
  function Qu(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Ja(r, t, void 0, e), (e.currentTarget = null));
  }
  function Ku(e, t) {
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
              m = u.currentTarget;
            if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
            (Qu(l, u, m), (i = s));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (s = u.instance),
              (m = u.currentTarget),
              (u = u.listener),
              s !== i && l.isPropagationStopped())
            )
              break e;
            (Qu(l, u, m), (i = s));
          }
      }
    }
    if (Nr) throw ((e = Yl), (Nr = !1), (Yl = null), e);
  }
  function Z(e, t) {
    var n = t[Ci];
    n === void 0 && (n = t[Ci] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Yu(t, e, 2, !1), n.add(r));
  }
  function yi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Yu(n, e, r, t));
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function nr(e) {
    if (!e[Br]) {
      ((e[Br] = !0),
        D.forEach(function (n) {
          n !== "selectionchange" && (bc.has(n) || yi(n, !1, e), yi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || ((t[Br] = !0), yi("selectionchange", !1, t));
    }
  }
  function Yu(e, t, n, r) {
    switch (vu(t)) {
      case 1:
        var l = pc;
        break;
      case 4:
        l = mc;
        break;
      default:
        l = ei;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Kl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function gi(e, t, n, r, l) {
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
    qo(function () {
      var m = i,
        w = Bl(n),
        x = [];
      e: {
        var y = Bu.get(e);
        if (y !== void 0) {
          var C = ri,
            P = e;
          switch (e) {
            case "keypress":
              if (Mr(n) === 0) break e;
            case "keydown":
            case "keyup":
              C = jc;
              break;
            case "focusin":
              ((P = "focus"), (C = oi));
              break;
            case "focusout":
              ((P = "blur"), (C = oi));
              break;
            case "beforeblur":
            case "afterblur":
              C = oi;
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
              C = wu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = yc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Rc;
              break;
            case Au:
            case Vu:
            case Hu:
              C = xc;
              break;
            case $u:
              C = Oc;
              break;
            case "scroll":
              C = hc;
              break;
            case "wheel":
              C = Dc;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = Sc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = ku;
          }
          var z = (t & 4) !== 0,
            ae = !z && e === "scroll",
            f = z ? (y !== null ? y + "Capture" : null) : y;
          z = [];
          for (var a = m, d; a !== null;) {
            d = a;
            var k = d.stateNode;
            if (
              (d.tag === 5 &&
                k !== null &&
                ((d = k), f !== null && ((k = Un(a, f)), k != null && z.push(rr(a, k, d)))),
              ae)
            )
              break;
            a = a.return;
          }
          0 < z.length && ((y = new C(y, P, null, n, w)), x.push({ event: y, listeners: z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === "mouseover" || e === "pointerover"),
            (C = e === "mouseout" || e === "pointerout"),
            y && n !== $l && (P = n.relatedTarget || n.fromElement) && (Gt(P) || P[wt]))
          )
            break e;
          if (
            (C || y) &&
            ((y =
              w.window === w
                ? w
                : (y = w.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            C
              ? ((P = n.relatedTarget || n.toElement),
                (C = m),
                (P = P ? Gt(P) : null),
                P !== null &&
                  ((ae = Xt(P)), P !== ae || (P.tag !== 5 && P.tag !== 6)) &&
                  (P = null))
              : ((C = null), (P = m)),
            C !== P)
          ) {
            if (
              ((z = wu),
              (k = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((z = ku), (k = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (ae = C == null ? y : gn(C)),
              (d = P == null ? y : gn(P)),
              (y = new z(k, a + "leave", C, n, w)),
              (y.target = ae),
              (y.relatedTarget = d),
              (k = null),
              Gt(w) === m &&
                ((z = new z(f, a + "enter", P, n, w)),
                (z.target = d),
                (z.relatedTarget = ae),
                (k = z)),
              (ae = k),
              C && P)
            )
              t: {
                for (z = C, f = P, a = 0, d = z; d; d = vn(d)) a++;
                for (d = 0, k = f; k; k = vn(k)) d++;
                for (; 0 < a - d;) ((z = vn(z)), a--);
                for (; 0 < d - a;) ((f = vn(f)), d--);
                for (; a--;) {
                  if (z === f || (f !== null && z === f.alternate)) break t;
                  ((z = vn(z)), (f = vn(f)));
                }
                z = null;
              }
            else z = null;
            (C !== null && Xu(x, y, C, z, !1), P !== null && ae !== null && Xu(x, ae, P, z, !0));
          }
        }
        e: {
          if (
            ((y = m ? gn(m) : window),
            (C = y.nodeName && y.nodeName.toLowerCase()),
            C === "select" || (C === "input" && y.type === "file"))
          )
            var j = Bc;
          else if (Pu(y))
            if (ju) j = Yc;
            else {
              j = Qc;
              var L = Wc;
            }
          else
            (C = y.nodeName) &&
              C.toLowerCase() === "input" &&
              (y.type === "checkbox" || y.type === "radio") &&
              (j = Kc);
          if (j && (j = j(e, m))) {
            zu(x, j, n, w);
            break e;
          }
          (L && L(e, y, m),
            e === "focusout" &&
              (L = y._wrapperState) &&
              L.controlled &&
              y.type === "number" &&
              Ml(y, "number", y.value));
        }
        switch (((L = m ? gn(m) : window), e)) {
          case "focusin":
            (Pu(L) || L.contentEditable === "true") && ((mn = L), (di = m), (er = null));
            break;
          case "focusout":
            er = di = mn = null;
            break;
          case "mousedown":
            pi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((pi = !1), Mu(x, n, w));
            break;
          case "selectionchange":
            if (Zc) break;
          case "keydown":
          case "keyup":
            Mu(x, n, w);
        }
        var T;
        if (si)
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
          pn
            ? _u(e, n) && (F = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
        (F &&
          (Su &&
            n.locale !== "ko" &&
            (pn || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && pn && (T = yu())
              : ((Rt = w), (ni = "value" in Rt ? Rt.value : Rt.textContent), (pn = !0))),
          (L = Wr(m, F)),
          0 < L.length &&
            ((F = new xu(F, e, null, n, w)),
            x.push({ event: F, listeners: L }),
            T ? (F.data = T) : ((T = Nu(n)), T !== null && (F.data = T)))),
          (T = Uc ? Ac(e, n) : Vc(e, n)) &&
            ((m = Wr(m, "onBeforeInput")),
            0 < m.length &&
              ((w = new xu("onBeforeInput", "beforeinput", null, n, w)),
              x.push({ event: w, listeners: m }),
              (w.data = T))));
      }
      Ku(x, t);
    });
  }
  function rr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wr(e, t) {
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
  function vn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Xu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
      var u = n,
        s = u.alternate,
        m = u.stateNode;
      if (s !== null && s === r) break;
      (u.tag === 5 &&
        m !== null &&
        ((u = m),
        l
          ? ((s = Un(n, i)), s != null && o.unshift(rr(n, s, u)))
          : l || ((s = Un(n, i)), s != null && o.push(rr(n, s, u)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var ef = /\r\n?/g,
    tf = /\u0000|\uFFFD/g;
  function Gu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ef,
        `
`,
      )
      .replace(tf, "");
  }
  function Qr(e, t, n) {
    if (((t = Gu(t)), Gu(e) !== t && n)) throw Error(p(425));
  }
  function Kr() {}
  var wi = null,
    xi = null;
  function ki(e, t) {
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
  var Si = typeof setTimeout == "function" ? setTimeout : void 0,
    nf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zu = typeof Promise == "function" ? Promise : void 0,
    rf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zu < "u"
          ? function (e) {
              return Zu.resolve(null).then(e).catch(lf);
            }
          : Si;
  function lf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ei(e, t) {
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
  function Ju(e) {
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
    pt = "__reactFiber$" + yn,
    lr = "__reactProps$" + yn,
    wt = "__reactContainer$" + yn,
    Ci = "__reactEvents$" + yn,
    of = "__reactListeners$" + yn,
    uf = "__reactHandles$" + yn;
  function Gt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[wt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Ju(e); e !== null;) {
            if ((n = e[pt])) return n;
            e = Ju(e);
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
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function Yr(e) {
    return e[lr] || null;
  }
  var _i = [],
    wn = -1;
  function Ft(e) {
    return { current: e };
  }
  function J(e) {
    0 > wn || ((e.current = _i[wn]), (_i[wn] = null), wn--);
  }
  function G(e, t) {
    (wn++, (_i[wn] = e.current), (e.current = t));
  }
  var Dt = {},
    Se = Ft(Dt),
    Te = Ft(!1),
    Zt = Dt;
  function xn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
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
  function Xr() {
    (J(Te), J(Se));
  }
  function qu(e, t, n) {
    if (Se.current !== Dt) throw Error(p(168));
    (G(Se, t), G(Te, n));
  }
  function bu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, X(e) || "Unknown", l));
    return N({}, n, r);
  }
  function Gr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
      (Zt = Se.current),
      G(Se, e),
      G(Te, Te.current),
      !0
    );
  }
  function es(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    (n
      ? ((e = bu(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        J(Te),
        J(Se),
        G(Se, e))
      : J(Te),
      G(Te, n));
  }
  var xt = null,
    Zr = !1,
    Ni = !1;
  function ts(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  function sf(e) {
    ((Zr = !0), ts(e));
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
        ((xt = null), (Zr = !1));
      } catch (l) {
        throw (xt !== null && (xt = xt.slice(e + 1)), ru(Xl, Mt), l);
      } finally {
        ((K = t), (Ni = !1));
      }
    }
    return null;
  }
  var kn = [],
    Sn = 0,
    Jr = null,
    qr = 0,
    Ye = [],
    Xe = 0,
    Jt = null,
    kt = 1,
    St = "";
  function qt(e, t) {
    ((kn[Sn++] = qr), (kn[Sn++] = Jr), (Jr = e), (qr = t));
  }
  function ns(e, t, n) {
    ((Ye[Xe++] = kt), (Ye[Xe++] = St), (Ye[Xe++] = Jt), (Jt = e));
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
  function Pi(e) {
    e.return !== null && (qt(e, 1), ns(e, 1, 0));
  }
  function zi(e) {
    for (; e === Jr;) ((Jr = kn[--Sn]), (kn[Sn] = null), (qr = kn[--Sn]), (kn[Sn] = null));
    for (; e === Jt;)
      ((Jt = Ye[--Xe]),
        (Ye[Xe] = null),
        (St = Ye[--Xe]),
        (Ye[Xe] = null),
        (kt = Ye[--Xe]),
        (Ye[Xe] = null));
  }
  var Ve = null,
    He = null,
    ne = !1,
    lt = null;
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
          t !== null ? ((e.stateNode = t), (Ve = e), (He = Ot(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ve = e), (He = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: kt, overflow: St } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = qe(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ve = e),
              (He = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ji(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Li(e) {
    if (ne) {
      var t = He;
      if (t) {
        var n = t;
        if (!ls(e, t)) {
          if (ji(e)) throw Error(p(418));
          t = Ot(n.nextSibling);
          var r = Ve;
          t && ls(e, t) ? rs(r, n) : ((e.flags = (e.flags & -4097) | 2), (ne = !1), (Ve = e));
        }
      } else {
        if (ji(e)) throw Error(p(418));
        ((e.flags = (e.flags & -4097) | 2), (ne = !1), (Ve = e));
      }
    }
  }
  function is(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ve = e;
  }
  function br(e) {
    if (e !== Ve) return !1;
    if (!ne) return (is(e), (ne = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !ki(e.type, e.memoizedProps))),
      t && (t = He))
    ) {
      if (ji(e)) throw (os(), Error(p(418)));
      for (; t;) (rs(e, t), (t = Ot(t.nextSibling)));
    }
    if ((is(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                He = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        He = null;
      }
    } else He = Ve ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function os() {
    for (var e = He; e;) e = Ot(e.nextSibling);
  }
  function En() {
    ((He = Ve = null), (ne = !1));
  }
  function Ti(e) {
    lt === null ? (lt = [e]) : lt.push(e);
  }
  var af = ke.ReactCurrentBatchConfig;
  function or(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(p(147, e));
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
      if (typeof e != "string") throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function el(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        p(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function us(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ss(e) {
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
        ? ((a = Eo(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, k) {
      var j = d.type;
      return j === je
        ? w(f, a, d.props.children, k, d.key)
        : a !== null &&
            (a.elementType === j ||
              (typeof j == "object" && j !== null && j.$$typeof === Le && us(j) === a.type))
          ? ((k = l(a, d.props)), (k.ref = or(f, a, d)), (k.return = f), k)
          : ((k = Cl(d.type, d.key, d.props, null, f.mode, k)),
            (k.ref = or(f, a, d)),
            (k.return = f),
            k);
    }
    function m(f, a, d, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = Co(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function w(f, a, d, k, j) {
      return a === null || a.tag !== 7
        ? ((a = un(d, f.mode, k, j)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function x(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = Eo("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case et:
            return (
              (d = Cl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = or(f, null, a)),
              (d.return = f),
              d
            );
          case Ne:
            return ((a = Co(a, f.mode, d)), (a.return = f), a);
          case Le:
            var k = a._init;
            return x(f, k(a._payload), d);
        }
        if (Fn(a) || O(a)) return ((a = un(a, f.mode, d, null)), (a.return = f), a);
        el(f, a);
      }
      return null;
    }
    function y(f, a, d, k) {
      var j = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return j !== null ? null : u(f, a, "" + d, k);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case et:
            return d.key === j ? s(f, a, d, k) : null;
          case Ne:
            return d.key === j ? m(f, a, d, k) : null;
          case Le:
            return ((j = d._init), y(f, a, j(d._payload), k));
        }
        if (Fn(d) || O(d)) return j !== null ? null : w(f, a, d, k, null);
        el(f, d);
      }
      return null;
    }
    function C(f, a, d, k, j) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((f = f.get(d) || null), u(a, f, "" + k, j));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case et:
            return ((f = f.get(k.key === null ? d : k.key) || null), s(a, f, k, j));
          case Ne:
            return ((f = f.get(k.key === null ? d : k.key) || null), m(a, f, k, j));
          case Le:
            var L = k._init;
            return C(f, a, d, L(k._payload), j);
        }
        if (Fn(k) || O(k)) return ((f = f.get(d) || null), w(a, f, k, j, null));
        el(a, k);
      }
      return null;
    }
    function P(f, a, d, k) {
      for (var j = null, L = null, T = a, F = (a = 0), ye = null; T !== null && F < d.length; F++) {
        T.index > F ? ((ye = T), (T = null)) : (ye = T.sibling);
        var B = y(f, T, d[F], k);
        if (B === null) {
          T === null && (T = ye);
          break;
        }
        (e && T && B.alternate === null && t(f, T),
          (a = i(B, a, F)),
          L === null ? (j = B) : (L.sibling = B),
          (L = B),
          (T = ye));
      }
      if (F === d.length) return (n(f, T), ne && qt(f, F), j);
      if (T === null) {
        for (; F < d.length; F++)
          ((T = x(f, d[F], k)),
            T !== null && ((a = i(T, a, F)), L === null ? (j = T) : (L.sibling = T), (L = T)));
        return (ne && qt(f, F), j);
      }
      for (T = r(f, T); F < d.length; F++)
        ((ye = C(T, f, F, d[F], k)),
          ye !== null &&
            (e && ye.alternate !== null && T.delete(ye.key === null ? F : ye.key),
            (a = i(ye, a, F)),
            L === null ? (j = ye) : (L.sibling = ye),
            (L = ye)));
      return (
        e &&
          T.forEach(function (Kt) {
            return t(f, Kt);
          }),
        ne && qt(f, F),
        j
      );
    }
    function z(f, a, d, k) {
      var j = O(d);
      if (typeof j != "function") throw Error(p(150));
      if (((d = j.call(d)), d == null)) throw Error(p(151));
      for (
        var L = (j = null), T = a, F = (a = 0), ye = null, B = d.next();
        T !== null && !B.done;
        F++, B = d.next()
      ) {
        T.index > F ? ((ye = T), (T = null)) : (ye = T.sibling);
        var Kt = y(f, T, B.value, k);
        if (Kt === null) {
          T === null && (T = ye);
          break;
        }
        (e && T && Kt.alternate === null && t(f, T),
          (a = i(Kt, a, F)),
          L === null ? (j = Kt) : (L.sibling = Kt),
          (L = Kt),
          (T = ye));
      }
      if (B.done) return (n(f, T), ne && qt(f, F), j);
      if (T === null) {
        for (; !B.done; F++, B = d.next())
          ((B = x(f, B.value, k)),
            B !== null && ((a = i(B, a, F)), L === null ? (j = B) : (L.sibling = B), (L = B)));
        return (ne && qt(f, F), j);
      }
      for (T = r(f, T); !B.done; F++, B = d.next())
        ((B = C(T, f, F, B.value, k)),
          B !== null &&
            (e && B.alternate !== null && T.delete(B.key === null ? F : B.key),
            (a = i(B, a, F)),
            L === null ? (j = B) : (L.sibling = B),
            (L = B)));
      return (
        e &&
          T.forEach(function ($f) {
            return t(f, $f);
          }),
        ne && qt(f, F),
        j
      );
    }
    function ae(f, a, d, k) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === je &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case et:
            e: {
              for (var j = d.key, L = a; L !== null;) {
                if (L.key === j) {
                  if (((j = d.type), j === je)) {
                    if (L.tag === 7) {
                      (n(f, L.sibling), (a = l(L, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    L.elementType === j ||
                    (typeof j == "object" && j !== null && j.$$typeof === Le && us(j) === L.type)
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
              d.type === je
                ? ((a = un(d.props.children, f.mode, k, d.key)), (a.return = f), (f = a))
                : ((k = Cl(d.type, d.key, d.props, null, f.mode, k)),
                  (k.ref = or(f, a, d)),
                  (k.return = f),
                  (f = k));
            }
            return o(f);
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
              ((a = Co(d, f.mode, k)), (a.return = f), (f = a));
            }
            return o(f);
          case Le:
            return ((L = d._init), ae(f, a, L(d._payload), k));
        }
        if (Fn(d)) return P(f, a, d, k);
        if (O(d)) return z(f, a, d, k);
        el(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = Eo(d, f.mode, k)), (a.return = f), (f = a)),
          o(f))
        : n(f, a);
    }
    return ae;
  }
  var Cn = ss(!0),
    as = ss(!1),
    tl = Ft(null),
    nl = null,
    _n = null,
    Ri = null;
  function Ii() {
    Ri = _n = nl = null;
  }
  function Oi(e) {
    var t = tl.current;
    (J(tl), (e._currentValue = t));
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
  function Nn(e, t) {
    ((nl = e),
      (Ri = _n = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ie = !0), (e.firstContext = null)));
  }
  function Ge(e) {
    var t = e._currentValue;
    if (Ri !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
        if (nl === null) throw Error(p(308));
        ((_n = e), (nl.dependencies = { lanes: 0, firstContext: e }));
      } else _n = _n.next = e;
    return t;
  }
  var bt = null;
  function Di(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function cs(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Di(t)) : ((n.next = l.next), (l.next = n)),
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
  function Mi(e) {
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
  function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (V & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Et(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Di(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Et(e, n)
    );
  }
  function rl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Jl(e, n));
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
        m = s.next;
      ((s.next = null), o === null ? (i = m) : (o.next = m), (o = s));
      var w = e.alternate;
      w !== null &&
        ((w = w.updateQueue),
        (u = w.lastBaseUpdate),
        u !== o && (u === null ? (w.firstBaseUpdate = m) : (u.next = m), (w.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var x = l.baseState;
      ((o = 0), (w = m = s = null), (u = i));
      do {
        var y = u.lane,
          C = u.eventTime;
        if ((r & y) === y) {
          w !== null &&
            (w = w.next =
              {
                eventTime: C,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var P = e,
              z = u;
            switch (((y = t), (C = n), z.tag)) {
              case 1:
                if (((P = z.payload), typeof P == "function")) {
                  x = P.call(C, x, y);
                  break e;
                }
                x = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = z.payload), (y = typeof P == "function" ? P.call(C, x, y) : P), y == null)
                )
                  break e;
                x = N({}, x, y);
                break e;
              case 2:
                Ut = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (y = l.effects), y === null ? (l.effects = [u]) : y.push(u));
        } else
          ((C = {
            eventTime: C,
            lane: y,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            w === null ? ((m = w = C), (s = x)) : (w = w.next = C),
            (o |= y));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((y = u),
            (u = y.next),
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
        do ((o |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((nn |= o), (e.lanes = o), (e.memoizedState = x));
    }
  }
  function ps(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function")) throw Error(p(191, l));
          l.call(r);
        }
      }
  }
  var ur = {},
    mt = Ft(ur),
    sr = Ft(ur),
    ar = Ft(ur);
  function en(e) {
    if (e === ur) throw Error(p(174));
    return e;
  }
  function Ui(e, t) {
    switch ((G(ar, t), G(sr, e), G(mt, ur), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Al(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Al(t, e)));
    }
    (J(mt), G(mt, t));
  }
  function Pn() {
    (J(mt), J(sr), J(ar));
  }
  function ms(e) {
    en(ar.current);
    var t = en(mt.current),
      n = Al(t, e.type);
    t !== n && (G(sr, e), G(mt, n));
  }
  function Ai(e) {
    sr.current === e && (J(mt), J(sr));
  }
  var le = Ft(0);
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
  var Vi = [];
  function Hi() {
    for (var e = 0; e < Vi.length; e++) Vi[e]._workInProgressVersionPrimary = null;
    Vi.length = 0;
  }
  var ol = ke.ReactCurrentDispatcher,
    $i = ke.ReactCurrentBatchConfig,
    tn = 0,
    ie = null,
    de = null,
    he = null,
    ul = !1,
    cr = !1,
    fr = 0,
    cf = 0;
  function Ee() {
    throw Error(p(321));
  }
  function Bi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function Wi(e, t, n, r, l, i) {
    if (
      ((tn = i),
      (ie = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ol.current = e === null || e.memoizedState === null ? mf : hf),
      (e = n(r, l)),
      cr)
    ) {
      i = 0;
      do {
        if (((cr = !1), (fr = 0), 25 <= i)) throw Error(p(301));
        ((i += 1), (he = de = null), (t.updateQueue = null), (ol.current = vf), (e = n(r, l)));
      } while (cr);
    }
    if (
      ((ol.current = cl),
      (t = de !== null && de.next !== null),
      (tn = 0),
      (he = de = ie = null),
      (ul = !1),
      t)
    )
      throw Error(p(300));
    return e;
  }
  function Qi() {
    var e = fr !== 0;
    return ((fr = 0), e);
  }
  function ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (he === null ? (ie.memoizedState = he = e) : (he = he.next = e), he);
  }
  function Ze() {
    if (de === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var t = he === null ? ie.memoizedState : he.next;
    if (t !== null) ((he = t), (de = e));
    else {
      if (e === null) throw Error(p(310));
      ((de = e),
        (e = {
          memoizedState: de.memoizedState,
          baseState: de.baseState,
          baseQueue: de.baseQueue,
          queue: de.queue,
          next: null,
        }),
        he === null ? (ie.memoizedState = he = e) : (he = he.next = e));
    }
    return he;
  }
  function dr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ki(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = de,
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
        m = i;
      do {
        var w = m.lane;
        if ((tn & w) === w)
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
          (s === null ? ((u = s = x), (o = r)) : (s = s.next = x), (ie.lanes |= w), (nn |= w));
        }
        m = m.next;
      } while (m !== null && m !== i);
      (s === null ? (o = r) : (s.next = u),
        rt(r, t.memoizedState) || (Ie = !0),
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
  function Yi(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do ((i = e(i, o.action)), (o = o.next));
      while (o !== l);
      (rt(i, t.memoizedState) || (Ie = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function hs() {}
  function vs(e, t) {
    var n = ie,
      r = Ze(),
      l = t(),
      i = !rt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Ie = !0)),
      (r = r.queue),
      Xi(ws.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), pr(9, gs.bind(null, n, r, l, t), void 0, null), ve === null))
        throw Error(p(349));
      (tn & 30) !== 0 || ys(n, t, l);
    }
    return l;
  }
  function ys(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ie.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ie.updateQueue = t), (t.stores = [e]))
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
      return !rt(e, n);
    } catch {
      return !0;
    }
  }
  function ks(e) {
    var t = Et(e, 1);
    t !== null && st(t, e, 1, -1);
  }
  function Ss(e) {
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
      (e = e.dispatch = pf.bind(null, ie, e)),
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
  function Es() {
    return Ze().memoizedState;
  }
  function sl(e, t, n, r) {
    var l = ht();
    ((ie.flags |= e), (l.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function al(e, t, n, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (de !== null) {
      var o = de.memoizedState;
      if (((i = o.destroy), r !== null && Bi(r, o.deps))) {
        l.memoizedState = pr(t, n, i, r);
        return;
      }
    }
    ((ie.flags |= e), (l.memoizedState = pr(1 | t, n, i, r)));
  }
  function Cs(e, t) {
    return sl(8390656, 8, e, t);
  }
  function Xi(e, t) {
    return al(2048, 8, e, t);
  }
  function _s(e, t) {
    return al(4, 2, e, t);
  }
  function Ns(e, t) {
    return al(4, 4, e, t);
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
  function zs(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), al(4, 4, Ps.bind(null, t, e), n));
  }
  function Gi() {}
  function js(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ls(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ts(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n))
      : (rt(n, t) || ((n = uu()), (ie.lanes |= n), (nn |= n), (e.baseState = !0)), t);
  }
  function ff(e, t) {
    var n = K;
    ((K = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = $i.transition;
    $i.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((K = n), ($i.transition = r));
    }
  }
  function Rs() {
    return Ze().memoizedState;
  }
  function df(e, t, n) {
    var r = Bt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Is(e)))
      Os(t, n);
    else if (((n = cs(e, t, n, r)), n !== null)) {
      var l = ze();
      (st(n, e, r, l), Fs(n, t, r));
    }
  }
  function pf(e, t, n) {
    var r = Bt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Is(e)) Os(t, l);
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
            (s === null ? ((l.next = l), Di(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = cs(e, t, l, r)), n !== null && ((l = ze()), st(n, e, r, l), Fs(n, t, r)));
    }
  }
  function Is(e) {
    var t = e.alternate;
    return e === ie || (t !== null && t === ie);
  }
  function Os(e, t) {
    cr = ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Fs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Jl(e, n));
    }
  }
  var cl = {
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
    mf = {
      readContext: Ge,
      useCallback: function (e, t) {
        return ((ht().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ge,
      useEffect: Cs,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), sl(4194308, 4, Ps.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return sl(4, 2, e, t);
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
          (e = e.dispatch = df.bind(null, ie, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Ss,
      useDebugValue: Gi,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = Ss(!1),
          t = e[0];
        return ((e = ff.bind(null, e[1])), (ht().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ie,
          l = ht();
        if (ne) {
          if (n === void 0) throw Error(p(407));
          n = n();
        } else {
          if (((n = t()), ve === null)) throw Error(p(349));
          (tn & 30) !== 0 || ys(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Cs(ws.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          pr(9, gs.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = ht(),
          t = ve.identifierPrefix;
        if (ne) {
          var n = St,
            r = kt;
          ((n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = fr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = cf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    hf = {
      readContext: Ge,
      useCallback: js,
      useContext: Ge,
      useEffect: Xi,
      useImperativeHandle: zs,
      useInsertionEffect: _s,
      useLayoutEffect: Ns,
      useMemo: Ls,
      useReducer: Ki,
      useRef: Es,
      useState: function () {
        return Ki(dr);
      },
      useDebugValue: Gi,
      useDeferredValue: function (e) {
        var t = Ze();
        return Ts(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Ki(dr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: hs,
      useSyncExternalStore: vs,
      useId: Rs,
      unstable_isNewReconciler: !1,
    },
    vf = {
      readContext: Ge,
      useCallback: js,
      useContext: Ge,
      useEffect: Xi,
      useImperativeHandle: zs,
      useInsertionEffect: _s,
      useLayoutEffect: Ns,
      useMemo: Ls,
      useReducer: Yi,
      useRef: Es,
      useState: function () {
        return Yi(dr);
      },
      useDebugValue: Gi,
      useDeferredValue: function (e) {
        var t = Ze();
        return de === null ? (t.memoizedState = e) : Ts(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Yi(dr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: hs,
      useSyncExternalStore: vs,
      useId: Rs,
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
  function Zi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : N({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var fl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Bt(e),
        i = Ct(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (st(t, e, l, r), rl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Bt(e),
        i = Ct(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (st(t, e, l, r), rl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ze(),
        r = Bt(e),
        l = Ct(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (st(t, e, r, n), rl(t, e, r)));
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
  function Ms(e, t, n) {
    var r = !1,
      l = Dt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ge(i))
        : ((l = Re(t) ? Zt : Se.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? xn(e, l) : Dt)),
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
  function Us(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && fl.enqueueReplaceState(t, t.state, null));
  }
  function Ji(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Mi(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Ge(i))
      : ((i = Re(t) ? Zt : Se.current), (l.context = xn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Zi(e, t, i, n), (l.state = e.memoizedState)),
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
      do ((n += H(r)), (r = r.return));
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
  function qi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function bi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var yf = typeof WeakMap == "function" ? WeakMap : Map;
  function As(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (gl || ((gl = !0), (ho = r)), bi(e, t));
      }),
      n
    );
  }
  function Vs(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          bi(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (bi(e, t),
            typeof r != "function" && (Ht === null ? (Ht = new Set([this])) : Ht.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
        }),
      n
    );
  }
  function Hs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new yf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Tf.bind(null, e, t, n)), t.then(e, e));
  }
  function $s(e) {
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
  function Bs(e, t, n, r, l) {
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
  var gf = ke.ReactCurrentOwner,
    Ie = !1;
  function Pe(e, t, n, r) {
    t.child = e === null ? as(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function Ws(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Nn(t, l),
      (r = Wi(e, t, n, r, i, l)),
      (n = Qi()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (ne && n && Pi(t), (t.flags |= 1), Pe(e, t, r, l), t.child)
    );
  }
  function Qs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !So(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Ks(e, t, i, r, l))
        : ((e = Cl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : bn), n(o, r) && e.ref === t.ref))
        return _t(e, t, l);
    }
    return ((t.flags |= 1), (e = Qt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ks(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (bn(i, r) && e.ref === t.ref)
        if (((Ie = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ie = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return eo(e, t, n, r, l);
  }
  function Ys(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          G(Ln, $e),
          ($e |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            G(Ln, $e),
            ($e |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = i !== null ? i.baseLanes : n),
          G(Ln, $e),
          ($e |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        G(Ln, $e),
        ($e |= r));
    return (Pe(e, t, l, n), t.child);
  }
  function Xs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function eo(e, t, n, r, l) {
    var i = Re(n) ? Zt : Se.current;
    return (
      (i = xn(t, i)),
      Nn(t, l),
      (n = Wi(e, t, n, r, i, l)),
      (r = Qi()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (ne && r && Pi(t), (t.flags |= 1), Pe(e, t, n, l), t.child)
    );
  }
  function Gs(e, t, n, r, l) {
    if (Re(n)) {
      var i = !0;
      Gr(t);
    } else i = !1;
    if ((Nn(t, l), t.stateNode === null)) (pl(e, t), Ms(t, n, r), Ji(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var s = o.context,
        m = n.contextType;
      typeof m == "object" && m !== null
        ? (m = Ge(m))
        : ((m = Re(n) ? Zt : Se.current), (m = xn(t, m)));
      var w = n.getDerivedStateFromProps,
        x = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      (x ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || s !== m) && Us(t, o, r, m)),
        (Ut = !1));
      var y = t.memoizedState;
      ((o.state = y),
        ll(t, r, o, l),
        (s = t.memoizedState),
        u !== r || y !== s || Te.current || Ut
          ? (typeof w == "function" && (Zi(t, n, w, r), (s = t.memoizedState)),
            (u = Ut || Ds(t, n, u, r, y, s, m))
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
            (o.context = m),
            (r = u))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
    } else {
      ((o = t.stateNode),
        fs(e, t),
        (u = t.memoizedProps),
        (m = t.type === t.elementType ? u : it(t.type, u)),
        (o.props = m),
        (x = t.pendingProps),
        (y = o.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = Re(n) ? Zt : Se.current), (s = xn(t, s))));
      var C = n.getDerivedStateFromProps;
      ((w = typeof C == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== x || y !== s) && Us(t, o, r, s)),
        (Ut = !1),
        (y = t.memoizedState),
        (o.state = y),
        ll(t, r, o, l));
      var P = t.memoizedState;
      u !== x || y !== P || Te.current || Ut
        ? (typeof C == "function" && (Zi(t, n, C, r), (P = t.memoizedState)),
          (m = Ut || Ds(t, n, m, r, y, P, s) || !1)
            ? (w ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, P, s),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, P, s)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = P)),
          (o.props = r),
          (o.state = P),
          (o.context = s),
          (r = m))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return to(e, t, n, r, i, l);
  }
  function to(e, t, n, r, l, i) {
    Xs(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && es(t, n, !1), _t(e, t, i));
    ((r = t.stateNode), (gf.current = t));
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Cn(t, e.child, null, i)), (t.child = Cn(t, null, u, i)))
        : Pe(e, t, u, i),
      (t.memoizedState = r.state),
      l && es(t, n, !0),
      t.child
    );
  }
  function Zs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? qu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && qu(e, t.context, !1),
      Ui(e, t.containerInfo));
  }
  function Js(e, t, n, r, l) {
    return (En(), Ti(l), (t.flags |= 256), Pe(e, t, n, r), t.child);
  }
  var no = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ro(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function qs(e, t, n) {
    var r = t.pendingProps,
      l = le.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      u;
    if (
      ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      G(le, l & 1),
      e === null)
    )
      return (
        Li(t),
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
                  : (i = _l(o, r, 0, null)),
                (e = un(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = ro(n)),
                (t.memoizedState = no),
                e)
              : lo(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return wf(e, t, o, r, u, l, n);
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
            ? ro(n)
            : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = no),
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
  function lo(e, t) {
    return (
      (t = _l({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function dl(e, t, n, r) {
    return (
      r !== null && Ti(r),
      Cn(t, e.child, null, n),
      (e = lo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function wf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = qi(Error(p(422)))), dl(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = _l({ mode: "visible", children: r.children }, l, 0, null)),
            (i = un(i, l, o, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Cn(t, e.child, null, o),
            (t.child.memoizedState = ro(o)),
            (t.memoizedState = no),
            i);
    if ((t.mode & 1) === 0) return dl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (i = Error(p(419))), (r = qi(i, r, void 0)), dl(e, t, o, r));
    }
    if (((u = (o & e.childLanes) !== 0), Ie || u)) {
      if (((r = ve), r !== null)) {
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
      return (ko(), (r = qi(Error(p(421)))), dl(e, t, o, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Rf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = i.treeContext),
        (He = Ot(l.nextSibling)),
        (Ve = t),
        (ne = !0),
        (lt = null),
        e !== null &&
          ((Ye[Xe++] = kt),
          (Ye[Xe++] = St),
          (Ye[Xe++] = Jt),
          (kt = e.id),
          (St = e.overflow),
          (Jt = t)),
        (t = lo(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function bs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Fi(e.return, t, n));
  }
  function io(e, t, n, r, l) {
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
    if ((Pe(e, t, r.children, n), (r = le.current), (r & 2) !== 0))
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
    if ((G(le, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && il(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            io(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && il(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          io(t, !0, n, null, i);
          break;
        case "together":
          io(t, !1, null, null, void 0);
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
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        ((e = e.sibling), (n = n.sibling = Qt(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function xf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Zs(t), En());
        break;
      case 5:
        ms(t);
        break;
      case 1:
        Re(t.type) && Gr(t);
        break;
      case 4:
        Ui(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (G(tl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (G(le, le.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? qs(e, t, n)
              : (G(le, le.current & 1), (e = _t(e, t, n)), e !== null ? e.sibling : null);
        G(le, le.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ea(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          G(le, le.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Ys(e, t, n));
    }
    return _t(e, t, n);
  }
  var ta, oo, na, ra;
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
    (oo = function () {}),
    (na = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(mt.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = Fl(e, l)), (r = Fl(e, r)), (i = []));
            break;
          case "select":
            ((l = N({}, l, { value: void 0 })), (r = N({}, r, { value: void 0 })), (i = []));
            break;
          case "textarea":
            ((l = Ul(e, l)), (r = Ul(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr);
        }
        Vl(n, r);
        var o;
        n = null;
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === "style") {
              var u = l[m];
              for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              m !== "dangerouslySetInnerHTML" &&
                m !== "children" &&
                m !== "suppressContentEditableWarning" &&
                m !== "suppressHydrationWarning" &&
                m !== "autoFocus" &&
                (I.hasOwnProperty(m) ? i || (i = []) : (i = i || []).push(m, null));
        for (m in r) {
          var s = r[m];
          if (
            ((u = l != null ? l[m] : void 0),
            r.hasOwnProperty(m) && s !== u && (s != null || u != null))
          )
            if (m === "style")
              if (u) {
                for (o in u)
                  !u.hasOwnProperty(o) ||
                    (s && s.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
              } else (n || (i || (i = []), i.push(m, n)), (n = s));
            else
              m === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  s != null && u !== s && (i = i || []).push(m, s))
                : m === "children"
                  ? (typeof s != "string" && typeof s != "number") || (i = i || []).push(m, "" + s)
                  : m !== "suppressContentEditableWarning" &&
                    m !== "suppressHydrationWarning" &&
                    (I.hasOwnProperty(m)
                      ? (s != null && m === "onScroll" && Z("scroll", e), i || u === s || (i = []))
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
    if (!ne)
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
  function kf(e, t, n) {
    var r = t.pendingProps;
    switch ((zi(t), t.tag)) {
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
        return (Re(t.type) && Xr(), Ce(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Pn(),
          J(Te),
          J(Se),
          Hi(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (br(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), lt !== null && (go(lt), (lt = null)))),
          oo(e, t),
          Ce(t),
          null
        );
      case 5:
        Ai(t);
        var l = en(ar.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (na(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return (Ce(t), null);
          }
          if (((e = en(mt.current)), br(t))) {
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
                (Mo(r, i), Z("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }), Z("invalid", r));
                break;
              case "textarea":
                (Vo(r, i), Z("invalid", r));
            }
            (Vl(n, i), (l = null));
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
                  : I.hasOwnProperty(o) && u != null && o === "onScroll" && Z("scroll", r);
              }
            switch (n) {
              case "input":
                (Sr(r), Ao(r, i, !0));
                break;
              case "textarea":
                (Sr(r), $o(r));
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
              e === "http://www.w3.org/1999/xhtml" && (e = Bo(n)),
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
              ta(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = Hl(n, r)), n)) {
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
                  (Mo(e, r), (l = Fl(e, r)), Z("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = N({}, r, { value: void 0 })),
                    Z("invalid", e));
                  break;
                case "textarea":
                  (Vo(e, r), (l = Ul(e, r)), Z("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Vl(n, l), (u = l));
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var s = u[i];
                  i === "style"
                    ? Ko(e, s)
                    : i === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Wo(e, s))
                      : i === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Dn(e, s)
                          : typeof s == "number" && Dn(e, "" + s)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (I.hasOwnProperty(i)
                            ? s != null && i === "onScroll" && Z("scroll", e)
                            : s != null && be(e, i, s, o));
                }
              switch (n) {
                case "input":
                  (Sr(e), Ao(e, r, !1));
                  break;
                case "textarea":
                  (Sr(e), $o(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
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
        return (Ce(t), null);
      case 6:
        if (e && t.stateNode != null) ra(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
          if (((n = en(ar.current)), en(mt.current), br(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (i = r.nodeValue !== n) && ((e = Ve), e !== null))
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
              (r[pt] = t),
              (t.stateNode = r));
        }
        return (Ce(t), null);
      case 13:
        if (
          (J(le),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ne && He !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (os(), En(), (t.flags |= 98560), (i = !1));
          else if (((i = br(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(p(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(p(317));
              i[pt] = t;
            } else (En(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ce(t), (i = !1));
          } else (lt !== null && (go(lt), (lt = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (le.current & 1) !== 0 ? pe === 0 && (pe = 3) : ko())),
            t.updateQueue !== null && (t.flags |= 4),
            Ce(t),
            null);
      case 4:
        return (Pn(), oo(e, t), e === null && nr(t.stateNode.containerInfo), Ce(t), null);
      case 10:
        return (Oi(t.type._context), Ce(t), null);
      case 17:
        return (Re(t.type) && Xr(), Ce(t), null);
      case 19:
        if ((J(le), (i = t.memoizedState), i === null)) return (Ce(t), null);
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) mr(i, !1);
          else {
            if (pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((o = il(e)), o !== null)) {
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
                  return (G(le, (le.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              se() > Tn &&
              ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = il(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                mr(i, !0),
                i.tail === null && i.tailMode === "hidden" && !o.alternate && !ne)
              )
                return (Ce(t), null);
            } else
              2 * se() - i.renderingStartTime > Tn &&
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
            (i.renderingStartTime = se()),
            (t.sibling = null),
            (n = le.current),
            G(le, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ce(t), null);
      case 22:
      case 23:
        return (
          xo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? ($e & 1073741824) !== 0 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ce(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function Sf(e, t) {
    switch ((zi(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && Xr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pn(),
          J(Te),
          J(Se),
          Hi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Ai(t), null);
      case 13:
        if ((J(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(p(340));
          En();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (J(le), null);
      case 4:
        return (Pn(), null);
      case 10:
        return (Oi(t.type._context), null);
      case 22:
      case 23:
        return (xo(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ml = !1,
    _e = !1,
    Ef = typeof WeakSet == "function" ? WeakSet : Set,
    _ = null;
  function jn(e, t) {
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
  function uo(e, t, n) {
    try {
      n();
    } catch (r) {
      ue(e, t, r);
    }
  }
  var la = !1;
  function Cf(e, t) {
    if (((wi = Or), (e = Du()), fi(e))) {
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
              m = 0,
              w = 0,
              x = e,
              y = null;
            t: for (;;) {
              for (
                var C;
                x !== n || (l !== 0 && x.nodeType !== 3) || (u = o + l),
                  x !== i || (r !== 0 && x.nodeType !== 3) || (s = o + r),
                  x.nodeType === 3 && (o += x.nodeValue.length),
                  (C = x.firstChild) !== null;
              )
                ((y = x), (x = C));
              for (;;) {
                if (x === e) break t;
                if (
                  (y === n && ++m === l && (u = o),
                  y === i && ++w === r && (s = o),
                  (C = x.nextSibling) !== null)
                )
                  break;
                ((x = y), (y = x.parentNode));
              }
              x = C;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (xi = { focusedElem: e, selectionRange: n }, Or = !1, _ = t; _ !== null;)
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
                    var z = P.memoizedProps,
                      ae = P.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? z : it(t.type, z),
                        ae,
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
                  throw Error(p(163));
              }
          } catch (k) {
            ue(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (_ = e));
            break;
          }
          _ = t.return;
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
          ((l.destroy = void 0), i !== void 0 && uo(t, n, i));
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
  function so(e) {
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
        t !== null && (delete t[pt], delete t[lr], delete t[Ci], delete t[of], delete t[uf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function oa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ua(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || oa(e.return)) return null;
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
  function ao(e, t, n) {
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
      for (ao(e, t, n), e = e.sibling; e !== null;) (ao(e, t, n), (e = e.sibling));
  }
  function co(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (co(e, t, n), e = e.sibling; e !== null;) (co(e, t, n), (e = e.sibling));
  }
  var we = null,
    ot = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null;) (sa(e, t, n), (n = n.sibling));
  }
  function sa(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(zr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        _e || jn(n, t);
      case 6:
        var r = we,
          l = ot;
        ((we = null),
          Vt(e, t, n),
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
              e.nodeType === 8 ? Ei(e.parentNode, n) : e.nodeType === 1 && Ei(e, n),
              Yn(e))
            : Ei(we, n.stateNode));
        break;
      case 4:
        ((r = we),
          (l = ot),
          (we = n.stateNode.containerInfo),
          (ot = !0),
          Vt(e, t, n),
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
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && uo(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!_e && (jn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            ue(n, t, u);
          }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((_e = (r = _e) || n.memoizedState !== null), Vt(e, t, n), (_e = r))
          : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function aa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Ef()),
        t.forEach(function (r) {
          var l = If.bind(null, e, r);
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
          if (we === null) throw Error(p(160));
          (sa(i, o, l), (we = null), (ot = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (m) {
          ue(l, t, m);
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
        if ((ut(t, e), vt(e), r & 4)) {
          try {
            (hr(3, e, e.return), hl(3, e));
          } catch (z) {
            ue(e, e.return, z);
          }
          try {
            hr(5, e, e.return);
          } catch (z) {
            ue(e, e.return, z);
          }
        }
        break;
      case 1:
        (ut(t, e), vt(e), r & 512 && n !== null && jn(n, n.return));
        break;
      case 5:
        if ((ut(t, e), vt(e), r & 512 && n !== null && jn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Dn(l, "");
          } catch (z) {
            ue(e, e.return, z);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (u === "input" && i.type === "radio" && i.name != null && Uo(l, i), Hl(u, o));
              var m = Hl(u, i);
              for (o = 0; o < s.length; o += 2) {
                var w = s[o],
                  x = s[o + 1];
                w === "style"
                  ? Ko(l, x)
                  : w === "dangerouslySetInnerHTML"
                    ? Wo(l, x)
                    : w === "children"
                      ? Dn(l, x)
                      : be(l, w, x, m);
              }
              switch (u) {
                case "input":
                  Dl(l, i);
                  break;
                case "textarea":
                  Ho(l, i);
                  break;
                case "select":
                  var y = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var C = i.value;
                  C != null
                    ? sn(l, !!i.multiple, C, !1)
                    : y !== !!i.multiple &&
                      (i.defaultValue != null
                        ? sn(l, !!i.multiple, i.defaultValue, !0)
                        : sn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[lr] = i;
            } catch (z) {
              ue(e, e.return, z);
            }
        }
        break;
      case 6:
        if ((ut(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(p(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (z) {
            ue(e, e.return, z);
          }
        }
        break;
      case 3:
        if ((ut(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Yn(t.containerInfo);
          } catch (z) {
            ue(e, e.return, z);
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
            !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (mo = se())),
          r & 4 && aa(e));
        break;
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((_e = (m = _e) || w), ut(t, e), (_e = m)) : ut(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null), (e.stateNode.isHidden = m) && !w && (e.mode & 1) !== 0)
          )
            for (_ = e, w = e.child; w !== null;) {
              for (x = _ = w; _ !== null;) {
                switch (((y = _), (C = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hr(4, y, y.return);
                    break;
                  case 1:
                    jn(y, y.return);
                    var P = y.stateNode;
                    if (typeof P.componentWillUnmount == "function") {
                      ((r = y), (n = y.return));
                      try {
                        ((t = r),
                          (P.props = t.memoizedProps),
                          (P.state = t.memoizedState),
                          P.componentWillUnmount());
                      } catch (z) {
                        ue(r, n, z);
                      }
                    }
                    break;
                  case 5:
                    jn(y, y.return);
                    break;
                  case 22:
                    if (y.memoizedState !== null) {
                      pa(x);
                      continue;
                    }
                }
                C !== null ? ((C.return = y), (_ = C)) : pa(x);
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
                      : ((u = x.stateNode),
                        (s = x.memoizedProps.style),
                        (o = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (u.style.display = Qo("display", o))));
                } catch (z) {
                  ue(e, e.return, z);
                }
              }
            } else if (x.tag === 6) {
              if (w === null)
                try {
                  x.stateNode.nodeValue = m ? "" : x.memoizedProps;
                } catch (z) {
                  ue(e, e.return, z);
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
        (ut(t, e), vt(e), r & 4 && aa(e));
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
            if (oa(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dn(l, ""), (r.flags &= -33));
            var i = ua(e);
            co(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = ua(e);
            ao(e, u, o);
            break;
          default:
            throw Error(p(161));
        }
      } catch (s) {
        ue(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function _f(e, t, n) {
    ((_ = e), fa(e));
  }
  function fa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null;) {
      var l = _,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || ml;
        if (!o) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || _e;
          u = ml;
          var m = _e;
          if (((ml = o), (_e = s) && !m))
            for (_ = l; _ !== null;)
              ((o = _),
                (s = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? ma(l)
                  : s !== null
                    ? ((s.return = o), (_ = s))
                    : ma(l));
          for (; i !== null;) ((_ = i), fa(i), (i = i.sibling));
          ((_ = l), (ml = u), (_e = m));
        }
        da(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), (_ = i)) : da(e);
    }
  }
  function da(e) {
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
                _e || hl(5, t);
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
                i !== null && ps(t, i, r);
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
                  ps(t, o, n);
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
                  var m = t.alternate;
                  if (m !== null) {
                    var w = m.memoizedState;
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
                throw Error(p(163));
            }
          _e || (t.flags & 512 && so(t));
        } catch (y) {
          ue(t, t.return, y);
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
  function pa(e) {
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
  function ma(e) {
    for (; _ !== null;) {
      var t = _;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              hl(4, t);
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
            var i = t.return;
            try {
              so(t);
            } catch (s) {
              ue(t, i, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              so(t);
            } catch (s) {
              ue(t, o, s);
            }
        }
      } catch (s) {
        ue(t, t.return, s);
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
  var Nf = Math.ceil,
    vl = ke.ReactCurrentDispatcher,
    fo = ke.ReactCurrentOwner,
    Je = ke.ReactCurrentBatchConfig,
    V = 0,
    ve = null,
    fe = null,
    xe = 0,
    $e = 0,
    Ln = Ft(0),
    pe = 0,
    vr = null,
    nn = 0,
    yl = 0,
    po = 0,
    yr = null,
    Oe = null,
    mo = 0,
    Tn = 1 / 0,
    Nt = null,
    gl = !1,
    ho = null,
    Ht = null,
    wl = !1,
    $t = null,
    xl = 0,
    gr = 0,
    vo = null,
    kl = -1,
    Sl = 0;
  function ze() {
    return (V & 6) !== 0 ? se() : kl !== -1 ? kl : (kl = se());
  }
  function Bt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (V & 2) !== 0 && xe !== 0
        ? xe & -xe
        : af.transition !== null
          ? (Sl === 0 && (Sl = uu()), Sl)
          : ((e = K), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vu(e.type))), e);
  }
  function st(e, t, n, r) {
    if (50 < gr) throw ((gr = 0), (vo = null), Error(p(185)));
    ($n(e, n, r),
      ((V & 2) === 0 || e !== ve) &&
        (e === ve && ((V & 2) === 0 && (yl |= n), pe === 4 && Wt(e, xe)),
        Fe(e, r),
        n === 1 && V === 0 && (t.mode & 1) === 0 && ((Tn = se() + 500), Zr && Mt())));
  }
  function Fe(e, t) {
    var n = e.callbackNode;
    sc(e, t);
    var r = Tr(e, e === ve ? xe : 0);
    if (r === 0) (n !== null && lu(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && lu(n), t === 1))
        (e.tag === 0 ? sf(va.bind(null, e)) : ts(va.bind(null, e)),
          rf(function () {
            (V & 6) === 0 && Mt();
          }),
          (n = null));
      else {
        switch (su(r)) {
          case 1:
            n = Xl;
            break;
          case 4:
            n = iu;
            break;
          case 16:
            n = Pr;
            break;
          case 536870912:
            n = ou;
            break;
          default:
            n = Pr;
        }
        n = Ca(n, ha.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function ha(e, t) {
    if (((kl = -1), (Sl = 0), (V & 6) !== 0)) throw Error(p(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n) return null;
    var r = Tr(e, e === ve ? xe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = El(e, r);
    else {
      t = r;
      var l = V;
      V |= 2;
      var i = ga();
      (ve !== e || xe !== t) && ((Nt = null), (Tn = se() + 500), ln(e, t));
      do
        try {
          jf();
          break;
        } catch (u) {
          ya(e, u);
        }
      while (!0);
      (Ii(), (vl.current = i), (V = l), fe !== null ? (t = 0) : ((ve = null), (xe = 0), (t = pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Gl(e)), l !== 0 && ((r = l), (t = yo(e, l)))), t === 1))
        throw ((n = vr), ln(e, 0), Wt(e, r), Fe(e, se()), n);
      if (t === 6) Wt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Pf(l) &&
            ((t = El(e, r)),
            t === 2 && ((i = Gl(e)), i !== 0 && ((r = i), (t = yo(e, i)))),
            t === 1))
        )
          throw ((n = vr), ln(e, 0), Wt(e, r), Fe(e, se()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            on(e, Oe, Nt);
            break;
          case 3:
            if ((Wt(e, r), (r & 130023424) === r && ((t = mo + 500 - se()), 10 < t))) {
              if (Tr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (ze(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Si(on.bind(null, e, Oe, Nt), t);
              break;
            }
            on(e, Oe, Nt);
            break;
          case 4:
            if ((Wt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var o = 31 - nt(r);
              ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
            }
            if (
              ((r = l),
              (r = se() - r),
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
                            : 1960 * Nf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Si(on.bind(null, e, Oe, Nt), r);
              break;
            }
            on(e, Oe, Nt);
            break;
          case 5:
            on(e, Oe, Nt);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return (Fe(e, se()), e.callbackNode === n ? ha.bind(null, e) : null);
  }
  function yo(e, t) {
    var n = yr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = El(e, t)),
      e !== 2 && ((t = Oe), (Oe = n), t !== null && go(t)),
      e
    );
  }
  function go(e) {
    Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
  }
  function Pf(e) {
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
  function Wt(e, t) {
    for (
      t &= ~po, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - nt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function va(e) {
    if ((V & 6) !== 0) throw Error(p(327));
    Rn();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return (Fe(e, se()), null);
    var n = El(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Gl(e);
      r !== 0 && ((t = r), (n = yo(e, r)));
    }
    if (n === 1) throw ((n = vr), ln(e, 0), Wt(e, t), Fe(e, se()), n);
    if (n === 6) throw Error(p(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      on(e, Oe, Nt),
      Fe(e, se()),
      null
    );
  }
  function wo(e, t) {
    var n = V;
    V |= 1;
    try {
      return e(t);
    } finally {
      ((V = n), V === 0 && ((Tn = se() + 500), Zr && Mt()));
    }
  }
  function rn(e) {
    $t !== null && $t.tag === 0 && (V & 6) === 0 && Rn();
    var t = V;
    V |= 1;
    var n = Je.transition,
      r = K;
    try {
      if (((Je.transition = null), (K = 1), e)) return e();
    } finally {
      ((K = r), (Je.transition = n), (V = t), (V & 6) === 0 && Mt());
    }
  }
  function xo() {
    (($e = Ln.current), J(Ln));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), nf(n)), fe !== null))
      for (n = fe.return; n !== null;) {
        var r = n;
        switch ((zi(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Xr());
            break;
          case 3:
            (Pn(), J(Te), J(Se), Hi());
            break;
          case 5:
            Ai(r);
            break;
          case 4:
            Pn();
            break;
          case 13:
            J(le);
            break;
          case 19:
            J(le);
            break;
          case 10:
            Oi(r.type._context);
            break;
          case 22:
          case 23:
            xo();
        }
        n = n.return;
      }
    if (
      ((ve = e),
      (fe = e = Qt(e.current, null)),
      (xe = $e = t),
      (pe = 0),
      (vr = null),
      (po = yl = nn = 0),
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
  function ya(e, t) {
    do {
      var n = fe;
      try {
        if ((Ii(), (ol.current = cl), ul)) {
          for (var r = ie.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ul = !1;
        }
        if (
          ((tn = 0),
          (he = de = ie = null),
          (cr = !1),
          (fr = 0),
          (fo.current = null),
          n === null || n.return === null)
        ) {
          ((pe = 1), (vr = t), (fe = null));
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
            var m = s,
              w = u,
              x = w.tag;
            if ((w.mode & 1) === 0 && (x === 0 || x === 11 || x === 15)) {
              var y = w.alternate;
              y
                ? ((w.updateQueue = y.updateQueue),
                  (w.memoizedState = y.memoizedState),
                  (w.lanes = y.lanes))
                : ((w.updateQueue = null), (w.memoizedState = null));
            }
            var C = $s(o);
            if (C !== null) {
              ((C.flags &= -257), Bs(C, o, u, i, t), C.mode & 1 && Hs(i, m, t), (t = C), (s = m));
              var P = t.updateQueue;
              if (P === null) {
                var z = new Set();
                (z.add(s), (t.updateQueue = z));
              } else P.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Hs(i, m, t), ko());
                break e;
              }
              s = Error(p(426));
            }
          } else if (ne && u.mode & 1) {
            var ae = $s(o);
            if (ae !== null) {
              ((ae.flags & 65536) === 0 && (ae.flags |= 256), Bs(ae, o, u, i, t), Ti(zn(s, u)));
              break e;
            }
          }
          ((i = s = zn(s, u)),
            pe !== 4 && (pe = 2),
            yr === null ? (yr = [i]) : yr.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var f = As(i, s, t);
                ds(i, f);
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
                      (Ht === null || !Ht.has(d))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var k = Vs(i, u, t);
                  ds(i, k);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        xa(n);
      } catch (j) {
        ((t = j), fe === n && n !== null && (fe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ga() {
    var e = vl.current;
    return ((vl.current = cl), e === null ? cl : e);
  }
  function ko() {
    ((pe === 0 || pe === 3 || pe === 2) && (pe = 4),
      ve === null || ((nn & 268435455) === 0 && (yl & 268435455) === 0) || Wt(ve, xe));
  }
  function El(e, t) {
    var n = V;
    V |= 2;
    var r = ga();
    (ve !== e || xe !== t) && ((Nt = null), ln(e, t));
    do
      try {
        zf();
        break;
      } catch (l) {
        ya(e, l);
      }
    while (!0);
    if ((Ii(), (V = n), (vl.current = r), fe !== null)) throw Error(p(261));
    return ((ve = null), (xe = 0), pe);
  }
  function zf() {
    for (; fe !== null;) wa(fe);
  }
  function jf() {
    for (; fe !== null && !ba();) wa(fe);
  }
  function wa(e) {
    var t = Ea(e.alternate, e, $e);
    ((e.memoizedProps = e.pendingProps), t === null ? xa(e) : (fe = t), (fo.current = null));
  }
  function xa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = kf(n, t, $e)), n !== null)) {
          fe = n;
          return;
        }
      } else {
        if (((n = Sf(n, t)), n !== null)) {
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
  function on(e, t, n) {
    var r = K,
      l = Je.transition;
    try {
      ((Je.transition = null), (K = 1), Lf(e, t, n, r));
    } finally {
      ((Je.transition = l), (K = r));
    }
    return null;
  }
  function Lf(e, t, n, r) {
    do Rn();
    while ($t !== null);
    if ((V & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(p(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (ac(e, i),
      e === ve && ((fe = ve = null), (xe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        wl ||
        ((wl = !0),
        Ca(Pr, function () {
          return (Rn(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = Je.transition), (Je.transition = null));
      var o = K;
      K = 1;
      var u = V;
      ((V |= 4),
        (fo.current = null),
        Cf(e, n),
        ca(n, e),
        Gc(xi),
        (Or = !!wi),
        (xi = wi = null),
        (e.current = n),
        _f(n),
        ec(),
        (V = u),
        (K = o),
        (Je.transition = i));
    } else e.current = n;
    if (
      (wl && ((wl = !1), ($t = e), (xl = l)),
      (i = e.pendingLanes),
      i === 0 && (Ht = null),
      rc(n.stateNode),
      Fe(e, se()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (gl) throw ((gl = !1), (e = ho), (ho = null), e);
    return (
      (xl & 1) !== 0 && e.tag !== 0 && Rn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === vo ? gr++ : ((gr = 0), (vo = e))) : (gr = 0),
      Mt(),
      null
    );
  }
  function Rn() {
    if ($t !== null) {
      var e = su(xl),
        t = Je.transition,
        n = K;
      try {
        if (((Je.transition = null), (K = 16 > e ? 16 : e), $t === null)) var r = !1;
        else {
          if (((e = $t), ($t = null), (xl = 0), (V & 6) !== 0)) throw Error(p(331));
          var l = V;
          for (V |= 4, _ = e.current; _ !== null;) {
            var i = _,
              o = i.child;
            if ((_.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var m = u[s];
                  for (_ = m; _ !== null;) {
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
                        var y = w.sibling,
                          C = w.return;
                        if ((ia(w), w === m)) {
                          _ = null;
                          break;
                        }
                        if (y !== null) {
                          ((y.return = C), (_ = y));
                          break;
                        }
                        _ = C;
                      }
                  }
                }
                var P = i.alternate;
                if (P !== null) {
                  var z = P.child;
                  if (z !== null) {
                    P.child = null;
                    do {
                      var ae = z.sibling;
                      ((z.sibling = null), (z = ae));
                    } while (z !== null);
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
                        hl(9, u);
                    }
                  } catch (j) {
                    ue(u, u.return, j);
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
          if (((V = l), Mt(), dt && typeof dt.onPostCommitFiberRoot == "function"))
            try {
              dt.onPostCommitFiberRoot(zr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((K = n), (Je.transition = t));
      }
    }
    return !1;
  }
  function ka(e, t, n) {
    ((t = zn(n, t)),
      (t = As(e, t, 1)),
      (e = At(e, t, 1)),
      (t = ze()),
      e !== null && ($n(e, 1, t), Fe(e, t)));
  }
  function ue(e, t, n) {
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
            (typeof r.componentDidCatch == "function" && (Ht === null || !Ht.has(r)))
          ) {
            ((e = zn(n, e)),
              (e = Vs(t, e, 1)),
              (t = At(t, e, 1)),
              (e = ze()),
              t !== null && ($n(t, 1, e), Fe(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Tf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (xe & n) === n &&
        (pe === 4 || (pe === 3 && (xe & 130023424) === xe && 500 > se() - mo)
          ? ln(e, 0)
          : (po |= n)),
      Fe(e, t));
  }
  function Sa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Lr), (Lr <<= 1), (Lr & 130023424) === 0 && (Lr = 4194304)));
    var n = ze();
    ((e = Et(e, t)), e !== null && ($n(e, t, n), Fe(e, n)));
  }
  function Rf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Sa(e, n));
  }
  function If(e, t) {
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
        throw Error(p(314));
    }
    (r !== null && r.delete(t), Sa(e, n));
  }
  var Ea;
  Ea = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Te.current) Ie = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Ie = !1), xf(e, t, n));
        Ie = (e.flags & 131072) !== 0;
      }
    else ((Ie = !1), ne && (t.flags & 1048576) !== 0 && ns(t, qr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (pl(e, t), (e = t.pendingProps));
        var l = xn(t, Se.current);
        (Nn(t, n), (l = Wi(null, t, r, e, l, n)));
        var i = Qi();
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
              Mi(t),
              (l.updater = fl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Ji(t, r, e, n),
              (t = to(null, t, r, !0, i, n)))
            : ((t.tag = 0), ne && i && Pi(t), Pe(null, t, l, n), (t = t.child)),
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
            (l = t.tag = Ff(r)),
            (e = it(r, e)),
            l)
          ) {
            case 0:
              t = eo(null, t, r, e, n);
              break e;
            case 1:
              t = Gs(null, t, r, e, n);
              break e;
            case 11:
              t = Ws(null, t, r, e, n);
              break e;
            case 14:
              t = Qs(null, t, r, it(r.type, e), n);
              break e;
          }
          throw Error(p(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          eo(e, t, r, l, n)
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
          if ((Zs(t), e === null)) throw Error(p(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            fs(e, t),
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
              ((l = zn(Error(p(423)), t)), (t = Js(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = zn(Error(p(424)), t)), (t = Js(e, t, r, n, l)));
              break e;
            } else
              for (
                He = Ot(t.stateNode.containerInfo.firstChild),
                  Ve = t,
                  ne = !0,
                  lt = null,
                  n = as(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((En(), r === l)) {
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
          ms(t),
          e === null && Li(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          ki(r, l) ? (o = null) : i !== null && ki(r, i) && (t.flags |= 32),
          Xs(e, t),
          Pe(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && Li(t), null);
      case 13:
        return qs(e, t, n);
      case 4:
        return (
          Ui(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : Pe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          Ws(e, t, r, l, n)
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
            G(tl, r._currentValue),
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
                        Fi(i.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(p(341));
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
          Nn(t, n),
          (l = Ge(l)),
          (r = r(l)),
          (t.flags |= 1),
          Pe(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = it(r, t.pendingProps)), (l = it(r.type, l)), Qs(e, t, r, l, n));
      case 15:
        return Ks(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          pl(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), Gr(t)) : (e = !1),
          Nn(t, n),
          Ms(t, r, l),
          Ji(t, r, l, n),
          to(null, t, r, !0, e, n)
        );
      case 19:
        return ea(e, t, n);
      case 22:
        return Ys(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function Ca(e, t) {
    return ru(e, t);
  }
  function Of(e, t, n, r) {
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
    return new Of(e, t, n, r);
  }
  function So(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ff(e) {
    if (typeof e == "function") return So(e) ? 1 : 0;
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
  function Cl(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) So(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case je:
          return un(n.children, l, i, t);
        case Ke:
          ((o = 8), (l |= 8));
          break;
        case Pt:
          return ((e = qe(12, n, t, l | 2)), (e.elementType = Pt), (e.lanes = i), e);
        case Me:
          return ((e = qe(13, n, t, l)), (e.elementType = Me), (e.lanes = i), e);
        case tt:
          return ((e = qe(19, n, t, l)), (e.elementType = tt), (e.lanes = i), e);
        case oe:
          return _l(n, l, i, t);
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
          throw Error(p(130, e == null ? e : typeof e, ""));
      }
    return ((t = qe(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
  }
  function un(e, t, n, r) {
    return ((e = qe(7, e, r, t)), (e.lanes = n), e);
  }
  function _l(e, t, n, r) {
    return (
      (e = qe(22, e, r, t)),
      (e.elementType = oe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Eo(e, t, n) {
    return ((e = qe(6, e, null, t)), (e.lanes = n), e);
  }
  function Co(e, t, n) {
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
  function Df(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Zl(0)),
      (this.expirationTimes = Zl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function _o(e, t, n, r, l, i, o, u, s) {
    return (
      (e = new Df(e, t, n, u, s)),
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
      Mi(i),
      e
    );
  }
  function Mf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ne,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function _a(e) {
    if (!e) return Dt;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(p(170));
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
      throw Error(p(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Re(n)) return bu(e, n, t);
    }
    return t;
  }
  function Na(e, t, n, r, l, i, o, u, s) {
    return (
      (e = _o(n, r, !0, e, l, i, o, u, s)),
      (e.context = _a(null)),
      (n = e.current),
      (r = ze()),
      (l = Bt(n)),
      (i = Ct(r, l)),
      (i.callback = t ?? null),
      At(n, i, l),
      (e.current.lanes = l),
      $n(e, l, r),
      Fe(e, r),
      e
    );
  }
  function Nl(e, t, n, r) {
    var l = t.current,
      i = ze(),
      o = Bt(l);
    return (
      (n = _a(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, o)),
      e !== null && (st(e, l, o, i), rl(e, l, o)),
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
  function Pa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function No(e, t) {
    (Pa(e, t), (e = e.alternate) && Pa(e, t));
  }
  function Uf() {
    return null;
  }
  var za =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Po(e) {
    this._internalRoot = e;
  }
  ((zl.prototype.render = Po.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(p(409));
      Nl(e, t, null, null);
    }),
    (zl.prototype.unmount = Po.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (rn(function () {
            Nl(null, e, null, null);
          }),
            (t[wt] = null));
        }
      }));
  function zl(e) {
    this._internalRoot = e;
  }
  zl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = fu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      (Tt.splice(n, 0, e), n === 0 && mu(e));
    }
  };
  function zo(e) {
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
  function Af(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var m = Pl(o);
          i.call(m);
        };
      }
      var o = Na(t, r, e, 0, null, !1, !1, "", ja);
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
        var m = Pl(s);
        u.call(m);
      };
    }
    var s = _o(e, 0, !1, null, null, !1, !1, "", ja);
    return (
      (e._reactRootContainer = s),
      (e[wt] = s.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        Nl(t, s, n, r);
      }),
      s
    );
  }
  function Ll(e, t, n, r, l) {
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
      Nl(t, o, e, l);
    } else o = Af(n, t, e, l, r);
    return Pl(o);
  }
  ((au = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Hn(t.pendingLanes);
          n !== 0 && (Jl(t, n | 1), Fe(t, se()), (V & 6) === 0 && ((Tn = se() + 500), Mt()));
        }
        break;
      case 13:
        (rn(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = ze();
            st(r, e, 1, l);
          }
        }),
          No(e, 1));
    }
  }),
    (ql = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = ze();
          st(t, e, 134217728, n);
        }
        No(e, 134217728);
      }
    }),
    (cu = function (e) {
      if (e.tag === 13) {
        var t = Bt(e),
          n = Et(e, t);
        if (n !== null) {
          var r = ze();
          st(n, e, t, r);
        }
        No(e, t);
      }
    }),
    (fu = function () {
      return K;
    }),
    (du = function (e, t) {
      var n = K;
      try {
        return ((K = e), t());
      } finally {
        K = n;
      }
    }),
    (Wl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Dl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Yr(r);
                if (!l) throw Error(p(90));
                (Do(r), Dl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Ho(e, n);
          break;
        case "select":
          ((t = n.value), t != null && sn(e, !!n.multiple, t, !1));
      }
    }),
    (Zo = wo),
    (Jo = rn));
  var Vf = { usingClientEntryPoint: !1, Events: [ir, gn, Yr, Xo, Go, wo] },
    wr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Hf = {
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
        return ((e = tu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: wr.findFiberByHostInstance || Uf,
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
        ((zr = Tl.inject(Hf)), (dt = Tl));
      } catch {}
  }
  return (
    (De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf),
    (De.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zo(t)) throw Error(p(200));
      return Mf(e, t, null, n);
    }),
    (De.createRoot = function (e, t) {
      if (!zo(e)) throw Error(p(299));
      var n = !1,
        r = "",
        l = za;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = _o(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        new Po(t)
      );
    }),
    (De.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(p(188))
          : ((e = Object.keys(e).join(",")), Error(p(268, e)));
      return ((e = tu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (De.flushSync = function (e) {
      return rn(e);
    }),
    (De.hydrate = function (e, t, n) {
      if (!jl(t)) throw Error(p(200));
      return Ll(null, e, t, !0, n);
    }),
    (De.hydrateRoot = function (e, t, n) {
      if (!zo(e)) throw Error(p(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = za;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Na(t, null, e, 1, n ?? null, l, !1, i, o)),
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
      return new zl(t);
    }),
    (De.render = function (e, t, n) {
      if (!jl(t)) throw Error(p(200));
      return Ll(null, e, t, !1, n);
    }),
    (De.unmountComponentAtNode = function (e) {
      if (!jl(e)) throw Error(p(40));
      return e._reactRootContainer
        ? (rn(function () {
            Ll(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (De.unstable_batchedUpdates = wo),
    (De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!jl(n)) throw Error(p(200));
      if (e == null || e._reactInternals === void 0) throw Error(p(38));
      return Ll(e, t, n, !1, r);
    }),
    (De.version = "18.3.1-next-f1338f8080-20240426"),
    De
  );
}
var Ma;
function Gf() {
  if (Ma) return To.exports;
  Ma = 1;
  function h() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (S) {
        console.error(S);
      }
  }
  return (h(), (To.exports = Xf()), To.exports);
}
var Ua;
function Zf() {
  if (Ua) return Rl;
  Ua = 1;
  var h = Gf();
  return ((Rl.createRoot = h.createRoot), (Rl.hydrateRoot = h.hydrateRoot), Rl);
}
var Jf = Zf();
function kr(h) {
  const S = h.replace(/^\//, "").replace(/\/$/, "");
  return S ? `#/${S}` : "#/";
}
function Fo(h) {
  const S = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return S
    ? S.startsWith("/")
      ? { kind: "route", path: S.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: S }
    : null;
}
function Va(h, S = "smooth") {
  if (typeof document > "u") return !1;
  const p = document.getElementById(h);
  return p ? (p.scrollIntoView({ behavior: S, block: "start" }), !0) : !1;
}
function In(h) {
  typeof window > "u" || (window.location.hash = kr(h));
}
function qf() {
  const h = Fo();
  return (h == null ? void 0 : h.kind) === "route" ? h.path : "";
}
function Ha() {
  if (typeof window > "u") return;
  const h = Fo();
  (h == null ? void 0 : h.kind) === "section" && requestAnimationFrame(() => Va(h.id, "auto"));
}
function bf(h, S) {
  if (typeof window > "u") return () => {};
  const p = () => {
    const D = Fo();
    if (!D) {
      h("");
      return;
    }
    if (D.kind === "route") {
      h(D.path);
      return;
    }
    (Va(D.id, "smooth"), h(""));
  };
  return (
    p(),
    window.addEventListener("hashchange", p),
    () => window.removeEventListener("hashchange", p)
  );
}
function ed(h = "") {
  const [S, p] = Be.useState(() => (typeof window < "u" ? qf() : h));
  return (Be.useEffect(() => bf(p), []), S || h);
}
function td({ routes: h, defaultRoute: S = "", className: p }) {
  const D = ed(S);
  Be.useEffect(() => {
    Ha();
  }, []);
  const I = D in h ? D : S,
    R = h[I] ?? h[S];
  return v.jsx("div", { className: p, children: R });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nd = (h) => h.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  $a = (...h) =>
    h
      .filter((S, p, D) => !!S && S.trim() !== "" && D.indexOf(S) === p)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var rd = {
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
 */ const ld = Be.forwardRef(
  (
    {
      color: h = "currentColor",
      size: S = 24,
      strokeWidth: p = 2,
      absoluteStrokeWidth: D,
      className: I = "",
      children: R,
      iconNode: q,
      ...ce
    },
    W,
  ) =>
    Be.createElement(
      "svg",
      {
        ref: W,
        ...rd,
        width: S,
        height: S,
        stroke: h,
        strokeWidth: D ? (Number(p) * 24) / Number(S) : p,
        className: $a("lucide", I),
        ...ce,
      },
      [...q.map(([ge, me]) => Be.createElement(ge, me)), ...(Array.isArray(R) ? R : [R])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ol = (h, S) => {
  const p = Be.forwardRef(({ className: D, ...I }, R) =>
    Be.createElement(ld, { ref: R, iconNode: S, className: $a(`lucide-${nd(h)}`, D), ...I }),
  );
  return ((p.displayName = `${h}`), p);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const id = Ol("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const od = Ol("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ud = Ol("Play", [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sd = Ol("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Ba = [
    { label: "Platform", route: "platform" },
    { label: "How it works", route: "how-it-works" },
    { label: "AI Defense", route: "ai-defense" },
    { label: "Connections", route: "connections" },
    { label: "Insights", route: "insights" },
  ],
  Aa =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_155101_f2540600-6fe9-433e-8e48-b3f4b72f0727.mp4",
  ad =
    "M60 120C26.8629 120 0 93.1371 0 60V0C22.5654 0 42.2213 12.4569 52.4662 30.8691C38.4788 34.2089 28.0787 46.7902 28.0787 61.8006V63.1443C28.0787 79.9648 41.7146 93.6006 58.5353 93.6006H59.8789L59.8785 61.8006C59.8785 79.3633 74.1159 93.6006 91.6787 93.6006L91.6787 61.8006C91.6787 44.2783 77.5071 30.0661 60 30.0008L60 0H62.5352C94.2722 0 120 25.7279 120 57.4648V60C120 93.1371 93.1371 120 60 120Z";
function cd({ size: h = 48, className: S = "" }) {
  return v.jsx("svg", {
    width: h,
    height: h,
    viewBox: "0 0 120 120",
    fill: "currentColor",
    className: S,
    "aria-hidden": !0,
    children: v.jsx("path", { d: ad }),
  });
}
function fd({ open: h, onClick: S }) {
  return v.jsxs("button", {
    type: "button",
    onClick: S,
    className:
      "relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 lg:hidden",
    style: { backgroundColor: h ? "#1a1a1a" : "transparent" },
    "aria-label": "Toggle menu",
    children: [
      v.jsx("span", {
        className: "absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
        style: {
          opacity: h ? 0 : 1,
          transform: h ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)",
        },
        children: v.jsx(od, { size: 20, color: "white", strokeWidth: 1.5 }),
      }),
      v.jsx("span", {
        className: "absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
        style: {
          opacity: h ? 1 : 0,
          transform: h ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
        },
        children: v.jsx(sd, { size: 20, color: "white", strokeWidth: 1.5 }),
      }),
    ],
  });
}
function dd({ open: h, onClose: S }) {
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx("div", {
        className: "fixed inset-0 z-30 transition-all duration-500 lg:hidden",
        style: {
          backdropFilter: h ? "blur(12px)" : "blur(0px)",
          backgroundColor: h ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
          pointerEvents: h ? "auto" : "none",
        },
        onClick: S,
        "aria-hidden": !h,
      }),
      v.jsx("div", {
        className: "fixed left-0 right-0 top-0 z-40 overflow-hidden lg:hidden",
        style: {
          maxHeight: h ? "420px" : "0px",
          transition: "max-height 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        },
        children: v.jsxs("div", {
          className: "px-5 pb-6 pt-20",
          style: {
            backgroundColor: "rgba(8,8,8,0.97)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          },
          children: [
            v.jsxs("div", {
              className: "flex flex-col gap-1",
              children: [
                v.jsx("a", {
                  href: kr(""),
                  onClick: (p) => {
                    (p.preventDefault(), In(""), S());
                  },
                  className:
                    "flex items-center justify-between rounded-xl px-3 py-3 text-base text-white/70 transition-all duration-200 hover:bg-white/5 hover:text-white",
                  style: { fontFamily: "Inter, sans-serif" },
                  children: "Home",
                }),
                Ba.map((p, D) =>
                  v.jsxs(
                    "a",
                    {
                      href: kr(p.route),
                      onClick: (I) => {
                        (I.preventDefault(), In(p.route), S());
                      },
                      className:
                        "flex items-center justify-between rounded-xl px-3 py-3 text-base text-white/70 transition-all duration-200 hover:bg-white/5 hover:text-white group",
                      style: {
                        fontFamily: "Inter, sans-serif",
                        transitionDelay: h ? `${D * 50 + 80}ms` : "0ms",
                        opacity: h ? 1 : 0,
                        transform: h ? "translateY(0)" : "translateY(-8px)",
                        transition: `opacity 0.4s cubic-bezier(0.23,1,0.32,1) ${D * 50 + 80}ms, transform 0.4s cubic-bezier(0.23,1,0.32,1) ${D * 50 + 80}ms, color 0.2s, background 0.2s`,
                      },
                      children: [
                        p.label,
                        v.jsx(id, {
                          size: 14,
                          className:
                            "-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-40",
                        }),
                      ],
                    },
                    p.route,
                  ),
                ),
              ],
            }),
            v.jsx("div", {
              className: "mt-5 pt-5",
              style: {
                borderTop: "1px solid rgba(255,255,255,0.07)",
                transitionDelay: h ? "360ms" : "0ms",
                opacity: h ? 1 : 0,
                transform: h ? "translateY(0)" : "translateY(-8px)",
                transition:
                  "opacity 0.4s cubic-bezier(0.23,1,0.32,1) 360ms, transform 0.4s cubic-bezier(0.23,1,0.32,1) 360ms",
              },
              children: v.jsx("button", {
                type: "button",
                className:
                  "w-full rounded-full py-3 text-sm font-medium text-black transition-all duration-300 hover:opacity-80",
                style: { fontFamily: "Inter, sans-serif", backgroundColor: "#ffffff" },
                onClick: () => {
                  (In("contact"), S());
                },
                children: "Join the wait",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Wa({ fixed: h = !1 }) {
  const [S, p] = Be.useState(!1);
  (Be.useEffect(
    () => (
      (document.body.style.overflow = S ? "hidden" : ""),
      () => {
        document.body.style.overflow = "";
      }
    ),
    [S],
  ),
    Be.useEffect(() => {
      const R = (q) => q.key === "Escape" && p(!1);
      return (
        window.addEventListener("keydown", R),
        () => window.removeEventListener("keydown", R)
      );
    }, []));
  const D = (R) => (q) => {
      (q.preventDefault(), In(R), p(!1));
    },
    I = h ? "fixed" : "absolute";
  return v.jsxs(v.Fragment, {
    children: [
      v.jsxs("nav", {
        className: `${I} left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 lg:px-10 lg:py-6`,
        children: [
          v.jsxs("a", {
            href: kr(""),
            onClick: D(""),
            className: "flex items-center gap-2.5 text-xl font-semibold tracking-tight text-white",
            style: { fontFamily: "Inter, sans-serif" },
            children: [v.jsx(cd, { size: 28, className: "text-white" }), "velorix"],
          }),
          v.jsx("div", {
            className: "hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex",
            style: { backgroundColor: "#0C0C0C" },
            children: Ba.map((R) =>
              v.jsx(
                "a",
                {
                  href: kr(R.route),
                  onClick: D(R.route),
                  className:
                    "rounded-full px-4 py-1.5 text-sm text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white",
                  style: { fontFamily: "Inter, sans-serif" },
                  children: R.label,
                },
                R.route,
              ),
            ),
          }),
          v.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              v.jsx(fd, { open: S, onClick: () => p((R) => !R) }),
              v.jsx("button", {
                type: "button",
                className:
                  "hidden rounded-full px-5 py-2 text-sm font-medium text-black transition-all duration-300 hover:opacity-80 lg:block",
                style: { fontFamily: "Inter, sans-serif", backgroundColor: "#ffffff" },
                onClick: () => In("contact"),
                children: "Join the wait",
              }),
            ],
          }),
        ],
      }),
      v.jsx(dd, { open: S, onClose: () => p(!1) }),
    ],
  });
}
function On({ eyebrow: h, title: S, description: p, children: D }) {
  return v.jsxs("div", {
    className: "min-h-screen bg-black text-white",
    children: [
      v.jsx(Wa, { fixed: !0 }),
      v.jsxs("div", {
        className: "mx-auto max-w-4xl px-5 pb-24 pt-28 lg:px-10 lg:pt-32",
        children: [
          v.jsx("p", {
            className: "text-xs font-semibold uppercase tracking-[0.35em] text-[#FF4444]",
            children: h,
          }),
          v.jsx("h1", {
            className: "mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
            style: { fontFamily: "Inter, sans-serif" },
            children: S,
          }),
          v.jsx("p", {
            className: "mt-5 max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg",
            children: p,
          }),
          D ? v.jsx("div", { className: "mt-12", children: D }) : null,
        ],
      }),
    ],
  });
}
function pd() {
  return v.jsx(On, {
    eyebrow: "AI Defense",
    title: "Guardrails for every automated decision",
    description:
      "Velorix monitors model outputs, enforces policy, and pauses risky actions before they reach production systems.",
    children: v.jsxs("div", {
      className: "grid gap-4 md:grid-cols-2",
      children: [
        v.jsxs("article", {
          className: "rounded-2xl border border-[#FF4444]/30 bg-[#FF0000]/10 p-6",
          children: [
            v.jsx("h3", { className: "text-lg font-semibold", children: "Threat detection" }),
            v.jsx("p", {
              className: "mt-3 text-sm text-white/60",
              children:
                "Anomaly scoring on prompts, tool calls, and data exports with real-time alerts.",
            }),
          ],
        }),
        v.jsxs("article", {
          className: "rounded-2xl border border-white/10 bg-white/[0.04] p-6",
          children: [
            v.jsx("h3", { className: "text-lg font-semibold", children: "Human-in-the-loop" }),
            v.jsx("p", {
              className: "mt-3 text-sm text-white/60",
              children:
                "Sensitive actions queue for approval with full context and rollback paths.",
            }),
          ],
        }),
      ],
    }),
  });
}
const md = ["Slack", "Notion", "Salesforce", "Stripe", "Google Workspace", "HubSpot"];
function hd() {
  return v.jsx(On, {
    eyebrow: "Connections",
    title: "Your stack, orchestrated",
    description:
      "Pre-built connectors and webhooks keep data flowing—Velorix normalizes events into one operational timeline.",
    children: v.jsx("div", {
      className: "flex flex-wrap gap-3",
      children: md.map((h) =>
        v.jsx(
          "span",
          {
            className:
              "rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm text-white/80",
            children: h,
          },
          h,
        ),
      ),
    }),
  });
}
function vd() {
  return v.jsx(On, {
    eyebrow: "Contact",
    title: "Join the wait",
    description:
      "Tell us about your operations stack—we onboard design partners in rolling cohorts.",
    children: v.jsxs("form", {
      className: "max-w-md space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6",
      onSubmit: (h) => h.preventDefault(),
      children: [
        v.jsxs("label", {
          className: "block text-sm font-medium",
          children: [
            "Work email",
            v.jsx("input", {
              type: "email",
              className:
                "mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm outline-none focus:border-[#FF4444]/50",
              placeholder: "you@company.com",
            }),
          ],
        }),
        v.jsxs("label", {
          className: "block text-sm font-medium",
          children: [
            "Company",
            v.jsx("input", {
              type: "text",
              className:
                "mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm outline-none focus:border-[#FF4444]/50",
              placeholder: "Your team",
            }),
          ],
        }),
        v.jsx("button", {
          type: "submit",
          className:
            "w-full rounded-full bg-white py-3 text-sm font-medium text-black transition-opacity hover:opacity-85",
          children: "Request access",
        }),
      ],
    }),
  });
}
const Qa = {
  dark: {
    section: "border-t border-white/10 py-20 md:py-28 px-6 md:px-12",
    title: "text-3xl md:text-4xl font-semibold tracking-tight text-white",
    body: "text-white/60 text-base leading-relaxed max-w-2xl",
    card: "rounded-2xl border border-white/10 bg-white/5 p-6",
    eyebrow: "text-xs uppercase tracking-[0.2em] text-white/45",
  },
  light: {
    section: "border-t border-slate-200 py-20 md:py-28 px-6 md:px-12 bg-white",
    title: "text-3xl md:text-4xl font-semibold tracking-tight text-slate-900",
    body: "text-slate-600 text-base leading-relaxed max-w-2xl",
    card: "rounded-2xl border border-slate-200 bg-slate-50 p-6",
    eyebrow: "text-xs uppercase tracking-[0.2em] text-slate-500",
  },
};
function Il({ id: h, eyebrow: S, title: p, children: D, theme: I }) {
  const R = Qa[I];
  return v.jsx("section", {
    id: h,
    className: `${R.section} scroll-mt-24`,
    children: v.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        v.jsx("p", { className: R.eyebrow, children: S }),
        v.jsx("h2", { className: `${R.title} mt-3`, children: p }),
        v.jsx("div", { className: "mt-8", children: D }),
      ],
    }),
  });
}
function yd({ theme: h = "dark", brand: S = "Product" }) {
  const p = Qa[h],
    D = [
      { title: "Fast setup", desc: `Ship ${S} experiences in minutes with guided defaults.` },
      { title: "Built to scale", desc: "Production-ready patterns for teams that iterate daily." },
      { title: "Secure by design", desc: "Privacy-first flows with audit-friendly configuration." },
    ];
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx(Il, {
        id: "features",
        eyebrow: "Features",
        title: "Everything you need in one flow",
        theme: h,
        children: v.jsx("div", {
          className: "grid gap-4 md:grid-cols-3",
          children: D.map((I) =>
            v.jsxs(
              "div",
              {
                className: p.card,
                children: [
                  v.jsx("h3", {
                    className:
                      h === "dark"
                        ? "text-lg font-medium text-white"
                        : "text-lg font-medium text-slate-900",
                    children: I.title,
                  }),
                  v.jsx("p", { className: `${p.body} mt-2 text-sm`, children: I.desc }),
                ],
              },
              I.title,
            ),
          ),
        }),
      }),
      v.jsx(Il, {
        id: "about",
        eyebrow: "About",
        title: `Why teams choose ${S}`,
        theme: h,
        children: v.jsx("p", {
          className: p.body,
          children:
            "We combine cinematic presentation with practical product storytelling—so every visit feels premium while staying effortless to keep current as you grow.",
        }),
      }),
      v.jsx(Il, {
        id: "faq",
        eyebrow: "FAQ",
        title: "Common questions",
        theme: h,
        children: v.jsx("dl", {
          className: "space-y-4 max-w-3xl",
          children: [
            [
              "Can this be tailored to my brand?",
              "Yes — every section, headline, and visual adapts to your brand and content.",
            ],
            [
              "How fast can I get started?",
              "Onboarding takes minutes — reach out and we will walk you through setup.",
            ],
            [
              "Is this production-ready?",
              "Yes — fast, responsive, and built with security and SEO best practices.",
            ],
          ].map(([I, R]) =>
            v.jsxs(
              "div",
              {
                className: p.card,
                children: [
                  v.jsx("dt", {
                    className:
                      h === "dark" ? "font-medium text-white" : "font-medium text-slate-900",
                    children: I,
                  }),
                  v.jsx("dd", { className: `${p.body} mt-2 text-sm`, children: R }),
                ],
              },
              I,
            ),
          ),
        }),
      }),
      v.jsxs(Il, {
        id: "contact",
        eyebrow: "Contact",
        title: "Talk with our team",
        theme: h,
        children: [
          v.jsx("p", { className: p.body, children: "We respond within one business day." }),
          v.jsx("a", {
            href: "#contact",
            className:
              h === "dark"
                ? "mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
                : "mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white",
            children: "Get in touch",
          }),
        ],
      }),
    ],
  });
}
function gd() {
  return v.jsxs("div", {
    className: "min-h-screen bg-black text-white",
    children: [
      v.jsxs("section", {
        className: "relative h-screen w-full overflow-hidden",
        children: [
          v.jsx("video", {
            className: "absolute inset-0 h-full w-full object-cover",
            src: Aa,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            "data-draftly-asset-id": "hero-video",
            "data-draftly-default-src": Aa,
          }),
          v.jsx("div", {
            className:
              "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70",
            "aria-hidden": !0,
          }),
          v.jsx(Wa, {}),
          v.jsxs("div", {
            className:
              "relative z-10 flex h-full flex-col items-center justify-center px-6 pb-24 pt-28 text-center",
            children: [
              v.jsx("h1", {
                className:
                  "animate-blur-fade-up max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.03em]",
                style: { animationDelay: "200ms", fontFamily: "Inter, sans-serif" },
                children: "Where precision finds its edge...",
              }),
              v.jsxs("button", {
                type: "button",
                className:
                  "animate-blur-fade-up mt-10 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-opacity hover:opacity-85",
                style: { animationDelay: "420ms", fontFamily: "Inter, sans-serif" },
                onClick: () => In("how-it-works"),
                children: [
                  "Watch it unfold",
                  v.jsx(ud, { size: 16, fill: "currentColor", strokeWidth: 0, "aria-hidden": !0 }),
                ],
              }),
            ],
          }),
          v.jsx("div", {
            className:
              "pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black",
            "aria-hidden": !0,
          }),
        ],
      }),
      v.jsx(yd, { brand: "Velorix", theme: "dark" }),
    ],
  });
}
const wd = [
  {
    step: "01",
    title: "Connect",
    detail: "Link CRM, billing, inbox, and warehouse tools in minutes.",
  },
  {
    step: "02",
    title: "Define rituals",
    detail: "Map recurring workflows with plain-language rules and owners.",
  },
  {
    step: "03",
    title: "Automate",
    detail: "Velorix executes, logs, and surfaces exceptions for human review.",
  },
  {
    step: "04",
    title: "Optimize",
    detail: "Insights highlight bottlenecks and recommend calmer paths forward.",
  },
];
function xd() {
  return v.jsx(On, {
    eyebrow: "How it works",
    title: "From chaos to repeatable rhythm",
    description:
      "Adopt automation in four clear phases—no rip-and-replace, no six-month integration projects.",
    children: v.jsx("ol", {
      className: "space-y-4",
      children: wd.map((h) =>
        v.jsxs(
          "li",
          {
            className: "flex gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5",
            children: [
              v.jsx("span", {
                className: "text-sm font-semibold text-[#FF4444]",
                children: h.step,
              }),
              v.jsxs("div", {
                children: [
                  v.jsx("h3", { className: "text-lg font-semibold", children: h.title }),
                  v.jsx("p", { className: "mt-2 text-sm text-white/55", children: h.detail }),
                ],
              }),
            ],
          },
          h.step,
        ),
      ),
    }),
  });
}
function kd() {
  return v.jsx(On, {
    eyebrow: "Insights",
    title: "See what automation actually saves",
    description:
      "Dashboards track cycle time, error rates, and capacity reclaimed—so leaders prove ROI without spreadsheet archaeology.",
    children: v.jsx("div", {
      className: "grid gap-4 sm:grid-cols-3",
      children: [
        { label: "Hours returned / week", value: "42" },
        { label: "Tasks auto-resolved", value: "89%" },
        { label: "Mean time to calm", value: "3.2d" },
      ].map((h) =>
        v.jsxs(
          "div",
          {
            className: "rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center",
            children: [
              v.jsx("p", { className: "text-3xl font-semibold text-[#FF4444]", children: h.value }),
              v.jsx("p", {
                className: "mt-2 text-xs uppercase tracking-wider text-white/50",
                children: h.label,
              }),
            ],
          },
          h.label,
        ),
      ),
    }),
  });
}
const Sd = [
  {
    title: "Routine engine",
    body: "Compose daily automations from triggers, timers, and AI-assisted steps.",
  },
  {
    title: "Operations hub",
    body: "Unified inbox for tasks, alerts, and approvals across every connected tool.",
  },
  {
    title: "Policy layer",
    body: "Guardrails ensure automations stay within budget, scope, and compliance.",
  },
];
function Ed() {
  return v.jsx(On, {
    eyebrow: "Platform",
    title: "One surface for operational calm",
    description:
      "Velorix coordinates work across your stack—routing, enriching, and completing tasks without manual glue code.",
    children: v.jsx("div", {
      className: "grid gap-4 sm:grid-cols-3",
      children: Sd.map((h) =>
        v.jsxs(
          "article",
          {
            className: "rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm",
            children: [
              v.jsx("h3", { className: "text-lg font-semibold", children: h.title }),
              v.jsx("p", {
                className: "mt-3 text-sm leading-relaxed text-white/55",
                children: h.body,
              }),
            ],
          },
          h.title,
        ),
      ),
    }),
  });
}
function Cd() {
  return (
    Be.useEffect(() => {
      Ha();
    }, []),
    v.jsx(td, {
      routes: {
        "": v.jsx(gd, {}),
        platform: v.jsx(Ed, {}),
        "how-it-works": v.jsx(xd, {}),
        "ai-defense": v.jsx(pd, {}),
        connections: v.jsx(hd, {}),
        insights: v.jsx(kd, {}),
        contact: v.jsx(vd, {}),
      },
    })
  );
}
Jf.createRoot(document.getElementById("root")).render(
  v.jsx(Be.StrictMode, { children: v.jsx(Cd, {}) }),
);
