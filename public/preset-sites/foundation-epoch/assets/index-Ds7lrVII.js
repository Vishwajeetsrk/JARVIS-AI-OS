(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
  new MutationObserver((u) => {
    for (const d of u)
      if (d.type === "childList")
        for (const f of d.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && a(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(u) {
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
  function a(u) {
    if (u.ep) return;
    u.ep = !0;
    const d = o(u);
    fetch(u.href, d);
  }
})();
var ul = { exports: {} },
  mi = {},
  cl = { exports: {} },
  le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad;
function Yy() {
  if (Ad) return le;
  Ad = 1;
  var n = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function w(T) {
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
    A = Object.assign,
    L = {};
  function R(T, N, ae) {
    ((this.props = T), (this.context = N), (this.refs = L), (this.updater = ae || P));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (T, N) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, T, N, "setState");
    }),
    (R.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    }));
  function D() {}
  D.prototype = R.prototype;
  function b(T, N, ae) {
    ((this.props = T), (this.context = N), (this.refs = L), (this.updater = ae || P));
  }
  var O = (b.prototype = new D());
  ((O.constructor = b), A(O, R.prototype), (O.isPureReactComponent = !0));
  var B = Array.isArray,
    Y = Object.prototype.hasOwnProperty,
    oe = { current: null },
    ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(T, N, ae) {
    var ue,
      de = {},
      he = null,
      Te = null;
    if (N != null)
      for (ue in (N.ref !== void 0 && (Te = N.ref), N.key !== void 0 && (he = "" + N.key), N))
        Y.call(N, ue) && !ie.hasOwnProperty(ue) && (de[ue] = N[ue]);
    var ye = arguments.length - 2;
    if (ye === 1) de.children = ae;
    else if (1 < ye) {
      for (var Re = Array(ye), ht = 0; ht < ye; ht++) Re[ht] = arguments[ht + 2];
      de.children = Re;
    }
    if (T && T.defaultProps)
      for (ue in ((ye = T.defaultProps), ye)) de[ue] === void 0 && (de[ue] = ye[ue]);
    return { $$typeof: n, type: T, key: he, ref: Te, props: de, _owner: oe.current };
  }
  function me(T, N) {
    return { $$typeof: n, type: T.type, key: N, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function Z(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function fe(T) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (ae) {
        return N[ae];
      })
    );
  }
  var ne = /\/+/g;
  function Ae(T, N) {
    return typeof T == "object" && T !== null && T.key != null ? fe("" + T.key) : N.toString(36);
  }
  function xe(T, N, ae, ue, de) {
    var he = typeof T;
    (he === "undefined" || he === "boolean") && (T = null);
    var Te = !1;
    if (T === null) Te = !0;
    else
      switch (he) {
        case "string":
        case "number":
          Te = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case n:
            case r:
              Te = !0;
          }
      }
    if (Te)
      return (
        (Te = T),
        (de = de(Te)),
        (T = ue === "" ? "." + Ae(Te, 0) : ue),
        B(de)
          ? ((ae = ""),
            T != null && (ae = T.replace(ne, "$&/") + "/"),
            xe(de, N, ae, "", function (ht) {
              return ht;
            }))
          : de != null &&
            (Z(de) &&
              (de = me(
                de,
                ae +
                  (!de.key || (Te && Te.key === de.key)
                    ? ""
                    : ("" + de.key).replace(ne, "$&/") + "/") +
                  T,
              )),
            N.push(de)),
        1
      );
    if (((Te = 0), (ue = ue === "" ? "." : ue + ":"), B(T)))
      for (var ye = 0; ye < T.length; ye++) {
        he = T[ye];
        var Re = ue + Ae(he, ye);
        Te += xe(he, N, ae, Re, de);
      }
    else if (((Re = w(T)), typeof Re == "function"))
      for (T = Re.call(T), ye = 0; !(he = T.next()).done;)
        ((he = he.value), (Re = ue + Ae(he, ye++)), (Te += xe(he, N, ae, Re, de)));
    else if (he === "object")
      throw (
        (N = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : N) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return Te;
  }
  function Le(T, N, ae) {
    if (T == null) return T;
    var ue = [],
      de = 0;
    return (
      xe(T, ue, "", "", function (he) {
        return N.call(ae, he, de++);
      }),
      ue
    );
  }
  function ge(T) {
    if (T._status === -1) {
      var N = T._result;
      ((N = N()),
        N.then(
          function (ae) {
            (T._status === 0 || T._status === -1) && ((T._status = 1), (T._result = ae));
          },
          function (ae) {
            (T._status === 0 || T._status === -1) && ((T._status = 2), (T._result = ae));
          },
        ),
        T._status === -1 && ((T._status = 0), (T._result = N)));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var ke = { current: null },
    z = { transition: null },
    H = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: z, ReactCurrentOwner: oe };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (le.Children = {
      map: Le,
      forEach: function (T, N, ae) {
        Le(
          T,
          function () {
            N.apply(this, arguments);
          },
          ae,
        );
      },
      count: function (T) {
        var N = 0;
        return (
          Le(T, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (T) {
        return (
          Le(T, function (N) {
            return N;
          }) || []
        );
      },
      only: function (T) {
        if (!Z(T))
          throw Error("React.Children.only expected to receive a single React element child.");
        return T;
      },
    }),
    (le.Component = R),
    (le.Fragment = o),
    (le.Profiler = u),
    (le.PureComponent = b),
    (le.StrictMode = a),
    (le.Suspense = m),
    (le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H),
    (le.act = U),
    (le.cloneElement = function (T, N, ae) {
      if (T == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            T +
            ".",
        );
      var ue = A({}, T.props),
        de = T.key,
        he = T.ref,
        Te = T._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((he = N.ref), (Te = oe.current)),
          N.key !== void 0 && (de = "" + N.key),
          T.type && T.type.defaultProps)
        )
          var ye = T.type.defaultProps;
        for (Re in N)
          Y.call(N, Re) &&
            !ie.hasOwnProperty(Re) &&
            (ue[Re] = N[Re] === void 0 && ye !== void 0 ? ye[Re] : N[Re]);
      }
      var Re = arguments.length - 2;
      if (Re === 1) ue.children = ae;
      else if (1 < Re) {
        ye = Array(Re);
        for (var ht = 0; ht < Re; ht++) ye[ht] = arguments[ht + 2];
        ue.children = ye;
      }
      return { $$typeof: n, type: T.type, key: de, ref: he, props: ue, _owner: Te };
    }),
    (le.createContext = function (T) {
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
    (le.createElement = q),
    (le.createFactory = function (T) {
      var N = q.bind(null, T);
      return ((N.type = T), N);
    }),
    (le.createRef = function () {
      return { current: null };
    }),
    (le.forwardRef = function (T) {
      return { $$typeof: h, render: T };
    }),
    (le.isValidElement = Z),
    (le.lazy = function (T) {
      return { $$typeof: g, _payload: { _status: -1, _result: T }, _init: ge };
    }),
    (le.memo = function (T, N) {
      return { $$typeof: y, type: T, compare: N === void 0 ? null : N };
    }),
    (le.startTransition = function (T) {
      var N = z.transition;
      z.transition = {};
      try {
        T();
      } finally {
        z.transition = N;
      }
    }),
    (le.unstable_act = U),
    (le.useCallback = function (T, N) {
      return ke.current.useCallback(T, N);
    }),
    (le.useContext = function (T) {
      return ke.current.useContext(T);
    }),
    (le.useDebugValue = function () {}),
    (le.useDeferredValue = function (T) {
      return ke.current.useDeferredValue(T);
    }),
    (le.useEffect = function (T, N) {
      return ke.current.useEffect(T, N);
    }),
    (le.useId = function () {
      return ke.current.useId();
    }),
    (le.useImperativeHandle = function (T, N, ae) {
      return ke.current.useImperativeHandle(T, N, ae);
    }),
    (le.useInsertionEffect = function (T, N) {
      return ke.current.useInsertionEffect(T, N);
    }),
    (le.useLayoutEffect = function (T, N) {
      return ke.current.useLayoutEffect(T, N);
    }),
    (le.useMemo = function (T, N) {
      return ke.current.useMemo(T, N);
    }),
    (le.useReducer = function (T, N, ae) {
      return ke.current.useReducer(T, N, ae);
    }),
    (le.useRef = function (T) {
      return ke.current.useRef(T);
    }),
    (le.useState = function (T) {
      return ke.current.useState(T);
    }),
    (le.useSyncExternalStore = function (T, N, ae) {
      return ke.current.useSyncExternalStore(T, N, ae);
    }),
    (le.useTransition = function () {
      return ke.current.useTransition();
    }),
    (le.version = "18.3.1"),
    le
  );
}
var Rd;
function ru() {
  return (Rd || ((Rd = 1), (cl.exports = Yy())), cl.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vd;
function qy() {
  if (Vd) return mi;
  Vd = 1;
  var n = ru(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(h, m, y) {
    var g,
      v = {},
      w = null,
      P = null;
    (y !== void 0 && (w = "" + y),
      m.key !== void 0 && (w = "" + m.key),
      m.ref !== void 0 && (P = m.ref));
    for (g in m) a.call(m, g) && !d.hasOwnProperty(g) && (v[g] = m[g]);
    if (h && h.defaultProps) for (g in ((m = h.defaultProps), m)) v[g] === void 0 && (v[g] = m[g]);
    return { $$typeof: r, type: h, key: w, ref: P, props: v, _owner: u.current };
  }
  return ((mi.Fragment = o), (mi.jsx = f), (mi.jsxs = f), mi);
}
var Ld;
function Zy() {
  return (Ld || ((Ld = 1), (ul.exports = qy())), ul.exports);
}
var V = Zy(),
  J = ru(),
  Wo = {},
  fl = { exports: {} },
  dt = {},
  dl = { exports: {} },
  hl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd;
function Jy() {
  return (
    Dd ||
      ((Dd = 1),
      (function (n) {
        function r(z, H) {
          var U = z.length;
          z.push(H);
          e: for (; 0 < U;) {
            var T = (U - 1) >>> 1,
              N = z[T];
            if (0 < u(N, H)) ((z[T] = H), (z[U] = N), (U = T));
            else break e;
          }
        }
        function o(z) {
          return z.length === 0 ? null : z[0];
        }
        function a(z) {
          if (z.length === 0) return null;
          var H = z[0],
            U = z.pop();
          if (U !== H) {
            z[0] = U;
            e: for (var T = 0, N = z.length, ae = N >>> 1; T < ae;) {
              var ue = 2 * (T + 1) - 1,
                de = z[ue],
                he = ue + 1,
                Te = z[he];
              if (0 > u(de, U))
                he < N && 0 > u(Te, de)
                  ? ((z[T] = Te), (z[he] = U), (T = he))
                  : ((z[T] = de), (z[ue] = U), (T = ue));
              else if (he < N && 0 > u(Te, U)) ((z[T] = Te), (z[he] = U), (T = he));
              else break e;
            }
          }
          return H;
        }
        function u(z, H) {
          var U = z.sortIndex - H.sortIndex;
          return U !== 0 ? U : z.id - H.id;
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
          w = 3,
          P = !1,
          A = !1,
          L = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          D = typeof clearTimeout == "function" ? clearTimeout : null,
          b = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(z) {
          for (var H = o(y); H !== null;) {
            if (H.callback === null) a(y);
            else if (H.startTime <= z) (a(y), (H.sortIndex = H.expirationTime), r(m, H));
            else break;
            H = o(y);
          }
        }
        function B(z) {
          if (((L = !1), O(z), !A))
            if (o(m) !== null) ((A = !0), ge(Y));
            else {
              var H = o(y);
              H !== null && ke(B, H.startTime - z);
            }
        }
        function Y(z, H) {
          ((A = !1), L && ((L = !1), D(q), (q = -1)), (P = !0));
          var U = w;
          try {
            for (O(H), v = o(m); v !== null && (!(v.expirationTime > H) || (z && !fe()));) {
              var T = v.callback;
              if (typeof T == "function") {
                ((v.callback = null), (w = v.priorityLevel));
                var N = T(v.expirationTime <= H);
                ((H = n.unstable_now()),
                  typeof N == "function" ? (v.callback = N) : v === o(m) && a(m),
                  O(H));
              } else a(m);
              v = o(m);
            }
            if (v !== null) var ae = !0;
            else {
              var ue = o(y);
              (ue !== null && ke(B, ue.startTime - H), (ae = !1));
            }
            return ae;
          } finally {
            ((v = null), (w = U), (P = !1));
          }
        }
        var oe = !1,
          ie = null,
          q = -1,
          me = 5,
          Z = -1;
        function fe() {
          return !(n.unstable_now() - Z < me);
        }
        function ne() {
          if (ie !== null) {
            var z = n.unstable_now();
            Z = z;
            var H = !0;
            try {
              H = ie(!0, z);
            } finally {
              H ? Ae() : ((oe = !1), (ie = null));
            }
          } else oe = !1;
        }
        var Ae;
        if (typeof b == "function")
          Ae = function () {
            b(ne);
          };
        else if (typeof MessageChannel < "u") {
          var xe = new MessageChannel(),
            Le = xe.port2;
          ((xe.port1.onmessage = ne),
            (Ae = function () {
              Le.postMessage(null);
            }));
        } else
          Ae = function () {
            R(ne, 0);
          };
        function ge(z) {
          ((ie = z), oe || ((oe = !0), Ae()));
        }
        function ke(z, H) {
          q = R(function () {
            z(n.unstable_now());
          }, H);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            A || P || ((A = !0), ge(Y));
          }),
          (n.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (me = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return o(m);
          }),
          (n.unstable_next = function (z) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = w;
            }
            var U = w;
            w = H;
            try {
              return z();
            } finally {
              w = U;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (z, H) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var U = w;
            w = z;
            try {
              return H();
            } finally {
              w = U;
            }
          }),
          (n.unstable_scheduleCallback = function (z, H, U) {
            var T = n.unstable_now();
            switch (
              (typeof U == "object" && U !== null
                ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? T + U : T))
                : (U = T),
              z)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = U + N),
              (z = {
                id: g++,
                callback: H,
                priorityLevel: z,
                startTime: U,
                expirationTime: N,
                sortIndex: -1,
              }),
              U > T
                ? ((z.sortIndex = U),
                  r(y, z),
                  o(m) === null && z === o(y) && (L ? (D(q), (q = -1)) : (L = !0), ke(B, U - T)))
                : ((z.sortIndex = N), r(m, z), A || P || ((A = !0), ge(Y))),
              z
            );
          }),
          (n.unstable_shouldYield = fe),
          (n.unstable_wrapCallback = function (z) {
            var H = w;
            return function () {
              var U = w;
              w = H;
              try {
                return z.apply(this, arguments);
              } finally {
                w = U;
              }
            };
          }));
      })(hl)),
    hl
  );
}
var Nd;
function ev() {
  return (Nd || ((Nd = 1), (dl.exports = Jy())), dl.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd;
function tv() {
  if (jd) return dt;
  jd = 1;
  var n = ru(),
    r = ev();
  function o(e) {
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
  var a = new Set(),
    u = {};
  function d(e, t) {
    (f(e, t), f(e + "Capture", t));
  }
  function f(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
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
  function w(e) {
    return m.call(v, e) ? !0 : m.call(g, e) ? !1 : y.test(e) ? (v[e] = !0) : ((g[e] = !0), !1);
  }
  function P(e, t, i, s) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s
          ? !1
          : i !== null
            ? !i.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function A(e, t, i, s) {
    if (t === null || typeof t > "u" || P(e, t, i, s)) return !0;
    if (s) return !1;
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
  function L(e, t, i, s, l, c, p) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = s),
      (this.attributeNamespace = l),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = p));
  }
  var R = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      R[e] = new L(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      R[t] = new L(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      R[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        R[e] = new L(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        R[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      R[e] = new L(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      R[e] = new L(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      R[e] = new L(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      R[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var D = /[\-:]([a-z])/g;
  function b(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(D, b);
      R[t] = new L(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(D, b);
        R[t] = new L(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(D, b);
      R[t] = new L(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      R[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (R.xlinkHref = new L("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      R[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function O(e, t, i, s) {
    var l = R.hasOwnProperty(t) ? R[t] : null;
    (l !== null
      ? l.type !== 0
      : s || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (A(t, i, l, s) && (i = null),
      s || l === null
        ? w(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i))
        : l.mustUseProperty
          ? (e[l.propertyName] = i === null ? (l.type === 3 ? !1 : "") : i)
          : ((t = l.attributeName),
            (s = l.attributeNamespace),
            i === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (i = l === 3 || (l === 4 && i === !0) ? "" : "" + i),
                s ? e.setAttributeNS(s, t, i) : e.setAttribute(t, i))));
  }
  var B = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Y = Symbol.for("react.element"),
    oe = Symbol.for("react.portal"),
    ie = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    me = Symbol.for("react.profiler"),
    Z = Symbol.for("react.provider"),
    fe = Symbol.for("react.context"),
    ne = Symbol.for("react.forward_ref"),
    Ae = Symbol.for("react.suspense"),
    xe = Symbol.for("react.suspense_list"),
    Le = Symbol.for("react.memo"),
    ge = Symbol.for("react.lazy"),
    ke = Symbol.for("react.offscreen"),
    z = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (z && e[z]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var U = Object.assign,
    T;
  function N(e) {
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
  var ae = !1;
  function ue(e, t) {
    if (!e || ae) return "";
    ae = !0;
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
          } catch (M) {
            var s = M;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (M) {
            s = M;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (M) {
          s = M;
        }
        e();
      }
    } catch (M) {
      if (M && s && typeof M.stack == "string") {
        for (
          var l = M.stack.split(`
`),
            c = s.stack.split(`
`),
            p = l.length - 1,
            x = c.length - 1;
          1 <= p && 0 <= x && l[p] !== c[x];
        )
          x--;
        for (; 1 <= p && 0 <= x; p--, x--)
          if (l[p] !== c[x]) {
            if (p !== 1 || x !== 1)
              do
                if ((p--, x--, 0 > x || l[p] !== c[x])) {
                  var S =
                    `
` + l[p].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", e.displayName)),
                    S
                  );
                }
              while (1 <= p && 0 <= x);
            break;
          }
      }
    } finally {
      ((ae = !1), (Error.prepareStackTrace = i));
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function de(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = ue(e.type, !1)), e);
      case 11:
        return ((e = ue(e.type.render, !1)), e);
      case 1:
        return ((e = ue(e.type, !0)), e);
      default:
        return "";
    }
  }
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ie:
        return "Fragment";
      case oe:
        return "Portal";
      case me:
        return "Profiler";
      case q:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case fe:
          return (e.displayName || "Context") + ".Consumer";
        case Z:
          return (e._context.displayName || "Context") + ".Provider";
        case ne:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Le:
          return ((t = e.displayName || null), t !== null ? t : he(e.type) || "Memo");
        case ge:
          ((t = e._payload), (e = e._init));
          try {
            return he(e(t));
          } catch {}
      }
    return null;
  }
  function Te(e) {
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
        return he(t);
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
  function ye(e) {
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
  function Re(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ht(e) {
    var t = Re(e) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      s = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var l = i.get,
        c = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (p) {
            ((s = "" + p), c.call(this, p));
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (p) {
            s = "" + p;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Di(e) {
    e._valueTracker || (e._valueTracker = ht(e));
  }
  function Nu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      s = "";
    return (
      e && (s = Re(e) ? (e.checked ? "true" : "false") : e.value),
      (e = s),
      e !== i ? (t.setValue(e), !0) : !1
    );
  }
  function Ni(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function gs(e, t) {
    var i = t.checked;
    return U({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function ju(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue,
      s = t.checked != null ? t.checked : t.defaultChecked;
    ((i = ye(t.value != null ? t.value : i)),
      (e._wrapperState = {
        initialChecked: s,
        initialValue: i,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function Iu(e, t) {
    ((t = t.checked), t != null && O(e, "checked", t, !1));
  }
  function ys(e, t) {
    Iu(e, t);
    var i = ye(t.value),
      s = t.type;
    if (i != null)
      s === "number"
        ? ((i === 0 && e.value === "") || e.value != i) && (e.value = "" + i)
        : e.value !== "" + i && (e.value = "" + i);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? vs(e, t.type, i)
      : t.hasOwnProperty("defaultValue") && vs(e, t.type, ye(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function _u(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!((s !== "submit" && s !== "reset") || (t.value !== void 0 && t.value !== null))) return;
      ((t = "" + e._wrapperState.initialValue),
        i || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((i = e.name),
      i !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== "" && (e.name = i));
  }
  function vs(e, t, i) {
    (t !== "number" || Ni(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var Vr = Array.isArray;
  function Xn(e, t, i, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < i.length; l++) t["$" + i[l]] = !0;
      for (i = 0; i < e.length; i++)
        ((l = t.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== l && (e[i].selected = l),
          l && s && (e[i].defaultSelected = !0));
    } else {
      for (i = "" + ye(i), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === i) {
          ((e[l].selected = !0), s && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function xs(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return U({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function zu(e, t) {
    var i = t.value;
    if (i == null) {
      if (((i = t.children), (t = t.defaultValue), i != null)) {
        if (t != null) throw Error(o(92));
        if (Vr(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        t = i;
      }
      (t == null && (t = ""), (i = t));
    }
    e._wrapperState = { initialValue: ye(i) };
  }
  function bu(e, t) {
    var i = ye(t.value),
      s = ye(t.defaultValue);
    (i != null &&
      ((i = "" + i),
      i !== e.value && (e.value = i),
      t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      s != null && (e.defaultValue = "" + s));
  }
  function Fu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Ou(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ws(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ou(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var ji,
    Bu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, i, s, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, i, s, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (
          ji = ji || document.createElement("div"),
            ji.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ji.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Lr(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dr = {
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
    eg = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dr).forEach(function (e) {
    eg.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dr[t] = Dr[e]));
    });
  });
  function Uu(e, t, i) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : i || typeof t != "number" || t === 0 || (Dr.hasOwnProperty(e) && Dr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Wu(e, t) {
    e = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var s = i.indexOf("--") === 0,
          l = Uu(i, t[i], s);
        (i === "float" && (i = "cssFloat"), s ? e.setProperty(i, l) : (e[i] = l));
      }
  }
  var tg = U(
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
  function Ss(e, t) {
    if (t) {
      if (tg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function ks(e, t) {
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
  var Ts = null;
  function Cs(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ps = null,
    Qn = null,
    Yn = null;
  function Hu(e) {
    if ((e = ei(e))) {
      if (typeof Ps != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = ro(t)), Ps(e.stateNode, e.type, t));
    }
  }
  function $u(e) {
    Qn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Qn = e);
  }
  function Ku() {
    if (Qn) {
      var e = Qn,
        t = Yn;
      if (((Yn = Qn = null), Hu(e), t)) for (e = 0; e < t.length; e++) Hu(t[e]);
    }
  }
  function Gu(e, t) {
    return e(t);
  }
  function Xu() {}
  var Es = !1;
  function Qu(e, t, i) {
    if (Es) return e(t, i);
    Es = !0;
    try {
      return Gu(e, t, i);
    } finally {
      ((Es = !1), (Qn !== null || Yn !== null) && (Xu(), Ku()));
    }
  }
  function Nr(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var s = ro(i);
    if (s === null) return null;
    i = s[t];
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
        ((s = !s.disabled) ||
          ((e = e.type),
          (s = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
          (e = !s));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(o(231, t, typeof i));
    return i;
  }
  var Ms = !1;
  if (h)
    try {
      var jr = {};
      (Object.defineProperty(jr, "passive", {
        get: function () {
          Ms = !0;
        },
      }),
        window.addEventListener("test", jr, jr),
        window.removeEventListener("test", jr, jr));
    } catch {
      Ms = !1;
    }
  function ng(e, t, i, s, l, c, p, x, S) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, M);
    } catch (I) {
      this.onError(I);
    }
  }
  var Ir = !1,
    Ii = null,
    _i = !1,
    As = null,
    rg = {
      onError: function (e) {
        ((Ir = !0), (Ii = e));
      },
    };
  function ig(e, t, i, s, l, c, p, x, S) {
    ((Ir = !1), (Ii = null), ng.apply(rg, arguments));
  }
  function og(e, t, i, s, l, c, p, x, S) {
    if ((ig.apply(this, arguments), Ir)) {
      if (Ir) {
        var M = Ii;
        ((Ir = !1), (Ii = null));
      } else throw Error(o(198));
      _i || ((_i = !0), (As = M));
    }
  }
  function Rn(e) {
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
  function Yu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function qu(e) {
    if (Rn(e) !== e) throw Error(o(188));
  }
  function sg(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Rn(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var i = e, s = t; ;) {
      var l = i.return;
      if (l === null) break;
      var c = l.alternate;
      if (c === null) {
        if (((s = l.return), s !== null)) {
          i = s;
          continue;
        }
        break;
      }
      if (l.child === c.child) {
        for (c = l.child; c;) {
          if (c === i) return (qu(l), e);
          if (c === s) return (qu(l), t);
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (i.return !== s.return) ((i = l), (s = c));
      else {
        for (var p = !1, x = l.child; x;) {
          if (x === i) {
            ((p = !0), (i = l), (s = c));
            break;
          }
          if (x === s) {
            ((p = !0), (s = l), (i = c));
            break;
          }
          x = x.sibling;
        }
        if (!p) {
          for (x = c.child; x;) {
            if (x === i) {
              ((p = !0), (i = c), (s = l));
              break;
            }
            if (x === s) {
              ((p = !0), (s = c), (i = l));
              break;
            }
            x = x.sibling;
          }
          if (!p) throw Error(o(189));
        }
      }
      if (i.alternate !== s) throw Error(o(190));
    }
    if (i.tag !== 3) throw Error(o(188));
    return i.stateNode.current === i ? e : t;
  }
  function Zu(e) {
    return ((e = sg(e)), e !== null ? Ju(e) : null);
  }
  function Ju(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Ju(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ec = r.unstable_scheduleCallback,
    tc = r.unstable_cancelCallback,
    ag = r.unstable_shouldYield,
    lg = r.unstable_requestPaint,
    _e = r.unstable_now,
    ug = r.unstable_getCurrentPriorityLevel,
    Rs = r.unstable_ImmediatePriority,
    nc = r.unstable_UserBlockingPriority,
    zi = r.unstable_NormalPriority,
    cg = r.unstable_LowPriority,
    rc = r.unstable_IdlePriority,
    bi = null,
    zt = null;
  function fg(e) {
    if (zt && typeof zt.onCommitFiberRoot == "function")
      try {
        zt.onCommitFiberRoot(bi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Mt = Math.clz32 ? Math.clz32 : pg,
    dg = Math.log,
    hg = Math.LN2;
  function pg(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((dg(e) / hg) | 0)) | 0);
  }
  var Fi = 64,
    Oi = 4194304;
  function _r(e) {
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
  function Bi(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      l = e.suspendedLanes,
      c = e.pingedLanes,
      p = i & 268435455;
    if (p !== 0) {
      var x = p & ~l;
      x !== 0 ? (s = _r(x)) : ((c &= p), c !== 0 && (s = _r(c)));
    } else ((p = i & ~l), p !== 0 ? (s = _r(p)) : c !== 0 && (s = _r(c)));
    if (s === 0) return 0;
    if (
      t !== 0 &&
      t !== s &&
      (t & l) === 0 &&
      ((l = s & -s), (c = t & -t), l >= c || (l === 16 && (c & 4194240) !== 0))
    )
      return t;
    if (((s & 4) !== 0 && (s |= i & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= s; 0 < t;)
        ((i = 31 - Mt(t)), (l = 1 << i), (s |= e[i]), (t &= ~l));
    return s;
  }
  function mg(e, t) {
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
  function gg(e, t) {
    for (
      var i = e.suspendedLanes, s = e.pingedLanes, l = e.expirationTimes, c = e.pendingLanes;
      0 < c;
    ) {
      var p = 31 - Mt(c),
        x = 1 << p,
        S = l[p];
      (S === -1
        ? ((x & i) === 0 || (x & s) !== 0) && (l[p] = mg(x, t))
        : S <= t && (e.expiredLanes |= x),
        (c &= ~x));
    }
  }
  function Vs(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ic() {
    var e = Fi;
    return ((Fi <<= 1), (Fi & 4194240) === 0 && (Fi = 64), e);
  }
  function Ls(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function zr(e, t, i) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Mt(t)),
      (e[t] = i));
  }
  function yg(e, t) {
    var i = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < i;) {
      var l = 31 - Mt(i),
        c = 1 << l;
      ((t[l] = 0), (s[l] = -1), (e[l] = -1), (i &= ~c));
    }
  }
  function Ds(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i;) {
      var s = 31 - Mt(i),
        l = 1 << s;
      ((l & t) | (e[s] & t) && (e[s] |= t), (i &= ~l));
    }
  }
  var ve = 0;
  function oc(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var sc,
    Ns,
    ac,
    lc,
    uc,
    js = !1,
    Ui = [],
    nn = null,
    rn = null,
    on = null,
    br = new Map(),
    Fr = new Map(),
    sn = [],
    vg =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function cc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        nn = null;
        break;
      case "dragenter":
      case "dragleave":
        rn = null;
        break;
      case "mouseover":
      case "mouseout":
        on = null;
        break;
      case "pointerover":
      case "pointerout":
        br.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fr.delete(t.pointerId);
    }
  }
  function Or(e, t, i, s, l, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: i,
          eventSystemFlags: s,
          nativeEvent: c,
          targetContainers: [l],
        }),
        t !== null && ((t = ei(t)), t !== null && Ns(t)),
        e)
      : ((e.eventSystemFlags |= s),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function xg(e, t, i, s, l) {
    switch (t) {
      case "focusin":
        return ((nn = Or(nn, e, t, i, s, l)), !0);
      case "dragenter":
        return ((rn = Or(rn, e, t, i, s, l)), !0);
      case "mouseover":
        return ((on = Or(on, e, t, i, s, l)), !0);
      case "pointerover":
        var c = l.pointerId;
        return (br.set(c, Or(br.get(c) || null, e, t, i, s, l)), !0);
      case "gotpointercapture":
        return ((c = l.pointerId), Fr.set(c, Or(Fr.get(c) || null, e, t, i, s, l)), !0);
    }
    return !1;
  }
  function fc(e) {
    var t = Vn(e.target);
    if (t !== null) {
      var i = Rn(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = Yu(i)), t !== null)) {
            ((e.blockedOn = t),
              uc(e.priority, function () {
                ac(i);
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
  function Wi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var i = _s(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var s = new i.constructor(i.type, i);
        ((Ts = s), i.target.dispatchEvent(s), (Ts = null));
      } else return ((t = ei(i)), t !== null && Ns(t), (e.blockedOn = i), !1);
      t.shift();
    }
    return !0;
  }
  function dc(e, t, i) {
    Wi(e) && i.delete(t);
  }
  function wg() {
    ((js = !1),
      nn !== null && Wi(nn) && (nn = null),
      rn !== null && Wi(rn) && (rn = null),
      on !== null && Wi(on) && (on = null),
      br.forEach(dc),
      Fr.forEach(dc));
  }
  function Br(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      js || ((js = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, wg)));
  }
  function Ur(e) {
    function t(l) {
      return Br(l, e);
    }
    if (0 < Ui.length) {
      Br(Ui[0], e);
      for (var i = 1; i < Ui.length; i++) {
        var s = Ui[i];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (
      nn !== null && Br(nn, e),
        rn !== null && Br(rn, e),
        on !== null && Br(on, e),
        br.forEach(t),
        Fr.forEach(t),
        i = 0;
      i < sn.length;
      i++
    )
      ((s = sn[i]), s.blockedOn === e && (s.blockedOn = null));
    for (; 0 < sn.length && ((i = sn[0]), i.blockedOn === null);)
      (fc(i), i.blockedOn === null && sn.shift());
  }
  var qn = B.ReactCurrentBatchConfig,
    Hi = !0;
  function Sg(e, t, i, s) {
    var l = ve,
      c = qn.transition;
    qn.transition = null;
    try {
      ((ve = 1), Is(e, t, i, s));
    } finally {
      ((ve = l), (qn.transition = c));
    }
  }
  function kg(e, t, i, s) {
    var l = ve,
      c = qn.transition;
    qn.transition = null;
    try {
      ((ve = 4), Is(e, t, i, s));
    } finally {
      ((ve = l), (qn.transition = c));
    }
  }
  function Is(e, t, i, s) {
    if (Hi) {
      var l = _s(e, t, i, s);
      if (l === null) (Js(e, t, s, $i, i), cc(e, s));
      else if (xg(l, e, t, i, s)) s.stopPropagation();
      else if ((cc(e, s), t & 4 && -1 < vg.indexOf(e))) {
        for (; l !== null;) {
          var c = ei(l);
          if (
            (c !== null && sc(c), (c = _s(e, t, i, s)), c === null && Js(e, t, s, $i, i), c === l)
          )
            break;
          l = c;
        }
        l !== null && s.stopPropagation();
      } else Js(e, t, s, null, i);
    }
  }
  var $i = null;
  function _s(e, t, i, s) {
    if ((($i = null), (e = Cs(s)), (e = Vn(e)), e !== null))
      if (((t = Rn(e)), t === null)) e = null;
      else if (((i = t.tag), i === 13)) {
        if (((e = Yu(t)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (($i = e), null);
  }
  function hc(e) {
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
        switch (ug()) {
          case Rs:
            return 1;
          case nc:
            return 4;
          case zi:
          case cg:
            return 16;
          case rc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var an = null,
    zs = null,
    Ki = null;
  function pc() {
    if (Ki) return Ki;
    var e,
      t = zs,
      i = t.length,
      s,
      l = "value" in an ? an.value : an.textContent,
      c = l.length;
    for (e = 0; e < i && t[e] === l[e]; e++);
    var p = i - e;
    for (s = 1; s <= p && t[i - s] === l[c - s]; s++);
    return (Ki = l.slice(e, 1 < s ? 1 - s : void 0));
  }
  function Gi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Xi() {
    return !0;
  }
  function mc() {
    return !1;
  }
  function pt(e) {
    function t(i, s, l, c, p) {
      ((this._reactName = i),
        (this._targetInst = l),
        (this.type = s),
        (this.nativeEvent = c),
        (this.target = p),
        (this.currentTarget = null));
      for (var x in e) e.hasOwnProperty(x) && ((i = e[x]), (this[x] = i ? i(c) : c[x]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Xi
          : mc),
        (this.isPropagationStopped = mc),
        this
      );
    }
    return (
      U(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = Xi));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = Xi));
        },
        persist: function () {},
        isPersistent: Xi,
      }),
      t
    );
  }
  var Zn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    bs = pt(Zn),
    Wr = U({}, Zn, { view: 0, detail: 0 }),
    Tg = pt(Wr),
    Fs,
    Os,
    Hr,
    Qi = U({}, Wr, {
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
      getModifierState: Us,
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
          : (e !== Hr &&
              (Hr && e.type === "mousemove"
                ? ((Fs = e.screenX - Hr.screenX), (Os = e.screenY - Hr.screenY))
                : (Os = Fs = 0),
              (Hr = e)),
            Fs);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Os;
      },
    }),
    gc = pt(Qi),
    Cg = U({}, Qi, { dataTransfer: 0 }),
    Pg = pt(Cg),
    Eg = U({}, Wr, { relatedTarget: 0 }),
    Bs = pt(Eg),
    Mg = U({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ag = pt(Mg),
    Rg = U({}, Zn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Vg = pt(Rg),
    Lg = U({}, Zn, { data: 0 }),
    yc = pt(Lg),
    Dg = {
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
    Ng = {
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
    jg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ig(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = jg[e]) ? !!t[e] : !1;
  }
  function Us() {
    return Ig;
  }
  var _g = U({}, Wr, {
      key: function (e) {
        if (e.key) {
          var t = Dg[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Gi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Ng[e.keyCode] || "Unidentified"
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
      getModifierState: Us,
      charCode: function (e) {
        return e.type === "keypress" ? Gi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Gi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    zg = pt(_g),
    bg = U({}, Qi, {
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
    vc = pt(bg),
    Fg = U({}, Wr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Us,
    }),
    Og = pt(Fg),
    Bg = U({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ug = pt(Bg),
    Wg = U({}, Qi, {
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
    Hg = pt(Wg),
    $g = [9, 13, 27, 32],
    Ws = h && "CompositionEvent" in window,
    $r = null;
  h && "documentMode" in document && ($r = document.documentMode);
  var Kg = h && "TextEvent" in window && !$r,
    xc = h && (!Ws || ($r && 8 < $r && 11 >= $r)),
    wc = " ",
    Sc = !1;
  function kc(e, t) {
    switch (e) {
      case "keyup":
        return $g.indexOf(t.keyCode) !== -1;
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
  function Tc(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var Jn = !1;
  function Gg(e, t) {
    switch (e) {
      case "compositionend":
        return Tc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Sc = !0), wc);
      case "textInput":
        return ((e = t.data), e === wc && Sc ? null : e);
      default:
        return null;
    }
  }
  function Xg(e, t) {
    if (Jn)
      return e === "compositionend" || (!Ws && kc(e, t))
        ? ((e = pc()), (Ki = zs = an = null), (Jn = !1), e)
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
        return xc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Qg = {
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
  function Cc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Qg[e.type] : t === "textarea";
  }
  function Pc(e, t, i, s) {
    ($u(s),
      (t = eo(t, "onChange")),
      0 < t.length &&
        ((i = new bs("onChange", "change", null, i, s)), e.push({ event: i, listeners: t })));
  }
  var Kr = null,
    Gr = null;
  function Yg(e) {
    Wc(e, 0);
  }
  function Yi(e) {
    var t = ir(e);
    if (Nu(t)) return e;
  }
  function qg(e, t) {
    if (e === "change") return t;
  }
  var Ec = !1;
  if (h) {
    var Hs;
    if (h) {
      var $s = "oninput" in document;
      if (!$s) {
        var Mc = document.createElement("div");
        (Mc.setAttribute("oninput", "return;"), ($s = typeof Mc.oninput == "function"));
      }
      Hs = $s;
    } else Hs = !1;
    Ec = Hs && (!document.documentMode || 9 < document.documentMode);
  }
  function Ac() {
    Kr && (Kr.detachEvent("onpropertychange", Rc), (Gr = Kr = null));
  }
  function Rc(e) {
    if (e.propertyName === "value" && Yi(Gr)) {
      var t = [];
      (Pc(t, Gr, e, Cs(e)), Qu(Yg, t));
    }
  }
  function Zg(e, t, i) {
    e === "focusin"
      ? (Ac(), (Kr = t), (Gr = i), Kr.attachEvent("onpropertychange", Rc))
      : e === "focusout" && Ac();
  }
  function Jg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Yi(Gr);
  }
  function ey(e, t) {
    if (e === "click") return Yi(t);
  }
  function ty(e, t) {
    if (e === "input" || e === "change") return Yi(t);
  }
  function ny(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var At = typeof Object.is == "function" ? Object.is : ny;
  function Xr(e, t) {
    if (At(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(e),
      s = Object.keys(t);
    if (i.length !== s.length) return !1;
    for (s = 0; s < i.length; s++) {
      var l = i[s];
      if (!m.call(t, l) || !At(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Vc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Lc(e, t) {
    var i = Vc(e);
    e = 0;
    for (var s; i;) {
      if (i.nodeType === 3) {
        if (((s = e + i.textContent.length), e <= t && s >= t)) return { node: i, offset: t - e };
        e = s;
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
      i = Vc(i);
    }
  }
  function Dc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Dc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Nc() {
    for (var e = window, t = Ni(); t instanceof e.HTMLIFrameElement;) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Ni(e.document);
    }
    return t;
  }
  function Ks(e) {
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
  function ry(e) {
    var t = Nc(),
      i = e.focusedElem,
      s = e.selectionRange;
    if (t !== i && i && i.ownerDocument && Dc(i.ownerDocument.documentElement, i)) {
      if (s !== null && Ks(i)) {
        if (((t = s.start), (e = s.end), e === void 0 && (e = t), "selectionStart" in i))
          ((i.selectionStart = t), (i.selectionEnd = Math.min(e, i.value.length)));
        else if (
          ((e = ((t = i.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var l = i.textContent.length,
            c = Math.min(s.start, l);
          ((s = s.end === void 0 ? c : Math.min(s.end, l)),
            !e.extend && c > s && ((l = s), (s = c), (c = l)),
            (l = Lc(i, c)));
          var p = Lc(i, s);
          l &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            c > s
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
  var iy = h && "documentMode" in document && 11 >= document.documentMode,
    er = null,
    Gs = null,
    Qr = null,
    Xs = !1;
  function jc(e, t, i) {
    var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Xs ||
      er == null ||
      er !== Ni(s) ||
      ((s = er),
      "selectionStart" in s && Ks(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = ((s.ownerDocument && s.ownerDocument.defaultView) || window).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (Qr && Xr(Qr, s)) ||
        ((Qr = s),
        (s = eo(Gs, "onSelect")),
        0 < s.length &&
          ((t = new bs("onSelect", "select", null, t, i)),
          e.push({ event: t, listeners: s }),
          (t.target = er))));
  }
  function qi(e, t) {
    var i = {};
    return (
      (i[e.toLowerCase()] = t.toLowerCase()),
      (i["Webkit" + e] = "webkit" + t),
      (i["Moz" + e] = "moz" + t),
      i
    );
  }
  var tr = {
      animationend: qi("Animation", "AnimationEnd"),
      animationiteration: qi("Animation", "AnimationIteration"),
      animationstart: qi("Animation", "AnimationStart"),
      transitionend: qi("Transition", "TransitionEnd"),
    },
    Qs = {},
    Ic = {};
  h &&
    ((Ic = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete tr.animationend.animation,
      delete tr.animationiteration.animation,
      delete tr.animationstart.animation),
    "TransitionEvent" in window || delete tr.transitionend.transition);
  function Zi(e) {
    if (Qs[e]) return Qs[e];
    if (!tr[e]) return e;
    var t = tr[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in Ic) return (Qs[e] = t[i]);
    return e;
  }
  var _c = Zi("animationend"),
    zc = Zi("animationiteration"),
    bc = Zi("animationstart"),
    Fc = Zi("transitionend"),
    Oc = new Map(),
    Bc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function ln(e, t) {
    (Oc.set(e, t), d(t, [e]));
  }
  for (var Ys = 0; Ys < Bc.length; Ys++) {
    var qs = Bc[Ys],
      oy = qs.toLowerCase(),
      sy = qs[0].toUpperCase() + qs.slice(1);
    ln(oy, "on" + sy);
  }
  (ln(_c, "onAnimationEnd"),
    ln(zc, "onAnimationIteration"),
    ln(bc, "onAnimationStart"),
    ln("dblclick", "onDoubleClick"),
    ln("focusin", "onFocus"),
    ln("focusout", "onBlur"),
    ln(Fc, "onTransitionEnd"),
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
  var Yr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));
  function Uc(e, t, i) {
    var s = e.type || "unknown-event";
    ((e.currentTarget = i), og(s, t, void 0, e), (e.currentTarget = null));
  }
  function Wc(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var s = e[i],
        l = s.event;
      s = s.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = s.length - 1; 0 <= p; p--) {
            var x = s[p],
              S = x.instance,
              M = x.currentTarget;
            if (((x = x.listener), S !== c && l.isPropagationStopped())) break e;
            (Uc(l, x, M), (c = S));
          }
        else
          for (p = 0; p < s.length; p++) {
            if (
              ((x = s[p]),
              (S = x.instance),
              (M = x.currentTarget),
              (x = x.listener),
              S !== c && l.isPropagationStopped())
            )
              break e;
            (Uc(l, x, M), (c = S));
          }
      }
    }
    if (_i) throw ((e = As), (_i = !1), (As = null), e);
  }
  function Pe(e, t) {
    var i = t[oa];
    i === void 0 && (i = t[oa] = new Set());
    var s = e + "__bubble";
    i.has(s) || (Hc(t, e, 2, !1), i.add(s));
  }
  function Zs(e, t, i) {
    var s = 0;
    (t && (s |= 4), Hc(i, e, s, t));
  }
  var Ji = "_reactListening" + Math.random().toString(36).slice(2);
  function qr(e) {
    if (!e[Ji]) {
      ((e[Ji] = !0),
        a.forEach(function (i) {
          i !== "selectionchange" && (ay.has(i) || Zs(i, !1, e), Zs(i, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ji] || ((t[Ji] = !0), Zs("selectionchange", !1, t));
    }
  }
  function Hc(e, t, i, s) {
    switch (hc(t)) {
      case 1:
        var l = Sg;
        break;
      case 4:
        l = kg;
        break;
      default:
        l = Is;
    }
    ((i = l.bind(null, t, i, e)),
      (l = void 0),
      !Ms || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      s
        ? l !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: l })
          : e.addEventListener(t, i, !0)
        : l !== void 0
          ? e.addEventListener(t, i, { passive: l })
          : e.addEventListener(t, i, !1));
  }
  function Js(e, t, i, s, l) {
    var c = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (;;) {
        if (s === null) return;
        var p = s.tag;
        if (p === 3 || p === 4) {
          var x = s.stateNode.containerInfo;
          if (x === l || (x.nodeType === 8 && x.parentNode === l)) break;
          if (p === 4)
            for (p = s.return; p !== null;) {
              var S = p.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = p.stateNode.containerInfo),
                S === l || (S.nodeType === 8 && S.parentNode === l))
              )
                return;
              p = p.return;
            }
          for (; x !== null;) {
            if (((p = Vn(x)), p === null)) return;
            if (((S = p.tag), S === 5 || S === 6)) {
              s = c = p;
              continue e;
            }
            x = x.parentNode;
          }
        }
        s = s.return;
      }
    Qu(function () {
      var M = c,
        I = Cs(i),
        _ = [];
      e: {
        var j = Oc.get(e);
        if (j !== void 0) {
          var W = bs,
            K = e;
          switch (e) {
            case "keypress":
              if (Gi(i) === 0) break e;
            case "keydown":
            case "keyup":
              W = zg;
              break;
            case "focusin":
              ((K = "focus"), (W = Bs));
              break;
            case "focusout":
              ((K = "blur"), (W = Bs));
              break;
            case "beforeblur":
            case "afterblur":
              W = Bs;
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
              W = gc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = Pg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = Og;
              break;
            case _c:
            case zc:
            case bc:
              W = Ag;
              break;
            case Fc:
              W = Ug;
              break;
            case "scroll":
              W = Tg;
              break;
            case "wheel":
              W = Hg;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = Vg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = vc;
          }
          var X = (t & 4) !== 0,
            ze = !X && e === "scroll",
            C = X ? (j !== null ? j + "Capture" : null) : j;
          X = [];
          for (var k = M, E; k !== null;) {
            E = k;
            var F = E.stateNode;
            if (
              (E.tag === 5 &&
                F !== null &&
                ((E = F), C !== null && ((F = Nr(k, C)), F != null && X.push(Zr(k, F, E)))),
              ze)
            )
              break;
            k = k.return;
          }
          0 < X.length && ((j = new W(j, K, null, i, I)), _.push({ event: j, listeners: X }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((j = e === "mouseover" || e === "pointerover"),
            (W = e === "mouseout" || e === "pointerout"),
            j && i !== Ts && (K = i.relatedTarget || i.fromElement) && (Vn(K) || K[Kt]))
          )
            break e;
          if (
            (W || j) &&
            ((j =
              I.window === I
                ? I
                : (j = I.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            W
              ? ((K = i.relatedTarget || i.toElement),
                (W = M),
                (K = K ? Vn(K) : null),
                K !== null &&
                  ((ze = Rn(K)), K !== ze || (K.tag !== 5 && K.tag !== 6)) &&
                  (K = null))
              : ((W = null), (K = M)),
            W !== K)
          ) {
            if (
              ((X = gc),
              (F = "onMouseLeave"),
              (C = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((X = vc), (F = "onPointerLeave"), (C = "onPointerEnter"), (k = "pointer")),
              (ze = W == null ? j : ir(W)),
              (E = K == null ? j : ir(K)),
              (j = new X(F, k + "leave", W, i, I)),
              (j.target = ze),
              (j.relatedTarget = E),
              (F = null),
              Vn(I) === M &&
                ((X = new X(C, k + "enter", K, i, I)),
                (X.target = E),
                (X.relatedTarget = ze),
                (F = X)),
              (ze = F),
              W && K)
            )
              t: {
                for (X = W, C = K, k = 0, E = X; E; E = nr(E)) k++;
                for (E = 0, F = C; F; F = nr(F)) E++;
                for (; 0 < k - E;) ((X = nr(X)), k--);
                for (; 0 < E - k;) ((C = nr(C)), E--);
                for (; k--;) {
                  if (X === C || (C !== null && X === C.alternate)) break t;
                  ((X = nr(X)), (C = nr(C)));
                }
                X = null;
              }
            else X = null;
            (W !== null && $c(_, j, W, X, !1), K !== null && ze !== null && $c(_, ze, K, X, !0));
          }
        }
        e: {
          if (
            ((j = M ? ir(M) : window),
            (W = j.nodeName && j.nodeName.toLowerCase()),
            W === "select" || (W === "input" && j.type === "file"))
          )
            var Q = qg;
          else if (Cc(j))
            if (Ec) Q = ty;
            else {
              Q = Jg;
              var ee = Zg;
            }
          else
            (W = j.nodeName) &&
              W.toLowerCase() === "input" &&
              (j.type === "checkbox" || j.type === "radio") &&
              (Q = ey);
          if (Q && (Q = Q(e, M))) {
            Pc(_, Q, i, I);
            break e;
          }
          (ee && ee(e, j, M),
            e === "focusout" &&
              (ee = j._wrapperState) &&
              ee.controlled &&
              j.type === "number" &&
              vs(j, "number", j.value));
        }
        switch (((ee = M ? ir(M) : window), e)) {
          case "focusin":
            (Cc(ee) || ee.contentEditable === "true") && ((er = ee), (Gs = M), (Qr = null));
            break;
          case "focusout":
            Qr = Gs = er = null;
            break;
          case "mousedown":
            Xs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Xs = !1), jc(_, i, I));
            break;
          case "selectionchange":
            if (iy) break;
          case "keydown":
          case "keyup":
            jc(_, i, I);
        }
        var te;
        if (Ws)
          e: {
            switch (e) {
              case "compositionstart":
                var re = "onCompositionStart";
                break e;
              case "compositionend":
                re = "onCompositionEnd";
                break e;
              case "compositionupdate":
                re = "onCompositionUpdate";
                break e;
            }
            re = void 0;
          }
        else
          Jn
            ? kc(e, i) && (re = "onCompositionEnd")
            : e === "keydown" && i.keyCode === 229 && (re = "onCompositionStart");
        (re &&
          (xc &&
            i.locale !== "ko" &&
            (Jn || re !== "onCompositionStart"
              ? re === "onCompositionEnd" && Jn && (te = pc())
              : ((an = I), (zs = "value" in an ? an.value : an.textContent), (Jn = !0))),
          (ee = eo(M, re)),
          0 < ee.length &&
            ((re = new yc(re, e, null, i, I)),
            _.push({ event: re, listeners: ee }),
            te ? (re.data = te) : ((te = Tc(i)), te !== null && (re.data = te)))),
          (te = Kg ? Gg(e, i) : Xg(e, i)) &&
            ((M = eo(M, "onBeforeInput")),
            0 < M.length &&
              ((I = new yc("onBeforeInput", "beforeinput", null, i, I)),
              _.push({ event: I, listeners: M }),
              (I.data = te))));
      }
      Wc(_, t);
    });
  }
  function Zr(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function eo(e, t) {
    for (var i = t + "Capture", s = []; e !== null;) {
      var l = e,
        c = l.stateNode;
      (l.tag === 5 &&
        c !== null &&
        ((l = c),
        (c = Nr(e, i)),
        c != null && s.unshift(Zr(e, c, l)),
        (c = Nr(e, t)),
        c != null && s.push(Zr(e, c, l))),
        (e = e.return));
    }
    return s;
  }
  function nr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function $c(e, t, i, s, l) {
    for (var c = t._reactName, p = []; i !== null && i !== s;) {
      var x = i,
        S = x.alternate,
        M = x.stateNode;
      if (S !== null && S === s) break;
      (x.tag === 5 &&
        M !== null &&
        ((x = M),
        l
          ? ((S = Nr(i, c)), S != null && p.unshift(Zr(i, S, x)))
          : l || ((S = Nr(i, c)), S != null && p.push(Zr(i, S, x)))),
        (i = i.return));
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var ly = /\r\n?/g,
    uy = /\u0000|\uFFFD/g;
  function Kc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ly,
        `
`,
      )
      .replace(uy, "");
  }
  function to(e, t, i) {
    if (((t = Kc(t)), Kc(e) !== t && i)) throw Error(o(425));
  }
  function no() {}
  var ea = null,
    ta = null;
  function na(e, t) {
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
  var ra = typeof setTimeout == "function" ? setTimeout : void 0,
    cy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Gc = typeof Promise == "function" ? Promise : void 0,
    fy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Gc < "u"
          ? function (e) {
              return Gc.resolve(null).then(e).catch(dy);
            }
          : ra;
  function dy(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ia(e, t) {
    var i = t,
      s = 0;
    do {
      var l = i.nextSibling;
      if ((e.removeChild(i), l && l.nodeType === 8))
        if (((i = l.data), i === "/$")) {
          if (s === 0) {
            (e.removeChild(l), Ur(t));
            return;
          }
          s--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || s++;
      i = l;
    } while (i);
    Ur(t);
  }
  function un(e) {
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
  function Xc(e) {
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
  var rr = Math.random().toString(36).slice(2),
    bt = "__reactFiber$" + rr,
    Jr = "__reactProps$" + rr,
    Kt = "__reactContainer$" + rr,
    oa = "__reactEvents$" + rr,
    hy = "__reactListeners$" + rr,
    py = "__reactHandles$" + rr;
  function Vn(e) {
    var t = e[bt];
    if (t) return t;
    for (var i = e.parentNode; i;) {
      if ((t = i[Kt] || i[bt])) {
        if (((i = t.alternate), t.child !== null || (i !== null && i.child !== null)))
          for (e = Xc(e); e !== null;) {
            if ((i = e[bt])) return i;
            e = Xc(e);
          }
        return t;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function ei(e) {
    return (
      (e = e[bt] || e[Kt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function ir(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ro(e) {
    return e[Jr] || null;
  }
  var sa = [],
    or = -1;
  function cn(e) {
    return { current: e };
  }
  function Ee(e) {
    0 > or || ((e.current = sa[or]), (sa[or] = null), or--);
  }
  function Ce(e, t) {
    (or++, (sa[or] = e.current), (e.current = t));
  }
  var fn = {},
    Ze = cn(fn),
    at = cn(!1),
    Ln = fn;
  function sr(e, t) {
    var i = e.type.contextTypes;
    if (!i) return fn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
      return s.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      c;
    for (c in i) l[c] = t[c];
    return (
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function lt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function io() {
    (Ee(at), Ee(Ze));
  }
  function Qc(e, t, i) {
    if (Ze.current !== fn) throw Error(o(168));
    (Ce(Ze, t), Ce(at, i));
  }
  function Yc(e, t, i) {
    var s = e.stateNode;
    if (((t = t.childContextTypes), typeof s.getChildContext != "function")) return i;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(o(108, Te(e) || "Unknown", l));
    return U({}, i, s);
  }
  function oo(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fn),
      (Ln = Ze.current),
      Ce(Ze, e),
      Ce(at, at.current),
      !0
    );
  }
  function qc(e, t, i) {
    var s = e.stateNode;
    if (!s) throw Error(o(169));
    (i
      ? ((e = Yc(e, t, Ln)),
        (s.__reactInternalMemoizedMergedChildContext = e),
        Ee(at),
        Ee(Ze),
        Ce(Ze, e))
      : Ee(at),
      Ce(at, i));
  }
  var Gt = null,
    so = !1,
    aa = !1;
  function Zc(e) {
    Gt === null ? (Gt = [e]) : Gt.push(e);
  }
  function my(e) {
    ((so = !0), Zc(e));
  }
  function dn() {
    if (!aa && Gt !== null) {
      aa = !0;
      var e = 0,
        t = ve;
      try {
        var i = Gt;
        for (ve = 1; e < i.length; e++) {
          var s = i[e];
          do s = s(!0);
          while (s !== null);
        }
        ((Gt = null), (so = !1));
      } catch (l) {
        throw (Gt !== null && (Gt = Gt.slice(e + 1)), ec(Rs, dn), l);
      } finally {
        ((ve = t), (aa = !1));
      }
    }
    return null;
  }
  var ar = [],
    lr = 0,
    ao = null,
    lo = 0,
    xt = [],
    wt = 0,
    Dn = null,
    Xt = 1,
    Qt = "";
  function Nn(e, t) {
    ((ar[lr++] = lo), (ar[lr++] = ao), (ao = e), (lo = t));
  }
  function Jc(e, t, i) {
    ((xt[wt++] = Xt), (xt[wt++] = Qt), (xt[wt++] = Dn), (Dn = e));
    var s = Xt;
    e = Qt;
    var l = 32 - Mt(s) - 1;
    ((s &= ~(1 << l)), (i += 1));
    var c = 32 - Mt(t) + l;
    if (30 < c) {
      var p = l - (l % 5);
      ((c = (s & ((1 << p) - 1)).toString(32)),
        (s >>= p),
        (l -= p),
        (Xt = (1 << (32 - Mt(t) + l)) | (i << l) | s),
        (Qt = c + e));
    } else ((Xt = (1 << c) | (i << l) | s), (Qt = e));
  }
  function la(e) {
    e.return !== null && (Nn(e, 1), Jc(e, 1, 0));
  }
  function ua(e) {
    for (; e === ao;) ((ao = ar[--lr]), (ar[lr] = null), (lo = ar[--lr]), (ar[lr] = null));
    for (; e === Dn;)
      ((Dn = xt[--wt]),
        (xt[wt] = null),
        (Qt = xt[--wt]),
        (xt[wt] = null),
        (Xt = xt[--wt]),
        (xt[wt] = null));
  }
  var mt = null,
    gt = null,
    Ve = !1,
    Rt = null;
  function ef(e, t) {
    var i = Ct(5, null, null, 0);
    ((i.elementType = "DELETED"),
      (i.stateNode = t),
      (i.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i));
  }
  function tf(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (mt = e), (gt = un(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (mt = e), (gt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((i = Dn !== null ? { id: Xt, overflow: Qt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }),
              (i = Ct(18, null, null, 0)),
              (i.stateNode = t),
              (i.return = e),
              (e.child = i),
              (mt = e),
              (gt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ca(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function fa(e) {
    if (Ve) {
      var t = gt;
      if (t) {
        var i = t;
        if (!tf(e, t)) {
          if (ca(e)) throw Error(o(418));
          t = un(i.nextSibling);
          var s = mt;
          t && tf(e, t) ? ef(s, i) : ((e.flags = (e.flags & -4097) | 2), (Ve = !1), (mt = e));
        }
      } else {
        if (ca(e)) throw Error(o(418));
        ((e.flags = (e.flags & -4097) | 2), (Ve = !1), (mt = e));
      }
    }
  }
  function nf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    mt = e;
  }
  function uo(e) {
    if (e !== mt) return !1;
    if (!Ve) return (nf(e), (Ve = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !na(e.type, e.memoizedProps))),
      t && (t = gt))
    ) {
      if (ca(e)) throw (rf(), Error(o(418)));
      for (; t;) (ef(e, t), (t = un(t.nextSibling)));
    }
    if ((nf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (t === 0) {
                gt = un(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        gt = null;
      }
    } else gt = mt ? un(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rf() {
    for (var e = gt; e;) e = un(e.nextSibling);
  }
  function ur() {
    ((gt = mt = null), (Ve = !1));
  }
  function da(e) {
    Rt === null ? (Rt = [e]) : Rt.push(e);
  }
  var gy = B.ReactCurrentBatchConfig;
  function ti(e, t, i) {
    if (((e = i.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(o(309));
          var s = i.stateNode;
        }
        if (!s) throw Error(o(147, e));
        var l = s,
          c = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c
          ? t.ref
          : ((t = function (p) {
              var x = l.refs;
              p === null ? delete x[c] : (x[c] = p);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!i._owner) throw Error(o(290, e));
    }
    return e;
  }
  function co(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function of(e) {
    var t = e._init;
    return t(e._payload);
  }
  function sf(e) {
    function t(C, k) {
      if (e) {
        var E = C.deletions;
        E === null ? ((C.deletions = [k]), (C.flags |= 16)) : E.push(k);
      }
    }
    function i(C, k) {
      if (!e) return null;
      for (; k !== null;) (t(C, k), (k = k.sibling));
      return null;
    }
    function s(C, k) {
      for (C = new Map(); k !== null;)
        (k.key !== null ? C.set(k.key, k) : C.set(k.index, k), (k = k.sibling));
      return C;
    }
    function l(C, k) {
      return ((C = wn(C, k)), (C.index = 0), (C.sibling = null), C);
    }
    function c(C, k, E) {
      return (
        (C.index = E),
        e
          ? ((E = C.alternate),
            E !== null ? ((E = E.index), E < k ? ((C.flags |= 2), k) : E) : ((C.flags |= 2), k))
          : ((C.flags |= 1048576), k)
      );
    }
    function p(C) {
      return (e && C.alternate === null && (C.flags |= 2), C);
    }
    function x(C, k, E, F) {
      return k === null || k.tag !== 6
        ? ((k = rl(E, C.mode, F)), (k.return = C), k)
        : ((k = l(k, E)), (k.return = C), k);
    }
    function S(C, k, E, F) {
      var Q = E.type;
      return Q === ie
        ? I(C, k, E.props.children, F, E.key)
        : k !== null &&
            (k.elementType === Q ||
              (typeof Q == "object" && Q !== null && Q.$$typeof === ge && of(Q) === k.type))
          ? ((F = l(k, E.props)), (F.ref = ti(C, k, E)), (F.return = C), F)
          : ((F = Io(E.type, E.key, E.props, null, C.mode, F)),
            (F.ref = ti(C, k, E)),
            (F.return = C),
            F);
    }
    function M(C, k, E, F) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== E.containerInfo ||
        k.stateNode.implementation !== E.implementation
        ? ((k = il(E, C.mode, F)), (k.return = C), k)
        : ((k = l(k, E.children || [])), (k.return = C), k);
    }
    function I(C, k, E, F, Q) {
      return k === null || k.tag !== 7
        ? ((k = Bn(E, C.mode, F, Q)), (k.return = C), k)
        : ((k = l(k, E)), (k.return = C), k);
    }
    function _(C, k, E) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((k = rl("" + k, C.mode, E)), (k.return = C), k);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Y:
            return (
              (E = Io(k.type, k.key, k.props, null, C.mode, E)),
              (E.ref = ti(C, null, k)),
              (E.return = C),
              E
            );
          case oe:
            return ((k = il(k, C.mode, E)), (k.return = C), k);
          case ge:
            var F = k._init;
            return _(C, F(k._payload), E);
        }
        if (Vr(k) || H(k)) return ((k = Bn(k, C.mode, E, null)), (k.return = C), k);
        co(C, k);
      }
      return null;
    }
    function j(C, k, E, F) {
      var Q = k !== null ? k.key : null;
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return Q !== null ? null : x(C, k, "" + E, F);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Y:
            return E.key === Q ? S(C, k, E, F) : null;
          case oe:
            return E.key === Q ? M(C, k, E, F) : null;
          case ge:
            return ((Q = E._init), j(C, k, Q(E._payload), F));
        }
        if (Vr(E) || H(E)) return Q !== null ? null : I(C, k, E, F, null);
        co(C, E);
      }
      return null;
    }
    function W(C, k, E, F, Q) {
      if ((typeof F == "string" && F !== "") || typeof F == "number")
        return ((C = C.get(E) || null), x(k, C, "" + F, Q));
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Y:
            return ((C = C.get(F.key === null ? E : F.key) || null), S(k, C, F, Q));
          case oe:
            return ((C = C.get(F.key === null ? E : F.key) || null), M(k, C, F, Q));
          case ge:
            var ee = F._init;
            return W(C, k, E, ee(F._payload), Q);
        }
        if (Vr(F) || H(F)) return ((C = C.get(E) || null), I(k, C, F, Q, null));
        co(k, F);
      }
      return null;
    }
    function K(C, k, E, F) {
      for (
        var Q = null, ee = null, te = k, re = (k = 0), $e = null;
        te !== null && re < E.length;
        re++
      ) {
        te.index > re ? (($e = te), (te = null)) : ($e = te.sibling);
        var pe = j(C, te, E[re], F);
        if (pe === null) {
          te === null && (te = $e);
          break;
        }
        (e && te && pe.alternate === null && t(C, te),
          (k = c(pe, k, re)),
          ee === null ? (Q = pe) : (ee.sibling = pe),
          (ee = pe),
          (te = $e));
      }
      if (re === E.length) return (i(C, te), Ve && Nn(C, re), Q);
      if (te === null) {
        for (; re < E.length; re++)
          ((te = _(C, E[re], F)),
            te !== null &&
              ((k = c(te, k, re)), ee === null ? (Q = te) : (ee.sibling = te), (ee = te)));
        return (Ve && Nn(C, re), Q);
      }
      for (te = s(C, te); re < E.length; re++)
        (($e = W(te, C, re, E[re], F)),
          $e !== null &&
            (e && $e.alternate !== null && te.delete($e.key === null ? re : $e.key),
            (k = c($e, k, re)),
            ee === null ? (Q = $e) : (ee.sibling = $e),
            (ee = $e)));
      return (
        e &&
          te.forEach(function (Sn) {
            return t(C, Sn);
          }),
        Ve && Nn(C, re),
        Q
      );
    }
    function X(C, k, E, F) {
      var Q = H(E);
      if (typeof Q != "function") throw Error(o(150));
      if (((E = Q.call(E)), E == null)) throw Error(o(151));
      for (
        var ee = (Q = null), te = k, re = (k = 0), $e = null, pe = E.next();
        te !== null && !pe.done;
        re++, pe = E.next()
      ) {
        te.index > re ? (($e = te), (te = null)) : ($e = te.sibling);
        var Sn = j(C, te, pe.value, F);
        if (Sn === null) {
          te === null && (te = $e);
          break;
        }
        (e && te && Sn.alternate === null && t(C, te),
          (k = c(Sn, k, re)),
          ee === null ? (Q = Sn) : (ee.sibling = Sn),
          (ee = Sn),
          (te = $e));
      }
      if (pe.done) return (i(C, te), Ve && Nn(C, re), Q);
      if (te === null) {
        for (; !pe.done; re++, pe = E.next())
          ((pe = _(C, pe.value, F)),
            pe !== null &&
              ((k = c(pe, k, re)), ee === null ? (Q = pe) : (ee.sibling = pe), (ee = pe)));
        return (Ve && Nn(C, re), Q);
      }
      for (te = s(C, te); !pe.done; re++, pe = E.next())
        ((pe = W(te, C, re, pe.value, F)),
          pe !== null &&
            (e && pe.alternate !== null && te.delete(pe.key === null ? re : pe.key),
            (k = c(pe, k, re)),
            ee === null ? (Q = pe) : (ee.sibling = pe),
            (ee = pe)));
      return (
        e &&
          te.forEach(function (Qy) {
            return t(C, Qy);
          }),
        Ve && Nn(C, re),
        Q
      );
    }
    function ze(C, k, E, F) {
      if (
        (typeof E == "object" &&
          E !== null &&
          E.type === ie &&
          E.key === null &&
          (E = E.props.children),
        typeof E == "object" && E !== null)
      ) {
        switch (E.$$typeof) {
          case Y:
            e: {
              for (var Q = E.key, ee = k; ee !== null;) {
                if (ee.key === Q) {
                  if (((Q = E.type), Q === ie)) {
                    if (ee.tag === 7) {
                      (i(C, ee.sibling), (k = l(ee, E.props.children)), (k.return = C), (C = k));
                      break e;
                    }
                  } else if (
                    ee.elementType === Q ||
                    (typeof Q == "object" && Q !== null && Q.$$typeof === ge && of(Q) === ee.type)
                  ) {
                    (i(C, ee.sibling),
                      (k = l(ee, E.props)),
                      (k.ref = ti(C, ee, E)),
                      (k.return = C),
                      (C = k));
                    break e;
                  }
                  i(C, ee);
                  break;
                } else t(C, ee);
                ee = ee.sibling;
              }
              E.type === ie
                ? ((k = Bn(E.props.children, C.mode, F, E.key)), (k.return = C), (C = k))
                : ((F = Io(E.type, E.key, E.props, null, C.mode, F)),
                  (F.ref = ti(C, k, E)),
                  (F.return = C),
                  (C = F));
            }
            return p(C);
          case oe:
            e: {
              for (ee = E.key; k !== null;) {
                if (k.key === ee)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === E.containerInfo &&
                    k.stateNode.implementation === E.implementation
                  ) {
                    (i(C, k.sibling), (k = l(k, E.children || [])), (k.return = C), (C = k));
                    break e;
                  } else {
                    i(C, k);
                    break;
                  }
                else t(C, k);
                k = k.sibling;
              }
              ((k = il(E, C.mode, F)), (k.return = C), (C = k));
            }
            return p(C);
          case ge:
            return ((ee = E._init), ze(C, k, ee(E._payload), F));
        }
        if (Vr(E)) return K(C, k, E, F);
        if (H(E)) return X(C, k, E, F);
        co(C, E);
      }
      return (typeof E == "string" && E !== "") || typeof E == "number"
        ? ((E = "" + E),
          k !== null && k.tag === 6
            ? (i(C, k.sibling), (k = l(k, E)), (k.return = C), (C = k))
            : (i(C, k), (k = rl(E, C.mode, F)), (k.return = C), (C = k)),
          p(C))
        : i(C, k);
    }
    return ze;
  }
  var cr = sf(!0),
    af = sf(!1),
    fo = cn(null),
    ho = null,
    fr = null,
    ha = null;
  function pa() {
    ha = fr = ho = null;
  }
  function ma(e) {
    var t = fo.current;
    (Ee(fo), (e._currentValue = t));
  }
  function ga(e, t, i) {
    for (; e !== null;) {
      var s = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
          : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function dr(e, t) {
    ((ho = e),
      (ha = fr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (ut = !0), (e.firstContext = null)));
  }
  function St(e) {
    var t = e._currentValue;
    if (ha !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), fr === null)) {
        if (ho === null) throw Error(o(308));
        ((fr = e), (ho.dependencies = { lanes: 0, firstContext: e }));
      } else fr = fr.next = e;
    return t;
  }
  var jn = null;
  function ya(e) {
    jn === null ? (jn = [e]) : jn.push(e);
  }
  function lf(e, t, i, s) {
    var l = t.interleaved;
    return (
      l === null ? ((i.next = i), ya(t)) : ((i.next = l.next), (l.next = i)),
      (t.interleaved = i),
      Yt(e, s)
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
  var hn = !1;
  function va(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function uf(e, t) {
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
  function qt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function pn(e, t, i) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (ce & 2) !== 0)) {
      var l = s.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (s.pending = t),
        Yt(e, i)
      );
    }
    return (
      (l = s.interleaved),
      l === null ? ((t.next = t), ya(s)) : ((t.next = l.next), (l.next = t)),
      (s.interleaved = t),
      Yt(e, i)
    );
  }
  function po(e, t, i) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))) {
      var s = t.lanes;
      ((s &= e.pendingLanes), (i |= s), (t.lanes = i), Ds(e, i));
    }
  }
  function cf(e, t) {
    var i = e.updateQueue,
      s = e.alternate;
    if (s !== null && ((s = s.updateQueue), i === s)) {
      var l = null,
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
          (c === null ? (l = c = p) : (c = c.next = p), (i = i.next));
        } while (i !== null);
        c === null ? (l = c = t) : (c = c.next = t);
      } else l = c = t;
      ((i = {
        baseState: s.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: c,
        shared: s.shared,
        effects: s.effects,
      }),
        (e.updateQueue = i));
      return;
    }
    ((e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = t) : (e.next = t),
      (i.lastBaseUpdate = t));
  }
  function mo(e, t, i, s) {
    var l = e.updateQueue;
    hn = !1;
    var c = l.firstBaseUpdate,
      p = l.lastBaseUpdate,
      x = l.shared.pending;
    if (x !== null) {
      l.shared.pending = null;
      var S = x,
        M = S.next;
      ((S.next = null), p === null ? (c = M) : (p.next = M), (p = S));
      var I = e.alternate;
      I !== null &&
        ((I = I.updateQueue),
        (x = I.lastBaseUpdate),
        x !== p && (x === null ? (I.firstBaseUpdate = M) : (x.next = M), (I.lastBaseUpdate = S)));
    }
    if (c !== null) {
      var _ = l.baseState;
      ((p = 0), (I = M = S = null), (x = c));
      do {
        var j = x.lane,
          W = x.eventTime;
        if ((s & j) === j) {
          I !== null &&
            (I = I.next =
              {
                eventTime: W,
                lane: 0,
                tag: x.tag,
                payload: x.payload,
                callback: x.callback,
                next: null,
              });
          e: {
            var K = e,
              X = x;
            switch (((j = t), (W = i), X.tag)) {
              case 1:
                if (((K = X.payload), typeof K == "function")) {
                  _ = K.call(W, _, j);
                  break e;
                }
                _ = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = X.payload), (j = typeof K == "function" ? K.call(W, _, j) : K), j == null)
                )
                  break e;
                _ = U({}, _, j);
                break e;
              case 2:
                hn = !0;
            }
          }
          x.callback !== null &&
            x.lane !== 0 &&
            ((e.flags |= 64), (j = l.effects), j === null ? (l.effects = [x]) : j.push(x));
        } else
          ((W = {
            eventTime: W,
            lane: j,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            I === null ? ((M = I = W), (S = _)) : (I = I.next = W),
            (p |= j));
        if (((x = x.next), x === null)) {
          if (((x = l.shared.pending), x === null)) break;
          ((j = x),
            (x = j.next),
            (j.next = null),
            (l.lastBaseUpdate = j),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (I === null && (S = _),
        (l.baseState = S),
        (l.firstBaseUpdate = M),
        (l.lastBaseUpdate = I),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((p |= l.lane), (l = l.next));
        while (l !== t);
      } else c === null && (l.shared.lanes = 0);
      ((zn |= p), (e.lanes = p), (e.memoizedState = _));
    }
  }
  function ff(e, t, i) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var s = e[t],
          l = s.callback;
        if (l !== null) {
          if (((s.callback = null), (s = i), typeof l != "function")) throw Error(o(191, l));
          l.call(s);
        }
      }
  }
  var ni = {},
    Ft = cn(ni),
    ri = cn(ni),
    ii = cn(ni);
  function In(e) {
    if (e === ni) throw Error(o(174));
    return e;
  }
  function xa(e, t) {
    switch ((Ce(ii, t), Ce(ri, e), Ce(Ft, ni), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ws(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ws(t, e)));
    }
    (Ee(Ft), Ce(Ft, t));
  }
  function hr() {
    (Ee(Ft), Ee(ri), Ee(ii));
  }
  function df(e) {
    In(ii.current);
    var t = In(Ft.current),
      i = ws(t, e.type);
    t !== i && (Ce(ri, e), Ce(Ft, i));
  }
  function wa(e) {
    ri.current === e && (Ee(Ft), Ee(ri));
  }
  var De = cn(0);
  function go(e) {
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
  var Sa = [];
  function ka() {
    for (var e = 0; e < Sa.length; e++) Sa[e]._workInProgressVersionPrimary = null;
    Sa.length = 0;
  }
  var yo = B.ReactCurrentDispatcher,
    Ta = B.ReactCurrentBatchConfig,
    _n = 0,
    Ne = null,
    Oe = null,
    We = null,
    vo = !1,
    oi = !1,
    si = 0,
    yy = 0;
  function Je() {
    throw Error(o(321));
  }
  function Ca(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!At(e[i], t[i])) return !1;
    return !0;
  }
  function Pa(e, t, i, s, l, c) {
    if (
      ((_n = c),
      (Ne = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (yo.current = e === null || e.memoizedState === null ? Sy : ky),
      (e = i(s, l)),
      oi)
    ) {
      c = 0;
      do {
        if (((oi = !1), (si = 0), 25 <= c)) throw Error(o(301));
        ((c += 1), (We = Oe = null), (t.updateQueue = null), (yo.current = Ty), (e = i(s, l)));
      } while (oi);
    }
    if (
      ((yo.current = So),
      (t = Oe !== null && Oe.next !== null),
      (_n = 0),
      (We = Oe = Ne = null),
      (vo = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function Ea() {
    var e = si !== 0;
    return ((si = 0), e);
  }
  function Ot() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (We === null ? (Ne.memoizedState = We = e) : (We = We.next = e), We);
  }
  function kt() {
    if (Oe === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = We === null ? Ne.memoizedState : We.next;
    if (t !== null) ((We = t), (Oe = e));
    else {
      if (e === null) throw Error(o(310));
      ((Oe = e),
        (e = {
          memoizedState: Oe.memoizedState,
          baseState: Oe.baseState,
          baseQueue: Oe.baseQueue,
          queue: Oe.queue,
          next: null,
        }),
        We === null ? (Ne.memoizedState = We = e) : (We = We.next = e));
    }
    return We;
  }
  function ai(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ma(e) {
    var t = kt(),
      i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var s = Oe,
      l = s.baseQueue,
      c = i.pending;
    if (c !== null) {
      if (l !== null) {
        var p = l.next;
        ((l.next = c.next), (c.next = p));
      }
      ((s.baseQueue = l = c), (i.pending = null));
    }
    if (l !== null) {
      ((c = l.next), (s = s.baseState));
      var x = (p = null),
        S = null,
        M = c;
      do {
        var I = M.lane;
        if ((_n & I) === I)
          (S !== null &&
            (S = S.next =
              {
                lane: 0,
                action: M.action,
                hasEagerState: M.hasEagerState,
                eagerState: M.eagerState,
                next: null,
              }),
            (s = M.hasEagerState ? M.eagerState : e(s, M.action)));
        else {
          var _ = {
            lane: I,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          };
          (S === null ? ((x = S = _), (p = s)) : (S = S.next = _), (Ne.lanes |= I), (zn |= I));
        }
        M = M.next;
      } while (M !== null && M !== c);
      (S === null ? (p = s) : (S.next = x),
        At(s, t.memoizedState) || (ut = !0),
        (t.memoizedState = s),
        (t.baseState = p),
        (t.baseQueue = S),
        (i.lastRenderedState = s));
    }
    if (((e = i.interleaved), e !== null)) {
      l = e;
      do ((c = l.lane), (Ne.lanes |= c), (zn |= c), (l = l.next));
      while (l !== e);
    } else l === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function Aa(e) {
    var t = kt(),
      i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var s = i.dispatch,
      l = i.pending,
      c = t.memoizedState;
    if (l !== null) {
      i.pending = null;
      var p = (l = l.next);
      do ((c = e(c, p.action)), (p = p.next));
      while (p !== l);
      (At(c, t.memoizedState) || (ut = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (i.lastRenderedState = c));
    }
    return [c, s];
  }
  function hf() {}
  function pf(e, t) {
    var i = Ne,
      s = kt(),
      l = t(),
      c = !At(s.memoizedState, l);
    if (
      (c && ((s.memoizedState = l), (ut = !0)),
      (s = s.queue),
      Ra(yf.bind(null, i, s, e), [e]),
      s.getSnapshot !== t || c || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (((i.flags |= 2048), li(9, gf.bind(null, i, s, l, t), void 0, null), He === null))
        throw Error(o(349));
      (_n & 30) !== 0 || mf(i, t, l);
    }
    return l;
  }
  function mf(e, t, i) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Ne.updateQueue = t), (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e)));
  }
  function gf(e, t, i, s) {
    ((t.value = i), (t.getSnapshot = s), vf(t) && xf(e));
  }
  function yf(e, t, i) {
    return i(function () {
      vf(t) && xf(e);
    });
  }
  function vf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !At(e, i);
    } catch {
      return !0;
    }
  }
  function xf(e) {
    var t = Yt(e, 1);
    t !== null && Nt(t, e, 1, -1);
  }
  function wf(e) {
    var t = Ot();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ai,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = wy.bind(null, Ne, e)),
      [t.memoizedState, e]
    );
  }
  function li(e, t, i, s) {
    return (
      (e = { tag: e, create: t, destroy: i, deps: s, next: null }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ne.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((i = t.lastEffect),
          i === null
            ? (t.lastEffect = e.next = e)
            : ((s = i.next), (i.next = e), (e.next = s), (t.lastEffect = e))),
      e
    );
  }
  function Sf() {
    return kt().memoizedState;
  }
  function xo(e, t, i, s) {
    var l = Ot();
    ((Ne.flags |= e), (l.memoizedState = li(1 | t, i, void 0, s === void 0 ? null : s)));
  }
  function wo(e, t, i, s) {
    var l = kt();
    s = s === void 0 ? null : s;
    var c = void 0;
    if (Oe !== null) {
      var p = Oe.memoizedState;
      if (((c = p.destroy), s !== null && Ca(s, p.deps))) {
        l.memoizedState = li(t, i, c, s);
        return;
      }
    }
    ((Ne.flags |= e), (l.memoizedState = li(1 | t, i, c, s)));
  }
  function kf(e, t) {
    return xo(8390656, 8, e, t);
  }
  function Ra(e, t) {
    return wo(2048, 8, e, t);
  }
  function Tf(e, t) {
    return wo(4, 2, e, t);
  }
  function Cf(e, t) {
    return wo(4, 4, e, t);
  }
  function Pf(e, t) {
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
  function Ef(e, t, i) {
    return ((i = i != null ? i.concat([e]) : null), wo(4, 4, Pf.bind(null, t, e), i));
  }
  function Va() {}
  function Mf(e, t) {
    var i = kt();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && Ca(t, s[1]) ? s[0] : ((i.memoizedState = [e, t]), e);
  }
  function Af(e, t) {
    var i = kt();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && Ca(t, s[1])
      ? s[0]
      : ((e = e()), (i.memoizedState = [e, t]), e);
  }
  function Rf(e, t, i) {
    return (_n & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = i))
      : (At(i, t) || ((i = ic()), (Ne.lanes |= i), (zn |= i), (e.baseState = !0)), t);
  }
  function vy(e, t) {
    var i = ve;
    ((ve = i !== 0 && 4 > i ? i : 4), e(!0));
    var s = Ta.transition;
    Ta.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ve = i), (Ta.transition = s));
    }
  }
  function Vf() {
    return kt().memoizedState;
  }
  function xy(e, t, i) {
    var s = vn(e);
    if (((i = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null }), Lf(e)))
      Df(t, i);
    else if (((i = lf(e, t, i, s)), i !== null)) {
      var l = it();
      (Nt(i, e, s, l), Nf(i, t, s));
    }
  }
  function wy(e, t, i) {
    var s = vn(e),
      l = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (Lf(e)) Df(t, l);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var p = t.lastRenderedState,
            x = c(p, i);
          if (((l.hasEagerState = !0), (l.eagerState = x), At(x, p))) {
            var S = t.interleaved;
            (S === null ? ((l.next = l), ya(t)) : ((l.next = S.next), (S.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((i = lf(e, t, l, s)), i !== null && ((l = it()), Nt(i, e, s, l), Nf(i, t, s)));
    }
  }
  function Lf(e) {
    var t = e.alternate;
    return e === Ne || (t !== null && t === Ne);
  }
  function Df(e, t) {
    oi = vo = !0;
    var i = e.pending;
    (i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (e.pending = t));
  }
  function Nf(e, t, i) {
    if ((i & 4194240) !== 0) {
      var s = t.lanes;
      ((s &= e.pendingLanes), (i |= s), (t.lanes = i), Ds(e, i));
    }
  }
  var So = {
      readContext: St,
      useCallback: Je,
      useContext: Je,
      useEffect: Je,
      useImperativeHandle: Je,
      useInsertionEffect: Je,
      useLayoutEffect: Je,
      useMemo: Je,
      useReducer: Je,
      useRef: Je,
      useState: Je,
      useDebugValue: Je,
      useDeferredValue: Je,
      useTransition: Je,
      useMutableSource: Je,
      useSyncExternalStore: Je,
      useId: Je,
      unstable_isNewReconciler: !1,
    },
    Sy = {
      readContext: St,
      useCallback: function (e, t) {
        return ((Ot().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: St,
      useEffect: kf,
      useImperativeHandle: function (e, t, i) {
        return ((i = i != null ? i.concat([e]) : null), xo(4194308, 4, Pf.bind(null, t, e), i));
      },
      useLayoutEffect: function (e, t) {
        return xo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return xo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = Ot();
        return ((t = t === void 0 ? null : t), (e = e()), (i.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, i) {
        var s = Ot();
        return (
          (t = i !== void 0 ? i(t) : t),
          (s.memoizedState = s.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (s.queue = e),
          (e = e.dispatch = xy.bind(null, Ne, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ot();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: wf,
      useDebugValue: Va,
      useDeferredValue: function (e) {
        return (Ot().memoizedState = e);
      },
      useTransition: function () {
        var e = wf(!1),
          t = e[0];
        return ((e = vy.bind(null, e[1])), (Ot().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, i) {
        var s = Ne,
          l = Ot();
        if (Ve) {
          if (i === void 0) throw Error(o(407));
          i = i();
        } else {
          if (((i = t()), He === null)) throw Error(o(349));
          (_n & 30) !== 0 || mf(s, t, i);
        }
        l.memoizedState = i;
        var c = { value: i, getSnapshot: t };
        return (
          (l.queue = c),
          kf(yf.bind(null, s, c, e), [e]),
          (s.flags |= 2048),
          li(9, gf.bind(null, s, c, i, t), void 0, null),
          i
        );
      },
      useId: function () {
        var e = Ot(),
          t = He.identifierPrefix;
        if (Ve) {
          var i = Qt,
            s = Xt;
          ((i = (s & ~(1 << (32 - Mt(s) - 1))).toString(32) + i),
            (t = ":" + t + "R" + i),
            (i = si++),
            0 < i && (t += "H" + i.toString(32)),
            (t += ":"));
        } else ((i = yy++), (t = ":" + t + "r" + i.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ky = {
      readContext: St,
      useCallback: Mf,
      useContext: St,
      useEffect: Ra,
      useImperativeHandle: Ef,
      useInsertionEffect: Tf,
      useLayoutEffect: Cf,
      useMemo: Af,
      useReducer: Ma,
      useRef: Sf,
      useState: function () {
        return Ma(ai);
      },
      useDebugValue: Va,
      useDeferredValue: function (e) {
        var t = kt();
        return Rf(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = Ma(ai)[0],
          t = kt().memoizedState;
        return [e, t];
      },
      useMutableSource: hf,
      useSyncExternalStore: pf,
      useId: Vf,
      unstable_isNewReconciler: !1,
    },
    Ty = {
      readContext: St,
      useCallback: Mf,
      useContext: St,
      useEffect: Ra,
      useImperativeHandle: Ef,
      useInsertionEffect: Tf,
      useLayoutEffect: Cf,
      useMemo: Af,
      useReducer: Aa,
      useRef: Sf,
      useState: function () {
        return Aa(ai);
      },
      useDebugValue: Va,
      useDeferredValue: function (e) {
        var t = kt();
        return Oe === null ? (t.memoizedState = e) : Rf(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = Aa(ai)[0],
          t = kt().memoizedState;
        return [e, t];
      },
      useMutableSource: hf,
      useSyncExternalStore: pf,
      useId: Vf,
      unstable_isNewReconciler: !1,
    };
  function Vt(e, t) {
    if (e && e.defaultProps) {
      ((t = U({}, t)), (e = e.defaultProps));
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function La(e, t, i, s) {
    ((t = e.memoizedState),
      (i = i(s, t)),
      (i = i == null ? t : U({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var ko = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Rn(e) === e : !1;
    },
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var s = it(),
        l = vn(e),
        c = qt(s, l);
      ((c.payload = t),
        i != null && (c.callback = i),
        (t = pn(e, c, l)),
        t !== null && (Nt(t, e, l, s), po(t, e, l)));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var s = it(),
        l = vn(e),
        c = qt(s, l);
      ((c.tag = 1),
        (c.payload = t),
        i != null && (c.callback = i),
        (t = pn(e, c, l)),
        t !== null && (Nt(t, e, l, s), po(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = it(),
        s = vn(e),
        l = qt(i, s);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = pn(e, l, s)),
        t !== null && (Nt(t, e, s, i), po(t, e, s)));
    },
  };
  function jf(e, t, i, s, l, c, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(s, c, p)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Xr(i, s) || !Xr(l, c)
          : !0
    );
  }
  function If(e, t, i) {
    var s = !1,
      l = fn,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = St(c))
        : ((l = lt(t) ? Ln : Ze.current),
          (s = t.contextTypes),
          (c = (s = s != null) ? sr(e, l) : fn)),
      (t = new t(i, c)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ko),
      (e.stateNode = t),
      (t._reactInternals = e),
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function _f(e, t, i, s) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, s),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(i, s),
      t.state !== e && ko.enqueueReplaceState(t, t.state, null));
  }
  function Da(e, t, i, s) {
    var l = e.stateNode;
    ((l.props = i), (l.state = e.memoizedState), (l.refs = {}), va(e));
    var c = t.contextType;
    (typeof c == "object" && c !== null
      ? (l.context = St(c))
      : ((c = lt(t) ? Ln : Ze.current), (l.context = sr(e, c))),
      (l.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && (La(e, t, c, i), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && ko.enqueueReplaceState(l, l.state, null),
        mo(e, i, l, s),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function pr(e, t) {
    try {
      var i = "",
        s = t;
      do ((i += de(s)), (s = s.return));
      while (s);
      var l = i;
    } catch (c) {
      l =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Na(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function ja(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var Cy = typeof WeakMap == "function" ? WeakMap : Map;
  function zf(e, t, i) {
    ((i = qt(-1, i)), (i.tag = 3), (i.payload = { element: null }));
    var s = t.value;
    return (
      (i.callback = function () {
        (Ro || ((Ro = !0), (Qa = s)), ja(e, t));
      }),
      i
    );
  }
  function bf(e, t, i) {
    ((i = qt(-1, i)), (i.tag = 3));
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      ((i.payload = function () {
        return s(l);
      }),
        (i.callback = function () {
          ja(e, t);
        }));
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (i.callback = function () {
          (ja(e, t),
            typeof s != "function" && (gn === null ? (gn = new Set([this])) : gn.add(this)));
          var p = t.stack;
          this.componentDidCatch(t.value, { componentStack: p !== null ? p : "" });
        }),
      i
    );
  }
  function Ff(e, t, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Cy();
      var l = new Set();
      s.set(t, l);
    } else ((l = s.get(t)), l === void 0 && ((l = new Set()), s.set(t, l)));
    l.has(i) || (l.add(i), (e = by.bind(null, e, t, i)), t.then(e, e));
  }
  function Of(e) {
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
  function Bf(e, t, i, s, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null ? (i.tag = 17) : ((t = qt(-1, 1)), (t.tag = 2), pn(i, t, 1))),
            (i.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Py = B.ReactCurrentOwner,
    ut = !1;
  function rt(e, t, i, s) {
    t.child = e === null ? af(t, null, i, s) : cr(t, e.child, i, s);
  }
  function Uf(e, t, i, s, l) {
    i = i.render;
    var c = t.ref;
    return (
      dr(t, l),
      (s = Pa(e, t, i, s, c, l)),
      (i = Ea()),
      e !== null && !ut
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Zt(e, t, l))
        : (Ve && i && la(t), (t.flags |= 1), rt(e, t, s, l), t.child)
    );
  }
  function Wf(e, t, i, s, l) {
    if (e === null) {
      var c = i.type;
      return typeof c == "function" &&
        !nl(c) &&
        c.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), Hf(e, t, c, s, l))
        : ((e = Io(i.type, null, s, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((c = e.child), (e.lanes & l) === 0)) {
      var p = c.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : Xr), i(p, s) && e.ref === t.ref))
        return Zt(e, t, l);
    }
    return ((t.flags |= 1), (e = wn(c, s)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Hf(e, t, i, s, l) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Xr(c, s) && e.ref === t.ref)
        if (((ut = !1), (t.pendingProps = s = c), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (ut = !0);
        else return ((t.lanes = e.lanes), Zt(e, t, l));
    }
    return Ia(e, t, i, s, l);
  }
  function $f(e, t, i) {
    var s = t.pendingProps,
      l = s.children,
      c = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Ce(gr, yt),
          (yt |= i));
      else {
        if ((i & 1073741824) === 0)
          return (
            (e = c !== null ? c.baseLanes | i : i),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Ce(gr, yt),
            (yt |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (s = c !== null ? c.baseLanes : i),
          Ce(gr, yt),
          (yt |= s));
      }
    else
      (c !== null ? ((s = c.baseLanes | i), (t.memoizedState = null)) : (s = i),
        Ce(gr, yt),
        (yt |= s));
    return (rt(e, t, l, i), t.child);
  }
  function Kf(e, t) {
    var i = t.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ia(e, t, i, s, l) {
    var c = lt(i) ? Ln : Ze.current;
    return (
      (c = sr(t, c)),
      dr(t, l),
      (i = Pa(e, t, i, s, c, l)),
      (s = Ea()),
      e !== null && !ut
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Zt(e, t, l))
        : (Ve && s && la(t), (t.flags |= 1), rt(e, t, i, l), t.child)
    );
  }
  function Gf(e, t, i, s, l) {
    if (lt(i)) {
      var c = !0;
      oo(t);
    } else c = !1;
    if ((dr(t, l), t.stateNode === null)) (Co(e, t), If(t, i, s), Da(t, i, s, l), (s = !0));
    else if (e === null) {
      var p = t.stateNode,
        x = t.memoizedProps;
      p.props = x;
      var S = p.context,
        M = i.contextType;
      typeof M == "object" && M !== null
        ? (M = St(M))
        : ((M = lt(i) ? Ln : Ze.current), (M = sr(t, M)));
      var I = i.getDerivedStateFromProps,
        _ = typeof I == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      (_ ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((x !== s || S !== M) && _f(t, p, s, M)),
        (hn = !1));
      var j = t.memoizedState;
      ((p.state = j),
        mo(t, s, p, l),
        (S = t.memoizedState),
        x !== s || j !== S || at.current || hn
          ? (typeof I == "function" && (La(t, i, I, s), (S = t.memoizedState)),
            (x = hn || jf(t, i, x, s, j, S, M))
              ? (_ ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" && p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = S)),
            (p.props = s),
            (p.state = S),
            (p.context = M),
            (s = x))
          : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), (s = !1)));
    } else {
      ((p = t.stateNode),
        uf(e, t),
        (x = t.memoizedProps),
        (M = t.type === t.elementType ? x : Vt(t.type, x)),
        (p.props = M),
        (_ = t.pendingProps),
        (j = p.context),
        (S = i.contextType),
        typeof S == "object" && S !== null
          ? (S = St(S))
          : ((S = lt(i) ? Ln : Ze.current), (S = sr(t, S))));
      var W = i.getDerivedStateFromProps;
      ((I = typeof W == "function" || typeof p.getSnapshotBeforeUpdate == "function") ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((x !== _ || j !== S) && _f(t, p, s, S)),
        (hn = !1),
        (j = t.memoizedState),
        (p.state = j),
        mo(t, s, p, l));
      var K = t.memoizedState;
      x !== _ || j !== K || at.current || hn
        ? (typeof W == "function" && (La(t, i, W, s), (K = t.memoizedState)),
          (M = hn || jf(t, i, M, s, j, K, S) || !1)
            ? (I ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(s, K, S),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(s, K, S)),
              typeof p.componentDidUpdate == "function" && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (x === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (x === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = K)),
          (p.props = s),
          (p.state = K),
          (p.context = S),
          (s = M))
        : (typeof p.componentDidUpdate != "function" ||
            (x === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (x === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return _a(e, t, i, s, c, l);
  }
  function _a(e, t, i, s, l, c) {
    Kf(e, t);
    var p = (t.flags & 128) !== 0;
    if (!s && !p) return (l && qc(t, i, !1), Zt(e, t, c));
    ((s = t.stateNode), (Py.current = t));
    var x = p && typeof i.getDerivedStateFromError != "function" ? null : s.render();
    return (
      (t.flags |= 1),
      e !== null && p
        ? ((t.child = cr(t, e.child, null, c)), (t.child = cr(t, null, x, c)))
        : rt(e, t, x, c),
      (t.memoizedState = s.state),
      l && qc(t, i, !0),
      t.child
    );
  }
  function Xf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Qc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Qc(e, t.context, !1),
      xa(e, t.containerInfo));
  }
  function Qf(e, t, i, s, l) {
    return (ur(), da(l), (t.flags |= 256), rt(e, t, i, s), t.child);
  }
  var za = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ba(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Yf(e, t, i) {
    var s = t.pendingProps,
      l = De.current,
      c = !1,
      p = (t.flags & 128) !== 0,
      x;
    if (
      ((x = p) || (x = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      x ? ((c = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      Ce(De, l & 1),
      e === null)
    )
      return (
        fa(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((p = s.children),
            (e = s.fallback),
            c
              ? ((s = t.mode),
                (c = t.child),
                (p = { mode: "hidden", children: p }),
                (s & 1) === 0 && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = p))
                  : (c = _o(p, s, 0, null)),
                (e = Bn(e, s, i, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = ba(i)),
                (t.memoizedState = za),
                e)
              : Fa(t, p))
      );
    if (((l = e.memoizedState), l !== null && ((x = l.dehydrated), x !== null)))
      return Ey(e, t, p, s, x, l, i);
    if (c) {
      ((c = s.fallback), (p = t.mode), (l = e.child), (x = l.sibling));
      var S = { mode: "hidden", children: s.children };
      return (
        (p & 1) === 0 && t.child !== l
          ? ((s = t.child), (s.childLanes = 0), (s.pendingProps = S), (t.deletions = null))
          : ((s = wn(l, S)), (s.subtreeFlags = l.subtreeFlags & 14680064)),
        x !== null ? (c = wn(x, c)) : ((c = Bn(c, p, i, null)), (c.flags |= 2)),
        (c.return = t),
        (s.return = t),
        (s.sibling = c),
        (t.child = s),
        (s = c),
        (c = t.child),
        (p = e.child.memoizedState),
        (p =
          p === null
            ? ba(i)
            : { baseLanes: p.baseLanes | i, cachePool: null, transitions: p.transitions }),
        (c.memoizedState = p),
        (c.childLanes = e.childLanes & ~i),
        (t.memoizedState = za),
        s
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (s = wn(c, { mode: "visible", children: s.children })),
      (t.mode & 1) === 0 && (s.lanes = i),
      (s.return = t),
      (s.sibling = null),
      e !== null &&
        ((i = t.deletions), i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
      (t.child = s),
      (t.memoizedState = null),
      s
    );
  }
  function Fa(e, t) {
    return (
      (t = _o({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function To(e, t, i, s) {
    return (
      s !== null && da(s),
      cr(t, e.child, null, i),
      (e = Fa(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ey(e, t, i, s, l, c, p) {
    if (i)
      return t.flags & 256
        ? ((t.flags &= -257), (s = Na(Error(o(422)))), To(e, t, p, s))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((c = s.fallback),
            (l = t.mode),
            (s = _o({ mode: "visible", children: s.children }, l, 0, null)),
            (c = Bn(c, l, p, null)),
            (c.flags |= 2),
            (s.return = t),
            (c.return = t),
            (s.sibling = c),
            (t.child = s),
            (t.mode & 1) !== 0 && cr(t, e.child, null, p),
            (t.child.memoizedState = ba(p)),
            (t.memoizedState = za),
            c);
    if ((t.mode & 1) === 0) return To(e, t, p, null);
    if (l.data === "$!") {
      if (((s = l.nextSibling && l.nextSibling.dataset), s)) var x = s.dgst;
      return ((s = x), (c = Error(o(419))), (s = Na(c, s, void 0)), To(e, t, p, s));
    }
    if (((x = (p & e.childLanes) !== 0), ut || x)) {
      if (((s = He), s !== null)) {
        switch (p & -p) {
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
        ((l = (l & (s.suspendedLanes | p)) !== 0 ? 0 : l),
          l !== 0 && l !== c.retryLane && ((c.retryLane = l), Yt(e, l), Nt(s, e, l, -1)));
      }
      return (tl(), (s = Na(Error(o(421)))), To(e, t, p, s));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Fy.bind(null, e)), (l._reactRetry = t), null)
      : ((e = c.treeContext),
        (gt = un(l.nextSibling)),
        (mt = t),
        (Ve = !0),
        (Rt = null),
        e !== null &&
          ((xt[wt++] = Xt),
          (xt[wt++] = Qt),
          (xt[wt++] = Dn),
          (Xt = e.id),
          (Qt = e.overflow),
          (Dn = t)),
        (t = Fa(t, s.children)),
        (t.flags |= 4096),
        t);
  }
  function qf(e, t, i) {
    e.lanes |= t;
    var s = e.alternate;
    (s !== null && (s.lanes |= t), ga(e.return, t, i));
  }
  function Oa(e, t, i, s, l) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: i,
          tailMode: l,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = s),
        (c.tail = i),
        (c.tailMode = l));
  }
  function Zf(e, t, i) {
    var s = t.pendingProps,
      l = s.revealOrder,
      c = s.tail;
    if ((rt(e, t, s.children, i), (s = De.current), (s & 2) !== 0))
      ((s = (s & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && qf(e, i, t);
          else if (e.tag === 19) qf(e, i, t);
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
      s &= 1;
    }
    if ((Ce(De, s), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (i = t.child, l = null; i !== null;)
            ((e = i.alternate), e !== null && go(e) === null && (l = i), (i = i.sibling));
          ((i = l),
            i === null ? ((l = t.child), (t.child = null)) : ((l = i.sibling), (i.sibling = null)),
            Oa(t, !1, l, i, c));
          break;
        case "backwards":
          for (i = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && go(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = i), (i = l), (l = e));
          }
          Oa(t, !0, i, null, c);
          break;
        case "together":
          Oa(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Co(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Zt(e, t, i) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (zn |= t.lanes), (i & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, i = wn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null;)
        ((e = e.sibling), (i = i.sibling = wn(e, e.pendingProps)), (i.return = t));
      i.sibling = null;
    }
    return t.child;
  }
  function My(e, t, i) {
    switch (t.tag) {
      case 3:
        (Xf(t), ur());
        break;
      case 5:
        df(t);
        break;
      case 1:
        lt(t.type) && oo(t);
        break;
      case 4:
        xa(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context,
          l = t.memoizedProps.value;
        (Ce(fo, s._currentValue), (s._currentValue = l));
        break;
      case 13:
        if (((s = t.memoizedState), s !== null))
          return s.dehydrated !== null
            ? (Ce(De, De.current & 1), (t.flags |= 128), null)
            : (i & t.child.childLanes) !== 0
              ? Yf(e, t, i)
              : (Ce(De, De.current & 1), (e = Zt(e, t, i)), e !== null ? e.sibling : null);
        Ce(De, De.current & 1);
        break;
      case 19:
        if (((s = (i & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (s) return Zf(e, t, i);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Ce(De, De.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), $f(e, t, i));
    }
    return Zt(e, t, i);
  }
  var Jf, Ba, ed, td;
  ((Jf = function (e, t) {
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
    (Ba = function () {}),
    (ed = function (e, t, i, s) {
      var l = e.memoizedProps;
      if (l !== s) {
        ((e = t.stateNode), In(Ft.current));
        var c = null;
        switch (i) {
          case "input":
            ((l = gs(e, l)), (s = gs(e, s)), (c = []));
            break;
          case "select":
            ((l = U({}, l, { value: void 0 })), (s = U({}, s, { value: void 0 })), (c = []));
            break;
          case "textarea":
            ((l = xs(e, l)), (s = xs(e, s)), (c = []));
            break;
          default:
            typeof l.onClick != "function" && typeof s.onClick == "function" && (e.onclick = no);
        }
        Ss(i, s);
        var p;
        i = null;
        for (M in l)
          if (!s.hasOwnProperty(M) && l.hasOwnProperty(M) && l[M] != null)
            if (M === "style") {
              var x = l[M];
              for (p in x) x.hasOwnProperty(p) && (i || (i = {}), (i[p] = ""));
            } else
              M !== "dangerouslySetInnerHTML" &&
                M !== "children" &&
                M !== "suppressContentEditableWarning" &&
                M !== "suppressHydrationWarning" &&
                M !== "autoFocus" &&
                (u.hasOwnProperty(M) ? c || (c = []) : (c = c || []).push(M, null));
        for (M in s) {
          var S = s[M];
          if (
            ((x = l != null ? l[M] : void 0),
            s.hasOwnProperty(M) && S !== x && (S != null || x != null))
          )
            if (M === "style")
              if (x) {
                for (p in x)
                  !x.hasOwnProperty(p) ||
                    (S && S.hasOwnProperty(p)) ||
                    (i || (i = {}), (i[p] = ""));
                for (p in S) S.hasOwnProperty(p) && x[p] !== S[p] && (i || (i = {}), (i[p] = S[p]));
              } else (i || (c || (c = []), c.push(M, i)), (i = S));
            else
              M === "dangerouslySetInnerHTML"
                ? ((S = S ? S.__html : void 0),
                  (x = x ? x.__html : void 0),
                  S != null && x !== S && (c = c || []).push(M, S))
                : M === "children"
                  ? (typeof S != "string" && typeof S != "number") || (c = c || []).push(M, "" + S)
                  : M !== "suppressContentEditableWarning" &&
                    M !== "suppressHydrationWarning" &&
                    (u.hasOwnProperty(M)
                      ? (S != null && M === "onScroll" && Pe("scroll", e), c || x === S || (c = []))
                      : (c = c || []).push(M, S));
        }
        i && (c = c || []).push("style", i);
        var M = c;
        (t.updateQueue = M) && (t.flags |= 4);
      }
    }),
    (td = function (e, t, i, s) {
      i !== s && (t.flags |= 4);
    }));
  function ui(e, t) {
    if (!Ve)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var i = null; t !== null;) (t.alternate !== null && (i = t), (t = t.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var s = null; i !== null;) (i.alternate !== null && (s = i), (i = i.sibling));
          s === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function et(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      s = 0;
    if (t)
      for (var l = e.child; l !== null;)
        ((i |= l.lanes | l.childLanes),
          (s |= l.subtreeFlags & 14680064),
          (s |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null;)
        ((i |= l.lanes | l.childLanes),
          (s |= l.subtreeFlags),
          (s |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= s), (e.childLanes = i), t);
  }
  function Ay(e, t, i) {
    var s = t.pendingProps;
    switch ((ua(t), t.tag)) {
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
        return (et(t), null);
      case 1:
        return (lt(t.type) && io(), et(t), null);
      case 3:
        return (
          (s = t.stateNode),
          hr(),
          Ee(at),
          Ee(Ze),
          ka(),
          s.pendingContext && ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (uo(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Rt !== null && (Za(Rt), (Rt = null)))),
          Ba(e, t),
          et(t),
          null
        );
      case 5:
        wa(t);
        var l = In(ii.current);
        if (((i = t.type), e !== null && t.stateNode != null))
          (ed(e, t, i, s, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return (et(t), null);
          }
          if (((e = In(Ft.current)), uo(t))) {
            ((s = t.stateNode), (i = t.type));
            var c = t.memoizedProps;
            switch (((s[bt] = t), (s[Jr] = c), (e = (t.mode & 1) !== 0), i)) {
              case "dialog":
                (Pe("cancel", s), Pe("close", s));
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Yr.length; l++) Pe(Yr[l], s);
                break;
              case "source":
                Pe("error", s);
                break;
              case "img":
              case "image":
              case "link":
                (Pe("error", s), Pe("load", s));
                break;
              case "details":
                Pe("toggle", s);
                break;
              case "input":
                (ju(s, c), Pe("invalid", s));
                break;
              case "select":
                ((s._wrapperState = { wasMultiple: !!c.multiple }), Pe("invalid", s));
                break;
              case "textarea":
                (zu(s, c), Pe("invalid", s));
            }
            (Ss(i, c), (l = null));
            for (var p in c)
              if (c.hasOwnProperty(p)) {
                var x = c[p];
                p === "children"
                  ? typeof x == "string"
                    ? s.textContent !== x &&
                      (c.suppressHydrationWarning !== !0 && to(s.textContent, x, e),
                      (l = ["children", x]))
                    : typeof x == "number" &&
                      s.textContent !== "" + x &&
                      (c.suppressHydrationWarning !== !0 && to(s.textContent, x, e),
                      (l = ["children", "" + x]))
                  : u.hasOwnProperty(p) && x != null && p === "onScroll" && Pe("scroll", s);
              }
            switch (i) {
              case "input":
                (Di(s), _u(s, c, !0));
                break;
              case "textarea":
                (Di(s), Fu(s));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (s.onclick = no);
            }
            ((s = l), (t.updateQueue = s), s !== null && (t.flags |= 4));
          } else {
            ((p = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ou(i)),
              e === "http://www.w3.org/1999/xhtml"
                ? i === "script"
                  ? ((e = p.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof s.is == "string"
                    ? (e = p.createElement(i, { is: s.is }))
                    : ((e = p.createElement(i)),
                      i === "select" &&
                        ((p = e), s.multiple ? (p.multiple = !0) : s.size && (p.size = s.size)))
                : (e = p.createElementNS(e, i)),
              (e[bt] = t),
              (e[Jr] = s),
              Jf(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((p = ks(i, s)), i)) {
                case "dialog":
                  (Pe("cancel", e), Pe("close", e), (l = s));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Pe("load", e), (l = s));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Yr.length; l++) Pe(Yr[l], e);
                  l = s;
                  break;
                case "source":
                  (Pe("error", e), (l = s));
                  break;
                case "img":
                case "image":
                case "link":
                  (Pe("error", e), Pe("load", e), (l = s));
                  break;
                case "details":
                  (Pe("toggle", e), (l = s));
                  break;
                case "input":
                  (ju(e, s), (l = gs(e, s)), Pe("invalid", e));
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!s.multiple }),
                    (l = U({}, s, { value: void 0 })),
                    Pe("invalid", e));
                  break;
                case "textarea":
                  (zu(e, s), (l = xs(e, s)), Pe("invalid", e));
                  break;
                default:
                  l = s;
              }
              (Ss(i, l), (x = l));
              for (c in x)
                if (x.hasOwnProperty(c)) {
                  var S = x[c];
                  c === "style"
                    ? Wu(e, S)
                    : c === "dangerouslySetInnerHTML"
                      ? ((S = S ? S.__html : void 0), S != null && Bu(e, S))
                      : c === "children"
                        ? typeof S == "string"
                          ? (i !== "textarea" || S !== "") && Lr(e, S)
                          : typeof S == "number" && Lr(e, "" + S)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          c !== "autoFocus" &&
                          (u.hasOwnProperty(c)
                            ? S != null && c === "onScroll" && Pe("scroll", e)
                            : S != null && O(e, c, S, p));
                }
              switch (i) {
                case "input":
                  (Di(e), _u(e, s, !1));
                  break;
                case "textarea":
                  (Di(e), Fu(e));
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + ye(s.value));
                  break;
                case "select":
                  ((e.multiple = !!s.multiple),
                    (c = s.value),
                    c != null
                      ? Xn(e, !!s.multiple, c, !1)
                      : s.defaultValue != null && Xn(e, !!s.multiple, s.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = no);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (et(t), null);
      case 6:
        if (e && t.stateNode != null) td(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
          if (((i = In(ii.current)), In(Ft.current), uo(t))) {
            if (
              ((s = t.stateNode),
              (i = t.memoizedProps),
              (s[bt] = t),
              (c = s.nodeValue !== i) && ((e = mt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  to(s.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    to(s.nodeValue, i, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            ((s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s)),
              (s[bt] = t),
              (t.stateNode = s));
        }
        return (et(t), null);
      case 13:
        if (
          (Ee(De),
          (s = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ve && gt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (rf(), ur(), (t.flags |= 98560), (c = !1));
          else if (((c = uo(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(o(318));
              if (((c = t.memoizedState), (c = c !== null ? c.dehydrated : null), !c))
                throw Error(o(317));
              c[bt] = t;
            } else (ur(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (et(t), (c = !1));
          } else (Rt !== null && (Za(Rt), (Rt = null)), (c = !0));
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = i), t)
          : ((s = s !== null),
            s !== (e !== null && e.memoizedState !== null) &&
              s &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (De.current & 1) !== 0 ? Be === 0 && (Be = 3) : tl())),
            t.updateQueue !== null && (t.flags |= 4),
            et(t),
            null);
      case 4:
        return (hr(), Ba(e, t), e === null && qr(t.stateNode.containerInfo), et(t), null);
      case 10:
        return (ma(t.type._context), et(t), null);
      case 17:
        return (lt(t.type) && io(), et(t), null);
      case 19:
        if ((Ee(De), (c = t.memoizedState), c === null)) return (et(t), null);
        if (((s = (t.flags & 128) !== 0), (p = c.rendering), p === null))
          if (s) ui(c, !1);
          else {
            if (Be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((p = go(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      ui(c, !1),
                      s = p.updateQueue,
                      s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      s = i,
                      i = t.child;
                    i !== null;
                  )
                    ((c = i),
                      (e = s),
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
                  return (Ce(De, (De.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            c.tail !== null &&
              _e() > yr &&
              ((t.flags |= 128), (s = !0), ui(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = go(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (i = e.updateQueue),
                i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                ui(c, !0),
                c.tail === null && c.tailMode === "hidden" && !p.alternate && !Ve)
              )
                return (et(t), null);
            } else
              2 * _e() - c.renderingStartTime > yr &&
                i !== 1073741824 &&
                ((t.flags |= 128), (s = !0), ui(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((i = c.last), i !== null ? (i.sibling = p) : (t.child = p), (c.last = p));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = _e()),
            (t.sibling = null),
            (i = De.current),
            Ce(De, s ? (i & 1) | 2 : i & 1),
            t)
          : (et(t), null);
      case 22:
      case 23:
        return (
          el(),
          (s = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
          s && (t.mode & 1) !== 0
            ? (yt & 1073741824) !== 0 && (et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : et(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Ry(e, t) {
    switch ((ua(t), t.tag)) {
      case 1:
        return (
          lt(t.type) && io(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          hr(),
          Ee(at),
          Ee(Ze),
          ka(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (wa(t), null);
      case 13:
        if ((Ee(De), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(o(340));
          ur();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Ee(De), null);
      case 4:
        return (hr(), null);
      case 10:
        return (ma(t.type._context), null);
      case 22:
      case 23:
        return (el(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Po = !1,
    tt = !1,
    Vy = typeof WeakSet == "function" ? WeakSet : Set,
    $ = null;
  function mr(e, t) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (s) {
          je(e, t, s);
        }
      else i.current = null;
  }
  function Ua(e, t, i) {
    try {
      i();
    } catch (s) {
      je(e, t, s);
    }
  }
  var nd = !1;
  function Ly(e, t) {
    if (((ea = Hi), (e = Nc()), Ks(e))) {
      if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var s = i.getSelection && i.getSelection();
          if (s && s.rangeCount !== 0) {
            i = s.anchorNode;
            var l = s.anchorOffset,
              c = s.focusNode;
            s = s.focusOffset;
            try {
              (i.nodeType, c.nodeType);
            } catch {
              i = null;
              break e;
            }
            var p = 0,
              x = -1,
              S = -1,
              M = 0,
              I = 0,
              _ = e,
              j = null;
            t: for (;;) {
              for (
                var W;
                _ !== i || (l !== 0 && _.nodeType !== 3) || (x = p + l),
                  _ !== c || (s !== 0 && _.nodeType !== 3) || (S = p + s),
                  _.nodeType === 3 && (p += _.nodeValue.length),
                  (W = _.firstChild) !== null;
              )
                ((j = _), (_ = W));
              for (;;) {
                if (_ === e) break t;
                if (
                  (j === i && ++M === l && (x = p),
                  j === c && ++I === s && (S = p),
                  (W = _.nextSibling) !== null)
                )
                  break;
                ((_ = j), (j = _.parentNode));
              }
              _ = W;
            }
            i = x === -1 || S === -1 ? null : { start: x, end: S };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (ta = { focusedElem: e, selectionRange: i }, Hi = !1, $ = t; $ !== null;)
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
                    var X = K.memoizedProps,
                      ze = K.memoizedState,
                      C = t.stateNode,
                      k = C.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? X : Vt(t.type, X),
                        ze,
                      );
                    C.__reactInternalSnapshotBeforeUpdate = k;
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
                  throw Error(o(163));
              }
          } catch (F) {
            je(t, t.return, F);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), ($ = e));
            break;
          }
          $ = t.return;
        }
    return ((K = nd), (nd = !1), K);
  }
  function ci(e, t, i) {
    var s = t.updateQueue;
    if (((s = s !== null ? s.lastEffect : null), s !== null)) {
      var l = (s = s.next);
      do {
        if ((l.tag & e) === e) {
          var c = l.destroy;
          ((l.destroy = void 0), c !== void 0 && Ua(t, i, c));
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function Eo(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var i = (t = t.next);
      do {
        if ((i.tag & e) === e) {
          var s = i.create;
          i.destroy = s();
        }
        i = i.next;
      } while (i !== t);
    }
  }
  function Wa(e) {
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
  function rd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), rd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[bt], delete t[Jr], delete t[oa], delete t[hy], delete t[py])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function id(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function od(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || id(e.return)) return null;
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
  function Ha(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6)
      ((e = e.stateNode),
        t
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, t)
            : i.insertBefore(e, t)
          : (i.nodeType === 8
              ? ((t = i.parentNode), t.insertBefore(e, i))
              : ((t = i), t.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = no)));
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Ha(e, t, i), e = e.sibling; e !== null;) (Ha(e, t, i), (e = e.sibling));
  }
  function $a(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) ((e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e));
    else if (s !== 4 && ((e = e.child), e !== null))
      for ($a(e, t, i), e = e.sibling; e !== null;) ($a(e, t, i), (e = e.sibling));
  }
  var Ge = null,
    Lt = !1;
  function mn(e, t, i) {
    for (i = i.child; i !== null;) (sd(e, t, i), (i = i.sibling));
  }
  function sd(e, t, i) {
    if (zt && typeof zt.onCommitFiberUnmount == "function")
      try {
        zt.onCommitFiberUnmount(bi, i);
      } catch {}
    switch (i.tag) {
      case 5:
        tt || mr(i, t);
      case 6:
        var s = Ge,
          l = Lt;
        ((Ge = null),
          mn(e, t, i),
          (Ge = s),
          (Lt = l),
          Ge !== null &&
            (Lt
              ? ((e = Ge),
                (i = i.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
              : Ge.removeChild(i.stateNode)));
        break;
      case 18:
        Ge !== null &&
          (Lt
            ? ((e = Ge),
              (i = i.stateNode),
              e.nodeType === 8 ? ia(e.parentNode, i) : e.nodeType === 1 && ia(e, i),
              Ur(e))
            : ia(Ge, i.stateNode));
        break;
      case 4:
        ((s = Ge),
          (l = Lt),
          (Ge = i.stateNode.containerInfo),
          (Lt = !0),
          mn(e, t, i),
          (Ge = s),
          (Lt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!tt && ((s = i.updateQueue), s !== null && ((s = s.lastEffect), s !== null))) {
          l = s = s.next;
          do {
            var c = l,
              p = c.destroy;
            ((c = c.tag),
              p !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && Ua(i, t, p),
              (l = l.next));
          } while (l !== s);
        }
        mn(e, t, i);
        break;
      case 1:
        if (!tt && (mr(i, t), (s = i.stateNode), typeof s.componentWillUnmount == "function"))
          try {
            ((s.props = i.memoizedProps), (s.state = i.memoizedState), s.componentWillUnmount());
          } catch (x) {
            je(i, t, x);
          }
        mn(e, t, i);
        break;
      case 21:
        mn(e, t, i);
        break;
      case 22:
        i.mode & 1
          ? ((tt = (s = tt) || i.memoizedState !== null), mn(e, t, i), (tt = s))
          : mn(e, t, i);
        break;
      default:
        mn(e, t, i);
    }
  }
  function ad(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      (i === null && (i = e.stateNode = new Vy()),
        t.forEach(function (s) {
          var l = Oy.bind(null, e, s);
          i.has(s) || (i.add(s), s.then(l, l));
        }));
    }
  }
  function Dt(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var s = 0; s < i.length; s++) {
        var l = i[s];
        try {
          var c = e,
            p = t,
            x = p;
          e: for (; x !== null;) {
            switch (x.tag) {
              case 5:
                ((Ge = x.stateNode), (Lt = !1));
                break e;
              case 3:
                ((Ge = x.stateNode.containerInfo), (Lt = !0));
                break e;
              case 4:
                ((Ge = x.stateNode.containerInfo), (Lt = !0));
                break e;
            }
            x = x.return;
          }
          if (Ge === null) throw Error(o(160));
          (sd(c, p, l), (Ge = null), (Lt = !1));
          var S = l.alternate;
          (S !== null && (S.return = null), (l.return = null));
        } catch (M) {
          je(l, t, M);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (ld(t, e), (t = t.sibling));
  }
  function ld(e, t) {
    var i = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Dt(t, e), Bt(e), s & 4)) {
          try {
            (ci(3, e, e.return), Eo(3, e));
          } catch (X) {
            je(e, e.return, X);
          }
          try {
            ci(5, e, e.return);
          } catch (X) {
            je(e, e.return, X);
          }
        }
        break;
      case 1:
        (Dt(t, e), Bt(e), s & 512 && i !== null && mr(i, i.return));
        break;
      case 5:
        if ((Dt(t, e), Bt(e), s & 512 && i !== null && mr(i, i.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Lr(l, "");
          } catch (X) {
            je(e, e.return, X);
          }
        }
        if (s & 4 && ((l = e.stateNode), l != null)) {
          var c = e.memoizedProps,
            p = i !== null ? i.memoizedProps : c,
            x = e.type,
            S = e.updateQueue;
          if (((e.updateQueue = null), S !== null))
            try {
              (x === "input" && c.type === "radio" && c.name != null && Iu(l, c), ks(x, p));
              var M = ks(x, c);
              for (p = 0; p < S.length; p += 2) {
                var I = S[p],
                  _ = S[p + 1];
                I === "style"
                  ? Wu(l, _)
                  : I === "dangerouslySetInnerHTML"
                    ? Bu(l, _)
                    : I === "children"
                      ? Lr(l, _)
                      : O(l, I, _, M);
              }
              switch (x) {
                case "input":
                  ys(l, c);
                  break;
                case "textarea":
                  bu(l, c);
                  break;
                case "select":
                  var j = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!c.multiple;
                  var W = c.value;
                  W != null
                    ? Xn(l, !!c.multiple, W, !1)
                    : j !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Xn(l, !!c.multiple, c.defaultValue, !0)
                        : Xn(l, !!c.multiple, c.multiple ? [] : "", !1));
              }
              l[Jr] = c;
            } catch (X) {
              je(e, e.return, X);
            }
        }
        break;
      case 6:
        if ((Dt(t, e), Bt(e), s & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((l = e.stateNode), (c = e.memoizedProps));
          try {
            l.nodeValue = c;
          } catch (X) {
            je(e, e.return, X);
          }
        }
        break;
      case 3:
        if ((Dt(t, e), Bt(e), s & 4 && i !== null && i.memoizedState.isDehydrated))
          try {
            Ur(t.containerInfo);
          } catch (X) {
            je(e, e.return, X);
          }
        break;
      case 4:
        (Dt(t, e), Bt(e));
        break;
      case 13:
        (Dt(t, e),
          Bt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((c = l.memoizedState !== null),
            (l.stateNode.isHidden = c),
            !c || (l.alternate !== null && l.alternate.memoizedState !== null) || (Xa = _e())),
          s & 4 && ad(e));
        break;
      case 22:
        if (
          ((I = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((tt = (M = tt) || I), Dt(t, e), (tt = M)) : Dt(t, e),
          Bt(e),
          s & 8192)
        ) {
          if (
            ((M = e.memoizedState !== null), (e.stateNode.isHidden = M) && !I && (e.mode & 1) !== 0)
          )
            for ($ = e, I = e.child; I !== null;) {
              for (_ = $ = I; $ !== null;) {
                switch (((j = $), (W = j.child), j.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ci(4, j, j.return);
                    break;
                  case 1:
                    mr(j, j.return);
                    var K = j.stateNode;
                    if (typeof K.componentWillUnmount == "function") {
                      ((s = j), (i = j.return));
                      try {
                        ((t = s),
                          (K.props = t.memoizedProps),
                          (K.state = t.memoizedState),
                          K.componentWillUnmount());
                      } catch (X) {
                        je(s, i, X);
                      }
                    }
                    break;
                  case 5:
                    mr(j, j.return);
                    break;
                  case 22:
                    if (j.memoizedState !== null) {
                      fd(_);
                      continue;
                    }
                }
                W !== null ? ((W.return = j), ($ = W)) : fd(_);
              }
              I = I.sibling;
            }
          e: for (I = null, _ = e; ;) {
            if (_.tag === 5) {
              if (I === null) {
                I = _;
                try {
                  ((l = _.stateNode),
                    M
                      ? ((c = l.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((x = _.stateNode),
                        (S = _.memoizedProps.style),
                        (p = S != null && S.hasOwnProperty("display") ? S.display : null),
                        (x.style.display = Uu("display", p))));
                } catch (X) {
                  je(e, e.return, X);
                }
              }
            } else if (_.tag === 6) {
              if (I === null)
                try {
                  _.stateNode.nodeValue = M ? "" : _.memoizedProps;
                } catch (X) {
                  je(e, e.return, X);
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
              (I === _ && (I = null), (_ = _.return));
            }
            (I === _ && (I = null), (_.sibling.return = _.return), (_ = _.sibling));
          }
        }
        break;
      case 19:
        (Dt(t, e), Bt(e), s & 4 && ad(e));
        break;
      case 21:
        break;
      default:
        (Dt(t, e), Bt(e));
    }
  }
  function Bt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var i = e.return; i !== null;) {
            if (id(i)) {
              var s = i;
              break e;
            }
            i = i.return;
          }
          throw Error(o(160));
        }
        switch (s.tag) {
          case 5:
            var l = s.stateNode;
            s.flags & 32 && (Lr(l, ""), (s.flags &= -33));
            var c = od(e);
            $a(e, c, l);
            break;
          case 3:
          case 4:
            var p = s.stateNode.containerInfo,
              x = od(e);
            Ha(e, x, p);
            break;
          default:
            throw Error(o(161));
        }
      } catch (S) {
        je(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Dy(e, t, i) {
    (($ = e), ud(e));
  }
  function ud(e, t, i) {
    for (var s = (e.mode & 1) !== 0; $ !== null;) {
      var l = $,
        c = l.child;
      if (l.tag === 22 && s) {
        var p = l.memoizedState !== null || Po;
        if (!p) {
          var x = l.alternate,
            S = (x !== null && x.memoizedState !== null) || tt;
          x = Po;
          var M = tt;
          if (((Po = p), (tt = S) && !M))
            for ($ = l; $ !== null;)
              ((p = $),
                (S = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? dd(l)
                  : S !== null
                    ? ((S.return = p), ($ = S))
                    : dd(l));
          for (; c !== null;) (($ = c), ud(c), (c = c.sibling));
          (($ = l), (Po = x), (tt = M));
        }
        cd(e);
      } else (l.subtreeFlags & 8772) !== 0 && c !== null ? ((c.return = l), ($ = c)) : cd(e);
    }
  }
  function cd(e) {
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
                tt || Eo(5, t);
                break;
              case 1:
                var s = t.stateNode;
                if (t.flags & 4 && !tt)
                  if (i === null) s.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? i.memoizedProps : Vt(t.type, i.memoizedProps);
                    s.componentDidUpdate(l, i.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var c = t.updateQueue;
                c !== null && ff(t, c, s);
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
                  ff(t, p, i);
                }
                break;
              case 5:
                var x = t.stateNode;
                if (i === null && t.flags & 4) {
                  i = x;
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
                  var M = t.alternate;
                  if (M !== null) {
                    var I = M.memoizedState;
                    if (I !== null) {
                      var _ = I.dehydrated;
                      _ !== null && Ur(_);
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
                throw Error(o(163));
            }
          tt || (t.flags & 512 && Wa(t));
        } catch (j) {
          je(t, t.return, j);
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
  function fd(e) {
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
  function dd(e) {
    for (; $ !== null;) {
      var t = $;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              Eo(4, t);
            } catch (S) {
              je(t, i, S);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var l = t.return;
              try {
                s.componentDidMount();
              } catch (S) {
                je(t, l, S);
              }
            }
            var c = t.return;
            try {
              Wa(t);
            } catch (S) {
              je(t, c, S);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Wa(t);
            } catch (S) {
              je(t, p, S);
            }
        }
      } catch (S) {
        je(t, t.return, S);
      }
      if (t === e) {
        $ = null;
        break;
      }
      var x = t.sibling;
      if (x !== null) {
        ((x.return = t.return), ($ = x));
        break;
      }
      $ = t.return;
    }
  }
  var Ny = Math.ceil,
    Mo = B.ReactCurrentDispatcher,
    Ka = B.ReactCurrentOwner,
    Tt = B.ReactCurrentBatchConfig,
    ce = 0,
    He = null,
    be = null,
    Xe = 0,
    yt = 0,
    gr = cn(0),
    Be = 0,
    fi = null,
    zn = 0,
    Ao = 0,
    Ga = 0,
    di = null,
    ct = null,
    Xa = 0,
    yr = 1 / 0,
    Jt = null,
    Ro = !1,
    Qa = null,
    gn = null,
    Vo = !1,
    yn = null,
    Lo = 0,
    hi = 0,
    Ya = null,
    Do = -1,
    No = 0;
  function it() {
    return (ce & 6) !== 0 ? _e() : Do !== -1 ? Do : (Do = _e());
  }
  function vn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ce & 2) !== 0 && Xe !== 0
        ? Xe & -Xe
        : gy.transition !== null
          ? (No === 0 && (No = ic()), No)
          : ((e = ve), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : hc(e.type))), e);
  }
  function Nt(e, t, i, s) {
    if (50 < hi) throw ((hi = 0), (Ya = null), Error(o(185)));
    (zr(e, i, s),
      ((ce & 2) === 0 || e !== He) &&
        (e === He && ((ce & 2) === 0 && (Ao |= i), Be === 4 && xn(e, Xe)),
        ft(e, s),
        i === 1 && ce === 0 && (t.mode & 1) === 0 && ((yr = _e() + 500), so && dn())));
  }
  function ft(e, t) {
    var i = e.callbackNode;
    gg(e, t);
    var s = Bi(e, e === He ? Xe : 0);
    if (s === 0) (i !== null && tc(i), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = s & -s), e.callbackPriority !== t)) {
      if ((i != null && tc(i), t === 1))
        (e.tag === 0 ? my(pd.bind(null, e)) : Zc(pd.bind(null, e)),
          fy(function () {
            (ce & 6) === 0 && dn();
          }),
          (i = null));
      else {
        switch (oc(s)) {
          case 1:
            i = Rs;
            break;
          case 4:
            i = nc;
            break;
          case 16:
            i = zi;
            break;
          case 536870912:
            i = rc;
            break;
          default:
            i = zi;
        }
        i = kd(i, hd.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = i));
    }
  }
  function hd(e, t) {
    if (((Do = -1), (No = 0), (ce & 6) !== 0)) throw Error(o(327));
    var i = e.callbackNode;
    if (vr() && e.callbackNode !== i) return null;
    var s = Bi(e, e === He ? Xe : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = jo(e, s);
    else {
      t = s;
      var l = ce;
      ce |= 2;
      var c = gd();
      (He !== e || Xe !== t) && ((Jt = null), (yr = _e() + 500), Fn(e, t));
      do
        try {
          _y();
          break;
        } catch (x) {
          md(e, x);
        }
      while (!0);
      (pa(), (Mo.current = c), (ce = l), be !== null ? (t = 0) : ((He = null), (Xe = 0), (t = Be)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Vs(e)), l !== 0 && ((s = l), (t = qa(e, l)))), t === 1))
        throw ((i = fi), Fn(e, 0), xn(e, s), ft(e, _e()), i);
      if (t === 6) xn(e, s);
      else {
        if (
          ((l = e.current.alternate),
          (s & 30) === 0 &&
            !jy(l) &&
            ((t = jo(e, s)),
            t === 2 && ((c = Vs(e)), c !== 0 && ((s = c), (t = qa(e, c)))),
            t === 1))
        )
          throw ((i = fi), Fn(e, 0), xn(e, s), ft(e, _e()), i);
        switch (((e.finishedWork = l), (e.finishedLanes = s), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            On(e, ct, Jt);
            break;
          case 3:
            if ((xn(e, s), (s & 130023424) === s && ((t = Xa + 500 - _e()), 10 < t))) {
              if (Bi(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & s) !== s)) {
                (it(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = ra(On.bind(null, e, ct, Jt), t);
              break;
            }
            On(e, ct, Jt);
            break;
          case 4:
            if ((xn(e, s), (s & 4194240) === s)) break;
            for (t = e.eventTimes, l = -1; 0 < s;) {
              var p = 31 - Mt(s);
              ((c = 1 << p), (p = t[p]), p > l && (l = p), (s &= ~c));
            }
            if (
              ((s = l),
              (s = _e() - s),
              (s =
                (120 > s
                  ? 120
                  : 480 > s
                    ? 480
                    : 1080 > s
                      ? 1080
                      : 1920 > s
                        ? 1920
                        : 3e3 > s
                          ? 3e3
                          : 4320 > s
                            ? 4320
                            : 1960 * Ny(s / 1960)) - s),
              10 < s)
            ) {
              e.timeoutHandle = ra(On.bind(null, e, ct, Jt), s);
              break;
            }
            On(e, ct, Jt);
            break;
          case 5:
            On(e, ct, Jt);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return (ft(e, _e()), e.callbackNode === i ? hd.bind(null, e) : null);
  }
  function qa(e, t) {
    var i = di;
    return (
      e.current.memoizedState.isDehydrated && (Fn(e, t).flags |= 256),
      (e = jo(e, t)),
      e !== 2 && ((t = ct), (ct = i), t !== null && Za(t)),
      e
    );
  }
  function Za(e) {
    ct === null ? (ct = e) : ct.push.apply(ct, e);
  }
  function jy(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var s = 0; s < i.length; s++) {
            var l = i[s],
              c = l.getSnapshot;
            l = l.value;
            try {
              if (!At(c(), l)) return !1;
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
  function xn(e, t) {
    for (
      t &= ~Ga, t &= ~Ao, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var i = 31 - Mt(t),
        s = 1 << i;
      ((e[i] = -1), (t &= ~s));
    }
  }
  function pd(e) {
    if ((ce & 6) !== 0) throw Error(o(327));
    vr();
    var t = Bi(e, 0);
    if ((t & 1) === 0) return (ft(e, _e()), null);
    var i = jo(e, t);
    if (e.tag !== 0 && i === 2) {
      var s = Vs(e);
      s !== 0 && ((t = s), (i = qa(e, s)));
    }
    if (i === 1) throw ((i = fi), Fn(e, 0), xn(e, t), ft(e, _e()), i);
    if (i === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      On(e, ct, Jt),
      ft(e, _e()),
      null
    );
  }
  function Ja(e, t) {
    var i = ce;
    ce |= 1;
    try {
      return e(t);
    } finally {
      ((ce = i), ce === 0 && ((yr = _e() + 500), so && dn()));
    }
  }
  function bn(e) {
    yn !== null && yn.tag === 0 && (ce & 6) === 0 && vr();
    var t = ce;
    ce |= 1;
    var i = Tt.transition,
      s = ve;
    try {
      if (((Tt.transition = null), (ve = 1), e)) return e();
    } finally {
      ((ve = s), (Tt.transition = i), (ce = t), (ce & 6) === 0 && dn());
    }
  }
  function el() {
    ((yt = gr.current), Ee(gr));
  }
  function Fn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), cy(i)), be !== null))
      for (i = be.return; i !== null;) {
        var s = i;
        switch ((ua(s), s.tag)) {
          case 1:
            ((s = s.type.childContextTypes), s != null && io());
            break;
          case 3:
            (hr(), Ee(at), Ee(Ze), ka());
            break;
          case 5:
            wa(s);
            break;
          case 4:
            hr();
            break;
          case 13:
            Ee(De);
            break;
          case 19:
            Ee(De);
            break;
          case 10:
            ma(s.type._context);
            break;
          case 22:
          case 23:
            el();
        }
        i = i.return;
      }
    if (
      ((He = e),
      (be = e = wn(e.current, null)),
      (Xe = yt = t),
      (Be = 0),
      (fi = null),
      (Ga = Ao = zn = 0),
      (ct = di = null),
      jn !== null)
    ) {
      for (t = 0; t < jn.length; t++)
        if (((i = jn[t]), (s = i.interleaved), s !== null)) {
          i.interleaved = null;
          var l = s.next,
            c = i.pending;
          if (c !== null) {
            var p = c.next;
            ((c.next = l), (s.next = p));
          }
          i.pending = s;
        }
      jn = null;
    }
    return e;
  }
  function md(e, t) {
    do {
      var i = be;
      try {
        if ((pa(), (yo.current = So), vo)) {
          for (var s = Ne.memoizedState; s !== null;) {
            var l = s.queue;
            (l !== null && (l.pending = null), (s = s.next));
          }
          vo = !1;
        }
        if (
          ((_n = 0),
          (We = Oe = Ne = null),
          (oi = !1),
          (si = 0),
          (Ka.current = null),
          i === null || i.return === null)
        ) {
          ((Be = 1), (fi = t), (be = null));
          break;
        }
        e: {
          var c = e,
            p = i.return,
            x = i,
            S = t;
          if (
            ((t = Xe),
            (x.flags |= 32768),
            S !== null && typeof S == "object" && typeof S.then == "function")
          ) {
            var M = S,
              I = x,
              _ = I.tag;
            if ((I.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var j = I.alternate;
              j
                ? ((I.updateQueue = j.updateQueue),
                  (I.memoizedState = j.memoizedState),
                  (I.lanes = j.lanes))
                : ((I.updateQueue = null), (I.memoizedState = null));
            }
            var W = Of(p);
            if (W !== null) {
              ((W.flags &= -257), Bf(W, p, x, c, t), W.mode & 1 && Ff(c, M, t), (t = W), (S = M));
              var K = t.updateQueue;
              if (K === null) {
                var X = new Set();
                (X.add(S), (t.updateQueue = X));
              } else K.add(S);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Ff(c, M, t), tl());
                break e;
              }
              S = Error(o(426));
            }
          } else if (Ve && x.mode & 1) {
            var ze = Of(p);
            if (ze !== null) {
              ((ze.flags & 65536) === 0 && (ze.flags |= 256), Bf(ze, p, x, c, t), da(pr(S, x)));
              break e;
            }
          }
          ((c = S = pr(S, x)),
            Be !== 4 && (Be = 2),
            di === null ? (di = [c]) : di.push(c),
            (c = p));
          do {
            switch (c.tag) {
              case 3:
                ((c.flags |= 65536), (t &= -t), (c.lanes |= t));
                var C = zf(c, S, t);
                cf(c, C);
                break e;
              case 1:
                x = S;
                var k = c.type,
                  E = c.stateNode;
                if (
                  (c.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == "function" ||
                    (E !== null &&
                      typeof E.componentDidCatch == "function" &&
                      (gn === null || !gn.has(E))))
                ) {
                  ((c.flags |= 65536), (t &= -t), (c.lanes |= t));
                  var F = bf(c, x, t);
                  cf(c, F);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        vd(i);
      } catch (Q) {
        ((t = Q), be === i && i !== null && (be = i = i.return));
        continue;
      }
      break;
    } while (!0);
  }
  function gd() {
    var e = Mo.current;
    return ((Mo.current = So), e === null ? So : e);
  }
  function tl() {
    ((Be === 0 || Be === 3 || Be === 2) && (Be = 4),
      He === null || ((zn & 268435455) === 0 && (Ao & 268435455) === 0) || xn(He, Xe));
  }
  function jo(e, t) {
    var i = ce;
    ce |= 2;
    var s = gd();
    (He !== e || Xe !== t) && ((Jt = null), Fn(e, t));
    do
      try {
        Iy();
        break;
      } catch (l) {
        md(e, l);
      }
    while (!0);
    if ((pa(), (ce = i), (Mo.current = s), be !== null)) throw Error(o(261));
    return ((He = null), (Xe = 0), Be);
  }
  function Iy() {
    for (; be !== null;) yd(be);
  }
  function _y() {
    for (; be !== null && !ag();) yd(be);
  }
  function yd(e) {
    var t = Sd(e.alternate, e, yt);
    ((e.memoizedProps = e.pendingProps), t === null ? vd(e) : (be = t), (Ka.current = null));
  }
  function vd(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((i = Ay(i, t, yt)), i !== null)) {
          be = i;
          return;
        }
      } else {
        if (((i = Ry(i, t)), i !== null)) {
          ((i.flags &= 32767), (be = i));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Be = 6), (be = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function On(e, t, i) {
    var s = ve,
      l = Tt.transition;
    try {
      ((Tt.transition = null), (ve = 1), zy(e, t, i, s));
    } finally {
      ((Tt.transition = l), (ve = s));
    }
    return null;
  }
  function zy(e, t, i, s) {
    do vr();
    while (yn !== null);
    if ((ce & 6) !== 0) throw Error(o(327));
    i = e.finishedWork;
    var l = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current)) throw Error(o(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var c = i.lanes | i.childLanes;
    if (
      (yg(e, c),
      e === He && ((be = He = null), (Xe = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        Vo ||
        ((Vo = !0),
        kd(zi, function () {
          return (vr(), null);
        })),
      (c = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || c)
    ) {
      ((c = Tt.transition), (Tt.transition = null));
      var p = ve;
      ve = 1;
      var x = ce;
      ((ce |= 4),
        (Ka.current = null),
        Ly(e, i),
        ld(i, e),
        ry(ta),
        (Hi = !!ea),
        (ta = ea = null),
        (e.current = i),
        Dy(i),
        lg(),
        (ce = x),
        (ve = p),
        (Tt.transition = c));
    } else e.current = i;
    if (
      (Vo && ((Vo = !1), (yn = e), (Lo = l)),
      (c = e.pendingLanes),
      c === 0 && (gn = null),
      fg(i.stateNode),
      ft(e, _e()),
      t !== null)
    )
      for (s = e.onRecoverableError, i = 0; i < t.length; i++)
        ((l = t[i]), s(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Ro) throw ((Ro = !1), (e = Qa), (Qa = null), e);
    return (
      (Lo & 1) !== 0 && e.tag !== 0 && vr(),
      (c = e.pendingLanes),
      (c & 1) !== 0 ? (e === Ya ? hi++ : ((hi = 0), (Ya = e))) : (hi = 0),
      dn(),
      null
    );
  }
  function vr() {
    if (yn !== null) {
      var e = oc(Lo),
        t = Tt.transition,
        i = ve;
      try {
        if (((Tt.transition = null), (ve = 16 > e ? 16 : e), yn === null)) var s = !1;
        else {
          if (((e = yn), (yn = null), (Lo = 0), (ce & 6) !== 0)) throw Error(o(331));
          var l = ce;
          for (ce |= 4, $ = e.current; $ !== null;) {
            var c = $,
              p = c.child;
            if (($.flags & 16) !== 0) {
              var x = c.deletions;
              if (x !== null) {
                for (var S = 0; S < x.length; S++) {
                  var M = x[S];
                  for ($ = M; $ !== null;) {
                    var I = $;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ci(8, I, c);
                    }
                    var _ = I.child;
                    if (_ !== null) ((_.return = I), ($ = _));
                    else
                      for (; $ !== null;) {
                        I = $;
                        var j = I.sibling,
                          W = I.return;
                        if ((rd(I), I === M)) {
                          $ = null;
                          break;
                        }
                        if (j !== null) {
                          ((j.return = W), ($ = j));
                          break;
                        }
                        $ = W;
                      }
                  }
                }
                var K = c.alternate;
                if (K !== null) {
                  var X = K.child;
                  if (X !== null) {
                    K.child = null;
                    do {
                      var ze = X.sibling;
                      ((X.sibling = null), (X = ze));
                    } while (X !== null);
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
                      ci(9, c, c.return);
                  }
                var C = c.sibling;
                if (C !== null) {
                  ((C.return = c.return), ($ = C));
                  break e;
                }
                $ = c.return;
              }
          }
          var k = e.current;
          for ($ = k; $ !== null;) {
            p = $;
            var E = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && E !== null) ((E.return = p), ($ = E));
            else
              e: for (p = k; $ !== null;) {
                if (((x = $), (x.flags & 2048) !== 0))
                  try {
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Eo(9, x);
                    }
                  } catch (Q) {
                    je(x, x.return, Q);
                  }
                if (x === p) {
                  $ = null;
                  break e;
                }
                var F = x.sibling;
                if (F !== null) {
                  ((F.return = x.return), ($ = F));
                  break e;
                }
                $ = x.return;
              }
          }
          if (((ce = l), dn(), zt && typeof zt.onPostCommitFiberRoot == "function"))
            try {
              zt.onPostCommitFiberRoot(bi, e);
            } catch {}
          s = !0;
        }
        return s;
      } finally {
        ((ve = i), (Tt.transition = t));
      }
    }
    return !1;
  }
  function xd(e, t, i) {
    ((t = pr(i, t)),
      (t = zf(e, t, 1)),
      (e = pn(e, t, 1)),
      (t = it()),
      e !== null && (zr(e, 1, t), ft(e, t)));
  }
  function je(e, t, i) {
    if (e.tag === 3) xd(e, e, i);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          xd(t, e, i);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" && (gn === null || !gn.has(s)))
          ) {
            ((e = pr(i, e)),
              (e = bf(t, e, 1)),
              (t = pn(t, e, 1)),
              (e = it()),
              t !== null && (zr(t, 1, e), ft(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function by(e, t, i) {
    var s = e.pingCache;
    (s !== null && s.delete(t),
      (t = it()),
      (e.pingedLanes |= e.suspendedLanes & i),
      He === e &&
        (Xe & i) === i &&
        (Be === 4 || (Be === 3 && (Xe & 130023424) === Xe && 500 > _e() - Xa)
          ? Fn(e, 0)
          : (Ga |= i)),
      ft(e, t));
  }
  function wd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Oi), (Oi <<= 1), (Oi & 130023424) === 0 && (Oi = 4194304)));
    var i = it();
    ((e = Yt(e, t)), e !== null && (zr(e, t, i), ft(e, i)));
  }
  function Fy(e) {
    var t = e.memoizedState,
      i = 0;
    (t !== null && (i = t.retryLane), wd(e, i));
  }
  function Oy(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode,
          l = e.memoizedState;
        l !== null && (i = l.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    (s !== null && s.delete(t), wd(e, i));
  }
  var Sd;
  Sd = function (e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || at.current) ut = !0;
      else {
        if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return ((ut = !1), My(e, t, i));
        ut = (e.flags & 131072) !== 0;
      }
    else ((ut = !1), Ve && (t.flags & 1048576) !== 0 && Jc(t, lo, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var s = t.type;
        (Co(e, t), (e = t.pendingProps));
        var l = sr(t, Ze.current);
        (dr(t, i), (l = Pa(null, t, s, e, l, i)));
        var c = Ea();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              lt(s) ? ((c = !0), oo(t)) : (c = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              va(t),
              (l.updater = ko),
              (t.stateNode = l),
              (l._reactInternals = t),
              Da(t, s, e, i),
              (t = _a(null, t, s, !0, c, i)))
            : ((t.tag = 0), Ve && c && la(t), rt(null, t, l, i), (t = t.child)),
          t
        );
      case 16:
        s = t.elementType;
        e: {
          switch (
            (Co(e, t),
            (e = t.pendingProps),
            (l = s._init),
            (s = l(s._payload)),
            (t.type = s),
            (l = t.tag = Uy(s)),
            (e = Vt(s, e)),
            l)
          ) {
            case 0:
              t = Ia(null, t, s, e, i);
              break e;
            case 1:
              t = Gf(null, t, s, e, i);
              break e;
            case 11:
              t = Uf(null, t, s, e, i);
              break e;
            case 14:
              t = Wf(null, t, s, Vt(s.type, e), i);
              break e;
          }
          throw Error(o(306, s, ""));
        }
        return t;
      case 0:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : Vt(s, l)),
          Ia(e, t, s, l, i)
        );
      case 1:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : Vt(s, l)),
          Gf(e, t, s, l, i)
        );
      case 3:
        e: {
          if ((Xf(t), e === null)) throw Error(o(387));
          ((s = t.pendingProps),
            (c = t.memoizedState),
            (l = c.element),
            uf(e, t),
            mo(t, s, null, i));
          var p = t.memoizedState;
          if (((s = p.element), c.isDehydrated))
            if (
              ((c = {
                element: s,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              ((l = pr(Error(o(423)), t)), (t = Qf(e, t, s, i, l)));
              break e;
            } else if (s !== l) {
              ((l = pr(Error(o(424)), t)), (t = Qf(e, t, s, i, l)));
              break e;
            } else
              for (
                gt = un(t.stateNode.containerInfo.firstChild),
                  mt = t,
                  Ve = !0,
                  Rt = null,
                  i = af(t, null, s, i),
                  t.child = i;
                i;
              )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((ur(), s === l)) {
              t = Zt(e, t, i);
              break e;
            }
            rt(e, t, s, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          df(t),
          e === null && fa(t),
          (s = t.type),
          (l = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (p = l.children),
          na(s, l) ? (p = null) : c !== null && na(s, c) && (t.flags |= 32),
          Kf(e, t),
          rt(e, t, p, i),
          t.child
        );
      case 6:
        return (e === null && fa(t), null);
      case 13:
        return Yf(e, t, i);
      case 4:
        return (
          xa(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = cr(t, null, s, i)) : rt(e, t, s, i),
          t.child
        );
      case 11:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : Vt(s, l)),
          Uf(e, t, s, l, i)
        );
      case 7:
        return (rt(e, t, t.pendingProps, i), t.child);
      case 8:
        return (rt(e, t, t.pendingProps.children, i), t.child);
      case 12:
        return (rt(e, t, t.pendingProps.children, i), t.child);
      case 10:
        e: {
          if (
            ((s = t.type._context),
            (l = t.pendingProps),
            (c = t.memoizedProps),
            (p = l.value),
            Ce(fo, s._currentValue),
            (s._currentValue = p),
            c !== null)
          )
            if (At(c.value, p)) {
              if (c.children === l.children && !at.current) {
                t = Zt(e, t, i);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null;) {
                var x = c.dependencies;
                if (x !== null) {
                  p = c.child;
                  for (var S = x.firstContext; S !== null;) {
                    if (S.context === s) {
                      if (c.tag === 1) {
                        ((S = qt(-1, i & -i)), (S.tag = 2));
                        var M = c.updateQueue;
                        if (M !== null) {
                          M = M.shared;
                          var I = M.pending;
                          (I === null ? (S.next = S) : ((S.next = I.next), (I.next = S)),
                            (M.pending = S));
                        }
                      }
                      ((c.lanes |= i),
                        (S = c.alternate),
                        S !== null && (S.lanes |= i),
                        ga(c.return, i, t),
                        (x.lanes |= i));
                      break;
                    }
                    S = S.next;
                  }
                } else if (c.tag === 10) p = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((p = c.return), p === null)) throw Error(o(341));
                  ((p.lanes |= i),
                    (x = p.alternate),
                    x !== null && (x.lanes |= i),
                    ga(p, i, t),
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
          (rt(e, t, l.children, i), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (s = t.pendingProps.children),
          dr(t, i),
          (l = St(l)),
          (s = s(l)),
          (t.flags |= 1),
          rt(e, t, s, i),
          t.child
        );
      case 14:
        return ((s = t.type), (l = Vt(s, t.pendingProps)), (l = Vt(s.type, l)), Wf(e, t, s, l, i));
      case 15:
        return Hf(e, t, t.type, t.pendingProps, i);
      case 17:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : Vt(s, l)),
          Co(e, t),
          (t.tag = 1),
          lt(s) ? ((e = !0), oo(t)) : (e = !1),
          dr(t, i),
          If(t, s, l),
          Da(t, s, l, i),
          _a(null, t, s, !0, e, i)
        );
      case 19:
        return Zf(e, t, i);
      case 22:
        return $f(e, t, i);
    }
    throw Error(o(156, t.tag));
  };
  function kd(e, t) {
    return ec(e, t);
  }
  function By(e, t, i, s) {
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
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ct(e, t, i, s) {
    return new By(e, t, i, s);
  }
  function nl(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Uy(e) {
    if (typeof e == "function") return nl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ne)) return 11;
      if (e === Le) return 14;
    }
    return 2;
  }
  function wn(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = Ct(e.tag, t, e.key, e.mode)),
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
  function Io(e, t, i, s, l, c) {
    var p = 2;
    if (((s = e), typeof e == "function")) nl(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else
      e: switch (e) {
        case ie:
          return Bn(i.children, l, c, t);
        case q:
          ((p = 8), (l |= 8));
          break;
        case me:
          return ((e = Ct(12, i, t, l | 2)), (e.elementType = me), (e.lanes = c), e);
        case Ae:
          return ((e = Ct(13, i, t, l)), (e.elementType = Ae), (e.lanes = c), e);
        case xe:
          return ((e = Ct(19, i, t, l)), (e.elementType = xe), (e.lanes = c), e);
        case ke:
          return _o(i, l, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Z:
                p = 10;
                break e;
              case fe:
                p = 9;
                break e;
              case ne:
                p = 11;
                break e;
              case Le:
                p = 14;
                break e;
              case ge:
                ((p = 16), (s = null));
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return ((t = Ct(p, i, t, l)), (t.elementType = e), (t.type = s), (t.lanes = c), t);
  }
  function Bn(e, t, i, s) {
    return ((e = Ct(7, e, s, t)), (e.lanes = i), e);
  }
  function _o(e, t, i, s) {
    return (
      (e = Ct(22, e, s, t)),
      (e.elementType = ke),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function rl(e, t, i) {
    return ((e = Ct(6, e, null, t)), (e.lanes = i), e);
  }
  function il(e, t, i) {
    return (
      (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Wy(e, t, i, s, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ls(0)),
      (this.expirationTimes = Ls(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ls(0)),
      (this.identifierPrefix = s),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ol(e, t, i, s, l, c, p, x, S) {
    return (
      (e = new Wy(e, t, i, x, S)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = Ct(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: s,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      va(c),
      e
    );
  }
  function Hy(e, t, i) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: oe,
      key: s == null ? null : "" + s,
      children: e,
      containerInfo: t,
      implementation: i,
    };
  }
  function Td(e) {
    if (!e) return fn;
    e = e._reactInternals;
    e: {
      if (Rn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (lt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (lt(i)) return Yc(e, i, t);
    }
    return t;
  }
  function Cd(e, t, i, s, l, c, p, x, S) {
    return (
      (e = ol(i, s, !0, e, l, c, p, x, S)),
      (e.context = Td(null)),
      (i = e.current),
      (s = it()),
      (l = vn(i)),
      (c = qt(s, l)),
      (c.callback = t ?? null),
      pn(i, c, l),
      (e.current.lanes = l),
      zr(e, l, s),
      ft(e, s),
      e
    );
  }
  function zo(e, t, i, s) {
    var l = t.current,
      c = it(),
      p = vn(l);
    return (
      (i = Td(i)),
      t.context === null ? (t.context = i) : (t.pendingContext = i),
      (t = qt(c, p)),
      (t.payload = { element: e }),
      (s = s === void 0 ? null : s),
      s !== null && (t.callback = s),
      (e = pn(l, t, p)),
      e !== null && (Nt(e, l, p, c), po(e, l, p)),
      p
    );
  }
  function bo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Pd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function sl(e, t) {
    (Pd(e, t), (e = e.alternate) && Pd(e, t));
  }
  function $y() {
    return null;
  }
  var Ed =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function al(e) {
    this._internalRoot = e;
  }
  ((Fo.prototype.render = al.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      zo(e, t, null, null);
    }),
    (Fo.prototype.unmount = al.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (bn(function () {
            zo(null, e, null, null);
          }),
            (t[Kt] = null));
        }
      }));
  function Fo(e) {
    this._internalRoot = e;
  }
  Fo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = lc();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < sn.length && t !== 0 && t < sn[i].priority; i++);
      (sn.splice(i, 0, e), i === 0 && fc(e));
    }
  };
  function ll(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Oo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Md() {}
  function Ky(e, t, i, s, l) {
    if (l) {
      if (typeof s == "function") {
        var c = s;
        s = function () {
          var M = bo(p);
          c.call(M);
        };
      }
      var p = Cd(t, s, e, 0, null, !1, !1, "", Md);
      return (
        (e._reactRootContainer = p),
        (e[Kt] = p.current),
        qr(e.nodeType === 8 ? e.parentNode : e),
        bn(),
        p
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof s == "function") {
      var x = s;
      s = function () {
        var M = bo(S);
        x.call(M);
      };
    }
    var S = ol(e, 0, !1, null, null, !1, !1, "", Md);
    return (
      (e._reactRootContainer = S),
      (e[Kt] = S.current),
      qr(e.nodeType === 8 ? e.parentNode : e),
      bn(function () {
        zo(t, S, i, s);
      }),
      S
    );
  }
  function Bo(e, t, i, s, l) {
    var c = i._reactRootContainer;
    if (c) {
      var p = c;
      if (typeof l == "function") {
        var x = l;
        l = function () {
          var S = bo(p);
          x.call(S);
        };
      }
      zo(t, p, e, l);
    } else p = Ky(i, t, e, l, s);
    return bo(p);
  }
  ((sc = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = _r(t.pendingLanes);
          i !== 0 && (Ds(t, i | 1), ft(t, _e()), (ce & 6) === 0 && ((yr = _e() + 500), dn()));
        }
        break;
      case 13:
        (bn(function () {
          var s = Yt(e, 1);
          if (s !== null) {
            var l = it();
            Nt(s, e, 1, l);
          }
        }),
          sl(e, 1));
    }
  }),
    (Ns = function (e) {
      if (e.tag === 13) {
        var t = Yt(e, 134217728);
        if (t !== null) {
          var i = it();
          Nt(t, e, 134217728, i);
        }
        sl(e, 134217728);
      }
    }),
    (ac = function (e) {
      if (e.tag === 13) {
        var t = vn(e),
          i = Yt(e, t);
        if (i !== null) {
          var s = it();
          Nt(i, e, t, s);
        }
        sl(e, t);
      }
    }),
    (lc = function () {
      return ve;
    }),
    (uc = function (e, t) {
      var i = ve;
      try {
        return ((ve = e), t());
      } finally {
        ve = i;
      }
    }),
    (Ps = function (e, t, i) {
      switch (t) {
        case "input":
          if ((ys(e, i), (t = i.name), i.type === "radio" && t != null)) {
            for (i = e; i.parentNode;) i = i.parentNode;
            for (
              i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < i.length;
              t++
            ) {
              var s = i[t];
              if (s !== e && s.form === e.form) {
                var l = ro(s);
                if (!l) throw Error(o(90));
                (Nu(s), ys(s, l));
              }
            }
          }
          break;
        case "textarea":
          bu(e, i);
          break;
        case "select":
          ((t = i.value), t != null && Xn(e, !!i.multiple, t, !1));
      }
    }),
    (Gu = Ja),
    (Xu = bn));
  var Gy = { usingClientEntryPoint: !1, Events: [ei, ir, ro, $u, Ku, Ja] },
    pi = {
      findFiberByHostInstance: Vn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Xy = {
      bundleType: pi.bundleType,
      version: pi.version,
      rendererPackageName: pi.rendererPackageName,
      rendererConfig: pi.rendererConfig,
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
        return ((e = Zu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: pi.findFiberByHostInstance || $y,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uo.isDisabled && Uo.supportsFiber)
      try {
        ((bi = Uo.inject(Xy)), (zt = Uo));
      } catch {}
  }
  return (
    (dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy),
    (dt.createPortal = function (e, t) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ll(t)) throw Error(o(200));
      return Hy(e, t, null, i);
    }),
    (dt.createRoot = function (e, t) {
      if (!ll(e)) throw Error(o(299));
      var i = !1,
        s = "",
        l = Ed;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ol(e, 1, !1, null, null, i, !1, s, l)),
        (e[Kt] = t.current),
        qr(e.nodeType === 8 ? e.parentNode : e),
        new al(t)
      );
    }),
    (dt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return ((e = Zu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (dt.flushSync = function (e) {
      return bn(e);
    }),
    (dt.hydrate = function (e, t, i) {
      if (!Oo(t)) throw Error(o(200));
      return Bo(null, e, t, !0, i);
    }),
    (dt.hydrateRoot = function (e, t, i) {
      if (!ll(e)) throw Error(o(405));
      var s = (i != null && i.hydratedSources) || null,
        l = !1,
        c = "",
        p = Ed;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (l = !0),
          i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (p = i.onRecoverableError)),
        (t = Cd(t, null, e, 1, i ?? null, l, !1, c, p)),
        (e[Kt] = t.current),
        qr(e),
        s)
      )
        for (e = 0; e < s.length; e++)
          ((i = s[e]),
            (l = i._getVersion),
            (l = l(i._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [i, l])
              : t.mutableSourceEagerHydrationData.push(i, l));
      return new Fo(t);
    }),
    (dt.render = function (e, t, i) {
      if (!Oo(t)) throw Error(o(200));
      return Bo(null, e, t, !1, i);
    }),
    (dt.unmountComponentAtNode = function (e) {
      if (!Oo(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (bn(function () {
            Bo(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Kt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (dt.unstable_batchedUpdates = Ja),
    (dt.unstable_renderSubtreeIntoContainer = function (e, t, i, s) {
      if (!Oo(i)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Bo(e, t, i, !1, s);
    }),
    (dt.version = "18.3.1-next-f1338f8080-20240426"),
    dt
  );
}
var Id;
function nv() {
  if (Id) return fl.exports;
  Id = 1;
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
  return (n(), (fl.exports = tv()), fl.exports);
}
var _d;
function rv() {
  if (_d) return Wo;
  _d = 1;
  var n = nv();
  return ((Wo.createRoot = n.createRoot), (Wo.hydrateRoot = n.hydrateRoot), Wo);
}
var iv = rv();
function ep(n) {
  return `#${n}`;
}
function tp(n) {
  const r = n.replace(/^\//, "").replace(/\/$/, "");
  return r ? `#/${r}` : "#/";
}
function iu(n) {
  const r = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return r
    ? r.startsWith("/")
      ? { kind: "route", path: r.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: r }
    : null;
}
function ou(n, r = "smooth") {
  if (typeof document > "u") return !1;
  const o = document.getElementById(n);
  return o ? (o.scrollIntoView({ behavior: r, block: "start" }), !0) : !1;
}
function ov(n, r = "smooth") {
  if (typeof window > "u") return;
  const o = ep(n);
  if (ou(n, r)) {
    window.history.replaceState(null, "", o);
    return;
  }
  window.location.hash = o;
}
function sv(n) {
  typeof window > "u" || (window.location.hash = tp(n));
}
function av() {
  const n = iu();
  return (n == null ? void 0 : n.kind) === "route" ? n.path : "";
}
function lv(n) {
  return n.kind === "route" ? tp(n.path) : ep(n.id);
}
function uv(n, r) {
  if ((n.preventDefault(), r.kind === "route")) {
    sv(r.path);
    return;
  }
  ov(r.id);
}
function np() {
  if (typeof window > "u") return;
  const n = iu();
  (n == null ? void 0 : n.kind) === "section" && requestAnimationFrame(() => ou(n.id, "auto"));
}
function cv(n, r) {
  if (typeof window > "u") return () => {};
  const o = () => {
    const a = iu();
    if (!a) {
      n("");
      return;
    }
    if (a.kind === "route") {
      n(a.path);
      return;
    }
    (ou(a.id, "smooth"), n(""));
  };
  return (
    o(),
    window.addEventListener("hashchange", o),
    () => window.removeEventListener("hashchange", o)
  );
}
function fv(n = "") {
  const [r, o] = J.useState(() => (typeof window < "u" ? av() : n));
  return (J.useEffect(() => cv(o), []), r || n);
}
function dv({ routes: n, defaultRoute: r = "", className: o }) {
  const a = fv(r);
  J.useEffect(() => {
    np();
  }, []);
  const u = a in n ? a : r,
    d = n[u] ?? n[r];
  return V.jsx("div", { className: o, children: d });
}
const rp = J.createContext({});
function hv(n) {
  const r = J.useRef(null);
  return (r.current === null && (r.current = n()), r.current);
}
const pv = typeof window < "u",
  mv = pv ? J.useLayoutEffect : J.useEffect,
  su = J.createContext(null);
function au(n, r) {
  n.indexOf(r) === -1 && n.push(r);
}
function ts(n, r) {
  const o = n.indexOf(r);
  o > -1 && n.splice(o, 1);
}
const $t = (n, r, o) => (o > r ? r : o < n ? n : o);
let lu = () => {};
const En = {},
  ip = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  op = (n) => typeof n == "object" && n !== null,
  sp = (n) => /^0[^.\s]+$/u.test(n);
function ap(n) {
  let r;
  return () => (r === void 0 && (r = n()), r);
}
const Et = (n) => n,
  Ai = (...n) => n.reduce((r, o) => (a) => o(r(a))),
  Ci = (n, r, o) => {
    const a = r - n;
    return a ? (o - n) / a : 1;
  };
class uu {
  constructor() {
    this.subscriptions = [];
  }
  add(r) {
    return (au(this.subscriptions, r), () => ts(this.subscriptions, r));
  }
  notify(r, o, a) {
    const u = this.subscriptions.length;
    if (u)
      if (u === 1) this.subscriptions[0](r, o, a);
      else
        for (let d = 0; d < u; d++) {
          const f = this.subscriptions[d];
          f && f(r, o, a);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const vt = (n) => n * 1e3,
  Pt = (n) => n / 1e3,
  lp = (n, r) => (r ? n * (1e3 / r) : 0),
  up = (n, r, o) => (((1 - 3 * o + 3 * r) * n + (3 * o - 6 * r)) * n + 3 * r) * n,
  gv = 1e-7,
  yv = 12;
function vv(n, r, o, a, u) {
  let d,
    f,
    h = 0;
  do ((f = r + (o - r) / 2), (d = up(f, a, u) - n), d > 0 ? (o = f) : (r = f));
  while (Math.abs(d) > gv && ++h < yv);
  return f;
}
function Ri(n, r, o, a) {
  if (n === r && o === a) return Et;
  const u = (d) => vv(d, 0, 1, n, o);
  return (d) => (d === 0 || d === 1 ? d : up(u(d), r, a));
}
const cp = (n) => (r) => (r <= 0.5 ? n(2 * r) / 2 : (2 - n(2 * (1 - r))) / 2),
  fp = (n) => (r) => 1 - n(1 - r),
  dp = Ri(0.33, 1.53, 0.69, 0.99),
  cu = fp(dp),
  hp = cp(cu),
  pp = (n) => (n >= 1 ? 1 : (n *= 2) < 1 ? 0.5 * cu(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))),
  fu = (n) => 1 - Math.sin(Math.acos(n)),
  mp = fp(fu),
  gp = cp(fu),
  xv = Ri(0.42, 0, 1, 1),
  wv = Ri(0, 0, 0.58, 1),
  yp = Ri(0.42, 0, 0.58, 1),
  Sv = (n) => Array.isArray(n) && typeof n[0] != "number",
  vp = (n) => Array.isArray(n) && typeof n[0] == "number",
  kv = {
    linear: Et,
    easeIn: xv,
    easeInOut: yp,
    easeOut: wv,
    circIn: fu,
    circInOut: gp,
    circOut: mp,
    backIn: cu,
    backInOut: hp,
    backOut: dp,
    anticipate: pp,
  },
  Tv = (n) => typeof n == "string",
  zd = (n) => {
    if (vp(n)) {
      lu(n.length === 4);
      const [r, o, a, u] = n;
      return Ri(r, o, a, u);
    } else if (Tv(n)) return kv[n];
    return n;
  },
  Ho = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Cv(n, r) {
  let o = new Set(),
    a = new Set(),
    u = !1,
    d = !1;
  const f = new WeakSet();
  let h = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(g) {
    (f.has(g) && (y.schedule(g), n()), g(h));
  }
  const y = {
    schedule: (g, v = !1, w = !1) => {
      const A = w && u ? o : a;
      return (v && f.add(g), A.add(g), g);
    },
    cancel: (g) => {
      (a.delete(g), f.delete(g));
    },
    process: (g) => {
      if (((h = g), u)) {
        d = !0;
        return;
      }
      u = !0;
      const v = o;
      ((o = a), (a = v), o.forEach(m), o.clear(), (u = !1), d && ((d = !1), y.process(g)));
    },
  };
  return y;
}
const Pv = 40;
function xp(n, r) {
  let o = !1,
    a = !0;
  const u = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (o = !0),
    f = Ho.reduce((O, B) => ((O[B] = Cv(d)), O), {}),
    {
      setup: h,
      read: m,
      resolveKeyframes: y,
      preUpdate: g,
      update: v,
      preRender: w,
      render: P,
      postRender: A,
    } = f,
    L = () => {
      const O = En.useManualTiming,
        B = O ? u.timestamp : performance.now();
      ((o = !1),
        O || (u.delta = a ? 1e3 / 60 : Math.max(Math.min(B - u.timestamp, Pv), 1)),
        (u.timestamp = B),
        (u.isProcessing = !0),
        h.process(u),
        m.process(u),
        y.process(u),
        g.process(u),
        v.process(u),
        w.process(u),
        P.process(u),
        A.process(u),
        (u.isProcessing = !1),
        o && r && ((a = !1), n(L)));
    },
    R = () => {
      ((o = !0), (a = !0), u.isProcessing || n(L));
    };
  return {
    schedule: Ho.reduce((O, B) => {
      const Y = f[B];
      return ((O[B] = (oe, ie = !1, q = !1) => (o || R(), Y.schedule(oe, ie, q))), O);
    }, {}),
    cancel: (O) => {
      for (let B = 0; B < Ho.length; B++) f[Ho[B]].cancel(O);
    },
    state: u,
    steps: f,
  };
}
const {
  schedule: Se,
  cancel: Mn,
  state: Qe,
  steps: pl,
} = xp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Et, !0);
let Xo;
function Ev() {
  Xo = void 0;
}
const ot = {
    now: () => (
      Xo === void 0 &&
        ot.set(Qe.isProcessing || En.useManualTiming ? Qe.timestamp : performance.now()),
      Xo
    ),
    set: (n) => {
      ((Xo = n), queueMicrotask(Ev));
    },
  },
  wp = (n) => (r) => typeof r == "string" && r.startsWith(n),
  Sp = wp("--"),
  Mv = wp("var(--"),
  du = (n) => (Mv(n) ? Av.test(n.split("/*")[0].trim()) : !1),
  Av = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function bd(n) {
  return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--");
}
const Er = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  Pi = { ...Er, transform: (n) => $t(0, 1, n) },
  $o = { ...Er, default: 1 },
  wi = (n) => Math.round(n * 1e5) / 1e5,
  hu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Rv(n) {
  return n == null;
}
const Vv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  pu = (n, r) => (o) =>
    !!(
      (typeof o == "string" && Vv.test(o) && o.startsWith(n)) ||
      (r && !Rv(o) && Object.prototype.hasOwnProperty.call(o, r))
    ),
  kp = (n, r, o) => (a) => {
    if (typeof a != "string") return a;
    const [u, d, f, h] = a.match(hu);
    return {
      [n]: parseFloat(u),
      [r]: parseFloat(d),
      [o]: parseFloat(f),
      alpha: h !== void 0 ? parseFloat(h) : 1,
    };
  },
  Lv = (n) => $t(0, 255, n),
  ml = { ...Er, transform: (n) => Math.round(Lv(n)) },
  Hn = {
    test: pu("rgb", "red"),
    parse: kp("red", "green", "blue"),
    transform: ({ red: n, green: r, blue: o, alpha: a = 1 }) =>
      "rgba(" +
      ml.transform(n) +
      ", " +
      ml.transform(r) +
      ", " +
      ml.transform(o) +
      ", " +
      wi(Pi.transform(a)) +
      ")",
  };
function Dv(n) {
  let r = "",
    o = "",
    a = "",
    u = "";
  return (
    n.length > 5
      ? ((r = n.substring(1, 3)),
        (o = n.substring(3, 5)),
        (a = n.substring(5, 7)),
        (u = n.substring(7, 9)))
      : ((r = n.substring(1, 2)),
        (o = n.substring(2, 3)),
        (a = n.substring(3, 4)),
        (u = n.substring(4, 5)),
        (r += r),
        (o += o),
        (a += a),
        (u += u)),
    {
      red: parseInt(r, 16),
      green: parseInt(o, 16),
      blue: parseInt(a, 16),
      alpha: u ? parseInt(u, 16) / 255 : 1,
    }
  );
}
const Ll = { test: pu("#"), parse: Dv, transform: Hn.transform },
  Vi = (n) => ({
    test: (r) => typeof r == "string" && r.endsWith(n) && r.split(" ").length === 1,
    parse: parseFloat,
    transform: (r) => `${r}${n}`,
  }),
  tn = Vi("deg"),
  Ht = Vi("%"),
  G = Vi("px"),
  Nv = Vi("vh"),
  jv = Vi("vw"),
  Fd = { ...Ht, parse: (n) => Ht.parse(n) / 100, transform: (n) => Ht.transform(n * 100) },
  wr = {
    test: pu("hsl", "hue"),
    parse: kp("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: r, lightness: o, alpha: a = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      Ht.transform(wi(r)) +
      ", " +
      Ht.transform(wi(o)) +
      ", " +
      wi(Pi.transform(a)) +
      ")",
  },
  Fe = {
    test: (n) => Hn.test(n) || Ll.test(n) || wr.test(n),
    parse: (n) => (Hn.test(n) ? Hn.parse(n) : wr.test(n) ? wr.parse(n) : Ll.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? Hn.transform(n) : wr.transform(n),
    getAnimatableNone: (n) => {
      const r = Fe.parse(n);
      return ((r.alpha = 0), Fe.transform(r));
    },
  },
  Iv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function _v(n) {
  var r, o;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((r = n.match(hu)) == null ? void 0 : r.length) || 0) +
      (((o = n.match(Iv)) == null ? void 0 : o.length) || 0) >
      0
  );
}
const Tp = "number",
  Cp = "color",
  zv = "var",
  bv = "var(",
  Od = "${}",
  Fv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Cr(n) {
  const r = n.toString(),
    o = [],
    a = { color: [], number: [], var: [] },
    u = [];
  let d = 0;
  const h = r
    .replace(
      Fv,
      (m) => (
        Fe.test(m)
          ? (a.color.push(d), u.push(Cp), o.push(Fe.parse(m)))
          : m.startsWith(bv)
            ? (a.var.push(d), u.push(zv), o.push(m))
            : (a.number.push(d), u.push(Tp), o.push(parseFloat(m))),
        ++d,
        Od
      ),
    )
    .split(Od);
  return { values: o, split: h, indexes: a, types: u };
}
function Ov(n) {
  return Cr(n).values;
}
function Pp({ split: n, types: r }) {
  const o = n.length;
  return (a) => {
    let u = "";
    for (let d = 0; d < o; d++)
      if (((u += n[d]), a[d] !== void 0)) {
        const f = r[d];
        f === Tp ? (u += wi(a[d])) : f === Cp ? (u += Fe.transform(a[d])) : (u += a[d]);
      }
    return u;
  };
}
function Bv(n) {
  return Pp(Cr(n));
}
const Uv = (n) => (typeof n == "number" ? 0 : Fe.test(n) ? Fe.getAnimatableNone(n) : n),
  Wv = (n, r) => (typeof n == "number" ? (r != null && r.trim().endsWith("/") ? n : 0) : Uv(n));
function Hv(n) {
  const r = Cr(n);
  return Pp(r)(r.values.map((a, u) => Wv(a, r.split[u])));
}
const _t = { test: _v, parse: Ov, createTransformer: Bv, getAnimatableNone: Hv };
function gl(n, r, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6 ? n + (r - n) * 6 * o : o < 1 / 2 ? r : o < 2 / 3 ? n + (r - n) * (2 / 3 - o) * 6 : n
  );
}
function $v({ hue: n, saturation: r, lightness: o, alpha: a }) {
  ((n /= 360), (r /= 100), (o /= 100));
  let u = 0,
    d = 0,
    f = 0;
  if (!r) u = d = f = o;
  else {
    const h = o < 0.5 ? o * (1 + r) : o + r - o * r,
      m = 2 * o - h;
    ((u = gl(m, h, n + 1 / 3)), (d = gl(m, h, n)), (f = gl(m, h, n - 1 / 3)));
  }
  return {
    red: Math.round(u * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: a,
  };
}
function ns(n, r) {
  return (o) => (o > 0 ? r : n);
}
const we = (n, r, o) => n + (r - n) * o,
  yl = (n, r, o) => {
    const a = n * n,
      u = o * (r * r - a) + a;
    return u < 0 ? 0 : Math.sqrt(u);
  },
  Kv = [Ll, Hn, wr],
  Gv = (n) => Kv.find((r) => r.test(n));
function Bd(n) {
  const r = Gv(n);
  if (!r) return !1;
  let o = r.parse(n);
  return (r === wr && (o = $v(o)), o);
}
const Ud = (n, r) => {
    const o = Bd(n),
      a = Bd(r);
    if (!o || !a) return ns(n, r);
    const u = { ...o };
    return (d) => (
      (u.red = yl(o.red, a.red, d)),
      (u.green = yl(o.green, a.green, d)),
      (u.blue = yl(o.blue, a.blue, d)),
      (u.alpha = we(o.alpha, a.alpha, d)),
      Hn.transform(u)
    );
  },
  Dl = new Set(["none", "hidden"]);
function Xv(n, r) {
  return Dl.has(n) ? (o) => (o <= 0 ? n : r) : (o) => (o >= 1 ? r : n);
}
function Qv(n, r) {
  return (o) => we(n, r, o);
}
function mu(n) {
  return typeof n == "number"
    ? Qv
    : typeof n == "string"
      ? du(n)
        ? ns
        : Fe.test(n)
          ? Ud
          : Zv
      : Array.isArray(n)
        ? Ep
        : typeof n == "object"
          ? Fe.test(n)
            ? Ud
            : Yv
          : ns;
}
function Ep(n, r) {
  const o = [...n],
    a = o.length,
    u = n.map((d, f) => mu(d)(d, r[f]));
  return (d) => {
    for (let f = 0; f < a; f++) o[f] = u[f](d);
    return o;
  };
}
function Yv(n, r) {
  const o = { ...n, ...r },
    a = {};
  for (const u in o) n[u] !== void 0 && r[u] !== void 0 && (a[u] = mu(n[u])(n[u], r[u]));
  return (u) => {
    for (const d in a) o[d] = a[d](u);
    return o;
  };
}
function qv(n, r) {
  const o = [],
    a = { color: 0, var: 0, number: 0 };
  for (let u = 0; u < r.values.length; u++) {
    const d = r.types[u],
      f = n.indexes[d][a[d]],
      h = n.values[f] ?? 0;
    ((o[u] = h), a[d]++);
  }
  return o;
}
const Zv = (n, r) => {
  const o = _t.createTransformer(r),
    a = Cr(n),
    u = Cr(r);
  return a.indexes.var.length === u.indexes.var.length &&
    a.indexes.color.length === u.indexes.color.length &&
    a.indexes.number.length >= u.indexes.number.length
    ? (Dl.has(n) && !u.values.length) || (Dl.has(r) && !a.values.length)
      ? Xv(n, r)
      : Ai(Ep(qv(a, u), u.values), o)
    : ns(n, r);
};
function Mp(n, r, o) {
  return typeof n == "number" && typeof r == "number" && typeof o == "number"
    ? we(n, r, o)
    : mu(n)(n, r);
}
const Jv = (n) => {
    const r = ({ timestamp: o }) => n(o);
    return {
      start: (o = !0) => Se.update(r, o),
      stop: () => Mn(r),
      now: () => (Qe.isProcessing ? Qe.timestamp : ot.now()),
    };
  },
  Ap = (n, r, o = 10) => {
    let a = "";
    const u = Math.max(Math.round(r / o), 2);
    for (let d = 0; d < u; d++) a += Math.round(n(d / (u - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${a.substring(0, a.length - 2)})`;
  },
  rs = 2e4;
function gu(n) {
  let r = 0;
  const o = 50;
  let a = n.next(r);
  for (; !a.done && r < rs;) ((r += o), (a = n.next(r)));
  return r >= rs ? 1 / 0 : r;
}
function e0(n, r = 100, o) {
  const a = o({ ...n, keyframes: [0, r] }),
    u = Math.min(gu(a), rs);
  return { type: "keyframes", ease: (d) => a.next(u * d).value / r, duration: Pt(u) };
}
const Ie = {
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
function Nl(n, r) {
  return n * Math.sqrt(1 - r * r);
}
const t0 = 12;
function n0(n, r, o) {
  let a = o;
  for (let u = 1; u < t0; u++) a = a - n(a) / r(a);
  return a;
}
const vl = 0.001;
function r0({
  duration: n = Ie.duration,
  bounce: r = Ie.bounce,
  velocity: o = Ie.velocity,
  mass: a = Ie.mass,
}) {
  let u,
    d,
    f = 1 - r;
  ((f = $t(Ie.minDamping, Ie.maxDamping, f)),
    (n = $t(Ie.minDuration, Ie.maxDuration, Pt(n))),
    f < 1
      ? ((u = (y) => {
          const g = y * f,
            v = g * n,
            w = g - o,
            P = Nl(y, f),
            A = Math.exp(-v);
          return vl - (w / P) * A;
        }),
        (d = (y) => {
          const v = y * f * n,
            w = v * o + o,
            P = Math.pow(f, 2) * Math.pow(y, 2) * n,
            A = Math.exp(-v),
            L = Nl(Math.pow(y, 2), f);
          return ((-u(y) + vl > 0 ? -1 : 1) * ((w - P) * A)) / L;
        }))
      : ((u = (y) => {
          const g = Math.exp(-y * n),
            v = (y - o) * n + 1;
          return -vl + g * v;
        }),
        (d = (y) => {
          const g = Math.exp(-y * n),
            v = (o - y) * (n * n);
          return g * v;
        })));
  const h = 5 / n,
    m = n0(u, d, h);
  if (((n = vt(n)), isNaN(m))) return { stiffness: Ie.stiffness, damping: Ie.damping, duration: n };
  {
    const y = Math.pow(m, 2) * a;
    return { stiffness: y, damping: f * 2 * Math.sqrt(a * y), duration: n };
  }
}
const i0 = ["duration", "bounce"],
  o0 = ["stiffness", "damping", "mass"];
function Wd(n, r) {
  return r.some((o) => n[o] !== void 0);
}
function s0(n) {
  let r = {
    velocity: Ie.velocity,
    stiffness: Ie.stiffness,
    damping: Ie.damping,
    mass: Ie.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Wd(n, o0) && Wd(n, i0))
    if (((r.velocity = 0), n.visualDuration)) {
      const o = n.visualDuration,
        a = (2 * Math.PI) / (o * 1.2),
        u = a * a,
        d = 2 * $t(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
      r = { ...r, mass: Ie.mass, stiffness: u, damping: d };
    } else {
      const o = r0({ ...n, velocity: 0 });
      ((r = { ...r, ...o, mass: Ie.mass }), (r.isResolvedFromDuration = !0));
    }
  return r;
}
function is(n = Ie.visualDuration, r = Ie.bounce) {
  const o = typeof n != "object" ? { visualDuration: n, keyframes: [0, 1], bounce: r } : n;
  let { restSpeed: a, restDelta: u } = o;
  const d = o.keyframes[0],
    f = o.keyframes[o.keyframes.length - 1],
    h = { done: !1, value: d },
    {
      stiffness: m,
      damping: y,
      mass: g,
      duration: v,
      velocity: w,
      isResolvedFromDuration: P,
    } = s0({ ...o, velocity: -Pt(o.velocity || 0) }),
    A = w || 0,
    L = y / (2 * Math.sqrt(m * g)),
    R = f - d,
    D = Pt(Math.sqrt(m / g)),
    b = Math.abs(R) < 5;
  (a || (a = b ? Ie.restSpeed.granular : Ie.restSpeed.default),
    u || (u = b ? Ie.restDelta.granular : Ie.restDelta.default));
  let O, B, Y, oe, ie, q;
  if (L < 1)
    ((Y = Nl(D, L)),
      (oe = (A + L * D * R) / Y),
      (O = (Z) => {
        const fe = Math.exp(-L * D * Z);
        return f - fe * (oe * Math.sin(Y * Z) + R * Math.cos(Y * Z));
      }),
      (ie = L * D * oe + R * Y),
      (q = L * D * R - oe * Y),
      (B = (Z) => Math.exp(-L * D * Z) * (ie * Math.sin(Y * Z) + q * Math.cos(Y * Z))));
  else if (L === 1) {
    O = (fe) => f - Math.exp(-D * fe) * (R + (A + D * R) * fe);
    const Z = A + D * R;
    B = (fe) => Math.exp(-D * fe) * (D * Z * fe - A);
  } else {
    const Z = D * Math.sqrt(L * L - 1);
    O = (xe) => {
      const Le = Math.exp(-L * D * xe),
        ge = Math.min(Z * xe, 300);
      return f - (Le * ((A + L * D * R) * Math.sinh(ge) + Z * R * Math.cosh(ge))) / Z;
    };
    const fe = (A + L * D * R) / Z,
      ne = L * D * fe - R * Z,
      Ae = L * D * R - fe * Z;
    B = (xe) => {
      const Le = Math.exp(-L * D * xe),
        ge = Math.min(Z * xe, 300);
      return Le * (ne * Math.sinh(ge) + Ae * Math.cosh(ge));
    };
  }
  const me = {
    calculatedDuration: (P && v) || null,
    velocity: (Z) => vt(B(Z)),
    next: (Z) => {
      if (!P && L < 1) {
        const ne = Math.exp(-L * D * Z),
          Ae = Math.sin(Y * Z),
          xe = Math.cos(Y * Z),
          Le = f - ne * (oe * Ae + R * xe),
          ge = vt(ne * (ie * Ae + q * xe));
        return (
          (h.done = Math.abs(ge) <= a && Math.abs(f - Le) <= u),
          (h.value = h.done ? f : Le),
          h
        );
      }
      const fe = O(Z);
      if (P) h.done = Z >= v;
      else {
        const ne = vt(B(Z));
        h.done = Math.abs(ne) <= a && Math.abs(f - fe) <= u;
      }
      return ((h.value = h.done ? f : fe), h);
    },
    toString: () => {
      const Z = Math.min(gu(me), rs),
        fe = Ap((ne) => me.next(Z * ne).value, Z, 30);
      return Z + "ms " + fe;
    },
    toTransition: () => {},
  };
  return me;
}
is.applyToOptions = (n) => {
  const r = e0(n, 100, is);
  return ((n.ease = r.ease), (n.duration = vt(r.duration)), (n.type = "keyframes"), n);
};
const a0 = 5;
function Rp(n, r, o) {
  const a = Math.max(r - a0, 0);
  return lp(o - n(a), r - a);
}
function jl({
  keyframes: n,
  velocity: r = 0,
  power: o = 0.8,
  timeConstant: a = 325,
  bounceDamping: u = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: h,
  max: m,
  restDelta: y = 0.5,
  restSpeed: g,
}) {
  const v = n[0],
    w = { done: !1, value: v },
    P = (q) => (h !== void 0 && q < h) || (m !== void 0 && q > m),
    A = (q) => (h === void 0 ? m : m === void 0 || Math.abs(h - q) < Math.abs(m - q) ? h : m);
  let L = o * r;
  const R = v + L,
    D = f === void 0 ? R : f(R);
  D !== R && (L = D - v);
  const b = (q) => -L * Math.exp(-q / a),
    O = (q) => D + b(q),
    B = (q) => {
      const me = b(q),
        Z = O(q);
      ((w.done = Math.abs(me) <= y), (w.value = w.done ? D : Z));
    };
  let Y, oe;
  const ie = (q) => {
    P(w.value) &&
      ((Y = q),
      (oe = is({
        keyframes: [w.value, A(w.value)],
        velocity: Rp(O, q, w.value),
        damping: u,
        stiffness: d,
        restDelta: y,
        restSpeed: g,
      })));
  };
  return (
    ie(0),
    {
      calculatedDuration: null,
      next: (q) => {
        let me = !1;
        return (
          !oe && Y === void 0 && ((me = !0), B(q), ie(q)),
          Y !== void 0 && q >= Y ? oe.next(q - Y) : (!me && B(q), w)
        );
      },
    }
  );
}
function l0(n, r, o) {
  const a = [],
    u = o || En.mix || Mp,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let h = u(n[f], n[f + 1]);
    if (r) {
      const m = Array.isArray(r) ? r[f] || Et : r;
      h = Ai(m, h);
    }
    a.push(h);
  }
  return a;
}
function u0(n, r, { clamp: o = !0, ease: a, mixer: u } = {}) {
  const d = n.length;
  if ((lu(d === r.length), d === 1)) return () => r[0];
  if (d === 2 && r[0] === r[1]) return () => r[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (r = [...r].reverse()));
  const h = l0(r, a, u),
    m = h.length,
    y = (g) => {
      if (f && g < n[0]) return r[0];
      let v = 0;
      if (m > 1) for (; v < n.length - 2 && !(g < n[v + 1]); v++);
      const w = Ci(n[v], n[v + 1], g);
      return h[v](w);
    };
  return o ? (g) => y($t(n[0], n[d - 1], g)) : y;
}
function c0(n, r) {
  const o = n[n.length - 1];
  for (let a = 1; a <= r; a++) {
    const u = Ci(0, r, a);
    n.push(we(o, 1, u));
  }
}
function f0(n) {
  const r = [0];
  return (c0(r, n.length - 1), r);
}
function d0(n, r) {
  return n.map((o) => o * r);
}
function h0(n, r) {
  return n.map(() => r || yp).splice(0, n.length - 1);
}
function Si({ duration: n = 300, keyframes: r, times: o, ease: a = "easeInOut" }) {
  const u = Sv(a) ? a.map(zd) : zd(a),
    d = { done: !1, value: r[0] },
    f = d0(o && o.length === r.length ? o : f0(r), n),
    h = u0(f, r, { ease: Array.isArray(u) ? u : h0(r, u) });
  return { calculatedDuration: n, next: (m) => ((d.value = h(m)), (d.done = m >= n), d) };
}
const p0 = (n) => n !== null;
function ds(n, { repeat: r, repeatType: o = "loop" }, a, u = 1) {
  const d = n.filter(p0),
    h = u < 0 || (r && o !== "loop" && r % 2 === 1) ? 0 : d.length - 1;
  return !h || a === void 0 ? d[h] : a;
}
const m0 = { decay: jl, inertia: jl, tween: Si, keyframes: Si, spring: is };
function Vp(n) {
  typeof n.type == "string" && (n.type = m0[n.type]);
}
class yu {
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
  then(r, o) {
    return this.finished.then(r, o);
  }
}
const g0 = (n) => n / 100;
class os extends yu {
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
        var a, u;
        const { motionValue: o } = this.options;
        (o && o.updatedAt !== ot.now() && this.tick(ot.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(), (u = (a = this.options).onStop) == null || u.call(a)));
      }),
      (this.options = r),
      this.initAnimation(),
      this.play(),
      r.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: r } = this;
    Vp(r);
    const { type: o = Si, repeat: a = 0, repeatDelay: u = 0, repeatType: d, velocity: f = 0 } = r;
    let { keyframes: h } = r;
    const m = o || Si;
    m !== Si &&
      typeof h[0] != "number" &&
      ((this.mixKeyframes = Ai(g0, Mp(h[0], h[1]))), (h = [0, 100]));
    const y = m({ ...r, keyframes: h });
    (d === "mirror" &&
      (this.mirroredGenerator = m({ ...r, keyframes: [...h].reverse(), velocity: -f })),
      y.calculatedDuration === null && (y.calculatedDuration = gu(y)));
    const { calculatedDuration: g } = y;
    ((this.calculatedDuration = g),
      (this.resolvedDuration = g + u),
      (this.totalDuration = this.resolvedDuration * (a + 1) - u),
      (this.generator = y));
  }
  updateTime(r) {
    const o = Math.round(r - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = o);
  }
  tick(r, o = !1) {
    const {
      generator: a,
      totalDuration: u,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: h,
      calculatedDuration: m,
    } = this;
    if (this.startTime === null) return a.next(0);
    const {
      delay: y = 0,
      keyframes: g,
      repeat: v,
      repeatType: w,
      repeatDelay: P,
      type: A,
      onUpdate: L,
      finalKeyframe: R,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, r))
      : this.speed < 0 && (this.startTime = Math.min(r - u / this.speed, this.startTime)),
      o ? (this.currentTime = r) : this.updateTime(r));
    const D = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1),
      b = this.playbackSpeed >= 0 ? D < 0 : D > u;
    ((this.currentTime = Math.max(D, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = u));
    let O = this.currentTime,
      B = a;
    if (v) {
      const q = Math.min(this.currentTime, u) / h;
      let me = Math.floor(q),
        Z = q % 1;
      (!Z && q >= 1 && (Z = 1),
        Z === 1 && me--,
        (me = Math.min(me, v + 1)),
        !!(me % 2) &&
          (w === "reverse" ? ((Z = 1 - Z), P && (Z -= P / h)) : w === "mirror" && (B = f)),
        (O = $t(0, 1, Z) * h));
    }
    let Y;
    (b ? ((this.delayState.value = g[0]), (Y = this.delayState)) : (Y = B.next(O)),
      d && !b && (Y.value = d(Y.value)));
    let { done: oe } = Y;
    !b &&
      m !== null &&
      (oe = this.playbackSpeed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const ie =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && oe));
    return (
      ie && A !== jl && (Y.value = ds(g, this.options, R, this.speed)),
      L && L(Y.value),
      ie && this.finish(),
      Y
    );
  }
  then(r, o) {
    return this.finished.then(r, o);
  }
  get duration() {
    return Pt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: r = 0 } = this.options || {};
    return this.duration + Pt(r);
  }
  get time() {
    return Pt(this.currentTime);
  }
  set time(r) {
    ((r = vt(r)),
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
    const o = this.generator.next(r).value;
    return Rp((a) => this.generator.next(a).value, r, o);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(r) {
    const o = this.playbackSpeed !== r;
    (o && this.driver && this.updateTime(ot.now()),
      (this.playbackSpeed = r),
      o && this.driver && (this.time = Pt(this.currentTime)));
  }
  play() {
    var u, d;
    if (this.isStopped) return;
    const { driver: r = Jv, startTime: o } = this.options;
    (this.driver || (this.driver = r((f) => this.tick(f))),
      (d = (u = this.options).onPlay) == null || d.call(u));
    const a = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = a))
      : this.holdTime !== null
        ? (this.startTime = a - this.holdTime)
        : this.startTime || (this.startTime = o ?? a),
      this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"), this.updateTime(ot.now()), (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(), (this.state = "finished"), (this.holdTime = null));
  }
  finish() {
    var r, o;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (o = (r = this.options).onComplete) == null || o.call(r));
  }
  cancel() {
    var r, o;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (o = (r = this.options).onCancel) == null || o.call(r));
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
    var o;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
      (o = this.driver) == null || o.stop(),
      r.observe(this)
    );
  }
}
function y0(n) {
  for (let r = 1; r < n.length; r++) n[r] ?? (n[r] = n[r - 1]);
}
const $n = (n) => (n * 180) / Math.PI,
  Il = (n) => {
    const r = $n(Math.atan2(n[1], n[0]));
    return _l(r);
  },
  v0 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: Il,
    rotateZ: Il,
    skewX: (n) => $n(Math.atan(n[1])),
    skewY: (n) => $n(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  _l = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  Hd = Il,
  $d = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  Kd = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  x0 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: $d,
    scaleY: Kd,
    scale: (n) => ($d(n) + Kd(n)) / 2,
    rotateX: (n) => _l($n(Math.atan2(n[6], n[5]))),
    rotateY: (n) => _l($n(Math.atan2(-n[2], n[0]))),
    rotateZ: Hd,
    rotate: Hd,
    skewX: (n) => $n(Math.atan(n[4])),
    skewY: (n) => $n(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function zl(n) {
  return n.includes("scale") ? 1 : 0;
}
function bl(n, r) {
  if (!n || n === "none") return zl(r);
  const o = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let a, u;
  if (o) ((a = x0), (u = o));
  else {
    const h = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((a = v0), (u = h));
  }
  if (!u) return zl(r);
  const d = a[r],
    f = u[1].split(",").map(S0);
  return typeof d == "function" ? d(f) : f[d];
}
const w0 = (n, r) => {
  const { transform: o = "none" } = getComputedStyle(n);
  return bl(o, r);
};
function S0(n) {
  return parseFloat(n.trim());
}
const Mr = [
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
  Ar = new Set([...Mr, "pathRotation"]),
  Gd = (n) => n === Er || n === G,
  k0 = new Set(["x", "y", "z"]),
  T0 = Mr.filter((n) => !k0.has(n));
function C0(n) {
  const r = [];
  return (
    T0.forEach((o) => {
      const a = n.getValue(o);
      a !== void 0 && (r.push([o, a.get()]), a.set(o.startsWith("scale") ? 1 : 0));
    }),
    r
  );
}
const Pn = {
  width: ({ x: n }, { paddingLeft: r = "0", paddingRight: o = "0", boxSizing: a }) => {
    const u = n.max - n.min;
    return a === "border-box" ? u : u - parseFloat(r) - parseFloat(o);
  },
  height: ({ y: n }, { paddingTop: r = "0", paddingBottom: o = "0", boxSizing: a }) => {
    const u = n.max - n.min;
    return a === "border-box" ? u : u - parseFloat(r) - parseFloat(o);
  },
  top: (n, { top: r }) => parseFloat(r),
  left: (n, { left: r }) => parseFloat(r),
  bottom: ({ y: n }, { top: r }) => parseFloat(r) + (n.max - n.min),
  right: ({ x: n }, { left: r }) => parseFloat(r) + (n.max - n.min),
  x: (n, { transform: r }) => bl(r, "x"),
  y: (n, { transform: r }) => bl(r, "y"),
};
Pn.translateX = Pn.x;
Pn.translateY = Pn.y;
const Kn = new Set();
let Fl = !1,
  Ol = !1,
  Bl = !1;
function Lp() {
  if (Ol) {
    const n = Array.from(Kn).filter((a) => a.needsMeasurement),
      r = new Set(n.map((a) => a.element)),
      o = new Map();
    (r.forEach((a) => {
      const u = C0(a);
      u.length && (o.set(a, u), a.render());
    }),
      n.forEach((a) => a.measureInitialState()),
      r.forEach((a) => {
        a.render();
        const u = o.get(a);
        u &&
          u.forEach(([d, f]) => {
            var h;
            (h = a.getValue(d)) == null || h.set(f);
          });
      }),
      n.forEach((a) => a.measureEndState()),
      n.forEach((a) => {
        a.suspendedScrollY !== void 0 && window.scrollTo(0, a.suspendedScrollY);
      }));
  }
  ((Ol = !1), (Fl = !1), Kn.forEach((n) => n.complete(Bl)), Kn.clear());
}
function Dp() {
  Kn.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (Ol = !0));
  });
}
function P0() {
  ((Bl = !0), Dp(), Lp(), (Bl = !1));
}
class vu {
  constructor(r, o, a, u, d, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...r]),
      (this.onComplete = o),
      (this.name = a),
      (this.motionValue = u),
      (this.element = d),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Kn.add(this), Fl || ((Fl = !0), Se.read(Dp), Se.resolveKeyframes(Lp)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: r, name: o, element: a, motionValue: u } = this;
    if (r[0] === null) {
      const d = u == null ? void 0 : u.get(),
        f = r[r.length - 1];
      if (d !== void 0) r[0] = d;
      else if (a && o) {
        const h = a.readValue(o, f);
        h != null && (r[0] = h);
      }
      (r[0] === void 0 && (r[0] = f), u && d === void 0 && u.set(r[0]));
    }
    y0(r);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(r = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, r),
      Kn.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Kn.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const E0 = (n) => n.startsWith("--");
function Np(n, r, o) {
  E0(r) ? n.style.setProperty(r, o) : (n.style[r] = o);
}
const M0 = {};
function jp(n, r) {
  const o = ap(n);
  return () => M0[r] ?? o();
}
const A0 = jp(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Ip = jp(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  xi = ([n, r, o, a]) => `cubic-bezier(${n}, ${r}, ${o}, ${a})`,
  Xd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: xi([0, 0.65, 0.55, 1]),
    circOut: xi([0.55, 0, 1, 0.45]),
    backIn: xi([0.31, 0.01, 0.66, -0.59]),
    backOut: xi([0.33, 1.53, 0.69, 0.99]),
  };
function _p(n, r) {
  if (n)
    return typeof n == "function"
      ? Ip()
        ? Ap(n, r)
        : "ease-out"
      : vp(n)
        ? xi(n)
        : Array.isArray(n)
          ? n.map((o) => _p(o, r) || Xd.easeOut)
          : Xd[n];
}
function R0(
  n,
  r,
  o,
  {
    delay: a = 0,
    duration: u = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: h = "easeOut",
    times: m,
  } = {},
  y = void 0,
) {
  const g = { [r]: o };
  m && (g.offset = m);
  const v = _p(h, u);
  Array.isArray(v) && (g.easing = v);
  const w = {
    delay: a,
    duration: u,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (y && (w.pseudoElement = y), n.animate(g, w));
}
function zp(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function V0({ type: n, ...r }) {
  return zp(n) && Ip()
    ? n.applyToOptions(r)
    : (r.duration ?? (r.duration = 300), r.ease ?? (r.ease = "easeOut"), r);
}
class bp extends yu {
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
      element: o,
      name: a,
      keyframes: u,
      pseudoElement: d,
      allowFlatten: f = !1,
      finalKeyframe: h,
      onComplete: m,
    } = r;
    ((this.isPseudoElement = !!d),
      (this.allowFlatten = f),
      (this.options = r),
      lu(typeof r.type != "string"));
    const y = V0(r);
    ((this.animation = R0(o, a, u, y, d)),
      y.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const g = ds(u, this.options, h, this.speed);
          (this.updateMotionValue && this.updateMotionValue(g),
            Np(o, a, g),
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
    var r, o;
    (o = (r = this.animation).finish) == null || o.call(r);
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
    var o, a, u;
    const r = (o = this.options) == null ? void 0 : o.element;
    !this.isPseudoElement &&
      r != null &&
      r.isConnected &&
      ((u = (a = this.animation).commitStyles) == null || u.call(a));
  }
  get duration() {
    var o, a;
    const r =
      ((a = (o = this.animation.effect) == null ? void 0 : o.getComputedTiming) == null
        ? void 0
        : a.call(o).duration) || 0;
    return Pt(Number(r));
  }
  get iterationDuration() {
    const { delay: r = 0 } = this.options || {};
    return this.duration + Pt(r);
  }
  get time() {
    return Pt(Number(this.animation.currentTime) || 0);
  }
  set time(r) {
    const o = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = vt(r)),
      o && this.animation.pause());
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
  attachTimeline({ timeline: r, rangeStart: o, rangeEnd: a, observe: u }) {
    var d;
    return (
      this.allowFlatten &&
        ((d = this.animation.effect) == null || d.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      r && A0()
        ? ((this.animation.timeline = r),
          o && (this.animation.rangeStart = o),
          a && (this.animation.rangeEnd = a),
          Et)
        : u(this)
    );
  }
}
const Fp = { anticipate: pp, backInOut: hp, circInOut: gp };
function L0(n) {
  return n in Fp;
}
function D0(n) {
  typeof n.ease == "string" && L0(n.ease) && (n.ease = Fp[n.ease]);
}
const xl = 10;
class N0 extends bp {
  constructor(r) {
    (D0(r),
      Vp(r),
      super(r),
      r.startTime !== void 0 && r.autoplay !== !1 && (this.startTime = r.startTime),
      (this.options = r));
  }
  updateMotionValue(r) {
    const { motionValue: o, onUpdate: a, onComplete: u, element: d, ...f } = this.options;
    if (!o) return;
    if (r !== void 0) {
      o.set(r);
      return;
    }
    const h = new os({ ...f, autoplay: !1 }),
      m = Math.max(xl, ot.now() - this.startTime),
      y = $t(0, xl, m - xl),
      g = h.sample(m).value,
      { name: v } = this.options;
    (d && v && Np(d, v, g), o.setWithVelocity(h.sample(Math.max(0, m - y)).value, g, y), h.stop());
  }
}
const Qd = (n, r) =>
  r === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" && (_t.test(n) || n === "0") && !n.startsWith("url("))
      );
function j0(n) {
  const r = n[0];
  if (n.length === 1) return !0;
  for (let o = 0; o < n.length; o++) if (n[o] !== r) return !0;
}
function I0(n, r, o, a) {
  const u = n[0];
  if (u === null) return !1;
  if (r === "display" || r === "visibility") return !0;
  const d = n[n.length - 1],
    f = Qd(u, r),
    h = Qd(d, r);
  return !f || !h ? !1 : j0(n) || ((o === "spring" || zp(o)) && a);
}
function Ul(n) {
  ((n.duration = 0), (n.type = "keyframes"));
}
const Op = new Set(["opacity", "clipPath", "filter", "transform"]),
  _0 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function z0(n) {
  for (let r = 0; r < n.length; r++) if (typeof n[r] == "string" && _0.test(n[r])) return !0;
  return !1;
}
const b0 = new Set([
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
  F0 = ap(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function O0(n) {
  var v;
  const {
    motionValue: r,
    name: o,
    repeatDelay: a,
    repeatType: u,
    damping: d,
    type: f,
    keyframes: h,
  } = n;
  if (!(((v = r == null ? void 0 : r.owner) == null ? void 0 : v.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: y, transformTemplate: g } = r.owner.getProps();
  return (
    F0() &&
    o &&
    (Op.has(o) || (b0.has(o) && z0(h))) &&
    (o !== "transform" || !g) &&
    !y &&
    !a &&
    u !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const B0 = 40;
class U0 extends yu {
  constructor({
    autoplay: r = !0,
    delay: o = 0,
    type: a = "keyframes",
    repeat: u = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: h,
    name: m,
    motionValue: y,
    element: g,
    ...v
  }) {
    var A;
    (super(),
      (this.stop = () => {
        var L, R;
        (this._animation &&
          (this._animation.stop(), (L = this.stopTimeline) == null || L.call(this)),
          (R = this.keyframeResolver) == null || R.cancel());
      }),
      (this.createdAt = ot.now()));
    const w = {
        autoplay: r,
        delay: o,
        type: a,
        repeat: u,
        repeatDelay: d,
        repeatType: f,
        name: m,
        motionValue: y,
        element: g,
        ...v,
      },
      P = (g == null ? void 0 : g.KeyframeResolver) || vu;
    ((this.keyframeResolver = new P(
      h,
      (L, R, D) => this.onKeyframesResolved(L, R, w, !D),
      m,
      y,
      g,
    )),
      (A = this.keyframeResolver) == null || A.scheduleResolve());
  }
  onKeyframesResolved(r, o, a, u) {
    var D, b;
    this.keyframeResolver = void 0;
    const { name: d, type: f, velocity: h, delay: m, isHandoff: y, onUpdate: g } = a;
    this.resolvedAt = ot.now();
    let v = !0;
    I0(r, d, f, h) ||
      ((v = !1),
      (En.instantAnimations || !m) && (g == null || g(ds(r, a, o))),
      (r[0] = r[r.length - 1]),
      Ul(a),
      (a.repeat = 0));
    const P = {
        startTime: u
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > B0
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: o,
        ...a,
        keyframes: r,
      },
      A = v && !y && O0(P),
      L = (b = (D = P.motionValue) == null ? void 0 : D.owner) == null ? void 0 : b.current;
    let R;
    if (A)
      try {
        R = new N0({ ...P, element: L });
      } catch {
        R = new os(P);
      }
    else R = new os(P);
    (R.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Et),
      this.pendingTimeline &&
        ((this.stopTimeline = R.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = R));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(r, o) {
    return this.finished.finally(r).then(() => {});
  }
  get animation() {
    var r;
    return (
      this._animation || ((r = this.keyframeResolver) == null || r.resume(), P0()),
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
function Bp(n, r, o, a = 0, u = 1) {
  const d = Array.from(n)
      .sort((y, g) => y.sortNodePosition(g))
      .indexOf(r),
    f = n.size,
    h = (f - 1) * a;
  return typeof o == "function" ? o(d, f) : u === 1 ? d * a : h - d * a;
}
const Yd = 30,
  W0 = (n) => !isNaN(parseFloat(n));
class H0 {
  constructor(r, o = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (a) => {
        var d;
        const u = ot.now();
        if (
          (this.updatedAt !== u && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(a),
          this.current !== this.prev &&
            ((d = this.events.change) == null || d.notify(this.current), this.dependents))
        )
          for (const f of this.dependents) f.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(r),
      (this.owner = o.owner));
  }
  setCurrent(r) {
    ((this.current = r),
      (this.updatedAt = ot.now()),
      this.canTrackVelocity === null && r !== void 0 && (this.canTrackVelocity = W0(this.current)));
  }
  setPrevFrameValue(r = this.current) {
    ((this.prevFrameValue = r), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(r) {
    return this.on("change", r);
  }
  on(r, o) {
    this.events[r] || (this.events[r] = new uu());
    const a = this.events[r].add(o);
    return r === "change"
      ? () => {
          (a(),
            Se.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : a;
  }
  clearListeners() {
    for (const r in this.events) this.events[r].clear();
  }
  attach(r, o) {
    ((this.passiveEffect = r), (this.stopPassiveEffect = o));
  }
  set(r) {
    this.passiveEffect ? this.passiveEffect(r, this.updateAndNotify) : this.updateAndNotify(r);
  }
  setWithVelocity(r, o, a) {
    (this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = r),
      (this.prevUpdatedAt = this.updatedAt - a));
  }
  jump(r, o = !0) {
    (this.updateAndNotify(r),
      (this.prev = r),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
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
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const r = ot.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || r - this.updatedAt > Yd)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Yd);
    return lp(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(r) {
    return (
      this.stop(),
      new Promise((o) => {
        ((this.hasAnimated = !0),
          (this.animation = r(o)),
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
    var r, o;
    ((r = this.dependents) == null || r.clear(),
      (o = this.events.destroy) == null || o.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Pr(n, r) {
  return new H0(n, r);
}
function Up(n, r) {
  if (n != null && n.inherit && r) {
    const { inherit: o, ...a } = n;
    return { ...r, ...a };
  }
  return n;
}
function xu(n, r) {
  const o = (n == null ? void 0 : n[r]) ?? (n == null ? void 0 : n.default) ?? n;
  return o !== n ? Up(o, n) : o;
}
const $0 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  K0 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  G0 = { type: "keyframes", duration: 0.8 },
  X0 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Q0 = (n, { keyframes: r }) =>
    r.length > 2 ? G0 : Ar.has(n) ? (n.startsWith("scale") ? K0(r[1]) : $0) : X0,
  Y0 = new Set([
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
function q0(n) {
  for (const r in n) if (!Y0.has(r)) return !0;
  return !1;
}
const wu =
    (n, r, o, a = {}, u, d) =>
    (f) => {
      const h = xu(a, n) || {},
        m = h.delay || a.delay || 0;
      let { elapsed: y = 0 } = a;
      y = y - vt(m);
      const g = {
        keyframes: Array.isArray(o) ? o : [null, o],
        ease: "easeOut",
        velocity: r.getVelocity(),
        ...h,
        delay: -y,
        onUpdate: (w) => {
          (r.set(w), h.onUpdate && h.onUpdate(w));
        },
        onComplete: () => {
          (f(), h.onComplete && h.onComplete());
        },
        name: n,
        motionValue: r,
        element: d ? void 0 : u,
      };
      (q0(h) || Object.assign(g, Q0(n, g)),
        g.duration && (g.duration = vt(g.duration)),
        g.repeatDelay && (g.repeatDelay = vt(g.repeatDelay)),
        g.from !== void 0 && (g.keyframes[0] = g.from));
      let v = !1;
      if (
        ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
          (Ul(g), g.delay === 0 && (v = !0)),
        (En.instantAnimations ||
          En.skipAnimations ||
          (u != null && u.shouldSkipAnimations) ||
          h.skipAnimations) &&
          ((v = !0), Ul(g), (g.delay = 0)),
        (g.allowFlatten = !h.type && !h.ease),
        v && !d && r.get() !== void 0)
      ) {
        const w = ds(g.keyframes, h);
        if (w !== void 0) {
          Se.update(() => {
            (g.onUpdate(w), g.onComplete());
          });
          return;
        }
      }
      return h.isSync ? new os(g) : new U0(g);
    },
  Z0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function J0(n) {
  const r = Z0.exec(n);
  if (!r) return [,];
  const [, o, a, u] = r;
  return [`--${o ?? a}`, u];
}
function Wp(n, r, o = 1) {
  const [a, u] = J0(n);
  if (!a) return;
  const d = window.getComputedStyle(r).getPropertyValue(a);
  if (d) {
    const f = d.trim();
    return ip(f) ? parseFloat(f) : f;
  }
  return du(u) ? Wp(u, r, o + 1) : u;
}
function qd(n) {
  const r = [{}, {}];
  return (
    n == null ||
      n.values.forEach((o, a) => {
        ((r[0][a] = o.get()), (r[1][a] = o.getVelocity()));
      }),
    r
  );
}
function Su(n, r, o, a) {
  if (typeof r == "function") {
    const [u, d] = qd(a);
    r = r(o !== void 0 ? o : n.custom, u, d);
  }
  if ((typeof r == "string" && (r = n.variants && n.variants[r]), typeof r == "function")) {
    const [u, d] = qd(a);
    r = r(o !== void 0 ? o : n.custom, u, d);
  }
  return r;
}
function Gn(n, r, o) {
  const a = n.getProps();
  return Su(a, r, o !== void 0 ? o : a.custom, n);
}
const Hp = new Set(["width", "height", "top", "left", "right", "bottom", ...Mr]),
  Wl = (n) => Array.isArray(n);
function e1(n, r, o) {
  n.hasValue(r) ? n.getValue(r).set(o) : n.addValue(r, Pr(o));
}
function t1(n) {
  return Wl(n) ? n[n.length - 1] || 0 : n;
}
function n1(n, r) {
  const o = Gn(n, r);
  let { transitionEnd: a = {}, transition: u = {}, ...d } = o || {};
  d = { ...d, ...a };
  for (const f in d) {
    const h = t1(d[f]);
    e1(n, f, h);
  }
}
const Ye = (n) => !!(n && n.getVelocity);
function r1(n) {
  return !!(Ye(n) && n.add);
}
function Hl(n, r) {
  const o = n.getValue("willChange");
  if (r1(o)) return o.add(r);
  if (!o && En.WillChange) {
    const a = new En.WillChange("auto");
    (n.addValue("willChange", a), a.add(r));
  }
}
function ku(n) {
  return n.replace(/([A-Z])/g, (r) => `-${r.toLowerCase()}`);
}
const i1 = "framerAppearId",
  $p = "data-" + ku(i1);
function Kp(n) {
  return n.props[$p];
}
function o1({ protectedKeys: n, needsAnimating: r }, o) {
  const a = n.hasOwnProperty(o) && r[o] !== !0;
  return ((r[o] = !1), a);
}
function Gp(n, r, { delay: o = 0, transitionOverride: a, type: u } = {}) {
  let { transition: d, transitionEnd: f, ...h } = r;
  const m = n.getDefaultTransition();
  d = d ? Up(d, m) : m;
  const y = d == null ? void 0 : d.reduceMotion,
    g = d == null ? void 0 : d.skipAnimations;
  a && (d = a);
  const v = [],
    w = u && n.animationState && n.animationState.getState()[u],
    P = d == null ? void 0 : d.path;
  P && P.animateVisualElement(n, h, d, o, v);
  for (const A in h) {
    const L = n.getValue(A, n.latestValues[A] ?? null),
      R = h[A];
    if (R === void 0 || (w && o1(w, A))) continue;
    const D = { delay: o, ...xu(d || {}, A) };
    g && (D.skipAnimations = !0);
    const b = L.get();
    if (b !== void 0 && !L.isAnimating() && !Array.isArray(R) && R === b && !D.velocity) {
      Se.update(() => L.set(R));
      continue;
    }
    let O = !1;
    if (window.MotionHandoffAnimation) {
      const oe = Kp(n);
      if (oe) {
        const ie = window.MotionHandoffAnimation(oe, A, Se);
        ie !== null && ((D.startTime = ie), (O = !0));
      }
    }
    Hl(n, A);
    const B = y ?? n.shouldReduceMotion;
    L.start(wu(A, L, R, B && Hp.has(A) ? { type: !1 } : D, n, O));
    const Y = L.animation;
    Y && v.push(Y);
  }
  if (f) {
    const A = () =>
      Se.update(() => {
        f && n1(n, f);
      });
    v.length ? Promise.all(v).then(A) : A();
  }
  return v;
}
function $l(n, r, o = {}) {
  var m;
  const a = Gn(
    n,
    r,
    o.type === "exit" ? ((m = n.presenceContext) == null ? void 0 : m.custom) : void 0,
  );
  let { transition: u = n.getDefaultTransition() || {} } = a || {};
  o.transitionOverride && (u = o.transitionOverride);
  const d = a ? () => Promise.all(Gp(n, a, o)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (y = 0) => {
            const { delayChildren: g = 0, staggerChildren: v, staggerDirection: w } = u;
            return s1(n, r, y, g, v, w, o);
          }
        : () => Promise.resolve(),
    { when: h } = u;
  if (h) {
    const [y, g] = h === "beforeChildren" ? [d, f] : [f, d];
    return y().then(() => g());
  } else return Promise.all([d(), f(o.delay)]);
}
function s1(n, r, o = 0, a = 0, u = 0, d = 1, f) {
  const h = [];
  for (const m of n.variantChildren)
    (m.notify("AnimationStart", r),
      h.push(
        $l(m, r, {
          ...f,
          delay: o + (typeof a == "function" ? 0 : a) + Bp(n.variantChildren, m, a, u, d),
        }).then(() => m.notify("AnimationComplete", r)),
      ));
  return Promise.all(h);
}
function a1(n, r, o = {}) {
  n.notify("AnimationStart", r);
  let a;
  if (Array.isArray(r)) {
    const u = r.map((d) => $l(n, d, o));
    a = Promise.all(u);
  } else if (typeof r == "string") a = $l(n, r, o);
  else {
    const u = typeof r == "function" ? Gn(n, r, o.custom) : r;
    a = Promise.all(Gp(n, u, o));
  }
  return a.then(() => {
    n.notify("AnimationComplete", r);
  });
}
const l1 = { test: (n) => n === "auto", parse: (n) => n },
  Xp = (n) => (r) => r.test(n),
  Qp = [Er, G, Ht, tn, jv, Nv, l1],
  Zd = (n) => Qp.find(Xp(n));
function u1(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || sp(n) : !0;
}
const c1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function f1(n) {
  const [r, o] = n.slice(0, -1).split("(");
  if (r === "drop-shadow") return n;
  const [a] = o.match(hu) || [];
  if (!a) return n;
  const u = o.replace(a, "");
  let d = c1.has(r) ? 1 : 0;
  return (a !== o && (d *= 100), r + "(" + d + u + ")");
}
const d1 = /\b([a-z-]*)\(.*?\)/gu,
  Kl = {
    ..._t,
    getAnimatableNone: (n) => {
      const r = n.match(d1);
      return r ? r.map(f1).join(" ") : n;
    },
  },
  Gl = {
    ..._t,
    getAnimatableNone: (n) => {
      const r = _t.parse(n);
      return _t.createTransformer(n)(
        r.map((a) => (typeof a == "number" ? 0 : typeof a == "object" ? { ...a, alpha: 1 } : a)),
      );
    },
  },
  Jd = { ...Er, transform: Math.round },
  h1 = {
    rotate: tn,
    pathRotation: tn,
    rotateX: tn,
    rotateY: tn,
    rotateZ: tn,
    scale: $o,
    scaleX: $o,
    scaleY: $o,
    scaleZ: $o,
    skew: tn,
    skewX: tn,
    skewY: tn,
    distance: G,
    translateX: G,
    translateY: G,
    translateZ: G,
    x: G,
    y: G,
    z: G,
    perspective: G,
    transformPerspective: G,
    opacity: Pi,
    originX: Fd,
    originY: Fd,
    originZ: G,
  },
  ss = {
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
    ...h1,
    zIndex: Jd,
    fillOpacity: Pi,
    strokeOpacity: Pi,
    numOctaves: Jd,
  },
  p1 = {
    ...ss,
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
    filter: Kl,
    WebkitFilter: Kl,
    mask: Gl,
    WebkitMask: Gl,
  },
  Yp = (n) => p1[n],
  m1 = new Set([Kl, Gl]);
function qp(n, r) {
  let o = Yp(n);
  return (m1.has(o) || (o = _t), o.getAnimatableNone ? o.getAnimatableNone(r) : void 0);
}
const g1 = new Set(["auto", "none", "0"]);
function y1(n, r, o) {
  let a = 0,
    u;
  for (; a < n.length && !u;) {
    const d = n[a];
    (typeof d == "string" && !g1.has(d) && Cr(d).values.length && (u = n[a]), a++);
  }
  if (u && o) for (const d of r) n[d] = qp(o, u);
}
class v1 extends vu {
  constructor(r, o, a, u, d) {
    super(r, o, a, u, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: r, element: o, name: a } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let g = 0; g < r.length; g++) {
      let v = r[g];
      if (typeof v == "string" && ((v = v.trim()), du(v))) {
        const w = Wp(v, o.current);
        (w !== void 0 && (r[g] = w), g === r.length - 1 && (this.finalKeyframe = v));
      }
    }
    if ((this.resolveNoneKeyframes(), !Hp.has(a) || r.length !== 2)) return;
    const [u, d] = r,
      f = Zd(u),
      h = Zd(d),
      m = bd(u),
      y = bd(d);
    if (m !== y && Pn[a]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== h)
      if (Gd(f) && Gd(h))
        for (let g = 0; g < r.length; g++) {
          const v = r[g];
          typeof v == "string" && (r[g] = parseFloat(v));
        }
      else Pn[a] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: r, name: o } = this,
      a = [];
    for (let u = 0; u < r.length; u++) (r[u] === null || u1(r[u])) && a.push(u);
    a.length && y1(r, a, o);
  }
  measureInitialState() {
    const { element: r, unresolvedKeyframes: o, name: a } = this;
    if (!r || !r.current) return;
    (a === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Pn[a](r.measureViewportBox(), window.getComputedStyle(r.current))),
      (o[0] = this.measuredOrigin));
    const u = o[o.length - 1];
    u !== void 0 && r.getValue(a, u).jump(u, !1);
  }
  measureEndState() {
    var h;
    const { element: r, name: o, unresolvedKeyframes: a } = this;
    if (!r || !r.current) return;
    const u = r.getValue(o);
    u && u.jump(this.measuredOrigin, !1);
    const d = a.length - 1,
      f = a[d];
    ((a[d] = Pn[o](r.measureViewportBox(), window.getComputedStyle(r.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (h = this.removedTransforms) != null &&
        h.length &&
        this.removedTransforms.forEach(([m, y]) => {
          r.getValue(m).set(y);
        }),
      this.resolveNoneKeyframes());
  }
}
function Zp(n, r, o) {
  if (n == null) return [];
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    let a = document;
    const u = (o == null ? void 0 : o[n]) ?? a.querySelectorAll(n);
    return u ? Array.from(u) : [];
  }
  return Array.from(n).filter((a) => a != null);
}
const Xl = (n, r) => (r && typeof n == "number" ? r.transform(n) : n);
function x1(n) {
  return op(n) && "offsetHeight" in n && !("ownerSVGElement" in n);
}
const { schedule: Tu } = xp(queueMicrotask, !1),
  It = { x: !1, y: !1 };
function Jp() {
  return It.x || It.y;
}
function w1(n) {
  return n === "x" || n === "y"
    ? It[n]
      ? null
      : ((It[n] = !0),
        () => {
          It[n] = !1;
        })
    : It.x || It.y
      ? null
      : ((It.x = It.y = !0),
        () => {
          It.x = It.y = !1;
        });
}
function em(n, r) {
  const o = Zp(n),
    a = new AbortController(),
    u = { passive: !0, ...r, signal: a.signal };
  return [o, u, () => a.abort()];
}
function S1(n) {
  return !(n.pointerType === "touch" || Jp());
}
function k1(n, r, o = {}) {
  const [a, u, d] = em(n, o);
  return (
    a.forEach((f) => {
      let h = !1,
        m = !1,
        y;
      const g = () => {
          f.removeEventListener("pointerleave", A);
        },
        v = (R) => {
          (y && (y(R), (y = void 0)), g());
        },
        w = (R) => {
          ((h = !1),
            window.removeEventListener("pointerup", w),
            window.removeEventListener("pointercancel", w),
            m && ((m = !1), v(R)));
        },
        P = () => {
          ((h = !0),
            window.addEventListener("pointerup", w, u),
            window.addEventListener("pointercancel", w, u));
        },
        A = (R) => {
          if (R.pointerType !== "touch") {
            if (h) {
              m = !0;
              return;
            }
            v(R);
          }
        },
        L = (R) => {
          if (!S1(R)) return;
          m = !1;
          const D = r(f, R);
          typeof D == "function" && ((y = D), f.addEventListener("pointerleave", A, u));
        };
      (f.addEventListener("pointerenter", L, u), f.addEventListener("pointerdown", P, u));
    }),
    d
  );
}
const tm = (n, r) => (r ? (n === r ? !0 : tm(n, r.parentElement)) : !1),
  Cu = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  T1 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function C1(n) {
  return T1.has(n.tagName) || n.isContentEditable === !0;
}
const P1 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function E1(n) {
  return P1.has(n.tagName) || n.isContentEditable === !0;
}
const Qo = new WeakSet();
function eh(n) {
  return (r) => {
    r.key === "Enter" && n(r);
  };
}
function wl(n, r) {
  n.dispatchEvent(new PointerEvent("pointer" + r, { isPrimary: !0, bubbles: !0 }));
}
const M1 = (n, r) => {
  const o = n.currentTarget;
  if (!o) return;
  const a = eh(() => {
    if (Qo.has(o)) return;
    wl(o, "down");
    const u = eh(() => {
        wl(o, "up");
      }),
      d = () => wl(o, "cancel");
    (o.addEventListener("keyup", u, r), o.addEventListener("blur", d, r));
  });
  (o.addEventListener("keydown", a, r),
    o.addEventListener("blur", () => o.removeEventListener("keydown", a), r));
};
function th(n) {
  return Cu(n) && !Jp();
}
const nh = new WeakSet();
function A1(n, r, o = {}) {
  const [a, u, d] = em(n, o),
    f = (h) => {
      const m = h.currentTarget;
      if (!th(h) || nh.has(h)) return;
      (Qo.add(m), o.stopPropagation && nh.add(h));
      const y = r(m, h),
        g = (P, A) => {
          (window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", w),
            Qo.has(m) && Qo.delete(m),
            th(P) && typeof y == "function" && y(P, { success: A }));
        },
        v = (P) => {
          g(P, m === window || m === document || o.useGlobalTarget || tm(m, P.target));
        },
        w = (P) => {
          g(P, !1);
        };
      (window.addEventListener("pointerup", v, u), window.addEventListener("pointercancel", w, u));
    };
  return (
    a.forEach((h) => {
      ((o.useGlobalTarget ? window : h).addEventListener("pointerdown", f, u),
        x1(h) &&
          (h.addEventListener("focus", (y) => M1(y, u)),
          !C1(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0)));
    }),
    d
  );
}
function Pu(n) {
  return op(n) && "ownerSVGElement" in n;
}
const Yo = new WeakMap();
let Cn;
const nm = (n, r, o) => (a, u) =>
    u && u[0] ? u[0][n + "Size"] : Pu(a) && "getBBox" in a ? a.getBBox()[r] : a[o],
  R1 = nm("inline", "width", "offsetWidth"),
  V1 = nm("block", "height", "offsetHeight");
function L1({ target: n, borderBoxSize: r }) {
  var o;
  (o = Yo.get(n)) == null ||
    o.forEach((a) => {
      a(n, {
        get width() {
          return R1(n, r);
        },
        get height() {
          return V1(n, r);
        },
      });
    });
}
function D1(n) {
  n.forEach(L1);
}
function N1() {
  typeof ResizeObserver > "u" || (Cn = new ResizeObserver(D1));
}
function j1(n, r) {
  Cn || N1();
  const o = Zp(n);
  return (
    o.forEach((a) => {
      let u = Yo.get(a);
      (u || ((u = new Set()), Yo.set(a, u)), u.add(r), Cn == null || Cn.observe(a));
    }),
    () => {
      o.forEach((a) => {
        const u = Yo.get(a);
        (u == null || u.delete(r), (u != null && u.size) || Cn == null || Cn.unobserve(a));
      });
    }
  );
}
const qo = new Set();
let Sr;
function I1() {
  ((Sr = () => {
    const n = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    qo.forEach((r) => r(n));
  }),
    window.addEventListener("resize", Sr));
}
function _1(n) {
  return (
    qo.add(n),
    Sr || I1(),
    () => {
      (qo.delete(n),
        !qo.size &&
          typeof Sr == "function" &&
          (window.removeEventListener("resize", Sr), (Sr = void 0)));
    }
  );
}
function rh(n, r) {
  return typeof n == "function" ? _1(n) : j1(n, r);
}
function z1(n) {
  return Pu(n) && n.tagName === "svg";
}
const b1 = [...Qp, Fe, _t],
  F1 = (n) => b1.find(Xp(n)),
  ih = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  kr = () => ({ x: ih(), y: ih() }),
  oh = () => ({ min: 0, max: 0 }),
  Ue = () => ({ x: oh(), y: oh() }),
  O1 = new WeakMap();
function hs(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function Ei(n) {
  return typeof n == "string" || Array.isArray(n);
}
const Eu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Mu = ["initial", ...Eu];
function ps(n) {
  return hs(n.animate) || Mu.some((r) => Ei(n[r]));
}
function rm(n) {
  return !!(ps(n) || n.variants);
}
function B1(n, r, o) {
  for (const a in r) {
    const u = r[a],
      d = o[a];
    if (Ye(u)) n.addValue(a, u);
    else if (Ye(d)) n.addValue(a, Pr(u, { owner: n }));
    else if (d !== u)
      if (n.hasValue(a)) {
        const f = n.getValue(a);
        f.liveStyle === !0 ? f.jump(u) : f.hasAnimated || f.set(u);
      } else {
        const f = n.getStaticValue(a);
        n.addValue(a, Pr(f !== void 0 ? f : u, { owner: n }));
      }
  }
  for (const a in o) r[a] === void 0 && n.removeValue(a);
  return r;
}
const Ql = { current: null },
  im = { current: !1 },
  U1 = typeof window < "u";
function W1() {
  if (((im.current = !0), !!U1))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        r = () => (Ql.current = n.matches);
      (n.addEventListener("change", r), r());
    } else Ql.current = !1;
}
const sh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let as = {};
function om(n) {
  as = n;
}
function H1() {
  return as;
}
class $1 {
  scrapeMotionValuesFromProps(r, o, a) {
    return {};
  }
  constructor(
    {
      parent: r,
      props: o,
      presenceContext: a,
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
      (this.KeyframeResolver = vu),
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
        const P = ot.now();
        this.renderScheduledAt < P &&
          ((this.renderScheduledAt = P), Se.render(this.render, !1, !0));
      }));
    const { latestValues: y, renderState: g } = h;
    ((this.latestValues = y),
      (this.baseTarget = { ...y }),
      (this.initialValues = o.initial ? { ...y } : {}),
      (this.renderState = g),
      (this.parent = r),
      (this.props = o),
      (this.presenceContext = a),
      (this.depth = r ? r.depth + 1 : 0),
      (this.reducedMotionConfig = u),
      (this.skipAnimationsConfig = d),
      (this.options = m),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = ps(o)),
      (this.isVariantNode = rm(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(r && r.current)));
    const { willChange: v, ...w } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const P in w) {
      const A = w[P];
      y[P] !== void 0 && Ye(A) && A.set(y[P]);
    }
  }
  mount(r) {
    var o, a;
    if (this.hasBeenMounted)
      for (const u in this.initialValues)
        ((o = this.values.get(u)) == null || o.jump(this.initialValues[u]),
          (this.latestValues[u] = this.initialValues[u]));
    ((this.current = r),
      O1.set(r, this),
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
          : (im.current || W1(), (this.shouldReduceMotion = Ql.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (a = this.parent) == null || a.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var r;
    (this.projection && this.projection.unmount(),
      Mn(this.notifyUpdate),
      Mn(this.render),
      this.valueSubscriptions.forEach((o) => o()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (r = this.parent) == null || r.removeChild(this));
    for (const o in this.events) this.events[o].clear();
    for (const o in this.features) {
      const a = this.features[o];
      a && (a.unmount(), (a.isMounted = !1));
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
  bindToMotionValue(r, o) {
    if (
      (this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)(),
      o.accelerate && Op.has(r) && this.current instanceof HTMLElement)
    ) {
      const { factory: f, keyframes: h, times: m, ease: y, duration: g } = o.accelerate,
        v = new bp({
          element: this.current,
          name: r,
          keyframes: h,
          times: m,
          ease: y,
          duration: vt(g),
        }),
        w = f(v);
      this.valueSubscriptions.set(r, () => {
        (w(), v.cancel());
      });
      return;
    }
    const a = Ar.has(r);
    a && this.onBindTransform && this.onBindTransform();
    const u = o.on("change", (f) => {
      ((this.latestValues[r] = f),
        this.props.onUpdate && Se.preRender(this.notifyUpdate),
        a && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let d;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, r, o)),
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
    for (r in as) {
      const o = as[r];
      if (!o) continue;
      const { isEnabled: a, Feature: u } = o;
      if (
        (!this.features[r] && u && a(this.props) && (this.features[r] = new u(this)),
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ue();
  }
  getStaticValue(r) {
    return this.latestValues[r];
  }
  setStaticValue(r, o) {
    this.latestValues[r] = o;
  }
  update(r, o) {
    ((r.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = r),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o));
    for (let a = 0; a < sh.length; a++) {
      const u = sh[a];
      this.propEventSubscriptions[u] &&
        (this.propEventSubscriptions[u](), delete this.propEventSubscriptions[u]);
      const d = "on" + u,
        f = r[d];
      f && (this.propEventSubscriptions[u] = this.on(u, f));
    }
    ((this.prevMotionValues = B1(
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
    const o = this.getClosestVariantNode();
    if (o)
      return (o.variantChildren && o.variantChildren.add(r), () => o.variantChildren.delete(r));
  }
  addValue(r, o) {
    const a = this.values.get(r);
    o !== a &&
      (a && this.removeValue(r),
      this.bindToMotionValue(r, o),
      this.values.set(r, o),
      (this.latestValues[r] = o.get()));
  }
  removeValue(r) {
    this.values.delete(r);
    const o = this.valueSubscriptions.get(r);
    (o && (o(), this.valueSubscriptions.delete(r)),
      delete this.latestValues[r],
      this.removeValueFromRenderState(r, this.renderState));
  }
  hasValue(r) {
    return this.values.has(r);
  }
  getValue(r, o) {
    if (this.props.values && this.props.values[r]) return this.props.values[r];
    let a = this.values.get(r);
    return (
      a === void 0 &&
        o !== void 0 &&
        ((a = Pr(o === null ? void 0 : o, { owner: this })), this.addValue(r, a)),
      a
    );
  }
  readValue(r, o) {
    let a =
      this.latestValues[r] !== void 0 || !this.current
        ? this.latestValues[r]
        : (this.getBaseTargetFromProps(this.props, r) ??
          this.readValueFromInstance(this.current, r, this.options));
    return (
      a != null &&
        (typeof a == "string" && (ip(a) || sp(a))
          ? (a = parseFloat(a))
          : !F1(a) && _t.test(o) && (a = qp(r, o)),
        this.setBaseTarget(r, Ye(a) ? a.get() : a)),
      Ye(a) ? a.get() : a
    );
  }
  setBaseTarget(r, o) {
    this.baseTarget[r] = o;
  }
  getBaseTarget(r) {
    var d;
    const { initial: o } = this.props;
    let a;
    if (typeof o == "string" || typeof o == "object") {
      const f = Su(this.props, o, (d = this.presenceContext) == null ? void 0 : d.custom);
      f && (a = f[r]);
    }
    if (o && a !== void 0) return a;
    const u = this.getBaseTargetFromProps(this.props, r);
    return u !== void 0 && !Ye(u)
      ? u
      : this.initialValues[r] !== void 0 && a === void 0
        ? void 0
        : this.baseTarget[r];
  }
  on(r, o) {
    return (this.events[r] || (this.events[r] = new uu()), this.events[r].add(o));
  }
  notify(r, ...o) {
    this.events[r] && this.events[r].notify(...o);
  }
  scheduleRenderMicrotask() {
    Tu.render(this.render);
  }
}
class sm extends $1 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = v1));
  }
  sortInstanceNodePosition(r, o) {
    return r.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(r, o) {
    const a = r.style;
    return a ? a[o] : void 0;
  }
  removeValueFromRenderState(r, { vars: o, style: a }) {
    (delete o[r], delete a[r]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: r } = this.props;
    Ye(r) &&
      (this.childSubscription = r.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
class An {
  constructor(r) {
    ((this.isMounted = !1), (this.node = r));
  }
  update() {}
}
function am({ top: n, left: r, right: o, bottom: a }) {
  return { x: { min: r, max: o }, y: { min: n, max: a } };
}
function K1({ x: n, y: r }) {
  return { top: r.min, right: n.max, bottom: r.max, left: n.min };
}
function G1(n, r) {
  if (!r) return n;
  const o = r({ x: n.left, y: n.top }),
    a = r({ x: n.right, y: n.bottom });
  return { top: o.y, left: o.x, bottom: a.y, right: a.x };
}
function Sl(n) {
  return n === void 0 || n === 1;
}
function Yl({ scale: n, scaleX: r, scaleY: o }) {
  return !Sl(n) || !Sl(r) || !Sl(o);
}
function Wn(n) {
  return Yl(n) || lm(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function lm(n) {
  return ah(n.x) || ah(n.y);
}
function ah(n) {
  return n && n !== "0%";
}
function ls(n, r, o) {
  const a = n - o,
    u = r * a;
  return o + u;
}
function lh(n, r, o, a, u) {
  return (u !== void 0 && (n = ls(n, u, a)), ls(n, o, a) + r);
}
function ql(n, r = 0, o = 1, a, u) {
  ((n.min = lh(n.min, r, o, a, u)), (n.max = lh(n.max, r, o, a, u)));
}
function um(n, { x: r, y: o }) {
  (ql(n.x, r.translate, r.scale, r.originPoint), ql(n.y, o.translate, o.scale, o.originPoint));
}
const uh = 0.999999999999,
  ch = 1.0000000000001;
function X1(n, r, o, a = !1) {
  var h;
  const u = o.length;
  if (!u) return;
  r.x = r.y = 1;
  let d, f;
  for (let m = 0; m < u; m++) {
    ((d = o[m]), (f = d.projectionDelta));
    const { visualElement: y } = d.options;
    (y && y.props.style && y.props.style.display === "contents") ||
      (a &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        (Wt(n.x, -d.scroll.offset.x), Wt(n.y, -d.scroll.offset.y)),
      f && ((r.x *= f.x.scale), (r.y *= f.y.scale), um(n, f)),
      a &&
        Wn(d.latestValues) &&
        Zo(n, d.latestValues, (h = d.layout) == null ? void 0 : h.layoutBox));
  }
  (r.x < ch && r.x > uh && (r.x = 1), r.y < ch && r.y > uh && (r.y = 1));
}
function Wt(n, r) {
  ((n.min += r), (n.max += r));
}
function fh(n, r, o, a, u = 0.5) {
  const d = we(n.min, n.max, u);
  ql(n, r, o, d, a);
}
function dh(n, r) {
  return typeof n == "string" ? (parseFloat(n) / 100) * (r.max - r.min) : n;
}
function Zo(n, r, o) {
  const a = o ?? n;
  (fh(n.x, dh(r.x, a.x), r.scaleX, r.scale, r.originX),
    fh(n.y, dh(r.y, a.y), r.scaleY, r.scale, r.originY));
}
function cm(n, r) {
  return am(G1(n.getBoundingClientRect(), r));
}
function Q1(n, r, o) {
  const a = cm(n, o),
    { scroll: u } = r;
  return (u && (Wt(a.x, u.offset.x), Wt(a.y, u.offset.y)), a);
}
const Y1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  q1 = Mr.length;
function Z1(n, r, o) {
  let a = "",
    u = !0;
  for (let f = 0; f < q1; f++) {
    const h = Mr[f],
      m = n[h];
    if (m === void 0) continue;
    let y = !0;
    if (typeof m == "number") y = m === (h.startsWith("scale") ? 1 : 0);
    else {
      const g = parseFloat(m);
      y = h.startsWith("scale") ? g === 1 : g === 0;
    }
    if (!y || o) {
      const g = Xl(m, ss[h]);
      if (!y) {
        u = !1;
        const v = Y1[h] || h;
        a += `${v}(${g}) `;
      }
      o && (r[h] = g);
    }
  }
  const d = n.pathRotation;
  return (
    d && ((u = !1), (a += `rotate(${Xl(d, ss.pathRotation)}) `)),
    (a = a.trim()),
    o ? (a = o(r, u ? "" : a)) : u && (a = "none"),
    a
  );
}
function Au(n, r, o) {
  const { style: a, vars: u, transformOrigin: d } = n;
  let f = !1,
    h = !1;
  for (const m in r) {
    const y = r[m];
    if (Ar.has(m)) {
      f = !0;
      continue;
    } else if (Sp(m)) {
      u[m] = y;
      continue;
    } else {
      const g = Xl(y, ss[m]);
      m.startsWith("origin") ? ((h = !0), (d[m] = g)) : (a[m] = g);
    }
  }
  if (
    (r.transform ||
      (f || o ? (a.transform = Z1(r, n.transform, o)) : a.transform && (a.transform = "none")),
    h)
  ) {
    const { originX: m = "50%", originY: y = "50%", originZ: g = 0 } = d;
    a.transformOrigin = `${m} ${y} ${g}`;
  }
}
function fm(n, { style: r, vars: o }, a, u) {
  const d = n.style;
  let f;
  for (f in r) d[f] = r[f];
  u == null || u.applyProjectionStyles(d, a);
  for (f in o) d.setProperty(f, o[f]);
}
function hh(n, r) {
  return r.max === r.min ? 0 : (n / (r.max - r.min)) * 100;
}
const gi = {
    correct: (n, r) => {
      if (!r.target) return n;
      if (typeof n == "string")
        if (G.test(n)) n = parseFloat(n);
        else return n;
      const o = hh(n, r.target.x),
        a = hh(n, r.target.y);
      return `${o}% ${a}%`;
    },
  },
  J1 = {
    correct: (n, { treeScale: r, projectionDelta: o }) => {
      const a = n,
        u = _t.parse(n);
      if (u.length > 5) return a;
      const d = _t.createTransformer(n),
        f = typeof u[0] != "number" ? 1 : 0,
        h = o.x.scale * r.x,
        m = o.y.scale * r.y;
      ((u[0 + f] /= h), (u[1 + f] /= m));
      const y = we(h, m, 0.5);
      return (
        typeof u[2 + f] == "number" && (u[2 + f] /= y),
        typeof u[3 + f] == "number" && (u[3 + f] /= y),
        d(u)
      );
    },
  },
  Zl = {
    borderRadius: {
      ...gi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: gi,
    borderTopRightRadius: gi,
    borderBottomLeftRadius: gi,
    borderBottomRightRadius: gi,
    boxShadow: J1,
  };
function dm(n, { layout: r, layoutId: o }) {
  return (
    Ar.has(n) || n.startsWith("origin") || ((r || o !== void 0) && (!!Zl[n] || n === "opacity"))
  );
}
function Ru(n, r, o) {
  var f;
  const a = n.style,
    u = r == null ? void 0 : r.style,
    d = {};
  if (!a) return d;
  for (const h in a)
    (Ye(a[h]) ||
      (u && Ye(u[h])) ||
      dm(h, n) ||
      ((f = o == null ? void 0 : o.getValue(h)) == null ? void 0 : f.liveStyle) !== void 0) &&
      (d[h] = a[h]);
  return d;
}
function ex(n) {
  return window.getComputedStyle(n);
}
class tx extends sm {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = fm));
  }
  readValueFromInstance(r, o) {
    var a;
    if (Ar.has(o)) return (a = this.projection) != null && a.isProjecting ? zl(o) : w0(r, o);
    {
      const u = ex(r),
        d = (Sp(o) ? u.getPropertyValue(o) : u[o]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(r, { transformPagePoint: o }) {
    return cm(r, o);
  }
  build(r, o, a) {
    Au(r, o, a.transformTemplate);
  }
  scrapeMotionValuesFromProps(r, o, a) {
    return Ru(r, o, a);
  }
}
const nx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  rx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ix(n, r, o = 1, a = 0, u = !0) {
  n.pathLength = 1;
  const d = u ? nx : rx;
  ((n[d.offset] = `${-a}`), (n[d.array] = `${r} ${o}`));
}
const ox = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function hm(
  n,
  { attrX: r, attrY: o, attrScale: a, pathLength: u, pathSpacing: d = 1, pathOffset: f = 0, ...h },
  m,
  y,
  g,
) {
  if ((Au(n, h, y), m)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: v, style: w } = n;
  (v.transform && ((w.transform = v.transform), delete v.transform),
    (w.transform || v.transformOrigin) &&
      ((w.transformOrigin = v.transformOrigin ?? "50% 50%"), delete v.transformOrigin),
    w.transform &&
      ((w.transformBox = (g == null ? void 0 : g.transformBox) ?? "fill-box"),
      delete v.transformBox));
  for (const P of ox) v[P] !== void 0 && ((w[P] = v[P]), delete v[P]);
  (r !== void 0 && (v.x = r),
    o !== void 0 && (v.y = o),
    a !== void 0 && (v.scale = a),
    u !== void 0 && ix(v, u, d, f, !1));
}
const pm = new Set([
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
  mm = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function sx(n, r, o, a) {
  fm(n, r, void 0, a);
  for (const u in r.attrs) n.setAttribute(pm.has(u) ? u : ku(u), r.attrs[u]);
}
function gm(n, r, o) {
  const a = Ru(n, r, o);
  for (const u in n)
    if (Ye(n[u]) || Ye(r[u])) {
      const d = Mr.indexOf(u) !== -1 ? "attr" + u.charAt(0).toUpperCase() + u.substring(1) : u;
      a[d] = n[u];
    }
  return a;
}
class ax extends sm {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ue));
  }
  getBaseTargetFromProps(r, o) {
    return r[o];
  }
  readValueFromInstance(r, o) {
    if (Ar.has(o)) {
      const a = Yp(o);
      return (a && a.default) || 0;
    }
    return ((o = pm.has(o) ? o : ku(o)), r.getAttribute(o));
  }
  scrapeMotionValuesFromProps(r, o, a) {
    return gm(r, o, a);
  }
  build(r, o, a) {
    hm(r, o, this.isSVGTag, a.transformTemplate, a.style);
  }
  renderInstance(r, o, a, u) {
    sx(r, o, a, u);
  }
  mount(r) {
    ((this.isSVGTag = mm(r.tagName)), super.mount(r));
  }
}
const lx = Mu.length;
function ym(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const o = n.parent ? ym(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (o.initial = n.props.initial), o);
  }
  const r = {};
  for (let o = 0; o < lx; o++) {
    const a = Mu[o],
      u = n.props[a];
    (Ei(u) || u === !1) && (r[a] = u);
  }
  return r;
}
function vm(n, r) {
  if (!Array.isArray(r)) return !1;
  const o = r.length;
  if (o !== n.length) return !1;
  for (let a = 0; a < o; a++) if (r[a] !== n[a]) return !1;
  return !0;
}
const ux = [...Eu].reverse(),
  cx = Eu.length;
function fx(n) {
  return (r) => Promise.all(r.map(({ animation: o, options: a }) => a1(n, o, a)));
}
function dx(n) {
  let r = fx(n),
    o = ph(),
    a = !0,
    u = !1;
  const d = (y) => (g, v) => {
    var P;
    const w = Gn(
      n,
      v,
      y === "exit" ? ((P = n.presenceContext) == null ? void 0 : P.custom) : void 0,
    );
    if (w) {
      const { transition: A, transitionEnd: L, ...R } = w;
      g = { ...g, ...R, ...L };
    }
    return g;
  };
  function f(y) {
    r = y(n);
  }
  function h(y) {
    const { props: g } = n,
      v = ym(n.parent) || {},
      w = [],
      P = new Set();
    let A = {},
      L = 1 / 0;
    for (let D = 0; D < cx; D++) {
      const b = ux[D],
        O = o[b],
        B = g[b] !== void 0 ? g[b] : v[b],
        Y = Ei(B),
        oe = b === y ? O.isActive : null;
      oe === !1 && (L = D);
      let ie = B === v[b] && B !== g[b] && Y;
      if (
        (ie && (a || u) && n.manuallyAnimateOnMount && (ie = !1),
        (O.protectedKeys = { ...A }),
        (!O.isActive && oe === null) || (!B && !O.prevProp) || hs(B) || typeof B == "boolean")
      )
        continue;
      if (b === "exit" && O.isActive && oe !== !0) {
        O.prevResolvedValues && (A = { ...A, ...O.prevResolvedValues });
        continue;
      }
      const q = hx(O.prevProp, B);
      let me = q || (b === y && O.isActive && !ie && Y) || (D > L && Y),
        Z = !1;
      const fe = Array.isArray(B) ? B : [B];
      let ne = fe.reduce(d(b), {});
      oe === !1 && (ne = {});
      const { prevResolvedValues: Ae = {} } = O,
        xe = { ...Ae, ...ne },
        Le = (z) => {
          ((me = !0), P.has(z) && ((Z = !0), P.delete(z)), (O.needsAnimating[z] = !0));
          const H = n.getValue(z);
          H && (H.liveStyle = !1);
        };
      for (const z in xe) {
        const H = ne[z],
          U = Ae[z];
        if (A.hasOwnProperty(z)) continue;
        let T = !1;
        (Wl(H) && Wl(U) ? (T = !vm(H, U) || q) : (T = H !== U),
          T
            ? H != null
              ? Le(z)
              : P.add(z)
            : H !== void 0 && P.has(z)
              ? Le(z)
              : (O.protectedKeys[z] = !0));
      }
      ((O.prevProp = B),
        (O.prevResolvedValues = ne),
        O.isActive && (A = { ...A, ...ne }),
        (a || u) && n.blockInitialAnimation && (me = !1));
      const ge = ie && q;
      me &&
        (!ge || Z) &&
        w.push(
          ...fe.map((z) => {
            const H = { type: b };
            if (typeof z == "string" && (a || u) && !ge && n.manuallyAnimateOnMount && n.parent) {
              const { parent: U } = n,
                T = Gn(U, z);
              if (U.enteringChildren && T) {
                const { delayChildren: N } = T.transition || {};
                H.delay = Bp(U.enteringChildren, n, N);
              }
            }
            return { animation: z, options: H };
          }),
        );
    }
    if (P.size) {
      const D = {};
      if (typeof g.initial != "boolean") {
        const b = Gn(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        b && b.transition && (D.transition = b.transition);
      }
      (P.forEach((b) => {
        const O = n.getBaseTarget(b),
          B = n.getValue(b);
        (B && (B.liveStyle = !0), (D[b] = O ?? null));
      }),
        w.push({ animation: D }));
    }
    let R = !!w.length;
    return (
      a && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (R = !1),
      (a = !1),
      (u = !1),
      R ? r(w) : Promise.resolve()
    );
  }
  function m(y, g) {
    var w;
    if (o[y].isActive === g) return Promise.resolve();
    ((w = n.variantChildren) == null ||
      w.forEach((P) => {
        var A;
        return (A = P.animationState) == null ? void 0 : A.setActive(y, g);
      }),
      (o[y].isActive = g));
    const v = h(y);
    for (const P in o) o[P].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: h,
    setActive: m,
    setAnimateFunction: f,
    getState: () => o,
    reset: () => {
      ((o = ph()), (u = !0));
    },
  };
}
function hx(n, r) {
  return typeof r == "string" ? r !== n : Array.isArray(r) ? !vm(r, n) : !1;
}
function Un(n = !1) {
  return { isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function ph() {
  return {
    animate: Un(!0),
    whileInView: Un(),
    whileHover: Un(),
    whileTap: Un(),
    whileDrag: Un(),
    whileFocus: Un(),
    exit: Un(),
  };
}
function Jl(n, r) {
  ((n.min = r.min), (n.max = r.max));
}
function jt(n, r) {
  (Jl(n.x, r.x), Jl(n.y, r.y));
}
function mh(n, r) {
  ((n.translate = r.translate),
    (n.scale = r.scale),
    (n.originPoint = r.originPoint),
    (n.origin = r.origin));
}
const xm = 1e-4,
  px = 1 - xm,
  mx = 1 + xm,
  wm = 0.01,
  gx = 0 - wm,
  yx = 0 + wm;
function st(n) {
  return n.max - n.min;
}
function vx(n, r, o) {
  return Math.abs(n - r) <= o;
}
function gh(n, r, o, a = 0.5) {
  ((n.origin = a),
    (n.originPoint = we(r.min, r.max, n.origin)),
    (n.scale = st(o) / st(r)),
    (n.translate = we(o.min, o.max, n.origin) - n.originPoint),
    ((n.scale >= px && n.scale <= mx) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= gx && n.translate <= yx) || isNaN(n.translate)) && (n.translate = 0));
}
function ki(n, r, o, a) {
  (gh(n.x, r.x, o.x, a ? a.originX : void 0), gh(n.y, r.y, o.y, a ? a.originY : void 0));
}
function yh(n, r, o, a = 0) {
  const u = a ? we(o.min, o.max, a) : o.min;
  ((n.min = u + r.min), (n.max = n.min + st(r)));
}
function xx(n, r, o, a) {
  (yh(n.x, r.x, o.x, a == null ? void 0 : a.x), yh(n.y, r.y, o.y, a == null ? void 0 : a.y));
}
function vh(n, r, o, a = 0) {
  const u = a ? we(o.min, o.max, a) : o.min;
  ((n.min = r.min - u), (n.max = n.min + st(r)));
}
function us(n, r, o, a) {
  (vh(n.x, r.x, o.x, a == null ? void 0 : a.x), vh(n.y, r.y, o.y, a == null ? void 0 : a.y));
}
function xh(n, r, o, a, u) {
  return ((n -= r), (n = ls(n, 1 / o, a)), u !== void 0 && (n = ls(n, 1 / u, a)), n);
}
function wx(n, r = 0, o = 1, a = 0.5, u, d = n, f = n) {
  if (
    (Ht.test(r) && ((r = parseFloat(r)), (r = we(f.min, f.max, r / 100) - f.min)),
    typeof r != "number")
  )
    return;
  let h = we(d.min, d.max, a);
  (n === d && (h -= r), (n.min = xh(n.min, r, o, h, u)), (n.max = xh(n.max, r, o, h, u)));
}
function wh(n, r, [o, a, u], d, f) {
  wx(n, r[o], r[a], r[u], r.scale, d, f);
}
const Sx = ["x", "scaleX", "originX"],
  kx = ["y", "scaleY", "originY"];
function Sh(n, r, o, a) {
  (wh(n.x, r, Sx, o ? o.x : void 0, a ? a.x : void 0),
    wh(n.y, r, kx, o ? o.y : void 0, a ? a.y : void 0));
}
function kh(n) {
  return n.translate === 0 && n.scale === 1;
}
function Sm(n) {
  return kh(n.x) && kh(n.y);
}
function Th(n, r) {
  return n.min === r.min && n.max === r.max;
}
function Tx(n, r) {
  return Th(n.x, r.x) && Th(n.y, r.y);
}
function Ch(n, r) {
  return Math.round(n.min) === Math.round(r.min) && Math.round(n.max) === Math.round(r.max);
}
function km(n, r) {
  return Ch(n.x, r.x) && Ch(n.y, r.y);
}
function Ph(n) {
  return st(n.x) / st(n.y);
}
function Eh(n, r) {
  return n.translate === r.translate && n.scale === r.scale && n.originPoint === r.originPoint;
}
function Ut(n) {
  return [n("x"), n("y")];
}
function Cx(n, r, o) {
  let a = "";
  const u = n.x.translate / r.x,
    d = n.y.translate / r.y,
    f = (o == null ? void 0 : o.z) || 0;
  if (
    ((u || d || f) && (a = `translate3d(${u}px, ${d}px, ${f}px) `),
    (r.x !== 1 || r.y !== 1) && (a += `scale(${1 / r.x}, ${1 / r.y}) `),
    o)
  ) {
    const {
      transformPerspective: y,
      rotate: g,
      pathRotation: v,
      rotateX: w,
      rotateY: P,
      skewX: A,
      skewY: L,
    } = o;
    (y && (a = `perspective(${y}px) ${a}`),
      g && (a += `rotate(${g}deg) `),
      v && (a += `rotate(${v}deg) `),
      w && (a += `rotateX(${w}deg) `),
      P && (a += `rotateY(${P}deg) `),
      A && (a += `skewX(${A}deg) `),
      L && (a += `skewY(${L}deg) `));
  }
  const h = n.x.scale * r.x,
    m = n.y.scale * r.y;
  return ((h !== 1 || m !== 1) && (a += `scale(${h}, ${m})`), a || "none");
}
const Tm = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  Px = Tm.length,
  Mh = (n) => (typeof n == "string" ? parseFloat(n) : n),
  Ah = (n) => typeof n == "number" || G.test(n);
function Ex(n, r, o, a, u, d) {
  u
    ? ((n.opacity = we(0, o.opacity ?? 1, Mx(a))), (n.opacityExit = we(r.opacity ?? 1, 0, Ax(a))))
    : d && (n.opacity = we(r.opacity ?? 1, o.opacity ?? 1, a));
  for (let f = 0; f < Px; f++) {
    const h = Tm[f];
    let m = Rh(r, h),
      y = Rh(o, h);
    if (m === void 0 && y === void 0) continue;
    (m || (m = 0),
      y || (y = 0),
      m === 0 || y === 0 || Ah(m) === Ah(y)
        ? ((n[h] = Math.max(we(Mh(m), Mh(y), a), 0)), (Ht.test(y) || Ht.test(m)) && (n[h] += "%"))
        : (n[h] = y));
  }
  (r.rotate || o.rotate) && (n.rotate = we(r.rotate || 0, o.rotate || 0, a));
}
function Rh(n, r) {
  return n[r] !== void 0 ? n[r] : n.borderRadius;
}
const Mx = Cm(0, 0.5, mp),
  Ax = Cm(0.5, 0.95, Et);
function Cm(n, r, o) {
  return (a) => (a < n ? 0 : a > r ? 1 : o(Ci(n, r, a)));
}
function Rx(n, r, o) {
  const a = Ye(n) ? n : Pr(n);
  return (a.start(wu("", a, r, o)), a.animation);
}
function Mi(n, r, o, a = { passive: !0 }) {
  return (n.addEventListener(r, o, a), () => n.removeEventListener(r, o));
}
const Vx = (n, r) => n.depth - r.depth;
class Lx {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(r) {
    (au(this.children, r), (this.isDirty = !0));
  }
  remove(r) {
    (ts(this.children, r), (this.isDirty = !0));
  }
  forEach(r) {
    (this.isDirty && this.children.sort(Vx), (this.isDirty = !1), this.children.forEach(r));
  }
}
function Dx(n, r) {
  const o = ot.now(),
    a = ({ timestamp: u }) => {
      const d = u - o;
      d >= r && (Mn(a), n(d - r));
    };
  return (Se.setup(a, !0), () => Mn(a));
}
function Jo(n) {
  return Ye(n) ? n.get() : n;
}
class Nx {
  constructor() {
    this.members = [];
  }
  add(r) {
    au(this.members, r);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const a = this.members[o];
      if (a === r || a === this.lead || a === this.prevLead) continue;
      const u = a.instance;
      (!u || u.isConnected === !1) && !a.snapshot && (ts(this.members, a), a.unmount());
    }
    r.scheduleRender();
  }
  remove(r) {
    if ((ts(this.members, r), r === this.prevLead && (this.prevLead = void 0), r === this.lead)) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(r) {
    var o;
    for (let a = this.members.indexOf(r) - 1; a >= 0; a--) {
      const u = this.members[a];
      if (u.isPresent !== !1 && ((o = u.instance) == null ? void 0 : o.isConnected) !== !1)
        return (this.promote(u), !0);
    }
    return !1;
  }
  promote(r, o) {
    var u;
    const a = this.lead;
    if (r !== a && ((this.prevLead = a), (this.lead = r), r.show(), a)) {
      (a.updateSnapshot(), r.scheduleRender());
      const { layoutDependency: d } = a.options,
        { layoutDependency: f } = r.options;
      ((d === void 0 || d !== f) &&
        ((r.resumeFrom = a),
        o && (a.preserveOpacity = !0),
        a.snapshot &&
          ((r.snapshot = a.snapshot),
          (r.snapshot.latestValues = a.animationValues || a.latestValues)),
        (u = r.root) != null && u.isUpdating && (r.isLayoutDirty = !0)),
        r.options.crossfade === !1 && a.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((r) => {
      var o, a, u, d, f;
      ((a = (o = r.options).onExitComplete) == null || a.call(o),
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
const es = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  kl = ["", "X", "Y", "Z"],
  jx = 1e3;
let Ix = 0;
function Tl(n, r, o, a) {
  const { latestValues: u } = r;
  u[n] && ((o[n] = u[n]), r.setStaticValue(n, 0), a && (a[n] = 0));
}
function Pm(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: r } = n.options;
  if (!r) return;
  const o = Kp(r);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: u, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Se, !(u || d));
  }
  const { parent: a } = n;
  a && !a.hasCheckedOptimisedAppear && Pm(a);
}
function Em({
  attachResizeListener: n,
  defaultParent: r,
  measureScroll: o,
  checkIsScrollRoot: a,
  resetTransform: u,
}) {
  return class {
    constructor(f = {}, h = r == null ? void 0 : r()) {
      ((this.id = Ix++),
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
            this.nodes.forEach(bx),
            this.nodes.forEach(Hx),
            this.nodes.forEach($x),
            this.nodes.forEach(Fx));
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
      this.root === this && (this.nodes = new Lx());
    }
    addEventListener(f, h) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new uu()),
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
      ((this.isSVG = Pu(f) && !z1(f)), (this.instance = f));
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
        const w = () => (this.root.updateBlockedByResize = !1);
        (Se.read(() => {
          v = window.innerWidth;
        }),
          n(f, () => {
            const P = window.innerWidth;
            P !== v &&
              ((v = P),
              (this.root.updateBlockedByResize = !0),
              g && g(),
              (g = Dx(w, 250)),
              es.hasAnimatedSinceResize &&
                ((es.hasAnimatedSinceResize = !1), this.nodes.forEach(Dh)));
          }));
      }
      (h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          y &&
          (h || m) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: g, hasLayoutChanged: v, hasRelativeLayoutChanged: w, layout: P }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const A = this.options.transition || y.getDefaultTransition() || Yx,
                { onLayoutAnimationStart: L, onLayoutAnimationComplete: R } = y.getProps(),
                D = !this.targetLayout || !km(this.targetLayout, P),
                b = !v && w;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                b ||
                (v && (D || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const O = { ...xu(A, "layout"), onPlay: L, onComplete: R };
                ((y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((O.delay = 0), (O.type = !1)),
                  this.startAnimation(O),
                  this.setAnimationOrigin(g, b, O.path));
              } else
                (v || Dh(this),
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
        Mn(this.updateProjection));
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Kx), this.animationId++);
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
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Pm(this),
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
          m && this.nodes.forEach(Bx),
          this.nodes.forEach(Vh));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Lh);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Ux),
            this.nodes.forEach(Wx),
            this.nodes.forEach(_x),
            this.nodes.forEach(zx))
          : this.nodes.forEach(Lh),
        this.clearAllSnapshots());
      const h = ot.now();
      ((Qe.delta = $t(0, 1e3 / 60, h - Qe.timestamp)),
        (Qe.timestamp = h),
        (Qe.isProcessing = !0),
        pl.update.process(Qe),
        pl.preRender.process(Qe),
        pl.render.process(Qe),
        (Qe.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Tu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Ox), this.sharedNodes.forEach(Gx));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), Se.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Se.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !st(this.snapshot.measuredBox.x) &&
          !st(this.snapshot.measuredBox.y) &&
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
        this.layoutCorrected || (this.layoutCorrected = Ue()),
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
        const m = a(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: m,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!u) return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !Sm(this.projectionDelta),
        m = this.getTransformTemplate(),
        y = m ? m(this.latestValues, "") : void 0,
        g = y !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (h || Wn(this.latestValues) || g) &&
        (u(this.instance, y), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let m = this.removeElementScroll(h);
      return (
        f && (m = this.removeTransform(m)),
        qx(m),
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
      if (!f) return Ue();
      const h = f.measureViewportBox();
      if (!(((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(Zx))) {
        const { scroll: g } = this.root;
        g && (Wt(h.x, g.offset.x), Wt(h.y, g.offset.y));
      }
      return h;
    }
    removeElementScroll(f) {
      var m;
      const h = Ue();
      if ((jt(h, f), (m = this.scroll) != null && m.wasRoot)) return h;
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y],
          { scroll: v, options: w } = g;
        g !== this.root &&
          v &&
          w.layoutScroll &&
          (v.wasRoot && jt(h, f), Wt(h.x, v.offset.x), Wt(h.y, v.offset.y));
      }
      return h;
    }
    applyTransform(f, h = !1, m) {
      var g, v;
      const y = m || Ue();
      jt(y, f);
      for (let w = 0; w < this.path.length; w++) {
        const P = this.path[w];
        (!h &&
          P.options.layoutScroll &&
          P.scroll &&
          P !== P.root &&
          (Wt(y.x, -P.scroll.offset.x), Wt(y.y, -P.scroll.offset.y)),
          Wn(P.latestValues) &&
            Zo(y, P.latestValues, (g = P.layout) == null ? void 0 : g.layoutBox));
      }
      return (
        Wn(this.latestValues) &&
          Zo(y, this.latestValues, (v = this.layout) == null ? void 0 : v.layoutBox),
        y
      );
    }
    removeTransform(f) {
      var m;
      const h = Ue();
      jt(h, f);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        if (!Wn(g.latestValues)) continue;
        let v;
        (g.instance &&
          (Yl(g.latestValues) && g.updateSnapshot(), (v = Ue()), jt(v, g.measurePageBox())),
          Sh(h, g.latestValues, (m = g.snapshot) == null ? void 0 : m.layoutBox, v));
      }
      return (Wn(this.latestValues) && Sh(h, this.latestValues), h);
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
        this.relativeParent.resolvedRelativeTargetAt !== Qe.timestamp &&
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
      this.resolvedRelativeTargetAt = Qe.timestamp;
      const w = this.getClosestProjectingParent();
      (w &&
        this.linkedParentVersion !== w.layoutVersion &&
        !w.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && w && w.layout
            ? this.createRelativeTarget(w, this.layout.layoutBox, w.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = Ue()), (this.targetWithTransforms = Ue())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              xx(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : jt(this.target, this.layout.layoutBox),
                um(this.target, this.targetDelta))
              : jt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            w &&
            !!w.resumingFrom == !!this.resumingFrom &&
            !w.options.layoutScroll &&
            w.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(w, this.target, w.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Yl(this.parent.latestValues) || lm(this.parent.latestValues)))
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
        (this.relativeTarget = Ue()),
        (this.relativeTargetOrigin = Ue()),
        us(this.relativeTargetOrigin, h, m, this.options.layoutAnchor || void 0),
        jt(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var A;
      const f = this.getLead(),
        h = !!this.resumingFrom || this !== f;
      let m = !0;
      if (
        ((this.isProjectionDirty || ((A = this.parent) != null && A.isProjectionDirty)) && (m = !1),
        h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
        this.resolvedRelativeTargetAt === Qe.timestamp && (m = !1),
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
      jt(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x,
        w = this.treeScale.y;
      (X1(this.layoutCorrected, this.treeScale, this.path, h),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Ue())));
      const { target: P } = f;
      if (!P) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (mh(this.prevProjectionDelta.x, this.projectionDelta.x),
          mh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ki(this.projectionDelta, this.layoutCorrected, P, this.latestValues),
        (this.treeScale.x !== v ||
          this.treeScale.y !== w ||
          !Eh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Eh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
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
      ((this.prevProjectionDelta = kr()),
        (this.projectionDelta = kr()),
        (this.projectionDeltaWithTransform = kr()));
    }
    setAnimationOrigin(f, h = !1, m) {
      const y = this.snapshot,
        g = y ? y.latestValues : {},
        v = { ...this.latestValues },
        w = kr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !h));
      const P = Ue(),
        A = y ? y.source : void 0,
        L = this.layout ? this.layout.source : void 0,
        R = A !== L,
        D = this.getStack(),
        b = !D || D.members.length <= 1,
        O = !!(R && !b && this.options.crossfade === !0 && !this.path.some(Qx));
      this.animationProgress = 0;
      let B;
      const Y = m == null ? void 0 : m.interpolateProjection(f);
      ((this.mixTargetDelta = (oe) => {
        const ie = oe / 1e3,
          q = Y == null ? void 0 : Y(ie);
        (q
          ? ((w.x.translate = q.x),
            (w.x.scale = we(f.x.scale, 1, ie)),
            (w.x.origin = f.x.origin),
            (w.x.originPoint = f.x.originPoint),
            (w.y.translate = q.y),
            (w.y.scale = we(f.y.scale, 1, ie)),
            (w.y.origin = f.y.origin),
            (w.y.originPoint = f.y.originPoint))
          : (Nh(w.x, f.x, ie), Nh(w.y, f.y, ie)),
          this.setTargetDelta(w),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (us(
              P,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            Xx(this.relativeTarget, this.relativeTargetOrigin, P, ie),
            B && Tx(this.relativeTarget, B) && (this.isProjectionDirty = !1),
            B || (B = Ue()),
            jt(B, this.relativeTarget)),
          R && ((this.animationValues = v), Ex(v, g, this.latestValues, ie, O, b)),
          q &&
            q.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = v),
            (this.animationValues.pathRotation = q.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = ie));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      var h, m, y;
      (this.notifyListeners("animationStart"),
        (h = this.currentAnimation) == null || h.stop(),
        (y = (m = this.resumingFrom) == null ? void 0 : m.currentAnimation) == null || y.stop(),
        this.pendingAnimation && (Mn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Se.update(() => {
          ((es.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Pr(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = Rx(this.motionValue, [0, 1e3], {
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
        (this.mixTargetDelta && this.mixTargetDelta(jx), this.currentAnimation.stop()),
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
          Mm(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          m = this.target || Ue();
          const v = st(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + v));
          const w = st(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + w));
        }
        (jt(h, m), Zo(h, g), ki(this.projectionDeltaWithTransform, this.layoutCorrected, h, g));
      }
    }
    registerSharedNode(f, h) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new Nx()),
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
      m.z && Tl("z", f, y, this.animationValues);
      for (let g = 0; g < kl.length; g++)
        (Tl(`rotate${kl[g]}`, f, y, this.animationValues),
          Tl(`skew${kl[g]}`, f, y, this.animationValues));
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
          (f.pointerEvents = Jo(h == null ? void 0 : h.pointerEvents) || ""),
          (f.transform = m ? m(this.latestValues, "") : "none"));
        return;
      }
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        (this.options.layoutId &&
          ((f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (f.pointerEvents = Jo(h == null ? void 0 : h.pointerEvents) || "")),
          this.hasProjected &&
            !Wn(this.latestValues) &&
            ((f.transform = m ? m({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const g = y.animationValues || y.latestValues;
      this.applyTransformsToTarget();
      let v = Cx(this.projectionDeltaWithTransform, this.treeScale, g);
      (m && (v = m(g, v)), (f.transform = v));
      const { x: w, y: P } = this.projectionDelta;
      ((f.transformOrigin = `${w.origin * 100}% ${P.origin * 100}% 0`),
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
      for (const A in Zl) {
        if (g[A] === void 0) continue;
        const { correct: L, applyTo: R, isCSSVariable: D } = Zl[A],
          b = v === "none" ? g[A] : L(g[A], y);
        if (R) {
          const O = R.length;
          for (let B = 0; B < O; B++) f[R[B]] = b;
        } else D ? (this.options.visualElement.renderState.vars[A] = b) : (f[A] = b);
      }
      this.options.layoutId &&
        (f.pointerEvents = y === this ? Jo(h == null ? void 0 : h.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => {
        var h;
        return (h = f.currentAnimation) == null ? void 0 : h.stop();
      }),
        this.root.nodes.forEach(Vh),
        this.root.sharedNodes.clear());
    }
  };
}
function _x(n) {
  n.updateLayout();
}
function zx(n) {
  var o;
  const r = ((o = n.resumeFrom) == null ? void 0 : o.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && r && n.hasListeners("didUpdate")) {
    const { layoutBox: a, measuredBox: u } = n.layout,
      { animationType: d } = n.options,
      f = r.source !== n.layout.source;
    if (d === "size")
      Ut((v) => {
        const w = f ? r.measuredBox[v] : r.layoutBox[v],
          P = st(w);
        ((w.min = a[v].min), (w.max = w.min + P));
      });
    else if (d === "x" || d === "y") {
      const v = d === "x" ? "y" : "x";
      Jl(f ? r.measuredBox[v] : r.layoutBox[v], a[v]);
    } else
      Mm(d, r.layoutBox, a) &&
        Ut((v) => {
          const w = f ? r.measuredBox[v] : r.layoutBox[v],
            P = st(a[v]);
          ((w.max = w.min + P),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[v].max = n.relativeTarget[v].min + P)));
        });
    const h = kr();
    ki(h, a, r.layoutBox);
    const m = kr();
    f ? ki(m, n.applyTransform(u, !0), r.measuredBox) : ki(m, a, r.layoutBox);
    const y = !Sm(h);
    let g = !1;
    if (!n.resumeFrom) {
      const v = n.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: w, layout: P } = v;
        if (w && P) {
          const A = n.options.layoutAnchor || void 0,
            L = Ue();
          us(L, r.layoutBox, w.layoutBox, A);
          const R = Ue();
          (us(R, a, P.layoutBox, A),
            km(L, R) || (g = !0),
            v.options.layoutRoot &&
              ((n.relativeTarget = R), (n.relativeTargetOrigin = L), (n.relativeParent = v)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: a,
      snapshot: r,
      delta: m,
      layoutDelta: h,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: g,
    });
  } else if (n.isLead()) {
    const { onExitComplete: a } = n.options;
    a && a();
  }
  n.options.transition = void 0;
}
function bx(n) {
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
function Fx(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function Ox(n) {
  n.clearSnapshot();
}
function Vh(n) {
  n.clearMeasurements();
}
function Bx(n) {
  ((n.isLayoutDirty = !0), n.updateLayout());
}
function Lh(n) {
  n.isLayoutDirty = !1;
}
function Ux(n) {
  n.isAnimationBlocked &&
    n.layout &&
    !n.isLayoutDirty &&
    ((n.snapshot = n.layout), (n.isLayoutDirty = !0));
}
function Wx(n) {
  const { visualElement: r } = n.options;
  (r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function Dh(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function Hx(n) {
  n.resolveTargetDelta();
}
function $x(n) {
  n.calcProjection();
}
function Kx(n) {
  n.resetSkewAndRotation();
}
function Gx(n) {
  n.removeLeadSnapshot();
}
function Nh(n, r, o) {
  ((n.translate = we(r.translate, 0, o)),
    (n.scale = we(r.scale, 1, o)),
    (n.origin = r.origin),
    (n.originPoint = r.originPoint));
}
function jh(n, r, o, a) {
  ((n.min = we(r.min, o.min, a)), (n.max = we(r.max, o.max, a)));
}
function Xx(n, r, o, a) {
  (jh(n.x, r.x, o.x, a), jh(n.y, r.y, o.y, a));
}
function Qx(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const Yx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ih = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  _h = Ih("applewebkit/") && !Ih("chrome/") ? Math.round : Et;
function zh(n) {
  ((n.min = _h(n.min)), (n.max = _h(n.max)));
}
function qx(n) {
  (zh(n.x), zh(n.y));
}
function Mm(n, r, o) {
  return n === "position" || (n === "preserve-aspect" && !vx(Ph(r), Ph(o), 0.2));
}
function Zx(n) {
  var r;
  return n !== n.root && ((r = n.scroll) == null ? void 0 : r.wasRoot);
}
const Jx = Em({
    attachResizeListener: (n, r) => Mi(n, "resize", r),
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
  Cl = { current: void 0 },
  Am = Em({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!Cl.current) {
        const n = new Jx({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (Cl.current = n));
      }
      return Cl.current;
    },
    resetTransform: (n, r) => {
      n.style.transform = r !== void 0 ? r : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  Rm = J.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
function ew(n = !0) {
  const r = J.useContext(su);
  if (r === null) return [!0, null];
  const { isPresent: o, onExitComplete: a, register: u } = r,
    d = J.useId();
  J.useEffect(() => {
    if (n) return u(d);
  }, [n]);
  const f = J.useCallback(() => n && a && a(d), [d, a, n]);
  return !o && a ? [!1, f] : [!0];
}
const Vm = J.createContext({ strict: !1 }),
  bh = {
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
let Fh = !1;
function tw() {
  if (Fh) return;
  const n = {};
  for (const r in bh) n[r] = { isEnabled: (o) => bh[r].some((a) => !!o[a]) };
  (om(n), (Fh = !0));
}
function Lm() {
  return (tw(), H1());
}
function nw(n) {
  const r = Lm();
  for (const o in n) r[o] = { ...r[o], ...n[o] };
  om(r);
}
const rw = new Set([
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
function cs(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    rw.has(n)
  );
}
let Dm = (n) => !cs(n);
function iw(n) {
  typeof n == "function" && (Dm = (r) => (r.startsWith("on") ? !cs(r) : n(r)));
}
try {
  iw(require("@emotion/is-prop-valid").default);
} catch {}
function ow(n, r, o) {
  const a = {};
  for (const u in n)
    (u === "values" && typeof n.values == "object") ||
      Ye(n[u]) ||
      ((Dm(u) ||
        (o === !0 && cs(u)) ||
        (!r && !cs(u)) ||
        (n.draggable && u.startsWith("onDrag"))) &&
        (a[u] = n[u]));
  return a;
}
const ms = J.createContext({});
function sw(n, r) {
  if (ps(n)) {
    const { initial: o, animate: a } = n;
    return { initial: o === !1 || Ei(o) ? o : void 0, animate: Ei(a) ? a : void 0 };
  }
  return n.inherit !== !1 ? r : {};
}
function aw(n) {
  const { initial: r, animate: o } = sw(n, J.useContext(ms));
  return J.useMemo(() => ({ initial: r, animate: o }), [Oh(r), Oh(o)]);
}
function Oh(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const Vu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Nm(n, r, o) {
  for (const a in r) !Ye(r[a]) && !dm(a, o) && (n[a] = r[a]);
}
function lw({ transformTemplate: n }, r) {
  return J.useMemo(() => {
    const o = Vu();
    return (Au(o, r, n), Object.assign({}, o.vars, o.style));
  }, [r]);
}
function uw(n, r) {
  const o = n.style || {},
    a = {};
  return (Nm(a, o, n), Object.assign(a, lw(n, r)), a);
}
function cw(n, r) {
  const o = {},
    a = uw(n, r);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((o.draggable = !1),
      (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
      (a.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (o.tabIndex = 0),
    (o.style = a),
    o
  );
}
const jm = () => ({ ...Vu(), attrs: {} });
function fw(n, r, o, a) {
  const u = J.useMemo(() => {
    const d = jm();
    return (hm(d, r, mm(a), n.transformTemplate, n.style), { ...d.attrs, style: { ...d.style } });
  }, [r]);
  if (n.style) {
    const d = {};
    (Nm(d, n.style, n), (u.style = { ...d, ...u.style }));
  }
  return u;
}
const dw = [
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
  return typeof n != "string" || n.includes("-") ? !1 : !!(dw.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function hw(n, r, o, { latestValues: a }, u, d = !1, f) {
  const m = ((f ?? Lu(n)) ? fw : cw)(r, a, u, n),
    y = ow(r, typeof n == "string", d),
    g = n !== J.Fragment ? { ...y, ...m, ref: o } : {},
    { children: v } = r,
    w = J.useMemo(() => (Ye(v) ? v.get() : v), [v]);
  return J.createElement(n, { ...g, children: w });
}
function pw({ scrapeMotionValuesFromProps: n, createRenderState: r }, o, a, u) {
  return { latestValues: mw(o, a, u, n), renderState: r() };
}
function mw(n, r, o, a) {
  const u = {},
    d = a(n, {});
  for (const w in d) u[w] = Jo(d[w]);
  let { initial: f, animate: h } = n;
  const m = ps(n),
    y = rm(n);
  r &&
    y &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = r.initial), h === void 0 && (h = r.animate));
  let g = o ? o.initial === !1 : !1;
  g = g || f === !1;
  const v = g ? h : f;
  if (v && typeof v != "boolean" && !hs(v)) {
    const w = Array.isArray(v) ? v : [v];
    for (let P = 0; P < w.length; P++) {
      const A = Su(n, w[P]);
      if (A) {
        const { transitionEnd: L, transition: R, ...D } = A;
        for (const b in D) {
          let O = D[b];
          if (Array.isArray(O)) {
            const B = g ? O.length - 1 : 0;
            O = O[B];
          }
          O !== null && (u[b] = O);
        }
        for (const b in L) u[b] = L[b];
      }
    }
  }
  return u;
}
const Im = (n) => (r, o) => {
    const a = J.useContext(ms),
      u = J.useContext(su),
      d = () => pw(n, r, a, u);
    return o ? d() : hv(d);
  },
  gw = Im({ scrapeMotionValuesFromProps: Ru, createRenderState: Vu }),
  yw = Im({ scrapeMotionValuesFromProps: gm, createRenderState: jm }),
  vw = Symbol.for("motionComponentSymbol");
function xw(n, r, o) {
  const a = J.useRef(o);
  J.useInsertionEffect(() => {
    a.current = o;
  });
  const u = J.useRef(null);
  return J.useCallback(
    (d) => {
      var h;
      (d && ((h = n.onMount) == null || h.call(n, d)), r && (d ? r.mount(d) : r.unmount()));
      const f = a.current;
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
const _m = J.createContext({});
function xr(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function ww(n, r, o, a, u, d) {
  var O, B;
  const { visualElement: f } = J.useContext(ms),
    h = J.useContext(Vm),
    m = J.useContext(su),
    y = J.useContext(Rm),
    g = y.reducedMotion,
    v = y.skipAnimations,
    w = J.useRef(null),
    P = J.useRef(!1);
  ((a = a || h.renderer),
    !w.current &&
      a &&
      ((w.current = a(n, {
        visualState: r,
        parent: f,
        props: o,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g,
        skipAnimations: v,
        isSVG: d,
      })),
      P.current && w.current && (w.current.manuallyAnimateOnMount = !0)));
  const A = w.current,
    L = J.useContext(_m);
  A && !A.projection && u && (A.type === "html" || A.type === "svg") && Sw(w.current, o, u, L);
  const R = J.useRef(!1);
  J.useInsertionEffect(() => {
    A && R.current && A.update(o, m);
  });
  const D = o[$p],
    b = J.useRef(
      !!D &&
        typeof window < "u" &&
        !((O = window.MotionHandoffIsComplete) != null && O.call(window, D)) &&
        ((B = window.MotionHasOptimisedAnimation) == null ? void 0 : B.call(window, D)),
    );
  return (
    mv(() => {
      ((P.current = !0),
        A &&
          ((R.current = !0),
          (window.MotionIsMounted = !0),
          A.updateFeatures(),
          A.scheduleRenderMicrotask(),
          b.current && A.animationState && A.animationState.animateChanges()));
    }),
    J.useEffect(() => {
      A &&
        (!b.current && A.animationState && A.animationState.animateChanges(),
        b.current &&
          (queueMicrotask(() => {
            var Y;
            (Y = window.MotionHandoffMarkAsComplete) == null || Y.call(window, D);
          }),
          (b.current = !1)),
        (A.enteringChildren = void 0));
    }),
    A
  );
}
function Sw(n, r, o, a) {
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
  ((n.projection = new o(n.latestValues, r["data-framer-portal-id"] ? void 0 : zm(n.parent))),
    n.projection.setOptions({
      layoutId: u,
      layout: d,
      alwaysMeasureLayout: !!f || (h && xr(h)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: a,
      crossfade: v,
      layoutScroll: m,
      layoutRoot: y,
      layoutAnchor: g,
    }));
}
function zm(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : zm(n.parent);
}
function Pl(n, { forwardMotionProps: r = !1, type: o } = {}, a, u) {
  a && nw(a);
  const d = o ? o === "svg" : Lu(n),
    f = d ? yw : gw;
  function h(y, g) {
    let v;
    const w = { ...J.useContext(Rm), ...y, layoutId: kw(y) },
      { isStatic: P } = w,
      A = aw(y),
      L = f(y, P);
    if (!P && typeof window < "u") {
      Tw();
      const R = Cw(w);
      ((v = R.MeasureLayout), (A.visualElement = ww(n, L, w, u, R.ProjectionNode, d)));
    }
    return V.jsxs(ms.Provider, {
      value: A,
      children: [
        v && A.visualElement ? V.jsx(v, { visualElement: A.visualElement, ...w }) : null,
        hw(n, y, xw(L, A.visualElement, g), L, P, r, d),
      ],
    });
  }
  h.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const m = J.forwardRef(h);
  return ((m[vw] = n), m);
}
function kw({ layoutId: n }) {
  const r = J.useContext(rp).id;
  return r && n !== void 0 ? r + "-" + n : n;
}
function Tw(n, r) {
  J.useContext(Vm).strict;
}
function Cw(n) {
  const r = Lm(),
    { drag: o, layout: a } = r;
  if (!o && !a) return {};
  const u = { ...o, ...a };
  return {
    MeasureLayout:
      (o != null && o.isEnabled(n)) || (a != null && a.isEnabled(n)) ? u.MeasureLayout : void 0,
    ProjectionNode: u.ProjectionNode,
  };
}
function Pw(n, r) {
  if (typeof Proxy > "u") return Pl;
  const o = new Map(),
    a = (d, f) => Pl(d, f, n, r),
    u = (d, f) => a(d, f);
  return new Proxy(u, {
    get: (d, f) => (f === "create" ? a : (o.has(f) || o.set(f, Pl(f, void 0, n, r)), o.get(f))),
  });
}
const Ew = (n, r) =>
  (r.isSVG ?? Lu(n)) ? new ax(r) : new tx(r, { allowProjection: n !== J.Fragment });
class Mw extends An {
  constructor(r) {
    (super(r), r.animationState || (r.animationState = dx(r)));
  }
  updateAnimationControlsSubscription() {
    const { animate: r } = this.node.getProps();
    hs(r) && (this.unmountControls = r.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: r } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    r !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var r;
    (this.node.animationState.reset(), (r = this.unmountControls) == null || r.call(this));
  }
}
let Aw = 0;
class Rw extends An {
  constructor() {
    (super(...arguments), (this.id = Aw++), (this.isExitComplete = !1));
  }
  update() {
    var d;
    if (!this.node.presenceContext) return;
    const { isPresent: r, onExitComplete: o } = this.node.presenceContext,
      { isPresent: a } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || r === a) return;
    if (r && a === !1) {
      if (this.isExitComplete) {
        const { initial: f, custom: h } = this.node.getProps();
        if (typeof f == "string" || (typeof f == "object" && f !== null && !Array.isArray(f))) {
          const m = Gn(this.node, f, h);
          if (m) {
            const { transition: y, transitionEnd: g, ...v } = m;
            for (const w in v) (d = this.node.getValue(w)) == null || d.jump(v[w]);
          }
        }
        (this.node.animationState.reset(), this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const u = this.node.animationState.setActive("exit", !r);
    o &&
      !r &&
      u.then(() => {
        ((this.isExitComplete = !0), o(this.id));
      });
  }
  mount() {
    const { register: r, onExitComplete: o } = this.node.presenceContext || {};
    (o && o(this.id), r && (this.unmount = r(this.id)));
  }
  unmount() {}
}
const Vw = { animation: { Feature: Mw }, exit: { Feature: Rw } };
function Li(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const Lw = (n) => (r) => Cu(r) && n(r, Li(r));
function Ti(n, r, o, a) {
  return Mi(n, r, Lw(o), a);
}
const bm = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Bh = (n, r) => Math.abs(n - r);
function Dw(n, r) {
  const o = Bh(n.x, r.x),
    a = Bh(n.y, r.y);
  return Math.sqrt(o ** 2 + a ** 2);
}
const Uh = new Set(["auto", "scroll"]);
class Fm {
  constructor(
    r,
    o,
    {
      transformPagePoint: a,
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
          (this.lastMoveEventInfo = Ko(this.lastRawMoveEventInfo, this.transformPagePoint));
        const P = El(this.lastMoveEventInfo, this.history),
          A = this.startEvent !== null,
          L = Dw(P.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!A && !L) return;
        const { point: R } = P,
          { timestamp: D } = Qe;
        this.history.push({ ...R, timestamp: D });
        const { onStart: b, onMove: O } = this.handlers;
        (A || (b && b(this.lastMoveEvent, P), (this.startEvent = this.lastMoveEvent)),
          O && O(this.lastMoveEvent, P));
      }),
      (this.handlePointerMove = (P, A) => {
        ((this.lastMoveEvent = P),
          (this.lastRawMoveEventInfo = A),
          (this.lastMoveEventInfo = Ko(A, this.transformPagePoint)),
          Se.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (P, A) => {
        this.end();
        const { onEnd: L, onSessionEnd: R, resumeAnimation: D } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && D && D(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const b = El(
          P.type === "pointercancel" ? this.lastMoveEventInfo : Ko(A, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && L && L(P, b), R && R(P, b));
      }),
      !Cu(r))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = o),
      (this.transformPagePoint = a),
      (this.distanceThreshold = f),
      (this.contextWindow = u || window));
    const m = Li(r),
      y = Ko(m, this.transformPagePoint),
      { point: g } = y,
      { timestamp: v } = Qe;
    this.history = [{ ...g, timestamp: v }];
    const { onSessionStart: w } = o;
    (w && w(r, El(y, this.history)),
      (this.removeListeners = Ai(
        Ti(this.contextWindow, "pointermove", this.handlePointerMove),
        Ti(this.contextWindow, "pointerup", this.handlePointerUp),
        Ti(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      h && this.startScrollTracking(h));
  }
  startScrollTracking(r) {
    let o = r.parentElement;
    for (; o;) {
      const a = getComputedStyle(o);
      ((Uh.has(a.overflowX) || Uh.has(a.overflowY)) &&
        this.scrollPositions.set(o, { x: o.scrollLeft, y: o.scrollTop }),
        (o = o.parentElement));
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
    const o = this.scrollPositions.get(r);
    if (!o) return;
    const a = r === window,
      u = a ? { x: window.scrollX, y: window.scrollY } : { x: r.scrollLeft, y: r.scrollTop },
      d = { x: u.x - o.x, y: u.y - o.y };
    (d.x === 0 && d.y === 0) ||
      (a
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += d.x), (this.lastMoveEventInfo.point.y += d.y))
        : this.history.length > 0 && ((this.history[0].x -= d.x), (this.history[0].y -= d.y)),
      this.scrollPositions.set(r, u),
      Se.update(this.updatePoint, !0));
  }
  updateHandlers(r) {
    this.handlers = r;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Mn(this.updatePoint));
  }
}
function Ko(n, r) {
  return r ? { point: r(n.point) } : n;
}
function Wh(n, r) {
  return { x: n.x - r.x, y: n.y - r.y };
}
function El({ point: n }, r) {
  return { point: n, delta: Wh(n, Om(r)), offset: Wh(n, Nw(r)), velocity: jw(r, 0.1) };
}
function Nw(n) {
  return n[0];
}
function Om(n) {
  return n[n.length - 1];
}
function jw(n, r) {
  if (n.length < 2) return { x: 0, y: 0 };
  let o = n.length - 1,
    a = null;
  const u = Om(n);
  for (; o >= 0 && ((a = n[o]), !(u.timestamp - a.timestamp > vt(r)));) o--;
  if (!a) return { x: 0, y: 0 };
  a === n[0] && n.length > 2 && u.timestamp - a.timestamp > vt(r) * 2 && (a = n[1]);
  const d = Pt(u.timestamp - a.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (u.x - a.x) / d, y: (u.y - a.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function Iw(n, { min: r, max: o }, a) {
  return (
    r !== void 0 && n < r
      ? (n = a ? we(r, n, a.min) : Math.max(n, r))
      : o !== void 0 && n > o && (n = a ? we(o, n, a.max) : Math.min(n, o)),
    n
  );
}
function Hh(n, r, o) {
  return {
    min: r !== void 0 ? n.min + r : void 0,
    max: o !== void 0 ? n.max + o - (n.max - n.min) : void 0,
  };
}
function _w(n, { top: r, left: o, bottom: a, right: u }) {
  return { x: Hh(n.x, o, u), y: Hh(n.y, r, a) };
}
function $h(n, r) {
  let o = r.min - n.min,
    a = r.max - n.max;
  return (r.max - r.min < n.max - n.min && ([o, a] = [a, o]), { min: o, max: a });
}
function zw(n, r) {
  return { x: $h(n.x, r.x), y: $h(n.y, r.y) };
}
function bw(n, r) {
  let o = 0.5;
  const a = st(n),
    u = st(r);
  return (
    u > a ? (o = Ci(r.min, r.max - a, n.min)) : a > u && (o = Ci(n.min, n.max - u, r.min)),
    $t(0, 1, o)
  );
}
function Fw(n, r) {
  const o = {};
  return (
    r.min !== void 0 && (o.min = r.min - n.min),
    r.max !== void 0 && (o.max = r.max - n.min),
    o
  );
}
const eu = 0.35;
function Ow(n = eu) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = eu),
    { x: Kh(n, "left", "right"), y: Kh(n, "top", "bottom") }
  );
}
function Kh(n, r, o) {
  return { min: Gh(n, r), max: Gh(n, o) };
}
function Gh(n, r) {
  return typeof n == "number" ? n : n[r] || 0;
}
const Bw = new WeakMap();
class Uw {
  constructor(r) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ue()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = r));
  }
  start(r, { snapToCursor: o = !1, distanceThreshold: a } = {}) {
    const { presenceContext: u } = this.visualElement;
    if (u && u.isPresent === !1) return;
    const d = (v) => {
        (o && this.snapToCursor(Li(v).point), this.stopAnimation());
      },
      f = (v, w) => {
        const { drag: P, dragPropagation: A, onDragStart: L } = this.getProps();
        if (
          P &&
          !A &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = w1(P)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = v),
          (this.latestPanInfo = w),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ut((D) => {
            let b = this.getAxisMotionValue(D).get() || 0;
            if (Ht.test(b)) {
              const { projection: O } = this.visualElement;
              if (O && O.layout) {
                const B = O.layout.layoutBox[D];
                B && (b = st(B) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[D] = b;
          }),
          L && Se.update(() => L(v, w), !1, !0),
          Hl(this.visualElement, "transform"));
        const { animationState: R } = this.visualElement;
        R && R.setActive("whileDrag", !0);
      },
      h = (v, w) => {
        ((this.latestPointerEvent = v), (this.latestPanInfo = w));
        const {
          dragPropagation: P,
          dragDirectionLock: A,
          onDirectionLock: L,
          onDrag: R,
        } = this.getProps();
        if (!P && !this.openDragLock) return;
        const { offset: D } = w;
        if (A && this.currentDirection === null) {
          ((this.currentDirection = Hw(D)),
            this.currentDirection !== null && L && L(this.currentDirection));
          return;
        }
        (this.updateAxis("x", w.point, D),
          this.updateAxis("y", w.point, D),
          this.visualElement.render(),
          R && Se.update(() => R(v, w), !1, !0));
      },
      m = (v, w) => {
        ((this.latestPointerEvent = v),
          (this.latestPanInfo = w),
          this.stop(v, w),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      y = () => {
        const { dragSnapToOrigin: v } = this.getProps();
        (v || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new Fm(
      r,
      { onSessionStart: d, onStart: f, onMove: h, onSessionEnd: m, resumeAnimation: y },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        distanceThreshold: a,
        contextWindow: bm(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(r, o) {
    const a = r || this.latestPointerEvent,
      u = o || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !u || !a)) return;
    const { velocity: f } = u;
    this.startAnimation(f);
    const { onDragEnd: h } = this.getProps();
    h && Se.postRender(() => h(a, u));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: r, animationState: o } = this.visualElement;
    (r && (r.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: a } = this.getProps();
    (!a && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(r, o, a) {
    const { drag: u } = this.getProps();
    if (!a || !Go(r, u, this.currentDirection)) return;
    const d = this.getAxisMotionValue(r);
    let f = this.originPoint[r] + a[r];
    (this.constraints && this.constraints[r] && (f = Iw(f, this.constraints[r], this.elastic[r])),
      d.set(f));
  }
  resolveConstraints() {
    var d;
    const { dragConstraints: r, dragElastic: o } = this.getProps(),
      a =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (d = this.visualElement.projection) == null
            ? void 0
            : d.layout,
      u = this.constraints;
    (r && xr(r)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : r && a
        ? (this.constraints = _w(a.layoutBox, r))
        : (this.constraints = !1),
      (this.elastic = Ow(o)),
      u !== this.constraints &&
        !xr(r) &&
        a &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ut((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = Fw(a.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: r, onMeasureDragConstraints: o } = this.getProps();
    if (!r || !xr(r)) return !1;
    const a = r.current,
      { projection: u } = this.visualElement;
    if (!u || !u.layout) return !1;
    u.root && ((u.root.scroll = void 0), u.root.updateScroll());
    const d = Q1(a, u.root, this.visualElement.getTransformPagePoint());
    let f = zw(u.layout.layoutBox, d);
    if (o) {
      const h = o(K1(f));
      ((this.hasMutatedConstraints = !!h), h && (f = am(h)));
    }
    return f;
  }
  startAnimation(r) {
    const {
        drag: o,
        dragMomentum: a,
        dragElastic: u,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: h,
      } = this.getProps(),
      m = this.constraints || {},
      y = Ut((g) => {
        if (!Go(g, o, this.currentDirection)) return;
        let v = (m && m[g]) || {};
        (f === !0 || f === g) && (v = { min: 0, max: 0 });
        const w = u ? 200 : 1e6,
          P = u ? 40 : 1e7,
          A = {
            type: "inertia",
            velocity: a ? r[g] : 0,
            bounceStiffness: w,
            bounceDamping: P,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...v,
          };
        return this.startAxisValueAnimation(g, A);
      });
    return Promise.all(y).then(h);
  }
  startAxisValueAnimation(r, o) {
    const a = this.getAxisMotionValue(r);
    return (Hl(this.visualElement, r), a.start(wu(r, a, 0, o, this.visualElement, !1)));
  }
  stopAnimation() {
    Ut((r) => this.getAxisMotionValue(r).stop());
  }
  getAxisMotionValue(r) {
    const o = `_drag${r.toUpperCase()}`,
      u = this.visualElement.getProps()[o];
    return u || this.visualElement.getValue(r, this.visualElement.latestValues[r] ?? 0);
  }
  snapToCursor(r) {
    Ut((o) => {
      const { drag: a } = this.getProps();
      if (!Go(o, a, this.currentDirection)) return;
      const { projection: u } = this.visualElement,
        d = this.getAxisMotionValue(o);
      if (u && u.layout) {
        const { min: f, max: h } = u.layout.layoutBox[o],
          m = d.get() || 0;
        d.set(r[o] - we(f, h, 0.5) + m);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: r, dragConstraints: o } = this.getProps(),
      { projection: a } = this.visualElement;
    if (!xr(o) || !a || !this.constraints) return;
    this.stopAnimation();
    const u = { x: 0, y: 0 };
    Ut((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const m = h.get();
        u[f] = bw({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      a.root && a.root.updateScroll(),
      a.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Ut((f) => {
        if (!Go(f, r, null)) return;
        const h = this.getAxisMotionValue(f),
          { min: m, max: y } = this.constraints[f];
        h.set(we(m, y, u[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Bw.set(this.visualElement, this);
    const r = this.visualElement.current,
      o = Ti(r, "pointerdown", (y) => {
        const { drag: g, dragListener: v = !0 } = this.getProps(),
          w = y.target,
          P = w !== r && E1(w);
        g && v && !P && this.start(y);
      });
    let a;
    const u = () => {
        const { dragConstraints: y } = this.getProps();
        xr(y) &&
          y.current &&
          ((this.constraints = this.resolveRefConstraints()),
          a || (a = Ww(r, y.current, () => this.scalePositionWithinConstraints())));
      },
      { projection: d } = this.visualElement,
      f = d.addEventListener("measure", u);
    (d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), Se.read(u));
    const h = Mi(window, "resize", () => this.scalePositionWithinConstraints()),
      m = d.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: g }) => {
        this.isDragging &&
          g &&
          (Ut((v) => {
            const w = this.getAxisMotionValue(v);
            w && ((this.originPoint[v] += y[v].translate), w.set(w.get() + y[v].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (h(), o(), f(), m && m(), a && a());
    };
  }
  getProps() {
    const r = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: a = !1,
        dragPropagation: u = !1,
        dragConstraints: d = !1,
        dragElastic: f = eu,
        dragMomentum: h = !0,
      } = r;
    return {
      ...r,
      drag: o,
      dragDirectionLock: a,
      dragPropagation: u,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: h,
    };
  }
}
function Xh(n) {
  let r = !0;
  return () => {
    if (r) {
      r = !1;
      return;
    }
    n();
  };
}
function Ww(n, r, o) {
  const a = rh(n, Xh(o)),
    u = rh(r, Xh(o));
  return () => {
    (a(), u());
  };
}
function Go(n, r, o) {
  return (r === !0 || r === n) && (o === null || o === n);
}
function Hw(n, r = 10) {
  let o = null;
  return (Math.abs(n.y) > r ? (o = "y") : Math.abs(n.x) > r && (o = "x"), o);
}
class $w extends An {
  constructor(r) {
    (super(r),
      (this.removeGroupControls = Et),
      (this.removeListeners = Et),
      (this.controls = new Uw(r)));
  }
  mount() {
    const { dragControls: r } = this.node.getProps();
    (r && (this.removeGroupControls = r.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Et));
  }
  update() {
    const { dragControls: r } = this.node.getProps(),
      { dragControls: o } = this.node.prevProps || {};
    r !== o &&
      (this.removeGroupControls(), r && (this.removeGroupControls = r.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Ml = (n) => (r, o) => {
  n && Se.update(() => n(r, o), !1, !0);
};
class Kw extends An {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Et));
  }
  onPointerDown(r) {
    this.session = new Fm(r, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: bm(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: r, onPanStart: o, onPan: a, onPanEnd: u } = this.node.getProps();
    return {
      onSessionStart: Ml(r),
      onStart: Ml(o),
      onMove: Ml(a),
      onEnd: (d, f) => {
        (delete this.session, u && Se.postRender(() => u(d, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ti(this.node.current, "pointerdown", (r) =>
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
let Al = !1;
class Gw extends J.Component {
  componentDidMount() {
    const { visualElement: r, layoutGroup: o, switchLayoutGroup: a, layoutId: u } = this.props,
      { projection: d } = r;
    (d &&
      (o.group && o.group.add(d),
      a && a.register && u && a.register(d),
      Al && d.root.didUpdate(),
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      d.setOptions({
        ...d.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (es.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(r) {
    const { layoutDependency: o, visualElement: a, drag: u, isPresent: d } = this.props,
      { projection: f } = a;
    return (
      f &&
        ((f.isPresent = d),
        r.layoutDependency !== o && f.setOptions({ ...f.options, layoutDependency: o }),
        (Al = !0),
        u || r.layoutDependency !== o || o === void 0 || r.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        r.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              Se.postRender(() => {
                const h = f.getStack();
                (!h || !h.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: r, layoutAnchor: o } = this.props,
      { projection: a } = r;
    a &&
      ((a.options.layoutAnchor = o),
      a.root.didUpdate(),
      Tu.postRender(() => {
        !a.currentAnimation && a.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: r, layoutGroup: o, switchLayoutGroup: a } = this.props,
      { projection: u } = r;
    ((Al = !0),
      u &&
        (u.scheduleCheckAfterUnmount(),
        o && o.group && o.group.remove(u),
        a && a.deregister && a.deregister(u)));
  }
  safeToRemove() {
    const { safeToRemove: r } = this.props;
    r && r();
  }
  render() {
    return null;
  }
}
function Bm(n) {
  const [r, o] = ew(),
    a = J.useContext(rp);
  return V.jsx(Gw, {
    ...n,
    layoutGroup: a,
    switchLayoutGroup: J.useContext(_m),
    isPresent: r,
    safeToRemove: o,
  });
}
const Xw = { pan: { Feature: Kw }, drag: { Feature: $w, ProjectionNode: Am, MeasureLayout: Bm } };
function Qh(n, r, o) {
  const { props: a } = n;
  n.animationState && a.whileHover && n.animationState.setActive("whileHover", o === "Start");
  const u = "onHover" + o,
    d = a[u];
  d && Se.postRender(() => d(r, Li(r)));
}
class Qw extends An {
  mount() {
    const { current: r } = this.node;
    r &&
      (this.unmount = k1(r, (o, a) => (Qh(this.node, a, "Start"), (u) => Qh(this.node, u, "End"))));
  }
  unmount() {}
}
class Yw extends An {
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
    this.unmount = Ai(
      Mi(this.node.current, "focus", () => this.onFocus()),
      Mi(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Yh(n, r, o) {
  const { props: a } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState && a.whileTap && n.animationState.setActive("whileTap", o === "Start");
  const u = "onTap" + (o === "End" ? "" : o),
    d = a[u];
  d && Se.postRender(() => d(r, Li(r)));
}
class qw extends An {
  mount() {
    const { current: r } = this.node;
    if (!r) return;
    const { globalTapTarget: o, propagate: a } = this.node.props;
    this.unmount = A1(
      r,
      (u, d) => (
        Yh(this.node, d, "Start"),
        (f, { success: h }) => Yh(this.node, f, h ? "End" : "Cancel")
      ),
      { useGlobalTarget: o, stopPropagation: (a == null ? void 0 : a.tap) === !1 },
    );
  }
  unmount() {}
}
const tu = new WeakMap(),
  Rl = new WeakMap(),
  Zw = (n) => {
    const r = tu.get(n.target);
    r && r(n);
  },
  Jw = (n) => {
    n.forEach(Zw);
  };
function eS({ root: n, ...r }) {
  const o = n || document;
  Rl.has(o) || Rl.set(o, {});
  const a = Rl.get(o),
    u = JSON.stringify(r);
  return (a[u] || (a[u] = new IntersectionObserver(Jw, { root: n, ...r })), a[u]);
}
function tS(n, r, o) {
  const a = eS(r);
  return (
    tu.set(n, o),
    a.observe(n),
    () => {
      (tu.delete(n), a.unobserve(n));
    }
  );
}
const nS = { some: 0, all: 1 };
class rS extends An {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var m;
    (m = this.stopObserver) == null || m.call(this);
    const { viewport: r = {} } = this.node.getProps(),
      { root: o, margin: a, amount: u = "some", once: d } = r,
      f = {
        root: o ? o.current : void 0,
        rootMargin: a,
        threshold: typeof u == "number" ? u : nS[u],
      },
      h = (y) => {
        const { isIntersecting: g } = y;
        if (this.isInView === g || ((this.isInView = g), d && !g && this.hasEnteredView)) return;
        (g && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", g));
        const { onViewportEnter: v, onViewportLeave: w } = this.node.getProps(),
          P = g ? v : w;
        P && P(y);
      };
    this.stopObserver = tS(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: r, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(iS(r, o)) && this.startObserver();
  }
  unmount() {
    var r;
    ((r = this.stopObserver) == null || r.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function iS({ viewport: n = {} }, { viewport: r = {} } = {}) {
  return (o) => n[o] !== r[o];
}
const oS = {
    inView: { Feature: rS },
    tap: { Feature: qw },
    focus: { Feature: Yw },
    hover: { Feature: Qw },
  },
  sS = { layout: { ProjectionNode: Am, MeasureLayout: Bm } },
  aS = { ...Vw, ...oS, ...Xw, ...sS },
  qe = Pw(aS, Ew);
function lS({ target: n, children: r, className: o, onClick: a, ...u }) {
  return V.jsx("a", {
    href: lv(n),
    className: o,
    onClick: (d) => {
      (uv(d, n), a == null || a(d));
    },
    ...u,
    children: r,
  });
}
function Um(n) {
  var r,
    o,
    a = "";
  if (typeof n == "string" || typeof n == "number") a += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var u = n.length;
      for (r = 0; r < u; r++) n[r] && (o = Um(n[r])) && (a && (a += " "), (a += o));
    } else for (o in n) n[o] && (a && (a += " "), (a += o));
  return a;
}
function uS() {
  for (var n, r, o = 0, a = "", u = arguments.length; o < u; o++)
    (n = arguments[o]) && (r = Um(n)) && (a && (a += " "), (a += r));
  return a;
}
const Du = "-",
  cS = (n) => {
    const r = dS(n),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: a } = n;
    return {
      getClassGroupId: (f) => {
        const h = f.split(Du);
        return (h[0] === "" && h.length !== 1 && h.shift(), Wm(h, r) || fS(f));
      },
      getConflictingClassGroupIds: (f, h) => {
        const m = o[f] || [];
        return h && a[f] ? [...m, ...a[f]] : m;
      },
    };
  },
  Wm = (n, r) => {
    var f;
    if (n.length === 0) return r.classGroupId;
    const o = n[0],
      a = r.nextPart.get(o),
      u = a ? Wm(n.slice(1), a) : void 0;
    if (u) return u;
    if (r.validators.length === 0) return;
    const d = n.join(Du);
    return (f = r.validators.find(({ validator: h }) => h(d))) == null ? void 0 : f.classGroupId;
  },
  qh = /^\[(.+)\]$/,
  fS = (n) => {
    if (qh.test(n)) {
      const r = qh.exec(n)[1],
        o = r == null ? void 0 : r.substring(0, r.indexOf(":"));
      if (o) return "arbitrary.." + o;
    }
  },
  dS = (n) => {
    const { theme: r, prefix: o } = n,
      a = { nextPart: new Map(), validators: [] };
    return (
      pS(Object.entries(n.classGroups), o).forEach(([d, f]) => {
        nu(f, a, d, r);
      }),
      a
    );
  },
  nu = (n, r, o, a) => {
    n.forEach((u) => {
      if (typeof u == "string") {
        const d = u === "" ? r : Zh(r, u);
        d.classGroupId = o;
        return;
      }
      if (typeof u == "function") {
        if (hS(u)) {
          nu(u(a), r, o, a);
          return;
        }
        r.validators.push({ validator: u, classGroupId: o });
        return;
      }
      Object.entries(u).forEach(([d, f]) => {
        nu(f, Zh(r, d), o, a);
      });
    });
  },
  Zh = (n, r) => {
    let o = n;
    return (
      r.split(Du).forEach((a) => {
        (o.nextPart.has(a) || o.nextPart.set(a, { nextPart: new Map(), validators: [] }),
          (o = o.nextPart.get(a)));
      }),
      o
    );
  },
  hS = (n) => n.isThemeGetter,
  pS = (n, r) =>
    r
      ? n.map(([o, a]) => {
          const u = a.map((d) =>
            typeof d == "string"
              ? r + d
              : typeof d == "object"
                ? Object.fromEntries(Object.entries(d).map(([f, h]) => [r + f, h]))
                : d,
          );
          return [o, u];
        })
      : n,
  mS = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      o = new Map(),
      a = new Map();
    const u = (d, f) => {
      (o.set(d, f), r++, r > n && ((r = 0), (a = o), (o = new Map())));
    };
    return {
      get(d) {
        let f = o.get(d);
        if (f !== void 0) return f;
        if ((f = a.get(d)) !== void 0) return (u(d, f), f);
      },
      set(d, f) {
        o.has(d) ? o.set(d, f) : u(d, f);
      },
    };
  },
  Hm = "!",
  gS = (n) => {
    const { separator: r, experimentalParseClassName: o } = n,
      a = r.length === 1,
      u = r[0],
      d = r.length,
      f = (h) => {
        const m = [];
        let y = 0,
          g = 0,
          v;
        for (let R = 0; R < h.length; R++) {
          let D = h[R];
          if (y === 0) {
            if (D === u && (a || h.slice(R, R + d) === r)) {
              (m.push(h.slice(g, R)), (g = R + d));
              continue;
            }
            if (D === "/") {
              v = R;
              continue;
            }
          }
          D === "[" ? y++ : D === "]" && y--;
        }
        const w = m.length === 0 ? h : h.substring(g),
          P = w.startsWith(Hm),
          A = P ? w.substring(1) : w,
          L = v && v > g ? v - g : void 0;
        return {
          modifiers: m,
          hasImportantModifier: P,
          baseClassName: A,
          maybePostfixModifierPosition: L,
        };
      };
    return o ? (h) => o({ className: h, parseClassName: f }) : f;
  },
  yS = (n) => {
    if (n.length <= 1) return n;
    const r = [];
    let o = [];
    return (
      n.forEach((a) => {
        a[0] === "[" ? (r.push(...o.sort(), a), (o = [])) : o.push(a);
      }),
      r.push(...o.sort()),
      r
    );
  },
  vS = (n) => ({ cache: mS(n.cacheSize), parseClassName: gS(n), ...cS(n) }),
  xS = /\s+/,
  wS = (n, r) => {
    const { parseClassName: o, getClassGroupId: a, getConflictingClassGroupIds: u } = r,
      d = [],
      f = n.trim().split(xS);
    let h = "";
    for (let m = f.length - 1; m >= 0; m -= 1) {
      const y = f[m],
        {
          modifiers: g,
          hasImportantModifier: v,
          baseClassName: w,
          maybePostfixModifierPosition: P,
        } = o(y);
      let A = !!P,
        L = a(A ? w.substring(0, P) : w);
      if (!L) {
        if (!A) {
          h = y + (h.length > 0 ? " " + h : h);
          continue;
        }
        if (((L = a(w)), !L)) {
          h = y + (h.length > 0 ? " " + h : h);
          continue;
        }
        A = !1;
      }
      const R = yS(g).join(":"),
        D = v ? R + Hm : R,
        b = D + L;
      if (d.includes(b)) continue;
      d.push(b);
      const O = u(L, A);
      for (let B = 0; B < O.length; ++B) {
        const Y = O[B];
        d.push(D + Y);
      }
      h = y + (h.length > 0 ? " " + h : h);
    }
    return h;
  };
function SS() {
  let n = 0,
    r,
    o,
    a = "";
  for (; n < arguments.length;) (r = arguments[n++]) && (o = $m(r)) && (a && (a += " "), (a += o));
  return a;
}
const $m = (n) => {
  if (typeof n == "string") return n;
  let r,
    o = "";
  for (let a = 0; a < n.length; a++) n[a] && (r = $m(n[a])) && (o && (o += " "), (o += r));
  return o;
};
function kS(n, ...r) {
  let o,
    a,
    u,
    d = f;
  function f(m) {
    const y = r.reduce((g, v) => v(g), n());
    return ((o = vS(y)), (a = o.cache.get), (u = o.cache.set), (d = h), h(m));
  }
  function h(m) {
    const y = a(m);
    if (y) return y;
    const g = wS(m, o);
    return (u(m, g), g);
  }
  return function () {
    return d(SS.apply(null, arguments));
  };
}
const Me = (n) => {
    const r = (o) => o[n] || [];
    return ((r.isThemeGetter = !0), r);
  },
  Km = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  TS = /^\d+\/\d+$/,
  CS = new Set(["px", "full", "screen"]),
  PS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ES =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  MS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  AS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  RS =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  en = (n) => Tr(n) || CS.has(n) || TS.test(n),
  kn = (n) => Rr(n, "length", zS),
  Tr = (n) => !!n && !Number.isNaN(Number(n)),
  Vl = (n) => Rr(n, "number", Tr),
  yi = (n) => !!n && Number.isInteger(Number(n)),
  VS = (n) => n.endsWith("%") && Tr(n.slice(0, -1)),
  se = (n) => Km.test(n),
  Tn = (n) => PS.test(n),
  LS = new Set(["length", "size", "percentage"]),
  DS = (n) => Rr(n, LS, Gm),
  NS = (n) => Rr(n, "position", Gm),
  jS = new Set(["image", "url"]),
  IS = (n) => Rr(n, jS, FS),
  _S = (n) => Rr(n, "", bS),
  vi = () => !0,
  Rr = (n, r, o) => {
    const a = Km.exec(n);
    return a ? (a[1] ? (typeof r == "string" ? a[1] === r : r.has(a[1])) : o(a[2])) : !1;
  },
  zS = (n) => ES.test(n) && !MS.test(n),
  Gm = () => !1,
  bS = (n) => AS.test(n),
  FS = (n) => RS.test(n),
  OS = () => {
    const n = Me("colors"),
      r = Me("spacing"),
      o = Me("blur"),
      a = Me("brightness"),
      u = Me("borderColor"),
      d = Me("borderRadius"),
      f = Me("borderSpacing"),
      h = Me("borderWidth"),
      m = Me("contrast"),
      y = Me("grayscale"),
      g = Me("hueRotate"),
      v = Me("invert"),
      w = Me("gap"),
      P = Me("gradientColorStops"),
      A = Me("gradientColorStopPositions"),
      L = Me("inset"),
      R = Me("margin"),
      D = Me("opacity"),
      b = Me("padding"),
      O = Me("saturate"),
      B = Me("scale"),
      Y = Me("sepia"),
      oe = Me("skew"),
      ie = Me("space"),
      q = Me("translate"),
      me = () => ["auto", "contain", "none"],
      Z = () => ["auto", "hidden", "clip", "visible", "scroll"],
      fe = () => ["auto", se, r],
      ne = () => [se, r],
      Ae = () => ["", en, kn],
      xe = () => ["auto", Tr, se],
      Le = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      ge = () => ["solid", "dashed", "dotted", "double", "none"],
      ke = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
      H = () => ["", "0", se],
      U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      T = () => [Tr, se];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [vi],
        spacing: [en, kn],
        blur: ["none", "", Tn, se],
        brightness: T(),
        borderColor: [n],
        borderRadius: ["none", "", "full", Tn, se],
        borderSpacing: ne(),
        borderWidth: Ae(),
        contrast: T(),
        grayscale: H(),
        hueRotate: T(),
        invert: H(),
        gap: ne(),
        gradientColorStops: [n],
        gradientColorStopPositions: [VS, kn],
        inset: fe(),
        margin: fe(),
        opacity: T(),
        padding: ne(),
        saturate: T(),
        scale: T(),
        sepia: H(),
        skew: T(),
        space: ne(),
        translate: ne(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", se] }],
        container: ["container"],
        columns: [{ columns: [Tn] }],
        "break-after": [{ "break-after": U() }],
        "break-before": [{ "break-before": U() }],
        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
        "object-position": [{ object: [...Le(), se] }],
        overflow: [{ overflow: Z() }],
        "overflow-x": [{ "overflow-x": Z() }],
        "overflow-y": [{ "overflow-y": Z() }],
        overscroll: [{ overscroll: me() }],
        "overscroll-x": [{ "overscroll-x": me() }],
        "overscroll-y": [{ "overscroll-y": me() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [L] }],
        "inset-x": [{ "inset-x": [L] }],
        "inset-y": [{ "inset-y": [L] }],
        start: [{ start: [L] }],
        end: [{ end: [L] }],
        top: [{ top: [L] }],
        right: [{ right: [L] }],
        bottom: [{ bottom: [L] }],
        left: [{ left: [L] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", yi, se] }],
        basis: [{ basis: fe() }],
        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", se] }],
        grow: [{ grow: H() }],
        shrink: [{ shrink: H() }],
        order: [{ order: ["first", "last", "none", yi, se] }],
        "grid-cols": [{ "grid-cols": [vi] }],
        "col-start-end": [{ col: ["auto", { span: ["full", yi, se] }, se] }],
        "col-start": [{ "col-start": xe() }],
        "col-end": [{ "col-end": xe() }],
        "grid-rows": [{ "grid-rows": [vi] }],
        "row-start-end": [{ row: ["auto", { span: [yi, se] }, se] }],
        "row-start": [{ "row-start": xe() }],
        "row-end": [{ "row-end": xe() }],
        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", se] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", se] }],
        gap: [{ gap: [w] }],
        "gap-x": [{ "gap-x": [w] }],
        "gap-y": [{ "gap-y": [w] }],
        "justify-content": [{ justify: ["normal", ...z()] }],
        "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
        "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
        "align-content": [{ content: ["normal", ...z(), "baseline"] }],
        "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
        "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
        "place-content": [{ "place-content": [...z(), "baseline"] }],
        "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
        "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
        p: [{ p: [b] }],
        px: [{ px: [b] }],
        py: [{ py: [b] }],
        ps: [{ ps: [b] }],
        pe: [{ pe: [b] }],
        pt: [{ pt: [b] }],
        pr: [{ pr: [b] }],
        pb: [{ pb: [b] }],
        pl: [{ pl: [b] }],
        m: [{ m: [R] }],
        mx: [{ mx: [R] }],
        my: [{ my: [R] }],
        ms: [{ ms: [R] }],
        me: [{ me: [R] }],
        mt: [{ mt: [R] }],
        mr: [{ mr: [R] }],
        mb: [{ mb: [R] }],
        ml: [{ ml: [R] }],
        "space-x": [{ "space-x": [ie] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [ie] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", se, r] }],
        "min-w": [{ "min-w": [se, r, "min", "max", "fit"] }],
        "max-w": [
          { "max-w": [se, r, "none", "full", "min", "max", "fit", "prose", { screen: [Tn] }, Tn] },
        ],
        h: [{ h: [se, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [{ "min-h": [se, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "max-h": [{ "max-h": [se, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
        size: [{ size: [se, r, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Tn, kn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Vl,
            ],
          },
        ],
        "font-family": [{ font: [vi] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", se] }],
        "line-clamp": [{ "line-clamp": ["none", Tr, Vl] }],
        leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", en, se] }],
        "list-image": [{ "list-image": ["none", se] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", se] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [n] }],
        "placeholder-opacity": [{ "placeholder-opacity": [D] }],
        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
        "text-color": [{ text: [n] }],
        "text-opacity": [{ "text-opacity": [D] }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{ decoration: [...ge(), "wavy"] }],
        "text-decoration-thickness": [{ decoration: ["auto", "from-font", en, kn] }],
        "underline-offset": [{ "underline-offset": ["auto", en, se] }],
        "text-decoration-color": [{ decoration: [n] }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: ne() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              se,
            ],
          },
        ],
        whitespace: [
          { whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", se] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [D] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Le(), NS] }],
        "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
        "bg-size": [{ bg: ["auto", "cover", "contain", DS] }],
        "bg-image": [
          { bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, IS] },
        ],
        "bg-color": [{ bg: [n] }],
        "gradient-from-pos": [{ from: [A] }],
        "gradient-via-pos": [{ via: [A] }],
        "gradient-to-pos": [{ to: [A] }],
        "gradient-from": [{ from: [P] }],
        "gradient-via": [{ via: [P] }],
        "gradient-to": [{ to: [P] }],
        rounded: [{ rounded: [d] }],
        "rounded-s": [{ "rounded-s": [d] }],
        "rounded-e": [{ "rounded-e": [d] }],
        "rounded-t": [{ "rounded-t": [d] }],
        "rounded-r": [{ "rounded-r": [d] }],
        "rounded-b": [{ "rounded-b": [d] }],
        "rounded-l": [{ "rounded-l": [d] }],
        "rounded-ss": [{ "rounded-ss": [d] }],
        "rounded-se": [{ "rounded-se": [d] }],
        "rounded-ee": [{ "rounded-ee": [d] }],
        "rounded-es": [{ "rounded-es": [d] }],
        "rounded-tl": [{ "rounded-tl": [d] }],
        "rounded-tr": [{ "rounded-tr": [d] }],
        "rounded-br": [{ "rounded-br": [d] }],
        "rounded-bl": [{ "rounded-bl": [d] }],
        "border-w": [{ border: [h] }],
        "border-w-x": [{ "border-x": [h] }],
        "border-w-y": [{ "border-y": [h] }],
        "border-w-s": [{ "border-s": [h] }],
        "border-w-e": [{ "border-e": [h] }],
        "border-w-t": [{ "border-t": [h] }],
        "border-w-r": [{ "border-r": [h] }],
        "border-w-b": [{ "border-b": [h] }],
        "border-w-l": [{ "border-l": [h] }],
        "border-opacity": [{ "border-opacity": [D] }],
        "border-style": [{ border: [...ge(), "hidden"] }],
        "divide-x": [{ "divide-x": [h] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [h] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [D] }],
        "divide-style": [{ divide: ge() }],
        "border-color": [{ border: [u] }],
        "border-color-x": [{ "border-x": [u] }],
        "border-color-y": [{ "border-y": [u] }],
        "border-color-s": [{ "border-s": [u] }],
        "border-color-e": [{ "border-e": [u] }],
        "border-color-t": [{ "border-t": [u] }],
        "border-color-r": [{ "border-r": [u] }],
        "border-color-b": [{ "border-b": [u] }],
        "border-color-l": [{ "border-l": [u] }],
        "divide-color": [{ divide: [u] }],
        "outline-style": [{ outline: ["", ...ge()] }],
        "outline-offset": [{ "outline-offset": [en, se] }],
        "outline-w": [{ outline: [en, kn] }],
        "outline-color": [{ outline: [n] }],
        "ring-w": [{ ring: Ae() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [n] }],
        "ring-opacity": [{ "ring-opacity": [D] }],
        "ring-offset-w": [{ "ring-offset": [en, kn] }],
        "ring-offset-color": [{ "ring-offset": [n] }],
        shadow: [{ shadow: ["", "inner", "none", Tn, _S] }],
        "shadow-color": [{ shadow: [vi] }],
        opacity: [{ opacity: [D] }],
        "mix-blend": [{ "mix-blend": [...ke(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": ke() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [o] }],
        brightness: [{ brightness: [a] }],
        contrast: [{ contrast: [m] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Tn, se] }],
        grayscale: [{ grayscale: [y] }],
        "hue-rotate": [{ "hue-rotate": [g] }],
        invert: [{ invert: [v] }],
        saturate: [{ saturate: [O] }],
        sepia: [{ sepia: [Y] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [o] }],
        "backdrop-brightness": [{ "backdrop-brightness": [a] }],
        "backdrop-contrast": [{ "backdrop-contrast": [m] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [y] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [g] }],
        "backdrop-invert": [{ "backdrop-invert": [v] }],
        "backdrop-opacity": [{ "backdrop-opacity": [D] }],
        "backdrop-saturate": [{ "backdrop-saturate": [O] }],
        "backdrop-sepia": [{ "backdrop-sepia": [Y] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [f] }],
        "border-spacing-x": [{ "border-spacing-x": [f] }],
        "border-spacing-y": [{ "border-spacing-y": [f] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          { transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", se] },
        ],
        duration: [{ duration: T() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", se] }],
        delay: [{ delay: T() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", se] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [B] }],
        "scale-x": [{ "scale-x": [B] }],
        "scale-y": [{ "scale-y": [B] }],
        rotate: [{ rotate: [yi, se] }],
        "translate-x": [{ "translate-x": [q] }],
        "translate-y": [{ "translate-y": [q] }],
        "skew-x": [{ "skew-x": [oe] }],
        "skew-y": [{ "skew-y": [oe] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              se,
            ],
          },
        ],
        accent: [{ accent: ["auto", n] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              se,
            ],
          },
        ],
        "caret-color": [{ caret: [n] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": ne() }],
        "scroll-mx": [{ "scroll-mx": ne() }],
        "scroll-my": [{ "scroll-my": ne() }],
        "scroll-ms": [{ "scroll-ms": ne() }],
        "scroll-me": [{ "scroll-me": ne() }],
        "scroll-mt": [{ "scroll-mt": ne() }],
        "scroll-mr": [{ "scroll-mr": ne() }],
        "scroll-mb": [{ "scroll-mb": ne() }],
        "scroll-ml": [{ "scroll-ml": ne() }],
        "scroll-p": [{ "scroll-p": ne() }],
        "scroll-px": [{ "scroll-px": ne() }],
        "scroll-py": [{ "scroll-py": ne() }],
        "scroll-ps": [{ "scroll-ps": ne() }],
        "scroll-pe": [{ "scroll-pe": ne() }],
        "scroll-pt": [{ "scroll-pt": ne() }],
        "scroll-pr": [{ "scroll-pr": ne() }],
        "scroll-pb": [{ "scroll-pb": ne() }],
        "scroll-pl": [{ "scroll-pl": ne() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", se] }],
        fill: [{ fill: [n, "none"] }],
        "stroke-w": [{ stroke: [en, kn, Vl] }],
        stroke: [{ stroke: [n, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  BS = kS(OS);
function Ke(...n) {
  return BS(uS(n));
}
function fs(n) {
  const r = document.getElementById(n);
  r && r.scrollIntoView({ behavior: "smooth", block: "start" });
}
const US = [
  { label: "Home", route: "" },
  { label: "Products", route: "products" },
  { label: "Ecosystem", route: "ecosystem" },
  { label: "Docs", route: "docs" },
  { label: "About", route: "about" },
  { label: "Contact", route: "contact" },
];
function WS() {
  return V.jsx(qe.nav, {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    className: "pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4",
    "aria-label": "Primary",
    children: V.jsx("div", {
      className: Ke(
        "pointer-events-auto flex flex-wrap items-center justify-center gap-1 rounded-full border border-white/20",
        "bg-white/10 px-2 py-2 shadow-lg backdrop-blur-xl",
      ),
      children: US.map((n) =>
        V.jsx(
          lS,
          {
            target: { kind: "route", path: n.route },
            className: Ke(
              "rounded-full px-4 py-2.5 text-sm font-medium text-white/90 transition-colors sm:px-5",
              "hover:bg-white/15 hover:text-white",
            ),
            children: n.label,
          },
          n.route || "home",
        ),
      ),
    }),
  });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HS = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Xm = (...n) =>
    n
      .filter((r, o, a) => !!r && r.trim() !== "" && a.indexOf(r) === o)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var $S = {
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
 */ const KS = J.forwardRef(
  (
    {
      color: n = "currentColor",
      size: r = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: a,
      className: u = "",
      children: d,
      iconNode: f,
      ...h
    },
    m,
  ) =>
    J.createElement(
      "svg",
      {
        ref: m,
        ...$S,
        width: r,
        height: r,
        stroke: n,
        strokeWidth: a ? (Number(o) * 24) / Number(r) : o,
        className: Xm("lucide", u),
        ...h,
      },
      [...f.map(([y, g]) => J.createElement(y, g)), ...(Array.isArray(d) ? d : [d])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nt = (n, r) => {
  const o = J.forwardRef(({ className: a, ...u }, d) =>
    J.createElement(KS, { ref: d, iconNode: r, className: Xm(`lucide-${HS(n)}`, a), ...u }),
  );
  return ((o.displayName = `${n}`), o);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GS = nt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XS = nt("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QS = nt("Blocks", [
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  [
    "path",
    {
      d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
      key: "1fpvtg",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YS = nt("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qS = nt("CodeXml", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZS = nt("Cpu", [
  ["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" }],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qm = nt("Earth", [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa",
    },
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JS = nt("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo",
    },
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc",
    },
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ek = nt("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tk = nt("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nk = nt("Network", [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rk = nt("Rocket", [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz",
    },
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk",
    },
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ik = nt("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ok = nt("Sparkles", [
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
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sk = nt("Terminal", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ak = nt("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ]),
  lk = [
    {
      icon: rk,
      title: "Epoch-scale velocity",
      body: "Teams ship composable products on Foundation primitives—auth, data, and edge unified from day one.",
    },
    {
      icon: Qm,
      title: "Global by default",
      body: "Multi-region orchestration with sub-50ms routing so every user feels local, everywhere.",
    },
    {
      icon: ak,
      title: "Partner-first",
      body: "We co-build with studios and enterprises who need cinematic presentation and production rigor.",
    },
  ];
function uk() {
  return V.jsx("main", {
    className: "px-4 pb-24 pt-12 md:px-8 md:pt-16",
    children: V.jsxs("div", {
      className: "mx-auto max-w-[1400px]",
      children: [
        V.jsx(qe.p, {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          className: "text-xs font-medium uppercase tracking-[0.2em] text-gray-500",
          children: "About",
        }),
        V.jsx(qe.h1, {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.08 },
          className: Ke(
            "mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl",
          ),
          children: "Building the foundation of the new digital epoch",
        }),
        V.jsx(qe.p, {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.16 },
          className: "mt-6 max-w-2xl text-lg leading-relaxed text-gray-600",
          children:
            "Foundation Epoch partners with product teams who refuse to trade craft for speed. We combine cinematic hero experiences with composable infrastructure—so your launch feels inevitable and your stack stays trustworthy.",
        }),
        V.jsx("div", {
          className: "mt-16 grid gap-6 md:grid-cols-3",
          children: lk.map((n, r) => {
            const o = n.icon;
            return V.jsxs(
              qe.article,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2 + r * 0.08 },
                className: "rounded-3xl border border-gray-200 bg-white p-8 shadow-sm",
                children: [
                  V.jsx(o, { className: "h-8 w-8 text-gray-900", strokeWidth: 1.5 }),
                  V.jsx("h2", {
                    className: "mt-4 text-xl font-semibold text-gray-900",
                    children: n.title,
                  }),
                  V.jsx("p", {
                    className: "mt-2 text-sm leading-relaxed text-gray-600",
                    children: n.body,
                  }),
                ],
              },
              n.title,
            );
          }),
        }),
      ],
    }),
  });
}
function Ym() {
  const [n, r] = J.useState(!1);
  function o(a) {
    (a.preventDefault(), r(!0));
  }
  return V.jsx("section", {
    id: "contact",
    className: "scroll-mt-8 bg-white px-4 pb-32 pt-20 md:px-8 md:pb-40 md:pt-28",
    children: V.jsx("div", {
      className: "mx-auto max-w-[1400px]",
      children: V.jsxs("div", {
        className: "grid gap-12 lg:grid-cols-2 lg:items-start",
        children: [
          V.jsxs(qe.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-80px" },
            transition: { duration: 0.5 },
            children: [
              V.jsx("p", {
                className: "text-xs font-medium uppercase tracking-[0.2em] text-gray-500",
                children: "Contact",
              }),
              V.jsx("h2", {
                className: Ke(
                  "mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight",
                  "text-gray-900 md:text-4xl",
                ),
                children: "Start your epoch with us",
              }),
              V.jsx("p", {
                className: "mt-4 max-w-md text-base leading-relaxed text-gray-600",
                children:
                  "Tell us about your roadmap—we'll connect you with solutions engineering within one business day.",
              }),
              V.jsxs("div", {
                className: "mt-8 space-y-4",
                children: [
                  V.jsxs("a", {
                    href: "mailto:hello@foundationepoch.com",
                    className:
                      "flex items-center gap-3 text-sm font-medium text-gray-800 hover:text-gray-900",
                    children: [
                      V.jsx(ek, { className: "h-4 w-4 text-gray-500", strokeWidth: 1.75 }),
                      "hello@foundationepoch.com",
                    ],
                  }),
                  V.jsxs("p", {
                    className: "flex items-center gap-3 text-sm text-gray-600",
                    children: [
                      V.jsx(tk, { className: "h-4 w-4 text-gray-500", strokeWidth: 1.75 }),
                      "Enterprise & partner inquiries welcome",
                    ],
                  }),
                ],
              }),
            ],
          }),
          V.jsx(qe.form, {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-40px" },
            transition: { duration: 0.45 },
            onSubmit: o,
            className: Ke("rounded-3xl border border-gray-200 bg-[#f9fafb] p-6 md:p-8"),
            children: n
              ? V.jsx("p", {
                  className: "py-8 text-center text-sm font-medium text-gray-800",
                  children: "Thanks—we'll be in touch shortly.",
                })
              : V.jsxs(V.Fragment, {
                  children: [
                    V.jsxs("label", {
                      className: "block text-sm font-medium text-gray-700",
                      children: [
                        "Work email",
                        V.jsx("input", {
                          required: !0,
                          type: "email",
                          name: "email",
                          placeholder: "you@company.com",
                          className: Ke(
                            "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3",
                            "text-sm outline-none ring-gray-900/10 focus:ring-2",
                          ),
                        }),
                      ],
                    }),
                    V.jsxs("label", {
                      className: "mt-4 block text-sm font-medium text-gray-700",
                      children: [
                        "Message",
                        V.jsx("textarea", {
                          required: !0,
                          name: "message",
                          rows: 4,
                          placeholder: "What are you building?",
                          className: Ke(
                            "mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3",
                            "text-sm outline-none ring-gray-900/10 focus:ring-2",
                          ),
                        }),
                      ],
                    }),
                    V.jsx("button", {
                      type: "submit",
                      className: Ke(
                        "mt-6 w-full rounded-full bg-gray-900 py-3.5 text-sm font-semibold text-white",
                        "transition hover:bg-gray-800",
                      ),
                      children: "Send message",
                    }),
                  ],
                }),
          }),
        ],
      }),
    }),
  });
}
function ck() {
  return V.jsx("main", { className: "pt-8", children: V.jsx(Ym, {}) });
}
const fk = [
  {
    icon: YS,
    title: "Quickstart",
    excerpt: "Deploy your first epoch service in under ten minutes with our guided walkthrough.",
    cta: "Read quickstart",
  },
  {
    icon: qS,
    title: "API reference",
    excerpt: "REST and GraphQL endpoints for mesh registration, tokens, and workload scheduling.",
    cta: "View API",
  },
  {
    icon: sk,
    title: "CLI & SDKs",
    excerpt: "TypeScript, Go, and Python clients with local emulation and CI-friendly auth.",
    cta: "Install CLI",
  },
];
function qm() {
  return V.jsx("section", {
    id: "docs",
    className: "scroll-mt-8 px-4 py-20 md:px-8 md:py-28",
    children: V.jsxs("div", {
      className: "mx-auto max-w-[1400px]",
      children: [
        V.jsxs(qe.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-80px" },
          transition: { duration: 0.5 },
          className: "mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
          children: [
            V.jsxs("div", {
              className: "max-w-xl",
              children: [
                V.jsx("p", {
                  className: "text-xs font-medium uppercase tracking-[0.2em] text-gray-500",
                  children: "Documentation",
                }),
                V.jsx("h2", {
                  className: Ke(
                    "mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight",
                    "text-gray-900 md:text-4xl",
                  ),
                  children: "Docs preview",
                }),
                V.jsx("p", {
                  className: "mt-4 text-base leading-relaxed text-gray-600",
                  children:
                    "Everything your team needs to integrate, extend, and operate on Foundation Epoch.",
                }),
              ],
            }),
            V.jsx("button", {
              type: "button",
              onClick: () => fs("contact"),
              className: Ke(
                "shrink-0 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white",
                "transition hover:bg-gray-800",
              ),
              children: "Talk to solutions",
            }),
          ],
        }),
        V.jsx("div", {
          className: "grid gap-6 md:grid-cols-3",
          children: fk.map((n, r) =>
            V.jsxs(
              qe.article,
              {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-40px" },
                transition: { delay: r * 0.06, duration: 0.45 },
                className: Ke(
                  "flex flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm",
                ),
                children: [
                  V.jsx("span", {
                    className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100",
                    children: V.jsx(n.icon, {
                      className: "h-5 w-5 text-gray-800",
                      strokeWidth: 1.75,
                    }),
                  }),
                  V.jsx("h3", {
                    className:
                      "mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900",
                    children: n.title,
                  }),
                  V.jsx("p", {
                    className: "mt-2 flex-1 text-sm leading-relaxed text-gray-600",
                    children: n.excerpt,
                  }),
                  V.jsxs("button", {
                    type: "button",
                    onClick: () => fs("contact"),
                    className:
                      "mt-6 text-left text-sm font-semibold text-gray-900 underline-offset-4 hover:underline",
                    children: [n.cta, " →"],
                  }),
                ],
              },
              n.title,
            ),
          ),
        }),
        V.jsx(qe.pre, {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.45 },
          className: Ke(
            "mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-gray-900 p-6",
            "font-mono text-sm leading-relaxed text-gray-100",
          ),
          children: V.jsx("code", {
            children: `$ epoch init my-app
✓ Mesh credentials configured
✓ Edge pool: us-east-1, eu-west-2
→ https://epoch.foundation/docs/deploy`,
          }),
        }),
      ],
    }),
  });
}
function dk() {
  return V.jsx("main", { className: "pt-8", children: V.jsx(qm, {}) });
}
const hk = [
  {
    icon: ok,
    label: "Intelligence layer",
    stat: "12B+",
    detail: "inference events orchestrated monthly across the epoch mesh.",
  },
  {
    icon: nk,
    label: "Partner mesh",
    stat: "240+",
    detail: "integrations from identity to observability in one catalog.",
  },
  {
    icon: ZS,
    label: "Edge fabric",
    stat: "48",
    detail: "regions with dedicated compute pools and private interconnect.",
  },
];
function Zm() {
  return V.jsx("section", {
    id: "ecosystem",
    className: "scroll-mt-8 bg-white px-4 py-20 md:px-8 md:py-28",
    children: V.jsx("div", {
      className: "mx-auto max-w-[1400px]",
      children: V.jsxs("div", {
        className: "grid gap-12 lg:grid-cols-2 lg:items-end",
        children: [
          V.jsxs(qe.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-80px" },
            transition: { duration: 0.5 },
            children: [
              V.jsx("p", {
                className: "text-xs font-medium uppercase tracking-[0.2em] text-gray-500",
                children: "Ecosystem",
              }),
              V.jsx("h2", {
                className: Ke(
                  "mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight",
                  "text-gray-900 md:text-4xl",
                ),
                children: "An open mesh for builders, partners, and enterprises",
              }),
              V.jsx("p", {
                className: "mt-4 max-w-lg text-base leading-relaxed text-gray-600",
                children:
                  "Connect your stack to Foundation Epoch—marketplace apps, certified partners, and shared governance for long-horizon roadmaps.",
              }),
              V.jsxs("button", {
                type: "button",
                onClick: () => fs("docs"),
                className: Ke(
                  "mt-8 inline-flex items-center gap-2 rounded-full border border-gray-300",
                  "px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400",
                ),
                children: ["Explore the mesh", V.jsx(XS, { className: "h-4 w-4", strokeWidth: 2 })],
              }),
            ],
          }),
          V.jsx("div", {
            className: "space-y-4",
            children: hk.map((n, r) =>
              V.jsxs(
                qe.div,
                {
                  initial: { opacity: 0, x: 16 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0, margin: "-40px" },
                  transition: { delay: r * 0.08, duration: 0.45 },
                  className: "flex gap-5 rounded-3xl border border-gray-100 bg-[#f9fafb] p-6",
                  children: [
                    V.jsx("span", {
                      className:
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm",
                      children: V.jsx(n.icon, {
                        className: "h-5 w-5 text-gray-800",
                        strokeWidth: 1.75,
                      }),
                    }),
                    V.jsxs("div", {
                      children: [
                        V.jsx("p", {
                          className: "text-xs font-medium uppercase tracking-wider text-gray-500",
                          children: n.label,
                        }),
                        V.jsx("p", {
                          className:
                            "mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-gray-900",
                          children: n.stat,
                        }),
                        V.jsx("p", { className: "mt-1 text-sm text-gray-600", children: n.detail }),
                      ],
                    }),
                  ],
                },
                n.label,
              ),
            ),
          }),
        ],
      }),
    }),
  });
}
function pk() {
  return V.jsx("main", { className: "pt-8", children: V.jsx(Zm, {}) });
}
const mk = [
  {
    icon: JS,
    title: "Composable infrastructure",
    description:
      "Ship epoch-scale products on modular primitives—auth, data, and edge in one cohesive layer.",
  },
  {
    icon: Qm,
    title: "Global by default",
    description:
      "Multi-region orchestration with sub-50ms routing so your users feel local everywhere.",
  },
  {
    icon: ik,
    title: "Trust-native security",
    description:
      "Zero-trust defaults, encrypted pipelines, and audit trails built for regulated industries.",
  },
  {
    icon: QS,
    title: "Developer velocity",
    description:
      "SDKs, CLI, and observability that keep teams moving from prototype to production in days.",
  },
];
function Jm() {
  return V.jsx("section", {
    id: "features",
    className: "scroll-mt-8 px-4 py-20 md:px-8 md:py-28",
    children: V.jsxs("div", {
      className: "mx-auto max-w-[1400px]",
      children: [
        V.jsxs(qe.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-80px" },
          transition: { duration: 0.5 },
          className: "mb-14 max-w-2xl",
          children: [
            V.jsx("p", {
              className: "text-xs font-medium uppercase tracking-[0.2em] text-gray-500",
              children: "Features",
            }),
            V.jsx("h2", {
              className: Ke(
                "mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight",
                "text-gray-900 md:text-4xl",
              ),
              children: "Everything you need to build the next era",
            }),
            V.jsx("p", {
              className: "mt-4 text-base leading-relaxed text-gray-600",
              children:
                "A unified platform for teams defining what comes after the cloud-native generation.",
            }),
          ],
        }),
        V.jsx("div", {
          className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
          children: mk.map((n, r) =>
            V.jsxs(
              qe.article,
              {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-40px" },
                transition: { delay: r * 0.06, duration: 0.45 },
                className: Ke(
                  "rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm",
                  "transition-shadow hover:shadow-md",
                ),
                children: [
                  V.jsx("span", {
                    className:
                      "flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100 text-gray-800",
                    children: V.jsx(n.icon, { className: "h-5 w-5", strokeWidth: 1.75 }),
                  }),
                  V.jsx("h3", {
                    className:
                      "mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900",
                    children: n.title,
                  }),
                  V.jsx("p", {
                    className: "mt-2 text-sm leading-relaxed text-gray-600",
                    children: n.description,
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
const gk =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4";
function yk() {
  return V.jsx("section", {
    id: "hero",
    className: "px-4 pb-4 pt-8 md:px-8 md:pt-12",
    children: V.jsxs("div", {
      className: Ke(
        "relative mx-auto h-[600px] w-full max-w-[1400px] overflow-hidden rounded-[48px]",
        "shadow-xl shadow-gray-900/10",
      ),
      children: [
        V.jsx("video", {
          autoPlay: !0,
          muted: !0,
          loop: !0,
          playsInline: !0,
          className: "absolute inset-0 h-full w-full object-cover",
          children: V.jsx("source", { src: gk, type: "video/mp4" }),
        }),
        V.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10",
          "aria-hidden": !0,
        }),
        V.jsxs("div", {
          className: "relative z-10 flex h-full flex-col justify-end p-8 md:p-12 lg:p-14",
          children: [
            V.jsx(qe.p, {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: "mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/60",
              children: "Foundation Epoch",
            }),
            V.jsx(qe.h1, {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.1, duration: 0.55 },
              className:
                "max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl",
              children: "Foundation of the new digital epoch",
            }),
            V.jsx(qe.div, {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.25, duration: 0.5 },
              className: "mt-8",
              children: V.jsxs("button", {
                type: "button",
                onClick: () => fs("contact"),
                className: Ke(
                  "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5",
                  "text-sm font-semibold text-gray-900 transition hover:bg-gray-100",
                ),
                children: ["Contact Us", V.jsx(GS, { className: "h-4 w-4", strokeWidth: 2 })],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const Jh = [
  { name: "Vercel", src: "https://svgl.app/library/vercel.svg" },
  { name: "Linear", src: "https://svgl.app/library/linear.svg" },
  { name: "Stripe", src: "https://svgl.app/library/stripe.svg" },
  { name: "Notion", src: "https://svgl.app/library/notion.svg" },
  { name: "Figma", src: "https://svgl.app/library/figma.svg" },
  { name: "GitHub", src: "https://svgl.app/library/github.svg" },
  { name: "Discord", src: "https://svgl.app/library/discord.svg" },
  { name: "Slack", src: "https://svgl.app/library/slack.svg" },
];
function vk({ name: n, src: r }) {
  return V.jsx("div", {
    className: "flex shrink-0 items-center justify-center px-6",
    children: V.jsx("img", {
      src: r,
      alt: n,
      width: 120,
      height: 36,
      className:
        "h-8 w-auto max-w-[120px] object-contain opacity-70 grayscale transition-opacity hover:opacity-100",
      loading: "lazy",
    }),
  });
}
function xk() {
  const n = [...Jh, ...Jh];
  return V.jsxs("section", {
    className: "w-full py-12 md:py-16",
    "aria-label": "Trusted partners",
    children: [
      V.jsx("p", {
        className: "mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500",
        children: "Built for teams shaping the next epoch",
      }),
      V.jsx("div", {
        className: "marquee-mask relative overflow-hidden",
        children: V.jsx("div", {
          className: "marquee-track",
          children: n.map((r, o) => V.jsx(vk, { ...r }, `${r.name}-${o}`)),
        }),
      }),
    ],
  });
}
function wk() {
  return V.jsxs("main", {
    children: [
      V.jsx(yk, {}),
      V.jsx(xk, {}),
      V.jsx("div", { id: "products", className: "scroll-mt-24 pt-8", children: V.jsx(Jm, {}) }),
      V.jsx("div", { id: "ecosystem", className: "scroll-mt-24", children: V.jsx(Zm, {}) }),
      V.jsx("div", { id: "docs", className: "scroll-mt-24", children: V.jsx(qm, {}) }),
      V.jsx("div", { id: "contact", className: "scroll-mt-24", children: V.jsx(Ym, {}) }),
    ],
  });
}
function Sk() {
  return V.jsx("main", { className: "pt-8", children: V.jsx(Jm, {}) });
}
function kk() {
  return (
    J.useEffect(() => {
      np();
    }, []),
    V.jsxs("div", {
      className: "min-h-screen bg-[#f9fafb]",
      children: [
        V.jsx(dv, {
          routes: {
            "": V.jsx(wk, {}),
            products: V.jsx(Sk, {}),
            ecosystem: V.jsx(pk, {}),
            docs: V.jsx(dk, {}),
            about: V.jsx(uk, {}),
            contact: V.jsx(ck, {}),
          },
        }),
        V.jsx(WS, {}),
      ],
    })
  );
}
iv.createRoot(document.getElementById("root")).render(
  V.jsx(J.StrictMode, { children: V.jsx(kk, {}) }),
);
