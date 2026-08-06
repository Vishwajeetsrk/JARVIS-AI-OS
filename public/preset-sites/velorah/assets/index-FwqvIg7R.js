(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const R of document.querySelectorAll('link[rel="modulepreload"]')) A(R);
  new MutationObserver((R) => {
    for (const U of R)
      if (U.type === "childList")
        for (const ue of U.addedNodes) ue.tagName === "LINK" && ue.rel === "modulepreload" && A(ue);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(R) {
    const U = {};
    return (
      R.integrity && (U.integrity = R.integrity),
      R.referrerPolicy && (U.referrerPolicy = R.referrerPolicy),
      R.crossOrigin === "use-credentials"
        ? (U.credentials = "include")
        : R.crossOrigin === "anonymous"
          ? (U.credentials = "omit")
          : (U.credentials = "same-origin"),
      U
    );
  }
  function A(R) {
    if (R.ep) return;
    R.ep = !0;
    const U = m(R);
    fetch(R.href, U);
  }
})();
var _i = { exports: {} },
  wr = {},
  Ni = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function Kf() {
  if (Pa) return I;
  Pa = 1;
  var x = Symbol.for("react.element"),
    S = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    A = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    U = Symbol.for("react.provider"),
    ue = Symbol.for("react.context"),
    ce = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    ge = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    ne = Symbol.iterator;
  function q(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (ne && c[ne]) || c["@@iterator"]), typeof c == "function" ? c : null);
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
    b = {};
  function Y(c, y, D) {
    ((this.props = c), (this.context = y), (this.refs = b), (this.updater = D || We));
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
  function at(c, y, D) {
    ((this.props = c), (this.context = y), (this.refs = b), (this.updater = D || We));
  }
  var qe = (at.prototype = new yt());
  ((qe.constructor = at), $e(qe, Y.prototype), (qe.isPureReactComponent = !0));
  var ke = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    Ne = { current: null },
    ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, y, D) {
    var F,
      H = {},
      B = null,
      X = null;
    if (y != null)
      for (F in (y.ref !== void 0 && (X = y.ref), y.key !== void 0 && (B = "" + y.key), y))
        be.call(y, F) && !ze.hasOwnProperty(F) && (H[F] = y[F]);
    var Q = arguments.length - 2;
    if (Q === 1) H.children = D;
    else if (1 < Q) {
      for (var ee = Array(Q), Ue = 0; Ue < Q; Ue++) ee[Ue] = arguments[Ue + 2];
      H.children = ee;
    }
    if (c && c.defaultProps) for (F in ((Q = c.defaultProps), Q)) H[F] === void 0 && (H[F] = Q[F]);
    return { $$typeof: x, type: c, key: B, ref: X, props: H, _owner: Ne.current };
  }
  function Pt(c, y) {
    return { $$typeof: x, type: c.type, key: y, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === x;
  }
  function Yt(c) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (D) {
        return y[D];
      })
    );
  }
  var ct = /\/+/g;
  function Fe(c, y) {
    return typeof c == "object" && c !== null && c.key != null ? Yt("" + c.key) : y.toString(36);
  }
  function et(c, y, D, F, H) {
    var B = typeof c;
    (B === "undefined" || B === "boolean") && (c = null);
    var X = !1;
    if (c === null) X = !0;
    else
      switch (B) {
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case x:
            case S:
              X = !0;
          }
      }
    if (X)
      return (
        (X = c),
        (H = H(X)),
        (c = F === "" ? "." + Fe(X, 0) : F),
        ke(H)
          ? ((D = ""),
            c != null && (D = c.replace(ct, "$&/") + "/"),
            et(H, y, D, "", function (Ue) {
              return Ue;
            }))
          : H != null &&
            (gt(H) &&
              (H = Pt(
                H,
                D +
                  (!H.key || (X && X.key === H.key) ? "" : ("" + H.key).replace(ct, "$&/") + "/") +
                  c,
              )),
            y.push(H)),
        1
      );
    if (((X = 0), (F = F === "" ? "." : F + ":"), ke(c)))
      for (var Q = 0; Q < c.length; Q++) {
        B = c[Q];
        var ee = F + Fe(B, Q);
        X += et(B, y, D, ee, H);
      }
    else if (((ee = q(c)), typeof ee == "function"))
      for (c = ee.call(c), Q = 0; !(B = c.next()).done;)
        ((B = B.value), (ee = F + Fe(B, Q++)), (X += et(B, y, D, ee, H)));
    else if (B === "object")
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
  function ft(c, y, D) {
    if (c == null) return c;
    var F = [],
      H = 0;
    return (
      et(c, F, "", "", function (B) {
        return y.call(D, B, H++);
      }),
      F
    );
  }
  function Le(c) {
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
  var ie = { current: null },
    E = { transition: null },
    O = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: E, ReactCurrentOwner: Ne };
  function N() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (I.Children = {
      map: ft,
      forEach: function (c, y, D) {
        ft(
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
    (I.Component = Y),
    (I.Fragment = m),
    (I.Profiler = R),
    (I.PureComponent = at),
    (I.StrictMode = A),
    (I.Suspense = $),
    (I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
    (I.act = N),
    (I.cloneElement = function (c, y, D) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var F = $e({}, c.props),
        H = c.key,
        B = c.ref,
        X = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((B = y.ref), (X = Ne.current)),
          y.key !== void 0 && (H = "" + y.key),
          c.type && c.type.defaultProps)
        )
          var Q = c.type.defaultProps;
        for (ee in y)
          be.call(y, ee) &&
            !ze.hasOwnProperty(ee) &&
            (F[ee] = y[ee] === void 0 && Q !== void 0 ? Q[ee] : y[ee]);
      }
      var ee = arguments.length - 2;
      if (ee === 1) F.children = D;
      else if (1 < ee) {
        Q = Array(ee);
        for (var Ue = 0; Ue < ee; Ue++) Q[Ue] = arguments[Ue + 2];
        F.children = Q;
      }
      return { $$typeof: x, type: c.type, key: H, ref: B, props: F, _owner: X };
    }),
    (I.createContext = function (c) {
      return (
        (c = {
          $$typeof: ue,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: U, _context: c }),
        (c.Consumer = c)
      );
    }),
    (I.createElement = Qe),
    (I.createFactory = function (c) {
      var y = Qe.bind(null, c);
      return ((y.type = c), y);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (c) {
      return { $$typeof: ce, render: c };
    }),
    (I.isValidElement = gt),
    (I.lazy = function (c) {
      return { $$typeof: me, _payload: { _status: -1, _result: c }, _init: Le };
    }),
    (I.memo = function (c, y) {
      return { $$typeof: ge, type: c, compare: y === void 0 ? null : y };
    }),
    (I.startTransition = function (c) {
      var y = E.transition;
      E.transition = {};
      try {
        c();
      } finally {
        E.transition = y;
      }
    }),
    (I.unstable_act = N),
    (I.useCallback = function (c, y) {
      return ie.current.useCallback(c, y);
    }),
    (I.useContext = function (c) {
      return ie.current.useContext(c);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (c) {
      return ie.current.useDeferredValue(c);
    }),
    (I.useEffect = function (c, y) {
      return ie.current.useEffect(c, y);
    }),
    (I.useId = function () {
      return ie.current.useId();
    }),
    (I.useImperativeHandle = function (c, y, D) {
      return ie.current.useImperativeHandle(c, y, D);
    }),
    (I.useInsertionEffect = function (c, y) {
      return ie.current.useInsertionEffect(c, y);
    }),
    (I.useLayoutEffect = function (c, y) {
      return ie.current.useLayoutEffect(c, y);
    }),
    (I.useMemo = function (c, y) {
      return ie.current.useMemo(c, y);
    }),
    (I.useReducer = function (c, y, D) {
      return ie.current.useReducer(c, y, D);
    }),
    (I.useRef = function (c) {
      return ie.current.useRef(c);
    }),
    (I.useState = function (c) {
      return ie.current.useState(c);
    }),
    (I.useSyncExternalStore = function (c, y, D) {
      return ie.current.useSyncExternalStore(c, y, D);
    }),
    (I.useTransition = function () {
      return ie.current.useTransition();
    }),
    (I.version = "18.3.1"),
    I
  );
}
var ja;
function Li() {
  return (ja || ((ja = 1), (Ni.exports = Kf())), Ni.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Yf() {
  if (za) return wr;
  za = 1;
  var x = Li(),
    S = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    A = Object.prototype.hasOwnProperty,
    R = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(ce, $, ge) {
    var me,
      ne = {},
      q = null,
      We = null;
    (ge !== void 0 && (q = "" + ge),
      $.key !== void 0 && (q = "" + $.key),
      $.ref !== void 0 && (We = $.ref));
    for (me in $) A.call($, me) && !U.hasOwnProperty(me) && (ne[me] = $[me]);
    if (ce && ce.defaultProps)
      for (me in (($ = ce.defaultProps), $)) ne[me] === void 0 && (ne[me] = $[me]);
    return { $$typeof: S, type: ce, key: q, ref: We, props: ne, _owner: R.current };
  }
  return ((wr.Fragment = m), (wr.jsx = ue), (wr.jsxs = ue), wr);
}
var La;
function Xf() {
  return (La || ((La = 1), (_i.exports = Yf())), _i.exports);
}
var h = Xf(),
  st = Li(),
  Tl = {},
  Pi = { exports: {} },
  Ie = {},
  ji = { exports: {} },
  zi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function Gf() {
  return (
    Ta ||
      ((Ta = 1),
      (function (x) {
        function S(E, O) {
          var N = E.length;
          E.push(O);
          e: for (; 0 < N;) {
            var c = (N - 1) >>> 1,
              y = E[c];
            if (0 < R(y, O)) ((E[c] = O), (E[N] = y), (N = c));
            else break e;
          }
        }
        function m(E) {
          return E.length === 0 ? null : E[0];
        }
        function A(E) {
          if (E.length === 0) return null;
          var O = E[0],
            N = E.pop();
          if (N !== O) {
            E[0] = N;
            e: for (var c = 0, y = E.length, D = y >>> 1; c < D;) {
              var F = 2 * (c + 1) - 1,
                H = E[F],
                B = F + 1,
                X = E[B];
              if (0 > R(H, N))
                B < y && 0 > R(X, H)
                  ? ((E[c] = X), (E[B] = N), (c = B))
                  : ((E[c] = H), (E[F] = N), (c = F));
              else if (B < y && 0 > R(X, N)) ((E[c] = X), (E[B] = N), (c = B));
              else break e;
            }
          }
          return O;
        }
        function R(E, O) {
          var N = E.sortIndex - O.sortIndex;
          return N !== 0 ? N : E.id - O.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var U = performance;
          x.unstable_now = function () {
            return U.now();
          };
        } else {
          var ue = Date,
            ce = ue.now();
          x.unstable_now = function () {
            return ue.now() - ce;
          };
        }
        var $ = [],
          ge = [],
          me = 1,
          ne = null,
          q = 3,
          We = !1,
          $e = !1,
          b = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function qe(E) {
          for (var O = m(ge); O !== null;) {
            if (O.callback === null) A(ge);
            else if (O.startTime <= E) (A(ge), (O.sortIndex = O.expirationTime), S($, O));
            else break;
            O = m(ge);
          }
        }
        function ke(E) {
          if (((b = !1), qe(E), !$e))
            if (m($) !== null) (($e = !0), Le(be));
            else {
              var O = m(ge);
              O !== null && ie(ke, O.startTime - E);
            }
        }
        function be(E, O) {
          (($e = !1), b && ((b = !1), yt(Qe), (Qe = -1)), (We = !0));
          var N = q;
          try {
            for (qe(O), ne = m($); ne !== null && (!(ne.expirationTime > O) || (E && !Yt()));) {
              var c = ne.callback;
              if (typeof c == "function") {
                ((ne.callback = null), (q = ne.priorityLevel));
                var y = c(ne.expirationTime <= O);
                ((O = x.unstable_now()),
                  typeof y == "function" ? (ne.callback = y) : ne === m($) && A($),
                  qe(O));
              } else A($);
              ne = m($);
            }
            if (ne !== null) var D = !0;
            else {
              var F = m(ge);
              (F !== null && ie(ke, F.startTime - O), (D = !1));
            }
            return D;
          } finally {
            ((ne = null), (q = N), (We = !1));
          }
        }
        var Ne = !1,
          ze = null,
          Qe = -1,
          Pt = 5,
          gt = -1;
        function Yt() {
          return !(x.unstable_now() - gt < Pt);
        }
        function ct() {
          if (ze !== null) {
            var E = x.unstable_now();
            gt = E;
            var O = !0;
            try {
              O = ze(!0, E);
            } finally {
              O ? Fe() : ((Ne = !1), (ze = null));
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
        function Le(E) {
          ((ze = E), Ne || ((Ne = !0), Fe()));
        }
        function ie(E, O) {
          Qe = Y(function () {
            E(x.unstable_now());
          }, O);
        }
        ((x.unstable_IdlePriority = 5),
          (x.unstable_ImmediatePriority = 1),
          (x.unstable_LowPriority = 4),
          (x.unstable_NormalPriority = 3),
          (x.unstable_Profiling = null),
          (x.unstable_UserBlockingPriority = 2),
          (x.unstable_cancelCallback = function (E) {
            E.callback = null;
          }),
          (x.unstable_continueExecution = function () {
            $e || We || (($e = !0), Le(be));
          }),
          (x.unstable_forceFrameRate = function (E) {
            0 > E || 125 < E
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Pt = 0 < E ? Math.floor(1e3 / E) : 5);
          }),
          (x.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (x.unstable_getFirstCallbackNode = function () {
            return m($);
          }),
          (x.unstable_next = function (E) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = q;
            }
            var N = q;
            q = O;
            try {
              return E();
            } finally {
              q = N;
            }
          }),
          (x.unstable_pauseExecution = function () {}),
          (x.unstable_requestPaint = function () {}),
          (x.unstable_runWithPriority = function (E, O) {
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
              return O();
            } finally {
              q = N;
            }
          }),
          (x.unstable_scheduleCallback = function (E, O, N) {
            var c = x.unstable_now();
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
                callback: O,
                priorityLevel: E,
                startTime: N,
                expirationTime: y,
                sortIndex: -1,
              }),
              N > c
                ? ((E.sortIndex = N),
                  S(ge, E),
                  m($) === null &&
                    E === m(ge) &&
                    (b ? (yt(Qe), (Qe = -1)) : (b = !0), ie(ke, N - c)))
                : ((E.sortIndex = y), S($, E), $e || We || (($e = !0), Le(be))),
              E
            );
          }),
          (x.unstable_shouldYield = Yt),
          (x.unstable_wrapCallback = function (E) {
            var O = q;
            return function () {
              var N = q;
              q = O;
              try {
                return E.apply(this, arguments);
              } finally {
                q = N;
              }
            };
          }));
      })(zi)),
    zi
  );
}
var Ra;
function Jf() {
  return (Ra || ((Ra = 1), (ji.exports = Gf())), ji.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oa;
function Zf() {
  if (Oa) return Ie;
  Oa = 1;
  var x = Li(),
    S = Jf();
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
  var A = new Set(),
    R = {};
  function U(e, t) {
    (ue(e, t), ue(e + "Capture", t));
  }
  function ue(e, t) {
    for (R[e] = t, e = 0; e < t.length; e++) A.add(t[e]);
  }
  var ce = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    $ = Object.prototype.hasOwnProperty,
    ge =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    me = {},
    ne = {};
  function q(e) {
    return $.call(ne, e) ? !0 : $.call(me, e) ? !1 : ge.test(e) ? (ne[e] = !0) : ((me[e] = !0), !1);
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
  var ke = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for("react.element"),
    Ne = Symbol.for("react.portal"),
    ze = Symbol.for("react.fragment"),
    Qe = Symbol.for("react.strict_mode"),
    Pt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    et = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    E = Symbol.iterator;
  function O(e) {
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
  var D = !1;
  function F(e, t) {
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
      ((D = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function H(e) {
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
        return ((e = F(e.type, !1)), e);
      case 11:
        return ((e = F(e.type.render, !1)), e);
      case 1:
        return ((e = F(e.type, !0)), e);
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
          return ((t = e.displayName || null), t !== null ? t : B(e.type) || "Memo");
        case Le:
          ((t = e._payload), (e = e._init));
          try {
            return B(e(t));
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
  function Ri(e) {
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
  function Rl(e, t) {
    var n = t.checked;
    return N({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Oi(e, t) {
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
  function Mi(e, t) {
    ((t = t.checked), t != null && qe(e, "checked", t, !1));
  }
  function Ol(e, t) {
    Mi(e, t);
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
  function Di(e, t, n) {
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
    (t !== "number" || Sr(e.ownerDocument) !== e) &&
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
  function Dl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return N({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ii(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (Mn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Q(n) };
  }
  function Fi(e, t) {
    var n = Q(t.value),
      r = Q(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Ui(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Ai(e) {
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
      ? Ai(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Er,
    Vi = (function (e) {
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
    Ga = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function (e) {
    Ga.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]));
    });
  });
  function Hi(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (In.hasOwnProperty(e) && In[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Bi(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Hi(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ja = N(
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
  function Vl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Hl = null,
    an = null,
    cn = null;
  function Wi(e) {
    if ((e = lr(e))) {
      if (typeof Hl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Kr(t)), Hl(e.stateNode, e.type, t));
    }
  }
  function $i(e) {
    an ? (cn ? cn.push(e) : (cn = [e])) : (an = e);
  }
  function Qi() {
    if (an) {
      var e = an,
        t = cn;
      if (((cn = an = null), Wi(e), t)) for (e = 0; e < t.length; e++) Wi(t[e]);
    }
  }
  function Ki(e, t) {
    return e(t);
  }
  function Yi() {}
  var Bl = !1;
  function Xi(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Ki(e, t, n);
    } finally {
      ((Bl = !1), (an !== null || cn !== null) && (Yi(), Qi()));
    }
  }
  function Fn(e, t) {
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
  function Za(e, t, n, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (g) {
      this.onError(g);
    }
  }
  var An = !1,
    Cr = null,
    _r = !1,
    $l = null,
    qa = {
      onError: function (e) {
        ((An = !0), (Cr = e));
      },
    };
  function ba(e, t, n, r, l, u, i, o, s) {
    ((An = !1), (Cr = null), Za.apply(qa, arguments));
  }
  function ec(e, t, n, r, l, u, i, o, s) {
    if ((ba.apply(this, arguments), An)) {
      if (An) {
        var p = Cr;
        ((An = !1), (Cr = null));
      } else throw Error(m(198));
      _r || ((_r = !0), ($l = p));
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
  function Gi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Ji(e) {
    if (Xt(e) !== e) throw Error(m(188));
  }
  function tc(e) {
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
          if (u === n) return (Ji(l), e);
          if (u === r) return (Ji(l), t);
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
  function Zi(e) {
    return ((e = tc(e)), e !== null ? qi(e) : null);
  }
  function qi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = qi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bi = S.unstable_scheduleCallback,
    eo = S.unstable_cancelCallback,
    nc = S.unstable_shouldYield,
    rc = S.unstable_requestPaint,
    se = S.unstable_now,
    lc = S.unstable_getCurrentPriorityLevel,
    Ql = S.unstable_ImmediatePriority,
    to = S.unstable_UserBlockingPriority,
    Nr = S.unstable_NormalPriority,
    uc = S.unstable_LowPriority,
    no = S.unstable_IdlePriority,
    Pr = null,
    dt = null;
  function ic(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var tt = Math.clz32 ? Math.clz32 : ac,
    oc = Math.log,
    sc = Math.LN2;
  function ac(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((oc(e) / sc) | 0)) | 0);
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
  function Lr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? (r = Vn(o)) : ((u &= i), u !== 0 && (r = Vn(u)));
    } else ((i = n & ~l), i !== 0 ? (r = Vn(i)) : u !== 0 && (r = Vn(u)));
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
  function cc(e, t) {
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
  function fc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var i = 31 - tt(u),
        o = 1 << i,
        s = l[i];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[i] = cc(o, t))
        : s <= t && (e.expiredLanes |= o),
        (u &= ~o));
    }
  }
  function Kl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ro() {
    var e = jr;
    return ((jr <<= 1), (jr & 4194240) === 0 && (jr = 64), e);
  }
  function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Hn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - tt(t)),
      (e[t] = n));
  }
  function dc(e, t) {
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
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - tt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var K = 0;
  function lo(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var uo,
    Gl,
    io,
    oo,
    so,
    Jl = !1,
    Tr = [],
    jt = null,
    zt = null,
    Lt = null,
    Bn = new Map(),
    Wn = new Map(),
    Tt = [],
    pc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function ao(e, t) {
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
        Wn.delete(t.pointerId);
    }
  }
  function $n(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && Gl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function mc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((jt = $n(jt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((zt = $n(zt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Lt = $n(Lt, e, t, n, r, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (Bn.set(u, $n(Bn.get(u) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), Wn.set(u, $n(Wn.get(u) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function co(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Gi(n)), t !== null)) {
            ((e.blockedOn = t),
              so(e.priority, function () {
                io(n);
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
      } else return ((t = lr(n)), t !== null && Gl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function fo(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function hc() {
    ((Jl = !1),
      jt !== null && Rr(jt) && (jt = null),
      zt !== null && Rr(zt) && (zt = null),
      Lt !== null && Rr(Lt) && (Lt = null),
      Bn.forEach(fo),
      Wn.forEach(fo));
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl || ((Jl = !0), S.unstable_scheduleCallback(S.unstable_NormalPriority, hc)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < Tr.length) {
      Qn(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      jt !== null && Qn(jt, e),
        zt !== null && Qn(zt, e),
        Lt !== null && Qn(Lt, e),
        Bn.forEach(t),
        Wn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null);)
      (co(n), n.blockedOn === null && Tt.shift());
  }
  var fn = ke.ReactCurrentBatchConfig,
    Or = !0;
  function vc(e, t, n, r) {
    var l = K,
      u = fn.transition;
    fn.transition = null;
    try {
      ((K = 1), Zl(e, t, n, r));
    } finally {
      ((K = l), (fn.transition = u));
    }
  }
  function yc(e, t, n, r) {
    var l = K,
      u = fn.transition;
    fn.transition = null;
    try {
      ((K = 4), Zl(e, t, n, r));
    } finally {
      ((K = l), (fn.transition = u));
    }
  }
  function Zl(e, t, n, r) {
    if (Or) {
      var l = ql(e, t, n, r);
      if (l === null) (hu(e, t, r, Mr, n), ao(e, r));
      else if (mc(l, e, t, n, r)) r.stopPropagation();
      else if ((ao(e, r), t & 4 && -1 < pc.indexOf(e))) {
        for (; l !== null;) {
          var u = lr(l);
          if (
            (u !== null && uo(u), (u = ql(e, t, n, r)), u === null && hu(e, t, r, Mr, n), u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else hu(e, t, r, null, n);
    }
  }
  var Mr = null;
  function ql(e, t, n, r) {
    if (((Mr = null), (e = Vl(r)), (e = Gt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Gi(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Mr = e), null);
  }
  function po(e) {
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
        switch (lc()) {
          case Ql:
            return 1;
          case to:
            return 4;
          case Nr:
          case uc:
            return 16;
          case no:
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
  function mo() {
    if (Dr) return Dr;
    var e,
      t = bl,
      n = t.length,
      r,
      l = "value" in Rt ? Rt.value : Rt.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[u - r]; r++);
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
  function Fr() {
    return !0;
  }
  function ho() {
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
          ? Fr
          : ho),
        (this.isPropagationStopped = ho),
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
    eu = Ae(dn),
    Yn = N({}, dn, { view: 0, detail: 0 }),
    gc = Ae(Yn),
    tu,
    nu,
    Xn,
    Ur = N({}, Yn, {
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
      getModifierState: lu,
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
                ? ((tu = e.screenX - Xn.screenX), (nu = e.screenY - Xn.screenY))
                : (nu = tu = 0),
              (Xn = e)),
            tu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : nu;
      },
    }),
    vo = Ae(Ur),
    wc = N({}, Ur, { dataTransfer: 0 }),
    xc = Ae(wc),
    kc = N({}, Yn, { relatedTarget: 0 }),
    ru = Ae(kc),
    Sc = N({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ec = Ae(Sc),
    Cc = N({}, dn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    _c = Ae(Cc),
    Nc = N({}, dn, { data: 0 }),
    yo = Ae(Nc),
    Pc = {
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
    jc = {
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
    zc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Lc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zc[e]) ? !!t[e] : !1;
  }
  function lu() {
    return Lc;
  }
  var Tc = N({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = Pc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? jc[e.keyCode] || "Unidentified"
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
      getModifierState: lu,
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
    Rc = Ae(Tc),
    Oc = N({}, Ur, {
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
    go = Ae(Oc),
    Mc = N({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lu,
    }),
    Dc = Ae(Mc),
    Ic = N({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fc = Ae(Ic),
    Uc = N({}, Ur, {
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
    Ac = Ae(Uc),
    Vc = [9, 13, 27, 32],
    uu = ce && "CompositionEvent" in window,
    Gn = null;
  ce && "documentMode" in document && (Gn = document.documentMode);
  var Hc = ce && "TextEvent" in window && !Gn,
    wo = ce && (!uu || (Gn && 8 < Gn && 11 >= Gn)),
    xo = " ",
    ko = !1;
  function So(e, t) {
    switch (e) {
      case "keyup":
        return Vc.indexOf(t.keyCode) !== -1;
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
  function Eo(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var pn = !1;
  function Bc(e, t) {
    switch (e) {
      case "compositionend":
        return Eo(t);
      case "keypress":
        return t.which !== 32 ? null : ((ko = !0), xo);
      case "textInput":
        return ((e = t.data), e === xo && ko ? null : e);
      default:
        return null;
    }
  }
  function Wc(e, t) {
    if (pn)
      return e === "compositionend" || (!uu && So(e, t))
        ? ((e = mo()), (Dr = bl = Rt = null), (pn = !1), e)
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
        return wo && t.locale !== "ko" ? null : t.data;
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
  function Co(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!$c[e.type] : t === "textarea";
  }
  function _o(e, t, n, r) {
    ($i(r),
      (t = Wr(t, "onChange")),
      0 < t.length &&
        ((n = new eu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Jn = null,
    Zn = null;
  function Qc(e) {
    Wo(e, 0);
  }
  function Ar(e) {
    var t = gn(e);
    if (Ri(t)) return e;
  }
  function Kc(e, t) {
    if (e === "change") return t;
  }
  var No = !1;
  if (ce) {
    var iu;
    if (ce) {
      var ou = "oninput" in document;
      if (!ou) {
        var Po = document.createElement("div");
        (Po.setAttribute("oninput", "return;"), (ou = typeof Po.oninput == "function"));
      }
      iu = ou;
    } else iu = !1;
    No = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function jo() {
    Jn && (Jn.detachEvent("onpropertychange", zo), (Zn = Jn = null));
  }
  function zo(e) {
    if (e.propertyName === "value" && Ar(Zn)) {
      var t = [];
      (_o(t, Zn, e, Vl(e)), Xi(Qc, t));
    }
  }
  function Yc(e, t, n) {
    e === "focusin"
      ? (jo(), (Jn = t), (Zn = n), Jn.attachEvent("onpropertychange", zo))
      : e === "focusout" && jo();
  }
  function Xc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ar(Zn);
  }
  function Gc(e, t) {
    if (e === "click") return Ar(t);
  }
  function Jc(e, t) {
    if (e === "input" || e === "change") return Ar(t);
  }
  function Zc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : Zc;
  function qn(e, t) {
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
  function Lo(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function To(e, t) {
    var n = Lo(e);
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
      n = Lo(n);
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
  function Oo() {
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
  function su(e) {
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
  function qc(e) {
    var t = Oo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ro(n.ownerDocument.documentElement, n)) {
      if (r !== null && su(n)) {
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
            (l = To(n, u)));
          var i = To(n, r);
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
  var bc = ce && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    au = null,
    bn = null,
    cu = !1;
  function Mo(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    cu ||
      mn == null ||
      mn !== Sr(r) ||
      ((r = mn),
      "selectionStart" in r && su(r)
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
        (r = Wr(au, "onSelect")),
        0 < r.length &&
          ((t = new eu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))));
  }
  function Vr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var hn = {
      animationend: Vr("Animation", "AnimationEnd"),
      animationiteration: Vr("Animation", "AnimationIteration"),
      animationstart: Vr("Animation", "AnimationStart"),
      transitionend: Vr("Transition", "TransitionEnd"),
    },
    fu = {},
    Do = {};
  ce &&
    ((Do = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hn.animationend.animation,
      delete hn.animationiteration.animation,
      delete hn.animationstart.animation),
    "TransitionEvent" in window || delete hn.transitionend.transition);
  function Hr(e) {
    if (fu[e]) return fu[e];
    if (!hn[e]) return e;
    var t = hn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Do) return (fu[e] = t[n]);
    return e;
  }
  var Io = Hr("animationend"),
    Fo = Hr("animationiteration"),
    Uo = Hr("animationstart"),
    Ao = Hr("transitionend"),
    Vo = new Map(),
    Ho =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ot(e, t) {
    (Vo.set(e, t), U(t, [e]));
  }
  for (var du = 0; du < Ho.length; du++) {
    var pu = Ho[du],
      ef = pu.toLowerCase(),
      tf = pu[0].toUpperCase() + pu.slice(1);
    Ot(ef, "on" + tf);
  }
  (Ot(Io, "onAnimationEnd"),
    Ot(Fo, "onAnimationIteration"),
    Ot(Uo, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(Ao, "onTransitionEnd"),
    ue("onMouseEnter", ["mouseout", "mouseover"]),
    ue("onMouseLeave", ["mouseout", "mouseover"]),
    ue("onPointerEnter", ["pointerout", "pointerover"]),
    ue("onPointerLeave", ["pointerout", "pointerover"]),
    U("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    U(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    U("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    U("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    U(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    U(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    nf = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
  function Bo(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), ec(r, t, void 0, e), (e.currentTarget = null));
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
            (Bo(l, o, p), (u = s));
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
            (Bo(l, o, p), (u = s));
          }
      }
    }
    if (_r) throw ((e = $l), (_r = !1), ($l = null), e);
  }
  function J(e, t) {
    var n = t[ku];
    n === void 0 && (n = t[ku] = new Set());
    var r = e + "__bubble";
    n.has(r) || ($o(t, e, 2, !1), n.add(r));
  }
  function mu(e, t, n) {
    var r = 0;
    (t && (r |= 4), $o(n, e, r, t));
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Br]) {
      ((e[Br] = !0),
        A.forEach(function (n) {
          n !== "selectionchange" && (nf.has(n) || mu(n, !1, e), mu(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || ((t[Br] = !0), mu("selectionchange", !1, t));
    }
  }
  function $o(e, t, n, r) {
    switch (po(t)) {
      case 1:
        var l = vc;
        break;
      case 4:
        l = yc;
        break;
      default:
        l = Zl;
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
  function hu(e, t, n, r, l) {
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
    Xi(function () {
      var p = u,
        g = Vl(n),
        w = [];
      e: {
        var v = Vo.get(e);
        if (v !== void 0) {
          var C = eu,
            P = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              C = Rc;
              break;
            case "focusin":
              ((P = "focus"), (C = ru));
              break;
            case "focusout":
              ((P = "blur"), (C = ru));
              break;
            case "beforeblur":
            case "afterblur":
              C = ru;
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
              C = vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = xc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Dc;
              break;
            case Io:
            case Fo:
            case Uo:
              C = Ec;
              break;
            case Ao:
              C = Fc;
              break;
            case "scroll":
              C = gc;
              break;
            case "wheel":
              C = Ac;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = _c;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = go;
          }
          var j = (t & 4) !== 0,
            ae = !j && e === "scroll",
            f = j ? (v !== null ? v + "Capture" : null) : v;
          j = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var k = d.stateNode;
            if (
              (d.tag === 5 &&
                k !== null &&
                ((d = k), f !== null && ((k = Fn(a, f)), k != null && j.push(nr(a, k, d)))),
              ae)
            )
              break;
            a = a.return;
          }
          0 < j.length && ((v = new C(v, P, null, n, g)), w.push({ event: v, listeners: j }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (C = e === "mouseout" || e === "pointerout"),
            v && n !== Al && (P = n.relatedTarget || n.fromElement) && (Gt(P) || P[wt]))
          )
            break e;
          if (
            (C || v) &&
            ((v =
              g.window === g
                ? g
                : (v = g.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            C
              ? ((P = n.relatedTarget || n.toElement),
                (C = p),
                (P = P ? Gt(P) : null),
                P !== null &&
                  ((ae = Xt(P)), P !== ae || (P.tag !== 5 && P.tag !== 6)) &&
                  (P = null))
              : ((C = null), (P = p)),
            C !== P)
          ) {
            if (
              ((j = vo),
              (k = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((j = go), (k = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (ae = C == null ? v : gn(C)),
              (d = P == null ? v : gn(P)),
              (v = new j(k, a + "leave", C, n, g)),
              (v.target = ae),
              (v.relatedTarget = d),
              (k = null),
              Gt(g) === p &&
                ((j = new j(f, a + "enter", P, n, g)),
                (j.target = d),
                (j.relatedTarget = ae),
                (k = j)),
              (ae = k),
              C && P)
            )
              t: {
                for (j = C, f = P, a = 0, d = j; d; d = vn(d)) a++;
                for (d = 0, k = f; k; k = vn(k)) d++;
                for (; 0 < a - d;) ((j = vn(j)), a--);
                for (; 0 < d - a;) ((f = vn(f)), d--);
                for (; a--;) {
                  if (j === f || (f !== null && j === f.alternate)) break t;
                  ((j = vn(j)), (f = vn(f)));
                }
                j = null;
              }
            else j = null;
            (C !== null && Qo(w, v, C, j, !1), P !== null && ae !== null && Qo(w, ae, P, j, !0));
          }
        }
        e: {
          if (
            ((v = p ? gn(p) : window),
            (C = v.nodeName && v.nodeName.toLowerCase()),
            C === "select" || (C === "input" && v.type === "file"))
          )
            var z = Kc;
          else if (Co(v))
            if (No) z = Jc;
            else {
              z = Xc;
              var L = Yc;
            }
          else
            (C = v.nodeName) &&
              C.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (z = Gc);
          if (z && (z = z(e, p))) {
            _o(w, z, n, g);
            break e;
          }
          (L && L(e, v, p),
            e === "focusout" &&
              (L = v._wrapperState) &&
              L.controlled &&
              v.type === "number" &&
              Ml(v, "number", v.value));
        }
        switch (((L = p ? gn(p) : window), e)) {
          case "focusin":
            (Co(L) || L.contentEditable === "true") && ((mn = L), (au = p), (bn = null));
            break;
          case "focusout":
            bn = au = mn = null;
            break;
          case "mousedown":
            cu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((cu = !1), Mo(w, n, g));
            break;
          case "selectionchange":
            if (bc) break;
          case "keydown":
          case "keyup":
            Mo(w, n, g);
        }
        var T;
        if (uu)
          e: {
            switch (e) {
              case "compositionstart":
                var M = "onCompositionStart";
                break e;
              case "compositionend":
                M = "onCompositionEnd";
                break e;
              case "compositionupdate":
                M = "onCompositionUpdate";
                break e;
            }
            M = void 0;
          }
        else
          pn
            ? So(e, n) && (M = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
        (M &&
          (wo &&
            n.locale !== "ko" &&
            (pn || M !== "onCompositionStart"
              ? M === "onCompositionEnd" && pn && (T = mo())
              : ((Rt = g), (bl = "value" in Rt ? Rt.value : Rt.textContent), (pn = !0))),
          (L = Wr(p, M)),
          0 < L.length &&
            ((M = new yo(M, e, null, n, g)),
            w.push({ event: M, listeners: L }),
            T ? (M.data = T) : ((T = Eo(n)), T !== null && (M.data = T)))),
          (T = Hc ? Bc(e, n) : Wc(e, n)) &&
            ((p = Wr(p, "onBeforeInput")),
            0 < p.length &&
              ((g = new yo("onBeforeInput", "beforeinput", null, n, g)),
              w.push({ event: g, listeners: p }),
              (g.data = T))));
      }
      Wo(w, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wr(e, t) {
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
  function Qo(e, t, n, r, l) {
    for (var u = t._reactName, i = []; n !== null && n !== r;) {
      var o = n,
        s = o.alternate,
        p = o.stateNode;
      if (s !== null && s === r) break;
      (o.tag === 5 &&
        p !== null &&
        ((o = p),
        l
          ? ((s = Fn(n, u)), s != null && i.unshift(nr(n, s, o)))
          : l || ((s = Fn(n, u)), s != null && i.push(nr(n, s, o)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var rf = /\r\n?/g,
    lf = /\u0000|\uFFFD/g;
  function Ko(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        rf,
        `
`,
      )
      .replace(lf, "");
  }
  function $r(e, t, n) {
    if (((t = Ko(t)), Ko(e) !== t && n)) throw Error(m(425));
  }
  function Qr() {}
  var vu = null,
    yu = null;
  function gu(e, t) {
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
  var wu = typeof setTimeout == "function" ? setTimeout : void 0,
    uf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yo = typeof Promise == "function" ? Promise : void 0,
    of =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Yo < "u"
          ? function (e) {
              return Yo.resolve(null).then(e).catch(sf);
            }
          : wu;
  function sf(e) {
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
  function Xo(e) {
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
    rr = "__reactProps$" + yn,
    wt = "__reactContainer$" + yn,
    ku = "__reactEvents$" + yn,
    af = "__reactListeners$" + yn,
    cf = "__reactHandles$" + yn;
  function Gt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[wt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Xo(e); e !== null;) {
            if ((n = e[pt])) return n;
            e = Xo(e);
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
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Kr(e) {
    return e[rr] || null;
  }
  var Su = [],
    wn = -1;
  function Dt(e) {
    return { current: e };
  }
  function Z(e) {
    0 > wn || ((e.current = Su[wn]), (Su[wn] = null), wn--);
  }
  function G(e, t) {
    (wn++, (Su[wn] = e.current), (e.current = t));
  }
  var It = {},
    Se = Dt(It),
    Te = Dt(!1),
    Jt = It;
  function xn(e, t) {
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
  function Re(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Yr() {
    (Z(Te), Z(Se));
  }
  function Go(e, t, n) {
    if (Se.current !== It) throw Error(m(168));
    (G(Se, t), G(Te, n));
  }
  function Jo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, X(e) || "Unknown", l));
    return N({}, n, r);
  }
  function Xr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
      (Jt = Se.current),
      G(Se, e),
      G(Te, Te.current),
      !0
    );
  }
  function Zo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Jo(e, t, Jt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Z(Te),
        Z(Se),
        G(Se, e))
      : Z(Te),
      G(Te, n));
  }
  var xt = null,
    Gr = !1,
    Eu = !1;
  function qo(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  function ff(e) {
    ((Gr = !0), qo(e));
  }
  function Ft() {
    if (!Eu && xt !== null) {
      Eu = !0;
      var e = 0,
        t = K;
      try {
        var n = xt;
        for (K = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((xt = null), (Gr = !1));
      } catch (l) {
        throw (xt !== null && (xt = xt.slice(e + 1)), bi(Ql, Ft), l);
      } finally {
        ((K = t), (Eu = !1));
      }
    }
    return null;
  }
  var kn = [],
    Sn = 0,
    Jr = null,
    Zr = 0,
    Ke = [],
    Ye = 0,
    Zt = null,
    kt = 1,
    St = "";
  function qt(e, t) {
    ((kn[Sn++] = Zr), (kn[Sn++] = Jr), (Jr = e), (Zr = t));
  }
  function bo(e, t, n) {
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
  function Cu(e) {
    e.return !== null && (qt(e, 1), bo(e, 1, 0));
  }
  function _u(e) {
    for (; e === Jr;) ((Jr = kn[--Sn]), (kn[Sn] = null), (Zr = kn[--Sn]), (kn[Sn] = null));
    for (; e === Zt;)
      ((Zt = Ke[--Ye]),
        (Ke[Ye] = null),
        (St = Ke[--Ye]),
        (Ke[Ye] = null),
        (kt = Ke[--Ye]),
        (Ke[Ye] = null));
  }
  var Ve = null,
    He = null,
    te = !1,
    rt = null;
  function es(e, t) {
    var n = Ze(5, null, null, 0);
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
          t !== null ? ((e.stateNode = t), (Ve = e), (He = Mt(t.firstChild)), !0) : !1
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
            ? ((n = Zt !== null ? { id: kt, overflow: St } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Ze(18, null, null, 0)),
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
  function Nu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Pu(e) {
    if (te) {
      var t = He;
      if (t) {
        var n = t;
        if (!ts(e, t)) {
          if (Nu(e)) throw Error(m(418));
          t = Mt(n.nextSibling);
          var r = Ve;
          t && ts(e, t) ? es(r, n) : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ve = e));
        }
      } else {
        if (Nu(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ve = e));
      }
    }
  }
  function ns(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ve = e;
  }
  function qr(e) {
    if (e !== Ve) return !1;
    if (!te) return (ns(e), (te = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !gu(e.type, e.memoizedProps))),
      t && (t = He))
    ) {
      if (Nu(e)) throw (rs(), Error(m(418)));
      for (; t;) (es(e, t), (t = Mt(t.nextSibling)));
    }
    if ((ns(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                He = Mt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        He = null;
      }
    } else He = Ve ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    for (var e = He; e;) e = Mt(e.nextSibling);
  }
  function En() {
    ((He = Ve = null), (te = !1));
  }
  function ju(e) {
    rt === null ? (rt = [e]) : rt.push(e);
  }
  var df = ke.ReactCurrentBatchConfig;
  function ur(e, t, n) {
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
  function br(e, t) {
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
        ? ((a = wi(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, k) {
      var z = d.type;
      return z === ze
        ? g(f, a, d.props.children, k, d.key)
        : a !== null &&
            (a.elementType === z ||
              (typeof z == "object" && z !== null && z.$$typeof === Le && ls(z) === a.type))
          ? ((k = l(a, d.props)), (k.ref = ur(f, a, d)), (k.return = f), k)
          : ((k = El(d.type, d.key, d.props, null, f.mode, k)),
            (k.ref = ur(f, a, d)),
            (k.return = f),
            k);
    }
    function p(f, a, d, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = xi(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function g(f, a, d, k, z) {
      return a === null || a.tag !== 7
        ? ((a = on(d, f.mode, k, z)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function w(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = wi("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return (
              (d = El(a.type, a.key, a.props, null, f.mode, d)),
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
        br(f, a);
      }
      return null;
    }
    function v(f, a, d, k) {
      var z = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return z !== null ? null : o(f, a, "" + d, k);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === z ? s(f, a, d, k) : null;
          case Ne:
            return d.key === z ? p(f, a, d, k) : null;
          case Le:
            return ((z = d._init), v(f, a, z(d._payload), k));
        }
        if (Mn(d) || O(d)) return z !== null ? null : g(f, a, d, k, null);
        br(f, d);
      }
      return null;
    }
    function C(f, a, d, k, z) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((f = f.get(d) || null), o(a, f, "" + k, z));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case be:
            return ((f = f.get(k.key === null ? d : k.key) || null), s(a, f, k, z));
          case Ne:
            return ((f = f.get(k.key === null ? d : k.key) || null), p(a, f, k, z));
          case Le:
            var L = k._init;
            return C(f, a, d, L(k._payload), z);
        }
        if (Mn(k) || O(k)) return ((f = f.get(d) || null), g(a, f, k, z, null));
        br(a, k);
      }
      return null;
    }
    function P(f, a, d, k) {
      for (var z = null, L = null, T = a, M = (a = 0), ye = null; T !== null && M < d.length; M++) {
        T.index > M ? ((ye = T), (T = null)) : (ye = T.sibling);
        var W = v(f, T, d[M], k);
        if (W === null) {
          T === null && (T = ye);
          break;
        }
        (e && T && W.alternate === null && t(f, T),
          (a = u(W, a, M)),
          L === null ? (z = W) : (L.sibling = W),
          (L = W),
          (T = ye));
      }
      if (M === d.length) return (n(f, T), te && qt(f, M), z);
      if (T === null) {
        for (; M < d.length; M++)
          ((T = w(f, d[M], k)),
            T !== null && ((a = u(T, a, M)), L === null ? (z = T) : (L.sibling = T), (L = T)));
        return (te && qt(f, M), z);
      }
      for (T = r(f, T); M < d.length; M++)
        ((ye = C(T, f, M, d[M], k)),
          ye !== null &&
            (e && ye.alternate !== null && T.delete(ye.key === null ? M : ye.key),
            (a = u(ye, a, M)),
            L === null ? (z = ye) : (L.sibling = ye),
            (L = ye)));
      return (
        e &&
          T.forEach(function (Kt) {
            return t(f, Kt);
          }),
        te && qt(f, M),
        z
      );
    }
    function j(f, a, d, k) {
      var z = O(d);
      if (typeof z != "function") throw Error(m(150));
      if (((d = z.call(d)), d == null)) throw Error(m(151));
      for (
        var L = (z = null), T = a, M = (a = 0), ye = null, W = d.next();
        T !== null && !W.done;
        M++, W = d.next()
      ) {
        T.index > M ? ((ye = T), (T = null)) : (ye = T.sibling);
        var Kt = v(f, T, W.value, k);
        if (Kt === null) {
          T === null && (T = ye);
          break;
        }
        (e && T && Kt.alternate === null && t(f, T),
          (a = u(Kt, a, M)),
          L === null ? (z = Kt) : (L.sibling = Kt),
          (L = Kt),
          (T = ye));
      }
      if (W.done) return (n(f, T), te && qt(f, M), z);
      if (T === null) {
        for (; !W.done; M++, W = d.next())
          ((W = w(f, W.value, k)),
            W !== null && ((a = u(W, a, M)), L === null ? (z = W) : (L.sibling = W), (L = W)));
        return (te && qt(f, M), z);
      }
      for (T = r(f, T); !W.done; M++, W = d.next())
        ((W = C(T, f, M, W.value, k)),
          W !== null &&
            (e && W.alternate !== null && T.delete(W.key === null ? M : W.key),
            (a = u(W, a, M)),
            L === null ? (z = W) : (L.sibling = W),
            (L = W)));
      return (
        e &&
          T.forEach(function (Qf) {
            return t(f, Qf);
          }),
        te && qt(f, M),
        z
      );
    }
    function ae(f, a, d, k) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === ze &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case be:
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
                    (typeof z == "object" && z !== null && z.$$typeof === Le && ls(z) === L.type)
                  ) {
                    (n(f, L.sibling),
                      (a = l(L, d.props)),
                      (a.ref = ur(f, L, d)),
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
                ? ((a = on(d.props.children, f.mode, k, d.key)), (a.return = f), (f = a))
                : ((k = El(d.type, d.key, d.props, null, f.mode, k)),
                  (k.ref = ur(f, a, d)),
                  (k.return = f),
                  (f = k));
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
              ((a = xi(d, f.mode, k)), (a.return = f), (f = a));
            }
            return i(f);
          case Le:
            return ((L = d._init), ae(f, a, L(d._payload), k));
        }
        if (Mn(d)) return P(f, a, d, k);
        if (O(d)) return j(f, a, d, k);
        br(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = wi(d, f.mode, k)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return ae;
  }
  var Cn = us(!0),
    is = us(!1),
    el = Dt(null),
    tl = null,
    _n = null,
    zu = null;
  function Lu() {
    zu = _n = tl = null;
  }
  function Tu(e) {
    var t = el.current;
    (Z(el), (e._currentValue = t));
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
    ((tl = e),
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
        if (tl === null) throw Error(m(308));
        ((_n = e), (tl.dependencies = { lanes: 0, firstContext: e }));
      } else _n = _n.next = e;
    return t;
  }
  var bt = null;
  function Ou(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function os(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Ou(t)) : ((n.next = l.next), (l.next = n)),
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
  function Mu(e) {
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
      l === null ? ((t.next = t), Ou(r)) : ((t.next = l.next), (l.next = t)),
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
  function as(e, t) {
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
  function rl(e, t, n, r) {
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
      var g = e.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (o = g.lastBaseUpdate),
        o !== i && (o === null ? (g.firstBaseUpdate = p) : (o.next = p), (g.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var w = l.baseState;
      ((i = 0), (g = p = s = null), (o = u));
      do {
        var v = o.lane,
          C = o.eventTime;
        if ((r & v) === v) {
          g !== null &&
            (g = g.next =
              {
                eventTime: C,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var P = e,
              j = o;
            switch (((v = t), (C = n), j.tag)) {
              case 1:
                if (((P = j.payload), typeof P == "function")) {
                  w = P.call(C, w, v);
                  break e;
                }
                w = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = j.payload), (v = typeof P == "function" ? P.call(C, w, v) : P), v == null)
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
          ((C = {
            eventTime: C,
            lane: v,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            g === null ? ((p = g = C), (s = w)) : (g = g.next = C),
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
        (l.firstBaseUpdate = p),
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
  var ir = {},
    mt = Dt(ir),
    or = Dt(ir),
    sr = Dt(ir);
  function en(e) {
    if (e === ir) throw Error(m(174));
    return e;
  }
  function Du(e, t) {
    switch ((G(sr, t), G(or, e), G(mt, ir), (e = t.nodeType), e)) {
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
    (Z(mt), G(mt, t));
  }
  function Pn() {
    (Z(mt), Z(or), Z(sr));
  }
  function fs(e) {
    en(sr.current);
    var t = en(mt.current),
      n = Il(t, e.type);
    t !== n && (G(or, e), G(mt, n));
  }
  function Iu(e) {
    or.current === e && (Z(mt), Z(or));
  }
  var re = Dt(0);
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
  var Fu = [];
  function Uu() {
    for (var e = 0; e < Fu.length; e++) Fu[e]._workInProgressVersionPrimary = null;
    Fu.length = 0;
  }
  var ul = ke.ReactCurrentDispatcher,
    Au = ke.ReactCurrentBatchConfig,
    tn = 0,
    le = null,
    de = null,
    he = null,
    il = !1,
    ar = !1,
    cr = 0,
    pf = 0;
  function Ee() {
    throw Error(m(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
    return !0;
  }
  function Hu(e, t, n, r, l, u) {
    if (
      ((tn = u),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ul.current = e === null || e.memoizedState === null ? yf : gf),
      (e = n(r, l)),
      ar)
    ) {
      u = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= u)) throw Error(m(301));
        ((u += 1), (he = de = null), (t.updateQueue = null), (ul.current = wf), (e = n(r, l)));
      } while (ar);
    }
    if (
      ((ul.current = al),
      (t = de !== null && de.next !== null),
      (tn = 0),
      (he = de = le = null),
      (il = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Bu() {
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
      if (e === null) throw Error(m(310));
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
          (s === null ? ((o = s = w), (i = r)) : (s = s.next = w), (le.lanes |= g), (nn |= g));
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
      do ((u = l.lane), (le.lanes |= u), (nn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function $u(e) {
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
  function ds() {}
  function ps(e, t) {
    var n = le,
      r = Ge(),
      l = t(),
      u = !nt(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Oe = !0)),
      (r = r.queue),
      Qu(vs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), dr(9, hs.bind(null, n, r, l, t), void 0, null), ve === null))
        throw Error(m(349));
      (tn & 30) !== 0 || ms(n, t, l);
    }
    return l;
  }
  function ms(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.stores = [e]))
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
      return !nt(e, n);
    } catch {
      return !0;
    }
  }
  function gs(e) {
    var t = Et(e, 1);
    t !== null && ot(t, e, 1, -1);
  }
  function ws(e) {
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
      (e = e.dispatch = vf.bind(null, le, e)),
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
  function xs() {
    return Ge().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = ht();
    ((le.flags |= e), (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function sl(e, t, n, r) {
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
  function ks(e, t) {
    return ol(8390656, 8, e, t);
  }
  function Qu(e, t) {
    return sl(2048, 8, e, t);
  }
  function Ss(e, t) {
    return sl(4, 2, e, t);
  }
  function Es(e, t) {
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
  function _s(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), sl(4, 4, Cs.bind(null, t, e), n));
  }
  function Ku() {}
  function Ns(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ps(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vu(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function js(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n))
      : (nt(n, t) || ((n = ro()), (le.lanes |= n), (nn |= n), (e.baseState = !0)), t);
  }
  function mf(e, t) {
    var n = K;
    ((K = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Au.transition;
    Au.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((K = n), (Au.transition = r));
    }
  }
  function zs() {
    return Ge().memoizedState;
  }
  function hf(e, t, n) {
    var r = Wt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ls(e)))
      Ts(t, n);
    else if (((n = os(e, t, n, r)), n !== null)) {
      var l = je();
      (ot(n, e, r, l), Rs(n, t, r));
    }
  }
  function vf(e, t, n) {
    var r = Wt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ls(e)) Ts(t, l);
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
            (s === null ? ((l.next = l), Ou(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = os(e, t, l, r)), n !== null && ((l = je()), ot(n, e, r, l), Rs(n, t, r)));
    }
  }
  function Ls(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function Ts(e, t) {
    ar = il = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Rs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  var al = {
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
    yf = {
      readContext: Xe,
      useCallback: function (e, t) {
        return ((ht().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Xe,
      useEffect: ks,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), ol(4194308, 4, Cs.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return ol(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ol(4, 2, e, t);
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
          (e = e.dispatch = hf.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ws,
      useDebugValue: Ku,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = ws(!1),
          t = e[0];
        return ((e = mf.bind(null, e[1])), (ht().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          l = ht();
        if (te) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ve === null)) throw Error(m(349));
          (tn & 30) !== 0 || ms(r, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          ks(vs.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          dr(9, hs.bind(null, r, u, n, t), void 0, null),
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
        } else ((n = pf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    gf = {
      readContext: Xe,
      useCallback: Ns,
      useContext: Xe,
      useEffect: Qu,
      useImperativeHandle: _s,
      useInsertionEffect: Ss,
      useLayoutEffect: Es,
      useMemo: Ps,
      useReducer: Wu,
      useRef: xs,
      useState: function () {
        return Wu(fr);
      },
      useDebugValue: Ku,
      useDeferredValue: function (e) {
        var t = Ge();
        return js(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Wu(fr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: zs,
      unstable_isNewReconciler: !1,
    },
    wf = {
      readContext: Xe,
      useCallback: Ns,
      useContext: Xe,
      useEffect: Qu,
      useImperativeHandle: _s,
      useInsertionEffect: Ss,
      useLayoutEffect: Es,
      useMemo: Ps,
      useReducer: $u,
      useRef: xs,
      useState: function () {
        return $u(fr);
      },
      useDebugValue: Ku,
      useDeferredValue: function (e) {
        var t = Ge();
        return de === null ? (t.memoizedState = e) : js(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = $u(fr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: zs,
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
  function Yu(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : N({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var cl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = je(),
        l = Wt(e),
        u = Ct(r, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (ot(t, e, l, r), nl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = je(),
        l = Wt(e),
        u = Ct(r, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (ot(t, e, l, r), nl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = je(),
        r = Wt(e),
        l = Ct(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (ot(t, e, r, n), nl(t, e, r)));
    },
  };
  function Os(e, t, n, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !qn(n, r) || !qn(l, u)
          : !0
    );
  }
  function Ms(e, t, n) {
    var r = !1,
      l = It,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Xe(u))
        : ((l = Re(t) ? Jt : Se.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? xn(e, l) : It)),
      (t = new t(n, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function Ds(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && cl.enqueueReplaceState(t, t.state, null));
  }
  function Xu(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Mu(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = Xe(u))
      : ((u = Re(t) ? Jt : Se.current), (l.context = xn(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (Yu(e, t, u, n), (l.state = e.memoizedState)),
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
  function jn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += H(r)), (r = r.return));
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
  function Gu(e, t, n) {
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
  var xf = typeof WeakMap == "function" ? WeakMap : Map;
  function Is(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (yl || ((yl = !0), (fi = r)), Ju(e, t));
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
          Ju(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          (Ju(e, t),
            typeof r != "function" && (Ht === null ? (Ht = new Set([this])) : Ht.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
        }),
      n
    );
  }
  function Us(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new xf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Mf.bind(null, e, t, n)), t.then(e, e));
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
              (n.alternate === null ? (n.tag = 17) : ((t = Ct(-1, 1)), (t.tag = 2), At(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var kf = ke.ReactCurrentOwner,
    Oe = !1;
  function Pe(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function Hs(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Nn(t, l),
      (r = Hu(e, t, n, r, u, l)),
      (n = Bu()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (te && n && Cu(t), (t.flags |= 1), Pe(e, t, r, l), t.child)
    );
  }
  function Bs(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !gi(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Ws(e, t, u, r, l))
        : ((e = El(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var i = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : qn), n(i, r) && e.ref === t.ref))
        return _t(e, t, l);
    }
    return ((t.flags |= 1), (e = Qt(u, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ws(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (qn(u, r) && e.ref === t.ref)
        if (((Oe = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Oe = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return Zu(e, t, n, r, l);
  }
  function $s(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          G(Ln, Be),
          (Be |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            G(Ln, Be),
            (Be |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = u !== null ? u.baseLanes : n),
          G(Ln, Be),
          (Be |= r));
      }
    else
      (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        G(Ln, Be),
        (Be |= r));
    return (Pe(e, t, l, n), t.child);
  }
  function Qs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Zu(e, t, n, r, l) {
    var u = Re(n) ? Jt : Se.current;
    return (
      (u = xn(t, u)),
      Nn(t, l),
      (n = Hu(e, t, n, r, u, l)),
      (r = Bu()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (te && r && Cu(t), (t.flags |= 1), Pe(e, t, n, l), t.child)
    );
  }
  function Ks(e, t, n, r, l) {
    if (Re(n)) {
      var u = !0;
      Xr(t);
    } else u = !1;
    if ((Nn(t, l), t.stateNode === null)) (dl(e, t), Ms(t, n, r), Xu(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var s = i.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Xe(p))
        : ((p = Re(n) ? Jt : Se.current), (p = xn(t, p)));
      var g = n.getDerivedStateFromProps,
        w = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      (w ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && Ds(t, i, r, p)),
        (Ut = !1));
      var v = t.memoizedState;
      ((i.state = v),
        rl(t, r, i, l),
        (s = t.memoizedState),
        o !== r || v !== s || Te.current || Ut
          ? (typeof g == "function" && (Yu(t, n, g, r), (s = t.memoizedState)),
            (o = Ut || Os(t, n, o, r, v, s, p))
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
            (i.context = p),
            (r = o))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
    } else {
      ((i = t.stateNode),
        ss(e, t),
        (o = t.memoizedProps),
        (p = t.type === t.elementType ? o : lt(t.type, o)),
        (i.props = p),
        (w = t.pendingProps),
        (v = i.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Xe(s))
          : ((s = Re(n) ? Jt : Se.current), (s = xn(t, s))));
      var C = n.getDerivedStateFromProps;
      ((g = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== w || v !== s) && Ds(t, i, r, s)),
        (Ut = !1),
        (v = t.memoizedState),
        (i.state = v),
        rl(t, r, i, l));
      var P = t.memoizedState;
      o !== w || v !== P || Te.current || Ut
        ? (typeof C == "function" && (Yu(t, n, C, r), (P = t.memoizedState)),
          (p = Ut || Os(t, n, p, r, v, P, s) || !1)
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
          (r = p))
        : (typeof i.componentDidUpdate != "function" ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return qu(e, t, n, r, u, l);
  }
  function qu(e, t, n, r, l, u) {
    Qs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && Zo(t, n, !1), _t(e, t, u));
    ((r = t.stateNode), (kf.current = t));
    var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Cn(t, e.child, null, u)), (t.child = Cn(t, null, o, u)))
        : Pe(e, t, o, u),
      (t.memoizedState = r.state),
      l && Zo(t, n, !0),
      t.child
    );
  }
  function Ys(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Go(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Go(e, t.context, !1),
      Du(e, t.containerInfo));
  }
  function Xs(e, t, n, r, l) {
    return (En(), ju(l), (t.flags |= 256), Pe(e, t, n, r), t.child);
  }
  var bu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ei(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gs(e, t, n) {
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
        Pu(t),
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
                  : (u = Cl(i, r, 0, null)),
                (e = on(e, r, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = ei(n)),
                (t.memoizedState = bu),
                e)
              : ti(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return Sf(e, t, i, r, o, l, n);
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
            ? ei(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = bu),
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
  function ti(e, t) {
    return (
      (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fl(e, t, n, r) {
    return (
      r !== null && ju(r),
      Cn(t, e.child, null, n),
      (e = ti(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Sf(e, t, n, r, l, u, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Gu(Error(m(422)))), fl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = r.fallback),
            (l = t.mode),
            (r = Cl({ mode: "visible", children: r.children }, l, 0, null)),
            (u = on(u, l, i, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            (t.mode & 1) !== 0 && Cn(t, e.child, null, i),
            (t.child.memoizedState = ei(i)),
            (t.memoizedState = bu),
            u);
    if ((t.mode & 1) === 0) return fl(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (u = Error(m(419))), (r = Gu(u, r, void 0)), fl(e, t, i, r));
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
      return (yi(), (r = Gu(Error(m(421)))), fl(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Df.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (He = Mt(l.nextSibling)),
        (Ve = t),
        (te = !0),
        (rt = null),
        e !== null &&
          ((Ke[Ye++] = kt),
          (Ke[Ye++] = St),
          (Ke[Ye++] = Zt),
          (kt = e.id),
          (St = e.overflow),
          (Zt = t)),
        (t = ti(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Js(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ru(e.return, t, n));
  }
  function ni(e, t, n, r, l) {
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
  function Zs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Pe(e, t, r.children, n), (r = re.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Js(e, n, t);
          else if (e.tag === 19) Js(e, n, t);
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
            ((e = n.alternate), e !== null && ll(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ni(t, !1, l, n, u));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && ll(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ni(t, !0, n, null, u);
          break;
        case "together":
          ni(t, !1, null, null, void 0);
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
  function Ef(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ys(t), En());
        break;
      case 5:
        fs(t);
        break;
      case 1:
        Re(t.type) && Xr(t);
        break;
      case 4:
        Du(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (G(el, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (G(re, re.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Gs(e, t, n)
              : (G(re, re.current & 1), (e = _t(e, t, n)), e !== null ? e.sibling : null);
        G(re, re.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Zs(e, t, n);
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
        return ((t.lanes = 0), $s(e, t, n));
    }
    return _t(e, t, n);
  }
  var qs, ri, bs, ea;
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
    (ri = function () {}),
    (bs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(mt.current));
        var u = null;
        switch (n) {
          case "input":
            ((l = Rl(e, l)), (r = Rl(e, r)), (u = []));
            break;
          case "select":
            ((l = N({}, l, { value: void 0 })), (r = N({}, r, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = Dl(e, l)), (r = Dl(e, r)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qr);
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
                (R.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
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
                    (R.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && J("scroll", e), u || o === s || (u = []))
                      : (u = u || []).push(p, s));
        }
        n && (u = u || []).push("style", n);
        var p = u;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (ea = function (e, t, n, r) {
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
  function Cf(e, t, n) {
    var r = t.pendingProps;
    switch ((_u(t), t.tag)) {
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
        return (Re(t.type) && Yr(), Ce(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Pn(),
          Z(Te),
          Z(Se),
          Uu(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (qr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), rt !== null && (mi(rt), (rt = null)))),
          ri(e, t),
          Ce(t),
          null
        );
      case 5:
        Iu(t);
        var l = en(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (bs(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Ce(t), null);
          }
          if (((e = en(mt.current)), qr(t))) {
            ((r = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((r[pt] = t), (r[rr] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (J("cancel", r), J("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) J(er[l], r);
                break;
              case "source":
                J("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (J("error", r), J("load", r));
                break;
              case "details":
                J("toggle", r);
                break;
              case "input":
                (Oi(r, u), J("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!u.multiple }), J("invalid", r));
                break;
              case "textarea":
                (Ii(r, u), J("invalid", r));
            }
            (Fl(n, u), (l = null));
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 && $r(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (u.suppressHydrationWarning !== !0 && $r(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : R.hasOwnProperty(i) && o != null && i === "onScroll" && J("scroll", r);
              }
            switch (n) {
              case "input":
                (kr(r), Di(r, u, !0));
                break;
              case "textarea":
                (kr(r), Ui(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Qr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ai(n)),
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
              (e[pt] = t),
              (e[rr] = r),
              qs(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Ul(n, r)), n)) {
                case "dialog":
                  (J("cancel", e), J("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (J("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < er.length; l++) J(er[l], e);
                  l = r;
                  break;
                case "source":
                  (J("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (J("error", e), J("load", e), (l = r));
                  break;
                case "details":
                  (J("toggle", e), (l = r));
                  break;
                case "input":
                  (Oi(e, r), (l = Rl(e, r)), J("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = N({}, r, { value: void 0 })),
                    J("invalid", e));
                  break;
                case "textarea":
                  (Ii(e, r), (l = Dl(e, r)), J("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Fl(n, l), (o = l));
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? Bi(e, s)
                    : u === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Vi(e, s))
                      : u === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Dn(e, s)
                          : typeof s == "number" && Dn(e, "" + s)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (R.hasOwnProperty(u)
                            ? s != null && u === "onScroll" && J("scroll", e)
                            : s != null && qe(e, u, s, i));
                }
              switch (n) {
                case "input":
                  (kr(e), Di(e, r, !1));
                  break;
                case "textarea":
                  (kr(e), Ui(e));
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
        return (Ce(t), null);
      case 6:
        if (e && t.stateNode != null) ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = en(sr.current)), en(mt.current), qr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (u = r.nodeValue !== n) && ((e = Ve), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $r(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[pt] = t),
              (t.stateNode = r));
        }
        return (Ce(t), null);
      case 13:
        if (
          (Z(re),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && He !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (rs(), En(), (t.flags |= 98560), (u = !1));
          else if (((u = qr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(m(317));
              u[pt] = t;
            } else (En(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ce(t), (u = !1));
          } else (rt !== null && (mi(rt), (rt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (re.current & 1) !== 0 ? pe === 0 && (pe = 3) : yi())),
            t.updateQueue !== null && (t.flags |= 4),
            Ce(t),
            null);
      case 4:
        return (Pn(), ri(e, t), e === null && tr(t.stateNode.containerInfo), Ce(t), null);
      case 10:
        return (Tu(t.type._context), Ce(t), null);
      case 17:
        return (Re(t.type) && Yr(), Ce(t), null);
      case 19:
        if ((Z(re), (u = t.memoizedState), u === null)) return (Ce(t), null);
        if (((r = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) pr(u, !1);
          else {
            if (pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((i = ll(e)), i !== null)) {
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
              se() > Tn &&
              ((t.flags |= 128), (r = !0), pr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ll(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(u, !0),
                u.tail === null && u.tailMode === "hidden" && !i.alternate && !te)
              )
                return (Ce(t), null);
            } else
              2 * se() - u.renderingStartTime > Tn &&
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
            (u.renderingStartTime = se()),
            (t.sibling = null),
            (n = re.current),
            G(re, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ce(t), null);
      case 22:
      case 23:
        return (
          vi(),
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
  function _f(e, t) {
    switch ((_u(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && Yr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pn(),
          Z(Te),
          Z(Se),
          Uu(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Iu(t), null);
      case 13:
        if ((Z(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          En();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Z(re), null);
      case 4:
        return (Pn(), null);
      case 10:
        return (Tu(t.type._context), null);
      case 22:
      case 23:
        return (vi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pl = !1,
    _e = !1,
    Nf = typeof WeakSet == "function" ? WeakSet : Set,
    _ = null;
  function zn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          oe(e, t, r);
        }
      else n.current = null;
  }
  function li(e, t, n) {
    try {
      n();
    } catch (r) {
      oe(e, t, r);
    }
  }
  var ta = !1;
  function Pf(e, t) {
    if (((vu = Or), (e = Oo()), su(e))) {
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
              w = e,
              v = null;
            t: for (;;) {
              for (
                var C;
                w !== n || (l !== 0 && w.nodeType !== 3) || (o = i + l),
                  w !== u || (r !== 0 && w.nodeType !== 3) || (s = i + r),
                  w.nodeType === 3 && (i += w.nodeValue.length),
                  (C = w.firstChild) !== null;
              )
                ((v = w), (w = C));
              for (;;) {
                if (w === e) break t;
                if (
                  (v === n && ++p === l && (o = i),
                  v === u && ++g === r && (s = i),
                  (C = w.nextSibling) !== null)
                )
                  break;
                ((w = v), (v = w.parentNode));
              }
              w = C;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (yu = { focusedElem: e, selectionRange: n }, Or = !1, _ = t; _ !== null;)
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
                      ae = P.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? j : lt(t.type, j),
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
                  throw Error(m(163));
              }
          } catch (k) {
            oe(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (_ = e));
            break;
          }
          _ = t.return;
        }
    return ((P = ta), (ta = !1), P);
  }
  function mr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          ((l.destroy = void 0), u !== void 0 && li(t, n, u));
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
  function ui(e) {
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
        t !== null && (delete t[pt], delete t[rr], delete t[ku], delete t[af], delete t[cf])),
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
  function ii(e, t, n) {
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
      for (ii(e, t, n), e = e.sibling; e !== null;) (ii(e, t, n), (e = e.sibling));
  }
  function oi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (oi(e, t, n), e = e.sibling; e !== null;) (oi(e, t, n), (e = e.sibling));
  }
  var we = null,
    ut = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null;) (ua(e, t, n), (n = n.sibling));
  }
  function ua(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Pr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        _e || zn(n, t);
      case 6:
        var r = we,
          l = ut;
        ((we = null),
          Vt(e, t, n),
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
          Vt(e, t, n),
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
              i !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && li(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!_e && (zn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (o) {
            oe(n, t, o);
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
  function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Nf()),
        t.forEach(function (r) {
          var l = If.bind(null, e, r);
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
          (ua(u, i, l), (we = null), (ut = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          oe(l, t, p);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (oa(t, e), (t = t.sibling));
  }
  function oa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((it(t, e), vt(e), r & 4)) {
          try {
            (mr(3, e, e.return), ml(3, e));
          } catch (j) {
            oe(e, e.return, j);
          }
          try {
            mr(5, e, e.return);
          } catch (j) {
            oe(e, e.return, j);
          }
        }
        break;
      case 1:
        (it(t, e), vt(e), r & 512 && n !== null && zn(n, n.return));
        break;
      case 5:
        if ((it(t, e), vt(e), r & 512 && n !== null && zn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Dn(l, "");
          } catch (j) {
            oe(e, e.return, j);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = n !== null ? n.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === "input" && u.type === "radio" && u.name != null && Mi(l, u), Ul(o, i));
              var p = Ul(o, u);
              for (i = 0; i < s.length; i += 2) {
                var g = s[i],
                  w = s[i + 1];
                g === "style"
                  ? Bi(l, w)
                  : g === "dangerouslySetInnerHTML"
                    ? Vi(l, w)
                    : g === "children"
                      ? Dn(l, w)
                      : qe(l, g, w, p);
              }
              switch (o) {
                case "input":
                  Ol(l, u);
                  break;
                case "textarea":
                  Fi(l, u);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var C = u.value;
                  C != null
                    ? sn(l, !!u.multiple, C, !1)
                    : v !== !!u.multiple &&
                      (u.defaultValue != null
                        ? sn(l, !!u.multiple, u.defaultValue, !0)
                        : sn(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[rr] = u;
            } catch (j) {
              oe(e, e.return, j);
            }
        }
        break;
      case 6:
        if ((it(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (j) {
            oe(e, e.return, j);
          }
        }
        break;
      case 3:
        if ((it(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Kn(t.containerInfo);
          } catch (j) {
            oe(e, e.return, j);
          }
        break;
      case 4:
        (it(t, e), vt(e));
        break;
      case 13:
        (it(t, e),
          vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (ci = se())),
          r & 4 && ia(e));
        break;
      case 22:
        if (
          ((g = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((_e = (p = _e) || g), it(t, e), (_e = p)) : it(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !g && (e.mode & 1) !== 0)
          )
            for (_ = e, g = e.child; g !== null;) {
              for (w = _ = g; _ !== null;) {
                switch (((v = _), (C = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, v, v.return);
                    break;
                  case 1:
                    zn(v, v.return);
                    var P = v.stateNode;
                    if (typeof P.componentWillUnmount == "function") {
                      ((r = v), (n = v.return));
                      try {
                        ((t = r),
                          (P.props = t.memoizedProps),
                          (P.state = t.memoizedState),
                          P.componentWillUnmount());
                      } catch (j) {
                        oe(r, n, j);
                      }
                    }
                    break;
                  case 5:
                    zn(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      ca(w);
                      continue;
                    }
                }
                C !== null ? ((C.return = v), (_ = C)) : ca(w);
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
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((o = w.stateNode),
                        (s = w.memoizedProps.style),
                        (i = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (o.style.display = Hi("display", i))));
                } catch (j) {
                  oe(e, e.return, j);
                }
              }
            } else if (w.tag === 6) {
              if (g === null)
                try {
                  w.stateNode.nodeValue = p ? "" : w.memoizedProps;
                } catch (j) {
                  oe(e, e.return, j);
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
        (it(t, e), vt(e), r & 4 && ia(e));
        break;
      case 21:
        break;
      default:
        (it(t, e), vt(e));
    }
  }
  function vt(e) {
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
            var u = la(e);
            oi(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = la(e);
            ii(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        oe(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function jf(e, t, n) {
    ((_ = e), sa(e));
  }
  function sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null;) {
      var l = _,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || pl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || _e;
          o = pl;
          var p = _e;
          if (((pl = i), (_e = s) && !p))
            for (_ = l; _ !== null;)
              ((i = _),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? fa(l)
                  : s !== null
                    ? ((s.return = i), (_ = s))
                    : fa(l));
          for (; u !== null;) ((_ = u), sa(u), (u = u.sibling));
          ((_ = l), (pl = o), (_e = p));
        }
        aa(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = l), (_ = u)) : aa(e);
    }
  }
  function aa(e) {
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
                      t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = t.updateQueue;
                u !== null && cs(t, u, r);
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
                  cs(t, i, n);
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
                throw Error(m(163));
            }
          _e || (t.flags & 512 && ui(t));
        } catch (v) {
          oe(t, t.return, v);
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
  function ca(e) {
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
  function fa(e) {
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
              oe(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                oe(t, l, s);
              }
            }
            var u = t.return;
            try {
              ui(t);
            } catch (s) {
              oe(t, u, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ui(t);
            } catch (s) {
              oe(t, i, s);
            }
        }
      } catch (s) {
        oe(t, t.return, s);
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
  var zf = Math.ceil,
    hl = ke.ReactCurrentDispatcher,
    si = ke.ReactCurrentOwner,
    Je = ke.ReactCurrentBatchConfig,
    V = 0,
    ve = null,
    fe = null,
    xe = 0,
    Be = 0,
    Ln = Dt(0),
    pe = 0,
    hr = null,
    nn = 0,
    vl = 0,
    ai = 0,
    vr = null,
    Me = null,
    ci = 0,
    Tn = 1 / 0,
    Nt = null,
    yl = !1,
    fi = null,
    Ht = null,
    gl = !1,
    Bt = null,
    wl = 0,
    yr = 0,
    di = null,
    xl = -1,
    kl = 0;
  function je() {
    return (V & 6) !== 0 ? se() : xl !== -1 ? xl : (xl = se());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (V & 2) !== 0 && xe !== 0
        ? xe & -xe
        : df.transition !== null
          ? (kl === 0 && (kl = ro()), kl)
          : ((e = K), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : po(e.type))), e);
  }
  function ot(e, t, n, r) {
    if (50 < yr) throw ((yr = 0), (di = null), Error(m(185)));
    (Hn(e, n, r),
      ((V & 2) === 0 || e !== ve) &&
        (e === ve && ((V & 2) === 0 && (vl |= n), pe === 4 && $t(e, xe)),
        De(e, r),
        n === 1 && V === 0 && (t.mode & 1) === 0 && ((Tn = se() + 500), Gr && Ft())));
  }
  function De(e, t) {
    var n = e.callbackNode;
    fc(e, t);
    var r = Lr(e, e === ve ? xe : 0);
    if (r === 0) (n !== null && eo(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && eo(n), t === 1))
        (e.tag === 0 ? ff(pa.bind(null, e)) : qo(pa.bind(null, e)),
          of(function () {
            (V & 6) === 0 && Ft();
          }),
          (n = null));
      else {
        switch (lo(r)) {
          case 1:
            n = Ql;
            break;
          case 4:
            n = to;
            break;
          case 16:
            n = Nr;
            break;
          case 536870912:
            n = no;
            break;
          default:
            n = Nr;
        }
        n = ka(n, da.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function da(e, t) {
    if (((xl = -1), (kl = 0), (V & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n) return null;
    var r = Lr(e, e === ve ? xe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = V;
      V |= 2;
      var u = ha();
      (ve !== e || xe !== t) && ((Nt = null), (Tn = se() + 500), ln(e, t));
      do
        try {
          Rf();
          break;
        } catch (o) {
          ma(e, o);
        }
      while (!0);
      (Lu(), (hl.current = u), (V = l), fe !== null ? (t = 0) : ((ve = null), (xe = 0), (t = pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (t = pi(e, l)))), t === 1))
        throw ((n = hr), ln(e, 0), $t(e, r), De(e, se()), n);
      if (t === 6) $t(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Lf(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((u = Kl(e)), u !== 0 && ((r = u), (t = pi(e, u)))),
            t === 1))
        )
          throw ((n = hr), ln(e, 0), $t(e, r), De(e, se()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            un(e, Me, Nt);
            break;
          case 3:
            if (($t(e, r), (r & 130023424) === r && ((t = ci + 500 - se()), 10 < t))) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (je(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = wu(un.bind(null, e, Me, Nt), t);
              break;
            }
            un(e, Me, Nt);
            break;
          case 4:
            if (($t(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var i = 31 - tt(r);
              ((u = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~u));
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
                            : 1960 * zf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = wu(un.bind(null, e, Me, Nt), r);
              break;
            }
            un(e, Me, Nt);
            break;
          case 5:
            un(e, Me, Nt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (De(e, se()), e.callbackNode === n ? da.bind(null, e) : null);
  }
  function pi(e, t) {
    var n = vr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = Me), (Me = n), t !== null && mi(t)),
      e
    );
  }
  function mi(e) {
    Me === null ? (Me = e) : Me.push.apply(Me, e);
  }
  function Lf(e) {
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
  function $t(e, t) {
    for (
      t &= ~ai, t &= ~vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - tt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function pa(e) {
    if ((V & 6) !== 0) throw Error(m(327));
    Rn();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return (De(e, se()), null);
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Kl(e);
      r !== 0 && ((t = r), (n = pi(e, r)));
    }
    if (n === 1) throw ((n = hr), ln(e, 0), $t(e, t), De(e, se()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, Me, Nt),
      De(e, se()),
      null
    );
  }
  function hi(e, t) {
    var n = V;
    V |= 1;
    try {
      return e(t);
    } finally {
      ((V = n), V === 0 && ((Tn = se() + 500), Gr && Ft()));
    }
  }
  function rn(e) {
    Bt !== null && Bt.tag === 0 && (V & 6) === 0 && Rn();
    var t = V;
    V |= 1;
    var n = Je.transition,
      r = K;
    try {
      if (((Je.transition = null), (K = 1), e)) return e();
    } finally {
      ((K = r), (Je.transition = n), (V = t), (V & 6) === 0 && Ft());
    }
  }
  function vi() {
    ((Be = Ln.current), Z(Ln));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), uf(n)), fe !== null))
      for (n = fe.return; n !== null;) {
        var r = n;
        switch ((_u(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Yr());
            break;
          case 3:
            (Pn(), Z(Te), Z(Se), Uu());
            break;
          case 5:
            Iu(r);
            break;
          case 4:
            Pn();
            break;
          case 13:
            Z(re);
            break;
          case 19:
            Z(re);
            break;
          case 10:
            Tu(r.type._context);
            break;
          case 22:
          case 23:
            vi();
        }
        n = n.return;
      }
    if (
      ((ve = e),
      (fe = e = Qt(e.current, null)),
      (xe = Be = t),
      (pe = 0),
      (hr = null),
      (ai = vl = nn = 0),
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
  function ma(e, t) {
    do {
      var n = fe;
      try {
        if ((Lu(), (ul.current = al), il)) {
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
          (si.current = null),
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
            ((t = xe),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
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
            var C = As(i);
            if (C !== null) {
              ((C.flags &= -257), Vs(C, i, o, u, t), C.mode & 1 && Us(u, p, t), (t = C), (s = p));
              var P = t.updateQueue;
              if (P === null) {
                var j = new Set();
                (j.add(s), (t.updateQueue = j));
              } else P.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Us(u, p, t), yi());
                break e;
              }
              s = Error(m(426));
            }
          } else if (te && o.mode & 1) {
            var ae = As(i);
            if (ae !== null) {
              ((ae.flags & 65536) === 0 && (ae.flags |= 256), Vs(ae, i, o, u, t), ju(jn(s, o)));
              break e;
            }
          }
          ((u = s = jn(s, o)),
            pe !== 4 && (pe = 2),
            vr === null ? (vr = [u]) : vr.push(u),
            (u = i));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var f = Is(u, s, t);
                as(u, f);
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
                      (Ht === null || !Ht.has(d))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var k = Fs(u, o, t);
                  as(u, k);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ya(n);
      } catch (z) {
        ((t = z), fe === n && n !== null && (fe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ha() {
    var e = hl.current;
    return ((hl.current = al), e === null ? al : e);
  }
  function yi() {
    ((pe === 0 || pe === 3 || pe === 2) && (pe = 4),
      ve === null || ((nn & 268435455) === 0 && (vl & 268435455) === 0) || $t(ve, xe));
  }
  function Sl(e, t) {
    var n = V;
    V |= 2;
    var r = ha();
    (ve !== e || xe !== t) && ((Nt = null), ln(e, t));
    do
      try {
        Tf();
        break;
      } catch (l) {
        ma(e, l);
      }
    while (!0);
    if ((Lu(), (V = n), (hl.current = r), fe !== null)) throw Error(m(261));
    return ((ve = null), (xe = 0), pe);
  }
  function Tf() {
    for (; fe !== null;) va(fe);
  }
  function Rf() {
    for (; fe !== null && !nc();) va(fe);
  }
  function va(e) {
    var t = xa(e.alternate, e, Be);
    ((e.memoizedProps = e.pendingProps), t === null ? ya(e) : (fe = t), (si.current = null));
  }
  function ya(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Cf(n, t, Be)), n !== null)) {
          fe = n;
          return;
        }
      } else {
        if (((n = _f(n, t)), n !== null)) {
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
      l = Je.transition;
    try {
      ((Je.transition = null), (K = 1), Of(e, t, n, r));
    } finally {
      ((Je.transition = l), (K = r));
    }
    return null;
  }
  function Of(e, t, n, r) {
    do Rn();
    while (Bt !== null);
    if ((V & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (dc(e, u),
      e === ve && ((fe = ve = null), (xe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        gl ||
        ((gl = !0),
        ka(Nr, function () {
          return (Rn(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = Je.transition), (Je.transition = null));
      var i = K;
      K = 1;
      var o = V;
      ((V |= 4),
        (si.current = null),
        Pf(e, n),
        oa(n, e),
        qc(yu),
        (Or = !!vu),
        (yu = vu = null),
        (e.current = n),
        jf(n),
        rc(),
        (V = o),
        (K = i),
        (Je.transition = u));
    } else e.current = n;
    if (
      (gl && ((gl = !1), (Bt = e), (wl = l)),
      (u = e.pendingLanes),
      u === 0 && (Ht = null),
      ic(n.stateNode),
      De(e, se()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (yl) throw ((yl = !1), (e = fi), (fi = null), e);
    return (
      (wl & 1) !== 0 && e.tag !== 0 && Rn(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === di ? yr++ : ((yr = 0), (di = e))) : (yr = 0),
      Ft(),
      null
    );
  }
  function Rn() {
    if (Bt !== null) {
      var e = lo(wl),
        t = Je.transition,
        n = K;
      try {
        if (((Je.transition = null), (K = 16 > e ? 16 : e), Bt === null)) var r = !1;
        else {
          if (((e = Bt), (Bt = null), (wl = 0), (V & 6) !== 0)) throw Error(m(331));
          var l = V;
          for (V |= 4, _ = e.current; _ !== null;) {
            var u = _,
              i = u.child;
            if ((_.flags & 16) !== 0) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (_ = p; _ !== null;) {
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
                          C = g.return;
                        if ((na(g), g === p)) {
                          _ = null;
                          break;
                        }
                        if (v !== null) {
                          ((v.return = C), (_ = v));
                          break;
                        }
                        _ = C;
                      }
                  }
                }
                var P = u.alternate;
                if (P !== null) {
                  var j = P.child;
                  if (j !== null) {
                    P.child = null;
                    do {
                      var ae = j.sibling;
                      ((j.sibling = null), (j = ae));
                    } while (j !== null);
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
                        ml(9, o);
                    }
                  } catch (z) {
                    oe(o, o.return, z);
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
          if (((V = l), Ft(), dt && typeof dt.onPostCommitFiberRoot == "function"))
            try {
              dt.onPostCommitFiberRoot(Pr, e);
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
  function ga(e, t, n) {
    ((t = jn(n, t)),
      (t = Is(e, t, 1)),
      (e = At(e, t, 1)),
      (t = je()),
      e !== null && (Hn(e, 1, t), De(e, t)));
  }
  function oe(e, t, n) {
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
            (typeof r.componentDidCatch == "function" && (Ht === null || !Ht.has(r)))
          ) {
            ((e = jn(n, e)),
              (e = Fs(t, e, 1)),
              (t = At(t, e, 1)),
              (e = je()),
              t !== null && (Hn(t, 1, e), De(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Mf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = je()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (xe & n) === n &&
        (pe === 4 || (pe === 3 && (xe & 130023424) === xe && 500 > se() - ci)
          ? ln(e, 0)
          : (ai |= n)),
      De(e, t));
  }
  function wa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = je();
    ((e = Et(e, t)), e !== null && (Hn(e, t, n), De(e, n)));
  }
  function Df(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), wa(e, n));
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
        throw Error(m(314));
    }
    (r !== null && r.delete(t), wa(e, n));
  }
  var xa;
  xa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Te.current) Oe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Oe = !1), Ef(e, t, n));
        Oe = (e.flags & 131072) !== 0;
      }
    else ((Oe = !1), te && (t.flags & 1048576) !== 0 && bo(t, Zr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (dl(e, t), (e = t.pendingProps));
        var l = xn(t, Se.current);
        (Nn(t, n), (l = Hu(null, t, r, e, l, n)));
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
              Re(r) ? ((u = !0), Xr(t)) : (u = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Mu(t),
              (l.updater = cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Xu(t, r, e, n),
              (t = qu(null, t, r, !0, u, n)))
            : ((t.tag = 0), te && u && Cu(t), Pe(null, t, l, n), (t = t.child)),
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
            (l = t.tag = Uf(r)),
            (e = lt(r, e)),
            l)
          ) {
            case 0:
              t = Zu(null, t, r, e, n);
              break e;
            case 1:
              t = Ks(null, t, r, e, n);
              break e;
            case 11:
              t = Hs(null, t, r, e, n);
              break e;
            case 14:
              t = Bs(null, t, r, lt(r.type, e), n);
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
          Ks(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ys(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            ss(e, t),
            rl(t, r, null, n));
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
              ((l = jn(Error(m(423)), t)), (t = Xs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = jn(Error(m(424)), t)), (t = Xs(e, t, r, n, l)));
              break e;
            } else
              for (
                He = Mt(t.stateNode.containerInfo.firstChild),
                  Ve = t,
                  te = !0,
                  rt = null,
                  n = is(t, null, r, n),
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
          fs(t),
          e === null && Pu(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          gu(r, l) ? (i = null) : u !== null && gu(r, u) && (t.flags |= 32),
          Qs(e, t),
          Pe(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Pu(t), null);
      case 13:
        return Gs(e, t, n);
      case 4:
        return (
          Du(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : Pe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Hs(e, t, r, l, n)
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
            G(el, r._currentValue),
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
                        ((s = Ct(-1, n & -n)), (s.tag = 2));
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
          Nn(t, n),
          (l = Xe(l)),
          (r = r(l)),
          (t.flags |= 1),
          Pe(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = lt(r, t.pendingProps)), (l = lt(r.type, l)), Bs(e, t, r, l, n));
      case 15:
        return Ws(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          dl(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), Xr(t)) : (e = !1),
          Nn(t, n),
          Ms(t, r, l),
          Xu(t, r, l, n),
          qu(null, t, r, !0, e, n)
        );
      case 19:
        return Zs(e, t, n);
      case 22:
        return $s(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function ka(e, t) {
    return bi(e, t);
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
  function Ze(e, t, n, r) {
    return new Ff(e, t, n, r);
  }
  function gi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Uf(e) {
    if (typeof e == "function") return gi(e) ? 1 : 0;
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
        ? ((n = Ze(e.tag, t, e.key, e.mode)),
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
  function El(e, t, n, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == "function")) gi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case ze:
          return on(n.children, l, u, t);
        case Qe:
          ((i = 8), (l |= 8));
          break;
        case Pt:
          return ((e = Ze(12, n, t, l | 2)), (e.elementType = Pt), (e.lanes = u), e);
        case Fe:
          return ((e = Ze(13, n, t, l)), (e.elementType = Fe), (e.lanes = u), e);
        case et:
          return ((e = Ze(19, n, t, l)), (e.elementType = et), (e.lanes = u), e);
        case ie:
          return Cl(n, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gt:
                i = 10;
                break e;
              case Yt:
                i = 9;
                break e;
              case ct:
                i = 11;
                break e;
              case ft:
                i = 14;
                break e;
              case Le:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return ((t = Ze(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = u), t);
  }
  function on(e, t, n, r) {
    return ((e = Ze(7, e, r, t)), (e.lanes = n), e);
  }
  function Cl(e, t, n, r) {
    return (
      (e = Ze(22, e, r, t)),
      (e.elementType = ie),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function wi(e, t, n) {
    return ((e = Ze(6, e, null, t)), (e.lanes = n), e);
  }
  function xi(e, t, n) {
    return (
      (t = Ze(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Af(e, t, n, r, l) {
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
  function ki(e, t, n, r, l, u, i, o, s) {
    return (
      (e = new Af(e, t, n, o, s)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = Ze(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Mu(u),
      e
    );
  }
  function Vf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ne,
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
      if (Re(n)) return Jo(e, n, t);
    }
    return t;
  }
  function Ea(e, t, n, r, l, u, i, o, s) {
    return (
      (e = ki(n, r, !0, e, l, u, i, o, s)),
      (e.context = Sa(null)),
      (n = e.current),
      (r = je()),
      (l = Wt(n)),
      (u = Ct(r, l)),
      (u.callback = t ?? null),
      At(n, u, l),
      (e.current.lanes = l),
      Hn(e, l, r),
      De(e, r),
      e
    );
  }
  function _l(e, t, n, r) {
    var l = t.current,
      u = je(),
      i = Wt(l);
    return (
      (n = Sa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(u, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, i)),
      e !== null && (ot(e, l, i, u), nl(e, l, i)),
      i
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
  function Ca(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Si(e, t) {
    (Ca(e, t), (e = e.alternate) && Ca(e, t));
  }
  function Hf() {
    return null;
  }
  var _a =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ei(e) {
    this._internalRoot = e;
  }
  ((Pl.prototype.render = Ei.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      _l(e, t, null, null);
    }),
    (Pl.prototype.unmount = Ei.prototype.unmount =
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
      var t = oo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      (Tt.splice(n, 0, e), n === 0 && co(e));
    }
  };
  function Ci(e) {
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
  function Na() {}
  function Bf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = Nl(i);
          u.call(p);
        };
      }
      var i = Ea(t, r, e, 0, null, !1, !1, "", Na);
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
        var p = Nl(s);
        o.call(p);
      };
    }
    var s = ki(e, 0, !1, null, null, !1, !1, "", Na);
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
          var s = Nl(i);
          o.call(s);
        };
      }
      _l(t, i, e, l);
    } else i = Bf(n, t, e, l, r);
    return Nl(i);
  }
  ((uo = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), De(t, se()), (V & 6) === 0 && ((Tn = se() + 500), Ft()));
        }
        break;
      case 13:
        (rn(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = je();
            ot(r, e, 1, l);
          }
        }),
          Si(e, 1));
    }
  }),
    (Gl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = je();
          ot(t, e, 134217728, n);
        }
        Si(e, 134217728);
      }
    }),
    (io = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = Et(e, t);
        if (n !== null) {
          var r = je();
          ot(n, e, t, r);
        }
        Si(e, t);
      }
    }),
    (oo = function () {
      return K;
    }),
    (so = function (e, t) {
      var n = K;
      try {
        return ((K = e), t());
      } finally {
        K = n;
      }
    }),
    (Hl = function (e, t, n) {
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
                (Ri(r), Ol(r, l));
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
    (Ki = hi),
    (Yi = rn));
  var Wf = { usingClientEntryPoint: !1, Events: [lr, gn, Kr, $i, Qi, hi] },
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
        return ((e = Zi(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: gr.findFiberByHostInstance || Hf,
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
        ((Pr = Ll.inject($f)), (dt = Ll));
      } catch {}
  }
  return (
    (Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wf),
    (Ie.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ci(t)) throw Error(m(200));
      return Vf(e, t, null, n);
    }),
    (Ie.createRoot = function (e, t) {
      if (!Ci(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = _a;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ki(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new Ei(t)
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
      return ((e = Zi(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ie.flushSync = function (e) {
      return rn(e);
    }),
    (Ie.hydrate = function (e, t, n) {
      if (!jl(t)) throw Error(m(200));
      return zl(null, e, t, !0, n);
    }),
    (Ie.hydrateRoot = function (e, t, n) {
      if (!Ci(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        i = _a;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Ea(t, null, e, 1, n ?? null, l, !1, u, i)),
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
    (Ie.unstable_batchedUpdates = hi),
    (Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!jl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return zl(e, t, n, !1, r);
    }),
    (Ie.version = "18.3.1-next-f1338f8080-20240426"),
    Ie
  );
}
var Ma;
function qf() {
  if (Ma) return Pi.exports;
  Ma = 1;
  function x() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (S) {
        console.error(S);
      }
  }
  return (x(), (Pi.exports = Zf()), Pi.exports);
}
var Da;
function bf() {
  if (Da) return Tl;
  Da = 1;
  var x = qf();
  return ((Tl.createRoot = x.createRoot), (Tl.hydrateRoot = x.hydrateRoot), Tl);
}
var ed = bf();
function On(x) {
  const S = x.replace(/^\//, "").replace(/\/$/, "");
  return S ? `#/${S}` : "#/";
}
function Ti(x) {
  const S = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return S
    ? S.startsWith("/")
      ? { kind: "route", path: S.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: S }
    : null;
}
function Ua(x, S = "smooth") {
  if (typeof document > "u") return !1;
  const m = document.getElementById(x);
  return m ? (m.scrollIntoView({ behavior: S, block: "start" }), !0) : !1;
}
function Aa(x) {
  typeof window > "u" || (window.location.hash = On(x));
}
function td() {
  const x = Ti();
  return (x == null ? void 0 : x.kind) === "route" ? x.path : "";
}
function Va() {
  if (typeof window > "u") return;
  const x = Ti();
  (x == null ? void 0 : x.kind) === "section" && requestAnimationFrame(() => Ua(x.id, "auto"));
}
function nd(x, S) {
  if (typeof window > "u") return () => {};
  const m = () => {
    const A = Ti();
    if (!A) {
      x("");
      return;
    }
    if (A.kind === "route") {
      x(A.path);
      return;
    }
    (Ua(A.id, "smooth"), x(""));
  };
  return (
    m(),
    window.addEventListener("hashchange", m),
    () => window.removeEventListener("hashchange", m)
  );
}
function rd(x = "") {
  const [S, m] = st.useState(() => (typeof window < "u" ? td() : x));
  return (st.useEffect(() => nd(m), []), S || x);
}
function ld({ routes: x, defaultRoute: S = "", className: m }) {
  const A = rd(S);
  st.useEffect(() => {
    Va();
  }, []);
  const R = A in x ? A : S,
    U = x[R] ?? x[S];
  return h.jsx("div", { className: m, children: U });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ud = (x) => x.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ha = (...x) =>
    x
      .filter((S, m, A) => !!S && S.trim() !== "" && A.indexOf(S) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var id = {
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
 */ const od = st.forwardRef(
  (
    {
      color: x = "currentColor",
      size: S = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: A,
      className: R = "",
      children: U,
      iconNode: ue,
      ...ce
    },
    $,
  ) =>
    st.createElement(
      "svg",
      {
        ref: $,
        ...id,
        width: S,
        height: S,
        stroke: x,
        strokeWidth: A ? (Number(m) * 24) / Number(S) : m,
        className: Ha("lucide", R),
        ...ce,
      },
      [...ue.map(([ge, me]) => st.createElement(ge, me)), ...(Array.isArray(U) ? U : [U])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ba = (x, S) => {
  const m = st.forwardRef(({ className: A, ...R }, U) =>
    st.createElement(od, { ref: U, iconNode: S, className: Ha(`lucide-${ud(x)}`, A), ...R }),
  );
  return ((m.displayName = `${x}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sd = Ba("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ad = Ba("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  cd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
  Ia = "Velorah",
  Fa = [
    { label: "Home", route: "" },
    { label: "Studio", route: "studio" },
    { label: "About", route: "about" },
    { label: "Journal", route: "journal" },
    { label: "Reach Us", route: "reach-us" },
  ];
function Wa({ homeActive: x = !1 }) {
  const [S, m] = st.useState(!1),
    A = (R) => (U) => {
      (U.preventDefault(), Aa(R), m(!1));
    };
  return h.jsxs(h.Fragment, {
    children: [
      h.jsx("header", {
        className: "relative z-10 px-8 py-6",
        children: h.jsxs("div", {
          className: "mx-auto flex max-w-7xl items-center justify-between",
          children: [
            h.jsxs("a", {
              href: On(""),
              onClick: A(""),
              className: "font-display text-3xl tracking-tight text-white",
              children: [
                Ia,
                h.jsx("sup", { className: "text-xs font-normal leading-none", children: "®" }),
              ],
            }),
            h.jsx("nav", {
              className: "hidden items-center gap-10 md:flex",
              "aria-label": "Primary",
              children: Fa.map((R) => {
                const ue = R.route === "" ? x : !1;
                return h.jsx(
                  "a",
                  {
                    href: On(R.route),
                    onClick: A(R.route),
                    className: `text-sm text-white transition-opacity hover:opacity-80 ${ue ? "opacity-100" : "opacity-90"}`,
                    children: R.label,
                  },
                  R.route,
                );
              }),
            }),
            h.jsx("a", {
              href: On("reach-us"),
              onClick: A("reach-us"),
              className:
                "liquid-glass hidden rounded-full px-6 py-2.5 text-sm text-white transition hover:scale-[1.03] md:inline-flex",
              children: "Begin Journey",
            }),
            h.jsx("button", {
              type: "button",
              className:
                "liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden",
              onClick: () => m(!0),
              "aria-label": "Open menu",
              children: h.jsx(sd, { className: "h-5 w-5" }),
            }),
          ],
        }),
      }),
      S &&
        h.jsxs("div", {
          className: "fixed inset-0 z-50 md:hidden",
          children: [
            h.jsx("button", {
              type: "button",
              className: "absolute inset-0 bg-black/60",
              onClick: () => m(!1),
              "aria-label": "Close menu",
            }),
            h.jsxs("aside", {
              className:
                "absolute right-0 top-0 flex h-full w-[min(88vw,320px)] flex-col bg-black/95 px-6 py-6 shadow-xl backdrop-blur-md",
              children: [
                h.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    h.jsxs("span", {
                      className: "font-display text-2xl tracking-tight text-white",
                      children: [Ia, h.jsx("sup", { className: "text-xs", children: "®" })],
                    }),
                    h.jsx("button", {
                      type: "button",
                      onClick: () => m(!1),
                      "aria-label": "Close",
                      children: h.jsx(ad, { className: "h-5 w-5 text-white" }),
                    }),
                  ],
                }),
                h.jsx("nav", {
                  className: "mt-8 flex flex-col gap-4",
                  children: Fa.map((R) =>
                    h.jsx(
                      "a",
                      {
                        href: On(R.route),
                        onClick: A(R.route),
                        className: "text-base text-white/90 hover:opacity-80",
                        children: R.label,
                      },
                      R.route,
                    ),
                  ),
                }),
                h.jsx("a", {
                  href: On("reach-us"),
                  onClick: A("reach-us"),
                  className:
                    "liquid-glass mt-auto rounded-full px-6 py-3 text-center text-sm text-white transition hover:scale-[1.03]",
                  children: "Begin Journey",
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function xr({ eyebrow: x, title: S, children: m }) {
  return h.jsxs("div", {
    className: "min-h-screen bg-black text-white",
    children: [
      h.jsx(Wa, {}),
      h.jsxs("main", {
        className: "mx-auto max-w-3xl px-6 pb-24 pt-12 md:px-8",
        children: [
          h.jsx("p", {
            className: "text-xs font-medium uppercase tracking-[0.2em] text-white/50",
            children: x,
          }),
          h.jsx("h1", {
            className:
              "font-display mt-3 text-4xl font-normal leading-[1.05] tracking-[-1.5px] sm:text-5xl md:text-6xl",
            children: S,
          }),
          h.jsx("div", {
            className: "mt-10 space-y-6 text-base leading-relaxed text-white/65",
            children: m,
          }),
        ],
      }),
    ],
  });
}
function $a({ embedded: x = !1 }) {
  const S = h.jsxs(h.Fragment, {
    children: [
      h.jsx("p", {
        children:
          "Velorah exists for people who protect their attention like a scarce resource. We build software that respects silence, depth, and the rituals that make real work possible.",
      }),
      h.jsx("p", {
        children:
          "Our team blends editorial design, humane AI, and infrastructure that stays out of the way — so your best thinking stays in flow, not in notifications.",
      }),
    ],
  });
  return x
    ? h.jsx("section", {
        className: "border-t border-white/10 bg-black px-6 py-24 md:px-8",
        children: h.jsxs("div", {
          className: "mx-auto max-w-3xl",
          children: [
            h.jsx("p", {
              className: "text-xs font-medium uppercase tracking-[0.2em] text-white/50",
              children: "About",
            }),
            h.jsx("h2", {
              className: "font-display mt-3 text-4xl font-normal tracking-[-1.5px] text-white",
              children: "Why we build",
            }),
            h.jsx("div", {
              className: "mt-8 space-y-6 text-base leading-relaxed text-white/65",
              children: S,
            }),
          ],
        }),
      })
    : h.jsx(xr, { eyebrow: "About", title: "Why we build", children: S });
}
function fd() {
  return h.jsx("video", {
    className: "absolute inset-0 z-0 h-full w-full object-cover",
    src: cd,
    autoPlay: !0,
    loop: !0,
    muted: !0,
    playsInline: !0,
    "aria-hidden": !0,
  });
}
function dd() {
  return h.jsxs("section", {
    id: "home",
    className: "relative min-h-screen overflow-hidden bg-black",
    children: [
      h.jsx(fd, {}),
      h.jsx("div", {
        className:
          "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/20 to-black/70",
        "aria-hidden": !0,
      }),
      h.jsx(Wa, { homeActive: !0 }),
      h.jsxs("div", {
        className: "relative z-10 flex flex-col items-center px-6 pb-40 pt-32 text-center",
        children: [
          h.jsx("h1", {
            className:
              "animate-fade-rise font-display max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-white sm:text-7xl md:text-8xl",
            children: "Focus in a Distracted World",
          }),
          h.jsx("p", {
            className:
              "animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-white sm:text-lg",
            children:
              "We're designing tools for deep thinkers, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows.",
          }),
          h.jsx("button", {
            type: "button",
            onClick: () => Aa("reach-us"),
            className:
              "animate-fade-rise-delay-2 liquid-glass mt-12 rounded-full px-14 py-5 text-base text-white transition hover:scale-[1.03]",
            children: "Begin Journey",
          }),
        ],
      }),
    ],
  });
}
const pd = [
  {
    title: "Designing for depth, not dopamine",
    date: "Mar 2026",
    excerpt: "How we prototype calm defaults before shipping a single notification.",
  },
  {
    title: "The architecture of uninterrupted mornings",
    date: "Feb 2026",
    excerpt: "Rituals, tooling, and team norms that protect maker time on distributed teams.",
  },
  {
    title: "Liquid glass without the noise",
    date: "Jan 2026",
    excerpt: "A field guide to glassmorphism that reads premium on dark video heroes.",
  },
];
function Qa({ embedded: x = !1 }) {
  const S = h.jsx("ul", {
    className: "space-y-8",
    children: pd.map((m) =>
      h.jsxs(
        "li",
        {
          className: "border-b border-white/10 pb-8 last:border-0",
          children: [
            h.jsx("p", {
              className: "text-xs uppercase tracking-[0.2em] text-white/40",
              children: m.date,
            }),
            h.jsx("h3", { className: "font-display mt-2 text-2xl text-white", children: m.title }),
            h.jsx("p", {
              className: "mt-3 text-sm leading-relaxed text-white/60",
              children: m.excerpt,
            }),
          ],
        },
        m.title,
      ),
    ),
  });
  return x
    ? h.jsx("section", {
        className: "border-t border-white/10 bg-black px-6 py-24 md:px-8",
        children: h.jsxs("div", {
          className: "mx-auto max-w-3xl",
          children: [
            h.jsx("p", {
              className: "text-xs font-medium uppercase tracking-[0.2em] text-white/50",
              children: "Journal",
            }),
            h.jsx("h2", {
              className: "font-display mt-3 text-4xl font-normal tracking-[-1.5px] text-white",
              children: "Field notes",
            }),
            h.jsx("div", { className: "mt-10", children: S }),
          ],
        }),
      })
    : h.jsx(xr, { eyebrow: "Journal", title: "Field notes", children: S });
}
function Ka({ embedded: x = !1 }) {
  const S = h.jsxs(h.Fragment, {
    children: [
      h.jsx("p", {
        children:
          "Velorah collects only what is needed to deliver the product and improve the experience. We do not sell personal data. Contact hello@velorah.studio for data requests.",
      }),
      h.jsx("p", { className: "text-sm text-white/50", children: "Last updated March 2026." }),
    ],
  });
  return x
    ? h.jsx("section", {
        className: "border-t border-white/10 bg-black px-6 py-16 md:px-8",
        children: h.jsx("div", {
          className: "mx-auto max-w-3xl text-center text-xs text-white/40",
          children: h.jsxs("p", {
            children: [
              "© ",
              new Date().getFullYear(),
              " Velorah",
              h.jsx("sup", { className: "text-[8px]", children: "®" }),
              " — Privacy & Terms available on request.",
            ],
          }),
        }),
      })
    : h.jsx(xr, { eyebrow: "Legal", title: "Privacy", children: S });
}
function Ya({ embedded: x = !1 }) {
  const S = h.jsxs(h.Fragment, {
    children: [
      h.jsx("p", {
        children:
          "Tell us how your team protects focus today — we'll share early access to Velorah studio builds and co-design sessions for thoughtful product teams.",
      }),
      h.jsxs("form", {
        className: "mt-8 flex max-w-md flex-col gap-4",
        onSubmit: (m) => m.preventDefault(),
        children: [
          h.jsxs("label", {
            className: "block text-sm text-white/70",
            children: [
              "Email",
              h.jsx("input", {
                type: "email",
                placeholder: "you@studio.com",
                className:
                  "liquid-glass mt-2 w-full rounded-full border-0 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20",
              }),
            ],
          }),
          h.jsx("button", {
            type: "submit",
            className:
              "liquid-glass w-fit rounded-full px-8 py-3 text-sm text-white transition hover:scale-[1.03]",
            children: "Begin Journey",
          }),
        ],
      }),
    ],
  });
  return x
    ? h.jsx("section", {
        className: "border-t border-white/10 bg-black px-6 py-24 md:px-8",
        children: h.jsxs("div", {
          className: "mx-auto max-w-3xl",
          children: [
            h.jsx("p", {
              className: "text-xs font-medium uppercase tracking-[0.2em] text-white/50",
              children: "Reach Us",
            }),
            h.jsx("h2", {
              className: "font-display mt-3 text-4xl font-normal tracking-[-1.5px] text-white",
              children: "Start the conversation",
            }),
            h.jsx("div", { className: "mt-8 text-white/65", children: S }),
          ],
        }),
      })
    : h.jsx(xr, { eyebrow: "Reach Us", title: "Start the conversation", children: S });
}
function Xa({ embedded: x = !1 }) {
  const S = h.jsxs(h.Fragment, {
    children: [
      h.jsx("p", {
        children:
          "Velorah Studio is where focus-first product design meets calm infrastructure — glass surfaces, deliberate motion, and typography tuned for uninterrupted thought.",
      }),
      h.jsxs("ul", {
        className: "list-disc space-y-2 pl-5",
        children: [
          h.jsx("li", { children: "Full-screen cinematic heroes with looping CloudFront video" }),
          h.jsx("li", { children: "Instrument Serif headlines with Inter body rhythm" }),
          h.jsx("li", {
            children: "Liquid-glass CTAs and dark-field layouts for deep-work brands",
          }),
        ],
      }),
    ],
  });
  return x
    ? h.jsx("section", {
        className: "border-t border-white/10 bg-black px-6 py-24 md:px-8",
        children: h.jsxs("div", {
          className: "mx-auto max-w-3xl",
          children: [
            h.jsx("p", {
              className: "text-xs font-medium uppercase tracking-[0.2em] text-white/50",
              children: "Studio",
            }),
            h.jsx("h2", {
              className: "font-display mt-3 text-4xl font-normal tracking-[-1.5px] text-white",
              children: "The atelier",
            }),
            h.jsx("div", {
              className: "mt-8 space-y-6 text-base leading-relaxed text-white/65",
              children: S,
            }),
          ],
        }),
      })
    : h.jsx(xr, { eyebrow: "Studio", title: "The atelier", children: S });
}
function md() {
  return h.jsxs(h.Fragment, {
    children: [
      h.jsx(dd, {}),
      h.jsx("div", {
        id: "studio",
        className: "scroll-mt-8",
        children: h.jsx(Xa, { embedded: !0 }),
      }),
      h.jsx("div", {
        id: "about",
        className: "scroll-mt-8",
        children: h.jsx($a, { embedded: !0 }),
      }),
      h.jsx("div", {
        id: "journal",
        className: "scroll-mt-8",
        children: h.jsx(Qa, { embedded: !0 }),
      }),
      h.jsx("div", {
        id: "reach-us",
        className: "scroll-mt-8",
        children: h.jsx(Ya, { embedded: !0 }),
      }),
      h.jsx("div", {
        id: "privacy",
        className: "scroll-mt-8",
        children: h.jsx(Ka, { embedded: !0 }),
      }),
    ],
  });
}
function hd() {
  return (
    st.useEffect(() => {
      Va();
    }, []),
    h.jsx("div", {
      className: "min-h-screen overflow-hidden bg-black text-white",
      children: h.jsx(ld, {
        routes: {
          "": h.jsx(md, {}),
          studio: h.jsx(Xa, {}),
          about: h.jsx($a, {}),
          journal: h.jsx(Qa, {}),
          "reach-us": h.jsx(Ya, {}),
          privacy: h.jsx(Ka, {}),
        },
      }),
    })
  );
}
ed.createRoot(document.getElementById("root")).render(
  h.jsx(st.StrictMode, { children: h.jsx(hd, {}) }),
);
