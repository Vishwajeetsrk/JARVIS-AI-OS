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
var na = { exports: {} },
  li = {},
  ra = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd;
function Dy() {
  if (vd) return se;
  vd = 1;
  var n = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function S(P) {
    return P === null || typeof P != "object"
      ? null
      : ((P = (x && P[x]) || P["@@iterator"]), typeof P == "function" ? P : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    V = Object.assign,
    D = {};
  function j(P, N, re) {
    ((this.props = P), (this.context = N), (this.refs = D), (this.updater = re || A));
  }
  ((j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (P, N) {
      if (typeof P != "object" && typeof P != "function" && P != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, P, N, "setState");
    }),
    (j.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, "forceUpdate");
    }));
  function I() {}
  I.prototype = j.prototype;
  function W(P, N, re) {
    ((this.props = P), (this.context = N), (this.refs = D), (this.updater = re || A));
  }
  var K = (W.prototype = new I());
  ((K.constructor = W), V(K, j.prototype), (K.isPureReactComponent = !0));
  var te = Array.isArray,
    Y = Object.prototype.hasOwnProperty,
    ne = { current: null },
    ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(P, N, re) {
    var oe,
      ue = {},
      ce = null,
      me = null;
    if (N != null)
      for (oe in (N.ref !== void 0 && (me = N.ref), N.key !== void 0 && (ce = "" + N.key), N))
        Y.call(N, oe) && !ae.hasOwnProperty(oe) && (ue[oe] = N[oe]);
    var he = arguments.length - 2;
    if (he === 1) ue.children = re;
    else if (1 < he) {
      for (var xe = Array(he), ot = 0; ot < he; ot++) xe[ot] = arguments[ot + 2];
      ue.children = xe;
    }
    if (P && P.defaultProps)
      for (oe in ((he = P.defaultProps), he)) ue[oe] === void 0 && (ue[oe] = he[oe]);
    return { $$typeof: n, type: P, key: ce, ref: me, props: ue, _owner: ne.current };
  }
  function Se(P, N) {
    return { $$typeof: n, type: P.type, key: N, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function Ee(P) {
    return typeof P == "object" && P !== null && P.$$typeof === n;
  }
  function Ze(P) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      P.replace(/[=:]/g, function (re) {
        return N[re];
      })
    );
  }
  var st = /\/+/g;
  function Ge(P, N) {
    return typeof P == "object" && P !== null && P.key != null ? Ze("" + P.key) : N.toString(36);
  }
  function be(P, N, re, oe, ue) {
    var ce = typeof P;
    (ce === "undefined" || ce === "boolean") && (P = null);
    var me = !1;
    if (P === null) me = !0;
    else
      switch (ce) {
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (P.$$typeof) {
            case n:
            case r:
              me = !0;
          }
      }
    if (me)
      return (
        (me = P),
        (ue = ue(me)),
        (P = oe === "" ? "." + Ge(me, 0) : oe),
        te(ue)
          ? ((re = ""),
            P != null && (re = P.replace(st, "$&/") + "/"),
            be(ue, N, re, "", function (ot) {
              return ot;
            }))
          : ue != null &&
            (Ee(ue) &&
              (ue = Se(
                ue,
                re +
                  (!ue.key || (me && me.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(st, "$&/") + "/") +
                  P,
              )),
            N.push(ue)),
        1
      );
    if (((me = 0), (oe = oe === "" ? "." : oe + ":"), te(P)))
      for (var he = 0; he < P.length; he++) {
        ce = P[he];
        var xe = oe + Ge(ce, he);
        me += be(ce, N, re, xe, ue);
      }
    else if (((xe = S(P)), typeof xe == "function"))
      for (P = xe.call(P), he = 0; !(ce = P.next()).done;)
        ((ce = ce.value), (xe = oe + Ge(ce, he++)), (me += be(ce, N, re, xe, ue)));
    else if (ce === "object")
      throw (
        (N = String(P)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : N) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return me;
  }
  function wt(P, N, re) {
    if (P == null) return P;
    var oe = [],
      ue = 0;
    return (
      be(P, oe, "", "", function (ce) {
        return N.call(re, ce, ue++);
      }),
      oe
    );
  }
  function Qe(P) {
    if (P._status === -1) {
      var N = P._result;
      ((N = N()),
        N.then(
          function (re) {
            (P._status === 0 || P._status === -1) && ((P._status = 1), (P._result = re));
          },
          function (re) {
            (P._status === 0 || P._status === -1) && ((P._status = 2), (P._result = re));
          },
        ),
        P._status === -1 && ((P._status = 0), (P._result = N)));
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var ie = { current: null },
    F = { transition: null },
    X = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: F, ReactCurrentOwner: ne };
  function B() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (se.Children = {
      map: wt,
      forEach: function (P, N, re) {
        wt(
          P,
          function () {
            N.apply(this, arguments);
          },
          re,
        );
      },
      count: function (P) {
        var N = 0;
        return (
          wt(P, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (P) {
        return (
          wt(P, function (N) {
            return N;
          }) || []
        );
      },
      only: function (P) {
        if (!Ee(P))
          throw Error("React.Children.only expected to receive a single React element child.");
        return P;
      },
    }),
    (se.Component = j),
    (se.Fragment = s),
    (se.Profiler = u),
    (se.PureComponent = W),
    (se.StrictMode = l),
    (se.Suspense = m),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (se.act = B),
    (se.cloneElement = function (P, N, re) {
      if (P == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            P +
            ".",
        );
      var oe = V({}, P.props),
        ue = P.key,
        ce = P.ref,
        me = P._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((ce = N.ref), (me = ne.current)),
          N.key !== void 0 && (ue = "" + N.key),
          P.type && P.type.defaultProps)
        )
          var he = P.type.defaultProps;
        for (xe in N)
          Y.call(N, xe) &&
            !ae.hasOwnProperty(xe) &&
            (oe[xe] = N[xe] === void 0 && he !== void 0 ? he[xe] : N[xe]);
      }
      var xe = arguments.length - 2;
      if (xe === 1) oe.children = re;
      else if (1 < xe) {
        he = Array(xe);
        for (var ot = 0; ot < xe; ot++) he[ot] = arguments[ot + 2];
        oe.children = he;
      }
      return { $$typeof: n, type: P.type, key: ue, ref: ce, props: oe, _owner: me };
    }),
    (se.createContext = function (P) {
      return (
        (P = {
          $$typeof: f,
          _currentValue: P,
          _currentValue2: P,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (P.Provider = { $$typeof: d, _context: P }),
        (P.Consumer = P)
      );
    }),
    (se.createElement = b),
    (se.createFactory = function (P) {
      var N = b.bind(null, P);
      return ((N.type = P), N);
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (P) {
      return { $$typeof: p, render: P };
    }),
    (se.isValidElement = Ee),
    (se.lazy = function (P) {
      return { $$typeof: y, _payload: { _status: -1, _result: P }, _init: Qe };
    }),
    (se.memo = function (P, N) {
      return { $$typeof: g, type: P, compare: N === void 0 ? null : N };
    }),
    (se.startTransition = function (P) {
      var N = F.transition;
      F.transition = {};
      try {
        P();
      } finally {
        F.transition = N;
      }
    }),
    (se.unstable_act = B),
    (se.useCallback = function (P, N) {
      return ie.current.useCallback(P, N);
    }),
    (se.useContext = function (P) {
      return ie.current.useContext(P);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (P) {
      return ie.current.useDeferredValue(P);
    }),
    (se.useEffect = function (P, N) {
      return ie.current.useEffect(P, N);
    }),
    (se.useId = function () {
      return ie.current.useId();
    }),
    (se.useImperativeHandle = function (P, N, re) {
      return ie.current.useImperativeHandle(P, N, re);
    }),
    (se.useInsertionEffect = function (P, N) {
      return ie.current.useInsertionEffect(P, N);
    }),
    (se.useLayoutEffect = function (P, N) {
      return ie.current.useLayoutEffect(P, N);
    }),
    (se.useMemo = function (P, N) {
      return ie.current.useMemo(P, N);
    }),
    (se.useReducer = function (P, N, re) {
      return ie.current.useReducer(P, N, re);
    }),
    (se.useRef = function (P) {
      return ie.current.useRef(P);
    }),
    (se.useState = function (P) {
      return ie.current.useState(P);
    }),
    (se.useSyncExternalStore = function (P, N, re) {
      return ie.current.useSyncExternalStore(P, N, re);
    }),
    (se.useTransition = function () {
      return ie.current.useTransition();
    }),
    (se.version = "18.3.1"),
    se
  );
}
var xd;
function za() {
  return (xd || ((xd = 1), (ra.exports = Dy())), ra.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd;
function Ly() {
  if (wd) return li;
  wd = 1;
  var n = za(),
    r = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, g) {
    var y,
      x = {},
      S = null,
      A = null;
    (g !== void 0 && (S = "" + g),
      m.key !== void 0 && (S = "" + m.key),
      m.ref !== void 0 && (A = m.ref));
    for (y in m) l.call(m, y) && !d.hasOwnProperty(y) && (x[y] = m[y]);
    if (p && p.defaultProps) for (y in ((m = p.defaultProps), m)) x[y] === void 0 && (x[y] = m[y]);
    return { $$typeof: r, type: p, key: S, ref: A, props: x, _owner: u.current };
  }
  return ((li.Fragment = s), (li.jsx = f), (li.jsxs = f), li);
}
var Sd;
function Ny() {
  return (Sd || ((Sd = 1), (na.exports = Ly())), na.exports);
}
var R = Ny(),
  Q = za(),
  Fs = {},
  ia = { exports: {} },
  it = {},
  sa = { exports: {} },
  oa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kd;
function My() {
  return (
    kd ||
      ((kd = 1),
      (function (n) {
        function r(F, X) {
          var B = F.length;
          F.push(X);
          e: for (; 0 < B;) {
            var P = (B - 1) >>> 1,
              N = F[P];
            if (0 < u(N, X)) ((F[P] = X), (F[B] = N), (B = P));
            else break e;
          }
        }
        function s(F) {
          return F.length === 0 ? null : F[0];
        }
        function l(F) {
          if (F.length === 0) return null;
          var X = F[0],
            B = F.pop();
          if (B !== X) {
            F[0] = B;
            e: for (var P = 0, N = F.length, re = N >>> 1; P < re;) {
              var oe = 2 * (P + 1) - 1,
                ue = F[oe],
                ce = oe + 1,
                me = F[ce];
              if (0 > u(ue, B))
                ce < N && 0 > u(me, ue)
                  ? ((F[P] = me), (F[ce] = B), (P = ce))
                  : ((F[P] = ue), (F[oe] = B), (P = oe));
              else if (ce < N && 0 > u(me, B)) ((F[P] = me), (F[ce] = B), (P = ce));
              else break e;
            }
          }
          return X;
        }
        function u(F, X) {
          var B = F.sortIndex - X.sortIndex;
          return B !== 0 ? B : F.id - X.id;
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
          x = null,
          S = 3,
          A = !1,
          V = !1,
          D = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function K(F) {
          for (var X = s(g); X !== null;) {
            if (X.callback === null) l(g);
            else if (X.startTime <= F) (l(g), (X.sortIndex = X.expirationTime), r(m, X));
            else break;
            X = s(g);
          }
        }
        function te(F) {
          if (((D = !1), K(F), !V))
            if (s(m) !== null) ((V = !0), Qe(Y));
            else {
              var X = s(g);
              X !== null && ie(te, X.startTime - F);
            }
        }
        function Y(F, X) {
          ((V = !1), D && ((D = !1), I(b), (b = -1)), (A = !0));
          var B = S;
          try {
            for (K(X), x = s(m); x !== null && (!(x.expirationTime > X) || (F && !Ze()));) {
              var P = x.callback;
              if (typeof P == "function") {
                ((x.callback = null), (S = x.priorityLevel));
                var N = P(x.expirationTime <= X);
                ((X = n.unstable_now()),
                  typeof N == "function" ? (x.callback = N) : x === s(m) && l(m),
                  K(X));
              } else l(m);
              x = s(m);
            }
            if (x !== null) var re = !0;
            else {
              var oe = s(g);
              (oe !== null && ie(te, oe.startTime - X), (re = !1));
            }
            return re;
          } finally {
            ((x = null), (S = B), (A = !1));
          }
        }
        var ne = !1,
          ae = null,
          b = -1,
          Se = 5,
          Ee = -1;
        function Ze() {
          return !(n.unstable_now() - Ee < Se);
        }
        function st() {
          if (ae !== null) {
            var F = n.unstable_now();
            Ee = F;
            var X = !0;
            try {
              X = ae(!0, F);
            } finally {
              X ? Ge() : ((ne = !1), (ae = null));
            }
          } else ne = !1;
        }
        var Ge;
        if (typeof W == "function")
          Ge = function () {
            W(st);
          };
        else if (typeof MessageChannel < "u") {
          var be = new MessageChannel(),
            wt = be.port2;
          ((be.port1.onmessage = st),
            (Ge = function () {
              wt.postMessage(null);
            }));
        } else
          Ge = function () {
            j(st, 0);
          };
        function Qe(F) {
          ((ae = F), ne || ((ne = !0), Ge()));
        }
        function ie(F, X) {
          b = j(function () {
            F(n.unstable_now());
          }, X);
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
            V || A || ((V = !0), Qe(Y));
          }),
          (n.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Se = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (n.unstable_next = function (F) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = S;
            }
            var B = S;
            S = X;
            try {
              return F();
            } finally {
              S = B;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (F, X) {
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
            var B = S;
            S = F;
            try {
              return X();
            } finally {
              S = B;
            }
          }),
          (n.unstable_scheduleCallback = function (F, X, B) {
            var P = n.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? P + B : P))
                : (B = P),
              F)
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
              (N = B + N),
              (F = {
                id: y++,
                callback: X,
                priorityLevel: F,
                startTime: B,
                expirationTime: N,
                sortIndex: -1,
              }),
              B > P
                ? ((F.sortIndex = B),
                  r(g, F),
                  s(m) === null && F === s(g) && (D ? (I(b), (b = -1)) : (D = !0), ie(te, B - P)))
                : ((F.sortIndex = N), r(m, F), V || A || ((V = !0), Qe(Y))),
              F
            );
          }),
          (n.unstable_shouldYield = Ze),
          (n.unstable_wrapCallback = function (F) {
            var X = S;
            return function () {
              var B = S;
              S = X;
              try {
                return F.apply(this, arguments);
              } finally {
                S = B;
              }
            };
          }));
      })(oa)),
    oa
  );
}
var Pd;
function Vy() {
  return (Pd || ((Pd = 1), (sa.exports = My())), sa.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td;
function _y() {
  if (Td) return it;
  Td = 1;
  var n = za(),
    r = Vy();
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
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    x = {};
  function S(e) {
    return m.call(x, e) ? !0 : m.call(y, e) ? !1 : g.test(e) ? (x[e] = !0) : ((y[e] = !0), !1);
  }
  function A(e, t, i, o) {
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
  function V(e, t, i, o) {
    if (t === null || typeof t > "u" || A(e, t, i, o)) return !0;
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
  function D(e, t, i, o, a, c, h) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = a),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = h));
  }
  var j = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      j[e] = new D(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      j[t] = new D(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      j[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        j[e] = new D(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        j[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      j[e] = new D(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      j[e] = new D(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      j[e] = new D(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      j[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var I = /[\-:]([a-z])/g;
  function W(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, W);
      j[t] = new D(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, W);
        j[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, W);
      j[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      j[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (j.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      j[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function K(e, t, i, o) {
    var a = j.hasOwnProperty(t) ? j[t] : null;
    (a !== null
      ? a.type !== 0
      : o || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (V(t, i, a, o) && (i = null),
      o || a === null
        ? S(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i))
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
  var te = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Y = Symbol.for("react.element"),
    ne = Symbol.for("react.portal"),
    ae = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    Se = Symbol.for("react.profiler"),
    Ee = Symbol.for("react.provider"),
    Ze = Symbol.for("react.context"),
    st = Symbol.for("react.forward_ref"),
    Ge = Symbol.for("react.suspense"),
    be = Symbol.for("react.suspense_list"),
    wt = Symbol.for("react.memo"),
    Qe = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    F = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var B = Object.assign,
    P;
  function N(e) {
    if (P === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        P = (t && t[1]) || "";
      }
    return (
      `
` +
      P +
      e
    );
  }
  var re = !1;
  function oe(e, t) {
    if (!e || re) return "";
    re = !0;
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
          } catch (C) {
            var o = C;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (C) {
            o = C;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (C) {
          o = C;
        }
        e();
      }
    } catch (C) {
      if (C && o && typeof C.stack == "string") {
        for (
          var a = C.stack.split(`
`),
            c = o.stack.split(`
`),
            h = a.length - 1,
            v = c.length - 1;
          1 <= h && 0 <= v && a[h] !== c[v];
        )
          v--;
        for (; 1 <= h && 0 <= v; h--, v--)
          if (a[h] !== c[v]) {
            if (h !== 1 || v !== 1)
              do
                if ((h--, v--, 0 > v || a[h] !== c[v])) {
                  var w =
                    `
` + a[h].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      w.includes("<anonymous>") &&
                      (w = w.replace("<anonymous>", e.displayName)),
                    w
                  );
                }
              while (1 <= h && 0 <= v);
            break;
          }
      }
    } finally {
      ((re = !1), (Error.prepareStackTrace = i));
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function ue(e) {
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
        return ((e = oe(e.type, !1)), e);
      case 11:
        return ((e = oe(e.type.render, !1)), e);
      case 1:
        return ((e = oe(e.type, !0)), e);
      default:
        return "";
    }
  }
  function ce(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ae:
        return "Fragment";
      case ne:
        return "Portal";
      case Se:
        return "Profiler";
      case b:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ze:
          return (e.displayName || "Context") + ".Consumer";
        case Ee:
          return (e._context.displayName || "Context") + ".Provider";
        case st:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case wt:
          return ((t = e.displayName || null), t !== null ? t : ce(e.type) || "Memo");
        case Qe:
          ((t = e._payload), (e = e._init));
          try {
            return ce(e(t));
          } catch {}
      }
    return null;
  }
  function me(e) {
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
        return t === b ? "StrictMode" : "Mode";
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
  function xe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ot(e) {
    var t = xe(e) ? "checked" : "value",
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
          set: function (h) {
            ((o = "" + h), c.call(this, h));
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
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
  function Ai(e) {
    e._valueTracker || (e._valueTracker = ot(e));
  }
  function Pu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      o = "";
    return (
      e && (o = xe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== i ? (t.setValue(e), !0) : !1
    );
  }
  function Ri(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ao(e, t) {
    var i = t.checked;
    return B({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function Tu(e, t) {
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
  function Eu(e, t) {
    ((t = t.checked), t != null && K(e, "checked", t, !1));
  }
  function uo(e, t) {
    Eu(e, t);
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
      ? co(e, t.type, i)
      : t.hasOwnProperty("defaultValue") && co(e, t.type, he(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Cu(e, t, i) {
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
  function co(e, t, i) {
    (t !== "number" || Ri(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var kr = Array.isArray;
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
  function fo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return B({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Au(e, t) {
    var i = t.value;
    if (i == null) {
      if (((i = t.children), (t = t.defaultValue), i != null)) {
        if (t != null) throw Error(s(92));
        if (kr(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        t = i;
      }
      (t == null && (t = ""), (i = t));
    }
    e._wrapperState = { initialValue: he(i) };
  }
  function Ru(e, t) {
    var i = he(t.value),
      o = he(t.defaultValue);
    (i != null &&
      ((i = "" + i),
      i !== e.value && (e.value = i),
      t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      o != null && (e.defaultValue = "" + o));
  }
  function Du(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Lu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ho(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Lu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Di,
    Nu = (function (e) {
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
          Di = Di || document.createElement("div"),
            Di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Di.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Pr(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
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
    Vm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Tr).forEach(function (e) {
    Vm.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]));
    });
  });
  function Mu(e, t, i) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : i || typeof t != "number" || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Vu(e, t) {
    e = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var o = i.indexOf("--") === 0,
          a = Mu(i, t[i], o);
        (i === "float" && (i = "cssFloat"), o ? e.setProperty(i, a) : (e[i] = a));
      }
  }
  var _m = B(
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
  function po(e, t) {
    if (t) {
      if (_m[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function mo(e, t) {
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
  var go = null;
  function yo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var vo = null,
    $n = null,
    Hn = null;
  function _u(e) {
    if ((e = Gr(e))) {
      if (typeof vo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = bi(t)), vo(e.stateNode, e.type, t));
    }
  }
  function ju(e) {
    $n ? (Hn ? Hn.push(e) : (Hn = [e])) : ($n = e);
  }
  function Ou() {
    if ($n) {
      var e = $n,
        t = Hn;
      if (((Hn = $n = null), _u(e), t)) for (e = 0; e < t.length; e++) _u(t[e]);
    }
  }
  function Fu(e, t) {
    return e(t);
  }
  function Iu() {}
  var xo = !1;
  function zu(e, t, i) {
    if (xo) return e(t, i);
    xo = !0;
    try {
      return Fu(e, t, i);
    } finally {
      ((xo = !1), ($n !== null || Hn !== null) && (Iu(), Ou()));
    }
  }
  function Er(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = bi(i);
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
  var wo = !1;
  if (p)
    try {
      var Cr = {};
      (Object.defineProperty(Cr, "passive", {
        get: function () {
          wo = !0;
        },
      }),
        window.addEventListener("test", Cr, Cr),
        window.removeEventListener("test", Cr, Cr));
    } catch {
      wo = !1;
    }
  function jm(e, t, i, o, a, c, h, v, w) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, C);
    } catch (M) {
      this.onError(M);
    }
  }
  var Ar = !1,
    Li = null,
    Ni = !1,
    So = null,
    Om = {
      onError: function (e) {
        ((Ar = !0), (Li = e));
      },
    };
  function Fm(e, t, i, o, a, c, h, v, w) {
    ((Ar = !1), (Li = null), jm.apply(Om, arguments));
  }
  function Im(e, t, i, o, a, c, h, v, w) {
    if ((Fm.apply(this, arguments), Ar)) {
      if (Ar) {
        var C = Li;
        ((Ar = !1), (Li = null));
      } else throw Error(s(198));
      Ni || ((Ni = !0), (So = C));
    }
  }
  function Sn(e) {
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
  function Bu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Uu(e) {
    if (Sn(e) !== e) throw Error(s(188));
  }
  function zm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Sn(e)), t === null)) throw Error(s(188));
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
          if (c === i) return (Uu(a), e);
          if (c === o) return (Uu(a), t);
          c = c.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== o.return) ((i = a), (o = c));
      else {
        for (var h = !1, v = a.child; v;) {
          if (v === i) {
            ((h = !0), (i = a), (o = c));
            break;
          }
          if (v === o) {
            ((h = !0), (o = a), (i = c));
            break;
          }
          v = v.sibling;
        }
        if (!h) {
          for (v = c.child; v;) {
            if (v === i) {
              ((h = !0), (i = c), (o = a));
              break;
            }
            if (v === o) {
              ((h = !0), (o = c), (i = a));
              break;
            }
            v = v.sibling;
          }
          if (!h) throw Error(s(189));
        }
      }
      if (i.alternate !== o) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? e : t;
  }
  function Wu(e) {
    return ((e = zm(e)), e !== null ? $u(e) : null);
  }
  function $u(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = $u(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Hu = r.unstable_scheduleCallback,
    Ku = r.unstable_cancelCallback,
    Bm = r.unstable_shouldYield,
    Um = r.unstable_requestPaint,
    Re = r.unstable_now,
    Wm = r.unstable_getCurrentPriorityLevel,
    ko = r.unstable_ImmediatePriority,
    Gu = r.unstable_UserBlockingPriority,
    Mi = r.unstable_NormalPriority,
    $m = r.unstable_LowPriority,
    Qu = r.unstable_IdlePriority,
    Vi = null,
    Lt = null;
  function Hm(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function")
      try {
        Lt.onCommitFiberRoot(Vi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : Qm,
    Km = Math.log,
    Gm = Math.LN2;
  function Qm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Km(e) / Gm) | 0)) | 0);
  }
  var _i = 64,
    ji = 4194304;
  function Rr(e) {
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
  function Oi(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0,
      a = e.suspendedLanes,
      c = e.pingedLanes,
      h = i & 268435455;
    if (h !== 0) {
      var v = h & ~a;
      v !== 0 ? (o = Rr(v)) : ((c &= h), c !== 0 && (o = Rr(c)));
    } else ((h = i & ~a), h !== 0 ? (o = Rr(h)) : c !== 0 && (o = Rr(c)));
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
        ((i = 31 - St(t)), (a = 1 << i), (o |= e[i]), (t &= ~a));
    return o;
  }
  function Ym(e, t) {
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
  function Xm(e, t) {
    for (
      var i = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, c = e.pendingLanes;
      0 < c;
    ) {
      var h = 31 - St(c),
        v = 1 << h,
        w = a[h];
      (w === -1
        ? ((v & i) === 0 || (v & o) !== 0) && (a[h] = Ym(v, t))
        : w <= t && (e.expiredLanes |= v),
        (c &= ~v));
    }
  }
  function Po(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Yu() {
    var e = _i;
    return ((_i <<= 1), (_i & 4194240) === 0 && (_i = 64), e);
  }
  function To(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Dr(e, t, i) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - St(t)),
      (e[t] = i));
  }
  function qm(e, t) {
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
      var a = 31 - St(i),
        c = 1 << a;
      ((t[a] = 0), (o[a] = -1), (e[a] = -1), (i &= ~c));
    }
  }
  function Eo(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i;) {
      var o = 31 - St(i),
        a = 1 << o;
      ((a & t) | (e[o] & t) && (e[o] |= t), (i &= ~a));
    }
  }
  var pe = 0;
  function Xu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var qu,
    Co,
    Zu,
    bu,
    Ju,
    Ao = !1,
    Fi = [],
    Zt = null,
    bt = null,
    Jt = null,
    Lr = new Map(),
    Nr = new Map(),
    en = [],
    Zm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function ec(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Zt = null;
        break;
      case "dragenter":
      case "dragleave":
        bt = null;
        break;
      case "mouseover":
      case "mouseout":
        Jt = null;
        break;
      case "pointerover":
      case "pointerout":
        Lr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nr.delete(t.pointerId);
    }
  }
  function Mr(e, t, i, o, a, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: i,
          eventSystemFlags: o,
          nativeEvent: c,
          targetContainers: [a],
        }),
        t !== null && ((t = Gr(t)), t !== null && Co(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function bm(e, t, i, o, a) {
    switch (t) {
      case "focusin":
        return ((Zt = Mr(Zt, e, t, i, o, a)), !0);
      case "dragenter":
        return ((bt = Mr(bt, e, t, i, o, a)), !0);
      case "mouseover":
        return ((Jt = Mr(Jt, e, t, i, o, a)), !0);
      case "pointerover":
        var c = a.pointerId;
        return (Lr.set(c, Mr(Lr.get(c) || null, e, t, i, o, a)), !0);
      case "gotpointercapture":
        return ((c = a.pointerId), Nr.set(c, Mr(Nr.get(c) || null, e, t, i, o, a)), !0);
    }
    return !1;
  }
  function tc(e) {
    var t = kn(e.target);
    if (t !== null) {
      var i = Sn(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = Bu(i)), t !== null)) {
            ((e.blockedOn = t),
              Ju(e.priority, function () {
                Zu(i);
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
  function Ii(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var i = Do(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(i.type, i);
        ((go = o), i.target.dispatchEvent(o), (go = null));
      } else return ((t = Gr(i)), t !== null && Co(t), (e.blockedOn = i), !1);
      t.shift();
    }
    return !0;
  }
  function nc(e, t, i) {
    Ii(e) && i.delete(t);
  }
  function Jm() {
    ((Ao = !1),
      Zt !== null && Ii(Zt) && (Zt = null),
      bt !== null && Ii(bt) && (bt = null),
      Jt !== null && Ii(Jt) && (Jt = null),
      Lr.forEach(nc),
      Nr.forEach(nc));
  }
  function Vr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ao || ((Ao = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Jm)));
  }
  function _r(e) {
    function t(a) {
      return Vr(a, e);
    }
    if (0 < Fi.length) {
      Vr(Fi[0], e);
      for (var i = 1; i < Fi.length; i++) {
        var o = Fi[i];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Zt !== null && Vr(Zt, e),
        bt !== null && Vr(bt, e),
        Jt !== null && Vr(Jt, e),
        Lr.forEach(t),
        Nr.forEach(t),
        i = 0;
      i < en.length;
      i++
    )
      ((o = en[i]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < en.length && ((i = en[0]), i.blockedOn === null);)
      (tc(i), i.blockedOn === null && en.shift());
  }
  var Kn = te.ReactCurrentBatchConfig,
    zi = !0;
  function eg(e, t, i, o) {
    var a = pe,
      c = Kn.transition;
    Kn.transition = null;
    try {
      ((pe = 1), Ro(e, t, i, o));
    } finally {
      ((pe = a), (Kn.transition = c));
    }
  }
  function tg(e, t, i, o) {
    var a = pe,
      c = Kn.transition;
    Kn.transition = null;
    try {
      ((pe = 4), Ro(e, t, i, o));
    } finally {
      ((pe = a), (Kn.transition = c));
    }
  }
  function Ro(e, t, i, o) {
    if (zi) {
      var a = Do(e, t, i, o);
      if (a === null) (Go(e, t, o, Bi, i), ec(e, o));
      else if (bm(a, e, t, i, o)) o.stopPropagation();
      else if ((ec(e, o), t & 4 && -1 < Zm.indexOf(e))) {
        for (; a !== null;) {
          var c = Gr(a);
          if (
            (c !== null && qu(c), (c = Do(e, t, i, o)), c === null && Go(e, t, o, Bi, i), c === a)
          )
            break;
          a = c;
        }
        a !== null && o.stopPropagation();
      } else Go(e, t, o, null, i);
    }
  }
  var Bi = null;
  function Do(e, t, i, o) {
    if (((Bi = null), (e = yo(o)), (e = kn(e)), e !== null))
      if (((t = Sn(e)), t === null)) e = null;
      else if (((i = t.tag), i === 13)) {
        if (((e = Bu(t)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Bi = e), null);
  }
  function rc(e) {
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
        switch (Wm()) {
          case ko:
            return 1;
          case Gu:
            return 4;
          case Mi:
          case $m:
            return 16;
          case Qu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var tn = null,
    Lo = null,
    Ui = null;
  function ic() {
    if (Ui) return Ui;
    var e,
      t = Lo,
      i = t.length,
      o,
      a = "value" in tn ? tn.value : tn.textContent,
      c = a.length;
    for (e = 0; e < i && t[e] === a[e]; e++);
    var h = i - e;
    for (o = 1; o <= h && t[i - o] === a[c - o]; o++);
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
  function $i() {
    return !0;
  }
  function sc() {
    return !1;
  }
  function lt(e) {
    function t(i, o, a, c, h) {
      ((this._reactName = i),
        (this._targetInst = a),
        (this.type = o),
        (this.nativeEvent = c),
        (this.target = h),
        (this.currentTarget = null));
      for (var v in e) e.hasOwnProperty(v) && ((i = e[v]), (this[v] = i ? i(c) : c[v]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? $i
          : sc),
        (this.isPropagationStopped = sc),
        this
      );
    }
    return (
      B(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = $i));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = $i));
        },
        persist: function () {},
        isPersistent: $i,
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
    No = lt(Gn),
    jr = B({}, Gn, { view: 0, detail: 0 }),
    ng = lt(jr),
    Mo,
    Vo,
    Or,
    Hi = B({}, jr, {
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
      getModifierState: jo,
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
          : (e !== Or &&
              (Or && e.type === "mousemove"
                ? ((Mo = e.screenX - Or.screenX), (Vo = e.screenY - Or.screenY))
                : (Vo = Mo = 0),
              (Or = e)),
            Mo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Vo;
      },
    }),
    oc = lt(Hi),
    rg = B({}, Hi, { dataTransfer: 0 }),
    ig = lt(rg),
    sg = B({}, jr, { relatedTarget: 0 }),
    _o = lt(sg),
    og = B({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lg = lt(og),
    ag = B({}, Gn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ug = lt(ag),
    cg = B({}, Gn, { data: 0 }),
    lc = lt(cg),
    fg = {
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
    dg = {
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
    hg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function pg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = hg[e]) ? !!t[e] : !1;
  }
  function jo() {
    return pg;
  }
  var mg = B({}, jr, {
      key: function (e) {
        if (e.key) {
          var t = fg[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Wi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? dg[e.keyCode] || "Unidentified"
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
      getModifierState: jo,
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
    gg = lt(mg),
    yg = B({}, Hi, {
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
    ac = lt(yg),
    vg = B({}, jr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: jo,
    }),
    xg = lt(vg),
    wg = B({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sg = lt(wg),
    kg = B({}, Hi, {
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
    Pg = lt(kg),
    Tg = [9, 13, 27, 32],
    Oo = p && "CompositionEvent" in window,
    Fr = null;
  p && "documentMode" in document && (Fr = document.documentMode);
  var Eg = p && "TextEvent" in window && !Fr,
    uc = p && (!Oo || (Fr && 8 < Fr && 11 >= Fr)),
    cc = " ",
    fc = !1;
  function dc(e, t) {
    switch (e) {
      case "keyup":
        return Tg.indexOf(t.keyCode) !== -1;
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
  function hc(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var Qn = !1;
  function Cg(e, t) {
    switch (e) {
      case "compositionend":
        return hc(t);
      case "keypress":
        return t.which !== 32 ? null : ((fc = !0), cc);
      case "textInput":
        return ((e = t.data), e === cc && fc ? null : e);
      default:
        return null;
    }
  }
  function Ag(e, t) {
    if (Qn)
      return e === "compositionend" || (!Oo && dc(e, t))
        ? ((e = ic()), (Ui = Lo = tn = null), (Qn = !1), e)
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
        return uc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Rg = {
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
  function pc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Rg[e.type] : t === "textarea";
  }
  function mc(e, t, i, o) {
    (ju(o),
      (t = Xi(t, "onChange")),
      0 < t.length &&
        ((i = new No("onChange", "change", null, i, o)), e.push({ event: i, listeners: t })));
  }
  var Ir = null,
    zr = null;
  function Dg(e) {
    Vc(e, 0);
  }
  function Ki(e) {
    var t = bn(e);
    if (Pu(t)) return e;
  }
  function Lg(e, t) {
    if (e === "change") return t;
  }
  var gc = !1;
  if (p) {
    var Fo;
    if (p) {
      var Io = "oninput" in document;
      if (!Io) {
        var yc = document.createElement("div");
        (yc.setAttribute("oninput", "return;"), (Io = typeof yc.oninput == "function"));
      }
      Fo = Io;
    } else Fo = !1;
    gc = Fo && (!document.documentMode || 9 < document.documentMode);
  }
  function vc() {
    Ir && (Ir.detachEvent("onpropertychange", xc), (zr = Ir = null));
  }
  function xc(e) {
    if (e.propertyName === "value" && Ki(zr)) {
      var t = [];
      (mc(t, zr, e, yo(e)), zu(Dg, t));
    }
  }
  function Ng(e, t, i) {
    e === "focusin"
      ? (vc(), (Ir = t), (zr = i), Ir.attachEvent("onpropertychange", xc))
      : e === "focusout" && vc();
  }
  function Mg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ki(zr);
  }
  function Vg(e, t) {
    if (e === "click") return Ki(t);
  }
  function _g(e, t) {
    if (e === "input" || e === "change") return Ki(t);
  }
  function jg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var kt = typeof Object.is == "function" ? Object.is : jg;
  function Br(e, t) {
    if (kt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(e),
      o = Object.keys(t);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var a = i[o];
      if (!m.call(t, a) || !kt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function wc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Sc(e, t) {
    var i = wc(e);
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
      i = wc(i);
    }
  }
  function kc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? kc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Pc() {
    for (var e = window, t = Ri(); t instanceof e.HTMLIFrameElement;) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Ri(e.document);
    }
    return t;
  }
  function zo(e) {
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
  function Og(e) {
    var t = Pc(),
      i = e.focusedElem,
      o = e.selectionRange;
    if (t !== i && i && i.ownerDocument && kc(i.ownerDocument.documentElement, i)) {
      if (o !== null && zo(i)) {
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
            (a = Sc(i, c)));
          var h = Sc(i, o);
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
            c > o
              ? (e.addRange(t), e.extend(h.node, h.offset))
              : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; (e = e.parentNode);)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++)
        ((e = t[i]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var Fg = p && "documentMode" in document && 11 >= document.documentMode,
    Yn = null,
    Bo = null,
    Ur = null,
    Uo = !1;
  function Tc(e, t, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Uo ||
      Yn == null ||
      Yn !== Ri(o) ||
      ((o = Yn),
      "selectionStart" in o && zo(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Ur && Br(Ur, o)) ||
        ((Ur = o),
        (o = Xi(Bo, "onSelect")),
        0 < o.length &&
          ((t = new No("onSelect", "select", null, t, i)),
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
  var Xn = {
      animationend: Gi("Animation", "AnimationEnd"),
      animationiteration: Gi("Animation", "AnimationIteration"),
      animationstart: Gi("Animation", "AnimationStart"),
      transitionend: Gi("Transition", "TransitionEnd"),
    },
    Wo = {},
    Ec = {};
  p &&
    ((Ec = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Xn.animationend.animation,
      delete Xn.animationiteration.animation,
      delete Xn.animationstart.animation),
    "TransitionEvent" in window || delete Xn.transitionend.transition);
  function Qi(e) {
    if (Wo[e]) return Wo[e];
    if (!Xn[e]) return e;
    var t = Xn[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in Ec) return (Wo[e] = t[i]);
    return e;
  }
  var Cc = Qi("animationend"),
    Ac = Qi("animationiteration"),
    Rc = Qi("animationstart"),
    Dc = Qi("transitionend"),
    Lc = new Map(),
    Nc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function nn(e, t) {
    (Lc.set(e, t), d(t, [e]));
  }
  for (var $o = 0; $o < Nc.length; $o++) {
    var Ho = Nc[$o],
      Ig = Ho.toLowerCase(),
      zg = Ho[0].toUpperCase() + Ho.slice(1);
    nn(Ig, "on" + zg);
  }
  (nn(Cc, "onAnimationEnd"),
    nn(Ac, "onAnimationIteration"),
    nn(Rc, "onAnimationStart"),
    nn("dblclick", "onDoubleClick"),
    nn("focusin", "onFocus"),
    nn("focusout", "onBlur"),
    nn(Dc, "onTransitionEnd"),
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
  var Wr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Bg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
  function Mc(e, t, i) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = i), Im(o, t, void 0, e), (e.currentTarget = null));
  }
  function Vc(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i],
        a = o.event;
      o = o.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var h = o.length - 1; 0 <= h; h--) {
            var v = o[h],
              w = v.instance,
              C = v.currentTarget;
            if (((v = v.listener), w !== c && a.isPropagationStopped())) break e;
            (Mc(a, v, C), (c = w));
          }
        else
          for (h = 0; h < o.length; h++) {
            if (
              ((v = o[h]),
              (w = v.instance),
              (C = v.currentTarget),
              (v = v.listener),
              w !== c && a.isPropagationStopped())
            )
              break e;
            (Mc(a, v, C), (c = w));
          }
      }
    }
    if (Ni) throw ((e = So), (Ni = !1), (So = null), e);
  }
  function ye(e, t) {
    var i = t[bo];
    i === void 0 && (i = t[bo] = new Set());
    var o = e + "__bubble";
    i.has(o) || (_c(t, e, 2, !1), i.add(o));
  }
  function Ko(e, t, i) {
    var o = 0;
    (t && (o |= 4), _c(i, e, o, t));
  }
  var Yi = "_reactListening" + Math.random().toString(36).slice(2);
  function $r(e) {
    if (!e[Yi]) {
      ((e[Yi] = !0),
        l.forEach(function (i) {
          i !== "selectionchange" && (Bg.has(i) || Ko(i, !1, e), Ko(i, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Yi] || ((t[Yi] = !0), Ko("selectionchange", !1, t));
    }
  }
  function _c(e, t, i, o) {
    switch (rc(t)) {
      case 1:
        var a = eg;
        break;
      case 4:
        a = tg;
        break;
      default:
        a = Ro;
    }
    ((i = a.bind(null, t, i, e)),
      (a = void 0),
      !wo || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (a = !0),
      o
        ? a !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: a })
          : e.addEventListener(t, i, !0)
        : a !== void 0
          ? e.addEventListener(t, i, { passive: a })
          : e.addEventListener(t, i, !1));
  }
  function Go(e, t, i, o, a) {
    var c = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var h = o.tag;
        if (h === 3 || h === 4) {
          var v = o.stateNode.containerInfo;
          if (v === a || (v.nodeType === 8 && v.parentNode === a)) break;
          if (h === 4)
            for (h = o.return; h !== null;) {
              var w = h.tag;
              if (
                (w === 3 || w === 4) &&
                ((w = h.stateNode.containerInfo),
                w === a || (w.nodeType === 8 && w.parentNode === a))
              )
                return;
              h = h.return;
            }
          for (; v !== null;) {
            if (((h = kn(v)), h === null)) return;
            if (((w = h.tag), w === 5 || w === 6)) {
              o = c = h;
              continue e;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    zu(function () {
      var C = c,
        M = yo(i),
        _ = [];
      e: {
        var L = Lc.get(e);
        if (L !== void 0) {
          var z = No,
            $ = e;
          switch (e) {
            case "keypress":
              if (Wi(i) === 0) break e;
            case "keydown":
            case "keyup":
              z = gg;
              break;
            case "focusin":
              (($ = "focus"), (z = _o));
              break;
            case "focusout":
              (($ = "blur"), (z = _o));
              break;
            case "beforeblur":
            case "afterblur":
              z = _o;
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
              z = oc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = ig;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = xg;
              break;
            case Cc:
            case Ac:
            case Rc:
              z = lg;
              break;
            case Dc:
              z = Sg;
              break;
            case "scroll":
              z = ng;
              break;
            case "wheel":
              z = Pg;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = ug;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = ac;
          }
          var H = (t & 4) !== 0,
            De = !H && e === "scroll",
            T = H ? (L !== null ? L + "Capture" : null) : L;
          H = [];
          for (var k = C, E; k !== null;) {
            E = k;
            var O = E.stateNode;
            if (
              (E.tag === 5 &&
                O !== null &&
                ((E = O), T !== null && ((O = Er(k, T)), O != null && H.push(Hr(k, O, E)))),
              De)
            )
              break;
            k = k.return;
          }
          0 < H.length && ((L = new z(L, $, null, i, M)), _.push({ event: L, listeners: H }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (z = e === "mouseout" || e === "pointerout"),
            L && i !== go && ($ = i.relatedTarget || i.fromElement) && (kn($) || $[Bt]))
          )
            break e;
          if (
            (z || L) &&
            ((L =
              M.window === M
                ? M
                : (L = M.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            z
              ? (($ = i.relatedTarget || i.toElement),
                (z = C),
                ($ = $ ? kn($) : null),
                $ !== null &&
                  ((De = Sn($)), $ !== De || ($.tag !== 5 && $.tag !== 6)) &&
                  ($ = null))
              : ((z = null), ($ = C)),
            z !== $)
          ) {
            if (
              ((H = oc),
              (O = "onMouseLeave"),
              (T = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((H = ac), (O = "onPointerLeave"), (T = "onPointerEnter"), (k = "pointer")),
              (De = z == null ? L : bn(z)),
              (E = $ == null ? L : bn($)),
              (L = new H(O, k + "leave", z, i, M)),
              (L.target = De),
              (L.relatedTarget = E),
              (O = null),
              kn(M) === C &&
                ((H = new H(T, k + "enter", $, i, M)),
                (H.target = E),
                (H.relatedTarget = De),
                (O = H)),
              (De = O),
              z && $)
            )
              t: {
                for (H = z, T = $, k = 0, E = H; E; E = qn(E)) k++;
                for (E = 0, O = T; O; O = qn(O)) E++;
                for (; 0 < k - E;) ((H = qn(H)), k--);
                for (; 0 < E - k;) ((T = qn(T)), E--);
                for (; k--;) {
                  if (H === T || (T !== null && H === T.alternate)) break t;
                  ((H = qn(H)), (T = qn(T)));
                }
                H = null;
              }
            else H = null;
            (z !== null && jc(_, L, z, H, !1), $ !== null && De !== null && jc(_, De, $, H, !0));
          }
        }
        e: {
          if (
            ((L = C ? bn(C) : window),
            (z = L.nodeName && L.nodeName.toLowerCase()),
            z === "select" || (z === "input" && L.type === "file"))
          )
            var G = Lg;
          else if (pc(L))
            if (gc) G = _g;
            else {
              G = Mg;
              var q = Ng;
            }
          else
            (z = L.nodeName) &&
              z.toLowerCase() === "input" &&
              (L.type === "checkbox" || L.type === "radio") &&
              (G = Vg);
          if (G && (G = G(e, C))) {
            mc(_, G, i, M);
            break e;
          }
          (q && q(e, L, C),
            e === "focusout" &&
              (q = L._wrapperState) &&
              q.controlled &&
              L.type === "number" &&
              co(L, "number", L.value));
        }
        switch (((q = C ? bn(C) : window), e)) {
          case "focusin":
            (pc(q) || q.contentEditable === "true") && ((Yn = q), (Bo = C), (Ur = null));
            break;
          case "focusout":
            Ur = Bo = Yn = null;
            break;
          case "mousedown":
            Uo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Uo = !1), Tc(_, i, M));
            break;
          case "selectionchange":
            if (Fg) break;
          case "keydown":
          case "keyup":
            Tc(_, i, M);
        }
        var Z;
        if (Oo)
          e: {
            switch (e) {
              case "compositionstart":
                var ee = "onCompositionStart";
                break e;
              case "compositionend":
                ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ee = "onCompositionUpdate";
                break e;
            }
            ee = void 0;
          }
        else
          Qn
            ? dc(e, i) && (ee = "onCompositionEnd")
            : e === "keydown" && i.keyCode === 229 && (ee = "onCompositionStart");
        (ee &&
          (uc &&
            i.locale !== "ko" &&
            (Qn || ee !== "onCompositionStart"
              ? ee === "onCompositionEnd" && Qn && (Z = ic())
              : ((tn = M), (Lo = "value" in tn ? tn.value : tn.textContent), (Qn = !0))),
          (q = Xi(C, ee)),
          0 < q.length &&
            ((ee = new lc(ee, e, null, i, M)),
            _.push({ event: ee, listeners: q }),
            Z ? (ee.data = Z) : ((Z = hc(i)), Z !== null && (ee.data = Z)))),
          (Z = Eg ? Cg(e, i) : Ag(e, i)) &&
            ((C = Xi(C, "onBeforeInput")),
            0 < C.length &&
              ((M = new lc("onBeforeInput", "beforeinput", null, i, M)),
              _.push({ event: M, listeners: C }),
              (M.data = Z))));
      }
      Vc(_, t);
    });
  }
  function Hr(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function Xi(e, t) {
    for (var i = t + "Capture", o = []; e !== null;) {
      var a = e,
        c = a.stateNode;
      (a.tag === 5 &&
        c !== null &&
        ((a = c),
        (c = Er(e, i)),
        c != null && o.unshift(Hr(e, c, a)),
        (c = Er(e, t)),
        c != null && o.push(Hr(e, c, a))),
        (e = e.return));
    }
    return o;
  }
  function qn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function jc(e, t, i, o, a) {
    for (var c = t._reactName, h = []; i !== null && i !== o;) {
      var v = i,
        w = v.alternate,
        C = v.stateNode;
      if (w !== null && w === o) break;
      (v.tag === 5 &&
        C !== null &&
        ((v = C),
        a
          ? ((w = Er(i, c)), w != null && h.unshift(Hr(i, w, v)))
          : a || ((w = Er(i, c)), w != null && h.push(Hr(i, w, v)))),
        (i = i.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Ug = /\r\n?/g,
    Wg = /\u0000|\uFFFD/g;
  function Oc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ug,
        `
`,
      )
      .replace(Wg, "");
  }
  function qi(e, t, i) {
    if (((t = Oc(t)), Oc(e) !== t && i)) throw Error(s(425));
  }
  function Zi() {}
  var Qo = null,
    Yo = null;
  function Xo(e, t) {
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
  var qo = typeof setTimeout == "function" ? setTimeout : void 0,
    $g = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Fc = typeof Promise == "function" ? Promise : void 0,
    Hg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Fc < "u"
          ? function (e) {
              return Fc.resolve(null).then(e).catch(Kg);
            }
          : qo;
  function Kg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Zo(e, t) {
    var i = t,
      o = 0;
    do {
      var a = i.nextSibling;
      if ((e.removeChild(i), a && a.nodeType === 8))
        if (((i = a.data), i === "/$")) {
          if (o === 0) {
            (e.removeChild(a), _r(t));
            return;
          }
          o--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || o++;
      i = a;
    } while (i);
    _r(t);
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
  function Ic(e) {
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
    Nt = "__reactFiber$" + Zn,
    Kr = "__reactProps$" + Zn,
    Bt = "__reactContainer$" + Zn,
    bo = "__reactEvents$" + Zn,
    Gg = "__reactListeners$" + Zn,
    Qg = "__reactHandles$" + Zn;
  function kn(e) {
    var t = e[Nt];
    if (t) return t;
    for (var i = e.parentNode; i;) {
      if ((t = i[Bt] || i[Nt])) {
        if (((i = t.alternate), t.child !== null || (i !== null && i.child !== null)))
          for (e = Ic(e); e !== null;) {
            if ((i = e[Nt])) return i;
            e = Ic(e);
          }
        return t;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function Gr(e) {
    return (
      (e = e[Nt] || e[Bt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function bn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function bi(e) {
    return e[Kr] || null;
  }
  var Jo = [],
    Jn = -1;
  function sn(e) {
    return { current: e };
  }
  function ve(e) {
    0 > Jn || ((e.current = Jo[Jn]), (Jo[Jn] = null), Jn--);
  }
  function ge(e, t) {
    (Jn++, (Jo[Jn] = e.current), (e.current = t));
  }
  var on = {},
    Be = sn(on),
    Je = sn(!1),
    Pn = on;
  function er(e, t) {
    var i = e.type.contextTypes;
    if (!i) return on;
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
  function et(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Ji() {
    (ve(Je), ve(Be));
  }
  function zc(e, t, i) {
    if (Be.current !== on) throw Error(s(168));
    (ge(Be, t), ge(Je, i));
  }
  function Bc(e, t, i) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function")) return i;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(s(108, me(e) || "Unknown", a));
    return B({}, i, o);
  }
  function es(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || on),
      (Pn = Be.current),
      ge(Be, e),
      ge(Je, Je.current),
      !0
    );
  }
  function Uc(e, t, i) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    (i
      ? ((e = Bc(e, t, Pn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        ve(Je),
        ve(Be),
        ge(Be, e))
      : ve(Je),
      ge(Je, i));
  }
  var Ut = null,
    ts = !1,
    el = !1;
  function Wc(e) {
    Ut === null ? (Ut = [e]) : Ut.push(e);
  }
  function Yg(e) {
    ((ts = !0), Wc(e));
  }
  function ln() {
    if (!el && Ut !== null) {
      el = !0;
      var e = 0,
        t = pe;
      try {
        var i = Ut;
        for (pe = 1; e < i.length; e++) {
          var o = i[e];
          do o = o(!0);
          while (o !== null);
        }
        ((Ut = null), (ts = !1));
      } catch (a) {
        throw (Ut !== null && (Ut = Ut.slice(e + 1)), Hu(ko, ln), a);
      } finally {
        ((pe = t), (el = !1));
      }
    }
    return null;
  }
  var tr = [],
    nr = 0,
    ns = null,
    rs = 0,
    dt = [],
    ht = 0,
    Tn = null,
    Wt = 1,
    $t = "";
  function En(e, t) {
    ((tr[nr++] = rs), (tr[nr++] = ns), (ns = e), (rs = t));
  }
  function $c(e, t, i) {
    ((dt[ht++] = Wt), (dt[ht++] = $t), (dt[ht++] = Tn), (Tn = e));
    var o = Wt;
    e = $t;
    var a = 32 - St(o) - 1;
    ((o &= ~(1 << a)), (i += 1));
    var c = 32 - St(t) + a;
    if (30 < c) {
      var h = a - (a % 5);
      ((c = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (a -= h),
        (Wt = (1 << (32 - St(t) + a)) | (i << a) | o),
        ($t = c + e));
    } else ((Wt = (1 << c) | (i << a) | o), ($t = e));
  }
  function tl(e) {
    e.return !== null && (En(e, 1), $c(e, 1, 0));
  }
  function nl(e) {
    for (; e === ns;) ((ns = tr[--nr]), (tr[nr] = null), (rs = tr[--nr]), (tr[nr] = null));
    for (; e === Tn;)
      ((Tn = dt[--ht]),
        (dt[ht] = null),
        ($t = dt[--ht]),
        (dt[ht] = null),
        (Wt = dt[--ht]),
        (dt[ht] = null));
  }
  var at = null,
    ut = null,
    we = !1,
    Pt = null;
  function Hc(e, t) {
    var i = yt(5, null, null, 0);
    ((i.elementType = "DELETED"),
      (i.stateNode = t),
      (i.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i));
  }
  function Kc(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (at = e), (ut = rn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (at = e), (ut = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((i = Tn !== null ? { id: Wt, overflow: $t } : null),
              (e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }),
              (i = yt(18, null, null, 0)),
              (i.stateNode = t),
              (i.return = e),
              (e.child = i),
              (at = e),
              (ut = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function rl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function il(e) {
    if (we) {
      var t = ut;
      if (t) {
        var i = t;
        if (!Kc(e, t)) {
          if (rl(e)) throw Error(s(418));
          t = rn(i.nextSibling);
          var o = at;
          t && Kc(e, t) ? Hc(o, i) : ((e.flags = (e.flags & -4097) | 2), (we = !1), (at = e));
        }
      } else {
        if (rl(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (we = !1), (at = e));
      }
    }
  }
  function Gc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    at = e;
  }
  function is(e) {
    if (e !== at) return !1;
    if (!we) return (Gc(e), (we = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !Xo(e.type, e.memoizedProps))),
      t && (t = ut))
    ) {
      if (rl(e)) throw (Qc(), Error(s(418)));
      for (; t;) (Hc(e, t), (t = rn(t.nextSibling)));
    }
    if ((Gc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (t === 0) {
                ut = rn(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ut = null;
      }
    } else ut = at ? rn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Qc() {
    for (var e = ut; e;) e = rn(e.nextSibling);
  }
  function rr() {
    ((ut = at = null), (we = !1));
  }
  function sl(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  var Xg = te.ReactCurrentBatchConfig;
  function Qr(e, t, i) {
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
          : ((t = function (h) {
              var v = a.refs;
              h === null ? delete v[c] : (v[c] = h);
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
  function Yc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Xc(e) {
    function t(T, k) {
      if (e) {
        var E = T.deletions;
        E === null ? ((T.deletions = [k]), (T.flags |= 16)) : E.push(k);
      }
    }
    function i(T, k) {
      if (!e) return null;
      for (; k !== null;) (t(T, k), (k = k.sibling));
      return null;
    }
    function o(T, k) {
      for (T = new Map(); k !== null;)
        (k.key !== null ? T.set(k.key, k) : T.set(k.index, k), (k = k.sibling));
      return T;
    }
    function a(T, k) {
      return ((T = mn(T, k)), (T.index = 0), (T.sibling = null), T);
    }
    function c(T, k, E) {
      return (
        (T.index = E),
        e
          ? ((E = T.alternate),
            E !== null ? ((E = E.index), E < k ? ((T.flags |= 2), k) : E) : ((T.flags |= 2), k))
          : ((T.flags |= 1048576), k)
      );
    }
    function h(T) {
      return (e && T.alternate === null && (T.flags |= 2), T);
    }
    function v(T, k, E, O) {
      return k === null || k.tag !== 6
        ? ((k = ql(E, T.mode, O)), (k.return = T), k)
        : ((k = a(k, E)), (k.return = T), k);
    }
    function w(T, k, E, O) {
      var G = E.type;
      return G === ae
        ? M(T, k, E.props.children, O, E.key)
        : k !== null &&
            (k.elementType === G ||
              (typeof G == "object" && G !== null && G.$$typeof === Qe && Yc(G) === k.type))
          ? ((O = a(k, E.props)), (O.ref = Qr(T, k, E)), (O.return = T), O)
          : ((O = Ds(E.type, E.key, E.props, null, T.mode, O)),
            (O.ref = Qr(T, k, E)),
            (O.return = T),
            O);
    }
    function C(T, k, E, O) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== E.containerInfo ||
        k.stateNode.implementation !== E.implementation
        ? ((k = Zl(E, T.mode, O)), (k.return = T), k)
        : ((k = a(k, E.children || [])), (k.return = T), k);
    }
    function M(T, k, E, O, G) {
      return k === null || k.tag !== 7
        ? ((k = Vn(E, T.mode, O, G)), (k.return = T), k)
        : ((k = a(k, E)), (k.return = T), k);
    }
    function _(T, k, E) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((k = ql("" + k, T.mode, E)), (k.return = T), k);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Y:
            return (
              (E = Ds(k.type, k.key, k.props, null, T.mode, E)),
              (E.ref = Qr(T, null, k)),
              (E.return = T),
              E
            );
          case ne:
            return ((k = Zl(k, T.mode, E)), (k.return = T), k);
          case Qe:
            var O = k._init;
            return _(T, O(k._payload), E);
        }
        if (kr(k) || X(k)) return ((k = Vn(k, T.mode, E, null)), (k.return = T), k);
        ss(T, k);
      }
      return null;
    }
    function L(T, k, E, O) {
      var G = k !== null ? k.key : null;
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return G !== null ? null : v(T, k, "" + E, O);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Y:
            return E.key === G ? w(T, k, E, O) : null;
          case ne:
            return E.key === G ? C(T, k, E, O) : null;
          case Qe:
            return ((G = E._init), L(T, k, G(E._payload), O));
        }
        if (kr(E) || X(E)) return G !== null ? null : M(T, k, E, O, null);
        ss(T, E);
      }
      return null;
    }
    function z(T, k, E, O, G) {
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return ((T = T.get(E) || null), v(k, T, "" + O, G));
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Y:
            return ((T = T.get(O.key === null ? E : O.key) || null), w(k, T, O, G));
          case ne:
            return ((T = T.get(O.key === null ? E : O.key) || null), C(k, T, O, G));
          case Qe:
            var q = O._init;
            return z(T, k, E, q(O._payload), G);
        }
        if (kr(O) || X(O)) return ((T = T.get(E) || null), M(k, T, O, G, null));
        ss(k, O);
      }
      return null;
    }
    function $(T, k, E, O) {
      for (
        var G = null, q = null, Z = k, ee = (k = 0), Oe = null;
        Z !== null && ee < E.length;
        ee++
      ) {
        Z.index > ee ? ((Oe = Z), (Z = null)) : (Oe = Z.sibling);
        var fe = L(T, Z, E[ee], O);
        if (fe === null) {
          Z === null && (Z = Oe);
          break;
        }
        (e && Z && fe.alternate === null && t(T, Z),
          (k = c(fe, k, ee)),
          q === null ? (G = fe) : (q.sibling = fe),
          (q = fe),
          (Z = Oe));
      }
      if (ee === E.length) return (i(T, Z), we && En(T, ee), G);
      if (Z === null) {
        for (; ee < E.length; ee++)
          ((Z = _(T, E[ee], O)),
            Z !== null && ((k = c(Z, k, ee)), q === null ? (G = Z) : (q.sibling = Z), (q = Z)));
        return (we && En(T, ee), G);
      }
      for (Z = o(T, Z); ee < E.length; ee++)
        ((Oe = z(Z, T, ee, E[ee], O)),
          Oe !== null &&
            (e && Oe.alternate !== null && Z.delete(Oe.key === null ? ee : Oe.key),
            (k = c(Oe, k, ee)),
            q === null ? (G = Oe) : (q.sibling = Oe),
            (q = Oe)));
      return (
        e &&
          Z.forEach(function (gn) {
            return t(T, gn);
          }),
        we && En(T, ee),
        G
      );
    }
    function H(T, k, E, O) {
      var G = X(E);
      if (typeof G != "function") throw Error(s(150));
      if (((E = G.call(E)), E == null)) throw Error(s(151));
      for (
        var q = (G = null), Z = k, ee = (k = 0), Oe = null, fe = E.next();
        Z !== null && !fe.done;
        ee++, fe = E.next()
      ) {
        Z.index > ee ? ((Oe = Z), (Z = null)) : (Oe = Z.sibling);
        var gn = L(T, Z, fe.value, O);
        if (gn === null) {
          Z === null && (Z = Oe);
          break;
        }
        (e && Z && gn.alternate === null && t(T, Z),
          (k = c(gn, k, ee)),
          q === null ? (G = gn) : (q.sibling = gn),
          (q = gn),
          (Z = Oe));
      }
      if (fe.done) return (i(T, Z), we && En(T, ee), G);
      if (Z === null) {
        for (; !fe.done; ee++, fe = E.next())
          ((fe = _(T, fe.value, O)),
            fe !== null &&
              ((k = c(fe, k, ee)), q === null ? (G = fe) : (q.sibling = fe), (q = fe)));
        return (we && En(T, ee), G);
      }
      for (Z = o(T, Z); !fe.done; ee++, fe = E.next())
        ((fe = z(Z, T, ee, fe.value, O)),
          fe !== null &&
            (e && fe.alternate !== null && Z.delete(fe.key === null ? ee : fe.key),
            (k = c(fe, k, ee)),
            q === null ? (G = fe) : (q.sibling = fe),
            (q = fe)));
      return (
        e &&
          Z.forEach(function (Ry) {
            return t(T, Ry);
          }),
        we && En(T, ee),
        G
      );
    }
    function De(T, k, E, O) {
      if (
        (typeof E == "object" &&
          E !== null &&
          E.type === ae &&
          E.key === null &&
          (E = E.props.children),
        typeof E == "object" && E !== null)
      ) {
        switch (E.$$typeof) {
          case Y:
            e: {
              for (var G = E.key, q = k; q !== null;) {
                if (q.key === G) {
                  if (((G = E.type), G === ae)) {
                    if (q.tag === 7) {
                      (i(T, q.sibling), (k = a(q, E.props.children)), (k.return = T), (T = k));
                      break e;
                    }
                  } else if (
                    q.elementType === G ||
                    (typeof G == "object" && G !== null && G.$$typeof === Qe && Yc(G) === q.type)
                  ) {
                    (i(T, q.sibling),
                      (k = a(q, E.props)),
                      (k.ref = Qr(T, q, E)),
                      (k.return = T),
                      (T = k));
                    break e;
                  }
                  i(T, q);
                  break;
                } else t(T, q);
                q = q.sibling;
              }
              E.type === ae
                ? ((k = Vn(E.props.children, T.mode, O, E.key)), (k.return = T), (T = k))
                : ((O = Ds(E.type, E.key, E.props, null, T.mode, O)),
                  (O.ref = Qr(T, k, E)),
                  (O.return = T),
                  (T = O));
            }
            return h(T);
          case ne:
            e: {
              for (q = E.key; k !== null;) {
                if (k.key === q)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === E.containerInfo &&
                    k.stateNode.implementation === E.implementation
                  ) {
                    (i(T, k.sibling), (k = a(k, E.children || [])), (k.return = T), (T = k));
                    break e;
                  } else {
                    i(T, k);
                    break;
                  }
                else t(T, k);
                k = k.sibling;
              }
              ((k = Zl(E, T.mode, O)), (k.return = T), (T = k));
            }
            return h(T);
          case Qe:
            return ((q = E._init), De(T, k, q(E._payload), O));
        }
        if (kr(E)) return $(T, k, E, O);
        if (X(E)) return H(T, k, E, O);
        ss(T, E);
      }
      return (typeof E == "string" && E !== "") || typeof E == "number"
        ? ((E = "" + E),
          k !== null && k.tag === 6
            ? (i(T, k.sibling), (k = a(k, E)), (k.return = T), (T = k))
            : (i(T, k), (k = ql(E, T.mode, O)), (k.return = T), (T = k)),
          h(T))
        : i(T, k);
    }
    return De;
  }
  var ir = Xc(!0),
    qc = Xc(!1),
    os = sn(null),
    ls = null,
    sr = null,
    ol = null;
  function ll() {
    ol = sr = ls = null;
  }
  function al(e) {
    var t = os.current;
    (ve(os), (e._currentValue = t));
  }
  function ul(e, t, i) {
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
      (ol = sr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (tt = !0), (e.firstContext = null)));
  }
  function pt(e) {
    var t = e._currentValue;
    if (ol !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), sr === null)) {
        if (ls === null) throw Error(s(308));
        ((sr = e), (ls.dependencies = { lanes: 0, firstContext: e }));
      } else sr = sr.next = e;
    return t;
  }
  var Cn = null;
  function cl(e) {
    Cn === null ? (Cn = [e]) : Cn.push(e);
  }
  function Zc(e, t, i, o) {
    var a = t.interleaved;
    return (
      a === null ? ((i.next = i), cl(t)) : ((i.next = a.next), (a.next = i)),
      (t.interleaved = i),
      Ht(e, o)
    );
  }
  function Ht(e, t) {
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
  var an = !1;
  function fl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function bc(e, t) {
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
  function Kt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function un(e, t, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (le & 2) !== 0)) {
      var a = o.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (o.pending = t),
        Ht(e, i)
      );
    }
    return (
      (a = o.interleaved),
      a === null ? ((t.next = t), cl(o)) : ((t.next = a.next), (a.next = t)),
      (o.interleaved = t),
      Ht(e, i)
    );
  }
  function as(e, t, i) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (i |= o), (t.lanes = i), Eo(e, i));
    }
  }
  function Jc(e, t) {
    var i = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), i === o)) {
      var a = null,
        c = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var h = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          (c === null ? (a = c = h) : (c = c.next = h), (i = i.next));
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
    an = !1;
    var c = a.firstBaseUpdate,
      h = a.lastBaseUpdate,
      v = a.shared.pending;
    if (v !== null) {
      a.shared.pending = null;
      var w = v,
        C = w.next;
      ((w.next = null), h === null ? (c = C) : (h.next = C), (h = w));
      var M = e.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (v = M.lastBaseUpdate),
        v !== h && (v === null ? (M.firstBaseUpdate = C) : (v.next = C), (M.lastBaseUpdate = w)));
    }
    if (c !== null) {
      var _ = a.baseState;
      ((h = 0), (M = C = w = null), (v = c));
      do {
        var L = v.lane,
          z = v.eventTime;
        if ((o & L) === L) {
          M !== null &&
            (M = M.next =
              {
                eventTime: z,
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null,
              });
          e: {
            var $ = e,
              H = v;
            switch (((L = t), (z = i), H.tag)) {
              case 1:
                if ((($ = H.payload), typeof $ == "function")) {
                  _ = $.call(z, _, L);
                  break e;
                }
                _ = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = H.payload), (L = typeof $ == "function" ? $.call(z, _, L) : $), L == null)
                )
                  break e;
                _ = B({}, _, L);
                break e;
              case 2:
                an = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64), (L = a.effects), L === null ? (a.effects = [v]) : L.push(v));
        } else
          ((z = {
            eventTime: z,
            lane: L,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            M === null ? ((C = M = z), (w = _)) : (M = M.next = z),
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
        (M === null && (w = _),
        (a.baseState = w),
        (a.firstBaseUpdate = C),
        (a.lastBaseUpdate = M),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do ((h |= a.lane), (a = a.next));
        while (a !== t);
      } else c === null && (a.shared.lanes = 0);
      ((Dn |= h), (e.lanes = h), (e.memoizedState = _));
    }
  }
  function ef(e, t, i) {
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
  var Yr = {},
    Mt = sn(Yr),
    Xr = sn(Yr),
    qr = sn(Yr);
  function An(e) {
    if (e === Yr) throw Error(s(174));
    return e;
  }
  function dl(e, t) {
    switch ((ge(qr, t), ge(Xr, e), ge(Mt, Yr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ho(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ho(t, e)));
    }
    (ve(Mt), ge(Mt, t));
  }
  function lr() {
    (ve(Mt), ve(Xr), ve(qr));
  }
  function tf(e) {
    An(qr.current);
    var t = An(Mt.current),
      i = ho(t, e.type);
    t !== i && (ge(Xr, e), ge(Mt, i));
  }
  function hl(e) {
    Xr.current === e && (ve(Mt), ve(Xr));
  }
  var ke = sn(0);
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
  var pl = [];
  function ml() {
    for (var e = 0; e < pl.length; e++) pl[e]._workInProgressVersionPrimary = null;
    pl.length = 0;
  }
  var fs = te.ReactCurrentDispatcher,
    gl = te.ReactCurrentBatchConfig,
    Rn = 0,
    Pe = null,
    Me = null,
    _e = null,
    ds = !1,
    Zr = !1,
    br = 0,
    qg = 0;
  function Ue() {
    throw Error(s(321));
  }
  function yl(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!kt(e[i], t[i])) return !1;
    return !0;
  }
  function vl(e, t, i, o, a, c) {
    if (
      ((Rn = c),
      (Pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (fs.current = e === null || e.memoizedState === null ? ey : ty),
      (e = i(o, a)),
      Zr)
    ) {
      c = 0;
      do {
        if (((Zr = !1), (br = 0), 25 <= c)) throw Error(s(301));
        ((c += 1), (_e = Me = null), (t.updateQueue = null), (fs.current = ny), (e = i(o, a)));
      } while (Zr);
    }
    if (
      ((fs.current = ms),
      (t = Me !== null && Me.next !== null),
      (Rn = 0),
      (_e = Me = Pe = null),
      (ds = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function xl() {
    var e = br !== 0;
    return ((br = 0), e);
  }
  function Vt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (_e === null ? (Pe.memoizedState = _e = e) : (_e = _e.next = e), _e);
  }
  function mt() {
    if (Me === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = _e === null ? Pe.memoizedState : _e.next;
    if (t !== null) ((_e = t), (Me = e));
    else {
      if (e === null) throw Error(s(310));
      ((Me = e),
        (e = {
          memoizedState: Me.memoizedState,
          baseState: Me.baseState,
          baseQueue: Me.baseQueue,
          queue: Me.queue,
          next: null,
        }),
        _e === null ? (Pe.memoizedState = _e = e) : (_e = _e.next = e));
    }
    return _e;
  }
  function Jr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function wl(e) {
    var t = mt(),
      i = t.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var o = Me,
      a = o.baseQueue,
      c = i.pending;
    if (c !== null) {
      if (a !== null) {
        var h = a.next;
        ((a.next = c.next), (c.next = h));
      }
      ((o.baseQueue = a = c), (i.pending = null));
    }
    if (a !== null) {
      ((c = a.next), (o = o.baseState));
      var v = (h = null),
        w = null,
        C = c;
      do {
        var M = C.lane;
        if ((Rn & M) === M)
          (w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: C.action,
                hasEagerState: C.hasEagerState,
                eagerState: C.eagerState,
                next: null,
              }),
            (o = C.hasEagerState ? C.eagerState : e(o, C.action)));
        else {
          var _ = {
            lane: M,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          };
          (w === null ? ((v = w = _), (h = o)) : (w = w.next = _), (Pe.lanes |= M), (Dn |= M));
        }
        C = C.next;
      } while (C !== null && C !== c);
      (w === null ? (h = o) : (w.next = v),
        kt(o, t.memoizedState) || (tt = !0),
        (t.memoizedState = o),
        (t.baseState = h),
        (t.baseQueue = w),
        (i.lastRenderedState = o));
    }
    if (((e = i.interleaved), e !== null)) {
      a = e;
      do ((c = a.lane), (Pe.lanes |= c), (Dn |= c), (a = a.next));
      while (a !== e);
    } else a === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function Sl(e) {
    var t = mt(),
      i = t.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch,
      a = i.pending,
      c = t.memoizedState;
    if (a !== null) {
      i.pending = null;
      var h = (a = a.next);
      do ((c = e(c, h.action)), (h = h.next));
      while (h !== a);
      (kt(c, t.memoizedState) || (tt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (i.lastRenderedState = c));
    }
    return [c, o];
  }
  function nf() {}
  function rf(e, t) {
    var i = Pe,
      o = mt(),
      a = t(),
      c = !kt(o.memoizedState, a);
    if (
      (c && ((o.memoizedState = a), (tt = !0)),
      (o = o.queue),
      kl(lf.bind(null, i, o, e), [e]),
      o.getSnapshot !== t || c || (_e !== null && _e.memoizedState.tag & 1))
    ) {
      if (((i.flags |= 2048), ei(9, of.bind(null, i, o, a, t), void 0, null), je === null))
        throw Error(s(349));
      (Rn & 30) !== 0 || sf(i, t, a);
    }
    return a;
  }
  function sf(e, t, i) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Pe.updateQueue = t), (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e)));
  }
  function of(e, t, i, o) {
    ((t.value = i), (t.getSnapshot = o), af(t) && uf(e));
  }
  function lf(e, t, i) {
    return i(function () {
      af(t) && uf(e);
    });
  }
  function af(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !kt(e, i);
    } catch {
      return !0;
    }
  }
  function uf(e) {
    var t = Ht(e, 1);
    t !== null && At(t, e, 1, -1);
  }
  function cf(e) {
    var t = Vt();
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
      (e = e.dispatch = Jg.bind(null, Pe, e)),
      [t.memoizedState, e]
    );
  }
  function ei(e, t, i, o) {
    return (
      (e = { tag: e, create: t, destroy: i, deps: o, next: null }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Pe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((i = t.lastEffect),
          i === null
            ? (t.lastEffect = e.next = e)
            : ((o = i.next), (i.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function ff() {
    return mt().memoizedState;
  }
  function hs(e, t, i, o) {
    var a = Vt();
    ((Pe.flags |= e), (a.memoizedState = ei(1 | t, i, void 0, o === void 0 ? null : o)));
  }
  function ps(e, t, i, o) {
    var a = mt();
    o = o === void 0 ? null : o;
    var c = void 0;
    if (Me !== null) {
      var h = Me.memoizedState;
      if (((c = h.destroy), o !== null && yl(o, h.deps))) {
        a.memoizedState = ei(t, i, c, o);
        return;
      }
    }
    ((Pe.flags |= e), (a.memoizedState = ei(1 | t, i, c, o)));
  }
  function df(e, t) {
    return hs(8390656, 8, e, t);
  }
  function kl(e, t) {
    return ps(2048, 8, e, t);
  }
  function hf(e, t) {
    return ps(4, 2, e, t);
  }
  function pf(e, t) {
    return ps(4, 4, e, t);
  }
  function mf(e, t) {
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
  function gf(e, t, i) {
    return ((i = i != null ? i.concat([e]) : null), ps(4, 4, mf.bind(null, t, e), i));
  }
  function Pl() {}
  function yf(e, t) {
    var i = mt();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return o !== null && t !== null && yl(t, o[1]) ? o[0] : ((i.memoizedState = [e, t]), e);
  }
  function vf(e, t) {
    var i = mt();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return o !== null && t !== null && yl(t, o[1])
      ? o[0]
      : ((e = e()), (i.memoizedState = [e, t]), e);
  }
  function xf(e, t, i) {
    return (Rn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = i))
      : (kt(i, t) || ((i = Yu()), (Pe.lanes |= i), (Dn |= i), (e.baseState = !0)), t);
  }
  function Zg(e, t) {
    var i = pe;
    ((pe = i !== 0 && 4 > i ? i : 4), e(!0));
    var o = gl.transition;
    gl.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((pe = i), (gl.transition = o));
    }
  }
  function wf() {
    return mt().memoizedState;
  }
  function bg(e, t, i) {
    var o = hn(e);
    if (((i = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null }), Sf(e)))
      kf(t, i);
    else if (((i = Zc(e, t, i, o)), i !== null)) {
      var a = Xe();
      (At(i, e, o, a), Pf(i, t, o));
    }
  }
  function Jg(e, t, i) {
    var o = hn(e),
      a = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (Sf(e)) kf(t, a);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var h = t.lastRenderedState,
            v = c(h, i);
          if (((a.hasEagerState = !0), (a.eagerState = v), kt(v, h))) {
            var w = t.interleaved;
            (w === null ? ((a.next = a), cl(t)) : ((a.next = w.next), (w.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((i = Zc(e, t, a, o)), i !== null && ((a = Xe()), At(i, e, o, a), Pf(i, t, o)));
    }
  }
  function Sf(e) {
    var t = e.alternate;
    return e === Pe || (t !== null && t === Pe);
  }
  function kf(e, t) {
    Zr = ds = !0;
    var i = e.pending;
    (i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (e.pending = t));
  }
  function Pf(e, t, i) {
    if ((i & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (i |= o), (t.lanes = i), Eo(e, i));
    }
  }
  var ms = {
      readContext: pt,
      useCallback: Ue,
      useContext: Ue,
      useEffect: Ue,
      useImperativeHandle: Ue,
      useInsertionEffect: Ue,
      useLayoutEffect: Ue,
      useMemo: Ue,
      useReducer: Ue,
      useRef: Ue,
      useState: Ue,
      useDebugValue: Ue,
      useDeferredValue: Ue,
      useTransition: Ue,
      useMutableSource: Ue,
      useSyncExternalStore: Ue,
      useId: Ue,
      unstable_isNewReconciler: !1,
    },
    ey = {
      readContext: pt,
      useCallback: function (e, t) {
        return ((Vt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: pt,
      useEffect: df,
      useImperativeHandle: function (e, t, i) {
        return ((i = i != null ? i.concat([e]) : null), hs(4194308, 4, mf.bind(null, t, e), i));
      },
      useLayoutEffect: function (e, t) {
        return hs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return hs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = Vt();
        return ((t = t === void 0 ? null : t), (e = e()), (i.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, i) {
        var o = Vt();
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
          (e = e.dispatch = bg.bind(null, Pe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Vt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: cf,
      useDebugValue: Pl,
      useDeferredValue: function (e) {
        return (Vt().memoizedState = e);
      },
      useTransition: function () {
        var e = cf(!1),
          t = e[0];
        return ((e = Zg.bind(null, e[1])), (Vt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, i) {
        var o = Pe,
          a = Vt();
        if (we) {
          if (i === void 0) throw Error(s(407));
          i = i();
        } else {
          if (((i = t()), je === null)) throw Error(s(349));
          (Rn & 30) !== 0 || sf(o, t, i);
        }
        a.memoizedState = i;
        var c = { value: i, getSnapshot: t };
        return (
          (a.queue = c),
          df(lf.bind(null, o, c, e), [e]),
          (o.flags |= 2048),
          ei(9, of.bind(null, o, c, i, t), void 0, null),
          i
        );
      },
      useId: function () {
        var e = Vt(),
          t = je.identifierPrefix;
        if (we) {
          var i = $t,
            o = Wt;
          ((i = (o & ~(1 << (32 - St(o) - 1))).toString(32) + i),
            (t = ":" + t + "R" + i),
            (i = br++),
            0 < i && (t += "H" + i.toString(32)),
            (t += ":"));
        } else ((i = qg++), (t = ":" + t + "r" + i.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ty = {
      readContext: pt,
      useCallback: yf,
      useContext: pt,
      useEffect: kl,
      useImperativeHandle: gf,
      useInsertionEffect: hf,
      useLayoutEffect: pf,
      useMemo: vf,
      useReducer: wl,
      useRef: ff,
      useState: function () {
        return wl(Jr);
      },
      useDebugValue: Pl,
      useDeferredValue: function (e) {
        var t = mt();
        return xf(t, Me.memoizedState, e);
      },
      useTransition: function () {
        var e = wl(Jr)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: nf,
      useSyncExternalStore: rf,
      useId: wf,
      unstable_isNewReconciler: !1,
    },
    ny = {
      readContext: pt,
      useCallback: yf,
      useContext: pt,
      useEffect: kl,
      useImperativeHandle: gf,
      useInsertionEffect: hf,
      useLayoutEffect: pf,
      useMemo: vf,
      useReducer: Sl,
      useRef: ff,
      useState: function () {
        return Sl(Jr);
      },
      useDebugValue: Pl,
      useDeferredValue: function (e) {
        var t = mt();
        return Me === null ? (t.memoizedState = e) : xf(t, Me.memoizedState, e);
      },
      useTransition: function () {
        var e = Sl(Jr)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: nf,
      useSyncExternalStore: rf,
      useId: wf,
      unstable_isNewReconciler: !1,
    };
  function Tt(e, t) {
    if (e && e.defaultProps) {
      ((t = B({}, t)), (e = e.defaultProps));
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function Tl(e, t, i, o) {
    ((t = e.memoizedState),
      (i = i(o, t)),
      (i = i == null ? t : B({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var gs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Sn(e) === e : !1;
    },
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var o = Xe(),
        a = hn(e),
        c = Kt(o, a);
      ((c.payload = t),
        i != null && (c.callback = i),
        (t = un(e, c, a)),
        t !== null && (At(t, e, a, o), as(t, e, a)));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var o = Xe(),
        a = hn(e),
        c = Kt(o, a);
      ((c.tag = 1),
        (c.payload = t),
        i != null && (c.callback = i),
        (t = un(e, c, a)),
        t !== null && (At(t, e, a, o), as(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = Xe(),
        o = hn(e),
        a = Kt(i, o);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = un(e, a, o)),
        t !== null && (At(t, e, o, i), as(t, e, o)));
    },
  };
  function Tf(e, t, i, o, a, c, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, c, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Br(i, o) || !Br(a, c)
          : !0
    );
  }
  function Ef(e, t, i) {
    var o = !1,
      a = on,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = pt(c))
        : ((a = et(t) ? Pn : Be.current),
          (o = t.contextTypes),
          (c = (o = o != null) ? er(e, a) : on)),
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
  function Cf(e, t, i, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(i, o),
      t.state !== e && gs.enqueueReplaceState(t, t.state, null));
  }
  function El(e, t, i, o) {
    var a = e.stateNode;
    ((a.props = i), (a.state = e.memoizedState), (a.refs = {}), fl(e));
    var c = t.contextType;
    (typeof c == "object" && c !== null
      ? (a.context = pt(c))
      : ((c = et(t) ? Pn : Be.current), (a.context = er(e, c))),
      (a.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && (Tl(e, t, c, i), (a.state = e.memoizedState)),
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
      do ((i += ue(o)), (o = o.return));
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
  function Cl(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function Al(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var ry = typeof WeakMap == "function" ? WeakMap : Map;
  function Af(e, t, i) {
    ((i = Kt(-1, i)), (i.tag = 3), (i.payload = { element: null }));
    var o = t.value;
    return (
      (i.callback = function () {
        (Ps || ((Ps = !0), (Wl = o)), Al(e, t));
      }),
      i
    );
  }
  function Rf(e, t, i) {
    ((i = Kt(-1, i)), (i.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var a = t.value;
      ((i.payload = function () {
        return o(a);
      }),
        (i.callback = function () {
          Al(e, t);
        }));
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (i.callback = function () {
          (Al(e, t),
            typeof o != "function" && (fn === null ? (fn = new Set([this])) : fn.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
        }),
      i
    );
  }
  function Df(e, t, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new ry();
      var a = new Set();
      o.set(t, a);
    } else ((a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a)));
    a.has(i) || (a.add(i), (e = yy.bind(null, e, t, i)), t.then(e, e));
  }
  function Lf(e) {
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
  function Nf(e, t, i, o, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null ? (i.tag = 17) : ((t = Kt(-1, 1)), (t.tag = 2), un(i, t, 1))),
            (i.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var iy = te.ReactCurrentOwner,
    tt = !1;
  function Ye(e, t, i, o) {
    t.child = e === null ? qc(t, null, i, o) : ir(t, e.child, i, o);
  }
  function Mf(e, t, i, o, a) {
    i = i.render;
    var c = t.ref;
    return (
      or(t, a),
      (o = vl(e, t, i, o, c, a)),
      (i = xl()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Gt(e, t, a))
        : (we && i && tl(t), (t.flags |= 1), Ye(e, t, o, a), t.child)
    );
  }
  function Vf(e, t, i, o, a) {
    if (e === null) {
      var c = i.type;
      return typeof c == "function" &&
        !Xl(c) &&
        c.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), _f(e, t, c, o, a))
        : ((e = Ds(i.type, null, o, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((c = e.child), (e.lanes & a) === 0)) {
      var h = c.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : Br), i(h, o) && e.ref === t.ref))
        return Gt(e, t, a);
    }
    return ((t.flags |= 1), (e = mn(c, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function _f(e, t, i, o, a) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Br(c, o) && e.ref === t.ref)
        if (((tt = !1), (t.pendingProps = o = c), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (tt = !0);
        else return ((t.lanes = e.lanes), Gt(e, t, a));
    }
    return Rl(e, t, i, o, a);
  }
  function jf(e, t, i) {
    var o = t.pendingProps,
      a = o.children,
      c = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ge(cr, ct),
          (ct |= i));
      else {
        if ((i & 1073741824) === 0)
          return (
            (e = c !== null ? c.baseLanes | i : i),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ge(cr, ct),
            (ct |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = c !== null ? c.baseLanes : i),
          ge(cr, ct),
          (ct |= o));
      }
    else
      (c !== null ? ((o = c.baseLanes | i), (t.memoizedState = null)) : (o = i),
        ge(cr, ct),
        (ct |= o));
    return (Ye(e, t, a, i), t.child);
  }
  function Of(e, t) {
    var i = t.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Rl(e, t, i, o, a) {
    var c = et(i) ? Pn : Be.current;
    return (
      (c = er(t, c)),
      or(t, a),
      (i = vl(e, t, i, o, c, a)),
      (o = xl()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Gt(e, t, a))
        : (we && o && tl(t), (t.flags |= 1), Ye(e, t, i, a), t.child)
    );
  }
  function Ff(e, t, i, o, a) {
    if (et(i)) {
      var c = !0;
      es(t);
    } else c = !1;
    if ((or(t, a), t.stateNode === null)) (vs(e, t), Ef(t, i, o), El(t, i, o, a), (o = !0));
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var w = h.context,
        C = i.contextType;
      typeof C == "object" && C !== null
        ? (C = pt(C))
        : ((C = et(i) ? Pn : Be.current), (C = er(t, C)));
      var M = i.getDerivedStateFromProps,
        _ = typeof M == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (_ ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== o || w !== C) && Cf(t, h, o, C)),
        (an = !1));
      var L = t.memoizedState;
      ((h.state = L),
        us(t, o, h, a),
        (w = t.memoizedState),
        v !== o || L !== w || Je.current || an
          ? (typeof M == "function" && (Tl(t, i, M, o), (w = t.memoizedState)),
            (v = an || Tf(t, i, v, o, L, w, C))
              ? (_ ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" && h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = w)),
            (h.props = o),
            (h.state = w),
            (h.context = C),
            (o = v))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), (o = !1)));
    } else {
      ((h = t.stateNode),
        bc(e, t),
        (v = t.memoizedProps),
        (C = t.type === t.elementType ? v : Tt(t.type, v)),
        (h.props = C),
        (_ = t.pendingProps),
        (L = h.context),
        (w = i.contextType),
        typeof w == "object" && w !== null
          ? (w = pt(w))
          : ((w = et(i) ? Pn : Be.current), (w = er(t, w))));
      var z = i.getDerivedStateFromProps;
      ((M = typeof z == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== _ || L !== w) && Cf(t, h, o, w)),
        (an = !1),
        (L = t.memoizedState),
        (h.state = L),
        us(t, o, h, a));
      var $ = t.memoizedState;
      v !== _ || L !== $ || Je.current || an
        ? (typeof z == "function" && (Tl(t, i, z, o), ($ = t.memoizedState)),
          (C = an || Tf(t, i, C, o, L, $, w) || !1)
            ? (M ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, $, w),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, $, w)),
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
          (h.context = w),
          (o = C))
        : (typeof h.componentDidUpdate != "function" ||
            (v === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Dl(e, t, i, o, c, a);
  }
  function Dl(e, t, i, o, a, c) {
    Of(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return (a && Uc(t, i, !1), Gt(e, t, c));
    ((o = t.stateNode), (iy.current = t));
    var v = h && typeof i.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = ir(t, e.child, null, c)), (t.child = ir(t, null, v, c)))
        : Ye(e, t, v, c),
      (t.memoizedState = o.state),
      a && Uc(t, i, !0),
      t.child
    );
  }
  function If(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? zc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && zc(e, t.context, !1),
      dl(e, t.containerInfo));
  }
  function zf(e, t, i, o, a) {
    return (rr(), sl(a), (t.flags |= 256), Ye(e, t, i, o), t.child);
  }
  var Ll = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Nl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Bf(e, t, i) {
    var o = t.pendingProps,
      a = ke.current,
      c = !1,
      h = (t.flags & 128) !== 0,
      v;
    if (
      ((v = h) || (v = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      v ? ((c = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (a |= 1),
      ge(ke, a & 1),
      e === null)
    )
      return (
        il(t),
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
            c
              ? ((o = t.mode),
                (c = t.child),
                (h = { mode: "hidden", children: h }),
                (o & 1) === 0 && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = h))
                  : (c = Ls(h, o, 0, null)),
                (e = Vn(e, o, i, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = Nl(i)),
                (t.memoizedState = Ll),
                e)
              : Ml(t, h))
      );
    if (((a = e.memoizedState), a !== null && ((v = a.dehydrated), v !== null)))
      return sy(e, t, h, o, v, a, i);
    if (c) {
      ((c = o.fallback), (h = t.mode), (a = e.child), (v = a.sibling));
      var w = { mode: "hidden", children: o.children };
      return (
        (h & 1) === 0 && t.child !== a
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = w), (t.deletions = null))
          : ((o = mn(a, w)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
        v !== null ? (c = mn(v, c)) : ((c = Vn(c, h, i, null)), (c.flags |= 2)),
        (c.return = t),
        (o.return = t),
        (o.sibling = c),
        (t.child = o),
        (o = c),
        (c = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? Nl(i)
            : { baseLanes: h.baseLanes | i, cachePool: null, transitions: h.transitions }),
        (c.memoizedState = h),
        (c.childLanes = e.childLanes & ~i),
        (t.memoizedState = Ll),
        o
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (o = mn(c, { mode: "visible", children: o.children })),
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
  function Ml(e, t) {
    return (
      (t = Ls({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ys(e, t, i, o) {
    return (
      o !== null && sl(o),
      ir(t, e.child, null, i),
      (e = Ml(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function sy(e, t, i, o, a, c, h) {
    if (i)
      return t.flags & 256
        ? ((t.flags &= -257), (o = Cl(Error(s(422)))), ys(e, t, h, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((c = o.fallback),
            (a = t.mode),
            (o = Ls({ mode: "visible", children: o.children }, a, 0, null)),
            (c = Vn(c, a, h, null)),
            (c.flags |= 2),
            (o.return = t),
            (c.return = t),
            (o.sibling = c),
            (t.child = o),
            (t.mode & 1) !== 0 && ir(t, e.child, null, h),
            (t.child.memoizedState = Nl(h)),
            (t.memoizedState = Ll),
            c);
    if ((t.mode & 1) === 0) return ys(e, t, h, null);
    if (a.data === "$!") {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var v = o.dgst;
      return ((o = v), (c = Error(s(419))), (o = Cl(c, o, void 0)), ys(e, t, h, o));
    }
    if (((v = (h & e.childLanes) !== 0), tt || v)) {
      if (((o = je), o !== null)) {
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
          a !== 0 && a !== c.retryLane && ((c.retryLane = a), Ht(e, a), At(o, e, a, -1)));
      }
      return (Yl(), (o = Cl(Error(s(421)))), ys(e, t, h, o));
    }
    return a.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = vy.bind(null, e)), (a._reactRetry = t), null)
      : ((e = c.treeContext),
        (ut = rn(a.nextSibling)),
        (at = t),
        (we = !0),
        (Pt = null),
        e !== null &&
          ((dt[ht++] = Wt),
          (dt[ht++] = $t),
          (dt[ht++] = Tn),
          (Wt = e.id),
          ($t = e.overflow),
          (Tn = t)),
        (t = Ml(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Uf(e, t, i) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), ul(e.return, t, i));
  }
  function Vl(e, t, i, o, a) {
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
  function Wf(e, t, i) {
    var o = t.pendingProps,
      a = o.revealOrder,
      c = o.tail;
    if ((Ye(e, t, o.children, i), (o = ke.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Uf(e, i, t);
          else if (e.tag === 19) Uf(e, i, t);
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
    if ((ge(ke, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (i = t.child, a = null; i !== null;)
            ((e = i.alternate), e !== null && cs(e) === null && (a = i), (i = i.sibling));
          ((i = a),
            i === null ? ((a = t.child), (t.child = null)) : ((a = i.sibling), (i.sibling = null)),
            Vl(t, !1, a, i, c));
          break;
        case "backwards":
          for (i = null, a = t.child, t.child = null; a !== null;) {
            if (((e = a.alternate), e !== null && cs(e) === null)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = i), (i = a), (a = e));
          }
          Vl(t, !0, i, null, c);
          break;
        case "together":
          Vl(t, !1, null, null, void 0);
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
  function Gt(e, t, i) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Dn |= t.lanes), (i & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, i = mn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null;)
        ((e = e.sibling), (i = i.sibling = mn(e, e.pendingProps)), (i.return = t));
      i.sibling = null;
    }
    return t.child;
  }
  function oy(e, t, i) {
    switch (t.tag) {
      case 3:
        (If(t), rr());
        break;
      case 5:
        tf(t);
        break;
      case 1:
        et(t.type) && es(t);
        break;
      case 4:
        dl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value;
        (ge(os, o._currentValue), (o._currentValue = a));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (ge(ke, ke.current & 1), (t.flags |= 128), null)
            : (i & t.child.childLanes) !== 0
              ? Bf(e, t, i)
              : (ge(ke, ke.current & 1), (e = Gt(e, t, i)), e !== null ? e.sibling : null);
        ge(ke, ke.current & 1);
        break;
      case 19:
        if (((o = (i & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return Wf(e, t, i);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          ge(ke, ke.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), jf(e, t, i));
    }
    return Gt(e, t, i);
  }
  var $f, _l, Hf, Kf;
  (($f = function (e, t) {
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
    (_l = function () {}),
    (Hf = function (e, t, i, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        ((e = t.stateNode), An(Mt.current));
        var c = null;
        switch (i) {
          case "input":
            ((a = ao(e, a)), (o = ao(e, o)), (c = []));
            break;
          case "select":
            ((a = B({}, a, { value: void 0 })), (o = B({}, o, { value: void 0 })), (c = []));
            break;
          case "textarea":
            ((a = fo(e, a)), (o = fo(e, o)), (c = []));
            break;
          default:
            typeof a.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Zi);
        }
        po(i, o);
        var h;
        i = null;
        for (C in a)
          if (!o.hasOwnProperty(C) && a.hasOwnProperty(C) && a[C] != null)
            if (C === "style") {
              var v = a[C];
              for (h in v) v.hasOwnProperty(h) && (i || (i = {}), (i[h] = ""));
            } else
              C !== "dangerouslySetInnerHTML" &&
                C !== "children" &&
                C !== "suppressContentEditableWarning" &&
                C !== "suppressHydrationWarning" &&
                C !== "autoFocus" &&
                (u.hasOwnProperty(C) ? c || (c = []) : (c = c || []).push(C, null));
        for (C in o) {
          var w = o[C];
          if (
            ((v = a != null ? a[C] : void 0),
            o.hasOwnProperty(C) && w !== v && (w != null || v != null))
          )
            if (C === "style")
              if (v) {
                for (h in v)
                  !v.hasOwnProperty(h) ||
                    (w && w.hasOwnProperty(h)) ||
                    (i || (i = {}), (i[h] = ""));
                for (h in w) w.hasOwnProperty(h) && v[h] !== w[h] && (i || (i = {}), (i[h] = w[h]));
              } else (i || (c || (c = []), c.push(C, i)), (i = w));
            else
              C === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (v = v ? v.__html : void 0),
                  w != null && v !== w && (c = c || []).push(C, w))
                : C === "children"
                  ? (typeof w != "string" && typeof w != "number") || (c = c || []).push(C, "" + w)
                  : C !== "suppressContentEditableWarning" &&
                    C !== "suppressHydrationWarning" &&
                    (u.hasOwnProperty(C)
                      ? (w != null && C === "onScroll" && ye("scroll", e), c || v === w || (c = []))
                      : (c = c || []).push(C, w));
        }
        i && (c = c || []).push("style", i);
        var C = c;
        (t.updateQueue = C) && (t.flags |= 4);
      }
    }),
    (Kf = function (e, t, i, o) {
      i !== o && (t.flags |= 4);
    }));
  function ti(e, t) {
    if (!we)
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
  function We(e) {
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
  function ly(e, t, i) {
    var o = t.pendingProps;
    switch ((nl(t), t.tag)) {
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
        return (We(t), null);
      case 1:
        return (et(t.type) && Ji(), We(t), null);
      case 3:
        return (
          (o = t.stateNode),
          lr(),
          ve(Je),
          ve(Be),
          ml(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (is(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pt !== null && (Kl(Pt), (Pt = null)))),
          _l(e, t),
          We(t),
          null
        );
      case 5:
        hl(t);
        var a = An(qr.current);
        if (((i = t.type), e !== null && t.stateNode != null))
          (Hf(e, t, i, o, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (We(t), null);
          }
          if (((e = An(Mt.current)), is(t))) {
            ((o = t.stateNode), (i = t.type));
            var c = t.memoizedProps;
            switch (((o[Nt] = t), (o[Kr] = c), (e = (t.mode & 1) !== 0), i)) {
              case "dialog":
                (ye("cancel", o), ye("close", o));
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", o);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Wr.length; a++) ye(Wr[a], o);
                break;
              case "source":
                ye("error", o);
                break;
              case "img":
              case "image":
              case "link":
                (ye("error", o), ye("load", o));
                break;
              case "details":
                ye("toggle", o);
                break;
              case "input":
                (Tu(o, c), ye("invalid", o));
                break;
              case "select":
                ((o._wrapperState = { wasMultiple: !!c.multiple }), ye("invalid", o));
                break;
              case "textarea":
                (Au(o, c), ye("invalid", o));
            }
            (po(i, c), (a = null));
            for (var h in c)
              if (c.hasOwnProperty(h)) {
                var v = c[h];
                h === "children"
                  ? typeof v == "string"
                    ? o.textContent !== v &&
                      (c.suppressHydrationWarning !== !0 && qi(o.textContent, v, e),
                      (a = ["children", v]))
                    : typeof v == "number" &&
                      o.textContent !== "" + v &&
                      (c.suppressHydrationWarning !== !0 && qi(o.textContent, v, e),
                      (a = ["children", "" + v]))
                  : u.hasOwnProperty(h) && v != null && h === "onScroll" && ye("scroll", o);
              }
            switch (i) {
              case "input":
                (Ai(o), Cu(o, c, !0));
                break;
              case "textarea":
                (Ai(o), Du(o));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (o.onclick = Zi);
            }
            ((o = a), (t.updateQueue = o), o !== null && (t.flags |= 4));
          } else {
            ((h = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Lu(i)),
              e === "http://www.w3.org/1999/xhtml"
                ? i === "script"
                  ? ((e = h.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == "string"
                    ? (e = h.createElement(i, { is: o.is }))
                    : ((e = h.createElement(i)),
                      i === "select" &&
                        ((h = e), o.multiple ? (h.multiple = !0) : o.size && (h.size = o.size)))
                : (e = h.createElementNS(e, i)),
              (e[Nt] = t),
              (e[Kr] = o),
              $f(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = mo(i, o)), i)) {
                case "dialog":
                  (ye("cancel", e), ye("close", e), (a = o));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ye("load", e), (a = o));
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Wr.length; a++) ye(Wr[a], e);
                  a = o;
                  break;
                case "source":
                  (ye("error", e), (a = o));
                  break;
                case "img":
                case "image":
                case "link":
                  (ye("error", e), ye("load", e), (a = o));
                  break;
                case "details":
                  (ye("toggle", e), (a = o));
                  break;
                case "input":
                  (Tu(e, o), (a = ao(e, o)), ye("invalid", e));
                  break;
                case "option":
                  a = o;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (a = B({}, o, { value: void 0 })),
                    ye("invalid", e));
                  break;
                case "textarea":
                  (Au(e, o), (a = fo(e, o)), ye("invalid", e));
                  break;
                default:
                  a = o;
              }
              (po(i, a), (v = a));
              for (c in v)
                if (v.hasOwnProperty(c)) {
                  var w = v[c];
                  c === "style"
                    ? Vu(e, w)
                    : c === "dangerouslySetInnerHTML"
                      ? ((w = w ? w.__html : void 0), w != null && Nu(e, w))
                      : c === "children"
                        ? typeof w == "string"
                          ? (i !== "textarea" || w !== "") && Pr(e, w)
                          : typeof w == "number" && Pr(e, "" + w)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          c !== "autoFocus" &&
                          (u.hasOwnProperty(c)
                            ? w != null && c === "onScroll" && ye("scroll", e)
                            : w != null && K(e, c, w, h));
                }
              switch (i) {
                case "input":
                  (Ai(e), Cu(e, o, !1));
                  break;
                case "textarea":
                  (Ai(e), Du(e));
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
        return (We(t), null);
      case 6:
        if (e && t.stateNode != null) Kf(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((i = An(qr.current)), An(Mt.current), is(t))) {
            if (
              ((o = t.stateNode),
              (i = t.memoizedProps),
              (o[Nt] = t),
              (c = o.nodeValue !== i) && ((e = at), e !== null))
            )
              switch (e.tag) {
                case 3:
                  qi(o.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    qi(o.nodeValue, i, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            ((o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o)),
              (o[Nt] = t),
              (t.stateNode = o));
        }
        return (We(t), null);
      case 13:
        if (
          (ve(ke),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (we && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Qc(), rr(), (t.flags |= 98560), (c = !1));
          else if (((c = is(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (((c = t.memoizedState), (c = c !== null ? c.dehydrated : null), !c))
                throw Error(s(317));
              c[Nt] = t;
            } else (rr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (We(t), (c = !1));
          } else (Pt !== null && (Kl(Pt), (Pt = null)), (c = !0));
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = i), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ke.current & 1) !== 0 ? Ve === 0 && (Ve = 3) : Yl())),
            t.updateQueue !== null && (t.flags |= 4),
            We(t),
            null);
      case 4:
        return (lr(), _l(e, t), e === null && $r(t.stateNode.containerInfo), We(t), null);
      case 10:
        return (al(t.type._context), We(t), null);
      case 17:
        return (et(t.type) && Ji(), We(t), null);
      case 19:
        if ((ve(ke), (c = t.memoizedState), c === null)) return (We(t), null);
        if (((o = (t.flags & 128) !== 0), (h = c.rendering), h === null))
          if (o) ti(c, !1);
          else {
            if (Ve !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((h = cs(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      ti(c, !1),
                      o = h.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = i,
                      i = t.child;
                    i !== null;
                  )
                    ((c = i),
                      (e = o),
                      (c.flags &= 14680066),
                      (h = c.alternate),
                      h === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = h.childLanes),
                          (c.lanes = h.lanes),
                          (c.child = h.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = h.memoizedProps),
                          (c.memoizedState = h.memoizedState),
                          (c.updateQueue = h.updateQueue),
                          (c.type = h.type),
                          (e = h.dependencies),
                          (c.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (i = i.sibling));
                  return (ge(ke, (ke.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Re() > fr &&
              ((t.flags |= 128), (o = !0), ti(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = cs(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (i = e.updateQueue),
                i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                ti(c, !0),
                c.tail === null && c.tailMode === "hidden" && !h.alternate && !we)
              )
                return (We(t), null);
            } else
              2 * Re() - c.renderingStartTime > fr &&
                i !== 1073741824 &&
                ((t.flags |= 128), (o = !0), ti(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((i = c.last), i !== null ? (i.sibling = h) : (t.child = h), (c.last = h));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Re()),
            (t.sibling = null),
            (i = ke.current),
            ge(ke, o ? (i & 1) | 2 : i & 1),
            t)
          : (We(t), null);
      case 22:
      case 23:
        return (
          Ql(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (ct & 1073741824) !== 0 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : We(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function ay(e, t) {
    switch ((nl(t), t.tag)) {
      case 1:
        return (
          et(t.type) && Ji(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          lr(),
          ve(Je),
          ve(Be),
          ml(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (hl(t), null);
      case 13:
        if ((ve(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          rr();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ve(ke), null);
      case 4:
        return (lr(), null);
      case 10:
        return (al(t.type._context), null);
      case 22:
      case 23:
        return (Ql(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var xs = !1,
    $e = !1,
    uy = typeof WeakSet == "function" ? WeakSet : Set,
    U = null;
  function ur(e, t) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (o) {
          Ce(e, t, o);
        }
      else i.current = null;
  }
  function jl(e, t, i) {
    try {
      i();
    } catch (o) {
      Ce(e, t, o);
    }
  }
  var Gf = !1;
  function cy(e, t) {
    if (((Qo = zi), (e = Pc()), zo(e))) {
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
            var h = 0,
              v = -1,
              w = -1,
              C = 0,
              M = 0,
              _ = e,
              L = null;
            t: for (;;) {
              for (
                var z;
                _ !== i || (a !== 0 && _.nodeType !== 3) || (v = h + a),
                  _ !== c || (o !== 0 && _.nodeType !== 3) || (w = h + o),
                  _.nodeType === 3 && (h += _.nodeValue.length),
                  (z = _.firstChild) !== null;
              )
                ((L = _), (_ = z));
              for (;;) {
                if (_ === e) break t;
                if (
                  (L === i && ++C === a && (v = h),
                  L === c && ++M === o && (w = h),
                  (z = _.nextSibling) !== null)
                )
                  break;
                ((_ = L), (L = _.parentNode));
              }
              _ = z;
            }
            i = v === -1 || w === -1 ? null : { start: v, end: w };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Yo = { focusedElem: e, selectionRange: i }, zi = !1, U = t; U !== null;)
      if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (U = e));
      else
        for (; U !== null;) {
          t = U;
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
                    var H = $.memoizedProps,
                      De = $.memoizedState,
                      T = t.stateNode,
                      k = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? H : Tt(t.type, H),
                        De,
                      );
                    T.__reactInternalSnapshotBeforeUpdate = k;
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
          } catch (O) {
            Ce(t, t.return, O);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (U = e));
            break;
          }
          U = t.return;
        }
    return (($ = Gf), (Gf = !1), $);
  }
  function ni(e, t, i) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var a = (o = o.next);
      do {
        if ((a.tag & e) === e) {
          var c = a.destroy;
          ((a.destroy = void 0), c !== void 0 && jl(t, i, c));
        }
        a = a.next;
      } while (a !== o);
    }
  }
  function ws(e, t) {
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
  function Ol(e) {
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
  function Qf(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Qf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Nt], delete t[Kr], delete t[bo], delete t[Gg], delete t[Qg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Yf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Xf(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Yf(e.return)) return null;
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
  function Fl(e, t, i) {
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
      for (Fl(e, t, i), e = e.sibling; e !== null;) (Fl(e, t, i), (e = e.sibling));
  }
  function Il(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Il(e, t, i), e = e.sibling; e !== null;) (Il(e, t, i), (e = e.sibling));
  }
  var Ie = null,
    Et = !1;
  function cn(e, t, i) {
    for (i = i.child; i !== null;) (qf(e, t, i), (i = i.sibling));
  }
  function qf(e, t, i) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function")
      try {
        Lt.onCommitFiberUnmount(Vi, i);
      } catch {}
    switch (i.tag) {
      case 5:
        $e || ur(i, t);
      case 6:
        var o = Ie,
          a = Et;
        ((Ie = null),
          cn(e, t, i),
          (Ie = o),
          (Et = a),
          Ie !== null &&
            (Et
              ? ((e = Ie),
                (i = i.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
              : Ie.removeChild(i.stateNode)));
        break;
      case 18:
        Ie !== null &&
          (Et
            ? ((e = Ie),
              (i = i.stateNode),
              e.nodeType === 8 ? Zo(e.parentNode, i) : e.nodeType === 1 && Zo(e, i),
              _r(e))
            : Zo(Ie, i.stateNode));
        break;
      case 4:
        ((o = Ie),
          (a = Et),
          (Ie = i.stateNode.containerInfo),
          (Et = !0),
          cn(e, t, i),
          (Ie = o),
          (Et = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$e && ((o = i.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          a = o = o.next;
          do {
            var c = a,
              h = c.destroy;
            ((c = c.tag),
              h !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && jl(i, t, h),
              (a = a.next));
          } while (a !== o);
        }
        cn(e, t, i);
        break;
      case 1:
        if (!$e && (ur(i, t), (o = i.stateNode), typeof o.componentWillUnmount == "function"))
          try {
            ((o.props = i.memoizedProps), (o.state = i.memoizedState), o.componentWillUnmount());
          } catch (v) {
            Ce(i, t, v);
          }
        cn(e, t, i);
        break;
      case 21:
        cn(e, t, i);
        break;
      case 22:
        i.mode & 1
          ? (($e = (o = $e) || i.memoizedState !== null), cn(e, t, i), ($e = o))
          : cn(e, t, i);
        break;
      default:
        cn(e, t, i);
    }
  }
  function Zf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      (i === null && (i = e.stateNode = new uy()),
        t.forEach(function (o) {
          var a = xy.bind(null, e, o);
          i.has(o) || (i.add(o), o.then(a, a));
        }));
    }
  }
  function Ct(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var a = i[o];
        try {
          var c = e,
            h = t,
            v = h;
          e: for (; v !== null;) {
            switch (v.tag) {
              case 5:
                ((Ie = v.stateNode), (Et = !1));
                break e;
              case 3:
                ((Ie = v.stateNode.containerInfo), (Et = !0));
                break e;
              case 4:
                ((Ie = v.stateNode.containerInfo), (Et = !0));
                break e;
            }
            v = v.return;
          }
          if (Ie === null) throw Error(s(160));
          (qf(c, h, a), (Ie = null), (Et = !1));
          var w = a.alternate;
          (w !== null && (w.return = null), (a.return = null));
        } catch (C) {
          Ce(a, t, C);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (bf(t, e), (t = t.sibling));
  }
  function bf(e, t) {
    var i = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ct(t, e), _t(e), o & 4)) {
          try {
            (ni(3, e, e.return), ws(3, e));
          } catch (H) {
            Ce(e, e.return, H);
          }
          try {
            ni(5, e, e.return);
          } catch (H) {
            Ce(e, e.return, H);
          }
        }
        break;
      case 1:
        (Ct(t, e), _t(e), o & 512 && i !== null && ur(i, i.return));
        break;
      case 5:
        if ((Ct(t, e), _t(e), o & 512 && i !== null && ur(i, i.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            Pr(a, "");
          } catch (H) {
            Ce(e, e.return, H);
          }
        }
        if (o & 4 && ((a = e.stateNode), a != null)) {
          var c = e.memoizedProps,
            h = i !== null ? i.memoizedProps : c,
            v = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              (v === "input" && c.type === "radio" && c.name != null && Eu(a, c), mo(v, h));
              var C = mo(v, c);
              for (h = 0; h < w.length; h += 2) {
                var M = w[h],
                  _ = w[h + 1];
                M === "style"
                  ? Vu(a, _)
                  : M === "dangerouslySetInnerHTML"
                    ? Nu(a, _)
                    : M === "children"
                      ? Pr(a, _)
                      : K(a, M, _, C);
              }
              switch (v) {
                case "input":
                  uo(a, c);
                  break;
                case "textarea":
                  Ru(a, c);
                  break;
                case "select":
                  var L = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!c.multiple;
                  var z = c.value;
                  z != null
                    ? Wn(a, !!c.multiple, z, !1)
                    : L !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Wn(a, !!c.multiple, c.defaultValue, !0)
                        : Wn(a, !!c.multiple, c.multiple ? [] : "", !1));
              }
              a[Kr] = c;
            } catch (H) {
              Ce(e, e.return, H);
            }
        }
        break;
      case 6:
        if ((Ct(t, e), _t(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((a = e.stateNode), (c = e.memoizedProps));
          try {
            a.nodeValue = c;
          } catch (H) {
            Ce(e, e.return, H);
          }
        }
        break;
      case 3:
        if ((Ct(t, e), _t(e), o & 4 && i !== null && i.memoizedState.isDehydrated))
          try {
            _r(t.containerInfo);
          } catch (H) {
            Ce(e, e.return, H);
          }
        break;
      case 4:
        (Ct(t, e), _t(e));
        break;
      case 13:
        (Ct(t, e),
          _t(e),
          (a = e.child),
          a.flags & 8192 &&
            ((c = a.memoizedState !== null),
            (a.stateNode.isHidden = c),
            !c || (a.alternate !== null && a.alternate.memoizedState !== null) || (Ul = Re())),
          o & 4 && Zf(e));
        break;
      case 22:
        if (
          ((M = i !== null && i.memoizedState !== null),
          e.mode & 1 ? (($e = (C = $e) || M), Ct(t, e), ($e = C)) : Ct(t, e),
          _t(e),
          o & 8192)
        ) {
          if (
            ((C = e.memoizedState !== null), (e.stateNode.isHidden = C) && !M && (e.mode & 1) !== 0)
          )
            for (U = e, M = e.child; M !== null;) {
              for (_ = U = M; U !== null;) {
                switch (((L = U), (z = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ni(4, L, L.return);
                    break;
                  case 1:
                    ur(L, L.return);
                    var $ = L.stateNode;
                    if (typeof $.componentWillUnmount == "function") {
                      ((o = L), (i = L.return));
                      try {
                        ((t = o),
                          ($.props = t.memoizedProps),
                          ($.state = t.memoizedState),
                          $.componentWillUnmount());
                      } catch (H) {
                        Ce(o, i, H);
                      }
                    }
                    break;
                  case 5:
                    ur(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      td(_);
                      continue;
                    }
                }
                z !== null ? ((z.return = L), (U = z)) : td(_);
              }
              M = M.sibling;
            }
          e: for (M = null, _ = e; ;) {
            if (_.tag === 5) {
              if (M === null) {
                M = _;
                try {
                  ((a = _.stateNode),
                    C
                      ? ((c = a.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((v = _.stateNode),
                        (w = _.memoizedProps.style),
                        (h = w != null && w.hasOwnProperty("display") ? w.display : null),
                        (v.style.display = Mu("display", h))));
                } catch (H) {
                  Ce(e, e.return, H);
                }
              }
            } else if (_.tag === 6) {
              if (M === null)
                try {
                  _.stateNode.nodeValue = C ? "" : _.memoizedProps;
                } catch (H) {
                  Ce(e, e.return, H);
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
              (M === _ && (M = null), (_ = _.return));
            }
            (M === _ && (M = null), (_.sibling.return = _.return), (_ = _.sibling));
          }
        }
        break;
      case 19:
        (Ct(t, e), _t(e), o & 4 && Zf(e));
        break;
      case 21:
        break;
      default:
        (Ct(t, e), _t(e));
    }
  }
  function _t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var i = e.return; i !== null;) {
            if (Yf(i)) {
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
            o.flags & 32 && (Pr(a, ""), (o.flags &= -33));
            var c = Xf(e);
            Il(e, c, a);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              v = Xf(e);
            Fl(e, v, h);
            break;
          default:
            throw Error(s(161));
        }
      } catch (w) {
        Ce(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function fy(e, t, i) {
    ((U = e), Jf(e));
  }
  function Jf(e, t, i) {
    for (var o = (e.mode & 1) !== 0; U !== null;) {
      var a = U,
        c = a.child;
      if (a.tag === 22 && o) {
        var h = a.memoizedState !== null || xs;
        if (!h) {
          var v = a.alternate,
            w = (v !== null && v.memoizedState !== null) || $e;
          v = xs;
          var C = $e;
          if (((xs = h), ($e = w) && !C))
            for (U = a; U !== null;)
              ((h = U),
                (w = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? nd(a)
                  : w !== null
                    ? ((w.return = h), (U = w))
                    : nd(a));
          for (; c !== null;) ((U = c), Jf(c), (c = c.sibling));
          ((U = a), (xs = v), ($e = C));
        }
        ed(e);
      } else (a.subtreeFlags & 8772) !== 0 && c !== null ? ((c.return = a), (U = c)) : ed(e);
    }
  }
  function ed(e) {
    for (; U !== null;) {
      var t = U;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                $e || ws(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !$e)
                  if (i === null) o.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type ? i.memoizedProps : Tt(t.type, i.memoizedProps);
                    o.componentDidUpdate(a, i.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var c = t.updateQueue;
                c !== null && ef(t, c, o);
                break;
              case 3:
                var h = t.updateQueue;
                if (h !== null) {
                  if (((i = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        i = t.child.stateNode;
                        break;
                      case 1:
                        i = t.child.stateNode;
                    }
                  ef(t, h, i);
                }
                break;
              case 5:
                var v = t.stateNode;
                if (i === null && t.flags & 4) {
                  i = v;
                  var w = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && i.focus();
                      break;
                    case "img":
                      w.src && (i.src = w.src);
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
                  var C = t.alternate;
                  if (C !== null) {
                    var M = C.memoizedState;
                    if (M !== null) {
                      var _ = M.dehydrated;
                      _ !== null && _r(_);
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
          $e || (t.flags & 512 && Ol(t));
        } catch (L) {
          Ce(t, t.return, L);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (((i = t.sibling), i !== null)) {
        ((i.return = t.return), (U = i));
        break;
      }
      U = t.return;
    }
  }
  function td(e) {
    for (; U !== null;) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        ((i.return = t.return), (U = i));
        break;
      }
      U = t.return;
    }
  }
  function nd(e) {
    for (; U !== null;) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              ws(4, t);
            } catch (w) {
              Ce(t, i, w);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var a = t.return;
              try {
                o.componentDidMount();
              } catch (w) {
                Ce(t, a, w);
              }
            }
            var c = t.return;
            try {
              Ol(t);
            } catch (w) {
              Ce(t, c, w);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Ol(t);
            } catch (w) {
              Ce(t, h, w);
            }
        }
      } catch (w) {
        Ce(t, t.return, w);
      }
      if (t === e) {
        U = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        ((v.return = t.return), (U = v));
        break;
      }
      U = t.return;
    }
  }
  var dy = Math.ceil,
    Ss = te.ReactCurrentDispatcher,
    zl = te.ReactCurrentOwner,
    gt = te.ReactCurrentBatchConfig,
    le = 0,
    je = null,
    Ne = null,
    ze = 0,
    ct = 0,
    cr = sn(0),
    Ve = 0,
    ri = null,
    Dn = 0,
    ks = 0,
    Bl = 0,
    ii = null,
    nt = null,
    Ul = 0,
    fr = 1 / 0,
    Qt = null,
    Ps = !1,
    Wl = null,
    fn = null,
    Ts = !1,
    dn = null,
    Es = 0,
    si = 0,
    $l = null,
    Cs = -1,
    As = 0;
  function Xe() {
    return (le & 6) !== 0 ? Re() : Cs !== -1 ? Cs : (Cs = Re());
  }
  function hn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (le & 2) !== 0 && ze !== 0
        ? ze & -ze
        : Xg.transition !== null
          ? (As === 0 && (As = Yu()), As)
          : ((e = pe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : rc(e.type))), e);
  }
  function At(e, t, i, o) {
    if (50 < si) throw ((si = 0), ($l = null), Error(s(185)));
    (Dr(e, i, o),
      ((le & 2) === 0 || e !== je) &&
        (e === je && ((le & 2) === 0 && (ks |= i), Ve === 4 && pn(e, ze)),
        rt(e, o),
        i === 1 && le === 0 && (t.mode & 1) === 0 && ((fr = Re() + 500), ts && ln())));
  }
  function rt(e, t) {
    var i = e.callbackNode;
    Xm(e, t);
    var o = Oi(e, e === je ? ze : 0);
    if (o === 0) (i !== null && Ku(i), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((i != null && Ku(i), t === 1))
        (e.tag === 0 ? Yg(id.bind(null, e)) : Wc(id.bind(null, e)),
          Hg(function () {
            (le & 6) === 0 && ln();
          }),
          (i = null));
      else {
        switch (Xu(o)) {
          case 1:
            i = ko;
            break;
          case 4:
            i = Gu;
            break;
          case 16:
            i = Mi;
            break;
          case 536870912:
            i = Qu;
            break;
          default:
            i = Mi;
        }
        i = dd(i, rd.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = i));
    }
  }
  function rd(e, t) {
    if (((Cs = -1), (As = 0), (le & 6) !== 0)) throw Error(s(327));
    var i = e.callbackNode;
    if (dr() && e.callbackNode !== i) return null;
    var o = Oi(e, e === je ? ze : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Rs(e, o);
    else {
      t = o;
      var a = le;
      le |= 2;
      var c = od();
      (je !== e || ze !== t) && ((Qt = null), (fr = Re() + 500), Nn(e, t));
      do
        try {
          my();
          break;
        } catch (v) {
          sd(e, v);
        }
      while (!0);
      (ll(), (Ss.current = c), (le = a), Ne !== null ? (t = 0) : ((je = null), (ze = 0), (t = Ve)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = Po(e)), a !== 0 && ((o = a), (t = Hl(e, a)))), t === 1))
        throw ((i = ri), Nn(e, 0), pn(e, o), rt(e, Re()), i);
      if (t === 6) pn(e, o);
      else {
        if (
          ((a = e.current.alternate),
          (o & 30) === 0 &&
            !hy(a) &&
            ((t = Rs(e, o)),
            t === 2 && ((c = Po(e)), c !== 0 && ((o = c), (t = Hl(e, c)))),
            t === 1))
        )
          throw ((i = ri), Nn(e, 0), pn(e, o), rt(e, Re()), i);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Mn(e, nt, Qt);
            break;
          case 3:
            if ((pn(e, o), (o & 130023424) === o && ((t = Ul + 500 - Re()), 10 < t))) {
              if (Oi(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                (Xe(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = qo(Mn.bind(null, e, nt, Qt), t);
              break;
            }
            Mn(e, nt, Qt);
            break;
          case 4:
            if ((pn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, a = -1; 0 < o;) {
              var h = 31 - St(o);
              ((c = 1 << h), (h = t[h]), h > a && (a = h), (o &= ~c));
            }
            if (
              ((o = a),
              (o = Re() - o),
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
                            : 1960 * dy(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = qo(Mn.bind(null, e, nt, Qt), o);
              break;
            }
            Mn(e, nt, Qt);
            break;
          case 5:
            Mn(e, nt, Qt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (rt(e, Re()), e.callbackNode === i ? rd.bind(null, e) : null);
  }
  function Hl(e, t) {
    var i = ii;
    return (
      e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
      (e = Rs(e, t)),
      e !== 2 && ((t = nt), (nt = i), t !== null && Kl(t)),
      e
    );
  }
  function Kl(e) {
    nt === null ? (nt = e) : nt.push.apply(nt, e);
  }
  function hy(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var o = 0; o < i.length; o++) {
            var a = i[o],
              c = a.getSnapshot;
            a = a.value;
            try {
              if (!kt(c(), a)) return !1;
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
  function pn(e, t) {
    for (
      t &= ~Bl, t &= ~ks, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var i = 31 - St(t),
        o = 1 << i;
      ((e[i] = -1), (t &= ~o));
    }
  }
  function id(e) {
    if ((le & 6) !== 0) throw Error(s(327));
    dr();
    var t = Oi(e, 0);
    if ((t & 1) === 0) return (rt(e, Re()), null);
    var i = Rs(e, t);
    if (e.tag !== 0 && i === 2) {
      var o = Po(e);
      o !== 0 && ((t = o), (i = Hl(e, o)));
    }
    if (i === 1) throw ((i = ri), Nn(e, 0), pn(e, t), rt(e, Re()), i);
    if (i === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Mn(e, nt, Qt),
      rt(e, Re()),
      null
    );
  }
  function Gl(e, t) {
    var i = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      ((le = i), le === 0 && ((fr = Re() + 500), ts && ln()));
    }
  }
  function Ln(e) {
    dn !== null && dn.tag === 0 && (le & 6) === 0 && dr();
    var t = le;
    le |= 1;
    var i = gt.transition,
      o = pe;
    try {
      if (((gt.transition = null), (pe = 1), e)) return e();
    } finally {
      ((pe = o), (gt.transition = i), (le = t), (le & 6) === 0 && ln());
    }
  }
  function Ql() {
    ((ct = cr.current), ve(cr));
  }
  function Nn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), $g(i)), Ne !== null))
      for (i = Ne.return; i !== null;) {
        var o = i;
        switch ((nl(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Ji());
            break;
          case 3:
            (lr(), ve(Je), ve(Be), ml());
            break;
          case 5:
            hl(o);
            break;
          case 4:
            lr();
            break;
          case 13:
            ve(ke);
            break;
          case 19:
            ve(ke);
            break;
          case 10:
            al(o.type._context);
            break;
          case 22:
          case 23:
            Ql();
        }
        i = i.return;
      }
    if (
      ((je = e),
      (Ne = e = mn(e.current, null)),
      (ze = ct = t),
      (Ve = 0),
      (ri = null),
      (Bl = ks = Dn = 0),
      (nt = ii = null),
      Cn !== null)
    ) {
      for (t = 0; t < Cn.length; t++)
        if (((i = Cn[t]), (o = i.interleaved), o !== null)) {
          i.interleaved = null;
          var a = o.next,
            c = i.pending;
          if (c !== null) {
            var h = c.next;
            ((c.next = a), (o.next = h));
          }
          i.pending = o;
        }
      Cn = null;
    }
    return e;
  }
  function sd(e, t) {
    do {
      var i = Ne;
      try {
        if ((ll(), (fs.current = ms), ds)) {
          for (var o = Pe.memoizedState; o !== null;) {
            var a = o.queue;
            (a !== null && (a.pending = null), (o = o.next));
          }
          ds = !1;
        }
        if (
          ((Rn = 0),
          (_e = Me = Pe = null),
          (Zr = !1),
          (br = 0),
          (zl.current = null),
          i === null || i.return === null)
        ) {
          ((Ve = 1), (ri = t), (Ne = null));
          break;
        }
        e: {
          var c = e,
            h = i.return,
            v = i,
            w = t;
          if (
            ((t = ze),
            (v.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var C = w,
              M = v,
              _ = M.tag;
            if ((M.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var L = M.alternate;
              L
                ? ((M.updateQueue = L.updateQueue),
                  (M.memoizedState = L.memoizedState),
                  (M.lanes = L.lanes))
                : ((M.updateQueue = null), (M.memoizedState = null));
            }
            var z = Lf(h);
            if (z !== null) {
              ((z.flags &= -257), Nf(z, h, v, c, t), z.mode & 1 && Df(c, C, t), (t = z), (w = C));
              var $ = t.updateQueue;
              if ($ === null) {
                var H = new Set();
                (H.add(w), (t.updateQueue = H));
              } else $.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Df(c, C, t), Yl());
                break e;
              }
              w = Error(s(426));
            }
          } else if (we && v.mode & 1) {
            var De = Lf(h);
            if (De !== null) {
              ((De.flags & 65536) === 0 && (De.flags |= 256), Nf(De, h, v, c, t), sl(ar(w, v)));
              break e;
            }
          }
          ((c = w = ar(w, v)),
            Ve !== 4 && (Ve = 2),
            ii === null ? (ii = [c]) : ii.push(c),
            (c = h));
          do {
            switch (c.tag) {
              case 3:
                ((c.flags |= 65536), (t &= -t), (c.lanes |= t));
                var T = Af(c, w, t);
                Jc(c, T);
                break e;
              case 1:
                v = w;
                var k = c.type,
                  E = c.stateNode;
                if (
                  (c.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == "function" ||
                    (E !== null &&
                      typeof E.componentDidCatch == "function" &&
                      (fn === null || !fn.has(E))))
                ) {
                  ((c.flags |= 65536), (t &= -t), (c.lanes |= t));
                  var O = Rf(c, v, t);
                  Jc(c, O);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        ad(i);
      } catch (G) {
        ((t = G), Ne === i && i !== null && (Ne = i = i.return));
        continue;
      }
      break;
    } while (!0);
  }
  function od() {
    var e = Ss.current;
    return ((Ss.current = ms), e === null ? ms : e);
  }
  function Yl() {
    ((Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4),
      je === null || ((Dn & 268435455) === 0 && (ks & 268435455) === 0) || pn(je, ze));
  }
  function Rs(e, t) {
    var i = le;
    le |= 2;
    var o = od();
    (je !== e || ze !== t) && ((Qt = null), Nn(e, t));
    do
      try {
        py();
        break;
      } catch (a) {
        sd(e, a);
      }
    while (!0);
    if ((ll(), (le = i), (Ss.current = o), Ne !== null)) throw Error(s(261));
    return ((je = null), (ze = 0), Ve);
  }
  function py() {
    for (; Ne !== null;) ld(Ne);
  }
  function my() {
    for (; Ne !== null && !Bm();) ld(Ne);
  }
  function ld(e) {
    var t = fd(e.alternate, e, ct);
    ((e.memoizedProps = e.pendingProps), t === null ? ad(e) : (Ne = t), (zl.current = null));
  }
  function ad(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((i = ly(i, t, ct)), i !== null)) {
          Ne = i;
          return;
        }
      } else {
        if (((i = ay(i, t)), i !== null)) {
          ((i.flags &= 32767), (Ne = i));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Ve = 6), (Ne = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    Ve === 0 && (Ve = 5);
  }
  function Mn(e, t, i) {
    var o = pe,
      a = gt.transition;
    try {
      ((gt.transition = null), (pe = 1), gy(e, t, i, o));
    } finally {
      ((gt.transition = a), (pe = o));
    }
    return null;
  }
  function gy(e, t, i, o) {
    do dr();
    while (dn !== null);
    if ((le & 6) !== 0) throw Error(s(327));
    i = e.finishedWork;
    var a = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var c = i.lanes | i.childLanes;
    if (
      (qm(e, c),
      e === je && ((Ne = je = null), (ze = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        Ts ||
        ((Ts = !0),
        dd(Mi, function () {
          return (dr(), null);
        })),
      (c = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || c)
    ) {
      ((c = gt.transition), (gt.transition = null));
      var h = pe;
      pe = 1;
      var v = le;
      ((le |= 4),
        (zl.current = null),
        cy(e, i),
        bf(i, e),
        Og(Yo),
        (zi = !!Qo),
        (Yo = Qo = null),
        (e.current = i),
        fy(i),
        Um(),
        (le = v),
        (pe = h),
        (gt.transition = c));
    } else e.current = i;
    if (
      (Ts && ((Ts = !1), (dn = e), (Es = a)),
      (c = e.pendingLanes),
      c === 0 && (fn = null),
      Hm(i.stateNode),
      rt(e, Re()),
      t !== null)
    )
      for (o = e.onRecoverableError, i = 0; i < t.length; i++)
        ((a = t[i]), o(a.value, { componentStack: a.stack, digest: a.digest }));
    if (Ps) throw ((Ps = !1), (e = Wl), (Wl = null), e);
    return (
      (Es & 1) !== 0 && e.tag !== 0 && dr(),
      (c = e.pendingLanes),
      (c & 1) !== 0 ? (e === $l ? si++ : ((si = 0), ($l = e))) : (si = 0),
      ln(),
      null
    );
  }
  function dr() {
    if (dn !== null) {
      var e = Xu(Es),
        t = gt.transition,
        i = pe;
      try {
        if (((gt.transition = null), (pe = 16 > e ? 16 : e), dn === null)) var o = !1;
        else {
          if (((e = dn), (dn = null), (Es = 0), (le & 6) !== 0)) throw Error(s(331));
          var a = le;
          for (le |= 4, U = e.current; U !== null;) {
            var c = U,
              h = c.child;
            if ((U.flags & 16) !== 0) {
              var v = c.deletions;
              if (v !== null) {
                for (var w = 0; w < v.length; w++) {
                  var C = v[w];
                  for (U = C; U !== null;) {
                    var M = U;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ni(8, M, c);
                    }
                    var _ = M.child;
                    if (_ !== null) ((_.return = M), (U = _));
                    else
                      for (; U !== null;) {
                        M = U;
                        var L = M.sibling,
                          z = M.return;
                        if ((Qf(M), M === C)) {
                          U = null;
                          break;
                        }
                        if (L !== null) {
                          ((L.return = z), (U = L));
                          break;
                        }
                        U = z;
                      }
                  }
                }
                var $ = c.alternate;
                if ($ !== null) {
                  var H = $.child;
                  if (H !== null) {
                    $.child = null;
                    do {
                      var De = H.sibling;
                      ((H.sibling = null), (H = De));
                    } while (H !== null);
                  }
                }
                U = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && h !== null) ((h.return = c), (U = h));
            else
              e: for (; U !== null;) {
                if (((c = U), (c.flags & 2048) !== 0))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ni(9, c, c.return);
                  }
                var T = c.sibling;
                if (T !== null) {
                  ((T.return = c.return), (U = T));
                  break e;
                }
                U = c.return;
              }
          }
          var k = e.current;
          for (U = k; U !== null;) {
            h = U;
            var E = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && E !== null) ((E.return = h), (U = E));
            else
              e: for (h = k; U !== null;) {
                if (((v = U), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(9, v);
                    }
                  } catch (G) {
                    Ce(v, v.return, G);
                  }
                if (v === h) {
                  U = null;
                  break e;
                }
                var O = v.sibling;
                if (O !== null) {
                  ((O.return = v.return), (U = O));
                  break e;
                }
                U = v.return;
              }
          }
          if (((le = a), ln(), Lt && typeof Lt.onPostCommitFiberRoot == "function"))
            try {
              Lt.onPostCommitFiberRoot(Vi, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        ((pe = i), (gt.transition = t));
      }
    }
    return !1;
  }
  function ud(e, t, i) {
    ((t = ar(i, t)),
      (t = Af(e, t, 1)),
      (e = un(e, t, 1)),
      (t = Xe()),
      e !== null && (Dr(e, 1, t), rt(e, t)));
  }
  function Ce(e, t, i) {
    if (e.tag === 3) ud(e, e, i);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          ud(t, e, i);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" && (fn === null || !fn.has(o)))
          ) {
            ((e = ar(i, e)),
              (e = Rf(t, e, 1)),
              (t = un(t, e, 1)),
              (e = Xe()),
              t !== null && (Dr(t, 1, e), rt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function yy(e, t, i) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = Xe()),
      (e.pingedLanes |= e.suspendedLanes & i),
      je === e &&
        (ze & i) === i &&
        (Ve === 4 || (Ve === 3 && (ze & 130023424) === ze && 500 > Re() - Ul)
          ? Nn(e, 0)
          : (Bl |= i)),
      rt(e, t));
  }
  function cd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = ji), (ji <<= 1), (ji & 130023424) === 0 && (ji = 4194304)));
    var i = Xe();
    ((e = Ht(e, t)), e !== null && (Dr(e, t, i), rt(e, i)));
  }
  function vy(e) {
    var t = e.memoizedState,
      i = 0;
    (t !== null && (i = t.retryLane), cd(e, i));
  }
  function xy(e, t) {
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
    (o !== null && o.delete(t), cd(e, i));
  }
  var fd;
  fd = function (e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Je.current) tt = !0;
      else {
        if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return ((tt = !1), oy(e, t, i));
        tt = (e.flags & 131072) !== 0;
      }
    else ((tt = !1), we && (t.flags & 1048576) !== 0 && $c(t, rs, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (vs(e, t), (e = t.pendingProps));
        var a = er(t, Be.current);
        (or(t, i), (a = vl(null, t, o, e, a, i)));
        var c = xl();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              et(o) ? ((c = !0), es(t)) : (c = !1),
              (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              fl(t),
              (a.updater = gs),
              (t.stateNode = a),
              (a._reactInternals = t),
              El(t, o, e, i),
              (t = Dl(null, t, o, !0, c, i)))
            : ((t.tag = 0), we && c && tl(t), Ye(null, t, a, i), (t = t.child)),
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
            (a = t.tag = Sy(o)),
            (e = Tt(o, e)),
            a)
          ) {
            case 0:
              t = Rl(null, t, o, e, i);
              break e;
            case 1:
              t = Ff(null, t, o, e, i);
              break e;
            case 11:
              t = Mf(null, t, o, e, i);
              break e;
            case 14:
              t = Vf(null, t, o, Tt(o.type, e), i);
              break e;
          }
          throw Error(s(306, o, ""));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Tt(o, a)),
          Rl(e, t, o, a, i)
        );
      case 1:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Tt(o, a)),
          Ff(e, t, o, a, i)
        );
      case 3:
        e: {
          if ((If(t), e === null)) throw Error(s(387));
          ((o = t.pendingProps),
            (c = t.memoizedState),
            (a = c.element),
            bc(e, t),
            us(t, o, null, i));
          var h = t.memoizedState;
          if (((o = h.element), c.isDehydrated))
            if (
              ((c = {
                element: o,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              ((a = ar(Error(s(423)), t)), (t = zf(e, t, o, i, a)));
              break e;
            } else if (o !== a) {
              ((a = ar(Error(s(424)), t)), (t = zf(e, t, o, i, a)));
              break e;
            } else
              for (
                ut = rn(t.stateNode.containerInfo.firstChild),
                  at = t,
                  we = !0,
                  Pt = null,
                  i = qc(t, null, o, i),
                  t.child = i;
                i;
              )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((rr(), o === a)) {
              t = Gt(e, t, i);
              break e;
            }
            Ye(e, t, o, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          tf(t),
          e === null && il(t),
          (o = t.type),
          (a = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (h = a.children),
          Xo(o, a) ? (h = null) : c !== null && Xo(o, c) && (t.flags |= 32),
          Of(e, t),
          Ye(e, t, h, i),
          t.child
        );
      case 6:
        return (e === null && il(t), null);
      case 13:
        return Bf(e, t, i);
      case 4:
        return (
          dl(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = ir(t, null, o, i)) : Ye(e, t, o, i),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Tt(o, a)),
          Mf(e, t, o, a, i)
        );
      case 7:
        return (Ye(e, t, t.pendingProps, i), t.child);
      case 8:
        return (Ye(e, t, t.pendingProps.children, i), t.child);
      case 12:
        return (Ye(e, t, t.pendingProps.children, i), t.child);
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (a = t.pendingProps),
            (c = t.memoizedProps),
            (h = a.value),
            ge(os, o._currentValue),
            (o._currentValue = h),
            c !== null)
          )
            if (kt(c.value, h)) {
              if (c.children === a.children && !Je.current) {
                t = Gt(e, t, i);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null;) {
                var v = c.dependencies;
                if (v !== null) {
                  h = c.child;
                  for (var w = v.firstContext; w !== null;) {
                    if (w.context === o) {
                      if (c.tag === 1) {
                        ((w = Kt(-1, i & -i)), (w.tag = 2));
                        var C = c.updateQueue;
                        if (C !== null) {
                          C = C.shared;
                          var M = C.pending;
                          (M === null ? (w.next = w) : ((w.next = M.next), (M.next = w)),
                            (C.pending = w));
                        }
                      }
                      ((c.lanes |= i),
                        (w = c.alternate),
                        w !== null && (w.lanes |= i),
                        ul(c.return, i, t),
                        (v.lanes |= i));
                      break;
                    }
                    w = w.next;
                  }
                } else if (c.tag === 10) h = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((h = c.return), h === null)) throw Error(s(341));
                  ((h.lanes |= i),
                    (v = h.alternate),
                    v !== null && (v.lanes |= i),
                    ul(h, i, t),
                    (h = c.sibling));
                } else h = c.child;
                if (h !== null) h.return = c;
                else
                  for (h = c; h !== null;) {
                    if (h === t) {
                      h = null;
                      break;
                    }
                    if (((c = h.sibling), c !== null)) {
                      ((c.return = h.return), (h = c));
                      break;
                    }
                    h = h.return;
                  }
                c = h;
              }
          (Ye(e, t, a.children, i), (t = t.child));
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (o = t.pendingProps.children),
          or(t, i),
          (a = pt(a)),
          (o = o(a)),
          (t.flags |= 1),
          Ye(e, t, o, i),
          t.child
        );
      case 14:
        return ((o = t.type), (a = Tt(o, t.pendingProps)), (a = Tt(o.type, a)), Vf(e, t, o, a, i));
      case 15:
        return _f(e, t, t.type, t.pendingProps, i);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Tt(o, a)),
          vs(e, t),
          (t.tag = 1),
          et(o) ? ((e = !0), es(t)) : (e = !1),
          or(t, i),
          Ef(t, o, a),
          El(t, o, a, i),
          Dl(null, t, o, !0, e, i)
        );
      case 19:
        return Wf(e, t, i);
      case 22:
        return jf(e, t, i);
    }
    throw Error(s(156, t.tag));
  };
  function dd(e, t) {
    return Hu(e, t);
  }
  function wy(e, t, i, o) {
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
  function yt(e, t, i, o) {
    return new wy(e, t, i, o);
  }
  function Xl(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Sy(e) {
    if (typeof e == "function") return Xl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === st)) return 11;
      if (e === wt) return 14;
    }
    return 2;
  }
  function mn(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = yt(e.tag, t, e.key, e.mode)),
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
  function Ds(e, t, i, o, a, c) {
    var h = 2;
    if (((o = e), typeof e == "function")) Xl(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case ae:
          return Vn(i.children, a, c, t);
        case b:
          ((h = 8), (a |= 8));
          break;
        case Se:
          return ((e = yt(12, i, t, a | 2)), (e.elementType = Se), (e.lanes = c), e);
        case Ge:
          return ((e = yt(13, i, t, a)), (e.elementType = Ge), (e.lanes = c), e);
        case be:
          return ((e = yt(19, i, t, a)), (e.elementType = be), (e.lanes = c), e);
        case ie:
          return Ls(i, a, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ee:
                h = 10;
                break e;
              case Ze:
                h = 9;
                break e;
              case st:
                h = 11;
                break e;
              case wt:
                h = 14;
                break e;
              case Qe:
                ((h = 16), (o = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return ((t = yt(h, i, t, a)), (t.elementType = e), (t.type = o), (t.lanes = c), t);
  }
  function Vn(e, t, i, o) {
    return ((e = yt(7, e, o, t)), (e.lanes = i), e);
  }
  function Ls(e, t, i, o) {
    return (
      (e = yt(22, e, o, t)),
      (e.elementType = ie),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ql(e, t, i) {
    return ((e = yt(6, e, null, t)), (e.lanes = i), e);
  }
  function Zl(e, t, i) {
    return (
      (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function ky(e, t, i, o, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = To(0)),
      (this.expirationTimes = To(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = To(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function bl(e, t, i, o, a, c, h, v, w) {
    return (
      (e = new ky(e, t, i, v, w)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = yt(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: o,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      fl(c),
      e
    );
  }
  function Py(e, t, i) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ne,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: i,
    };
  }
  function hd(e) {
    if (!e) return on;
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
            if (et(t.type)) {
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
      if (et(i)) return Bc(e, i, t);
    }
    return t;
  }
  function pd(e, t, i, o, a, c, h, v, w) {
    return (
      (e = bl(i, o, !0, e, a, c, h, v, w)),
      (e.context = hd(null)),
      (i = e.current),
      (o = Xe()),
      (a = hn(i)),
      (c = Kt(o, a)),
      (c.callback = t ?? null),
      un(i, c, a),
      (e.current.lanes = a),
      Dr(e, a, o),
      rt(e, o),
      e
    );
  }
  function Ns(e, t, i, o) {
    var a = t.current,
      c = Xe(),
      h = hn(a);
    return (
      (i = hd(i)),
      t.context === null ? (t.context = i) : (t.pendingContext = i),
      (t = Kt(c, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = un(a, t, h)),
      e !== null && (At(e, a, h, c), as(e, a, h)),
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
  function md(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Jl(e, t) {
    (md(e, t), (e = e.alternate) && md(e, t));
  }
  function Ty() {
    return null;
  }
  var gd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ea(e) {
    this._internalRoot = e;
  }
  ((Vs.prototype.render = ea.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Ns(e, t, null, null);
    }),
    (Vs.prototype.unmount = ea.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Ln(function () {
            Ns(null, e, null, null);
          }),
            (t[Bt] = null));
        }
      }));
  function Vs(e) {
    this._internalRoot = e;
  }
  Vs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = bu();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < en.length && t !== 0 && t < en[i].priority; i++);
      (en.splice(i, 0, e), i === 0 && tc(e));
    }
  };
  function ta(e) {
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
  function yd() {}
  function Ey(e, t, i, o, a) {
    if (a) {
      if (typeof o == "function") {
        var c = o;
        o = function () {
          var C = Ms(h);
          c.call(C);
        };
      }
      var h = pd(t, o, e, 0, null, !1, !1, "", yd);
      return (
        (e._reactRootContainer = h),
        (e[Bt] = h.current),
        $r(e.nodeType === 8 ? e.parentNode : e),
        Ln(),
        h
      );
    }
    for (; (a = e.lastChild);) e.removeChild(a);
    if (typeof o == "function") {
      var v = o;
      o = function () {
        var C = Ms(w);
        v.call(C);
      };
    }
    var w = bl(e, 0, !1, null, null, !1, !1, "", yd);
    return (
      (e._reactRootContainer = w),
      (e[Bt] = w.current),
      $r(e.nodeType === 8 ? e.parentNode : e),
      Ln(function () {
        Ns(t, w, i, o);
      }),
      w
    );
  }
  function js(e, t, i, o, a) {
    var c = i._reactRootContainer;
    if (c) {
      var h = c;
      if (typeof a == "function") {
        var v = a;
        a = function () {
          var w = Ms(h);
          v.call(w);
        };
      }
      Ns(t, h, e, a);
    } else h = Ey(i, t, e, a, o);
    return Ms(h);
  }
  ((qu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = Rr(t.pendingLanes);
          i !== 0 && (Eo(t, i | 1), rt(t, Re()), (le & 6) === 0 && ((fr = Re() + 500), ln()));
        }
        break;
      case 13:
        (Ln(function () {
          var o = Ht(e, 1);
          if (o !== null) {
            var a = Xe();
            At(o, e, 1, a);
          }
        }),
          Jl(e, 1));
    }
  }),
    (Co = function (e) {
      if (e.tag === 13) {
        var t = Ht(e, 134217728);
        if (t !== null) {
          var i = Xe();
          At(t, e, 134217728, i);
        }
        Jl(e, 134217728);
      }
    }),
    (Zu = function (e) {
      if (e.tag === 13) {
        var t = hn(e),
          i = Ht(e, t);
        if (i !== null) {
          var o = Xe();
          At(i, e, t, o);
        }
        Jl(e, t);
      }
    }),
    (bu = function () {
      return pe;
    }),
    (Ju = function (e, t) {
      var i = pe;
      try {
        return ((pe = e), t());
      } finally {
        pe = i;
      }
    }),
    (vo = function (e, t, i) {
      switch (t) {
        case "input":
          if ((uo(e, i), (t = i.name), i.type === "radio" && t != null)) {
            for (i = e; i.parentNode;) i = i.parentNode;
            for (
              i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < i.length;
              t++
            ) {
              var o = i[t];
              if (o !== e && o.form === e.form) {
                var a = bi(o);
                if (!a) throw Error(s(90));
                (Pu(o), uo(o, a));
              }
            }
          }
          break;
        case "textarea":
          Ru(e, i);
          break;
        case "select":
          ((t = i.value), t != null && Wn(e, !!i.multiple, t, !1));
      }
    }),
    (Fu = Gl),
    (Iu = Ln));
  var Cy = { usingClientEntryPoint: !1, Events: [Gr, bn, bi, ju, Ou, Gl] },
    oi = {
      findFiberByHostInstance: kn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Ay = {
      bundleType: oi.bundleType,
      version: oi.version,
      rendererPackageName: oi.rendererPackageName,
      rendererConfig: oi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: te.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Wu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: oi.findFiberByHostInstance || Ty,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Os.isDisabled && Os.supportsFiber)
      try {
        ((Vi = Os.inject(Ay)), (Lt = Os));
      } catch {}
  }
  return (
    (it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cy),
    (it.createPortal = function (e, t) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ta(t)) throw Error(s(200));
      return Py(e, t, null, i);
    }),
    (it.createRoot = function (e, t) {
      if (!ta(e)) throw Error(s(299));
      var i = !1,
        o = "",
        a = gd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = bl(e, 1, !1, null, null, i, !1, o, a)),
        (e[Bt] = t.current),
        $r(e.nodeType === 8 ? e.parentNode : e),
        new ea(t)
      );
    }),
    (it.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return ((e = Wu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (it.flushSync = function (e) {
      return Ln(e);
    }),
    (it.hydrate = function (e, t, i) {
      if (!_s(t)) throw Error(s(200));
      return js(null, e, t, !0, i);
    }),
    (it.hydrateRoot = function (e, t, i) {
      if (!ta(e)) throw Error(s(405));
      var o = (i != null && i.hydratedSources) || null,
        a = !1,
        c = "",
        h = gd;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (a = !0),
          i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (h = i.onRecoverableError)),
        (t = pd(t, null, e, 1, i ?? null, a, !1, c, h)),
        (e[Bt] = t.current),
        $r(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((i = o[e]),
            (a = i._getVersion),
            (a = a(i._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [i, a])
              : t.mutableSourceEagerHydrationData.push(i, a));
      return new Vs(t);
    }),
    (it.render = function (e, t, i) {
      if (!_s(t)) throw Error(s(200));
      return js(null, e, t, !1, i);
    }),
    (it.unmountComponentAtNode = function (e) {
      if (!_s(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Ln(function () {
            js(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Bt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (it.unstable_batchedUpdates = Gl),
    (it.unstable_renderSubtreeIntoContainer = function (e, t, i, o) {
      if (!_s(i)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return js(e, t, i, !1, o);
    }),
    (it.version = "18.3.1-next-f1338f8080-20240426"),
    it
  );
}
var Ed;
function jy() {
  if (Ed) return ia.exports;
  Ed = 1;
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
  return (n(), (ia.exports = _y()), ia.exports);
}
var Cd;
function Oy() {
  if (Cd) return Fs;
  Cd = 1;
  var n = jy();
  return ((Fs.createRoot = n.createRoot), (Fs.hydrateRoot = n.hydrateRoot), Fs);
}
var Fy = Oy();
function Iy(n) {
  const r = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return r
    ? r.startsWith("/")
      ? { kind: "route", path: r.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: r }
    : null;
}
function zy(n, r = "smooth") {
  if (typeof document > "u") return !1;
  const s = document.getElementById(n);
  return s ? (s.scrollIntoView({ behavior: r, block: "start" }), !0) : !1;
}
function By() {
  if (typeof window > "u") return;
  const n = Iy();
  (n == null ? void 0 : n.kind) === "section" && requestAnimationFrame(() => zy(n.id, "auto"));
}
const Xh = Q.createContext({});
function no(n) {
  const r = Q.useRef(null);
  return (r.current === null && (r.current = n()), r.current);
}
const Ba = Q.createContext(null),
  Ua = Q.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
function Uy(n = !0) {
  const r = Q.useContext(Ba);
  if (r === null) return [!0, null];
  const { isPresent: s, onExitComplete: l, register: u } = r,
    d = Q.useId();
  Q.useEffect(() => {
    n && u(d);
  }, [n]);
  const f = Q.useCallback(() => n && l && l(d), [d, l, n]);
  return !s && l ? [!1, f] : [!0];
}
const Wa = typeof window < "u",
  $a = Wa ? Q.useLayoutEffect : Q.useEffect,
  qe = (n) => n;
let Wy = qe,
  qh = qe;
function Ha(n) {
  let r;
  return () => (r === void 0 && (r = n()), r);
}
const zn = (n, r, s) => {
    const l = r - n;
    return l === 0 ? 1 : (s - n) / l;
  },
  Xt = (n) => n * 1e3,
  qt = (n) => n / 1e3,
  $y = { useManualTiming: !1 };
function Hy(n) {
  let r = new Set(),
    s = new Set(),
    l = !1,
    u = !1;
  const d = new WeakSet();
  let f = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(g) {
    (d.has(g) && (m.schedule(g), n()), g(f));
  }
  const m = {
    schedule: (g, y = !1, x = !1) => {
      const A = x && l ? r : s;
      return (y && d.add(g), A.has(g) || A.add(g), g);
    },
    cancel: (g) => {
      (s.delete(g), d.delete(g));
    },
    process: (g) => {
      if (((f = g), l)) {
        u = !0;
        return;
      }
      ((l = !0),
        ([r, s] = [s, r]),
        r.forEach(p),
        r.clear(),
        (l = !1),
        u && ((u = !1), m.process(g)));
    },
  };
  return m;
}
const Is = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  Ky = 40;
function Zh(n, r) {
  let s = !1,
    l = !0;
  const u = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = Is.reduce((I, W) => ((I[W] = Hy(d)), I), {}),
    { read: p, resolveKeyframes: m, update: g, preRender: y, render: x, postRender: S } = f,
    A = () => {
      const I = performance.now();
      ((s = !1),
        (u.delta = l ? 1e3 / 60 : Math.max(Math.min(I - u.timestamp, Ky), 1)),
        (u.timestamp = I),
        (u.isProcessing = !0),
        p.process(u),
        m.process(u),
        g.process(u),
        y.process(u),
        x.process(u),
        S.process(u),
        (u.isProcessing = !1),
        s && r && ((l = !1), n(A)));
    },
    V = () => {
      ((s = !0), (l = !0), u.isProcessing || n(A));
    };
  return {
    schedule: Is.reduce((I, W) => {
      const K = f[W];
      return ((I[W] = (te, Y = !1, ne = !1) => (s || V(), K.schedule(te, Y, ne))), I);
    }, {}),
    cancel: (I) => {
      for (let W = 0; W < Is.length; W++) f[Is[W]].cancel(I);
    },
    state: u,
    steps: f,
  };
}
const {
    schedule: de,
    cancel: Dt,
    state: Fe,
    steps: la,
  } = Zh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : qe, !0),
  bh = Q.createContext({ strict: !1 }),
  Ad = {
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
  },
  vr = {};
for (const n in Ad) vr[n] = { isEnabled: (r) => Ad[n].some((s) => !!r[s]) };
function Gy(n) {
  for (const r in n) vr[r] = { ...vr[r], ...n[r] };
}
const Qy = new Set([
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
  "ignoreStrict",
  "viewport",
]);
function Ys(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    Qy.has(n)
  );
}
let Jh = (n) => !Ys(n);
function Yy(n) {
  n && (Jh = (r) => (r.startsWith("on") ? !Ys(r) : n(r)));
}
try {
  Yy(require("@emotion/is-prop-valid").default);
} catch {}
function Xy(n, r, s) {
  const l = {};
  for (const u in n)
    (u === "values" && typeof n.values == "object") ||
      ((Jh(u) ||
        (s === !0 && Ys(u)) ||
        (!r && !Ys(u)) ||
        (n.draggable && u.startsWith("onDrag"))) &&
        (l[u] = n[u]));
  return l;
}
function qy(n) {
  if (typeof Proxy > "u") return n;
  const r = new Map(),
    s = (...l) => n(...l);
  return new Proxy(s, {
    get: (l, u) => (u === "create" ? n : (r.has(u) || r.set(u, n(u)), r.get(u))),
  });
}
const ro = Q.createContext({});
function xi(n) {
  return typeof n == "string" || Array.isArray(n);
}
function io(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
const Ka = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Ga = ["initial", ...Ka];
function so(n) {
  return io(n.animate) || Ga.some((r) => xi(n[r]));
}
function ep(n) {
  return !!(so(n) || n.variants);
}
function Zy(n, r) {
  if (so(n)) {
    const { initial: s, animate: l } = n;
    return { initial: s === !1 || xi(s) ? s : void 0, animate: xi(l) ? l : void 0 };
  }
  return n.inherit !== !1 ? r : {};
}
function by(n) {
  const { initial: r, animate: s } = Zy(n, Q.useContext(ro));
  return Q.useMemo(() => ({ initial: r, animate: s }), [Rd(r), Rd(s)]);
}
function Rd(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const Jy = Symbol.for("motionComponentSymbol");
function hr(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function ev(n, r, s) {
  return Q.useCallback(
    (l) => {
      (l && n.onMount && n.onMount(l),
        r && (l ? r.mount(l) : r.unmount()),
        s && (typeof s == "function" ? s(l) : hr(s) && (s.current = l)));
    },
    [r],
  );
}
const Qa = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  tv = "framerAppearId",
  tp = "data-" + Qa(tv),
  { schedule: Ya } = Zh(queueMicrotask, !1),
  np = Q.createContext({});
function nv(n, r, s, l, u) {
  var d, f;
  const { visualElement: p } = Q.useContext(ro),
    m = Q.useContext(bh),
    g = Q.useContext(Ba),
    y = Q.useContext(Ua).reducedMotion,
    x = Q.useRef(null);
  ((l = l || m.renderer),
    !x.current &&
      l &&
      (x.current = l(n, {
        visualState: r,
        parent: p,
        props: s,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: y,
      })));
  const S = x.current,
    A = Q.useContext(np);
  S && !S.projection && u && (S.type === "html" || S.type === "svg") && rv(x.current, s, u, A);
  const V = Q.useRef(!1);
  Q.useInsertionEffect(() => {
    S && V.current && S.update(s, g);
  });
  const D = s[tp],
    j = Q.useRef(
      !!D &&
        !(!((d = window.MotionHandoffIsComplete) === null || d === void 0) && d.call(window, D)) &&
        ((f = window.MotionHasOptimisedAnimation) === null || f === void 0
          ? void 0
          : f.call(window, D)),
    );
  return (
    $a(() => {
      S &&
        ((V.current = !0),
        (window.MotionIsMounted = !0),
        S.updateFeatures(),
        Ya.render(S.render),
        j.current && S.animationState && S.animationState.animateChanges());
    }),
    Q.useEffect(() => {
      S &&
        (!j.current && S.animationState && S.animationState.animateChanges(),
        j.current &&
          (queueMicrotask(() => {
            var I;
            (I = window.MotionHandoffMarkAsComplete) === null || I === void 0 || I.call(window, D);
          }),
          (j.current = !1)));
    }),
    S
  );
}
function rv(n, r, s, l) {
  const { layoutId: u, layout: d, drag: f, dragConstraints: p, layoutScroll: m, layoutRoot: g } = r;
  ((n.projection = new s(n.latestValues, r["data-framer-portal-id"] ? void 0 : rp(n.parent))),
    n.projection.setOptions({
      layoutId: u,
      layout: d,
      alwaysMeasureLayout: !!f || (p && hr(p)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: l,
      layoutScroll: m,
      layoutRoot: g,
    }));
}
function rp(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : rp(n.parent);
}
function iv({
  preloadedFeatures: n,
  createVisualElement: r,
  useRender: s,
  useVisualState: l,
  Component: u,
}) {
  var d, f;
  n && Gy(n);
  function p(g, y) {
    let x;
    const S = { ...Q.useContext(Ua), ...g, layoutId: sv(g) },
      { isStatic: A } = S,
      V = by(g),
      D = l(g, A);
    if (!A && Wa) {
      ov();
      const j = lv(S);
      ((x = j.MeasureLayout), (V.visualElement = nv(u, D, S, r, j.ProjectionNode)));
    }
    return R.jsxs(ro.Provider, {
      value: V,
      children: [
        x && V.visualElement ? R.jsx(x, { visualElement: V.visualElement, ...S }) : null,
        s(u, g, ev(D, V.visualElement, y), D, A, V.visualElement),
      ],
    });
  }
  p.displayName = `motion.${typeof u == "string" ? u : `create(${(f = (d = u.displayName) !== null && d !== void 0 ? d : u.name) !== null && f !== void 0 ? f : ""})`}`;
  const m = Q.forwardRef(p);
  return ((m[Jy] = u), m);
}
function sv({ layoutId: n }) {
  const r = Q.useContext(Xh).id;
  return r && n !== void 0 ? r + "-" + n : n;
}
function ov(n, r) {
  Q.useContext(bh).strict;
}
function lv(n) {
  const { drag: r, layout: s } = vr;
  if (!r && !s) return {};
  const l = { ...r, ...s };
  return {
    MeasureLayout:
      (r != null && r.isEnabled(n)) || (s != null && s.isEnabled(n)) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode,
  };
}
const av = [
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
function Xa(n) {
  return typeof n != "string" || n.includes("-") ? !1 : !!(av.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function Dd(n) {
  const r = [{}, {}];
  return (
    n == null ||
      n.values.forEach((s, l) => {
        ((r[0][l] = s.get()), (r[1][l] = s.getVelocity()));
      }),
    r
  );
}
function qa(n, r, s, l) {
  if (typeof r == "function") {
    const [u, d] = Dd(l);
    r = r(s !== void 0 ? s : n.custom, u, d);
  }
  if ((typeof r == "string" && (r = n.variants && n.variants[r]), typeof r == "function")) {
    const [u, d] = Dd(l);
    r = r(s !== void 0 ? s : n.custom, u, d);
  }
  return r;
}
const ka = (n) => Array.isArray(n),
  uv = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
  cv = (n) => (ka(n) ? n[n.length - 1] || 0 : n),
  Ke = (n) => !!(n && n.getVelocity);
function Ws(n) {
  const r = Ke(n) ? n.get() : n;
  return uv(r) ? r.toValue() : r;
}
function fv({ scrapeMotionValuesFromProps: n, createRenderState: r, onUpdate: s }, l, u, d) {
  const f = { latestValues: dv(l, u, d, n), renderState: r() };
  return (
    s && ((f.onMount = (p) => s({ props: l, current: p, ...f })), (f.onUpdate = (p) => s(p))),
    f
  );
}
const ip = (n) => (r, s) => {
  const l = Q.useContext(ro),
    u = Q.useContext(Ba),
    d = () => fv(n, r, l, u);
  return s ? d() : no(d);
};
function dv(n, r, s, l) {
  const u = {},
    d = l(n, {});
  for (const S in d) u[S] = Ws(d[S]);
  let { initial: f, animate: p } = n;
  const m = so(n),
    g = ep(n);
  r &&
    g &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = r.initial), p === void 0 && (p = r.animate));
  let y = s ? s.initial === !1 : !1;
  y = y || f === !1;
  const x = y ? p : f;
  if (x && typeof x != "boolean" && !io(x)) {
    const S = Array.isArray(x) ? x : [x];
    for (let A = 0; A < S.length; A++) {
      const V = qa(n, S[A]);
      if (V) {
        const { transitionEnd: D, transition: j, ...I } = V;
        for (const W in I) {
          let K = I[W];
          if (Array.isArray(K)) {
            const te = y ? K.length - 1 : 0;
            K = K[te];
          }
          K !== null && (u[W] = K);
        }
        for (const W in D) u[W] = D[W];
      }
    }
  }
  return u;
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
  Un = new Set(wr),
  sp = (n) => (r) => typeof r == "string" && r.startsWith(n),
  op = sp("--"),
  hv = sp("var(--"),
  Za = (n) => (hv(n) ? pv.test(n.split("/*")[0].trim()) : !1),
  pv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  lp = (n, r) => (r && typeof n == "number" ? r.transform(n) : n),
  zt = (n, r, s) => (s > r ? r : s < n ? n : s),
  Sr = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  wi = { ...Sr, transform: (n) => zt(0, 1, n) },
  zs = { ...Sr, default: 1 },
  Pi = (n) => ({
    test: (r) => typeof r == "string" && r.endsWith(n) && r.split(" ").length === 1,
    parse: parseFloat,
    transform: (r) => `${r}${n}`,
  }),
  yn = Pi("deg"),
  Ft = Pi("%"),
  J = Pi("px"),
  mv = Pi("vh"),
  gv = Pi("vw"),
  Ld = { ...Ft, parse: (n) => Ft.parse(n) / 100, transform: (n) => Ft.transform(n * 100) },
  yv = {
    borderWidth: J,
    borderTopWidth: J,
    borderRightWidth: J,
    borderBottomWidth: J,
    borderLeftWidth: J,
    borderRadius: J,
    radius: J,
    borderTopLeftRadius: J,
    borderTopRightRadius: J,
    borderBottomRightRadius: J,
    borderBottomLeftRadius: J,
    width: J,
    maxWidth: J,
    height: J,
    maxHeight: J,
    top: J,
    right: J,
    bottom: J,
    left: J,
    padding: J,
    paddingTop: J,
    paddingRight: J,
    paddingBottom: J,
    paddingLeft: J,
    margin: J,
    marginTop: J,
    marginRight: J,
    marginBottom: J,
    marginLeft: J,
    backgroundPositionX: J,
    backgroundPositionY: J,
  },
  vv = {
    rotate: yn,
    rotateX: yn,
    rotateY: yn,
    rotateZ: yn,
    scale: zs,
    scaleX: zs,
    scaleY: zs,
    scaleZ: zs,
    skew: yn,
    skewX: yn,
    skewY: yn,
    distance: J,
    translateX: J,
    translateY: J,
    translateZ: J,
    x: J,
    y: J,
    z: J,
    perspective: J,
    transformPerspective: J,
    opacity: wi,
    originX: Ld,
    originY: Ld,
    originZ: J,
  },
  Nd = { ...Sr, transform: Math.round },
  ba = { ...yv, ...vv, zIndex: Nd, size: J, fillOpacity: wi, strokeOpacity: wi, numOctaves: Nd },
  xv = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  wv = wr.length;
function Sv(n, r, s) {
  let l = "",
    u = !0;
  for (let d = 0; d < wv; d++) {
    const f = wr[d],
      p = n[f];
    if (p === void 0) continue;
    let m = !0;
    if (
      (typeof p == "number"
        ? (m = p === (f.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(p) === 0),
      !m || s)
    ) {
      const g = lp(p, ba[f]);
      if (!m) {
        u = !1;
        const y = xv[f] || f;
        l += `${y}(${g}) `;
      }
      s && (r[f] = g);
    }
  }
  return ((l = l.trim()), s ? (l = s(r, u ? "" : l)) : u && (l = "none"), l);
}
function Ja(n, r, s) {
  const { style: l, vars: u, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in r) {
    const g = r[m];
    if (Un.has(m)) {
      f = !0;
      continue;
    } else if (op(m)) {
      u[m] = g;
      continue;
    } else {
      const y = lp(g, ba[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = y)) : (l[m] = y);
    }
  }
  if (
    (r.transform ||
      (f || s ? (l.transform = Sv(r, n.transform, s)) : l.transform && (l.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: g = "50%", originZ: y = 0 } = d;
    l.transformOrigin = `${m} ${g} ${y}`;
  }
}
const kv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Pv = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Tv(n, r, s = 1, l = 0, u = !0) {
  n.pathLength = 1;
  const d = u ? kv : Pv;
  n[d.offset] = J.transform(-l);
  const f = J.transform(r),
    p = J.transform(s);
  n[d.array] = `${f} ${p}`;
}
function Md(n, r, s) {
  return typeof n == "string" ? n : J.transform(r + s * n);
}
function Ev(n, r, s) {
  const l = Md(r, n.x, n.width),
    u = Md(s, n.y, n.height);
  return `${l} ${u}`;
}
function eu(
  n,
  {
    attrX: r,
    attrY: s,
    attrScale: l,
    originX: u,
    originY: d,
    pathLength: f,
    pathSpacing: p = 1,
    pathOffset: m = 0,
    ...g
  },
  y,
  x,
) {
  if ((Ja(n, g, x), y)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: S, style: A, dimensions: V } = n;
  (S.transform && (V && (A.transform = S.transform), delete S.transform),
    V &&
      (u !== void 0 || d !== void 0 || A.transform) &&
      (A.transformOrigin = Ev(V, u !== void 0 ? u : 0.5, d !== void 0 ? d : 0.5)),
    r !== void 0 && (S.x = r),
    s !== void 0 && (S.y = s),
    l !== void 0 && (S.scale = l),
    f !== void 0 && Tv(S, f, p, m, !1));
}
const tu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  ap = () => ({ ...tu(), attrs: {} }),
  nu = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function up(n, { style: r, vars: s }, l, u) {
  Object.assign(n.style, r, u && u.getProjectionStyles(l));
  for (const d in s) n.style.setProperty(d, s[d]);
}
const cp = new Set([
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
]);
function fp(n, r, s, l) {
  up(n, r, void 0, l);
  for (const u in r.attrs) n.setAttribute(cp.has(u) ? u : Qa(u), r.attrs[u]);
}
const Xs = {};
function Cv(n) {
  Object.assign(Xs, n);
}
function dp(n, { layout: r, layoutId: s }) {
  return (
    Un.has(n) || n.startsWith("origin") || ((r || s !== void 0) && (!!Xs[n] || n === "opacity"))
  );
}
function ru(n, r, s) {
  var l;
  const { style: u } = n,
    d = {};
  for (const f in u)
    (Ke(u[f]) ||
      (r.style && Ke(r.style[f])) ||
      dp(f, n) ||
      ((l = s == null ? void 0 : s.getValue(f)) === null || l === void 0 ? void 0 : l.liveStyle) !==
        void 0) &&
      (d[f] = u[f]);
  return d;
}
function hp(n, r, s) {
  const l = ru(n, r, s);
  for (const u in n)
    if (Ke(n[u]) || Ke(r[u])) {
      const d = wr.indexOf(u) !== -1 ? "attr" + u.charAt(0).toUpperCase() + u.substring(1) : u;
      l[d] = n[u];
    }
  return l;
}
function Av(n, r) {
  try {
    r.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect();
  } catch {
    r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Vd = ["x", "y", "width", "height", "cx", "cy", "r"],
  Rv = {
    useVisualState: ip({
      scrapeMotionValuesFromProps: hp,
      createRenderState: ap,
      onUpdate: ({ props: n, prevProps: r, current: s, renderState: l, latestValues: u }) => {
        if (!s) return;
        let d = !!n.drag;
        if (!d) {
          for (const p in u)
            if (Un.has(p)) {
              d = !0;
              break;
            }
        }
        if (!d) return;
        let f = !r;
        if (r)
          for (let p = 0; p < Vd.length; p++) {
            const m = Vd[p];
            n[m] !== r[m] && (f = !0);
          }
        f &&
          de.read(() => {
            (Av(s, l),
              de.render(() => {
                (eu(l, u, nu(s.tagName), n.transformTemplate), fp(s, l));
              }));
          });
      },
    }),
  },
  Dv = { useVisualState: ip({ scrapeMotionValuesFromProps: ru, createRenderState: tu }) };
function pp(n, r, s) {
  for (const l in r) !Ke(r[l]) && !dp(l, s) && (n[l] = r[l]);
}
function Lv({ transformTemplate: n }, r) {
  return Q.useMemo(() => {
    const s = tu();
    return (Ja(s, r, n), Object.assign({}, s.vars, s.style));
  }, [r]);
}
function Nv(n, r) {
  const s = n.style || {},
    l = {};
  return (pp(l, s, n), Object.assign(l, Lv(n, r)), l);
}
function Mv(n, r) {
  const s = {},
    l = Nv(n, r);
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
function Vv(n, r, s, l) {
  const u = Q.useMemo(() => {
    const d = ap();
    return (eu(d, r, nu(l), n.transformTemplate), { ...d.attrs, style: { ...d.style } });
  }, [r]);
  if (n.style) {
    const d = {};
    (pp(d, n.style, n), (u.style = { ...d, ...u.style }));
  }
  return u;
}
function _v(n = !1) {
  return (s, l, u, { latestValues: d }, f) => {
    const m = (Xa(s) ? Vv : Mv)(l, d, f, s),
      g = Xy(l, typeof s == "string", n),
      y = s !== Q.Fragment ? { ...g, ...m, ref: u } : {},
      { children: x } = l,
      S = Q.useMemo(() => (Ke(x) ? x.get() : x), [x]);
    return Q.createElement(s, { ...y, children: S });
  };
}
function jv(n, r) {
  return function (l, { forwardMotionProps: u } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Xa(l) ? Rv : Dv),
      preloadedFeatures: n,
      useRender: _v(u),
      createVisualElement: r,
      Component: l,
    };
    return iv(f);
  };
}
function mp(n, r) {
  if (!Array.isArray(r)) return !1;
  const s = r.length;
  if (s !== n.length) return !1;
  for (let l = 0; l < s; l++) if (r[l] !== n[l]) return !1;
  return !0;
}
function oo(n, r, s) {
  const l = n.getProps();
  return qa(l, r, s !== void 0 ? s : l.custom, n);
}
const gp = Ha(() => window.ScrollTimeline !== void 0);
class Ov {
  constructor(r) {
    ((this.stop = () => this.runAll("stop")), (this.animations = r.filter(Boolean)));
  }
  get finished() {
    return Promise.all(this.animations.map((r) => ("finished" in r ? r.finished : r)));
  }
  getAll(r) {
    return this.animations[0][r];
  }
  setAll(r, s) {
    for (let l = 0; l < this.animations.length; l++) this.animations[l][r] = s;
  }
  attachTimeline(r, s) {
    const l = this.animations.map((u) => {
      if (gp() && u.attachTimeline) return u.attachTimeline(r);
      if (typeof s == "function") return s(u);
    });
    return () => {
      l.forEach((u, d) => {
        (u && u(), this.animations[d].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(r) {
    this.setAll("time", r);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(r) {
    this.setAll("speed", r);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let r = 0;
    for (let s = 0; s < this.animations.length; s++) r = Math.max(r, this.animations[s].duration);
    return r;
  }
  runAll(r) {
    this.animations.forEach((s) => s[r]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class Fv extends Ov {
  then(r, s) {
    return Promise.all(this.animations).then(r).catch(s);
  }
}
function iu(n, r) {
  return n ? n[r] || n.default || n : void 0;
}
const Pa = 2e4;
function yp(n) {
  let r = 0;
  const s = 50;
  let l = n.next(r);
  for (; !l.done && r < Pa;) ((r += s), (l = n.next(r)));
  return r >= Pa ? 1 / 0 : r;
}
function su(n) {
  return typeof n == "function";
}
function _d(n, r) {
  ((n.timeline = r), (n.onfinish = null));
}
const ou = (n) => Array.isArray(n) && typeof n[0] == "number",
  Iv = { linearEasing: void 0 };
function zv(n, r) {
  const s = Ha(n);
  return () => {
    var l;
    return (l = Iv[r]) !== null && l !== void 0 ? l : s();
  };
}
const qs = zv(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  vp = (n, r, s = 10) => {
    let l = "";
    const u = Math.max(Math.round(r / s), 2);
    for (let d = 0; d < u; d++) l += n(zn(0, u - 1, d)) + ", ";
    return `linear(${l.substring(0, l.length - 2)})`;
  };
function xp(n) {
  return !!(
    (typeof n == "function" && qs()) ||
    !n ||
    (typeof n == "string" && (n in Ta || qs())) ||
    ou(n) ||
    (Array.isArray(n) && n.every(xp))
  );
}
const ci = ([n, r, s, l]) => `cubic-bezier(${n}, ${r}, ${s}, ${l})`,
  Ta = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ci([0, 0.65, 0.55, 1]),
    circOut: ci([0.55, 0, 1, 0.45]),
    backIn: ci([0.31, 0.01, 0.66, -0.59]),
    backOut: ci([0.33, 1.53, 0.69, 0.99]),
  };
function wp(n, r) {
  if (n)
    return typeof n == "function" && qs()
      ? vp(n, r)
      : ou(n)
        ? ci(n)
        : Array.isArray(n)
          ? n.map((s) => wp(s, r) || Ta.easeOut)
          : Ta[n];
}
const Rt = { x: !1, y: !1 };
function Sp() {
  return Rt.x || Rt.y;
}
function kp(n, r, s) {
  var l;
  if (n instanceof Element) return [n];
  if (typeof n == "string") {
    let u = document;
    const d = (l = void 0) !== null && l !== void 0 ? l : u.querySelectorAll(n);
    return d ? Array.from(d) : [];
  }
  return Array.from(n);
}
function Pp(n, r) {
  const s = kp(n),
    l = new AbortController(),
    u = { passive: !0, ...r, signal: l.signal };
  return [s, u, () => l.abort()];
}
function jd(n) {
  return (r) => {
    r.pointerType === "touch" || Sp() || n(r);
  };
}
function Bv(n, r, s = {}) {
  const [l, u, d] = Pp(n, s),
    f = jd((p) => {
      const { target: m } = p,
        g = r(p);
      if (typeof g != "function" || !m) return;
      const y = jd((x) => {
        (g(x), m.removeEventListener("pointerleave", y));
      });
      m.addEventListener("pointerleave", y, u);
    });
  return (
    l.forEach((p) => {
      p.addEventListener("pointerenter", f, u);
    }),
    d
  );
}
const Tp = (n, r) => (r ? (n === r ? !0 : Tp(n, r.parentElement)) : !1),
  lu = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  Uv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Wv(n) {
  return Uv.has(n.tagName) || n.tabIndex !== -1;
}
const fi = new WeakSet();
function Od(n) {
  return (r) => {
    r.key === "Enter" && n(r);
  };
}
function aa(n, r) {
  n.dispatchEvent(new PointerEvent("pointer" + r, { isPrimary: !0, bubbles: !0 }));
}
const $v = (n, r) => {
  const s = n.currentTarget;
  if (!s) return;
  const l = Od(() => {
    if (fi.has(s)) return;
    aa(s, "down");
    const u = Od(() => {
        aa(s, "up");
      }),
      d = () => aa(s, "cancel");
    (s.addEventListener("keyup", u, r), s.addEventListener("blur", d, r));
  });
  (s.addEventListener("keydown", l, r),
    s.addEventListener("blur", () => s.removeEventListener("keydown", l), r));
};
function Fd(n) {
  return lu(n) && !Sp();
}
function Hv(n, r, s = {}) {
  const [l, u, d] = Pp(n, s),
    f = (p) => {
      const m = p.currentTarget;
      if (!Fd(p) || fi.has(m)) return;
      fi.add(m);
      const g = r(p),
        y = (A, V) => {
          (window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", S),
            !(!Fd(A) || !fi.has(m)) &&
              (fi.delete(m), typeof g == "function" && g(A, { success: V })));
        },
        x = (A) => {
          y(A, s.useGlobalTarget || Tp(m, A.target));
        },
        S = (A) => {
          y(A, !1);
        };
      (window.addEventListener("pointerup", x, u), window.addEventListener("pointercancel", S, u));
    };
  return (
    l.forEach((p) => {
      (!Wv(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0),
        (s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, u),
        p.addEventListener("focus", (g) => $v(g, u), u));
    }),
    d
  );
}
function Kv(n) {
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
const Ep = new Set(["width", "height", "top", "left", "right", "bottom", ...wr]);
let $s;
function Gv() {
  $s = void 0;
}
const It = {
  now: () => (
    $s === void 0 &&
      It.set(Fe.isProcessing || $y.useManualTiming ? Fe.timestamp : performance.now()),
    $s
  ),
  set: (n) => {
    (($s = n), queueMicrotask(Gv));
  },
};
function au(n, r) {
  n.indexOf(r) === -1 && n.push(r);
}
function uu(n, r) {
  const s = n.indexOf(r);
  s > -1 && n.splice(s, 1);
}
class cu {
  constructor() {
    this.subscriptions = [];
  }
  add(r) {
    return (au(this.subscriptions, r), () => uu(this.subscriptions, r));
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
function fu(n, r) {
  return r ? n * (1e3 / r) : 0;
}
const Id = 30,
  Qv = (n) => !isNaN(parseFloat(n)),
  hi = { current: void 0 };
class Yv {
  constructor(r, s = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (l, u = !0) => {
        const d = It.now();
        (this.updatedAt !== d && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(l),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          u && this.events.renderRequest && this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(r),
      (this.owner = s.owner));
  }
  setCurrent(r) {
    ((this.current = r),
      (this.updatedAt = It.now()),
      this.canTrackVelocity === null && r !== void 0 && (this.canTrackVelocity = Qv(this.current)));
  }
  setPrevFrameValue(r = this.current) {
    ((this.prevFrameValue = r), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(r) {
    return this.on("change", r);
  }
  on(r, s) {
    this.events[r] || (this.events[r] = new cu());
    const l = this.events[r].add(s);
    return r === "change"
      ? () => {
          (l(),
            de.read(() => {
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
  set(r, s = !0) {
    !s || !this.passiveEffect
      ? this.updateAndNotify(r, s)
      : this.passiveEffect(r, this.updateAndNotify);
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
  get() {
    return (hi.current && hi.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const r = It.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || r - this.updatedAt > Id)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Id);
    return fu(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
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
    (this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Ot(n, r) {
  return new Yv(n, r);
}
function Xv(n, r, s) {
  n.hasValue(r) ? n.getValue(r).set(s) : n.addValue(r, Ot(s));
}
function qv(n, r) {
  const s = oo(n, r);
  let { transitionEnd: l = {}, transition: u = {}, ...d } = s || {};
  d = { ...d, ...l };
  for (const f in d) {
    const p = cv(d[f]);
    Xv(n, f, p);
  }
}
function Zv(n) {
  return !!(Ke(n) && n.add);
}
function Ea(n, r) {
  const s = n.getValue("willChange");
  if (Zv(s)) return s.add(r);
}
function Cp(n) {
  return n.props[tp];
}
const Ap = (n, r, s) => (((1 - 3 * s + 3 * r) * n + (3 * s - 6 * r)) * n + 3 * r) * n,
  bv = 1e-7,
  Jv = 12;
function e0(n, r, s, l, u) {
  let d,
    f,
    p = 0;
  do ((f = r + (s - r) / 2), (d = Ap(f, l, u) - n), d > 0 ? (s = f) : (r = f));
  while (Math.abs(d) > bv && ++p < Jv);
  return f;
}
function Ti(n, r, s, l) {
  if (n === r && s === l) return qe;
  const u = (d) => e0(d, 0, 1, n, s);
  return (d) => (d === 0 || d === 1 ? d : Ap(u(d), r, l));
}
const Rp = (n) => (r) => (r <= 0.5 ? n(2 * r) / 2 : (2 - n(2 * (1 - r))) / 2),
  Dp = (n) => (r) => 1 - n(1 - r),
  Lp = Ti(0.33, 1.53, 0.69, 0.99),
  du = Dp(Lp),
  Np = Rp(du),
  Mp = (n) => ((n *= 2) < 1 ? 0.5 * du(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))),
  hu = (n) => 1 - Math.sin(Math.acos(n)),
  Vp = Dp(hu),
  _p = Rp(hu),
  jp = (n) => /^0[^.\s]+$/u.test(n);
function t0(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || jp(n) : !0;
}
const pi = (n) => Math.round(n * 1e5) / 1e5,
  pu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function n0(n) {
  return n == null;
}
const r0 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  mu = (n, r) => (s) =>
    !!(
      (typeof s == "string" && r0.test(s) && s.startsWith(n)) ||
      (r && !n0(s) && Object.prototype.hasOwnProperty.call(s, r))
    ),
  Op = (n, r, s) => (l) => {
    if (typeof l != "string") return l;
    const [u, d, f, p] = l.match(pu);
    return {
      [n]: parseFloat(u),
      [r]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  i0 = (n) => zt(0, 255, n),
  ua = { ...Sr, transform: (n) => Math.round(i0(n)) },
  Fn = {
    test: mu("rgb", "red"),
    parse: Op("red", "green", "blue"),
    transform: ({ red: n, green: r, blue: s, alpha: l = 1 }) =>
      "rgba(" +
      ua.transform(n) +
      ", " +
      ua.transform(r) +
      ", " +
      ua.transform(s) +
      ", " +
      pi(wi.transform(l)) +
      ")",
  };
function s0(n) {
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
const Ca = { test: mu("#"), parse: s0, transform: Fn.transform },
  pr = {
    test: mu("hsl", "hue"),
    parse: Op("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: r, lightness: s, alpha: l = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      Ft.transform(pi(r)) +
      ", " +
      Ft.transform(pi(s)) +
      ", " +
      pi(wi.transform(l)) +
      ")",
  },
  He = {
    test: (n) => Fn.test(n) || Ca.test(n) || pr.test(n),
    parse: (n) => (Fn.test(n) ? Fn.parse(n) : pr.test(n) ? pr.parse(n) : Ca.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? Fn.transform(n) : pr.transform(n),
  },
  o0 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function l0(n) {
  var r, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((r = n.match(pu)) === null || r === void 0 ? void 0 : r.length) || 0) +
      (((s = n.match(o0)) === null || s === void 0 ? void 0 : s.length) || 0) >
      0
  );
}
const Fp = "number",
  Ip = "color",
  a0 = "var",
  u0 = "var(",
  zd = "${}",
  c0 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Si(n) {
  const r = n.toString(),
    s = [],
    l = { color: [], number: [], var: [] },
    u = [];
  let d = 0;
  const p = r
    .replace(
      c0,
      (m) => (
        He.test(m)
          ? (l.color.push(d), u.push(Ip), s.push(He.parse(m)))
          : m.startsWith(u0)
            ? (l.var.push(d), u.push(a0), s.push(m))
            : (l.number.push(d), u.push(Fp), s.push(parseFloat(m))),
        ++d,
        zd
      ),
    )
    .split(zd);
  return { values: s, split: p, indexes: l, types: u };
}
function zp(n) {
  return Si(n).values;
}
function Bp(n) {
  const { split: r, types: s } = Si(n),
    l = r.length;
  return (u) => {
    let d = "";
    for (let f = 0; f < l; f++)
      if (((d += r[f]), u[f] !== void 0)) {
        const p = s[f];
        p === Fp ? (d += pi(u[f])) : p === Ip ? (d += He.transform(u[f])) : (d += u[f]);
      }
    return d;
  };
}
const f0 = (n) => (typeof n == "number" ? 0 : n);
function d0(n) {
  const r = zp(n);
  return Bp(n)(r.map(f0));
}
const xn = { test: l0, parse: zp, createTransformer: Bp, getAnimatableNone: d0 },
  h0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function p0(n) {
  const [r, s] = n.slice(0, -1).split("(");
  if (r === "drop-shadow") return n;
  const [l] = s.match(pu) || [];
  if (!l) return n;
  const u = s.replace(l, "");
  let d = h0.has(r) ? 1 : 0;
  return (l !== s && (d *= 100), r + "(" + d + u + ")");
}
const m0 = /\b([a-z-]*)\(.*?\)/gu,
  Aa = {
    ...xn,
    getAnimatableNone: (n) => {
      const r = n.match(m0);
      return r ? r.map(p0).join(" ") : n;
    },
  },
  g0 = {
    ...ba,
    color: He,
    backgroundColor: He,
    outlineColor: He,
    fill: He,
    stroke: He,
    borderColor: He,
    borderTopColor: He,
    borderRightColor: He,
    borderBottomColor: He,
    borderLeftColor: He,
    filter: Aa,
    WebkitFilter: Aa,
  },
  gu = (n) => g0[n];
function Up(n, r) {
  let s = gu(n);
  return (s !== Aa && (s = xn), s.getAnimatableNone ? s.getAnimatableNone(r) : void 0);
}
const y0 = new Set(["auto", "none", "0"]);
function v0(n, r, s) {
  let l = 0,
    u;
  for (; l < n.length && !u;) {
    const d = n[l];
    (typeof d == "string" && !y0.has(d) && Si(d).values.length && (u = n[l]), l++);
  }
  if (u && s) for (const d of r) n[d] = Up(s, u);
}
const Bd = (n) => n === Sr || n === J,
  Ud = (n, r) => parseFloat(n.split(", ")[r]),
  Wd =
    (n, r) =>
    (s, { transform: l }) => {
      if (l === "none" || !l) return 0;
      const u = l.match(/^matrix3d\((.+)\)$/u);
      if (u) return Ud(u[1], r);
      {
        const d = l.match(/^matrix\((.+)\)$/u);
        return d ? Ud(d[1], n) : 0;
      }
    },
  x0 = new Set(["x", "y", "z"]),
  w0 = wr.filter((n) => !x0.has(n));
function S0(n) {
  const r = [];
  return (
    w0.forEach((s) => {
      const l = n.getValue(s);
      l !== void 0 && (r.push([s, l.get()]), l.set(s.startsWith("scale") ? 1 : 0));
    }),
    r
  );
}
const xr = {
  width: ({ x: n }, { paddingLeft: r = "0", paddingRight: s = "0" }) =>
    n.max - n.min - parseFloat(r) - parseFloat(s),
  height: ({ y: n }, { paddingTop: r = "0", paddingBottom: s = "0" }) =>
    n.max - n.min - parseFloat(r) - parseFloat(s),
  top: (n, { top: r }) => parseFloat(r),
  left: (n, { left: r }) => parseFloat(r),
  bottom: ({ y: n }, { top: r }) => parseFloat(r) + (n.max - n.min),
  right: ({ x: n }, { left: r }) => parseFloat(r) + (n.max - n.min),
  x: Wd(4, 13),
  y: Wd(5, 14),
};
xr.translateX = xr.x;
xr.translateY = xr.y;
const In = new Set();
let Ra = !1,
  Da = !1;
function Wp() {
  if (Da) {
    const n = Array.from(In).filter((l) => l.needsMeasurement),
      r = new Set(n.map((l) => l.element)),
      s = new Map();
    (r.forEach((l) => {
      const u = S0(l);
      u.length && (s.set(l, u), l.render());
    }),
      n.forEach((l) => l.measureInitialState()),
      r.forEach((l) => {
        l.render();
        const u = s.get(l);
        u &&
          u.forEach(([d, f]) => {
            var p;
            (p = l.getValue(d)) === null || p === void 0 || p.set(f);
          });
      }),
      n.forEach((l) => l.measureEndState()),
      n.forEach((l) => {
        l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY);
      }));
  }
  ((Da = !1), (Ra = !1), In.forEach((n) => n.complete()), In.clear());
}
function $p() {
  In.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (Da = !0));
  });
}
function k0() {
  ($p(), Wp());
}
class yu {
  constructor(r, s, l, u, d, f = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...r]),
      (this.onComplete = s),
      (this.name = l),
      (this.motionValue = u),
      (this.element = d),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (In.add(this), Ra || ((Ra = !0), de.read($p), de.resolveKeyframes(Wp)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: r, name: s, element: l, motionValue: u } = this;
    for (let d = 0; d < r.length; d++)
      if (r[d] === null)
        if (d === 0) {
          const f = u == null ? void 0 : u.get(),
            p = r[r.length - 1];
          if (f !== void 0) r[0] = f;
          else if (l && s) {
            const m = l.readValue(s, p);
            m != null && (r[0] = m);
          }
          (r[0] === void 0 && (r[0] = p), u && f === void 0 && u.set(r[0]));
        } else r[d] = r[d - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      In.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), In.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Hp = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  P0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function T0(n) {
  const r = P0.exec(n);
  if (!r) return [,];
  const [, s, l, u] = r;
  return [`--${s ?? l}`, u];
}
function Kp(n, r, s = 1) {
  const [l, u] = T0(n);
  if (!l) return;
  const d = window.getComputedStyle(r).getPropertyValue(l);
  if (d) {
    const f = d.trim();
    return Hp(f) ? parseFloat(f) : f;
  }
  return Za(u) ? Kp(u, r, s + 1) : u;
}
const Gp = (n) => (r) => r.test(n),
  E0 = { test: (n) => n === "auto", parse: (n) => n },
  Qp = [Sr, J, Ft, yn, gv, mv, E0],
  $d = (n) => Qp.find(Gp(n));
class Yp extends yu {
  constructor(r, s, l, u, d) {
    super(r, s, l, u, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: r, element: s, name: l } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let m = 0; m < r.length; m++) {
      let g = r[m];
      if (typeof g == "string" && ((g = g.trim()), Za(g))) {
        const y = Kp(g, s.current);
        (y !== void 0 && (r[m] = y), m === r.length - 1 && (this.finalKeyframe = g));
      }
    }
    if ((this.resolveNoneKeyframes(), !Ep.has(l) || r.length !== 2)) return;
    const [u, d] = r,
      f = $d(u),
      p = $d(d);
    if (f !== p)
      if (Bd(f) && Bd(p))
        for (let m = 0; m < r.length; m++) {
          const g = r[m];
          typeof g == "string" && (r[m] = parseFloat(g));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: r, name: s } = this,
      l = [];
    for (let u = 0; u < r.length; u++) t0(r[u]) && l.push(u);
    l.length && v0(r, l, s);
  }
  measureInitialState() {
    const { element: r, unresolvedKeyframes: s, name: l } = this;
    if (!r || !r.current) return;
    (l === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = xr[l](r.measureViewportBox(), window.getComputedStyle(r.current))),
      (s[0] = this.measuredOrigin));
    const u = s[s.length - 1];
    u !== void 0 && r.getValue(l, u).jump(u, !1);
  }
  measureEndState() {
    var r;
    const { element: s, name: l, unresolvedKeyframes: u } = this;
    if (!s || !s.current) return;
    const d = s.getValue(l);
    d && d.jump(this.measuredOrigin, !1);
    const f = u.length - 1,
      p = u[f];
    ((u[f] = xr[l](s.measureViewportBox(), window.getComputedStyle(s.current))),
      p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
      !((r = this.removedTransforms) === null || r === void 0) &&
        r.length &&
        this.removedTransforms.forEach(([m, g]) => {
          s.getValue(m).set(g);
        }),
      this.resolveNoneKeyframes());
  }
}
const Hd = (n, r) =>
  r === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" && (xn.test(n) || n === "0") && !n.startsWith("url("))
      );
function C0(n) {
  const r = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== r) return !0;
}
function A0(n, r, s, l) {
  const u = n[0];
  if (u === null) return !1;
  if (r === "display" || r === "visibility") return !0;
  const d = n[n.length - 1],
    f = Hd(u, r),
    p = Hd(d, r);
  return !f || !p ? !1 : C0(n) || ((s === "spring" || su(s)) && l);
}
const R0 = (n) => n !== null;
function lo(n, { repeat: r, repeatType: s = "loop" }, l) {
  const u = n.filter(R0),
    d = r && s !== "loop" && r % 2 === 1 ? 0 : u.length - 1;
  return !d || l === void 0 ? u[d] : l;
}
const D0 = 40;
class Xp {
  constructor({
    autoplay: r = !0,
    delay: s = 0,
    type: l = "keyframes",
    repeat: u = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    ...p
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = It.now()),
      (this.options = {
        autoplay: r,
        delay: s,
        type: l,
        repeat: u,
        repeatDelay: d,
        repeatType: f,
        ...p,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > D0
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (!this._resolved && !this.hasAttemptedResolve && k0(), this._resolved);
  }
  onKeyframesResolved(r, s) {
    ((this.resolvedAt = It.now()), (this.hasAttemptedResolve = !0));
    const {
      name: l,
      type: u,
      velocity: d,
      delay: f,
      onComplete: p,
      onUpdate: m,
      isGenerator: g,
    } = this.options;
    if (!g && !A0(r, l, u, d))
      if (f) this.options.duration = 0;
      else {
        (m && m(lo(r, this.options, s)), p && p(), this.resolveFinishedPromise());
        return;
      }
    const y = this.initPlayback(r, s);
    y !== !1 &&
      ((this._resolved = { keyframes: r, finalKeyframe: s, ...y }), this.onPostResolved());
  }
  onPostResolved() {}
  then(r, s) {
    return this.currentFinishedPromise.then(r, s);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((r) => {
      this.resolveFinishedPromise = r;
    });
  }
}
const Te = (n, r, s) => n + (r - n) * s;
function ca(n, r, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (r - n) * 6 * s : s < 1 / 2 ? r : s < 2 / 3 ? n + (r - n) * (2 / 3 - s) * 6 : n
  );
}
function L0({ hue: n, saturation: r, lightness: s, alpha: l }) {
  ((n /= 360), (r /= 100), (s /= 100));
  let u = 0,
    d = 0,
    f = 0;
  if (!r) u = d = f = s;
  else {
    const p = s < 0.5 ? s * (1 + r) : s + r - s * r,
      m = 2 * s - p;
    ((u = ca(m, p, n + 1 / 3)), (d = ca(m, p, n)), (f = ca(m, p, n - 1 / 3)));
  }
  return {
    red: Math.round(u * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: l,
  };
}
function Zs(n, r) {
  return (s) => (s > 0 ? r : n);
}
const fa = (n, r, s) => {
    const l = n * n,
      u = s * (r * r - l) + l;
    return u < 0 ? 0 : Math.sqrt(u);
  },
  N0 = [Ca, Fn, pr],
  M0 = (n) => N0.find((r) => r.test(n));
function Kd(n) {
  const r = M0(n);
  if (!r) return !1;
  let s = r.parse(n);
  return (r === pr && (s = L0(s)), s);
}
const Gd = (n, r) => {
    const s = Kd(n),
      l = Kd(r);
    if (!s || !l) return Zs(n, r);
    const u = { ...s };
    return (d) => (
      (u.red = fa(s.red, l.red, d)),
      (u.green = fa(s.green, l.green, d)),
      (u.blue = fa(s.blue, l.blue, d)),
      (u.alpha = Te(s.alpha, l.alpha, d)),
      Fn.transform(u)
    );
  },
  V0 = (n, r) => (s) => r(n(s)),
  Ei = (...n) => n.reduce(V0),
  La = new Set(["none", "hidden"]);
function _0(n, r) {
  return La.has(n) ? (s) => (s <= 0 ? n : r) : (s) => (s >= 1 ? r : n);
}
function j0(n, r) {
  return (s) => Te(n, r, s);
}
function vu(n) {
  return typeof n == "number"
    ? j0
    : typeof n == "string"
      ? Za(n)
        ? Zs
        : He.test(n)
          ? Gd
          : I0
      : Array.isArray(n)
        ? qp
        : typeof n == "object"
          ? He.test(n)
            ? Gd
            : O0
          : Zs;
}
function qp(n, r) {
  const s = [...n],
    l = s.length,
    u = n.map((d, f) => vu(d)(d, r[f]));
  return (d) => {
    for (let f = 0; f < l; f++) s[f] = u[f](d);
    return s;
  };
}
function O0(n, r) {
  const s = { ...n, ...r },
    l = {};
  for (const u in s) n[u] !== void 0 && r[u] !== void 0 && (l[u] = vu(n[u])(n[u], r[u]));
  return (u) => {
    for (const d in l) s[d] = l[d](u);
    return s;
  };
}
function F0(n, r) {
  var s;
  const l = [],
    u = { color: 0, var: 0, number: 0 };
  for (let d = 0; d < r.values.length; d++) {
    const f = r.types[d],
      p = n.indexes[f][u[f]],
      m = (s = n.values[p]) !== null && s !== void 0 ? s : 0;
    ((l[d] = m), u[f]++);
  }
  return l;
}
const I0 = (n, r) => {
  const s = xn.createTransformer(r),
    l = Si(n),
    u = Si(r);
  return l.indexes.var.length === u.indexes.var.length &&
    l.indexes.color.length === u.indexes.color.length &&
    l.indexes.number.length >= u.indexes.number.length
    ? (La.has(n) && !u.values.length) || (La.has(r) && !l.values.length)
      ? _0(n, r)
      : Ei(qp(F0(l, u), u.values), s)
    : Zs(n, r);
};
function Zp(n, r, s) {
  return typeof n == "number" && typeof r == "number" && typeof s == "number"
    ? Te(n, r, s)
    : vu(n)(n, r);
}
const z0 = 5;
function bp(n, r, s) {
  const l = Math.max(r - z0, 0);
  return fu(s - n(l), r - l);
}
const Ae = {
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
  },
  da = 0.001;
function B0({
  duration: n = Ae.duration,
  bounce: r = Ae.bounce,
  velocity: s = Ae.velocity,
  mass: l = Ae.mass,
}) {
  let u,
    d,
    f = 1 - r;
  ((f = zt(Ae.minDamping, Ae.maxDamping, f)),
    (n = zt(Ae.minDuration, Ae.maxDuration, qt(n))),
    f < 1
      ? ((u = (g) => {
          const y = g * f,
            x = y * n,
            S = y - s,
            A = Na(g, f),
            V = Math.exp(-x);
          return da - (S / A) * V;
        }),
        (d = (g) => {
          const x = g * f * n,
            S = x * s + s,
            A = Math.pow(f, 2) * Math.pow(g, 2) * n,
            V = Math.exp(-x),
            D = Na(Math.pow(g, 2), f);
          return ((-u(g) + da > 0 ? -1 : 1) * ((S - A) * V)) / D;
        }))
      : ((u = (g) => {
          const y = Math.exp(-g * n),
            x = (g - s) * n + 1;
          return -da + y * x;
        }),
        (d = (g) => {
          const y = Math.exp(-g * n),
            x = (s - g) * (n * n);
          return y * x;
        })));
  const p = 5 / n,
    m = W0(u, d, p);
  if (((n = Xt(n)), isNaN(m))) return { stiffness: Ae.stiffness, damping: Ae.damping, duration: n };
  {
    const g = Math.pow(m, 2) * l;
    return { stiffness: g, damping: f * 2 * Math.sqrt(l * g), duration: n };
  }
}
const U0 = 12;
function W0(n, r, s) {
  let l = s;
  for (let u = 1; u < U0; u++) l = l - n(l) / r(l);
  return l;
}
function Na(n, r) {
  return n * Math.sqrt(1 - r * r);
}
const $0 = ["duration", "bounce"],
  H0 = ["stiffness", "damping", "mass"];
function Qd(n, r) {
  return r.some((s) => n[s] !== void 0);
}
function K0(n) {
  let r = {
    velocity: Ae.velocity,
    stiffness: Ae.stiffness,
    damping: Ae.damping,
    mass: Ae.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Qd(n, H0) && Qd(n, $0))
    if (n.visualDuration) {
      const s = n.visualDuration,
        l = (2 * Math.PI) / (s * 1.2),
        u = l * l,
        d = 2 * zt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
      r = { ...r, mass: Ae.mass, stiffness: u, damping: d };
    } else {
      const s = B0(n);
      ((r = { ...r, ...s, mass: Ae.mass }), (r.isResolvedFromDuration = !0));
    }
  return r;
}
function Jp(n = Ae.visualDuration, r = Ae.bounce) {
  const s = typeof n != "object" ? { visualDuration: n, keyframes: [0, 1], bounce: r } : n;
  let { restSpeed: l, restDelta: u } = s;
  const d = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: g,
      mass: y,
      duration: x,
      velocity: S,
      isResolvedFromDuration: A,
    } = K0({ ...s, velocity: -qt(s.velocity || 0) }),
    V = S || 0,
    D = g / (2 * Math.sqrt(m * y)),
    j = f - d,
    I = qt(Math.sqrt(m / y)),
    W = Math.abs(j) < 5;
  (l || (l = W ? Ae.restSpeed.granular : Ae.restSpeed.default),
    u || (u = W ? Ae.restDelta.granular : Ae.restDelta.default));
  let K;
  if (D < 1) {
    const Y = Na(I, D);
    K = (ne) => {
      const ae = Math.exp(-D * I * ne);
      return f - ae * (((V + D * I * j) / Y) * Math.sin(Y * ne) + j * Math.cos(Y * ne));
    };
  } else if (D === 1) K = (Y) => f - Math.exp(-I * Y) * (j + (V + I * j) * Y);
  else {
    const Y = I * Math.sqrt(D * D - 1);
    K = (ne) => {
      const ae = Math.exp(-D * I * ne),
        b = Math.min(Y * ne, 300);
      return f - (ae * ((V + D * I * j) * Math.sinh(b) + Y * j * Math.cosh(b))) / Y;
    };
  }
  const te = {
    calculatedDuration: (A && x) || null,
    next: (Y) => {
      const ne = K(Y);
      if (A) p.done = Y >= x;
      else {
        let ae = 0;
        D < 1 && (ae = Y === 0 ? Xt(V) : bp(K, Y, ne));
        const b = Math.abs(ae) <= l,
          Se = Math.abs(f - ne) <= u;
        p.done = b && Se;
      }
      return ((p.value = p.done ? f : ne), p);
    },
    toString: () => {
      const Y = Math.min(yp(te), Pa),
        ne = vp((ae) => te.next(Y * ae).value, Y, 30);
      return Y + "ms " + ne;
    },
  };
  return te;
}
function Yd({
  keyframes: n,
  velocity: r = 0,
  power: s = 0.8,
  timeConstant: l = 325,
  bounceDamping: u = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: p,
  max: m,
  restDelta: g = 0.5,
  restSpeed: y,
}) {
  const x = n[0],
    S = { done: !1, value: x },
    A = (b) => (p !== void 0 && b < p) || (m !== void 0 && b > m),
    V = (b) => (p === void 0 ? m : m === void 0 || Math.abs(p - b) < Math.abs(m - b) ? p : m);
  let D = s * r;
  const j = x + D,
    I = f === void 0 ? j : f(j);
  I !== j && (D = I - x);
  const W = (b) => -D * Math.exp(-b / l),
    K = (b) => I + W(b),
    te = (b) => {
      const Se = W(b),
        Ee = K(b);
      ((S.done = Math.abs(Se) <= g), (S.value = S.done ? I : Ee));
    };
  let Y, ne;
  const ae = (b) => {
    A(S.value) &&
      ((Y = b),
      (ne = Jp({
        keyframes: [S.value, V(S.value)],
        velocity: bp(K, b, S.value),
        damping: u,
        stiffness: d,
        restDelta: g,
        restSpeed: y,
      })));
  };
  return (
    ae(0),
    {
      calculatedDuration: null,
      next: (b) => {
        let Se = !1;
        return (
          !ne && Y === void 0 && ((Se = !0), te(b), ae(b)),
          Y !== void 0 && b >= Y ? ne.next(b - Y) : (!Se && te(b), S)
        );
      },
    }
  );
}
const G0 = Ti(0.42, 0, 1, 1),
  Q0 = Ti(0, 0, 0.58, 1),
  em = Ti(0.42, 0, 0.58, 1),
  Y0 = (n) => Array.isArray(n) && typeof n[0] != "number",
  X0 = {
    linear: qe,
    easeIn: G0,
    easeInOut: em,
    easeOut: Q0,
    circIn: hu,
    circInOut: _p,
    circOut: Vp,
    backIn: du,
    backInOut: Np,
    backOut: Lp,
    anticipate: Mp,
  },
  Xd = (n) => {
    if (ou(n)) {
      qh(n.length === 4);
      const [r, s, l, u] = n;
      return Ti(r, s, l, u);
    } else if (typeof n == "string") return X0[n];
    return n;
  };
function q0(n, r, s) {
  const l = [],
    u = s || Zp,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = u(n[f], n[f + 1]);
    if (r) {
      const m = Array.isArray(r) ? r[f] || qe : r;
      p = Ei(m, p);
    }
    l.push(p);
  }
  return l;
}
function xu(n, r, { clamp: s = !0, ease: l, mixer: u } = {}) {
  const d = n.length;
  if ((qh(d === r.length), d === 1)) return () => r[0];
  if (d === 2 && r[0] === r[1]) return () => r[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (r = [...r].reverse()));
  const p = q0(r, l, u),
    m = p.length,
    g = (y) => {
      if (f && y < n[0]) return r[0];
      let x = 0;
      if (m > 1) for (; x < n.length - 2 && !(y < n[x + 1]); x++);
      const S = zn(n[x], n[x + 1], y);
      return p[x](S);
    };
  return s ? (y) => g(zt(n[0], n[d - 1], y)) : g;
}
function Z0(n, r) {
  const s = n[n.length - 1];
  for (let l = 1; l <= r; l++) {
    const u = zn(0, r, l);
    n.push(Te(s, 1, u));
  }
}
function tm(n) {
  const r = [0];
  return (Z0(r, n.length - 1), r);
}
function b0(n, r) {
  return n.map((s) => s * r);
}
function J0(n, r) {
  return n.map(() => r || em).splice(0, n.length - 1);
}
function bs({ duration: n = 300, keyframes: r, times: s, ease: l = "easeInOut" }) {
  const u = Y0(l) ? l.map(Xd) : Xd(l),
    d = { done: !1, value: r[0] },
    f = b0(s && s.length === r.length ? s : tm(r), n),
    p = xu(f, r, { ease: Array.isArray(u) ? u : J0(r, u) });
  return { calculatedDuration: n, next: (m) => ((d.value = p(m)), (d.done = m >= n), d) };
}
const ex = (n) => {
    const r = ({ timestamp: s }) => n(s);
    return {
      start: () => de.update(r, !0),
      stop: () => Dt(r),
      now: () => (Fe.isProcessing ? Fe.timestamp : It.now()),
    };
  },
  tx = { decay: Yd, inertia: Yd, tween: bs, keyframes: bs, spring: Jp },
  nx = (n) => n / 100;
class wu extends Xp {
  constructor(r) {
    (super(r),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")) return;
        this.teardown();
        const { onStop: m } = this.options;
        m && m();
      }));
    const { name: s, motionValue: l, element: u, keyframes: d } = this.options,
      f = (u == null ? void 0 : u.KeyframeResolver) || yu,
      p = (m, g) => this.onKeyframesResolved(m, g);
    ((this.resolver = new f(d, p, s, l, u)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes)));
  }
  initPlayback(r) {
    const {
        type: s = "keyframes",
        repeat: l = 0,
        repeatDelay: u = 0,
        repeatType: d,
        velocity: f = 0,
      } = this.options,
      p = su(s) ? s : tx[s] || bs;
    let m, g;
    p !== bs && typeof r[0] != "number" && ((m = Ei(nx, Zp(r[0], r[1]))), (r = [0, 100]));
    const y = p({ ...this.options, keyframes: r });
    (d === "mirror" && (g = p({ ...this.options, keyframes: [...r].reverse(), velocity: -f })),
      y.calculatedDuration === null && (y.calculatedDuration = yp(y)));
    const { calculatedDuration: x } = y,
      S = x + u,
      A = S * (l + 1) - u;
    return {
      generator: y,
      mirroredGenerator: g,
      mapPercentToKeyframes: m,
      calculatedDuration: x,
      resolvedDuration: S,
      totalDuration: A,
    };
  }
  onPostResolved() {
    const { autoplay: r = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !r
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(r, s = !1) {
    const { resolved: l } = this;
    if (!l) {
      const { keyframes: b } = this.options;
      return { done: !0, value: b[b.length - 1] };
    }
    const {
      finalKeyframe: u,
      generator: d,
      mirroredGenerator: f,
      mapPercentToKeyframes: p,
      keyframes: m,
      calculatedDuration: g,
      totalDuration: y,
      resolvedDuration: x,
    } = l;
    if (this.startTime === null) return d.next(0);
    const { delay: S, repeat: A, repeatType: V, repeatDelay: D, onUpdate: j } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, r))
      : this.speed < 0 && (this.startTime = Math.min(r - y / this.speed, this.startTime)),
      s
        ? (this.currentTime = r)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(r - this.startTime) * this.speed));
    const I = this.currentTime - S * (this.speed >= 0 ? 1 : -1),
      W = this.speed >= 0 ? I < 0 : I > y;
    ((this.currentTime = Math.max(I, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = y));
    let K = this.currentTime,
      te = d;
    if (A) {
      const b = Math.min(this.currentTime, y) / x;
      let Se = Math.floor(b),
        Ee = b % 1;
      (!Ee && b >= 1 && (Ee = 1),
        Ee === 1 && Se--,
        (Se = Math.min(Se, A + 1)),
        !!(Se % 2) &&
          (V === "reverse" ? ((Ee = 1 - Ee), D && (Ee -= D / x)) : V === "mirror" && (te = f)),
        (K = zt(0, 1, Ee) * x));
    }
    const Y = W ? { done: !1, value: m[0] } : te.next(K);
    p && (Y.value = p(Y.value));
    let { done: ne } = Y;
    !W && g !== null && (ne = this.speed >= 0 ? this.currentTime >= y : this.currentTime <= 0);
    const ae =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ne));
    return (
      ae && u !== void 0 && (Y.value = lo(m, this.options, u)),
      j && j(Y.value),
      ae && this.finish(),
      Y
    );
  }
  get duration() {
    const { resolved: r } = this;
    return r ? qt(r.calculatedDuration) : 0;
  }
  get time() {
    return qt(this.currentTime);
  }
  set time(r) {
    ((r = Xt(r)),
      (this.currentTime = r),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = r)
        : this.driver && (this.startTime = this.driver.now() - r / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(r) {
    const s = this.playbackSpeed !== r;
    ((this.playbackSpeed = r), s && (this.time = qt(this.currentTime)));
  }
  play() {
    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: r = ex, onPlay: s, startTime: l } = this.options;
    (this.driver || (this.driver = r((d) => this.tick(d))), s && s());
    const u = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = u - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = u)
        : (this.startTime = l ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var r;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime = (r = this.currentTime) !== null && r !== void 0 ? r : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: r } = this.options;
    r && r();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(r) {
    return ((this.startTime = 0), this.tick(r, !0));
  }
}
const rx = new Set(["opacity", "clipPath", "filter", "transform"]);
function ix(
  n,
  r,
  s,
  {
    delay: l = 0,
    duration: u = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: p = "easeInOut",
    times: m,
  } = {},
) {
  const g = { [r]: s };
  m && (g.offset = m);
  const y = wp(p, u);
  return (
    Array.isArray(y) && (g.easing = y),
    n.animate(g, {
      delay: l,
      duration: u,
      easing: Array.isArray(y) ? "linear" : y,
      fill: "both",
      iterations: d + 1,
      direction: f === "reverse" ? "alternate" : "normal",
    })
  );
}
const sx = Ha(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Js = 10,
  ox = 2e4;
function lx(n) {
  return su(n.type) || n.type === "spring" || !xp(n.ease);
}
function ax(n, r) {
  const s = new wu({ ...r, keyframes: n, repeat: 0, delay: 0, isGenerator: !0 });
  let l = { done: !1, value: n[0] };
  const u = [];
  let d = 0;
  for (; !l.done && d < ox;) ((l = s.sample(d)), u.push(l.value), (d += Js));
  return { times: void 0, keyframes: u, duration: d - Js, ease: "linear" };
}
const nm = { anticipate: Mp, backInOut: Np, circInOut: _p };
function ux(n) {
  return n in nm;
}
class qd extends Xp {
  constructor(r) {
    super(r);
    const { name: s, motionValue: l, element: u, keyframes: d } = this.options;
    ((this.resolver = new Yp(d, (f, p) => this.onKeyframesResolved(f, p), s, l, u)),
      this.resolver.scheduleResolve());
  }
  initPlayback(r, s) {
    let {
      duration: l = 300,
      times: u,
      ease: d,
      type: f,
      motionValue: p,
      name: m,
      startTime: g,
    } = this.options;
    if (!p.owner || !p.owner.current) return !1;
    if ((typeof d == "string" && qs() && ux(d) && (d = nm[d]), lx(this.options))) {
      const { onComplete: x, onUpdate: S, motionValue: A, element: V, ...D } = this.options,
        j = ax(r, D);
      ((r = j.keyframes),
        r.length === 1 && (r[1] = r[0]),
        (l = j.duration),
        (u = j.times),
        (d = j.ease),
        (f = "keyframes"));
    }
    const y = ix(p.owner.current, m, r, { ...this.options, duration: l, times: u, ease: d });
    return (
      (y.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? (_d(y, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (y.onfinish = () => {
            const { onComplete: x } = this.options;
            (p.set(lo(r, this.options, s)), x && x(), this.cancel(), this.resolveFinishedPromise());
          }),
      { animation: y, duration: l, times: u, type: f, ease: d, keyframes: r }
    );
  }
  get duration() {
    const { resolved: r } = this;
    if (!r) return 0;
    const { duration: s } = r;
    return qt(s);
  }
  get time() {
    const { resolved: r } = this;
    if (!r) return 0;
    const { animation: s } = r;
    return qt(s.currentTime || 0);
  }
  set time(r) {
    const { resolved: s } = this;
    if (!s) return;
    const { animation: l } = s;
    l.currentTime = Xt(r);
  }
  get speed() {
    const { resolved: r } = this;
    if (!r) return 1;
    const { animation: s } = r;
    return s.playbackRate;
  }
  set speed(r) {
    const { resolved: s } = this;
    if (!s) return;
    const { animation: l } = s;
    l.playbackRate = r;
  }
  get state() {
    const { resolved: r } = this;
    if (!r) return "idle";
    const { animation: s } = r;
    return s.playState;
  }
  get startTime() {
    const { resolved: r } = this;
    if (!r) return null;
    const { animation: s } = r;
    return s.startTime;
  }
  attachTimeline(r) {
    if (!this._resolved) this.pendingTimeline = r;
    else {
      const { resolved: s } = this;
      if (!s) return qe;
      const { animation: l } = s;
      _d(l, r);
    }
    return qe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: r } = this;
    if (!r) return;
    const { animation: s } = r;
    (s.playState === "finished" && this.updateFinishedPromise(), s.play());
  }
  pause() {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: s } = r;
    s.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")) return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: r } = this;
    if (!r) return;
    const { animation: s, keyframes: l, duration: u, type: d, ease: f, times: p } = r;
    if (s.playState === "idle" || s.playState === "finished") return;
    if (this.time) {
      const { motionValue: g, onUpdate: y, onComplete: x, element: S, ...A } = this.options,
        V = new wu({
          ...A,
          keyframes: l,
          duration: u,
          type: d,
          ease: f,
          times: p,
          isGenerator: !0,
        }),
        D = Xt(this.time);
      g.setWithVelocity(V.sample(D - Js).value, V.sample(D).value, Js);
    }
    const { onStop: m } = this.options;
    (m && m(), this.cancel());
  }
  complete() {
    const { resolved: r } = this;
    r && r.animation.finish();
  }
  cancel() {
    const { resolved: r } = this;
    r && r.animation.cancel();
  }
  static supports(r) {
    const { motionValue: s, name: l, repeatDelay: u, repeatType: d, damping: f, type: p } = r;
    if (!s || !s.owner || !(s.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: m, transformTemplate: g } = s.owner.getProps();
    return sx() && l && rx.has(l) && !m && !g && !u && d !== "mirror" && f !== 0 && p !== "inertia";
  }
}
const cx = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  fx = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  dx = { type: "keyframes", duration: 0.8 },
  hx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  px = (n, { keyframes: r }) =>
    r.length > 2 ? dx : Un.has(n) ? (n.startsWith("scale") ? fx(r[1]) : cx) : hx;
function mx({
  when: n,
  delay: r,
  delayChildren: s,
  staggerChildren: l,
  staggerDirection: u,
  repeat: d,
  repeatType: f,
  repeatDelay: p,
  from: m,
  elapsed: g,
  ...y
}) {
  return !!Object.keys(y).length;
}
const Su =
  (n, r, s, l = {}, u, d) =>
  (f) => {
    const p = iu(l, n) || {},
      m = p.delay || l.delay || 0;
    let { elapsed: g = 0 } = l;
    g = g - Xt(m);
    let y = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: r.getVelocity(),
      ...p,
      delay: -g,
      onUpdate: (S) => {
        (r.set(S), p.onUpdate && p.onUpdate(S));
      },
      onComplete: () => {
        (f(), p.onComplete && p.onComplete());
      },
      name: n,
      motionValue: r,
      element: d ? void 0 : u,
    };
    (mx(p) || (y = { ...y, ...px(n, y) }),
      y.duration && (y.duration = Xt(y.duration)),
      y.repeatDelay && (y.repeatDelay = Xt(y.repeatDelay)),
      y.from !== void 0 && (y.keyframes[0] = y.from));
    let x = !1;
    if (
      ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
        ((y.duration = 0), y.delay === 0 && (x = !0)),
      x && !d && r.get() !== void 0)
    ) {
      const S = lo(y.keyframes, p);
      if (S !== void 0)
        return (
          de.update(() => {
            (y.onUpdate(S), y.onComplete());
          }),
          new Fv([])
        );
    }
    return !d && qd.supports(y) ? new qd(y) : new wu(y);
  };
function gx({ protectedKeys: n, needsAnimating: r }, s) {
  const l = n.hasOwnProperty(s) && r[s] !== !0;
  return ((r[s] = !1), l);
}
function rm(n, r, { delay: s = 0, transitionOverride: l, type: u } = {}) {
  var d;
  let { transition: f = n.getDefaultTransition(), transitionEnd: p, ...m } = r;
  l && (f = l);
  const g = [],
    y = u && n.animationState && n.animationState.getState()[u];
  for (const x in m) {
    const S = n.getValue(x, (d = n.latestValues[x]) !== null && d !== void 0 ? d : null),
      A = m[x];
    if (A === void 0 || (y && gx(y, x))) continue;
    const V = { delay: s, ...iu(f || {}, x) };
    let D = !1;
    if (window.MotionHandoffAnimation) {
      const I = Cp(n);
      if (I) {
        const W = window.MotionHandoffAnimation(I, x, de);
        W !== null && ((V.startTime = W), (D = !0));
      }
    }
    (Ea(n, x), S.start(Su(x, S, A, n.shouldReduceMotion && Ep.has(x) ? { type: !1 } : V, n, D)));
    const j = S.animation;
    j && g.push(j);
  }
  return (
    p &&
      Promise.all(g).then(() => {
        de.update(() => {
          p && qv(n, p);
        });
      }),
    g
  );
}
function Ma(n, r, s = {}) {
  var l;
  const u = oo(
    n,
    r,
    s.type === "exit"
      ? (l = n.presenceContext) === null || l === void 0
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: d = n.getDefaultTransition() || {} } = u || {};
  s.transitionOverride && (d = s.transitionOverride);
  const f = u ? () => Promise.all(rm(n, u, s)) : () => Promise.resolve(),
    p =
      n.variantChildren && n.variantChildren.size
        ? (g = 0) => {
            const { delayChildren: y = 0, staggerChildren: x, staggerDirection: S } = d;
            return yx(n, r, y + g, x, S, s);
          }
        : () => Promise.resolve(),
    { when: m } = d;
  if (m) {
    const [g, y] = m === "beforeChildren" ? [f, p] : [p, f];
    return g().then(() => y());
  } else return Promise.all([f(), p(s.delay)]);
}
function yx(n, r, s = 0, l = 0, u = 1, d) {
  const f = [],
    p = (n.variantChildren.size - 1) * l,
    m = u === 1 ? (g = 0) => g * l : (g = 0) => p - g * l;
  return (
    Array.from(n.variantChildren)
      .sort(vx)
      .forEach((g, y) => {
        (g.notify("AnimationStart", r),
          f.push(Ma(g, r, { ...d, delay: s + m(y) }).then(() => g.notify("AnimationComplete", r))));
      }),
    Promise.all(f)
  );
}
function vx(n, r) {
  return n.sortNodePosition(r);
}
function xx(n, r, s = {}) {
  n.notify("AnimationStart", r);
  let l;
  if (Array.isArray(r)) {
    const u = r.map((d) => Ma(n, d, s));
    l = Promise.all(u);
  } else if (typeof r == "string") l = Ma(n, r, s);
  else {
    const u = typeof r == "function" ? oo(n, r, s.custom) : r;
    l = Promise.all(rm(n, u, s));
  }
  return l.then(() => {
    n.notify("AnimationComplete", r);
  });
}
const wx = Ga.length;
function im(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? im(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const r = {};
  for (let s = 0; s < wx; s++) {
    const l = Ga[s],
      u = n.props[l];
    (xi(u) || u === !1) && (r[l] = u);
  }
  return r;
}
const Sx = [...Ka].reverse(),
  kx = Ka.length;
function Px(n) {
  return (r) => Promise.all(r.map(({ animation: s, options: l }) => xx(n, s, l)));
}
function Tx(n) {
  let r = Px(n),
    s = Zd(),
    l = !0;
  const u = (m) => (g, y) => {
    var x;
    const S = oo(
      n,
      y,
      m === "exit"
        ? (x = n.presenceContext) === null || x === void 0
          ? void 0
          : x.custom
        : void 0,
    );
    if (S) {
      const { transition: A, transitionEnd: V, ...D } = S;
      g = { ...g, ...D, ...V };
    }
    return g;
  };
  function d(m) {
    r = m(n);
  }
  function f(m) {
    const { props: g } = n,
      y = im(n.parent) || {},
      x = [],
      S = new Set();
    let A = {},
      V = 1 / 0;
    for (let j = 0; j < kx; j++) {
      const I = Sx[j],
        W = s[I],
        K = g[I] !== void 0 ? g[I] : y[I],
        te = xi(K),
        Y = I === m ? W.isActive : null;
      Y === !1 && (V = j);
      let ne = K === y[I] && K !== g[I] && te;
      if (
        (ne && l && n.manuallyAnimateOnMount && (ne = !1),
        (W.protectedKeys = { ...A }),
        (!W.isActive && Y === null) || (!K && !W.prevProp) || io(K) || typeof K == "boolean")
      )
        continue;
      const ae = Ex(W.prevProp, K);
      let b = ae || (I === m && W.isActive && !ne && te) || (j > V && te),
        Se = !1;
      const Ee = Array.isArray(K) ? K : [K];
      let Ze = Ee.reduce(u(I), {});
      Y === !1 && (Ze = {});
      const { prevResolvedValues: st = {} } = W,
        Ge = { ...st, ...Ze },
        be = (ie) => {
          ((b = !0), S.has(ie) && ((Se = !0), S.delete(ie)), (W.needsAnimating[ie] = !0));
          const F = n.getValue(ie);
          F && (F.liveStyle = !1);
        };
      for (const ie in Ge) {
        const F = Ze[ie],
          X = st[ie];
        if (A.hasOwnProperty(ie)) continue;
        let B = !1;
        (ka(F) && ka(X) ? (B = !mp(F, X)) : (B = F !== X),
          B
            ? F != null
              ? be(ie)
              : S.add(ie)
            : F !== void 0 && S.has(ie)
              ? be(ie)
              : (W.protectedKeys[ie] = !0));
      }
      ((W.prevProp = K),
        (W.prevResolvedValues = Ze),
        W.isActive && (A = { ...A, ...Ze }),
        l && n.blockInitialAnimation && (b = !1),
        b &&
          (!(ne && ae) || Se) &&
          x.push(...Ee.map((ie) => ({ animation: ie, options: { type: I } }))));
    }
    if (S.size) {
      const j = {};
      (S.forEach((I) => {
        const W = n.getBaseTarget(I),
          K = n.getValue(I);
        (K && (K.liveStyle = !0), (j[I] = W ?? null));
      }),
        x.push({ animation: j }));
    }
    let D = !!x.length;
    return (
      l && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (D = !1),
      (l = !1),
      D ? r(x) : Promise.resolve()
    );
  }
  function p(m, g) {
    var y;
    if (s[m].isActive === g) return Promise.resolve();
    ((y = n.variantChildren) === null ||
      y === void 0 ||
      y.forEach((S) => {
        var A;
        return (A = S.animationState) === null || A === void 0 ? void 0 : A.setActive(m, g);
      }),
      (s[m].isActive = g));
    const x = f(m);
    for (const S in s) s[S].protectedKeys = {};
    return x;
  }
  return {
    animateChanges: f,
    setActive: p,
    setAnimateFunction: d,
    getState: () => s,
    reset: () => {
      ((s = Zd()), (l = !0));
    },
  };
}
function Ex(n, r) {
  return typeof r == "string" ? r !== n : Array.isArray(r) ? !mp(r, n) : !1;
}
function _n(n = !1) {
  return { isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Zd() {
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
class wn {
  constructor(r) {
    ((this.isMounted = !1), (this.node = r));
  }
  update() {}
}
class Cx extends wn {
  constructor(r) {
    (super(r), r.animationState || (r.animationState = Tx(r)));
  }
  updateAnimationControlsSubscription() {
    const { animate: r } = this.node.getProps();
    io(r) && (this.unmountControls = r.subscribe(this.node));
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
    (this.node.animationState.reset(),
      (r = this.unmountControls) === null || r === void 0 || r.call(this));
  }
}
let Ax = 0;
class Rx extends wn {
  constructor() {
    (super(...arguments), (this.id = Ax++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: r, onExitComplete: s } = this.node.presenceContext,
      { isPresent: l } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || r === l) return;
    const u = this.node.animationState.setActive("exit", !r);
    s && !r && u.then(() => s(this.id));
  }
  mount() {
    const { register: r } = this.node.presenceContext || {};
    r && (this.unmount = r(this.id));
  }
  unmount() {}
}
const Dx = { animation: { Feature: Cx }, exit: { Feature: Rx } };
function ki(n, r, s, l = { passive: !0 }) {
  return (n.addEventListener(r, s, l), () => n.removeEventListener(r, s));
}
function Ci(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const Lx = (n) => (r) => lu(r) && n(r, Ci(r));
function mi(n, r, s, l) {
  return ki(n, r, Lx(s), l);
}
const bd = (n, r) => Math.abs(n - r);
function Nx(n, r) {
  const s = bd(n.x, r.x),
    l = bd(n.y, r.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
class sm {
  constructor(r, s, { transformPagePoint: l, contextWindow: u, dragSnapToOrigin: d = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const x = pa(this.lastMoveEventInfo, this.history),
          S = this.startEvent !== null,
          A = Nx(x.offset, { x: 0, y: 0 }) >= 3;
        if (!S && !A) return;
        const { point: V } = x,
          { timestamp: D } = Fe;
        this.history.push({ ...V, timestamp: D });
        const { onStart: j, onMove: I } = this.handlers;
        (S || (j && j(this.lastMoveEvent, x), (this.startEvent = this.lastMoveEvent)),
          I && I(this.lastMoveEvent, x));
      }),
      (this.handlePointerMove = (x, S) => {
        ((this.lastMoveEvent = x),
          (this.lastMoveEventInfo = ha(S, this.transformPagePoint)),
          de.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (x, S) => {
        this.end();
        const { onEnd: A, onSessionEnd: V, resumeAnimation: D } = this.handlers;
        if ((this.dragSnapToOrigin && D && D(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const j = pa(
          x.type === "pointercancel" ? this.lastMoveEventInfo : ha(S, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && A && A(x, j), V && V(x, j));
      }),
      !lu(r))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = l),
      (this.contextWindow = u || window));
    const f = Ci(r),
      p = ha(f, this.transformPagePoint),
      { point: m } = p,
      { timestamp: g } = Fe;
    this.history = [{ ...m, timestamp: g }];
    const { onSessionStart: y } = s;
    (y && y(r, pa(p, this.history)),
      (this.removeListeners = Ei(
        mi(this.contextWindow, "pointermove", this.handlePointerMove),
        mi(this.contextWindow, "pointerup", this.handlePointerUp),
        mi(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(r) {
    this.handlers = r;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Dt(this.updatePoint));
  }
}
function ha(n, r) {
  return r ? { point: r(n.point) } : n;
}
function Jd(n, r) {
  return { x: n.x - r.x, y: n.y - r.y };
}
function pa({ point: n }, r) {
  return { point: n, delta: Jd(n, om(r)), offset: Jd(n, Mx(r)), velocity: Vx(r, 0.1) };
}
function Mx(n) {
  return n[0];
}
function om(n) {
  return n[n.length - 1];
}
function Vx(n, r) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    l = null;
  const u = om(n);
  for (; s >= 0 && ((l = n[s]), !(u.timestamp - l.timestamp > Xt(r)));) s--;
  if (!l) return { x: 0, y: 0 };
  const d = qt(u.timestamp - l.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (u.x - l.x) / d, y: (u.y - l.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
const lm = 1e-4,
  _x = 1 - lm,
  jx = 1 + lm,
  am = 0.01,
  Ox = 0 - am,
  Fx = 0 + am;
function ft(n) {
  return n.max - n.min;
}
function Ix(n, r, s) {
  return Math.abs(n - r) <= s;
}
function eh(n, r, s, l = 0.5) {
  ((n.origin = l),
    (n.originPoint = Te(r.min, r.max, n.origin)),
    (n.scale = ft(s) / ft(r)),
    (n.translate = Te(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= _x && n.scale <= jx) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= Ox && n.translate <= Fx) || isNaN(n.translate)) && (n.translate = 0));
}
function gi(n, r, s, l) {
  (eh(n.x, r.x, s.x, l ? l.originX : void 0), eh(n.y, r.y, s.y, l ? l.originY : void 0));
}
function th(n, r, s) {
  ((n.min = s.min + r.min), (n.max = n.min + ft(r)));
}
function zx(n, r, s) {
  (th(n.x, r.x, s.x), th(n.y, r.y, s.y));
}
function nh(n, r, s) {
  ((n.min = r.min - s.min), (n.max = n.min + ft(r)));
}
function yi(n, r, s) {
  (nh(n.x, r.x, s.x), nh(n.y, r.y, s.y));
}
function Bx(n, { min: r, max: s }, l) {
  return (
    r !== void 0 && n < r
      ? (n = l ? Te(r, n, l.min) : Math.max(n, r))
      : s !== void 0 && n > s && (n = l ? Te(s, n, l.max) : Math.min(n, s)),
    n
  );
}
function rh(n, r, s) {
  return {
    min: r !== void 0 ? n.min + r : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  };
}
function Ux(n, { top: r, left: s, bottom: l, right: u }) {
  return { x: rh(n.x, s, u), y: rh(n.y, r, l) };
}
function ih(n, r) {
  let s = r.min - n.min,
    l = r.max - n.max;
  return (r.max - r.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l });
}
function Wx(n, r) {
  return { x: ih(n.x, r.x), y: ih(n.y, r.y) };
}
function $x(n, r) {
  let s = 0.5;
  const l = ft(n),
    u = ft(r);
  return (
    u > l ? (s = zn(r.min, r.max - l, n.min)) : l > u && (s = zn(n.min, n.max - u, r.min)),
    zt(0, 1, s)
  );
}
function Hx(n, r) {
  const s = {};
  return (
    r.min !== void 0 && (s.min = r.min - n.min),
    r.max !== void 0 && (s.max = r.max - n.min),
    s
  );
}
const Va = 0.35;
function Kx(n = Va) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Va),
    { x: sh(n, "left", "right"), y: sh(n, "top", "bottom") }
  );
}
function sh(n, r, s) {
  return { min: oh(n, r), max: oh(n, s) };
}
function oh(n, r) {
  return typeof n == "number" ? n : n[r] || 0;
}
const lh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  mr = () => ({ x: lh(), y: lh() }),
  ah = () => ({ min: 0, max: 0 }),
  Le = () => ({ x: ah(), y: ah() });
function xt(n) {
  return [n("x"), n("y")];
}
function um({ top: n, left: r, right: s, bottom: l }) {
  return { x: { min: r, max: s }, y: { min: n, max: l } };
}
function Gx({ x: n, y: r }) {
  return { top: r.min, right: n.max, bottom: r.max, left: n.min };
}
function Qx(n, r) {
  if (!r) return n;
  const s = r({ x: n.left, y: n.top }),
    l = r({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: l.y, right: l.x };
}
function ma(n) {
  return n === void 0 || n === 1;
}
function _a({ scale: n, scaleX: r, scaleY: s }) {
  return !ma(n) || !ma(r) || !ma(s);
}
function jn(n) {
  return _a(n) || cm(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function cm(n) {
  return uh(n.x) || uh(n.y);
}
function uh(n) {
  return n && n !== "0%";
}
function eo(n, r, s) {
  const l = n - s,
    u = r * l;
  return s + u;
}
function ch(n, r, s, l, u) {
  return (u !== void 0 && (n = eo(n, u, l)), eo(n, s, l) + r);
}
function ja(n, r = 0, s = 1, l, u) {
  ((n.min = ch(n.min, r, s, l, u)), (n.max = ch(n.max, r, s, l, u)));
}
function fm(n, { x: r, y: s }) {
  (ja(n.x, r.translate, r.scale, r.originPoint), ja(n.y, s.translate, s.scale, s.originPoint));
}
const fh = 0.999999999999,
  dh = 1.0000000000001;
function Yx(n, r, s, l = !1) {
  const u = s.length;
  if (!u) return;
  r.x = r.y = 1;
  let d, f;
  for (let p = 0; p < u; p++) {
    ((d = s[p]), (f = d.projectionDelta));
    const { visualElement: m } = d.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (l &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        yr(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((r.x *= f.x.scale), (r.y *= f.y.scale), fm(n, f)),
      l && jn(d.latestValues) && yr(n, d.latestValues));
  }
  (r.x < dh && r.x > fh && (r.x = 1), r.y < dh && r.y > fh && (r.y = 1));
}
function gr(n, r) {
  ((n.min = n.min + r), (n.max = n.max + r));
}
function hh(n, r, s, l, u = 0.5) {
  const d = Te(n.min, n.max, u);
  ja(n, r, s, d, l);
}
function yr(n, r) {
  (hh(n.x, r.x, r.scaleX, r.scale, r.originX), hh(n.y, r.y, r.scaleY, r.scale, r.originY));
}
function dm(n, r) {
  return um(Qx(n.getBoundingClientRect(), r));
}
function Xx(n, r, s) {
  const l = dm(n, s),
    { scroll: u } = r;
  return (u && (gr(l.x, u.offset.x), gr(l.y, u.offset.y)), l);
}
const hm = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  qx = new WeakMap();
class Zx {
  constructor(r) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Le()),
      (this.visualElement = r));
  }
  start(r, { snapToCursor: s = !1 } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const u = (y) => {
        const { dragSnapToOrigin: x } = this.getProps();
        (x ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(Ci(y).point));
      },
      d = (y, x) => {
        const { drag: S, dragPropagation: A, onDragStart: V } = this.getProps();
        if (
          S &&
          !A &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Kv(S)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          xt((j) => {
            let I = this.getAxisMotionValue(j).get() || 0;
            if (Ft.test(I)) {
              const { projection: W } = this.visualElement;
              if (W && W.layout) {
                const K = W.layout.layoutBox[j];
                K && (I = ft(K) * (parseFloat(I) / 100));
              }
            }
            this.originPoint[j] = I;
          }),
          V && de.postRender(() => V(y, x)),
          Ea(this.visualElement, "transform"));
        const { animationState: D } = this.visualElement;
        D && D.setActive("whileDrag", !0);
      },
      f = (y, x) => {
        const {
          dragPropagation: S,
          dragDirectionLock: A,
          onDirectionLock: V,
          onDrag: D,
        } = this.getProps();
        if (!S && !this.openDragLock) return;
        const { offset: j } = x;
        if (A && this.currentDirection === null) {
          ((this.currentDirection = bx(j)),
            this.currentDirection !== null && V && V(this.currentDirection));
          return;
        }
        (this.updateAxis("x", x.point, j),
          this.updateAxis("y", x.point, j),
          this.visualElement.render(),
          D && D(y, x));
      },
      p = (y, x) => this.stop(y, x),
      m = () =>
        xt((y) => {
          var x;
          return (
            this.getAnimationState(y) === "paused" &&
            ((x = this.getAxisMotionValue(y).animation) === null || x === void 0
              ? void 0
              : x.play())
          );
        }),
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new sm(
      r,
      { onSessionStart: u, onStart: d, onMove: f, onSessionEnd: p, resumeAnimation: m },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        contextWindow: hm(this.visualElement),
      },
    );
  }
  stop(r, s) {
    const l = this.isDragging;
    if ((this.cancel(), !l)) return;
    const { velocity: u } = s;
    this.startAnimation(u);
    const { onDragEnd: d } = this.getProps();
    d && de.postRender(() => d(r, s));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: r, animationState: s } = this.visualElement;
    (r && (r.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: l } = this.getProps();
    (!l && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1));
  }
  updateAxis(r, s, l) {
    const { drag: u } = this.getProps();
    if (!l || !Bs(r, u, this.currentDirection)) return;
    const d = this.getAxisMotionValue(r);
    let f = this.originPoint[r] + l[r];
    (this.constraints && this.constraints[r] && (f = Bx(f, this.constraints[r], this.elastic[r])),
      d.set(f));
  }
  resolveConstraints() {
    var r;
    const { dragConstraints: s, dragElastic: l } = this.getProps(),
      u =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (r = this.visualElement.projection) === null || r === void 0
            ? void 0
            : r.layout,
      d = this.constraints;
    (s && hr(s)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : s && u
        ? (this.constraints = Ux(u.layoutBox, s))
        : (this.constraints = !1),
      (this.elastic = Kx(l)),
      d !== this.constraints &&
        u &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        xt((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = Hx(u.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: r, onMeasureDragConstraints: s } = this.getProps();
    if (!r || !hr(r)) return !1;
    const l = r.current,
      { projection: u } = this.visualElement;
    if (!u || !u.layout) return !1;
    const d = Xx(l, u.root, this.visualElement.getTransformPagePoint());
    let f = Wx(u.layout.layoutBox, d);
    if (s) {
      const p = s(Gx(f));
      ((this.hasMutatedConstraints = !!p), p && (f = um(p)));
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
        onDragTransitionEnd: p,
      } = this.getProps(),
      m = this.constraints || {},
      g = xt((y) => {
        if (!Bs(y, s, this.currentDirection)) return;
        let x = (m && m[y]) || {};
        f && (x = { min: 0, max: 0 });
        const S = u ? 200 : 1e6,
          A = u ? 40 : 1e7,
          V = {
            type: "inertia",
            velocity: l ? r[y] : 0,
            bounceStiffness: S,
            bounceDamping: A,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...x,
          };
        return this.startAxisValueAnimation(y, V);
      });
    return Promise.all(g).then(p);
  }
  startAxisValueAnimation(r, s) {
    const l = this.getAxisMotionValue(r);
    return (Ea(this.visualElement, r), l.start(Su(r, l, 0, s, this.visualElement, !1)));
  }
  stopAnimation() {
    xt((r) => this.getAxisMotionValue(r).stop());
  }
  pauseAnimation() {
    xt((r) => {
      var s;
      return (s = this.getAxisMotionValue(r).animation) === null || s === void 0
        ? void 0
        : s.pause();
    });
  }
  getAnimationState(r) {
    var s;
    return (s = this.getAxisMotionValue(r).animation) === null || s === void 0 ? void 0 : s.state;
  }
  getAxisMotionValue(r) {
    const s = `_drag${r.toUpperCase()}`,
      l = this.visualElement.getProps(),
      u = l[s];
    return u || this.visualElement.getValue(r, (l.initial ? l.initial[r] : void 0) || 0);
  }
  snapToCursor(r) {
    xt((s) => {
      const { drag: l } = this.getProps();
      if (!Bs(s, l, this.currentDirection)) return;
      const { projection: u } = this.visualElement,
        d = this.getAxisMotionValue(s);
      if (u && u.layout) {
        const { min: f, max: p } = u.layout.layoutBox[s];
        d.set(r[s] - Te(f, p, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: r, dragConstraints: s } = this.getProps(),
      { projection: l } = this.visualElement;
    if (!hr(s) || !l || !this.constraints) return;
    this.stopAnimation();
    const u = { x: 0, y: 0 };
    xt((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        u[f] = $x({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      this.resolveConstraints(),
      xt((f) => {
        if (!Bs(f, r, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: g } = this.constraints[f];
        p.set(Te(m, g, u[f]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    qx.set(this.visualElement, this);
    const r = this.visualElement.current,
      s = mi(r, "pointerdown", (m) => {
        const { drag: g, dragListener: y = !0 } = this.getProps();
        g && y && this.start(m);
      }),
      l = () => {
        const { dragConstraints: m } = this.getProps();
        hr(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: u } = this.visualElement,
      d = u.addEventListener("measure", l);
    (u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()), de.read(l));
    const f = ki(window, "resize", () => this.scalePositionWithinConstraints()),
      p = u.addEventListener("didUpdate", ({ delta: m, hasLayoutChanged: g }) => {
        this.isDragging &&
          g &&
          (xt((y) => {
            const x = this.getAxisMotionValue(y);
            x && ((this.originPoint[y] += m[y].translate), x.set(x.get() + m[y].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (f(), s(), d(), p && p());
    };
  }
  getProps() {
    const r = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: l = !1,
        dragPropagation: u = !1,
        dragConstraints: d = !1,
        dragElastic: f = Va,
        dragMomentum: p = !0,
      } = r;
    return {
      ...r,
      drag: s,
      dragDirectionLock: l,
      dragPropagation: u,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: p,
    };
  }
}
function Bs(n, r, s) {
  return (r === !0 || r === n) && (s === null || s === n);
}
function bx(n, r = 10) {
  let s = null;
  return (Math.abs(n.y) > r ? (s = "y") : Math.abs(n.x) > r && (s = "x"), s);
}
class Jx extends wn {
  constructor(r) {
    (super(r),
      (this.removeGroupControls = qe),
      (this.removeListeners = qe),
      (this.controls = new Zx(r)));
  }
  mount() {
    const { dragControls: r } = this.node.getProps();
    (r && (this.removeGroupControls = r.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || qe));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const ph = (n) => (r, s) => {
  n && de.postRender(() => n(r, s));
};
class e1 extends wn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = qe));
  }
  onPointerDown(r) {
    this.session = new sm(r, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: hm(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: r, onPanStart: s, onPan: l, onPanEnd: u } = this.node.getProps();
    return {
      onSessionStart: ph(r),
      onStart: ph(s),
      onMove: l,
      onEnd: (d, f) => {
        (delete this.session, u && de.postRender(() => u(d, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = mi(this.node.current, "pointerdown", (r) =>
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
const Hs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function mh(n, r) {
  return r.max === r.min ? 0 : (n / (r.max - r.min)) * 100;
}
const ai = {
    correct: (n, r) => {
      if (!r.target) return n;
      if (typeof n == "string")
        if (J.test(n)) n = parseFloat(n);
        else return n;
      const s = mh(n, r.target.x),
        l = mh(n, r.target.y);
      return `${s}% ${l}%`;
    },
  },
  t1 = {
    correct: (n, { treeScale: r, projectionDelta: s }) => {
      const l = n,
        u = xn.parse(n);
      if (u.length > 5) return l;
      const d = xn.createTransformer(n),
        f = typeof u[0] != "number" ? 1 : 0,
        p = s.x.scale * r.x,
        m = s.y.scale * r.y;
      ((u[0 + f] /= p), (u[1 + f] /= m));
      const g = Te(p, m, 0.5);
      return (
        typeof u[2 + f] == "number" && (u[2 + f] /= g),
        typeof u[3 + f] == "number" && (u[3 + f] /= g),
        d(u)
      );
    },
  };
class n1 extends Q.Component {
  componentDidMount() {
    const { visualElement: r, layoutGroup: s, switchLayoutGroup: l, layoutId: u } = this.props,
      { projection: d } = r;
    (Cv(r1),
      d &&
        (s.group && s.group.add(d),
        l && l.register && u && l.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({ ...d.options, onExitComplete: () => this.safeToRemove() })),
      (Hs.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(r) {
    const { layoutDependency: s, visualElement: l, drag: u, isPresent: d } = this.props,
      f = l.projection;
    return (
      f &&
        ((f.isPresent = d),
        u || r.layoutDependency !== s || s === void 0 ? f.willUpdate() : this.safeToRemove(),
        r.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              de.postRender(() => {
                const p = f.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: r } = this.props.visualElement;
    r &&
      (r.root.didUpdate(),
      Ya.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: r, layoutGroup: s, switchLayoutGroup: l } = this.props,
      { projection: u } = r;
    u &&
      (u.scheduleCheckAfterUnmount(),
      s && s.group && s.group.remove(u),
      l && l.deregister && l.deregister(u));
  }
  safeToRemove() {
    const { safeToRemove: r } = this.props;
    r && r();
  }
  render() {
    return null;
  }
}
function pm(n) {
  const [r, s] = Uy(),
    l = Q.useContext(Xh);
  return R.jsx(n1, {
    ...n,
    layoutGroup: l,
    switchLayoutGroup: Q.useContext(np),
    isPresent: r,
    safeToRemove: s,
  });
}
const r1 = {
  borderRadius: {
    ...ai,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: ai,
  borderTopRightRadius: ai,
  borderBottomLeftRadius: ai,
  borderBottomRightRadius: ai,
  boxShadow: t1,
};
function i1(n, r, s) {
  const l = Ke(n) ? n : Ot(n);
  return (l.start(Su("", l, r, s)), l.animation);
}
function s1(n) {
  return n instanceof SVGElement && n.tagName !== "svg";
}
const o1 = (n, r) => n.depth - r.depth;
class l1 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(r) {
    (au(this.children, r), (this.isDirty = !0));
  }
  remove(r) {
    (uu(this.children, r), (this.isDirty = !0));
  }
  forEach(r) {
    (this.isDirty && this.children.sort(o1), (this.isDirty = !1), this.children.forEach(r));
  }
}
function a1(n, r) {
  const s = It.now(),
    l = ({ timestamp: u }) => {
      const d = u - s;
      d >= r && (Dt(l), n(d - r));
    };
  return (de.read(l, !0), () => Dt(l));
}
const mm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  u1 = mm.length,
  gh = (n) => (typeof n == "string" ? parseFloat(n) : n),
  yh = (n) => typeof n == "number" || J.test(n);
function c1(n, r, s, l, u, d) {
  u
    ? ((n.opacity = Te(0, s.opacity !== void 0 ? s.opacity : 1, f1(l))),
      (n.opacityExit = Te(r.opacity !== void 0 ? r.opacity : 1, 0, d1(l))))
    : d &&
      (n.opacity = Te(
        r.opacity !== void 0 ? r.opacity : 1,
        s.opacity !== void 0 ? s.opacity : 1,
        l,
      ));
  for (let f = 0; f < u1; f++) {
    const p = `border${mm[f]}Radius`;
    let m = vh(r, p),
      g = vh(s, p);
    if (m === void 0 && g === void 0) continue;
    (m || (m = 0),
      g || (g = 0),
      m === 0 || g === 0 || yh(m) === yh(g)
        ? ((n[p] = Math.max(Te(gh(m), gh(g), l), 0)), (Ft.test(g) || Ft.test(m)) && (n[p] += "%"))
        : (n[p] = g));
  }
  (r.rotate || s.rotate) && (n.rotate = Te(r.rotate || 0, s.rotate || 0, l));
}
function vh(n, r) {
  return n[r] !== void 0 ? n[r] : n.borderRadius;
}
const f1 = gm(0, 0.5, Vp),
  d1 = gm(0.5, 0.95, qe);
function gm(n, r, s) {
  return (l) => (l < n ? 0 : l > r ? 1 : s(zn(n, r, l)));
}
function xh(n, r) {
  ((n.min = r.min), (n.max = r.max));
}
function vt(n, r) {
  (xh(n.x, r.x), xh(n.y, r.y));
}
function wh(n, r) {
  ((n.translate = r.translate),
    (n.scale = r.scale),
    (n.originPoint = r.originPoint),
    (n.origin = r.origin));
}
function Sh(n, r, s, l, u) {
  return ((n -= r), (n = eo(n, 1 / s, l)), u !== void 0 && (n = eo(n, 1 / u, l)), n);
}
function h1(n, r = 0, s = 1, l = 0.5, u, d = n, f = n) {
  if (
    (Ft.test(r) && ((r = parseFloat(r)), (r = Te(f.min, f.max, r / 100) - f.min)),
    typeof r != "number")
  )
    return;
  let p = Te(d.min, d.max, l);
  (n === d && (p -= r), (n.min = Sh(n.min, r, s, p, u)), (n.max = Sh(n.max, r, s, p, u)));
}
function kh(n, r, [s, l, u], d, f) {
  h1(n, r[s], r[l], r[u], r.scale, d, f);
}
const p1 = ["x", "scaleX", "originX"],
  m1 = ["y", "scaleY", "originY"];
function Ph(n, r, s, l) {
  (kh(n.x, r, p1, s ? s.x : void 0, l ? l.x : void 0),
    kh(n.y, r, m1, s ? s.y : void 0, l ? l.y : void 0));
}
function Th(n) {
  return n.translate === 0 && n.scale === 1;
}
function ym(n) {
  return Th(n.x) && Th(n.y);
}
function Eh(n, r) {
  return n.min === r.min && n.max === r.max;
}
function g1(n, r) {
  return Eh(n.x, r.x) && Eh(n.y, r.y);
}
function Ch(n, r) {
  return Math.round(n.min) === Math.round(r.min) && Math.round(n.max) === Math.round(r.max);
}
function vm(n, r) {
  return Ch(n.x, r.x) && Ch(n.y, r.y);
}
function Ah(n) {
  return ft(n.x) / ft(n.y);
}
function Rh(n, r) {
  return n.translate === r.translate && n.scale === r.scale && n.originPoint === r.originPoint;
}
class y1 {
  constructor() {
    this.members = [];
  }
  add(r) {
    (au(this.members, r), r.scheduleRender());
  }
  remove(r) {
    if ((uu(this.members, r), r === this.prevLead && (this.prevLead = void 0), r === this.lead)) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(r) {
    const s = this.members.findIndex((u) => r === u);
    if (s === 0) return !1;
    let l;
    for (let u = s; u >= 0; u--) {
      const d = this.members[u];
      if (d.isPresent !== !1) {
        l = d;
        break;
      }
    }
    return l ? (this.promote(l), !0) : !1;
  }
  promote(r, s) {
    const l = this.lead;
    if (r !== l && ((this.prevLead = l), (this.lead = r), r.show(), l)) {
      (l.instance && l.scheduleRender(),
        r.scheduleRender(),
        (r.resumeFrom = l),
        s && (r.resumeFrom.preserveOpacity = !0),
        l.snapshot &&
          ((r.snapshot = l.snapshot),
          (r.snapshot.latestValues = l.animationValues || l.latestValues)),
        r.root && r.root.isUpdating && (r.isLayoutDirty = !0));
      const { crossfade: u } = r.options;
      u === !1 && l.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((r) => {
      const { options: s, resumingFrom: l } = r;
      (s.onExitComplete && s.onExitComplete(),
        l && l.options.onExitComplete && l.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((r) => {
      r.instance && r.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function v1(n, r, s) {
  let l = "";
  const u = n.x.translate / r.x,
    d = n.y.translate / r.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((u || d || f) && (l = `translate3d(${u}px, ${d}px, ${f}px) `),
    (r.x !== 1 || r.y !== 1) && (l += `scale(${1 / r.x}, ${1 / r.y}) `),
    s)
  ) {
    const { transformPerspective: g, rotate: y, rotateX: x, rotateY: S, skewX: A, skewY: V } = s;
    (g && (l = `perspective(${g}px) ${l}`),
      y && (l += `rotate(${y}deg) `),
      x && (l += `rotateX(${x}deg) `),
      S && (l += `rotateY(${S}deg) `),
      A && (l += `skewX(${A}deg) `),
      V && (l += `skewY(${V}deg) `));
  }
  const p = n.x.scale * r.x,
    m = n.y.scale * r.y;
  return ((p !== 1 || m !== 1) && (l += `scale(${p}, ${m})`), l || "none");
}
const On = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  di = typeof window < "u" && window.MotionDebug !== void 0,
  ga = ["", "X", "Y", "Z"],
  x1 = { visibility: "hidden" },
  Dh = 1e3;
let w1 = 0;
function ya(n, r, s, l) {
  const { latestValues: u } = r;
  u[n] && ((s[n] = u[n]), r.setStaticValue(n, 0), l && (l[n] = 0));
}
function xm(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: r } = n.options;
  if (!r) return;
  const s = Cp(r);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: u, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", de, !(u || d));
  }
  const { parent: l } = n;
  l && !l.hasCheckedOptimisedAppear && xm(l);
}
function wm({
  attachResizeListener: n,
  defaultParent: r,
  measureScroll: s,
  checkIsScrollRoot: l,
  resetTransform: u,
}) {
  return class {
    constructor(f = {}, p = r == null ? void 0 : r()) {
      ((this.id = w1++),
        (this.animationId = 0),
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
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            di && (On.totalNodes = On.resolvedTargetDeltas = On.recalculatedProjection = 0),
            this.nodes.forEach(P1),
            this.nodes.forEach(R1),
            this.nodes.forEach(D1),
            this.nodes.forEach(T1),
            di && window.MotionDebug.record(On));
        }),
        (this.resolvedRelativeTargetAt = 0),
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
      this.root === this && (this.nodes = new l1());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new cu()),
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
    mount(f, p = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = s1(f)), (this.instance = f));
      const { layoutId: m, layout: g, visualElement: y } = this.options;
      if (
        (y && !y.current && y.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        p && (g || m) && (this.isLayoutDirty = !0),
        n)
      ) {
        let x;
        const S = () => (this.root.updateBlockedByResize = !1);
        n(f, () => {
          ((this.root.updateBlockedByResize = !0),
            x && x(),
            (x = a1(S, 250)),
            Hs.hasAnimatedSinceResize &&
              ((Hs.hasAnimatedSinceResize = !1), this.nodes.forEach(Nh)));
        });
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          y &&
          (m || g) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: x, hasLayoutChanged: S, hasRelativeTargetChanged: A, layout: V }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const D = this.options.transition || y.getDefaultTransition() || _1,
                { onLayoutAnimationStart: j, onLayoutAnimationComplete: I } = y.getProps(),
                W = !this.targetLayout || !vm(this.targetLayout, V) || A,
                K = !S && A;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                K ||
                (S && (W || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(x, K));
                const te = { ...iu(D, "layout"), onPlay: j, onComplete: I };
                ((y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((te.delay = 0), (te.type = !1)),
                  this.startAnimation(te));
              } else
                (S || Nh(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = V;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Dt(this.updateProjection));
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(L1), this.animationId++);
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
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && xm(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let y = 0; y < this.path.length; y++) {
        const x = this.path[y];
        ((x.shouldResetTransform = !0),
          x.updateScroll("snapshot"),
          x.options.layoutRoot && x.willUpdate(!1));
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
        (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Lh));
        return;
      }
      (this.isUpdating || this.nodes.forEach(C1),
        (this.isUpdating = !1),
        this.nodes.forEach(A1),
        this.nodes.forEach(S1),
        this.nodes.forEach(k1),
        this.clearAllSnapshots());
      const p = It.now();
      ((Fe.delta = zt(0, 1e3 / 60, p - Fe.timestamp)),
        (Fe.timestamp = p),
        (Fe.isProcessing = !0),
        la.update.process(Fe),
        la.preRender.process(Fe),
        la.render.process(Fe),
        (Fe.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Ya.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(E1), this.sharedNodes.forEach(N1));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), de.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      de.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
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
        (this.layoutCorrected = Le()),
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
        p)
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
        p = this.projectionDelta && !ym(this.projectionDelta),
        m = this.getTransformTemplate(),
        g = m ? m(this.latestValues, "") : void 0,
        y = g !== this.prevTransformTemplateValue;
      f &&
        (p || jn(this.latestValues) || y) &&
        (u(this.instance, g), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        f && (m = this.removeTransform(m)),
        j1(m),
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
      var f;
      const { visualElement: p } = this.options;
      if (!p) return Le();
      const m = p.measureViewportBox();
      if (!(
        ((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) || this.path.some(O1)
      )) {
        const { scroll: y } = this.root;
        y && (gr(m.x, y.offset.x), gr(m.y, y.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var p;
      const m = Le();
      if ((vt(m, f), !((p = this.scroll) === null || p === void 0) && p.wasRoot)) return m;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g],
          { scroll: x, options: S } = y;
        y !== this.root &&
          x &&
          S.layoutScroll &&
          (x.wasRoot && vt(m, f), gr(m.x, x.offset.x), gr(m.y, x.offset.y));
      }
      return m;
    }
    applyTransform(f, p = !1) {
      const m = Le();
      vt(m, f);
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        (!p &&
          y.options.layoutScroll &&
          y.scroll &&
          y !== y.root &&
          yr(m, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
          jn(y.latestValues) && yr(m, y.latestValues));
      }
      return (jn(this.latestValues) && yr(m, this.latestValues), m);
    }
    removeTransform(f) {
      const p = Le();
      vt(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        if (!g.instance || !jn(g.latestValues)) continue;
        _a(g.latestValues) && g.updateSnapshot();
        const y = Le(),
          x = g.measurePageBox();
        (vt(y, x), Ph(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, y));
      }
      return (jn(this.latestValues) && Ph(p, this.latestValues), p);
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
        this.relativeParent.resolvedRelativeTargetAt !== Fe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var p;
      const m = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty));
      const g = !!this.resumingFrom || this !== m;
      if (!(
        f ||
        (g && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        (!((p = this.parent) === null || p === void 0) && p.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: x, layoutId: S } = this.options;
      if (!(!this.layout || !(x || S))) {
        if (
          ((this.resolvedRelativeTargetAt = Fe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const A = this.getClosestProjectingParent();
          A && A.layout && this.animationProgress !== 1
            ? ((this.relativeParent = A),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Le()),
              (this.relativeTargetOrigin = Le()),
              yi(this.relativeTargetOrigin, this.layout.layoutBox, A.layout.layoutBox),
              vt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = Le()), (this.targetWithTransforms = Le())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                zx(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : vt(this.target, this.layout.layoutBox),
                  fm(this.target, this.targetDelta))
                : vt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const A = this.getClosestProjectingParent();
            A &&
            !!A.resumingFrom == !!this.resumingFrom &&
            !A.options.layoutScroll &&
            A.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = A),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Le()),
                (this.relativeTargetOrigin = Le()),
                yi(this.relativeTargetOrigin, this.target, A.target),
                vt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          di && On.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || _a(this.parent.latestValues) || cm(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var f;
      const p = this.getLead(),
        m = !!this.resumingFrom || this !== p;
      let g = !0;
      if (
        ((this.isProjectionDirty ||
          (!((f = this.parent) === null || f === void 0) && f.isProjectionDirty)) &&
          (g = !1),
        m && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1),
        this.resolvedRelativeTargetAt === Fe.timestamp && (g = !1),
        g)
      )
        return;
      const { layout: y, layoutId: x } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(y || x))
      )
        return;
      vt(this.layoutCorrected, this.layout.layoutBox);
      const S = this.treeScale.x,
        A = this.treeScale.y;
      (Yx(this.layoutCorrected, this.treeScale, this.path, m),
        p.layout &&
          !p.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((p.target = p.layout.layoutBox), (p.targetWithTransforms = Le())));
      const { target: V } = p;
      if (!V) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (wh(this.prevProjectionDelta.x, this.projectionDelta.x),
          wh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        gi(this.projectionDelta, this.layoutCorrected, V, this.latestValues),
        (this.treeScale.x !== S ||
          this.treeScale.y !== A ||
          !Rh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Rh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", V)),
        di && On.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var p;
      if (((p = this.options.visualElement) === null || p === void 0 || p.scheduleRender(), f)) {
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
    setAnimationOrigin(f, p = !1) {
      const m = this.snapshot,
        g = m ? m.latestValues : {},
        y = { ...this.latestValues },
        x = mr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const S = Le(),
        A = m ? m.source : void 0,
        V = this.layout ? this.layout.source : void 0,
        D = A !== V,
        j = this.getStack(),
        I = !j || j.members.length <= 1,
        W = !!(D && !I && this.options.crossfade === !0 && !this.path.some(V1));
      this.animationProgress = 0;
      let K;
      ((this.mixTargetDelta = (te) => {
        const Y = te / 1e3;
        (Mh(x.x, f.x, Y),
          Mh(x.y, f.y, Y),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (yi(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            M1(this.relativeTarget, this.relativeTargetOrigin, S, Y),
            K && g1(this.relativeTarget, K) && (this.isProjectionDirty = !1),
            K || (K = Le()),
            vt(K, this.relativeTarget)),
          D && ((this.animationValues = y), c1(y, g, this.latestValues, Y, W, I)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = Y));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (Dt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = de.update(() => {
          ((Hs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = i1(0, Dh, {
              ...f,
              onUpdate: (p) => {
                (this.mixTargetDelta(p), f.onUpdate && f.onUpdate(p));
              },
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
        (this.mixTargetDelta && this.mixTargetDelta(Dh), this.currentAnimation.stop()),
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
          Sm(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          m = this.target || Le();
          const x = ft(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + x));
          const S = ft(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + S));
        }
        (vt(p, m), yr(p, y), gi(this.projectionDeltaWithTransform, this.layoutCorrected, p, y));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new y1()),
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
      var f;
      const { layoutId: p } = this.options;
      return p ? ((f = this.getStack()) === null || f === void 0 ? void 0 : f.lead) || this : this;
    }
    getPrevLead() {
      var f;
      const { layoutId: p } = this.options;
      return p ? ((f = this.getStack()) === null || f === void 0 ? void 0 : f.prevLead) : void 0;
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
      m.z && ya("z", f, g, this.animationValues);
      for (let y = 0; y < ga.length; y++)
        (ya(`rotate${ga[y]}`, f, g, this.animationValues),
          ya(`skew${ga[y]}`, f, g, this.animationValues));
      f.render();
      for (const y in g)
        (f.setStaticValue(y, g[y]), this.animationValues && (this.animationValues[y] = g[y]));
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      var p, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return x1;
      const g = { visibility: "" },
        y = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (g.opacity = ""),
          (g.pointerEvents = Ws(f == null ? void 0 : f.pointerEvents) || ""),
          (g.transform = y ? y(this.latestValues, "") : "none"),
          g
        );
      const x = this.getLead();
      if (!this.projectionDelta || !this.layout || !x.target) {
        const D = {};
        return (
          this.options.layoutId &&
            ((D.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (D.pointerEvents = Ws(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !jn(this.latestValues) &&
            ((D.transform = y ? y({}, "") : "none"), (this.hasProjected = !1)),
          D
        );
      }
      const S = x.animationValues || x.latestValues;
      (this.applyTransformsToTarget(),
        (g.transform = v1(this.projectionDeltaWithTransform, this.treeScale, S)),
        y && (g.transform = y(S, g.transform)));
      const { x: A, y: V } = this.projectionDelta;
      ((g.transformOrigin = `${A.origin * 100}% ${V.origin * 100}% 0`),
        x.animationValues
          ? (g.opacity =
              x === this
                ? (m = (p = S.opacity) !== null && p !== void 0 ? p : this.latestValues.opacity) !==
                    null && m !== void 0
                  ? m
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : S.opacityExit)
          : (g.opacity =
              x === this
                ? S.opacity !== void 0
                  ? S.opacity
                  : ""
                : S.opacityExit !== void 0
                  ? S.opacityExit
                  : 0));
      for (const D in Xs) {
        if (S[D] === void 0) continue;
        const { correct: j, applyTo: I } = Xs[D],
          W = g.transform === "none" ? S[D] : j(S[D], x);
        if (I) {
          const K = I.length;
          for (let te = 0; te < K; te++) g[I[te]] = W;
        } else g[D] = W;
      }
      return (
        this.options.layoutId &&
          (g.pointerEvents = x === this ? Ws(f == null ? void 0 : f.pointerEvents) || "" : "none"),
        g
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => {
        var p;
        return (p = f.currentAnimation) === null || p === void 0 ? void 0 : p.stop();
      }),
        this.root.nodes.forEach(Lh),
        this.root.sharedNodes.clear());
    }
  };
}
function S1(n) {
  n.updateLayout();
}
function k1(n) {
  var r;
  const s = ((r = n.resumeFrom) === null || r === void 0 ? void 0 : r.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && s && n.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: u } = n.layout,
      { animationType: d } = n.options,
      f = s.source !== n.layout.source;
    d === "size"
      ? xt((x) => {
          const S = f ? s.measuredBox[x] : s.layoutBox[x],
            A = ft(S);
          ((S.min = l[x].min), (S.max = S.min + A));
        })
      : Sm(d, s.layoutBox, l) &&
        xt((x) => {
          const S = f ? s.measuredBox[x] : s.layoutBox[x],
            A = ft(l[x]);
          ((S.max = S.min + A),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[x].max = n.relativeTarget[x].min + A)));
        });
    const p = mr();
    gi(p, l, s.layoutBox);
    const m = mr();
    f ? gi(m, n.applyTransform(u, !0), s.measuredBox) : gi(m, l, s.layoutBox);
    const g = !ym(p);
    let y = !1;
    if (!n.resumeFrom) {
      const x = n.getClosestProjectingParent();
      if (x && !x.resumeFrom) {
        const { snapshot: S, layout: A } = x;
        if (S && A) {
          const V = Le();
          yi(V, s.layoutBox, S.layoutBox);
          const D = Le();
          (yi(D, l, A.layoutBox),
            vm(V, D) || (y = !0),
            x.options.layoutRoot &&
              ((n.relativeTarget = D), (n.relativeTargetOrigin = V), (n.relativeParent = x)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: l,
      snapshot: s,
      delta: m,
      layoutDelta: p,
      hasLayoutChanged: g,
      hasRelativeTargetChanged: y,
    });
  } else if (n.isLead()) {
    const { onExitComplete: l } = n.options;
    l && l();
  }
  n.options.transition = void 0;
}
function P1(n) {
  (di && On.totalNodes++,
    n.parent &&
      (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
      n.isSharedProjectionDirty ||
        (n.isSharedProjectionDirty = !!(
          n.isProjectionDirty ||
          n.parent.isProjectionDirty ||
          n.parent.isSharedProjectionDirty
        )),
      n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty)));
}
function T1(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function E1(n) {
  n.clearSnapshot();
}
function Lh(n) {
  n.clearMeasurements();
}
function C1(n) {
  n.isLayoutDirty = !1;
}
function A1(n) {
  const { visualElement: r } = n.options;
  (r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function Nh(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function R1(n) {
  n.resolveTargetDelta();
}
function D1(n) {
  n.calcProjection();
}
function L1(n) {
  n.resetSkewAndRotation();
}
function N1(n) {
  n.removeLeadSnapshot();
}
function Mh(n, r, s) {
  ((n.translate = Te(r.translate, 0, s)),
    (n.scale = Te(r.scale, 1, s)),
    (n.origin = r.origin),
    (n.originPoint = r.originPoint));
}
function Vh(n, r, s, l) {
  ((n.min = Te(r.min, s.min, l)), (n.max = Te(r.max, s.max, l)));
}
function M1(n, r, s, l) {
  (Vh(n.x, r.x, s.x, l), Vh(n.y, r.y, s.y, l));
}
function V1(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const _1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  _h = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  jh = _h("applewebkit/") && !_h("chrome/") ? Math.round : qe;
function Oh(n) {
  ((n.min = jh(n.min)), (n.max = jh(n.max)));
}
function j1(n) {
  (Oh(n.x), Oh(n.y));
}
function Sm(n, r, s) {
  return n === "position" || (n === "preserve-aspect" && !Ix(Ah(r), Ah(s), 0.2));
}
function O1(n) {
  var r;
  return n !== n.root && ((r = n.scroll) === null || r === void 0 ? void 0 : r.wasRoot);
}
const F1 = wm({
    attachResizeListener: (n, r) => ki(n, "resize", r),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  va = { current: void 0 },
  km = wm({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!va.current) {
        const n = new F1({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (va.current = n));
      }
      return va.current;
    },
    resetTransform: (n, r) => {
      n.style.transform = r !== void 0 ? r : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  I1 = { pan: { Feature: e1 }, drag: { Feature: Jx, ProjectionNode: km, MeasureLayout: pm } };
function Fh(n, r, s) {
  const { props: l } = n;
  n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const u = "onHover" + s,
    d = l[u];
  d && de.postRender(() => d(r, Ci(r)));
}
class z1 extends wn {
  mount() {
    const { current: r } = this.node;
    r && (this.unmount = Bv(r, (s) => (Fh(this.node, s, "Start"), (l) => Fh(this.node, l, "End"))));
  }
  unmount() {}
}
class B1 extends wn {
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
    this.unmount = Ei(
      ki(this.node.current, "focus", () => this.onFocus()),
      ki(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Ih(n, r, s) {
  const { props: l } = n;
  n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
  const u = "onTap" + (s === "End" ? "" : s),
    d = l[u];
  d && de.postRender(() => d(r, Ci(r)));
}
class U1 extends wn {
  mount() {
    const { current: r } = this.node;
    r &&
      (this.unmount = Hv(
        r,
        (s) => (
          Ih(this.node, s, "Start"),
          (l, { success: u }) => Ih(this.node, l, u ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Oa = new WeakMap(),
  xa = new WeakMap(),
  W1 = (n) => {
    const r = Oa.get(n.target);
    r && r(n);
  },
  $1 = (n) => {
    n.forEach(W1);
  };
function H1({ root: n, ...r }) {
  const s = n || document;
  xa.has(s) || xa.set(s, {});
  const l = xa.get(s),
    u = JSON.stringify(r);
  return (l[u] || (l[u] = new IntersectionObserver($1, { root: n, ...r })), l[u]);
}
function K1(n, r, s) {
  const l = H1(r);
  return (
    Oa.set(n, s),
    l.observe(n),
    () => {
      (Oa.delete(n), l.unobserve(n));
    }
  );
}
const G1 = { some: 0, all: 1 };
class Q1 extends wn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: r = {} } = this.node.getProps(),
      { root: s, margin: l, amount: u = "some", once: d } = r,
      f = {
        root: s ? s.current : void 0,
        rootMargin: l,
        threshold: typeof u == "number" ? u : G1[u],
      },
      p = (m) => {
        const { isIntersecting: g } = m;
        if (this.isInView === g || ((this.isInView = g), d && !g && this.hasEnteredView)) return;
        (g && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", g));
        const { onViewportEnter: y, onViewportLeave: x } = this.node.getProps(),
          S = g ? y : x;
        S && S(m);
      };
    return K1(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: r, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(Y1(r, s)) && this.startObserver();
  }
  unmount() {}
}
function Y1({ viewport: n = {} }, { viewport: r = {} } = {}) {
  return (s) => n[s] !== r[s];
}
const X1 = {
    inView: { Feature: Q1 },
    tap: { Feature: U1 },
    focus: { Feature: B1 },
    hover: { Feature: z1 },
  },
  q1 = { layout: { ProjectionNode: km, MeasureLayout: pm } },
  Fa = { current: null },
  Pm = { current: !1 };
function Z1() {
  if (((Pm.current = !0), !!Wa))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        r = () => (Fa.current = n.matches);
      (n.addListener(r), r());
    } else Fa.current = !1;
}
const b1 = [...Qp, He, xn],
  J1 = (n) => b1.find(Gp(n)),
  zh = new WeakMap();
function ew(n, r, s) {
  for (const l in r) {
    const u = r[l],
      d = s[l];
    if (Ke(u)) n.addValue(l, u);
    else if (Ke(d)) n.addValue(l, Ot(u, { owner: n }));
    else if (d !== u)
      if (n.hasValue(l)) {
        const f = n.getValue(l);
        f.liveStyle === !0 ? f.jump(u) : f.hasAnimated || f.set(u);
      } else {
        const f = n.getStaticValue(l);
        n.addValue(l, Ot(f !== void 0 ? f : u, { owner: n }));
      }
  }
  for (const l in s) r[l] === void 0 && n.removeValue(l);
  return r;
}
const Bh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
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
      blockInitialAnimation: d,
      visualState: f,
    },
    p = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = yu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
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
        const A = It.now();
        this.renderScheduledAt < A &&
          ((this.renderScheduledAt = A), de.render(this.render, !1, !0));
      }));
    const { latestValues: m, renderState: g, onUpdate: y } = f;
    ((this.onUpdate = y),
      (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = s.initial ? { ...m } : {}),
      (this.renderState = g),
      (this.parent = r),
      (this.props = s),
      (this.presenceContext = l),
      (this.depth = r ? r.depth + 1 : 0),
      (this.reducedMotionConfig = u),
      (this.options = p),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = so(s)),
      (this.isVariantNode = ep(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(r && r.current)));
    const { willChange: x, ...S } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const A in S) {
      const V = S[A];
      m[A] !== void 0 && Ke(V) && V.set(m[A], !1);
    }
  }
  mount(r) {
    ((this.current = r),
      zh.set(r, this),
      this.projection && !this.projection.instance && this.projection.mount(r),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, l) => this.bindToMotionValue(l, s)),
      Pm.current || Z1(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Fa.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (zh.delete(this.current),
      this.projection && this.projection.unmount(),
      Dt(this.notifyUpdate),
      Dt(this.render),
      this.valueSubscriptions.forEach((r) => r()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const r in this.events) this.events[r].clear();
    for (const r in this.features) {
      const s = this.features[r];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(r, s) {
    this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)();
    const l = Un.has(r),
      u = s.on("change", (p) => {
        ((this.latestValues[r] = p),
          this.props.onUpdate && de.preRender(this.notifyUpdate),
          l && this.projection && (this.projection.isTransformDirty = !0));
      }),
      d = s.on("renderRequest", this.scheduleRender);
    let f;
    (window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, r, s)),
      this.valueSubscriptions.set(r, () => {
        (u(), d(), f && f(), s.owner && s.stop());
      }));
  }
  sortNodePosition(r) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== r.type
      ? 0
      : this.sortInstanceNodePosition(this.current, r.current);
  }
  updateFeatures() {
    let r = "animation";
    for (r in vr) {
      const s = vr[r];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Le();
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
    for (let l = 0; l < Bh.length; l++) {
      const u = Bh[l];
      this.propEventSubscriptions[u] &&
        (this.propEventSubscriptions[u](), delete this.propEventSubscriptions[u]);
      const d = "on" + u,
        f = r[d];
      f && (this.propEventSubscriptions[u] = this.on(u, f));
    }
    ((this.prevMotionValues = ew(
      this,
      this.scrapeMotionValuesFromProps(r, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this));
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
        ((l = Ot(s === null ? void 0 : s, { owner: this })), this.addValue(r, l)),
      l
    );
  }
  readValue(r, s) {
    var l;
    let u =
      this.latestValues[r] !== void 0 || !this.current
        ? this.latestValues[r]
        : (l = this.getBaseTargetFromProps(this.props, r)) !== null && l !== void 0
          ? l
          : this.readValueFromInstance(this.current, r, this.options);
    return (
      u != null &&
        (typeof u == "string" && (Hp(u) || jp(u))
          ? (u = parseFloat(u))
          : !J1(u) && xn.test(s) && (u = Up(r, s)),
        this.setBaseTarget(r, Ke(u) ? u.get() : u)),
      Ke(u) ? u.get() : u
    );
  }
  setBaseTarget(r, s) {
    this.baseTarget[r] = s;
  }
  getBaseTarget(r) {
    var s;
    const { initial: l } = this.props;
    let u;
    if (typeof l == "string" || typeof l == "object") {
      const f = qa(
        this.props,
        l,
        (s = this.presenceContext) === null || s === void 0 ? void 0 : s.custom,
      );
      f && (u = f[r]);
    }
    if (l && u !== void 0) return u;
    const d = this.getBaseTargetFromProps(this.props, r);
    return d !== void 0 && !Ke(d)
      ? d
      : this.initialValues[r] !== void 0 && u === void 0
        ? void 0
        : this.baseTarget[r];
  }
  on(r, s) {
    return (this.events[r] || (this.events[r] = new cu()), this.events[r].add(s));
  }
  notify(r, ...s) {
    this.events[r] && this.events[r].notify(...s);
  }
}
class Tm extends tw {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Yp));
  }
  sortInstanceNodePosition(r, s) {
    return r.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(r, s) {
    return r.style ? r.style[s] : void 0;
  }
  removeValueFromRenderState(r, { vars: s, style: l }) {
    (delete s[r], delete l[r]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: r } = this.props;
    Ke(r) &&
      (this.childSubscription = r.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
function nw(n) {
  return window.getComputedStyle(n);
}
class rw extends Tm {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = up));
  }
  readValueFromInstance(r, s) {
    if (Un.has(s)) {
      const l = gu(s);
      return (l && l.default) || 0;
    } else {
      const l = nw(r),
        u = (op(s) ? l.getPropertyValue(s) : l[s]) || 0;
      return typeof u == "string" ? u.trim() : u;
    }
  }
  measureInstanceViewportBox(r, { transformPagePoint: s }) {
    return dm(r, s);
  }
  build(r, s, l) {
    Ja(r, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(r, s, l) {
    return ru(r, s, l);
  }
}
class iw extends Tm {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Le));
  }
  getBaseTargetFromProps(r, s) {
    return r[s];
  }
  readValueFromInstance(r, s) {
    if (Un.has(s)) {
      const l = gu(s);
      return (l && l.default) || 0;
    }
    return ((s = cp.has(s) ? s : Qa(s)), r.getAttribute(s));
  }
  scrapeMotionValuesFromProps(r, s, l) {
    return hp(r, s, l);
  }
  build(r, s, l) {
    eu(r, s, this.isSVGTag, l.transformTemplate);
  }
  renderInstance(r, s, l, u) {
    fp(r, s, l, u);
  }
  mount(r) {
    ((this.isSVGTag = nu(r.tagName)), super.mount(r));
  }
}
const sw = (n, r) => (Xa(n) ? new iw(r) : new rw(r, { allowProjection: n !== Q.Fragment })),
  ow = jv({ ...Dx, ...X1, ...I1, ...q1 }, sw),
  Ks = qy(ow);
function Em(n, r) {
  let s;
  const l = () => {
    const { currentTime: u } = r,
      f = (u === null ? 0 : u.value) / 100;
    (s !== f && n(f), (s = f));
  };
  return (de.update(l, !0), () => Dt(l));
}
const Gs = new WeakMap();
let vn;
function lw(n, r) {
  if (r) {
    const { inlineSize: s, blockSize: l } = r[0];
    return { width: s, height: l };
  } else
    return n instanceof SVGElement && "getBBox" in n
      ? n.getBBox()
      : { width: n.offsetWidth, height: n.offsetHeight };
}
function aw({ target: n, contentRect: r, borderBoxSize: s }) {
  var l;
  (l = Gs.get(n)) === null ||
    l === void 0 ||
    l.forEach((u) => {
      u({
        target: n,
        contentSize: r,
        get size() {
          return lw(n, s);
        },
      });
    });
}
function uw(n) {
  n.forEach(aw);
}
function cw() {
  typeof ResizeObserver > "u" || (vn = new ResizeObserver(uw));
}
function fw(n, r) {
  vn || cw();
  const s = kp(n);
  return (
    s.forEach((l) => {
      let u = Gs.get(l);
      (u || ((u = new Set()), Gs.set(l, u)), u.add(r), vn == null || vn.observe(l));
    }),
    () => {
      s.forEach((l) => {
        const u = Gs.get(l);
        (u == null || u.delete(r), (u != null && u.size) || vn == null || vn.unobserve(l));
      });
    }
  );
}
const Qs = new Set();
let vi;
function dw() {
  ((vi = () => {
    const n = { width: window.innerWidth, height: window.innerHeight },
      r = { target: window, size: n, contentSize: n };
    Qs.forEach((s) => s(r));
  }),
    window.addEventListener("resize", vi));
}
function hw(n) {
  return (
    Qs.add(n),
    vi || dw(),
    () => {
      (Qs.delete(n), !Qs.size && vi && (vi = void 0));
    }
  );
}
function pw(n, r) {
  return typeof n == "function" ? hw(n) : fw(n, r);
}
const mw = 50,
  Uh = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  gw = () => ({ time: 0, x: Uh(), y: Uh() }),
  yw = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
function Wh(n, r, s, l) {
  const u = s[r],
    { length: d, position: f } = yw[r],
    p = u.current,
    m = s.time;
  ((u.current = n[`scroll${f}`]),
    (u.scrollLength = n[`scroll${d}`] - n[`client${d}`]),
    (u.offset.length = 0),
    (u.offset[0] = 0),
    (u.offset[1] = u.scrollLength),
    (u.progress = zn(0, u.scrollLength, u.current)));
  const g = l - m;
  u.velocity = g > mw ? 0 : fu(u.current - p, g);
}
function vw(n, r, s) {
  (Wh(n, "x", r, s), Wh(n, "y", r, s), (r.time = s));
}
function xw(n, r) {
  const s = { x: 0, y: 0 };
  let l = n;
  for (; l && l !== r;)
    if (l instanceof HTMLElement)
      ((s.x += l.offsetLeft), (s.y += l.offsetTop), (l = l.offsetParent));
    else if (l.tagName === "svg") {
      const u = l.getBoundingClientRect();
      l = l.parentElement;
      const d = l.getBoundingClientRect();
      ((s.x += u.left - d.left), (s.y += u.top - d.top));
    } else if (l instanceof SVGGraphicsElement) {
      const { x: u, y: d } = l.getBBox();
      ((s.x += u), (s.y += d));
      let f = null,
        p = l.parentNode;
      for (; !f;) (p.tagName === "svg" && (f = p), (p = l.parentNode));
      l = f;
    } else break;
  return s;
}
const Ia = { start: 0, center: 0.5, end: 1 };
function $h(n, r, s = 0) {
  let l = 0;
  if ((n in Ia && (n = Ia[n]), typeof n == "string")) {
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
const ww = [0, 0];
function Sw(n, r, s, l) {
  let u = Array.isArray(n) ? n : ww,
    d = 0,
    f = 0;
  return (
    typeof n == "number"
      ? (u = [n, n])
      : typeof n == "string" &&
        ((n = n.trim()), n.includes(" ") ? (u = n.split(" ")) : (u = [n, Ia[n] ? n : "0"])),
    (d = $h(u[0], s, l)),
    (f = $h(u[1], r)),
    d - f
  );
}
const kw = {
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Pw = { x: 0, y: 0 };
function Tw(n) {
  return "getBBox" in n && n.tagName !== "svg"
    ? n.getBBox()
    : { width: n.clientWidth, height: n.clientHeight };
}
function Ew(n, r, s) {
  const { offset: l = kw.All } = s,
    { target: u = n, axis: d = "y" } = s,
    f = d === "y" ? "height" : "width",
    p = u !== n ? xw(u, n) : Pw,
    m = u === n ? { width: n.scrollWidth, height: n.scrollHeight } : Tw(u),
    g = { width: n.clientWidth, height: n.clientHeight };
  r[d].offset.length = 0;
  let y = !r[d].interpolate;
  const x = l.length;
  for (let S = 0; S < x; S++) {
    const A = Sw(l[S], g[f], m[f], p[d]);
    (!y && A !== r[d].interpolatorOffsets[S] && (y = !0), (r[d].offset[S] = A));
  }
  (y &&
    ((r[d].interpolate = xu(r[d].offset, tm(l), { clamp: !1 })),
    (r[d].interpolatorOffsets = [...r[d].offset])),
    (r[d].progress = zt(0, 1, r[d].interpolate(r[d].current))));
}
function Cw(n, r = n, s) {
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
function Aw(n, r, s, l = {}) {
  return {
    measure: () => Cw(n, l.target, s),
    update: (u) => {
      (vw(n, s, u), (l.offset || l.target) && Ew(n, s, l));
    },
    notify: () => r(s),
  };
}
const ui = new WeakMap(),
  Hh = new WeakMap(),
  wa = new WeakMap(),
  Kh = (n) => (n === document.documentElement ? window : n);
function ku(n, { container: r = document.documentElement, ...s } = {}) {
  let l = wa.get(r);
  l || ((l = new Set()), wa.set(r, l));
  const u = gw(),
    d = Aw(r, n, u, s);
  if ((l.add(d), !ui.has(r))) {
    const p = () => {
        for (const S of l) S.measure();
      },
      m = () => {
        for (const S of l) S.update(Fe.timestamp);
      },
      g = () => {
        for (const S of l) S.notify();
      },
      y = () => {
        (de.read(p, !1, !0), de.read(m, !1, !0), de.update(g, !1, !0));
      };
    ui.set(r, y);
    const x = Kh(r);
    (window.addEventListener("resize", y, { passive: !0 }),
      r !== document.documentElement && Hh.set(r, pw(r, y)),
      x.addEventListener("scroll", y, { passive: !0 }));
  }
  const f = ui.get(r);
  return (
    de.read(f, !1, !0),
    () => {
      var p;
      Dt(f);
      const m = wa.get(r);
      if (!m || (m.delete(d), m.size)) return;
      const g = ui.get(r);
      (ui.delete(r),
        g &&
          (Kh(r).removeEventListener("scroll", g),
          (p = Hh.get(r)) === null || p === void 0 || p(),
          window.removeEventListener("resize", g)));
    }
  );
}
function Rw({ source: n, container: r, axis: s = "y" }) {
  n && (r = n);
  const l = { value: 0 },
    u = ku(
      (d) => {
        l.value = d[s].progress * 100;
      },
      { container: r, axis: s },
    );
  return { currentTime: l, cancel: u };
}
const Sa = new Map();
function Cm({ source: n, container: r = document.documentElement, axis: s = "y" } = {}) {
  (n && (r = n), Sa.has(r) || Sa.set(r, {}));
  const l = Sa.get(r);
  return (
    l[s] || (l[s] = gp() ? new ScrollTimeline({ source: r, axis: s }) : Rw({ source: r, axis: s })),
    l[s]
  );
}
function Dw(n) {
  return n.length === 2;
}
function Am(n) {
  return n && (n.target || n.offset);
}
function Lw(n, r) {
  return Dw(n) || Am(r)
    ? ku((s) => {
        n(s[r.axis].progress, s);
      }, r)
    : Em(n, Cm(r));
}
function Nw(n, r) {
  if ((n.flatten(), Am(r)))
    return (
      n.pause(),
      ku((s) => {
        n.time = n.duration * s[r.axis].progress;
      }, r)
    );
  {
    const s = Cm(r);
    return n.attachTimeline
      ? n.attachTimeline(
          s,
          (l) => (
            l.pause(),
            Em((u) => {
              l.time = l.duration * u;
            }, s)
          ),
        )
      : qe;
  }
}
function Mw(n, { axis: r = "y", ...s } = {}) {
  const l = { axis: r, ...s };
  return typeof n == "function" ? Lw(n, l) : Nw(n, l);
}
function Gh(n, r) {
  Wy(!!(!r || r.current));
}
const Vw = () => ({
  scrollX: Ot(0),
  scrollY: Ot(0),
  scrollXProgress: Ot(0),
  scrollYProgress: Ot(0),
});
function _w({ container: n, target: r, layoutEffect: s = !0, ...l } = {}) {
  const u = no(Vw);
  return (
    (s ? $a : Q.useEffect)(
      () => (
        Gh("target", r),
        Gh("container", n),
        Mw(
          (f, { x: p, y: m }) => {
            (u.scrollX.set(p.current),
              u.scrollXProgress.set(p.progress),
              u.scrollY.set(m.current),
              u.scrollYProgress.set(m.progress));
          },
          {
            ...l,
            container: (n == null ? void 0 : n.current) || void 0,
            target: (r == null ? void 0 : r.current) || void 0,
          },
        )
      ),
      [n, r, JSON.stringify(l.offset)],
    ),
    u
  );
}
function jw(n) {
  const r = no(() => Ot(n)),
    { isStatic: s } = Q.useContext(Ua);
  if (s) {
    const [, l] = Q.useState(n);
    Q.useEffect(() => r.on("change", l), []);
  }
  return r;
}
function Rm(n, r) {
  const s = jw(r()),
    l = () => s.set(r());
  return (
    l(),
    $a(() => {
      const u = () => de.preRender(l, !1, !0),
        d = n.map((f) => f.on("change", u));
      return () => {
        (d.forEach((f) => f()), Dt(l));
      };
    }),
    s
  );
}
const Ow = (n) => n && typeof n == "object" && n.mix,
  Fw = (n) => (Ow(n) ? n.mix : void 0);
function Iw(...n) {
  const r = !Array.isArray(n[0]),
    s = r ? 0 : -1,
    l = n[0 + s],
    u = n[1 + s],
    d = n[2 + s],
    f = n[3 + s],
    p = xu(u, d, { mixer: Fw(d[0]), ...f });
  return r ? p(l) : p;
}
function zw(n) {
  ((hi.current = []), n());
  const r = Rm(hi.current, n);
  return ((hi.current = void 0), r);
}
function Us(n, r, s, l) {
  if (typeof n == "function") return zw(n);
  const u = typeof r == "function" ? r : Iw(r, s, l);
  return Array.isArray(n) ? Qh(n, u) : Qh([n], ([d]) => u(d));
}
function Qh(n, r) {
  const s = no(() => []);
  return Rm(n, () => {
    s.length = 0;
    const l = n.length;
    for (let u = 0; u < l; u++) s[u] = n[u].get();
    return r(s);
  });
}
function Yt({ children: n, delay: r = 0, className: s = "", ...l }) {
  return R.jsx(Ks.div, {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, amount: 0.2 },
    transition: { duration: 0.65, delay: r, ease: [0.22, 1, 0.36, 1] },
    className: s,
    ...l,
    children: n,
  });
}
function Bn({ name: n, className: r = "", filled: s = !1 }) {
  return R.jsx("span", {
    className: `material-symbols-outlined leading-none ${r}`,
    style: s ? { fontVariationSettings: "'FILL' 1" } : void 0,
    "aria-hidden": !0,
    children: n,
  });
}
function to({ children: n, icon: r = "arrow_forward", className: s = "", ...l }) {
  return R.jsxs("button", {
    type: "button",
    className: `inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#08020e] transition hover:bg-white/90 active:scale-[0.98] ${s}`,
    "data-editable": !0,
    ...l,
    children: [R.jsx("span", { children: n }), R.jsx(Bn, { name: r, className: "text-[18px]" })],
  });
}
function jt(n) {
  const r = document.getElementById(n);
  r && r.scrollIntoView({ behavior: "smooth", block: "start" });
}
const Bw = [
    {
      icon: "auto_fix_high",
      title: "Prompt to pixels",
      body: "Describe screens in plain language and get editable React + Tailwind output.",
    },
    {
      icon: "layers",
      title: "Live preview",
      body: "Watch layouts update in real time with crossfaded preview video.",
    },
    {
      icon: "palette",
      title: "Glass system",
      body: "Liquid-glass components, serif display type, and motion presets included.",
    },
  ],
  Uw = [
    { name: "Starter", price: "$0", detail: "3 projects, community support" },
    { name: "Pro", price: "$29", detail: "Unlimited exports, priority render" },
    { name: "Team", price: "$79", detail: "Shared libraries, SSO, audit logs" },
  ];
function Ww() {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsx("section", {
        id: "about",
        className: "scroll-mt-24 border-t border-white/10 px-6 py-24 md:px-12",
        children: R.jsx("div", {
          className: "mx-auto max-w-3xl text-center",
          children: R.jsxs(Yt, {
            children: [
              R.jsx("p", {
                className: "text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/80",
                "data-editable": !0,
                children: "About",
              }),
              R.jsx("h2", {
                className: "mt-4 font-serif text-3xl text-white sm:text-4xl",
                "data-editable": !0,
                children: "Built for product teams who ship fast",
              }),
              R.jsx("p", {
                className: "mt-4 text-base leading-relaxed text-white/55",
                "data-editable": !0,
                children:
                  "UI Rocket combines generative layout, design tokens, and scroll-native motion so you can go from idea to landing page without leaving the canvas.",
              }),
            ],
          }),
        }),
      }),
      R.jsx("section", {
        id: "features",
        className: "scroll-mt-24 border-t border-white/10 px-6 py-24 md:px-12",
        children: R.jsxs("div", {
          className: "mx-auto max-w-5xl",
          children: [
            R.jsxs(Yt, {
              className: "text-center",
              children: [
                R.jsx("p", {
                  className: "text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/80",
                  "data-editable": !0,
                  children: "Features",
                }),
                R.jsx("h2", {
                  className: "mt-4 font-serif text-3xl text-white sm:text-4xl",
                  "data-editable": !0,
                  children: "Everything in one rocket",
                }),
              ],
            }),
            R.jsx("div", {
              className: "mt-12 grid gap-6 md:grid-cols-3",
              children: Bw.map((n, r) =>
                R.jsx(
                  Yt,
                  {
                    delay: r * 0.08,
                    children: R.jsxs("article", {
                      className: "liquid-glass rounded-2xl p-6",
                      children: [
                        R.jsx(Bn, { name: n.icon, className: "text-[28px] text-violet-300" }),
                        R.jsx("h3", {
                          className: "mt-4 text-lg font-semibold text-white",
                          "data-editable": !0,
                          children: n.title,
                        }),
                        R.jsx("p", {
                          className: "mt-2 text-sm leading-relaxed text-white/55",
                          "data-editable": !0,
                          children: n.body,
                        }),
                      ],
                    }),
                  },
                  n.title,
                ),
              ),
            }),
          ],
        }),
      }),
      R.jsx("section", {
        id: "pricing",
        className: "scroll-mt-24 border-t border-white/10 px-6 py-24 md:px-12 pb-32",
        children: R.jsxs("div", {
          className: "mx-auto max-w-4xl",
          children: [
            R.jsxs(Yt, {
              className: "text-center",
              children: [
                R.jsx("p", {
                  className: "text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/80",
                  "data-editable": !0,
                  children: "Pricing",
                }),
                R.jsx("h2", {
                  className: "mt-4 font-serif text-3xl text-white sm:text-4xl",
                  "data-editable": !0,
                  children: "Simple plans, no surprises",
                }),
              ],
            }),
            R.jsx("div", {
              className: "mt-12 grid gap-6 md:grid-cols-3",
              children: Uw.map((n, r) =>
                R.jsx(
                  Yt,
                  {
                    delay: r * 0.08,
                    children: R.jsxs("article", {
                      className: "liquid-glass-strong flex flex-col rounded-2xl p-6",
                      children: [
                        R.jsx("h3", {
                          className: "text-lg font-semibold text-white",
                          "data-editable": !0,
                          children: n.name,
                        }),
                        R.jsx("p", {
                          className: "mt-2 font-serif text-4xl text-violet-200",
                          "data-editable": !0,
                          children: n.price,
                        }),
                        R.jsx("p", {
                          className: "mt-2 flex-1 text-sm text-white/55",
                          "data-editable": !0,
                          children: n.detail,
                        }),
                        R.jsxs(to, {
                          className: "mt-6 w-full",
                          onClick: () => jt("pricing"),
                          children: ["Choose ", n.name],
                        }),
                      ],
                    }),
                  },
                  n.name,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
const $w =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260521_014404_fadafdb1-4df6-4699-be9c-77d25f39a3d0.mp4",
  Hw =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4",
  Kw =
    "https://miptxtnhvjrkpmnjgdhk.supabase.co/storage/v1/object/public/training-assets/landing%2Fhero-bottom-bg.png",
  Yh = [
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing" },
  ];
function Dm({ children: n, className: r = "", as: s = "span" }) {
  return R.jsxs(s, {
    className: `group relative inline-block overflow-hidden ${r}`,
    children: [
      R.jsx("span", {
        className: "block transition-transform duration-300 ease-out group-hover:-translate-y-full",
        children: n,
      }),
      R.jsx("span", {
        className:
          "absolute left-0 top-full block w-full transition-transform duration-300 ease-out group-hover:-translate-y-full text-violet-300",
        "aria-hidden": !0,
        children: n,
      }),
    ],
  });
}
const Gw = [
  { role: "user", text: "Design a fintech hero with glass nav and parallax dashboard." },
  { role: "ai", text: "On it — deep violet base, Instrument Serif headline, liquid-glass chrome." },
  { role: "user", text: "Add a live preview panel on the right." },
  { role: "ai", text: "Preview wired with crossfade video loop and chat rail." },
];
function Qw() {
  return R.jsxs("div", {
    className: "flex h-full flex-col border-r border-white/10 bg-[#0c0418]/80",
    children: [
      R.jsxs("div", {
        className: "flex items-center gap-2 border-b border-white/10 px-4 py-3",
        children: [
          R.jsx(Bn, { name: "auto_awesome", className: "text-violet-300 text-[20px]" }),
          R.jsx("span", {
            className: "text-sm font-medium text-white/90",
            "data-editable": !0,
            children: "UI Rocket",
          }),
          R.jsx("span", {
            className:
              "ml-auto rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300",
            children: "Live",
          }),
        ],
      }),
      R.jsx("div", {
        className: "flex flex-1 flex-col gap-3 overflow-hidden p-4",
        children: Gw.map((n, r) =>
          R.jsx(
            "div",
            {
              className: `max-w-[92%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${n.role === "user" ? "ml-auto bg-violet-600/40 text-white/95" : "mr-auto bg-white/5 text-white/75"}`,
              "data-editable": !0,
              children: n.text,
            },
            r,
          ),
        ),
      }),
      R.jsx("div", {
        className: "border-t border-white/10 p-3",
        children: R.jsxs("div", {
          className: "liquid-glass flex items-center gap-2 rounded-xl px-3 py-2",
          children: [
            R.jsx("input", {
              type: "text",
              readOnly: !0,
              value: "Describe your next screen…",
              className: "flex-1 bg-transparent text-xs text-white/50 outline-none",
              "aria-label": "Chat input",
            }),
            R.jsx("button", {
              type: "button",
              className:
                "flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500 text-white",
              "aria-label": "Send",
              children: R.jsx(Bn, { name: "send", className: "text-[16px]" }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Lm({ src: n, className: r = "", style: s }) {
  const l = Q.useRef(null),
    u = Q.useRef(null),
    d = Q.useRef(!1),
    f = (p, m = 500) => {
      const g = l.current;
      if (!g) return;
      u.current !== null && (cancelAnimationFrame(u.current), (u.current = null));
      const y = g.style.opacity ? parseFloat(g.style.opacity) : 0,
        x = performance.now(),
        S = (A) => {
          const V = Math.min((A - x) / m, 1),
            D = y + (p - y) * V;
          ((g.style.opacity = D.toFixed(4)),
            V < 1 ? (u.current = requestAnimationFrame(S)) : (u.current = null));
        };
      u.current = requestAnimationFrame(S);
    };
  return (
    Q.useEffect(() => {
      const p = l.current;
      if (!p) return;
      ((p.loop = !1), (p.style.opacity = "0"), (d.current = !1));
      const m = () => {
          p.style.opacity = "0";
          const x = p.play();
          x !== void 0 && x.then(() => f(1, 500)).catch(() => f(1, 500));
        },
        g = () => {
          const { duration: x, currentTime: S } = p;
          if (!Number.isNaN(x) && x > 0) {
            const A = x - S;
            !d.current && A <= 0.55 && A > 0 && ((d.current = !0), f(0, 500));
          }
        },
        y = () => {
          ((p.style.opacity = "0"),
            u.current !== null && (cancelAnimationFrame(u.current), (u.current = null)),
            setTimeout(() => {
              if (!l.current) return;
              l.current.currentTime = 0;
              const x = l.current.play();
              x !== void 0 &&
                x
                  .then(() => {
                    ((d.current = !1), f(1, 500));
                  })
                  .catch(() => {});
            }, 100));
        };
      return (
        p.addEventListener("loadeddata", m),
        p.addEventListener("timeupdate", g),
        p.addEventListener("ended", y),
        p.readyState >= 2 && m(),
        () => {
          (p.removeEventListener("loadeddata", m),
            p.removeEventListener("timeupdate", g),
            p.removeEventListener("ended", y),
            u.current !== null && cancelAnimationFrame(u.current));
        }
      );
    }, [n]),
    R.jsx("video", {
      ref: l,
      src: n,
      className: r,
      style: { opacity: 0, ...s },
      muted: !0,
      playsInline: !0,
      autoPlay: !0,
      preload: "auto",
    })
  );
}
function Yw() {
  return R.jsxs("div", {
    className: "relative flex h-full flex-1 flex-col overflow-hidden bg-[#12061f]",
    children: [
      R.jsxs("div", {
        className: "flex items-center gap-2 border-b border-white/10 px-4 py-2.5",
        children: [
          R.jsxs("span", {
            className: "flex gap-1.5",
            children: [
              R.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400/80" }),
              R.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-400/80" }),
              R.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-400/80" }),
            ],
          }),
          R.jsx("span", {
            className: "ml-2 text-[11px] text-white/45",
            "data-editable": !0,
            children: "preview.uirocket.app",
          }),
          R.jsx(Bn, { name: "refresh", className: "ml-auto text-[16px] text-white/35" }),
        ],
      }),
      R.jsxs("div", {
        className: "relative flex-1",
        children: [
          R.jsx(Lm, { src: Hw, className: "absolute inset-0 h-full w-full object-cover" }),
          R.jsx("div", {
            className:
              "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12061f] via-transparent to-transparent",
          }),
        ],
      }),
    ],
  });
}
function Xw() {
  return R.jsx("div", {
    className:
      "liquid-glass-strong mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-violet-950/50",
    style: { aspectRatio: "16 / 9" },
    children: R.jsxs("div", {
      className: "grid h-full grid-cols-[minmax(0,34%)_1fr]",
      children: [R.jsx(Qw, {}), R.jsx(Yw, {})],
    }),
  });
}
function qw({ label: n = "Now in public beta" }) {
  return R.jsxs("div", {
    className:
      "liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/80",
    "data-editable": !0,
    children: [
      R.jsx("span", {
        className: "flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/30",
        children: R.jsx(Bn, { name: "rocket_launch", className: "text-[14px] text-violet-300" }),
      }),
      R.jsx("span", { children: n }),
    ],
  });
}
function Zw({ children: n, className: r = "", ...s }) {
  return R.jsx("button", {
    type: "button",
    className: `liquid-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5 active:scale-[0.98] ${r}`,
    "data-editable": !0,
    ...s,
    children: n,
  });
}
function bw() {
  const n = Q.useRef(null),
    { scrollYProgress: r } = _w({ target: n, offset: ["start start", "end start"] }),
    s = Us(r, [0, 1], ["0%", "-25%"]),
    l = Us(r, [0, 1], ["0%", "20%"]),
    u = Us(r, [0, 1], ["0%", "-60%"]),
    d = Us(r, [0, 0.45, 1], [1, 0.55, 0]);
  return R.jsxs("section", {
    id: "hero",
    ref: n,
    className: "relative min-h-[100svh] overflow-hidden scroll-mt-0",
    children: [
      R.jsxs("div", {
        className: "absolute inset-0",
        children: [
          R.jsx(Lm, { src: $w, className: "h-full w-full object-cover" }),
          R.jsx("div", { className: "hero-vignette pointer-events-none absolute inset-0" }),
          R.jsx("div", {
            className: "hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 h-48",
          }),
        ],
      }),
      R.jsxs(Ks.div, {
        style: { y: u, opacity: d },
        className:
          "relative z-20 mx-auto flex max-w-4xl flex-col items-center px-6 pt-28 text-center sm:pt-32",
        children: [
          R.jsx(Yt, { children: R.jsx(qw, {}) }),
          R.jsx(Yt, {
            delay: 0.08,
            className: "mt-6",
            children: R.jsxs("h1", {
              className:
                "font-serif text-4xl font-normal leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl",
              "data-editable": !0,
              children: [
                "Design at the",
                " ",
                R.jsx(Dm, { className: "italic text-violet-200", children: "speed of thought" }),
              ],
            }),
          }),
          R.jsx(Yt, {
            delay: 0.16,
            className: "mt-5 max-w-xl",
            children: R.jsx("p", {
              className: "text-base leading-relaxed text-white/60 sm:text-lg",
              "data-editable": !0,
              children:
                "UI Rocket turns prompts into production-ready interfaces — with live preview, glass UI, and scroll-driven motion built in.",
            }),
          }),
          R.jsxs(Yt, {
            delay: 0.24,
            className: "mt-8 flex flex-wrap items-center justify-center gap-3",
            children: [
              R.jsx(to, { onClick: () => jt("pricing"), children: "Start building" }),
              R.jsx(Zw, { onClick: () => jt("features"), children: "See features" }),
            ],
          }),
        ],
      }),
      R.jsx(Ks.div, {
        style: { y: s },
        className:
          "relative z-10 mx-auto mt-10 w-full max-w-5xl px-4 pb-8 sm:mt-14 sm:px-6 md:pb-12",
        children: R.jsx(Xw, {}),
      }),
      R.jsx(Ks.div, {
        style: { y: l },
        className: "pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[min(28vh,220px)]",
        "aria-hidden": !0,
        children: R.jsx("img", {
          src: Kw,
          alt: "",
          className: "h-full w-full object-cover object-bottom",
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
 */ const Jw = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Nm = (...n) =>
    n
      .filter((r, s, l) => !!r && r.trim() !== "" && l.indexOf(r) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var eS = {
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
 */ const tS = Q.forwardRef(
  (
    {
      color: n = "currentColor",
      size: r = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: l,
      className: u = "",
      children: d,
      iconNode: f,
      ...p
    },
    m,
  ) =>
    Q.createElement(
      "svg",
      {
        ref: m,
        ...eS,
        width: r,
        height: r,
        stroke: n,
        strokeWidth: l ? (Number(s) * 24) / Number(r) : s,
        className: Nm("lucide", u),
        ...p,
      },
      [...f.map(([g, y]) => Q.createElement(g, y)), ...(Array.isArray(d) ? d : [d])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mm = (n, r) => {
  const s = Q.forwardRef(({ className: l, ...u }, d) =>
    Q.createElement(tS, { ref: d, iconNode: r, className: Nm(`lucide-${Jw(n)}`, l), ...u }),
  );
  return ((s.displayName = `${n}`), s);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nS = Mm("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rS = Mm("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function iS({ label: n, sectionId: r, onNavigate: s }) {
  return R.jsx("button", {
    type: "button",
    onClick: () => {
      (jt(r), s());
    },
    className:
      "rounded-full px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white",
    "data-editable": !0,
    children: R.jsx(Dm, { children: n }),
  });
}
function sS() {
  const [n, r] = Q.useState(!1);
  Q.useEffect(() => {
    if (!n) return;
    const l = (u) => {
      u.key === "Escape" && r(!1);
    };
    return (
      document.addEventListener("keydown", l),
      (document.body.style.overflow = "hidden"),
      () => {
        (document.removeEventListener("keydown", l), (document.body.style.overflow = ""));
      }
    );
  }, [n]);
  const s = () => r(!1);
  return R.jsxs("header", {
    className: "fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8",
    children: [
      R.jsxs("div", {
        className: "mx-auto flex max-w-6xl items-center justify-between gap-4",
        children: [
          R.jsxs("button", {
            type: "button",
            onClick: () => jt("hero"),
            className: "flex items-center gap-2.5 text-left",
            "aria-label": "UI Rocket home",
            children: [
              R.jsx("span", {
                className: "liquid-glass flex h-9 w-9 items-center justify-center rounded-xl",
                children: R.jsx(Bn, {
                  name: "rocket_launch",
                  className: "text-violet-300 text-[20px]",
                }),
              }),
              R.jsx("span", {
                className: "font-semibold tracking-tight text-white",
                "data-editable": !0,
                children: "UI Rocket",
              }),
            ],
          }),
          R.jsx("nav", {
            className: "liquid-glass hidden items-center gap-0.5 rounded-full px-1.5 py-1 md:flex",
            "aria-label": "Primary",
            children: Yh.map((l) =>
              R.jsx(iS, { label: l.label, sectionId: l.id, onNavigate: () => {} }, l.id),
            ),
          }),
          R.jsxs("div", {
            className: "hidden items-center gap-3 md:flex",
            children: [
              R.jsx("button", {
                type: "button",
                onClick: () => jt("pricing"),
                className: "text-sm font-medium text-white/60 transition hover:text-white",
                "data-editable": !0,
                children: "Sign in",
              }),
              R.jsx(to, { onClick: () => jt("pricing"), children: "Start free" }),
            ],
          }),
          R.jsx("button", {
            type: "button",
            className:
              "liquid-glass flex h-10 w-10 items-center justify-center rounded-full md:hidden",
            onClick: () => r((l) => !l),
            "aria-label": n ? "Close menu" : "Open menu",
            "aria-expanded": n,
            children: n ? R.jsx(rS, { className: "h-5 w-5" }) : R.jsx(nS, { className: "h-5 w-5" }),
          }),
        ],
      }),
      n &&
        R.jsxs(R.Fragment, {
          children: [
            R.jsx("button", {
              type: "button",
              className: "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden",
              "aria-label": "Close menu overlay",
              onClick: s,
            }),
            R.jsxs("nav", {
              className:
                "liquid-glass-strong fixed inset-x-4 top-[4.5rem] z-50 flex max-h-[min(70vh,420px)] flex-col gap-1 overflow-y-auto rounded-2xl p-3 md:hidden",
              "aria-label": "Mobile",
              children: [
                Yh.map((l) =>
                  R.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        (jt(l.id), s());
                      },
                      className:
                        "rounded-xl px-4 py-3 text-left text-sm font-medium text-white/85 hover:bg-white/5",
                      "data-editable": !0,
                      children: l.label,
                    },
                    l.id,
                  ),
                ),
                R.jsx("button", {
                  type: "button",
                  onClick: () => {
                    (jt("pricing"), s());
                  },
                  className: "rounded-xl px-4 py-3 text-left text-sm font-medium text-white/60",
                  "data-editable": !0,
                  children: "Sign in",
                }),
                R.jsx("div", {
                  className: "mt-2 px-1",
                  children: R.jsx(to, {
                    className: "w-full",
                    onClick: () => {
                      (jt("pricing"), s());
                    },
                    children: "Start free",
                  }),
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function oS() {
  return R.jsxs("div", {
    className: "min-h-screen bg-[#08020e]",
    children: [R.jsx(sS, {}), R.jsx(bw, {}), R.jsx(Ww, {})],
  });
}
function lS() {
  return (
    Q.useEffect(() => {
      By();
    }, []),
    R.jsx(oS, {})
  );
}
Fy.createRoot(document.getElementById("root")).render(
  R.jsx(Q.StrictMode, { children: R.jsx(lS, {}) }),
);
