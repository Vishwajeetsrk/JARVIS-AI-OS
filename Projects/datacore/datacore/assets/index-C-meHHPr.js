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
  ii = {},
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
 */ var ud;
function hy() {
  if (ud) return se;
  ud = 1;
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
    j = Object.assign,
    D = {};
  function N(P, L, re) {
    ((this.props = P), (this.context = L), (this.refs = D), (this.updater = re || R));
  }
  ((N.prototype.isReactComponent = {}),
    (N.prototype.setState = function (P, L) {
      if (typeof P != "object" && typeof P != "function" && P != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, P, L, "setState");
    }),
    (N.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, "forceUpdate");
    }));
  function O() {}
  O.prototype = N.prototype;
  function $(P, L, re) {
    ((this.props = P), (this.context = L), (this.refs = D), (this.updater = re || R));
  }
  var K = ($.prototype = new O());
  ((K.constructor = $), j(K, N.prototype), (K.isPureReactComponent = !0));
  var Y = Array.isArray,
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
  function ge(P, L) {
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
        Y(ue)
          ? ((re = ""),
            P != null && (re = P.replace(it, "$&/") + "/"),
            qe(ue, L, re, "", function (st) {
              return st;
            }))
          : ue != null &&
            (Ce(ue) &&
              (ue = ge(
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
    if (((pe = 0), (oe = oe === "" ? "." : oe + ":"), Y(P)))
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
  function wt(P, L, re) {
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
    I = { transition: null },
    q = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: I, ReactCurrentOwner: ee };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (se.Children = {
      map: wt,
      forEach: function (P, L, re) {
        wt(
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
          wt(P, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (P) {
        return (
          wt(P, function (L) {
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
    (se.Component = N),
    (se.Fragment = s),
    (se.Profiler = c),
    (se.PureComponent = $),
    (se.StrictMode = l),
    (se.Suspense = m),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q),
    (se.act = W),
    (se.cloneElement = function (P, L, re) {
      if (P == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            P +
            ".",
        );
      var oe = j({}, P.props),
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
      return { $$typeof: y, _payload: { _status: -1, _result: P }, _init: Qe };
    }),
    (se.memo = function (P, L) {
      return { $$typeof: g, type: P, compare: L === void 0 ? null : L };
    }),
    (se.startTransition = function (P) {
      var L = I.transition;
      I.transition = {};
      try {
        P();
      } finally {
        I.transition = L;
      }
    }),
    (se.unstable_act = W),
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
var cd;
function La() {
  return (cd || ((cd = 1), (ql.exports = hy())), ql.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fd;
function py() {
  if (fd) return ii;
  fd = 1;
  var n = La(),
    i = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, g) {
    var y,
      x = {},
      k = null,
      R = null;
    (g !== void 0 && (k = "" + g),
      m.key !== void 0 && (k = "" + m.key),
      m.ref !== void 0 && (R = m.ref));
    for (y in m) l.call(m, y) && !d.hasOwnProperty(y) && (x[y] = m[y]);
    if (p && p.defaultProps) for (y in ((m = p.defaultProps), m)) x[y] === void 0 && (x[y] = m[y]);
    return { $$typeof: i, type: p, key: k, ref: R, props: x, _owner: c.current };
  }
  return ((ii.Fragment = s), (ii.jsx = f), (ii.jsxs = f), ii);
}
var dd;
function my() {
  return (dd || ((dd = 1), (Zl.exports = py())), Zl.exports);
}
var A = my(),
  z = La(),
  Vs = {},
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
 */ var hd;
function gy() {
  return (
    hd ||
      ((hd = 1),
      (function (n) {
        function i(I, q) {
          var W = I.length;
          I.push(q);
          e: for (; 0 < W;) {
            var P = (W - 1) >>> 1,
              L = I[P];
            if (0 < c(L, q)) ((I[P] = q), (I[W] = L), (W = P));
            else break e;
          }
        }
        function s(I) {
          return I.length === 0 ? null : I[0];
        }
        function l(I) {
          if (I.length === 0) return null;
          var q = I[0],
            W = I.pop();
          if (W !== q) {
            I[0] = W;
            e: for (var P = 0, L = I.length, re = L >>> 1; P < re;) {
              var oe = 2 * (P + 1) - 1,
                ue = I[oe],
                ce = oe + 1,
                pe = I[ce];
              if (0 > c(ue, W))
                ce < L && 0 > c(pe, ue)
                  ? ((I[P] = pe), (I[ce] = W), (P = ce))
                  : ((I[P] = ue), (I[oe] = W), (P = oe));
              else if (ce < L && 0 > c(pe, W)) ((I[P] = pe), (I[ce] = W), (P = ce));
              else break e;
            }
          }
          return q;
        }
        function c(I, q) {
          var W = I.sortIndex - q.sortIndex;
          return W !== 0 ? W : I.id - q.id;
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
          k = 3,
          R = !1,
          j = !1,
          D = !1,
          N = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          $ = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function K(I) {
          for (var q = s(g); q !== null;) {
            if (q.callback === null) l(g);
            else if (q.startTime <= I) (l(g), (q.sortIndex = q.expirationTime), i(m, q));
            else break;
            q = s(g);
          }
        }
        function Y(I) {
          if (((D = !1), K(I), !j))
            if (s(m) !== null) ((j = !0), Qe(B));
            else {
              var q = s(g);
              q !== null && ie(Y, q.startTime - I);
            }
        }
        function B(I, q) {
          ((j = !1), D && ((D = !1), O(Z), (Z = -1)), (R = !0));
          var W = k;
          try {
            for (K(q), x = s(m); x !== null && (!(x.expirationTime > q) || (I && !Ze()));) {
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
              var oe = s(g);
              (oe !== null && ie(Y, oe.startTime - q), (re = !1));
            }
            return re;
          } finally {
            ((x = null), (k = W), (R = !1));
          }
        }
        var ee = !1,
          le = null,
          Z = -1,
          ge = 5,
          Ce = -1;
        function Ze() {
          return !(n.unstable_now() - Ce < ge);
        }
        function it() {
          if (le !== null) {
            var I = n.unstable_now();
            Ce = I;
            var q = !0;
            try {
              q = le(!0, I);
            } finally {
              q ? Ge() : ((ee = !1), (le = null));
            }
          } else ee = !1;
        }
        var Ge;
        if (typeof $ == "function")
          Ge = function () {
            $(it);
          };
        else if (typeof MessageChannel < "u") {
          var qe = new MessageChannel(),
            wt = qe.port2;
          ((qe.port1.onmessage = it),
            (Ge = function () {
              wt.postMessage(null);
            }));
        } else
          Ge = function () {
            N(it, 0);
          };
        function Qe(I) {
          ((le = I), ee || ((ee = !0), Ge()));
        }
        function ie(I, q) {
          Z = N(function () {
            I(n.unstable_now());
          }, q);
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
            j || R || ((j = !0), Qe(B));
          }),
          (n.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ge = 0 < I ? Math.floor(1e3 / I) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return k;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (n.unstable_next = function (I) {
            switch (k) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = k;
            }
            var W = k;
            k = q;
            try {
              return I();
            } finally {
              k = W;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (I, q) {
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
            var W = k;
            k = I;
            try {
              return q();
            } finally {
              k = W;
            }
          }),
          (n.unstable_scheduleCallback = function (I, q, W) {
            var P = n.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? P + W : P))
                : (W = P),
              I)
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
              (L = W + L),
              (I = {
                id: y++,
                callback: q,
                priorityLevel: I,
                startTime: W,
                expirationTime: L,
                sortIndex: -1,
              }),
              W > P
                ? ((I.sortIndex = W),
                  i(g, I),
                  s(m) === null && I === s(g) && (D ? (O(Z), (Z = -1)) : (D = !0), ie(Y, W - P)))
                : ((I.sortIndex = L), i(m, I), j || R || ((j = !0), Qe(B))),
              I
            );
          }),
          (n.unstable_shouldYield = Ze),
          (n.unstable_wrapCallback = function (I) {
            var q = k;
            return function () {
              var W = k;
              k = q;
              try {
                return I.apply(this, arguments);
              } finally {
                k = W;
              }
            };
          }));
      })(ea)),
    ea
  );
}
var pd;
function yy() {
  return (pd || ((pd = 1), (bl.exports = gy())), bl.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function vy() {
  if (md) return rt;
  md = 1;
  var n = La(),
    i = yy();
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
    x = {};
  function k(e) {
    return m.call(x, e) ? !0 : m.call(y, e) ? !1 : g.test(e) ? (x[e] = !0) : ((y[e] = !0), !1);
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
  function j(e, t, r, o) {
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
  var N = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      N[e] = new D(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      N[t] = new D(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      N[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        N[e] = new D(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        N[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      N[e] = new D(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      N[e] = new D(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      N[e] = new D(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      N[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var O = /[\-:]([a-z])/g;
  function $(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(O, $);
      N[t] = new D(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(O, $);
        N[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(O, $);
      N[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      N[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (N.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      N[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function K(e, t, r, o) {
    var a = N.hasOwnProperty(t) ? N[t] : null;
    (a !== null
      ? a.type !== 0
      : o || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (j(t, r, a, o) && (r = null),
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
  var Y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    B = Symbol.for("react.element"),
    ee = Symbol.for("react.portal"),
    le = Symbol.for("react.fragment"),
    Z = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    Ce = Symbol.for("react.provider"),
    Ze = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    Ge = Symbol.for("react.suspense"),
    qe = Symbol.for("react.suspense_list"),
    wt = Symbol.for("react.memo"),
    Qe = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    I = Symbol.iterator;
  function q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (I && e[I]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var W = Object.assign,
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
      case ge:
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
  function ki(e) {
    e._valueTracker || (e._valueTracker = st(e));
  }
  function pu(e) {
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
  function Pi(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function no(e, t) {
    var r = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function mu(e, t) {
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
  function gu(e, t) {
    ((t = t.checked), t != null && K(e, "checked", t, !1));
  }
  function ro(e, t) {
    gu(e, t);
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
    (t !== "number" || Pi(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var xr = Array.isArray;
  function In(e, t, r, o) {
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
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function vu(e, t) {
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
  function xu(e, t) {
    var r = de(t.value),
      o = de(t.defaultValue);
    (r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = "" + o));
  }
  function wu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Su(e) {
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
      ? Su(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ti,
    ku = (function (e) {
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
  function wr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Sr = {
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
  Object.keys(Sr).forEach(function (e) {
    ym.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sr[t] = Sr[e]));
    });
  });
  function Pu(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Sr.hasOwnProperty(e) && Sr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Tu(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf("--") === 0,
          a = Pu(r, t[r], o);
        (r === "float" && (r = "cssFloat"), o ? e.setProperty(r, a) : (e[r] = a));
      }
  }
  var vm = W(
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
      if (vm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    zn = null,
    Bn = null;
  function Cu(e) {
    if ((e = Wr(e))) {
      if (typeof fo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Qi(t)), fo(e.stateNode, e.type, t));
    }
  }
  function Eu(e) {
    zn ? (Bn ? Bn.push(e) : (Bn = [e])) : (zn = e);
  }
  function Ru() {
    if (zn) {
      var e = zn,
        t = Bn;
      if (((Bn = zn = null), Cu(e), t)) for (e = 0; e < t.length; e++) Cu(t[e]);
    }
  }
  function Au(e, t) {
    return e(t);
  }
  function Du() {}
  var ho = !1;
  function Mu(e, t, r) {
    if (ho) return e(t, r);
    ho = !0;
    try {
      return Au(e, t, r);
    } finally {
      ((ho = !1), (zn !== null || Bn !== null) && (Du(), Ru()));
    }
  }
  function kr(e, t) {
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
  var po = !1;
  if (p)
    try {
      var Pr = {};
      (Object.defineProperty(Pr, "passive", {
        get: function () {
          po = !0;
        },
      }),
        window.addEventListener("test", Pr, Pr),
        window.removeEventListener("test", Pr, Pr));
    } catch {
      po = !1;
    }
  function xm(e, t, r, o, a, u, h, v, w) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, E);
    } catch (V) {
      this.onError(V);
    }
  }
  var Tr = !1,
    Ci = null,
    Ei = !1,
    mo = null,
    wm = {
      onError: function (e) {
        ((Tr = !0), (Ci = e));
      },
    };
  function Sm(e, t, r, o, a, u, h, v, w) {
    ((Tr = !1), (Ci = null), xm.apply(wm, arguments));
  }
  function km(e, t, r, o, a, u, h, v, w) {
    if ((Sm.apply(this, arguments), Tr)) {
      if (Tr) {
        var E = Ci;
        ((Tr = !1), (Ci = null));
      } else throw Error(s(198));
      Ei || ((Ei = !0), (mo = E));
    }
  }
  function xn(e) {
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
  function Lu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Vu(e) {
    if (xn(e) !== e) throw Error(s(188));
  }
  function Pm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = xn(e)), t === null)) throw Error(s(188));
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
          if (u === r) return (Vu(a), e);
          if (u === o) return (Vu(a), t);
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
    return ((e = Pm(e)), e !== null ? _u(e) : null);
  }
  function _u(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = _u(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ju = i.unstable_scheduleCallback,
    Fu = i.unstable_cancelCallback,
    Tm = i.unstable_shouldYield,
    Cm = i.unstable_requestPaint,
    Ae = i.unstable_now,
    Em = i.unstable_getCurrentPriorityLevel,
    go = i.unstable_ImmediatePriority,
    Ou = i.unstable_UserBlockingPriority,
    Ri = i.unstable_NormalPriority,
    Rm = i.unstable_LowPriority,
    Iu = i.unstable_IdlePriority,
    Ai = null,
    Dt = null;
  function Am(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
      try {
        Dt.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : Lm,
    Dm = Math.log,
    Mm = Math.LN2;
  function Lm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Dm(e) / Mm) | 0)) | 0);
  }
  var Di = 64,
    Mi = 4194304;
  function Cr(e) {
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
  function Li(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      a = e.suspendedLanes,
      u = e.pingedLanes,
      h = r & 268435455;
    if (h !== 0) {
      var v = h & ~a;
      v !== 0 ? (o = Cr(v)) : ((u &= h), u !== 0 && (o = Cr(u)));
    } else ((h = r & ~a), h !== 0 ? (o = Cr(h)) : u !== 0 && (o = Cr(u)));
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
        ((r = 31 - St(t)), (a = 1 << r), (o |= e[r]), (t &= ~a));
    return o;
  }
  function Vm(e, t) {
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
      var h = 31 - St(u),
        v = 1 << h,
        w = a[h];
      (w === -1
        ? ((v & r) === 0 || (v & o) !== 0) && (a[h] = Vm(v, t))
        : w <= t && (e.expiredLanes |= v),
        (u &= ~v));
    }
  }
  function yo(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function zu() {
    var e = Di;
    return ((Di <<= 1), (Di & 4194240) === 0 && (Di = 64), e);
  }
  function vo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Er(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - St(t)),
      (e[t] = r));
  }
  function _m(e, t) {
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
      var a = 31 - St(r),
        u = 1 << a;
      ((t[a] = 0), (o[a] = -1), (e[a] = -1), (r &= ~u));
    }
  }
  function xo(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r;) {
      var o = 31 - St(r),
        a = 1 << o;
      ((a & t) | (e[o] & t) && (e[o] |= t), (r &= ~a));
    }
  }
  var he = 0;
  function Bu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Uu,
    wo,
    $u,
    Wu,
    Hu,
    So = !1,
    Vi = [],
    Xt = null,
    Yt = null,
    Zt = null,
    Rr = new Map(),
    Ar = new Map(),
    qt = [],
    jm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Ku(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Xt = null;
        break;
      case "dragenter":
      case "dragleave":
        Yt = null;
        break;
      case "mouseover":
      case "mouseout":
        Zt = null;
        break;
      case "pointerover":
      case "pointerout":
        Rr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ar.delete(t.pointerId);
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
        t !== null && ((t = Wr(t)), t !== null && wo(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function Fm(e, t, r, o, a) {
    switch (t) {
      case "focusin":
        return ((Xt = Dr(Xt, e, t, r, o, a)), !0);
      case "dragenter":
        return ((Yt = Dr(Yt, e, t, r, o, a)), !0);
      case "mouseover":
        return ((Zt = Dr(Zt, e, t, r, o, a)), !0);
      case "pointerover":
        var u = a.pointerId;
        return (Rr.set(u, Dr(Rr.get(u) || null, e, t, r, o, a)), !0);
      case "gotpointercapture":
        return ((u = a.pointerId), Ar.set(u, Dr(Ar.get(u) || null, e, t, r, o, a)), !0);
    }
    return !1;
  }
  function Gu(e) {
    var t = wn(e.target);
    if (t !== null) {
      var r = xn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Lu(r)), t !== null)) {
            ((e.blockedOn = t),
              Hu(e.priority, function () {
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
  function Ni(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var r = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((uo = o), r.target.dispatchEvent(o), (uo = null));
      } else return ((t = Wr(r)), t !== null && wo(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Qu(e, t, r) {
    Ni(e) && r.delete(t);
  }
  function Om() {
    ((So = !1),
      Xt !== null && Ni(Xt) && (Xt = null),
      Yt !== null && Ni(Yt) && (Yt = null),
      Zt !== null && Ni(Zt) && (Zt = null),
      Rr.forEach(Qu),
      Ar.forEach(Qu));
  }
  function Mr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      So || ((So = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Om)));
  }
  function Lr(e) {
    function t(a) {
      return Mr(a, e);
    }
    if (0 < Vi.length) {
      Mr(Vi[0], e);
      for (var r = 1; r < Vi.length; r++) {
        var o = Vi[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Xt !== null && Mr(Xt, e),
        Yt !== null && Mr(Yt, e),
        Zt !== null && Mr(Zt, e),
        Rr.forEach(t),
        Ar.forEach(t),
        r = 0;
      r < qt.length;
      r++
    )
      ((o = qt[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < qt.length && ((r = qt[0]), r.blockedOn === null);)
      (Gu(r), r.blockedOn === null && qt.shift());
  }
  var Un = Y.ReactCurrentBatchConfig,
    _i = !0;
  function Im(e, t, r, o) {
    var a = he,
      u = Un.transition;
    Un.transition = null;
    try {
      ((he = 1), ko(e, t, r, o));
    } finally {
      ((he = a), (Un.transition = u));
    }
  }
  function zm(e, t, r, o) {
    var a = he,
      u = Un.transition;
    Un.transition = null;
    try {
      ((he = 4), ko(e, t, r, o));
    } finally {
      ((he = a), (Un.transition = u));
    }
  }
  function ko(e, t, r, o) {
    if (_i) {
      var a = Po(e, t, r, o);
      if (a === null) (Bo(e, t, o, ji, r), Ku(e, o));
      else if (Fm(a, e, t, r, o)) o.stopPropagation();
      else if ((Ku(e, o), t & 4 && -1 < jm.indexOf(e))) {
        for (; a !== null;) {
          var u = Wr(a);
          if (
            (u !== null && Uu(u), (u = Po(e, t, r, o)), u === null && Bo(e, t, o, ji, r), u === a)
          )
            break;
          a = u;
        }
        a !== null && o.stopPropagation();
      } else Bo(e, t, o, null, r);
    }
  }
  var ji = null;
  function Po(e, t, r, o) {
    if (((ji = null), (e = co(o)), (e = wn(e)), e !== null))
      if (((t = xn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Lu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((ji = e), null);
  }
  function Xu(e) {
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
        switch (Em()) {
          case go:
            return 1;
          case Ou:
            return 4;
          case Ri:
          case Rm:
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
    Fi = null;
  function Yu() {
    if (Fi) return Fi;
    var e,
      t = To,
      r = t.length,
      o,
      a = "value" in Jt ? Jt.value : Jt.textContent,
      u = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var h = r - e;
    for (o = 1; o <= h && t[r - o] === a[u - o]; o++);
    return (Fi = a.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Oi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ii() {
    return !0;
  }
  function Zu() {
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
          ? Ii
          : Zu),
        (this.isPropagationStopped = Zu),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Ii));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Ii));
        },
        persist: function () {},
        isPersistent: Ii,
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
    Vr = W({}, $n, { view: 0, detail: 0 }),
    Bm = ot(Vr),
    Eo,
    Ro,
    Nr,
    zi = W({}, Vr, {
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
      getModifierState: Do,
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
          : (e !== Nr &&
              (Nr && e.type === "mousemove"
                ? ((Eo = e.screenX - Nr.screenX), (Ro = e.screenY - Nr.screenY))
                : (Ro = Eo = 0),
              (Nr = e)),
            Eo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ro;
      },
    }),
    qu = ot(zi),
    Um = W({}, zi, { dataTransfer: 0 }),
    $m = ot(Um),
    Wm = W({}, Vr, { relatedTarget: 0 }),
    Ao = ot(Wm),
    Hm = W({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Km = ot(Hm),
    Gm = W({}, $n, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Qm = ot(Gm),
    Xm = W({}, $n, { data: 0 }),
    Ju = ot(Xm),
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
    Zm = {
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
    qm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Jm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qm[e]) ? !!t[e] : !1;
  }
  function Do() {
    return Jm;
  }
  var bm = W({}, Vr, {
      key: function (e) {
        if (e.key) {
          var t = Ym[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Oi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Zm[e.keyCode] || "Unidentified"
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
      getModifierState: Do,
      charCode: function (e) {
        return e.type === "keypress" ? Oi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Oi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    eg = ot(bm),
    tg = W({}, zi, {
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
    bu = ot(tg),
    ng = W({}, Vr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Do,
    }),
    rg = ot(ng),
    ig = W({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sg = ot(ig),
    og = W({}, zi, {
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
    lg = ot(og),
    ag = [9, 13, 27, 32],
    Mo = p && "CompositionEvent" in window,
    _r = null;
  p && "documentMode" in document && (_r = document.documentMode);
  var ug = p && "TextEvent" in window && !_r,
    ec = p && (!Mo || (_r && 8 < _r && 11 >= _r)),
    tc = " ",
    nc = !1;
  function rc(e, t) {
    switch (e) {
      case "keyup":
        return ag.indexOf(t.keyCode) !== -1;
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
  function ic(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var Wn = !1;
  function cg(e, t) {
    switch (e) {
      case "compositionend":
        return ic(t);
      case "keypress":
        return t.which !== 32 ? null : ((nc = !0), tc);
      case "textInput":
        return ((e = t.data), e === tc && nc ? null : e);
      default:
        return null;
    }
  }
  function fg(e, t) {
    if (Wn)
      return e === "compositionend" || (!Mo && rc(e, t))
        ? ((e = Yu()), (Fi = To = Jt = null), (Wn = !1), e)
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
        return ec && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var dg = {
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
  function sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!dg[e.type] : t === "textarea";
  }
  function oc(e, t, r, o) {
    (Eu(o),
      (t = Hi(t, "onChange")),
      0 < t.length &&
        ((r = new Co("onChange", "change", null, r, o)), e.push({ event: r, listeners: t })));
  }
  var jr = null,
    Fr = null;
  function hg(e) {
    Tc(e, 0);
  }
  function Bi(e) {
    var t = Xn(e);
    if (pu(t)) return e;
  }
  function pg(e, t) {
    if (e === "change") return t;
  }
  var lc = !1;
  if (p) {
    var Lo;
    if (p) {
      var Vo = "oninput" in document;
      if (!Vo) {
        var ac = document.createElement("div");
        (ac.setAttribute("oninput", "return;"), (Vo = typeof ac.oninput == "function"));
      }
      Lo = Vo;
    } else Lo = !1;
    lc = Lo && (!document.documentMode || 9 < document.documentMode);
  }
  function uc() {
    jr && (jr.detachEvent("onpropertychange", cc), (Fr = jr = null));
  }
  function cc(e) {
    if (e.propertyName === "value" && Bi(Fr)) {
      var t = [];
      (oc(t, Fr, e, co(e)), Mu(hg, t));
    }
  }
  function mg(e, t, r) {
    e === "focusin"
      ? (uc(), (jr = t), (Fr = r), jr.attachEvent("onpropertychange", cc))
      : e === "focusout" && uc();
  }
  function gg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Bi(Fr);
  }
  function yg(e, t) {
    if (e === "click") return Bi(t);
  }
  function vg(e, t) {
    if (e === "input" || e === "change") return Bi(t);
  }
  function xg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var kt = typeof Object.is == "function" ? Object.is : xg;
  function Or(e, t) {
    if (kt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var a = r[o];
      if (!m.call(t, a) || !kt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function fc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function dc(e, t) {
    var r = fc(e);
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
      r = fc(r);
    }
  }
  function hc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? hc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function pc() {
    for (var e = window, t = Pi(); t instanceof e.HTMLIFrameElement;) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Pi(e.document);
    }
    return t;
  }
  function No(e) {
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
  function wg(e) {
    var t = pc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && hc(r.ownerDocument.documentElement, r)) {
      if (o !== null && No(r)) {
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
            (a = dc(r, u)));
          var h = dc(r, o);
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
  var Sg = p && "documentMode" in document && 11 >= document.documentMode,
    Hn = null,
    _o = null,
    Ir = null,
    jo = !1;
  function mc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    jo ||
      Hn == null ||
      Hn !== Pi(o) ||
      ((o = Hn),
      "selectionStart" in o && No(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Ir && Or(Ir, o)) ||
        ((Ir = o),
        (o = Hi(_o, "onSelect")),
        0 < o.length &&
          ((t = new Co("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Hn))));
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
  var Kn = {
      animationend: Ui("Animation", "AnimationEnd"),
      animationiteration: Ui("Animation", "AnimationIteration"),
      animationstart: Ui("Animation", "AnimationStart"),
      transitionend: Ui("Transition", "TransitionEnd"),
    },
    Fo = {},
    gc = {};
  p &&
    ((gc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Kn.animationend.animation,
      delete Kn.animationiteration.animation,
      delete Kn.animationstart.animation),
    "TransitionEvent" in window || delete Kn.transitionend.transition);
  function $i(e) {
    if (Fo[e]) return Fo[e];
    if (!Kn[e]) return e;
    var t = Kn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in gc) return (Fo[e] = t[r]);
    return e;
  }
  var yc = $i("animationend"),
    vc = $i("animationiteration"),
    xc = $i("animationstart"),
    wc = $i("transitionend"),
    Sc = new Map(),
    kc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function bt(e, t) {
    (Sc.set(e, t), d(t, [e]));
  }
  for (var Oo = 0; Oo < kc.length; Oo++) {
    var Io = kc[Oo],
      kg = Io.toLowerCase(),
      Pg = Io[0].toUpperCase() + Io.slice(1);
    bt(kg, "on" + Pg);
  }
  (bt(yc, "onAnimationEnd"),
    bt(vc, "onAnimationIteration"),
    bt(xc, "onAnimationStart"),
    bt("dblclick", "onDoubleClick"),
    bt("focusin", "onFocus"),
    bt("focusout", "onBlur"),
    bt(wc, "onTransitionEnd"),
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
  var zr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Tg = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
  function Pc(e, t, r) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = r), km(o, t, void 0, e), (e.currentTarget = null));
  }
  function Tc(e, t) {
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
            (Pc(a, v, E), (u = w));
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
            (Pc(a, v, E), (u = w));
          }
      }
    }
    if (Ei) throw ((e = mo), (Ei = !1), (mo = null), e);
  }
  function ye(e, t) {
    var r = t[Go];
    r === void 0 && (r = t[Go] = new Set());
    var o = e + "__bubble";
    r.has(o) || (Cc(t, e, 2, !1), r.add(o));
  }
  function zo(e, t, r) {
    var o = 0;
    (t && (o |= 4), Cc(r, e, o, t));
  }
  var Wi = "_reactListening" + Math.random().toString(36).slice(2);
  function Br(e) {
    if (!e[Wi]) {
      ((e[Wi] = !0),
        l.forEach(function (r) {
          r !== "selectionchange" && (Tg.has(r) || zo(r, !1, e), zo(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wi] || ((t[Wi] = !0), zo("selectionchange", !1, t));
    }
  }
  function Cc(e, t, r, o) {
    switch (Xu(t)) {
      case 1:
        var a = Im;
        break;
      case 4:
        a = zm;
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
            if (((h = wn(v)), h === null)) return;
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
        V = co(r),
        _ = [];
      e: {
        var M = Sc.get(e);
        if (M !== void 0) {
          var U = Co,
            G = e;
          switch (e) {
            case "keypress":
              if (Oi(r) === 0) break e;
            case "keydown":
            case "keyup":
              U = eg;
              break;
            case "focusin":
              ((G = "focus"), (U = Ao));
              break;
            case "focusout":
              ((G = "blur"), (U = Ao));
              break;
            case "beforeblur":
            case "afterblur":
              U = Ao;
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
              U = qu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = $m;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = rg;
              break;
            case yc:
            case vc:
            case xc:
              U = Km;
              break;
            case wc:
              U = sg;
              break;
            case "scroll":
              U = Bm;
              break;
            case "wheel":
              U = lg;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Qm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = bu;
          }
          var Q = (t & 4) !== 0,
            De = !Q && e === "scroll",
            T = Q ? (M !== null ? M + "Capture" : null) : M;
          Q = [];
          for (var S = E, C; S !== null;) {
            C = S;
            var F = C.stateNode;
            if (
              (C.tag === 5 &&
                F !== null &&
                ((C = F), T !== null && ((F = kr(S, T)), F != null && Q.push(Ur(S, F, C)))),
              De)
            )
              break;
            S = S.return;
          }
          0 < Q.length && ((M = new U(M, G, null, r, V)), _.push({ event: M, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((M = e === "mouseover" || e === "pointerover"),
            (U = e === "mouseout" || e === "pointerout"),
            M && r !== uo && (G = r.relatedTarget || r.fromElement) && (wn(G) || G[Ot]))
          )
            break e;
          if (
            (U || M) &&
            ((M =
              V.window === V
                ? V
                : (M = V.ownerDocument)
                  ? M.defaultView || M.parentWindow
                  : window),
            U
              ? ((G = r.relatedTarget || r.toElement),
                (U = E),
                (G = G ? wn(G) : null),
                G !== null &&
                  ((De = xn(G)), G !== De || (G.tag !== 5 && G.tag !== 6)) &&
                  (G = null))
              : ((U = null), (G = E)),
            U !== G)
          ) {
            if (
              ((Q = qu),
              (F = "onMouseLeave"),
              (T = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = bu), (F = "onPointerLeave"), (T = "onPointerEnter"), (S = "pointer")),
              (De = U == null ? M : Xn(U)),
              (C = G == null ? M : Xn(G)),
              (M = new Q(F, S + "leave", U, r, V)),
              (M.target = De),
              (M.relatedTarget = C),
              (F = null),
              wn(V) === E &&
                ((Q = new Q(T, S + "enter", G, r, V)),
                (Q.target = C),
                (Q.relatedTarget = De),
                (F = Q)),
              (De = F),
              U && G)
            )
              t: {
                for (Q = U, T = G, S = 0, C = Q; C; C = Gn(C)) S++;
                for (C = 0, F = T; F; F = Gn(F)) C++;
                for (; 0 < S - C;) ((Q = Gn(Q)), S--);
                for (; 0 < C - S;) ((T = Gn(T)), C--);
                for (; S--;) {
                  if (Q === T || (T !== null && Q === T.alternate)) break t;
                  ((Q = Gn(Q)), (T = Gn(T)));
                }
                Q = null;
              }
            else Q = null;
            (U !== null && Ec(_, M, U, Q, !1), G !== null && De !== null && Ec(_, De, G, Q, !0));
          }
        }
        e: {
          if (
            ((M = E ? Xn(E) : window),
            (U = M.nodeName && M.nodeName.toLowerCase()),
            U === "select" || (U === "input" && M.type === "file"))
          )
            var X = pg;
          else if (sc(M))
            if (lc) X = vg;
            else {
              X = gg;
              var J = mg;
            }
          else
            (U = M.nodeName) &&
              U.toLowerCase() === "input" &&
              (M.type === "checkbox" || M.type === "radio") &&
              (X = yg);
          if (X && (X = X(e, E))) {
            oc(_, X, r, V);
            break e;
          }
          (J && J(e, M, E),
            e === "focusout" &&
              (J = M._wrapperState) &&
              J.controlled &&
              M.type === "number" &&
              io(M, "number", M.value));
        }
        switch (((J = E ? Xn(E) : window), e)) {
          case "focusin":
            (sc(J) || J.contentEditable === "true") && ((Hn = J), (_o = E), (Ir = null));
            break;
          case "focusout":
            Ir = _o = Hn = null;
            break;
          case "mousedown":
            jo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((jo = !1), mc(_, r, V));
            break;
          case "selectionchange":
            if (Sg) break;
          case "keydown":
          case "keyup":
            mc(_, r, V);
        }
        var b;
        if (Mo)
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
          Wn
            ? rc(e, r) && (ne = "onCompositionEnd")
            : e === "keydown" && r.keyCode === 229 && (ne = "onCompositionStart");
        (ne &&
          (ec &&
            r.locale !== "ko" &&
            (Wn || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && Wn && (b = Yu())
              : ((Jt = V), (To = "value" in Jt ? Jt.value : Jt.textContent), (Wn = !0))),
          (J = Hi(E, ne)),
          0 < J.length &&
            ((ne = new Ju(ne, e, null, r, V)),
            _.push({ event: ne, listeners: J }),
            b ? (ne.data = b) : ((b = ic(r)), b !== null && (ne.data = b)))),
          (b = ug ? cg(e, r) : fg(e, r)) &&
            ((E = Hi(E, "onBeforeInput")),
            0 < E.length &&
              ((V = new Ju("onBeforeInput", "beforeinput", null, r, V)),
              _.push({ event: V, listeners: E }),
              (V.data = b))));
      }
      Tc(_, t);
    });
  }
  function Ur(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Hi(e, t) {
    for (var r = t + "Capture", o = []; e !== null;) {
      var a = e,
        u = a.stateNode;
      (a.tag === 5 &&
        u !== null &&
        ((a = u),
        (u = kr(e, r)),
        u != null && o.unshift(Ur(e, u, a)),
        (u = kr(e, t)),
        u != null && o.push(Ur(e, u, a))),
        (e = e.return));
    }
    return o;
  }
  function Gn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ec(e, t, r, o, a) {
    for (var u = t._reactName, h = []; r !== null && r !== o;) {
      var v = r,
        w = v.alternate,
        E = v.stateNode;
      if (w !== null && w === o) break;
      (v.tag === 5 &&
        E !== null &&
        ((v = E),
        a
          ? ((w = kr(r, u)), w != null && h.unshift(Ur(r, w, v)))
          : a || ((w = kr(r, u)), w != null && h.push(Ur(r, w, v)))),
        (r = r.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Cg = /\r\n?/g,
    Eg = /\u0000|\uFFFD/g;
  function Rc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Cg,
        `
`,
      )
      .replace(Eg, "");
  }
  function Ki(e, t, r) {
    if (((t = Rc(t)), Rc(e) !== t && r)) throw Error(s(425));
  }
  function Gi() {}
  var Uo = null,
    $o = null;
  function Wo(e, t) {
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
    Rg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ac = typeof Promise == "function" ? Promise : void 0,
    Ag =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ac < "u"
          ? function (e) {
              return Ac.resolve(null).then(e).catch(Dg);
            }
          : Ho;
  function Dg(e) {
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
            (e.removeChild(a), Lr(t));
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = a;
    } while (r);
    Lr(t);
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
  function Dc(e) {
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
  var Qn = Math.random().toString(36).slice(2),
    Mt = "__reactFiber$" + Qn,
    $r = "__reactProps$" + Qn,
    Ot = "__reactContainer$" + Qn,
    Go = "__reactEvents$" + Qn,
    Mg = "__reactListeners$" + Qn,
    Lg = "__reactHandles$" + Qn;
  function wn(e) {
    var t = e[Mt];
    if (t) return t;
    for (var r = e.parentNode; r;) {
      if ((t = r[Ot] || r[Mt])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = Dc(e); e !== null;) {
            if ((r = e[Mt])) return r;
            e = Dc(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function Wr(e) {
    return (
      (e = e[Mt] || e[Ot]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Xn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Qi(e) {
    return e[$r] || null;
  }
  var Qo = [],
    Yn = -1;
  function tn(e) {
    return { current: e };
  }
  function ve(e) {
    0 > Yn || ((e.current = Qo[Yn]), (Qo[Yn] = null), Yn--);
  }
  function me(e, t) {
    (Yn++, (Qo[Yn] = e.current), (e.current = t));
  }
  var nn = {},
    Be = tn(nn),
    Je = tn(!1),
    Sn = nn;
  function Zn(e, t) {
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
  function Xi() {
    (ve(Je), ve(Be));
  }
  function Mc(e, t, r) {
    if (Be.current !== nn) throw Error(s(168));
    (me(Be, t), me(Je, r));
  }
  function Lc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function")) return r;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(s(108, pe(e) || "Unknown", a));
    return W({}, r, o);
  }
  function Yi(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
      (Sn = Be.current),
      me(Be, e),
      me(Je, Je.current),
      !0
    );
  }
  function Vc(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    (r
      ? ((e = Lc(e, t, Sn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        ve(Je),
        ve(Be),
        me(Be, e))
      : ve(Je),
      me(Je, r));
  }
  var It = null,
    Zi = !1,
    Xo = !1;
  function Nc(e) {
    It === null ? (It = [e]) : It.push(e);
  }
  function Vg(e) {
    ((Zi = !0), Nc(e));
  }
  function rn() {
    if (!Xo && It !== null) {
      Xo = !0;
      var e = 0,
        t = he;
      try {
        var r = It;
        for (he = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((It = null), (Zi = !1));
      } catch (a) {
        throw (It !== null && (It = It.slice(e + 1)), ju(go, rn), a);
      } finally {
        ((he = t), (Xo = !1));
      }
    }
    return null;
  }
  var qn = [],
    Jn = 0,
    qi = null,
    Ji = 0,
    dt = [],
    ht = 0,
    kn = null,
    zt = 1,
    Bt = "";
  function Pn(e, t) {
    ((qn[Jn++] = Ji), (qn[Jn++] = qi), (qi = e), (Ji = t));
  }
  function _c(e, t, r) {
    ((dt[ht++] = zt), (dt[ht++] = Bt), (dt[ht++] = kn), (kn = e));
    var o = zt;
    e = Bt;
    var a = 32 - St(o) - 1;
    ((o &= ~(1 << a)), (r += 1));
    var u = 32 - St(t) + a;
    if (30 < u) {
      var h = a - (a % 5);
      ((u = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (a -= h),
        (zt = (1 << (32 - St(t) + a)) | (r << a) | o),
        (Bt = u + e));
    } else ((zt = (1 << u) | (r << a) | o), (Bt = e));
  }
  function Yo(e) {
    e.return !== null && (Pn(e, 1), _c(e, 1, 0));
  }
  function Zo(e) {
    for (; e === qi;) ((qi = qn[--Jn]), (qn[Jn] = null), (Ji = qn[--Jn]), (qn[Jn] = null));
    for (; e === kn;)
      ((kn = dt[--ht]),
        (dt[ht] = null),
        (Bt = dt[--ht]),
        (dt[ht] = null),
        (zt = dt[--ht]),
        (dt[ht] = null));
  }
  var lt = null,
    at = null,
    Se = !1,
    Pt = null;
  function jc(e, t) {
    var r = yt(5, null, null, 0);
    ((r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function Fc(e, t) {
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
            ? ((r = kn !== null ? { id: zt, overflow: Bt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
              (r = yt(18, null, null, 0)),
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
        if (!Fc(e, t)) {
          if (qo(e)) throw Error(s(418));
          t = en(r.nextSibling);
          var o = lt;
          t && Fc(e, t) ? jc(o, r) : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (lt = e));
        }
      } else {
        if (qo(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (Se = !1), (lt = e));
      }
    }
  }
  function Oc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    lt = e;
  }
  function bi(e) {
    if (e !== lt) return !1;
    if (!Se) return (Oc(e), (Se = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !Wo(e.type, e.memoizedProps))),
      t && (t = at))
    ) {
      if (qo(e)) throw (Ic(), Error(s(418)));
      for (; t;) (jc(e, t), (t = en(t.nextSibling)));
    }
    if ((Oc(e), e.tag === 13)) {
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
  function bn() {
    ((at = lt = null), (Se = !1));
  }
  function bo(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  var Ng = Y.ReactCurrentBatchConfig;
  function Hr(e, t, r) {
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
  function zc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Bc(e) {
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
      var X = C.type;
      return X === le
        ? V(T, S, C.props.children, F, C.key)
        : S !== null &&
            (S.elementType === X ||
              (typeof X == "object" && X !== null && X.$$typeof === Qe && zc(X) === S.type))
          ? ((F = a(S, C.props)), (F.ref = Hr(T, S, C)), (F.return = T), F)
          : ((F = Ts(C.type, C.key, C.props, null, T.mode, F)),
            (F.ref = Hr(T, S, C)),
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
    function V(T, S, C, F, X) {
      return S === null || S.tag !== 7
        ? ((S = Ln(C, T.mode, F, X)), (S.return = T), S)
        : ((S = a(S, C)), (S.return = T), S);
    }
    function _(T, S, C) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return ((S = Hl("" + S, T.mode, C)), (S.return = T), S);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case B:
            return (
              (C = Ts(S.type, S.key, S.props, null, T.mode, C)),
              (C.ref = Hr(T, null, S)),
              (C.return = T),
              C
            );
          case ee:
            return ((S = Kl(S, T.mode, C)), (S.return = T), S);
          case Qe:
            var F = S._init;
            return _(T, F(S._payload), C);
        }
        if (xr(S) || q(S)) return ((S = Ln(S, T.mode, C, null)), (S.return = T), S);
        es(T, S);
      }
      return null;
    }
    function M(T, S, C, F) {
      var X = S !== null ? S.key : null;
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return X !== null ? null : v(T, S, "" + C, F);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case B:
            return C.key === X ? w(T, S, C, F) : null;
          case ee:
            return C.key === X ? E(T, S, C, F) : null;
          case Qe:
            return ((X = C._init), M(T, S, X(C._payload), F));
        }
        if (xr(C) || q(C)) return X !== null ? null : V(T, S, C, F, null);
        es(T, C);
      }
      return null;
    }
    function U(T, S, C, F, X) {
      if ((typeof F == "string" && F !== "") || typeof F == "number")
        return ((T = T.get(C) || null), v(S, T, "" + F, X));
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case B:
            return ((T = T.get(F.key === null ? C : F.key) || null), w(S, T, F, X));
          case ee:
            return ((T = T.get(F.key === null ? C : F.key) || null), E(S, T, F, X));
          case Qe:
            var J = F._init;
            return U(T, S, C, J(F._payload), X);
        }
        if (xr(F) || q(F)) return ((T = T.get(C) || null), V(S, T, F, X, null));
        es(S, F);
      }
      return null;
    }
    function G(T, S, C, F) {
      for (
        var X = null, J = null, b = S, ne = (S = 0), Fe = null;
        b !== null && ne < C.length;
        ne++
      ) {
        b.index > ne ? ((Fe = b), (b = null)) : (Fe = b.sibling);
        var fe = M(T, b, C[ne], F);
        if (fe === null) {
          b === null && (b = Fe);
          break;
        }
        (e && b && fe.alternate === null && t(T, b),
          (S = u(fe, S, ne)),
          J === null ? (X = fe) : (J.sibling = fe),
          (J = fe),
          (b = Fe));
      }
      if (ne === C.length) return (r(T, b), Se && Pn(T, ne), X);
      if (b === null) {
        for (; ne < C.length; ne++)
          ((b = _(T, C[ne], F)),
            b !== null && ((S = u(b, S, ne)), J === null ? (X = b) : (J.sibling = b), (J = b)));
        return (Se && Pn(T, ne), X);
      }
      for (b = o(T, b); ne < C.length; ne++)
        ((Fe = U(b, T, ne, C[ne], F)),
          Fe !== null &&
            (e && Fe.alternate !== null && b.delete(Fe.key === null ? ne : Fe.key),
            (S = u(Fe, S, ne)),
            J === null ? (X = Fe) : (J.sibling = Fe),
            (J = Fe)));
      return (
        e &&
          b.forEach(function (hn) {
            return t(T, hn);
          }),
        Se && Pn(T, ne),
        X
      );
    }
    function Q(T, S, C, F) {
      var X = q(C);
      if (typeof X != "function") throw Error(s(150));
      if (((C = X.call(C)), C == null)) throw Error(s(151));
      for (
        var J = (X = null), b = S, ne = (S = 0), Fe = null, fe = C.next();
        b !== null && !fe.done;
        ne++, fe = C.next()
      ) {
        b.index > ne ? ((Fe = b), (b = null)) : (Fe = b.sibling);
        var hn = M(T, b, fe.value, F);
        if (hn === null) {
          b === null && (b = Fe);
          break;
        }
        (e && b && hn.alternate === null && t(T, b),
          (S = u(hn, S, ne)),
          J === null ? (X = hn) : (J.sibling = hn),
          (J = hn),
          (b = Fe));
      }
      if (fe.done) return (r(T, b), Se && Pn(T, ne), X);
      if (b === null) {
        for (; !fe.done; ne++, fe = C.next())
          ((fe = _(T, fe.value, F)),
            fe !== null &&
              ((S = u(fe, S, ne)), J === null ? (X = fe) : (J.sibling = fe), (J = fe)));
        return (Se && Pn(T, ne), X);
      }
      for (b = o(T, b); !fe.done; ne++, fe = C.next())
        ((fe = U(b, T, ne, fe.value, F)),
          fe !== null &&
            (e && fe.alternate !== null && b.delete(fe.key === null ? ne : fe.key),
            (S = u(fe, S, ne)),
            J === null ? (X = fe) : (J.sibling = fe),
            (J = fe)));
      return (
        e &&
          b.forEach(function (dy) {
            return t(T, dy);
          }),
        Se && Pn(T, ne),
        X
      );
    }
    function De(T, S, C, F) {
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
              for (var X = C.key, J = S; J !== null;) {
                if (J.key === X) {
                  if (((X = C.type), X === le)) {
                    if (J.tag === 7) {
                      (r(T, J.sibling), (S = a(J, C.props.children)), (S.return = T), (T = S));
                      break e;
                    }
                  } else if (
                    J.elementType === X ||
                    (typeof X == "object" && X !== null && X.$$typeof === Qe && zc(X) === J.type)
                  ) {
                    (r(T, J.sibling),
                      (S = a(J, C.props)),
                      (S.ref = Hr(T, J, C)),
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
                ? ((S = Ln(C.props.children, T.mode, F, C.key)), (S.return = T), (T = S))
                : ((F = Ts(C.type, C.key, C.props, null, T.mode, F)),
                  (F.ref = Hr(T, S, C)),
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
            return ((J = C._init), De(T, S, J(C._payload), F));
        }
        if (xr(C)) return G(T, S, C, F);
        if (q(C)) return Q(T, S, C, F);
        es(T, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          S !== null && S.tag === 6
            ? (r(T, S.sibling), (S = a(S, C)), (S.return = T), (T = S))
            : (r(T, S), (S = Hl(C, T.mode, F)), (S.return = T), (T = S)),
          h(T))
        : r(T, S);
    }
    return De;
  }
  var er = Bc(!0),
    Uc = Bc(!1),
    ts = tn(null),
    ns = null,
    tr = null,
    el = null;
  function tl() {
    el = tr = ns = null;
  }
  function nl(e) {
    var t = ts.current;
    (ve(ts), (e._currentValue = t));
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
  function nr(e, t) {
    ((ns = e),
      (el = tr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (et = !0), (e.firstContext = null)));
  }
  function pt(e) {
    var t = e._currentValue;
    if (el !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), tr === null)) {
        if (ns === null) throw Error(s(308));
        ((tr = e), (ns.dependencies = { lanes: 0, firstContext: e }));
      } else tr = tr.next = e;
    return t;
  }
  var Tn = null;
  function il(e) {
    Tn === null ? (Tn = [e]) : Tn.push(e);
  }
  function $c(e, t, r, o) {
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
  function $t(e, t) {
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
  function rs(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), xo(e, r));
    }
  }
  function Hc(e, t) {
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
    sn = !1;
    var u = a.firstBaseUpdate,
      h = a.lastBaseUpdate,
      v = a.shared.pending;
    if (v !== null) {
      a.shared.pending = null;
      var w = v,
        E = w.next;
      ((w.next = null), h === null ? (u = E) : (h.next = E), (h = w));
      var V = e.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (v = V.lastBaseUpdate),
        v !== h && (v === null ? (V.firstBaseUpdate = E) : (v.next = E), (V.lastBaseUpdate = w)));
    }
    if (u !== null) {
      var _ = a.baseState;
      ((h = 0), (V = E = w = null), (v = u));
      do {
        var M = v.lane,
          U = v.eventTime;
        if ((o & M) === M) {
          V !== null &&
            (V = V.next =
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
            switch (((M = t), (U = r), Q.tag)) {
              case 1:
                if (((G = Q.payload), typeof G == "function")) {
                  _ = G.call(U, _, M);
                  break e;
                }
                _ = G;
                break e;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = Q.payload), (M = typeof G == "function" ? G.call(U, _, M) : G), M == null)
                )
                  break e;
                _ = W({}, _, M);
                break e;
              case 2:
                sn = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64), (M = a.effects), M === null ? (a.effects = [v]) : M.push(v));
        } else
          ((U = {
            eventTime: U,
            lane: M,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            V === null ? ((E = V = U), (w = _)) : (V = V.next = U),
            (h |= M));
        if (((v = v.next), v === null)) {
          if (((v = a.shared.pending), v === null)) break;
          ((M = v),
            (v = M.next),
            (M.next = null),
            (a.lastBaseUpdate = M),
            (a.shared.pending = null));
        }
      } while (!0);
      if (
        (V === null && (w = _),
        (a.baseState = w),
        (a.firstBaseUpdate = E),
        (a.lastBaseUpdate = V),
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
  function Kc(e, t, r) {
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
  var Kr = {},
    Lt = tn(Kr),
    Gr = tn(Kr),
    Qr = tn(Kr);
  function Cn(e) {
    if (e === Kr) throw Error(s(174));
    return e;
  }
  function ol(e, t) {
    switch ((me(Qr, t), me(Gr, e), me(Lt, Kr), (e = t.nodeType), e)) {
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
    (ve(Lt), me(Lt, t));
  }
  function rr() {
    (ve(Lt), ve(Gr), ve(Qr));
  }
  function Gc(e) {
    Cn(Qr.current);
    var t = Cn(Lt.current),
      r = oo(t, e.type);
    t !== r && (me(Gr, e), me(Lt, r));
  }
  function ll(e) {
    Gr.current === e && (ve(Lt), ve(Gr));
  }
  var ke = tn(0);
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
  var al = [];
  function ul() {
    for (var e = 0; e < al.length; e++) al[e]._workInProgressVersionPrimary = null;
    al.length = 0;
  }
  var os = Y.ReactCurrentDispatcher,
    cl = Y.ReactCurrentBatchConfig,
    En = 0,
    Pe = null,
    Ve = null,
    _e = null,
    ls = !1,
    Xr = !1,
    Yr = 0,
    _g = 0;
  function Ue() {
    throw Error(s(321));
  }
  function fl(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!kt(e[r], t[r])) return !1;
    return !0;
  }
  function dl(e, t, r, o, a, u) {
    if (
      ((En = u),
      (Pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (os.current = e === null || e.memoizedState === null ? Ig : zg),
      (e = r(o, a)),
      Xr)
    ) {
      u = 0;
      do {
        if (((Xr = !1), (Yr = 0), 25 <= u)) throw Error(s(301));
        ((u += 1), (_e = Ve = null), (t.updateQueue = null), (os.current = Bg), (e = r(o, a)));
      } while (Xr);
    }
    if (
      ((os.current = cs),
      (t = Ve !== null && Ve.next !== null),
      (En = 0),
      (_e = Ve = Pe = null),
      (ls = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function hl() {
    var e = Yr !== 0;
    return ((Yr = 0), e);
  }
  function Vt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (_e === null ? (Pe.memoizedState = _e = e) : (_e = _e.next = e), _e);
  }
  function mt() {
    if (Ve === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = _e === null ? Pe.memoizedState : _e.next;
    if (t !== null) ((_e = t), (Ve = e));
    else {
      if (e === null) throw Error(s(310));
      ((Ve = e),
        (e = {
          memoizedState: Ve.memoizedState,
          baseState: Ve.baseState,
          baseQueue: Ve.baseQueue,
          queue: Ve.queue,
          next: null,
        }),
        _e === null ? (Pe.memoizedState = _e = e) : (_e = _e.next = e));
    }
    return _e;
  }
  function Zr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function pl(e) {
    var t = mt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = Ve,
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
        var V = E.lane;
        if ((En & V) === V)
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
          var _ = {
            lane: V,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          };
          (w === null ? ((v = w = _), (h = o)) : (w = w.next = _), (Pe.lanes |= V), (Rn |= V));
        }
        E = E.next;
      } while (E !== null && E !== u);
      (w === null ? (h = o) : (w.next = v),
        kt(o, t.memoizedState) || (et = !0),
        (t.memoizedState = o),
        (t.baseState = h),
        (t.baseQueue = w),
        (r.lastRenderedState = o));
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do ((u = a.lane), (Pe.lanes |= u), (Rn |= u), (a = a.next));
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function ml(e) {
    var t = mt(),
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
      (kt(u, t.memoizedState) || (et = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (r.lastRenderedState = u));
    }
    return [u, o];
  }
  function Qc() {}
  function Xc(e, t) {
    var r = Pe,
      o = mt(),
      a = t(),
      u = !kt(o.memoizedState, a);
    if (
      (u && ((o.memoizedState = a), (et = !0)),
      (o = o.queue),
      gl(qc.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || u || (_e !== null && _e.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), qr(9, Zc.bind(null, r, o, a, t), void 0, null), je === null))
        throw Error(s(349));
      (En & 30) !== 0 || Yc(r, t, a);
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
  function Zc(e, t, r, o) {
    ((t.value = r), (t.getSnapshot = o), Jc(t) && bc(e));
  }
  function qc(e, t, r) {
    return r(function () {
      Jc(t) && bc(e);
    });
  }
  function Jc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !kt(e, r);
    } catch {
      return !0;
    }
  }
  function bc(e) {
    var t = Ut(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function ef(e) {
    var t = Vt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Og.bind(null, Pe, e)),
      [t.memoizedState, e]
    );
  }
  function qr(e, t, r, o) {
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
  function tf() {
    return mt().memoizedState;
  }
  function as(e, t, r, o) {
    var a = Vt();
    ((Pe.flags |= e), (a.memoizedState = qr(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function us(e, t, r, o) {
    var a = mt();
    o = o === void 0 ? null : o;
    var u = void 0;
    if (Ve !== null) {
      var h = Ve.memoizedState;
      if (((u = h.destroy), o !== null && fl(o, h.deps))) {
        a.memoizedState = qr(t, r, u, o);
        return;
      }
    }
    ((Pe.flags |= e), (a.memoizedState = qr(1 | t, r, u, o)));
  }
  function nf(e, t) {
    return as(8390656, 8, e, t);
  }
  function gl(e, t) {
    return us(2048, 8, e, t);
  }
  function rf(e, t) {
    return us(4, 2, e, t);
  }
  function sf(e, t) {
    return us(4, 4, e, t);
  }
  function of(e, t) {
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
  function lf(e, t, r) {
    return ((r = r != null ? r.concat([e]) : null), us(4, 4, of.bind(null, t, e), r));
  }
  function yl() {}
  function af(e, t) {
    var r = mt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && fl(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function uf(e, t) {
    var r = mt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && fl(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function cf(e, t, r) {
    return (En & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = r))
      : (kt(r, t) || ((r = zu()), (Pe.lanes |= r), (Rn |= r), (e.baseState = !0)), t);
  }
  function jg(e, t) {
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
  function ff() {
    return mt().memoizedState;
  }
  function Fg(e, t, r) {
    var o = cn(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), df(e)))
      hf(t, r);
    else if (((r = $c(e, t, r, o)), r !== null)) {
      var a = Ye();
      (Rt(r, e, o, a), pf(r, t, o));
    }
  }
  function Og(e, t, r) {
    var o = cn(e),
      a = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (df(e)) hf(t, a);
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
          if (((a.hasEagerState = !0), (a.eagerState = v), kt(v, h))) {
            var w = t.interleaved;
            (w === null ? ((a.next = a), il(t)) : ((a.next = w.next), (w.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((r = $c(e, t, a, o)), r !== null && ((a = Ye()), Rt(r, e, o, a), pf(r, t, o)));
    }
  }
  function df(e) {
    var t = e.alternate;
    return e === Pe || (t !== null && t === Pe);
  }
  function hf(e, t) {
    Xr = ls = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function pf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), xo(e, r));
    }
  }
  var cs = {
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
    Ig = {
      readContext: pt,
      useCallback: function (e, t) {
        return ((Vt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: pt,
      useEffect: nf,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), as(4194308, 4, of.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return as(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return as(4, 2, e, t);
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
          (e = e.dispatch = Fg.bind(null, Pe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Vt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ef,
      useDebugValue: yl,
      useDeferredValue: function (e) {
        return (Vt().memoizedState = e);
      },
      useTransition: function () {
        var e = ef(!1),
          t = e[0];
        return ((e = jg.bind(null, e[1])), (Vt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = Pe,
          a = Vt();
        if (Se) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), je === null)) throw Error(s(349));
          (En & 30) !== 0 || Yc(o, t, r);
        }
        a.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (a.queue = u),
          nf(qc.bind(null, o, u, e), [e]),
          (o.flags |= 2048),
          qr(9, Zc.bind(null, o, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Vt(),
          t = je.identifierPrefix;
        if (Se) {
          var r = Bt,
            o = zt;
          ((r = (o & ~(1 << (32 - St(o) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Yr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":"));
        } else ((r = _g++), (t = ":" + t + "r" + r.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    zg = {
      readContext: pt,
      useCallback: af,
      useContext: pt,
      useEffect: gl,
      useImperativeHandle: lf,
      useInsertionEffect: rf,
      useLayoutEffect: sf,
      useMemo: uf,
      useReducer: pl,
      useRef: tf,
      useState: function () {
        return pl(Zr);
      },
      useDebugValue: yl,
      useDeferredValue: function (e) {
        var t = mt();
        return cf(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = pl(Zr)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qc,
      useSyncExternalStore: Xc,
      useId: ff,
      unstable_isNewReconciler: !1,
    },
    Bg = {
      readContext: pt,
      useCallback: af,
      useContext: pt,
      useEffect: gl,
      useImperativeHandle: lf,
      useInsertionEffect: rf,
      useLayoutEffect: sf,
      useMemo: uf,
      useReducer: ml,
      useRef: tf,
      useState: function () {
        return ml(Zr);
      },
      useDebugValue: yl,
      useDeferredValue: function (e) {
        var t = mt();
        return Ve === null ? (t.memoizedState = e) : cf(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = ml(Zr)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qc,
      useSyncExternalStore: Xc,
      useId: ff,
      unstable_isNewReconciler: !1,
    };
  function Tt(e, t) {
    if (e && e.defaultProps) {
      ((t = W({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function vl(e, t, r, o) {
    ((t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : W({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var fs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? xn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = Ye(),
        a = cn(e),
        u = $t(o, a);
      ((u.payload = t),
        r != null && (u.callback = r),
        (t = on(e, u, a)),
        t !== null && (Rt(t, e, a, o), rs(t, e, a)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = Ye(),
        a = cn(e),
        u = $t(o, a);
      ((u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = on(e, u, a)),
        t !== null && (Rt(t, e, a, o), rs(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Ye(),
        o = cn(e),
        a = $t(r, o);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = on(e, a, o)),
        t !== null && (Rt(t, e, o, r), rs(t, e, o)));
    },
  };
  function mf(e, t, r, o, a, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, u, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Or(r, o) || !Or(a, u)
          : !0
    );
  }
  function gf(e, t, r) {
    var o = !1,
      a = nn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = pt(u))
        : ((a = be(t) ? Sn : Be.current),
          (o = t.contextTypes),
          (u = (o = o != null) ? Zn(e, a) : nn)),
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
  function yf(e, t, r, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && fs.enqueueReplaceState(t, t.state, null));
  }
  function xl(e, t, r, o) {
    var a = e.stateNode;
    ((a.props = r), (a.state = e.memoizedState), (a.refs = {}), sl(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (a.context = pt(u))
      : ((u = be(t) ? Sn : Be.current), (a.context = Zn(e, u))),
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
        t !== a.state && fs.enqueueReplaceState(a, a.state, null),
        is(e, r, a, o),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function ir(e, t) {
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
  var Ug = typeof WeakMap == "function" ? WeakMap : Map;
  function vf(e, t, r) {
    ((r = $t(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (vs || ((vs = !0), (Fl = o)), Sl(e, t));
      }),
      r
    );
  }
  function xf(e, t, r) {
    ((r = $t(-1, r)), (r.tag = 3));
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
  function wf(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Ug();
      var a = new Set();
      o.set(t, a);
    } else ((a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a)));
    a.has(r) || (a.add(r), (e = ty.bind(null, e, t, r)), t.then(e, e));
  }
  function Sf(e) {
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
  function kf(e, t, r, o, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null ? (r.tag = 17) : ((t = $t(-1, 1)), (t.tag = 2), on(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var $g = Y.ReactCurrentOwner,
    et = !1;
  function Xe(e, t, r, o) {
    t.child = e === null ? Uc(t, null, r, o) : er(t, e.child, r, o);
  }
  function Pf(e, t, r, o, a) {
    r = r.render;
    var u = t.ref;
    return (
      nr(t, a),
      (o = dl(e, t, r, o, u, a)),
      (r = hl()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Wt(e, t, a))
        : (Se && r && Yo(t), (t.flags |= 1), Xe(e, t, o, a), t.child)
    );
  }
  function Tf(e, t, r, o, a) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !Wl(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Cf(e, t, u, o, a))
        : ((e = Ts(r.type, null, o, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & a) === 0)) {
      var h = u.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Or), r(h, o) && e.ref === t.ref))
        return Wt(e, t, a);
    }
    return ((t.flags |= 1), (e = dn(u, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Cf(e, t, r, o, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Or(u, o) && e.ref === t.ref)
        if (((et = !1), (t.pendingProps = o = u), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (et = !0);
        else return ((t.lanes = e.lanes), Wt(e, t, a));
    }
    return kl(e, t, r, o, a);
  }
  function Ef(e, t, r) {
    var o = t.pendingProps,
      a = o.children,
      u = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          me(or, ut),
          (ut |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            me(or, ut),
            (ut |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = u !== null ? u.baseLanes : r),
          me(or, ut),
          (ut |= o));
      }
    else
      (u !== null ? ((o = u.baseLanes | r), (t.memoizedState = null)) : (o = r),
        me(or, ut),
        (ut |= o));
    return (Xe(e, t, a, r), t.child);
  }
  function Rf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function kl(e, t, r, o, a) {
    var u = be(r) ? Sn : Be.current;
    return (
      (u = Zn(t, u)),
      nr(t, a),
      (r = dl(e, t, r, o, u, a)),
      (o = hl()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Wt(e, t, a))
        : (Se && o && Yo(t), (t.flags |= 1), Xe(e, t, r, a), t.child)
    );
  }
  function Af(e, t, r, o, a) {
    if (be(r)) {
      var u = !0;
      Yi(t);
    } else u = !1;
    if ((nr(t, a), t.stateNode === null)) (hs(e, t), gf(t, r, o), xl(t, r, o, a), (o = !0));
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var w = h.context,
        E = r.contextType;
      typeof E == "object" && E !== null
        ? (E = pt(E))
        : ((E = be(r) ? Sn : Be.current), (E = Zn(t, E)));
      var V = r.getDerivedStateFromProps,
        _ = typeof V == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (_ ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== o || w !== E) && yf(t, h, o, E)),
        (sn = !1));
      var M = t.memoizedState;
      ((h.state = M),
        is(t, o, h, a),
        (w = t.memoizedState),
        v !== o || M !== w || Je.current || sn
          ? (typeof V == "function" && (vl(t, r, V, o), (w = t.memoizedState)),
            (v = sn || mf(t, r, v, o, M, w, E))
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
            (h.context = E),
            (o = v))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), (o = !1)));
    } else {
      ((h = t.stateNode),
        Wc(e, t),
        (v = t.memoizedProps),
        (E = t.type === t.elementType ? v : Tt(t.type, v)),
        (h.props = E),
        (_ = t.pendingProps),
        (M = h.context),
        (w = r.contextType),
        typeof w == "object" && w !== null
          ? (w = pt(w))
          : ((w = be(r) ? Sn : Be.current), (w = Zn(t, w))));
      var U = r.getDerivedStateFromProps;
      ((V = typeof U == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== _ || M !== w) && yf(t, h, o, w)),
        (sn = !1),
        (M = t.memoizedState),
        (h.state = M),
        is(t, o, h, a));
      var G = t.memoizedState;
      v !== _ || M !== G || Je.current || sn
        ? (typeof U == "function" && (vl(t, r, U, o), (G = t.memoizedState)),
          (E = sn || mf(t, r, E, o, M, G, w) || !1)
            ? (V ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, G, w),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, G, w)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (v === e.memoizedProps && M === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && M === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = G)),
          (h.props = o),
          (h.state = G),
          (h.context = w),
          (o = E))
        : (typeof h.componentDidUpdate != "function" ||
            (v === e.memoizedProps && M === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && M === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Pl(e, t, r, o, u, a);
  }
  function Pl(e, t, r, o, a, u) {
    Rf(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return (a && Vc(t, r, !1), Wt(e, t, u));
    ((o = t.stateNode), ($g.current = t));
    var v = h && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = er(t, e.child, null, u)), (t.child = er(t, null, v, u)))
        : Xe(e, t, v, u),
      (t.memoizedState = o.state),
      a && Vc(t, r, !0),
      t.child
    );
  }
  function Df(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Mc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Mc(e, t.context, !1),
      ol(e, t.containerInfo));
  }
  function Mf(e, t, r, o, a) {
    return (bn(), bo(a), (t.flags |= 256), Xe(e, t, r, o), t.child);
  }
  var Tl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Lf(e, t, r) {
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
                  : (u = Cs(h, o, 0, null)),
                (e = Ln(e, o, r, null)),
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
      return Wg(e, t, h, o, v, a, r);
    if (u) {
      ((u = o.fallback), (h = t.mode), (a = e.child), (v = a.sibling));
      var w = { mode: "hidden", children: o.children };
      return (
        (h & 1) === 0 && t.child !== a
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = w), (t.deletions = null))
          : ((o = dn(a, w)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
        v !== null ? (u = dn(v, u)) : ((u = Ln(u, h, r, null)), (u.flags |= 2)),
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
      (t = Cs({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ds(e, t, r, o) {
    return (
      o !== null && bo(o),
      er(t, e.child, null, r),
      (e = El(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Wg(e, t, r, o, a, u, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = wl(Error(s(422)))), ds(e, t, h, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = o.fallback),
            (a = t.mode),
            (o = Cs({ mode: "visible", children: o.children }, a, 0, null)),
            (u = Ln(u, a, h, null)),
            (u.flags |= 2),
            (o.return = t),
            (u.return = t),
            (o.sibling = u),
            (t.child = o),
            (t.mode & 1) !== 0 && er(t, e.child, null, h),
            (t.child.memoizedState = Cl(h)),
            (t.memoizedState = Tl),
            u);
    if ((t.mode & 1) === 0) return ds(e, t, h, null);
    if (a.data === "$!") {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var v = o.dgst;
      return ((o = v), (u = Error(s(419))), (o = wl(u, o, void 0)), ds(e, t, h, o));
    }
    if (((v = (h & e.childLanes) !== 0), et || v)) {
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
          a !== 0 && a !== u.retryLane && ((u.retryLane = a), Ut(e, a), Rt(o, e, a, -1)));
      }
      return ($l(), (o = wl(Error(s(421)))), ds(e, t, h, o));
    }
    return a.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = ny.bind(null, e)), (a._reactRetry = t), null)
      : ((e = u.treeContext),
        (at = en(a.nextSibling)),
        (lt = t),
        (Se = !0),
        (Pt = null),
        e !== null &&
          ((dt[ht++] = zt),
          (dt[ht++] = Bt),
          (dt[ht++] = kn),
          (zt = e.id),
          (Bt = e.overflow),
          (kn = t)),
        (t = El(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Vf(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), rl(e.return, t, r));
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
  function Nf(e, t, r) {
    var o = t.pendingProps,
      a = o.revealOrder,
      u = o.tail;
    if ((Xe(e, t, o.children, r), (o = ke.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Vf(e, r, t);
          else if (e.tag === 19) Vf(e, r, t);
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
  function Wt(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Rn |= t.lanes), (r & t.childLanes) === 0)
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
  function Hg(e, t, r) {
    switch (t.tag) {
      case 3:
        (Df(t), bn());
        break;
      case 5:
        Gc(t);
        break;
      case 1:
        be(t.type) && Yi(t);
        break;
      case 4:
        ol(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value;
        (me(ts, o._currentValue), (o._currentValue = a));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (me(ke, ke.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Lf(e, t, r)
              : (me(ke, ke.current & 1), (e = Wt(e, t, r)), e !== null ? e.sibling : null);
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
        return ((t.lanes = 0), Ef(e, t, r));
    }
    return Wt(e, t, r);
  }
  var _f, Al, jf, Ff;
  ((_f = function (e, t) {
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
    (Al = function () {}),
    (jf = function (e, t, r, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        ((e = t.stateNode), Cn(Lt.current));
        var u = null;
        switch (r) {
          case "input":
            ((a = no(e, a)), (o = no(e, o)), (u = []));
            break;
          case "select":
            ((a = W({}, a, { value: void 0 })), (o = W({}, o, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((a = so(e, a)), (o = so(e, o)), (u = []));
            break;
          default:
            typeof a.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Gi);
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
                      ? (w != null && E === "onScroll" && ye("scroll", e), u || v === w || (u = []))
                      : (u = u || []).push(E, w));
        }
        r && (u = u || []).push("style", r);
        var E = u;
        (t.updateQueue = E) && (t.flags |= 4);
      }
    }),
    (Ff = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    }));
  function Jr(e, t) {
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
  function $e(e) {
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
  function Kg(e, t, r) {
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
        return ($e(t), null);
      case 1:
        return (be(t.type) && Xi(), $e(t), null);
      case 3:
        return (
          (o = t.stateNode),
          rr(),
          ve(Je),
          ve(Be),
          ul(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (bi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pt !== null && (zl(Pt), (Pt = null)))),
          Al(e, t),
          $e(t),
          null
        );
      case 5:
        ll(t);
        var a = Cn(Qr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (jf(e, t, r, o, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return ($e(t), null);
          }
          if (((e = Cn(Lt.current)), bi(t))) {
            ((o = t.stateNode), (r = t.type));
            var u = t.memoizedProps;
            switch (((o[Mt] = t), (o[$r] = u), (e = (t.mode & 1) !== 0), r)) {
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
                for (a = 0; a < zr.length; a++) ye(zr[a], o);
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
                (mu(o, u), ye("invalid", o));
                break;
              case "select":
                ((o._wrapperState = { wasMultiple: !!u.multiple }), ye("invalid", o));
                break;
              case "textarea":
                (vu(o, u), ye("invalid", o));
            }
            (lo(r, u), (a = null));
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
                  : c.hasOwnProperty(h) && v != null && h === "onScroll" && ye("scroll", o);
              }
            switch (r) {
              case "input":
                (ki(o), yu(o, u, !0));
                break;
              case "textarea":
                (ki(o), wu(o));
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
              e === "http://www.w3.org/1999/xhtml" && (e = Su(r)),
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
              (e[Mt] = t),
              (e[$r] = o),
              _f(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = ao(r, o)), r)) {
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
                  for (a = 0; a < zr.length; a++) ye(zr[a], e);
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
                  (mu(e, o), (a = no(e, o)), ye("invalid", e));
                  break;
                case "option":
                  a = o;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (a = W({}, o, { value: void 0 })),
                    ye("invalid", e));
                  break;
                case "textarea":
                  (vu(e, o), (a = so(e, o)), ye("invalid", e));
                  break;
                default:
                  a = o;
              }
              (lo(r, a), (v = a));
              for (u in v)
                if (v.hasOwnProperty(u)) {
                  var w = v[u];
                  u === "style"
                    ? Tu(e, w)
                    : u === "dangerouslySetInnerHTML"
                      ? ((w = w ? w.__html : void 0), w != null && ku(e, w))
                      : u === "children"
                        ? typeof w == "string"
                          ? (r !== "textarea" || w !== "") && wr(e, w)
                          : typeof w == "number" && wr(e, "" + w)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (c.hasOwnProperty(u)
                            ? w != null && u === "onScroll" && ye("scroll", e)
                            : w != null && K(e, u, w, h));
                }
              switch (r) {
                case "input":
                  (ki(e), yu(e, o, !1));
                  break;
                case "textarea":
                  (ki(e), wu(e));
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + de(o.value));
                  break;
                case "select":
                  ((e.multiple = !!o.multiple),
                    (u = o.value),
                    u != null
                      ? In(e, !!o.multiple, u, !1)
                      : o.defaultValue != null && In(e, !!o.multiple, o.defaultValue, !0));
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
        return ($e(t), null);
      case 6:
        if (e && t.stateNode != null) Ff(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((r = Cn(Qr.current)), Cn(Lt.current), bi(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[Mt] = t),
              (u = o.nodeValue !== r) && ((e = lt), e !== null))
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
              (o[Mt] = t),
              (t.stateNode = o));
        }
        return ($e(t), null);
      case 13:
        if (
          (ve(ke),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && at !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Ic(), bn(), (t.flags |= 98560), (u = !1));
          else if (((u = bi(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(s(317));
              u[Mt] = t;
            } else (bn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            ($e(t), (u = !1));
          } else (Pt !== null && (zl(Pt), (Pt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ke.current & 1) !== 0 ? Ne === 0 && (Ne = 3) : $l())),
            t.updateQueue !== null && (t.flags |= 4),
            $e(t),
            null);
      case 4:
        return (rr(), Al(e, t), e === null && Br(t.stateNode.containerInfo), $e(t), null);
      case 10:
        return (nl(t.type._context), $e(t), null);
      case 17:
        return (be(t.type) && Xi(), $e(t), null);
      case 19:
        if ((ve(ke), (u = t.memoizedState), u === null)) return ($e(t), null);
        if (((o = (t.flags & 128) !== 0), (h = u.rendering), h === null))
          if (o) Jr(u, !1);
          else {
            if (Ne !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((h = ss(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      Jr(u, !1),
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
              Ae() > lr &&
              ((t.flags |= 128), (o = !0), Jr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = ss(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Jr(u, !0),
                u.tail === null && u.tailMode === "hidden" && !h.alternate && !Se)
              )
                return ($e(t), null);
            } else
              2 * Ae() - u.renderingStartTime > lr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), Jr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((r = u.last), r !== null ? (r.sibling = h) : (t.child = h), (u.last = h));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Ae()),
            (t.sibling = null),
            (r = ke.current),
            me(ke, o ? (r & 1) | 2 : r & 1),
            t)
          : ($e(t), null);
      case 22:
      case 23:
        return (
          Ul(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (ut & 1073741824) !== 0 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : $e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Gg(e, t) {
    switch ((Zo(t), t.tag)) {
      case 1:
        return (
          be(t.type) && Xi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          rr(),
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
          bn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ve(ke), null);
      case 4:
        return (rr(), null);
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
  var ps = !1,
    We = !1,
    Qg = typeof WeakSet == "function" ? WeakSet : Set,
    H = null;
  function sr(e, t) {
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
  function Dl(e, t, r) {
    try {
      r();
    } catch (o) {
      Ee(e, t, o);
    }
  }
  var Of = !1;
  function Xg(e, t) {
    if (((Uo = _i), (e = pc()), No(e))) {
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
              V = 0,
              _ = e,
              M = null;
            t: for (;;) {
              for (
                var U;
                _ !== r || (a !== 0 && _.nodeType !== 3) || (v = h + a),
                  _ !== u || (o !== 0 && _.nodeType !== 3) || (w = h + o),
                  _.nodeType === 3 && (h += _.nodeValue.length),
                  (U = _.firstChild) !== null;
              )
                ((M = _), (_ = U));
              for (;;) {
                if (_ === e) break t;
                if (
                  (M === r && ++E === a && (v = h),
                  M === u && ++V === o && (w = h),
                  (U = _.nextSibling) !== null)
                )
                  break;
                ((_ = M), (M = _.parentNode));
              }
              _ = U;
            }
            r = v === -1 || w === -1 ? null : { start: v, end: w };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for ($o = { focusedElem: e, selectionRange: r }, _i = !1, H = t; H !== null;)
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
                      De = G.memoizedState,
                      T = t.stateNode,
                      S = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Q : Tt(t.type, Q),
                        De,
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
    return ((G = Of), (Of = !1), G);
  }
  function br(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var a = (o = o.next);
      do {
        if ((a.tag & e) === e) {
          var u = a.destroy;
          ((a.destroy = void 0), u !== void 0 && Dl(t, r, u));
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
  function Ml(e) {
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
        t !== null && (delete t[Mt], delete t[$r], delete t[Go], delete t[Mg], delete t[Lg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function zf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Bf(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || zf(e.return)) return null;
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
            r != null || t.onclick !== null || (t.onclick = Gi)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Ll(e, t, r), e = e.sibling; e !== null;) (Ll(e, t, r), (e = e.sibling));
  }
  function Vl(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Vl(e, t, r), e = e.sibling; e !== null;) (Vl(e, t, r), (e = e.sibling));
  }
  var Oe = null,
    Ct = !1;
  function ln(e, t, r) {
    for (r = r.child; r !== null;) (Uf(e, t, r), (r = r.sibling));
  }
  function Uf(e, t, r) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(Ai, r);
      } catch {}
    switch (r.tag) {
      case 5:
        We || sr(r, t);
      case 6:
        var o = Oe,
          a = Ct;
        ((Oe = null),
          ln(e, t, r),
          (Oe = o),
          (Ct = a),
          Oe !== null &&
            (Ct
              ? ((e = Oe),
                (r = r.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
              : Oe.removeChild(r.stateNode)));
        break;
      case 18:
        Oe !== null &&
          (Ct
            ? ((e = Oe),
              (r = r.stateNode),
              e.nodeType === 8 ? Ko(e.parentNode, r) : e.nodeType === 1 && Ko(e, r),
              Lr(e))
            : Ko(Oe, r.stateNode));
        break;
      case 4:
        ((o = Oe),
          (a = Ct),
          (Oe = r.stateNode.containerInfo),
          (Ct = !0),
          ln(e, t, r),
          (Oe = o),
          (Ct = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!We && ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          a = o = o.next;
          do {
            var u = a,
              h = u.destroy;
            ((u = u.tag),
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Dl(r, t, h),
              (a = a.next));
          } while (a !== o);
        }
        ln(e, t, r);
        break;
      case 1:
        if (!We && (sr(r, t), (o = r.stateNode), typeof o.componentWillUnmount == "function"))
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
          ? ((We = (o = We) || r.memoizedState !== null), ln(e, t, r), (We = o))
          : ln(e, t, r);
        break;
      default:
        ln(e, t, r);
    }
  }
  function $f(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Qg()),
        t.forEach(function (o) {
          var a = ry.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(a, a));
        }));
    }
  }
  function Et(e, t) {
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
                ((Oe = v.stateNode), (Ct = !1));
                break e;
              case 3:
                ((Oe = v.stateNode.containerInfo), (Ct = !0));
                break e;
              case 4:
                ((Oe = v.stateNode.containerInfo), (Ct = !0));
                break e;
            }
            v = v.return;
          }
          if (Oe === null) throw Error(s(160));
          (Uf(u, h, a), (Oe = null), (Ct = !1));
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
        if ((Et(t, e), Nt(e), o & 4)) {
          try {
            (br(3, e, e.return), ms(3, e));
          } catch (Q) {
            Ee(e, e.return, Q);
          }
          try {
            br(5, e, e.return);
          } catch (Q) {
            Ee(e, e.return, Q);
          }
        }
        break;
      case 1:
        (Et(t, e), Nt(e), o & 512 && r !== null && sr(r, r.return));
        break;
      case 5:
        if ((Et(t, e), Nt(e), o & 512 && r !== null && sr(r, r.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            wr(a, "");
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
              (v === "input" && u.type === "radio" && u.name != null && gu(a, u), ao(v, h));
              var E = ao(v, u);
              for (h = 0; h < w.length; h += 2) {
                var V = w[h],
                  _ = w[h + 1];
                V === "style"
                  ? Tu(a, _)
                  : V === "dangerouslySetInnerHTML"
                    ? ku(a, _)
                    : V === "children"
                      ? wr(a, _)
                      : K(a, V, _, E);
              }
              switch (v) {
                case "input":
                  ro(a, u);
                  break;
                case "textarea":
                  xu(a, u);
                  break;
                case "select":
                  var M = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!u.multiple;
                  var U = u.value;
                  U != null
                    ? In(a, !!u.multiple, U, !1)
                    : M !== !!u.multiple &&
                      (u.defaultValue != null
                        ? In(a, !!u.multiple, u.defaultValue, !0)
                        : In(a, !!u.multiple, u.multiple ? [] : "", !1));
              }
              a[$r] = u;
            } catch (Q) {
              Ee(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((Et(t, e), Nt(e), o & 4)) {
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
        if ((Et(t, e), Nt(e), o & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            Lr(t.containerInfo);
          } catch (Q) {
            Ee(e, e.return, Q);
          }
        break;
      case 4:
        (Et(t, e), Nt(e));
        break;
      case 13:
        (Et(t, e),
          Nt(e),
          (a = e.child),
          a.flags & 8192 &&
            ((u = a.memoizedState !== null),
            (a.stateNode.isHidden = u),
            !u || (a.alternate !== null && a.alternate.memoizedState !== null) || (jl = Ae())),
          o & 4 && $f(e));
        break;
      case 22:
        if (
          ((V = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((We = (E = We) || V), Et(t, e), (We = E)) : Et(t, e),
          Nt(e),
          o & 8192)
        ) {
          if (
            ((E = e.memoizedState !== null), (e.stateNode.isHidden = E) && !V && (e.mode & 1) !== 0)
          )
            for (H = e, V = e.child; V !== null;) {
              for (_ = H = V; H !== null;) {
                switch (((M = H), (U = M.child), M.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    br(4, M, M.return);
                    break;
                  case 1:
                    sr(M, M.return);
                    var G = M.stateNode;
                    if (typeof G.componentWillUnmount == "function") {
                      ((o = M), (r = M.return));
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
                    sr(M, M.return);
                    break;
                  case 22:
                    if (M.memoizedState !== null) {
                      Gf(_);
                      continue;
                    }
                }
                U !== null ? ((U.return = M), (H = U)) : Gf(_);
              }
              V = V.sibling;
            }
          e: for (V = null, _ = e; ;) {
            if (_.tag === 5) {
              if (V === null) {
                V = _;
                try {
                  ((a = _.stateNode),
                    E
                      ? ((u = a.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((v = _.stateNode),
                        (w = _.memoizedProps.style),
                        (h = w != null && w.hasOwnProperty("display") ? w.display : null),
                        (v.style.display = Pu("display", h))));
                } catch (Q) {
                  Ee(e, e.return, Q);
                }
              }
            } else if (_.tag === 6) {
              if (V === null)
                try {
                  _.stateNode.nodeValue = E ? "" : _.memoizedProps;
                } catch (Q) {
                  Ee(e, e.return, Q);
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
              (V === _ && (V = null), (_ = _.return));
            }
            (V === _ && (V = null), (_.sibling.return = _.return), (_ = _.sibling));
          }
        }
        break;
      case 19:
        (Et(t, e), Nt(e), o & 4 && $f(e));
        break;
      case 21:
        break;
      default:
        (Et(t, e), Nt(e));
    }
  }
  function Nt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null;) {
            if (zf(r)) {
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
            o.flags & 32 && (wr(a, ""), (o.flags &= -33));
            var u = Bf(e);
            Vl(e, u, a);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              v = Bf(e);
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
  function Yg(e, t, r) {
    ((H = e), Hf(e));
  }
  function Hf(e, t, r) {
    for (var o = (e.mode & 1) !== 0; H !== null;) {
      var a = H,
        u = a.child;
      if (a.tag === 22 && o) {
        var h = a.memoizedState !== null || ps;
        if (!h) {
          var v = a.alternate,
            w = (v !== null && v.memoizedState !== null) || We;
          v = ps;
          var E = We;
          if (((ps = h), (We = w) && !E))
            for (H = a; H !== null;)
              ((h = H),
                (w = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Qf(a)
                  : w !== null
                    ? ((w.return = h), (H = w))
                    : Qf(a));
          for (; u !== null;) ((H = u), Hf(u), (u = u.sibling));
          ((H = a), (ps = v), (We = E));
        }
        Kf(e);
      } else (a.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = a), (H = u)) : Kf(e);
    }
  }
  function Kf(e) {
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
                We || ms(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !We)
                  if (r === null) o.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type ? r.memoizedProps : Tt(t.type, r.memoizedProps);
                    o.componentDidUpdate(a, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = t.updateQueue;
                u !== null && Kc(t, u, o);
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
                  Kc(t, h, r);
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
                    var V = E.memoizedState;
                    if (V !== null) {
                      var _ = V.dehydrated;
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
          We || (t.flags & 512 && Ml(t));
        } catch (M) {
          Ee(t, t.return, M);
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
  function Gf(e) {
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
  function Qf(e) {
    for (; H !== null;) {
      var t = H;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              ms(4, t);
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
              Ml(t);
            } catch (w) {
              Ee(t, u, w);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Ml(t);
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
  var Zg = Math.ceil,
    gs = Y.ReactCurrentDispatcher,
    Nl = Y.ReactCurrentOwner,
    gt = Y.ReactCurrentBatchConfig,
    ae = 0,
    je = null,
    Le = null,
    Ie = 0,
    ut = 0,
    or = tn(0),
    Ne = 0,
    ei = null,
    Rn = 0,
    ys = 0,
    _l = 0,
    ti = null,
    tt = null,
    jl = 0,
    lr = 1 / 0,
    Ht = null,
    vs = !1,
    Fl = null,
    an = null,
    xs = !1,
    un = null,
    ws = 0,
    ni = 0,
    Ol = null,
    Ss = -1,
    ks = 0;
  function Ye() {
    return (ae & 6) !== 0 ? Ae() : Ss !== -1 ? Ss : (Ss = Ae());
  }
  function cn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && Ie !== 0
        ? Ie & -Ie
        : Ng.transition !== null
          ? (ks === 0 && (ks = zu()), ks)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xu(e.type))), e);
  }
  function Rt(e, t, r, o) {
    if (50 < ni) throw ((ni = 0), (Ol = null), Error(s(185)));
    (Er(e, r, o),
      ((ae & 2) === 0 || e !== je) &&
        (e === je && ((ae & 2) === 0 && (ys |= r), Ne === 4 && fn(e, Ie)),
        nt(e, o),
        r === 1 && ae === 0 && (t.mode & 1) === 0 && ((lr = Ae() + 500), Zi && rn())));
  }
  function nt(e, t) {
    var r = e.callbackNode;
    Nm(e, t);
    var o = Li(e, e === je ? Ie : 0);
    if (o === 0) (r !== null && Fu(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && Fu(r), t === 1))
        (e.tag === 0 ? Vg(Yf.bind(null, e)) : Nc(Yf.bind(null, e)),
          Ag(function () {
            (ae & 6) === 0 && rn();
          }),
          (r = null));
      else {
        switch (Bu(o)) {
          case 1:
            r = go;
            break;
          case 4:
            r = Ou;
            break;
          case 16:
            r = Ri;
            break;
          case 536870912:
            r = Iu;
            break;
          default:
            r = Ri;
        }
        r = rd(r, Xf.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function Xf(e, t) {
    if (((Ss = -1), (ks = 0), (ae & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (ar() && e.callbackNode !== r) return null;
    var o = Li(e, e === je ? Ie : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Ps(e, o);
    else {
      t = o;
      var a = ae;
      ae |= 2;
      var u = qf();
      (je !== e || Ie !== t) && ((Ht = null), (lr = Ae() + 500), Dn(e, t));
      do
        try {
          bg();
          break;
        } catch (v) {
          Zf(e, v);
        }
      while (!0);
      (tl(), (gs.current = u), (ae = a), Le !== null ? (t = 0) : ((je = null), (Ie = 0), (t = Ne)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = yo(e)), a !== 0 && ((o = a), (t = Il(e, a)))), t === 1))
        throw ((r = ei), Dn(e, 0), fn(e, o), nt(e, Ae()), r);
      if (t === 6) fn(e, o);
      else {
        if (
          ((a = e.current.alternate),
          (o & 30) === 0 &&
            !qg(a) &&
            ((t = Ps(e, o)),
            t === 2 && ((u = yo(e)), u !== 0 && ((o = u), (t = Il(e, u)))),
            t === 1))
        )
          throw ((r = ei), Dn(e, 0), fn(e, o), nt(e, Ae()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Mn(e, tt, Ht);
            break;
          case 3:
            if ((fn(e, o), (o & 130023424) === o && ((t = jl + 500 - Ae()), 10 < t))) {
              if (Li(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                (Ye(), (e.pingedLanes |= e.suspendedLanes & a));
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
              var h = 31 - St(o);
              ((u = 1 << h), (h = t[h]), h > a && (a = h), (o &= ~u));
            }
            if (
              ((o = a),
              (o = Ae() - o),
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
                            : 1960 * Zg(o / 1960)) - o),
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
    return (nt(e, Ae()), e.callbackNode === r ? Xf.bind(null, e) : null);
  }
  function Il(e, t) {
    var r = ti;
    return (
      e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256),
      (e = Ps(e, t)),
      e !== 2 && ((t = tt), (tt = r), t !== null && zl(t)),
      e
    );
  }
  function zl(e) {
    tt === null ? (tt = e) : tt.push.apply(tt, e);
  }
  function qg(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var a = r[o],
              u = a.getSnapshot;
            a = a.value;
            try {
              if (!kt(u(), a)) return !1;
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
      t &= ~_l, t &= ~ys, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - St(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function Yf(e) {
    if ((ae & 6) !== 0) throw Error(s(327));
    ar();
    var t = Li(e, 0);
    if ((t & 1) === 0) return (nt(e, Ae()), null);
    var r = Ps(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = yo(e);
      o !== 0 && ((t = o), (r = Il(e, o)));
    }
    if (r === 1) throw ((r = ei), Dn(e, 0), fn(e, t), nt(e, Ae()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Mn(e, tt, Ht),
      nt(e, Ae()),
      null
    );
  }
  function Bl(e, t) {
    var r = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      ((ae = r), ae === 0 && ((lr = Ae() + 500), Zi && rn()));
    }
  }
  function An(e) {
    un !== null && un.tag === 0 && (ae & 6) === 0 && ar();
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
    ((ut = or.current), ve(or));
  }
  function Dn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Rg(r)), Le !== null))
      for (r = Le.return; r !== null;) {
        var o = r;
        switch ((Zo(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Xi());
            break;
          case 3:
            (rr(), ve(Je), ve(Be), ul());
            break;
          case 5:
            ll(o);
            break;
          case 4:
            rr();
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
      ((je = e),
      (Le = e = dn(e.current, null)),
      (Ie = ut = t),
      (Ne = 0),
      (ei = null),
      (_l = ys = Rn = 0),
      (tt = ti = null),
      Tn !== null)
    ) {
      for (t = 0; t < Tn.length; t++)
        if (((r = Tn[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var a = o.next,
            u = r.pending;
          if (u !== null) {
            var h = u.next;
            ((u.next = a), (o.next = h));
          }
          r.pending = o;
        }
      Tn = null;
    }
    return e;
  }
  function Zf(e, t) {
    do {
      var r = Le;
      try {
        if ((tl(), (os.current = cs), ls)) {
          for (var o = Pe.memoizedState; o !== null;) {
            var a = o.queue;
            (a !== null && (a.pending = null), (o = o.next));
          }
          ls = !1;
        }
        if (
          ((En = 0),
          (_e = Ve = Pe = null),
          (Xr = !1),
          (Yr = 0),
          (Nl.current = null),
          r === null || r.return === null)
        ) {
          ((Ne = 1), (ei = t), (Le = null));
          break;
        }
        e: {
          var u = e,
            h = r.return,
            v = r,
            w = t;
          if (
            ((t = Ie),
            (v.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var E = w,
              V = v,
              _ = V.tag;
            if ((V.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var M = V.alternate;
              M
                ? ((V.updateQueue = M.updateQueue),
                  (V.memoizedState = M.memoizedState),
                  (V.lanes = M.lanes))
                : ((V.updateQueue = null), (V.memoizedState = null));
            }
            var U = Sf(h);
            if (U !== null) {
              ((U.flags &= -257), kf(U, h, v, u, t), U.mode & 1 && wf(u, E, t), (t = U), (w = E));
              var G = t.updateQueue;
              if (G === null) {
                var Q = new Set();
                (Q.add(w), (t.updateQueue = Q));
              } else G.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                (wf(u, E, t), $l());
                break e;
              }
              w = Error(s(426));
            }
          } else if (Se && v.mode & 1) {
            var De = Sf(h);
            if (De !== null) {
              ((De.flags & 65536) === 0 && (De.flags |= 256), kf(De, h, v, u, t), bo(ir(w, v)));
              break e;
            }
          }
          ((u = w = ir(w, v)),
            Ne !== 4 && (Ne = 2),
            ti === null ? (ti = [u]) : ti.push(u),
            (u = h));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var T = vf(u, w, t);
                Hc(u, T);
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
                  var F = xf(u, v, t);
                  Hc(u, F);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        bf(r);
      } catch (X) {
        ((t = X), Le === r && r !== null && (Le = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function qf() {
    var e = gs.current;
    return ((gs.current = cs), e === null ? cs : e);
  }
  function $l() {
    ((Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
      je === null || ((Rn & 268435455) === 0 && (ys & 268435455) === 0) || fn(je, Ie));
  }
  function Ps(e, t) {
    var r = ae;
    ae |= 2;
    var o = qf();
    (je !== e || Ie !== t) && ((Ht = null), Dn(e, t));
    do
      try {
        Jg();
        break;
      } catch (a) {
        Zf(e, a);
      }
    while (!0);
    if ((tl(), (ae = r), (gs.current = o), Le !== null)) throw Error(s(261));
    return ((je = null), (Ie = 0), Ne);
  }
  function Jg() {
    for (; Le !== null;) Jf(Le);
  }
  function bg() {
    for (; Le !== null && !Tm();) Jf(Le);
  }
  function Jf(e) {
    var t = nd(e.alternate, e, ut);
    ((e.memoizedProps = e.pendingProps), t === null ? bf(e) : (Le = t), (Nl.current = null));
  }
  function bf(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Kg(r, t, ut)), r !== null)) {
          Le = r;
          return;
        }
      } else {
        if (((r = Gg(r, t)), r !== null)) {
          ((r.flags &= 32767), (Le = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Ne = 6), (Le = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    Ne === 0 && (Ne = 5);
  }
  function Mn(e, t, r) {
    var o = he,
      a = gt.transition;
    try {
      ((gt.transition = null), (he = 1), ey(e, t, r, o));
    } finally {
      ((gt.transition = a), (he = o));
    }
    return null;
  }
  function ey(e, t, r, o) {
    do ar();
    while (un !== null);
    if ((ae & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = r.lanes | r.childLanes;
    if (
      (_m(e, u),
      e === je && ((Le = je = null), (Ie = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        xs ||
        ((xs = !0),
        rd(Ri, function () {
          return (ar(), null);
        })),
      (u = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = gt.transition), (gt.transition = null));
      var h = he;
      he = 1;
      var v = ae;
      ((ae |= 4),
        (Nl.current = null),
        Xg(e, r),
        Wf(r, e),
        wg($o),
        (_i = !!Uo),
        ($o = Uo = null),
        (e.current = r),
        Yg(r),
        Cm(),
        (ae = v),
        (he = h),
        (gt.transition = u));
    } else e.current = r;
    if (
      (xs && ((xs = !1), (un = e), (ws = a)),
      (u = e.pendingLanes),
      u === 0 && (an = null),
      Am(r.stateNode),
      nt(e, Ae()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((a = t[r]), o(a.value, { componentStack: a.stack, digest: a.digest }));
    if (vs) throw ((vs = !1), (e = Fl), (Fl = null), e);
    return (
      (ws & 1) !== 0 && e.tag !== 0 && ar(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === Ol ? ni++ : ((ni = 0), (Ol = e))) : (ni = 0),
      rn(),
      null
    );
  }
  function ar() {
    if (un !== null) {
      var e = Bu(ws),
        t = gt.transition,
        r = he;
      try {
        if (((gt.transition = null), (he = 16 > e ? 16 : e), un === null)) var o = !1;
        else {
          if (((e = un), (un = null), (ws = 0), (ae & 6) !== 0)) throw Error(s(331));
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
                    var V = H;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        br(8, V, u);
                    }
                    var _ = V.child;
                    if (_ !== null) ((_.return = V), (H = _));
                    else
                      for (; H !== null;) {
                        V = H;
                        var M = V.sibling,
                          U = V.return;
                        if ((If(V), V === E)) {
                          H = null;
                          break;
                        }
                        if (M !== null) {
                          ((M.return = U), (H = M));
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
                      var De = Q.sibling;
                      ((Q.sibling = null), (Q = De));
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
                      br(9, u, u.return);
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
                        ms(9, v);
                    }
                  } catch (X) {
                    Ee(v, v.return, X);
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
              Dt.onPostCommitFiberRoot(Ai, e);
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
  function ed(e, t, r) {
    ((t = ir(r, t)),
      (t = vf(e, t, 1)),
      (e = on(e, t, 1)),
      (t = Ye()),
      e !== null && (Er(e, 1, t), nt(e, t)));
  }
  function Ee(e, t, r) {
    if (e.tag === 3) ed(e, e, r);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          ed(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" && (an === null || !an.has(o)))
          ) {
            ((e = ir(r, e)),
              (e = xf(t, e, 1)),
              (t = on(t, e, 1)),
              (e = Ye()),
              t !== null && (Er(t, 1, e), nt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ty(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & r),
      je === e &&
        (Ie & r) === r &&
        (Ne === 4 || (Ne === 3 && (Ie & 130023424) === Ie && 500 > Ae() - jl)
          ? Dn(e, 0)
          : (_l |= r)),
      nt(e, t));
  }
  function td(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Mi), (Mi <<= 1), (Mi & 130023424) === 0 && (Mi = 4194304)));
    var r = Ye();
    ((e = Ut(e, t)), e !== null && (Er(e, t, r), nt(e, r)));
  }
  function ny(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), td(e, r));
  }
  function ry(e, t) {
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
    (o !== null && o.delete(t), td(e, r));
  }
  var nd;
  nd = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Je.current) et = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((et = !1), Hg(e, t, r));
        et = (e.flags & 131072) !== 0;
      }
    else ((et = !1), Se && (t.flags & 1048576) !== 0 && _c(t, Ji, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (hs(e, t), (e = t.pendingProps));
        var a = Zn(t, Be.current);
        (nr(t, r), (a = dl(null, t, o, e, a, r)));
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
              be(o) ? ((u = !0), Yi(t)) : (u = !1),
              (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              sl(t),
              (a.updater = fs),
              (t.stateNode = a),
              (a._reactInternals = t),
              xl(t, o, e, r),
              (t = Pl(null, t, o, !0, u, r)))
            : ((t.tag = 0), Se && u && Yo(t), Xe(null, t, a, r), (t = t.child)),
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
            (a = t.tag = sy(o)),
            (e = Tt(o, e)),
            a)
          ) {
            case 0:
              t = kl(null, t, o, e, r);
              break e;
            case 1:
              t = Af(null, t, o, e, r);
              break e;
            case 11:
              t = Pf(null, t, o, e, r);
              break e;
            case 14:
              t = Tf(null, t, o, Tt(o.type, e), r);
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
          kl(e, t, o, a, r)
        );
      case 1:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Tt(o, a)),
          Af(e, t, o, a, r)
        );
      case 3:
        e: {
          if ((Df(t), e === null)) throw Error(s(387));
          ((o = t.pendingProps),
            (u = t.memoizedState),
            (a = u.element),
            Wc(e, t),
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
              ((a = ir(Error(s(423)), t)), (t = Mf(e, t, o, r, a)));
              break e;
            } else if (o !== a) {
              ((a = ir(Error(s(424)), t)), (t = Mf(e, t, o, r, a)));
              break e;
            } else
              for (
                at = en(t.stateNode.containerInfo.firstChild),
                  lt = t,
                  Se = !0,
                  Pt = null,
                  r = Uc(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((bn(), o === a)) {
              t = Wt(e, t, r);
              break e;
            }
            Xe(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Gc(t),
          e === null && Jo(t),
          (o = t.type),
          (a = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = a.children),
          Wo(o, a) ? (h = null) : u !== null && Wo(o, u) && (t.flags |= 32),
          Rf(e, t),
          Xe(e, t, h, r),
          t.child
        );
      case 6:
        return (e === null && Jo(t), null);
      case 13:
        return Lf(e, t, r);
      case 4:
        return (
          ol(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = er(t, null, o, r)) : Xe(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Tt(o, a)),
          Pf(e, t, o, a, r)
        );
      case 7:
        return (Xe(e, t, t.pendingProps, r), t.child);
      case 8:
        return (Xe(e, t, t.pendingProps.children, r), t.child);
      case 12:
        return (Xe(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (a = t.pendingProps),
            (u = t.memoizedProps),
            (h = a.value),
            me(ts, o._currentValue),
            (o._currentValue = h),
            u !== null)
          )
            if (kt(u.value, h)) {
              if (u.children === a.children && !Je.current) {
                t = Wt(e, t, r);
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
                        ((w = $t(-1, r & -r)), (w.tag = 2));
                        var E = u.updateQueue;
                        if (E !== null) {
                          E = E.shared;
                          var V = E.pending;
                          (V === null ? (w.next = w) : ((w.next = V.next), (V.next = w)),
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
          (Xe(e, t, a.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (o = t.pendingProps.children),
          nr(t, r),
          (a = pt(a)),
          (o = o(a)),
          (t.flags |= 1),
          Xe(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (a = Tt(o, t.pendingProps)), (a = Tt(o.type, a)), Tf(e, t, o, a, r));
      case 15:
        return Cf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Tt(o, a)),
          hs(e, t),
          (t.tag = 1),
          be(o) ? ((e = !0), Yi(t)) : (e = !1),
          nr(t, r),
          gf(t, o, a),
          xl(t, o, a, r),
          Pl(null, t, o, !0, e, r)
        );
      case 19:
        return Nf(e, t, r);
      case 22:
        return Ef(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function rd(e, t) {
    return ju(e, t);
  }
  function iy(e, t, r, o) {
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
  function yt(e, t, r, o) {
    return new iy(e, t, r, o);
  }
  function Wl(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function sy(e) {
    if (typeof e == "function") return Wl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === it)) return 11;
      if (e === wt) return 14;
    }
    return 2;
  }
  function dn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = yt(e.tag, t, e.key, e.mode)),
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
    if (((o = e), typeof e == "function")) Wl(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case le:
          return Ln(r.children, a, u, t);
        case Z:
          ((h = 8), (a |= 8));
          break;
        case ge:
          return ((e = yt(12, r, t, a | 2)), (e.elementType = ge), (e.lanes = u), e);
        case Ge:
          return ((e = yt(13, r, t, a)), (e.elementType = Ge), (e.lanes = u), e);
        case qe:
          return ((e = yt(19, r, t, a)), (e.elementType = qe), (e.lanes = u), e);
        case ie:
          return Cs(r, a, u, t);
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
              case wt:
                h = 14;
                break e;
              case Qe:
                ((h = 16), (o = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return ((t = yt(h, r, t, a)), (t.elementType = e), (t.type = o), (t.lanes = u), t);
  }
  function Ln(e, t, r, o) {
    return ((e = yt(7, e, o, t)), (e.lanes = r), e);
  }
  function Cs(e, t, r, o) {
    return (
      (e = yt(22, e, o, t)),
      (e.elementType = ie),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Hl(e, t, r) {
    return ((e = yt(6, e, null, t)), (e.lanes = r), e);
  }
  function Kl(e, t, r) {
    return (
      (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function oy(e, t, r, o, a) {
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
      (e = new oy(e, t, r, v, w)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = yt(3, null, null, t)),
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
  function ly(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ee,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function id(e) {
    if (!e) return nn;
    e = e._reactInternals;
    e: {
      if (xn(e) !== e || e.tag !== 1) throw Error(s(170));
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
      if (be(r)) return Lc(e, r, t);
    }
    return t;
  }
  function sd(e, t, r, o, a, u, h, v, w) {
    return (
      (e = Gl(r, o, !0, e, a, u, h, v, w)),
      (e.context = id(null)),
      (r = e.current),
      (o = Ye()),
      (a = cn(r)),
      (u = $t(o, a)),
      (u.callback = t ?? null),
      on(r, u, a),
      (e.current.lanes = a),
      Er(e, a, o),
      nt(e, o),
      e
    );
  }
  function Es(e, t, r, o) {
    var a = t.current,
      u = Ye(),
      h = cn(a);
    return (
      (r = id(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = $t(u, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = on(a, t, h)),
      e !== null && (Rt(e, a, h, u), rs(e, a, h)),
      h
    );
  }
  function Rs(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function od(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Ql(e, t) {
    (od(e, t), (e = e.alternate) && od(e, t));
  }
  function ay() {
    return null;
  }
  var ld =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Xl(e) {
    this._internalRoot = e;
  }
  ((As.prototype.render = Xl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Es(e, t, null, null);
    }),
    (As.prototype.unmount = Xl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (An(function () {
            Es(null, e, null, null);
          }),
            (t[Ot] = null));
        }
      }));
  function As(e) {
    this._internalRoot = e;
  }
  As.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Wu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < qt.length && t !== 0 && t < qt[r].priority; r++);
      (qt.splice(r, 0, e), r === 0 && Gu(e));
    }
  };
  function Yl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ds(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function ad() {}
  function uy(e, t, r, o, a) {
    if (a) {
      if (typeof o == "function") {
        var u = o;
        o = function () {
          var E = Rs(h);
          u.call(E);
        };
      }
      var h = sd(t, o, e, 0, null, !1, !1, "", ad);
      return (
        (e._reactRootContainer = h),
        (e[Ot] = h.current),
        Br(e.nodeType === 8 ? e.parentNode : e),
        An(),
        h
      );
    }
    for (; (a = e.lastChild);) e.removeChild(a);
    if (typeof o == "function") {
      var v = o;
      o = function () {
        var E = Rs(w);
        v.call(E);
      };
    }
    var w = Gl(e, 0, !1, null, null, !1, !1, "", ad);
    return (
      (e._reactRootContainer = w),
      (e[Ot] = w.current),
      Br(e.nodeType === 8 ? e.parentNode : e),
      An(function () {
        Es(t, w, r, o);
      }),
      w
    );
  }
  function Ms(e, t, r, o, a) {
    var u = r._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof a == "function") {
        var v = a;
        a = function () {
          var w = Rs(h);
          v.call(w);
        };
      }
      Es(t, h, e, a);
    } else h = uy(r, t, e, a, o);
    return Rs(h);
  }
  ((Uu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Cr(t.pendingLanes);
          r !== 0 && (xo(t, r | 1), nt(t, Ae()), (ae & 6) === 0 && ((lr = Ae() + 500), rn()));
        }
        break;
      case 13:
        (An(function () {
          var o = Ut(e, 1);
          if (o !== null) {
            var a = Ye();
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
          var r = Ye();
          Rt(t, e, 134217728, r);
        }
        Ql(e, 134217728);
      }
    }),
    ($u = function (e) {
      if (e.tag === 13) {
        var t = cn(e),
          r = Ut(e, t);
        if (r !== null) {
          var o = Ye();
          Rt(r, e, t, o);
        }
        Ql(e, t);
      }
    }),
    (Wu = function () {
      return he;
    }),
    (Hu = function (e, t) {
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
                var a = Qi(o);
                if (!a) throw Error(s(90));
                (pu(o), ro(o, a));
              }
            }
          }
          break;
        case "textarea":
          xu(e, r);
          break;
        case "select":
          ((t = r.value), t != null && In(e, !!r.multiple, t, !1));
      }
    }),
    (Au = Bl),
    (Du = An));
  var cy = { usingClientEntryPoint: !1, Events: [Wr, Xn, Qi, Eu, Ru, Bl] },
    ri = {
      findFiberByHostInstance: wn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    fy = {
      bundleType: ri.bundleType,
      version: ri.version,
      rendererPackageName: ri.rendererPackageName,
      rendererConfig: ri.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Y.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Nu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: ri.findFiberByHostInstance || ay,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ls.isDisabled && Ls.supportsFiber)
      try {
        ((Ai = Ls.inject(fy)), (Dt = Ls));
      } catch {}
  }
  return (
    (rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cy),
    (rt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Yl(t)) throw Error(s(200));
      return ly(e, t, null, r);
    }),
    (rt.createRoot = function (e, t) {
      if (!Yl(e)) throw Error(s(299));
      var r = !1,
        o = "",
        a = ld;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Gl(e, 1, !1, null, null, r, !1, o, a)),
        (e[Ot] = t.current),
        Br(e.nodeType === 8 ? e.parentNode : e),
        new Xl(t)
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
      if (!Ds(t)) throw Error(s(200));
      return Ms(null, e, t, !0, r);
    }),
    (rt.hydrateRoot = function (e, t, r) {
      if (!Yl(e)) throw Error(s(405));
      var o = (r != null && r.hydratedSources) || null,
        a = !1,
        u = "",
        h = ld;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (h = r.onRecoverableError)),
        (t = sd(t, null, e, 1, r ?? null, a, !1, u, h)),
        (e[Ot] = t.current),
        Br(e),
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
    (rt.render = function (e, t, r) {
      if (!Ds(t)) throw Error(s(200));
      return Ms(null, e, t, !1, r);
    }),
    (rt.unmountComponentAtNode = function (e) {
      if (!Ds(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (An(function () {
            Ms(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ot] = null));
            });
          }),
          !0)
        : !1;
    }),
    (rt.unstable_batchedUpdates = Bl),
    (rt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!Ds(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Ms(e, t, r, !1, o);
    }),
    (rt.version = "18.3.1-next-f1338f8080-20240426"),
    rt
  );
}
var gd;
function xy() {
  if (gd) return Jl.exports;
  gd = 1;
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
  return (n(), (Jl.exports = vy()), Jl.exports);
}
var yd;
function wy() {
  if (yd) return Vs;
  yd = 1;
  var n = xy();
  return ((Vs.createRoot = n.createRoot), (Vs.hydrateRoot = n.hydrateRoot), Vs);
}
var Sy = wy();
function Fh(n) {
  return `#${n}`;
}
function Oh(n) {
  const i = n.replace(/^\//, "").replace(/\/$/, "");
  return i ? `#/${i}` : "#/";
}
function Va(n) {
  const i = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return i
    ? i.startsWith("/")
      ? { kind: "route", path: i.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: i }
    : null;
}
function Na(n, i = "smooth") {
  if (typeof document > "u") return !1;
  const s = document.getElementById(n);
  return s ? (s.scrollIntoView({ behavior: i, block: "start" }), !0) : !1;
}
function ky(n, i = "smooth") {
  if (typeof window > "u") return;
  const s = Fh(n);
  if (Na(n, i)) {
    window.history.replaceState(null, "", s);
    return;
  }
  window.location.hash = s;
}
function Py(n) {
  typeof window > "u" || (window.location.hash = Oh(n));
}
function Ty() {
  const n = Va();
  return (n == null ? void 0 : n.kind) === "route" ? n.path : "";
}
function Cy(n) {
  return n.kind === "route" ? Oh(n.path) : Fh(n.id);
}
function Ey(n, i) {
  if ((n.preventDefault(), i.kind === "route")) {
    Py(i.path);
    return;
  }
  ky(i.id);
}
function Ih() {
  if (typeof window > "u") return;
  const n = Va();
  (n == null ? void 0 : n.kind) === "section" && requestAnimationFrame(() => Na(n.id, "auto"));
}
function Ry(n, i) {
  if (typeof window > "u") return () => {};
  const s = () => {
    const l = Va();
    if (!l) {
      n("");
      return;
    }
    if (l.kind === "route") {
      n(l.path);
      return;
    }
    (Na(l.id, "smooth"), n(""));
  };
  return (
    s(),
    window.addEventListener("hashchange", s),
    () => window.removeEventListener("hashchange", s)
  );
}
function Ay(n = "") {
  const [i, s] = z.useState(() => (typeof window < "u" ? Ty() : n));
  return (z.useEffect(() => Ry(s), []), i || n);
}
function Dy({ routes: n, defaultRoute: i = "", className: s }) {
  const l = Ay(i);
  z.useEffect(() => {
    Ih();
  }, []);
  const c = l in n ? l : i,
    d = n[c] ?? n[i];
  return A.jsx("div", { className: s, children: d });
}
function _t({ target: n, children: i, className: s, onClick: l, ...c }) {
  return A.jsx("a", {
    href: Cy(n),
    className: s,
    onClick: (d) => {
      (Ey(d, n), l == null || l(d));
    },
    ...c,
    children: i,
  });
}
const My = {
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
function ta({ title: n, eyebrow: i = "Explore", description: s, theme: l = "dark", children: c }) {
  const d = My[l];
  return A.jsx("div", {
    className: d.wrap,
    children: A.jsxs("div", {
      className: "mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24",
      children: [
        A.jsx(_t, {
          target: { kind: "route", path: "" },
          className: d.link,
          children: "← Back to home",
        }),
        A.jsx("p", { className: `${d.eyebrow} mt-10`, children: i }),
        A.jsx("h1", { className: d.title, children: n }),
        s ? A.jsx("p", { className: d.body, children: s }) : null,
        c,
      ],
    }),
  });
}
const zh = {
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
function Ns({ id: n, eyebrow: i, title: s, children: l, theme: c }) {
  const d = zh[c];
  return A.jsx("section", {
    id: n,
    className: `${d.section} scroll-mt-24`,
    children: A.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        A.jsx("p", { className: d.eyebrow, children: i }),
        A.jsx("h2", { className: `${d.title} mt-3`, children: s }),
        A.jsx("div", { className: "mt-8", children: l }),
      ],
    }),
  });
}
function Ly({ theme: n = "dark", brand: i = "Product" }) {
  const s = zh[n],
    l = [
      { title: "Fast setup", desc: `Ship ${i} experiences in minutes with guided defaults.` },
      { title: "Built to scale", desc: "Production-ready patterns for teams that iterate daily." },
      { title: "Secure by design", desc: "Privacy-first flows with audit-friendly configuration." },
    ];
  return A.jsxs(A.Fragment, {
    children: [
      A.jsx(Ns, {
        id: "features",
        eyebrow: "Features",
        title: "Everything you need in one flow",
        theme: n,
        children: A.jsx("div", {
          className: "grid gap-4 md:grid-cols-3",
          children: l.map((c) =>
            A.jsxs(
              "div",
              {
                className: s.card,
                children: [
                  A.jsx("h3", {
                    className:
                      n === "dark"
                        ? "text-lg font-medium text-white"
                        : "text-lg font-medium text-slate-900",
                    children: c.title,
                  }),
                  A.jsx("p", { className: `${s.body} mt-2 text-sm`, children: c.desc }),
                ],
              },
              c.title,
            ),
          ),
        }),
      }),
      A.jsx(Ns, {
        id: "about",
        eyebrow: "About",
        title: `Why teams choose ${i}`,
        theme: n,
        children: A.jsx("p", {
          className: s.body,
          children:
            "We combine cinematic presentation with practical product storytelling—so every visit feels premium while staying effortless to keep current as you grow.",
        }),
      }),
      A.jsx(Ns, {
        id: "faq",
        eyebrow: "FAQ",
        title: "Common questions",
        theme: n,
        children: A.jsx("dl", {
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
          ].map(([c, d]) =>
            A.jsxs(
              "div",
              {
                className: s.card,
                children: [
                  A.jsx("dt", {
                    className:
                      n === "dark" ? "font-medium text-white" : "font-medium text-slate-900",
                    children: c,
                  }),
                  A.jsx("dd", { className: `${s.body} mt-2 text-sm`, children: d }),
                ],
              },
              c,
            ),
          ),
        }),
      }),
      A.jsxs(Ns, {
        id: "contact",
        eyebrow: "Contact",
        title: "Talk with our team",
        theme: n,
        children: [
          A.jsx("p", { className: s.body, children: "We respond within one business day." }),
          A.jsx("a", {
            href: "#contact",
            className:
              n === "dark"
                ? "mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
                : "mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white",
            children: "Get in touch",
          }),
        ],
      }),
    ],
  });
}
const _a = z.createContext({});
function ja(n) {
  const i = z.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const Zs = z.createContext(null),
  Fa = z.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
class Vy extends z.Component {
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
function Ny({ children: n, isPresent: i }) {
  const s = z.useId(),
    l = z.useRef(null),
    c = z.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: d } = z.useContext(Fa);
  return (
    z.useInsertionEffect(() => {
      const { width: f, height: p, top: m, left: g } = c.current;
      if (i || !l.current || !f || !p) return;
      l.current.dataset.motionPopId = s;
      const y = document.createElement("style");
      return (
        d && (y.nonce = d),
        document.head.appendChild(y),
        y.sheet &&
          y.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            top: ${m}px !important;
            left: ${g}px !important;
          }
        `),
        () => {
          document.head.removeChild(y);
        }
      );
    }, [i]),
    A.jsx(Vy, { isPresent: i, childRef: l, sizeRef: c, children: z.cloneElement(n, { ref: l }) })
  );
}
const _y = ({
  children: n,
  initial: i,
  isPresent: s,
  onExitComplete: l,
  custom: c,
  presenceAffectsLayout: d,
  mode: f,
}) => {
  const p = ja(jy),
    m = z.useId(),
    g = z.useCallback(
      (x) => {
        p.set(x, !0);
        for (const k of p.values()) if (!k) return;
        l && l();
      },
      [p, l],
    ),
    y = z.useMemo(
      () => ({
        id: m,
        initial: i,
        isPresent: s,
        custom: c,
        onExitComplete: g,
        register: (x) => (p.set(x, !1), () => p.delete(x)),
      }),
      d ? [Math.random(), g] : [s, g],
    );
  return (
    z.useMemo(() => {
      p.forEach((x, k) => p.set(k, !1));
    }, [s]),
    z.useEffect(() => {
      !s && !p.size && l && l();
    }, [s]),
    f === "popLayout" && (n = A.jsx(Ny, { isPresent: s, children: n })),
    A.jsx(Zs.Provider, { value: y, children: n })
  );
};
function jy() {
  return new Map();
}
function Bh(n = !0) {
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
function vd(n) {
  const i = [];
  return (
    z.Children.forEach(n, (s) => {
      z.isValidElement(s) && i.push(s);
    }),
    i
  );
}
const Oa = typeof window < "u",
  Uh = Oa ? z.useLayoutEffect : z.useEffect,
  Fy = ({
    children: n,
    custom: i,
    initial: s = !0,
    onExitComplete: l,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: f = !1,
  }) => {
    const [p, m] = Bh(f),
      g = z.useMemo(() => vd(n), [n]),
      y = f && !p ? [] : g.map(_s),
      x = z.useRef(!0),
      k = z.useRef(g),
      R = ja(() => new Map()),
      [j, D] = z.useState(g),
      [N, O] = z.useState(g);
    Uh(() => {
      ((x.current = !1), (k.current = g));
      for (let Y = 0; Y < N.length; Y++) {
        const B = _s(N[Y]);
        y.includes(B) ? R.delete(B) : R.get(B) !== !0 && R.set(B, !1);
      }
    }, [N, y.length, y.join("-")]);
    const $ = [];
    if (g !== j) {
      let Y = [...g];
      for (let B = 0; B < N.length; B++) {
        const ee = N[B],
          le = _s(ee);
        y.includes(le) || (Y.splice(B, 0, ee), $.push(ee));
      }
      (d === "wait" && $.length && (Y = $), O(vd(Y)), D(g));
      return;
    }
    const { forceRender: K } = z.useContext(_a);
    return A.jsx(A.Fragment, {
      children: N.map((Y) => {
        const B = _s(Y),
          ee = f && !p ? !1 : g === N || y.includes(B),
          le = () => {
            if (R.has(B)) R.set(B, !0);
            else return;
            let Z = !0;
            (R.forEach((ge) => {
              ge || (Z = !1);
            }),
              Z && (K == null || K(), O(k.current), f && (m == null || m()), l && l()));
          };
        return A.jsx(
          _y,
          {
            isPresent: ee,
            initial: !x.current || s ? void 0 : !1,
            custom: ee ? void 0 : i,
            presenceAffectsLayout: c,
            mode: d,
            onExitComplete: ee ? void 0 : le,
            children: Y,
          },
          B,
        );
      }),
    });
  },
  ct = (n) => n;
let $h = ct;
function Ia(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const pr = (n, i, s) => {
    const l = i - n;
    return l === 0 ? 1 : (s - n) / l;
  },
  Kt = (n) => n * 1e3,
  Gt = (n) => n / 1e3,
  Oy = { useManualTiming: !1 };
function Iy(n) {
  let i = new Set(),
    s = new Set(),
    l = !1,
    c = !1;
  const d = new WeakSet();
  let f = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(g) {
    (d.has(g) && (m.schedule(g), n()), g(f));
  }
  const m = {
    schedule: (g, y = !1, x = !1) => {
      const R = x && l ? i : s;
      return (y && d.add(g), R.has(g) || R.add(g), g);
    },
    cancel: (g) => {
      (s.delete(g), d.delete(g));
    },
    process: (g) => {
      if (((f = g), l)) {
        c = !0;
        return;
      }
      ((l = !0),
        ([i, s] = [s, i]),
        i.forEach(p),
        i.clear(),
        (l = !1),
        c && ((c = !1), m.process(g)));
    },
  };
  return m;
}
const js = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  zy = 40;
function Wh(n, i) {
  let s = !1,
    l = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = js.reduce((O, $) => ((O[$] = Iy(d)), O), {}),
    { read: p, resolveKeyframes: m, update: g, preRender: y, render: x, postRender: k } = f,
    R = () => {
      const O = performance.now();
      ((s = !1),
        (c.delta = l ? 1e3 / 60 : Math.max(Math.min(O - c.timestamp, zy), 1)),
        (c.timestamp = O),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        g.process(c),
        y.process(c),
        x.process(c),
        k.process(c),
        (c.isProcessing = !1),
        s && i && ((l = !1), n(R)));
    },
    j = () => {
      ((s = !0), (l = !0), c.isProcessing || n(R));
    };
  return {
    schedule: js.reduce((O, $) => {
      const K = f[$];
      return ((O[$] = (Y, B = !1, ee = !1) => (s || j(), K.schedule(Y, B, ee))), O);
    }, {}),
    cancel: (O) => {
      for (let $ = 0; $ < js.length; $++) f[js[$]].cancel(O);
    },
    state: c,
    steps: f,
  };
}
const {
    schedule: xe,
    cancel: gn,
    state: ze,
    steps: na,
  } = Wh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ct, !0),
  Hh = z.createContext({ strict: !1 }),
  xd = {
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
  mr = {};
for (const n in xd) mr[n] = { isEnabled: (i) => xd[n].some((s) => !!i[s]) };
function By(n) {
  for (const i in n) mr[i] = { ...mr[i], ...n[i] };
}
const Uy = new Set([
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
function Ws(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    Uy.has(n)
  );
}
let Kh = (n) => !Ws(n);
function $y(n) {
  n && (Kh = (i) => (i.startsWith("on") ? !Ws(i) : n(i)));
}
try {
  $y(require("@emotion/is-prop-valid").default);
} catch {}
function Wy(n, i, s) {
  const l = {};
  for (const c in n)
    (c === "values" && typeof n.values == "object") ||
      ((Kh(c) ||
        (s === !0 && Ws(c)) ||
        (!i && !Ws(c)) ||
        (n.draggable && c.startsWith("onDrag"))) &&
        (l[c] = n[c]));
  return l;
}
function Hy(n) {
  if (typeof Proxy > "u") return n;
  const i = new Map(),
    s = (...l) => n(...l);
  return new Proxy(s, {
    get: (l, c) => (c === "create" ? n : (i.has(c) || i.set(c, n(c)), i.get(c))),
  });
}
const qs = z.createContext({});
function hi(n) {
  return typeof n == "string" || Array.isArray(n);
}
function Js(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
const za = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Ba = ["initial", ...za];
function bs(n) {
  return Js(n.animate) || Ba.some((i) => hi(n[i]));
}
function Gh(n) {
  return !!(bs(n) || n.variants);
}
function Ky(n, i) {
  if (bs(n)) {
    const { initial: s, animate: l } = n;
    return { initial: s === !1 || hi(s) ? s : void 0, animate: hi(l) ? l : void 0 };
  }
  return n.inherit !== !1 ? i : {};
}
function Gy(n) {
  const { initial: i, animate: s } = Ky(n, z.useContext(qs));
  return z.useMemo(() => ({ initial: i, animate: s }), [wd(i), wd(s)]);
}
function wd(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const Qy = Symbol.for("motionComponentSymbol");
function ur(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function Xy(n, i, s) {
  return z.useCallback(
    (l) => {
      (l && n.onMount && n.onMount(l),
        i && (l ? i.mount(l) : i.unmount()),
        s && (typeof s == "function" ? s(l) : ur(s) && (s.current = l)));
    },
    [i],
  );
}
const Ua = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Yy = "framerAppearId",
  Qh = "data-" + Ua(Yy),
  { schedule: $a } = Wh(queueMicrotask, !1),
  Xh = z.createContext({});
function Zy(n, i, s, l, c) {
  var d, f;
  const { visualElement: p } = z.useContext(qs),
    m = z.useContext(Hh),
    g = z.useContext(Zs),
    y = z.useContext(Fa).reducedMotion,
    x = z.useRef(null);
  ((l = l || m.renderer),
    !x.current &&
      l &&
      (x.current = l(n, {
        visualState: i,
        parent: p,
        props: s,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: y,
      })));
  const k = x.current,
    R = z.useContext(Xh);
  k && !k.projection && c && (k.type === "html" || k.type === "svg") && qy(x.current, s, c, R);
  const j = z.useRef(!1);
  z.useInsertionEffect(() => {
    k && j.current && k.update(s, g);
  });
  const D = s[Qh],
    N = z.useRef(
      !!D &&
        !(!((d = window.MotionHandoffIsComplete) === null || d === void 0) && d.call(window, D)) &&
        ((f = window.MotionHasOptimisedAnimation) === null || f === void 0
          ? void 0
          : f.call(window, D)),
    );
  return (
    Uh(() => {
      k &&
        ((j.current = !0),
        (window.MotionIsMounted = !0),
        k.updateFeatures(),
        $a.render(k.render),
        N.current && k.animationState && k.animationState.animateChanges());
    }),
    z.useEffect(() => {
      k &&
        (!N.current && k.animationState && k.animationState.animateChanges(),
        N.current &&
          (queueMicrotask(() => {
            var O;
            (O = window.MotionHandoffMarkAsComplete) === null || O === void 0 || O.call(window, D);
          }),
          (N.current = !1)));
    }),
    k
  );
}
function qy(n, i, s, l) {
  const { layoutId: c, layout: d, drag: f, dragConstraints: p, layoutScroll: m, layoutRoot: g } = i;
  ((n.projection = new s(n.latestValues, i["data-framer-portal-id"] ? void 0 : Yh(n.parent))),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (p && ur(p)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: l,
      layoutScroll: m,
      layoutRoot: g,
    }));
}
function Yh(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : Yh(n.parent);
}
function Jy({
  preloadedFeatures: n,
  createVisualElement: i,
  useRender: s,
  useVisualState: l,
  Component: c,
}) {
  var d, f;
  n && By(n);
  function p(g, y) {
    let x;
    const k = { ...z.useContext(Fa), ...g, layoutId: by(g) },
      { isStatic: R } = k,
      j = Gy(g),
      D = l(g, R);
    if (!R && Oa) {
      ev();
      const N = tv(k);
      ((x = N.MeasureLayout), (j.visualElement = Zy(c, D, k, i, N.ProjectionNode)));
    }
    return A.jsxs(qs.Provider, {
      value: j,
      children: [
        x && j.visualElement ? A.jsx(x, { visualElement: j.visualElement, ...k }) : null,
        s(c, g, Xy(D, j.visualElement, y), D, R, j.visualElement),
      ],
    });
  }
  p.displayName = `motion.${typeof c == "string" ? c : `create(${(f = (d = c.displayName) !== null && d !== void 0 ? d : c.name) !== null && f !== void 0 ? f : ""})`}`;
  const m = z.forwardRef(p);
  return ((m[Qy] = c), m);
}
function by({ layoutId: n }) {
  const i = z.useContext(_a).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function ev(n, i) {
  z.useContext(Hh).strict;
}
function tv(n) {
  const { drag: i, layout: s } = mr;
  if (!i && !s) return {};
  const l = { ...i, ...s };
  return {
    MeasureLayout:
      (i != null && i.isEnabled(n)) || (s != null && s.isEnabled(n)) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode,
  };
}
const nv = [
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
function Wa(n) {
  return typeof n != "string" || n.includes("-") ? !1 : !!(nv.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function Sd(n) {
  const i = [{}, {}];
  return (
    n == null ||
      n.values.forEach((s, l) => {
        ((i[0][l] = s.get()), (i[1][l] = s.getVelocity()));
      }),
    i
  );
}
function Ha(n, i, s, l) {
  if (typeof i == "function") {
    const [c, d] = Sd(l);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  if ((typeof i == "string" && (i = n.variants && n.variants[i]), typeof i == "function")) {
    const [c, d] = Sd(l);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  return i;
}
const ma = (n) => Array.isArray(n),
  rv = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
  iv = (n) => (ma(n) ? n[n.length - 1] || 0 : n),
  Ke = (n) => !!(n && n.getVelocity);
function Bs(n) {
  const i = Ke(n) ? n.get() : n;
  return rv(i) ? i.toValue() : i;
}
function sv({ scrapeMotionValuesFromProps: n, createRenderState: i, onUpdate: s }, l, c, d) {
  const f = { latestValues: ov(l, c, d, n), renderState: i() };
  return (
    s && ((f.onMount = (p) => s({ props: l, current: p, ...f })), (f.onUpdate = (p) => s(p))),
    f
  );
}
const Zh = (n) => (i, s) => {
  const l = z.useContext(qs),
    c = z.useContext(Zs),
    d = () => sv(n, i, l, c);
  return s ? d() : ja(d);
};
function ov(n, i, s, l) {
  const c = {},
    d = l(n, {});
  for (const k in d) c[k] = Bs(d[k]);
  let { initial: f, animate: p } = n;
  const m = bs(n),
    g = Gh(n);
  i &&
    g &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let y = s ? s.initial === !1 : !1;
  y = y || f === !1;
  const x = y ? p : f;
  if (x && typeof x != "boolean" && !Js(x)) {
    const k = Array.isArray(x) ? x : [x];
    for (let R = 0; R < k.length; R++) {
      const j = Ha(n, k[R]);
      if (j) {
        const { transitionEnd: D, transition: N, ...O } = j;
        for (const $ in O) {
          let K = O[$];
          if (Array.isArray(K)) {
            const Y = y ? K.length - 1 : 0;
            K = K[Y];
          }
          K !== null && (c[$] = K);
        }
        for (const $ in D) c[$] = D[$];
      }
    }
  }
  return c;
}
const yr = [
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
  On = new Set(yr),
  qh = (n) => (i) => typeof i == "string" && i.startsWith(n),
  Jh = qh("--"),
  lv = qh("var(--"),
  Ka = (n) => (lv(n) ? av.test(n.split("/*")[0].trim()) : !1),
  av = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  bh = (n, i) => (i && typeof n == "number" ? i.transform(n) : n),
  Qt = (n, i, s) => (s > i ? i : s < n ? n : s),
  vr = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  pi = { ...vr, transform: (n) => Qt(0, 1, n) },
  Fs = { ...vr, default: 1 },
  vi = (n) => ({
    test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  pn = vi("deg"),
  jt = vi("%"),
  te = vi("px"),
  uv = vi("vh"),
  cv = vi("vw"),
  kd = { ...jt, parse: (n) => jt.parse(n) / 100, transform: (n) => jt.transform(n * 100) },
  fv = {
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
  dv = {
    rotate: pn,
    rotateX: pn,
    rotateY: pn,
    rotateZ: pn,
    scale: Fs,
    scaleX: Fs,
    scaleY: Fs,
    scaleZ: Fs,
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
    opacity: pi,
    originX: kd,
    originY: kd,
    originZ: te,
  },
  Pd = { ...vr, transform: Math.round },
  Ga = { ...fv, ...dv, zIndex: Pd, size: te, fillOpacity: pi, strokeOpacity: pi, numOctaves: Pd },
  hv = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  pv = yr.length;
function mv(n, i, s) {
  let l = "",
    c = !0;
  for (let d = 0; d < pv; d++) {
    const f = yr[d],
      p = n[f];
    if (p === void 0) continue;
    let m = !0;
    if (
      (typeof p == "number"
        ? (m = p === (f.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(p) === 0),
      !m || s)
    ) {
      const g = bh(p, Ga[f]);
      if (!m) {
        c = !1;
        const y = hv[f] || f;
        l += `${y}(${g}) `;
      }
      s && (i[f] = g);
    }
  }
  return ((l = l.trim()), s ? (l = s(i, c ? "" : l)) : c && (l = "none"), l);
}
function Qa(n, i, s) {
  const { style: l, vars: c, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const g = i[m];
    if (On.has(m)) {
      f = !0;
      continue;
    } else if (Jh(m)) {
      c[m] = g;
      continue;
    } else {
      const y = bh(g, Ga[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = y)) : (l[m] = y);
    }
  }
  if (
    (i.transform ||
      (f || s ? (l.transform = mv(i, n.transform, s)) : l.transform && (l.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: g = "50%", originZ: y = 0 } = d;
    l.transformOrigin = `${m} ${g} ${y}`;
  }
}
const gv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  yv = { offset: "strokeDashoffset", array: "strokeDasharray" };
function vv(n, i, s = 1, l = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? gv : yv;
  n[d.offset] = te.transform(-l);
  const f = te.transform(i),
    p = te.transform(s);
  n[d.array] = `${f} ${p}`;
}
function Td(n, i, s) {
  return typeof n == "string" ? n : te.transform(i + s * n);
}
function xv(n, i, s) {
  const l = Td(i, n.x, n.width),
    c = Td(s, n.y, n.height);
  return `${l} ${c}`;
}
function Xa(
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
    ...g
  },
  y,
  x,
) {
  if ((Qa(n, g, x), y)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: k, style: R, dimensions: j } = n;
  (k.transform && (j && (R.transform = k.transform), delete k.transform),
    j &&
      (c !== void 0 || d !== void 0 || R.transform) &&
      (R.transformOrigin = xv(j, c !== void 0 ? c : 0.5, d !== void 0 ? d : 0.5)),
    i !== void 0 && (k.x = i),
    s !== void 0 && (k.y = s),
    l !== void 0 && (k.scale = l),
    f !== void 0 && vv(k, f, p, m, !1));
}
const Ya = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  ep = () => ({ ...Ya(), attrs: {} }),
  Za = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function tp(n, { style: i, vars: s }, l, c) {
  Object.assign(n.style, i, c && c.getProjectionStyles(l));
  for (const d in s) n.style.setProperty(d, s[d]);
}
const np = new Set([
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
function rp(n, i, s, l) {
  tp(n, i, void 0, l);
  for (const c in i.attrs) n.setAttribute(np.has(c) ? c : Ua(c), i.attrs[c]);
}
const Hs = {};
function wv(n) {
  Object.assign(Hs, n);
}
function ip(n, { layout: i, layoutId: s }) {
  return (
    On.has(n) || n.startsWith("origin") || ((i || s !== void 0) && (!!Hs[n] || n === "opacity"))
  );
}
function qa(n, i, s) {
  var l;
  const { style: c } = n,
    d = {};
  for (const f in c)
    (Ke(c[f]) ||
      (i.style && Ke(i.style[f])) ||
      ip(f, n) ||
      ((l = s == null ? void 0 : s.getValue(f)) === null || l === void 0 ? void 0 : l.liveStyle) !==
        void 0) &&
      (d[f] = c[f]);
  return d;
}
function sp(n, i, s) {
  const l = qa(n, i, s);
  for (const c in n)
    if (Ke(n[c]) || Ke(i[c])) {
      const d = yr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      l[d] = n[c];
    }
  return l;
}
function Sv(n, i) {
  try {
    i.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect();
  } catch {
    i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Cd = ["x", "y", "width", "height", "cx", "cy", "r"],
  kv = {
    useVisualState: Zh({
      scrapeMotionValuesFromProps: sp,
      createRenderState: ep,
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
          for (let p = 0; p < Cd.length; p++) {
            const m = Cd[p];
            n[m] !== i[m] && (f = !0);
          }
        f &&
          xe.read(() => {
            (Sv(s, l),
              xe.render(() => {
                (Xa(l, c, Za(s.tagName), n.transformTemplate), rp(s, l));
              }));
          });
      },
    }),
  },
  Pv = { useVisualState: Zh({ scrapeMotionValuesFromProps: qa, createRenderState: Ya }) };
function op(n, i, s) {
  for (const l in i) !Ke(i[l]) && !ip(l, s) && (n[l] = i[l]);
}
function Tv({ transformTemplate: n }, i) {
  return z.useMemo(() => {
    const s = Ya();
    return (Qa(s, i, n), Object.assign({}, s.vars, s.style));
  }, [i]);
}
function Cv(n, i) {
  const s = n.style || {},
    l = {};
  return (op(l, s, n), Object.assign(l, Tv(n, i)), l);
}
function Ev(n, i) {
  const s = {},
    l = Cv(n, i);
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
function Rv(n, i, s, l) {
  const c = z.useMemo(() => {
    const d = ep();
    return (Xa(d, i, Za(l), n.transformTemplate), { ...d.attrs, style: { ...d.style } });
  }, [i]);
  if (n.style) {
    const d = {};
    (op(d, n.style, n), (c.style = { ...d, ...c.style }));
  }
  return c;
}
function Av(n = !1) {
  return (s, l, c, { latestValues: d }, f) => {
    const m = (Wa(s) ? Rv : Ev)(l, d, f, s),
      g = Wy(l, typeof s == "string", n),
      y = s !== z.Fragment ? { ...g, ...m, ref: c } : {},
      { children: x } = l,
      k = z.useMemo(() => (Ke(x) ? x.get() : x), [x]);
    return z.createElement(s, { ...y, children: k });
  };
}
function Dv(n, i) {
  return function (l, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Wa(l) ? kv : Pv),
      preloadedFeatures: n,
      useRender: Av(c),
      createVisualElement: i,
      Component: l,
    };
    return Jy(f);
  };
}
function lp(n, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== n.length) return !1;
  for (let l = 0; l < s; l++) if (i[l] !== n[l]) return !1;
  return !0;
}
function eo(n, i, s) {
  const l = n.getProps();
  return Ha(l, i, s !== void 0 ? s : l.custom, n);
}
const Mv = Ia(() => window.ScrollTimeline !== void 0);
class Lv {
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
      if (Mv() && c.attachTimeline) return c.attachTimeline(i);
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
class Vv extends Lv {
  then(i, s) {
    return Promise.all(this.animations).then(i).catch(s);
  }
}
function Ja(n, i) {
  return n ? n[i] || n.default || n : void 0;
}
const ga = 2e4;
function ap(n) {
  let i = 0;
  const s = 50;
  let l = n.next(i);
  for (; !l.done && i < ga;) ((i += s), (l = n.next(i)));
  return i >= ga ? 1 / 0 : i;
}
function ba(n) {
  return typeof n == "function";
}
function Ed(n, i) {
  ((n.timeline = i), (n.onfinish = null));
}
const eu = (n) => Array.isArray(n) && typeof n[0] == "number",
  Nv = { linearEasing: void 0 };
function _v(n, i) {
  const s = Ia(n);
  return () => {
    var l;
    return (l = Nv[i]) !== null && l !== void 0 ? l : s();
  };
}
const Ks = _v(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  up = (n, i, s = 10) => {
    let l = "";
    const c = Math.max(Math.round(i / s), 2);
    for (let d = 0; d < c; d++) l += n(pr(0, c - 1, d)) + ", ";
    return `linear(${l.substring(0, l.length - 2)})`;
  };
function cp(n) {
  return !!(
    (typeof n == "function" && Ks()) ||
    !n ||
    (typeof n == "string" && (n in ya || Ks())) ||
    eu(n) ||
    (Array.isArray(n) && n.every(cp))
  );
}
const oi = ([n, i, s, l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`,
  ya = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: oi([0, 0.65, 0.55, 1]),
    circOut: oi([0.55, 0, 1, 0.45]),
    backIn: oi([0.31, 0.01, 0.66, -0.59]),
    backOut: oi([0.33, 1.53, 0.69, 0.99]),
  };
function fp(n, i) {
  if (n)
    return typeof n == "function" && Ks()
      ? up(n, i)
      : eu(n)
        ? oi(n)
        : Array.isArray(n)
          ? n.map((s) => fp(s, i) || ya.easeOut)
          : ya[n];
}
const At = { x: !1, y: !1 };
function dp() {
  return At.x || At.y;
}
function jv(n, i, s) {
  var l;
  if (n instanceof Element) return [n];
  if (typeof n == "string") {
    let c = document;
    const d = (l = void 0) !== null && l !== void 0 ? l : c.querySelectorAll(n);
    return d ? Array.from(d) : [];
  }
  return Array.from(n);
}
function hp(n, i) {
  const s = jv(n),
    l = new AbortController(),
    c = { passive: !0, ...i, signal: l.signal };
  return [s, c, () => l.abort()];
}
function Rd(n) {
  return (i) => {
    i.pointerType === "touch" || dp() || n(i);
  };
}
function Fv(n, i, s = {}) {
  const [l, c, d] = hp(n, s),
    f = Rd((p) => {
      const { target: m } = p,
        g = i(p);
      if (typeof g != "function" || !m) return;
      const y = Rd((x) => {
        (g(x), m.removeEventListener("pointerleave", y));
      });
      m.addEventListener("pointerleave", y, c);
    });
  return (
    l.forEach((p) => {
      p.addEventListener("pointerenter", f, c);
    }),
    d
  );
}
const pp = (n, i) => (i ? (n === i ? !0 : pp(n, i.parentElement)) : !1),
  tu = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  Ov = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Iv(n) {
  return Ov.has(n.tagName) || n.tabIndex !== -1;
}
const li = new WeakSet();
function Ad(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function ra(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const zv = (n, i) => {
  const s = n.currentTarget;
  if (!s) return;
  const l = Ad(() => {
    if (li.has(s)) return;
    ra(s, "down");
    const c = Ad(() => {
        ra(s, "up");
      }),
      d = () => ra(s, "cancel");
    (s.addEventListener("keyup", c, i), s.addEventListener("blur", d, i));
  });
  (s.addEventListener("keydown", l, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", l), i));
};
function Dd(n) {
  return tu(n) && !dp();
}
function Bv(n, i, s = {}) {
  const [l, c, d] = hp(n, s),
    f = (p) => {
      const m = p.currentTarget;
      if (!Dd(p) || li.has(m)) return;
      li.add(m);
      const g = i(p),
        y = (R, j) => {
          (window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", k),
            !(!Dd(R) || !li.has(m)) &&
              (li.delete(m), typeof g == "function" && g(R, { success: j })));
        },
        x = (R) => {
          y(R, s.useGlobalTarget || pp(m, R.target));
        },
        k = (R) => {
          y(R, !1);
        };
      (window.addEventListener("pointerup", x, c), window.addEventListener("pointercancel", k, c));
    };
  return (
    l.forEach((p) => {
      (!Iv(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0),
        (s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        p.addEventListener("focus", (g) => zv(g, c), c));
    }),
    d
  );
}
function Uv(n) {
  return n === "x" || n === "y"
    ? At[n]
      ? null
      : ((At[n] = !0),
        () => {
          At[n] = !1;
        })
    : At.x || At.y
      ? null
      : ((At.x = At.y = !0),
        () => {
          At.x = At.y = !1;
        });
}
const mp = new Set(["width", "height", "top", "left", "right", "bottom", ...yr]);
let Us;
function $v() {
  Us = void 0;
}
const Ft = {
  now: () => (
    Us === void 0 &&
      Ft.set(ze.isProcessing || Oy.useManualTiming ? ze.timestamp : performance.now()),
    Us
  ),
  set: (n) => {
    ((Us = n), queueMicrotask($v));
  },
};
function nu(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function ru(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
class iu {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (nu(this.subscriptions, i), () => ru(this.subscriptions, i));
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
function gp(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const Md = 30,
  Wv = (n) => !isNaN(parseFloat(n));
class Hv {
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
      this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = Wv(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new iu());
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
    return gp(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
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
function mi(n, i) {
  return new Hv(n, i);
}
function Kv(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, mi(s));
}
function Gv(n, i) {
  const s = eo(n, i);
  let { transitionEnd: l = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...l };
  for (const f in d) {
    const p = iv(d[f]);
    Kv(n, f, p);
  }
}
function Qv(n) {
  return !!(Ke(n) && n.add);
}
function va(n, i) {
  const s = n.getValue("willChange");
  if (Qv(s)) return s.add(i);
}
function yp(n) {
  return n.props[Qh];
}
const vp = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  Xv = 1e-7,
  Yv = 12;
function Zv(n, i, s, l, c) {
  let d,
    f,
    p = 0;
  do ((f = i + (s - i) / 2), (d = vp(f, l, c) - n), d > 0 ? (s = f) : (i = f));
  while (Math.abs(d) > Xv && ++p < Yv);
  return f;
}
function xi(n, i, s, l) {
  if (n === i && s === l) return ct;
  const c = (d) => Zv(d, 0, 1, n, s);
  return (d) => (d === 0 || d === 1 ? d : vp(c(d), i, l));
}
const xp = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  wp = (n) => (i) => 1 - n(1 - i),
  Sp = xi(0.33, 1.53, 0.69, 0.99),
  su = wp(Sp),
  kp = xp(su),
  Pp = (n) => ((n *= 2) < 1 ? 0.5 * su(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))),
  ou = (n) => 1 - Math.sin(Math.acos(n)),
  Tp = wp(ou),
  Cp = xp(ou),
  Ep = (n) => /^0[^.\s]+$/u.test(n);
function qv(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Ep(n) : !0;
}
const ui = (n) => Math.round(n * 1e5) / 1e5,
  lu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Jv(n) {
  return n == null;
}
const bv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  au = (n, i) => (s) =>
    !!(
      (typeof s == "string" && bv.test(s) && s.startsWith(n)) ||
      (i && !Jv(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  Rp = (n, i, s) => (l) => {
    if (typeof l != "string") return l;
    const [c, d, f, p] = l.match(lu);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  e0 = (n) => Qt(0, 255, n),
  ia = { ...vr, transform: (n) => Math.round(e0(n)) },
  jn = {
    test: au("rgb", "red"),
    parse: Rp("red", "green", "blue"),
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
function t0(n) {
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
const xa = { test: au("#"), parse: t0, transform: jn.transform },
  cr = {
    test: au("hsl", "hue"),
    parse: Rp("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: s, alpha: l = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      jt.transform(ui(i)) +
      ", " +
      jt.transform(ui(s)) +
      ", " +
      ui(pi.transform(l)) +
      ")",
  },
  He = {
    test: (n) => jn.test(n) || xa.test(n) || cr.test(n),
    parse: (n) => (jn.test(n) ? jn.parse(n) : cr.test(n) ? cr.parse(n) : xa.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? jn.transform(n) : cr.transform(n),
  },
  n0 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function r0(n) {
  var i, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(lu)) === null || i === void 0 ? void 0 : i.length) || 0) +
      (((s = n.match(n0)) === null || s === void 0 ? void 0 : s.length) || 0) >
      0
  );
}
const Ap = "number",
  Dp = "color",
  i0 = "var",
  s0 = "var(",
  Ld = "${}",
  o0 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function gi(n) {
  const i = n.toString(),
    s = [],
    l = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      o0,
      (m) => (
        He.test(m)
          ? (l.color.push(d), c.push(Dp), s.push(He.parse(m)))
          : m.startsWith(s0)
            ? (l.var.push(d), c.push(i0), s.push(m))
            : (l.number.push(d), c.push(Ap), s.push(parseFloat(m))),
        ++d,
        Ld
      ),
    )
    .split(Ld);
  return { values: s, split: p, indexes: l, types: c };
}
function Mp(n) {
  return gi(n).values;
}
function Lp(n) {
  const { split: i, types: s } = gi(n),
    l = i.length;
  return (c) => {
    let d = "";
    for (let f = 0; f < l; f++)
      if (((d += i[f]), c[f] !== void 0)) {
        const p = s[f];
        p === Ap ? (d += ui(c[f])) : p === Dp ? (d += He.transform(c[f])) : (d += c[f]);
      }
    return d;
  };
}
const l0 = (n) => (typeof n == "number" ? 0 : n);
function a0(n) {
  const i = Mp(n);
  return Lp(n)(i.map(l0));
}
const yn = { test: r0, parse: Mp, createTransformer: Lp, getAnimatableNone: a0 },
  u0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function c0(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [l] = s.match(lu) || [];
  if (!l) return n;
  const c = s.replace(l, "");
  let d = u0.has(i) ? 1 : 0;
  return (l !== s && (d *= 100), i + "(" + d + c + ")");
}
const f0 = /\b([a-z-]*)\(.*?\)/gu,
  wa = {
    ...yn,
    getAnimatableNone: (n) => {
      const i = n.match(f0);
      return i ? i.map(c0).join(" ") : n;
    },
  },
  d0 = {
    ...Ga,
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
    filter: wa,
    WebkitFilter: wa,
  },
  uu = (n) => d0[n];
function Vp(n, i) {
  let s = uu(n);
  return (s !== wa && (s = yn), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0);
}
const h0 = new Set(["auto", "none", "0"]);
function p0(n, i, s) {
  let l = 0,
    c;
  for (; l < n.length && !c;) {
    const d = n[l];
    (typeof d == "string" && !h0.has(d) && gi(d).values.length && (c = n[l]), l++);
  }
  if (c && s) for (const d of i) n[d] = Vp(s, c);
}
const Vd = (n) => n === vr || n === te,
  Nd = (n, i) => parseFloat(n.split(", ")[i]),
  _d =
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
  m0 = new Set(["x", "y", "z"]),
  g0 = yr.filter((n) => !m0.has(n));
function y0(n) {
  const i = [];
  return (
    g0.forEach((s) => {
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
  x: _d(4, 13),
  y: _d(5, 14),
};
gr.translateX = gr.x;
gr.translateY = gr.y;
const Fn = new Set();
let Sa = !1,
  ka = !1;
function Np() {
  if (ka) {
    const n = Array.from(Fn).filter((l) => l.needsMeasurement),
      i = new Set(n.map((l) => l.element)),
      s = new Map();
    (i.forEach((l) => {
      const c = y0(l);
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
  ((ka = !1), (Sa = !1), Fn.forEach((n) => n.complete()), Fn.clear());
}
function _p() {
  Fn.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (ka = !0));
  });
}
function v0() {
  (_p(), Np());
}
class cu {
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
        ? (Fn.add(this), Sa || ((Sa = !0), xe.read(_p), xe.resolveKeyframes(Np)))
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
      Fn.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Fn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const jp = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  x0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function w0(n) {
  const i = x0.exec(n);
  if (!i) return [,];
  const [, s, l, c] = i;
  return [`--${s ?? l}`, c];
}
function Fp(n, i, s = 1) {
  const [l, c] = w0(n);
  if (!l) return;
  const d = window.getComputedStyle(i).getPropertyValue(l);
  if (d) {
    const f = d.trim();
    return jp(f) ? parseFloat(f) : f;
  }
  return Ka(c) ? Fp(c, i, s + 1) : c;
}
const Op = (n) => (i) => i.test(n),
  S0 = { test: (n) => n === "auto", parse: (n) => n },
  Ip = [vr, te, jt, pn, cv, uv, S0],
  jd = (n) => Ip.find(Op(n));
class zp extends cu {
  constructor(i, s, l, c, d) {
    super(i, s, l, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: l } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let m = 0; m < i.length; m++) {
      let g = i[m];
      if (typeof g == "string" && ((g = g.trim()), Ka(g))) {
        const y = Fp(g, s.current);
        (y !== void 0 && (i[m] = y), m === i.length - 1 && (this.finalKeyframe = g));
      }
    }
    if ((this.resolveNoneKeyframes(), !mp.has(l) || i.length !== 2)) return;
    const [c, d] = i,
      f = jd(c),
      p = jd(d);
    if (f !== p)
      if (Vd(f) && Vd(p))
        for (let m = 0; m < i.length; m++) {
          const g = i[m];
          typeof g == "string" && (i[m] = parseFloat(g));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      l = [];
    for (let c = 0; c < i.length; c++) qv(i[c]) && l.push(c);
    l.length && p0(i, l, s);
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
        this.removedTransforms.forEach(([m, g]) => {
          s.getValue(m).set(g);
        }),
      this.resolveNoneKeyframes());
  }
}
const Fd = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" && (yn.test(n) || n === "0") && !n.startsWith("url("))
      );
function k0(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== i) return !0;
}
function P0(n, i, s, l) {
  const c = n[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = Fd(c, i),
    p = Fd(d, i);
  return !f || !p ? !1 : k0(n) || ((s === "spring" || ba(s)) && l);
}
const T0 = (n) => n !== null;
function to(n, { repeat: i, repeatType: s = "loop" }, l) {
  const c = n.filter(T0),
    d = i && s !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return !d || l === void 0 ? c[d] : l;
}
const C0 = 40;
class Bp {
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
      ? this.resolvedAt - this.createdAt > C0
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (!this._resolved && !this.hasAttemptedResolve && v0(), this._resolved);
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
      isGenerator: g,
    } = this.options;
    if (!g && !P0(i, l, c, d))
      if (f) this.options.duration = 0;
      else {
        (m && m(to(i, this.options, s)), p && p(), this.resolveFinishedPromise());
        return;
      }
    const y = this.initPlayback(i, s);
    y !== !1 &&
      ((this._resolved = { keyframes: i, finalKeyframe: s, ...y }), this.onPostResolved());
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
function sa(n, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n
  );
}
function E0({ hue: n, saturation: i, lightness: s, alpha: l }) {
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
function Gs(n, i) {
  return (s) => (s > 0 ? i : n);
}
const oa = (n, i, s) => {
    const l = n * n,
      c = s * (i * i - l) + l;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  R0 = [xa, jn, cr],
  A0 = (n) => R0.find((i) => i.test(n));
function Od(n) {
  const i = A0(n);
  if (!i) return !1;
  let s = i.parse(n);
  return (i === cr && (s = E0(s)), s);
}
const Id = (n, i) => {
    const s = Od(n),
      l = Od(i);
    if (!s || !l) return Gs(n, i);
    const c = { ...s };
    return (d) => (
      (c.red = oa(s.red, l.red, d)),
      (c.green = oa(s.green, l.green, d)),
      (c.blue = oa(s.blue, l.blue, d)),
      (c.alpha = Te(s.alpha, l.alpha, d)),
      jn.transform(c)
    );
  },
  D0 = (n, i) => (s) => i(n(s)),
  wi = (...n) => n.reduce(D0),
  Pa = new Set(["none", "hidden"]);
function M0(n, i) {
  return Pa.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n);
}
function L0(n, i) {
  return (s) => Te(n, i, s);
}
function fu(n) {
  return typeof n == "number"
    ? L0
    : typeof n == "string"
      ? Ka(n)
        ? Gs
        : He.test(n)
          ? Id
          : _0
      : Array.isArray(n)
        ? Up
        : typeof n == "object"
          ? He.test(n)
            ? Id
            : V0
          : Gs;
}
function Up(n, i) {
  const s = [...n],
    l = s.length,
    c = n.map((d, f) => fu(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < l; f++) s[f] = c[f](d);
    return s;
  };
}
function V0(n, i) {
  const s = { ...n, ...i },
    l = {};
  for (const c in s) n[c] !== void 0 && i[c] !== void 0 && (l[c] = fu(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in l) s[d] = l[d](c);
    return s;
  };
}
function N0(n, i) {
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
const _0 = (n, i) => {
  const s = yn.createTransformer(i),
    l = gi(n),
    c = gi(i);
  return l.indexes.var.length === c.indexes.var.length &&
    l.indexes.color.length === c.indexes.color.length &&
    l.indexes.number.length >= c.indexes.number.length
    ? (Pa.has(n) && !c.values.length) || (Pa.has(i) && !l.values.length)
      ? M0(n, i)
      : wi(Up(N0(l, c), c.values), s)
    : Gs(n, i);
};
function $p(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number"
    ? Te(n, i, s)
    : fu(n)(n, i);
}
const j0 = 5;
function Wp(n, i, s) {
  const l = Math.max(i - j0, 0);
  return gp(s - n(l), i - l);
}
const Re = {
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
  la = 0.001;
function F0({
  duration: n = Re.duration,
  bounce: i = Re.bounce,
  velocity: s = Re.velocity,
  mass: l = Re.mass,
}) {
  let c,
    d,
    f = 1 - i;
  ((f = Qt(Re.minDamping, Re.maxDamping, f)),
    (n = Qt(Re.minDuration, Re.maxDuration, Gt(n))),
    f < 1
      ? ((c = (g) => {
          const y = g * f,
            x = y * n,
            k = y - s,
            R = Ta(g, f),
            j = Math.exp(-x);
          return la - (k / R) * j;
        }),
        (d = (g) => {
          const x = g * f * n,
            k = x * s + s,
            R = Math.pow(f, 2) * Math.pow(g, 2) * n,
            j = Math.exp(-x),
            D = Ta(Math.pow(g, 2), f);
          return ((-c(g) + la > 0 ? -1 : 1) * ((k - R) * j)) / D;
        }))
      : ((c = (g) => {
          const y = Math.exp(-g * n),
            x = (g - s) * n + 1;
          return -la + y * x;
        }),
        (d = (g) => {
          const y = Math.exp(-g * n),
            x = (s - g) * (n * n);
          return y * x;
        })));
  const p = 5 / n,
    m = I0(c, d, p);
  if (((n = Kt(n)), isNaN(m))) return { stiffness: Re.stiffness, damping: Re.damping, duration: n };
  {
    const g = Math.pow(m, 2) * l;
    return { stiffness: g, damping: f * 2 * Math.sqrt(l * g), duration: n };
  }
}
const O0 = 12;
function I0(n, i, s) {
  let l = s;
  for (let c = 1; c < O0; c++) l = l - n(l) / i(l);
  return l;
}
function Ta(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const z0 = ["duration", "bounce"],
  B0 = ["stiffness", "damping", "mass"];
function zd(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function U0(n) {
  let i = {
    velocity: Re.velocity,
    stiffness: Re.stiffness,
    damping: Re.damping,
    mass: Re.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!zd(n, B0) && zd(n, z0))
    if (n.visualDuration) {
      const s = n.visualDuration,
        l = (2 * Math.PI) / (s * 1.2),
        c = l * l,
        d = 2 * Qt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Re.mass, stiffness: c, damping: d };
    } else {
      const s = F0(n);
      ((i = { ...i, ...s, mass: Re.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function Hp(n = Re.visualDuration, i = Re.bounce) {
  const s = typeof n != "object" ? { visualDuration: n, keyframes: [0, 1], bounce: i } : n;
  let { restSpeed: l, restDelta: c } = s;
  const d = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: g,
      mass: y,
      duration: x,
      velocity: k,
      isResolvedFromDuration: R,
    } = U0({ ...s, velocity: -Gt(s.velocity || 0) }),
    j = k || 0,
    D = g / (2 * Math.sqrt(m * y)),
    N = f - d,
    O = Gt(Math.sqrt(m / y)),
    $ = Math.abs(N) < 5;
  (l || (l = $ ? Re.restSpeed.granular : Re.restSpeed.default),
    c || (c = $ ? Re.restDelta.granular : Re.restDelta.default));
  let K;
  if (D < 1) {
    const B = Ta(O, D);
    K = (ee) => {
      const le = Math.exp(-D * O * ee);
      return f - le * (((j + D * O * N) / B) * Math.sin(B * ee) + N * Math.cos(B * ee));
    };
  } else if (D === 1) K = (B) => f - Math.exp(-O * B) * (N + (j + O * N) * B);
  else {
    const B = O * Math.sqrt(D * D - 1);
    K = (ee) => {
      const le = Math.exp(-D * O * ee),
        Z = Math.min(B * ee, 300);
      return f - (le * ((j + D * O * N) * Math.sinh(Z) + B * N * Math.cosh(Z))) / B;
    };
  }
  const Y = {
    calculatedDuration: (R && x) || null,
    next: (B) => {
      const ee = K(B);
      if (R) p.done = B >= x;
      else {
        let le = 0;
        D < 1 && (le = B === 0 ? Kt(j) : Wp(K, B, ee));
        const Z = Math.abs(le) <= l,
          ge = Math.abs(f - ee) <= c;
        p.done = Z && ge;
      }
      return ((p.value = p.done ? f : ee), p);
    },
    toString: () => {
      const B = Math.min(ap(Y), ga),
        ee = up((le) => Y.next(B * le).value, B, 30);
      return B + "ms " + ee;
    },
  };
  return Y;
}
function Bd({
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
  const x = n[0],
    k = { done: !1, value: x },
    R = (Z) => (p !== void 0 && Z < p) || (m !== void 0 && Z > m),
    j = (Z) => (p === void 0 ? m : m === void 0 || Math.abs(p - Z) < Math.abs(m - Z) ? p : m);
  let D = s * i;
  const N = x + D,
    O = f === void 0 ? N : f(N);
  O !== N && (D = O - x);
  const $ = (Z) => -D * Math.exp(-Z / l),
    K = (Z) => O + $(Z),
    Y = (Z) => {
      const ge = $(Z),
        Ce = K(Z);
      ((k.done = Math.abs(ge) <= g), (k.value = k.done ? O : Ce));
    };
  let B, ee;
  const le = (Z) => {
    R(k.value) &&
      ((B = Z),
      (ee = Hp({
        keyframes: [k.value, j(k.value)],
        velocity: Wp(K, Z, k.value),
        damping: c,
        stiffness: d,
        restDelta: g,
        restSpeed: y,
      })));
  };
  return (
    le(0),
    {
      calculatedDuration: null,
      next: (Z) => {
        let ge = !1;
        return (
          !ee && B === void 0 && ((ge = !0), Y(Z), le(Z)),
          B !== void 0 && Z >= B ? ee.next(Z - B) : (!ge && Y(Z), k)
        );
      },
    }
  );
}
const $0 = xi(0.42, 0, 1, 1),
  W0 = xi(0, 0, 0.58, 1),
  Kp = xi(0.42, 0, 0.58, 1),
  H0 = (n) => Array.isArray(n) && typeof n[0] != "number",
  K0 = {
    linear: ct,
    easeIn: $0,
    easeInOut: Kp,
    easeOut: W0,
    circIn: ou,
    circInOut: Cp,
    circOut: Tp,
    backIn: su,
    backInOut: kp,
    backOut: Sp,
    anticipate: Pp,
  },
  Ud = (n) => {
    if (eu(n)) {
      $h(n.length === 4);
      const [i, s, l, c] = n;
      return xi(i, s, l, c);
    } else if (typeof n == "string") return K0[n];
    return n;
  };
function G0(n, i, s) {
  const l = [],
    c = s || $p,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = c(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || ct : i;
      p = wi(m, p);
    }
    l.push(p);
  }
  return l;
}
function Q0(n, i, { clamp: s = !0, ease: l, mixer: c } = {}) {
  const d = n.length;
  if (($h(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = G0(i, l, c),
    m = p.length,
    g = (y) => {
      if (f && y < n[0]) return i[0];
      let x = 0;
      if (m > 1) for (; x < n.length - 2 && !(y < n[x + 1]); x++);
      const k = pr(n[x], n[x + 1], y);
      return p[x](k);
    };
  return s ? (y) => g(Qt(n[0], n[d - 1], y)) : g;
}
function X0(n, i) {
  const s = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const c = pr(0, i, l);
    n.push(Te(s, 1, c));
  }
}
function Y0(n) {
  const i = [0];
  return (X0(i, n.length - 1), i);
}
function Z0(n, i) {
  return n.map((s) => s * i);
}
function q0(n, i) {
  return n.map(() => i || Kp).splice(0, n.length - 1);
}
function Qs({ duration: n = 300, keyframes: i, times: s, ease: l = "easeInOut" }) {
  const c = H0(l) ? l.map(Ud) : Ud(l),
    d = { done: !1, value: i[0] },
    f = Z0(s && s.length === i.length ? s : Y0(i), n),
    p = Q0(f, i, { ease: Array.isArray(c) ? c : q0(i, c) });
  return { calculatedDuration: n, next: (m) => ((d.value = p(m)), (d.done = m >= n), d) };
}
const J0 = (n) => {
    const i = ({ timestamp: s }) => n(s);
    return {
      start: () => xe.update(i, !0),
      stop: () => gn(i),
      now: () => (ze.isProcessing ? ze.timestamp : Ft.now()),
    };
  },
  b0 = { decay: Bd, inertia: Bd, tween: Qs, keyframes: Qs, spring: Hp },
  ex = (n) => n / 100;
class du extends Bp {
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
      f = (c == null ? void 0 : c.KeyframeResolver) || cu,
      p = (m, g) => this.onKeyframesResolved(m, g);
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
      p = ba(s) ? s : b0[s] || Qs;
    let m, g;
    p !== Qs && typeof i[0] != "number" && ((m = wi(ex, $p(i[0], i[1]))), (i = [0, 100]));
    const y = p({ ...this.options, keyframes: i });
    (d === "mirror" && (g = p({ ...this.options, keyframes: [...i].reverse(), velocity: -f })),
      y.calculatedDuration === null && (y.calculatedDuration = ap(y)));
    const { calculatedDuration: x } = y,
      k = x + c,
      R = k * (l + 1) - c;
    return {
      generator: y,
      mirroredGenerator: g,
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
      calculatedDuration: g,
      totalDuration: y,
      resolvedDuration: x,
    } = l;
    if (this.startTime === null) return d.next(0);
    const { delay: k, repeat: R, repeatType: j, repeatDelay: D, onUpdate: N } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 && (this.startTime = Math.min(i - y / this.speed, this.startTime)),
      s
        ? (this.currentTime = i)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(i - this.startTime) * this.speed));
    const O = this.currentTime - k * (this.speed >= 0 ? 1 : -1),
      $ = this.speed >= 0 ? O < 0 : O > y;
    ((this.currentTime = Math.max(O, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = y));
    let K = this.currentTime,
      Y = d;
    if (R) {
      const Z = Math.min(this.currentTime, y) / x;
      let ge = Math.floor(Z),
        Ce = Z % 1;
      (!Ce && Z >= 1 && (Ce = 1),
        Ce === 1 && ge--,
        (ge = Math.min(ge, R + 1)),
        !!(ge % 2) &&
          (j === "reverse" ? ((Ce = 1 - Ce), D && (Ce -= D / x)) : j === "mirror" && (Y = f)),
        (K = Qt(0, 1, Ce) * x));
    }
    const B = $ ? { done: !1, value: m[0] } : Y.next(K);
    p && (B.value = p(B.value));
    let { done: ee } = B;
    !$ && g !== null && (ee = this.speed >= 0 ? this.currentTime >= y : this.currentTime <= 0);
    const le =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ee));
    return (
      le && c !== void 0 && (B.value = to(m, this.options, c)),
      N && N(B.value),
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
    const { driver: i = J0, onPlay: s, startTime: l } = this.options;
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
const tx = new Set(["opacity", "clipPath", "filter", "transform"]);
function nx(
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
  const g = { [i]: s };
  m && (g.offset = m);
  const y = fp(p, c);
  return (
    Array.isArray(y) && (g.easing = y),
    n.animate(g, {
      delay: l,
      duration: c,
      easing: Array.isArray(y) ? "linear" : y,
      fill: "both",
      iterations: d + 1,
      direction: f === "reverse" ? "alternate" : "normal",
    })
  );
}
const rx = Ia(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Xs = 10,
  ix = 2e4;
function sx(n) {
  return ba(n.type) || n.type === "spring" || !cp(n.ease);
}
function ox(n, i) {
  const s = new du({ ...i, keyframes: n, repeat: 0, delay: 0, isGenerator: !0 });
  let l = { done: !1, value: n[0] };
  const c = [];
  let d = 0;
  for (; !l.done && d < ix;) ((l = s.sample(d)), c.push(l.value), (d += Xs));
  return { times: void 0, keyframes: c, duration: d - Xs, ease: "linear" };
}
const Gp = { anticipate: Pp, backInOut: kp, circInOut: Cp };
function lx(n) {
  return n in Gp;
}
class $d extends Bp {
  constructor(i) {
    super(i);
    const { name: s, motionValue: l, element: c, keyframes: d } = this.options;
    ((this.resolver = new zp(d, (f, p) => this.onKeyframesResolved(f, p), s, l, c)),
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
      startTime: g,
    } = this.options;
    if (!p.owner || !p.owner.current) return !1;
    if ((typeof d == "string" && Ks() && lx(d) && (d = Gp[d]), sx(this.options))) {
      const { onComplete: x, onUpdate: k, motionValue: R, element: j, ...D } = this.options,
        N = ox(i, D);
      ((i = N.keyframes),
        i.length === 1 && (i[1] = i[0]),
        (l = N.duration),
        (c = N.times),
        (d = N.ease),
        (f = "keyframes"));
    }
    const y = nx(p.owner.current, m, i, { ...this.options, duration: l, times: c, ease: d });
    return (
      (y.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Ed(y, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (y.onfinish = () => {
            const { onComplete: x } = this.options;
            (p.set(to(i, this.options, s)), x && x(), this.cancel(), this.resolveFinishedPromise());
          }),
      { animation: y, duration: l, times: c, type: f, ease: d, keyframes: i }
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
      if (!s) return ct;
      const { animation: l } = s;
      Ed(l, i);
    }
    return ct;
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
      const { motionValue: g, onUpdate: y, onComplete: x, element: k, ...R } = this.options,
        j = new du({
          ...R,
          keyframes: l,
          duration: c,
          type: d,
          ease: f,
          times: p,
          isGenerator: !0,
        }),
        D = Kt(this.time);
      g.setWithVelocity(j.sample(D - Xs).value, j.sample(D).value, Xs);
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
    const { onUpdate: m, transformTemplate: g } = s.owner.getProps();
    return rx() && l && tx.has(l) && !m && !g && !c && d !== "mirror" && f !== 0 && p !== "inertia";
  }
}
const ax = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  ux = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  cx = { type: "keyframes", duration: 0.8 },
  fx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  dx = (n, { keyframes: i }) =>
    i.length > 2 ? cx : On.has(n) ? (n.startsWith("scale") ? ux(i[1]) : ax) : fx;
function hx({
  when: n,
  delay: i,
  delayChildren: s,
  staggerChildren: l,
  staggerDirection: c,
  repeat: d,
  repeatType: f,
  repeatDelay: p,
  from: m,
  elapsed: g,
  ...y
}) {
  return !!Object.keys(y).length;
}
const hu =
  (n, i, s, l = {}, c, d) =>
  (f) => {
    const p = Ja(l, n) || {},
      m = p.delay || l.delay || 0;
    let { elapsed: g = 0 } = l;
    g = g - Kt(m);
    let y = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...p,
      delay: -g,
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
    (hx(p) || (y = { ...y, ...dx(n, y) }),
      y.duration && (y.duration = Kt(y.duration)),
      y.repeatDelay && (y.repeatDelay = Kt(y.repeatDelay)),
      y.from !== void 0 && (y.keyframes[0] = y.from));
    let x = !1;
    if (
      ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
        ((y.duration = 0), y.delay === 0 && (x = !0)),
      x && !d && i.get() !== void 0)
    ) {
      const k = to(y.keyframes, p);
      if (k !== void 0)
        return (
          xe.update(() => {
            (y.onUpdate(k), y.onComplete());
          }),
          new Vv([])
        );
    }
    return !d && $d.supports(y) ? new $d(y) : new du(y);
  };
function px({ protectedKeys: n, needsAnimating: i }, s) {
  const l = n.hasOwnProperty(s) && i[s] !== !0;
  return ((i[s] = !1), l);
}
function Qp(n, i, { delay: s = 0, transitionOverride: l, type: c } = {}) {
  var d;
  let { transition: f = n.getDefaultTransition(), transitionEnd: p, ...m } = i;
  l && (f = l);
  const g = [],
    y = c && n.animationState && n.animationState.getState()[c];
  for (const x in m) {
    const k = n.getValue(x, (d = n.latestValues[x]) !== null && d !== void 0 ? d : null),
      R = m[x];
    if (R === void 0 || (y && px(y, x))) continue;
    const j = { delay: s, ...Ja(f || {}, x) };
    let D = !1;
    if (window.MotionHandoffAnimation) {
      const O = yp(n);
      if (O) {
        const $ = window.MotionHandoffAnimation(O, x, xe);
        $ !== null && ((j.startTime = $), (D = !0));
      }
    }
    (va(n, x), k.start(hu(x, k, R, n.shouldReduceMotion && mp.has(x) ? { type: !1 } : j, n, D)));
    const N = k.animation;
    N && g.push(N);
  }
  return (
    p &&
      Promise.all(g).then(() => {
        xe.update(() => {
          p && Gv(n, p);
        });
      }),
    g
  );
}
function Ca(n, i, s = {}) {
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
  const f = c ? () => Promise.all(Qp(n, c, s)) : () => Promise.resolve(),
    p =
      n.variantChildren && n.variantChildren.size
        ? (g = 0) => {
            const { delayChildren: y = 0, staggerChildren: x, staggerDirection: k } = d;
            return mx(n, i, y + g, x, k, s);
          }
        : () => Promise.resolve(),
    { when: m } = d;
  if (m) {
    const [g, y] = m === "beforeChildren" ? [f, p] : [p, f];
    return g().then(() => y());
  } else return Promise.all([f(), p(s.delay)]);
}
function mx(n, i, s = 0, l = 0, c = 1, d) {
  const f = [],
    p = (n.variantChildren.size - 1) * l,
    m = c === 1 ? (g = 0) => g * l : (g = 0) => p - g * l;
  return (
    Array.from(n.variantChildren)
      .sort(gx)
      .forEach((g, y) => {
        (g.notify("AnimationStart", i),
          f.push(Ca(g, i, { ...d, delay: s + m(y) }).then(() => g.notify("AnimationComplete", i))));
      }),
    Promise.all(f)
  );
}
function gx(n, i) {
  return n.sortNodePosition(i);
}
function yx(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const c = i.map((d) => Ca(n, d, s));
    l = Promise.all(c);
  } else if (typeof i == "string") l = Ca(n, i, s);
  else {
    const c = typeof i == "function" ? eo(n, i, s.custom) : i;
    l = Promise.all(Qp(n, c, s));
  }
  return l.then(() => {
    n.notify("AnimationComplete", i);
  });
}
const vx = Ba.length;
function Xp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? Xp(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const i = {};
  for (let s = 0; s < vx; s++) {
    const l = Ba[s],
      c = n.props[l];
    (hi(c) || c === !1) && (i[l] = c);
  }
  return i;
}
const xx = [...za].reverse(),
  wx = za.length;
function Sx(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: l }) => yx(n, s, l)));
}
function kx(n) {
  let i = Sx(n),
    s = Wd(),
    l = !0;
  const c = (m) => (g, y) => {
    var x;
    const k = eo(
      n,
      y,
      m === "exit"
        ? (x = n.presenceContext) === null || x === void 0
          ? void 0
          : x.custom
        : void 0,
    );
    if (k) {
      const { transition: R, transitionEnd: j, ...D } = k;
      g = { ...g, ...D, ...j };
    }
    return g;
  };
  function d(m) {
    i = m(n);
  }
  function f(m) {
    const { props: g } = n,
      y = Xp(n.parent) || {},
      x = [],
      k = new Set();
    let R = {},
      j = 1 / 0;
    for (let N = 0; N < wx; N++) {
      const O = xx[N],
        $ = s[O],
        K = g[O] !== void 0 ? g[O] : y[O],
        Y = hi(K),
        B = O === m ? $.isActive : null;
      B === !1 && (j = N);
      let ee = K === y[O] && K !== g[O] && Y;
      if (
        (ee && l && n.manuallyAnimateOnMount && (ee = !1),
        ($.protectedKeys = { ...R }),
        (!$.isActive && B === null) || (!K && !$.prevProp) || Js(K) || typeof K == "boolean")
      )
        continue;
      const le = Px($.prevProp, K);
      let Z = le || (O === m && $.isActive && !ee && Y) || (N > j && Y),
        ge = !1;
      const Ce = Array.isArray(K) ? K : [K];
      let Ze = Ce.reduce(c(O), {});
      B === !1 && (Ze = {});
      const { prevResolvedValues: it = {} } = $,
        Ge = { ...it, ...Ze },
        qe = (ie) => {
          ((Z = !0), k.has(ie) && ((ge = !0), k.delete(ie)), ($.needsAnimating[ie] = !0));
          const I = n.getValue(ie);
          I && (I.liveStyle = !1);
        };
      for (const ie in Ge) {
        const I = Ze[ie],
          q = it[ie];
        if (R.hasOwnProperty(ie)) continue;
        let W = !1;
        (ma(I) && ma(q) ? (W = !lp(I, q)) : (W = I !== q),
          W
            ? I != null
              ? qe(ie)
              : k.add(ie)
            : I !== void 0 && k.has(ie)
              ? qe(ie)
              : ($.protectedKeys[ie] = !0));
      }
      (($.prevProp = K),
        ($.prevResolvedValues = Ze),
        $.isActive && (R = { ...R, ...Ze }),
        l && n.blockInitialAnimation && (Z = !1),
        Z &&
          (!(ee && le) || ge) &&
          x.push(...Ce.map((ie) => ({ animation: ie, options: { type: O } }))));
    }
    if (k.size) {
      const N = {};
      (k.forEach((O) => {
        const $ = n.getBaseTarget(O),
          K = n.getValue(O);
        (K && (K.liveStyle = !0), (N[O] = $ ?? null));
      }),
        x.push({ animation: N }));
    }
    let D = !!x.length;
    return (
      l && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (D = !1),
      (l = !1),
      D ? i(x) : Promise.resolve()
    );
  }
  function p(m, g) {
    var y;
    if (s[m].isActive === g) return Promise.resolve();
    ((y = n.variantChildren) === null ||
      y === void 0 ||
      y.forEach((k) => {
        var R;
        return (R = k.animationState) === null || R === void 0 ? void 0 : R.setActive(m, g);
      }),
      (s[m].isActive = g));
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
function Px(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !lp(i, n) : !1;
}
function Vn(n = !1) {
  return { isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Wd() {
  return {
    animate: Vn(!0),
    whileInView: Vn(),
    whileHover: Vn(),
    whileTap: Vn(),
    whileDrag: Vn(),
    whileFocus: Vn(),
    exit: Vn(),
  };
}
class vn {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
class Tx extends vn {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = kx(i)));
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
let Cx = 0;
class Ex extends vn {
  constructor() {
    (super(...arguments), (this.id = Cx++));
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
const Rx = { animation: { Feature: Tx }, exit: { Feature: Ex } };
function yi(n, i, s, l = { passive: !0 }) {
  return (n.addEventListener(i, s, l), () => n.removeEventListener(i, s));
}
function Si(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const Ax = (n) => (i) => tu(i) && n(i, Si(i));
function ci(n, i, s, l) {
  return yi(n, i, Ax(s), l);
}
const Hd = (n, i) => Math.abs(n - i);
function Dx(n, i) {
  const s = Hd(n.x, i.x),
    l = Hd(n.y, i.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
class Yp {
  constructor(i, s, { transformPagePoint: l, contextWindow: c, dragSnapToOrigin: d = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const x = ua(this.lastMoveEventInfo, this.history),
          k = this.startEvent !== null,
          R = Dx(x.offset, { x: 0, y: 0 }) >= 3;
        if (!k && !R) return;
        const { point: j } = x,
          { timestamp: D } = ze;
        this.history.push({ ...j, timestamp: D });
        const { onStart: N, onMove: O } = this.handlers;
        (k || (N && N(this.lastMoveEvent, x), (this.startEvent = this.lastMoveEvent)),
          O && O(this.lastMoveEvent, x));
      }),
      (this.handlePointerMove = (x, k) => {
        ((this.lastMoveEvent = x),
          (this.lastMoveEventInfo = aa(k, this.transformPagePoint)),
          xe.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (x, k) => {
        this.end();
        const { onEnd: R, onSessionEnd: j, resumeAnimation: D } = this.handlers;
        if ((this.dragSnapToOrigin && D && D(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const N = ua(
          x.type === "pointercancel" ? this.lastMoveEventInfo : aa(k, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && R && R(x, N), j && j(x, N));
      }),
      !tu(i))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = l),
      (this.contextWindow = c || window));
    const f = Si(i),
      p = aa(f, this.transformPagePoint),
      { point: m } = p,
      { timestamp: g } = ze;
    this.history = [{ ...m, timestamp: g }];
    const { onSessionStart: y } = s;
    (y && y(i, ua(p, this.history)),
      (this.removeListeners = wi(
        ci(this.contextWindow, "pointermove", this.handlePointerMove),
        ci(this.contextWindow, "pointerup", this.handlePointerUp),
        ci(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(), gn(this.updatePoint));
  }
}
function aa(n, i) {
  return i ? { point: i(n.point) } : n;
}
function Kd(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function ua({ point: n }, i) {
  return { point: n, delta: Kd(n, Zp(i)), offset: Kd(n, Mx(i)), velocity: Lx(i, 0.1) };
}
function Mx(n) {
  return n[0];
}
function Zp(n) {
  return n[n.length - 1];
}
function Lx(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    l = null;
  const c = Zp(n);
  for (; s >= 0 && ((l = n[s]), !(c.timestamp - l.timestamp > Kt(i)));) s--;
  if (!l) return { x: 0, y: 0 };
  const d = Gt(c.timestamp - l.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - l.x) / d, y: (c.y - l.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
const qp = 1e-4,
  Vx = 1 - qp,
  Nx = 1 + qp,
  Jp = 0.01,
  _x = 0 - Jp,
  jx = 0 + Jp;
function ft(n) {
  return n.max - n.min;
}
function Fx(n, i, s) {
  return Math.abs(n - i) <= s;
}
function Gd(n, i, s, l = 0.5) {
  ((n.origin = l),
    (n.originPoint = Te(i.min, i.max, n.origin)),
    (n.scale = ft(s) / ft(i)),
    (n.translate = Te(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= Vx && n.scale <= Nx) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= _x && n.translate <= jx) || isNaN(n.translate)) && (n.translate = 0));
}
function fi(n, i, s, l) {
  (Gd(n.x, i.x, s.x, l ? l.originX : void 0), Gd(n.y, i.y, s.y, l ? l.originY : void 0));
}
function Qd(n, i, s) {
  ((n.min = s.min + i.min), (n.max = n.min + ft(i)));
}
function Ox(n, i, s) {
  (Qd(n.x, i.x, s.x), Qd(n.y, i.y, s.y));
}
function Xd(n, i, s) {
  ((n.min = i.min - s.min), (n.max = n.min + ft(i)));
}
function di(n, i, s) {
  (Xd(n.x, i.x, s.x), Xd(n.y, i.y, s.y));
}
function Ix(n, { min: i, max: s }, l) {
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
function zx(n, { top: i, left: s, bottom: l, right: c }) {
  return { x: Yd(n.x, s, c), y: Yd(n.y, i, l) };
}
function Zd(n, i) {
  let s = i.min - n.min,
    l = i.max - n.max;
  return (i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l });
}
function Bx(n, i) {
  return { x: Zd(n.x, i.x), y: Zd(n.y, i.y) };
}
function Ux(n, i) {
  let s = 0.5;
  const l = ft(n),
    c = ft(i);
  return (
    c > l ? (s = pr(i.min, i.max - l, n.min)) : l > c && (s = pr(n.min, n.max - c, i.min)),
    Qt(0, 1, s)
  );
}
function $x(n, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
  );
}
const Ea = 0.35;
function Wx(n = Ea) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Ea),
    { x: qd(n, "left", "right"), y: qd(n, "top", "bottom") }
  );
}
function qd(n, i, s) {
  return { min: Jd(n, i), max: Jd(n, s) };
}
function Jd(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const bd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  fr = () => ({ x: bd(), y: bd() }),
  eh = () => ({ min: 0, max: 0 }),
  Me = () => ({ x: eh(), y: eh() });
function xt(n) {
  return [n("x"), n("y")];
}
function bp({ top: n, left: i, right: s, bottom: l }) {
  return { x: { min: i, max: s }, y: { min: n, max: l } };
}
function Hx({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function Kx(n, i) {
  if (!i) return n;
  const s = i({ x: n.left, y: n.top }),
    l = i({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: l.y, right: l.x };
}
function ca(n) {
  return n === void 0 || n === 1;
}
function Ra({ scale: n, scaleX: i, scaleY: s }) {
  return !ca(n) || !ca(i) || !ca(s);
}
function Nn(n) {
  return Ra(n) || em(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function em(n) {
  return th(n.x) || th(n.y);
}
function th(n) {
  return n && n !== "0%";
}
function Ys(n, i, s) {
  const l = n - s,
    c = i * l;
  return s + c;
}
function nh(n, i, s, l, c) {
  return (c !== void 0 && (n = Ys(n, c, l)), Ys(n, s, l) + i);
}
function Aa(n, i = 0, s = 1, l, c) {
  ((n.min = nh(n.min, i, s, l, c)), (n.max = nh(n.max, i, s, l, c)));
}
function tm(n, { x: i, y: s }) {
  (Aa(n.x, i.translate, i.scale, i.originPoint), Aa(n.y, s.translate, s.scale, s.originPoint));
}
const rh = 0.999999999999,
  ih = 1.0000000000001;
function Gx(n, i, s, l = !1) {
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
        hr(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), tm(n, f)),
      l && Nn(d.latestValues) && hr(n, d.latestValues));
  }
  (i.x < ih && i.x > rh && (i.x = 1), i.y < ih && i.y > rh && (i.y = 1));
}
function dr(n, i) {
  ((n.min = n.min + i), (n.max = n.max + i));
}
function sh(n, i, s, l, c = 0.5) {
  const d = Te(n.min, n.max, c);
  Aa(n, i, s, d, l);
}
function hr(n, i) {
  (sh(n.x, i.x, i.scaleX, i.scale, i.originX), sh(n.y, i.y, i.scaleY, i.scale, i.originY));
}
function nm(n, i) {
  return bp(Kx(n.getBoundingClientRect(), i));
}
function Qx(n, i, s) {
  const l = nm(n, s),
    { scroll: c } = i;
  return (c && (dr(l.x, c.offset.x), dr(l.y, c.offset.y)), l);
}
const rm = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Xx = new WeakMap();
class Yx {
  constructor(i) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Me()),
      (this.visualElement = i));
  }
  start(i, { snapToCursor: s = !1 } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const c = (y) => {
        const { dragSnapToOrigin: x } = this.getProps();
        (x ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(Si(y).point));
      },
      d = (y, x) => {
        const { drag: k, dragPropagation: R, onDragStart: j } = this.getProps();
        if (
          k &&
          !R &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Uv(k)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          xt((N) => {
            let O = this.getAxisMotionValue(N).get() || 0;
            if (jt.test(O)) {
              const { projection: $ } = this.visualElement;
              if ($ && $.layout) {
                const K = $.layout.layoutBox[N];
                K && (O = ft(K) * (parseFloat(O) / 100));
              }
            }
            this.originPoint[N] = O;
          }),
          j && xe.postRender(() => j(y, x)),
          va(this.visualElement, "transform"));
        const { animationState: D } = this.visualElement;
        D && D.setActive("whileDrag", !0);
      },
      f = (y, x) => {
        const {
          dragPropagation: k,
          dragDirectionLock: R,
          onDirectionLock: j,
          onDrag: D,
        } = this.getProps();
        if (!k && !this.openDragLock) return;
        const { offset: N } = x;
        if (R && this.currentDirection === null) {
          ((this.currentDirection = Zx(N)),
            this.currentDirection !== null && j && j(this.currentDirection));
          return;
        }
        (this.updateAxis("x", x.point, N),
          this.updateAxis("y", x.point, N),
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
    this.panSession = new Yp(
      i,
      { onSessionStart: c, onStart: d, onMove: f, onSessionEnd: p, resumeAnimation: m },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        contextWindow: rm(this.visualElement),
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
    (this.constraints && this.constraints[i] && (f = Ix(f, this.constraints[i], this.elastic[i])),
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
    (s && ur(s)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : s && c
        ? (this.constraints = zx(c.layoutBox, s))
        : (this.constraints = !1),
      (this.elastic = Wx(l)),
      d !== this.constraints &&
        c &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        xt((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = $x(c.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !ur(i)) return !1;
    const l = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = Qx(l, c.root, this.visualElement.getTransformPagePoint());
    let f = Bx(c.layout.layoutBox, d);
    if (s) {
      const p = s(Hx(f));
      ((this.hasMutatedConstraints = !!p), p && (f = bp(p)));
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
      g = xt((y) => {
        if (!Os(y, s, this.currentDirection)) return;
        let x = (m && m[y]) || {};
        f && (x = { min: 0, max: 0 });
        const k = c ? 200 : 1e6,
          R = c ? 40 : 1e7,
          j = {
            type: "inertia",
            velocity: l ? i[y] : 0,
            bounceStiffness: k,
            bounceDamping: R,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...x,
          };
        return this.startAxisValueAnimation(y, j);
      });
    return Promise.all(g).then(p);
  }
  startAxisValueAnimation(i, s) {
    const l = this.getAxisMotionValue(i);
    return (va(this.visualElement, i), l.start(hu(i, l, 0, s, this.visualElement, !1)));
  }
  stopAnimation() {
    xt((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    xt((i) => {
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
    xt((s) => {
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
    if (!ur(s) || !l || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    xt((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = Ux({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      this.resolveConstraints(),
      xt((f) => {
        if (!Os(f, i, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: g } = this.constraints[f];
        p.set(Te(m, g, c[f]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Xx.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = ci(i, "pointerdown", (m) => {
        const { drag: g, dragListener: y = !0 } = this.getProps();
        g && y && this.start(m);
      }),
      l = () => {
        const { dragConstraints: m } = this.getProps();
        ur(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", l);
    (c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), xe.read(l));
    const f = yi(window, "resize", () => this.scalePositionWithinConstraints()),
      p = c.addEventListener("didUpdate", ({ delta: m, hasLayoutChanged: g }) => {
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
    const i = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: l = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: f = Ea,
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
function Zx(n, i = 10) {
  let s = null;
  return (Math.abs(n.y) > i ? (s = "y") : Math.abs(n.x) > i && (s = "x"), s);
}
class qx extends vn {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = ct),
      (this.removeListeners = ct),
      (this.controls = new Yx(i)));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    (i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ct));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const oh = (n) => (i, s) => {
  n && xe.postRender(() => n(i, s));
};
class Jx extends vn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = ct));
  }
  onPointerDown(i) {
    this.session = new Yp(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: rm(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: s, onPan: l, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: oh(i),
      onStart: oh(s),
      onMove: l,
      onEnd: (d, f) => {
        (delete this.session, c && xe.postRender(() => c(d, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ci(this.node.current, "pointerdown", (i) =>
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
const $s = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function lh(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const si = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (te.test(n)) n = parseFloat(n);
        else return n;
      const s = lh(n, i.target.x),
        l = lh(n, i.target.y);
      return `${s}% ${l}%`;
    },
  },
  bx = {
    correct: (n, { treeScale: i, projectionDelta: s }) => {
      const l = n,
        c = yn.parse(n);
      if (c.length > 5) return l;
      const d = yn.createTransformer(n),
        f = typeof c[0] != "number" ? 1 : 0,
        p = s.x.scale * i.x,
        m = s.y.scale * i.y;
      ((c[0 + f] /= p), (c[1 + f] /= m));
      const g = Te(p, m, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= g),
        typeof c[3 + f] == "number" && (c[3 + f] /= g),
        d(c)
      );
    },
  };
class e1 extends z.Component {
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l, layoutId: c } = this.props,
      { projection: d } = i;
    (wv(t1),
      d &&
        (s.group && s.group.add(d),
        l && l.register && c && l.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({ ...d.options, onExitComplete: () => this.safeToRemove() })),
      ($s.hasEverUpdated = !0));
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
      $a.postRender(() => {
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
function im(n) {
  const [i, s] = Bh(),
    l = z.useContext(_a);
  return A.jsx(e1, {
    ...n,
    layoutGroup: l,
    switchLayoutGroup: z.useContext(Xh),
    isPresent: i,
    safeToRemove: s,
  });
}
const t1 = {
  borderRadius: {
    ...si,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: si,
  borderTopRightRadius: si,
  borderBottomLeftRadius: si,
  borderBottomRightRadius: si,
  boxShadow: bx,
};
function n1(n, i, s) {
  const l = Ke(n) ? n : mi(n);
  return (l.start(hu("", l, i, s)), l.animation);
}
function r1(n) {
  return n instanceof SVGElement && n.tagName !== "svg";
}
const i1 = (n, i) => n.depth - i.depth;
class s1 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (nu(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (ru(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(i1), (this.isDirty = !1), this.children.forEach(i));
  }
}
function o1(n, i) {
  const s = Ft.now(),
    l = ({ timestamp: c }) => {
      const d = c - s;
      d >= i && (gn(l), n(d - i));
    };
  return (xe.read(l, !0), () => gn(l));
}
const sm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  l1 = sm.length,
  ah = (n) => (typeof n == "string" ? parseFloat(n) : n),
  uh = (n) => typeof n == "number" || te.test(n);
function a1(n, i, s, l, c, d) {
  c
    ? ((n.opacity = Te(0, s.opacity !== void 0 ? s.opacity : 1, u1(l))),
      (n.opacityExit = Te(i.opacity !== void 0 ? i.opacity : 1, 0, c1(l))))
    : d &&
      (n.opacity = Te(
        i.opacity !== void 0 ? i.opacity : 1,
        s.opacity !== void 0 ? s.opacity : 1,
        l,
      ));
  for (let f = 0; f < l1; f++) {
    const p = `border${sm[f]}Radius`;
    let m = ch(i, p),
      g = ch(s, p);
    if (m === void 0 && g === void 0) continue;
    (m || (m = 0),
      g || (g = 0),
      m === 0 || g === 0 || uh(m) === uh(g)
        ? ((n[p] = Math.max(Te(ah(m), ah(g), l), 0)), (jt.test(g) || jt.test(m)) && (n[p] += "%"))
        : (n[p] = g));
  }
  (i.rotate || s.rotate) && (n.rotate = Te(i.rotate || 0, s.rotate || 0, l));
}
function ch(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const u1 = om(0, 0.5, Tp),
  c1 = om(0.5, 0.95, ct);
function om(n, i, s) {
  return (l) => (l < n ? 0 : l > i ? 1 : s(pr(n, i, l)));
}
function fh(n, i) {
  ((n.min = i.min), (n.max = i.max));
}
function vt(n, i) {
  (fh(n.x, i.x), fh(n.y, i.y));
}
function dh(n, i) {
  ((n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin));
}
function hh(n, i, s, l, c) {
  return ((n -= i), (n = Ys(n, 1 / s, l)), c !== void 0 && (n = Ys(n, 1 / c, l)), n);
}
function f1(n, i = 0, s = 1, l = 0.5, c, d = n, f = n) {
  if (
    (jt.test(i) && ((i = parseFloat(i)), (i = Te(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = Te(d.min, d.max, l);
  (n === d && (p -= i), (n.min = hh(n.min, i, s, p, c)), (n.max = hh(n.max, i, s, p, c)));
}
function ph(n, i, [s, l, c], d, f) {
  f1(n, i[s], i[l], i[c], i.scale, d, f);
}
const d1 = ["x", "scaleX", "originX"],
  h1 = ["y", "scaleY", "originY"];
function mh(n, i, s, l) {
  (ph(n.x, i, d1, s ? s.x : void 0, l ? l.x : void 0),
    ph(n.y, i, h1, s ? s.y : void 0, l ? l.y : void 0));
}
function gh(n) {
  return n.translate === 0 && n.scale === 1;
}
function lm(n) {
  return gh(n.x) && gh(n.y);
}
function yh(n, i) {
  return n.min === i.min && n.max === i.max;
}
function p1(n, i) {
  return yh(n.x, i.x) && yh(n.y, i.y);
}
function vh(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function am(n, i) {
  return vh(n.x, i.x) && vh(n.y, i.y);
}
function xh(n) {
  return ft(n.x) / ft(n.y);
}
function wh(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
class m1 {
  constructor() {
    this.members = [];
  }
  add(i) {
    (nu(this.members, i), i.scheduleRender());
  }
  remove(i) {
    if ((ru(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead)) {
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
function g1(n, i, s) {
  let l = "";
  const c = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((c || d || f) && (l = `translate3d(${c}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const { transformPerspective: g, rotate: y, rotateX: x, rotateY: k, skewX: R, skewY: j } = s;
    (g && (l = `perspective(${g}px) ${l}`),
      y && (l += `rotate(${y}deg) `),
      x && (l += `rotateX(${x}deg) `),
      k && (l += `rotateY(${k}deg) `),
      R && (l += `skewX(${R}deg) `),
      j && (l += `skewY(${j}deg) `));
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return ((p !== 1 || m !== 1) && (l += `scale(${p}, ${m})`), l || "none");
}
const _n = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ai = typeof window < "u" && window.MotionDebug !== void 0,
  fa = ["", "X", "Y", "Z"],
  y1 = { visibility: "hidden" },
  Sh = 1e3;
let v1 = 0;
function da(n, i, s, l) {
  const { latestValues: c } = i;
  c[n] && ((s[n] = c[n]), i.setStaticValue(n, 0), l && (l[n] = 0));
}
function um(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const s = yp(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", xe, !(c || d));
  }
  const { parent: l } = n;
  l && !l.hasCheckedOptimisedAppear && um(l);
}
function cm({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: l,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, p = i == null ? void 0 : i()) {
      ((this.id = v1++),
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
            ai && (_n.totalNodes = _n.resolvedTargetDeltas = _n.recalculatedProjection = 0),
            this.nodes.forEach(S1),
            this.nodes.forEach(E1),
            this.nodes.forEach(R1),
            this.nodes.forEach(k1),
            ai && window.MotionDebug.record(_n));
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
      this.root === this && (this.nodes = new s1());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new iu()),
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
      ((this.isSVG = r1(f)), (this.instance = f));
      const { layoutId: m, layout: g, visualElement: y } = this.options;
      if (
        (y && !y.current && y.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        p && (g || m) && (this.isLayoutDirty = !0),
        n)
      ) {
        let x;
        const k = () => (this.root.updateBlockedByResize = !1);
        n(f, () => {
          ((this.root.updateBlockedByResize = !0),
            x && x(),
            (x = o1(k, 250)),
            $s.hasAnimatedSinceResize &&
              (($s.hasAnimatedSinceResize = !1), this.nodes.forEach(Ph)));
        });
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          y &&
          (m || g) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: x, hasLayoutChanged: k, hasRelativeTargetChanged: R, layout: j }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const D = this.options.transition || y.getDefaultTransition() || V1,
                { onLayoutAnimationStart: N, onLayoutAnimationComplete: O } = y.getProps(),
                $ = !this.targetLayout || !am(this.targetLayout, j) || R,
                K = !k && R;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                K ||
                (k && ($ || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(x, K));
                const Y = { ...Ja(D, "layout"), onPlay: N, onComplete: O };
                ((y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((Y.delay = 0), (Y.type = !1)),
                  this.startAnimation(Y));
              } else
                (k || Ph(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = j;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        gn(this.updateProjection));
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(A1), this.animationId++);
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
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && um(this),
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
        (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(kh));
        return;
      }
      (this.isUpdating || this.nodes.forEach(T1),
        (this.isUpdating = !1),
        this.nodes.forEach(C1),
        this.nodes.forEach(x1),
        this.nodes.forEach(w1),
        this.clearAllSnapshots());
      const p = Ft.now();
      ((ze.delta = Qt(0, 1e3 / 60, p - ze.timestamp)),
        (ze.timestamp = p),
        (ze.isProcessing = !0),
        na.update.process(ze),
        na.preRender.process(ze),
        na.render.process(ze),
        (ze.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), $a.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(P1), this.sharedNodes.forEach(D1));
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
        (this.layoutCorrected = Me()),
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
        p = this.projectionDelta && !lm(this.projectionDelta),
        m = this.getTransformTemplate(),
        g = m ? m(this.latestValues, "") : void 0,
        y = g !== this.prevTransformTemplateValue;
      f &&
        (p || Nn(this.latestValues) || y) &&
        (c(this.instance, g), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        f && (m = this.removeTransform(m)),
        N1(m),
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
      if (!p) return Me();
      const m = p.measureViewportBox();
      if (!(
        ((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) || this.path.some(_1)
      )) {
        const { scroll: y } = this.root;
        y && (dr(m.x, y.offset.x), dr(m.y, y.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var p;
      const m = Me();
      if ((vt(m, f), !((p = this.scroll) === null || p === void 0) && p.wasRoot)) return m;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g],
          { scroll: x, options: k } = y;
        y !== this.root &&
          x &&
          k.layoutScroll &&
          (x.wasRoot && vt(m, f), dr(m.x, x.offset.x), dr(m.y, x.offset.y));
      }
      return m;
    }
    applyTransform(f, p = !1) {
      const m = Me();
      vt(m, f);
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        (!p &&
          y.options.layoutScroll &&
          y.scroll &&
          y !== y.root &&
          hr(m, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
          Nn(y.latestValues) && hr(m, y.latestValues));
      }
      return (Nn(this.latestValues) && hr(m, this.latestValues), m);
    }
    removeTransform(f) {
      const p = Me();
      vt(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        if (!g.instance || !Nn(g.latestValues)) continue;
        Ra(g.latestValues) && g.updateSnapshot();
        const y = Me(),
          x = g.measurePageBox();
        (vt(y, x), mh(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, y));
      }
      return (Nn(this.latestValues) && mh(p, this.latestValues), p);
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
              (this.relativeTarget = Me()),
              (this.relativeTargetOrigin = Me()),
              di(this.relativeTargetOrigin, this.layout.layoutBox, R.layout.layoutBox),
              vt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = Me()), (this.targetWithTransforms = Me())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Ox(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : vt(this.target, this.layout.layoutBox),
                  tm(this.target, this.targetDelta))
                : vt(this.target, this.layout.layoutBox),
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
                (this.relativeTarget = Me()),
                (this.relativeTargetOrigin = Me()),
                di(this.relativeTargetOrigin, this.target, R.target),
                vt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ai && _n.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ra(this.parent.latestValues) || em(this.parent.latestValues)))
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
        this.resolvedRelativeTargetAt === ze.timestamp && (g = !1),
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
      const k = this.treeScale.x,
        R = this.treeScale.y;
      (Gx(this.layoutCorrected, this.treeScale, this.path, m),
        p.layout &&
          !p.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((p.target = p.layout.layoutBox), (p.targetWithTransforms = Me())));
      const { target: j } = p;
      if (!j) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (dh(this.prevProjectionDelta.x, this.projectionDelta.x),
          dh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        fi(this.projectionDelta, this.layoutCorrected, j, this.latestValues),
        (this.treeScale.x !== k ||
          this.treeScale.y !== R ||
          !wh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !wh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", j)),
        ai && _n.recalculatedProjection++);
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
      ((this.prevProjectionDelta = fr()),
        (this.projectionDelta = fr()),
        (this.projectionDeltaWithTransform = fr()));
    }
    setAnimationOrigin(f, p = !1) {
      const m = this.snapshot,
        g = m ? m.latestValues : {},
        y = { ...this.latestValues },
        x = fr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const k = Me(),
        R = m ? m.source : void 0,
        j = this.layout ? this.layout.source : void 0,
        D = R !== j,
        N = this.getStack(),
        O = !N || N.members.length <= 1,
        $ = !!(D && !O && this.options.crossfade === !0 && !this.path.some(L1));
      this.animationProgress = 0;
      let K;
      ((this.mixTargetDelta = (Y) => {
        const B = Y / 1e3;
        (Th(x.x, f.x, B),
          Th(x.y, f.y, B),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (di(k, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            M1(this.relativeTarget, this.relativeTargetOrigin, k, B),
            K && p1(this.relativeTarget, K) && (this.isProjectionDirty = !1),
            K || (K = Me()),
            vt(K, this.relativeTarget)),
          D && ((this.animationValues = y), a1(y, g, this.latestValues, B, $, O)),
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
        this.pendingAnimation && (gn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = xe.update(() => {
          (($s.hasAnimatedSinceResize = !0),
            (this.currentAnimation = n1(0, Sh, {
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
        (this.mixTargetDelta && this.mixTargetDelta(Sh), this.currentAnimation.stop()),
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
          fm(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          m = this.target || Me();
          const x = ft(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + x));
          const k = ft(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + k));
        }
        (vt(p, m), hr(p, y), fi(this.projectionDeltaWithTransform, this.layoutCorrected, p, y));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new m1()),
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
      m.z && da("z", f, g, this.animationValues);
      for (let y = 0; y < fa.length; y++)
        (da(`rotate${fa[y]}`, f, g, this.animationValues),
          da(`skew${fa[y]}`, f, g, this.animationValues));
      f.render();
      for (const y in g)
        (f.setStaticValue(y, g[y]), this.animationValues && (this.animationValues[y] = g[y]));
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      var p, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return y1;
      const g = { visibility: "" },
        y = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (g.opacity = ""),
          (g.pointerEvents = Bs(f == null ? void 0 : f.pointerEvents) || ""),
          (g.transform = y ? y(this.latestValues, "") : "none"),
          g
        );
      const x = this.getLead();
      if (!this.projectionDelta || !this.layout || !x.target) {
        const D = {};
        return (
          this.options.layoutId &&
            ((D.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (D.pointerEvents = Bs(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !Nn(this.latestValues) &&
            ((D.transform = y ? y({}, "") : "none"), (this.hasProjected = !1)),
          D
        );
      }
      const k = x.animationValues || x.latestValues;
      (this.applyTransformsToTarget(),
        (g.transform = g1(this.projectionDeltaWithTransform, this.treeScale, k)),
        y && (g.transform = y(k, g.transform)));
      const { x: R, y: j } = this.projectionDelta;
      ((g.transformOrigin = `${R.origin * 100}% ${j.origin * 100}% 0`),
        x.animationValues
          ? (g.opacity =
              x === this
                ? (m = (p = k.opacity) !== null && p !== void 0 ? p : this.latestValues.opacity) !==
                    null && m !== void 0
                  ? m
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : k.opacityExit)
          : (g.opacity =
              x === this
                ? k.opacity !== void 0
                  ? k.opacity
                  : ""
                : k.opacityExit !== void 0
                  ? k.opacityExit
                  : 0));
      for (const D in Hs) {
        if (k[D] === void 0) continue;
        const { correct: N, applyTo: O } = Hs[D],
          $ = g.transform === "none" ? k[D] : N(k[D], x);
        if (O) {
          const K = O.length;
          for (let Y = 0; Y < K; Y++) g[O[Y]] = $;
        } else g[D] = $;
      }
      return (
        this.options.layoutId &&
          (g.pointerEvents = x === this ? Bs(f == null ? void 0 : f.pointerEvents) || "" : "none"),
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
        this.root.nodes.forEach(kh),
        this.root.sharedNodes.clear());
    }
  };
}
function x1(n) {
  n.updateLayout();
}
function w1(n) {
  var i;
  const s = ((i = n.resumeFrom) === null || i === void 0 ? void 0 : i.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && s && n.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: c } = n.layout,
      { animationType: d } = n.options,
      f = s.source !== n.layout.source;
    d === "size"
      ? xt((x) => {
          const k = f ? s.measuredBox[x] : s.layoutBox[x],
            R = ft(k);
          ((k.min = l[x].min), (k.max = k.min + R));
        })
      : fm(d, s.layoutBox, l) &&
        xt((x) => {
          const k = f ? s.measuredBox[x] : s.layoutBox[x],
            R = ft(l[x]);
          ((k.max = k.min + R),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[x].max = n.relativeTarget[x].min + R)));
        });
    const p = fr();
    fi(p, l, s.layoutBox);
    const m = fr();
    f ? fi(m, n.applyTransform(c, !0), s.measuredBox) : fi(m, l, s.layoutBox);
    const g = !lm(p);
    let y = !1;
    if (!n.resumeFrom) {
      const x = n.getClosestProjectingParent();
      if (x && !x.resumeFrom) {
        const { snapshot: k, layout: R } = x;
        if (k && R) {
          const j = Me();
          di(j, s.layoutBox, k.layoutBox);
          const D = Me();
          (di(D, l, R.layoutBox),
            am(j, D) || (y = !0),
            x.options.layoutRoot &&
              ((n.relativeTarget = D), (n.relativeTargetOrigin = j), (n.relativeParent = x)));
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
function S1(n) {
  (ai && _n.totalNodes++,
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
function k1(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function P1(n) {
  n.clearSnapshot();
}
function kh(n) {
  n.clearMeasurements();
}
function T1(n) {
  n.isLayoutDirty = !1;
}
function C1(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function Ph(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function E1(n) {
  n.resolveTargetDelta();
}
function R1(n) {
  n.calcProjection();
}
function A1(n) {
  n.resetSkewAndRotation();
}
function D1(n) {
  n.removeLeadSnapshot();
}
function Th(n, i, s) {
  ((n.translate = Te(i.translate, 0, s)),
    (n.scale = Te(i.scale, 1, s)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint));
}
function Ch(n, i, s, l) {
  ((n.min = Te(i.min, s.min, l)), (n.max = Te(i.max, s.max, l)));
}
function M1(n, i, s, l) {
  (Ch(n.x, i.x, s.x, l), Ch(n.y, i.y, s.y, l));
}
function L1(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const V1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Eh = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  Rh = Eh("applewebkit/") && !Eh("chrome/") ? Math.round : ct;
function Ah(n) {
  ((n.min = Rh(n.min)), (n.max = Rh(n.max)));
}
function N1(n) {
  (Ah(n.x), Ah(n.y));
}
function fm(n, i, s) {
  return n === "position" || (n === "preserve-aspect" && !Fx(xh(i), xh(s), 0.2));
}
function _1(n) {
  var i;
  return n !== n.root && ((i = n.scroll) === null || i === void 0 ? void 0 : i.wasRoot);
}
const j1 = cm({
    attachResizeListener: (n, i) => yi(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ha = { current: void 0 },
  dm = cm({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!ha.current) {
        const n = new j1({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (ha.current = n));
      }
      return ha.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  F1 = { pan: { Feature: Jx }, drag: { Feature: qx, ProjectionNode: dm, MeasureLayout: im } };
function Dh(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s,
    d = l[c];
  d && xe.postRender(() => d(i, Si(i)));
}
class O1 extends vn {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = Fv(i, (s) => (Dh(this.node, s, "Start"), (l) => Dh(this.node, l, "End"))));
  }
  unmount() {}
}
class I1 extends vn {
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
    this.unmount = wi(
      yi(this.node.current, "focus", () => this.onFocus()),
      yi(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Mh(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s),
    d = l[c];
  d && xe.postRender(() => d(i, Si(i)));
}
class z1 extends vn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = Bv(
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
const Da = new WeakMap(),
  pa = new WeakMap(),
  B1 = (n) => {
    const i = Da.get(n.target);
    i && i(n);
  },
  U1 = (n) => {
    n.forEach(B1);
  };
function $1({ root: n, ...i }) {
  const s = n || document;
  pa.has(s) || pa.set(s, {});
  const l = pa.get(s),
    c = JSON.stringify(i);
  return (l[c] || (l[c] = new IntersectionObserver(U1, { root: n, ...i })), l[c]);
}
function W1(n, i, s) {
  const l = $1(i);
  return (
    Da.set(n, s),
    l.observe(n),
    () => {
      (Da.delete(n), l.unobserve(n));
    }
  );
}
const H1 = { some: 0, all: 1 };
class K1 extends vn {
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
        threshold: typeof c == "number" ? c : H1[c],
      },
      p = (m) => {
        const { isIntersecting: g } = m;
        if (this.isInView === g || ((this.isInView = g), d && !g && this.hasEnteredView)) return;
        (g && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", g));
        const { onViewportEnter: y, onViewportLeave: x } = this.node.getProps(),
          k = g ? y : x;
        k && k(m);
      };
    return W1(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(G1(i, s)) && this.startObserver();
  }
  unmount() {}
}
function G1({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const Q1 = {
    inView: { Feature: K1 },
    tap: { Feature: z1 },
    focus: { Feature: I1 },
    hover: { Feature: O1 },
  },
  X1 = { layout: { ProjectionNode: dm, MeasureLayout: im } },
  Ma = { current: null },
  hm = { current: !1 };
function Y1() {
  if (((hm.current = !0), !!Oa))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Ma.current = n.matches);
      (n.addListener(i), i());
    } else Ma.current = !1;
}
const Z1 = [...Ip, He, yn],
  q1 = (n) => Z1.find(Op(n)),
  Lh = new WeakMap();
function J1(n, i, s) {
  for (const l in i) {
    const c = i[l],
      d = s[l];
    if (Ke(c)) n.addValue(l, c);
    else if (Ke(d)) n.addValue(l, mi(c, { owner: n }));
    else if (d !== c)
      if (n.hasValue(l)) {
        const f = n.getValue(l);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = n.getStaticValue(l);
        n.addValue(l, mi(f !== void 0 ? f : c, { owner: n }));
      }
  }
  for (const l in s) i[l] === void 0 && n.removeValue(l);
  return i;
}
const Vh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class b1 {
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
      (this.KeyframeResolver = cu),
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
    const { latestValues: m, renderState: g, onUpdate: y } = f;
    ((this.onUpdate = y),
      (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = s.initial ? { ...m } : {}),
      (this.renderState = g),
      (this.parent = i),
      (this.props = s),
      (this.presenceContext = l),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = p),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = bs(s)),
      (this.isVariantNode = Gh(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: x, ...k } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const R in k) {
      const j = k[R];
      m[R] !== void 0 && Ke(j) && j.set(m[R], !1);
    }
  }
  mount(i) {
    ((this.current = i),
      Lh.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, l) => this.bindToMotionValue(l, s)),
      hm.current || Y1(),
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
    (Lh.delete(this.current),
      this.projection && this.projection.unmount(),
      gn(this.notifyUpdate),
      gn(this.render),
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
    for (i in mr) {
      const s = mr[i];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Me();
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
    for (let l = 0; l < Vh.length; l++) {
      const c = Vh[l];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = J1(
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
        ((l = mi(s === null ? void 0 : s, { owner: this })), this.addValue(i, l)),
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
        (typeof c == "string" && (jp(c) || Ep(c))
          ? (c = parseFloat(c))
          : !q1(c) && yn.test(s) && (c = Vp(i, s)),
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
      const f = Ha(
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
    return (this.events[i] || (this.events[i] = new iu()), this.events[i].add(s));
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
}
class pm extends b1 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = zp));
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
function ew(n) {
  return window.getComputedStyle(n);
}
class tw extends pm {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = tp));
  }
  readValueFromInstance(i, s) {
    if (On.has(s)) {
      const l = uu(s);
      return (l && l.default) || 0;
    } else {
      const l = ew(i),
        c = (Jh(s) ? l.getPropertyValue(s) : l[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return nm(i, s);
  }
  build(i, s, l) {
    Qa(i, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return qa(i, s, l);
  }
}
class nw extends pm {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Me));
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (On.has(s)) {
      const l = uu(s);
      return (l && l.default) || 0;
    }
    return ((s = np.has(s) ? s : Ua(s)), i.getAttribute(s));
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return sp(i, s, l);
  }
  build(i, s, l) {
    Xa(i, s, this.isSVGTag, l.transformTemplate);
  }
  renderInstance(i, s, l, c) {
    rp(i, s, l, c);
  }
  mount(i) {
    ((this.isSVGTag = Za(i.tagName)), super.mount(i));
  }
}
const rw = (n, i) => (Wa(n) ? new nw(i) : new tw(i, { allowProjection: n !== z.Fragment })),
  iw = Dv({ ...Rx, ...Q1, ...F1, ...X1 }, rw),
  mn = Hy(iw);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sw = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  mm = (...n) =>
    n
      .filter((i, s, l) => !!i && i.trim() !== "" && l.indexOf(i) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ow = {
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
 */ const lw = z.forwardRef(
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
        ...ow,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: l ? (Number(s) * 24) / Number(i) : s,
        className: mm("lucide", c),
        ...p,
      },
      [...f.map(([g, y]) => z.createElement(g, y)), ...(Array.isArray(d) ? d : [d])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gm = (n, i) => {
  const s = z.forwardRef(({ className: l, ...c }, d) =>
    z.createElement(lw, { ref: d, iconNode: i, className: mm(`lucide-${sw(n)}`, l), ...c }),
  );
  return ((s.displayName = `${n}`), s);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aw = gm("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uw = gm("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function Nh({ className: n = "h-8 w-8" }) {
  return A.jsxs("svg", {
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    "aria-hidden": !0,
    children: [
      A.jsx("rect", { width: "32", height: "32", rx: "8", fill: "#7b39fc" }),
      A.jsx("path", {
        d: "M8 22V10h3.2l4.1 7.2L19.4 10H22.5v12h-2.6v-7.4l-3.8 6.6h-1.5l-3.8-6.6V22H8z",
        fill: "white",
      }),
      A.jsx("path", {
        d: "M23.5 8.5L26 6l2.5 2.5M26 6v5",
        stroke: "white",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
const _h = [
    { label: "Home", route: "" },
    { label: "Services", route: "services" },
    { label: "Reviews", route: "reviews" },
    { label: "Contact us", route: "contact" },
  ],
  jh = "font-cabin text-sm font-medium text-white/80 transition-colors hover:text-white";
function cw({ menuOpen: n, setMenuOpen: i }) {
  const s = () => i(!1);
  return A.jsxs(A.Fragment, {
    children: [
      A.jsx("header", {
        className: "absolute left-0 right-0 top-0 z-30 px-4 pt-4 sm:px-6 sm:pt-6 md:px-10",
        children: A.jsxs("div", {
          className:
            "glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6 sm:py-4",
          children: [
            A.jsxs(_t, {
              target: { kind: "route", path: "" },
              className: "flex items-center gap-2.5",
              "aria-label": "Datacore home",
              onClick: s,
              children: [
                A.jsx(Nh, { className: "h-9 w-9 shrink-0" }),
                A.jsx("span", {
                  className: "text-base font-semibold tracking-tight text-white",
                  "data-editable": !0,
                  children: "Datacore",
                }),
              ],
            }),
            A.jsx("nav", {
              className: "hidden items-center gap-6 lg:flex",
              children: _h.map((l) =>
                A.jsx(
                  _t,
                  {
                    target: { kind: "route", path: l.route },
                    className: jh,
                    children: A.jsx("span", { "data-editable": !0, children: l.label }),
                  },
                  l.route,
                ),
              ),
            }),
            A.jsxs("div", {
              className: "hidden items-center gap-3 lg:flex",
              children: [
                A.jsx(_t, {
                  target: { kind: "route", path: "contact" },
                  className: `${jh} rounded-full px-4 py-2 hover:bg-white/5`,
                  children: A.jsx("span", { "data-editable": !0, children: "Sign In" }),
                }),
                A.jsx(_t, {
                  target: { kind: "route", path: "services" },
                  children: A.jsx("button", {
                    type: "button",
                    className:
                      "rounded-full bg-datacore-purple px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90",
                    children: A.jsx("span", { "data-editable": !0, children: "Get Started" }),
                  }),
                }),
              ],
            }),
            A.jsx("button", {
              type: "button",
              className:
                "flex h-10 w-10 items-center justify-center rounded-xl text-white lg:hidden",
              onClick: () => i(!0),
              "aria-label": "Open menu",
              children: A.jsx(aw, { className: "h-5 w-5" }),
            }),
          ],
        }),
      }),
      A.jsx(Fy, {
        children:
          n &&
          A.jsxs(A.Fragment, {
            children: [
              A.jsx(mn.button, {
                type: "button",
                className: "fixed inset-0 z-40 bg-datacore-dark/60 backdrop-blur-sm lg:hidden",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: s,
                "aria-label": "Close menu backdrop",
              }),
              A.jsxs(mn.aside, {
                className:
                  "glass-panel fixed right-0 top-0 z-50 flex h-[100dvh] w-[min(88vw,360px)] flex-col lg:hidden",
                initial: { x: "100%" },
                animate: { x: 0 },
                exit: { x: "100%" },
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                children: [
                  A.jsxs(mn.div, {
                    className:
                      "flex items-center justify-between border-b border-white/10 px-5 py-4",
                    children: [
                      A.jsx(Nh, { className: "h-8 w-8" }),
                      A.jsx("button", {
                        type: "button",
                        onClick: s,
                        "aria-label": "Close menu",
                        children: A.jsx(uw, { className: "h-5 w-5 text-white" }),
                      }),
                    ],
                  }),
                  A.jsx("nav", {
                    className: "flex flex-1 flex-col gap-1 px-5 py-6",
                    children: _h.map((l, c) =>
                      A.jsx(
                        mn.div,
                        {
                          initial: { opacity: 0, x: 16 },
                          animate: { opacity: 1, x: 0 },
                          transition: { delay: 0.12 + c * 0.06 },
                          children: A.jsx(_t, {
                            target: { kind: "route", path: l.route },
                            className: "block py-3 font-cabin text-base font-medium text-white/90",
                            onClick: s,
                            children: A.jsx("span", { "data-editable": !0, children: l.label }),
                          }),
                        },
                        l.route,
                      ),
                    ),
                  }),
                  A.jsxs("div", {
                    className: "flex flex-col gap-3 border-t border-white/10 p-5",
                    children: [
                      A.jsx(_t, {
                        target: { kind: "route", path: "contact" },
                        className:
                          "glass-pill rounded-full px-5 py-3 text-center text-sm font-medium text-white",
                        onClick: s,
                        children: A.jsx("span", { "data-editable": !0, children: "Sign In" }),
                      }),
                      A.jsx(_t, {
                        target: { kind: "route", path: "services" },
                        onClick: s,
                        children: A.jsx("button", {
                          type: "button",
                          className:
                            "w-full rounded-full bg-datacore-purple px-5 py-3 text-sm font-semibold text-white",
                          children: A.jsx("span", { "data-editable": !0, children: "Get Started" }),
                        }),
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
const fw =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4",
  Is = {
    hidden: { opacity: 0, y: 24 },
    visible: (n) => ({
      opacity: 1,
      y: 0,
      transition: { delay: n * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    }),
  };
function dw() {
  return A.jsxs("section", {
    id: "hero",
    className: "relative h-screen min-h-[640px] w-full overflow-hidden",
    children: [
      A.jsx("video", {
        className: "absolute inset-0 h-full w-full object-cover",
        src: fw,
        autoPlay: !0,
        loop: !0,
        muted: !0,
        playsInline: !0,
        "aria-hidden": !0,
      }),
      A.jsx("div", {
        className: "relative z-10 flex h-full items-center px-4 sm:px-6 md:px-10",
        children: A.jsxs("div", {
          className: "mx-auto w-full max-w-3xl",
          children: [
            A.jsxs(mn.div, {
              custom: 0,
              variants: Is,
              initial: "hidden",
              animate: "visible",
              className:
                "glass-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 sm:px-5 sm:py-2.5",
              children: [
                A.jsx("span", {
                  className:
                    "rounded-full bg-datacore-purple px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white sm:text-xs",
                  children: "New",
                }),
                A.jsx("span", {
                  className: "font-cabin text-xs text-white/90 sm:text-sm",
                  "data-editable": !0,
                  children: "Say Hello to Datacore v3.2",
                }),
              ],
            }),
            A.jsxs(mn.h1, {
              custom: 1,
              variants: Is,
              initial: "hidden",
              animate: "visible",
              className:
                "hero-text-shadow text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl",
              "data-editable": !0,
              children: [
                "Hotel booking built for modern teams",
                " ",
                A.jsx("span", { className: "font-serif italic font-normal", children: "and" }),
                " unforgettable stays",
              ],
            }),
            A.jsx(mn.p, {
              custom: 2,
              variants: Is,
              initial: "hidden",
              animate: "visible",
              className:
                "hero-text-shadow mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg",
              "data-editable": !0,
              children:
                "Streamline reservations, unlock revenue insights, and deliver five-star guest experiences from one purple-powered platform.",
            }),
            A.jsxs(mn.div, {
              custom: 3,
              variants: Is,
              initial: "hidden",
              animate: "visible",
              className: "mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4",
              children: [
                A.jsx(_t, {
                  target: { kind: "route", path: "contact" },
                  children: A.jsx("button", {
                    type: "button",
                    className:
                      "rounded-full bg-datacore-purple px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-datacore-purple/30 transition-opacity hover:opacity-90 sm:px-8 sm:py-3.5",
                    children: A.jsx("span", { "data-editable": !0, children: "Book a Free Demo" }),
                  }),
                }),
                A.jsx(_t, {
                  target: { kind: "route", path: "services" },
                  children: A.jsx("button", {
                    type: "button",
                    className:
                      "glass-pill rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-8 sm:py-3.5",
                    children: A.jsx("span", { "data-editable": !0, children: "Get Started Now" }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function zs({ children: n }) {
  const [i, s] = z.useState(!1);
  return A.jsxs("div", {
    className: "min-h-screen bg-datacore-dark text-white",
    children: [A.jsx(cw, { menuOpen: i, setMenuOpen: s }), n],
  });
}
function hw() {
  return A.jsxs(A.Fragment, {
    children: [A.jsx(dw, {}), A.jsx(Ly, { brand: "Datacore", theme: "dark" })],
  });
}
function pw() {
  return (
    z.useEffect(() => {
      Ih();
    }, []),
    A.jsx(Dy, {
      routes: {
        "": A.jsx(zs, { children: A.jsx(hw, {}) }),
        services: A.jsx(zs, {
          children: A.jsx("div", {
            className: "pt-24",
            children: A.jsx(ta, {
              title: "Services",
              description: "Reservation automation, revenue analytics, and guest experience tools.",
              theme: "dark",
            }),
          }),
        }),
        reviews: A.jsx(zs, {
          children: A.jsx("div", {
            className: "pt-24",
            children: A.jsx(ta, {
              title: "Reviews",
              description:
                "See how hotel teams rate Datacore across operations and guest satisfaction.",
              theme: "dark",
            }),
          }),
        }),
        contact: A.jsx(zs, {
          children: A.jsx("div", {
            className: "pt-24",
            children: A.jsx(ta, {
              title: "Contact us",
              description: "Book a demo or talk with our hospitality specialists.",
              theme: "dark",
            }),
          }),
        }),
      },
    })
  );
}
Sy.createRoot(document.getElementById("root")).render(
  A.jsx(z.StrictMode, { children: A.jsx(pw, {}) }),
);
