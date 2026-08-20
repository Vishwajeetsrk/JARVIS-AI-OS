(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) l(u);
  new MutationObserver((u) => {
    for (const d of u)
      if (d.type === "childList")
        for (const f of d.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && l(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(u) {
    const d = {};
    return (
      u.integrity && (d.integrity = u.integrity),
      u.referrerPolicy && (d.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function l(u) {
    if (u.ep) return;
    u.ep = !0;
    const d = s(u);
    fetch(u.href, d);
  }
})();
var oa = { exports: {} },
  fi = {},
  la = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vd;
function ov() {
  if (Vd) return oe;
  Vd = 1;
  var n = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function x(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (v && T[v]) || T["@@iterator"]), typeof T == "function" ? T : null);
  }
  var P = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    M = Object.assign,
    R = {};
  function D(T, V, se) {
    ((this.props = T), (this.context = V), (this.refs = R), (this.updater = se || P));
  }
  ((D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (T, V) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, T, V, "setState");
    }),
    (D.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    }));
  function j() {}
  j.prototype = D.prototype;
  function B(T, V, se) {
    ((this.props = T), (this.context = V), (this.refs = R), (this.updater = se || P));
  }
  var z = (B.prototype = new j());
  ((z.constructor = B), M(z, D.prototype), (z.isPureReactComponent = !0));
  var U = Array.isArray,
    Z = Object.prototype.hasOwnProperty,
    ie = { current: null },
    re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(T, V, se) {
    var le,
      ce = {},
      fe = null,
      ve = null;
    if (V != null)
      for (le in (V.ref !== void 0 && (ve = V.ref), V.key !== void 0 && (fe = "" + V.key), V))
        Z.call(V, le) && !re.hasOwnProperty(le) && (ce[le] = V[le]);
    var he = arguments.length - 2;
    if (he === 1) ce.children = se;
    else if (1 < he) {
      for (var Pe = Array(he), ut = 0; ut < he; ut++) Pe[ut] = arguments[ut + 2];
      ce.children = Pe;
    }
    if (T && T.defaultProps)
      for (le in ((he = T.defaultProps), he)) ce[le] === void 0 && (ce[le] = he[le]);
    return { $$typeof: n, type: T, key: fe, ref: ve, props: ce, _owner: ie.current };
  }
  function ye(T, V) {
    return { $$typeof: n, type: T.type, key: V, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function J(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function me(T) {
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
    return typeof T == "object" && T !== null && T.key != null ? me("" + T.key) : V.toString(36);
  }
  function Re(T, V, se, le, ce) {
    var fe = typeof T;
    (fe === "undefined" || fe === "boolean") && (T = null);
    var ve = !1;
    if (T === null) ve = !0;
    else
      switch (fe) {
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case n:
            case r:
              ve = !0;
          }
      }
    if (ve)
      return (
        (ve = T),
        (ce = ce(ve)),
        (T = le === "" ? "." + Le(ve, 0) : le),
        U(ce)
          ? ((se = ""),
            T != null && (se = T.replace(xe, "$&/") + "/"),
            Re(ce, V, se, "", function (ut) {
              return ut;
            }))
          : ce != null &&
            (J(ce) &&
              (ce = ye(
                ce,
                se +
                  (!ce.key || (ve && ve.key === ce.key)
                    ? ""
                    : ("" + ce.key).replace(xe, "$&/") + "/") +
                  T,
              )),
            V.push(ce)),
        1
      );
    if (((ve = 0), (le = le === "" ? "." : le + ":"), U(T)))
      for (var he = 0; he < T.length; he++) {
        fe = T[he];
        var Pe = le + Le(fe, he);
        ve += Re(fe, V, se, Pe, ce);
      }
    else if (((Pe = x(T)), typeof Pe == "function"))
      for (T = Pe.call(T), he = 0; !(fe = T.next()).done;)
        ((fe = fe.value), (Pe = le + Le(fe, he++)), (ve += Re(fe, V, se, Pe, ce)));
    else if (fe === "object")
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
      ce = 0;
    return (
      Re(T, le, "", "", function (fe) {
        return V.call(se, fe, ce++);
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
    F = { transition: null },
    Y = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: F, ReactCurrentOwner: ie };
  function W() {
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
    (oe.Component = D),
    (oe.Fragment = s),
    (oe.Profiler = u),
    (oe.PureComponent = B),
    (oe.StrictMode = l),
    (oe.Suspense = m),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (oe.act = W),
    (oe.cloneElement = function (T, V, se) {
      if (T == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            T +
            ".",
        );
      var le = M({}, T.props),
        ce = T.key,
        fe = T.ref,
        ve = T._owner;
      if (V != null) {
        if (
          (V.ref !== void 0 && ((fe = V.ref), (ve = ie.current)),
          V.key !== void 0 && (ce = "" + V.key),
          T.type && T.type.defaultProps)
        )
          var he = T.type.defaultProps;
        for (Pe in V)
          Z.call(V, Pe) &&
            !re.hasOwnProperty(Pe) &&
            (le[Pe] = V[Pe] === void 0 && he !== void 0 ? he[Pe] : V[Pe]);
      }
      var Pe = arguments.length - 2;
      if (Pe === 1) le.children = se;
      else if (1 < Pe) {
        he = Array(Pe);
        for (var ut = 0; ut < Pe; ut++) he[ut] = arguments[ut + 2];
        le.children = he;
      }
      return { $$typeof: n, type: T.type, key: ce, ref: fe, props: le, _owner: ve };
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
    (oe.createElement = q),
    (oe.createFactory = function (T) {
      var V = q.bind(null, T);
      return ((V.type = T), V);
    }),
    (oe.createRef = function () {
      return { current: null };
    }),
    (oe.forwardRef = function (T) {
      return { $$typeof: h, render: T };
    }),
    (oe.isValidElement = J),
    (oe.lazy = function (T) {
      return { $$typeof: g, _payload: { _status: -1, _result: T }, _init: Se };
    }),
    (oe.memo = function (T, V) {
      return { $$typeof: y, type: T, compare: V === void 0 ? null : V };
    }),
    (oe.startTransition = function (T) {
      var V = F.transition;
      F.transition = {};
      try {
        T();
      } finally {
        F.transition = V;
      }
    }),
    (oe.unstable_act = W),
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
var Ld;
function tu() {
  return (Ld || ((Ld = 1), (la.exports = ov())), la.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd;
function lv() {
  if (Nd) return fi;
  Nd = 1;
  var n = tu(),
    r = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(h, m, y) {
    var g,
      v = {},
      x = null,
      P = null;
    (y !== void 0 && (x = "" + y),
      m.key !== void 0 && (x = "" + m.key),
      m.ref !== void 0 && (P = m.ref));
    for (g in m) l.call(m, g) && !d.hasOwnProperty(g) && (v[g] = m[g]);
    if (h && h.defaultProps) for (g in ((m = h.defaultProps), m)) v[g] === void 0 && (v[g] = m[g]);
    return { $$typeof: r, type: h, key: x, ref: P, props: v, _owner: u.current };
  }
  return ((fi.Fragment = s), (fi.jsx = f), (fi.jsxs = f), fi);
}
var _d;
function av() {
  return (_d || ((_d = 1), (oa.exports = lv())), oa.exports);
}
var O = av(),
  K = tu(),
  Is = {},
  aa = { exports: {} },
  lt = {},
  ua = { exports: {} },
  ca = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd;
function uv() {
  return (
    jd ||
      ((jd = 1),
      (function (n) {
        function r(F, Y) {
          var W = F.length;
          F.push(Y);
          e: for (; 0 < W;) {
            var T = (W - 1) >>> 1,
              V = F[T];
            if (0 < u(V, Y)) ((F[T] = Y), (F[W] = V), (W = T));
            else break e;
          }
        }
        function s(F) {
          return F.length === 0 ? null : F[0];
        }
        function l(F) {
          if (F.length === 0) return null;
          var Y = F[0],
            W = F.pop();
          if (W !== Y) {
            F[0] = W;
            e: for (var T = 0, V = F.length, se = V >>> 1; T < se;) {
              var le = 2 * (T + 1) - 1,
                ce = F[le],
                fe = le + 1,
                ve = F[fe];
              if (0 > u(ce, W))
                fe < V && 0 > u(ve, ce)
                  ? ((F[T] = ve), (F[fe] = W), (T = fe))
                  : ((F[T] = ce), (F[le] = W), (T = le));
              else if (fe < V && 0 > u(ve, W)) ((F[T] = ve), (F[fe] = W), (T = fe));
              else break e;
            }
          }
          return Y;
        }
        function u(F, Y) {
          var W = F.sortIndex - Y.sortIndex;
          return W !== 0 ? W : F.id - Y.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            h = f.now();
          n.unstable_now = function () {
            return f.now() - h;
          };
        }
        var m = [],
          y = [],
          g = 1,
          v = null,
          x = 3,
          P = !1,
          M = !1,
          R = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          j = typeof clearTimeout == "function" ? clearTimeout : null,
          B = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function z(F) {
          for (var Y = s(y); Y !== null;) {
            if (Y.callback === null) l(y);
            else if (Y.startTime <= F) (l(y), (Y.sortIndex = Y.expirationTime), r(m, Y));
            else break;
            Y = s(y);
          }
        }
        function U(F) {
          if (((R = !1), z(F), !M))
            if (s(m) !== null) ((M = !0), Se(Z));
            else {
              var Y = s(y);
              Y !== null && Ce(U, Y.startTime - F);
            }
        }
        function Z(F, Y) {
          ((M = !1), R && ((R = !1), j(q), (q = -1)), (P = !0));
          var W = x;
          try {
            for (z(Y), v = s(m); v !== null && (!(v.expirationTime > Y) || (F && !me()));) {
              var T = v.callback;
              if (typeof T == "function") {
                ((v.callback = null), (x = v.priorityLevel));
                var V = T(v.expirationTime <= Y);
                ((Y = n.unstable_now()),
                  typeof V == "function" ? (v.callback = V) : v === s(m) && l(m),
                  z(Y));
              } else l(m);
              v = s(m);
            }
            if (v !== null) var se = !0;
            else {
              var le = s(y);
              (le !== null && Ce(U, le.startTime - Y), (se = !1));
            }
            return se;
          } finally {
            ((v = null), (x = W), (P = !1));
          }
        }
        var ie = !1,
          re = null,
          q = -1,
          ye = 5,
          J = -1;
        function me() {
          return !(n.unstable_now() - J < ye);
        }
        function xe() {
          if (re !== null) {
            var F = n.unstable_now();
            J = F;
            var Y = !0;
            try {
              Y = re(!0, F);
            } finally {
              Y ? Le() : ((ie = !1), (re = null));
            }
          } else ie = !1;
        }
        var Le;
        if (typeof B == "function")
          Le = function () {
            B(xe);
          };
        else if (typeof MessageChannel < "u") {
          var Re = new MessageChannel(),
            je = Re.port2;
          ((Re.port1.onmessage = xe),
            (Le = function () {
              je.postMessage(null);
            }));
        } else
          Le = function () {
            D(xe, 0);
          };
        function Se(F) {
          ((re = F), ie || ((ie = !0), Le()));
        }
        function Ce(F, Y) {
          q = D(function () {
            F(n.unstable_now());
          }, Y);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            M || P || ((M = !0), Se(Z));
          }),
          (n.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ye = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (n.unstable_next = function (F) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = x;
            }
            var W = x;
            x = Y;
            try {
              return F();
            } finally {
              x = W;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (F, Y) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var W = x;
            x = F;
            try {
              return Y();
            } finally {
              x = W;
            }
          }),
          (n.unstable_scheduleCallback = function (F, Y, W) {
            var T = n.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? T + W : T))
                : (W = T),
              F)
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
              (V = W + V),
              (F = {
                id: g++,
                callback: Y,
                priorityLevel: F,
                startTime: W,
                expirationTime: V,
                sortIndex: -1,
              }),
              W > T
                ? ((F.sortIndex = W),
                  r(y, F),
                  s(m) === null && F === s(y) && (R ? (j(q), (q = -1)) : (R = !0), Ce(U, W - T)))
                : ((F.sortIndex = V), r(m, F), M || P || ((M = !0), Se(Z))),
              F
            );
          }),
          (n.unstable_shouldYield = me),
          (n.unstable_wrapCallback = function (F) {
            var Y = x;
            return function () {
              var W = x;
              x = Y;
              try {
                return F.apply(this, arguments);
              } finally {
                x = W;
              }
            };
          }));
      })(ca)),
    ca
  );
}
var Fd;
function cv() {
  return (Fd || ((Fd = 1), (ua.exports = uv())), ua.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id;
function fv() {
  if (Id) return lt;
  Id = 1;
  var n = tu(),
    r = cv();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1;
      i < arguments.length;
      i++
    )
      t += "&args[]=" + encodeURIComponent(arguments[i]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var l = new Set(),
    u = {};
  function d(e, t) {
    (f(e, t), f(e + "Capture", t));
  }
  function f(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    v = {};
  function x(e) {
    return m.call(v, e) ? !0 : m.call(g, e) ? !1 : y.test(e) ? (v[e] = !0) : ((g[e] = !0), !1);
  }
  function P(e, t, i, o) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o
          ? !1
          : i !== null
            ? !i.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function M(e, t, i, o) {
    if (t === null || typeof t > "u" || P(e, t, i, o)) return !0;
    if (o) return !1;
    if (i !== null)
      switch (i.type) {
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
  function R(e, t, i, o, a, c, p) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = a),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = p));
  }
  var D = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      D[e] = new R(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      D[t] = new R(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      D[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        D[e] = new R(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        D[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      D[e] = new R(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      D[e] = new R(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      D[e] = new R(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      D[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var j = /[\-:]([a-z])/g;
  function B(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(j, B);
      D[t] = new R(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(j, B);
        D[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(j, B);
      D[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      D[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (D.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      D[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function z(e, t, i, o) {
    var a = D.hasOwnProperty(t) ? D[t] : null;
    (a !== null
      ? a.type !== 0
      : o || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (M(t, i, a, o) && (i = null),
      o || a === null
        ? x(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i))
        : a.mustUseProperty
          ? (e[a.propertyName] = i === null ? (a.type === 3 ? !1 : "") : i)
          : ((t = a.attributeName),
            (o = a.attributeNamespace),
            i === null
              ? e.removeAttribute(t)
              : ((a = a.type),
                (i = a === 3 || (a === 4 && i === !0) ? "" : "" + i),
                o ? e.setAttributeNS(o, t, i) : e.setAttribute(t, i))));
  }
  var U = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Z = Symbol.for("react.element"),
    ie = Symbol.for("react.portal"),
    re = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    ye = Symbol.for("react.profiler"),
    J = Symbol.for("react.provider"),
    me = Symbol.for("react.context"),
    xe = Symbol.for("react.forward_ref"),
    Le = Symbol.for("react.suspense"),
    Re = Symbol.for("react.suspense_list"),
    je = Symbol.for("react.memo"),
    Se = Symbol.for("react.lazy"),
    Ce = Symbol.for("react.offscreen"),
    F = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var W = Object.assign,
    T;
  function V(e) {
    if (T === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
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
    var i = Error.prepareStackTrace;
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
          } catch (A) {
            var o = A;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (A) {
            o = A;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        e();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (
          var a = A.stack.split(`
`),
            c = o.stack.split(`
`),
            p = a.length - 1,
            w = c.length - 1;
          1 <= p && 0 <= w && a[p] !== c[w];
        )
          w--;
        for (; 1 <= p && 0 <= w; p--, w--)
          if (a[p] !== c[w]) {
            if (p !== 1 || w !== 1)
              do
                if ((p--, w--, 0 > w || a[p] !== c[w])) {
                  var S =
                    `
` + a[p].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", e.displayName)),
                    S
                  );
                }
              while (1 <= p && 0 <= w);
            break;
          }
      }
    } finally {
      ((se = !1), (Error.prepareStackTrace = i));
    }
    return (e = e ? e.displayName || e.name : "") ? V(e) : "";
  }
  function ce(e) {
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
  function fe(e) {
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
      case q:
        return "StrictMode";
      case Le:
        return "Suspense";
      case Re:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case me:
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
          return ((t = e.displayName || null), t !== null ? t : fe(e.type) || "Memo");
        case Se:
          ((t = e._payload), (e = e._init));
          try {
            return fe(e(t));
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
        return fe(t);
      case 8:
        return t === q ? "StrictMode" : "Mode";
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
  function he(e) {
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
  function ut(e) {
    var t = Pe(e) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var a = i.get,
        c = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (p) {
            ((o = "" + p), c.call(this, p));
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (p) {
            o = "" + p;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Ai(e) {
    e._valueTracker || (e._valueTracker = ut(e));
  }
  function Fu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      o = "";
    return (
      e && (o = Pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== i ? (t.setValue(e), !0) : !1
    );
  }
  function Mi(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ho(e, t) {
    var i = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function Iu(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    ((i = he(t.value != null ? t.value : i)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: i,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function Ou(e, t) {
    ((t = t.checked), t != null && z(e, "checked", t, !1));
  }
  function po(e, t) {
    Ou(e, t);
    var i = he(t.value),
      o = t.type;
    if (i != null)
      o === "number"
        ? ((i === 0 && e.value === "") || e.value != i) && (e.value = "" + i)
        : e.value !== "" + i && (e.value = "" + i);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? mo(e, t.type, i)
      : t.hasOwnProperty("defaultValue") && mo(e, t.type, he(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function zu(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (!((o !== "submit" && o !== "reset") || (t.value !== void 0 && t.value !== null))) return;
      ((t = "" + e._wrapperState.initialValue),
        i || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((i = e.name),
      i !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== "" && (e.name = i));
  }
  function mo(e, t, i) {
    (t !== "number" || Mi(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var Cr = Array.isArray;
  function Wn(e, t, i, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < i.length; a++) t["$" + i[a]] = !0;
      for (i = 0; i < e.length; i++)
        ((a = t.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== a && (e[i].selected = a),
          a && o && (e[i].defaultSelected = !0));
    } else {
      for (i = "" + he(i), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === i) {
          ((e[a].selected = !0), o && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function go(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Bu(e, t) {
    var i = t.value;
    if (i == null) {
      if (((i = t.children), (t = t.defaultValue), i != null)) {
        if (t != null) throw Error(s(92));
        if (Cr(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        t = i;
      }
      (t == null && (t = ""), (i = t));
    }
    e._wrapperState = { initialValue: he(i) };
  }
  function Uu(e, t) {
    var i = he(t.value),
      o = he(t.defaultValue);
    (i != null &&
      ((i = "" + i),
      i !== e.value && (e.value = i),
      t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      o != null && (e.defaultValue = "" + o));
  }
  function Wu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Hu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function yo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Hu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ri,
    $u = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, i, o, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, i, o, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (
          Ri = Ri || document.createElement("div"),
            Ri.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ri.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Ar(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Mr = {
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
    cg = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mr).forEach(function (e) {
    cg.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mr[t] = Mr[e]));
    });
  });
  function Ku(e, t, i) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : i || typeof t != "number" || t === 0 || (Mr.hasOwnProperty(e) && Mr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Gu(e, t) {
    e = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var o = i.indexOf("--") === 0,
          a = Ku(i, t[i], o);
        (i === "float" && (i = "cssFloat"), o ? e.setProperty(i, a) : (e[i] = a));
      }
  }
  var fg = W(
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
  function vo(e, t) {
    if (t) {
      if (fg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function wo(e, t) {
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
  var xo = null;
  function So(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ko = null,
    Hn = null,
    $n = null;
  function Xu(e) {
    if ((e = br(e))) {
      if (typeof ko != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = qi(t)), ko(e.stateNode, e.type, t));
    }
  }
  function Yu(e) {
    Hn ? ($n ? $n.push(e) : ($n = [e])) : (Hn = e);
  }
  function Qu() {
    if (Hn) {
      var e = Hn,
        t = $n;
      if ((($n = Hn = null), Xu(e), t)) for (e = 0; e < t.length; e++) Xu(t[e]);
    }
  }
  function bu(e, t) {
    return e(t);
  }
  function Zu() {}
  var To = !1;
  function qu(e, t, i) {
    if (To) return e(t, i);
    To = !0;
    try {
      return bu(e, t, i);
    } finally {
      ((To = !1), (Hn !== null || $n !== null) && (Zu(), Qu()));
    }
  }
  function Rr(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = qi(i);
    if (o === null) return null;
    i = o[t];
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
    if (i && typeof i != "function") throw Error(s(231, t, typeof i));
    return i;
  }
  var Po = !1;
  if (h)
    try {
      var Dr = {};
      (Object.defineProperty(Dr, "passive", {
        get: function () {
          Po = !0;
        },
      }),
        window.addEventListener("test", Dr, Dr),
        window.removeEventListener("test", Dr, Dr));
    } catch {
      Po = !1;
    }
  function dg(e, t, i, o, a, c, p, w, S) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, A);
    } catch (N) {
      this.onError(N);
    }
  }
  var Vr = !1,
    Di = null,
    Vi = !1,
    Eo = null,
    hg = {
      onError: function (e) {
        ((Vr = !0), (Di = e));
      },
    };
  function pg(e, t, i, o, a, c, p, w, S) {
    ((Vr = !1), (Di = null), dg.apply(hg, arguments));
  }
  function mg(e, t, i, o, a, c, p, w, S) {
    if ((pg.apply(this, arguments), Vr)) {
      if (Vr) {
        var A = Di;
        ((Vr = !1), (Di = null));
      } else throw Error(s(198));
      Vi || ((Vi = !0), (Eo = A));
    }
  }
  function Tn(e) {
    var t = e,
      i = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (i = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function Ju(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function ec(e) {
    if (Tn(e) !== e) throw Error(s(188));
  }
  function gg(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Tn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var i = e, o = t; ;) {
      var a = i.return;
      if (a === null) break;
      var c = a.alternate;
      if (c === null) {
        if (((o = a.return), o !== null)) {
          i = o;
          continue;
        }
        break;
      }
      if (a.child === c.child) {
        for (c = a.child; c;) {
          if (c === i) return (ec(a), e);
          if (c === o) return (ec(a), t);
          c = c.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== o.return) ((i = a), (o = c));
      else {
        for (var p = !1, w = a.child; w;) {
          if (w === i) {
            ((p = !0), (i = a), (o = c));
            break;
          }
          if (w === o) {
            ((p = !0), (o = a), (i = c));
            break;
          }
          w = w.sibling;
        }
        if (!p) {
          for (w = c.child; w;) {
            if (w === i) {
              ((p = !0), (i = c), (o = a));
              break;
            }
            if (w === o) {
              ((p = !0), (o = c), (i = a));
              break;
            }
            w = w.sibling;
          }
          if (!p) throw Error(s(189));
        }
      }
      if (i.alternate !== o) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? e : t;
  }
  function tc(e) {
    return ((e = gg(e)), e !== null ? nc(e) : null);
  }
  function nc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = nc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var rc = r.unstable_scheduleCallback,
    ic = r.unstable_cancelCallback,
    yg = r.unstable_shouldYield,
    vg = r.unstable_requestPaint,
    Ne = r.unstable_now,
    wg = r.unstable_getCurrentPriorityLevel,
    Co = r.unstable_ImmediatePriority,
    sc = r.unstable_UserBlockingPriority,
    Li = r.unstable_NormalPriority,
    xg = r.unstable_LowPriority,
    oc = r.unstable_IdlePriority,
    Ni = null,
    Ft = null;
  function Sg(e) {
    if (Ft && typeof Ft.onCommitFiberRoot == "function")
      try {
        Ft.onCommitFiberRoot(Ni, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Pt = Math.clz32 ? Math.clz32 : Pg,
    kg = Math.log,
    Tg = Math.LN2;
  function Pg(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((kg(e) / Tg) | 0)) | 0);
  }
  var _i = 64,
    ji = 4194304;
  function Lr(e) {
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
  function Fi(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0,
      a = e.suspendedLanes,
      c = e.pingedLanes,
      p = i & 268435455;
    if (p !== 0) {
      var w = p & ~a;
      w !== 0 ? (o = Lr(w)) : ((c &= p), c !== 0 && (o = Lr(c)));
    } else ((p = i & ~a), p !== 0 ? (o = Lr(p)) : c !== 0 && (o = Lr(c)));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & a) === 0 &&
      ((a = o & -o), (c = t & -t), a >= c || (a === 16 && (c & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= i & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t;)
        ((i = 31 - Pt(t)), (a = 1 << i), (o |= e[i]), (t &= ~a));
    return o;
  }
  function Eg(e, t) {
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
  function Cg(e, t) {
    for (
      var i = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, c = e.pendingLanes;
      0 < c;
    ) {
      var p = 31 - Pt(c),
        w = 1 << p,
        S = a[p];
      (S === -1
        ? ((w & i) === 0 || (w & o) !== 0) && (a[p] = Eg(w, t))
        : S <= t && (e.expiredLanes |= w),
        (c &= ~w));
    }
  }
  function Ao(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function lc() {
    var e = _i;
    return ((_i <<= 1), (_i & 4194240) === 0 && (_i = 64), e);
  }
  function Mo(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Nr(e, t, i) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Pt(t)),
      (e[t] = i));
  }
  function Ag(e, t) {
    var i = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < i;) {
      var a = 31 - Pt(i),
        c = 1 << a;
      ((t[a] = 0), (o[a] = -1), (e[a] = -1), (i &= ~c));
    }
  }
  function Ro(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i;) {
      var o = 31 - Pt(i),
        a = 1 << o;
      ((a & t) | (e[o] & t) && (e[o] |= t), (i &= ~a));
    }
  }
  var pe = 0;
  function ac(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var uc,
    Do,
    cc,
    fc,
    dc,
    Vo = !1,
    Ii = [],
    Jt = null,
    en = null,
    tn = null,
    _r = new Map(),
    jr = new Map(),
    nn = [],
    Mg =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function hc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Jt = null;
        break;
      case "dragenter":
      case "dragleave":
        en = null;
        break;
      case "mouseover":
      case "mouseout":
        tn = null;
        break;
      case "pointerover":
      case "pointerout":
        _r.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        jr.delete(t.pointerId);
    }
  }
  function Fr(e, t, i, o, a, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: i,
          eventSystemFlags: o,
          nativeEvent: c,
          targetContainers: [a],
        }),
        t !== null && ((t = br(t)), t !== null && Do(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function Rg(e, t, i, o, a) {
    switch (t) {
      case "focusin":
        return ((Jt = Fr(Jt, e, t, i, o, a)), !0);
      case "dragenter":
        return ((en = Fr(en, e, t, i, o, a)), !0);
      case "mouseover":
        return ((tn = Fr(tn, e, t, i, o, a)), !0);
      case "pointerover":
        var c = a.pointerId;
        return (_r.set(c, Fr(_r.get(c) || null, e, t, i, o, a)), !0);
      case "gotpointercapture":
        return ((c = a.pointerId), jr.set(c, Fr(jr.get(c) || null, e, t, i, o, a)), !0);
    }
    return !1;
  }
  function pc(e) {
    var t = Pn(e.target);
    if (t !== null) {
      var i = Tn(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = Ju(i)), t !== null)) {
            ((e.blockedOn = t),
              dc(e.priority, function () {
                cc(i);
              }));
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Oi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var i = No(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(i.type, i);
        ((xo = o), i.target.dispatchEvent(o), (xo = null));
      } else return ((t = br(i)), t !== null && Do(t), (e.blockedOn = i), !1);
      t.shift();
    }
    return !0;
  }
  function mc(e, t, i) {
    Oi(e) && i.delete(t);
  }
  function Dg() {
    ((Vo = !1),
      Jt !== null && Oi(Jt) && (Jt = null),
      en !== null && Oi(en) && (en = null),
      tn !== null && Oi(tn) && (tn = null),
      _r.forEach(mc),
      jr.forEach(mc));
  }
  function Ir(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Vo || ((Vo = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Dg)));
  }
  function Or(e) {
    function t(a) {
      return Ir(a, e);
    }
    if (0 < Ii.length) {
      Ir(Ii[0], e);
      for (var i = 1; i < Ii.length; i++) {
        var o = Ii[i];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Jt !== null && Ir(Jt, e),
        en !== null && Ir(en, e),
        tn !== null && Ir(tn, e),
        _r.forEach(t),
        jr.forEach(t),
        i = 0;
      i < nn.length;
      i++
    )
      ((o = nn[i]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < nn.length && ((i = nn[0]), i.blockedOn === null);)
      (pc(i), i.blockedOn === null && nn.shift());
  }
  var Kn = U.ReactCurrentBatchConfig,
    zi = !0;
  function Vg(e, t, i, o) {
    var a = pe,
      c = Kn.transition;
    Kn.transition = null;
    try {
      ((pe = 1), Lo(e, t, i, o));
    } finally {
      ((pe = a), (Kn.transition = c));
    }
  }
  function Lg(e, t, i, o) {
    var a = pe,
      c = Kn.transition;
    Kn.transition = null;
    try {
      ((pe = 4), Lo(e, t, i, o));
    } finally {
      ((pe = a), (Kn.transition = c));
    }
  }
  function Lo(e, t, i, o) {
    if (zi) {
      var a = No(e, t, i, o);
      if (a === null) (bo(e, t, o, Bi, i), hc(e, o));
      else if (Rg(a, e, t, i, o)) o.stopPropagation();
      else if ((hc(e, o), t & 4 && -1 < Mg.indexOf(e))) {
        for (; a !== null;) {
          var c = br(a);
          if (
            (c !== null && uc(c), (c = No(e, t, i, o)), c === null && bo(e, t, o, Bi, i), c === a)
          )
            break;
          a = c;
        }
        a !== null && o.stopPropagation();
      } else bo(e, t, o, null, i);
    }
  }
  var Bi = null;
  function No(e, t, i, o) {
    if (((Bi = null), (e = So(o)), (e = Pn(e)), e !== null))
      if (((t = Tn(e)), t === null)) e = null;
      else if (((i = t.tag), i === 13)) {
        if (((e = Ju(t)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Bi = e), null);
  }
  function gc(e) {
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
        switch (wg()) {
          case Co:
            return 1;
          case sc:
            return 4;
          case Li:
          case xg:
            return 16;
          case oc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var rn = null,
    _o = null,
    Ui = null;
  function yc() {
    if (Ui) return Ui;
    var e,
      t = _o,
      i = t.length,
      o,
      a = "value" in rn ? rn.value : rn.textContent,
      c = a.length;
    for (e = 0; e < i && t[e] === a[e]; e++);
    var p = i - e;
    for (o = 1; o <= p && t[i - o] === a[c - o]; o++);
    return (Ui = a.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Wi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Hi() {
    return !0;
  }
  function vc() {
    return !1;
  }
  function ct(e) {
    function t(i, o, a, c, p) {
      ((this._reactName = i),
        (this._targetInst = a),
        (this.type = o),
        (this.nativeEvent = c),
        (this.target = p),
        (this.currentTarget = null));
      for (var w in e) e.hasOwnProperty(w) && ((i = e[w]), (this[w] = i ? i(c) : c[w]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Hi
          : vc),
        (this.isPropagationStopped = vc),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = Hi));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = Hi));
        },
        persist: function () {},
        isPersistent: Hi,
      }),
      t
    );
  }
  var Gn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    jo = ct(Gn),
    zr = W({}, Gn, { view: 0, detail: 0 }),
    Ng = ct(zr),
    Fo,
    Io,
    Br,
    $i = W({}, zr, {
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
      getModifierState: zo,
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
          : (e !== Br &&
              (Br && e.type === "mousemove"
                ? ((Fo = e.screenX - Br.screenX), (Io = e.screenY - Br.screenY))
                : (Io = Fo = 0),
              (Br = e)),
            Fo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Io;
      },
    }),
    wc = ct($i),
    _g = W({}, $i, { dataTransfer: 0 }),
    jg = ct(_g),
    Fg = W({}, zr, { relatedTarget: 0 }),
    Oo = ct(Fg),
    Ig = W({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Og = ct(Ig),
    zg = W({}, Gn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Bg = ct(zg),
    Ug = W({}, Gn, { data: 0 }),
    xc = ct(Ug),
    Wg = {
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
    Hg = {
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
    $g = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Kg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $g[e]) ? !!t[e] : !1;
  }
  function zo() {
    return Kg;
  }
  var Gg = W({}, zr, {
      key: function (e) {
        if (e.key) {
          var t = Wg[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Wi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Hg[e.keyCode] || "Unidentified"
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
      getModifierState: zo,
      charCode: function (e) {
        return e.type === "keypress" ? Wi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Wi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Xg = ct(Gg),
    Yg = W({}, $i, {
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
    Sc = ct(Yg),
    Qg = W({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zo,
    }),
    bg = ct(Qg),
    Zg = W({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qg = ct(Zg),
    Jg = W({}, $i, {
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
    ey = ct(Jg),
    ty = [9, 13, 27, 32],
    Bo = h && "CompositionEvent" in window,
    Ur = null;
  h && "documentMode" in document && (Ur = document.documentMode);
  var ny = h && "TextEvent" in window && !Ur,
    kc = h && (!Bo || (Ur && 8 < Ur && 11 >= Ur)),
    Tc = " ",
    Pc = !1;
  function Ec(e, t) {
    switch (e) {
      case "keyup":
        return ty.indexOf(t.keyCode) !== -1;
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
  function Cc(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var Xn = !1;
  function ry(e, t) {
    switch (e) {
      case "compositionend":
        return Cc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Pc = !0), Tc);
      case "textInput":
        return ((e = t.data), e === Tc && Pc ? null : e);
      default:
        return null;
    }
  }
  function iy(e, t) {
    if (Xn)
      return e === "compositionend" || (!Bo && Ec(e, t))
        ? ((e = yc()), (Ui = _o = rn = null), (Xn = !1), e)
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
        return kc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sy = {
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
  function Ac(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sy[e.type] : t === "textarea";
  }
  function Mc(e, t, i, o) {
    (Yu(o),
      (t = Qi(t, "onChange")),
      0 < t.length &&
        ((i = new jo("onChange", "change", null, i, o)), e.push({ event: i, listeners: t })));
  }
  var Wr = null,
    Hr = null;
  function oy(e) {
    Gc(e, 0);
  }
  function Ki(e) {
    var t = qn(e);
    if (Fu(t)) return e;
  }
  function ly(e, t) {
    if (e === "change") return t;
  }
  var Rc = !1;
  if (h) {
    var Uo;
    if (h) {
      var Wo = "oninput" in document;
      if (!Wo) {
        var Dc = document.createElement("div");
        (Dc.setAttribute("oninput", "return;"), (Wo = typeof Dc.oninput == "function"));
      }
      Uo = Wo;
    } else Uo = !1;
    Rc = Uo && (!document.documentMode || 9 < document.documentMode);
  }
  function Vc() {
    Wr && (Wr.detachEvent("onpropertychange", Lc), (Hr = Wr = null));
  }
  function Lc(e) {
    if (e.propertyName === "value" && Ki(Hr)) {
      var t = [];
      (Mc(t, Hr, e, So(e)), qu(oy, t));
    }
  }
  function ay(e, t, i) {
    e === "focusin"
      ? (Vc(), (Wr = t), (Hr = i), Wr.attachEvent("onpropertychange", Lc))
      : e === "focusout" && Vc();
  }
  function uy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ki(Hr);
  }
  function cy(e, t) {
    if (e === "click") return Ki(t);
  }
  function fy(e, t) {
    if (e === "input" || e === "change") return Ki(t);
  }
  function dy(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Et = typeof Object.is == "function" ? Object.is : dy;
  function $r(e, t) {
    if (Et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(e),
      o = Object.keys(t);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var a = i[o];
      if (!m.call(t, a) || !Et(e[a], t[a])) return !1;
    }
    return !0;
  }
  function Nc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function _c(e, t) {
    var i = Nc(e);
    e = 0;
    for (var o; i;) {
      if (i.nodeType === 3) {
        if (((o = e + i.textContent.length), e <= t && o >= t)) return { node: i, offset: t - e };
        e = o;
      }
      e: {
        for (; i;) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Nc(i);
    }
  }
  function jc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? jc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Fc() {
    for (var e = window, t = Mi(); t instanceof e.HTMLIFrameElement;) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Mi(e.document);
    }
    return t;
  }
  function Ho(e) {
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
  function hy(e) {
    var t = Fc(),
      i = e.focusedElem,
      o = e.selectionRange;
    if (t !== i && i && i.ownerDocument && jc(i.ownerDocument.documentElement, i)) {
      if (o !== null && Ho(i)) {
        if (((t = o.start), (e = o.end), e === void 0 && (e = t), "selectionStart" in i))
          ((i.selectionStart = t), (i.selectionEnd = Math.min(e, i.value.length)));
        else if (
          ((e = ((t = i.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var a = i.textContent.length,
            c = Math.min(o.start, a);
          ((o = o.end === void 0 ? c : Math.min(o.end, a)),
            !e.extend && c > o && ((a = o), (o = c), (c = a)),
            (a = _c(i, c)));
          var p = _c(i, o);
          a &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            c > o
              ? (e.addRange(t), e.extend(p.node, p.offset))
              : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; (e = e.parentNode);)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++)
        ((e = t[i]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var py = h && "documentMode" in document && 11 >= document.documentMode,
    Yn = null,
    $o = null,
    Kr = null,
    Ko = !1;
  function Ic(e, t, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Ko ||
      Yn == null ||
      Yn !== Mi(o) ||
      ((o = Yn),
      "selectionStart" in o && Ho(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Kr && $r(Kr, o)) ||
        ((Kr = o),
        (o = Qi($o, "onSelect")),
        0 < o.length &&
          ((t = new jo("onSelect", "select", null, t, i)),
          e.push({ event: t, listeners: o }),
          (t.target = Yn))));
  }
  function Gi(e, t) {
    var i = {};
    return (
      (i[e.toLowerCase()] = t.toLowerCase()),
      (i["Webkit" + e] = "webkit" + t),
      (i["Moz" + e] = "moz" + t),
      i
    );
  }
  var Qn = {
      animationend: Gi("Animation", "AnimationEnd"),
      animationiteration: Gi("Animation", "AnimationIteration"),
      animationstart: Gi("Animation", "AnimationStart"),
      transitionend: Gi("Transition", "TransitionEnd"),
    },
    Go = {},
    Oc = {};
  h &&
    ((Oc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Qn.animationend.animation,
      delete Qn.animationiteration.animation,
      delete Qn.animationstart.animation),
    "TransitionEvent" in window || delete Qn.transitionend.transition);
  function Xi(e) {
    if (Go[e]) return Go[e];
    if (!Qn[e]) return e;
    var t = Qn[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in Oc) return (Go[e] = t[i]);
    return e;
  }
  var zc = Xi("animationend"),
    Bc = Xi("animationiteration"),
    Uc = Xi("animationstart"),
    Wc = Xi("transitionend"),
    Hc = new Map(),
    $c =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function sn(e, t) {
    (Hc.set(e, t), d(t, [e]));
  }
  for (var Xo = 0; Xo < $c.length; Xo++) {
    var Yo = $c[Xo],
      my = Yo.toLowerCase(),
      gy = Yo[0].toUpperCase() + Yo.slice(1);
    sn(my, "on" + gy);
  }
  (sn(zc, "onAnimationEnd"),
    sn(Bc, "onAnimationIteration"),
    sn(Uc, "onAnimationStart"),
    sn("dblclick", "onDoubleClick"),
    sn("focusin", "onFocus"),
    sn("focusout", "onBlur"),
    sn(Wc, "onTransitionEnd"),
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
  var Gr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    yy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));
  function Kc(e, t, i) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = i), mg(o, t, void 0, e), (e.currentTarget = null));
  }
  function Gc(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i],
        a = o.event;
      o = o.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = o.length - 1; 0 <= p; p--) {
            var w = o[p],
              S = w.instance,
              A = w.currentTarget;
            if (((w = w.listener), S !== c && a.isPropagationStopped())) break e;
            (Kc(a, w, A), (c = S));
          }
        else
          for (p = 0; p < o.length; p++) {
            if (
              ((w = o[p]),
              (S = w.instance),
              (A = w.currentTarget),
              (w = w.listener),
              S !== c && a.isPropagationStopped())
            )
              break e;
            (Kc(a, w, A), (c = S));
          }
      }
    }
    if (Vi) throw ((e = Eo), (Vi = !1), (Eo = null), e);
  }
  function ke(e, t) {
    var i = t[nl];
    i === void 0 && (i = t[nl] = new Set());
    var o = e + "__bubble";
    i.has(o) || (Xc(t, e, 2, !1), i.add(o));
  }
  function Qo(e, t, i) {
    var o = 0;
    (t && (o |= 4), Xc(i, e, o, t));
  }
  var Yi = "_reactListening" + Math.random().toString(36).slice(2);
  function Xr(e) {
    if (!e[Yi]) {
      ((e[Yi] = !0),
        l.forEach(function (i) {
          i !== "selectionchange" && (yy.has(i) || Qo(i, !1, e), Qo(i, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Yi] || ((t[Yi] = !0), Qo("selectionchange", !1, t));
    }
  }
  function Xc(e, t, i, o) {
    switch (gc(t)) {
      case 1:
        var a = Vg;
        break;
      case 4:
        a = Lg;
        break;
      default:
        a = Lo;
    }
    ((i = a.bind(null, t, i, e)),
      (a = void 0),
      !Po || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (a = !0),
      o
        ? a !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: a })
          : e.addEventListener(t, i, !0)
        : a !== void 0
          ? e.addEventListener(t, i, { passive: a })
          : e.addEventListener(t, i, !1));
  }
  function bo(e, t, i, o, a) {
    var c = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var p = o.tag;
        if (p === 3 || p === 4) {
          var w = o.stateNode.containerInfo;
          if (w === a || (w.nodeType === 8 && w.parentNode === a)) break;
          if (p === 4)
            for (p = o.return; p !== null;) {
              var S = p.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = p.stateNode.containerInfo),
                S === a || (S.nodeType === 8 && S.parentNode === a))
              )
                return;
              p = p.return;
            }
          for (; w !== null;) {
            if (((p = Pn(w)), p === null)) return;
            if (((S = p.tag), S === 5 || S === 6)) {
              o = c = p;
              continue e;
            }
            w = w.parentNode;
          }
        }
        o = o.return;
      }
    qu(function () {
      var A = c,
        N = So(i),
        _ = [];
      e: {
        var L = Hc.get(e);
        if (L !== void 0) {
          var H = jo,
            G = e;
          switch (e) {
            case "keypress":
              if (Wi(i) === 0) break e;
            case "keydown":
            case "keyup":
              H = Xg;
              break;
            case "focusin":
              ((G = "focus"), (H = Oo));
              break;
            case "focusout":
              ((G = "blur"), (H = Oo));
              break;
            case "beforeblur":
            case "afterblur":
              H = Oo;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = wc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = jg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = bg;
              break;
            case zc:
            case Bc:
            case Uc:
              H = Og;
              break;
            case Wc:
              H = qg;
              break;
            case "scroll":
              H = Ng;
              break;
            case "wheel":
              H = ey;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Bg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Sc;
          }
          var Q = (t & 4) !== 0,
            _e = !Q && e === "scroll",
            E = Q ? (L !== null ? L + "Capture" : null) : L;
          Q = [];
          for (var k = A, C; k !== null;) {
            C = k;
            var I = C.stateNode;
            if (
              (C.tag === 5 &&
                I !== null &&
                ((C = I), E !== null && ((I = Rr(k, E)), I != null && Q.push(Yr(k, I, C)))),
              _e)
            )
              break;
            k = k.return;
          }
          0 < Q.length && ((L = new H(L, G, null, i, N)), _.push({ event: L, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (H = e === "mouseout" || e === "pointerout"),
            L && i !== xo && (G = i.relatedTarget || i.fromElement) && (Pn(G) || G[$t]))
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
              ? ((G = i.relatedTarget || i.toElement),
                (H = A),
                (G = G ? Pn(G) : null),
                G !== null &&
                  ((_e = Tn(G)), G !== _e || (G.tag !== 5 && G.tag !== 6)) &&
                  (G = null))
              : ((H = null), (G = A)),
            H !== G)
          ) {
            if (
              ((Q = wc),
              (I = "onMouseLeave"),
              (E = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = Sc), (I = "onPointerLeave"), (E = "onPointerEnter"), (k = "pointer")),
              (_e = H == null ? L : qn(H)),
              (C = G == null ? L : qn(G)),
              (L = new Q(I, k + "leave", H, i, N)),
              (L.target = _e),
              (L.relatedTarget = C),
              (I = null),
              Pn(N) === A &&
                ((Q = new Q(E, k + "enter", G, i, N)),
                (Q.target = C),
                (Q.relatedTarget = _e),
                (I = Q)),
              (_e = I),
              H && G)
            )
              t: {
                for (Q = H, E = G, k = 0, C = Q; C; C = bn(C)) k++;
                for (C = 0, I = E; I; I = bn(I)) C++;
                for (; 0 < k - C;) ((Q = bn(Q)), k--);
                for (; 0 < C - k;) ((E = bn(E)), C--);
                for (; k--;) {
                  if (Q === E || (E !== null && Q === E.alternate)) break t;
                  ((Q = bn(Q)), (E = bn(E)));
                }
                Q = null;
              }
            else Q = null;
            (H !== null && Yc(_, L, H, Q, !1), G !== null && _e !== null && Yc(_, _e, G, Q, !0));
          }
        }
        e: {
          if (
            ((L = A ? qn(A) : window),
            (H = L.nodeName && L.nodeName.toLowerCase()),
            H === "select" || (H === "input" && L.type === "file"))
          )
            var b = ly;
          else if (Ac(L))
            if (Rc) b = fy;
            else {
              b = uy;
              var ee = ay;
            }
          else
            (H = L.nodeName) &&
              H.toLowerCase() === "input" &&
              (L.type === "checkbox" || L.type === "radio") &&
              (b = cy);
          if (b && (b = b(e, A))) {
            Mc(_, b, i, N);
            break e;
          }
          (ee && ee(e, L, A),
            e === "focusout" &&
              (ee = L._wrapperState) &&
              ee.controlled &&
              L.type === "number" &&
              mo(L, "number", L.value));
        }
        switch (((ee = A ? qn(A) : window), e)) {
          case "focusin":
            (Ac(ee) || ee.contentEditable === "true") && ((Yn = ee), ($o = A), (Kr = null));
            break;
          case "focusout":
            Kr = $o = Yn = null;
            break;
          case "mousedown":
            Ko = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ko = !1), Ic(_, i, N));
            break;
          case "selectionchange":
            if (py) break;
          case "keydown":
          case "keyup":
            Ic(_, i, N);
        }
        var te;
        if (Bo)
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
          Xn
            ? Ec(e, i) && (ne = "onCompositionEnd")
            : e === "keydown" && i.keyCode === 229 && (ne = "onCompositionStart");
        (ne &&
          (kc &&
            i.locale !== "ko" &&
            (Xn || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && Xn && (te = yc())
              : ((rn = N), (_o = "value" in rn ? rn.value : rn.textContent), (Xn = !0))),
          (ee = Qi(A, ne)),
          0 < ee.length &&
            ((ne = new xc(ne, e, null, i, N)),
            _.push({ event: ne, listeners: ee }),
            te ? (ne.data = te) : ((te = Cc(i)), te !== null && (ne.data = te)))),
          (te = ny ? ry(e, i) : iy(e, i)) &&
            ((A = Qi(A, "onBeforeInput")),
            0 < A.length &&
              ((N = new xc("onBeforeInput", "beforeinput", null, i, N)),
              _.push({ event: N, listeners: A }),
              (N.data = te))));
      }
      Gc(_, t);
    });
  }
  function Yr(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function Qi(e, t) {
    for (var i = t + "Capture", o = []; e !== null;) {
      var a = e,
        c = a.stateNode;
      (a.tag === 5 &&
        c !== null &&
        ((a = c),
        (c = Rr(e, i)),
        c != null && o.unshift(Yr(e, c, a)),
        (c = Rr(e, t)),
        c != null && o.push(Yr(e, c, a))),
        (e = e.return));
    }
    return o;
  }
  function bn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Yc(e, t, i, o, a) {
    for (var c = t._reactName, p = []; i !== null && i !== o;) {
      var w = i,
        S = w.alternate,
        A = w.stateNode;
      if (S !== null && S === o) break;
      (w.tag === 5 &&
        A !== null &&
        ((w = A),
        a
          ? ((S = Rr(i, c)), S != null && p.unshift(Yr(i, S, w)))
          : a || ((S = Rr(i, c)), S != null && p.push(Yr(i, S, w)))),
        (i = i.return));
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var vy = /\r\n?/g,
    wy = /\u0000|\uFFFD/g;
  function Qc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        vy,
        `
`,
      )
      .replace(wy, "");
  }
  function bi(e, t, i) {
    if (((t = Qc(t)), Qc(e) !== t && i)) throw Error(s(425));
  }
  function Zi() {}
  var Zo = null,
    qo = null;
  function Jo(e, t) {
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
  var el = typeof setTimeout == "function" ? setTimeout : void 0,
    xy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    bc = typeof Promise == "function" ? Promise : void 0,
    Sy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof bc < "u"
          ? function (e) {
              return bc.resolve(null).then(e).catch(ky);
            }
          : el;
  function ky(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function tl(e, t) {
    var i = t,
      o = 0;
    do {
      var a = i.nextSibling;
      if ((e.removeChild(i), a && a.nodeType === 8))
        if (((i = a.data), i === "/$")) {
          if (o === 0) {
            (e.removeChild(a), Or(t));
            return;
          }
          o--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || o++;
      i = a;
    } while (i);
    Or(t);
  }
  function on(e) {
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
  function Zc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (t === 0) return e;
          t--;
        } else i === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Zn = Math.random().toString(36).slice(2),
    It = "__reactFiber$" + Zn,
    Qr = "__reactProps$" + Zn,
    $t = "__reactContainer$" + Zn,
    nl = "__reactEvents$" + Zn,
    Ty = "__reactListeners$" + Zn,
    Py = "__reactHandles$" + Zn;
  function Pn(e) {
    var t = e[It];
    if (t) return t;
    for (var i = e.parentNode; i;) {
      if ((t = i[$t] || i[It])) {
        if (((i = t.alternate), t.child !== null || (i !== null && i.child !== null)))
          for (e = Zc(e); e !== null;) {
            if ((i = e[It])) return i;
            e = Zc(e);
          }
        return t;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function br(e) {
    return (
      (e = e[It] || e[$t]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function qi(e) {
    return e[Qr] || null;
  }
  var rl = [],
    Jn = -1;
  function ln(e) {
    return { current: e };
  }
  function Te(e) {
    0 > Jn || ((e.current = rl[Jn]), (rl[Jn] = null), Jn--);
  }
  function we(e, t) {
    (Jn++, (rl[Jn] = e.current), (e.current = t));
  }
  var an = {},
    Ye = ln(an),
    nt = ln(!1),
    En = an;
  function er(e, t) {
    var i = e.type.contextTypes;
    if (!i) return an;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      c;
    for (c in i) a[c] = t[c];
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
  function Ji() {
    (Te(nt), Te(Ye));
  }
  function qc(e, t, i) {
    if (Ye.current !== an) throw Error(s(168));
    (we(Ye, t), we(nt, i));
  }
  function Jc(e, t, i) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function")) return i;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(s(108, ve(e) || "Unknown", a));
    return W({}, i, o);
  }
  function es(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || an),
      (En = Ye.current),
      we(Ye, e),
      we(nt, nt.current),
      !0
    );
  }
  function ef(e, t, i) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    (i
      ? ((e = Jc(e, t, En)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        Te(nt),
        Te(Ye),
        we(Ye, e))
      : Te(nt),
      we(nt, i));
  }
  var Kt = null,
    ts = !1,
    il = !1;
  function tf(e) {
    Kt === null ? (Kt = [e]) : Kt.push(e);
  }
  function Ey(e) {
    ((ts = !0), tf(e));
  }
  function un() {
    if (!il && Kt !== null) {
      il = !0;
      var e = 0,
        t = pe;
      try {
        var i = Kt;
        for (pe = 1; e < i.length; e++) {
          var o = i[e];
          do o = o(!0);
          while (o !== null);
        }
        ((Kt = null), (ts = !1));
      } catch (a) {
        throw (Kt !== null && (Kt = Kt.slice(e + 1)), rc(Co, un), a);
      } finally {
        ((pe = t), (il = !1));
      }
    }
    return null;
  }
  var tr = [],
    nr = 0,
    ns = null,
    rs = 0,
    mt = [],
    gt = 0,
    Cn = null,
    Gt = 1,
    Xt = "";
  function An(e, t) {
    ((tr[nr++] = rs), (tr[nr++] = ns), (ns = e), (rs = t));
  }
  function nf(e, t, i) {
    ((mt[gt++] = Gt), (mt[gt++] = Xt), (mt[gt++] = Cn), (Cn = e));
    var o = Gt;
    e = Xt;
    var a = 32 - Pt(o) - 1;
    ((o &= ~(1 << a)), (i += 1));
    var c = 32 - Pt(t) + a;
    if (30 < c) {
      var p = a - (a % 5);
      ((c = (o & ((1 << p) - 1)).toString(32)),
        (o >>= p),
        (a -= p),
        (Gt = (1 << (32 - Pt(t) + a)) | (i << a) | o),
        (Xt = c + e));
    } else ((Gt = (1 << c) | (i << a) | o), (Xt = e));
  }
  function sl(e) {
    e.return !== null && (An(e, 1), nf(e, 1, 0));
  }
  function ol(e) {
    for (; e === ns;) ((ns = tr[--nr]), (tr[nr] = null), (rs = tr[--nr]), (tr[nr] = null));
    for (; e === Cn;)
      ((Cn = mt[--gt]),
        (mt[gt] = null),
        (Xt = mt[--gt]),
        (mt[gt] = null),
        (Gt = mt[--gt]),
        (mt[gt] = null));
  }
  var ft = null,
    dt = null,
    Ee = !1,
    Ct = null;
  function rf(e, t) {
    var i = xt(5, null, null, 0);
    ((i.elementType = "DELETED"),
      (i.stateNode = t),
      (i.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i));
  }
  function sf(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ft = e), (dt = on(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ft = e), (dt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((i = Cn !== null ? { id: Gt, overflow: Xt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }),
              (i = xt(18, null, null, 0)),
              (i.stateNode = t),
              (i.return = e),
              (e.child = i),
              (ft = e),
              (dt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ll(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function al(e) {
    if (Ee) {
      var t = dt;
      if (t) {
        var i = t;
        if (!sf(e, t)) {
          if (ll(e)) throw Error(s(418));
          t = on(i.nextSibling);
          var o = ft;
          t && sf(e, t) ? rf(o, i) : ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (ft = e));
        }
      } else {
        if (ll(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (ft = e));
      }
    }
  }
  function of(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ft = e;
  }
  function is(e) {
    if (e !== ft) return !1;
    if (!Ee) return (of(e), (Ee = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !Jo(e.type, e.memoizedProps))),
      t && (t = dt))
    ) {
      if (ll(e)) throw (lf(), Error(s(418)));
      for (; t;) (rf(e, t), (t = on(t.nextSibling)));
    }
    if ((of(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (t === 0) {
                dt = on(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        dt = null;
      }
    } else dt = ft ? on(e.stateNode.nextSibling) : null;
    return !0;
  }
  function lf() {
    for (var e = dt; e;) e = on(e.nextSibling);
  }
  function rr() {
    ((dt = ft = null), (Ee = !1));
  }
  function ul(e) {
    Ct === null ? (Ct = [e]) : Ct.push(e);
  }
  var Cy = U.ReactCurrentBatchConfig;
  function Zr(e, t, i) {
    if (((e = i.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(s(309));
          var o = i.stateNode;
        }
        if (!o) throw Error(s(147, e));
        var a = o,
          c = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c
          ? t.ref
          : ((t = function (p) {
              var w = a.refs;
              p === null ? delete w[c] : (w[c] = p);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!i._owner) throw Error(s(290, e));
    }
    return e;
  }
  function ss(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function af(e) {
    var t = e._init;
    return t(e._payload);
  }
  function uf(e) {
    function t(E, k) {
      if (e) {
        var C = E.deletions;
        C === null ? ((E.deletions = [k]), (E.flags |= 16)) : C.push(k);
      }
    }
    function i(E, k) {
      if (!e) return null;
      for (; k !== null;) (t(E, k), (k = k.sibling));
      return null;
    }
    function o(E, k) {
      for (E = new Map(); k !== null;)
        (k.key !== null ? E.set(k.key, k) : E.set(k.index, k), (k = k.sibling));
      return E;
    }
    function a(E, k) {
      return ((E = yn(E, k)), (E.index = 0), (E.sibling = null), E);
    }
    function c(E, k, C) {
      return (
        (E.index = C),
        e
          ? ((C = E.alternate),
            C !== null ? ((C = C.index), C < k ? ((E.flags |= 2), k) : C) : ((E.flags |= 2), k))
          : ((E.flags |= 1048576), k)
      );
    }
    function p(E) {
      return (e && E.alternate === null && (E.flags |= 2), E);
    }
    function w(E, k, C, I) {
      return k === null || k.tag !== 6
        ? ((k = ea(C, E.mode, I)), (k.return = E), k)
        : ((k = a(k, C)), (k.return = E), k);
    }
    function S(E, k, C, I) {
      var b = C.type;
      return b === re
        ? N(E, k, C.props.children, I, C.key)
        : k !== null &&
            (k.elementType === b ||
              (typeof b == "object" && b !== null && b.$$typeof === Se && af(b) === k.type))
          ? ((I = a(k, C.props)), (I.ref = Zr(E, k, C)), (I.return = E), I)
          : ((I = Rs(C.type, C.key, C.props, null, E.mode, I)),
            (I.ref = Zr(E, k, C)),
            (I.return = E),
            I);
    }
    function A(E, k, C, I) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== C.containerInfo ||
        k.stateNode.implementation !== C.implementation
        ? ((k = ta(C, E.mode, I)), (k.return = E), k)
        : ((k = a(k, C.children || [])), (k.return = E), k);
    }
    function N(E, k, C, I, b) {
      return k === null || k.tag !== 7
        ? ((k = jn(C, E.mode, I, b)), (k.return = E), k)
        : ((k = a(k, C)), (k.return = E), k);
    }
    function _(E, k, C) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((k = ea("" + k, E.mode, C)), (k.return = E), k);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Z:
            return (
              (C = Rs(k.type, k.key, k.props, null, E.mode, C)),
              (C.ref = Zr(E, null, k)),
              (C.return = E),
              C
            );
          case ie:
            return ((k = ta(k, E.mode, C)), (k.return = E), k);
          case Se:
            var I = k._init;
            return _(E, I(k._payload), C);
        }
        if (Cr(k) || Y(k)) return ((k = jn(k, E.mode, C, null)), (k.return = E), k);
        ss(E, k);
      }
      return null;
    }
    function L(E, k, C, I) {
      var b = k !== null ? k.key : null;
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return b !== null ? null : w(E, k, "" + C, I);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Z:
            return C.key === b ? S(E, k, C, I) : null;
          case ie:
            return C.key === b ? A(E, k, C, I) : null;
          case Se:
            return ((b = C._init), L(E, k, b(C._payload), I));
        }
        if (Cr(C) || Y(C)) return b !== null ? null : N(E, k, C, I, null);
        ss(E, C);
      }
      return null;
    }
    function H(E, k, C, I, b) {
      if ((typeof I == "string" && I !== "") || typeof I == "number")
        return ((E = E.get(C) || null), w(k, E, "" + I, b));
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Z:
            return ((E = E.get(I.key === null ? C : I.key) || null), S(k, E, I, b));
          case ie:
            return ((E = E.get(I.key === null ? C : I.key) || null), A(k, E, I, b));
          case Se:
            var ee = I._init;
            return H(E, k, C, ee(I._payload), b);
        }
        if (Cr(I) || Y(I)) return ((E = E.get(C) || null), N(k, E, I, b, null));
        ss(k, I);
      }
      return null;
    }
    function G(E, k, C, I) {
      for (
        var b = null, ee = null, te = k, ne = (k = 0), He = null;
        te !== null && ne < C.length;
        ne++
      ) {
        te.index > ne ? ((He = te), (te = null)) : (He = te.sibling);
        var de = L(E, te, C[ne], I);
        if (de === null) {
          te === null && (te = He);
          break;
        }
        (e && te && de.alternate === null && t(E, te),
          (k = c(de, k, ne)),
          ee === null ? (b = de) : (ee.sibling = de),
          (ee = de),
          (te = He));
      }
      if (ne === C.length) return (i(E, te), Ee && An(E, ne), b);
      if (te === null) {
        for (; ne < C.length; ne++)
          ((te = _(E, C[ne], I)),
            te !== null &&
              ((k = c(te, k, ne)), ee === null ? (b = te) : (ee.sibling = te), (ee = te)));
        return (Ee && An(E, ne), b);
      }
      for (te = o(E, te); ne < C.length; ne++)
        ((He = H(te, E, ne, C[ne], I)),
          He !== null &&
            (e && He.alternate !== null && te.delete(He.key === null ? ne : He.key),
            (k = c(He, k, ne)),
            ee === null ? (b = He) : (ee.sibling = He),
            (ee = He)));
      return (
        e &&
          te.forEach(function (vn) {
            return t(E, vn);
          }),
        Ee && An(E, ne),
        b
      );
    }
    function Q(E, k, C, I) {
      var b = Y(C);
      if (typeof b != "function") throw Error(s(150));
      if (((C = b.call(C)), C == null)) throw Error(s(151));
      for (
        var ee = (b = null), te = k, ne = (k = 0), He = null, de = C.next();
        te !== null && !de.done;
        ne++, de = C.next()
      ) {
        te.index > ne ? ((He = te), (te = null)) : (He = te.sibling);
        var vn = L(E, te, de.value, I);
        if (vn === null) {
          te === null && (te = He);
          break;
        }
        (e && te && vn.alternate === null && t(E, te),
          (k = c(vn, k, ne)),
          ee === null ? (b = vn) : (ee.sibling = vn),
          (ee = vn),
          (te = He));
      }
      if (de.done) return (i(E, te), Ee && An(E, ne), b);
      if (te === null) {
        for (; !de.done; ne++, de = C.next())
          ((de = _(E, de.value, I)),
            de !== null &&
              ((k = c(de, k, ne)), ee === null ? (b = de) : (ee.sibling = de), (ee = de)));
        return (Ee && An(E, ne), b);
      }
      for (te = o(E, te); !de.done; ne++, de = C.next())
        ((de = H(te, E, ne, de.value, I)),
          de !== null &&
            (e && de.alternate !== null && te.delete(de.key === null ? ne : de.key),
            (k = c(de, k, ne)),
            ee === null ? (b = de) : (ee.sibling = de),
            (ee = de)));
      return (
        e &&
          te.forEach(function (sv) {
            return t(E, sv);
          }),
        Ee && An(E, ne),
        b
      );
    }
    function _e(E, k, C, I) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === re &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case Z:
            e: {
              for (var b = C.key, ee = k; ee !== null;) {
                if (ee.key === b) {
                  if (((b = C.type), b === re)) {
                    if (ee.tag === 7) {
                      (i(E, ee.sibling), (k = a(ee, C.props.children)), (k.return = E), (E = k));
                      break e;
                    }
                  } else if (
                    ee.elementType === b ||
                    (typeof b == "object" && b !== null && b.$$typeof === Se && af(b) === ee.type)
                  ) {
                    (i(E, ee.sibling),
                      (k = a(ee, C.props)),
                      (k.ref = Zr(E, ee, C)),
                      (k.return = E),
                      (E = k));
                    break e;
                  }
                  i(E, ee);
                  break;
                } else t(E, ee);
                ee = ee.sibling;
              }
              C.type === re
                ? ((k = jn(C.props.children, E.mode, I, C.key)), (k.return = E), (E = k))
                : ((I = Rs(C.type, C.key, C.props, null, E.mode, I)),
                  (I.ref = Zr(E, k, C)),
                  (I.return = E),
                  (E = I));
            }
            return p(E);
          case ie:
            e: {
              for (ee = C.key; k !== null;) {
                if (k.key === ee)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === C.containerInfo &&
                    k.stateNode.implementation === C.implementation
                  ) {
                    (i(E, k.sibling), (k = a(k, C.children || [])), (k.return = E), (E = k));
                    break e;
                  } else {
                    i(E, k);
                    break;
                  }
                else t(E, k);
                k = k.sibling;
              }
              ((k = ta(C, E.mode, I)), (k.return = E), (E = k));
            }
            return p(E);
          case Se:
            return ((ee = C._init), _e(E, k, ee(C._payload), I));
        }
        if (Cr(C)) return G(E, k, C, I);
        if (Y(C)) return Q(E, k, C, I);
        ss(E, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          k !== null && k.tag === 6
            ? (i(E, k.sibling), (k = a(k, C)), (k.return = E), (E = k))
            : (i(E, k), (k = ea(C, E.mode, I)), (k.return = E), (E = k)),
          p(E))
        : i(E, k);
    }
    return _e;
  }
  var ir = uf(!0),
    cf = uf(!1),
    os = ln(null),
    ls = null,
    sr = null,
    cl = null;
  function fl() {
    cl = sr = ls = null;
  }
  function dl(e) {
    var t = os.current;
    (Te(os), (e._currentValue = t));
  }
  function hl(e, t, i) {
    for (; e !== null;) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function or(e, t) {
    ((ls = e),
      (cl = sr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (it = !0), (e.firstContext = null)));
  }
  function yt(e) {
    var t = e._currentValue;
    if (cl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), sr === null)) {
        if (ls === null) throw Error(s(308));
        ((sr = e), (ls.dependencies = { lanes: 0, firstContext: e }));
      } else sr = sr.next = e;
    return t;
  }
  var Mn = null;
  function pl(e) {
    Mn === null ? (Mn = [e]) : Mn.push(e);
  }
  function ff(e, t, i, o) {
    var a = t.interleaved;
    return (
      a === null ? ((i.next = i), pl(t)) : ((i.next = a.next), (a.next = i)),
      (t.interleaved = i),
      Yt(e, o)
    );
  }
  function Yt(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null;)
      ((e.childLanes |= t),
        (i = e.alternate),
        i !== null && (i.childLanes |= t),
        (i = e),
        (e = e.return));
    return i.tag === 3 ? i.stateNode : null;
  }
  var cn = !1;
  function ml(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function df(e, t) {
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
  function Qt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function fn(e, t, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (ae & 2) !== 0)) {
      var a = o.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (o.pending = t),
        Yt(e, i)
      );
    }
    return (
      (a = o.interleaved),
      a === null ? ((t.next = t), pl(o)) : ((t.next = a.next), (a.next = t)),
      (o.interleaved = t),
      Yt(e, i)
    );
  }
  function as(e, t, i) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (i |= o), (t.lanes = i), Ro(e, i));
    }
  }
  function hf(e, t) {
    var i = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), i === o)) {
      var a = null,
        c = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var p = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          (c === null ? (a = c = p) : (c = c.next = p), (i = i.next));
        } while (i !== null);
        c === null ? (a = c = t) : (c = c.next = t);
      } else a = c = t;
      ((i = {
        baseState: o.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: c,
        shared: o.shared,
        effects: o.effects,
      }),
        (e.updateQueue = i));
      return;
    }
    ((e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = t) : (e.next = t),
      (i.lastBaseUpdate = t));
  }
  function us(e, t, i, o) {
    var a = e.updateQueue;
    cn = !1;
    var c = a.firstBaseUpdate,
      p = a.lastBaseUpdate,
      w = a.shared.pending;
    if (w !== null) {
      a.shared.pending = null;
      var S = w,
        A = S.next;
      ((S.next = null), p === null ? (c = A) : (p.next = A), (p = S));
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (w = N.lastBaseUpdate),
        w !== p && (w === null ? (N.firstBaseUpdate = A) : (w.next = A), (N.lastBaseUpdate = S)));
    }
    if (c !== null) {
      var _ = a.baseState;
      ((p = 0), (N = A = S = null), (w = c));
      do {
        var L = w.lane,
          H = w.eventTime;
        if ((o & L) === L) {
          N !== null &&
            (N = N.next =
              {
                eventTime: H,
                lane: 0,
                tag: w.tag,
                payload: w.payload,
                callback: w.callback,
                next: null,
              });
          e: {
            var G = e,
              Q = w;
            switch (((L = t), (H = i), Q.tag)) {
              case 1:
                if (((G = Q.payload), typeof G == "function")) {
                  _ = G.call(H, _, L);
                  break e;
                }
                _ = G;
                break e;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = Q.payload), (L = typeof G == "function" ? G.call(H, _, L) : G), L == null)
                )
                  break e;
                _ = W({}, _, L);
                break e;
              case 2:
                cn = !0;
            }
          }
          w.callback !== null &&
            w.lane !== 0 &&
            ((e.flags |= 64), (L = a.effects), L === null ? (a.effects = [w]) : L.push(w));
        } else
          ((H = {
            eventTime: H,
            lane: L,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null,
          }),
            N === null ? ((A = N = H), (S = _)) : (N = N.next = H),
            (p |= L));
        if (((w = w.next), w === null)) {
          if (((w = a.shared.pending), w === null)) break;
          ((L = w),
            (w = L.next),
            (L.next = null),
            (a.lastBaseUpdate = L),
            (a.shared.pending = null));
        }
      } while (!0);
      if (
        (N === null && (S = _),
        (a.baseState = S),
        (a.firstBaseUpdate = A),
        (a.lastBaseUpdate = N),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do ((p |= a.lane), (a = a.next));
        while (a !== t);
      } else c === null && (a.shared.lanes = 0);
      ((Vn |= p), (e.lanes = p), (e.memoizedState = _));
    }
  }
  function pf(e, t, i) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          a = o.callback;
        if (a !== null) {
          if (((o.callback = null), (o = i), typeof a != "function")) throw Error(s(191, a));
          a.call(o);
        }
      }
  }
  var qr = {},
    Ot = ln(qr),
    Jr = ln(qr),
    ei = ln(qr);
  function Rn(e) {
    if (e === qr) throw Error(s(174));
    return e;
  }
  function gl(e, t) {
    switch ((we(ei, t), we(Jr, e), we(Ot, qr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : yo(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = yo(t, e)));
    }
    (Te(Ot), we(Ot, t));
  }
  function lr() {
    (Te(Ot), Te(Jr), Te(ei));
  }
  function mf(e) {
    Rn(ei.current);
    var t = Rn(Ot.current),
      i = yo(t, e.type);
    t !== i && (we(Jr, e), we(Ot, i));
  }
  function yl(e) {
    Jr.current === e && (Te(Ot), Te(Jr));
  }
  var Ae = ln(0);
  function cs(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!"))
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
  var vl = [];
  function wl() {
    for (var e = 0; e < vl.length; e++) vl[e]._workInProgressVersionPrimary = null;
    vl.length = 0;
  }
  var fs = U.ReactCurrentDispatcher,
    xl = U.ReactCurrentBatchConfig,
    Dn = 0,
    Me = null,
    Oe = null,
    Ue = null,
    ds = !1,
    ti = !1,
    ni = 0,
    Ay = 0;
  function Qe() {
    throw Error(s(321));
  }
  function Sl(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!Et(e[i], t[i])) return !1;
    return !0;
  }
  function kl(e, t, i, o, a, c) {
    if (
      ((Dn = c),
      (Me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (fs.current = e === null || e.memoizedState === null ? Vy : Ly),
      (e = i(o, a)),
      ti)
    ) {
      c = 0;
      do {
        if (((ti = !1), (ni = 0), 25 <= c)) throw Error(s(301));
        ((c += 1), (Ue = Oe = null), (t.updateQueue = null), (fs.current = Ny), (e = i(o, a)));
      } while (ti);
    }
    if (
      ((fs.current = ms),
      (t = Oe !== null && Oe.next !== null),
      (Dn = 0),
      (Ue = Oe = Me = null),
      (ds = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function Tl() {
    var e = ni !== 0;
    return ((ni = 0), e);
  }
  function zt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ue === null ? (Me.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue);
  }
  function vt() {
    if (Oe === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = Ue === null ? Me.memoizedState : Ue.next;
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
        Ue === null ? (Me.memoizedState = Ue = e) : (Ue = Ue.next = e));
    }
    return Ue;
  }
  function ri(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pl(e) {
    var t = vt(),
      i = t.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var o = Oe,
      a = o.baseQueue,
      c = i.pending;
    if (c !== null) {
      if (a !== null) {
        var p = a.next;
        ((a.next = c.next), (c.next = p));
      }
      ((o.baseQueue = a = c), (i.pending = null));
    }
    if (a !== null) {
      ((c = a.next), (o = o.baseState));
      var w = (p = null),
        S = null,
        A = c;
      do {
        var N = A.lane;
        if ((Dn & N) === N)
          (S !== null &&
            (S = S.next =
              {
                lane: 0,
                action: A.action,
                hasEagerState: A.hasEagerState,
                eagerState: A.eagerState,
                next: null,
              }),
            (o = A.hasEagerState ? A.eagerState : e(o, A.action)));
        else {
          var _ = {
            lane: N,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null,
          };
          (S === null ? ((w = S = _), (p = o)) : (S = S.next = _), (Me.lanes |= N), (Vn |= N));
        }
        A = A.next;
      } while (A !== null && A !== c);
      (S === null ? (p = o) : (S.next = w),
        Et(o, t.memoizedState) || (it = !0),
        (t.memoizedState = o),
        (t.baseState = p),
        (t.baseQueue = S),
        (i.lastRenderedState = o));
    }
    if (((e = i.interleaved), e !== null)) {
      a = e;
      do ((c = a.lane), (Me.lanes |= c), (Vn |= c), (a = a.next));
      while (a !== e);
    } else a === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function El(e) {
    var t = vt(),
      i = t.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch,
      a = i.pending,
      c = t.memoizedState;
    if (a !== null) {
      i.pending = null;
      var p = (a = a.next);
      do ((c = e(c, p.action)), (p = p.next));
      while (p !== a);
      (Et(c, t.memoizedState) || (it = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (i.lastRenderedState = c));
    }
    return [c, o];
  }
  function gf() {}
  function yf(e, t) {
    var i = Me,
      o = vt(),
      a = t(),
      c = !Et(o.memoizedState, a);
    if (
      (c && ((o.memoizedState = a), (it = !0)),
      (o = o.queue),
      Cl(xf.bind(null, i, o, e), [e]),
      o.getSnapshot !== t || c || (Ue !== null && Ue.memoizedState.tag & 1))
    ) {
      if (((i.flags |= 2048), ii(9, wf.bind(null, i, o, a, t), void 0, null), We === null))
        throw Error(s(349));
      (Dn & 30) !== 0 || vf(i, t, a);
    }
    return a;
  }
  function vf(e, t, i) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = Me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Me.updateQueue = t), (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e)));
  }
  function wf(e, t, i, o) {
    ((t.value = i), (t.getSnapshot = o), Sf(t) && kf(e));
  }
  function xf(e, t, i) {
    return i(function () {
      Sf(t) && kf(e);
    });
  }
  function Sf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !Et(e, i);
    } catch {
      return !0;
    }
  }
  function kf(e) {
    var t = Yt(e, 1);
    t !== null && Dt(t, e, 1, -1);
  }
  function Tf(e) {
    var t = zt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ri,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Dy.bind(null, Me, e)),
      [t.memoizedState, e]
    );
  }
  function ii(e, t, i, o) {
    return (
      (e = { tag: e, create: t, destroy: i, deps: o, next: null }),
      (t = Me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Me.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((i = t.lastEffect),
          i === null
            ? (t.lastEffect = e.next = e)
            : ((o = i.next), (i.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function Pf() {
    return vt().memoizedState;
  }
  function hs(e, t, i, o) {
    var a = zt();
    ((Me.flags |= e), (a.memoizedState = ii(1 | t, i, void 0, o === void 0 ? null : o)));
  }
  function ps(e, t, i, o) {
    var a = vt();
    o = o === void 0 ? null : o;
    var c = void 0;
    if (Oe !== null) {
      var p = Oe.memoizedState;
      if (((c = p.destroy), o !== null && Sl(o, p.deps))) {
        a.memoizedState = ii(t, i, c, o);
        return;
      }
    }
    ((Me.flags |= e), (a.memoizedState = ii(1 | t, i, c, o)));
  }
  function Ef(e, t) {
    return hs(8390656, 8, e, t);
  }
  function Cl(e, t) {
    return ps(2048, 8, e, t);
  }
  function Cf(e, t) {
    return ps(4, 2, e, t);
  }
  function Af(e, t) {
    return ps(4, 4, e, t);
  }
  function Mf(e, t) {
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
  function Rf(e, t, i) {
    return ((i = i != null ? i.concat([e]) : null), ps(4, 4, Mf.bind(null, t, e), i));
  }
  function Al() {}
  function Df(e, t) {
    var i = vt();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return o !== null && t !== null && Sl(t, o[1]) ? o[0] : ((i.memoizedState = [e, t]), e);
  }
  function Vf(e, t) {
    var i = vt();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return o !== null && t !== null && Sl(t, o[1])
      ? o[0]
      : ((e = e()), (i.memoizedState = [e, t]), e);
  }
  function Lf(e, t, i) {
    return (Dn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (it = !0)), (e.memoizedState = i))
      : (Et(i, t) || ((i = lc()), (Me.lanes |= i), (Vn |= i), (e.baseState = !0)), t);
  }
  function My(e, t) {
    var i = pe;
    ((pe = i !== 0 && 4 > i ? i : 4), e(!0));
    var o = xl.transition;
    xl.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((pe = i), (xl.transition = o));
    }
  }
  function Nf() {
    return vt().memoizedState;
  }
  function Ry(e, t, i) {
    var o = mn(e);
    if (((i = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null }), _f(e)))
      jf(t, i);
    else if (((i = ff(e, t, i, o)), i !== null)) {
      var a = Je();
      (Dt(i, e, o, a), Ff(i, t, o));
    }
  }
  function Dy(e, t, i) {
    var o = mn(e),
      a = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (_f(e)) jf(t, a);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var p = t.lastRenderedState,
            w = c(p, i);
          if (((a.hasEagerState = !0), (a.eagerState = w), Et(w, p))) {
            var S = t.interleaved;
            (S === null ? ((a.next = a), pl(t)) : ((a.next = S.next), (S.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((i = ff(e, t, a, o)), i !== null && ((a = Je()), Dt(i, e, o, a), Ff(i, t, o)));
    }
  }
  function _f(e) {
    var t = e.alternate;
    return e === Me || (t !== null && t === Me);
  }
  function jf(e, t) {
    ti = ds = !0;
    var i = e.pending;
    (i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (e.pending = t));
  }
  function Ff(e, t, i) {
    if ((i & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (i |= o), (t.lanes = i), Ro(e, i));
    }
  }
  var ms = {
      readContext: yt,
      useCallback: Qe,
      useContext: Qe,
      useEffect: Qe,
      useImperativeHandle: Qe,
      useInsertionEffect: Qe,
      useLayoutEffect: Qe,
      useMemo: Qe,
      useReducer: Qe,
      useRef: Qe,
      useState: Qe,
      useDebugValue: Qe,
      useDeferredValue: Qe,
      useTransition: Qe,
      useMutableSource: Qe,
      useSyncExternalStore: Qe,
      useId: Qe,
      unstable_isNewReconciler: !1,
    },
    Vy = {
      readContext: yt,
      useCallback: function (e, t) {
        return ((zt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: yt,
      useEffect: Ef,
      useImperativeHandle: function (e, t, i) {
        return ((i = i != null ? i.concat([e]) : null), hs(4194308, 4, Mf.bind(null, t, e), i));
      },
      useLayoutEffect: function (e, t) {
        return hs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return hs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = zt();
        return ((t = t === void 0 ? null : t), (e = e()), (i.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, i) {
        var o = zt();
        return (
          (t = i !== void 0 ? i(t) : t),
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
          (e = e.dispatch = Ry.bind(null, Me, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = zt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Tf,
      useDebugValue: Al,
      useDeferredValue: function (e) {
        return (zt().memoizedState = e);
      },
      useTransition: function () {
        var e = Tf(!1),
          t = e[0];
        return ((e = My.bind(null, e[1])), (zt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, i) {
        var o = Me,
          a = zt();
        if (Ee) {
          if (i === void 0) throw Error(s(407));
          i = i();
        } else {
          if (((i = t()), We === null)) throw Error(s(349));
          (Dn & 30) !== 0 || vf(o, t, i);
        }
        a.memoizedState = i;
        var c = { value: i, getSnapshot: t };
        return (
          (a.queue = c),
          Ef(xf.bind(null, o, c, e), [e]),
          (o.flags |= 2048),
          ii(9, wf.bind(null, o, c, i, t), void 0, null),
          i
        );
      },
      useId: function () {
        var e = zt(),
          t = We.identifierPrefix;
        if (Ee) {
          var i = Xt,
            o = Gt;
          ((i = (o & ~(1 << (32 - Pt(o) - 1))).toString(32) + i),
            (t = ":" + t + "R" + i),
            (i = ni++),
            0 < i && (t += "H" + i.toString(32)),
            (t += ":"));
        } else ((i = Ay++), (t = ":" + t + "r" + i.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ly = {
      readContext: yt,
      useCallback: Df,
      useContext: yt,
      useEffect: Cl,
      useImperativeHandle: Rf,
      useInsertionEffect: Cf,
      useLayoutEffect: Af,
      useMemo: Vf,
      useReducer: Pl,
      useRef: Pf,
      useState: function () {
        return Pl(ri);
      },
      useDebugValue: Al,
      useDeferredValue: function (e) {
        var t = vt();
        return Lf(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = Pl(ri)[0],
          t = vt().memoizedState;
        return [e, t];
      },
      useMutableSource: gf,
      useSyncExternalStore: yf,
      useId: Nf,
      unstable_isNewReconciler: !1,
    },
    Ny = {
      readContext: yt,
      useCallback: Df,
      useContext: yt,
      useEffect: Cl,
      useImperativeHandle: Rf,
      useInsertionEffect: Cf,
      useLayoutEffect: Af,
      useMemo: Vf,
      useReducer: El,
      useRef: Pf,
      useState: function () {
        return El(ri);
      },
      useDebugValue: Al,
      useDeferredValue: function (e) {
        var t = vt();
        return Oe === null ? (t.memoizedState = e) : Lf(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = El(ri)[0],
          t = vt().memoizedState;
        return [e, t];
      },
      useMutableSource: gf,
      useSyncExternalStore: yf,
      useId: Nf,
      unstable_isNewReconciler: !1,
    };
  function At(e, t) {
    if (e && e.defaultProps) {
      ((t = W({}, t)), (e = e.defaultProps));
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function Ml(e, t, i, o) {
    ((t = e.memoizedState),
      (i = i(o, t)),
      (i = i == null ? t : W({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var gs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Tn(e) === e : !1;
    },
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var o = Je(),
        a = mn(e),
        c = Qt(o, a);
      ((c.payload = t),
        i != null && (c.callback = i),
        (t = fn(e, c, a)),
        t !== null && (Dt(t, e, a, o), as(t, e, a)));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var o = Je(),
        a = mn(e),
        c = Qt(o, a);
      ((c.tag = 1),
        (c.payload = t),
        i != null && (c.callback = i),
        (t = fn(e, c, a)),
        t !== null && (Dt(t, e, a, o), as(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = Je(),
        o = mn(e),
        a = Qt(i, o);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = fn(e, a, o)),
        t !== null && (Dt(t, e, o, i), as(t, e, o)));
    },
  };
  function If(e, t, i, o, a, c, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, c, p)
        : t.prototype && t.prototype.isPureReactComponent
          ? !$r(i, o) || !$r(a, c)
          : !0
    );
  }
  function Of(e, t, i) {
    var o = !1,
      a = an,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = yt(c))
        : ((a = rt(t) ? En : Ye.current),
          (o = t.contextTypes),
          (c = (o = o != null) ? er(e, a) : an)),
      (t = new t(i, c)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = gs),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function zf(e, t, i, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(i, o),
      t.state !== e && gs.enqueueReplaceState(t, t.state, null));
  }
  function Rl(e, t, i, o) {
    var a = e.stateNode;
    ((a.props = i), (a.state = e.memoizedState), (a.refs = {}), ml(e));
    var c = t.contextType;
    (typeof c == "object" && c !== null
      ? (a.context = yt(c))
      : ((c = rt(t) ? En : Ye.current), (a.context = er(e, c))),
      (a.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && (Ml(e, t, c, i), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((t = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(),
        t !== a.state && gs.enqueueReplaceState(a, a.state, null),
        us(e, i, a, o),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function ar(e, t) {
    try {
      var i = "",
        o = t;
      do ((i += ce(o)), (o = o.return));
      while (o);
      var a = i;
    } catch (c) {
      a =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Dl(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function Vl(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var _y = typeof WeakMap == "function" ? WeakMap : Map;
  function Bf(e, t, i) {
    ((i = Qt(-1, i)), (i.tag = 3), (i.payload = { element: null }));
    var o = t.value;
    return (
      (i.callback = function () {
        (Ts || ((Ts = !0), (Gl = o)), Vl(e, t));
      }),
      i
    );
  }
  function Uf(e, t, i) {
    ((i = Qt(-1, i)), (i.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var a = t.value;
      ((i.payload = function () {
        return o(a);
      }),
        (i.callback = function () {
          Vl(e, t);
        }));
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (i.callback = function () {
          (Vl(e, t),
            typeof o != "function" && (hn === null ? (hn = new Set([this])) : hn.add(this)));
          var p = t.stack;
          this.componentDidCatch(t.value, { componentStack: p !== null ? p : "" });
        }),
      i
    );
  }
  function Wf(e, t, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new _y();
      var a = new Set();
      o.set(t, a);
    } else ((a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a)));
    a.has(i) || (a.add(i), (e = Yy.bind(null, e, t, i)), t.then(e, e));
  }
  function Hf(e) {
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
  function $f(e, t, i, o, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null ? (i.tag = 17) : ((t = Qt(-1, 1)), (t.tag = 2), fn(i, t, 1))),
            (i.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var jy = U.ReactCurrentOwner,
    it = !1;
  function qe(e, t, i, o) {
    t.child = e === null ? cf(t, null, i, o) : ir(t, e.child, i, o);
  }
  function Kf(e, t, i, o, a) {
    i = i.render;
    var c = t.ref;
    return (
      or(t, a),
      (o = kl(e, t, i, o, c, a)),
      (i = Tl()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), bt(e, t, a))
        : (Ee && i && sl(t), (t.flags |= 1), qe(e, t, o, a), t.child)
    );
  }
  function Gf(e, t, i, o, a) {
    if (e === null) {
      var c = i.type;
      return typeof c == "function" &&
        !Jl(c) &&
        c.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), Xf(e, t, c, o, a))
        : ((e = Rs(i.type, null, o, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((c = e.child), (e.lanes & a) === 0)) {
      var p = c.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : $r), i(p, o) && e.ref === t.ref))
        return bt(e, t, a);
    }
    return ((t.flags |= 1), (e = yn(c, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Xf(e, t, i, o, a) {
    if (e !== null) {
      var c = e.memoizedProps;
      if ($r(c, o) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = o = c), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (it = !0);
        else return ((t.lanes = e.lanes), bt(e, t, a));
    }
    return Ll(e, t, i, o, a);
  }
  function Yf(e, t, i) {
    var o = t.pendingProps,
      a = o.children,
      c = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          we(cr, ht),
          (ht |= i));
      else {
        if ((i & 1073741824) === 0)
          return (
            (e = c !== null ? c.baseLanes | i : i),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            we(cr, ht),
            (ht |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = c !== null ? c.baseLanes : i),
          we(cr, ht),
          (ht |= o));
      }
    else
      (c !== null ? ((o = c.baseLanes | i), (t.memoizedState = null)) : (o = i),
        we(cr, ht),
        (ht |= o));
    return (qe(e, t, a, i), t.child);
  }
  function Qf(e, t) {
    var i = t.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ll(e, t, i, o, a) {
    var c = rt(i) ? En : Ye.current;
    return (
      (c = er(t, c)),
      or(t, a),
      (i = kl(e, t, i, o, c, a)),
      (o = Tl()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), bt(e, t, a))
        : (Ee && o && sl(t), (t.flags |= 1), qe(e, t, i, a), t.child)
    );
  }
  function bf(e, t, i, o, a) {
    if (rt(i)) {
      var c = !0;
      es(t);
    } else c = !1;
    if ((or(t, a), t.stateNode === null)) (vs(e, t), Of(t, i, o), Rl(t, i, o, a), (o = !0));
    else if (e === null) {
      var p = t.stateNode,
        w = t.memoizedProps;
      p.props = w;
      var S = p.context,
        A = i.contextType;
      typeof A == "object" && A !== null
        ? (A = yt(A))
        : ((A = rt(i) ? En : Ye.current), (A = er(t, A)));
      var N = i.getDerivedStateFromProps,
        _ = typeof N == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      (_ ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((w !== o || S !== A) && zf(t, p, o, A)),
        (cn = !1));
      var L = t.memoizedState;
      ((p.state = L),
        us(t, o, p, a),
        (S = t.memoizedState),
        w !== o || L !== S || nt.current || cn
          ? (typeof N == "function" && (Ml(t, i, N, o), (S = t.memoizedState)),
            (w = cn || If(t, i, w, o, L, S, A))
              ? (_ ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" && p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = S)),
            (p.props = o),
            (p.state = S),
            (p.context = A),
            (o = w))
          : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), (o = !1)));
    } else {
      ((p = t.stateNode),
        df(e, t),
        (w = t.memoizedProps),
        (A = t.type === t.elementType ? w : At(t.type, w)),
        (p.props = A),
        (_ = t.pendingProps),
        (L = p.context),
        (S = i.contextType),
        typeof S == "object" && S !== null
          ? (S = yt(S))
          : ((S = rt(i) ? En : Ye.current), (S = er(t, S))));
      var H = i.getDerivedStateFromProps;
      ((N = typeof H == "function" || typeof p.getSnapshotBeforeUpdate == "function") ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((w !== _ || L !== S) && zf(t, p, o, S)),
        (cn = !1),
        (L = t.memoizedState),
        (p.state = L),
        us(t, o, p, a));
      var G = t.memoizedState;
      w !== _ || L !== G || nt.current || cn
        ? (typeof H == "function" && (Ml(t, i, H, o), (G = t.memoizedState)),
          (A = cn || If(t, i, A, o, L, G, S) || !1)
            ? (N ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(o, G, S),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(o, G, S)),
              typeof p.componentDidUpdate == "function" && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (w === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (w === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = G)),
          (p.props = o),
          (p.state = G),
          (p.context = S),
          (o = A))
        : (typeof p.componentDidUpdate != "function" ||
            (w === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (w === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Nl(e, t, i, o, c, a);
  }
  function Nl(e, t, i, o, a, c) {
    Qf(e, t);
    var p = (t.flags & 128) !== 0;
    if (!o && !p) return (a && ef(t, i, !1), bt(e, t, c));
    ((o = t.stateNode), (jy.current = t));
    var w = p && typeof i.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && p
        ? ((t.child = ir(t, e.child, null, c)), (t.child = ir(t, null, w, c)))
        : qe(e, t, w, c),
      (t.memoizedState = o.state),
      a && ef(t, i, !0),
      t.child
    );
  }
  function Zf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? qc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && qc(e, t.context, !1),
      gl(e, t.containerInfo));
  }
  function qf(e, t, i, o, a) {
    return (rr(), ul(a), (t.flags |= 256), qe(e, t, i, o), t.child);
  }
  var _l = { dehydrated: null, treeContext: null, retryLane: 0 };
  function jl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Jf(e, t, i) {
    var o = t.pendingProps,
      a = Ae.current,
      c = !1,
      p = (t.flags & 128) !== 0,
      w;
    if (
      ((w = p) || (w = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      w ? ((c = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (a |= 1),
      we(Ae, a & 1),
      e === null)
    )
      return (
        al(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((p = o.children),
            (e = o.fallback),
            c
              ? ((o = t.mode),
                (c = t.child),
                (p = { mode: "hidden", children: p }),
                (o & 1) === 0 && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = p))
                  : (c = Ds(p, o, 0, null)),
                (e = jn(e, o, i, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = jl(i)),
                (t.memoizedState = _l),
                e)
              : Fl(t, p))
      );
    if (((a = e.memoizedState), a !== null && ((w = a.dehydrated), w !== null)))
      return Fy(e, t, p, o, w, a, i);
    if (c) {
      ((c = o.fallback), (p = t.mode), (a = e.child), (w = a.sibling));
      var S = { mode: "hidden", children: o.children };
      return (
        (p & 1) === 0 && t.child !== a
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = S), (t.deletions = null))
          : ((o = yn(a, S)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
        w !== null ? (c = yn(w, c)) : ((c = jn(c, p, i, null)), (c.flags |= 2)),
        (c.return = t),
        (o.return = t),
        (o.sibling = c),
        (t.child = o),
        (o = c),
        (c = t.child),
        (p = e.child.memoizedState),
        (p =
          p === null
            ? jl(i)
            : { baseLanes: p.baseLanes | i, cachePool: null, transitions: p.transitions }),
        (c.memoizedState = p),
        (c.childLanes = e.childLanes & ~i),
        (t.memoizedState = _l),
        o
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (o = yn(c, { mode: "visible", children: o.children })),
      (t.mode & 1) === 0 && (o.lanes = i),
      (o.return = t),
      (o.sibling = null),
      e !== null &&
        ((i = t.deletions), i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function Fl(e, t) {
    return (
      (t = Ds({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ys(e, t, i, o) {
    return (
      o !== null && ul(o),
      ir(t, e.child, null, i),
      (e = Fl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Fy(e, t, i, o, a, c, p) {
    if (i)
      return t.flags & 256
        ? ((t.flags &= -257), (o = Dl(Error(s(422)))), ys(e, t, p, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((c = o.fallback),
            (a = t.mode),
            (o = Ds({ mode: "visible", children: o.children }, a, 0, null)),
            (c = jn(c, a, p, null)),
            (c.flags |= 2),
            (o.return = t),
            (c.return = t),
            (o.sibling = c),
            (t.child = o),
            (t.mode & 1) !== 0 && ir(t, e.child, null, p),
            (t.child.memoizedState = jl(p)),
            (t.memoizedState = _l),
            c);
    if ((t.mode & 1) === 0) return ys(e, t, p, null);
    if (a.data === "$!") {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var w = o.dgst;
      return ((o = w), (c = Error(s(419))), (o = Dl(c, o, void 0)), ys(e, t, p, o));
    }
    if (((w = (p & e.childLanes) !== 0), it || w)) {
      if (((o = We), o !== null)) {
        switch (p & -p) {
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
        ((a = (a & (o.suspendedLanes | p)) !== 0 ? 0 : a),
          a !== 0 && a !== c.retryLane && ((c.retryLane = a), Yt(e, a), Dt(o, e, a, -1)));
      }
      return (ql(), (o = Dl(Error(s(421)))), ys(e, t, p, o));
    }
    return a.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Qy.bind(null, e)), (a._reactRetry = t), null)
      : ((e = c.treeContext),
        (dt = on(a.nextSibling)),
        (ft = t),
        (Ee = !0),
        (Ct = null),
        e !== null &&
          ((mt[gt++] = Gt),
          (mt[gt++] = Xt),
          (mt[gt++] = Cn),
          (Gt = e.id),
          (Xt = e.overflow),
          (Cn = t)),
        (t = Fl(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function ed(e, t, i) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), hl(e.return, t, i));
  }
  function Il(e, t, i, o, a) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: i,
          tailMode: a,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = o),
        (c.tail = i),
        (c.tailMode = a));
  }
  function td(e, t, i) {
    var o = t.pendingProps,
      a = o.revealOrder,
      c = o.tail;
    if ((qe(e, t, o.children, i), (o = Ae.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && ed(e, i, t);
          else if (e.tag === 19) ed(e, i, t);
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
    if ((we(Ae, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (i = t.child, a = null; i !== null;)
            ((e = i.alternate), e !== null && cs(e) === null && (a = i), (i = i.sibling));
          ((i = a),
            i === null ? ((a = t.child), (t.child = null)) : ((a = i.sibling), (i.sibling = null)),
            Il(t, !1, a, i, c));
          break;
        case "backwards":
          for (i = null, a = t.child, t.child = null; a !== null;) {
            if (((e = a.alternate), e !== null && cs(e) === null)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = i), (i = a), (a = e));
          }
          Il(t, !0, i, null, c);
          break;
        case "together":
          Il(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function vs(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function bt(e, t, i) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Vn |= t.lanes), (i & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, i = yn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null;)
        ((e = e.sibling), (i = i.sibling = yn(e, e.pendingProps)), (i.return = t));
      i.sibling = null;
    }
    return t.child;
  }
  function Iy(e, t, i) {
    switch (t.tag) {
      case 3:
        (Zf(t), rr());
        break;
      case 5:
        mf(t);
        break;
      case 1:
        rt(t.type) && es(t);
        break;
      case 4:
        gl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value;
        (we(os, o._currentValue), (o._currentValue = a));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (we(Ae, Ae.current & 1), (t.flags |= 128), null)
            : (i & t.child.childLanes) !== 0
              ? Jf(e, t, i)
              : (we(Ae, Ae.current & 1), (e = bt(e, t, i)), e !== null ? e.sibling : null);
        we(Ae, Ae.current & 1);
        break;
      case 19:
        if (((o = (i & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return td(e, t, i);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          we(Ae, Ae.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Yf(e, t, i));
    }
    return bt(e, t, i);
  }
  var nd, Ol, rd, id;
  ((nd = function (e, t) {
    for (var i = t.child; i !== null;) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        ((i.child.return = i), (i = i.child));
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null;) {
        if (i.return === null || i.return === t) return;
        i = i.return;
      }
      ((i.sibling.return = i.return), (i = i.sibling));
    }
  }),
    (Ol = function () {}),
    (rd = function (e, t, i, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        ((e = t.stateNode), Rn(Ot.current));
        var c = null;
        switch (i) {
          case "input":
            ((a = ho(e, a)), (o = ho(e, o)), (c = []));
            break;
          case "select":
            ((a = W({}, a, { value: void 0 })), (o = W({}, o, { value: void 0 })), (c = []));
            break;
          case "textarea":
            ((a = go(e, a)), (o = go(e, o)), (c = []));
            break;
          default:
            typeof a.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Zi);
        }
        vo(i, o);
        var p;
        i = null;
        for (A in a)
          if (!o.hasOwnProperty(A) && a.hasOwnProperty(A) && a[A] != null)
            if (A === "style") {
              var w = a[A];
              for (p in w) w.hasOwnProperty(p) && (i || (i = {}), (i[p] = ""));
            } else
              A !== "dangerouslySetInnerHTML" &&
                A !== "children" &&
                A !== "suppressContentEditableWarning" &&
                A !== "suppressHydrationWarning" &&
                A !== "autoFocus" &&
                (u.hasOwnProperty(A) ? c || (c = []) : (c = c || []).push(A, null));
        for (A in o) {
          var S = o[A];
          if (
            ((w = a != null ? a[A] : void 0),
            o.hasOwnProperty(A) && S !== w && (S != null || w != null))
          )
            if (A === "style")
              if (w) {
                for (p in w)
                  !w.hasOwnProperty(p) ||
                    (S && S.hasOwnProperty(p)) ||
                    (i || (i = {}), (i[p] = ""));
                for (p in S) S.hasOwnProperty(p) && w[p] !== S[p] && (i || (i = {}), (i[p] = S[p]));
              } else (i || (c || (c = []), c.push(A, i)), (i = S));
            else
              A === "dangerouslySetInnerHTML"
                ? ((S = S ? S.__html : void 0),
                  (w = w ? w.__html : void 0),
                  S != null && w !== S && (c = c || []).push(A, S))
                : A === "children"
                  ? (typeof S != "string" && typeof S != "number") || (c = c || []).push(A, "" + S)
                  : A !== "suppressContentEditableWarning" &&
                    A !== "suppressHydrationWarning" &&
                    (u.hasOwnProperty(A)
                      ? (S != null && A === "onScroll" && ke("scroll", e), c || w === S || (c = []))
                      : (c = c || []).push(A, S));
        }
        i && (c = c || []).push("style", i);
        var A = c;
        (t.updateQueue = A) && (t.flags |= 4);
      }
    }),
    (id = function (e, t, i, o) {
      i !== o && (t.flags |= 4);
    }));
  function si(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var i = null; t !== null;) (t.alternate !== null && (i = t), (t = t.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var o = null; i !== null;) (i.alternate !== null && (o = i), (i = i.sibling));
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      o = 0;
    if (t)
      for (var a = e.child; a !== null;)
        ((i |= a.lanes | a.childLanes),
          (o |= a.subtreeFlags & 14680064),
          (o |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; a !== null;)
        ((i |= a.lanes | a.childLanes),
          (o |= a.subtreeFlags),
          (o |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = i), t);
  }
  function Oy(e, t, i) {
    var o = t.pendingProps;
    switch ((ol(t), t.tag)) {
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
        return (be(t), null);
      case 1:
        return (rt(t.type) && Ji(), be(t), null);
      case 3:
        return (
          (o = t.stateNode),
          lr(),
          Te(nt),
          Te(Ye),
          wl(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (is(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ct !== null && (Ql(Ct), (Ct = null)))),
          Ol(e, t),
          be(t),
          null
        );
      case 5:
        yl(t);
        var a = Rn(ei.current);
        if (((i = t.type), e !== null && t.stateNode != null))
          (rd(e, t, i, o, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (be(t), null);
          }
          if (((e = Rn(Ot.current)), is(t))) {
            ((o = t.stateNode), (i = t.type));
            var c = t.memoizedProps;
            switch (((o[It] = t), (o[Qr] = c), (e = (t.mode & 1) !== 0), i)) {
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
                for (a = 0; a < Gr.length; a++) ke(Gr[a], o);
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
                (Iu(o, c), ke("invalid", o));
                break;
              case "select":
                ((o._wrapperState = { wasMultiple: !!c.multiple }), ke("invalid", o));
                break;
              case "textarea":
                (Bu(o, c), ke("invalid", o));
            }
            (vo(i, c), (a = null));
            for (var p in c)
              if (c.hasOwnProperty(p)) {
                var w = c[p];
                p === "children"
                  ? typeof w == "string"
                    ? o.textContent !== w &&
                      (c.suppressHydrationWarning !== !0 && bi(o.textContent, w, e),
                      (a = ["children", w]))
                    : typeof w == "number" &&
                      o.textContent !== "" + w &&
                      (c.suppressHydrationWarning !== !0 && bi(o.textContent, w, e),
                      (a = ["children", "" + w]))
                  : u.hasOwnProperty(p) && w != null && p === "onScroll" && ke("scroll", o);
              }
            switch (i) {
              case "input":
                (Ai(o), zu(o, c, !0));
                break;
              case "textarea":
                (Ai(o), Wu(o));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (o.onclick = Zi);
            }
            ((o = a), (t.updateQueue = o), o !== null && (t.flags |= 4));
          } else {
            ((p = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Hu(i)),
              e === "http://www.w3.org/1999/xhtml"
                ? i === "script"
                  ? ((e = p.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == "string"
                    ? (e = p.createElement(i, { is: o.is }))
                    : ((e = p.createElement(i)),
                      i === "select" &&
                        ((p = e), o.multiple ? (p.multiple = !0) : o.size && (p.size = o.size)))
                : (e = p.createElementNS(e, i)),
              (e[It] = t),
              (e[Qr] = o),
              nd(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((p = wo(i, o)), i)) {
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
                  for (a = 0; a < Gr.length; a++) ke(Gr[a], e);
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
                  (Iu(e, o), (a = ho(e, o)), ke("invalid", e));
                  break;
                case "option":
                  a = o;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (a = W({}, o, { value: void 0 })),
                    ke("invalid", e));
                  break;
                case "textarea":
                  (Bu(e, o), (a = go(e, o)), ke("invalid", e));
                  break;
                default:
                  a = o;
              }
              (vo(i, a), (w = a));
              for (c in w)
                if (w.hasOwnProperty(c)) {
                  var S = w[c];
                  c === "style"
                    ? Gu(e, S)
                    : c === "dangerouslySetInnerHTML"
                      ? ((S = S ? S.__html : void 0), S != null && $u(e, S))
                      : c === "children"
                        ? typeof S == "string"
                          ? (i !== "textarea" || S !== "") && Ar(e, S)
                          : typeof S == "number" && Ar(e, "" + S)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          c !== "autoFocus" &&
                          (u.hasOwnProperty(c)
                            ? S != null && c === "onScroll" && ke("scroll", e)
                            : S != null && z(e, c, S, p));
                }
              switch (i) {
                case "input":
                  (Ai(e), zu(e, o, !1));
                  break;
                case "textarea":
                  (Ai(e), Wu(e));
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + he(o.value));
                  break;
                case "select":
                  ((e.multiple = !!o.multiple),
                    (c = o.value),
                    c != null
                      ? Wn(e, !!o.multiple, c, !1)
                      : o.defaultValue != null && Wn(e, !!o.multiple, o.defaultValue, !0));
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Zi);
              }
              switch (i) {
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
        return (be(t), null);
      case 6:
        if (e && t.stateNode != null) id(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((i = Rn(ei.current)), Rn(Ot.current), is(t))) {
            if (
              ((o = t.stateNode),
              (i = t.memoizedProps),
              (o[It] = t),
              (c = o.nodeValue !== i) && ((e = ft), e !== null))
            )
              switch (e.tag) {
                case 3:
                  bi(o.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    bi(o.nodeValue, i, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            ((o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o)),
              (o[It] = t),
              (t.stateNode = o));
        }
        return (be(t), null);
      case 13:
        if (
          (Te(Ae),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ee && dt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (lf(), rr(), (t.flags |= 98560), (c = !1));
          else if (((c = is(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (((c = t.memoizedState), (c = c !== null ? c.dehydrated : null), !c))
                throw Error(s(317));
              c[It] = t;
            } else (rr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (be(t), (c = !1));
          } else (Ct !== null && (Ql(Ct), (Ct = null)), (c = !0));
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = i), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ae.current & 1) !== 0 ? ze === 0 && (ze = 3) : ql())),
            t.updateQueue !== null && (t.flags |= 4),
            be(t),
            null);
      case 4:
        return (lr(), Ol(e, t), e === null && Xr(t.stateNode.containerInfo), be(t), null);
      case 10:
        return (dl(t.type._context), be(t), null);
      case 17:
        return (rt(t.type) && Ji(), be(t), null);
      case 19:
        if ((Te(Ae), (c = t.memoizedState), c === null)) return (be(t), null);
        if (((o = (t.flags & 128) !== 0), (p = c.rendering), p === null))
          if (o) si(c, !1);
          else {
            if (ze !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((p = cs(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      si(c, !1),
                      o = p.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = i,
                      i = t.child;
                    i !== null;
                  )
                    ((c = i),
                      (e = o),
                      (c.flags &= 14680066),
                      (p = c.alternate),
                      p === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = p.childLanes),
                          (c.lanes = p.lanes),
                          (c.child = p.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = p.memoizedProps),
                          (c.memoizedState = p.memoizedState),
                          (c.updateQueue = p.updateQueue),
                          (c.type = p.type),
                          (e = p.dependencies),
                          (c.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (i = i.sibling));
                  return (we(Ae, (Ae.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Ne() > fr &&
              ((t.flags |= 128), (o = !0), si(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = cs(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (i = e.updateQueue),
                i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                si(c, !0),
                c.tail === null && c.tailMode === "hidden" && !p.alternate && !Ee)
              )
                return (be(t), null);
            } else
              2 * Ne() - c.renderingStartTime > fr &&
                i !== 1073741824 &&
                ((t.flags |= 128), (o = !0), si(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((i = c.last), i !== null ? (i.sibling = p) : (t.child = p), (c.last = p));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Ne()),
            (t.sibling = null),
            (i = Ae.current),
            we(Ae, o ? (i & 1) | 2 : i & 1),
            t)
          : (be(t), null);
      case 22:
      case 23:
        return (
          Zl(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (ht & 1073741824) !== 0 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : be(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function zy(e, t) {
    switch ((ol(t), t.tag)) {
      case 1:
        return (
          rt(t.type) && Ji(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          lr(),
          Te(nt),
          Te(Ye),
          wl(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (yl(t), null);
      case 13:
        if ((Te(Ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          rr();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Te(Ae), null);
      case 4:
        return (lr(), null);
      case 10:
        return (dl(t.type._context), null);
      case 22:
      case 23:
        return (Zl(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ws = !1,
    Ze = !1,
    By = typeof WeakSet == "function" ? WeakSet : Set,
    $ = null;
  function ur(e, t) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (o) {
          De(e, t, o);
        }
      else i.current = null;
  }
  function zl(e, t, i) {
    try {
      i();
    } catch (o) {
      De(e, t, o);
    }
  }
  var sd = !1;
  function Uy(e, t) {
    if (((Zo = zi), (e = Fc()), Ho(e))) {
      if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var a = o.anchorOffset,
              c = o.focusNode;
            o = o.focusOffset;
            try {
              (i.nodeType, c.nodeType);
            } catch {
              i = null;
              break e;
            }
            var p = 0,
              w = -1,
              S = -1,
              A = 0,
              N = 0,
              _ = e,
              L = null;
            t: for (;;) {
              for (
                var H;
                _ !== i || (a !== 0 && _.nodeType !== 3) || (w = p + a),
                  _ !== c || (o !== 0 && _.nodeType !== 3) || (S = p + o),
                  _.nodeType === 3 && (p += _.nodeValue.length),
                  (H = _.firstChild) !== null;
              )
                ((L = _), (_ = H));
              for (;;) {
                if (_ === e) break t;
                if (
                  (L === i && ++A === a && (w = p),
                  L === c && ++N === o && (S = p),
                  (H = _.nextSibling) !== null)
                )
                  break;
                ((_ = L), (L = _.parentNode));
              }
              _ = H;
            }
            i = w === -1 || S === -1 ? null : { start: w, end: S };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (qo = { focusedElem: e, selectionRange: i }, zi = !1, $ = t; $ !== null;)
      if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), ($ = e));
      else
        for (; $ !== null;) {
          t = $;
          try {
            var G = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (G !== null) {
                    var Q = G.memoizedProps,
                      _e = G.memoizedState,
                      E = t.stateNode,
                      k = E.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Q : At(t.type, Q),
                        _e,
                      );
                    E.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var C = t.stateNode.containerInfo;
                  C.nodeType === 1
                    ? (C.textContent = "")
                    : C.nodeType === 9 && C.documentElement && C.removeChild(C.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (I) {
            De(t, t.return, I);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), ($ = e));
            break;
          }
          $ = t.return;
        }
    return ((G = sd), (sd = !1), G);
  }
  function oi(e, t, i) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var a = (o = o.next);
      do {
        if ((a.tag & e) === e) {
          var c = a.destroy;
          ((a.destroy = void 0), c !== void 0 && zl(t, i, c));
        }
        a = a.next;
      } while (a !== o);
    }
  }
  function xs(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var i = (t = t.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.create;
          i.destroy = o();
        }
        i = i.next;
      } while (i !== t);
    }
  }
  function Bl(e) {
    var t = e.ref;
    if (t !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function od(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), od(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[It], delete t[Qr], delete t[nl], delete t[Ty], delete t[Py])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ld(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ad(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || ld(e.return)) return null;
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
  function Ul(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode),
        t
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, t)
            : i.insertBefore(e, t)
          : (i.nodeType === 8
              ? ((t = i.parentNode), t.insertBefore(e, i))
              : ((t = i), t.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = Zi)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Ul(e, t, i), e = e.sibling; e !== null;) (Ul(e, t, i), (e = e.sibling));
  }
  function Wl(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Wl(e, t, i), e = e.sibling; e !== null;) (Wl(e, t, i), (e = e.sibling));
  }
  var Ke = null,
    Mt = !1;
  function dn(e, t, i) {
    for (i = i.child; i !== null;) (ud(e, t, i), (i = i.sibling));
  }
  function ud(e, t, i) {
    if (Ft && typeof Ft.onCommitFiberUnmount == "function")
      try {
        Ft.onCommitFiberUnmount(Ni, i);
      } catch {}
    switch (i.tag) {
      case 5:
        Ze || ur(i, t);
      case 6:
        var o = Ke,
          a = Mt;
        ((Ke = null),
          dn(e, t, i),
          (Ke = o),
          (Mt = a),
          Ke !== null &&
            (Mt
              ? ((e = Ke),
                (i = i.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
              : Ke.removeChild(i.stateNode)));
        break;
      case 18:
        Ke !== null &&
          (Mt
            ? ((e = Ke),
              (i = i.stateNode),
              e.nodeType === 8 ? tl(e.parentNode, i) : e.nodeType === 1 && tl(e, i),
              Or(e))
            : tl(Ke, i.stateNode));
        break;
      case 4:
        ((o = Ke),
          (a = Mt),
          (Ke = i.stateNode.containerInfo),
          (Mt = !0),
          dn(e, t, i),
          (Ke = o),
          (Mt = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ze && ((o = i.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          a = o = o.next;
          do {
            var c = a,
              p = c.destroy;
            ((c = c.tag),
              p !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && zl(i, t, p),
              (a = a.next));
          } while (a !== o);
        }
        dn(e, t, i);
        break;
      case 1:
        if (!Ze && (ur(i, t), (o = i.stateNode), typeof o.componentWillUnmount == "function"))
          try {
            ((o.props = i.memoizedProps), (o.state = i.memoizedState), o.componentWillUnmount());
          } catch (w) {
            De(i, t, w);
          }
        dn(e, t, i);
        break;
      case 21:
        dn(e, t, i);
        break;
      case 22:
        i.mode & 1
          ? ((Ze = (o = Ze) || i.memoizedState !== null), dn(e, t, i), (Ze = o))
          : dn(e, t, i);
        break;
      default:
        dn(e, t, i);
    }
  }
  function cd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      (i === null && (i = e.stateNode = new By()),
        t.forEach(function (o) {
          var a = by.bind(null, e, o);
          i.has(o) || (i.add(o), o.then(a, a));
        }));
    }
  }
  function Rt(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var a = i[o];
        try {
          var c = e,
            p = t,
            w = p;
          e: for (; w !== null;) {
            switch (w.tag) {
              case 5:
                ((Ke = w.stateNode), (Mt = !1));
                break e;
              case 3:
                ((Ke = w.stateNode.containerInfo), (Mt = !0));
                break e;
              case 4:
                ((Ke = w.stateNode.containerInfo), (Mt = !0));
                break e;
            }
            w = w.return;
          }
          if (Ke === null) throw Error(s(160));
          (ud(c, p, a), (Ke = null), (Mt = !1));
          var S = a.alternate;
          (S !== null && (S.return = null), (a.return = null));
        } catch (A) {
          De(a, t, A);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (fd(t, e), (t = t.sibling));
  }
  function fd(e, t) {
    var i = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Rt(t, e), Bt(e), o & 4)) {
          try {
            (oi(3, e, e.return), xs(3, e));
          } catch (Q) {
            De(e, e.return, Q);
          }
          try {
            oi(5, e, e.return);
          } catch (Q) {
            De(e, e.return, Q);
          }
        }
        break;
      case 1:
        (Rt(t, e), Bt(e), o & 512 && i !== null && ur(i, i.return));
        break;
      case 5:
        if ((Rt(t, e), Bt(e), o & 512 && i !== null && ur(i, i.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            Ar(a, "");
          } catch (Q) {
            De(e, e.return, Q);
          }
        }
        if (o & 4 && ((a = e.stateNode), a != null)) {
          var c = e.memoizedProps,
            p = i !== null ? i.memoizedProps : c,
            w = e.type,
            S = e.updateQueue;
          if (((e.updateQueue = null), S !== null))
            try {
              (w === "input" && c.type === "radio" && c.name != null && Ou(a, c), wo(w, p));
              var A = wo(w, c);
              for (p = 0; p < S.length; p += 2) {
                var N = S[p],
                  _ = S[p + 1];
                N === "style"
                  ? Gu(a, _)
                  : N === "dangerouslySetInnerHTML"
                    ? $u(a, _)
                    : N === "children"
                      ? Ar(a, _)
                      : z(a, N, _, A);
              }
              switch (w) {
                case "input":
                  po(a, c);
                  break;
                case "textarea":
                  Uu(a, c);
                  break;
                case "select":
                  var L = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!c.multiple;
                  var H = c.value;
                  H != null
                    ? Wn(a, !!c.multiple, H, !1)
                    : L !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Wn(a, !!c.multiple, c.defaultValue, !0)
                        : Wn(a, !!c.multiple, c.multiple ? [] : "", !1));
              }
              a[Qr] = c;
            } catch (Q) {
              De(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((Rt(t, e), Bt(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((a = e.stateNode), (c = e.memoizedProps));
          try {
            a.nodeValue = c;
          } catch (Q) {
            De(e, e.return, Q);
          }
        }
        break;
      case 3:
        if ((Rt(t, e), Bt(e), o & 4 && i !== null && i.memoizedState.isDehydrated))
          try {
            Or(t.containerInfo);
          } catch (Q) {
            De(e, e.return, Q);
          }
        break;
      case 4:
        (Rt(t, e), Bt(e));
        break;
      case 13:
        (Rt(t, e),
          Bt(e),
          (a = e.child),
          a.flags & 8192 &&
            ((c = a.memoizedState !== null),
            (a.stateNode.isHidden = c),
            !c || (a.alternate !== null && a.alternate.memoizedState !== null) || (Kl = Ne())),
          o & 4 && cd(e));
        break;
      case 22:
        if (
          ((N = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((Ze = (A = Ze) || N), Rt(t, e), (Ze = A)) : Rt(t, e),
          Bt(e),
          o & 8192)
        ) {
          if (
            ((A = e.memoizedState !== null), (e.stateNode.isHidden = A) && !N && (e.mode & 1) !== 0)
          )
            for ($ = e, N = e.child; N !== null;) {
              for (_ = $ = N; $ !== null;) {
                switch (((L = $), (H = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    oi(4, L, L.return);
                    break;
                  case 1:
                    ur(L, L.return);
                    var G = L.stateNode;
                    if (typeof G.componentWillUnmount == "function") {
                      ((o = L), (i = L.return));
                      try {
                        ((t = o),
                          (G.props = t.memoizedProps),
                          (G.state = t.memoizedState),
                          G.componentWillUnmount());
                      } catch (Q) {
                        De(o, i, Q);
                      }
                    }
                    break;
                  case 5:
                    ur(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      pd(_);
                      continue;
                    }
                }
                H !== null ? ((H.return = L), ($ = H)) : pd(_);
              }
              N = N.sibling;
            }
          e: for (N = null, _ = e; ;) {
            if (_.tag === 5) {
              if (N === null) {
                N = _;
                try {
                  ((a = _.stateNode),
                    A
                      ? ((c = a.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((w = _.stateNode),
                        (S = _.memoizedProps.style),
                        (p = S != null && S.hasOwnProperty("display") ? S.display : null),
                        (w.style.display = Ku("display", p))));
                } catch (Q) {
                  De(e, e.return, Q);
                }
              }
            } else if (_.tag === 6) {
              if (N === null)
                try {
                  _.stateNode.nodeValue = A ? "" : _.memoizedProps;
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
        (Rt(t, e), Bt(e), o & 4 && cd(e));
        break;
      case 21:
        break;
      default:
        (Rt(t, e), Bt(e));
    }
  }
  function Bt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var i = e.return; i !== null;) {
            if (ld(i)) {
              var o = i;
              break e;
            }
            i = i.return;
          }
          throw Error(s(160));
        }
        switch (o.tag) {
          case 5:
            var a = o.stateNode;
            o.flags & 32 && (Ar(a, ""), (o.flags &= -33));
            var c = ad(e);
            Wl(e, c, a);
            break;
          case 3:
          case 4:
            var p = o.stateNode.containerInfo,
              w = ad(e);
            Ul(e, w, p);
            break;
          default:
            throw Error(s(161));
        }
      } catch (S) {
        De(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Wy(e, t, i) {
    (($ = e), dd(e));
  }
  function dd(e, t, i) {
    for (var o = (e.mode & 1) !== 0; $ !== null;) {
      var a = $,
        c = a.child;
      if (a.tag === 22 && o) {
        var p = a.memoizedState !== null || ws;
        if (!p) {
          var w = a.alternate,
            S = (w !== null && w.memoizedState !== null) || Ze;
          w = ws;
          var A = Ze;
          if (((ws = p), (Ze = S) && !A))
            for ($ = a; $ !== null;)
              ((p = $),
                (S = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? md(a)
                  : S !== null
                    ? ((S.return = p), ($ = S))
                    : md(a));
          for (; c !== null;) (($ = c), dd(c), (c = c.sibling));
          (($ = a), (ws = w), (Ze = A));
        }
        hd(e);
      } else (a.subtreeFlags & 8772) !== 0 && c !== null ? ((c.return = a), ($ = c)) : hd(e);
    }
  }
  function hd(e) {
    for (; $ !== null;) {
      var t = $;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ze || xs(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !Ze)
                  if (i === null) o.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type ? i.memoizedProps : At(t.type, i.memoizedProps);
                    o.componentDidUpdate(a, i.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var c = t.updateQueue;
                c !== null && pf(t, c, o);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((i = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        i = t.child.stateNode;
                        break;
                      case 1:
                        i = t.child.stateNode;
                    }
                  pf(t, p, i);
                }
                break;
              case 5:
                var w = t.stateNode;
                if (i === null && t.flags & 4) {
                  i = w;
                  var S = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      S.autoFocus && i.focus();
                      break;
                    case "img":
                      S.src && (i.src = S.src);
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
                  var A = t.alternate;
                  if (A !== null) {
                    var N = A.memoizedState;
                    if (N !== null) {
                      var _ = N.dehydrated;
                      _ !== null && Or(_);
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
          Ze || (t.flags & 512 && Bl(t));
        } catch (L) {
          De(t, t.return, L);
        }
      }
      if (t === e) {
        $ = null;
        break;
      }
      if (((i = t.sibling), i !== null)) {
        ((i.return = t.return), ($ = i));
        break;
      }
      $ = t.return;
    }
  }
  function pd(e) {
    for (; $ !== null;) {
      var t = $;
      if (t === e) {
        $ = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        ((i.return = t.return), ($ = i));
        break;
      }
      $ = t.return;
    }
  }
  function md(e) {
    for (; $ !== null;) {
      var t = $;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              xs(4, t);
            } catch (S) {
              De(t, i, S);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var a = t.return;
              try {
                o.componentDidMount();
              } catch (S) {
                De(t, a, S);
              }
            }
            var c = t.return;
            try {
              Bl(t);
            } catch (S) {
              De(t, c, S);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Bl(t);
            } catch (S) {
              De(t, p, S);
            }
        }
      } catch (S) {
        De(t, t.return, S);
      }
      if (t === e) {
        $ = null;
        break;
      }
      var w = t.sibling;
      if (w !== null) {
        ((w.return = t.return), ($ = w));
        break;
      }
      $ = t.return;
    }
  }
  var Hy = Math.ceil,
    Ss = U.ReactCurrentDispatcher,
    Hl = U.ReactCurrentOwner,
    wt = U.ReactCurrentBatchConfig,
    ae = 0,
    We = null,
    Fe = null,
    Ge = 0,
    ht = 0,
    cr = ln(0),
    ze = 0,
    li = null,
    Vn = 0,
    ks = 0,
    $l = 0,
    ai = null,
    st = null,
    Kl = 0,
    fr = 1 / 0,
    Zt = null,
    Ts = !1,
    Gl = null,
    hn = null,
    Ps = !1,
    pn = null,
    Es = 0,
    ui = 0,
    Xl = null,
    Cs = -1,
    As = 0;
  function Je() {
    return (ae & 6) !== 0 ? Ne() : Cs !== -1 ? Cs : (Cs = Ne());
  }
  function mn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && Ge !== 0
        ? Ge & -Ge
        : Cy.transition !== null
          ? (As === 0 && (As = lc()), As)
          : ((e = pe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gc(e.type))), e);
  }
  function Dt(e, t, i, o) {
    if (50 < ui) throw ((ui = 0), (Xl = null), Error(s(185)));
    (Nr(e, i, o),
      ((ae & 2) === 0 || e !== We) &&
        (e === We && ((ae & 2) === 0 && (ks |= i), ze === 4 && gn(e, Ge)),
        ot(e, o),
        i === 1 && ae === 0 && (t.mode & 1) === 0 && ((fr = Ne() + 500), ts && un())));
  }
  function ot(e, t) {
    var i = e.callbackNode;
    Cg(e, t);
    var o = Fi(e, e === We ? Ge : 0);
    if (o === 0) (i !== null && ic(i), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((i != null && ic(i), t === 1))
        (e.tag === 0 ? Ey(yd.bind(null, e)) : tf(yd.bind(null, e)),
          Sy(function () {
            (ae & 6) === 0 && un();
          }),
          (i = null));
      else {
        switch (ac(o)) {
          case 1:
            i = Co;
            break;
          case 4:
            i = sc;
            break;
          case 16:
            i = Li;
            break;
          case 536870912:
            i = oc;
            break;
          default:
            i = Li;
        }
        i = Ed(i, gd.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = i));
    }
  }
  function gd(e, t) {
    if (((Cs = -1), (As = 0), (ae & 6) !== 0)) throw Error(s(327));
    var i = e.callbackNode;
    if (dr() && e.callbackNode !== i) return null;
    var o = Fi(e, e === We ? Ge : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Ms(e, o);
    else {
      t = o;
      var a = ae;
      ae |= 2;
      var c = wd();
      (We !== e || Ge !== t) && ((Zt = null), (fr = Ne() + 500), Nn(e, t));
      do
        try {
          Gy();
          break;
        } catch (w) {
          vd(e, w);
        }
      while (!0);
      (fl(), (Ss.current = c), (ae = a), Fe !== null ? (t = 0) : ((We = null), (Ge = 0), (t = ze)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = Ao(e)), a !== 0 && ((o = a), (t = Yl(e, a)))), t === 1))
        throw ((i = li), Nn(e, 0), gn(e, o), ot(e, Ne()), i);
      if (t === 6) gn(e, o);
      else {
        if (
          ((a = e.current.alternate),
          (o & 30) === 0 &&
            !$y(a) &&
            ((t = Ms(e, o)),
            t === 2 && ((c = Ao(e)), c !== 0 && ((o = c), (t = Yl(e, c)))),
            t === 1))
        )
          throw ((i = li), Nn(e, 0), gn(e, o), ot(e, Ne()), i);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            _n(e, st, Zt);
            break;
          case 3:
            if ((gn(e, o), (o & 130023424) === o && ((t = Kl + 500 - Ne()), 10 < t))) {
              if (Fi(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                (Je(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = el(_n.bind(null, e, st, Zt), t);
              break;
            }
            _n(e, st, Zt);
            break;
          case 4:
            if ((gn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, a = -1; 0 < o;) {
              var p = 31 - Pt(o);
              ((c = 1 << p), (p = t[p]), p > a && (a = p), (o &= ~c));
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
                            : 1960 * Hy(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = el(_n.bind(null, e, st, Zt), o);
              break;
            }
            _n(e, st, Zt);
            break;
          case 5:
            _n(e, st, Zt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (ot(e, Ne()), e.callbackNode === i ? gd.bind(null, e) : null);
  }
  function Yl(e, t) {
    var i = ai;
    return (
      e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
      (e = Ms(e, t)),
      e !== 2 && ((t = st), (st = i), t !== null && Ql(t)),
      e
    );
  }
  function Ql(e) {
    st === null ? (st = e) : st.push.apply(st, e);
  }
  function $y(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var o = 0; o < i.length; o++) {
            var a = i[o],
              c = a.getSnapshot;
            a = a.value;
            try {
              if (!Et(c(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = t.child), t.subtreeFlags & 16384 && i !== null)) ((i.return = t), (t = i));
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
  function gn(e, t) {
    for (
      t &= ~$l, t &= ~ks, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var i = 31 - Pt(t),
        o = 1 << i;
      ((e[i] = -1), (t &= ~o));
    }
  }
  function yd(e) {
    if ((ae & 6) !== 0) throw Error(s(327));
    dr();
    var t = Fi(e, 0);
    if ((t & 1) === 0) return (ot(e, Ne()), null);
    var i = Ms(e, t);
    if (e.tag !== 0 && i === 2) {
      var o = Ao(e);
      o !== 0 && ((t = o), (i = Yl(e, o)));
    }
    if (i === 1) throw ((i = li), Nn(e, 0), gn(e, t), ot(e, Ne()), i);
    if (i === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      _n(e, st, Zt),
      ot(e, Ne()),
      null
    );
  }
  function bl(e, t) {
    var i = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      ((ae = i), ae === 0 && ((fr = Ne() + 500), ts && un()));
    }
  }
  function Ln(e) {
    pn !== null && pn.tag === 0 && (ae & 6) === 0 && dr();
    var t = ae;
    ae |= 1;
    var i = wt.transition,
      o = pe;
    try {
      if (((wt.transition = null), (pe = 1), e)) return e();
    } finally {
      ((pe = o), (wt.transition = i), (ae = t), (ae & 6) === 0 && un());
    }
  }
  function Zl() {
    ((ht = cr.current), Te(cr));
  }
  function Nn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), xy(i)), Fe !== null))
      for (i = Fe.return; i !== null;) {
        var o = i;
        switch ((ol(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Ji());
            break;
          case 3:
            (lr(), Te(nt), Te(Ye), wl());
            break;
          case 5:
            yl(o);
            break;
          case 4:
            lr();
            break;
          case 13:
            Te(Ae);
            break;
          case 19:
            Te(Ae);
            break;
          case 10:
            dl(o.type._context);
            break;
          case 22:
          case 23:
            Zl();
        }
        i = i.return;
      }
    if (
      ((We = e),
      (Fe = e = yn(e.current, null)),
      (Ge = ht = t),
      (ze = 0),
      (li = null),
      ($l = ks = Vn = 0),
      (st = ai = null),
      Mn !== null)
    ) {
      for (t = 0; t < Mn.length; t++)
        if (((i = Mn[t]), (o = i.interleaved), o !== null)) {
          i.interleaved = null;
          var a = o.next,
            c = i.pending;
          if (c !== null) {
            var p = c.next;
            ((c.next = a), (o.next = p));
          }
          i.pending = o;
        }
      Mn = null;
    }
    return e;
  }
  function vd(e, t) {
    do {
      var i = Fe;
      try {
        if ((fl(), (fs.current = ms), ds)) {
          for (var o = Me.memoizedState; o !== null;) {
            var a = o.queue;
            (a !== null && (a.pending = null), (o = o.next));
          }
          ds = !1;
        }
        if (
          ((Dn = 0),
          (Ue = Oe = Me = null),
          (ti = !1),
          (ni = 0),
          (Hl.current = null),
          i === null || i.return === null)
        ) {
          ((ze = 1), (li = t), (Fe = null));
          break;
        }
        e: {
          var c = e,
            p = i.return,
            w = i,
            S = t;
          if (
            ((t = Ge),
            (w.flags |= 32768),
            S !== null && typeof S == "object" && typeof S.then == "function")
          ) {
            var A = S,
              N = w,
              _ = N.tag;
            if ((N.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var L = N.alternate;
              L
                ? ((N.updateQueue = L.updateQueue),
                  (N.memoizedState = L.memoizedState),
                  (N.lanes = L.lanes))
                : ((N.updateQueue = null), (N.memoizedState = null));
            }
            var H = Hf(p);
            if (H !== null) {
              ((H.flags &= -257), $f(H, p, w, c, t), H.mode & 1 && Wf(c, A, t), (t = H), (S = A));
              var G = t.updateQueue;
              if (G === null) {
                var Q = new Set();
                (Q.add(S), (t.updateQueue = Q));
              } else G.add(S);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Wf(c, A, t), ql());
                break e;
              }
              S = Error(s(426));
            }
          } else if (Ee && w.mode & 1) {
            var _e = Hf(p);
            if (_e !== null) {
              ((_e.flags & 65536) === 0 && (_e.flags |= 256), $f(_e, p, w, c, t), ul(ar(S, w)));
              break e;
            }
          }
          ((c = S = ar(S, w)),
            ze !== 4 && (ze = 2),
            ai === null ? (ai = [c]) : ai.push(c),
            (c = p));
          do {
            switch (c.tag) {
              case 3:
                ((c.flags |= 65536), (t &= -t), (c.lanes |= t));
                var E = Bf(c, S, t);
                hf(c, E);
                break e;
              case 1:
                w = S;
                var k = c.type,
                  C = c.stateNode;
                if (
                  (c.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == "function" ||
                    (C !== null &&
                      typeof C.componentDidCatch == "function" &&
                      (hn === null || !hn.has(C))))
                ) {
                  ((c.flags |= 65536), (t &= -t), (c.lanes |= t));
                  var I = Uf(c, w, t);
                  hf(c, I);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Sd(i);
      } catch (b) {
        ((t = b), Fe === i && i !== null && (Fe = i = i.return));
        continue;
      }
      break;
    } while (!0);
  }
  function wd() {
    var e = Ss.current;
    return ((Ss.current = ms), e === null ? ms : e);
  }
  function ql() {
    ((ze === 0 || ze === 3 || ze === 2) && (ze = 4),
      We === null || ((Vn & 268435455) === 0 && (ks & 268435455) === 0) || gn(We, Ge));
  }
  function Ms(e, t) {
    var i = ae;
    ae |= 2;
    var o = wd();
    (We !== e || Ge !== t) && ((Zt = null), Nn(e, t));
    do
      try {
        Ky();
        break;
      } catch (a) {
        vd(e, a);
      }
    while (!0);
    if ((fl(), (ae = i), (Ss.current = o), Fe !== null)) throw Error(s(261));
    return ((We = null), (Ge = 0), ze);
  }
  function Ky() {
    for (; Fe !== null;) xd(Fe);
  }
  function Gy() {
    for (; Fe !== null && !yg();) xd(Fe);
  }
  function xd(e) {
    var t = Pd(e.alternate, e, ht);
    ((e.memoizedProps = e.pendingProps), t === null ? Sd(e) : (Fe = t), (Hl.current = null));
  }
  function Sd(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((i = Oy(i, t, ht)), i !== null)) {
          Fe = i;
          return;
        }
      } else {
        if (((i = zy(i, t)), i !== null)) {
          ((i.flags &= 32767), (Fe = i));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ze = 6), (Fe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Fe = t;
        return;
      }
      Fe = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function _n(e, t, i) {
    var o = pe,
      a = wt.transition;
    try {
      ((wt.transition = null), (pe = 1), Xy(e, t, i, o));
    } finally {
      ((wt.transition = a), (pe = o));
    }
    return null;
  }
  function Xy(e, t, i, o) {
    do dr();
    while (pn !== null);
    if ((ae & 6) !== 0) throw Error(s(327));
    i = e.finishedWork;
    var a = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var c = i.lanes | i.childLanes;
    if (
      (Ag(e, c),
      e === We && ((Fe = We = null), (Ge = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        Ps ||
        ((Ps = !0),
        Ed(Li, function () {
          return (dr(), null);
        })),
      (c = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || c)
    ) {
      ((c = wt.transition), (wt.transition = null));
      var p = pe;
      pe = 1;
      var w = ae;
      ((ae |= 4),
        (Hl.current = null),
        Uy(e, i),
        fd(i, e),
        hy(qo),
        (zi = !!Zo),
        (qo = Zo = null),
        (e.current = i),
        Wy(i),
        vg(),
        (ae = w),
        (pe = p),
        (wt.transition = c));
    } else e.current = i;
    if (
      (Ps && ((Ps = !1), (pn = e), (Es = a)),
      (c = e.pendingLanes),
      c === 0 && (hn = null),
      Sg(i.stateNode),
      ot(e, Ne()),
      t !== null)
    )
      for (o = e.onRecoverableError, i = 0; i < t.length; i++)
        ((a = t[i]), o(a.value, { componentStack: a.stack, digest: a.digest }));
    if (Ts) throw ((Ts = !1), (e = Gl), (Gl = null), e);
    return (
      (Es & 1) !== 0 && e.tag !== 0 && dr(),
      (c = e.pendingLanes),
      (c & 1) !== 0 ? (e === Xl ? ui++ : ((ui = 0), (Xl = e))) : (ui = 0),
      un(),
      null
    );
  }
  function dr() {
    if (pn !== null) {
      var e = ac(Es),
        t = wt.transition,
        i = pe;
      try {
        if (((wt.transition = null), (pe = 16 > e ? 16 : e), pn === null)) var o = !1;
        else {
          if (((e = pn), (pn = null), (Es = 0), (ae & 6) !== 0)) throw Error(s(331));
          var a = ae;
          for (ae |= 4, $ = e.current; $ !== null;) {
            var c = $,
              p = c.child;
            if (($.flags & 16) !== 0) {
              var w = c.deletions;
              if (w !== null) {
                for (var S = 0; S < w.length; S++) {
                  var A = w[S];
                  for ($ = A; $ !== null;) {
                    var N = $;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        oi(8, N, c);
                    }
                    var _ = N.child;
                    if (_ !== null) ((_.return = N), ($ = _));
                    else
                      for (; $ !== null;) {
                        N = $;
                        var L = N.sibling,
                          H = N.return;
                        if ((od(N), N === A)) {
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
                var G = c.alternate;
                if (G !== null) {
                  var Q = G.child;
                  if (Q !== null) {
                    G.child = null;
                    do {
                      var _e = Q.sibling;
                      ((Q.sibling = null), (Q = _e));
                    } while (Q !== null);
                  }
                }
                $ = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && p !== null) ((p.return = c), ($ = p));
            else
              e: for (; $ !== null;) {
                if (((c = $), (c.flags & 2048) !== 0))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oi(9, c, c.return);
                  }
                var E = c.sibling;
                if (E !== null) {
                  ((E.return = c.return), ($ = E));
                  break e;
                }
                $ = c.return;
              }
          }
          var k = e.current;
          for ($ = k; $ !== null;) {
            p = $;
            var C = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && C !== null) ((C.return = p), ($ = C));
            else
              e: for (p = k; $ !== null;) {
                if (((w = $), (w.flags & 2048) !== 0))
                  try {
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xs(9, w);
                    }
                  } catch (b) {
                    De(w, w.return, b);
                  }
                if (w === p) {
                  $ = null;
                  break e;
                }
                var I = w.sibling;
                if (I !== null) {
                  ((I.return = w.return), ($ = I));
                  break e;
                }
                $ = w.return;
              }
          }
          if (((ae = a), un(), Ft && typeof Ft.onPostCommitFiberRoot == "function"))
            try {
              Ft.onPostCommitFiberRoot(Ni, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        ((pe = i), (wt.transition = t));
      }
    }
    return !1;
  }
  function kd(e, t, i) {
    ((t = ar(i, t)),
      (t = Bf(e, t, 1)),
      (e = fn(e, t, 1)),
      (t = Je()),
      e !== null && (Nr(e, 1, t), ot(e, t)));
  }
  function De(e, t, i) {
    if (e.tag === 3) kd(e, e, i);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          kd(t, e, i);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" && (hn === null || !hn.has(o)))
          ) {
            ((e = ar(i, e)),
              (e = Uf(t, e, 1)),
              (t = fn(t, e, 1)),
              (e = Je()),
              t !== null && (Nr(t, 1, e), ot(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Yy(e, t, i) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = Je()),
      (e.pingedLanes |= e.suspendedLanes & i),
      We === e &&
        (Ge & i) === i &&
        (ze === 4 || (ze === 3 && (Ge & 130023424) === Ge && 500 > Ne() - Kl)
          ? Nn(e, 0)
          : ($l |= i)),
      ot(e, t));
  }
  function Td(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = ji), (ji <<= 1), (ji & 130023424) === 0 && (ji = 4194304)));
    var i = Je();
    ((e = Yt(e, t)), e !== null && (Nr(e, t, i), ot(e, i)));
  }
  function Qy(e) {
    var t = e.memoizedState,
      i = 0;
    (t !== null && (i = t.retryLane), Td(e, i));
  }
  function by(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          a = e.memoizedState;
        a !== null && (i = a.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    (o !== null && o.delete(t), Td(e, i));
  }
  var Pd;
  Pd = function (e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || nt.current) it = !0;
      else {
        if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return ((it = !1), Iy(e, t, i));
        it = (e.flags & 131072) !== 0;
      }
    else ((it = !1), Ee && (t.flags & 1048576) !== 0 && nf(t, rs, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (vs(e, t), (e = t.pendingProps));
        var a = er(t, Ye.current);
        (or(t, i), (a = kl(null, t, o, e, a, i)));
        var c = Tl();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              rt(o) ? ((c = !0), es(t)) : (c = !1),
              (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              ml(t),
              (a.updater = gs),
              (t.stateNode = a),
              (a._reactInternals = t),
              Rl(t, o, e, i),
              (t = Nl(null, t, o, !0, c, i)))
            : ((t.tag = 0), Ee && c && sl(t), qe(null, t, a, i), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (vs(e, t),
            (e = t.pendingProps),
            (a = o._init),
            (o = a(o._payload)),
            (t.type = o),
            (a = t.tag = qy(o)),
            (e = At(o, e)),
            a)
          ) {
            case 0:
              t = Ll(null, t, o, e, i);
              break e;
            case 1:
              t = bf(null, t, o, e, i);
              break e;
            case 11:
              t = Kf(null, t, o, e, i);
              break e;
            case 14:
              t = Gf(null, t, o, At(o.type, e), i);
              break e;
          }
          throw Error(s(306, o, ""));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : At(o, a)),
          Ll(e, t, o, a, i)
        );
      case 1:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : At(o, a)),
          bf(e, t, o, a, i)
        );
      case 3:
        e: {
          if ((Zf(t), e === null)) throw Error(s(387));
          ((o = t.pendingProps),
            (c = t.memoizedState),
            (a = c.element),
            df(e, t),
            us(t, o, null, i));
          var p = t.memoizedState;
          if (((o = p.element), c.isDehydrated))
            if (
              ((c = {
                element: o,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              ((a = ar(Error(s(423)), t)), (t = qf(e, t, o, i, a)));
              break e;
            } else if (o !== a) {
              ((a = ar(Error(s(424)), t)), (t = qf(e, t, o, i, a)));
              break e;
            } else
              for (
                dt = on(t.stateNode.containerInfo.firstChild),
                  ft = t,
                  Ee = !0,
                  Ct = null,
                  i = cf(t, null, o, i),
                  t.child = i;
                i;
              )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((rr(), o === a)) {
              t = bt(e, t, i);
              break e;
            }
            qe(e, t, o, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          mf(t),
          e === null && al(t),
          (o = t.type),
          (a = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (p = a.children),
          Jo(o, a) ? (p = null) : c !== null && Jo(o, c) && (t.flags |= 32),
          Qf(e, t),
          qe(e, t, p, i),
          t.child
        );
      case 6:
        return (e === null && al(t), null);
      case 13:
        return Jf(e, t, i);
      case 4:
        return (
          gl(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = ir(t, null, o, i)) : qe(e, t, o, i),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : At(o, a)),
          Kf(e, t, o, a, i)
        );
      case 7:
        return (qe(e, t, t.pendingProps, i), t.child);
      case 8:
        return (qe(e, t, t.pendingProps.children, i), t.child);
      case 12:
        return (qe(e, t, t.pendingProps.children, i), t.child);
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (a = t.pendingProps),
            (c = t.memoizedProps),
            (p = a.value),
            we(os, o._currentValue),
            (o._currentValue = p),
            c !== null)
          )
            if (Et(c.value, p)) {
              if (c.children === a.children && !nt.current) {
                t = bt(e, t, i);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null;) {
                var w = c.dependencies;
                if (w !== null) {
                  p = c.child;
                  for (var S = w.firstContext; S !== null;) {
                    if (S.context === o) {
                      if (c.tag === 1) {
                        ((S = Qt(-1, i & -i)), (S.tag = 2));
                        var A = c.updateQueue;
                        if (A !== null) {
                          A = A.shared;
                          var N = A.pending;
                          (N === null ? (S.next = S) : ((S.next = N.next), (N.next = S)),
                            (A.pending = S));
                        }
                      }
                      ((c.lanes |= i),
                        (S = c.alternate),
                        S !== null && (S.lanes |= i),
                        hl(c.return, i, t),
                        (w.lanes |= i));
                      break;
                    }
                    S = S.next;
                  }
                } else if (c.tag === 10) p = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((p = c.return), p === null)) throw Error(s(341));
                  ((p.lanes |= i),
                    (w = p.alternate),
                    w !== null && (w.lanes |= i),
                    hl(p, i, t),
                    (p = c.sibling));
                } else p = c.child;
                if (p !== null) p.return = c;
                else
                  for (p = c; p !== null;) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((c = p.sibling), c !== null)) {
                      ((c.return = p.return), (p = c));
                      break;
                    }
                    p = p.return;
                  }
                c = p;
              }
          (qe(e, t, a.children, i), (t = t.child));
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (o = t.pendingProps.children),
          or(t, i),
          (a = yt(a)),
          (o = o(a)),
          (t.flags |= 1),
          qe(e, t, o, i),
          t.child
        );
      case 14:
        return ((o = t.type), (a = At(o, t.pendingProps)), (a = At(o.type, a)), Gf(e, t, o, a, i));
      case 15:
        return Xf(e, t, t.type, t.pendingProps, i);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : At(o, a)),
          vs(e, t),
          (t.tag = 1),
          rt(o) ? ((e = !0), es(t)) : (e = !1),
          or(t, i),
          Of(t, o, a),
          Rl(t, o, a, i),
          Nl(null, t, o, !0, e, i)
        );
      case 19:
        return td(e, t, i);
      case 22:
        return Yf(e, t, i);
    }
    throw Error(s(156, t.tag));
  };
  function Ed(e, t) {
    return rc(e, t);
  }
  function Zy(e, t, i, o) {
    ((this.tag = e),
      (this.key = i),
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
  function xt(e, t, i, o) {
    return new Zy(e, t, i, o);
  }
  function Jl(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function qy(e) {
    if (typeof e == "function") return Jl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === xe)) return 11;
      if (e === je) return 14;
    }
    return 2;
  }
  function yn(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = xt(e.tag, t, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = t),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 14680064),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      i
    );
  }
  function Rs(e, t, i, o, a, c) {
    var p = 2;
    if (((o = e), typeof e == "function")) Jl(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else
      e: switch (e) {
        case re:
          return jn(i.children, a, c, t);
        case q:
          ((p = 8), (a |= 8));
          break;
        case ye:
          return ((e = xt(12, i, t, a | 2)), (e.elementType = ye), (e.lanes = c), e);
        case Le:
          return ((e = xt(13, i, t, a)), (e.elementType = Le), (e.lanes = c), e);
        case Re:
          return ((e = xt(19, i, t, a)), (e.elementType = Re), (e.lanes = c), e);
        case Ce:
          return Ds(i, a, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case J:
                p = 10;
                break e;
              case me:
                p = 9;
                break e;
              case xe:
                p = 11;
                break e;
              case je:
                p = 14;
                break e;
              case Se:
                ((p = 16), (o = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return ((t = xt(p, i, t, a)), (t.elementType = e), (t.type = o), (t.lanes = c), t);
  }
  function jn(e, t, i, o) {
    return ((e = xt(7, e, o, t)), (e.lanes = i), e);
  }
  function Ds(e, t, i, o) {
    return (
      (e = xt(22, e, o, t)),
      (e.elementType = Ce),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ea(e, t, i) {
    return ((e = xt(6, e, null, t)), (e.lanes = i), e);
  }
  function ta(e, t, i) {
    return (
      (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Jy(e, t, i, o, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Mo(0)),
      (this.expirationTimes = Mo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Mo(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function na(e, t, i, o, a, c, p, w, S) {
    return (
      (e = new Jy(e, t, i, w, S)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = xt(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: o,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ml(c),
      e
    );
  }
  function ev(e, t, i) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ie,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: i,
    };
  }
  function Cd(e) {
    if (!e) return an;
    e = e._reactInternals;
    e: {
      if (Tn(e) !== e || e.tag !== 1) throw Error(s(170));
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
      var i = e.type;
      if (rt(i)) return Jc(e, i, t);
    }
    return t;
  }
  function Ad(e, t, i, o, a, c, p, w, S) {
    return (
      (e = na(i, o, !0, e, a, c, p, w, S)),
      (e.context = Cd(null)),
      (i = e.current),
      (o = Je()),
      (a = mn(i)),
      (c = Qt(o, a)),
      (c.callback = t ?? null),
      fn(i, c, a),
      (e.current.lanes = a),
      Nr(e, a, o),
      ot(e, o),
      e
    );
  }
  function Vs(e, t, i, o) {
    var a = t.current,
      c = Je(),
      p = mn(a);
    return (
      (i = Cd(i)),
      t.context === null ? (t.context = i) : (t.pendingContext = i),
      (t = Qt(c, p)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = fn(a, t, p)),
      e !== null && (Dt(e, a, p, c), as(e, a, p)),
      p
    );
  }
  function Ls(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Md(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function ra(e, t) {
    (Md(e, t), (e = e.alternate) && Md(e, t));
  }
  function tv() {
    return null;
  }
  var Rd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ia(e) {
    this._internalRoot = e;
  }
  ((Ns.prototype.render = ia.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Vs(e, t, null, null);
    }),
    (Ns.prototype.unmount = ia.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Ln(function () {
            Vs(null, e, null, null);
          }),
            (t[$t] = null));
        }
      }));
  function Ns(e) {
    this._internalRoot = e;
  }
  Ns.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = fc();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < nn.length && t !== 0 && t < nn[i].priority; i++);
      (nn.splice(i, 0, e), i === 0 && pc(e));
    }
  };
  function sa(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function _s(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Dd() {}
  function nv(e, t, i, o, a) {
    if (a) {
      if (typeof o == "function") {
        var c = o;
        o = function () {
          var A = Ls(p);
          c.call(A);
        };
      }
      var p = Ad(t, o, e, 0, null, !1, !1, "", Dd);
      return (
        (e._reactRootContainer = p),
        (e[$t] = p.current),
        Xr(e.nodeType === 8 ? e.parentNode : e),
        Ln(),
        p
      );
    }
    for (; (a = e.lastChild);) e.removeChild(a);
    if (typeof o == "function") {
      var w = o;
      o = function () {
        var A = Ls(S);
        w.call(A);
      };
    }
    var S = na(e, 0, !1, null, null, !1, !1, "", Dd);
    return (
      (e._reactRootContainer = S),
      (e[$t] = S.current),
      Xr(e.nodeType === 8 ? e.parentNode : e),
      Ln(function () {
        Vs(t, S, i, o);
      }),
      S
    );
  }
  function js(e, t, i, o, a) {
    var c = i._reactRootContainer;
    if (c) {
      var p = c;
      if (typeof a == "function") {
        var w = a;
        a = function () {
          var S = Ls(p);
          w.call(S);
        };
      }
      Vs(t, p, e, a);
    } else p = nv(i, t, e, a, o);
    return Ls(p);
  }
  ((uc = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = Lr(t.pendingLanes);
          i !== 0 && (Ro(t, i | 1), ot(t, Ne()), (ae & 6) === 0 && ((fr = Ne() + 500), un()));
        }
        break;
      case 13:
        (Ln(function () {
          var o = Yt(e, 1);
          if (o !== null) {
            var a = Je();
            Dt(o, e, 1, a);
          }
        }),
          ra(e, 1));
    }
  }),
    (Do = function (e) {
      if (e.tag === 13) {
        var t = Yt(e, 134217728);
        if (t !== null) {
          var i = Je();
          Dt(t, e, 134217728, i);
        }
        ra(e, 134217728);
      }
    }),
    (cc = function (e) {
      if (e.tag === 13) {
        var t = mn(e),
          i = Yt(e, t);
        if (i !== null) {
          var o = Je();
          Dt(i, e, t, o);
        }
        ra(e, t);
      }
    }),
    (fc = function () {
      return pe;
    }),
    (dc = function (e, t) {
      var i = pe;
      try {
        return ((pe = e), t());
      } finally {
        pe = i;
      }
    }),
    (ko = function (e, t, i) {
      switch (t) {
        case "input":
          if ((po(e, i), (t = i.name), i.type === "radio" && t != null)) {
            for (i = e; i.parentNode;) i = i.parentNode;
            for (
              i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < i.length;
              t++
            ) {
              var o = i[t];
              if (o !== e && o.form === e.form) {
                var a = qi(o);
                if (!a) throw Error(s(90));
                (Fu(o), po(o, a));
              }
            }
          }
          break;
        case "textarea":
          Uu(e, i);
          break;
        case "select":
          ((t = i.value), t != null && Wn(e, !!i.multiple, t, !1));
      }
    }),
    (bu = bl),
    (Zu = Ln));
  var rv = { usingClientEntryPoint: !1, Events: [br, qn, qi, Yu, Qu, bl] },
    ci = {
      findFiberByHostInstance: Pn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    iv = {
      bundleType: ci.bundleType,
      version: ci.version,
      rendererPackageName: ci.rendererPackageName,
      rendererConfig: ci.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: U.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = tc(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: ci.findFiberByHostInstance || tv,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fs.isDisabled && Fs.supportsFiber)
      try {
        ((Ni = Fs.inject(iv)), (Ft = Fs));
      } catch {}
  }
  return (
    (lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rv),
    (lt.createPortal = function (e, t) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!sa(t)) throw Error(s(200));
      return ev(e, t, null, i);
    }),
    (lt.createRoot = function (e, t) {
      if (!sa(e)) throw Error(s(299));
      var i = !1,
        o = "",
        a = Rd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = na(e, 1, !1, null, null, i, !1, o, a)),
        (e[$t] = t.current),
        Xr(e.nodeType === 8 ? e.parentNode : e),
        new ia(t)
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
      return ((e = tc(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (lt.flushSync = function (e) {
      return Ln(e);
    }),
    (lt.hydrate = function (e, t, i) {
      if (!_s(t)) throw Error(s(200));
      return js(null, e, t, !0, i);
    }),
    (lt.hydrateRoot = function (e, t, i) {
      if (!sa(e)) throw Error(s(405));
      var o = (i != null && i.hydratedSources) || null,
        a = !1,
        c = "",
        p = Rd;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (a = !0),
          i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (p = i.onRecoverableError)),
        (t = Ad(t, null, e, 1, i ?? null, a, !1, c, p)),
        (e[$t] = t.current),
        Xr(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((i = o[e]),
            (a = i._getVersion),
            (a = a(i._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [i, a])
              : t.mutableSourceEagerHydrationData.push(i, a));
      return new Ns(t);
    }),
    (lt.render = function (e, t, i) {
      if (!_s(t)) throw Error(s(200));
      return js(null, e, t, !1, i);
    }),
    (lt.unmountComponentAtNode = function (e) {
      if (!_s(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Ln(function () {
            js(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[$t] = null));
            });
          }),
          !0)
        : !1;
    }),
    (lt.unstable_batchedUpdates = bl),
    (lt.unstable_renderSubtreeIntoContainer = function (e, t, i, o) {
      if (!_s(i)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return js(e, t, i, !1, o);
    }),
    (lt.version = "18.3.1-next-f1338f8080-20240426"),
    lt
  );
}
var Od;
function dv() {
  if (Od) return aa.exports;
  Od = 1;
  function n() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return (n(), (aa.exports = fv()), aa.exports);
}
var zd;
function hv() {
  if (zd) return Is;
  zd = 1;
  var n = dv();
  return ((Is.createRoot = n.createRoot), (Is.hydrateRoot = n.hydrateRoot), Is);
}
var pv = hv();
function mv(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
function dp(n) {
  return `#${n}`;
}
function hp(n) {
  const r = n.replace(/^\//, "").replace(/\/$/, "");
  return r ? `#/${r}` : "#/";
}
function gv(n) {
  const r = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return r
    ? r.startsWith("/")
      ? { kind: "route", path: r.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: r }
    : null;
}
function pp(n, r = "smooth") {
  if (typeof document > "u") return !1;
  const s = document.getElementById(n);
  return s ? (s.scrollIntoView({ behavior: r, block: "start" }), !0) : !1;
}
function mp(n, r = "smooth") {
  if (typeof window > "u") return;
  const s = dp(n);
  if (pp(n, r)) {
    window.history.replaceState(null, "", s);
    return;
  }
  window.location.hash = s;
}
function yv(n) {
  typeof window > "u" || (window.location.hash = hp(n));
}
const vv = {
  home: "home",
  hero: "hero",
  product: "product",
  products: "product",
  solutions: "solutions",
  research: "research",
  company: "company",
  features: "features",
  pricing: "pricing",
  docs: "docs",
  documentation: "docs",
  about: "about",
  contact: "contact",
  faq: "faq",
  blog: "blog",
  careers: "careers",
  work: "works",
  works: "works",
  resume: "contact",
  journal: "journal",
  explore: "explore",
  "how-it-works": "how-it-works",
  philosophy: "philosophy",
  "use-cases": "use-cases",
  vault: "vault",
  plans: "plans",
  device: "device",
  "real-stories": "real-stories",
  science: "science",
  install: "install",
  news: "news",
  help: "help",
  network: "network",
  ecosystem: "ecosystem",
  rewards: "rewards",
  journey: "journey",
  benefits: "benefits",
  guidebook: "guidebook",
  roaming: "roaming",
  voyages: "voyages",
  worlds: "worlds",
  innovation: "innovation",
  "plan-launch": "plan-launch",
  projects: "projects",
  price: "services",
  services: "services",
  studio: "studio",
  connect: "connect",
  gallery: "gallery",
  "buy-nft": "gallery",
  homepage: "home",
  offerings: "companies",
  mission: "benefits",
  security: "security",
};
function wv(n) {
  const r = mv(n);
  return vv[r] ?? r;
}
function xv(n, r) {
  return r != null && r.route
    ? { kind: "route", path: r.route.replace(/^\//, "") }
    : r != null && r.section
      ? { kind: "section", id: r.section }
      : { kind: "section", id: wv(n) };
}
function Sv(n) {
  return n.kind === "route" ? hp(n.path) : dp(n.id);
}
function kv(n, r) {
  if ((n.preventDefault(), r.kind === "route")) {
    yv(r.path);
    return;
  }
  mp(r.id);
}
function Tv() {
  if (typeof window > "u") return;
  const n = gv();
  (n == null ? void 0 : n.kind) === "section" && requestAnimationFrame(() => pp(n.id, "auto"));
}
const Pv =
    "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png",
  gp = [
    "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
    "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
    "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
    "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
    "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
    "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
    "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
    "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
    "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
    "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
    "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
    "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
    "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
    "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
    "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
    "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
    "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
    "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
    "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
  ],
  Os = {
    moon: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    object:
      "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    lego: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    group:
      "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
  },
  Ev =
    "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!",
  Cv = [
    {
      num: "01",
      name: "3D Modeling",
      description:
        "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
    },
    {
      num: "02",
      name: "Rendering",
      description:
        "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
    },
    {
      num: "03",
      name: "Motion Design",
      description:
        "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
    },
    {
      num: "04",
      name: "Branding",
      description:
        "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
    },
    {
      num: "05",
      name: "Web Design",
      description:
        "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
    },
  ],
  Bd = [
    {
      num: "01",
      name: "Nextlevel Studio",
      category: "Client",
      col1: [
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      ],
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    },
    {
      num: "02",
      name: "Aura Brand Identity",
      category: "Personal",
      col1: [
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      ],
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    },
    {
      num: "03",
      name: "Solaris Digital",
      category: "Client",
      col1: [
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      ],
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    },
  ],
  Av = [
    { label: "About", section: "about" },
    { label: "Price", section: "services" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ],
  yp = K.createContext({});
function wr(n) {
  const r = K.useRef(null);
  return (r.current === null && (r.current = n()), r.current);
}
const Mv = typeof window < "u",
  nu = Mv ? K.useLayoutEffect : K.useEffect,
  ru = K.createContext(null);
function iu(n, r) {
  n.indexOf(r) === -1 && n.push(r);
}
function Zs(n, r) {
  const s = n.indexOf(r);
  s > -1 && n.splice(s, 1);
}
const jt = (n, r, s) => (s > r ? r : s < n ? n : s);
let su = () => {};
const Sn = {},
  vp = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  wp = (n) => typeof n == "object" && n !== null,
  xp = (n) => /^0[^.\s]+$/u.test(n);
function Sp(n) {
  let r;
  return () => (r === void 0 && (r = n()), r);
}
const at = (n) => n,
  Ti = (...n) => n.reduce((r, s) => (l) => s(r(l))),
  xr = (n, r, s) => {
    const l = r - n;
    return l ? (s - n) / l : 1;
  };
class ou {
  constructor() {
    this.subscriptions = [];
  }
  add(r) {
    return (iu(this.subscriptions, r), () => Zs(this.subscriptions, r));
  }
  notify(r, s, l) {
    const u = this.subscriptions.length;
    if (u)
      if (u === 1) this.subscriptions[0](r, s, l);
      else
        for (let d = 0; d < u; d++) {
          const f = this.subscriptions[d];
          f && f(r, s, l);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const pt = (n) => n * 1e3,
  kt = (n) => n / 1e3,
  lu = (n, r) => (r ? n * (1e3 / r) : 0),
  kp = (n, r, s) => (((1 - 3 * s + 3 * r) * n + (3 * s - 6 * r)) * n + 3 * r) * n,
  Rv = 1e-7,
  Dv = 12;
function Vv(n, r, s, l, u) {
  let d,
    f,
    h = 0;
  do ((f = r + (s - r) / 2), (d = kp(f, l, u) - n), d > 0 ? (s = f) : (r = f));
  while (Math.abs(d) > Rv && ++h < Dv);
  return f;
}
function Pi(n, r, s, l) {
  if (n === r && s === l) return at;
  const u = (d) => Vv(d, 0, 1, n, s);
  return (d) => (d === 0 || d === 1 ? d : kp(u(d), r, l));
}
const Tp = (n) => (r) => (r <= 0.5 ? n(2 * r) / 2 : (2 - n(2 * (1 - r))) / 2),
  Pp = (n) => (r) => 1 - n(1 - r),
  Ep = Pi(0.33, 1.53, 0.69, 0.99),
  au = Pp(Ep),
  Cp = Tp(au),
  Ap = (n) => (n >= 1 ? 1 : (n *= 2) < 1 ? 0.5 * au(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))),
  uu = (n) => 1 - Math.sin(Math.acos(n)),
  Mp = Pp(uu),
  Rp = Tp(uu),
  Lv = Pi(0.42, 0, 1, 1),
  Nv = Pi(0, 0, 0.58, 1),
  Dp = Pi(0.42, 0, 0.58, 1),
  _v = (n) => Array.isArray(n) && typeof n[0] != "number",
  Vp = (n) => Array.isArray(n) && typeof n[0] == "number",
  jv = {
    linear: at,
    easeIn: Lv,
    easeInOut: Dp,
    easeOut: Nv,
    circIn: uu,
    circInOut: Rp,
    circOut: Mp,
    backIn: au,
    backInOut: Cp,
    backOut: Ep,
    anticipate: Ap,
  },
  Fv = (n) => typeof n == "string",
  Ud = (n) => {
    if (Vp(n)) {
      su(n.length === 4);
      const [r, s, l, u] = n;
      return Pi(r, s, l, u);
    } else if (Fv(n)) return jv[n];
    return n;
  },
  zs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Iv(n, r) {
  let s = new Set(),
    l = new Set(),
    u = !1,
    d = !1;
  const f = new WeakSet();
  let h = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(g) {
    (f.has(g) && (y.schedule(g), n()), g(h));
  }
  const y = {
    schedule: (g, v = !1, x = !1) => {
      const M = x && u ? s : l;
      return (v && f.add(g), M.add(g), g);
    },
    cancel: (g) => {
      (l.delete(g), f.delete(g));
    },
    process: (g) => {
      if (((h = g), u)) {
        d = !0;
        return;
      }
      u = !0;
      const v = s;
      ((s = l), (l = v), s.forEach(m), s.clear(), (u = !1), d && ((d = !1), y.process(g)));
    },
  };
  return y;
}
const Ov = 40;
function Lp(n, r) {
  let s = !1,
    l = !0;
  const u = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = zs.reduce((z, U) => ((z[U] = Iv(d)), z), {}),
    {
      setup: h,
      read: m,
      resolveKeyframes: y,
      preUpdate: g,
      update: v,
      preRender: x,
      render: P,
      postRender: M,
    } = f,
    R = () => {
      const z = Sn.useManualTiming,
        U = z ? u.timestamp : performance.now();
      ((s = !1),
        z || (u.delta = l ? 1e3 / 60 : Math.max(Math.min(U - u.timestamp, Ov), 1)),
        (u.timestamp = U),
        (u.isProcessing = !0),
        h.process(u),
        m.process(u),
        y.process(u),
        g.process(u),
        v.process(u),
        x.process(u),
        P.process(u),
        M.process(u),
        (u.isProcessing = !1),
        s && r && ((l = !1), n(R)));
    },
    D = () => {
      ((s = !0), (l = !0), u.isProcessing || n(R));
    };
  return {
    schedule: zs.reduce((z, U) => {
      const Z = f[U];
      return ((z[U] = (ie, re = !1, q = !1) => (s || D(), Z.schedule(ie, re, q))), z);
    }, {}),
    cancel: (z) => {
      for (let U = 0; U < zs.length; U++) f[zs[U]].cancel(z);
    },
    state: u,
    steps: f,
  };
}
const {
  schedule: ue,
  cancel: Tt,
  state: $e,
  steps: fa,
} = Lp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : at, !0);
let $s;
function zv() {
  $s = void 0;
}
const et = {
    now: () => (
      $s === void 0 &&
        et.set($e.isProcessing || Sn.useManualTiming ? $e.timestamp : performance.now()),
      $s
    ),
    set: (n) => {
      (($s = n), queueMicrotask(zv));
    },
  },
  Np = (n) => (r) => typeof r == "string" && r.startsWith(n),
  _p = Np("--"),
  Bv = Np("var(--"),
  cu = (n) => (Bv(n) ? Uv.test(n.split("/*")[0].trim()) : !1),
  Uv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Wd(n) {
  return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--");
}
const Tr = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  xi = { ...Tr, transform: (n) => jt(0, 1, n) },
  Bs = { ...Tr, default: 1 },
  mi = (n) => Math.round(n * 1e5) / 1e5,
  fu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Wv(n) {
  return n == null;
}
const Hv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  du = (n, r) => (s) =>
    !!(
      (typeof s == "string" && Hv.test(s) && s.startsWith(n)) ||
      (r && !Wv(s) && Object.prototype.hasOwnProperty.call(s, r))
    ),
  jp = (n, r, s) => (l) => {
    if (typeof l != "string") return l;
    const [u, d, f, h] = l.match(fu);
    return {
      [n]: parseFloat(u),
      [r]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: h !== void 0 ? parseFloat(h) : 1,
    };
  },
  $v = (n) => jt(0, 255, n),
  da = { ...Tr, transform: (n) => Math.round($v(n)) },
  On = {
    test: du("rgb", "red"),
    parse: jp("red", "green", "blue"),
    transform: ({ red: n, green: r, blue: s, alpha: l = 1 }) =>
      "rgba(" +
      da.transform(n) +
      ", " +
      da.transform(r) +
      ", " +
      da.transform(s) +
      ", " +
      mi(xi.transform(l)) +
      ")",
  };
function Kv(n) {
  let r = "",
    s = "",
    l = "",
    u = "";
  return (
    n.length > 5
      ? ((r = n.substring(1, 3)),
        (s = n.substring(3, 5)),
        (l = n.substring(5, 7)),
        (u = n.substring(7, 9)))
      : ((r = n.substring(1, 2)),
        (s = n.substring(2, 3)),
        (l = n.substring(3, 4)),
        (u = n.substring(4, 5)),
        (r += r),
        (s += s),
        (l += l),
        (u += u)),
    {
      red: parseInt(r, 16),
      green: parseInt(s, 16),
      blue: parseInt(l, 16),
      alpha: u ? parseInt(u, 16) / 255 : 1,
    }
  );
}
const Ma = { test: du("#"), parse: Kv, transform: On.transform },
  Ei = (n) => ({
    test: (r) => typeof r == "string" && r.endsWith(n) && r.split(" ").length === 1,
    parse: parseFloat,
    transform: (r) => `${r}${n}`,
  }),
  qt = Ei("deg"),
  Ht = Ei("%"),
  X = Ei("px"),
  Gv = Ei("vh"),
  Xv = Ei("vw"),
  Hd = { ...Ht, parse: (n) => Ht.parse(n) / 100, transform: (n) => Ht.transform(n * 100) },
  mr = {
    test: du("hsl", "hue"),
    parse: jp("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: r, lightness: s, alpha: l = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      Ht.transform(mi(r)) +
      ", " +
      Ht.transform(mi(s)) +
      ", " +
      mi(xi.transform(l)) +
      ")",
  },
  Ie = {
    test: (n) => On.test(n) || Ma.test(n) || mr.test(n),
    parse: (n) => (On.test(n) ? On.parse(n) : mr.test(n) ? mr.parse(n) : Ma.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? On.transform(n) : mr.transform(n),
    getAnimatableNone: (n) => {
      const r = Ie.parse(n);
      return ((r.alpha = 0), Ie.transform(r));
    },
  },
  Yv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Qv(n) {
  var r, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((r = n.match(fu)) == null ? void 0 : r.length) || 0) +
      (((s = n.match(Yv)) == null ? void 0 : s.length) || 0) >
      0
  );
}
const Fp = "number",
  Ip = "color",
  bv = "var",
  Zv = "var(",
  $d = "${}",
  qv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Sr(n) {
  const r = n.toString(),
    s = [],
    l = { color: [], number: [], var: [] },
    u = [];
  let d = 0;
  const h = r
    .replace(
      qv,
      (m) => (
        Ie.test(m)
          ? (l.color.push(d), u.push(Ip), s.push(Ie.parse(m)))
          : m.startsWith(Zv)
            ? (l.var.push(d), u.push(bv), s.push(m))
            : (l.number.push(d), u.push(Fp), s.push(parseFloat(m))),
        ++d,
        $d
      ),
    )
    .split($d);
  return { values: s, split: h, indexes: l, types: u };
}
function Jv(n) {
  return Sr(n).values;
}
function Op({ split: n, types: r }) {
  const s = n.length;
  return (l) => {
    let u = "";
    for (let d = 0; d < s; d++)
      if (((u += n[d]), l[d] !== void 0)) {
        const f = r[d];
        f === Fp ? (u += mi(l[d])) : f === Ip ? (u += Ie.transform(l[d])) : (u += l[d]);
      }
    return u;
  };
}
function e0(n) {
  return Op(Sr(n));
}
const t0 = (n) => (typeof n == "number" ? 0 : Ie.test(n) ? Ie.getAnimatableNone(n) : n),
  n0 = (n, r) => (typeof n == "number" ? (r != null && r.trim().endsWith("/") ? n : 0) : t0(n));
function r0(n) {
  const r = Sr(n);
  return Op(r)(r.values.map((l, u) => n0(l, r.split[u])));
}
const _t = { test: Qv, parse: Jv, createTransformer: e0, getAnimatableNone: r0 };
function ha(n, r, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (r - n) * 6 * s : s < 1 / 2 ? r : s < 2 / 3 ? n + (r - n) * (2 / 3 - s) * 6 : n
  );
}
function i0({ hue: n, saturation: r, lightness: s, alpha: l }) {
  ((n /= 360), (r /= 100), (s /= 100));
  let u = 0,
    d = 0,
    f = 0;
  if (!r) u = d = f = s;
  else {
    const h = s < 0.5 ? s * (1 + r) : s + r - s * r,
      m = 2 * s - h;
    ((u = ha(m, h, n + 1 / 3)), (d = ha(m, h, n)), (f = ha(m, h, n - 1 / 3)));
  }
  return {
    red: Math.round(u * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: l,
  };
}
function qs(n, r) {
  return (s) => (s > 0 ? r : n);
}
const ge = (n, r, s) => n + (r - n) * s,
  pa = (n, r, s) => {
    const l = n * n,
      u = s * (r * r - l) + l;
    return u < 0 ? 0 : Math.sqrt(u);
  },
  s0 = [Ma, On, mr],
  o0 = (n) => s0.find((r) => r.test(n));
function Kd(n) {
  const r = o0(n);
  if (!r) return !1;
  let s = r.parse(n);
  return (r === mr && (s = i0(s)), s);
}
const Gd = (n, r) => {
    const s = Kd(n),
      l = Kd(r);
    if (!s || !l) return qs(n, r);
    const u = { ...s };
    return (d) => (
      (u.red = pa(s.red, l.red, d)),
      (u.green = pa(s.green, l.green, d)),
      (u.blue = pa(s.blue, l.blue, d)),
      (u.alpha = ge(s.alpha, l.alpha, d)),
      On.transform(u)
    );
  },
  Ra = new Set(["none", "hidden"]);
function l0(n, r) {
  return Ra.has(n) ? (s) => (s <= 0 ? n : r) : (s) => (s >= 1 ? r : n);
}
function a0(n, r) {
  return (s) => ge(n, r, s);
}
function hu(n) {
  return typeof n == "number"
    ? a0
    : typeof n == "string"
      ? cu(n)
        ? qs
        : Ie.test(n)
          ? Gd
          : f0
      : Array.isArray(n)
        ? zp
        : typeof n == "object"
          ? Ie.test(n)
            ? Gd
            : u0
          : qs;
}
function zp(n, r) {
  const s = [...n],
    l = s.length,
    u = n.map((d, f) => hu(d)(d, r[f]));
  return (d) => {
    for (let f = 0; f < l; f++) s[f] = u[f](d);
    return s;
  };
}
function u0(n, r) {
  const s = { ...n, ...r },
    l = {};
  for (const u in s) n[u] !== void 0 && r[u] !== void 0 && (l[u] = hu(n[u])(n[u], r[u]));
  return (u) => {
    for (const d in l) s[d] = l[d](u);
    return s;
  };
}
function c0(n, r) {
  const s = [],
    l = { color: 0, var: 0, number: 0 };
  for (let u = 0; u < r.values.length; u++) {
    const d = r.types[u],
      f = n.indexes[d][l[d]],
      h = n.values[f] ?? 0;
    ((s[u] = h), l[d]++);
  }
  return s;
}
const f0 = (n, r) => {
  const s = _t.createTransformer(r),
    l = Sr(n),
    u = Sr(r);
  return l.indexes.var.length === u.indexes.var.length &&
    l.indexes.color.length === u.indexes.color.length &&
    l.indexes.number.length >= u.indexes.number.length
    ? (Ra.has(n) && !u.values.length) || (Ra.has(r) && !l.values.length)
      ? l0(n, r)
      : Ti(zp(c0(l, u), u.values), s)
    : qs(n, r);
};
function Bp(n, r, s) {
  return typeof n == "number" && typeof r == "number" && typeof s == "number"
    ? ge(n, r, s)
    : hu(n)(n, r);
}
const d0 = (n) => {
    const r = ({ timestamp: s }) => n(s);
    return {
      start: (s = !0) => ue.update(r, s),
      stop: () => Tt(r),
      now: () => ($e.isProcessing ? $e.timestamp : et.now()),
    };
  },
  Up = (n, r, s = 10) => {
    let l = "";
    const u = Math.max(Math.round(r / s), 2);
    for (let d = 0; d < u; d++) l += Math.round(n(d / (u - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${l.substring(0, l.length - 2)})`;
  },
  Js = 2e4;
function pu(n) {
  let r = 0;
  const s = 50;
  let l = n.next(r);
  for (; !l.done && r < Js;) ((r += s), (l = n.next(r)));
  return r >= Js ? 1 / 0 : r;
}
function h0(n, r = 100, s) {
  const l = s({ ...n, keyframes: [0, r] }),
    u = Math.min(pu(l), Js);
  return { type: "keyframes", ease: (d) => l.next(u * d).value / r, duration: kt(u) };
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
function Da(n, r) {
  return n * Math.sqrt(1 - r * r);
}
const p0 = 12;
function m0(n, r, s) {
  let l = s;
  for (let u = 1; u < p0; u++) l = l - n(l) / r(l);
  return l;
}
const ma = 0.001;
function g0({
  duration: n = Ve.duration,
  bounce: r = Ve.bounce,
  velocity: s = Ve.velocity,
  mass: l = Ve.mass,
}) {
  let u,
    d,
    f = 1 - r;
  ((f = jt(Ve.minDamping, Ve.maxDamping, f)),
    (n = jt(Ve.minDuration, Ve.maxDuration, kt(n))),
    f < 1
      ? ((u = (y) => {
          const g = y * f,
            v = g * n,
            x = g - s,
            P = Da(y, f),
            M = Math.exp(-v);
          return ma - (x / P) * M;
        }),
        (d = (y) => {
          const v = y * f * n,
            x = v * s + s,
            P = Math.pow(f, 2) * Math.pow(y, 2) * n,
            M = Math.exp(-v),
            R = Da(Math.pow(y, 2), f);
          return ((-u(y) + ma > 0 ? -1 : 1) * ((x - P) * M)) / R;
        }))
      : ((u = (y) => {
          const g = Math.exp(-y * n),
            v = (y - s) * n + 1;
          return -ma + g * v;
        }),
        (d = (y) => {
          const g = Math.exp(-y * n),
            v = (s - y) * (n * n);
          return g * v;
        })));
  const h = 5 / n,
    m = m0(u, d, h);
  if (((n = pt(n)), isNaN(m))) return { stiffness: Ve.stiffness, damping: Ve.damping, duration: n };
  {
    const y = Math.pow(m, 2) * l;
    return { stiffness: y, damping: f * 2 * Math.sqrt(l * y), duration: n };
  }
}
const y0 = ["duration", "bounce"],
  v0 = ["stiffness", "damping", "mass"];
function Xd(n, r) {
  return r.some((s) => n[s] !== void 0);
}
function w0(n) {
  let r = {
    velocity: Ve.velocity,
    stiffness: Ve.stiffness,
    damping: Ve.damping,
    mass: Ve.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Xd(n, v0) && Xd(n, y0))
    if (((r.velocity = 0), n.visualDuration)) {
      const s = n.visualDuration,
        l = (2 * Math.PI) / (s * 1.2),
        u = l * l,
        d = 2 * jt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
      r = { ...r, mass: Ve.mass, stiffness: u, damping: d };
    } else {
      const s = g0({ ...n, velocity: 0 });
      ((r = { ...r, ...s, mass: Ve.mass }), (r.isResolvedFromDuration = !0));
    }
  return r;
}
function eo(n = Ve.visualDuration, r = Ve.bounce) {
  const s = typeof n != "object" ? { visualDuration: n, keyframes: [0, 1], bounce: r } : n;
  let { restSpeed: l, restDelta: u } = s;
  const d = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    h = { done: !1, value: d },
    {
      stiffness: m,
      damping: y,
      mass: g,
      duration: v,
      velocity: x,
      isResolvedFromDuration: P,
    } = w0({ ...s, velocity: -kt(s.velocity || 0) }),
    M = x || 0,
    R = y / (2 * Math.sqrt(m * g)),
    D = f - d,
    j = kt(Math.sqrt(m / g)),
    B = Math.abs(D) < 5;
  (l || (l = B ? Ve.restSpeed.granular : Ve.restSpeed.default),
    u || (u = B ? Ve.restDelta.granular : Ve.restDelta.default));
  let z, U, Z, ie, re, q;
  if (R < 1)
    ((Z = Da(j, R)),
      (ie = (M + R * j * D) / Z),
      (z = (J) => {
        const me = Math.exp(-R * j * J);
        return f - me * (ie * Math.sin(Z * J) + D * Math.cos(Z * J));
      }),
      (re = R * j * ie + D * Z),
      (q = R * j * D - ie * Z),
      (U = (J) => Math.exp(-R * j * J) * (re * Math.sin(Z * J) + q * Math.cos(Z * J))));
  else if (R === 1) {
    z = (me) => f - Math.exp(-j * me) * (D + (M + j * D) * me);
    const J = M + j * D;
    U = (me) => Math.exp(-j * me) * (j * J * me - M);
  } else {
    const J = j * Math.sqrt(R * R - 1);
    z = (Re) => {
      const je = Math.exp(-R * j * Re),
        Se = Math.min(J * Re, 300);
      return f - (je * ((M + R * j * D) * Math.sinh(Se) + J * D * Math.cosh(Se))) / J;
    };
    const me = (M + R * j * D) / J,
      xe = R * j * me - D * J,
      Le = R * j * D - me * J;
    U = (Re) => {
      const je = Math.exp(-R * j * Re),
        Se = Math.min(J * Re, 300);
      return je * (xe * Math.sinh(Se) + Le * Math.cosh(Se));
    };
  }
  const ye = {
    calculatedDuration: (P && v) || null,
    velocity: (J) => pt(U(J)),
    next: (J) => {
      if (!P && R < 1) {
        const xe = Math.exp(-R * j * J),
          Le = Math.sin(Z * J),
          Re = Math.cos(Z * J),
          je = f - xe * (ie * Le + D * Re),
          Se = pt(xe * (re * Le + q * Re));
        return (
          (h.done = Math.abs(Se) <= l && Math.abs(f - je) <= u),
          (h.value = h.done ? f : je),
          h
        );
      }
      const me = z(J);
      if (P) h.done = J >= v;
      else {
        const xe = pt(U(J));
        h.done = Math.abs(xe) <= l && Math.abs(f - me) <= u;
      }
      return ((h.value = h.done ? f : me), h);
    },
    toString: () => {
      const J = Math.min(pu(ye), Js),
        me = Up((xe) => ye.next(J * xe).value, J, 30);
      return J + "ms " + me;
    },
    toTransition: () => {},
  };
  return ye;
}
eo.applyToOptions = (n) => {
  const r = h0(n, 100, eo);
  return ((n.ease = r.ease), (n.duration = pt(r.duration)), (n.type = "keyframes"), n);
};
const x0 = 5;
function Wp(n, r, s) {
  const l = Math.max(r - x0, 0);
  return lu(s - n(l), r - l);
}
function Va({
  keyframes: n,
  velocity: r = 0,
  power: s = 0.8,
  timeConstant: l = 325,
  bounceDamping: u = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: h,
  max: m,
  restDelta: y = 0.5,
  restSpeed: g,
}) {
  const v = n[0],
    x = { done: !1, value: v },
    P = (q) => (h !== void 0 && q < h) || (m !== void 0 && q > m),
    M = (q) => (h === void 0 ? m : m === void 0 || Math.abs(h - q) < Math.abs(m - q) ? h : m);
  let R = s * r;
  const D = v + R,
    j = f === void 0 ? D : f(D);
  j !== D && (R = j - v);
  const B = (q) => -R * Math.exp(-q / l),
    z = (q) => j + B(q),
    U = (q) => {
      const ye = B(q),
        J = z(q);
      ((x.done = Math.abs(ye) <= y), (x.value = x.done ? j : J));
    };
  let Z, ie;
  const re = (q) => {
    P(x.value) &&
      ((Z = q),
      (ie = eo({
        keyframes: [x.value, M(x.value)],
        velocity: Wp(z, q, x.value),
        damping: u,
        stiffness: d,
        restDelta: y,
        restSpeed: g,
      })));
  };
  return (
    re(0),
    {
      calculatedDuration: null,
      next: (q) => {
        let ye = !1;
        return (
          !ie && Z === void 0 && ((ye = !0), U(q), re(q)),
          Z !== void 0 && q >= Z ? ie.next(q - Z) : (!ye && U(q), x)
        );
      },
    }
  );
}
function S0(n, r, s) {
  const l = [],
    u = s || Sn.mix || Bp,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let h = u(n[f], n[f + 1]);
    if (r) {
      const m = Array.isArray(r) ? r[f] || at : r;
      h = Ti(m, h);
    }
    l.push(h);
  }
  return l;
}
function mu(n, r, { clamp: s = !0, ease: l, mixer: u } = {}) {
  const d = n.length;
  if ((su(d === r.length), d === 1)) return () => r[0];
  if (d === 2 && r[0] === r[1]) return () => r[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (r = [...r].reverse()));
  const h = S0(r, l, u),
    m = h.length,
    y = (g) => {
      if (f && g < n[0]) return r[0];
      let v = 0;
      if (m > 1) for (; v < n.length - 2 && !(g < n[v + 1]); v++);
      const x = xr(n[v], n[v + 1], g);
      return h[v](x);
    };
  return s ? (g) => y(jt(n[0], n[d - 1], g)) : y;
}
function k0(n, r) {
  const s = n[n.length - 1];
  for (let l = 1; l <= r; l++) {
    const u = xr(0, r, l);
    n.push(ge(s, 1, u));
  }
}
function Hp(n) {
  const r = [0];
  return (k0(r, n.length - 1), r);
}
function T0(n, r) {
  return n.map((s) => s * r);
}
function P0(n, r) {
  return n.map(() => r || Dp).splice(0, n.length - 1);
}
function gi({ duration: n = 300, keyframes: r, times: s, ease: l = "easeInOut" }) {
  const u = _v(l) ? l.map(Ud) : Ud(l),
    d = { done: !1, value: r[0] },
    f = T0(s && s.length === r.length ? s : Hp(r), n),
    h = mu(f, r, { ease: Array.isArray(u) ? u : P0(r, u) });
  return { calculatedDuration: n, next: (m) => ((d.value = h(m)), (d.done = m >= n), d) };
}
const E0 = (n) => n !== null;
function ao(n, { repeat: r, repeatType: s = "loop" }, l, u = 1) {
  const d = n.filter(E0),
    h = u < 0 || (r && s !== "loop" && r % 2 === 1) ? 0 : d.length - 1;
  return !h || l === void 0 ? d[h] : l;
}
const C0 = { decay: Va, inertia: Va, tween: gi, keyframes: gi, spring: eo };
function $p(n) {
  typeof n.type == "string" && (n.type = C0[n.type]);
}
class gu {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((r) => {
      this.resolve = r;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(r, s) {
    return this.finished.then(r, s);
  }
}
const A0 = (n) => n / 100;
class to extends gu {
  constructor(r) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var l, u;
        const { motionValue: s } = this.options;
        (s && s.updatedAt !== et.now() && this.tick(et.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(), (u = (l = this.options).onStop) == null || u.call(l)));
      }),
      (this.options = r),
      this.initAnimation(),
      this.play(),
      r.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: r } = this;
    $p(r);
    const { type: s = gi, repeat: l = 0, repeatDelay: u = 0, repeatType: d, velocity: f = 0 } = r;
    let { keyframes: h } = r;
    const m = s || gi;
    m !== gi &&
      typeof h[0] != "number" &&
      ((this.mixKeyframes = Ti(A0, Bp(h[0], h[1]))), (h = [0, 100]));
    const y = m({ ...r, keyframes: h });
    (d === "mirror" &&
      (this.mirroredGenerator = m({ ...r, keyframes: [...h].reverse(), velocity: -f })),
      y.calculatedDuration === null && (y.calculatedDuration = pu(y)));
    const { calculatedDuration: g } = y;
    ((this.calculatedDuration = g),
      (this.resolvedDuration = g + u),
      (this.totalDuration = this.resolvedDuration * (l + 1) - u),
      (this.generator = y));
  }
  updateTime(r) {
    const s = Math.round(r - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = s);
  }
  tick(r, s = !1) {
    const {
      generator: l,
      totalDuration: u,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: h,
      calculatedDuration: m,
    } = this;
    if (this.startTime === null) return l.next(0);
    const {
      delay: y = 0,
      keyframes: g,
      repeat: v,
      repeatType: x,
      repeatDelay: P,
      type: M,
      onUpdate: R,
      finalKeyframe: D,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, r))
      : this.speed < 0 && (this.startTime = Math.min(r - u / this.speed, this.startTime)),
      s ? (this.currentTime = r) : this.updateTime(r));
    const j = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1),
      B = this.playbackSpeed >= 0 ? j < 0 : j > u;
    ((this.currentTime = Math.max(j, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = u));
    let z = this.currentTime,
      U = l;
    if (v) {
      const q = Math.min(this.currentTime, u) / h;
      let ye = Math.floor(q),
        J = q % 1;
      (!J && q >= 1 && (J = 1),
        J === 1 && ye--,
        (ye = Math.min(ye, v + 1)),
        !!(ye % 2) &&
          (x === "reverse" ? ((J = 1 - J), P && (J -= P / h)) : x === "mirror" && (U = f)),
        (z = jt(0, 1, J) * h));
    }
    let Z;
    (B ? ((this.delayState.value = g[0]), (Z = this.delayState)) : (Z = U.next(z)),
      d && !B && (Z.value = d(Z.value)));
    let { done: ie } = Z;
    !B &&
      m !== null &&
      (ie = this.playbackSpeed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const re =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ie));
    return (
      re && M !== Va && (Z.value = ao(g, this.options, D, this.speed)),
      R && R(Z.value),
      re && this.finish(),
      Z
    );
  }
  then(r, s) {
    return this.finished.then(r, s);
  }
  get duration() {
    return kt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: r = 0 } = this.options || {};
    return this.duration + kt(r);
  }
  get time() {
    return kt(this.currentTime);
  }
  set time(r) {
    ((r = pt(r)),
      (this.currentTime = r),
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
        ? (this.holdTime = r)
        : this.driver && (this.startTime = this.driver.now() - r / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = r), this.tick(r)));
  }
  getGeneratorVelocity() {
    const r = this.currentTime;
    if (r <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(r);
    const s = this.generator.next(r).value;
    return Wp((l) => this.generator.next(l).value, r, s);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(r) {
    const s = this.playbackSpeed !== r;
    (s && this.driver && this.updateTime(et.now()),
      (this.playbackSpeed = r),
      s && this.driver && (this.time = kt(this.currentTime)));
  }
  play() {
    var u, d;
    if (this.isStopped) return;
    const { driver: r = d0, startTime: s } = this.options;
    (this.driver || (this.driver = r((f) => this.tick(f))),
      (d = (u = this.options).onPlay) == null || d.call(u));
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
    var r, s;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (s = (r = this.options).onComplete) == null || s.call(r));
  }
  cancel() {
    var r, s;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (s = (r = this.options).onCancel) == null || s.call(r));
  }
  teardown() {
    ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(r) {
    return ((this.startTime = 0), this.tick(r, !0));
  }
  attachTimeline(r) {
    var s;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
      (s = this.driver) == null || s.stop(),
      r.observe(this)
    );
  }
}
function M0(n) {
  for (let r = 1; r < n.length; r++) n[r] ?? (n[r] = n[r - 1]);
}
const zn = (n) => (n * 180) / Math.PI,
  La = (n) => {
    const r = zn(Math.atan2(n[1], n[0]));
    return Na(r);
  },
  R0 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: La,
    rotateZ: La,
    skewX: (n) => zn(Math.atan(n[1])),
    skewY: (n) => zn(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  Na = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  Yd = La,
  Qd = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  bd = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  D0 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Qd,
    scaleY: bd,
    scale: (n) => (Qd(n) + bd(n)) / 2,
    rotateX: (n) => Na(zn(Math.atan2(n[6], n[5]))),
    rotateY: (n) => Na(zn(Math.atan2(-n[2], n[0]))),
    rotateZ: Yd,
    rotate: Yd,
    skewX: (n) => zn(Math.atan(n[4])),
    skewY: (n) => zn(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function _a(n) {
  return n.includes("scale") ? 1 : 0;
}
function ja(n, r) {
  if (!n || n === "none") return _a(r);
  const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let l, u;
  if (s) ((l = D0), (u = s));
  else {
    const h = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((l = R0), (u = h));
  }
  if (!u) return _a(r);
  const d = l[r],
    f = u[1].split(",").map(L0);
  return typeof d == "function" ? d(f) : f[d];
}
const V0 = (n, r) => {
  const { transform: s = "none" } = getComputedStyle(n);
  return ja(s, r);
};
function L0(n) {
  return parseFloat(n.trim());
}
const Pr = [
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
  Er = new Set([...Pr, "pathRotation"]),
  Zd = (n) => n === Tr || n === X,
  N0 = new Set(["x", "y", "z"]),
  _0 = Pr.filter((n) => !N0.has(n));
function j0(n) {
  const r = [];
  return (
    _0.forEach((s) => {
      const l = n.getValue(s);
      l !== void 0 && (r.push([s, l.get()]), l.set(s.startsWith("scale") ? 1 : 0));
    }),
    r
  );
}
const xn = {
  width: ({ x: n }, { paddingLeft: r = "0", paddingRight: s = "0", boxSizing: l }) => {
    const u = n.max - n.min;
    return l === "border-box" ? u : u - parseFloat(r) - parseFloat(s);
  },
  height: ({ y: n }, { paddingTop: r = "0", paddingBottom: s = "0", boxSizing: l }) => {
    const u = n.max - n.min;
    return l === "border-box" ? u : u - parseFloat(r) - parseFloat(s);
  },
  top: (n, { top: r }) => parseFloat(r),
  left: (n, { left: r }) => parseFloat(r),
  bottom: ({ y: n }, { top: r }) => parseFloat(r) + (n.max - n.min),
  right: ({ x: n }, { left: r }) => parseFloat(r) + (n.max - n.min),
  x: (n, { transform: r }) => ja(r, "x"),
  y: (n, { transform: r }) => ja(r, "y"),
};
xn.translateX = xn.x;
xn.translateY = xn.y;
const Bn = new Set();
let Fa = !1,
  Ia = !1,
  Oa = !1;
function Kp() {
  if (Ia) {
    const n = Array.from(Bn).filter((l) => l.needsMeasurement),
      r = new Set(n.map((l) => l.element)),
      s = new Map();
    (r.forEach((l) => {
      const u = j0(l);
      u.length && (s.set(l, u), l.render());
    }),
      n.forEach((l) => l.measureInitialState()),
      r.forEach((l) => {
        l.render();
        const u = s.get(l);
        u &&
          u.forEach(([d, f]) => {
            var h;
            (h = l.getValue(d)) == null || h.set(f);
          });
      }),
      n.forEach((l) => l.measureEndState()),
      n.forEach((l) => {
        l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY);
      }));
  }
  ((Ia = !1), (Fa = !1), Bn.forEach((n) => n.complete(Oa)), Bn.clear());
}
function Gp() {
  Bn.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (Ia = !0));
  });
}
function F0() {
  ((Oa = !0), Gp(), Kp(), (Oa = !1));
}
class yu {
  constructor(r, s, l, u, d, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...r]),
      (this.onComplete = s),
      (this.name = l),
      (this.motionValue = u),
      (this.element = d),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Bn.add(this), Fa || ((Fa = !0), ue.read(Gp), ue.resolveKeyframes(Kp)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: r, name: s, element: l, motionValue: u } = this;
    if (r[0] === null) {
      const d = u == null ? void 0 : u.get(),
        f = r[r.length - 1];
      if (d !== void 0) r[0] = d;
      else if (l && s) {
        const h = l.readValue(s, f);
        h != null && (r[0] = h);
      }
      (r[0] === void 0 && (r[0] = f), u && d === void 0 && u.set(r[0]));
    }
    M0(r);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(r = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, r),
      Bn.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Bn.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const I0 = (n) => n.startsWith("--");
function Xp(n, r, s) {
  I0(r) ? n.style.setProperty(r, s) : (n.style[r] = s);
}
const O0 = {};
function vu(n, r) {
  const s = Sp(n);
  return () => O0[r] ?? s();
}
const wu = vu(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Yp = vu(() => window.ViewTimeline !== void 0, "viewTimeline"),
  Qp = vu(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  hi = ([n, r, s, l]) => `cubic-bezier(${n}, ${r}, ${s}, ${l})`,
  qd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: hi([0, 0.65, 0.55, 1]),
    circOut: hi([0.55, 0, 1, 0.45]),
    backIn: hi([0.31, 0.01, 0.66, -0.59]),
    backOut: hi([0.33, 1.53, 0.69, 0.99]),
  };
function bp(n, r) {
  if (n)
    return typeof n == "function"
      ? Qp()
        ? Up(n, r)
        : "ease-out"
      : Vp(n)
        ? hi(n)
        : Array.isArray(n)
          ? n.map((s) => bp(s, r) || qd.easeOut)
          : qd[n];
}
function z0(
  n,
  r,
  s,
  {
    delay: l = 0,
    duration: u = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: h = "easeOut",
    times: m,
  } = {},
  y = void 0,
) {
  const g = { [r]: s };
  m && (g.offset = m);
  const v = bp(h, u);
  Array.isArray(v) && (g.easing = v);
  const x = {
    delay: l,
    duration: u,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (y && (x.pseudoElement = y), n.animate(g, x));
}
function Zp(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function B0({ type: n, ...r }) {
  return Zp(n) && Qp()
    ? n.applyToOptions(r)
    : (r.duration ?? (r.duration = 300), r.ease ?? (r.ease = "easeOut"), r);
}
class qp extends gu {
  constructor(r) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !r)
    )
      return;
    const {
      element: s,
      name: l,
      keyframes: u,
      pseudoElement: d,
      allowFlatten: f = !1,
      finalKeyframe: h,
      onComplete: m,
    } = r;
    ((this.isPseudoElement = !!d),
      (this.allowFlatten = f),
      (this.options = r),
      su(typeof r.type != "string"));
    const y = B0(r);
    ((this.animation = z0(s, l, u, y, d)),
      y.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const g = ao(u, this.options, h, this.speed);
          (this.updateMotionValue && this.updateMotionValue(g),
            Xp(s, l, g),
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
    var r, s;
    (s = (r = this.animation).finish) == null || s.call(r);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: r } = this;
    r === "idle" ||
      r === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var s, l, u;
    const r = (s = this.options) == null ? void 0 : s.element;
    !this.isPseudoElement &&
      r != null &&
      r.isConnected &&
      ((u = (l = this.animation).commitStyles) == null || u.call(l));
  }
  get duration() {
    var s, l;
    const r =
      ((l = (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) == null
        ? void 0
        : l.call(s).duration) || 0;
    return kt(Number(r));
  }
  get iterationDuration() {
    const { delay: r = 0 } = this.options || {};
    return this.duration + kt(r);
  }
  get time() {
    return kt(Number(this.animation.currentTime) || 0);
  }
  set time(r) {
    const s = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = pt(r)),
      s && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(r) {
    (r < 0 && (this.finishedTime = null), (this.animation.playbackRate = r));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(r) {
    this.manualStartTime = this.animation.startTime = r;
  }
  attachTimeline({ timeline: r, rangeStart: s, rangeEnd: l, observe: u }) {
    var d;
    return (
      this.allowFlatten &&
        ((d = this.animation.effect) == null || d.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      r && wu()
        ? ((this.animation.timeline = r),
          s && (this.animation.rangeStart = s),
          l && (this.animation.rangeEnd = l),
          at)
        : u(this)
    );
  }
}
const Jp = { anticipate: Ap, backInOut: Cp, circInOut: Rp };
function U0(n) {
  return n in Jp;
}
function W0(n) {
  typeof n.ease == "string" && U0(n.ease) && (n.ease = Jp[n.ease]);
}
const ga = 10;
class H0 extends qp {
  constructor(r) {
    (W0(r),
      $p(r),
      super(r),
      r.startTime !== void 0 && r.autoplay !== !1 && (this.startTime = r.startTime),
      (this.options = r));
  }
  updateMotionValue(r) {
    const { motionValue: s, onUpdate: l, onComplete: u, element: d, ...f } = this.options;
    if (!s) return;
    if (r !== void 0) {
      s.set(r);
      return;
    }
    const h = new to({ ...f, autoplay: !1 }),
      m = Math.max(ga, et.now() - this.startTime),
      y = jt(0, ga, m - ga),
      g = h.sample(m).value,
      { name: v } = this.options;
    (d && v && Xp(d, v, g), s.setWithVelocity(h.sample(Math.max(0, m - y)).value, g, y), h.stop());
  }
}
const Jd = (n, r) =>
  r === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" && (_t.test(n) || n === "0") && !n.startsWith("url("))
      );
function $0(n) {
  const r = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== r) return !0;
}
function K0(n, r, s, l) {
  const u = n[0];
  if (u === null) return !1;
  if (r === "display" || r === "visibility") return !0;
  const d = n[n.length - 1],
    f = Jd(u, r),
    h = Jd(d, r);
  return !f || !h ? !1 : $0(n) || ((s === "spring" || Zp(s)) && l);
}
function za(n) {
  ((n.duration = 0), (n.type = "keyframes"));
}
const em = new Set(["opacity", "clipPath", "filter", "transform"]),
  G0 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function X0(n) {
  for (let r = 0; r < n.length; r++) if (typeof n[r] == "string" && G0.test(n[r])) return !0;
  return !1;
}
const Y0 = new Set([
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
  Q0 = Sp(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function b0(n) {
  var v;
  const {
    motionValue: r,
    name: s,
    repeatDelay: l,
    repeatType: u,
    damping: d,
    type: f,
    keyframes: h,
  } = n;
  if (!(((v = r == null ? void 0 : r.owner) == null ? void 0 : v.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: y, transformTemplate: g } = r.owner.getProps();
  return (
    Q0() &&
    s &&
    (em.has(s) || (Y0.has(s) && X0(h))) &&
    (s !== "transform" || !g) &&
    !y &&
    !l &&
    u !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const Z0 = 40;
class q0 extends gu {
  constructor({
    autoplay: r = !0,
    delay: s = 0,
    type: l = "keyframes",
    repeat: u = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: h,
    name: m,
    motionValue: y,
    element: g,
    ...v
  }) {
    var M;
    (super(),
      (this.stop = () => {
        var R, D;
        (this._animation &&
          (this._animation.stop(), (R = this.stopTimeline) == null || R.call(this)),
          (D = this.keyframeResolver) == null || D.cancel());
      }),
      (this.createdAt = et.now()));
    const x = {
        autoplay: r,
        delay: s,
        type: l,
        repeat: u,
        repeatDelay: d,
        repeatType: f,
        name: m,
        motionValue: y,
        element: g,
        ...v,
      },
      P = (g == null ? void 0 : g.KeyframeResolver) || yu;
    ((this.keyframeResolver = new P(
      h,
      (R, D, j) => this.onKeyframesResolved(R, D, x, !j),
      m,
      y,
      g,
    )),
      (M = this.keyframeResolver) == null || M.scheduleResolve());
  }
  onKeyframesResolved(r, s, l, u) {
    var j, B;
    this.keyframeResolver = void 0;
    const { name: d, type: f, velocity: h, delay: m, isHandoff: y, onUpdate: g } = l;
    this.resolvedAt = et.now();
    let v = !0;
    K0(r, d, f, h) ||
      ((v = !1),
      (Sn.instantAnimations || !m) && (g == null || g(ao(r, l, s))),
      (r[0] = r[r.length - 1]),
      za(l),
      (l.repeat = 0));
    const P = {
        startTime: u
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Z0
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: s,
        ...l,
        keyframes: r,
      },
      M = v && !y && b0(P),
      R = (B = (j = P.motionValue) == null ? void 0 : j.owner) == null ? void 0 : B.current;
    let D;
    if (M)
      try {
        D = new H0({ ...P, element: R });
      } catch {
        D = new to(P);
      }
    else D = new to(P);
    (D.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(at),
      this.pendingTimeline &&
        ((this.stopTimeline = D.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = D));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(r, s) {
    return this.finished.finally(r).then(() => {});
  }
  get animation() {
    var r;
    return (
      this._animation || ((r = this.keyframeResolver) == null || r.resume(), F0()),
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
  set time(r) {
    this.animation.time = r;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(r) {
    this.animation.speed = r;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(r) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(r))
        : (this.pendingTimeline = r),
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
    var r;
    (this._animation && this.animation.cancel(), (r = this.keyframeResolver) == null || r.cancel());
  }
}
function tm(n, r, s, l = 0, u = 1) {
  const d = Array.from(n)
      .sort((y, g) => y.sortNodePosition(g))
      .indexOf(r),
    f = n.size,
    h = (f - 1) * l;
  return typeof s == "function" ? s(d, f) : u === 1 ? d * l : h - d * l;
}
const eh = 30,
  J0 = (n) => !isNaN(parseFloat(n)),
  yi = { current: void 0 };
class e1 {
  constructor(r, s = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (l) => {
        var d;
        const u = et.now();
        if (
          (this.updatedAt !== u && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(l),
          this.current !== this.prev &&
            ((d = this.events.change) == null || d.notify(this.current), this.dependents))
        )
          for (const f of this.dependents) f.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(r),
      (this.owner = s.owner));
  }
  setCurrent(r) {
    ((this.current = r),
      (this.updatedAt = et.now()),
      this.canTrackVelocity === null && r !== void 0 && (this.canTrackVelocity = J0(this.current)));
  }
  setPrevFrameValue(r = this.current) {
    ((this.prevFrameValue = r), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(r) {
    return this.on("change", r);
  }
  on(r, s) {
    this.events[r] || (this.events[r] = new ou());
    const l = this.events[r].add(s);
    return r === "change"
      ? () => {
          (l(),
            ue.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : l;
  }
  clearListeners() {
    for (const r in this.events) this.events[r].clear();
  }
  attach(r, s) {
    ((this.passiveEffect = r), (this.stopPassiveEffect = s));
  }
  set(r) {
    this.passiveEffect ? this.passiveEffect(r, this.updateAndNotify) : this.updateAndNotify(r);
  }
  setWithVelocity(r, s, l) {
    (this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = r),
      (this.prevUpdatedAt = this.updatedAt - l));
  }
  jump(r, s = !0) {
    (this.updateAndNotify(r),
      (this.prev = r),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var r;
    (r = this.events.change) == null || r.notify(this.current);
  }
  addDependent(r) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(r));
  }
  removeDependent(r) {
    this.dependents && this.dependents.delete(r);
  }
  get() {
    return (yi.current && yi.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const r = et.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || r - this.updatedAt > eh)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, eh);
    return lu(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(r) {
    return (
      this.stop(),
      new Promise((s) => {
        ((this.hasAnimated = !0),
          (this.animation = r(s)),
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
    var r, s;
    ((r = this.dependents) == null || r.clear(),
      (s = this.events.destroy) == null || s.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Nt(n, r) {
  return new e1(n, r);
}
function nm(n, r) {
  if (n != null && n.inherit && r) {
    const { inherit: s, ...l } = n;
    return { ...r, ...l };
  }
  return n;
}
function xu(n, r) {
  const s = (n == null ? void 0 : n[r]) ?? (n == null ? void 0 : n.default) ?? n;
  return s !== n ? nm(s, n) : s;
}
const t1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  n1 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  r1 = { type: "keyframes", duration: 0.8 },
  i1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  s1 = (n, { keyframes: r }) =>
    r.length > 2 ? r1 : Er.has(n) ? (n.startsWith("scale") ? n1(r[1]) : t1) : i1,
  o1 = new Set([
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
function l1(n) {
  for (const r in n) if (!o1.has(r)) return !0;
  return !1;
}
const Su =
    (n, r, s, l = {}, u, d) =>
    (f) => {
      const h = xu(l, n) || {},
        m = h.delay || l.delay || 0;
      let { elapsed: y = 0 } = l;
      y = y - pt(m);
      const g = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: r.getVelocity(),
        ...h,
        delay: -y,
        onUpdate: (x) => {
          (r.set(x), h.onUpdate && h.onUpdate(x));
        },
        onComplete: () => {
          (f(), h.onComplete && h.onComplete());
        },
        name: n,
        motionValue: r,
        element: d ? void 0 : u,
      };
      (l1(h) || Object.assign(g, s1(n, g)),
        g.duration && (g.duration = pt(g.duration)),
        g.repeatDelay && (g.repeatDelay = pt(g.repeatDelay)),
        g.from !== void 0 && (g.keyframes[0] = g.from));
      let v = !1;
      if (
        ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
          (za(g), g.delay === 0 && (v = !0)),
        (Sn.instantAnimations ||
          Sn.skipAnimations ||
          (u != null && u.shouldSkipAnimations) ||
          h.skipAnimations) &&
          ((v = !0), za(g), (g.delay = 0)),
        (g.allowFlatten = !h.type && !h.ease),
        v && !d && r.get() !== void 0)
      ) {
        const x = ao(g.keyframes, h);
        if (x !== void 0) {
          ue.update(() => {
            (g.onUpdate(x), g.onComplete());
          });
          return;
        }
      }
      return h.isSync ? new to(g) : new q0(g);
    },
  a1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function u1(n) {
  const r = a1.exec(n);
  if (!r) return [,];
  const [, s, l, u] = r;
  return [`--${s ?? l}`, u];
}
function rm(n, r, s = 1) {
  const [l, u] = u1(n);
  if (!l) return;
  const d = window.getComputedStyle(r).getPropertyValue(l);
  if (d) {
    const f = d.trim();
    return vp(f) ? parseFloat(f) : f;
  }
  return cu(u) ? rm(u, r, s + 1) : u;
}
function th(n) {
  const r = [{}, {}];
  return (
    n == null ||
      n.values.forEach((s, l) => {
        ((r[0][l] = s.get()), (r[1][l] = s.getVelocity()));
      }),
    r
  );
}
function ku(n, r, s, l) {
  if (typeof r == "function") {
    const [u, d] = th(l);
    r = r(s !== void 0 ? s : n.custom, u, d);
  }
  if ((typeof r == "string" && (r = n.variants && n.variants[r]), typeof r == "function")) {
    const [u, d] = th(l);
    r = r(s !== void 0 ? s : n.custom, u, d);
  }
  return r;
}
function Un(n, r, s) {
  const l = n.getProps();
  return ku(l, r, s !== void 0 ? s : l.custom, n);
}
const im = new Set(["width", "height", "top", "left", "right", "bottom", ...Pr]),
  Ba = (n) => Array.isArray(n);
function c1(n, r, s) {
  n.hasValue(r) ? n.getValue(r).set(s) : n.addValue(r, Nt(s));
}
function f1(n) {
  return Ba(n) ? n[n.length - 1] || 0 : n;
}
function d1(n, r) {
  const s = Un(n, r);
  let { transitionEnd: l = {}, transition: u = {}, ...d } = s || {};
  d = { ...d, ...l };
  for (const f in d) {
    const h = f1(d[f]);
    c1(n, f, h);
  }
}
const Xe = (n) => !!(n && n.getVelocity);
function h1(n) {
  return !!(Xe(n) && n.add);
}
function Ua(n, r) {
  const s = n.getValue("willChange");
  if (h1(s)) return s.add(r);
  if (!s && Sn.WillChange) {
    const l = new Sn.WillChange("auto");
    (n.addValue("willChange", l), l.add(r));
  }
}
function Tu(n) {
  return n.replace(/([A-Z])/g, (r) => `-${r.toLowerCase()}`);
}
const p1 = "framerAppearId",
  sm = "data-" + Tu(p1);
function om(n) {
  return n.props[sm];
}
function m1({ protectedKeys: n, needsAnimating: r }, s) {
  const l = n.hasOwnProperty(s) && r[s] !== !0;
  return ((r[s] = !1), l);
}
function lm(n, r, { delay: s = 0, transitionOverride: l, type: u } = {}) {
  let { transition: d, transitionEnd: f, ...h } = r;
  const m = n.getDefaultTransition();
  d = d ? nm(d, m) : m;
  const y = d == null ? void 0 : d.reduceMotion,
    g = d == null ? void 0 : d.skipAnimations;
  l && (d = l);
  const v = [],
    x = u && n.animationState && n.animationState.getState()[u],
    P = d == null ? void 0 : d.path;
  P && P.animateVisualElement(n, h, d, s, v);
  for (const M in h) {
    const R = n.getValue(M, n.latestValues[M] ?? null),
      D = h[M];
    if (D === void 0 || (x && m1(x, M))) continue;
    const j = { delay: s, ...xu(d || {}, M) };
    g && (j.skipAnimations = !0);
    const B = R.get();
    if (B !== void 0 && !R.isAnimating() && !Array.isArray(D) && D === B && !j.velocity) {
      ue.update(() => R.set(D));
      continue;
    }
    let z = !1;
    if (window.MotionHandoffAnimation) {
      const ie = om(n);
      if (ie) {
        const re = window.MotionHandoffAnimation(ie, M, ue);
        re !== null && ((j.startTime = re), (z = !0));
      }
    }
    Ua(n, M);
    const U = y ?? n.shouldReduceMotion;
    R.start(Su(M, R, D, U && im.has(M) ? { type: !1 } : j, n, z));
    const Z = R.animation;
    Z && v.push(Z);
  }
  if (f) {
    const M = () =>
      ue.update(() => {
        f && d1(n, f);
      });
    v.length ? Promise.all(v).then(M) : M();
  }
  return v;
}
function Wa(n, r, s = {}) {
  var m;
  const l = Un(
    n,
    r,
    s.type === "exit" ? ((m = n.presenceContext) == null ? void 0 : m.custom) : void 0,
  );
  let { transition: u = n.getDefaultTransition() || {} } = l || {};
  s.transitionOverride && (u = s.transitionOverride);
  const d = l ? () => Promise.all(lm(n, l, s)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (y = 0) => {
            const { delayChildren: g = 0, staggerChildren: v, staggerDirection: x } = u;
            return g1(n, r, y, g, v, x, s);
          }
        : () => Promise.resolve(),
    { when: h } = u;
  if (h) {
    const [y, g] = h === "beforeChildren" ? [d, f] : [f, d];
    return y().then(() => g());
  } else return Promise.all([d(), f(s.delay)]);
}
function g1(n, r, s = 0, l = 0, u = 0, d = 1, f) {
  const h = [];
  for (const m of n.variantChildren)
    (m.notify("AnimationStart", r),
      h.push(
        Wa(m, r, {
          ...f,
          delay: s + (typeof l == "function" ? 0 : l) + tm(n.variantChildren, m, l, u, d),
        }).then(() => m.notify("AnimationComplete", r)),
      ));
  return Promise.all(h);
}
function y1(n, r, s = {}) {
  n.notify("AnimationStart", r);
  let l;
  if (Array.isArray(r)) {
    const u = r.map((d) => Wa(n, d, s));
    l = Promise.all(u);
  } else if (typeof r == "string") l = Wa(n, r, s);
  else {
    const u = typeof r == "function" ? Un(n, r, s.custom) : r;
    l = Promise.all(lm(n, u, s));
  }
  return l.then(() => {
    n.notify("AnimationComplete", r);
  });
}
const v1 = { test: (n) => n === "auto", parse: (n) => n },
  am = (n) => (r) => r.test(n),
  um = [Tr, X, Ht, qt, Xv, Gv, v1],
  nh = (n) => um.find(am(n));
function w1(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || xp(n) : !0;
}
const x1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function S1(n) {
  const [r, s] = n.slice(0, -1).split("(");
  if (r === "drop-shadow") return n;
  const [l] = s.match(fu) || [];
  if (!l) return n;
  const u = s.replace(l, "");
  let d = x1.has(r) ? 1 : 0;
  return (l !== s && (d *= 100), r + "(" + d + u + ")");
}
const k1 = /\b([a-z-]*)\(.*?\)/gu,
  Ha = {
    ..._t,
    getAnimatableNone: (n) => {
      const r = n.match(k1);
      return r ? r.map(S1).join(" ") : n;
    },
  },
  $a = {
    ..._t,
    getAnimatableNone: (n) => {
      const r = _t.parse(n);
      return _t.createTransformer(n)(
        r.map((l) => (typeof l == "number" ? 0 : typeof l == "object" ? { ...l, alpha: 1 } : l)),
      );
    },
  },
  rh = { ...Tr, transform: Math.round },
  T1 = {
    rotate: qt,
    pathRotation: qt,
    rotateX: qt,
    rotateY: qt,
    rotateZ: qt,
    scale: Bs,
    scaleX: Bs,
    scaleY: Bs,
    scaleZ: Bs,
    skew: qt,
    skewX: qt,
    skewY: qt,
    distance: X,
    translateX: X,
    translateY: X,
    translateZ: X,
    x: X,
    y: X,
    z: X,
    perspective: X,
    transformPerspective: X,
    opacity: xi,
    originX: Hd,
    originY: Hd,
    originZ: X,
  },
  no = {
    borderWidth: X,
    borderTopWidth: X,
    borderRightWidth: X,
    borderBottomWidth: X,
    borderLeftWidth: X,
    borderRadius: X,
    borderTopLeftRadius: X,
    borderTopRightRadius: X,
    borderBottomRightRadius: X,
    borderBottomLeftRadius: X,
    width: X,
    maxWidth: X,
    height: X,
    maxHeight: X,
    top: X,
    right: X,
    bottom: X,
    left: X,
    inset: X,
    insetBlock: X,
    insetBlockStart: X,
    insetBlockEnd: X,
    insetInline: X,
    insetInlineStart: X,
    insetInlineEnd: X,
    padding: X,
    paddingTop: X,
    paddingRight: X,
    paddingBottom: X,
    paddingLeft: X,
    paddingBlock: X,
    paddingBlockStart: X,
    paddingBlockEnd: X,
    paddingInline: X,
    paddingInlineStart: X,
    paddingInlineEnd: X,
    margin: X,
    marginTop: X,
    marginRight: X,
    marginBottom: X,
    marginLeft: X,
    marginBlock: X,
    marginBlockStart: X,
    marginBlockEnd: X,
    marginInline: X,
    marginInlineStart: X,
    marginInlineEnd: X,
    fontSize: X,
    backgroundPositionX: X,
    backgroundPositionY: X,
    ...T1,
    zIndex: rh,
    fillOpacity: xi,
    strokeOpacity: xi,
    numOctaves: rh,
  },
  P1 = {
    ...no,
    color: Ie,
    backgroundColor: Ie,
    outlineColor: Ie,
    fill: Ie,
    stroke: Ie,
    borderColor: Ie,
    borderTopColor: Ie,
    borderRightColor: Ie,
    borderBottomColor: Ie,
    borderLeftColor: Ie,
    filter: Ha,
    WebkitFilter: Ha,
    mask: $a,
    WebkitMask: $a,
  },
  cm = (n) => P1[n],
  E1 = new Set([Ha, $a]);
function fm(n, r) {
  let s = cm(n);
  return (E1.has(s) || (s = _t), s.getAnimatableNone ? s.getAnimatableNone(r) : void 0);
}
const C1 = new Set(["auto", "none", "0"]);
function A1(n, r, s) {
  let l = 0,
    u;
  for (; l < n.length && !u;) {
    const d = n[l];
    (typeof d == "string" && !C1.has(d) && Sr(d).values.length && (u = n[l]), l++);
  }
  if (u && s) for (const d of r) n[d] = fm(s, u);
}
class M1 extends yu {
  constructor(r, s, l, u, d) {
    super(r, s, l, u, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: r, element: s, name: l } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let g = 0; g < r.length; g++) {
      let v = r[g];
      if (typeof v == "string" && ((v = v.trim()), cu(v))) {
        const x = rm(v, s.current);
        (x !== void 0 && (r[g] = x), g === r.length - 1 && (this.finalKeyframe = v));
      }
    }
    if ((this.resolveNoneKeyframes(), !im.has(l) || r.length !== 2)) return;
    const [u, d] = r,
      f = nh(u),
      h = nh(d),
      m = Wd(u),
      y = Wd(d);
    if (m !== y && xn[l]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== h)
      if (Zd(f) && Zd(h))
        for (let g = 0; g < r.length; g++) {
          const v = r[g];
          typeof v == "string" && (r[g] = parseFloat(v));
        }
      else xn[l] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: r, name: s } = this,
      l = [];
    for (let u = 0; u < r.length; u++) (r[u] === null || w1(r[u])) && l.push(u);
    l.length && A1(r, l, s);
  }
  measureInitialState() {
    const { element: r, unresolvedKeyframes: s, name: l } = this;
    if (!r || !r.current) return;
    (l === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = xn[l](r.measureViewportBox(), window.getComputedStyle(r.current))),
      (s[0] = this.measuredOrigin));
    const u = s[s.length - 1];
    u !== void 0 && r.getValue(l, u).jump(u, !1);
  }
  measureEndState() {
    var h;
    const { element: r, name: s, unresolvedKeyframes: l } = this;
    if (!r || !r.current) return;
    const u = r.getValue(s);
    u && u.jump(this.measuredOrigin, !1);
    const d = l.length - 1,
      f = l[d];
    ((l[d] = xn[s](r.measureViewportBox(), window.getComputedStyle(r.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (h = this.removedTransforms) != null &&
        h.length &&
        this.removedTransforms.forEach(([m, y]) => {
          r.getValue(m).set(y);
        }),
      this.resolveNoneKeyframes());
  }
}
function dm(n, r, s) {
  if (n == null) return [];
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    const u = document.querySelectorAll(n);
    return u ? Array.from(u) : [];
  }
  return Array.from(n).filter((l) => l != null);
}
const Ka = (n, r) => (r && typeof n == "number" ? r.transform(n) : n);
function hm(n) {
  return wp(n) && "offsetHeight" in n && !("ownerSVGElement" in n);
}
const { schedule: kr, cancel: pm } = Lp(queueMicrotask, !1),
  Lt = { x: !1, y: !1 };
function mm() {
  return Lt.x || Lt.y;
}
function R1(n) {
  return n === "x" || n === "y"
    ? Lt[n]
      ? null
      : ((Lt[n] = !0),
        () => {
          Lt[n] = !1;
        })
    : Lt.x || Lt.y
      ? null
      : ((Lt.x = Lt.y = !0),
        () => {
          Lt.x = Lt.y = !1;
        });
}
function gm(n, r) {
  const s = dm(n),
    l = new AbortController(),
    u = { passive: !0, ...r, signal: l.signal };
  return [s, u, () => l.abort()];
}
function D1(n) {
  return !(n.pointerType === "touch" || mm());
}
function V1(n, r, s = {}) {
  const [l, u, d] = gm(n, s);
  return (
    l.forEach((f) => {
      let h = !1,
        m = !1,
        y;
      const g = () => {
          f.removeEventListener("pointerleave", M);
        },
        v = (D) => {
          (y && (y(D), (y = void 0)), g());
        },
        x = (D) => {
          ((h = !1),
            window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", x),
            m && ((m = !1), v(D)));
        },
        P = () => {
          ((h = !0),
            window.addEventListener("pointerup", x, u),
            window.addEventListener("pointercancel", x, u));
        },
        M = (D) => {
          if (D.pointerType !== "touch") {
            if (h) {
              m = !0;
              return;
            }
            v(D);
          }
        },
        R = (D) => {
          if (!D1(D)) return;
          m = !1;
          const j = r(f, D);
          typeof j == "function" && ((y = j), f.addEventListener("pointerleave", M, u));
        };
      (f.addEventListener("pointerenter", R, u), f.addEventListener("pointerdown", P, u));
    }),
    d
  );
}
const ym = (n, r) => (r ? (n === r ? !0 : ym(n, r.parentElement)) : !1),
  Pu = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  L1 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function N1(n) {
  return L1.has(n.tagName) || n.isContentEditable === !0;
}
const _1 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function j1(n) {
  return _1.has(n.tagName) || n.isContentEditable === !0;
}
const Ks = new WeakSet();
function ih(n) {
  return (r) => {
    r.key === "Enter" && n(r);
  };
}
function ya(n, r) {
  n.dispatchEvent(new PointerEvent("pointer" + r, { isPrimary: !0, bubbles: !0 }));
}
const F1 = (n, r) => {
  const s = n.currentTarget;
  if (!s) return;
  const l = ih(() => {
    if (Ks.has(s)) return;
    ya(s, "down");
    const u = ih(() => {
        ya(s, "up");
      }),
      d = () => ya(s, "cancel");
    (s.addEventListener("keyup", u, r), s.addEventListener("blur", d, r));
  });
  (s.addEventListener("keydown", l, r),
    s.addEventListener("blur", () => s.removeEventListener("keydown", l), r));
};
function sh(n) {
  return Pu(n) && !mm();
}
const oh = new WeakSet();
function I1(n, r, s = {}) {
  const [l, u, d] = gm(n, s),
    f = (h) => {
      const m = h.currentTarget;
      if (!sh(h) || oh.has(h)) return;
      (Ks.add(m), s.stopPropagation && oh.add(h));
      const y = r(m, h),
        g = (P, M) => {
          (window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", x),
            Ks.has(m) && Ks.delete(m),
            sh(P) && typeof y == "function" && y(P, { success: M }));
        },
        v = (P) => {
          g(P, m === window || m === document || s.useGlobalTarget || ym(m, P.target));
        },
        x = (P) => {
          g(P, !1);
        };
      (window.addEventListener("pointerup", v, u), window.addEventListener("pointercancel", x, u));
    };
  return (
    l.forEach((h) => {
      ((s.useGlobalTarget ? window : h).addEventListener("pointerdown", f, u),
        hm(h) &&
          (h.addEventListener("focus", (y) => F1(y, u)),
          !N1(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0)));
    }),
    d
  );
}
function Eu(n) {
  return wp(n) && "ownerSVGElement" in n;
}
const Gs = new WeakMap();
let wn;
const vm = (n, r, s) => (l, u) =>
    u && u[0] ? u[0][n + "Size"] : Eu(l) && "getBBox" in l ? l.getBBox()[r] : l[s],
  O1 = vm("inline", "width", "offsetWidth"),
  z1 = vm("block", "height", "offsetHeight");
function B1({ target: n, borderBoxSize: r }) {
  var s;
  (s = Gs.get(n)) == null ||
    s.forEach((l) => {
      l(n, {
        get width() {
          return O1(n, r);
        },
        get height() {
          return z1(n, r);
        },
      });
    });
}
function U1(n) {
  n.forEach(B1);
}
function W1() {
  typeof ResizeObserver > "u" || (wn = new ResizeObserver(U1));
}
function H1(n, r) {
  wn || W1();
  const s = dm(n);
  return (
    s.forEach((l) => {
      let u = Gs.get(l);
      (u || ((u = new Set()), Gs.set(l, u)), u.add(r), wn == null || wn.observe(l));
    }),
    () => {
      s.forEach((l) => {
        const u = Gs.get(l);
        (u == null || u.delete(r), (u != null && u.size) || wn == null || wn.unobserve(l));
      });
    }
  );
}
const Xs = new Set();
let gr;
function $1() {
  ((gr = () => {
    const n = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Xs.forEach((r) => r(n));
  }),
    window.addEventListener("resize", gr));
}
function K1(n) {
  return (
    Xs.add(n),
    gr || $1(),
    () => {
      (Xs.delete(n),
        !Xs.size &&
          typeof gr == "function" &&
          (window.removeEventListener("resize", gr), (gr = void 0)));
    }
  );
}
function Ga(n, r) {
  return typeof n == "function" ? K1(n) : H1(n, r);
}
function wm(n, r) {
  let s;
  const l = () => {
    const { currentTime: u } = r,
      f = (u === null ? 0 : u.value) / 100;
    (s !== f && n(f), (s = f));
  };
  return (ue.preUpdate(l, !0), () => Tt(l));
}
function G1(n) {
  return Eu(n) && n.tagName === "svg";
}
function X1(...n) {
  const r = !Array.isArray(n[0]),
    s = r ? 0 : -1,
    l = n[0 + s],
    u = n[1 + s],
    d = n[2 + s],
    f = n[3 + s],
    h = mu(u, d, f);
  return r ? h(l) : h;
}
const Y1 = [...um, Ie, _t],
  Q1 = (n) => Y1.find(am(n)),
  lh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  yr = () => ({ x: lh(), y: lh() }),
  ah = () => ({ min: 0, max: 0 }),
  Be = () => ({ x: ah(), y: ah() }),
  b1 = new WeakMap();
function uo(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function Si(n) {
  return typeof n == "string" || Array.isArray(n);
}
const Cu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Au = ["initial", ...Cu];
function co(n) {
  return uo(n.animate) || Au.some((r) => Si(n[r]));
}
function xm(n) {
  return !!(co(n) || n.variants);
}
function Z1(n, r, s) {
  for (const l in r) {
    const u = r[l],
      d = s[l];
    if (Xe(u)) n.addValue(l, u);
    else if (Xe(d)) n.addValue(l, Nt(u, { owner: n }));
    else if (d !== u)
      if (n.hasValue(l)) {
        const f = n.getValue(l);
        f.liveStyle === !0 ? f.jump(u) : f.hasAnimated || f.set(u);
      } else {
        const f = n.getStaticValue(l);
        n.addValue(l, Nt(f !== void 0 ? f : u, { owner: n }));
      }
  }
  for (const l in s) r[l] === void 0 && n.removeValue(l);
  return r;
}
const Xa = { current: null },
  Sm = { current: !1 },
  q1 = typeof window < "u";
function J1() {
  if (((Sm.current = !0), !!q1))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        r = () => (Xa.current = n.matches);
      (n.addEventListener("change", r), r());
    } else Xa.current = !1;
}
const uh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let ro = {};
function km(n) {
  ro = n;
}
function ew() {
  return ro;
}
class tw {
  scrapeMotionValuesFromProps(r, s, l) {
    return {};
  }
  constructor(
    {
      parent: r,
      props: s,
      presenceContext: l,
      reducedMotionConfig: u,
      skipAnimations: d,
      blockInitialAnimation: f,
      visualState: h,
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
      (this.KeyframeResolver = yu),
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
        const P = et.now();
        this.renderScheduledAt < P &&
          ((this.renderScheduledAt = P), ue.render(this.render, !1, !0));
      }));
    const { latestValues: y, renderState: g } = h;
    ((this.latestValues = y),
      (this.baseTarget = { ...y }),
      (this.initialValues = s.initial ? { ...y } : {}),
      (this.renderState = g),
      (this.parent = r),
      (this.props = s),
      (this.presenceContext = l),
      (this.depth = r ? r.depth + 1 : 0),
      (this.reducedMotionConfig = u),
      (this.skipAnimationsConfig = d),
      (this.options = m),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = co(s)),
      (this.isVariantNode = xm(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(r && r.current)));
    const { willChange: v, ...x } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const P in x) {
      const M = x[P];
      y[P] !== void 0 && Xe(M) && M.set(y[P]);
    }
  }
  mount(r) {
    var s, l;
    if (this.hasBeenMounted)
      for (const u in this.initialValues)
        ((s = this.values.get(u)) == null || s.jump(this.initialValues[u]),
          (this.latestValues[u] = this.initialValues[u]));
    ((this.current = r),
      b1.set(r, this),
      this.projection && !this.projection.instance && this.projection.mount(r),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((u, d) => this.bindToMotionValue(d, u)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (Sm.current || J1(), (this.shouldReduceMotion = Xa.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (l = this.parent) == null || l.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var r;
    (this.projection && this.projection.unmount(),
      Tt(this.notifyUpdate),
      Tt(this.render),
      this.valueSubscriptions.forEach((s) => s()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (r = this.parent) == null || r.removeChild(this));
    for (const s in this.events) this.events[s].clear();
    for (const s in this.features) {
      const l = this.features[s];
      l && (l.unmount(), (l.isMounted = !1));
    }
    this.current = null;
  }
  addChild(r) {
    (this.children.add(r),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(r));
  }
  removeChild(r) {
    (this.children.delete(r), this.enteringChildren && this.enteringChildren.delete(r));
  }
  bindToMotionValue(r, s) {
    if (
      (this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)(),
      s.accelerate && em.has(r) && this.current instanceof HTMLElement)
    ) {
      const { factory: f, keyframes: h, times: m, ease: y, duration: g } = s.accelerate,
        v = new qp({
          element: this.current,
          name: r,
          keyframes: h,
          times: m,
          ease: y,
          duration: pt(g),
        }),
        x = f(v);
      this.valueSubscriptions.set(r, () => {
        (x(), v.cancel());
      });
      return;
    }
    const l = Er.has(r);
    l && this.onBindTransform && this.onBindTransform();
    const u = s.on("change", (f) => {
      ((this.latestValues[r] = f),
        this.props.onUpdate && ue.preRender(this.notifyUpdate),
        l && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let d;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, r, s)),
      this.valueSubscriptions.set(r, () => {
        (u(), d && d());
      }));
  }
  sortNodePosition(r) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== r.type
      ? 0
      : this.sortInstanceNodePosition(this.current, r.current);
  }
  updateFeatures() {
    let r = "animation";
    for (r in ro) {
      const s = ro[r];
      if (!s) continue;
      const { isEnabled: l, Feature: u } = s;
      if (
        (!this.features[r] && u && l(this.props) && (this.features[r] = new u(this)),
        this.features[r])
      ) {
        const d = this.features[r];
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
  getStaticValue(r) {
    return this.latestValues[r];
  }
  setStaticValue(r, s) {
    this.latestValues[r] = s;
  }
  update(r, s) {
    ((r.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = r),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s));
    for (let l = 0; l < uh.length; l++) {
      const u = uh[l];
      this.propEventSubscriptions[u] &&
        (this.propEventSubscriptions[u](), delete this.propEventSubscriptions[u]);
      const d = "on" + u,
        f = r[d];
      f && (this.propEventSubscriptions[u] = this.on(u, f));
    }
    ((this.prevMotionValues = Z1(
      this,
      this.scrapeMotionValuesFromProps(r, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(r) {
    return this.props.variants ? this.props.variants[r] : void 0;
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
  addVariantChild(r) {
    const s = this.getClosestVariantNode();
    if (s)
      return (s.variantChildren && s.variantChildren.add(r), () => s.variantChildren.delete(r));
  }
  addValue(r, s) {
    const l = this.values.get(r);
    s !== l &&
      (l && this.removeValue(r),
      this.bindToMotionValue(r, s),
      this.values.set(r, s),
      (this.latestValues[r] = s.get()));
  }
  removeValue(r) {
    this.values.delete(r);
    const s = this.valueSubscriptions.get(r);
    (s && (s(), this.valueSubscriptions.delete(r)),
      delete this.latestValues[r],
      this.removeValueFromRenderState(r, this.renderState));
  }
  hasValue(r) {
    return this.values.has(r);
  }
  getValue(r, s) {
    if (this.props.values && this.props.values[r]) return this.props.values[r];
    let l = this.values.get(r);
    return (
      l === void 0 &&
        s !== void 0 &&
        ((l = Nt(s === null ? void 0 : s, { owner: this })), this.addValue(r, l)),
      l
    );
  }
  readValue(r, s) {
    let l =
      this.latestValues[r] !== void 0 || !this.current
        ? this.latestValues[r]
        : (this.getBaseTargetFromProps(this.props, r) ??
          this.readValueFromInstance(this.current, r, this.options));
    return (
      l != null &&
        (typeof l == "string" && (vp(l) || xp(l))
          ? (l = parseFloat(l))
          : !Q1(l) && _t.test(s) && (l = fm(r, s)),
        this.setBaseTarget(r, Xe(l) ? l.get() : l)),
      Xe(l) ? l.get() : l
    );
  }
  setBaseTarget(r, s) {
    this.baseTarget[r] = s;
  }
  getBaseTarget(r) {
    var d;
    const { initial: s } = this.props;
    let l;
    if (typeof s == "string" || typeof s == "object") {
      const f = ku(this.props, s, (d = this.presenceContext) == null ? void 0 : d.custom);
      f && (l = f[r]);
    }
    if (s && l !== void 0) return l;
    const u = this.getBaseTargetFromProps(this.props, r);
    return u !== void 0 && !Xe(u)
      ? u
      : this.initialValues[r] !== void 0 && l === void 0
        ? void 0
        : this.baseTarget[r];
  }
  on(r, s) {
    return (this.events[r] || (this.events[r] = new ou()), this.events[r].add(s));
  }
  notify(r, ...s) {
    this.events[r] && this.events[r].notify(...s);
  }
  scheduleRenderMicrotask() {
    kr.render(this.render);
  }
}
class Tm extends tw {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = M1));
  }
  sortInstanceNodePosition(r, s) {
    return r.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(r, s) {
    const l = r.style;
    return l ? l[s] : void 0;
  }
  removeValueFromRenderState(r, { vars: s, style: l }) {
    (delete s[r], delete l[r]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: r } = this.props;
    Xe(r) &&
      (this.childSubscription = r.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
class kn {
  constructor(r) {
    ((this.isMounted = !1), (this.node = r));
  }
  update() {}
}
function Pm({ top: n, left: r, right: s, bottom: l }) {
  return { x: { min: r, max: s }, y: { min: n, max: l } };
}
function nw({ x: n, y: r }) {
  return { top: r.min, right: n.max, bottom: r.max, left: n.min };
}
function rw(n, r) {
  if (!r) return n;
  const s = r({ x: n.left, y: n.top }),
    l = r({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: l.y, right: l.x };
}
function va(n) {
  return n === void 0 || n === 1;
}
function Ya({ scale: n, scaleX: r, scaleY: s }) {
  return !va(n) || !va(r) || !va(s);
}
function In(n) {
  return Ya(n) || Em(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Em(n) {
  return ch(n.x) || ch(n.y);
}
function ch(n) {
  return n && n !== "0%";
}
function io(n, r, s) {
  const l = n - s,
    u = r * l;
  return s + u;
}
function fh(n, r, s, l, u) {
  return (u !== void 0 && (n = io(n, u, l)), io(n, s, l) + r);
}
function Qa(n, r = 0, s = 1, l, u) {
  ((n.min = fh(n.min, r, s, l, u)), (n.max = fh(n.max, r, s, l, u)));
}
function Cm(n, { x: r, y: s }) {
  (Qa(n.x, r.translate, r.scale, r.originPoint), Qa(n.y, s.translate, s.scale, s.originPoint));
}
const dh = 0.999999999999,
  hh = 1.0000000000001;
function iw(n, r, s, l = !1) {
  var h;
  const u = s.length;
  if (!u) return;
  r.x = r.y = 1;
  let d, f;
  for (let m = 0; m < u; m++) {
    ((d = s[m]), (f = d.projectionDelta));
    const { visualElement: y } = d.options;
    (y && y.props.style && y.props.style.display === "contents") ||
      (l &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        (Wt(n.x, -d.scroll.offset.x), Wt(n.y, -d.scroll.offset.y)),
      f && ((r.x *= f.x.scale), (r.y *= f.y.scale), Cm(n, f)),
      l &&
        In(d.latestValues) &&
        Ys(n, d.latestValues, (h = d.layout) == null ? void 0 : h.layoutBox));
  }
  (r.x < hh && r.x > dh && (r.x = 1), r.y < hh && r.y > dh && (r.y = 1));
}
function Wt(n, r) {
  ((n.min += r), (n.max += r));
}
function ph(n, r, s, l, u = 0.5) {
  const d = ge(n.min, n.max, u);
  Qa(n, r, s, d, l);
}
function mh(n, r) {
  return typeof n == "string" ? (parseFloat(n) / 100) * (r.max - r.min) : n;
}
function Ys(n, r, s) {
  const l = s ?? n;
  (ph(n.x, mh(r.x, l.x), r.scaleX, r.scale, r.originX),
    ph(n.y, mh(r.y, l.y), r.scaleY, r.scale, r.originY));
}
function Am(n, r) {
  return Pm(rw(n.getBoundingClientRect(), r));
}
function sw(n, r, s) {
  const l = Am(n, s),
    { scroll: u } = r;
  return (u && (Wt(l.x, u.offset.x), Wt(l.y, u.offset.y)), l);
}
const ow = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  lw = Pr.length;
function aw(n, r, s) {
  let l = "",
    u = !0;
  for (let f = 0; f < lw; f++) {
    const h = Pr[f],
      m = n[h];
    if (m === void 0) continue;
    let y = !0;
    if (typeof m == "number") y = m === (h.startsWith("scale") ? 1 : 0);
    else {
      const g = parseFloat(m);
      y = h.startsWith("scale") ? g === 1 : g === 0;
    }
    if (!y || s) {
      const g = Ka(m, no[h]);
      if (!y) {
        u = !1;
        const v = ow[h] || h;
        l += `${v}(${g}) `;
      }
      s && (r[h] = g);
    }
  }
  const d = n.pathRotation;
  return (
    d && ((u = !1), (l += `rotate(${Ka(d, no.pathRotation)}) `)),
    (l = l.trim()),
    s ? (l = s(r, u ? "" : l)) : u && (l = "none"),
    l
  );
}
function Mu(n, r, s) {
  const { style: l, vars: u, transformOrigin: d } = n;
  let f = !1,
    h = !1;
  for (const m in r) {
    const y = r[m];
    if (Er.has(m)) {
      f = !0;
      continue;
    } else if (_p(m)) {
      u[m] = y;
      continue;
    } else {
      const g = Ka(y, no[m]);
      m.startsWith("origin") ? ((h = !0), (d[m] = g)) : (l[m] = g);
    }
  }
  if (
    (r.transform ||
      (f || s ? (l.transform = aw(r, n.transform, s)) : l.transform && (l.transform = "none")),
    h)
  ) {
    const { originX: m = "50%", originY: y = "50%", originZ: g = 0 } = d;
    l.transformOrigin = `${m} ${y} ${g}`;
  }
}
function Mm(n, { style: r, vars: s }, l, u) {
  const d = n.style;
  let f;
  for (f in r) d[f] = r[f];
  u == null || u.applyProjectionStyles(d, l);
  for (f in s) d.setProperty(f, s[f]);
}
function gh(n, r) {
  return r.max === r.min ? 0 : (n / (r.max - r.min)) * 100;
}
const di = {
    correct: (n, r) => {
      if (!r.target) return n;
      if (typeof n == "string")
        if (X.test(n)) n = parseFloat(n);
        else return n;
      const s = gh(n, r.target.x),
        l = gh(n, r.target.y);
      return `${s}% ${l}%`;
    },
  },
  uw = {
    correct: (n, { treeScale: r, projectionDelta: s }) => {
      const l = n,
        u = _t.parse(n);
      if (u.length > 5) return l;
      const d = _t.createTransformer(n),
        f = typeof u[0] != "number" ? 1 : 0,
        h = s.x.scale * r.x,
        m = s.y.scale * r.y;
      ((u[0 + f] /= h), (u[1 + f] /= m));
      const y = ge(h, m, 0.5);
      return (
        typeof u[2 + f] == "number" && (u[2 + f] /= y),
        typeof u[3 + f] == "number" && (u[3 + f] /= y),
        d(u)
      );
    },
  },
  ba = {
    borderRadius: {
      ...di,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: di,
    borderTopRightRadius: di,
    borderBottomLeftRadius: di,
    borderBottomRightRadius: di,
    boxShadow: uw,
  };
function Rm(n, { layout: r, layoutId: s }) {
  return (
    Er.has(n) || n.startsWith("origin") || ((r || s !== void 0) && (!!ba[n] || n === "opacity"))
  );
}
function Ru(n, r, s) {
  var f;
  const l = n.style,
    u = r == null ? void 0 : r.style,
    d = {};
  if (!l) return d;
  for (const h in l)
    (Xe(l[h]) ||
      (u && Xe(u[h])) ||
      Rm(h, n) ||
      ((f = s == null ? void 0 : s.getValue(h)) == null ? void 0 : f.liveStyle) !== void 0) &&
      (d[h] = l[h]);
  return d;
}
function cw(n) {
  return window.getComputedStyle(n);
}
class fw extends Tm {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Mm));
  }
  readValueFromInstance(r, s) {
    var l;
    if (Er.has(s)) return (l = this.projection) != null && l.isProjecting ? _a(s) : V0(r, s);
    {
      const u = cw(r),
        d = (_p(s) ? u.getPropertyValue(s) : u[s]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(r, { transformPagePoint: s }) {
    return Am(r, s);
  }
  build(r, s, l) {
    Mu(r, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(r, s, l) {
    return Ru(r, s, l);
  }
}
const dw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  hw = { offset: "strokeDashoffset", array: "strokeDasharray" };
function pw(n, r, s = 1, l = 0, u = !0) {
  n.pathLength = 1;
  const d = u ? dw : hw;
  ((n[d.offset] = `${-l}`), (n[d.array] = `${r} ${s}`));
}
const mw = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Dm(
  n,
  { attrX: r, attrY: s, attrScale: l, pathLength: u, pathSpacing: d = 1, pathOffset: f = 0, ...h },
  m,
  y,
  g,
) {
  if ((Mu(n, h, y), m)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: v, style: x } = n;
  (v.transform && ((x.transform = v.transform), delete v.transform),
    (x.transform || v.transformOrigin) &&
      ((x.transformOrigin = v.transformOrigin ?? "50% 50%"), delete v.transformOrigin),
    x.transform &&
      ((x.transformBox = (g == null ? void 0 : g.transformBox) ?? "fill-box"),
      delete v.transformBox));
  for (const P of mw) v[P] !== void 0 && ((x[P] = v[P]), delete v[P]);
  (r !== void 0 && (v.x = r),
    s !== void 0 && (v.y = s),
    l !== void 0 && (v.scale = l),
    u !== void 0 && pw(v, u, d, f, !1));
}
const Vm = new Set([
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
  Lm = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function gw(n, r, s, l) {
  Mm(n, r, void 0, l);
  for (const u in r.attrs) n.setAttribute(Vm.has(u) ? u : Tu(u), r.attrs[u]);
}
function Nm(n, r, s) {
  const l = Ru(n, r, s);
  for (const u in n)
    if (Xe(n[u]) || Xe(r[u])) {
      const d = Pr.indexOf(u) !== -1 ? "attr" + u.charAt(0).toUpperCase() + u.substring(1) : u;
      l[d] = n[u];
    }
  return l;
}
class yw extends Tm {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Be));
  }
  getBaseTargetFromProps(r, s) {
    return r[s];
  }
  readValueFromInstance(r, s) {
    if (Er.has(s)) {
      const l = cm(s);
      return (l && l.default) || 0;
    }
    return ((s = Vm.has(s) ? s : Tu(s)), r.getAttribute(s));
  }
  scrapeMotionValuesFromProps(r, s, l) {
    return Nm(r, s, l);
  }
  build(r, s, l) {
    Dm(r, s, this.isSVGTag, l.transformTemplate, l.style);
  }
  renderInstance(r, s, l, u) {
    gw(r, s, l, u);
  }
  mount(r) {
    ((this.isSVGTag = Lm(r.tagName)), super.mount(r));
  }
}
const vw = Au.length;
function _m(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? _m(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const r = {};
  for (let s = 0; s < vw; s++) {
    const l = Au[s],
      u = n.props[l];
    (Si(u) || u === !1) && (r[l] = u);
  }
  return r;
}
function jm(n, r) {
  if (!Array.isArray(r)) return !1;
  const s = r.length;
  if (s !== n.length) return !1;
  for (let l = 0; l < s; l++) if (r[l] !== n[l]) return !1;
  return !0;
}
const ww = [...Cu].reverse(),
  xw = Cu.length;
function Sw(n) {
  return (r) => Promise.all(r.map(({ animation: s, options: l }) => y1(n, s, l)));
}
function kw(n) {
  let r = Sw(n),
    s = yh(),
    l = !0,
    u = !1;
  const d = (y) => (g, v) => {
    var P;
    const x = Un(
      n,
      v,
      y === "exit" ? ((P = n.presenceContext) == null ? void 0 : P.custom) : void 0,
    );
    if (x) {
      const { transition: M, transitionEnd: R, ...D } = x;
      g = { ...g, ...D, ...R };
    }
    return g;
  };
  function f(y) {
    r = y(n);
  }
  function h(y) {
    const { props: g } = n,
      v = _m(n.parent) || {},
      x = [],
      P = new Set();
    let M = {},
      R = 1 / 0;
    for (let j = 0; j < xw; j++) {
      const B = ww[j],
        z = s[B],
        U = g[B] !== void 0 ? g[B] : v[B],
        Z = Si(U),
        ie = B === y ? z.isActive : null;
      ie === !1 && (R = j);
      let re = U === v[B] && U !== g[B] && Z;
      if (
        (re && (l || u) && n.manuallyAnimateOnMount && (re = !1),
        (z.protectedKeys = { ...M }),
        (!z.isActive && ie === null) || (!U && !z.prevProp) || uo(U) || typeof U == "boolean")
      )
        continue;
      if (B === "exit" && z.isActive && ie !== !0) {
        z.prevResolvedValues && (M = { ...M, ...z.prevResolvedValues });
        continue;
      }
      const q = Tw(z.prevProp, U);
      let ye = q || (B === y && z.isActive && !re && Z) || (j > R && Z),
        J = !1;
      const me = Array.isArray(U) ? U : [U];
      let xe = me.reduce(d(B), {});
      ie === !1 && (xe = {});
      const { prevResolvedValues: Le = {} } = z,
        Re = { ...Le, ...xe },
        je = (F) => {
          ((ye = !0), P.has(F) && ((J = !0), P.delete(F)), (z.needsAnimating[F] = !0));
          const Y = n.getValue(F);
          Y && (Y.liveStyle = !1);
        };
      for (const F in Re) {
        const Y = xe[F],
          W = Le[F];
        if (M.hasOwnProperty(F)) continue;
        let T = !1;
        (Ba(Y) && Ba(W) ? (T = !jm(Y, W) || q) : (T = Y !== W),
          T
            ? Y != null
              ? je(F)
              : P.add(F)
            : Y !== void 0 && P.has(F)
              ? je(F)
              : (z.protectedKeys[F] = !0));
      }
      ((z.prevProp = U),
        (z.prevResolvedValues = xe),
        z.isActive && (M = { ...M, ...xe }),
        (l || u) && n.blockInitialAnimation && (ye = !1));
      const Se = re && q;
      ye &&
        (!Se || J) &&
        x.push(
          ...me.map((F) => {
            const Y = { type: B };
            if (typeof F == "string" && (l || u) && !Se && n.manuallyAnimateOnMount && n.parent) {
              const { parent: W } = n,
                T = Un(W, F);
              if (W.enteringChildren && T) {
                const { delayChildren: V } = T.transition || {};
                Y.delay = tm(W.enteringChildren, n, V);
              }
            }
            return { animation: F, options: Y };
          }),
        );
    }
    if (P.size) {
      const j = {};
      if (typeof g.initial != "boolean") {
        const B = Un(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        B && B.transition && (j.transition = B.transition);
      }
      (P.forEach((B) => {
        const z = n.getBaseTarget(B),
          U = n.getValue(B);
        (U && (U.liveStyle = !0), (j[B] = z ?? null));
      }),
        x.push({ animation: j }));
    }
    let D = !!x.length;
    return (
      l && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (D = !1),
      (l = !1),
      (u = !1),
      D ? r(x) : Promise.resolve()
    );
  }
  function m(y, g) {
    var x;
    if (s[y].isActive === g) return Promise.resolve();
    ((x = n.variantChildren) == null ||
      x.forEach((P) => {
        var M;
        return (M = P.animationState) == null ? void 0 : M.setActive(y, g);
      }),
      (s[y].isActive = g));
    const v = h(y);
    for (const P in s) s[P].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: h,
    setActive: m,
    setAnimateFunction: f,
    getState: () => s,
    reset: () => {
      ((s = yh()), (u = !0));
    },
  };
}
function Tw(n, r) {
  return typeof r == "string" ? r !== n : Array.isArray(r) ? !jm(r, n) : !1;
}
function Fn(n = !1) {
  return { isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function yh() {
  return {
    animate: Fn(!0),
    whileInView: Fn(),
    whileHover: Fn(),
    whileTap: Fn(),
    whileDrag: Fn(),
    whileFocus: Fn(),
    exit: Fn(),
  };
}
function Za(n, r) {
  ((n.min = r.min), (n.max = r.max));
}
function Vt(n, r) {
  (Za(n.x, r.x), Za(n.y, r.y));
}
function vh(n, r) {
  ((n.translate = r.translate),
    (n.scale = r.scale),
    (n.originPoint = r.originPoint),
    (n.origin = r.origin));
}
const Fm = 1e-4,
  Pw = 1 - Fm,
  Ew = 1 + Fm,
  Im = 0.01,
  Cw = 0 - Im,
  Aw = 0 + Im;
function tt(n) {
  return n.max - n.min;
}
function Mw(n, r, s) {
  return Math.abs(n - r) <= s;
}
function wh(n, r, s, l = 0.5) {
  ((n.origin = l),
    (n.originPoint = ge(r.min, r.max, n.origin)),
    (n.scale = tt(s) / tt(r)),
    (n.translate = ge(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= Pw && n.scale <= Ew) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= Cw && n.translate <= Aw) || isNaN(n.translate)) && (n.translate = 0));
}
function vi(n, r, s, l) {
  (wh(n.x, r.x, s.x, l ? l.originX : void 0), wh(n.y, r.y, s.y, l ? l.originY : void 0));
}
function xh(n, r, s, l = 0) {
  const u = l ? ge(s.min, s.max, l) : s.min;
  ((n.min = u + r.min), (n.max = n.min + tt(r)));
}
function Rw(n, r, s, l) {
  (xh(n.x, r.x, s.x, l == null ? void 0 : l.x), xh(n.y, r.y, s.y, l == null ? void 0 : l.y));
}
function Sh(n, r, s, l = 0) {
  const u = l ? ge(s.min, s.max, l) : s.min;
  ((n.min = r.min - u), (n.max = n.min + tt(r)));
}
function so(n, r, s, l) {
  (Sh(n.x, r.x, s.x, l == null ? void 0 : l.x), Sh(n.y, r.y, s.y, l == null ? void 0 : l.y));
}
function kh(n, r, s, l, u) {
  return ((n -= r), (n = io(n, 1 / s, l)), u !== void 0 && (n = io(n, 1 / u, l)), n);
}
function Dw(n, r = 0, s = 1, l = 0.5, u, d = n, f = n) {
  if (
    (Ht.test(r) && ((r = parseFloat(r)), (r = ge(f.min, f.max, r / 100) - f.min)),
    typeof r != "number")
  )
    return;
  let h = ge(d.min, d.max, l);
  (n === d && (h -= r), (n.min = kh(n.min, r, s, h, u)), (n.max = kh(n.max, r, s, h, u)));
}
function Th(n, r, [s, l, u], d, f) {
  Dw(n, r[s], r[l], r[u], r.scale, d, f);
}
const Vw = ["x", "scaleX", "originX"],
  Lw = ["y", "scaleY", "originY"];
function Ph(n, r, s, l) {
  (Th(n.x, r, Vw, s ? s.x : void 0, l ? l.x : void 0),
    Th(n.y, r, Lw, s ? s.y : void 0, l ? l.y : void 0));
}
function Eh(n) {
  return n.translate === 0 && n.scale === 1;
}
function Om(n) {
  return Eh(n.x) && Eh(n.y);
}
function Ch(n, r) {
  return n.min === r.min && n.max === r.max;
}
function Nw(n, r) {
  return Ch(n.x, r.x) && Ch(n.y, r.y);
}
function Ah(n, r) {
  return Math.round(n.min) === Math.round(r.min) && Math.round(n.max) === Math.round(r.max);
}
function zm(n, r) {
  return Ah(n.x, r.x) && Ah(n.y, r.y);
}
function Mh(n) {
  return tt(n.x) / tt(n.y);
}
function Rh(n, r) {
  return n.translate === r.translate && n.scale === r.scale && n.originPoint === r.originPoint;
}
function Ut(n) {
  return [n("x"), n("y")];
}
function _w(n, r, s) {
  let l = "";
  const u = n.x.translate / r.x,
    d = n.y.translate / r.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((u || d || f) && (l = `translate3d(${u}px, ${d}px, ${f}px) `),
    (r.x !== 1 || r.y !== 1) && (l += `scale(${1 / r.x}, ${1 / r.y}) `),
    s)
  ) {
    const {
      transformPerspective: y,
      rotate: g,
      pathRotation: v,
      rotateX: x,
      rotateY: P,
      skewX: M,
      skewY: R,
    } = s;
    (y && (l = `perspective(${y}px) ${l}`),
      g && (l += `rotate(${g}deg) `),
      v && (l += `rotate(${v}deg) `),
      x && (l += `rotateX(${x}deg) `),
      P && (l += `rotateY(${P}deg) `),
      M && (l += `skewX(${M}deg) `),
      R && (l += `skewY(${R}deg) `));
  }
  const h = n.x.scale * r.x,
    m = n.y.scale * r.y;
  return ((h !== 1 || m !== 1) && (l += `scale(${h}, ${m})`), l || "none");
}
const Bm = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  jw = Bm.length,
  Dh = (n) => (typeof n == "string" ? parseFloat(n) : n),
  Vh = (n) => typeof n == "number" || X.test(n);
function Fw(n, r, s, l, u, d) {
  u
    ? ((n.opacity = ge(0, s.opacity ?? 1, Iw(l))), (n.opacityExit = ge(r.opacity ?? 1, 0, Ow(l))))
    : d && (n.opacity = ge(r.opacity ?? 1, s.opacity ?? 1, l));
  for (let f = 0; f < jw; f++) {
    const h = Bm[f];
    let m = Lh(r, h),
      y = Lh(s, h);
    if (m === void 0 && y === void 0) continue;
    (m || (m = 0),
      y || (y = 0),
      m === 0 || y === 0 || Vh(m) === Vh(y)
        ? ((n[h] = Math.max(ge(Dh(m), Dh(y), l), 0)), (Ht.test(y) || Ht.test(m)) && (n[h] += "%"))
        : (n[h] = y));
  }
  (r.rotate || s.rotate) && (n.rotate = ge(r.rotate || 0, s.rotate || 0, l));
}
function Lh(n, r) {
  return n[r] !== void 0 ? n[r] : n.borderRadius;
}
const Iw = Um(0, 0.5, Mp),
  Ow = Um(0.5, 0.95, at);
function Um(n, r, s) {
  return (l) => (l < n ? 0 : l > r ? 1 : s(xr(n, r, l)));
}
function zw(n, r, s) {
  const l = Xe(n) ? n : Nt(n);
  return (l.start(Su("", l, r, s)), l.animation);
}
function ki(n, r, s, l = { passive: !0 }) {
  return (n.addEventListener(r, s, l), () => n.removeEventListener(r, s));
}
const Bw = (n, r) => n.depth - r.depth;
class Uw {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(r) {
    (iu(this.children, r), (this.isDirty = !0));
  }
  remove(r) {
    (Zs(this.children, r), (this.isDirty = !0));
  }
  forEach(r) {
    (this.isDirty && this.children.sort(Bw), (this.isDirty = !1), this.children.forEach(r));
  }
}
function Ww(n, r) {
  const s = et.now(),
    l = ({ timestamp: u }) => {
      const d = u - s;
      d >= r && (Tt(l), n(d - r));
    };
  return (ue.setup(l, !0), () => Tt(l));
}
function Qs(n) {
  return Xe(n) ? n.get() : n;
}
class Hw {
  constructor() {
    this.members = [];
  }
  add(r) {
    iu(this.members, r);
    for (let s = this.members.length - 1; s >= 0; s--) {
      const l = this.members[s];
      if (l === r || l === this.lead || l === this.prevLead) continue;
      const u = l.instance;
      (!u || u.isConnected === !1) && !l.snapshot && (Zs(this.members, l), l.unmount());
    }
    r.scheduleRender();
  }
  remove(r) {
    if ((Zs(this.members, r), r === this.prevLead && (this.prevLead = void 0), r === this.lead)) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(r) {
    var s;
    for (let l = this.members.indexOf(r) - 1; l >= 0; l--) {
      const u = this.members[l];
      if (u.isPresent !== !1 && ((s = u.instance) == null ? void 0 : s.isConnected) !== !1)
        return (this.promote(u), !0);
    }
    return !1;
  }
  promote(r, s) {
    var u;
    const l = this.lead;
    if (r !== l && ((this.prevLead = l), (this.lead = r), r.show(), l)) {
      (l.updateSnapshot(), r.scheduleRender());
      const { layoutDependency: d } = l.options,
        { layoutDependency: f } = r.options;
      ((d === void 0 || d !== f) &&
        ((r.resumeFrom = l),
        s && (l.preserveOpacity = !0),
        l.snapshot &&
          ((r.snapshot = l.snapshot),
          (r.snapshot.latestValues = l.animationValues || l.latestValues)),
        (u = r.root) != null && u.isUpdating && (r.isLayoutDirty = !0)),
        r.options.crossfade === !1 && l.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((r) => {
      var s, l, u, d, f;
      ((l = (s = r.options).onExitComplete) == null || l.call(s),
        (f = (u = r.resumingFrom) == null ? void 0 : (d = u.options).onExitComplete) == null ||
          f.call(d));
    });
  }
  scheduleRender() {
    this.members.forEach((r) => r.instance && r.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var r;
    (r = this.lead) != null && r.snapshot && (this.lead.snapshot = void 0);
  }
}
const bs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  wa = ["", "X", "Y", "Z"],
  $w = 1e3;
let Kw = 0;
function xa(n, r, s, l) {
  const { latestValues: u } = r;
  u[n] && ((s[n] = u[n]), r.setStaticValue(n, 0), l && (l[n] = 0));
}
function Wm(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: r } = n.options;
  if (!r) return;
  const s = om(r);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: u, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", ue, !(u || d));
  }
  const { parent: l } = n;
  l && !l.hasCheckedOptimisedAppear && Wm(l);
}
function Hm({
  attachResizeListener: n,
  defaultParent: r,
  measureScroll: s,
  checkIsScrollRoot: l,
  resetTransform: u,
}) {
  return class {
    constructor(f = {}, h = r == null ? void 0 : r()) {
      ((this.id = Kw++),
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
            this.nodes.forEach(Yw),
            this.nodes.forEach(ex),
            this.nodes.forEach(tx),
            this.nodes.forEach(Qw));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = h ? h.root || h : this),
        (this.path = h ? [...h.path, h] : []),
        (this.parent = h),
        (this.depth = h ? h.depth + 1 : 0));
      for (let m = 0; m < this.path.length; m++) this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Uw());
    }
    addEventListener(f, h) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new ou()),
        this.eventHandlers.get(f).add(h)
      );
    }
    notifyListeners(f, ...h) {
      const m = this.eventHandlers.get(f);
      m && m.notify(...h);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = Eu(f) && !G1(f)), (this.instance = f));
      const { layoutId: h, layout: m, visualElement: y } = this.options;
      if (
        (y && !y.current && y.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (m || h) && (this.isLayoutDirty = !0),
        n)
      ) {
        let g,
          v = 0;
        const x = () => (this.root.updateBlockedByResize = !1);
        (ue.read(() => {
          v = window.innerWidth;
        }),
          n(f, () => {
            const P = window.innerWidth;
            P !== v &&
              ((v = P),
              (this.root.updateBlockedByResize = !0),
              g && g(),
              (g = Ww(x, 250)),
              bs.hasAnimatedSinceResize &&
                ((bs.hasAnimatedSinceResize = !1), this.nodes.forEach(jh)));
          }));
      }
      (h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          y &&
          (h || m) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: g, hasLayoutChanged: v, hasRelativeLayoutChanged: x, layout: P }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const M = this.options.transition || y.getDefaultTransition() || ox,
                { onLayoutAnimationStart: R, onLayoutAnimationComplete: D } = y.getProps(),
                j = !this.targetLayout || !zm(this.targetLayout, P),
                B = !v && x;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                B ||
                (v && (j || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const z = { ...xu(M, "layout"), onPlay: R, onComplete: D };
                ((y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((z.delay = 0), (z.type = !1)),
                  this.startAnimation(z),
                  this.setAnimationOrigin(g, B, z.path));
              } else
                (v || jh(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = P;
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
        Tt(this.updateProjection));
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(nx), this.animationId++);
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
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Wm(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        ((v.shouldResetTransform = !0),
          (typeof v.latestValues.x == "string" || typeof v.latestValues.y == "string") &&
            (v.isLayoutDirty = !0),
          v.updateScroll("snapshot"),
          v.options.layoutRoot && v.willUpdate(!1));
      }
      const { layoutId: h, layout: m } = this.options;
      if (h === void 0 && !m) return;
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
          m && this.nodes.forEach(Zw),
          this.nodes.forEach(Nh));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(_h);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(qw),
            this.nodes.forEach(Jw),
            this.nodes.forEach(Gw),
            this.nodes.forEach(Xw))
          : this.nodes.forEach(_h),
        this.clearAllSnapshots());
      const h = et.now();
      (($e.delta = jt(0, 1e3 / 60, h - $e.timestamp)),
        ($e.timestamp = h),
        ($e.isProcessing = !0),
        fa.update.process($e),
        fa.preRender.process($e),
        fa.render.process($e),
        ($e.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), kr.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(bw), this.sharedNodes.forEach(rx));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), ue.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ue.postRender(() => {
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
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (h = !1),
        h && this.instance)
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
      if (!u) return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !Om(this.projectionDelta),
        m = this.getTransformTemplate(),
        y = m ? m(this.latestValues, "") : void 0,
        g = y !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (h || In(this.latestValues) || g) &&
        (u(this.instance, y), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let m = this.removeElementScroll(h);
      return (
        f && (m = this.removeTransform(m)),
        lx(m),
        {
          animationId: this.root.animationId,
          measuredBox: h,
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
      const h = f.measureViewportBox();
      if (!(((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(ax))) {
        const { scroll: g } = this.root;
        g && (Wt(h.x, g.offset.x), Wt(h.y, g.offset.y));
      }
      return h;
    }
    removeElementScroll(f) {
      var m;
      const h = Be();
      if ((Vt(h, f), (m = this.scroll) != null && m.wasRoot)) return h;
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y],
          { scroll: v, options: x } = g;
        g !== this.root &&
          v &&
          x.layoutScroll &&
          (v.wasRoot && Vt(h, f), Wt(h.x, v.offset.x), Wt(h.y, v.offset.y));
      }
      return h;
    }
    applyTransform(f, h = !1, m) {
      var g, v;
      const y = m || Be();
      Vt(y, f);
      for (let x = 0; x < this.path.length; x++) {
        const P = this.path[x];
        (!h &&
          P.options.layoutScroll &&
          P.scroll &&
          P !== P.root &&
          (Wt(y.x, -P.scroll.offset.x), Wt(y.y, -P.scroll.offset.y)),
          In(P.latestValues) &&
            Ys(y, P.latestValues, (g = P.layout) == null ? void 0 : g.layoutBox));
      }
      return (
        In(this.latestValues) &&
          Ys(y, this.latestValues, (v = this.layout) == null ? void 0 : v.layoutBox),
        y
      );
    }
    removeTransform(f) {
      var m;
      const h = Be();
      Vt(h, f);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        if (!In(g.latestValues)) continue;
        let v;
        (g.instance &&
          (Ya(g.latestValues) && g.updateSnapshot(), (v = Be()), Vt(v, g.measurePageBox())),
          Ph(h, g.latestValues, (m = g.snapshot) == null ? void 0 : m.layoutBox, v));
      }
      return (In(this.latestValues) && Ph(h, this.latestValues), h);
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
        this.relativeParent.resolvedRelativeTargetAt !== $e.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var P;
      const h = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty));
      const m = !!this.resumingFrom || this !== h;
      if (!(
        f ||
        (m && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        ((P = this.parent) != null && P.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: g, layoutId: v } = this.options;
      if (!this.layout || !(g || v)) return;
      this.resolvedRelativeTargetAt = $e.timestamp;
      const x = this.getClosestProjectingParent();
      (x &&
        this.linkedParentVersion !== x.layoutVersion &&
        !x.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && x && x.layout
            ? this.createRelativeTarget(x, this.layout.layoutBox, x.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = Be()), (this.targetWithTransforms = Be())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Rw(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Vt(this.target, this.layout.layoutBox),
                Cm(this.target, this.targetDelta))
              : Vt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            x &&
            !!x.resumingFrom == !!this.resumingFrom &&
            !x.options.layoutScroll &&
            x.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(x, this.target, x.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ya(this.parent.latestValues) || Em(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, h, m) {
      ((this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Be()),
        (this.relativeTargetOrigin = Be()),
        so(this.relativeTargetOrigin, h, m, this.options.layoutAnchor || void 0),
        Vt(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var M;
      const f = this.getLead(),
        h = !!this.resumingFrom || this !== f;
      let m = !0;
      if (
        ((this.isProjectionDirty || ((M = this.parent) != null && M.isProjectionDirty)) && (m = !1),
        h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
        this.resolvedRelativeTargetAt === $e.timestamp && (m = !1),
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
      Vt(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x,
        x = this.treeScale.y;
      (iw(this.layoutCorrected, this.treeScale, this.path, h),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Be())));
      const { target: P } = f;
      if (!P) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (vh(this.prevProjectionDelta.x, this.projectionDelta.x),
          vh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        vi(this.projectionDelta, this.layoutCorrected, P, this.latestValues),
        (this.treeScale.x !== v ||
          this.treeScale.y !== x ||
          !Rh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Rh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", P)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var h;
      if (((h = this.options.visualElement) == null || h.scheduleRender(), f)) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = yr()),
        (this.projectionDelta = yr()),
        (this.projectionDeltaWithTransform = yr()));
    }
    setAnimationOrigin(f, h = !1, m) {
      const y = this.snapshot,
        g = y ? y.latestValues : {},
        v = { ...this.latestValues },
        x = yr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !h));
      const P = Be(),
        M = y ? y.source : void 0,
        R = this.layout ? this.layout.source : void 0,
        D = M !== R,
        j = this.getStack(),
        B = !j || j.members.length <= 1,
        z = !!(D && !B && this.options.crossfade === !0 && !this.path.some(sx));
      this.animationProgress = 0;
      let U;
      const Z = m == null ? void 0 : m.interpolateProjection(f);
      ((this.mixTargetDelta = (ie) => {
        const re = ie / 1e3,
          q = Z == null ? void 0 : Z(re);
        (q
          ? ((x.x.translate = q.x),
            (x.x.scale = ge(f.x.scale, 1, re)),
            (x.x.origin = f.x.origin),
            (x.x.originPoint = f.x.originPoint),
            (x.y.translate = q.y),
            (x.y.scale = ge(f.y.scale, 1, re)),
            (x.y.origin = f.y.origin),
            (x.y.originPoint = f.y.originPoint))
          : (Fh(x.x, f.x, re), Fh(x.y, f.y, re)),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (so(
              P,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            ix(this.relativeTarget, this.relativeTargetOrigin, P, re),
            U && Nw(this.relativeTarget, U) && (this.isProjectionDirty = !1),
            U || (U = Be()),
            Vt(U, this.relativeTarget)),
          D && ((this.animationValues = v), Fw(v, g, this.latestValues, re, z, B)),
          q &&
            q.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = v),
            (this.animationValues.pathRotation = q.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = re));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      var h, m, y;
      (this.notifyListeners("animationStart"),
        (h = this.currentAnimation) == null || h.stop(),
        (y = (m = this.resumingFrom) == null ? void 0 : m.currentAnimation) == null || y.stop(),
        this.pendingAnimation && (Tt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ue.update(() => {
          ((bs.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Nt(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = zw(this.motionValue, [0, 1e3], {
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
        (this.mixTargetDelta && this.mixTargetDelta($w), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: h, target: m, layout: y, latestValues: g } = f;
      if (!(!h || !m || !y)) {
        if (
          this !== f &&
          this.layout &&
          y &&
          $m(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          m = this.target || Be();
          const v = tt(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + v));
          const x = tt(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + x));
        }
        (Vt(h, m), Ys(h, g), vi(this.projectionDeltaWithTransform, this.layoutCorrected, h, g));
      }
    }
    registerSharedNode(f, h) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new Hw()),
        this.sharedNodes.get(f).add(h));
      const y = h.options.initialPromotionConfig;
      h.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity:
          y && y.shouldPreserveFollowOpacity ? y.shouldPreserveFollowOpacity(h) : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var h;
      const { layoutId: f } = this.options;
      return f ? ((h = this.getStack()) == null ? void 0 : h.lead) || this : this;
    }
    getPrevLead() {
      var h;
      const { layoutId: f } = this.options;
      return f ? ((h = this.getStack()) == null ? void 0 : h.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: h, preserveFollowOpacity: m } = {}) {
      const y = this.getStack();
      (y && y.promote(this, m),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        h && this.setOptions({ transition: h }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let h = !1;
      const { latestValues: m } = f;
      if (
        ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (h = !0),
        !h)
      )
        return;
      const y = {};
      m.z && xa("z", f, y, this.animationValues);
      for (let g = 0; g < wa.length; g++)
        (xa(`rotate${wa[g]}`, f, y, this.animationValues),
          xa(`skew${wa[g]}`, f, y, this.animationValues));
      f.render();
      for (const g in y)
        (f.setStaticValue(g, y[g]), this.animationValues && (this.animationValues[g] = y[g]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, h) {
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
          (f.pointerEvents = Qs(h == null ? void 0 : h.pointerEvents) || ""),
          (f.transform = m ? m(this.latestValues, "") : "none"));
        return;
      }
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        (this.options.layoutId &&
          ((f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (f.pointerEvents = Qs(h == null ? void 0 : h.pointerEvents) || "")),
          this.hasProjected &&
            !In(this.latestValues) &&
            ((f.transform = m ? m({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const g = y.animationValues || y.latestValues;
      this.applyTransformsToTarget();
      let v = _w(this.projectionDeltaWithTransform, this.treeScale, g);
      (m && (v = m(g, v)), (f.transform = v));
      const { x, y: P } = this.projectionDelta;
      ((f.transformOrigin = `${x.origin * 100}% ${P.origin * 100}% 0`),
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
      for (const M in ba) {
        if (g[M] === void 0) continue;
        const { correct: R, applyTo: D, isCSSVariable: j } = ba[M],
          B = v === "none" ? g[M] : R(g[M], y);
        if (D) {
          const z = D.length;
          for (let U = 0; U < z; U++) f[D[U]] = B;
        } else j ? (this.options.visualElement.renderState.vars[M] = B) : (f[M] = B);
      }
      this.options.layoutId &&
        (f.pointerEvents = y === this ? Qs(h == null ? void 0 : h.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => {
        var h;
        return (h = f.currentAnimation) == null ? void 0 : h.stop();
      }),
        this.root.nodes.forEach(Nh),
        this.root.sharedNodes.clear());
    }
  };
}
function Gw(n) {
  n.updateLayout();
}
function Xw(n) {
  var s;
  const r = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && r && n.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: u } = n.layout,
      { animationType: d } = n.options,
      f = r.source !== n.layout.source;
    if (d === "size")
      Ut((v) => {
        const x = f ? r.measuredBox[v] : r.layoutBox[v],
          P = tt(x);
        ((x.min = l[v].min), (x.max = x.min + P));
      });
    else if (d === "x" || d === "y") {
      const v = d === "x" ? "y" : "x";
      Za(f ? r.measuredBox[v] : r.layoutBox[v], l[v]);
    } else
      $m(d, r.layoutBox, l) &&
        Ut((v) => {
          const x = f ? r.measuredBox[v] : r.layoutBox[v],
            P = tt(l[v]);
          ((x.max = x.min + P),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[v].max = n.relativeTarget[v].min + P)));
        });
    const h = yr();
    vi(h, l, r.layoutBox);
    const m = yr();
    f ? vi(m, n.applyTransform(u, !0), r.measuredBox) : vi(m, l, r.layoutBox);
    const y = !Om(h);
    let g = !1;
    if (!n.resumeFrom) {
      const v = n.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: x, layout: P } = v;
        if (x && P) {
          const M = n.options.layoutAnchor || void 0,
            R = Be();
          so(R, r.layoutBox, x.layoutBox, M);
          const D = Be();
          (so(D, l, P.layoutBox, M),
            zm(R, D) || (g = !0),
            v.options.layoutRoot &&
              ((n.relativeTarget = D), (n.relativeTargetOrigin = R), (n.relativeParent = v)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: l,
      snapshot: r,
      delta: m,
      layoutDelta: h,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: g,
    });
  } else if (n.isLead()) {
    const { onExitComplete: l } = n.options;
    l && l();
  }
  n.options.transition = void 0;
}
function Yw(n) {
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
function Qw(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function bw(n) {
  n.clearSnapshot();
}
function Nh(n) {
  n.clearMeasurements();
}
function Zw(n) {
  ((n.isLayoutDirty = !0), n.updateLayout());
}
function _h(n) {
  n.isLayoutDirty = !1;
}
function qw(n) {
  n.isAnimationBlocked &&
    n.layout &&
    !n.isLayoutDirty &&
    ((n.snapshot = n.layout), (n.isLayoutDirty = !0));
}
function Jw(n) {
  const { visualElement: r } = n.options;
  (r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function jh(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function ex(n) {
  n.resolveTargetDelta();
}
function tx(n) {
  n.calcProjection();
}
function nx(n) {
  n.resetSkewAndRotation();
}
function rx(n) {
  n.removeLeadSnapshot();
}
function Fh(n, r, s) {
  ((n.translate = ge(r.translate, 0, s)),
    (n.scale = ge(r.scale, 1, s)),
    (n.origin = r.origin),
    (n.originPoint = r.originPoint));
}
function Ih(n, r, s, l) {
  ((n.min = ge(r.min, s.min, l)), (n.max = ge(r.max, s.max, l)));
}
function ix(n, r, s, l) {
  (Ih(n.x, r.x, s.x, l), Ih(n.y, r.y, s.y, l));
}
function sx(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const ox = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Oh = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  zh = Oh("applewebkit/") && !Oh("chrome/") ? Math.round : at;
function Bh(n) {
  ((n.min = zh(n.min)), (n.max = zh(n.max)));
}
function lx(n) {
  (Bh(n.x), Bh(n.y));
}
function $m(n, r, s) {
  return n === "position" || (n === "preserve-aspect" && !Mw(Mh(r), Mh(s), 0.2));
}
function ax(n) {
  var r;
  return n !== n.root && ((r = n.scroll) == null ? void 0 : r.wasRoot);
}
const ux = Hm({
    attachResizeListener: (n, r) => ki(n, "resize", r),
    measureScroll: () => {
      var n, r;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((n = document.body) == null ? void 0 : n.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((r = document.body) == null ? void 0 : r.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  Sa = { current: void 0 },
  Km = Hm({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!Sa.current) {
        const n = new ux({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (Sa.current = n));
      }
      return Sa.current;
    },
    resetTransform: (n, r) => {
      n.style.transform = r !== void 0 ? r : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  Du = K.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
function cx(n = !0) {
  const r = K.useContext(ru);
  if (r === null) return [!0, null];
  const { isPresent: s, onExitComplete: l, register: u } = r,
    d = K.useId();
  K.useEffect(() => {
    if (n) return u(d);
  }, [n]);
  const f = K.useCallback(() => n && l && l(d), [d, l, n]);
  return !s && l ? [!1, f] : [!0];
}
const Gm = K.createContext({ strict: !1 }),
  Uh = {
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
let Wh = !1;
function fx() {
  if (Wh) return;
  const n = {};
  for (const r in Uh) n[r] = { isEnabled: (s) => Uh[r].some((l) => !!s[l]) };
  (km(n), (Wh = !0));
}
function Xm() {
  return (fx(), ew());
}
function dx(n) {
  const r = Xm();
  for (const s in n) r[s] = { ...r[s], ...n[s] };
  km(r);
}
const hx = new Set([
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
function oo(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    hx.has(n)
  );
}
let Ym = (n) => !oo(n);
function px(n) {
  typeof n == "function" && (Ym = (r) => (r.startsWith("on") ? !oo(r) : n(r)));
}
try {
  px(require("@emotion/is-prop-valid").default);
} catch {}
function mx(n, r, s) {
  const l = {};
  for (const u in n)
    (u === "values" && typeof n.values == "object") ||
      Xe(n[u]) ||
      ((Ym(u) ||
        (s === !0 && oo(u)) ||
        (!r && !oo(u)) ||
        (n.draggable && u.startsWith("onDrag"))) &&
        (l[u] = n[u]));
  return l;
}
const fo = K.createContext({});
function gx(n, r) {
  if (co(n)) {
    const { initial: s, animate: l } = n;
    return { initial: s === !1 || Si(s) ? s : void 0, animate: Si(l) ? l : void 0 };
  }
  return n.inherit !== !1 ? r : {};
}
function yx(n) {
  const { initial: r, animate: s } = gx(n, K.useContext(fo));
  return K.useMemo(() => ({ initial: r, animate: s }), [Hh(r), Hh(s)]);
}
function Hh(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const Vu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Qm(n, r, s) {
  for (const l in r) !Xe(r[l]) && !Rm(l, s) && (n[l] = r[l]);
}
function vx({ transformTemplate: n }, r) {
  return K.useMemo(() => {
    const s = Vu();
    return (Mu(s, r, n), Object.assign({}, s.vars, s.style));
  }, [r]);
}
function wx(n, r) {
  const s = n.style || {},
    l = {};
  return (Qm(l, s, n), Object.assign(l, vx(n, r)), l);
}
function xx(n, r) {
  const s = {},
    l = wx(n, r);
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
const bm = () => ({ ...Vu(), attrs: {} });
function Sx(n, r, s, l) {
  const u = K.useMemo(() => {
    const d = bm();
    return (Dm(d, r, Lm(l), n.transformTemplate, n.style), { ...d.attrs, style: { ...d.style } });
  }, [r]);
  if (n.style) {
    const d = {};
    (Qm(d, n.style, n), (u.style = { ...d, ...u.style }));
  }
  return u;
}
const kx = [
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
function Lu(n) {
  return typeof n != "string" || n.includes("-") ? !1 : !!(kx.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function Tx(n, r, s, { latestValues: l }, u, d = !1, f) {
  const m = ((f ?? Lu(n)) ? Sx : xx)(r, l, u, n),
    y = mx(r, typeof n == "string", d),
    g = n !== K.Fragment ? { ...y, ...m, ref: s } : {},
    { children: v } = r,
    x = K.useMemo(() => (Xe(v) ? v.get() : v), [v]);
  return K.createElement(n, { ...g, children: x });
}
function Px({ scrapeMotionValuesFromProps: n, createRenderState: r }, s, l, u) {
  return { latestValues: Ex(s, l, u, n), renderState: r() };
}
function Ex(n, r, s, l) {
  const u = {},
    d = l(n, {});
  for (const x in d) u[x] = Qs(d[x]);
  let { initial: f, animate: h } = n;
  const m = co(n),
    y = xm(n);
  r &&
    y &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = r.initial), h === void 0 && (h = r.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || f === !1;
  const v = g ? h : f;
  if (v && typeof v != "boolean" && !uo(v)) {
    const x = Array.isArray(v) ? v : [v];
    for (let P = 0; P < x.length; P++) {
      const M = ku(n, x[P]);
      if (M) {
        const { transitionEnd: R, transition: D, ...j } = M;
        for (const B in j) {
          let z = j[B];
          if (Array.isArray(z)) {
            const U = g ? z.length - 1 : 0;
            z = z[U];
          }
          z !== null && (u[B] = z);
        }
        for (const B in R) u[B] = R[B];
      }
    }
  }
  return u;
}
const Zm = (n) => (r, s) => {
    const l = K.useContext(fo),
      u = K.useContext(ru),
      d = () => Px(n, r, l, u);
    return s ? d() : wr(d);
  },
  Cx = Zm({ scrapeMotionValuesFromProps: Ru, createRenderState: Vu }),
  Ax = Zm({ scrapeMotionValuesFromProps: Nm, createRenderState: bm }),
  Mx = Symbol.for("motionComponentSymbol");
function Rx(n, r, s) {
  const l = K.useRef(s);
  K.useInsertionEffect(() => {
    l.current = s;
  });
  const u = K.useRef(null);
  return K.useCallback(
    (d) => {
      var h;
      (d && ((h = n.onMount) == null || h.call(n, d)), r && (d ? r.mount(d) : r.unmount()));
      const f = l.current;
      if (typeof f == "function")
        if (d) {
          const m = f(d);
          typeof m == "function" && (u.current = m);
        } else u.current ? (u.current(), (u.current = null)) : f(d);
      else f && (f.current = d);
    },
    [r],
  );
}
const qm = K.createContext({});
function pr(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function Dx(n, r, s, l, u, d) {
  var z, U;
  const { visualElement: f } = K.useContext(fo),
    h = K.useContext(Gm),
    m = K.useContext(ru),
    y = K.useContext(Du),
    g = y.reducedMotion,
    v = y.skipAnimations,
    x = K.useRef(null),
    P = K.useRef(!1);
  ((l = l || h.renderer),
    !x.current &&
      l &&
      ((x.current = l(n, {
        visualState: r,
        parent: f,
        props: s,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g,
        skipAnimations: v,
        isSVG: d,
      })),
      P.current && x.current && (x.current.manuallyAnimateOnMount = !0)));
  const M = x.current,
    R = K.useContext(qm);
  M && !M.projection && u && (M.type === "html" || M.type === "svg") && Vx(x.current, s, u, R);
  const D = K.useRef(!1);
  K.useInsertionEffect(() => {
    M && D.current && M.update(s, m);
  });
  const j = s[sm],
    B = K.useRef(
      !!j &&
        typeof window < "u" &&
        !((z = window.MotionHandoffIsComplete) != null && z.call(window, j)) &&
        ((U = window.MotionHasOptimisedAnimation) == null ? void 0 : U.call(window, j)),
    );
  return (
    nu(() => {
      ((P.current = !0),
        M &&
          ((D.current = !0),
          (window.MotionIsMounted = !0),
          M.updateFeatures(),
          M.scheduleRenderMicrotask(),
          B.current && M.animationState && M.animationState.animateChanges()));
    }),
    K.useEffect(() => {
      M &&
        (!B.current && M.animationState && M.animationState.animateChanges(),
        B.current &&
          (queueMicrotask(() => {
            var Z;
            (Z = window.MotionHandoffMarkAsComplete) == null || Z.call(window, j);
          }),
          (B.current = !1)),
        (M.enteringChildren = void 0));
    }),
    M
  );
}
function Vx(n, r, s, l) {
  const {
    layoutId: u,
    layout: d,
    drag: f,
    dragConstraints: h,
    layoutScroll: m,
    layoutRoot: y,
    layoutAnchor: g,
    layoutCrossfade: v,
  } = r;
  ((n.projection = new s(n.latestValues, r["data-framer-portal-id"] ? void 0 : Jm(n.parent))),
    n.projection.setOptions({
      layoutId: u,
      layout: d,
      alwaysMeasureLayout: !!f || (h && pr(h)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: l,
      crossfade: v,
      layoutScroll: m,
      layoutRoot: y,
      layoutAnchor: g,
    }));
}
function Jm(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : Jm(n.parent);
}
function ka(n, { forwardMotionProps: r = !1, type: s } = {}, l, u) {
  l && dx(l);
  const d = s ? s === "svg" : Lu(n),
    f = d ? Ax : Cx;
  function h(y, g) {
    let v;
    const x = { ...K.useContext(Du), ...y, layoutId: Lx(y) },
      { isStatic: P } = x,
      M = yx(y),
      R = f(y, P);
    if (!P && typeof window < "u") {
      Nx();
      const D = _x(x);
      ((v = D.MeasureLayout), (M.visualElement = Dx(n, R, x, u, D.ProjectionNode, d)));
    }
    return O.jsxs(fo.Provider, {
      value: M,
      children: [
        v && M.visualElement ? O.jsx(v, { visualElement: M.visualElement, ...x }) : null,
        Tx(n, y, Rx(R, M.visualElement, g), R, P, r, d),
      ],
    });
  }
  h.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const m = K.forwardRef(h);
  return ((m[Mx] = n), m);
}
function Lx({ layoutId: n }) {
  const r = K.useContext(yp).id;
  return r && n !== void 0 ? r + "-" + n : n;
}
function Nx(n, r) {
  K.useContext(Gm).strict;
}
function _x(n) {
  const r = Xm(),
    { drag: s, layout: l } = r;
  if (!s && !l) return {};
  const u = { ...s, ...l };
  return {
    MeasureLayout:
      (s != null && s.isEnabled(n)) || (l != null && l.isEnabled(n)) ? u.MeasureLayout : void 0,
    ProjectionNode: u.ProjectionNode,
  };
}
function jx(n, r) {
  if (typeof Proxy > "u") return ka;
  const s = new Map(),
    l = (d, f) => ka(d, f, n, r),
    u = (d, f) => l(d, f);
  return new Proxy(u, {
    get: (d, f) => (f === "create" ? l : (s.has(f) || s.set(f, ka(f, void 0, n, r)), s.get(f))),
  });
}
const Fx = (n, r) =>
  (r.isSVG ?? Lu(n)) ? new yw(r) : new fw(r, { allowProjection: n !== K.Fragment });
class Ix extends kn {
  constructor(r) {
    (super(r), r.animationState || (r.animationState = kw(r)));
  }
  updateAnimationControlsSubscription() {
    const { animate: r } = this.node.getProps();
    uo(r) && (this.unmountControls = r.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: r } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    r !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var r;
    (this.node.animationState.reset(), (r = this.unmountControls) == null || r.call(this));
  }
}
let Ox = 0;
class zx extends kn {
  constructor() {
    (super(...arguments), (this.id = Ox++), (this.isExitComplete = !1));
  }
  update() {
    var d;
    if (!this.node.presenceContext) return;
    const { isPresent: r, onExitComplete: s } = this.node.presenceContext,
      { isPresent: l } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || r === l) return;
    if (r && l === !1) {
      if (this.isExitComplete) {
        const { initial: f, custom: h } = this.node.getProps();
        if (typeof f == "string" || (typeof f == "object" && f !== null && !Array.isArray(f))) {
          const m = Un(this.node, f, h);
          if (m) {
            const { transition: y, transitionEnd: g, ...v } = m;
            for (const x in v) (d = this.node.getValue(x)) == null || d.jump(v[x]);
          }
        }
        (this.node.animationState.reset(), this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const u = this.node.animationState.setActive("exit", !r);
    s &&
      !r &&
      u.then(() => {
        ((this.isExitComplete = !0), s(this.id));
      });
  }
  mount() {
    const { register: r, onExitComplete: s } = this.node.presenceContext || {};
    (s && s(this.id), r && (this.unmount = r(this.id)));
  }
  unmount() {}
}
const Bx = { animation: { Feature: Ix }, exit: { Feature: zx } };
function Ci(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const Ux = (n) => (r) => Pu(r) && n(r, Ci(r));
function wi(n, r, s, l) {
  return ki(n, r, Ux(s), l);
}
const eg = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  $h = (n, r) => Math.abs(n - r);
function Wx(n, r) {
  const s = $h(n.x, r.x),
    l = $h(n.y, r.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
const Kh = new Set(["auto", "scroll"]);
class tg {
  constructor(
    r,
    s,
    {
      transformPagePoint: l,
      contextWindow: u = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: f = 3,
      element: h,
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
      (this.onElementScroll = (P) => {
        this.handleScroll(P.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Us(this.lastRawMoveEventInfo, this.transformPagePoint));
        const P = Ta(this.lastMoveEventInfo, this.history),
          M = this.startEvent !== null,
          R = Wx(P.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!M && !R) return;
        const { point: D } = P,
          { timestamp: j } = $e;
        this.history.push({ ...D, timestamp: j });
        const { onStart: B, onMove: z } = this.handlers;
        (M || (B && B(this.lastMoveEvent, P), (this.startEvent = this.lastMoveEvent)),
          z && z(this.lastMoveEvent, P));
      }),
      (this.handlePointerMove = (P, M) => {
        ((this.lastMoveEvent = P),
          (this.lastRawMoveEventInfo = M),
          (this.lastMoveEventInfo = Us(M, this.transformPagePoint)),
          ue.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (P, M) => {
        this.end();
        const { onEnd: R, onSessionEnd: D, resumeAnimation: j } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && j && j(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const B = Ta(
          P.type === "pointercancel" ? this.lastMoveEventInfo : Us(M, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && R && R(P, B), D && D(P, B));
      }),
      !Pu(r))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = l),
      (this.distanceThreshold = f),
      (this.contextWindow = u || window));
    const m = Ci(r),
      y = Us(m, this.transformPagePoint),
      { point: g } = y,
      { timestamp: v } = $e;
    this.history = [{ ...g, timestamp: v }];
    const { onSessionStart: x } = s;
    (x && x(r, Ta(y, this.history)),
      (this.removeListeners = Ti(
        wi(this.contextWindow, "pointermove", this.handlePointerMove),
        wi(this.contextWindow, "pointerup", this.handlePointerUp),
        wi(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      h && this.startScrollTracking(h));
  }
  startScrollTracking(r) {
    let s = r.parentElement;
    for (; s;) {
      const l = getComputedStyle(s);
      ((Kh.has(l.overflowX) || Kh.has(l.overflowY)) &&
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
  handleScroll(r) {
    const s = this.scrollPositions.get(r);
    if (!s) return;
    const l = r === window,
      u = l ? { x: window.scrollX, y: window.scrollY } : { x: r.scrollLeft, y: r.scrollTop },
      d = { x: u.x - s.x, y: u.y - s.y };
    (d.x === 0 && d.y === 0) ||
      (l
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += d.x), (this.lastMoveEventInfo.point.y += d.y))
        : this.history.length > 0 && ((this.history[0].x -= d.x), (this.history[0].y -= d.y)),
      this.scrollPositions.set(r, u),
      ue.update(this.updatePoint, !0));
  }
  updateHandlers(r) {
    this.handlers = r;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Tt(this.updatePoint));
  }
}
function Us(n, r) {
  return r ? { point: r(n.point) } : n;
}
function Gh(n, r) {
  return { x: n.x - r.x, y: n.y - r.y };
}
function Ta({ point: n }, r) {
  return { point: n, delta: Gh(n, ng(r)), offset: Gh(n, Hx(r)), velocity: $x(r, 0.1) };
}
function Hx(n) {
  return n[0];
}
function ng(n) {
  return n[n.length - 1];
}
function $x(n, r) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    l = null;
  const u = ng(n);
  for (; s >= 0 && ((l = n[s]), !(u.timestamp - l.timestamp > pt(r)));) s--;
  if (!l) return { x: 0, y: 0 };
  l === n[0] && n.length > 2 && u.timestamp - l.timestamp > pt(r) * 2 && (l = n[1]);
  const d = kt(u.timestamp - l.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (u.x - l.x) / d, y: (u.y - l.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function Kx(n, { min: r, max: s }, l) {
  return (
    r !== void 0 && n < r
      ? (n = l ? ge(r, n, l.min) : Math.max(n, r))
      : s !== void 0 && n > s && (n = l ? ge(s, n, l.max) : Math.min(n, s)),
    n
  );
}
function Xh(n, r, s) {
  return {
    min: r !== void 0 ? n.min + r : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  };
}
function Gx(n, { top: r, left: s, bottom: l, right: u }) {
  return { x: Xh(n.x, s, u), y: Xh(n.y, r, l) };
}
function Yh(n, r) {
  let s = r.min - n.min,
    l = r.max - n.max;
  return (r.max - r.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l });
}
function Xx(n, r) {
  return { x: Yh(n.x, r.x), y: Yh(n.y, r.y) };
}
function Yx(n, r) {
  let s = 0.5;
  const l = tt(n),
    u = tt(r);
  return (
    u > l ? (s = xr(r.min, r.max - l, n.min)) : l > u && (s = xr(n.min, n.max - u, r.min)),
    jt(0, 1, s)
  );
}
function Qx(n, r) {
  const s = {};
  return (
    r.min !== void 0 && (s.min = r.min - n.min),
    r.max !== void 0 && (s.max = r.max - n.min),
    s
  );
}
const qa = 0.35;
function bx(n = qa) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = qa),
    { x: Qh(n, "left", "right"), y: Qh(n, "top", "bottom") }
  );
}
function Qh(n, r, s) {
  return { min: bh(n, r), max: bh(n, s) };
}
function bh(n, r) {
  return typeof n == "number" ? n : n[r] || 0;
}
const Zx = new WeakMap();
class qx {
  constructor(r) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Be()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = r));
  }
  start(r, { snapToCursor: s = !1, distanceThreshold: l } = {}) {
    const { presenceContext: u } = this.visualElement;
    if (u && u.isPresent === !1) return;
    const d = (v) => {
        (s && this.snapToCursor(Ci(v).point), this.stopAnimation());
      },
      f = (v, x) => {
        const { drag: P, dragPropagation: M, onDragStart: R } = this.getProps();
        if (
          P &&
          !M &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = R1(P)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = v),
          (this.latestPanInfo = x),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ut((j) => {
            let B = this.getAxisMotionValue(j).get() || 0;
            if (Ht.test(B)) {
              const { projection: z } = this.visualElement;
              if (z && z.layout) {
                const U = z.layout.layoutBox[j];
                U && (B = tt(U) * (parseFloat(B) / 100));
              }
            }
            this.originPoint[j] = B;
          }),
          R && ue.update(() => R(v, x), !1, !0),
          Ua(this.visualElement, "transform"));
        const { animationState: D } = this.visualElement;
        D && D.setActive("whileDrag", !0);
      },
      h = (v, x) => {
        ((this.latestPointerEvent = v), (this.latestPanInfo = x));
        const {
          dragPropagation: P,
          dragDirectionLock: M,
          onDirectionLock: R,
          onDrag: D,
        } = this.getProps();
        if (!P && !this.openDragLock) return;
        const { offset: j } = x;
        if (M && this.currentDirection === null) {
          ((this.currentDirection = eS(j)),
            this.currentDirection !== null && R && R(this.currentDirection));
          return;
        }
        (this.updateAxis("x", x.point, j),
          this.updateAxis("y", x.point, j),
          this.visualElement.render(),
          D && ue.update(() => D(v, x), !1, !0));
      },
      m = (v, x) => {
        ((this.latestPointerEvent = v),
          (this.latestPanInfo = x),
          this.stop(v, x),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      y = () => {
        const { dragSnapToOrigin: v } = this.getProps();
        (v || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new tg(
      r,
      { onSessionStart: d, onStart: f, onMove: h, onSessionEnd: m, resumeAnimation: y },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        distanceThreshold: l,
        contextWindow: eg(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(r, s) {
    const l = r || this.latestPointerEvent,
      u = s || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !u || !l)) return;
    const { velocity: f } = u;
    this.startAnimation(f);
    const { onDragEnd: h } = this.getProps();
    h && ue.postRender(() => h(l, u));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: r, animationState: s } = this.visualElement;
    (r && (r.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: l } = this.getProps();
    (!l && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(r, s, l) {
    const { drag: u } = this.getProps();
    if (!l || !Ws(r, u, this.currentDirection)) return;
    const d = this.getAxisMotionValue(r);
    let f = this.originPoint[r] + l[r];
    (this.constraints && this.constraints[r] && (f = Kx(f, this.constraints[r], this.elastic[r])),
      d.set(f));
  }
  resolveConstraints() {
    var d;
    const { dragConstraints: r, dragElastic: s } = this.getProps(),
      l =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (d = this.visualElement.projection) == null
            ? void 0
            : d.layout,
      u = this.constraints;
    (r && pr(r)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : r && l
        ? (this.constraints = Gx(l.layoutBox, r))
        : (this.constraints = !1),
      (this.elastic = bx(s)),
      u !== this.constraints &&
        !pr(r) &&
        l &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ut((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = Qx(l.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: r, onMeasureDragConstraints: s } = this.getProps();
    if (!r || !pr(r)) return !1;
    const l = r.current,
      { projection: u } = this.visualElement;
    if (!u || !u.layout) return !1;
    u.root && ((u.root.scroll = void 0), u.root.updateScroll());
    const d = sw(l, u.root, this.visualElement.getTransformPagePoint());
    let f = Xx(u.layout.layoutBox, d);
    if (s) {
      const h = s(nw(f));
      ((this.hasMutatedConstraints = !!h), h && (f = Pm(h)));
    }
    return f;
  }
  startAnimation(r) {
    const {
        drag: s,
        dragMomentum: l,
        dragElastic: u,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: h,
      } = this.getProps(),
      m = this.constraints || {},
      y = Ut((g) => {
        if (!Ws(g, s, this.currentDirection)) return;
        let v = (m && m[g]) || {};
        (f === !0 || f === g) && (v = { min: 0, max: 0 });
        const x = u ? 200 : 1e6,
          P = u ? 40 : 1e7,
          M = {
            type: "inertia",
            velocity: l ? r[g] : 0,
            bounceStiffness: x,
            bounceDamping: P,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...v,
          };
        return this.startAxisValueAnimation(g, M);
      });
    return Promise.all(y).then(h);
  }
  startAxisValueAnimation(r, s) {
    const l = this.getAxisMotionValue(r);
    return (Ua(this.visualElement, r), l.start(Su(r, l, 0, s, this.visualElement, !1)));
  }
  stopAnimation() {
    Ut((r) => this.getAxisMotionValue(r).stop());
  }
  getAxisMotionValue(r) {
    const s = `_drag${r.toUpperCase()}`,
      u = this.visualElement.getProps()[s];
    return u || this.visualElement.getValue(r, this.visualElement.latestValues[r] ?? 0);
  }
  snapToCursor(r) {
    Ut((s) => {
      const { drag: l } = this.getProps();
      if (!Ws(s, l, this.currentDirection)) return;
      const { projection: u } = this.visualElement,
        d = this.getAxisMotionValue(s);
      if (u && u.layout) {
        const { min: f, max: h } = u.layout.layoutBox[s],
          m = d.get() || 0;
        d.set(r[s] - ge(f, h, 0.5) + m);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: r, dragConstraints: s } = this.getProps(),
      { projection: l } = this.visualElement;
    if (!pr(s) || !l || !this.constraints) return;
    this.stopAnimation();
    const u = { x: 0, y: 0 };
    Ut((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const m = h.get();
        u[f] = Yx({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Ut((f) => {
        if (!Ws(f, r, null)) return;
        const h = this.getAxisMotionValue(f),
          { min: m, max: y } = this.constraints[f];
        h.set(ge(m, y, u[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Zx.set(this.visualElement, this);
    const r = this.visualElement.current,
      s = wi(r, "pointerdown", (y) => {
        const { drag: g, dragListener: v = !0 } = this.getProps(),
          x = y.target,
          P = x !== r && j1(x);
        g && v && !P && this.start(y);
      });
    let l;
    const u = () => {
        const { dragConstraints: y } = this.getProps();
        pr(y) &&
          y.current &&
          ((this.constraints = this.resolveRefConstraints()),
          l || (l = Jx(r, y.current, () => this.scalePositionWithinConstraints())));
      },
      { projection: d } = this.visualElement,
      f = d.addEventListener("measure", u);
    (d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), ue.read(u));
    const h = ki(window, "resize", () => this.scalePositionWithinConstraints()),
      m = d.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: g }) => {
        this.isDragging &&
          g &&
          (Ut((v) => {
            const x = this.getAxisMotionValue(v);
            x && ((this.originPoint[v] += y[v].translate), x.set(x.get() + y[v].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (h(), s(), f(), m && m(), l && l());
    };
  }
  getProps() {
    const r = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: l = !1,
        dragPropagation: u = !1,
        dragConstraints: d = !1,
        dragElastic: f = qa,
        dragMomentum: h = !0,
      } = r;
    return {
      ...r,
      drag: s,
      dragDirectionLock: l,
      dragPropagation: u,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: h,
    };
  }
}
function Zh(n) {
  let r = !0;
  return () => {
    if (r) {
      r = !1;
      return;
    }
    n();
  };
}
function Jx(n, r, s) {
  const l = Ga(n, Zh(s)),
    u = Ga(r, Zh(s));
  return () => {
    (l(), u());
  };
}
function Ws(n, r, s) {
  return (r === !0 || r === n) && (s === null || s === n);
}
function eS(n, r = 10) {
  let s = null;
  return (Math.abs(n.y) > r ? (s = "y") : Math.abs(n.x) > r && (s = "x"), s);
}
class tS extends kn {
  constructor(r) {
    (super(r),
      (this.removeGroupControls = at),
      (this.removeListeners = at),
      (this.controls = new qx(r)));
  }
  mount() {
    const { dragControls: r } = this.node.getProps();
    (r && (this.removeGroupControls = r.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || at));
  }
  update() {
    const { dragControls: r } = this.node.getProps(),
      { dragControls: s } = this.node.prevProps || {};
    r !== s &&
      (this.removeGroupControls(), r && (this.removeGroupControls = r.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Pa = (n) => (r, s) => {
  n && ue.update(() => n(r, s), !1, !0);
};
class nS extends kn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = at));
  }
  onPointerDown(r) {
    this.session = new tg(r, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: eg(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: r, onPanStart: s, onPan: l, onPanEnd: u } = this.node.getProps();
    return {
      onSessionStart: Pa(r),
      onStart: Pa(s),
      onMove: Pa(l),
      onEnd: (d, f) => {
        (delete this.session, u && ue.postRender(() => u(d, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = wi(this.node.current, "pointerdown", (r) =>
      this.onPointerDown(r),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Ea = !1;
class rS extends K.Component {
  componentDidMount() {
    const { visualElement: r, layoutGroup: s, switchLayoutGroup: l, layoutId: u } = this.props,
      { projection: d } = r;
    (d &&
      (s.group && s.group.add(d),
      l && l.register && u && l.register(d),
      Ea && d.root.didUpdate(),
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      d.setOptions({
        ...d.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (bs.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(r) {
    const { layoutDependency: s, visualElement: l, drag: u, isPresent: d } = this.props,
      { projection: f } = l;
    return (
      f &&
        ((f.isPresent = d),
        r.layoutDependency !== s && f.setOptions({ ...f.options, layoutDependency: s }),
        (Ea = !0),
        u || r.layoutDependency !== s || s === void 0 || r.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        r.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              ue.postRender(() => {
                const h = f.getStack();
                (!h || !h.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: r, layoutAnchor: s } = this.props,
      { projection: l } = r;
    l &&
      ((l.options.layoutAnchor = s),
      l.root.didUpdate(),
      kr.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: r, layoutGroup: s, switchLayoutGroup: l } = this.props,
      { projection: u } = r;
    ((Ea = !0),
      u &&
        (u.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(u),
        l && l.deregister && l.deregister(u)));
  }
  safeToRemove() {
    const { safeToRemove: r } = this.props;
    r && r();
  }
  render() {
    return null;
  }
}
function rg(n) {
  const [r, s] = cx(),
    l = K.useContext(yp);
  return O.jsx(rS, {
    ...n,
    layoutGroup: l,
    switchLayoutGroup: K.useContext(qm),
    isPresent: r,
    safeToRemove: s,
  });
}
const iS = { pan: { Feature: nS }, drag: { Feature: tS, ProjectionNode: Km, MeasureLayout: rg } };
function qh(n, r, s) {
  const { props: l } = n;
  n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const u = "onHover" + s,
    d = l[u];
  d && ue.postRender(() => d(r, Ci(r)));
}
class sS extends kn {
  mount() {
    const { current: r } = this.node;
    r &&
      (this.unmount = V1(r, (s, l) => (qh(this.node, l, "Start"), (u) => qh(this.node, u, "End"))));
  }
  unmount() {}
}
class oS extends kn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let r = !1;
    try {
      r = this.node.current.matches(":focus-visible");
    } catch {
      r = !0;
    }
    !r ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Ti(
      ki(this.node.current, "focus", () => this.onFocus()),
      ki(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Jh(n, r, s) {
  const { props: l } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
  const u = "onTap" + (s === "End" ? "" : s),
    d = l[u];
  d && ue.postRender(() => d(r, Ci(r)));
}
class lS extends kn {
  mount() {
    const { current: r } = this.node;
    if (!r) return;
    const { globalTapTarget: s, propagate: l } = this.node.props;
    this.unmount = I1(
      r,
      (u, d) => (
        Jh(this.node, d, "Start"),
        (f, { success: h }) => Jh(this.node, f, h ? "End" : "Cancel")
      ),
      { useGlobalTarget: s, stopPropagation: (l == null ? void 0 : l.tap) === !1 },
    );
  }
  unmount() {}
}
const Ja = new WeakMap(),
  Ca = new WeakMap(),
  aS = (n) => {
    const r = Ja.get(n.target);
    r && r(n);
  },
  uS = (n) => {
    n.forEach(aS);
  };
function cS({ root: n, ...r }) {
  const s = n || document;
  Ca.has(s) || Ca.set(s, {});
  const l = Ca.get(s),
    u = JSON.stringify(r);
  return (l[u] || (l[u] = new IntersectionObserver(uS, { root: n, ...r })), l[u]);
}
function fS(n, r, s) {
  const l = cS(r);
  return (
    Ja.set(n, s),
    l.observe(n),
    () => {
      (Ja.delete(n), l.unobserve(n));
    }
  );
}
const dS = { some: 0, all: 1 };
class hS extends kn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var m;
    (m = this.stopObserver) == null || m.call(this);
    const { viewport: r = {} } = this.node.getProps(),
      { root: s, margin: l, amount: u = "some", once: d } = r,
      f = {
        root: s ? s.current : void 0,
        rootMargin: l,
        threshold: typeof u == "number" ? u : dS[u],
      },
      h = (y) => {
        const { isIntersecting: g } = y;
        if (this.isInView === g || ((this.isInView = g), d && !g && this.hasEnteredView)) return;
        (g && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", g));
        const { onViewportEnter: v, onViewportLeave: x } = this.node.getProps(),
          P = g ? v : x;
        P && P(y);
      };
    this.stopObserver = fS(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: r, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(pS(r, s)) && this.startObserver();
  }
  unmount() {
    var r;
    ((r = this.stopObserver) == null || r.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function pS({ viewport: n = {} }, { viewport: r = {} } = {}) {
  return (s) => n[s] !== r[s];
}
const mS = {
    inView: { Feature: hS },
    tap: { Feature: lS },
    focus: { Feature: oS },
    hover: { Feature: sS },
  },
  gS = { layout: { ProjectionNode: Km, MeasureLayout: rg } },
  yS = { ...Bx, ...mS, ...iS, ...gS },
  Nu = jx(yS, Fx);
function lo(n) {
  return typeof window > "u" ? !1 : n ? Yp() : wu();
}
const vS = 50,
  ep = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  wS = () => ({ time: 0, x: ep(), y: ep() }),
  xS = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
function tp(n, r, s, l) {
  const u = s[r],
    { length: d, position: f } = xS[r],
    h = u.current,
    m = s.time;
  ((u.current = Math.abs(n[`scroll${f}`])),
    (u.scrollLength = n[`scroll${d}`] - n[`client${d}`]),
    (u.offset.length = 0),
    (u.offset[0] = 0),
    (u.offset[1] = u.scrollLength),
    (u.progress = xr(0, u.scrollLength, u.current)));
  const y = l - m;
  u.velocity = y > vS ? 0 : lu(u.current - h, y);
}
function SS(n, r, s) {
  (tp(n, "x", r, s), tp(n, "y", r, s), (r.time = s));
}
function kS(n, r) {
  const s = { x: 0, y: 0 };
  let l = n;
  for (; l && l !== r;)
    if (hm(l)) ((s.x += l.offsetLeft), (s.y += l.offsetTop), (l = l.offsetParent));
    else if (l.tagName === "svg") {
      const u = l.getBoundingClientRect();
      l = l.parentElement;
      const d = l.getBoundingClientRect();
      ((s.x += u.left - d.left), (s.y += u.top - d.top));
    } else if (l instanceof SVGGraphicsElement) {
      const { x: u, y: d } = l.getBBox();
      ((s.x += u), (s.y += d));
      let f = null,
        h = l.parentNode;
      for (; !f;) (h.tagName === "svg" && (f = h), (h = l.parentNode));
      l = f;
    } else break;
  return s;
}
const eu = { start: 0, center: 0.5, end: 1 };
function np(n, r, s = 0) {
  let l = 0;
  if ((n in eu && (n = eu[n]), typeof n == "string")) {
    const u = parseFloat(n);
    n.endsWith("px")
      ? (l = u)
      : n.endsWith("%")
        ? (n = u / 100)
        : n.endsWith("vw")
          ? (l = (u / 100) * document.documentElement.clientWidth)
          : n.endsWith("vh")
            ? (l = (u / 100) * document.documentElement.clientHeight)
            : (n = u);
  }
  return (typeof n == "number" && (l = r * n), s + l);
}
const TS = [0, 0];
function PS(n, r, s, l) {
  let u = Array.isArray(n) ? n : TS,
    d = 0,
    f = 0;
  return (
    typeof n == "number"
      ? (u = [n, n])
      : typeof n == "string" &&
        ((n = n.trim()), n.includes(" ") ? (u = n.split(" ")) : (u = [n, eu[n] ? n : "0"])),
    (d = np(u[0], s, l)),
    (f = np(u[1], r)),
    d - f
  );
}
const pi = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  ES = { x: 0, y: 0 };
function CS(n) {
  return "getBBox" in n && n.tagName !== "svg"
    ? n.getBBox()
    : { width: n.clientWidth, height: n.clientHeight };
}
function AS(n, r, s) {
  const { offset: l = pi.All } = s,
    { target: u = n, axis: d = "y" } = s,
    f = d === "y" ? "height" : "width",
    h = u !== n ? kS(u, n) : ES,
    m = u === n ? { width: n.scrollWidth, height: n.scrollHeight } : CS(u),
    y = { width: n.clientWidth, height: n.clientHeight };
  r[d].offset.length = 0;
  let g = !r[d].interpolate;
  const v = l.length;
  for (let x = 0; x < v; x++) {
    const P = PS(l[x], y[f], m[f], h[d]);
    (!g && P !== r[d].interpolatorOffsets[x] && (g = !0), (r[d].offset[x] = P));
  }
  (g &&
    ((r[d].interpolate = mu(r[d].offset, Hp(l), { clamp: !1 })),
    (r[d].interpolatorOffsets = [...r[d].offset])),
    (r[d].progress = jt(0, 1, r[d].interpolate(r[d].current))));
}
function MS(n, r = n, s) {
  if (((s.x.targetOffset = 0), (s.y.targetOffset = 0), r !== n)) {
    let l = r;
    for (; l && l !== n;)
      ((s.x.targetOffset += l.offsetLeft), (s.y.targetOffset += l.offsetTop), (l = l.offsetParent));
  }
  ((s.x.targetLength = r === n ? r.scrollWidth : r.clientWidth),
    (s.y.targetLength = r === n ? r.scrollHeight : r.clientHeight),
    (s.x.containerLength = n.clientWidth),
    (s.y.containerLength = n.clientHeight));
}
function RS(n, r, s, l = {}) {
  return {
    measure: (u) => {
      (MS(n, l.target, s), SS(n, s, u), (l.offset || l.target) && AS(n, s, l));
    },
    notify: () => r(s),
  };
}
const hr = new WeakMap(),
  rp = new WeakMap(),
  Aa = new WeakMap(),
  ip = new WeakMap(),
  Hs = new WeakMap(),
  sp = (n) => (n === document.scrollingElement ? window : n);
function ig(n, { container: r = document.scrollingElement, trackContentSize: s = !1, ...l } = {}) {
  if (!r) return at;
  let u = Aa.get(r);
  u || ((u = new Set()), Aa.set(r, u));
  const d = wS(),
    f = RS(r, n, d, l);
  if ((u.add(f), !hr.has(r))) {
    const m = () => {
        for (const x of u) x.measure($e.timestamp);
        ue.preUpdate(y);
      },
      y = () => {
        for (const x of u) x.notify();
      },
      g = () => ue.read(m);
    hr.set(r, g);
    const v = sp(r);
    (window.addEventListener("resize", g),
      r !== document.documentElement && rp.set(r, Ga(r, g)),
      v.addEventListener("scroll", g),
      g());
  }
  if (s && !Hs.has(r)) {
    const m = hr.get(r),
      y = { width: r.scrollWidth, height: r.scrollHeight };
    ip.set(r, y);
    const g = () => {
        const x = r.scrollWidth,
          P = r.scrollHeight;
        (y.width !== x || y.height !== P) && (m(), (y.width = x), (y.height = P));
      },
      v = ue.read(g, !0);
    Hs.set(r, v);
  }
  const h = hr.get(r);
  return (
    ue.read(h, !1, !0),
    () => {
      var v;
      Tt(h);
      const m = Aa.get(r);
      if (!m || (m.delete(f), m.size)) return;
      const y = hr.get(r);
      (hr.delete(r),
        y &&
          (sp(r).removeEventListener("scroll", y),
          (v = rp.get(r)) == null || v(),
          window.removeEventListener("resize", y)));
      const g = Hs.get(r);
      (g && (Tt(g), Hs.delete(r)), ip.delete(r));
    }
  );
}
const DS = [
    [pi.Enter, "entry"],
    [pi.Exit, "exit"],
    [pi.Any, "cover"],
    [pi.All, "contain"],
  ],
  op = { start: 0, end: 1 };
function VS(n) {
  const r = n.trim().split(/\s+/);
  if (r.length !== 2) return;
  const s = op[r[0]],
    l = op[r[1]];
  if (!(s === void 0 || l === void 0)) return [s, l];
}
function LS(n) {
  if (n.length !== 2) return;
  const r = [];
  for (const s of n)
    if (Array.isArray(s)) r.push(s);
    else if (typeof s == "string") {
      const l = VS(s);
      if (!l) return;
      r.push(l);
    } else return;
  return r;
}
function NS(n, r) {
  const s = LS(n);
  if (!s) return !1;
  for (let l = 0; l < 2; l++) {
    const u = s[l],
      d = r[l];
    if (u[0] !== d[0] || u[1] !== d[1]) return !1;
  }
  return !0;
}
function _u(n) {
  if (!n) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (const [r, s] of DS) if (NS(n, r)) return { rangeStart: `${s} 0%`, rangeEnd: `${s} 100%` };
}
const lp = new Map();
function ap(n) {
  const r = { value: 0 },
    s = ig((l) => {
      r.value = l[n.axis].progress * 100;
    }, n);
  return { currentTime: r, cancel: s };
}
function sg({ source: n, container: r, ...s }) {
  const { axis: l } = s;
  n && (r = n);
  let u = lp.get(r);
  u || ((u = new Map()), lp.set(r, u));
  const d = s.target ?? "self";
  let f = u.get(d);
  f || ((f = {}), u.set(d, f));
  const h = l + (s.offset ?? []).join(",");
  return (
    f[h] ||
      (s.target && lo(s.target)
        ? _u(s.offset)
          ? (f[h] = new ViewTimeline({ subject: s.target, axis: l }))
          : (f[h] = ap({ container: r, ...s }))
        : lo()
          ? (f[h] = new ScrollTimeline({ source: r, axis: l }))
          : (f[h] = ap({ container: r, ...s }))),
    f[h]
  );
}
function _S(n, r) {
  const s = sg(r),
    l = r.target ? _u(r.offset) : void 0,
    u = r.target ? lo(r.target) && !!l : lo();
  return n.attachTimeline({
    timeline: u ? s : void 0,
    ...(l && u && { rangeStart: l.rangeStart, rangeEnd: l.rangeEnd }),
    observe: (d) => (
      d.pause(),
      wm((f) => {
        d.time = d.iterationDuration * f;
      }, s)
    ),
  });
}
function jS(n) {
  return n && (n.target || n.offset);
}
function FS(n) {
  return n.length === 2;
}
function IS(n, r) {
  return FS(n) || jS(r)
    ? ig((s) => {
        n(s[r.axis].progress, s);
      }, r)
    : wm(n, sg(r));
}
function og(n, { axis: r = "y", container: s = document.scrollingElement, ...l } = {}) {
  if (!s) return at;
  const u = { axis: r, container: s, ...l };
  return typeof n == "function" ? IS(n, u) : _S(n, u);
}
const OS = () => ({
    scrollX: Nt(0),
    scrollY: Nt(0),
    scrollXProgress: Nt(0),
    scrollYProgress: Nt(0),
  }),
  vr = (n) => (n ? !n.current : !1);
function up(n, r, s, l) {
  return {
    factory: (u) => {
      let d;
      const f = () => {
        if (vr(s) || vr(l)) {
          kr.read(f);
          return;
        }
        d = og(u, {
          ...r,
          axis: n,
          container: (s == null ? void 0 : s.current) || void 0,
          target: (l == null ? void 0 : l.current) || void 0,
        });
      };
      return (
        kr.read(f),
        () => {
          (pm(f), d == null || d());
        }
      );
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (u) => u,
    duration: 1,
  };
}
function zS(n, r) {
  return typeof window > "u" ? !1 : n ? Yp() && !!_u(r) : wu();
}
function lg({ container: n, target: r, ...s } = {}) {
  const l = wr(OS);
  zS(r, s.offset) &&
    ((l.scrollXProgress.accelerate = up("x", s, n, r)),
    (l.scrollYProgress.accelerate = up("y", s, n, r)));
  const u = K.useRef(null),
    d = K.useRef(!1),
    f = K.useCallback(
      () => (
        (u.current = og(
          (h, { x: m, y }) => {
            (l.scrollX.set(m.current),
              l.scrollXProgress.set(m.progress),
              l.scrollY.set(y.current),
              l.scrollYProgress.set(y.progress));
          },
          {
            ...s,
            container: (n == null ? void 0 : n.current) || void 0,
            target: (r == null ? void 0 : r.current) || void 0,
          },
        )),
        () => {
          var h;
          (h = u.current) == null || h.call(u);
        }
      ),
      [n, r, JSON.stringify(s.offset)],
    );
  return (
    nu(() => {
      if (((d.current = !1), vr(n) || vr(r))) {
        d.current = !0;
        return;
      } else return f();
    }, [f]),
    K.useEffect(() => {
      if (!d.current) return;
      let h;
      const m = () => {
        const y = vr(n),
          g = vr(r);
        !y && !g && (h = f());
      };
      return (
        kr.read(m),
        () => {
          (pm(m), h == null || h());
        }
      );
    }, [f]),
    l
  );
}
function BS(n) {
  const r = wr(() => Nt(n)),
    { isStatic: s } = K.useContext(Du);
  if (s) {
    const [, l] = K.useState(n);
    K.useEffect(() => r.on("change", l), []);
  }
  return r;
}
function ag(n, r) {
  const s = BS(r()),
    l = () => s.set(r());
  return (
    l(),
    nu(() => {
      const u = () => ue.preRender(l, !1, !0),
        d = n.map((f) => f.on("change", u));
      return () => {
        (d.forEach((f) => f()), Tt(l));
      };
    }),
    s
  );
}
function US(n) {
  ((yi.current = []), n());
  const r = ag(yi.current, n);
  return ((yi.current = void 0), r);
}
function ju(n, r, s, l) {
  if (typeof n == "function") return US(n);
  if (s !== void 0 && !Array.isArray(s) && typeof r != "function") return WS(n, r, s, l);
  const f = typeof r == "function" ? r : X1(r, s, l),
    h = Array.isArray(n) ? cp(n, f) : cp([n], ([y]) => f(y)),
    m = Array.isArray(n) ? void 0 : n.accelerate;
  return (
    m &&
      !m.isTransformed &&
      typeof r != "function" &&
      Array.isArray(s) &&
      (l == null ? void 0 : l.clamp) !== !1 &&
      (h.accelerate = { ...m, times: r, keyframes: s, isTransformed: !0 }),
    h
  );
}
function cp(n, r) {
  const s = wr(() => []);
  return ag(n, () => {
    s.length = 0;
    const l = n.length;
    for (let u = 0; u < l; u++) s[u] = n[u].get();
    return r(s);
  });
}
function WS(n, r, s, l) {
  const u = wr(() => Object.keys(s)),
    d = wr(() => ({}));
  for (const f of u) d[f] = ju(n, r, s[f], l);
  return d;
}
function HS({ text: n, className: r = "" }) {
  const s = K.useRef(null),
    l = K.useMemo(() => n.split(""), [n]),
    { scrollYProgress: u } = lg({ target: s, offset: ["start 0.8", "end 0.2"] });
  return O.jsx("p", {
    ref: s,
    className: r,
    children: l.map((d, f) =>
      O.jsx($S, { char: d, index: f, total: l.length, progress: u }, `${d}-${f}`),
    ),
  });
}
function $S({ char: n, index: r, total: s, progress: l }) {
  const u = r / s,
    d = (r + 1) / s,
    f = ju(l, [u, d], [0.2, 1]),
    h = n === " " ? " " : n;
  return O.jsxs("span", {
    className: "relative inline-block",
    children: [
      O.jsx("span", { className: "invisible", children: h }),
      O.jsx(Nu.span, { className: "absolute left-0 top-0", style: { opacity: f }, children: h }),
    ],
  });
}
function ug({ className: n = "" }) {
  return O.jsx("button", {
    type: "button",
    className: `rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform hover:scale-[1.02] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${n}`,
    style: {
      background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
      boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
      outline: "2px solid white",
      outlineOffset: "-3px",
    },
    onClick: () => mp("contact"),
    children: "Contact Me",
  });
}
const KS = [0.25, 0.1, 0.25, 1];
function St({
  children: n,
  as: r = "div",
  className: s,
  delay: l = 0,
  duration: u = 0.7,
  x: d = 0,
  y: f = 30,
  ...h
}) {
  const m = Nu.create(r);
  return O.jsx(m, {
    className: s,
    initial: { opacity: 0, x: d, y: f },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: !0, margin: "50px", amount: 0 },
    transition: { duration: u, delay: l, ease: KS },
    ...h,
    children: n,
  });
}
function GS() {
  return O.jsxs("section", {
    id: "about",
    className:
      "relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10",
    children: [
      O.jsx(St, {
        className:
          "pointer-events-none absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]",
        delay: 0.1,
        x: -80,
        y: 0,
        duration: 0.9,
        children: O.jsx("img", { src: Os.moon, alt: "", className: "h-auto w-full" }),
      }),
      O.jsx(St, {
        className:
          "pointer-events-none absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]",
        delay: 0.25,
        x: -80,
        y: 0,
        duration: 0.9,
        children: O.jsx("img", { src: Os.object, alt: "", className: "h-auto w-full" }),
      }),
      O.jsx(St, {
        className:
          "pointer-events-none absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]",
        delay: 0.15,
        x: 80,
        y: 0,
        duration: 0.9,
        children: O.jsx("img", { src: Os.lego, alt: "", className: "h-auto w-full" }),
      }),
      O.jsx(St, {
        className:
          "pointer-events-none absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]",
        delay: 0.3,
        x: 80,
        y: 0,
        duration: 0.9,
        children: O.jsx("img", { src: Os.group, alt: "", className: "h-auto w-full" }),
      }),
      O.jsxs("div", {
        className:
          "relative z-10 flex max-w-3xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16",
        children: [
          O.jsx(St, {
            delay: 0,
            y: 40,
            children: O.jsx("h2", {
              className:
                "hero-heading text-center font-black uppercase leading-none tracking-tight",
              style: { fontSize: "clamp(3rem, 12vw, 160px)" },
              children: "About me",
            }),
          }),
          O.jsx(HS, {
            text: Ev,
            className:
              "max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-mist",
          }),
          O.jsx("div", {
            id: "contact",
            className: "pt-6 sm:pt-8 md:pt-10",
            children: O.jsx(ug, {}),
          }),
        ],
      }),
    ],
  });
}
function XS({
  children: n,
  className: r = "",
  padding: s = 150,
  strength: l = 3,
  activeTransition: u = "transform 0.3s ease-out",
  inactiveTransition: d = "transform 0.6s ease-in-out",
}) {
  const f = K.useRef(null),
    [h, m] = K.useState("translate3d(0, 0, 0)"),
    [y, g] = K.useState(d),
    v = K.useCallback(
      (P) => {
        const M = f.current;
        if (!M) return;
        const R = M.getBoundingClientRect(),
          D = R.left + R.width / 2,
          j = R.top + R.height / 2,
          B = P.clientX - D,
          z = P.clientY - j,
          U = P.clientX >= R.left - s && P.clientX <= R.right + s,
          Z = P.clientY >= R.top - s && P.clientY <= R.bottom + s;
        U && Z
          ? (g(u), m(`translate3d(${B / l}px, ${z / l}px, 0)`))
          : (g(d), m("translate3d(0, 0, 0)"));
      },
      [u, d, s, l],
    ),
    x = K.useCallback(() => {
      (g(d), m("translate3d(0, 0, 0)"));
    }, [d]);
  return O.jsx("div", {
    ref: f,
    className: r,
    onMouseMove: v,
    onMouseLeave: x,
    style: { transform: h, transition: y, willChange: "transform" },
    children: n,
  });
}
function YS() {
  return O.jsxs("section", {
    id: "hero",
    className: "relative flex h-screen flex-col overflow-x-clip",
    children: [
      O.jsx(St, {
        as: "nav",
        className: "relative z-20",
        delay: 0,
        y: -20,
        children: O.jsx("ul", {
          className:
            "flex items-center justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-mist md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]",
          children: Av.map((n) => {
            const r = xv(n.label, { section: n.section });
            return O.jsx(
              "li",
              {
                children: O.jsx("a", {
                  href: Sv(r),
                  className: "transition-opacity duration-200 hover:opacity-70",
                  onClick: (s) => kv(s, r),
                  children: n.label,
                }),
              },
              n.label,
            );
          }),
        }),
      }),
      O.jsx(St, {
        className: "relative z-10 mt-6 overflow-hidden sm:mt-4 md:-mt-5",
        delay: 0.15,
        y: 40,
        children: O.jsx("h1", {
          className:
            "hero-heading w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]",
          children: "Hi, i'm jack",
        }),
      }),
      O.jsx(XS, {
        className:
          "absolute left-1/2 z-10 w-[280px] -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 sm:w-[360px] md:w-[440px] lg:w-[520px]",
        padding: 150,
        strength: 3,
        children: O.jsx(St, {
          delay: 0.6,
          y: 30,
          children: O.jsx("img", {
            src: Pv,
            alt: "Jack portrait",
            className: "h-auto w-full object-contain",
            draggable: !1,
          }),
        }),
      }),
      O.jsxs("div", {
        className:
          "relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10",
        children: [
          O.jsx(St, {
            delay: 0.35,
            y: 20,
            children: O.jsx("p", {
              className:
                "max-w-[160px] font-light uppercase leading-snug tracking-wide text-mist sm:max-w-[220px] md:max-w-[260px]",
              style: { fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" },
              children: "a 3d creator driven by crafting striking and unforgettable projects",
            }),
          }),
          O.jsx(St, { delay: 0.5, y: 20, children: O.jsx(ug, {}) }),
        ],
      }),
    ],
  });
}
const QS = gp.slice(0, 11),
  bS = gp.slice(11);
function fp({ images: n, direction: r, offset: s }) {
  const l = [...n, ...n, ...n],
    u = r === "right" ? s - 200 : -(s - 200);
  return O.jsx("div", {
    className: "flex gap-3",
    style: { transform: `translateX(${u}px)`, willChange: "transform" },
    children: l.map((d, f) =>
      O.jsx(
        "img",
        {
          src: d,
          alt: "",
          loading: "lazy",
          className: "h-[270px] w-[420px] shrink-0 rounded-2xl object-cover",
        },
        `${d}-${f}`,
      ),
    ),
  });
}
function ZS() {
  const n = K.useRef(null),
    [r, s] = K.useState(0);
  return (
    K.useEffect(() => {
      const l = () => {
        const u = n.current;
        if (!u) return;
        const f = u.getBoundingClientRect().top + window.scrollY,
          h = (window.scrollY - f + window.innerHeight) * 0.3;
        s(h);
      };
      return (
        l(),
        window.addEventListener("scroll", l, { passive: !0 }),
        () => window.removeEventListener("scroll", l)
      );
    }, []),
    O.jsx("section", {
      id: "marquee",
      ref: n,
      className: "bg-canvas pb-10 pt-24 sm:pt-32 md:pt-40",
      children: O.jsxs("div", {
        className: "flex flex-col gap-3 overflow-hidden",
        children: [
          O.jsx(fp, { images: QS, direction: "right", offset: r }),
          O.jsx(fp, { images: bS, direction: "left", offset: r }),
        ],
      }),
    })
  );
}
function qS({ className: n = "", onClick: r }) {
  return O.jsx("button", {
    type: "button",
    className: `rounded-full border-2 border-mist px-8 py-3 text-sm font-medium uppercase tracking-widest text-mist transition-colors hover:bg-mist/10 sm:px-10 sm:py-3.5 sm:text-base ${n}`,
    onClick:
      r ??
      (() =>
        (document.getElementById("contact") || document.body).scrollIntoView({
          behavior: "smooth",
        })),
    children: "Live Project",
  });
}
function JS({ project: n, index: r, total: s }) {
  const l = K.useRef(null),
    { scrollYProgress: u } = lg({ target: l, offset: ["start end", "start start"] }),
    d = 1 - (s - 1 - r) * 0.03,
    f = ju(u, [0, 1], [1, d]);
  return O.jsx("div", {
    ref: l,
    className: "h-[85vh]",
    children: O.jsxs(Nu.article, {
      style: { scale: f, top: r * 28 },
      className:
        "sticky top-24 flex h-full flex-col rounded-[40px] border-2 border-mist bg-canvas p-4 sm:top-32 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8",
      children: [
        O.jsxs("div", {
          className:
            "flex flex-col gap-6 border-b border-mist/20 pb-6 md:flex-row md:items-start md:justify-between",
          children: [
            O.jsxs("div", {
              className: "flex flex-wrap items-end gap-4 md:gap-8",
              children: [
                O.jsx("span", {
                  className: "hero-heading font-black leading-none",
                  style: { fontSize: "clamp(3rem, 10vw, 140px)" },
                  children: n.num,
                }),
                O.jsxs("div", {
                  children: [
                    O.jsx("p", {
                      className: "text-sm uppercase tracking-widest text-mist/70",
                      children: n.category,
                    }),
                    O.jsx("h3", {
                      className: "hero-heading font-black uppercase",
                      style: { fontSize: "clamp(1.5rem, 4vw, 3rem)" },
                      children: n.name,
                    }),
                  ],
                }),
              ],
            }),
            O.jsx(qS, { className: "shrink-0 self-start md:self-center" }),
          ],
        }),
        O.jsxs("div", {
          className: "mt-4 flex flex-1 flex-col gap-3 sm:mt-6 md:flex-row md:gap-4",
          children: [
            O.jsxs("div", {
              className: "flex w-full flex-col gap-3 md:w-[40%]",
              children: [
                O.jsx("img", {
                  src: n.col1[0],
                  alt: "",
                  className:
                    "w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]",
                  style: { height: "clamp(130px, 16vw, 230px)" },
                  loading: "lazy",
                }),
                O.jsx("img", {
                  src: n.col1[1],
                  alt: "",
                  className:
                    "w-full flex-1 rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]",
                  style: { height: "clamp(160px, 22vw, 340px)" },
                  loading: "lazy",
                }),
              ],
            }),
            O.jsx("img", {
              src: n.col2,
              alt: "",
              className:
                "w-full flex-1 rounded-[40px] object-cover sm:rounded-[50px] md:w-[60%] md:rounded-[60px]",
              loading: "lazy",
            }),
          ],
        }),
      ],
    }),
  });
}
function ek() {
  return O.jsxs("section", {
    id: "projects",
    className:
      "relative z-10 -mt-10 rounded-t-[40px] bg-canvas px-5 pb-24 pt-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-32 md:pt-20",
    children: [
      O.jsx(St, {
        className: "mb-12 text-center md:mb-16",
        children: O.jsx("h2", {
          className: "hero-heading font-black uppercase leading-none tracking-tight",
          style: { fontSize: "clamp(3rem, 12vw, 160px)" },
          children: "Project",
        }),
      }),
      O.jsx("div", {
        className: "mx-auto max-w-6xl",
        children: Bd.map((n, r) => O.jsx(JS, { project: n, index: r, total: Bd.length }, n.num)),
      }),
    ],
  });
}
function tk() {
  return O.jsxs("section", {
    id: "services",
    className:
      "relative z-10 rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32",
    children: [
      O.jsx("h2", {
        className: "mb-16 text-center font-black uppercase text-canvas sm:mb-20 md:mb-28",
        style: { fontSize: "clamp(3rem, 12vw, 160px)" },
        children: "Services",
      }),
      O.jsxs("ul", {
        className: "mx-auto max-w-5xl",
        children: [
          Cv.map((n, r) =>
            O.jsx(
              St,
              {
                as: "li",
                className: "border-t border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12",
                delay: r * 0.1,
                children: O.jsxs("div", {
                  className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8",
                  children: [
                    O.jsx("span", {
                      className: "shrink-0 font-black text-canvas",
                      style: { fontSize: "clamp(3rem, 10vw, 140px)" },
                      children: n.num,
                    }),
                    O.jsxs("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        O.jsx("h3", {
                          className: "font-medium uppercase text-canvas",
                          style: { fontSize: "clamp(1rem, 2.2vw, 2.1rem)" },
                          children: n.name,
                        }),
                        O.jsx("p", {
                          className: "max-w-2xl font-light leading-relaxed text-canvas/60",
                          style: { fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" },
                          children: n.description,
                        }),
                      ],
                    }),
                  ],
                }),
              },
              n.num,
            ),
          ),
          O.jsx("li", { className: "border-t border-[rgba(12,12,12,0.15)]", "aria-hidden": !0 }),
        ],
      }),
    ],
  });
}
function nk() {
  return O.jsxs("main", {
    className: "overflow-x-clip bg-canvas font-sans text-mist",
    children: [O.jsx(YS, {}), O.jsx(ZS, {}), O.jsx(GS, {}), O.jsx(tk, {}), O.jsx(ek, {})],
  });
}
function rk() {
  return (
    K.useEffect(() => {
      Tv();
    }, []),
    O.jsx(nk, {})
  );
}
pv.createRoot(document.getElementById("root")).render(
  O.jsx(K.StrictMode, { children: O.jsx(rk, {}) }),
);
