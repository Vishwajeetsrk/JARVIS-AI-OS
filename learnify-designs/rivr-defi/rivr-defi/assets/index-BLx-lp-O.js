(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) l(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const f of d.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && l(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function l(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = s(c);
    fetch(c.href, d);
  }
})();
var bl = { exports: {} },
  oi = {},
  ea = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function ky() {
  if (md) return oe;
  md = 1;
  var n = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function S(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (w && T[w]) || T["@@iterator"]), typeof T == "function" ? T : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    D = {};
  function A(T, V, se) {
    ((this.props = T), (this.context = V), (this.refs = D), (this.updater = se || C));
  }
  ((A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (T, V) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, T, V, "setState");
    }),
    (A.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    }));
  function j() {}
  j.prototype = A.prototype;
  function z(T, V, se) {
    ((this.props = T), (this.context = V), (this.refs = D), (this.updater = se || C));
  }
  var O = (z.prototype = new j());
  ((O.constructor = z), R(O, A.prototype), (O.isPureReactComponent = !0));
  var B = Array.isArray,
    q = Object.prototype.hasOwnProperty,
    ie = { current: null },
    re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(T, V, se) {
    var le,
      ue = {},
      ce = null,
      ve = null;
    if (V != null)
      for (le in (V.ref !== void 0 && (ve = V.ref), V.key !== void 0 && (ce = "" + V.key), V))
        q.call(V, le) && !re.hasOwnProperty(le) && (ue[le] = V[le]);
    var de = arguments.length - 2;
    if (de === 1) ue.children = se;
    else if (1 < de) {
      for (var Pe = Array(de), at = 0; at < de; at++) Pe[at] = arguments[at + 2];
      ue.children = Pe;
    }
    if (T && T.defaultProps)
      for (le in ((de = T.defaultProps), de)) ue[le] === void 0 && (ue[le] = de[le]);
    return { $$typeof: n, type: T, key: ce, ref: ve, props: ue, _owner: ie.current };
  }
  function ye(T, V) {
    return { $$typeof: n, type: T.type, key: V, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function J(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function pe(T) {
    var V = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (se) {
        return V[se];
      })
    );
  }
  var xe = /\/+/g;
  function Le(T, V) {
    return typeof T == "object" && T !== null && T.key != null ? pe("" + T.key) : V.toString(36);
  }
  function Ae(T, V, se, le, ue) {
    var ce = typeof T;
    (ce === "undefined" || ce === "boolean") && (T = null);
    var ve = !1;
    if (T === null) ve = !0;
    else
      switch (ce) {
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case n:
            case i:
              ve = !0;
          }
      }
    if (ve)
      return (
        (ve = T),
        (ue = ue(ve)),
        (T = le === "" ? "." + Le(ve, 0) : le),
        B(ue)
          ? ((se = ""),
            T != null && (se = T.replace(xe, "$&/") + "/"),
            Ae(ue, V, se, "", function (at) {
              return at;
            }))
          : ue != null &&
            (J(ue) &&
              (ue = ye(
                ue,
                se +
                  (!ue.key || (ve && ve.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(xe, "$&/") + "/") +
                  T,
              )),
            V.push(ue)),
        1
      );
    if (((ve = 0), (le = le === "" ? "." : le + ":"), B(T)))
      for (var de = 0; de < T.length; de++) {
        ce = T[de];
        var Pe = le + Le(ce, de);
        ve += Ae(ce, V, se, Pe, ue);
      }
    else if (((Pe = S(T)), typeof Pe == "function"))
      for (T = Pe.call(T), de = 0; !(ce = T.next()).done;)
        ((ce = ce.value), (Pe = le + Le(ce, de++)), (ve += Ae(ce, V, se, Pe, ue)));
    else if (ce === "object")
      throw (
        (V = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (V === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : V) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return ve;
  }
  function je(T, V, se) {
    if (T == null) return T;
    var le = [],
      ue = 0;
    return (
      Ae(T, le, "", "", function (ce) {
        return V.call(se, ce, ue++);
      }),
      le
    );
  }
  function Se(T) {
    if (T._status === -1) {
      var V = T._result;
      ((V = V()),
        V.then(
          function (se) {
            (T._status === 0 || T._status === -1) && ((T._status = 1), (T._result = se));
          },
          function (se) {
            (T._status === 0 || T._status === -1) && ((T._status = 2), (T._result = se));
          },
        ),
        T._status === -1 && ((T._status = 0), (T._result = V)));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var Ce = { current: null },
    I = { transition: null },
    Y = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: I, ReactCurrentOwner: ie };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (oe.Children = {
      map: je,
      forEach: function (T, V, se) {
        je(
          T,
          function () {
            V.apply(this, arguments);
          },
          se,
        );
      },
      count: function (T) {
        var V = 0;
        return (
          je(T, function () {
            V++;
          }),
          V
        );
      },
      toArray: function (T) {
        return (
          je(T, function (V) {
            return V;
          }) || []
        );
      },
      only: function (T) {
        if (!J(T))
          throw Error("React.Children.only expected to receive a single React element child.");
        return T;
      },
    }),
    (oe.Component = A),
    (oe.Fragment = s),
    (oe.Profiler = c),
    (oe.PureComponent = z),
    (oe.StrictMode = l),
    (oe.Suspense = m),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (oe.act = U),
    (oe.cloneElement = function (T, V, se) {
      if (T == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            T +
            ".",
        );
      var le = R({}, T.props),
        ue = T.key,
        ce = T.ref,
        ve = T._owner;
      if (V != null) {
        if (
          (V.ref !== void 0 && ((ce = V.ref), (ve = ie.current)),
          V.key !== void 0 && (ue = "" + V.key),
          T.type && T.type.defaultProps)
        )
          var de = T.type.defaultProps;
        for (Pe in V)
          q.call(V, Pe) &&
            !re.hasOwnProperty(Pe) &&
            (le[Pe] = V[Pe] === void 0 && de !== void 0 ? de[Pe] : V[Pe]);
      }
      var Pe = arguments.length - 2;
      if (Pe === 1) le.children = se;
      else if (1 < Pe) {
        de = Array(Pe);
        for (var at = 0; at < Pe; at++) de[at] = arguments[at + 2];
        le.children = de;
      }
      return { $$typeof: n, type: T.type, key: ue, ref: ce, props: le, _owner: ve };
    }),
    (oe.createContext = function (T) {
      return (
        (T = {
          $$typeof: f,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (T.Provider = { $$typeof: d, _context: T }),
        (T.Consumer = T)
      );
    }),
    (oe.createElement = Z),
    (oe.createFactory = function (T) {
      var V = Z.bind(null, T);
      return ((V.type = T), V);
    }),
    (oe.createRef = function () {
      return { current: null };
    }),
    (oe.forwardRef = function (T) {
      return { $$typeof: p, render: T };
    }),
    (oe.isValidElement = J),
    (oe.lazy = function (T) {
      return { $$typeof: g, _payload: { _status: -1, _result: T }, _init: Se };
    }),
    (oe.memo = function (T, V) {
      return { $$typeof: y, type: T, compare: V === void 0 ? null : V };
    }),
    (oe.startTransition = function (T) {
      var V = I.transition;
      I.transition = {};
      try {
        T();
      } finally {
        I.transition = V;
      }
    }),
    (oe.unstable_act = U),
    (oe.useCallback = function (T, V) {
      return Ce.current.useCallback(T, V);
    }),
    (oe.useContext = function (T) {
      return Ce.current.useContext(T);
    }),
    (oe.useDebugValue = function () {}),
    (oe.useDeferredValue = function (T) {
      return Ce.current.useDeferredValue(T);
    }),
    (oe.useEffect = function (T, V) {
      return Ce.current.useEffect(T, V);
    }),
    (oe.useId = function () {
      return Ce.current.useId();
    }),
    (oe.useImperativeHandle = function (T, V, se) {
      return Ce.current.useImperativeHandle(T, V, se);
    }),
    (oe.useInsertionEffect = function (T, V) {
      return Ce.current.useInsertionEffect(T, V);
    }),
    (oe.useLayoutEffect = function (T, V) {
      return Ce.current.useLayoutEffect(T, V);
    }),
    (oe.useMemo = function (T, V) {
      return Ce.current.useMemo(T, V);
    }),
    (oe.useReducer = function (T, V, se) {
      return Ce.current.useReducer(T, V, se);
    }),
    (oe.useRef = function (T) {
      return Ce.current.useRef(T);
    }),
    (oe.useState = function (T) {
      return Ce.current.useState(T);
    }),
    (oe.useSyncExternalStore = function (T, V, se) {
      return Ce.current.useSyncExternalStore(T, V, se);
    }),
    (oe.useTransition = function () {
      return Ce.current.useTransition();
    }),
    (oe.version = "18.3.1"),
    oe
  );
}
var gd;
function Ka() {
  return (gd || ((gd = 1), (ea.exports = ky())), ea.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd;
function Ty() {
  if (yd) return oi;
  yd = 1;
  var n = Ka(),
    i = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, y) {
    var g,
      w = {},
      S = null,
      C = null;
    (y !== void 0 && (S = "" + y),
      m.key !== void 0 && (S = "" + m.key),
      m.ref !== void 0 && (C = m.ref));
    for (g in m) l.call(m, g) && !d.hasOwnProperty(g) && (w[g] = m[g]);
    if (p && p.defaultProps) for (g in ((m = p.defaultProps), m)) w[g] === void 0 && (w[g] = m[g]);
    return { $$typeof: i, type: p, key: S, ref: C, props: w, _owner: c.current };
  }
  return ((oi.Fragment = s), (oi.jsx = f), (oi.jsxs = f), oi);
}
var vd;
function Py() {
  return (vd || ((vd = 1), (bl.exports = Ty())), bl.exports);
}
var W = Py(),
  te = Ka(),
  Vs = {},
  ta = { exports: {} },
  lt = {},
  na = { exports: {} },
  ra = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd;
function Ey() {
  return (
    wd ||
      ((wd = 1),
      (function (n) {
        function i(I, Y) {
          var U = I.length;
          I.push(Y);
          e: for (; 0 < U;) {
            var T = (U - 1) >>> 1,
              V = I[T];
            if (0 < c(V, Y)) ((I[T] = Y), (I[U] = V), (U = T));
            else break e;
          }
        }
        function s(I) {
          return I.length === 0 ? null : I[0];
        }
        function l(I) {
          if (I.length === 0) return null;
          var Y = I[0],
            U = I.pop();
          if (U !== Y) {
            I[0] = U;
            e: for (var T = 0, V = I.length, se = V >>> 1; T < se;) {
              var le = 2 * (T + 1) - 1,
                ue = I[le],
                ce = le + 1,
                ve = I[ce];
              if (0 > c(ue, U))
                ce < V && 0 > c(ve, ue)
                  ? ((I[T] = ve), (I[ce] = U), (T = ce))
                  : ((I[T] = ue), (I[le] = U), (T = le));
              else if (ce < V && 0 > c(ve, U)) ((I[T] = ve), (I[ce] = U), (T = ce));
              else break e;
            }
          }
          return Y;
        }
        function c(I, Y) {
          var U = I.sortIndex - Y.sortIndex;
          return U !== 0 ? U : I.id - Y.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            p = f.now();
          n.unstable_now = function () {
            return f.now() - p;
          };
        }
        var m = [],
          y = [],
          g = 1,
          w = null,
          S = 3,
          C = !1,
          R = !1,
          D = !1,
          A = typeof setTimeout == "function" ? setTimeout : null,
          j = typeof clearTimeout == "function" ? clearTimeout : null,
          z = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(I) {
          for (var Y = s(y); Y !== null;) {
            if (Y.callback === null) l(y);
            else if (Y.startTime <= I) (l(y), (Y.sortIndex = Y.expirationTime), i(m, Y));
            else break;
            Y = s(y);
          }
        }
        function B(I) {
          if (((D = !1), O(I), !R))
            if (s(m) !== null) ((R = !0), Se(q));
            else {
              var Y = s(y);
              Y !== null && Ce(B, Y.startTime - I);
            }
        }
        function q(I, Y) {
          ((R = !1), D && ((D = !1), j(Z), (Z = -1)), (C = !0));
          var U = S;
          try {
            for (O(Y), w = s(m); w !== null && (!(w.expirationTime > Y) || (I && !pe()));) {
              var T = w.callback;
              if (typeof T == "function") {
                ((w.callback = null), (S = w.priorityLevel));
                var V = T(w.expirationTime <= Y);
                ((Y = n.unstable_now()),
                  typeof V == "function" ? (w.callback = V) : w === s(m) && l(m),
                  O(Y));
              } else l(m);
              w = s(m);
            }
            if (w !== null) var se = !0;
            else {
              var le = s(y);
              (le !== null && Ce(B, le.startTime - Y), (se = !1));
            }
            return se;
          } finally {
            ((w = null), (S = U), (C = !1));
          }
        }
        var ie = !1,
          re = null,
          Z = -1,
          ye = 5,
          J = -1;
        function pe() {
          return !(n.unstable_now() - J < ye);
        }
        function xe() {
          if (re !== null) {
            var I = n.unstable_now();
            J = I;
            var Y = !0;
            try {
              Y = re(!0, I);
            } finally {
              Y ? Le() : ((ie = !1), (re = null));
            }
          } else ie = !1;
        }
        var Le;
        if (typeof z == "function")
          Le = function () {
            z(xe);
          };
        else if (typeof MessageChannel < "u") {
          var Ae = new MessageChannel(),
            je = Ae.port2;
          ((Ae.port1.onmessage = xe),
            (Le = function () {
              je.postMessage(null);
            }));
        } else
          Le = function () {
            A(xe, 0);
          };
        function Se(I) {
          ((re = I), ie || ((ie = !0), Le()));
        }
        function Ce(I, Y) {
          Z = A(function () {
            I(n.unstable_now());
          }, Y);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (I) {
            I.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            R || C || ((R = !0), Se(q));
          }),
          (n.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ye = 0 < I ? Math.floor(1e3 / I) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (n.unstable_next = function (I) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = S;
            }
            var U = S;
            S = Y;
            try {
              return I();
            } finally {
              S = U;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (I, Y) {
            switch (I) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                I = 3;
            }
            var U = S;
            S = I;
            try {
              return Y();
            } finally {
              S = U;
            }
          }),
          (n.unstable_scheduleCallback = function (I, Y, U) {
            var T = n.unstable_now();
            switch (
              (typeof U == "object" && U !== null
                ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? T + U : T))
                : (U = T),
              I)
            ) {
              case 1:
                var V = -1;
                break;
              case 2:
                V = 250;
                break;
              case 5:
                V = 1073741823;
                break;
              case 4:
                V = 1e4;
                break;
              default:
                V = 5e3;
            }
            return (
              (V = U + V),
              (I = {
                id: g++,
                callback: Y,
                priorityLevel: I,
                startTime: U,
                expirationTime: V,
                sortIndex: -1,
              }),
              U > T
                ? ((I.sortIndex = U),
                  i(y, I),
                  s(m) === null && I === s(y) && (D ? (j(Z), (Z = -1)) : (D = !0), Ce(B, U - T)))
                : ((I.sortIndex = V), i(m, I), R || C || ((R = !0), Se(q))),
              I
            );
          }),
          (n.unstable_shouldYield = pe),
          (n.unstable_wrapCallback = function (I) {
            var Y = S;
            return function () {
              var U = S;
              S = Y;
              try {
                return I.apply(this, arguments);
              } finally {
                S = U;
              }
            };
          }));
      })(ra)),
    ra
  );
}
var xd;
function Cy() {
  return (xd || ((xd = 1), (na.exports = Ey())), na.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sd;
function My() {
  if (Sd) return lt;
  Sd = 1;
  var n = Ka(),
    i = Cy();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var l = new Set(),
    c = {};
  function d(e, t) {
    (f(e, t), f(e + "Capture", t));
  }
  function f(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
  }
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    w = {};
  function S(e) {
    return m.call(w, e) ? !0 : m.call(g, e) ? !1 : y.test(e) ? (w[e] = !0) : ((g[e] = !0), !1);
  }
  function C(e, t, r, o) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o
          ? !1
          : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function R(e, t, r, o) {
    if (t === null || typeof t > "u" || C(e, t, r, o)) return !0;
    if (o) return !1;
    if (r !== null)
      switch (r.type) {
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
  function D(e, t, r, o, a, u, h) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = h));
  }
  var A = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      A[e] = new D(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      A[t] = new D(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      A[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        A[e] = new D(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        A[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      A[e] = new D(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      A[e] = new D(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      A[e] = new D(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      A[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var j = /[\-:]([a-z])/g;
  function z(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(j, z);
      A[t] = new D(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(j, z);
        A[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(j, z);
      A[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      A[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (A.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      A[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function O(e, t, r, o) {
    var a = A.hasOwnProperty(t) ? A[t] : null;
    (a !== null
      ? a.type !== 0
      : o || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (R(t, r, a, o) && (r = null),
      o || a === null
        ? S(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : a.mustUseProperty
          ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : "") : r)
          : ((t = a.attributeName),
            (o = a.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((a = a.type),
                (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
                o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))));
  }
  var B = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    q = Symbol.for("react.element"),
    ie = Symbol.for("react.portal"),
    re = Symbol.for("react.fragment"),
    Z = Symbol.for("react.strict_mode"),
    ye = Symbol.for("react.profiler"),
    J = Symbol.for("react.provider"),
    pe = Symbol.for("react.context"),
    xe = Symbol.for("react.forward_ref"),
    Le = Symbol.for("react.suspense"),
    Ae = Symbol.for("react.suspense_list"),
    je = Symbol.for("react.memo"),
    Se = Symbol.for("react.lazy"),
    Ce = Symbol.for("react.offscreen"),
    I = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (I && e[I]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var U = Object.assign,
    T;
  function V(e) {
    if (T === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        T = (t && t[1]) || "";
      }
    return (
      `
` +
      T +
      e
    );
  }
  var se = !1;
  function le(e, t) {
    if (!e || se) return "";
    se = !0;
    var r = Error.prepareStackTrace;
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
          } catch (M) {
            var o = M;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (M) {
            o = M;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (M) {
          o = M;
        }
        e();
      }
    } catch (M) {
      if (M && o && typeof M.stack == "string") {
        for (
          var a = M.stack.split(`
`),
            u = o.stack.split(`
`),
            h = a.length - 1,
            v = u.length - 1;
          1 <= h && 0 <= v && a[h] !== u[v];
        )
          v--;
        for (; 1 <= h && 0 <= v; h--, v--)
          if (a[h] !== u[v]) {
            if (h !== 1 || v !== 1)
              do
                if ((h--, v--, 0 > v || a[h] !== u[v])) {
                  var x =
                    `
` + a[h].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      x.includes("<anonymous>") &&
                      (x = x.replace("<anonymous>", e.displayName)),
                    x
                  );
                }
              while (1 <= h && 0 <= v);
            break;
          }
      }
    } finally {
      ((se = !1), (Error.prepareStackTrace = r));
    }
    return (e = e ? e.displayName || e.name : "") ? V(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return V(e.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = le(e.type, !1)), e);
      case 11:
        return ((e = le(e.type.render, !1)), e);
      case 1:
        return ((e = le(e.type, !0)), e);
      default:
        return "";
    }
  }
  function ce(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case re:
        return "Fragment";
      case ie:
        return "Portal";
      case ye:
        return "Profiler";
      case Z:
        return "StrictMode";
      case Le:
        return "Suspense";
      case Ae:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case pe:
          return (e.displayName || "Context") + ".Consumer";
        case J:
          return (e._context.displayName || "Context") + ".Provider";
        case xe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case je:
          return ((t = e.displayName || null), t !== null ? t : ce(e.type) || "Memo");
        case Se:
          ((t = e._payload), (e = e._init));
          try {
            return ce(e(t));
          } catch {}
      }
    return null;
  }
  function ve(e) {
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
        return ce(t);
      case 8:
        return t === Z ? "StrictMode" : "Mode";
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
  function de(e) {
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
  function Pe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function at(e) {
    var t = Pe(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var a = r.get,
        u = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (h) {
            ((o = "" + h), u.call(this, h));
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (h) {
            o = "" + h;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Si(e) {
    e._valueTracker || (e._valueTracker = at(e));
  }
  function xu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = "";
    return (
      e && (o = Pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function ki(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function so(e, t) {
    var r = t.checked;
    return U({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function Su(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    ((r = de(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function ku(e, t) {
    ((t = t.checked), t != null && O(e, "checked", t, !1));
  }
  function oo(e, t) {
    ku(e, t);
    var r = de(t.value),
      o = t.type;
    if (r != null)
      o === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? lo(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && lo(e, t.type, de(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Tu(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (!((o !== "submit" && o !== "reset") || (t.value !== void 0 && t.value !== null))) return;
      ((t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r));
  }
  function lo(e, t, r) {
    (t !== "number" || ki(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var Sr = Array.isArray;
  function Un(e, t, r, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        ((a = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && o && (e[r].defaultSelected = !0));
    } else {
      for (r = "" + de(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          ((e[a].selected = !0), o && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ao(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return U({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Pu(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(s(92));
        if (Sr(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        t = r;
      }
      (t == null && (t = ""), (r = t));
    }
    e._wrapperState = { initialValue: de(r) };
  }
  function Eu(e, t) {
    var r = de(t.value),
      o = de(t.defaultValue);
    (r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = "" + o));
  }
  function Cu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Mu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function uo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Mu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ti,
    Ru = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, o, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, o, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (
          Ti = Ti || document.createElement("div"),
            Ti.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ti.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function kr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Tr = {
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
    Cm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Tr).forEach(function (e) {
    Cm.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]));
    });
  });
  function Au(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Du(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf("--") === 0,
          a = Au(r, t[r], o);
        (r === "float" && (r = "cssFloat"), o ? e.setProperty(r, a) : (e[r] = a));
      }
  }
  var Mm = U(
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
  function co(e, t) {
    if (t) {
      if (Mm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function fo(e, t) {
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
  var ho = null;
  function po(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var mo = null,
    Wn = null,
    Hn = null;
  function Vu(e) {
    if ((e = Kr(e))) {
      if (typeof mo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Gi(t)), mo(e.stateNode, e.type, t));
    }
  }
  function Lu(e) {
    Wn ? (Hn ? Hn.push(e) : (Hn = [e])) : (Wn = e);
  }
  function Nu() {
    if (Wn) {
      var e = Wn,
        t = Hn;
      if (((Hn = Wn = null), Vu(e), t)) for (e = 0; e < t.length; e++) Vu(t[e]);
    }
  }
  function _u(e, t) {
    return e(t);
  }
  function ju() {}
  var go = !1;
  function Iu(e, t, r) {
    if (go) return e(t, r);
    go = !0;
    try {
      return _u(e, t, r);
    } finally {
      ((go = !1), (Wn !== null || Hn !== null) && (ju(), Nu()));
    }
  }
  function Pr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = Gi(r);
    if (o === null) return null;
    r = o[t];
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
        ((o = !o.disabled) ||
          ((e = e.type),
          (o = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
          (e = !o));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(s(231, t, typeof r));
    return r;
  }
  var yo = !1;
  if (p)
    try {
      var Er = {};
      (Object.defineProperty(Er, "passive", {
        get: function () {
          yo = !0;
        },
      }),
        window.addEventListener("test", Er, Er),
        window.removeEventListener("test", Er, Er));
    } catch {
      yo = !1;
    }
  function Rm(e, t, r, o, a, u, h, v, x) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, M);
    } catch (N) {
      this.onError(N);
    }
  }
  var Cr = !1,
    Pi = null,
    Ei = !1,
    vo = null,
    Am = {
      onError: function (e) {
        ((Cr = !0), (Pi = e));
      },
    };
  function Dm(e, t, r, o, a, u, h, v, x) {
    ((Cr = !1), (Pi = null), Rm.apply(Am, arguments));
  }
  function Vm(e, t, r, o, a, u, h, v, x) {
    if ((Dm.apply(this, arguments), Cr)) {
      if (Cr) {
        var M = Pi;
        ((Cr = !1), (Pi = null));
      } else throw Error(s(198));
      Ei || ((Ei = !0), (vo = M));
    }
  }
  function Sn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Fu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Ou(e) {
    if (Sn(e) !== e) throw Error(s(188));
  }
  function Lm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Sn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var r = e, o = t; ;) {
      var a = r.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (((o = a.return), o !== null)) {
          r = o;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u;) {
          if (u === r) return (Ou(a), e);
          if (u === o) return (Ou(a), t);
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== o.return) ((r = a), (o = u));
      else {
        for (var h = !1, v = a.child; v;) {
          if (v === r) {
            ((h = !0), (r = a), (o = u));
            break;
          }
          if (v === o) {
            ((h = !0), (o = a), (r = u));
            break;
          }
          v = v.sibling;
        }
        if (!h) {
          for (v = u.child; v;) {
            if (v === r) {
              ((h = !0), (r = u), (o = a));
              break;
            }
            if (v === o) {
              ((h = !0), (o = u), (r = a));
              break;
            }
            v = v.sibling;
          }
          if (!h) throw Error(s(189));
        }
      }
      if (r.alternate !== o) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? e : t;
  }
  function zu(e) {
    return ((e = Lm(e)), e !== null ? Bu(e) : null);
  }
  function Bu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Bu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Uu = i.unstable_scheduleCallback,
    Wu = i.unstable_cancelCallback,
    Nm = i.unstable_shouldYield,
    _m = i.unstable_requestPaint,
    Ne = i.unstable_now,
    jm = i.unstable_getCurrentPriorityLevel,
    wo = i.unstable_ImmediatePriority,
    Hu = i.unstable_UserBlockingPriority,
    Ci = i.unstable_NormalPriority,
    Im = i.unstable_LowPriority,
    $u = i.unstable_IdlePriority,
    Mi = null,
    Lt = null;
  function Fm(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function")
      try {
        Lt.onCommitFiberRoot(Mi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var kt = Math.clz32 ? Math.clz32 : Bm,
    Om = Math.log,
    zm = Math.LN2;
  function Bm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Om(e) / zm) | 0)) | 0);
  }
  var Ri = 64,
    Ai = 4194304;
  function Mr(e) {
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
  function Di(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      a = e.suspendedLanes,
      u = e.pingedLanes,
      h = r & 268435455;
    if (h !== 0) {
      var v = h & ~a;
      v !== 0 ? (o = Mr(v)) : ((u &= h), u !== 0 && (o = Mr(u)));
    } else ((h = r & ~a), h !== 0 ? (o = Mr(h)) : u !== 0 && (o = Mr(u)));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & a) === 0 &&
      ((a = o & -o), (u = t & -t), a >= u || (a === 16 && (u & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t;)
        ((r = 31 - kt(t)), (a = 1 << r), (o |= e[r]), (t &= ~a));
    return o;
  }
  function Um(e, t) {
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
  function Wm(e, t) {
    for (
      var r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var h = 31 - kt(u),
        v = 1 << h,
        x = a[h];
      (x === -1
        ? ((v & r) === 0 || (v & o) !== 0) && (a[h] = Um(v, t))
        : x <= t && (e.expiredLanes |= v),
        (u &= ~v));
    }
  }
  function xo(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Ku() {
    var e = Ri;
    return ((Ri <<= 1), (Ri & 4194240) === 0 && (Ri = 64), e);
  }
  function So(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Rr(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - kt(t)),
      (e[t] = r));
  }
  function Hm(e, t) {
    var r = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < r;) {
      var a = 31 - kt(r),
        u = 1 << a;
      ((t[a] = 0), (o[a] = -1), (e[a] = -1), (r &= ~u));
    }
  }
  function ko(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r;) {
      var o = 31 - kt(r),
        a = 1 << o;
      ((a & t) | (e[o] & t) && (e[o] |= t), (r &= ~a));
    }
  }
  var he = 0;
  function Gu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Yu,
    To,
    Qu,
    Xu,
    Zu,
    Po = !1,
    Vi = [],
    Zt = null,
    qt = null,
    Jt = null,
    Ar = new Map(),
    Dr = new Map(),
    bt = [],
    $m =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function qu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Zt = null;
        break;
      case "dragenter":
      case "dragleave":
        qt = null;
        break;
      case "mouseover":
      case "mouseout":
        Jt = null;
        break;
      case "pointerover":
      case "pointerout":
        Ar.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dr.delete(t.pointerId);
    }
  }
  function Vr(e, t, r, o, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = Kr(t)), t !== null && To(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function Km(e, t, r, o, a) {
    switch (t) {
      case "focusin":
        return ((Zt = Vr(Zt, e, t, r, o, a)), !0);
      case "dragenter":
        return ((qt = Vr(qt, e, t, r, o, a)), !0);
      case "mouseover":
        return ((Jt = Vr(Jt, e, t, r, o, a)), !0);
      case "pointerover":
        var u = a.pointerId;
        return (Ar.set(u, Vr(Ar.get(u) || null, e, t, r, o, a)), !0);
      case "gotpointercapture":
        return ((u = a.pointerId), Dr.set(u, Vr(Dr.get(u) || null, e, t, r, o, a)), !0);
    }
    return !1;
  }
  function Ju(e) {
    var t = kn(e.target);
    if (t !== null) {
      var r = Sn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Fu(r)), t !== null)) {
            ((e.blockedOn = t),
              Zu(e.priority, function () {
                Qu(r);
              }));
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Li(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var r = Co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((ho = o), r.target.dispatchEvent(o), (ho = null));
      } else return ((t = Kr(r)), t !== null && To(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function bu(e, t, r) {
    Li(e) && r.delete(t);
  }
  function Gm() {
    ((Po = !1),
      Zt !== null && Li(Zt) && (Zt = null),
      qt !== null && Li(qt) && (qt = null),
      Jt !== null && Li(Jt) && (Jt = null),
      Ar.forEach(bu),
      Dr.forEach(bu));
  }
  function Lr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Po || ((Po = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Gm)));
  }
  function Nr(e) {
    function t(a) {
      return Lr(a, e);
    }
    if (0 < Vi.length) {
      Lr(Vi[0], e);
      for (var r = 1; r < Vi.length; r++) {
        var o = Vi[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Zt !== null && Lr(Zt, e),
        qt !== null && Lr(qt, e),
        Jt !== null && Lr(Jt, e),
        Ar.forEach(t),
        Dr.forEach(t),
        r = 0;
      r < bt.length;
      r++
    )
      ((o = bt[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < bt.length && ((r = bt[0]), r.blockedOn === null);)
      (Ju(r), r.blockedOn === null && bt.shift());
  }
  var $n = B.ReactCurrentBatchConfig,
    Ni = !0;
  function Ym(e, t, r, o) {
    var a = he,
      u = $n.transition;
    $n.transition = null;
    try {
      ((he = 1), Eo(e, t, r, o));
    } finally {
      ((he = a), ($n.transition = u));
    }
  }
  function Qm(e, t, r, o) {
    var a = he,
      u = $n.transition;
    $n.transition = null;
    try {
      ((he = 4), Eo(e, t, r, o));
    } finally {
      ((he = a), ($n.transition = u));
    }
  }
  function Eo(e, t, r, o) {
    if (Ni) {
      var a = Co(e, t, r, o);
      if (a === null) (Ho(e, t, o, _i, r), qu(e, o));
      else if (Km(a, e, t, r, o)) o.stopPropagation();
      else if ((qu(e, o), t & 4 && -1 < $m.indexOf(e))) {
        for (; a !== null;) {
          var u = Kr(a);
          if (
            (u !== null && Yu(u), (u = Co(e, t, r, o)), u === null && Ho(e, t, o, _i, r), u === a)
          )
            break;
          a = u;
        }
        a !== null && o.stopPropagation();
      } else Ho(e, t, o, null, r);
    }
  }
  var _i = null;
  function Co(e, t, r, o) {
    if (((_i = null), (e = po(o)), (e = kn(e)), e !== null))
      if (((t = Sn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Fu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((_i = e), null);
  }
  function ec(e) {
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
        switch (jm()) {
          case wo:
            return 1;
          case Hu:
            return 4;
          case Ci:
          case Im:
            return 16;
          case $u:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var en = null,
    Mo = null,
    ji = null;
  function tc() {
    if (ji) return ji;
    var e,
      t = Mo,
      r = t.length,
      o,
      a = "value" in en ? en.value : en.textContent,
      u = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var h = r - e;
    for (o = 1; o <= h && t[r - o] === a[u - o]; o++);
    return (ji = a.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Ii(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fi() {
    return !0;
  }
  function nc() {
    return !1;
  }
  function ut(e) {
    function t(r, o, a, u, h) {
      ((this._reactName = r),
        (this._targetInst = a),
        (this.type = o),
        (this.nativeEvent = u),
        (this.target = h),
        (this.currentTarget = null));
      for (var v in e) e.hasOwnProperty(v) && ((r = e[v]), (this[v] = r ? r(u) : u[v]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Fi
          : nc),
        (this.isPropagationStopped = nc),
        this
      );
    }
    return (
      U(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Fi));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Fi));
        },
        persist: function () {},
        isPersistent: Fi,
      }),
      t
    );
  }
  var Kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ro = ut(Kn),
    _r = U({}, Kn, { view: 0, detail: 0 }),
    Xm = ut(_r),
    Ao,
    Do,
    jr,
    Oi = U({}, _r, {
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
      getModifierState: Lo,
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
          : (e !== jr &&
              (jr && e.type === "mousemove"
                ? ((Ao = e.screenX - jr.screenX), (Do = e.screenY - jr.screenY))
                : (Do = Ao = 0),
              (jr = e)),
            Ao);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Do;
      },
    }),
    rc = ut(Oi),
    Zm = U({}, Oi, { dataTransfer: 0 }),
    qm = ut(Zm),
    Jm = U({}, _r, { relatedTarget: 0 }),
    Vo = ut(Jm),
    bm = U({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    eg = ut(bm),
    tg = U({}, Kn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ng = ut(tg),
    rg = U({}, Kn, { data: 0 }),
    ic = ut(rg),
    ig = {
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
    sg = {
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
    og = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function lg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = og[e]) ? !!t[e] : !1;
  }
  function Lo() {
    return lg;
  }
  var ag = U({}, _r, {
      key: function (e) {
        if (e.key) {
          var t = ig[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ii(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? sg[e.keyCode] || "Unidentified"
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
      getModifierState: Lo,
      charCode: function (e) {
        return e.type === "keypress" ? Ii(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ii(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    ug = ut(ag),
    cg = U({}, Oi, {
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
    sc = ut(cg),
    fg = U({}, _r, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Lo,
    }),
    dg = ut(fg),
    hg = U({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pg = ut(hg),
    mg = U({}, Oi, {
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
    gg = ut(mg),
    yg = [9, 13, 27, 32],
    No = p && "CompositionEvent" in window,
    Ir = null;
  p && "documentMode" in document && (Ir = document.documentMode);
  var vg = p && "TextEvent" in window && !Ir,
    oc = p && (!No || (Ir && 8 < Ir && 11 >= Ir)),
    lc = " ",
    ac = !1;
  function uc(e, t) {
    switch (e) {
      case "keyup":
        return yg.indexOf(t.keyCode) !== -1;
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
  function cc(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var Gn = !1;
  function wg(e, t) {
    switch (e) {
      case "compositionend":
        return cc(t);
      case "keypress":
        return t.which !== 32 ? null : ((ac = !0), lc);
      case "textInput":
        return ((e = t.data), e === lc && ac ? null : e);
      default:
        return null;
    }
  }
  function xg(e, t) {
    if (Gn)
      return e === "compositionend" || (!No && uc(e, t))
        ? ((e = tc()), (ji = Mo = en = null), (Gn = !1), e)
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
        return oc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Sg = {
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
  function fc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Sg[e.type] : t === "textarea";
  }
  function dc(e, t, r, o) {
    (Lu(o),
      (t = Hi(t, "onChange")),
      0 < t.length &&
        ((r = new Ro("onChange", "change", null, r, o)), e.push({ event: r, listeners: t })));
  }
  var Fr = null,
    Or = null;
  function kg(e) {
    Dc(e, 0);
  }
  function zi(e) {
    var t = qn(e);
    if (xu(t)) return e;
  }
  function Tg(e, t) {
    if (e === "change") return t;
  }
  var hc = !1;
  if (p) {
    var _o;
    if (p) {
      var jo = "oninput" in document;
      if (!jo) {
        var pc = document.createElement("div");
        (pc.setAttribute("oninput", "return;"), (jo = typeof pc.oninput == "function"));
      }
      _o = jo;
    } else _o = !1;
    hc = _o && (!document.documentMode || 9 < document.documentMode);
  }
  function mc() {
    Fr && (Fr.detachEvent("onpropertychange", gc), (Or = Fr = null));
  }
  function gc(e) {
    if (e.propertyName === "value" && zi(Or)) {
      var t = [];
      (dc(t, Or, e, po(e)), Iu(kg, t));
    }
  }
  function Pg(e, t, r) {
    e === "focusin"
      ? (mc(), (Fr = t), (Or = r), Fr.attachEvent("onpropertychange", gc))
      : e === "focusout" && mc();
  }
  function Eg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zi(Or);
  }
  function Cg(e, t) {
    if (e === "click") return zi(t);
  }
  function Mg(e, t) {
    if (e === "input" || e === "change") return zi(t);
  }
  function Rg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Tt = typeof Object.is == "function" ? Object.is : Rg;
  function zr(e, t) {
    if (Tt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var a = r[o];
      if (!m.call(t, a) || !Tt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function yc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function vc(e, t) {
    var r = yc(e);
    e = 0;
    for (var o; r;) {
      if (r.nodeType === 3) {
        if (((o = e + r.textContent.length), e <= t && o >= t)) return { node: r, offset: t - e };
        e = o;
      }
      e: {
        for (; r;) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = yc(r);
    }
  }
  function wc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? wc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function xc() {
    for (var e = window, t = ki(); t instanceof e.HTMLIFrameElement;) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = ki(e.document);
    }
    return t;
  }
  function Io(e) {
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
  function Ag(e) {
    var t = xc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && wc(r.ownerDocument.documentElement, r)) {
      if (o !== null && Io(r)) {
        if (((t = o.start), (e = o.end), e === void 0 && (e = t), "selectionStart" in r))
          ((r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length)));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var a = r.textContent.length,
            u = Math.min(o.start, a);
          ((o = o.end === void 0 ? u : Math.min(o.end, a)),
            !e.extend && u > o && ((a = o), (o = u), (u = a)),
            (a = vc(r, u)));
          var h = vc(r, o);
          a &&
            h &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== h.node ||
              e.focusOffset !== h.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            u > o
              ? (e.addRange(t), e.extend(h.node, h.offset))
              : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode);)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        ((e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var Dg = p && "documentMode" in document && 11 >= document.documentMode,
    Yn = null,
    Fo = null,
    Br = null,
    Oo = !1;
  function Sc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Oo ||
      Yn == null ||
      Yn !== ki(o) ||
      ((o = Yn),
      "selectionStart" in o && Io(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Br && zr(Br, o)) ||
        ((Br = o),
        (o = Hi(Fo, "onSelect")),
        0 < o.length &&
          ((t = new Ro("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Yn))));
  }
  function Bi(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var Qn = {
      animationend: Bi("Animation", "AnimationEnd"),
      animationiteration: Bi("Animation", "AnimationIteration"),
      animationstart: Bi("Animation", "AnimationStart"),
      transitionend: Bi("Transition", "TransitionEnd"),
    },
    zo = {},
    kc = {};
  p &&
    ((kc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Qn.animationend.animation,
      delete Qn.animationiteration.animation,
      delete Qn.animationstart.animation),
    "TransitionEvent" in window || delete Qn.transitionend.transition);
  function Ui(e) {
    if (zo[e]) return zo[e];
    if (!Qn[e]) return e;
    var t = Qn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in kc) return (zo[e] = t[r]);
    return e;
  }
  var Tc = Ui("animationend"),
    Pc = Ui("animationiteration"),
    Ec = Ui("animationstart"),
    Cc = Ui("transitionend"),
    Mc = new Map(),
    Rc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function tn(e, t) {
    (Mc.set(e, t), d(t, [e]));
  }
  for (var Bo = 0; Bo < Rc.length; Bo++) {
    var Uo = Rc[Bo],
      Vg = Uo.toLowerCase(),
      Lg = Uo[0].toUpperCase() + Uo.slice(1);
    tn(Vg, "on" + Lg);
  }
  (tn(Tc, "onAnimationEnd"),
    tn(Pc, "onAnimationIteration"),
    tn(Ec, "onAnimationStart"),
    tn("dblclick", "onDoubleClick"),
    tn("focusin", "onFocus"),
    tn("focusout", "onBlur"),
    tn(Cc, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ur =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Ng = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));
  function Ac(e, t, r) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = r), Vm(o, t, void 0, e), (e.currentTarget = null));
  }
  function Dc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        a = o.event;
      o = o.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var h = o.length - 1; 0 <= h; h--) {
            var v = o[h],
              x = v.instance,
              M = v.currentTarget;
            if (((v = v.listener), x !== u && a.isPropagationStopped())) break e;
            (Ac(a, v, M), (u = x));
          }
        else
          for (h = 0; h < o.length; h++) {
            if (
              ((v = o[h]),
              (x = v.instance),
              (M = v.currentTarget),
              (v = v.listener),
              x !== u && a.isPropagationStopped())
            )
              break e;
            (Ac(a, v, M), (u = x));
          }
      }
    }
    if (Ei) throw ((e = vo), (Ei = !1), (vo = null), e);
  }
  function ke(e, t) {
    var r = t[Xo];
    r === void 0 && (r = t[Xo] = new Set());
    var o = e + "__bubble";
    r.has(o) || (Vc(t, e, 2, !1), r.add(o));
  }
  function Wo(e, t, r) {
    var o = 0;
    (t && (o |= 4), Vc(r, e, o, t));
  }
  var Wi = "_reactListening" + Math.random().toString(36).slice(2);
  function Wr(e) {
    if (!e[Wi]) {
      ((e[Wi] = !0),
        l.forEach(function (r) {
          r !== "selectionchange" && (Ng.has(r) || Wo(r, !1, e), Wo(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wi] || ((t[Wi] = !0), Wo("selectionchange", !1, t));
    }
  }
  function Vc(e, t, r, o) {
    switch (ec(t)) {
      case 1:
        var a = Ym;
        break;
      case 4:
        a = Qm;
        break;
      default:
        a = Eo;
    }
    ((r = a.bind(null, t, r, e)),
      (a = void 0),
      !yo || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (a = !0),
      o
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
          ? e.addEventListener(t, r, { passive: a })
          : e.addEventListener(t, r, !1));
  }
  function Ho(e, t, r, o, a) {
    var u = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var h = o.tag;
        if (h === 3 || h === 4) {
          var v = o.stateNode.containerInfo;
          if (v === a || (v.nodeType === 8 && v.parentNode === a)) break;
          if (h === 4)
            for (h = o.return; h !== null;) {
              var x = h.tag;
              if (
                (x === 3 || x === 4) &&
                ((x = h.stateNode.containerInfo),
                x === a || (x.nodeType === 8 && x.parentNode === a))
              )
                return;
              h = h.return;
            }
          for (; v !== null;) {
            if (((h = kn(v)), h === null)) return;
            if (((x = h.tag), x === 5 || x === 6)) {
              o = u = h;
              continue e;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    Iu(function () {
      var M = u,
        N = po(r),
        _ = [];
      e: {
        var L = Mc.get(e);
        if (L !== void 0) {
          var H = Ro,
            K = e;
          switch (e) {
            case "keypress":
              if (Ii(r) === 0) break e;
            case "keydown":
            case "keyup":
              H = ug;
              break;
            case "focusin":
              ((K = "focus"), (H = Vo));
              break;
            case "focusout":
              ((K = "blur"), (H = Vo));
              break;
            case "beforeblur":
            case "afterblur":
              H = Vo;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = rc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = qm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = dg;
              break;
            case Tc:
            case Pc:
            case Ec:
              H = eg;
              break;
            case Cc:
              H = pg;
              break;
            case "scroll":
              H = Xm;
              break;
            case "wheel":
              H = gg;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = ng;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = sc;
          }
          var Q = (t & 4) !== 0,
            _e = !Q && e === "scroll",
            P = Q ? (L !== null ? L + "Capture" : null) : L;
          Q = [];
          for (var k = M, E; k !== null;) {
            E = k;
            var F = E.stateNode;
            if (
              (E.tag === 5 &&
                F !== null &&
                ((E = F), P !== null && ((F = Pr(k, P)), F != null && Q.push(Hr(k, F, E)))),
              _e)
            )
              break;
            k = k.return;
          }
          0 < Q.length && ((L = new H(L, K, null, r, N)), _.push({ event: L, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (H = e === "mouseout" || e === "pointerout"),
            L && r !== ho && (K = r.relatedTarget || r.fromElement) && (kn(K) || K[Ut]))
          )
            break e;
          if (
            (H || L) &&
            ((L =
              N.window === N
                ? N
                : (L = N.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            H
              ? ((K = r.relatedTarget || r.toElement),
                (H = M),
                (K = K ? kn(K) : null),
                K !== null &&
                  ((_e = Sn(K)), K !== _e || (K.tag !== 5 && K.tag !== 6)) &&
                  (K = null))
              : ((H = null), (K = M)),
            H !== K)
          ) {
            if (
              ((Q = rc),
              (F = "onMouseLeave"),
              (P = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = sc), (F = "onPointerLeave"), (P = "onPointerEnter"), (k = "pointer")),
              (_e = H == null ? L : qn(H)),
              (E = K == null ? L : qn(K)),
              (L = new Q(F, k + "leave", H, r, N)),
              (L.target = _e),
              (L.relatedTarget = E),
              (F = null),
              kn(N) === M &&
                ((Q = new Q(P, k + "enter", K, r, N)),
                (Q.target = E),
                (Q.relatedTarget = _e),
                (F = Q)),
              (_e = F),
              H && K)
            )
              t: {
                for (Q = H, P = K, k = 0, E = Q; E; E = Xn(E)) k++;
                for (E = 0, F = P; F; F = Xn(F)) E++;
                for (; 0 < k - E;) ((Q = Xn(Q)), k--);
                for (; 0 < E - k;) ((P = Xn(P)), E--);
                for (; k--;) {
                  if (Q === P || (P !== null && Q === P.alternate)) break t;
                  ((Q = Xn(Q)), (P = Xn(P)));
                }
                Q = null;
              }
            else Q = null;
            (H !== null && Lc(_, L, H, Q, !1), K !== null && _e !== null && Lc(_, _e, K, Q, !0));
          }
        }
        e: {
          if (
            ((L = M ? qn(M) : window),
            (H = L.nodeName && L.nodeName.toLowerCase()),
            H === "select" || (H === "input" && L.type === "file"))
          )
            var X = Tg;
          else if (fc(L))
            if (hc) X = Mg;
            else {
              X = Eg;
              var b = Pg;
            }
          else
            (H = L.nodeName) &&
              H.toLowerCase() === "input" &&
              (L.type === "checkbox" || L.type === "radio") &&
              (X = Cg);
          if (X && (X = X(e, M))) {
            dc(_, X, r, N);
            break e;
          }
          (b && b(e, L, M),
            e === "focusout" &&
              (b = L._wrapperState) &&
              b.controlled &&
              L.type === "number" &&
              lo(L, "number", L.value));
        }
        switch (((b = M ? qn(M) : window), e)) {
          case "focusin":
            (fc(b) || b.contentEditable === "true") && ((Yn = b), (Fo = M), (Br = null));
            break;
          case "focusout":
            Br = Fo = Yn = null;
            break;
          case "mousedown":
            Oo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Oo = !1), Sc(_, r, N));
            break;
          case "selectionchange":
            if (Dg) break;
          case "keydown":
          case "keyup":
            Sc(_, r, N);
        }
        var ee;
        if (No)
          e: {
            switch (e) {
              case "compositionstart":
                var ne = "onCompositionStart";
                break e;
              case "compositionend":
                ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ne = "onCompositionUpdate";
                break e;
            }
            ne = void 0;
          }
        else
          Gn
            ? uc(e, r) && (ne = "onCompositionEnd")
            : e === "keydown" && r.keyCode === 229 && (ne = "onCompositionStart");
        (ne &&
          (oc &&
            r.locale !== "ko" &&
            (Gn || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && Gn && (ee = tc())
              : ((en = N), (Mo = "value" in en ? en.value : en.textContent), (Gn = !0))),
          (b = Hi(M, ne)),
          0 < b.length &&
            ((ne = new ic(ne, e, null, r, N)),
            _.push({ event: ne, listeners: b }),
            ee ? (ne.data = ee) : ((ee = cc(r)), ee !== null && (ne.data = ee)))),
          (ee = vg ? wg(e, r) : xg(e, r)) &&
            ((M = Hi(M, "onBeforeInput")),
            0 < M.length &&
              ((N = new ic("onBeforeInput", "beforeinput", null, r, N)),
              _.push({ event: N, listeners: M }),
              (N.data = ee))));
      }
      Dc(_, t);
    });
  }
  function Hr(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Hi(e, t) {
    for (var r = t + "Capture", o = []; e !== null;) {
      var a = e,
        u = a.stateNode;
      (a.tag === 5 &&
        u !== null &&
        ((a = u),
        (u = Pr(e, r)),
        u != null && o.unshift(Hr(e, u, a)),
        (u = Pr(e, t)),
        u != null && o.push(Hr(e, u, a))),
        (e = e.return));
    }
    return o;
  }
  function Xn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Lc(e, t, r, o, a) {
    for (var u = t._reactName, h = []; r !== null && r !== o;) {
      var v = r,
        x = v.alternate,
        M = v.stateNode;
      if (x !== null && x === o) break;
      (v.tag === 5 &&
        M !== null &&
        ((v = M),
        a
          ? ((x = Pr(r, u)), x != null && h.unshift(Hr(r, x, v)))
          : a || ((x = Pr(r, u)), x != null && h.push(Hr(r, x, v)))),
        (r = r.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var _g = /\r\n?/g,
    jg = /\u0000|\uFFFD/g;
  function Nc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        _g,
        `
`,
      )
      .replace(jg, "");
  }
  function $i(e, t, r) {
    if (((t = Nc(t)), Nc(e) !== t && r)) throw Error(s(425));
  }
  function Ki() {}
  var $o = null,
    Ko = null;
  function Go(e, t) {
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
  var Yo = typeof setTimeout == "function" ? setTimeout : void 0,
    Ig = typeof clearTimeout == "function" ? clearTimeout : void 0,
    _c = typeof Promise == "function" ? Promise : void 0,
    Fg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof _c < "u"
          ? function (e) {
              return _c.resolve(null).then(e).catch(Og);
            }
          : Yo;
  function Og(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Qo(e, t) {
    var r = t,
      o = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === "/$")) {
          if (o === 0) {
            (e.removeChild(a), Nr(t));
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = a;
    } while (r);
    Nr(t);
  }
  function nn(e) {
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
  function jc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Zn = Math.random().toString(36).slice(2),
    Nt = "__reactFiber$" + Zn,
    $r = "__reactProps$" + Zn,
    Ut = "__reactContainer$" + Zn,
    Xo = "__reactEvents$" + Zn,
    zg = "__reactListeners$" + Zn,
    Bg = "__reactHandles$" + Zn;
  function kn(e) {
    var t = e[Nt];
    if (t) return t;
    for (var r = e.parentNode; r;) {
      if ((t = r[Ut] || r[Nt])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = jc(e); e !== null;) {
            if ((r = e[Nt])) return r;
            e = jc(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function Kr(e) {
    return (
      (e = e[Nt] || e[Ut]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Gi(e) {
    return e[$r] || null;
  }
  var Zo = [],
    Jn = -1;
  function rn(e) {
    return { current: e };
  }
  function Te(e) {
    0 > Jn || ((e.current = Zo[Jn]), (Zo[Jn] = null), Jn--);
  }
  function we(e, t) {
    (Jn++, (Zo[Jn] = e.current), (e.current = t));
  }
  var sn = {},
    Qe = rn(sn),
    nt = rn(!1),
    Tn = sn;
  function bn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return sn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      u;
    for (u in r) a[u] = t[u];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function rt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Yi() {
    (Te(nt), Te(Qe));
  }
  function Ic(e, t, r) {
    if (Qe.current !== sn) throw Error(s(168));
    (we(Qe, t), we(nt, r));
  }
  function Fc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function")) return r;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(s(108, ve(e) || "Unknown", a));
    return U({}, r, o);
  }
  function Qi(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || sn),
      (Tn = Qe.current),
      we(Qe, e),
      we(nt, nt.current),
      !0
    );
  }
  function Oc(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    (r
      ? ((e = Fc(e, t, Tn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        Te(nt),
        Te(Qe),
        we(Qe, e))
      : Te(nt),
      we(nt, r));
  }
  var Wt = null,
    Xi = !1,
    qo = !1;
  function zc(e) {
    Wt === null ? (Wt = [e]) : Wt.push(e);
  }
  function Ug(e) {
    ((Xi = !0), zc(e));
  }
  function on() {
    if (!qo && Wt !== null) {
      qo = !0;
      var e = 0,
        t = he;
      try {
        var r = Wt;
        for (he = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((Wt = null), (Xi = !1));
      } catch (a) {
        throw (Wt !== null && (Wt = Wt.slice(e + 1)), Uu(wo, on), a);
      } finally {
        ((he = t), (qo = !1));
      }
    }
    return null;
  }
  var er = [],
    tr = 0,
    Zi = null,
    qi = 0,
    pt = [],
    mt = 0,
    Pn = null,
    Ht = 1,
    $t = "";
  function En(e, t) {
    ((er[tr++] = qi), (er[tr++] = Zi), (Zi = e), (qi = t));
  }
  function Bc(e, t, r) {
    ((pt[mt++] = Ht), (pt[mt++] = $t), (pt[mt++] = Pn), (Pn = e));
    var o = Ht;
    e = $t;
    var a = 32 - kt(o) - 1;
    ((o &= ~(1 << a)), (r += 1));
    var u = 32 - kt(t) + a;
    if (30 < u) {
      var h = a - (a % 5);
      ((u = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (a -= h),
        (Ht = (1 << (32 - kt(t) + a)) | (r << a) | o),
        ($t = u + e));
    } else ((Ht = (1 << u) | (r << a) | o), ($t = e));
  }
  function Jo(e) {
    e.return !== null && (En(e, 1), Bc(e, 1, 0));
  }
  function bo(e) {
    for (; e === Zi;) ((Zi = er[--tr]), (er[tr] = null), (qi = er[--tr]), (er[tr] = null));
    for (; e === Pn;)
      ((Pn = pt[--mt]),
        (pt[mt] = null),
        ($t = pt[--mt]),
        (pt[mt] = null),
        (Ht = pt[--mt]),
        (pt[mt] = null));
  }
  var ct = null,
    ft = null,
    Ee = !1,
    Pt = null;
  function Uc(e, t) {
    var r = wt(5, null, null, 0);
    ((r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function Wc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ct = e), (ft = nn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ct = e), (ft = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Pn !== null ? { id: Ht, overflow: $t } : null),
              (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
              (r = wt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (ct = e),
              (ft = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function el(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function tl(e) {
    if (Ee) {
      var t = ft;
      if (t) {
        var r = t;
        if (!Wc(e, t)) {
          if (el(e)) throw Error(s(418));
          t = nn(r.nextSibling);
          var o = ct;
          t && Wc(e, t) ? Uc(o, r) : ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (ct = e));
        }
      } else {
        if (el(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (ct = e));
      }
    }
  }
  function Hc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ct = e;
  }
  function Ji(e) {
    if (e !== ct) return !1;
    if (!Ee) return (Hc(e), (Ee = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !Go(e.type, e.memoizedProps))),
      t && (t = ft))
    ) {
      if (el(e)) throw ($c(), Error(s(418)));
      for (; t;) (Uc(e, t), (t = nn(t.nextSibling)));
    }
    if ((Hc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                ft = nn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ft = null;
      }
    } else ft = ct ? nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function $c() {
    for (var e = ft; e;) e = nn(e.nextSibling);
  }
  function nr() {
    ((ft = ct = null), (Ee = !1));
  }
  function nl(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  var Wg = B.ReactCurrentBatchConfig;
  function Gr(e, t, r) {
    if (((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(s(309));
          var o = r.stateNode;
        }
        if (!o) throw Error(s(147, e));
        var a = o,
          u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u
          ? t.ref
          : ((t = function (h) {
              var v = a.refs;
              h === null ? delete v[u] : (v[u] = h);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!r._owner) throw Error(s(290, e));
    }
    return e;
  }
  function bi(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function Kc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Gc(e) {
    function t(P, k) {
      if (e) {
        var E = P.deletions;
        E === null ? ((P.deletions = [k]), (P.flags |= 16)) : E.push(k);
      }
    }
    function r(P, k) {
      if (!e) return null;
      for (; k !== null;) (t(P, k), (k = k.sibling));
      return null;
    }
    function o(P, k) {
      for (P = new Map(); k !== null;)
        (k.key !== null ? P.set(k.key, k) : P.set(k.index, k), (k = k.sibling));
      return P;
    }
    function a(P, k) {
      return ((P = pn(P, k)), (P.index = 0), (P.sibling = null), P);
    }
    function u(P, k, E) {
      return (
        (P.index = E),
        e
          ? ((E = P.alternate),
            E !== null ? ((E = E.index), E < k ? ((P.flags |= 2), k) : E) : ((P.flags |= 2), k))
          : ((P.flags |= 1048576), k)
      );
    }
    function h(P) {
      return (e && P.alternate === null && (P.flags |= 2), P);
    }
    function v(P, k, E, F) {
      return k === null || k.tag !== 6
        ? ((k = Yl(E, P.mode, F)), (k.return = P), k)
        : ((k = a(k, E)), (k.return = P), k);
    }
    function x(P, k, E, F) {
      var X = E.type;
      return X === re
        ? N(P, k, E.props.children, F, E.key)
        : k !== null &&
            (k.elementType === X ||
              (typeof X == "object" && X !== null && X.$$typeof === Se && Kc(X) === k.type))
          ? ((F = a(k, E.props)), (F.ref = Gr(P, k, E)), (F.return = P), F)
          : ((F = Ts(E.type, E.key, E.props, null, P.mode, F)),
            (F.ref = Gr(P, k, E)),
            (F.return = P),
            F);
    }
    function M(P, k, E, F) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== E.containerInfo ||
        k.stateNode.implementation !== E.implementation
        ? ((k = Ql(E, P.mode, F)), (k.return = P), k)
        : ((k = a(k, E.children || [])), (k.return = P), k);
    }
    function N(P, k, E, F, X) {
      return k === null || k.tag !== 7
        ? ((k = Nn(E, P.mode, F, X)), (k.return = P), k)
        : ((k = a(k, E)), (k.return = P), k);
    }
    function _(P, k, E) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((k = Yl("" + k, P.mode, E)), (k.return = P), k);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case q:
            return (
              (E = Ts(k.type, k.key, k.props, null, P.mode, E)),
              (E.ref = Gr(P, null, k)),
              (E.return = P),
              E
            );
          case ie:
            return ((k = Ql(k, P.mode, E)), (k.return = P), k);
          case Se:
            var F = k._init;
            return _(P, F(k._payload), E);
        }
        if (Sr(k) || Y(k)) return ((k = Nn(k, P.mode, E, null)), (k.return = P), k);
        bi(P, k);
      }
      return null;
    }
    function L(P, k, E, F) {
      var X = k !== null ? k.key : null;
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return X !== null ? null : v(P, k, "" + E, F);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case q:
            return E.key === X ? x(P, k, E, F) : null;
          case ie:
            return E.key === X ? M(P, k, E, F) : null;
          case Se:
            return ((X = E._init), L(P, k, X(E._payload), F));
        }
        if (Sr(E) || Y(E)) return X !== null ? null : N(P, k, E, F, null);
        bi(P, E);
      }
      return null;
    }
    function H(P, k, E, F, X) {
      if ((typeof F == "string" && F !== "") || typeof F == "number")
        return ((P = P.get(E) || null), v(k, P, "" + F, X));
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case q:
            return ((P = P.get(F.key === null ? E : F.key) || null), x(k, P, F, X));
          case ie:
            return ((P = P.get(F.key === null ? E : F.key) || null), M(k, P, F, X));
          case Se:
            var b = F._init;
            return H(P, k, E, b(F._payload), X);
        }
        if (Sr(F) || Y(F)) return ((P = P.get(E) || null), N(k, P, F, X, null));
        bi(k, F);
      }
      return null;
    }
    function K(P, k, E, F) {
      for (
        var X = null, b = null, ee = k, ne = (k = 0), He = null;
        ee !== null && ne < E.length;
        ne++
      ) {
        ee.index > ne ? ((He = ee), (ee = null)) : (He = ee.sibling);
        var fe = L(P, ee, E[ne], F);
        if (fe === null) {
          ee === null && (ee = He);
          break;
        }
        (e && ee && fe.alternate === null && t(P, ee),
          (k = u(fe, k, ne)),
          b === null ? (X = fe) : (b.sibling = fe),
          (b = fe),
          (ee = He));
      }
      if (ne === E.length) return (r(P, ee), Ee && En(P, ne), X);
      if (ee === null) {
        for (; ne < E.length; ne++)
          ((ee = _(P, E[ne], F)),
            ee !== null &&
              ((k = u(ee, k, ne)), b === null ? (X = ee) : (b.sibling = ee), (b = ee)));
        return (Ee && En(P, ne), X);
      }
      for (ee = o(P, ee); ne < E.length; ne++)
        ((He = H(ee, P, ne, E[ne], F)),
          He !== null &&
            (e && He.alternate !== null && ee.delete(He.key === null ? ne : He.key),
            (k = u(He, k, ne)),
            b === null ? (X = He) : (b.sibling = He),
            (b = He)));
      return (
        e &&
          ee.forEach(function (mn) {
            return t(P, mn);
          }),
        Ee && En(P, ne),
        X
      );
    }
    function Q(P, k, E, F) {
      var X = Y(E);
      if (typeof X != "function") throw Error(s(150));
      if (((E = X.call(E)), E == null)) throw Error(s(151));
      for (
        var b = (X = null), ee = k, ne = (k = 0), He = null, fe = E.next();
        ee !== null && !fe.done;
        ne++, fe = E.next()
      ) {
        ee.index > ne ? ((He = ee), (ee = null)) : (He = ee.sibling);
        var mn = L(P, ee, fe.value, F);
        if (mn === null) {
          ee === null && (ee = He);
          break;
        }
        (e && ee && mn.alternate === null && t(P, ee),
          (k = u(mn, k, ne)),
          b === null ? (X = mn) : (b.sibling = mn),
          (b = mn),
          (ee = He));
      }
      if (fe.done) return (r(P, ee), Ee && En(P, ne), X);
      if (ee === null) {
        for (; !fe.done; ne++, fe = E.next())
          ((fe = _(P, fe.value, F)),
            fe !== null &&
              ((k = u(fe, k, ne)), b === null ? (X = fe) : (b.sibling = fe), (b = fe)));
        return (Ee && En(P, ne), X);
      }
      for (ee = o(P, ee); !fe.done; ne++, fe = E.next())
        ((fe = H(ee, P, ne, fe.value, F)),
          fe !== null &&
            (e && fe.alternate !== null && ee.delete(fe.key === null ? ne : fe.key),
            (k = u(fe, k, ne)),
            b === null ? (X = fe) : (b.sibling = fe),
            (b = fe)));
      return (
        e &&
          ee.forEach(function (Sy) {
            return t(P, Sy);
          }),
        Ee && En(P, ne),
        X
      );
    }
    function _e(P, k, E, F) {
      if (
        (typeof E == "object" &&
          E !== null &&
          E.type === re &&
          E.key === null &&
          (E = E.props.children),
        typeof E == "object" && E !== null)
      ) {
        switch (E.$$typeof) {
          case q:
            e: {
              for (var X = E.key, b = k; b !== null;) {
                if (b.key === X) {
                  if (((X = E.type), X === re)) {
                    if (b.tag === 7) {
                      (r(P, b.sibling), (k = a(b, E.props.children)), (k.return = P), (P = k));
                      break e;
                    }
                  } else if (
                    b.elementType === X ||
                    (typeof X == "object" && X !== null && X.$$typeof === Se && Kc(X) === b.type)
                  ) {
                    (r(P, b.sibling),
                      (k = a(b, E.props)),
                      (k.ref = Gr(P, b, E)),
                      (k.return = P),
                      (P = k));
                    break e;
                  }
                  r(P, b);
                  break;
                } else t(P, b);
                b = b.sibling;
              }
              E.type === re
                ? ((k = Nn(E.props.children, P.mode, F, E.key)), (k.return = P), (P = k))
                : ((F = Ts(E.type, E.key, E.props, null, P.mode, F)),
                  (F.ref = Gr(P, k, E)),
                  (F.return = P),
                  (P = F));
            }
            return h(P);
          case ie:
            e: {
              for (b = E.key; k !== null;) {
                if (k.key === b)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === E.containerInfo &&
                    k.stateNode.implementation === E.implementation
                  ) {
                    (r(P, k.sibling), (k = a(k, E.children || [])), (k.return = P), (P = k));
                    break e;
                  } else {
                    r(P, k);
                    break;
                  }
                else t(P, k);
                k = k.sibling;
              }
              ((k = Ql(E, P.mode, F)), (k.return = P), (P = k));
            }
            return h(P);
          case Se:
            return ((b = E._init), _e(P, k, b(E._payload), F));
        }
        if (Sr(E)) return K(P, k, E, F);
        if (Y(E)) return Q(P, k, E, F);
        bi(P, E);
      }
      return (typeof E == "string" && E !== "") || typeof E == "number"
        ? ((E = "" + E),
          k !== null && k.tag === 6
            ? (r(P, k.sibling), (k = a(k, E)), (k.return = P), (P = k))
            : (r(P, k), (k = Yl(E, P.mode, F)), (k.return = P), (P = k)),
          h(P))
        : r(P, k);
    }
    return _e;
  }
  var rr = Gc(!0),
    Yc = Gc(!1),
    es = rn(null),
    ts = null,
    ir = null,
    rl = null;
  function il() {
    rl = ir = ts = null;
  }
  function sl(e) {
    var t = es.current;
    (Te(es), (e._currentValue = t));
  }
  function ol(e, t, r) {
    for (; e !== null;) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function sr(e, t) {
    ((ts = e),
      (rl = ir = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (it = !0), (e.firstContext = null)));
  }
  function gt(e) {
    var t = e._currentValue;
    if (rl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), ir === null)) {
        if (ts === null) throw Error(s(308));
        ((ir = e), (ts.dependencies = { lanes: 0, firstContext: e }));
      } else ir = ir.next = e;
    return t;
  }
  var Cn = null;
  function ll(e) {
    Cn === null ? (Cn = [e]) : Cn.push(e);
  }
  function Qc(e, t, r, o) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), ll(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      Kt(e, o)
    );
  }
  function Kt(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;)
      ((e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return));
    return r.tag === 3 ? r.stateNode : null;
  }
  var ln = !1;
  function al(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Xc(e, t) {
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
  function Gt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function an(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (ae & 2) !== 0)) {
      var a = o.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (o.pending = t),
        Kt(e, r)
      );
    }
    return (
      (a = o.interleaved),
      a === null ? ((t.next = t), ll(o)) : ((t.next = a.next), (a.next = t)),
      (o.interleaved = t),
      Kt(e, r)
    );
  }
  function ns(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), ko(e, r));
    }
  }
  function Zc(e, t) {
    var r = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var a = null,
        u = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var h = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          (u === null ? (a = u = h) : (u = u.next = h), (r = r.next));
        } while (r !== null);
        u === null ? (a = u = t) : (u = u.next = t);
      } else a = u = t;
      ((r = {
        baseState: o.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: o.shared,
        effects: o.effects,
      }),
        (e.updateQueue = r));
      return;
    }
    ((e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t));
  }
  function rs(e, t, r, o) {
    var a = e.updateQueue;
    ln = !1;
    var u = a.firstBaseUpdate,
      h = a.lastBaseUpdate,
      v = a.shared.pending;
    if (v !== null) {
      a.shared.pending = null;
      var x = v,
        M = x.next;
      ((x.next = null), h === null ? (u = M) : (h.next = M), (h = x));
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (v = N.lastBaseUpdate),
        v !== h && (v === null ? (N.firstBaseUpdate = M) : (v.next = M), (N.lastBaseUpdate = x)));
    }
    if (u !== null) {
      var _ = a.baseState;
      ((h = 0), (N = M = x = null), (v = u));
      do {
        var L = v.lane,
          H = v.eventTime;
        if ((o & L) === L) {
          N !== null &&
            (N = N.next =
              {
                eventTime: H,
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null,
              });
          e: {
            var K = e,
              Q = v;
            switch (((L = t), (H = r), Q.tag)) {
              case 1:
                if (((K = Q.payload), typeof K == "function")) {
                  _ = K.call(H, _, L);
                  break e;
                }
                _ = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = Q.payload), (L = typeof K == "function" ? K.call(H, _, L) : K), L == null)
                )
                  break e;
                _ = U({}, _, L);
                break e;
              case 2:
                ln = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64), (L = a.effects), L === null ? (a.effects = [v]) : L.push(v));
        } else
          ((H = {
            eventTime: H,
            lane: L,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            N === null ? ((M = N = H), (x = _)) : (N = N.next = H),
            (h |= L));
        if (((v = v.next), v === null)) {
          if (((v = a.shared.pending), v === null)) break;
          ((L = v),
            (v = L.next),
            (L.next = null),
            (a.lastBaseUpdate = L),
            (a.shared.pending = null));
        }
      } while (!0);
      if (
        (N === null && (x = _),
        (a.baseState = x),
        (a.firstBaseUpdate = M),
        (a.lastBaseUpdate = N),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do ((h |= a.lane), (a = a.next));
        while (a !== t);
      } else u === null && (a.shared.lanes = 0);
      ((An |= h), (e.lanes = h), (e.memoizedState = _));
    }
  }
  function qc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          a = o.callback;
        if (a !== null) {
          if (((o.callback = null), (o = r), typeof a != "function")) throw Error(s(191, a));
          a.call(o);
        }
      }
  }
  var Yr = {},
    _t = rn(Yr),
    Qr = rn(Yr),
    Xr = rn(Yr);
  function Mn(e) {
    if (e === Yr) throw Error(s(174));
    return e;
  }
  function ul(e, t) {
    switch ((we(Xr, t), we(Qr, e), we(_t, Yr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : uo(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = uo(t, e)));
    }
    (Te(_t), we(_t, t));
  }
  function or() {
    (Te(_t), Te(Qr), Te(Xr));
  }
  function Jc(e) {
    Mn(Xr.current);
    var t = Mn(_t.current),
      r = uo(t, e.type);
    t !== r && (we(Qr, e), we(_t, r));
  }
  function cl(e) {
    Qr.current === e && (Te(_t), Te(Qr));
  }
  var Me = rn(0);
  function is(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!"))
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
  var fl = [];
  function dl() {
    for (var e = 0; e < fl.length; e++) fl[e]._workInProgressVersionPrimary = null;
    fl.length = 0;
  }
  var ss = B.ReactCurrentDispatcher,
    hl = B.ReactCurrentBatchConfig,
    Rn = 0,
    Re = null,
    Oe = null,
    Ue = null,
    os = !1,
    Zr = !1,
    qr = 0,
    Hg = 0;
  function Xe() {
    throw Error(s(321));
  }
  function pl(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Tt(e[r], t[r])) return !1;
    return !0;
  }
  function ml(e, t, r, o, a, u) {
    if (
      ((Rn = u),
      (Re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ss.current = e === null || e.memoizedState === null ? Yg : Qg),
      (e = r(o, a)),
      Zr)
    ) {
      u = 0;
      do {
        if (((Zr = !1), (qr = 0), 25 <= u)) throw Error(s(301));
        ((u += 1), (Ue = Oe = null), (t.updateQueue = null), (ss.current = Xg), (e = r(o, a)));
      } while (Zr);
    }
    if (
      ((ss.current = us),
      (t = Oe !== null && Oe.next !== null),
      (Rn = 0),
      (Ue = Oe = Re = null),
      (os = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function gl() {
    var e = qr !== 0;
    return ((qr = 0), e);
  }
  function jt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ue === null ? (Re.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue);
  }
  function yt() {
    if (Oe === null) {
      var e = Re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = Ue === null ? Re.memoizedState : Ue.next;
    if (t !== null) ((Ue = t), (Oe = e));
    else {
      if (e === null) throw Error(s(310));
      ((Oe = e),
        (e = {
          memoizedState: Oe.memoizedState,
          baseState: Oe.baseState,
          baseQueue: Oe.baseQueue,
          queue: Oe.queue,
          next: null,
        }),
        Ue === null ? (Re.memoizedState = Ue = e) : (Ue = Ue.next = e));
    }
    return Ue;
  }
  function Jr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function yl(e) {
    var t = yt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = Oe,
      a = o.baseQueue,
      u = r.pending;
    if (u !== null) {
      if (a !== null) {
        var h = a.next;
        ((a.next = u.next), (u.next = h));
      }
      ((o.baseQueue = a = u), (r.pending = null));
    }
    if (a !== null) {
      ((u = a.next), (o = o.baseState));
      var v = (h = null),
        x = null,
        M = u;
      do {
        var N = M.lane;
        if ((Rn & N) === N)
          (x !== null &&
            (x = x.next =
              {
                lane: 0,
                action: M.action,
                hasEagerState: M.hasEagerState,
                eagerState: M.eagerState,
                next: null,
              }),
            (o = M.hasEagerState ? M.eagerState : e(o, M.action)));
        else {
          var _ = {
            lane: N,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          };
          (x === null ? ((v = x = _), (h = o)) : (x = x.next = _), (Re.lanes |= N), (An |= N));
        }
        M = M.next;
      } while (M !== null && M !== u);
      (x === null ? (h = o) : (x.next = v),
        Tt(o, t.memoizedState) || (it = !0),
        (t.memoizedState = o),
        (t.baseState = h),
        (t.baseQueue = x),
        (r.lastRenderedState = o));
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do ((u = a.lane), (Re.lanes |= u), (An |= u), (a = a.next));
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function vl(e) {
    var t = yt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch,
      a = r.pending,
      u = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var h = (a = a.next);
      do ((u = e(u, h.action)), (h = h.next));
      while (h !== a);
      (Tt(u, t.memoizedState) || (it = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (r.lastRenderedState = u));
    }
    return [u, o];
  }
  function bc() {}
  function ef(e, t) {
    var r = Re,
      o = yt(),
      a = t(),
      u = !Tt(o.memoizedState, a);
    if (
      (u && ((o.memoizedState = a), (it = !0)),
      (o = o.queue),
      wl(rf.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || u || (Ue !== null && Ue.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), br(9, nf.bind(null, r, o, a, t), void 0, null), We === null))
        throw Error(s(349));
      (Rn & 30) !== 0 || tf(r, t, a);
    }
    return a;
  }
  function tf(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Re.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function nf(e, t, r, o) {
    ((t.value = r), (t.getSnapshot = o), sf(t) && of(e));
  }
  function rf(e, t, r) {
    return r(function () {
      sf(t) && of(e);
    });
  }
  function sf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Tt(e, r);
    } catch {
      return !0;
    }
  }
  function of(e) {
    var t = Kt(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function lf(e) {
    var t = jt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Gg.bind(null, Re, e)),
      [t.memoizedState, e]
    );
  }
  function br(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = Re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Re.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function af() {
    return yt().memoizedState;
  }
  function ls(e, t, r, o) {
    var a = jt();
    ((Re.flags |= e), (a.memoizedState = br(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function as(e, t, r, o) {
    var a = yt();
    o = o === void 0 ? null : o;
    var u = void 0;
    if (Oe !== null) {
      var h = Oe.memoizedState;
      if (((u = h.destroy), o !== null && pl(o, h.deps))) {
        a.memoizedState = br(t, r, u, o);
        return;
      }
    }
    ((Re.flags |= e), (a.memoizedState = br(1 | t, r, u, o)));
  }
  function uf(e, t) {
    return ls(8390656, 8, e, t);
  }
  function wl(e, t) {
    return as(2048, 8, e, t);
  }
  function cf(e, t) {
    return as(4, 2, e, t);
  }
  function ff(e, t) {
    return as(4, 4, e, t);
  }
  function df(e, t) {
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
  function hf(e, t, r) {
    return ((r = r != null ? r.concat([e]) : null), as(4, 4, df.bind(null, t, e), r));
  }
  function xl() {}
  function pf(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && pl(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function mf(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && pl(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function gf(e, t, r) {
    return (Rn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (it = !0)), (e.memoizedState = r))
      : (Tt(r, t) || ((r = Ku()), (Re.lanes |= r), (An |= r), (e.baseState = !0)), t);
  }
  function $g(e, t) {
    var r = he;
    ((he = r !== 0 && 4 > r ? r : 4), e(!0));
    var o = hl.transition;
    hl.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((he = r), (hl.transition = o));
    }
  }
  function yf() {
    return yt().memoizedState;
  }
  function Kg(e, t, r) {
    var o = dn(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), vf(e)))
      wf(t, r);
    else if (((r = Qc(e, t, r, o)), r !== null)) {
      var a = be();
      (Rt(r, e, o, a), xf(r, t, o));
    }
  }
  function Gg(e, t, r) {
    var o = dn(e),
      a = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (vf(e)) wf(t, a);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var h = t.lastRenderedState,
            v = u(h, r);
          if (((a.hasEagerState = !0), (a.eagerState = v), Tt(v, h))) {
            var x = t.interleaved;
            (x === null ? ((a.next = a), ll(t)) : ((a.next = x.next), (x.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((r = Qc(e, t, a, o)), r !== null && ((a = be()), Rt(r, e, o, a), xf(r, t, o)));
    }
  }
  function vf(e) {
    var t = e.alternate;
    return e === Re || (t !== null && t === Re);
  }
  function wf(e, t) {
    Zr = os = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function xf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), ko(e, r));
    }
  }
  var us = {
      readContext: gt,
      useCallback: Xe,
      useContext: Xe,
      useEffect: Xe,
      useImperativeHandle: Xe,
      useInsertionEffect: Xe,
      useLayoutEffect: Xe,
      useMemo: Xe,
      useReducer: Xe,
      useRef: Xe,
      useState: Xe,
      useDebugValue: Xe,
      useDeferredValue: Xe,
      useTransition: Xe,
      useMutableSource: Xe,
      useSyncExternalStore: Xe,
      useId: Xe,
      unstable_isNewReconciler: !1,
    },
    Yg = {
      readContext: gt,
      useCallback: function (e, t) {
        return ((jt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: gt,
      useEffect: uf,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), ls(4194308, 4, df.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return ls(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ls(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = jt();
        return ((t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, r) {
        var o = jt();
        return (
          (t = r !== void 0 ? r(t) : t),
          (o.memoizedState = o.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (o.queue = e),
          (e = e.dispatch = Kg.bind(null, Re, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = jt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: lf,
      useDebugValue: xl,
      useDeferredValue: function (e) {
        return (jt().memoizedState = e);
      },
      useTransition: function () {
        var e = lf(!1),
          t = e[0];
        return ((e = $g.bind(null, e[1])), (jt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = Re,
          a = jt();
        if (Ee) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), We === null)) throw Error(s(349));
          (Rn & 30) !== 0 || tf(o, t, r);
        }
        a.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (a.queue = u),
          uf(rf.bind(null, o, u, e), [e]),
          (o.flags |= 2048),
          br(9, nf.bind(null, o, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = jt(),
          t = We.identifierPrefix;
        if (Ee) {
          var r = $t,
            o = Ht;
          ((r = (o & ~(1 << (32 - kt(o) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = qr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":"));
        } else ((r = Hg++), (t = ":" + t + "r" + r.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Qg = {
      readContext: gt,
      useCallback: pf,
      useContext: gt,
      useEffect: wl,
      useImperativeHandle: hf,
      useInsertionEffect: cf,
      useLayoutEffect: ff,
      useMemo: mf,
      useReducer: yl,
      useRef: af,
      useState: function () {
        return yl(Jr);
      },
      useDebugValue: xl,
      useDeferredValue: function (e) {
        var t = yt();
        return gf(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = yl(Jr)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: bc,
      useSyncExternalStore: ef,
      useId: yf,
      unstable_isNewReconciler: !1,
    },
    Xg = {
      readContext: gt,
      useCallback: pf,
      useContext: gt,
      useEffect: wl,
      useImperativeHandle: hf,
      useInsertionEffect: cf,
      useLayoutEffect: ff,
      useMemo: mf,
      useReducer: vl,
      useRef: af,
      useState: function () {
        return vl(Jr);
      },
      useDebugValue: xl,
      useDeferredValue: function (e) {
        var t = yt();
        return Oe === null ? (t.memoizedState = e) : gf(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = vl(Jr)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: bc,
      useSyncExternalStore: ef,
      useId: yf,
      unstable_isNewReconciler: !1,
    };
  function Et(e, t) {
    if (e && e.defaultProps) {
      ((t = U({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Sl(e, t, r, o) {
    ((t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : U({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var cs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Sn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = be(),
        a = dn(e),
        u = Gt(o, a);
      ((u.payload = t),
        r != null && (u.callback = r),
        (t = an(e, u, a)),
        t !== null && (Rt(t, e, a, o), ns(t, e, a)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = be(),
        a = dn(e),
        u = Gt(o, a);
      ((u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = an(e, u, a)),
        t !== null && (Rt(t, e, a, o), ns(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = be(),
        o = dn(e),
        a = Gt(r, o);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = an(e, a, o)),
        t !== null && (Rt(t, e, o, r), ns(t, e, o)));
    },
  };
  function Sf(e, t, r, o, a, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, u, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !zr(r, o) || !zr(a, u)
          : !0
    );
  }
  function kf(e, t, r) {
    var o = !1,
      a = sn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = gt(u))
        : ((a = rt(t) ? Tn : Qe.current),
          (o = t.contextTypes),
          (u = (o = o != null) ? bn(e, a) : sn)),
      (t = new t(r, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = cs),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function Tf(e, t, r, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && cs.enqueueReplaceState(t, t.state, null));
  }
  function kl(e, t, r, o) {
    var a = e.stateNode;
    ((a.props = r), (a.state = e.memoizedState), (a.refs = {}), al(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (a.context = gt(u))
      : ((u = rt(t) ? Tn : Qe.current), (a.context = bn(e, u))),
      (a.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (Sl(e, t, u, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((t = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(),
        t !== a.state && cs.enqueueReplaceState(a, a.state, null),
        rs(e, r, a, o),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function lr(e, t) {
    try {
      var r = "",
        o = t;
      do ((r += ue(o)), (o = o.return));
      while (o);
      var a = r;
    } catch (u) {
      a =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Tl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Pl(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Zg = typeof WeakMap == "function" ? WeakMap : Map;
  function Pf(e, t, r) {
    ((r = Gt(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (ys || ((ys = !0), (zl = o)), Pl(e, t));
      }),
      r
    );
  }
  function Ef(e, t, r) {
    ((r = Gt(-1, r)), (r.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var a = t.value;
      ((r.payload = function () {
        return o(a);
      }),
        (r.callback = function () {
          Pl(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (r.callback = function () {
          (Pl(e, t),
            typeof o != "function" && (cn === null ? (cn = new Set([this])) : cn.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
        }),
      r
    );
  }
  function Cf(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Zg();
      var a = new Set();
      o.set(t, a);
    } else ((a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a)));
    a.has(r) || (a.add(r), (e = cy.bind(null, e, t, r)), t.then(e, e));
  }
  function Mf(e) {
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
  function Rf(e, t, r, o, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null ? (r.tag = 17) : ((t = Gt(-1, 1)), (t.tag = 2), an(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var qg = B.ReactCurrentOwner,
    it = !1;
  function Je(e, t, r, o) {
    t.child = e === null ? Yc(t, null, r, o) : rr(t, e.child, r, o);
  }
  function Af(e, t, r, o, a) {
    r = r.render;
    var u = t.ref;
    return (
      sr(t, a),
      (o = ml(e, t, r, o, u, a)),
      (r = gl()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Yt(e, t, a))
        : (Ee && r && Jo(t), (t.flags |= 1), Je(e, t, o, a), t.child)
    );
  }
  function Df(e, t, r, o, a) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !Gl(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Vf(e, t, u, o, a))
        : ((e = Ts(r.type, null, o, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & a) === 0)) {
      var h = u.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : zr), r(h, o) && e.ref === t.ref))
        return Yt(e, t, a);
    }
    return ((t.flags |= 1), (e = pn(u, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Vf(e, t, r, o, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (zr(u, o) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = o = u), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (it = !0);
        else return ((t.lanes = e.lanes), Yt(e, t, a));
    }
    return El(e, t, r, o, a);
  }
  function Lf(e, t, r) {
    var o = t.pendingProps,
      a = o.children,
      u = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          we(ur, dt),
          (dt |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            we(ur, dt),
            (dt |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = u !== null ? u.baseLanes : r),
          we(ur, dt),
          (dt |= o));
      }
    else
      (u !== null ? ((o = u.baseLanes | r), (t.memoizedState = null)) : (o = r),
        we(ur, dt),
        (dt |= o));
    return (Je(e, t, a, r), t.child);
  }
  function Nf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function El(e, t, r, o, a) {
    var u = rt(r) ? Tn : Qe.current;
    return (
      (u = bn(t, u)),
      sr(t, a),
      (r = ml(e, t, r, o, u, a)),
      (o = gl()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Yt(e, t, a))
        : (Ee && o && Jo(t), (t.flags |= 1), Je(e, t, r, a), t.child)
    );
  }
  function _f(e, t, r, o, a) {
    if (rt(r)) {
      var u = !0;
      Qi(t);
    } else u = !1;
    if ((sr(t, a), t.stateNode === null)) (ds(e, t), kf(t, r, o), kl(t, r, o, a), (o = !0));
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var x = h.context,
        M = r.contextType;
      typeof M == "object" && M !== null
        ? (M = gt(M))
        : ((M = rt(r) ? Tn : Qe.current), (M = bn(t, M)));
      var N = r.getDerivedStateFromProps,
        _ = typeof N == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (_ ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== o || x !== M) && Tf(t, h, o, M)),
        (ln = !1));
      var L = t.memoizedState;
      ((h.state = L),
        rs(t, o, h, a),
        (x = t.memoizedState),
        v !== o || L !== x || nt.current || ln
          ? (typeof N == "function" && (Sl(t, r, N, o), (x = t.memoizedState)),
            (v = ln || Sf(t, r, v, o, L, x, M))
              ? (_ ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" && h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = x)),
            (h.props = o),
            (h.state = x),
            (h.context = M),
            (o = v))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), (o = !1)));
    } else {
      ((h = t.stateNode),
        Xc(e, t),
        (v = t.memoizedProps),
        (M = t.type === t.elementType ? v : Et(t.type, v)),
        (h.props = M),
        (_ = t.pendingProps),
        (L = h.context),
        (x = r.contextType),
        typeof x == "object" && x !== null
          ? (x = gt(x))
          : ((x = rt(r) ? Tn : Qe.current), (x = bn(t, x))));
      var H = r.getDerivedStateFromProps;
      ((N = typeof H == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== _ || L !== x) && Tf(t, h, o, x)),
        (ln = !1),
        (L = t.memoizedState),
        (h.state = L),
        rs(t, o, h, a));
      var K = t.memoizedState;
      v !== _ || L !== K || nt.current || ln
        ? (typeof H == "function" && (Sl(t, r, H, o), (K = t.memoizedState)),
          (M = ln || Sf(t, r, M, o, L, K, x) || !1)
            ? (N ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, K, x),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, K, x)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (v === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = K)),
          (h.props = o),
          (h.state = K),
          (h.context = x),
          (o = M))
        : (typeof h.componentDidUpdate != "function" ||
            (v === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Cl(e, t, r, o, u, a);
  }
  function Cl(e, t, r, o, a, u) {
    Nf(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return (a && Oc(t, r, !1), Yt(e, t, u));
    ((o = t.stateNode), (qg.current = t));
    var v = h && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = rr(t, e.child, null, u)), (t.child = rr(t, null, v, u)))
        : Je(e, t, v, u),
      (t.memoizedState = o.state),
      a && Oc(t, r, !0),
      t.child
    );
  }
  function jf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ic(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ic(e, t.context, !1),
      ul(e, t.containerInfo));
  }
  function If(e, t, r, o, a) {
    return (nr(), nl(a), (t.flags |= 256), Je(e, t, r, o), t.child);
  }
  var Ml = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Rl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ff(e, t, r) {
    var o = t.pendingProps,
      a = Me.current,
      u = !1,
      h = (t.flags & 128) !== 0,
      v;
    if (
      ((v = h) || (v = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      v ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (a |= 1),
      we(Me, a & 1),
      e === null)
    )
      return (
        tl(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((h = o.children),
            (e = o.fallback),
            u
              ? ((o = t.mode),
                (u = t.child),
                (h = { mode: "hidden", children: h }),
                (o & 1) === 0 && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = h))
                  : (u = Ps(h, o, 0, null)),
                (e = Nn(e, o, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Rl(r)),
                (t.memoizedState = Ml),
                e)
              : Al(t, h))
      );
    if (((a = e.memoizedState), a !== null && ((v = a.dehydrated), v !== null)))
      return Jg(e, t, h, o, v, a, r);
    if (u) {
      ((u = o.fallback), (h = t.mode), (a = e.child), (v = a.sibling));
      var x = { mode: "hidden", children: o.children };
      return (
        (h & 1) === 0 && t.child !== a
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = x), (t.deletions = null))
          : ((o = pn(a, x)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
        v !== null ? (u = pn(v, u)) : ((u = Nn(u, h, r, null)), (u.flags |= 2)),
        (u.return = t),
        (o.return = t),
        (o.sibling = u),
        (t.child = o),
        (o = u),
        (u = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? Rl(r)
            : { baseLanes: h.baseLanes | r, cachePool: null, transitions: h.transitions }),
        (u.memoizedState = h),
        (u.childLanes = e.childLanes & ~r),
        (t.memoizedState = Ml),
        o
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (o = pn(u, { mode: "visible", children: o.children })),
      (t.mode & 1) === 0 && (o.lanes = r),
      (o.return = t),
      (o.sibling = null),
      e !== null &&
        ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function Al(e, t) {
    return (
      (t = Ps({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fs(e, t, r, o) {
    return (
      o !== null && nl(o),
      rr(t, e.child, null, r),
      (e = Al(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Jg(e, t, r, o, a, u, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = Tl(Error(s(422)))), fs(e, t, h, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = o.fallback),
            (a = t.mode),
            (o = Ps({ mode: "visible", children: o.children }, a, 0, null)),
            (u = Nn(u, a, h, null)),
            (u.flags |= 2),
            (o.return = t),
            (u.return = t),
            (o.sibling = u),
            (t.child = o),
            (t.mode & 1) !== 0 && rr(t, e.child, null, h),
            (t.child.memoizedState = Rl(h)),
            (t.memoizedState = Ml),
            u);
    if ((t.mode & 1) === 0) return fs(e, t, h, null);
    if (a.data === "$!") {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var v = o.dgst;
      return ((o = v), (u = Error(s(419))), (o = Tl(u, o, void 0)), fs(e, t, h, o));
    }
    if (((v = (h & e.childLanes) !== 0), it || v)) {
      if (((o = We), o !== null)) {
        switch (h & -h) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
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
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        ((a = (a & (o.suspendedLanes | h)) !== 0 ? 0 : a),
          a !== 0 && a !== u.retryLane && ((u.retryLane = a), Kt(e, a), Rt(o, e, a, -1)));
      }
      return (Kl(), (o = Tl(Error(s(421)))), fs(e, t, h, o));
    }
    return a.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = fy.bind(null, e)), (a._reactRetry = t), null)
      : ((e = u.treeContext),
        (ft = nn(a.nextSibling)),
        (ct = t),
        (Ee = !0),
        (Pt = null),
        e !== null &&
          ((pt[mt++] = Ht),
          (pt[mt++] = $t),
          (pt[mt++] = Pn),
          (Ht = e.id),
          ($t = e.overflow),
          (Pn = t)),
        (t = Al(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Of(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), ol(e.return, t, r));
  }
  function Dl(e, t, r, o, a) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: a,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = o),
        (u.tail = r),
        (u.tailMode = a));
  }
  function zf(e, t, r) {
    var o = t.pendingProps,
      a = o.revealOrder,
      u = o.tail;
    if ((Je(e, t, o.children, r), (o = Me.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Of(e, r, t);
          else if (e.tag === 19) Of(e, r, t);
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
      o &= 1;
    }
    if ((we(Me, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (r = t.child, a = null; r !== null;)
            ((e = r.alternate), e !== null && is(e) === null && (a = r), (r = r.sibling));
          ((r = a),
            r === null ? ((a = t.child), (t.child = null)) : ((a = r.sibling), (r.sibling = null)),
            Dl(t, !1, a, r, u));
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null;) {
            if (((e = a.alternate), e !== null && is(e) === null)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = r), (r = a), (a = e));
          }
          Dl(t, !0, r, null, u);
          break;
        case "together":
          Dl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ds(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Yt(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (An |= t.lanes), (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, r = pn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;)
        ((e = e.sibling), (r = r.sibling = pn(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function bg(e, t, r) {
    switch (t.tag) {
      case 3:
        (jf(t), nr());
        break;
      case 5:
        Jc(t);
        break;
      case 1:
        rt(t.type) && Qi(t);
        break;
      case 4:
        ul(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value;
        (we(es, o._currentValue), (o._currentValue = a));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (we(Me, Me.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Ff(e, t, r)
              : (we(Me, Me.current & 1), (e = Yt(e, t, r)), e !== null ? e.sibling : null);
        we(Me, Me.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return zf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          we(Me, Me.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Lf(e, t, r));
    }
    return Yt(e, t, r);
  }
  var Bf, Vl, Uf, Wf;
  ((Bf = function (e, t) {
    for (var r = t.child; r !== null;) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        ((r.child.return = r), (r = r.child));
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null;) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      ((r.sibling.return = r.return), (r = r.sibling));
    }
  }),
    (Vl = function () {}),
    (Uf = function (e, t, r, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        ((e = t.stateNode), Mn(_t.current));
        var u = null;
        switch (r) {
          case "input":
            ((a = so(e, a)), (o = so(e, o)), (u = []));
            break;
          case "select":
            ((a = U({}, a, { value: void 0 })), (o = U({}, o, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((a = ao(e, a)), (o = ao(e, o)), (u = []));
            break;
          default:
            typeof a.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Ki);
        }
        co(r, o);
        var h;
        r = null;
        for (M in a)
          if (!o.hasOwnProperty(M) && a.hasOwnProperty(M) && a[M] != null)
            if (M === "style") {
              var v = a[M];
              for (h in v) v.hasOwnProperty(h) && (r || (r = {}), (r[h] = ""));
            } else
              M !== "dangerouslySetInnerHTML" &&
                M !== "children" &&
                M !== "suppressContentEditableWarning" &&
                M !== "suppressHydrationWarning" &&
                M !== "autoFocus" &&
                (c.hasOwnProperty(M) ? u || (u = []) : (u = u || []).push(M, null));
        for (M in o) {
          var x = o[M];
          if (
            ((v = a != null ? a[M] : void 0),
            o.hasOwnProperty(M) && x !== v && (x != null || v != null))
          )
            if (M === "style")
              if (v) {
                for (h in v)
                  !v.hasOwnProperty(h) ||
                    (x && x.hasOwnProperty(h)) ||
                    (r || (r = {}), (r[h] = ""));
                for (h in x) x.hasOwnProperty(h) && v[h] !== x[h] && (r || (r = {}), (r[h] = x[h]));
              } else (r || (u || (u = []), u.push(M, r)), (r = x));
            else
              M === "dangerouslySetInnerHTML"
                ? ((x = x ? x.__html : void 0),
                  (v = v ? v.__html : void 0),
                  x != null && v !== x && (u = u || []).push(M, x))
                : M === "children"
                  ? (typeof x != "string" && typeof x != "number") || (u = u || []).push(M, "" + x)
                  : M !== "suppressContentEditableWarning" &&
                    M !== "suppressHydrationWarning" &&
                    (c.hasOwnProperty(M)
                      ? (x != null && M === "onScroll" && ke("scroll", e), u || v === x || (u = []))
                      : (u = u || []).push(M, x));
        }
        r && (u = u || []).push("style", r);
        var M = u;
        (t.updateQueue = M) && (t.flags |= 4);
      }
    }),
    (Wf = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    }));
  function ei(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null;) (t.alternate !== null && (r = t), (t = t.sibling));
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var o = null; r !== null;) (r.alternate !== null && (o = r), (r = r.sibling));
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      o = 0;
    if (t)
      for (var a = e.child; a !== null;)
        ((r |= a.lanes | a.childLanes),
          (o |= a.subtreeFlags & 14680064),
          (o |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; a !== null;)
        ((r |= a.lanes | a.childLanes),
          (o |= a.subtreeFlags),
          (o |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = r), t);
  }
  function ey(e, t, r) {
    var o = t.pendingProps;
    switch ((bo(t), t.tag)) {
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
        return (Ze(t), null);
      case 1:
        return (rt(t.type) && Yi(), Ze(t), null);
      case 3:
        return (
          (o = t.stateNode),
          or(),
          Te(nt),
          Te(Qe),
          dl(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ji(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pt !== null && (Wl(Pt), (Pt = null)))),
          Vl(e, t),
          Ze(t),
          null
        );
      case 5:
        cl(t);
        var a = Mn(Xr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (Uf(e, t, r, o, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ze(t), null);
          }
          if (((e = Mn(_t.current)), Ji(t))) {
            ((o = t.stateNode), (r = t.type));
            var u = t.memoizedProps;
            switch (((o[Nt] = t), (o[$r] = u), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                (ke("cancel", o), ke("close", o));
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", o);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Ur.length; a++) ke(Ur[a], o);
                break;
              case "source":
                ke("error", o);
                break;
              case "img":
              case "image":
              case "link":
                (ke("error", o), ke("load", o));
                break;
              case "details":
                ke("toggle", o);
                break;
              case "input":
                (Su(o, u), ke("invalid", o));
                break;
              case "select":
                ((o._wrapperState = { wasMultiple: !!u.multiple }), ke("invalid", o));
                break;
              case "textarea":
                (Pu(o, u), ke("invalid", o));
            }
            (co(r, u), (a = null));
            for (var h in u)
              if (u.hasOwnProperty(h)) {
                var v = u[h];
                h === "children"
                  ? typeof v == "string"
                    ? o.textContent !== v &&
                      (u.suppressHydrationWarning !== !0 && $i(o.textContent, v, e),
                      (a = ["children", v]))
                    : typeof v == "number" &&
                      o.textContent !== "" + v &&
                      (u.suppressHydrationWarning !== !0 && $i(o.textContent, v, e),
                      (a = ["children", "" + v]))
                  : c.hasOwnProperty(h) && v != null && h === "onScroll" && ke("scroll", o);
              }
            switch (r) {
              case "input":
                (Si(o), Tu(o, u, !0));
                break;
              case "textarea":
                (Si(o), Cu(o));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (o.onclick = Ki);
            }
            ((o = a), (t.updateQueue = o), o !== null && (t.flags |= 4));
          } else {
            ((h = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Mu(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = h.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == "string"
                    ? (e = h.createElement(r, { is: o.is }))
                    : ((e = h.createElement(r)),
                      r === "select" &&
                        ((h = e), o.multiple ? (h.multiple = !0) : o.size && (h.size = o.size)))
                : (e = h.createElementNS(e, r)),
              (e[Nt] = t),
              (e[$r] = o),
              Bf(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = fo(r, o)), r)) {
                case "dialog":
                  (ke("cancel", e), ke("close", e), (a = o));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ke("load", e), (a = o));
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Ur.length; a++) ke(Ur[a], e);
                  a = o;
                  break;
                case "source":
                  (ke("error", e), (a = o));
                  break;
                case "img":
                case "image":
                case "link":
                  (ke("error", e), ke("load", e), (a = o));
                  break;
                case "details":
                  (ke("toggle", e), (a = o));
                  break;
                case "input":
                  (Su(e, o), (a = so(e, o)), ke("invalid", e));
                  break;
                case "option":
                  a = o;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (a = U({}, o, { value: void 0 })),
                    ke("invalid", e));
                  break;
                case "textarea":
                  (Pu(e, o), (a = ao(e, o)), ke("invalid", e));
                  break;
                default:
                  a = o;
              }
              (co(r, a), (v = a));
              for (u in v)
                if (v.hasOwnProperty(u)) {
                  var x = v[u];
                  u === "style"
                    ? Du(e, x)
                    : u === "dangerouslySetInnerHTML"
                      ? ((x = x ? x.__html : void 0), x != null && Ru(e, x))
                      : u === "children"
                        ? typeof x == "string"
                          ? (r !== "textarea" || x !== "") && kr(e, x)
                          : typeof x == "number" && kr(e, "" + x)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (c.hasOwnProperty(u)
                            ? x != null && u === "onScroll" && ke("scroll", e)
                            : x != null && O(e, u, x, h));
                }
              switch (r) {
                case "input":
                  (Si(e), Tu(e, o, !1));
                  break;
                case "textarea":
                  (Si(e), Cu(e));
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + de(o.value));
                  break;
                case "select":
                  ((e.multiple = !!o.multiple),
                    (u = o.value),
                    u != null
                      ? Un(e, !!o.multiple, u, !1)
                      : o.defaultValue != null && Un(e, !!o.multiple, o.defaultValue, !0));
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Ki);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ze(t), null);
      case 6:
        if (e && t.stateNode != null) Wf(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((r = Mn(Xr.current)), Mn(_t.current), Ji(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[Nt] = t),
              (u = o.nodeValue !== r) && ((e = ct), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $i(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $i(o.nodeValue, r, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
              (o[Nt] = t),
              (t.stateNode = o));
        }
        return (Ze(t), null);
      case 13:
        if (
          (Te(Me),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ee && ft !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            ($c(), nr(), (t.flags |= 98560), (u = !1));
          else if (((u = Ji(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(s(317));
              u[Nt] = t;
            } else (nr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ze(t), (u = !1));
          } else (Pt !== null && (Wl(Pt), (Pt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Me.current & 1) !== 0 ? ze === 0 && (ze = 3) : Kl())),
            t.updateQueue !== null && (t.flags |= 4),
            Ze(t),
            null);
      case 4:
        return (or(), Vl(e, t), e === null && Wr(t.stateNode.containerInfo), Ze(t), null);
      case 10:
        return (sl(t.type._context), Ze(t), null);
      case 17:
        return (rt(t.type) && Yi(), Ze(t), null);
      case 19:
        if ((Te(Me), (u = t.memoizedState), u === null)) return (Ze(t), null);
        if (((o = (t.flags & 128) !== 0), (h = u.rendering), h === null))
          if (o) ei(u, !1);
          else {
            if (ze !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((h = is(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      ei(u, !1),
                      o = h.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = r,
                      r = t.child;
                    r !== null;
                  )
                    ((u = r),
                      (e = o),
                      (u.flags &= 14680066),
                      (h = u.alternate),
                      h === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = h.childLanes),
                          (u.lanes = h.lanes),
                          (u.child = h.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = h.memoizedProps),
                          (u.memoizedState = h.memoizedState),
                          (u.updateQueue = h.updateQueue),
                          (u.type = h.type),
                          (e = h.dependencies),
                          (u.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (r = r.sibling));
                  return (we(Me, (Me.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Ne() > cr &&
              ((t.flags |= 128), (o = !0), ei(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = is(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                ei(u, !0),
                u.tail === null && u.tailMode === "hidden" && !h.alternate && !Ee)
              )
                return (Ze(t), null);
            } else
              2 * Ne() - u.renderingStartTime > cr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), ei(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((r = u.last), r !== null ? (r.sibling = h) : (t.child = h), (u.last = h));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Ne()),
            (t.sibling = null),
            (r = Me.current),
            we(Me, o ? (r & 1) | 2 : r & 1),
            t)
          : (Ze(t), null);
      case 22:
      case 23:
        return (
          $l(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (dt & 1073741824) !== 0 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ze(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function ty(e, t) {
    switch ((bo(t), t.tag)) {
      case 1:
        return (
          rt(t.type) && Yi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          or(),
          Te(nt),
          Te(Qe),
          dl(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (cl(t), null);
      case 13:
        if ((Te(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          nr();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Te(Me), null);
      case 4:
        return (or(), null);
      case 10:
        return (sl(t.type._context), null);
      case 22:
      case 23:
        return ($l(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hs = !1,
    qe = !1,
    ny = typeof WeakSet == "function" ? WeakSet : Set,
    $ = null;
  function ar(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (o) {
          De(e, t, o);
        }
      else r.current = null;
  }
  function Ll(e, t, r) {
    try {
      r();
    } catch (o) {
      De(e, t, o);
    }
  }
  var Hf = !1;
  function ry(e, t) {
    if ((($o = Ni), (e = xc()), Io(e))) {
      if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var o = r.getSelection && r.getSelection();
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode;
            var a = o.anchorOffset,
              u = o.focusNode;
            o = o.focusOffset;
            try {
              (r.nodeType, u.nodeType);
            } catch {
              r = null;
              break e;
            }
            var h = 0,
              v = -1,
              x = -1,
              M = 0,
              N = 0,
              _ = e,
              L = null;
            t: for (;;) {
              for (
                var H;
                _ !== r || (a !== 0 && _.nodeType !== 3) || (v = h + a),
                  _ !== u || (o !== 0 && _.nodeType !== 3) || (x = h + o),
                  _.nodeType === 3 && (h += _.nodeValue.length),
                  (H = _.firstChild) !== null;
              )
                ((L = _), (_ = H));
              for (;;) {
                if (_ === e) break t;
                if (
                  (L === r && ++M === a && (v = h),
                  L === u && ++N === o && (x = h),
                  (H = _.nextSibling) !== null)
                )
                  break;
                ((_ = L), (L = _.parentNode));
              }
              _ = H;
            }
            r = v === -1 || x === -1 ? null : { start: v, end: x };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Ko = { focusedElem: e, selectionRange: r }, Ni = !1, $ = t; $ !== null;)
      if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), ($ = e));
      else
        for (; $ !== null;) {
          t = $;
          try {
            var K = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (K !== null) {
                    var Q = K.memoizedProps,
                      _e = K.memoizedState,
                      P = t.stateNode,
                      k = P.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Q : Et(t.type, Q),
                        _e,
                      );
                    P.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var E = t.stateNode.containerInfo;
                  E.nodeType === 1
                    ? (E.textContent = "")
                    : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (F) {
            De(t, t.return, F);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), ($ = e));
            break;
          }
          $ = t.return;
        }
    return ((K = Hf), (Hf = !1), K);
  }
  function ti(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var a = (o = o.next);
      do {
        if ((a.tag & e) === e) {
          var u = a.destroy;
          ((a.destroy = void 0), u !== void 0 && Ll(t, r, u));
        }
        a = a.next;
      } while (a !== o);
    }
  }
  function ps(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var o = r.create;
          r.destroy = o();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Nl(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function $f(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), $f(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Nt], delete t[$r], delete t[Xo], delete t[zg], delete t[Bg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Kf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Gf(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Kf(e.return)) return null;
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
  function _l(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Ki)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (_l(e, t, r), e = e.sibling; e !== null;) (_l(e, t, r), (e = e.sibling));
  }
  function jl(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (jl(e, t, r), e = e.sibling; e !== null;) (jl(e, t, r), (e = e.sibling));
  }
  var $e = null,
    Ct = !1;
  function un(e, t, r) {
    for (r = r.child; r !== null;) (Yf(e, t, r), (r = r.sibling));
  }
  function Yf(e, t, r) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function")
      try {
        Lt.onCommitFiberUnmount(Mi, r);
      } catch {}
    switch (r.tag) {
      case 5:
        qe || ar(r, t);
      case 6:
        var o = $e,
          a = Ct;
        (($e = null),
          un(e, t, r),
          ($e = o),
          (Ct = a),
          $e !== null &&
            (Ct
              ? ((e = $e),
                (r = r.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
              : $e.removeChild(r.stateNode)));
        break;
      case 18:
        $e !== null &&
          (Ct
            ? ((e = $e),
              (r = r.stateNode),
              e.nodeType === 8 ? Qo(e.parentNode, r) : e.nodeType === 1 && Qo(e, r),
              Nr(e))
            : Qo($e, r.stateNode));
        break;
      case 4:
        ((o = $e),
          (a = Ct),
          ($e = r.stateNode.containerInfo),
          (Ct = !0),
          un(e, t, r),
          ($e = o),
          (Ct = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!qe && ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          a = o = o.next;
          do {
            var u = a,
              h = u.destroy;
            ((u = u.tag),
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Ll(r, t, h),
              (a = a.next));
          } while (a !== o);
        }
        un(e, t, r);
        break;
      case 1:
        if (!qe && (ar(r, t), (o = r.stateNode), typeof o.componentWillUnmount == "function"))
          try {
            ((o.props = r.memoizedProps), (o.state = r.memoizedState), o.componentWillUnmount());
          } catch (v) {
            De(r, t, v);
          }
        un(e, t, r);
        break;
      case 21:
        un(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((qe = (o = qe) || r.memoizedState !== null), un(e, t, r), (qe = o))
          : un(e, t, r);
        break;
      default:
        un(e, t, r);
    }
  }
  function Qf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new ny()),
        t.forEach(function (o) {
          var a = dy.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(a, a));
        }));
    }
  }
  function Mt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var a = r[o];
        try {
          var u = e,
            h = t,
            v = h;
          e: for (; v !== null;) {
            switch (v.tag) {
              case 5:
                (($e = v.stateNode), (Ct = !1));
                break e;
              case 3:
                (($e = v.stateNode.containerInfo), (Ct = !0));
                break e;
              case 4:
                (($e = v.stateNode.containerInfo), (Ct = !0));
                break e;
            }
            v = v.return;
          }
          if ($e === null) throw Error(s(160));
          (Yf(u, h, a), ($e = null), (Ct = !1));
          var x = a.alternate;
          (x !== null && (x.return = null), (a.return = null));
        } catch (M) {
          De(a, t, M);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (Xf(t, e), (t = t.sibling));
  }
  function Xf(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Mt(t, e), It(e), o & 4)) {
          try {
            (ti(3, e, e.return), ps(3, e));
          } catch (Q) {
            De(e, e.return, Q);
          }
          try {
            ti(5, e, e.return);
          } catch (Q) {
            De(e, e.return, Q);
          }
        }
        break;
      case 1:
        (Mt(t, e), It(e), o & 512 && r !== null && ar(r, r.return));
        break;
      case 5:
        if ((Mt(t, e), It(e), o & 512 && r !== null && ar(r, r.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            kr(a, "");
          } catch (Q) {
            De(e, e.return, Q);
          }
        }
        if (o & 4 && ((a = e.stateNode), a != null)) {
          var u = e.memoizedProps,
            h = r !== null ? r.memoizedProps : u,
            v = e.type,
            x = e.updateQueue;
          if (((e.updateQueue = null), x !== null))
            try {
              (v === "input" && u.type === "radio" && u.name != null && ku(a, u), fo(v, h));
              var M = fo(v, u);
              for (h = 0; h < x.length; h += 2) {
                var N = x[h],
                  _ = x[h + 1];
                N === "style"
                  ? Du(a, _)
                  : N === "dangerouslySetInnerHTML"
                    ? Ru(a, _)
                    : N === "children"
                      ? kr(a, _)
                      : O(a, N, _, M);
              }
              switch (v) {
                case "input":
                  oo(a, u);
                  break;
                case "textarea":
                  Eu(a, u);
                  break;
                case "select":
                  var L = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!u.multiple;
                  var H = u.value;
                  H != null
                    ? Un(a, !!u.multiple, H, !1)
                    : L !== !!u.multiple &&
                      (u.defaultValue != null
                        ? Un(a, !!u.multiple, u.defaultValue, !0)
                        : Un(a, !!u.multiple, u.multiple ? [] : "", !1));
              }
              a[$r] = u;
            } catch (Q) {
              De(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((Mt(t, e), It(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((a = e.stateNode), (u = e.memoizedProps));
          try {
            a.nodeValue = u;
          } catch (Q) {
            De(e, e.return, Q);
          }
        }
        break;
      case 3:
        if ((Mt(t, e), It(e), o & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            Nr(t.containerInfo);
          } catch (Q) {
            De(e, e.return, Q);
          }
        break;
      case 4:
        (Mt(t, e), It(e));
        break;
      case 13:
        (Mt(t, e),
          It(e),
          (a = e.child),
          a.flags & 8192 &&
            ((u = a.memoizedState !== null),
            (a.stateNode.isHidden = u),
            !u || (a.alternate !== null && a.alternate.memoizedState !== null) || (Ol = Ne())),
          o & 4 && Qf(e));
        break;
      case 22:
        if (
          ((N = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((qe = (M = qe) || N), Mt(t, e), (qe = M)) : Mt(t, e),
          It(e),
          o & 8192)
        ) {
          if (
            ((M = e.memoizedState !== null), (e.stateNode.isHidden = M) && !N && (e.mode & 1) !== 0)
          )
            for ($ = e, N = e.child; N !== null;) {
              for (_ = $ = N; $ !== null;) {
                switch (((L = $), (H = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ti(4, L, L.return);
                    break;
                  case 1:
                    ar(L, L.return);
                    var K = L.stateNode;
                    if (typeof K.componentWillUnmount == "function") {
                      ((o = L), (r = L.return));
                      try {
                        ((t = o),
                          (K.props = t.memoizedProps),
                          (K.state = t.memoizedState),
                          K.componentWillUnmount());
                      } catch (Q) {
                        De(o, r, Q);
                      }
                    }
                    break;
                  case 5:
                    ar(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      Jf(_);
                      continue;
                    }
                }
                H !== null ? ((H.return = L), ($ = H)) : Jf(_);
              }
              N = N.sibling;
            }
          e: for (N = null, _ = e; ;) {
            if (_.tag === 5) {
              if (N === null) {
                N = _;
                try {
                  ((a = _.stateNode),
                    M
                      ? ((u = a.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((v = _.stateNode),
                        (x = _.memoizedProps.style),
                        (h = x != null && x.hasOwnProperty("display") ? x.display : null),
                        (v.style.display = Au("display", h))));
                } catch (Q) {
                  De(e, e.return, Q);
                }
              }
            } else if (_.tag === 6) {
              if (N === null)
                try {
                  _.stateNode.nodeValue = M ? "" : _.memoizedProps;
                } catch (Q) {
                  De(e, e.return, Q);
                }
            } else if (
              ((_.tag !== 22 && _.tag !== 23) || _.memoizedState === null || _ === e) &&
              _.child !== null
            ) {
              ((_.child.return = _), (_ = _.child));
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null;) {
              if (_.return === null || _.return === e) break e;
              (N === _ && (N = null), (_ = _.return));
            }
            (N === _ && (N = null), (_.sibling.return = _.return), (_ = _.sibling));
          }
        }
        break;
      case 19:
        (Mt(t, e), It(e), o & 4 && Qf(e));
        break;
      case 21:
        break;
      default:
        (Mt(t, e), It(e));
    }
  }
  function It(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null;) {
            if (Kf(r)) {
              var o = r;
              break e;
            }
            r = r.return;
          }
          throw Error(s(160));
        }
        switch (o.tag) {
          case 5:
            var a = o.stateNode;
            o.flags & 32 && (kr(a, ""), (o.flags &= -33));
            var u = Gf(e);
            jl(e, u, a);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              v = Gf(e);
            _l(e, v, h);
            break;
          default:
            throw Error(s(161));
        }
      } catch (x) {
        De(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function iy(e, t, r) {
    (($ = e), Zf(e));
  }
  function Zf(e, t, r) {
    for (var o = (e.mode & 1) !== 0; $ !== null;) {
      var a = $,
        u = a.child;
      if (a.tag === 22 && o) {
        var h = a.memoizedState !== null || hs;
        if (!h) {
          var v = a.alternate,
            x = (v !== null && v.memoizedState !== null) || qe;
          v = hs;
          var M = qe;
          if (((hs = h), (qe = x) && !M))
            for ($ = a; $ !== null;)
              ((h = $),
                (x = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? bf(a)
                  : x !== null
                    ? ((x.return = h), ($ = x))
                    : bf(a));
          for (; u !== null;) (($ = u), Zf(u), (u = u.sibling));
          (($ = a), (hs = v), (qe = M));
        }
        qf(e);
      } else (a.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = a), ($ = u)) : qf(e);
    }
  }
  function qf(e) {
    for (; $ !== null;) {
      var t = $;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                qe || ps(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !qe)
                  if (r === null) o.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type ? r.memoizedProps : Et(t.type, r.memoizedProps);
                    o.componentDidUpdate(a, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = t.updateQueue;
                u !== null && qc(t, u, o);
                break;
              case 3:
                var h = t.updateQueue;
                if (h !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  qc(t, h, r);
                }
                break;
              case 5:
                var v = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = v;
                  var x = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      x.autoFocus && r.focus();
                      break;
                    case "img":
                      x.src && (r.src = x.src);
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
                  var M = t.alternate;
                  if (M !== null) {
                    var N = M.memoizedState;
                    if (N !== null) {
                      var _ = N.dehydrated;
                      _ !== null && Nr(_);
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
                throw Error(s(163));
            }
          qe || (t.flags & 512 && Nl(t));
        } catch (L) {
          De(t, t.return, L);
        }
      }
      if (t === e) {
        $ = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        ((r.return = t.return), ($ = r));
        break;
      }
      $ = t.return;
    }
  }
  function Jf(e) {
    for (; $ !== null;) {
      var t = $;
      if (t === e) {
        $ = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        ((r.return = t.return), ($ = r));
        break;
      }
      $ = t.return;
    }
  }
  function bf(e) {
    for (; $ !== null;) {
      var t = $;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              ps(4, t);
            } catch (x) {
              De(t, r, x);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var a = t.return;
              try {
                o.componentDidMount();
              } catch (x) {
                De(t, a, x);
              }
            }
            var u = t.return;
            try {
              Nl(t);
            } catch (x) {
              De(t, u, x);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Nl(t);
            } catch (x) {
              De(t, h, x);
            }
        }
      } catch (x) {
        De(t, t.return, x);
      }
      if (t === e) {
        $ = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        ((v.return = t.return), ($ = v));
        break;
      }
      $ = t.return;
    }
  }
  var sy = Math.ceil,
    ms = B.ReactCurrentDispatcher,
    Il = B.ReactCurrentOwner,
    vt = B.ReactCurrentBatchConfig,
    ae = 0,
    We = null,
    Ie = null,
    Ke = 0,
    dt = 0,
    ur = rn(0),
    ze = 0,
    ni = null,
    An = 0,
    gs = 0,
    Fl = 0,
    ri = null,
    st = null,
    Ol = 0,
    cr = 1 / 0,
    Qt = null,
    ys = !1,
    zl = null,
    cn = null,
    vs = !1,
    fn = null,
    ws = 0,
    ii = 0,
    Bl = null,
    xs = -1,
    Ss = 0;
  function be() {
    return (ae & 6) !== 0 ? Ne() : xs !== -1 ? xs : (xs = Ne());
  }
  function dn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && Ke !== 0
        ? Ke & -Ke
        : Wg.transition !== null
          ? (Ss === 0 && (Ss = Ku()), Ss)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ec(e.type))), e);
  }
  function Rt(e, t, r, o) {
    if (50 < ii) throw ((ii = 0), (Bl = null), Error(s(185)));
    (Rr(e, r, o),
      ((ae & 2) === 0 || e !== We) &&
        (e === We && ((ae & 2) === 0 && (gs |= r), ze === 4 && hn(e, Ke)),
        ot(e, o),
        r === 1 && ae === 0 && (t.mode & 1) === 0 && ((cr = Ne() + 500), Xi && on())));
  }
  function ot(e, t) {
    var r = e.callbackNode;
    Wm(e, t);
    var o = Di(e, e === We ? Ke : 0);
    if (o === 0) (r !== null && Wu(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && Wu(r), t === 1))
        (e.tag === 0 ? Ug(td.bind(null, e)) : zc(td.bind(null, e)),
          Fg(function () {
            (ae & 6) === 0 && on();
          }),
          (r = null));
      else {
        switch (Gu(o)) {
          case 1:
            r = wo;
            break;
          case 4:
            r = Hu;
            break;
          case 16:
            r = Ci;
            break;
          case 536870912:
            r = $u;
            break;
          default:
            r = Ci;
        }
        r = ud(r, ed.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function ed(e, t) {
    if (((xs = -1), (Ss = 0), (ae & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (fr() && e.callbackNode !== r) return null;
    var o = Di(e, e === We ? Ke : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = ks(e, o);
    else {
      t = o;
      var a = ae;
      ae |= 2;
      var u = rd();
      (We !== e || Ke !== t) && ((Qt = null), (cr = Ne() + 500), Vn(e, t));
      do
        try {
          ay();
          break;
        } catch (v) {
          nd(e, v);
        }
      while (!0);
      (il(), (ms.current = u), (ae = a), Ie !== null ? (t = 0) : ((We = null), (Ke = 0), (t = ze)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = xo(e)), a !== 0 && ((o = a), (t = Ul(e, a)))), t === 1))
        throw ((r = ni), Vn(e, 0), hn(e, o), ot(e, Ne()), r);
      if (t === 6) hn(e, o);
      else {
        if (
          ((a = e.current.alternate),
          (o & 30) === 0 &&
            !oy(a) &&
            ((t = ks(e, o)),
            t === 2 && ((u = xo(e)), u !== 0 && ((o = u), (t = Ul(e, u)))),
            t === 1))
        )
          throw ((r = ni), Vn(e, 0), hn(e, o), ot(e, Ne()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Ln(e, st, Qt);
            break;
          case 3:
            if ((hn(e, o), (o & 130023424) === o && ((t = Ol + 500 - Ne()), 10 < t))) {
              if (Di(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                (be(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = Yo(Ln.bind(null, e, st, Qt), t);
              break;
            }
            Ln(e, st, Qt);
            break;
          case 4:
            if ((hn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, a = -1; 0 < o;) {
              var h = 31 - kt(o);
              ((u = 1 << h), (h = t[h]), h > a && (a = h), (o &= ~u));
            }
            if (
              ((o = a),
              (o = Ne() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                    ? 480
                    : 1080 > o
                      ? 1080
                      : 1920 > o
                        ? 1920
                        : 3e3 > o
                          ? 3e3
                          : 4320 > o
                            ? 4320
                            : 1960 * sy(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Yo(Ln.bind(null, e, st, Qt), o);
              break;
            }
            Ln(e, st, Qt);
            break;
          case 5:
            Ln(e, st, Qt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (ot(e, Ne()), e.callbackNode === r ? ed.bind(null, e) : null);
  }
  function Ul(e, t) {
    var r = ri;
    return (
      e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256),
      (e = ks(e, t)),
      e !== 2 && ((t = st), (st = r), t !== null && Wl(t)),
      e
    );
  }
  function Wl(e) {
    st === null ? (st = e) : st.push.apply(st, e);
  }
  function oy(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var a = r[o],
              u = a.getSnapshot;
            a = a.value;
            try {
              if (!Tt(u(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) ((r.return = t), (t = r));
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
  function hn(e, t) {
    for (
      t &= ~Fl, t &= ~gs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - kt(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function td(e) {
    if ((ae & 6) !== 0) throw Error(s(327));
    fr();
    var t = Di(e, 0);
    if ((t & 1) === 0) return (ot(e, Ne()), null);
    var r = ks(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = xo(e);
      o !== 0 && ((t = o), (r = Ul(e, o)));
    }
    if (r === 1) throw ((r = ni), Vn(e, 0), hn(e, t), ot(e, Ne()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Ln(e, st, Qt),
      ot(e, Ne()),
      null
    );
  }
  function Hl(e, t) {
    var r = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      ((ae = r), ae === 0 && ((cr = Ne() + 500), Xi && on()));
    }
  }
  function Dn(e) {
    fn !== null && fn.tag === 0 && (ae & 6) === 0 && fr();
    var t = ae;
    ae |= 1;
    var r = vt.transition,
      o = he;
    try {
      if (((vt.transition = null), (he = 1), e)) return e();
    } finally {
      ((he = o), (vt.transition = r), (ae = t), (ae & 6) === 0 && on());
    }
  }
  function $l() {
    ((dt = ur.current), Te(ur));
  }
  function Vn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Ig(r)), Ie !== null))
      for (r = Ie.return; r !== null;) {
        var o = r;
        switch ((bo(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Yi());
            break;
          case 3:
            (or(), Te(nt), Te(Qe), dl());
            break;
          case 5:
            cl(o);
            break;
          case 4:
            or();
            break;
          case 13:
            Te(Me);
            break;
          case 19:
            Te(Me);
            break;
          case 10:
            sl(o.type._context);
            break;
          case 22:
          case 23:
            $l();
        }
        r = r.return;
      }
    if (
      ((We = e),
      (Ie = e = pn(e.current, null)),
      (Ke = dt = t),
      (ze = 0),
      (ni = null),
      (Fl = gs = An = 0),
      (st = ri = null),
      Cn !== null)
    ) {
      for (t = 0; t < Cn.length; t++)
        if (((r = Cn[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var a = o.next,
            u = r.pending;
          if (u !== null) {
            var h = u.next;
            ((u.next = a), (o.next = h));
          }
          r.pending = o;
        }
      Cn = null;
    }
    return e;
  }
  function nd(e, t) {
    do {
      var r = Ie;
      try {
        if ((il(), (ss.current = us), os)) {
          for (var o = Re.memoizedState; o !== null;) {
            var a = o.queue;
            (a !== null && (a.pending = null), (o = o.next));
          }
          os = !1;
        }
        if (
          ((Rn = 0),
          (Ue = Oe = Re = null),
          (Zr = !1),
          (qr = 0),
          (Il.current = null),
          r === null || r.return === null)
        ) {
          ((ze = 1), (ni = t), (Ie = null));
          break;
        }
        e: {
          var u = e,
            h = r.return,
            v = r,
            x = t;
          if (
            ((t = Ke),
            (v.flags |= 32768),
            x !== null && typeof x == "object" && typeof x.then == "function")
          ) {
            var M = x,
              N = v,
              _ = N.tag;
            if ((N.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var L = N.alternate;
              L
                ? ((N.updateQueue = L.updateQueue),
                  (N.memoizedState = L.memoizedState),
                  (N.lanes = L.lanes))
                : ((N.updateQueue = null), (N.memoizedState = null));
            }
            var H = Mf(h);
            if (H !== null) {
              ((H.flags &= -257), Rf(H, h, v, u, t), H.mode & 1 && Cf(u, M, t), (t = H), (x = M));
              var K = t.updateQueue;
              if (K === null) {
                var Q = new Set();
                (Q.add(x), (t.updateQueue = Q));
              } else K.add(x);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Cf(u, M, t), Kl());
                break e;
              }
              x = Error(s(426));
            }
          } else if (Ee && v.mode & 1) {
            var _e = Mf(h);
            if (_e !== null) {
              ((_e.flags & 65536) === 0 && (_e.flags |= 256), Rf(_e, h, v, u, t), nl(lr(x, v)));
              break e;
            }
          }
          ((u = x = lr(x, v)),
            ze !== 4 && (ze = 2),
            ri === null ? (ri = [u]) : ri.push(u),
            (u = h));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var P = Pf(u, x, t);
                Zc(u, P);
                break e;
              case 1:
                v = x;
                var k = u.type,
                  E = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == "function" ||
                    (E !== null &&
                      typeof E.componentDidCatch == "function" &&
                      (cn === null || !cn.has(E))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var F = Ef(u, v, t);
                  Zc(u, F);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        sd(r);
      } catch (X) {
        ((t = X), Ie === r && r !== null && (Ie = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function rd() {
    var e = ms.current;
    return ((ms.current = us), e === null ? us : e);
  }
  function Kl() {
    ((ze === 0 || ze === 3 || ze === 2) && (ze = 4),
      We === null || ((An & 268435455) === 0 && (gs & 268435455) === 0) || hn(We, Ke));
  }
  function ks(e, t) {
    var r = ae;
    ae |= 2;
    var o = rd();
    (We !== e || Ke !== t) && ((Qt = null), Vn(e, t));
    do
      try {
        ly();
        break;
      } catch (a) {
        nd(e, a);
      }
    while (!0);
    if ((il(), (ae = r), (ms.current = o), Ie !== null)) throw Error(s(261));
    return ((We = null), (Ke = 0), ze);
  }
  function ly() {
    for (; Ie !== null;) id(Ie);
  }
  function ay() {
    for (; Ie !== null && !Nm();) id(Ie);
  }
  function id(e) {
    var t = ad(e.alternate, e, dt);
    ((e.memoizedProps = e.pendingProps), t === null ? sd(e) : (Ie = t), (Il.current = null));
  }
  function sd(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = ey(r, t, dt)), r !== null)) {
          Ie = r;
          return;
        }
      } else {
        if (((r = ty(r, t)), r !== null)) {
          ((r.flags &= 32767), (Ie = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ze = 6), (Ie = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function Ln(e, t, r) {
    var o = he,
      a = vt.transition;
    try {
      ((vt.transition = null), (he = 1), uy(e, t, r, o));
    } finally {
      ((vt.transition = a), (he = o));
    }
    return null;
  }
  function uy(e, t, r, o) {
    do fr();
    while (fn !== null);
    if ((ae & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = r.lanes | r.childLanes;
    if (
      (Hm(e, u),
      e === We && ((Ie = We = null), (Ke = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        vs ||
        ((vs = !0),
        ud(Ci, function () {
          return (fr(), null);
        })),
      (u = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = vt.transition), (vt.transition = null));
      var h = he;
      he = 1;
      var v = ae;
      ((ae |= 4),
        (Il.current = null),
        ry(e, r),
        Xf(r, e),
        Ag(Ko),
        (Ni = !!$o),
        (Ko = $o = null),
        (e.current = r),
        iy(r),
        _m(),
        (ae = v),
        (he = h),
        (vt.transition = u));
    } else e.current = r;
    if (
      (vs && ((vs = !1), (fn = e), (ws = a)),
      (u = e.pendingLanes),
      u === 0 && (cn = null),
      Fm(r.stateNode),
      ot(e, Ne()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((a = t[r]), o(a.value, { componentStack: a.stack, digest: a.digest }));
    if (ys) throw ((ys = !1), (e = zl), (zl = null), e);
    return (
      (ws & 1) !== 0 && e.tag !== 0 && fr(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === Bl ? ii++ : ((ii = 0), (Bl = e))) : (ii = 0),
      on(),
      null
    );
  }
  function fr() {
    if (fn !== null) {
      var e = Gu(ws),
        t = vt.transition,
        r = he;
      try {
        if (((vt.transition = null), (he = 16 > e ? 16 : e), fn === null)) var o = !1;
        else {
          if (((e = fn), (fn = null), (ws = 0), (ae & 6) !== 0)) throw Error(s(331));
          var a = ae;
          for (ae |= 4, $ = e.current; $ !== null;) {
            var u = $,
              h = u.child;
            if (($.flags & 16) !== 0) {
              var v = u.deletions;
              if (v !== null) {
                for (var x = 0; x < v.length; x++) {
                  var M = v[x];
                  for ($ = M; $ !== null;) {
                    var N = $;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ti(8, N, u);
                    }
                    var _ = N.child;
                    if (_ !== null) ((_.return = N), ($ = _));
                    else
                      for (; $ !== null;) {
                        N = $;
                        var L = N.sibling,
                          H = N.return;
                        if (($f(N), N === M)) {
                          $ = null;
                          break;
                        }
                        if (L !== null) {
                          ((L.return = H), ($ = L));
                          break;
                        }
                        $ = H;
                      }
                  }
                }
                var K = u.alternate;
                if (K !== null) {
                  var Q = K.child;
                  if (Q !== null) {
                    K.child = null;
                    do {
                      var _e = Q.sibling;
                      ((Q.sibling = null), (Q = _e));
                    } while (Q !== null);
                  }
                }
                $ = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null) ((h.return = u), ($ = h));
            else
              e: for (; $ !== null;) {
                if (((u = $), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ti(9, u, u.return);
                  }
                var P = u.sibling;
                if (P !== null) {
                  ((P.return = u.return), ($ = P));
                  break e;
                }
                $ = u.return;
              }
          }
          var k = e.current;
          for ($ = k; $ !== null;) {
            h = $;
            var E = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && E !== null) ((E.return = h), ($ = E));
            else
              e: for (h = k; $ !== null;) {
                if (((v = $), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ps(9, v);
                    }
                  } catch (X) {
                    De(v, v.return, X);
                  }
                if (v === h) {
                  $ = null;
                  break e;
                }
                var F = v.sibling;
                if (F !== null) {
                  ((F.return = v.return), ($ = F));
                  break e;
                }
                $ = v.return;
              }
          }
          if (((ae = a), on(), Lt && typeof Lt.onPostCommitFiberRoot == "function"))
            try {
              Lt.onPostCommitFiberRoot(Mi, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        ((he = r), (vt.transition = t));
      }
    }
    return !1;
  }
  function od(e, t, r) {
    ((t = lr(r, t)),
      (t = Pf(e, t, 1)),
      (e = an(e, t, 1)),
      (t = be()),
      e !== null && (Rr(e, 1, t), ot(e, t)));
  }
  function De(e, t, r) {
    if (e.tag === 3) od(e, e, r);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          od(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" && (cn === null || !cn.has(o)))
          ) {
            ((e = lr(r, e)),
              (e = Ef(t, e, 1)),
              (t = an(t, e, 1)),
              (e = be()),
              t !== null && (Rr(t, 1, e), ot(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function cy(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = be()),
      (e.pingedLanes |= e.suspendedLanes & r),
      We === e &&
        (Ke & r) === r &&
        (ze === 4 || (ze === 3 && (Ke & 130023424) === Ke && 500 > Ne() - Ol)
          ? Vn(e, 0)
          : (Fl |= r)),
      ot(e, t));
  }
  function ld(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ai), (Ai <<= 1), (Ai & 130023424) === 0 && (Ai = 4194304)));
    var r = be();
    ((e = Kt(e, t)), e !== null && (Rr(e, t, r), ot(e, r)));
  }
  function fy(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), ld(e, r));
  }
  function dy(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    (o !== null && o.delete(t), ld(e, r));
  }
  var ad;
  ad = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || nt.current) it = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((it = !1), bg(e, t, r));
        it = (e.flags & 131072) !== 0;
      }
    else ((it = !1), Ee && (t.flags & 1048576) !== 0 && Bc(t, qi, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (ds(e, t), (e = t.pendingProps));
        var a = bn(t, Qe.current);
        (sr(t, r), (a = ml(null, t, o, e, a, r)));
        var u = gl();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              rt(o) ? ((u = !0), Qi(t)) : (u = !1),
              (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              al(t),
              (a.updater = cs),
              (t.stateNode = a),
              (a._reactInternals = t),
              kl(t, o, e, r),
              (t = Cl(null, t, o, !0, u, r)))
            : ((t.tag = 0), Ee && u && Jo(t), Je(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (ds(e, t),
            (e = t.pendingProps),
            (a = o._init),
            (o = a(o._payload)),
            (t.type = o),
            (a = t.tag = py(o)),
            (e = Et(o, e)),
            a)
          ) {
            case 0:
              t = El(null, t, o, e, r);
              break e;
            case 1:
              t = _f(null, t, o, e, r);
              break e;
            case 11:
              t = Af(null, t, o, e, r);
              break e;
            case 14:
              t = Df(null, t, o, Et(o.type, e), r);
              break e;
          }
          throw Error(s(306, o, ""));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Et(o, a)),
          El(e, t, o, a, r)
        );
      case 1:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Et(o, a)),
          _f(e, t, o, a, r)
        );
      case 3:
        e: {
          if ((jf(t), e === null)) throw Error(s(387));
          ((o = t.pendingProps),
            (u = t.memoizedState),
            (a = u.element),
            Xc(e, t),
            rs(t, o, null, r));
          var h = t.memoizedState;
          if (((o = h.element), u.isDehydrated))
            if (
              ((u = {
                element: o,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              ((a = lr(Error(s(423)), t)), (t = If(e, t, o, r, a)));
              break e;
            } else if (o !== a) {
              ((a = lr(Error(s(424)), t)), (t = If(e, t, o, r, a)));
              break e;
            } else
              for (
                ft = nn(t.stateNode.containerInfo.firstChild),
                  ct = t,
                  Ee = !0,
                  Pt = null,
                  r = Yc(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((nr(), o === a)) {
              t = Yt(e, t, r);
              break e;
            }
            Je(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Jc(t),
          e === null && tl(t),
          (o = t.type),
          (a = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = a.children),
          Go(o, a) ? (h = null) : u !== null && Go(o, u) && (t.flags |= 32),
          Nf(e, t),
          Je(e, t, h, r),
          t.child
        );
      case 6:
        return (e === null && tl(t), null);
      case 13:
        return Ff(e, t, r);
      case 4:
        return (
          ul(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = rr(t, null, o, r)) : Je(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Et(o, a)),
          Af(e, t, o, a, r)
        );
      case 7:
        return (Je(e, t, t.pendingProps, r), t.child);
      case 8:
        return (Je(e, t, t.pendingProps.children, r), t.child);
      case 12:
        return (Je(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (a = t.pendingProps),
            (u = t.memoizedProps),
            (h = a.value),
            we(es, o._currentValue),
            (o._currentValue = h),
            u !== null)
          )
            if (Tt(u.value, h)) {
              if (u.children === a.children && !nt.current) {
                t = Yt(e, t, r);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null;) {
                var v = u.dependencies;
                if (v !== null) {
                  h = u.child;
                  for (var x = v.firstContext; x !== null;) {
                    if (x.context === o) {
                      if (u.tag === 1) {
                        ((x = Gt(-1, r & -r)), (x.tag = 2));
                        var M = u.updateQueue;
                        if (M !== null) {
                          M = M.shared;
                          var N = M.pending;
                          (N === null ? (x.next = x) : ((x.next = N.next), (N.next = x)),
                            (M.pending = x));
                        }
                      }
                      ((u.lanes |= r),
                        (x = u.alternate),
                        x !== null && (x.lanes |= r),
                        ol(u.return, r, t),
                        (v.lanes |= r));
                      break;
                    }
                    x = x.next;
                  }
                } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((h = u.return), h === null)) throw Error(s(341));
                  ((h.lanes |= r),
                    (v = h.alternate),
                    v !== null && (v.lanes |= r),
                    ol(h, r, t),
                    (h = u.sibling));
                } else h = u.child;
                if (h !== null) h.return = u;
                else
                  for (h = u; h !== null;) {
                    if (h === t) {
                      h = null;
                      break;
                    }
                    if (((u = h.sibling), u !== null)) {
                      ((u.return = h.return), (h = u));
                      break;
                    }
                    h = h.return;
                  }
                u = h;
              }
          (Je(e, t, a.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (o = t.pendingProps.children),
          sr(t, r),
          (a = gt(a)),
          (o = o(a)),
          (t.flags |= 1),
          Je(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (a = Et(o, t.pendingProps)), (a = Et(o.type, a)), Df(e, t, o, a, r));
      case 15:
        return Vf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Et(o, a)),
          ds(e, t),
          (t.tag = 1),
          rt(o) ? ((e = !0), Qi(t)) : (e = !1),
          sr(t, r),
          kf(t, o, a),
          kl(t, o, a, r),
          Cl(null, t, o, !0, e, r)
        );
      case 19:
        return zf(e, t, r);
      case 22:
        return Lf(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function ud(e, t) {
    return Uu(e, t);
  }
  function hy(e, t, r, o) {
    ((this.tag = e),
      (this.key = r),
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
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function wt(e, t, r, o) {
    return new hy(e, t, r, o);
  }
  function Gl(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function py(e) {
    if (typeof e == "function") return Gl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === xe)) return 11;
      if (e === je) return 14;
    }
    return 2;
  }
  function pn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = wt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Ts(e, t, r, o, a, u) {
    var h = 2;
    if (((o = e), typeof e == "function")) Gl(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case re:
          return Nn(r.children, a, u, t);
        case Z:
          ((h = 8), (a |= 8));
          break;
        case ye:
          return ((e = wt(12, r, t, a | 2)), (e.elementType = ye), (e.lanes = u), e);
        case Le:
          return ((e = wt(13, r, t, a)), (e.elementType = Le), (e.lanes = u), e);
        case Ae:
          return ((e = wt(19, r, t, a)), (e.elementType = Ae), (e.lanes = u), e);
        case Ce:
          return Ps(r, a, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case J:
                h = 10;
                break e;
              case pe:
                h = 9;
                break e;
              case xe:
                h = 11;
                break e;
              case je:
                h = 14;
                break e;
              case Se:
                ((h = 16), (o = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return ((t = wt(h, r, t, a)), (t.elementType = e), (t.type = o), (t.lanes = u), t);
  }
  function Nn(e, t, r, o) {
    return ((e = wt(7, e, o, t)), (e.lanes = r), e);
  }
  function Ps(e, t, r, o) {
    return (
      (e = wt(22, e, o, t)),
      (e.elementType = Ce),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Yl(e, t, r) {
    return ((e = wt(6, e, null, t)), (e.lanes = r), e);
  }
  function Ql(e, t, r) {
    return (
      (t = wt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function my(e, t, r, o, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = So(0)),
      (this.expirationTimes = So(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = So(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Xl(e, t, r, o, a, u, h, v, x) {
    return (
      (e = new my(e, t, r, v, x)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = wt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: o,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      al(u),
      e
    );
  }
  function gy(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ie,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function cd(e) {
    if (!e) return sn;
    e = e._reactInternals;
    e: {
      if (Sn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (rt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (rt(r)) return Fc(e, r, t);
    }
    return t;
  }
  function fd(e, t, r, o, a, u, h, v, x) {
    return (
      (e = Xl(r, o, !0, e, a, u, h, v, x)),
      (e.context = cd(null)),
      (r = e.current),
      (o = be()),
      (a = dn(r)),
      (u = Gt(o, a)),
      (u.callback = t ?? null),
      an(r, u, a),
      (e.current.lanes = a),
      Rr(e, a, o),
      ot(e, o),
      e
    );
  }
  function Es(e, t, r, o) {
    var a = t.current,
      u = be(),
      h = dn(a);
    return (
      (r = cd(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Gt(u, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = an(a, t, h)),
      e !== null && (Rt(e, a, h, u), ns(e, a, h)),
      h
    );
  }
  function Cs(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function dd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Zl(e, t) {
    (dd(e, t), (e = e.alternate) && dd(e, t));
  }
  function yy() {
    return null;
  }
  var hd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ql(e) {
    this._internalRoot = e;
  }
  ((Ms.prototype.render = ql.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Es(e, t, null, null);
    }),
    (Ms.prototype.unmount = ql.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Dn(function () {
            Es(null, e, null, null);
          }),
            (t[Ut] = null));
        }
      }));
  function Ms(e) {
    this._internalRoot = e;
  }
  Ms.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Xu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < bt.length && t !== 0 && t < bt[r].priority; r++);
      (bt.splice(r, 0, e), r === 0 && Ju(e));
    }
  };
  function Jl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Rs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function pd() {}
  function vy(e, t, r, o, a) {
    if (a) {
      if (typeof o == "function") {
        var u = o;
        o = function () {
          var M = Cs(h);
          u.call(M);
        };
      }
      var h = fd(t, o, e, 0, null, !1, !1, "", pd);
      return (
        (e._reactRootContainer = h),
        (e[Ut] = h.current),
        Wr(e.nodeType === 8 ? e.parentNode : e),
        Dn(),
        h
      );
    }
    for (; (a = e.lastChild);) e.removeChild(a);
    if (typeof o == "function") {
      var v = o;
      o = function () {
        var M = Cs(x);
        v.call(M);
      };
    }
    var x = Xl(e, 0, !1, null, null, !1, !1, "", pd);
    return (
      (e._reactRootContainer = x),
      (e[Ut] = x.current),
      Wr(e.nodeType === 8 ? e.parentNode : e),
      Dn(function () {
        Es(t, x, r, o);
      }),
      x
    );
  }
  function As(e, t, r, o, a) {
    var u = r._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof a == "function") {
        var v = a;
        a = function () {
          var x = Cs(h);
          v.call(x);
        };
      }
      Es(t, h, e, a);
    } else h = vy(r, t, e, a, o);
    return Cs(h);
  }
  ((Yu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Mr(t.pendingLanes);
          r !== 0 && (ko(t, r | 1), ot(t, Ne()), (ae & 6) === 0 && ((cr = Ne() + 500), on()));
        }
        break;
      case 13:
        (Dn(function () {
          var o = Kt(e, 1);
          if (o !== null) {
            var a = be();
            Rt(o, e, 1, a);
          }
        }),
          Zl(e, 1));
    }
  }),
    (To = function (e) {
      if (e.tag === 13) {
        var t = Kt(e, 134217728);
        if (t !== null) {
          var r = be();
          Rt(t, e, 134217728, r);
        }
        Zl(e, 134217728);
      }
    }),
    (Qu = function (e) {
      if (e.tag === 13) {
        var t = dn(e),
          r = Kt(e, t);
        if (r !== null) {
          var o = be();
          Rt(r, e, t, o);
        }
        Zl(e, t);
      }
    }),
    (Xu = function () {
      return he;
    }),
    (Zu = function (e, t) {
      var r = he;
      try {
        return ((he = e), t());
      } finally {
        he = r;
      }
    }),
    (mo = function (e, t, r) {
      switch (t) {
        case "input":
          if ((oo(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode;) r = r.parentNode;
            for (
              r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var a = Gi(o);
                if (!a) throw Error(s(90));
                (xu(o), oo(o, a));
              }
            }
          }
          break;
        case "textarea":
          Eu(e, r);
          break;
        case "select":
          ((t = r.value), t != null && Un(e, !!r.multiple, t, !1));
      }
    }),
    (_u = Hl),
    (ju = Dn));
  var wy = { usingClientEntryPoint: !1, Events: [Kr, qn, Gi, Lu, Nu, Hl] },
    si = {
      findFiberByHostInstance: kn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    xy = {
      bundleType: si.bundleType,
      version: si.version,
      rendererPackageName: si.rendererPackageName,
      rendererConfig: si.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: B.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = zu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: si.findFiberByHostInstance || yy,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ds.isDisabled && Ds.supportsFiber)
      try {
        ((Mi = Ds.inject(xy)), (Lt = Ds));
      } catch {}
  }
  return (
    (lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wy),
    (lt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Jl(t)) throw Error(s(200));
      return gy(e, t, null, r);
    }),
    (lt.createRoot = function (e, t) {
      if (!Jl(e)) throw Error(s(299));
      var r = !1,
        o = "",
        a = hd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Xl(e, 1, !1, null, null, r, !1, o, a)),
        (e[Ut] = t.current),
        Wr(e.nodeType === 8 ? e.parentNode : e),
        new ql(t)
      );
    }),
    (lt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return ((e = zu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (lt.flushSync = function (e) {
      return Dn(e);
    }),
    (lt.hydrate = function (e, t, r) {
      if (!Rs(t)) throw Error(s(200));
      return As(null, e, t, !0, r);
    }),
    (lt.hydrateRoot = function (e, t, r) {
      if (!Jl(e)) throw Error(s(405));
      var o = (r != null && r.hydratedSources) || null,
        a = !1,
        u = "",
        h = hd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (h = r.onRecoverableError)),
        (t = fd(t, null, e, 1, r ?? null, a, !1, u, h)),
        (e[Ut] = t.current),
        Wr(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((r = o[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a));
      return new Ms(t);
    }),
    (lt.render = function (e, t, r) {
      if (!Rs(t)) throw Error(s(200));
      return As(null, e, t, !1, r);
    }),
    (lt.unmountComponentAtNode = function (e) {
      if (!Rs(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Dn(function () {
            As(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ut] = null));
            });
          }),
          !0)
        : !1;
    }),
    (lt.unstable_batchedUpdates = Hl),
    (lt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!Rs(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return As(e, t, r, !1, o);
    }),
    (lt.version = "18.3.1-next-f1338f8080-20240426"),
    lt
  );
}
var kd;
function Ry() {
  if (kd) return ta.exports;
  kd = 1;
  function n() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (ta.exports = My()), ta.exports);
}
var Td;
function Ay() {
  if (Td) return Vs;
  Td = 1;
  var n = Ry();
  return ((Vs.createRoot = n.createRoot), (Vs.hydrateRoot = n.hydrateRoot), Vs);
}
var Dy = Ay();
function Vy({ variant: n = "dark" }) {
  const i =
      n === "dark"
        ? "border-t border-white/10 bg-black px-6 py-20 md:px-12"
        : "border-t border-[#e2e8f0] bg-white px-6 py-20 md:px-12",
    s =
      n === "dark" ? "text-2xl font-semibold text-white" : "text-2xl font-semibold text-[#0f172a]",
    l =
      n === "dark"
        ? "mt-4 max-w-2xl text-sm leading-relaxed text-white/60"
        : "mt-4 max-w-2xl text-sm leading-relaxed text-[#64748b]";
  return W.jsxs(W.Fragment, {
    children: [
      W.jsx("section", {
        id: "privacy",
        className: i,
        children: W.jsxs("div", {
          className: "mx-auto max-w-4xl",
          children: [
            W.jsx("h2", { className: s, children: "Privacy Policy" }),
            W.jsx("p", {
              className: l,
              children:
                "This privacy policy describes how we collect, use, and protect information when you use our services. Replace this copy with your legal team's final text before launch.",
            }),
          ],
        }),
      }),
      W.jsx("section", {
        id: "terms",
        className: i,
        children: W.jsxs("div", {
          className: "mx-auto max-w-4xl",
          children: [
            W.jsx("h2", { className: s, children: "Terms of Service" }),
            W.jsx("p", {
              className: l,
              children:
                "These terms govern access to the site and products. By continuing to browse, you agree to the policies published here. Update with your jurisdiction-specific terms before production.",
            }),
          ],
        }),
      }),
    ],
  });
}
const Oh = te.createContext({});
function Ly(n) {
  const i = te.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const Ny = typeof window < "u",
  _y = Ny ? te.useLayoutEffect : te.useEffect,
  Ga = te.createContext(null);
function Ya(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function Ks(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
const Bt = (n, i, s) => (s > i ? i : s < n ? n : s);
let Qa = () => {};
const vn = {},
  zh = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  Bh = (n) => typeof n == "object" && n !== null,
  Uh = (n) => /^0[^.\s]+$/u.test(n);
function Wh(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const St = (n) => n,
  yi = (...n) => n.reduce((i, s) => (l) => s(i(l))),
  hi = (n, i, s) => {
    const l = i - n;
    return l ? (s - n) / l : 1;
  };
class Xa {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (Ya(this.subscriptions, i), () => Ks(this.subscriptions, i));
  }
  notify(i, s, l) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](i, s, l);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(i, s, l);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ht = (n) => n * 1e3,
  xt = (n) => n / 1e3,
  Hh = (n, i) => (i ? n * (1e3 / i) : 0),
  $h = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  jy = 1e-7,
  Iy = 12;
function Fy(n, i, s, l, c) {
  let d,
    f,
    p = 0;
  do ((f = i + (s - i) / 2), (d = $h(f, l, c) - n), d > 0 ? (s = f) : (i = f));
  while (Math.abs(d) > jy && ++p < Iy);
  return f;
}
function vi(n, i, s, l) {
  if (n === i && s === l) return St;
  const c = (d) => Fy(d, 0, 1, n, s);
  return (d) => (d === 0 || d === 1 ? d : $h(c(d), i, l));
}
const Kh = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  Gh = (n) => (i) => 1 - n(1 - i),
  Yh = vi(0.33, 1.53, 0.69, 0.99),
  Za = Gh(Yh),
  Qh = Kh(Za),
  Xh = (n) => (n >= 1 ? 1 : (n *= 2) < 1 ? 0.5 * Za(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))),
  qa = (n) => 1 - Math.sin(Math.acos(n)),
  Zh = Gh(qa),
  qh = Kh(qa),
  Oy = vi(0.42, 0, 1, 1),
  zy = vi(0, 0, 0.58, 1),
  Jh = vi(0.42, 0, 0.58, 1),
  By = (n) => Array.isArray(n) && typeof n[0] != "number",
  bh = (n) => Array.isArray(n) && typeof n[0] == "number",
  Uy = {
    linear: St,
    easeIn: Oy,
    easeInOut: Jh,
    easeOut: zy,
    circIn: qa,
    circInOut: qh,
    circOut: Zh,
    backIn: Za,
    backInOut: Qh,
    backOut: Yh,
    anticipate: Xh,
  },
  Wy = (n) => typeof n == "string",
  Pd = (n) => {
    if (bh(n)) {
      Qa(n.length === 4);
      const [i, s, l, c] = n;
      return vi(i, s, l, c);
    } else if (Wy(n)) return Uy[n];
    return n;
  },
  Ls = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Hy(n, i) {
  let s = new Set(),
    l = new Set(),
    c = !1,
    d = !1;
  const f = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(g) {
    (f.has(g) && (y.schedule(g), n()), g(p));
  }
  const y = {
    schedule: (g, w = !1, S = !1) => {
      const R = S && c ? s : l;
      return (w && f.add(g), R.add(g), g);
    },
    cancel: (g) => {
      (l.delete(g), f.delete(g));
    },
    process: (g) => {
      if (((p = g), c)) {
        d = !0;
        return;
      }
      c = !0;
      const w = s;
      ((s = l), (l = w), s.forEach(m), s.clear(), (c = !1), d && ((d = !1), y.process(g)));
    },
  };
  return y;
}
const $y = 40;
function ep(n, i) {
  let s = !1,
    l = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = Ls.reduce((O, B) => ((O[B] = Hy(d)), O), {}),
    {
      setup: p,
      read: m,
      resolveKeyframes: y,
      preUpdate: g,
      update: w,
      preRender: S,
      render: C,
      postRender: R,
    } = f,
    D = () => {
      const O = vn.useManualTiming,
        B = O ? c.timestamp : performance.now();
      ((s = !1),
        O || (c.delta = l ? 1e3 / 60 : Math.max(Math.min(B - c.timestamp, $y), 1)),
        (c.timestamp = B),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        y.process(c),
        g.process(c),
        w.process(c),
        S.process(c),
        C.process(c),
        R.process(c),
        (c.isProcessing = !1),
        s && i && ((l = !1), n(D)));
    },
    A = () => {
      ((s = !0), (l = !0), c.isProcessing || n(D));
    };
  return {
    schedule: Ls.reduce((O, B) => {
      const q = f[B];
      return ((O[B] = (ie, re = !1, Z = !1) => (s || A(), q.schedule(ie, re, Z))), O);
    }, {}),
    cancel: (O) => {
      for (let B = 0; B < Ls.length; B++) f[Ls[B]].cancel(O);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: ge,
  cancel: wn,
  state: Ge,
  steps: ia,
} = ep(typeof requestAnimationFrame < "u" ? requestAnimationFrame : St, !0);
let Os;
function Ky() {
  Os = void 0;
}
const et = {
    now: () => (
      Os === void 0 &&
        et.set(Ge.isProcessing || vn.useManualTiming ? Ge.timestamp : performance.now()),
      Os
    ),
    set: (n) => {
      ((Os = n), queueMicrotask(Ky));
    },
  },
  tp = (n) => (i) => typeof i == "string" && i.startsWith(n),
  np = tp("--"),
  Gy = tp("var(--"),
  Ja = (n) => (Gy(n) ? Yy.test(n.split("/*")[0].trim()) : !1),
  Yy = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ed(n) {
  return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--");
}
const vr = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  pi = { ...vr, transform: (n) => Bt(0, 1, n) },
  Ns = { ...vr, default: 1 },
  ui = (n) => Math.round(n * 1e5) / 1e5,
  ba = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Qy(n) {
  return n == null;
}
const Xy =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  eu = (n, i) => (s) =>
    !!(
      (typeof s == "string" && Xy.test(s) && s.startsWith(n)) ||
      (i && !Qy(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  rp = (n, i, s) => (l) => {
    if (typeof l != "string") return l;
    const [c, d, f, p] = l.match(ba);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  Zy = (n) => Bt(0, 255, n),
  sa = { ...vr, transform: (n) => Math.round(Zy(n)) },
  In = {
    test: eu("rgb", "red"),
    parse: rp("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: s, alpha: l = 1 }) =>
      "rgba(" +
      sa.transform(n) +
      ", " +
      sa.transform(i) +
      ", " +
      sa.transform(s) +
      ", " +
      ui(pi.transform(l)) +
      ")",
  };
function qy(n) {
  let i = "",
    s = "",
    l = "",
    c = "";
  return (
    n.length > 5
      ? ((i = n.substring(1, 3)),
        (s = n.substring(3, 5)),
        (l = n.substring(5, 7)),
        (c = n.substring(7, 9)))
      : ((i = n.substring(1, 2)),
        (s = n.substring(2, 3)),
        (l = n.substring(3, 4)),
        (c = n.substring(4, 5)),
        (i += i),
        (s += s),
        (l += l),
        (c += c)),
    {
      red: parseInt(i, 16),
      green: parseInt(s, 16),
      blue: parseInt(l, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const xa = { test: eu("#"), parse: qy, transform: In.transform },
  wi = (n) => ({
    test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  Xt = wi("deg"),
  zt = wi("%"),
  G = wi("px"),
  Jy = wi("vh"),
  by = wi("vw"),
  Cd = { ...zt, parse: (n) => zt.parse(n) / 100, transform: (n) => zt.transform(n * 100) },
  hr = {
    test: eu("hsl", "hue"),
    parse: rp("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: s, alpha: l = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      zt.transform(ui(i)) +
      ", " +
      zt.transform(ui(s)) +
      ", " +
      ui(pi.transform(l)) +
      ")",
  },
  Fe = {
    test: (n) => In.test(n) || xa.test(n) || hr.test(n),
    parse: (n) => (In.test(n) ? In.parse(n) : hr.test(n) ? hr.parse(n) : xa.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? In.transform(n) : hr.transform(n),
    getAnimatableNone: (n) => {
      const i = Fe.parse(n);
      return ((i.alpha = 0), Fe.transform(i));
    },
  },
  ev =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function tv(n) {
  var i, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(ba)) == null ? void 0 : i.length) || 0) +
      (((s = n.match(ev)) == null ? void 0 : s.length) || 0) >
      0
  );
}
const ip = "number",
  sp = "color",
  nv = "var",
  rv = "var(",
  Md = "${}",
  iv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function gr(n) {
  const i = n.toString(),
    s = [],
    l = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      iv,
      (m) => (
        Fe.test(m)
          ? (l.color.push(d), c.push(sp), s.push(Fe.parse(m)))
          : m.startsWith(rv)
            ? (l.var.push(d), c.push(nv), s.push(m))
            : (l.number.push(d), c.push(ip), s.push(parseFloat(m))),
        ++d,
        Md
      ),
    )
    .split(Md);
  return { values: s, split: p, indexes: l, types: c };
}
function sv(n) {
  return gr(n).values;
}
function op({ split: n, types: i }) {
  const s = n.length;
  return (l) => {
    let c = "";
    for (let d = 0; d < s; d++)
      if (((c += n[d]), l[d] !== void 0)) {
        const f = i[d];
        f === ip ? (c += ui(l[d])) : f === sp ? (c += Fe.transform(l[d])) : (c += l[d]);
      }
    return c;
  };
}
function ov(n) {
  return op(gr(n));
}
const lv = (n) => (typeof n == "number" ? 0 : Fe.test(n) ? Fe.getAnimatableNone(n) : n),
  av = (n, i) => (typeof n == "number" ? (i != null && i.trim().endsWith("/") ? n : 0) : lv(n));
function uv(n) {
  const i = gr(n);
  return op(i)(i.values.map((l, c) => av(l, i.split[c])));
}
const Vt = { test: tv, parse: sv, createTransformer: ov, getAnimatableNone: uv };
function oa(n, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n
  );
}
function cv({ hue: n, saturation: i, lightness: s, alpha: l }) {
  ((n /= 360), (i /= 100), (s /= 100));
  let c = 0,
    d = 0,
    f = 0;
  if (!i) c = d = f = s;
  else {
    const p = s < 0.5 ? s * (1 + i) : s + i - s * i,
      m = 2 * s - p;
    ((c = oa(m, p, n + 1 / 3)), (d = oa(m, p, n)), (f = oa(m, p, n - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: l,
  };
}
function Gs(n, i) {
  return (s) => (s > 0 ? i : n);
}
const me = (n, i, s) => n + (i - n) * s,
  la = (n, i, s) => {
    const l = n * n,
      c = s * (i * i - l) + l;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  fv = [xa, In, hr],
  dv = (n) => fv.find((i) => i.test(n));
function Rd(n) {
  const i = dv(n);
  if (!i) return !1;
  let s = i.parse(n);
  return (i === hr && (s = cv(s)), s);
}
const Ad = (n, i) => {
    const s = Rd(n),
      l = Rd(i);
    if (!s || !l) return Gs(n, i);
    const c = { ...s };
    return (d) => (
      (c.red = la(s.red, l.red, d)),
      (c.green = la(s.green, l.green, d)),
      (c.blue = la(s.blue, l.blue, d)),
      (c.alpha = me(s.alpha, l.alpha, d)),
      In.transform(c)
    );
  },
  Sa = new Set(["none", "hidden"]);
function hv(n, i) {
  return Sa.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n);
}
function pv(n, i) {
  return (s) => me(n, i, s);
}
function tu(n) {
  return typeof n == "number"
    ? pv
    : typeof n == "string"
      ? Ja(n)
        ? Gs
        : Fe.test(n)
          ? Ad
          : yv
      : Array.isArray(n)
        ? lp
        : typeof n == "object"
          ? Fe.test(n)
            ? Ad
            : mv
          : Gs;
}
function lp(n, i) {
  const s = [...n],
    l = s.length,
    c = n.map((d, f) => tu(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < l; f++) s[f] = c[f](d);
    return s;
  };
}
function mv(n, i) {
  const s = { ...n, ...i },
    l = {};
  for (const c in s) n[c] !== void 0 && i[c] !== void 0 && (l[c] = tu(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in l) s[d] = l[d](c);
    return s;
  };
}
function gv(n, i) {
  const s = [],
    l = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < i.values.length; c++) {
    const d = i.types[c],
      f = n.indexes[d][l[d]],
      p = n.values[f] ?? 0;
    ((s[c] = p), l[d]++);
  }
  return s;
}
const yv = (n, i) => {
  const s = Vt.createTransformer(i),
    l = gr(n),
    c = gr(i);
  return l.indexes.var.length === c.indexes.var.length &&
    l.indexes.color.length === c.indexes.color.length &&
    l.indexes.number.length >= c.indexes.number.length
    ? (Sa.has(n) && !c.values.length) || (Sa.has(i) && !l.values.length)
      ? hv(n, i)
      : yi(lp(gv(l, c), c.values), s)
    : Gs(n, i);
};
function ap(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number"
    ? me(n, i, s)
    : tu(n)(n, i);
}
const vv = (n) => {
    const i = ({ timestamp: s }) => n(s);
    return {
      start: (s = !0) => ge.update(i, s),
      stop: () => wn(i),
      now: () => (Ge.isProcessing ? Ge.timestamp : et.now()),
    };
  },
  up = (n, i, s = 10) => {
    let l = "";
    const c = Math.max(Math.round(i / s), 2);
    for (let d = 0; d < c; d++) l += Math.round(n(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${l.substring(0, l.length - 2)})`;
  },
  Ys = 2e4;
function nu(n) {
  let i = 0;
  const s = 50;
  let l = n.next(i);
  for (; !l.done && i < Ys;) ((i += s), (l = n.next(i)));
  return i >= Ys ? 1 / 0 : i;
}
function wv(n, i = 100, s) {
  const l = s({ ...n, keyframes: [0, i] }),
    c = Math.min(nu(l), Ys);
  return { type: "keyframes", ease: (d) => l.next(c * d).value / i, duration: xt(c) };
}
const Ve = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function ka(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const xv = 12;
function Sv(n, i, s) {
  let l = s;
  for (let c = 1; c < xv; c++) l = l - n(l) / i(l);
  return l;
}
const aa = 0.001;
function kv({
  duration: n = Ve.duration,
  bounce: i = Ve.bounce,
  velocity: s = Ve.velocity,
  mass: l = Ve.mass,
}) {
  let c,
    d,
    f = 1 - i;
  ((f = Bt(Ve.minDamping, Ve.maxDamping, f)),
    (n = Bt(Ve.minDuration, Ve.maxDuration, xt(n))),
    f < 1
      ? ((c = (y) => {
          const g = y * f,
            w = g * n,
            S = g - s,
            C = ka(y, f),
            R = Math.exp(-w);
          return aa - (S / C) * R;
        }),
        (d = (y) => {
          const w = y * f * n,
            S = w * s + s,
            C = Math.pow(f, 2) * Math.pow(y, 2) * n,
            R = Math.exp(-w),
            D = ka(Math.pow(y, 2), f);
          return ((-c(y) + aa > 0 ? -1 : 1) * ((S - C) * R)) / D;
        }))
      : ((c = (y) => {
          const g = Math.exp(-y * n),
            w = (y - s) * n + 1;
          return -aa + g * w;
        }),
        (d = (y) => {
          const g = Math.exp(-y * n),
            w = (s - y) * (n * n);
          return g * w;
        })));
  const p = 5 / n,
    m = Sv(c, d, p);
  if (((n = ht(n)), isNaN(m))) return { stiffness: Ve.stiffness, damping: Ve.damping, duration: n };
  {
    const y = Math.pow(m, 2) * l;
    return { stiffness: y, damping: f * 2 * Math.sqrt(l * y), duration: n };
  }
}
const Tv = ["duration", "bounce"],
  Pv = ["stiffness", "damping", "mass"];
function Dd(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function Ev(n) {
  let i = {
    velocity: Ve.velocity,
    stiffness: Ve.stiffness,
    damping: Ve.damping,
    mass: Ve.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Dd(n, Pv) && Dd(n, Tv))
    if (((i.velocity = 0), n.visualDuration)) {
      const s = n.visualDuration,
        l = (2 * Math.PI) / (s * 1.2),
        c = l * l,
        d = 2 * Bt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Ve.mass, stiffness: c, damping: d };
    } else {
      const s = kv({ ...n, velocity: 0 });
      ((i = { ...i, ...s, mass: Ve.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function Qs(n = Ve.visualDuration, i = Ve.bounce) {
  const s = typeof n != "object" ? { visualDuration: n, keyframes: [0, 1], bounce: i } : n;
  let { restSpeed: l, restDelta: c } = s;
  const d = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: y,
      mass: g,
      duration: w,
      velocity: S,
      isResolvedFromDuration: C,
    } = Ev({ ...s, velocity: -xt(s.velocity || 0) }),
    R = S || 0,
    D = y / (2 * Math.sqrt(m * g)),
    A = f - d,
    j = xt(Math.sqrt(m / g)),
    z = Math.abs(A) < 5;
  (l || (l = z ? Ve.restSpeed.granular : Ve.restSpeed.default),
    c || (c = z ? Ve.restDelta.granular : Ve.restDelta.default));
  let O, B, q, ie, re, Z;
  if (D < 1)
    ((q = ka(j, D)),
      (ie = (R + D * j * A) / q),
      (O = (J) => {
        const pe = Math.exp(-D * j * J);
        return f - pe * (ie * Math.sin(q * J) + A * Math.cos(q * J));
      }),
      (re = D * j * ie + A * q),
      (Z = D * j * A - ie * q),
      (B = (J) => Math.exp(-D * j * J) * (re * Math.sin(q * J) + Z * Math.cos(q * J))));
  else if (D === 1) {
    O = (pe) => f - Math.exp(-j * pe) * (A + (R + j * A) * pe);
    const J = R + j * A;
    B = (pe) => Math.exp(-j * pe) * (j * J * pe - R);
  } else {
    const J = j * Math.sqrt(D * D - 1);
    O = (Ae) => {
      const je = Math.exp(-D * j * Ae),
        Se = Math.min(J * Ae, 300);
      return f - (je * ((R + D * j * A) * Math.sinh(Se) + J * A * Math.cosh(Se))) / J;
    };
    const pe = (R + D * j * A) / J,
      xe = D * j * pe - A * J,
      Le = D * j * A - pe * J;
    B = (Ae) => {
      const je = Math.exp(-D * j * Ae),
        Se = Math.min(J * Ae, 300);
      return je * (xe * Math.sinh(Se) + Le * Math.cosh(Se));
    };
  }
  const ye = {
    calculatedDuration: (C && w) || null,
    velocity: (J) => ht(B(J)),
    next: (J) => {
      if (!C && D < 1) {
        const xe = Math.exp(-D * j * J),
          Le = Math.sin(q * J),
          Ae = Math.cos(q * J),
          je = f - xe * (ie * Le + A * Ae),
          Se = ht(xe * (re * Le + Z * Ae));
        return (
          (p.done = Math.abs(Se) <= l && Math.abs(f - je) <= c),
          (p.value = p.done ? f : je),
          p
        );
      }
      const pe = O(J);
      if (C) p.done = J >= w;
      else {
        const xe = ht(B(J));
        p.done = Math.abs(xe) <= l && Math.abs(f - pe) <= c;
      }
      return ((p.value = p.done ? f : pe), p);
    },
    toString: () => {
      const J = Math.min(nu(ye), Ys),
        pe = up((xe) => ye.next(J * xe).value, J, 30);
      return J + "ms " + pe;
    },
    toTransition: () => {},
  };
  return ye;
}
Qs.applyToOptions = (n) => {
  const i = wv(n, 100, Qs);
  return ((n.ease = i.ease), (n.duration = ht(i.duration)), (n.type = "keyframes"), n);
};
const Cv = 5;
function cp(n, i, s) {
  const l = Math.max(i - Cv, 0);
  return Hh(s - n(l), i - l);
}
function Ta({
  keyframes: n,
  velocity: i = 0,
  power: s = 0.8,
  timeConstant: l = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: p,
  max: m,
  restDelta: y = 0.5,
  restSpeed: g,
}) {
  const w = n[0],
    S = { done: !1, value: w },
    C = (Z) => (p !== void 0 && Z < p) || (m !== void 0 && Z > m),
    R = (Z) => (p === void 0 ? m : m === void 0 || Math.abs(p - Z) < Math.abs(m - Z) ? p : m);
  let D = s * i;
  const A = w + D,
    j = f === void 0 ? A : f(A);
  j !== A && (D = j - w);
  const z = (Z) => -D * Math.exp(-Z / l),
    O = (Z) => j + z(Z),
    B = (Z) => {
      const ye = z(Z),
        J = O(Z);
      ((S.done = Math.abs(ye) <= y), (S.value = S.done ? j : J));
    };
  let q, ie;
  const re = (Z) => {
    C(S.value) &&
      ((q = Z),
      (ie = Qs({
        keyframes: [S.value, R(S.value)],
        velocity: cp(O, Z, S.value),
        damping: c,
        stiffness: d,
        restDelta: y,
        restSpeed: g,
      })));
  };
  return (
    re(0),
    {
      calculatedDuration: null,
      next: (Z) => {
        let ye = !1;
        return (
          !ie && q === void 0 && ((ye = !0), B(Z), re(Z)),
          q !== void 0 && Z >= q ? ie.next(Z - q) : (!ye && B(Z), S)
        );
      },
    }
  );
}
function Mv(n, i, s) {
  const l = [],
    c = s || vn.mix || ap,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = c(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || St : i;
      p = yi(m, p);
    }
    l.push(p);
  }
  return l;
}
function Rv(n, i, { clamp: s = !0, ease: l, mixer: c } = {}) {
  const d = n.length;
  if ((Qa(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = Mv(i, l, c),
    m = p.length,
    y = (g) => {
      if (f && g < n[0]) return i[0];
      let w = 0;
      if (m > 1) for (; w < n.length - 2 && !(g < n[w + 1]); w++);
      const S = hi(n[w], n[w + 1], g);
      return p[w](S);
    };
  return s ? (g) => y(Bt(n[0], n[d - 1], g)) : y;
}
function Av(n, i) {
  const s = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const c = hi(0, i, l);
    n.push(me(s, 1, c));
  }
}
function Dv(n) {
  const i = [0];
  return (Av(i, n.length - 1), i);
}
function Vv(n, i) {
  return n.map((s) => s * i);
}
function Lv(n, i) {
  return n.map(() => i || Jh).splice(0, n.length - 1);
}
function ci({ duration: n = 300, keyframes: i, times: s, ease: l = "easeInOut" }) {
  const c = By(l) ? l.map(Pd) : Pd(l),
    d = { done: !1, value: i[0] },
    f = Vv(s && s.length === i.length ? s : Dv(i), n),
    p = Rv(f, i, { ease: Array.isArray(c) ? c : Lv(i, c) });
  return { calculatedDuration: n, next: (m) => ((d.value = p(m)), (d.done = m >= n), d) };
}
const Nv = (n) => n !== null;
function to(n, { repeat: i, repeatType: s = "loop" }, l, c = 1) {
  const d = n.filter(Nv),
    p = c < 0 || (i && s !== "loop" && i % 2 === 1) ? 0 : d.length - 1;
  return !p || l === void 0 ? d[p] : l;
}
const _v = { decay: Ta, inertia: Ta, tween: ci, keyframes: ci, spring: Qs };
function fp(n) {
  typeof n.type == "string" && (n.type = _v[n.type]);
}
class ru {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, s) {
    return this.finished.then(i, s);
  }
}
const jv = (n) => n / 100;
class Xs extends ru {
  constructor(i) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var l, c;
        const { motionValue: s } = this.options;
        (s && s.updatedAt !== et.now() && this.tick(et.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(), (c = (l = this.options).onStop) == null || c.call(l)));
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: i } = this;
    fp(i);
    const { type: s = ci, repeat: l = 0, repeatDelay: c = 0, repeatType: d, velocity: f = 0 } = i;
    let { keyframes: p } = i;
    const m = s || ci;
    m !== ci &&
      typeof p[0] != "number" &&
      ((this.mixKeyframes = yi(jv, ap(p[0], p[1]))), (p = [0, 100]));
    const y = m({ ...i, keyframes: p });
    (d === "mirror" &&
      (this.mirroredGenerator = m({ ...i, keyframes: [...p].reverse(), velocity: -f })),
      y.calculatedDuration === null && (y.calculatedDuration = nu(y)));
    const { calculatedDuration: g } = y;
    ((this.calculatedDuration = g),
      (this.resolvedDuration = g + c),
      (this.totalDuration = this.resolvedDuration * (l + 1) - c),
      (this.generator = y));
  }
  updateTime(i) {
    const s = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = s);
  }
  tick(i, s = !1) {
    const {
      generator: l,
      totalDuration: c,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: p,
      calculatedDuration: m,
    } = this;
    if (this.startTime === null) return l.next(0);
    const {
      delay: y = 0,
      keyframes: g,
      repeat: w,
      repeatType: S,
      repeatDelay: C,
      type: R,
      onUpdate: D,
      finalKeyframe: A,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 && (this.startTime = Math.min(i - c / this.speed, this.startTime)),
      s ? (this.currentTime = i) : this.updateTime(i));
    const j = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1),
      z = this.playbackSpeed >= 0 ? j < 0 : j > c;
    ((this.currentTime = Math.max(j, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = c));
    let O = this.currentTime,
      B = l;
    if (w) {
      const Z = Math.min(this.currentTime, c) / p;
      let ye = Math.floor(Z),
        J = Z % 1;
      (!J && Z >= 1 && (J = 1),
        J === 1 && ye--,
        (ye = Math.min(ye, w + 1)),
        !!(ye % 2) &&
          (S === "reverse" ? ((J = 1 - J), C && (J -= C / p)) : S === "mirror" && (B = f)),
        (O = Bt(0, 1, J) * p));
    }
    let q;
    (z ? ((this.delayState.value = g[0]), (q = this.delayState)) : (q = B.next(O)),
      d && !z && (q.value = d(q.value)));
    let { done: ie } = q;
    !z &&
      m !== null &&
      (ie = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const re =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ie));
    return (
      re && R !== Ta && (q.value = to(g, this.options, A, this.speed)),
      D && D(q.value),
      re && this.finish(),
      q
    );
  }
  then(i, s) {
    return this.finished.then(i, s);
  }
  get duration() {
    return xt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + xt(i);
  }
  get time() {
    return xt(this.currentTime);
  }
  set time(i) {
    ((i = ht(i)),
      (this.currentTime = i),
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = i), this.tick(i)));
  }
  getGeneratorVelocity() {
    const i = this.currentTime;
    if (i <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(i);
    const s = this.generator.next(i).value;
    return cp((l) => this.generator.next(l).value, i, s);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const s = this.playbackSpeed !== i;
    (s && this.driver && this.updateTime(et.now()),
      (this.playbackSpeed = i),
      s && this.driver && (this.time = xt(this.currentTime)));
  }
  play() {
    var c, d;
    if (this.isStopped) return;
    const { driver: i = vv, startTime: s } = this.options;
    (this.driver || (this.driver = i((f) => this.tick(f))),
      (d = (c = this.options).onPlay) == null || d.call(c));
    const l = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = l))
      : this.holdTime !== null
        ? (this.startTime = l - this.holdTime)
        : this.startTime || (this.startTime = s ?? l),
      this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"), this.updateTime(et.now()), (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(), (this.state = "finished"), (this.holdTime = null));
  }
  finish() {
    var i, s;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (s = (i = this.options).onComplete) == null || s.call(i));
  }
  cancel() {
    var i, s;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (s = (i = this.options).onCancel) == null || s.call(i));
  }
  teardown() {
    ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return ((this.startTime = 0), this.tick(i, !0));
  }
  attachTimeline(i) {
    var s;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
      (s = this.driver) == null || s.stop(),
      i.observe(this)
    );
  }
}
function Iv(n) {
  for (let i = 1; i < n.length; i++) n[i] ?? (n[i] = n[i - 1]);
}
const Fn = (n) => (n * 180) / Math.PI,
  Pa = (n) => {
    const i = Fn(Math.atan2(n[1], n[0]));
    return Ea(i);
  },
  Fv = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: Pa,
    rotateZ: Pa,
    skewX: (n) => Fn(Math.atan(n[1])),
    skewY: (n) => Fn(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  Ea = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  Vd = Pa,
  Ld = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  Nd = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  Ov = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ld,
    scaleY: Nd,
    scale: (n) => (Ld(n) + Nd(n)) / 2,
    rotateX: (n) => Ea(Fn(Math.atan2(n[6], n[5]))),
    rotateY: (n) => Ea(Fn(Math.atan2(-n[2], n[0]))),
    rotateZ: Vd,
    rotate: Vd,
    skewX: (n) => Fn(Math.atan(n[4])),
    skewY: (n) => Fn(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function Ca(n) {
  return n.includes("scale") ? 1 : 0;
}
function Ma(n, i) {
  if (!n || n === "none") return Ca(i);
  const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let l, c;
  if (s) ((l = Ov), (c = s));
  else {
    const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((l = Fv), (c = p));
  }
  if (!c) return Ca(i);
  const d = l[i],
    f = c[1].split(",").map(Bv);
  return typeof d == "function" ? d(f) : f[d];
}
const zv = (n, i) => {
  const { transform: s = "none" } = getComputedStyle(n);
  return Ma(s, i);
};
function Bv(n) {
  return parseFloat(n.trim());
}
const wr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  xr = new Set([...wr, "pathRotation"]),
  _d = (n) => n === vr || n === G,
  Uv = new Set(["x", "y", "z"]),
  Wv = wr.filter((n) => !Uv.has(n));
function Hv(n) {
  const i = [];
  return (
    Wv.forEach((s) => {
      const l = n.getValue(s);
      l !== void 0 && (i.push([s, l.get()]), l.set(s.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const yn = {
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: s = "0", boxSizing: l }) => {
    const c = n.max - n.min;
    return l === "border-box" ? c : c - parseFloat(i) - parseFloat(s);
  },
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: s = "0", boxSizing: l }) => {
    const c = n.max - n.min;
    return l === "border-box" ? c : c - parseFloat(i) - parseFloat(s);
  },
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: (n, { transform: i }) => Ma(i, "x"),
  y: (n, { transform: i }) => Ma(i, "y"),
};
yn.translateX = yn.x;
yn.translateY = yn.y;
const On = new Set();
let Ra = !1,
  Aa = !1,
  Da = !1;
function dp() {
  if (Aa) {
    const n = Array.from(On).filter((l) => l.needsMeasurement),
      i = new Set(n.map((l) => l.element)),
      s = new Map();
    (i.forEach((l) => {
      const c = Hv(l);
      c.length && (s.set(l, c), l.render());
    }),
      n.forEach((l) => l.measureInitialState()),
      i.forEach((l) => {
        l.render();
        const c = s.get(l);
        c &&
          c.forEach(([d, f]) => {
            var p;
            (p = l.getValue(d)) == null || p.set(f);
          });
      }),
      n.forEach((l) => l.measureEndState()),
      n.forEach((l) => {
        l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY);
      }));
  }
  ((Aa = !1), (Ra = !1), On.forEach((n) => n.complete(Da)), On.clear());
}
function hp() {
  On.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (Aa = !0));
  });
}
function $v() {
  ((Da = !0), hp(), dp(), (Da = !1));
}
class iu {
  constructor(i, s, l, c, d, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = s),
      (this.name = l),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (On.add(this), Ra || ((Ra = !0), ge.read(hp), ge.resolveKeyframes(dp)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: s, element: l, motionValue: c } = this;
    if (i[0] === null) {
      const d = c == null ? void 0 : c.get(),
        f = i[i.length - 1];
      if (d !== void 0) i[0] = d;
      else if (l && s) {
        const p = l.readValue(s, f);
        p != null && (i[0] = p);
      }
      (i[0] === void 0 && (i[0] = f), c && d === void 0 && c.set(i[0]));
    }
    Iv(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      On.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (On.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Kv = (n) => n.startsWith("--");
function pp(n, i, s) {
  Kv(i) ? n.style.setProperty(i, s) : (n.style[i] = s);
}
const Gv = {};
function mp(n, i) {
  const s = Wh(n);
  return () => Gv[i] ?? s();
}
const Yv = mp(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  gp = mp(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ai = ([n, i, s, l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`,
  jd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ai([0, 0.65, 0.55, 1]),
    circOut: ai([0.55, 0, 1, 0.45]),
    backIn: ai([0.31, 0.01, 0.66, -0.59]),
    backOut: ai([0.33, 1.53, 0.69, 0.99]),
  };
function yp(n, i) {
  if (n)
    return typeof n == "function"
      ? gp()
        ? up(n, i)
        : "ease-out"
      : bh(n)
        ? ai(n)
        : Array.isArray(n)
          ? n.map((s) => yp(s, i) || jd.easeOut)
          : jd[n];
}
function Qv(
  n,
  i,
  s,
  {
    delay: l = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: p = "easeOut",
    times: m,
  } = {},
  y = void 0,
) {
  const g = { [i]: s };
  m && (g.offset = m);
  const w = yp(p, c);
  Array.isArray(w) && (g.easing = w);
  const S = {
    delay: l,
    duration: c,
    easing: Array.isArray(w) ? "linear" : w,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (y && (S.pseudoElement = y), n.animate(g, S));
}
function vp(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function Xv({ type: n, ...i }) {
  return vp(n) && gp()
    ? n.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class wp extends ru {
  constructor(i) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !i)
    )
      return;
    const {
      element: s,
      name: l,
      keyframes: c,
      pseudoElement: d,
      allowFlatten: f = !1,
      finalKeyframe: p,
      onComplete: m,
    } = i;
    ((this.isPseudoElement = !!d),
      (this.allowFlatten = f),
      (this.options = i),
      Qa(typeof i.type != "string"));
    const y = Xv(i);
    ((this.animation = Qv(s, l, c, y, d)),
      y.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const g = to(c, this.options, p, this.speed);
          (this.updateMotionValue && this.updateMotionValue(g),
            pp(s, l, g),
            this.animation.cancel());
        }
        (m == null || m(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var i, s;
    (s = (i = this.animation).finish) == null || s.call(i);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var s, l, c;
    const i = (s = this.options) == null ? void 0 : s.element;
    !this.isPseudoElement &&
      i != null &&
      i.isConnected &&
      ((c = (l = this.animation).commitStyles) == null || c.call(l));
  }
  get duration() {
    var s, l;
    const i =
      ((l = (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) == null
        ? void 0
        : l.call(s).duration) || 0;
    return xt(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + xt(i);
  }
  get time() {
    return xt(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    const s = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = ht(i)),
      s && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    (i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(i) {
    this.manualStartTime = this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, rangeStart: s, rangeEnd: l, observe: c }) {
    var d;
    return (
      this.allowFlatten &&
        ((d = this.animation.effect) == null || d.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      i && Yv()
        ? ((this.animation.timeline = i),
          s && (this.animation.rangeStart = s),
          l && (this.animation.rangeEnd = l),
          St)
        : c(this)
    );
  }
}
const xp = { anticipate: Xh, backInOut: Qh, circInOut: qh };
function Zv(n) {
  return n in xp;
}
function qv(n) {
  typeof n.ease == "string" && Zv(n.ease) && (n.ease = xp[n.ease]);
}
const ua = 10;
class Jv extends wp {
  constructor(i) {
    (qv(i),
      fp(i),
      super(i),
      i.startTime !== void 0 && i.autoplay !== !1 && (this.startTime = i.startTime),
      (this.options = i));
  }
  updateMotionValue(i) {
    const { motionValue: s, onUpdate: l, onComplete: c, element: d, ...f } = this.options;
    if (!s) return;
    if (i !== void 0) {
      s.set(i);
      return;
    }
    const p = new Xs({ ...f, autoplay: !1 }),
      m = Math.max(ua, et.now() - this.startTime),
      y = Bt(0, ua, m - ua),
      g = p.sample(m).value,
      { name: w } = this.options;
    (d && w && pp(d, w, g), s.setWithVelocity(p.sample(Math.max(0, m - y)).value, g, y), p.stop());
  }
}
const Id = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" && (Vt.test(n) || n === "0") && !n.startsWith("url("))
      );
function bv(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== i) return !0;
}
function e0(n, i, s, l) {
  const c = n[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = Id(c, i),
    p = Id(d, i);
  return !f || !p ? !1 : bv(n) || ((s === "spring" || vp(s)) && l);
}
function Va(n) {
  ((n.duration = 0), (n.type = "keyframes"));
}
const Sp = new Set(["opacity", "clipPath", "filter", "transform"]),
  t0 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function n0(n) {
  for (let i = 0; i < n.length; i++) if (typeof n[i] == "string" && t0.test(n[i])) return !0;
  return !1;
}
const r0 = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  i0 = Wh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function s0(n) {
  var w;
  const {
    motionValue: i,
    name: s,
    repeatDelay: l,
    repeatType: c,
    damping: d,
    type: f,
    keyframes: p,
  } = n;
  if (!(((w = i == null ? void 0 : i.owner) == null ? void 0 : w.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: y, transformTemplate: g } = i.owner.getProps();
  return (
    i0() &&
    s &&
    (Sp.has(s) || (r0.has(s) && n0(p))) &&
    (s !== "transform" || !g) &&
    !y &&
    !l &&
    c !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const o0 = 40;
class l0 extends ru {
  constructor({
    autoplay: i = !0,
    delay: s = 0,
    type: l = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: p,
    name: m,
    motionValue: y,
    element: g,
    ...w
  }) {
    var R;
    (super(),
      (this.stop = () => {
        var D, A;
        (this._animation &&
          (this._animation.stop(), (D = this.stopTimeline) == null || D.call(this)),
          (A = this.keyframeResolver) == null || A.cancel());
      }),
      (this.createdAt = et.now()));
    const S = {
        autoplay: i,
        delay: s,
        type: l,
        repeat: c,
        repeatDelay: d,
        repeatType: f,
        name: m,
        motionValue: y,
        element: g,
        ...w,
      },
      C = (g == null ? void 0 : g.KeyframeResolver) || iu;
    ((this.keyframeResolver = new C(
      p,
      (D, A, j) => this.onKeyframesResolved(D, A, S, !j),
      m,
      y,
      g,
    )),
      (R = this.keyframeResolver) == null || R.scheduleResolve());
  }
  onKeyframesResolved(i, s, l, c) {
    var j, z;
    this.keyframeResolver = void 0;
    const { name: d, type: f, velocity: p, delay: m, isHandoff: y, onUpdate: g } = l;
    this.resolvedAt = et.now();
    let w = !0;
    e0(i, d, f, p) ||
      ((w = !1),
      (vn.instantAnimations || !m) && (g == null || g(to(i, l, s))),
      (i[0] = i[i.length - 1]),
      Va(l),
      (l.repeat = 0));
    const C = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > o0
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: s,
        ...l,
        keyframes: i,
      },
      R = w && !y && s0(C),
      D = (z = (j = C.motionValue) == null ? void 0 : j.owner) == null ? void 0 : z.current;
    let A;
    if (R)
      try {
        A = new Jv({ ...C, element: D });
      } catch {
        A = new Xs(C);
      }
    else A = new Xs(C);
    (A.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(St),
      this.pendingTimeline &&
        ((this.stopTimeline = A.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = A));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, s) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    var i;
    return (
      this._animation || ((i = this.keyframeResolver) == null || i.resume(), $v()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var i;
    (this._animation && this.animation.cancel(), (i = this.keyframeResolver) == null || i.cancel());
  }
}
function kp(n, i, s, l = 0, c = 1) {
  const d = Array.from(n)
      .sort((y, g) => y.sortNodePosition(g))
      .indexOf(i),
    f = n.size,
    p = (f - 1) * l;
  return typeof s == "function" ? s(d, f) : c === 1 ? d * l : p - d * l;
}
const Fd = 30,
  a0 = (n) => !isNaN(parseFloat(n));
class u0 {
  constructor(i, s = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (l) => {
        var d;
        const c = et.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(l),
          this.current !== this.prev &&
            ((d = this.events.change) == null || d.notify(this.current), this.dependents))
        )
          for (const f of this.dependents) f.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = s.owner));
  }
  setCurrent(i) {
    ((this.current = i),
      (this.updatedAt = et.now()),
      this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = a0(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new Xa());
    const l = this.events[i].add(s);
    return i === "change"
      ? () => {
          (l(),
            ge.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : l;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, s) {
    ((this.passiveEffect = i), (this.stopPassiveEffect = s));
  }
  set(i) {
    this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i);
  }
  setWithVelocity(i, s, l) {
    (this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - l));
  }
  jump(i, s = !0) {
    (this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var i;
    (i = this.events.change) == null || i.notify(this.current);
  }
  addDependent(i) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(i));
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = et.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Fd)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Fd);
    return Hh(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((s) => {
        ((this.hasAnimated = !0),
          (this.animation = i(s)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var i, s;
    ((i = this.dependents) == null || i.clear(),
      (s = this.events.destroy) == null || s.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function yr(n, i) {
  return new u0(n, i);
}
function Tp(n, i) {
  if (n != null && n.inherit && i) {
    const { inherit: s, ...l } = n;
    return { ...i, ...l };
  }
  return n;
}
function su(n, i) {
  const s = (n == null ? void 0 : n[i]) ?? (n == null ? void 0 : n.default) ?? n;
  return s !== n ? Tp(s, n) : s;
}
const c0 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  f0 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  d0 = { type: "keyframes", duration: 0.8 },
  h0 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  p0 = (n, { keyframes: i }) =>
    i.length > 2 ? d0 : xr.has(n) ? (n.startsWith("scale") ? f0(i[1]) : c0) : h0,
  m0 = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function g0(n) {
  for (const i in n) if (!m0.has(i)) return !0;
  return !1;
}
const ou =
    (n, i, s, l = {}, c, d) =>
    (f) => {
      const p = su(l, n) || {},
        m = p.delay || l.delay || 0;
      let { elapsed: y = 0 } = l;
      y = y - ht(m);
      const g = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...p,
        delay: -y,
        onUpdate: (S) => {
          (i.set(S), p.onUpdate && p.onUpdate(S));
        },
        onComplete: () => {
          (f(), p.onComplete && p.onComplete());
        },
        name: n,
        motionValue: i,
        element: d ? void 0 : c,
      };
      (g0(p) || Object.assign(g, p0(n, g)),
        g.duration && (g.duration = ht(g.duration)),
        g.repeatDelay && (g.repeatDelay = ht(g.repeatDelay)),
        g.from !== void 0 && (g.keyframes[0] = g.from));
      let w = !1;
      if (
        ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
          (Va(g), g.delay === 0 && (w = !0)),
        (vn.instantAnimations ||
          vn.skipAnimations ||
          (c != null && c.shouldSkipAnimations) ||
          p.skipAnimations) &&
          ((w = !0), Va(g), (g.delay = 0)),
        (g.allowFlatten = !p.type && !p.ease),
        w && !d && i.get() !== void 0)
      ) {
        const S = to(g.keyframes, p);
        if (S !== void 0) {
          ge.update(() => {
            (g.onUpdate(S), g.onComplete());
          });
          return;
        }
      }
      return p.isSync ? new Xs(g) : new l0(g);
    },
  y0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function v0(n) {
  const i = y0.exec(n);
  if (!i) return [,];
  const [, s, l, c] = i;
  return [`--${s ?? l}`, c];
}
function Pp(n, i, s = 1) {
  const [l, c] = v0(n);
  if (!l) return;
  const d = window.getComputedStyle(i).getPropertyValue(l);
  if (d) {
    const f = d.trim();
    return zh(f) ? parseFloat(f) : f;
  }
  return Ja(c) ? Pp(c, i, s + 1) : c;
}
function Od(n) {
  const i = [{}, {}];
  return (
    n == null ||
      n.values.forEach((s, l) => {
        ((i[0][l] = s.get()), (i[1][l] = s.getVelocity()));
      }),
    i
  );
}
function lu(n, i, s, l) {
  if (typeof i == "function") {
    const [c, d] = Od(l);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  if ((typeof i == "string" && (i = n.variants && n.variants[i]), typeof i == "function")) {
    const [c, d] = Od(l);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  return i;
}
function zn(n, i, s) {
  const l = n.getProps();
  return lu(l, i, s !== void 0 ? s : l.custom, n);
}
const Ep = new Set(["width", "height", "top", "left", "right", "bottom", ...wr]),
  La = (n) => Array.isArray(n);
function w0(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, yr(s));
}
function x0(n) {
  return La(n) ? n[n.length - 1] || 0 : n;
}
function S0(n, i) {
  const s = zn(n, i);
  let { transitionEnd: l = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...l };
  for (const f in d) {
    const p = x0(d[f]);
    w0(n, f, p);
  }
}
const Ye = (n) => !!(n && n.getVelocity);
function k0(n) {
  return !!(Ye(n) && n.add);
}
function Na(n, i) {
  const s = n.getValue("willChange");
  if (k0(s)) return s.add(i);
  if (!s && vn.WillChange) {
    const l = new vn.WillChange("auto");
    (n.addValue("willChange", l), l.add(i));
  }
}
function au(n) {
  return n.replace(/([A-Z])/g, (i) => `-${i.toLowerCase()}`);
}
const T0 = "framerAppearId",
  Cp = "data-" + au(T0);
function Mp(n) {
  return n.props[Cp];
}
function P0({ protectedKeys: n, needsAnimating: i }, s) {
  const l = n.hasOwnProperty(s) && i[s] !== !0;
  return ((i[s] = !1), l);
}
function Rp(n, i, { delay: s = 0, transitionOverride: l, type: c } = {}) {
  let { transition: d, transitionEnd: f, ...p } = i;
  const m = n.getDefaultTransition();
  d = d ? Tp(d, m) : m;
  const y = d == null ? void 0 : d.reduceMotion,
    g = d == null ? void 0 : d.skipAnimations;
  l && (d = l);
  const w = [],
    S = c && n.animationState && n.animationState.getState()[c],
    C = d == null ? void 0 : d.path;
  C && C.animateVisualElement(n, p, d, s, w);
  for (const R in p) {
    const D = n.getValue(R, n.latestValues[R] ?? null),
      A = p[R];
    if (A === void 0 || (S && P0(S, R))) continue;
    const j = { delay: s, ...su(d || {}, R) };
    g && (j.skipAnimations = !0);
    const z = D.get();
    if (z !== void 0 && !D.isAnimating() && !Array.isArray(A) && A === z && !j.velocity) {
      ge.update(() => D.set(A));
      continue;
    }
    let O = !1;
    if (window.MotionHandoffAnimation) {
      const ie = Mp(n);
      if (ie) {
        const re = window.MotionHandoffAnimation(ie, R, ge);
        re !== null && ((j.startTime = re), (O = !0));
      }
    }
    Na(n, R);
    const B = y ?? n.shouldReduceMotion;
    D.start(ou(R, D, A, B && Ep.has(R) ? { type: !1 } : j, n, O));
    const q = D.animation;
    q && w.push(q);
  }
  if (f) {
    const R = () =>
      ge.update(() => {
        f && S0(n, f);
      });
    w.length ? Promise.all(w).then(R) : R();
  }
  return w;
}
function _a(n, i, s = {}) {
  var m;
  const l = zn(
    n,
    i,
    s.type === "exit" ? ((m = n.presenceContext) == null ? void 0 : m.custom) : void 0,
  );
  let { transition: c = n.getDefaultTransition() || {} } = l || {};
  s.transitionOverride && (c = s.transitionOverride);
  const d = l ? () => Promise.all(Rp(n, l, s)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (y = 0) => {
            const { delayChildren: g = 0, staggerChildren: w, staggerDirection: S } = c;
            return E0(n, i, y, g, w, S, s);
          }
        : () => Promise.resolve(),
    { when: p } = c;
  if (p) {
    const [y, g] = p === "beforeChildren" ? [d, f] : [f, d];
    return y().then(() => g());
  } else return Promise.all([d(), f(s.delay)]);
}
function E0(n, i, s = 0, l = 0, c = 0, d = 1, f) {
  const p = [];
  for (const m of n.variantChildren)
    (m.notify("AnimationStart", i),
      p.push(
        _a(m, i, {
          ...f,
          delay: s + (typeof l == "function" ? 0 : l) + kp(n.variantChildren, m, l, c, d),
        }).then(() => m.notify("AnimationComplete", i)),
      ));
  return Promise.all(p);
}
function C0(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const c = i.map((d) => _a(n, d, s));
    l = Promise.all(c);
  } else if (typeof i == "string") l = _a(n, i, s);
  else {
    const c = typeof i == "function" ? zn(n, i, s.custom) : i;
    l = Promise.all(Rp(n, c, s));
  }
  return l.then(() => {
    n.notify("AnimationComplete", i);
  });
}
const M0 = { test: (n) => n === "auto", parse: (n) => n },
  Ap = (n) => (i) => i.test(n),
  Dp = [vr, G, zt, Xt, by, Jy, M0],
  zd = (n) => Dp.find(Ap(n));
function R0(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Uh(n) : !0;
}
const A0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function D0(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [l] = s.match(ba) || [];
  if (!l) return n;
  const c = s.replace(l, "");
  let d = A0.has(i) ? 1 : 0;
  return (l !== s && (d *= 100), i + "(" + d + c + ")");
}
const V0 = /\b([a-z-]*)\(.*?\)/gu,
  ja = {
    ...Vt,
    getAnimatableNone: (n) => {
      const i = n.match(V0);
      return i ? i.map(D0).join(" ") : n;
    },
  },
  Ia = {
    ...Vt,
    getAnimatableNone: (n) => {
      const i = Vt.parse(n);
      return Vt.createTransformer(n)(
        i.map((l) => (typeof l == "number" ? 0 : typeof l == "object" ? { ...l, alpha: 1 } : l)),
      );
    },
  },
  Bd = { ...vr, transform: Math.round },
  L0 = {
    rotate: Xt,
    pathRotation: Xt,
    rotateX: Xt,
    rotateY: Xt,
    rotateZ: Xt,
    scale: Ns,
    scaleX: Ns,
    scaleY: Ns,
    scaleZ: Ns,
    skew: Xt,
    skewX: Xt,
    skewY: Xt,
    distance: G,
    translateX: G,
    translateY: G,
    translateZ: G,
    x: G,
    y: G,
    z: G,
    perspective: G,
    transformPerspective: G,
    opacity: pi,
    originX: Cd,
    originY: Cd,
    originZ: G,
  },
  Zs = {
    borderWidth: G,
    borderTopWidth: G,
    borderRightWidth: G,
    borderBottomWidth: G,
    borderLeftWidth: G,
    borderRadius: G,
    borderTopLeftRadius: G,
    borderTopRightRadius: G,
    borderBottomRightRadius: G,
    borderBottomLeftRadius: G,
    width: G,
    maxWidth: G,
    height: G,
    maxHeight: G,
    top: G,
    right: G,
    bottom: G,
    left: G,
    inset: G,
    insetBlock: G,
    insetBlockStart: G,
    insetBlockEnd: G,
    insetInline: G,
    insetInlineStart: G,
    insetInlineEnd: G,
    padding: G,
    paddingTop: G,
    paddingRight: G,
    paddingBottom: G,
    paddingLeft: G,
    paddingBlock: G,
    paddingBlockStart: G,
    paddingBlockEnd: G,
    paddingInline: G,
    paddingInlineStart: G,
    paddingInlineEnd: G,
    margin: G,
    marginTop: G,
    marginRight: G,
    marginBottom: G,
    marginLeft: G,
    marginBlock: G,
    marginBlockStart: G,
    marginBlockEnd: G,
    marginInline: G,
    marginInlineStart: G,
    marginInlineEnd: G,
    fontSize: G,
    backgroundPositionX: G,
    backgroundPositionY: G,
    ...L0,
    zIndex: Bd,
    fillOpacity: pi,
    strokeOpacity: pi,
    numOctaves: Bd,
  },
  N0 = {
    ...Zs,
    color: Fe,
    backgroundColor: Fe,
    outlineColor: Fe,
    fill: Fe,
    stroke: Fe,
    borderColor: Fe,
    borderTopColor: Fe,
    borderRightColor: Fe,
    borderBottomColor: Fe,
    borderLeftColor: Fe,
    filter: ja,
    WebkitFilter: ja,
    mask: Ia,
    WebkitMask: Ia,
  },
  Vp = (n) => N0[n],
  _0 = new Set([ja, Ia]);
function Lp(n, i) {
  let s = Vp(n);
  return (_0.has(s) || (s = Vt), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0);
}
const j0 = new Set(["auto", "none", "0"]);
function I0(n, i, s) {
  let l = 0,
    c;
  for (; l < n.length && !c;) {
    const d = n[l];
    (typeof d == "string" && !j0.has(d) && gr(d).values.length && (c = n[l]), l++);
  }
  if (c && s) for (const d of i) n[d] = Lp(s, c);
}
class F0 extends iu {
  constructor(i, s, l, c, d) {
    super(i, s, l, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: l } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let g = 0; g < i.length; g++) {
      let w = i[g];
      if (typeof w == "string" && ((w = w.trim()), Ja(w))) {
        const S = Pp(w, s.current);
        (S !== void 0 && (i[g] = S), g === i.length - 1 && (this.finalKeyframe = w));
      }
    }
    if ((this.resolveNoneKeyframes(), !Ep.has(l) || i.length !== 2)) return;
    const [c, d] = i,
      f = zd(c),
      p = zd(d),
      m = Ed(c),
      y = Ed(d);
    if (m !== y && yn[l]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== p)
      if (_d(f) && _d(p))
        for (let g = 0; g < i.length; g++) {
          const w = i[g];
          typeof w == "string" && (i[g] = parseFloat(w));
        }
      else yn[l] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      l = [];
    for (let c = 0; c < i.length; c++) (i[c] === null || R0(i[c])) && l.push(c);
    l.length && I0(i, l, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: l } = this;
    if (!i || !i.current) return;
    (l === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = yn[l](i.measureViewportBox(), window.getComputedStyle(i.current))),
      (s[0] = this.measuredOrigin));
    const c = s[s.length - 1];
    c !== void 0 && i.getValue(l, c).jump(c, !1);
  }
  measureEndState() {
    var p;
    const { element: i, name: s, unresolvedKeyframes: l } = this;
    if (!i || !i.current) return;
    const c = i.getValue(s);
    c && c.jump(this.measuredOrigin, !1);
    const d = l.length - 1,
      f = l[d];
    ((l[d] = yn[s](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (p = this.removedTransforms) != null &&
        p.length &&
        this.removedTransforms.forEach(([m, y]) => {
          i.getValue(m).set(y);
        }),
      this.resolveNoneKeyframes());
  }
}
function Np(n, i, s) {
  if (n == null) return [];
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    let l = document;
    const c = (s == null ? void 0 : s[n]) ?? l.querySelectorAll(n);
    return c ? Array.from(c) : [];
  }
  return Array.from(n).filter((l) => l != null);
}
const Fa = (n, i) => (i && typeof n == "number" ? i.transform(n) : n);
function O0(n) {
  return Bh(n) && "offsetHeight" in n && !("ownerSVGElement" in n);
}
const { schedule: uu } = ep(queueMicrotask, !1),
  Dt = { x: !1, y: !1 };
function _p() {
  return Dt.x || Dt.y;
}
function z0(n) {
  return n === "x" || n === "y"
    ? Dt[n]
      ? null
      : ((Dt[n] = !0),
        () => {
          Dt[n] = !1;
        })
    : Dt.x || Dt.y
      ? null
      : ((Dt.x = Dt.y = !0),
        () => {
          Dt.x = Dt.y = !1;
        });
}
function jp(n, i) {
  const s = Np(n),
    l = new AbortController(),
    c = { passive: !0, ...i, signal: l.signal };
  return [s, c, () => l.abort()];
}
function B0(n) {
  return !(n.pointerType === "touch" || _p());
}
function U0(n, i, s = {}) {
  const [l, c, d] = jp(n, s);
  return (
    l.forEach((f) => {
      let p = !1,
        m = !1,
        y;
      const g = () => {
          f.removeEventListener("pointerleave", R);
        },
        w = (A) => {
          (y && (y(A), (y = void 0)), g());
        },
        S = (A) => {
          ((p = !1),
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            m && ((m = !1), w(A)));
        },
        C = () => {
          ((p = !0),
            window.addEventListener("pointerup", S, c),
            window.addEventListener("pointercancel", S, c));
        },
        R = (A) => {
          if (A.pointerType !== "touch") {
            if (p) {
              m = !0;
              return;
            }
            w(A);
          }
        },
        D = (A) => {
          if (!B0(A)) return;
          m = !1;
          const j = i(f, A);
          typeof j == "function" && ((y = j), f.addEventListener("pointerleave", R, c));
        };
      (f.addEventListener("pointerenter", D, c), f.addEventListener("pointerdown", C, c));
    }),
    d
  );
}
const Ip = (n, i) => (i ? (n === i ? !0 : Ip(n, i.parentElement)) : !1),
  cu = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  W0 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function H0(n) {
  return W0.has(n.tagName) || n.isContentEditable === !0;
}
const $0 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function K0(n) {
  return $0.has(n.tagName) || n.isContentEditable === !0;
}
const zs = new WeakSet();
function Ud(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function ca(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const G0 = (n, i) => {
  const s = n.currentTarget;
  if (!s) return;
  const l = Ud(() => {
    if (zs.has(s)) return;
    ca(s, "down");
    const c = Ud(() => {
        ca(s, "up");
      }),
      d = () => ca(s, "cancel");
    (s.addEventListener("keyup", c, i), s.addEventListener("blur", d, i));
  });
  (s.addEventListener("keydown", l, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", l), i));
};
function Wd(n) {
  return cu(n) && !_p();
}
const Hd = new WeakSet();
function Y0(n, i, s = {}) {
  const [l, c, d] = jp(n, s),
    f = (p) => {
      const m = p.currentTarget;
      if (!Wd(p) || Hd.has(p)) return;
      (zs.add(m), s.stopPropagation && Hd.add(p));
      const y = i(m, p),
        g = (C, R) => {
          (window.removeEventListener("pointerup", w),
            window.removeEventListener("pointercancel", S),
            zs.has(m) && zs.delete(m),
            Wd(C) && typeof y == "function" && y(C, { success: R }));
        },
        w = (C) => {
          g(C, m === window || m === document || s.useGlobalTarget || Ip(m, C.target));
        },
        S = (C) => {
          g(C, !1);
        };
      (window.addEventListener("pointerup", w, c), window.addEventListener("pointercancel", S, c));
    };
  return (
    l.forEach((p) => {
      ((s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        O0(p) &&
          (p.addEventListener("focus", (y) => G0(y, c)),
          !H0(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0)));
    }),
    d
  );
}
function fu(n) {
  return Bh(n) && "ownerSVGElement" in n;
}
const Bs = new WeakMap();
let gn;
const Fp = (n, i, s) => (l, c) =>
    c && c[0] ? c[0][n + "Size"] : fu(l) && "getBBox" in l ? l.getBBox()[i] : l[s],
  Q0 = Fp("inline", "width", "offsetWidth"),
  X0 = Fp("block", "height", "offsetHeight");
function Z0({ target: n, borderBoxSize: i }) {
  var s;
  (s = Bs.get(n)) == null ||
    s.forEach((l) => {
      l(n, {
        get width() {
          return Q0(n, i);
        },
        get height() {
          return X0(n, i);
        },
      });
    });
}
function q0(n) {
  n.forEach(Z0);
}
function J0() {
  typeof ResizeObserver > "u" || (gn = new ResizeObserver(q0));
}
function b0(n, i) {
  gn || J0();
  const s = Np(n);
  return (
    s.forEach((l) => {
      let c = Bs.get(l);
      (c || ((c = new Set()), Bs.set(l, c)), c.add(i), gn == null || gn.observe(l));
    }),
    () => {
      s.forEach((l) => {
        const c = Bs.get(l);
        (c == null || c.delete(i), (c != null && c.size) || gn == null || gn.unobserve(l));
      });
    }
  );
}
const Us = new Set();
let pr;
function e1() {
  ((pr = () => {
    const n = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Us.forEach((i) => i(n));
  }),
    window.addEventListener("resize", pr));
}
function t1(n) {
  return (
    Us.add(n),
    pr || e1(),
    () => {
      (Us.delete(n),
        !Us.size &&
          typeof pr == "function" &&
          (window.removeEventListener("resize", pr), (pr = void 0)));
    }
  );
}
function $d(n, i) {
  return typeof n == "function" ? t1(n) : b0(n, i);
}
function n1(n) {
  return fu(n) && n.tagName === "svg";
}
const r1 = [...Dp, Fe, Vt],
  i1 = (n) => r1.find(Ap(n)),
  Kd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  mr = () => ({ x: Kd(), y: Kd() }),
  Gd = () => ({ min: 0, max: 0 }),
  Be = () => ({ x: Gd(), y: Gd() }),
  s1 = new WeakMap();
function no(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function mi(n) {
  return typeof n == "string" || Array.isArray(n);
}
const du = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  hu = ["initial", ...du];
function ro(n) {
  return no(n.animate) || hu.some((i) => mi(n[i]));
}
function Op(n) {
  return !!(ro(n) || n.variants);
}
function o1(n, i, s) {
  for (const l in i) {
    const c = i[l],
      d = s[l];
    if (Ye(c)) n.addValue(l, c);
    else if (Ye(d)) n.addValue(l, yr(c, { owner: n }));
    else if (d !== c)
      if (n.hasValue(l)) {
        const f = n.getValue(l);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = n.getStaticValue(l);
        n.addValue(l, yr(f !== void 0 ? f : c, { owner: n }));
      }
  }
  for (const l in s) i[l] === void 0 && n.removeValue(l);
  return i;
}
const Oa = { current: null },
  zp = { current: !1 },
  l1 = typeof window < "u";
function a1() {
  if (((zp.current = !0), !!l1))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Oa.current = n.matches);
      (n.addEventListener("change", i), i());
    } else Oa.current = !1;
}
const Yd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let qs = {};
function Bp(n) {
  qs = n;
}
function u1() {
  return qs;
}
class c1 {
  scrapeMotionValuesFromProps(i, s, l) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: s,
      presenceContext: l,
      reducedMotionConfig: c,
      skipAnimations: d,
      blockInitialAnimation: f,
      visualState: p,
    },
    m = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = iu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const C = et.now();
        this.renderScheduledAt < C &&
          ((this.renderScheduledAt = C), ge.render(this.render, !1, !0));
      }));
    const { latestValues: y, renderState: g } = p;
    ((this.latestValues = y),
      (this.baseTarget = { ...y }),
      (this.initialValues = s.initial ? { ...y } : {}),
      (this.renderState = g),
      (this.parent = i),
      (this.props = s),
      (this.presenceContext = l),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = d),
      (this.options = m),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = ro(s)),
      (this.isVariantNode = Op(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: w, ...S } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const C in S) {
      const R = S[C];
      y[C] !== void 0 && Ye(R) && R.set(y[C]);
    }
  }
  mount(i) {
    var s, l;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        ((s = this.values.get(c)) == null || s.jump(this.initialValues[c]),
          (this.latestValues[c] = this.initialValues[c]));
    ((this.current = i),
      s1.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((c, d) => this.bindToMotionValue(d, c)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (zp.current || a1(), (this.shouldReduceMotion = Oa.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (l = this.parent) == null || l.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var i;
    (this.projection && this.projection.unmount(),
      wn(this.notifyUpdate),
      wn(this.render),
      this.valueSubscriptions.forEach((s) => s()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (i = this.parent) == null || i.removeChild(this));
    for (const s in this.events) this.events[s].clear();
    for (const s in this.features) {
      const l = this.features[s];
      l && (l.unmount(), (l.isMounted = !1));
    }
    this.current = null;
  }
  addChild(i) {
    (this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(i));
  }
  removeChild(i) {
    (this.children.delete(i), this.enteringChildren && this.enteringChildren.delete(i));
  }
  bindToMotionValue(i, s) {
    if (
      (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(),
      s.accelerate && Sp.has(i) && this.current instanceof HTMLElement)
    ) {
      const { factory: f, keyframes: p, times: m, ease: y, duration: g } = s.accelerate,
        w = new wp({
          element: this.current,
          name: i,
          keyframes: p,
          times: m,
          ease: y,
          duration: ht(g),
        }),
        S = f(w);
      this.valueSubscriptions.set(i, () => {
        (S(), w.cancel());
      });
      return;
    }
    const l = xr.has(i);
    l && this.onBindTransform && this.onBindTransform();
    const c = s.on("change", (f) => {
      ((this.latestValues[i] = f),
        this.props.onUpdate && ge.preRender(this.notifyUpdate),
        l && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let d;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, i, s)),
      this.valueSubscriptions.set(i, () => {
        (c(), d && d());
      }));
  }
  sortNodePosition(i) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in qs) {
      const s = qs[i];
      if (!s) continue;
      const { isEnabled: l, Feature: c } = s;
      if (
        (!this.features[i] && c && l(this.props) && (this.features[i] = new c(this)),
        this.features[i])
      ) {
        const d = this.features[i];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Be();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, s) {
    this.latestValues[i] = s;
  }
  update(i, s) {
    ((i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s));
    for (let l = 0; l < Yd.length; l++) {
      const c = Yd[l];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = o1(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(i) {
    const s = this.getClosestVariantNode();
    if (s)
      return (s.variantChildren && s.variantChildren.add(i), () => s.variantChildren.delete(i));
  }
  addValue(i, s) {
    const l = this.values.get(i);
    s !== l &&
      (l && this.removeValue(i),
      this.bindToMotionValue(i, s),
      this.values.set(i, s),
      (this.latestValues[i] = s.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const s = this.valueSubscriptions.get(i);
    (s && (s(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState));
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, s) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let l = this.values.get(i);
    return (
      l === void 0 &&
        s !== void 0 &&
        ((l = yr(s === null ? void 0 : s, { owner: this })), this.addValue(i, l)),
      l
    );
  }
  readValue(i, s) {
    let l =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options));
    return (
      l != null &&
        (typeof l == "string" && (zh(l) || Uh(l))
          ? (l = parseFloat(l))
          : !i1(l) && Vt.test(s) && (l = Lp(i, s)),
        this.setBaseTarget(i, Ye(l) ? l.get() : l)),
      Ye(l) ? l.get() : l
    );
  }
  setBaseTarget(i, s) {
    this.baseTarget[i] = s;
  }
  getBaseTarget(i) {
    var d;
    const { initial: s } = this.props;
    let l;
    if (typeof s == "string" || typeof s == "object") {
      const f = lu(this.props, s, (d = this.presenceContext) == null ? void 0 : d.custom);
      f && (l = f[i]);
    }
    if (s && l !== void 0) return l;
    const c = this.getBaseTargetFromProps(this.props, i);
    return c !== void 0 && !Ye(c)
      ? c
      : this.initialValues[i] !== void 0 && l === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, s) {
    return (this.events[i] || (this.events[i] = new Xa()), this.events[i].add(s));
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
  scheduleRenderMicrotask() {
    uu.render(this.render);
  }
}
class Up extends c1 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = F0));
  }
  sortInstanceNodePosition(i, s) {
    return i.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, s) {
    const l = i.style;
    return l ? l[s] : void 0;
  }
  removeValueFromRenderState(i, { vars: s, style: l }) {
    (delete s[i], delete l[i]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    Ye(i) &&
      (this.childSubscription = i.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
class xn {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
function Wp({ top: n, left: i, right: s, bottom: l }) {
  return { x: { min: i, max: s }, y: { min: n, max: l } };
}
function f1({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function d1(n, i) {
  if (!i) return n;
  const s = i({ x: n.left, y: n.top }),
    l = i({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: l.y, right: l.x };
}
function fa(n) {
  return n === void 0 || n === 1;
}
function za({ scale: n, scaleX: i, scaleY: s }) {
  return !fa(n) || !fa(i) || !fa(s);
}
function jn(n) {
  return za(n) || Hp(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Hp(n) {
  return Qd(n.x) || Qd(n.y);
}
function Qd(n) {
  return n && n !== "0%";
}
function Js(n, i, s) {
  const l = n - s,
    c = i * l;
  return s + c;
}
function Xd(n, i, s, l, c) {
  return (c !== void 0 && (n = Js(n, c, l)), Js(n, s, l) + i);
}
function Ba(n, i = 0, s = 1, l, c) {
  ((n.min = Xd(n.min, i, s, l, c)), (n.max = Xd(n.max, i, s, l, c)));
}
function $p(n, { x: i, y: s }) {
  (Ba(n.x, i.translate, i.scale, i.originPoint), Ba(n.y, s.translate, s.scale, s.originPoint));
}
const Zd = 0.999999999999,
  qd = 1.0000000000001;
function h1(n, i, s, l = !1) {
  var p;
  const c = s.length;
  if (!c) return;
  i.x = i.y = 1;
  let d, f;
  for (let m = 0; m < c; m++) {
    ((d = s[m]), (f = d.projectionDelta));
    const { visualElement: y } = d.options;
    (y && y.props.style && y.props.style.display === "contents") ||
      (l &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        (Ot(n.x, -d.scroll.offset.x), Ot(n.y, -d.scroll.offset.y)),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), $p(n, f)),
      l &&
        jn(d.latestValues) &&
        Ws(n, d.latestValues, (p = d.layout) == null ? void 0 : p.layoutBox));
  }
  (i.x < qd && i.x > Zd && (i.x = 1), i.y < qd && i.y > Zd && (i.y = 1));
}
function Ot(n, i) {
  ((n.min += i), (n.max += i));
}
function Jd(n, i, s, l, c = 0.5) {
  const d = me(n.min, n.max, c);
  Ba(n, i, s, d, l);
}
function bd(n, i) {
  return typeof n == "string" ? (parseFloat(n) / 100) * (i.max - i.min) : n;
}
function Ws(n, i, s) {
  const l = s ?? n;
  (Jd(n.x, bd(i.x, l.x), i.scaleX, i.scale, i.originX),
    Jd(n.y, bd(i.y, l.y), i.scaleY, i.scale, i.originY));
}
function Kp(n, i) {
  return Wp(d1(n.getBoundingClientRect(), i));
}
function p1(n, i, s) {
  const l = Kp(n, s),
    { scroll: c } = i;
  return (c && (Ot(l.x, c.offset.x), Ot(l.y, c.offset.y)), l);
}
const m1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  g1 = wr.length;
function y1(n, i, s) {
  let l = "",
    c = !0;
  for (let f = 0; f < g1; f++) {
    const p = wr[f],
      m = n[p];
    if (m === void 0) continue;
    let y = !0;
    if (typeof m == "number") y = m === (p.startsWith("scale") ? 1 : 0);
    else {
      const g = parseFloat(m);
      y = p.startsWith("scale") ? g === 1 : g === 0;
    }
    if (!y || s) {
      const g = Fa(m, Zs[p]);
      if (!y) {
        c = !1;
        const w = m1[p] || p;
        l += `${w}(${g}) `;
      }
      s && (i[p] = g);
    }
  }
  const d = n.pathRotation;
  return (
    d && ((c = !1), (l += `rotate(${Fa(d, Zs.pathRotation)}) `)),
    (l = l.trim()),
    s ? (l = s(i, c ? "" : l)) : c && (l = "none"),
    l
  );
}
function pu(n, i, s) {
  const { style: l, vars: c, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const y = i[m];
    if (xr.has(m)) {
      f = !0;
      continue;
    } else if (np(m)) {
      c[m] = y;
      continue;
    } else {
      const g = Fa(y, Zs[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = g)) : (l[m] = g);
    }
  }
  if (
    (i.transform ||
      (f || s ? (l.transform = y1(i, n.transform, s)) : l.transform && (l.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: y = "50%", originZ: g = 0 } = d;
    l.transformOrigin = `${m} ${y} ${g}`;
  }
}
function Gp(n, { style: i, vars: s }, l, c) {
  const d = n.style;
  let f;
  for (f in i) d[f] = i[f];
  c == null || c.applyProjectionStyles(d, l);
  for (f in s) d.setProperty(f, s[f]);
}
function eh(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const li = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (G.test(n)) n = parseFloat(n);
        else return n;
      const s = eh(n, i.target.x),
        l = eh(n, i.target.y);
      return `${s}% ${l}%`;
    },
  },
  v1 = {
    correct: (n, { treeScale: i, projectionDelta: s }) => {
      const l = n,
        c = Vt.parse(n);
      if (c.length > 5) return l;
      const d = Vt.createTransformer(n),
        f = typeof c[0] != "number" ? 1 : 0,
        p = s.x.scale * i.x,
        m = s.y.scale * i.y;
      ((c[0 + f] /= p), (c[1 + f] /= m));
      const y = me(p, m, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= y),
        typeof c[3 + f] == "number" && (c[3 + f] /= y),
        d(c)
      );
    },
  },
  Ua = {
    borderRadius: {
      ...li,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: li,
    borderTopRightRadius: li,
    borderBottomLeftRadius: li,
    borderBottomRightRadius: li,
    boxShadow: v1,
  };
function Yp(n, { layout: i, layoutId: s }) {
  return (
    xr.has(n) || n.startsWith("origin") || ((i || s !== void 0) && (!!Ua[n] || n === "opacity"))
  );
}
function mu(n, i, s) {
  var f;
  const l = n.style,
    c = i == null ? void 0 : i.style,
    d = {};
  if (!l) return d;
  for (const p in l)
    (Ye(l[p]) ||
      (c && Ye(c[p])) ||
      Yp(p, n) ||
      ((f = s == null ? void 0 : s.getValue(p)) == null ? void 0 : f.liveStyle) !== void 0) &&
      (d[p] = l[p]);
  return d;
}
function w1(n) {
  return window.getComputedStyle(n);
}
class x1 extends Up {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Gp));
  }
  readValueFromInstance(i, s) {
    var l;
    if (xr.has(s)) return (l = this.projection) != null && l.isProjecting ? Ca(s) : zv(i, s);
    {
      const c = w1(i),
        d = (np(s) ? c.getPropertyValue(s) : c[s]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return Kp(i, s);
  }
  build(i, s, l) {
    pu(i, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return mu(i, s, l);
  }
}
const S1 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  k1 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function T1(n, i, s = 1, l = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? S1 : k1;
  ((n[d.offset] = `${-l}`), (n[d.array] = `${i} ${s}`));
}
const P1 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Qp(
  n,
  { attrX: i, attrY: s, attrScale: l, pathLength: c, pathSpacing: d = 1, pathOffset: f = 0, ...p },
  m,
  y,
  g,
) {
  if ((pu(n, p, y), m)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: w, style: S } = n;
  (w.transform && ((S.transform = w.transform), delete w.transform),
    (S.transform || w.transformOrigin) &&
      ((S.transformOrigin = w.transformOrigin ?? "50% 50%"), delete w.transformOrigin),
    S.transform &&
      ((S.transformBox = (g == null ? void 0 : g.transformBox) ?? "fill-box"),
      delete w.transformBox));
  for (const C of P1) w[C] !== void 0 && ((S[C] = w[C]), delete w[C]);
  (i !== void 0 && (w.x = i),
    s !== void 0 && (w.y = s),
    l !== void 0 && (w.scale = l),
    c !== void 0 && T1(w, c, d, f, !1));
}
const Xp = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Zp = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function E1(n, i, s, l) {
  Gp(n, i, void 0, l);
  for (const c in i.attrs) n.setAttribute(Xp.has(c) ? c : au(c), i.attrs[c]);
}
function qp(n, i, s) {
  const l = mu(n, i, s);
  for (const c in n)
    if (Ye(n[c]) || Ye(i[c])) {
      const d = wr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      l[d] = n[c];
    }
  return l;
}
class C1 extends Up {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Be));
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (xr.has(s)) {
      const l = Vp(s);
      return (l && l.default) || 0;
    }
    return ((s = Xp.has(s) ? s : au(s)), i.getAttribute(s));
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return qp(i, s, l);
  }
  build(i, s, l) {
    Qp(i, s, this.isSVGTag, l.transformTemplate, l.style);
  }
  renderInstance(i, s, l, c) {
    E1(i, s, l, c);
  }
  mount(i) {
    ((this.isSVGTag = Zp(i.tagName)), super.mount(i));
  }
}
const M1 = hu.length;
function Jp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? Jp(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const i = {};
  for (let s = 0; s < M1; s++) {
    const l = hu[s],
      c = n.props[l];
    (mi(c) || c === !1) && (i[l] = c);
  }
  return i;
}
function bp(n, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== n.length) return !1;
  for (let l = 0; l < s; l++) if (i[l] !== n[l]) return !1;
  return !0;
}
const R1 = [...du].reverse(),
  A1 = du.length;
function D1(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: l }) => C0(n, s, l)));
}
function V1(n) {
  let i = D1(n),
    s = th(),
    l = !0,
    c = !1;
  const d = (y) => (g, w) => {
    var C;
    const S = zn(
      n,
      w,
      y === "exit" ? ((C = n.presenceContext) == null ? void 0 : C.custom) : void 0,
    );
    if (S) {
      const { transition: R, transitionEnd: D, ...A } = S;
      g = { ...g, ...A, ...D };
    }
    return g;
  };
  function f(y) {
    i = y(n);
  }
  function p(y) {
    const { props: g } = n,
      w = Jp(n.parent) || {},
      S = [],
      C = new Set();
    let R = {},
      D = 1 / 0;
    for (let j = 0; j < A1; j++) {
      const z = R1[j],
        O = s[z],
        B = g[z] !== void 0 ? g[z] : w[z],
        q = mi(B),
        ie = z === y ? O.isActive : null;
      ie === !1 && (D = j);
      let re = B === w[z] && B !== g[z] && q;
      if (
        (re && (l || c) && n.manuallyAnimateOnMount && (re = !1),
        (O.protectedKeys = { ...R }),
        (!O.isActive && ie === null) || (!B && !O.prevProp) || no(B) || typeof B == "boolean")
      )
        continue;
      if (z === "exit" && O.isActive && ie !== !0) {
        O.prevResolvedValues && (R = { ...R, ...O.prevResolvedValues });
        continue;
      }
      const Z = L1(O.prevProp, B);
      let ye = Z || (z === y && O.isActive && !re && q) || (j > D && q),
        J = !1;
      const pe = Array.isArray(B) ? B : [B];
      let xe = pe.reduce(d(z), {});
      ie === !1 && (xe = {});
      const { prevResolvedValues: Le = {} } = O,
        Ae = { ...Le, ...xe },
        je = (I) => {
          ((ye = !0), C.has(I) && ((J = !0), C.delete(I)), (O.needsAnimating[I] = !0));
          const Y = n.getValue(I);
          Y && (Y.liveStyle = !1);
        };
      for (const I in Ae) {
        const Y = xe[I],
          U = Le[I];
        if (R.hasOwnProperty(I)) continue;
        let T = !1;
        (La(Y) && La(U) ? (T = !bp(Y, U) || Z) : (T = Y !== U),
          T
            ? Y != null
              ? je(I)
              : C.add(I)
            : Y !== void 0 && C.has(I)
              ? je(I)
              : (O.protectedKeys[I] = !0));
      }
      ((O.prevProp = B),
        (O.prevResolvedValues = xe),
        O.isActive && (R = { ...R, ...xe }),
        (l || c) && n.blockInitialAnimation && (ye = !1));
      const Se = re && Z;
      ye &&
        (!Se || J) &&
        S.push(
          ...pe.map((I) => {
            const Y = { type: z };
            if (typeof I == "string" && (l || c) && !Se && n.manuallyAnimateOnMount && n.parent) {
              const { parent: U } = n,
                T = zn(U, I);
              if (U.enteringChildren && T) {
                const { delayChildren: V } = T.transition || {};
                Y.delay = kp(U.enteringChildren, n, V);
              }
            }
            return { animation: I, options: Y };
          }),
        );
    }
    if (C.size) {
      const j = {};
      if (typeof g.initial != "boolean") {
        const z = zn(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        z && z.transition && (j.transition = z.transition);
      }
      (C.forEach((z) => {
        const O = n.getBaseTarget(z),
          B = n.getValue(z);
        (B && (B.liveStyle = !0), (j[z] = O ?? null));
      }),
        S.push({ animation: j }));
    }
    let A = !!S.length;
    return (
      l && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (A = !1),
      (l = !1),
      (c = !1),
      A ? i(S) : Promise.resolve()
    );
  }
  function m(y, g) {
    var S;
    if (s[y].isActive === g) return Promise.resolve();
    ((S = n.variantChildren) == null ||
      S.forEach((C) => {
        var R;
        return (R = C.animationState) == null ? void 0 : R.setActive(y, g);
      }),
      (s[y].isActive = g));
    const w = p(y);
    for (const C in s) s[C].protectedKeys = {};
    return w;
  }
  return {
    animateChanges: p,
    setActive: m,
    setAnimateFunction: f,
    getState: () => s,
    reset: () => {
      ((s = th()), (c = !0));
    },
  };
}
function L1(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !bp(i, n) : !1;
}
function _n(n = !1) {
  return { isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function th() {
  return {
    animate: _n(!0),
    whileInView: _n(),
    whileHover: _n(),
    whileTap: _n(),
    whileDrag: _n(),
    whileFocus: _n(),
    exit: _n(),
  };
}
function Wa(n, i) {
  ((n.min = i.min), (n.max = i.max));
}
function At(n, i) {
  (Wa(n.x, i.x), Wa(n.y, i.y));
}
function nh(n, i) {
  ((n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin));
}
const em = 1e-4,
  N1 = 1 - em,
  _1 = 1 + em,
  tm = 0.01,
  j1 = 0 - tm,
  I1 = 0 + tm;
function tt(n) {
  return n.max - n.min;
}
function F1(n, i, s) {
  return Math.abs(n - i) <= s;
}
function rh(n, i, s, l = 0.5) {
  ((n.origin = l),
    (n.originPoint = me(i.min, i.max, n.origin)),
    (n.scale = tt(s) / tt(i)),
    (n.translate = me(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= N1 && n.scale <= _1) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= j1 && n.translate <= I1) || isNaN(n.translate)) && (n.translate = 0));
}
function fi(n, i, s, l) {
  (rh(n.x, i.x, s.x, l ? l.originX : void 0), rh(n.y, i.y, s.y, l ? l.originY : void 0));
}
function ih(n, i, s, l = 0) {
  const c = l ? me(s.min, s.max, l) : s.min;
  ((n.min = c + i.min), (n.max = n.min + tt(i)));
}
function O1(n, i, s, l) {
  (ih(n.x, i.x, s.x, l == null ? void 0 : l.x), ih(n.y, i.y, s.y, l == null ? void 0 : l.y));
}
function sh(n, i, s, l = 0) {
  const c = l ? me(s.min, s.max, l) : s.min;
  ((n.min = i.min - c), (n.max = n.min + tt(i)));
}
function bs(n, i, s, l) {
  (sh(n.x, i.x, s.x, l == null ? void 0 : l.x), sh(n.y, i.y, s.y, l == null ? void 0 : l.y));
}
function oh(n, i, s, l, c) {
  return ((n -= i), (n = Js(n, 1 / s, l)), c !== void 0 && (n = Js(n, 1 / c, l)), n);
}
function z1(n, i = 0, s = 1, l = 0.5, c, d = n, f = n) {
  if (
    (zt.test(i) && ((i = parseFloat(i)), (i = me(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = me(d.min, d.max, l);
  (n === d && (p -= i), (n.min = oh(n.min, i, s, p, c)), (n.max = oh(n.max, i, s, p, c)));
}
function lh(n, i, [s, l, c], d, f) {
  z1(n, i[s], i[l], i[c], i.scale, d, f);
}
const B1 = ["x", "scaleX", "originX"],
  U1 = ["y", "scaleY", "originY"];
function ah(n, i, s, l) {
  (lh(n.x, i, B1, s ? s.x : void 0, l ? l.x : void 0),
    lh(n.y, i, U1, s ? s.y : void 0, l ? l.y : void 0));
}
function uh(n) {
  return n.translate === 0 && n.scale === 1;
}
function nm(n) {
  return uh(n.x) && uh(n.y);
}
function ch(n, i) {
  return n.min === i.min && n.max === i.max;
}
function W1(n, i) {
  return ch(n.x, i.x) && ch(n.y, i.y);
}
function fh(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function rm(n, i) {
  return fh(n.x, i.x) && fh(n.y, i.y);
}
function dh(n) {
  return tt(n.x) / tt(n.y);
}
function hh(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
function Ft(n) {
  return [n("x"), n("y")];
}
function H1(n, i, s) {
  let l = "";
  const c = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((c || d || f) && (l = `translate3d(${c}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const {
      transformPerspective: y,
      rotate: g,
      pathRotation: w,
      rotateX: S,
      rotateY: C,
      skewX: R,
      skewY: D,
    } = s;
    (y && (l = `perspective(${y}px) ${l}`),
      g && (l += `rotate(${g}deg) `),
      w && (l += `rotate(${w}deg) `),
      S && (l += `rotateX(${S}deg) `),
      C && (l += `rotateY(${C}deg) `),
      R && (l += `skewX(${R}deg) `),
      D && (l += `skewY(${D}deg) `));
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return ((p !== 1 || m !== 1) && (l += `scale(${p}, ${m})`), l || "none");
}
const im = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  $1 = im.length,
  ph = (n) => (typeof n == "string" ? parseFloat(n) : n),
  mh = (n) => typeof n == "number" || G.test(n);
function K1(n, i, s, l, c, d) {
  c
    ? ((n.opacity = me(0, s.opacity ?? 1, G1(l))), (n.opacityExit = me(i.opacity ?? 1, 0, Y1(l))))
    : d && (n.opacity = me(i.opacity ?? 1, s.opacity ?? 1, l));
  for (let f = 0; f < $1; f++) {
    const p = im[f];
    let m = gh(i, p),
      y = gh(s, p);
    if (m === void 0 && y === void 0) continue;
    (m || (m = 0),
      y || (y = 0),
      m === 0 || y === 0 || mh(m) === mh(y)
        ? ((n[p] = Math.max(me(ph(m), ph(y), l), 0)), (zt.test(y) || zt.test(m)) && (n[p] += "%"))
        : (n[p] = y));
  }
  (i.rotate || s.rotate) && (n.rotate = me(i.rotate || 0, s.rotate || 0, l));
}
function gh(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const G1 = sm(0, 0.5, Zh),
  Y1 = sm(0.5, 0.95, St);
function sm(n, i, s) {
  return (l) => (l < n ? 0 : l > i ? 1 : s(hi(n, i, l)));
}
function Q1(n, i, s) {
  const l = Ye(n) ? n : yr(n);
  return (l.start(ou("", l, i, s)), l.animation);
}
function gi(n, i, s, l = { passive: !0 }) {
  return (n.addEventListener(i, s, l), () => n.removeEventListener(i, s));
}
const X1 = (n, i) => n.depth - i.depth;
class Z1 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (Ya(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (Ks(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(X1), (this.isDirty = !1), this.children.forEach(i));
  }
}
function q1(n, i) {
  const s = et.now(),
    l = ({ timestamp: c }) => {
      const d = c - s;
      d >= i && (wn(l), n(d - i));
    };
  return (ge.setup(l, !0), () => wn(l));
}
function Hs(n) {
  return Ye(n) ? n.get() : n;
}
class J1 {
  constructor() {
    this.members = [];
  }
  add(i) {
    Ya(this.members, i);
    for (let s = this.members.length - 1; s >= 0; s--) {
      const l = this.members[s];
      if (l === i || l === this.lead || l === this.prevLead) continue;
      const c = l.instance;
      (!c || c.isConnected === !1) && !l.snapshot && (Ks(this.members, l), l.unmount());
    }
    i.scheduleRender();
  }
  remove(i) {
    if ((Ks(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead)) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(i) {
    var s;
    for (let l = this.members.indexOf(i) - 1; l >= 0; l--) {
      const c = this.members[l];
      if (c.isPresent !== !1 && ((s = c.instance) == null ? void 0 : s.isConnected) !== !1)
        return (this.promote(c), !0);
    }
    return !1;
  }
  promote(i, s) {
    var c;
    const l = this.lead;
    if (i !== l && ((this.prevLead = l), (this.lead = i), i.show(), l)) {
      (l.updateSnapshot(), i.scheduleRender());
      const { layoutDependency: d } = l.options,
        { layoutDependency: f } = i.options;
      ((d === void 0 || d !== f) &&
        ((i.resumeFrom = l),
        s && (l.preserveOpacity = !0),
        l.snapshot &&
          ((i.snapshot = l.snapshot),
          (i.snapshot.latestValues = l.animationValues || l.latestValues)),
        (c = i.root) != null && c.isUpdating && (i.isLayoutDirty = !0)),
        i.options.crossfade === !1 && l.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      var s, l, c, d, f;
      ((l = (s = i.options).onExitComplete) == null || l.call(s),
        (f = (c = i.resumingFrom) == null ? void 0 : (d = c.options).onExitComplete) == null ||
          f.call(d));
    });
  }
  scheduleRender() {
    this.members.forEach((i) => i.instance && i.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var i;
    (i = this.lead) != null && i.snapshot && (this.lead.snapshot = void 0);
  }
}
const $s = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  da = ["", "X", "Y", "Z"],
  b1 = 1e3;
let ew = 0;
function ha(n, i, s, l) {
  const { latestValues: c } = i;
  c[n] && ((s[n] = c[n]), i.setStaticValue(n, 0), l && (l[n] = 0));
}
function om(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const s = Mp(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", ge, !(c || d));
  }
  const { parent: l } = n;
  l && !l.hasCheckedOptimisedAppear && om(l);
}
function lm({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: l,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, p = i == null ? void 0 : i()) {
      ((this.id = ew++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(rw),
            this.nodes.forEach(uw),
            this.nodes.forEach(cw),
            this.nodes.forEach(iw));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = p ? p.root || p : this),
        (this.path = p ? [...p.path, p] : []),
        (this.parent = p),
        (this.depth = p ? p.depth + 1 : 0));
      for (let m = 0; m < this.path.length; m++) this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Z1());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Xa()),
        this.eventHandlers.get(f).add(p)
      );
    }
    notifyListeners(f, ...p) {
      const m = this.eventHandlers.get(f);
      m && m.notify(...p);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = fu(f) && !n1(f)), (this.instance = f));
      const { layoutId: p, layout: m, visualElement: y } = this.options;
      if (
        (y && !y.current && y.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (m || p) && (this.isLayoutDirty = !0),
        n)
      ) {
        let g,
          w = 0;
        const S = () => (this.root.updateBlockedByResize = !1);
        (ge.read(() => {
          w = window.innerWidth;
        }),
          n(f, () => {
            const C = window.innerWidth;
            C !== w &&
              ((w = C),
              (this.root.updateBlockedByResize = !0),
              g && g(),
              (g = q1(S, 250)),
              $s.hasAnimatedSinceResize &&
                (($s.hasAnimatedSinceResize = !1), this.nodes.forEach(wh)));
          }));
      }
      (p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          y &&
          (p || m) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: g, hasLayoutChanged: w, hasRelativeLayoutChanged: S, layout: C }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const R = this.options.transition || y.getDefaultTransition() || mw,
                { onLayoutAnimationStart: D, onLayoutAnimationComplete: A } = y.getProps(),
                j = !this.targetLayout || !rm(this.targetLayout, C),
                z = !w && S;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                z ||
                (w && (j || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const O = { ...su(R, "layout"), onPlay: D, onComplete: A };
                ((y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((O.delay = 0), (O.type = !1)),
                  this.startAnimation(O),
                  this.setAnimationOrigin(g, z, O.path));
              } else
                (w || wh(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = C;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        wn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(fw), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && om(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const w = this.path[g];
        ((w.shouldResetTransform = !0),
          (typeof w.latestValues.x == "string" || typeof w.latestValues.y == "string") &&
            (w.isLayoutDirty = !0),
          w.updateScroll("snapshot"),
          w.options.layoutRoot && w.willUpdate(!1));
      }
      const { layoutId: p, layout: m } = this.options;
      if (p === void 0 && !m) return;
      const y = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const m = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          m && this.nodes.forEach(ow),
          this.nodes.forEach(yh));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(vh);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(lw),
            this.nodes.forEach(aw),
            this.nodes.forEach(tw),
            this.nodes.forEach(nw))
          : this.nodes.forEach(vh),
        this.clearAllSnapshots());
      const p = et.now();
      ((Ge.delta = Bt(0, 1e3 / 60, p - Ge.timestamp)),
        (Ge.timestamp = p),
        (Ge.isProcessing = !0),
        ia.update.process(Ge),
        ia.preRender.process(Ge),
        ia.render.process(Ge),
        (Ge.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), uu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(sw), this.sharedNodes.forEach(dw));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), ge.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ge.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !tt(this.snapshot.measuredBox.x) &&
          !tt(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
      const f = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = Be()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: p } = this.options;
      p && p.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (p = !1),
        p && this.instance)
      ) {
        const m = l(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: m,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !nm(this.projectionDelta),
        m = this.getTransformTemplate(),
        y = m ? m(this.latestValues, "") : void 0,
        g = y !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (p || jn(this.latestValues) || g) &&
        (c(this.instance, y), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        f && (m = this.removeTransform(m)),
        gw(m),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var y;
      const { visualElement: f } = this.options;
      if (!f) return Be();
      const p = f.measureViewportBox();
      if (!(((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(yw))) {
        const { scroll: g } = this.root;
        g && (Ot(p.x, g.offset.x), Ot(p.y, g.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      var m;
      const p = Be();
      if ((At(p, f), (m = this.scroll) != null && m.wasRoot)) return p;
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y],
          { scroll: w, options: S } = g;
        g !== this.root &&
          w &&
          S.layoutScroll &&
          (w.wasRoot && At(p, f), Ot(p.x, w.offset.x), Ot(p.y, w.offset.y));
      }
      return p;
    }
    applyTransform(f, p = !1, m) {
      var g, w;
      const y = m || Be();
      At(y, f);
      for (let S = 0; S < this.path.length; S++) {
        const C = this.path[S];
        (!p &&
          C.options.layoutScroll &&
          C.scroll &&
          C !== C.root &&
          (Ot(y.x, -C.scroll.offset.x), Ot(y.y, -C.scroll.offset.y)),
          jn(C.latestValues) &&
            Ws(y, C.latestValues, (g = C.layout) == null ? void 0 : g.layoutBox));
      }
      return (
        jn(this.latestValues) &&
          Ws(y, this.latestValues, (w = this.layout) == null ? void 0 : w.layoutBox),
        y
      );
    }
    removeTransform(f) {
      var m;
      const p = Be();
      At(p, f);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        if (!jn(g.latestValues)) continue;
        let w;
        (g.instance &&
          (za(g.latestValues) && g.updateSnapshot(), (w = Be()), At(w, g.measurePageBox())),
          ah(p, g.latestValues, (m = g.snapshot) == null ? void 0 : m.layoutBox, w));
      }
      return (jn(this.latestValues) && ah(p, this.latestValues), p);
    }
    setTargetDelta(f) {
      ((this.targetDelta = f), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ge.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var C;
      const p = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty));
      const m = !!this.resumingFrom || this !== p;
      if (!(
        f ||
        (m && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        ((C = this.parent) != null && C.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: g, layoutId: w } = this.options;
      if (!this.layout || !(g || w)) return;
      this.resolvedRelativeTargetAt = Ge.timestamp;
      const S = this.getClosestProjectingParent();
      (S &&
        this.linkedParentVersion !== S.layoutVersion &&
        !S.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && S && S.layout
            ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = Be()), (this.targetWithTransforms = Be())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              O1(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : At(this.target, this.layout.layoutBox),
                $p(this.target, this.targetDelta))
              : At(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            S &&
            !!S.resumingFrom == !!this.resumingFrom &&
            !S.options.layoutScroll &&
            S.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(S, this.target, S.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || za(this.parent.latestValues) || Hp(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, p, m) {
      ((this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Be()),
        (this.relativeTargetOrigin = Be()),
        bs(this.relativeTargetOrigin, p, m, this.options.layoutAnchor || void 0),
        At(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var R;
      const f = this.getLead(),
        p = !!this.resumingFrom || this !== f;
      let m = !0;
      if (
        ((this.isProjectionDirty || ((R = this.parent) != null && R.isProjectionDirty)) && (m = !1),
        p && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
        this.resolvedRelativeTargetAt === Ge.timestamp && (m = !1),
        m)
      )
        return;
      const { layout: y, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(y || g))
      )
        return;
      At(this.layoutCorrected, this.layout.layoutBox);
      const w = this.treeScale.x,
        S = this.treeScale.y;
      (h1(this.layoutCorrected, this.treeScale, this.path, p),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Be())));
      const { target: C } = f;
      if (!C) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (nh(this.prevProjectionDelta.x, this.projectionDelta.x),
          nh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        fi(this.projectionDelta, this.layoutCorrected, C, this.latestValues),
        (this.treeScale.x !== w ||
          this.treeScale.y !== S ||
          !hh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !hh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", C)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var p;
      if (((p = this.options.visualElement) == null || p.scheduleRender(), f)) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = mr()),
        (this.projectionDelta = mr()),
        (this.projectionDeltaWithTransform = mr()));
    }
    setAnimationOrigin(f, p = !1, m) {
      const y = this.snapshot,
        g = y ? y.latestValues : {},
        w = { ...this.latestValues },
        S = mr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const C = Be(),
        R = y ? y.source : void 0,
        D = this.layout ? this.layout.source : void 0,
        A = R !== D,
        j = this.getStack(),
        z = !j || j.members.length <= 1,
        O = !!(A && !z && this.options.crossfade === !0 && !this.path.some(pw));
      this.animationProgress = 0;
      let B;
      const q = m == null ? void 0 : m.interpolateProjection(f);
      ((this.mixTargetDelta = (ie) => {
        const re = ie / 1e3,
          Z = q == null ? void 0 : q(re);
        (Z
          ? ((S.x.translate = Z.x),
            (S.x.scale = me(f.x.scale, 1, re)),
            (S.x.origin = f.x.origin),
            (S.x.originPoint = f.x.originPoint),
            (S.y.translate = Z.y),
            (S.y.scale = me(f.y.scale, 1, re)),
            (S.y.origin = f.y.origin),
            (S.y.originPoint = f.y.originPoint))
          : (xh(S.x, f.x, re), xh(S.y, f.y, re)),
          this.setTargetDelta(S),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (bs(
              C,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            hw(this.relativeTarget, this.relativeTargetOrigin, C, re),
            B && W1(this.relativeTarget, B) && (this.isProjectionDirty = !1),
            B || (B = Be()),
            At(B, this.relativeTarget)),
          A && ((this.animationValues = w), K1(w, g, this.latestValues, re, O, z)),
          Z &&
            Z.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = w),
            (this.animationValues.pathRotation = Z.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = re));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      var p, m, y;
      (this.notifyListeners("animationStart"),
        (p = this.currentAnimation) == null || p.stop(),
        (y = (m = this.resumingFrom) == null ? void 0 : m.currentAnimation) == null || y.stop(),
        this.pendingAnimation && (wn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ge.update(() => {
          (($s.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = yr(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = Q1(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (g) => {
                (this.mixTargetDelta(g), f.onUpdate && f.onUpdate(g));
              },
              onStop: () => {},
              onComplete: () => {
                (f.onComplete && f.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      (f && f.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(b1), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: p, target: m, layout: y, latestValues: g } = f;
      if (!(!p || !m || !y)) {
        if (
          this !== f &&
          this.layout &&
          y &&
          am(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          m = this.target || Be();
          const w = tt(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + w));
          const S = tt(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + S));
        }
        (At(p, m), Ws(p, g), fi(this.projectionDeltaWithTransform, this.layoutCorrected, p, g));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new J1()),
        this.sharedNodes.get(f).add(p));
      const y = p.options.initialPromotionConfig;
      p.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity:
          y && y.shouldPreserveFollowOpacity ? y.shouldPreserveFollowOpacity(p) : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var p;
      const { layoutId: f } = this.options;
      return f ? ((p = this.getStack()) == null ? void 0 : p.lead) || this : this;
    }
    getPrevLead() {
      var p;
      const { layoutId: f } = this.options;
      return f ? ((p = this.getStack()) == null ? void 0 : p.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: p, preserveFollowOpacity: m } = {}) {
      const y = this.getStack();
      (y && y.promote(this, m),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        p && this.setOptions({ transition: p }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let p = !1;
      const { latestValues: m } = f;
      if (
        ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (p = !0),
        !p)
      )
        return;
      const y = {};
      m.z && ha("z", f, y, this.animationValues);
      for (let g = 0; g < da.length; g++)
        (ha(`rotate${da[g]}`, f, y, this.animationValues),
          ha(`skew${da[g]}`, f, y, this.animationValues));
      f.render();
      for (const g in y)
        (f.setStaticValue(g, y[g]), this.animationValues && (this.animationValues[g] = y[g]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, p) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const m = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = Hs(p == null ? void 0 : p.pointerEvents) || ""),
          (f.transform = m ? m(this.latestValues, "") : "none"));
        return;
      }
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        (this.options.layoutId &&
          ((f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (f.pointerEvents = Hs(p == null ? void 0 : p.pointerEvents) || "")),
          this.hasProjected &&
            !jn(this.latestValues) &&
            ((f.transform = m ? m({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const g = y.animationValues || y.latestValues;
      this.applyTransformsToTarget();
      let w = H1(this.projectionDeltaWithTransform, this.treeScale, g);
      (m && (w = m(g, w)), (f.transform = w));
      const { x: S, y: C } = this.projectionDelta;
      ((f.transformOrigin = `${S.origin * 100}% ${C.origin * 100}% 0`),
        y.animationValues
          ? (f.opacity =
              y === this
                ? (g.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : g.opacityExit)
          : (f.opacity =
              y === this
                ? g.opacity !== void 0
                  ? g.opacity
                  : ""
                : g.opacityExit !== void 0
                  ? g.opacityExit
                  : 0));
      for (const R in Ua) {
        if (g[R] === void 0) continue;
        const { correct: D, applyTo: A, isCSSVariable: j } = Ua[R],
          z = w === "none" ? g[R] : D(g[R], y);
        if (A) {
          const O = A.length;
          for (let B = 0; B < O; B++) f[A[B]] = z;
        } else j ? (this.options.visualElement.renderState.vars[R] = z) : (f[R] = z);
      }
      this.options.layoutId &&
        (f.pointerEvents = y === this ? Hs(p == null ? void 0 : p.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => {
        var p;
        return (p = f.currentAnimation) == null ? void 0 : p.stop();
      }),
        this.root.nodes.forEach(yh),
        this.root.sharedNodes.clear());
    }
  };
}
function tw(n) {
  n.updateLayout();
}
function nw(n) {
  var s;
  const i = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: c } = n.layout,
      { animationType: d } = n.options,
      f = i.source !== n.layout.source;
    if (d === "size")
      Ft((w) => {
        const S = f ? i.measuredBox[w] : i.layoutBox[w],
          C = tt(S);
        ((S.min = l[w].min), (S.max = S.min + C));
      });
    else if (d === "x" || d === "y") {
      const w = d === "x" ? "y" : "x";
      Wa(f ? i.measuredBox[w] : i.layoutBox[w], l[w]);
    } else
      am(d, i.layoutBox, l) &&
        Ft((w) => {
          const S = f ? i.measuredBox[w] : i.layoutBox[w],
            C = tt(l[w]);
          ((S.max = S.min + C),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[w].max = n.relativeTarget[w].min + C)));
        });
    const p = mr();
    fi(p, l, i.layoutBox);
    const m = mr();
    f ? fi(m, n.applyTransform(c, !0), i.measuredBox) : fi(m, l, i.layoutBox);
    const y = !nm(p);
    let g = !1;
    if (!n.resumeFrom) {
      const w = n.getClosestProjectingParent();
      if (w && !w.resumeFrom) {
        const { snapshot: S, layout: C } = w;
        if (S && C) {
          const R = n.options.layoutAnchor || void 0,
            D = Be();
          bs(D, i.layoutBox, S.layoutBox, R);
          const A = Be();
          (bs(A, l, C.layoutBox, R),
            rm(D, A) || (g = !0),
            w.options.layoutRoot &&
              ((n.relativeTarget = A), (n.relativeTargetOrigin = D), (n.relativeParent = w)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: l,
      snapshot: i,
      delta: m,
      layoutDelta: p,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: g,
    });
  } else if (n.isLead()) {
    const { onExitComplete: l } = n.options;
    l && l();
  }
  n.options.transition = void 0;
}
function rw(n) {
  n.parent &&
    (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty ||
      (n.isSharedProjectionDirty = !!(
        n.isProjectionDirty ||
        n.parent.isProjectionDirty ||
        n.parent.isSharedProjectionDirty
      )),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function iw(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function sw(n) {
  n.clearSnapshot();
}
function yh(n) {
  n.clearMeasurements();
}
function ow(n) {
  ((n.isLayoutDirty = !0), n.updateLayout());
}
function vh(n) {
  n.isLayoutDirty = !1;
}
function lw(n) {
  n.isAnimationBlocked &&
    n.layout &&
    !n.isLayoutDirty &&
    ((n.snapshot = n.layout), (n.isLayoutDirty = !0));
}
function aw(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function wh(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function uw(n) {
  n.resolveTargetDelta();
}
function cw(n) {
  n.calcProjection();
}
function fw(n) {
  n.resetSkewAndRotation();
}
function dw(n) {
  n.removeLeadSnapshot();
}
function xh(n, i, s) {
  ((n.translate = me(i.translate, 0, s)),
    (n.scale = me(i.scale, 1, s)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint));
}
function Sh(n, i, s, l) {
  ((n.min = me(i.min, s.min, l)), (n.max = me(i.max, s.max, l)));
}
function hw(n, i, s, l) {
  (Sh(n.x, i.x, s.x, l), Sh(n.y, i.y, s.y, l));
}
function pw(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const mw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  kh = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  Th = kh("applewebkit/") && !kh("chrome/") ? Math.round : St;
function Ph(n) {
  ((n.min = Th(n.min)), (n.max = Th(n.max)));
}
function gw(n) {
  (Ph(n.x), Ph(n.y));
}
function am(n, i, s) {
  return n === "position" || (n === "preserve-aspect" && !F1(dh(i), dh(s), 0.2));
}
function yw(n) {
  var i;
  return n !== n.root && ((i = n.scroll) == null ? void 0 : i.wasRoot);
}
const vw = lm({
    attachResizeListener: (n, i) => gi(n, "resize", i),
    measureScroll: () => {
      var n, i;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((n = document.body) == null ? void 0 : n.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((i = document.body) == null ? void 0 : i.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  pa = { current: void 0 },
  um = lm({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!pa.current) {
        const n = new vw({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (pa.current = n));
      }
      return pa.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  cm = te.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
function ww(n = !0) {
  const i = te.useContext(Ga);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: l, register: c } = i,
    d = te.useId();
  te.useEffect(() => {
    if (n) return c(d);
  }, [n]);
  const f = te.useCallback(() => n && l && l(d), [d, l, n]);
  return !s && l ? [!1, f] : [!0];
}
const fm = te.createContext({ strict: !1 }),
  Eh = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let Ch = !1;
function xw() {
  if (Ch) return;
  const n = {};
  for (const i in Eh) n[i] = { isEnabled: (s) => Eh[i].some((l) => !!s[l]) };
  (Bp(n), (Ch = !0));
}
function dm() {
  return (xw(), u1());
}
function Sw(n) {
  const i = dm();
  for (const s in n) i[s] = { ...i[s], ...n[s] };
  Bp(i);
}
const kw = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function eo(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    kw.has(n)
  );
}
let hm = (n) => !eo(n);
function Tw(n) {
  typeof n == "function" && (hm = (i) => (i.startsWith("on") ? !eo(i) : n(i)));
}
try {
  Tw(require("@emotion/is-prop-valid").default);
} catch {}
function Pw(n, i, s) {
  const l = {};
  for (const c in n)
    (c === "values" && typeof n.values == "object") ||
      Ye(n[c]) ||
      ((hm(c) ||
        (s === !0 && eo(c)) ||
        (!i && !eo(c)) ||
        (n.draggable && c.startsWith("onDrag"))) &&
        (l[c] = n[c]));
  return l;
}
const io = te.createContext({});
function Ew(n, i) {
  if (ro(n)) {
    const { initial: s, animate: l } = n;
    return { initial: s === !1 || mi(s) ? s : void 0, animate: mi(l) ? l : void 0 };
  }
  return n.inherit !== !1 ? i : {};
}
function Cw(n) {
  const { initial: i, animate: s } = Ew(n, te.useContext(io));
  return te.useMemo(() => ({ initial: i, animate: s }), [Mh(i), Mh(s)]);
}
function Mh(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const gu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function pm(n, i, s) {
  for (const l in i) !Ye(i[l]) && !Yp(l, s) && (n[l] = i[l]);
}
function Mw({ transformTemplate: n }, i) {
  return te.useMemo(() => {
    const s = gu();
    return (pu(s, i, n), Object.assign({}, s.vars, s.style));
  }, [i]);
}
function Rw(n, i) {
  const s = n.style || {},
    l = {};
  return (pm(l, s, n), Object.assign(l, Mw(n, i)), l);
}
function Aw(n, i) {
  const s = {},
    l = Rw(n, i);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((s.draggable = !1),
      (l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none"),
      (l.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0),
    (s.style = l),
    s
  );
}
const mm = () => ({ ...gu(), attrs: {} });
function Dw(n, i, s, l) {
  const c = te.useMemo(() => {
    const d = mm();
    return (Qp(d, i, Zp(l), n.transformTemplate, n.style), { ...d.attrs, style: { ...d.style } });
  }, [i]);
  if (n.style) {
    const d = {};
    (pm(d, n.style, n), (c.style = { ...d, ...c.style }));
  }
  return c;
}
const Vw = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function yu(n) {
  return typeof n != "string" || n.includes("-") ? !1 : !!(Vw.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function Lw(n, i, s, { latestValues: l }, c, d = !1, f) {
  const m = ((f ?? yu(n)) ? Dw : Aw)(i, l, c, n),
    y = Pw(i, typeof n == "string", d),
    g = n !== te.Fragment ? { ...y, ...m, ref: s } : {},
    { children: w } = i,
    S = te.useMemo(() => (Ye(w) ? w.get() : w), [w]);
  return te.createElement(n, { ...g, children: S });
}
function Nw({ scrapeMotionValuesFromProps: n, createRenderState: i }, s, l, c) {
  return { latestValues: _w(s, l, c, n), renderState: i() };
}
function _w(n, i, s, l) {
  const c = {},
    d = l(n, {});
  for (const S in d) c[S] = Hs(d[S]);
  let { initial: f, animate: p } = n;
  const m = ro(n),
    y = Op(n);
  i &&
    y &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || f === !1;
  const w = g ? p : f;
  if (w && typeof w != "boolean" && !no(w)) {
    const S = Array.isArray(w) ? w : [w];
    for (let C = 0; C < S.length; C++) {
      const R = lu(n, S[C]);
      if (R) {
        const { transitionEnd: D, transition: A, ...j } = R;
        for (const z in j) {
          let O = j[z];
          if (Array.isArray(O)) {
            const B = g ? O.length - 1 : 0;
            O = O[B];
          }
          O !== null && (c[z] = O);
        }
        for (const z in D) c[z] = D[z];
      }
    }
  }
  return c;
}
const gm = (n) => (i, s) => {
    const l = te.useContext(io),
      c = te.useContext(Ga),
      d = () => Nw(n, i, l, c);
    return s ? d() : Ly(d);
  },
  jw = gm({ scrapeMotionValuesFromProps: mu, createRenderState: gu }),
  Iw = gm({ scrapeMotionValuesFromProps: qp, createRenderState: mm }),
  Fw = Symbol.for("motionComponentSymbol");
function Ow(n, i, s) {
  const l = te.useRef(s);
  te.useInsertionEffect(() => {
    l.current = s;
  });
  const c = te.useRef(null);
  return te.useCallback(
    (d) => {
      var p;
      (d && ((p = n.onMount) == null || p.call(n, d)), i && (d ? i.mount(d) : i.unmount()));
      const f = l.current;
      if (typeof f == "function")
        if (d) {
          const m = f(d);
          typeof m == "function" && (c.current = m);
        } else c.current ? (c.current(), (c.current = null)) : f(d);
      else f && (f.current = d);
    },
    [i],
  );
}
const ym = te.createContext({});
function dr(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function zw(n, i, s, l, c, d) {
  var O, B;
  const { visualElement: f } = te.useContext(io),
    p = te.useContext(fm),
    m = te.useContext(Ga),
    y = te.useContext(cm),
    g = y.reducedMotion,
    w = y.skipAnimations,
    S = te.useRef(null),
    C = te.useRef(!1);
  ((l = l || p.renderer),
    !S.current &&
      l &&
      ((S.current = l(n, {
        visualState: i,
        parent: f,
        props: s,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g,
        skipAnimations: w,
        isSVG: d,
      })),
      C.current && S.current && (S.current.manuallyAnimateOnMount = !0)));
  const R = S.current,
    D = te.useContext(ym);
  R && !R.projection && c && (R.type === "html" || R.type === "svg") && Bw(S.current, s, c, D);
  const A = te.useRef(!1);
  te.useInsertionEffect(() => {
    R && A.current && R.update(s, m);
  });
  const j = s[Cp],
    z = te.useRef(
      !!j &&
        typeof window < "u" &&
        !((O = window.MotionHandoffIsComplete) != null && O.call(window, j)) &&
        ((B = window.MotionHasOptimisedAnimation) == null ? void 0 : B.call(window, j)),
    );
  return (
    _y(() => {
      ((C.current = !0),
        R &&
          ((A.current = !0),
          (window.MotionIsMounted = !0),
          R.updateFeatures(),
          R.scheduleRenderMicrotask(),
          z.current && R.animationState && R.animationState.animateChanges()));
    }),
    te.useEffect(() => {
      R &&
        (!z.current && R.animationState && R.animationState.animateChanges(),
        z.current &&
          (queueMicrotask(() => {
            var q;
            (q = window.MotionHandoffMarkAsComplete) == null || q.call(window, j);
          }),
          (z.current = !1)),
        (R.enteringChildren = void 0));
    }),
    R
  );
}
function Bw(n, i, s, l) {
  const {
    layoutId: c,
    layout: d,
    drag: f,
    dragConstraints: p,
    layoutScroll: m,
    layoutRoot: y,
    layoutAnchor: g,
    layoutCrossfade: w,
  } = i;
  ((n.projection = new s(n.latestValues, i["data-framer-portal-id"] ? void 0 : vm(n.parent))),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (p && dr(p)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: l,
      crossfade: w,
      layoutScroll: m,
      layoutRoot: y,
      layoutAnchor: g,
    }));
}
function vm(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : vm(n.parent);
}
function ma(n, { forwardMotionProps: i = !1, type: s } = {}, l, c) {
  l && Sw(l);
  const d = s ? s === "svg" : yu(n),
    f = d ? Iw : jw;
  function p(y, g) {
    let w;
    const S = { ...te.useContext(cm), ...y, layoutId: Uw(y) },
      { isStatic: C } = S,
      R = Cw(y),
      D = f(y, C);
    if (!C && typeof window < "u") {
      Ww();
      const A = Hw(S);
      ((w = A.MeasureLayout), (R.visualElement = zw(n, D, S, c, A.ProjectionNode, d)));
    }
    return W.jsxs(io.Provider, {
      value: R,
      children: [
        w && R.visualElement ? W.jsx(w, { visualElement: R.visualElement, ...S }) : null,
        Lw(n, y, Ow(D, R.visualElement, g), D, C, i, d),
      ],
    });
  }
  p.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const m = te.forwardRef(p);
  return ((m[Fw] = n), m);
}
function Uw({ layoutId: n }) {
  const i = te.useContext(Oh).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function Ww(n, i) {
  te.useContext(fm).strict;
}
function Hw(n) {
  const i = dm(),
    { drag: s, layout: l } = i;
  if (!s && !l) return {};
  const c = { ...s, ...l };
  return {
    MeasureLayout:
      (s != null && s.isEnabled(n)) || (l != null && l.isEnabled(n)) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function $w(n, i) {
  if (typeof Proxy > "u") return ma;
  const s = new Map(),
    l = (d, f) => ma(d, f, n, i),
    c = (d, f) => l(d, f);
  return new Proxy(c, {
    get: (d, f) => (f === "create" ? l : (s.has(f) || s.set(f, ma(f, void 0, n, i)), s.get(f))),
  });
}
const Kw = (n, i) =>
  (i.isSVG ?? yu(n)) ? new C1(i) : new x1(i, { allowProjection: n !== te.Fragment });
class Gw extends xn {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = V1(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    no(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    i !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var i;
    (this.node.animationState.reset(), (i = this.unmountControls) == null || i.call(this));
  }
}
let Yw = 0;
class Qw extends xn {
  constructor() {
    (super(...arguments), (this.id = Yw++), (this.isExitComplete = !1));
  }
  update() {
    var d;
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: s } = this.node.presenceContext,
      { isPresent: l } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === l) return;
    if (i && l === !1) {
      if (this.isExitComplete) {
        const { initial: f, custom: p } = this.node.getProps();
        if (typeof f == "string" || (typeof f == "object" && f !== null && !Array.isArray(f))) {
          const m = zn(this.node, f, p);
          if (m) {
            const { transition: y, transitionEnd: g, ...w } = m;
            for (const S in w) (d = this.node.getValue(S)) == null || d.jump(w[S]);
          }
        }
        (this.node.animationState.reset(), this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !i);
    s &&
      !i &&
      c.then(() => {
        ((this.isExitComplete = !0), s(this.id));
      });
  }
  mount() {
    const { register: i, onExitComplete: s } = this.node.presenceContext || {};
    (s && s(this.id), i && (this.unmount = i(this.id)));
  }
  unmount() {}
}
const Xw = { animation: { Feature: Gw }, exit: { Feature: Qw } };
function xi(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const Zw = (n) => (i) => cu(i) && n(i, xi(i));
function di(n, i, s, l) {
  return gi(n, i, Zw(s), l);
}
const wm = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Rh = (n, i) => Math.abs(n - i);
function qw(n, i) {
  const s = Rh(n.x, i.x),
    l = Rh(n.y, i.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
const Ah = new Set(["auto", "scroll"]);
class xm {
  constructor(
    i,
    s,
    {
      transformPagePoint: l,
      contextWindow: c = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: f = 3,
      element: p,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (C) => {
        this.handleScroll(C.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = _s(this.lastRawMoveEventInfo, this.transformPagePoint));
        const C = ga(this.lastMoveEventInfo, this.history),
          R = this.startEvent !== null,
          D = qw(C.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!R && !D) return;
        const { point: A } = C,
          { timestamp: j } = Ge;
        this.history.push({ ...A, timestamp: j });
        const { onStart: z, onMove: O } = this.handlers;
        (R || (z && z(this.lastMoveEvent, C), (this.startEvent = this.lastMoveEvent)),
          O && O(this.lastMoveEvent, C));
      }),
      (this.handlePointerMove = (C, R) => {
        ((this.lastMoveEvent = C),
          (this.lastRawMoveEventInfo = R),
          (this.lastMoveEventInfo = _s(R, this.transformPagePoint)),
          ge.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (C, R) => {
        this.end();
        const { onEnd: D, onSessionEnd: A, resumeAnimation: j } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && j && j(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const z = ga(
          C.type === "pointercancel" ? this.lastMoveEventInfo : _s(R, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && D && D(C, z), A && A(C, z));
      }),
      !cu(i))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = l),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window));
    const m = xi(i),
      y = _s(m, this.transformPagePoint),
      { point: g } = y,
      { timestamp: w } = Ge;
    this.history = [{ ...g, timestamp: w }];
    const { onSessionStart: S } = s;
    (S && S(i, ga(y, this.history)),
      (this.removeListeners = yi(
        di(this.contextWindow, "pointermove", this.handlePointerMove),
        di(this.contextWindow, "pointerup", this.handlePointerUp),
        di(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      p && this.startScrollTracking(p));
  }
  startScrollTracking(i) {
    let s = i.parentElement;
    for (; s;) {
      const l = getComputedStyle(s);
      ((Ah.has(l.overflowX) || Ah.has(l.overflowY)) &&
        this.scrollPositions.set(s, { x: s.scrollLeft, y: s.scrollTop }),
        (s = s.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(i) {
    const s = this.scrollPositions.get(i);
    if (!s) return;
    const l = i === window,
      c = l ? { x: window.scrollX, y: window.scrollY } : { x: i.scrollLeft, y: i.scrollTop },
      d = { x: c.x - s.x, y: c.y - s.y };
    (d.x === 0 && d.y === 0) ||
      (l
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += d.x), (this.lastMoveEventInfo.point.y += d.y))
        : this.history.length > 0 && ((this.history[0].x -= d.x), (this.history[0].y -= d.y)),
      this.scrollPositions.set(i, c),
      ge.update(this.updatePoint, !0));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      wn(this.updatePoint));
  }
}
function _s(n, i) {
  return i ? { point: i(n.point) } : n;
}
function Dh(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function ga({ point: n }, i) {
  return { point: n, delta: Dh(n, Sm(i)), offset: Dh(n, Jw(i)), velocity: bw(i, 0.1) };
}
function Jw(n) {
  return n[0];
}
function Sm(n) {
  return n[n.length - 1];
}
function bw(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    l = null;
  const c = Sm(n);
  for (; s >= 0 && ((l = n[s]), !(c.timestamp - l.timestamp > ht(i)));) s--;
  if (!l) return { x: 0, y: 0 };
  l === n[0] && n.length > 2 && c.timestamp - l.timestamp > ht(i) * 2 && (l = n[1]);
  const d = xt(c.timestamp - l.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - l.x) / d, y: (c.y - l.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function ex(n, { min: i, max: s }, l) {
  return (
    i !== void 0 && n < i
      ? (n = l ? me(i, n, l.min) : Math.max(n, i))
      : s !== void 0 && n > s && (n = l ? me(s, n, l.max) : Math.min(n, s)),
    n
  );
}
function Vh(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  };
}
function tx(n, { top: i, left: s, bottom: l, right: c }) {
  return { x: Vh(n.x, s, c), y: Vh(n.y, i, l) };
}
function Lh(n, i) {
  let s = i.min - n.min,
    l = i.max - n.max;
  return (i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l });
}
function nx(n, i) {
  return { x: Lh(n.x, i.x), y: Lh(n.y, i.y) };
}
function rx(n, i) {
  let s = 0.5;
  const l = tt(n),
    c = tt(i);
  return (
    c > l ? (s = hi(i.min, i.max - l, n.min)) : l > c && (s = hi(n.min, n.max - c, i.min)),
    Bt(0, 1, s)
  );
}
function ix(n, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
  );
}
const Ha = 0.35;
function sx(n = Ha) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Ha),
    { x: Nh(n, "left", "right"), y: Nh(n, "top", "bottom") }
  );
}
function Nh(n, i, s) {
  return { min: _h(n, i), max: _h(n, s) };
}
function _h(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const ox = new WeakMap();
class lx {
  constructor(i) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Be()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i));
  }
  start(i, { snapToCursor: s = !1, distanceThreshold: l } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const d = (w) => {
        (s && this.snapToCursor(xi(w).point), this.stopAnimation());
      },
      f = (w, S) => {
        const { drag: C, dragPropagation: R, onDragStart: D } = this.getProps();
        if (
          C &&
          !R &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = z0(C)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = w),
          (this.latestPanInfo = S),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ft((j) => {
            let z = this.getAxisMotionValue(j).get() || 0;
            if (zt.test(z)) {
              const { projection: O } = this.visualElement;
              if (O && O.layout) {
                const B = O.layout.layoutBox[j];
                B && (z = tt(B) * (parseFloat(z) / 100));
              }
            }
            this.originPoint[j] = z;
          }),
          D && ge.update(() => D(w, S), !1, !0),
          Na(this.visualElement, "transform"));
        const { animationState: A } = this.visualElement;
        A && A.setActive("whileDrag", !0);
      },
      p = (w, S) => {
        ((this.latestPointerEvent = w), (this.latestPanInfo = S));
        const {
          dragPropagation: C,
          dragDirectionLock: R,
          onDirectionLock: D,
          onDrag: A,
        } = this.getProps();
        if (!C && !this.openDragLock) return;
        const { offset: j } = S;
        if (R && this.currentDirection === null) {
          ((this.currentDirection = ux(j)),
            this.currentDirection !== null && D && D(this.currentDirection));
          return;
        }
        (this.updateAxis("x", S.point, j),
          this.updateAxis("y", S.point, j),
          this.visualElement.render(),
          A && ge.update(() => A(w, S), !1, !0));
      },
      m = (w, S) => {
        ((this.latestPointerEvent = w),
          (this.latestPanInfo = S),
          this.stop(w, S),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      y = () => {
        const { dragSnapToOrigin: w } = this.getProps();
        (w || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new xm(
      i,
      { onSessionStart: d, onStart: f, onMove: p, onSessionEnd: m, resumeAnimation: y },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        distanceThreshold: l,
        contextWindow: wm(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(i, s) {
    const l = i || this.latestPointerEvent,
      c = s || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !c || !l)) return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: p } = this.getProps();
    p && ge.postRender(() => p(l, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: s } = this.visualElement;
    (i && (i.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: l } = this.getProps();
    (!l && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(i, s, l) {
    const { drag: c } = this.getProps();
    if (!l || !js(i, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + l[i];
    (this.constraints && this.constraints[i] && (f = ex(f, this.constraints[i], this.elastic[i])),
      d.set(f));
  }
  resolveConstraints() {
    var d;
    const { dragConstraints: i, dragElastic: s } = this.getProps(),
      l =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (d = this.visualElement.projection) == null
            ? void 0
            : d.layout,
      c = this.constraints;
    (i && dr(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && l
        ? (this.constraints = tx(l.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = sx(s)),
      c !== this.constraints &&
        !dr(i) &&
        l &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ft((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = ix(l.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !dr(i)) return !1;
    const l = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    c.root && ((c.root.scroll = void 0), c.root.updateScroll());
    const d = p1(l, c.root, this.visualElement.getTransformPagePoint());
    let f = nx(c.layout.layoutBox, d);
    if (s) {
      const p = s(f1(f));
      ((this.hasMutatedConstraints = !!p), p && (f = Wp(p)));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: s,
        dragMomentum: l,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: p,
      } = this.getProps(),
      m = this.constraints || {},
      y = Ft((g) => {
        if (!js(g, s, this.currentDirection)) return;
        let w = (m && m[g]) || {};
        (f === !0 || f === g) && (w = { min: 0, max: 0 });
        const S = c ? 200 : 1e6,
          C = c ? 40 : 1e7,
          R = {
            type: "inertia",
            velocity: l ? i[g] : 0,
            bounceStiffness: S,
            bounceDamping: C,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...w,
          };
        return this.startAxisValueAnimation(g, R);
      });
    return Promise.all(y).then(p);
  }
  startAxisValueAnimation(i, s) {
    const l = this.getAxisMotionValue(i);
    return (Na(this.visualElement, i), l.start(ou(i, l, 0, s, this.visualElement, !1)));
  }
  stopAnimation() {
    Ft((i) => this.getAxisMotionValue(i).stop());
  }
  getAxisMotionValue(i) {
    const s = `_drag${i.toUpperCase()}`,
      c = this.visualElement.getProps()[s];
    return c || this.visualElement.getValue(i, this.visualElement.latestValues[i] ?? 0);
  }
  snapToCursor(i) {
    Ft((s) => {
      const { drag: l } = this.getProps();
      if (!js(s, l, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(s);
      if (c && c.layout) {
        const { min: f, max: p } = c.layout.layoutBox[s],
          m = d.get() || 0;
        d.set(i[s] - me(f, p, 0.5) + m);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: s } = this.getProps(),
      { projection: l } = this.visualElement;
    if (!dr(s) || !l || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Ft((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = rx({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Ft((f) => {
        if (!js(f, i, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: y } = this.constraints[f];
        p.set(me(m, y, c[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    ox.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = di(i, "pointerdown", (y) => {
        const { drag: g, dragListener: w = !0 } = this.getProps(),
          S = y.target,
          C = S !== i && K0(S);
        g && w && !C && this.start(y);
      });
    let l;
    const c = () => {
        const { dragConstraints: y } = this.getProps();
        dr(y) &&
          y.current &&
          ((this.constraints = this.resolveRefConstraints()),
          l || (l = ax(i, y.current, () => this.scalePositionWithinConstraints())));
      },
      { projection: d } = this.visualElement,
      f = d.addEventListener("measure", c);
    (d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), ge.read(c));
    const p = gi(window, "resize", () => this.scalePositionWithinConstraints()),
      m = d.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: g }) => {
        this.isDragging &&
          g &&
          (Ft((w) => {
            const S = this.getAxisMotionValue(w);
            S && ((this.originPoint[w] += y[w].translate), S.set(S.get() + y[w].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (p(), s(), f(), m && m(), l && l());
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: l = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: f = Ha,
        dragMomentum: p = !0,
      } = i;
    return {
      ...i,
      drag: s,
      dragDirectionLock: l,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: p,
    };
  }
}
function jh(n) {
  let i = !0;
  return () => {
    if (i) {
      i = !1;
      return;
    }
    n();
  };
}
function ax(n, i, s) {
  const l = $d(n, jh(s)),
    c = $d(i, jh(s));
  return () => {
    (l(), c());
  };
}
function js(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n);
}
function ux(n, i = 10) {
  let s = null;
  return (Math.abs(n.y) > i ? (s = "y") : Math.abs(n.x) > i && (s = "x"), s);
}
class cx extends xn {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = St),
      (this.removeListeners = St),
      (this.controls = new lx(i)));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    (i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || St));
  }
  update() {
    const { dragControls: i } = this.node.getProps(),
      { dragControls: s } = this.node.prevProps || {};
    i !== s &&
      (this.removeGroupControls(), i && (this.removeGroupControls = i.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const ya = (n) => (i, s) => {
  n && ge.update(() => n(i, s), !1, !0);
};
class fx extends xn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = St));
  }
  onPointerDown(i) {
    this.session = new xm(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: wm(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: s, onPan: l, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: ya(i),
      onStart: ya(s),
      onMove: ya(l),
      onEnd: (d, f) => {
        (delete this.session, c && ge.postRender(() => c(d, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = di(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let va = !1;
class dx extends te.Component {
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l, layoutId: c } = this.props,
      { projection: d } = i;
    (d &&
      (s.group && s.group.add(d),
      l && l.register && c && l.register(d),
      va && d.root.didUpdate(),
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      d.setOptions({
        ...d.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      ($s.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: s, visualElement: l, drag: c, isPresent: d } = this.props,
      { projection: f } = l;
    return (
      f &&
        ((f.isPresent = d),
        i.layoutDependency !== s && f.setOptions({ ...f.options, layoutDependency: s }),
        (va = !0),
        c || i.layoutDependency !== s || s === void 0 || i.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              ge.postRender(() => {
                const p = f.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: i, layoutAnchor: s } = this.props,
      { projection: l } = i;
    l &&
      ((l.options.layoutAnchor = s),
      l.root.didUpdate(),
      uu.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l } = this.props,
      { projection: c } = i;
    ((va = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(c),
        l && l.deregister && l.deregister(c)));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function km(n) {
  const [i, s] = ww(),
    l = te.useContext(Oh);
  return W.jsx(dx, {
    ...n,
    layoutGroup: l,
    switchLayoutGroup: te.useContext(ym),
    isPresent: i,
    safeToRemove: s,
  });
}
const hx = { pan: { Feature: fx }, drag: { Feature: cx, ProjectionNode: um, MeasureLayout: km } };
function Ih(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s,
    d = l[c];
  d && ge.postRender(() => d(i, xi(i)));
}
class px extends xn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = U0(i, (s, l) => (Ih(this.node, l, "Start"), (c) => Ih(this.node, c, "End"))));
  }
  unmount() {}
}
class mx extends xn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = yi(
      gi(this.node.current, "focus", () => this.onFocus()),
      gi(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Fh(n, i, s) {
  const { props: l } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s),
    d = l[c];
  d && ge.postRender(() => d(i, xi(i)));
}
class gx extends xn {
  mount() {
    const { current: i } = this.node;
    if (!i) return;
    const { globalTapTarget: s, propagate: l } = this.node.props;
    this.unmount = Y0(
      i,
      (c, d) => (
        Fh(this.node, d, "Start"),
        (f, { success: p }) => Fh(this.node, f, p ? "End" : "Cancel")
      ),
      { useGlobalTarget: s, stopPropagation: (l == null ? void 0 : l.tap) === !1 },
    );
  }
  unmount() {}
}
const $a = new WeakMap(),
  wa = new WeakMap(),
  yx = (n) => {
    const i = $a.get(n.target);
    i && i(n);
  },
  vx = (n) => {
    n.forEach(yx);
  };
function wx({ root: n, ...i }) {
  const s = n || document;
  wa.has(s) || wa.set(s, {});
  const l = wa.get(s),
    c = JSON.stringify(i);
  return (l[c] || (l[c] = new IntersectionObserver(vx, { root: n, ...i })), l[c]);
}
function xx(n, i, s) {
  const l = wx(i);
  return (
    $a.set(n, s),
    l.observe(n),
    () => {
      ($a.delete(n), l.unobserve(n));
    }
  );
}
const Sx = { some: 0, all: 1 };
class kx extends xn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var m;
    (m = this.stopObserver) == null || m.call(this);
    const { viewport: i = {} } = this.node.getProps(),
      { root: s, margin: l, amount: c = "some", once: d } = i,
      f = {
        root: s ? s.current : void 0,
        rootMargin: l,
        threshold: typeof c == "number" ? c : Sx[c],
      },
      p = (y) => {
        const { isIntersecting: g } = y;
        if (this.isInView === g || ((this.isInView = g), d && !g && this.hasEnteredView)) return;
        (g && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", g));
        const { onViewportEnter: w, onViewportLeave: S } = this.node.getProps(),
          C = g ? w : S;
        C && C(y);
      };
    this.stopObserver = xx(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(Tx(i, s)) && this.startObserver();
  }
  unmount() {
    var i;
    ((i = this.stopObserver) == null || i.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function Tx({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const Px = {
    inView: { Feature: kx },
    tap: { Feature: gx },
    focus: { Feature: mx },
    hover: { Feature: px },
  },
  Ex = { layout: { ProjectionNode: um, MeasureLayout: km } },
  Cx = { ...Xw, ...Px, ...hx, ...Ex },
  Bn = $w(Cx, Kw);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mx = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Tm = (...n) =>
    n
      .filter((i, s, l) => !!i && i.trim() !== "" && l.indexOf(i) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Rx = {
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
 */ const Ax = te.forwardRef(
  (
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: l,
      className: c = "",
      children: d,
      iconNode: f,
      ...p
    },
    m,
  ) =>
    te.createElement(
      "svg",
      {
        ref: m,
        ...Rx,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: l ? (Number(s) * 24) / Number(i) : s,
        className: Tm("lucide", c),
        ...p,
      },
      [...f.map(([y, g]) => te.createElement(y, g)), ...(Array.isArray(d) ? d : [d])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vu = (n, i) => {
  const s = te.forwardRef(({ className: l, ...c }, d) =>
    te.createElement(Ax, { ref: d, iconNode: i, className: Tm(`lucide-${Mx(n)}`, l), ...c }),
  );
  return ((s.displayName = `${n}`), s);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wu = vu("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pm = vu("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dx = vu("Sparkles", [
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
function Vx() {
  return W.jsxs(Bn.div, {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2 },
    className:
      "absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex flex-col gap-2 lg:gap-3 min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit",
    children: [
      W.jsxs("div", {
        className: "flex flex-col",
        children: [
          W.jsx("span", {
            className: "text-2xl md:text-3xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight",
            children: "5.2K",
          }),
          W.jsx("span", {
            className:
              "text-[10px] md:text-[12px] font-normal text-[rgba(30,50,90,0.6)] uppercase tracking-wider",
            children: "Active Yielders",
          }),
        ],
      }),
      W.jsxs(Bn.button, {
        type: "button",
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        className:
          "flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors self-start group",
        children: [
          W.jsx("div", {
            className: "bg-[rgba(30,50,90,0.1)] p-1 rounded-full flex items-center justify-center",
            children: W.jsx(wu, { className: "w-4 h-4 text-[rgba(30,50,90,0.9)]" }),
          }),
          W.jsx("span", {
            className: "text-[14px] font-normal text-[rgba(30,50,90,0.9)]",
            children: "Join Discord",
          }),
        ],
      }),
    ],
  });
}
function Lx() {
  return W.jsxs(Bn.div, {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.4 },
    className:
      "absolute bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#f0f0f0] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6",
    children: [
      W.jsx("div", {
        className:
          "absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none",
        children: W.jsx("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 56 56",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": !0,
          children: W.jsx("path", {
            d: "M56 56V0C56 30.9279 30.9279 56 0 56H56Z",
            fill: "#f0f0f0",
          }),
        }),
      }),
      W.jsx("div", {
        className:
          "absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none",
        children: W.jsx("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 56 56",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": !0,
          children: W.jsx("path", {
            d: "M56 56H0C30.9279 56 56 30.9279 56 0V56Z",
            fill: "#f0f0f0",
          }),
        }),
      }),
      W.jsx("div", {
        className:
          "bg-[rgba(30,50,90,0.05)] w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-[rgba(30,50,90,0.1)]",
        children: W.jsx(wu, { className: "text-[rgba(30,50,90,0.8)]" }),
      }),
      W.jsxs("div", {
        className: "flex flex-col",
        children: [
          W.jsx("span", {
            className: "text-[16px] md:text-[20px] font-normal text-[rgba(30,50,90,0.95)]",
            children: "Documentation",
          }),
          W.jsxs("div", {
            className:
              "flex items-center gap-1 text-[rgba(30,50,90,0.6)] cursor-pointer hover:text-[rgba(30,50,90,0.8)] transition-colors",
            children: [
              W.jsx("span", {
                className: "text-[12px] md:text-[15px] font-normal",
                children: "Library",
              }),
              W.jsx(Pm, { className: "w-4 h-4" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Nx() {
  return W.jsxs(Bn.div, {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    className:
      "flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mx-auto mb-3 w-fit",
    children: [
      W.jsx(Dx, { className: "w-4 h-4 text-[rgba(30,50,90,0.8)]" }),
      W.jsx("span", {
        className: "text-[14px] font-normal text-[rgba(30,50,90,0.9)]",
        children: "Fluid Staking",
      }),
    ],
  });
}
function Em(n) {
  return n
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
function Is(n) {
  return `#${Em(n)}`;
}
function Fs(n, i, s) {
  n.preventDefault();
  const l = document.getElementById(i);
  l &&
    (l.scrollIntoView({ behavior: "smooth", block: "start" }),
    window.history.replaceState(null, "", `#${i}`));
}
const _x = [
  { label: "Ecosystem", hasDropdown: !1 },
  { label: "Economics", hasDropdown: !0 },
  { label: "Developers", hasDropdown: !1 },
  { label: "Governance", hasDropdown: !0 },
];
function jx() {
  return W.jsxs("nav", {
    className: "flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10",
    children: [
      W.jsx("a", {
        href: Is("home"),
        onClick: (n) => Fs(n, "home"),
        className:
          "hidden font-regular tracking-tighter text-xl text-[rgba(30,50,90,0.9)] md:block",
        children: "RIVR",
      }),
      W.jsx("div", { className: "flex-1 hidden md:block" }),
      W.jsx("ul", {
        className: "hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm",
        children: _x.map(({ label: n, hasDropdown: i }) =>
          W.jsx(
            "li",
            {
              children: W.jsxs("a", {
                href: Is(n),
                onClick: (s) => Fs(s, Em(n)),
                className:
                  "cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group",
                children: [
                  n,
                  i &&
                    W.jsx(Pm, {
                      className: "w-4 h-4 transition-transform group-hover:translate-x-0.5",
                    }),
                ],
              }),
            },
            n,
          ),
        ),
      }),
      W.jsx("a", {
        href: Is("home"),
        onClick: (n) => Fs(n, "home"),
        className: "md:hidden font-regular tracking-tighter text-xl text-[rgba(30,50,90,0.9)]",
        children: "RIVR",
      }),
      W.jsx("div", {
        className: "flex-1 flex justify-end",
        children: W.jsxs(Bn.a, {
          href: Is("contact"),
          onClick: (n) => Fs(n, "contact"),
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          className:
            "flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group",
          children: [
            W.jsx("div", {
              className: "bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center",
              children: W.jsx(wu, { className: "w-4 h-4 md:w-5 md:h-5 text-white" }),
            }),
            W.jsx("span", { className: "text-xs md:text-sm font-normal", children: "Book Demo" }),
          ],
        }),
      }),
    ],
  });
}
const Ix =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4";
function Fx() {
  return W.jsx("div", {
    className: "w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]",
    children: W.jsxs("section", {
      className:
        "relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group",
      children: [
        W.jsx("video", {
          autoPlay: !0,
          muted: !0,
          loop: !0,
          playsInline: !0,
          className:
            "absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0",
          src: Ix,
        }),
        W.jsxs("div", {
          className: "relative z-10 w-full h-full flex flex-col items-center",
          children: [
            W.jsx(jx, {}),
            W.jsxs("div", {
              className: "w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl",
              children: [
                W.jsx(Nx, {}),
                W.jsx(Bn.h1, {
                  initial: { opacity: 0, scale: 0.98 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className:
                    "text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-[#5E6470] mb-2 tracking-tight leading-[1.05]",
                  children: "Fluid Asset Streams",
                }),
                W.jsx(Bn.p, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.8, delay: 0.4 },
                  className:
                    "text-sm sm:text-base md:text-lg text-[#5E6470] opacity-80 leading-relaxed max-w-xl font-normal",
                  children:
                    "Access Smart Vaults, stake RIVR, NFTs, transform rigid holdings into liquid cash instantly.",
                }),
              ],
            }),
            W.jsx(Vx, {}),
            W.jsx(Lx, {}),
          ],
        }),
      ],
    }),
  });
}
const Ox = [
  {
    id: "ecosystem",
    title: "Ecosystem",
    body: "RIVR connects staking, liquidity routing, and governance across chains with transparent on-chain accounting.",
  },
  {
    id: "economics",
    title: "Economics",
    body: "Protocol fees, yield routing, and insurance funds are published in real time for depositors and integrators.",
  },
  {
    id: "developers",
    title: "Developers",
    body: "SDKs, subgraphs, and sandbox keys help teams ship staking experiences without rebuilding core infrastructure.",
  },
  {
    id: "governance",
    title: "Governance",
    body: "Token holders vote on emissions, risk parameters, and treasury allocations through on-chain proposals.",
  },
];
function zx() {
  return W.jsxs("main", {
    className: "min-h-screen bg-[#f0f0f0]",
    children: [
      W.jsx(Fx, {}),
      Ox.map((n) =>
        W.jsxs(
          "section",
          {
            id: n.id,
            className: "mx-auto max-w-3xl px-6 py-20 md:px-10 border-t border-black/5",
            children: [
              W.jsx("h2", {
                className: "text-3xl font-normal text-[rgba(30,50,90,0.95)]",
                children: n.title,
              }),
              W.jsx("p", {
                className: "mt-4 text-base text-[rgba(30,50,90,0.65)]",
                children: n.body,
              }),
            ],
          },
          n.id,
        ),
      ),
      W.jsx(Vy, { variant: "light" }),
      W.jsx("footer", {
        className: "border-t border-black/5 py-8 text-center text-xs text-[rgba(30,50,90,0.5)]",
        children: "© 2026 RIVR Protocol",
      }),
    ],
  });
}
Dy.createRoot(document.getElementById("root")).render(
  W.jsx(te.StrictMode, { children: W.jsx(zx, {}) }),
);
