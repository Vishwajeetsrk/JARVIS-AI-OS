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
var Zl = { exports: {} },
  oi = {},
  ql = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad;
function dg() {
  if (ad) return se;
  ad = 1;
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
    x = Symbol.iterator;
  function k(P) {
    return P === null || typeof P != "object"
      ? null
      : ((P = (x && P[x]) || P["@@iterator"]), typeof P == "function" ? P : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    M = {};
  function V(P, L, re) {
    ((this.props = P), (this.context = L), (this.refs = M), (this.updater = re || R));
  }
  ((V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (P, L) {
      if (typeof P != "object" && typeof P != "function" && P != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, P, L, "setState");
    }),
    (V.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, "forceUpdate");
    }));
  function I() {}
  I.prototype = V.prototype;
  function W(P, L, re) {
    ((this.props = P), (this.context = L), (this.refs = M), (this.updater = re || R));
  }
  var K = (W.prototype = new I());
  ((K.constructor = W), _(K, V.prototype), (K.isPureReactComponent = !0));
  var X = Array.isArray,
    B = Object.prototype.hasOwnProperty,
    ee = { current: null },
    le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(P, L, re) {
    var oe,
      ue = {},
      ce = null,
      pe = null;
    if (L != null)
      for (oe in (L.ref !== void 0 && (pe = L.ref), L.key !== void 0 && (ce = "" + L.key), L))
        B.call(L, oe) && !le.hasOwnProperty(oe) && (ue[oe] = L[oe]);
    var de = arguments.length - 2;
    if (de === 1) ue.children = re;
    else if (1 < de) {
      for (var we = Array(de), st = 0; st < de; st++) we[st] = arguments[st + 2];
      ue.children = we;
    }
    if (P && P.defaultProps)
      for (oe in ((de = P.defaultProps), de)) ue[oe] === void 0 && (ue[oe] = de[oe]);
    return { $$typeof: n, type: P, key: ce, ref: pe, props: ue, _owner: ee.current };
  }
  function ye(P, L) {
    return { $$typeof: n, type: P.type, key: L, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function Ce(P) {
    return typeof P == "object" && P !== null && P.$$typeof === n;
  }
  function Ze(P) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      P.replace(/[=:]/g, function (re) {
        return L[re];
      })
    );
  }
  var it = /\/+/g;
  function Ge(P, L) {
    return typeof P == "object" && P !== null && P.key != null ? Ze("" + P.key) : L.toString(36);
  }
  function qe(P, L, re, oe, ue) {
    var ce = typeof P;
    (ce === "undefined" || ce === "boolean") && (P = null);
    var pe = !1;
    if (P === null) pe = !0;
    else
      switch (ce) {
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (P.$$typeof) {
            case n:
            case i:
              pe = !0;
          }
      }
    if (pe)
      return (
        (pe = P),
        (ue = ue(pe)),
        (P = oe === "" ? "." + Ge(pe, 0) : oe),
        X(ue)
          ? ((re = ""),
            P != null && (re = P.replace(it, "$&/") + "/"),
            qe(ue, L, re, "", function (st) {
              return st;
            }))
          : ue != null &&
            (Ce(ue) &&
              (ue = ye(
                ue,
                re +
                  (!ue.key || (pe && pe.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(it, "$&/") + "/") +
                  P,
              )),
            L.push(ue)),
        1
      );
    if (((pe = 0), (oe = oe === "" ? "." : oe + ":"), X(P)))
      for (var de = 0; de < P.length; de++) {
        ce = P[de];
        var we = oe + Ge(ce, de);
        pe += qe(ce, L, re, we, ue);
      }
    else if (((we = k(P)), typeof we == "function"))
      for (P = we.call(P), de = 0; !(ce = P.next()).done;)
        ((ce = ce.value), (we = oe + Ge(ce, de++)), (pe += qe(ce, L, re, we, ue)));
    else if (ce === "object")
      throw (
        (L = String(P)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : L) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return pe;
  }
  function St(P, L, re) {
    if (P == null) return P;
    var oe = [],
      ue = 0;
    return (
      qe(P, oe, "", "", function (ce) {
        return L.call(re, ce, ue++);
      }),
      oe
    );
  }
  function Qe(P) {
    if (P._status === -1) {
      var L = P._result;
      ((L = L()),
        L.then(
          function (re) {
            (P._status === 0 || P._status === -1) && ((P._status = 1), (P._result = re));
          },
          function (re) {
            (P._status === 0 || P._status === -1) && ((P._status = 2), (P._result = re));
          },
        ),
        P._status === -1 && ((P._status = 0), (P._result = L)));
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var ie = { current: null },
    O = { transition: null },
    q = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: O, ReactCurrentOwner: ee };
  function $() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (se.Children = {
      map: St,
      forEach: function (P, L, re) {
        St(
          P,
          function () {
            L.apply(this, arguments);
          },
          re,
        );
      },
      count: function (P) {
        var L = 0;
        return (
          St(P, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (P) {
        return (
          St(P, function (L) {
            return L;
          }) || []
        );
      },
      only: function (P) {
        if (!Ce(P))
          throw Error("React.Children.only expected to receive a single React element child.");
        return P;
      },
    }),
    (se.Component = V),
    (se.Fragment = s),
    (se.Profiler = c),
    (se.PureComponent = W),
    (se.StrictMode = l),
    (se.Suspense = m),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q),
    (se.act = $),
    (se.cloneElement = function (P, L, re) {
      if (P == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            P +
            ".",
        );
      var oe = _({}, P.props),
        ue = P.key,
        ce = P.ref,
        pe = P._owner;
      if (L != null) {
        if (
          (L.ref !== void 0 && ((ce = L.ref), (pe = ee.current)),
          L.key !== void 0 && (ue = "" + L.key),
          P.type && P.type.defaultProps)
        )
          var de = P.type.defaultProps;
        for (we in L)
          B.call(L, we) &&
            !le.hasOwnProperty(we) &&
            (oe[we] = L[we] === void 0 && de !== void 0 ? de[we] : L[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) oe.children = re;
      else if (1 < we) {
        de = Array(we);
        for (var st = 0; st < we; st++) de[st] = arguments[st + 2];
        oe.children = de;
      }
      return { $$typeof: n, type: P.type, key: ue, ref: ce, props: oe, _owner: pe };
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
    (se.createElement = Z),
    (se.createFactory = function (P) {
      var L = Z.bind(null, P);
      return ((L.type = P), L);
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (P) {
      return { $$typeof: p, render: P };
    }),
    (se.isValidElement = Ce),
    (se.lazy = function (P) {
      return { $$typeof: g, _payload: { _status: -1, _result: P }, _init: Qe };
    }),
    (se.memo = function (P, L) {
      return { $$typeof: y, type: P, compare: L === void 0 ? null : L };
    }),
    (se.startTransition = function (P) {
      var L = O.transition;
      O.transition = {};
      try {
        P();
      } finally {
        O.transition = L;
      }
    }),
    (se.unstable_act = $),
    (se.useCallback = function (P, L) {
      return ie.current.useCallback(P, L);
    }),
    (se.useContext = function (P) {
      return ie.current.useContext(P);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (P) {
      return ie.current.useDeferredValue(P);
    }),
    (se.useEffect = function (P, L) {
      return ie.current.useEffect(P, L);
    }),
    (se.useId = function () {
      return ie.current.useId();
    }),
    (se.useImperativeHandle = function (P, L, re) {
      return ie.current.useImperativeHandle(P, L, re);
    }),
    (se.useInsertionEffect = function (P, L) {
      return ie.current.useInsertionEffect(P, L);
    }),
    (se.useLayoutEffect = function (P, L) {
      return ie.current.useLayoutEffect(P, L);
    }),
    (se.useMemo = function (P, L) {
      return ie.current.useMemo(P, L);
    }),
    (se.useReducer = function (P, L, re) {
      return ie.current.useReducer(P, L, re);
    }),
    (se.useRef = function (P) {
      return ie.current.useRef(P);
    }),
    (se.useState = function (P) {
      return ie.current.useState(P);
    }),
    (se.useSyncExternalStore = function (P, L, re) {
      return ie.current.useSyncExternalStore(P, L, re);
    }),
    (se.useTransition = function () {
      return ie.current.useTransition();
    }),
    (se.version = "18.3.1"),
    se
  );
}
var ud;
function Da() {
  return (ud || ((ud = 1), (ql.exports = dg())), ql.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cd;
function hg() {
  if (cd) return oi;
  cd = 1;
  var n = Da(),
    i = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, y) {
    var g,
      x = {},
      k = null,
      R = null;
    (y !== void 0 && (k = "" + y),
      m.key !== void 0 && (k = "" + m.key),
      m.ref !== void 0 && (R = m.ref));
    for (g in m) l.call(m, g) && !d.hasOwnProperty(g) && (x[g] = m[g]);
    if (p && p.defaultProps) for (g in ((m = p.defaultProps), m)) x[g] === void 0 && (x[g] = m[g]);
    return { $$typeof: i, type: p, key: k, ref: R, props: x, _owner: c.current };
  }
  return ((oi.Fragment = s), (oi.jsx = f), (oi.jsxs = f), oi);
}
var fd;
function pg() {
  return (fd || ((fd = 1), (Zl.exports = hg())), Zl.exports);
}
var A = pg(),
  z = Da(),
  js = {},
  Jl = { exports: {} },
  rt = {},
  bl = { exports: {} },
  ea = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd;
function mg() {
  return (
    dd ||
      ((dd = 1),
      (function (n) {
        function i(O, q) {
          var $ = O.length;
          O.push(q);
          e: for (; 0 < $;) {
            var P = ($ - 1) >>> 1,
              L = O[P];
            if (0 < c(L, q)) ((O[P] = q), (O[$] = L), ($ = P));
            else break e;
          }
        }
        function s(O) {
          return O.length === 0 ? null : O[0];
        }
        function l(O) {
          if (O.length === 0) return null;
          var q = O[0],
            $ = O.pop();
          if ($ !== q) {
            O[0] = $;
            e: for (var P = 0, L = O.length, re = L >>> 1; P < re;) {
              var oe = 2 * (P + 1) - 1,
                ue = O[oe],
                ce = oe + 1,
                pe = O[ce];
              if (0 > c(ue, $))
                ce < L && 0 > c(pe, ue)
                  ? ((O[P] = pe), (O[ce] = $), (P = ce))
                  : ((O[P] = ue), (O[oe] = $), (P = oe));
              else if (ce < L && 0 > c(pe, $)) ((O[P] = pe), (O[ce] = $), (P = ce));
              else break e;
            }
          }
          return q;
        }
        function c(O, q) {
          var $ = O.sortIndex - q.sortIndex;
          return $ !== 0 ? $ : O.id - q.id;
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
          x = null,
          k = 3,
          R = !1,
          _ = !1,
          M = !1,
          V = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function K(O) {
          for (var q = s(y); q !== null;) {
            if (q.callback === null) l(y);
            else if (q.startTime <= O) (l(y), (q.sortIndex = q.expirationTime), i(m, q));
            else break;
            q = s(y);
          }
        }
        function X(O) {
          if (((M = !1), K(O), !_))
            if (s(m) !== null) ((_ = !0), Qe(B));
            else {
              var q = s(y);
              q !== null && ie(X, q.startTime - O);
            }
        }
        function B(O, q) {
          ((_ = !1), M && ((M = !1), I(Z), (Z = -1)), (R = !0));
          var $ = k;
          try {
            for (K(q), x = s(m); x !== null && (!(x.expirationTime > q) || (O && !Ze()));) {
              var P = x.callback;
              if (typeof P == "function") {
                ((x.callback = null), (k = x.priorityLevel));
                var L = P(x.expirationTime <= q);
                ((q = n.unstable_now()),
                  typeof L == "function" ? (x.callback = L) : x === s(m) && l(m),
                  K(q));
              } else l(m);
              x = s(m);
            }
            if (x !== null) var re = !0;
            else {
              var oe = s(y);
              (oe !== null && ie(X, oe.startTime - q), (re = !1));
            }
            return re;
          } finally {
            ((x = null), (k = $), (R = !1));
          }
        }
        var ee = !1,
          le = null,
          Z = -1,
          ye = 5,
          Ce = -1;
        function Ze() {
          return !(n.unstable_now() - Ce < ye);
        }
        function it() {
          if (le !== null) {
            var O = n.unstable_now();
            Ce = O;
            var q = !0;
            try {
              q = le(!0, O);
            } finally {
              q ? Ge() : ((ee = !1), (le = null));
            }
          } else ee = !1;
        }
        var Ge;
        if (typeof W == "function")
          Ge = function () {
            W(it);
          };
        else if (typeof MessageChannel < "u") {
          var qe = new MessageChannel(),
            St = qe.port2;
          ((qe.port1.onmessage = it),
            (Ge = function () {
              St.postMessage(null);
            }));
        } else
          Ge = function () {
            V(it, 0);
          };
        function Qe(O) {
          ((le = O), ee || ((ee = !0), Ge()));
        }
        function ie(O, q) {
          Z = V(function () {
            O(n.unstable_now());
          }, q);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            _ || R || ((_ = !0), Qe(B));
          }),
          (n.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ye = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return k;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (n.unstable_next = function (O) {
            switch (k) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = k;
            }
            var $ = k;
            k = q;
            try {
              return O();
            } finally {
              k = $;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (O, q) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var $ = k;
            k = O;
            try {
              return q();
            } finally {
              k = $;
            }
          }),
          (n.unstable_scheduleCallback = function (O, q, $) {
            var P = n.unstable_now();
            switch (
              (typeof $ == "object" && $ !== null
                ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? P + $ : P))
                : ($ = P),
              O)
            ) {
              case 1:
                var L = -1;
                break;
              case 2:
                L = 250;
                break;
              case 5:
                L = 1073741823;
                break;
              case 4:
                L = 1e4;
                break;
              default:
                L = 5e3;
            }
            return (
              (L = $ + L),
              (O = {
                id: g++,
                callback: q,
                priorityLevel: O,
                startTime: $,
                expirationTime: L,
                sortIndex: -1,
              }),
              $ > P
                ? ((O.sortIndex = $),
                  i(y, O),
                  s(m) === null && O === s(y) && (M ? (I(Z), (Z = -1)) : (M = !0), ie(X, $ - P)))
                : ((O.sortIndex = L), i(m, O), _ || R || ((_ = !0), Qe(B))),
              O
            );
          }),
          (n.unstable_shouldYield = Ze),
          (n.unstable_wrapCallback = function (O) {
            var q = k;
            return function () {
              var $ = k;
              k = q;
              try {
                return O.apply(this, arguments);
              } finally {
                k = $;
              }
            };
          }));
      })(ea)),
    ea
  );
}
var hd;
function yg() {
  return (hd || ((hd = 1), (bl.exports = mg())), bl.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd;
function gg() {
  if (pd) return rt;
  pd = 1;
  var n = Da(),
    i = yg();
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
    x = {};
  function k(e) {
    return m.call(x, e) ? !0 : m.call(g, e) ? !1 : y.test(e) ? (x[e] = !0) : ((g[e] = !0), !1);
  }
  function R(e, t, r, o) {
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
  function _(e, t, r, o) {
    if (t === null || typeof t > "u" || R(e, t, r, o)) return !0;
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
  function M(e, t, r, o, a, u, h) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = h));
  }
  var V = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      V[e] = new M(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      V[t] = new M(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      V[e] = new M(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        V[e] = new M(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        V[e] = new M(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      V[e] = new M(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      V[e] = new M(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      V[e] = new M(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      V[e] = new M(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var I = /[\-:]([a-z])/g;
  function W(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, W);
      V[t] = new M(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, W);
        V[t] = new M(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, W);
      V[t] = new M(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      V[e] = new M(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (V.xlinkHref = new M("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      V[e] = new M(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function K(e, t, r, o) {
    var a = V.hasOwnProperty(t) ? V[t] : null;
    (a !== null
      ? a.type !== 0
      : o || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (_(t, r, a, o) && (r = null),
      o || a === null
        ? k(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
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
  var X = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    B = Symbol.for("react.element"),
    ee = Symbol.for("react.portal"),
    le = Symbol.for("react.fragment"),
    Z = Symbol.for("react.strict_mode"),
    ye = Symbol.for("react.profiler"),
    Ce = Symbol.for("react.provider"),
    Ze = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    Ge = Symbol.for("react.suspense"),
    qe = Symbol.for("react.suspense_list"),
    St = Symbol.for("react.memo"),
    Qe = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    O = Symbol.iterator;
  function q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (O && e[O]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var $ = Object.assign,
    P;
  function L(e) {
    if (P === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
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
          } catch (E) {
            var o = E;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (E) {
            o = E;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (E) {
          o = E;
        }
        e();
      }
    } catch (E) {
      if (E && o && typeof E.stack == "string") {
        for (
          var a = E.stack.split(`
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
      ((re = !1), (Error.prepareStackTrace = r));
    }
    return (e = e ? e.displayName || e.name : "") ? L(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return L(e.type);
      case 16:
        return L("Lazy");
      case 13:
        return L("Suspense");
      case 19:
        return L("SuspenseList");
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
      case le:
        return "Fragment";
      case ee:
        return "Portal";
      case ye:
        return "Profiler";
      case Z:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ze:
          return (e.displayName || "Context") + ".Consumer";
        case Ce:
          return (e._context.displayName || "Context") + ".Provider";
        case it:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case St:
          return ((t = e.displayName || null), t !== null ? t : ce(e.type) || "Memo");
        case Qe:
          ((t = e._payload), (e = e._init));
          try {
            return ce(e(t));
          } catch {}
      }
    return null;
  }
  function pe(e) {
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
  function we(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function st(e) {
    var t = we(e) ? "checked" : "value",
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
  function Ti(e) {
    e._valueTracker || (e._valueTracker = st(e));
  }
  function hu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = "";
    return (
      e && (o = we(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Ci(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function no(e, t) {
    var r = t.checked;
    return $({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function pu(e, t) {
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
  function mu(e, t) {
    ((t = t.checked), t != null && K(e, "checked", t, !1));
  }
  function ro(e, t) {
    mu(e, t);
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
      ? io(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && io(e, t.type, de(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function yu(e, t, r) {
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
  function io(e, t, r) {
    (t !== "number" || Ci(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var Sr = Array.isArray;
  function zn(e, t, r, o) {
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
  function so(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return $({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function gu(e, t) {
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
  function vu(e, t) {
    var r = de(t.value),
      o = de(t.defaultValue);
    (r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = "" + o));
  }
  function xu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function wu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function oo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? wu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ei,
    Su = (function (e) {
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
          Ei = Ei || document.createElement("div"),
            Ei.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ei.firstChild;
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
  var Pr = {
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
    ym = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Pr).forEach(function (e) {
    ym.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pr[t] = Pr[e]));
    });
  });
  function ku(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Pr.hasOwnProperty(e) && Pr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Pu(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf("--") === 0,
          a = ku(r, t[r], o);
        (r === "float" && (r = "cssFloat"), o ? e.setProperty(r, a) : (e[r] = a));
      }
  }
  var gm = $(
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
  function lo(e, t) {
    if (t) {
      if (gm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function ao(e, t) {
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
  var uo = null;
  function co(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var fo = null,
    Bn = null,
    Un = null;
  function Tu(e) {
    if ((e = Kr(e))) {
      if (typeof fo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Xi(t)), fo(e.stateNode, e.type, t));
    }
  }
  function Cu(e) {
    Bn ? (Un ? Un.push(e) : (Un = [e])) : (Bn = e);
  }
  function Eu() {
    if (Bn) {
      var e = Bn,
        t = Un;
      if (((Un = Bn = null), Tu(e), t)) for (e = 0; e < t.length; e++) Tu(t[e]);
    }
  }
  function Au(e, t) {
    return e(t);
  }
  function Ru() {}
  var ho = !1;
  function Mu(e, t, r) {
    if (ho) return e(t, r);
    ho = !0;
    try {
      return Au(e, t, r);
    } finally {
      ((ho = !1), (Bn !== null || Un !== null) && (Ru(), Eu()));
    }
  }
  function Tr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = Xi(r);
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
  var po = !1;
  if (p)
    try {
      var Cr = {};
      (Object.defineProperty(Cr, "passive", {
        get: function () {
          po = !0;
        },
      }),
        window.addEventListener("test", Cr, Cr),
        window.removeEventListener("test", Cr, Cr));
    } catch {
      po = !1;
    }
  function vm(e, t, r, o, a, u, h, v, w) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, E);
    } catch (N) {
      this.onError(N);
    }
  }
  var Er = !1,
    Ai = null,
    Ri = !1,
    mo = null,
    xm = {
      onError: function (e) {
        ((Er = !0), (Ai = e));
      },
    };
  function wm(e, t, r, o, a, u, h, v, w) {
    ((Er = !1), (Ai = null), vm.apply(xm, arguments));
  }
  function Sm(e, t, r, o, a, u, h, v, w) {
    if ((wm.apply(this, arguments), Er)) {
      if (Er) {
        var E = Ai;
        ((Er = !1), (Ai = null));
      } else throw Error(s(198));
      Ri || ((Ri = !0), (mo = E));
    }
  }
  function vn(e) {
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
  function Du(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Lu(e) {
    if (vn(e) !== e) throw Error(s(188));
  }
  function km(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = vn(e)), t === null)) throw Error(s(188));
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
          if (u === r) return (Lu(a), e);
          if (u === o) return (Lu(a), t);
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
  function Nu(e) {
    return ((e = km(e)), e !== null ? Vu(e) : null);
  }
  function Vu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Vu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ju = i.unstable_scheduleCallback,
    _u = i.unstable_cancelCallback,
    Pm = i.unstable_shouldYield,
    Tm = i.unstable_requestPaint,
    Re = i.unstable_now,
    Cm = i.unstable_getCurrentPriorityLevel,
    yo = i.unstable_ImmediatePriority,
    Fu = i.unstable_UserBlockingPriority,
    Mi = i.unstable_NormalPriority,
    Em = i.unstable_LowPriority,
    Iu = i.unstable_IdlePriority,
    Di = null,
    Dt = null;
  function Am(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
      try {
        Dt.onCommitFiberRoot(Di, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var kt = Math.clz32 ? Math.clz32 : Dm,
    Rm = Math.log,
    Mm = Math.LN2;
  function Dm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Rm(e) / Mm) | 0)) | 0);
  }
  var Li = 64,
    Ni = 4194304;
  function Ar(e) {
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
      v !== 0 ? (o = Ar(v)) : ((u &= h), u !== 0 && (o = Ar(u)));
    } else ((h = r & ~a), h !== 0 ? (o = Ar(h)) : u !== 0 && (o = Ar(u)));
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
  function Lm(e, t) {
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
  function Nm(e, t) {
    for (
      var r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var h = 31 - kt(u),
        v = 1 << h,
        w = a[h];
      (w === -1
        ? ((v & r) === 0 || (v & o) !== 0) && (a[h] = Lm(v, t))
        : w <= t && (e.expiredLanes |= v),
        (u &= ~v));
    }
  }
  function go(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Ou() {
    var e = Li;
    return ((Li <<= 1), (Li & 4194240) === 0 && (Li = 64), e);
  }
  function vo(e) {
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
  function Vm(e, t) {
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
  function zu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Bu,
    wo,
    Uu,
    Wu,
    $u,
    So = !1,
    ji = [],
    Yt = null,
    Xt = null,
    Zt = null,
    Mr = new Map(),
    Dr = new Map(),
    qt = [],
    jm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Hu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Yt = null;
        break;
      case "dragenter":
      case "dragleave":
        Xt = null;
        break;
      case "mouseover":
      case "mouseout":
        Zt = null;
        break;
      case "pointerover":
      case "pointerout":
        Mr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dr.delete(t.pointerId);
    }
  }
  function Lr(e, t, r, o, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = Kr(t)), t !== null && wo(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function _m(e, t, r, o, a) {
    switch (t) {
      case "focusin":
        return ((Yt = Lr(Yt, e, t, r, o, a)), !0);
      case "dragenter":
        return ((Xt = Lr(Xt, e, t, r, o, a)), !0);
      case "mouseover":
        return ((Zt = Lr(Zt, e, t, r, o, a)), !0);
      case "pointerover":
        var u = a.pointerId;
        return (Mr.set(u, Lr(Mr.get(u) || null, e, t, r, o, a)), !0);
      case "gotpointercapture":
        return ((u = a.pointerId), Dr.set(u, Lr(Dr.get(u) || null, e, t, r, o, a)), !0);
    }
    return !1;
  }
  function Ku(e) {
    var t = xn(e.target);
    if (t !== null) {
      var r = vn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Du(r)), t !== null)) {
            ((e.blockedOn = t),
              $u(e.priority, function () {
                Uu(r);
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
  function _i(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var r = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((uo = o), r.target.dispatchEvent(o), (uo = null));
      } else return ((t = Kr(r)), t !== null && wo(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Gu(e, t, r) {
    _i(e) && r.delete(t);
  }
  function Fm() {
    ((So = !1),
      Yt !== null && _i(Yt) && (Yt = null),
      Xt !== null && _i(Xt) && (Xt = null),
      Zt !== null && _i(Zt) && (Zt = null),
      Mr.forEach(Gu),
      Dr.forEach(Gu));
  }
  function Nr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      So || ((So = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Fm)));
  }
  function Vr(e) {
    function t(a) {
      return Nr(a, e);
    }
    if (0 < ji.length) {
      Nr(ji[0], e);
      for (var r = 1; r < ji.length; r++) {
        var o = ji[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Yt !== null && Nr(Yt, e),
        Xt !== null && Nr(Xt, e),
        Zt !== null && Nr(Zt, e),
        Mr.forEach(t),
        Dr.forEach(t),
        r = 0;
      r < qt.length;
      r++
    )
      ((o = qt[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < qt.length && ((r = qt[0]), r.blockedOn === null);)
      (Ku(r), r.blockedOn === null && qt.shift());
  }
  var Wn = X.ReactCurrentBatchConfig,
    Fi = !0;
  function Im(e, t, r, o) {
    var a = he,
      u = Wn.transition;
    Wn.transition = null;
    try {
      ((he = 1), ko(e, t, r, o));
    } finally {
      ((he = a), (Wn.transition = u));
    }
  }
  function Om(e, t, r, o) {
    var a = he,
      u = Wn.transition;
    Wn.transition = null;
    try {
      ((he = 4), ko(e, t, r, o));
    } finally {
      ((he = a), (Wn.transition = u));
    }
  }
  function ko(e, t, r, o) {
    if (Fi) {
      var a = Po(e, t, r, o);
      if (a === null) (Bo(e, t, o, Ii, r), Hu(e, o));
      else if (_m(a, e, t, r, o)) o.stopPropagation();
      else if ((Hu(e, o), t & 4 && -1 < jm.indexOf(e))) {
        for (; a !== null;) {
          var u = Kr(a);
          if (
            (u !== null && Bu(u), (u = Po(e, t, r, o)), u === null && Bo(e, t, o, Ii, r), u === a)
          )
            break;
          a = u;
        }
        a !== null && o.stopPropagation();
      } else Bo(e, t, o, null, r);
    }
  }
  var Ii = null;
  function Po(e, t, r, o) {
    if (((Ii = null), (e = co(o)), (e = xn(e)), e !== null))
      if (((t = vn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Du(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Ii = e), null);
  }
  function Qu(e) {
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
        switch (Cm()) {
          case yo:
            return 1;
          case Fu:
            return 4;
          case Mi:
          case Em:
            return 16;
          case Iu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jt = null,
    To = null,
    Oi = null;
  function Yu() {
    if (Oi) return Oi;
    var e,
      t = To,
      r = t.length,
      o,
      a = "value" in Jt ? Jt.value : Jt.textContent,
      u = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var h = r - e;
    for (o = 1; o <= h && t[r - o] === a[u - o]; o++);
    return (Oi = a.slice(e, 1 < o ? 1 - o : void 0));
  }
  function zi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Bi() {
    return !0;
  }
  function Xu() {
    return !1;
  }
  function ot(e) {
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
          ? Bi
          : Xu),
        (this.isPropagationStopped = Xu),
        this
      );
    }
    return (
      $(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Bi));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Bi));
        },
        persist: function () {},
        isPersistent: Bi,
      }),
      t
    );
  }
  var $n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Co = ot($n),
    jr = $({}, $n, { view: 0, detail: 0 }),
    zm = ot(jr),
    Eo,
    Ao,
    _r,
    Ui = $({}, jr, {
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
      getModifierState: Mo,
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
                ? ((Eo = e.screenX - _r.screenX), (Ao = e.screenY - _r.screenY))
                : (Ao = Eo = 0),
              (_r = e)),
            Eo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ao;
      },
    }),
    Zu = ot(Ui),
    Bm = $({}, Ui, { dataTransfer: 0 }),
    Um = ot(Bm),
    Wm = $({}, jr, { relatedTarget: 0 }),
    Ro = ot(Wm),
    $m = $({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hm = ot($m),
    Km = $({}, $n, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Gm = ot(Km),
    Qm = $({}, $n, { data: 0 }),
    qu = ot(Qm),
    Ym = {
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
    Xm = {
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
    Zm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Zm[e]) ? !!t[e] : !1;
  }
  function Mo() {
    return qm;
  }
  var Jm = $({}, jr, {
      key: function (e) {
        if (e.key) {
          var t = Ym[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = zi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Xm[e.keyCode] || "Unidentified"
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
      getModifierState: Mo,
      charCode: function (e) {
        return e.type === "keypress" ? zi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? zi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    bm = ot(Jm),
    ey = $({}, Ui, {
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
    Ju = ot(ey),
    ty = $({}, jr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Mo,
    }),
    ny = ot(ty),
    ry = $({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    iy = ot(ry),
    sy = $({}, Ui, {
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
    oy = ot(sy),
    ly = [9, 13, 27, 32],
    Do = p && "CompositionEvent" in window,
    Fr = null;
  p && "documentMode" in document && (Fr = document.documentMode);
  var ay = p && "TextEvent" in window && !Fr,
    bu = p && (!Do || (Fr && 8 < Fr && 11 >= Fr)),
    ec = " ",
    tc = !1;
  function nc(e, t) {
    switch (e) {
      case "keyup":
        return ly.indexOf(t.keyCode) !== -1;
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
  function rc(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var Hn = !1;
  function uy(e, t) {
    switch (e) {
      case "compositionend":
        return rc(t);
      case "keypress":
        return t.which !== 32 ? null : ((tc = !0), ec);
      case "textInput":
        return ((e = t.data), e === ec && tc ? null : e);
      default:
        return null;
    }
  }
  function cy(e, t) {
    if (Hn)
      return e === "compositionend" || (!Do && nc(e, t))
        ? ((e = Yu()), (Oi = To = Jt = null), (Hn = !1), e)
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
        return bu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var fy = {
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
  function ic(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fy[e.type] : t === "textarea";
  }
  function sc(e, t, r, o) {
    (Cu(o),
      (t = Gi(t, "onChange")),
      0 < t.length &&
        ((r = new Co("onChange", "change", null, r, o)), e.push({ event: r, listeners: t })));
  }
  var Ir = null,
    Or = null;
  function dy(e) {
    Pc(e, 0);
  }
  function Wi(e) {
    var t = Xn(e);
    if (hu(t)) return e;
  }
  function hy(e, t) {
    if (e === "change") return t;
  }
  var oc = !1;
  if (p) {
    var Lo;
    if (p) {
      var No = "oninput" in document;
      if (!No) {
        var lc = document.createElement("div");
        (lc.setAttribute("oninput", "return;"), (No = typeof lc.oninput == "function"));
      }
      Lo = No;
    } else Lo = !1;
    oc = Lo && (!document.documentMode || 9 < document.documentMode);
  }
  function ac() {
    Ir && (Ir.detachEvent("onpropertychange", uc), (Or = Ir = null));
  }
  function uc(e) {
    if (e.propertyName === "value" && Wi(Or)) {
      var t = [];
      (sc(t, Or, e, co(e)), Mu(dy, t));
    }
  }
  function py(e, t, r) {
    e === "focusin"
      ? (ac(), (Ir = t), (Or = r), Ir.attachEvent("onpropertychange", uc))
      : e === "focusout" && ac();
  }
  function my(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Wi(Or);
  }
  function yy(e, t) {
    if (e === "click") return Wi(t);
  }
  function gy(e, t) {
    if (e === "input" || e === "change") return Wi(t);
  }
  function vy(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Pt = typeof Object.is == "function" ? Object.is : vy;
  function zr(e, t) {
    if (Pt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var a = r[o];
      if (!m.call(t, a) || !Pt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function cc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function fc(e, t) {
    var r = cc(e);
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
      r = cc(r);
    }
  }
  function dc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? dc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function hc() {
    for (var e = window, t = Ci(); t instanceof e.HTMLIFrameElement;) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Ci(e.document);
    }
    return t;
  }
  function Vo(e) {
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
  function xy(e) {
    var t = hc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && dc(r.ownerDocument.documentElement, r)) {
      if (o !== null && Vo(r)) {
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
            (a = fc(r, u)));
          var h = fc(r, o);
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
  var wy = p && "documentMode" in document && 11 >= document.documentMode,
    Kn = null,
    jo = null,
    Br = null,
    _o = !1;
  function pc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    _o ||
      Kn == null ||
      Kn !== Ci(o) ||
      ((o = Kn),
      "selectionStart" in o && Vo(o)
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
        (o = Gi(jo, "onSelect")),
        0 < o.length &&
          ((t = new Co("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Kn))));
  }
  function $i(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var Gn = {
      animationend: $i("Animation", "AnimationEnd"),
      animationiteration: $i("Animation", "AnimationIteration"),
      animationstart: $i("Animation", "AnimationStart"),
      transitionend: $i("Transition", "TransitionEnd"),
    },
    Fo = {},
    mc = {};
  p &&
    ((mc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Gn.animationend.animation,
      delete Gn.animationiteration.animation,
      delete Gn.animationstart.animation),
    "TransitionEvent" in window || delete Gn.transitionend.transition);
  function Hi(e) {
    if (Fo[e]) return Fo[e];
    if (!Gn[e]) return e;
    var t = Gn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in mc) return (Fo[e] = t[r]);
    return e;
  }
  var yc = Hi("animationend"),
    gc = Hi("animationiteration"),
    vc = Hi("animationstart"),
    xc = Hi("transitionend"),
    wc = new Map(),
    Sc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function bt(e, t) {
    (wc.set(e, t), d(t, [e]));
  }
  for (var Io = 0; Io < Sc.length; Io++) {
    var Oo = Sc[Io],
      Sy = Oo.toLowerCase(),
      ky = Oo[0].toUpperCase() + Oo.slice(1);
    bt(Sy, "on" + ky);
  }
  (bt(yc, "onAnimationEnd"),
    bt(gc, "onAnimationIteration"),
    bt(vc, "onAnimationStart"),
    bt("dblclick", "onDoubleClick"),
    bt("focusin", "onFocus"),
    bt("focusout", "onBlur"),
    bt(xc, "onTransitionEnd"),
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
    Py = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));
  function kc(e, t, r) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = r), Sm(o, t, void 0, e), (e.currentTarget = null));
  }
  function Pc(e, t) {
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
              w = v.instance,
              E = v.currentTarget;
            if (((v = v.listener), w !== u && a.isPropagationStopped())) break e;
            (kc(a, v, E), (u = w));
          }
        else
          for (h = 0; h < o.length; h++) {
            if (
              ((v = o[h]),
              (w = v.instance),
              (E = v.currentTarget),
              (v = v.listener),
              w !== u && a.isPropagationStopped())
            )
              break e;
            (kc(a, v, E), (u = w));
          }
      }
    }
    if (Ri) throw ((e = mo), (Ri = !1), (mo = null), e);
  }
  function ge(e, t) {
    var r = t[Go];
    r === void 0 && (r = t[Go] = new Set());
    var o = e + "__bubble";
    r.has(o) || (Tc(t, e, 2, !1), r.add(o));
  }
  function zo(e, t, r) {
    var o = 0;
    (t && (o |= 4), Tc(r, e, o, t));
  }
  var Ki = "_reactListening" + Math.random().toString(36).slice(2);
  function Wr(e) {
    if (!e[Ki]) {
      ((e[Ki] = !0),
        l.forEach(function (r) {
          r !== "selectionchange" && (Py.has(r) || zo(r, !1, e), zo(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ki] || ((t[Ki] = !0), zo("selectionchange", !1, t));
    }
  }
  function Tc(e, t, r, o) {
    switch (Qu(t)) {
      case 1:
        var a = Im;
        break;
      case 4:
        a = Om;
        break;
      default:
        a = ko;
    }
    ((r = a.bind(null, t, r, e)),
      (a = void 0),
      !po || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (a = !0),
      o
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
          ? e.addEventListener(t, r, { passive: a })
          : e.addEventListener(t, r, !1));
  }
  function Bo(e, t, r, o, a) {
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
            if (((h = xn(v)), h === null)) return;
            if (((w = h.tag), w === 5 || w === 6)) {
              o = u = h;
              continue e;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    Mu(function () {
      var E = u,
        N = co(r),
        j = [];
      e: {
        var D = wc.get(e);
        if (D !== void 0) {
          var U = Co,
            G = e;
          switch (e) {
            case "keypress":
              if (zi(r) === 0) break e;
            case "keydown":
            case "keyup":
              U = bm;
              break;
            case "focusin":
              ((G = "focus"), (U = Ro));
              break;
            case "focusout":
              ((G = "blur"), (U = Ro));
              break;
            case "beforeblur":
            case "afterblur":
              U = Ro;
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
              U = Zu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Um;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = ny;
              break;
            case yc:
            case gc:
            case vc:
              U = Hm;
              break;
            case xc:
              U = iy;
              break;
            case "scroll":
              U = zm;
              break;
            case "wheel":
              U = oy;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Gm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Ju;
          }
          var Q = (t & 4) !== 0,
            Me = !Q && e === "scroll",
            T = Q ? (D !== null ? D + "Capture" : null) : D;
          Q = [];
          for (var S = E, C; S !== null;) {
            C = S;
            var F = C.stateNode;
            if (
              (C.tag === 5 &&
                F !== null &&
                ((C = F), T !== null && ((F = Tr(S, T)), F != null && Q.push($r(S, F, C)))),
              Me)
            )
              break;
            S = S.return;
          }
          0 < Q.length && ((D = new U(D, G, null, r, N)), j.push({ event: D, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((D = e === "mouseover" || e === "pointerover"),
            (U = e === "mouseout" || e === "pointerout"),
            D && r !== uo && (G = r.relatedTarget || r.fromElement) && (xn(G) || G[It]))
          )
            break e;
          if (
            (U || D) &&
            ((D =
              N.window === N
                ? N
                : (D = N.ownerDocument)
                  ? D.defaultView || D.parentWindow
                  : window),
            U
              ? ((G = r.relatedTarget || r.toElement),
                (U = E),
                (G = G ? xn(G) : null),
                G !== null &&
                  ((Me = vn(G)), G !== Me || (G.tag !== 5 && G.tag !== 6)) &&
                  (G = null))
              : ((U = null), (G = E)),
            U !== G)
          ) {
            if (
              ((Q = Zu),
              (F = "onMouseLeave"),
              (T = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = Ju), (F = "onPointerLeave"), (T = "onPointerEnter"), (S = "pointer")),
              (Me = U == null ? D : Xn(U)),
              (C = G == null ? D : Xn(G)),
              (D = new Q(F, S + "leave", U, r, N)),
              (D.target = Me),
              (D.relatedTarget = C),
              (F = null),
              xn(N) === E &&
                ((Q = new Q(T, S + "enter", G, r, N)),
                (Q.target = C),
                (Q.relatedTarget = Me),
                (F = Q)),
              (Me = F),
              U && G)
            )
              t: {
                for (Q = U, T = G, S = 0, C = Q; C; C = Qn(C)) S++;
                for (C = 0, F = T; F; F = Qn(F)) C++;
                for (; 0 < S - C;) ((Q = Qn(Q)), S--);
                for (; 0 < C - S;) ((T = Qn(T)), C--);
                for (; S--;) {
                  if (Q === T || (T !== null && Q === T.alternate)) break t;
                  ((Q = Qn(Q)), (T = Qn(T)));
                }
                Q = null;
              }
            else Q = null;
            (U !== null && Cc(j, D, U, Q, !1), G !== null && Me !== null && Cc(j, Me, G, Q, !0));
          }
        }
        e: {
          if (
            ((D = E ? Xn(E) : window),
            (U = D.nodeName && D.nodeName.toLowerCase()),
            U === "select" || (U === "input" && D.type === "file"))
          )
            var Y = hy;
          else if (ic(D))
            if (oc) Y = gy;
            else {
              Y = my;
              var J = py;
            }
          else
            (U = D.nodeName) &&
              U.toLowerCase() === "input" &&
              (D.type === "checkbox" || D.type === "radio") &&
              (Y = yy);
          if (Y && (Y = Y(e, E))) {
            sc(j, Y, r, N);
            break e;
          }
          (J && J(e, D, E),
            e === "focusout" &&
              (J = D._wrapperState) &&
              J.controlled &&
              D.type === "number" &&
              io(D, "number", D.value));
        }
        switch (((J = E ? Xn(E) : window), e)) {
          case "focusin":
            (ic(J) || J.contentEditable === "true") && ((Kn = J), (jo = E), (Br = null));
            break;
          case "focusout":
            Br = jo = Kn = null;
            break;
          case "mousedown":
            _o = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((_o = !1), pc(j, r, N));
            break;
          case "selectionchange":
            if (wy) break;
          case "keydown":
          case "keyup":
            pc(j, r, N);
        }
        var b;
        if (Do)
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
          Hn
            ? nc(e, r) && (ne = "onCompositionEnd")
            : e === "keydown" && r.keyCode === 229 && (ne = "onCompositionStart");
        (ne &&
          (bu &&
            r.locale !== "ko" &&
            (Hn || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && Hn && (b = Yu())
              : ((Jt = N), (To = "value" in Jt ? Jt.value : Jt.textContent), (Hn = !0))),
          (J = Gi(E, ne)),
          0 < J.length &&
            ((ne = new qu(ne, e, null, r, N)),
            j.push({ event: ne, listeners: J }),
            b ? (ne.data = b) : ((b = rc(r)), b !== null && (ne.data = b)))),
          (b = ay ? uy(e, r) : cy(e, r)) &&
            ((E = Gi(E, "onBeforeInput")),
            0 < E.length &&
              ((N = new qu("onBeforeInput", "beforeinput", null, r, N)),
              j.push({ event: N, listeners: E }),
              (N.data = b))));
      }
      Pc(j, t);
    });
  }
  function $r(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Gi(e, t) {
    for (var r = t + "Capture", o = []; e !== null;) {
      var a = e,
        u = a.stateNode;
      (a.tag === 5 &&
        u !== null &&
        ((a = u),
        (u = Tr(e, r)),
        u != null && o.unshift($r(e, u, a)),
        (u = Tr(e, t)),
        u != null && o.push($r(e, u, a))),
        (e = e.return));
    }
    return o;
  }
  function Qn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Cc(e, t, r, o, a) {
    for (var u = t._reactName, h = []; r !== null && r !== o;) {
      var v = r,
        w = v.alternate,
        E = v.stateNode;
      if (w !== null && w === o) break;
      (v.tag === 5 &&
        E !== null &&
        ((v = E),
        a
          ? ((w = Tr(r, u)), w != null && h.unshift($r(r, w, v)))
          : a || ((w = Tr(r, u)), w != null && h.push($r(r, w, v)))),
        (r = r.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Ty = /\r\n?/g,
    Cy = /\u0000|\uFFFD/g;
  function Ec(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ty,
        `
`,
      )
      .replace(Cy, "");
  }
  function Qi(e, t, r) {
    if (((t = Ec(t)), Ec(e) !== t && r)) throw Error(s(425));
  }
  function Yi() {}
  var Uo = null,
    Wo = null;
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
  var Ho = typeof setTimeout == "function" ? setTimeout : void 0,
    Ey = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ac = typeof Promise == "function" ? Promise : void 0,
    Ay =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ac < "u"
          ? function (e) {
              return Ac.resolve(null).then(e).catch(Ry);
            }
          : Ho;
  function Ry(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ko(e, t) {
    var r = t,
      o = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === "/$")) {
          if (o === 0) {
            (e.removeChild(a), Vr(t));
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = a;
    } while (r);
    Vr(t);
  }
  function en(e) {
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
  function Rc(e) {
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
    Lt = "__reactFiber$" + Yn,
    Hr = "__reactProps$" + Yn,
    It = "__reactContainer$" + Yn,
    Go = "__reactEvents$" + Yn,
    My = "__reactListeners$" + Yn,
    Dy = "__reactHandles$" + Yn;
  function xn(e) {
    var t = e[Lt];
    if (t) return t;
    for (var r = e.parentNode; r;) {
      if ((t = r[It] || r[Lt])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = Rc(e); e !== null;) {
            if ((r = e[Lt])) return r;
            e = Rc(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function Kr(e) {
    return (
      (e = e[Lt] || e[It]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Xn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Xi(e) {
    return e[Hr] || null;
  }
  var Qo = [],
    Zn = -1;
  function tn(e) {
    return { current: e };
  }
  function ve(e) {
    0 > Zn || ((e.current = Qo[Zn]), (Qo[Zn] = null), Zn--);
  }
  function me(e, t) {
    (Zn++, (Qo[Zn] = e.current), (e.current = t));
  }
  var nn = {},
    Be = tn(nn),
    Je = tn(!1),
    wn = nn;
  function qn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return nn;
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
  function be(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Zi() {
    (ve(Je), ve(Be));
  }
  function Mc(e, t, r) {
    if (Be.current !== nn) throw Error(s(168));
    (me(Be, t), me(Je, r));
  }
  function Dc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function")) return r;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(s(108, pe(e) || "Unknown", a));
    return $({}, r, o);
  }
  function qi(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
      (wn = Be.current),
      me(Be, e),
      me(Je, Je.current),
      !0
    );
  }
  function Lc(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    (r
      ? ((e = Dc(e, t, wn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        ve(Je),
        ve(Be),
        me(Be, e))
      : ve(Je),
      me(Je, r));
  }
  var Ot = null,
    Ji = !1,
    Yo = !1;
  function Nc(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  function Ly(e) {
    ((Ji = !0), Nc(e));
  }
  function rn() {
    if (!Yo && Ot !== null) {
      Yo = !0;
      var e = 0,
        t = he;
      try {
        var r = Ot;
        for (he = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((Ot = null), (Ji = !1));
      } catch (a) {
        throw (Ot !== null && (Ot = Ot.slice(e + 1)), ju(yo, rn), a);
      } finally {
        ((he = t), (Yo = !1));
      }
    }
    return null;
  }
  var Jn = [],
    bn = 0,
    bi = null,
    es = 0,
    ht = [],
    pt = 0,
    Sn = null,
    zt = 1,
    Bt = "";
  function kn(e, t) {
    ((Jn[bn++] = es), (Jn[bn++] = bi), (bi = e), (es = t));
  }
  function Vc(e, t, r) {
    ((ht[pt++] = zt), (ht[pt++] = Bt), (ht[pt++] = Sn), (Sn = e));
    var o = zt;
    e = Bt;
    var a = 32 - kt(o) - 1;
    ((o &= ~(1 << a)), (r += 1));
    var u = 32 - kt(t) + a;
    if (30 < u) {
      var h = a - (a % 5);
      ((u = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (a -= h),
        (zt = (1 << (32 - kt(t) + a)) | (r << a) | o),
        (Bt = u + e));
    } else ((zt = (1 << u) | (r << a) | o), (Bt = e));
  }
  function Xo(e) {
    e.return !== null && (kn(e, 1), Vc(e, 1, 0));
  }
  function Zo(e) {
    for (; e === bi;) ((bi = Jn[--bn]), (Jn[bn] = null), (es = Jn[--bn]), (Jn[bn] = null));
    for (; e === Sn;)
      ((Sn = ht[--pt]),
        (ht[pt] = null),
        (Bt = ht[--pt]),
        (ht[pt] = null),
        (zt = ht[--pt]),
        (ht[pt] = null));
  }
  var lt = null,
    at = null,
    Se = !1,
    Tt = null;
  function jc(e, t) {
    var r = vt(5, null, null, 0);
    ((r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function _c(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (lt = e), (at = en(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (lt = e), (at = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Sn !== null ? { id: zt, overflow: Bt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
              (r = vt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (lt = e),
              (at = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function qo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Jo(e) {
    if (Se) {
      var t = at;
      if (t) {
        var r = t;
        if (!_c(e, t)) {
          if (qo(e)) throw Error(s(418));
          t = en(r.nextSibling);
          var o = lt;
          t && _c(e, t) ? jc(o, r) : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (lt = e));
        }
      } else {
        if (qo(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (Se = !1), (lt = e));
      }
    }
  }
  function Fc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    lt = e;
  }
  function ts(e) {
    if (e !== lt) return !1;
    if (!Se) return (Fc(e), (Se = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !$o(e.type, e.memoizedProps))),
      t && (t = at))
    ) {
      if (qo(e)) throw (Ic(), Error(s(418)));
      for (; t;) (jc(e, t), (t = en(t.nextSibling)));
    }
    if ((Fc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                at = en(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        at = null;
      }
    } else at = lt ? en(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ic() {
    for (var e = at; e;) e = en(e.nextSibling);
  }
  function er() {
    ((at = lt = null), (Se = !1));
  }
  function bo(e) {
    Tt === null ? (Tt = [e]) : Tt.push(e);
  }
  var Ny = X.ReactCurrentBatchConfig;
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
  function ns(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function Oc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function zc(e) {
    function t(T, S) {
      if (e) {
        var C = T.deletions;
        C === null ? ((T.deletions = [S]), (T.flags |= 16)) : C.push(S);
      }
    }
    function r(T, S) {
      if (!e) return null;
      for (; S !== null;) (t(T, S), (S = S.sibling));
      return null;
    }
    function o(T, S) {
      for (T = new Map(); S !== null;)
        (S.key !== null ? T.set(S.key, S) : T.set(S.index, S), (S = S.sibling));
      return T;
    }
    function a(T, S) {
      return ((T = dn(T, S)), (T.index = 0), (T.sibling = null), T);
    }
    function u(T, S, C) {
      return (
        (T.index = C),
        e
          ? ((C = T.alternate),
            C !== null ? ((C = C.index), C < S ? ((T.flags |= 2), S) : C) : ((T.flags |= 2), S))
          : ((T.flags |= 1048576), S)
      );
    }
    function h(T) {
      return (e && T.alternate === null && (T.flags |= 2), T);
    }
    function v(T, S, C, F) {
      return S === null || S.tag !== 6
        ? ((S = Hl(C, T.mode, F)), (S.return = T), S)
        : ((S = a(S, C)), (S.return = T), S);
    }
    function w(T, S, C, F) {
      var Y = C.type;
      return Y === le
        ? N(T, S, C.props.children, F, C.key)
        : S !== null &&
            (S.elementType === Y ||
              (typeof Y == "object" && Y !== null && Y.$$typeof === Qe && Oc(Y) === S.type))
          ? ((F = a(S, C.props)), (F.ref = Gr(T, S, C)), (F.return = T), F)
          : ((F = Es(C.type, C.key, C.props, null, T.mode, F)),
            (F.ref = Gr(T, S, C)),
            (F.return = T),
            F);
    }
    function E(T, S, C, F) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== C.containerInfo ||
        S.stateNode.implementation !== C.implementation
        ? ((S = Kl(C, T.mode, F)), (S.return = T), S)
        : ((S = a(S, C.children || [])), (S.return = T), S);
    }
    function N(T, S, C, F, Y) {
      return S === null || S.tag !== 7
        ? ((S = Dn(C, T.mode, F, Y)), (S.return = T), S)
        : ((S = a(S, C)), (S.return = T), S);
    }
    function j(T, S, C) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return ((S = Hl("" + S, T.mode, C)), (S.return = T), S);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case B:
            return (
              (C = Es(S.type, S.key, S.props, null, T.mode, C)),
              (C.ref = Gr(T, null, S)),
              (C.return = T),
              C
            );
          case ee:
            return ((S = Kl(S, T.mode, C)), (S.return = T), S);
          case Qe:
            var F = S._init;
            return j(T, F(S._payload), C);
        }
        if (Sr(S) || q(S)) return ((S = Dn(S, T.mode, C, null)), (S.return = T), S);
        ns(T, S);
      }
      return null;
    }
    function D(T, S, C, F) {
      var Y = S !== null ? S.key : null;
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return Y !== null ? null : v(T, S, "" + C, F);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case B:
            return C.key === Y ? w(T, S, C, F) : null;
          case ee:
            return C.key === Y ? E(T, S, C, F) : null;
          case Qe:
            return ((Y = C._init), D(T, S, Y(C._payload), F));
        }
        if (Sr(C) || q(C)) return Y !== null ? null : N(T, S, C, F, null);
        ns(T, C);
      }
      return null;
    }
    function U(T, S, C, F, Y) {
      if ((typeof F == "string" && F !== "") || typeof F == "number")
        return ((T = T.get(C) || null), v(S, T, "" + F, Y));
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case B:
            return ((T = T.get(F.key === null ? C : F.key) || null), w(S, T, F, Y));
          case ee:
            return ((T = T.get(F.key === null ? C : F.key) || null), E(S, T, F, Y));
          case Qe:
            var J = F._init;
            return U(T, S, C, J(F._payload), Y);
        }
        if (Sr(F) || q(F)) return ((T = T.get(C) || null), N(S, T, F, Y, null));
        ns(S, F);
      }
      return null;
    }
    function G(T, S, C, F) {
      for (
        var Y = null, J = null, b = S, ne = (S = 0), Fe = null;
        b !== null && ne < C.length;
        ne++
      ) {
        b.index > ne ? ((Fe = b), (b = null)) : (Fe = b.sibling);
        var fe = D(T, b, C[ne], F);
        if (fe === null) {
          b === null && (b = Fe);
          break;
        }
        (e && b && fe.alternate === null && t(T, b),
          (S = u(fe, S, ne)),
          J === null ? (Y = fe) : (J.sibling = fe),
          (J = fe),
          (b = Fe));
      }
      if (ne === C.length) return (r(T, b), Se && kn(T, ne), Y);
      if (b === null) {
        for (; ne < C.length; ne++)
          ((b = j(T, C[ne], F)),
            b !== null && ((S = u(b, S, ne)), J === null ? (Y = b) : (J.sibling = b), (J = b)));
        return (Se && kn(T, ne), Y);
      }
      for (b = o(T, b); ne < C.length; ne++)
        ((Fe = U(b, T, ne, C[ne], F)),
          Fe !== null &&
            (e && Fe.alternate !== null && b.delete(Fe.key === null ? ne : Fe.key),
            (S = u(Fe, S, ne)),
            J === null ? (Y = Fe) : (J.sibling = Fe),
            (J = Fe)));
      return (
        e &&
          b.forEach(function (hn) {
            return t(T, hn);
          }),
        Se && kn(T, ne),
        Y
      );
    }
    function Q(T, S, C, F) {
      var Y = q(C);
      if (typeof Y != "function") throw Error(s(150));
      if (((C = Y.call(C)), C == null)) throw Error(s(151));
      for (
        var J = (Y = null), b = S, ne = (S = 0), Fe = null, fe = C.next();
        b !== null && !fe.done;
        ne++, fe = C.next()
      ) {
        b.index > ne ? ((Fe = b), (b = null)) : (Fe = b.sibling);
        var hn = D(T, b, fe.value, F);
        if (hn === null) {
          b === null && (b = Fe);
          break;
        }
        (e && b && hn.alternate === null && t(T, b),
          (S = u(hn, S, ne)),
          J === null ? (Y = hn) : (J.sibling = hn),
          (J = hn),
          (b = Fe));
      }
      if (fe.done) return (r(T, b), Se && kn(T, ne), Y);
      if (b === null) {
        for (; !fe.done; ne++, fe = C.next())
          ((fe = j(T, fe.value, F)),
            fe !== null &&
              ((S = u(fe, S, ne)), J === null ? (Y = fe) : (J.sibling = fe), (J = fe)));
        return (Se && kn(T, ne), Y);
      }
      for (b = o(T, b); !fe.done; ne++, fe = C.next())
        ((fe = U(b, T, ne, fe.value, F)),
          fe !== null &&
            (e && fe.alternate !== null && b.delete(fe.key === null ? ne : fe.key),
            (S = u(fe, S, ne)),
            J === null ? (Y = fe) : (J.sibling = fe),
            (J = fe)));
      return (
        e &&
          b.forEach(function (fg) {
            return t(T, fg);
          }),
        Se && kn(T, ne),
        Y
      );
    }
    function Me(T, S, C, F) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === le &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case B:
            e: {
              for (var Y = C.key, J = S; J !== null;) {
                if (J.key === Y) {
                  if (((Y = C.type), Y === le)) {
                    if (J.tag === 7) {
                      (r(T, J.sibling), (S = a(J, C.props.children)), (S.return = T), (T = S));
                      break e;
                    }
                  } else if (
                    J.elementType === Y ||
                    (typeof Y == "object" && Y !== null && Y.$$typeof === Qe && Oc(Y) === J.type)
                  ) {
                    (r(T, J.sibling),
                      (S = a(J, C.props)),
                      (S.ref = Gr(T, J, C)),
                      (S.return = T),
                      (T = S));
                    break e;
                  }
                  r(T, J);
                  break;
                } else t(T, J);
                J = J.sibling;
              }
              C.type === le
                ? ((S = Dn(C.props.children, T.mode, F, C.key)), (S.return = T), (T = S))
                : ((F = Es(C.type, C.key, C.props, null, T.mode, F)),
                  (F.ref = Gr(T, S, C)),
                  (F.return = T),
                  (T = F));
            }
            return h(T);
          case ee:
            e: {
              for (J = C.key; S !== null;) {
                if (S.key === J)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === C.containerInfo &&
                    S.stateNode.implementation === C.implementation
                  ) {
                    (r(T, S.sibling), (S = a(S, C.children || [])), (S.return = T), (T = S));
                    break e;
                  } else {
                    r(T, S);
                    break;
                  }
                else t(T, S);
                S = S.sibling;
              }
              ((S = Kl(C, T.mode, F)), (S.return = T), (T = S));
            }
            return h(T);
          case Qe:
            return ((J = C._init), Me(T, S, J(C._payload), F));
        }
        if (Sr(C)) return G(T, S, C, F);
        if (q(C)) return Q(T, S, C, F);
        ns(T, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          S !== null && S.tag === 6
            ? (r(T, S.sibling), (S = a(S, C)), (S.return = T), (T = S))
            : (r(T, S), (S = Hl(C, T.mode, F)), (S.return = T), (T = S)),
          h(T))
        : r(T, S);
    }
    return Me;
  }
  var tr = zc(!0),
    Bc = zc(!1),
    rs = tn(null),
    is = null,
    nr = null,
    el = null;
  function tl() {
    el = nr = is = null;
  }
  function nl(e) {
    var t = rs.current;
    (ve(rs), (e._currentValue = t));
  }
  function rl(e, t, r) {
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
  function rr(e, t) {
    ((is = e),
      (el = nr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (et = !0), (e.firstContext = null)));
  }
  function mt(e) {
    var t = e._currentValue;
    if (el !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), nr === null)) {
        if (is === null) throw Error(s(308));
        ((nr = e), (is.dependencies = { lanes: 0, firstContext: e }));
      } else nr = nr.next = e;
    return t;
  }
  var Pn = null;
  function il(e) {
    Pn === null ? (Pn = [e]) : Pn.push(e);
  }
  function Uc(e, t, r, o) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), il(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      Ut(e, o)
    );
  }
  function Ut(e, t) {
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
  var sn = !1;
  function sl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Wc(e, t) {
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
  function Wt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function on(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (ae & 2) !== 0)) {
      var a = o.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (o.pending = t),
        Ut(e, r)
      );
    }
    return (
      (a = o.interleaved),
      a === null ? ((t.next = t), il(o)) : ((t.next = a.next), (a.next = t)),
      (o.interleaved = t),
      Ut(e, r)
    );
  }
  function ss(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), xo(e, r));
    }
  }
  function $c(e, t) {
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
  function os(e, t, r, o) {
    var a = e.updateQueue;
    sn = !1;
    var u = a.firstBaseUpdate,
      h = a.lastBaseUpdate,
      v = a.shared.pending;
    if (v !== null) {
      a.shared.pending = null;
      var w = v,
        E = w.next;
      ((w.next = null), h === null ? (u = E) : (h.next = E), (h = w));
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (v = N.lastBaseUpdate),
        v !== h && (v === null ? (N.firstBaseUpdate = E) : (v.next = E), (N.lastBaseUpdate = w)));
    }
    if (u !== null) {
      var j = a.baseState;
      ((h = 0), (N = E = w = null), (v = u));
      do {
        var D = v.lane,
          U = v.eventTime;
        if ((o & D) === D) {
          N !== null &&
            (N = N.next =
              {
                eventTime: U,
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null,
              });
          e: {
            var G = e,
              Q = v;
            switch (((D = t), (U = r), Q.tag)) {
              case 1:
                if (((G = Q.payload), typeof G == "function")) {
                  j = G.call(U, j, D);
                  break e;
                }
                j = G;
                break e;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = Q.payload), (D = typeof G == "function" ? G.call(U, j, D) : G), D == null)
                )
                  break e;
                j = $({}, j, D);
                break e;
              case 2:
                sn = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64), (D = a.effects), D === null ? (a.effects = [v]) : D.push(v));
        } else
          ((U = {
            eventTime: U,
            lane: D,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            N === null ? ((E = N = U), (w = j)) : (N = N.next = U),
            (h |= D));
        if (((v = v.next), v === null)) {
          if (((v = a.shared.pending), v === null)) break;
          ((D = v),
            (v = D.next),
            (D.next = null),
            (a.lastBaseUpdate = D),
            (a.shared.pending = null));
        }
      } while (!0);
      if (
        (N === null && (w = j),
        (a.baseState = w),
        (a.firstBaseUpdate = E),
        (a.lastBaseUpdate = N),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do ((h |= a.lane), (a = a.next));
        while (a !== t);
      } else u === null && (a.shared.lanes = 0);
      ((En |= h), (e.lanes = h), (e.memoizedState = j));
    }
  }
  function Hc(e, t, r) {
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
    Nt = tn(Qr),
    Yr = tn(Qr),
    Xr = tn(Qr);
  function Tn(e) {
    if (e === Qr) throw Error(s(174));
    return e;
  }
  function ol(e, t) {
    switch ((me(Xr, t), me(Yr, e), me(Nt, Qr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : oo(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = oo(t, e)));
    }
    (ve(Nt), me(Nt, t));
  }
  function ir() {
    (ve(Nt), ve(Yr), ve(Xr));
  }
  function Kc(e) {
    Tn(Xr.current);
    var t = Tn(Nt.current),
      r = oo(t, e.type);
    t !== r && (me(Yr, e), me(Nt, r));
  }
  function ll(e) {
    Yr.current === e && (ve(Nt), ve(Yr));
  }
  var ke = tn(0);
  function ls(e) {
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
  var al = [];
  function ul() {
    for (var e = 0; e < al.length; e++) al[e]._workInProgressVersionPrimary = null;
    al.length = 0;
  }
  var as = X.ReactCurrentDispatcher,
    cl = X.ReactCurrentBatchConfig,
    Cn = 0,
    Pe = null,
    Ne = null,
    je = null,
    us = !1,
    Zr = !1,
    qr = 0,
    Vy = 0;
  function Ue() {
    throw Error(s(321));
  }
  function fl(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Pt(e[r], t[r])) return !1;
    return !0;
  }
  function dl(e, t, r, o, a, u) {
    if (
      ((Cn = u),
      (Pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (as.current = e === null || e.memoizedState === null ? Iy : Oy),
      (e = r(o, a)),
      Zr)
    ) {
      u = 0;
      do {
        if (((Zr = !1), (qr = 0), 25 <= u)) throw Error(s(301));
        ((u += 1), (je = Ne = null), (t.updateQueue = null), (as.current = zy), (e = r(o, a)));
      } while (Zr);
    }
    if (
      ((as.current = ds),
      (t = Ne !== null && Ne.next !== null),
      (Cn = 0),
      (je = Ne = Pe = null),
      (us = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function hl() {
    var e = qr !== 0;
    return ((qr = 0), e);
  }
  function Vt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (je === null ? (Pe.memoizedState = je = e) : (je = je.next = e), je);
  }
  function yt() {
    if (Ne === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = je === null ? Pe.memoizedState : je.next;
    if (t !== null) ((je = t), (Ne = e));
    else {
      if (e === null) throw Error(s(310));
      ((Ne = e),
        (e = {
          memoizedState: Ne.memoizedState,
          baseState: Ne.baseState,
          baseQueue: Ne.baseQueue,
          queue: Ne.queue,
          next: null,
        }),
        je === null ? (Pe.memoizedState = je = e) : (je = je.next = e));
    }
    return je;
  }
  function Jr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function pl(e) {
    var t = yt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = Ne,
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
        w = null,
        E = u;
      do {
        var N = E.lane;
        if ((Cn & N) === N)
          (w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: E.action,
                hasEagerState: E.hasEagerState,
                eagerState: E.eagerState,
                next: null,
              }),
            (o = E.hasEagerState ? E.eagerState : e(o, E.action)));
        else {
          var j = {
            lane: N,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          };
          (w === null ? ((v = w = j), (h = o)) : (w = w.next = j), (Pe.lanes |= N), (En |= N));
        }
        E = E.next;
      } while (E !== null && E !== u);
      (w === null ? (h = o) : (w.next = v),
        Pt(o, t.memoizedState) || (et = !0),
        (t.memoizedState = o),
        (t.baseState = h),
        (t.baseQueue = w),
        (r.lastRenderedState = o));
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do ((u = a.lane), (Pe.lanes |= u), (En |= u), (a = a.next));
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function ml(e) {
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
      (Pt(u, t.memoizedState) || (et = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (r.lastRenderedState = u));
    }
    return [u, o];
  }
  function Gc() {}
  function Qc(e, t) {
    var r = Pe,
      o = yt(),
      a = t(),
      u = !Pt(o.memoizedState, a);
    if (
      (u && ((o.memoizedState = a), (et = !0)),
      (o = o.queue),
      yl(Zc.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || u || (je !== null && je.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), br(9, Xc.bind(null, r, o, a, t), void 0, null), _e === null))
        throw Error(s(349));
      (Cn & 30) !== 0 || Yc(r, t, a);
    }
    return a;
  }
  function Yc(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Pe.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function Xc(e, t, r, o) {
    ((t.value = r), (t.getSnapshot = o), qc(t) && Jc(e));
  }
  function Zc(e, t, r) {
    return r(function () {
      qc(t) && Jc(e);
    });
  }
  function qc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Pt(e, r);
    } catch {
      return !0;
    }
  }
  function Jc(e) {
    var t = Ut(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function bc(e) {
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
      (e = e.dispatch = Fy.bind(null, Pe, e)),
      [t.memoizedState, e]
    );
  }
  function br(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Pe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function ef() {
    return yt().memoizedState;
  }
  function cs(e, t, r, o) {
    var a = Vt();
    ((Pe.flags |= e), (a.memoizedState = br(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function fs(e, t, r, o) {
    var a = yt();
    o = o === void 0 ? null : o;
    var u = void 0;
    if (Ne !== null) {
      var h = Ne.memoizedState;
      if (((u = h.destroy), o !== null && fl(o, h.deps))) {
        a.memoizedState = br(t, r, u, o);
        return;
      }
    }
    ((Pe.flags |= e), (a.memoizedState = br(1 | t, r, u, o)));
  }
  function tf(e, t) {
    return cs(8390656, 8, e, t);
  }
  function yl(e, t) {
    return fs(2048, 8, e, t);
  }
  function nf(e, t) {
    return fs(4, 2, e, t);
  }
  function rf(e, t) {
    return fs(4, 4, e, t);
  }
  function sf(e, t) {
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
  function of(e, t, r) {
    return ((r = r != null ? r.concat([e]) : null), fs(4, 4, sf.bind(null, t, e), r));
  }
  function gl() {}
  function lf(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && fl(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function af(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && fl(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function uf(e, t, r) {
    return (Cn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = r))
      : (Pt(r, t) || ((r = Ou()), (Pe.lanes |= r), (En |= r), (e.baseState = !0)), t);
  }
  function jy(e, t) {
    var r = he;
    ((he = r !== 0 && 4 > r ? r : 4), e(!0));
    var o = cl.transition;
    cl.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((he = r), (cl.transition = o));
    }
  }
  function cf() {
    return yt().memoizedState;
  }
  function _y(e, t, r) {
    var o = cn(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), ff(e)))
      df(t, r);
    else if (((r = Uc(e, t, r, o)), r !== null)) {
      var a = Xe();
      (Rt(r, e, o, a), hf(r, t, o));
    }
  }
  function Fy(e, t, r) {
    var o = cn(e),
      a = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (ff(e)) df(t, a);
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
          if (((a.hasEagerState = !0), (a.eagerState = v), Pt(v, h))) {
            var w = t.interleaved;
            (w === null ? ((a.next = a), il(t)) : ((a.next = w.next), (w.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((r = Uc(e, t, a, o)), r !== null && ((a = Xe()), Rt(r, e, o, a), hf(r, t, o)));
    }
  }
  function ff(e) {
    var t = e.alternate;
    return e === Pe || (t !== null && t === Pe);
  }
  function df(e, t) {
    Zr = us = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function hf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), xo(e, r));
    }
  }
  var ds = {
      readContext: mt,
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
    Iy = {
      readContext: mt,
      useCallback: function (e, t) {
        return ((Vt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: mt,
      useEffect: tf,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), cs(4194308, 4, sf.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return cs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return cs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Vt();
        return ((t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, r) {
        var o = Vt();
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
          (e = e.dispatch = _y.bind(null, Pe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Vt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: bc,
      useDebugValue: gl,
      useDeferredValue: function (e) {
        return (Vt().memoizedState = e);
      },
      useTransition: function () {
        var e = bc(!1),
          t = e[0];
        return ((e = jy.bind(null, e[1])), (Vt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = Pe,
          a = Vt();
        if (Se) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), _e === null)) throw Error(s(349));
          (Cn & 30) !== 0 || Yc(o, t, r);
        }
        a.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (a.queue = u),
          tf(Zc.bind(null, o, u, e), [e]),
          (o.flags |= 2048),
          br(9, Xc.bind(null, o, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Vt(),
          t = _e.identifierPrefix;
        if (Se) {
          var r = Bt,
            o = zt;
          ((r = (o & ~(1 << (32 - kt(o) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = qr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":"));
        } else ((r = Vy++), (t = ":" + t + "r" + r.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Oy = {
      readContext: mt,
      useCallback: lf,
      useContext: mt,
      useEffect: yl,
      useImperativeHandle: of,
      useInsertionEffect: nf,
      useLayoutEffect: rf,
      useMemo: af,
      useReducer: pl,
      useRef: ef,
      useState: function () {
        return pl(Jr);
      },
      useDebugValue: gl,
      useDeferredValue: function (e) {
        var t = yt();
        return uf(t, Ne.memoizedState, e);
      },
      useTransition: function () {
        var e = pl(Jr)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: Gc,
      useSyncExternalStore: Qc,
      useId: cf,
      unstable_isNewReconciler: !1,
    },
    zy = {
      readContext: mt,
      useCallback: lf,
      useContext: mt,
      useEffect: yl,
      useImperativeHandle: of,
      useInsertionEffect: nf,
      useLayoutEffect: rf,
      useMemo: af,
      useReducer: ml,
      useRef: ef,
      useState: function () {
        return ml(Jr);
      },
      useDebugValue: gl,
      useDeferredValue: function (e) {
        var t = yt();
        return Ne === null ? (t.memoizedState = e) : uf(t, Ne.memoizedState, e);
      },
      useTransition: function () {
        var e = ml(Jr)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: Gc,
      useSyncExternalStore: Qc,
      useId: cf,
      unstable_isNewReconciler: !1,
    };
  function Ct(e, t) {
    if (e && e.defaultProps) {
      ((t = $({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function vl(e, t, r, o) {
    ((t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : $({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var hs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? vn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = Xe(),
        a = cn(e),
        u = Wt(o, a);
      ((u.payload = t),
        r != null && (u.callback = r),
        (t = on(e, u, a)),
        t !== null && (Rt(t, e, a, o), ss(t, e, a)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = Xe(),
        a = cn(e),
        u = Wt(o, a);
      ((u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = on(e, u, a)),
        t !== null && (Rt(t, e, a, o), ss(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Xe(),
        o = cn(e),
        a = Wt(r, o);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = on(e, a, o)),
        t !== null && (Rt(t, e, o, r), ss(t, e, o)));
    },
  };
  function pf(e, t, r, o, a, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, u, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !zr(r, o) || !zr(a, u)
          : !0
    );
  }
  function mf(e, t, r) {
    var o = !1,
      a = nn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = mt(u))
        : ((a = be(t) ? wn : Be.current),
          (o = t.contextTypes),
          (u = (o = o != null) ? qn(e, a) : nn)),
      (t = new t(r, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = hs),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function yf(e, t, r, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && hs.enqueueReplaceState(t, t.state, null));
  }
  function xl(e, t, r, o) {
    var a = e.stateNode;
    ((a.props = r), (a.state = e.memoizedState), (a.refs = {}), sl(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (a.context = mt(u))
      : ((u = be(t) ? wn : Be.current), (a.context = qn(e, u))),
      (a.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (vl(e, t, u, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((t = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(),
        t !== a.state && hs.enqueueReplaceState(a, a.state, null),
        os(e, r, a, o),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function sr(e, t) {
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
  function wl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Sl(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var By = typeof WeakMap == "function" ? WeakMap : Map;
  function gf(e, t, r) {
    ((r = Wt(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (ws || ((ws = !0), (Fl = o)), Sl(e, t));
      }),
      r
    );
  }
  function vf(e, t, r) {
    ((r = Wt(-1, r)), (r.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var a = t.value;
      ((r.payload = function () {
        return o(a);
      }),
        (r.callback = function () {
          Sl(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (r.callback = function () {
          (Sl(e, t),
            typeof o != "function" && (an === null ? (an = new Set([this])) : an.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
        }),
      r
    );
  }
  function xf(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new By();
      var a = new Set();
      o.set(t, a);
    } else ((a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a)));
    a.has(r) || (a.add(r), (e = eg.bind(null, e, t, r)), t.then(e, e));
  }
  function wf(e) {
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
  function Sf(e, t, r, o, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null ? (r.tag = 17) : ((t = Wt(-1, 1)), (t.tag = 2), on(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var Uy = X.ReactCurrentOwner,
    et = !1;
  function Ye(e, t, r, o) {
    t.child = e === null ? Bc(t, null, r, o) : tr(t, e.child, r, o);
  }
  function kf(e, t, r, o, a) {
    r = r.render;
    var u = t.ref;
    return (
      rr(t, a),
      (o = dl(e, t, r, o, u, a)),
      (r = hl()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), $t(e, t, a))
        : (Se && r && Xo(t), (t.flags |= 1), Ye(e, t, o, a), t.child)
    );
  }
  function Pf(e, t, r, o, a) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !$l(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Tf(e, t, u, o, a))
        : ((e = Es(r.type, null, o, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & a) === 0)) {
      var h = u.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : zr), r(h, o) && e.ref === t.ref))
        return $t(e, t, a);
    }
    return ((t.flags |= 1), (e = dn(u, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Tf(e, t, r, o, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (zr(u, o) && e.ref === t.ref)
        if (((et = !1), (t.pendingProps = o = u), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (et = !0);
        else return ((t.lanes = e.lanes), $t(e, t, a));
    }
    return kl(e, t, r, o, a);
  }
  function Cf(e, t, r) {
    var o = t.pendingProps,
      a = o.children,
      u = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          me(lr, ut),
          (ut |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            me(lr, ut),
            (ut |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = u !== null ? u.baseLanes : r),
          me(lr, ut),
          (ut |= o));
      }
    else
      (u !== null ? ((o = u.baseLanes | r), (t.memoizedState = null)) : (o = r),
        me(lr, ut),
        (ut |= o));
    return (Ye(e, t, a, r), t.child);
  }
  function Ef(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function kl(e, t, r, o, a) {
    var u = be(r) ? wn : Be.current;
    return (
      (u = qn(t, u)),
      rr(t, a),
      (r = dl(e, t, r, o, u, a)),
      (o = hl()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), $t(e, t, a))
        : (Se && o && Xo(t), (t.flags |= 1), Ye(e, t, r, a), t.child)
    );
  }
  function Af(e, t, r, o, a) {
    if (be(r)) {
      var u = !0;
      qi(t);
    } else u = !1;
    if ((rr(t, a), t.stateNode === null)) (ms(e, t), mf(t, r, o), xl(t, r, o, a), (o = !0));
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var w = h.context,
        E = r.contextType;
      typeof E == "object" && E !== null
        ? (E = mt(E))
        : ((E = be(r) ? wn : Be.current), (E = qn(t, E)));
      var N = r.getDerivedStateFromProps,
        j = typeof N == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (j ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== o || w !== E) && yf(t, h, o, E)),
        (sn = !1));
      var D = t.memoizedState;
      ((h.state = D),
        os(t, o, h, a),
        (w = t.memoizedState),
        v !== o || D !== w || Je.current || sn
          ? (typeof N == "function" && (vl(t, r, N, o), (w = t.memoizedState)),
            (v = sn || pf(t, r, v, o, D, w, E))
              ? (j ||
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
            (h.context = E),
            (o = v))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), (o = !1)));
    } else {
      ((h = t.stateNode),
        Wc(e, t),
        (v = t.memoizedProps),
        (E = t.type === t.elementType ? v : Ct(t.type, v)),
        (h.props = E),
        (j = t.pendingProps),
        (D = h.context),
        (w = r.contextType),
        typeof w == "object" && w !== null
          ? (w = mt(w))
          : ((w = be(r) ? wn : Be.current), (w = qn(t, w))));
      var U = r.getDerivedStateFromProps;
      ((N = typeof U == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== j || D !== w) && yf(t, h, o, w)),
        (sn = !1),
        (D = t.memoizedState),
        (h.state = D),
        os(t, o, h, a));
      var G = t.memoizedState;
      v !== j || D !== G || Je.current || sn
        ? (typeof U == "function" && (vl(t, r, U, o), (G = t.memoizedState)),
          (E = sn || pf(t, r, E, o, D, G, w) || !1)
            ? (N ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, G, w),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, G, w)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (v === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = G)),
          (h.props = o),
          (h.state = G),
          (h.context = w),
          (o = E))
        : (typeof h.componentDidUpdate != "function" ||
            (v === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Pl(e, t, r, o, u, a);
  }
  function Pl(e, t, r, o, a, u) {
    Ef(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return (a && Lc(t, r, !1), $t(e, t, u));
    ((o = t.stateNode), (Uy.current = t));
    var v = h && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = tr(t, e.child, null, u)), (t.child = tr(t, null, v, u)))
        : Ye(e, t, v, u),
      (t.memoizedState = o.state),
      a && Lc(t, r, !0),
      t.child
    );
  }
  function Rf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Mc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Mc(e, t.context, !1),
      ol(e, t.containerInfo));
  }
  function Mf(e, t, r, o, a) {
    return (er(), bo(a), (t.flags |= 256), Ye(e, t, r, o), t.child);
  }
  var Tl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Df(e, t, r) {
    var o = t.pendingProps,
      a = ke.current,
      u = !1,
      h = (t.flags & 128) !== 0,
      v;
    if (
      ((v = h) || (v = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      v ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (a |= 1),
      me(ke, a & 1),
      e === null)
    )
      return (
        Jo(t),
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
                  : (u = As(h, o, 0, null)),
                (e = Dn(e, o, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Cl(r)),
                (t.memoizedState = Tl),
                e)
              : El(t, h))
      );
    if (((a = e.memoizedState), a !== null && ((v = a.dehydrated), v !== null)))
      return Wy(e, t, h, o, v, a, r);
    if (u) {
      ((u = o.fallback), (h = t.mode), (a = e.child), (v = a.sibling));
      var w = { mode: "hidden", children: o.children };
      return (
        (h & 1) === 0 && t.child !== a
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = w), (t.deletions = null))
          : ((o = dn(a, w)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
        v !== null ? (u = dn(v, u)) : ((u = Dn(u, h, r, null)), (u.flags |= 2)),
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
        (t.memoizedState = Tl),
        o
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (o = dn(u, { mode: "visible", children: o.children })),
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
  function El(e, t) {
    return (
      (t = As({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ps(e, t, r, o) {
    return (
      o !== null && bo(o),
      tr(t, e.child, null, r),
      (e = El(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Wy(e, t, r, o, a, u, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = wl(Error(s(422)))), ps(e, t, h, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = o.fallback),
            (a = t.mode),
            (o = As({ mode: "visible", children: o.children }, a, 0, null)),
            (u = Dn(u, a, h, null)),
            (u.flags |= 2),
            (o.return = t),
            (u.return = t),
            (o.sibling = u),
            (t.child = o),
            (t.mode & 1) !== 0 && tr(t, e.child, null, h),
            (t.child.memoizedState = Cl(h)),
            (t.memoizedState = Tl),
            u);
    if ((t.mode & 1) === 0) return ps(e, t, h, null);
    if (a.data === "$!") {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var v = o.dgst;
      return ((o = v), (u = Error(s(419))), (o = wl(u, o, void 0)), ps(e, t, h, o));
    }
    if (((v = (h & e.childLanes) !== 0), et || v)) {
      if (((o = _e), o !== null)) {
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
          a !== 0 && a !== u.retryLane && ((u.retryLane = a), Ut(e, a), Rt(o, e, a, -1)));
      }
      return (Wl(), (o = wl(Error(s(421)))), ps(e, t, h, o));
    }
    return a.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = tg.bind(null, e)), (a._reactRetry = t), null)
      : ((e = u.treeContext),
        (at = en(a.nextSibling)),
        (lt = t),
        (Se = !0),
        (Tt = null),
        e !== null &&
          ((ht[pt++] = zt),
          (ht[pt++] = Bt),
          (ht[pt++] = Sn),
          (zt = e.id),
          (Bt = e.overflow),
          (Sn = t)),
        (t = El(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Lf(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), rl(e.return, t, r));
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
  function Nf(e, t, r) {
    var o = t.pendingProps,
      a = o.revealOrder,
      u = o.tail;
    if ((Ye(e, t, o.children, r), (o = ke.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Lf(e, r, t);
          else if (e.tag === 19) Lf(e, r, t);
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
    if ((me(ke, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (r = t.child, a = null; r !== null;)
            ((e = r.alternate), e !== null && ls(e) === null && (a = r), (r = r.sibling));
          ((r = a),
            r === null ? ((a = t.child), (t.child = null)) : ((a = r.sibling), (r.sibling = null)),
            Al(t, !1, a, r, u));
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null;) {
            if (((e = a.alternate), e !== null && ls(e) === null)) {
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
  function ms(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function $t(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (En |= t.lanes), (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, r = dn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;)
        ((e = e.sibling), (r = r.sibling = dn(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function $y(e, t, r) {
    switch (t.tag) {
      case 3:
        (Rf(t), er());
        break;
      case 5:
        Kc(t);
        break;
      case 1:
        be(t.type) && qi(t);
        break;
      case 4:
        ol(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value;
        (me(rs, o._currentValue), (o._currentValue = a));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (me(ke, ke.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Df(e, t, r)
              : (me(ke, ke.current & 1), (e = $t(e, t, r)), e !== null ? e.sibling : null);
        me(ke, ke.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return Nf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          me(ke, ke.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Cf(e, t, r));
    }
    return $t(e, t, r);
  }
  var Vf, Rl, jf, _f;
  ((Vf = function (e, t) {
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
    (Rl = function () {}),
    (jf = function (e, t, r, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        ((e = t.stateNode), Tn(Nt.current));
        var u = null;
        switch (r) {
          case "input":
            ((a = no(e, a)), (o = no(e, o)), (u = []));
            break;
          case "select":
            ((a = $({}, a, { value: void 0 })), (o = $({}, o, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((a = so(e, a)), (o = so(e, o)), (u = []));
            break;
          default:
            typeof a.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Yi);
        }
        lo(r, o);
        var h;
        r = null;
        for (E in a)
          if (!o.hasOwnProperty(E) && a.hasOwnProperty(E) && a[E] != null)
            if (E === "style") {
              var v = a[E];
              for (h in v) v.hasOwnProperty(h) && (r || (r = {}), (r[h] = ""));
            } else
              E !== "dangerouslySetInnerHTML" &&
                E !== "children" &&
                E !== "suppressContentEditableWarning" &&
                E !== "suppressHydrationWarning" &&
                E !== "autoFocus" &&
                (c.hasOwnProperty(E) ? u || (u = []) : (u = u || []).push(E, null));
        for (E in o) {
          var w = o[E];
          if (
            ((v = a != null ? a[E] : void 0),
            o.hasOwnProperty(E) && w !== v && (w != null || v != null))
          )
            if (E === "style")
              if (v) {
                for (h in v)
                  !v.hasOwnProperty(h) ||
                    (w && w.hasOwnProperty(h)) ||
                    (r || (r = {}), (r[h] = ""));
                for (h in w) w.hasOwnProperty(h) && v[h] !== w[h] && (r || (r = {}), (r[h] = w[h]));
              } else (r || (u || (u = []), u.push(E, r)), (r = w));
            else
              E === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (v = v ? v.__html : void 0),
                  w != null && v !== w && (u = u || []).push(E, w))
                : E === "children"
                  ? (typeof w != "string" && typeof w != "number") || (u = u || []).push(E, "" + w)
                  : E !== "suppressContentEditableWarning" &&
                    E !== "suppressHydrationWarning" &&
                    (c.hasOwnProperty(E)
                      ? (w != null && E === "onScroll" && ge("scroll", e), u || v === w || (u = []))
                      : (u = u || []).push(E, w));
        }
        r && (u = u || []).push("style", r);
        var E = u;
        (t.updateQueue = E) && (t.flags |= 4);
      }
    }),
    (_f = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    }));
  function ei(e, t) {
    if (!Se)
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
  function We(e) {
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
  function Hy(e, t, r) {
    var o = t.pendingProps;
    switch ((Zo(t), t.tag)) {
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
        return (be(t.type) && Zi(), We(t), null);
      case 3:
        return (
          (o = t.stateNode),
          ir(),
          ve(Je),
          ve(Be),
          ul(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (ts(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Tt !== null && (zl(Tt), (Tt = null)))),
          Rl(e, t),
          We(t),
          null
        );
      case 5:
        ll(t);
        var a = Tn(Xr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (jf(e, t, r, o, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (We(t), null);
          }
          if (((e = Tn(Nt.current)), ts(t))) {
            ((o = t.stateNode), (r = t.type));
            var u = t.memoizedProps;
            switch (((o[Lt] = t), (o[Hr] = u), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                (ge("cancel", o), ge("close", o));
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", o);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Ur.length; a++) ge(Ur[a], o);
                break;
              case "source":
                ge("error", o);
                break;
              case "img":
              case "image":
              case "link":
                (ge("error", o), ge("load", o));
                break;
              case "details":
                ge("toggle", o);
                break;
              case "input":
                (pu(o, u), ge("invalid", o));
                break;
              case "select":
                ((o._wrapperState = { wasMultiple: !!u.multiple }), ge("invalid", o));
                break;
              case "textarea":
                (gu(o, u), ge("invalid", o));
            }
            (lo(r, u), (a = null));
            for (var h in u)
              if (u.hasOwnProperty(h)) {
                var v = u[h];
                h === "children"
                  ? typeof v == "string"
                    ? o.textContent !== v &&
                      (u.suppressHydrationWarning !== !0 && Qi(o.textContent, v, e),
                      (a = ["children", v]))
                    : typeof v == "number" &&
                      o.textContent !== "" + v &&
                      (u.suppressHydrationWarning !== !0 && Qi(o.textContent, v, e),
                      (a = ["children", "" + v]))
                  : c.hasOwnProperty(h) && v != null && h === "onScroll" && ge("scroll", o);
              }
            switch (r) {
              case "input":
                (Ti(o), yu(o, u, !0));
                break;
              case "textarea":
                (Ti(o), xu(o));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (o.onclick = Yi);
            }
            ((o = a), (t.updateQueue = o), o !== null && (t.flags |= 4));
          } else {
            ((h = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = wu(r)),
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
              (e[Lt] = t),
              (e[Hr] = o),
              Vf(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = ao(r, o)), r)) {
                case "dialog":
                  (ge("cancel", e), ge("close", e), (a = o));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ge("load", e), (a = o));
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Ur.length; a++) ge(Ur[a], e);
                  a = o;
                  break;
                case "source":
                  (ge("error", e), (a = o));
                  break;
                case "img":
                case "image":
                case "link":
                  (ge("error", e), ge("load", e), (a = o));
                  break;
                case "details":
                  (ge("toggle", e), (a = o));
                  break;
                case "input":
                  (pu(e, o), (a = no(e, o)), ge("invalid", e));
                  break;
                case "option":
                  a = o;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (a = $({}, o, { value: void 0 })),
                    ge("invalid", e));
                  break;
                case "textarea":
                  (gu(e, o), (a = so(e, o)), ge("invalid", e));
                  break;
                default:
                  a = o;
              }
              (lo(r, a), (v = a));
              for (u in v)
                if (v.hasOwnProperty(u)) {
                  var w = v[u];
                  u === "style"
                    ? Pu(e, w)
                    : u === "dangerouslySetInnerHTML"
                      ? ((w = w ? w.__html : void 0), w != null && Su(e, w))
                      : u === "children"
                        ? typeof w == "string"
                          ? (r !== "textarea" || w !== "") && kr(e, w)
                          : typeof w == "number" && kr(e, "" + w)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (c.hasOwnProperty(u)
                            ? w != null && u === "onScroll" && ge("scroll", e)
                            : w != null && K(e, u, w, h));
                }
              switch (r) {
                case "input":
                  (Ti(e), yu(e, o, !1));
                  break;
                case "textarea":
                  (Ti(e), xu(e));
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + de(o.value));
                  break;
                case "select":
                  ((e.multiple = !!o.multiple),
                    (u = o.value),
                    u != null
                      ? zn(e, !!o.multiple, u, !1)
                      : o.defaultValue != null && zn(e, !!o.multiple, o.defaultValue, !0));
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Yi);
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
        return (We(t), null);
      case 6:
        if (e && t.stateNode != null) _f(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((r = Tn(Xr.current)), Tn(Nt.current), ts(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[Lt] = t),
              (u = o.nodeValue !== r) && ((e = lt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Qi(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Qi(o.nodeValue, r, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
              (o[Lt] = t),
              (t.stateNode = o));
        }
        return (We(t), null);
      case 13:
        if (
          (ve(ke),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && at !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Ic(), er(), (t.flags |= 98560), (u = !1));
          else if (((u = ts(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(s(317));
              u[Lt] = t;
            } else (er(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (We(t), (u = !1));
          } else (Tt !== null && (zl(Tt), (Tt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ke.current & 1) !== 0 ? Ve === 0 && (Ve = 3) : Wl())),
            t.updateQueue !== null && (t.flags |= 4),
            We(t),
            null);
      case 4:
        return (ir(), Rl(e, t), e === null && Wr(t.stateNode.containerInfo), We(t), null);
      case 10:
        return (nl(t.type._context), We(t), null);
      case 17:
        return (be(t.type) && Zi(), We(t), null);
      case 19:
        if ((ve(ke), (u = t.memoizedState), u === null)) return (We(t), null);
        if (((o = (t.flags & 128) !== 0), (h = u.rendering), h === null))
          if (o) ei(u, !1);
          else {
            if (Ve !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((h = ls(e)), h !== null)) {
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
                  return (me(ke, (ke.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Re() > ar &&
              ((t.flags |= 128), (o = !0), ei(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = ls(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                ei(u, !0),
                u.tail === null && u.tailMode === "hidden" && !h.alternate && !Se)
              )
                return (We(t), null);
            } else
              2 * Re() - u.renderingStartTime > ar &&
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
            (u.renderingStartTime = Re()),
            (t.sibling = null),
            (r = ke.current),
            me(ke, o ? (r & 1) | 2 : r & 1),
            t)
          : (We(t), null);
      case 22:
      case 23:
        return (
          Ul(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (ut & 1073741824) !== 0 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
  function Ky(e, t) {
    switch ((Zo(t), t.tag)) {
      case 1:
        return (
          be(t.type) && Zi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ir(),
          ve(Je),
          ve(Be),
          ul(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ll(t), null);
      case 13:
        if ((ve(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          er();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ve(ke), null);
      case 4:
        return (ir(), null);
      case 10:
        return (nl(t.type._context), null);
      case 22:
      case 23:
        return (Ul(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ys = !1,
    $e = !1,
    Gy = typeof WeakSet == "function" ? WeakSet : Set,
    H = null;
  function or(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (o) {
          Ee(e, t, o);
        }
      else r.current = null;
  }
  function Ml(e, t, r) {
    try {
      r();
    } catch (o) {
      Ee(e, t, o);
    }
  }
  var Ff = !1;
  function Qy(e, t) {
    if (((Uo = Fi), (e = hc()), Vo(e))) {
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
              w = -1,
              E = 0,
              N = 0,
              j = e,
              D = null;
            t: for (;;) {
              for (
                var U;
                j !== r || (a !== 0 && j.nodeType !== 3) || (v = h + a),
                  j !== u || (o !== 0 && j.nodeType !== 3) || (w = h + o),
                  j.nodeType === 3 && (h += j.nodeValue.length),
                  (U = j.firstChild) !== null;
              )
                ((D = j), (j = U));
              for (;;) {
                if (j === e) break t;
                if (
                  (D === r && ++E === a && (v = h),
                  D === u && ++N === o && (w = h),
                  (U = j.nextSibling) !== null)
                )
                  break;
                ((j = D), (D = j.parentNode));
              }
              j = U;
            }
            r = v === -1 || w === -1 ? null : { start: v, end: w };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Wo = { focusedElem: e, selectionRange: r }, Fi = !1, H = t; H !== null;)
      if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (H = e));
      else
        for (; H !== null;) {
          t = H;
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
                      Me = G.memoizedState,
                      T = t.stateNode,
                      S = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Q : Ct(t.type, Q),
                        Me,
                      );
                    T.__reactInternalSnapshotBeforeUpdate = S;
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
            Ee(t, t.return, F);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (H = e));
            break;
          }
          H = t.return;
        }
    return ((G = Ff), (Ff = !1), G);
  }
  function ti(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var a = (o = o.next);
      do {
        if ((a.tag & e) === e) {
          var u = a.destroy;
          ((a.destroy = void 0), u !== void 0 && Ml(t, r, u));
        }
        a = a.next;
      } while (a !== o);
    }
  }
  function gs(e, t) {
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
  function Dl(e) {
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
  function If(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), If(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Lt], delete t[Hr], delete t[Go], delete t[My], delete t[Dy])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Of(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function zf(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Of(e.return)) return null;
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
            r != null || t.onclick !== null || (t.onclick = Yi)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Ll(e, t, r), e = e.sibling; e !== null;) (Ll(e, t, r), (e = e.sibling));
  }
  function Nl(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Nl(e, t, r), e = e.sibling; e !== null;) (Nl(e, t, r), (e = e.sibling));
  }
  var Ie = null,
    Et = !1;
  function ln(e, t, r) {
    for (r = r.child; r !== null;) (Bf(e, t, r), (r = r.sibling));
  }
  function Bf(e, t, r) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(Di, r);
      } catch {}
    switch (r.tag) {
      case 5:
        $e || or(r, t);
      case 6:
        var o = Ie,
          a = Et;
        ((Ie = null),
          ln(e, t, r),
          (Ie = o),
          (Et = a),
          Ie !== null &&
            (Et
              ? ((e = Ie),
                (r = r.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
              : Ie.removeChild(r.stateNode)));
        break;
      case 18:
        Ie !== null &&
          (Et
            ? ((e = Ie),
              (r = r.stateNode),
              e.nodeType === 8 ? Ko(e.parentNode, r) : e.nodeType === 1 && Ko(e, r),
              Vr(e))
            : Ko(Ie, r.stateNode));
        break;
      case 4:
        ((o = Ie),
          (a = Et),
          (Ie = r.stateNode.containerInfo),
          (Et = !0),
          ln(e, t, r),
          (Ie = o),
          (Et = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$e && ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          a = o = o.next;
          do {
            var u = a,
              h = u.destroy;
            ((u = u.tag),
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Ml(r, t, h),
              (a = a.next));
          } while (a !== o);
        }
        ln(e, t, r);
        break;
      case 1:
        if (!$e && (or(r, t), (o = r.stateNode), typeof o.componentWillUnmount == "function"))
          try {
            ((o.props = r.memoizedProps), (o.state = r.memoizedState), o.componentWillUnmount());
          } catch (v) {
            Ee(r, t, v);
          }
        ln(e, t, r);
        break;
      case 21:
        ln(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? (($e = (o = $e) || r.memoizedState !== null), ln(e, t, r), ($e = o))
          : ln(e, t, r);
        break;
      default:
        ln(e, t, r);
    }
  }
  function Uf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Gy()),
        t.forEach(function (o) {
          var a = ng.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(a, a));
        }));
    }
  }
  function At(e, t) {
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
          (Bf(u, h, a), (Ie = null), (Et = !1));
          var w = a.alternate;
          (w !== null && (w.return = null), (a.return = null));
        } catch (E) {
          Ee(a, t, E);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (Wf(t, e), (t = t.sibling));
  }
  function Wf(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((At(t, e), jt(e), o & 4)) {
          try {
            (ti(3, e, e.return), gs(3, e));
          } catch (Q) {
            Ee(e, e.return, Q);
          }
          try {
            ti(5, e, e.return);
          } catch (Q) {
            Ee(e, e.return, Q);
          }
        }
        break;
      case 1:
        (At(t, e), jt(e), o & 512 && r !== null && or(r, r.return));
        break;
      case 5:
        if ((At(t, e), jt(e), o & 512 && r !== null && or(r, r.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            kr(a, "");
          } catch (Q) {
            Ee(e, e.return, Q);
          }
        }
        if (o & 4 && ((a = e.stateNode), a != null)) {
          var u = e.memoizedProps,
            h = r !== null ? r.memoizedProps : u,
            v = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              (v === "input" && u.type === "radio" && u.name != null && mu(a, u), ao(v, h));
              var E = ao(v, u);
              for (h = 0; h < w.length; h += 2) {
                var N = w[h],
                  j = w[h + 1];
                N === "style"
                  ? Pu(a, j)
                  : N === "dangerouslySetInnerHTML"
                    ? Su(a, j)
                    : N === "children"
                      ? kr(a, j)
                      : K(a, N, j, E);
              }
              switch (v) {
                case "input":
                  ro(a, u);
                  break;
                case "textarea":
                  vu(a, u);
                  break;
                case "select":
                  var D = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!u.multiple;
                  var U = u.value;
                  U != null
                    ? zn(a, !!u.multiple, U, !1)
                    : D !== !!u.multiple &&
                      (u.defaultValue != null
                        ? zn(a, !!u.multiple, u.defaultValue, !0)
                        : zn(a, !!u.multiple, u.multiple ? [] : "", !1));
              }
              a[Hr] = u;
            } catch (Q) {
              Ee(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((At(t, e), jt(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((a = e.stateNode), (u = e.memoizedProps));
          try {
            a.nodeValue = u;
          } catch (Q) {
            Ee(e, e.return, Q);
          }
        }
        break;
      case 3:
        if ((At(t, e), jt(e), o & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            Vr(t.containerInfo);
          } catch (Q) {
            Ee(e, e.return, Q);
          }
        break;
      case 4:
        (At(t, e), jt(e));
        break;
      case 13:
        (At(t, e),
          jt(e),
          (a = e.child),
          a.flags & 8192 &&
            ((u = a.memoizedState !== null),
            (a.stateNode.isHidden = u),
            !u || (a.alternate !== null && a.alternate.memoizedState !== null) || (_l = Re())),
          o & 4 && Uf(e));
        break;
      case 22:
        if (
          ((N = r !== null && r.memoizedState !== null),
          e.mode & 1 ? (($e = (E = $e) || N), At(t, e), ($e = E)) : At(t, e),
          jt(e),
          o & 8192)
        ) {
          if (
            ((E = e.memoizedState !== null), (e.stateNode.isHidden = E) && !N && (e.mode & 1) !== 0)
          )
            for (H = e, N = e.child; N !== null;) {
              for (j = H = N; H !== null;) {
                switch (((D = H), (U = D.child), D.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ti(4, D, D.return);
                    break;
                  case 1:
                    or(D, D.return);
                    var G = D.stateNode;
                    if (typeof G.componentWillUnmount == "function") {
                      ((o = D), (r = D.return));
                      try {
                        ((t = o),
                          (G.props = t.memoizedProps),
                          (G.state = t.memoizedState),
                          G.componentWillUnmount());
                      } catch (Q) {
                        Ee(o, r, Q);
                      }
                    }
                    break;
                  case 5:
                    or(D, D.return);
                    break;
                  case 22:
                    if (D.memoizedState !== null) {
                      Kf(j);
                      continue;
                    }
                }
                U !== null ? ((U.return = D), (H = U)) : Kf(j);
              }
              N = N.sibling;
            }
          e: for (N = null, j = e; ;) {
            if (j.tag === 5) {
              if (N === null) {
                N = j;
                try {
                  ((a = j.stateNode),
                    E
                      ? ((u = a.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((v = j.stateNode),
                        (w = j.memoizedProps.style),
                        (h = w != null && w.hasOwnProperty("display") ? w.display : null),
                        (v.style.display = ku("display", h))));
                } catch (Q) {
                  Ee(e, e.return, Q);
                }
              }
            } else if (j.tag === 6) {
              if (N === null)
                try {
                  j.stateNode.nodeValue = E ? "" : j.memoizedProps;
                } catch (Q) {
                  Ee(e, e.return, Q);
                }
            } else if (
              ((j.tag !== 22 && j.tag !== 23) || j.memoizedState === null || j === e) &&
              j.child !== null
            ) {
              ((j.child.return = j), (j = j.child));
              continue;
            }
            if (j === e) break e;
            for (; j.sibling === null;) {
              if (j.return === null || j.return === e) break e;
              (N === j && (N = null), (j = j.return));
            }
            (N === j && (N = null), (j.sibling.return = j.return), (j = j.sibling));
          }
        }
        break;
      case 19:
        (At(t, e), jt(e), o & 4 && Uf(e));
        break;
      case 21:
        break;
      default:
        (At(t, e), jt(e));
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null;) {
            if (Of(r)) {
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
            var u = zf(e);
            Nl(e, u, a);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              v = zf(e);
            Ll(e, v, h);
            break;
          default:
            throw Error(s(161));
        }
      } catch (w) {
        Ee(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Yy(e, t, r) {
    ((H = e), $f(e));
  }
  function $f(e, t, r) {
    for (var o = (e.mode & 1) !== 0; H !== null;) {
      var a = H,
        u = a.child;
      if (a.tag === 22 && o) {
        var h = a.memoizedState !== null || ys;
        if (!h) {
          var v = a.alternate,
            w = (v !== null && v.memoizedState !== null) || $e;
          v = ys;
          var E = $e;
          if (((ys = h), ($e = w) && !E))
            for (H = a; H !== null;)
              ((h = H),
                (w = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Gf(a)
                  : w !== null
                    ? ((w.return = h), (H = w))
                    : Gf(a));
          for (; u !== null;) ((H = u), $f(u), (u = u.sibling));
          ((H = a), (ys = v), ($e = E));
        }
        Hf(e);
      } else (a.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = a), (H = u)) : Hf(e);
    }
  }
  function Hf(e) {
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
                $e || gs(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !$e)
                  if (r === null) o.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type ? r.memoizedProps : Ct(t.type, r.memoizedProps);
                    o.componentDidUpdate(a, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = t.updateQueue;
                u !== null && Hc(t, u, o);
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
                  Hc(t, h, r);
                }
                break;
              case 5:
                var v = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = v;
                  var w = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && r.focus();
                      break;
                    case "img":
                      w.src && (r.src = w.src);
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
                  var E = t.alternate;
                  if (E !== null) {
                    var N = E.memoizedState;
                    if (N !== null) {
                      var j = N.dehydrated;
                      j !== null && Vr(j);
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
          $e || (t.flags & 512 && Dl(t));
        } catch (D) {
          Ee(t, t.return, D);
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
  function Kf(e) {
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
  function Gf(e) {
    for (; H !== null;) {
      var t = H;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              gs(4, t);
            } catch (w) {
              Ee(t, r, w);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var a = t.return;
              try {
                o.componentDidMount();
              } catch (w) {
                Ee(t, a, w);
              }
            }
            var u = t.return;
            try {
              Dl(t);
            } catch (w) {
              Ee(t, u, w);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Dl(t);
            } catch (w) {
              Ee(t, h, w);
            }
        }
      } catch (w) {
        Ee(t, t.return, w);
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
  var Xy = Math.ceil,
    vs = X.ReactCurrentDispatcher,
    Vl = X.ReactCurrentOwner,
    gt = X.ReactCurrentBatchConfig,
    ae = 0,
    _e = null,
    Le = null,
    Oe = 0,
    ut = 0,
    lr = tn(0),
    Ve = 0,
    ni = null,
    En = 0,
    xs = 0,
    jl = 0,
    ri = null,
    tt = null,
    _l = 0,
    ar = 1 / 0,
    Ht = null,
    ws = !1,
    Fl = null,
    an = null,
    Ss = !1,
    un = null,
    ks = 0,
    ii = 0,
    Il = null,
    Ps = -1,
    Ts = 0;
  function Xe() {
    return (ae & 6) !== 0 ? Re() : Ps !== -1 ? Ps : (Ps = Re());
  }
  function cn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && Oe !== 0
        ? Oe & -Oe
        : Ny.transition !== null
          ? (Ts === 0 && (Ts = Ou()), Ts)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qu(e.type))), e);
  }
  function Rt(e, t, r, o) {
    if (50 < ii) throw ((ii = 0), (Il = null), Error(s(185)));
    (Rr(e, r, o),
      ((ae & 2) === 0 || e !== _e) &&
        (e === _e && ((ae & 2) === 0 && (xs |= r), Ve === 4 && fn(e, Oe)),
        nt(e, o),
        r === 1 && ae === 0 && (t.mode & 1) === 0 && ((ar = Re() + 500), Ji && rn())));
  }
  function nt(e, t) {
    var r = e.callbackNode;
    Nm(e, t);
    var o = Vi(e, e === _e ? Oe : 0);
    if (o === 0) (r !== null && _u(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && _u(r), t === 1))
        (e.tag === 0 ? Ly(Yf.bind(null, e)) : Nc(Yf.bind(null, e)),
          Ay(function () {
            (ae & 6) === 0 && rn();
          }),
          (r = null));
      else {
        switch (zu(o)) {
          case 1:
            r = yo;
            break;
          case 4:
            r = Fu;
            break;
          case 16:
            r = Mi;
            break;
          case 536870912:
            r = Iu;
            break;
          default:
            r = Mi;
        }
        r = nd(r, Qf.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function Qf(e, t) {
    if (((Ps = -1), (Ts = 0), (ae & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (ur() && e.callbackNode !== r) return null;
    var o = Vi(e, e === _e ? Oe : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Cs(e, o);
    else {
      t = o;
      var a = ae;
      ae |= 2;
      var u = Zf();
      (_e !== e || Oe !== t) && ((Ht = null), (ar = Re() + 500), Rn(e, t));
      do
        try {
          Jy();
          break;
        } catch (v) {
          Xf(e, v);
        }
      while (!0);
      (tl(), (vs.current = u), (ae = a), Le !== null ? (t = 0) : ((_e = null), (Oe = 0), (t = Ve)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = go(e)), a !== 0 && ((o = a), (t = Ol(e, a)))), t === 1))
        throw ((r = ni), Rn(e, 0), fn(e, o), nt(e, Re()), r);
      if (t === 6) fn(e, o);
      else {
        if (
          ((a = e.current.alternate),
          (o & 30) === 0 &&
            !Zy(a) &&
            ((t = Cs(e, o)),
            t === 2 && ((u = go(e)), u !== 0 && ((o = u), (t = Ol(e, u)))),
            t === 1))
        )
          throw ((r = ni), Rn(e, 0), fn(e, o), nt(e, Re()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Mn(e, tt, Ht);
            break;
          case 3:
            if ((fn(e, o), (o & 130023424) === o && ((t = _l + 500 - Re()), 10 < t))) {
              if (Vi(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                (Xe(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = Ho(Mn.bind(null, e, tt, Ht), t);
              break;
            }
            Mn(e, tt, Ht);
            break;
          case 4:
            if ((fn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, a = -1; 0 < o;) {
              var h = 31 - kt(o);
              ((u = 1 << h), (h = t[h]), h > a && (a = h), (o &= ~u));
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
                            : 1960 * Xy(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Ho(Mn.bind(null, e, tt, Ht), o);
              break;
            }
            Mn(e, tt, Ht);
            break;
          case 5:
            Mn(e, tt, Ht);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (nt(e, Re()), e.callbackNode === r ? Qf.bind(null, e) : null);
  }
  function Ol(e, t) {
    var r = ri;
    return (
      e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
      (e = Cs(e, t)),
      e !== 2 && ((t = tt), (tt = r), t !== null && zl(t)),
      e
    );
  }
  function zl(e) {
    tt === null ? (tt = e) : tt.push.apply(tt, e);
  }
  function Zy(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var a = r[o],
              u = a.getSnapshot;
            a = a.value;
            try {
              if (!Pt(u(), a)) return !1;
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
  function fn(e, t) {
    for (
      t &= ~jl, t &= ~xs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - kt(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function Yf(e) {
    if ((ae & 6) !== 0) throw Error(s(327));
    ur();
    var t = Vi(e, 0);
    if ((t & 1) === 0) return (nt(e, Re()), null);
    var r = Cs(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = go(e);
      o !== 0 && ((t = o), (r = Ol(e, o)));
    }
    if (r === 1) throw ((r = ni), Rn(e, 0), fn(e, t), nt(e, Re()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Mn(e, tt, Ht),
      nt(e, Re()),
      null
    );
  }
  function Bl(e, t) {
    var r = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      ((ae = r), ae === 0 && ((ar = Re() + 500), Ji && rn()));
    }
  }
  function An(e) {
    un !== null && un.tag === 0 && (ae & 6) === 0 && ur();
    var t = ae;
    ae |= 1;
    var r = gt.transition,
      o = he;
    try {
      if (((gt.transition = null), (he = 1), e)) return e();
    } finally {
      ((he = o), (gt.transition = r), (ae = t), (ae & 6) === 0 && rn());
    }
  }
  function Ul() {
    ((ut = lr.current), ve(lr));
  }
  function Rn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Ey(r)), Le !== null))
      for (r = Le.return; r !== null;) {
        var o = r;
        switch ((Zo(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Zi());
            break;
          case 3:
            (ir(), ve(Je), ve(Be), ul());
            break;
          case 5:
            ll(o);
            break;
          case 4:
            ir();
            break;
          case 13:
            ve(ke);
            break;
          case 19:
            ve(ke);
            break;
          case 10:
            nl(o.type._context);
            break;
          case 22:
          case 23:
            Ul();
        }
        r = r.return;
      }
    if (
      ((_e = e),
      (Le = e = dn(e.current, null)),
      (Oe = ut = t),
      (Ve = 0),
      (ni = null),
      (jl = xs = En = 0),
      (tt = ri = null),
      Pn !== null)
    ) {
      for (t = 0; t < Pn.length; t++)
        if (((r = Pn[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var a = o.next,
            u = r.pending;
          if (u !== null) {
            var h = u.next;
            ((u.next = a), (o.next = h));
          }
          r.pending = o;
        }
      Pn = null;
    }
    return e;
  }
  function Xf(e, t) {
    do {
      var r = Le;
      try {
        if ((tl(), (as.current = ds), us)) {
          for (var o = Pe.memoizedState; o !== null;) {
            var a = o.queue;
            (a !== null && (a.pending = null), (o = o.next));
          }
          us = !1;
        }
        if (
          ((Cn = 0),
          (je = Ne = Pe = null),
          (Zr = !1),
          (qr = 0),
          (Vl.current = null),
          r === null || r.return === null)
        ) {
          ((Ve = 1), (ni = t), (Le = null));
          break;
        }
        e: {
          var u = e,
            h = r.return,
            v = r,
            w = t;
          if (
            ((t = Oe),
            (v.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var E = w,
              N = v,
              j = N.tag;
            if ((N.mode & 1) === 0 && (j === 0 || j === 11 || j === 15)) {
              var D = N.alternate;
              D
                ? ((N.updateQueue = D.updateQueue),
                  (N.memoizedState = D.memoizedState),
                  (N.lanes = D.lanes))
                : ((N.updateQueue = null), (N.memoizedState = null));
            }
            var U = wf(h);
            if (U !== null) {
              ((U.flags &= -257), Sf(U, h, v, u, t), U.mode & 1 && xf(u, E, t), (t = U), (w = E));
              var G = t.updateQueue;
              if (G === null) {
                var Q = new Set();
                (Q.add(w), (t.updateQueue = Q));
              } else G.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                (xf(u, E, t), Wl());
                break e;
              }
              w = Error(s(426));
            }
          } else if (Se && v.mode & 1) {
            var Me = wf(h);
            if (Me !== null) {
              ((Me.flags & 65536) === 0 && (Me.flags |= 256), Sf(Me, h, v, u, t), bo(sr(w, v)));
              break e;
            }
          }
          ((u = w = sr(w, v)),
            Ve !== 4 && (Ve = 2),
            ri === null ? (ri = [u]) : ri.push(u),
            (u = h));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var T = gf(u, w, t);
                $c(u, T);
                break e;
              case 1:
                v = w;
                var S = u.type,
                  C = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (C !== null &&
                      typeof C.componentDidCatch == "function" &&
                      (an === null || !an.has(C))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var F = vf(u, v, t);
                  $c(u, F);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Jf(r);
      } catch (Y) {
        ((t = Y), Le === r && r !== null && (Le = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Zf() {
    var e = vs.current;
    return ((vs.current = ds), e === null ? ds : e);
  }
  function Wl() {
    ((Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4),
      _e === null || ((En & 268435455) === 0 && (xs & 268435455) === 0) || fn(_e, Oe));
  }
  function Cs(e, t) {
    var r = ae;
    ae |= 2;
    var o = Zf();
    (_e !== e || Oe !== t) && ((Ht = null), Rn(e, t));
    do
      try {
        qy();
        break;
      } catch (a) {
        Xf(e, a);
      }
    while (!0);
    if ((tl(), (ae = r), (vs.current = o), Le !== null)) throw Error(s(261));
    return ((_e = null), (Oe = 0), Ve);
  }
  function qy() {
    for (; Le !== null;) qf(Le);
  }
  function Jy() {
    for (; Le !== null && !Pm();) qf(Le);
  }
  function qf(e) {
    var t = td(e.alternate, e, ut);
    ((e.memoizedProps = e.pendingProps), t === null ? Jf(e) : (Le = t), (Vl.current = null));
  }
  function Jf(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Hy(r, t, ut)), r !== null)) {
          Le = r;
          return;
        }
      } else {
        if (((r = Ky(r, t)), r !== null)) {
          ((r.flags &= 32767), (Le = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Ve = 6), (Le = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    Ve === 0 && (Ve = 5);
  }
  function Mn(e, t, r) {
    var o = he,
      a = gt.transition;
    try {
      ((gt.transition = null), (he = 1), by(e, t, r, o));
    } finally {
      ((gt.transition = a), (he = o));
    }
    return null;
  }
  function by(e, t, r, o) {
    do ur();
    while (un !== null);
    if ((ae & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = r.lanes | r.childLanes;
    if (
      (Vm(e, u),
      e === _e && ((Le = _e = null), (Oe = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Ss ||
        ((Ss = !0),
        nd(Mi, function () {
          return (ur(), null);
        })),
      (u = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = gt.transition), (gt.transition = null));
      var h = he;
      he = 1;
      var v = ae;
      ((ae |= 4),
        (Vl.current = null),
        Qy(e, r),
        Wf(r, e),
        xy(Wo),
        (Fi = !!Uo),
        (Wo = Uo = null),
        (e.current = r),
        Yy(r),
        Tm(),
        (ae = v),
        (he = h),
        (gt.transition = u));
    } else e.current = r;
    if (
      (Ss && ((Ss = !1), (un = e), (ks = a)),
      (u = e.pendingLanes),
      u === 0 && (an = null),
      Am(r.stateNode),
      nt(e, Re()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((a = t[r]), o(a.value, { componentStack: a.stack, digest: a.digest }));
    if (ws) throw ((ws = !1), (e = Fl), (Fl = null), e);
    return (
      (ks & 1) !== 0 && e.tag !== 0 && ur(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === Il ? ii++ : ((ii = 0), (Il = e))) : (ii = 0),
      rn(),
      null
    );
  }
  function ur() {
    if (un !== null) {
      var e = zu(ks),
        t = gt.transition,
        r = he;
      try {
        if (((gt.transition = null), (he = 16 > e ? 16 : e), un === null)) var o = !1;
        else {
          if (((e = un), (un = null), (ks = 0), (ae & 6) !== 0)) throw Error(s(331));
          var a = ae;
          for (ae |= 4, H = e.current; H !== null;) {
            var u = H,
              h = u.child;
            if ((H.flags & 16) !== 0) {
              var v = u.deletions;
              if (v !== null) {
                for (var w = 0; w < v.length; w++) {
                  var E = v[w];
                  for (H = E; H !== null;) {
                    var N = H;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ti(8, N, u);
                    }
                    var j = N.child;
                    if (j !== null) ((j.return = N), (H = j));
                    else
                      for (; H !== null;) {
                        N = H;
                        var D = N.sibling,
                          U = N.return;
                        if ((If(N), N === E)) {
                          H = null;
                          break;
                        }
                        if (D !== null) {
                          ((D.return = U), (H = D));
                          break;
                        }
                        H = U;
                      }
                  }
                }
                var G = u.alternate;
                if (G !== null) {
                  var Q = G.child;
                  if (Q !== null) {
                    G.child = null;
                    do {
                      var Me = Q.sibling;
                      ((Q.sibling = null), (Q = Me));
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
                var T = u.sibling;
                if (T !== null) {
                  ((T.return = u.return), (H = T));
                  break e;
                }
                H = u.return;
              }
          }
          var S = e.current;
          for (H = S; H !== null;) {
            h = H;
            var C = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && C !== null) ((C.return = h), (H = C));
            else
              e: for (h = S; H !== null;) {
                if (((v = H), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gs(9, v);
                    }
                  } catch (Y) {
                    Ee(v, v.return, Y);
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
          if (((ae = a), rn(), Dt && typeof Dt.onPostCommitFiberRoot == "function"))
            try {
              Dt.onPostCommitFiberRoot(Di, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        ((he = r), (gt.transition = t));
      }
    }
    return !1;
  }
  function bf(e, t, r) {
    ((t = sr(r, t)),
      (t = gf(e, t, 1)),
      (e = on(e, t, 1)),
      (t = Xe()),
      e !== null && (Rr(e, 1, t), nt(e, t)));
  }
  function Ee(e, t, r) {
    if (e.tag === 3) bf(e, e, r);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          bf(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" && (an === null || !an.has(o)))
          ) {
            ((e = sr(r, e)),
              (e = vf(t, e, 1)),
              (t = on(t, e, 1)),
              (e = Xe()),
              t !== null && (Rr(t, 1, e), nt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function eg(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = Xe()),
      (e.pingedLanes |= e.suspendedLanes & r),
      _e === e &&
        (Oe & r) === r &&
        (Ve === 4 || (Ve === 3 && (Oe & 130023424) === Oe && 500 > Re() - _l)
          ? Rn(e, 0)
          : (jl |= r)),
      nt(e, t));
  }
  function ed(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ni), (Ni <<= 1), (Ni & 130023424) === 0 && (Ni = 4194304)));
    var r = Xe();
    ((e = Ut(e, t)), e !== null && (Rr(e, t, r), nt(e, r)));
  }
  function tg(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), ed(e, r));
  }
  function ng(e, t) {
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
    (o !== null && o.delete(t), ed(e, r));
  }
  var td;
  td = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Je.current) et = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((et = !1), $y(e, t, r));
        et = (e.flags & 131072) !== 0;
      }
    else ((et = !1), Se && (t.flags & 1048576) !== 0 && Vc(t, es, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (ms(e, t), (e = t.pendingProps));
        var a = qn(t, Be.current);
        (rr(t, r), (a = dl(null, t, o, e, a, r)));
        var u = hl();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              be(o) ? ((u = !0), qi(t)) : (u = !1),
              (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              sl(t),
              (a.updater = hs),
              (t.stateNode = a),
              (a._reactInternals = t),
              xl(t, o, e, r),
              (t = Pl(null, t, o, !0, u, r)))
            : ((t.tag = 0), Se && u && Xo(t), Ye(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (ms(e, t),
            (e = t.pendingProps),
            (a = o._init),
            (o = a(o._payload)),
            (t.type = o),
            (a = t.tag = ig(o)),
            (e = Ct(o, e)),
            a)
          ) {
            case 0:
              t = kl(null, t, o, e, r);
              break e;
            case 1:
              t = Af(null, t, o, e, r);
              break e;
            case 11:
              t = kf(null, t, o, e, r);
              break e;
            case 14:
              t = Pf(null, t, o, Ct(o.type, e), r);
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
          kl(e, t, o, a, r)
        );
      case 1:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Ct(o, a)),
          Af(e, t, o, a, r)
        );
      case 3:
        e: {
          if ((Rf(t), e === null)) throw Error(s(387));
          ((o = t.pendingProps),
            (u = t.memoizedState),
            (a = u.element),
            Wc(e, t),
            os(t, o, null, r));
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
              ((a = sr(Error(s(423)), t)), (t = Mf(e, t, o, r, a)));
              break e;
            } else if (o !== a) {
              ((a = sr(Error(s(424)), t)), (t = Mf(e, t, o, r, a)));
              break e;
            } else
              for (
                at = en(t.stateNode.containerInfo.firstChild),
                  lt = t,
                  Se = !0,
                  Tt = null,
                  r = Bc(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((er(), o === a)) {
              t = $t(e, t, r);
              break e;
            }
            Ye(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Kc(t),
          e === null && Jo(t),
          (o = t.type),
          (a = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = a.children),
          $o(o, a) ? (h = null) : u !== null && $o(o, u) && (t.flags |= 32),
          Ef(e, t),
          Ye(e, t, h, r),
          t.child
        );
      case 6:
        return (e === null && Jo(t), null);
      case 13:
        return Df(e, t, r);
      case 4:
        return (
          ol(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = tr(t, null, o, r)) : Ye(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Ct(o, a)),
          kf(e, t, o, a, r)
        );
      case 7:
        return (Ye(e, t, t.pendingProps, r), t.child);
      case 8:
        return (Ye(e, t, t.pendingProps.children, r), t.child);
      case 12:
        return (Ye(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (a = t.pendingProps),
            (u = t.memoizedProps),
            (h = a.value),
            me(rs, o._currentValue),
            (o._currentValue = h),
            u !== null)
          )
            if (Pt(u.value, h)) {
              if (u.children === a.children && !Je.current) {
                t = $t(e, t, r);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null;) {
                var v = u.dependencies;
                if (v !== null) {
                  h = u.child;
                  for (var w = v.firstContext; w !== null;) {
                    if (w.context === o) {
                      if (u.tag === 1) {
                        ((w = Wt(-1, r & -r)), (w.tag = 2));
                        var E = u.updateQueue;
                        if (E !== null) {
                          E = E.shared;
                          var N = E.pending;
                          (N === null ? (w.next = w) : ((w.next = N.next), (N.next = w)),
                            (E.pending = w));
                        }
                      }
                      ((u.lanes |= r),
                        (w = u.alternate),
                        w !== null && (w.lanes |= r),
                        rl(u.return, r, t),
                        (v.lanes |= r));
                      break;
                    }
                    w = w.next;
                  }
                } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((h = u.return), h === null)) throw Error(s(341));
                  ((h.lanes |= r),
                    (v = h.alternate),
                    v !== null && (v.lanes |= r),
                    rl(h, r, t),
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
          (Ye(e, t, a.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (o = t.pendingProps.children),
          rr(t, r),
          (a = mt(a)),
          (o = o(a)),
          (t.flags |= 1),
          Ye(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (a = Ct(o, t.pendingProps)), (a = Ct(o.type, a)), Pf(e, t, o, a, r));
      case 15:
        return Tf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Ct(o, a)),
          ms(e, t),
          (t.tag = 1),
          be(o) ? ((e = !0), qi(t)) : (e = !1),
          rr(t, r),
          mf(t, o, a),
          xl(t, o, a, r),
          Pl(null, t, o, !0, e, r)
        );
      case 19:
        return Nf(e, t, r);
      case 22:
        return Cf(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function nd(e, t) {
    return ju(e, t);
  }
  function rg(e, t, r, o) {
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
  function vt(e, t, r, o) {
    return new rg(e, t, r, o);
  }
  function $l(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ig(e) {
    if (typeof e == "function") return $l(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === it)) return 11;
      if (e === St) return 14;
    }
    return 2;
  }
  function dn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = vt(e.tag, t, e.key, e.mode)),
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
  function Es(e, t, r, o, a, u) {
    var h = 2;
    if (((o = e), typeof e == "function")) $l(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case le:
          return Dn(r.children, a, u, t);
        case Z:
          ((h = 8), (a |= 8));
          break;
        case ye:
          return ((e = vt(12, r, t, a | 2)), (e.elementType = ye), (e.lanes = u), e);
        case Ge:
          return ((e = vt(13, r, t, a)), (e.elementType = Ge), (e.lanes = u), e);
        case qe:
          return ((e = vt(19, r, t, a)), (e.elementType = qe), (e.lanes = u), e);
        case ie:
          return As(r, a, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ce:
                h = 10;
                break e;
              case Ze:
                h = 9;
                break e;
              case it:
                h = 11;
                break e;
              case St:
                h = 14;
                break e;
              case Qe:
                ((h = 16), (o = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return ((t = vt(h, r, t, a)), (t.elementType = e), (t.type = o), (t.lanes = u), t);
  }
  function Dn(e, t, r, o) {
    return ((e = vt(7, e, o, t)), (e.lanes = r), e);
  }
  function As(e, t, r, o) {
    return (
      (e = vt(22, e, o, t)),
      (e.elementType = ie),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Hl(e, t, r) {
    return ((e = vt(6, e, null, t)), (e.lanes = r), e);
  }
  function Kl(e, t, r) {
    return (
      (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function sg(e, t, r, o, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = vo(0)),
      (this.expirationTimes = vo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vo(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Gl(e, t, r, o, a, u, h, v, w) {
    return (
      (e = new sg(e, t, r, v, w)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = vt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: o,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      sl(u),
      e
    );
  }
  function og(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ee,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function rd(e) {
    if (!e) return nn;
    e = e._reactInternals;
    e: {
      if (vn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (be(t.type)) {
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
      if (be(r)) return Dc(e, r, t);
    }
    return t;
  }
  function id(e, t, r, o, a, u, h, v, w) {
    return (
      (e = Gl(r, o, !0, e, a, u, h, v, w)),
      (e.context = rd(null)),
      (r = e.current),
      (o = Xe()),
      (a = cn(r)),
      (u = Wt(o, a)),
      (u.callback = t ?? null),
      on(r, u, a),
      (e.current.lanes = a),
      Rr(e, a, o),
      nt(e, o),
      e
    );
  }
  function Rs(e, t, r, o) {
    var a = t.current,
      u = Xe(),
      h = cn(a);
    return (
      (r = rd(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Wt(u, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = on(a, t, h)),
      e !== null && (Rt(e, a, h, u), ss(e, a, h)),
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
  function sd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Ql(e, t) {
    (sd(e, t), (e = e.alternate) && sd(e, t));
  }
  function lg() {
    return null;
  }
  var od =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Yl(e) {
    this._internalRoot = e;
  }
  ((Ds.prototype.render = Yl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Rs(e, t, null, null);
    }),
    (Ds.prototype.unmount = Yl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (An(function () {
            Rs(null, e, null, null);
          }),
            (t[It] = null));
        }
      }));
  function Ds(e) {
    this._internalRoot = e;
  }
  Ds.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Wu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < qt.length && t !== 0 && t < qt[r].priority; r++);
      (qt.splice(r, 0, e), r === 0 && Ku(e));
    }
  };
  function Xl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ls(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function ld() {}
  function ag(e, t, r, o, a) {
    if (a) {
      if (typeof o == "function") {
        var u = o;
        o = function () {
          var E = Ms(h);
          u.call(E);
        };
      }
      var h = id(t, o, e, 0, null, !1, !1, "", ld);
      return (
        (e._reactRootContainer = h),
        (e[It] = h.current),
        Wr(e.nodeType === 8 ? e.parentNode : e),
        An(),
        h
      );
    }
    for (; (a = e.lastChild);) e.removeChild(a);
    if (typeof o == "function") {
      var v = o;
      o = function () {
        var E = Ms(w);
        v.call(E);
      };
    }
    var w = Gl(e, 0, !1, null, null, !1, !1, "", ld);
    return (
      (e._reactRootContainer = w),
      (e[It] = w.current),
      Wr(e.nodeType === 8 ? e.parentNode : e),
      An(function () {
        Rs(t, w, r, o);
      }),
      w
    );
  }
  function Ns(e, t, r, o, a) {
    var u = r._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof a == "function") {
        var v = a;
        a = function () {
          var w = Ms(h);
          v.call(w);
        };
      }
      Rs(t, h, e, a);
    } else h = ag(r, t, e, a, o);
    return Ms(h);
  }
  ((Bu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Ar(t.pendingLanes);
          r !== 0 && (xo(t, r | 1), nt(t, Re()), (ae & 6) === 0 && ((ar = Re() + 500), rn()));
        }
        break;
      case 13:
        (An(function () {
          var o = Ut(e, 1);
          if (o !== null) {
            var a = Xe();
            Rt(o, e, 1, a);
          }
        }),
          Ql(e, 1));
    }
  }),
    (wo = function (e) {
      if (e.tag === 13) {
        var t = Ut(e, 134217728);
        if (t !== null) {
          var r = Xe();
          Rt(t, e, 134217728, r);
        }
        Ql(e, 134217728);
      }
    }),
    (Uu = function (e) {
      if (e.tag === 13) {
        var t = cn(e),
          r = Ut(e, t);
        if (r !== null) {
          var o = Xe();
          Rt(r, e, t, o);
        }
        Ql(e, t);
      }
    }),
    (Wu = function () {
      return he;
    }),
    ($u = function (e, t) {
      var r = he;
      try {
        return ((he = e), t());
      } finally {
        he = r;
      }
    }),
    (fo = function (e, t, r) {
      switch (t) {
        case "input":
          if ((ro(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode;) r = r.parentNode;
            for (
              r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var a = Xi(o);
                if (!a) throw Error(s(90));
                (hu(o), ro(o, a));
              }
            }
          }
          break;
        case "textarea":
          vu(e, r);
          break;
        case "select":
          ((t = r.value), t != null && zn(e, !!r.multiple, t, !1));
      }
    }),
    (Au = Bl),
    (Ru = An));
  var ug = { usingClientEntryPoint: !1, Events: [Kr, Xn, Xi, Cu, Eu, Bl] },
    si = {
      findFiberByHostInstance: xn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    cg = {
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
      currentDispatcherRef: X.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Nu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: si.findFiberByHostInstance || lg,
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
        ((Di = Vs.inject(cg)), (Dt = Vs));
      } catch {}
  }
  return (
    (rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ug),
    (rt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xl(t)) throw Error(s(200));
      return og(e, t, null, r);
    }),
    (rt.createRoot = function (e, t) {
      if (!Xl(e)) throw Error(s(299));
      var r = !1,
        o = "",
        a = od;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Gl(e, 1, !1, null, null, r, !1, o, a)),
        (e[It] = t.current),
        Wr(e.nodeType === 8 ? e.parentNode : e),
        new Yl(t)
      );
    }),
    (rt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return ((e = Nu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (rt.flushSync = function (e) {
      return An(e);
    }),
    (rt.hydrate = function (e, t, r) {
      if (!Ls(t)) throw Error(s(200));
      return Ns(null, e, t, !0, r);
    }),
    (rt.hydrateRoot = function (e, t, r) {
      if (!Xl(e)) throw Error(s(405));
      var o = (r != null && r.hydratedSources) || null,
        a = !1,
        u = "",
        h = od;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (h = r.onRecoverableError)),
        (t = id(t, null, e, 1, r ?? null, a, !1, u, h)),
        (e[It] = t.current),
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
      return new Ds(t);
    }),
    (rt.render = function (e, t, r) {
      if (!Ls(t)) throw Error(s(200));
      return Ns(null, e, t, !1, r);
    }),
    (rt.unmountComponentAtNode = function (e) {
      if (!Ls(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (An(function () {
            Ns(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[It] = null));
            });
          }),
          !0)
        : !1;
    }),
    (rt.unstable_batchedUpdates = Bl),
    (rt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!Ls(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Ns(e, t, r, !1, o);
    }),
    (rt.version = "18.3.1-next-f1338f8080-20240426"),
    rt
  );
}
var md;
function vg() {
  if (md) return Jl.exports;
  md = 1;
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
  return (n(), (Jl.exports = gg()), Jl.exports);
}
var yd;
function xg() {
  if (yd) return js;
  yd = 1;
  var n = vg();
  return ((js.createRoot = n.createRoot), (js.hydrateRoot = n.hydrateRoot), js);
}
var wg = xg();
const La = z.createContext({});
function Na(n) {
  const i = z.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const Zs = z.createContext(null),
  Va = z.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
class Sg extends z.Component {
  getSnapshotBeforeUpdate(i) {
    const s = this.props.childRef.current;
    if (s && i.isPresent && !this.props.isPresent) {
      const l = this.props.sizeRef.current;
      ((l.height = s.offsetHeight || 0),
        (l.width = s.offsetWidth || 0),
        (l.top = s.offsetTop),
        (l.left = s.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function kg({ children: n, isPresent: i }) {
  const s = z.useId(),
    l = z.useRef(null),
    c = z.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: d } = z.useContext(Va);
  return (
    z.useInsertionEffect(() => {
      const { width: f, height: p, top: m, left: y } = c.current;
      if (i || !l.current || !f || !p) return;
      l.current.dataset.motionPopId = s;
      const g = document.createElement("style");
      return (
        d && (g.nonce = d),
        document.head.appendChild(g),
        g.sheet &&
          g.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            top: ${m}px !important;
            left: ${y}px !important;
          }
        `),
        () => {
          document.head.removeChild(g);
        }
      );
    }, [i]),
    A.jsx(Sg, { isPresent: i, childRef: l, sizeRef: c, children: z.cloneElement(n, { ref: l }) })
  );
}
const Pg = ({
  children: n,
  initial: i,
  isPresent: s,
  onExitComplete: l,
  custom: c,
  presenceAffectsLayout: d,
  mode: f,
}) => {
  const p = Na(Tg),
    m = z.useId(),
    y = z.useCallback(
      (x) => {
        p.set(x, !0);
        for (const k of p.values()) if (!k) return;
        l && l();
      },
      [p, l],
    ),
    g = z.useMemo(
      () => ({
        id: m,
        initial: i,
        isPresent: s,
        custom: c,
        onExitComplete: y,
        register: (x) => (p.set(x, !1), () => p.delete(x)),
      }),
      d ? [Math.random(), y] : [s, y],
    );
  return (
    z.useMemo(() => {
      p.forEach((x, k) => p.set(k, !1));
    }, [s]),
    z.useEffect(() => {
      !s && !p.size && l && l();
    }, [s]),
    f === "popLayout" && (n = A.jsx(kg, { isPresent: s, children: n })),
    A.jsx(Zs.Provider, { value: g, children: n })
  );
};
function Tg() {
  return new Map();
}
function jh(n = !0) {
  const i = z.useContext(Zs);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: l, register: c } = i,
    d = z.useId();
  z.useEffect(() => {
    n && c(d);
  }, [n]);
  const f = z.useCallback(() => n && l && l(d), [d, l, n]);
  return !s && l ? [!1, f] : [!0];
}
const _s = (n) => n.key || "";
function gd(n) {
  const i = [];
  return (
    z.Children.forEach(n, (s) => {
      z.isValidElement(s) && i.push(s);
    }),
    i
  );
}
const ja = typeof window < "u",
  _h = ja ? z.useLayoutEffect : z.useEffect,
  Cg = ({
    children: n,
    custom: i,
    initial: s = !0,
    onExitComplete: l,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: f = !1,
  }) => {
    const [p, m] = jh(f),
      y = z.useMemo(() => gd(n), [n]),
      g = f && !p ? [] : y.map(_s),
      x = z.useRef(!0),
      k = z.useRef(y),
      R = Na(() => new Map()),
      [_, M] = z.useState(y),
      [V, I] = z.useState(y);
    _h(() => {
      ((x.current = !1), (k.current = y));
      for (let X = 0; X < V.length; X++) {
        const B = _s(V[X]);
        g.includes(B) ? R.delete(B) : R.get(B) !== !0 && R.set(B, !1);
      }
    }, [V, g.length, g.join("-")]);
    const W = [];
    if (y !== _) {
      let X = [...y];
      for (let B = 0; B < V.length; B++) {
        const ee = V[B],
          le = _s(ee);
        g.includes(le) || (X.splice(B, 0, ee), W.push(ee));
      }
      (d === "wait" && W.length && (X = W), I(gd(X)), M(y));
      return;
    }
    const { forceRender: K } = z.useContext(La);
    return A.jsx(A.Fragment, {
      children: V.map((X) => {
        const B = _s(X),
          ee = f && !p ? !1 : y === V || g.includes(B),
          le = () => {
            if (R.has(B)) R.set(B, !0);
            else return;
            let Z = !0;
            (R.forEach((ye) => {
              ye || (Z = !1);
            }),
              Z && (K == null || K(), I(k.current), f && (m == null || m()), l && l()));
          };
        return A.jsx(
          Pg,
          {
            isPresent: ee,
            initial: !x.current || s ? void 0 : !1,
            custom: ee ? void 0 : i,
            presenceAffectsLayout: c,
            mode: d,
            onExitComplete: ee ? void 0 : le,
            children: X,
          },
          B,
        );
      }),
    });
  },
  ft = (n) => n;
let Fh = ft;
function _a(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const mr = (n, i, s) => {
    const l = i - n;
    return l === 0 ? 1 : (s - n) / l;
  },
  Kt = (n) => n * 1e3,
  Gt = (n) => n / 1e3,
  Eg = { useManualTiming: !1 };
function Ag(n) {
  let i = new Set(),
    s = new Set(),
    l = !1,
    c = !1;
  const d = new WeakSet();
  let f = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(y) {
    (d.has(y) && (m.schedule(y), n()), y(f));
  }
  const m = {
    schedule: (y, g = !1, x = !1) => {
      const R = x && l ? i : s;
      return (g && d.add(y), R.has(y) || R.add(y), y);
    },
    cancel: (y) => {
      (s.delete(y), d.delete(y));
    },
    process: (y) => {
      if (((f = y), l)) {
        c = !0;
        return;
      }
      ((l = !0),
        ([i, s] = [s, i]),
        i.forEach(p),
        i.clear(),
        (l = !1),
        c && ((c = !1), m.process(y)));
    },
  };
  return m;
}
const Fs = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  Rg = 40;
function Ih(n, i) {
  let s = !1,
    l = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = Fs.reduce((I, W) => ((I[W] = Ag(d)), I), {}),
    { read: p, resolveKeyframes: m, update: y, preRender: g, render: x, postRender: k } = f,
    R = () => {
      const I = performance.now();
      ((s = !1),
        (c.delta = l ? 1e3 / 60 : Math.max(Math.min(I - c.timestamp, Rg), 1)),
        (c.timestamp = I),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        y.process(c),
        g.process(c),
        x.process(c),
        k.process(c),
        (c.isProcessing = !1),
        s && i && ((l = !1), n(R)));
    },
    _ = () => {
      ((s = !0), (l = !0), c.isProcessing || n(R));
    };
  return {
    schedule: Fs.reduce((I, W) => {
      const K = f[W];
      return ((I[W] = (X, B = !1, ee = !1) => (s || _(), K.schedule(X, B, ee))), I);
    }, {}),
    cancel: (I) => {
      for (let W = 0; W < Fs.length; W++) f[Fs[W]].cancel(I);
    },
    state: c,
    steps: f,
  };
}
const {
    schedule: xe,
    cancel: mn,
    state: ze,
    steps: ta,
  } = Ih(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ft, !0),
  Oh = z.createContext({ strict: !1 }),
  vd = {
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
  yr = {};
for (const n in vd) yr[n] = { isEnabled: (i) => vd[n].some((s) => !!i[s]) };
function Mg(n) {
  for (const i in n) yr[i] = { ...yr[i], ...n[i] };
}
const Dg = new Set([
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
function $s(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    Dg.has(n)
  );
}
let zh = (n) => !$s(n);
function Lg(n) {
  n && (zh = (i) => (i.startsWith("on") ? !$s(i) : n(i)));
}
try {
  Lg(require("@emotion/is-prop-valid").default);
} catch {}
function Ng(n, i, s) {
  const l = {};
  for (const c in n)
    (c === "values" && typeof n.values == "object") ||
      ((zh(c) ||
        (s === !0 && $s(c)) ||
        (!i && !$s(c)) ||
        (n.draggable && c.startsWith("onDrag"))) &&
        (l[c] = n[c]));
  return l;
}
function Vg(n) {
  if (typeof Proxy > "u") return n;
  const i = new Map(),
    s = (...l) => n(...l);
  return new Proxy(s, {
    get: (l, c) => (c === "create" ? n : (i.has(c) || i.set(c, n(c)), i.get(c))),
  });
}
const qs = z.createContext({});
function mi(n) {
  return typeof n == "string" || Array.isArray(n);
}
function Js(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
const Fa = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Ia = ["initial", ...Fa];
function bs(n) {
  return Js(n.animate) || Ia.some((i) => mi(n[i]));
}
function Bh(n) {
  return !!(bs(n) || n.variants);
}
function jg(n, i) {
  if (bs(n)) {
    const { initial: s, animate: l } = n;
    return { initial: s === !1 || mi(s) ? s : void 0, animate: mi(l) ? l : void 0 };
  }
  return n.inherit !== !1 ? i : {};
}
function _g(n) {
  const { initial: i, animate: s } = jg(n, z.useContext(qs));
  return z.useMemo(() => ({ initial: i, animate: s }), [xd(i), xd(s)]);
}
function xd(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const Fg = Symbol.for("motionComponentSymbol");
function cr(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function Ig(n, i, s) {
  return z.useCallback(
    (l) => {
      (l && n.onMount && n.onMount(l),
        i && (l ? i.mount(l) : i.unmount()),
        s && (typeof s == "function" ? s(l) : cr(s) && (s.current = l)));
    },
    [i],
  );
}
const Oa = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Og = "framerAppearId",
  Uh = "data-" + Oa(Og),
  { schedule: za } = Ih(queueMicrotask, !1),
  Wh = z.createContext({});
function zg(n, i, s, l, c) {
  var d, f;
  const { visualElement: p } = z.useContext(qs),
    m = z.useContext(Oh),
    y = z.useContext(Zs),
    g = z.useContext(Va).reducedMotion,
    x = z.useRef(null);
  ((l = l || m.renderer),
    !x.current &&
      l &&
      (x.current = l(n, {
        visualState: i,
        parent: p,
        props: s,
        presenceContext: y,
        blockInitialAnimation: y ? y.initial === !1 : !1,
        reducedMotionConfig: g,
      })));
  const k = x.current,
    R = z.useContext(Wh);
  k && !k.projection && c && (k.type === "html" || k.type === "svg") && Bg(x.current, s, c, R);
  const _ = z.useRef(!1);
  z.useInsertionEffect(() => {
    k && _.current && k.update(s, y);
  });
  const M = s[Uh],
    V = z.useRef(
      !!M &&
        !(!((d = window.MotionHandoffIsComplete) === null || d === void 0) && d.call(window, M)) &&
        ((f = window.MotionHasOptimisedAnimation) === null || f === void 0
          ? void 0
          : f.call(window, M)),
    );
  return (
    _h(() => {
      k &&
        ((_.current = !0),
        (window.MotionIsMounted = !0),
        k.updateFeatures(),
        za.render(k.render),
        V.current && k.animationState && k.animationState.animateChanges());
    }),
    z.useEffect(() => {
      k &&
        (!V.current && k.animationState && k.animationState.animateChanges(),
        V.current &&
          (queueMicrotask(() => {
            var I;
            (I = window.MotionHandoffMarkAsComplete) === null || I === void 0 || I.call(window, M);
          }),
          (V.current = !1)));
    }),
    k
  );
}
function Bg(n, i, s, l) {
  const { layoutId: c, layout: d, drag: f, dragConstraints: p, layoutScroll: m, layoutRoot: y } = i;
  ((n.projection = new s(n.latestValues, i["data-framer-portal-id"] ? void 0 : $h(n.parent))),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (p && cr(p)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: l,
      layoutScroll: m,
      layoutRoot: y,
    }));
}
function $h(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : $h(n.parent);
}
function Ug({
  preloadedFeatures: n,
  createVisualElement: i,
  useRender: s,
  useVisualState: l,
  Component: c,
}) {
  var d, f;
  n && Mg(n);
  function p(y, g) {
    let x;
    const k = { ...z.useContext(Va), ...y, layoutId: Wg(y) },
      { isStatic: R } = k,
      _ = _g(y),
      M = l(y, R);
    if (!R && ja) {
      $g();
      const V = Hg(k);
      ((x = V.MeasureLayout), (_.visualElement = zg(c, M, k, i, V.ProjectionNode)));
    }
    return A.jsxs(qs.Provider, {
      value: _,
      children: [
        x && _.visualElement ? A.jsx(x, { visualElement: _.visualElement, ...k }) : null,
        s(c, y, Ig(M, _.visualElement, g), M, R, _.visualElement),
      ],
    });
  }
  p.displayName = `motion.${typeof c == "string" ? c : `create(${(f = (d = c.displayName) !== null && d !== void 0 ? d : c.name) !== null && f !== void 0 ? f : ""})`}`;
  const m = z.forwardRef(p);
  return ((m[Fg] = c), m);
}
function Wg({ layoutId: n }) {
  const i = z.useContext(La).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function $g(n, i) {
  z.useContext(Oh).strict;
}
function Hg(n) {
  const { drag: i, layout: s } = yr;
  if (!i && !s) return {};
  const l = { ...i, ...s };
  return {
    MeasureLayout:
      (i != null && i.isEnabled(n)) || (s != null && s.isEnabled(n)) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode,
  };
}
const Kg = [
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
function Ba(n) {
  return typeof n != "string" || n.includes("-") ? !1 : !!(Kg.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function wd(n) {
  const i = [{}, {}];
  return (
    n == null ||
      n.values.forEach((s, l) => {
        ((i[0][l] = s.get()), (i[1][l] = s.getVelocity()));
      }),
    i
  );
}
function Ua(n, i, s, l) {
  if (typeof i == "function") {
    const [c, d] = wd(l);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  if ((typeof i == "string" && (i = n.variants && n.variants[i]), typeof i == "function")) {
    const [c, d] = wd(l);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  return i;
}
const pa = (n) => Array.isArray(n),
  Gg = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
  Qg = (n) => (pa(n) ? n[n.length - 1] || 0 : n),
  Ke = (n) => !!(n && n.getVelocity);
function Bs(n) {
  const i = Ke(n) ? n.get() : n;
  return Gg(i) ? i.toValue() : i;
}
function Yg({ scrapeMotionValuesFromProps: n, createRenderState: i, onUpdate: s }, l, c, d) {
  const f = { latestValues: Xg(l, c, d, n), renderState: i() };
  return (
    s && ((f.onMount = (p) => s({ props: l, current: p, ...f })), (f.onUpdate = (p) => s(p))),
    f
  );
}
const Hh = (n) => (i, s) => {
  const l = z.useContext(qs),
    c = z.useContext(Zs),
    d = () => Yg(n, i, l, c);
  return s ? d() : Na(d);
};
function Xg(n, i, s, l) {
  const c = {},
    d = l(n, {});
  for (const k in d) c[k] = Bs(d[k]);
  let { initial: f, animate: p } = n;
  const m = bs(n),
    y = Bh(n);
  i &&
    y &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || f === !1;
  const x = g ? p : f;
  if (x && typeof x != "boolean" && !Js(x)) {
    const k = Array.isArray(x) ? x : [x];
    for (let R = 0; R < k.length; R++) {
      const _ = Ua(n, k[R]);
      if (_) {
        const { transitionEnd: M, transition: V, ...I } = _;
        for (const W in I) {
          let K = I[W];
          if (Array.isArray(K)) {
            const X = g ? K.length - 1 : 0;
            K = K[X];
          }
          K !== null && (c[W] = K);
        }
        for (const W in M) c[W] = M[W];
      }
    }
  }
  return c;
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
  On = new Set(vr),
  Kh = (n) => (i) => typeof i == "string" && i.startsWith(n),
  Gh = Kh("--"),
  Zg = Kh("var(--"),
  Wa = (n) => (Zg(n) ? qg.test(n.split("/*")[0].trim()) : !1),
  qg = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Qh = (n, i) => (i && typeof n == "number" ? i.transform(n) : n),
  Qt = (n, i, s) => (s > i ? i : s < n ? n : s),
  xr = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  yi = { ...xr, transform: (n) => Qt(0, 1, n) },
  Is = { ...xr, default: 1 },
  wi = (n) => ({
    test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  pn = wi("deg"),
  _t = wi("%"),
  te = wi("px"),
  Jg = wi("vh"),
  bg = wi("vw"),
  Sd = { ..._t, parse: (n) => _t.parse(n) / 100, transform: (n) => _t.transform(n * 100) },
  ev = {
    borderWidth: te,
    borderTopWidth: te,
    borderRightWidth: te,
    borderBottomWidth: te,
    borderLeftWidth: te,
    borderRadius: te,
    radius: te,
    borderTopLeftRadius: te,
    borderTopRightRadius: te,
    borderBottomRightRadius: te,
    borderBottomLeftRadius: te,
    width: te,
    maxWidth: te,
    height: te,
    maxHeight: te,
    top: te,
    right: te,
    bottom: te,
    left: te,
    padding: te,
    paddingTop: te,
    paddingRight: te,
    paddingBottom: te,
    paddingLeft: te,
    margin: te,
    marginTop: te,
    marginRight: te,
    marginBottom: te,
    marginLeft: te,
    backgroundPositionX: te,
    backgroundPositionY: te,
  },
  tv = {
    rotate: pn,
    rotateX: pn,
    rotateY: pn,
    rotateZ: pn,
    scale: Is,
    scaleX: Is,
    scaleY: Is,
    scaleZ: Is,
    skew: pn,
    skewX: pn,
    skewY: pn,
    distance: te,
    translateX: te,
    translateY: te,
    translateZ: te,
    x: te,
    y: te,
    z: te,
    perspective: te,
    transformPerspective: te,
    opacity: yi,
    originX: Sd,
    originY: Sd,
    originZ: te,
  },
  kd = { ...xr, transform: Math.round },
  $a = { ...ev, ...tv, zIndex: kd, size: te, fillOpacity: yi, strokeOpacity: yi, numOctaves: kd },
  nv = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  rv = vr.length;
function iv(n, i, s) {
  let l = "",
    c = !0;
  for (let d = 0; d < rv; d++) {
    const f = vr[d],
      p = n[f];
    if (p === void 0) continue;
    let m = !0;
    if (
      (typeof p == "number"
        ? (m = p === (f.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(p) === 0),
      !m || s)
    ) {
      const y = Qh(p, $a[f]);
      if (!m) {
        c = !1;
        const g = nv[f] || f;
        l += `${g}(${y}) `;
      }
      s && (i[f] = y);
    }
  }
  return ((l = l.trim()), s ? (l = s(i, c ? "" : l)) : c && (l = "none"), l);
}
function Ha(n, i, s) {
  const { style: l, vars: c, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const y = i[m];
    if (On.has(m)) {
      f = !0;
      continue;
    } else if (Gh(m)) {
      c[m] = y;
      continue;
    } else {
      const g = Qh(y, $a[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = g)) : (l[m] = g);
    }
  }
  if (
    (i.transform ||
      (f || s ? (l.transform = iv(i, n.transform, s)) : l.transform && (l.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: y = "50%", originZ: g = 0 } = d;
    l.transformOrigin = `${m} ${y} ${g}`;
  }
}
const sv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  ov = { offset: "strokeDashoffset", array: "strokeDasharray" };
function lv(n, i, s = 1, l = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? sv : ov;
  n[d.offset] = te.transform(-l);
  const f = te.transform(i),
    p = te.transform(s);
  n[d.array] = `${f} ${p}`;
}
function Pd(n, i, s) {
  return typeof n == "string" ? n : te.transform(i + s * n);
}
function av(n, i, s) {
  const l = Pd(i, n.x, n.width),
    c = Pd(s, n.y, n.height);
  return `${l} ${c}`;
}
function Ka(
  n,
  {
    attrX: i,
    attrY: s,
    attrScale: l,
    originX: c,
    originY: d,
    pathLength: f,
    pathSpacing: p = 1,
    pathOffset: m = 0,
    ...y
  },
  g,
  x,
) {
  if ((Ha(n, y, x), g)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: k, style: R, dimensions: _ } = n;
  (k.transform && (_ && (R.transform = k.transform), delete k.transform),
    _ &&
      (c !== void 0 || d !== void 0 || R.transform) &&
      (R.transformOrigin = av(_, c !== void 0 ? c : 0.5, d !== void 0 ? d : 0.5)),
    i !== void 0 && (k.x = i),
    s !== void 0 && (k.y = s),
    l !== void 0 && (k.scale = l),
    f !== void 0 && lv(k, f, p, m, !1));
}
const Ga = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Yh = () => ({ ...Ga(), attrs: {} }),
  Qa = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function Xh(n, { style: i, vars: s }, l, c) {
  Object.assign(n.style, i, c && c.getProjectionStyles(l));
  for (const d in s) n.style.setProperty(d, s[d]);
}
const Zh = new Set([
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
function qh(n, i, s, l) {
  Xh(n, i, void 0, l);
  for (const c in i.attrs) n.setAttribute(Zh.has(c) ? c : Oa(c), i.attrs[c]);
}
const Hs = {};
function uv(n) {
  Object.assign(Hs, n);
}
function Jh(n, { layout: i, layoutId: s }) {
  return (
    On.has(n) || n.startsWith("origin") || ((i || s !== void 0) && (!!Hs[n] || n === "opacity"))
  );
}
function Ya(n, i, s) {
  var l;
  const { style: c } = n,
    d = {};
  for (const f in c)
    (Ke(c[f]) ||
      (i.style && Ke(i.style[f])) ||
      Jh(f, n) ||
      ((l = s == null ? void 0 : s.getValue(f)) === null || l === void 0 ? void 0 : l.liveStyle) !==
        void 0) &&
      (d[f] = c[f]);
  return d;
}
function bh(n, i, s) {
  const l = Ya(n, i, s);
  for (const c in n)
    if (Ke(n[c]) || Ke(i[c])) {
      const d = vr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      l[d] = n[c];
    }
  return l;
}
function cv(n, i) {
  try {
    i.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect();
  } catch {
    i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Td = ["x", "y", "width", "height", "cx", "cy", "r"],
  fv = {
    useVisualState: Hh({
      scrapeMotionValuesFromProps: bh,
      createRenderState: Yh,
      onUpdate: ({ props: n, prevProps: i, current: s, renderState: l, latestValues: c }) => {
        if (!s) return;
        let d = !!n.drag;
        if (!d) {
          for (const p in c)
            if (On.has(p)) {
              d = !0;
              break;
            }
        }
        if (!d) return;
        let f = !i;
        if (i)
          for (let p = 0; p < Td.length; p++) {
            const m = Td[p];
            n[m] !== i[m] && (f = !0);
          }
        f &&
          xe.read(() => {
            (cv(s, l),
              xe.render(() => {
                (Ka(l, c, Qa(s.tagName), n.transformTemplate), qh(s, l));
              }));
          });
      },
    }),
  },
  dv = { useVisualState: Hh({ scrapeMotionValuesFromProps: Ya, createRenderState: Ga }) };
function ep(n, i, s) {
  for (const l in i) !Ke(i[l]) && !Jh(l, s) && (n[l] = i[l]);
}
function hv({ transformTemplate: n }, i) {
  return z.useMemo(() => {
    const s = Ga();
    return (Ha(s, i, n), Object.assign({}, s.vars, s.style));
  }, [i]);
}
function pv(n, i) {
  const s = n.style || {},
    l = {};
  return (ep(l, s, n), Object.assign(l, hv(n, i)), l);
}
function mv(n, i) {
  const s = {},
    l = pv(n, i);
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
function yv(n, i, s, l) {
  const c = z.useMemo(() => {
    const d = Yh();
    return (Ka(d, i, Qa(l), n.transformTemplate), { ...d.attrs, style: { ...d.style } });
  }, [i]);
  if (n.style) {
    const d = {};
    (ep(d, n.style, n), (c.style = { ...d, ...c.style }));
  }
  return c;
}
function gv(n = !1) {
  return (s, l, c, { latestValues: d }, f) => {
    const m = (Ba(s) ? yv : mv)(l, d, f, s),
      y = Ng(l, typeof s == "string", n),
      g = s !== z.Fragment ? { ...y, ...m, ref: c } : {},
      { children: x } = l,
      k = z.useMemo(() => (Ke(x) ? x.get() : x), [x]);
    return z.createElement(s, { ...g, children: k });
  };
}
function vv(n, i) {
  return function (l, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Ba(l) ? fv : dv),
      preloadedFeatures: n,
      useRender: gv(c),
      createVisualElement: i,
      Component: l,
    };
    return Ug(f);
  };
}
function tp(n, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== n.length) return !1;
  for (let l = 0; l < s; l++) if (i[l] !== n[l]) return !1;
  return !0;
}
function eo(n, i, s) {
  const l = n.getProps();
  return Ua(l, i, s !== void 0 ? s : l.custom, n);
}
const xv = _a(() => window.ScrollTimeline !== void 0);
class wv {
  constructor(i) {
    ((this.stop = () => this.runAll("stop")), (this.animations = i.filter(Boolean)));
  }
  get finished() {
    return Promise.all(this.animations.map((i) => ("finished" in i ? i.finished : i)));
  }
  getAll(i) {
    return this.animations[0][i];
  }
  setAll(i, s) {
    for (let l = 0; l < this.animations.length; l++) this.animations[l][i] = s;
  }
  attachTimeline(i, s) {
    const l = this.animations.map((c) => {
      if (xv() && c.attachTimeline) return c.attachTimeline(i);
      if (typeof s == "function") return s(c);
    });
    return () => {
      l.forEach((c, d) => {
        (c && c(), this.animations[d].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(i) {
    this.setAll("time", i);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(i) {
    this.setAll("speed", i);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let i = 0;
    for (let s = 0; s < this.animations.length; s++) i = Math.max(i, this.animations[s].duration);
    return i;
  }
  runAll(i) {
    this.animations.forEach((s) => s[i]());
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
class Sv extends wv {
  then(i, s) {
    return Promise.all(this.animations).then(i).catch(s);
  }
}
function Xa(n, i) {
  return n ? n[i] || n.default || n : void 0;
}
const ma = 2e4;
function np(n) {
  let i = 0;
  const s = 50;
  let l = n.next(i);
  for (; !l.done && i < ma;) ((i += s), (l = n.next(i)));
  return i >= ma ? 1 / 0 : i;
}
function Za(n) {
  return typeof n == "function";
}
function Cd(n, i) {
  ((n.timeline = i), (n.onfinish = null));
}
const qa = (n) => Array.isArray(n) && typeof n[0] == "number",
  kv = { linearEasing: void 0 };
function Pv(n, i) {
  const s = _a(n);
  return () => {
    var l;
    return (l = kv[i]) !== null && l !== void 0 ? l : s();
  };
}
const Ks = Pv(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  rp = (n, i, s = 10) => {
    let l = "";
    const c = Math.max(Math.round(i / s), 2);
    for (let d = 0; d < c; d++) l += n(mr(0, c - 1, d)) + ", ";
    return `linear(${l.substring(0, l.length - 2)})`;
  };
function ip(n) {
  return !!(
    (typeof n == "function" && Ks()) ||
    !n ||
    (typeof n == "string" && (n in ya || Ks())) ||
    qa(n) ||
    (Array.isArray(n) && n.every(ip))
  );
}
const ai = ([n, i, s, l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`,
  ya = {
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
function sp(n, i) {
  if (n)
    return typeof n == "function" && Ks()
      ? rp(n, i)
      : qa(n)
        ? ai(n)
        : Array.isArray(n)
          ? n.map((s) => sp(s, i) || ya.easeOut)
          : ya[n];
}
const Mt = { x: !1, y: !1 };
function op() {
  return Mt.x || Mt.y;
}
function Tv(n, i, s) {
  var l;
  if (n instanceof Element) return [n];
  if (typeof n == "string") {
    let c = document;
    const d = (l = void 0) !== null && l !== void 0 ? l : c.querySelectorAll(n);
    return d ? Array.from(d) : [];
  }
  return Array.from(n);
}
function lp(n, i) {
  const s = Tv(n),
    l = new AbortController(),
    c = { passive: !0, ...i, signal: l.signal };
  return [s, c, () => l.abort()];
}
function Ed(n) {
  return (i) => {
    i.pointerType === "touch" || op() || n(i);
  };
}
function Cv(n, i, s = {}) {
  const [l, c, d] = lp(n, s),
    f = Ed((p) => {
      const { target: m } = p,
        y = i(p);
      if (typeof y != "function" || !m) return;
      const g = Ed((x) => {
        (y(x), m.removeEventListener("pointerleave", g));
      });
      m.addEventListener("pointerleave", g, c);
    });
  return (
    l.forEach((p) => {
      p.addEventListener("pointerenter", f, c);
    }),
    d
  );
}
const ap = (n, i) => (i ? (n === i ? !0 : ap(n, i.parentElement)) : !1),
  Ja = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  Ev = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Av(n) {
  return Ev.has(n.tagName) || n.tabIndex !== -1;
}
const ui = new WeakSet();
function Ad(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function na(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const Rv = (n, i) => {
  const s = n.currentTarget;
  if (!s) return;
  const l = Ad(() => {
    if (ui.has(s)) return;
    na(s, "down");
    const c = Ad(() => {
        na(s, "up");
      }),
      d = () => na(s, "cancel");
    (s.addEventListener("keyup", c, i), s.addEventListener("blur", d, i));
  });
  (s.addEventListener("keydown", l, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", l), i));
};
function Rd(n) {
  return Ja(n) && !op();
}
function Mv(n, i, s = {}) {
  const [l, c, d] = lp(n, s),
    f = (p) => {
      const m = p.currentTarget;
      if (!Rd(p) || ui.has(m)) return;
      ui.add(m);
      const y = i(p),
        g = (R, _) => {
          (window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", k),
            !(!Rd(R) || !ui.has(m)) &&
              (ui.delete(m), typeof y == "function" && y(R, { success: _ })));
        },
        x = (R) => {
          g(R, s.useGlobalTarget || ap(m, R.target));
        },
        k = (R) => {
          g(R, !1);
        };
      (window.addEventListener("pointerup", x, c), window.addEventListener("pointercancel", k, c));
    };
  return (
    l.forEach((p) => {
      (!Av(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0),
        (s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        p.addEventListener("focus", (y) => Rv(y, c), c));
    }),
    d
  );
}
function Dv(n) {
  return n === "x" || n === "y"
    ? Mt[n]
      ? null
      : ((Mt[n] = !0),
        () => {
          Mt[n] = !1;
        })
    : Mt.x || Mt.y
      ? null
      : ((Mt.x = Mt.y = !0),
        () => {
          Mt.x = Mt.y = !1;
        });
}
const up = new Set(["width", "height", "top", "left", "right", "bottom", ...vr]);
let Us;
function Lv() {
  Us = void 0;
}
const Ft = {
  now: () => (
    Us === void 0 &&
      Ft.set(ze.isProcessing || Eg.useManualTiming ? ze.timestamp : performance.now()),
    Us
  ),
  set: (n) => {
    ((Us = n), queueMicrotask(Lv));
  },
};
function ba(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function eu(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
class tu {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (ba(this.subscriptions, i), () => eu(this.subscriptions, i));
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
function cp(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const Md = 30,
  Nv = (n) => !isNaN(parseFloat(n));
class Vv {
  constructor(i, s = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (l, c = !0) => {
        const d = Ft.now();
        (this.updatedAt !== d && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(l),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          c && this.events.renderRequest && this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = s.owner));
  }
  setCurrent(i) {
    ((this.current = i),
      (this.updatedAt = Ft.now()),
      this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = Nv(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new tu());
    const l = this.events[i].add(s);
    return i === "change"
      ? () => {
          (l(),
            xe.read(() => {
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
  set(i, s = !0) {
    !s || !this.passiveEffect
      ? this.updateAndNotify(i, s)
      : this.passiveEffect(i, this.updateAndNotify);
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
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = Ft.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Md)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Md);
    return cp(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
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
    (this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function gi(n, i) {
  return new Vv(n, i);
}
function jv(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, gi(s));
}
function _v(n, i) {
  const s = eo(n, i);
  let { transitionEnd: l = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...l };
  for (const f in d) {
    const p = Qg(d[f]);
    jv(n, f, p);
  }
}
function Fv(n) {
  return !!(Ke(n) && n.add);
}
function ga(n, i) {
  const s = n.getValue("willChange");
  if (Fv(s)) return s.add(i);
}
function fp(n) {
  return n.props[Uh];
}
const dp = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  Iv = 1e-7,
  Ov = 12;
function zv(n, i, s, l, c) {
  let d,
    f,
    p = 0;
  do ((f = i + (s - i) / 2), (d = dp(f, l, c) - n), d > 0 ? (s = f) : (i = f));
  while (Math.abs(d) > Iv && ++p < Ov);
  return f;
}
function Si(n, i, s, l) {
  if (n === i && s === l) return ft;
  const c = (d) => zv(d, 0, 1, n, s);
  return (d) => (d === 0 || d === 1 ? d : dp(c(d), i, l));
}
const hp = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  pp = (n) => (i) => 1 - n(1 - i),
  mp = Si(0.33, 1.53, 0.69, 0.99),
  nu = pp(mp),
  yp = hp(nu),
  gp = (n) => ((n *= 2) < 1 ? 0.5 * nu(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))),
  ru = (n) => 1 - Math.sin(Math.acos(n)),
  vp = pp(ru),
  xp = hp(ru),
  wp = (n) => /^0[^.\s]+$/u.test(n);
function Bv(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || wp(n) : !0;
}
const fi = (n) => Math.round(n * 1e5) / 1e5,
  iu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Uv(n) {
  return n == null;
}
const Wv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  su = (n, i) => (s) =>
    !!(
      (typeof s == "string" && Wv.test(s) && s.startsWith(n)) ||
      (i && !Uv(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  Sp = (n, i, s) => (l) => {
    if (typeof l != "string") return l;
    const [c, d, f, p] = l.match(iu);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  $v = (n) => Qt(0, 255, n),
  ra = { ...xr, transform: (n) => Math.round($v(n)) },
  _n = {
    test: su("rgb", "red"),
    parse: Sp("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: s, alpha: l = 1 }) =>
      "rgba(" +
      ra.transform(n) +
      ", " +
      ra.transform(i) +
      ", " +
      ra.transform(s) +
      ", " +
      fi(yi.transform(l)) +
      ")",
  };
function Hv(n) {
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
const va = { test: su("#"), parse: Hv, transform: _n.transform },
  fr = {
    test: su("hsl", "hue"),
    parse: Sp("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: s, alpha: l = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      _t.transform(fi(i)) +
      ", " +
      _t.transform(fi(s)) +
      ", " +
      fi(yi.transform(l)) +
      ")",
  },
  He = {
    test: (n) => _n.test(n) || va.test(n) || fr.test(n),
    parse: (n) => (_n.test(n) ? _n.parse(n) : fr.test(n) ? fr.parse(n) : va.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? _n.transform(n) : fr.transform(n),
  },
  Kv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Gv(n) {
  var i, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(iu)) === null || i === void 0 ? void 0 : i.length) || 0) +
      (((s = n.match(Kv)) === null || s === void 0 ? void 0 : s.length) || 0) >
      0
  );
}
const kp = "number",
  Pp = "color",
  Qv = "var",
  Yv = "var(",
  Dd = "${}",
  Xv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vi(n) {
  const i = n.toString(),
    s = [],
    l = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      Xv,
      (m) => (
        He.test(m)
          ? (l.color.push(d), c.push(Pp), s.push(He.parse(m)))
          : m.startsWith(Yv)
            ? (l.var.push(d), c.push(Qv), s.push(m))
            : (l.number.push(d), c.push(kp), s.push(parseFloat(m))),
        ++d,
        Dd
      ),
    )
    .split(Dd);
  return { values: s, split: p, indexes: l, types: c };
}
function Tp(n) {
  return vi(n).values;
}
function Cp(n) {
  const { split: i, types: s } = vi(n),
    l = i.length;
  return (c) => {
    let d = "";
    for (let f = 0; f < l; f++)
      if (((d += i[f]), c[f] !== void 0)) {
        const p = s[f];
        p === kp ? (d += fi(c[f])) : p === Pp ? (d += He.transform(c[f])) : (d += c[f]);
      }
    return d;
  };
}
const Zv = (n) => (typeof n == "number" ? 0 : n);
function qv(n) {
  const i = Tp(n);
  return Cp(n)(i.map(Zv));
}
const yn = { test: Gv, parse: Tp, createTransformer: Cp, getAnimatableNone: qv },
  Jv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function bv(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [l] = s.match(iu) || [];
  if (!l) return n;
  const c = s.replace(l, "");
  let d = Jv.has(i) ? 1 : 0;
  return (l !== s && (d *= 100), i + "(" + d + c + ")");
}
const e0 = /\b([a-z-]*)\(.*?\)/gu,
  xa = {
    ...yn,
    getAnimatableNone: (n) => {
      const i = n.match(e0);
      return i ? i.map(bv).join(" ") : n;
    },
  },
  t0 = {
    ...$a,
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
    filter: xa,
    WebkitFilter: xa,
  },
  ou = (n) => t0[n];
function Ep(n, i) {
  let s = ou(n);
  return (s !== xa && (s = yn), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0);
}
const n0 = new Set(["auto", "none", "0"]);
function r0(n, i, s) {
  let l = 0,
    c;
  for (; l < n.length && !c;) {
    const d = n[l];
    (typeof d == "string" && !n0.has(d) && vi(d).values.length && (c = n[l]), l++);
  }
  if (c && s) for (const d of i) n[d] = Ep(s, c);
}
const Ld = (n) => n === xr || n === te,
  Nd = (n, i) => parseFloat(n.split(", ")[i]),
  Vd =
    (n, i) =>
    (s, { transform: l }) => {
      if (l === "none" || !l) return 0;
      const c = l.match(/^matrix3d\((.+)\)$/u);
      if (c) return Nd(c[1], i);
      {
        const d = l.match(/^matrix\((.+)\)$/u);
        return d ? Nd(d[1], n) : 0;
      }
    },
  i0 = new Set(["x", "y", "z"]),
  s0 = vr.filter((n) => !i0.has(n));
function o0(n) {
  const i = [];
  return (
    s0.forEach((s) => {
      const l = n.getValue(s);
      l !== void 0 && (i.push([s, l.get()]), l.set(s.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const gr = {
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: s = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(s),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: s = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(s),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: Vd(4, 13),
  y: Vd(5, 14),
};
gr.translateX = gr.x;
gr.translateY = gr.y;
const In = new Set();
let wa = !1,
  Sa = !1;
function Ap() {
  if (Sa) {
    const n = Array.from(In).filter((l) => l.needsMeasurement),
      i = new Set(n.map((l) => l.element)),
      s = new Map();
    (i.forEach((l) => {
      const c = o0(l);
      c.length && (s.set(l, c), l.render());
    }),
      n.forEach((l) => l.measureInitialState()),
      i.forEach((l) => {
        l.render();
        const c = s.get(l);
        c &&
          c.forEach(([d, f]) => {
            var p;
            (p = l.getValue(d)) === null || p === void 0 || p.set(f);
          });
      }),
      n.forEach((l) => l.measureEndState()),
      n.forEach((l) => {
        l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY);
      }));
  }
  ((Sa = !1), (wa = !1), In.forEach((n) => n.complete()), In.clear());
}
function Rp() {
  In.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (Sa = !0));
  });
}
function l0() {
  (Rp(), Ap());
}
class lu {
  constructor(i, s, l, c, d, f = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = s),
      (this.name = l),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (In.add(this), wa || ((wa = !0), xe.read(Rp), xe.resolveKeyframes(Ap)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: s, element: l, motionValue: c } = this;
    for (let d = 0; d < i.length; d++)
      if (i[d] === null)
        if (d === 0) {
          const f = c == null ? void 0 : c.get(),
            p = i[i.length - 1];
          if (f !== void 0) i[0] = f;
          else if (l && s) {
            const m = l.readValue(s, p);
            m != null && (i[0] = m);
          }
          (i[0] === void 0 && (i[0] = p), c && f === void 0 && c.set(i[0]));
        } else i[d] = i[d - 1];
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
const Mp = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  a0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function u0(n) {
  const i = a0.exec(n);
  if (!i) return [,];
  const [, s, l, c] = i;
  return [`--${s ?? l}`, c];
}
function Dp(n, i, s = 1) {
  const [l, c] = u0(n);
  if (!l) return;
  const d = window.getComputedStyle(i).getPropertyValue(l);
  if (d) {
    const f = d.trim();
    return Mp(f) ? parseFloat(f) : f;
  }
  return Wa(c) ? Dp(c, i, s + 1) : c;
}
const Lp = (n) => (i) => i.test(n),
  c0 = { test: (n) => n === "auto", parse: (n) => n },
  Np = [xr, te, _t, pn, bg, Jg, c0],
  jd = (n) => Np.find(Lp(n));
class Vp extends lu {
  constructor(i, s, l, c, d) {
    super(i, s, l, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: l } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let m = 0; m < i.length; m++) {
      let y = i[m];
      if (typeof y == "string" && ((y = y.trim()), Wa(y))) {
        const g = Dp(y, s.current);
        (g !== void 0 && (i[m] = g), m === i.length - 1 && (this.finalKeyframe = y));
      }
    }
    if ((this.resolveNoneKeyframes(), !up.has(l) || i.length !== 2)) return;
    const [c, d] = i,
      f = jd(c),
      p = jd(d);
    if (f !== p)
      if (Ld(f) && Ld(p))
        for (let m = 0; m < i.length; m++) {
          const y = i[m];
          typeof y == "string" && (i[m] = parseFloat(y));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      l = [];
    for (let c = 0; c < i.length; c++) Bv(i[c]) && l.push(c);
    l.length && r0(i, l, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: l } = this;
    if (!i || !i.current) return;
    (l === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = gr[l](i.measureViewportBox(), window.getComputedStyle(i.current))),
      (s[0] = this.measuredOrigin));
    const c = s[s.length - 1];
    c !== void 0 && i.getValue(l, c).jump(c, !1);
  }
  measureEndState() {
    var i;
    const { element: s, name: l, unresolvedKeyframes: c } = this;
    if (!s || !s.current) return;
    const d = s.getValue(l);
    d && d.jump(this.measuredOrigin, !1);
    const f = c.length - 1,
      p = c[f];
    ((c[f] = gr[l](s.measureViewportBox(), window.getComputedStyle(s.current))),
      p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
      !((i = this.removedTransforms) === null || i === void 0) &&
        i.length &&
        this.removedTransforms.forEach(([m, y]) => {
          s.getValue(m).set(y);
        }),
      this.resolveNoneKeyframes());
  }
}
const _d = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" && (yn.test(n) || n === "0") && !n.startsWith("url("))
      );
function f0(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== i) return !0;
}
function d0(n, i, s, l) {
  const c = n[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = _d(c, i),
    p = _d(d, i);
  return !f || !p ? !1 : f0(n) || ((s === "spring" || Za(s)) && l);
}
const h0 = (n) => n !== null;
function to(n, { repeat: i, repeatType: s = "loop" }, l) {
  const c = n.filter(h0),
    d = i && s !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return !d || l === void 0 ? c[d] : l;
}
const p0 = 40;
class jp {
  constructor({
    autoplay: i = !0,
    delay: s = 0,
    type: l = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    ...p
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Ft.now()),
      (this.options = {
        autoplay: i,
        delay: s,
        type: l,
        repeat: c,
        repeatDelay: d,
        repeatType: f,
        ...p,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > p0
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (!this._resolved && !this.hasAttemptedResolve && l0(), this._resolved);
  }
  onKeyframesResolved(i, s) {
    ((this.resolvedAt = Ft.now()), (this.hasAttemptedResolve = !0));
    const {
      name: l,
      type: c,
      velocity: d,
      delay: f,
      onComplete: p,
      onUpdate: m,
      isGenerator: y,
    } = this.options;
    if (!y && !d0(i, l, c, d))
      if (f) this.options.duration = 0;
      else {
        (m && m(to(i, this.options, s)), p && p(), this.resolveFinishedPromise());
        return;
      }
    const g = this.initPlayback(i, s);
    g !== !1 &&
      ((this._resolved = { keyframes: i, finalKeyframe: s, ...g }), this.onPostResolved());
  }
  onPostResolved() {}
  then(i, s) {
    return this.currentFinishedPromise.then(i, s);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((i) => {
      this.resolveFinishedPromise = i;
    });
  }
}
const Te = (n, i, s) => n + (i - n) * s;
function ia(n, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n
  );
}
function m0({ hue: n, saturation: i, lightness: s, alpha: l }) {
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
function Gs(n, i) {
  return (s) => (s > 0 ? i : n);
}
const sa = (n, i, s) => {
    const l = n * n,
      c = s * (i * i - l) + l;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  y0 = [va, _n, fr],
  g0 = (n) => y0.find((i) => i.test(n));
function Fd(n) {
  const i = g0(n);
  if (!i) return !1;
  let s = i.parse(n);
  return (i === fr && (s = m0(s)), s);
}
const Id = (n, i) => {
    const s = Fd(n),
      l = Fd(i);
    if (!s || !l) return Gs(n, i);
    const c = { ...s };
    return (d) => (
      (c.red = sa(s.red, l.red, d)),
      (c.green = sa(s.green, l.green, d)),
      (c.blue = sa(s.blue, l.blue, d)),
      (c.alpha = Te(s.alpha, l.alpha, d)),
      _n.transform(c)
    );
  },
  v0 = (n, i) => (s) => i(n(s)),
  ki = (...n) => n.reduce(v0),
  ka = new Set(["none", "hidden"]);
function x0(n, i) {
  return ka.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n);
}
function w0(n, i) {
  return (s) => Te(n, i, s);
}
function au(n) {
  return typeof n == "number"
    ? w0
    : typeof n == "string"
      ? Wa(n)
        ? Gs
        : He.test(n)
          ? Id
          : P0
      : Array.isArray(n)
        ? _p
        : typeof n == "object"
          ? He.test(n)
            ? Id
            : S0
          : Gs;
}
function _p(n, i) {
  const s = [...n],
    l = s.length,
    c = n.map((d, f) => au(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < l; f++) s[f] = c[f](d);
    return s;
  };
}
function S0(n, i) {
  const s = { ...n, ...i },
    l = {};
  for (const c in s) n[c] !== void 0 && i[c] !== void 0 && (l[c] = au(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in l) s[d] = l[d](c);
    return s;
  };
}
function k0(n, i) {
  var s;
  const l = [],
    c = { color: 0, var: 0, number: 0 };
  for (let d = 0; d < i.values.length; d++) {
    const f = i.types[d],
      p = n.indexes[f][c[f]],
      m = (s = n.values[p]) !== null && s !== void 0 ? s : 0;
    ((l[d] = m), c[f]++);
  }
  return l;
}
const P0 = (n, i) => {
  const s = yn.createTransformer(i),
    l = vi(n),
    c = vi(i);
  return l.indexes.var.length === c.indexes.var.length &&
    l.indexes.color.length === c.indexes.color.length &&
    l.indexes.number.length >= c.indexes.number.length
    ? (ka.has(n) && !c.values.length) || (ka.has(i) && !l.values.length)
      ? x0(n, i)
      : ki(_p(k0(l, c), c.values), s)
    : Gs(n, i);
};
function Fp(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number"
    ? Te(n, i, s)
    : au(n)(n, i);
}
const T0 = 5;
function Ip(n, i, s) {
  const l = Math.max(i - T0, 0);
  return cp(s - n(l), i - l);
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
  oa = 0.001;
function C0({
  duration: n = Ae.duration,
  bounce: i = Ae.bounce,
  velocity: s = Ae.velocity,
  mass: l = Ae.mass,
}) {
  let c,
    d,
    f = 1 - i;
  ((f = Qt(Ae.minDamping, Ae.maxDamping, f)),
    (n = Qt(Ae.minDuration, Ae.maxDuration, Gt(n))),
    f < 1
      ? ((c = (y) => {
          const g = y * f,
            x = g * n,
            k = g - s,
            R = Pa(y, f),
            _ = Math.exp(-x);
          return oa - (k / R) * _;
        }),
        (d = (y) => {
          const x = y * f * n,
            k = x * s + s,
            R = Math.pow(f, 2) * Math.pow(y, 2) * n,
            _ = Math.exp(-x),
            M = Pa(Math.pow(y, 2), f);
          return ((-c(y) + oa > 0 ? -1 : 1) * ((k - R) * _)) / M;
        }))
      : ((c = (y) => {
          const g = Math.exp(-y * n),
            x = (y - s) * n + 1;
          return -oa + g * x;
        }),
        (d = (y) => {
          const g = Math.exp(-y * n),
            x = (s - y) * (n * n);
          return g * x;
        })));
  const p = 5 / n,
    m = A0(c, d, p);
  if (((n = Kt(n)), isNaN(m))) return { stiffness: Ae.stiffness, damping: Ae.damping, duration: n };
  {
    const y = Math.pow(m, 2) * l;
    return { stiffness: y, damping: f * 2 * Math.sqrt(l * y), duration: n };
  }
}
const E0 = 12;
function A0(n, i, s) {
  let l = s;
  for (let c = 1; c < E0; c++) l = l - n(l) / i(l);
  return l;
}
function Pa(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const R0 = ["duration", "bounce"],
  M0 = ["stiffness", "damping", "mass"];
function Od(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function D0(n) {
  let i = {
    velocity: Ae.velocity,
    stiffness: Ae.stiffness,
    damping: Ae.damping,
    mass: Ae.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Od(n, M0) && Od(n, R0))
    if (n.visualDuration) {
      const s = n.visualDuration,
        l = (2 * Math.PI) / (s * 1.2),
        c = l * l,
        d = 2 * Qt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Ae.mass, stiffness: c, damping: d };
    } else {
      const s = C0(n);
      ((i = { ...i, ...s, mass: Ae.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function Op(n = Ae.visualDuration, i = Ae.bounce) {
  const s = typeof n != "object" ? { visualDuration: n, keyframes: [0, 1], bounce: i } : n;
  let { restSpeed: l, restDelta: c } = s;
  const d = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: y,
      mass: g,
      duration: x,
      velocity: k,
      isResolvedFromDuration: R,
    } = D0({ ...s, velocity: -Gt(s.velocity || 0) }),
    _ = k || 0,
    M = y / (2 * Math.sqrt(m * g)),
    V = f - d,
    I = Gt(Math.sqrt(m / g)),
    W = Math.abs(V) < 5;
  (l || (l = W ? Ae.restSpeed.granular : Ae.restSpeed.default),
    c || (c = W ? Ae.restDelta.granular : Ae.restDelta.default));
  let K;
  if (M < 1) {
    const B = Pa(I, M);
    K = (ee) => {
      const le = Math.exp(-M * I * ee);
      return f - le * (((_ + M * I * V) / B) * Math.sin(B * ee) + V * Math.cos(B * ee));
    };
  } else if (M === 1) K = (B) => f - Math.exp(-I * B) * (V + (_ + I * V) * B);
  else {
    const B = I * Math.sqrt(M * M - 1);
    K = (ee) => {
      const le = Math.exp(-M * I * ee),
        Z = Math.min(B * ee, 300);
      return f - (le * ((_ + M * I * V) * Math.sinh(Z) + B * V * Math.cosh(Z))) / B;
    };
  }
  const X = {
    calculatedDuration: (R && x) || null,
    next: (B) => {
      const ee = K(B);
      if (R) p.done = B >= x;
      else {
        let le = 0;
        M < 1 && (le = B === 0 ? Kt(_) : Ip(K, B, ee));
        const Z = Math.abs(le) <= l,
          ye = Math.abs(f - ee) <= c;
        p.done = Z && ye;
      }
      return ((p.value = p.done ? f : ee), p);
    },
    toString: () => {
      const B = Math.min(np(X), ma),
        ee = rp((le) => X.next(B * le).value, B, 30);
      return B + "ms " + ee;
    },
  };
  return X;
}
function zd({
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
  const x = n[0],
    k = { done: !1, value: x },
    R = (Z) => (p !== void 0 && Z < p) || (m !== void 0 && Z > m),
    _ = (Z) => (p === void 0 ? m : m === void 0 || Math.abs(p - Z) < Math.abs(m - Z) ? p : m);
  let M = s * i;
  const V = x + M,
    I = f === void 0 ? V : f(V);
  I !== V && (M = I - x);
  const W = (Z) => -M * Math.exp(-Z / l),
    K = (Z) => I + W(Z),
    X = (Z) => {
      const ye = W(Z),
        Ce = K(Z);
      ((k.done = Math.abs(ye) <= y), (k.value = k.done ? I : Ce));
    };
  let B, ee;
  const le = (Z) => {
    R(k.value) &&
      ((B = Z),
      (ee = Op({
        keyframes: [k.value, _(k.value)],
        velocity: Ip(K, Z, k.value),
        damping: c,
        stiffness: d,
        restDelta: y,
        restSpeed: g,
      })));
  };
  return (
    le(0),
    {
      calculatedDuration: null,
      next: (Z) => {
        let ye = !1;
        return (
          !ee && B === void 0 && ((ye = !0), X(Z), le(Z)),
          B !== void 0 && Z >= B ? ee.next(Z - B) : (!ye && X(Z), k)
        );
      },
    }
  );
}
const L0 = Si(0.42, 0, 1, 1),
  N0 = Si(0, 0, 0.58, 1),
  zp = Si(0.42, 0, 0.58, 1),
  V0 = (n) => Array.isArray(n) && typeof n[0] != "number",
  j0 = {
    linear: ft,
    easeIn: L0,
    easeInOut: zp,
    easeOut: N0,
    circIn: ru,
    circInOut: xp,
    circOut: vp,
    backIn: nu,
    backInOut: yp,
    backOut: mp,
    anticipate: gp,
  },
  Bd = (n) => {
    if (qa(n)) {
      Fh(n.length === 4);
      const [i, s, l, c] = n;
      return Si(i, s, l, c);
    } else if (typeof n == "string") return j0[n];
    return n;
  };
function _0(n, i, s) {
  const l = [],
    c = s || Fp,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = c(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || ft : i;
      p = ki(m, p);
    }
    l.push(p);
  }
  return l;
}
function F0(n, i, { clamp: s = !0, ease: l, mixer: c } = {}) {
  const d = n.length;
  if ((Fh(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = _0(i, l, c),
    m = p.length,
    y = (g) => {
      if (f && g < n[0]) return i[0];
      let x = 0;
      if (m > 1) for (; x < n.length - 2 && !(g < n[x + 1]); x++);
      const k = mr(n[x], n[x + 1], g);
      return p[x](k);
    };
  return s ? (g) => y(Qt(n[0], n[d - 1], g)) : y;
}
function I0(n, i) {
  const s = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const c = mr(0, i, l);
    n.push(Te(s, 1, c));
  }
}
function O0(n) {
  const i = [0];
  return (I0(i, n.length - 1), i);
}
function z0(n, i) {
  return n.map((s) => s * i);
}
function B0(n, i) {
  return n.map(() => i || zp).splice(0, n.length - 1);
}
function Qs({ duration: n = 300, keyframes: i, times: s, ease: l = "easeInOut" }) {
  const c = V0(l) ? l.map(Bd) : Bd(l),
    d = { done: !1, value: i[0] },
    f = z0(s && s.length === i.length ? s : O0(i), n),
    p = F0(f, i, { ease: Array.isArray(c) ? c : B0(i, c) });
  return { calculatedDuration: n, next: (m) => ((d.value = p(m)), (d.done = m >= n), d) };
}
const U0 = (n) => {
    const i = ({ timestamp: s }) => n(s);
    return {
      start: () => xe.update(i, !0),
      stop: () => mn(i),
      now: () => (ze.isProcessing ? ze.timestamp : Ft.now()),
    };
  },
  W0 = { decay: zd, inertia: zd, tween: Qs, keyframes: Qs, spring: Op },
  $0 = (n) => n / 100;
class uu extends jp {
  constructor(i) {
    (super(i),
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
    const { name: s, motionValue: l, element: c, keyframes: d } = this.options,
      f = (c == null ? void 0 : c.KeyframeResolver) || lu,
      p = (m, y) => this.onKeyframesResolved(m, y);
    ((this.resolver = new f(d, p, s, l, c)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes)));
  }
  initPlayback(i) {
    const {
        type: s = "keyframes",
        repeat: l = 0,
        repeatDelay: c = 0,
        repeatType: d,
        velocity: f = 0,
      } = this.options,
      p = Za(s) ? s : W0[s] || Qs;
    let m, y;
    p !== Qs && typeof i[0] != "number" && ((m = ki($0, Fp(i[0], i[1]))), (i = [0, 100]));
    const g = p({ ...this.options, keyframes: i });
    (d === "mirror" && (y = p({ ...this.options, keyframes: [...i].reverse(), velocity: -f })),
      g.calculatedDuration === null && (g.calculatedDuration = np(g)));
    const { calculatedDuration: x } = g,
      k = x + c,
      R = k * (l + 1) - c;
    return {
      generator: g,
      mirroredGenerator: y,
      mapPercentToKeyframes: m,
      calculatedDuration: x,
      resolvedDuration: k,
      totalDuration: R,
    };
  }
  onPostResolved() {
    const { autoplay: i = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !i
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(i, s = !1) {
    const { resolved: l } = this;
    if (!l) {
      const { keyframes: Z } = this.options;
      return { done: !0, value: Z[Z.length - 1] };
    }
    const {
      finalKeyframe: c,
      generator: d,
      mirroredGenerator: f,
      mapPercentToKeyframes: p,
      keyframes: m,
      calculatedDuration: y,
      totalDuration: g,
      resolvedDuration: x,
    } = l;
    if (this.startTime === null) return d.next(0);
    const { delay: k, repeat: R, repeatType: _, repeatDelay: M, onUpdate: V } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 && (this.startTime = Math.min(i - g / this.speed, this.startTime)),
      s
        ? (this.currentTime = i)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(i - this.startTime) * this.speed));
    const I = this.currentTime - k * (this.speed >= 0 ? 1 : -1),
      W = this.speed >= 0 ? I < 0 : I > g;
    ((this.currentTime = Math.max(I, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = g));
    let K = this.currentTime,
      X = d;
    if (R) {
      const Z = Math.min(this.currentTime, g) / x;
      let ye = Math.floor(Z),
        Ce = Z % 1;
      (!Ce && Z >= 1 && (Ce = 1),
        Ce === 1 && ye--,
        (ye = Math.min(ye, R + 1)),
        !!(ye % 2) &&
          (_ === "reverse" ? ((Ce = 1 - Ce), M && (Ce -= M / x)) : _ === "mirror" && (X = f)),
        (K = Qt(0, 1, Ce) * x));
    }
    const B = W ? { done: !1, value: m[0] } : X.next(K);
    p && (B.value = p(B.value));
    let { done: ee } = B;
    !W && y !== null && (ee = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
    const le =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ee));
    return (
      le && c !== void 0 && (B.value = to(m, this.options, c)),
      V && V(B.value),
      le && this.finish(),
      B
    );
  }
  get duration() {
    const { resolved: i } = this;
    return i ? Gt(i.calculatedDuration) : 0;
  }
  get time() {
    return Gt(this.currentTime);
  }
  set time(i) {
    ((i = Kt(i)),
      (this.currentTime = i),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = i)
        : this.driver && (this.startTime = this.driver.now() - i / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const s = this.playbackSpeed !== i;
    ((this.playbackSpeed = i), s && (this.time = Gt(this.currentTime)));
  }
  play() {
    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: i = U0, onPlay: s, startTime: l } = this.options;
    (this.driver || (this.driver = i((d) => this.tick(d))), s && s());
    const c = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = c - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = c)
        : (this.startTime = l ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var i;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime = (i = this.currentTime) !== null && i !== void 0 ? i : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: i } = this.options;
    i && i();
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
  sample(i) {
    return ((this.startTime = 0), this.tick(i, !0));
  }
}
const H0 = new Set(["opacity", "clipPath", "filter", "transform"]);
function K0(
  n,
  i,
  s,
  {
    delay: l = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: p = "easeInOut",
    times: m,
  } = {},
) {
  const y = { [i]: s };
  m && (y.offset = m);
  const g = sp(p, c);
  return (
    Array.isArray(g) && (y.easing = g),
    n.animate(y, {
      delay: l,
      duration: c,
      easing: Array.isArray(g) ? "linear" : g,
      fill: "both",
      iterations: d + 1,
      direction: f === "reverse" ? "alternate" : "normal",
    })
  );
}
const G0 = _a(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Ys = 10,
  Q0 = 2e4;
function Y0(n) {
  return Za(n.type) || n.type === "spring" || !ip(n.ease);
}
function X0(n, i) {
  const s = new uu({ ...i, keyframes: n, repeat: 0, delay: 0, isGenerator: !0 });
  let l = { done: !1, value: n[0] };
  const c = [];
  let d = 0;
  for (; !l.done && d < Q0;) ((l = s.sample(d)), c.push(l.value), (d += Ys));
  return { times: void 0, keyframes: c, duration: d - Ys, ease: "linear" };
}
const Bp = { anticipate: gp, backInOut: yp, circInOut: xp };
function Z0(n) {
  return n in Bp;
}
class Ud extends jp {
  constructor(i) {
    super(i);
    const { name: s, motionValue: l, element: c, keyframes: d } = this.options;
    ((this.resolver = new Vp(d, (f, p) => this.onKeyframesResolved(f, p), s, l, c)),
      this.resolver.scheduleResolve());
  }
  initPlayback(i, s) {
    let {
      duration: l = 300,
      times: c,
      ease: d,
      type: f,
      motionValue: p,
      name: m,
      startTime: y,
    } = this.options;
    if (!p.owner || !p.owner.current) return !1;
    if ((typeof d == "string" && Ks() && Z0(d) && (d = Bp[d]), Y0(this.options))) {
      const { onComplete: x, onUpdate: k, motionValue: R, element: _, ...M } = this.options,
        V = X0(i, M);
      ((i = V.keyframes),
        i.length === 1 && (i[1] = i[0]),
        (l = V.duration),
        (c = V.times),
        (d = V.ease),
        (f = "keyframes"));
    }
    const g = K0(p.owner.current, m, i, { ...this.options, duration: l, times: c, ease: d });
    return (
      (g.startTime = y ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Cd(g, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (g.onfinish = () => {
            const { onComplete: x } = this.options;
            (p.set(to(i, this.options, s)), x && x(), this.cancel(), this.resolveFinishedPromise());
          }),
      { animation: g, duration: l, times: c, type: f, ease: d, keyframes: i }
    );
  }
  get duration() {
    const { resolved: i } = this;
    if (!i) return 0;
    const { duration: s } = i;
    return Gt(s);
  }
  get time() {
    const { resolved: i } = this;
    if (!i) return 0;
    const { animation: s } = i;
    return Gt(s.currentTime || 0);
  }
  set time(i) {
    const { resolved: s } = this;
    if (!s) return;
    const { animation: l } = s;
    l.currentTime = Kt(i);
  }
  get speed() {
    const { resolved: i } = this;
    if (!i) return 1;
    const { animation: s } = i;
    return s.playbackRate;
  }
  set speed(i) {
    const { resolved: s } = this;
    if (!s) return;
    const { animation: l } = s;
    l.playbackRate = i;
  }
  get state() {
    const { resolved: i } = this;
    if (!i) return "idle";
    const { animation: s } = i;
    return s.playState;
  }
  get startTime() {
    const { resolved: i } = this;
    if (!i) return null;
    const { animation: s } = i;
    return s.startTime;
  }
  attachTimeline(i) {
    if (!this._resolved) this.pendingTimeline = i;
    else {
      const { resolved: s } = this;
      if (!s) return ft;
      const { animation: l } = s;
      Cd(l, i);
    }
    return ft;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: i } = this;
    if (!i) return;
    const { animation: s } = i;
    (s.playState === "finished" && this.updateFinishedPromise(), s.play());
  }
  pause() {
    const { resolved: i } = this;
    if (!i) return;
    const { animation: s } = i;
    s.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")) return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: i } = this;
    if (!i) return;
    const { animation: s, keyframes: l, duration: c, type: d, ease: f, times: p } = i;
    if (s.playState === "idle" || s.playState === "finished") return;
    if (this.time) {
      const { motionValue: y, onUpdate: g, onComplete: x, element: k, ...R } = this.options,
        _ = new uu({
          ...R,
          keyframes: l,
          duration: c,
          type: d,
          ease: f,
          times: p,
          isGenerator: !0,
        }),
        M = Kt(this.time);
      y.setWithVelocity(_.sample(M - Ys).value, _.sample(M).value, Ys);
    }
    const { onStop: m } = this.options;
    (m && m(), this.cancel());
  }
  complete() {
    const { resolved: i } = this;
    i && i.animation.finish();
  }
  cancel() {
    const { resolved: i } = this;
    i && i.animation.cancel();
  }
  static supports(i) {
    const { motionValue: s, name: l, repeatDelay: c, repeatType: d, damping: f, type: p } = i;
    if (!s || !s.owner || !(s.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: m, transformTemplate: y } = s.owner.getProps();
    return G0() && l && H0.has(l) && !m && !y && !c && d !== "mirror" && f !== 0 && p !== "inertia";
  }
}
const q0 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  J0 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  b0 = { type: "keyframes", duration: 0.8 },
  e1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  t1 = (n, { keyframes: i }) =>
    i.length > 2 ? b0 : On.has(n) ? (n.startsWith("scale") ? J0(i[1]) : q0) : e1;
function n1({
  when: n,
  delay: i,
  delayChildren: s,
  staggerChildren: l,
  staggerDirection: c,
  repeat: d,
  repeatType: f,
  repeatDelay: p,
  from: m,
  elapsed: y,
  ...g
}) {
  return !!Object.keys(g).length;
}
const cu =
  (n, i, s, l = {}, c, d) =>
  (f) => {
    const p = Xa(l, n) || {},
      m = p.delay || l.delay || 0;
    let { elapsed: y = 0 } = l;
    y = y - Kt(m);
    let g = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...p,
      delay: -y,
      onUpdate: (k) => {
        (i.set(k), p.onUpdate && p.onUpdate(k));
      },
      onComplete: () => {
        (f(), p.onComplete && p.onComplete());
      },
      name: n,
      motionValue: i,
      element: d ? void 0 : c,
    };
    (n1(p) || (g = { ...g, ...t1(n, g) }),
      g.duration && (g.duration = Kt(g.duration)),
      g.repeatDelay && (g.repeatDelay = Kt(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from));
    let x = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        ((g.duration = 0), g.delay === 0 && (x = !0)),
      x && !d && i.get() !== void 0)
    ) {
      const k = to(g.keyframes, p);
      if (k !== void 0)
        return (
          xe.update(() => {
            (g.onUpdate(k), g.onComplete());
          }),
          new Sv([])
        );
    }
    return !d && Ud.supports(g) ? new Ud(g) : new uu(g);
  };
function r1({ protectedKeys: n, needsAnimating: i }, s) {
  const l = n.hasOwnProperty(s) && i[s] !== !0;
  return ((i[s] = !1), l);
}
function Up(n, i, { delay: s = 0, transitionOverride: l, type: c } = {}) {
  var d;
  let { transition: f = n.getDefaultTransition(), transitionEnd: p, ...m } = i;
  l && (f = l);
  const y = [],
    g = c && n.animationState && n.animationState.getState()[c];
  for (const x in m) {
    const k = n.getValue(x, (d = n.latestValues[x]) !== null && d !== void 0 ? d : null),
      R = m[x];
    if (R === void 0 || (g && r1(g, x))) continue;
    const _ = { delay: s, ...Xa(f || {}, x) };
    let M = !1;
    if (window.MotionHandoffAnimation) {
      const I = fp(n);
      if (I) {
        const W = window.MotionHandoffAnimation(I, x, xe);
        W !== null && ((_.startTime = W), (M = !0));
      }
    }
    (ga(n, x), k.start(cu(x, k, R, n.shouldReduceMotion && up.has(x) ? { type: !1 } : _, n, M)));
    const V = k.animation;
    V && y.push(V);
  }
  return (
    p &&
      Promise.all(y).then(() => {
        xe.update(() => {
          p && _v(n, p);
        });
      }),
    y
  );
}
function Ta(n, i, s = {}) {
  var l;
  const c = eo(
    n,
    i,
    s.type === "exit"
      ? (l = n.presenceContext) === null || l === void 0
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: d = n.getDefaultTransition() || {} } = c || {};
  s.transitionOverride && (d = s.transitionOverride);
  const f = c ? () => Promise.all(Up(n, c, s)) : () => Promise.resolve(),
    p =
      n.variantChildren && n.variantChildren.size
        ? (y = 0) => {
            const { delayChildren: g = 0, staggerChildren: x, staggerDirection: k } = d;
            return i1(n, i, g + y, x, k, s);
          }
        : () => Promise.resolve(),
    { when: m } = d;
  if (m) {
    const [y, g] = m === "beforeChildren" ? [f, p] : [p, f];
    return y().then(() => g());
  } else return Promise.all([f(), p(s.delay)]);
}
function i1(n, i, s = 0, l = 0, c = 1, d) {
  const f = [],
    p = (n.variantChildren.size - 1) * l,
    m = c === 1 ? (y = 0) => y * l : (y = 0) => p - y * l;
  return (
    Array.from(n.variantChildren)
      .sort(s1)
      .forEach((y, g) => {
        (y.notify("AnimationStart", i),
          f.push(Ta(y, i, { ...d, delay: s + m(g) }).then(() => y.notify("AnimationComplete", i))));
      }),
    Promise.all(f)
  );
}
function s1(n, i) {
  return n.sortNodePosition(i);
}
function o1(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const c = i.map((d) => Ta(n, d, s));
    l = Promise.all(c);
  } else if (typeof i == "string") l = Ta(n, i, s);
  else {
    const c = typeof i == "function" ? eo(n, i, s.custom) : i;
    l = Promise.all(Up(n, c, s));
  }
  return l.then(() => {
    n.notify("AnimationComplete", i);
  });
}
const l1 = Ia.length;
function Wp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? Wp(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const i = {};
  for (let s = 0; s < l1; s++) {
    const l = Ia[s],
      c = n.props[l];
    (mi(c) || c === !1) && (i[l] = c);
  }
  return i;
}
const a1 = [...Fa].reverse(),
  u1 = Fa.length;
function c1(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: l }) => o1(n, s, l)));
}
function f1(n) {
  let i = c1(n),
    s = Wd(),
    l = !0;
  const c = (m) => (y, g) => {
    var x;
    const k = eo(
      n,
      g,
      m === "exit"
        ? (x = n.presenceContext) === null || x === void 0
          ? void 0
          : x.custom
        : void 0,
    );
    if (k) {
      const { transition: R, transitionEnd: _, ...M } = k;
      y = { ...y, ...M, ..._ };
    }
    return y;
  };
  function d(m) {
    i = m(n);
  }
  function f(m) {
    const { props: y } = n,
      g = Wp(n.parent) || {},
      x = [],
      k = new Set();
    let R = {},
      _ = 1 / 0;
    for (let V = 0; V < u1; V++) {
      const I = a1[V],
        W = s[I],
        K = y[I] !== void 0 ? y[I] : g[I],
        X = mi(K),
        B = I === m ? W.isActive : null;
      B === !1 && (_ = V);
      let ee = K === g[I] && K !== y[I] && X;
      if (
        (ee && l && n.manuallyAnimateOnMount && (ee = !1),
        (W.protectedKeys = { ...R }),
        (!W.isActive && B === null) || (!K && !W.prevProp) || Js(K) || typeof K == "boolean")
      )
        continue;
      const le = d1(W.prevProp, K);
      let Z = le || (I === m && W.isActive && !ee && X) || (V > _ && X),
        ye = !1;
      const Ce = Array.isArray(K) ? K : [K];
      let Ze = Ce.reduce(c(I), {});
      B === !1 && (Ze = {});
      const { prevResolvedValues: it = {} } = W,
        Ge = { ...it, ...Ze },
        qe = (ie) => {
          ((Z = !0), k.has(ie) && ((ye = !0), k.delete(ie)), (W.needsAnimating[ie] = !0));
          const O = n.getValue(ie);
          O && (O.liveStyle = !1);
        };
      for (const ie in Ge) {
        const O = Ze[ie],
          q = it[ie];
        if (R.hasOwnProperty(ie)) continue;
        let $ = !1;
        (pa(O) && pa(q) ? ($ = !tp(O, q)) : ($ = O !== q),
          $
            ? O != null
              ? qe(ie)
              : k.add(ie)
            : O !== void 0 && k.has(ie)
              ? qe(ie)
              : (W.protectedKeys[ie] = !0));
      }
      ((W.prevProp = K),
        (W.prevResolvedValues = Ze),
        W.isActive && (R = { ...R, ...Ze }),
        l && n.blockInitialAnimation && (Z = !1),
        Z &&
          (!(ee && le) || ye) &&
          x.push(...Ce.map((ie) => ({ animation: ie, options: { type: I } }))));
    }
    if (k.size) {
      const V = {};
      (k.forEach((I) => {
        const W = n.getBaseTarget(I),
          K = n.getValue(I);
        (K && (K.liveStyle = !0), (V[I] = W ?? null));
      }),
        x.push({ animation: V }));
    }
    let M = !!x.length;
    return (
      l && (y.initial === !1 || y.initial === y.animate) && !n.manuallyAnimateOnMount && (M = !1),
      (l = !1),
      M ? i(x) : Promise.resolve()
    );
  }
  function p(m, y) {
    var g;
    if (s[m].isActive === y) return Promise.resolve();
    ((g = n.variantChildren) === null ||
      g === void 0 ||
      g.forEach((k) => {
        var R;
        return (R = k.animationState) === null || R === void 0 ? void 0 : R.setActive(m, y);
      }),
      (s[m].isActive = y));
    const x = f(m);
    for (const k in s) s[k].protectedKeys = {};
    return x;
  }
  return {
    animateChanges: f,
    setActive: p,
    setAnimateFunction: d,
    getState: () => s,
    reset: () => {
      ((s = Wd()), (l = !0));
    },
  };
}
function d1(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !tp(i, n) : !1;
}
function Ln(n = !1) {
  return { isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Wd() {
  return {
    animate: Ln(!0),
    whileInView: Ln(),
    whileHover: Ln(),
    whileTap: Ln(),
    whileDrag: Ln(),
    whileFocus: Ln(),
    exit: Ln(),
  };
}
class gn {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
class h1 extends gn {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = f1(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Js(i) && (this.unmountControls = i.subscribe(this.node));
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
    (this.node.animationState.reset(),
      (i = this.unmountControls) === null || i === void 0 || i.call(this));
  }
}
let p1 = 0;
class m1 extends gn {
  constructor() {
    (super(...arguments), (this.id = p1++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: s } = this.node.presenceContext,
      { isPresent: l } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === l) return;
    const c = this.node.animationState.setActive("exit", !i);
    s && !i && c.then(() => s(this.id));
  }
  mount() {
    const { register: i } = this.node.presenceContext || {};
    i && (this.unmount = i(this.id));
  }
  unmount() {}
}
const y1 = { animation: { Feature: h1 }, exit: { Feature: m1 } };
function xi(n, i, s, l = { passive: !0 }) {
  return (n.addEventListener(i, s, l), () => n.removeEventListener(i, s));
}
function Pi(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const g1 = (n) => (i) => Ja(i) && n(i, Pi(i));
function di(n, i, s, l) {
  return xi(n, i, g1(s), l);
}
const $d = (n, i) => Math.abs(n - i);
function v1(n, i) {
  const s = $d(n.x, i.x),
    l = $d(n.y, i.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
class $p {
  constructor(i, s, { transformPagePoint: l, contextWindow: c, dragSnapToOrigin: d = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const x = aa(this.lastMoveEventInfo, this.history),
          k = this.startEvent !== null,
          R = v1(x.offset, { x: 0, y: 0 }) >= 3;
        if (!k && !R) return;
        const { point: _ } = x,
          { timestamp: M } = ze;
        this.history.push({ ..._, timestamp: M });
        const { onStart: V, onMove: I } = this.handlers;
        (k || (V && V(this.lastMoveEvent, x), (this.startEvent = this.lastMoveEvent)),
          I && I(this.lastMoveEvent, x));
      }),
      (this.handlePointerMove = (x, k) => {
        ((this.lastMoveEvent = x),
          (this.lastMoveEventInfo = la(k, this.transformPagePoint)),
          xe.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (x, k) => {
        this.end();
        const { onEnd: R, onSessionEnd: _, resumeAnimation: M } = this.handlers;
        if ((this.dragSnapToOrigin && M && M(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const V = aa(
          x.type === "pointercancel" ? this.lastMoveEventInfo : la(k, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && R && R(x, V), _ && _(x, V));
      }),
      !Ja(i))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = l),
      (this.contextWindow = c || window));
    const f = Pi(i),
      p = la(f, this.transformPagePoint),
      { point: m } = p,
      { timestamp: y } = ze;
    this.history = [{ ...m, timestamp: y }];
    const { onSessionStart: g } = s;
    (g && g(i, aa(p, this.history)),
      (this.removeListeners = ki(
        di(this.contextWindow, "pointermove", this.handlePointerMove),
        di(this.contextWindow, "pointerup", this.handlePointerUp),
        di(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(), mn(this.updatePoint));
  }
}
function la(n, i) {
  return i ? { point: i(n.point) } : n;
}
function Hd(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function aa({ point: n }, i) {
  return { point: n, delta: Hd(n, Hp(i)), offset: Hd(n, x1(i)), velocity: w1(i, 0.1) };
}
function x1(n) {
  return n[0];
}
function Hp(n) {
  return n[n.length - 1];
}
function w1(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    l = null;
  const c = Hp(n);
  for (; s >= 0 && ((l = n[s]), !(c.timestamp - l.timestamp > Kt(i)));) s--;
  if (!l) return { x: 0, y: 0 };
  const d = Gt(c.timestamp - l.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - l.x) / d, y: (c.y - l.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
const Kp = 1e-4,
  S1 = 1 - Kp,
  k1 = 1 + Kp,
  Gp = 0.01,
  P1 = 0 - Gp,
  T1 = 0 + Gp;
function dt(n) {
  return n.max - n.min;
}
function C1(n, i, s) {
  return Math.abs(n - i) <= s;
}
function Kd(n, i, s, l = 0.5) {
  ((n.origin = l),
    (n.originPoint = Te(i.min, i.max, n.origin)),
    (n.scale = dt(s) / dt(i)),
    (n.translate = Te(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= S1 && n.scale <= k1) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= P1 && n.translate <= T1) || isNaN(n.translate)) && (n.translate = 0));
}
function hi(n, i, s, l) {
  (Kd(n.x, i.x, s.x, l ? l.originX : void 0), Kd(n.y, i.y, s.y, l ? l.originY : void 0));
}
function Gd(n, i, s) {
  ((n.min = s.min + i.min), (n.max = n.min + dt(i)));
}
function E1(n, i, s) {
  (Gd(n.x, i.x, s.x), Gd(n.y, i.y, s.y));
}
function Qd(n, i, s) {
  ((n.min = i.min - s.min), (n.max = n.min + dt(i)));
}
function pi(n, i, s) {
  (Qd(n.x, i.x, s.x), Qd(n.y, i.y, s.y));
}
function A1(n, { min: i, max: s }, l) {
  return (
    i !== void 0 && n < i
      ? (n = l ? Te(i, n, l.min) : Math.max(n, i))
      : s !== void 0 && n > s && (n = l ? Te(s, n, l.max) : Math.min(n, s)),
    n
  );
}
function Yd(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  };
}
function R1(n, { top: i, left: s, bottom: l, right: c }) {
  return { x: Yd(n.x, s, c), y: Yd(n.y, i, l) };
}
function Xd(n, i) {
  let s = i.min - n.min,
    l = i.max - n.max;
  return (i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l });
}
function M1(n, i) {
  return { x: Xd(n.x, i.x), y: Xd(n.y, i.y) };
}
function D1(n, i) {
  let s = 0.5;
  const l = dt(n),
    c = dt(i);
  return (
    c > l ? (s = mr(i.min, i.max - l, n.min)) : l > c && (s = mr(n.min, n.max - c, i.min)),
    Qt(0, 1, s)
  );
}
function L1(n, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
  );
}
const Ca = 0.35;
function N1(n = Ca) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Ca),
    { x: Zd(n, "left", "right"), y: Zd(n, "top", "bottom") }
  );
}
function Zd(n, i, s) {
  return { min: qd(n, i), max: qd(n, s) };
}
function qd(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const Jd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  dr = () => ({ x: Jd(), y: Jd() }),
  bd = () => ({ min: 0, max: 0 }),
  De = () => ({ x: bd(), y: bd() });
function wt(n) {
  return [n("x"), n("y")];
}
function Qp({ top: n, left: i, right: s, bottom: l }) {
  return { x: { min: i, max: s }, y: { min: n, max: l } };
}
function V1({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function j1(n, i) {
  if (!i) return n;
  const s = i({ x: n.left, y: n.top }),
    l = i({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: l.y, right: l.x };
}
function ua(n) {
  return n === void 0 || n === 1;
}
function Ea({ scale: n, scaleX: i, scaleY: s }) {
  return !ua(n) || !ua(i) || !ua(s);
}
function Vn(n) {
  return Ea(n) || Yp(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Yp(n) {
  return eh(n.x) || eh(n.y);
}
function eh(n) {
  return n && n !== "0%";
}
function Xs(n, i, s) {
  const l = n - s,
    c = i * l;
  return s + c;
}
function th(n, i, s, l, c) {
  return (c !== void 0 && (n = Xs(n, c, l)), Xs(n, s, l) + i);
}
function Aa(n, i = 0, s = 1, l, c) {
  ((n.min = th(n.min, i, s, l, c)), (n.max = th(n.max, i, s, l, c)));
}
function Xp(n, { x: i, y: s }) {
  (Aa(n.x, i.translate, i.scale, i.originPoint), Aa(n.y, s.translate, s.scale, s.originPoint));
}
const nh = 0.999999999999,
  rh = 1.0000000000001;
function _1(n, i, s, l = !1) {
  const c = s.length;
  if (!c) return;
  i.x = i.y = 1;
  let d, f;
  for (let p = 0; p < c; p++) {
    ((d = s[p]), (f = d.projectionDelta));
    const { visualElement: m } = d.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (l &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        pr(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Xp(n, f)),
      l && Vn(d.latestValues) && pr(n, d.latestValues));
  }
  (i.x < rh && i.x > nh && (i.x = 1), i.y < rh && i.y > nh && (i.y = 1));
}
function hr(n, i) {
  ((n.min = n.min + i), (n.max = n.max + i));
}
function ih(n, i, s, l, c = 0.5) {
  const d = Te(n.min, n.max, c);
  Aa(n, i, s, d, l);
}
function pr(n, i) {
  (ih(n.x, i.x, i.scaleX, i.scale, i.originX), ih(n.y, i.y, i.scaleY, i.scale, i.originY));
}
function Zp(n, i) {
  return Qp(j1(n.getBoundingClientRect(), i));
}
function F1(n, i, s) {
  const l = Zp(n, s),
    { scroll: c } = i;
  return (c && (hr(l.x, c.offset.x), hr(l.y, c.offset.y)), l);
}
const qp = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  I1 = new WeakMap();
class O1 {
  constructor(i) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = De()),
      (this.visualElement = i));
  }
  start(i, { snapToCursor: s = !1 } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const c = (g) => {
        const { dragSnapToOrigin: x } = this.getProps();
        (x ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(Pi(g).point));
      },
      d = (g, x) => {
        const { drag: k, dragPropagation: R, onDragStart: _ } = this.getProps();
        if (
          k &&
          !R &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Dv(k)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          wt((V) => {
            let I = this.getAxisMotionValue(V).get() || 0;
            if (_t.test(I)) {
              const { projection: W } = this.visualElement;
              if (W && W.layout) {
                const K = W.layout.layoutBox[V];
                K && (I = dt(K) * (parseFloat(I) / 100));
              }
            }
            this.originPoint[V] = I;
          }),
          _ && xe.postRender(() => _(g, x)),
          ga(this.visualElement, "transform"));
        const { animationState: M } = this.visualElement;
        M && M.setActive("whileDrag", !0);
      },
      f = (g, x) => {
        const {
          dragPropagation: k,
          dragDirectionLock: R,
          onDirectionLock: _,
          onDrag: M,
        } = this.getProps();
        if (!k && !this.openDragLock) return;
        const { offset: V } = x;
        if (R && this.currentDirection === null) {
          ((this.currentDirection = z1(V)),
            this.currentDirection !== null && _ && _(this.currentDirection));
          return;
        }
        (this.updateAxis("x", x.point, V),
          this.updateAxis("y", x.point, V),
          this.visualElement.render(),
          M && M(g, x));
      },
      p = (g, x) => this.stop(g, x),
      m = () =>
        wt((g) => {
          var x;
          return (
            this.getAnimationState(g) === "paused" &&
            ((x = this.getAxisMotionValue(g).animation) === null || x === void 0
              ? void 0
              : x.play())
          );
        }),
      { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new $p(
      i,
      { onSessionStart: c, onStart: d, onMove: f, onSessionEnd: p, resumeAnimation: m },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        contextWindow: qp(this.visualElement),
      },
    );
  }
  stop(i, s) {
    const l = this.isDragging;
    if ((this.cancel(), !l)) return;
    const { velocity: c } = s;
    this.startAnimation(c);
    const { onDragEnd: d } = this.getProps();
    d && xe.postRender(() => d(i, s));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: s } = this.visualElement;
    (i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: l } = this.getProps();
    (!l && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1));
  }
  updateAxis(i, s, l) {
    const { drag: c } = this.getProps();
    if (!l || !Os(i, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + l[i];
    (this.constraints && this.constraints[i] && (f = A1(f, this.constraints[i], this.elastic[i])),
      d.set(f));
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: s, dragElastic: l } = this.getProps(),
      c =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (i = this.visualElement.projection) === null || i === void 0
            ? void 0
            : i.layout,
      d = this.constraints;
    (s && cr(s)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : s && c
        ? (this.constraints = R1(c.layoutBox, s))
        : (this.constraints = !1),
      (this.elastic = N1(l)),
      d !== this.constraints &&
        c &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        wt((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = L1(c.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !cr(i)) return !1;
    const l = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = F1(l, c.root, this.visualElement.getTransformPagePoint());
    let f = M1(c.layout.layoutBox, d);
    if (s) {
      const p = s(V1(f));
      ((this.hasMutatedConstraints = !!p), p && (f = Qp(p)));
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
      y = wt((g) => {
        if (!Os(g, s, this.currentDirection)) return;
        let x = (m && m[g]) || {};
        f && (x = { min: 0, max: 0 });
        const k = c ? 200 : 1e6,
          R = c ? 40 : 1e7,
          _ = {
            type: "inertia",
            velocity: l ? i[g] : 0,
            bounceStiffness: k,
            bounceDamping: R,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...x,
          };
        return this.startAxisValueAnimation(g, _);
      });
    return Promise.all(y).then(p);
  }
  startAxisValueAnimation(i, s) {
    const l = this.getAxisMotionValue(i);
    return (ga(this.visualElement, i), l.start(cu(i, l, 0, s, this.visualElement, !1)));
  }
  stopAnimation() {
    wt((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    wt((i) => {
      var s;
      return (s = this.getAxisMotionValue(i).animation) === null || s === void 0
        ? void 0
        : s.pause();
    });
  }
  getAnimationState(i) {
    var s;
    return (s = this.getAxisMotionValue(i).animation) === null || s === void 0 ? void 0 : s.state;
  }
  getAxisMotionValue(i) {
    const s = `_drag${i.toUpperCase()}`,
      l = this.visualElement.getProps(),
      c = l[s];
    return c || this.visualElement.getValue(i, (l.initial ? l.initial[i] : void 0) || 0);
  }
  snapToCursor(i) {
    wt((s) => {
      const { drag: l } = this.getProps();
      if (!Os(s, l, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(s);
      if (c && c.layout) {
        const { min: f, max: p } = c.layout.layoutBox[s];
        d.set(i[s] - Te(f, p, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: s } = this.getProps(),
      { projection: l } = this.visualElement;
    if (!cr(s) || !l || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    wt((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = D1({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      this.resolveConstraints(),
      wt((f) => {
        if (!Os(f, i, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: y } = this.constraints[f];
        p.set(Te(m, y, c[f]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    I1.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = di(i, "pointerdown", (m) => {
        const { drag: y, dragListener: g = !0 } = this.getProps();
        y && g && this.start(m);
      }),
      l = () => {
        const { dragConstraints: m } = this.getProps();
        cr(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", l);
    (c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), xe.read(l));
    const f = xi(window, "resize", () => this.scalePositionWithinConstraints()),
      p = c.addEventListener("didUpdate", ({ delta: m, hasLayoutChanged: y }) => {
        this.isDragging &&
          y &&
          (wt((g) => {
            const x = this.getAxisMotionValue(g);
            x && ((this.originPoint[g] += m[g].translate), x.set(x.get() + m[g].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (f(), s(), d(), p && p());
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: l = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: f = Ca,
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
function Os(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n);
}
function z1(n, i = 10) {
  let s = null;
  return (Math.abs(n.y) > i ? (s = "y") : Math.abs(n.x) > i && (s = "x"), s);
}
class B1 extends gn {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = ft),
      (this.removeListeners = ft),
      (this.controls = new O1(i)));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    (i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ft));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const sh = (n) => (i, s) => {
  n && xe.postRender(() => n(i, s));
};
class U1 extends gn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = ft));
  }
  onPointerDown(i) {
    this.session = new $p(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: qp(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: s, onPan: l, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: sh(i),
      onStart: sh(s),
      onMove: l,
      onEnd: (d, f) => {
        (delete this.session, c && xe.postRender(() => c(d, f)));
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
const Ws = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function oh(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const li = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (te.test(n)) n = parseFloat(n);
        else return n;
      const s = oh(n, i.target.x),
        l = oh(n, i.target.y);
      return `${s}% ${l}%`;
    },
  },
  W1 = {
    correct: (n, { treeScale: i, projectionDelta: s }) => {
      const l = n,
        c = yn.parse(n);
      if (c.length > 5) return l;
      const d = yn.createTransformer(n),
        f = typeof c[0] != "number" ? 1 : 0,
        p = s.x.scale * i.x,
        m = s.y.scale * i.y;
      ((c[0 + f] /= p), (c[1 + f] /= m));
      const y = Te(p, m, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= y),
        typeof c[3 + f] == "number" && (c[3 + f] /= y),
        d(c)
      );
    },
  };
class $1 extends z.Component {
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l, layoutId: c } = this.props,
      { projection: d } = i;
    (uv(H1),
      d &&
        (s.group && s.group.add(d),
        l && l.register && c && l.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({ ...d.options, onExitComplete: () => this.safeToRemove() })),
      (Ws.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: s, visualElement: l, drag: c, isPresent: d } = this.props,
      f = l.projection;
    return (
      f &&
        ((f.isPresent = d),
        c || i.layoutDependency !== s || s === void 0 ? f.willUpdate() : this.safeToRemove(),
        i.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              xe.postRender(() => {
                const p = f.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      za.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l } = this.props,
      { projection: c } = i;
    c &&
      (c.scheduleCheckAfterUnmount(),
      s && s.group && s.group.remove(c),
      l && l.deregister && l.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function Jp(n) {
  const [i, s] = jh(),
    l = z.useContext(La);
  return A.jsx($1, {
    ...n,
    layoutGroup: l,
    switchLayoutGroup: z.useContext(Wh),
    isPresent: i,
    safeToRemove: s,
  });
}
const H1 = {
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
  boxShadow: W1,
};
function K1(n, i, s) {
  const l = Ke(n) ? n : gi(n);
  return (l.start(cu("", l, i, s)), l.animation);
}
function G1(n) {
  return n instanceof SVGElement && n.tagName !== "svg";
}
const Q1 = (n, i) => n.depth - i.depth;
class Y1 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (ba(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (eu(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(Q1), (this.isDirty = !1), this.children.forEach(i));
  }
}
function X1(n, i) {
  const s = Ft.now(),
    l = ({ timestamp: c }) => {
      const d = c - s;
      d >= i && (mn(l), n(d - i));
    };
  return (xe.read(l, !0), () => mn(l));
}
const bp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Z1 = bp.length,
  lh = (n) => (typeof n == "string" ? parseFloat(n) : n),
  ah = (n) => typeof n == "number" || te.test(n);
function q1(n, i, s, l, c, d) {
  c
    ? ((n.opacity = Te(0, s.opacity !== void 0 ? s.opacity : 1, J1(l))),
      (n.opacityExit = Te(i.opacity !== void 0 ? i.opacity : 1, 0, b1(l))))
    : d &&
      (n.opacity = Te(
        i.opacity !== void 0 ? i.opacity : 1,
        s.opacity !== void 0 ? s.opacity : 1,
        l,
      ));
  for (let f = 0; f < Z1; f++) {
    const p = `border${bp[f]}Radius`;
    let m = uh(i, p),
      y = uh(s, p);
    if (m === void 0 && y === void 0) continue;
    (m || (m = 0),
      y || (y = 0),
      m === 0 || y === 0 || ah(m) === ah(y)
        ? ((n[p] = Math.max(Te(lh(m), lh(y), l), 0)), (_t.test(y) || _t.test(m)) && (n[p] += "%"))
        : (n[p] = y));
  }
  (i.rotate || s.rotate) && (n.rotate = Te(i.rotate || 0, s.rotate || 0, l));
}
function uh(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const J1 = em(0, 0.5, vp),
  b1 = em(0.5, 0.95, ft);
function em(n, i, s) {
  return (l) => (l < n ? 0 : l > i ? 1 : s(mr(n, i, l)));
}
function ch(n, i) {
  ((n.min = i.min), (n.max = i.max));
}
function xt(n, i) {
  (ch(n.x, i.x), ch(n.y, i.y));
}
function fh(n, i) {
  ((n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin));
}
function dh(n, i, s, l, c) {
  return ((n -= i), (n = Xs(n, 1 / s, l)), c !== void 0 && (n = Xs(n, 1 / c, l)), n);
}
function ex(n, i = 0, s = 1, l = 0.5, c, d = n, f = n) {
  if (
    (_t.test(i) && ((i = parseFloat(i)), (i = Te(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = Te(d.min, d.max, l);
  (n === d && (p -= i), (n.min = dh(n.min, i, s, p, c)), (n.max = dh(n.max, i, s, p, c)));
}
function hh(n, i, [s, l, c], d, f) {
  ex(n, i[s], i[l], i[c], i.scale, d, f);
}
const tx = ["x", "scaleX", "originX"],
  nx = ["y", "scaleY", "originY"];
function ph(n, i, s, l) {
  (hh(n.x, i, tx, s ? s.x : void 0, l ? l.x : void 0),
    hh(n.y, i, nx, s ? s.y : void 0, l ? l.y : void 0));
}
function mh(n) {
  return n.translate === 0 && n.scale === 1;
}
function tm(n) {
  return mh(n.x) && mh(n.y);
}
function yh(n, i) {
  return n.min === i.min && n.max === i.max;
}
function rx(n, i) {
  return yh(n.x, i.x) && yh(n.y, i.y);
}
function gh(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function nm(n, i) {
  return gh(n.x, i.x) && gh(n.y, i.y);
}
function vh(n) {
  return dt(n.x) / dt(n.y);
}
function xh(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
class ix {
  constructor() {
    this.members = [];
  }
  add(i) {
    (ba(this.members, i), i.scheduleRender());
  }
  remove(i) {
    if ((eu(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead)) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(i) {
    const s = this.members.findIndex((c) => i === c);
    if (s === 0) return !1;
    let l;
    for (let c = s; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        l = d;
        break;
      }
    }
    return l ? (this.promote(l), !0) : !1;
  }
  promote(i, s) {
    const l = this.lead;
    if (i !== l && ((this.prevLead = l), (this.lead = i), i.show(), l)) {
      (l.instance && l.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = l),
        s && (i.resumeFrom.preserveOpacity = !0),
        l.snapshot &&
          ((i.snapshot = l.snapshot),
          (i.snapshot.latestValues = l.animationValues || l.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0));
      const { crossfade: c } = i.options;
      c === !1 && l.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: s, resumingFrom: l } = i;
      (s.onExitComplete && s.onExitComplete(),
        l && l.options.onExitComplete && l.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function sx(n, i, s) {
  let l = "";
  const c = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((c || d || f) && (l = `translate3d(${c}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const { transformPerspective: y, rotate: g, rotateX: x, rotateY: k, skewX: R, skewY: _ } = s;
    (y && (l = `perspective(${y}px) ${l}`),
      g && (l += `rotate(${g}deg) `),
      x && (l += `rotateX(${x}deg) `),
      k && (l += `rotateY(${k}deg) `),
      R && (l += `skewX(${R}deg) `),
      _ && (l += `skewY(${_}deg) `));
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return ((p !== 1 || m !== 1) && (l += `scale(${p}, ${m})`), l || "none");
}
const jn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ci = typeof window < "u" && window.MotionDebug !== void 0,
  ca = ["", "X", "Y", "Z"],
  ox = { visibility: "hidden" },
  wh = 1e3;
let lx = 0;
function fa(n, i, s, l) {
  const { latestValues: c } = i;
  c[n] && ((s[n] = c[n]), i.setStaticValue(n, 0), l && (l[n] = 0));
}
function rm(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const s = fp(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", xe, !(c || d));
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
      ((this.id = lx++),
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
            ci && (jn.totalNodes = jn.resolvedTargetDeltas = jn.recalculatedProjection = 0),
            this.nodes.forEach(cx),
            this.nodes.forEach(mx),
            this.nodes.forEach(yx),
            this.nodes.forEach(fx),
            ci && window.MotionDebug.record(jn));
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
      this.root === this && (this.nodes = new Y1());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new tu()),
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
      ((this.isSVG = G1(f)), (this.instance = f));
      const { layoutId: m, layout: y, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        p && (y || m) && (this.isLayoutDirty = !0),
        n)
      ) {
        let x;
        const k = () => (this.root.updateBlockedByResize = !1);
        n(f, () => {
          ((this.root.updateBlockedByResize = !0),
            x && x(),
            (x = X1(k, 250)),
            Ws.hasAnimatedSinceResize &&
              ((Ws.hasAnimatedSinceResize = !1), this.nodes.forEach(kh)));
        });
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          g &&
          (m || y) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: x, hasLayoutChanged: k, hasRelativeTargetChanged: R, layout: _ }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const M = this.options.transition || g.getDefaultTransition() || Sx,
                { onLayoutAnimationStart: V, onLayoutAnimationComplete: I } = g.getProps(),
                W = !this.targetLayout || !nm(this.targetLayout, _) || R,
                K = !k && R;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                K ||
                (k && (W || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(x, K));
                const X = { ...Xa(M, "layout"), onPlay: V, onComplete: I };
                ((g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((X.delay = 0), (X.type = !1)),
                  this.startAnimation(X));
              } else
                (k || kh(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = _;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        mn(this.updateProjection));
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(gx), this.animationId++);
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
      for (let g = 0; g < this.path.length; g++) {
        const x = this.path[g];
        ((x.shouldResetTransform = !0),
          x.updateScroll("snapshot"),
          x.options.layoutRoot && x.willUpdate(!1));
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
        (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Sh));
        return;
      }
      (this.isUpdating || this.nodes.forEach(hx),
        (this.isUpdating = !1),
        this.nodes.forEach(px),
        this.nodes.forEach(ax),
        this.nodes.forEach(ux),
        this.clearAllSnapshots());
      const p = Ft.now();
      ((ze.delta = Qt(0, 1e3 / 60, p - ze.timestamp)),
        (ze.timestamp = p),
        (ze.isProcessing = !0),
        ta.update.process(ze),
        ta.preRender.process(ze),
        ta.render.process(ze),
        (ze.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), za.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(dx), this.sharedNodes.forEach(vx));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), xe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      xe.postRender(() => {
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
        (this.layoutCorrected = De()),
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
      if (!c) return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !tm(this.projectionDelta),
        m = this.getTransformTemplate(),
        y = m ? m(this.latestValues, "") : void 0,
        g = y !== this.prevTransformTemplateValue;
      f &&
        (p || Vn(this.latestValues) || g) &&
        (c(this.instance, y), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        f && (m = this.removeTransform(m)),
        kx(m),
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
      if (!p) return De();
      const m = p.measureViewportBox();
      if (!(
        ((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) || this.path.some(Px)
      )) {
        const { scroll: g } = this.root;
        g && (hr(m.x, g.offset.x), hr(m.y, g.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var p;
      const m = De();
      if ((xt(m, f), !((p = this.scroll) === null || p === void 0) && p.wasRoot)) return m;
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y],
          { scroll: x, options: k } = g;
        g !== this.root &&
          x &&
          k.layoutScroll &&
          (x.wasRoot && xt(m, f), hr(m.x, x.offset.x), hr(m.y, x.offset.y));
      }
      return m;
    }
    applyTransform(f, p = !1) {
      const m = De();
      xt(m, f);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        (!p &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          pr(m, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          Vn(g.latestValues) && pr(m, g.latestValues));
      }
      return (Vn(this.latestValues) && pr(m, this.latestValues), m);
    }
    removeTransform(f) {
      const p = De();
      xt(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const y = this.path[m];
        if (!y.instance || !Vn(y.latestValues)) continue;
        Ea(y.latestValues) && y.updateSnapshot();
        const g = De(),
          x = y.measurePageBox();
        (xt(g, x), ph(p, y.latestValues, y.snapshot ? y.snapshot.layoutBox : void 0, g));
      }
      return (Vn(this.latestValues) && ph(p, this.latestValues), p);
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
        this.relativeParent.resolvedRelativeTargetAt !== ze.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var p;
      const m = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty));
      const y = !!this.resumingFrom || this !== m;
      if (!(
        f ||
        (y && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        (!((p = this.parent) === null || p === void 0) && p.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: x, layoutId: k } = this.options;
      if (!(!this.layout || !(x || k))) {
        if (
          ((this.resolvedRelativeTargetAt = ze.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const R = this.getClosestProjectingParent();
          R && R.layout && this.animationProgress !== 1
            ? ((this.relativeParent = R),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = De()),
              (this.relativeTargetOrigin = De()),
              pi(this.relativeTargetOrigin, this.layout.layoutBox, R.layout.layoutBox),
              xt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = De()), (this.targetWithTransforms = De())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                E1(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : xt(this.target, this.layout.layoutBox),
                  Xp(this.target, this.targetDelta))
                : xt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const R = this.getClosestProjectingParent();
            R &&
            !!R.resumingFrom == !!this.resumingFrom &&
            !R.options.layoutScroll &&
            R.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = R),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = De()),
                (this.relativeTargetOrigin = De()),
                pi(this.relativeTargetOrigin, this.target, R.target),
                xt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ci && jn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ea(this.parent.latestValues) || Yp(this.parent.latestValues)))
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
      let y = !0;
      if (
        ((this.isProjectionDirty ||
          (!((f = this.parent) === null || f === void 0) && f.isProjectionDirty)) &&
          (y = !1),
        m && (this.isSharedProjectionDirty || this.isTransformDirty) && (y = !1),
        this.resolvedRelativeTargetAt === ze.timestamp && (y = !1),
        y)
      )
        return;
      const { layout: g, layoutId: x } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || x))
      )
        return;
      xt(this.layoutCorrected, this.layout.layoutBox);
      const k = this.treeScale.x,
        R = this.treeScale.y;
      (_1(this.layoutCorrected, this.treeScale, this.path, m),
        p.layout &&
          !p.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((p.target = p.layout.layoutBox), (p.targetWithTransforms = De())));
      const { target: _ } = p;
      if (!_) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (fh(this.prevProjectionDelta.x, this.projectionDelta.x),
          fh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        hi(this.projectionDelta, this.layoutCorrected, _, this.latestValues),
        (this.treeScale.x !== k ||
          this.treeScale.y !== R ||
          !xh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !xh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", _)),
        ci && jn.recalculatedProjection++);
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
      ((this.prevProjectionDelta = dr()),
        (this.projectionDelta = dr()),
        (this.projectionDeltaWithTransform = dr()));
    }
    setAnimationOrigin(f, p = !1) {
      const m = this.snapshot,
        y = m ? m.latestValues : {},
        g = { ...this.latestValues },
        x = dr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const k = De(),
        R = m ? m.source : void 0,
        _ = this.layout ? this.layout.source : void 0,
        M = R !== _,
        V = this.getStack(),
        I = !V || V.members.length <= 1,
        W = !!(M && !I && this.options.crossfade === !0 && !this.path.some(wx));
      this.animationProgress = 0;
      let K;
      ((this.mixTargetDelta = (X) => {
        const B = X / 1e3;
        (Ph(x.x, f.x, B),
          Ph(x.y, f.y, B),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (pi(k, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            xx(this.relativeTarget, this.relativeTargetOrigin, k, B),
            K && rx(this.relativeTarget, K) && (this.isProjectionDirty = !1),
            K || (K = De()),
            xt(K, this.relativeTarget)),
          M && ((this.animationValues = g), q1(g, y, this.latestValues, B, W, I)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = B));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (mn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = xe.update(() => {
          ((Ws.hasAnimatedSinceResize = !0),
            (this.currentAnimation = K1(0, wh, {
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
        (this.mixTargetDelta && this.mixTargetDelta(wh), this.currentAnimation.stop()),
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
          sm(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          m = this.target || De();
          const x = dt(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + x));
          const k = dt(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + k));
        }
        (xt(p, m), pr(p, g), hi(this.projectionDeltaWithTransform, this.layoutCorrected, p, g));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new ix()),
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
      m.z && fa("z", f, y, this.animationValues);
      for (let g = 0; g < ca.length; g++)
        (fa(`rotate${ca[g]}`, f, y, this.animationValues),
          fa(`skew${ca[g]}`, f, y, this.animationValues));
      f.render();
      for (const g in y)
        (f.setStaticValue(g, y[g]), this.animationValues && (this.animationValues[g] = y[g]));
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      var p, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return ox;
      const y = { visibility: "" },
        g = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (y.opacity = ""),
          (y.pointerEvents = Bs(f == null ? void 0 : f.pointerEvents) || ""),
          (y.transform = g ? g(this.latestValues, "") : "none"),
          y
        );
      const x = this.getLead();
      if (!this.projectionDelta || !this.layout || !x.target) {
        const M = {};
        return (
          this.options.layoutId &&
            ((M.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (M.pointerEvents = Bs(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !Vn(this.latestValues) &&
            ((M.transform = g ? g({}, "") : "none"), (this.hasProjected = !1)),
          M
        );
      }
      const k = x.animationValues || x.latestValues;
      (this.applyTransformsToTarget(),
        (y.transform = sx(this.projectionDeltaWithTransform, this.treeScale, k)),
        g && (y.transform = g(k, y.transform)));
      const { x: R, y: _ } = this.projectionDelta;
      ((y.transformOrigin = `${R.origin * 100}% ${_.origin * 100}% 0`),
        x.animationValues
          ? (y.opacity =
              x === this
                ? (m = (p = k.opacity) !== null && p !== void 0 ? p : this.latestValues.opacity) !==
                    null && m !== void 0
                  ? m
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : k.opacityExit)
          : (y.opacity =
              x === this
                ? k.opacity !== void 0
                  ? k.opacity
                  : ""
                : k.opacityExit !== void 0
                  ? k.opacityExit
                  : 0));
      for (const M in Hs) {
        if (k[M] === void 0) continue;
        const { correct: V, applyTo: I } = Hs[M],
          W = y.transform === "none" ? k[M] : V(k[M], x);
        if (I) {
          const K = I.length;
          for (let X = 0; X < K; X++) y[I[X]] = W;
        } else y[M] = W;
      }
      return (
        this.options.layoutId &&
          (y.pointerEvents = x === this ? Bs(f == null ? void 0 : f.pointerEvents) || "" : "none"),
        y
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
        this.root.nodes.forEach(Sh),
        this.root.sharedNodes.clear());
    }
  };
}
function ax(n) {
  n.updateLayout();
}
function ux(n) {
  var i;
  const s = ((i = n.resumeFrom) === null || i === void 0 ? void 0 : i.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && s && n.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: c } = n.layout,
      { animationType: d } = n.options,
      f = s.source !== n.layout.source;
    d === "size"
      ? wt((x) => {
          const k = f ? s.measuredBox[x] : s.layoutBox[x],
            R = dt(k);
          ((k.min = l[x].min), (k.max = k.min + R));
        })
      : sm(d, s.layoutBox, l) &&
        wt((x) => {
          const k = f ? s.measuredBox[x] : s.layoutBox[x],
            R = dt(l[x]);
          ((k.max = k.min + R),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[x].max = n.relativeTarget[x].min + R)));
        });
    const p = dr();
    hi(p, l, s.layoutBox);
    const m = dr();
    f ? hi(m, n.applyTransform(c, !0), s.measuredBox) : hi(m, l, s.layoutBox);
    const y = !tm(p);
    let g = !1;
    if (!n.resumeFrom) {
      const x = n.getClosestProjectingParent();
      if (x && !x.resumeFrom) {
        const { snapshot: k, layout: R } = x;
        if (k && R) {
          const _ = De();
          pi(_, s.layoutBox, k.layoutBox);
          const M = De();
          (pi(M, l, R.layoutBox),
            nm(_, M) || (g = !0),
            x.options.layoutRoot &&
              ((n.relativeTarget = M), (n.relativeTargetOrigin = _), (n.relativeParent = x)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: l,
      snapshot: s,
      delta: m,
      layoutDelta: p,
      hasLayoutChanged: y,
      hasRelativeTargetChanged: g,
    });
  } else if (n.isLead()) {
    const { onExitComplete: l } = n.options;
    l && l();
  }
  n.options.transition = void 0;
}
function cx(n) {
  (ci && jn.totalNodes++,
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
function fx(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function dx(n) {
  n.clearSnapshot();
}
function Sh(n) {
  n.clearMeasurements();
}
function hx(n) {
  n.isLayoutDirty = !1;
}
function px(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function kh(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function mx(n) {
  n.resolveTargetDelta();
}
function yx(n) {
  n.calcProjection();
}
function gx(n) {
  n.resetSkewAndRotation();
}
function vx(n) {
  n.removeLeadSnapshot();
}
function Ph(n, i, s) {
  ((n.translate = Te(i.translate, 0, s)),
    (n.scale = Te(i.scale, 1, s)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint));
}
function Th(n, i, s, l) {
  ((n.min = Te(i.min, s.min, l)), (n.max = Te(i.max, s.max, l)));
}
function xx(n, i, s, l) {
  (Th(n.x, i.x, s.x, l), Th(n.y, i.y, s.y, l));
}
function wx(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const Sx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ch = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  Eh = Ch("applewebkit/") && !Ch("chrome/") ? Math.round : ft;
function Ah(n) {
  ((n.min = Eh(n.min)), (n.max = Eh(n.max)));
}
function kx(n) {
  (Ah(n.x), Ah(n.y));
}
function sm(n, i, s) {
  return n === "position" || (n === "preserve-aspect" && !C1(vh(i), vh(s), 0.2));
}
function Px(n) {
  var i;
  return n !== n.root && ((i = n.scroll) === null || i === void 0 ? void 0 : i.wasRoot);
}
const Tx = im({
    attachResizeListener: (n, i) => xi(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  da = { current: void 0 },
  om = im({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!da.current) {
        const n = new Tx({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (da.current = n));
      }
      return da.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  Cx = { pan: { Feature: U1 }, drag: { Feature: B1, ProjectionNode: om, MeasureLayout: Jp } };
function Rh(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s,
    d = l[c];
  d && xe.postRender(() => d(i, Pi(i)));
}
class Ex extends gn {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = Cv(i, (s) => (Rh(this.node, s, "Start"), (l) => Rh(this.node, l, "End"))));
  }
  unmount() {}
}
class Ax extends gn {
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
    this.unmount = ki(
      xi(this.node.current, "focus", () => this.onFocus()),
      xi(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Mh(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s),
    d = l[c];
  d && xe.postRender(() => d(i, Pi(i)));
}
class Rx extends gn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = Mv(
        i,
        (s) => (
          Mh(this.node, s, "Start"),
          (l, { success: c }) => Mh(this.node, l, c ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Ra = new WeakMap(),
  ha = new WeakMap(),
  Mx = (n) => {
    const i = Ra.get(n.target);
    i && i(n);
  },
  Dx = (n) => {
    n.forEach(Mx);
  };
function Lx({ root: n, ...i }) {
  const s = n || document;
  ha.has(s) || ha.set(s, {});
  const l = ha.get(s),
    c = JSON.stringify(i);
  return (l[c] || (l[c] = new IntersectionObserver(Dx, { root: n, ...i })), l[c]);
}
function Nx(n, i, s) {
  const l = Lx(i);
  return (
    Ra.set(n, s),
    l.observe(n),
    () => {
      (Ra.delete(n), l.unobserve(n));
    }
  );
}
const Vx = { some: 0, all: 1 };
class jx extends gn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: s, margin: l, amount: c = "some", once: d } = i,
      f = {
        root: s ? s.current : void 0,
        rootMargin: l,
        threshold: typeof c == "number" ? c : Vx[c],
      },
      p = (m) => {
        const { isIntersecting: y } = m;
        if (this.isInView === y || ((this.isInView = y), d && !y && this.hasEnteredView)) return;
        (y && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", y));
        const { onViewportEnter: g, onViewportLeave: x } = this.node.getProps(),
          k = y ? g : x;
        k && k(m);
      };
    return Nx(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(_x(i, s)) && this.startObserver();
  }
  unmount() {}
}
function _x({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const Fx = {
    inView: { Feature: jx },
    tap: { Feature: Rx },
    focus: { Feature: Ax },
    hover: { Feature: Ex },
  },
  Ix = { layout: { ProjectionNode: om, MeasureLayout: Jp } },
  Ma = { current: null },
  lm = { current: !1 };
function Ox() {
  if (((lm.current = !0), !!ja))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Ma.current = n.matches);
      (n.addListener(i), i());
    } else Ma.current = !1;
}
const zx = [...Np, He, yn],
  Bx = (n) => zx.find(Lp(n)),
  Dh = new WeakMap();
function Ux(n, i, s) {
  for (const l in i) {
    const c = i[l],
      d = s[l];
    if (Ke(c)) n.addValue(l, c);
    else if (Ke(d)) n.addValue(l, gi(c, { owner: n }));
    else if (d !== c)
      if (n.hasValue(l)) {
        const f = n.getValue(l);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = n.getStaticValue(l);
        n.addValue(l, gi(f !== void 0 ? f : c, { owner: n }));
      }
  }
  for (const l in s) i[l] === void 0 && n.removeValue(l);
  return i;
}
const Lh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class Wx {
  scrapeMotionValuesFromProps(i, s, l) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: s,
      presenceContext: l,
      reducedMotionConfig: c,
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
      (this.KeyframeResolver = lu),
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
        const R = Ft.now();
        this.renderScheduledAt < R &&
          ((this.renderScheduledAt = R), xe.render(this.render, !1, !0));
      }));
    const { latestValues: m, renderState: y, onUpdate: g } = f;
    ((this.onUpdate = g),
      (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = s.initial ? { ...m } : {}),
      (this.renderState = y),
      (this.parent = i),
      (this.props = s),
      (this.presenceContext = l),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = p),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = bs(s)),
      (this.isVariantNode = Bh(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: x, ...k } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const R in k) {
      const _ = k[R];
      m[R] !== void 0 && Ke(_) && _.set(m[R], !1);
    }
  }
  mount(i) {
    ((this.current = i),
      Dh.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, l) => this.bindToMotionValue(l, s)),
      lm.current || Ox(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Ma.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Dh.delete(this.current),
      this.projection && this.projection.unmount(),
      mn(this.notifyUpdate),
      mn(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const s = this.features[i];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(i, s) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const l = On.has(i),
      c = s.on("change", (p) => {
        ((this.latestValues[i] = p),
          this.props.onUpdate && xe.preRender(this.notifyUpdate),
          l && this.projection && (this.projection.isTransformDirty = !0));
      }),
      d = s.on("renderRequest", this.scheduleRender);
    let f;
    (window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, i, s)),
      this.valueSubscriptions.set(i, () => {
        (c(), d(), f && f(), s.owner && s.stop());
      }));
  }
  sortNodePosition(i) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in yr) {
      const s = yr[i];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : De();
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
    for (let l = 0; l < Lh.length; l++) {
      const c = Lh[l];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = Ux(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this));
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
        ((l = gi(s === null ? void 0 : s, { owner: this })), this.addValue(i, l)),
      l
    );
  }
  readValue(i, s) {
    var l;
    let c =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (l = this.getBaseTargetFromProps(this.props, i)) !== null && l !== void 0
          ? l
          : this.readValueFromInstance(this.current, i, this.options);
    return (
      c != null &&
        (typeof c == "string" && (Mp(c) || wp(c))
          ? (c = parseFloat(c))
          : !Bx(c) && yn.test(s) && (c = Ep(i, s)),
        this.setBaseTarget(i, Ke(c) ? c.get() : c)),
      Ke(c) ? c.get() : c
    );
  }
  setBaseTarget(i, s) {
    this.baseTarget[i] = s;
  }
  getBaseTarget(i) {
    var s;
    const { initial: l } = this.props;
    let c;
    if (typeof l == "string" || typeof l == "object") {
      const f = Ua(
        this.props,
        l,
        (s = this.presenceContext) === null || s === void 0 ? void 0 : s.custom,
      );
      f && (c = f[i]);
    }
    if (l && c !== void 0) return c;
    const d = this.getBaseTargetFromProps(this.props, i);
    return d !== void 0 && !Ke(d)
      ? d
      : this.initialValues[i] !== void 0 && c === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, s) {
    return (this.events[i] || (this.events[i] = new tu()), this.events[i].add(s));
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
}
class am extends Wx {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Vp));
  }
  sortInstanceNodePosition(i, s) {
    return i.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, s) {
    return i.style ? i.style[s] : void 0;
  }
  removeValueFromRenderState(i, { vars: s, style: l }) {
    (delete s[i], delete l[i]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    Ke(i) &&
      (this.childSubscription = i.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
function $x(n) {
  return window.getComputedStyle(n);
}
class Hx extends am {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Xh));
  }
  readValueFromInstance(i, s) {
    if (On.has(s)) {
      const l = ou(s);
      return (l && l.default) || 0;
    } else {
      const l = $x(i),
        c = (Gh(s) ? l.getPropertyValue(s) : l[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return Zp(i, s);
  }
  build(i, s, l) {
    Ha(i, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return Ya(i, s, l);
  }
}
class Kx extends am {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = De));
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (On.has(s)) {
      const l = ou(s);
      return (l && l.default) || 0;
    }
    return ((s = Zh.has(s) ? s : Oa(s)), i.getAttribute(s));
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return bh(i, s, l);
  }
  build(i, s, l) {
    Ka(i, s, this.isSVGTag, l.transformTemplate);
  }
  renderInstance(i, s, l, c) {
    qh(i, s, l, c);
  }
  mount(i) {
    ((this.isSVGTag = Qa(i.tagName)), super.mount(i));
  }
}
const Gx = (n, i) => (Ba(n) ? new Kx(i) : new Hx(i, { allowProjection: n !== z.Fragment })),
  Qx = vv({ ...y1, ...Fx, ...Cx, ...Ix }, Gx),
  Fn = Vg(Qx);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yx = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  um = (...n) =>
    n
      .filter((i, s, l) => !!i && i.trim() !== "" && l.indexOf(i) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Xx = {
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
 */ const Zx = z.forwardRef(
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
    z.createElement(
      "svg",
      {
        ref: m,
        ...Xx,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: l ? (Number(s) * 24) / Number(i) : s,
        className: um("lucide", c),
        ...p,
      },
      [...f.map(([y, g]) => z.createElement(y, g)), ...(Array.isArray(d) ? d : [d])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wr = (n, i) => {
  const s = z.forwardRef(({ className: l, ...c }, d) =>
    z.createElement(Zx, { ref: d, iconNode: i, className: um(`lucide-${Yx(n)}`, l), ...c }),
  );
  return ((s.displayName = `${n}`), s);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qx = wr("CircleArrowRight", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cm = wr("Fingerprint", [
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fm = wr("LockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jx = wr("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bx = wr("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dm = wr("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db",
    },
  ],
]);
function hm(n) {
  return `#${n}`;
}
function pm(n) {
  const i = n.replace(/^\//, "").replace(/\/$/, "");
  return i ? `#/${i}` : "#/";
}
function fu(n) {
  const i = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return i
    ? i.startsWith("/")
      ? { kind: "route", path: i.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: i }
    : null;
}
function du(n, i = "smooth") {
  if (typeof document > "u") return !1;
  const s = document.getElementById(n);
  return s ? (s.scrollIntoView({ behavior: i, block: "start" }), !0) : !1;
}
function ew(n, i = "smooth") {
  if (typeof window > "u") return;
  const s = hm(n);
  if (du(n, i)) {
    window.history.replaceState(null, "", s);
    return;
  }
  window.location.hash = s;
}
function tw(n) {
  typeof window > "u" || (window.location.hash = pm(n));
}
function nw() {
  const n = fu();
  return (n == null ? void 0 : n.kind) === "route" ? n.path : "";
}
function rw(n) {
  return n.kind === "route" ? pm(n.path) : hm(n.id);
}
function iw(n, i) {
  if ((n.preventDefault(), i.kind === "route")) {
    tw(i.path);
    return;
  }
  ew(i.id);
}
function mm() {
  if (typeof window > "u") return;
  const n = fu();
  (n == null ? void 0 : n.kind) === "section" && requestAnimationFrame(() => du(n.id, "auto"));
}
function sw(n, i) {
  if (typeof window > "u") return () => {};
  const s = () => {
    const l = fu();
    if (!l) {
      n("");
      return;
    }
    if (l.kind === "route") {
      n(l.path);
      return;
    }
    (du(l.id, "smooth"), n(""));
  };
  return (
    s(),
    window.addEventListener("hashchange", s),
    () => window.removeEventListener("hashchange", s)
  );
}
function ow(n = "") {
  const [i, s] = z.useState(() => (typeof window < "u" ? nw() : n));
  return (z.useEffect(() => sw(s), []), i || n);
}
function lw({ routes: n, defaultRoute: i = "", className: s }) {
  const l = ow(i);
  z.useEffect(() => {
    mm();
  }, []);
  const c = l in n ? l : i,
    d = n[c] ?? n[i];
  return A.jsx("div", { className: s, children: d });
}
function ct({ target: n, children: i, className: s, onClick: l, ...c }) {
  return A.jsx("a", {
    href: rw(n),
    className: s,
    onClick: (d) => {
      (iw(d, n), l == null || l(d));
    },
    ...c,
    children: i,
  });
}
function aw() {
  const n = [
    [
      "How do I import passwords?",
      "Use the guided importer from 1Password, Bitwarden, or CSV export.",
    ],
    [
      "Is my master password stored?",
      "Never—only a salted verifier is kept locally on your device.",
    ],
    [
      "Can teams share vaults?",
      "Business plans support role-based shared vaults with audit trails.",
    ],
  ];
  return A.jsx("main", {
    className: "relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8",
    children: A.jsxs("section", {
      id: "help",
      className: "scroll-mt-24",
      children: [
        A.jsx("h1", {
          className: "mb-4",
          style: { fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" },
          children: "Help",
        }),
        A.jsx("p", {
          className: "mb-10 max-w-xl opacity-80",
          children:
            "Answers to the questions we hear most—plus direct support when you need a human.",
        }),
        A.jsxs("section", {
          id: "faq",
          className: "scroll-mt-24",
          children: [
            A.jsx("h2", { className: "text-lg font-semibold", children: "FAQ" }),
            A.jsx("dl", {
              className: "mt-6 space-y-4",
              children: n.map(([i, s]) =>
                A.jsxs(
                  "div",
                  {
                    className: "rounded-xl border border-[#192837]/10 bg-white/50 p-5",
                    children: [
                      A.jsx("dt", { className: "font-medium", children: i }),
                      A.jsx("dd", { className: "mt-2 text-sm opacity-80", children: s }),
                    ],
                  },
                  i,
                ),
              ),
            }),
          ],
        }),
        A.jsxs("section", {
          id: "contact",
          className: "mt-16 scroll-mt-24 border-t border-[#192837]/10 pt-16",
          children: [
            A.jsx("h2", { className: "text-lg font-semibold", children: "Contact support" }),
            A.jsx("p", {
              className: "mt-3 opacity-80",
              children: "support@vaultshield.example — 24/7 for Business plans.",
            }),
          ],
        }),
      ],
    }),
  });
}
const zs = {
    hidden: { opacity: 0, y: 28 },
    visible: (n) => ({
      opacity: 1,
      y: 0,
      transition: { delay: n * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  },
  uw = [
    { Icon: dm, label: "Instant autofill" },
    { Icon: fm, label: "Zero-knowledge vault" },
    { Icon: cm, label: "Biometric unlock" },
  ];
function cw() {
  return A.jsx("main", {
    id: "vault",
    className: "relative z-10 mx-auto max-w-[1280px] scroll-mt-24 px-5 sm:px-8",
    style: { paddingTop: "clamp(40px, 8vw, 72px)", paddingBottom: "clamp(48px, 10vw, 96px)" },
    children: A.jsxs("div", {
      className: "max-w-[560px]",
      children: [
        A.jsxs(Fn.h1, {
          custom: 0,
          variants: zs,
          initial: "hidden",
          animate: "visible",
          className: "mb-6",
          style: {
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.65rem, 5vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "var(--color-text)",
          },
          children: [
            A.jsx(dm, {
              size: 28,
              strokeWidth: 2,
              className: "mr-1 inline-block align-middle",
              style: { marginTop: -4, color: "var(--color-accent)" },
              "aria-hidden": !0,
            }),
            "Lock Down Your Passwords",
            " ",
            A.jsx(fm, {
              size: 28,
              strokeWidth: 2,
              className: "mx-1 inline-block align-middle",
              style: { marginTop: -4, color: "var(--color-accent)" },
              "aria-hidden": !0,
            }),
            "with Ironclad Security",
            " ",
            A.jsx(cm, {
              size: 28,
              strokeWidth: 2,
              className: "ml-1 inline-block align-middle",
              style: { marginTop: -4, color: "var(--color-accent)" },
              "aria-hidden": !0,
            }),
          ],
        }),
        A.jsx(Fn.p, {
          custom: 1,
          variants: zs,
          initial: "hidden",
          animate: "visible",
          className: "mb-8 opacity-80",
          style: { fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", lineHeight: 1.65, maxWidth: 560 },
          children:
            "Zero stress, total control. VaultShield keeps you covered with unbreakable storage, one-tap access, and pro-grade tools for your non-stop world.",
        }),
        A.jsx(Fn.div, {
          custom: 2,
          variants: zs,
          initial: "hidden",
          animate: "visible",
          className: "mb-10",
          children: A.jsxs(ct, {
            target: { kind: "route", path: "plans" },
            className:
              "flex min-w-[210px] items-center justify-between gap-8 rounded-full px-6 py-[17px] font-semibold text-white",
            style: {
              background: "var(--color-accent)",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              boxShadow: "0 4px 24px rgba(115,66,226,0.28)",
            },
            children: ["Get It Free", A.jsx(qx, { size: 20, "aria-hidden": !0 })],
          }),
        }),
        A.jsx(Fn.ul, {
          custom: 3,
          variants: zs,
          initial: "hidden",
          animate: "visible",
          className: "flex flex-wrap gap-6 sm:gap-8",
          "aria-label": "Security features",
          children: uw.map(({ Icon: n, label: i }) =>
            A.jsxs(
              "li",
              {
                className: "flex items-center gap-2.5",
                children: [
                  A.jsx("span", {
                    className: "flex h-10 w-10 items-center justify-center rounded-full",
                    style: { background: "rgba(115, 66, 226, 0.12)" },
                    children: A.jsx(n, {
                      size: 18,
                      strokeWidth: 2,
                      style: { color: "var(--color-accent)" },
                      "aria-hidden": !0,
                    }),
                  }),
                  A.jsx("span", { className: "text-sm font-medium", children: i }),
                ],
              },
              i,
            ),
          ),
        }),
      ],
    }),
  });
}
function fw() {
  const n = [
    { name: "iOS & iPadOS", detail: "Face ID unlock, autofill, and travel mode." },
    { name: "Android", detail: "Biometric unlock with encrypted local vault." },
    { name: "macOS & Windows", detail: "Desktop apps with browser extension pairing." },
    {
      name: "Browser extensions",
      detail: "Chrome, Firefox, Safari, and Edge with passkey support.",
    },
  ];
  return A.jsx("main", {
    className: "relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8",
    children: A.jsxs("section", {
      id: "install",
      className: "scroll-mt-24",
      children: [
        A.jsx("h1", {
          className: "mb-4",
          style: { fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" },
          children: "Install VaultShield",
        }),
        A.jsx("p", {
          className: "mb-10 max-w-xl opacity-80",
          children:
            "Available on every device you use—offline vault sync keeps credentials available in flight mode.",
        }),
        A.jsx("div", {
          className: "grid gap-4 md:grid-cols-2",
          children: n.map((i) =>
            A.jsxs(
              "article",
              {
                className:
                  "rounded-2xl border border-[#192837]/10 bg-white/60 p-6 backdrop-blur-sm",
                children: [
                  A.jsx("h2", { className: "text-lg font-semibold", children: i.name }),
                  A.jsx("p", { className: "mt-2 text-sm opacity-80", children: i.detail }),
                  A.jsx(ct, {
                    target: { kind: "route", path: "plans" },
                    className:
                      "mt-4 inline-block rounded-full px-5 py-2 text-sm font-medium text-white",
                    style: { background: "var(--color-accent)" },
                    children: "Get started",
                  }),
                ],
              },
              i.name,
            ),
          ),
        }),
      ],
    }),
  });
}
function dw() {
  const n = [
    {
      date: "March 2026",
      title: "Passkey unlock on desktop extensions",
      body: "Sign in with device biometrics—no master password re-entry on trusted machines.",
    },
    {
      date: "February 2026",
      title: "Family vault sharing improvements",
      body: "Granular roles let guardians approve teen account changes.",
    },
    {
      date: "January 2026",
      title: "Security audit published",
      body: "Independent review confirms zero-knowledge architecture end-to-end.",
    },
  ];
  return A.jsx("main", {
    className: "relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8",
    children: A.jsxs("section", {
      id: "news",
      className: "scroll-mt-24",
      children: [
        A.jsx("h1", {
          className: "mb-4",
          style: { fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" },
          children: "News",
        }),
        A.jsx("p", {
          className: "mb-10 max-w-xl opacity-80",
          children: "Product updates and security advisories from the VaultShield team.",
        }),
        A.jsx("ul", {
          className: "space-y-4",
          children: n.map((i) =>
            A.jsxs(
              "li",
              {
                className: "rounded-xl border border-[#192837]/10 bg-white/50 p-5",
                children: [
                  A.jsx("p", {
                    className: "text-xs font-medium uppercase tracking-wide opacity-60",
                    children: i.date,
                  }),
                  A.jsx("h2", { className: "mt-2 text-lg font-semibold", children: i.title }),
                  A.jsx("p", { className: "mt-2 text-sm opacity-80", children: i.body }),
                ],
              },
              i.title,
            ),
          ),
        }),
      ],
    }),
  });
}
function hw() {
  const n = [
    { name: "Personal", price: "Free", detail: "Unlimited passwords on one device." },
    { name: "Family", price: "$4.99/mo", detail: "Shared vaults for up to six members." },
    { name: "Business", price: "$12/user", detail: "SSO, audit logs, and priority support." },
  ];
  return A.jsx("main", {
    className: "relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8",
    children: A.jsxs("section", {
      id: "plans",
      className: "scroll-mt-24",
      children: [
        A.jsx("h1", {
          className: "mb-4",
          style: { fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" },
          children: "Plans",
        }),
        A.jsx("p", {
          className: "mb-10 max-w-xl opacity-80",
          children:
            "Pick the VaultShield tier that matches how you work—every plan includes end-to-end encryption.",
        }),
        A.jsx("div", {
          className: "grid gap-6 md:grid-cols-3",
          children: n.map((i) =>
            A.jsxs(
              "article",
              {
                className:
                  "rounded-2xl border border-[#192837]/10 bg-white/60 p-6 backdrop-blur-sm",
                children: [
                  A.jsx("h2", { className: "text-lg font-semibold", children: i.name }),
                  A.jsx("p", {
                    className: "mt-2 text-2xl font-bold",
                    style: { fontFamily: "var(--font-heading)" },
                    children: i.price,
                  }),
                  A.jsx("p", { className: "mt-3 text-sm opacity-80", children: i.detail }),
                  A.jsxs(ct, {
                    target: { kind: "route", path: "install" },
                    className:
                      "mt-6 block w-full rounded-full px-5 py-2.5 text-center text-sm font-medium text-white",
                    style: { background: "var(--color-accent)" },
                    children: ["Choose ", i.name],
                  }),
                ],
              },
              i.name,
            ),
          ),
        }),
      ],
    }),
  });
}
function pw() {
  return A.jsx("main", {
    className: "relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8",
    children: A.jsxs("section", {
      id: "privacy",
      className: "scroll-mt-24",
      children: [
        A.jsx("h1", {
          className: "mb-4",
          style: { fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" },
          children: "Privacy Policy",
        }),
        A.jsx("p", {
          className: "max-w-2xl opacity-80 text-sm leading-relaxed",
          children:
            "VaultShield never stores your master password. This policy describes how metadata, crash logs, and billing identifiers are handled.",
        }),
      ],
    }),
  });
}
function mw() {
  return A.jsx("main", {
    className: "relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8",
    children: A.jsxs("section", {
      id: "terms",
      className: "scroll-mt-24",
      children: [
        A.jsx("h1", {
          className: "mb-4",
          style: { fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" },
          children: "Terms of Service",
        }),
        A.jsx("p", {
          className: "max-w-2xl opacity-80 text-sm leading-relaxed",
          children:
            "These terms govern your use of VaultShield apps and websites. By creating an account you agree to acceptable-use guidelines and subscription billing terms published here.",
        }),
      ],
    }),
  });
}
const Nh = [
  { label: "Vault", route: "" },
  { label: "Plans", route: "plans" },
  { label: "Install", route: "install" },
  { label: "News", route: "news" },
  { label: "Help", route: "help" },
];
function Vh() {
  return A.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    fill: "none",
    viewBox: "0 0 256 256",
    "aria-hidden": !0,
    children: A.jsx("path", {
      d: "M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z",
      fill: "#192837",
    }),
  });
}
function yw({ menuOpen: n, setMenuOpen: i }) {
  return A.jsxs(A.Fragment, {
    children: [
      A.jsxs("header", {
        className:
          "relative z-10 mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5",
        children: [
          A.jsxs(ct, {
            target: { kind: "route", path: "" },
            className: "flex items-center gap-2",
            "aria-label": "VaultShield home",
            onClick: () => i(!1),
            children: [
              A.jsx(Vh, {}),
              A.jsx("span", {
                className: "text-lg font-bold tracking-tight",
                style: { fontFamily: "var(--font-heading)" },
                children: "VaultShield",
              }),
            ],
          }),
          A.jsx("nav", {
            className: "hidden items-center gap-6 md:flex",
            children: Nh.map((s) =>
              A.jsx(
                ct,
                {
                  target: { kind: "route", path: s.route },
                  className: "text-sm font-medium opacity-80 transition-opacity hover:opacity-100",
                  children: s.label,
                },
                s.route,
              ),
            ),
          }),
          A.jsxs("div", {
            className: "hidden items-center gap-3 md:flex",
            children: [
              A.jsx(ct, {
                target: { kind: "route", path: "plans" },
                className: "rounded-full px-5 py-2.5 text-sm font-medium text-white",
                style: { background: "var(--color-accent)" },
                children: "Start For Free",
              }),
              A.jsx(ct, {
                target: { kind: "route", path: "help" },
                className: "rounded-full px-5 py-2.5 text-sm font-medium",
                style: { background: "var(--color-login-bg)", color: "var(--color-text)" },
                children: "Sign In",
              }),
            ],
          }),
          A.jsx("button", {
            type: "button",
            className: "flex h-10 w-10 items-center justify-center rounded-lg md:hidden",
            onClick: () => i(!0),
            "aria-label": "Open menu",
            children: A.jsx(Jx, { size: 24 }),
          }),
        ],
      }),
      A.jsx(Cg, {
        children:
          n &&
          A.jsxs(A.Fragment, {
            children: [
              A.jsx(Fn.button, {
                type: "button",
                className: "fixed inset-0 z-40 md:hidden",
                style: { background: "rgba(25,40,55,0.35)", backdropFilter: "blur(4px)" },
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: () => i(!1),
                "aria-label": "Close menu backdrop",
              }),
              A.jsxs(Fn.aside, {
                className: "fixed right-0 top-0 z-50 flex h-[100dvh] flex-col md:hidden",
                style: {
                  width: "min(88vw, 360px)",
                  background: "#CFC8C5",
                  boxShadow: "-12px 0 48px rgba(25,40,55,0.18)",
                },
                initial: { x: "100%" },
                animate: { x: 0 },
                exit: { x: "100%" },
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                children: [
                  A.jsxs("div", {
                    className:
                      "flex items-center justify-between border-b border-[#192837]/10 px-5 py-4",
                    children: [
                      A.jsx(Vh, {}),
                      A.jsx("button", {
                        type: "button",
                        onClick: () => i(!1),
                        "aria-label": "Close menu",
                        children: A.jsx(bx, { size: 24 }),
                      }),
                    ],
                  }),
                  A.jsx("nav", {
                    className: "flex flex-1 flex-col gap-1 px-5 py-6",
                    children: Nh.map((s, l) =>
                      A.jsx(
                        Fn.div,
                        {
                          initial: { opacity: 0, x: 12 },
                          animate: { opacity: 1, x: 0 },
                          transition: { delay: 0.18 + l * 0.07 },
                          children: A.jsx(ct, {
                            target: { kind: "route", path: s.route },
                            className: "block py-3 text-base font-medium",
                            onClick: () => i(!1),
                            children: s.label,
                          }),
                        },
                        s.route,
                      ),
                    ),
                  }),
                  A.jsxs("div", {
                    className: "flex flex-col gap-3 border-t border-[#192837]/10 p-5",
                    children: [
                      A.jsx(ct, {
                        target: { kind: "route", path: "plans" },
                        className:
                          "rounded-full px-5 py-2.5 text-center text-sm font-medium text-white",
                        style: { background: "var(--color-accent)" },
                        onClick: () => i(!1),
                        children: "Start For Free",
                      }),
                      A.jsx(ct, {
                        target: { kind: "route", path: "help" },
                        className: "rounded-full px-5 py-2.5 text-center text-sm font-medium",
                        style: { background: "var(--color-login-bg)", color: "var(--color-text)" },
                        onClick: () => i(!1),
                        children: "Sign In",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      }),
    ],
  });
}
function gw() {
  return A.jsx("footer", {
    className:
      "relative z-10 mx-auto max-w-[1280px] border-t border-[#192837]/10 px-5 py-8 sm:px-8",
    children: A.jsxs("div", {
      className: "flex flex-wrap items-center justify-between gap-4 text-sm opacity-70",
      children: [
        A.jsx("span", { children: "© 2026 VaultShield" }),
        A.jsxs("div", {
          className: "flex flex-wrap gap-4",
          children: [
            A.jsx(ct, {
              target: { kind: "route", path: "privacy" },
              className: "hover:opacity-100",
              children: "Privacy",
            }),
            A.jsx(ct, {
              target: { kind: "route", path: "terms" },
              className: "hover:opacity-100",
              children: "Terms",
            }),
            A.jsx(ct, {
              target: { kind: "route", path: "help" },
              className: "hover:opacity-100",
              children: "Support",
            }),
          ],
        }),
      ],
    }),
  });
}
function Nn({ children: n }) {
  const [i, s] = z.useState(!1);
  return A.jsxs("div", {
    className: "hero-mesh relative min-h-screen w-full",
    children: [A.jsx(yw, { menuOpen: i, setMenuOpen: s }), n, A.jsx(gw, {})],
  });
}
function vw() {
  return (
    z.useEffect(() => {
      mm();
    }, []),
    A.jsx(lw, {
      routes: {
        "": A.jsx(Nn, { children: A.jsx(cw, {}) }),
        plans: A.jsx(Nn, { children: A.jsx(hw, {}) }),
        install: A.jsx(Nn, { children: A.jsx(fw, {}) }),
        news: A.jsx(Nn, { children: A.jsx(dw, {}) }),
        help: A.jsx(Nn, { children: A.jsx(aw, {}) }),
        privacy: A.jsx(Nn, { children: A.jsx(pw, {}) }),
        terms: A.jsx(Nn, { children: A.jsx(mw, {}) }),
      },
    })
  );
}
wg.createRoot(document.getElementById("root")).render(
  A.jsx(z.StrictMode, { children: A.jsx(vw, {}) }),
);
