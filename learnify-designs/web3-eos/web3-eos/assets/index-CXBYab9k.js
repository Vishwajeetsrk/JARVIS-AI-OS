(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const j of document.querySelectorAll('link[rel="modulepreload"]')) T(j);
  new MutationObserver((j) => {
    for (const M of j)
      if (M.type === "childList")
        for (const ae of M.addedNodes) ae.tagName === "LINK" && ae.rel === "modulepreload" && T(ae);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(j) {
    const M = {};
    return (
      j.integrity && (M.integrity = j.integrity),
      j.referrerPolicy && (M.referrerPolicy = j.referrerPolicy),
      j.crossOrigin === "use-credentials"
        ? (M.credentials = "include")
        : j.crossOrigin === "anonymous"
          ? (M.credentials = "omit")
          : (M.credentials = "same-origin"),
      M
    );
  }
  function T(j) {
    if (j.ep) return;
    j.ep = !0;
    const M = p(j);
    fetch(j.href, M);
  }
})();
var Cu = { exports: {} },
  wr = {},
  Nu = { exports: {} },
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
function Wf() {
  if (La) return U;
  La = 1;
  var h = Symbol.for("react.element"),
    S = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    T = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    M = Symbol.for("react.provider"),
    ae = Symbol.for("react.context"),
    ce = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    ge = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    ne = Symbol.iterator;
  function q(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (ne && c[ne]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var Be = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    We = Object.assign,
    b = {};
  function Y(c, y, F) {
    ((this.props = c), (this.context = y), (this.refs = b), (this.updater = F || Be));
  }
  ((Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (c, y) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, y, "setState");
    }),
    (Y.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function yt() {}
  yt.prototype = Y.prototype;
  function at(c, y, F) {
    ((this.props = c), (this.context = y), (this.refs = b), (this.updater = F || Be));
  }
  var qe = (at.prototype = new yt());
  ((qe.constructor = at), We(qe, Y.prototype), (qe.isPureReactComponent = !0));
  var ke = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    Ne = { current: null },
    Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, y, F) {
    var A,
      V = {},
      $ = null,
      X = null;
    if (y != null)
      for (A in (y.ref !== void 0 && (X = y.ref), y.key !== void 0 && ($ = "" + y.key), y))
        be.call(y, A) && !Le.hasOwnProperty(A) && (V[A] = y[A]);
    var Q = arguments.length - 2;
    if (Q === 1) V.children = F;
    else if (1 < Q) {
      for (var ee = Array(Q), Ue = 0; Ue < Q; Ue++) ee[Ue] = arguments[Ue + 2];
      V.children = ee;
    }
    if (c && c.defaultProps) for (A in ((Q = c.defaultProps), Q)) V[A] === void 0 && (V[A] = Q[A]);
    return { $$typeof: h, type: c, key: $, ref: X, props: V, _owner: Ne.current };
  }
  function Pt(c, y) {
    return { $$typeof: h, type: c.type, key: y, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === h;
  }
  function Yt(c) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (F) {
        return y[F];
      })
    );
  }
  var ct = /\/+/g;
  function Fe(c, y) {
    return typeof c == "object" && c !== null && c.key != null ? Yt("" + c.key) : y.toString(36);
  }
  function et(c, y, F, A, V) {
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
        (V = V(X)),
        (c = A === "" ? "." + Fe(X, 0) : A),
        ke(V)
          ? ((F = ""),
            c != null && (F = c.replace(ct, "$&/") + "/"),
            et(V, y, F, "", function (Ue) {
              return Ue;
            }))
          : V != null &&
            (gt(V) &&
              (V = Pt(
                V,
                F +
                  (!V.key || (X && X.key === V.key) ? "" : ("" + V.key).replace(ct, "$&/") + "/") +
                  c,
              )),
            y.push(V)),
        1
      );
    if (((X = 0), (A = A === "" ? "." : A + ":"), ke(c)))
      for (var Q = 0; Q < c.length; Q++) {
        $ = c[Q];
        var ee = A + Fe($, Q);
        X += et($, y, F, ee, V);
      }
    else if (((ee = q(c)), typeof ee == "function"))
      for (c = ee.call(c), Q = 0; !($ = c.next()).done;)
        (($ = $.value), (ee = A + Fe($, Q++)), (X += et($, y, F, ee, V)));
    else if ($ === "object")
      throw (
        (y = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return X;
  }
  function ft(c, y, F) {
    if (c == null) return c;
    var A = [],
      V = 0;
    return (
      et(c, A, "", "", function ($) {
        return y.call(F, $, V++);
      }),
      A
    );
  }
  function je(c) {
    if (c._status === -1) {
      var y = c._result;
      ((y = y()),
        y.then(
          function (F) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = F));
          },
          function (F) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = F));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = y)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ie = { current: null },
    E = { transition: null },
    D = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: E, ReactCurrentOwner: Ne };
  function N() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (U.Children = {
      map: ft,
      forEach: function (c, y, F) {
        ft(
          c,
          function () {
            y.apply(this, arguments);
          },
          F,
        );
      },
      count: function (c) {
        var y = 0;
        return (
          ft(c, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (c) {
        return (
          ft(c, function (y) {
            return y;
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
    (U.Profiler = j),
    (U.PureComponent = at),
    (U.StrictMode = T),
    (U.Suspense = W),
    (U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
    (U.act = N),
    (U.cloneElement = function (c, y, F) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var A = We({}, c.props),
        V = c.key,
        $ = c.ref,
        X = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && (($ = y.ref), (X = Ne.current)),
          y.key !== void 0 && (V = "" + y.key),
          c.type && c.type.defaultProps)
        )
          var Q = c.type.defaultProps;
        for (ee in y)
          be.call(y, ee) &&
            !Le.hasOwnProperty(ee) &&
            (A[ee] = y[ee] === void 0 && Q !== void 0 ? Q[ee] : y[ee]);
      }
      var ee = arguments.length - 2;
      if (ee === 1) A.children = F;
      else if (1 < ee) {
        Q = Array(ee);
        for (var Ue = 0; Ue < ee; Ue++) Q[Ue] = arguments[Ue + 2];
        A.children = Q;
      }
      return { $$typeof: h, type: c.type, key: V, ref: $, props: A, _owner: X };
    }),
    (U.createContext = function (c) {
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
        (c.Provider = { $$typeof: M, _context: c }),
        (c.Consumer = c)
      );
    }),
    (U.createElement = Qe),
    (U.createFactory = function (c) {
      var y = Qe.bind(null, c);
      return ((y.type = c), y);
    }),
    (U.createRef = function () {
      return { current: null };
    }),
    (U.forwardRef = function (c) {
      return { $$typeof: ce, render: c };
    }),
    (U.isValidElement = gt),
    (U.lazy = function (c) {
      return { $$typeof: me, _payload: { _status: -1, _result: c }, _init: je };
    }),
    (U.memo = function (c, y) {
      return { $$typeof: ge, type: c, compare: y === void 0 ? null : y };
    }),
    (U.startTransition = function (c) {
      var y = E.transition;
      E.transition = {};
      try {
        c();
      } finally {
        E.transition = y;
      }
    }),
    (U.unstable_act = N),
    (U.useCallback = function (c, y) {
      return ie.current.useCallback(c, y);
    }),
    (U.useContext = function (c) {
      return ie.current.useContext(c);
    }),
    (U.useDebugValue = function () {}),
    (U.useDeferredValue = function (c) {
      return ie.current.useDeferredValue(c);
    }),
    (U.useEffect = function (c, y) {
      return ie.current.useEffect(c, y);
    }),
    (U.useId = function () {
      return ie.current.useId();
    }),
    (U.useImperativeHandle = function (c, y, F) {
      return ie.current.useImperativeHandle(c, y, F);
    }),
    (U.useInsertionEffect = function (c, y) {
      return ie.current.useInsertionEffect(c, y);
    }),
    (U.useLayoutEffect = function (c, y) {
      return ie.current.useLayoutEffect(c, y);
    }),
    (U.useMemo = function (c, y) {
      return ie.current.useMemo(c, y);
    }),
    (U.useReducer = function (c, y, F) {
      return ie.current.useReducer(c, y, F);
    }),
    (U.useRef = function (c) {
      return ie.current.useRef(c);
    }),
    (U.useState = function (c) {
      return ie.current.useState(c);
    }),
    (U.useSyncExternalStore = function (c, y, F) {
      return ie.current.useSyncExternalStore(c, y, F);
    }),
    (U.useTransition = function () {
      return ie.current.useTransition();
    }),
    (U.version = "18.3.1"),
    U
  );
}
var ja;
function ju() {
  return (ja || ((ja = 1), (Nu.exports = Wf())), Nu.exports);
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
function Qf() {
  if (Ta) return wr;
  Ta = 1;
  var h = ju(),
    S = Symbol.for("react.element"),
    p = Symbol.for("react.fragment"),
    T = Object.prototype.hasOwnProperty,
    j = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(ce, W, ge) {
    var me,
      ne = {},
      q = null,
      Be = null;
    (ge !== void 0 && (q = "" + ge),
      W.key !== void 0 && (q = "" + W.key),
      W.ref !== void 0 && (Be = W.ref));
    for (me in W) T.call(W, me) && !M.hasOwnProperty(me) && (ne[me] = W[me]);
    if (ce && ce.defaultProps)
      for (me in ((W = ce.defaultProps), W)) ne[me] === void 0 && (ne[me] = W[me]);
    return { $$typeof: S, type: ce, key: q, ref: Be, props: ne, _owner: j.current };
  }
  return ((wr.Fragment = p), (wr.jsx = ae), (wr.jsxs = ae), wr);
}
var Ra;
function Kf() {
  return (Ra || ((Ra = 1), (Cu.exports = Qf())), Cu.exports);
}
var k = Kf(),
  st = ju(),
  jl = {},
  Pu = { exports: {} },
  Ie = {},
  zu = { exports: {} },
  Lu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oa;
function Yf() {
  return (
    Oa ||
      ((Oa = 1),
      (function (h) {
        function S(E, D) {
          var N = E.length;
          E.push(D);
          e: for (; 0 < N;) {
            var c = (N - 1) >>> 1,
              y = E[c];
            if (0 < j(y, D)) ((E[c] = D), (E[N] = y), (N = c));
            else break e;
          }
        }
        function p(E) {
          return E.length === 0 ? null : E[0];
        }
        function T(E) {
          if (E.length === 0) return null;
          var D = E[0],
            N = E.pop();
          if (N !== D) {
            E[0] = N;
            e: for (var c = 0, y = E.length, F = y >>> 1; c < F;) {
              var A = 2 * (c + 1) - 1,
                V = E[A],
                $ = A + 1,
                X = E[$];
              if (0 > j(V, N))
                $ < y && 0 > j(X, V)
                  ? ((E[c] = X), (E[$] = N), (c = $))
                  : ((E[c] = V), (E[A] = N), (c = A));
              else if ($ < y && 0 > j(X, N)) ((E[c] = X), (E[$] = N), (c = $));
              else break e;
            }
          }
          return D;
        }
        function j(E, D) {
          var N = E.sortIndex - D.sortIndex;
          return N !== 0 ? N : E.id - D.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var M = performance;
          h.unstable_now = function () {
            return M.now();
          };
        } else {
          var ae = Date,
            ce = ae.now();
          h.unstable_now = function () {
            return ae.now() - ce;
          };
        }
        var W = [],
          ge = [],
          me = 1,
          ne = null,
          q = 3,
          Be = !1,
          We = !1,
          b = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function qe(E) {
          for (var D = p(ge); D !== null;) {
            if (D.callback === null) T(ge);
            else if (D.startTime <= E) (T(ge), (D.sortIndex = D.expirationTime), S(W, D));
            else break;
            D = p(ge);
          }
        }
        function ke(E) {
          if (((b = !1), qe(E), !We))
            if (p(W) !== null) ((We = !0), je(be));
            else {
              var D = p(ge);
              D !== null && ie(ke, D.startTime - E);
            }
        }
        function be(E, D) {
          ((We = !1), b && ((b = !1), yt(Qe), (Qe = -1)), (Be = !0));
          var N = q;
          try {
            for (qe(D), ne = p(W); ne !== null && (!(ne.expirationTime > D) || (E && !Yt()));) {
              var c = ne.callback;
              if (typeof c == "function") {
                ((ne.callback = null), (q = ne.priorityLevel));
                var y = c(ne.expirationTime <= D);
                ((D = h.unstable_now()),
                  typeof y == "function" ? (ne.callback = y) : ne === p(W) && T(W),
                  qe(D));
              } else T(W);
              ne = p(W);
            }
            if (ne !== null) var F = !0;
            else {
              var A = p(ge);
              (A !== null && ie(ke, A.startTime - D), (F = !1));
            }
            return F;
          } finally {
            ((ne = null), (q = N), (Be = !1));
          }
        }
        var Ne = !1,
          Le = null,
          Qe = -1,
          Pt = 5,
          gt = -1;
        function Yt() {
          return !(h.unstable_now() - gt < Pt);
        }
        function ct() {
          if (Le !== null) {
            var E = h.unstable_now();
            gt = E;
            var D = !0;
            try {
              D = Le(!0, E);
            } finally {
              D ? Fe() : ((Ne = !1), (Le = null));
            }
          } else Ne = !1;
        }
        var Fe;
        if (typeof at == "function")
          Fe = function () {
            at(ct);
          };
        else if (typeof MessageChannel < "u") {
          var et = new MessageChannel(),
            ft = et.port2;
          ((et.port1.onmessage = ct),
            (Fe = function () {
              ft.postMessage(null);
            }));
        } else
          Fe = function () {
            Y(ct, 0);
          };
        function je(E) {
          ((Le = E), Ne || ((Ne = !0), Fe()));
        }
        function ie(E, D) {
          Qe = Y(function () {
            E(h.unstable_now());
          }, D);
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
            We || Be || ((We = !0), je(be));
          }),
          (h.unstable_forceFrameRate = function (E) {
            0 > E || 125 < E
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Pt = 0 < E ? Math.floor(1e3 / E) : 5);
          }),
          (h.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (h.unstable_getFirstCallbackNode = function () {
            return p(W);
          }),
          (h.unstable_next = function (E) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var D = 3;
                break;
              default:
                D = q;
            }
            var N = q;
            q = D;
            try {
              return E();
            } finally {
              q = N;
            }
          }),
          (h.unstable_pauseExecution = function () {}),
          (h.unstable_requestPaint = function () {}),
          (h.unstable_runWithPriority = function (E, D) {
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
            var N = q;
            q = E;
            try {
              return D();
            } finally {
              q = N;
            }
          }),
          (h.unstable_scheduleCallback = function (E, D, N) {
            var c = h.unstable_now();
            switch (
              (typeof N == "object" && N !== null
                ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? c + N : c))
                : (N = c),
              E)
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
              (y = N + y),
              (E = {
                id: me++,
                callback: D,
                priorityLevel: E,
                startTime: N,
                expirationTime: y,
                sortIndex: -1,
              }),
              N > c
                ? ((E.sortIndex = N),
                  S(ge, E),
                  p(W) === null &&
                    E === p(ge) &&
                    (b ? (yt(Qe), (Qe = -1)) : (b = !0), ie(ke, N - c)))
                : ((E.sortIndex = y), S(W, E), We || Be || ((We = !0), je(be))),
              E
            );
          }),
          (h.unstable_shouldYield = Yt),
          (h.unstable_wrapCallback = function (E) {
            var D = q;
            return function () {
              var N = q;
              q = D;
              try {
                return E.apply(this, arguments);
              } finally {
                q = N;
              }
            };
          }));
      })(Lu)),
    Lu
  );
}
var Da;
function Xf() {
  return (Da || ((Da = 1), (zu.exports = Yf())), zu.exports);
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
function Gf() {
  if (Ma) return Ie;
  Ma = 1;
  var h = ju(),
    S = Xf();
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
  var T = new Set(),
    j = {};
  function M(e, t) {
    (ae(e, t), ae(e + "Capture", t));
  }
  function ae(e, t) {
    for (j[e] = t, e = 0; e < t.length; e++) T.add(t[e]);
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
    ne = {};
  function q(e) {
    return W.call(ne, e) ? !0 : W.call(me, e) ? !1 : ge.test(e) ? (ne[e] = !0) : ((me[e] = !0), !1);
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
  function We(e, t, n, r) {
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
  function b(e, t, n, r, l, i, u) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u));
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
  function qe(e, t, n, r) {
    var l = Y.hasOwnProperty(t) ? Y[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (We(t, n, l, r) && (n = null),
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
  var ke = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for("react.element"),
    Ne = Symbol.for("react.portal"),
    Le = Symbol.for("react.fragment"),
    Qe = Symbol.for("react.strict_mode"),
    Pt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    et = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    je = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    E = Symbol.iterator;
  function D(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (E && e[E]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var N = Object.assign,
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
  var F = !1;
  function A(e, t) {
    if (!e || F) return "";
    F = !0;
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
      ((F = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function V(e) {
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
  function $(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case Ne:
        return "Portal";
      case Pt:
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
        case je:
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
  function xr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Du(e) {
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
  function kr(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rl(e, t) {
    var n = t.checked;
    return N({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Mu(e, t) {
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
  function Iu(e, t) {
    ((t = t.checked), t != null && qe(e, "checked", t, !1));
  }
  function Ol(e, t) {
    Iu(e, t);
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
  function Fu(e, t, n) {
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
    (t !== "number" || kr(e.ownerDocument) !== e) &&
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
  function Ml(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return N({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Uu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(p(92));
        if (Dn(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Q(n) };
  }
  function Au(e, t) {
    var n = Q(t.value),
      r = Q(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Hu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Vu(e) {
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
      ? Vu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Sr,
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
          Sr = Sr || document.createElement("div"),
            Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Sr.firstChild;
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
    Ya = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function (e) {
    Ya.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]));
    });
  });
  function Bu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (In.hasOwnProperty(e) && In[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Wu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Bu(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Xa = N(
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
      if (Xa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    cn = null,
    fn = null;
  function Qu(e) {
    if ((e = lr(e))) {
      if (typeof Vl != "function") throw Error(p(280));
      var t = e.stateNode;
      t && ((t = Qr(t)), Vl(e.stateNode, e.type, t));
    }
  }
  function Ku(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function Yu() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), Qu(e), t)) for (e = 0; e < t.length; e++) Qu(t[e]);
    }
  }
  function Xu(e, t) {
    return e(t);
  }
  function Gu() {}
  var $l = !1;
  function Zu(e, t, n) {
    if ($l) return e(t, n);
    $l = !0;
    try {
      return Xu(e, t, n);
    } finally {
      (($l = !1), (cn !== null || fn !== null) && (Gu(), Yu()));
    }
  }
  function Fn(e, t) {
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
    if (n && typeof n != "function") throw Error(p(231, t, typeof n));
    return n;
  }
  var Bl = !1;
  if (ce)
    try {
      var Un = {};
      (Object.defineProperty(Un, "passive", {
        get: function () {
          Bl = !0;
        },
      }),
        window.addEventListener("test", Un, Un),
        window.removeEventListener("test", Un, Un));
    } catch {
      Bl = !1;
    }
  function Ga(e, t, n, r, l, i, u, o, s) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (g) {
      this.onError(g);
    }
  }
  var An = !1,
    Er = null,
    _r = !1,
    Wl = null,
    Za = {
      onError: function (e) {
        ((An = !0), (Er = e));
      },
    };
  function Ja(e, t, n, r, l, i, u, o, s) {
    ((An = !1), (Er = null), Ga.apply(Za, arguments));
  }
  function qa(e, t, n, r, l, i, u, o, s) {
    if ((Ja.apply(this, arguments), An)) {
      if (An) {
        var m = Er;
        ((An = !1), (Er = null));
      } else throw Error(p(198));
      _r || ((_r = !0), (Wl = m));
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
  function Ju(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function qu(e) {
    if (Xt(e) !== e) throw Error(p(188));
  }
  function ba(e) {
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
          if (i === n) return (qu(l), e);
          if (i === r) return (qu(l), t);
          i = i.sibling;
        }
        throw Error(p(188));
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
          if (!u) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function bu(e) {
    return ((e = ba(e)), e !== null ? eo(e) : null);
  }
  function eo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = eo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var to = S.unstable_scheduleCallback,
    no = S.unstable_cancelCallback,
    ec = S.unstable_shouldYield,
    tc = S.unstable_requestPaint,
    oe = S.unstable_now,
    nc = S.unstable_getCurrentPriorityLevel,
    Ql = S.unstable_ImmediatePriority,
    ro = S.unstable_UserBlockingPriority,
    Cr = S.unstable_NormalPriority,
    rc = S.unstable_LowPriority,
    lo = S.unstable_IdlePriority,
    Nr = null,
    dt = null;
  function lc(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var tt = Math.clz32 ? Math.clz32 : oc,
    ic = Math.log,
    uc = Math.LN2;
  function oc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((ic(e) / uc) | 0)) | 0);
  }
  var Pr = 64,
    zr = 4194304;
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
  function Lr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var o = u & ~l;
      o !== 0 ? (r = Hn(o)) : ((i &= u), i !== 0 && (r = Hn(i)));
    } else ((u = n & ~l), u !== 0 ? (r = Hn(u)) : i !== 0 && (r = Hn(i)));
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
        ((n = 31 - tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function sc(e, t) {
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
  function ac(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
      0 < i;
    ) {
      var u = 31 - tt(i),
        o = 1 << u,
        s = l[u];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[u] = sc(o, t))
        : s <= t && (e.expiredLanes |= o),
        (i &= ~o));
    }
  }
  function Kl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function io() {
    var e = Pr;
    return ((Pr <<= 1), (Pr & 4194240) === 0 && (Pr = 64), e);
  }
  function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - tt(t)),
      (e[t] = n));
  }
  function cc(e, t) {
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
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - tt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var K = 0;
  function uo(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var oo,
    Gl,
    so,
    ao,
    co,
    Zl = !1,
    jr = [],
    zt = null,
    Lt = null,
    jt = null,
    $n = new Map(),
    Bn = new Map(),
    Tt = [],
    fc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function fo(e, t) {
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
        $n.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bn.delete(t.pointerId);
    }
  }
  function Wn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && Gl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function dc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Wn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Lt = Wn(Lt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((jt = Wn(jt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return ($n.set(i, Wn($n.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((i = l.pointerId), Bn.set(i, Wn(Bn.get(i) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function po(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ju(n)), t !== null)) {
            ((e.blockedOn = t),
              co(e.priority, function () {
                so(n);
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
      var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Al = r), n.target.dispatchEvent(r), (Al = null));
      } else return ((t = lr(n)), t !== null && Gl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function mo(e, t, n) {
    Tr(e) && n.delete(t);
  }
  function pc() {
    ((Zl = !1),
      zt !== null && Tr(zt) && (zt = null),
      Lt !== null && Tr(Lt) && (Lt = null),
      jt !== null && Tr(jt) && (jt = null),
      $n.forEach(mo),
      Bn.forEach(mo));
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zl || ((Zl = !0), S.unstable_scheduleCallback(S.unstable_NormalPriority, pc)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < jr.length) {
      Qn(jr[0], e);
      for (var n = 1; n < jr.length; n++) {
        var r = jr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && Qn(zt, e),
        Lt !== null && Qn(Lt, e),
        jt !== null && Qn(jt, e),
        $n.forEach(t),
        Bn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null);)
      (po(n), n.blockedOn === null && Tt.shift());
  }
  var dn = ke.ReactCurrentBatchConfig,
    Rr = !0;
  function mc(e, t, n, r) {
    var l = K,
      i = dn.transition;
    dn.transition = null;
    try {
      ((K = 1), Jl(e, t, n, r));
    } finally {
      ((K = l), (dn.transition = i));
    }
  }
  function hc(e, t, n, r) {
    var l = K,
      i = dn.transition;
    dn.transition = null;
    try {
      ((K = 4), Jl(e, t, n, r));
    } finally {
      ((K = l), (dn.transition = i));
    }
  }
  function Jl(e, t, n, r) {
    if (Rr) {
      var l = ql(e, t, n, r);
      if (l === null) (hi(e, t, r, Or, n), fo(e, r));
      else if (dc(l, e, t, n, r)) r.stopPropagation();
      else if ((fo(e, r), t & 4 && -1 < fc.indexOf(e))) {
        for (; l !== null;) {
          var i = lr(l);
          if (
            (i !== null && oo(i), (i = ql(e, t, n, r)), i === null && hi(e, t, r, Or, n), i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else hi(e, t, r, null, n);
    }
  }
  var Or = null;
  function ql(e, t, n, r) {
    if (((Or = null), (e = Hl(r)), (e = Gt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ju(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Or = e), null);
  }
  function ho(e) {
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
        switch (nc()) {
          case Ql:
            return 1;
          case ro:
            return 4;
          case Cr:
          case rc:
            return 16;
          case lo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rt = null,
    bl = null,
    Dr = null;
  function vo() {
    if (Dr) return Dr;
    var e,
      t = bl,
      n = t.length,
      r,
      l = "value" in Rt ? Rt.value : Rt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
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
  function Ir() {
    return !0;
  }
  function yo() {
    return !1;
  }
  function Ae(e) {
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
          ? Ir
          : yo),
        (this.isPropagationStopped = yo),
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
            (this.isDefaultPrevented = Ir));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ir));
        },
        persist: function () {},
        isPersistent: Ir,
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
    ei = Ae(pn),
    Yn = N({}, pn, { view: 0, detail: 0 }),
    vc = Ae(Yn),
    ti,
    ni,
    Xn,
    Fr = N({}, Yn, {
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
          : (e !== Xn &&
              (Xn && e.type === "mousemove"
                ? ((ti = e.screenX - Xn.screenX), (ni = e.screenY - Xn.screenY))
                : (ni = ti = 0),
              (Xn = e)),
            ti);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ni;
      },
    }),
    go = Ae(Fr),
    yc = N({}, Fr, { dataTransfer: 0 }),
    gc = Ae(yc),
    wc = N({}, Yn, { relatedTarget: 0 }),
    ri = Ae(wc),
    xc = N({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kc = Ae(xc),
    Sc = N({}, pn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ec = Ae(Sc),
    _c = N({}, pn, { data: 0 }),
    wo = Ae(_c),
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
    Nc = {
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
    Pc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function zc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Pc[e]) ? !!t[e] : !1;
  }
  function li() {
    return zc;
  }
  var Lc = N({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = Cc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Mr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Nc[e.keyCode] || "Unidentified"
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
    jc = Ae(Lc),
    Tc = N({}, Fr, {
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
    xo = Ae(Tc),
    Rc = N({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: li,
    }),
    Oc = Ae(Rc),
    Dc = N({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mc = Ae(Dc),
    Ic = N({}, Fr, {
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
    Fc = Ae(Ic),
    Uc = [9, 13, 27, 32],
    ii = ce && "CompositionEvent" in window,
    Gn = null;
  ce && "documentMode" in document && (Gn = document.documentMode);
  var Ac = ce && "TextEvent" in window && !Gn,
    ko = ce && (!ii || (Gn && 8 < Gn && 11 >= Gn)),
    So = " ",
    Eo = !1;
  function _o(e, t) {
    switch (e) {
      case "keyup":
        return Uc.indexOf(t.keyCode) !== -1;
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
  var mn = !1;
  function Hc(e, t) {
    switch (e) {
      case "compositionend":
        return Co(t);
      case "keypress":
        return t.which !== 32 ? null : ((Eo = !0), So);
      case "textInput":
        return ((e = t.data), e === So && Eo ? null : e);
      default:
        return null;
    }
  }
  function Vc(e, t) {
    if (mn)
      return e === "compositionend" || (!ii && _o(e, t))
        ? ((e = vo()), (Dr = bl = Rt = null), (mn = !1), e)
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
        return ko && t.locale !== "ko" ? null : t.data;
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
  function No(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!$c[e.type] : t === "textarea";
  }
  function Po(e, t, n, r) {
    (Ku(r),
      (t = $r(t, "onChange")),
      0 < t.length &&
        ((n = new ei("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Zn = null,
    Jn = null;
  function Bc(e) {
    Qo(e, 0);
  }
  function Ur(e) {
    var t = wn(e);
    if (Du(t)) return e;
  }
  function Wc(e, t) {
    if (e === "change") return t;
  }
  var zo = !1;
  if (ce) {
    var ui;
    if (ce) {
      var oi = "oninput" in document;
      if (!oi) {
        var Lo = document.createElement("div");
        (Lo.setAttribute("oninput", "return;"), (oi = typeof Lo.oninput == "function"));
      }
      ui = oi;
    } else ui = !1;
    zo = ui && (!document.documentMode || 9 < document.documentMode);
  }
  function jo() {
    Zn && (Zn.detachEvent("onpropertychange", To), (Jn = Zn = null));
  }
  function To(e) {
    if (e.propertyName === "value" && Ur(Jn)) {
      var t = [];
      (Po(t, Jn, e, Hl(e)), Zu(Bc, t));
    }
  }
  function Qc(e, t, n) {
    e === "focusin"
      ? (jo(), (Zn = t), (Jn = n), Zn.attachEvent("onpropertychange", To))
      : e === "focusout" && jo();
  }
  function Kc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ur(Jn);
  }
  function Yc(e, t) {
    if (e === "click") return Ur(t);
  }
  function Xc(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function Gc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : Gc;
  function qn(e, t) {
    if (nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!W.call(t, l) || !nt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ro(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Oo(e, t) {
    var n = Ro(e);
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
      n = Ro(n);
    }
  }
  function Do(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Do(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Mo() {
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
  function Zc(e) {
    var t = Mo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Do(n.ownerDocument.documentElement, n)) {
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
            (l = Oo(n, i)));
          var u = Oo(n, r);
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
  var Jc = ce && "documentMode" in document && 11 >= document.documentMode,
    hn = null,
    ai = null,
    bn = null,
    ci = !1;
  function Io(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ci ||
      hn == null ||
      hn !== kr(r) ||
      ((r = hn),
      "selectionStart" in r && si(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (bn && qn(bn, r)) ||
        ((bn = r),
        (r = $r(ai, "onSelect")),
        0 < r.length &&
          ((t = new ei("onSelect", "select", null, t, n)),
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
    fi = {},
    Fo = {};
  ce &&
    ((Fo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vn.animationend.animation,
      delete vn.animationiteration.animation,
      delete vn.animationstart.animation),
    "TransitionEvent" in window || delete vn.transitionend.transition);
  function Hr(e) {
    if (fi[e]) return fi[e];
    if (!vn[e]) return e;
    var t = vn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Fo) return (fi[e] = t[n]);
    return e;
  }
  var Uo = Hr("animationend"),
    Ao = Hr("animationiteration"),
    Ho = Hr("animationstart"),
    Vo = Hr("transitionend"),
    $o = new Map(),
    Bo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ot(e, t) {
    ($o.set(e, t), M(t, [e]));
  }
  for (var di = 0; di < Bo.length; di++) {
    var pi = Bo[di],
      qc = pi.toLowerCase(),
      bc = pi[0].toUpperCase() + pi.slice(1);
    Ot(qc, "on" + bc);
  }
  (Ot(Uo, "onAnimationEnd"),
    Ot(Ao, "onAnimationIteration"),
    Ot(Ho, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(Vo, "onTransitionEnd"),
    ae("onMouseEnter", ["mouseout", "mouseover"]),
    ae("onMouseLeave", ["mouseout", "mouseover"]),
    ae("onPointerEnter", ["pointerout", "pointerover"]),
    ae("onPointerLeave", ["pointerout", "pointerover"]),
    M("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    M(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    M("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    M("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    M(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    M(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    ef = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
  function Wo(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), qa(r, t, void 0, e), (e.currentTarget = null));
  }
  function Qo(e, t) {
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
            (Wo(l, o, m), (i = s));
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
            (Wo(l, o, m), (i = s));
          }
      }
    }
    if (_r) throw ((e = Wl), (_r = !1), (Wl = null), e);
  }
  function Z(e, t) {
    var n = t[ki];
    n === void 0 && (n = t[ki] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ko(t, e, 2, !1), n.add(r));
  }
  function mi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ko(n, e, r, t));
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Vr]) {
      ((e[Vr] = !0),
        T.forEach(function (n) {
          n !== "selectionchange" && (ef.has(n) || mi(n, !1, e), mi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || ((t[Vr] = !0), mi("selectionchange", !1, t));
    }
  }
  function Ko(e, t, n, r) {
    switch (ho(t)) {
      case 1:
        var l = mc;
        break;
      case 4:
        l = hc;
        break;
      default:
        l = Jl;
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
            if (((u = Gt(o)), u === null)) return;
            if (((s = u.tag), s === 5 || s === 6)) {
              r = i = u;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Zu(function () {
      var m = i,
        g = Hl(n),
        w = [];
      e: {
        var v = $o.get(e);
        if (v !== void 0) {
          var _ = ei,
            P = e;
          switch (e) {
            case "keypress":
              if (Mr(n) === 0) break e;
            case "keydown":
            case "keyup":
              _ = jc;
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
              _ = go;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = gc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = Oc;
              break;
            case Uo:
            case Ao:
            case Ho:
              _ = kc;
              break;
            case Vo:
              _ = Mc;
              break;
            case "scroll":
              _ = vc;
              break;
            case "wheel":
              _ = Fc;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = Ec;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = xo;
          }
          var z = (t & 4) !== 0,
            se = !z && e === "scroll",
            f = z ? (v !== null ? v + "Capture" : null) : v;
          z = [];
          for (var a = m, d; a !== null;) {
            d = a;
            var x = d.stateNode;
            if (
              (d.tag === 5 &&
                x !== null &&
                ((d = x), f !== null && ((x = Fn(a, f)), x != null && z.push(nr(a, x, d)))),
              se)
            )
              break;
            a = a.return;
          }
          0 < z.length && ((v = new _(v, P, null, n, g)), w.push({ event: v, listeners: z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (_ = e === "mouseout" || e === "pointerout"),
            v && n !== Al && (P = n.relatedTarget || n.fromElement) && (Gt(P) || P[wt]))
          )
            break e;
          if (
            (_ || v) &&
            ((v =
              g.window === g
                ? g
                : (v = g.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            _
              ? ((P = n.relatedTarget || n.toElement),
                (_ = m),
                (P = P ? Gt(P) : null),
                P !== null &&
                  ((se = Xt(P)), P !== se || (P.tag !== 5 && P.tag !== 6)) &&
                  (P = null))
              : ((_ = null), (P = m)),
            _ !== P)
          ) {
            if (
              ((z = go),
              (x = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((z = xo), (x = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (se = _ == null ? v : wn(_)),
              (d = P == null ? v : wn(P)),
              (v = new z(x, a + "leave", _, n, g)),
              (v.target = se),
              (v.relatedTarget = d),
              (x = null),
              Gt(g) === m &&
                ((z = new z(f, a + "enter", P, n, g)),
                (z.target = d),
                (z.relatedTarget = se),
                (x = z)),
              (se = x),
              _ && P)
            )
              t: {
                for (z = _, f = P, a = 0, d = z; d; d = yn(d)) a++;
                for (d = 0, x = f; x; x = yn(x)) d++;
                for (; 0 < a - d;) ((z = yn(z)), a--);
                for (; 0 < d - a;) ((f = yn(f)), d--);
                for (; a--;) {
                  if (z === f || (f !== null && z === f.alternate)) break t;
                  ((z = yn(z)), (f = yn(f)));
                }
                z = null;
              }
            else z = null;
            (_ !== null && Yo(w, v, _, z, !1), P !== null && se !== null && Yo(w, se, P, z, !0));
          }
        }
        e: {
          if (
            ((v = m ? wn(m) : window),
            (_ = v.nodeName && v.nodeName.toLowerCase()),
            _ === "select" || (_ === "input" && v.type === "file"))
          )
            var L = Wc;
          else if (No(v))
            if (zo) L = Xc;
            else {
              L = Kc;
              var R = Qc;
            }
          else
            (_ = v.nodeName) &&
              _.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (L = Yc);
          if (L && (L = L(e, m))) {
            Po(w, L, n, g);
            break e;
          }
          (R && R(e, v, m),
            e === "focusout" &&
              (R = v._wrapperState) &&
              R.controlled &&
              v.type === "number" &&
              Dl(v, "number", v.value));
        }
        switch (((R = m ? wn(m) : window), e)) {
          case "focusin":
            (No(R) || R.contentEditable === "true") && ((hn = R), (ai = m), (bn = null));
            break;
          case "focusout":
            bn = ai = hn = null;
            break;
          case "mousedown":
            ci = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ci = !1), Io(w, n, g));
            break;
          case "selectionchange":
            if (Jc) break;
          case "keydown":
          case "keyup":
            Io(w, n, g);
        }
        var O;
        if (ii)
          e: {
            switch (e) {
              case "compositionstart":
                var I = "onCompositionStart";
                break e;
              case "compositionend":
                I = "onCompositionEnd";
                break e;
              case "compositionupdate":
                I = "onCompositionUpdate";
                break e;
            }
            I = void 0;
          }
        else
          mn
            ? _o(e, n) && (I = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
        (I &&
          (ko &&
            n.locale !== "ko" &&
            (mn || I !== "onCompositionStart"
              ? I === "onCompositionEnd" && mn && (O = vo())
              : ((Rt = g), (bl = "value" in Rt ? Rt.value : Rt.textContent), (mn = !0))),
          (R = $r(m, I)),
          0 < R.length &&
            ((I = new wo(I, e, null, n, g)),
            w.push({ event: I, listeners: R }),
            O ? (I.data = O) : ((O = Co(n)), O !== null && (I.data = O)))),
          (O = Ac ? Hc(e, n) : Vc(e, n)) &&
            ((m = $r(m, "onBeforeInput")),
            0 < m.length &&
              ((g = new wo("onBeforeInput", "beforeinput", null, n, g)),
              w.push({ event: g, listeners: m }),
              (g.data = O))));
      }
      Qo(w, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function $r(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Fn(e, n)),
        i != null && r.unshift(nr(e, i, l)),
        (i = Fn(e, t)),
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
  function Yo(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r;) {
      var o = n,
        s = o.alternate,
        m = o.stateNode;
      if (s !== null && s === r) break;
      (o.tag === 5 &&
        m !== null &&
        ((o = m),
        l
          ? ((s = Fn(n, i)), s != null && u.unshift(nr(n, s, o)))
          : l || ((s = Fn(n, i)), s != null && u.push(nr(n, s, o)))),
        (n = n.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var tf = /\r\n?/g,
    nf = /\u0000|\uFFFD/g;
  function Xo(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        tf,
        `
`,
      )
      .replace(nf, "");
  }
  function Br(e, t, n) {
    if (((t = Xo(t)), Xo(e) !== t && n)) throw Error(p(425));
  }
  function Wr() {}
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
    rf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Go = typeof Promise == "function" ? Promise : void 0,
    lf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Go < "u"
          ? function (e) {
              return Go.resolve(null).then(e).catch(uf);
            }
          : wi;
  function uf(e) {
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
  function Zo(e) {
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
    rr = "__reactProps$" + gn,
    wt = "__reactContainer$" + gn,
    ki = "__reactEvents$" + gn,
    of = "__reactListeners$" + gn,
    sf = "__reactHandles$" + gn;
  function Gt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[wt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Zo(e); e !== null;) {
            if ((n = e[pt])) return n;
            e = Zo(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function lr(e) {
    return (
      (e = e[pt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var Si = [],
    xn = -1;
  function Mt(e) {
    return { current: e };
  }
  function J(e) {
    0 > xn || ((e.current = Si[xn]), (Si[xn] = null), xn--);
  }
  function G(e, t) {
    (xn++, (Si[xn] = e.current), (e.current = t));
  }
  var It = {},
    Se = Mt(It),
    Te = Mt(!1),
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
  function Kr() {
    (J(Te), J(Se));
  }
  function Jo(e, t, n) {
    if (Se.current !== It) throw Error(p(168));
    (G(Se, t), G(Te, n));
  }
  function qo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, X(e) || "Unknown", l));
    return N({}, n, r);
  }
  function Yr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
      (Zt = Se.current),
      G(Se, e),
      G(Te, Te.current),
      !0
    );
  }
  function bo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    (n
      ? ((e = qo(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        J(Te),
        J(Se),
        G(Se, e))
      : J(Te),
      G(Te, n));
  }
  var xt = null,
    Xr = !1,
    Ei = !1;
  function es(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  function af(e) {
    ((Xr = !0), es(e));
  }
  function Ft() {
    if (!Ei && xt !== null) {
      Ei = !0;
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
        throw (xt !== null && (xt = xt.slice(e + 1)), to(Ql, Ft), l);
      } finally {
        ((K = t), (Ei = !1));
      }
    }
    return null;
  }
  var Sn = [],
    En = 0,
    Gr = null,
    Zr = 0,
    Ke = [],
    Ye = 0,
    Jt = null,
    kt = 1,
    St = "";
  function qt(e, t) {
    ((Sn[En++] = Zr), (Sn[En++] = Gr), (Gr = e), (Zr = t));
  }
  function ts(e, t, n) {
    ((Ke[Ye++] = kt), (Ke[Ye++] = St), (Ke[Ye++] = Jt), (Jt = e));
    var r = kt;
    e = St;
    var l = 32 - tt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - tt(t) + l;
    if (30 < i) {
      var u = l - (l % 5);
      ((i = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (kt = (1 << (32 - tt(t) + l)) | (n << l) | r),
        (St = i + e));
    } else ((kt = (1 << i) | (n << l) | r), (St = e));
  }
  function _i(e) {
    e.return !== null && (qt(e, 1), ts(e, 1, 0));
  }
  function Ci(e) {
    for (; e === Gr;) ((Gr = Sn[--En]), (Sn[En] = null), (Zr = Sn[--En]), (Sn[En] = null));
    for (; e === Jt;)
      ((Jt = Ke[--Ye]),
        (Ke[Ye] = null),
        (St = Ke[--Ye]),
        (Ke[Ye] = null),
        (kt = Ke[--Ye]),
        (Ke[Ye] = null));
  }
  var He = null,
    Ve = null,
    te = !1,
    rt = null;
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
          t !== null ? ((e.stateNode = t), (He = e), (Ve = Dt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (He = e), (Ve = null), !0) : !1
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
              (Ve = null),
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
  function Pi(e) {
    if (te) {
      var t = Ve;
      if (t) {
        var n = t;
        if (!rs(e, t)) {
          if (Ni(e)) throw Error(p(418));
          t = Dt(n.nextSibling);
          var r = He;
          t && rs(e, t) ? ns(r, n) : ((e.flags = (e.flags & -4097) | 2), (te = !1), (He = e));
        }
      } else {
        if (Ni(e)) throw Error(p(418));
        ((e.flags = (e.flags & -4097) | 2), (te = !1), (He = e));
      }
    }
  }
  function ls(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    He = e;
  }
  function Jr(e) {
    if (e !== He) return !1;
    if (!te) return (ls(e), (te = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
      t && (t = Ve))
    ) {
      if (Ni(e)) throw (is(), Error(p(418)));
      for (; t;) (ns(e, t), (t = Dt(t.nextSibling)));
    }
    if ((ls(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ve = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else Ve = He ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function is() {
    for (var e = Ve; e;) e = Dt(e.nextSibling);
  }
  function _n() {
    ((Ve = He = null), (te = !1));
  }
  function zi(e) {
    rt === null ? (rt = [e]) : rt.push(e);
  }
  var cf = ke.ReactCurrentBatchConfig;
  function ir(e, t, n) {
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
          : ((t = function (u) {
              var o = l.refs;
              u === null ? delete o[i] : (o[i] = u);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function qr(e, t) {
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
  function os(e) {
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
    function u(f) {
      return (e && f.alternate === null && (f.flags |= 2), f);
    }
    function o(f, a, d, x) {
      return a === null || a.tag !== 6
        ? ((a = wu(d, f.mode, x)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, x) {
      var L = d.type;
      return L === Le
        ? g(f, a, d.props.children, x, d.key)
        : a !== null &&
            (a.elementType === L ||
              (typeof L == "object" && L !== null && L.$$typeof === je && us(L) === a.type))
          ? ((x = l(a, d.props)), (x.ref = ir(f, a, d)), (x.return = f), x)
          : ((x = Sl(d.type, d.key, d.props, null, f.mode, x)),
            (x.ref = ir(f, a, d)),
            (x.return = f),
            x);
    }
    function m(f, a, d, x) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = xu(d, f.mode, x)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function g(f, a, d, x, L) {
      return a === null || a.tag !== 7
        ? ((a = on(d, f.mode, x, L)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function w(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = wu("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return (
              (d = Sl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ir(f, null, a)),
              (d.return = f),
              d
            );
          case Ne:
            return ((a = xu(a, f.mode, d)), (a.return = f), a);
          case je:
            var x = a._init;
            return w(f, x(a._payload), d);
        }
        if (Dn(a) || D(a)) return ((a = on(a, f.mode, d, null)), (a.return = f), a);
        qr(f, a);
      }
      return null;
    }
    function v(f, a, d, x) {
      var L = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return L !== null ? null : o(f, a, "" + d, x);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === L ? s(f, a, d, x) : null;
          case Ne:
            return d.key === L ? m(f, a, d, x) : null;
          case je:
            return ((L = d._init), v(f, a, L(d._payload), x));
        }
        if (Dn(d) || D(d)) return L !== null ? null : g(f, a, d, x, null);
        qr(f, d);
      }
      return null;
    }
    function _(f, a, d, x, L) {
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return ((f = f.get(d) || null), o(a, f, "" + x, L));
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case be:
            return ((f = f.get(x.key === null ? d : x.key) || null), s(a, f, x, L));
          case Ne:
            return ((f = f.get(x.key === null ? d : x.key) || null), m(a, f, x, L));
          case je:
            var R = x._init;
            return _(f, a, d, R(x._payload), L);
        }
        if (Dn(x) || D(x)) return ((f = f.get(d) || null), g(a, f, x, L, null));
        qr(a, x);
      }
      return null;
    }
    function P(f, a, d, x) {
      for (var L = null, R = null, O = a, I = (a = 0), ye = null; O !== null && I < d.length; I++) {
        O.index > I ? ((ye = O), (O = null)) : (ye = O.sibling);
        var B = v(f, O, d[I], x);
        if (B === null) {
          O === null && (O = ye);
          break;
        }
        (e && O && B.alternate === null && t(f, O),
          (a = i(B, a, I)),
          R === null ? (L = B) : (R.sibling = B),
          (R = B),
          (O = ye));
      }
      if (I === d.length) return (n(f, O), te && qt(f, I), L);
      if (O === null) {
        for (; I < d.length; I++)
          ((O = w(f, d[I], x)),
            O !== null && ((a = i(O, a, I)), R === null ? (L = O) : (R.sibling = O), (R = O)));
        return (te && qt(f, I), L);
      }
      for (O = r(f, O); I < d.length; I++)
        ((ye = _(O, f, I, d[I], x)),
          ye !== null &&
            (e && ye.alternate !== null && O.delete(ye.key === null ? I : ye.key),
            (a = i(ye, a, I)),
            R === null ? (L = ye) : (R.sibling = ye),
            (R = ye)));
      return (
        e &&
          O.forEach(function (Kt) {
            return t(f, Kt);
          }),
        te && qt(f, I),
        L
      );
    }
    function z(f, a, d, x) {
      var L = D(d);
      if (typeof L != "function") throw Error(p(150));
      if (((d = L.call(d)), d == null)) throw Error(p(151));
      for (
        var R = (L = null), O = a, I = (a = 0), ye = null, B = d.next();
        O !== null && !B.done;
        I++, B = d.next()
      ) {
        O.index > I ? ((ye = O), (O = null)) : (ye = O.sibling);
        var Kt = v(f, O, B.value, x);
        if (Kt === null) {
          O === null && (O = ye);
          break;
        }
        (e && O && Kt.alternate === null && t(f, O),
          (a = i(Kt, a, I)),
          R === null ? (L = Kt) : (R.sibling = Kt),
          (R = Kt),
          (O = ye));
      }
      if (B.done) return (n(f, O), te && qt(f, I), L);
      if (O === null) {
        for (; !B.done; I++, B = d.next())
          ((B = w(f, B.value, x)),
            B !== null && ((a = i(B, a, I)), R === null ? (L = B) : (R.sibling = B), (R = B)));
        return (te && qt(f, I), L);
      }
      for (O = r(f, O); !B.done; I++, B = d.next())
        ((B = _(O, f, I, B.value, x)),
          B !== null &&
            (e && B.alternate !== null && O.delete(B.key === null ? I : B.key),
            (a = i(B, a, I)),
            R === null ? (L = B) : (R.sibling = B),
            (R = B)));
      return (
        e &&
          O.forEach(function (Bf) {
            return t(f, Bf);
          }),
        te && qt(f, I),
        L
      );
    }
    function se(f, a, d, x) {
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
              for (var L = d.key, R = a; R !== null;) {
                if (R.key === L) {
                  if (((L = d.type), L === Le)) {
                    if (R.tag === 7) {
                      (n(f, R.sibling), (a = l(R, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    R.elementType === L ||
                    (typeof L == "object" && L !== null && L.$$typeof === je && us(L) === R.type)
                  ) {
                    (n(f, R.sibling),
                      (a = l(R, d.props)),
                      (a.ref = ir(f, R, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, R);
                  break;
                } else t(f, R);
                R = R.sibling;
              }
              d.type === Le
                ? ((a = on(d.props.children, f.mode, x, d.key)), (a.return = f), (f = a))
                : ((x = Sl(d.type, d.key, d.props, null, f.mode, x)),
                  (x.ref = ir(f, a, d)),
                  (x.return = f),
                  (f = x));
            }
            return u(f);
          case Ne:
            e: {
              for (R = d.key; a !== null;) {
                if (a.key === R)
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
              ((a = xu(d, f.mode, x)), (a.return = f), (f = a));
            }
            return u(f);
          case je:
            return ((R = d._init), se(f, a, R(d._payload), x));
        }
        if (Dn(d)) return P(f, a, d, x);
        if (D(d)) return z(f, a, d, x);
        qr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = wu(d, f.mode, x)), (a.return = f), (f = a)),
          u(f))
        : n(f, a);
    }
    return se;
  }
  var Cn = os(!0),
    ss = os(!1),
    br = Mt(null),
    el = null,
    Nn = null,
    Li = null;
  function ji() {
    Li = Nn = el = null;
  }
  function Ti(e) {
    var t = br.current;
    (J(br), (e._currentValue = t));
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
  function Pn(e, t) {
    ((el = e),
      (Li = Nn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Oe = !0), (e.firstContext = null)));
  }
  function Xe(e) {
    var t = e._currentValue;
    if (Li !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
        if (el === null) throw Error(p(308));
        ((Nn = e), (el.dependencies = { lanes: 0, firstContext: e }));
      } else Nn = Nn.next = e;
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
  function _t(e, t) {
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
  function tl(e, t, n) {
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
  function nl(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
    var i = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        m = s.next;
      ((s.next = null), u === null ? (i = m) : (u.next = m), (u = s));
      var g = e.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (o = g.lastBaseUpdate),
        o !== u && (o === null ? (g.firstBaseUpdate = m) : (o.next = m), (g.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var w = l.baseState;
      ((u = 0), (g = m = s = null), (o = i));
      do {
        var v = o.lane,
          _ = o.eventTime;
        if ((r & v) === v) {
          g !== null &&
            (g = g.next =
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
              z = o;
            switch (((v = t), (_ = n), z.tag)) {
              case 1:
                if (((P = z.payload), typeof P == "function")) {
                  w = P.call(_, w, v);
                  break e;
                }
                w = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = z.payload), (v = typeof P == "function" ? P.call(_, w, v) : P), v == null)
                )
                  break e;
                w = N({}, w, v);
                break e;
              case 2:
                Ut = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64), (v = l.effects), v === null ? (l.effects = [o]) : v.push(o));
        } else
          ((_ = {
            eventTime: _,
            lane: v,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            g === null ? ((m = g = _), (s = w)) : (g = g.next = _),
            (u |= v));
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
        (g === null && (s = w),
        (l.baseState = s),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = g),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((u |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((nn |= u), (e.lanes = u), (e.memoizedState = w));
    }
  }
  function ds(e, t, n) {
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
    mt = Mt(ur),
    or = Mt(ur),
    sr = Mt(ur);
  function en(e) {
    if (e === ur) throw Error(p(174));
    return e;
  }
  function Mi(e, t) {
    switch ((G(sr, t), G(or, e), G(mt, ur), (e = t.nodeType), e)) {
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
    (J(mt), G(mt, t));
  }
  function zn() {
    (J(mt), J(or), J(sr));
  }
  function ps(e) {
    en(sr.current);
    var t = en(mt.current),
      n = Il(t, e.type);
    t !== n && (G(or, e), G(mt, n));
  }
  function Ii(e) {
    or.current === e && (J(mt), J(or));
  }
  var re = Mt(0);
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
  function Ui() {
    for (var e = 0; e < Fi.length; e++) Fi[e]._workInProgressVersionPrimary = null;
    Fi.length = 0;
  }
  var ll = ke.ReactCurrentDispatcher,
    Ai = ke.ReactCurrentBatchConfig,
    tn = 0,
    le = null,
    de = null,
    he = null,
    il = !1,
    ar = !1,
    cr = 0,
    ff = 0;
  function Ee() {
    throw Error(p(321));
  }
  function Hi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
    return !0;
  }
  function Vi(e, t, n, r, l, i) {
    if (
      ((tn = i),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? hf : vf),
      (e = n(r, l)),
      ar)
    ) {
      i = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= i)) throw Error(p(301));
        ((i += 1), (he = de = null), (t.updateQueue = null), (ll.current = yf), (e = n(r, l)));
      } while (ar);
    }
    if (
      ((ll.current = sl),
      (t = de !== null && de.next !== null),
      (tn = 0),
      (he = de = le = null),
      (il = !1),
      t)
    )
      throw Error(p(300));
    return e;
  }
  function $i() {
    var e = cr !== 0;
    return ((cr = 0), e);
  }
  function ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (he === null ? (le.memoizedState = he = e) : (he = he.next = e), he);
  }
  function Ge() {
    if (de === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var t = he === null ? le.memoizedState : he.next;
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
        he === null ? (le.memoizedState = he = e) : (he = he.next = e));
    }
    return he;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bi(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = de,
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
        var g = m.lane;
        if ((tn & g) === g)
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
          var w = {
            lane: g,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          };
          (s === null ? ((o = s = w), (u = r)) : (s = s.next = w), (le.lanes |= g), (nn |= g));
        }
        m = m.next;
      } while (m !== null && m !== i);
      (s === null ? (u = r) : (s.next = o),
        nt(r, t.memoizedState) || (Oe = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (le.lanes |= i), (nn |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Wi(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do ((i = e(i, u.action)), (u = u.next));
      while (u !== l);
      (nt(i, t.memoizedState) || (Oe = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function ms() {}
  function hs(e, t) {
    var n = le,
      r = Ge(),
      l = t(),
      i = !nt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Oe = !0)),
      (r = r.queue),
      Qi(gs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), dr(9, ys.bind(null, n, r, l, t), void 0, null), ve === null))
        throw Error(p(349));
      (tn & 30) !== 0 || vs(n, t, l);
    }
    return l;
  }
  function vs(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.stores = [e]))
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
      return !nt(e, n);
    } catch {
      return !0;
    }
  }
  function xs(e) {
    var t = Et(e, 1);
    t !== null && ot(t, e, 1, -1);
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
        lastRenderedReducer: fr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = mf.bind(null, le, e)),
      [t.memoizedState, e]
    );
  }
  function dr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ss() {
    return Ge().memoizedState;
  }
  function ul(e, t, n, r) {
    var l = ht();
    ((le.flags |= e), (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ol(e, t, n, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (de !== null) {
      var u = de.memoizedState;
      if (((i = u.destroy), r !== null && Hi(r, u.deps))) {
        l.memoizedState = dr(t, n, i, r);
        return;
      }
    }
    ((le.flags |= e), (l.memoizedState = dr(1 | t, n, i, r)));
  }
  function Es(e, t) {
    return ul(8390656, 8, e, t);
  }
  function Qi(e, t) {
    return ol(2048, 8, e, t);
  }
  function _s(e, t) {
    return ol(4, 2, e, t);
  }
  function Cs(e, t) {
    return ol(4, 4, e, t);
  }
  function Ns(e, t) {
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
    return ((n = n != null ? n.concat([e]) : null), ol(4, 4, Ns.bind(null, t, e), n));
  }
  function Ki() {}
  function zs(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Hi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ls(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Hi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function js(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n))
      : (nt(n, t) || ((n = io()), (le.lanes |= n), (nn |= n), (e.baseState = !0)), t);
  }
  function df(e, t) {
    var n = K;
    ((K = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Ai.transition;
    Ai.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((K = n), (Ai.transition = r));
    }
  }
  function Ts() {
    return Ge().memoizedState;
  }
  function pf(e, t, n) {
    var r = Bt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Rs(e)))
      Os(t, n);
    else if (((n = as(e, t, n, r)), n !== null)) {
      var l = ze();
      (ot(n, e, r, l), Ds(n, t, r));
    }
  }
  function mf(e, t, n) {
    var r = Bt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Rs(e)) Os(t, l);
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
          if (((l.hasEagerState = !0), (l.eagerState = o), nt(o, u))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), Oi(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = as(e, t, l, r)), n !== null && ((l = ze()), ot(n, e, r, l), Ds(n, t, r)));
    }
  }
  function Rs(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function Os(e, t) {
    ar = il = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Ds(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
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
    hf = {
      readContext: Xe,
      useCallback: function (e, t) {
        return ((ht().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Xe,
      useEffect: Es,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), ul(4194308, 4, Ns.bind(null, t, e), n));
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
          (e = e.dispatch = pf.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ks,
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = ks(!1),
          t = e[0];
        return ((e = df.bind(null, e[1])), (ht().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          l = ht();
        if (te) {
          if (n === void 0) throw Error(p(407));
          n = n();
        } else {
          if (((n = t()), ve === null)) throw Error(p(349));
          (tn & 30) !== 0 || vs(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Es(gs.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          dr(9, ys.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = ht(),
          t = ve.identifierPrefix;
        if (te) {
          var n = St,
            r = kt;
          ((n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = cr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = ff++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    vf = {
      readContext: Xe,
      useCallback: zs,
      useContext: Xe,
      useEffect: Qi,
      useImperativeHandle: Ps,
      useInsertionEffect: _s,
      useLayoutEffect: Cs,
      useMemo: Ls,
      useReducer: Bi,
      useRef: Ss,
      useState: function () {
        return Bi(fr);
      },
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        var t = Ge();
        return js(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Bi(fr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: ms,
      useSyncExternalStore: hs,
      useId: Ts,
      unstable_isNewReconciler: !1,
    },
    yf = {
      readContext: Xe,
      useCallback: zs,
      useContext: Xe,
      useEffect: Qi,
      useImperativeHandle: Ps,
      useInsertionEffect: _s,
      useLayoutEffect: Cs,
      useMemo: Ls,
      useReducer: Wi,
      useRef: Ss,
      useState: function () {
        return Wi(fr);
      },
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        var t = Ge();
        return de === null ? (t.memoizedState = e) : js(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Wi(fr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: ms,
      useSyncExternalStore: hs,
      useId: Ts,
      unstable_isNewReconciler: !1,
    };
  function lt(e, t) {
    if (e && e.defaultProps) {
      ((t = N({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Yi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : N({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Bt(e),
        i = _t(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (ot(t, e, l, r), tl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Bt(e),
        i = _t(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (ot(t, e, l, r), tl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ze(),
        r = Bt(e),
        l = _t(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (ot(t, e, r, n), tl(t, e, r)));
    },
  };
  function Ms(e, t, n, r, l, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !qn(n, r) || !qn(l, i)
          : !0
    );
  }
  function Is(e, t, n) {
    var r = !1,
      l = It,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Xe(i))
        : ((l = Re(t) ? Zt : Se.current),
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
  function Fs(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null));
  }
  function Xi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Di(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Xe(i))
      : ((i = Re(t) ? Zt : Se.current), (l.context = kn(e, i))),
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
        t !== l.state && al.enqueueReplaceState(l, l.state, null),
        nl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Ln(e, t) {
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
  function Gi(e, t, n) {
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
  var gf = typeof WeakMap == "function" ? WeakMap : Map;
  function Us(e, t, n) {
    ((n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (vl || ((vl = !0), (fu = r)), Zi(e, t));
      }),
      n
    );
  }
  function As(e, t, n) {
    ((n = _t(-1, n)), (n.tag = 3));
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
            typeof r != "function" && (Vt === null ? (Vt = new Set([this])) : Vt.add(this)));
          var u = t.stack;
          this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
        }),
      n
    );
  }
  function Hs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new gf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Rf.bind(null, e, t, n)), t.then(e, e));
  }
  function Vs(e) {
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
              (n.alternate === null ? (n.tag = 17) : ((t = _t(-1, 1)), (t.tag = 2), At(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var wf = ke.ReactCurrentOwner,
    Oe = !1;
  function Pe(e, t, n, r) {
    t.child = e === null ? ss(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function Bs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Pn(t, l),
      (r = Vi(e, t, n, r, i, l)),
      (n = $i()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ct(e, t, l))
        : (te && n && _i(t), (t.flags |= 1), Pe(e, t, r, l), t.child)
    );
  }
  function Ws(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !gu(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Qs(e, t, i, r, l))
        : ((e = Sl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var u = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : qn), n(u, r) && e.ref === t.ref))
        return Ct(e, t, l);
    }
    return ((t.flags |= 1), (e = Qt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Qs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (qn(i, r) && e.ref === t.ref)
        if (((Oe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Oe = !0);
        else return ((t.lanes = e.lanes), Ct(e, t, l));
    }
    return Ji(e, t, n, r, l);
  }
  function Ks(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          G(Tn, $e),
          ($e |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            G(Tn, $e),
            ($e |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = i !== null ? i.baseLanes : n),
          G(Tn, $e),
          ($e |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        G(Tn, $e),
        ($e |= r));
    return (Pe(e, t, l, n), t.child);
  }
  function Ys(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ji(e, t, n, r, l) {
    var i = Re(n) ? Zt : Se.current;
    return (
      (i = kn(t, i)),
      Pn(t, l),
      (n = Vi(e, t, n, r, i, l)),
      (r = $i()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ct(e, t, l))
        : (te && r && _i(t), (t.flags |= 1), Pe(e, t, n, l), t.child)
    );
  }
  function Xs(e, t, n, r, l) {
    if (Re(n)) {
      var i = !0;
      Yr(t);
    } else i = !1;
    if ((Pn(t, l), t.stateNode === null)) (fl(e, t), Is(t, n, r), Xi(t, n, r, l), (r = !0));
    else if (e === null) {
      var u = t.stateNode,
        o = t.memoizedProps;
      u.props = o;
      var s = u.context,
        m = n.contextType;
      typeof m == "object" && m !== null
        ? (m = Xe(m))
        : ((m = Re(n) ? Zt : Se.current), (m = kn(t, m)));
      var g = n.getDerivedStateFromProps,
        w = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      (w ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((o !== r || s !== m) && Fs(t, u, r, m)),
        (Ut = !1));
      var v = t.memoizedState;
      ((u.state = v),
        nl(t, r, u, l),
        (s = t.memoizedState),
        o !== r || v !== s || Te.current || Ut
          ? (typeof g == "function" && (Yi(t, n, g, r), (s = t.memoizedState)),
            (o = Ut || Ms(t, n, o, r, v, s, m))
              ? (w ||
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
        cs(e, t),
        (o = t.memoizedProps),
        (m = t.type === t.elementType ? o : lt(t.type, o)),
        (u.props = m),
        (w = t.pendingProps),
        (v = u.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Xe(s))
          : ((s = Re(n) ? Zt : Se.current), (s = kn(t, s))));
      var _ = n.getDerivedStateFromProps;
      ((g = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((o !== w || v !== s) && Fs(t, u, r, s)),
        (Ut = !1),
        (v = t.memoizedState),
        (u.state = v),
        nl(t, r, u, l));
      var P = t.memoizedState;
      o !== w || v !== P || Te.current || Ut
        ? (typeof _ == "function" && (Yi(t, n, _, r), (P = t.memoizedState)),
          (m = Ut || Ms(t, n, m, r, v, P, s) || !1)
            ? (g ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, P, s),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, P, s)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = P)),
          (u.props = r),
          (u.state = P),
          (u.context = s),
          (r = m))
        : (typeof u.componentDidUpdate != "function" ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return qi(e, t, n, r, i, l);
  }
  function qi(e, t, n, r, l, i) {
    Ys(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return (l && bo(t, n, !1), Ct(e, t, i));
    ((r = t.stateNode), (wf.current = t));
    var o = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = Cn(t, e.child, null, i)), (t.child = Cn(t, null, o, i)))
        : Pe(e, t, o, i),
      (t.memoizedState = r.state),
      l && bo(t, n, !0),
      t.child
    );
  }
  function Gs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Jo(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Jo(e, t.context, !1),
      Mi(e, t.containerInfo));
  }
  function Zs(e, t, n, r, l) {
    return (_n(), zi(l), (t.flags |= 256), Pe(e, t, n, r), t.child);
  }
  var bi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function eu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = re.current,
      i = !1,
      u = (t.flags & 128) !== 0,
      o;
    if (
      ((o = u) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      G(re, l & 1),
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
                  : (i = El(u, r, 0, null)),
                (e = on(e, r, n, null)),
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
      return xf(e, t, u, r, o, l, n);
    if (i) {
      ((i = r.fallback), (u = t.mode), (l = e.child), (o = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (u & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (i = Qt(o, i)) : ((i = on(i, u, n, null)), (i.flags |= 2)),
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
  function tu(e, t) {
    return (
      (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function cl(e, t, n, r) {
    return (
      r !== null && zi(r),
      Cn(t, e.child, null, n),
      (e = tu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function xf(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Gi(Error(p(422)))), cl(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = El({ mode: "visible", children: r.children }, l, 0, null)),
            (i = on(i, l, u, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Cn(t, e.child, null, u),
            (t.child.memoizedState = eu(u)),
            (t.memoizedState = bi),
            i);
    if ((t.mode & 1) === 0) return cl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (i = Error(p(419))), (r = Gi(i, r, void 0)), cl(e, t, u, r));
    }
    if (((o = (u & e.childLanes) !== 0), Oe || o)) {
      if (((r = ve), r !== null)) {
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
          l !== 0 && l !== i.retryLane && ((i.retryLane = l), Et(e, l), ot(r, e, l, -1)));
      }
      return (yu(), (r = Gi(Error(p(421)))), cl(e, t, u, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Of.bind(null, e)), (l._reactRetry = t), null)
      : ((e = i.treeContext),
        (Ve = Dt(l.nextSibling)),
        (He = t),
        (te = !0),
        (rt = null),
        e !== null &&
          ((Ke[Ye++] = kt),
          (Ke[Ye++] = St),
          (Ke[Ye++] = Jt),
          (kt = e.id),
          (St = e.overflow),
          (Jt = t)),
        (t = tu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function qs(e, t, n) {
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
  function bs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Pe(e, t, r.children, n), (r = re.current), (r & 2) !== 0))
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
    if ((G(re, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && rl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            nu(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
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
  function fl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ct(e, t, n) {
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
  function kf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Gs(t), _n());
        break;
      case 5:
        ps(t);
        break;
      case 1:
        Re(t.type) && Yr(t);
        break;
      case 4:
        Mi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (G(br, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (G(re, re.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Js(e, t, n)
              : (G(re, re.current & 1), (e = Ct(e, t, n)), e !== null ? e.sibling : null);
        G(re, re.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return bs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          G(re, re.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Ks(e, t, n));
    }
    return Ct(e, t, n);
  }
  var ea, ru, ta, na;
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
    (ru = function () {}),
    (ta = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(mt.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = Rl(e, l)), (r = Rl(e, r)), (i = []));
            break;
          case "select":
            ((l = N({}, l, { value: void 0 })), (r = N({}, r, { value: void 0 })), (i = []));
            break;
          case "textarea":
            ((l = Ml(e, l)), (r = Ml(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
        }
        Fl(n, r);
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
                (j.hasOwnProperty(m) ? i || (i = []) : (i = i || []).push(m, null));
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
                    (j.hasOwnProperty(m)
                      ? (s != null && m === "onScroll" && Z("scroll", e), i || o === s || (i = []))
                      : (i = i || []).push(m, s));
        }
        n && (i = i || []).push("style", n);
        var m = i;
        (t.updateQueue = m) && (t.flags |= 4);
      }
    }),
    (na = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function pr(e, t) {
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
  function Sf(e, t, n) {
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
        return (Re(t.type) && Kr(), _e(t), null);
      case 3:
        return (
          (r = t.stateNode),
          zn(),
          J(Te),
          J(Se),
          Ui(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Jr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), rt !== null && (mu(rt), (rt = null)))),
          ru(e, t),
          _e(t),
          null
        );
      case 5:
        Ii(t);
        var l = en(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ta(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return (_e(t), null);
          }
          if (((e = en(mt.current)), Jr(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[pt] = t), (r[rr] = i), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < er.length; l++) Z(er[l], r);
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
                (Mu(r, i), Z("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }), Z("invalid", r));
                break;
              case "textarea":
                (Uu(r, i), Z("invalid", r));
            }
            (Fl(n, i), (l = null));
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
                  : j.hasOwnProperty(u) && o != null && u === "onScroll" && Z("scroll", r);
              }
            switch (n) {
              case "input":
                (xr(r), Fu(r, i, !0));
                break;
              case "textarea":
                (xr(r), Hu(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Wr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Vu(n)),
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
              (e[pt] = t),
              (e[rr] = r),
              ea(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((u = Ul(n, r)), n)) {
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
                  for (l = 0; l < er.length; l++) Z(er[l], e);
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
                  (Mu(e, r), (l = Rl(e, r)), Z("invalid", e));
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
                  (Uu(e, r), (l = Ml(e, r)), Z("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Fl(n, l), (o = l));
              for (i in o)
                if (o.hasOwnProperty(i)) {
                  var s = o[i];
                  i === "style"
                    ? Wu(e, s)
                    : i === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && $u(e, s))
                      : i === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Mn(e, s)
                          : typeof s == "number" && Mn(e, "" + s)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (j.hasOwnProperty(i)
                            ? s != null && i === "onScroll" && Z("scroll", e)
                            : s != null && qe(e, i, s, u));
                }
              switch (n) {
                case "input":
                  (xr(e), Fu(e, r, !1));
                  break;
                case "textarea":
                  (xr(e), Hu(e));
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
                  typeof l.onClick == "function" && (e.onclick = Wr);
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
        if (e && t.stateNode != null) na(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
          if (((n = en(sr.current)), en(mt.current), Jr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (i = r.nodeValue !== n) && ((e = He), e !== null))
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
              (r[pt] = t),
              (t.stateNode = r));
        }
        return (_e(t), null);
      case 13:
        if (
          (J(re),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && Ve !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (is(), _n(), (t.flags |= 98560), (i = !1));
          else if (((i = Jr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(p(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(p(317));
              i[pt] = t;
            } else (_n(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (_e(t), (i = !1));
          } else (rt !== null && (mu(rt), (rt = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (re.current & 1) !== 0 ? pe === 0 && (pe = 3) : yu())),
            t.updateQueue !== null && (t.flags |= 4),
            _e(t),
            null);
      case 4:
        return (zn(), ru(e, t), e === null && tr(t.stateNode.containerInfo), _e(t), null);
      case 10:
        return (Ti(t.type._context), _e(t), null);
      case 17:
        return (Re(t.type) && Kr(), _e(t), null);
      case 19:
        if ((J(re), (i = t.memoizedState), i === null)) return (_e(t), null);
        if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (r) pr(i, !1);
          else {
            if (pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((u = rl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      pr(i, !1),
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
                  return (G(re, (re.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              oe() > Rn &&
              ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = rl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(i, !0),
                i.tail === null && i.tailMode === "hidden" && !u.alternate && !te)
              )
                return (_e(t), null);
            } else
              2 * oe() - i.renderingStartTime > Rn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = i.last), n !== null ? (n.sibling = u) : (t.child = u), (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = oe()),
            (t.sibling = null),
            (n = re.current),
            G(re, r ? (n & 1) | 2 : n & 1),
            t)
          : (_e(t), null);
      case 22:
      case 23:
        return (
          vu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? ($e & 1073741824) !== 0 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function Ef(e, t) {
    switch ((Ci(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && Kr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          zn(),
          J(Te),
          J(Se),
          Ui(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Ii(t), null);
      case 13:
        if ((J(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(p(340));
          _n();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (J(re), null);
      case 4:
        return (zn(), null);
      case 10:
        return (Ti(t.type._context), null);
      case 22:
      case 23:
        return (vu(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    Ce = !1,
    _f = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;
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
  function lu(e, t, n) {
    try {
      n();
    } catch (r) {
      ue(e, t, r);
    }
  }
  var ra = !1;
  function Cf(e, t) {
    if (((vi = Rr), (e = Mo()), si(e))) {
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
              g = 0,
              w = e,
              v = null;
            t: for (;;) {
              for (
                var _;
                w !== n || (l !== 0 && w.nodeType !== 3) || (o = u + l),
                  w !== i || (r !== 0 && w.nodeType !== 3) || (s = u + r),
                  w.nodeType === 3 && (u += w.nodeValue.length),
                  (_ = w.firstChild) !== null;
              )
                ((v = w), (w = _));
              for (;;) {
                if (w === e) break t;
                if (
                  (v === n && ++m === l && (o = u),
                  v === i && ++g === r && (s = u),
                  (_ = w.nextSibling) !== null)
                )
                  break;
                ((w = v), (v = w.parentNode));
              }
              w = _;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (yi = { focusedElem: e, selectionRange: n }, Rr = !1, C = t; C !== null;)
      if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (C = e));
      else
        for (; C !== null;) {
          t = C;
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
                      se = P.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? z : lt(t.type, z),
                        se,
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
          } catch (x) {
            ue(t, t.return, x);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (C = e));
            break;
          }
          C = t.return;
        }
    return ((P = ra), (ra = !1), P);
  }
  function mr(e, t, n) {
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
  function la(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), la(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[pt], delete t[rr], delete t[ki], delete t[of], delete t[sf])),
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
  function ua(e) {
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
            n != null || t.onclick !== null || (t.onclick = Wr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (uu(e, t, n), e = e.sibling; e !== null;) (uu(e, t, n), (e = e.sibling));
  }
  function ou(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ou(e, t, n), e = e.sibling; e !== null;) (ou(e, t, n), (e = e.sibling));
  }
  var we = null,
    it = !1;
  function Ht(e, t, n) {
    for (n = n.child; n !== null;) (oa(e, t, n), (n = n.sibling));
  }
  function oa(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Nr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ce || jn(n, t);
      case 6:
        var r = we,
          l = it;
        ((we = null),
          Ht(e, t, n),
          (we = r),
          (it = l),
          we !== null &&
            (it
              ? ((e = we),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : we.removeChild(n.stateNode)));
        break;
      case 18:
        we !== null &&
          (it
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8 ? xi(e.parentNode, n) : e.nodeType === 1 && xi(e, n),
              Kn(e))
            : xi(we, n.stateNode));
        break;
      case 4:
        ((r = we),
          (l = it),
          (we = n.stateNode.containerInfo),
          (it = !0),
          Ht(e, t, n),
          (we = r),
          (it = l));
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
        Ht(e, t, n);
        break;
      case 1:
        if (!Ce && (jn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (o) {
            ue(n, t, o);
          }
        Ht(e, t, n);
        break;
      case 21:
        Ht(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ce = (r = Ce) || n.memoizedState !== null), Ht(e, t, n), (Ce = r))
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
      (n === null && (n = e.stateNode = new _f()),
        t.forEach(function (r) {
          var l = Df.bind(null, e, r);
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
            u = t,
            o = u;
          e: for (; o !== null;) {
            switch (o.tag) {
              case 5:
                ((we = o.stateNode), (it = !1));
                break e;
              case 3:
                ((we = o.stateNode.containerInfo), (it = !0));
                break e;
              case 4:
                ((we = o.stateNode.containerInfo), (it = !0));
                break e;
            }
            o = o.return;
          }
          if (we === null) throw Error(p(160));
          (oa(i, u, l), (we = null), (it = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (m) {
          ue(l, t, m);
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
            (mr(3, e, e.return), pl(3, e));
          } catch (z) {
            ue(e, e.return, z);
          }
          try {
            mr(5, e, e.return);
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
            Mn(l, "");
          } catch (z) {
            ue(e, e.return, z);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            u = n !== null ? n.memoizedProps : i,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === "input" && i.type === "radio" && i.name != null && Iu(l, i), Ul(o, u));
              var m = Ul(o, i);
              for (u = 0; u < s.length; u += 2) {
                var g = s[u],
                  w = s[u + 1];
                g === "style"
                  ? Wu(l, w)
                  : g === "dangerouslySetInnerHTML"
                    ? $u(l, w)
                    : g === "children"
                      ? Mn(l, w)
                      : qe(l, g, w, m);
              }
              switch (o) {
                case "input":
                  Ol(l, i);
                  break;
                case "textarea":
                  Au(l, i);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var _ = i.value;
                  _ != null
                    ? an(l, !!i.multiple, _, !1)
                    : v !== !!i.multiple &&
                      (i.defaultValue != null
                        ? an(l, !!i.multiple, i.defaultValue, !0)
                        : an(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[rr] = i;
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
            Kn(t.containerInfo);
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
            !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (cu = oe())),
          r & 4 && sa(e));
        break;
      case 22:
        if (
          ((g = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ce = (m = Ce) || g), ut(t, e), (Ce = m)) : ut(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null), (e.stateNode.isHidden = m) && !g && (e.mode & 1) !== 0)
          )
            for (C = e, g = e.child; g !== null;) {
              for (w = C = g; C !== null;) {
                switch (((v = C), (_ = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, v, v.return);
                    break;
                  case 1:
                    jn(v, v.return);
                    var P = v.stateNode;
                    if (typeof P.componentWillUnmount == "function") {
                      ((r = v), (n = v.return));
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
                    jn(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      da(w);
                      continue;
                    }
                }
                _ !== null ? ((_.return = v), (C = _)) : da(w);
              }
              g = g.sibling;
            }
          e: for (g = null, w = e; ;) {
            if (w.tag === 5) {
              if (g === null) {
                g = w;
                try {
                  ((l = w.stateNode),
                    m
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((o = w.stateNode),
                        (s = w.memoizedProps.style),
                        (u = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (o.style.display = Bu("display", u))));
                } catch (z) {
                  ue(e, e.return, z);
                }
              }
            } else if (w.tag === 6) {
              if (g === null)
                try {
                  w.stateNode.nodeValue = m ? "" : w.memoizedProps;
                } catch (z) {
                  ue(e, e.return, z);
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
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Mn(l, ""), (r.flags &= -33));
            var i = ua(e);
            ou(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              o = ua(e);
            uu(e, o, u);
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
  function Nf(e, t, n) {
    ((C = e), ca(e));
  }
  function ca(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null;) {
      var l = C,
        i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || dl;
        if (!u) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Ce;
          o = dl;
          var m = Ce;
          if (((dl = u), (Ce = s) && !m))
            for (C = l; C !== null;)
              ((u = C),
                (s = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? pa(l)
                  : s !== null
                    ? ((s.return = u), (C = s))
                    : pa(l));
          for (; i !== null;) ((C = i), ca(i), (i = i.sibling));
          ((C = l), (dl = o), (Ce = m));
        }
        fa(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), (C = i)) : fa(e);
    }
  }
  function fa(e) {
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
                Ce || pl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ce)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = t.updateQueue;
                i !== null && ds(t, i, r);
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
                  ds(t, u, n);
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
                    var g = m.memoizedState;
                    if (g !== null) {
                      var w = g.dehydrated;
                      w !== null && Kn(w);
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
          Ce || (t.flags & 512 && iu(t));
        } catch (v) {
          ue(t, t.return, v);
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
  function da(e) {
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
  function pa(e) {
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
              iu(t);
            } catch (s) {
              ue(t, i, s);
            }
            break;
          case 5:
            var u = t.return;
            try {
              iu(t);
            } catch (s) {
              ue(t, u, s);
            }
        }
      } catch (s) {
        ue(t, t.return, s);
      }
      if (t === e) {
        C = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        ((o.return = t.return), (C = o));
        break;
      }
      C = t.return;
    }
  }
  var Pf = Math.ceil,
    ml = ke.ReactCurrentDispatcher,
    su = ke.ReactCurrentOwner,
    Ze = ke.ReactCurrentBatchConfig,
    H = 0,
    ve = null,
    fe = null,
    xe = 0,
    $e = 0,
    Tn = Mt(0),
    pe = 0,
    hr = null,
    nn = 0,
    hl = 0,
    au = 0,
    vr = null,
    De = null,
    cu = 0,
    Rn = 1 / 0,
    Nt = null,
    vl = !1,
    fu = null,
    Vt = null,
    yl = !1,
    $t = null,
    gl = 0,
    yr = 0,
    du = null,
    wl = -1,
    xl = 0;
  function ze() {
    return (H & 6) !== 0 ? oe() : wl !== -1 ? wl : (wl = oe());
  }
  function Bt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (H & 2) !== 0 && xe !== 0
        ? xe & -xe
        : cf.transition !== null
          ? (xl === 0 && (xl = io()), xl)
          : ((e = K), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ho(e.type))), e);
  }
  function ot(e, t, n, r) {
    if (50 < yr) throw ((yr = 0), (du = null), Error(p(185)));
    (Vn(e, n, r),
      ((H & 2) === 0 || e !== ve) &&
        (e === ve && ((H & 2) === 0 && (hl |= n), pe === 4 && Wt(e, xe)),
        Me(e, r),
        n === 1 && H === 0 && (t.mode & 1) === 0 && ((Rn = oe() + 500), Xr && Ft())));
  }
  function Me(e, t) {
    var n = e.callbackNode;
    ac(e, t);
    var r = Lr(e, e === ve ? xe : 0);
    if (r === 0) (n !== null && no(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && no(n), t === 1))
        (e.tag === 0 ? af(ha.bind(null, e)) : es(ha.bind(null, e)),
          lf(function () {
            (H & 6) === 0 && Ft();
          }),
          (n = null));
      else {
        switch (uo(r)) {
          case 1:
            n = Ql;
            break;
          case 4:
            n = ro;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = lo;
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
    if (((wl = -1), (xl = 0), (H & 6) !== 0)) throw Error(p(327));
    var n = e.callbackNode;
    if (On() && e.callbackNode !== n) return null;
    var r = Lr(e, e === ve ? xe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = kl(e, r);
    else {
      t = r;
      var l = H;
      H |= 2;
      var i = ya();
      (ve !== e || xe !== t) && ((Nt = null), (Rn = oe() + 500), ln(e, t));
      do
        try {
          jf();
          break;
        } catch (o) {
          va(e, o);
        }
      while (!0);
      (ji(), (ml.current = i), (H = l), fe !== null ? (t = 0) : ((ve = null), (xe = 0), (t = pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (t = pu(e, l)))), t === 1))
        throw ((n = hr), ln(e, 0), Wt(e, r), Me(e, oe()), n);
      if (t === 6) Wt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !zf(l) &&
            ((t = kl(e, r)),
            t === 2 && ((i = Kl(e)), i !== 0 && ((r = i), (t = pu(e, i)))),
            t === 1))
        )
          throw ((n = hr), ln(e, 0), Wt(e, r), Me(e, oe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            un(e, De, Nt);
            break;
          case 3:
            if ((Wt(e, r), (r & 130023424) === r && ((t = cu + 500 - oe()), 10 < t))) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (ze(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = wi(un.bind(null, e, De, Nt), t);
              break;
            }
            un(e, De, Nt);
            break;
          case 4:
            if ((Wt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var u = 31 - tt(r);
              ((i = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~i));
            }
            if (
              ((r = l),
              (r = oe() - r),
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
                            : 1960 * Pf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = wi(un.bind(null, e, De, Nt), r);
              break;
            }
            un(e, De, Nt);
            break;
          case 5:
            un(e, De, Nt);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return (Me(e, oe()), e.callbackNode === n ? ma.bind(null, e) : null);
  }
  function pu(e, t) {
    var n = vr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = kl(e, t)),
      e !== 2 && ((t = De), (De = n), t !== null && mu(t)),
      e
    );
  }
  function mu(e) {
    De === null ? (De = e) : De.push.apply(De, e);
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
              if (!nt(i(), l)) return !1;
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
      t &= ~au, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - tt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ha(e) {
    if ((H & 6) !== 0) throw Error(p(327));
    On();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return (Me(e, oe()), null);
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Kl(e);
      r !== 0 && ((t = r), (n = pu(e, r)));
    }
    if (n === 1) throw ((n = hr), ln(e, 0), Wt(e, t), Me(e, oe()), n);
    if (n === 6) throw Error(p(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, De, Nt),
      Me(e, oe()),
      null
    );
  }
  function hu(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      ((H = n), H === 0 && ((Rn = oe() + 500), Xr && Ft()));
    }
  }
  function rn(e) {
    $t !== null && $t.tag === 0 && (H & 6) === 0 && On();
    var t = H;
    H |= 1;
    var n = Ze.transition,
      r = K;
    try {
      if (((Ze.transition = null), (K = 1), e)) return e();
    } finally {
      ((K = r), (Ze.transition = n), (H = t), (H & 6) === 0 && Ft());
    }
  }
  function vu() {
    (($e = Tn.current), J(Tn));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), rf(n)), fe !== null))
      for (n = fe.return; n !== null;) {
        var r = n;
        switch ((Ci(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Kr());
            break;
          case 3:
            (zn(), J(Te), J(Se), Ui());
            break;
          case 5:
            Ii(r);
            break;
          case 4:
            zn();
            break;
          case 13:
            J(re);
            break;
          case 19:
            J(re);
            break;
          case 10:
            Ti(r.type._context);
            break;
          case 22:
          case 23:
            vu();
        }
        n = n.return;
      }
    if (
      ((ve = e),
      (fe = e = Qt(e.current, null)),
      (xe = $e = t),
      (pe = 0),
      (hr = null),
      (au = hl = nn = 0),
      (De = vr = null),
      bt !== null)
    ) {
      for (t = 0; t < bt.length; t++)
        if (((n = bt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var u = i.next;
            ((i.next = l), (r.next = u));
          }
          n.pending = r;
        }
      bt = null;
    }
    return e;
  }
  function va(e, t) {
    do {
      var n = fe;
      try {
        if ((ji(), (ll.current = sl), il)) {
          for (var r = le.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          il = !1;
        }
        if (
          ((tn = 0),
          (he = de = le = null),
          (ar = !1),
          (cr = 0),
          (su.current = null),
          n === null || n.return === null)
        ) {
          ((pe = 1), (hr = t), (fe = null));
          break;
        }
        e: {
          var i = e,
            u = n.return,
            o = n,
            s = t;
          if (
            ((t = xe),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var m = s,
              g = o,
              w = g.tag;
            if ((g.mode & 1) === 0 && (w === 0 || w === 11 || w === 15)) {
              var v = g.alternate;
              v
                ? ((g.updateQueue = v.updateQueue),
                  (g.memoizedState = v.memoizedState),
                  (g.lanes = v.lanes))
                : ((g.updateQueue = null), (g.memoizedState = null));
            }
            var _ = Vs(u);
            if (_ !== null) {
              ((_.flags &= -257), $s(_, u, o, i, t), _.mode & 1 && Hs(i, m, t), (t = _), (s = m));
              var P = t.updateQueue;
              if (P === null) {
                var z = new Set();
                (z.add(s), (t.updateQueue = z));
              } else P.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Hs(i, m, t), yu());
                break e;
              }
              s = Error(p(426));
            }
          } else if (te && o.mode & 1) {
            var se = Vs(u);
            if (se !== null) {
              ((se.flags & 65536) === 0 && (se.flags |= 256), $s(se, u, o, i, t), zi(Ln(s, o)));
              break e;
            }
          }
          ((i = s = Ln(s, o)),
            pe !== 4 && (pe = 2),
            vr === null ? (vr = [i]) : vr.push(i),
            (i = u));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var f = Us(i, s, t);
                fs(i, f);
                break e;
              case 1:
                o = s;
                var a = i.type,
                  d = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Vt === null || !Vt.has(d))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var x = As(i, o, t);
                  fs(i, x);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        wa(n);
      } catch (L) {
        ((t = L), fe === n && n !== null && (fe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ya() {
    var e = ml.current;
    return ((ml.current = sl), e === null ? sl : e);
  }
  function yu() {
    ((pe === 0 || pe === 3 || pe === 2) && (pe = 4),
      ve === null || ((nn & 268435455) === 0 && (hl & 268435455) === 0) || Wt(ve, xe));
  }
  function kl(e, t) {
    var n = H;
    H |= 2;
    var r = ya();
    (ve !== e || xe !== t) && ((Nt = null), ln(e, t));
    do
      try {
        Lf();
        break;
      } catch (l) {
        va(e, l);
      }
    while (!0);
    if ((ji(), (H = n), (ml.current = r), fe !== null)) throw Error(p(261));
    return ((ve = null), (xe = 0), pe);
  }
  function Lf() {
    for (; fe !== null;) ga(fe);
  }
  function jf() {
    for (; fe !== null && !ec();) ga(fe);
  }
  function ga(e) {
    var t = Sa(e.alternate, e, $e);
    ((e.memoizedProps = e.pendingProps), t === null ? wa(e) : (fe = t), (su.current = null));
  }
  function wa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Sf(n, t, $e)), n !== null)) {
          fe = n;
          return;
        }
      } else {
        if (((n = Ef(n, t)), n !== null)) {
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
  function un(e, t, n) {
    var r = K,
      l = Ze.transition;
    try {
      ((Ze.transition = null), (K = 1), Tf(e, t, n, r));
    } finally {
      ((Ze.transition = l), (K = r));
    }
    return null;
  }
  function Tf(e, t, n, r) {
    do On();
    while ($t !== null);
    if ((H & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(p(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (cc(e, i),
      e === ve && ((fe = ve = null), (xe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        yl ||
        ((yl = !0),
        Ea(Cr, function () {
          return (On(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = Ze.transition), (Ze.transition = null));
      var u = K;
      K = 1;
      var o = H;
      ((H |= 4),
        (su.current = null),
        Cf(e, n),
        aa(n, e),
        Zc(yi),
        (Rr = !!vi),
        (yi = vi = null),
        (e.current = n),
        Nf(n),
        tc(),
        (H = o),
        (K = u),
        (Ze.transition = i));
    } else e.current = n;
    if (
      (yl && ((yl = !1), ($t = e), (gl = l)),
      (i = e.pendingLanes),
      i === 0 && (Vt = null),
      lc(n.stateNode),
      Me(e, oe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (vl) throw ((vl = !1), (e = fu), (fu = null), e);
    return (
      (gl & 1) !== 0 && e.tag !== 0 && On(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === du ? yr++ : ((yr = 0), (du = e))) : (yr = 0),
      Ft(),
      null
    );
  }
  function On() {
    if ($t !== null) {
      var e = uo(gl),
        t = Ze.transition,
        n = K;
      try {
        if (((Ze.transition = null), (K = 16 > e ? 16 : e), $t === null)) var r = !1;
        else {
          if (((e = $t), ($t = null), (gl = 0), (H & 6) !== 0)) throw Error(p(331));
          var l = H;
          for (H |= 4, C = e.current; C !== null;) {
            var i = C,
              u = i.child;
            if ((C.flags & 16) !== 0) {
              var o = i.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var m = o[s];
                  for (C = m; C !== null;) {
                    var g = C;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, g, i);
                    }
                    var w = g.child;
                    if (w !== null) ((w.return = g), (C = w));
                    else
                      for (; C !== null;) {
                        g = C;
                        var v = g.sibling,
                          _ = g.return;
                        if ((la(g), g === m)) {
                          C = null;
                          break;
                        }
                        if (v !== null) {
                          ((v.return = _), (C = v));
                          break;
                        }
                        C = _;
                      }
                  }
                }
                var P = i.alternate;
                if (P !== null) {
                  var z = P.child;
                  if (z !== null) {
                    P.child = null;
                    do {
                      var se = z.sibling;
                      ((z.sibling = null), (z = se));
                    } while (z !== null);
                  }
                }
                C = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && u !== null) ((u.return = i), (C = u));
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
            u = C;
            var d = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = u), (C = d));
            else
              e: for (u = a; C !== null;) {
                if (((o = C), (o.flags & 2048) !== 0))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, o);
                    }
                  } catch (L) {
                    ue(o, o.return, L);
                  }
                if (o === u) {
                  C = null;
                  break e;
                }
                var x = o.sibling;
                if (x !== null) {
                  ((x.return = o.return), (C = x));
                  break e;
                }
                C = o.return;
              }
          }
          if (((H = l), Ft(), dt && typeof dt.onPostCommitFiberRoot == "function"))
            try {
              dt.onPostCommitFiberRoot(Nr, e);
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
    ((t = Ln(n, t)),
      (t = Us(e, t, 1)),
      (e = At(e, t, 1)),
      (t = ze()),
      e !== null && (Vn(e, 1, t), Me(e, t)));
  }
  function ue(e, t, n) {
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
            (typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r)))
          ) {
            ((e = Ln(n, e)),
              (e = As(t, e, 1)),
              (t = At(t, e, 1)),
              (e = ze()),
              t !== null && (Vn(t, 1, e), Me(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (xe & n) === n &&
        (pe === 4 || (pe === 3 && (xe & 130023424) === xe && 500 > oe() - cu)
          ? ln(e, 0)
          : (au |= n)),
      Me(e, t));
  }
  function ka(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = ze();
    ((e = Et(e, t)), e !== null && (Vn(e, t, n), Me(e, n)));
  }
  function Of(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ka(e, n));
  }
  function Df(e, t) {
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
    (r !== null && r.delete(t), ka(e, n));
  }
  var Sa;
  Sa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Te.current) Oe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Oe = !1), kf(e, t, n));
        Oe = (e.flags & 131072) !== 0;
      }
    else ((Oe = !1), te && (t.flags & 1048576) !== 0 && ts(t, Zr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (fl(e, t), (e = t.pendingProps));
        var l = kn(t, Se.current);
        (Pn(t, n), (l = Vi(null, t, r, e, l, n)));
        var i = $i();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Re(r) ? ((i = !0), Yr(t)) : (i = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Di(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Xi(t, r, e, n),
              (t = qi(null, t, r, !0, i, n)))
            : ((t.tag = 0), te && i && _i(t), Pe(null, t, l, n), (t = t.child)),
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
            (l = t.tag = If(r)),
            (e = lt(r, e)),
            l)
          ) {
            case 0:
              t = Ji(null, t, r, e, n);
              break e;
            case 1:
              t = Xs(null, t, r, e, n);
              break e;
            case 11:
              t = Bs(null, t, r, e, n);
              break e;
            case 14:
              t = Ws(null, t, r, lt(r.type, e), n);
              break e;
          }
          throw Error(p(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Ji(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Xs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Gs(t), e === null)) throw Error(p(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            cs(e, t),
            nl(t, r, null, n));
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
              ((l = Ln(Error(p(423)), t)), (t = Zs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Ln(Error(p(424)), t)), (t = Zs(e, t, r, n, l)));
              break e;
            } else
              for (
                Ve = Dt(t.stateNode.containerInfo.firstChild),
                  He = t,
                  te = !0,
                  rt = null,
                  n = ss(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((_n(), r === l)) {
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
          ps(t),
          e === null && Pi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (u = l.children),
          gi(r, l) ? (u = null) : i !== null && gi(r, i) && (t.flags |= 32),
          Ys(e, t),
          Pe(e, t, u, n),
          t.child
        );
      case 6:
        return (e === null && Pi(t), null);
      case 13:
        return Js(e, t, n);
      case 4:
        return (
          Mi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : Pe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
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
            (u = l.value),
            G(br, r._currentValue),
            (r._currentValue = u),
            i !== null)
          )
            if (nt(i.value, u)) {
              if (i.children === l.children && !Te.current) {
                t = Ct(e, t, n);
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
                        ((s = _t(-1, n & -n)), (s.tag = 2));
                        var m = i.updateQueue;
                        if (m !== null) {
                          m = m.shared;
                          var g = m.pending;
                          (g === null ? (s.next = s) : ((s.next = g.next), (g.next = s)),
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
                  if (((u = i.return), u === null)) throw Error(p(341));
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
          (Pe(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Pn(t, n),
          (l = Xe(l)),
          (r = r(l)),
          (t.flags |= 1),
          Pe(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = lt(r, t.pendingProps)), (l = lt(r.type, l)), Ws(e, t, r, l, n));
      case 15:
        return Qs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          fl(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), Yr(t)) : (e = !1),
          Pn(t, n),
          Is(t, r, l),
          Xi(t, r, l, n),
          qi(null, t, r, !0, e, n)
        );
      case 19:
        return bs(e, t, n);
      case 22:
        return Ks(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function Ea(e, t) {
    return to(e, t);
  }
  function Mf(e, t, n, r) {
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
    return new Mf(e, t, n, r);
  }
  function gu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function If(e) {
    if (typeof e == "function") return gu(e) ? 1 : 0;
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
  function Sl(e, t, n, r, l, i) {
    var u = 2;
    if (((r = e), typeof e == "function")) gu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case Le:
          return on(n.children, l, i, t);
        case Qe:
          ((u = 8), (l |= 8));
          break;
        case Pt:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = Pt), (e.lanes = i), e);
        case Fe:
          return ((e = Je(13, n, t, l)), (e.elementType = Fe), (e.lanes = i), e);
        case et:
          return ((e = Je(19, n, t, l)), (e.elementType = et), (e.lanes = i), e);
        case ie:
          return El(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gt:
                u = 10;
                break e;
              case Yt:
                u = 9;
                break e;
              case ct:
                u = 11;
                break e;
              case ft:
                u = 14;
                break e;
              case je:
                ((u = 16), (r = null));
                break e;
            }
          throw Error(p(130, e == null ? e : typeof e, ""));
      }
    return ((t = Je(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
  }
  function on(e, t, n, r) {
    return ((e = Je(7, e, r, t)), (e.lanes = n), e);
  }
  function El(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = ie),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function wu(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function xu(e, t, n) {
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
  function Ff(e, t, n, r, l) {
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
  function ku(e, t, n, r, l, i, u, o, s) {
    return (
      (e = new Ff(e, t, n, o, s)),
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
  function Uf(e, t, n) {
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
    if (!e) return It;
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
      if (Re(n)) return qo(e, n, t);
    }
    return t;
  }
  function Ca(e, t, n, r, l, i, u, o, s) {
    return (
      (e = ku(n, r, !0, e, l, i, u, o, s)),
      (e.context = _a(null)),
      (n = e.current),
      (r = ze()),
      (l = Bt(n)),
      (i = _t(r, l)),
      (i.callback = t ?? null),
      At(n, i, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      Me(e, r),
      e
    );
  }
  function _l(e, t, n, r) {
    var l = t.current,
      i = ze(),
      u = Bt(l);
    return (
      (n = _a(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = _t(i, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, u)),
      e !== null && (ot(e, l, u, i), tl(e, l, u)),
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
  function Na(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Su(e, t) {
    (Na(e, t), (e = e.alternate) && Na(e, t));
  }
  function Af() {
    return null;
  }
  var Pa =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Eu(e) {
    this._internalRoot = e;
  }
  ((Nl.prototype.render = Eu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(p(409));
      _l(e, t, null, null);
    }),
    (Nl.prototype.unmount = Eu.prototype.unmount =
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
  function Nl(e) {
    this._internalRoot = e;
  }
  Nl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ao();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      (Tt.splice(n, 0, e), n === 0 && po(e));
    }
  };
  function _u(e) {
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
  function za() {}
  function Hf(e, t, n, r, l) {
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
        (e[wt] = u.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        rn(),
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
      (e[wt] = s.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        _l(t, s, n, r);
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
      _l(t, u, e, l);
    } else u = Hf(n, t, e, l, r);
    return Cl(u);
  }
  ((oo = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Hn(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), Me(t, oe()), (H & 6) === 0 && ((Rn = oe() + 500), Ft()));
        }
        break;
      case 13:
        (rn(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = ze();
            ot(r, e, 1, l);
          }
        }),
          Su(e, 1));
    }
  }),
    (Gl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = ze();
          ot(t, e, 134217728, n);
        }
        Su(e, 134217728);
      }
    }),
    (so = function (e) {
      if (e.tag === 13) {
        var t = Bt(e),
          n = Et(e, t);
        if (n !== null) {
          var r = ze();
          ot(n, e, t, r);
        }
        Su(e, t);
      }
    }),
    (ao = function () {
      return K;
    }),
    (co = function (e, t) {
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
                var l = Qr(r);
                if (!l) throw Error(p(90));
                (Du(r), Ol(r, l));
              }
            }
          }
          break;
        case "textarea":
          Au(e, n);
          break;
        case "select":
          ((t = n.value), t != null && an(e, !!n.multiple, t, !1));
      }
    }),
    (Xu = hu),
    (Gu = rn));
  var Vf = { usingClientEntryPoint: !1, Events: [lr, wn, Qr, Ku, Yu, hu] },
    gr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    $f = {
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
      currentDispatcherRef: ke.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = bu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: gr.findFiberByHostInstance || Af,
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
        ((Nr = Ll.inject($f)), (dt = Ll));
      } catch {}
  }
  return (
    (Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf),
    (Ie.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_u(t)) throw Error(p(200));
      return Uf(e, t, null, n);
    }),
    (Ie.createRoot = function (e, t) {
      if (!_u(e)) throw Error(p(299));
      var n = !1,
        r = "",
        l = Pa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ku(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new Eu(t)
      );
    }),
    (Ie.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(p(188))
          : ((e = Object.keys(e).join(",")), Error(p(268, e)));
      return ((e = bu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ie.flushSync = function (e) {
      return rn(e);
    }),
    (Ie.hydrate = function (e, t, n) {
      if (!Pl(t)) throw Error(p(200));
      return zl(null, e, t, !0, n);
    }),
    (Ie.hydrateRoot = function (e, t, n) {
      if (!_u(e)) throw Error(p(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        u = Pa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Ca(t, null, e, 1, n ?? null, l, !1, i, u)),
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
      return new Nl(t);
    }),
    (Ie.render = function (e, t, n) {
      if (!Pl(t)) throw Error(p(200));
      return zl(null, e, t, !1, n);
    }),
    (Ie.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(p(40));
      return e._reactRootContainer
        ? (rn(function () {
            zl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ie.unstable_batchedUpdates = hu),
    (Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Pl(n)) throw Error(p(200));
      if (e == null || e._reactInternals === void 0) throw Error(p(38));
      return zl(e, t, n, !1, r);
    }),
    (Ie.version = "18.3.1-next-f1338f8080-20240426"),
    Ie
  );
}
var Ia;
function Zf() {
  if (Ia) return Pu.exports;
  Ia = 1;
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
  return (h(), (Pu.exports = Gf()), Pu.exports);
}
var Fa;
function Jf() {
  if (Fa) return jl;
  Fa = 1;
  var h = Zf();
  return ((jl.createRoot = h.createRoot), (jl.hydrateRoot = h.hydrateRoot), jl);
}
var qf = Jf();
function $a(h) {
  return `#${h}`;
}
function Ba(h) {
  const S = h.replace(/^\//, "").replace(/\/$/, "");
  return S ? `#/${S}` : "#/";
}
function Tu(h) {
  const S = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return S
    ? S.startsWith("/")
      ? { kind: "route", path: S.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: S }
    : null;
}
function Ru(h, S = "smooth") {
  if (typeof document > "u") return !1;
  const p = document.getElementById(h);
  return p ? (p.scrollIntoView({ behavior: S, block: "start" }), !0) : !1;
}
function bf(h, S = "smooth") {
  if (typeof window > "u") return;
  const p = $a(h);
  if (Ru(h, S)) {
    window.history.replaceState(null, "", p);
    return;
  }
  window.location.hash = p;
}
function ed(h) {
  typeof window > "u" || (window.location.hash = Ba(h));
}
function td() {
  const h = Tu();
  return (h == null ? void 0 : h.kind) === "route" ? h.path : "";
}
function nd(h) {
  return h.kind === "route" ? Ba(h.path) : $a(h.id);
}
function rd(h, S) {
  if ((h.preventDefault(), S.kind === "route")) {
    ed(S.path);
    return;
  }
  bf(S.id);
}
function Wa() {
  if (typeof window > "u") return;
  const h = Tu();
  (h == null ? void 0 : h.kind) === "section" && requestAnimationFrame(() => Ru(h.id, "auto"));
}
function ld(h, S) {
  if (typeof window > "u") return () => {};
  const p = () => {
    const T = Tu();
    if (!T) {
      h("");
      return;
    }
    if (T.kind === "route") {
      h(T.path);
      return;
    }
    (Ru(T.id, "smooth"), h(""));
  };
  return (
    p(),
    window.addEventListener("hashchange", p),
    () => window.removeEventListener("hashchange", p)
  );
}
function id(h = "") {
  const [S, p] = st.useState(() => (typeof window < "u" ? td() : h));
  return (st.useEffect(() => ld(p), []), S || h);
}
function ud({ routes: h, defaultRoute: S = "", className: p }) {
  const T = id(S);
  st.useEffect(() => {
    Wa();
  }, []);
  const j = T in h ? T : S,
    M = h[j] ?? h[S];
  return k.jsx("div", { className: p, children: M });
}
function sn({ target: h, children: S, className: p, onClick: T, ...j }) {
  return k.jsx("a", {
    href: nd(h),
    className: p,
    onClick: (M) => {
      (rd(M, h), T == null || T(M));
    },
    ...j,
    children: S,
  });
}
const od = {
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
function sd({ title: h, eyebrow: S = "Explore", description: p, theme: T = "dark", children: j }) {
  const M = od[T];
  return k.jsx("div", {
    className: M.wrap,
    children: k.jsxs("div", {
      className: "mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24",
      children: [
        k.jsx(sn, {
          target: { kind: "route", path: "" },
          className: M.link,
          children: "← Back to home",
        }),
        k.jsx("p", { className: `${M.eyebrow} mt-10`, children: S }),
        k.jsx("h1", { className: M.title, children: h }),
        p ? k.jsx("p", { className: M.body, children: p }) : null,
        j,
      ],
    }),
  });
}
function ad(h, S, p = "dark") {
  const T = { "": h };
  for (const j of S)
    T[j.path] = k.jsx(
      sd,
      { title: j.title, eyebrow: j.eyebrow, description: j.description, theme: p },
      j.path,
    );
  return T;
}
const cd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4",
  fd = "Early access — launching May 1, 2026",
  dd = "Web3 at the Speed of Experience",
  pd =
    "A next-generation chain built for instant finality, seamless UX, and experiences that feel as fast as the web you already know.";
function md() {
  return k.jsxs(k.Fragment, {
    children: [
      k.jsx("video", {
        className: "absolute inset-0 h-full w-full object-cover",
        src: cd,
        autoPlay: !0,
        loop: !0,
        muted: !0,
        playsInline: !0,
        "aria-hidden": !0,
      }),
      k.jsx("div", { className: "absolute inset-0 bg-black/50", "aria-hidden": !0 }),
    ],
  });
}
function hd() {
  return k.jsxs("section", {
    id: "home",
    className:
      "relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-8 text-center sm:px-8",
    children: [
      k.jsx("p", {
        className:
          "animate-blur-fade-up mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 sm:text-sm",
        style: { animationDelay: "150ms" },
        children: fd,
      }),
      k.jsx("h1", {
        className:
          "animate-blur-fade-up eos-gradient-text max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl",
        style: { animationDelay: "300ms" },
        children: dd,
      }),
      k.jsx("p", {
        className:
          "animate-blur-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg",
        style: { animationDelay: "450ms" },
        children: pd,
      }),
      k.jsx("div", {
        className: "animate-blur-fade-up mt-10",
        style: { animationDelay: "600ms" },
        id: "waitlist",
        children: k.jsx(sn, {
          target: { kind: "route", path: "waitlist" },
          children: k.jsx("button", {
            type: "button",
            className:
              "rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:px-10 sm:text-base",
            children: "Join Waitlist",
          }),
        }),
      }),
    ],
  });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vd = (h) => h.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Qa = (...h) =>
    h
      .filter((S, p, T) => !!S && S.trim() !== "" && T.indexOf(S) === p)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var yd = {
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
 */ const gd = st.forwardRef(
  (
    {
      color: h = "currentColor",
      size: S = 24,
      strokeWidth: p = 2,
      absoluteStrokeWidth: T,
      className: j = "",
      children: M,
      iconNode: ae,
      ...ce
    },
    W,
  ) =>
    st.createElement(
      "svg",
      {
        ref: W,
        ...yd,
        width: S,
        height: S,
        stroke: h,
        strokeWidth: T ? (Number(p) * 24) / Number(S) : p,
        className: Qa("lucide", j),
        ...ce,
      },
      [...ae.map(([ge, me]) => st.createElement(ge, me)), ...(Array.isArray(M) ? M : [M])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ou = (h, S) => {
  const p = st.forwardRef(({ className: T, ...j }, M) =>
    st.createElement(gd, { ref: M, iconNode: S, className: Qa(`lucide-${vd(h)}`, T), ...j }),
  );
  return ((p.displayName = `${h}`), p);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ua = Ou("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wd = Ou("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xd = Ou("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function Aa({ className: h = "", children: S = "Join Waitlist" }) {
  return k.jsxs("span", {
    className: `waitlist-pill-outer inline-flex ${h}`,
    children: [
      k.jsx("span", { className: "waitlist-pill-streak", "aria-hidden": !0 }),
      k.jsx("span", {
        className:
          "waitlist-pill-inner inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white sm:px-6 sm:py-2.5",
        children: S,
      }),
    ],
  });
}
function kd() {
  return k.jsxs("svg", {
    width: "134",
    height: "25",
    viewBox: "0 0 134 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "Logoipsum",
    children: [
      k.jsx("rect", { x: "0", y: "4", width: "18", height: "18", rx: "4", fill: "white" }),
      k.jsx("rect", {
        x: "24",
        y: "8",
        width: "52",
        height: "4",
        rx: "2",
        fill: "white",
        fillOpacity: "0.9",
      }),
      k.jsx("rect", {
        x: "24",
        y: "16",
        width: "36",
        height: "3",
        rx: "1.5",
        fill: "white",
        fillOpacity: "0.55",
      }),
      k.jsx("rect", {
        x: "88",
        y: "4",
        width: "18",
        height: "18",
        rx: "4",
        fill: "white",
        fillOpacity: "0.35",
      }),
      k.jsx("rect", {
        x: "112",
        y: "8",
        width: "22",
        height: "4",
        rx: "2",
        fill: "white",
        fillOpacity: "0.7",
      }),
      k.jsx("rect", {
        x: "112",
        y: "16",
        width: "14",
        height: "3",
        rx: "1.5",
        fill: "white",
        fillOpacity: "0.4",
      }),
    ],
  });
}
const Ha = [
    { label: "Platform", route: "platform", chevron: !0 },
    { label: "Ecosystem", route: "ecosystem", chevron: !0 },
    { label: "Developers", route: "developers", chevron: !0 },
    { label: "Docs", route: "docs", chevron: !1 },
  ],
  Va =
    "inline-flex items-center gap-1 text-sm font-medium text-white/75 transition-colors hover:text-white";
function Sd() {
  const [h, S] = st.useState(!1),
    p = () => S(!1);
  return k.jsxs(k.Fragment, {
    children: [
      k.jsxs("header", {
        className:
          "relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10",
        children: [
          k.jsx(sn, {
            target: { kind: "route", path: "" },
            className: "shrink-0",
            "aria-label": "Web3 EOS home",
            onClick: p,
            children: k.jsx(kd, {}),
          }),
          k.jsx("nav", {
            className: "hidden items-center gap-8 md:flex",
            children: Ha.map((T) =>
              k.jsxs(
                sn,
                {
                  target: { kind: "route", path: T.route },
                  className: Va,
                  children: [
                    T.label,
                    T.chevron
                      ? k.jsx(Ua, { className: "h-3.5 w-3.5 opacity-70", "aria-hidden": !0 })
                      : null,
                  ],
                },
                T.route,
              ),
            ),
          }),
          k.jsx("div", {
            className: "hidden md:block",
            children: k.jsx(sn, {
              target: { kind: "route", path: "waitlist" },
              onClick: p,
              children: k.jsx(Aa, {}),
            }),
          }),
          k.jsx("button", {
            type: "button",
            className:
              "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden",
            "aria-label": h ? "Close menu" : "Open menu",
            onClick: () => S((T) => !T),
            children: h ? k.jsx(xd, { className: "h-5 w-5" }) : k.jsx(wd, { className: "h-5 w-5" }),
          }),
        ],
      }),
      h
        ? k.jsx("div", {
            className:
              "relative z-20 border-t border-white/10 bg-black/90 px-5 py-4 backdrop-blur-xl md:hidden",
            children: k.jsxs("nav", {
              className: "flex flex-col gap-3",
              children: [
                Ha.map((T) =>
                  k.jsxs(
                    sn,
                    {
                      target: { kind: "route", path: T.route },
                      className: `${Va} py-1`,
                      onClick: p,
                      children: [
                        T.label,
                        T.chevron
                          ? k.jsx(Ua, { className: "h-3.5 w-3.5 opacity-70", "aria-hidden": !0 })
                          : null,
                      ],
                    },
                    T.route,
                  ),
                ),
                k.jsx(sn, {
                  target: { kind: "route", path: "waitlist" },
                  className: "mt-2 w-fit",
                  onClick: p,
                  children: k.jsx(Aa, { className: "w-full" }),
                }),
              ],
            }),
          })
        : null,
    ],
  });
}
const Ka = {
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
function Tl({ id: h, eyebrow: S, title: p, children: T, theme: j }) {
  const M = Ka[j];
  return k.jsx("section", {
    id: h,
    className: `${M.section} scroll-mt-24`,
    children: k.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        k.jsx("p", { className: M.eyebrow, children: S }),
        k.jsx("h2", { className: `${M.title} mt-3`, children: p }),
        k.jsx("div", { className: "mt-8", children: T }),
      ],
    }),
  });
}
function Ed({ theme: h = "dark", brand: S = "Product" }) {
  const p = Ka[h],
    T = [
      { title: "Fast setup", desc: `Ship ${S} experiences in minutes with guided defaults.` },
      { title: "Built to scale", desc: "Production-ready patterns for teams that iterate daily." },
      { title: "Secure by design", desc: "Privacy-first flows with audit-friendly configuration." },
    ];
  return k.jsxs(k.Fragment, {
    children: [
      k.jsx(Tl, {
        id: "features",
        eyebrow: "Features",
        title: "Everything you need in one flow",
        theme: h,
        children: k.jsx("div", {
          className: "grid gap-4 md:grid-cols-3",
          children: T.map((j) =>
            k.jsxs(
              "div",
              {
                className: p.card,
                children: [
                  k.jsx("h3", {
                    className:
                      h === "dark"
                        ? "text-lg font-medium text-white"
                        : "text-lg font-medium text-slate-900",
                    children: j.title,
                  }),
                  k.jsx("p", { className: `${p.body} mt-2 text-sm`, children: j.desc }),
                ],
              },
              j.title,
            ),
          ),
        }),
      }),
      k.jsx(Tl, {
        id: "about",
        eyebrow: "About",
        title: `Why teams choose ${S}`,
        theme: h,
        children: k.jsx("p", {
          className: p.body,
          children:
            "We combine cinematic presentation with practical product storytelling—so every visit feels premium while staying effortless to keep current as you grow.",
        }),
      }),
      k.jsx(Tl, {
        id: "faq",
        eyebrow: "FAQ",
        title: "Common questions",
        theme: h,
        children: k.jsx("dl", {
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
          ].map(([j, M]) =>
            k.jsxs(
              "div",
              {
                className: p.card,
                children: [
                  k.jsx("dt", {
                    className:
                      h === "dark" ? "font-medium text-white" : "font-medium text-slate-900",
                    children: j,
                  }),
                  k.jsx("dd", { className: `${p.body} mt-2 text-sm`, children: M }),
                ],
              },
              j,
            ),
          ),
        }),
      }),
      k.jsxs(Tl, {
        id: "contact",
        eyebrow: "Contact",
        title: "Talk with our team",
        theme: h,
        children: [
          k.jsx("p", { className: p.body, children: "We respond within one business day." }),
          k.jsx("a", {
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
function _d() {
  return k.jsxs("div", {
    className: "relative min-h-screen overflow-hidden bg-black text-white",
    children: [
      k.jsx("div", { className: "pointer-events-none absolute inset-0", children: k.jsx(md, {}) }),
      k.jsxs("div", {
        className: "relative z-10 flex min-h-screen flex-col",
        children: [k.jsx(Sd, {}), k.jsx(hd, {})],
      }),
      k.jsx(Ed, { brand: "Web3 EOS", theme: "dark" }),
    ],
  });
}
const Cd = [
  {
    path: "platform",
    title: "Platform",
    description:
      "Sub-second finality, modular rollups, and native account abstraction for every app.",
  },
  {
    path: "ecosystem",
    title: "Ecosystem",
    description: "Explore wallets, dApps, and infrastructure partners building on Web3 EOS.",
  },
  {
    path: "developers",
    title: "Developers",
    description: "SDKs, testnet access, and docs to ship production-grade Web3 experiences.",
  },
  {
    path: "docs",
    title: "Docs",
    description: "API references, guides, and integration patterns for the EOS stack.",
  },
  {
    path: "waitlist",
    title: "Join Waitlist",
    description: "Reserve early access — public launch May 1, 2026.",
  },
];
function Nd() {
  return (
    st.useEffect(() => {
      Wa();
    }, []),
    k.jsx(ud, { routes: ad(k.jsx(_d, {}), Cd, "dark") })
  );
}
qf.createRoot(document.getElementById("root")).render(
  k.jsx(st.StrictMode, { children: k.jsx(Nd, {}) }),
);
