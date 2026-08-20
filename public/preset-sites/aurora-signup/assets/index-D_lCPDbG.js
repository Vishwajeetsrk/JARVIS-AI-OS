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
var Jl = { exports: {} },
  si = {},
  bl = { exports: {} },
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
function Sg() {
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
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function S(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (w && T[w]) || T["@@iterator"]), typeof T == "function" ? T : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    A = Object.assign,
    D = {};
  function R(T, V, se) {
    ((this.props = T), (this.context = V), (this.refs = D), (this.updater = se || E));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (T, V) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, T, V, "setState");
    }),
    (R.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    }));
  function j() {}
  j.prototype = R.prototype;
  function z(T, V, se) {
    ((this.props = T), (this.context = V), (this.refs = D), (this.updater = se || E));
  }
  var O = (z.prototype = new j());
  ((O.constructor = z), A(O, R.prototype), (O.isPureReactComponent = !0));
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
  function ge(T, V) {
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
  function Re(T, V, se, le, ue) {
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
            Re(ue, V, se, "", function (at) {
              return at;
            }))
          : ue != null &&
            (J(ue) &&
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
        ve += Re(ce, V, se, Pe, ue);
      }
    else if (((Pe = S(T)), typeof Pe == "function"))
      for (T = Pe.call(T), de = 0; !(ce = T.next()).done;)
        ((ce = ce.value), (Pe = le + Le(ce, de++)), (ve += Re(ce, V, se, Pe, ue)));
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
      Re(T, le, "", "", function (ce) {
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
  var Ee = { current: null },
    I = { transition: null },
    G = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: I, ReactCurrentOwner: ie };
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
    (oe.Component = R),
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
      return { $$typeof: y, _payload: { _status: -1, _result: T }, _init: Se };
    }),
    (oe.memo = function (T, V) {
      return { $$typeof: g, type: T, compare: V === void 0 ? null : V };
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
      return Ee.current.useCallback(T, V);
    }),
    (oe.useContext = function (T) {
      return Ee.current.useContext(T);
    }),
    (oe.useDebugValue = function () {}),
    (oe.useDeferredValue = function (T) {
      return Ee.current.useDeferredValue(T);
    }),
    (oe.useEffect = function (T, V) {
      return Ee.current.useEffect(T, V);
    }),
    (oe.useId = function () {
      return Ee.current.useId();
    }),
    (oe.useImperativeHandle = function (T, V, se) {
      return Ee.current.useImperativeHandle(T, V, se);
    }),
    (oe.useInsertionEffect = function (T, V) {
      return Ee.current.useInsertionEffect(T, V);
    }),
    (oe.useLayoutEffect = function (T, V) {
      return Ee.current.useLayoutEffect(T, V);
    }),
    (oe.useMemo = function (T, V) {
      return Ee.current.useMemo(T, V);
    }),
    (oe.useReducer = function (T, V, se) {
      return Ee.current.useReducer(T, V, se);
    }),
    (oe.useRef = function (T) {
      return Ee.current.useRef(T);
    }),
    (oe.useState = function (T) {
      return Ee.current.useState(T);
    }),
    (oe.useSyncExternalStore = function (T, V, se) {
      return Ee.current.useSyncExternalStore(T, V, se);
    }),
    (oe.useTransition = function () {
      return Ee.current.useTransition();
    }),
    (oe.version = "18.3.1"),
    oe
  );
}
var yd;
function Qa() {
  return (yd || ((yd = 1), (bl.exports = Sg())), bl.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gd;
function kg() {
  if (gd) return si;
  gd = 1;
  var n = Qa(),
    i = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, g) {
    var y,
      w = {},
      S = null,
      E = null;
    (g !== void 0 && (S = "" + g),
      m.key !== void 0 && (S = "" + m.key),
      m.ref !== void 0 && (E = m.ref));
    for (y in m) l.call(m, y) && !d.hasOwnProperty(y) && (w[y] = m[y]);
    if (p && p.defaultProps) for (y in ((m = p.defaultProps), m)) w[y] === void 0 && (w[y] = m[y]);
    return { $$typeof: i, type: p, key: S, ref: E, props: w, _owner: c.current };
  }
  return ((si.Fragment = s), (si.jsx = f), (si.jsxs = f), si);
}
var vd;
function Tg() {
  return (vd || ((vd = 1), (Jl.exports = kg())), Jl.exports);
}
var Y = Tg(),
  te = Qa(),
  Ls = {},
  ea = { exports: {} },
  lt = {},
  ta = { exports: {} },
  na = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd;
function Pg() {
  return (
    wd ||
      ((wd = 1),
      (function (n) {
        function i(I, G) {
          var U = I.length;
          I.push(G);
          e: for (; 0 < U;) {
            var T = (U - 1) >>> 1,
              V = I[T];
            if (0 < c(V, G)) ((I[T] = G), (I[U] = V), (U = T));
            else break e;
          }
        }
        function s(I) {
          return I.length === 0 ? null : I[0];
        }
        function l(I) {
          if (I.length === 0) return null;
          var G = I[0],
            U = I.pop();
          if (U !== G) {
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
          return G;
        }
        function c(I, G) {
          var U = I.sortIndex - G.sortIndex;
          return U !== 0 ? U : I.id - G.id;
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
          E = !1,
          A = !1,
          D = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          j = typeof clearTimeout == "function" ? clearTimeout : null,
          z = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(I) {
          for (var G = s(g); G !== null;) {
            if (G.callback === null) l(g);
            else if (G.startTime <= I) (l(g), (G.sortIndex = G.expirationTime), i(m, G));
            else break;
            G = s(g);
          }
        }
        function B(I) {
          if (((D = !1), O(I), !A))
            if (s(m) !== null) ((A = !0), Se(q));
            else {
              var G = s(g);
              G !== null && Ee(B, G.startTime - I);
            }
        }
        function q(I, G) {
          ((A = !1), D && ((D = !1), j(Z), (Z = -1)), (E = !0));
          var U = S;
          try {
            for (O(G), w = s(m); w !== null && (!(w.expirationTime > G) || (I && !pe()));) {
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
              (le !== null && Ee(B, le.startTime - G), (se = !1));
            }
            return se;
          } finally {
            ((w = null), (S = U), (E = !1));
          }
        }
        var ie = !1,
          re = null,
          Z = -1,
          ge = 5,
          J = -1;
        function pe() {
          return !(n.unstable_now() - J < ge);
        }
        function xe() {
          if (re !== null) {
            var I = n.unstable_now();
            J = I;
            var G = !0;
            try {
              G = re(!0, I);
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
          var Re = new MessageChannel(),
            je = Re.port2;
          ((Re.port1.onmessage = xe),
            (Le = function () {
              je.postMessage(null);
            }));
        } else
          Le = function () {
            R(xe, 0);
          };
        function Se(I) {
          ((re = I), ie || ((ie = !0), Le()));
        }
        function Ee(I, G) {
          Z = R(function () {
            I(n.unstable_now());
          }, G);
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
            A || E || ((A = !0), Se(q));
          }),
          (n.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ge = 0 < I ? Math.floor(1e3 / I) : 5);
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
                var G = 3;
                break;
              default:
                G = S;
            }
            var U = S;
            S = G;
            try {
              return I();
            } finally {
              S = U;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (I, G) {
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
              return G();
            } finally {
              S = U;
            }
          }),
          (n.unstable_scheduleCallback = function (I, G, U) {
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
                id: y++,
                callback: G,
                priorityLevel: I,
                startTime: U,
                expirationTime: V,
                sortIndex: -1,
              }),
              U > T
                ? ((I.sortIndex = U),
                  i(g, I),
                  s(m) === null && I === s(g) && (D ? (j(Z), (Z = -1)) : (D = !0), Ee(B, U - T)))
                : ((I.sortIndex = V), i(m, I), A || E || ((A = !0), Se(q))),
              I
            );
          }),
          (n.unstable_shouldYield = pe),
          (n.unstable_wrapCallback = function (I) {
            var G = S;
            return function () {
              var U = S;
              S = G;
              try {
                return I.apply(this, arguments);
              } finally {
                S = U;
              }
            };
          }));
      })(na)),
    na
  );
}
var xd;
function Cg() {
  return (xd || ((xd = 1), (ta.exports = Pg())), ta.exports);
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
function Eg() {
  if (Sd) return lt;
  Sd = 1;
  var n = Qa(),
    i = Cg();
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
  function E(e, t, r, o) {
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
    if (t === null || typeof t > "u" || E(e, t, r, o)) return !0;
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
  var R = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      R[e] = new D(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      R[t] = new D(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      R[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        R[e] = new D(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        R[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      R[e] = new D(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      R[e] = new D(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      R[e] = new D(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      R[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var j = /[\-:]([a-z])/g;
  function z(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(j, z);
      R[t] = new D(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(j, z);
        R[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(j, z);
      R[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      R[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (R.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      R[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function O(e, t, r, o) {
    var a = R.hasOwnProperty(t) ? R[t] : null;
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
    q = Symbol.for("react.element"),
    ie = Symbol.for("react.portal"),
    re = Symbol.for("react.fragment"),
    Z = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    J = Symbol.for("react.provider"),
    pe = Symbol.for("react.context"),
    xe = Symbol.for("react.forward_ref"),
    Le = Symbol.for("react.suspense"),
    Re = Symbol.for("react.suspense_list"),
    je = Symbol.for("react.memo"),
    Se = Symbol.for("react.lazy"),
    Ee = Symbol.for("react.offscreen"),
    I = Symbol.iterator;
  function G(e) {
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
      case ge:
        return "Profiler";
      case Z:
        return "StrictMode";
      case Le:
        return "Suspense";
      case Re:
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
  function ki(e) {
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
  function Ti(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function io(e, t) {
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
  function so(e, t) {
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
      ? oo(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && oo(e, t.type, de(t.defaultValue)),
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
  function oo(e, t, r) {
    (t !== "number" || Ti(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var xr = Array.isArray;
  function Bn(e, t, r, o) {
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
  function lo(e, t) {
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
        if (xr(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        t = r;
      }
      (t == null && (t = ""), (r = t));
    }
    e._wrapperState = { initialValue: de(r) };
  }
  function Cu(e, t) {
    var r = de(t.value),
      o = de(t.defaultValue);
    (r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = "" + o));
  }
  function Eu(e) {
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
  function ao(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Mu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Pi,
    Au = (function (e) {
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
          Pi = Pi || document.createElement("div"),
            Pi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Pi.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Sr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var kr = {
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
  Object.keys(kr).forEach(function (e) {
    Cm.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kr[t] = kr[e]));
    });
  });
  function Ru(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (kr.hasOwnProperty(e) && kr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Du(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf("--") === 0,
          a = Ru(r, t[r], o);
        (r === "float" && (r = "cssFloat"), o ? e.setProperty(r, a) : (e[r] = a));
      }
  }
  var Em = U(
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
  function uo(e, t) {
    if (t) {
      if (Em[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function co(e, t) {
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
  var fo = null;
  function ho(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var po = null,
    Un = null,
    Wn = null;
  function Vu(e) {
    if ((e = Hr(e))) {
      if (typeof po != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Qi(t)), po(e.stateNode, e.type, t));
    }
  }
  function Lu(e) {
    Un ? (Wn ? Wn.push(e) : (Wn = [e])) : (Un = e);
  }
  function Nu() {
    if (Un) {
      var e = Un,
        t = Wn;
      if (((Wn = Un = null), Vu(e), t)) for (e = 0; e < t.length; e++) Vu(t[e]);
    }
  }
  function _u(e, t) {
    return e(t);
  }
  function ju() {}
  var mo = !1;
  function Iu(e, t, r) {
    if (mo) return e(t, r);
    mo = !0;
    try {
      return _u(e, t, r);
    } finally {
      ((mo = !1), (Un !== null || Wn !== null) && (ju(), Nu()));
    }
  }
  function Tr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = Qi(r);
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
      var Pr = {};
      (Object.defineProperty(Pr, "passive", {
        get: function () {
          yo = !0;
        },
      }),
        window.addEventListener("test", Pr, Pr),
        window.removeEventListener("test", Pr, Pr));
    } catch {
      yo = !1;
    }
  function Mm(e, t, r, o, a, u, h, v, x) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, M);
    } catch (N) {
      this.onError(N);
    }
  }
  var Cr = !1,
    Ci = null,
    Ei = !1,
    go = null,
    Am = {
      onError: function (e) {
        ((Cr = !0), (Ci = e));
      },
    };
  function Rm(e, t, r, o, a, u, h, v, x) {
    ((Cr = !1), (Ci = null), Mm.apply(Am, arguments));
  }
  function Dm(e, t, r, o, a, u, h, v, x) {
    if ((Rm.apply(this, arguments), Cr)) {
      if (Cr) {
        var M = Ci;
        ((Cr = !1), (Ci = null));
      } else throw Error(s(198));
      Ei || ((Ei = !0), (go = M));
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
  function Vm(e) {
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
    return ((e = Vm(e)), e !== null ? Bu(e) : null);
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
    Lm = i.unstable_shouldYield,
    Nm = i.unstable_requestPaint,
    Ne = i.unstable_now,
    _m = i.unstable_getCurrentPriorityLevel,
    vo = i.unstable_ImmediatePriority,
    $u = i.unstable_UserBlockingPriority,
    Mi = i.unstable_NormalPriority,
    jm = i.unstable_LowPriority,
    Hu = i.unstable_IdlePriority,
    Ai = null,
    Lt = null;
  function Im(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function")
      try {
        Lt.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var kt = Math.clz32 ? Math.clz32 : zm,
    Fm = Math.log,
    Om = Math.LN2;
  function zm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Fm(e) / Om) | 0)) | 0);
  }
  var Ri = 64,
    Di = 4194304;
  function Er(e) {
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
  function Vi(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      a = e.suspendedLanes,
      u = e.pingedLanes,
      h = r & 268435455;
    if (h !== 0) {
      var v = h & ~a;
      v !== 0 ? (o = Er(v)) : ((u &= h), u !== 0 && (o = Er(u)));
    } else ((h = r & ~a), h !== 0 ? (o = Er(h)) : u !== 0 && (o = Er(u)));
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
  function Bm(e, t) {
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
  function Um(e, t) {
    for (
      var r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var h = 31 - kt(u),
        v = 1 << h,
        x = a[h];
      (x === -1
        ? ((v & r) === 0 || (v & o) !== 0) && (a[h] = Bm(v, t))
        : x <= t && (e.expiredLanes |= v),
        (u &= ~v));
    }
  }
  function wo(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Ku() {
    var e = Ri;
    return ((Ri <<= 1), (Ri & 4194240) === 0 && (Ri = 64), e);
  }
  function xo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Mr(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - kt(t)),
      (e[t] = r));
  }
  function Wm(e, t) {
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
  function So(e, t) {
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
  var Qu,
    ko,
    Xu,
    Yu,
    Zu,
    To = !1,
    Li = [],
    Zt = null,
    qt = null,
    Jt = null,
    Ar = new Map(),
    Rr = new Map(),
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
        Rr.delete(t.pointerId);
    }
  }
  function Dr(e, t, r, o, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = Hr(t)), t !== null && ko(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function Hm(e, t, r, o, a) {
    switch (t) {
      case "focusin":
        return ((Zt = Dr(Zt, e, t, r, o, a)), !0);
      case "dragenter":
        return ((qt = Dr(qt, e, t, r, o, a)), !0);
      case "mouseover":
        return ((Jt = Dr(Jt, e, t, r, o, a)), !0);
      case "pointerover":
        var u = a.pointerId;
        return (Ar.set(u, Dr(Ar.get(u) || null, e, t, r, o, a)), !0);
      case "gotpointercapture":
        return ((u = a.pointerId), Rr.set(u, Dr(Rr.get(u) || null, e, t, r, o, a)), !0);
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
                Xu(r);
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
  function Ni(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var r = Co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((fo = o), r.target.dispatchEvent(o), (fo = null));
      } else return ((t = Hr(r)), t !== null && ko(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function bu(e, t, r) {
    Ni(e) && r.delete(t);
  }
  function Km() {
    ((To = !1),
      Zt !== null && Ni(Zt) && (Zt = null),
      qt !== null && Ni(qt) && (qt = null),
      Jt !== null && Ni(Jt) && (Jt = null),
      Ar.forEach(bu),
      Rr.forEach(bu));
  }
  function Vr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      To || ((To = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Km)));
  }
  function Lr(e) {
    function t(a) {
      return Vr(a, e);
    }
    if (0 < Li.length) {
      Vr(Li[0], e);
      for (var r = 1; r < Li.length; r++) {
        var o = Li[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Zt !== null && Vr(Zt, e),
        qt !== null && Vr(qt, e),
        Jt !== null && Vr(Jt, e),
        Ar.forEach(t),
        Rr.forEach(t),
        r = 0;
      r < bt.length;
      r++
    )
      ((o = bt[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < bt.length && ((r = bt[0]), r.blockedOn === null);)
      (Ju(r), r.blockedOn === null && bt.shift());
  }
  var $n = B.ReactCurrentBatchConfig,
    _i = !0;
  function Gm(e, t, r, o) {
    var a = he,
      u = $n.transition;
    $n.transition = null;
    try {
      ((he = 1), Po(e, t, r, o));
    } finally {
      ((he = a), ($n.transition = u));
    }
  }
  function Qm(e, t, r, o) {
    var a = he,
      u = $n.transition;
    $n.transition = null;
    try {
      ((he = 4), Po(e, t, r, o));
    } finally {
      ((he = a), ($n.transition = u));
    }
  }
  function Po(e, t, r, o) {
    if (_i) {
      var a = Co(e, t, r, o);
      if (a === null) (Wo(e, t, o, ji, r), qu(e, o));
      else if (Hm(a, e, t, r, o)) o.stopPropagation();
      else if ((qu(e, o), t & 4 && -1 < $m.indexOf(e))) {
        for (; a !== null;) {
          var u = Hr(a);
          if (
            (u !== null && Qu(u), (u = Co(e, t, r, o)), u === null && Wo(e, t, o, ji, r), u === a)
          )
            break;
          a = u;
        }
        a !== null && o.stopPropagation();
      } else Wo(e, t, o, null, r);
    }
  }
  var ji = null;
  function Co(e, t, r, o) {
    if (((ji = null), (e = ho(o)), (e = kn(e)), e !== null))
      if (((t = Sn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Fu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((ji = e), null);
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
        switch (_m()) {
          case vo:
            return 1;
          case $u:
            return 4;
          case Mi:
          case jm:
            return 16;
          case Hu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var en = null,
    Eo = null,
    Ii = null;
  function tc() {
    if (Ii) return Ii;
    var e,
      t = Eo,
      r = t.length,
      o,
      a = "value" in en ? en.value : en.textContent,
      u = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var h = r - e;
    for (o = 1; o <= h && t[r - o] === a[u - o]; o++);
    return (Ii = a.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Fi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Oi() {
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
          ? Oi
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
            (this.isDefaultPrevented = Oi));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Oi));
        },
        persist: function () {},
        isPersistent: Oi,
      }),
      t
    );
  }
  var Hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Mo = ut(Hn),
    Nr = U({}, Hn, { view: 0, detail: 0 }),
    Xm = ut(Nr),
    Ao,
    Ro,
    _r,
    zi = U({}, Nr, {
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
      getModifierState: Vo,
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
          : (e !== _r &&
              (_r && e.type === "mousemove"
                ? ((Ao = e.screenX - _r.screenX), (Ro = e.screenY - _r.screenY))
                : (Ro = Ao = 0),
              (_r = e)),
            Ao);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ro;
      },
    }),
    rc = ut(zi),
    Ym = U({}, zi, { dataTransfer: 0 }),
    Zm = ut(Ym),
    qm = U({}, Nr, { relatedTarget: 0 }),
    Do = ut(qm),
    Jm = U({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bm = ut(Jm),
    ey = U({}, Hn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ty = ut(ey),
    ny = U({}, Hn, { data: 0 }),
    ic = ut(ny),
    ry = {
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
    iy = {
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
    sy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function oy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = sy[e]) ? !!t[e] : !1;
  }
  function Vo() {
    return oy;
  }
  var ly = U({}, Nr, {
      key: function (e) {
        if (e.key) {
          var t = ry[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? iy[e.keyCode] || "Unidentified"
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
      getModifierState: Vo,
      charCode: function (e) {
        return e.type === "keypress" ? Fi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    ay = ut(ly),
    uy = U({}, zi, {
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
    sc = ut(uy),
    cy = U({}, Nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Vo,
    }),
    fy = ut(cy),
    dy = U({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hy = ut(dy),
    py = U({}, zi, {
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
    my = ut(py),
    yy = [9, 13, 27, 32],
    Lo = p && "CompositionEvent" in window,
    jr = null;
  p && "documentMode" in document && (jr = document.documentMode);
  var gy = p && "TextEvent" in window && !jr,
    oc = p && (!Lo || (jr && 8 < jr && 11 >= jr)),
    lc = " ",
    ac = !1;
  function uc(e, t) {
    switch (e) {
      case "keyup":
        return yy.indexOf(t.keyCode) !== -1;
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
  var Kn = !1;
  function vy(e, t) {
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
  function wy(e, t) {
    if (Kn)
      return e === "compositionend" || (!Lo && uc(e, t))
        ? ((e = tc()), (Ii = Eo = en = null), (Kn = !1), e)
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
  var xy = {
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
    return t === "input" ? !!xy[e.type] : t === "textarea";
  }
  function dc(e, t, r, o) {
    (Lu(o),
      (t = Hi(t, "onChange")),
      0 < t.length &&
        ((r = new Mo("onChange", "change", null, r, o)), e.push({ event: r, listeners: t })));
  }
  var Ir = null,
    Fr = null;
  function Sy(e) {
    Dc(e, 0);
  }
  function Bi(e) {
    var t = Zn(e);
    if (xu(t)) return e;
  }
  function ky(e, t) {
    if (e === "change") return t;
  }
  var hc = !1;
  if (p) {
    var No;
    if (p) {
      var _o = "oninput" in document;
      if (!_o) {
        var pc = document.createElement("div");
        (pc.setAttribute("oninput", "return;"), (_o = typeof pc.oninput == "function"));
      }
      No = _o;
    } else No = !1;
    hc = No && (!document.documentMode || 9 < document.documentMode);
  }
  function mc() {
    Ir && (Ir.detachEvent("onpropertychange", yc), (Fr = Ir = null));
  }
  function yc(e) {
    if (e.propertyName === "value" && Bi(Fr)) {
      var t = [];
      (dc(t, Fr, e, ho(e)), Iu(Sy, t));
    }
  }
  function Ty(e, t, r) {
    e === "focusin"
      ? (mc(), (Ir = t), (Fr = r), Ir.attachEvent("onpropertychange", yc))
      : e === "focusout" && mc();
  }
  function Py(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Bi(Fr);
  }
  function Cy(e, t) {
    if (e === "click") return Bi(t);
  }
  function Ey(e, t) {
    if (e === "input" || e === "change") return Bi(t);
  }
  function My(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Tt = typeof Object.is == "function" ? Object.is : My;
  function Or(e, t) {
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
  function gc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function vc(e, t) {
    var r = gc(e);
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
      r = gc(r);
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
    for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement;) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Ti(e.document);
    }
    return t;
  }
  function jo(e) {
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
  function Ay(e) {
    var t = xc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && wc(r.ownerDocument.documentElement, r)) {
      if (o !== null && jo(r)) {
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
  var Ry = p && "documentMode" in document && 11 >= document.documentMode,
    Gn = null,
    Io = null,
    zr = null,
    Fo = !1;
  function Sc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Fo ||
      Gn == null ||
      Gn !== Ti(o) ||
      ((o = Gn),
      "selectionStart" in o && jo(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (zr && Or(zr, o)) ||
        ((zr = o),
        (o = Hi(Io, "onSelect")),
        0 < o.length &&
          ((t = new Mo("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Gn))));
  }
  function Ui(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var Qn = {
      animationend: Ui("Animation", "AnimationEnd"),
      animationiteration: Ui("Animation", "AnimationIteration"),
      animationstart: Ui("Animation", "AnimationStart"),
      transitionend: Ui("Transition", "TransitionEnd"),
    },
    Oo = {},
    kc = {};
  p &&
    ((kc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Qn.animationend.animation,
      delete Qn.animationiteration.animation,
      delete Qn.animationstart.animation),
    "TransitionEvent" in window || delete Qn.transitionend.transition);
  function Wi(e) {
    if (Oo[e]) return Oo[e];
    if (!Qn[e]) return e;
    var t = Qn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in kc) return (Oo[e] = t[r]);
    return e;
  }
  var Tc = Wi("animationend"),
    Pc = Wi("animationiteration"),
    Cc = Wi("animationstart"),
    Ec = Wi("transitionend"),
    Mc = new Map(),
    Ac =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function tn(e, t) {
    (Mc.set(e, t), d(t, [e]));
  }
  for (var zo = 0; zo < Ac.length; zo++) {
    var Bo = Ac[zo],
      Dy = Bo.toLowerCase(),
      Vy = Bo[0].toUpperCase() + Bo.slice(1);
    tn(Dy, "on" + Vy);
  }
  (tn(Tc, "onAnimationEnd"),
    tn(Pc, "onAnimationIteration"),
    tn(Cc, "onAnimationStart"),
    tn("dblclick", "onDoubleClick"),
    tn("focusin", "onFocus"),
    tn("focusout", "onBlur"),
    tn(Ec, "onTransitionEnd"),
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
  var Br =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));
  function Rc(e, t, r) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = r), Dm(o, t, void 0, e), (e.currentTarget = null));
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
            (Rc(a, v, M), (u = x));
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
            (Rc(a, v, M), (u = x));
          }
      }
    }
    if (Ei) throw ((e = go), (Ei = !1), (go = null), e);
  }
  function ke(e, t) {
    var r = t[Xo];
    r === void 0 && (r = t[Xo] = new Set());
    var o = e + "__bubble";
    r.has(o) || (Vc(t, e, 2, !1), r.add(o));
  }
  function Uo(e, t, r) {
    var o = 0;
    (t && (o |= 4), Vc(r, e, o, t));
  }
  var $i = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[$i]) {
      ((e[$i] = !0),
        l.forEach(function (r) {
          r !== "selectionchange" && (Ly.has(r) || Uo(r, !1, e), Uo(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$i] || ((t[$i] = !0), Uo("selectionchange", !1, t));
    }
  }
  function Vc(e, t, r, o) {
    switch (ec(t)) {
      case 1:
        var a = Gm;
        break;
      case 4:
        a = Qm;
        break;
      default:
        a = Po;
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
  function Wo(e, t, r, o, a) {
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
        N = ho(r),
        _ = [];
      e: {
        var L = Mc.get(e);
        if (L !== void 0) {
          var W = Mo,
            H = e;
          switch (e) {
            case "keypress":
              if (Fi(r) === 0) break e;
            case "keydown":
            case "keyup":
              W = ay;
              break;
            case "focusin":
              ((H = "focus"), (W = Do));
              break;
            case "focusout":
              ((H = "blur"), (W = Do));
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
              W = rc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = Zm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = fy;
              break;
            case Tc:
            case Pc:
            case Cc:
              W = bm;
              break;
            case Ec:
              W = hy;
              break;
            case "scroll":
              W = Xm;
              break;
            case "wheel":
              W = my;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = ty;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = sc;
          }
          var Q = (t & 4) !== 0,
            _e = !Q && e === "scroll",
            P = Q ? (L !== null ? L + "Capture" : null) : L;
          Q = [];
          for (var k = M, C; k !== null;) {
            C = k;
            var F = C.stateNode;
            if (
              (C.tag === 5 &&
                F !== null &&
                ((C = F), P !== null && ((F = Tr(k, P)), F != null && Q.push(Wr(k, F, C)))),
              _e)
            )
              break;
            k = k.return;
          }
          0 < Q.length && ((L = new W(L, H, null, r, N)), _.push({ event: L, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (W = e === "mouseout" || e === "pointerout"),
            L && r !== fo && (H = r.relatedTarget || r.fromElement) && (kn(H) || H[Ut]))
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
              ? ((H = r.relatedTarget || r.toElement),
                (W = M),
                (H = H ? kn(H) : null),
                H !== null &&
                  ((_e = Sn(H)), H !== _e || (H.tag !== 5 && H.tag !== 6)) &&
                  (H = null))
              : ((W = null), (H = M)),
            W !== H)
          ) {
            if (
              ((Q = rc),
              (F = "onMouseLeave"),
              (P = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = sc), (F = "onPointerLeave"), (P = "onPointerEnter"), (k = "pointer")),
              (_e = W == null ? L : Zn(W)),
              (C = H == null ? L : Zn(H)),
              (L = new Q(F, k + "leave", W, r, N)),
              (L.target = _e),
              (L.relatedTarget = C),
              (F = null),
              kn(N) === M &&
                ((Q = new Q(P, k + "enter", H, r, N)),
                (Q.target = C),
                (Q.relatedTarget = _e),
                (F = Q)),
              (_e = F),
              W && H)
            )
              t: {
                for (Q = W, P = H, k = 0, C = Q; C; C = Xn(C)) k++;
                for (C = 0, F = P; F; F = Xn(F)) C++;
                for (; 0 < k - C;) ((Q = Xn(Q)), k--);
                for (; 0 < C - k;) ((P = Xn(P)), C--);
                for (; k--;) {
                  if (Q === P || (P !== null && Q === P.alternate)) break t;
                  ((Q = Xn(Q)), (P = Xn(P)));
                }
                Q = null;
              }
            else Q = null;
            (W !== null && Lc(_, L, W, Q, !1), H !== null && _e !== null && Lc(_, _e, H, Q, !0));
          }
        }
        e: {
          if (
            ((L = M ? Zn(M) : window),
            (W = L.nodeName && L.nodeName.toLowerCase()),
            W === "select" || (W === "input" && L.type === "file"))
          )
            var X = ky;
          else if (fc(L))
            if (hc) X = Ey;
            else {
              X = Py;
              var b = Ty;
            }
          else
            (W = L.nodeName) &&
              W.toLowerCase() === "input" &&
              (L.type === "checkbox" || L.type === "radio") &&
              (X = Cy);
          if (X && (X = X(e, M))) {
            dc(_, X, r, N);
            break e;
          }
          (b && b(e, L, M),
            e === "focusout" &&
              (b = L._wrapperState) &&
              b.controlled &&
              L.type === "number" &&
              oo(L, "number", L.value));
        }
        switch (((b = M ? Zn(M) : window), e)) {
          case "focusin":
            (fc(b) || b.contentEditable === "true") && ((Gn = b), (Io = M), (zr = null));
            break;
          case "focusout":
            zr = Io = Gn = null;
            break;
          case "mousedown":
            Fo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Fo = !1), Sc(_, r, N));
            break;
          case "selectionchange":
            if (Ry) break;
          case "keydown":
          case "keyup":
            Sc(_, r, N);
        }
        var ee;
        if (Lo)
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
          Kn
            ? uc(e, r) && (ne = "onCompositionEnd")
            : e === "keydown" && r.keyCode === 229 && (ne = "onCompositionStart");
        (ne &&
          (oc &&
            r.locale !== "ko" &&
            (Kn || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && Kn && (ee = tc())
              : ((en = N), (Eo = "value" in en ? en.value : en.textContent), (Kn = !0))),
          (b = Hi(M, ne)),
          0 < b.length &&
            ((ne = new ic(ne, e, null, r, N)),
            _.push({ event: ne, listeners: b }),
            ee ? (ne.data = ee) : ((ee = cc(r)), ee !== null && (ne.data = ee)))),
          (ee = gy ? vy(e, r) : wy(e, r)) &&
            ((M = Hi(M, "onBeforeInput")),
            0 < M.length &&
              ((N = new ic("onBeforeInput", "beforeinput", null, r, N)),
              _.push({ event: N, listeners: M }),
              (N.data = ee))));
      }
      Dc(_, t);
    });
  }
  function Wr(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Hi(e, t) {
    for (var r = t + "Capture", o = []; e !== null;) {
      var a = e,
        u = a.stateNode;
      (a.tag === 5 &&
        u !== null &&
        ((a = u),
        (u = Tr(e, r)),
        u != null && o.unshift(Wr(e, u, a)),
        (u = Tr(e, t)),
        u != null && o.push(Wr(e, u, a))),
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
          ? ((x = Tr(r, u)), x != null && h.unshift(Wr(r, x, v)))
          : a || ((x = Tr(r, u)), x != null && h.push(Wr(r, x, v)))),
        (r = r.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Ny = /\r\n?/g,
    _y = /\u0000|\uFFFD/g;
  function Nc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ny,
        `
`,
      )
      .replace(_y, "");
  }
  function Ki(e, t, r) {
    if (((t = Nc(t)), Nc(e) !== t && r)) throw Error(s(425));
  }
  function Gi() {}
  var $o = null,
    Ho = null;
  function Ko(e, t) {
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
  var Go = typeof setTimeout == "function" ? setTimeout : void 0,
    jy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    _c = typeof Promise == "function" ? Promise : void 0,
    Iy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof _c < "u"
          ? function (e) {
              return _c.resolve(null).then(e).catch(Fy);
            }
          : Go;
  function Fy(e) {
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
            (e.removeChild(a), Lr(t));
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = a;
    } while (r);
    Lr(t);
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
  var Yn = Math.random().toString(36).slice(2),
    Nt = "__reactFiber$" + Yn,
    $r = "__reactProps$" + Yn,
    Ut = "__reactContainer$" + Yn,
    Xo = "__reactEvents$" + Yn,
    Oy = "__reactListeners$" + Yn,
    zy = "__reactHandles$" + Yn;
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
  function Hr(e) {
    return (
      (e = e[Nt] || e[Ut]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Zn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Qi(e) {
    return e[$r] || null;
  }
  var Yo = [],
    qn = -1;
  function rn(e) {
    return { current: e };
  }
  function Te(e) {
    0 > qn || ((e.current = Yo[qn]), (Yo[qn] = null), qn--);
  }
  function we(e, t) {
    (qn++, (Yo[qn] = e.current), (e.current = t));
  }
  var sn = {},
    Xe = rn(sn),
    nt = rn(!1),
    Tn = sn;
  function Jn(e, t) {
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
  function Xi() {
    (Te(nt), Te(Xe));
  }
  function Ic(e, t, r) {
    if (Xe.current !== sn) throw Error(s(168));
    (we(Xe, t), we(nt, r));
  }
  function Fc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function")) return r;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(s(108, ve(e) || "Unknown", a));
    return U({}, r, o);
  }
  function Yi(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || sn),
      (Tn = Xe.current),
      we(Xe, e),
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
        Te(Xe),
        we(Xe, e))
      : Te(nt),
      we(nt, r));
  }
  var Wt = null,
    Zi = !1,
    Zo = !1;
  function zc(e) {
    Wt === null ? (Wt = [e]) : Wt.push(e);
  }
  function By(e) {
    ((Zi = !0), zc(e));
  }
  function on() {
    if (!Zo && Wt !== null) {
      Zo = !0;
      var e = 0,
        t = he;
      try {
        var r = Wt;
        for (he = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((Wt = null), (Zi = !1));
      } catch (a) {
        throw (Wt !== null && (Wt = Wt.slice(e + 1)), Uu(vo, on), a);
      } finally {
        ((he = t), (Zo = !1));
      }
    }
    return null;
  }
  var bn = [],
    er = 0,
    qi = null,
    Ji = 0,
    pt = [],
    mt = 0,
    Pn = null,
    $t = 1,
    Ht = "";
  function Cn(e, t) {
    ((bn[er++] = Ji), (bn[er++] = qi), (qi = e), (Ji = t));
  }
  function Bc(e, t, r) {
    ((pt[mt++] = $t), (pt[mt++] = Ht), (pt[mt++] = Pn), (Pn = e));
    var o = $t;
    e = Ht;
    var a = 32 - kt(o) - 1;
    ((o &= ~(1 << a)), (r += 1));
    var u = 32 - kt(t) + a;
    if (30 < u) {
      var h = a - (a % 5);
      ((u = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (a -= h),
        ($t = (1 << (32 - kt(t) + a)) | (r << a) | o),
        (Ht = u + e));
    } else (($t = (1 << u) | (r << a) | o), (Ht = e));
  }
  function qo(e) {
    e.return !== null && (Cn(e, 1), Bc(e, 1, 0));
  }
  function Jo(e) {
    for (; e === qi;) ((qi = bn[--er]), (bn[er] = null), (Ji = bn[--er]), (bn[er] = null));
    for (; e === Pn;)
      ((Pn = pt[--mt]),
        (pt[mt] = null),
        (Ht = pt[--mt]),
        (pt[mt] = null),
        ($t = pt[--mt]),
        (pt[mt] = null));
  }
  var ct = null,
    ft = null,
    Ce = !1,
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
            ? ((r = Pn !== null ? { id: $t, overflow: Ht } : null),
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
  function bo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function el(e) {
    if (Ce) {
      var t = ft;
      if (t) {
        var r = t;
        if (!Wc(e, t)) {
          if (bo(e)) throw Error(s(418));
          t = nn(r.nextSibling);
          var o = ct;
          t && Wc(e, t) ? Uc(o, r) : ((e.flags = (e.flags & -4097) | 2), (Ce = !1), (ct = e));
        }
      } else {
        if (bo(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (Ce = !1), (ct = e));
      }
    }
  }
  function $c(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ct = e;
  }
  function bi(e) {
    if (e !== ct) return !1;
    if (!Ce) return ($c(e), (Ce = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !Ko(e.type, e.memoizedProps))),
      t && (t = ft))
    ) {
      if (bo(e)) throw (Hc(), Error(s(418)));
      for (; t;) (Uc(e, t), (t = nn(t.nextSibling)));
    }
    if (($c(e), e.tag === 13)) {
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
  function Hc() {
    for (var e = ft; e;) e = nn(e.nextSibling);
  }
  function tr() {
    ((ft = ct = null), (Ce = !1));
  }
  function tl(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  var Uy = B.ReactCurrentBatchConfig;
  function Kr(e, t, r) {
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
  function es(e, t) {
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
        var C = P.deletions;
        C === null ? ((P.deletions = [k]), (P.flags |= 16)) : C.push(k);
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
    function u(P, k, C) {
      return (
        (P.index = C),
        e
          ? ((C = P.alternate),
            C !== null ? ((C = C.index), C < k ? ((P.flags |= 2), k) : C) : ((P.flags |= 2), k))
          : ((P.flags |= 1048576), k)
      );
    }
    function h(P) {
      return (e && P.alternate === null && (P.flags |= 2), P);
    }
    function v(P, k, C, F) {
      return k === null || k.tag !== 6
        ? ((k = Gl(C, P.mode, F)), (k.return = P), k)
        : ((k = a(k, C)), (k.return = P), k);
    }
    function x(P, k, C, F) {
      var X = C.type;
      return X === re
        ? N(P, k, C.props.children, F, C.key)
        : k !== null &&
            (k.elementType === X ||
              (typeof X == "object" && X !== null && X.$$typeof === Se && Kc(X) === k.type))
          ? ((F = a(k, C.props)), (F.ref = Kr(P, k, C)), (F.return = P), F)
          : ((F = Ps(C.type, C.key, C.props, null, P.mode, F)),
            (F.ref = Kr(P, k, C)),
            (F.return = P),
            F);
    }
    function M(P, k, C, F) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== C.containerInfo ||
        k.stateNode.implementation !== C.implementation
        ? ((k = Ql(C, P.mode, F)), (k.return = P), k)
        : ((k = a(k, C.children || [])), (k.return = P), k);
    }
    function N(P, k, C, F, X) {
      return k === null || k.tag !== 7
        ? ((k = Nn(C, P.mode, F, X)), (k.return = P), k)
        : ((k = a(k, C)), (k.return = P), k);
    }
    function _(P, k, C) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((k = Gl("" + k, P.mode, C)), (k.return = P), k);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case q:
            return (
              (C = Ps(k.type, k.key, k.props, null, P.mode, C)),
              (C.ref = Kr(P, null, k)),
              (C.return = P),
              C
            );
          case ie:
            return ((k = Ql(k, P.mode, C)), (k.return = P), k);
          case Se:
            var F = k._init;
            return _(P, F(k._payload), C);
        }
        if (xr(k) || G(k)) return ((k = Nn(k, P.mode, C, null)), (k.return = P), k);
        es(P, k);
      }
      return null;
    }
    function L(P, k, C, F) {
      var X = k !== null ? k.key : null;
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return X !== null ? null : v(P, k, "" + C, F);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case q:
            return C.key === X ? x(P, k, C, F) : null;
          case ie:
            return C.key === X ? M(P, k, C, F) : null;
          case Se:
            return ((X = C._init), L(P, k, X(C._payload), F));
        }
        if (xr(C) || G(C)) return X !== null ? null : N(P, k, C, F, null);
        es(P, C);
      }
      return null;
    }
    function W(P, k, C, F, X) {
      if ((typeof F == "string" && F !== "") || typeof F == "number")
        return ((P = P.get(C) || null), v(k, P, "" + F, X));
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case q:
            return ((P = P.get(F.key === null ? C : F.key) || null), x(k, P, F, X));
          case ie:
            return ((P = P.get(F.key === null ? C : F.key) || null), M(k, P, F, X));
          case Se:
            var b = F._init;
            return W(P, k, C, b(F._payload), X);
        }
        if (xr(F) || G(F)) return ((P = P.get(C) || null), N(k, P, F, X, null));
        es(k, F);
      }
      return null;
    }
    function H(P, k, C, F) {
      for (
        var X = null, b = null, ee = k, ne = (k = 0), $e = null;
        ee !== null && ne < C.length;
        ne++
      ) {
        ee.index > ne ? (($e = ee), (ee = null)) : ($e = ee.sibling);
        var fe = L(P, ee, C[ne], F);
        if (fe === null) {
          ee === null && (ee = $e);
          break;
        }
        (e && ee && fe.alternate === null && t(P, ee),
          (k = u(fe, k, ne)),
          b === null ? (X = fe) : (b.sibling = fe),
          (b = fe),
          (ee = $e));
      }
      if (ne === C.length) return (r(P, ee), Ce && Cn(P, ne), X);
      if (ee === null) {
        for (; ne < C.length; ne++)
          ((ee = _(P, C[ne], F)),
            ee !== null &&
              ((k = u(ee, k, ne)), b === null ? (X = ee) : (b.sibling = ee), (b = ee)));
        return (Ce && Cn(P, ne), X);
      }
      for (ee = o(P, ee); ne < C.length; ne++)
        (($e = W(ee, P, ne, C[ne], F)),
          $e !== null &&
            (e && $e.alternate !== null && ee.delete($e.key === null ? ne : $e.key),
            (k = u($e, k, ne)),
            b === null ? (X = $e) : (b.sibling = $e),
            (b = $e)));
      return (
        e &&
          ee.forEach(function (mn) {
            return t(P, mn);
          }),
        Ce && Cn(P, ne),
        X
      );
    }
    function Q(P, k, C, F) {
      var X = G(C);
      if (typeof X != "function") throw Error(s(150));
      if (((C = X.call(C)), C == null)) throw Error(s(151));
      for (
        var b = (X = null), ee = k, ne = (k = 0), $e = null, fe = C.next();
        ee !== null && !fe.done;
        ne++, fe = C.next()
      ) {
        ee.index > ne ? (($e = ee), (ee = null)) : ($e = ee.sibling);
        var mn = L(P, ee, fe.value, F);
        if (mn === null) {
          ee === null && (ee = $e);
          break;
        }
        (e && ee && mn.alternate === null && t(P, ee),
          (k = u(mn, k, ne)),
          b === null ? (X = mn) : (b.sibling = mn),
          (b = mn),
          (ee = $e));
      }
      if (fe.done) return (r(P, ee), Ce && Cn(P, ne), X);
      if (ee === null) {
        for (; !fe.done; ne++, fe = C.next())
          ((fe = _(P, fe.value, F)),
            fe !== null &&
              ((k = u(fe, k, ne)), b === null ? (X = fe) : (b.sibling = fe), (b = fe)));
        return (Ce && Cn(P, ne), X);
      }
      for (ee = o(P, ee); !fe.done; ne++, fe = C.next())
        ((fe = W(ee, P, ne, fe.value, F)),
          fe !== null &&
            (e && fe.alternate !== null && ee.delete(fe.key === null ? ne : fe.key),
            (k = u(fe, k, ne)),
            b === null ? (X = fe) : (b.sibling = fe),
            (b = fe)));
      return (
        e &&
          ee.forEach(function (xg) {
            return t(P, xg);
          }),
        Ce && Cn(P, ne),
        X
      );
    }
    function _e(P, k, C, F) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === re &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case q:
            e: {
              for (var X = C.key, b = k; b !== null;) {
                if (b.key === X) {
                  if (((X = C.type), X === re)) {
                    if (b.tag === 7) {
                      (r(P, b.sibling), (k = a(b, C.props.children)), (k.return = P), (P = k));
                      break e;
                    }
                  } else if (
                    b.elementType === X ||
                    (typeof X == "object" && X !== null && X.$$typeof === Se && Kc(X) === b.type)
                  ) {
                    (r(P, b.sibling),
                      (k = a(b, C.props)),
                      (k.ref = Kr(P, b, C)),
                      (k.return = P),
                      (P = k));
                    break e;
                  }
                  r(P, b);
                  break;
                } else t(P, b);
                b = b.sibling;
              }
              C.type === re
                ? ((k = Nn(C.props.children, P.mode, F, C.key)), (k.return = P), (P = k))
                : ((F = Ps(C.type, C.key, C.props, null, P.mode, F)),
                  (F.ref = Kr(P, k, C)),
                  (F.return = P),
                  (P = F));
            }
            return h(P);
          case ie:
            e: {
              for (b = C.key; k !== null;) {
                if (k.key === b)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === C.containerInfo &&
                    k.stateNode.implementation === C.implementation
                  ) {
                    (r(P, k.sibling), (k = a(k, C.children || [])), (k.return = P), (P = k));
                    break e;
                  } else {
                    r(P, k);
                    break;
                  }
                else t(P, k);
                k = k.sibling;
              }
              ((k = Ql(C, P.mode, F)), (k.return = P), (P = k));
            }
            return h(P);
          case Se:
            return ((b = C._init), _e(P, k, b(C._payload), F));
        }
        if (xr(C)) return H(P, k, C, F);
        if (G(C)) return Q(P, k, C, F);
        es(P, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          k !== null && k.tag === 6
            ? (r(P, k.sibling), (k = a(k, C)), (k.return = P), (P = k))
            : (r(P, k), (k = Gl(C, P.mode, F)), (k.return = P), (P = k)),
          h(P))
        : r(P, k);
    }
    return _e;
  }
  var nr = Gc(!0),
    Qc = Gc(!1),
    ts = rn(null),
    ns = null,
    rr = null,
    nl = null;
  function rl() {
    nl = rr = ns = null;
  }
  function il(e) {
    var t = ts.current;
    (Te(ts), (e._currentValue = t));
  }
  function sl(e, t, r) {
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
  function ir(e, t) {
    ((ns = e),
      (nl = rr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (it = !0), (e.firstContext = null)));
  }
  function yt(e) {
    var t = e._currentValue;
    if (nl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), rr === null)) {
        if (ns === null) throw Error(s(308));
        ((rr = e), (ns.dependencies = { lanes: 0, firstContext: e }));
      } else rr = rr.next = e;
    return t;
  }
  var En = null;
  function ol(e) {
    En === null ? (En = [e]) : En.push(e);
  }
  function Xc(e, t, r, o) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), ol(t)) : ((r.next = a.next), (a.next = r)),
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
  function ll(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Yc(e, t) {
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
      a === null ? ((t.next = t), ol(o)) : ((t.next = a.next), (a.next = t)),
      (o.interleaved = t),
      Kt(e, r)
    );
  }
  function rs(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), So(e, r));
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
  function is(e, t, r, o) {
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
            var H = e,
              Q = v;
            switch (((L = t), (W = r), Q.tag)) {
              case 1:
                if (((H = Q.payload), typeof H == "function")) {
                  _ = H.call(W, _, L);
                  break e;
                }
                _ = H;
                break e;
              case 3:
                H.flags = (H.flags & -65537) | 128;
              case 0:
                if (
                  ((H = Q.payload), (L = typeof H == "function" ? H.call(W, _, L) : H), L == null)
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
  var Gr = {},
    _t = rn(Gr),
    Qr = rn(Gr),
    Xr = rn(Gr);
  function Mn(e) {
    if (e === Gr) throw Error(s(174));
    return e;
  }
  function al(e, t) {
    switch ((we(Xr, t), we(Qr, e), we(_t, Gr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ao(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ao(t, e)));
    }
    (Te(_t), we(_t, t));
  }
  function sr() {
    (Te(_t), Te(Qr), Te(Xr));
  }
  function Jc(e) {
    Mn(Xr.current);
    var t = Mn(_t.current),
      r = ao(t, e.type);
    t !== r && (we(Qr, e), we(_t, r));
  }
  function ul(e) {
    Qr.current === e && (Te(_t), Te(Qr));
  }
  var Me = rn(0);
  function ss(e) {
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
  var cl = [];
  function fl() {
    for (var e = 0; e < cl.length; e++) cl[e]._workInProgressVersionPrimary = null;
    cl.length = 0;
  }
  var os = B.ReactCurrentDispatcher,
    dl = B.ReactCurrentBatchConfig,
    An = 0,
    Ae = null,
    Oe = null,
    Ue = null,
    ls = !1,
    Yr = !1,
    Zr = 0,
    Wy = 0;
  function Ye() {
    throw Error(s(321));
  }
  function hl(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Tt(e[r], t[r])) return !1;
    return !0;
  }
  function pl(e, t, r, o, a, u) {
    if (
      ((An = u),
      (Ae = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (os.current = e === null || e.memoizedState === null ? Gy : Qy),
      (e = r(o, a)),
      Yr)
    ) {
      u = 0;
      do {
        if (((Yr = !1), (Zr = 0), 25 <= u)) throw Error(s(301));
        ((u += 1), (Ue = Oe = null), (t.updateQueue = null), (os.current = Xy), (e = r(o, a)));
      } while (Yr);
    }
    if (
      ((os.current = cs),
      (t = Oe !== null && Oe.next !== null),
      (An = 0),
      (Ue = Oe = Ae = null),
      (ls = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function ml() {
    var e = Zr !== 0;
    return ((Zr = 0), e);
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
  function qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function yl(e) {
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
        if ((An & N) === N)
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
  function gl(e) {
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
  function bc() {}
  function ef(e, t) {
    var r = Ae,
      o = gt(),
      a = t(),
      u = !Tt(o.memoizedState, a);
    if (
      (u && ((o.memoizedState = a), (it = !0)),
      (o = o.queue),
      vl(rf.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || u || (Ue !== null && Ue.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), Jr(9, nf.bind(null, r, o, a, t), void 0, null), We === null))
        throw Error(s(349));
      (An & 30) !== 0 || tf(r, t, a);
    }
    return a;
  }
  function tf(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Ae.updateQueue = t), (t.stores = [e]))
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
    t !== null && At(t, e, 1, -1);
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
        lastRenderedReducer: qr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Ky.bind(null, Ae, e)),
      [t.memoizedState, e]
    );
  }
  function Jr(e, t, r, o) {
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
  function af() {
    return gt().memoizedState;
  }
  function as(e, t, r, o) {
    var a = jt();
    ((Ae.flags |= e), (a.memoizedState = Jr(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function us(e, t, r, o) {
    var a = gt();
    o = o === void 0 ? null : o;
    var u = void 0;
    if (Oe !== null) {
      var h = Oe.memoizedState;
      if (((u = h.destroy), o !== null && hl(o, h.deps))) {
        a.memoizedState = Jr(t, r, u, o);
        return;
      }
    }
    ((Ae.flags |= e), (a.memoizedState = Jr(1 | t, r, u, o)));
  }
  function uf(e, t) {
    return as(8390656, 8, e, t);
  }
  function vl(e, t) {
    return us(2048, 8, e, t);
  }
  function cf(e, t) {
    return us(4, 2, e, t);
  }
  function ff(e, t) {
    return us(4, 4, e, t);
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
    return ((r = r != null ? r.concat([e]) : null), us(4, 4, df.bind(null, t, e), r));
  }
  function wl() {}
  function pf(e, t) {
    var r = gt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && hl(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function mf(e, t) {
    var r = gt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && hl(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function yf(e, t, r) {
    return (An & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (it = !0)), (e.memoizedState = r))
      : (Tt(r, t) || ((r = Ku()), (Ae.lanes |= r), (Rn |= r), (e.baseState = !0)), t);
  }
  function $y(e, t) {
    var r = he;
    ((he = r !== 0 && 4 > r ? r : 4), e(!0));
    var o = dl.transition;
    dl.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((he = r), (dl.transition = o));
    }
  }
  function gf() {
    return gt().memoizedState;
  }
  function Hy(e, t, r) {
    var o = dn(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), vf(e)))
      wf(t, r);
    else if (((r = Xc(e, t, r, o)), r !== null)) {
      var a = be();
      (At(r, e, o, a), xf(r, t, o));
    }
  }
  function Ky(e, t, r) {
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
            (x === null ? ((a.next = a), ol(t)) : ((a.next = x.next), (x.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((r = Xc(e, t, a, o)), r !== null && ((a = be()), At(r, e, o, a), xf(r, t, o)));
    }
  }
  function vf(e) {
    var t = e.alternate;
    return e === Ae || (t !== null && t === Ae);
  }
  function wf(e, t) {
    Yr = ls = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function xf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), So(e, r));
    }
  }
  var cs = {
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
    Gy = {
      readContext: yt,
      useCallback: function (e, t) {
        return ((jt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: yt,
      useEffect: uf,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), as(4194308, 4, df.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return as(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return as(4, 2, e, t);
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
          (e = e.dispatch = Hy.bind(null, Ae, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = jt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: lf,
      useDebugValue: wl,
      useDeferredValue: function (e) {
        return (jt().memoizedState = e);
      },
      useTransition: function () {
        var e = lf(!1),
          t = e[0];
        return ((e = $y.bind(null, e[1])), (jt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = Ae,
          a = jt();
        if (Ce) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), We === null)) throw Error(s(349));
          (An & 30) !== 0 || tf(o, t, r);
        }
        a.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (a.queue = u),
          uf(rf.bind(null, o, u, e), [e]),
          (o.flags |= 2048),
          Jr(9, nf.bind(null, o, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = jt(),
          t = We.identifierPrefix;
        if (Ce) {
          var r = Ht,
            o = $t;
          ((r = (o & ~(1 << (32 - kt(o) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Zr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":"));
        } else ((r = Wy++), (t = ":" + t + "r" + r.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Qy = {
      readContext: yt,
      useCallback: pf,
      useContext: yt,
      useEffect: vl,
      useImperativeHandle: hf,
      useInsertionEffect: cf,
      useLayoutEffect: ff,
      useMemo: mf,
      useReducer: yl,
      useRef: af,
      useState: function () {
        return yl(qr);
      },
      useDebugValue: wl,
      useDeferredValue: function (e) {
        var t = gt();
        return yf(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = yl(qr)[0],
          t = gt().memoizedState;
        return [e, t];
      },
      useMutableSource: bc,
      useSyncExternalStore: ef,
      useId: gf,
      unstable_isNewReconciler: !1,
    },
    Xy = {
      readContext: yt,
      useCallback: pf,
      useContext: yt,
      useEffect: vl,
      useImperativeHandle: hf,
      useInsertionEffect: cf,
      useLayoutEffect: ff,
      useMemo: mf,
      useReducer: gl,
      useRef: af,
      useState: function () {
        return gl(qr);
      },
      useDebugValue: wl,
      useDeferredValue: function (e) {
        var t = gt();
        return Oe === null ? (t.memoizedState = e) : yf(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = gl(qr)[0],
          t = gt().memoizedState;
        return [e, t];
      },
      useMutableSource: bc,
      useSyncExternalStore: ef,
      useId: gf,
      unstable_isNewReconciler: !1,
    };
  function Ct(e, t) {
    if (e && e.defaultProps) {
      ((t = U({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function xl(e, t, r, o) {
    ((t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : U({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var fs = {
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
        t !== null && (At(t, e, a, o), rs(t, e, a)));
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
        t !== null && (At(t, e, a, o), rs(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = be(),
        o = dn(e),
        a = Gt(r, o);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = an(e, a, o)),
        t !== null && (At(t, e, o, r), rs(t, e, o)));
    },
  };
  function Sf(e, t, r, o, a, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, u, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Or(r, o) || !Or(a, u)
          : !0
    );
  }
  function kf(e, t, r) {
    var o = !1,
      a = sn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = yt(u))
        : ((a = rt(t) ? Tn : Xe.current),
          (o = t.contextTypes),
          (u = (o = o != null) ? Jn(e, a) : sn)),
      (t = new t(r, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = fs),
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
      t.state !== e && fs.enqueueReplaceState(t, t.state, null));
  }
  function Sl(e, t, r, o) {
    var a = e.stateNode;
    ((a.props = r), (a.state = e.memoizedState), (a.refs = {}), ll(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (a.context = yt(u))
      : ((u = rt(t) ? Tn : Xe.current), (a.context = Jn(e, u))),
      (a.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (xl(e, t, u, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((t = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(),
        t !== a.state && fs.enqueueReplaceState(a, a.state, null),
        is(e, r, a, o),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function or(e, t) {
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
  function kl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Tl(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Yy = typeof WeakMap == "function" ? WeakMap : Map;
  function Pf(e, t, r) {
    ((r = Gt(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (vs || ((vs = !0), (Ol = o)), Tl(e, t));
      }),
      r
    );
  }
  function Cf(e, t, r) {
    ((r = Gt(-1, r)), (r.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var a = t.value;
      ((r.payload = function () {
        return o(a);
      }),
        (r.callback = function () {
          Tl(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (r.callback = function () {
          (Tl(e, t),
            typeof o != "function" && (cn === null ? (cn = new Set([this])) : cn.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
        }),
      r
    );
  }
  function Ef(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Yy();
      var a = new Set();
      o.set(t, a);
    } else ((a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a)));
    a.has(r) || (a.add(r), (e = ug.bind(null, e, t, r)), t.then(e, e));
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
  function Af(e, t, r, o, a) {
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
  var Zy = B.ReactCurrentOwner,
    it = !1;
  function Je(e, t, r, o) {
    t.child = e === null ? Qc(t, null, r, o) : nr(t, e.child, r, o);
  }
  function Rf(e, t, r, o, a) {
    r = r.render;
    var u = t.ref;
    return (
      ir(t, a),
      (o = pl(e, t, r, o, u, a)),
      (r = ml()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Qt(e, t, a))
        : (Ce && r && qo(t), (t.flags |= 1), Je(e, t, o, a), t.child)
    );
  }
  function Df(e, t, r, o, a) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !Kl(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Vf(e, t, u, o, a))
        : ((e = Ps(r.type, null, o, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & a) === 0)) {
      var h = u.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Or), r(h, o) && e.ref === t.ref))
        return Qt(e, t, a);
    }
    return ((t.flags |= 1), (e = pn(u, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Vf(e, t, r, o, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Or(u, o) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = o = u), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (it = !0);
        else return ((t.lanes = e.lanes), Qt(e, t, a));
    }
    return Pl(e, t, r, o, a);
  }
  function Lf(e, t, r) {
    var o = t.pendingProps,
      a = o.children,
      u = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          we(ar, dt),
          (dt |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            we(ar, dt),
            (dt |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = u !== null ? u.baseLanes : r),
          we(ar, dt),
          (dt |= o));
      }
    else
      (u !== null ? ((o = u.baseLanes | r), (t.memoizedState = null)) : (o = r),
        we(ar, dt),
        (dt |= o));
    return (Je(e, t, a, r), t.child);
  }
  function Nf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Pl(e, t, r, o, a) {
    var u = rt(r) ? Tn : Xe.current;
    return (
      (u = Jn(t, u)),
      ir(t, a),
      (r = pl(e, t, r, o, u, a)),
      (o = ml()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Qt(e, t, a))
        : (Ce && o && qo(t), (t.flags |= 1), Je(e, t, r, a), t.child)
    );
  }
  function _f(e, t, r, o, a) {
    if (rt(r)) {
      var u = !0;
      Yi(t);
    } else u = !1;
    if ((ir(t, a), t.stateNode === null)) (hs(e, t), kf(t, r, o), Sl(t, r, o, a), (o = !0));
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var x = h.context,
        M = r.contextType;
      typeof M == "object" && M !== null
        ? (M = yt(M))
        : ((M = rt(r) ? Tn : Xe.current), (M = Jn(t, M)));
      var N = r.getDerivedStateFromProps,
        _ = typeof N == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (_ ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== o || x !== M) && Tf(t, h, o, M)),
        (ln = !1));
      var L = t.memoizedState;
      ((h.state = L),
        is(t, o, h, a),
        (x = t.memoizedState),
        v !== o || L !== x || nt.current || ln
          ? (typeof N == "function" && (xl(t, r, N, o), (x = t.memoizedState)),
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
        Yc(e, t),
        (v = t.memoizedProps),
        (M = t.type === t.elementType ? v : Ct(t.type, v)),
        (h.props = M),
        (_ = t.pendingProps),
        (L = h.context),
        (x = r.contextType),
        typeof x == "object" && x !== null
          ? (x = yt(x))
          : ((x = rt(r) ? Tn : Xe.current), (x = Jn(t, x))));
      var W = r.getDerivedStateFromProps;
      ((N = typeof W == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== _ || L !== x) && Tf(t, h, o, x)),
        (ln = !1),
        (L = t.memoizedState),
        (h.state = L),
        is(t, o, h, a));
      var H = t.memoizedState;
      v !== _ || L !== H || nt.current || ln
        ? (typeof W == "function" && (xl(t, r, W, o), (H = t.memoizedState)),
          (M = ln || Sf(t, r, M, o, L, H, x) || !1)
            ? (N ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, H, x),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, H, x)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (v === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = H)),
          (h.props = o),
          (h.state = H),
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
    if (!o && !h) return (a && Oc(t, r, !1), Qt(e, t, u));
    ((o = t.stateNode), (Zy.current = t));
    var v = h && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = nr(t, e.child, null, u)), (t.child = nr(t, null, v, u)))
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
      al(e, t.containerInfo));
  }
  function If(e, t, r, o, a) {
    return (tr(), tl(a), (t.flags |= 256), Je(e, t, r, o), t.child);
  }
  var El = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ml(e) {
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
        el(t),
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
                  : (u = Cs(h, o, 0, null)),
                (e = Nn(e, o, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Ml(r)),
                (t.memoizedState = El),
                e)
              : Al(t, h))
      );
    if (((a = e.memoizedState), a !== null && ((v = a.dehydrated), v !== null)))
      return qy(e, t, h, o, v, a, r);
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
            ? Ml(r)
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
      (t = Cs({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ds(e, t, r, o) {
    return (
      o !== null && tl(o),
      nr(t, e.child, null, r),
      (e = Al(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function qy(e, t, r, o, a, u, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = kl(Error(s(422)))), ds(e, t, h, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = o.fallback),
            (a = t.mode),
            (o = Cs({ mode: "visible", children: o.children }, a, 0, null)),
            (u = Nn(u, a, h, null)),
            (u.flags |= 2),
            (o.return = t),
            (u.return = t),
            (o.sibling = u),
            (t.child = o),
            (t.mode & 1) !== 0 && nr(t, e.child, null, h),
            (t.child.memoizedState = Ml(h)),
            (t.memoizedState = El),
            u);
    if ((t.mode & 1) === 0) return ds(e, t, h, null);
    if (a.data === "$!") {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var v = o.dgst;
      return ((o = v), (u = Error(s(419))), (o = kl(u, o, void 0)), ds(e, t, h, o));
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
          a !== 0 && a !== u.retryLane && ((u.retryLane = a), Kt(e, a), At(o, e, a, -1)));
      }
      return (Hl(), (o = kl(Error(s(421)))), ds(e, t, h, o));
    }
    return a.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = cg.bind(null, e)), (a._reactRetry = t), null)
      : ((e = u.treeContext),
        (ft = nn(a.nextSibling)),
        (ct = t),
        (Ce = !0),
        (Pt = null),
        e !== null &&
          ((pt[mt++] = $t),
          (pt[mt++] = Ht),
          (pt[mt++] = Pn),
          ($t = e.id),
          (Ht = e.overflow),
          (Pn = t)),
        (t = Al(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Of(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), sl(e.return, t, r));
  }
  function Rl(e, t, r, o, a) {
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
            ((e = r.alternate), e !== null && ss(e) === null && (a = r), (r = r.sibling));
          ((r = a),
            r === null ? ((a = t.child), (t.child = null)) : ((a = r.sibling), (r.sibling = null)),
            Rl(t, !1, a, r, u));
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null;) {
            if (((e = a.alternate), e !== null && ss(e) === null)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = r), (r = a), (a = e));
          }
          Rl(t, !0, r, null, u);
          break;
        case "together":
          Rl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function hs(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Qt(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Rn |= t.lanes), (r & t.childLanes) === 0)
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
  function Jy(e, t, r) {
    switch (t.tag) {
      case 3:
        (jf(t), tr());
        break;
      case 5:
        Jc(t);
        break;
      case 1:
        rt(t.type) && Yi(t);
        break;
      case 4:
        al(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value;
        (we(ts, o._currentValue), (o._currentValue = a));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (we(Me, Me.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Ff(e, t, r)
              : (we(Me, Me.current & 1), (e = Qt(e, t, r)), e !== null ? e.sibling : null);
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
    return Qt(e, t, r);
  }
  var Bf, Dl, Uf, Wf;
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
    (Dl = function () {}),
    (Uf = function (e, t, r, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        ((e = t.stateNode), Mn(_t.current));
        var u = null;
        switch (r) {
          case "input":
            ((a = io(e, a)), (o = io(e, o)), (u = []));
            break;
          case "select":
            ((a = U({}, a, { value: void 0 })), (o = U({}, o, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((a = lo(e, a)), (o = lo(e, o)), (u = []));
            break;
          default:
            typeof a.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Gi);
        }
        uo(r, o);
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
  function br(e, t) {
    if (!Ce)
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
  function by(e, t, r) {
    var o = t.pendingProps;
    switch ((Jo(t), t.tag)) {
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
        return (rt(t.type) && Xi(), Ze(t), null);
      case 3:
        return (
          (o = t.stateNode),
          sr(),
          Te(nt),
          Te(Xe),
          fl(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (bi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pt !== null && (Ul(Pt), (Pt = null)))),
          Dl(e, t),
          Ze(t),
          null
        );
      case 5:
        ul(t);
        var a = Mn(Xr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (Uf(e, t, r, o, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ze(t), null);
          }
          if (((e = Mn(_t.current)), bi(t))) {
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
                for (a = 0; a < Br.length; a++) ke(Br[a], o);
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
            (uo(r, u), (a = null));
            for (var h in u)
              if (u.hasOwnProperty(h)) {
                var v = u[h];
                h === "children"
                  ? typeof v == "string"
                    ? o.textContent !== v &&
                      (u.suppressHydrationWarning !== !0 && Ki(o.textContent, v, e),
                      (a = ["children", v]))
                    : typeof v == "number" &&
                      o.textContent !== "" + v &&
                      (u.suppressHydrationWarning !== !0 && Ki(o.textContent, v, e),
                      (a = ["children", "" + v]))
                  : c.hasOwnProperty(h) && v != null && h === "onScroll" && ke("scroll", o);
              }
            switch (r) {
              case "input":
                (ki(o), Tu(o, u, !0));
                break;
              case "textarea":
                (ki(o), Eu(o));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (o.onclick = Gi);
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
              switch (((h = co(r, o)), r)) {
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
                  for (a = 0; a < Br.length; a++) ke(Br[a], e);
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
                  (Su(e, o), (a = io(e, o)), ke("invalid", e));
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
                  (Pu(e, o), (a = lo(e, o)), ke("invalid", e));
                  break;
                default:
                  a = o;
              }
              (uo(r, a), (v = a));
              for (u in v)
                if (v.hasOwnProperty(u)) {
                  var x = v[u];
                  u === "style"
                    ? Du(e, x)
                    : u === "dangerouslySetInnerHTML"
                      ? ((x = x ? x.__html : void 0), x != null && Au(e, x))
                      : u === "children"
                        ? typeof x == "string"
                          ? (r !== "textarea" || x !== "") && Sr(e, x)
                          : typeof x == "number" && Sr(e, "" + x)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (c.hasOwnProperty(u)
                            ? x != null && u === "onScroll" && ke("scroll", e)
                            : x != null && O(e, u, x, h));
                }
              switch (r) {
                case "input":
                  (ki(e), Tu(e, o, !1));
                  break;
                case "textarea":
                  (ki(e), Eu(e));
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + de(o.value));
                  break;
                case "select":
                  ((e.multiple = !!o.multiple),
                    (u = o.value),
                    u != null
                      ? Bn(e, !!o.multiple, u, !1)
                      : o.defaultValue != null && Bn(e, !!o.multiple, o.defaultValue, !0));
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Gi);
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
          if (((r = Mn(Xr.current)), Mn(_t.current), bi(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[Nt] = t),
              (u = o.nodeValue !== r) && ((e = ct), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ki(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ki(o.nodeValue, r, (e.mode & 1) !== 0);
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
          if (Ce && ft !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Hc(), tr(), (t.flags |= 98560), (u = !1));
          else if (((u = bi(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(s(317));
              u[Nt] = t;
            } else (tr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ze(t), (u = !1));
          } else (Pt !== null && (Ul(Pt), (Pt = null)), (u = !0));
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
        return (sr(), Dl(e, t), e === null && Ur(t.stateNode.containerInfo), Ze(t), null);
      case 10:
        return (il(t.type._context), Ze(t), null);
      case 17:
        return (rt(t.type) && Xi(), Ze(t), null);
      case 19:
        if ((Te(Me), (u = t.memoizedState), u === null)) return (Ze(t), null);
        if (((o = (t.flags & 128) !== 0), (h = u.rendering), h === null))
          if (o) br(u, !1);
          else {
            if (ze !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((h = ss(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      br(u, !1),
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
              Ne() > ur &&
              ((t.flags |= 128), (o = !0), br(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = ss(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                br(u, !0),
                u.tail === null && u.tailMode === "hidden" && !h.alternate && !Ce)
              )
                return (Ze(t), null);
            } else
              2 * Ne() - u.renderingStartTime > ur &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), br(u, !1), (t.lanes = 4194304));
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
  function eg(e, t) {
    switch ((Jo(t), t.tag)) {
      case 1:
        return (
          rt(t.type) && Xi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          sr(),
          Te(nt),
          Te(Xe),
          fl(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ul(t), null);
      case 13:
        if ((Te(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          tr();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Te(Me), null);
      case 4:
        return (sr(), null);
      case 10:
        return (il(t.type._context), null);
      case 22:
      case 23:
        return ($l(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ps = !1,
    qe = !1,
    tg = typeof WeakSet == "function" ? WeakSet : Set,
    $ = null;
  function lr(e, t) {
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
  function Vl(e, t, r) {
    try {
      r();
    } catch (o) {
      De(e, t, o);
    }
  }
  var $f = !1;
  function ng(e, t) {
    if ((($o = _i), (e = xc()), jo(e))) {
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
    for (Ho = { focusedElem: e, selectionRange: r }, _i = !1, $ = t; $ !== null;)
      if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), ($ = e));
      else
        for (; $ !== null;) {
          t = $;
          try {
            var H = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (H !== null) {
                    var Q = H.memoizedProps,
                      _e = H.memoizedState,
                      P = t.stateNode,
                      k = P.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Q : Ct(t.type, Q),
                        _e,
                      );
                    P.__reactInternalSnapshotBeforeUpdate = k;
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
          } catch (F) {
            De(t, t.return, F);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), ($ = e));
            break;
          }
          $ = t.return;
        }
    return ((H = $f), ($f = !1), H);
  }
  function ei(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var a = (o = o.next);
      do {
        if ((a.tag & e) === e) {
          var u = a.destroy;
          ((a.destroy = void 0), u !== void 0 && Vl(t, r, u));
        }
        a = a.next;
      } while (a !== o);
    }
  }
  function ms(e, t) {
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
  function Ll(e) {
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
  function Hf(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Hf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Nt], delete t[$r], delete t[Xo], delete t[Oy], delete t[zy])),
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
  function Nl(e, t, r) {
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
            r != null || t.onclick !== null || (t.onclick = Gi)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Nl(e, t, r), e = e.sibling; e !== null;) (Nl(e, t, r), (e = e.sibling));
  }
  function _l(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (_l(e, t, r), e = e.sibling; e !== null;) (_l(e, t, r), (e = e.sibling));
  }
  var He = null,
    Et = !1;
  function un(e, t, r) {
    for (r = r.child; r !== null;) (Qf(e, t, r), (r = r.sibling));
  }
  function Qf(e, t, r) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function")
      try {
        Lt.onCommitFiberUnmount(Ai, r);
      } catch {}
    switch (r.tag) {
      case 5:
        qe || lr(r, t);
      case 6:
        var o = He,
          a = Et;
        ((He = null),
          un(e, t, r),
          (He = o),
          (Et = a),
          He !== null &&
            (Et
              ? ((e = He),
                (r = r.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
              : He.removeChild(r.stateNode)));
        break;
      case 18:
        He !== null &&
          (Et
            ? ((e = He),
              (r = r.stateNode),
              e.nodeType === 8 ? Qo(e.parentNode, r) : e.nodeType === 1 && Qo(e, r),
              Lr(e))
            : Qo(He, r.stateNode));
        break;
      case 4:
        ((o = He),
          (a = Et),
          (He = r.stateNode.containerInfo),
          (Et = !0),
          un(e, t, r),
          (He = o),
          (Et = a));
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
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Vl(r, t, h),
              (a = a.next));
          } while (a !== o);
        }
        un(e, t, r);
        break;
      case 1:
        if (!qe && (lr(r, t), (o = r.stateNode), typeof o.componentWillUnmount == "function"))
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
  function Xf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new tg()),
        t.forEach(function (o) {
          var a = fg.bind(null, e, o);
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
                ((He = v.stateNode), (Et = !1));
                break e;
              case 3:
                ((He = v.stateNode.containerInfo), (Et = !0));
                break e;
              case 4:
                ((He = v.stateNode.containerInfo), (Et = !0));
                break e;
            }
            v = v.return;
          }
          if (He === null) throw Error(s(160));
          (Qf(u, h, a), (He = null), (Et = !1));
          var x = a.alternate;
          (x !== null && (x.return = null), (a.return = null));
        } catch (M) {
          De(a, t, M);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (Yf(t, e), (t = t.sibling));
  }
  function Yf(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Mt(t, e), It(e), o & 4)) {
          try {
            (ei(3, e, e.return), ms(3, e));
          } catch (Q) {
            De(e, e.return, Q);
          }
          try {
            ei(5, e, e.return);
          } catch (Q) {
            De(e, e.return, Q);
          }
        }
        break;
      case 1:
        (Mt(t, e), It(e), o & 512 && r !== null && lr(r, r.return));
        break;
      case 5:
        if ((Mt(t, e), It(e), o & 512 && r !== null && lr(r, r.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            Sr(a, "");
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
              (v === "input" && u.type === "radio" && u.name != null && ku(a, u), co(v, h));
              var M = co(v, u);
              for (h = 0; h < x.length; h += 2) {
                var N = x[h],
                  _ = x[h + 1];
                N === "style"
                  ? Du(a, _)
                  : N === "dangerouslySetInnerHTML"
                    ? Au(a, _)
                    : N === "children"
                      ? Sr(a, _)
                      : O(a, N, _, M);
              }
              switch (v) {
                case "input":
                  so(a, u);
                  break;
                case "textarea":
                  Cu(a, u);
                  break;
                case "select":
                  var L = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!u.multiple;
                  var W = u.value;
                  W != null
                    ? Bn(a, !!u.multiple, W, !1)
                    : L !== !!u.multiple &&
                      (u.defaultValue != null
                        ? Bn(a, !!u.multiple, u.defaultValue, !0)
                        : Bn(a, !!u.multiple, u.multiple ? [] : "", !1));
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
            Lr(t.containerInfo);
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
            !u || (a.alternate !== null && a.alternate.memoizedState !== null) || (Fl = Ne())),
          o & 4 && Xf(e));
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
                switch (((L = $), (W = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ei(4, L, L.return);
                    break;
                  case 1:
                    lr(L, L.return);
                    var H = L.stateNode;
                    if (typeof H.componentWillUnmount == "function") {
                      ((o = L), (r = L.return));
                      try {
                        ((t = o),
                          (H.props = t.memoizedProps),
                          (H.state = t.memoizedState),
                          H.componentWillUnmount());
                      } catch (Q) {
                        De(o, r, Q);
                      }
                    }
                    break;
                  case 5:
                    lr(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      Jf(_);
                      continue;
                    }
                }
                W !== null ? ((W.return = L), ($ = W)) : Jf(_);
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
                        (v.style.display = Ru("display", h))));
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
        (Mt(t, e), It(e), o & 4 && Xf(e));
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
            o.flags & 32 && (Sr(a, ""), (o.flags &= -33));
            var u = Gf(e);
            _l(e, u, a);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              v = Gf(e);
            Nl(e, v, h);
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
  function rg(e, t, r) {
    (($ = e), Zf(e));
  }
  function Zf(e, t, r) {
    for (var o = (e.mode & 1) !== 0; $ !== null;) {
      var a = $,
        u = a.child;
      if (a.tag === 22 && o) {
        var h = a.memoizedState !== null || ps;
        if (!h) {
          var v = a.alternate,
            x = (v !== null && v.memoizedState !== null) || qe;
          v = ps;
          var M = qe;
          if (((ps = h), (qe = x) && !M))
            for ($ = a; $ !== null;)
              ((h = $),
                (x = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? bf(a)
                  : x !== null
                    ? ((x.return = h), ($ = x))
                    : bf(a));
          for (; u !== null;) (($ = u), Zf(u), (u = u.sibling));
          (($ = a), (ps = v), (qe = M));
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
                qe || ms(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !qe)
                  if (r === null) o.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type ? r.memoizedProps : Ct(t.type, r.memoizedProps);
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
                      _ !== null && Lr(_);
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
          qe || (t.flags & 512 && Ll(t));
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
              ms(4, t);
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
              Ll(t);
            } catch (x) {
              De(t, u, x);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Ll(t);
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
  var ig = Math.ceil,
    ys = B.ReactCurrentDispatcher,
    jl = B.ReactCurrentOwner,
    vt = B.ReactCurrentBatchConfig,
    ae = 0,
    We = null,
    Ie = null,
    Ke = 0,
    dt = 0,
    ar = rn(0),
    ze = 0,
    ti = null,
    Rn = 0,
    gs = 0,
    Il = 0,
    ni = null,
    st = null,
    Fl = 0,
    ur = 1 / 0,
    Xt = null,
    vs = !1,
    Ol = null,
    cn = null,
    ws = !1,
    fn = null,
    xs = 0,
    ri = 0,
    zl = null,
    Ss = -1,
    ks = 0;
  function be() {
    return (ae & 6) !== 0 ? Ne() : Ss !== -1 ? Ss : (Ss = Ne());
  }
  function dn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && Ke !== 0
        ? Ke & -Ke
        : Uy.transition !== null
          ? (ks === 0 && (ks = Ku()), ks)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ec(e.type))), e);
  }
  function At(e, t, r, o) {
    if (50 < ri) throw ((ri = 0), (zl = null), Error(s(185)));
    (Mr(e, r, o),
      ((ae & 2) === 0 || e !== We) &&
        (e === We && ((ae & 2) === 0 && (gs |= r), ze === 4 && hn(e, Ke)),
        ot(e, o),
        r === 1 && ae === 0 && (t.mode & 1) === 0 && ((ur = Ne() + 500), Zi && on())));
  }
  function ot(e, t) {
    var r = e.callbackNode;
    Um(e, t);
    var o = Vi(e, e === We ? Ke : 0);
    if (o === 0) (r !== null && Wu(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && Wu(r), t === 1))
        (e.tag === 0 ? By(td.bind(null, e)) : zc(td.bind(null, e)),
          Iy(function () {
            (ae & 6) === 0 && on();
          }),
          (r = null));
      else {
        switch (Gu(o)) {
          case 1:
            r = vo;
            break;
          case 4:
            r = $u;
            break;
          case 16:
            r = Mi;
            break;
          case 536870912:
            r = Hu;
            break;
          default:
            r = Mi;
        }
        r = ud(r, ed.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function ed(e, t) {
    if (((Ss = -1), (ks = 0), (ae & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (cr() && e.callbackNode !== r) return null;
    var o = Vi(e, e === We ? Ke : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Ts(e, o);
    else {
      t = o;
      var a = ae;
      ae |= 2;
      var u = rd();
      (We !== e || Ke !== t) && ((Xt = null), (ur = Ne() + 500), Vn(e, t));
      do
        try {
          lg();
          break;
        } catch (v) {
          nd(e, v);
        }
      while (!0);
      (rl(), (ys.current = u), (ae = a), Ie !== null ? (t = 0) : ((We = null), (Ke = 0), (t = ze)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = wo(e)), a !== 0 && ((o = a), (t = Bl(e, a)))), t === 1))
        throw ((r = ti), Vn(e, 0), hn(e, o), ot(e, Ne()), r);
      if (t === 6) hn(e, o);
      else {
        if (
          ((a = e.current.alternate),
          (o & 30) === 0 &&
            !sg(a) &&
            ((t = Ts(e, o)),
            t === 2 && ((u = wo(e)), u !== 0 && ((o = u), (t = Bl(e, u)))),
            t === 1))
        )
          throw ((r = ti), Vn(e, 0), hn(e, o), ot(e, Ne()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Ln(e, st, Xt);
            break;
          case 3:
            if ((hn(e, o), (o & 130023424) === o && ((t = Fl + 500 - Ne()), 10 < t))) {
              if (Vi(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                (be(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = Go(Ln.bind(null, e, st, Xt), t);
              break;
            }
            Ln(e, st, Xt);
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
                            : 1960 * ig(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Go(Ln.bind(null, e, st, Xt), o);
              break;
            }
            Ln(e, st, Xt);
            break;
          case 5:
            Ln(e, st, Xt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (ot(e, Ne()), e.callbackNode === r ? ed.bind(null, e) : null);
  }
  function Bl(e, t) {
    var r = ni;
    return (
      e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256),
      (e = Ts(e, t)),
      e !== 2 && ((t = st), (st = r), t !== null && Ul(t)),
      e
    );
  }
  function Ul(e) {
    st === null ? (st = e) : st.push.apply(st, e);
  }
  function sg(e) {
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
      t &= ~Il, t &= ~gs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - kt(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function td(e) {
    if ((ae & 6) !== 0) throw Error(s(327));
    cr();
    var t = Vi(e, 0);
    if ((t & 1) === 0) return (ot(e, Ne()), null);
    var r = Ts(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = wo(e);
      o !== 0 && ((t = o), (r = Bl(e, o)));
    }
    if (r === 1) throw ((r = ti), Vn(e, 0), hn(e, t), ot(e, Ne()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Ln(e, st, Xt),
      ot(e, Ne()),
      null
    );
  }
  function Wl(e, t) {
    var r = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      ((ae = r), ae === 0 && ((ur = Ne() + 500), Zi && on()));
    }
  }
  function Dn(e) {
    fn !== null && fn.tag === 0 && (ae & 6) === 0 && cr();
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
    ((dt = ar.current), Te(ar));
  }
  function Vn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), jy(r)), Ie !== null))
      for (r = Ie.return; r !== null;) {
        var o = r;
        switch ((Jo(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Xi());
            break;
          case 3:
            (sr(), Te(nt), Te(Xe), fl());
            break;
          case 5:
            ul(o);
            break;
          case 4:
            sr();
            break;
          case 13:
            Te(Me);
            break;
          case 19:
            Te(Me);
            break;
          case 10:
            il(o.type._context);
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
      (ti = null),
      (Il = gs = Rn = 0),
      (st = ni = null),
      En !== null)
    ) {
      for (t = 0; t < En.length; t++)
        if (((r = En[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var a = o.next,
            u = r.pending;
          if (u !== null) {
            var h = u.next;
            ((u.next = a), (o.next = h));
          }
          r.pending = o;
        }
      En = null;
    }
    return e;
  }
  function nd(e, t) {
    do {
      var r = Ie;
      try {
        if ((rl(), (os.current = cs), ls)) {
          for (var o = Ae.memoizedState; o !== null;) {
            var a = o.queue;
            (a !== null && (a.pending = null), (o = o.next));
          }
          ls = !1;
        }
        if (
          ((An = 0),
          (Ue = Oe = Ae = null),
          (Yr = !1),
          (Zr = 0),
          (jl.current = null),
          r === null || r.return === null)
        ) {
          ((ze = 1), (ti = t), (Ie = null));
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
            var W = Mf(h);
            if (W !== null) {
              ((W.flags &= -257), Af(W, h, v, u, t), W.mode & 1 && Ef(u, M, t), (t = W), (x = M));
              var H = t.updateQueue;
              if (H === null) {
                var Q = new Set();
                (Q.add(x), (t.updateQueue = Q));
              } else H.add(x);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Ef(u, M, t), Hl());
                break e;
              }
              x = Error(s(426));
            }
          } else if (Ce && v.mode & 1) {
            var _e = Mf(h);
            if (_e !== null) {
              ((_e.flags & 65536) === 0 && (_e.flags |= 256), Af(_e, h, v, u, t), tl(or(x, v)));
              break e;
            }
          }
          ((u = x = or(x, v)),
            ze !== 4 && (ze = 2),
            ni === null ? (ni = [u]) : ni.push(u),
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
                  C = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == "function" ||
                    (C !== null &&
                      typeof C.componentDidCatch == "function" &&
                      (cn === null || !cn.has(C))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var F = Cf(u, v, t);
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
    var e = ys.current;
    return ((ys.current = cs), e === null ? cs : e);
  }
  function Hl() {
    ((ze === 0 || ze === 3 || ze === 2) && (ze = 4),
      We === null || ((Rn & 268435455) === 0 && (gs & 268435455) === 0) || hn(We, Ke));
  }
  function Ts(e, t) {
    var r = ae;
    ae |= 2;
    var o = rd();
    (We !== e || Ke !== t) && ((Xt = null), Vn(e, t));
    do
      try {
        og();
        break;
      } catch (a) {
        nd(e, a);
      }
    while (!0);
    if ((rl(), (ae = r), (ys.current = o), Ie !== null)) throw Error(s(261));
    return ((We = null), (Ke = 0), ze);
  }
  function og() {
    for (; Ie !== null;) id(Ie);
  }
  function lg() {
    for (; Ie !== null && !Lm();) id(Ie);
  }
  function id(e) {
    var t = ad(e.alternate, e, dt);
    ((e.memoizedProps = e.pendingProps), t === null ? sd(e) : (Ie = t), (jl.current = null));
  }
  function sd(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = by(r, t, dt)), r !== null)) {
          Ie = r;
          return;
        }
      } else {
        if (((r = eg(r, t)), r !== null)) {
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
      ((vt.transition = null), (he = 1), ag(e, t, r, o));
    } finally {
      ((vt.transition = a), (he = o));
    }
    return null;
  }
  function ag(e, t, r, o) {
    do cr();
    while (fn !== null);
    if ((ae & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = r.lanes | r.childLanes;
    if (
      (Wm(e, u),
      e === We && ((Ie = We = null), (Ke = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        ws ||
        ((ws = !0),
        ud(Mi, function () {
          return (cr(), null);
        })),
      (u = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = vt.transition), (vt.transition = null));
      var h = he;
      he = 1;
      var v = ae;
      ((ae |= 4),
        (jl.current = null),
        ng(e, r),
        Yf(r, e),
        Ay(Ho),
        (_i = !!$o),
        (Ho = $o = null),
        (e.current = r),
        rg(r),
        Nm(),
        (ae = v),
        (he = h),
        (vt.transition = u));
    } else e.current = r;
    if (
      (ws && ((ws = !1), (fn = e), (xs = a)),
      (u = e.pendingLanes),
      u === 0 && (cn = null),
      Im(r.stateNode),
      ot(e, Ne()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((a = t[r]), o(a.value, { componentStack: a.stack, digest: a.digest }));
    if (vs) throw ((vs = !1), (e = Ol), (Ol = null), e);
    return (
      (xs & 1) !== 0 && e.tag !== 0 && cr(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === zl ? ri++ : ((ri = 0), (zl = e))) : (ri = 0),
      on(),
      null
    );
  }
  function cr() {
    if (fn !== null) {
      var e = Gu(xs),
        t = vt.transition,
        r = he;
      try {
        if (((vt.transition = null), (he = 16 > e ? 16 : e), fn === null)) var o = !1;
        else {
          if (((e = fn), (fn = null), (xs = 0), (ae & 6) !== 0)) throw Error(s(331));
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
                        ei(8, N, u);
                    }
                    var _ = N.child;
                    if (_ !== null) ((_.return = N), ($ = _));
                    else
                      for (; $ !== null;) {
                        N = $;
                        var L = N.sibling,
                          W = N.return;
                        if ((Hf(N), N === M)) {
                          $ = null;
                          break;
                        }
                        if (L !== null) {
                          ((L.return = W), ($ = L));
                          break;
                        }
                        $ = W;
                      }
                  }
                }
                var H = u.alternate;
                if (H !== null) {
                  var Q = H.child;
                  if (Q !== null) {
                    H.child = null;
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
                      ei(9, u, u.return);
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
            var C = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && C !== null) ((C.return = h), ($ = C));
            else
              e: for (h = k; $ !== null;) {
                if (((v = $), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ms(9, v);
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
              Lt.onPostCommitFiberRoot(Ai, e);
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
    ((t = or(r, t)),
      (t = Pf(e, t, 1)),
      (e = an(e, t, 1)),
      (t = be()),
      e !== null && (Mr(e, 1, t), ot(e, t)));
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
            ((e = or(r, e)),
              (e = Cf(t, e, 1)),
              (t = an(t, e, 1)),
              (e = be()),
              t !== null && (Mr(t, 1, e), ot(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ug(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = be()),
      (e.pingedLanes |= e.suspendedLanes & r),
      We === e &&
        (Ke & r) === r &&
        (ze === 4 || (ze === 3 && (Ke & 130023424) === Ke && 500 > Ne() - Fl)
          ? Vn(e, 0)
          : (Il |= r)),
      ot(e, t));
  }
  function ld(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Di), (Di <<= 1), (Di & 130023424) === 0 && (Di = 4194304)));
    var r = be();
    ((e = Kt(e, t)), e !== null && (Mr(e, t, r), ot(e, r)));
  }
  function cg(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), ld(e, r));
  }
  function fg(e, t) {
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
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((it = !1), Jy(e, t, r));
        it = (e.flags & 131072) !== 0;
      }
    else ((it = !1), Ce && (t.flags & 1048576) !== 0 && Bc(t, Ji, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (hs(e, t), (e = t.pendingProps));
        var a = Jn(t, Xe.current);
        (ir(t, r), (a = pl(null, t, o, e, a, r)));
        var u = ml();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              rt(o) ? ((u = !0), Yi(t)) : (u = !1),
              (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              ll(t),
              (a.updater = fs),
              (t.stateNode = a),
              (a._reactInternals = t),
              Sl(t, o, e, r),
              (t = Cl(null, t, o, !0, u, r)))
            : ((t.tag = 0), Ce && u && qo(t), Je(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (hs(e, t),
            (e = t.pendingProps),
            (a = o._init),
            (o = a(o._payload)),
            (t.type = o),
            (a = t.tag = hg(o)),
            (e = Ct(o, e)),
            a)
          ) {
            case 0:
              t = Pl(null, t, o, e, r);
              break e;
            case 1:
              t = _f(null, t, o, e, r);
              break e;
            case 11:
              t = Rf(null, t, o, e, r);
              break e;
            case 14:
              t = Df(null, t, o, Ct(o.type, e), r);
              break e;
          }
          throw Error(s(306, o, ""));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Ct(o, a)),
          Pl(e, t, o, a, r)
        );
      case 1:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Ct(o, a)),
          _f(e, t, o, a, r)
        );
      case 3:
        e: {
          if ((jf(t), e === null)) throw Error(s(387));
          ((o = t.pendingProps),
            (u = t.memoizedState),
            (a = u.element),
            Yc(e, t),
            is(t, o, null, r));
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
              ((a = or(Error(s(423)), t)), (t = If(e, t, o, r, a)));
              break e;
            } else if (o !== a) {
              ((a = or(Error(s(424)), t)), (t = If(e, t, o, r, a)));
              break e;
            } else
              for (
                ft = nn(t.stateNode.containerInfo.firstChild),
                  ct = t,
                  Ce = !0,
                  Pt = null,
                  r = Qc(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((tr(), o === a)) {
              t = Qt(e, t, r);
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
          e === null && el(t),
          (o = t.type),
          (a = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = a.children),
          Ko(o, a) ? (h = null) : u !== null && Ko(o, u) && (t.flags |= 32),
          Nf(e, t),
          Je(e, t, h, r),
          t.child
        );
      case 6:
        return (e === null && el(t), null);
      case 13:
        return Ff(e, t, r);
      case 4:
        return (
          al(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = nr(t, null, o, r)) : Je(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Ct(o, a)),
          Rf(e, t, o, a, r)
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
            we(ts, o._currentValue),
            (o._currentValue = h),
            u !== null)
          )
            if (Tt(u.value, h)) {
              if (u.children === a.children && !nt.current) {
                t = Qt(e, t, r);
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
                        sl(u.return, r, t),
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
                    sl(h, r, t),
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
          ir(t, r),
          (a = yt(a)),
          (o = o(a)),
          (t.flags |= 1),
          Je(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (a = Ct(o, t.pendingProps)), (a = Ct(o.type, a)), Df(e, t, o, a, r));
      case 15:
        return Vf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Ct(o, a)),
          hs(e, t),
          (t.tag = 1),
          rt(o) ? ((e = !0), Yi(t)) : (e = !1),
          ir(t, r),
          kf(t, o, a),
          Sl(t, o, a, r),
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
  function dg(e, t, r, o) {
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
    return new dg(e, t, r, o);
  }
  function Kl(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function hg(e) {
    if (typeof e == "function") return Kl(e) ? 1 : 0;
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
  function Ps(e, t, r, o, a, u) {
    var h = 2;
    if (((o = e), typeof e == "function")) Kl(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case re:
          return Nn(r.children, a, u, t);
        case Z:
          ((h = 8), (a |= 8));
          break;
        case ge:
          return ((e = wt(12, r, t, a | 2)), (e.elementType = ge), (e.lanes = u), e);
        case Le:
          return ((e = wt(13, r, t, a)), (e.elementType = Le), (e.lanes = u), e);
        case Re:
          return ((e = wt(19, r, t, a)), (e.elementType = Re), (e.lanes = u), e);
        case Ee:
          return Cs(r, a, u, t);
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
  function Cs(e, t, r, o) {
    return (
      (e = wt(22, e, o, t)),
      (e.elementType = Ee),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Gl(e, t, r) {
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
  function pg(e, t, r, o, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = xo(0)),
      (this.expirationTimes = xo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = xo(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Xl(e, t, r, o, a, u, h, v, x) {
    return (
      (e = new pg(e, t, r, v, x)),
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
      ll(u),
      e
    );
  }
  function mg(e, t, r) {
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
      Mr(e, a, o),
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
      e !== null && (At(e, a, h, u), rs(e, a, h)),
      h
    );
  }
  function Ms(e) {
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
  function Yl(e, t) {
    (dd(e, t), (e = e.alternate) && dd(e, t));
  }
  function yg() {
    return null;
  }
  var hd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Zl(e) {
    this._internalRoot = e;
  }
  ((As.prototype.render = Zl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Es(e, t, null, null);
    }),
    (As.prototype.unmount = Zl.prototype.unmount =
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
  function As(e) {
    this._internalRoot = e;
  }
  As.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Yu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < bt.length && t !== 0 && t < bt[r].priority; r++);
      (bt.splice(r, 0, e), r === 0 && Ju(e));
    }
  };
  function ql(e) {
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
  function gg(e, t, r, o, a) {
    if (a) {
      if (typeof o == "function") {
        var u = o;
        o = function () {
          var M = Ms(h);
          u.call(M);
        };
      }
      var h = fd(t, o, e, 0, null, !1, !1, "", pd);
      return (
        (e._reactRootContainer = h),
        (e[Ut] = h.current),
        Ur(e.nodeType === 8 ? e.parentNode : e),
        Dn(),
        h
      );
    }
    for (; (a = e.lastChild);) e.removeChild(a);
    if (typeof o == "function") {
      var v = o;
      o = function () {
        var M = Ms(x);
        v.call(M);
      };
    }
    var x = Xl(e, 0, !1, null, null, !1, !1, "", pd);
    return (
      (e._reactRootContainer = x),
      (e[Ut] = x.current),
      Ur(e.nodeType === 8 ? e.parentNode : e),
      Dn(function () {
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
          var x = Ms(h);
          v.call(x);
        };
      }
      Es(t, h, e, a);
    } else h = gg(r, t, e, a, o);
    return Ms(h);
  }
  ((Qu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Er(t.pendingLanes);
          r !== 0 && (So(t, r | 1), ot(t, Ne()), (ae & 6) === 0 && ((ur = Ne() + 500), on()));
        }
        break;
      case 13:
        (Dn(function () {
          var o = Kt(e, 1);
          if (o !== null) {
            var a = be();
            At(o, e, 1, a);
          }
        }),
          Yl(e, 1));
    }
  }),
    (ko = function (e) {
      if (e.tag === 13) {
        var t = Kt(e, 134217728);
        if (t !== null) {
          var r = be();
          At(t, e, 134217728, r);
        }
        Yl(e, 134217728);
      }
    }),
    (Xu = function (e) {
      if (e.tag === 13) {
        var t = dn(e),
          r = Kt(e, t);
        if (r !== null) {
          var o = be();
          At(r, e, t, o);
        }
        Yl(e, t);
      }
    }),
    (Yu = function () {
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
    (po = function (e, t, r) {
      switch (t) {
        case "input":
          if ((so(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode;) r = r.parentNode;
            for (
              r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var a = Qi(o);
                if (!a) throw Error(s(90));
                (xu(o), so(o, a));
              }
            }
          }
          break;
        case "textarea":
          Cu(e, r);
          break;
        case "select":
          ((t = r.value), t != null && Bn(e, !!r.multiple, t, !1));
      }
    }),
    (_u = Wl),
    (ju = Dn));
  var vg = { usingClientEntryPoint: !1, Events: [Hr, Zn, Qi, Lu, Nu, Wl] },
    ii = {
      findFiberByHostInstance: kn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    wg = {
      bundleType: ii.bundleType,
      version: ii.version,
      rendererPackageName: ii.rendererPackageName,
      rendererConfig: ii.rendererConfig,
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
      findFiberByHostInstance: ii.findFiberByHostInstance || yg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vs.isDisabled && Vs.supportsFiber)
      try {
        ((Ai = Vs.inject(wg)), (Lt = Vs));
      } catch {}
  }
  return (
    (lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vg),
    (lt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ql(t)) throw Error(s(200));
      return mg(e, t, null, r);
    }),
    (lt.createRoot = function (e, t) {
      if (!ql(e)) throw Error(s(299));
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
        Ur(e.nodeType === 8 ? e.parentNode : e),
        new Zl(t)
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
      return Ds(null, e, t, !0, r);
    }),
    (lt.hydrateRoot = function (e, t, r) {
      if (!ql(e)) throw Error(s(405));
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
        Ur(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((r = o[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a));
      return new As(t);
    }),
    (lt.render = function (e, t, r) {
      if (!Rs(t)) throw Error(s(200));
      return Ds(null, e, t, !1, r);
    }),
    (lt.unmountComponentAtNode = function (e) {
      if (!Rs(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Dn(function () {
            Ds(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ut] = null));
            });
          }),
          !0)
        : !1;
    }),
    (lt.unstable_batchedUpdates = Wl),
    (lt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!Rs(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Ds(e, t, r, !1, o);
    }),
    (lt.version = "18.3.1-next-f1338f8080-20240426"),
    lt
  );
}
var kd;
function Mg() {
  if (kd) return ea.exports;
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
  return (n(), (ea.exports = Eg()), ea.exports);
}
var Td;
function Ag() {
  if (Td) return Ls;
  Td = 1;
  var n = Mg();
  return ((Ls.createRoot = n.createRoot), (Ls.hydrateRoot = n.hydrateRoot), Ls);
}
var Rg = Ag();
const zh = te.createContext({});
function Dg(n) {
  const i = te.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const Vg = typeof window < "u",
  Lg = Vg ? te.useLayoutEffect : te.useEffect,
  Xa = te.createContext(null);
function Ya(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function Hs(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
const Bt = (n, i, s) => (s > i ? i : s < n ? n : s);
let Za = () => {};
const vn = {},
  Bh = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  Uh = (n) => typeof n == "object" && n !== null,
  Wh = (n) => /^0[^.\s]+$/u.test(n);
function $h(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const St = (n) => n,
  gi = (...n) => n.reduce((i, s) => (l) => s(i(l))),
  hi = (n, i, s) => {
    const l = i - n;
    return l ? (s - n) / l : 1;
  };
class qa {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (Ya(this.subscriptions, i), () => Hs(this.subscriptions, i));
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
  Kh = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  Ng = 1e-7,
  _g = 12;
function jg(n, i, s, l, c) {
  let d,
    f,
    p = 0;
  do ((f = i + (s - i) / 2), (d = Kh(f, l, c) - n), d > 0 ? (s = f) : (i = f));
  while (Math.abs(d) > Ng && ++p < _g);
  return f;
}
function vi(n, i, s, l) {
  if (n === i && s === l) return St;
  const c = (d) => jg(d, 0, 1, n, s);
  return (d) => (d === 0 || d === 1 ? d : Kh(c(d), i, l));
}
const Gh = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  Qh = (n) => (i) => 1 - n(1 - i),
  Xh = vi(0.33, 1.53, 0.69, 0.99),
  Ja = Qh(Xh),
  Yh = Gh(Ja),
  Zh = (n) => (n >= 1 ? 1 : (n *= 2) < 1 ? 0.5 * Ja(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))),
  ba = (n) => 1 - Math.sin(Math.acos(n)),
  qh = Qh(ba),
  Jh = Gh(ba),
  Ig = vi(0.42, 0, 1, 1),
  Fg = vi(0, 0, 0.58, 1),
  bh = vi(0.42, 0, 0.58, 1),
  Og = (n) => Array.isArray(n) && typeof n[0] != "number",
  ep = (n) => Array.isArray(n) && typeof n[0] == "number",
  zg = {
    linear: St,
    easeIn: Ig,
    easeInOut: bh,
    easeOut: Fg,
    circIn: ba,
    circInOut: Jh,
    circOut: qh,
    backIn: Ja,
    backInOut: Yh,
    backOut: Xh,
    anticipate: Zh,
  },
  Bg = (n) => typeof n == "string",
  Pd = (n) => {
    if (ep(n)) {
      Za(n.length === 4);
      const [i, s, l, c] = n;
      return vi(i, s, l, c);
    } else if (Bg(n)) return zg[n];
    return n;
  },
  Ns = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Ug(n, i) {
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
const Wg = 40;
function tp(n, i) {
  let s = !1,
    l = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = Ns.reduce((O, B) => ((O[B] = Ug(d)), O), {}),
    {
      setup: p,
      read: m,
      resolveKeyframes: g,
      preUpdate: y,
      update: w,
      preRender: S,
      render: E,
      postRender: A,
    } = f,
    D = () => {
      const O = vn.useManualTiming,
        B = O ? c.timestamp : performance.now();
      ((s = !1),
        O || (c.delta = l ? 1e3 / 60 : Math.max(Math.min(B - c.timestamp, Wg), 1)),
        (c.timestamp = B),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        g.process(c),
        y.process(c),
        w.process(c),
        S.process(c),
        E.process(c),
        A.process(c),
        (c.isProcessing = !1),
        s && i && ((l = !1), n(D)));
    },
    R = () => {
      ((s = !0), (l = !0), c.isProcessing || n(D));
    };
  return {
    schedule: Ns.reduce((O, B) => {
      const q = f[B];
      return ((O[B] = (ie, re = !1, Z = !1) => (s || R(), q.schedule(ie, re, Z))), O);
    }, {}),
    cancel: (O) => {
      for (let B = 0; B < Ns.length; B++) f[Ns[B]].cancel(O);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: ye,
  cancel: wn,
  state: Ge,
  steps: ra,
} = tp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : St, !0);
let Fs;
function $g() {
  Fs = void 0;
}
const et = {
    now: () => (
      Fs === void 0 &&
        et.set(Ge.isProcessing || vn.useManualTiming ? Ge.timestamp : performance.now()),
      Fs
    ),
    set: (n) => {
      ((Fs = n), queueMicrotask($g));
    },
  },
  np = (n) => (i) => typeof i == "string" && i.startsWith(n),
  rp = np("--"),
  Hg = np("var(--"),
  eu = (n) => (Hg(n) ? Kg.test(n.split("/*")[0].trim()) : !1),
  Kg = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Cd(n) {
  return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--");
}
const gr = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  pi = { ...gr, transform: (n) => Bt(0, 1, n) },
  _s = { ...gr, default: 1 },
  ui = (n) => Math.round(n * 1e5) / 1e5,
  tu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Gg(n) {
  return n == null;
}
const Qg =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  nu = (n, i) => (s) =>
    !!(
      (typeof s == "string" && Qg.test(s) && s.startsWith(n)) ||
      (i && !Gg(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  ip = (n, i, s) => (l) => {
    if (typeof l != "string") return l;
    const [c, d, f, p] = l.match(tu);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  Xg = (n) => Bt(0, 255, n),
  ia = { ...gr, transform: (n) => Math.round(Xg(n)) },
  In = {
    test: nu("rgb", "red"),
    parse: ip("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: s, alpha: l = 1 }) =>
      "rgba(" +
      ia.transform(n) +
      ", " +
      ia.transform(i) +
      ", " +
      ia.transform(s) +
      ", " +
      ui(pi.transform(l)) +
      ")",
  };
function Yg(n) {
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
const ka = { test: nu("#"), parse: Yg, transform: In.transform },
  wi = (n) => ({
    test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  Yt = wi("deg"),
  zt = wi("%"),
  K = wi("px"),
  Zg = wi("vh"),
  qg = wi("vw"),
  Ed = { ...zt, parse: (n) => zt.parse(n) / 100, transform: (n) => zt.transform(n * 100) },
  dr = {
    test: nu("hsl", "hue"),
    parse: ip("hue", "saturation", "lightness"),
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
    test: (n) => In.test(n) || ka.test(n) || dr.test(n),
    parse: (n) => (In.test(n) ? In.parse(n) : dr.test(n) ? dr.parse(n) : ka.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? In.transform(n) : dr.transform(n),
    getAnimatableNone: (n) => {
      const i = Fe.parse(n);
      return ((i.alpha = 0), Fe.transform(i));
    },
  },
  Jg =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function bg(n) {
  var i, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(tu)) == null ? void 0 : i.length) || 0) +
      (((s = n.match(Jg)) == null ? void 0 : s.length) || 0) >
      0
  );
}
const sp = "number",
  op = "color",
  ev = "var",
  tv = "var(",
  Md = "${}",
  nv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function mr(n) {
  const i = n.toString(),
    s = [],
    l = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      nv,
      (m) => (
        Fe.test(m)
          ? (l.color.push(d), c.push(op), s.push(Fe.parse(m)))
          : m.startsWith(tv)
            ? (l.var.push(d), c.push(ev), s.push(m))
            : (l.number.push(d), c.push(sp), s.push(parseFloat(m))),
        ++d,
        Md
      ),
    )
    .split(Md);
  return { values: s, split: p, indexes: l, types: c };
}
function rv(n) {
  return mr(n).values;
}
function lp({ split: n, types: i }) {
  const s = n.length;
  return (l) => {
    let c = "";
    for (let d = 0; d < s; d++)
      if (((c += n[d]), l[d] !== void 0)) {
        const f = i[d];
        f === sp ? (c += ui(l[d])) : f === op ? (c += Fe.transform(l[d])) : (c += l[d]);
      }
    return c;
  };
}
function iv(n) {
  return lp(mr(n));
}
const sv = (n) => (typeof n == "number" ? 0 : Fe.test(n) ? Fe.getAnimatableNone(n) : n),
  ov = (n, i) => (typeof n == "number" ? (i != null && i.trim().endsWith("/") ? n : 0) : sv(n));
function lv(n) {
  const i = mr(n);
  return lp(i)(i.values.map((l, c) => ov(l, i.split[c])));
}
const Vt = { test: bg, parse: rv, createTransformer: iv, getAnimatableNone: lv };
function sa(n, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n
  );
}
function av({ hue: n, saturation: i, lightness: s, alpha: l }) {
  ((n /= 360), (i /= 100), (s /= 100));
  let c = 0,
    d = 0,
    f = 0;
  if (!i) c = d = f = s;
  else {
    const p = s < 0.5 ? s * (1 + i) : s + i - s * i,
      m = 2 * s - p;
    ((c = sa(m, p, n + 1 / 3)), (d = sa(m, p, n)), (f = sa(m, p, n - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: l,
  };
}
function Ks(n, i) {
  return (s) => (s > 0 ? i : n);
}
const me = (n, i, s) => n + (i - n) * s,
  oa = (n, i, s) => {
    const l = n * n,
      c = s * (i * i - l) + l;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  uv = [ka, In, dr],
  cv = (n) => uv.find((i) => i.test(n));
function Ad(n) {
  const i = cv(n);
  if (!i) return !1;
  let s = i.parse(n);
  return (i === dr && (s = av(s)), s);
}
const Rd = (n, i) => {
    const s = Ad(n),
      l = Ad(i);
    if (!s || !l) return Ks(n, i);
    const c = { ...s };
    return (d) => (
      (c.red = oa(s.red, l.red, d)),
      (c.green = oa(s.green, l.green, d)),
      (c.blue = oa(s.blue, l.blue, d)),
      (c.alpha = me(s.alpha, l.alpha, d)),
      In.transform(c)
    );
  },
  Ta = new Set(["none", "hidden"]);
function fv(n, i) {
  return Ta.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n);
}
function dv(n, i) {
  return (s) => me(n, i, s);
}
function ru(n) {
  return typeof n == "number"
    ? dv
    : typeof n == "string"
      ? eu(n)
        ? Ks
        : Fe.test(n)
          ? Rd
          : mv
      : Array.isArray(n)
        ? ap
        : typeof n == "object"
          ? Fe.test(n)
            ? Rd
            : hv
          : Ks;
}
function ap(n, i) {
  const s = [...n],
    l = s.length,
    c = n.map((d, f) => ru(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < l; f++) s[f] = c[f](d);
    return s;
  };
}
function hv(n, i) {
  const s = { ...n, ...i },
    l = {};
  for (const c in s) n[c] !== void 0 && i[c] !== void 0 && (l[c] = ru(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in l) s[d] = l[d](c);
    return s;
  };
}
function pv(n, i) {
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
const mv = (n, i) => {
  const s = Vt.createTransformer(i),
    l = mr(n),
    c = mr(i);
  return l.indexes.var.length === c.indexes.var.length &&
    l.indexes.color.length === c.indexes.color.length &&
    l.indexes.number.length >= c.indexes.number.length
    ? (Ta.has(n) && !c.values.length) || (Ta.has(i) && !l.values.length)
      ? fv(n, i)
      : gi(ap(pv(l, c), c.values), s)
    : Ks(n, i);
};
function up(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number"
    ? me(n, i, s)
    : ru(n)(n, i);
}
const yv = (n) => {
    const i = ({ timestamp: s }) => n(s);
    return {
      start: (s = !0) => ye.update(i, s),
      stop: () => wn(i),
      now: () => (Ge.isProcessing ? Ge.timestamp : et.now()),
    };
  },
  cp = (n, i, s = 10) => {
    let l = "";
    const c = Math.max(Math.round(i / s), 2);
    for (let d = 0; d < c; d++) l += Math.round(n(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${l.substring(0, l.length - 2)})`;
  },
  Gs = 2e4;
function iu(n) {
  let i = 0;
  const s = 50;
  let l = n.next(i);
  for (; !l.done && i < Gs;) ((i += s), (l = n.next(i)));
  return i >= Gs ? 1 / 0 : i;
}
function gv(n, i = 100, s) {
  const l = s({ ...n, keyframes: [0, i] }),
    c = Math.min(iu(l), Gs);
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
function Pa(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const vv = 12;
function wv(n, i, s) {
  let l = s;
  for (let c = 1; c < vv; c++) l = l - n(l) / i(l);
  return l;
}
const la = 0.001;
function xv({
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
      ? ((c = (g) => {
          const y = g * f,
            w = y * n,
            S = y - s,
            E = Pa(g, f),
            A = Math.exp(-w);
          return la - (S / E) * A;
        }),
        (d = (g) => {
          const w = g * f * n,
            S = w * s + s,
            E = Math.pow(f, 2) * Math.pow(g, 2) * n,
            A = Math.exp(-w),
            D = Pa(Math.pow(g, 2), f);
          return ((-c(g) + la > 0 ? -1 : 1) * ((S - E) * A)) / D;
        }))
      : ((c = (g) => {
          const y = Math.exp(-g * n),
            w = (g - s) * n + 1;
          return -la + y * w;
        }),
        (d = (g) => {
          const y = Math.exp(-g * n),
            w = (s - g) * (n * n);
          return y * w;
        })));
  const p = 5 / n,
    m = wv(c, d, p);
  if (((n = ht(n)), isNaN(m))) return { stiffness: Ve.stiffness, damping: Ve.damping, duration: n };
  {
    const g = Math.pow(m, 2) * l;
    return { stiffness: g, damping: f * 2 * Math.sqrt(l * g), duration: n };
  }
}
const Sv = ["duration", "bounce"],
  kv = ["stiffness", "damping", "mass"];
function Dd(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function Tv(n) {
  let i = {
    velocity: Ve.velocity,
    stiffness: Ve.stiffness,
    damping: Ve.damping,
    mass: Ve.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Dd(n, kv) && Dd(n, Sv))
    if (((i.velocity = 0), n.visualDuration)) {
      const s = n.visualDuration,
        l = (2 * Math.PI) / (s * 1.2),
        c = l * l,
        d = 2 * Bt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Ve.mass, stiffness: c, damping: d };
    } else {
      const s = xv({ ...n, velocity: 0 });
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
      damping: g,
      mass: y,
      duration: w,
      velocity: S,
      isResolvedFromDuration: E,
    } = Tv({ ...s, velocity: -xt(s.velocity || 0) }),
    A = S || 0,
    D = g / (2 * Math.sqrt(m * y)),
    R = f - d,
    j = xt(Math.sqrt(m / y)),
    z = Math.abs(R) < 5;
  (l || (l = z ? Ve.restSpeed.granular : Ve.restSpeed.default),
    c || (c = z ? Ve.restDelta.granular : Ve.restDelta.default));
  let O, B, q, ie, re, Z;
  if (D < 1)
    ((q = Pa(j, D)),
      (ie = (A + D * j * R) / q),
      (O = (J) => {
        const pe = Math.exp(-D * j * J);
        return f - pe * (ie * Math.sin(q * J) + R * Math.cos(q * J));
      }),
      (re = D * j * ie + R * q),
      (Z = D * j * R - ie * q),
      (B = (J) => Math.exp(-D * j * J) * (re * Math.sin(q * J) + Z * Math.cos(q * J))));
  else if (D === 1) {
    O = (pe) => f - Math.exp(-j * pe) * (R + (A + j * R) * pe);
    const J = A + j * R;
    B = (pe) => Math.exp(-j * pe) * (j * J * pe - A);
  } else {
    const J = j * Math.sqrt(D * D - 1);
    O = (Re) => {
      const je = Math.exp(-D * j * Re),
        Se = Math.min(J * Re, 300);
      return f - (je * ((A + D * j * R) * Math.sinh(Se) + J * R * Math.cosh(Se))) / J;
    };
    const pe = (A + D * j * R) / J,
      xe = D * j * pe - R * J,
      Le = D * j * R - pe * J;
    B = (Re) => {
      const je = Math.exp(-D * j * Re),
        Se = Math.min(J * Re, 300);
      return je * (xe * Math.sinh(Se) + Le * Math.cosh(Se));
    };
  }
  const ge = {
    calculatedDuration: (E && w) || null,
    velocity: (J) => ht(B(J)),
    next: (J) => {
      if (!E && D < 1) {
        const xe = Math.exp(-D * j * J),
          Le = Math.sin(q * J),
          Re = Math.cos(q * J),
          je = f - xe * (ie * Le + R * Re),
          Se = ht(xe * (re * Le + Z * Re));
        return (
          (p.done = Math.abs(Se) <= l && Math.abs(f - je) <= c),
          (p.value = p.done ? f : je),
          p
        );
      }
      const pe = O(J);
      if (E) p.done = J >= w;
      else {
        const xe = ht(B(J));
        p.done = Math.abs(xe) <= l && Math.abs(f - pe) <= c;
      }
      return ((p.value = p.done ? f : pe), p);
    },
    toString: () => {
      const J = Math.min(iu(ge), Gs),
        pe = cp((xe) => ge.next(J * xe).value, J, 30);
      return J + "ms " + pe;
    },
    toTransition: () => {},
  };
  return ge;
}
Qs.applyToOptions = (n) => {
  const i = gv(n, 100, Qs);
  return ((n.ease = i.ease), (n.duration = ht(i.duration)), (n.type = "keyframes"), n);
};
const Pv = 5;
function fp(n, i, s) {
  const l = Math.max(i - Pv, 0);
  return Hh(s - n(l), i - l);
}
function Ca({
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
    E = (Z) => (p !== void 0 && Z < p) || (m !== void 0 && Z > m),
    A = (Z) => (p === void 0 ? m : m === void 0 || Math.abs(p - Z) < Math.abs(m - Z) ? p : m);
  let D = s * i;
  const R = w + D,
    j = f === void 0 ? R : f(R);
  j !== R && (D = j - w);
  const z = (Z) => -D * Math.exp(-Z / l),
    O = (Z) => j + z(Z),
    B = (Z) => {
      const ge = z(Z),
        J = O(Z);
      ((S.done = Math.abs(ge) <= g), (S.value = S.done ? j : J));
    };
  let q, ie;
  const re = (Z) => {
    E(S.value) &&
      ((q = Z),
      (ie = Qs({
        keyframes: [S.value, A(S.value)],
        velocity: fp(O, Z, S.value),
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
      next: (Z) => {
        let ge = !1;
        return (
          !ie && q === void 0 && ((ge = !0), B(Z), re(Z)),
          q !== void 0 && Z >= q ? ie.next(Z - q) : (!ge && B(Z), S)
        );
      },
    }
  );
}
function Cv(n, i, s) {
  const l = [],
    c = s || vn.mix || up,
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
function Ev(n, i, { clamp: s = !0, ease: l, mixer: c } = {}) {
  const d = n.length;
  if ((Za(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = Cv(i, l, c),
    m = p.length,
    g = (y) => {
      if (f && y < n[0]) return i[0];
      let w = 0;
      if (m > 1) for (; w < n.length - 2 && !(y < n[w + 1]); w++);
      const S = hi(n[w], n[w + 1], y);
      return p[w](S);
    };
  return s ? (y) => g(Bt(n[0], n[d - 1], y)) : g;
}
function Mv(n, i) {
  const s = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const c = hi(0, i, l);
    n.push(me(s, 1, c));
  }
}
function Av(n) {
  const i = [0];
  return (Mv(i, n.length - 1), i);
}
function Rv(n, i) {
  return n.map((s) => s * i);
}
function Dv(n, i) {
  return n.map(() => i || bh).splice(0, n.length - 1);
}
function ci({ duration: n = 300, keyframes: i, times: s, ease: l = "easeInOut" }) {
  const c = Og(l) ? l.map(Pd) : Pd(l),
    d = { done: !1, value: i[0] },
    f = Rv(s && s.length === i.length ? s : Av(i), n),
    p = Ev(f, i, { ease: Array.isArray(c) ? c : Dv(i, c) });
  return { calculatedDuration: n, next: (m) => ((d.value = p(m)), (d.done = m >= n), d) };
}
const Vv = (n) => n !== null;
function eo(n, { repeat: i, repeatType: s = "loop" }, l, c = 1) {
  const d = n.filter(Vv),
    p = c < 0 || (i && s !== "loop" && i % 2 === 1) ? 0 : d.length - 1;
  return !p || l === void 0 ? d[p] : l;
}
const Lv = { decay: Ca, inertia: Ca, tween: ci, keyframes: ci, spring: Qs };
function dp(n) {
  typeof n.type == "string" && (n.type = Lv[n.type]);
}
class su {
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
const Nv = (n) => n / 100;
class Xs extends su {
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
    dp(i);
    const { type: s = ci, repeat: l = 0, repeatDelay: c = 0, repeatType: d, velocity: f = 0 } = i;
    let { keyframes: p } = i;
    const m = s || ci;
    m !== ci &&
      typeof p[0] != "number" &&
      ((this.mixKeyframes = gi(Nv, up(p[0], p[1]))), (p = [0, 100]));
    const g = m({ ...i, keyframes: p });
    (d === "mirror" &&
      (this.mirroredGenerator = m({ ...i, keyframes: [...p].reverse(), velocity: -f })),
      g.calculatedDuration === null && (g.calculatedDuration = iu(g)));
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
      repeatDelay: E,
      type: A,
      onUpdate: D,
      finalKeyframe: R,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 && (this.startTime = Math.min(i - c / this.speed, this.startTime)),
      s ? (this.currentTime = i) : this.updateTime(i));
    const j = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1),
      z = this.playbackSpeed >= 0 ? j < 0 : j > c;
    ((this.currentTime = Math.max(j, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = c));
    let O = this.currentTime,
      B = l;
    if (w) {
      const Z = Math.min(this.currentTime, c) / p;
      let ge = Math.floor(Z),
        J = Z % 1;
      (!J && Z >= 1 && (J = 1),
        J === 1 && ge--,
        (ge = Math.min(ge, w + 1)),
        !!(ge % 2) &&
          (S === "reverse" ? ((J = 1 - J), E && (J -= E / p)) : S === "mirror" && (B = f)),
        (O = Bt(0, 1, J) * p));
    }
    let q;
    (z ? ((this.delayState.value = y[0]), (q = this.delayState)) : (q = B.next(O)),
      d && !z && (q.value = d(q.value)));
    let { done: ie } = q;
    !z &&
      m !== null &&
      (ie = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const re =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ie));
    return (
      re && A !== Ca && (q.value = eo(y, this.options, R, this.speed)),
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
    return fp((l) => this.generator.next(l).value, i, s);
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
    const { driver: i = yv, startTime: s } = this.options;
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
function _v(n) {
  for (let i = 1; i < n.length; i++) n[i] ?? (n[i] = n[i - 1]);
}
const Fn = (n) => (n * 180) / Math.PI,
  Ea = (n) => {
    const i = Fn(Math.atan2(n[1], n[0]));
    return Ma(i);
  },
  jv = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: Ea,
    rotateZ: Ea,
    skewX: (n) => Fn(Math.atan(n[1])),
    skewY: (n) => Fn(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  Ma = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  Vd = Ea,
  Ld = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  Nd = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  Iv = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ld,
    scaleY: Nd,
    scale: (n) => (Ld(n) + Nd(n)) / 2,
    rotateX: (n) => Ma(Fn(Math.atan2(n[6], n[5]))),
    rotateY: (n) => Ma(Fn(Math.atan2(-n[2], n[0]))),
    rotateZ: Vd,
    rotate: Vd,
    skewX: (n) => Fn(Math.atan(n[4])),
    skewY: (n) => Fn(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function Aa(n) {
  return n.includes("scale") ? 1 : 0;
}
function Ra(n, i) {
  if (!n || n === "none") return Aa(i);
  const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let l, c;
  if (s) ((l = Iv), (c = s));
  else {
    const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((l = jv), (c = p));
  }
  if (!c) return Aa(i);
  const d = l[i],
    f = c[1].split(",").map(Ov);
  return typeof d == "function" ? d(f) : f[d];
}
const Fv = (n, i) => {
  const { transform: s = "none" } = getComputedStyle(n);
  return Ra(s, i);
};
function Ov(n) {
  return parseFloat(n.trim());
}
const vr = [
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
  wr = new Set([...vr, "pathRotation"]),
  _d = (n) => n === gr || n === K,
  zv = new Set(["x", "y", "z"]),
  Bv = vr.filter((n) => !zv.has(n));
function Uv(n) {
  const i = [];
  return (
    Bv.forEach((s) => {
      const l = n.getValue(s);
      l !== void 0 && (i.push([s, l.get()]), l.set(s.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const gn = {
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
  x: (n, { transform: i }) => Ra(i, "x"),
  y: (n, { transform: i }) => Ra(i, "y"),
};
gn.translateX = gn.x;
gn.translateY = gn.y;
const On = new Set();
let Da = !1,
  Va = !1,
  La = !1;
function hp() {
  if (Va) {
    const n = Array.from(On).filter((l) => l.needsMeasurement),
      i = new Set(n.map((l) => l.element)),
      s = new Map();
    (i.forEach((l) => {
      const c = Uv(l);
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
  ((Va = !1), (Da = !1), On.forEach((n) => n.complete(La)), On.clear());
}
function pp() {
  On.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (Va = !0));
  });
}
function Wv() {
  ((La = !0), pp(), hp(), (La = !1));
}
class ou {
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
        ? (On.add(this), Da || ((Da = !0), ye.read(pp), ye.resolveKeyframes(hp)))
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
    _v(i);
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
const $v = (n) => n.startsWith("--");
function mp(n, i, s) {
  $v(i) ? n.style.setProperty(i, s) : (n.style[i] = s);
}
const Hv = {};
function yp(n, i) {
  const s = $h(n);
  return () => Hv[i] ?? s();
}
const Kv = yp(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  gp = yp(() => {
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
function vp(n, i) {
  if (n)
    return typeof n == "function"
      ? gp()
        ? cp(n, i)
        : "ease-out"
      : ep(n)
        ? ai(n)
        : Array.isArray(n)
          ? n.map((s) => vp(s, i) || jd.easeOut)
          : jd[n];
}
function Gv(
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
  const w = vp(p, c);
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
function wp(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function Qv({ type: n, ...i }) {
  return wp(n) && gp()
    ? n.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class xp extends su {
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
      Za(typeof i.type != "string"));
    const g = Qv(i);
    ((this.animation = Gv(s, l, c, g, d)),
      g.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const y = eo(c, this.options, p, this.speed);
          (this.updateMotionValue && this.updateMotionValue(y),
            mp(s, l, y),
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
      i && Kv()
        ? ((this.animation.timeline = i),
          s && (this.animation.rangeStart = s),
          l && (this.animation.rangeEnd = l),
          St)
        : c(this)
    );
  }
}
const Sp = { anticipate: Zh, backInOut: Yh, circInOut: Jh };
function Xv(n) {
  return n in Sp;
}
function Yv(n) {
  typeof n.ease == "string" && Xv(n.ease) && (n.ease = Sp[n.ease]);
}
const aa = 10;
class Zv extends xp {
  constructor(i) {
    (Yv(i),
      dp(i),
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
      m = Math.max(aa, et.now() - this.startTime),
      g = Bt(0, aa, m - aa),
      y = p.sample(m).value,
      { name: w } = this.options;
    (d && w && mp(d, w, y), s.setWithVelocity(p.sample(Math.max(0, m - g)).value, y, g), p.stop());
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
function qv(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== i) return !0;
}
function Jv(n, i, s, l) {
  const c = n[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = Id(c, i),
    p = Id(d, i);
  return !f || !p ? !1 : qv(n) || ((s === "spring" || wp(s)) && l);
}
function Na(n) {
  ((n.duration = 0), (n.type = "keyframes"));
}
const kp = new Set(["opacity", "clipPath", "filter", "transform"]),
  bv = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function e0(n) {
  for (let i = 0; i < n.length; i++) if (typeof n[i] == "string" && bv.test(n[i])) return !0;
  return !1;
}
const t0 = new Set([
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
  n0 = $h(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function r0(n) {
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
    n0() &&
    s &&
    (kp.has(s) || (t0.has(s) && e0(p))) &&
    (s !== "transform" || !y) &&
    !g &&
    !l &&
    c !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const i0 = 40;
class s0 extends su {
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
        var D, R;
        (this._animation &&
          (this._animation.stop(), (D = this.stopTimeline) == null || D.call(this)),
          (R = this.keyframeResolver) == null || R.cancel());
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
      E = (y == null ? void 0 : y.KeyframeResolver) || ou;
    ((this.keyframeResolver = new E(
      p,
      (D, R, j) => this.onKeyframesResolved(D, R, S, !j),
      m,
      g,
      y,
    )),
      (A = this.keyframeResolver) == null || A.scheduleResolve());
  }
  onKeyframesResolved(i, s, l, c) {
    var j, z;
    this.keyframeResolver = void 0;
    const { name: d, type: f, velocity: p, delay: m, isHandoff: g, onUpdate: y } = l;
    this.resolvedAt = et.now();
    let w = !0;
    Jv(i, d, f, p) ||
      ((w = !1),
      (vn.instantAnimations || !m) && (y == null || y(eo(i, l, s))),
      (i[0] = i[i.length - 1]),
      Na(l),
      (l.repeat = 0));
    const E = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > i0
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: s,
        ...l,
        keyframes: i,
      },
      A = w && !g && r0(E),
      D = (z = (j = E.motionValue) == null ? void 0 : j.owner) == null ? void 0 : z.current;
    let R;
    if (A)
      try {
        R = new Zv({ ...E, element: D });
      } catch {
        R = new Xs(E);
      }
    else R = new Xs(E);
    (R.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(St),
      this.pendingTimeline &&
        ((this.stopTimeline = R.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = R));
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
      this._animation || ((i = this.keyframeResolver) == null || i.resume(), Wv()),
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
function Tp(n, i, s, l = 0, c = 1) {
  const d = Array.from(n)
      .sort((g, y) => g.sortNodePosition(y))
      .indexOf(i),
    f = n.size,
    p = (f - 1) * l;
  return typeof s == "function" ? s(d, f) : c === 1 ? d * l : p - d * l;
}
const Fd = 30,
  o0 = (n) => !isNaN(parseFloat(n));
class l0 {
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
      this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = o0(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new qa());
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
  return new l0(n, i);
}
function Pp(n, i) {
  if (n != null && n.inherit && i) {
    const { inherit: s, ...l } = n;
    return { ...i, ...l };
  }
  return n;
}
function lu(n, i) {
  const s = (n == null ? void 0 : n[i]) ?? (n == null ? void 0 : n.default) ?? n;
  return s !== n ? Pp(s, n) : s;
}
const a0 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  u0 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  c0 = { type: "keyframes", duration: 0.8 },
  f0 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  d0 = (n, { keyframes: i }) =>
    i.length > 2 ? c0 : wr.has(n) ? (n.startsWith("scale") ? u0(i[1]) : a0) : f0,
  h0 = new Set([
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
function p0(n) {
  for (const i in n) if (!h0.has(i)) return !0;
  return !1;
}
const au =
    (n, i, s, l = {}, c, d) =>
    (f) => {
      const p = lu(l, n) || {},
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
      (p0(p) || Object.assign(y, d0(n, y)),
        y.duration && (y.duration = ht(y.duration)),
        y.repeatDelay && (y.repeatDelay = ht(y.repeatDelay)),
        y.from !== void 0 && (y.keyframes[0] = y.from));
      let w = !1;
      if (
        ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
          (Na(y), y.delay === 0 && (w = !0)),
        (vn.instantAnimations ||
          vn.skipAnimations ||
          (c != null && c.shouldSkipAnimations) ||
          p.skipAnimations) &&
          ((w = !0), Na(y), (y.delay = 0)),
        (y.allowFlatten = !p.type && !p.ease),
        w && !d && i.get() !== void 0)
      ) {
        const S = eo(y.keyframes, p);
        if (S !== void 0) {
          ye.update(() => {
            (y.onUpdate(S), y.onComplete());
          });
          return;
        }
      }
      return p.isSync ? new Xs(y) : new s0(y);
    },
  m0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function y0(n) {
  const i = m0.exec(n);
  if (!i) return [,];
  const [, s, l, c] = i;
  return [`--${s ?? l}`, c];
}
function Cp(n, i, s = 1) {
  const [l, c] = y0(n);
  if (!l) return;
  const d = window.getComputedStyle(i).getPropertyValue(l);
  if (d) {
    const f = d.trim();
    return Bh(f) ? parseFloat(f) : f;
  }
  return eu(c) ? Cp(c, i, s + 1) : c;
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
function uu(n, i, s, l) {
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
  return uu(l, i, s !== void 0 ? s : l.custom, n);
}
const Ep = new Set(["width", "height", "top", "left", "right", "bottom", ...vr]),
  _a = (n) => Array.isArray(n);
function g0(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, yr(s));
}
function v0(n) {
  return _a(n) ? n[n.length - 1] || 0 : n;
}
function w0(n, i) {
  const s = zn(n, i);
  let { transitionEnd: l = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...l };
  for (const f in d) {
    const p = v0(d[f]);
    g0(n, f, p);
  }
}
const Qe = (n) => !!(n && n.getVelocity);
function x0(n) {
  return !!(Qe(n) && n.add);
}
function ja(n, i) {
  const s = n.getValue("willChange");
  if (x0(s)) return s.add(i);
  if (!s && vn.WillChange) {
    const l = new vn.WillChange("auto");
    (n.addValue("willChange", l), l.add(i));
  }
}
function cu(n) {
  return n.replace(/([A-Z])/g, (i) => `-${i.toLowerCase()}`);
}
const S0 = "framerAppearId",
  Mp = "data-" + cu(S0);
function Ap(n) {
  return n.props[Mp];
}
function k0({ protectedKeys: n, needsAnimating: i }, s) {
  const l = n.hasOwnProperty(s) && i[s] !== !0;
  return ((i[s] = !1), l);
}
function Rp(n, i, { delay: s = 0, transitionOverride: l, type: c } = {}) {
  let { transition: d, transitionEnd: f, ...p } = i;
  const m = n.getDefaultTransition();
  d = d ? Pp(d, m) : m;
  const g = d == null ? void 0 : d.reduceMotion,
    y = d == null ? void 0 : d.skipAnimations;
  l && (d = l);
  const w = [],
    S = c && n.animationState && n.animationState.getState()[c],
    E = d == null ? void 0 : d.path;
  E && E.animateVisualElement(n, p, d, s, w);
  for (const A in p) {
    const D = n.getValue(A, n.latestValues[A] ?? null),
      R = p[A];
    if (R === void 0 || (S && k0(S, A))) continue;
    const j = { delay: s, ...lu(d || {}, A) };
    y && (j.skipAnimations = !0);
    const z = D.get();
    if (z !== void 0 && !D.isAnimating() && !Array.isArray(R) && R === z && !j.velocity) {
      ye.update(() => D.set(R));
      continue;
    }
    let O = !1;
    if (window.MotionHandoffAnimation) {
      const ie = Ap(n);
      if (ie) {
        const re = window.MotionHandoffAnimation(ie, A, ye);
        re !== null && ((j.startTime = re), (O = !0));
      }
    }
    ja(n, A);
    const B = g ?? n.shouldReduceMotion;
    D.start(au(A, D, R, B && Ep.has(A) ? { type: !1 } : j, n, O));
    const q = D.animation;
    q && w.push(q);
  }
  if (f) {
    const A = () =>
      ye.update(() => {
        f && w0(n, f);
      });
    w.length ? Promise.all(w).then(A) : A();
  }
  return w;
}
function Ia(n, i, s = {}) {
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
        ? (g = 0) => {
            const { delayChildren: y = 0, staggerChildren: w, staggerDirection: S } = c;
            return T0(n, i, g, y, w, S, s);
          }
        : () => Promise.resolve(),
    { when: p } = c;
  if (p) {
    const [g, y] = p === "beforeChildren" ? [d, f] : [f, d];
    return g().then(() => y());
  } else return Promise.all([d(), f(s.delay)]);
}
function T0(n, i, s = 0, l = 0, c = 0, d = 1, f) {
  const p = [];
  for (const m of n.variantChildren)
    (m.notify("AnimationStart", i),
      p.push(
        Ia(m, i, {
          ...f,
          delay: s + (typeof l == "function" ? 0 : l) + Tp(n.variantChildren, m, l, c, d),
        }).then(() => m.notify("AnimationComplete", i)),
      ));
  return Promise.all(p);
}
function P0(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const c = i.map((d) => Ia(n, d, s));
    l = Promise.all(c);
  } else if (typeof i == "string") l = Ia(n, i, s);
  else {
    const c = typeof i == "function" ? zn(n, i, s.custom) : i;
    l = Promise.all(Rp(n, c, s));
  }
  return l.then(() => {
    n.notify("AnimationComplete", i);
  });
}
const C0 = { test: (n) => n === "auto", parse: (n) => n },
  Dp = (n) => (i) => i.test(n),
  Vp = [gr, K, zt, Yt, qg, Zg, C0],
  zd = (n) => Vp.find(Dp(n));
function E0(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Wh(n) : !0;
}
const M0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function A0(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [l] = s.match(tu) || [];
  if (!l) return n;
  const c = s.replace(l, "");
  let d = M0.has(i) ? 1 : 0;
  return (l !== s && (d *= 100), i + "(" + d + c + ")");
}
const R0 = /\b([a-z-]*)\(.*?\)/gu,
  Fa = {
    ...Vt,
    getAnimatableNone: (n) => {
      const i = n.match(R0);
      return i ? i.map(A0).join(" ") : n;
    },
  },
  Oa = {
    ...Vt,
    getAnimatableNone: (n) => {
      const i = Vt.parse(n);
      return Vt.createTransformer(n)(
        i.map((l) => (typeof l == "number" ? 0 : typeof l == "object" ? { ...l, alpha: 1 } : l)),
      );
    },
  },
  Bd = { ...gr, transform: Math.round },
  D0 = {
    rotate: Yt,
    pathRotation: Yt,
    rotateX: Yt,
    rotateY: Yt,
    rotateZ: Yt,
    scale: _s,
    scaleX: _s,
    scaleY: _s,
    scaleZ: _s,
    skew: Yt,
    skewX: Yt,
    skewY: Yt,
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
    originX: Ed,
    originY: Ed,
    originZ: K,
  },
  Ys = {
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
    ...D0,
    zIndex: Bd,
    fillOpacity: pi,
    strokeOpacity: pi,
    numOctaves: Bd,
  },
  V0 = {
    ...Ys,
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
    filter: Fa,
    WebkitFilter: Fa,
    mask: Oa,
    WebkitMask: Oa,
  },
  Lp = (n) => V0[n],
  L0 = new Set([Fa, Oa]);
function Np(n, i) {
  let s = Lp(n);
  return (L0.has(s) || (s = Vt), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0);
}
const N0 = new Set(["auto", "none", "0"]);
function _0(n, i, s) {
  let l = 0,
    c;
  for (; l < n.length && !c;) {
    const d = n[l];
    (typeof d == "string" && !N0.has(d) && mr(d).values.length && (c = n[l]), l++);
  }
  if (c && s) for (const d of i) n[d] = Np(s, c);
}
class j0 extends ou {
  constructor(i, s, l, c, d) {
    super(i, s, l, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: l } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let y = 0; y < i.length; y++) {
      let w = i[y];
      if (typeof w == "string" && ((w = w.trim()), eu(w))) {
        const S = Cp(w, s.current);
        (S !== void 0 && (i[y] = S), y === i.length - 1 && (this.finalKeyframe = w));
      }
    }
    if ((this.resolveNoneKeyframes(), !Ep.has(l) || i.length !== 2)) return;
    const [c, d] = i,
      f = zd(c),
      p = zd(d),
      m = Cd(c),
      g = Cd(d);
    if (m !== g && gn[l]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== p)
      if (_d(f) && _d(p))
        for (let y = 0; y < i.length; y++) {
          const w = i[y];
          typeof w == "string" && (i[y] = parseFloat(w));
        }
      else gn[l] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      l = [];
    for (let c = 0; c < i.length; c++) (i[c] === null || E0(i[c])) && l.push(c);
    l.length && _0(i, l, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: l } = this;
    if (!i || !i.current) return;
    (l === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = gn[l](i.measureViewportBox(), window.getComputedStyle(i.current))),
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
    ((l[d] = gn[s](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (p = this.removedTransforms) != null &&
        p.length &&
        this.removedTransforms.forEach(([m, g]) => {
          i.getValue(m).set(g);
        }),
      this.resolveNoneKeyframes());
  }
}
function _p(n, i, s) {
  if (n == null) return [];
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    let l = document;
    const c = (s == null ? void 0 : s[n]) ?? l.querySelectorAll(n);
    return c ? Array.from(c) : [];
  }
  return Array.from(n).filter((l) => l != null);
}
const za = (n, i) => (i && typeof n == "number" ? i.transform(n) : n);
function I0(n) {
  return Uh(n) && "offsetHeight" in n && !("ownerSVGElement" in n);
}
const { schedule: fu } = tp(queueMicrotask, !1),
  Dt = { x: !1, y: !1 };
function jp() {
  return Dt.x || Dt.y;
}
function F0(n) {
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
function Ip(n, i) {
  const s = _p(n),
    l = new AbortController(),
    c = { passive: !0, ...i, signal: l.signal };
  return [s, c, () => l.abort()];
}
function O0(n) {
  return !(n.pointerType === "touch" || jp());
}
function z0(n, i, s = {}) {
  const [l, c, d] = Ip(n, s);
  return (
    l.forEach((f) => {
      let p = !1,
        m = !1,
        g;
      const y = () => {
          f.removeEventListener("pointerleave", A);
        },
        w = (R) => {
          (g && (g(R), (g = void 0)), y());
        },
        S = (R) => {
          ((p = !1),
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            m && ((m = !1), w(R)));
        },
        E = () => {
          ((p = !0),
            window.addEventListener("pointerup", S, c),
            window.addEventListener("pointercancel", S, c));
        },
        A = (R) => {
          if (R.pointerType !== "touch") {
            if (p) {
              m = !0;
              return;
            }
            w(R);
          }
        },
        D = (R) => {
          if (!O0(R)) return;
          m = !1;
          const j = i(f, R);
          typeof j == "function" && ((g = j), f.addEventListener("pointerleave", A, c));
        };
      (f.addEventListener("pointerenter", D, c), f.addEventListener("pointerdown", E, c));
    }),
    d
  );
}
const Fp = (n, i) => (i ? (n === i ? !0 : Fp(n, i.parentElement)) : !1),
  du = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  B0 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function U0(n) {
  return B0.has(n.tagName) || n.isContentEditable === !0;
}
const W0 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function $0(n) {
  return W0.has(n.tagName) || n.isContentEditable === !0;
}
const Os = new WeakSet();
function Ud(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function ua(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const H0 = (n, i) => {
  const s = n.currentTarget;
  if (!s) return;
  const l = Ud(() => {
    if (Os.has(s)) return;
    ua(s, "down");
    const c = Ud(() => {
        ua(s, "up");
      }),
      d = () => ua(s, "cancel");
    (s.addEventListener("keyup", c, i), s.addEventListener("blur", d, i));
  });
  (s.addEventListener("keydown", l, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", l), i));
};
function Wd(n) {
  return du(n) && !jp();
}
const $d = new WeakSet();
function K0(n, i, s = {}) {
  const [l, c, d] = Ip(n, s),
    f = (p) => {
      const m = p.currentTarget;
      if (!Wd(p) || $d.has(p)) return;
      (Os.add(m), s.stopPropagation && $d.add(p));
      const g = i(m, p),
        y = (E, A) => {
          (window.removeEventListener("pointerup", w),
            window.removeEventListener("pointercancel", S),
            Os.has(m) && Os.delete(m),
            Wd(E) && typeof g == "function" && g(E, { success: A }));
        },
        w = (E) => {
          y(E, m === window || m === document || s.useGlobalTarget || Fp(m, E.target));
        },
        S = (E) => {
          y(E, !1);
        };
      (window.addEventListener("pointerup", w, c), window.addEventListener("pointercancel", S, c));
    };
  return (
    l.forEach((p) => {
      ((s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        I0(p) &&
          (p.addEventListener("focus", (g) => H0(g, c)),
          !U0(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0)));
    }),
    d
  );
}
function hu(n) {
  return Uh(n) && "ownerSVGElement" in n;
}
const zs = new WeakMap();
let yn;
const Op = (n, i, s) => (l, c) =>
    c && c[0] ? c[0][n + "Size"] : hu(l) && "getBBox" in l ? l.getBBox()[i] : l[s],
  G0 = Op("inline", "width", "offsetWidth"),
  Q0 = Op("block", "height", "offsetHeight");
function X0({ target: n, borderBoxSize: i }) {
  var s;
  (s = zs.get(n)) == null ||
    s.forEach((l) => {
      l(n, {
        get width() {
          return G0(n, i);
        },
        get height() {
          return Q0(n, i);
        },
      });
    });
}
function Y0(n) {
  n.forEach(X0);
}
function Z0() {
  typeof ResizeObserver > "u" || (yn = new ResizeObserver(Y0));
}
function q0(n, i) {
  yn || Z0();
  const s = _p(n);
  return (
    s.forEach((l) => {
      let c = zs.get(l);
      (c || ((c = new Set()), zs.set(l, c)), c.add(i), yn == null || yn.observe(l));
    }),
    () => {
      s.forEach((l) => {
        const c = zs.get(l);
        (c == null || c.delete(i), (c != null && c.size) || yn == null || yn.unobserve(l));
      });
    }
  );
}
const Bs = new Set();
let hr;
function J0() {
  ((hr = () => {
    const n = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Bs.forEach((i) => i(n));
  }),
    window.addEventListener("resize", hr));
}
function b0(n) {
  return (
    Bs.add(n),
    hr || J0(),
    () => {
      (Bs.delete(n),
        !Bs.size &&
          typeof hr == "function" &&
          (window.removeEventListener("resize", hr), (hr = void 0)));
    }
  );
}
function Hd(n, i) {
  return typeof n == "function" ? b0(n) : q0(n, i);
}
function e1(n) {
  return hu(n) && n.tagName === "svg";
}
const t1 = [...Vp, Fe, Vt],
  n1 = (n) => t1.find(Dp(n)),
  Kd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  pr = () => ({ x: Kd(), y: Kd() }),
  Gd = () => ({ min: 0, max: 0 }),
  Be = () => ({ x: Gd(), y: Gd() }),
  r1 = new WeakMap();
function to(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function mi(n) {
  return typeof n == "string" || Array.isArray(n);
}
const pu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  mu = ["initial", ...pu];
function no(n) {
  return to(n.animate) || mu.some((i) => mi(n[i]));
}
function zp(n) {
  return !!(no(n) || n.variants);
}
function i1(n, i, s) {
  for (const l in i) {
    const c = i[l],
      d = s[l];
    if (Qe(c)) n.addValue(l, c);
    else if (Qe(d)) n.addValue(l, yr(c, { owner: n }));
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
const Ba = { current: null },
  Bp = { current: !1 },
  s1 = typeof window < "u";
function o1() {
  if (((Bp.current = !0), !!s1))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Ba.current = n.matches);
      (n.addEventListener("change", i), i());
    } else Ba.current = !1;
}
const Qd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Zs = {};
function Up(n) {
  Zs = n;
}
function l1() {
  return Zs;
}
class a1 {
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
      (this.KeyframeResolver = ou),
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
        const E = et.now();
        this.renderScheduledAt < E &&
          ((this.renderScheduledAt = E), ye.render(this.render, !1, !0));
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
      (this.isControllingVariants = no(s)),
      (this.isVariantNode = zp(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: w, ...S } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const E in S) {
      const A = S[E];
      g[E] !== void 0 && Qe(A) && A.set(g[E]);
    }
  }
  mount(i) {
    var s, l;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        ((s = this.values.get(c)) == null || s.jump(this.initialValues[c]),
          (this.latestValues[c] = this.initialValues[c]));
    ((this.current = i),
      r1.set(i, this),
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
          : (Bp.current || o1(), (this.shouldReduceMotion = Ba.current)),
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
      s.accelerate && kp.has(i) && this.current instanceof HTMLElement)
    ) {
      const { factory: f, keyframes: p, times: m, ease: g, duration: y } = s.accelerate,
        w = new xp({
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
    const l = wr.has(i);
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
    for (i in Zs) {
      const s = Zs[i];
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
    for (let l = 0; l < Qd.length; l++) {
      const c = Qd[l];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = i1(
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
        (typeof l == "string" && (Bh(l) || Wh(l))
          ? (l = parseFloat(l))
          : !n1(l) && Vt.test(s) && (l = Np(i, s)),
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
      const f = uu(this.props, s, (d = this.presenceContext) == null ? void 0 : d.custom);
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
    return (this.events[i] || (this.events[i] = new qa()), this.events[i].add(s));
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
  scheduleRenderMicrotask() {
    fu.render(this.render);
  }
}
class Wp extends a1 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = j0));
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
class xn {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
function $p({ top: n, left: i, right: s, bottom: l }) {
  return { x: { min: i, max: s }, y: { min: n, max: l } };
}
function u1({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function c1(n, i) {
  if (!i) return n;
  const s = i({ x: n.left, y: n.top }),
    l = i({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: l.y, right: l.x };
}
function ca(n) {
  return n === void 0 || n === 1;
}
function Ua({ scale: n, scaleX: i, scaleY: s }) {
  return !ca(n) || !ca(i) || !ca(s);
}
function jn(n) {
  return Ua(n) || Hp(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Hp(n) {
  return Xd(n.x) || Xd(n.y);
}
function Xd(n) {
  return n && n !== "0%";
}
function qs(n, i, s) {
  const l = n - s,
    c = i * l;
  return s + c;
}
function Yd(n, i, s, l, c) {
  return (c !== void 0 && (n = qs(n, c, l)), qs(n, s, l) + i);
}
function Wa(n, i = 0, s = 1, l, c) {
  ((n.min = Yd(n.min, i, s, l, c)), (n.max = Yd(n.max, i, s, l, c)));
}
function Kp(n, { x: i, y: s }) {
  (Wa(n.x, i.translate, i.scale, i.originPoint), Wa(n.y, s.translate, s.scale, s.originPoint));
}
const Zd = 0.999999999999,
  qd = 1.0000000000001;
function f1(n, i, s, l = !1) {
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
        (Ot(n.x, -d.scroll.offset.x), Ot(n.y, -d.scroll.offset.y)),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Kp(n, f)),
      l &&
        jn(d.latestValues) &&
        Us(n, d.latestValues, (p = d.layout) == null ? void 0 : p.layoutBox));
  }
  (i.x < qd && i.x > Zd && (i.x = 1), i.y < qd && i.y > Zd && (i.y = 1));
}
function Ot(n, i) {
  ((n.min += i), (n.max += i));
}
function Jd(n, i, s, l, c = 0.5) {
  const d = me(n.min, n.max, c);
  Wa(n, i, s, d, l);
}
function bd(n, i) {
  return typeof n == "string" ? (parseFloat(n) / 100) * (i.max - i.min) : n;
}
function Us(n, i, s) {
  const l = s ?? n;
  (Jd(n.x, bd(i.x, l.x), i.scaleX, i.scale, i.originX),
    Jd(n.y, bd(i.y, l.y), i.scaleY, i.scale, i.originY));
}
function Gp(n, i) {
  return $p(c1(n.getBoundingClientRect(), i));
}
function d1(n, i, s) {
  const l = Gp(n, s),
    { scroll: c } = i;
  return (c && (Ot(l.x, c.offset.x), Ot(l.y, c.offset.y)), l);
}
const h1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  p1 = vr.length;
function m1(n, i, s) {
  let l = "",
    c = !0;
  for (let f = 0; f < p1; f++) {
    const p = vr[f],
      m = n[p];
    if (m === void 0) continue;
    let g = !0;
    if (typeof m == "number") g = m === (p.startsWith("scale") ? 1 : 0);
    else {
      const y = parseFloat(m);
      g = p.startsWith("scale") ? y === 1 : y === 0;
    }
    if (!g || s) {
      const y = za(m, Ys[p]);
      if (!g) {
        c = !1;
        const w = h1[p] || p;
        l += `${w}(${y}) `;
      }
      s && (i[p] = y);
    }
  }
  const d = n.pathRotation;
  return (
    d && ((c = !1), (l += `rotate(${za(d, Ys.pathRotation)}) `)),
    (l = l.trim()),
    s ? (l = s(i, c ? "" : l)) : c && (l = "none"),
    l
  );
}
function yu(n, i, s) {
  const { style: l, vars: c, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const g = i[m];
    if (wr.has(m)) {
      f = !0;
      continue;
    } else if (rp(m)) {
      c[m] = g;
      continue;
    } else {
      const y = za(g, Ys[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = y)) : (l[m] = y);
    }
  }
  if (
    (i.transform ||
      (f || s ? (l.transform = m1(i, n.transform, s)) : l.transform && (l.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: g = "50%", originZ: y = 0 } = d;
    l.transformOrigin = `${m} ${g} ${y}`;
  }
}
function Qp(n, { style: i, vars: s }, l, c) {
  const d = n.style;
  let f;
  for (f in i) d[f] = i[f];
  c == null || c.applyProjectionStyles(d, l);
  for (f in s) d.setProperty(f, s[f]);
}
function eh(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const oi = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (K.test(n)) n = parseFloat(n);
        else return n;
      const s = eh(n, i.target.x),
        l = eh(n, i.target.y);
      return `${s}% ${l}%`;
    },
  },
  y1 = {
    correct: (n, { treeScale: i, projectionDelta: s }) => {
      const l = n,
        c = Vt.parse(n);
      if (c.length > 5) return l;
      const d = Vt.createTransformer(n),
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
  $a = {
    borderRadius: {
      ...oi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: oi,
    borderTopRightRadius: oi,
    borderBottomLeftRadius: oi,
    borderBottomRightRadius: oi,
    boxShadow: y1,
  };
function Xp(n, { layout: i, layoutId: s }) {
  return (
    wr.has(n) || n.startsWith("origin") || ((i || s !== void 0) && (!!$a[n] || n === "opacity"))
  );
}
function gu(n, i, s) {
  var f;
  const l = n.style,
    c = i == null ? void 0 : i.style,
    d = {};
  if (!l) return d;
  for (const p in l)
    (Qe(l[p]) ||
      (c && Qe(c[p])) ||
      Xp(p, n) ||
      ((f = s == null ? void 0 : s.getValue(p)) == null ? void 0 : f.liveStyle) !== void 0) &&
      (d[p] = l[p]);
  return d;
}
function g1(n) {
  return window.getComputedStyle(n);
}
class v1 extends Wp {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Qp));
  }
  readValueFromInstance(i, s) {
    var l;
    if (wr.has(s)) return (l = this.projection) != null && l.isProjecting ? Aa(s) : Fv(i, s);
    {
      const c = g1(i),
        d = (rp(s) ? c.getPropertyValue(s) : c[s]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return Gp(i, s);
  }
  build(i, s, l) {
    yu(i, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return gu(i, s, l);
  }
}
const w1 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  x1 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function S1(n, i, s = 1, l = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? w1 : x1;
  ((n[d.offset] = `${-l}`), (n[d.array] = `${i} ${s}`));
}
const k1 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Yp(
  n,
  { attrX: i, attrY: s, attrScale: l, pathLength: c, pathSpacing: d = 1, pathOffset: f = 0, ...p },
  m,
  g,
  y,
) {
  if ((yu(n, p, g), m)) {
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
  for (const E of k1) w[E] !== void 0 && ((S[E] = w[E]), delete w[E]);
  (i !== void 0 && (w.x = i),
    s !== void 0 && (w.y = s),
    l !== void 0 && (w.scale = l),
    c !== void 0 && S1(w, c, d, f, !1));
}
const Zp = new Set([
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
  qp = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function T1(n, i, s, l) {
  Qp(n, i, void 0, l);
  for (const c in i.attrs) n.setAttribute(Zp.has(c) ? c : cu(c), i.attrs[c]);
}
function Jp(n, i, s) {
  const l = gu(n, i, s);
  for (const c in n)
    if (Qe(n[c]) || Qe(i[c])) {
      const d = vr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      l[d] = n[c];
    }
  return l;
}
class P1 extends Wp {
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
    if (wr.has(s)) {
      const l = Lp(s);
      return (l && l.default) || 0;
    }
    return ((s = Zp.has(s) ? s : cu(s)), i.getAttribute(s));
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return Jp(i, s, l);
  }
  build(i, s, l) {
    Yp(i, s, this.isSVGTag, l.transformTemplate, l.style);
  }
  renderInstance(i, s, l, c) {
    T1(i, s, l, c);
  }
  mount(i) {
    ((this.isSVGTag = qp(i.tagName)), super.mount(i));
  }
}
const C1 = mu.length;
function bp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? bp(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const i = {};
  for (let s = 0; s < C1; s++) {
    const l = mu[s],
      c = n.props[l];
    (mi(c) || c === !1) && (i[l] = c);
  }
  return i;
}
function em(n, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== n.length) return !1;
  for (let l = 0; l < s; l++) if (i[l] !== n[l]) return !1;
  return !0;
}
const E1 = [...pu].reverse(),
  M1 = pu.length;
function A1(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: l }) => P0(n, s, l)));
}
function R1(n) {
  let i = A1(n),
    s = th(),
    l = !0,
    c = !1;
  const d = (g) => (y, w) => {
    var E;
    const S = zn(
      n,
      w,
      g === "exit" ? ((E = n.presenceContext) == null ? void 0 : E.custom) : void 0,
    );
    if (S) {
      const { transition: A, transitionEnd: D, ...R } = S;
      y = { ...y, ...R, ...D };
    }
    return y;
  };
  function f(g) {
    i = g(n);
  }
  function p(g) {
    const { props: y } = n,
      w = bp(n.parent) || {},
      S = [],
      E = new Set();
    let A = {},
      D = 1 / 0;
    for (let j = 0; j < M1; j++) {
      const z = E1[j],
        O = s[z],
        B = y[z] !== void 0 ? y[z] : w[z],
        q = mi(B),
        ie = z === g ? O.isActive : null;
      ie === !1 && (D = j);
      let re = B === w[z] && B !== y[z] && q;
      if (
        (re && (l || c) && n.manuallyAnimateOnMount && (re = !1),
        (O.protectedKeys = { ...A }),
        (!O.isActive && ie === null) || (!B && !O.prevProp) || to(B) || typeof B == "boolean")
      )
        continue;
      if (z === "exit" && O.isActive && ie !== !0) {
        O.prevResolvedValues && (A = { ...A, ...O.prevResolvedValues });
        continue;
      }
      const Z = D1(O.prevProp, B);
      let ge = Z || (z === g && O.isActive && !re && q) || (j > D && q),
        J = !1;
      const pe = Array.isArray(B) ? B : [B];
      let xe = pe.reduce(d(z), {});
      ie === !1 && (xe = {});
      const { prevResolvedValues: Le = {} } = O,
        Re = { ...Le, ...xe },
        je = (I) => {
          ((ge = !0), E.has(I) && ((J = !0), E.delete(I)), (O.needsAnimating[I] = !0));
          const G = n.getValue(I);
          G && (G.liveStyle = !1);
        };
      for (const I in Re) {
        const G = xe[I],
          U = Le[I];
        if (A.hasOwnProperty(I)) continue;
        let T = !1;
        (_a(G) && _a(U) ? (T = !em(G, U) || Z) : (T = G !== U),
          T
            ? G != null
              ? je(I)
              : E.add(I)
            : G !== void 0 && E.has(I)
              ? je(I)
              : (O.protectedKeys[I] = !0));
      }
      ((O.prevProp = B),
        (O.prevResolvedValues = xe),
        O.isActive && (A = { ...A, ...xe }),
        (l || c) && n.blockInitialAnimation && (ge = !1));
      const Se = re && Z;
      ge &&
        (!Se || J) &&
        S.push(
          ...pe.map((I) => {
            const G = { type: z };
            if (typeof I == "string" && (l || c) && !Se && n.manuallyAnimateOnMount && n.parent) {
              const { parent: U } = n,
                T = zn(U, I);
              if (U.enteringChildren && T) {
                const { delayChildren: V } = T.transition || {};
                G.delay = Tp(U.enteringChildren, n, V);
              }
            }
            return { animation: I, options: G };
          }),
        );
    }
    if (E.size) {
      const j = {};
      if (typeof y.initial != "boolean") {
        const z = zn(n, Array.isArray(y.initial) ? y.initial[0] : y.initial);
        z && z.transition && (j.transition = z.transition);
      }
      (E.forEach((z) => {
        const O = n.getBaseTarget(z),
          B = n.getValue(z);
        (B && (B.liveStyle = !0), (j[z] = O ?? null));
      }),
        S.push({ animation: j }));
    }
    let R = !!S.length;
    return (
      l && (y.initial === !1 || y.initial === y.animate) && !n.manuallyAnimateOnMount && (R = !1),
      (l = !1),
      (c = !1),
      R ? i(S) : Promise.resolve()
    );
  }
  function m(g, y) {
    var S;
    if (s[g].isActive === y) return Promise.resolve();
    ((S = n.variantChildren) == null ||
      S.forEach((E) => {
        var A;
        return (A = E.animationState) == null ? void 0 : A.setActive(g, y);
      }),
      (s[g].isActive = y));
    const w = p(g);
    for (const E in s) s[E].protectedKeys = {};
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
function D1(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !em(i, n) : !1;
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
function Ha(n, i) {
  ((n.min = i.min), (n.max = i.max));
}
function Rt(n, i) {
  (Ha(n.x, i.x), Ha(n.y, i.y));
}
function nh(n, i) {
  ((n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin));
}
const tm = 1e-4,
  V1 = 1 - tm,
  L1 = 1 + tm,
  nm = 0.01,
  N1 = 0 - nm,
  _1 = 0 + nm;
function tt(n) {
  return n.max - n.min;
}
function j1(n, i, s) {
  return Math.abs(n - i) <= s;
}
function rh(n, i, s, l = 0.5) {
  ((n.origin = l),
    (n.originPoint = me(i.min, i.max, n.origin)),
    (n.scale = tt(s) / tt(i)),
    (n.translate = me(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= V1 && n.scale <= L1) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= N1 && n.translate <= _1) || isNaN(n.translate)) && (n.translate = 0));
}
function fi(n, i, s, l) {
  (rh(n.x, i.x, s.x, l ? l.originX : void 0), rh(n.y, i.y, s.y, l ? l.originY : void 0));
}
function ih(n, i, s, l = 0) {
  const c = l ? me(s.min, s.max, l) : s.min;
  ((n.min = c + i.min), (n.max = n.min + tt(i)));
}
function I1(n, i, s, l) {
  (ih(n.x, i.x, s.x, l == null ? void 0 : l.x), ih(n.y, i.y, s.y, l == null ? void 0 : l.y));
}
function sh(n, i, s, l = 0) {
  const c = l ? me(s.min, s.max, l) : s.min;
  ((n.min = i.min - c), (n.max = n.min + tt(i)));
}
function Js(n, i, s, l) {
  (sh(n.x, i.x, s.x, l == null ? void 0 : l.x), sh(n.y, i.y, s.y, l == null ? void 0 : l.y));
}
function oh(n, i, s, l, c) {
  return ((n -= i), (n = qs(n, 1 / s, l)), c !== void 0 && (n = qs(n, 1 / c, l)), n);
}
function F1(n, i = 0, s = 1, l = 0.5, c, d = n, f = n) {
  if (
    (zt.test(i) && ((i = parseFloat(i)), (i = me(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = me(d.min, d.max, l);
  (n === d && (p -= i), (n.min = oh(n.min, i, s, p, c)), (n.max = oh(n.max, i, s, p, c)));
}
function lh(n, i, [s, l, c], d, f) {
  F1(n, i[s], i[l], i[c], i.scale, d, f);
}
const O1 = ["x", "scaleX", "originX"],
  z1 = ["y", "scaleY", "originY"];
function ah(n, i, s, l) {
  (lh(n.x, i, O1, s ? s.x : void 0, l ? l.x : void 0),
    lh(n.y, i, z1, s ? s.y : void 0, l ? l.y : void 0));
}
function uh(n) {
  return n.translate === 0 && n.scale === 1;
}
function rm(n) {
  return uh(n.x) && uh(n.y);
}
function ch(n, i) {
  return n.min === i.min && n.max === i.max;
}
function B1(n, i) {
  return ch(n.x, i.x) && ch(n.y, i.y);
}
function fh(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function im(n, i) {
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
function U1(n, i, s) {
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
      rotateY: E,
      skewX: A,
      skewY: D,
    } = s;
    (g && (l = `perspective(${g}px) ${l}`),
      y && (l += `rotate(${y}deg) `),
      w && (l += `rotate(${w}deg) `),
      S && (l += `rotateX(${S}deg) `),
      E && (l += `rotateY(${E}deg) `),
      A && (l += `skewX(${A}deg) `),
      D && (l += `skewY(${D}deg) `));
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return ((p !== 1 || m !== 1) && (l += `scale(${p}, ${m})`), l || "none");
}
const sm = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  W1 = sm.length,
  ph = (n) => (typeof n == "string" ? parseFloat(n) : n),
  mh = (n) => typeof n == "number" || K.test(n);
function $1(n, i, s, l, c, d) {
  c
    ? ((n.opacity = me(0, s.opacity ?? 1, H1(l))), (n.opacityExit = me(i.opacity ?? 1, 0, K1(l))))
    : d && (n.opacity = me(i.opacity ?? 1, s.opacity ?? 1, l));
  for (let f = 0; f < W1; f++) {
    const p = sm[f];
    let m = yh(i, p),
      g = yh(s, p);
    if (m === void 0 && g === void 0) continue;
    (m || (m = 0),
      g || (g = 0),
      m === 0 || g === 0 || mh(m) === mh(g)
        ? ((n[p] = Math.max(me(ph(m), ph(g), l), 0)), (zt.test(g) || zt.test(m)) && (n[p] += "%"))
        : (n[p] = g));
  }
  (i.rotate || s.rotate) && (n.rotate = me(i.rotate || 0, s.rotate || 0, l));
}
function yh(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const H1 = om(0, 0.5, qh),
  K1 = om(0.5, 0.95, St);
function om(n, i, s) {
  return (l) => (l < n ? 0 : l > i ? 1 : s(hi(n, i, l)));
}
function G1(n, i, s) {
  const l = Qe(n) ? n : yr(n);
  return (l.start(au("", l, i, s)), l.animation);
}
function yi(n, i, s, l = { passive: !0 }) {
  return (n.addEventListener(i, s, l), () => n.removeEventListener(i, s));
}
const Q1 = (n, i) => n.depth - i.depth;
class X1 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (Ya(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (Hs(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(Q1), (this.isDirty = !1), this.children.forEach(i));
  }
}
function Y1(n, i) {
  const s = et.now(),
    l = ({ timestamp: c }) => {
      const d = c - s;
      d >= i && (wn(l), n(d - i));
    };
  return (ye.setup(l, !0), () => wn(l));
}
function Ws(n) {
  return Qe(n) ? n.get() : n;
}
class Z1 {
  constructor() {
    this.members = [];
  }
  add(i) {
    Ya(this.members, i);
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
const $s = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  fa = ["", "X", "Y", "Z"],
  q1 = 1e3;
let J1 = 0;
function da(n, i, s, l) {
  const { latestValues: c } = i;
  c[n] && ((s[n] = c[n]), i.setStaticValue(n, 0), l && (l[n] = 0));
}
function lm(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const s = Ap(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", ye, !(c || d));
  }
  const { parent: l } = n;
  l && !l.hasCheckedOptimisedAppear && lm(l);
}
function am({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: l,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, p = i == null ? void 0 : i()) {
      ((this.id = J1++),
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
            this.nodes.forEach(tw),
            this.nodes.forEach(lw),
            this.nodes.forEach(aw),
            this.nodes.forEach(nw));
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
      this.root === this && (this.nodes = new X1());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new qa()),
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
      ((this.isSVG = hu(f) && !e1(f)), (this.instance = f));
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
            const E = window.innerWidth;
            E !== w &&
              ((w = E),
              (this.root.updateBlockedByResize = !0),
              y && y(),
              (y = Y1(S, 250)),
              $s.hasAnimatedSinceResize &&
                (($s.hasAnimatedSinceResize = !1), this.nodes.forEach(wh)));
          }));
      }
      (p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          g &&
          (p || m) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: y, hasLayoutChanged: w, hasRelativeLayoutChanged: S, layout: E }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const A = this.options.transition || g.getDefaultTransition() || hw,
                { onLayoutAnimationStart: D, onLayoutAnimationComplete: R } = g.getProps(),
                j = !this.targetLayout || !im(this.targetLayout, E),
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
                const O = { ...lu(A, "layout"), onPlay: D, onComplete: R };
                ((g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((O.delay = 0), (O.type = !1)),
                  this.startAnimation(O),
                  this.setAnimationOrigin(y, z, O.path));
              } else
                (w || wh(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = E;
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(uw), this.animationId++);
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
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && lm(this),
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
          m && this.nodes.forEach(iw),
          this.nodes.forEach(gh));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(vh);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(sw),
            this.nodes.forEach(ow),
            this.nodes.forEach(b1),
            this.nodes.forEach(ew))
          : this.nodes.forEach(vh),
        this.clearAllSnapshots());
      const p = et.now();
      ((Ge.delta = Bt(0, 1e3 / 60, p - Ge.timestamp)),
        (Ge.timestamp = p),
        (Ge.isProcessing = !0),
        ra.update.process(Ge),
        ra.preRender.process(Ge),
        ra.render.process(Ge),
        (Ge.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), fu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(rw), this.sharedNodes.forEach(cw));
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
        p = this.projectionDelta && !rm(this.projectionDelta),
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
        pw(m),
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
      if (!(((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(mw))) {
        const { scroll: y } = this.root;
        y && (Ot(p.x, y.offset.x), Ot(p.y, y.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      var m;
      const p = Be();
      if ((Rt(p, f), (m = this.scroll) != null && m.wasRoot)) return p;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g],
          { scroll: w, options: S } = y;
        y !== this.root &&
          w &&
          S.layoutScroll &&
          (w.wasRoot && Rt(p, f), Ot(p.x, w.offset.x), Ot(p.y, w.offset.y));
      }
      return p;
    }
    applyTransform(f, p = !1, m) {
      var y, w;
      const g = m || Be();
      Rt(g, f);
      for (let S = 0; S < this.path.length; S++) {
        const E = this.path[S];
        (!p &&
          E.options.layoutScroll &&
          E.scroll &&
          E !== E.root &&
          (Ot(g.x, -E.scroll.offset.x), Ot(g.y, -E.scroll.offset.y)),
          jn(E.latestValues) &&
            Us(g, E.latestValues, (y = E.layout) == null ? void 0 : y.layoutBox));
      }
      return (
        jn(this.latestValues) &&
          Us(g, this.latestValues, (w = this.layout) == null ? void 0 : w.layoutBox),
        g
      );
    }
    removeTransform(f) {
      var m;
      const p = Be();
      Rt(p, f);
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        if (!jn(y.latestValues)) continue;
        let w;
        (y.instance &&
          (Ua(y.latestValues) && y.updateSnapshot(), (w = Be()), Rt(w, y.measurePageBox())),
          ah(p, y.latestValues, (m = y.snapshot) == null ? void 0 : m.layoutBox, w));
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
      var E;
      const p = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty));
      const m = !!this.resumingFrom || this !== p;
      if (!(
        f ||
        (m && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        ((E = this.parent) != null && E.isProjectionDirty) ||
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
              I1(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Rt(this.target, this.layout.layoutBox),
                Kp(this.target, this.targetDelta))
              : Rt(this.target, this.layout.layoutBox),
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
      if (!(!this.parent || Ua(this.parent.latestValues) || Hp(this.parent.latestValues)))
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
        Js(this.relativeTargetOrigin, p, m, this.options.layoutAnchor || void 0),
        Rt(this.relativeTarget, this.relativeTargetOrigin));
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
      Rt(this.layoutCorrected, this.layout.layoutBox);
      const w = this.treeScale.x,
        S = this.treeScale.y;
      (f1(this.layoutCorrected, this.treeScale, this.path, p),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Be())));
      const { target: E } = f;
      if (!E) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (nh(this.prevProjectionDelta.x, this.projectionDelta.x),
          nh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        fi(this.projectionDelta, this.layoutCorrected, E, this.latestValues),
        (this.treeScale.x !== w ||
          this.treeScale.y !== S ||
          !hh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !hh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", E)));
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
      ((this.prevProjectionDelta = pr()),
        (this.projectionDelta = pr()),
        (this.projectionDeltaWithTransform = pr()));
    }
    setAnimationOrigin(f, p = !1, m) {
      const g = this.snapshot,
        y = g ? g.latestValues : {},
        w = { ...this.latestValues },
        S = pr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const E = Be(),
        A = g ? g.source : void 0,
        D = this.layout ? this.layout.source : void 0,
        R = A !== D,
        j = this.getStack(),
        z = !j || j.members.length <= 1,
        O = !!(R && !z && this.options.crossfade === !0 && !this.path.some(dw));
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
            (Js(
              E,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            fw(this.relativeTarget, this.relativeTargetOrigin, E, re),
            B && B1(this.relativeTarget, B) && (this.isProjectionDirty = !1),
            B || (B = Be()),
            Rt(B, this.relativeTarget)),
          R && ((this.animationValues = w), $1(w, y, this.latestValues, re, O, z)),
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
      var p, m, g;
      (this.notifyListeners("animationStart"),
        (p = this.currentAnimation) == null || p.stop(),
        (g = (m = this.resumingFrom) == null ? void 0 : m.currentAnimation) == null || g.stop(),
        this.pendingAnimation && (wn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ye.update(() => {
          (($s.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = yr(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = G1(this.motionValue, [0, 1e3], {
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
        (this.mixTargetDelta && this.mixTargetDelta(q1), this.currentAnimation.stop()),
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
          um(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          m = this.target || Be();
          const w = tt(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + w));
          const S = tt(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + S));
        }
        (Rt(p, m), Us(p, y), fi(this.projectionDeltaWithTransform, this.layoutCorrected, p, y));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new Z1()),
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
      m.z && da("z", f, g, this.animationValues);
      for (let y = 0; y < fa.length; y++)
        (da(`rotate${fa[y]}`, f, g, this.animationValues),
          da(`skew${fa[y]}`, f, g, this.animationValues));
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
          (f.pointerEvents = Ws(p == null ? void 0 : p.pointerEvents) || ""),
          (f.transform = m ? m(this.latestValues, "") : "none"));
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        (this.options.layoutId &&
          ((f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (f.pointerEvents = Ws(p == null ? void 0 : p.pointerEvents) || "")),
          this.hasProjected &&
            !jn(this.latestValues) &&
            ((f.transform = m ? m({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const y = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let w = U1(this.projectionDeltaWithTransform, this.treeScale, y);
      (m && (w = m(y, w)), (f.transform = w));
      const { x: S, y: E } = this.projectionDelta;
      ((f.transformOrigin = `${S.origin * 100}% ${E.origin * 100}% 0`),
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
      for (const A in $a) {
        if (y[A] === void 0) continue;
        const { correct: D, applyTo: R, isCSSVariable: j } = $a[A],
          z = w === "none" ? y[A] : D(y[A], g);
        if (R) {
          const O = R.length;
          for (let B = 0; B < O; B++) f[R[B]] = z;
        } else j ? (this.options.visualElement.renderState.vars[A] = z) : (f[A] = z);
      }
      this.options.layoutId &&
        (f.pointerEvents = g === this ? Ws(p == null ? void 0 : p.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => {
        var p;
        return (p = f.currentAnimation) == null ? void 0 : p.stop();
      }),
        this.root.nodes.forEach(gh),
        this.root.sharedNodes.clear());
    }
  };
}
function b1(n) {
  n.updateLayout();
}
function ew(n) {
  var s;
  const i = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: c } = n.layout,
      { animationType: d } = n.options,
      f = i.source !== n.layout.source;
    if (d === "size")
      Ft((w) => {
        const S = f ? i.measuredBox[w] : i.layoutBox[w],
          E = tt(S);
        ((S.min = l[w].min), (S.max = S.min + E));
      });
    else if (d === "x" || d === "y") {
      const w = d === "x" ? "y" : "x";
      Ha(f ? i.measuredBox[w] : i.layoutBox[w], l[w]);
    } else
      um(d, i.layoutBox, l) &&
        Ft((w) => {
          const S = f ? i.measuredBox[w] : i.layoutBox[w],
            E = tt(l[w]);
          ((S.max = S.min + E),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[w].max = n.relativeTarget[w].min + E)));
        });
    const p = pr();
    fi(p, l, i.layoutBox);
    const m = pr();
    f ? fi(m, n.applyTransform(c, !0), i.measuredBox) : fi(m, l, i.layoutBox);
    const g = !rm(p);
    let y = !1;
    if (!n.resumeFrom) {
      const w = n.getClosestProjectingParent();
      if (w && !w.resumeFrom) {
        const { snapshot: S, layout: E } = w;
        if (S && E) {
          const A = n.options.layoutAnchor || void 0,
            D = Be();
          Js(D, i.layoutBox, S.layoutBox, A);
          const R = Be();
          (Js(R, l, E.layoutBox, A),
            im(D, R) || (y = !0),
            w.options.layoutRoot &&
              ((n.relativeTarget = R), (n.relativeTargetOrigin = D), (n.relativeParent = w)));
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
function tw(n) {
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
function nw(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function rw(n) {
  n.clearSnapshot();
}
function gh(n) {
  n.clearMeasurements();
}
function iw(n) {
  ((n.isLayoutDirty = !0), n.updateLayout());
}
function vh(n) {
  n.isLayoutDirty = !1;
}
function sw(n) {
  n.isAnimationBlocked &&
    n.layout &&
    !n.isLayoutDirty &&
    ((n.snapshot = n.layout), (n.isLayoutDirty = !0));
}
function ow(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function wh(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function lw(n) {
  n.resolveTargetDelta();
}
function aw(n) {
  n.calcProjection();
}
function uw(n) {
  n.resetSkewAndRotation();
}
function cw(n) {
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
function fw(n, i, s, l) {
  (Sh(n.x, i.x, s.x, l), Sh(n.y, i.y, s.y, l));
}
function dw(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const hw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  kh = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  Th = kh("applewebkit/") && !kh("chrome/") ? Math.round : St;
function Ph(n) {
  ((n.min = Th(n.min)), (n.max = Th(n.max)));
}
function pw(n) {
  (Ph(n.x), Ph(n.y));
}
function um(n, i, s) {
  return n === "position" || (n === "preserve-aspect" && !j1(dh(i), dh(s), 0.2));
}
function mw(n) {
  var i;
  return n !== n.root && ((i = n.scroll) == null ? void 0 : i.wasRoot);
}
const yw = am({
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
  ha = { current: void 0 },
  cm = am({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!ha.current) {
        const n = new yw({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (ha.current = n));
      }
      return ha.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  fm = te.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
function gw(n = !0) {
  const i = te.useContext(Xa);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: l, register: c } = i,
    d = te.useId();
  te.useEffect(() => {
    if (n) return c(d);
  }, [n]);
  const f = te.useCallback(() => n && l && l(d), [d, l, n]);
  return !s && l ? [!1, f] : [!0];
}
const dm = te.createContext({ strict: !1 }),
  Ch = {
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
let Eh = !1;
function vw() {
  if (Eh) return;
  const n = {};
  for (const i in Ch) n[i] = { isEnabled: (s) => Ch[i].some((l) => !!s[l]) };
  (Up(n), (Eh = !0));
}
function hm() {
  return (vw(), l1());
}
function ww(n) {
  const i = hm();
  for (const s in n) i[s] = { ...i[s], ...n[s] };
  Up(i);
}
const xw = new Set([
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
function bs(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    xw.has(n)
  );
}
let pm = (n) => !bs(n);
function Sw(n) {
  typeof n == "function" && (pm = (i) => (i.startsWith("on") ? !bs(i) : n(i)));
}
try {
  Sw(require("@emotion/is-prop-valid").default);
} catch {}
function kw(n, i, s) {
  const l = {};
  for (const c in n)
    (c === "values" && typeof n.values == "object") ||
      Qe(n[c]) ||
      ((pm(c) ||
        (s === !0 && bs(c)) ||
        (!i && !bs(c)) ||
        (n.draggable && c.startsWith("onDrag"))) &&
        (l[c] = n[c]));
  return l;
}
const ro = te.createContext({});
function Tw(n, i) {
  if (no(n)) {
    const { initial: s, animate: l } = n;
    return { initial: s === !1 || mi(s) ? s : void 0, animate: mi(l) ? l : void 0 };
  }
  return n.inherit !== !1 ? i : {};
}
function Pw(n) {
  const { initial: i, animate: s } = Tw(n, te.useContext(ro));
  return te.useMemo(() => ({ initial: i, animate: s }), [Mh(i), Mh(s)]);
}
function Mh(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const vu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function mm(n, i, s) {
  for (const l in i) !Qe(i[l]) && !Xp(l, s) && (n[l] = i[l]);
}
function Cw({ transformTemplate: n }, i) {
  return te.useMemo(() => {
    const s = vu();
    return (yu(s, i, n), Object.assign({}, s.vars, s.style));
  }, [i]);
}
function Ew(n, i) {
  const s = n.style || {},
    l = {};
  return (mm(l, s, n), Object.assign(l, Cw(n, i)), l);
}
function Mw(n, i) {
  const s = {},
    l = Ew(n, i);
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
const ym = () => ({ ...vu(), attrs: {} });
function Aw(n, i, s, l) {
  const c = te.useMemo(() => {
    const d = ym();
    return (Yp(d, i, qp(l), n.transformTemplate, n.style), { ...d.attrs, style: { ...d.style } });
  }, [i]);
  if (n.style) {
    const d = {};
    (mm(d, n.style, n), (c.style = { ...d, ...c.style }));
  }
  return c;
}
const Rw = [
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
function wu(n) {
  return typeof n != "string" || n.includes("-") ? !1 : !!(Rw.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function Dw(n, i, s, { latestValues: l }, c, d = !1, f) {
  const m = ((f ?? wu(n)) ? Aw : Mw)(i, l, c, n),
    g = kw(i, typeof n == "string", d),
    y = n !== te.Fragment ? { ...g, ...m, ref: s } : {},
    { children: w } = i,
    S = te.useMemo(() => (Qe(w) ? w.get() : w), [w]);
  return te.createElement(n, { ...y, children: S });
}
function Vw({ scrapeMotionValuesFromProps: n, createRenderState: i }, s, l, c) {
  return { latestValues: Lw(s, l, c, n), renderState: i() };
}
function Lw(n, i, s, l) {
  const c = {},
    d = l(n, {});
  for (const S in d) c[S] = Ws(d[S]);
  let { initial: f, animate: p } = n;
  const m = no(n),
    g = zp(n);
  i &&
    g &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let y = s ? s.initial === !1 : !1;
  y = y || f === !1;
  const w = y ? p : f;
  if (w && typeof w != "boolean" && !to(w)) {
    const S = Array.isArray(w) ? w : [w];
    for (let E = 0; E < S.length; E++) {
      const A = uu(n, S[E]);
      if (A) {
        const { transitionEnd: D, transition: R, ...j } = A;
        for (const z in j) {
          let O = j[z];
          if (Array.isArray(O)) {
            const B = y ? O.length - 1 : 0;
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
    const l = te.useContext(ro),
      c = te.useContext(Xa),
      d = () => Vw(n, i, l, c);
    return s ? d() : Dg(d);
  },
  Nw = gm({ scrapeMotionValuesFromProps: gu, createRenderState: vu }),
  _w = gm({ scrapeMotionValuesFromProps: Jp, createRenderState: ym }),
  jw = Symbol.for("motionComponentSymbol");
function Iw(n, i, s) {
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
const vm = te.createContext({});
function fr(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function Fw(n, i, s, l, c, d) {
  var O, B;
  const { visualElement: f } = te.useContext(ro),
    p = te.useContext(dm),
    m = te.useContext(Xa),
    g = te.useContext(fm),
    y = g.reducedMotion,
    w = g.skipAnimations,
    S = te.useRef(null),
    E = te.useRef(!1);
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
      E.current && S.current && (S.current.manuallyAnimateOnMount = !0)));
  const A = S.current,
    D = te.useContext(vm);
  A && !A.projection && c && (A.type === "html" || A.type === "svg") && Ow(S.current, s, c, D);
  const R = te.useRef(!1);
  te.useInsertionEffect(() => {
    A && R.current && A.update(s, m);
  });
  const j = s[Mp],
    z = te.useRef(
      !!j &&
        typeof window < "u" &&
        !((O = window.MotionHandoffIsComplete) != null && O.call(window, j)) &&
        ((B = window.MotionHasOptimisedAnimation) == null ? void 0 : B.call(window, j)),
    );
  return (
    Lg(() => {
      ((E.current = !0),
        A &&
          ((R.current = !0),
          (window.MotionIsMounted = !0),
          A.updateFeatures(),
          A.scheduleRenderMicrotask(),
          z.current && A.animationState && A.animationState.animateChanges()));
    }),
    te.useEffect(() => {
      A &&
        (!z.current && A.animationState && A.animationState.animateChanges(),
        z.current &&
          (queueMicrotask(() => {
            var q;
            (q = window.MotionHandoffMarkAsComplete) == null || q.call(window, j);
          }),
          (z.current = !1)),
        (A.enteringChildren = void 0));
    }),
    A
  );
}
function Ow(n, i, s, l) {
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
  ((n.projection = new s(n.latestValues, i["data-framer-portal-id"] ? void 0 : wm(n.parent))),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (p && fr(p)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: l,
      crossfade: w,
      layoutScroll: m,
      layoutRoot: g,
      layoutAnchor: y,
    }));
}
function wm(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : wm(n.parent);
}
function pa(n, { forwardMotionProps: i = !1, type: s } = {}, l, c) {
  l && ww(l);
  const d = s ? s === "svg" : wu(n),
    f = d ? _w : Nw;
  function p(g, y) {
    let w;
    const S = { ...te.useContext(fm), ...g, layoutId: zw(g) },
      { isStatic: E } = S,
      A = Pw(g),
      D = f(g, E);
    if (!E && typeof window < "u") {
      Bw();
      const R = Uw(S);
      ((w = R.MeasureLayout), (A.visualElement = Fw(n, D, S, c, R.ProjectionNode, d)));
    }
    return Y.jsxs(ro.Provider, {
      value: A,
      children: [
        w && A.visualElement ? Y.jsx(w, { visualElement: A.visualElement, ...S }) : null,
        Dw(n, g, Iw(D, A.visualElement, y), D, E, i, d),
      ],
    });
  }
  p.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const m = te.forwardRef(p);
  return ((m[jw] = n), m);
}
function zw({ layoutId: n }) {
  const i = te.useContext(zh).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function Bw(n, i) {
  te.useContext(dm).strict;
}
function Uw(n) {
  const i = hm(),
    { drag: s, layout: l } = i;
  if (!s && !l) return {};
  const c = { ...s, ...l };
  return {
    MeasureLayout:
      (s != null && s.isEnabled(n)) || (l != null && l.isEnabled(n)) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function Ww(n, i) {
  if (typeof Proxy > "u") return pa;
  const s = new Map(),
    l = (d, f) => pa(d, f, n, i),
    c = (d, f) => l(d, f);
  return new Proxy(c, {
    get: (d, f) => (f === "create" ? l : (s.has(f) || s.set(f, pa(f, void 0, n, i)), s.get(f))),
  });
}
const $w = (n, i) =>
  (i.isSVG ?? wu(n)) ? new P1(i) : new v1(i, { allowProjection: n !== te.Fragment });
class Hw extends xn {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = R1(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    to(i) && (this.unmountControls = i.subscribe(this.node));
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
let Kw = 0;
class Gw extends xn {
  constructor() {
    (super(...arguments), (this.id = Kw++), (this.isExitComplete = !1));
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
const Qw = { animation: { Feature: Hw }, exit: { Feature: Gw } };
function xi(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const Xw = (n) => (i) => du(i) && n(i, xi(i));
function di(n, i, s, l) {
  return yi(n, i, Xw(s), l);
}
const xm = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Ah = (n, i) => Math.abs(n - i);
function Yw(n, i) {
  const s = Ah(n.x, i.x),
    l = Ah(n.y, i.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
const Rh = new Set(["auto", "scroll"]);
class Sm {
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
      (this.onElementScroll = (E) => {
        this.handleScroll(E.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = js(this.lastRawMoveEventInfo, this.transformPagePoint));
        const E = ma(this.lastMoveEventInfo, this.history),
          A = this.startEvent !== null,
          D = Yw(E.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!A && !D) return;
        const { point: R } = E,
          { timestamp: j } = Ge;
        this.history.push({ ...R, timestamp: j });
        const { onStart: z, onMove: O } = this.handlers;
        (A || (z && z(this.lastMoveEvent, E), (this.startEvent = this.lastMoveEvent)),
          O && O(this.lastMoveEvent, E));
      }),
      (this.handlePointerMove = (E, A) => {
        ((this.lastMoveEvent = E),
          (this.lastRawMoveEventInfo = A),
          (this.lastMoveEventInfo = js(A, this.transformPagePoint)),
          ye.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (E, A) => {
        this.end();
        const { onEnd: D, onSessionEnd: R, resumeAnimation: j } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && j && j(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const z = ma(
          E.type === "pointercancel" ? this.lastMoveEventInfo : js(A, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && D && D(E, z), R && R(E, z));
      }),
      !du(i))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = l),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window));
    const m = xi(i),
      g = js(m, this.transformPagePoint),
      { point: y } = g,
      { timestamp: w } = Ge;
    this.history = [{ ...y, timestamp: w }];
    const { onSessionStart: S } = s;
    (S && S(i, ma(g, this.history)),
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
      ((Rh.has(l.overflowX) || Rh.has(l.overflowY)) &&
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
      wn(this.updatePoint));
  }
}
function js(n, i) {
  return i ? { point: i(n.point) } : n;
}
function Dh(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function ma({ point: n }, i) {
  return { point: n, delta: Dh(n, km(i)), offset: Dh(n, Zw(i)), velocity: qw(i, 0.1) };
}
function Zw(n) {
  return n[0];
}
function km(n) {
  return n[n.length - 1];
}
function qw(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    l = null;
  const c = km(n);
  for (; s >= 0 && ((l = n[s]), !(c.timestamp - l.timestamp > ht(i)));) s--;
  if (!l) return { x: 0, y: 0 };
  l === n[0] && n.length > 2 && c.timestamp - l.timestamp > ht(i) * 2 && (l = n[1]);
  const d = xt(c.timestamp - l.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - l.x) / d, y: (c.y - l.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function Jw(n, { min: i, max: s }, l) {
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
function bw(n, { top: i, left: s, bottom: l, right: c }) {
  return { x: Vh(n.x, s, c), y: Vh(n.y, i, l) };
}
function Lh(n, i) {
  let s = i.min - n.min,
    l = i.max - n.max;
  return (i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l });
}
function ex(n, i) {
  return { x: Lh(n.x, i.x), y: Lh(n.y, i.y) };
}
function tx(n, i) {
  let s = 0.5;
  const l = tt(n),
    c = tt(i);
  return (
    c > l ? (s = hi(i.min, i.max - l, n.min)) : l > c && (s = hi(n.min, n.max - c, i.min)),
    Bt(0, 1, s)
  );
}
function nx(n, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
  );
}
const Ka = 0.35;
function rx(n = Ka) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Ka),
    { x: Nh(n, "left", "right"), y: Nh(n, "top", "bottom") }
  );
}
function Nh(n, i, s) {
  return { min: _h(n, i), max: _h(n, s) };
}
function _h(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const ix = new WeakMap();
class sx {
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
        const { drag: E, dragPropagation: A, onDragStart: D } = this.getProps();
        if (
          E &&
          !A &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = F0(E)),
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
          D && ye.update(() => D(w, S), !1, !0),
          ja(this.visualElement, "transform"));
        const { animationState: R } = this.visualElement;
        R && R.setActive("whileDrag", !0);
      },
      p = (w, S) => {
        ((this.latestPointerEvent = w), (this.latestPanInfo = S));
        const {
          dragPropagation: E,
          dragDirectionLock: A,
          onDirectionLock: D,
          onDrag: R,
        } = this.getProps();
        if (!E && !this.openDragLock) return;
        const { offset: j } = S;
        if (A && this.currentDirection === null) {
          ((this.currentDirection = lx(j)),
            this.currentDirection !== null && D && D(this.currentDirection));
          return;
        }
        (this.updateAxis("x", S.point, j),
          this.updateAxis("y", S.point, j),
          this.visualElement.render(),
          R && ye.update(() => R(w, S), !1, !0));
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
    this.panSession = new Sm(
      i,
      { onSessionStart: d, onStart: f, onMove: p, onSessionEnd: m, resumeAnimation: g },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        distanceThreshold: l,
        contextWindow: xm(this.visualElement),
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
    (this.constraints && this.constraints[i] && (f = Jw(f, this.constraints[i], this.elastic[i])),
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
    (i && fr(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && l
        ? (this.constraints = bw(l.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = rx(s)),
      c !== this.constraints &&
        !fr(i) &&
        l &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ft((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = nx(l.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !fr(i)) return !1;
    const l = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    c.root && ((c.root.scroll = void 0), c.root.updateScroll());
    const d = d1(l, c.root, this.visualElement.getTransformPagePoint());
    let f = ex(c.layout.layoutBox, d);
    if (s) {
      const p = s(u1(f));
      ((this.hasMutatedConstraints = !!p), p && (f = $p(p)));
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
      g = Ft((y) => {
        if (!Is(y, s, this.currentDirection)) return;
        let w = (m && m[y]) || {};
        (f === !0 || f === y) && (w = { min: 0, max: 0 });
        const S = c ? 200 : 1e6,
          E = c ? 40 : 1e7,
          A = {
            type: "inertia",
            velocity: l ? i[y] : 0,
            bounceStiffness: S,
            bounceDamping: E,
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
    return (ja(this.visualElement, i), l.start(au(i, l, 0, s, this.visualElement, !1)));
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
    if (!fr(s) || !l || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Ft((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = tx({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Ft((f) => {
        if (!Is(f, i, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: g } = this.constraints[f];
        p.set(me(m, g, c[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    ix.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = di(i, "pointerdown", (g) => {
        const { drag: y, dragListener: w = !0 } = this.getProps(),
          S = g.target,
          E = S !== i && $0(S);
        y && w && !E && this.start(g);
      });
    let l;
    const c = () => {
        const { dragConstraints: g } = this.getProps();
        fr(g) &&
          g.current &&
          ((this.constraints = this.resolveRefConstraints()),
          l || (l = ox(i, g.current, () => this.scalePositionWithinConstraints())));
      },
      { projection: d } = this.visualElement,
      f = d.addEventListener("measure", c);
    (d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), ye.read(c));
    const p = yi(window, "resize", () => this.scalePositionWithinConstraints()),
      m = d.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: y }) => {
        this.isDragging &&
          y &&
          (Ft((w) => {
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
        dragElastic: f = Ka,
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
function ox(n, i, s) {
  const l = Hd(n, jh(s)),
    c = Hd(i, jh(s));
  return () => {
    (l(), c());
  };
}
function Is(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n);
}
function lx(n, i = 10) {
  let s = null;
  return (Math.abs(n.y) > i ? (s = "y") : Math.abs(n.x) > i && (s = "x"), s);
}
class ax extends xn {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = St),
      (this.removeListeners = St),
      (this.controls = new sx(i)));
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
  n && ye.update(() => n(i, s), !1, !0);
};
class ux extends xn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = St));
  }
  onPointerDown(i) {
    this.session = new Sm(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: xm(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: s, onPan: l, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: ya(i),
      onStart: ya(s),
      onMove: ya(l),
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
let ga = !1;
class cx extends te.Component {
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l, layoutId: c } = this.props,
      { projection: d } = i;
    (d &&
      (s.group && s.group.add(d),
      l && l.register && c && l.register(d),
      ga && d.root.didUpdate(),
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
        (ga = !0),
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
      fu.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l } = this.props,
      { projection: c } = i;
    ((ga = !0),
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
function Tm(n) {
  const [i, s] = gw(),
    l = te.useContext(zh);
  return Y.jsx(cx, {
    ...n,
    layoutGroup: l,
    switchLayoutGroup: te.useContext(vm),
    isPresent: i,
    safeToRemove: s,
  });
}
const fx = { pan: { Feature: ux }, drag: { Feature: ax, ProjectionNode: cm, MeasureLayout: Tm } };
function Ih(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s,
    d = l[c];
  d && ye.postRender(() => d(i, xi(i)));
}
class dx extends xn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = z0(i, (s, l) => (Ih(this.node, l, "Start"), (c) => Ih(this.node, c, "End"))));
  }
  unmount() {}
}
class hx extends xn {
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
function Fh(n, i, s) {
  const { props: l } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s),
    d = l[c];
  d && ye.postRender(() => d(i, xi(i)));
}
class px extends xn {
  mount() {
    const { current: i } = this.node;
    if (!i) return;
    const { globalTapTarget: s, propagate: l } = this.node.props;
    this.unmount = K0(
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
const Ga = new WeakMap(),
  va = new WeakMap(),
  mx = (n) => {
    const i = Ga.get(n.target);
    i && i(n);
  },
  yx = (n) => {
    n.forEach(mx);
  };
function gx({ root: n, ...i }) {
  const s = n || document;
  va.has(s) || va.set(s, {});
  const l = va.get(s),
    c = JSON.stringify(i);
  return (l[c] || (l[c] = new IntersectionObserver(yx, { root: n, ...i })), l[c]);
}
function vx(n, i, s) {
  const l = gx(i);
  return (
    Ga.set(n, s),
    l.observe(n),
    () => {
      (Ga.delete(n), l.unobserve(n));
    }
  );
}
const wx = { some: 0, all: 1 };
class xx extends xn {
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
        threshold: typeof c == "number" ? c : wx[c],
      },
      p = (g) => {
        const { isIntersecting: y } = g;
        if (this.isInView === y || ((this.isInView = y), d && !y && this.hasEnteredView)) return;
        (y && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", y));
        const { onViewportEnter: w, onViewportLeave: S } = this.node.getProps(),
          E = y ? w : S;
        E && E(g);
      };
    this.stopObserver = vx(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(Sx(i, s)) && this.startObserver();
  }
  unmount() {
    var i;
    ((i = this.stopObserver) == null || i.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function Sx({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const kx = {
    inView: { Feature: xx },
    tap: { Feature: px },
    focus: { Feature: hx },
    hover: { Feature: dx },
  },
  Tx = { layout: { ProjectionNode: cm, MeasureLayout: Tm } },
  Px = { ...Qw, ...kx, ...fx, ...Tx },
  li = Ww(Px, $w);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cx = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Pm = (...n) =>
    n
      .filter((i, s, l) => !!i && i.trim() !== "" && l.indexOf(i) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ex = {
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
 */ const Mx = te.forwardRef(
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
        ...Ex,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: l ? (Number(s) * 24) / Number(i) : s,
        className: Pm("lucide", c),
        ...p,
      },
      [...f.map(([g, y]) => te.createElement(g, y)), ...(Array.isArray(d) ? d : [d])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Si = (n, i) => {
  const s = te.forwardRef(({ className: l, ...c }, d) =>
    te.createElement(Mx, { ref: d, iconNode: i, className: Pm(`lucide-${Cx(n)}`, l), ...c }),
  );
  return ((s.displayName = `${n}`), s);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ax = Si("Chrome", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8", key: "a0cw5f" }],
  ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14", key: "1kftof" }],
  ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14", key: "1ymyh8" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rx = Si("Circle", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dx = Si("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f",
    },
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a",
    },
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vx = Si("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lx = Si("Github", [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ]),
  Nx =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_081238_406ed0e3-5d83-436e-a512-0bbff7ec5b95.mp4",
  _x = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  },
  wa = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
function jx() {
  const [n, i] = te.useState(!1);
  return Y.jsxs("main", {
    className:
      "flex min-h-screen w-full bg-black p-2 transition-all duration-500 selection:bg-white/30 lg:h-screen lg:overflow-hidden lg:p-4",
    children: [
      Y.jsxs("section", {
        className:
          "relative hidden h-full w-[52%] flex-col items-center justify-end overflow-hidden rounded-3xl px-12 pb-32 shadow-2xl lg:flex",
        children: [
          Y.jsx("video", {
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "absolute inset-0 h-full w-full object-cover",
            children: Y.jsx("source", { src: Nx, type: "video/mp4" }),
          }),
          Y.jsxs(li.div, {
            className: "relative z-10 w-full max-w-xs space-y-8",
            variants: _x,
            initial: "hidden",
            animate: "visible",
            children: [
              Y.jsxs(li.div, {
                variants: wa,
                className: "flex items-center gap-2",
                children: [
                  Y.jsx(Rx, { className: "h-6 w-6 fill-white text-white", "aria-hidden": !0 }),
                  Y.jsx("span", {
                    className: "text-xl font-semibold tracking-tight",
                    children: "Aurora",
                  }),
                ],
              }),
              Y.jsxs(li.div, {
                variants: wa,
                className: "space-y-3 text-center",
                children: [
                  Y.jsx("h1", {
                    className: "whitespace-nowrap text-4xl font-medium tracking-tight",
                    children: "Join Aurora",
                  }),
                  Y.jsx("p", {
                    className: "px-4 text-sm leading-relaxed text-white/60",
                    children: "Follow these 3 quick phases to activate your space.",
                  }),
                ],
              }),
              Y.jsxs(li.div, {
                variants: wa,
                className: "space-y-3",
                children: [
                  Y.jsx(xa, { number: 1, text: "Register your identity", active: !0 }),
                  Y.jsx(xa, { number: 2, text: "Configure your studio" }),
                  Y.jsx(xa, { number: 3, text: "Finalize your profile" }),
                ],
              }),
            ],
          }),
        ],
      }),
      Y.jsx("section", {
        className:
          "flex flex-1 flex-col items-center justify-center overflow-y-auto px-4 py-12 sm:px-12 lg:overflow-hidden lg:px-16 lg:py-6 xl:px-24",
        children: Y.jsxs(li.div, {
          className: "w-full max-w-xl space-y-8 sm:space-y-10 lg:space-y-6",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.8, ease: "easeOut" },
          children: [
            Y.jsxs("header", {
              className: "space-y-2",
              children: [
                Y.jsx("h2", {
                  className: "text-3xl font-medium tracking-tight",
                  children: "Create New Profile",
                }),
                Y.jsx("p", {
                  className: "text-sm text-white/40",
                  children: "Input your basic details to begin the journey.",
                }),
              ],
            }),
            Y.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                Y.jsx(Oh, { icon: Y.jsx(Ax, { className: "h-5 w-5" }), label: "Google" }),
                Y.jsx(Oh, { icon: Y.jsx(Lx, { className: "h-5 w-5" }), label: "Github" }),
              ],
            }),
            Y.jsxs("div", {
              className: "relative flex items-center",
              children: [
                Y.jsx("div", { className: "h-px flex-1 border-t border-white/10" }),
                Y.jsx("span", {
                  className:
                    "bg-black px-4 text-xs font-medium uppercase tracking-widest text-white/40",
                  children: "Or",
                }),
                Y.jsx("div", { className: "h-px flex-1 border-t border-white/10" }),
              ],
            }),
            Y.jsxs("form", {
              className: "space-y-4",
              onSubmit: (s) => {
                s.preventDefault();
              },
              children: [
                Y.jsxs("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    Y.jsx(Sa, { label: "First Name", placeholder: "Jane", type: "text" }),
                    Y.jsx(Sa, { label: "Last Name", placeholder: "Doe", type: "text" }),
                  ],
                }),
                Y.jsx(Sa, { label: "Email", placeholder: "you@aurora.studio", type: "email" }),
                Y.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    Y.jsx("label", {
                      className: "text-sm font-medium text-white",
                      children: "Password",
                    }),
                    Y.jsxs("div", {
                      className: "relative",
                      children: [
                        Y.jsx("input", {
                          type: n ? "text" : "password",
                          placeholder: "••••••••",
                          className:
                            "h-11 w-full rounded-xl border-none bg-brand-gray px-4 pr-11 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20",
                        }),
                        Y.jsx("button", {
                          type: "button",
                          className:
                            "absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition-colors hover:text-white/70",
                          onClick: () => i((s) => !s),
                          "aria-label": n ? "Hide password" : "Show password",
                          children: n
                            ? Y.jsx(Dx, { className: "h-4 w-4" })
                            : Y.jsx(Vx, { className: "h-4 w-4" }),
                        }),
                      ],
                    }),
                    Y.jsx("p", {
                      className: "text-xs text-white/40",
                      children: "Requires at least 8 symbols.",
                    }),
                  ],
                }),
                Y.jsx("button", {
                  type: "submit",
                  className:
                    "mt-4 h-14 w-full rounded-xl bg-white font-semibold text-black transition-all hover:bg-white/90 active:scale-[0.98]",
                  children: "Create Account",
                }),
              ],
            }),
            Y.jsxs("p", {
              className: "text-center text-sm text-white/50",
              children: [
                "Member of the team?",
                " ",
                Y.jsx("a", {
                  href: "#",
                  className: "text-white underline-offset-4 hover:underline",
                  children: "Log in",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function xa({ number: n, text: i, active: s = !1 }) {
  return Y.jsxs("div", {
    className: `flex items-center gap-4 rounded-2xl px-5 py-4 transition-colors ${s ? "border border-white bg-white text-black" : "border-none bg-brand-gray text-white"}`,
    children: [
      Y.jsx("span", {
        className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${s ? "bg-black text-white" : "bg-white/10 text-white/40"}`,
        children: n,
      }),
      Y.jsx("span", { className: "text-sm font-medium", children: i }),
    ],
  });
}
function Oh({ icon: n, label: i }) {
  return Y.jsxs("button", {
    type: "button",
    className:
      "flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-black transition-colors hover:bg-white/5",
    children: [n, Y.jsx("span", { className: "text-sm font-medium", children: i })],
  });
}
function Sa({ label: n, placeholder: i, type: s }) {
  return Y.jsxs("div", {
    className: "space-y-2",
    children: [
      Y.jsx("label", { className: "text-sm font-medium text-white", children: n }),
      Y.jsx("input", {
        type: s,
        placeholder: i,
        className:
          "h-11 w-full rounded-xl border-none bg-brand-gray px-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20",
      }),
    ],
  });
}
Rg.createRoot(document.getElementById("root")).render(
  Y.jsx(te.StrictMode, { children: Y.jsx(jx, {}) }),
);
