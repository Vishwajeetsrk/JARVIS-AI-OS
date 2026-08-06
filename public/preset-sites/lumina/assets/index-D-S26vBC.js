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
var ql = { exports: {} },
  oi = {},
  Jl = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fd;
function yg() {
  if (fd) return oe;
  fd = 1;
  var n = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
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
    A = Object.assign,
    R = {};
  function D(T, V, se) {
    ((this.props = T), (this.context = V), (this.refs = R), (this.updater = se || C));
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
  function I() {}
  I.prototype = D.prototype;
  function z(T, V, se) {
    ((this.props = T), (this.context = V), (this.refs = R), (this.updater = se || C));
  }
  var O = (z.prototype = new I());
  ((O.constructor = z), A(O, D.prototype), (O.isPureReactComponent = !0));
  var B = Array.isArray,
    Z = Object.prototype.hasOwnProperty,
    ie = { current: null },
    re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Y(T, V, se) {
    var le,
      ue = {},
      ce = null,
      ve = null;
    if (V != null)
      for (le in (V.ref !== void 0 && (ve = V.ref), V.key !== void 0 && (ce = "" + V.key), V))
        Z.call(V, le) && !re.hasOwnProperty(le) && (ue[le] = V[le]);
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
  function ge(T, V) {
    return { $$typeof: n, type: T.type, key: V, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function q(T) {
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
  function De(T, V, se, le, ue) {
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
            De(ue, V, se, "", function (at) {
              return at;
            }))
          : ue != null &&
            (q(ue) &&
              (ue = ge(
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
        ve += De(ce, V, se, Pe, ue);
      }
    else if (((Pe = S(T)), typeof Pe == "function"))
      for (T = Pe.call(T), de = 0; !(ce = T.next()).done;)
        ((ce = ce.value), (Pe = le + Le(ce, de++)), (ve += De(ce, V, se, Pe, ue)));
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
  function Ie(T, V, se) {
    if (T == null) return T;
    var le = [],
      ue = 0;
    return (
      De(T, le, "", "", function (ce) {
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
    j = { transition: null },
    G = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: j, ReactCurrentOwner: ie };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (oe.Children = {
      map: Ie,
      forEach: function (T, V, se) {
        Ie(
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
          Ie(T, function () {
            V++;
          }),
          V
        );
      },
      toArray: function (T) {
        return (
          Ie(T, function (V) {
            return V;
          }) || []
        );
      },
      only: function (T) {
        if (!q(T))
          throw Error("React.Children.only expected to receive a single React element child.");
        return T;
      },
    }),
    (oe.Component = D),
    (oe.Fragment = s),
    (oe.Profiler = c),
    (oe.PureComponent = z),
    (oe.StrictMode = l),
    (oe.Suspense = m),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
    (oe.act = U),
    (oe.cloneElement = function (T, V, se) {
      if (T == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            T +
            ".",
        );
      var le = A({}, T.props),
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
          Z.call(V, Pe) &&
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
    (oe.createElement = Y),
    (oe.createFactory = function (T) {
      var V = Y.bind(null, T);
      return ((V.type = T), V);
    }),
    (oe.createRef = function () {
      return { current: null };
    }),
    (oe.forwardRef = function (T) {
      return { $$typeof: p, render: T };
    }),
    (oe.isValidElement = q),
    (oe.lazy = function (T) {
      return { $$typeof: y, _payload: { _status: -1, _result: T }, _init: Se };
    }),
    (oe.memo = function (T, V) {
      return { $$typeof: g, type: T, compare: V === void 0 ? null : V };
    }),
    (oe.startTransition = function (T) {
      var V = j.transition;
      j.transition = {};
      try {
        T();
      } finally {
        j.transition = V;
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
var dd;
function Ha() {
  return (dd || ((dd = 1), (Jl.exports = yg())), Jl.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function gg() {
  if (hd) return oi;
  hd = 1;
  var n = Ha(),
    i = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, g) {
    var y,
      w = {},
      S = null,
      C = null;
    (g !== void 0 && (S = "" + g),
      m.key !== void 0 && (S = "" + m.key),
      m.ref !== void 0 && (C = m.ref));
    for (y in m) l.call(m, y) && !d.hasOwnProperty(y) && (w[y] = m[y]);
    if (p && p.defaultProps) for (y in ((m = p.defaultProps), m)) w[y] === void 0 && (w[y] = m[y]);
    return { $$typeof: i, type: p, key: S, ref: C, props: w, _owner: c.current };
  }
  return ((oi.Fragment = s), (oi.jsx = f), (oi.jsxs = f), oi);
}
var pd;
function vg() {
  return (pd || ((pd = 1), (ql.exports = gg())), ql.exports);
}
var ne = vg(),
  ee = Ha(),
  Vs = {},
  bl = { exports: {} },
  lt = {},
  ea = { exports: {} },
  ta = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function wg() {
  return (
    md ||
      ((md = 1),
      (function (n) {
        function i(j, G) {
          var U = j.length;
          j.push(G);
          e: for (; 0 < U;) {
            var T = (U - 1) >>> 1,
              V = j[T];
            if (0 < c(V, G)) ((j[T] = G), (j[U] = V), (U = T));
            else break e;
          }
        }
        function s(j) {
          return j.length === 0 ? null : j[0];
        }
        function l(j) {
          if (j.length === 0) return null;
          var G = j[0],
            U = j.pop();
          if (U !== G) {
            j[0] = U;
            e: for (var T = 0, V = j.length, se = V >>> 1; T < se;) {
              var le = 2 * (T + 1) - 1,
                ue = j[le],
                ce = le + 1,
                ve = j[ce];
              if (0 > c(ue, U))
                ce < V && 0 > c(ve, ue)
                  ? ((j[T] = ve), (j[ce] = U), (T = ce))
                  : ((j[T] = ue), (j[le] = U), (T = le));
              else if (ce < V && 0 > c(ve, U)) ((j[T] = ve), (j[ce] = U), (T = ce));
              else break e;
            }
          }
          return G;
        }
        function c(j, G) {
          var U = j.sortIndex - G.sortIndex;
          return U !== 0 ? U : j.id - G.id;
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
          g = [],
          y = 1,
          w = null,
          S = 3,
          C = !1,
          A = !1,
          R = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          z = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(j) {
          for (var G = s(g); G !== null;) {
            if (G.callback === null) l(g);
            else if (G.startTime <= j) (l(g), (G.sortIndex = G.expirationTime), i(m, G));
            else break;
            G = s(g);
          }
        }
        function B(j) {
          if (((R = !1), O(j), !A))
            if (s(m) !== null) ((A = !0), Se(Z));
            else {
              var G = s(g);
              G !== null && Ce(B, G.startTime - j);
            }
        }
        function Z(j, G) {
          ((A = !1), R && ((R = !1), I(Y), (Y = -1)), (C = !0));
          var U = S;
          try {
            for (O(G), w = s(m); w !== null && (!(w.expirationTime > G) || (j && !pe()));) {
              var T = w.callback;
              if (typeof T == "function") {
                ((w.callback = null), (S = w.priorityLevel));
                var V = T(w.expirationTime <= G);
                ((G = n.unstable_now()),
                  typeof V == "function" ? (w.callback = V) : w === s(m) && l(m),
                  O(G));
              } else l(m);
              w = s(m);
            }
            if (w !== null) var se = !0;
            else {
              var le = s(g);
              (le !== null && Ce(B, le.startTime - G), (se = !1));
            }
            return se;
          } finally {
            ((w = null), (S = U), (C = !1));
          }
        }
        var ie = !1,
          re = null,
          Y = -1,
          ge = 5,
          q = -1;
        function pe() {
          return !(n.unstable_now() - q < ge);
        }
        function xe() {
          if (re !== null) {
            var j = n.unstable_now();
            q = j;
            var G = !0;
            try {
              G = re(!0, j);
            } finally {
              G ? Le() : ((ie = !1), (re = null));
            }
          } else ie = !1;
        }
        var Le;
        if (typeof z == "function")
          Le = function () {
            z(xe);
          };
        else if (typeof MessageChannel < "u") {
          var De = new MessageChannel(),
            Ie = De.port2;
          ((De.port1.onmessage = xe),
            (Le = function () {
              Ie.postMessage(null);
            }));
        } else
          Le = function () {
            D(xe, 0);
          };
        function Se(j) {
          ((re = j), ie || ((ie = !0), Le()));
        }
        function Ce(j, G) {
          Y = D(function () {
            j(n.unstable_now());
          }, G);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            A || C || ((A = !0), Se(Z));
          }),
          (n.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ge = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (n.unstable_next = function (j) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = S;
            }
            var U = S;
            S = G;
            try {
              return j();
            } finally {
              S = U;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (j, G) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var U = S;
            S = j;
            try {
              return G();
            } finally {
              S = U;
            }
          }),
          (n.unstable_scheduleCallback = function (j, G, U) {
            var T = n.unstable_now();
            switch (
              (typeof U == "object" && U !== null
                ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? T + U : T))
                : (U = T),
              j)
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
              (j = {
                id: y++,
                callback: G,
                priorityLevel: j,
                startTime: U,
                expirationTime: V,
                sortIndex: -1,
              }),
              U > T
                ? ((j.sortIndex = U),
                  i(g, j),
                  s(m) === null && j === s(g) && (R ? (I(Y), (Y = -1)) : (R = !0), Ce(B, U - T)))
                : ((j.sortIndex = V), i(m, j), A || C || ((A = !0), Se(Z))),
              j
            );
          }),
          (n.unstable_shouldYield = pe),
          (n.unstable_wrapCallback = function (j) {
            var G = S;
            return function () {
              var U = S;
              S = G;
              try {
                return j.apply(this, arguments);
              } finally {
                S = U;
              }
            };
          }));
      })(ta)),
    ta
  );
}
var yd;
function xg() {
  return (yd || ((yd = 1), (ea.exports = wg())), ea.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gd;
function Sg() {
  if (gd) return lt;
  gd = 1;
  var n = Ha(),
    i = xg();
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
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    w = {};
  function S(e) {
    return m.call(w, e) ? !0 : m.call(y, e) ? !1 : g.test(e) ? (w[e] = !0) : ((y[e] = !0), !1);
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
  function A(e, t, r, o) {
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
  function R(e, t, r, o, a, u, h) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = h));
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
  var I = /[\-:]([a-z])/g;
  function z(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, z);
      D[t] = new R(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, z);
        D[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, z);
      D[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      D[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (D.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      D[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function O(e, t, r, o) {
    var a = D.hasOwnProperty(t) ? D[t] : null;
    (a !== null
      ? a.type !== 0
      : o || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (A(t, r, a, o) && (r = null),
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
    Z = Symbol.for("react.element"),
    ie = Symbol.for("react.portal"),
    re = Symbol.for("react.fragment"),
    Y = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    q = Symbol.for("react.provider"),
    pe = Symbol.for("react.context"),
    xe = Symbol.for("react.forward_ref"),
    Le = Symbol.for("react.suspense"),
    De = Symbol.for("react.suspense_list"),
    Ie = Symbol.for("react.memo"),
    Se = Symbol.for("react.lazy"),
    Ce = Symbol.for("react.offscreen"),
    j = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (j && e[j]) || e["@@iterator"]), typeof e == "function" ? e : null);
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
      case ge:
        return "Profiler";
      case Y:
        return "StrictMode";
      case Le:
        return "Suspense";
      case De:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case pe:
          return (e.displayName || "Context") + ".Consumer";
        case q:
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
        case Ie:
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
        return t === Y ? "StrictMode" : "Mode";
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
  function yu(e) {
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
  function ro(e, t) {
    var r = t.checked;
    return U({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function gu(e, t) {
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
  function vu(e, t) {
    ((t = t.checked), t != null && O(e, "checked", t, !1));
  }
  function io(e, t) {
    vu(e, t);
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
      ? so(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && so(e, t.type, de(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function wu(e, t, r) {
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
  function so(e, t, r) {
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
  function oo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return U({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function xu(e, t) {
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
  function Su(e, t) {
    var r = de(t.value),
      o = de(t.defaultValue);
    (r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = "" + o));
  }
  function ku(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Tu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Tu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ti,
    Pu = (function (e) {
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
    xm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Tr).forEach(function (e) {
    xm.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]));
    });
  });
  function Eu(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Cu(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf("--") === 0,
          a = Eu(r, t[r], o);
        (r === "float" && (r = "cssFloat"), o ? e.setProperty(r, a) : (e[r] = a));
      }
  }
  var Sm = U(
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
  function ao(e, t) {
    if (t) {
      if (Sm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function uo(e, t) {
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
  var co = null;
  function fo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ho = null,
    Wn = null,
    Hn = null;
  function Mu(e) {
    if ((e = Kr(e))) {
      if (typeof ho != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Gi(t)), ho(e.stateNode, e.type, t));
    }
  }
  function Au(e) {
    Wn ? (Hn ? Hn.push(e) : (Hn = [e])) : (Wn = e);
  }
  function Du() {
    if (Wn) {
      var e = Wn,
        t = Hn;
      if (((Hn = Wn = null), Mu(e), t)) for (e = 0; e < t.length; e++) Mu(t[e]);
    }
  }
  function Ru(e, t) {
    return e(t);
  }
  function Vu() {}
  var po = !1;
  function Lu(e, t, r) {
    if (po) return e(t, r);
    po = !0;
    try {
      return Ru(e, t, r);
    } finally {
      ((po = !1), (Wn !== null || Hn !== null) && (Vu(), Du()));
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
  var mo = !1;
  if (p)
    try {
      var Er = {};
      (Object.defineProperty(Er, "passive", {
        get: function () {
          mo = !0;
        },
      }),
        window.addEventListener("test", Er, Er),
        window.removeEventListener("test", Er, Er));
    } catch {
      mo = !1;
    }
  function km(e, t, r, o, a, u, h, v, x) {
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
    yo = null,
    Tm = {
      onError: function (e) {
        ((Cr = !0), (Pi = e));
      },
    };
  function Pm(e, t, r, o, a, u, h, v, x) {
    ((Cr = !1), (Pi = null), km.apply(Tm, arguments));
  }
  function Em(e, t, r, o, a, u, h, v, x) {
    if ((Pm.apply(this, arguments), Cr)) {
      if (Cr) {
        var M = Pi;
        ((Cr = !1), (Pi = null));
      } else throw Error(s(198));
      Ei || ((Ei = !0), (yo = M));
    }
  }
  function kn(e) {
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
  function Nu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function _u(e) {
    if (kn(e) !== e) throw Error(s(188));
  }
  function Cm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = kn(e)), t === null)) throw Error(s(188));
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
          if (u === r) return (_u(a), e);
          if (u === o) return (_u(a), t);
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
  function Iu(e) {
    return ((e = Cm(e)), e !== null ? ju(e) : null);
  }
  function ju(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = ju(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Fu = i.unstable_scheduleCallback,
    Ou = i.unstable_cancelCallback,
    Mm = i.unstable_shouldYield,
    Am = i.unstable_requestPaint,
    Ne = i.unstable_now,
    Dm = i.unstable_getCurrentPriorityLevel,
    go = i.unstable_ImmediatePriority,
    zu = i.unstable_UserBlockingPriority,
    Ci = i.unstable_NormalPriority,
    Rm = i.unstable_LowPriority,
    Bu = i.unstable_IdlePriority,
    Mi = null,
    Nt = null;
  function Vm(e) {
    if (Nt && typeof Nt.onCommitFiberRoot == "function")
      try {
        Nt.onCommitFiberRoot(Mi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var kt = Math.clz32 ? Math.clz32 : _m,
    Lm = Math.log,
    Nm = Math.LN2;
  function _m(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Lm(e) / Nm) | 0)) | 0);
  }
  var Ai = 64,
    Di = 4194304;
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
  function Ri(e, t) {
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
  function Im(e, t) {
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
  function jm(e, t) {
    for (
      var r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var h = 31 - kt(u),
        v = 1 << h,
        x = a[h];
      (x === -1
        ? ((v & r) === 0 || (v & o) !== 0) && (a[h] = Im(v, t))
        : x <= t && (e.expiredLanes |= v),
        (u &= ~v));
    }
  }
  function vo(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Uu() {
    var e = Ai;
    return ((Ai <<= 1), (Ai & 4194240) === 0 && (Ai = 64), e);
  }
  function wo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Ar(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - kt(t)),
      (e[t] = r));
  }
  function Fm(e, t) {
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
  function xo(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r;) {
      var o = 31 - kt(r),
        a = 1 << o;
      ((a & t) | (e[o] & t) && (e[o] |= t), (r &= ~a));
    }
  }
  var he = 0;
  function Wu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Hu,
    So,
    $u,
    Ku,
    Gu,
    ko = !1,
    Vi = [],
    qt = null,
    Jt = null,
    bt = null,
    Dr = new Map(),
    Rr = new Map(),
    en = [],
    Om =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Qu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        qt = null;
        break;
      case "dragenter":
      case "dragleave":
        Jt = null;
        break;
      case "mouseover":
      case "mouseout":
        bt = null;
        break;
      case "pointerover":
      case "pointerout":
        Dr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rr.delete(t.pointerId);
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
        t !== null && ((t = Kr(t)), t !== null && So(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function zm(e, t, r, o, a) {
    switch (t) {
      case "focusin":
        return ((qt = Vr(qt, e, t, r, o, a)), !0);
      case "dragenter":
        return ((Jt = Vr(Jt, e, t, r, o, a)), !0);
      case "mouseover":
        return ((bt = Vr(bt, e, t, r, o, a)), !0);
      case "pointerover":
        var u = a.pointerId;
        return (Dr.set(u, Vr(Dr.get(u) || null, e, t, r, o, a)), !0);
      case "gotpointercapture":
        return ((u = a.pointerId), Rr.set(u, Vr(Rr.get(u) || null, e, t, r, o, a)), !0);
    }
    return !1;
  }
  function Xu(e) {
    var t = Tn(e.target);
    if (t !== null) {
      var r = kn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Nu(r)), t !== null)) {
            ((e.blockedOn = t),
              Gu(e.priority, function () {
                $u(r);
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
      var r = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((co = o), r.target.dispatchEvent(o), (co = null));
      } else return ((t = Kr(r)), t !== null && So(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Yu(e, t, r) {
    Li(e) && r.delete(t);
  }
  function Bm() {
    ((ko = !1),
      qt !== null && Li(qt) && (qt = null),
      Jt !== null && Li(Jt) && (Jt = null),
      bt !== null && Li(bt) && (bt = null),
      Dr.forEach(Yu),
      Rr.forEach(Yu));
  }
  function Lr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ko || ((ko = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Bm)));
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
      qt !== null && Lr(qt, e),
        Jt !== null && Lr(Jt, e),
        bt !== null && Lr(bt, e),
        Dr.forEach(t),
        Rr.forEach(t),
        r = 0;
      r < en.length;
      r++
    )
      ((o = en[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < en.length && ((r = en[0]), r.blockedOn === null);)
      (Xu(r), r.blockedOn === null && en.shift());
  }
  var $n = B.ReactCurrentBatchConfig,
    Ni = !0;
  function Um(e, t, r, o) {
    var a = he,
      u = $n.transition;
    $n.transition = null;
    try {
      ((he = 1), To(e, t, r, o));
    } finally {
      ((he = a), ($n.transition = u));
    }
  }
  function Wm(e, t, r, o) {
    var a = he,
      u = $n.transition;
    $n.transition = null;
    try {
      ((he = 4), To(e, t, r, o));
    } finally {
      ((he = a), ($n.transition = u));
    }
  }
  function To(e, t, r, o) {
    if (Ni) {
      var a = Po(e, t, r, o);
      if (a === null) (Uo(e, t, o, _i, r), Qu(e, o));
      else if (zm(a, e, t, r, o)) o.stopPropagation();
      else if ((Qu(e, o), t & 4 && -1 < Om.indexOf(e))) {
        for (; a !== null;) {
          var u = Kr(a);
          if (
            (u !== null && Hu(u), (u = Po(e, t, r, o)), u === null && Uo(e, t, o, _i, r), u === a)
          )
            break;
          a = u;
        }
        a !== null && o.stopPropagation();
      } else Uo(e, t, o, null, r);
    }
  }
  var _i = null;
  function Po(e, t, r, o) {
    if (((_i = null), (e = fo(o)), (e = Tn(e)), e !== null))
      if (((t = kn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Nu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((_i = e), null);
  }
  function Zu(e) {
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
        switch (Dm()) {
          case go:
            return 1;
          case zu:
            return 4;
          case Ci:
          case Rm:
            return 16;
          case Bu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var tn = null,
    Eo = null,
    Ii = null;
  function qu() {
    if (Ii) return Ii;
    var e,
      t = Eo,
      r = t.length,
      o,
      a = "value" in tn ? tn.value : tn.textContent,
      u = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var h = r - e;
    for (o = 1; o <= h && t[r - o] === a[u - o]; o++);
    return (Ii = a.slice(e, 1 < o ? 1 - o : void 0));
  }
  function ji(e) {
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
  function Ju() {
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
          : Ju),
        (this.isPropagationStopped = Ju),
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
    Co = ut(Kn),
    _r = U({}, Kn, { view: 0, detail: 0 }),
    Hm = ut(_r),
    Mo,
    Ao,
    Ir,
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
      getModifierState: Ro,
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
          : (e !== Ir &&
              (Ir && e.type === "mousemove"
                ? ((Mo = e.screenX - Ir.screenX), (Ao = e.screenY - Ir.screenY))
                : (Ao = Mo = 0),
              (Ir = e)),
            Mo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ao;
      },
    }),
    bu = ut(Oi),
    $m = U({}, Oi, { dataTransfer: 0 }),
    Km = ut($m),
    Gm = U({}, _r, { relatedTarget: 0 }),
    Do = ut(Gm),
    Qm = U({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xm = ut(Qm),
    Ym = U({}, Kn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Zm = ut(Ym),
    qm = U({}, Kn, { data: 0 }),
    ec = ut(qm),
    Jm = {
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
    bm = {
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
    ey = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ty(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ey[e]) ? !!t[e] : !1;
  }
  function Ro() {
    return ty;
  }
  var ny = U({}, _r, {
      key: function (e) {
        if (e.key) {
          var t = Jm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ji(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? bm[e.keyCode] || "Unidentified"
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
      getModifierState: Ro,
      charCode: function (e) {
        return e.type === "keypress" ? ji(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ji(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    ry = ut(ny),
    iy = U({}, Oi, {
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
    tc = ut(iy),
    sy = U({}, _r, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ro,
    }),
    oy = ut(sy),
    ly = U({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ay = ut(ly),
    uy = U({}, Oi, {
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
    cy = ut(uy),
    fy = [9, 13, 27, 32],
    Vo = p && "CompositionEvent" in window,
    jr = null;
  p && "documentMode" in document && (jr = document.documentMode);
  var dy = p && "TextEvent" in window && !jr,
    nc = p && (!Vo || (jr && 8 < jr && 11 >= jr)),
    rc = " ",
    ic = !1;
  function sc(e, t) {
    switch (e) {
      case "keyup":
        return fy.indexOf(t.keyCode) !== -1;
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
  function oc(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var Gn = !1;
  function hy(e, t) {
    switch (e) {
      case "compositionend":
        return oc(t);
      case "keypress":
        return t.which !== 32 ? null : ((ic = !0), rc);
      case "textInput":
        return ((e = t.data), e === rc && ic ? null : e);
      default:
        return null;
    }
  }
  function py(e, t) {
    if (Gn)
      return e === "compositionend" || (!Vo && sc(e, t))
        ? ((e = qu()), (Ii = Eo = tn = null), (Gn = !1), e)
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
        return nc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var my = {
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
  function lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!my[e.type] : t === "textarea";
  }
  function ac(e, t, r, o) {
    (Au(o),
      (t = Hi(t, "onChange")),
      0 < t.length &&
        ((r = new Co("onChange", "change", null, r, o)), e.push({ event: r, listeners: t })));
  }
  var Fr = null,
    Or = null;
  function yy(e) {
    Cc(e, 0);
  }
  function zi(e) {
    var t = qn(e);
    if (yu(t)) return e;
  }
  function gy(e, t) {
    if (e === "change") return t;
  }
  var uc = !1;
  if (p) {
    var Lo;
    if (p) {
      var No = "oninput" in document;
      if (!No) {
        var cc = document.createElement("div");
        (cc.setAttribute("oninput", "return;"), (No = typeof cc.oninput == "function"));
      }
      Lo = No;
    } else Lo = !1;
    uc = Lo && (!document.documentMode || 9 < document.documentMode);
  }
  function fc() {
    Fr && (Fr.detachEvent("onpropertychange", dc), (Or = Fr = null));
  }
  function dc(e) {
    if (e.propertyName === "value" && zi(Or)) {
      var t = [];
      (ac(t, Or, e, fo(e)), Lu(yy, t));
    }
  }
  function vy(e, t, r) {
    e === "focusin"
      ? (fc(), (Fr = t), (Or = r), Fr.attachEvent("onpropertychange", dc))
      : e === "focusout" && fc();
  }
  function wy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zi(Or);
  }
  function xy(e, t) {
    if (e === "click") return zi(t);
  }
  function Sy(e, t) {
    if (e === "input" || e === "change") return zi(t);
  }
  function ky(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Tt = typeof Object.is == "function" ? Object.is : ky;
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
  function hc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function pc(e, t) {
    var r = hc(e);
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
      r = hc(r);
    }
  }
  function mc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? mc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function yc() {
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
  function _o(e) {
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
  function Ty(e) {
    var t = yc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && mc(r.ownerDocument.documentElement, r)) {
      if (o !== null && _o(r)) {
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
            (a = pc(r, u)));
          var h = pc(r, o);
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
  var Py = p && "documentMode" in document && 11 >= document.documentMode,
    Qn = null,
    Io = null,
    Br = null,
    jo = !1;
  function gc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    jo ||
      Qn == null ||
      Qn !== ki(o) ||
      ((o = Qn),
      "selectionStart" in o && _o(o)
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
        (o = Hi(Io, "onSelect")),
        0 < o.length &&
          ((t = new Co("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Qn))));
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
  var Xn = {
      animationend: Bi("Animation", "AnimationEnd"),
      animationiteration: Bi("Animation", "AnimationIteration"),
      animationstart: Bi("Animation", "AnimationStart"),
      transitionend: Bi("Transition", "TransitionEnd"),
    },
    Fo = {},
    vc = {};
  p &&
    ((vc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Xn.animationend.animation,
      delete Xn.animationiteration.animation,
      delete Xn.animationstart.animation),
    "TransitionEvent" in window || delete Xn.transitionend.transition);
  function Ui(e) {
    if (Fo[e]) return Fo[e];
    if (!Xn[e]) return e;
    var t = Xn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in vc) return (Fo[e] = t[r]);
    return e;
  }
  var wc = Ui("animationend"),
    xc = Ui("animationiteration"),
    Sc = Ui("animationstart"),
    kc = Ui("transitionend"),
    Tc = new Map(),
    Pc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function nn(e, t) {
    (Tc.set(e, t), d(t, [e]));
  }
  for (var Oo = 0; Oo < Pc.length; Oo++) {
    var zo = Pc[Oo],
      Ey = zo.toLowerCase(),
      Cy = zo[0].toUpperCase() + zo.slice(1);
    nn(Ey, "on" + Cy);
  }
  (nn(wc, "onAnimationEnd"),
    nn(xc, "onAnimationIteration"),
    nn(Sc, "onAnimationStart"),
    nn("dblclick", "onDoubleClick"),
    nn("focusin", "onFocus"),
    nn("focusout", "onBlur"),
    nn(kc, "onTransitionEnd"),
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
    My = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));
  function Ec(e, t, r) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = r), Em(o, t, void 0, e), (e.currentTarget = null));
  }
  function Cc(e, t) {
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
            (Ec(a, v, M), (u = x));
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
            (Ec(a, v, M), (u = x));
          }
      }
    }
    if (Ei) throw ((e = yo), (Ei = !1), (yo = null), e);
  }
  function ke(e, t) {
    var r = t[Qo];
    r === void 0 && (r = t[Qo] = new Set());
    var o = e + "__bubble";
    r.has(o) || (Mc(t, e, 2, !1), r.add(o));
  }
  function Bo(e, t, r) {
    var o = 0;
    (t && (o |= 4), Mc(r, e, o, t));
  }
  var Wi = "_reactListening" + Math.random().toString(36).slice(2);
  function Wr(e) {
    if (!e[Wi]) {
      ((e[Wi] = !0),
        l.forEach(function (r) {
          r !== "selectionchange" && (My.has(r) || Bo(r, !1, e), Bo(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wi] || ((t[Wi] = !0), Bo("selectionchange", !1, t));
    }
  }
  function Mc(e, t, r, o) {
    switch (Zu(t)) {
      case 1:
        var a = Um;
        break;
      case 4:
        a = Wm;
        break;
      default:
        a = To;
    }
    ((r = a.bind(null, t, r, e)),
      (a = void 0),
      !mo || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (a = !0),
      o
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
          ? e.addEventListener(t, r, { passive: a })
          : e.addEventListener(t, r, !1));
  }
  function Uo(e, t, r, o, a) {
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
            if (((h = Tn(v)), h === null)) return;
            if (((x = h.tag), x === 5 || x === 6)) {
              o = u = h;
              continue e;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    Lu(function () {
      var M = u,
        N = fo(r),
        _ = [];
      e: {
        var L = Tc.get(e);
        if (L !== void 0) {
          var W = Co,
            $ = e;
          switch (e) {
            case "keypress":
              if (ji(r) === 0) break e;
            case "keydown":
            case "keyup":
              W = ry;
              break;
            case "focusin":
              (($ = "focus"), (W = Do));
              break;
            case "focusout":
              (($ = "blur"), (W = Do));
              break;
            case "beforeblur":
            case "afterblur":
              W = Do;
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
              W = bu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = Km;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = oy;
              break;
            case wc:
            case xc:
            case Sc:
              W = Xm;
              break;
            case kc:
              W = ay;
              break;
            case "scroll":
              W = Hm;
              break;
            case "wheel":
              W = cy;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = Zm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = tc;
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
          0 < Q.length && ((L = new W(L, $, null, r, N)), _.push({ event: L, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (W = e === "mouseout" || e === "pointerout"),
            L && r !== co && ($ = r.relatedTarget || r.fromElement) && (Tn($) || $[Wt]))
          )
            break e;
          if (
            (W || L) &&
            ((L =
              N.window === N
                ? N
                : (L = N.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            W
              ? (($ = r.relatedTarget || r.toElement),
                (W = M),
                ($ = $ ? Tn($) : null),
                $ !== null &&
                  ((_e = kn($)), $ !== _e || ($.tag !== 5 && $.tag !== 6)) &&
                  ($ = null))
              : ((W = null), ($ = M)),
            W !== $)
          ) {
            if (
              ((Q = bu),
              (F = "onMouseLeave"),
              (P = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = tc), (F = "onPointerLeave"), (P = "onPointerEnter"), (k = "pointer")),
              (_e = W == null ? L : qn(W)),
              (E = $ == null ? L : qn($)),
              (L = new Q(F, k + "leave", W, r, N)),
              (L.target = _e),
              (L.relatedTarget = E),
              (F = null),
              Tn(N) === M &&
                ((Q = new Q(P, k + "enter", $, r, N)),
                (Q.target = E),
                (Q.relatedTarget = _e),
                (F = Q)),
              (_e = F),
              W && $)
            )
              t: {
                for (Q = W, P = $, k = 0, E = Q; E; E = Yn(E)) k++;
                for (E = 0, F = P; F; F = Yn(F)) E++;
                for (; 0 < k - E;) ((Q = Yn(Q)), k--);
                for (; 0 < E - k;) ((P = Yn(P)), E--);
                for (; k--;) {
                  if (Q === P || (P !== null && Q === P.alternate)) break t;
                  ((Q = Yn(Q)), (P = Yn(P)));
                }
                Q = null;
              }
            else Q = null;
            (W !== null && Ac(_, L, W, Q, !1), $ !== null && _e !== null && Ac(_, _e, $, Q, !0));
          }
        }
        e: {
          if (
            ((L = M ? qn(M) : window),
            (W = L.nodeName && L.nodeName.toLowerCase()),
            W === "select" || (W === "input" && L.type === "file"))
          )
            var X = gy;
          else if (lc(L))
            if (uc) X = Sy;
            else {
              X = wy;
              var J = vy;
            }
          else
            (W = L.nodeName) &&
              W.toLowerCase() === "input" &&
              (L.type === "checkbox" || L.type === "radio") &&
              (X = xy);
          if (X && (X = X(e, M))) {
            ac(_, X, r, N);
            break e;
          }
          (J && J(e, L, M),
            e === "focusout" &&
              (J = L._wrapperState) &&
              J.controlled &&
              L.type === "number" &&
              so(L, "number", L.value));
        }
        switch (((J = M ? qn(M) : window), e)) {
          case "focusin":
            (lc(J) || J.contentEditable === "true") && ((Qn = J), (Io = M), (Br = null));
            break;
          case "focusout":
            Br = Io = Qn = null;
            break;
          case "mousedown":
            jo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((jo = !1), gc(_, r, N));
            break;
          case "selectionchange":
            if (Py) break;
          case "keydown":
          case "keyup":
            gc(_, r, N);
        }
        var b;
        if (Vo)
          e: {
            switch (e) {
              case "compositionstart":
                var te = "onCompositionStart";
                break e;
              case "compositionend":
                te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                te = "onCompositionUpdate";
                break e;
            }
            te = void 0;
          }
        else
          Gn
            ? sc(e, r) && (te = "onCompositionEnd")
            : e === "keydown" && r.keyCode === 229 && (te = "onCompositionStart");
        (te &&
          (nc &&
            r.locale !== "ko" &&
            (Gn || te !== "onCompositionStart"
              ? te === "onCompositionEnd" && Gn && (b = qu())
              : ((tn = N), (Eo = "value" in tn ? tn.value : tn.textContent), (Gn = !0))),
          (J = Hi(M, te)),
          0 < J.length &&
            ((te = new ec(te, e, null, r, N)),
            _.push({ event: te, listeners: J }),
            b ? (te.data = b) : ((b = oc(r)), b !== null && (te.data = b)))),
          (b = dy ? hy(e, r) : py(e, r)) &&
            ((M = Hi(M, "onBeforeInput")),
            0 < M.length &&
              ((N = new ec("onBeforeInput", "beforeinput", null, r, N)),
              _.push({ event: N, listeners: M }),
              (N.data = b))));
      }
      Cc(_, t);
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
  function Yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ac(e, t, r, o, a) {
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
  var Ay = /\r\n?/g,
    Dy = /\u0000|\uFFFD/g;
  function Dc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ay,
        `
`,
      )
      .replace(Dy, "");
  }
  function $i(e, t, r) {
    if (((t = Dc(t)), Dc(e) !== t && r)) throw Error(s(425));
  }
  function Ki() {}
  var Wo = null,
    Ho = null;
  function $o(e, t) {
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
  var Ko = typeof setTimeout == "function" ? setTimeout : void 0,
    Ry = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Rc = typeof Promise == "function" ? Promise : void 0,
    Vy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Rc < "u"
          ? function (e) {
              return Rc.resolve(null).then(e).catch(Ly);
            }
          : Ko;
  function Ly(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Go(e, t) {
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
  function rn(e) {
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
  function Vc(e) {
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
    _t = "__reactFiber$" + Zn,
    $r = "__reactProps$" + Zn,
    Wt = "__reactContainer$" + Zn,
    Qo = "__reactEvents$" + Zn,
    Ny = "__reactListeners$" + Zn,
    _y = "__reactHandles$" + Zn;
  function Tn(e) {
    var t = e[_t];
    if (t) return t;
    for (var r = e.parentNode; r;) {
      if ((t = r[Wt] || r[_t])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = Vc(e); e !== null;) {
            if ((r = e[_t])) return r;
            e = Vc(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function Kr(e) {
    return (
      (e = e[_t] || e[Wt]),
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
  var Xo = [],
    Jn = -1;
  function sn(e) {
    return { current: e };
  }
  function Te(e) {
    0 > Jn || ((e.current = Xo[Jn]), (Xo[Jn] = null), Jn--);
  }
  function we(e, t) {
    (Jn++, (Xo[Jn] = e.current), (e.current = t));
  }
  var on = {},
    Xe = sn(on),
    nt = sn(!1),
    Pn = on;
  function bn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return on;
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
  function Qi() {
    (Te(nt), Te(Xe));
  }
  function Lc(e, t, r) {
    if (Xe.current !== on) throw Error(s(168));
    (we(Xe, t), we(nt, r));
  }
  function Nc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function")) return r;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(s(108, ve(e) || "Unknown", a));
    return U({}, r, o);
  }
  function Xi(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || on),
      (Pn = Xe.current),
      we(Xe, e),
      we(nt, nt.current),
      !0
    );
  }
  function _c(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    (r
      ? ((e = Nc(e, t, Pn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        Te(nt),
        Te(Xe),
        we(Xe, e))
      : Te(nt),
      we(nt, r));
  }
  var Ht = null,
    Yi = !1,
    Yo = !1;
  function Ic(e) {
    Ht === null ? (Ht = [e]) : Ht.push(e);
  }
  function Iy(e) {
    ((Yi = !0), Ic(e));
  }
  function ln() {
    if (!Yo && Ht !== null) {
      Yo = !0;
      var e = 0,
        t = he;
      try {
        var r = Ht;
        for (he = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((Ht = null), (Yi = !1));
      } catch (a) {
        throw (Ht !== null && (Ht = Ht.slice(e + 1)), Fu(go, ln), a);
      } finally {
        ((he = t), (Yo = !1));
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
    En = null,
    $t = 1,
    Kt = "";
  function Cn(e, t) {
    ((er[tr++] = qi), (er[tr++] = Zi), (Zi = e), (qi = t));
  }
  function jc(e, t, r) {
    ((pt[mt++] = $t), (pt[mt++] = Kt), (pt[mt++] = En), (En = e));
    var o = $t;
    e = Kt;
    var a = 32 - kt(o) - 1;
    ((o &= ~(1 << a)), (r += 1));
    var u = 32 - kt(t) + a;
    if (30 < u) {
      var h = a - (a % 5);
      ((u = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (a -= h),
        ($t = (1 << (32 - kt(t) + a)) | (r << a) | o),
        (Kt = u + e));
    } else (($t = (1 << u) | (r << a) | o), (Kt = e));
  }
  function Zo(e) {
    e.return !== null && (Cn(e, 1), jc(e, 1, 0));
  }
  function qo(e) {
    for (; e === Zi;) ((Zi = er[--tr]), (er[tr] = null), (qi = er[--tr]), (er[tr] = null));
    for (; e === En;)
      ((En = pt[--mt]),
        (pt[mt] = null),
        (Kt = pt[--mt]),
        (pt[mt] = null),
        ($t = pt[--mt]),
        (pt[mt] = null));
  }
  var ct = null,
    ft = null,
    Ee = !1,
    Pt = null;
  function Fc(e, t) {
    var r = wt(5, null, null, 0);
    ((r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function Oc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ct = e), (ft = rn(t.firstChild)), !0) : !1
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
            ? ((r = En !== null ? { id: $t, overflow: Kt } : null),
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
  function Jo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function bo(e) {
    if (Ee) {
      var t = ft;
      if (t) {
        var r = t;
        if (!Oc(e, t)) {
          if (Jo(e)) throw Error(s(418));
          t = rn(r.nextSibling);
          var o = ct;
          t && Oc(e, t) ? Fc(o, r) : ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (ct = e));
        }
      } else {
        if (Jo(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (ct = e));
      }
    }
  }
  function zc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ct = e;
  }
  function Ji(e) {
    if (e !== ct) return !1;
    if (!Ee) return (zc(e), (Ee = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !$o(e.type, e.memoizedProps))),
      t && (t = ft))
    ) {
      if (Jo(e)) throw (Bc(), Error(s(418)));
      for (; t;) (Fc(e, t), (t = rn(t.nextSibling)));
    }
    if ((zc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                ft = rn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ft = null;
      }
    } else ft = ct ? rn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Bc() {
    for (var e = ft; e;) e = rn(e.nextSibling);
  }
  function nr() {
    ((ft = ct = null), (Ee = !1));
  }
  function el(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  var jy = B.ReactCurrentBatchConfig;
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
  function Uc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Wc(e) {
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
      return ((P = mn(P, k)), (P.index = 0), (P.sibling = null), P);
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
        ? ((k = Kl(E, P.mode, F)), (k.return = P), k)
        : ((k = a(k, E)), (k.return = P), k);
    }
    function x(P, k, E, F) {
      var X = E.type;
      return X === re
        ? N(P, k, E.props.children, F, E.key)
        : k !== null &&
            (k.elementType === X ||
              (typeof X == "object" && X !== null && X.$$typeof === Se && Uc(X) === k.type))
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
        ? ((k = Gl(E, P.mode, F)), (k.return = P), k)
        : ((k = a(k, E.children || [])), (k.return = P), k);
    }
    function N(P, k, E, F, X) {
      return k === null || k.tag !== 7
        ? ((k = _n(E, P.mode, F, X)), (k.return = P), k)
        : ((k = a(k, E)), (k.return = P), k);
    }
    function _(P, k, E) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((k = Kl("" + k, P.mode, E)), (k.return = P), k);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Z:
            return (
              (E = Ts(k.type, k.key, k.props, null, P.mode, E)),
              (E.ref = Gr(P, null, k)),
              (E.return = P),
              E
            );
          case ie:
            return ((k = Gl(k, P.mode, E)), (k.return = P), k);
          case Se:
            var F = k._init;
            return _(P, F(k._payload), E);
        }
        if (Sr(k) || G(k)) return ((k = _n(k, P.mode, E, null)), (k.return = P), k);
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
          case Z:
            return E.key === X ? x(P, k, E, F) : null;
          case ie:
            return E.key === X ? M(P, k, E, F) : null;
          case Se:
            return ((X = E._init), L(P, k, X(E._payload), F));
        }
        if (Sr(E) || G(E)) return X !== null ? null : N(P, k, E, F, null);
        bi(P, E);
      }
      return null;
    }
    function W(P, k, E, F, X) {
      if ((typeof F == "string" && F !== "") || typeof F == "number")
        return ((P = P.get(E) || null), v(k, P, "" + F, X));
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Z:
            return ((P = P.get(F.key === null ? E : F.key) || null), x(k, P, F, X));
          case ie:
            return ((P = P.get(F.key === null ? E : F.key) || null), M(k, P, F, X));
          case Se:
            var J = F._init;
            return W(P, k, E, J(F._payload), X);
        }
        if (Sr(F) || G(F)) return ((P = P.get(E) || null), N(k, P, F, X, null));
        bi(k, F);
      }
      return null;
    }
    function $(P, k, E, F) {
      for (
        var X = null, J = null, b = k, te = (k = 0), He = null;
        b !== null && te < E.length;
        te++
      ) {
        b.index > te ? ((He = b), (b = null)) : (He = b.sibling);
        var fe = L(P, b, E[te], F);
        if (fe === null) {
          b === null && (b = He);
          break;
        }
        (e && b && fe.alternate === null && t(P, b),
          (k = u(fe, k, te)),
          J === null ? (X = fe) : (J.sibling = fe),
          (J = fe),
          (b = He));
      }
      if (te === E.length) return (r(P, b), Ee && Cn(P, te), X);
      if (b === null) {
        for (; te < E.length; te++)
          ((b = _(P, E[te], F)),
            b !== null && ((k = u(b, k, te)), J === null ? (X = b) : (J.sibling = b), (J = b)));
        return (Ee && Cn(P, te), X);
      }
      for (b = o(P, b); te < E.length; te++)
        ((He = W(b, P, te, E[te], F)),
          He !== null &&
            (e && He.alternate !== null && b.delete(He.key === null ? te : He.key),
            (k = u(He, k, te)),
            J === null ? (X = He) : (J.sibling = He),
            (J = He)));
      return (
        e &&
          b.forEach(function (yn) {
            return t(P, yn);
          }),
        Ee && Cn(P, te),
        X
      );
    }
    function Q(P, k, E, F) {
      var X = G(E);
      if (typeof X != "function") throw Error(s(150));
      if (((E = X.call(E)), E == null)) throw Error(s(151));
      for (
        var J = (X = null), b = k, te = (k = 0), He = null, fe = E.next();
        b !== null && !fe.done;
        te++, fe = E.next()
      ) {
        b.index > te ? ((He = b), (b = null)) : (He = b.sibling);
        var yn = L(P, b, fe.value, F);
        if (yn === null) {
          b === null && (b = He);
          break;
        }
        (e && b && yn.alternate === null && t(P, b),
          (k = u(yn, k, te)),
          J === null ? (X = yn) : (J.sibling = yn),
          (J = yn),
          (b = He));
      }
      if (fe.done) return (r(P, b), Ee && Cn(P, te), X);
      if (b === null) {
        for (; !fe.done; te++, fe = E.next())
          ((fe = _(P, fe.value, F)),
            fe !== null &&
              ((k = u(fe, k, te)), J === null ? (X = fe) : (J.sibling = fe), (J = fe)));
        return (Ee && Cn(P, te), X);
      }
      for (b = o(P, b); !fe.done; te++, fe = E.next())
        ((fe = W(b, P, te, fe.value, F)),
          fe !== null &&
            (e && fe.alternate !== null && b.delete(fe.key === null ? te : fe.key),
            (k = u(fe, k, te)),
            J === null ? (X = fe) : (J.sibling = fe),
            (J = fe)));
      return (
        e &&
          b.forEach(function (mg) {
            return t(P, mg);
          }),
        Ee && Cn(P, te),
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
          case Z:
            e: {
              for (var X = E.key, J = k; J !== null;) {
                if (J.key === X) {
                  if (((X = E.type), X === re)) {
                    if (J.tag === 7) {
                      (r(P, J.sibling), (k = a(J, E.props.children)), (k.return = P), (P = k));
                      break e;
                    }
                  } else if (
                    J.elementType === X ||
                    (typeof X == "object" && X !== null && X.$$typeof === Se && Uc(X) === J.type)
                  ) {
                    (r(P, J.sibling),
                      (k = a(J, E.props)),
                      (k.ref = Gr(P, J, E)),
                      (k.return = P),
                      (P = k));
                    break e;
                  }
                  r(P, J);
                  break;
                } else t(P, J);
                J = J.sibling;
              }
              E.type === re
                ? ((k = _n(E.props.children, P.mode, F, E.key)), (k.return = P), (P = k))
                : ((F = Ts(E.type, E.key, E.props, null, P.mode, F)),
                  (F.ref = Gr(P, k, E)),
                  (F.return = P),
                  (P = F));
            }
            return h(P);
          case ie:
            e: {
              for (J = E.key; k !== null;) {
                if (k.key === J)
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
              ((k = Gl(E, P.mode, F)), (k.return = P), (P = k));
            }
            return h(P);
          case Se:
            return ((J = E._init), _e(P, k, J(E._payload), F));
        }
        if (Sr(E)) return $(P, k, E, F);
        if (G(E)) return Q(P, k, E, F);
        bi(P, E);
      }
      return (typeof E == "string" && E !== "") || typeof E == "number"
        ? ((E = "" + E),
          k !== null && k.tag === 6
            ? (r(P, k.sibling), (k = a(k, E)), (k.return = P), (P = k))
            : (r(P, k), (k = Kl(E, P.mode, F)), (k.return = P), (P = k)),
          h(P))
        : r(P, k);
    }
    return _e;
  }
  var rr = Wc(!0),
    Hc = Wc(!1),
    es = sn(null),
    ts = null,
    ir = null,
    tl = null;
  function nl() {
    tl = ir = ts = null;
  }
  function rl(e) {
    var t = es.current;
    (Te(es), (e._currentValue = t));
  }
  function il(e, t, r) {
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
      (tl = ir = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (it = !0), (e.firstContext = null)));
  }
  function yt(e) {
    var t = e._currentValue;
    if (tl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), ir === null)) {
        if (ts === null) throw Error(s(308));
        ((ir = e), (ts.dependencies = { lanes: 0, firstContext: e }));
      } else ir = ir.next = e;
    return t;
  }
  var Mn = null;
  function sl(e) {
    Mn === null ? (Mn = [e]) : Mn.push(e);
  }
  function $c(e, t, r, o) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), sl(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      Gt(e, o)
    );
  }
  function Gt(e, t) {
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
  var an = !1;
  function ol(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Kc(e, t) {
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
  function un(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (ae & 2) !== 0)) {
      var a = o.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (o.pending = t),
        Gt(e, r)
      );
    }
    return (
      (a = o.interleaved),
      a === null ? ((t.next = t), sl(o)) : ((t.next = a.next), (a.next = t)),
      (o.interleaved = t),
      Gt(e, r)
    );
  }
  function ns(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), xo(e, r));
    }
  }
  function Gc(e, t) {
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
    an = !1;
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
          W = v.eventTime;
        if ((o & L) === L) {
          N !== null &&
            (N = N.next =
              {
                eventTime: W,
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null,
              });
          e: {
            var $ = e,
              Q = v;
            switch (((L = t), (W = r), Q.tag)) {
              case 1:
                if ((($ = Q.payload), typeof $ == "function")) {
                  _ = $.call(W, _, L);
                  break e;
                }
                _ = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = Q.payload), (L = typeof $ == "function" ? $.call(W, _, L) : $), L == null)
                )
                  break e;
                _ = U({}, _, L);
                break e;
              case 2:
                an = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64), (L = a.effects), L === null ? (a.effects = [v]) : L.push(v));
        } else
          ((W = {
            eventTime: W,
            lane: L,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            N === null ? ((M = N = W), (x = _)) : (N = N.next = W),
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
      ((Rn |= h), (e.lanes = h), (e.memoizedState = _));
    }
  }
  function Qc(e, t, r) {
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
  var Qr = {},
    It = sn(Qr),
    Xr = sn(Qr),
    Yr = sn(Qr);
  function An(e) {
    if (e === Qr) throw Error(s(174));
    return e;
  }
  function ll(e, t) {
    switch ((we(Yr, t), we(Xr, e), we(It, Qr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : lo(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = lo(t, e)));
    }
    (Te(It), we(It, t));
  }
  function or() {
    (Te(It), Te(Xr), Te(Yr));
  }
  function Xc(e) {
    An(Yr.current);
    var t = An(It.current),
      r = lo(t, e.type);
    t !== r && (we(Xr, e), we(It, r));
  }
  function al(e) {
    Xr.current === e && (Te(It), Te(Xr));
  }
  var Me = sn(0);
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
  var ul = [];
  function cl() {
    for (var e = 0; e < ul.length; e++) ul[e]._workInProgressVersionPrimary = null;
    ul.length = 0;
  }
  var ss = B.ReactCurrentDispatcher,
    fl = B.ReactCurrentBatchConfig,
    Dn = 0,
    Ae = null,
    Oe = null,
    Ue = null,
    os = !1,
    Zr = !1,
    qr = 0,
    Fy = 0;
  function Ye() {
    throw Error(s(321));
  }
  function dl(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Tt(e[r], t[r])) return !1;
    return !0;
  }
  function hl(e, t, r, o, a, u) {
    if (
      ((Dn = u),
      (Ae = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ss.current = e === null || e.memoizedState === null ? Uy : Wy),
      (e = r(o, a)),
      Zr)
    ) {
      u = 0;
      do {
        if (((Zr = !1), (qr = 0), 25 <= u)) throw Error(s(301));
        ((u += 1), (Ue = Oe = null), (t.updateQueue = null), (ss.current = Hy), (e = r(o, a)));
      } while (Zr);
    }
    if (
      ((ss.current = us),
      (t = Oe !== null && Oe.next !== null),
      (Dn = 0),
      (Ue = Oe = Ae = null),
      (os = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function pl() {
    var e = qr !== 0;
    return ((qr = 0), e);
  }
  function jt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ue === null ? (Ae.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue);
  }
  function gt() {
    if (Oe === null) {
      var e = Ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = Ue === null ? Ae.memoizedState : Ue.next;
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
        Ue === null ? (Ae.memoizedState = Ue = e) : (Ue = Ue.next = e));
    }
    return Ue;
  }
  function Jr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ml(e) {
    var t = gt(),
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
        if ((Dn & N) === N)
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
          (x === null ? ((v = x = _), (h = o)) : (x = x.next = _), (Ae.lanes |= N), (Rn |= N));
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
      do ((u = a.lane), (Ae.lanes |= u), (Rn |= u), (a = a.next));
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function yl(e) {
    var t = gt(),
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
  function Yc() {}
  function Zc(e, t) {
    var r = Ae,
      o = gt(),
      a = t(),
      u = !Tt(o.memoizedState, a);
    if (
      (u && ((o.memoizedState = a), (it = !0)),
      (o = o.queue),
      gl(bc.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || u || (Ue !== null && Ue.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), br(9, Jc.bind(null, r, o, a, t), void 0, null), We === null))
        throw Error(s(349));
      (Dn & 30) !== 0 || qc(r, t, a);
    }
    return a;
  }
  function qc(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Ae.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function Jc(e, t, r, o) {
    ((t.value = r), (t.getSnapshot = o), ef(t) && tf(e));
  }
  function bc(e, t, r) {
    return r(function () {
      ef(t) && tf(e);
    });
  }
  function ef(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Tt(e, r);
    } catch {
      return !0;
    }
  }
  function tf(e) {
    var t = Gt(e, 1);
    t !== null && At(t, e, 1, -1);
  }
  function nf(e) {
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
      (e = e.dispatch = By.bind(null, Ae, e)),
      [t.memoizedState, e]
    );
  }
  function br(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = Ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ae.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function rf() {
    return gt().memoizedState;
  }
  function ls(e, t, r, o) {
    var a = jt();
    ((Ae.flags |= e), (a.memoizedState = br(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function as(e, t, r, o) {
    var a = gt();
    o = o === void 0 ? null : o;
    var u = void 0;
    if (Oe !== null) {
      var h = Oe.memoizedState;
      if (((u = h.destroy), o !== null && dl(o, h.deps))) {
        a.memoizedState = br(t, r, u, o);
        return;
      }
    }
    ((Ae.flags |= e), (a.memoizedState = br(1 | t, r, u, o)));
  }
  function sf(e, t) {
    return ls(8390656, 8, e, t);
  }
  function gl(e, t) {
    return as(2048, 8, e, t);
  }
  function of(e, t) {
    return as(4, 2, e, t);
  }
  function lf(e, t) {
    return as(4, 4, e, t);
  }
  function af(e, t) {
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
  function uf(e, t, r) {
    return ((r = r != null ? r.concat([e]) : null), as(4, 4, af.bind(null, t, e), r));
  }
  function vl() {}
  function cf(e, t) {
    var r = gt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && dl(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function ff(e, t) {
    var r = gt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && dl(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function df(e, t, r) {
    return (Dn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (it = !0)), (e.memoizedState = r))
      : (Tt(r, t) || ((r = Uu()), (Ae.lanes |= r), (Rn |= r), (e.baseState = !0)), t);
  }
  function Oy(e, t) {
    var r = he;
    ((he = r !== 0 && 4 > r ? r : 4), e(!0));
    var o = fl.transition;
    fl.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((he = r), (fl.transition = o));
    }
  }
  function hf() {
    return gt().memoizedState;
  }
  function zy(e, t, r) {
    var o = hn(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), pf(e)))
      mf(t, r);
    else if (((r = $c(e, t, r, o)), r !== null)) {
      var a = be();
      (At(r, e, o, a), yf(r, t, o));
    }
  }
  function By(e, t, r) {
    var o = hn(e),
      a = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (pf(e)) mf(t, a);
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
            (x === null ? ((a.next = a), sl(t)) : ((a.next = x.next), (x.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((r = $c(e, t, a, o)), r !== null && ((a = be()), At(r, e, o, a), yf(r, t, o)));
    }
  }
  function pf(e) {
    var t = e.alternate;
    return e === Ae || (t !== null && t === Ae);
  }
  function mf(e, t) {
    Zr = os = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function yf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), xo(e, r));
    }
  }
  var us = {
      readContext: yt,
      useCallback: Ye,
      useContext: Ye,
      useEffect: Ye,
      useImperativeHandle: Ye,
      useInsertionEffect: Ye,
      useLayoutEffect: Ye,
      useMemo: Ye,
      useReducer: Ye,
      useRef: Ye,
      useState: Ye,
      useDebugValue: Ye,
      useDeferredValue: Ye,
      useTransition: Ye,
      useMutableSource: Ye,
      useSyncExternalStore: Ye,
      useId: Ye,
      unstable_isNewReconciler: !1,
    },
    Uy = {
      readContext: yt,
      useCallback: function (e, t) {
        return ((jt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: yt,
      useEffect: sf,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), ls(4194308, 4, af.bind(null, t, e), r));
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
          (e = e.dispatch = zy.bind(null, Ae, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = jt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: nf,
      useDebugValue: vl,
      useDeferredValue: function (e) {
        return (jt().memoizedState = e);
      },
      useTransition: function () {
        var e = nf(!1),
          t = e[0];
        return ((e = Oy.bind(null, e[1])), (jt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = Ae,
          a = jt();
        if (Ee) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), We === null)) throw Error(s(349));
          (Dn & 30) !== 0 || qc(o, t, r);
        }
        a.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (a.queue = u),
          sf(bc.bind(null, o, u, e), [e]),
          (o.flags |= 2048),
          br(9, Jc.bind(null, o, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = jt(),
          t = We.identifierPrefix;
        if (Ee) {
          var r = Kt,
            o = $t;
          ((r = (o & ~(1 << (32 - kt(o) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = qr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":"));
        } else ((r = Fy++), (t = ":" + t + "r" + r.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Wy = {
      readContext: yt,
      useCallback: cf,
      useContext: yt,
      useEffect: gl,
      useImperativeHandle: uf,
      useInsertionEffect: of,
      useLayoutEffect: lf,
      useMemo: ff,
      useReducer: ml,
      useRef: rf,
      useState: function () {
        return ml(Jr);
      },
      useDebugValue: vl,
      useDeferredValue: function (e) {
        var t = gt();
        return df(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = ml(Jr)[0],
          t = gt().memoizedState;
        return [e, t];
      },
      useMutableSource: Yc,
      useSyncExternalStore: Zc,
      useId: hf,
      unstable_isNewReconciler: !1,
    },
    Hy = {
      readContext: yt,
      useCallback: cf,
      useContext: yt,
      useEffect: gl,
      useImperativeHandle: uf,
      useInsertionEffect: of,
      useLayoutEffect: lf,
      useMemo: ff,
      useReducer: yl,
      useRef: rf,
      useState: function () {
        return yl(Jr);
      },
      useDebugValue: vl,
      useDeferredValue: function (e) {
        var t = gt();
        return Oe === null ? (t.memoizedState = e) : df(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = yl(Jr)[0],
          t = gt().memoizedState;
        return [e, t];
      },
      useMutableSource: Yc,
      useSyncExternalStore: Zc,
      useId: hf,
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
  function wl(e, t, r, o) {
    ((t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : U({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var cs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? kn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = be(),
        a = hn(e),
        u = Qt(o, a);
      ((u.payload = t),
        r != null && (u.callback = r),
        (t = un(e, u, a)),
        t !== null && (At(t, e, a, o), ns(t, e, a)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = be(),
        a = hn(e),
        u = Qt(o, a);
      ((u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = un(e, u, a)),
        t !== null && (At(t, e, a, o), ns(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = be(),
        o = hn(e),
        a = Qt(r, o);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = un(e, a, o)),
        t !== null && (At(t, e, o, r), ns(t, e, o)));
    },
  };
  function gf(e, t, r, o, a, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, u, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !zr(r, o) || !zr(a, u)
          : !0
    );
  }
  function vf(e, t, r) {
    var o = !1,
      a = on,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = yt(u))
        : ((a = rt(t) ? Pn : Xe.current),
          (o = t.contextTypes),
          (u = (o = o != null) ? bn(e, a) : on)),
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
  function wf(e, t, r, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && cs.enqueueReplaceState(t, t.state, null));
  }
  function xl(e, t, r, o) {
    var a = e.stateNode;
    ((a.props = r), (a.state = e.memoizedState), (a.refs = {}), ol(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (a.context = yt(u))
      : ((u = rt(t) ? Pn : Xe.current), (a.context = bn(e, u))),
      (a.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (wl(e, t, u, r), (a.state = e.memoizedState)),
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
  function Sl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function kl(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var $y = typeof WeakMap == "function" ? WeakMap : Map;
  function xf(e, t, r) {
    ((r = Qt(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (gs || ((gs = !0), (Fl = o)), kl(e, t));
      }),
      r
    );
  }
  function Sf(e, t, r) {
    ((r = Qt(-1, r)), (r.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var a = t.value;
      ((r.payload = function () {
        return o(a);
      }),
        (r.callback = function () {
          kl(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (r.callback = function () {
          (kl(e, t),
            typeof o != "function" && (fn === null ? (fn = new Set([this])) : fn.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
        }),
      r
    );
  }
  function kf(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new $y();
      var a = new Set();
      o.set(t, a);
    } else ((a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a)));
    a.has(r) || (a.add(r), (e = ig.bind(null, e, t, r)), t.then(e, e));
  }
  function Tf(e) {
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
  function Pf(e, t, r, o, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null ? (r.tag = 17) : ((t = Qt(-1, 1)), (t.tag = 2), un(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var Ky = B.ReactCurrentOwner,
    it = !1;
  function Je(e, t, r, o) {
    t.child = e === null ? Hc(t, null, r, o) : rr(t, e.child, r, o);
  }
  function Ef(e, t, r, o, a) {
    r = r.render;
    var u = t.ref;
    return (
      sr(t, a),
      (o = hl(e, t, r, o, u, a)),
      (r = pl()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Xt(e, t, a))
        : (Ee && r && Zo(t), (t.flags |= 1), Je(e, t, o, a), t.child)
    );
  }
  function Cf(e, t, r, o, a) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !$l(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Mf(e, t, u, o, a))
        : ((e = Ts(r.type, null, o, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & a) === 0)) {
      var h = u.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : zr), r(h, o) && e.ref === t.ref))
        return Xt(e, t, a);
    }
    return ((t.flags |= 1), (e = mn(u, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Mf(e, t, r, o, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (zr(u, o) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = o = u), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (it = !0);
        else return ((t.lanes = e.lanes), Xt(e, t, a));
    }
    return Tl(e, t, r, o, a);
  }
  function Af(e, t, r) {
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
  function Df(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Tl(e, t, r, o, a) {
    var u = rt(r) ? Pn : Xe.current;
    return (
      (u = bn(t, u)),
      sr(t, a),
      (r = hl(e, t, r, o, u, a)),
      (o = pl()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Xt(e, t, a))
        : (Ee && o && Zo(t), (t.flags |= 1), Je(e, t, r, a), t.child)
    );
  }
  function Rf(e, t, r, o, a) {
    if (rt(r)) {
      var u = !0;
      Xi(t);
    } else u = !1;
    if ((sr(t, a), t.stateNode === null)) (ds(e, t), vf(t, r, o), xl(t, r, o, a), (o = !0));
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var x = h.context,
        M = r.contextType;
      typeof M == "object" && M !== null
        ? (M = yt(M))
        : ((M = rt(r) ? Pn : Xe.current), (M = bn(t, M)));
      var N = r.getDerivedStateFromProps,
        _ = typeof N == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (_ ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== o || x !== M) && wf(t, h, o, M)),
        (an = !1));
      var L = t.memoizedState;
      ((h.state = L),
        rs(t, o, h, a),
        (x = t.memoizedState),
        v !== o || L !== x || nt.current || an
          ? (typeof N == "function" && (wl(t, r, N, o), (x = t.memoizedState)),
            (v = an || gf(t, r, v, o, L, x, M))
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
        Kc(e, t),
        (v = t.memoizedProps),
        (M = t.type === t.elementType ? v : Et(t.type, v)),
        (h.props = M),
        (_ = t.pendingProps),
        (L = h.context),
        (x = r.contextType),
        typeof x == "object" && x !== null
          ? (x = yt(x))
          : ((x = rt(r) ? Pn : Xe.current), (x = bn(t, x))));
      var W = r.getDerivedStateFromProps;
      ((N = typeof W == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== _ || L !== x) && wf(t, h, o, x)),
        (an = !1),
        (L = t.memoizedState),
        (h.state = L),
        rs(t, o, h, a));
      var $ = t.memoizedState;
      v !== _ || L !== $ || nt.current || an
        ? (typeof W == "function" && (wl(t, r, W, o), ($ = t.memoizedState)),
          (M = an || gf(t, r, M, o, L, $, x) || !1)
            ? (N ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, $, x),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, $, x)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (v === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = $)),
          (h.props = o),
          (h.state = $),
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
    return Pl(e, t, r, o, u, a);
  }
  function Pl(e, t, r, o, a, u) {
    Df(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return (a && _c(t, r, !1), Xt(e, t, u));
    ((o = t.stateNode), (Ky.current = t));
    var v = h && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = rr(t, e.child, null, u)), (t.child = rr(t, null, v, u)))
        : Je(e, t, v, u),
      (t.memoizedState = o.state),
      a && _c(t, r, !0),
      t.child
    );
  }
  function Vf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Lc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Lc(e, t.context, !1),
      ll(e, t.containerInfo));
  }
  function Lf(e, t, r, o, a) {
    return (nr(), el(a), (t.flags |= 256), Je(e, t, r, o), t.child);
  }
  var El = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Nf(e, t, r) {
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
        bo(t),
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
                (e = _n(e, o, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Cl(r)),
                (t.memoizedState = El),
                e)
              : Ml(t, h))
      );
    if (((a = e.memoizedState), a !== null && ((v = a.dehydrated), v !== null)))
      return Gy(e, t, h, o, v, a, r);
    if (u) {
      ((u = o.fallback), (h = t.mode), (a = e.child), (v = a.sibling));
      var x = { mode: "hidden", children: o.children };
      return (
        (h & 1) === 0 && t.child !== a
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = x), (t.deletions = null))
          : ((o = mn(a, x)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
        v !== null ? (u = mn(v, u)) : ((u = _n(u, h, r, null)), (u.flags |= 2)),
        (u.return = t),
        (o.return = t),
        (o.sibling = u),
        (t.child = o),
        (o = u),
        (u = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? Cl(r)
            : { baseLanes: h.baseLanes | r, cachePool: null, transitions: h.transitions }),
        (u.memoizedState = h),
        (u.childLanes = e.childLanes & ~r),
        (t.memoizedState = El),
        o
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (o = mn(u, { mode: "visible", children: o.children })),
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
  function Ml(e, t) {
    return (
      (t = Ps({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fs(e, t, r, o) {
    return (
      o !== null && el(o),
      rr(t, e.child, null, r),
      (e = Ml(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Gy(e, t, r, o, a, u, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = Sl(Error(s(422)))), fs(e, t, h, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = o.fallback),
            (a = t.mode),
            (o = Ps({ mode: "visible", children: o.children }, a, 0, null)),
            (u = _n(u, a, h, null)),
            (u.flags |= 2),
            (o.return = t),
            (u.return = t),
            (o.sibling = u),
            (t.child = o),
            (t.mode & 1) !== 0 && rr(t, e.child, null, h),
            (t.child.memoizedState = Cl(h)),
            (t.memoizedState = El),
            u);
    if ((t.mode & 1) === 0) return fs(e, t, h, null);
    if (a.data === "$!") {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var v = o.dgst;
      return ((o = v), (u = Error(s(419))), (o = Sl(u, o, void 0)), fs(e, t, h, o));
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
          a !== 0 && a !== u.retryLane && ((u.retryLane = a), Gt(e, a), At(o, e, a, -1)));
      }
      return (Hl(), (o = Sl(Error(s(421)))), fs(e, t, h, o));
    }
    return a.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = sg.bind(null, e)), (a._reactRetry = t), null)
      : ((e = u.treeContext),
        (ft = rn(a.nextSibling)),
        (ct = t),
        (Ee = !0),
        (Pt = null),
        e !== null &&
          ((pt[mt++] = $t),
          (pt[mt++] = Kt),
          (pt[mt++] = En),
          ($t = e.id),
          (Kt = e.overflow),
          (En = t)),
        (t = Ml(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function _f(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), il(e.return, t, r));
  }
  function Al(e, t, r, o, a) {
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
  function If(e, t, r) {
    var o = t.pendingProps,
      a = o.revealOrder,
      u = o.tail;
    if ((Je(e, t, o.children, r), (o = Me.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && _f(e, r, t);
          else if (e.tag === 19) _f(e, r, t);
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
            Al(t, !1, a, r, u));
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null;) {
            if (((e = a.alternate), e !== null && is(e) === null)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = r), (r = a), (a = e));
          }
          Al(t, !0, r, null, u);
          break;
        case "together":
          Al(t, !1, null, null, void 0);
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
  function Xt(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Rn |= t.lanes), (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, r = mn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;)
        ((e = e.sibling), (r = r.sibling = mn(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function Qy(e, t, r) {
    switch (t.tag) {
      case 3:
        (Vf(t), nr());
        break;
      case 5:
        Xc(t);
        break;
      case 1:
        rt(t.type) && Xi(t);
        break;
      case 4:
        ll(t, t.stateNode.containerInfo);
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
              ? Nf(e, t, r)
              : (we(Me, Me.current & 1), (e = Xt(e, t, r)), e !== null ? e.sibling : null);
        we(Me, Me.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return If(e, t, r);
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
        return ((t.lanes = 0), Af(e, t, r));
    }
    return Xt(e, t, r);
  }
  var jf, Dl, Ff, Of;
  ((jf = function (e, t) {
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
    (Dl = function () {}),
    (Ff = function (e, t, r, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        ((e = t.stateNode), An(It.current));
        var u = null;
        switch (r) {
          case "input":
            ((a = ro(e, a)), (o = ro(e, o)), (u = []));
            break;
          case "select":
            ((a = U({}, a, { value: void 0 })), (o = U({}, o, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((a = oo(e, a)), (o = oo(e, o)), (u = []));
            break;
          default:
            typeof a.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Ki);
        }
        ao(r, o);
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
    (Of = function (e, t, r, o) {
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
  function Xy(e, t, r) {
    var o = t.pendingProps;
    switch ((qo(t), t.tag)) {
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
        return (rt(t.type) && Qi(), Ze(t), null);
      case 3:
        return (
          (o = t.stateNode),
          or(),
          Te(nt),
          Te(Xe),
          cl(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ji(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pt !== null && (Bl(Pt), (Pt = null)))),
          Dl(e, t),
          Ze(t),
          null
        );
      case 5:
        al(t);
        var a = An(Yr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (Ff(e, t, r, o, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ze(t), null);
          }
          if (((e = An(It.current)), Ji(t))) {
            ((o = t.stateNode), (r = t.type));
            var u = t.memoizedProps;
            switch (((o[_t] = t), (o[$r] = u), (e = (t.mode & 1) !== 0), r)) {
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
                (gu(o, u), ke("invalid", o));
                break;
              case "select":
                ((o._wrapperState = { wasMultiple: !!u.multiple }), ke("invalid", o));
                break;
              case "textarea":
                (xu(o, u), ke("invalid", o));
            }
            (ao(r, u), (a = null));
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
                (Si(o), wu(o, u, !0));
                break;
              case "textarea":
                (Si(o), ku(o));
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
              e === "http://www.w3.org/1999/xhtml" && (e = Tu(r)),
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
              (e[_t] = t),
              (e[$r] = o),
              jf(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = uo(r, o)), r)) {
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
                  (gu(e, o), (a = ro(e, o)), ke("invalid", e));
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
                  (xu(e, o), (a = oo(e, o)), ke("invalid", e));
                  break;
                default:
                  a = o;
              }
              (ao(r, a), (v = a));
              for (u in v)
                if (v.hasOwnProperty(u)) {
                  var x = v[u];
                  u === "style"
                    ? Cu(e, x)
                    : u === "dangerouslySetInnerHTML"
                      ? ((x = x ? x.__html : void 0), x != null && Pu(e, x))
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
                  (Si(e), wu(e, o, !1));
                  break;
                case "textarea":
                  (Si(e), ku(e));
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
        if (e && t.stateNode != null) Of(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((r = An(Yr.current)), An(It.current), Ji(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[_t] = t),
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
              (o[_t] = t),
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
            (Bc(), nr(), (t.flags |= 98560), (u = !1));
          else if (((u = Ji(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(s(317));
              u[_t] = t;
            } else (nr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ze(t), (u = !1));
          } else (Pt !== null && (Bl(Pt), (Pt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Me.current & 1) !== 0 ? ze === 0 && (ze = 3) : Hl())),
            t.updateQueue !== null && (t.flags |= 4),
            Ze(t),
            null);
      case 4:
        return (or(), Dl(e, t), e === null && Wr(t.stateNode.containerInfo), Ze(t), null);
      case 10:
        return (rl(t.type._context), Ze(t), null);
      case 17:
        return (rt(t.type) && Qi(), Ze(t), null);
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
          Wl(),
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
  function Yy(e, t) {
    switch ((qo(t), t.tag)) {
      case 1:
        return (
          rt(t.type) && Qi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          or(),
          Te(nt),
          Te(Xe),
          cl(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (al(t), null);
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
        return (rl(t.type._context), null);
      case 22:
      case 23:
        return (Wl(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hs = !1,
    qe = !1,
    Zy = typeof WeakSet == "function" ? WeakSet : Set,
    H = null;
  function ar(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (o) {
          Re(e, t, o);
        }
      else r.current = null;
  }
  function Rl(e, t, r) {
    try {
      r();
    } catch (o) {
      Re(e, t, o);
    }
  }
  var zf = !1;
  function qy(e, t) {
    if (((Wo = Ni), (e = yc()), _o(e))) {
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
                var W;
                _ !== r || (a !== 0 && _.nodeType !== 3) || (v = h + a),
                  _ !== u || (o !== 0 && _.nodeType !== 3) || (x = h + o),
                  _.nodeType === 3 && (h += _.nodeValue.length),
                  (W = _.firstChild) !== null;
              )
                ((L = _), (_ = W));
              for (;;) {
                if (_ === e) break t;
                if (
                  (L === r && ++M === a && (v = h),
                  L === u && ++N === o && (x = h),
                  (W = _.nextSibling) !== null)
                )
                  break;
                ((_ = L), (L = _.parentNode));
              }
              _ = W;
            }
            r = v === -1 || x === -1 ? null : { start: v, end: x };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Ho = { focusedElem: e, selectionRange: r }, Ni = !1, H = t; H !== null;)
      if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (H = e));
      else
        for (; H !== null;) {
          t = H;
          try {
            var $ = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if ($ !== null) {
                    var Q = $.memoizedProps,
                      _e = $.memoizedState,
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
            Re(t, t.return, F);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (H = e));
            break;
          }
          H = t.return;
        }
    return (($ = zf), (zf = !1), $);
  }
  function ti(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var a = (o = o.next);
      do {
        if ((a.tag & e) === e) {
          var u = a.destroy;
          ((a.destroy = void 0), u !== void 0 && Rl(t, r, u));
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
  function Vl(e) {
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
  function Bf(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Bf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[_t], delete t[$r], delete t[Qo], delete t[Ny], delete t[_y])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Uf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Wf(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Uf(e.return)) return null;
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
  function Ll(e, t, r) {
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
      for (Ll(e, t, r), e = e.sibling; e !== null;) (Ll(e, t, r), (e = e.sibling));
  }
  function Nl(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Nl(e, t, r), e = e.sibling; e !== null;) (Nl(e, t, r), (e = e.sibling));
  }
  var $e = null,
    Ct = !1;
  function cn(e, t, r) {
    for (r = r.child; r !== null;) (Hf(e, t, r), (r = r.sibling));
  }
  function Hf(e, t, r) {
    if (Nt && typeof Nt.onCommitFiberUnmount == "function")
      try {
        Nt.onCommitFiberUnmount(Mi, r);
      } catch {}
    switch (r.tag) {
      case 5:
        qe || ar(r, t);
      case 6:
        var o = $e,
          a = Ct;
        (($e = null),
          cn(e, t, r),
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
              e.nodeType === 8 ? Go(e.parentNode, r) : e.nodeType === 1 && Go(e, r),
              Nr(e))
            : Go($e, r.stateNode));
        break;
      case 4:
        ((o = $e),
          (a = Ct),
          ($e = r.stateNode.containerInfo),
          (Ct = !0),
          cn(e, t, r),
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
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Rl(r, t, h),
              (a = a.next));
          } while (a !== o);
        }
        cn(e, t, r);
        break;
      case 1:
        if (!qe && (ar(r, t), (o = r.stateNode), typeof o.componentWillUnmount == "function"))
          try {
            ((o.props = r.memoizedProps), (o.state = r.memoizedState), o.componentWillUnmount());
          } catch (v) {
            Re(r, t, v);
          }
        cn(e, t, r);
        break;
      case 21:
        cn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((qe = (o = qe) || r.memoizedState !== null), cn(e, t, r), (qe = o))
          : cn(e, t, r);
        break;
      default:
        cn(e, t, r);
    }
  }
  function $f(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Zy()),
        t.forEach(function (o) {
          var a = og.bind(null, e, o);
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
          (Hf(u, h, a), ($e = null), (Ct = !1));
          var x = a.alternate;
          (x !== null && (x.return = null), (a.return = null));
        } catch (M) {
          Re(a, t, M);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (Kf(t, e), (t = t.sibling));
  }
  function Kf(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Mt(t, e), Ft(e), o & 4)) {
          try {
            (ti(3, e, e.return), ps(3, e));
          } catch (Q) {
            Re(e, e.return, Q);
          }
          try {
            ti(5, e, e.return);
          } catch (Q) {
            Re(e, e.return, Q);
          }
        }
        break;
      case 1:
        (Mt(t, e), Ft(e), o & 512 && r !== null && ar(r, r.return));
        break;
      case 5:
        if ((Mt(t, e), Ft(e), o & 512 && r !== null && ar(r, r.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            kr(a, "");
          } catch (Q) {
            Re(e, e.return, Q);
          }
        }
        if (o & 4 && ((a = e.stateNode), a != null)) {
          var u = e.memoizedProps,
            h = r !== null ? r.memoizedProps : u,
            v = e.type,
            x = e.updateQueue;
          if (((e.updateQueue = null), x !== null))
            try {
              (v === "input" && u.type === "radio" && u.name != null && vu(a, u), uo(v, h));
              var M = uo(v, u);
              for (h = 0; h < x.length; h += 2) {
                var N = x[h],
                  _ = x[h + 1];
                N === "style"
                  ? Cu(a, _)
                  : N === "dangerouslySetInnerHTML"
                    ? Pu(a, _)
                    : N === "children"
                      ? kr(a, _)
                      : O(a, N, _, M);
              }
              switch (v) {
                case "input":
                  io(a, u);
                  break;
                case "textarea":
                  Su(a, u);
                  break;
                case "select":
                  var L = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!u.multiple;
                  var W = u.value;
                  W != null
                    ? Un(a, !!u.multiple, W, !1)
                    : L !== !!u.multiple &&
                      (u.defaultValue != null
                        ? Un(a, !!u.multiple, u.defaultValue, !0)
                        : Un(a, !!u.multiple, u.multiple ? [] : "", !1));
              }
              a[$r] = u;
            } catch (Q) {
              Re(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((Mt(t, e), Ft(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((a = e.stateNode), (u = e.memoizedProps));
          try {
            a.nodeValue = u;
          } catch (Q) {
            Re(e, e.return, Q);
          }
        }
        break;
      case 3:
        if ((Mt(t, e), Ft(e), o & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            Nr(t.containerInfo);
          } catch (Q) {
            Re(e, e.return, Q);
          }
        break;
      case 4:
        (Mt(t, e), Ft(e));
        break;
      case 13:
        (Mt(t, e),
          Ft(e),
          (a = e.child),
          a.flags & 8192 &&
            ((u = a.memoizedState !== null),
            (a.stateNode.isHidden = u),
            !u || (a.alternate !== null && a.alternate.memoizedState !== null) || (jl = Ne())),
          o & 4 && $f(e));
        break;
      case 22:
        if (
          ((N = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((qe = (M = qe) || N), Mt(t, e), (qe = M)) : Mt(t, e),
          Ft(e),
          o & 8192)
        ) {
          if (
            ((M = e.memoizedState !== null), (e.stateNode.isHidden = M) && !N && (e.mode & 1) !== 0)
          )
            for (H = e, N = e.child; N !== null;) {
              for (_ = H = N; H !== null;) {
                switch (((L = H), (W = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ti(4, L, L.return);
                    break;
                  case 1:
                    ar(L, L.return);
                    var $ = L.stateNode;
                    if (typeof $.componentWillUnmount == "function") {
                      ((o = L), (r = L.return));
                      try {
                        ((t = o),
                          ($.props = t.memoizedProps),
                          ($.state = t.memoizedState),
                          $.componentWillUnmount());
                      } catch (Q) {
                        Re(o, r, Q);
                      }
                    }
                    break;
                  case 5:
                    ar(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      Xf(_);
                      continue;
                    }
                }
                W !== null ? ((W.return = L), (H = W)) : Xf(_);
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
                        (v.style.display = Eu("display", h))));
                } catch (Q) {
                  Re(e, e.return, Q);
                }
              }
            } else if (_.tag === 6) {
              if (N === null)
                try {
                  _.stateNode.nodeValue = M ? "" : _.memoizedProps;
                } catch (Q) {
                  Re(e, e.return, Q);
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
        (Mt(t, e), Ft(e), o & 4 && $f(e));
        break;
      case 21:
        break;
      default:
        (Mt(t, e), Ft(e));
    }
  }
  function Ft(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null;) {
            if (Uf(r)) {
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
            var u = Wf(e);
            Nl(e, u, a);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              v = Wf(e);
            Ll(e, v, h);
            break;
          default:
            throw Error(s(161));
        }
      } catch (x) {
        Re(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Jy(e, t, r) {
    ((H = e), Gf(e));
  }
  function Gf(e, t, r) {
    for (var o = (e.mode & 1) !== 0; H !== null;) {
      var a = H,
        u = a.child;
      if (a.tag === 22 && o) {
        var h = a.memoizedState !== null || hs;
        if (!h) {
          var v = a.alternate,
            x = (v !== null && v.memoizedState !== null) || qe;
          v = hs;
          var M = qe;
          if (((hs = h), (qe = x) && !M))
            for (H = a; H !== null;)
              ((h = H),
                (x = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Yf(a)
                  : x !== null
                    ? ((x.return = h), (H = x))
                    : Yf(a));
          for (; u !== null;) ((H = u), Gf(u), (u = u.sibling));
          ((H = a), (hs = v), (qe = M));
        }
        Qf(e);
      } else (a.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = a), (H = u)) : Qf(e);
    }
  }
  function Qf(e) {
    for (; H !== null;) {
      var t = H;
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
                u !== null && Qc(t, u, o);
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
                  Qc(t, h, r);
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
          qe || (t.flags & 512 && Vl(t));
        } catch (L) {
          Re(t, t.return, L);
        }
      }
      if (t === e) {
        H = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        ((r.return = t.return), (H = r));
        break;
      }
      H = t.return;
    }
  }
  function Xf(e) {
    for (; H !== null;) {
      var t = H;
      if (t === e) {
        H = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        ((r.return = t.return), (H = r));
        break;
      }
      H = t.return;
    }
  }
  function Yf(e) {
    for (; H !== null;) {
      var t = H;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              ps(4, t);
            } catch (x) {
              Re(t, r, x);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var a = t.return;
              try {
                o.componentDidMount();
              } catch (x) {
                Re(t, a, x);
              }
            }
            var u = t.return;
            try {
              Vl(t);
            } catch (x) {
              Re(t, u, x);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Vl(t);
            } catch (x) {
              Re(t, h, x);
            }
        }
      } catch (x) {
        Re(t, t.return, x);
      }
      if (t === e) {
        H = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        ((v.return = t.return), (H = v));
        break;
      }
      H = t.return;
    }
  }
  var by = Math.ceil,
    ms = B.ReactCurrentDispatcher,
    _l = B.ReactCurrentOwner,
    vt = B.ReactCurrentBatchConfig,
    ae = 0,
    We = null,
    je = null,
    Ke = 0,
    dt = 0,
    ur = sn(0),
    ze = 0,
    ni = null,
    Rn = 0,
    ys = 0,
    Il = 0,
    ri = null,
    st = null,
    jl = 0,
    cr = 1 / 0,
    Yt = null,
    gs = !1,
    Fl = null,
    fn = null,
    vs = !1,
    dn = null,
    ws = 0,
    ii = 0,
    Ol = null,
    xs = -1,
    Ss = 0;
  function be() {
    return (ae & 6) !== 0 ? Ne() : xs !== -1 ? xs : (xs = Ne());
  }
  function hn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && Ke !== 0
        ? Ke & -Ke
        : jy.transition !== null
          ? (Ss === 0 && (Ss = Uu()), Ss)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Zu(e.type))), e);
  }
  function At(e, t, r, o) {
    if (50 < ii) throw ((ii = 0), (Ol = null), Error(s(185)));
    (Ar(e, r, o),
      ((ae & 2) === 0 || e !== We) &&
        (e === We && ((ae & 2) === 0 && (ys |= r), ze === 4 && pn(e, Ke)),
        ot(e, o),
        r === 1 && ae === 0 && (t.mode & 1) === 0 && ((cr = Ne() + 500), Yi && ln())));
  }
  function ot(e, t) {
    var r = e.callbackNode;
    jm(e, t);
    var o = Ri(e, e === We ? Ke : 0);
    if (o === 0) (r !== null && Ou(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && Ou(r), t === 1))
        (e.tag === 0 ? Iy(qf.bind(null, e)) : Ic(qf.bind(null, e)),
          Vy(function () {
            (ae & 6) === 0 && ln();
          }),
          (r = null));
      else {
        switch (Wu(o)) {
          case 1:
            r = go;
            break;
          case 4:
            r = zu;
            break;
          case 16:
            r = Ci;
            break;
          case 536870912:
            r = Bu;
            break;
          default:
            r = Ci;
        }
        r = sd(r, Zf.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function Zf(e, t) {
    if (((xs = -1), (Ss = 0), (ae & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (fr() && e.callbackNode !== r) return null;
    var o = Ri(e, e === We ? Ke : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = ks(e, o);
    else {
      t = o;
      var a = ae;
      ae |= 2;
      var u = bf();
      (We !== e || Ke !== t) && ((Yt = null), (cr = Ne() + 500), Ln(e, t));
      do
        try {
          ng();
          break;
        } catch (v) {
          Jf(e, v);
        }
      while (!0);
      (nl(), (ms.current = u), (ae = a), je !== null ? (t = 0) : ((We = null), (Ke = 0), (t = ze)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = vo(e)), a !== 0 && ((o = a), (t = zl(e, a)))), t === 1))
        throw ((r = ni), Ln(e, 0), pn(e, o), ot(e, Ne()), r);
      if (t === 6) pn(e, o);
      else {
        if (
          ((a = e.current.alternate),
          (o & 30) === 0 &&
            !eg(a) &&
            ((t = ks(e, o)),
            t === 2 && ((u = vo(e)), u !== 0 && ((o = u), (t = zl(e, u)))),
            t === 1))
        )
          throw ((r = ni), Ln(e, 0), pn(e, o), ot(e, Ne()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Nn(e, st, Yt);
            break;
          case 3:
            if ((pn(e, o), (o & 130023424) === o && ((t = jl + 500 - Ne()), 10 < t))) {
              if (Ri(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                (be(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = Ko(Nn.bind(null, e, st, Yt), t);
              break;
            }
            Nn(e, st, Yt);
            break;
          case 4:
            if ((pn(e, o), (o & 4194240) === o)) break;
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
                            : 1960 * by(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Ko(Nn.bind(null, e, st, Yt), o);
              break;
            }
            Nn(e, st, Yt);
            break;
          case 5:
            Nn(e, st, Yt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (ot(e, Ne()), e.callbackNode === r ? Zf.bind(null, e) : null);
  }
  function zl(e, t) {
    var r = ri;
    return (
      e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
      (e = ks(e, t)),
      e !== 2 && ((t = st), (st = r), t !== null && Bl(t)),
      e
    );
  }
  function Bl(e) {
    st === null ? (st = e) : st.push.apply(st, e);
  }
  function eg(e) {
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
  function pn(e, t) {
    for (
      t &= ~Il, t &= ~ys, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - kt(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function qf(e) {
    if ((ae & 6) !== 0) throw Error(s(327));
    fr();
    var t = Ri(e, 0);
    if ((t & 1) === 0) return (ot(e, Ne()), null);
    var r = ks(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = vo(e);
      o !== 0 && ((t = o), (r = zl(e, o)));
    }
    if (r === 1) throw ((r = ni), Ln(e, 0), pn(e, t), ot(e, Ne()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Nn(e, st, Yt),
      ot(e, Ne()),
      null
    );
  }
  function Ul(e, t) {
    var r = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      ((ae = r), ae === 0 && ((cr = Ne() + 500), Yi && ln()));
    }
  }
  function Vn(e) {
    dn !== null && dn.tag === 0 && (ae & 6) === 0 && fr();
    var t = ae;
    ae |= 1;
    var r = vt.transition,
      o = he;
    try {
      if (((vt.transition = null), (he = 1), e)) return e();
    } finally {
      ((he = o), (vt.transition = r), (ae = t), (ae & 6) === 0 && ln());
    }
  }
  function Wl() {
    ((dt = ur.current), Te(ur));
  }
  function Ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Ry(r)), je !== null))
      for (r = je.return; r !== null;) {
        var o = r;
        switch ((qo(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Qi());
            break;
          case 3:
            (or(), Te(nt), Te(Xe), cl());
            break;
          case 5:
            al(o);
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
            rl(o.type._context);
            break;
          case 22:
          case 23:
            Wl();
        }
        r = r.return;
      }
    if (
      ((We = e),
      (je = e = mn(e.current, null)),
      (Ke = dt = t),
      (ze = 0),
      (ni = null),
      (Il = ys = Rn = 0),
      (st = ri = null),
      Mn !== null)
    ) {
      for (t = 0; t < Mn.length; t++)
        if (((r = Mn[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var a = o.next,
            u = r.pending;
          if (u !== null) {
            var h = u.next;
            ((u.next = a), (o.next = h));
          }
          r.pending = o;
        }
      Mn = null;
    }
    return e;
  }
  function Jf(e, t) {
    do {
      var r = je;
      try {
        if ((nl(), (ss.current = us), os)) {
          for (var o = Ae.memoizedState; o !== null;) {
            var a = o.queue;
            (a !== null && (a.pending = null), (o = o.next));
          }
          os = !1;
        }
        if (
          ((Dn = 0),
          (Ue = Oe = Ae = null),
          (Zr = !1),
          (qr = 0),
          (_l.current = null),
          r === null || r.return === null)
        ) {
          ((ze = 1), (ni = t), (je = null));
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
            var W = Tf(h);
            if (W !== null) {
              ((W.flags &= -257), Pf(W, h, v, u, t), W.mode & 1 && kf(u, M, t), (t = W), (x = M));
              var $ = t.updateQueue;
              if ($ === null) {
                var Q = new Set();
                (Q.add(x), (t.updateQueue = Q));
              } else $.add(x);
              break e;
            } else {
              if ((t & 1) === 0) {
                (kf(u, M, t), Hl());
                break e;
              }
              x = Error(s(426));
            }
          } else if (Ee && v.mode & 1) {
            var _e = Tf(h);
            if (_e !== null) {
              ((_e.flags & 65536) === 0 && (_e.flags |= 256), Pf(_e, h, v, u, t), el(lr(x, v)));
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
                var P = xf(u, x, t);
                Gc(u, P);
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
                      (fn === null || !fn.has(E))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var F = Sf(u, v, t);
                  Gc(u, F);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        td(r);
      } catch (X) {
        ((t = X), je === r && r !== null && (je = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function bf() {
    var e = ms.current;
    return ((ms.current = us), e === null ? us : e);
  }
  function Hl() {
    ((ze === 0 || ze === 3 || ze === 2) && (ze = 4),
      We === null || ((Rn & 268435455) === 0 && (ys & 268435455) === 0) || pn(We, Ke));
  }
  function ks(e, t) {
    var r = ae;
    ae |= 2;
    var o = bf();
    (We !== e || Ke !== t) && ((Yt = null), Ln(e, t));
    do
      try {
        tg();
        break;
      } catch (a) {
        Jf(e, a);
      }
    while (!0);
    if ((nl(), (ae = r), (ms.current = o), je !== null)) throw Error(s(261));
    return ((We = null), (Ke = 0), ze);
  }
  function tg() {
    for (; je !== null;) ed(je);
  }
  function ng() {
    for (; je !== null && !Mm();) ed(je);
  }
  function ed(e) {
    var t = id(e.alternate, e, dt);
    ((e.memoizedProps = e.pendingProps), t === null ? td(e) : (je = t), (_l.current = null));
  }
  function td(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Xy(r, t, dt)), r !== null)) {
          je = r;
          return;
        }
      } else {
        if (((r = Yy(r, t)), r !== null)) {
          ((r.flags &= 32767), (je = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ze = 6), (je = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        je = t;
        return;
      }
      je = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function Nn(e, t, r) {
    var o = he,
      a = vt.transition;
    try {
      ((vt.transition = null), (he = 1), rg(e, t, r, o));
    } finally {
      ((vt.transition = a), (he = o));
    }
    return null;
  }
  function rg(e, t, r, o) {
    do fr();
    while (dn !== null);
    if ((ae & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = r.lanes | r.childLanes;
    if (
      (Fm(e, u),
      e === We && ((je = We = null), (Ke = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        vs ||
        ((vs = !0),
        sd(Ci, function () {
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
        (_l.current = null),
        qy(e, r),
        Kf(r, e),
        Ty(Ho),
        (Ni = !!Wo),
        (Ho = Wo = null),
        (e.current = r),
        Jy(r),
        Am(),
        (ae = v),
        (he = h),
        (vt.transition = u));
    } else e.current = r;
    if (
      (vs && ((vs = !1), (dn = e), (ws = a)),
      (u = e.pendingLanes),
      u === 0 && (fn = null),
      Vm(r.stateNode),
      ot(e, Ne()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((a = t[r]), o(a.value, { componentStack: a.stack, digest: a.digest }));
    if (gs) throw ((gs = !1), (e = Fl), (Fl = null), e);
    return (
      (ws & 1) !== 0 && e.tag !== 0 && fr(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === Ol ? ii++ : ((ii = 0), (Ol = e))) : (ii = 0),
      ln(),
      null
    );
  }
  function fr() {
    if (dn !== null) {
      var e = Wu(ws),
        t = vt.transition,
        r = he;
      try {
        if (((vt.transition = null), (he = 16 > e ? 16 : e), dn === null)) var o = !1;
        else {
          if (((e = dn), (dn = null), (ws = 0), (ae & 6) !== 0)) throw Error(s(331));
          var a = ae;
          for (ae |= 4, H = e.current; H !== null;) {
            var u = H,
              h = u.child;
            if ((H.flags & 16) !== 0) {
              var v = u.deletions;
              if (v !== null) {
                for (var x = 0; x < v.length; x++) {
                  var M = v[x];
                  for (H = M; H !== null;) {
                    var N = H;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ti(8, N, u);
                    }
                    var _ = N.child;
                    if (_ !== null) ((_.return = N), (H = _));
                    else
                      for (; H !== null;) {
                        N = H;
                        var L = N.sibling,
                          W = N.return;
                        if ((Bf(N), N === M)) {
                          H = null;
                          break;
                        }
                        if (L !== null) {
                          ((L.return = W), (H = L));
                          break;
                        }
                        H = W;
                      }
                  }
                }
                var $ = u.alternate;
                if ($ !== null) {
                  var Q = $.child;
                  if (Q !== null) {
                    $.child = null;
                    do {
                      var _e = Q.sibling;
                      ((Q.sibling = null), (Q = _e));
                    } while (Q !== null);
                  }
                }
                H = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null) ((h.return = u), (H = h));
            else
              e: for (; H !== null;) {
                if (((u = H), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ti(9, u, u.return);
                  }
                var P = u.sibling;
                if (P !== null) {
                  ((P.return = u.return), (H = P));
                  break e;
                }
                H = u.return;
              }
          }
          var k = e.current;
          for (H = k; H !== null;) {
            h = H;
            var E = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && E !== null) ((E.return = h), (H = E));
            else
              e: for (h = k; H !== null;) {
                if (((v = H), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ps(9, v);
                    }
                  } catch (X) {
                    Re(v, v.return, X);
                  }
                if (v === h) {
                  H = null;
                  break e;
                }
                var F = v.sibling;
                if (F !== null) {
                  ((F.return = v.return), (H = F));
                  break e;
                }
                H = v.return;
              }
          }
          if (((ae = a), ln(), Nt && typeof Nt.onPostCommitFiberRoot == "function"))
            try {
              Nt.onPostCommitFiberRoot(Mi, e);
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
  function nd(e, t, r) {
    ((t = lr(r, t)),
      (t = xf(e, t, 1)),
      (e = un(e, t, 1)),
      (t = be()),
      e !== null && (Ar(e, 1, t), ot(e, t)));
  }
  function Re(e, t, r) {
    if (e.tag === 3) nd(e, e, r);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          nd(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" && (fn === null || !fn.has(o)))
          ) {
            ((e = lr(r, e)),
              (e = Sf(t, e, 1)),
              (t = un(t, e, 1)),
              (e = be()),
              t !== null && (Ar(t, 1, e), ot(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ig(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = be()),
      (e.pingedLanes |= e.suspendedLanes & r),
      We === e &&
        (Ke & r) === r &&
        (ze === 4 || (ze === 3 && (Ke & 130023424) === Ke && 500 > Ne() - jl)
          ? Ln(e, 0)
          : (Il |= r)),
      ot(e, t));
  }
  function rd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Di), (Di <<= 1), (Di & 130023424) === 0 && (Di = 4194304)));
    var r = be();
    ((e = Gt(e, t)), e !== null && (Ar(e, t, r), ot(e, r)));
  }
  function sg(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), rd(e, r));
  }
  function og(e, t) {
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
    (o !== null && o.delete(t), rd(e, r));
  }
  var id;
  id = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || nt.current) it = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((it = !1), Qy(e, t, r));
        it = (e.flags & 131072) !== 0;
      }
    else ((it = !1), Ee && (t.flags & 1048576) !== 0 && jc(t, qi, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (ds(e, t), (e = t.pendingProps));
        var a = bn(t, Xe.current);
        (sr(t, r), (a = hl(null, t, o, e, a, r)));
        var u = pl();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              rt(o) ? ((u = !0), Xi(t)) : (u = !1),
              (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              ol(t),
              (a.updater = cs),
              (t.stateNode = a),
              (a._reactInternals = t),
              xl(t, o, e, r),
              (t = Pl(null, t, o, !0, u, r)))
            : ((t.tag = 0), Ee && u && Zo(t), Je(null, t, a, r), (t = t.child)),
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
            (a = t.tag = ag(o)),
            (e = Et(o, e)),
            a)
          ) {
            case 0:
              t = Tl(null, t, o, e, r);
              break e;
            case 1:
              t = Rf(null, t, o, e, r);
              break e;
            case 11:
              t = Ef(null, t, o, e, r);
              break e;
            case 14:
              t = Cf(null, t, o, Et(o.type, e), r);
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
          Tl(e, t, o, a, r)
        );
      case 1:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Et(o, a)),
          Rf(e, t, o, a, r)
        );
      case 3:
        e: {
          if ((Vf(t), e === null)) throw Error(s(387));
          ((o = t.pendingProps),
            (u = t.memoizedState),
            (a = u.element),
            Kc(e, t),
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
              ((a = lr(Error(s(423)), t)), (t = Lf(e, t, o, r, a)));
              break e;
            } else if (o !== a) {
              ((a = lr(Error(s(424)), t)), (t = Lf(e, t, o, r, a)));
              break e;
            } else
              for (
                ft = rn(t.stateNode.containerInfo.firstChild),
                  ct = t,
                  Ee = !0,
                  Pt = null,
                  r = Hc(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((nr(), o === a)) {
              t = Xt(e, t, r);
              break e;
            }
            Je(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Xc(t),
          e === null && bo(t),
          (o = t.type),
          (a = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = a.children),
          $o(o, a) ? (h = null) : u !== null && $o(o, u) && (t.flags |= 32),
          Df(e, t),
          Je(e, t, h, r),
          t.child
        );
      case 6:
        return (e === null && bo(t), null);
      case 13:
        return Nf(e, t, r);
      case 4:
        return (
          ll(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = rr(t, null, o, r)) : Je(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Et(o, a)),
          Ef(e, t, o, a, r)
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
                t = Xt(e, t, r);
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
                        ((x = Qt(-1, r & -r)), (x.tag = 2));
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
                        il(u.return, r, t),
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
                    il(h, r, t),
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
          (a = yt(a)),
          (o = o(a)),
          (t.flags |= 1),
          Je(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (a = Et(o, t.pendingProps)), (a = Et(o.type, a)), Cf(e, t, o, a, r));
      case 15:
        return Mf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Et(o, a)),
          ds(e, t),
          (t.tag = 1),
          rt(o) ? ((e = !0), Xi(t)) : (e = !1),
          sr(t, r),
          vf(t, o, a),
          xl(t, o, a, r),
          Pl(null, t, o, !0, e, r)
        );
      case 19:
        return If(e, t, r);
      case 22:
        return Af(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function sd(e, t) {
    return Fu(e, t);
  }
  function lg(e, t, r, o) {
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
    return new lg(e, t, r, o);
  }
  function $l(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ag(e) {
    if (typeof e == "function") return $l(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === xe)) return 11;
      if (e === Ie) return 14;
    }
    return 2;
  }
  function mn(e, t) {
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
    if (((o = e), typeof e == "function")) $l(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case re:
          return _n(r.children, a, u, t);
        case Y:
          ((h = 8), (a |= 8));
          break;
        case ge:
          return ((e = wt(12, r, t, a | 2)), (e.elementType = ge), (e.lanes = u), e);
        case Le:
          return ((e = wt(13, r, t, a)), (e.elementType = Le), (e.lanes = u), e);
        case De:
          return ((e = wt(19, r, t, a)), (e.elementType = De), (e.lanes = u), e);
        case Ce:
          return Ps(r, a, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case q:
                h = 10;
                break e;
              case pe:
                h = 9;
                break e;
              case xe:
                h = 11;
                break e;
              case Ie:
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
  function _n(e, t, r, o) {
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
  function Kl(e, t, r) {
    return ((e = wt(6, e, null, t)), (e.lanes = r), e);
  }
  function Gl(e, t, r) {
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
  function ug(e, t, r, o, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = wo(0)),
      (this.expirationTimes = wo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = wo(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Ql(e, t, r, o, a, u, h, v, x) {
    return (
      (e = new ug(e, t, r, v, x)),
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
      ol(u),
      e
    );
  }
  function cg(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ie,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function od(e) {
    if (!e) return on;
    e = e._reactInternals;
    e: {
      if (kn(e) !== e || e.tag !== 1) throw Error(s(170));
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
      if (rt(r)) return Nc(e, r, t);
    }
    return t;
  }
  function ld(e, t, r, o, a, u, h, v, x) {
    return (
      (e = Ql(r, o, !0, e, a, u, h, v, x)),
      (e.context = od(null)),
      (r = e.current),
      (o = be()),
      (a = hn(r)),
      (u = Qt(o, a)),
      (u.callback = t ?? null),
      un(r, u, a),
      (e.current.lanes = a),
      Ar(e, a, o),
      ot(e, o),
      e
    );
  }
  function Es(e, t, r, o) {
    var a = t.current,
      u = be(),
      h = hn(a);
    return (
      (r = od(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Qt(u, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = un(a, t, h)),
      e !== null && (At(e, a, h, u), ns(e, a, h)),
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
  function ad(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Xl(e, t) {
    (ad(e, t), (e = e.alternate) && ad(e, t));
  }
  function fg() {
    return null;
  }
  var ud =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Yl(e) {
    this._internalRoot = e;
  }
  ((Ms.prototype.render = Yl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Es(e, t, null, null);
    }),
    (Ms.prototype.unmount = Yl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Vn(function () {
            Es(null, e, null, null);
          }),
            (t[Wt] = null));
        }
      }));
  function Ms(e) {
    this._internalRoot = e;
  }
  Ms.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ku();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < en.length && t !== 0 && t < en[r].priority; r++);
      (en.splice(r, 0, e), r === 0 && Xu(e));
    }
  };
  function Zl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function As(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function cd() {}
  function dg(e, t, r, o, a) {
    if (a) {
      if (typeof o == "function") {
        var u = o;
        o = function () {
          var M = Cs(h);
          u.call(M);
        };
      }
      var h = ld(t, o, e, 0, null, !1, !1, "", cd);
      return (
        (e._reactRootContainer = h),
        (e[Wt] = h.current),
        Wr(e.nodeType === 8 ? e.parentNode : e),
        Vn(),
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
    var x = Ql(e, 0, !1, null, null, !1, !1, "", cd);
    return (
      (e._reactRootContainer = x),
      (e[Wt] = x.current),
      Wr(e.nodeType === 8 ? e.parentNode : e),
      Vn(function () {
        Es(t, x, r, o);
      }),
      x
    );
  }
  function Ds(e, t, r, o, a) {
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
    } else h = dg(r, t, e, a, o);
    return Cs(h);
  }
  ((Hu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Mr(t.pendingLanes);
          r !== 0 && (xo(t, r | 1), ot(t, Ne()), (ae & 6) === 0 && ((cr = Ne() + 500), ln()));
        }
        break;
      case 13:
        (Vn(function () {
          var o = Gt(e, 1);
          if (o !== null) {
            var a = be();
            At(o, e, 1, a);
          }
        }),
          Xl(e, 1));
    }
  }),
    (So = function (e) {
      if (e.tag === 13) {
        var t = Gt(e, 134217728);
        if (t !== null) {
          var r = be();
          At(t, e, 134217728, r);
        }
        Xl(e, 134217728);
      }
    }),
    ($u = function (e) {
      if (e.tag === 13) {
        var t = hn(e),
          r = Gt(e, t);
        if (r !== null) {
          var o = be();
          At(r, e, t, o);
        }
        Xl(e, t);
      }
    }),
    (Ku = function () {
      return he;
    }),
    (Gu = function (e, t) {
      var r = he;
      try {
        return ((he = e), t());
      } finally {
        he = r;
      }
    }),
    (ho = function (e, t, r) {
      switch (t) {
        case "input":
          if ((io(e, r), (t = r.name), r.type === "radio" && t != null)) {
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
                (yu(o), io(o, a));
              }
            }
          }
          break;
        case "textarea":
          Su(e, r);
          break;
        case "select":
          ((t = r.value), t != null && Un(e, !!r.multiple, t, !1));
      }
    }),
    (Ru = Ul),
    (Vu = Vn));
  var hg = { usingClientEntryPoint: !1, Events: [Kr, qn, Gi, Au, Du, Ul] },
    si = {
      findFiberByHostInstance: Tn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    pg = {
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
        return ((e = Iu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: si.findFiberByHostInstance || fg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rs.isDisabled && Rs.supportsFiber)
      try {
        ((Mi = Rs.inject(pg)), (Nt = Rs));
      } catch {}
  }
  return (
    (lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hg),
    (lt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Zl(t)) throw Error(s(200));
      return cg(e, t, null, r);
    }),
    (lt.createRoot = function (e, t) {
      if (!Zl(e)) throw Error(s(299));
      var r = !1,
        o = "",
        a = ud;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Ql(e, 1, !1, null, null, r, !1, o, a)),
        (e[Wt] = t.current),
        Wr(e.nodeType === 8 ? e.parentNode : e),
        new Yl(t)
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
      return ((e = Iu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (lt.flushSync = function (e) {
      return Vn(e);
    }),
    (lt.hydrate = function (e, t, r) {
      if (!As(t)) throw Error(s(200));
      return Ds(null, e, t, !0, r);
    }),
    (lt.hydrateRoot = function (e, t, r) {
      if (!Zl(e)) throw Error(s(405));
      var o = (r != null && r.hydratedSources) || null,
        a = !1,
        u = "",
        h = ud;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (h = r.onRecoverableError)),
        (t = ld(t, null, e, 1, r ?? null, a, !1, u, h)),
        (e[Wt] = t.current),
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
      if (!As(t)) throw Error(s(200));
      return Ds(null, e, t, !1, r);
    }),
    (lt.unmountComponentAtNode = function (e) {
      if (!As(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Vn(function () {
            Ds(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (lt.unstable_batchedUpdates = Ul),
    (lt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!As(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Ds(e, t, r, !1, o);
    }),
    (lt.version = "18.3.1-next-f1338f8080-20240426"),
    lt
  );
}
var vd;
function kg() {
  if (vd) return bl.exports;
  vd = 1;
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
  return (n(), (bl.exports = Sg()), bl.exports);
}
var wd;
function Tg() {
  if (wd) return Vs;
  wd = 1;
  var n = kg();
  return ((Vs.createRoot = n.createRoot), (Vs.hydrateRoot = n.hydrateRoot), Vs);
}
var Pg = Tg();
const Eg =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4";
function Cg() {
  return ne.jsx("video", {
    autoPlay: !0,
    loop: !0,
    muted: !0,
    playsInline: !0,
    className: "pointer-events-none fixed inset-0 z-0 h-full w-full object-cover",
    "aria-hidden": !0,
    children: ne.jsx("source", { src: Eg, type: "video/mp4" }),
  });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mg = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  _h = (...n) =>
    n
      .filter((i, s, l) => !!i && i.trim() !== "" && l.indexOf(i) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ag = {
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
 */ const Dg = ee.forwardRef(
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
    ee.createElement(
      "svg",
      {
        ref: m,
        ...Ag,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: l ? (Number(s) * 24) / Number(i) : s,
        className: _h("lucide", c),
        ...p,
      },
      [...f.map(([g, y]) => ee.createElement(g, y)), ...(Array.isArray(d) ? d : [d])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rg = (n, i) => {
  const s = ee.forwardRef(({ className: l, ...c }, d) =>
    ee.createElement(Dg, { ref: d, iconNode: i, className: _h(`lucide-${Mg(n)}`, l), ...c }),
  );
  return ((s.displayName = `${n}`), s);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vg = Rg("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
function Lg() {
  return ne.jsxs("section", {
    className:
      "relative flex min-h-screen flex-col items-center justify-center px-6 pb-40 pt-16 text-center sm:px-10",
    children: [
      ne.jsx("p", {
        className:
          "animate-blur-fade-up mb-5 text-[11px] font-medium uppercase tracking-[0.38em] text-white/45",
        style: { animationDelay: "150ms" },
        children: "Lumina",
      }),
      ne.jsxs("h1", {
        className:
          "animate-blur-fade-up max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl",
        style: { animationDelay: "280ms" },
        children: [
          "Light that follows",
          ne.jsx("span", { className: "block text-white/55", children: "every frame forward" }),
        ],
      }),
      ne.jsx("p", {
        className:
          "animate-blur-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg",
        style: { animationDelay: "420ms" },
        children:
          "A cinematic one-page experience — immersive video, scroll discovery, and a glass footer that guides the journey.",
      }),
      ne.jsxs("div", {
        className: "animate-blur-fade-up mt-10 flex flex-wrap items-center justify-center gap-3",
        style: { animationDelay: "560ms" },
        children: [
          ne.jsxs("button", {
            type: "button",
            className:
              "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90",
            children: ["Start exploring", ne.jsx(Vg, { className: "h-4 w-4" })],
          }),
          ne.jsx("button", {
            type: "button",
            className:
              "liquid-glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white",
            onClick: () => {
              var n;
              return (n = document.getElementById("discover")) == null
                ? void 0
                : n.scrollIntoView({ behavior: "smooth" });
            },
            children: "Discover below",
          }),
        ],
      }),
    ],
  });
}
const Ih = ee.createContext({});
function Ng(n) {
  const i = ee.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const _g = typeof window < "u",
  Ig = _g ? ee.useLayoutEffect : ee.useEffect,
  $a = ee.createContext(null);
function Ka(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function Hs(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
const Ut = (n, i, s) => (s > i ? i : s < n ? n : s);
let Ga = () => {};
const wn = {},
  jh = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  Fh = (n) => typeof n == "object" && n !== null,
  Oh = (n) => /^0[^.\s]+$/u.test(n);
function zh(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const St = (n) => n,
  gi = (...n) => n.reduce((i, s) => (l) => s(i(l))),
  hi = (n, i, s) => {
    const l = i - n;
    return l ? (s - n) / l : 1;
  };
class Qa {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (Ka(this.subscriptions, i), () => Hs(this.subscriptions, i));
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
  Bh = (n, i) => (i ? n * (1e3 / i) : 0),
  Uh = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  jg = 1e-7,
  Fg = 12;
function Og(n, i, s, l, c) {
  let d,
    f,
    p = 0;
  do ((f = i + (s - i) / 2), (d = Uh(f, l, c) - n), d > 0 ? (s = f) : (i = f));
  while (Math.abs(d) > jg && ++p < Fg);
  return f;
}
function vi(n, i, s, l) {
  if (n === i && s === l) return St;
  const c = (d) => Og(d, 0, 1, n, s);
  return (d) => (d === 0 || d === 1 ? d : Uh(c(d), i, l));
}
const Wh = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  Hh = (n) => (i) => 1 - n(1 - i),
  $h = vi(0.33, 1.53, 0.69, 0.99),
  Xa = Hh($h),
  Kh = Wh(Xa),
  Gh = (n) => (n >= 1 ? 1 : (n *= 2) < 1 ? 0.5 * Xa(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))),
  Ya = (n) => 1 - Math.sin(Math.acos(n)),
  Qh = Hh(Ya),
  Xh = Wh(Ya),
  zg = vi(0.42, 0, 1, 1),
  Bg = vi(0, 0, 0.58, 1),
  Yh = vi(0.42, 0, 0.58, 1),
  Ug = (n) => Array.isArray(n) && typeof n[0] != "number",
  Zh = (n) => Array.isArray(n) && typeof n[0] == "number",
  Wg = {
    linear: St,
    easeIn: zg,
    easeInOut: Yh,
    easeOut: Bg,
    circIn: Ya,
    circInOut: Xh,
    circOut: Qh,
    backIn: Xa,
    backInOut: Kh,
    backOut: $h,
    anticipate: Gh,
  },
  Hg = (n) => typeof n == "string",
  xd = (n) => {
    if (Zh(n)) {
      Ga(n.length === 4);
      const [i, s, l, c] = n;
      return vi(i, s, l, c);
    } else if (Hg(n)) return Wg[n];
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
function $g(n, i) {
  let s = new Set(),
    l = new Set(),
    c = !1,
    d = !1;
  const f = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(y) {
    (f.has(y) && (g.schedule(y), n()), y(p));
  }
  const g = {
    schedule: (y, w = !1, S = !1) => {
      const A = S && c ? s : l;
      return (w && f.add(y), A.add(y), y);
    },
    cancel: (y) => {
      (l.delete(y), f.delete(y));
    },
    process: (y) => {
      if (((p = y), c)) {
        d = !0;
        return;
      }
      c = !0;
      const w = s;
      ((s = l), (l = w), s.forEach(m), s.clear(), (c = !1), d && ((d = !1), g.process(y)));
    },
  };
  return g;
}
const Kg = 40;
function qh(n, i) {
  let s = !1,
    l = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = Ls.reduce((O, B) => ((O[B] = $g(d)), O), {}),
    {
      setup: p,
      read: m,
      resolveKeyframes: g,
      preUpdate: y,
      update: w,
      preRender: S,
      render: C,
      postRender: A,
    } = f,
    R = () => {
      const O = wn.useManualTiming,
        B = O ? c.timestamp : performance.now();
      ((s = !1),
        O || (c.delta = l ? 1e3 / 60 : Math.max(Math.min(B - c.timestamp, Kg), 1)),
        (c.timestamp = B),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        g.process(c),
        y.process(c),
        w.process(c),
        S.process(c),
        C.process(c),
        A.process(c),
        (c.isProcessing = !1),
        s && i && ((l = !1), n(R)));
    },
    D = () => {
      ((s = !0), (l = !0), c.isProcessing || n(R));
    };
  return {
    schedule: Ls.reduce((O, B) => {
      const Z = f[B];
      return ((O[B] = (ie, re = !1, Y = !1) => (s || D(), Z.schedule(ie, re, Y))), O);
    }, {}),
    cancel: (O) => {
      for (let B = 0; B < Ls.length; B++) f[Ls[B]].cancel(O);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: ye,
  cancel: xn,
  state: Ge,
  steps: na,
} = qh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : St, !0);
let js;
function Gg() {
  js = void 0;
}
const et = {
    now: () => (
      js === void 0 &&
        et.set(Ge.isProcessing || wn.useManualTiming ? Ge.timestamp : performance.now()),
      js
    ),
    set: (n) => {
      ((js = n), queueMicrotask(Gg));
    },
  },
  Jh = (n) => (i) => typeof i == "string" && i.startsWith(n),
  bh = Jh("--"),
  Qg = Jh("var(--"),
  Za = (n) => (Qg(n) ? Xg.test(n.split("/*")[0].trim()) : !1),
  Xg = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Sd(n) {
  return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--");
}
const vr = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  pi = { ...vr, transform: (n) => Ut(0, 1, n) },
  Ns = { ...vr, default: 1 },
  ui = (n) => Math.round(n * 1e5) / 1e5,
  qa = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Yg(n) {
  return n == null;
}
const Zg =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ja = (n, i) => (s) =>
    !!(
      (typeof s == "string" && Zg.test(s) && s.startsWith(n)) ||
      (i && !Yg(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  ep = (n, i, s) => (l) => {
    if (typeof l != "string") return l;
    const [c, d, f, p] = l.match(qa);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  qg = (n) => Ut(0, 255, n),
  ra = { ...vr, transform: (n) => Math.round(qg(n)) },
  Fn = {
    test: Ja("rgb", "red"),
    parse: ep("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: s, alpha: l = 1 }) =>
      "rgba(" +
      ra.transform(n) +
      ", " +
      ra.transform(i) +
      ", " +
      ra.transform(s) +
      ", " +
      ui(pi.transform(l)) +
      ")",
  };
function Jg(n) {
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
const va = { test: Ja("#"), parse: Jg, transform: Fn.transform },
  wi = (n) => ({
    test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  Zt = wi("deg"),
  Bt = wi("%"),
  K = wi("px"),
  bg = wi("vh"),
  ev = wi("vw"),
  kd = { ...Bt, parse: (n) => Bt.parse(n) / 100, transform: (n) => Bt.transform(n * 100) },
  hr = {
    test: Ja("hsl", "hue"),
    parse: ep("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: s, alpha: l = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      Bt.transform(ui(i)) +
      ", " +
      Bt.transform(ui(s)) +
      ", " +
      ui(pi.transform(l)) +
      ")",
  },
  Fe = {
    test: (n) => Fn.test(n) || va.test(n) || hr.test(n),
    parse: (n) => (Fn.test(n) ? Fn.parse(n) : hr.test(n) ? hr.parse(n) : va.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? Fn.transform(n) : hr.transform(n),
    getAnimatableNone: (n) => {
      const i = Fe.parse(n);
      return ((i.alpha = 0), Fe.transform(i));
    },
  },
  tv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function nv(n) {
  var i, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(qa)) == null ? void 0 : i.length) || 0) +
      (((s = n.match(tv)) == null ? void 0 : s.length) || 0) >
      0
  );
}
const tp = "number",
  np = "color",
  rv = "var",
  iv = "var(",
  Td = "${}",
  sv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function yr(n) {
  const i = n.toString(),
    s = [],
    l = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      sv,
      (m) => (
        Fe.test(m)
          ? (l.color.push(d), c.push(np), s.push(Fe.parse(m)))
          : m.startsWith(iv)
            ? (l.var.push(d), c.push(rv), s.push(m))
            : (l.number.push(d), c.push(tp), s.push(parseFloat(m))),
        ++d,
        Td
      ),
    )
    .split(Td);
  return { values: s, split: p, indexes: l, types: c };
}
function ov(n) {
  return yr(n).values;
}
function rp({ split: n, types: i }) {
  const s = n.length;
  return (l) => {
    let c = "";
    for (let d = 0; d < s; d++)
      if (((c += n[d]), l[d] !== void 0)) {
        const f = i[d];
        f === tp ? (c += ui(l[d])) : f === np ? (c += Fe.transform(l[d])) : (c += l[d]);
      }
    return c;
  };
}
function lv(n) {
  return rp(yr(n));
}
const av = (n) => (typeof n == "number" ? 0 : Fe.test(n) ? Fe.getAnimatableNone(n) : n),
  uv = (n, i) => (typeof n == "number" ? (i != null && i.trim().endsWith("/") ? n : 0) : av(n));
function cv(n) {
  const i = yr(n);
  return rp(i)(i.values.map((l, c) => uv(l, i.split[c])));
}
const Lt = { test: nv, parse: ov, createTransformer: lv, getAnimatableNone: cv };
function ia(n, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n
  );
}
function fv({ hue: n, saturation: i, lightness: s, alpha: l }) {
  ((n /= 360), (i /= 100), (s /= 100));
  let c = 0,
    d = 0,
    f = 0;
  if (!i) c = d = f = s;
  else {
    const p = s < 0.5 ? s * (1 + i) : s + i - s * i,
      m = 2 * s - p;
    ((c = ia(m, p, n + 1 / 3)), (d = ia(m, p, n)), (f = ia(m, p, n - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: l,
  };
}
function $s(n, i) {
  return (s) => (s > 0 ? i : n);
}
const me = (n, i, s) => n + (i - n) * s,
  sa = (n, i, s) => {
    const l = n * n,
      c = s * (i * i - l) + l;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  dv = [va, Fn, hr],
  hv = (n) => dv.find((i) => i.test(n));
function Pd(n) {
  const i = hv(n);
  if (!i) return !1;
  let s = i.parse(n);
  return (i === hr && (s = fv(s)), s);
}
const Ed = (n, i) => {
    const s = Pd(n),
      l = Pd(i);
    if (!s || !l) return $s(n, i);
    const c = { ...s };
    return (d) => (
      (c.red = sa(s.red, l.red, d)),
      (c.green = sa(s.green, l.green, d)),
      (c.blue = sa(s.blue, l.blue, d)),
      (c.alpha = me(s.alpha, l.alpha, d)),
      Fn.transform(c)
    );
  },
  wa = new Set(["none", "hidden"]);
function pv(n, i) {
  return wa.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n);
}
function mv(n, i) {
  return (s) => me(n, i, s);
}
function ba(n) {
  return typeof n == "number"
    ? mv
    : typeof n == "string"
      ? Za(n)
        ? $s
        : Fe.test(n)
          ? Ed
          : vv
      : Array.isArray(n)
        ? ip
        : typeof n == "object"
          ? Fe.test(n)
            ? Ed
            : yv
          : $s;
}
function ip(n, i) {
  const s = [...n],
    l = s.length,
    c = n.map((d, f) => ba(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < l; f++) s[f] = c[f](d);
    return s;
  };
}
function yv(n, i) {
  const s = { ...n, ...i },
    l = {};
  for (const c in s) n[c] !== void 0 && i[c] !== void 0 && (l[c] = ba(n[c])(n[c], i[c]));
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
const vv = (n, i) => {
  const s = Lt.createTransformer(i),
    l = yr(n),
    c = yr(i);
  return l.indexes.var.length === c.indexes.var.length &&
    l.indexes.color.length === c.indexes.color.length &&
    l.indexes.number.length >= c.indexes.number.length
    ? (wa.has(n) && !c.values.length) || (wa.has(i) && !l.values.length)
      ? pv(n, i)
      : gi(ip(gv(l, c), c.values), s)
    : $s(n, i);
};
function sp(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number"
    ? me(n, i, s)
    : ba(n)(n, i);
}
const wv = (n) => {
    const i = ({ timestamp: s }) => n(s);
    return {
      start: (s = !0) => ye.update(i, s),
      stop: () => xn(i),
      now: () => (Ge.isProcessing ? Ge.timestamp : et.now()),
    };
  },
  op = (n, i, s = 10) => {
    let l = "";
    const c = Math.max(Math.round(i / s), 2);
    for (let d = 0; d < c; d++) l += Math.round(n(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${l.substring(0, l.length - 2)})`;
  },
  Ks = 2e4;
function eu(n) {
  let i = 0;
  const s = 50;
  let l = n.next(i);
  for (; !l.done && i < Ks;) ((i += s), (l = n.next(i)));
  return i >= Ks ? 1 / 0 : i;
}
function xv(n, i = 100, s) {
  const l = s({ ...n, keyframes: [0, i] }),
    c = Math.min(eu(l), Ks);
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
function xa(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const Sv = 12;
function kv(n, i, s) {
  let l = s;
  for (let c = 1; c < Sv; c++) l = l - n(l) / i(l);
  return l;
}
const oa = 0.001;
function Tv({
  duration: n = Ve.duration,
  bounce: i = Ve.bounce,
  velocity: s = Ve.velocity,
  mass: l = Ve.mass,
}) {
  let c,
    d,
    f = 1 - i;
  ((f = Ut(Ve.minDamping, Ve.maxDamping, f)),
    (n = Ut(Ve.minDuration, Ve.maxDuration, xt(n))),
    f < 1
      ? ((c = (g) => {
          const y = g * f,
            w = y * n,
            S = y - s,
            C = xa(g, f),
            A = Math.exp(-w);
          return oa - (S / C) * A;
        }),
        (d = (g) => {
          const w = g * f * n,
            S = w * s + s,
            C = Math.pow(f, 2) * Math.pow(g, 2) * n,
            A = Math.exp(-w),
            R = xa(Math.pow(g, 2), f);
          return ((-c(g) + oa > 0 ? -1 : 1) * ((S - C) * A)) / R;
        }))
      : ((c = (g) => {
          const y = Math.exp(-g * n),
            w = (g - s) * n + 1;
          return -oa + y * w;
        }),
        (d = (g) => {
          const y = Math.exp(-g * n),
            w = (s - g) * (n * n);
          return y * w;
        })));
  const p = 5 / n,
    m = kv(c, d, p);
  if (((n = ht(n)), isNaN(m))) return { stiffness: Ve.stiffness, damping: Ve.damping, duration: n };
  {
    const g = Math.pow(m, 2) * l;
    return { stiffness: g, damping: f * 2 * Math.sqrt(l * g), duration: n };
  }
}
const Pv = ["duration", "bounce"],
  Ev = ["stiffness", "damping", "mass"];
function Cd(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function Cv(n) {
  let i = {
    velocity: Ve.velocity,
    stiffness: Ve.stiffness,
    damping: Ve.damping,
    mass: Ve.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Cd(n, Ev) && Cd(n, Pv))
    if (((i.velocity = 0), n.visualDuration)) {
      const s = n.visualDuration,
        l = (2 * Math.PI) / (s * 1.2),
        c = l * l,
        d = 2 * Ut(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Ve.mass, stiffness: c, damping: d };
    } else {
      const s = Tv({ ...n, velocity: 0 });
      ((i = { ...i, ...s, mass: Ve.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function Gs(n = Ve.visualDuration, i = Ve.bounce) {
  const s = typeof n != "object" ? { visualDuration: n, keyframes: [0, 1], bounce: i } : n;
  let { restSpeed: l, restDelta: c } = s;
  const d = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: g,
      mass: y,
      duration: w,
      velocity: S,
      isResolvedFromDuration: C,
    } = Cv({ ...s, velocity: -xt(s.velocity || 0) }),
    A = S || 0,
    R = g / (2 * Math.sqrt(m * y)),
    D = f - d,
    I = xt(Math.sqrt(m / y)),
    z = Math.abs(D) < 5;
  (l || (l = z ? Ve.restSpeed.granular : Ve.restSpeed.default),
    c || (c = z ? Ve.restDelta.granular : Ve.restDelta.default));
  let O, B, Z, ie, re, Y;
  if (R < 1)
    ((Z = xa(I, R)),
      (ie = (A + R * I * D) / Z),
      (O = (q) => {
        const pe = Math.exp(-R * I * q);
        return f - pe * (ie * Math.sin(Z * q) + D * Math.cos(Z * q));
      }),
      (re = R * I * ie + D * Z),
      (Y = R * I * D - ie * Z),
      (B = (q) => Math.exp(-R * I * q) * (re * Math.sin(Z * q) + Y * Math.cos(Z * q))));
  else if (R === 1) {
    O = (pe) => f - Math.exp(-I * pe) * (D + (A + I * D) * pe);
    const q = A + I * D;
    B = (pe) => Math.exp(-I * pe) * (I * q * pe - A);
  } else {
    const q = I * Math.sqrt(R * R - 1);
    O = (De) => {
      const Ie = Math.exp(-R * I * De),
        Se = Math.min(q * De, 300);
      return f - (Ie * ((A + R * I * D) * Math.sinh(Se) + q * D * Math.cosh(Se))) / q;
    };
    const pe = (A + R * I * D) / q,
      xe = R * I * pe - D * q,
      Le = R * I * D - pe * q;
    B = (De) => {
      const Ie = Math.exp(-R * I * De),
        Se = Math.min(q * De, 300);
      return Ie * (xe * Math.sinh(Se) + Le * Math.cosh(Se));
    };
  }
  const ge = {
    calculatedDuration: (C && w) || null,
    velocity: (q) => ht(B(q)),
    next: (q) => {
      if (!C && R < 1) {
        const xe = Math.exp(-R * I * q),
          Le = Math.sin(Z * q),
          De = Math.cos(Z * q),
          Ie = f - xe * (ie * Le + D * De),
          Se = ht(xe * (re * Le + Y * De));
        return (
          (p.done = Math.abs(Se) <= l && Math.abs(f - Ie) <= c),
          (p.value = p.done ? f : Ie),
          p
        );
      }
      const pe = O(q);
      if (C) p.done = q >= w;
      else {
        const xe = ht(B(q));
        p.done = Math.abs(xe) <= l && Math.abs(f - pe) <= c;
      }
      return ((p.value = p.done ? f : pe), p);
    },
    toString: () => {
      const q = Math.min(eu(ge), Ks),
        pe = op((xe) => ge.next(q * xe).value, q, 30);
      return q + "ms " + pe;
    },
    toTransition: () => {},
  };
  return ge;
}
Gs.applyToOptions = (n) => {
  const i = xv(n, 100, Gs);
  return ((n.ease = i.ease), (n.duration = ht(i.duration)), (n.type = "keyframes"), n);
};
const Mv = 5;
function lp(n, i, s) {
  const l = Math.max(i - Mv, 0);
  return Bh(s - n(l), i - l);
}
function Sa({
  keyframes: n,
  velocity: i = 0,
  power: s = 0.8,
  timeConstant: l = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: p,
  max: m,
  restDelta: g = 0.5,
  restSpeed: y,
}) {
  const w = n[0],
    S = { done: !1, value: w },
    C = (Y) => (p !== void 0 && Y < p) || (m !== void 0 && Y > m),
    A = (Y) => (p === void 0 ? m : m === void 0 || Math.abs(p - Y) < Math.abs(m - Y) ? p : m);
  let R = s * i;
  const D = w + R,
    I = f === void 0 ? D : f(D);
  I !== D && (R = I - w);
  const z = (Y) => -R * Math.exp(-Y / l),
    O = (Y) => I + z(Y),
    B = (Y) => {
      const ge = z(Y),
        q = O(Y);
      ((S.done = Math.abs(ge) <= g), (S.value = S.done ? I : q));
    };
  let Z, ie;
  const re = (Y) => {
    C(S.value) &&
      ((Z = Y),
      (ie = Gs({
        keyframes: [S.value, A(S.value)],
        velocity: lp(O, Y, S.value),
        damping: c,
        stiffness: d,
        restDelta: g,
        restSpeed: y,
      })));
  };
  return (
    re(0),
    {
      calculatedDuration: null,
      next: (Y) => {
        let ge = !1;
        return (
          !ie && Z === void 0 && ((ge = !0), B(Y), re(Y)),
          Z !== void 0 && Y >= Z ? ie.next(Y - Z) : (!ge && B(Y), S)
        );
      },
    }
  );
}
function Av(n, i, s) {
  const l = [],
    c = s || wn.mix || sp,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = c(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || St : i;
      p = gi(m, p);
    }
    l.push(p);
  }
  return l;
}
function Dv(n, i, { clamp: s = !0, ease: l, mixer: c } = {}) {
  const d = n.length;
  if ((Ga(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = Av(i, l, c),
    m = p.length,
    g = (y) => {
      if (f && y < n[0]) return i[0];
      let w = 0;
      if (m > 1) for (; w < n.length - 2 && !(y < n[w + 1]); w++);
      const S = hi(n[w], n[w + 1], y);
      return p[w](S);
    };
  return s ? (y) => g(Ut(n[0], n[d - 1], y)) : g;
}
function Rv(n, i) {
  const s = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const c = hi(0, i, l);
    n.push(me(s, 1, c));
  }
}
function Vv(n) {
  const i = [0];
  return (Rv(i, n.length - 1), i);
}
function Lv(n, i) {
  return n.map((s) => s * i);
}
function Nv(n, i) {
  return n.map(() => i || Yh).splice(0, n.length - 1);
}
function ci({ duration: n = 300, keyframes: i, times: s, ease: l = "easeInOut" }) {
  const c = Ug(l) ? l.map(xd) : xd(l),
    d = { done: !1, value: i[0] },
    f = Lv(s && s.length === i.length ? s : Vv(i), n),
    p = Dv(f, i, { ease: Array.isArray(c) ? c : Nv(i, c) });
  return { calculatedDuration: n, next: (m) => ((d.value = p(m)), (d.done = m >= n), d) };
}
const _v = (n) => n !== null;
function bs(n, { repeat: i, repeatType: s = "loop" }, l, c = 1) {
  const d = n.filter(_v),
    p = c < 0 || (i && s !== "loop" && i % 2 === 1) ? 0 : d.length - 1;
  return !p || l === void 0 ? d[p] : l;
}
const Iv = { decay: Sa, inertia: Sa, tween: ci, keyframes: ci, spring: Gs };
function ap(n) {
  typeof n.type == "string" && (n.type = Iv[n.type]);
}
class tu {
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
class Qs extends tu {
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
    ap(i);
    const { type: s = ci, repeat: l = 0, repeatDelay: c = 0, repeatType: d, velocity: f = 0 } = i;
    let { keyframes: p } = i;
    const m = s || ci;
    m !== ci &&
      typeof p[0] != "number" &&
      ((this.mixKeyframes = gi(jv, sp(p[0], p[1]))), (p = [0, 100]));
    const g = m({ ...i, keyframes: p });
    (d === "mirror" &&
      (this.mirroredGenerator = m({ ...i, keyframes: [...p].reverse(), velocity: -f })),
      g.calculatedDuration === null && (g.calculatedDuration = eu(g)));
    const { calculatedDuration: y } = g;
    ((this.calculatedDuration = y),
      (this.resolvedDuration = y + c),
      (this.totalDuration = this.resolvedDuration * (l + 1) - c),
      (this.generator = g));
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
      delay: g = 0,
      keyframes: y,
      repeat: w,
      repeatType: S,
      repeatDelay: C,
      type: A,
      onUpdate: R,
      finalKeyframe: D,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 && (this.startTime = Math.min(i - c / this.speed, this.startTime)),
      s ? (this.currentTime = i) : this.updateTime(i));
    const I = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1),
      z = this.playbackSpeed >= 0 ? I < 0 : I > c;
    ((this.currentTime = Math.max(I, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = c));
    let O = this.currentTime,
      B = l;
    if (w) {
      const Y = Math.min(this.currentTime, c) / p;
      let ge = Math.floor(Y),
        q = Y % 1;
      (!q && Y >= 1 && (q = 1),
        q === 1 && ge--,
        (ge = Math.min(ge, w + 1)),
        !!(ge % 2) &&
          (S === "reverse" ? ((q = 1 - q), C && (q -= C / p)) : S === "mirror" && (B = f)),
        (O = Ut(0, 1, q) * p));
    }
    let Z;
    (z ? ((this.delayState.value = y[0]), (Z = this.delayState)) : (Z = B.next(O)),
      d && !z && (Z.value = d(Z.value)));
    let { done: ie } = Z;
    !z &&
      m !== null &&
      (ie = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const re =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ie));
    return (
      re && A !== Sa && (Z.value = bs(y, this.options, D, this.speed)),
      R && R(Z.value),
      re && this.finish(),
      Z
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
    return lp((l) => this.generator.next(l).value, i, s);
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
    const { driver: i = wv, startTime: s } = this.options;
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
function Fv(n) {
  for (let i = 1; i < n.length; i++) n[i] ?? (n[i] = n[i - 1]);
}
const On = (n) => (n * 180) / Math.PI,
  ka = (n) => {
    const i = On(Math.atan2(n[1], n[0]));
    return Ta(i);
  },
  Ov = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: ka,
    rotateZ: ka,
    skewX: (n) => On(Math.atan(n[1])),
    skewY: (n) => On(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  Ta = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  Md = ka,
  Ad = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  Dd = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  zv = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ad,
    scaleY: Dd,
    scale: (n) => (Ad(n) + Dd(n)) / 2,
    rotateX: (n) => Ta(On(Math.atan2(n[6], n[5]))),
    rotateY: (n) => Ta(On(Math.atan2(-n[2], n[0]))),
    rotateZ: Md,
    rotate: Md,
    skewX: (n) => On(Math.atan(n[4])),
    skewY: (n) => On(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function Pa(n) {
  return n.includes("scale") ? 1 : 0;
}
function Ea(n, i) {
  if (!n || n === "none") return Pa(i);
  const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let l, c;
  if (s) ((l = zv), (c = s));
  else {
    const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((l = Ov), (c = p));
  }
  if (!c) return Pa(i);
  const d = l[i],
    f = c[1].split(",").map(Uv);
  return typeof d == "function" ? d(f) : f[d];
}
const Bv = (n, i) => {
  const { transform: s = "none" } = getComputedStyle(n);
  return Ea(s, i);
};
function Uv(n) {
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
  Rd = (n) => n === vr || n === K,
  Wv = new Set(["x", "y", "z"]),
  Hv = wr.filter((n) => !Wv.has(n));
function $v(n) {
  const i = [];
  return (
    Hv.forEach((s) => {
      const l = n.getValue(s);
      l !== void 0 && (i.push([s, l.get()]), l.set(s.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const vn = {
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
  x: (n, { transform: i }) => Ea(i, "x"),
  y: (n, { transform: i }) => Ea(i, "y"),
};
vn.translateX = vn.x;
vn.translateY = vn.y;
const zn = new Set();
let Ca = !1,
  Ma = !1,
  Aa = !1;
function up() {
  if (Ma) {
    const n = Array.from(zn).filter((l) => l.needsMeasurement),
      i = new Set(n.map((l) => l.element)),
      s = new Map();
    (i.forEach((l) => {
      const c = $v(l);
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
  ((Ma = !1), (Ca = !1), zn.forEach((n) => n.complete(Aa)), zn.clear());
}
function cp() {
  zn.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (Ma = !0));
  });
}
function Kv() {
  ((Aa = !0), cp(), up(), (Aa = !1));
}
class nu {
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
        ? (zn.add(this), Ca || ((Ca = !0), ye.read(cp), ye.resolveKeyframes(up)))
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
    Fv(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      zn.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (zn.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Gv = (n) => n.startsWith("--");
function fp(n, i, s) {
  Gv(i) ? n.style.setProperty(i, s) : (n.style[i] = s);
}
const Qv = {};
function dp(n, i) {
  const s = zh(n);
  return () => Qv[i] ?? s();
}
const Xv = dp(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  hp = dp(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ai = ([n, i, s, l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`,
  Vd = {
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
function pp(n, i) {
  if (n)
    return typeof n == "function"
      ? hp()
        ? op(n, i)
        : "ease-out"
      : Zh(n)
        ? ai(n)
        : Array.isArray(n)
          ? n.map((s) => pp(s, i) || Vd.easeOut)
          : Vd[n];
}
function Yv(
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
  g = void 0,
) {
  const y = { [i]: s };
  m && (y.offset = m);
  const w = pp(p, c);
  Array.isArray(w) && (y.easing = w);
  const S = {
    delay: l,
    duration: c,
    easing: Array.isArray(w) ? "linear" : w,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (g && (S.pseudoElement = g), n.animate(y, S));
}
function mp(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function Zv({ type: n, ...i }) {
  return mp(n) && hp()
    ? n.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class yp extends tu {
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
      Ga(typeof i.type != "string"));
    const g = Zv(i);
    ((this.animation = Yv(s, l, c, g, d)),
      g.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const y = bs(c, this.options, p, this.speed);
          (this.updateMotionValue && this.updateMotionValue(y),
            fp(s, l, y),
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
      i && Xv()
        ? ((this.animation.timeline = i),
          s && (this.animation.rangeStart = s),
          l && (this.animation.rangeEnd = l),
          St)
        : c(this)
    );
  }
}
const gp = { anticipate: Gh, backInOut: Kh, circInOut: Xh };
function qv(n) {
  return n in gp;
}
function Jv(n) {
  typeof n.ease == "string" && qv(n.ease) && (n.ease = gp[n.ease]);
}
const la = 10;
class bv extends yp {
  constructor(i) {
    (Jv(i),
      ap(i),
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
    const p = new Qs({ ...f, autoplay: !1 }),
      m = Math.max(la, et.now() - this.startTime),
      g = Ut(0, la, m - la),
      y = p.sample(m).value,
      { name: w } = this.options;
    (d && w && fp(d, w, y), s.setWithVelocity(p.sample(Math.max(0, m - g)).value, y, g), p.stop());
  }
}
const Ld = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" && (Lt.test(n) || n === "0") && !n.startsWith("url("))
      );
function e0(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== i) return !0;
}
function t0(n, i, s, l) {
  const c = n[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = Ld(c, i),
    p = Ld(d, i);
  return !f || !p ? !1 : e0(n) || ((s === "spring" || mp(s)) && l);
}
function Da(n) {
  ((n.duration = 0), (n.type = "keyframes"));
}
const vp = new Set(["opacity", "clipPath", "filter", "transform"]),
  n0 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function r0(n) {
  for (let i = 0; i < n.length; i++) if (typeof n[i] == "string" && n0.test(n[i])) return !0;
  return !1;
}
const i0 = new Set([
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
  s0 = zh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function o0(n) {
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
  const { onUpdate: g, transformTemplate: y } = i.owner.getProps();
  return (
    s0() &&
    s &&
    (vp.has(s) || (i0.has(s) && r0(p))) &&
    (s !== "transform" || !y) &&
    !g &&
    !l &&
    c !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const l0 = 40;
class a0 extends tu {
  constructor({
    autoplay: i = !0,
    delay: s = 0,
    type: l = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: p,
    name: m,
    motionValue: g,
    element: y,
    ...w
  }) {
    var A;
    (super(),
      (this.stop = () => {
        var R, D;
        (this._animation &&
          (this._animation.stop(), (R = this.stopTimeline) == null || R.call(this)),
          (D = this.keyframeResolver) == null || D.cancel());
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
        motionValue: g,
        element: y,
        ...w,
      },
      C = (y == null ? void 0 : y.KeyframeResolver) || nu;
    ((this.keyframeResolver = new C(
      p,
      (R, D, I) => this.onKeyframesResolved(R, D, S, !I),
      m,
      g,
      y,
    )),
      (A = this.keyframeResolver) == null || A.scheduleResolve());
  }
  onKeyframesResolved(i, s, l, c) {
    var I, z;
    this.keyframeResolver = void 0;
    const { name: d, type: f, velocity: p, delay: m, isHandoff: g, onUpdate: y } = l;
    this.resolvedAt = et.now();
    let w = !0;
    t0(i, d, f, p) ||
      ((w = !1),
      (wn.instantAnimations || !m) && (y == null || y(bs(i, l, s))),
      (i[0] = i[i.length - 1]),
      Da(l),
      (l.repeat = 0));
    const C = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > l0
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: s,
        ...l,
        keyframes: i,
      },
      A = w && !g && o0(C),
      R = (z = (I = C.motionValue) == null ? void 0 : I.owner) == null ? void 0 : z.current;
    let D;
    if (A)
      try {
        D = new bv({ ...C, element: R });
      } catch {
        D = new Qs(C);
      }
    else D = new Qs(C);
    (D.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(St),
      this.pendingTimeline &&
        ((this.stopTimeline = D.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = D));
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
      this._animation || ((i = this.keyframeResolver) == null || i.resume(), Kv()),
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
function wp(n, i, s, l = 0, c = 1) {
  const d = Array.from(n)
      .sort((g, y) => g.sortNodePosition(y))
      .indexOf(i),
    f = n.size,
    p = (f - 1) * l;
  return typeof s == "function" ? s(d, f) : c === 1 ? d * l : p - d * l;
}
const Nd = 30,
  u0 = (n) => !isNaN(parseFloat(n));
class c0 {
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
      this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = u0(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new Qa());
    const l = this.events[i].add(s);
    return i === "change"
      ? () => {
          (l(),
            ye.read(() => {
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Nd)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Nd);
    return Bh(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
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
function gr(n, i) {
  return new c0(n, i);
}
function xp(n, i) {
  if (n != null && n.inherit && i) {
    const { inherit: s, ...l } = n;
    return { ...i, ...l };
  }
  return n;
}
function ru(n, i) {
  const s = (n == null ? void 0 : n[i]) ?? (n == null ? void 0 : n.default) ?? n;
  return s !== n ? xp(s, n) : s;
}
const f0 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  d0 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  h0 = { type: "keyframes", duration: 0.8 },
  p0 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  m0 = (n, { keyframes: i }) =>
    i.length > 2 ? h0 : xr.has(n) ? (n.startsWith("scale") ? d0(i[1]) : f0) : p0,
  y0 = new Set([
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
  for (const i in n) if (!y0.has(i)) return !0;
  return !1;
}
const iu =
    (n, i, s, l = {}, c, d) =>
    (f) => {
      const p = ru(l, n) || {},
        m = p.delay || l.delay || 0;
      let { elapsed: g = 0 } = l;
      g = g - ht(m);
      const y = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...p,
        delay: -g,
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
      (g0(p) || Object.assign(y, m0(n, y)),
        y.duration && (y.duration = ht(y.duration)),
        y.repeatDelay && (y.repeatDelay = ht(y.repeatDelay)),
        y.from !== void 0 && (y.keyframes[0] = y.from));
      let w = !1;
      if (
        ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
          (Da(y), y.delay === 0 && (w = !0)),
        (wn.instantAnimations ||
          wn.skipAnimations ||
          (c != null && c.shouldSkipAnimations) ||
          p.skipAnimations) &&
          ((w = !0), Da(y), (y.delay = 0)),
        (y.allowFlatten = !p.type && !p.ease),
        w && !d && i.get() !== void 0)
      ) {
        const S = bs(y.keyframes, p);
        if (S !== void 0) {
          ye.update(() => {
            (y.onUpdate(S), y.onComplete());
          });
          return;
        }
      }
      return p.isSync ? new Qs(y) : new a0(y);
    },
  v0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function w0(n) {
  const i = v0.exec(n);
  if (!i) return [,];
  const [, s, l, c] = i;
  return [`--${s ?? l}`, c];
}
function Sp(n, i, s = 1) {
  const [l, c] = w0(n);
  if (!l) return;
  const d = window.getComputedStyle(i).getPropertyValue(l);
  if (d) {
    const f = d.trim();
    return jh(f) ? parseFloat(f) : f;
  }
  return Za(c) ? Sp(c, i, s + 1) : c;
}
function _d(n) {
  const i = [{}, {}];
  return (
    n == null ||
      n.values.forEach((s, l) => {
        ((i[0][l] = s.get()), (i[1][l] = s.getVelocity()));
      }),
    i
  );
}
function su(n, i, s, l) {
  if (typeof i == "function") {
    const [c, d] = _d(l);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  if ((typeof i == "string" && (i = n.variants && n.variants[i]), typeof i == "function")) {
    const [c, d] = _d(l);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  return i;
}
function Bn(n, i, s) {
  const l = n.getProps();
  return su(l, i, s !== void 0 ? s : l.custom, n);
}
const kp = new Set(["width", "height", "top", "left", "right", "bottom", ...wr]),
  Ra = (n) => Array.isArray(n);
function x0(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, gr(s));
}
function S0(n) {
  return Ra(n) ? n[n.length - 1] || 0 : n;
}
function k0(n, i) {
  const s = Bn(n, i);
  let { transitionEnd: l = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...l };
  for (const f in d) {
    const p = S0(d[f]);
    x0(n, f, p);
  }
}
const Qe = (n) => !!(n && n.getVelocity);
function T0(n) {
  return !!(Qe(n) && n.add);
}
function Va(n, i) {
  const s = n.getValue("willChange");
  if (T0(s)) return s.add(i);
  if (!s && wn.WillChange) {
    const l = new wn.WillChange("auto");
    (n.addValue("willChange", l), l.add(i));
  }
}
function ou(n) {
  return n.replace(/([A-Z])/g, (i) => `-${i.toLowerCase()}`);
}
const P0 = "framerAppearId",
  Tp = "data-" + ou(P0);
function Pp(n) {
  return n.props[Tp];
}
function E0({ protectedKeys: n, needsAnimating: i }, s) {
  const l = n.hasOwnProperty(s) && i[s] !== !0;
  return ((i[s] = !1), l);
}
function Ep(n, i, { delay: s = 0, transitionOverride: l, type: c } = {}) {
  let { transition: d, transitionEnd: f, ...p } = i;
  const m = n.getDefaultTransition();
  d = d ? xp(d, m) : m;
  const g = d == null ? void 0 : d.reduceMotion,
    y = d == null ? void 0 : d.skipAnimations;
  l && (d = l);
  const w = [],
    S = c && n.animationState && n.animationState.getState()[c],
    C = d == null ? void 0 : d.path;
  C && C.animateVisualElement(n, p, d, s, w);
  for (const A in p) {
    const R = n.getValue(A, n.latestValues[A] ?? null),
      D = p[A];
    if (D === void 0 || (S && E0(S, A))) continue;
    const I = { delay: s, ...ru(d || {}, A) };
    y && (I.skipAnimations = !0);
    const z = R.get();
    if (z !== void 0 && !R.isAnimating() && !Array.isArray(D) && D === z && !I.velocity) {
      ye.update(() => R.set(D));
      continue;
    }
    let O = !1;
    if (window.MotionHandoffAnimation) {
      const ie = Pp(n);
      if (ie) {
        const re = window.MotionHandoffAnimation(ie, A, ye);
        re !== null && ((I.startTime = re), (O = !0));
      }
    }
    Va(n, A);
    const B = g ?? n.shouldReduceMotion;
    R.start(iu(A, R, D, B && kp.has(A) ? { type: !1 } : I, n, O));
    const Z = R.animation;
    Z && w.push(Z);
  }
  if (f) {
    const A = () =>
      ye.update(() => {
        f && k0(n, f);
      });
    w.length ? Promise.all(w).then(A) : A();
  }
  return w;
}
function La(n, i, s = {}) {
  var m;
  const l = Bn(
    n,
    i,
    s.type === "exit" ? ((m = n.presenceContext) == null ? void 0 : m.custom) : void 0,
  );
  let { transition: c = n.getDefaultTransition() || {} } = l || {};
  s.transitionOverride && (c = s.transitionOverride);
  const d = l ? () => Promise.all(Ep(n, l, s)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (g = 0) => {
            const { delayChildren: y = 0, staggerChildren: w, staggerDirection: S } = c;
            return C0(n, i, g, y, w, S, s);
          }
        : () => Promise.resolve(),
    { when: p } = c;
  if (p) {
    const [g, y] = p === "beforeChildren" ? [d, f] : [f, d];
    return g().then(() => y());
  } else return Promise.all([d(), f(s.delay)]);
}
function C0(n, i, s = 0, l = 0, c = 0, d = 1, f) {
  const p = [];
  for (const m of n.variantChildren)
    (m.notify("AnimationStart", i),
      p.push(
        La(m, i, {
          ...f,
          delay: s + (typeof l == "function" ? 0 : l) + wp(n.variantChildren, m, l, c, d),
        }).then(() => m.notify("AnimationComplete", i)),
      ));
  return Promise.all(p);
}
function M0(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const c = i.map((d) => La(n, d, s));
    l = Promise.all(c);
  } else if (typeof i == "string") l = La(n, i, s);
  else {
    const c = typeof i == "function" ? Bn(n, i, s.custom) : i;
    l = Promise.all(Ep(n, c, s));
  }
  return l.then(() => {
    n.notify("AnimationComplete", i);
  });
}
const A0 = { test: (n) => n === "auto", parse: (n) => n },
  Cp = (n) => (i) => i.test(n),
  Mp = [vr, K, Bt, Zt, ev, bg, A0],
  Id = (n) => Mp.find(Cp(n));
function D0(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Oh(n) : !0;
}
const R0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function V0(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [l] = s.match(qa) || [];
  if (!l) return n;
  const c = s.replace(l, "");
  let d = R0.has(i) ? 1 : 0;
  return (l !== s && (d *= 100), i + "(" + d + c + ")");
}
const L0 = /\b([a-z-]*)\(.*?\)/gu,
  Na = {
    ...Lt,
    getAnimatableNone: (n) => {
      const i = n.match(L0);
      return i ? i.map(V0).join(" ") : n;
    },
  },
  _a = {
    ...Lt,
    getAnimatableNone: (n) => {
      const i = Lt.parse(n);
      return Lt.createTransformer(n)(
        i.map((l) => (typeof l == "number" ? 0 : typeof l == "object" ? { ...l, alpha: 1 } : l)),
      );
    },
  },
  jd = { ...vr, transform: Math.round },
  N0 = {
    rotate: Zt,
    pathRotation: Zt,
    rotateX: Zt,
    rotateY: Zt,
    rotateZ: Zt,
    scale: Ns,
    scaleX: Ns,
    scaleY: Ns,
    scaleZ: Ns,
    skew: Zt,
    skewX: Zt,
    skewY: Zt,
    distance: K,
    translateX: K,
    translateY: K,
    translateZ: K,
    x: K,
    y: K,
    z: K,
    perspective: K,
    transformPerspective: K,
    opacity: pi,
    originX: kd,
    originY: kd,
    originZ: K,
  },
  Xs = {
    borderWidth: K,
    borderTopWidth: K,
    borderRightWidth: K,
    borderBottomWidth: K,
    borderLeftWidth: K,
    borderRadius: K,
    borderTopLeftRadius: K,
    borderTopRightRadius: K,
    borderBottomRightRadius: K,
    borderBottomLeftRadius: K,
    width: K,
    maxWidth: K,
    height: K,
    maxHeight: K,
    top: K,
    right: K,
    bottom: K,
    left: K,
    inset: K,
    insetBlock: K,
    insetBlockStart: K,
    insetBlockEnd: K,
    insetInline: K,
    insetInlineStart: K,
    insetInlineEnd: K,
    padding: K,
    paddingTop: K,
    paddingRight: K,
    paddingBottom: K,
    paddingLeft: K,
    paddingBlock: K,
    paddingBlockStart: K,
    paddingBlockEnd: K,
    paddingInline: K,
    paddingInlineStart: K,
    paddingInlineEnd: K,
    margin: K,
    marginTop: K,
    marginRight: K,
    marginBottom: K,
    marginLeft: K,
    marginBlock: K,
    marginBlockStart: K,
    marginBlockEnd: K,
    marginInline: K,
    marginInlineStart: K,
    marginInlineEnd: K,
    fontSize: K,
    backgroundPositionX: K,
    backgroundPositionY: K,
    ...N0,
    zIndex: jd,
    fillOpacity: pi,
    strokeOpacity: pi,
    numOctaves: jd,
  },
  _0 = {
    ...Xs,
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
    filter: Na,
    WebkitFilter: Na,
    mask: _a,
    WebkitMask: _a,
  },
  Ap = (n) => _0[n],
  I0 = new Set([Na, _a]);
function Dp(n, i) {
  let s = Ap(n);
  return (I0.has(s) || (s = Lt), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0);
}
const j0 = new Set(["auto", "none", "0"]);
function F0(n, i, s) {
  let l = 0,
    c;
  for (; l < n.length && !c;) {
    const d = n[l];
    (typeof d == "string" && !j0.has(d) && yr(d).values.length && (c = n[l]), l++);
  }
  if (c && s) for (const d of i) n[d] = Dp(s, c);
}
class O0 extends nu {
  constructor(i, s, l, c, d) {
    super(i, s, l, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: l } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let y = 0; y < i.length; y++) {
      let w = i[y];
      if (typeof w == "string" && ((w = w.trim()), Za(w))) {
        const S = Sp(w, s.current);
        (S !== void 0 && (i[y] = S), y === i.length - 1 && (this.finalKeyframe = w));
      }
    }
    if ((this.resolveNoneKeyframes(), !kp.has(l) || i.length !== 2)) return;
    const [c, d] = i,
      f = Id(c),
      p = Id(d),
      m = Sd(c),
      g = Sd(d);
    if (m !== g && vn[l]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== p)
      if (Rd(f) && Rd(p))
        for (let y = 0; y < i.length; y++) {
          const w = i[y];
          typeof w == "string" && (i[y] = parseFloat(w));
        }
      else vn[l] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      l = [];
    for (let c = 0; c < i.length; c++) (i[c] === null || D0(i[c])) && l.push(c);
    l.length && F0(i, l, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: l } = this;
    if (!i || !i.current) return;
    (l === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = vn[l](i.measureViewportBox(), window.getComputedStyle(i.current))),
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
    ((l[d] = vn[s](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (p = this.removedTransforms) != null &&
        p.length &&
        this.removedTransforms.forEach(([m, g]) => {
          i.getValue(m).set(g);
        }),
      this.resolveNoneKeyframes());
  }
}
function Rp(n, i, s) {
  if (n == null) return [];
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    let l = document;
    const c = (s == null ? void 0 : s[n]) ?? l.querySelectorAll(n);
    return c ? Array.from(c) : [];
  }
  return Array.from(n).filter((l) => l != null);
}
const Ia = (n, i) => (i && typeof n == "number" ? i.transform(n) : n);
function z0(n) {
  return Fh(n) && "offsetHeight" in n && !("ownerSVGElement" in n);
}
const { schedule: lu } = qh(queueMicrotask, !1),
  Rt = { x: !1, y: !1 };
function Vp() {
  return Rt.x || Rt.y;
}
function B0(n) {
  return n === "x" || n === "y"
    ? Rt[n]
      ? null
      : ((Rt[n] = !0),
        () => {
          Rt[n] = !1;
        })
    : Rt.x || Rt.y
      ? null
      : ((Rt.x = Rt.y = !0),
        () => {
          Rt.x = Rt.y = !1;
        });
}
function Lp(n, i) {
  const s = Rp(n),
    l = new AbortController(),
    c = { passive: !0, ...i, signal: l.signal };
  return [s, c, () => l.abort()];
}
function U0(n) {
  return !(n.pointerType === "touch" || Vp());
}
function W0(n, i, s = {}) {
  const [l, c, d] = Lp(n, s);
  return (
    l.forEach((f) => {
      let p = !1,
        m = !1,
        g;
      const y = () => {
          f.removeEventListener("pointerleave", A);
        },
        w = (D) => {
          (g && (g(D), (g = void 0)), y());
        },
        S = (D) => {
          ((p = !1),
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            m && ((m = !1), w(D)));
        },
        C = () => {
          ((p = !0),
            window.addEventListener("pointerup", S, c),
            window.addEventListener("pointercancel", S, c));
        },
        A = (D) => {
          if (D.pointerType !== "touch") {
            if (p) {
              m = !0;
              return;
            }
            w(D);
          }
        },
        R = (D) => {
          if (!U0(D)) return;
          m = !1;
          const I = i(f, D);
          typeof I == "function" && ((g = I), f.addEventListener("pointerleave", A, c));
        };
      (f.addEventListener("pointerenter", R, c), f.addEventListener("pointerdown", C, c));
    }),
    d
  );
}
const Np = (n, i) => (i ? (n === i ? !0 : Np(n, i.parentElement)) : !1),
  au = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  H0 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function $0(n) {
  return H0.has(n.tagName) || n.isContentEditable === !0;
}
const K0 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function G0(n) {
  return K0.has(n.tagName) || n.isContentEditable === !0;
}
const Fs = new WeakSet();
function Fd(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function aa(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const Q0 = (n, i) => {
  const s = n.currentTarget;
  if (!s) return;
  const l = Fd(() => {
    if (Fs.has(s)) return;
    aa(s, "down");
    const c = Fd(() => {
        aa(s, "up");
      }),
      d = () => aa(s, "cancel");
    (s.addEventListener("keyup", c, i), s.addEventListener("blur", d, i));
  });
  (s.addEventListener("keydown", l, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", l), i));
};
function Od(n) {
  return au(n) && !Vp();
}
const zd = new WeakSet();
function X0(n, i, s = {}) {
  const [l, c, d] = Lp(n, s),
    f = (p) => {
      const m = p.currentTarget;
      if (!Od(p) || zd.has(p)) return;
      (Fs.add(m), s.stopPropagation && zd.add(p));
      const g = i(m, p),
        y = (C, A) => {
          (window.removeEventListener("pointerup", w),
            window.removeEventListener("pointercancel", S),
            Fs.has(m) && Fs.delete(m),
            Od(C) && typeof g == "function" && g(C, { success: A }));
        },
        w = (C) => {
          y(C, m === window || m === document || s.useGlobalTarget || Np(m, C.target));
        },
        S = (C) => {
          y(C, !1);
        };
      (window.addEventListener("pointerup", w, c), window.addEventListener("pointercancel", S, c));
    };
  return (
    l.forEach((p) => {
      ((s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        z0(p) &&
          (p.addEventListener("focus", (g) => Q0(g, c)),
          !$0(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0)));
    }),
    d
  );
}
function uu(n) {
  return Fh(n) && "ownerSVGElement" in n;
}
const Os = new WeakMap();
let gn;
const _p = (n, i, s) => (l, c) =>
    c && c[0] ? c[0][n + "Size"] : uu(l) && "getBBox" in l ? l.getBBox()[i] : l[s],
  Y0 = _p("inline", "width", "offsetWidth"),
  Z0 = _p("block", "height", "offsetHeight");
function q0({ target: n, borderBoxSize: i }) {
  var s;
  (s = Os.get(n)) == null ||
    s.forEach((l) => {
      l(n, {
        get width() {
          return Y0(n, i);
        },
        get height() {
          return Z0(n, i);
        },
      });
    });
}
function J0(n) {
  n.forEach(q0);
}
function b0() {
  typeof ResizeObserver > "u" || (gn = new ResizeObserver(J0));
}
function e1(n, i) {
  gn || b0();
  const s = Rp(n);
  return (
    s.forEach((l) => {
      let c = Os.get(l);
      (c || ((c = new Set()), Os.set(l, c)), c.add(i), gn == null || gn.observe(l));
    }),
    () => {
      s.forEach((l) => {
        const c = Os.get(l);
        (c == null || c.delete(i), (c != null && c.size) || gn == null || gn.unobserve(l));
      });
    }
  );
}
const zs = new Set();
let pr;
function t1() {
  ((pr = () => {
    const n = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    zs.forEach((i) => i(n));
  }),
    window.addEventListener("resize", pr));
}
function n1(n) {
  return (
    zs.add(n),
    pr || t1(),
    () => {
      (zs.delete(n),
        !zs.size &&
          typeof pr == "function" &&
          (window.removeEventListener("resize", pr), (pr = void 0)));
    }
  );
}
function Bd(n, i) {
  return typeof n == "function" ? n1(n) : e1(n, i);
}
function r1(n) {
  return uu(n) && n.tagName === "svg";
}
const i1 = [...Mp, Fe, Lt],
  s1 = (n) => i1.find(Cp(n)),
  Ud = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  mr = () => ({ x: Ud(), y: Ud() }),
  Wd = () => ({ min: 0, max: 0 }),
  Be = () => ({ x: Wd(), y: Wd() }),
  o1 = new WeakMap();
function eo(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function mi(n) {
  return typeof n == "string" || Array.isArray(n);
}
const cu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  fu = ["initial", ...cu];
function to(n) {
  return eo(n.animate) || fu.some((i) => mi(n[i]));
}
function Ip(n) {
  return !!(to(n) || n.variants);
}
function l1(n, i, s) {
  for (const l in i) {
    const c = i[l],
      d = s[l];
    if (Qe(c)) n.addValue(l, c);
    else if (Qe(d)) n.addValue(l, gr(c, { owner: n }));
    else if (d !== c)
      if (n.hasValue(l)) {
        const f = n.getValue(l);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = n.getStaticValue(l);
        n.addValue(l, gr(f !== void 0 ? f : c, { owner: n }));
      }
  }
  for (const l in s) i[l] === void 0 && n.removeValue(l);
  return i;
}
const ja = { current: null },
  jp = { current: !1 },
  a1 = typeof window < "u";
function u1() {
  if (((jp.current = !0), !!a1))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (ja.current = n.matches);
      (n.addEventListener("change", i), i());
    } else ja.current = !1;
}
const Hd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Ys = {};
function Fp(n) {
  Ys = n;
}
function c1() {
  return Ys;
}
class f1 {
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
      (this.KeyframeResolver = nu),
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
          ((this.renderScheduledAt = C), ye.render(this.render, !1, !0));
      }));
    const { latestValues: g, renderState: y } = p;
    ((this.latestValues = g),
      (this.baseTarget = { ...g }),
      (this.initialValues = s.initial ? { ...g } : {}),
      (this.renderState = y),
      (this.parent = i),
      (this.props = s),
      (this.presenceContext = l),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = d),
      (this.options = m),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = to(s)),
      (this.isVariantNode = Ip(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: w, ...S } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const C in S) {
      const A = S[C];
      g[C] !== void 0 && Qe(A) && A.set(g[C]);
    }
  }
  mount(i) {
    var s, l;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        ((s = this.values.get(c)) == null || s.jump(this.initialValues[c]),
          (this.latestValues[c] = this.initialValues[c]));
    ((this.current = i),
      o1.set(i, this),
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
          : (jp.current || u1(), (this.shouldReduceMotion = ja.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (l = this.parent) == null || l.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var i;
    (this.projection && this.projection.unmount(),
      xn(this.notifyUpdate),
      xn(this.render),
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
      s.accelerate && vp.has(i) && this.current instanceof HTMLElement)
    ) {
      const { factory: f, keyframes: p, times: m, ease: g, duration: y } = s.accelerate,
        w = new yp({
          element: this.current,
          name: i,
          keyframes: p,
          times: m,
          ease: g,
          duration: ht(y),
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
        this.props.onUpdate && ye.preRender(this.notifyUpdate),
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
    for (i in Ys) {
      const s = Ys[i];
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
    for (let l = 0; l < Hd.length; l++) {
      const c = Hd[l];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = l1(
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
        ((l = gr(s === null ? void 0 : s, { owner: this })), this.addValue(i, l)),
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
        (typeof l == "string" && (jh(l) || Oh(l))
          ? (l = parseFloat(l))
          : !s1(l) && Lt.test(s) && (l = Dp(i, s)),
        this.setBaseTarget(i, Qe(l) ? l.get() : l)),
      Qe(l) ? l.get() : l
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
      const f = su(this.props, s, (d = this.presenceContext) == null ? void 0 : d.custom);
      f && (l = f[i]);
    }
    if (s && l !== void 0) return l;
    const c = this.getBaseTargetFromProps(this.props, i);
    return c !== void 0 && !Qe(c)
      ? c
      : this.initialValues[i] !== void 0 && l === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, s) {
    return (this.events[i] || (this.events[i] = new Qa()), this.events[i].add(s));
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
  scheduleRenderMicrotask() {
    lu.render(this.render);
  }
}
class Op extends f1 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = O0));
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
    Qe(i) &&
      (this.childSubscription = i.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
class Sn {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
function zp({ top: n, left: i, right: s, bottom: l }) {
  return { x: { min: i, max: s }, y: { min: n, max: l } };
}
function d1({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function h1(n, i) {
  if (!i) return n;
  const s = i({ x: n.left, y: n.top }),
    l = i({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: l.y, right: l.x };
}
function ua(n) {
  return n === void 0 || n === 1;
}
function Fa({ scale: n, scaleX: i, scaleY: s }) {
  return !ua(n) || !ua(i) || !ua(s);
}
function jn(n) {
  return Fa(n) || Bp(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Bp(n) {
  return $d(n.x) || $d(n.y);
}
function $d(n) {
  return n && n !== "0%";
}
function Zs(n, i, s) {
  const l = n - s,
    c = i * l;
  return s + c;
}
function Kd(n, i, s, l, c) {
  return (c !== void 0 && (n = Zs(n, c, l)), Zs(n, s, l) + i);
}
function Oa(n, i = 0, s = 1, l, c) {
  ((n.min = Kd(n.min, i, s, l, c)), (n.max = Kd(n.max, i, s, l, c)));
}
function Up(n, { x: i, y: s }) {
  (Oa(n.x, i.translate, i.scale, i.originPoint), Oa(n.y, s.translate, s.scale, s.originPoint));
}
const Gd = 0.999999999999,
  Qd = 1.0000000000001;
function p1(n, i, s, l = !1) {
  var p;
  const c = s.length;
  if (!c) return;
  i.x = i.y = 1;
  let d, f;
  for (let m = 0; m < c; m++) {
    ((d = s[m]), (f = d.projectionDelta));
    const { visualElement: g } = d.options;
    (g && g.props.style && g.props.style.display === "contents") ||
      (l &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        (zt(n.x, -d.scroll.offset.x), zt(n.y, -d.scroll.offset.y)),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Up(n, f)),
      l &&
        jn(d.latestValues) &&
        Bs(n, d.latestValues, (p = d.layout) == null ? void 0 : p.layoutBox));
  }
  (i.x < Qd && i.x > Gd && (i.x = 1), i.y < Qd && i.y > Gd && (i.y = 1));
}
function zt(n, i) {
  ((n.min += i), (n.max += i));
}
function Xd(n, i, s, l, c = 0.5) {
  const d = me(n.min, n.max, c);
  Oa(n, i, s, d, l);
}
function Yd(n, i) {
  return typeof n == "string" ? (parseFloat(n) / 100) * (i.max - i.min) : n;
}
function Bs(n, i, s) {
  const l = s ?? n;
  (Xd(n.x, Yd(i.x, l.x), i.scaleX, i.scale, i.originX),
    Xd(n.y, Yd(i.y, l.y), i.scaleY, i.scale, i.originY));
}
function Wp(n, i) {
  return zp(h1(n.getBoundingClientRect(), i));
}
function m1(n, i, s) {
  const l = Wp(n, s),
    { scroll: c } = i;
  return (c && (zt(l.x, c.offset.x), zt(l.y, c.offset.y)), l);
}
const y1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  g1 = wr.length;
function v1(n, i, s) {
  let l = "",
    c = !0;
  for (let f = 0; f < g1; f++) {
    const p = wr[f],
      m = n[p];
    if (m === void 0) continue;
    let g = !0;
    if (typeof m == "number") g = m === (p.startsWith("scale") ? 1 : 0);
    else {
      const y = parseFloat(m);
      g = p.startsWith("scale") ? y === 1 : y === 0;
    }
    if (!g || s) {
      const y = Ia(m, Xs[p]);
      if (!g) {
        c = !1;
        const w = y1[p] || p;
        l += `${w}(${y}) `;
      }
      s && (i[p] = y);
    }
  }
  const d = n.pathRotation;
  return (
    d && ((c = !1), (l += `rotate(${Ia(d, Xs.pathRotation)}) `)),
    (l = l.trim()),
    s ? (l = s(i, c ? "" : l)) : c && (l = "none"),
    l
  );
}
function du(n, i, s) {
  const { style: l, vars: c, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const g = i[m];
    if (xr.has(m)) {
      f = !0;
      continue;
    } else if (bh(m)) {
      c[m] = g;
      continue;
    } else {
      const y = Ia(g, Xs[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = y)) : (l[m] = y);
    }
  }
  if (
    (i.transform ||
      (f || s ? (l.transform = v1(i, n.transform, s)) : l.transform && (l.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: g = "50%", originZ: y = 0 } = d;
    l.transformOrigin = `${m} ${g} ${y}`;
  }
}
function Hp(n, { style: i, vars: s }, l, c) {
  const d = n.style;
  let f;
  for (f in i) d[f] = i[f];
  c == null || c.applyProjectionStyles(d, l);
  for (f in s) d.setProperty(f, s[f]);
}
function Zd(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const li = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (K.test(n)) n = parseFloat(n);
        else return n;
      const s = Zd(n, i.target.x),
        l = Zd(n, i.target.y);
      return `${s}% ${l}%`;
    },
  },
  w1 = {
    correct: (n, { treeScale: i, projectionDelta: s }) => {
      const l = n,
        c = Lt.parse(n);
      if (c.length > 5) return l;
      const d = Lt.createTransformer(n),
        f = typeof c[0] != "number" ? 1 : 0,
        p = s.x.scale * i.x,
        m = s.y.scale * i.y;
      ((c[0 + f] /= p), (c[1 + f] /= m));
      const g = me(p, m, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= g),
        typeof c[3 + f] == "number" && (c[3 + f] /= g),
        d(c)
      );
    },
  },
  za = {
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
    boxShadow: w1,
  };
function $p(n, { layout: i, layoutId: s }) {
  return (
    xr.has(n) || n.startsWith("origin") || ((i || s !== void 0) && (!!za[n] || n === "opacity"))
  );
}
function hu(n, i, s) {
  var f;
  const l = n.style,
    c = i == null ? void 0 : i.style,
    d = {};
  if (!l) return d;
  for (const p in l)
    (Qe(l[p]) ||
      (c && Qe(c[p])) ||
      $p(p, n) ||
      ((f = s == null ? void 0 : s.getValue(p)) == null ? void 0 : f.liveStyle) !== void 0) &&
      (d[p] = l[p]);
  return d;
}
function x1(n) {
  return window.getComputedStyle(n);
}
class S1 extends Op {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Hp));
  }
  readValueFromInstance(i, s) {
    var l;
    if (xr.has(s)) return (l = this.projection) != null && l.isProjecting ? Pa(s) : Bv(i, s);
    {
      const c = x1(i),
        d = (bh(s) ? c.getPropertyValue(s) : c[s]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return Wp(i, s);
  }
  build(i, s, l) {
    du(i, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return hu(i, s, l);
  }
}
const k1 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  T1 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function P1(n, i, s = 1, l = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? k1 : T1;
  ((n[d.offset] = `${-l}`), (n[d.array] = `${i} ${s}`));
}
const E1 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Kp(
  n,
  { attrX: i, attrY: s, attrScale: l, pathLength: c, pathSpacing: d = 1, pathOffset: f = 0, ...p },
  m,
  g,
  y,
) {
  if ((du(n, p, g), m)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: w, style: S } = n;
  (w.transform && ((S.transform = w.transform), delete w.transform),
    (S.transform || w.transformOrigin) &&
      ((S.transformOrigin = w.transformOrigin ?? "50% 50%"), delete w.transformOrigin),
    S.transform &&
      ((S.transformBox = (y == null ? void 0 : y.transformBox) ?? "fill-box"),
      delete w.transformBox));
  for (const C of E1) w[C] !== void 0 && ((S[C] = w[C]), delete w[C]);
  (i !== void 0 && (w.x = i),
    s !== void 0 && (w.y = s),
    l !== void 0 && (w.scale = l),
    c !== void 0 && P1(w, c, d, f, !1));
}
const Gp = new Set([
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
  Qp = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function C1(n, i, s, l) {
  Hp(n, i, void 0, l);
  for (const c in i.attrs) n.setAttribute(Gp.has(c) ? c : ou(c), i.attrs[c]);
}
function Xp(n, i, s) {
  const l = hu(n, i, s);
  for (const c in n)
    if (Qe(n[c]) || Qe(i[c])) {
      const d = wr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      l[d] = n[c];
    }
  return l;
}
class M1 extends Op {
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
      const l = Ap(s);
      return (l && l.default) || 0;
    }
    return ((s = Gp.has(s) ? s : ou(s)), i.getAttribute(s));
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return Xp(i, s, l);
  }
  build(i, s, l) {
    Kp(i, s, this.isSVGTag, l.transformTemplate, l.style);
  }
  renderInstance(i, s, l, c) {
    C1(i, s, l, c);
  }
  mount(i) {
    ((this.isSVGTag = Qp(i.tagName)), super.mount(i));
  }
}
const A1 = fu.length;
function Yp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? Yp(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const i = {};
  for (let s = 0; s < A1; s++) {
    const l = fu[s],
      c = n.props[l];
    (mi(c) || c === !1) && (i[l] = c);
  }
  return i;
}
function Zp(n, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== n.length) return !1;
  for (let l = 0; l < s; l++) if (i[l] !== n[l]) return !1;
  return !0;
}
const D1 = [...cu].reverse(),
  R1 = cu.length;
function V1(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: l }) => M0(n, s, l)));
}
function L1(n) {
  let i = V1(n),
    s = qd(),
    l = !0,
    c = !1;
  const d = (g) => (y, w) => {
    var C;
    const S = Bn(
      n,
      w,
      g === "exit" ? ((C = n.presenceContext) == null ? void 0 : C.custom) : void 0,
    );
    if (S) {
      const { transition: A, transitionEnd: R, ...D } = S;
      y = { ...y, ...D, ...R };
    }
    return y;
  };
  function f(g) {
    i = g(n);
  }
  function p(g) {
    const { props: y } = n,
      w = Yp(n.parent) || {},
      S = [],
      C = new Set();
    let A = {},
      R = 1 / 0;
    for (let I = 0; I < R1; I++) {
      const z = D1[I],
        O = s[z],
        B = y[z] !== void 0 ? y[z] : w[z],
        Z = mi(B),
        ie = z === g ? O.isActive : null;
      ie === !1 && (R = I);
      let re = B === w[z] && B !== y[z] && Z;
      if (
        (re && (l || c) && n.manuallyAnimateOnMount && (re = !1),
        (O.protectedKeys = { ...A }),
        (!O.isActive && ie === null) || (!B && !O.prevProp) || eo(B) || typeof B == "boolean")
      )
        continue;
      if (z === "exit" && O.isActive && ie !== !0) {
        O.prevResolvedValues && (A = { ...A, ...O.prevResolvedValues });
        continue;
      }
      const Y = N1(O.prevProp, B);
      let ge = Y || (z === g && O.isActive && !re && Z) || (I > R && Z),
        q = !1;
      const pe = Array.isArray(B) ? B : [B];
      let xe = pe.reduce(d(z), {});
      ie === !1 && (xe = {});
      const { prevResolvedValues: Le = {} } = O,
        De = { ...Le, ...xe },
        Ie = (j) => {
          ((ge = !0), C.has(j) && ((q = !0), C.delete(j)), (O.needsAnimating[j] = !0));
          const G = n.getValue(j);
          G && (G.liveStyle = !1);
        };
      for (const j in De) {
        const G = xe[j],
          U = Le[j];
        if (A.hasOwnProperty(j)) continue;
        let T = !1;
        (Ra(G) && Ra(U) ? (T = !Zp(G, U) || Y) : (T = G !== U),
          T
            ? G != null
              ? Ie(j)
              : C.add(j)
            : G !== void 0 && C.has(j)
              ? Ie(j)
              : (O.protectedKeys[j] = !0));
      }
      ((O.prevProp = B),
        (O.prevResolvedValues = xe),
        O.isActive && (A = { ...A, ...xe }),
        (l || c) && n.blockInitialAnimation && (ge = !1));
      const Se = re && Y;
      ge &&
        (!Se || q) &&
        S.push(
          ...pe.map((j) => {
            const G = { type: z };
            if (typeof j == "string" && (l || c) && !Se && n.manuallyAnimateOnMount && n.parent) {
              const { parent: U } = n,
                T = Bn(U, j);
              if (U.enteringChildren && T) {
                const { delayChildren: V } = T.transition || {};
                G.delay = wp(U.enteringChildren, n, V);
              }
            }
            return { animation: j, options: G };
          }),
        );
    }
    if (C.size) {
      const I = {};
      if (typeof y.initial != "boolean") {
        const z = Bn(n, Array.isArray(y.initial) ? y.initial[0] : y.initial);
        z && z.transition && (I.transition = z.transition);
      }
      (C.forEach((z) => {
        const O = n.getBaseTarget(z),
          B = n.getValue(z);
        (B && (B.liveStyle = !0), (I[z] = O ?? null));
      }),
        S.push({ animation: I }));
    }
    let D = !!S.length;
    return (
      l && (y.initial === !1 || y.initial === y.animate) && !n.manuallyAnimateOnMount && (D = !1),
      (l = !1),
      (c = !1),
      D ? i(S) : Promise.resolve()
    );
  }
  function m(g, y) {
    var S;
    if (s[g].isActive === y) return Promise.resolve();
    ((S = n.variantChildren) == null ||
      S.forEach((C) => {
        var A;
        return (A = C.animationState) == null ? void 0 : A.setActive(g, y);
      }),
      (s[g].isActive = y));
    const w = p(g);
    for (const C in s) s[C].protectedKeys = {};
    return w;
  }
  return {
    animateChanges: p,
    setActive: m,
    setAnimateFunction: f,
    getState: () => s,
    reset: () => {
      ((s = qd()), (c = !0));
    },
  };
}
function N1(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !Zp(i, n) : !1;
}
function In(n = !1) {
  return { isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function qd() {
  return {
    animate: In(!0),
    whileInView: In(),
    whileHover: In(),
    whileTap: In(),
    whileDrag: In(),
    whileFocus: In(),
    exit: In(),
  };
}
function Ba(n, i) {
  ((n.min = i.min), (n.max = i.max));
}
function Dt(n, i) {
  (Ba(n.x, i.x), Ba(n.y, i.y));
}
function Jd(n, i) {
  ((n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin));
}
const qp = 1e-4,
  _1 = 1 - qp,
  I1 = 1 + qp,
  Jp = 0.01,
  j1 = 0 - Jp,
  F1 = 0 + Jp;
function tt(n) {
  return n.max - n.min;
}
function O1(n, i, s) {
  return Math.abs(n - i) <= s;
}
function bd(n, i, s, l = 0.5) {
  ((n.origin = l),
    (n.originPoint = me(i.min, i.max, n.origin)),
    (n.scale = tt(s) / tt(i)),
    (n.translate = me(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= _1 && n.scale <= I1) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= j1 && n.translate <= F1) || isNaN(n.translate)) && (n.translate = 0));
}
function fi(n, i, s, l) {
  (bd(n.x, i.x, s.x, l ? l.originX : void 0), bd(n.y, i.y, s.y, l ? l.originY : void 0));
}
function eh(n, i, s, l = 0) {
  const c = l ? me(s.min, s.max, l) : s.min;
  ((n.min = c + i.min), (n.max = n.min + tt(i)));
}
function z1(n, i, s, l) {
  (eh(n.x, i.x, s.x, l == null ? void 0 : l.x), eh(n.y, i.y, s.y, l == null ? void 0 : l.y));
}
function th(n, i, s, l = 0) {
  const c = l ? me(s.min, s.max, l) : s.min;
  ((n.min = i.min - c), (n.max = n.min + tt(i)));
}
function qs(n, i, s, l) {
  (th(n.x, i.x, s.x, l == null ? void 0 : l.x), th(n.y, i.y, s.y, l == null ? void 0 : l.y));
}
function nh(n, i, s, l, c) {
  return ((n -= i), (n = Zs(n, 1 / s, l)), c !== void 0 && (n = Zs(n, 1 / c, l)), n);
}
function B1(n, i = 0, s = 1, l = 0.5, c, d = n, f = n) {
  if (
    (Bt.test(i) && ((i = parseFloat(i)), (i = me(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = me(d.min, d.max, l);
  (n === d && (p -= i), (n.min = nh(n.min, i, s, p, c)), (n.max = nh(n.max, i, s, p, c)));
}
function rh(n, i, [s, l, c], d, f) {
  B1(n, i[s], i[l], i[c], i.scale, d, f);
}
const U1 = ["x", "scaleX", "originX"],
  W1 = ["y", "scaleY", "originY"];
function ih(n, i, s, l) {
  (rh(n.x, i, U1, s ? s.x : void 0, l ? l.x : void 0),
    rh(n.y, i, W1, s ? s.y : void 0, l ? l.y : void 0));
}
function sh(n) {
  return n.translate === 0 && n.scale === 1;
}
function bp(n) {
  return sh(n.x) && sh(n.y);
}
function oh(n, i) {
  return n.min === i.min && n.max === i.max;
}
function H1(n, i) {
  return oh(n.x, i.x) && oh(n.y, i.y);
}
function lh(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function em(n, i) {
  return lh(n.x, i.x) && lh(n.y, i.y);
}
function ah(n) {
  return tt(n.x) / tt(n.y);
}
function uh(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
function Ot(n) {
  return [n("x"), n("y")];
}
function $1(n, i, s) {
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
      transformPerspective: g,
      rotate: y,
      pathRotation: w,
      rotateX: S,
      rotateY: C,
      skewX: A,
      skewY: R,
    } = s;
    (g && (l = `perspective(${g}px) ${l}`),
      y && (l += `rotate(${y}deg) `),
      w && (l += `rotate(${w}deg) `),
      S && (l += `rotateX(${S}deg) `),
      C && (l += `rotateY(${C}deg) `),
      A && (l += `skewX(${A}deg) `),
      R && (l += `skewY(${R}deg) `));
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return ((p !== 1 || m !== 1) && (l += `scale(${p}, ${m})`), l || "none");
}
const tm = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  K1 = tm.length,
  ch = (n) => (typeof n == "string" ? parseFloat(n) : n),
  fh = (n) => typeof n == "number" || K.test(n);
function G1(n, i, s, l, c, d) {
  c
    ? ((n.opacity = me(0, s.opacity ?? 1, Q1(l))), (n.opacityExit = me(i.opacity ?? 1, 0, X1(l))))
    : d && (n.opacity = me(i.opacity ?? 1, s.opacity ?? 1, l));
  for (let f = 0; f < K1; f++) {
    const p = tm[f];
    let m = dh(i, p),
      g = dh(s, p);
    if (m === void 0 && g === void 0) continue;
    (m || (m = 0),
      g || (g = 0),
      m === 0 || g === 0 || fh(m) === fh(g)
        ? ((n[p] = Math.max(me(ch(m), ch(g), l), 0)), (Bt.test(g) || Bt.test(m)) && (n[p] += "%"))
        : (n[p] = g));
  }
  (i.rotate || s.rotate) && (n.rotate = me(i.rotate || 0, s.rotate || 0, l));
}
function dh(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const Q1 = nm(0, 0.5, Qh),
  X1 = nm(0.5, 0.95, St);
function nm(n, i, s) {
  return (l) => (l < n ? 0 : l > i ? 1 : s(hi(n, i, l)));
}
function Y1(n, i, s) {
  const l = Qe(n) ? n : gr(n);
  return (l.start(iu("", l, i, s)), l.animation);
}
function yi(n, i, s, l = { passive: !0 }) {
  return (n.addEventListener(i, s, l), () => n.removeEventListener(i, s));
}
const Z1 = (n, i) => n.depth - i.depth;
class q1 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (Ka(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (Hs(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(Z1), (this.isDirty = !1), this.children.forEach(i));
  }
}
function J1(n, i) {
  const s = et.now(),
    l = ({ timestamp: c }) => {
      const d = c - s;
      d >= i && (xn(l), n(d - i));
    };
  return (ye.setup(l, !0), () => xn(l));
}
function Us(n) {
  return Qe(n) ? n.get() : n;
}
class b1 {
  constructor() {
    this.members = [];
  }
  add(i) {
    Ka(this.members, i);
    for (let s = this.members.length - 1; s >= 0; s--) {
      const l = this.members[s];
      if (l === i || l === this.lead || l === this.prevLead) continue;
      const c = l.instance;
      (!c || c.isConnected === !1) && !l.snapshot && (Hs(this.members, l), l.unmount());
    }
    i.scheduleRender();
  }
  remove(i) {
    if ((Hs(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead)) {
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
const Ws = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  ca = ["", "X", "Y", "Z"],
  ew = 1e3;
let tw = 0;
function fa(n, i, s, l) {
  const { latestValues: c } = i;
  c[n] && ((s[n] = c[n]), i.setStaticValue(n, 0), l && (l[n] = 0));
}
function rm(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const s = Pp(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", ye, !(c || d));
  }
  const { parent: l } = n;
  l && !l.hasCheckedOptimisedAppear && rm(l);
}
function im({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: l,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, p = i == null ? void 0 : i()) {
      ((this.id = tw++),
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
            this.nodes.forEach(iw),
            this.nodes.forEach(cw),
            this.nodes.forEach(fw),
            this.nodes.forEach(sw));
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
      this.root === this && (this.nodes = new q1());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Qa()),
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
      ((this.isSVG = uu(f) && !r1(f)), (this.instance = f));
      const { layoutId: p, layout: m, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (m || p) && (this.isLayoutDirty = !0),
        n)
      ) {
        let y,
          w = 0;
        const S = () => (this.root.updateBlockedByResize = !1);
        (ye.read(() => {
          w = window.innerWidth;
        }),
          n(f, () => {
            const C = window.innerWidth;
            C !== w &&
              ((w = C),
              (this.root.updateBlockedByResize = !0),
              y && y(),
              (y = J1(S, 250)),
              Ws.hasAnimatedSinceResize &&
                ((Ws.hasAnimatedSinceResize = !1), this.nodes.forEach(mh)));
          }));
      }
      (p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          g &&
          (p || m) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: y, hasLayoutChanged: w, hasRelativeLayoutChanged: S, layout: C }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const A = this.options.transition || g.getDefaultTransition() || yw,
                { onLayoutAnimationStart: R, onLayoutAnimationComplete: D } = g.getProps(),
                I = !this.targetLayout || !em(this.targetLayout, C),
                z = !w && S;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                z ||
                (w && (I || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const O = { ...ru(A, "layout"), onPlay: R, onComplete: D };
                ((g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((O.delay = 0), (O.type = !1)),
                  this.startAnimation(O),
                  this.setAnimationOrigin(y, z, O.path));
              } else
                (w || mh(this),
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
        xn(this.updateProjection));
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(dw), this.animationId++);
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
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && rm(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let y = 0; y < this.path.length; y++) {
        const w = this.path[y];
        ((w.shouldResetTransform = !0),
          (typeof w.latestValues.x == "string" || typeof w.latestValues.y == "string") &&
            (w.isLayoutDirty = !0),
          w.updateScroll("snapshot"),
          w.options.layoutRoot && w.willUpdate(!1));
      }
      const { layoutId: p, layout: m } = this.options;
      if (p === void 0 && !m) return;
      const g = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const m = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          m && this.nodes.forEach(lw),
          this.nodes.forEach(hh));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ph);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(aw),
            this.nodes.forEach(uw),
            this.nodes.forEach(nw),
            this.nodes.forEach(rw))
          : this.nodes.forEach(ph),
        this.clearAllSnapshots());
      const p = et.now();
      ((Ge.delta = Ut(0, 1e3 / 60, p - Ge.timestamp)),
        (Ge.timestamp = p),
        (Ge.isProcessing = !0),
        na.update.process(Ge),
        na.preRender.process(Ge),
        na.render.process(Ge),
        (Ge.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), lu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(ow), this.sharedNodes.forEach(hw));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), ye.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ye.postRender(() => {
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
        p = this.projectionDelta && !bp(this.projectionDelta),
        m = this.getTransformTemplate(),
        g = m ? m(this.latestValues, "") : void 0,
        y = g !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (p || jn(this.latestValues) || y) &&
        (c(this.instance, g), (this.shouldResetTransform = !1), this.scheduleRender());
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
      var g;
      const { visualElement: f } = this.options;
      if (!f) return Be();
      const p = f.measureViewportBox();
      if (!(((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(vw))) {
        const { scroll: y } = this.root;
        y && (zt(p.x, y.offset.x), zt(p.y, y.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      var m;
      const p = Be();
      if ((Dt(p, f), (m = this.scroll) != null && m.wasRoot)) return p;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g],
          { scroll: w, options: S } = y;
        y !== this.root &&
          w &&
          S.layoutScroll &&
          (w.wasRoot && Dt(p, f), zt(p.x, w.offset.x), zt(p.y, w.offset.y));
      }
      return p;
    }
    applyTransform(f, p = !1, m) {
      var y, w;
      const g = m || Be();
      Dt(g, f);
      for (let S = 0; S < this.path.length; S++) {
        const C = this.path[S];
        (!p &&
          C.options.layoutScroll &&
          C.scroll &&
          C !== C.root &&
          (zt(g.x, -C.scroll.offset.x), zt(g.y, -C.scroll.offset.y)),
          jn(C.latestValues) &&
            Bs(g, C.latestValues, (y = C.layout) == null ? void 0 : y.layoutBox));
      }
      return (
        jn(this.latestValues) &&
          Bs(g, this.latestValues, (w = this.layout) == null ? void 0 : w.layoutBox),
        g
      );
    }
    removeTransform(f) {
      var m;
      const p = Be();
      Dt(p, f);
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        if (!jn(y.latestValues)) continue;
        let w;
        (y.instance &&
          (Fa(y.latestValues) && y.updateSnapshot(), (w = Be()), Dt(w, y.measurePageBox())),
          ih(p, y.latestValues, (m = y.snapshot) == null ? void 0 : m.layoutBox, w));
      }
      return (jn(this.latestValues) && ih(p, this.latestValues), p);
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
      const { layout: y, layoutId: w } = this.options;
      if (!this.layout || !(y || w)) return;
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
              z1(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Dt(this.target, this.layout.layoutBox),
                Up(this.target, this.targetDelta))
              : Dt(this.target, this.layout.layoutBox),
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
      if (!(!this.parent || Fa(this.parent.latestValues) || Bp(this.parent.latestValues)))
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
        qs(this.relativeTargetOrigin, p, m, this.options.layoutAnchor || void 0),
        Dt(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var A;
      const f = this.getLead(),
        p = !!this.resumingFrom || this !== f;
      let m = !0;
      if (
        ((this.isProjectionDirty || ((A = this.parent) != null && A.isProjectionDirty)) && (m = !1),
        p && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
        this.resolvedRelativeTargetAt === Ge.timestamp && (m = !1),
        m)
      )
        return;
      const { layout: g, layoutId: y } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || y))
      )
        return;
      Dt(this.layoutCorrected, this.layout.layoutBox);
      const w = this.treeScale.x,
        S = this.treeScale.y;
      (p1(this.layoutCorrected, this.treeScale, this.path, p),
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
        : (Jd(this.prevProjectionDelta.x, this.projectionDelta.x),
          Jd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        fi(this.projectionDelta, this.layoutCorrected, C, this.latestValues),
        (this.treeScale.x !== w ||
          this.treeScale.y !== S ||
          !uh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !uh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
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
      const g = this.snapshot,
        y = g ? g.latestValues : {},
        w = { ...this.latestValues },
        S = mr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const C = Be(),
        A = g ? g.source : void 0,
        R = this.layout ? this.layout.source : void 0,
        D = A !== R,
        I = this.getStack(),
        z = !I || I.members.length <= 1,
        O = !!(D && !z && this.options.crossfade === !0 && !this.path.some(mw));
      this.animationProgress = 0;
      let B;
      const Z = m == null ? void 0 : m.interpolateProjection(f);
      ((this.mixTargetDelta = (ie) => {
        const re = ie / 1e3,
          Y = Z == null ? void 0 : Z(re);
        (Y
          ? ((S.x.translate = Y.x),
            (S.x.scale = me(f.x.scale, 1, re)),
            (S.x.origin = f.x.origin),
            (S.x.originPoint = f.x.originPoint),
            (S.y.translate = Y.y),
            (S.y.scale = me(f.y.scale, 1, re)),
            (S.y.origin = f.y.origin),
            (S.y.originPoint = f.y.originPoint))
          : (yh(S.x, f.x, re), yh(S.y, f.y, re)),
          this.setTargetDelta(S),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (qs(
              C,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            pw(this.relativeTarget, this.relativeTargetOrigin, C, re),
            B && H1(this.relativeTarget, B) && (this.isProjectionDirty = !1),
            B || (B = Be()),
            Dt(B, this.relativeTarget)),
          D && ((this.animationValues = w), G1(w, y, this.latestValues, re, O, z)),
          Y &&
            Y.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = w),
            (this.animationValues.pathRotation = Y.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = re));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      var p, m, g;
      (this.notifyListeners("animationStart"),
        (p = this.currentAnimation) == null || p.stop(),
        (g = (m = this.resumingFrom) == null ? void 0 : m.currentAnimation) == null || g.stop(),
        this.pendingAnimation && (xn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ye.update(() => {
          ((Ws.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = gr(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = Y1(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (y) => {
                (this.mixTargetDelta(y), f.onUpdate && f.onUpdate(y));
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
        (this.mixTargetDelta && this.mixTargetDelta(ew), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: p, target: m, layout: g, latestValues: y } = f;
      if (!(!p || !m || !g)) {
        if (
          this !== f &&
          this.layout &&
          g &&
          sm(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          m = this.target || Be();
          const w = tt(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + w));
          const S = tt(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + S));
        }
        (Dt(p, m), Bs(p, y), fi(this.projectionDeltaWithTransform, this.layoutCorrected, p, y));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new b1()),
        this.sharedNodes.get(f).add(p));
      const g = p.options.initialPromotionConfig;
      p.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity:
          g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(p) : void 0,
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
      const g = this.getStack();
      (g && g.promote(this, m),
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
      const g = {};
      m.z && fa("z", f, g, this.animationValues);
      for (let y = 0; y < ca.length; y++)
        (fa(`rotate${ca[y]}`, f, g, this.animationValues),
          fa(`skew${ca[y]}`, f, g, this.animationValues));
      f.render();
      for (const y in g)
        (f.setStaticValue(y, g[y]), this.animationValues && (this.animationValues[y] = g[y]));
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
          (f.pointerEvents = Us(p == null ? void 0 : p.pointerEvents) || ""),
          (f.transform = m ? m(this.latestValues, "") : "none"));
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        (this.options.layoutId &&
          ((f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (f.pointerEvents = Us(p == null ? void 0 : p.pointerEvents) || "")),
          this.hasProjected &&
            !jn(this.latestValues) &&
            ((f.transform = m ? m({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const y = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let w = $1(this.projectionDeltaWithTransform, this.treeScale, y);
      (m && (w = m(y, w)), (f.transform = w));
      const { x: S, y: C } = this.projectionDelta;
      ((f.transformOrigin = `${S.origin * 100}% ${C.origin * 100}% 0`),
        g.animationValues
          ? (f.opacity =
              g === this
                ? (y.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : y.opacityExit)
          : (f.opacity =
              g === this
                ? y.opacity !== void 0
                  ? y.opacity
                  : ""
                : y.opacityExit !== void 0
                  ? y.opacityExit
                  : 0));
      for (const A in za) {
        if (y[A] === void 0) continue;
        const { correct: R, applyTo: D, isCSSVariable: I } = za[A],
          z = w === "none" ? y[A] : R(y[A], g);
        if (D) {
          const O = D.length;
          for (let B = 0; B < O; B++) f[D[B]] = z;
        } else I ? (this.options.visualElement.renderState.vars[A] = z) : (f[A] = z);
      }
      this.options.layoutId &&
        (f.pointerEvents = g === this ? Us(p == null ? void 0 : p.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => {
        var p;
        return (p = f.currentAnimation) == null ? void 0 : p.stop();
      }),
        this.root.nodes.forEach(hh),
        this.root.sharedNodes.clear());
    }
  };
}
function nw(n) {
  n.updateLayout();
}
function rw(n) {
  var s;
  const i = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: c } = n.layout,
      { animationType: d } = n.options,
      f = i.source !== n.layout.source;
    if (d === "size")
      Ot((w) => {
        const S = f ? i.measuredBox[w] : i.layoutBox[w],
          C = tt(S);
        ((S.min = l[w].min), (S.max = S.min + C));
      });
    else if (d === "x" || d === "y") {
      const w = d === "x" ? "y" : "x";
      Ba(f ? i.measuredBox[w] : i.layoutBox[w], l[w]);
    } else
      sm(d, i.layoutBox, l) &&
        Ot((w) => {
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
    const g = !bp(p);
    let y = !1;
    if (!n.resumeFrom) {
      const w = n.getClosestProjectingParent();
      if (w && !w.resumeFrom) {
        const { snapshot: S, layout: C } = w;
        if (S && C) {
          const A = n.options.layoutAnchor || void 0,
            R = Be();
          qs(R, i.layoutBox, S.layoutBox, A);
          const D = Be();
          (qs(D, l, C.layoutBox, A),
            em(R, D) || (y = !0),
            w.options.layoutRoot &&
              ((n.relativeTarget = D), (n.relativeTargetOrigin = R), (n.relativeParent = w)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: l,
      snapshot: i,
      delta: m,
      layoutDelta: p,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: y,
    });
  } else if (n.isLead()) {
    const { onExitComplete: l } = n.options;
    l && l();
  }
  n.options.transition = void 0;
}
function iw(n) {
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
function sw(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function ow(n) {
  n.clearSnapshot();
}
function hh(n) {
  n.clearMeasurements();
}
function lw(n) {
  ((n.isLayoutDirty = !0), n.updateLayout());
}
function ph(n) {
  n.isLayoutDirty = !1;
}
function aw(n) {
  n.isAnimationBlocked &&
    n.layout &&
    !n.isLayoutDirty &&
    ((n.snapshot = n.layout), (n.isLayoutDirty = !0));
}
function uw(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function mh(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function cw(n) {
  n.resolveTargetDelta();
}
function fw(n) {
  n.calcProjection();
}
function dw(n) {
  n.resetSkewAndRotation();
}
function hw(n) {
  n.removeLeadSnapshot();
}
function yh(n, i, s) {
  ((n.translate = me(i.translate, 0, s)),
    (n.scale = me(i.scale, 1, s)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint));
}
function gh(n, i, s, l) {
  ((n.min = me(i.min, s.min, l)), (n.max = me(i.max, s.max, l)));
}
function pw(n, i, s, l) {
  (gh(n.x, i.x, s.x, l), gh(n.y, i.y, s.y, l));
}
function mw(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const yw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  vh = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  wh = vh("applewebkit/") && !vh("chrome/") ? Math.round : St;
function xh(n) {
  ((n.min = wh(n.min)), (n.max = wh(n.max)));
}
function gw(n) {
  (xh(n.x), xh(n.y));
}
function sm(n, i, s) {
  return n === "position" || (n === "preserve-aspect" && !O1(ah(i), ah(s), 0.2));
}
function vw(n) {
  var i;
  return n !== n.root && ((i = n.scroll) == null ? void 0 : i.wasRoot);
}
const ww = im({
    attachResizeListener: (n, i) => yi(n, "resize", i),
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
  da = { current: void 0 },
  om = im({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!da.current) {
        const n = new ww({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (da.current = n));
      }
      return da.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  lm = ee.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
function xw(n = !0) {
  const i = ee.useContext($a);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: l, register: c } = i,
    d = ee.useId();
  ee.useEffect(() => {
    if (n) return c(d);
  }, [n]);
  const f = ee.useCallback(() => n && l && l(d), [d, l, n]);
  return !s && l ? [!1, f] : [!0];
}
const am = ee.createContext({ strict: !1 }),
  Sh = {
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
let kh = !1;
function Sw() {
  if (kh) return;
  const n = {};
  for (const i in Sh) n[i] = { isEnabled: (s) => Sh[i].some((l) => !!s[l]) };
  (Fp(n), (kh = !0));
}
function um() {
  return (Sw(), c1());
}
function kw(n) {
  const i = um();
  for (const s in n) i[s] = { ...i[s], ...n[s] };
  Fp(i);
}
const Tw = new Set([
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
function Js(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    Tw.has(n)
  );
}
let cm = (n) => !Js(n);
function Pw(n) {
  typeof n == "function" && (cm = (i) => (i.startsWith("on") ? !Js(i) : n(i)));
}
try {
  Pw(require("@emotion/is-prop-valid").default);
} catch {}
function Ew(n, i, s) {
  const l = {};
  for (const c in n)
    (c === "values" && typeof n.values == "object") ||
      Qe(n[c]) ||
      ((cm(c) ||
        (s === !0 && Js(c)) ||
        (!i && !Js(c)) ||
        (n.draggable && c.startsWith("onDrag"))) &&
        (l[c] = n[c]));
  return l;
}
const no = ee.createContext({});
function Cw(n, i) {
  if (to(n)) {
    const { initial: s, animate: l } = n;
    return { initial: s === !1 || mi(s) ? s : void 0, animate: mi(l) ? l : void 0 };
  }
  return n.inherit !== !1 ? i : {};
}
function Mw(n) {
  const { initial: i, animate: s } = Cw(n, ee.useContext(no));
  return ee.useMemo(() => ({ initial: i, animate: s }), [Th(i), Th(s)]);
}
function Th(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const pu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function fm(n, i, s) {
  for (const l in i) !Qe(i[l]) && !$p(l, s) && (n[l] = i[l]);
}
function Aw({ transformTemplate: n }, i) {
  return ee.useMemo(() => {
    const s = pu();
    return (du(s, i, n), Object.assign({}, s.vars, s.style));
  }, [i]);
}
function Dw(n, i) {
  const s = n.style || {},
    l = {};
  return (fm(l, s, n), Object.assign(l, Aw(n, i)), l);
}
function Rw(n, i) {
  const s = {},
    l = Dw(n, i);
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
const dm = () => ({ ...pu(), attrs: {} });
function Vw(n, i, s, l) {
  const c = ee.useMemo(() => {
    const d = dm();
    return (Kp(d, i, Qp(l), n.transformTemplate, n.style), { ...d.attrs, style: { ...d.style } });
  }, [i]);
  if (n.style) {
    const d = {};
    (fm(d, n.style, n), (c.style = { ...d, ...c.style }));
  }
  return c;
}
const Lw = [
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
function mu(n) {
  return typeof n != "string" || n.includes("-") ? !1 : !!(Lw.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function Nw(n, i, s, { latestValues: l }, c, d = !1, f) {
  const m = ((f ?? mu(n)) ? Vw : Rw)(i, l, c, n),
    g = Ew(i, typeof n == "string", d),
    y = n !== ee.Fragment ? { ...g, ...m, ref: s } : {},
    { children: w } = i,
    S = ee.useMemo(() => (Qe(w) ? w.get() : w), [w]);
  return ee.createElement(n, { ...y, children: S });
}
function _w({ scrapeMotionValuesFromProps: n, createRenderState: i }, s, l, c) {
  return { latestValues: Iw(s, l, c, n), renderState: i() };
}
function Iw(n, i, s, l) {
  const c = {},
    d = l(n, {});
  for (const S in d) c[S] = Us(d[S]);
  let { initial: f, animate: p } = n;
  const m = to(n),
    g = Ip(n);
  i &&
    g &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let y = s ? s.initial === !1 : !1;
  y = y || f === !1;
  const w = y ? p : f;
  if (w && typeof w != "boolean" && !eo(w)) {
    const S = Array.isArray(w) ? w : [w];
    for (let C = 0; C < S.length; C++) {
      const A = su(n, S[C]);
      if (A) {
        const { transitionEnd: R, transition: D, ...I } = A;
        for (const z in I) {
          let O = I[z];
          if (Array.isArray(O)) {
            const B = y ? O.length - 1 : 0;
            O = O[B];
          }
          O !== null && (c[z] = O);
        }
        for (const z in R) c[z] = R[z];
      }
    }
  }
  return c;
}
const hm = (n) => (i, s) => {
    const l = ee.useContext(no),
      c = ee.useContext($a),
      d = () => _w(n, i, l, c);
    return s ? d() : Ng(d);
  },
  jw = hm({ scrapeMotionValuesFromProps: hu, createRenderState: pu }),
  Fw = hm({ scrapeMotionValuesFromProps: Xp, createRenderState: dm }),
  Ow = Symbol.for("motionComponentSymbol");
function zw(n, i, s) {
  const l = ee.useRef(s);
  ee.useInsertionEffect(() => {
    l.current = s;
  });
  const c = ee.useRef(null);
  return ee.useCallback(
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
const pm = ee.createContext({});
function dr(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function Bw(n, i, s, l, c, d) {
  var O, B;
  const { visualElement: f } = ee.useContext(no),
    p = ee.useContext(am),
    m = ee.useContext($a),
    g = ee.useContext(lm),
    y = g.reducedMotion,
    w = g.skipAnimations,
    S = ee.useRef(null),
    C = ee.useRef(!1);
  ((l = l || p.renderer),
    !S.current &&
      l &&
      ((S.current = l(n, {
        visualState: i,
        parent: f,
        props: s,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: y,
        skipAnimations: w,
        isSVG: d,
      })),
      C.current && S.current && (S.current.manuallyAnimateOnMount = !0)));
  const A = S.current,
    R = ee.useContext(pm);
  A && !A.projection && c && (A.type === "html" || A.type === "svg") && Uw(S.current, s, c, R);
  const D = ee.useRef(!1);
  ee.useInsertionEffect(() => {
    A && D.current && A.update(s, m);
  });
  const I = s[Tp],
    z = ee.useRef(
      !!I &&
        typeof window < "u" &&
        !((O = window.MotionHandoffIsComplete) != null && O.call(window, I)) &&
        ((B = window.MotionHasOptimisedAnimation) == null ? void 0 : B.call(window, I)),
    );
  return (
    Ig(() => {
      ((C.current = !0),
        A &&
          ((D.current = !0),
          (window.MotionIsMounted = !0),
          A.updateFeatures(),
          A.scheduleRenderMicrotask(),
          z.current && A.animationState && A.animationState.animateChanges()));
    }),
    ee.useEffect(() => {
      A &&
        (!z.current && A.animationState && A.animationState.animateChanges(),
        z.current &&
          (queueMicrotask(() => {
            var Z;
            (Z = window.MotionHandoffMarkAsComplete) == null || Z.call(window, I);
          }),
          (z.current = !1)),
        (A.enteringChildren = void 0));
    }),
    A
  );
}
function Uw(n, i, s, l) {
  const {
    layoutId: c,
    layout: d,
    drag: f,
    dragConstraints: p,
    layoutScroll: m,
    layoutRoot: g,
    layoutAnchor: y,
    layoutCrossfade: w,
  } = i;
  ((n.projection = new s(n.latestValues, i["data-framer-portal-id"] ? void 0 : mm(n.parent))),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (p && dr(p)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: l,
      crossfade: w,
      layoutScroll: m,
      layoutRoot: g,
      layoutAnchor: y,
    }));
}
function mm(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : mm(n.parent);
}
function ha(n, { forwardMotionProps: i = !1, type: s } = {}, l, c) {
  l && kw(l);
  const d = s ? s === "svg" : mu(n),
    f = d ? Fw : jw;
  function p(g, y) {
    let w;
    const S = { ...ee.useContext(lm), ...g, layoutId: Ww(g) },
      { isStatic: C } = S,
      A = Mw(g),
      R = f(g, C);
    if (!C && typeof window < "u") {
      Hw();
      const D = $w(S);
      ((w = D.MeasureLayout), (A.visualElement = Bw(n, R, S, c, D.ProjectionNode, d)));
    }
    return ne.jsxs(no.Provider, {
      value: A,
      children: [
        w && A.visualElement ? ne.jsx(w, { visualElement: A.visualElement, ...S }) : null,
        Nw(n, g, zw(R, A.visualElement, y), R, C, i, d),
      ],
    });
  }
  p.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const m = ee.forwardRef(p);
  return ((m[Ow] = n), m);
}
function Ww({ layoutId: n }) {
  const i = ee.useContext(Ih).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function Hw(n, i) {
  ee.useContext(am).strict;
}
function $w(n) {
  const i = um(),
    { drag: s, layout: l } = i;
  if (!s && !l) return {};
  const c = { ...s, ...l };
  return {
    MeasureLayout:
      (s != null && s.isEnabled(n)) || (l != null && l.isEnabled(n)) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function Kw(n, i) {
  if (typeof Proxy > "u") return ha;
  const s = new Map(),
    l = (d, f) => ha(d, f, n, i),
    c = (d, f) => l(d, f);
  return new Proxy(c, {
    get: (d, f) => (f === "create" ? l : (s.has(f) || s.set(f, ha(f, void 0, n, i)), s.get(f))),
  });
}
const Gw = (n, i) =>
  (i.isSVG ?? mu(n)) ? new M1(i) : new S1(i, { allowProjection: n !== ee.Fragment });
class Qw extends Sn {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = L1(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    eo(i) && (this.unmountControls = i.subscribe(this.node));
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
let Xw = 0;
class Yw extends Sn {
  constructor() {
    (super(...arguments), (this.id = Xw++), (this.isExitComplete = !1));
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
          const m = Bn(this.node, f, p);
          if (m) {
            const { transition: g, transitionEnd: y, ...w } = m;
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
const Zw = { animation: { Feature: Qw }, exit: { Feature: Yw } };
function xi(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const qw = (n) => (i) => au(i) && n(i, xi(i));
function di(n, i, s, l) {
  return yi(n, i, qw(s), l);
}
const ym = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Ph = (n, i) => Math.abs(n - i);
function Jw(n, i) {
  const s = Ph(n.x, i.x),
    l = Ph(n.y, i.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
const Eh = new Set(["auto", "scroll"]);
class gm {
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
        const C = pa(this.lastMoveEventInfo, this.history),
          A = this.startEvent !== null,
          R = Jw(C.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!A && !R) return;
        const { point: D } = C,
          { timestamp: I } = Ge;
        this.history.push({ ...D, timestamp: I });
        const { onStart: z, onMove: O } = this.handlers;
        (A || (z && z(this.lastMoveEvent, C), (this.startEvent = this.lastMoveEvent)),
          O && O(this.lastMoveEvent, C));
      }),
      (this.handlePointerMove = (C, A) => {
        ((this.lastMoveEvent = C),
          (this.lastRawMoveEventInfo = A),
          (this.lastMoveEventInfo = _s(A, this.transformPagePoint)),
          ye.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (C, A) => {
        this.end();
        const { onEnd: R, onSessionEnd: D, resumeAnimation: I } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && I && I(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const z = pa(
          C.type === "pointercancel" ? this.lastMoveEventInfo : _s(A, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && R && R(C, z), D && D(C, z));
      }),
      !au(i))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = l),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window));
    const m = xi(i),
      g = _s(m, this.transformPagePoint),
      { point: y } = g,
      { timestamp: w } = Ge;
    this.history = [{ ...y, timestamp: w }];
    const { onSessionStart: S } = s;
    (S && S(i, pa(g, this.history)),
      (this.removeListeners = gi(
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
      ((Eh.has(l.overflowX) || Eh.has(l.overflowY)) &&
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
      ye.update(this.updatePoint, !0));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      xn(this.updatePoint));
  }
}
function _s(n, i) {
  return i ? { point: i(n.point) } : n;
}
function Ch(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function pa({ point: n }, i) {
  return { point: n, delta: Ch(n, vm(i)), offset: Ch(n, bw(i)), velocity: ex(i, 0.1) };
}
function bw(n) {
  return n[0];
}
function vm(n) {
  return n[n.length - 1];
}
function ex(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    l = null;
  const c = vm(n);
  for (; s >= 0 && ((l = n[s]), !(c.timestamp - l.timestamp > ht(i)));) s--;
  if (!l) return { x: 0, y: 0 };
  l === n[0] && n.length > 2 && c.timestamp - l.timestamp > ht(i) * 2 && (l = n[1]);
  const d = xt(c.timestamp - l.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - l.x) / d, y: (c.y - l.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function tx(n, { min: i, max: s }, l) {
  return (
    i !== void 0 && n < i
      ? (n = l ? me(i, n, l.min) : Math.max(n, i))
      : s !== void 0 && n > s && (n = l ? me(s, n, l.max) : Math.min(n, s)),
    n
  );
}
function Mh(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  };
}
function nx(n, { top: i, left: s, bottom: l, right: c }) {
  return { x: Mh(n.x, s, c), y: Mh(n.y, i, l) };
}
function Ah(n, i) {
  let s = i.min - n.min,
    l = i.max - n.max;
  return (i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l });
}
function rx(n, i) {
  return { x: Ah(n.x, i.x), y: Ah(n.y, i.y) };
}
function ix(n, i) {
  let s = 0.5;
  const l = tt(n),
    c = tt(i);
  return (
    c > l ? (s = hi(i.min, i.max - l, n.min)) : l > c && (s = hi(n.min, n.max - c, i.min)),
    Ut(0, 1, s)
  );
}
function sx(n, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
  );
}
const Ua = 0.35;
function ox(n = Ua) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Ua),
    { x: Dh(n, "left", "right"), y: Dh(n, "top", "bottom") }
  );
}
function Dh(n, i, s) {
  return { min: Rh(n, i), max: Rh(n, s) };
}
function Rh(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const lx = new WeakMap();
class ax {
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
        const { drag: C, dragPropagation: A, onDragStart: R } = this.getProps();
        if (
          C &&
          !A &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = B0(C)),
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
          Ot((I) => {
            let z = this.getAxisMotionValue(I).get() || 0;
            if (Bt.test(z)) {
              const { projection: O } = this.visualElement;
              if (O && O.layout) {
                const B = O.layout.layoutBox[I];
                B && (z = tt(B) * (parseFloat(z) / 100));
              }
            }
            this.originPoint[I] = z;
          }),
          R && ye.update(() => R(w, S), !1, !0),
          Va(this.visualElement, "transform"));
        const { animationState: D } = this.visualElement;
        D && D.setActive("whileDrag", !0);
      },
      p = (w, S) => {
        ((this.latestPointerEvent = w), (this.latestPanInfo = S));
        const {
          dragPropagation: C,
          dragDirectionLock: A,
          onDirectionLock: R,
          onDrag: D,
        } = this.getProps();
        if (!C && !this.openDragLock) return;
        const { offset: I } = S;
        if (A && this.currentDirection === null) {
          ((this.currentDirection = cx(I)),
            this.currentDirection !== null && R && R(this.currentDirection));
          return;
        }
        (this.updateAxis("x", S.point, I),
          this.updateAxis("y", S.point, I),
          this.visualElement.render(),
          D && ye.update(() => D(w, S), !1, !0));
      },
      m = (w, S) => {
        ((this.latestPointerEvent = w),
          (this.latestPanInfo = S),
          this.stop(w, S),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      g = () => {
        const { dragSnapToOrigin: w } = this.getProps();
        (w || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new gm(
      i,
      { onSessionStart: d, onStart: f, onMove: p, onSessionEnd: m, resumeAnimation: g },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        distanceThreshold: l,
        contextWindow: ym(this.visualElement),
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
    p && ye.postRender(() => p(l, c));
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
    if (!l || !Is(i, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + l[i];
    (this.constraints && this.constraints[i] && (f = tx(f, this.constraints[i], this.elastic[i])),
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
        ? (this.constraints = nx(l.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = ox(s)),
      c !== this.constraints &&
        !dr(i) &&
        l &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ot((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = sx(l.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !dr(i)) return !1;
    const l = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    c.root && ((c.root.scroll = void 0), c.root.updateScroll());
    const d = m1(l, c.root, this.visualElement.getTransformPagePoint());
    let f = rx(c.layout.layoutBox, d);
    if (s) {
      const p = s(d1(f));
      ((this.hasMutatedConstraints = !!p), p && (f = zp(p)));
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
      g = Ot((y) => {
        if (!Is(y, s, this.currentDirection)) return;
        let w = (m && m[y]) || {};
        (f === !0 || f === y) && (w = { min: 0, max: 0 });
        const S = c ? 200 : 1e6,
          C = c ? 40 : 1e7,
          A = {
            type: "inertia",
            velocity: l ? i[y] : 0,
            bounceStiffness: S,
            bounceDamping: C,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...w,
          };
        return this.startAxisValueAnimation(y, A);
      });
    return Promise.all(g).then(p);
  }
  startAxisValueAnimation(i, s) {
    const l = this.getAxisMotionValue(i);
    return (Va(this.visualElement, i), l.start(iu(i, l, 0, s, this.visualElement, !1)));
  }
  stopAnimation() {
    Ot((i) => this.getAxisMotionValue(i).stop());
  }
  getAxisMotionValue(i) {
    const s = `_drag${i.toUpperCase()}`,
      c = this.visualElement.getProps()[s];
    return c || this.visualElement.getValue(i, this.visualElement.latestValues[i] ?? 0);
  }
  snapToCursor(i) {
    Ot((s) => {
      const { drag: l } = this.getProps();
      if (!Is(s, l, this.currentDirection)) return;
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
    Ot((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = ix({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Ot((f) => {
        if (!Is(f, i, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: g } = this.constraints[f];
        p.set(me(m, g, c[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    lx.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = di(i, "pointerdown", (g) => {
        const { drag: y, dragListener: w = !0 } = this.getProps(),
          S = g.target,
          C = S !== i && G0(S);
        y && w && !C && this.start(g);
      });
    let l;
    const c = () => {
        const { dragConstraints: g } = this.getProps();
        dr(g) &&
          g.current &&
          ((this.constraints = this.resolveRefConstraints()),
          l || (l = ux(i, g.current, () => this.scalePositionWithinConstraints())));
      },
      { projection: d } = this.visualElement,
      f = d.addEventListener("measure", c);
    (d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), ye.read(c));
    const p = yi(window, "resize", () => this.scalePositionWithinConstraints()),
      m = d.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: y }) => {
        this.isDragging &&
          y &&
          (Ot((w) => {
            const S = this.getAxisMotionValue(w);
            S && ((this.originPoint[w] += g[w].translate), S.set(S.get() + g[w].translate));
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
        dragElastic: f = Ua,
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
function Vh(n) {
  let i = !0;
  return () => {
    if (i) {
      i = !1;
      return;
    }
    n();
  };
}
function ux(n, i, s) {
  const l = Bd(n, Vh(s)),
    c = Bd(i, Vh(s));
  return () => {
    (l(), c());
  };
}
function Is(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n);
}
function cx(n, i = 10) {
  let s = null;
  return (Math.abs(n.y) > i ? (s = "y") : Math.abs(n.x) > i && (s = "x"), s);
}
class fx extends Sn {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = St),
      (this.removeListeners = St),
      (this.controls = new ax(i)));
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
const ma = (n) => (i, s) => {
  n && ye.update(() => n(i, s), !1, !0);
};
class dx extends Sn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = St));
  }
  onPointerDown(i) {
    this.session = new gm(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ym(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: s, onPan: l, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: ma(i),
      onStart: ma(s),
      onMove: ma(l),
      onEnd: (d, f) => {
        (delete this.session, c && ye.postRender(() => c(d, f)));
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
let ya = !1;
class hx extends ee.Component {
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l, layoutId: c } = this.props,
      { projection: d } = i;
    (d &&
      (s.group && s.group.add(d),
      l && l.register && c && l.register(d),
      ya && d.root.didUpdate(),
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      d.setOptions({
        ...d.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Ws.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: s, visualElement: l, drag: c, isPresent: d } = this.props,
      { projection: f } = l;
    return (
      f &&
        ((f.isPresent = d),
        i.layoutDependency !== s && f.setOptions({ ...f.options, layoutDependency: s }),
        (ya = !0),
        c || i.layoutDependency !== s || s === void 0 || i.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              ye.postRender(() => {
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
      lu.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l } = this.props,
      { projection: c } = i;
    ((ya = !0),
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
function wm(n) {
  const [i, s] = xw(),
    l = ee.useContext(Ih);
  return ne.jsx(hx, {
    ...n,
    layoutGroup: l,
    switchLayoutGroup: ee.useContext(pm),
    isPresent: i,
    safeToRemove: s,
  });
}
const px = { pan: { Feature: dx }, drag: { Feature: fx, ProjectionNode: om, MeasureLayout: wm } };
function Lh(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s,
    d = l[c];
  d && ye.postRender(() => d(i, xi(i)));
}
class mx extends Sn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = W0(i, (s, l) => (Lh(this.node, l, "Start"), (c) => Lh(this.node, c, "End"))));
  }
  unmount() {}
}
class yx extends Sn {
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
    this.unmount = gi(
      yi(this.node.current, "focus", () => this.onFocus()),
      yi(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Nh(n, i, s) {
  const { props: l } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s),
    d = l[c];
  d && ye.postRender(() => d(i, xi(i)));
}
class gx extends Sn {
  mount() {
    const { current: i } = this.node;
    if (!i) return;
    const { globalTapTarget: s, propagate: l } = this.node.props;
    this.unmount = X0(
      i,
      (c, d) => (
        Nh(this.node, d, "Start"),
        (f, { success: p }) => Nh(this.node, f, p ? "End" : "Cancel")
      ),
      { useGlobalTarget: s, stopPropagation: (l == null ? void 0 : l.tap) === !1 },
    );
  }
  unmount() {}
}
const Wa = new WeakMap(),
  ga = new WeakMap(),
  vx = (n) => {
    const i = Wa.get(n.target);
    i && i(n);
  },
  wx = (n) => {
    n.forEach(vx);
  };
function xx({ root: n, ...i }) {
  const s = n || document;
  ga.has(s) || ga.set(s, {});
  const l = ga.get(s),
    c = JSON.stringify(i);
  return (l[c] || (l[c] = new IntersectionObserver(wx, { root: n, ...i })), l[c]);
}
function Sx(n, i, s) {
  const l = xx(i);
  return (
    Wa.set(n, s),
    l.observe(n),
    () => {
      (Wa.delete(n), l.unobserve(n));
    }
  );
}
const kx = { some: 0, all: 1 };
class Tx extends Sn {
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
        threshold: typeof c == "number" ? c : kx[c],
      },
      p = (g) => {
        const { isIntersecting: y } = g;
        if (this.isInView === y || ((this.isInView = y), d && !y && this.hasEnteredView)) return;
        (y && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", y));
        const { onViewportEnter: w, onViewportLeave: S } = this.node.getProps(),
          C = y ? w : S;
        C && C(g);
      };
    this.stopObserver = Sx(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(Px(i, s)) && this.startObserver();
  }
  unmount() {
    var i;
    ((i = this.stopObserver) == null || i.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function Px({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const Ex = {
    inView: { Feature: Tx },
    tap: { Feature: gx },
    focus: { Feature: yx },
    hover: { Feature: mx },
  },
  Cx = { layout: { ProjectionNode: om, MeasureLayout: wm } },
  Mx = { ...Zw, ...Ex, ...px, ...Cx },
  Vt = Kw(Mx, Gw),
  Ax = [
    {
      title: "Ambient clarity",
      copy: "Soft gradients and motion-led layouts keep focus on the story without visual noise.",
    },
    {
      title: "Living surfaces",
      copy: "Liquid glass refracts the footage beneath — depth without sacrificing legibility.",
    },
    {
      title: "Guided scroll",
      copy: "Footer navigation anchors Discover and Mission so visitors always know where to go.",
    },
  ];
function Dx() {
  return ne.jsx("section", {
    id: "discover",
    className: "section-scrim relative scroll-mt-8 px-6 py-28 sm:px-10 md:py-36",
    children: ne.jsxs("div", {
      className: "mx-auto max-w-5xl",
      children: [
        ne.jsx(Vt.p, {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-80px" },
          transition: { duration: 0.6 },
          className: "mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40",
          children: "Discover",
        }),
        ne.jsx(Vt.h2, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-80px" },
          transition: { duration: 0.65, delay: 0.08 },
          className: "max-w-3xl text-3xl font-medium tracking-[-0.02em] sm:text-4xl md:text-5xl",
          children: "See how light shapes every interaction",
        }),
        ne.jsx(Vt.p, {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-80px" },
          transition: { duration: 0.6, delay: 0.14 },
          className: "mt-5 max-w-2xl text-base leading-relaxed text-white/50",
          children:
            "Lumina pairs full-bleed video with editorial sections — scroll to uncover the craft behind the atmosphere.",
        }),
        ne.jsx("div", {
          className: "mt-16 grid gap-6 md:grid-cols-3",
          children: Ax.map((n, i) =>
            ne.jsxs(
              Vt.article,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-60px" },
                transition: { duration: 0.55, delay: 0.1 + i * 0.1 },
                className: "liquid-glass rounded-2xl p-6",
                children: [
                  ne.jsx("h3", {
                    className: "text-lg font-medium tracking-[-0.01em]",
                    children: n.title,
                  }),
                  ne.jsx("p", {
                    className: "mt-3 text-sm leading-relaxed text-white/50",
                    children: n.copy,
                  }),
                ],
              },
              n.title,
            ),
          ),
        }),
      ],
    }),
  });
}
function Rx() {
  return ne.jsx("section", {
    id: "mission",
    className: "section-scrim relative scroll-mt-8 px-6 py-28 sm:px-10 md:py-36",
    children: ne.jsxs("div", {
      className: "mx-auto max-w-3xl text-center md:text-left",
      children: [
        ne.jsx(Vt.p, {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-80px" },
          transition: { duration: 0.6 },
          className: "mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40",
          children: "Mission",
        }),
        ne.jsx(Vt.h2, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-80px" },
          transition: { duration: 0.65, delay: 0.08 },
          className: "text-3xl font-medium leading-snug tracking-[-0.02em] sm:text-4xl md:text-5xl",
          children:
            "We build interfaces that feel like light passing through glass — precise, calm, and unmistakably human.",
        }),
        ne.jsx(Vt.p, {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-80px" },
          transition: { duration: 0.6, delay: 0.16 },
          className: "mt-6 text-base leading-relaxed text-white/50 md:text-lg",
          children:
            "Our mission is to help brands launch with cinematic presence: one continuous video canvas, intentional typography in Helvetica, and navigation that lives in the footer — never competing with the hero.",
        }),
      ],
    }),
  });
}
const Vx = [
  { label: "Discover", targetId: "discover" },
  { label: "Mission", targetId: "mission" },
];
function Lx(n) {
  var i;
  (i = document.getElementById(n)) == null ||
    i.scrollIntoView({ behavior: "smooth", block: "start" });
}
function Nx() {
  return ne.jsx(Vt.footer, {
    className:
      "pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center px-4 pb-5 sm:px-6 sm:pb-6",
    initial: { opacity: 0, y: 48, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.35 },
    children: ne.jsxs(Vt.div, {
      className:
        "liquid-glass pointer-events-auto flex w-full max-w-4xl flex-col items-center gap-4 rounded-[28px] px-5 py-4 sm:flex-row sm:justify-between sm:px-8 sm:py-5",
      animate: { y: [0, -4, 0] },
      transition: { duration: 5, repeat: 1 / 0, ease: "easeInOut" },
      children: [
        ne.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            ne.jsx("span", {
              className: "text-sm font-medium tracking-[-0.02em] text-white",
              children: "Lumina",
            }),
            ne.jsx("span", {
              className: "hidden text-xs text-white/35 sm:inline",
              children: "© 2026",
            }),
          ],
        }),
        ne.jsx("nav", {
          className: "flex items-center gap-1 sm:gap-2",
          "aria-label": "Footer",
          children: Vx.map((n, i) =>
            ne.jsx(
              Vt.button,
              {
                type: "button",
                onClick: () => Lx(n.targetId),
                className:
                  "rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:text-[11px]",
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.55 + i * 0.1 },
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.98 },
                children: n.label,
              },
              n.targetId,
            ),
          ),
        }),
        ne.jsx(Vt.button, {
          type: "button",
          className:
            "rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-colors hover:bg-white/90",
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.75 },
          whileHover: { scale: 1.03 },
          whileTap: { scale: 0.98 },
          children: "Get started",
        }),
      ],
    }),
  });
}
function _x() {
  return ne.jsxs("div", {
    className: "relative min-h-screen overflow-x-hidden",
    children: [
      ne.jsx(Cg, {}),
      ne.jsx("div", {
        className: "page-vignette pointer-events-none fixed inset-0 z-[1]",
        "aria-hidden": !0,
      }),
      ne.jsx("div", {
        className: "relative z-10 pb-32",
        children: ne.jsxs("main", { children: [ne.jsx(Lg, {}), ne.jsx(Dx, {}), ne.jsx(Rx, {})] }),
      }),
      ne.jsx(Nx, {}),
    ],
  });
}
Pg.createRoot(document.getElementById("root")).render(
  ne.jsx(ee.StrictMode, { children: ne.jsx(_x, {}) }),
);
