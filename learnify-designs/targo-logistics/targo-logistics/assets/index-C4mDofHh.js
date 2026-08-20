(function () {
  const x = document.createElement("link").relList;
  if (x && x.supports && x.supports("modulepreload")) return;
  for (const L of document.querySelectorAll('link[rel="modulepreload"]')) I(L);
  new MutationObserver((L) => {
    for (const M of L)
      if (M.type === "childList")
        for (const ae of M.addedNodes) ae.tagName === "LINK" && ae.rel === "modulepreload" && I(ae);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(L) {
    const M = {};
    return (
      L.integrity && (M.integrity = L.integrity),
      L.referrerPolicy && (M.referrerPolicy = L.referrerPolicy),
      L.crossOrigin === "use-credentials"
        ? (M.credentials = "include")
        : L.crossOrigin === "anonymous"
          ? (M.credentials = "omit")
          : (M.credentials = "same-origin"),
      M
    );
  }
  function I(L) {
    if (L.ep) return;
    L.ep = !0;
    const M = p(L);
    fetch(L.href, M);
  }
})();
var Ni = { exports: {} },
  wr = {},
  Pi = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function $f() {
  if (Ta) return U;
  Ta = 1;
  var h = Symbol.for("react.element"),
    x = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    I = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
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
  function st(c, y, F) {
    ((this.props = c), (this.context = y), (this.refs = b), (this.updater = F || Be));
  }
  var qe = (st.prototype = new yt());
  ((qe.constructor = st), We(qe, Y.prototype), (qe.isPureReactComponent = !0));
  var xe = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    Ne = { current: null },
    Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, y, F) {
    var A,
      V = {},
      $ = null,
      X = null;
    if (y != null)
      for (A in (y.ref !== void 0 && (X = y.ref), y.key !== void 0 && ($ = "" + y.key), y))
        be.call(y, A) && !Te.hasOwnProperty(A) && (V[A] = y[A]);
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
  var at = /\/+/g;
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
            case x:
              X = !0;
          }
      }
    if (X)
      return (
        (X = c),
        (V = V(X)),
        (c = A === "" ? "." + Fe(X, 0) : A),
        xe(V)
          ? ((F = ""),
            c != null && (F = c.replace(at, "$&/") + "/"),
            et(V, y, F, "", function (Ue) {
              return Ue;
            }))
          : V != null &&
            (gt(V) &&
              (V = Pt(
                V,
                F +
                  (!V.key || (X && X.key === V.key) ? "" : ("" + V.key).replace(at, "$&/") + "/") +
                  c,
              )),
            y.push(V)),
        1
      );
    if (((X = 0), (A = A === "" ? "." : A + ":"), xe(c)))
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
  function ct(c, y, F) {
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
  function Le(c) {
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
  var ue = { current: null },
    S = { transition: null },
    O = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: S, ReactCurrentOwner: Ne };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (U.Children = {
      map: ct,
      forEach: function (c, y, F) {
        ct(
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
        if (!gt(c))
          throw Error("React.Children.only expected to receive a single React element child.");
        return c;
      },
    }),
    (U.Component = Y),
    (U.Fragment = p),
    (U.Profiler = L),
    (U.PureComponent = st),
    (U.StrictMode = I),
    (U.Suspense = W),
    (U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
    (U.act = C),
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
            !Te.hasOwnProperty(ee) &&
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
      return { $$typeof: me, _payload: { _status: -1, _result: c }, _init: Le };
    }),
    (U.memo = function (c, y) {
      return { $$typeof: ge, type: c, compare: y === void 0 ? null : y };
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
    (U.unstable_act = C),
    (U.useCallback = function (c, y) {
      return ue.current.useCallback(c, y);
    }),
    (U.useContext = function (c) {
      return ue.current.useContext(c);
    }),
    (U.useDebugValue = function () {}),
    (U.useDeferredValue = function (c) {
      return ue.current.useDeferredValue(c);
    }),
    (U.useEffect = function (c, y) {
      return ue.current.useEffect(c, y);
    }),
    (U.useId = function () {
      return ue.current.useId();
    }),
    (U.useImperativeHandle = function (c, y, F) {
      return ue.current.useImperativeHandle(c, y, F);
    }),
    (U.useInsertionEffect = function (c, y) {
      return ue.current.useInsertionEffect(c, y);
    }),
    (U.useLayoutEffect = function (c, y) {
      return ue.current.useLayoutEffect(c, y);
    }),
    (U.useMemo = function (c, y) {
      return ue.current.useMemo(c, y);
    }),
    (U.useReducer = function (c, y, F) {
      return ue.current.useReducer(c, y, F);
    }),
    (U.useRef = function (c) {
      return ue.current.useRef(c);
    }),
    (U.useState = function (c) {
      return ue.current.useState(c);
    }),
    (U.useSyncExternalStore = function (c, y, F) {
      return ue.current.useSyncExternalStore(c, y, F);
    }),
    (U.useTransition = function () {
      return ue.current.useTransition();
    }),
    (U.version = "18.3.1"),
    U
  );
}
var La;
function Ri() {
  return (La || ((La = 1), (Pi.exports = $f())), Pi.exports);
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
function Bf() {
  if (Ra) return wr;
  Ra = 1;
  var h = Ri(),
    x = Symbol.for("react.element"),
    p = Symbol.for("react.fragment"),
    I = Object.prototype.hasOwnProperty,
    L = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(ce, W, ge) {
    var me,
      ne = {},
      q = null,
      Be = null;
    (ge !== void 0 && (q = "" + ge),
      W.key !== void 0 && (q = "" + W.key),
      W.ref !== void 0 && (Be = W.ref));
    for (me in W) I.call(W, me) && !M.hasOwnProperty(me) && (ne[me] = W[me]);
    if (ce && ce.defaultProps)
      for (me in ((W = ce.defaultProps), W)) ne[me] === void 0 && (ne[me] = W[me]);
    return { $$typeof: x, type: ce, key: q, ref: Be, props: ne, _owner: L.current };
  }
  return ((wr.Fragment = p), (wr.jsx = ae), (wr.jsxs = ae), wr);
}
var ja;
function Wf() {
  return (ja || ((ja = 1), (Ni.exports = Bf())), Ni.exports);
}
var N = Wf(),
  vt = Ri(),
  Ll = {},
  zi = { exports: {} },
  Ie = {},
  Ti = { exports: {} },
  Li = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oa;
function Qf() {
  return (
    Oa ||
      ((Oa = 1),
      (function (h) {
        function x(S, O) {
          var C = S.length;
          S.push(O);
          e: for (; 0 < C;) {
            var c = (C - 1) >>> 1,
              y = S[c];
            if (0 < L(y, O)) ((S[c] = O), (S[C] = y), (C = c));
            else break e;
          }
        }
        function p(S) {
          return S.length === 0 ? null : S[0];
        }
        function I(S) {
          if (S.length === 0) return null;
          var O = S[0],
            C = S.pop();
          if (C !== O) {
            S[0] = C;
            e: for (var c = 0, y = S.length, F = y >>> 1; c < F;) {
              var A = 2 * (c + 1) - 1,
                V = S[A],
                $ = A + 1,
                X = S[$];
              if (0 > L(V, C))
                $ < y && 0 > L(X, V)
                  ? ((S[c] = X), (S[$] = C), (c = $))
                  : ((S[c] = V), (S[A] = C), (c = A));
              else if ($ < y && 0 > L(X, C)) ((S[c] = X), (S[$] = C), (c = $));
              else break e;
            }
          }
          return O;
        }
        function L(S, O) {
          var C = S.sortIndex - O.sortIndex;
          return C !== 0 ? C : S.id - O.id;
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
          st = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function qe(S) {
          for (var O = p(ge); O !== null;) {
            if (O.callback === null) I(ge);
            else if (O.startTime <= S) (I(ge), (O.sortIndex = O.expirationTime), x(W, O));
            else break;
            O = p(ge);
          }
        }
        function xe(S) {
          if (((b = !1), qe(S), !We))
            if (p(W) !== null) ((We = !0), Le(be));
            else {
              var O = p(ge);
              O !== null && ue(xe, O.startTime - S);
            }
        }
        function be(S, O) {
          ((We = !1), b && ((b = !1), yt(Qe), (Qe = -1)), (Be = !0));
          var C = q;
          try {
            for (qe(O), ne = p(W); ne !== null && (!(ne.expirationTime > O) || (S && !Yt()));) {
              var c = ne.callback;
              if (typeof c == "function") {
                ((ne.callback = null), (q = ne.priorityLevel));
                var y = c(ne.expirationTime <= O);
                ((O = h.unstable_now()),
                  typeof y == "function" ? (ne.callback = y) : ne === p(W) && I(W),
                  qe(O));
              } else I(W);
              ne = p(W);
            }
            if (ne !== null) var F = !0;
            else {
              var A = p(ge);
              (A !== null && ue(xe, A.startTime - O), (F = !1));
            }
            return F;
          } finally {
            ((ne = null), (q = C), (Be = !1));
          }
        }
        var Ne = !1,
          Te = null,
          Qe = -1,
          Pt = 5,
          gt = -1;
        function Yt() {
          return !(h.unstable_now() - gt < Pt);
        }
        function at() {
          if (Te !== null) {
            var S = h.unstable_now();
            gt = S;
            var O = !0;
            try {
              O = Te(!0, S);
            } finally {
              O ? Fe() : ((Ne = !1), (Te = null));
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
            Y(at, 0);
          };
        function Le(S) {
          ((Te = S), Ne || ((Ne = !0), Fe()));
        }
        function ue(S, O) {
          Qe = Y(function () {
            S(h.unstable_now());
          }, O);
        }
        ((h.unstable_IdlePriority = 5),
          (h.unstable_ImmediatePriority = 1),
          (h.unstable_LowPriority = 4),
          (h.unstable_NormalPriority = 3),
          (h.unstable_Profiling = null),
          (h.unstable_UserBlockingPriority = 2),
          (h.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (h.unstable_continueExecution = function () {
            We || Be || ((We = !0), Le(be));
          }),
          (h.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Pt = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (h.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (h.unstable_getFirstCallbackNode = function () {
            return p(W);
          }),
          (h.unstable_next = function (S) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = q;
            }
            var C = q;
            q = O;
            try {
              return S();
            } finally {
              q = C;
            }
          }),
          (h.unstable_pauseExecution = function () {}),
          (h.unstable_requestPaint = function () {}),
          (h.unstable_runWithPriority = function (S, O) {
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
              return O();
            } finally {
              q = C;
            }
          }),
          (h.unstable_scheduleCallback = function (S, O, C) {
            var c = h.unstable_now();
            switch (
              (typeof C == "object" && C !== null
                ? ((C = C.delay), (C = typeof C == "number" && 0 < C ? c + C : c))
                : (C = c),
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
              (y = C + y),
              (S = {
                id: me++,
                callback: O,
                priorityLevel: S,
                startTime: C,
                expirationTime: y,
                sortIndex: -1,
              }),
              C > c
                ? ((S.sortIndex = C),
                  x(ge, S),
                  p(W) === null &&
                    S === p(ge) &&
                    (b ? (yt(Qe), (Qe = -1)) : (b = !0), ue(xe, C - c)))
                : ((S.sortIndex = y), x(W, S), We || Be || ((We = !0), Le(be))),
              S
            );
          }),
          (h.unstable_shouldYield = Yt),
          (h.unstable_wrapCallback = function (S) {
            var O = q;
            return function () {
              var C = q;
              q = O;
              try {
                return S.apply(this, arguments);
              } finally {
                q = C;
              }
            };
          }));
      })(Li)),
    Li
  );
}
var Ma;
function Kf() {
  return (Ma || ((Ma = 1), (Ti.exports = Qf())), Ti.exports);
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
function Yf() {
  if (Da) return Ie;
  Da = 1;
  var h = Ri(),
    x = Kf();
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
  var I = new Set(),
    L = {};
  function M(e, t) {
    (ae(e, t), ae(e + "Capture", t));
  }
  function ae(e, t) {
    for (L[e] = t, e = 0; e < t.length; e++) I.add(t[e]);
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
  function b(e, t, n, r, l, u, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i));
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
  function st(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yt, st);
      Y[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yt, st);
        Y[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yt, st);
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
  var xe = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for("react.element"),
    Ne = Symbol.for("react.portal"),
    Te = Symbol.for("react.fragment"),
    Qe = Symbol.for("react.strict_mode"),
    Pt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    at = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    et = Symbol.for("react.suspense_list"),
    ct = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    ue = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (S && e[S]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var C = Object.assign,
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
      case Te:
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
  function Mi(e) {
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
  function xr(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ol(e, t) {
    var n = t.checked;
    return C({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Di(e, t) {
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
  function Ii(e, t) {
    ((t = t.checked), t != null && qe(e, "checked", t, !1));
  }
  function Ml(e, t) {
    Ii(e, t);
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
  function Fi(e, t, n) {
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
    (t !== "number" || xr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Mn = Array.isArray;
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
  function Il(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return C({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ui(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(p(92));
        if (Mn(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Q(n) };
  }
  function Ai(e, t) {
    var n = Q(t.value),
      r = Q(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Hi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Vi(e) {
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
      ? Vi(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Sr,
    $i = (function (e) {
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
    Qa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function (e) {
    Qa.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]));
    });
  });
  function Bi(e, t, n) {
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
          l = Bi(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ka = C(
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
      if (Ka[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Vl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var $l = null,
    an = null,
    cn = null;
  function Qi(e) {
    if ((e = lr(e))) {
      if (typeof $l != "function") throw Error(p(280));
      var t = e.stateNode;
      t && ((t = Qr(t)), $l(e.stateNode, e.type, t));
    }
  }
  function Ki(e) {
    an ? (cn ? cn.push(e) : (cn = [e])) : (an = e);
  }
  function Yi() {
    if (an) {
      var e = an,
        t = cn;
      if (((cn = an = null), Qi(e), t)) for (e = 0; e < t.length; e++) Qi(t[e]);
    }
  }
  function Xi(e, t) {
    return e(t);
  }
  function Gi() {}
  var Bl = !1;
  function Zi(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Xi(e, t, n);
    } finally {
      ((Bl = !1), (an !== null || cn !== null) && (Gi(), Yi()));
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
  var Wl = !1;
  if (ce)
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
  function Ya(e, t, n, r, l, u, i, o, s) {
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
    Ql = null,
    Xa = {
      onError: function (e) {
        ((An = !0), (Er = e));
      },
    };
  function Ga(e, t, n, r, l, u, i, o, s) {
    ((An = !1), (Er = null), Ya.apply(Xa, arguments));
  }
  function Za(e, t, n, r, l, u, i, o, s) {
    if ((Ga.apply(this, arguments), An)) {
      if (An) {
        var m = Er;
        ((An = !1), (Er = null));
      } else throw Error(p(198));
      _r || ((_r = !0), (Ql = m));
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
  function Ji(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function qi(e) {
    if (Xt(e) !== e) throw Error(p(188));
  }
  function Ja(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Xt(e)), t === null)) throw Error(p(188));
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
          if (u === n) return (qi(l), e);
          if (u === r) return (qi(l), t);
          u = u.sibling;
        }
        throw Error(p(188));
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
          if (!i) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function bi(e) {
    return ((e = Ja(e)), e !== null ? eo(e) : null);
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
  var to = x.unstable_scheduleCallback,
    no = x.unstable_cancelCallback,
    qa = x.unstable_shouldYield,
    ba = x.unstable_requestPaint,
    oe = x.unstable_now,
    ec = x.unstable_getCurrentPriorityLevel,
    Kl = x.unstable_ImmediatePriority,
    ro = x.unstable_UserBlockingPriority,
    Cr = x.unstable_NormalPriority,
    tc = x.unstable_LowPriority,
    lo = x.unstable_IdlePriority,
    Nr = null,
    ft = null;
  function nc(e) {
    if (ft && typeof ft.onCommitFiberRoot == "function")
      try {
        ft.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var tt = Math.clz32 ? Math.clz32 : uc,
    rc = Math.log,
    lc = Math.LN2;
  function uc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((rc(e) / lc) | 0)) | 0);
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
  function Tr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? (r = Hn(o)) : ((u &= i), u !== 0 && (r = Hn(u)));
    } else ((i = n & ~l), i !== 0 ? (r = Hn(i)) : u !== 0 && (r = Hn(u)));
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
  function ic(e, t) {
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
  function oc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var i = 31 - tt(u),
        o = 1 << i,
        s = l[i];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[i] = ic(o, t))
        : s <= t && (e.expiredLanes |= o),
        (u &= ~o));
    }
  }
  function Yl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function uo() {
    var e = Pr;
    return ((Pr <<= 1), (Pr & 4194240) === 0 && (Pr = 64), e);
  }
  function Xl(e) {
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
  function sc(e, t) {
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
  function Gl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - tt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var K = 0;
  function io(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var oo,
    Zl,
    so,
    ao,
    co,
    Jl = !1,
    Lr = [],
    zt = null,
    Tt = null,
    Lt = null,
    $n = new Map(),
    Bn = new Map(),
    Rt = [],
    ac =
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
        Tt = null;
        break;
      case "mouseover":
      case "mouseout":
        Lt = null;
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
  function Wn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && Zl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function cc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Wn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Tt = Wn(Tt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Lt = Wn(Lt, e, t, n, r, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return ($n.set(u, Wn($n.get(u) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), Bn.set(u, Wn(Bn.get(u) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function po(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ji(n)), t !== null)) {
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
  function Rr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Hl = r), n.target.dispatchEvent(r), (Hl = null));
      } else return ((t = lr(n)), t !== null && Zl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function mo(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function fc() {
    ((Jl = !1),
      zt !== null && Rr(zt) && (zt = null),
      Tt !== null && Rr(Tt) && (Tt = null),
      Lt !== null && Rr(Lt) && (Lt = null),
      $n.forEach(mo),
      Bn.forEach(mo));
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl || ((Jl = !0), x.unstable_scheduleCallback(x.unstable_NormalPriority, fc)));
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
        Tt !== null && Qn(Tt, e),
        Lt !== null && Qn(Lt, e),
        $n.forEach(t),
        Bn.forEach(t),
        n = 0;
      n < Rt.length;
      n++
    )
      ((r = Rt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null);)
      (po(n), n.blockedOn === null && Rt.shift());
  }
  var fn = xe.ReactCurrentBatchConfig,
    jr = !0;
  function dc(e, t, n, r) {
    var l = K,
      u = fn.transition;
    fn.transition = null;
    try {
      ((K = 1), ql(e, t, n, r));
    } finally {
      ((K = l), (fn.transition = u));
    }
  }
  function pc(e, t, n, r) {
    var l = K,
      u = fn.transition;
    fn.transition = null;
    try {
      ((K = 4), ql(e, t, n, r));
    } finally {
      ((K = l), (fn.transition = u));
    }
  }
  function ql(e, t, n, r) {
    if (jr) {
      var l = bl(e, t, n, r);
      if (l === null) (vu(e, t, r, Or, n), fo(e, r));
      else if (cc(l, e, t, n, r)) r.stopPropagation();
      else if ((fo(e, r), t & 4 && -1 < ac.indexOf(e))) {
        for (; l !== null;) {
          var u = lr(l);
          if (
            (u !== null && oo(u), (u = bl(e, t, n, r)), u === null && vu(e, t, r, Or, n), u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else vu(e, t, r, null, n);
    }
  }
  var Or = null;
  function bl(e, t, n, r) {
    if (((Or = null), (e = Vl(r)), (e = Gt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ji(t)), e !== null)) return e;
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
        switch (ec()) {
          case Kl:
            return 1;
          case ro:
            return 4;
          case Cr:
          case tc:
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
  var jt = null,
    eu = null,
    Mr = null;
  function vo() {
    if (Mr) return Mr;
    var e,
      t = eu,
      n = t.length,
      r,
      l = "value" in jt ? jt.value : jt.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[u - r]; r++);
    return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Dr(e) {
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
          ? Ir
          : yo),
        (this.isPropagationStopped = yo),
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
    tu = Ae(dn),
    Yn = C({}, dn, { view: 0, detail: 0 }),
    mc = Ae(Yn),
    nu,
    ru,
    Xn,
    Fr = C({}, Yn, {
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
      getModifierState: uu,
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
                ? ((nu = e.screenX - Xn.screenX), (ru = e.screenY - Xn.screenY))
                : (ru = nu = 0),
              (Xn = e)),
            nu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ru;
      },
    }),
    go = Ae(Fr),
    hc = C({}, Fr, { dataTransfer: 0 }),
    vc = Ae(hc),
    yc = C({}, Yn, { relatedTarget: 0 }),
    lu = Ae(yc),
    gc = C({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wc = Ae(gc),
    kc = C({}, dn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    xc = Ae(kc),
    Sc = C({}, dn, { data: 0 }),
    wo = Ae(Sc),
    Ec = {
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
    Cc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Nc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Cc[e]) ? !!t[e] : !1;
  }
  function uu() {
    return Nc;
  }
  var Pc = C({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = Ec[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
      getModifierState: uu,
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
    zc = Ae(Pc),
    Tc = C({}, Fr, {
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
    ko = Ae(Tc),
    Lc = C({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uu,
    }),
    Rc = Ae(Lc),
    jc = C({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Oc = Ae(jc),
    Mc = C({}, Fr, {
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
    Dc = Ae(Mc),
    Ic = [9, 13, 27, 32],
    iu = ce && "CompositionEvent" in window,
    Gn = null;
  ce && "documentMode" in document && (Gn = document.documentMode);
  var Fc = ce && "TextEvent" in window && !Gn,
    xo = ce && (!iu || (Gn && 8 < Gn && 11 >= Gn)),
    So = " ",
    Eo = !1;
  function _o(e, t) {
    switch (e) {
      case "keyup":
        return Ic.indexOf(t.keyCode) !== -1;
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
  var pn = !1;
  function Uc(e, t) {
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
  function Ac(e, t) {
    if (pn)
      return e === "compositionend" || (!iu && _o(e, t))
        ? ((e = vo()), (Mr = eu = jt = null), (pn = !1), e)
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
        return xo && t.locale !== "ko" ? null : t.data;
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
  function No(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Hc[e.type] : t === "textarea";
  }
  function Po(e, t, n, r) {
    (Ki(r),
      (t = $r(t, "onChange")),
      0 < t.length &&
        ((n = new tu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Zn = null,
    Jn = null;
  function Vc(e) {
    Qo(e, 0);
  }
  function Ur(e) {
    var t = gn(e);
    if (Mi(t)) return e;
  }
  function $c(e, t) {
    if (e === "change") return t;
  }
  var zo = !1;
  if (ce) {
    var ou;
    if (ce) {
      var su = "oninput" in document;
      if (!su) {
        var To = document.createElement("div");
        (To.setAttribute("oninput", "return;"), (su = typeof To.oninput == "function"));
      }
      ou = su;
    } else ou = !1;
    zo = ou && (!document.documentMode || 9 < document.documentMode);
  }
  function Lo() {
    Zn && (Zn.detachEvent("onpropertychange", Ro), (Jn = Zn = null));
  }
  function Ro(e) {
    if (e.propertyName === "value" && Ur(Jn)) {
      var t = [];
      (Po(t, Jn, e, Vl(e)), Zi(Vc, t));
    }
  }
  function Bc(e, t, n) {
    e === "focusin"
      ? (Lo(), (Zn = t), (Jn = n), Zn.attachEvent("onpropertychange", Ro))
      : e === "focusout" && Lo();
  }
  function Wc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ur(Jn);
  }
  function Qc(e, t) {
    if (e === "click") return Ur(t);
  }
  function Kc(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function Yc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : Yc;
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
  function jo(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Oo(e, t) {
    var n = jo(e);
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
      n = jo(n);
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
  function Do() {
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
  function au(e) {
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
  function Xc(e) {
    var t = Do(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Mo(n.ownerDocument.documentElement, n)) {
      if (r !== null && au(n)) {
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
            (l = Oo(n, u)));
          var i = Oo(n, r);
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
  var Gc = ce && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    cu = null,
    bn = null,
    fu = !1;
  function Io(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fu ||
      mn == null ||
      mn !== xr(r) ||
      ((r = mn),
      "selectionStart" in r && au(r)
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
        (r = $r(cu, "onSelect")),
        0 < r.length &&
          ((t = new tu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))));
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
  var hn = {
      animationend: Ar("Animation", "AnimationEnd"),
      animationiteration: Ar("Animation", "AnimationIteration"),
      animationstart: Ar("Animation", "AnimationStart"),
      transitionend: Ar("Transition", "TransitionEnd"),
    },
    du = {},
    Fo = {};
  ce &&
    ((Fo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hn.animationend.animation,
      delete hn.animationiteration.animation,
      delete hn.animationstart.animation),
    "TransitionEvent" in window || delete hn.transitionend.transition);
  function Hr(e) {
    if (du[e]) return du[e];
    if (!hn[e]) return e;
    var t = hn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Fo) return (du[e] = t[n]);
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
  for (var pu = 0; pu < Bo.length; pu++) {
    var mu = Bo[pu],
      Zc = mu.toLowerCase(),
      Jc = mu[0].toUpperCase() + mu.slice(1);
    Ot(Zc, "on" + Jc);
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
    qc = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
  function Wo(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Za(r, t, void 0, e), (e.currentTarget = null));
  }
  function Qo(e, t) {
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
              m = o.currentTarget;
            if (((o = o.listener), s !== u && l.isPropagationStopped())) break e;
            (Wo(l, o, m), (u = s));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((o = r[i]),
              (s = o.instance),
              (m = o.currentTarget),
              (o = o.listener),
              s !== u && l.isPropagationStopped())
            )
              break e;
            (Wo(l, o, m), (u = s));
          }
      }
    }
    if (_r) throw ((e = Ql), (_r = !1), (Ql = null), e);
  }
  function Z(e, t) {
    var n = t[Su];
    n === void 0 && (n = t[Su] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ko(t, e, 2, !1), n.add(r));
  }
  function hu(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ko(n, e, r, t));
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Vr]) {
      ((e[Vr] = !0),
        I.forEach(function (n) {
          n !== "selectionchange" && (qc.has(n) || hu(n, !1, e), hu(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || ((t[Vr] = !0), hu("selectionchange", !1, t));
    }
  }
  function Ko(e, t, n, r) {
    switch (ho(t)) {
      case 1:
        var l = dc;
        break;
      case 4:
        l = pc;
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
  function vu(e, t, n, r, l) {
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
    Zi(function () {
      var m = u,
        g = Vl(n),
        w = [];
      e: {
        var v = $o.get(e);
        if (v !== void 0) {
          var E = tu,
            P = e;
          switch (e) {
            case "keypress":
              if (Dr(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = zc;
              break;
            case "focusin":
              ((P = "focus"), (E = lu));
              break;
            case "focusout":
              ((P = "blur"), (E = lu));
              break;
            case "beforeblur":
            case "afterblur":
              E = lu;
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
              E = go;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = vc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Rc;
              break;
            case Uo:
            case Ao:
            case Ho:
              E = wc;
              break;
            case Vo:
              E = Oc;
              break;
            case "scroll":
              E = mc;
              break;
            case "wheel":
              E = Dc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = xc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = ko;
          }
          var z = (t & 4) !== 0,
            se = !z && e === "scroll",
            f = z ? (v !== null ? v + "Capture" : null) : v;
          z = [];
          for (var a = m, d; a !== null;) {
            d = a;
            var k = d.stateNode;
            if (
              (d.tag === 5 &&
                k !== null &&
                ((d = k), f !== null && ((k = Fn(a, f)), k != null && z.push(nr(a, k, d)))),
              se)
            )
              break;
            a = a.return;
          }
          0 < z.length && ((v = new E(v, P, null, n, g)), w.push({ event: v, listeners: z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (E = e === "mouseout" || e === "pointerout"),
            v && n !== Hl && (P = n.relatedTarget || n.fromElement) && (Gt(P) || P[wt]))
          )
            break e;
          if (
            (E || v) &&
            ((v =
              g.window === g
                ? g
                : (v = g.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            E
              ? ((P = n.relatedTarget || n.toElement),
                (E = m),
                (P = P ? Gt(P) : null),
                P !== null &&
                  ((se = Xt(P)), P !== se || (P.tag !== 5 && P.tag !== 6)) &&
                  (P = null))
              : ((E = null), (P = m)),
            E !== P)
          ) {
            if (
              ((z = go),
              (k = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((z = ko), (k = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (se = E == null ? v : gn(E)),
              (d = P == null ? v : gn(P)),
              (v = new z(k, a + "leave", E, n, g)),
              (v.target = se),
              (v.relatedTarget = d),
              (k = null),
              Gt(g) === m &&
                ((z = new z(f, a + "enter", P, n, g)),
                (z.target = d),
                (z.relatedTarget = se),
                (k = z)),
              (se = k),
              E && P)
            )
              t: {
                for (z = E, f = P, a = 0, d = z; d; d = vn(d)) a++;
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
            (E !== null && Yo(w, v, E, z, !1), P !== null && se !== null && Yo(w, se, P, z, !0));
          }
        }
        e: {
          if (
            ((v = m ? gn(m) : window),
            (E = v.nodeName && v.nodeName.toLowerCase()),
            E === "select" || (E === "input" && v.type === "file"))
          )
            var T = $c;
          else if (No(v))
            if (zo) T = Kc;
            else {
              T = Wc;
              var R = Bc;
            }
          else
            (E = v.nodeName) &&
              E.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (T = Qc);
          if (T && (T = T(e, m))) {
            Po(w, T, n, g);
            break e;
          }
          (R && R(e, v, m),
            e === "focusout" &&
              (R = v._wrapperState) &&
              R.controlled &&
              v.type === "number" &&
              Dl(v, "number", v.value));
        }
        switch (((R = m ? gn(m) : window), e)) {
          case "focusin":
            (No(R) || R.contentEditable === "true") && ((mn = R), (cu = m), (bn = null));
            break;
          case "focusout":
            bn = cu = mn = null;
            break;
          case "mousedown":
            fu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((fu = !1), Io(w, n, g));
            break;
          case "selectionchange":
            if (Gc) break;
          case "keydown":
          case "keyup":
            Io(w, n, g);
        }
        var j;
        if (iu)
          e: {
            switch (e) {
              case "compositionstart":
                var D = "onCompositionStart";
                break e;
              case "compositionend":
                D = "onCompositionEnd";
                break e;
              case "compositionupdate":
                D = "onCompositionUpdate";
                break e;
            }
            D = void 0;
          }
        else
          pn
            ? _o(e, n) && (D = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
        (D &&
          (xo &&
            n.locale !== "ko" &&
            (pn || D !== "onCompositionStart"
              ? D === "onCompositionEnd" && pn && (j = vo())
              : ((jt = g), (eu = "value" in jt ? jt.value : jt.textContent), (pn = !0))),
          (R = $r(m, D)),
          0 < R.length &&
            ((D = new wo(D, e, null, n, g)),
            w.push({ event: D, listeners: R }),
            j ? (D.data = j) : ((j = Co(n)), j !== null && (D.data = j)))),
          (j = Fc ? Uc(e, n) : Ac(e, n)) &&
            ((m = $r(m, "onBeforeInput")),
            0 < m.length &&
              ((g = new wo("onBeforeInput", "beforeinput", null, n, g)),
              w.push({ event: g, listeners: m }),
              (g.data = j))));
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
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Fn(e, n)),
        u != null && r.unshift(nr(e, u, l)),
        (u = Fn(e, t)),
        u != null && r.push(nr(e, u, l))),
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
  function Yo(e, t, n, r, l) {
    for (var u = t._reactName, i = []; n !== null && n !== r;) {
      var o = n,
        s = o.alternate,
        m = o.stateNode;
      if (s !== null && s === r) break;
      (o.tag === 5 &&
        m !== null &&
        ((o = m),
        l
          ? ((s = Fn(n, u)), s != null && i.unshift(nr(n, s, o)))
          : l || ((s = Fn(n, u)), s != null && i.push(nr(n, s, o)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var bc = /\r\n?/g,
    ef = /\u0000|\uFFFD/g;
  function Xo(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        bc,
        `
`,
      )
      .replace(ef, "");
  }
  function Br(e, t, n) {
    if (((t = Xo(t)), Xo(e) !== t && n)) throw Error(p(425));
  }
  function Wr() {}
  var yu = null,
    gu = null;
  function wu(e, t) {
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
  var ku = typeof setTimeout == "function" ? setTimeout : void 0,
    tf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Go = typeof Promise == "function" ? Promise : void 0,
    nf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Go < "u"
          ? function (e) {
              return Go.resolve(null).then(e).catch(rf);
            }
          : ku;
  function rf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function xu(e, t) {
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
  var yn = Math.random().toString(36).slice(2),
    dt = "__reactFiber$" + yn,
    rr = "__reactProps$" + yn,
    wt = "__reactContainer$" + yn,
    Su = "__reactEvents$" + yn,
    lf = "__reactListeners$" + yn,
    uf = "__reactHandles$" + yn;
  function Gt(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[wt] || n[dt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Zo(e); e !== null;) {
            if ((n = e[dt])) return n;
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
      (e = e[dt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var Eu = [],
    wn = -1;
  function Dt(e) {
    return { current: e };
  }
  function J(e) {
    0 > wn || ((e.current = Eu[wn]), (Eu[wn] = null), wn--);
  }
  function G(e, t) {
    (wn++, (Eu[wn] = e.current), (e.current = t));
  }
  var It = {},
    Se = Dt(It),
    Re = Dt(!1),
    Zt = It;
  function kn(e, t) {
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
    (J(Re), J(Se));
  }
  function Jo(e, t, n) {
    if (Se.current !== It) throw Error(p(168));
    (G(Se, t), G(Re, n));
  }
  function qo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, X(e) || "Unknown", l));
    return C({}, n, r);
  }
  function Yr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
      (Zt = Se.current),
      G(Se, e),
      G(Re, Re.current),
      !0
    );
  }
  function bo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    (n
      ? ((e = qo(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        J(Re),
        J(Se),
        G(Se, e))
      : J(Re),
      G(Re, n));
  }
  var kt = null,
    Xr = !1,
    _u = !1;
  function es(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function of(e) {
    ((Xr = !0), es(e));
  }
  function Ft() {
    if (!_u && kt !== null) {
      _u = !0;
      var e = 0,
        t = K;
      try {
        var n = kt;
        for (K = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((kt = null), (Xr = !1));
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), to(Kl, Ft), l);
      } finally {
        ((K = t), (_u = !1));
      }
    }
    return null;
  }
  var xn = [],
    Sn = 0,
    Gr = null,
    Zr = 0,
    Ke = [],
    Ye = 0,
    Jt = null,
    xt = 1,
    St = "";
  function qt(e, t) {
    ((xn[Sn++] = Zr), (xn[Sn++] = Gr), (Gr = e), (Zr = t));
  }
  function ts(e, t, n) {
    ((Ke[Ye++] = xt), (Ke[Ye++] = St), (Ke[Ye++] = Jt), (Jt = e));
    var r = xt;
    e = St;
    var l = 32 - tt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var u = 32 - tt(t) + l;
    if (30 < u) {
      var i = l - (l % 5);
      ((u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (xt = (1 << (32 - tt(t) + l)) | (n << l) | r),
        (St = u + e));
    } else ((xt = (1 << u) | (n << l) | r), (St = e));
  }
  function Cu(e) {
    e.return !== null && (qt(e, 1), ts(e, 1, 0));
  }
  function Nu(e) {
    for (; e === Gr;) ((Gr = xn[--Sn]), (xn[Sn] = null), (Zr = xn[--Sn]), (xn[Sn] = null));
    for (; e === Jt;)
      ((Jt = Ke[--Ye]),
        (Ke[Ye] = null),
        (St = Ke[--Ye]),
        (Ke[Ye] = null),
        (xt = Ke[--Ye]),
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
          t !== null ? ((e.stateNode = t), (He = e), (Ve = Mt(t.firstChild)), !0) : !1
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
            ? ((n = Jt !== null ? { id: xt, overflow: St } : null),
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
  function Pu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zu(e) {
    if (te) {
      var t = Ve;
      if (t) {
        var n = t;
        if (!rs(e, t)) {
          if (Pu(e)) throw Error(p(418));
          t = Mt(n.nextSibling);
          var r = He;
          t && rs(e, t) ? ns(r, n) : ((e.flags = (e.flags & -4097) | 2), (te = !1), (He = e));
        }
      } else {
        if (Pu(e)) throw Error(p(418));
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
        ((t = e.type), (t = t !== "head" && t !== "body" && !wu(e.type, e.memoizedProps))),
      t && (t = Ve))
    ) {
      if (Pu(e)) throw (us(), Error(p(418)));
      for (; t;) (ns(e, t), (t = Mt(t.nextSibling)));
    }
    if ((ls(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ve = Mt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else Ve = He ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function us() {
    for (var e = Ve; e;) e = Mt(e.nextSibling);
  }
  function En() {
    ((Ve = He = null), (te = !1));
  }
  function Tu(e) {
    rt === null ? (rt = [e]) : rt.push(e);
  }
  var sf = xe.ReactCurrentBatchConfig;
  function ur(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(p(147, e));
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
  function is(e) {
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
    function o(f, a, d, k) {
      return a === null || a.tag !== 6
        ? ((a = ki(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, k) {
      var T = d.type;
      return T === Te
        ? g(f, a, d.props.children, k, d.key)
        : a !== null &&
            (a.elementType === T ||
              (typeof T == "object" && T !== null && T.$$typeof === Le && is(T) === a.type))
          ? ((k = l(a, d.props)), (k.ref = ur(f, a, d)), (k.return = f), k)
          : ((k = Sl(d.type, d.key, d.props, null, f.mode, k)),
            (k.ref = ur(f, a, d)),
            (k.return = f),
            k);
    }
    function m(f, a, d, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = xi(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function g(f, a, d, k, T) {
      return a === null || a.tag !== 7
        ? ((a = on(d, f.mode, k, T)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function w(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = ki("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return (
              (d = Sl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ur(f, null, a)),
              (d.return = f),
              d
            );
          case Ne:
            return ((a = xi(a, f.mode, d)), (a.return = f), a);
          case Le:
            var k = a._init;
            return w(f, k(a._payload), d);
        }
        if (Mn(a) || O(a)) return ((a = on(a, f.mode, d, null)), (a.return = f), a);
        qr(f, a);
      }
      return null;
    }
    function v(f, a, d, k) {
      var T = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return T !== null ? null : o(f, a, "" + d, k);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === T ? s(f, a, d, k) : null;
          case Ne:
            return d.key === T ? m(f, a, d, k) : null;
          case Le:
            return ((T = d._init), v(f, a, T(d._payload), k));
        }
        if (Mn(d) || O(d)) return T !== null ? null : g(f, a, d, k, null);
        qr(f, d);
      }
      return null;
    }
    function E(f, a, d, k, T) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((f = f.get(d) || null), o(a, f, "" + k, T));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case be:
            return ((f = f.get(k.key === null ? d : k.key) || null), s(a, f, k, T));
          case Ne:
            return ((f = f.get(k.key === null ? d : k.key) || null), m(a, f, k, T));
          case Le:
            var R = k._init;
            return E(f, a, d, R(k._payload), T);
        }
        if (Mn(k) || O(k)) return ((f = f.get(d) || null), g(a, f, k, T, null));
        qr(a, k);
      }
      return null;
    }
    function P(f, a, d, k) {
      for (var T = null, R = null, j = a, D = (a = 0), ye = null; j !== null && D < d.length; D++) {
        j.index > D ? ((ye = j), (j = null)) : (ye = j.sibling);
        var B = v(f, j, d[D], k);
        if (B === null) {
          j === null && (j = ye);
          break;
        }
        (e && j && B.alternate === null && t(f, j),
          (a = u(B, a, D)),
          R === null ? (T = B) : (R.sibling = B),
          (R = B),
          (j = ye));
      }
      if (D === d.length) return (n(f, j), te && qt(f, D), T);
      if (j === null) {
        for (; D < d.length; D++)
          ((j = w(f, d[D], k)),
            j !== null && ((a = u(j, a, D)), R === null ? (T = j) : (R.sibling = j), (R = j)));
        return (te && qt(f, D), T);
      }
      for (j = r(f, j); D < d.length; D++)
        ((ye = E(j, f, D, d[D], k)),
          ye !== null &&
            (e && ye.alternate !== null && j.delete(ye.key === null ? D : ye.key),
            (a = u(ye, a, D)),
            R === null ? (T = ye) : (R.sibling = ye),
            (R = ye)));
      return (
        e &&
          j.forEach(function (Kt) {
            return t(f, Kt);
          }),
        te && qt(f, D),
        T
      );
    }
    function z(f, a, d, k) {
      var T = O(d);
      if (typeof T != "function") throw Error(p(150));
      if (((d = T.call(d)), d == null)) throw Error(p(151));
      for (
        var R = (T = null), j = a, D = (a = 0), ye = null, B = d.next();
        j !== null && !B.done;
        D++, B = d.next()
      ) {
        j.index > D ? ((ye = j), (j = null)) : (ye = j.sibling);
        var Kt = v(f, j, B.value, k);
        if (Kt === null) {
          j === null && (j = ye);
          break;
        }
        (e && j && Kt.alternate === null && t(f, j),
          (a = u(Kt, a, D)),
          R === null ? (T = Kt) : (R.sibling = Kt),
          (R = Kt),
          (j = ye));
      }
      if (B.done) return (n(f, j), te && qt(f, D), T);
      if (j === null) {
        for (; !B.done; D++, B = d.next())
          ((B = w(f, B.value, k)),
            B !== null && ((a = u(B, a, D)), R === null ? (T = B) : (R.sibling = B), (R = B)));
        return (te && qt(f, D), T);
      }
      for (j = r(f, j); !B.done; D++, B = d.next())
        ((B = E(j, f, D, B.value, k)),
          B !== null &&
            (e && B.alternate !== null && j.delete(B.key === null ? D : B.key),
            (a = u(B, a, D)),
            R === null ? (T = B) : (R.sibling = B),
            (R = B)));
      return (
        e &&
          j.forEach(function (Vf) {
            return t(f, Vf);
          }),
        te && qt(f, D),
        T
      );
    }
    function se(f, a, d, k) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Te &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var T = d.key, R = a; R !== null;) {
                if (R.key === T) {
                  if (((T = d.type), T === Te)) {
                    if (R.tag === 7) {
                      (n(f, R.sibling), (a = l(R, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    R.elementType === T ||
                    (typeof T == "object" && T !== null && T.$$typeof === Le && is(T) === R.type)
                  ) {
                    (n(f, R.sibling),
                      (a = l(R, d.props)),
                      (a.ref = ur(f, R, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, R);
                  break;
                } else t(f, R);
                R = R.sibling;
              }
              d.type === Te
                ? ((a = on(d.props.children, f.mode, k, d.key)), (a.return = f), (f = a))
                : ((k = Sl(d.type, d.key, d.props, null, f.mode, k)),
                  (k.ref = ur(f, a, d)),
                  (k.return = f),
                  (f = k));
            }
            return i(f);
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
              ((a = xi(d, f.mode, k)), (a.return = f), (f = a));
            }
            return i(f);
          case Le:
            return ((R = d._init), se(f, a, R(d._payload), k));
        }
        if (Mn(d)) return P(f, a, d, k);
        if (O(d)) return z(f, a, d, k);
        qr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = ki(d, f.mode, k)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return se;
  }
  var _n = os(!0),
    ss = os(!1),
    br = Dt(null),
    el = null,
    Cn = null,
    Lu = null;
  function Ru() {
    Lu = Cn = el = null;
  }
  function ju(e) {
    var t = br.current;
    (J(br), (e._currentValue = t));
  }
  function Ou(e, t, n) {
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
    ((el = e),
      (Lu = Cn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Oe = !0), (e.firstContext = null)));
  }
  function Xe(e) {
    var t = e._currentValue;
    if (Lu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
        if (el === null) throw Error(p(308));
        ((Cn = e), (el.dependencies = { lanes: 0, firstContext: e }));
      } else Cn = Cn.next = e;
    return t;
  }
  var bt = null;
  function Mu(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function as(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Mu(t)) : ((n.next = l.next), (l.next = n)),
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
  function Du(e) {
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
      l === null ? ((t.next = t), Mu(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Et(e, n)
    );
  }
  function tl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n));
    }
  }
  function fs(e, t) {
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
    Ut = !1;
    var u = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        m = s.next;
      ((s.next = null), i === null ? (u = m) : (i.next = m), (i = s));
      var g = e.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (o = g.lastBaseUpdate),
        o !== i && (o === null ? (g.firstBaseUpdate = m) : (o.next = m), (g.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var w = l.baseState;
      ((i = 0), (g = m = s = null), (o = u));
      do {
        var v = o.lane,
          E = o.eventTime;
        if ((r & v) === v) {
          g !== null &&
            (g = g.next =
              {
                eventTime: E,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var P = e,
              z = o;
            switch (((v = t), (E = n), z.tag)) {
              case 1:
                if (((P = z.payload), typeof P == "function")) {
                  w = P.call(E, w, v);
                  break e;
                }
                w = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = z.payload), (v = typeof P == "function" ? P.call(E, w, v) : P), v == null)
                )
                  break e;
                w = C({}, w, v);
                break e;
              case 2:
                Ut = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64), (v = l.effects), v === null ? (l.effects = [o]) : v.push(o));
        } else
          ((E = {
            eventTime: E,
            lane: v,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            g === null ? ((m = g = E), (s = w)) : (g = g.next = E),
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
        (g === null && (s = w),
        (l.baseState = s),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = g),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ((nn |= i), (e.lanes = i), (e.memoizedState = w));
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
  var ir = {},
    pt = Dt(ir),
    or = Dt(ir),
    sr = Dt(ir);
  function en(e) {
    if (e === ir) throw Error(p(174));
    return e;
  }
  function Iu(e, t) {
    switch ((G(sr, t), G(or, e), G(pt, ir), (e = t.nodeType), e)) {
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
    (J(pt), G(pt, t));
  }
  function Pn() {
    (J(pt), J(or), J(sr));
  }
  function ps(e) {
    en(sr.current);
    var t = en(pt.current),
      n = Fl(t, e.type);
    t !== n && (G(or, e), G(pt, n));
  }
  function Fu(e) {
    or.current === e && (J(pt), J(or));
  }
  var re = Dt(0);
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
  var Uu = [];
  function Au() {
    for (var e = 0; e < Uu.length; e++) Uu[e]._workInProgressVersionPrimary = null;
    Uu.length = 0;
  }
  var ll = xe.ReactCurrentDispatcher,
    Hu = xe.ReactCurrentBatchConfig,
    tn = 0,
    le = null,
    de = null,
    he = null,
    ul = !1,
    ar = !1,
    cr = 0,
    af = 0;
  function Ee() {
    throw Error(p(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
    return !0;
  }
  function $u(e, t, n, r, l, u) {
    if (
      ((tn = u),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? pf : mf),
      (e = n(r, l)),
      ar)
    ) {
      u = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= u)) throw Error(p(301));
        ((u += 1), (he = de = null), (t.updateQueue = null), (ll.current = hf), (e = n(r, l)));
      } while (ar);
    }
    if (
      ((ll.current = sl),
      (t = de !== null && de.next !== null),
      (tn = 0),
      (he = de = le = null),
      (ul = !1),
      t)
    )
      throw Error(p(300));
    return e;
  }
  function Bu() {
    var e = cr !== 0;
    return ((cr = 0), e);
  }
  function mt() {
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
  function Wu(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(p(311));
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
        m = u;
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
          (s === null ? ((o = s = w), (i = r)) : (s = s.next = w), (le.lanes |= g), (nn |= g));
        }
        m = m.next;
      } while (m !== null && m !== u);
      (s === null ? (i = r) : (s.next = o),
        nt(r, t.memoizedState) || (Oe = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), (le.lanes |= u), (nn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Qu(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(p(311));
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
  function ms() {}
  function hs(e, t) {
    var n = le,
      r = Ge(),
      l = t(),
      u = !nt(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Oe = !0)),
      (r = r.queue),
      Ku(gs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (he !== null && he.memoizedState.tag & 1))
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
    ((t.value = n), (t.getSnapshot = r), ws(t) && ks(e));
  }
  function gs(e, t, n) {
    return n(function () {
      ws(t) && ks(e);
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
  function ks(e) {
    var t = Et(e, 1);
    t !== null && ot(t, e, 1, -1);
  }
  function xs(e) {
    var t = mt();
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
      (e = e.dispatch = df.bind(null, le, e)),
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
  function il(e, t, n, r) {
    var l = mt();
    ((le.flags |= e), (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ol(e, t, n, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (de !== null) {
      var i = de.memoizedState;
      if (((u = i.destroy), r !== null && Vu(r, i.deps))) {
        l.memoizedState = dr(t, n, u, r);
        return;
      }
    }
    ((le.flags |= e), (l.memoizedState = dr(1 | t, n, u, r)));
  }
  function Es(e, t) {
    return il(8390656, 8, e, t);
  }
  function Ku(e, t) {
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
  function Yu() {}
  function zs(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ts(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vu(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ls(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n))
      : (nt(n, t) || ((n = uo()), (le.lanes |= n), (nn |= n), (e.baseState = !0)), t);
  }
  function cf(e, t) {
    var n = K;
    ((K = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Hu.transition;
    Hu.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((K = n), (Hu.transition = r));
    }
  }
  function Rs() {
    return Ge().memoizedState;
  }
  function ff(e, t, n) {
    var r = Bt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), js(e)))
      Os(t, n);
    else if (((n = as(e, t, n, r)), n !== null)) {
      var l = ze();
      (ot(n, e, r, l), Ms(n, t, r));
    }
  }
  function df(e, t, n) {
    var r = Bt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (js(e)) Os(t, l);
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
            (s === null ? ((l.next = l), Mu(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = as(e, t, l, r)), n !== null && ((l = ze()), ot(n, e, r, l), Ms(n, t, r)));
    }
  }
  function js(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function Os(e, t) {
    ar = ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Ms(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n));
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
    pf = {
      readContext: Xe,
      useCallback: function (e, t) {
        return ((mt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Xe,
      useEffect: Es,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), il(4194308, 4, Ns.bind(null, t, e), n));
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
          (e = e.dispatch = ff.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = mt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: xs,
      useDebugValue: Yu,
      useDeferredValue: function (e) {
        return (mt().memoizedState = e);
      },
      useTransition: function () {
        var e = xs(!1),
          t = e[0];
        return ((e = cf.bind(null, e[1])), (mt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          l = mt();
        if (te) {
          if (n === void 0) throw Error(p(407));
          n = n();
        } else {
          if (((n = t()), ve === null)) throw Error(p(349));
          (tn & 30) !== 0 || vs(r, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          Es(gs.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          dr(9, ys.bind(null, r, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = mt(),
          t = ve.identifierPrefix;
        if (te) {
          var n = St,
            r = xt;
          ((n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = cr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = af++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    mf = {
      readContext: Xe,
      useCallback: zs,
      useContext: Xe,
      useEffect: Ku,
      useImperativeHandle: Ps,
      useInsertionEffect: _s,
      useLayoutEffect: Cs,
      useMemo: Ts,
      useReducer: Wu,
      useRef: Ss,
      useState: function () {
        return Wu(fr);
      },
      useDebugValue: Yu,
      useDeferredValue: function (e) {
        var t = Ge();
        return Ls(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Wu(fr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: ms,
      useSyncExternalStore: hs,
      useId: Rs,
      unstable_isNewReconciler: !1,
    },
    hf = {
      readContext: Xe,
      useCallback: zs,
      useContext: Xe,
      useEffect: Ku,
      useImperativeHandle: Ps,
      useInsertionEffect: _s,
      useLayoutEffect: Cs,
      useMemo: Ts,
      useReducer: Qu,
      useRef: Ss,
      useState: function () {
        return Qu(fr);
      },
      useDebugValue: Yu,
      useDeferredValue: function (e) {
        var t = Ge();
        return de === null ? (t.memoizedState = e) : Ls(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Qu(fr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: ms,
      useSyncExternalStore: hs,
      useId: Rs,
      unstable_isNewReconciler: !1,
    };
  function lt(e, t) {
    if (e && e.defaultProps) {
      ((t = C({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Xu(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : C({}, t, n)),
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
        u = _t(r, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (ot(t, e, l, r), tl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Bt(e),
        u = _t(r, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
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
  function Ds(e, t, n, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !qn(n, r) || !qn(l, u)
          : !0
    );
  }
  function Is(e, t, n) {
    var r = !1,
      l = It,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Xe(u))
        : ((l = je(t) ? Zt : Se.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? kn(e, l) : It)),
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
  function Fs(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null));
  }
  function Gu(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Du(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = Xe(u))
      : ((u = je(t) ? Zt : Se.current), (l.context = kn(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (Xu(e, t, u, n), (l.state = e.memoizedState)),
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
      do ((n += V(r)), (r = r.return));
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
  function Zu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ju(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var vf = typeof WeakMap == "function" ? WeakMap : Map;
  function Us(e, t, n) {
    ((n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (vl || ((vl = !0), (di = r)), Ju(e, t));
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
          Ju(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          (Ju(e, t),
            typeof r != "function" && (Vt === null ? (Vt = new Set([this])) : Vt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
        }),
      n
    );
  }
  function Hs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new vf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Lf.bind(null, e, t, n)), t.then(e, e));
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
  var yf = xe.ReactCurrentOwner,
    Oe = !1;
  function Pe(e, t, n, r) {
    t.child = e === null ? ss(t, null, n, r) : _n(t, e.child, n, r);
  }
  function Bs(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Nn(t, l),
      (r = $u(e, t, n, r, u, l)),
      (n = Bu()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ct(e, t, l))
        : (te && n && Cu(t), (t.flags |= 1), Pe(e, t, r, l), t.child)
    );
  }
  function Ws(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !wi(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Qs(e, t, u, r, l))
        : ((e = Sl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var i = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : qn), n(i, r) && e.ref === t.ref))
        return Ct(e, t, l);
    }
    return ((t.flags |= 1), (e = Qt(u, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Qs(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (qn(u, r) && e.ref === t.ref)
        if (((Oe = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Oe = !0);
        else return ((t.lanes = e.lanes), Ct(e, t, l));
    }
    return qu(e, t, n, r, l);
  }
  function Ks(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          G(Ln, $e),
          ($e |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            G(Ln, $e),
            ($e |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = u !== null ? u.baseLanes : n),
          G(Ln, $e),
          ($e |= r));
      }
    else
      (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        G(Ln, $e),
        ($e |= r));
    return (Pe(e, t, l, n), t.child);
  }
  function Ys(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qu(e, t, n, r, l) {
    var u = je(n) ? Zt : Se.current;
    return (
      (u = kn(t, u)),
      Nn(t, l),
      (n = $u(e, t, n, r, u, l)),
      (r = Bu()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ct(e, t, l))
        : (te && r && Cu(t), (t.flags |= 1), Pe(e, t, n, l), t.child)
    );
  }
  function Xs(e, t, n, r, l) {
    if (je(n)) {
      var u = !0;
      Yr(t);
    } else u = !1;
    if ((Nn(t, l), t.stateNode === null)) (fl(e, t), Is(t, n, r), Gu(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var s = i.context,
        m = n.contextType;
      typeof m == "object" && m !== null
        ? (m = Xe(m))
        : ((m = je(n) ? Zt : Se.current), (m = kn(t, m)));
      var g = n.getDerivedStateFromProps,
        w = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      (w ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== m) && Fs(t, i, r, m)),
        (Ut = !1));
      var v = t.memoizedState;
      ((i.state = v),
        nl(t, r, i, l),
        (s = t.memoizedState),
        o !== r || v !== s || Re.current || Ut
          ? (typeof g == "function" && (Xu(t, n, g, r), (s = t.memoizedState)),
            (o = Ut || Ds(t, n, o, r, v, s, m))
              ? (w ||
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
            (i.context = m),
            (r = o))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
    } else {
      ((i = t.stateNode),
        cs(e, t),
        (o = t.memoizedProps),
        (m = t.type === t.elementType ? o : lt(t.type, o)),
        (i.props = m),
        (w = t.pendingProps),
        (v = i.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Xe(s))
          : ((s = je(n) ? Zt : Se.current), (s = kn(t, s))));
      var E = n.getDerivedStateFromProps;
      ((g = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== w || v !== s) && Fs(t, i, r, s)),
        (Ut = !1),
        (v = t.memoizedState),
        (i.state = v),
        nl(t, r, i, l));
      var P = t.memoizedState;
      o !== w || v !== P || Re.current || Ut
        ? (typeof E == "function" && (Xu(t, n, E, r), (P = t.memoizedState)),
          (m = Ut || Ds(t, n, m, r, v, P, s) || !1)
            ? (g ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, P, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, P, s)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = P)),
          (i.props = r),
          (i.state = P),
          (i.context = s),
          (r = m))
        : (typeof i.componentDidUpdate != "function" ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return bu(e, t, n, r, u, l);
  }
  function bu(e, t, n, r, l, u) {
    Ys(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && bo(t, n, !1), Ct(e, t, u));
    ((r = t.stateNode), (yf.current = t));
    var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = _n(t, e.child, null, u)), (t.child = _n(t, null, o, u)))
        : Pe(e, t, o, u),
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
      Iu(e, t.containerInfo));
  }
  function Zs(e, t, n, r, l) {
    return (En(), Tu(l), (t.flags |= 256), Pe(e, t, n, r), t.child);
  }
  var ei = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ti(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = re.current,
      u = !1,
      i = (t.flags & 128) !== 0,
      o;
    if (
      ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      G(re, l & 1),
      e === null)
    )
      return (
        zu(t),
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
                (e = on(e, r, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = ti(n)),
                (t.memoizedState = ei),
                e)
              : ni(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return gf(e, t, i, r, o, l, n);
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
            ? ti(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = ei),
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
  function ni(e, t) {
    return (
      (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function cl(e, t, n, r) {
    return (
      r !== null && Tu(r),
      _n(t, e.child, null, n),
      (e = ni(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function gf(e, t, n, r, l, u, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zu(Error(p(422)))), cl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = r.fallback),
            (l = t.mode),
            (r = El({ mode: "visible", children: r.children }, l, 0, null)),
            (u = on(u, l, i, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            (t.mode & 1) !== 0 && _n(t, e.child, null, i),
            (t.child.memoizedState = ti(i)),
            (t.memoizedState = ei),
            u);
    if ((t.mode & 1) === 0) return cl(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (u = Error(p(419))), (r = Zu(u, r, void 0)), cl(e, t, i, r));
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
          l !== 0 && l !== u.retryLane && ((u.retryLane = l), Et(e, l), ot(r, e, l, -1)));
      }
      return (gi(), (r = Zu(Error(p(421)))), cl(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Rf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (Ve = Mt(l.nextSibling)),
        (He = t),
        (te = !0),
        (rt = null),
        e !== null &&
          ((Ke[Ye++] = xt),
          (Ke[Ye++] = St),
          (Ke[Ye++] = Jt),
          (xt = e.id),
          (St = e.overflow),
          (Jt = t)),
        (t = ni(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function qs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ou(e.return, t, n));
  }
  function ri(e, t, n, r, l) {
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
  function bs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
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
            ri(t, !1, l, n, u));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ri(t, !0, n, null, u);
          break;
        case "together":
          ri(t, !1, null, null, void 0);
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
  function wf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Gs(t), En());
        break;
      case 5:
        ps(t);
        break;
      case 1:
        je(t.type) && Yr(t);
        break;
      case 4:
        Iu(t, t.stateNode.containerInfo);
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
  var ea, li, ta, na;
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
    (li = function () {}),
    (ta = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(pt.current));
        var u = null;
        switch (n) {
          case "input":
            ((l = Ol(e, l)), (r = Ol(e, r)), (u = []));
            break;
          case "select":
            ((l = C({}, l, { value: void 0 })), (r = C({}, r, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = Il(e, l)), (r = Il(e, r)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
        }
        Ul(n, r);
        var i;
        n = null;
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === "style") {
              var o = l[m];
              for (i in o) o.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              m !== "dangerouslySetInnerHTML" &&
                m !== "children" &&
                m !== "suppressContentEditableWarning" &&
                m !== "suppressHydrationWarning" &&
                m !== "autoFocus" &&
                (L.hasOwnProperty(m) ? u || (u = []) : (u = u || []).push(m, null));
        for (m in r) {
          var s = r[m];
          if (
            ((o = l != null ? l[m] : void 0),
            r.hasOwnProperty(m) && s !== o && (s != null || o != null))
          )
            if (m === "style")
              if (o) {
                for (i in o)
                  !o.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in s) s.hasOwnProperty(i) && o[i] !== s[i] && (n || (n = {}), (n[i] = s[i]));
              } else (n || (u || (u = []), u.push(m, n)), (n = s));
            else
              m === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (u = u || []).push(m, s))
                : m === "children"
                  ? (typeof s != "string" && typeof s != "number") || (u = u || []).push(m, "" + s)
                  : m !== "suppressContentEditableWarning" &&
                    m !== "suppressHydrationWarning" &&
                    (L.hasOwnProperty(m)
                      ? (s != null && m === "onScroll" && Z("scroll", e), u || o === s || (u = []))
                      : (u = u || []).push(m, s));
        }
        n && (u = u || []).push("style", n);
        var m = u;
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
  function kf(e, t, n) {
    var r = t.pendingProps;
    switch ((Nu(t), t.tag)) {
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
        return (je(t.type) && Kr(), _e(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Pn(),
          J(Re),
          J(Se),
          Au(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Jr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), rt !== null && (hi(rt), (rt = null)))),
          li(e, t),
          _e(t),
          null
        );
      case 5:
        Fu(t);
        var l = en(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ta(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return (_e(t), null);
          }
          if (((e = en(pt.current)), Jr(t))) {
            ((r = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((r[dt] = t), (r[rr] = u), (e = (t.mode & 1) !== 0), n)) {
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
                (Di(r, u), Z("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!u.multiple }), Z("invalid", r));
                break;
              case "textarea":
                (Ui(r, u), Z("invalid", r));
            }
            (Ul(n, u), (l = null));
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
                  : L.hasOwnProperty(i) && o != null && i === "onScroll" && Z("scroll", r);
              }
            switch (n) {
              case "input":
                (kr(r), Fi(r, u, !0));
                break;
              case "textarea":
                (kr(r), Hi(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Wr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Vi(n)),
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
              (e[rr] = r),
              ea(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Al(n, r)), n)) {
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
                  (Di(e, r), (l = Ol(e, r)), Z("invalid", e));
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
                  (Ui(e, r), (l = Il(e, r)), Z("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ul(n, l), (o = l));
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? Wi(e, s)
                    : u === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && $i(e, s))
                      : u === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Dn(e, s)
                          : typeof s == "number" && Dn(e, "" + s)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (L.hasOwnProperty(u)
                            ? s != null && u === "onScroll" && Z("scroll", e)
                            : s != null && qe(e, u, s, i));
                }
              switch (n) {
                case "input":
                  (kr(e), Fi(e, r, !1));
                  break;
                case "textarea":
                  (kr(e), Hi(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? sn(e, !!r.multiple, u, !1)
                      : r.defaultValue != null && sn(e, !!r.multiple, r.defaultValue, !0));
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
          if (((n = en(sr.current)), en(pt.current), Jr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[dt] = t),
              (u = r.nodeValue !== n) && ((e = He), e !== null))
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
        return (_e(t), null);
      case 13:
        if (
          (J(re),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && Ve !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (us(), En(), (t.flags |= 98560), (u = !1));
          else if (((u = Jr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(p(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(p(317));
              u[dt] = t;
            } else (En(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (_e(t), (u = !1));
          } else (rt !== null && (hi(rt), (rt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (re.current & 1) !== 0 ? pe === 0 && (pe = 3) : gi())),
            t.updateQueue !== null && (t.flags |= 4),
            _e(t),
            null);
      case 4:
        return (Pn(), li(e, t), e === null && tr(t.stateNode.containerInfo), _e(t), null);
      case 10:
        return (ju(t.type._context), _e(t), null);
      case 17:
        return (je(t.type) && Kr(), _e(t), null);
      case 19:
        if ((J(re), (u = t.memoizedState), u === null)) return (_e(t), null);
        if (((r = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) pr(u, !1);
          else {
            if (pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((i = rl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      pr(u, !1),
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
                  return (G(re, (re.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              oe() > Rn &&
              ((t.flags |= 128), (r = !0), pr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = rl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(u, !0),
                u.tail === null && u.tailMode === "hidden" && !i.alternate && !te)
              )
                return (_e(t), null);
            } else
              2 * oe() - u.renderingStartTime > Rn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = u.last), n !== null ? (n.sibling = i) : (t.child = i), (u.last = i));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = oe()),
            (t.sibling = null),
            (n = re.current),
            G(re, r ? (n & 1) | 2 : n & 1),
            t)
          : (_e(t), null);
      case 22:
      case 23:
        return (
          yi(),
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
  function xf(e, t) {
    switch ((Nu(t), t.tag)) {
      case 1:
        return (
          je(t.type) && Kr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pn(),
          J(Re),
          J(Se),
          Au(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Fu(t), null);
      case 13:
        if ((J(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(p(340));
          En();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (J(re), null);
      case 4:
        return (Pn(), null);
      case 10:
        return (ju(t.type._context), null);
      case 22:
      case 23:
        return (yi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    Ce = !1,
    Sf = typeof WeakSet == "function" ? WeakSet : Set,
    _ = null;
  function Tn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ie(e, t, r);
        }
      else n.current = null;
  }
  function ui(e, t, n) {
    try {
      n();
    } catch (r) {
      ie(e, t, r);
    }
  }
  var ra = !1;
  function Ef(e, t) {
    if (((yu = jr), (e = Do()), au(e))) {
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
              m = 0,
              g = 0,
              w = e,
              v = null;
            t: for (;;) {
              for (
                var E;
                w !== n || (l !== 0 && w.nodeType !== 3) || (o = i + l),
                  w !== u || (r !== 0 && w.nodeType !== 3) || (s = i + r),
                  w.nodeType === 3 && (i += w.nodeValue.length),
                  (E = w.firstChild) !== null;
              )
                ((v = w), (w = E));
              for (;;) {
                if (w === e) break t;
                if (
                  (v === n && ++m === l && (o = i),
                  v === u && ++g === r && (s = i),
                  (E = w.nextSibling) !== null)
                )
                  break;
                ((w = v), (v = w.parentNode));
              }
              w = E;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (gu = { focusedElem: e, selectionRange: n }, jr = !1, _ = t; _ !== null;)
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
          } catch (k) {
            ie(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (_ = e));
            break;
          }
          _ = t.return;
        }
    return ((P = ra), (ra = !1), P);
  }
  function mr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          ((l.destroy = void 0), u !== void 0 && ui(t, n, u));
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
  function ii(e) {
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
        t !== null && (delete t[dt], delete t[rr], delete t[Su], delete t[lf], delete t[uf])),
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
  function ia(e) {
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
  function oi(e, t, n) {
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
      for (oi(e, t, n), e = e.sibling; e !== null;) (oi(e, t, n), (e = e.sibling));
  }
  function si(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (si(e, t, n), e = e.sibling; e !== null;) (si(e, t, n), (e = e.sibling));
  }
  var we = null,
    ut = !1;
  function Ht(e, t, n) {
    for (n = n.child; n !== null;) (oa(e, t, n), (n = n.sibling));
  }
  function oa(e, t, n) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
      try {
        ft.onCommitFiberUnmount(Nr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ce || Tn(n, t);
      case 6:
        var r = we,
          l = ut;
        ((we = null),
          Ht(e, t, n),
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
              e.nodeType === 8 ? xu(e.parentNode, n) : e.nodeType === 1 && xu(e, n),
              Kn(e))
            : xu(we, n.stateNode));
        break;
      case 4:
        ((r = we),
          (l = ut),
          (we = n.stateNode.containerInfo),
          (ut = !0),
          Ht(e, t, n),
          (we = r),
          (ut = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ce && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            ((u = u.tag),
              i !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && ui(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Ht(e, t, n);
        break;
      case 1:
        if (!Ce && (Tn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (o) {
            ie(n, t, o);
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
      (n === null && (n = e.stateNode = new Sf()),
        t.forEach(function (r) {
          var l = jf.bind(null, e, r);
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
          if (we === null) throw Error(p(160));
          (oa(u, i, l), (we = null), (ut = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (m) {
          ie(l, t, m);
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
        if ((it(t, e), ht(e), r & 4)) {
          try {
            (mr(3, e, e.return), pl(3, e));
          } catch (z) {
            ie(e, e.return, z);
          }
          try {
            mr(5, e, e.return);
          } catch (z) {
            ie(e, e.return, z);
          }
        }
        break;
      case 1:
        (it(t, e), ht(e), r & 512 && n !== null && Tn(n, n.return));
        break;
      case 5:
        if ((it(t, e), ht(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Dn(l, "");
          } catch (z) {
            ie(e, e.return, z);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = n !== null ? n.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === "input" && u.type === "radio" && u.name != null && Ii(l, u), Al(o, i));
              var m = Al(o, u);
              for (i = 0; i < s.length; i += 2) {
                var g = s[i],
                  w = s[i + 1];
                g === "style"
                  ? Wi(l, w)
                  : g === "dangerouslySetInnerHTML"
                    ? $i(l, w)
                    : g === "children"
                      ? Dn(l, w)
                      : qe(l, g, w, m);
              }
              switch (o) {
                case "input":
                  Ml(l, u);
                  break;
                case "textarea":
                  Ai(l, u);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var E = u.value;
                  E != null
                    ? sn(l, !!u.multiple, E, !1)
                    : v !== !!u.multiple &&
                      (u.defaultValue != null
                        ? sn(l, !!u.multiple, u.defaultValue, !0)
                        : sn(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[rr] = u;
            } catch (z) {
              ie(e, e.return, z);
            }
        }
        break;
      case 6:
        if ((it(t, e), ht(e), r & 4)) {
          if (e.stateNode === null) throw Error(p(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (z) {
            ie(e, e.return, z);
          }
        }
        break;
      case 3:
        if ((it(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Kn(t.containerInfo);
          } catch (z) {
            ie(e, e.return, z);
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
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (fi = oe())),
          r & 4 && sa(e));
        break;
      case 22:
        if (
          ((g = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ce = (m = Ce) || g), it(t, e), (Ce = m)) : it(t, e),
          ht(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null), (e.stateNode.isHidden = m) && !g && (e.mode & 1) !== 0)
          )
            for (_ = e, g = e.child; g !== null;) {
              for (w = _ = g; _ !== null;) {
                switch (((v = _), (E = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, v, v.return);
                    break;
                  case 1:
                    Tn(v, v.return);
                    var P = v.stateNode;
                    if (typeof P.componentWillUnmount == "function") {
                      ((r = v), (n = v.return));
                      try {
                        ((t = r),
                          (P.props = t.memoizedProps),
                          (P.state = t.memoizedState),
                          P.componentWillUnmount());
                      } catch (z) {
                        ie(r, n, z);
                      }
                    }
                    break;
                  case 5:
                    Tn(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      da(w);
                      continue;
                    }
                }
                E !== null ? ((E.return = v), (_ = E)) : da(w);
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
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((o = w.stateNode),
                        (s = w.memoizedProps.style),
                        (i = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (o.style.display = Bi("display", i))));
                } catch (z) {
                  ie(e, e.return, z);
                }
              }
            } else if (w.tag === 6) {
              if (g === null)
                try {
                  w.stateNode.nodeValue = m ? "" : w.memoizedProps;
                } catch (z) {
                  ie(e, e.return, z);
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
        (it(t, e), ht(e), r & 4 && sa(e));
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
            if (ua(n)) {
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
            var u = ia(e);
            si(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = ia(e);
            oi(e, o, i);
            break;
          default:
            throw Error(p(161));
        }
      } catch (s) {
        ie(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function _f(e, t, n) {
    ((_ = e), ca(e));
  }
  function ca(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null;) {
      var l = _,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || dl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Ce;
          o = dl;
          var m = Ce;
          if (((dl = i), (Ce = s) && !m))
            for (_ = l; _ !== null;)
              ((i = _),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? pa(l)
                  : s !== null
                    ? ((s.return = i), (_ = s))
                    : pa(l));
          for (; u !== null;) ((_ = u), ca(u), (u = u.sibling));
          ((_ = l), (dl = o), (Ce = m));
        }
        fa(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = l), (_ = u)) : fa(e);
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
                var u = t.updateQueue;
                u !== null && ds(t, u, r);
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
                  ds(t, i, n);
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
          Ce || (t.flags & 512 && ii(t));
        } catch (v) {
          ie(t, t.return, v);
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
              pl(4, t);
            } catch (s) {
              ie(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ie(t, l, s);
              }
            }
            var u = t.return;
            try {
              ii(t);
            } catch (s) {
              ie(t, u, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ii(t);
            } catch (s) {
              ie(t, i, s);
            }
        }
      } catch (s) {
        ie(t, t.return, s);
      }
      if (t === e) {
        _ = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        ((o.return = t.return), (_ = o));
        break;
      }
      _ = t.return;
    }
  }
  var Cf = Math.ceil,
    ml = xe.ReactCurrentDispatcher,
    ai = xe.ReactCurrentOwner,
    Ze = xe.ReactCurrentBatchConfig,
    H = 0,
    ve = null,
    fe = null,
    ke = 0,
    $e = 0,
    Ln = Dt(0),
    pe = 0,
    hr = null,
    nn = 0,
    hl = 0,
    ci = 0,
    vr = null,
    Me = null,
    fi = 0,
    Rn = 1 / 0,
    Nt = null,
    vl = !1,
    di = null,
    Vt = null,
    yl = !1,
    $t = null,
    gl = 0,
    yr = 0,
    pi = null,
    wl = -1,
    kl = 0;
  function ze() {
    return (H & 6) !== 0 ? oe() : wl !== -1 ? wl : (wl = oe());
  }
  function Bt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (H & 2) !== 0 && ke !== 0
        ? ke & -ke
        : sf.transition !== null
          ? (kl === 0 && (kl = uo()), kl)
          : ((e = K), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ho(e.type))), e);
  }
  function ot(e, t, n, r) {
    if (50 < yr) throw ((yr = 0), (pi = null), Error(p(185)));
    (Vn(e, n, r),
      ((H & 2) === 0 || e !== ve) &&
        (e === ve && ((H & 2) === 0 && (hl |= n), pe === 4 && Wt(e, ke)),
        De(e, r),
        n === 1 && H === 0 && (t.mode & 1) === 0 && ((Rn = oe() + 500), Xr && Ft())));
  }
  function De(e, t) {
    var n = e.callbackNode;
    oc(e, t);
    var r = Tr(e, e === ve ? ke : 0);
    if (r === 0) (n !== null && no(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && no(n), t === 1))
        (e.tag === 0 ? of(ha.bind(null, e)) : es(ha.bind(null, e)),
          nf(function () {
            (H & 6) === 0 && Ft();
          }),
          (n = null));
      else {
        switch (io(r)) {
          case 1:
            n = Kl;
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
    if (((wl = -1), (kl = 0), (H & 6) !== 0)) throw Error(p(327));
    var n = e.callbackNode;
    if (jn() && e.callbackNode !== n) return null;
    var r = Tr(e, e === ve ? ke : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xl(e, r);
    else {
      t = r;
      var l = H;
      H |= 2;
      var u = ya();
      (ve !== e || ke !== t) && ((Nt = null), (Rn = oe() + 500), ln(e, t));
      do
        try {
          zf();
          break;
        } catch (o) {
          va(e, o);
        }
      while (!0);
      (Ru(), (ml.current = u), (H = l), fe !== null ? (t = 0) : ((ve = null), (ke = 0), (t = pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Yl(e)), l !== 0 && ((r = l), (t = mi(e, l)))), t === 1))
        throw ((n = hr), ln(e, 0), Wt(e, r), De(e, oe()), n);
      if (t === 6) Wt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Nf(l) &&
            ((t = xl(e, r)),
            t === 2 && ((u = Yl(e)), u !== 0 && ((r = u), (t = mi(e, u)))),
            t === 1))
        )
          throw ((n = hr), ln(e, 0), Wt(e, r), De(e, oe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            un(e, Me, Nt);
            break;
          case 3:
            if ((Wt(e, r), (r & 130023424) === r && ((t = fi + 500 - oe()), 10 < t))) {
              if (Tr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (ze(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = ku(un.bind(null, e, Me, Nt), t);
              break;
            }
            un(e, Me, Nt);
            break;
          case 4:
            if ((Wt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var i = 31 - tt(r);
              ((u = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~u));
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
                            : 1960 * Cf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ku(un.bind(null, e, Me, Nt), r);
              break;
            }
            un(e, Me, Nt);
            break;
          case 5:
            un(e, Me, Nt);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return (De(e, oe()), e.callbackNode === n ? ma.bind(null, e) : null);
  }
  function mi(e, t) {
    var n = vr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = xl(e, t)),
      e !== 2 && ((t = Me), (Me = n), t !== null && hi(t)),
      e
    );
  }
  function hi(e) {
    Me === null ? (Me = e) : Me.push.apply(Me, e);
  }
  function Nf(e) {
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
      t &= ~ci, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - tt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ha(e) {
    if ((H & 6) !== 0) throw Error(p(327));
    jn();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return (De(e, oe()), null);
    var n = xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && ((t = r), (n = mi(e, r)));
    }
    if (n === 1) throw ((n = hr), ln(e, 0), Wt(e, t), De(e, oe()), n);
    if (n === 6) throw Error(p(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, Me, Nt),
      De(e, oe()),
      null
    );
  }
  function vi(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      ((H = n), H === 0 && ((Rn = oe() + 500), Xr && Ft()));
    }
  }
  function rn(e) {
    $t !== null && $t.tag === 0 && (H & 6) === 0 && jn();
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
  function yi() {
    (($e = Ln.current), J(Ln));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), tf(n)), fe !== null))
      for (n = fe.return; n !== null;) {
        var r = n;
        switch ((Nu(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Kr());
            break;
          case 3:
            (Pn(), J(Re), J(Se), Au());
            break;
          case 5:
            Fu(r);
            break;
          case 4:
            Pn();
            break;
          case 13:
            J(re);
            break;
          case 19:
            J(re);
            break;
          case 10:
            ju(r.type._context);
            break;
          case 22:
          case 23:
            yi();
        }
        n = n.return;
      }
    if (
      ((ve = e),
      (fe = e = Qt(e.current, null)),
      (ke = $e = t),
      (pe = 0),
      (hr = null),
      (ci = hl = nn = 0),
      (Me = vr = null),
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
  function va(e, t) {
    do {
      var n = fe;
      try {
        if ((Ru(), (ll.current = sl), ul)) {
          for (var r = le.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ul = !1;
        }
        if (
          ((tn = 0),
          (he = de = le = null),
          (ar = !1),
          (cr = 0),
          (ai.current = null),
          n === null || n.return === null)
        ) {
          ((pe = 1), (hr = t), (fe = null));
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
            var E = Vs(i);
            if (E !== null) {
              ((E.flags &= -257), $s(E, i, o, u, t), E.mode & 1 && Hs(u, m, t), (t = E), (s = m));
              var P = t.updateQueue;
              if (P === null) {
                var z = new Set();
                (z.add(s), (t.updateQueue = z));
              } else P.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Hs(u, m, t), gi());
                break e;
              }
              s = Error(p(426));
            }
          } else if (te && o.mode & 1) {
            var se = Vs(i);
            if (se !== null) {
              ((se.flags & 65536) === 0 && (se.flags |= 256), $s(se, i, o, u, t), Tu(zn(s, o)));
              break e;
            }
          }
          ((u = s = zn(s, o)),
            pe !== 4 && (pe = 2),
            vr === null ? (vr = [u]) : vr.push(u),
            (u = i));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var f = Us(u, s, t);
                fs(u, f);
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
                  var k = As(u, o, t);
                  fs(u, k);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        wa(n);
      } catch (T) {
        ((t = T), fe === n && n !== null && (fe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ya() {
    var e = ml.current;
    return ((ml.current = sl), e === null ? sl : e);
  }
  function gi() {
    ((pe === 0 || pe === 3 || pe === 2) && (pe = 4),
      ve === null || ((nn & 268435455) === 0 && (hl & 268435455) === 0) || Wt(ve, ke));
  }
  function xl(e, t) {
    var n = H;
    H |= 2;
    var r = ya();
    (ve !== e || ke !== t) && ((Nt = null), ln(e, t));
    do
      try {
        Pf();
        break;
      } catch (l) {
        va(e, l);
      }
    while (!0);
    if ((Ru(), (H = n), (ml.current = r), fe !== null)) throw Error(p(261));
    return ((ve = null), (ke = 0), pe);
  }
  function Pf() {
    for (; fe !== null;) ga(fe);
  }
  function zf() {
    for (; fe !== null && !qa();) ga(fe);
  }
  function ga(e) {
    var t = Sa(e.alternate, e, $e);
    ((e.memoizedProps = e.pendingProps), t === null ? wa(e) : (fe = t), (ai.current = null));
  }
  function wa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = kf(n, t, $e)), n !== null)) {
          fe = n;
          return;
        }
      } else {
        if (((n = xf(n, t)), n !== null)) {
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
    do jn();
    while ($t !== null);
    if ((H & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(p(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (sc(e, u),
      e === ve && ((fe = ve = null), (ke = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        yl ||
        ((yl = !0),
        Ea(Cr, function () {
          return (jn(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = Ze.transition), (Ze.transition = null));
      var i = K;
      K = 1;
      var o = H;
      ((H |= 4),
        (ai.current = null),
        Ef(e, n),
        aa(n, e),
        Xc(gu),
        (jr = !!yu),
        (gu = yu = null),
        (e.current = n),
        _f(n),
        ba(),
        (H = o),
        (K = i),
        (Ze.transition = u));
    } else e.current = n;
    if (
      (yl && ((yl = !1), ($t = e), (gl = l)),
      (u = e.pendingLanes),
      u === 0 && (Vt = null),
      nc(n.stateNode),
      De(e, oe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (vl) throw ((vl = !1), (e = di), (di = null), e);
    return (
      (gl & 1) !== 0 && e.tag !== 0 && jn(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === pi ? yr++ : ((yr = 0), (pi = e))) : (yr = 0),
      Ft(),
      null
    );
  }
  function jn() {
    if ($t !== null) {
      var e = io(gl),
        t = Ze.transition,
        n = K;
      try {
        if (((Ze.transition = null), (K = 16 > e ? 16 : e), $t === null)) var r = !1;
        else {
          if (((e = $t), ($t = null), (gl = 0), (H & 6) !== 0)) throw Error(p(331));
          var l = H;
          for (H |= 4, _ = e.current; _ !== null;) {
            var u = _,
              i = u.child;
            if ((_.flags & 16) !== 0) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var m = o[s];
                  for (_ = m; _ !== null;) {
                    var g = _;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, g, u);
                    }
                    var w = g.child;
                    if (w !== null) ((w.return = g), (_ = w));
                    else
                      for (; _ !== null;) {
                        g = _;
                        var v = g.sibling,
                          E = g.return;
                        if ((la(g), g === m)) {
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
                var P = u.alternate;
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
                _ = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = u), (_ = i));
            else
              e: for (; _ !== null;) {
                if (((u = _), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(9, u, u.return);
                  }
                var f = u.sibling;
                if (f !== null) {
                  ((f.return = u.return), (_ = f));
                  break e;
                }
                _ = u.return;
              }
          }
          var a = e.current;
          for (_ = a; _ !== null;) {
            i = _;
            var d = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = i), (_ = d));
            else
              e: for (i = a; _ !== null;) {
                if (((o = _), (o.flags & 2048) !== 0))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, o);
                    }
                  } catch (T) {
                    ie(o, o.return, T);
                  }
                if (o === i) {
                  _ = null;
                  break e;
                }
                var k = o.sibling;
                if (k !== null) {
                  ((k.return = o.return), (_ = k));
                  break e;
                }
                _ = o.return;
              }
          }
          if (((H = l), Ft(), ft && typeof ft.onPostCommitFiberRoot == "function"))
            try {
              ft.onPostCommitFiberRoot(Nr, e);
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
  function ka(e, t, n) {
    ((t = zn(n, t)),
      (t = Us(e, t, 1)),
      (e = At(e, t, 1)),
      (t = ze()),
      e !== null && (Vn(e, 1, t), De(e, t)));
  }
  function ie(e, t, n) {
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
            (typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r)))
          ) {
            ((e = zn(n, e)),
              (e = As(t, e, 1)),
              (t = At(t, e, 1)),
              (e = ze()),
              t !== null && (Vn(t, 1, e), De(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Lf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (ke & n) === n &&
        (pe === 4 || (pe === 3 && (ke & 130023424) === ke && 500 > oe() - fi)
          ? ln(e, 0)
          : (ci |= n)),
      De(e, t));
  }
  function xa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = ze();
    ((e = Et(e, t)), e !== null && (Vn(e, t, n), De(e, n)));
  }
  function Rf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), xa(e, n));
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
        throw Error(p(314));
    }
    (r !== null && r.delete(t), xa(e, n));
  }
  var Sa;
  Sa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Re.current) Oe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Oe = !1), wf(e, t, n));
        Oe = (e.flags & 131072) !== 0;
      }
    else ((Oe = !1), te && (t.flags & 1048576) !== 0 && ts(t, Zr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (fl(e, t), (e = t.pendingProps));
        var l = kn(t, Se.current);
        (Nn(t, n), (l = $u(null, t, r, e, l, n)));
        var u = Bu();
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
              Du(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Gu(t, r, e, n),
              (t = bu(null, t, r, !0, u, n)))
            : ((t.tag = 0), te && u && Cu(t), Pe(null, t, l, n), (t = t.child)),
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
            (l = t.tag = Mf(r)),
            (e = lt(r, e)),
            l)
          ) {
            case 0:
              t = qu(null, t, r, e, n);
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
          qu(e, t, r, l, n)
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
            (u = t.memoizedState),
            (l = u.element),
            cs(e, t),
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
              ((l = zn(Error(p(423)), t)), (t = Zs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = zn(Error(p(424)), t)), (t = Zs(e, t, r, n, l)));
              break e;
            } else
              for (
                Ve = Mt(t.stateNode.containerInfo.firstChild),
                  He = t,
                  te = !0,
                  rt = null,
                  n = ss(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((En(), r === l)) {
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
          e === null && zu(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          wu(r, l) ? (i = null) : u !== null && wu(r, u) && (t.flags |= 32),
          Ys(e, t),
          Pe(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && zu(t), null);
      case 13:
        return Js(e, t, n);
      case 4:
        return (
          Iu(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = _n(t, null, r, n)) : Pe(e, t, r, n),
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
            (u = t.memoizedProps),
            (i = l.value),
            G(br, r._currentValue),
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
                        ((s = _t(-1, n & -n)), (s.tag = 2));
                        var m = u.updateQueue;
                        if (m !== null) {
                          m = m.shared;
                          var g = m.pending;
                          (g === null ? (s.next = s) : ((s.next = g.next), (g.next = s)),
                            (m.pending = s));
                        }
                      }
                      ((u.lanes |= n),
                        (s = u.alternate),
                        s !== null && (s.lanes |= n),
                        Ou(u.return, n, t),
                        (o.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10) i = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((i = u.return), i === null)) throw Error(p(341));
                  ((i.lanes |= n),
                    (o = i.alternate),
                    o !== null && (o.lanes |= n),
                    Ou(i, n, t),
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
          Nn(t, n),
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
          je(r) ? ((e = !0), Yr(t)) : (e = !1),
          Nn(t, n),
          Is(t, r, l),
          Gu(t, r, l, n),
          bu(null, t, r, !0, e, n)
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
  function Je(e, t, n, r) {
    return new Of(e, t, n, r);
  }
  function wi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Mf(e) {
    if (typeof e == "function") return wi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === at)) return 11;
      if (e === ct) return 14;
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
  function Sl(e, t, n, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == "function")) wi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Te:
          return on(n.children, l, u, t);
        case Qe:
          ((i = 8), (l |= 8));
          break;
        case Pt:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = Pt), (e.lanes = u), e);
        case Fe:
          return ((e = Je(13, n, t, l)), (e.elementType = Fe), (e.lanes = u), e);
        case et:
          return ((e = Je(19, n, t, l)), (e.elementType = et), (e.lanes = u), e);
        case ue:
          return El(n, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gt:
                i = 10;
                break e;
              case Yt:
                i = 9;
                break e;
              case at:
                i = 11;
                break e;
              case ct:
                i = 14;
                break e;
              case Le:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(p(130, e == null ? e : typeof e, ""));
      }
    return ((t = Je(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = u), t);
  }
  function on(e, t, n, r) {
    return ((e = Je(7, e, r, t)), (e.lanes = n), e);
  }
  function El(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = ue),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ki(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function xi(e, t, n) {
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
  function Df(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Xl(0)),
      (this.expirationTimes = Xl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Xl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Si(e, t, n, r, l, u, i, o, s) {
    return (
      (e = new Df(e, t, n, o, s)),
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
      Du(u),
      e
    );
  }
  function If(e, t, n) {
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
            if (je(t.type)) {
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
      if (je(n)) return qo(e, n, t);
    }
    return t;
  }
  function Ca(e, t, n, r, l, u, i, o, s) {
    return (
      (e = Si(n, r, !0, e, l, u, i, o, s)),
      (e.context = _a(null)),
      (n = e.current),
      (r = ze()),
      (l = Bt(n)),
      (u = _t(r, l)),
      (u.callback = t ?? null),
      At(n, u, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      De(e, r),
      e
    );
  }
  function _l(e, t, n, r) {
    var l = t.current,
      u = ze(),
      i = Bt(l);
    return (
      (n = _a(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = _t(u, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, i)),
      e !== null && (ot(e, l, i, u), tl(e, l, i)),
      i
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
  function Ei(e, t) {
    (Na(e, t), (e = e.alternate) && Na(e, t));
  }
  function Ff() {
    return null;
  }
  var Pa =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function _i(e) {
    this._internalRoot = e;
  }
  ((Nl.prototype.render = _i.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(p(409));
      _l(e, t, null, null);
    }),
    (Nl.prototype.unmount = _i.prototype.unmount =
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
      for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
      (Rt.splice(n, 0, e), n === 0 && po(e));
    }
  };
  function Ci(e) {
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
  function Uf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var m = Cl(i);
          u.call(m);
        };
      }
      var i = Ca(t, r, e, 0, null, !1, !1, "", za);
      return (
        (e._reactRootContainer = i),
        (e[wt] = i.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        rn(),
        i
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
    var s = Si(e, 0, !1, null, null, !1, !1, "", za);
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
    var u = n._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = Cl(i);
          o.call(s);
        };
      }
      _l(t, i, e, l);
    } else i = Uf(n, t, e, l, r);
    return Cl(i);
  }
  ((oo = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Hn(t.pendingLanes);
          n !== 0 && (Gl(t, n | 1), De(t, oe()), (H & 6) === 0 && ((Rn = oe() + 500), Ft()));
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
          Ei(e, 1));
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = ze();
          ot(t, e, 134217728, n);
        }
        Ei(e, 134217728);
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
        Ei(e, t);
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
    ($l = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ml(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                (Mi(r), Ml(r, l));
              }
            }
          }
          break;
        case "textarea":
          Ai(e, n);
          break;
        case "select":
          ((t = n.value), t != null && sn(e, !!n.multiple, t, !1));
      }
    }),
    (Xi = vi),
    (Gi = rn));
  var Af = { usingClientEntryPoint: !1, Events: [lr, gn, Qr, Ki, Yi, vi] },
    gr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Hf = {
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
      currentDispatcherRef: xe.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = bi(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: gr.findFiberByHostInstance || Ff,
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
        ((Nr = Tl.inject(Hf)), (ft = Tl));
      } catch {}
  }
  return (
    (Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Af),
    (Ie.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ci(t)) throw Error(p(200));
      return If(e, t, null, n);
    }),
    (Ie.createRoot = function (e, t) {
      if (!Ci(e)) throw Error(p(299));
      var n = !1,
        r = "",
        l = Pa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Si(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new _i(t)
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
      return ((e = bi(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ie.flushSync = function (e) {
      return rn(e);
    }),
    (Ie.hydrate = function (e, t, n) {
      if (!Pl(t)) throw Error(p(200));
      return zl(null, e, t, !0, n);
    }),
    (Ie.hydrateRoot = function (e, t, n) {
      if (!Ci(e)) throw Error(p(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        i = Pa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Ca(t, null, e, 1, n ?? null, l, !1, u, i)),
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
    (Ie.unstable_batchedUpdates = vi),
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
function Xf() {
  if (Ia) return zi.exports;
  Ia = 1;
  function h() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (x) {
        console.error(x);
      }
  }
  return (h(), (zi.exports = Yf()), zi.exports);
}
var Fa;
function Gf() {
  if (Fa) return Ll;
  Fa = 1;
  var h = Xf();
  return ((Ll.createRoot = h.createRoot), (Ll.hydrateRoot = h.hydrateRoot), Ll);
}
var Zf = Gf();
function Ua(h) {
  return `#${h}`;
}
function Aa(h) {
  const x = h.replace(/^\//, "").replace(/\/$/, "");
  return x ? `#/${x}` : "#/";
}
function ji(h) {
  const x = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return x
    ? x.startsWith("/")
      ? { kind: "route", path: x.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: x }
    : null;
}
function Oi(h, x = "smooth") {
  if (typeof document > "u") return !1;
  const p = document.getElementById(h);
  return p ? (p.scrollIntoView({ behavior: x, block: "start" }), !0) : !1;
}
function Jf(h, x = "smooth") {
  if (typeof window > "u") return;
  const p = Ua(h);
  if (Oi(h, x)) {
    window.history.replaceState(null, "", p);
    return;
  }
  window.location.hash = p;
}
function qf(h) {
  typeof window > "u" || (window.location.hash = Aa(h));
}
function bf() {
  const h = ji();
  return (h == null ? void 0 : h.kind) === "route" ? h.path : "";
}
function ed(h) {
  return h.kind === "route" ? Aa(h.path) : Ua(h.id);
}
function td(h, x) {
  if ((h.preventDefault(), x.kind === "route")) {
    qf(x.path);
    return;
  }
  Jf(x.id);
}
function Ha() {
  if (typeof window > "u") return;
  const h = ji();
  (h == null ? void 0 : h.kind) === "section" && requestAnimationFrame(() => Oi(h.id, "auto"));
}
function nd(h, x) {
  if (typeof window > "u") return () => {};
  const p = () => {
    const I = ji();
    if (!I) {
      h("");
      return;
    }
    if (I.kind === "route") {
      h(I.path);
      return;
    }
    (Oi(I.id, "smooth"), h(""));
  };
  return (
    p(),
    window.addEventListener("hashchange", p),
    () => window.removeEventListener("hashchange", p)
  );
}
function rd(h = "") {
  const [x, p] = vt.useState(() => (typeof window < "u" ? bf() : h));
  return (vt.useEffect(() => nd(p), []), x || h);
}
function ld({ routes: h, defaultRoute: x = "", className: p }) {
  const I = rd(x);
  vt.useEffect(() => {
    Ha();
  }, []);
  const L = I in h ? I : x,
    M = h[L] ?? h[x];
  return N.jsx("div", { className: p, children: M });
}
function On({ target: h, children: x, className: p, onClick: I, ...L }) {
  return N.jsx("a", {
    href: ed(h),
    className: p,
    onClick: (M) => {
      (td(M, h), I == null || I(M));
    },
    ...L,
    children: x,
  });
}
const ud = {
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
function id({ title: h, eyebrow: x = "Explore", description: p, theme: I = "dark", children: L }) {
  const M = ud[I];
  return N.jsx("div", {
    className: M.wrap,
    children: N.jsxs("div", {
      className: "mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24",
      children: [
        N.jsx(On, {
          target: { kind: "route", path: "" },
          className: M.link,
          children: "← Back to home",
        }),
        N.jsx("p", { className: `${M.eyebrow} mt-10`, children: x }),
        N.jsx("h1", { className: M.title, children: h }),
        p ? N.jsx("p", { className: M.body, children: p }) : null,
        L,
      ],
    }),
  });
}
function od(h, x, p = "dark") {
  const I = { "": h };
  for (const L of x)
    I[L.path] = N.jsx(
      id,
      { title: L.title, eyebrow: L.eyebrow, description: L.description, theme: p },
      L.path,
    );
  return I;
}
const sd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4",
  Va = { kind: "route", path: "" },
  jl = { kind: "route", path: "contact" },
  ad = [
    { label: "Home", target: Va },
    { label: "About", target: { kind: "route", path: "about" } },
    { label: "Contact Us", target: jl },
  ],
  cd = {
    brand: "bg-brand text-white hover:bg-[#d63525]",
    outline: "border border-white/35 bg-white/5 text-white hover:bg-white/10",
  };
function $a({ children: h, className: x = "", variant: p = "brand", ...I }) {
  return N.jsx("button", {
    type: "button",
    className: `clip-corner inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold tracking-wide transition ${cd[p]} ${x}`,
    "data-editable": !0,
    ...I,
    children: h,
  });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fd = (h) => h.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ba = (...h) =>
    h
      .filter((x, p, I) => !!x && x.trim() !== "" && I.indexOf(x) === p)
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
 */ const pd = vt.forwardRef(
  (
    {
      color: h = "currentColor",
      size: x = 24,
      strokeWidth: p = 2,
      absoluteStrokeWidth: I,
      className: L = "",
      children: M,
      iconNode: ae,
      ...ce
    },
    W,
  ) =>
    vt.createElement(
      "svg",
      {
        ref: W,
        ...dd,
        width: x,
        height: x,
        stroke: h,
        strokeWidth: I ? (Number(p) * 24) / Number(x) : p,
        className: Ba("lucide", L),
        ...ce,
      },
      [...ae.map(([ge, me]) => vt.createElement(ge, me)), ...(Array.isArray(M) ? M : [M])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const md = (h, x) => {
  const p = vt.forwardRef(({ className: I, ...L }, M) =>
    vt.createElement(pd, { ref: M, iconNode: x, className: Ba(`lucide-${fd(h)}`, I), ...L }),
  );
  return ((p.displayName = `${h}`), p);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hd = md("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
function vd() {
  return N.jsxs(On, {
    target: jl,
    className:
      "glass-card clip-corner group inline-flex max-w-sm items-center gap-4 px-6 py-5 transition hover:bg-white/12",
    children: [
      N.jsx("span", {
        className:
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/90 text-white transition group-hover:bg-brand",
        children: N.jsx(hd, { className: "h-5 w-5", strokeWidth: 2, "aria-hidden": !0 }),
      }),
      N.jsx("span", {
        className: "text-base font-medium leading-snug text-white",
        "data-editable": !0,
        children: "Book a Free Consultation",
      }),
    ],
  });
}
function yd() {
  return N.jsxs(On, {
    target: Va,
    className: "flex items-center gap-2.5",
    children: [
      N.jsx("span", {
        className:
          "flex h-9 w-9 shrink-0 items-center justify-center bg-brand text-lg font-bold text-white clip-corner",
        "aria-hidden": !0,
        children: "T",
      }),
      N.jsx("span", {
        className: "text-xl font-semibold tracking-tight text-white",
        "data-editable": !0,
        children: "Targo",
      }),
    ],
  });
}
function gd() {
  return N.jsx("header", {
    id: "navbar",
    className: "relative z-20 w-full px-5 pt-5 md:px-10 md:pt-6 lg:px-14",
    children: N.jsxs("nav", {
      className: "mx-auto flex max-w-7xl items-center justify-between gap-6",
      children: [
        N.jsx(yd, {}),
        N.jsx("div", {
          className: "hidden items-center gap-8 md:flex",
          children: ad.map(({ label: h, target: x }) =>
            N.jsx(
              On,
              {
                target: x,
                className: "text-sm font-medium text-white/80 transition hover:text-white",
                "data-editable": !0,
                children: h,
              },
              h,
            ),
          ),
        }),
        N.jsx(On, {
          target: jl,
          children: N.jsx($a, {
            className: "px-5 py-2.5 text-xs uppercase tracking-wider",
            children: "Contact",
          }),
        }),
      ],
    }),
  });
}
function wd() {
  return N.jsxs("section", {
    id: "hero",
    className: "relative flex min-h-screen flex-col overflow-hidden bg-black",
    children: [
      N.jsx("video", {
        className: "absolute inset-0 h-full w-full object-cover",
        src: sd,
        autoPlay: !0,
        loop: !0,
        muted: !0,
        playsInline: !0,
        "aria-hidden": !0,
      }),
      N.jsxs("div", {
        className: "relative z-10 flex min-h-screen flex-col",
        children: [
          N.jsx(gd, {}),
          N.jsxs("div", {
            className: "flex flex-1 flex-col px-5 pb-8 md:px-10 lg:px-14",
            children: [
              N.jsxs("div", {
                className: "pt-[6vh] md:pt-[8vh] lg:max-w-3xl",
                children: [
                  N.jsx("h1", {
                    className:
                      "animate-fade-up text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl",
                    "data-editable": !0,
                    children: "Swift and Simple Transport",
                  }),
                  N.jsx("div", {
                    className: "animate-fade-up-delay mt-8",
                    children: N.jsx(On, {
                      target: jl,
                      children: N.jsx($a, { children: "Get Started" }),
                    }),
                  }),
                ],
              }),
              N.jsx("div", {
                className: "animate-fade-up-delay-2 mt-auto",
                children: N.jsx(vd, {}),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Wa = {
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
function Rl({ id: h, eyebrow: x, title: p, children: I, theme: L }) {
  const M = Wa[L];
  return N.jsx("section", {
    id: h,
    className: `${M.section} scroll-mt-24`,
    children: N.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        N.jsx("p", { className: M.eyebrow, children: x }),
        N.jsx("h2", { className: `${M.title} mt-3`, children: p }),
        N.jsx("div", { className: "mt-8", children: I }),
      ],
    }),
  });
}
function kd({ theme: h = "dark", brand: x = "Product" }) {
  const p = Wa[h],
    I = [
      { title: "Fast setup", desc: `Ship ${x} experiences in minutes with guided defaults.` },
      { title: "Built to scale", desc: "Production-ready patterns for teams that iterate daily." },
      { title: "Secure by design", desc: "Privacy-first flows with audit-friendly configuration." },
    ];
  return N.jsxs(N.Fragment, {
    children: [
      N.jsx(Rl, {
        id: "features",
        eyebrow: "Features",
        title: "Everything you need in one flow",
        theme: h,
        children: N.jsx("div", {
          className: "grid gap-4 md:grid-cols-3",
          children: I.map((L) =>
            N.jsxs(
              "div",
              {
                className: p.card,
                children: [
                  N.jsx("h3", {
                    className:
                      h === "dark"
                        ? "text-lg font-medium text-white"
                        : "text-lg font-medium text-slate-900",
                    children: L.title,
                  }),
                  N.jsx("p", { className: `${p.body} mt-2 text-sm`, children: L.desc }),
                ],
              },
              L.title,
            ),
          ),
        }),
      }),
      N.jsx(Rl, {
        id: "about",
        eyebrow: "About",
        title: `Why teams choose ${x}`,
        theme: h,
        children: N.jsx("p", {
          className: p.body,
          children:
            "We combine cinematic presentation with practical product storytelling—so every visit feels premium while staying effortless to keep current as you grow.",
        }),
      }),
      N.jsx(Rl, {
        id: "faq",
        eyebrow: "FAQ",
        title: "Common questions",
        theme: h,
        children: N.jsx("dl", {
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
          ].map(([L, M]) =>
            N.jsxs(
              "div",
              {
                className: p.card,
                children: [
                  N.jsx("dt", {
                    className:
                      h === "dark" ? "font-medium text-white" : "font-medium text-slate-900",
                    children: L,
                  }),
                  N.jsx("dd", { className: `${p.body} mt-2 text-sm`, children: M }),
                ],
              },
              L,
            ),
          ),
        }),
      }),
      N.jsxs(Rl, {
        id: "contact",
        eyebrow: "Contact",
        title: "Talk with our team",
        theme: h,
        children: [
          N.jsx("p", { className: p.body, children: "We respond within one business day." }),
          N.jsx("a", {
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
function xd() {
  return N.jsxs("div", {
    className: "min-h-screen bg-black",
    children: [N.jsx(wd, {}), N.jsx(kd, { brand: "Targo", theme: "dark" })],
  });
}
const Sd = [
  {
    path: "about",
    title: "About",
    description: "Learn how Targo simplifies freight and last-mile logistics.",
  },
  {
    path: "contact",
    title: "Contact Us",
    description: "Book a free consultation with our transport specialists.",
  },
];
function Ed() {
  return (
    vt.useEffect(() => {
      Ha();
    }, []),
    N.jsx(ld, { routes: od(N.jsx(xd, {}), Sd, "dark") })
  );
}
Zf.createRoot(document.getElementById("root")).render(
  N.jsx(vt.StrictMode, { children: N.jsx(Ed, {}) }),
);
