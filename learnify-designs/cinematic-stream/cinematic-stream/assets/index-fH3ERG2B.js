(function () {
  const E = document.createElement("link").relList;
  if (E && E.supports && E.supports("modulepreload")) return;
  for (const j of document.querySelectorAll('link[rel="modulepreload"]')) M(j);
  new MutationObserver((j) => {
    for (const I of j)
      if (I.type === "childList")
        for (const ne of I.addedNodes) ne.tagName === "LINK" && ne.rel === "modulepreload" && M(ne);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(j) {
    const I = {};
    return (
      j.integrity && (I.integrity = j.integrity),
      j.referrerPolicy && (I.referrerPolicy = j.referrerPolicy),
      j.crossOrigin === "use-credentials"
        ? (I.credentials = "include")
        : j.crossOrigin === "anonymous"
          ? (I.credentials = "omit")
          : (I.credentials = "same-origin"),
      I
    );
  }
  function M(j) {
    if (j.ep) return;
    j.ep = !0;
    const I = m(j);
    fetch(j.href, I);
  }
})();
var Ci = { exports: {} },
  wr = {},
  _i = { exports: {} },
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
function Vf() {
  if (za) return U;
  za = 1;
  var h = Symbol.for("react.element"),
    E = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    M = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    I = Symbol.for("react.provider"),
    ne = Symbol.for("react.context"),
    ie = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    A = Symbol.for("react.memo"),
    re = Symbol.for("react.lazy"),
    K = Symbol.iterator;
  function X(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (K && c[K]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var ke = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ve = Object.assign,
    G = {};
  function Y(c, y, F) {
    ((this.props = c), (this.context = y), (this.refs = G), (this.updater = F || ke));
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
  function gt() {}
  gt.prototype = Y.prototype;
  function at(c, y, F) {
    ((this.props = c), (this.context = y), (this.refs = G), (this.updater = F || ke));
  }
  var be = (at.prototype = new gt());
  ((be.constructor = at), ve(be, Y.prototype), (be.isPureReactComponent = !0));
  var Ee = Array.isArray,
    et = Object.prototype.hasOwnProperty,
    ze = { current: null },
    je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ke(c, y, F) {
    var V,
      B = {},
      W = null,
      J = null;
    if (y != null)
      for (V in (y.ref !== void 0 && (J = y.ref), y.key !== void 0 && (W = "" + y.key), y))
        et.call(y, V) && !je.hasOwnProperty(V) && (B[V] = y[V]);
    var Z = arguments.length - 2;
    if (Z === 1) B.children = F;
    else if (1 < Z) {
      for (var le = Array(Z), $e = 0; $e < Z; $e++) le[$e] = arguments[$e + 2];
      B.children = le;
    }
    if (c && c.defaultProps) for (V in ((Z = c.defaultProps), Z)) B[V] === void 0 && (B[V] = Z[V]);
    return { $$typeof: h, type: c, key: W, ref: J, props: B, _owner: ze.current };
  }
  function zt(c, y) {
    return { $$typeof: h, type: c.type, key: y, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function wt(c) {
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
  function Ve(c, y) {
    return typeof c == "object" && c !== null && c.key != null ? Yt("" + c.key) : y.toString(36);
  }
  function tt(c, y, F, V, B) {
    var W = typeof c;
    (W === "undefined" || W === "boolean") && (c = null);
    var J = !1;
    if (c === null) J = !0;
    else
      switch (W) {
        case "string":
        case "number":
          J = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case h:
            case E:
              J = !0;
          }
      }
    if (J)
      return (
        (J = c),
        (B = B(J)),
        (c = V === "" ? "." + Ve(J, 0) : V),
        Ee(B)
          ? ((F = ""),
            c != null && (F = c.replace(ct, "$&/") + "/"),
            tt(B, y, F, "", function ($e) {
              return $e;
            }))
          : B != null &&
            (wt(B) &&
              (B = zt(
                B,
                F +
                  (!B.key || (J && J.key === B.key) ? "" : ("" + B.key).replace(ct, "$&/") + "/") +
                  c,
              )),
            y.push(B)),
        1
      );
    if (((J = 0), (V = V === "" ? "." : V + ":"), Ee(c)))
      for (var Z = 0; Z < c.length; Z++) {
        W = c[Z];
        var le = V + Ve(W, Z);
        J += tt(W, y, F, le, B);
      }
    else if (((le = X(c)), typeof le == "function"))
      for (c = le.call(c), Z = 0; !(W = c.next()).done;)
        ((W = W.value), (le = V + Ve(W, Z++)), (J += tt(W, y, F, le, B)));
    else if (W === "object")
      throw (
        (y = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return J;
  }
  function ft(c, y, F) {
    if (c == null) return c;
    var V = [],
      B = 0;
    return (
      tt(c, V, "", "", function (W) {
        return y.call(F, W, B++);
      }),
      V
    );
  }
  function Me(c) {
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
  var ae = { current: null },
    S = { transition: null },
    O = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: S, ReactCurrentOwner: ze };
  function _() {
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
        if (!wt(c))
          throw Error("React.Children.only expected to receive a single React element child.");
        return c;
      },
    }),
    (U.Component = Y),
    (U.Fragment = m),
    (U.Profiler = j),
    (U.PureComponent = at),
    (U.StrictMode = M),
    (U.Suspense = $),
    (U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
    (U.act = _),
    (U.cloneElement = function (c, y, F) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var V = ve({}, c.props),
        B = c.key,
        W = c.ref,
        J = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((W = y.ref), (J = ze.current)),
          y.key !== void 0 && (B = "" + y.key),
          c.type && c.type.defaultProps)
        )
          var Z = c.type.defaultProps;
        for (le in y)
          et.call(y, le) &&
            !je.hasOwnProperty(le) &&
            (V[le] = y[le] === void 0 && Z !== void 0 ? Z[le] : y[le]);
      }
      var le = arguments.length - 2;
      if (le === 1) V.children = F;
      else if (1 < le) {
        Z = Array(le);
        for (var $e = 0; $e < le; $e++) Z[$e] = arguments[$e + 2];
        V.children = Z;
      }
      return { $$typeof: h, type: c.type, key: B, ref: W, props: V, _owner: J };
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
        (c.Provider = { $$typeof: I, _context: c }),
        (c.Consumer = c)
      );
    }),
    (U.createElement = Ke),
    (U.createFactory = function (c) {
      var y = Ke.bind(null, c);
      return ((y.type = c), y);
    }),
    (U.createRef = function () {
      return { current: null };
    }),
    (U.forwardRef = function (c) {
      return { $$typeof: ie, render: c };
    }),
    (U.isValidElement = wt),
    (U.lazy = function (c) {
      return { $$typeof: re, _payload: { _status: -1, _result: c }, _init: Me };
    }),
    (U.memo = function (c, y) {
      return { $$typeof: A, type: c, compare: y === void 0 ? null : y };
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
    (U.useImperativeHandle = function (c, y, F) {
      return ae.current.useImperativeHandle(c, y, F);
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
    (U.useReducer = function (c, y, F) {
      return ae.current.useReducer(c, y, F);
    }),
    (U.useRef = function (c) {
      return ae.current.useRef(c);
    }),
    (U.useState = function (c) {
      return ae.current.useState(c);
    }),
    (U.useSyncExternalStore = function (c, y, F) {
      return ae.current.useSyncExternalStore(c, y, F);
    }),
    (U.useTransition = function () {
      return ae.current.useTransition();
    }),
    (U.version = "18.3.1"),
    U
  );
}
var La;
function Ti() {
  return (La || ((La = 1), (_i.exports = Vf())), _i.exports);
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
function $f() {
  if (Ta) return wr;
  Ta = 1;
  var h = Ti(),
    E = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    M = Object.prototype.hasOwnProperty,
    j = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(ie, $, A) {
    var re,
      K = {},
      X = null,
      ke = null;
    (A !== void 0 && (X = "" + A),
      $.key !== void 0 && (X = "" + $.key),
      $.ref !== void 0 && (ke = $.ref));
    for (re in $) M.call($, re) && !I.hasOwnProperty(re) && (K[re] = $[re]);
    if (ie && ie.defaultProps)
      for (re in (($ = ie.defaultProps), $)) K[re] === void 0 && (K[re] = $[re]);
    return { $$typeof: E, type: ie, key: X, ref: ke, props: K, _owner: j.current };
  }
  return ((wr.Fragment = m), (wr.jsx = ne), (wr.jsxs = ne), wr);
}
var Ra;
function Hf() {
  return (Ra || ((Ra = 1), (Ci.exports = $f())), Ci.exports);
}
var P = Hf(),
  Re = Ti(),
  Tl = {},
  Ni = { exports: {} },
  Ae = {},
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
 */ var ja;
function Bf() {
  return (
    ja ||
      ((ja = 1),
      (function (h) {
        function E(S, O) {
          var _ = S.length;
          S.push(O);
          e: for (; 0 < _;) {
            var c = (_ - 1) >>> 1,
              y = S[c];
            if (0 < j(y, O)) ((S[c] = O), (S[_] = y), (_ = c));
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function M(S) {
          if (S.length === 0) return null;
          var O = S[0],
            _ = S.pop();
          if (_ !== O) {
            S[0] = _;
            e: for (var c = 0, y = S.length, F = y >>> 1; c < F;) {
              var V = 2 * (c + 1) - 1,
                B = S[V],
                W = V + 1,
                J = S[W];
              if (0 > j(B, _))
                W < y && 0 > j(J, B)
                  ? ((S[c] = J), (S[W] = _), (c = W))
                  : ((S[c] = B), (S[V] = _), (c = V));
              else if (W < y && 0 > j(J, _)) ((S[c] = J), (S[W] = _), (c = W));
              else break e;
            }
          }
          return O;
        }
        function j(S, O) {
          var _ = S.sortIndex - O.sortIndex;
          return _ !== 0 ? _ : S.id - O.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var I = performance;
          h.unstable_now = function () {
            return I.now();
          };
        } else {
          var ne = Date,
            ie = ne.now();
          h.unstable_now = function () {
            return ne.now() - ie;
          };
        }
        var $ = [],
          A = [],
          re = 1,
          K = null,
          X = 3,
          ke = !1,
          ve = !1,
          G = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          gt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function be(S) {
          for (var O = m(A); O !== null;) {
            if (O.callback === null) M(A);
            else if (O.startTime <= S) (M(A), (O.sortIndex = O.expirationTime), E($, O));
            else break;
            O = m(A);
          }
        }
        function Ee(S) {
          if (((G = !1), be(S), !ve))
            if (m($) !== null) ((ve = !0), Me(et));
            else {
              var O = m(A);
              O !== null && ae(Ee, O.startTime - S);
            }
        }
        function et(S, O) {
          ((ve = !1), G && ((G = !1), gt(Ke), (Ke = -1)), (ke = !0));
          var _ = X;
          try {
            for (be(O), K = m($); K !== null && (!(K.expirationTime > O) || (S && !Yt()));) {
              var c = K.callback;
              if (typeof c == "function") {
                ((K.callback = null), (X = K.priorityLevel));
                var y = c(K.expirationTime <= O);
                ((O = h.unstable_now()),
                  typeof y == "function" ? (K.callback = y) : K === m($) && M($),
                  be(O));
              } else M($);
              K = m($);
            }
            if (K !== null) var F = !0;
            else {
              var V = m(A);
              (V !== null && ae(Ee, V.startTime - O), (F = !1));
            }
            return F;
          } finally {
            ((K = null), (X = _), (ke = !1));
          }
        }
        var ze = !1,
          je = null,
          Ke = -1,
          zt = 5,
          wt = -1;
        function Yt() {
          return !(h.unstable_now() - wt < zt);
        }
        function ct() {
          if (je !== null) {
            var S = h.unstable_now();
            wt = S;
            var O = !0;
            try {
              O = je(!0, S);
            } finally {
              O ? Ve() : ((ze = !1), (je = null));
            }
          } else ze = !1;
        }
        var Ve;
        if (typeof at == "function")
          Ve = function () {
            at(ct);
          };
        else if (typeof MessageChannel < "u") {
          var tt = new MessageChannel(),
            ft = tt.port2;
          ((tt.port1.onmessage = ct),
            (Ve = function () {
              ft.postMessage(null);
            }));
        } else
          Ve = function () {
            Y(ct, 0);
          };
        function Me(S) {
          ((je = S), ze || ((ze = !0), Ve()));
        }
        function ae(S, O) {
          Ke = Y(function () {
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
            ve || ke || ((ve = !0), Me(et));
          }),
          (h.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (zt = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (h.unstable_getCurrentPriorityLevel = function () {
            return X;
          }),
          (h.unstable_getFirstCallbackNode = function () {
            return m($);
          }),
          (h.unstable_next = function (S) {
            switch (X) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = X;
            }
            var _ = X;
            X = O;
            try {
              return S();
            } finally {
              X = _;
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
            var _ = X;
            X = S;
            try {
              return O();
            } finally {
              X = _;
            }
          }),
          (h.unstable_scheduleCallback = function (S, O, _) {
            var c = h.unstable_now();
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
                callback: O,
                priorityLevel: S,
                startTime: _,
                expirationTime: y,
                sortIndex: -1,
              }),
              _ > c
                ? ((S.sortIndex = _),
                  E(A, S),
                  m($) === null &&
                    S === m(A) &&
                    (G ? (gt(Ke), (Ke = -1)) : (G = !0), ae(Ee, _ - c)))
                : ((S.sortIndex = y), E($, S), ve || ke || ((ve = !0), Me(et))),
              S
            );
          }),
          (h.unstable_shouldYield = Yt),
          (h.unstable_wrapCallback = function (S) {
            var O = X;
            return function () {
              var _ = X;
              X = O;
              try {
                return S.apply(this, arguments);
              } finally {
                X = _;
              }
            };
          }));
      })(zi)),
    zi
  );
}
var Ma;
function Wf() {
  return (Ma || ((Ma = 1), (Pi.exports = Bf())), Pi.exports);
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
function Qf() {
  if (Oa) return Ae;
  Oa = 1;
  var h = Ti(),
    E = Wf();
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
  var M = new Set(),
    j = {};
  function I(e, t) {
    (ne(e, t), ne(e + "Capture", t));
  }
  function ne(e, t) {
    for (j[e] = t, e = 0; e < t.length; e++) M.add(t[e]);
  }
  var ie = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    $ = Object.prototype.hasOwnProperty,
    A =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    re = {},
    K = {};
  function X(e) {
    return $.call(K, e) ? !0 : $.call(re, e) ? !1 : A.test(e) ? (K[e] = !0) : ((re[e] = !0), !1);
  }
  function ke(e, t, n, r) {
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
    if (t === null || typeof t > "u" || ke(e, t, n, r)) return !0;
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
  function G(e, t, n, r, l, u, i) {
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
      Y[e] = new G(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Y[t] = new G(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      Y[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        Y[e] = new G(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Y[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Y[e] = new G(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Y[e] = new G(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Y[e] = new G(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Y[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var gt = /[\-:]([a-z])/g;
  function at(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(gt, at);
      Y[t] = new G(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(gt, at);
        Y[t] = new G(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(gt, at);
      Y[t] = new G(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Y[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Y.xlinkHref = new G("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Y[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function be(e, t, n, r) {
    var l = Y.hasOwnProperty(t) ? Y[t] : null;
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
  var Ee = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for("react.element"),
    ze = Symbol.for("react.portal"),
    je = Symbol.for("react.fragment"),
    Ke = Symbol.for("react.strict_mode"),
    zt = Symbol.for("react.profiler"),
    wt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Ve = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    Me = Symbol.for("react.lazy"),
    ae = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function O(e) {
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
  var F = !1;
  function V(e, t) {
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
      ((F = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function B(e) {
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
        return ((e = V(e.type, !1)), e);
      case 11:
        return ((e = V(e.type.render, !1)), e);
      case 1:
        return ((e = V(e.type, !0)), e);
      default:
        return "";
    }
  }
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case je:
        return "Fragment";
      case ze:
        return "Portal";
      case zt:
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
        case Yt:
          return (e.displayName || "Context") + ".Consumer";
        case wt:
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
          return ((t = e.displayName || null), t !== null ? t : W(e.type) || "Memo");
        case Me:
          ((t = e._payload), (e = e._init));
          try {
            return W(e(t));
          } catch {}
      }
    return null;
  }
  function J(e) {
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
  function le(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function $e(e) {
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
  function kr(e) {
    e._valueTracker || (e._valueTracker = $e(e));
  }
  function Mi(e) {
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
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Oi(e, t) {
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
  function Di(e, t) {
    ((t = t.checked), t != null && be(e, "checked", t, !1));
  }
  function jl(e, t) {
    Di(e, t);
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
  function Ii(e, t, n) {
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
    return _({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Fi(e, t) {
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
  function Ui(e, t) {
    var n = Z(t.value),
      r = Z(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Ai(e) {
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
  function Dl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Vi(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var xr,
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
          xr = xr || document.createElement("div"),
            xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = xr.firstChild;
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
    Ba = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function (e) {
    Ba.forEach(function (t) {
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
  function Il(e, t) {
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
  var Vl = null,
    cn = null,
    fn = null;
  function Wi(e) {
    if ((e = lr(e))) {
      if (typeof Vl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Qr(t)), Vl(e.stateNode, e.type, t));
    }
  }
  function Qi(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function Ki() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), Wi(e), t)) for (e = 0; e < t.length; e++) Wi(t[e]);
    }
  }
  function Xi(e, t) {
    return e(t);
  }
  function Yi() {}
  var $l = !1;
  function Gi(e, t, n) {
    if ($l) return e(t, n);
    $l = !0;
    try {
      return Xi(e, t, n);
    } finally {
      (($l = !1), (cn !== null || fn !== null) && (Yi(), Ki()));
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
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var Hl = !1;
  if (ie)
    try {
      var Un = {};
      (Object.defineProperty(Un, "passive", {
        get: function () {
          Hl = !0;
        },
      }),
        window.addEventListener("test", Un, Un),
        window.removeEventListener("test", Un, Un));
    } catch {
      Hl = !1;
    }
  function Qa(e, t, n, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (g) {
      this.onError(g);
    }
  }
  var An = !1,
    Er = null,
    Cr = !1,
    Bl = null,
    Ka = {
      onError: function (e) {
        ((An = !0), (Er = e));
      },
    };
  function Xa(e, t, n, r, l, u, i, o, s) {
    ((An = !1), (Er = null), Qa.apply(Ka, arguments));
  }
  function Ya(e, t, n, r, l, u, i, o, s) {
    if ((Xa.apply(this, arguments), An)) {
      if (An) {
        var p = Er;
        ((An = !1), (Er = null));
      } else throw Error(m(198));
      Cr || ((Cr = !0), (Bl = p));
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
  function Zi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function qi(e) {
    if (Gt(e) !== e) throw Error(m(188));
  }
  function Ga(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Gt(e)), t === null)) throw Error(m(188));
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
  function Ji(e) {
    return ((e = Ga(e)), e !== null ? bi(e) : null);
  }
  function bi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = bi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var eo = E.unstable_scheduleCallback,
    to = E.unstable_cancelCallback,
    Za = E.unstable_shouldYield,
    qa = E.unstable_requestPaint,
    fe = E.unstable_now,
    Ja = E.unstable_getCurrentPriorityLevel,
    Wl = E.unstable_ImmediatePriority,
    no = E.unstable_UserBlockingPriority,
    _r = E.unstable_NormalPriority,
    ba = E.unstable_LowPriority,
    ro = E.unstable_IdlePriority,
    Nr = null,
    dt = null;
  function ec(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : rc,
    tc = Math.log,
    nc = Math.LN2;
  function rc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((tc(e) / nc) | 0)) | 0);
  }
  var Pr = 64,
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
        ((n = 31 - nt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
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
  function uc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var i = 31 - nt(u),
        o = 1 << i,
        s = l[i];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[i] = lc(o, t))
        : s <= t && (e.expiredLanes |= o),
        (u &= ~o));
    }
  }
  function Ql(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function lo() {
    var e = Pr;
    return ((Pr <<= 1), (Pr & 4194240) === 0 && (Pr = 64), e);
  }
  function Kl(e) {
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
  function ic(e, t) {
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
        u = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~u));
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
  var q = 0;
  function uo(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var io,
    Yl,
    oo,
    so,
    ao,
    Gl = !1,
    Tr = [],
    Lt = null,
    Tt = null,
    Rt = null,
    Hn = new Map(),
    Bn = new Map(),
    jt = [],
    oc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function co(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Lt = null;
        break;
      case "dragenter":
      case "dragleave":
        Tt = null;
        break;
      case "mouseover":
      case "mouseout":
        Rt = null;
        break;
      case "pointerover":
      case "pointerout":
        Hn.delete(t.pointerId);
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
        t !== null && ((t = lr(t)), t !== null && Yl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function sc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Lt = Wn(Lt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Tt = Wn(Tt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Rt = Wn(Rt, e, t, n, r, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (Hn.set(u, Wn(Hn.get(u) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), Bn.set(u, Wn(Bn.get(u) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function fo(e) {
    var t = Zt(e.target);
    if (t !== null) {
      var n = Gt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Zi(n)), t !== null)) {
            ((e.blockedOn = t),
              ao(e.priority, function () {
                oo(n);
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
        ((Ul = r), n.target.dispatchEvent(r), (Ul = null));
      } else return ((t = lr(n)), t !== null && Yl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function po(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function ac() {
    ((Gl = !1),
      Lt !== null && Rr(Lt) && (Lt = null),
      Tt !== null && Rr(Tt) && (Tt = null),
      Rt !== null && Rr(Rt) && (Rt = null),
      Hn.forEach(po),
      Bn.forEach(po));
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Gl || ((Gl = !0), E.unstable_scheduleCallback(E.unstable_NormalPriority, ac)));
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
      Lt !== null && Qn(Lt, e),
        Tt !== null && Qn(Tt, e),
        Rt !== null && Qn(Rt, e),
        Hn.forEach(t),
        Bn.forEach(t),
        n = 0;
      n < jt.length;
      n++
    )
      ((r = jt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null);)
      (fo(n), n.blockedOn === null && jt.shift());
  }
  var dn = Ee.ReactCurrentBatchConfig,
    jr = !0;
  function cc(e, t, n, r) {
    var l = q,
      u = dn.transition;
    dn.transition = null;
    try {
      ((q = 1), Zl(e, t, n, r));
    } finally {
      ((q = l), (dn.transition = u));
    }
  }
  function fc(e, t, n, r) {
    var l = q,
      u = dn.transition;
    dn.transition = null;
    try {
      ((q = 4), Zl(e, t, n, r));
    } finally {
      ((q = l), (dn.transition = u));
    }
  }
  function Zl(e, t, n, r) {
    if (jr) {
      var l = ql(e, t, n, r);
      if (l === null) (mu(e, t, r, Mr, n), co(e, r));
      else if (sc(l, e, t, n, r)) r.stopPropagation();
      else if ((co(e, r), t & 4 && -1 < oc.indexOf(e))) {
        for (; l !== null;) {
          var u = lr(l);
          if (
            (u !== null && io(u), (u = ql(e, t, n, r)), u === null && mu(e, t, r, Mr, n), u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else mu(e, t, r, null, n);
    }
  }
  var Mr = null;
  function ql(e, t, n, r) {
    if (((Mr = null), (e = Al(r)), (e = Zt(e)), e !== null))
      if (((t = Gt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Zi(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Mr = e), null);
  }
  function mo(e) {
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
        switch (Ja()) {
          case Wl:
            return 1;
          case no:
            return 4;
          case _r:
          case ba:
            return 16;
          case ro:
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
  function ho() {
    if (Or) return Or;
    var e,
      t = Jl,
      n = t.length,
      r,
      l = "value" in Mt ? Mt.value : Mt.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[u - r]; r++);
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
  function Ir() {
    return !0;
  }
  function vo() {
    return !1;
  }
  function He(e) {
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
          : vo),
        (this.isPropagationStopped = vo),
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
    bl = He(pn),
    Xn = _({}, pn, { view: 0, detail: 0 }),
    dc = He(Xn),
    eu,
    tu,
    Yn,
    Fr = _({}, Xn, {
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
    yo = He(Fr),
    pc = _({}, Fr, { dataTransfer: 0 }),
    mc = He(pc),
    hc = _({}, Xn, { relatedTarget: 0 }),
    nu = He(hc),
    vc = _({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yc = He(vc),
    gc = _({}, pn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    wc = He(gc),
    kc = _({}, pn, { data: 0 }),
    go = He(kc),
    Sc = {
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
    xc = {
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
  function ru() {
    return Cc;
  }
  var _c = _({}, Xn, {
      key: function (e) {
        if (e.key) {
          var t = Sc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? xc[e.keyCode] || "Unidentified"
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
    Nc = He(_c),
    Pc = _({}, Fr, {
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
    wo = He(Pc),
    zc = _({}, Xn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ru,
    }),
    Lc = He(zc),
    Tc = _({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rc = He(Tc),
    jc = _({}, Fr, {
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
    Mc = He(jc),
    Oc = [9, 13, 27, 32],
    lu = ie && "CompositionEvent" in window,
    Gn = null;
  ie && "documentMode" in document && (Gn = document.documentMode);
  var Dc = ie && "TextEvent" in window && !Gn,
    ko = ie && (!lu || (Gn && 8 < Gn && 11 >= Gn)),
    So = " ",
    xo = !1;
  function Eo(e, t) {
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
  function Co(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var mn = !1;
  function Ic(e, t) {
    switch (e) {
      case "compositionend":
        return Co(t);
      case "keypress":
        return t.which !== 32 ? null : ((xo = !0), So);
      case "textInput":
        return ((e = t.data), e === So && xo ? null : e);
      default:
        return null;
    }
  }
  function Fc(e, t) {
    if (mn)
      return e === "compositionend" || (!lu && Eo(e, t))
        ? ((e = ho()), (Or = Jl = Mt = null), (mn = !1), e)
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
  function _o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Uc[e.type] : t === "textarea";
  }
  function No(e, t, n, r) {
    (Qi(r),
      (t = Hr(t, "onChange")),
      0 < t.length &&
        ((n = new bl("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Zn = null,
    qn = null;
  function Ac(e) {
    Wo(e, 0);
  }
  function Ur(e) {
    var t = wn(e);
    if (Mi(t)) return e;
  }
  function Vc(e, t) {
    if (e === "change") return t;
  }
  var Po = !1;
  if (ie) {
    var uu;
    if (ie) {
      var iu = "oninput" in document;
      if (!iu) {
        var zo = document.createElement("div");
        (zo.setAttribute("oninput", "return;"), (iu = typeof zo.oninput == "function"));
      }
      uu = iu;
    } else uu = !1;
    Po = uu && (!document.documentMode || 9 < document.documentMode);
  }
  function Lo() {
    Zn && (Zn.detachEvent("onpropertychange", To), (qn = Zn = null));
  }
  function To(e) {
    if (e.propertyName === "value" && Ur(qn)) {
      var t = [];
      (No(t, qn, e, Al(e)), Gi(Ac, t));
    }
  }
  function $c(e, t, n) {
    e === "focusin"
      ? (Lo(), (Zn = t), (qn = n), Zn.attachEvent("onpropertychange", To))
      : e === "focusout" && Lo();
  }
  function Hc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ur(qn);
  }
  function Bc(e, t) {
    if (e === "click") return Ur(t);
  }
  function Wc(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function Qc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == "function" ? Object.is : Qc;
  function Jn(e, t) {
    if (rt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!$.call(t, l) || !rt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ro(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function jo(e, t) {
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
  function Kc(e) {
    var t = Oo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Mo(n.ownerDocument.documentElement, n)) {
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
            (l = jo(n, u)));
          var i = jo(n, r);
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
  var Xc = ie && "documentMode" in document && 11 >= document.documentMode,
    hn = null,
    su = null,
    bn = null,
    au = !1;
  function Do(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    au ||
      hn == null ||
      hn !== Sr(r) ||
      ((r = hn),
      "selectionStart" in r && ou(r)
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
        (r = Hr(su, "onSelect")),
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
    cu = {},
    Io = {};
  ie &&
    ((Io = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vn.animationend.animation,
      delete vn.animationiteration.animation,
      delete vn.animationstart.animation),
    "TransitionEvent" in window || delete vn.transitionend.transition);
  function Vr(e) {
    if (cu[e]) return cu[e];
    if (!vn[e]) return e;
    var t = vn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Io) return (cu[e] = t[n]);
    return e;
  }
  var Fo = Vr("animationend"),
    Uo = Vr("animationiteration"),
    Ao = Vr("animationstart"),
    Vo = Vr("transitionend"),
    $o = new Map(),
    Ho =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ot(e, t) {
    ($o.set(e, t), I(t, [e]));
  }
  for (var fu = 0; fu < Ho.length; fu++) {
    var du = Ho[fu],
      Yc = du.toLowerCase(),
      Gc = du[0].toUpperCase() + du.slice(1);
    Ot(Yc, "on" + Gc);
  }
  (Ot(Fo, "onAnimationEnd"),
    Ot(Uo, "onAnimationIteration"),
    Ot(Ao, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(Vo, "onTransitionEnd"),
    ne("onMouseEnter", ["mouseout", "mouseover"]),
    ne("onMouseLeave", ["mouseout", "mouseover"]),
    ne("onPointerEnter", ["pointerout", "pointerover"]),
    ne("onPointerLeave", ["pointerout", "pointerover"]),
    I("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    I(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    I("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    I("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    I(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    I(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Zc = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
  function Bo(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Ya(r, t, void 0, e), (e.currentTarget = null));
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
    if (Cr) throw ((e = Bl), (Cr = !1), (Bl = null), e);
  }
  function ee(e, t) {
    var n = t[ku];
    n === void 0 && (n = t[ku] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Qo(t, e, 2, !1), n.add(r));
  }
  function pu(e, t, n) {
    var r = 0;
    (t && (r |= 4), Qo(n, e, r, t));
  }
  var $r = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[$r]) {
      ((e[$r] = !0),
        M.forEach(function (n) {
          n !== "selectionchange" && (Zc.has(n) || pu(n, !1, e), pu(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$r] || ((t[$r] = !0), pu("selectionchange", !1, t));
    }
  }
  function Qo(e, t, n, r) {
    switch (mo(t)) {
      case 1:
        var l = cc;
        break;
      case 4:
        l = fc;
        break;
      default:
        l = Zl;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Hl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
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
            if (((i = Zt(o)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Gi(function () {
      var p = u,
        g = Al(n),
        w = [];
      e: {
        var v = $o.get(e);
        if (v !== void 0) {
          var x = bl,
            N = e;
          switch (e) {
            case "keypress":
              if (Dr(n) === 0) break e;
            case "keydown":
            case "keyup":
              x = Nc;
              break;
            case "focusin":
              ((N = "focus"), (x = nu));
              break;
            case "focusout":
              ((N = "blur"), (x = nu));
              break;
            case "beforeblur":
            case "afterblur":
              x = nu;
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
              x = yo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = mc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = Lc;
              break;
            case Fo:
            case Uo:
            case Ao:
              x = yc;
              break;
            case Vo:
              x = Rc;
              break;
            case "scroll":
              x = dc;
              break;
            case "wheel":
              x = Mc;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = wc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = wo;
          }
          var z = (t & 4) !== 0,
            de = !z && e === "scroll",
            f = z ? (v !== null ? v + "Capture" : null) : v;
          z = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var k = d.stateNode;
            if (
              (d.tag === 5 &&
                k !== null &&
                ((d = k), f !== null && ((k = Fn(a, f)), k != null && z.push(nr(a, k, d)))),
              de)
            )
              break;
            a = a.return;
          }
          0 < z.length && ((v = new x(v, N, null, n, g)), w.push({ event: v, listeners: z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (x = e === "mouseout" || e === "pointerout"),
            v && n !== Ul && (N = n.relatedTarget || n.fromElement) && (Zt(N) || N[kt]))
          )
            break e;
          if (
            (x || v) &&
            ((v =
              g.window === g
                ? g
                : (v = g.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            x
              ? ((N = n.relatedTarget || n.toElement),
                (x = p),
                (N = N ? Zt(N) : null),
                N !== null &&
                  ((de = Gt(N)), N !== de || (N.tag !== 5 && N.tag !== 6)) &&
                  (N = null))
              : ((x = null), (N = p)),
            x !== N)
          ) {
            if (
              ((z = yo),
              (k = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((z = wo), (k = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (de = x == null ? v : wn(x)),
              (d = N == null ? v : wn(N)),
              (v = new z(k, a + "leave", x, n, g)),
              (v.target = de),
              (v.relatedTarget = d),
              (k = null),
              Zt(g) === p &&
                ((z = new z(f, a + "enter", N, n, g)),
                (z.target = d),
                (z.relatedTarget = de),
                (k = z)),
              (de = k),
              x && N)
            )
              t: {
                for (z = x, f = N, a = 0, d = z; d; d = yn(d)) a++;
                for (d = 0, k = f; k; k = yn(k)) d++;
                for (; 0 < a - d;) ((z = yn(z)), a--);
                for (; 0 < d - a;) ((f = yn(f)), d--);
                for (; a--;) {
                  if (z === f || (f !== null && z === f.alternate)) break t;
                  ((z = yn(z)), (f = yn(f)));
                }
                z = null;
              }
            else z = null;
            (x !== null && Ko(w, v, x, z, !1), N !== null && de !== null && Ko(w, de, N, z, !0));
          }
        }
        e: {
          if (
            ((v = p ? wn(p) : window),
            (x = v.nodeName && v.nodeName.toLowerCase()),
            x === "select" || (x === "input" && v.type === "file"))
          )
            var L = Vc;
          else if (_o(v))
            if (Po) L = Wc;
            else {
              L = Hc;
              var T = $c;
            }
          else
            (x = v.nodeName) &&
              x.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (L = Bc);
          if (L && (L = L(e, p))) {
            No(w, L, n, g);
            break e;
          }
          (T && T(e, v, p),
            e === "focusout" &&
              (T = v._wrapperState) &&
              T.controlled &&
              v.type === "number" &&
              Ml(v, "number", v.value));
        }
        switch (((T = p ? wn(p) : window), e)) {
          case "focusin":
            (_o(T) || T.contentEditable === "true") && ((hn = T), (su = p), (bn = null));
            break;
          case "focusout":
            bn = su = hn = null;
            break;
          case "mousedown":
            au = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((au = !1), Do(w, n, g));
            break;
          case "selectionchange":
            if (Xc) break;
          case "keydown":
          case "keyup":
            Do(w, n, g);
        }
        var R;
        if (lu)
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
          mn
            ? Eo(e, n) && (D = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
        (D &&
          (ko &&
            n.locale !== "ko" &&
            (mn || D !== "onCompositionStart"
              ? D === "onCompositionEnd" && mn && (R = ho())
              : ((Mt = g), (Jl = "value" in Mt ? Mt.value : Mt.textContent), (mn = !0))),
          (T = Hr(p, D)),
          0 < T.length &&
            ((D = new go(D, e, null, n, g)),
            w.push({ event: D, listeners: T }),
            R ? (D.data = R) : ((R = Co(n)), R !== null && (D.data = R)))),
          (R = Dc ? Ic(e, n) : Fc(e, n)) &&
            ((p = Hr(p, "onBeforeInput")),
            0 < p.length &&
              ((g = new go("onBeforeInput", "beforeinput", null, n, g)),
              w.push({ event: g, listeners: p }),
              (g.data = R))));
      }
      Wo(w, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hr(e, t) {
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
  function yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ko(e, t, n, r, l) {
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
  var qc = /\r\n?/g,
    Jc = /\u0000|\uFFFD/g;
  function Xo(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        qc,
        `
`,
      )
      .replace(Jc, "");
  }
  function Br(e, t, n) {
    if (((t = Xo(t)), Xo(e) !== t && n)) throw Error(m(425));
  }
  function Wr() {}
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
    bc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yo = typeof Promise == "function" ? Promise : void 0,
    ef =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Yo < "u"
          ? function (e) {
              return Yo.resolve(null).then(e).catch(tf);
            }
          : gu;
  function tf(e) {
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
  function Go(e) {
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
    kt = "__reactContainer$" + gn,
    ku = "__reactEvents$" + gn,
    nf = "__reactListeners$" + gn,
    rf = "__reactHandles$" + gn;
  function Zt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[kt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Go(e); e !== null;) {
            if ((n = e[pt])) return n;
            e = Go(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function lr(e) {
    return (
      (e = e[pt] || e[kt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var Su = [],
    kn = -1;
  function It(e) {
    return { current: e };
  }
  function te(e) {
    0 > kn || ((e.current = Su[kn]), (Su[kn] = null), kn--);
  }
  function b(e, t) {
    (kn++, (Su[kn] = e.current), (e.current = t));
  }
  var Ft = {},
    Ce = It(Ft),
    Oe = It(!1),
    qt = Ft;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
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
  function De(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Kr() {
    (te(Oe), te(Ce));
  }
  function Zo(e, t, n) {
    if (Ce.current !== Ft) throw Error(m(168));
    (b(Ce, t), b(Oe, n));
  }
  function qo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, J(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Xr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
      (qt = Ce.current),
      b(Ce, e),
      b(Oe, Oe.current),
      !0
    );
  }
  function Jo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = qo(e, t, qt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        te(Oe),
        te(Ce),
        b(Ce, e))
      : te(Oe),
      b(Oe, n));
  }
  var St = null,
    Yr = !1,
    xu = !1;
  function bo(e) {
    St === null ? (St = [e]) : St.push(e);
  }
  function lf(e) {
    ((Yr = !0), bo(e));
  }
  function Ut() {
    if (!xu && St !== null) {
      xu = !0;
      var e = 0,
        t = q;
      try {
        var n = St;
        for (q = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((St = null), (Yr = !1));
      } catch (l) {
        throw (St !== null && (St = St.slice(e + 1)), eo(Wl, Ut), l);
      } finally {
        ((q = t), (xu = !1));
      }
    }
    return null;
  }
  var xn = [],
    En = 0,
    Gr = null,
    Zr = 0,
    Xe = [],
    Ye = 0,
    Jt = null,
    xt = 1,
    Et = "";
  function bt(e, t) {
    ((xn[En++] = Zr), (xn[En++] = Gr), (Gr = e), (Zr = t));
  }
  function es(e, t, n) {
    ((Xe[Ye++] = xt), (Xe[Ye++] = Et), (Xe[Ye++] = Jt), (Jt = e));
    var r = xt;
    e = Et;
    var l = 32 - nt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var u = 32 - nt(t) + l;
    if (30 < u) {
      var i = l - (l % 5);
      ((u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (xt = (1 << (32 - nt(t) + l)) | (n << l) | r),
        (Et = u + e));
    } else ((xt = (1 << u) | (n << l) | r), (Et = e));
  }
  function Eu(e) {
    e.return !== null && (bt(e, 1), es(e, 1, 0));
  }
  function Cu(e) {
    for (; e === Gr;) ((Gr = xn[--En]), (xn[En] = null), (Zr = xn[--En]), (xn[En] = null));
    for (; e === Jt;)
      ((Jt = Xe[--Ye]),
        (Xe[Ye] = null),
        (Et = Xe[--Ye]),
        (Xe[Ye] = null),
        (xt = Xe[--Ye]),
        (Xe[Ye] = null));
  }
  var Be = null,
    We = null,
    ue = !1,
    lt = null;
  function ts(e, t) {
    var n = Je(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ns(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Be = e), (We = Dt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Be = e), (We = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: xt, overflow: Et } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Je(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Be = e),
              (We = null),
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
    if (ue) {
      var t = We;
      if (t) {
        var n = t;
        if (!ns(e, t)) {
          if (_u(e)) throw Error(m(418));
          t = Dt(n.nextSibling);
          var r = Be;
          t && ns(e, t) ? ts(r, n) : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (Be = e));
        }
      } else {
        if (_u(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (ue = !1), (Be = e));
      }
    }
  }
  function rs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Be = e;
  }
  function qr(e) {
    if (e !== Be) return !1;
    if (!ue) return (rs(e), (ue = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !yu(e.type, e.memoizedProps))),
      t && (t = We))
    ) {
      if (_u(e)) throw (ls(), Error(m(418)));
      for (; t;) (ts(e, t), (t = Dt(t.nextSibling)));
    }
    if ((rs(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                We = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        We = null;
      }
    } else We = Be ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ls() {
    for (var e = We; e;) e = Dt(e.nextSibling);
  }
  function Cn() {
    ((We = Be = null), (ue = !1));
  }
  function Pu(e) {
    lt === null ? (lt = [e]) : lt.push(e);
  }
  var uf = Ee.ReactCurrentBatchConfig;
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
  function Jr(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function us(e) {
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
      return ((f = Kt(f, a)), (f.index = 0), (f.sibling = null), f);
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
        ? ((a = gi(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, k) {
      var L = d.type;
      return L === je
        ? g(f, a, d.props.children, k, d.key)
        : a !== null &&
            (a.elementType === L ||
              (typeof L == "object" && L !== null && L.$$typeof === Me && us(L) === a.type))
          ? ((k = l(a, d.props)), (k.ref = ur(f, a, d)), (k.return = f), k)
          : ((k = xl(d.type, d.key, d.props, null, f.mode, k)),
            (k.ref = ur(f, a, d)),
            (k.return = f),
            k);
    }
    function p(f, a, d, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = wi(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function g(f, a, d, k, L) {
      return a === null || a.tag !== 7
        ? ((a = sn(d, f.mode, k, L)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function w(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = gi("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case et:
            return (
              (d = xl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ur(f, null, a)),
              (d.return = f),
              d
            );
          case ze:
            return ((a = wi(a, f.mode, d)), (a.return = f), a);
          case Me:
            var k = a._init;
            return w(f, k(a._payload), d);
        }
        if (On(a) || O(a)) return ((a = sn(a, f.mode, d, null)), (a.return = f), a);
        Jr(f, a);
      }
      return null;
    }
    function v(f, a, d, k) {
      var L = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return L !== null ? null : o(f, a, "" + d, k);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case et:
            return d.key === L ? s(f, a, d, k) : null;
          case ze:
            return d.key === L ? p(f, a, d, k) : null;
          case Me:
            return ((L = d._init), v(f, a, L(d._payload), k));
        }
        if (On(d) || O(d)) return L !== null ? null : g(f, a, d, k, null);
        Jr(f, d);
      }
      return null;
    }
    function x(f, a, d, k, L) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((f = f.get(d) || null), o(a, f, "" + k, L));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case et:
            return ((f = f.get(k.key === null ? d : k.key) || null), s(a, f, k, L));
          case ze:
            return ((f = f.get(k.key === null ? d : k.key) || null), p(a, f, k, L));
          case Me:
            var T = k._init;
            return x(f, a, d, T(k._payload), L);
        }
        if (On(k) || O(k)) return ((f = f.get(d) || null), g(a, f, k, L, null));
        Jr(a, k);
      }
      return null;
    }
    function N(f, a, d, k) {
      for (var L = null, T = null, R = a, D = (a = 0), we = null; R !== null && D < d.length; D++) {
        R.index > D ? ((we = R), (R = null)) : (we = R.sibling);
        var Q = v(f, R, d[D], k);
        if (Q === null) {
          R === null && (R = we);
          break;
        }
        (e && R && Q.alternate === null && t(f, R),
          (a = u(Q, a, D)),
          T === null ? (L = Q) : (T.sibling = Q),
          (T = Q),
          (R = we));
      }
      if (D === d.length) return (n(f, R), ue && bt(f, D), L);
      if (R === null) {
        for (; D < d.length; D++)
          ((R = w(f, d[D], k)),
            R !== null && ((a = u(R, a, D)), T === null ? (L = R) : (T.sibling = R), (T = R)));
        return (ue && bt(f, D), L);
      }
      for (R = r(f, R); D < d.length; D++)
        ((we = x(R, f, D, d[D], k)),
          we !== null &&
            (e && we.alternate !== null && R.delete(we.key === null ? D : we.key),
            (a = u(we, a, D)),
            T === null ? (L = we) : (T.sibling = we),
            (T = we)));
      return (
        e &&
          R.forEach(function (Xt) {
            return t(f, Xt);
          }),
        ue && bt(f, D),
        L
      );
    }
    function z(f, a, d, k) {
      var L = O(d);
      if (typeof L != "function") throw Error(m(150));
      if (((d = L.call(d)), d == null)) throw Error(m(151));
      for (
        var T = (L = null), R = a, D = (a = 0), we = null, Q = d.next();
        R !== null && !Q.done;
        D++, Q = d.next()
      ) {
        R.index > D ? ((we = R), (R = null)) : (we = R.sibling);
        var Xt = v(f, R, Q.value, k);
        if (Xt === null) {
          R === null && (R = we);
          break;
        }
        (e && R && Xt.alternate === null && t(f, R),
          (a = u(Xt, a, D)),
          T === null ? (L = Xt) : (T.sibling = Xt),
          (T = Xt),
          (R = we));
      }
      if (Q.done) return (n(f, R), ue && bt(f, D), L);
      if (R === null) {
        for (; !Q.done; D++, Q = d.next())
          ((Q = w(f, Q.value, k)),
            Q !== null && ((a = u(Q, a, D)), T === null ? (L = Q) : (T.sibling = Q), (T = Q)));
        return (ue && bt(f, D), L);
      }
      for (R = r(f, R); !Q.done; D++, Q = d.next())
        ((Q = x(R, f, D, Q.value, k)),
          Q !== null &&
            (e && Q.alternate !== null && R.delete(Q.key === null ? D : Q.key),
            (a = u(Q, a, D)),
            T === null ? (L = Q) : (T.sibling = Q),
            (T = Q)));
      return (
        e &&
          R.forEach(function (Af) {
            return t(f, Af);
          }),
        ue && bt(f, D),
        L
      );
    }
    function de(f, a, d, k) {
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
              for (var L = d.key, T = a; T !== null;) {
                if (T.key === L) {
                  if (((L = d.type), L === je)) {
                    if (T.tag === 7) {
                      (n(f, T.sibling), (a = l(T, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    T.elementType === L ||
                    (typeof L == "object" && L !== null && L.$$typeof === Me && us(L) === T.type)
                  ) {
                    (n(f, T.sibling),
                      (a = l(T, d.props)),
                      (a.ref = ur(f, T, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, T);
                  break;
                } else t(f, T);
                T = T.sibling;
              }
              d.type === je
                ? ((a = sn(d.props.children, f.mode, k, d.key)), (a.return = f), (f = a))
                : ((k = xl(d.type, d.key, d.props, null, f.mode, k)),
                  (k.ref = ur(f, a, d)),
                  (k.return = f),
                  (f = k));
            }
            return i(f);
          case ze:
            e: {
              for (T = d.key; a !== null;) {
                if (a.key === T)
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
              ((a = wi(d, f.mode, k)), (a.return = f), (f = a));
            }
            return i(f);
          case Me:
            return ((T = d._init), de(f, a, T(d._payload), k));
        }
        if (On(d)) return N(f, a, d, k);
        if (O(d)) return z(f, a, d, k);
        Jr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = gi(d, f.mode, k)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return de;
  }
  var _n = is(!0),
    os = is(!1),
    br = It(null),
    el = null,
    Nn = null,
    zu = null;
  function Lu() {
    zu = Nn = el = null;
  }
  function Tu(e) {
    var t = br.current;
    (te(br), (e._currentValue = t));
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
  function Pn(e, t) {
    ((el = e),
      (zu = Nn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ie = !0), (e.firstContext = null)));
  }
  function Ge(e) {
    var t = e._currentValue;
    if (zu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
        if (el === null) throw Error(m(308));
        ((Nn = e), (el.dependencies = { lanes: 0, firstContext: e }));
      } else Nn = Nn.next = e;
    return t;
  }
  var en = null;
  function ju(e) {
    en === null ? (en = [e]) : en.push(e);
  }
  function ss(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ju(t)) : ((n.next = l.next), (l.next = n)),
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
  function Mu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function as(e, t) {
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
      l === null ? ((t.next = t), ju(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ct(e, n)
    );
  }
  function tl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  function cs(e, t) {
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
    At = !1;
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
          x = o.eventTime;
        if ((r & v) === v) {
          g !== null &&
            (g = g.next =
              {
                eventTime: x,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var N = e,
              z = o;
            switch (((v = t), (x = n), z.tag)) {
              case 1:
                if (((N = z.payload), typeof N == "function")) {
                  w = N.call(x, w, v);
                  break e;
                }
                w = N;
                break e;
              case 3:
                N.flags = (N.flags & -65537) | 128;
              case 0:
                if (
                  ((N = z.payload), (v = typeof N == "function" ? N.call(x, w, v) : N), v == null)
                )
                  break e;
                w = _({}, w, v);
                break e;
              case 2:
                At = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64), (v = l.effects), v === null ? (l.effects = [o]) : v.push(o));
        } else
          ((x = {
            eventTime: x,
            lane: v,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            g === null ? ((p = g = x), (s = w)) : (g = g.next = x),
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
      ((rn |= i), (e.lanes = i), (e.memoizedState = w));
    }
  }
  function fs(e, t, n) {
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
    mt = It(ir),
    or = It(ir),
    sr = It(ir);
  function tn(e) {
    if (e === ir) throw Error(m(174));
    return e;
  }
  function Ou(e, t) {
    switch ((b(sr, t), b(or, e), b(mt, ir), (e = t.nodeType), e)) {
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
    (te(mt), b(mt, t));
  }
  function zn() {
    (te(mt), te(or), te(sr));
  }
  function ds(e) {
    tn(sr.current);
    var t = tn(mt.current),
      n = Dl(t, e.type);
    t !== n && (b(or, e), b(mt, n));
  }
  function Du(e) {
    or.current === e && (te(mt), te(or));
  }
  var oe = It(0);
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
  var Iu = [];
  function Fu() {
    for (var e = 0; e < Iu.length; e++) Iu[e]._workInProgressVersionPrimary = null;
    Iu.length = 0;
  }
  var ll = Ee.ReactCurrentDispatcher,
    Uu = Ee.ReactCurrentBatchConfig,
    nn = 0,
    se = null,
    me = null,
    ye = null,
    ul = !1,
    ar = !1,
    cr = 0,
    of = 0;
  function _e() {
    throw Error(m(321));
  }
  function Au(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function Vu(e, t, n, r, l, u) {
    if (
      ((nn = u),
      (se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? ff : df),
      (e = n(r, l)),
      ar)
    ) {
      u = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= u)) throw Error(m(301));
        ((u += 1), (ye = me = null), (t.updateQueue = null), (ll.current = pf), (e = n(r, l)));
      } while (ar);
    }
    if (
      ((ll.current = sl),
      (t = me !== null && me.next !== null),
      (nn = 0),
      (ye = me = se = null),
      (ul = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function $u() {
    var e = cr !== 0;
    return ((cr = 0), e);
  }
  function ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ye === null ? (se.memoizedState = ye = e) : (ye = ye.next = e), ye);
  }
  function Ze() {
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
  function Hu(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = me,
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
        if ((nn & g) === g)
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
          (s === null ? ((o = s = w), (i = r)) : (s = s.next = w), (se.lanes |= g), (rn |= g));
        }
        p = p.next;
      } while (p !== null && p !== u);
      (s === null ? (i = r) : (s.next = o),
        rt(r, t.memoizedState) || (Ie = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), (se.lanes |= u), (rn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Bu(e) {
    var t = Ze(),
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
      (rt(u, t.memoizedState) || (Ie = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, r];
  }
  function ps() {}
  function ms(e, t) {
    var n = se,
      r = Ze(),
      l = t(),
      u = !rt(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Ie = !0)),
      (r = r.queue),
      Wu(ys.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (ye !== null && ye.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), dr(9, vs.bind(null, n, r, l, t), void 0, null), ge === null))
        throw Error(m(349));
      (nn & 30) !== 0 || hs(n, t, l);
    }
    return l;
  }
  function hs(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (se.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function vs(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), gs(t) && ws(e));
  }
  function ys(e, t, n) {
    return n(function () {
      gs(t) && ws(e);
    });
  }
  function gs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !rt(e, n);
    } catch {
      return !0;
    }
  }
  function ws(e) {
    var t = Ct(e, 1);
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
        lastRenderedReducer: fr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = cf.bind(null, se, e)),
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
  function Ss() {
    return Ze().memoizedState;
  }
  function il(e, t, n, r) {
    var l = ht();
    ((se.flags |= e), (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ol(e, t, n, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (me !== null) {
      var i = me.memoizedState;
      if (((u = i.destroy), r !== null && Au(r, i.deps))) {
        l.memoizedState = dr(t, n, u, r);
        return;
      }
    }
    ((se.flags |= e), (l.memoizedState = dr(1 | t, n, u, r)));
  }
  function xs(e, t) {
    return il(8390656, 8, e, t);
  }
  function Wu(e, t) {
    return ol(2048, 8, e, t);
  }
  function Es(e, t) {
    return ol(4, 2, e, t);
  }
  function Cs(e, t) {
    return ol(4, 4, e, t);
  }
  function _s(e, t) {
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
    return ((n = n != null ? n.concat([e]) : null), ol(4, 4, _s.bind(null, t, e), n));
  }
  function Qu() {}
  function Ps(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Au(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function zs(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Au(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ls(e, t, n) {
    return (nn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n))
      : (rt(n, t) || ((n = lo()), (se.lanes |= n), (rn |= n), (e.baseState = !0)), t);
  }
  function sf(e, t) {
    var n = q;
    ((q = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Uu.transition;
    Uu.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((q = n), (Uu.transition = r));
    }
  }
  function Ts() {
    return Ze().memoizedState;
  }
  function af(e, t, n) {
    var r = Wt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Rs(e)))
      js(t, n);
    else if (((n = ss(e, t, n, r)), n !== null)) {
      var l = Te();
      (st(n, e, r, l), Ms(n, t, r));
    }
  }
  function cf(e, t, n) {
    var r = Wt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Rs(e)) js(t, l);
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
          if (((l.hasEagerState = !0), (l.eagerState = o), rt(o, i))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), ju(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = ss(e, t, l, r)), n !== null && ((l = Te()), st(n, e, r, l), Ms(n, t, r)));
    }
  }
  function Rs(e) {
    var t = e.alternate;
    return e === se || (t !== null && t === se);
  }
  function js(e, t) {
    ar = ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Ms(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  var sl = {
      readContext: Ge,
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
    ff = {
      readContext: Ge,
      useCallback: function (e, t) {
        return ((ht().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ge,
      useEffect: xs,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), il(4194308, 4, _s.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return il(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return il(4, 2, e, t);
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
          (e = e.dispatch = af.bind(null, se, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ks,
      useDebugValue: Qu,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = ks(!1),
          t = e[0];
        return ((e = sf.bind(null, e[1])), (ht().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = se,
          l = ht();
        if (ue) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ge === null)) throw Error(m(349));
          (nn & 30) !== 0 || hs(r, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          xs(ys.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          dr(9, vs.bind(null, r, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = ht(),
          t = ge.identifierPrefix;
        if (ue) {
          var n = Et,
            r = xt;
          ((n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = cr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = of++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    df = {
      readContext: Ge,
      useCallback: Ps,
      useContext: Ge,
      useEffect: Wu,
      useImperativeHandle: Ns,
      useInsertionEffect: Es,
      useLayoutEffect: Cs,
      useMemo: zs,
      useReducer: Hu,
      useRef: Ss,
      useState: function () {
        return Hu(fr);
      },
      useDebugValue: Qu,
      useDeferredValue: function (e) {
        var t = Ze();
        return Ls(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Hu(fr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: ps,
      useSyncExternalStore: ms,
      useId: Ts,
      unstable_isNewReconciler: !1,
    },
    pf = {
      readContext: Ge,
      useCallback: Ps,
      useContext: Ge,
      useEffect: Wu,
      useImperativeHandle: Ns,
      useInsertionEffect: Es,
      useLayoutEffect: Cs,
      useMemo: zs,
      useReducer: Bu,
      useRef: Ss,
      useState: function () {
        return Bu(fr);
      },
      useDebugValue: Qu,
      useDeferredValue: function (e) {
        var t = Ze();
        return me === null ? (t.memoizedState = e) : Ls(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Bu(fr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: ps,
      useSyncExternalStore: ms,
      useId: Ts,
      unstable_isNewReconciler: !1,
    };
  function ut(e, t) {
    if (e && e.defaultProps) {
      ((t = _({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ku(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Te(),
        l = Wt(e),
        u = _t(r, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = Vt(e, u, l)),
        t !== null && (st(t, e, l, r), tl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Te(),
        l = Wt(e),
        u = _t(r, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = Vt(e, u, l)),
        t !== null && (st(t, e, l, r), tl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Te(),
        r = Wt(e),
        l = _t(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Vt(e, l, r)),
        t !== null && (st(t, e, r, n), tl(t, e, r)));
    },
  };
  function Os(e, t, n, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Jn(n, r) || !Jn(l, u)
          : !0
    );
  }
  function Ds(e, t, n) {
    var r = !1,
      l = Ft,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Ge(u))
        : ((l = De(t) ? qt : Ce.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? Sn(e, l) : Ft)),
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
  function Is(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null));
  }
  function Xu(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Mu(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = Ge(u))
      : ((u = De(t) ? qt : Ce.current), (l.context = Sn(e, u))),
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
  function Ln(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += B(r)), (r = r.return));
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
  function Gu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var mf = typeof WeakMap == "function" ? WeakMap : Map;
  function Fs(e, t, n) {
    ((n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (vl || ((vl = !0), (ci = r)), Gu(e, t));
      }),
      n
    );
  }
  function Us(e, t, n) {
    ((n = _t(-1, n)), (n.tag = 3));
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
            typeof r != "function" && (Ht === null ? (Ht = new Set([this])) : Ht.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
        }),
      n
    );
  }
  function As(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new mf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = zf.bind(null, e, t, n)), t.then(e, e));
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
              (n.alternate === null ? (n.tag = 17) : ((t = _t(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var hf = Ee.ReactCurrentOwner,
    Ie = !1;
  function Le(e, t, n, r) {
    t.child = e === null ? os(t, null, n, r) : _n(t, e.child, n, r);
  }
  function Hs(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Pn(t, l),
      (r = Vu(e, t, n, r, u, l)),
      (n = $u()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Nt(e, t, l))
        : (ue && n && Eu(t), (t.flags |= 1), Le(e, t, r, l), t.child)
    );
  }
  function Bs(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !yi(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Ws(e, t, u, r, l))
        : ((e = xl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var i = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Jn), n(i, r) && e.ref === t.ref))
        return Nt(e, t, l);
    }
    return ((t.flags |= 1), (e = Kt(u, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ws(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Jn(u, r) && e.ref === t.ref)
        if (((Ie = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ie = !0);
        else return ((t.lanes = e.lanes), Nt(e, t, l));
    }
    return Zu(e, t, n, r, l);
  }
  function Qs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          b(Rn, Qe),
          (Qe |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            b(Rn, Qe),
            (Qe |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = u !== null ? u.baseLanes : n),
          b(Rn, Qe),
          (Qe |= r));
      }
    else
      (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        b(Rn, Qe),
        (Qe |= r));
    return (Le(e, t, l, n), t.child);
  }
  function Ks(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Zu(e, t, n, r, l) {
    var u = De(n) ? qt : Ce.current;
    return (
      (u = Sn(t, u)),
      Pn(t, l),
      (n = Vu(e, t, n, r, u, l)),
      (r = $u()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Nt(e, t, l))
        : (ue && r && Eu(t), (t.flags |= 1), Le(e, t, n, l), t.child)
    );
  }
  function Xs(e, t, n, r, l) {
    if (De(n)) {
      var u = !0;
      Xr(t);
    } else u = !1;
    if ((Pn(t, l), t.stateNode === null)) (fl(e, t), Ds(t, n, r), Xu(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var s = i.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Ge(p))
        : ((p = De(n) ? qt : Ce.current), (p = Sn(t, p)));
      var g = n.getDerivedStateFromProps,
        w = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      (w ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && Is(t, i, r, p)),
        (At = !1));
      var v = t.memoizedState;
      ((i.state = v),
        nl(t, r, i, l),
        (s = t.memoizedState),
        o !== r || v !== s || Oe.current || At
          ? (typeof g == "function" && (Ku(t, n, g, r), (s = t.memoizedState)),
            (o = At || Os(t, n, o, r, v, s, p))
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
        as(e, t),
        (o = t.memoizedProps),
        (p = t.type === t.elementType ? o : ut(t.type, o)),
        (i.props = p),
        (w = t.pendingProps),
        (v = i.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = De(n) ? qt : Ce.current), (s = Sn(t, s))));
      var x = n.getDerivedStateFromProps;
      ((g = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== w || v !== s) && Is(t, i, r, s)),
        (At = !1),
        (v = t.memoizedState),
        (i.state = v),
        nl(t, r, i, l));
      var N = t.memoizedState;
      o !== w || v !== N || Oe.current || At
        ? (typeof x == "function" && (Ku(t, n, x, r), (N = t.memoizedState)),
          (p = At || Os(t, n, p, r, v, N, s) || !1)
            ? (g ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, N, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, N, s)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = N)),
          (i.props = r),
          (i.state = N),
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
    Ks(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && Jo(t, n, !1), Nt(e, t, u));
    ((r = t.stateNode), (hf.current = t));
    var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = _n(t, e.child, null, u)), (t.child = _n(t, null, o, u)))
        : Le(e, t, o, u),
      (t.memoizedState = r.state),
      l && Jo(t, n, !0),
      t.child
    );
  }
  function Ys(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Zo(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Zo(e, t.context, !1),
      Ou(e, t.containerInfo));
  }
  function Gs(e, t, n, r, l) {
    return (Cn(), Pu(l), (t.flags |= 256), Le(e, t, n, r), t.child);
  }
  var Ju = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zs(e, t, n) {
    var r = t.pendingProps,
      l = oe.current,
      u = !1,
      i = (t.flags & 128) !== 0,
      o;
    if (
      ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      b(oe, l & 1),
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
                (e = sn(e, r, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = bu(n)),
                (t.memoizedState = Ju),
                e)
              : ei(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return vf(e, t, i, r, o, l, n);
    if (u) {
      ((u = r.fallback), (i = t.mode), (l = e.child), (o = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Kt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (u = Kt(o, u)) : ((u = sn(u, i, n, null)), (u.flags |= 2)),
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
        (t.memoizedState = Ju),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = Kt(u, { mode: "visible", children: r.children })),
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
      _n(t, e.child, null, n),
      (e = ei(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function vf(e, t, n, r, l, u, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Yu(Error(m(422)))), cl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = r.fallback),
            (l = t.mode),
            (r = El({ mode: "visible", children: r.children }, l, 0, null)),
            (u = sn(u, l, i, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            (t.mode & 1) !== 0 && _n(t, e.child, null, i),
            (t.child.memoizedState = bu(i)),
            (t.memoizedState = Ju),
            u);
    if ((t.mode & 1) === 0) return cl(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (u = Error(m(419))), (r = Yu(u, r, void 0)), cl(e, t, i, r));
    }
    if (((o = (i & e.childLanes) !== 0), Ie || o)) {
      if (((r = ge), r !== null)) {
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
          l !== 0 && l !== u.retryLane && ((u.retryLane = l), Ct(e, l), st(r, e, l, -1)));
      }
      return (vi(), (r = Yu(Error(m(421)))), cl(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Lf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (We = Dt(l.nextSibling)),
        (Be = t),
        (ue = !0),
        (lt = null),
        e !== null &&
          ((Xe[Ye++] = xt),
          (Xe[Ye++] = Et),
          (Xe[Ye++] = Jt),
          (xt = e.id),
          (Et = e.overflow),
          (Jt = t)),
        (t = ei(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function qs(e, t, n) {
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
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Le(e, t, r.children, n), (r = oe.current), (r & 2) !== 0))
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
    if ((b(oe, r), (t.mode & 1) === 0)) t.memoizedState = null;
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
  function Nt(e, t, n) {
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
  function yf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ys(t), Cn());
        break;
      case 5:
        ds(t);
        break;
      case 1:
        De(t.type) && Xr(t);
        break;
      case 4:
        Ou(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (b(br, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (b(oe, oe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Zs(e, t, n)
              : (b(oe, oe.current & 1), (e = Nt(e, t, n)), e !== null ? e.sibling : null);
        b(oe, oe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Js(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          b(oe, oe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Qs(e, t, n));
    }
    return Nt(e, t, n);
  }
  var bs, ni, ea, ta;
  ((bs = function (e, t) {
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
    (ea = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), tn(mt.current));
        var u = null;
        switch (n) {
          case "input":
            ((l = Rl(e, l)), (r = Rl(e, r)), (u = []));
            break;
          case "select":
            ((l = _({}, l, { value: void 0 })), (r = _({}, r, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = Ol(e, l)), (r = Ol(e, r)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
        }
        Il(n, r);
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
                (j.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
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
                    (j.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && ee("scroll", e), u || o === s || (u = []))
                      : (u = u || []).push(p, s));
        }
        n && (u = u || []).push("style", n);
        var p = u;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (ta = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function pr(e, t) {
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
  function gf(e, t, n) {
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
        return (Ne(t), null);
      case 1:
        return (De(t.type) && Kr(), Ne(t), null);
      case 3:
        return (
          (r = t.stateNode),
          zn(),
          te(Oe),
          te(Ce),
          Fu(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (qr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), lt !== null && (pi(lt), (lt = null)))),
          ni(e, t),
          Ne(t),
          null
        );
      case 5:
        Du(t);
        var l = tn(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ea(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Ne(t), null);
          }
          if (((e = tn(mt.current)), qr(t))) {
            ((r = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((r[pt] = t), (r[rr] = u), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < er.length; l++) ee(er[l], r);
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
                (Oi(r, u), ee("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!u.multiple }), ee("invalid", r));
                break;
              case "textarea":
                (Fi(r, u), ee("invalid", r));
            }
            (Il(n, u), (l = null));
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
                  : j.hasOwnProperty(i) && o != null && i === "onScroll" && ee("scroll", r);
              }
            switch (n) {
              case "input":
                (kr(r), Ii(r, u, !0));
                break;
              case "textarea":
                (kr(r), Ai(r));
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
              (e[pt] = t),
              (e[rr] = r),
              bs(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Fl(n, r)), n)) {
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
                  for (l = 0; l < er.length; l++) ee(er[l], e);
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
                  (Oi(e, r), (l = Rl(e, r)), ee("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    ee("invalid", e));
                  break;
                case "textarea":
                  (Fi(e, r), (l = Ol(e, r)), ee("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Il(n, l), (o = l));
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? Bi(e, s)
                    : u === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && $i(e, s))
                      : u === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Dn(e, s)
                          : typeof s == "number" && Dn(e, "" + s)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (j.hasOwnProperty(u)
                            ? s != null && u === "onScroll" && ee("scroll", e)
                            : s != null && be(e, u, s, i));
                }
              switch (n) {
                case "input":
                  (kr(e), Ii(e, r, !1));
                  break;
                case "textarea":
                  (kr(e), Ai(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Z(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? an(e, !!r.multiple, u, !1)
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
        return (Ne(t), null);
      case 6:
        if (e && t.stateNode != null) ta(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = tn(sr.current)), tn(mt.current), qr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (u = r.nodeValue !== n) && ((e = Be), e !== null))
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
              (r[pt] = t),
              (t.stateNode = r));
        }
        return (Ne(t), null);
      case 13:
        if (
          (te(oe),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ue && We !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ls(), Cn(), (t.flags |= 98560), (u = !1));
          else if (((u = qr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(m(317));
              u[pt] = t;
            } else (Cn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ne(t), (u = !1));
          } else (lt !== null && (pi(lt), (lt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (oe.current & 1) !== 0 ? he === 0 && (he = 3) : vi())),
            t.updateQueue !== null && (t.flags |= 4),
            Ne(t),
            null);
      case 4:
        return (zn(), ni(e, t), e === null && tr(t.stateNode.containerInfo), Ne(t), null);
      case 10:
        return (Tu(t.type._context), Ne(t), null);
      case 17:
        return (De(t.type) && Kr(), Ne(t), null);
      case 19:
        if ((te(oe), (u = t.memoizedState), u === null)) return (Ne(t), null);
        if (((r = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) pr(u, !1);
          else {
            if (he !== 0 || (e !== null && (e.flags & 128) !== 0))
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
                  return (b(oe, (oe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              fe() > jn &&
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
                u.tail === null && u.tailMode === "hidden" && !i.alternate && !ue)
              )
                return (Ne(t), null);
            } else
              2 * fe() - u.renderingStartTime > jn &&
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
            (u.renderingStartTime = fe()),
            (t.sibling = null),
            (n = oe.current),
            b(oe, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ne(t), null);
      case 22:
      case 23:
        return (
          hi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Qe & 1073741824) !== 0 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
  function wf(e, t) {
    switch ((Cu(t), t.tag)) {
      case 1:
        return (
          De(t.type) && Kr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          zn(),
          te(Oe),
          te(Ce),
          Fu(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Du(t), null);
      case 13:
        if ((te(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          Cn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (te(oe), null);
      case 4:
        return (zn(), null);
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
    Pe = !1,
    kf = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;
  function Tn(e, t) {
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
  function ri(e, t, n) {
    try {
      n();
    } catch (r) {
      ce(e, t, r);
    }
  }
  var na = !1;
  function Sf(e, t) {
    if (((hu = jr), (e = Oo()), ou(e))) {
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
                var x;
                w !== n || (l !== 0 && w.nodeType !== 3) || (o = i + l),
                  w !== u || (r !== 0 && w.nodeType !== 3) || (s = i + r),
                  w.nodeType === 3 && (i += w.nodeValue.length),
                  (x = w.firstChild) !== null;
              )
                ((v = w), (w = x));
              for (;;) {
                if (w === e) break t;
                if (
                  (v === n && ++p === l && (o = i),
                  v === u && ++g === r && (s = i),
                  (x = w.nextSibling) !== null)
                )
                  break;
                ((w = v), (v = w.parentNode));
              }
              w = x;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (vu = { focusedElem: e, selectionRange: n }, jr = !1, C = t; C !== null;)
      if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (C = e));
      else
        for (; C !== null;) {
          t = C;
          try {
            var N = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (N !== null) {
                    var z = N.memoizedProps,
                      de = N.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? z : ut(t.type, z),
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
          } catch (k) {
            ce(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (C = e));
            break;
          }
          C = t.return;
        }
    return ((N = na), (na = !1), N);
  }
  function mr(e, t, n) {
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
  function ra(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ra(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[pt], delete t[rr], delete t[ku], delete t[nf], delete t[rf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function la(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ua(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || la(e.return)) return null;
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
            n != null || t.onclick !== null || (t.onclick = Wr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ui(e, t, n), e = e.sibling; e !== null;) (ui(e, t, n), (e = e.sibling));
  }
  function ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ii(e, t, n), e = e.sibling; e !== null;) (ii(e, t, n), (e = e.sibling));
  }
  var Se = null,
    it = !1;
  function $t(e, t, n) {
    for (n = n.child; n !== null;) (ia(e, t, n), (n = n.sibling));
  }
  function ia(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Nr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Pe || Tn(n, t);
      case 6:
        var r = Se,
          l = it;
        ((Se = null),
          $t(e, t, n),
          (Se = r),
          (it = l),
          Se !== null &&
            (it
              ? ((e = Se),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Se.removeChild(n.stateNode)));
        break;
      case 18:
        Se !== null &&
          (it
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? wu(e.parentNode, n) : e.nodeType === 1 && wu(e, n),
              Kn(e))
            : wu(Se, n.stateNode));
        break;
      case 4:
        ((r = Se),
          (l = it),
          (Se = n.stateNode.containerInfo),
          (it = !0),
          $t(e, t, n),
          (Se = r),
          (it = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            ((u = u.tag),
              i !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && ri(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        $t(e, t, n);
        break;
      case 1:
        if (!Pe && (Tn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (o) {
            ce(n, t, o);
          }
        $t(e, t, n);
        break;
      case 21:
        $t(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Pe = (r = Pe) || n.memoizedState !== null), $t(e, t, n), (Pe = r))
          : $t(e, t, n);
        break;
      default:
        $t(e, t, n);
    }
  }
  function oa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new kf()),
        t.forEach(function (r) {
          var l = Tf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function ot(e, t) {
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
                ((Se = o.stateNode), (it = !1));
                break e;
              case 3:
                ((Se = o.stateNode.containerInfo), (it = !0));
                break e;
              case 4:
                ((Se = o.stateNode.containerInfo), (it = !0));
                break e;
            }
            o = o.return;
          }
          if (Se === null) throw Error(m(160));
          (ia(u, i, l), (Se = null), (it = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          ce(l, t, p);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (sa(t, e), (t = t.sibling));
  }
  function sa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ot(t, e), vt(e), r & 4)) {
          try {
            (mr(3, e, e.return), pl(3, e));
          } catch (z) {
            ce(e, e.return, z);
          }
          try {
            mr(5, e, e.return);
          } catch (z) {
            ce(e, e.return, z);
          }
        }
        break;
      case 1:
        (ot(t, e), vt(e), r & 512 && n !== null && Tn(n, n.return));
        break;
      case 5:
        if ((ot(t, e), vt(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Dn(l, "");
          } catch (z) {
            ce(e, e.return, z);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = n !== null ? n.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === "input" && u.type === "radio" && u.name != null && Di(l, u), Fl(o, i));
              var p = Fl(o, u);
              for (i = 0; i < s.length; i += 2) {
                var g = s[i],
                  w = s[i + 1];
                g === "style"
                  ? Bi(l, w)
                  : g === "dangerouslySetInnerHTML"
                    ? $i(l, w)
                    : g === "children"
                      ? Dn(l, w)
                      : be(l, g, w, p);
              }
              switch (o) {
                case "input":
                  jl(l, u);
                  break;
                case "textarea":
                  Ui(l, u);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var x = u.value;
                  x != null
                    ? an(l, !!u.multiple, x, !1)
                    : v !== !!u.multiple &&
                      (u.defaultValue != null
                        ? an(l, !!u.multiple, u.defaultValue, !0)
                        : an(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[rr] = u;
            } catch (z) {
              ce(e, e.return, z);
            }
        }
        break;
      case 6:
        if ((ot(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (z) {
            ce(e, e.return, z);
          }
        }
        break;
      case 3:
        if ((ot(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Kn(t.containerInfo);
          } catch (z) {
            ce(e, e.return, z);
          }
        break;
      case 4:
        (ot(t, e), vt(e));
        break;
      case 13:
        (ot(t, e),
          vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (ai = fe())),
          r & 4 && oa(e));
        break;
      case 22:
        if (
          ((g = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Pe = (p = Pe) || g), ot(t, e), (Pe = p)) : ot(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !g && (e.mode & 1) !== 0)
          )
            for (C = e, g = e.child; g !== null;) {
              for (w = C = g; C !== null;) {
                switch (((v = C), (x = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, v, v.return);
                    break;
                  case 1:
                    Tn(v, v.return);
                    var N = v.stateNode;
                    if (typeof N.componentWillUnmount == "function") {
                      ((r = v), (n = v.return));
                      try {
                        ((t = r),
                          (N.props = t.memoizedProps),
                          (N.state = t.memoizedState),
                          N.componentWillUnmount());
                      } catch (z) {
                        ce(r, n, z);
                      }
                    }
                    break;
                  case 5:
                    Tn(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      fa(w);
                      continue;
                    }
                }
                x !== null ? ((x.return = v), (C = x)) : fa(w);
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
        (ot(t, e), vt(e), r & 4 && oa(e));
        break;
      case 21:
        break;
      default:
        (ot(t, e), vt(e));
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (la(n)) {
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
            var u = ua(e);
            ii(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = ua(e);
            ui(e, o, i);
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
  function xf(e, t, n) {
    ((C = e), aa(e));
  }
  function aa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null;) {
      var l = C,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || dl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Pe;
          o = dl;
          var p = Pe;
          if (((dl = i), (Pe = s) && !p))
            for (C = l; C !== null;)
              ((i = C),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? da(l)
                  : s !== null
                    ? ((s.return = i), (C = s))
                    : da(l));
          for (; u !== null;) ((C = u), aa(u), (u = u.sibling));
          ((C = l), (dl = o), (Pe = p));
        }
        ca(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = l), (C = u)) : ca(e);
    }
  }
  function ca(e) {
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
                      t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = t.updateQueue;
                u !== null && fs(t, u, r);
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
                  fs(t, i, n);
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
          Pe || (t.flags & 512 && li(t));
        } catch (v) {
          ce(t, t.return, v);
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
  function fa(e) {
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
  function da(e) {
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
            var u = t.return;
            try {
              li(t);
            } catch (s) {
              ce(t, u, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              li(t);
            } catch (s) {
              ce(t, i, s);
            }
        }
      } catch (s) {
        ce(t, t.return, s);
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
  var Ef = Math.ceil,
    ml = Ee.ReactCurrentDispatcher,
    oi = Ee.ReactCurrentOwner,
    qe = Ee.ReactCurrentBatchConfig,
    H = 0,
    ge = null,
    pe = null,
    xe = 0,
    Qe = 0,
    Rn = It(0),
    he = 0,
    hr = null,
    rn = 0,
    hl = 0,
    si = 0,
    vr = null,
    Fe = null,
    ai = 0,
    jn = 1 / 0,
    Pt = null,
    vl = !1,
    ci = null,
    Ht = null,
    yl = !1,
    Bt = null,
    gl = 0,
    yr = 0,
    fi = null,
    wl = -1,
    kl = 0;
  function Te() {
    return (H & 6) !== 0 ? fe() : wl !== -1 ? wl : (wl = fe());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (H & 2) !== 0 && xe !== 0
        ? xe & -xe
        : uf.transition !== null
          ? (kl === 0 && (kl = lo()), kl)
          : ((e = q), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mo(e.type))), e);
  }
  function st(e, t, n, r) {
    if (50 < yr) throw ((yr = 0), (fi = null), Error(m(185)));
    ($n(e, n, r),
      ((H & 2) === 0 || e !== ge) &&
        (e === ge && ((H & 2) === 0 && (hl |= n), he === 4 && Qt(e, xe)),
        Ue(e, r),
        n === 1 && H === 0 && (t.mode & 1) === 0 && ((jn = fe() + 500), Yr && Ut())));
  }
  function Ue(e, t) {
    var n = e.callbackNode;
    uc(e, t);
    var r = Lr(e, e === ge ? xe : 0);
    if (r === 0) (n !== null && to(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && to(n), t === 1))
        (e.tag === 0 ? lf(ma.bind(null, e)) : bo(ma.bind(null, e)),
          ef(function () {
            (H & 6) === 0 && Ut();
          }),
          (n = null));
      else {
        switch (uo(r)) {
          case 1:
            n = Wl;
            break;
          case 4:
            n = no;
            break;
          case 16:
            n = _r;
            break;
          case 536870912:
            n = ro;
            break;
          default:
            n = _r;
        }
        n = xa(n, pa.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function pa(e, t) {
    if (((wl = -1), (kl = 0), (H & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Mn() && e.callbackNode !== n) return null;
    var r = Lr(e, e === ge ? xe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = H;
      H |= 2;
      var u = va();
      (ge !== e || xe !== t) && ((Pt = null), (jn = fe() + 500), un(e, t));
      do
        try {
          Nf();
          break;
        } catch (o) {
          ha(e, o);
        }
      while (!0);
      (Lu(), (ml.current = u), (H = l), pe !== null ? (t = 0) : ((ge = null), (xe = 0), (t = he)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Ql(e)), l !== 0 && ((r = l), (t = di(e, l)))), t === 1))
        throw ((n = hr), un(e, 0), Qt(e, r), Ue(e, fe()), n);
      if (t === 6) Qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Cf(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((u = Ql(e)), u !== 0 && ((r = u), (t = di(e, u)))),
            t === 1))
        )
          throw ((n = hr), un(e, 0), Qt(e, r), Ue(e, fe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            on(e, Fe, Pt);
            break;
          case 3:
            if ((Qt(e, r), (r & 130023424) === r && ((t = ai + 500 - fe()), 10 < t))) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Te(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = gu(on.bind(null, e, Fe, Pt), t);
              break;
            }
            on(e, Fe, Pt);
            break;
          case 4:
            if ((Qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var i = 31 - nt(r);
              ((u = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~u));
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
              e.timeoutHandle = gu(on.bind(null, e, Fe, Pt), r);
              break;
            }
            on(e, Fe, Pt);
            break;
          case 5:
            on(e, Fe, Pt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (Ue(e, fe()), e.callbackNode === n ? pa.bind(null, e) : null);
  }
  function di(e, t) {
    var n = vr;
    return (
      e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = Fe), (Fe = n), t !== null && pi(t)),
      e
    );
  }
  function pi(e) {
    Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
  }
  function Cf(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!rt(u(), l)) return !1;
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
      t &= ~si, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - nt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ma(e) {
    if ((H & 6) !== 0) throw Error(m(327));
    Mn();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return (Ue(e, fe()), null);
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ql(e);
      r !== 0 && ((t = r), (n = di(e, r)));
    }
    if (n === 1) throw ((n = hr), un(e, 0), Qt(e, t), Ue(e, fe()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      on(e, Fe, Pt),
      Ue(e, fe()),
      null
    );
  }
  function mi(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      ((H = n), H === 0 && ((jn = fe() + 500), Yr && Ut()));
    }
  }
  function ln(e) {
    Bt !== null && Bt.tag === 0 && (H & 6) === 0 && Mn();
    var t = H;
    H |= 1;
    var n = qe.transition,
      r = q;
    try {
      if (((qe.transition = null), (q = 1), e)) return e();
    } finally {
      ((q = r), (qe.transition = n), (H = t), (H & 6) === 0 && Ut());
    }
  }
  function hi() {
    ((Qe = Rn.current), te(Rn));
  }
  function un(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), bc(n)), pe !== null))
      for (n = pe.return; n !== null;) {
        var r = n;
        switch ((Cu(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Kr());
            break;
          case 3:
            (zn(), te(Oe), te(Ce), Fu());
            break;
          case 5:
            Du(r);
            break;
          case 4:
            zn();
            break;
          case 13:
            te(oe);
            break;
          case 19:
            te(oe);
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
      ((ge = e),
      (pe = e = Kt(e.current, null)),
      (xe = Qe = t),
      (he = 0),
      (hr = null),
      (si = hl = rn = 0),
      (Fe = vr = null),
      en !== null)
    ) {
      for (t = 0; t < en.length; t++)
        if (((n = en[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            u = n.pending;
          if (u !== null) {
            var i = u.next;
            ((u.next = l), (r.next = i));
          }
          n.pending = r;
        }
      en = null;
    }
    return e;
  }
  function ha(e, t) {
    do {
      var n = pe;
      try {
        if ((Lu(), (ll.current = sl), ul)) {
          for (var r = se.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ul = !1;
        }
        if (
          ((nn = 0),
          (ye = me = se = null),
          (ar = !1),
          (cr = 0),
          (oi.current = null),
          n === null || n.return === null)
        ) {
          ((he = 1), (hr = t), (pe = null));
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
            var x = Vs(i);
            if (x !== null) {
              ((x.flags &= -257), $s(x, i, o, u, t), x.mode & 1 && As(u, p, t), (t = x), (s = p));
              var N = t.updateQueue;
              if (N === null) {
                var z = new Set();
                (z.add(s), (t.updateQueue = z));
              } else N.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (As(u, p, t), vi());
                break e;
              }
              s = Error(m(426));
            }
          } else if (ue && o.mode & 1) {
            var de = Vs(i);
            if (de !== null) {
              ((de.flags & 65536) === 0 && (de.flags |= 256), $s(de, i, o, u, t), Pu(Ln(s, o)));
              break e;
            }
          }
          ((u = s = Ln(s, o)),
            he !== 4 && (he = 2),
            vr === null ? (vr = [u]) : vr.push(u),
            (u = i));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var f = Fs(u, s, t);
                cs(u, f);
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
                  var k = Us(u, o, t);
                  cs(u, k);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ga(n);
      } catch (L) {
        ((t = L), pe === n && n !== null && (pe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function va() {
    var e = ml.current;
    return ((ml.current = sl), e === null ? sl : e);
  }
  function vi() {
    ((he === 0 || he === 3 || he === 2) && (he = 4),
      ge === null || ((rn & 268435455) === 0 && (hl & 268435455) === 0) || Qt(ge, xe));
  }
  function Sl(e, t) {
    var n = H;
    H |= 2;
    var r = va();
    (ge !== e || xe !== t) && ((Pt = null), un(e, t));
    do
      try {
        _f();
        break;
      } catch (l) {
        ha(e, l);
      }
    while (!0);
    if ((Lu(), (H = n), (ml.current = r), pe !== null)) throw Error(m(261));
    return ((ge = null), (xe = 0), he);
  }
  function _f() {
    for (; pe !== null;) ya(pe);
  }
  function Nf() {
    for (; pe !== null && !Za();) ya(pe);
  }
  function ya(e) {
    var t = Sa(e.alternate, e, Qe);
    ((e.memoizedProps = e.pendingProps), t === null ? ga(e) : (pe = t), (oi.current = null));
  }
  function ga(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = gf(n, t, Qe)), n !== null)) {
          pe = n;
          return;
        }
      } else {
        if (((n = wf(n, t)), n !== null)) {
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
  function on(e, t, n) {
    var r = q,
      l = qe.transition;
    try {
      ((qe.transition = null), (q = 1), Pf(e, t, n, r));
    } finally {
      ((qe.transition = l), (q = r));
    }
    return null;
  }
  function Pf(e, t, n, r) {
    do Mn();
    while (Bt !== null);
    if ((H & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (ic(e, u),
      e === ge && ((pe = ge = null), (xe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        yl ||
        ((yl = !0),
        xa(_r, function () {
          return (Mn(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = qe.transition), (qe.transition = null));
      var i = q;
      q = 1;
      var o = H;
      ((H |= 4),
        (oi.current = null),
        Sf(e, n),
        sa(n, e),
        Kc(vu),
        (jr = !!hu),
        (vu = hu = null),
        (e.current = n),
        xf(n),
        qa(),
        (H = o),
        (q = i),
        (qe.transition = u));
    } else e.current = n;
    if (
      (yl && ((yl = !1), (Bt = e), (gl = l)),
      (u = e.pendingLanes),
      u === 0 && (Ht = null),
      ec(n.stateNode),
      Ue(e, fe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (vl) throw ((vl = !1), (e = ci), (ci = null), e);
    return (
      (gl & 1) !== 0 && e.tag !== 0 && Mn(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === fi ? yr++ : ((yr = 0), (fi = e))) : (yr = 0),
      Ut(),
      null
    );
  }
  function Mn() {
    if (Bt !== null) {
      var e = uo(gl),
        t = qe.transition,
        n = q;
      try {
        if (((qe.transition = null), (q = 16 > e ? 16 : e), Bt === null)) var r = !1;
        else {
          if (((e = Bt), (Bt = null), (gl = 0), (H & 6) !== 0)) throw Error(m(331));
          var l = H;
          for (H |= 4, C = e.current; C !== null;) {
            var u = C,
              i = u.child;
            if ((C.flags & 16) !== 0) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (C = p; C !== null;) {
                    var g = C;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, g, u);
                    }
                    var w = g.child;
                    if (w !== null) ((w.return = g), (C = w));
                    else
                      for (; C !== null;) {
                        g = C;
                        var v = g.sibling,
                          x = g.return;
                        if ((ra(g), g === p)) {
                          C = null;
                          break;
                        }
                        if (v !== null) {
                          ((v.return = x), (C = v));
                          break;
                        }
                        C = x;
                      }
                  }
                }
                var N = u.alternate;
                if (N !== null) {
                  var z = N.child;
                  if (z !== null) {
                    N.child = null;
                    do {
                      var de = z.sibling;
                      ((z.sibling = null), (z = de));
                    } while (z !== null);
                  }
                }
                C = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = u), (C = i));
            else
              e: for (; C !== null;) {
                if (((u = C), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(9, u, u.return);
                  }
                var f = u.sibling;
                if (f !== null) {
                  ((f.return = u.return), (C = f));
                  break e;
                }
                C = u.return;
              }
          }
          var a = e.current;
          for (C = a; C !== null;) {
            i = C;
            var d = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = i), (C = d));
            else
              e: for (i = a; C !== null;) {
                if (((o = C), (o.flags & 2048) !== 0))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, o);
                    }
                  } catch (L) {
                    ce(o, o.return, L);
                  }
                if (o === i) {
                  C = null;
                  break e;
                }
                var k = o.sibling;
                if (k !== null) {
                  ((k.return = o.return), (C = k));
                  break e;
                }
                C = o.return;
              }
          }
          if (((H = l), Ut(), dt && typeof dt.onPostCommitFiberRoot == "function"))
            try {
              dt.onPostCommitFiberRoot(Nr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((q = n), (qe.transition = t));
      }
    }
    return !1;
  }
  function wa(e, t, n) {
    ((t = Ln(n, t)),
      (t = Fs(e, t, 1)),
      (e = Vt(e, t, 1)),
      (t = Te()),
      e !== null && ($n(e, 1, t), Ue(e, t)));
  }
  function ce(e, t, n) {
    if (e.tag === 3) wa(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          wa(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" && (Ht === null || !Ht.has(r)))
          ) {
            ((e = Ln(n, e)),
              (e = Us(t, e, 1)),
              (t = Vt(t, e, 1)),
              (e = Te()),
              t !== null && ($n(t, 1, e), Ue(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function zf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Te()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ge === e &&
        (xe & n) === n &&
        (he === 4 || (he === 3 && (xe & 130023424) === xe && 500 > fe() - ai)
          ? un(e, 0)
          : (si |= n)),
      Ue(e, t));
  }
  function ka(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = Te();
    ((e = Ct(e, t)), e !== null && ($n(e, t, n), Ue(e, n)));
  }
  function Lf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ka(e, n));
  }
  function Tf(e, t) {
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
      if (e.memoizedProps !== t.pendingProps || Oe.current) Ie = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Ie = !1), yf(e, t, n));
        Ie = (e.flags & 131072) !== 0;
      }
    else ((Ie = !1), ue && (t.flags & 1048576) !== 0 && es(t, Zr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (fl(e, t), (e = t.pendingProps));
        var l = Sn(t, Ce.current);
        (Pn(t, n), (l = Vu(null, t, r, e, l, n)));
        var u = $u();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              De(r) ? ((u = !0), Xr(t)) : (u = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Mu(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Xu(t, r, e, n),
              (t = qu(null, t, r, !0, u, n)))
            : ((t.tag = 0), ue && u && Eu(t), Le(null, t, l, n), (t = t.child)),
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
            (l = t.tag = jf(r)),
            (e = ut(r, e)),
            l)
          ) {
            case 0:
              t = Zu(null, t, r, e, n);
              break e;
            case 1:
              t = Xs(null, t, r, e, n);
              break e;
            case 11:
              t = Hs(null, t, r, e, n);
              break e;
            case 14:
              t = Bs(null, t, r, ut(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          Zu(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          Xs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ys(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            as(e, t),
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
              ((l = Ln(Error(m(423)), t)), (t = Gs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Ln(Error(m(424)), t)), (t = Gs(e, t, r, n, l)));
              break e;
            } else
              for (
                We = Dt(t.stateNode.containerInfo.firstChild),
                  Be = t,
                  ue = !0,
                  lt = null,
                  n = os(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Cn(), r === l)) {
              t = Nt(e, t, n);
              break e;
            }
            Le(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ds(t),
          e === null && Nu(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          yu(r, l) ? (i = null) : u !== null && yu(r, u) && (t.flags |= 32),
          Ks(e, t),
          Le(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Nu(t), null);
      case 13:
        return Zs(e, t, n);
      case 4:
        return (
          Ou(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = _n(t, null, r, n)) : Le(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          Hs(e, t, r, l, n)
        );
      case 7:
        return (Le(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Le(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Le(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (i = l.value),
            b(br, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (rt(u.value, i)) {
              if (u.children === l.children && !Oe.current) {
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
                        ((s = _t(-1, n & -n)), (s.tag = 2));
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
          (Le(e, t, l.children, n), (t = t.child));
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
          Le(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = ut(r, t.pendingProps)), (l = ut(r.type, l)), Bs(e, t, r, l, n));
      case 15:
        return Ws(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          fl(e, t),
          (t.tag = 1),
          De(r) ? ((e = !0), Xr(t)) : (e = !1),
          Pn(t, n),
          Ds(t, r, l),
          Xu(t, r, l, n),
          qu(null, t, r, !0, e, n)
        );
      case 19:
        return Js(e, t, n);
      case 22:
        return Qs(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function xa(e, t) {
    return eo(e, t);
  }
  function Rf(e, t, n, r) {
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
    return new Rf(e, t, n, r);
  }
  function yi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function jf(e) {
    if (typeof e == "function") return yi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ct)) return 11;
      if (e === ft) return 14;
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
  function xl(e, t, n, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == "function")) yi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case je:
          return sn(n.children, l, u, t);
        case Ke:
          ((i = 8), (l |= 8));
          break;
        case zt:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = zt), (e.lanes = u), e);
        case Ve:
          return ((e = Je(13, n, t, l)), (e.elementType = Ve), (e.lanes = u), e);
        case tt:
          return ((e = Je(19, n, t, l)), (e.elementType = tt), (e.lanes = u), e);
        case ae:
          return El(n, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case wt:
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
              case Me:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return ((t = Je(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = u), t);
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
  function Mf(e, t, n, r, l) {
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
      (e = new Mf(e, t, n, o, s)),
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
      Mu(u),
      e
    );
  }
  function Of(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ze,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Ea(e) {
    if (!e) return Ft;
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
      if (De(n)) return qo(e, n, t);
    }
    return t;
  }
  function Ca(e, t, n, r, l, u, i, o, s) {
    return (
      (e = ki(n, r, !0, e, l, u, i, o, s)),
      (e.context = Ea(null)),
      (n = e.current),
      (r = Te()),
      (l = Wt(n)),
      (u = _t(r, l)),
      (u.callback = t ?? null),
      Vt(n, u, l),
      (e.current.lanes = l),
      $n(e, l, r),
      Ue(e, r),
      e
    );
  }
  function Cl(e, t, n, r) {
    var l = t.current,
      u = Te(),
      i = Wt(l);
    return (
      (n = Ea(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = _t(u, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Vt(l, t, i)),
      e !== null && (st(e, l, i, u), tl(e, l, i)),
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
  function _a(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Si(e, t) {
    (_a(e, t), (e = e.alternate) && _a(e, t));
  }
  function Df() {
    return null;
  }
  var Na =
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
          (ln(function () {
            Cl(null, e, null, null);
          }),
            (t[kt] = null));
        }
      }));
  function Nl(e) {
    this._internalRoot = e;
  }
  Nl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = so();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
      (jt.splice(n, 0, e), n === 0 && fo(e));
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
  function Pa() {}
  function If(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = _l(i);
          u.call(p);
        };
      }
      var i = Ca(t, r, e, 0, null, !1, !1, "", Pa);
      return (
        (e._reactRootContainer = i),
        (e[kt] = i.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        ln(),
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
    var s = ki(e, 0, !1, null, null, !1, !1, "", Pa);
    return (
      (e._reactRootContainer = s),
      (e[kt] = s.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      ln(function () {
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
    } else i = If(n, t, e, l, r);
    return _l(i);
  }
  ((io = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), Ue(t, fe()), (H & 6) === 0 && ((jn = fe() + 500), Ut()));
        }
        break;
      case 13:
        (ln(function () {
          var r = Ct(e, 1);
          if (r !== null) {
            var l = Te();
            st(r, e, 1, l);
          }
        }),
          Si(e, 1));
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var t = Ct(e, 134217728);
        if (t !== null) {
          var n = Te();
          st(t, e, 134217728, n);
        }
        Si(e, 134217728);
      }
    }),
    (oo = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = Ct(e, t);
        if (n !== null) {
          var r = Te();
          st(n, e, t, r);
        }
        Si(e, t);
      }
    }),
    (so = function () {
      return q;
    }),
    (ao = function (e, t) {
      var n = q;
      try {
        return ((q = e), t());
      } finally {
        q = n;
      }
    }),
    (Vl = function (e, t, n) {
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
                (Mi(r), jl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Ui(e, n);
          break;
        case "select":
          ((t = n.value), t != null && an(e, !!n.multiple, t, !1));
      }
    }),
    (Xi = mi),
    (Yi = ln));
  var Ff = { usingClientEntryPoint: !1, Events: [lr, wn, Qr, Qi, Ki, mi] },
    gr = {
      findFiberByHostInstance: Zt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Uf = {
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
        return ((e = Ji(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: gr.findFiberByHostInstance || Df,
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
        ((Nr = Ll.inject(Uf)), (dt = Ll));
      } catch {}
  }
  return (
    (Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ff),
    (Ae.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ei(t)) throw Error(m(200));
      return Of(e, t, null, n);
    }),
    (Ae.createRoot = function (e, t) {
      if (!Ei(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = Na;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ki(e, 1, !1, null, null, n, !1, r, l)),
        (e[kt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new xi(t)
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
      return ((e = Ji(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ae.flushSync = function (e) {
      return ln(e);
    }),
    (Ae.hydrate = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return zl(null, e, t, !0, n);
    }),
    (Ae.hydrateRoot = function (e, t, n) {
      if (!Ei(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        i = Na;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Ca(t, null, e, 1, n ?? null, l, !1, u, i)),
        (e[kt] = t.current),
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
    (Ae.render = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return zl(null, e, t, !1, n);
    }),
    (Ae.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (ln(function () {
            zl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[kt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ae.unstable_batchedUpdates = mi),
    (Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Pl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return zl(e, t, n, !1, r);
    }),
    (Ae.version = "18.3.1-next-f1338f8080-20240426"),
    Ae
  );
}
var Da;
function Kf() {
  if (Da) return Ni.exports;
  Da = 1;
  function h() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (E) {
        console.error(E);
      }
  }
  return (h(), (Ni.exports = Qf()), Ni.exports);
}
var Ia;
function Xf() {
  if (Ia) return Tl;
  Ia = 1;
  var h = Kf();
  return ((Tl.createRoot = h.createRoot), (Tl.hydrateRoot = h.hydrateRoot), Tl);
}
var Yf = Xf();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = (h) => h.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Fa = (...h) =>
    h
      .filter((E, m, M) => !!E && E.trim() !== "" && M.indexOf(E) === m)
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
 */ const qf = Re.forwardRef(
  (
    {
      color: h = "currentColor",
      size: E = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: M,
      className: j = "",
      children: I,
      iconNode: ne,
      ...ie
    },
    $,
  ) =>
    Re.createElement(
      "svg",
      {
        ref: $,
        ...Zf,
        width: E,
        height: E,
        stroke: h,
        strokeWidth: M ? (Number(m) * 24) / Number(E) : m,
        className: Fa("lucide", j),
        ...ie,
      },
      [...ne.map(([A, re]) => Re.createElement(A, re)), ...(Array.isArray(I) ? I : [I])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yt = (h, E) => {
  const m = Re.forwardRef(({ className: M, ...j }, I) =>
    Re.createElement(qf, { ref: I, iconNode: E, className: Fa(`lucide-${Gf(h)}`, M), ...j }),
  );
  return ((m.displayName = `${h}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = yt("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bf = yt("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ed = yt("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const td = yt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nd = yt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rd = yt("Play", [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ua = yt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ld = yt("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Aa = yt("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ud = yt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function Va(h) {
  return `#${h}`;
}
function $a(h) {
  const E = h.replace(/^\//, "").replace(/\/$/, "");
  return E ? `#/${E}` : "#/";
}
function Ri(h) {
  const E = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return E
    ? E.startsWith("/")
      ? { kind: "route", path: E.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: E }
    : null;
}
function ji(h, E = "smooth") {
  if (typeof document > "u") return !1;
  const m = document.getElementById(h);
  return m ? (m.scrollIntoView({ behavior: E, block: "start" }), !0) : !1;
}
function id(h, E = "smooth") {
  if (typeof window > "u") return;
  const m = Va(h);
  if (ji(h, E)) {
    window.history.replaceState(null, "", m);
    return;
  }
  window.location.hash = m;
}
function od(h) {
  typeof window > "u" || (window.location.hash = $a(h));
}
function sd() {
  const h = Ri();
  return (h == null ? void 0 : h.kind) === "route" ? h.path : "";
}
function ad(h) {
  return h.kind === "route" ? $a(h.path) : Va(h.id);
}
function cd(h, E) {
  if ((h.preventDefault(), E.kind === "route")) {
    od(E.path);
    return;
  }
  id(E.id);
}
function fd() {
  if (typeof window > "u") return;
  const h = Ri();
  (h == null ? void 0 : h.kind) === "section" && requestAnimationFrame(() => ji(h.id, "auto"));
}
function dd(h, E) {
  if (typeof window > "u") return () => {};
  const m = () => {
    const M = Ri();
    if (!M) {
      h("");
      return;
    }
    if (M.kind === "route") {
      h(M.path);
      return;
    }
    (ji(M.id, "smooth"), h(""));
  };
  return (
    m(),
    window.addEventListener("hashchange", m),
    () => window.removeEventListener("hashchange", m)
  );
}
function pd({ src: h, className: E, style: m }) {
  const M = Re.useRef(null),
    j = Re.useRef(null),
    I = Re.useRef(!1),
    [ne, ie] = Re.useState(!1),
    $ = (A, re = 500) => {
      const K = M.current;
      if (!K || ne) return;
      j.current !== null && (cancelAnimationFrame(j.current), (j.current = null));
      const X = K.style.opacity ? parseFloat(K.style.opacity) : 0,
        ke = performance.now(),
        ve = (G) => {
          const Y = Math.min((G - ke) / re, 1);
          ((K.style.opacity = String(X + (A - X) * Y)),
            Y < 1 ? (j.current = requestAnimationFrame(ve)) : (j.current = null));
        };
      j.current = requestAnimationFrame(ve);
    };
  return (
    Re.useEffect(() => {
      ie(!1);
      const A = M.current;
      if (!A) return;
      ((A.loop = !1), (A.style.opacity = "0"), (I.current = !1));
      const re = () => {
          ((A.style.opacity = "0"),
            A.play()
              .then(() => $(1))
              .catch(() => $(1)));
        },
        K = () => {
          const ve = A.duration;
          if (!ve || I.current) return;
          const G = ve - A.currentTime;
          G <= 0.55 && G > 0 && ((I.current = !0), $(0));
        },
        X = () => {
          ((A.style.opacity = "0"),
            j.current !== null && cancelAnimationFrame(j.current),
            window.setTimeout(() => {
              M.current &&
                ((M.current.currentTime = 0),
                M.current
                  .play()
                  .then(() => {
                    ((I.current = !1), $(1));
                  })
                  .catch(() => {}));
            }, 100));
        },
        ke = () => ie(!0);
      return (
        A.addEventListener("loadeddata", re),
        A.addEventListener("timeupdate", K),
        A.addEventListener("ended", X),
        A.addEventListener("error", ke),
        A.readyState >= 2 && re(),
        () => {
          (A.removeEventListener("loadeddata", re),
            A.removeEventListener("timeupdate", K),
            A.removeEventListener("ended", X),
            A.removeEventListener("error", ke),
            j.current !== null && cancelAnimationFrame(j.current));
        }
      );
    }, [h, ne]),
    ne
      ? P.jsx("div", { className: `video-fallback ${E ?? ""}`, style: m, "aria-hidden": !0 })
      : P.jsx("video", {
          ref: M,
          src: h,
          className: E,
          style: { opacity: 0, ...m },
          muted: !0,
          autoPlay: !0,
          playsInline: !0,
          preload: "auto",
        })
  );
}
function Li({ target: h, children: E, className: m, onClick: M, ...j }) {
  return P.jsx("a", {
    href: ad(h),
    className: m,
    onClick: (I) => {
      (cd(I, h), M == null || M(I));
    },
    ...j,
    children: E,
  });
}
function md(h = "") {
  const [E, m] = Re.useState(() => (typeof window < "u" ? sd() : h));
  return (Re.useEffect(() => dd(m), []), E || h);
}
const Ha = [
  { label: "Movies", route: "movies" },
  { label: "TV Series", route: "tv-series" },
  { label: "Editor's Pick", route: "editors-pick" },
  { label: "Interviews", route: "interviews" },
  { label: "User Reviews", route: "user-reviews" },
];
function hd({ open: h, onClose: E, activePath: m }) {
  return P.jsx("div", {
    className: `absolute left-0 right-0 top-[72px] z-40 border-b border-gray-800 bg-gray-900/95 shadow-2xl backdrop-blur-lg transition-all duration-500 ease-out lg:hidden ${h ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`,
    children: P.jsxs("div", {
      className: "flex flex-col px-4 py-4",
      children: [
        Ha.map((M, j) => {
          const I = m === M.route;
          return P.jsx(
            Li,
            {
              target: { kind: "route", path: M.route },
              onClick: E,
              className: "rounded-lg py-3 px-3 text-sm transition-colors hover:bg-gray-800/50",
              style: {
                transform: h ? "translateX(0)" : "translateX(-8px)",
                transitionDelay: h ? `${j * 50}ms` : "0ms",
              },
              children: I ? `/ ${M.label}` : M.label,
            },
            M.route,
          );
        }),
        P.jsxs("div", {
          className: "mt-4 flex flex-col gap-3 border-t border-gray-800 pt-4 sm:hidden",
          children: [
            P.jsxs("button", {
              type: "button",
              className:
                "liquid-glass inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm",
              children: [P.jsx(Ua, { className: "h-[18px] w-[18px]" }), "Search"],
            }),
            P.jsx("button", {
              type: "button",
              className:
                "liquid-glass inline-flex h-10 w-10 items-center justify-center self-center rounded-full",
              "aria-label": "Profile",
              children: P.jsx(Aa, { className: "h-[18px] w-[18px]" }),
            }),
          ],
        }),
      ],
    }),
  });
}
function vd() {
  const [h, E] = Re.useState(!1),
    m = md("");
  return P.jsxs(P.Fragment, {
    children: [
      P.jsxs("nav", {
        className:
          "relative z-50 flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 md:py-6",
        children: [
          P.jsx(Li, {
            target: { kind: "route", path: "" },
            className:
              "animate-blur-fade-up h-8 text-lg font-semibold tracking-tight md:h-10 md:text-xl",
            style: { animationDelay: "0ms" },
            children: "FRAMECAST",
          }),
          P.jsx("div", {
            className: "hidden items-center gap-6 lg:flex",
            children: Ha.map((M, j) => {
              const I = m === M.route;
              return P.jsx(
                Li,
                {
                  target: { kind: "route", path: M.route },
                  className: `animate-blur-fade-up text-sm transition-colors hover:text-gray-300 ${I ? "ml-1 font-medium text-white" : "text-white/90"}`,
                  style: { animationDelay: `${100 + j * 50}ms` },
                  children: I ? `/ ${M.label}` : M.label,
                },
                M.route,
              );
            }),
          }),
          P.jsxs("div", {
            className: "flex items-center gap-2 sm:gap-3",
            children: [
              P.jsxs("button", {
                type: "button",
                className:
                  "animate-blur-fade-up liquid-glass hidden items-center gap-2 rounded-full px-4 py-2 text-sm sm:flex md:px-6",
                style: { animationDelay: "350ms" },
                children: [P.jsx(Ua, { className: "h-[18px] w-[18px]", strokeWidth: 2 }), "Search"],
              }),
              P.jsx("button", {
                type: "button",
                className:
                  "animate-blur-fade-up liquid-glass hidden h-10 w-10 items-center justify-center rounded-full sm:flex",
                style: { animationDelay: "400ms" },
                "aria-label": "Profile",
                children: P.jsx(Aa, { className: "h-[18px] w-[18px]", strokeWidth: 2 }),
              }),
              P.jsxs("button", {
                type: "button",
                className:
                  "animate-blur-fade-up relative liquid-glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
                style: { animationDelay: "350ms" },
                "aria-label": h ? "Close menu" : "Open menu",
                onClick: () => E((M) => !M),
                children: [
                  P.jsx("span", {
                    className: `transition-all duration-500 ease-out ${h ? "rotate-180 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`,
                    children: P.jsx(nd, { className: "h-[18px] w-[18px]" }),
                  }),
                  P.jsx("span", {
                    className: `absolute transition-all duration-500 ease-out ${h ? "rotate-0 scale-100 opacity-100" : "rotate-180 scale-50 opacity-0"}`,
                    children: P.jsx(ud, { className: "h-[18px] w-[18px]" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      P.jsx(hd, { open: h, onClose: () => E(!1), activePath: m }),
    ],
  });
}
const yd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4",
  gd = [
    {
      id: "movies",
      title: "Movies",
      body: "Premieres, festival cuts, and exclusive director editions streaming in 4K HDR.",
    },
    {
      id: "tv-series",
      title: "TV Series",
      body: "Serialized originals with weekly drops and curated binge collections.",
    },
    {
      id: "editors-pick",
      title: "Editor's Pick",
      body: "Hand-selected features updated every Friday by the Framecast editorial team.",
    },
    {
      id: "interviews",
      title: "Interviews",
      body: "Long-form conversations with directors, composers, and cinematographers.",
    },
    {
      id: "user-reviews",
      title: "User Reviews",
      body: "Community ratings and scene-level notes from verified members.",
    },
  ];
function wd() {
  return (
    Re.useEffect(() => {
      fd();
    }, []),
    P.jsxs("div", {
      className: "relative min-h-screen bg-black text-white",
      children: [
        P.jsxs("section", {
          id: "home",
          className: "relative min-h-screen overflow-hidden",
          children: [
            P.jsx("div", {
              className: "fixed inset-0 z-0",
              children: P.jsx(pd, { src: yd, className: "h-full w-full object-cover" }),
            }),
            P.jsx("div", {
              className:
                "pointer-events-none fixed inset-0 z-[1] backdrop-blur-xl bottom-blur-overlay",
              "aria-hidden": !0,
            }),
            P.jsxs("div", {
              className: "relative z-10 flex min-h-screen flex-col",
              children: [
                P.jsx(vd, {}),
                P.jsx("div", {
                  className: "flex flex-1 flex-col justify-end px-4 pb-8 sm:px-6 md:px-12 md:pb-16",
                  children: P.jsxs("div", {
                    className: "flex flex-col items-end gap-8 md:flex-row",
                    children: [
                      P.jsxs("div", {
                        className: "w-full flex-1",
                        children: [
                          P.jsxs("div", {
                            className:
                              "animate-blur-fade-up mb-6 flex flex-wrap items-center gap-3 text-xs sm:mb-8 sm:gap-6 sm:text-sm",
                            style: { animationDelay: "300ms" },
                            children: [
                              P.jsxs("span", {
                                className: "inline-flex items-center gap-1.5 font-medium",
                                children: [
                                  P.jsx(ld, { className: "h-4 w-4 fill-white sm:h-5 sm:w-5" }),
                                  "8.7/10 IMDB",
                                ],
                              }),
                              P.jsxs("span", {
                                className: "inline-flex items-center gap-1.5 text-white/90",
                                children: [P.jsx(td, { className: "h-4 w-4" }), "132 min"],
                              }),
                              P.jsxs("span", {
                                className: "inline-flex items-center gap-1.5 text-white/90",
                                children: [P.jsx(Jf, { className: "h-4 w-4" }), "April, 2025"],
                              }),
                            ],
                          }),
                          P.jsx("h1", {
                            className:
                              "animate-blur-fade-up mb-4 text-3xl font-normal tracking-[-0.04em] sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl",
                            style: { animationDelay: "400ms" },
                            children: "Step Through. Work Smarter.",
                          }),
                          P.jsx("p", {
                            className:
                              "animate-blur-fade-up mb-6 max-w-2xl text-base text-gray-400 sm:mb-12 sm:text-lg md:text-xl",
                            style: { animationDelay: "500ms" },
                            children:
                              "A voyage through forgotten realms, where past and future intertwine.",
                          }),
                          P.jsxs("div", {
                            className: "flex flex-wrap gap-3 sm:gap-4",
                            children: [
                              P.jsxs("button", {
                                type: "button",
                                className:
                                  "animate-blur-fade-up inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-200 sm:px-8 sm:py-3",
                                style: { animationDelay: "600ms" },
                                children: [
                                  P.jsx(rd, { className: "h-[18px] w-[18px] fill-black" }),
                                  "Watch Now",
                                ],
                              }),
                              P.jsx("button", {
                                type: "button",
                                className:
                                  "animate-blur-fade-up liquid-glass rounded-full px-6 py-2.5 text-sm font-medium sm:px-8 sm:py-3",
                                style: { animationDelay: "700ms" },
                                children: "Learn More",
                              }),
                            ],
                          }),
                        ],
                      }),
                      P.jsxs("div", {
                        className:
                          "animate-blur-fade-up flex w-full flex-row gap-3 md:w-auto md:flex-col",
                        style: { animationDelay: "800ms" },
                        children: [
                          P.jsxs("button", {
                            type: "button",
                            className:
                              "liquid-glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium sm:flex-none sm:px-6 sm:py-3",
                            children: [P.jsx(bf, { className: "h-4 w-4" }), "Previous"],
                          }),
                          P.jsxs("button", {
                            type: "button",
                            className:
                              "liquid-glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium sm:flex-none sm:px-6 sm:py-3",
                            children: ["Next", P.jsx(ed, { className: "h-4 w-4" })],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        gd.map((h) =>
          P.jsxs(
            "section",
            {
              id: h.id,
              className:
                "scroll-mt-24 border-t border-white/10 px-4 py-20 sm:px-6 md:px-12 md:py-28",
              children: [
                P.jsx("h2", {
                  className: "text-3xl font-semibold tracking-tight md:text-4xl",
                  children: h.title,
                }),
                P.jsx("p", { className: "mt-4 max-w-2xl text-white/55", children: h.body }),
              ],
            },
            h.id,
          ),
        ),
        P.jsxs("section", {
          id: "contact",
          className: "scroll-mt-24 border-t border-white/10 px-4 py-20 sm:px-6 md:px-12",
          children: [
            P.jsx("h2", { className: "text-2xl font-semibold", children: "Contact" }),
            P.jsx("p", { className: "mt-3 text-white/55", children: "studios@framecast.example" }),
          ],
        }),
      ],
    })
  );
}
Yf.createRoot(document.getElementById("root")).render(
  P.jsx(Re.StrictMode, { children: P.jsx(wd, {}) }),
);
