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
var Xl = { exports: {} },
  si = {},
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
 */ var dd;
function my() {
  if (dd) return se;
  dd = 1;
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
    _ = Object.assign,
    A = {};
  function L(P, D, re) {
    ((this.props = P), (this.context = D), (this.refs = A), (this.updater = re || R));
  }
  ((L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (P, D) {
      if (typeof P != "object" && typeof P != "function" && P != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, P, D, "setState");
    }),
    (L.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, "forceUpdate");
    }));
  function O() {}
  O.prototype = L.prototype;
  function W(P, D, re) {
    ((this.props = P), (this.context = D), (this.refs = A), (this.updater = re || R));
  }
  var K = (W.prototype = new O());
  ((K.constructor = W), _(K, L.prototype), (K.isPureReactComponent = !0));
  var Y = Array.isArray,
    B = Object.prototype.hasOwnProperty,
    ee = { current: null },
    le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(P, D, re) {
    var oe,
      ue = {},
      ce = null,
      pe = null;
    if (D != null)
      for (oe in (D.ref !== void 0 && (pe = D.ref), D.key !== void 0 && (ce = "" + D.key), D))
        B.call(D, oe) && !le.hasOwnProperty(oe) && (ue[oe] = D[oe]);
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
  function ge(P, D) {
    return { $$typeof: n, type: P.type, key: D, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function Ce(P) {
    return typeof P == "object" && P !== null && P.$$typeof === n;
  }
  function Xe(P) {
    var D = { "=": "=0", ":": "=2" };
    return (
      "$" +
      P.replace(/[=:]/g, function (re) {
        return D[re];
      })
    );
  }
  var it = /\/+/g;
  function Ge(P, D) {
    return typeof P == "object" && P !== null && P.key != null ? Xe("" + P.key) : D.toString(36);
  }
  function qe(P, D, re, oe, ue) {
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
            qe(ue, D, re, "", function (st) {
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
            D.push(ue)),
        1
      );
    if (((pe = 0), (oe = oe === "" ? "." : oe + ":"), Y(P)))
      for (var de = 0; de < P.length; de++) {
        ce = P[de];
        var we = oe + Ge(ce, de);
        pe += qe(ce, D, re, we, ue);
      }
    else if (((we = k(P)), typeof we == "function"))
      for (P = we.call(P), de = 0; !(ce = P.next()).done;)
        ((ce = ce.value), (we = oe + Ge(ce, de++)), (pe += qe(ce, D, re, we, ue)));
    else if (ce === "object")
      throw (
        (D = String(P)),
        Error(
          "Objects are not valid as a React child (found: " +
            (D === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : D) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return pe;
  }
  function wt(P, D, re) {
    if (P == null) return P;
    var oe = [],
      ue = 0;
    return (
      qe(P, oe, "", "", function (ce) {
        return D.call(re, ce, ue++);
      }),
      oe
    );
  }
  function Qe(P) {
    if (P._status === -1) {
      var D = P._result;
      ((D = D()),
        D.then(
          function (re) {
            (P._status === 0 || P._status === -1) && ((P._status = 1), (P._result = re));
          },
          function (re) {
            (P._status === 0 || P._status === -1) && ((P._status = 2), (P._result = re));
          },
        ),
        P._status === -1 && ((P._status = 0), (P._result = D)));
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var ie = { current: null },
    I = { transition: null },
    q = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: I, ReactCurrentOwner: ee };
  function $() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (se.Children = {
      map: wt,
      forEach: function (P, D, re) {
        wt(
          P,
          function () {
            D.apply(this, arguments);
          },
          re,
        );
      },
      count: function (P) {
        var D = 0;
        return (
          wt(P, function () {
            D++;
          }),
          D
        );
      },
      toArray: function (P) {
        return (
          wt(P, function (D) {
            return D;
          }) || []
        );
      },
      only: function (P) {
        if (!Ce(P))
          throw Error("React.Children.only expected to receive a single React element child.");
        return P;
      },
    }),
    (se.Component = L),
    (se.Fragment = s),
    (se.Profiler = c),
    (se.PureComponent = W),
    (se.StrictMode = l),
    (se.Suspense = m),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q),
    (se.act = $),
    (se.cloneElement = function (P, D, re) {
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
      if (D != null) {
        if (
          (D.ref !== void 0 && ((ce = D.ref), (pe = ee.current)),
          D.key !== void 0 && (ue = "" + D.key),
          P.type && P.type.defaultProps)
        )
          var de = P.type.defaultProps;
        for (we in D)
          B.call(D, we) &&
            !le.hasOwnProperty(we) &&
            (oe[we] = D[we] === void 0 && de !== void 0 ? de[we] : D[we]);
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
    (se.createElement = X),
    (se.createFactory = function (P) {
      var D = X.bind(null, P);
      return ((D.type = P), D);
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
    (se.memo = function (P, D) {
      return { $$typeof: g, type: P, compare: D === void 0 ? null : D };
    }),
    (se.startTransition = function (P) {
      var D = I.transition;
      I.transition = {};
      try {
        P();
      } finally {
        I.transition = D;
      }
    }),
    (se.unstable_act = $),
    (se.useCallback = function (P, D) {
      return ie.current.useCallback(P, D);
    }),
    (se.useContext = function (P) {
      return ie.current.useContext(P);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (P) {
      return ie.current.useDeferredValue(P);
    }),
    (se.useEffect = function (P, D) {
      return ie.current.useEffect(P, D);
    }),
    (se.useId = function () {
      return ie.current.useId();
    }),
    (se.useImperativeHandle = function (P, D, re) {
      return ie.current.useImperativeHandle(P, D, re);
    }),
    (se.useInsertionEffect = function (P, D) {
      return ie.current.useInsertionEffect(P, D);
    }),
    (se.useLayoutEffect = function (P, D) {
      return ie.current.useLayoutEffect(P, D);
    }),
    (se.useMemo = function (P, D) {
      return ie.current.useMemo(P, D);
    }),
    (se.useReducer = function (P, D, re) {
      return ie.current.useReducer(P, D, re);
    }),
    (se.useRef = function (P) {
      return ie.current.useRef(P);
    }),
    (se.useState = function (P) {
      return ie.current.useState(P);
    }),
    (se.useSyncExternalStore = function (P, D, re) {
      return ie.current.useSyncExternalStore(P, D, re);
    }),
    (se.useTransition = function () {
      return ie.current.useTransition();
    }),
    (se.version = "18.3.1"),
    se
  );
}
var hd;
function La() {
  return (hd || ((hd = 1), (ql.exports = my())), ql.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd;
function gy() {
  if (pd) return si;
  pd = 1;
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
  return ((si.Fragment = s), (si.jsx = f), (si.jsxs = f), si);
}
var md;
function yy() {
  return (md || ((md = 1), (Xl.exports = gy())), Xl.exports);
}
var T = yy(),
  z = La(),
  Ls = {},
  Zl = { exports: {} },
  rt = {},
  Jl = { exports: {} },
  ea = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gd;
function vy() {
  return (
    gd ||
      ((gd = 1),
      (function (n) {
        function i(I, q) {
          var $ = I.length;
          I.push(q);
          e: for (; 0 < $;) {
            var P = ($ - 1) >>> 1,
              D = I[P];
            if (0 < c(D, q)) ((I[P] = q), (I[$] = D), ($ = P));
            else break e;
          }
        }
        function s(I) {
          return I.length === 0 ? null : I[0];
        }
        function l(I) {
          if (I.length === 0) return null;
          var q = I[0],
            $ = I.pop();
          if ($ !== q) {
            I[0] = $;
            e: for (var P = 0, D = I.length, re = D >>> 1; P < re;) {
              var oe = 2 * (P + 1) - 1,
                ue = I[oe],
                ce = oe + 1,
                pe = I[ce];
              if (0 > c(ue, $))
                ce < D && 0 > c(pe, ue)
                  ? ((I[P] = pe), (I[ce] = $), (P = ce))
                  : ((I[P] = ue), (I[oe] = $), (P = oe));
              else if (ce < D && 0 > c(pe, $)) ((I[P] = pe), (I[ce] = $), (P = ce));
              else break e;
            }
          }
          return q;
        }
        function c(I, q) {
          var $ = I.sortIndex - q.sortIndex;
          return $ !== 0 ? $ : I.id - q.id;
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
          _ = !1,
          A = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
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
          if (((A = !1), K(I), !_))
            if (s(m) !== null) ((_ = !0), Qe(B));
            else {
              var q = s(g);
              q !== null && ie(Y, q.startTime - I);
            }
        }
        function B(I, q) {
          ((_ = !1), A && ((A = !1), O(X), (X = -1)), (R = !0));
          var $ = k;
          try {
            for (K(q), x = s(m); x !== null && (!(x.expirationTime > q) || (I && !Xe()));) {
              var P = x.callback;
              if (typeof P == "function") {
                ((x.callback = null), (k = x.priorityLevel));
                var D = P(x.expirationTime <= q);
                ((q = n.unstable_now()),
                  typeof D == "function" ? (x.callback = D) : x === s(m) && l(m),
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
            ((x = null), (k = $), (R = !1));
          }
        }
        var ee = !1,
          le = null,
          X = -1,
          ge = 5,
          Ce = -1;
        function Xe() {
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
        if (typeof W == "function")
          Ge = function () {
            W(it);
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
            L(it, 0);
          };
        function Qe(I) {
          ((le = I), ee || ((ee = !0), Ge()));
        }
        function ie(I, q) {
          X = L(function () {
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
            _ || R || ((_ = !0), Qe(B));
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
            var $ = k;
            k = q;
            try {
              return I();
            } finally {
              k = $;
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
            var $ = k;
            k = I;
            try {
              return q();
            } finally {
              k = $;
            }
          }),
          (n.unstable_scheduleCallback = function (I, q, $) {
            var P = n.unstable_now();
            switch (
              (typeof $ == "object" && $ !== null
                ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? P + $ : P))
                : ($ = P),
              I)
            ) {
              case 1:
                var D = -1;
                break;
              case 2:
                D = 250;
                break;
              case 5:
                D = 1073741823;
                break;
              case 4:
                D = 1e4;
                break;
              default:
                D = 5e3;
            }
            return (
              (D = $ + D),
              (I = {
                id: y++,
                callback: q,
                priorityLevel: I,
                startTime: $,
                expirationTime: D,
                sortIndex: -1,
              }),
              $ > P
                ? ((I.sortIndex = $),
                  i(g, I),
                  s(m) === null && I === s(g) && (A ? (O(X), (X = -1)) : (A = !0), ie(Y, $ - P)))
                : ((I.sortIndex = D), i(m, I), _ || R || ((_ = !0), Qe(B))),
              I
            );
          }),
          (n.unstable_shouldYield = Xe),
          (n.unstable_wrapCallback = function (I) {
            var q = k;
            return function () {
              var $ = k;
              k = q;
              try {
                return I.apply(this, arguments);
              } finally {
                k = $;
              }
            };
          }));
      })(ea)),
    ea
  );
}
var yd;
function xy() {
  return (yd || ((yd = 1), (Jl.exports = vy())), Jl.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd;
function wy() {
  if (vd) return rt;
  vd = 1;
  var n = La(),
    i = xy();
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
  function A(e, t, r, o, a, u, h) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = h));
  }
  var L = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      L[e] = new A(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      L[t] = new A(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      L[e] = new A(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        L[e] = new A(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        L[e] = new A(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      L[e] = new A(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      L[e] = new A(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      L[e] = new A(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      L[e] = new A(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var O = /[\-:]([a-z])/g;
  function W(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(O, W);
      L[t] = new A(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(O, W);
        L[t] = new A(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(O, W);
      L[t] = new A(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      L[e] = new A(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (L.xlinkHref = new A("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      L[e] = new A(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function K(e, t, r, o) {
    var a = L.hasOwnProperty(t) ? L[t] : null;
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
  var Y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    B = Symbol.for("react.element"),
    ee = Symbol.for("react.portal"),
    le = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    Ce = Symbol.for("react.provider"),
    Xe = Symbol.for("react.context"),
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
  var $ = Object.assign,
    P;
  function D(e) {
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
          } catch (N) {
            var o = N;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (N) {
            o = N;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (N) {
          o = N;
        }
        e();
      }
    } catch (N) {
      if (N && o && typeof N.stack == "string") {
        for (
          var a = N.stack.split(`
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
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return D(e.type);
      case 16:
        return D("Lazy");
      case 13:
        return D("Suspense");
      case 19:
        return D("SuspenseList");
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
      case X:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xe:
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
        return t === X ? "StrictMode" : "Mode";
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
  function Pi(e) {
    e._valueTracker || (e._valueTracker = st(e));
  }
  function yu(e) {
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
  function Ti(e) {
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
  function vu(e, t) {
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
  function xu(e, t) {
    ((t = t.checked), t != null && K(e, "checked", t, !1));
  }
  function ro(e, t) {
    xu(e, t);
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
  function io(e, t, r) {
    (t !== "number" || Ti(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var wr = Array.isArray;
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
  function Su(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(s(92));
        if (wr(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        t = r;
      }
      (t == null && (t = ""), (r = t));
    }
    e._wrapperState = { initialValue: de(r) };
  }
  function ku(e, t) {
    var r = de(t.value),
      o = de(t.defaultValue);
    (r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = "" + o));
  }
  function Pu(e) {
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
  function oo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Tu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ci,
    Cu = (function (e) {
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
          Ci = Ci || document.createElement("div"),
            Ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ci.firstChild;
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
    xm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(kr).forEach(function (e) {
    xm.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kr[t] = kr[e]));
    });
  });
  function Eu(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (kr.hasOwnProperty(e) && kr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Nu(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf("--") === 0,
          a = Eu(r, t[r], o);
        (r === "float" && (r = "cssFloat"), o ? e.setProperty(r, a) : (e[r] = a));
      }
  }
  var wm = $(
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
      if (wm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Ru(e) {
    if ((e = Hr(e))) {
      if (typeof fo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = bi(t)), fo(e.stateNode, e.type, t));
    }
  }
  function Au(e) {
    Bn ? (Un ? Un.push(e) : (Un = [e])) : (Bn = e);
  }
  function Mu() {
    if (Bn) {
      var e = Bn,
        t = Un;
      if (((Un = Bn = null), Ru(e), t)) for (e = 0; e < t.length; e++) Ru(t[e]);
    }
  }
  function Du(e, t) {
    return e(t);
  }
  function ju() {}
  var ho = !1;
  function Lu(e, t, r) {
    if (ho) return e(t, r);
    ho = !0;
    try {
      return Du(e, t, r);
    } finally {
      ((ho = !1), (Bn !== null || Un !== null) && (ju(), Mu()));
    }
  }
  function Pr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = bi(r);
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
      var Tr = {};
      (Object.defineProperty(Tr, "passive", {
        get: function () {
          po = !0;
        },
      }),
        window.addEventListener("test", Tr, Tr),
        window.removeEventListener("test", Tr, Tr));
    } catch {
      po = !1;
    }
  function Sm(e, t, r, o, a, u, h, v, w) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, N);
    } catch (j) {
      this.onError(j);
    }
  }
  var Cr = !1,
    Ei = null,
    Ni = !1,
    mo = null,
    km = {
      onError: function (e) {
        ((Cr = !0), (Ei = e));
      },
    };
  function Pm(e, t, r, o, a, u, h, v, w) {
    ((Cr = !1), (Ei = null), Sm.apply(km, arguments));
  }
  function Tm(e, t, r, o, a, u, h, v, w) {
    if ((Pm.apply(this, arguments), Cr)) {
      if (Cr) {
        var N = Ei;
        ((Cr = !1), (Ei = null));
      } else throw Error(s(198));
      Ni || ((Ni = !0), (mo = N));
    }
  }
  function wn(e) {
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
  function Vu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function _u(e) {
    if (wn(e) !== e) throw Error(s(188));
  }
  function Cm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = wn(e)), t === null)) throw Error(s(188));
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
  function Fu(e) {
    return ((e = Cm(e)), e !== null ? Ou(e) : null);
  }
  function Ou(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Ou(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Iu = i.unstable_scheduleCallback,
    zu = i.unstable_cancelCallback,
    Em = i.unstable_shouldYield,
    Nm = i.unstable_requestPaint,
    Re = i.unstable_now,
    Rm = i.unstable_getCurrentPriorityLevel,
    go = i.unstable_ImmediatePriority,
    Bu = i.unstable_UserBlockingPriority,
    Ri = i.unstable_NormalPriority,
    Am = i.unstable_LowPriority,
    Uu = i.unstable_IdlePriority,
    Ai = null,
    Mt = null;
  function Mm(e) {
    if (Mt && typeof Mt.onCommitFiberRoot == "function")
      try {
        Mt.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : Lm,
    Dm = Math.log,
    jm = Math.LN2;
  function Lm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Dm(e) / jm) | 0)) | 0);
  }
  var Mi = 64,
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
  function ji(e, t) {
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
  function _m(e, t) {
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
  function Wu() {
    var e = Mi;
    return ((Mi <<= 1), (Mi & 4194240) === 0 && (Mi = 64), e);
  }
  function vo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Nr(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - St(t)),
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
  function $u(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Hu,
    wo,
    Ku,
    Gu,
    Qu,
    So = !1,
    Li = [],
    bt = null,
    Yt = null,
    Xt = null,
    Rr = new Map(),
    Ar = new Map(),
    qt = [],
    Om =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function bu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        bt = null;
        break;
      case "dragenter":
      case "dragleave":
        Yt = null;
        break;
      case "mouseover":
      case "mouseout":
        Xt = null;
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
  function Mr(e, t, r, o, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = Hr(t)), t !== null && wo(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function Im(e, t, r, o, a) {
    switch (t) {
      case "focusin":
        return ((bt = Mr(bt, e, t, r, o, a)), !0);
      case "dragenter":
        return ((Yt = Mr(Yt, e, t, r, o, a)), !0);
      case "mouseover":
        return ((Xt = Mr(Xt, e, t, r, o, a)), !0);
      case "pointerover":
        var u = a.pointerId;
        return (Rr.set(u, Mr(Rr.get(u) || null, e, t, r, o, a)), !0);
      case "gotpointercapture":
        return ((u = a.pointerId), Ar.set(u, Mr(Ar.get(u) || null, e, t, r, o, a)), !0);
    }
    return !1;
  }
  function Yu(e) {
    var t = Sn(e.target);
    if (t !== null) {
      var r = wn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Vu(r)), t !== null)) {
            ((e.blockedOn = t),
              Qu(e.priority, function () {
                Ku(r);
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
  function Vi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var r = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((uo = o), r.target.dispatchEvent(o), (uo = null));
      } else return ((t = Hr(r)), t !== null && wo(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Xu(e, t, r) {
    Vi(e) && r.delete(t);
  }
  function zm() {
    ((So = !1),
      bt !== null && Vi(bt) && (bt = null),
      Yt !== null && Vi(Yt) && (Yt = null),
      Xt !== null && Vi(Xt) && (Xt = null),
      Rr.forEach(Xu),
      Ar.forEach(Xu));
  }
  function Dr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      So || ((So = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, zm)));
  }
  function jr(e) {
    function t(a) {
      return Dr(a, e);
    }
    if (0 < Li.length) {
      Dr(Li[0], e);
      for (var r = 1; r < Li.length; r++) {
        var o = Li[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      bt !== null && Dr(bt, e),
        Yt !== null && Dr(Yt, e),
        Xt !== null && Dr(Xt, e),
        Rr.forEach(t),
        Ar.forEach(t),
        r = 0;
      r < qt.length;
      r++
    )
      ((o = qt[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < qt.length && ((r = qt[0]), r.blockedOn === null);)
      (Yu(r), r.blockedOn === null && qt.shift());
  }
  var Wn = Y.ReactCurrentBatchConfig,
    _i = !0;
  function Bm(e, t, r, o) {
    var a = he,
      u = Wn.transition;
    Wn.transition = null;
    try {
      ((he = 1), ko(e, t, r, o));
    } finally {
      ((he = a), (Wn.transition = u));
    }
  }
  function Um(e, t, r, o) {
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
    if (_i) {
      var a = Po(e, t, r, o);
      if (a === null) (Bo(e, t, o, Fi, r), bu(e, o));
      else if (Im(a, e, t, r, o)) o.stopPropagation();
      else if ((bu(e, o), t & 4 && -1 < Om.indexOf(e))) {
        for (; a !== null;) {
          var u = Hr(a);
          if (
            (u !== null && Hu(u), (u = Po(e, t, r, o)), u === null && Bo(e, t, o, Fi, r), u === a)
          )
            break;
          a = u;
        }
        a !== null && o.stopPropagation();
      } else Bo(e, t, o, null, r);
    }
  }
  var Fi = null;
  function Po(e, t, r, o) {
    if (((Fi = null), (e = co(o)), (e = Sn(e)), e !== null))
      if (((t = wn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Vu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Fi = e), null);
  }
  function qu(e) {
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
        switch (Rm()) {
          case go:
            return 1;
          case Bu:
            return 4;
          case Ri:
          case Am:
            return 16;
          case Uu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Zt = null,
    To = null,
    Oi = null;
  function Zu() {
    if (Oi) return Oi;
    var e,
      t = To,
      r = t.length,
      o,
      a = "value" in Zt ? Zt.value : Zt.textContent,
      u = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var h = r - e;
    for (o = 1; o <= h && t[r - o] === a[u - o]; o++);
    return (Oi = a.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Ii(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function zi() {
    return !0;
  }
  function Ju() {
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
          ? zi
          : Ju),
        (this.isPropagationStopped = Ju),
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
            (this.isDefaultPrevented = zi));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = zi));
        },
        persist: function () {},
        isPersistent: zi,
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
    Lr = $({}, $n, { view: 0, detail: 0 }),
    Wm = ot(Lr),
    Eo,
    No,
    Vr,
    Bi = $({}, Lr, {
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
      getModifierState: Ao,
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
          : (e !== Vr &&
              (Vr && e.type === "mousemove"
                ? ((Eo = e.screenX - Vr.screenX), (No = e.screenY - Vr.screenY))
                : (No = Eo = 0),
              (Vr = e)),
            Eo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : No;
      },
    }),
    ec = ot(Bi),
    $m = $({}, Bi, { dataTransfer: 0 }),
    Hm = ot($m),
    Km = $({}, Lr, { relatedTarget: 0 }),
    Ro = ot(Km),
    Gm = $({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qm = ot(Gm),
    bm = $({}, $n, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ym = ot(bm),
    Xm = $({}, $n, { data: 0 }),
    tc = ot(Xm),
    qm = {
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
    Jm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function eg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Jm[e]) ? !!t[e] : !1;
  }
  function Ao() {
    return eg;
  }
  var tg = $({}, Lr, {
      key: function (e) {
        if (e.key) {
          var t = qm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ii(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
      getModifierState: Ao,
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
    ng = ot(tg),
    rg = $({}, Bi, {
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
    nc = ot(rg),
    ig = $({}, Lr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ao,
    }),
    sg = ot(ig),
    og = $({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lg = ot(og),
    ag = $({}, Bi, {
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
    ug = ot(ag),
    cg = [9, 13, 27, 32],
    Mo = p && "CompositionEvent" in window,
    _r = null;
  p && "documentMode" in document && (_r = document.documentMode);
  var fg = p && "TextEvent" in window && !_r,
    rc = p && (!Mo || (_r && 8 < _r && 11 >= _r)),
    ic = " ",
    sc = !1;
  function oc(e, t) {
    switch (e) {
      case "keyup":
        return cg.indexOf(t.keyCode) !== -1;
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
  function lc(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var Hn = !1;
  function dg(e, t) {
    switch (e) {
      case "compositionend":
        return lc(t);
      case "keypress":
        return t.which !== 32 ? null : ((sc = !0), ic);
      case "textInput":
        return ((e = t.data), e === ic && sc ? null : e);
      default:
        return null;
    }
  }
  function hg(e, t) {
    if (Hn)
      return e === "compositionend" || (!Mo && oc(e, t))
        ? ((e = Zu()), (Oi = To = Zt = null), (Hn = !1), e)
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
        return rc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var pg = {
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
  function ac(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!pg[e.type] : t === "textarea";
  }
  function uc(e, t, r, o) {
    (Au(o),
      (t = Ki(t, "onChange")),
      0 < t.length &&
        ((r = new Co("onChange", "change", null, r, o)), e.push({ event: r, listeners: t })));
  }
  var Fr = null,
    Or = null;
  function mg(e) {
    Nc(e, 0);
  }
  function Ui(e) {
    var t = Yn(e);
    if (yu(t)) return e;
  }
  function gg(e, t) {
    if (e === "change") return t;
  }
  var cc = !1;
  if (p) {
    var Do;
    if (p) {
      var jo = "oninput" in document;
      if (!jo) {
        var fc = document.createElement("div");
        (fc.setAttribute("oninput", "return;"), (jo = typeof fc.oninput == "function"));
      }
      Do = jo;
    } else Do = !1;
    cc = Do && (!document.documentMode || 9 < document.documentMode);
  }
  function dc() {
    Fr && (Fr.detachEvent("onpropertychange", hc), (Or = Fr = null));
  }
  function hc(e) {
    if (e.propertyName === "value" && Ui(Or)) {
      var t = [];
      (uc(t, Or, e, co(e)), Lu(mg, t));
    }
  }
  function yg(e, t, r) {
    e === "focusin"
      ? (dc(), (Fr = t), (Or = r), Fr.attachEvent("onpropertychange", hc))
      : e === "focusout" && dc();
  }
  function vg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ui(Or);
  }
  function xg(e, t) {
    if (e === "click") return Ui(t);
  }
  function wg(e, t) {
    if (e === "input" || e === "change") return Ui(t);
  }
  function Sg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var kt = typeof Object.is == "function" ? Object.is : Sg;
  function Ir(e, t) {
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
  function pc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function mc(e, t) {
    var r = pc(e);
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
      r = pc(r);
    }
  }
  function gc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? gc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function yc() {
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
  function Lo(e) {
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
  function kg(e) {
    var t = yc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && gc(r.ownerDocument.documentElement, r)) {
      if (o !== null && Lo(r)) {
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
            (a = mc(r, u)));
          var h = mc(r, o);
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
  var Pg = p && "documentMode" in document && 11 >= document.documentMode,
    Kn = null,
    Vo = null,
    zr = null,
    _o = !1;
  function vc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    _o ||
      Kn == null ||
      Kn !== Ti(o) ||
      ((o = Kn),
      "selectionStart" in o && Lo(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (zr && Ir(zr, o)) ||
        ((zr = o),
        (o = Ki(Vo, "onSelect")),
        0 < o.length &&
          ((t = new Co("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Kn))));
  }
  function Wi(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var Gn = {
      animationend: Wi("Animation", "AnimationEnd"),
      animationiteration: Wi("Animation", "AnimationIteration"),
      animationstart: Wi("Animation", "AnimationStart"),
      transitionend: Wi("Transition", "TransitionEnd"),
    },
    Fo = {},
    xc = {};
  p &&
    ((xc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Gn.animationend.animation,
      delete Gn.animationiteration.animation,
      delete Gn.animationstart.animation),
    "TransitionEvent" in window || delete Gn.transitionend.transition);
  function $i(e) {
    if (Fo[e]) return Fo[e];
    if (!Gn[e]) return e;
    var t = Gn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in xc) return (Fo[e] = t[r]);
    return e;
  }
  var wc = $i("animationend"),
    Sc = $i("animationiteration"),
    kc = $i("animationstart"),
    Pc = $i("transitionend"),
    Tc = new Map(),
    Cc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Jt(e, t) {
    (Tc.set(e, t), d(t, [e]));
  }
  for (var Oo = 0; Oo < Cc.length; Oo++) {
    var Io = Cc[Oo],
      Tg = Io.toLowerCase(),
      Cg = Io[0].toUpperCase() + Io.slice(1);
    Jt(Tg, "on" + Cg);
  }
  (Jt(wc, "onAnimationEnd"),
    Jt(Sc, "onAnimationIteration"),
    Jt(kc, "onAnimationStart"),
    Jt("dblclick", "onDoubleClick"),
    Jt("focusin", "onFocus"),
    Jt("focusout", "onBlur"),
    Jt(Pc, "onTransitionEnd"),
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
    Eg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));
  function Ec(e, t, r) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = r), Tm(o, t, void 0, e), (e.currentTarget = null));
  }
  function Nc(e, t) {
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
              N = v.currentTarget;
            if (((v = v.listener), w !== u && a.isPropagationStopped())) break e;
            (Ec(a, v, N), (u = w));
          }
        else
          for (h = 0; h < o.length; h++) {
            if (
              ((v = o[h]),
              (w = v.instance),
              (N = v.currentTarget),
              (v = v.listener),
              w !== u && a.isPropagationStopped())
            )
              break e;
            (Ec(a, v, N), (u = w));
          }
      }
    }
    if (Ni) throw ((e = mo), (Ni = !1), (mo = null), e);
  }
  function ye(e, t) {
    var r = t[Go];
    r === void 0 && (r = t[Go] = new Set());
    var o = e + "__bubble";
    r.has(o) || (Rc(t, e, 2, !1), r.add(o));
  }
  function zo(e, t, r) {
    var o = 0;
    (t && (o |= 4), Rc(r, e, o, t));
  }
  var Hi = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[Hi]) {
      ((e[Hi] = !0),
        l.forEach(function (r) {
          r !== "selectionchange" && (Eg.has(r) || zo(r, !1, e), zo(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hi] || ((t[Hi] = !0), zo("selectionchange", !1, t));
    }
  }
  function Rc(e, t, r, o) {
    switch (qu(t)) {
      case 1:
        var a = Bm;
        break;
      case 4:
        a = Um;
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
            if (((h = Sn(v)), h === null)) return;
            if (((w = h.tag), w === 5 || w === 6)) {
              o = u = h;
              continue e;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    Lu(function () {
      var N = u,
        j = co(r),
        V = [];
      e: {
        var M = Tc.get(e);
        if (M !== void 0) {
          var U = Co,
            G = e;
          switch (e) {
            case "keypress":
              if (Ii(r) === 0) break e;
            case "keydown":
            case "keyup":
              U = ng;
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
              U = ec;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Hm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = sg;
              break;
            case wc:
            case Sc:
            case kc:
              U = Qm;
              break;
            case Pc:
              U = lg;
              break;
            case "scroll":
              U = Wm;
              break;
            case "wheel":
              U = ug;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Ym;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = nc;
          }
          var Q = (t & 4) !== 0,
            Ae = !Q && e === "scroll",
            C = Q ? (M !== null ? M + "Capture" : null) : M;
          Q = [];
          for (var S = N, E; S !== null;) {
            E = S;
            var F = E.stateNode;
            if (
              (E.tag === 5 &&
                F !== null &&
                ((E = F), C !== null && ((F = Pr(S, C)), F != null && Q.push(Wr(S, F, E)))),
              Ae)
            )
              break;
            S = S.return;
          }
          0 < Q.length && ((M = new U(M, G, null, r, j)), V.push({ event: M, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((M = e === "mouseover" || e === "pointerover"),
            (U = e === "mouseout" || e === "pointerout"),
            M && r !== uo && (G = r.relatedTarget || r.fromElement) && (Sn(G) || G[Ot]))
          )
            break e;
          if (
            (U || M) &&
            ((M =
              j.window === j
                ? j
                : (M = j.ownerDocument)
                  ? M.defaultView || M.parentWindow
                  : window),
            U
              ? ((G = r.relatedTarget || r.toElement),
                (U = N),
                (G = G ? Sn(G) : null),
                G !== null &&
                  ((Ae = wn(G)), G !== Ae || (G.tag !== 5 && G.tag !== 6)) &&
                  (G = null))
              : ((U = null), (G = N)),
            U !== G)
          ) {
            if (
              ((Q = ec),
              (F = "onMouseLeave"),
              (C = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = nc), (F = "onPointerLeave"), (C = "onPointerEnter"), (S = "pointer")),
              (Ae = U == null ? M : Yn(U)),
              (E = G == null ? M : Yn(G)),
              (M = new Q(F, S + "leave", U, r, j)),
              (M.target = Ae),
              (M.relatedTarget = E),
              (F = null),
              Sn(j) === N &&
                ((Q = new Q(C, S + "enter", G, r, j)),
                (Q.target = E),
                (Q.relatedTarget = Ae),
                (F = Q)),
              (Ae = F),
              U && G)
            )
              t: {
                for (Q = U, C = G, S = 0, E = Q; E; E = Qn(E)) S++;
                for (E = 0, F = C; F; F = Qn(F)) E++;
                for (; 0 < S - E;) ((Q = Qn(Q)), S--);
                for (; 0 < E - S;) ((C = Qn(C)), E--);
                for (; S--;) {
                  if (Q === C || (C !== null && Q === C.alternate)) break t;
                  ((Q = Qn(Q)), (C = Qn(C)));
                }
                Q = null;
              }
            else Q = null;
            (U !== null && Ac(V, M, U, Q, !1), G !== null && Ae !== null && Ac(V, Ae, G, Q, !0));
          }
        }
        e: {
          if (
            ((M = N ? Yn(N) : window),
            (U = M.nodeName && M.nodeName.toLowerCase()),
            U === "select" || (U === "input" && M.type === "file"))
          )
            var b = gg;
          else if (ac(M))
            if (cc) b = wg;
            else {
              b = vg;
              var Z = yg;
            }
          else
            (U = M.nodeName) &&
              U.toLowerCase() === "input" &&
              (M.type === "checkbox" || M.type === "radio") &&
              (b = xg);
          if (b && (b = b(e, N))) {
            uc(V, b, r, j);
            break e;
          }
          (Z && Z(e, M, N),
            e === "focusout" &&
              (Z = M._wrapperState) &&
              Z.controlled &&
              M.type === "number" &&
              io(M, "number", M.value));
        }
        switch (((Z = N ? Yn(N) : window), e)) {
          case "focusin":
            (ac(Z) || Z.contentEditable === "true") && ((Kn = Z), (Vo = N), (zr = null));
            break;
          case "focusout":
            zr = Vo = Kn = null;
            break;
          case "mousedown":
            _o = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((_o = !1), vc(V, r, j));
            break;
          case "selectionchange":
            if (Pg) break;
          case "keydown":
          case "keyup":
            vc(V, r, j);
        }
        var J;
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
          Hn
            ? oc(e, r) && (ne = "onCompositionEnd")
            : e === "keydown" && r.keyCode === 229 && (ne = "onCompositionStart");
        (ne &&
          (rc &&
            r.locale !== "ko" &&
            (Hn || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && Hn && (J = Zu())
              : ((Zt = j), (To = "value" in Zt ? Zt.value : Zt.textContent), (Hn = !0))),
          (Z = Ki(N, ne)),
          0 < Z.length &&
            ((ne = new tc(ne, e, null, r, j)),
            V.push({ event: ne, listeners: Z }),
            J ? (ne.data = J) : ((J = lc(r)), J !== null && (ne.data = J)))),
          (J = fg ? dg(e, r) : hg(e, r)) &&
            ((N = Ki(N, "onBeforeInput")),
            0 < N.length &&
              ((j = new tc("onBeforeInput", "beforeinput", null, r, j)),
              V.push({ event: j, listeners: N }),
              (j.data = J))));
      }
      Nc(V, t);
    });
  }
  function Wr(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Ki(e, t) {
    for (var r = t + "Capture", o = []; e !== null;) {
      var a = e,
        u = a.stateNode;
      (a.tag === 5 &&
        u !== null &&
        ((a = u),
        (u = Pr(e, r)),
        u != null && o.unshift(Wr(e, u, a)),
        (u = Pr(e, t)),
        u != null && o.push(Wr(e, u, a))),
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
  function Ac(e, t, r, o, a) {
    for (var u = t._reactName, h = []; r !== null && r !== o;) {
      var v = r,
        w = v.alternate,
        N = v.stateNode;
      if (w !== null && w === o) break;
      (v.tag === 5 &&
        N !== null &&
        ((v = N),
        a
          ? ((w = Pr(r, u)), w != null && h.unshift(Wr(r, w, v)))
          : a || ((w = Pr(r, u)), w != null && h.push(Wr(r, w, v)))),
        (r = r.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Ng = /\r\n?/g,
    Rg = /\u0000|\uFFFD/g;
  function Mc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ng,
        `
`,
      )
      .replace(Rg, "");
  }
  function Gi(e, t, r) {
    if (((t = Mc(t)), Mc(e) !== t && r)) throw Error(s(425));
  }
  function Qi() {}
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
    Ag = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Dc = typeof Promise == "function" ? Promise : void 0,
    Mg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Dc < "u"
          ? function (e) {
              return Dc.resolve(null).then(e).catch(Dg);
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
            (e.removeChild(a), jr(t));
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = a;
    } while (r);
    jr(t);
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
  var bn = Math.random().toString(36).slice(2),
    Dt = "__reactFiber$" + bn,
    $r = "__reactProps$" + bn,
    Ot = "__reactContainer$" + bn,
    Go = "__reactEvents$" + bn,
    jg = "__reactListeners$" + bn,
    Lg = "__reactHandles$" + bn;
  function Sn(e) {
    var t = e[Dt];
    if (t) return t;
    for (var r = e.parentNode; r;) {
      if ((t = r[Ot] || r[Dt])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = jc(e); e !== null;) {
            if ((r = e[Dt])) return r;
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
      (e = e[Dt] || e[Ot]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function bi(e) {
    return e[$r] || null;
  }
  var Qo = [],
    Xn = -1;
  function tn(e) {
    return { current: e };
  }
  function ve(e) {
    0 > Xn || ((e.current = Qo[Xn]), (Qo[Xn] = null), Xn--);
  }
  function me(e, t) {
    (Xn++, (Qo[Xn] = e.current), (e.current = t));
  }
  var nn = {},
    Be = tn(nn),
    Ze = tn(!1),
    kn = nn;
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
  function Je(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Yi() {
    (ve(Ze), ve(Be));
  }
  function Lc(e, t, r) {
    if (Be.current !== nn) throw Error(s(168));
    (me(Be, t), me(Ze, r));
  }
  function Vc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function")) return r;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(s(108, pe(e) || "Unknown", a));
    return $({}, r, o);
  }
  function Xi(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
      (kn = Be.current),
      me(Be, e),
      me(Ze, Ze.current),
      !0
    );
  }
  function _c(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    (r
      ? ((e = Vc(e, t, kn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        ve(Ze),
        ve(Be),
        me(Be, e))
      : ve(Ze),
      me(Ze, r));
  }
  var It = null,
    qi = !1,
    bo = !1;
  function Fc(e) {
    It === null ? (It = [e]) : It.push(e);
  }
  function Vg(e) {
    ((qi = !0), Fc(e));
  }
  function rn() {
    if (!bo && It !== null) {
      bo = !0;
      var e = 0,
        t = he;
      try {
        var r = It;
        for (he = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((It = null), (qi = !1));
      } catch (a) {
        throw (It !== null && (It = It.slice(e + 1)), Iu(go, rn), a);
      } finally {
        ((he = t), (bo = !1));
      }
    }
    return null;
  }
  var Zn = [],
    Jn = 0,
    Zi = null,
    Ji = 0,
    dt = [],
    ht = 0,
    Pn = null,
    zt = 1,
    Bt = "";
  function Tn(e, t) {
    ((Zn[Jn++] = Ji), (Zn[Jn++] = Zi), (Zi = e), (Ji = t));
  }
  function Oc(e, t, r) {
    ((dt[ht++] = zt), (dt[ht++] = Bt), (dt[ht++] = Pn), (Pn = e));
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
    e.return !== null && (Tn(e, 1), Oc(e, 1, 0));
  }
  function Xo(e) {
    for (; e === Zi;) ((Zi = Zn[--Jn]), (Zn[Jn] = null), (Ji = Zn[--Jn]), (Zn[Jn] = null));
    for (; e === Pn;)
      ((Pn = dt[--ht]),
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
  function Ic(e, t) {
    var r = yt(5, null, null, 0);
    ((r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function zc(e, t) {
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
            ? ((r = Pn !== null ? { id: zt, overflow: Bt } : null),
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
  function Zo(e) {
    if (Se) {
      var t = at;
      if (t) {
        var r = t;
        if (!zc(e, t)) {
          if (qo(e)) throw Error(s(418));
          t = en(r.nextSibling);
          var o = lt;
          t && zc(e, t) ? Ic(o, r) : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (lt = e));
        }
      } else {
        if (qo(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (Se = !1), (lt = e));
      }
    }
  }
  function Bc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    lt = e;
  }
  function es(e) {
    if (e !== lt) return !1;
    if (!Se) return (Bc(e), (Se = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !$o(e.type, e.memoizedProps))),
      t && (t = at))
    ) {
      if (qo(e)) throw (Uc(), Error(s(418)));
      for (; t;) (Ic(e, t), (t = en(t.nextSibling)));
    }
    if ((Bc(e), e.tag === 13)) {
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
  function Uc() {
    for (var e = at; e;) e = en(e.nextSibling);
  }
  function er() {
    ((at = lt = null), (Se = !1));
  }
  function Jo(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  var _g = Y.ReactCurrentBatchConfig;
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
  function ts(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function Wc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function $c(e) {
    function t(C, S) {
      if (e) {
        var E = C.deletions;
        E === null ? ((C.deletions = [S]), (C.flags |= 16)) : E.push(S);
      }
    }
    function r(C, S) {
      if (!e) return null;
      for (; S !== null;) (t(C, S), (S = S.sibling));
      return null;
    }
    function o(C, S) {
      for (C = new Map(); S !== null;)
        (S.key !== null ? C.set(S.key, S) : C.set(S.index, S), (S = S.sibling));
      return C;
    }
    function a(C, S) {
      return ((C = dn(C, S)), (C.index = 0), (C.sibling = null), C);
    }
    function u(C, S, E) {
      return (
        (C.index = E),
        e
          ? ((E = C.alternate),
            E !== null ? ((E = E.index), E < S ? ((C.flags |= 2), S) : E) : ((C.flags |= 2), S))
          : ((C.flags |= 1048576), S)
      );
    }
    function h(C) {
      return (e && C.alternate === null && (C.flags |= 2), C);
    }
    function v(C, S, E, F) {
      return S === null || S.tag !== 6
        ? ((S = Hl(E, C.mode, F)), (S.return = C), S)
        : ((S = a(S, E)), (S.return = C), S);
    }
    function w(C, S, E, F) {
      var b = E.type;
      return b === le
        ? j(C, S, E.props.children, F, E.key)
        : S !== null &&
            (S.elementType === b ||
              (typeof b == "object" && b !== null && b.$$typeof === Qe && Wc(b) === S.type))
          ? ((F = a(S, E.props)), (F.ref = Kr(C, S, E)), (F.return = C), F)
          : ((F = Cs(E.type, E.key, E.props, null, C.mode, F)),
            (F.ref = Kr(C, S, E)),
            (F.return = C),
            F);
    }
    function N(C, S, E, F) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== E.containerInfo ||
        S.stateNode.implementation !== E.implementation
        ? ((S = Kl(E, C.mode, F)), (S.return = C), S)
        : ((S = a(S, E.children || [])), (S.return = C), S);
    }
    function j(C, S, E, F, b) {
      return S === null || S.tag !== 7
        ? ((S = jn(E, C.mode, F, b)), (S.return = C), S)
        : ((S = a(S, E)), (S.return = C), S);
    }
    function V(C, S, E) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return ((S = Hl("" + S, C.mode, E)), (S.return = C), S);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case B:
            return (
              (E = Cs(S.type, S.key, S.props, null, C.mode, E)),
              (E.ref = Kr(C, null, S)),
              (E.return = C),
              E
            );
          case ee:
            return ((S = Kl(S, C.mode, E)), (S.return = C), S);
          case Qe:
            var F = S._init;
            return V(C, F(S._payload), E);
        }
        if (wr(S) || q(S)) return ((S = jn(S, C.mode, E, null)), (S.return = C), S);
        ts(C, S);
      }
      return null;
    }
    function M(C, S, E, F) {
      var b = S !== null ? S.key : null;
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return b !== null ? null : v(C, S, "" + E, F);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case B:
            return E.key === b ? w(C, S, E, F) : null;
          case ee:
            return E.key === b ? N(C, S, E, F) : null;
          case Qe:
            return ((b = E._init), M(C, S, b(E._payload), F));
        }
        if (wr(E) || q(E)) return b !== null ? null : j(C, S, E, F, null);
        ts(C, E);
      }
      return null;
    }
    function U(C, S, E, F, b) {
      if ((typeof F == "string" && F !== "") || typeof F == "number")
        return ((C = C.get(E) || null), v(S, C, "" + F, b));
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case B:
            return ((C = C.get(F.key === null ? E : F.key) || null), w(S, C, F, b));
          case ee:
            return ((C = C.get(F.key === null ? E : F.key) || null), N(S, C, F, b));
          case Qe:
            var Z = F._init;
            return U(C, S, E, Z(F._payload), b);
        }
        if (wr(F) || q(F)) return ((C = C.get(E) || null), j(S, C, F, b, null));
        ts(S, F);
      }
      return null;
    }
    function G(C, S, E, F) {
      for (
        var b = null, Z = null, J = S, ne = (S = 0), Fe = null;
        J !== null && ne < E.length;
        ne++
      ) {
        J.index > ne ? ((Fe = J), (J = null)) : (Fe = J.sibling);
        var fe = M(C, J, E[ne], F);
        if (fe === null) {
          J === null && (J = Fe);
          break;
        }
        (e && J && fe.alternate === null && t(C, J),
          (S = u(fe, S, ne)),
          Z === null ? (b = fe) : (Z.sibling = fe),
          (Z = fe),
          (J = Fe));
      }
      if (ne === E.length) return (r(C, J), Se && Tn(C, ne), b);
      if (J === null) {
        for (; ne < E.length; ne++)
          ((J = V(C, E[ne], F)),
            J !== null && ((S = u(J, S, ne)), Z === null ? (b = J) : (Z.sibling = J), (Z = J)));
        return (Se && Tn(C, ne), b);
      }
      for (J = o(C, J); ne < E.length; ne++)
        ((Fe = U(J, C, ne, E[ne], F)),
          Fe !== null &&
            (e && Fe.alternate !== null && J.delete(Fe.key === null ? ne : Fe.key),
            (S = u(Fe, S, ne)),
            Z === null ? (b = Fe) : (Z.sibling = Fe),
            (Z = Fe)));
      return (
        e &&
          J.forEach(function (hn) {
            return t(C, hn);
          }),
        Se && Tn(C, ne),
        b
      );
    }
    function Q(C, S, E, F) {
      var b = q(E);
      if (typeof b != "function") throw Error(s(150));
      if (((E = b.call(E)), E == null)) throw Error(s(151));
      for (
        var Z = (b = null), J = S, ne = (S = 0), Fe = null, fe = E.next();
        J !== null && !fe.done;
        ne++, fe = E.next()
      ) {
        J.index > ne ? ((Fe = J), (J = null)) : (Fe = J.sibling);
        var hn = M(C, J, fe.value, F);
        if (hn === null) {
          J === null && (J = Fe);
          break;
        }
        (e && J && hn.alternate === null && t(C, J),
          (S = u(hn, S, ne)),
          Z === null ? (b = hn) : (Z.sibling = hn),
          (Z = hn),
          (J = Fe));
      }
      if (fe.done) return (r(C, J), Se && Tn(C, ne), b);
      if (J === null) {
        for (; !fe.done; ne++, fe = E.next())
          ((fe = V(C, fe.value, F)),
            fe !== null &&
              ((S = u(fe, S, ne)), Z === null ? (b = fe) : (Z.sibling = fe), (Z = fe)));
        return (Se && Tn(C, ne), b);
      }
      for (J = o(C, J); !fe.done; ne++, fe = E.next())
        ((fe = U(J, C, ne, fe.value, F)),
          fe !== null &&
            (e && fe.alternate !== null && J.delete(fe.key === null ? ne : fe.key),
            (S = u(fe, S, ne)),
            Z === null ? (b = fe) : (Z.sibling = fe),
            (Z = fe)));
      return (
        e &&
          J.forEach(function (py) {
            return t(C, py);
          }),
        Se && Tn(C, ne),
        b
      );
    }
    function Ae(C, S, E, F) {
      if (
        (typeof E == "object" &&
          E !== null &&
          E.type === le &&
          E.key === null &&
          (E = E.props.children),
        typeof E == "object" && E !== null)
      ) {
        switch (E.$$typeof) {
          case B:
            e: {
              for (var b = E.key, Z = S; Z !== null;) {
                if (Z.key === b) {
                  if (((b = E.type), b === le)) {
                    if (Z.tag === 7) {
                      (r(C, Z.sibling), (S = a(Z, E.props.children)), (S.return = C), (C = S));
                      break e;
                    }
                  } else if (
                    Z.elementType === b ||
                    (typeof b == "object" && b !== null && b.$$typeof === Qe && Wc(b) === Z.type)
                  ) {
                    (r(C, Z.sibling),
                      (S = a(Z, E.props)),
                      (S.ref = Kr(C, Z, E)),
                      (S.return = C),
                      (C = S));
                    break e;
                  }
                  r(C, Z);
                  break;
                } else t(C, Z);
                Z = Z.sibling;
              }
              E.type === le
                ? ((S = jn(E.props.children, C.mode, F, E.key)), (S.return = C), (C = S))
                : ((F = Cs(E.type, E.key, E.props, null, C.mode, F)),
                  (F.ref = Kr(C, S, E)),
                  (F.return = C),
                  (C = F));
            }
            return h(C);
          case ee:
            e: {
              for (Z = E.key; S !== null;) {
                if (S.key === Z)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === E.containerInfo &&
                    S.stateNode.implementation === E.implementation
                  ) {
                    (r(C, S.sibling), (S = a(S, E.children || [])), (S.return = C), (C = S));
                    break e;
                  } else {
                    r(C, S);
                    break;
                  }
                else t(C, S);
                S = S.sibling;
              }
              ((S = Kl(E, C.mode, F)), (S.return = C), (C = S));
            }
            return h(C);
          case Qe:
            return ((Z = E._init), Ae(C, S, Z(E._payload), F));
        }
        if (wr(E)) return G(C, S, E, F);
        if (q(E)) return Q(C, S, E, F);
        ts(C, E);
      }
      return (typeof E == "string" && E !== "") || typeof E == "number"
        ? ((E = "" + E),
          S !== null && S.tag === 6
            ? (r(C, S.sibling), (S = a(S, E)), (S.return = C), (C = S))
            : (r(C, S), (S = Hl(E, C.mode, F)), (S.return = C), (C = S)),
          h(C))
        : r(C, S);
    }
    return Ae;
  }
  var tr = $c(!0),
    Hc = $c(!1),
    ns = tn(null),
    rs = null,
    nr = null,
    el = null;
  function tl() {
    el = nr = rs = null;
  }
  function nl(e) {
    var t = ns.current;
    (ve(ns), (e._currentValue = t));
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
    ((rs = e),
      (el = nr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (et = !0), (e.firstContext = null)));
  }
  function pt(e) {
    var t = e._currentValue;
    if (el !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), nr === null)) {
        if (rs === null) throw Error(s(308));
        ((nr = e), (rs.dependencies = { lanes: 0, firstContext: e }));
      } else nr = nr.next = e;
    return t;
  }
  var Cn = null;
  function il(e) {
    Cn === null ? (Cn = [e]) : Cn.push(e);
  }
  function Kc(e, t, r, o) {
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
  function Gc(e, t) {
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
  function is(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), xo(e, r));
    }
  }
  function Qc(e, t) {
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
  function ss(e, t, r, o) {
    var a = e.updateQueue;
    sn = !1;
    var u = a.firstBaseUpdate,
      h = a.lastBaseUpdate,
      v = a.shared.pending;
    if (v !== null) {
      a.shared.pending = null;
      var w = v,
        N = w.next;
      ((w.next = null), h === null ? (u = N) : (h.next = N), (h = w));
      var j = e.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (v = j.lastBaseUpdate),
        v !== h && (v === null ? (j.firstBaseUpdate = N) : (v.next = N), (j.lastBaseUpdate = w)));
    }
    if (u !== null) {
      var V = a.baseState;
      ((h = 0), (j = N = w = null), (v = u));
      do {
        var M = v.lane,
          U = v.eventTime;
        if ((o & M) === M) {
          j !== null &&
            (j = j.next =
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
                  V = G.call(U, V, M);
                  break e;
                }
                V = G;
                break e;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = Q.payload), (M = typeof G == "function" ? G.call(U, V, M) : G), M == null)
                )
                  break e;
                V = $({}, V, M);
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
            j === null ? ((N = j = U), (w = V)) : (j = j.next = U),
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
        (j === null && (w = V),
        (a.baseState = w),
        (a.firstBaseUpdate = N),
        (a.lastBaseUpdate = j),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do ((h |= a.lane), (a = a.next));
        while (a !== t);
      } else u === null && (a.shared.lanes = 0);
      ((Rn |= h), (e.lanes = h), (e.memoizedState = V));
    }
  }
  function bc(e, t, r) {
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
    jt = tn(Gr),
    Qr = tn(Gr),
    br = tn(Gr);
  function En(e) {
    if (e === Gr) throw Error(s(174));
    return e;
  }
  function ol(e, t) {
    switch ((me(br, t), me(Qr, e), me(jt, Gr), (e = t.nodeType), e)) {
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
    (ve(jt), me(jt, t));
  }
  function ir() {
    (ve(jt), ve(Qr), ve(br));
  }
  function Yc(e) {
    En(br.current);
    var t = En(jt.current),
      r = oo(t, e.type);
    t !== r && (me(Qr, e), me(jt, r));
  }
  function ll(e) {
    Qr.current === e && (ve(jt), ve(Qr));
  }
  var ke = tn(0);
  function os(e) {
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
  var ls = Y.ReactCurrentDispatcher,
    cl = Y.ReactCurrentBatchConfig,
    Nn = 0,
    Pe = null,
    je = null,
    Ve = null,
    as = !1,
    Yr = !1,
    Xr = 0,
    Fg = 0;
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
      ((Nn = u),
      (Pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ls.current = e === null || e.memoizedState === null ? Bg : Ug),
      (e = r(o, a)),
      Yr)
    ) {
      u = 0;
      do {
        if (((Yr = !1), (Xr = 0), 25 <= u)) throw Error(s(301));
        ((u += 1), (Ve = je = null), (t.updateQueue = null), (ls.current = Wg), (e = r(o, a)));
      } while (Yr);
    }
    if (
      ((ls.current = fs),
      (t = je !== null && je.next !== null),
      (Nn = 0),
      (Ve = je = Pe = null),
      (as = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function hl() {
    var e = Xr !== 0;
    return ((Xr = 0), e);
  }
  function Lt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ve === null ? (Pe.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve);
  }
  function mt() {
    if (je === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = Ve === null ? Pe.memoizedState : Ve.next;
    if (t !== null) ((Ve = t), (je = e));
    else {
      if (e === null) throw Error(s(310));
      ((je = e),
        (e = {
          memoizedState: je.memoizedState,
          baseState: je.baseState,
          baseQueue: je.baseQueue,
          queue: je.queue,
          next: null,
        }),
        Ve === null ? (Pe.memoizedState = Ve = e) : (Ve = Ve.next = e));
    }
    return Ve;
  }
  function qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function pl(e) {
    var t = mt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = je,
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
        N = u;
      do {
        var j = N.lane;
        if ((Nn & j) === j)
          (w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null,
              }),
            (o = N.hasEagerState ? N.eagerState : e(o, N.action)));
        else {
          var V = {
            lane: j,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          };
          (w === null ? ((v = w = V), (h = o)) : (w = w.next = V), (Pe.lanes |= j), (Rn |= j));
        }
        N = N.next;
      } while (N !== null && N !== u);
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
  function Xc() {}
  function qc(e, t) {
    var r = Pe,
      o = mt(),
      a = t(),
      u = !kt(o.memoizedState, a);
    if (
      (u && ((o.memoizedState = a), (et = !0)),
      (o = o.queue),
      gl(ef.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || u || (Ve !== null && Ve.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), Zr(9, Jc.bind(null, r, o, a, t), void 0, null), _e === null))
        throw Error(s(349));
      (Nn & 30) !== 0 || Zc(r, t, a);
    }
    return a;
  }
  function Zc(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Pe.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function Jc(e, t, r, o) {
    ((t.value = r), (t.getSnapshot = o), tf(t) && nf(e));
  }
  function ef(e, t, r) {
    return r(function () {
      tf(t) && nf(e);
    });
  }
  function tf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !kt(e, r);
    } catch {
      return !0;
    }
  }
  function nf(e) {
    var t = Ut(e, 1);
    t !== null && Nt(t, e, 1, -1);
  }
  function rf(e) {
    var t = Lt();
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
      (e = e.dispatch = zg.bind(null, Pe, e)),
      [t.memoizedState, e]
    );
  }
  function Zr(e, t, r, o) {
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
  function sf() {
    return mt().memoizedState;
  }
  function us(e, t, r, o) {
    var a = Lt();
    ((Pe.flags |= e), (a.memoizedState = Zr(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function cs(e, t, r, o) {
    var a = mt();
    o = o === void 0 ? null : o;
    var u = void 0;
    if (je !== null) {
      var h = je.memoizedState;
      if (((u = h.destroy), o !== null && fl(o, h.deps))) {
        a.memoizedState = Zr(t, r, u, o);
        return;
      }
    }
    ((Pe.flags |= e), (a.memoizedState = Zr(1 | t, r, u, o)));
  }
  function of(e, t) {
    return us(8390656, 8, e, t);
  }
  function gl(e, t) {
    return cs(2048, 8, e, t);
  }
  function lf(e, t) {
    return cs(4, 2, e, t);
  }
  function af(e, t) {
    return cs(4, 4, e, t);
  }
  function uf(e, t) {
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
  function cf(e, t, r) {
    return ((r = r != null ? r.concat([e]) : null), cs(4, 4, uf.bind(null, t, e), r));
  }
  function yl() {}
  function ff(e, t) {
    var r = mt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && fl(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function df(e, t) {
    var r = mt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && fl(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function hf(e, t, r) {
    return (Nn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = r))
      : (kt(r, t) || ((r = Wu()), (Pe.lanes |= r), (Rn |= r), (e.baseState = !0)), t);
  }
  function Og(e, t) {
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
  function pf() {
    return mt().memoizedState;
  }
  function Ig(e, t, r) {
    var o = cn(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), mf(e)))
      gf(t, r);
    else if (((r = Kc(e, t, r, o)), r !== null)) {
      var a = Ye();
      (Nt(r, e, o, a), yf(r, t, o));
    }
  }
  function zg(e, t, r) {
    var o = cn(e),
      a = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (mf(e)) gf(t, a);
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
      ((r = Kc(e, t, a, o)), r !== null && ((a = Ye()), Nt(r, e, o, a), yf(r, t, o)));
    }
  }
  function mf(e) {
    var t = e.alternate;
    return e === Pe || (t !== null && t === Pe);
  }
  function gf(e, t) {
    Yr = as = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function yf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), xo(e, r));
    }
  }
  var fs = {
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
    Bg = {
      readContext: pt,
      useCallback: function (e, t) {
        return ((Lt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: pt,
      useEffect: of,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), us(4194308, 4, uf.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return us(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return us(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Lt();
        return ((t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, r) {
        var o = Lt();
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
          (e = e.dispatch = Ig.bind(null, Pe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Lt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: rf,
      useDebugValue: yl,
      useDeferredValue: function (e) {
        return (Lt().memoizedState = e);
      },
      useTransition: function () {
        var e = rf(!1),
          t = e[0];
        return ((e = Og.bind(null, e[1])), (Lt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = Pe,
          a = Lt();
        if (Se) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), _e === null)) throw Error(s(349));
          (Nn & 30) !== 0 || Zc(o, t, r);
        }
        a.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (a.queue = u),
          of(ef.bind(null, o, u, e), [e]),
          (o.flags |= 2048),
          Zr(9, Jc.bind(null, o, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Lt(),
          t = _e.identifierPrefix;
        if (Se) {
          var r = Bt,
            o = zt;
          ((r = (o & ~(1 << (32 - St(o) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Xr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":"));
        } else ((r = Fg++), (t = ":" + t + "r" + r.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ug = {
      readContext: pt,
      useCallback: ff,
      useContext: pt,
      useEffect: gl,
      useImperativeHandle: cf,
      useInsertionEffect: lf,
      useLayoutEffect: af,
      useMemo: df,
      useReducer: pl,
      useRef: sf,
      useState: function () {
        return pl(qr);
      },
      useDebugValue: yl,
      useDeferredValue: function (e) {
        var t = mt();
        return hf(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = pl(qr)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Xc,
      useSyncExternalStore: qc,
      useId: pf,
      unstable_isNewReconciler: !1,
    },
    Wg = {
      readContext: pt,
      useCallback: ff,
      useContext: pt,
      useEffect: gl,
      useImperativeHandle: cf,
      useInsertionEffect: lf,
      useLayoutEffect: af,
      useMemo: df,
      useReducer: ml,
      useRef: sf,
      useState: function () {
        return ml(qr);
      },
      useDebugValue: yl,
      useDeferredValue: function (e) {
        var t = mt();
        return je === null ? (t.memoizedState = e) : hf(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = ml(qr)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Xc,
      useSyncExternalStore: qc,
      useId: pf,
      unstable_isNewReconciler: !1,
    };
  function Tt(e, t) {
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
  var ds = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? wn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = Ye(),
        a = cn(e),
        u = Wt(o, a);
      ((u.payload = t),
        r != null && (u.callback = r),
        (t = on(e, u, a)),
        t !== null && (Nt(t, e, a, o), is(t, e, a)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = Ye(),
        a = cn(e),
        u = Wt(o, a);
      ((u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = on(e, u, a)),
        t !== null && (Nt(t, e, a, o), is(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Ye(),
        o = cn(e),
        a = Wt(r, o);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = on(e, a, o)),
        t !== null && (Nt(t, e, o, r), is(t, e, o)));
    },
  };
  function vf(e, t, r, o, a, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, u, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ir(r, o) || !Ir(a, u)
          : !0
    );
  }
  function xf(e, t, r) {
    var o = !1,
      a = nn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = pt(u))
        : ((a = Je(t) ? kn : Be.current),
          (o = t.contextTypes),
          (u = (o = o != null) ? qn(e, a) : nn)),
      (t = new t(r, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ds),
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
      t.state !== e && ds.enqueueReplaceState(t, t.state, null));
  }
  function xl(e, t, r, o) {
    var a = e.stateNode;
    ((a.props = r), (a.state = e.memoizedState), (a.refs = {}), sl(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (a.context = pt(u))
      : ((u = Je(t) ? kn : Be.current), (a.context = qn(e, u))),
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
        t !== a.state && ds.enqueueReplaceState(a, a.state, null),
        ss(e, r, a, o),
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
  var $g = typeof WeakMap == "function" ? WeakMap : Map;
  function Sf(e, t, r) {
    ((r = Wt(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (xs || ((xs = !0), (Fl = o)), Sl(e, t));
      }),
      r
    );
  }
  function kf(e, t, r) {
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
  function Pf(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new $g();
      var a = new Set();
      o.set(t, a);
    } else ((a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a)));
    a.has(r) || (a.add(r), (e = ry.bind(null, e, t, r)), t.then(e, e));
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
  function Cf(e, t, r, o, a) {
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
  var Hg = Y.ReactCurrentOwner,
    et = !1;
  function be(e, t, r, o) {
    t.child = e === null ? Hc(t, null, r, o) : tr(t, e.child, r, o);
  }
  function Ef(e, t, r, o, a) {
    r = r.render;
    var u = t.ref;
    return (
      rr(t, a),
      (o = dl(e, t, r, o, u, a)),
      (r = hl()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), $t(e, t, a))
        : (Se && r && Yo(t), (t.flags |= 1), be(e, t, o, a), t.child)
    );
  }
  function Nf(e, t, r, o, a) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !$l(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Rf(e, t, u, o, a))
        : ((e = Cs(r.type, null, o, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & a) === 0)) {
      var h = u.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Ir), r(h, o) && e.ref === t.ref))
        return $t(e, t, a);
    }
    return ((t.flags |= 1), (e = dn(u, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Rf(e, t, r, o, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ir(u, o) && e.ref === t.ref)
        if (((et = !1), (t.pendingProps = o = u), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (et = !0);
        else return ((t.lanes = e.lanes), $t(e, t, a));
    }
    return kl(e, t, r, o, a);
  }
  function Af(e, t, r) {
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
    return (be(e, t, a, r), t.child);
  }
  function Mf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function kl(e, t, r, o, a) {
    var u = Je(r) ? kn : Be.current;
    return (
      (u = qn(t, u)),
      rr(t, a),
      (r = dl(e, t, r, o, u, a)),
      (o = hl()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), $t(e, t, a))
        : (Se && o && Yo(t), (t.flags |= 1), be(e, t, r, a), t.child)
    );
  }
  function Df(e, t, r, o, a) {
    if (Je(r)) {
      var u = !0;
      Xi(t);
    } else u = !1;
    if ((rr(t, a), t.stateNode === null)) (ps(e, t), xf(t, r, o), xl(t, r, o, a), (o = !0));
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var w = h.context,
        N = r.contextType;
      typeof N == "object" && N !== null
        ? (N = pt(N))
        : ((N = Je(r) ? kn : Be.current), (N = qn(t, N)));
      var j = r.getDerivedStateFromProps,
        V = typeof j == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (V ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== o || w !== N) && wf(t, h, o, N)),
        (sn = !1));
      var M = t.memoizedState;
      ((h.state = M),
        ss(t, o, h, a),
        (w = t.memoizedState),
        v !== o || M !== w || Ze.current || sn
          ? (typeof j == "function" && (vl(t, r, j, o), (w = t.memoizedState)),
            (v = sn || vf(t, r, v, o, M, w, N))
              ? (V ||
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
            (h.context = N),
            (o = v))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), (o = !1)));
    } else {
      ((h = t.stateNode),
        Gc(e, t),
        (v = t.memoizedProps),
        (N = t.type === t.elementType ? v : Tt(t.type, v)),
        (h.props = N),
        (V = t.pendingProps),
        (M = h.context),
        (w = r.contextType),
        typeof w == "object" && w !== null
          ? (w = pt(w))
          : ((w = Je(r) ? kn : Be.current), (w = qn(t, w))));
      var U = r.getDerivedStateFromProps;
      ((j = typeof U == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== V || M !== w) && wf(t, h, o, w)),
        (sn = !1),
        (M = t.memoizedState),
        (h.state = M),
        ss(t, o, h, a));
      var G = t.memoizedState;
      v !== V || M !== G || Ze.current || sn
        ? (typeof U == "function" && (vl(t, r, U, o), (G = t.memoizedState)),
          (N = sn || vf(t, r, N, o, M, G, w) || !1)
            ? (j ||
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
          (o = N))
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
    Mf(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return (a && _c(t, r, !1), $t(e, t, u));
    ((o = t.stateNode), (Hg.current = t));
    var v = h && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = tr(t, e.child, null, u)), (t.child = tr(t, null, v, u)))
        : be(e, t, v, u),
      (t.memoizedState = o.state),
      a && _c(t, r, !0),
      t.child
    );
  }
  function jf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Lc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Lc(e, t.context, !1),
      ol(e, t.containerInfo));
  }
  function Lf(e, t, r, o, a) {
    return (er(), Jo(a), (t.flags |= 256), be(e, t, r, o), t.child);
  }
  var Tl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Vf(e, t, r) {
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
        Zo(t),
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
                  : (u = Es(h, o, 0, null)),
                (e = jn(e, o, r, null)),
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
      return Kg(e, t, h, o, v, a, r);
    if (u) {
      ((u = o.fallback), (h = t.mode), (a = e.child), (v = a.sibling));
      var w = { mode: "hidden", children: o.children };
      return (
        (h & 1) === 0 && t.child !== a
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = w), (t.deletions = null))
          : ((o = dn(a, w)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
        v !== null ? (u = dn(v, u)) : ((u = jn(u, h, r, null)), (u.flags |= 2)),
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
      (t = Es({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function hs(e, t, r, o) {
    return (
      o !== null && Jo(o),
      tr(t, e.child, null, r),
      (e = El(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Kg(e, t, r, o, a, u, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = wl(Error(s(422)))), hs(e, t, h, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = o.fallback),
            (a = t.mode),
            (o = Es({ mode: "visible", children: o.children }, a, 0, null)),
            (u = jn(u, a, h, null)),
            (u.flags |= 2),
            (o.return = t),
            (u.return = t),
            (o.sibling = u),
            (t.child = o),
            (t.mode & 1) !== 0 && tr(t, e.child, null, h),
            (t.child.memoizedState = Cl(h)),
            (t.memoizedState = Tl),
            u);
    if ((t.mode & 1) === 0) return hs(e, t, h, null);
    if (a.data === "$!") {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var v = o.dgst;
      return ((o = v), (u = Error(s(419))), (o = wl(u, o, void 0)), hs(e, t, h, o));
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
          a !== 0 && a !== u.retryLane && ((u.retryLane = a), Ut(e, a), Nt(o, e, a, -1)));
      }
      return (Wl(), (o = wl(Error(s(421)))), hs(e, t, h, o));
    }
    return a.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = iy.bind(null, e)), (a._reactRetry = t), null)
      : ((e = u.treeContext),
        (at = en(a.nextSibling)),
        (lt = t),
        (Se = !0),
        (Pt = null),
        e !== null &&
          ((dt[ht++] = zt),
          (dt[ht++] = Bt),
          (dt[ht++] = Pn),
          (zt = e.id),
          (Bt = e.overflow),
          (Pn = t)),
        (t = El(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function _f(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), rl(e.return, t, r));
  }
  function Nl(e, t, r, o, a) {
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
  function Ff(e, t, r) {
    var o = t.pendingProps,
      a = o.revealOrder,
      u = o.tail;
    if ((be(e, t, o.children, r), (o = ke.current), (o & 2) !== 0))
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
    if ((me(ke, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (r = t.child, a = null; r !== null;)
            ((e = r.alternate), e !== null && os(e) === null && (a = r), (r = r.sibling));
          ((r = a),
            r === null ? ((a = t.child), (t.child = null)) : ((a = r.sibling), (r.sibling = null)),
            Nl(t, !1, a, r, u));
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null;) {
            if (((e = a.alternate), e !== null && os(e) === null)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = r), (r = a), (a = e));
          }
          Nl(t, !0, r, null, u);
          break;
        case "together":
          Nl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ps(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function $t(e, t, r) {
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
  function Gg(e, t, r) {
    switch (t.tag) {
      case 3:
        (jf(t), er());
        break;
      case 5:
        Yc(t);
        break;
      case 1:
        Je(t.type) && Xi(t);
        break;
      case 4:
        ol(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value;
        (me(ns, o._currentValue), (o._currentValue = a));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (me(ke, ke.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Vf(e, t, r)
              : (me(ke, ke.current & 1), (e = $t(e, t, r)), e !== null ? e.sibling : null);
        me(ke, ke.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return Ff(e, t, r);
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
        return ((t.lanes = 0), Af(e, t, r));
    }
    return $t(e, t, r);
  }
  var Of, Rl, If, zf;
  ((Of = function (e, t) {
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
    (If = function (e, t, r, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        ((e = t.stateNode), En(jt.current));
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
            typeof a.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Qi);
        }
        lo(r, o);
        var h;
        r = null;
        for (N in a)
          if (!o.hasOwnProperty(N) && a.hasOwnProperty(N) && a[N] != null)
            if (N === "style") {
              var v = a[N];
              for (h in v) v.hasOwnProperty(h) && (r || (r = {}), (r[h] = ""));
            } else
              N !== "dangerouslySetInnerHTML" &&
                N !== "children" &&
                N !== "suppressContentEditableWarning" &&
                N !== "suppressHydrationWarning" &&
                N !== "autoFocus" &&
                (c.hasOwnProperty(N) ? u || (u = []) : (u = u || []).push(N, null));
        for (N in o) {
          var w = o[N];
          if (
            ((v = a != null ? a[N] : void 0),
            o.hasOwnProperty(N) && w !== v && (w != null || v != null))
          )
            if (N === "style")
              if (v) {
                for (h in v)
                  !v.hasOwnProperty(h) ||
                    (w && w.hasOwnProperty(h)) ||
                    (r || (r = {}), (r[h] = ""));
                for (h in w) w.hasOwnProperty(h) && v[h] !== w[h] && (r || (r = {}), (r[h] = w[h]));
              } else (r || (u || (u = []), u.push(N, r)), (r = w));
            else
              N === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (v = v ? v.__html : void 0),
                  w != null && v !== w && (u = u || []).push(N, w))
                : N === "children"
                  ? (typeof w != "string" && typeof w != "number") || (u = u || []).push(N, "" + w)
                  : N !== "suppressContentEditableWarning" &&
                    N !== "suppressHydrationWarning" &&
                    (c.hasOwnProperty(N)
                      ? (w != null && N === "onScroll" && ye("scroll", e), u || v === w || (u = []))
                      : (u = u || []).push(N, w));
        }
        r && (u = u || []).push("style", r);
        var N = u;
        (t.updateQueue = N) && (t.flags |= 4);
      }
    }),
    (zf = function (e, t, r, o) {
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
  function Qg(e, t, r) {
    var o = t.pendingProps;
    switch ((Xo(t), t.tag)) {
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
        return (Je(t.type) && Yi(), We(t), null);
      case 3:
        return (
          (o = t.stateNode),
          ir(),
          ve(Ze),
          ve(Be),
          ul(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (es(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pt !== null && (zl(Pt), (Pt = null)))),
          Rl(e, t),
          We(t),
          null
        );
      case 5:
        ll(t);
        var a = En(br.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (If(e, t, r, o, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (We(t), null);
          }
          if (((e = En(jt.current)), es(t))) {
            ((o = t.stateNode), (r = t.type));
            var u = t.memoizedProps;
            switch (((o[Dt] = t), (o[$r] = u), (e = (t.mode & 1) !== 0), r)) {
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
                for (a = 0; a < Br.length; a++) ye(Br[a], o);
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
                (vu(o, u), ye("invalid", o));
                break;
              case "select":
                ((o._wrapperState = { wasMultiple: !!u.multiple }), ye("invalid", o));
                break;
              case "textarea":
                (Su(o, u), ye("invalid", o));
            }
            (lo(r, u), (a = null));
            for (var h in u)
              if (u.hasOwnProperty(h)) {
                var v = u[h];
                h === "children"
                  ? typeof v == "string"
                    ? o.textContent !== v &&
                      (u.suppressHydrationWarning !== !0 && Gi(o.textContent, v, e),
                      (a = ["children", v]))
                    : typeof v == "number" &&
                      o.textContent !== "" + v &&
                      (u.suppressHydrationWarning !== !0 && Gi(o.textContent, v, e),
                      (a = ["children", "" + v]))
                  : c.hasOwnProperty(h) && v != null && h === "onScroll" && ye("scroll", o);
              }
            switch (r) {
              case "input":
                (Pi(o), wu(o, u, !0));
                break;
              case "textarea":
                (Pi(o), Pu(o));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (o.onclick = Qi);
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
              (e[Dt] = t),
              (e[$r] = o),
              Of(e, t, !1, !1),
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
                  for (a = 0; a < Br.length; a++) ye(Br[a], e);
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
                  (vu(e, o), (a = no(e, o)), ye("invalid", e));
                  break;
                case "option":
                  a = o;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (a = $({}, o, { value: void 0 })),
                    ye("invalid", e));
                  break;
                case "textarea":
                  (Su(e, o), (a = so(e, o)), ye("invalid", e));
                  break;
                default:
                  a = o;
              }
              (lo(r, a), (v = a));
              for (u in v)
                if (v.hasOwnProperty(u)) {
                  var w = v[u];
                  u === "style"
                    ? Nu(e, w)
                    : u === "dangerouslySetInnerHTML"
                      ? ((w = w ? w.__html : void 0), w != null && Cu(e, w))
                      : u === "children"
                        ? typeof w == "string"
                          ? (r !== "textarea" || w !== "") && Sr(e, w)
                          : typeof w == "number" && Sr(e, "" + w)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (c.hasOwnProperty(u)
                            ? w != null && u === "onScroll" && ye("scroll", e)
                            : w != null && K(e, u, w, h));
                }
              switch (r) {
                case "input":
                  (Pi(e), wu(e, o, !1));
                  break;
                case "textarea":
                  (Pi(e), Pu(e));
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
                  typeof a.onClick == "function" && (e.onclick = Qi);
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
        if (e && t.stateNode != null) zf(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((r = En(br.current)), En(jt.current), es(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[Dt] = t),
              (u = o.nodeValue !== r) && ((e = lt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Gi(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Gi(o.nodeValue, r, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
              (o[Dt] = t),
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
            (Uc(), er(), (t.flags |= 98560), (u = !1));
          else if (((u = es(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(s(317));
              u[Dt] = t;
            } else (er(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (We(t), (u = !1));
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
                (e === null || (ke.current & 1) !== 0 ? Le === 0 && (Le = 3) : Wl())),
            t.updateQueue !== null && (t.flags |= 4),
            We(t),
            null);
      case 4:
        return (ir(), Rl(e, t), e === null && Ur(t.stateNode.containerInfo), We(t), null);
      case 10:
        return (nl(t.type._context), We(t), null);
      case 17:
        return (Je(t.type) && Yi(), We(t), null);
      case 19:
        if ((ve(ke), (u = t.memoizedState), u === null)) return (We(t), null);
        if (((o = (t.flags & 128) !== 0), (h = u.rendering), h === null))
          if (o) Jr(u, !1);
          else {
            if (Le !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((h = os(e)), h !== null)) {
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
              Re() > ar &&
              ((t.flags |= 128), (o = !0), Jr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = os(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Jr(u, !0),
                u.tail === null && u.tailMode === "hidden" && !h.alternate && !Se)
              )
                return (We(t), null);
            } else
              2 * Re() - u.renderingStartTime > ar &&
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
  function bg(e, t) {
    switch ((Xo(t), t.tag)) {
      case 1:
        return (
          Je(t.type) && Yi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ir(),
          ve(Ze),
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
  var ms = !1,
    $e = !1,
    Yg = typeof WeakSet == "function" ? WeakSet : Set,
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
  function Al(e, t, r) {
    try {
      r();
    } catch (o) {
      Ee(e, t, o);
    }
  }
  var Bf = !1;
  function Xg(e, t) {
    if (((Uo = _i), (e = yc()), Lo(e))) {
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
              N = 0,
              j = 0,
              V = e,
              M = null;
            t: for (;;) {
              for (
                var U;
                V !== r || (a !== 0 && V.nodeType !== 3) || (v = h + a),
                  V !== u || (o !== 0 && V.nodeType !== 3) || (w = h + o),
                  V.nodeType === 3 && (h += V.nodeValue.length),
                  (U = V.firstChild) !== null;
              )
                ((M = V), (V = U));
              for (;;) {
                if (V === e) break t;
                if (
                  (M === r && ++N === a && (v = h),
                  M === u && ++j === o && (w = h),
                  (U = V.nextSibling) !== null)
                )
                  break;
                ((V = M), (M = V.parentNode));
              }
              V = U;
            }
            r = v === -1 || w === -1 ? null : { start: v, end: w };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Wo = { focusedElem: e, selectionRange: r }, _i = !1, H = t; H !== null;)
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
                      Ae = G.memoizedState,
                      C = t.stateNode,
                      S = C.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Q : Tt(t.type, Q),
                        Ae,
                      );
                    C.__reactInternalSnapshotBeforeUpdate = S;
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
            Ee(t, t.return, F);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (H = e));
            break;
          }
          H = t.return;
        }
    return ((G = Bf), (Bf = !1), G);
  }
  function ei(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var a = (o = o.next);
      do {
        if ((a.tag & e) === e) {
          var u = a.destroy;
          ((a.destroy = void 0), u !== void 0 && Al(t, r, u));
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
  function Uf(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Uf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Dt], delete t[$r], delete t[Go], delete t[jg], delete t[Lg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Wf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function $f(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Wf(e.return)) return null;
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
  function Dl(e, t, r) {
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
            r != null || t.onclick !== null || (t.onclick = Qi)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Dl(e, t, r), e = e.sibling; e !== null;) (Dl(e, t, r), (e = e.sibling));
  }
  function jl(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (jl(e, t, r), e = e.sibling; e !== null;) (jl(e, t, r), (e = e.sibling));
  }
  var Oe = null,
    Ct = !1;
  function ln(e, t, r) {
    for (r = r.child; r !== null;) (Hf(e, t, r), (r = r.sibling));
  }
  function Hf(e, t, r) {
    if (Mt && typeof Mt.onCommitFiberUnmount == "function")
      try {
        Mt.onCommitFiberUnmount(Ai, r);
      } catch {}
    switch (r.tag) {
      case 5:
        $e || or(r, t);
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
              jr(e))
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
        if (!$e && ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          a = o = o.next;
          do {
            var u = a,
              h = u.destroy;
            ((u = u.tag),
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Al(r, t, h),
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
  function Kf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Yg()),
        t.forEach(function (o) {
          var a = sy.bind(null, e, o);
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
          (Hf(u, h, a), (Oe = null), (Ct = !1));
          var w = a.alternate;
          (w !== null && (w.return = null), (a.return = null));
        } catch (N) {
          Ee(a, t, N);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (Gf(t, e), (t = t.sibling));
  }
  function Gf(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Et(t, e), Vt(e), o & 4)) {
          try {
            (ei(3, e, e.return), gs(3, e));
          } catch (Q) {
            Ee(e, e.return, Q);
          }
          try {
            ei(5, e, e.return);
          } catch (Q) {
            Ee(e, e.return, Q);
          }
        }
        break;
      case 1:
        (Et(t, e), Vt(e), o & 512 && r !== null && or(r, r.return));
        break;
      case 5:
        if ((Et(t, e), Vt(e), o & 512 && r !== null && or(r, r.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            Sr(a, "");
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
              (v === "input" && u.type === "radio" && u.name != null && xu(a, u), ao(v, h));
              var N = ao(v, u);
              for (h = 0; h < w.length; h += 2) {
                var j = w[h],
                  V = w[h + 1];
                j === "style"
                  ? Nu(a, V)
                  : j === "dangerouslySetInnerHTML"
                    ? Cu(a, V)
                    : j === "children"
                      ? Sr(a, V)
                      : K(a, j, V, N);
              }
              switch (v) {
                case "input":
                  ro(a, u);
                  break;
                case "textarea":
                  ku(a, u);
                  break;
                case "select":
                  var M = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!u.multiple;
                  var U = u.value;
                  U != null
                    ? zn(a, !!u.multiple, U, !1)
                    : M !== !!u.multiple &&
                      (u.defaultValue != null
                        ? zn(a, !!u.multiple, u.defaultValue, !0)
                        : zn(a, !!u.multiple, u.multiple ? [] : "", !1));
              }
              a[$r] = u;
            } catch (Q) {
              Ee(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((Et(t, e), Vt(e), o & 4)) {
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
        if ((Et(t, e), Vt(e), o & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            jr(t.containerInfo);
          } catch (Q) {
            Ee(e, e.return, Q);
          }
        break;
      case 4:
        (Et(t, e), Vt(e));
        break;
      case 13:
        (Et(t, e),
          Vt(e),
          (a = e.child),
          a.flags & 8192 &&
            ((u = a.memoizedState !== null),
            (a.stateNode.isHidden = u),
            !u || (a.alternate !== null && a.alternate.memoizedState !== null) || (_l = Re())),
          o & 4 && Kf(e));
        break;
      case 22:
        if (
          ((j = r !== null && r.memoizedState !== null),
          e.mode & 1 ? (($e = (N = $e) || j), Et(t, e), ($e = N)) : Et(t, e),
          Vt(e),
          o & 8192)
        ) {
          if (
            ((N = e.memoizedState !== null), (e.stateNode.isHidden = N) && !j && (e.mode & 1) !== 0)
          )
            for (H = e, j = e.child; j !== null;) {
              for (V = H = j; H !== null;) {
                switch (((M = H), (U = M.child), M.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ei(4, M, M.return);
                    break;
                  case 1:
                    or(M, M.return);
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
                    or(M, M.return);
                    break;
                  case 22:
                    if (M.memoizedState !== null) {
                      Yf(V);
                      continue;
                    }
                }
                U !== null ? ((U.return = M), (H = U)) : Yf(V);
              }
              j = j.sibling;
            }
          e: for (j = null, V = e; ;) {
            if (V.tag === 5) {
              if (j === null) {
                j = V;
                try {
                  ((a = V.stateNode),
                    N
                      ? ((u = a.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((v = V.stateNode),
                        (w = V.memoizedProps.style),
                        (h = w != null && w.hasOwnProperty("display") ? w.display : null),
                        (v.style.display = Eu("display", h))));
                } catch (Q) {
                  Ee(e, e.return, Q);
                }
              }
            } else if (V.tag === 6) {
              if (j === null)
                try {
                  V.stateNode.nodeValue = N ? "" : V.memoizedProps;
                } catch (Q) {
                  Ee(e, e.return, Q);
                }
            } else if (
              ((V.tag !== 22 && V.tag !== 23) || V.memoizedState === null || V === e) &&
              V.child !== null
            ) {
              ((V.child.return = V), (V = V.child));
              continue;
            }
            if (V === e) break e;
            for (; V.sibling === null;) {
              if (V.return === null || V.return === e) break e;
              (j === V && (j = null), (V = V.return));
            }
            (j === V && (j = null), (V.sibling.return = V.return), (V = V.sibling));
          }
        }
        break;
      case 19:
        (Et(t, e), Vt(e), o & 4 && Kf(e));
        break;
      case 21:
        break;
      default:
        (Et(t, e), Vt(e));
    }
  }
  function Vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null;) {
            if (Wf(r)) {
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
            var u = $f(e);
            jl(e, u, a);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              v = $f(e);
            Dl(e, v, h);
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
  function qg(e, t, r) {
    ((H = e), Qf(e));
  }
  function Qf(e, t, r) {
    for (var o = (e.mode & 1) !== 0; H !== null;) {
      var a = H,
        u = a.child;
      if (a.tag === 22 && o) {
        var h = a.memoizedState !== null || ms;
        if (!h) {
          var v = a.alternate,
            w = (v !== null && v.memoizedState !== null) || $e;
          v = ms;
          var N = $e;
          if (((ms = h), ($e = w) && !N))
            for (H = a; H !== null;)
              ((h = H),
                (w = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Xf(a)
                  : w !== null
                    ? ((w.return = h), (H = w))
                    : Xf(a));
          for (; u !== null;) ((H = u), Qf(u), (u = u.sibling));
          ((H = a), (ms = v), ($e = N));
        }
        bf(e);
      } else (a.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = a), (H = u)) : bf(e);
    }
  }
  function bf(e) {
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
                      t.elementType === t.type ? r.memoizedProps : Tt(t.type, r.memoizedProps);
                    o.componentDidUpdate(a, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = t.updateQueue;
                u !== null && bc(t, u, o);
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
                  bc(t, h, r);
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
                  var N = t.alternate;
                  if (N !== null) {
                    var j = N.memoizedState;
                    if (j !== null) {
                      var V = j.dehydrated;
                      V !== null && jr(V);
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
          $e || (t.flags & 512 && Ml(t));
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
  function Yf(e) {
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
  function Xf(e) {
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
    ys = Y.ReactCurrentDispatcher,
    Ll = Y.ReactCurrentOwner,
    gt = Y.ReactCurrentBatchConfig,
    ae = 0,
    _e = null,
    De = null,
    Ie = 0,
    ut = 0,
    lr = tn(0),
    Le = 0,
    ti = null,
    Rn = 0,
    vs = 0,
    Vl = 0,
    ni = null,
    tt = null,
    _l = 0,
    ar = 1 / 0,
    Ht = null,
    xs = !1,
    Fl = null,
    an = null,
    ws = !1,
    un = null,
    Ss = 0,
    ri = 0,
    Ol = null,
    ks = -1,
    Ps = 0;
  function Ye() {
    return (ae & 6) !== 0 ? Re() : ks !== -1 ? ks : (ks = Re());
  }
  function cn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && Ie !== 0
        ? Ie & -Ie
        : _g.transition !== null
          ? (Ps === 0 && (Ps = Wu()), Ps)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qu(e.type))), e);
  }
  function Nt(e, t, r, o) {
    if (50 < ri) throw ((ri = 0), (Ol = null), Error(s(185)));
    (Nr(e, r, o),
      ((ae & 2) === 0 || e !== _e) &&
        (e === _e && ((ae & 2) === 0 && (vs |= r), Le === 4 && fn(e, Ie)),
        nt(e, o),
        r === 1 && ae === 0 && (t.mode & 1) === 0 && ((ar = Re() + 500), qi && rn())));
  }
  function nt(e, t) {
    var r = e.callbackNode;
    _m(e, t);
    var o = ji(e, e === _e ? Ie : 0);
    if (o === 0) (r !== null && zu(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && zu(r), t === 1))
        (e.tag === 0 ? Vg(Zf.bind(null, e)) : Fc(Zf.bind(null, e)),
          Mg(function () {
            (ae & 6) === 0 && rn();
          }),
          (r = null));
      else {
        switch ($u(o)) {
          case 1:
            r = go;
            break;
          case 4:
            r = Bu;
            break;
          case 16:
            r = Ri;
            break;
          case 536870912:
            r = Uu;
            break;
          default:
            r = Ri;
        }
        r = od(r, qf.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function qf(e, t) {
    if (((ks = -1), (Ps = 0), (ae & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (ur() && e.callbackNode !== r) return null;
    var o = ji(e, e === _e ? Ie : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Ts(e, o);
    else {
      t = o;
      var a = ae;
      ae |= 2;
      var u = ed();
      (_e !== e || Ie !== t) && ((Ht = null), (ar = Re() + 500), Mn(e, t));
      do
        try {
          ty();
          break;
        } catch (v) {
          Jf(e, v);
        }
      while (!0);
      (tl(), (ys.current = u), (ae = a), De !== null ? (t = 0) : ((_e = null), (Ie = 0), (t = Le)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = yo(e)), a !== 0 && ((o = a), (t = Il(e, a)))), t === 1))
        throw ((r = ti), Mn(e, 0), fn(e, o), nt(e, Re()), r);
      if (t === 6) fn(e, o);
      else {
        if (
          ((a = e.current.alternate),
          (o & 30) === 0 &&
            !Jg(a) &&
            ((t = Ts(e, o)),
            t === 2 && ((u = yo(e)), u !== 0 && ((o = u), (t = Il(e, u)))),
            t === 1))
        )
          throw ((r = ti), Mn(e, 0), fn(e, o), nt(e, Re()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Dn(e, tt, Ht);
            break;
          case 3:
            if ((fn(e, o), (o & 130023424) === o && ((t = _l + 500 - Re()), 10 < t))) {
              if (ji(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                (Ye(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = Ho(Dn.bind(null, e, tt, Ht), t);
              break;
            }
            Dn(e, tt, Ht);
            break;
          case 4:
            if ((fn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, a = -1; 0 < o;) {
              var h = 31 - St(o);
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
                            : 1960 * Zg(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Ho(Dn.bind(null, e, tt, Ht), o);
              break;
            }
            Dn(e, tt, Ht);
            break;
          case 5:
            Dn(e, tt, Ht);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (nt(e, Re()), e.callbackNode === r ? qf.bind(null, e) : null);
  }
  function Il(e, t) {
    var r = ni;
    return (
      e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
      (e = Ts(e, t)),
      e !== 2 && ((t = tt), (tt = r), t !== null && zl(t)),
      e
    );
  }
  function zl(e) {
    tt === null ? (tt = e) : tt.push.apply(tt, e);
  }
  function Jg(e) {
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
      t &= ~Vl, t &= ~vs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - St(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function Zf(e) {
    if ((ae & 6) !== 0) throw Error(s(327));
    ur();
    var t = ji(e, 0);
    if ((t & 1) === 0) return (nt(e, Re()), null);
    var r = Ts(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = yo(e);
      o !== 0 && ((t = o), (r = Il(e, o)));
    }
    if (r === 1) throw ((r = ti), Mn(e, 0), fn(e, t), nt(e, Re()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Dn(e, tt, Ht),
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
      ((ae = r), ae === 0 && ((ar = Re() + 500), qi && rn()));
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
  function Mn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Ag(r)), De !== null))
      for (r = De.return; r !== null;) {
        var o = r;
        switch ((Xo(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Yi());
            break;
          case 3:
            (ir(), ve(Ze), ve(Be), ul());
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
      (De = e = dn(e.current, null)),
      (Ie = ut = t),
      (Le = 0),
      (ti = null),
      (Vl = vs = Rn = 0),
      (tt = ni = null),
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
  function Jf(e, t) {
    do {
      var r = De;
      try {
        if ((tl(), (ls.current = fs), as)) {
          for (var o = Pe.memoizedState; o !== null;) {
            var a = o.queue;
            (a !== null && (a.pending = null), (o = o.next));
          }
          as = !1;
        }
        if (
          ((Nn = 0),
          (Ve = je = Pe = null),
          (Yr = !1),
          (Xr = 0),
          (Ll.current = null),
          r === null || r.return === null)
        ) {
          ((Le = 1), (ti = t), (De = null));
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
            var N = w,
              j = v,
              V = j.tag;
            if ((j.mode & 1) === 0 && (V === 0 || V === 11 || V === 15)) {
              var M = j.alternate;
              M
                ? ((j.updateQueue = M.updateQueue),
                  (j.memoizedState = M.memoizedState),
                  (j.lanes = M.lanes))
                : ((j.updateQueue = null), (j.memoizedState = null));
            }
            var U = Tf(h);
            if (U !== null) {
              ((U.flags &= -257), Cf(U, h, v, u, t), U.mode & 1 && Pf(u, N, t), (t = U), (w = N));
              var G = t.updateQueue;
              if (G === null) {
                var Q = new Set();
                (Q.add(w), (t.updateQueue = Q));
              } else G.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Pf(u, N, t), Wl());
                break e;
              }
              w = Error(s(426));
            }
          } else if (Se && v.mode & 1) {
            var Ae = Tf(h);
            if (Ae !== null) {
              ((Ae.flags & 65536) === 0 && (Ae.flags |= 256), Cf(Ae, h, v, u, t), Jo(sr(w, v)));
              break e;
            }
          }
          ((u = w = sr(w, v)),
            Le !== 4 && (Le = 2),
            ni === null ? (ni = [u]) : ni.push(u),
            (u = h));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var C = Sf(u, w, t);
                Qc(u, C);
                break e;
              case 1:
                v = w;
                var S = u.type,
                  E = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (E !== null &&
                      typeof E.componentDidCatch == "function" &&
                      (an === null || !an.has(E))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var F = kf(u, v, t);
                  Qc(u, F);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        nd(r);
      } catch (b) {
        ((t = b), De === r && r !== null && (De = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ed() {
    var e = ys.current;
    return ((ys.current = fs), e === null ? fs : e);
  }
  function Wl() {
    ((Le === 0 || Le === 3 || Le === 2) && (Le = 4),
      _e === null || ((Rn & 268435455) === 0 && (vs & 268435455) === 0) || fn(_e, Ie));
  }
  function Ts(e, t) {
    var r = ae;
    ae |= 2;
    var o = ed();
    (_e !== e || Ie !== t) && ((Ht = null), Mn(e, t));
    do
      try {
        ey();
        break;
      } catch (a) {
        Jf(e, a);
      }
    while (!0);
    if ((tl(), (ae = r), (ys.current = o), De !== null)) throw Error(s(261));
    return ((_e = null), (Ie = 0), Le);
  }
  function ey() {
    for (; De !== null;) td(De);
  }
  function ty() {
    for (; De !== null && !Em();) td(De);
  }
  function td(e) {
    var t = sd(e.alternate, e, ut);
    ((e.memoizedProps = e.pendingProps), t === null ? nd(e) : (De = t), (Ll.current = null));
  }
  function nd(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Qg(r, t, ut)), r !== null)) {
          De = r;
          return;
        }
      } else {
        if (((r = bg(r, t)), r !== null)) {
          ((r.flags &= 32767), (De = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Le = 6), (De = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    Le === 0 && (Le = 5);
  }
  function Dn(e, t, r) {
    var o = he,
      a = gt.transition;
    try {
      ((gt.transition = null), (he = 1), ny(e, t, r, o));
    } finally {
      ((gt.transition = a), (he = o));
    }
    return null;
  }
  function ny(e, t, r, o) {
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
      (Fm(e, u),
      e === _e && ((De = _e = null), (Ie = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        ws ||
        ((ws = !0),
        od(Ri, function () {
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
        (Ll.current = null),
        Xg(e, r),
        Gf(r, e),
        kg(Wo),
        (_i = !!Uo),
        (Wo = Uo = null),
        (e.current = r),
        qg(r),
        Nm(),
        (ae = v),
        (he = h),
        (gt.transition = u));
    } else e.current = r;
    if (
      (ws && ((ws = !1), (un = e), (Ss = a)),
      (u = e.pendingLanes),
      u === 0 && (an = null),
      Mm(r.stateNode),
      nt(e, Re()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((a = t[r]), o(a.value, { componentStack: a.stack, digest: a.digest }));
    if (xs) throw ((xs = !1), (e = Fl), (Fl = null), e);
    return (
      (Ss & 1) !== 0 && e.tag !== 0 && ur(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === Ol ? ri++ : ((ri = 0), (Ol = e))) : (ri = 0),
      rn(),
      null
    );
  }
  function ur() {
    if (un !== null) {
      var e = $u(Ss),
        t = gt.transition,
        r = he;
      try {
        if (((gt.transition = null), (he = 16 > e ? 16 : e), un === null)) var o = !1;
        else {
          if (((e = un), (un = null), (Ss = 0), (ae & 6) !== 0)) throw Error(s(331));
          var a = ae;
          for (ae |= 4, H = e.current; H !== null;) {
            var u = H,
              h = u.child;
            if ((H.flags & 16) !== 0) {
              var v = u.deletions;
              if (v !== null) {
                for (var w = 0; w < v.length; w++) {
                  var N = v[w];
                  for (H = N; H !== null;) {
                    var j = H;
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ei(8, j, u);
                    }
                    var V = j.child;
                    if (V !== null) ((V.return = j), (H = V));
                    else
                      for (; H !== null;) {
                        j = H;
                        var M = j.sibling,
                          U = j.return;
                        if ((Uf(j), j === N)) {
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
                      var Ae = Q.sibling;
                      ((Q.sibling = null), (Q = Ae));
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
                      ei(9, u, u.return);
                  }
                var C = u.sibling;
                if (C !== null) {
                  ((C.return = u.return), (H = C));
                  break e;
                }
                H = u.return;
              }
          }
          var S = e.current;
          for (H = S; H !== null;) {
            h = H;
            var E = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && E !== null) ((E.return = h), (H = E));
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
                  } catch (b) {
                    Ee(v, v.return, b);
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
          if (((ae = a), rn(), Mt && typeof Mt.onPostCommitFiberRoot == "function"))
            try {
              Mt.onPostCommitFiberRoot(Ai, e);
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
  function rd(e, t, r) {
    ((t = sr(r, t)),
      (t = Sf(e, t, 1)),
      (e = on(e, t, 1)),
      (t = Ye()),
      e !== null && (Nr(e, 1, t), nt(e, t)));
  }
  function Ee(e, t, r) {
    if (e.tag === 3) rd(e, e, r);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          rd(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" && (an === null || !an.has(o)))
          ) {
            ((e = sr(r, e)),
              (e = kf(t, e, 1)),
              (t = on(t, e, 1)),
              (e = Ye()),
              t !== null && (Nr(t, 1, e), nt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ry(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & r),
      _e === e &&
        (Ie & r) === r &&
        (Le === 4 || (Le === 3 && (Ie & 130023424) === Ie && 500 > Re() - _l)
          ? Mn(e, 0)
          : (Vl |= r)),
      nt(e, t));
  }
  function id(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Di), (Di <<= 1), (Di & 130023424) === 0 && (Di = 4194304)));
    var r = Ye();
    ((e = Ut(e, t)), e !== null && (Nr(e, t, r), nt(e, r)));
  }
  function iy(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), id(e, r));
  }
  function sy(e, t) {
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
    (o !== null && o.delete(t), id(e, r));
  }
  var sd;
  sd = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ze.current) et = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((et = !1), Gg(e, t, r));
        et = (e.flags & 131072) !== 0;
      }
    else ((et = !1), Se && (t.flags & 1048576) !== 0 && Oc(t, Ji, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (ps(e, t), (e = t.pendingProps));
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
              Je(o) ? ((u = !0), Xi(t)) : (u = !1),
              (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              sl(t),
              (a.updater = ds),
              (t.stateNode = a),
              (a._reactInternals = t),
              xl(t, o, e, r),
              (t = Pl(null, t, o, !0, u, r)))
            : ((t.tag = 0), Se && u && Yo(t), be(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (ps(e, t),
            (e = t.pendingProps),
            (a = o._init),
            (o = a(o._payload)),
            (t.type = o),
            (a = t.tag = ly(o)),
            (e = Tt(o, e)),
            a)
          ) {
            case 0:
              t = kl(null, t, o, e, r);
              break e;
            case 1:
              t = Df(null, t, o, e, r);
              break e;
            case 11:
              t = Ef(null, t, o, e, r);
              break e;
            case 14:
              t = Nf(null, t, o, Tt(o.type, e), r);
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
          Df(e, t, o, a, r)
        );
      case 3:
        e: {
          if ((jf(t), e === null)) throw Error(s(387));
          ((o = t.pendingProps),
            (u = t.memoizedState),
            (a = u.element),
            Gc(e, t),
            ss(t, o, null, r));
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
              ((a = sr(Error(s(423)), t)), (t = Lf(e, t, o, r, a)));
              break e;
            } else if (o !== a) {
              ((a = sr(Error(s(424)), t)), (t = Lf(e, t, o, r, a)));
              break e;
            } else
              for (
                at = en(t.stateNode.containerInfo.firstChild),
                  lt = t,
                  Se = !0,
                  Pt = null,
                  r = Hc(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((er(), o === a)) {
              t = $t(e, t, r);
              break e;
            }
            be(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Yc(t),
          e === null && Zo(t),
          (o = t.type),
          (a = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = a.children),
          $o(o, a) ? (h = null) : u !== null && $o(o, u) && (t.flags |= 32),
          Mf(e, t),
          be(e, t, h, r),
          t.child
        );
      case 6:
        return (e === null && Zo(t), null);
      case 13:
        return Vf(e, t, r);
      case 4:
        return (
          ol(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = tr(t, null, o, r)) : be(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Tt(o, a)),
          Ef(e, t, o, a, r)
        );
      case 7:
        return (be(e, t, t.pendingProps, r), t.child);
      case 8:
        return (be(e, t, t.pendingProps.children, r), t.child);
      case 12:
        return (be(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (a = t.pendingProps),
            (u = t.memoizedProps),
            (h = a.value),
            me(ns, o._currentValue),
            (o._currentValue = h),
            u !== null)
          )
            if (kt(u.value, h)) {
              if (u.children === a.children && !Ze.current) {
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
                        var N = u.updateQueue;
                        if (N !== null) {
                          N = N.shared;
                          var j = N.pending;
                          (j === null ? (w.next = w) : ((w.next = j.next), (j.next = w)),
                            (N.pending = w));
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
          (be(e, t, a.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (o = t.pendingProps.children),
          rr(t, r),
          (a = pt(a)),
          (o = o(a)),
          (t.flags |= 1),
          be(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (a = Tt(o, t.pendingProps)), (a = Tt(o.type, a)), Nf(e, t, o, a, r));
      case 15:
        return Rf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Tt(o, a)),
          ps(e, t),
          (t.tag = 1),
          Je(o) ? ((e = !0), Xi(t)) : (e = !1),
          rr(t, r),
          xf(t, o, a),
          xl(t, o, a, r),
          Pl(null, t, o, !0, e, r)
        );
      case 19:
        return Ff(e, t, r);
      case 22:
        return Af(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function od(e, t) {
    return Iu(e, t);
  }
  function oy(e, t, r, o) {
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
    return new oy(e, t, r, o);
  }
  function $l(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ly(e) {
    if (typeof e == "function") return $l(e) ? 1 : 0;
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
  function Cs(e, t, r, o, a, u) {
    var h = 2;
    if (((o = e), typeof e == "function")) $l(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case le:
          return jn(r.children, a, u, t);
        case X:
          ((h = 8), (a |= 8));
          break;
        case ge:
          return ((e = yt(12, r, t, a | 2)), (e.elementType = ge), (e.lanes = u), e);
        case Ge:
          return ((e = yt(13, r, t, a)), (e.elementType = Ge), (e.lanes = u), e);
        case qe:
          return ((e = yt(19, r, t, a)), (e.elementType = qe), (e.lanes = u), e);
        case ie:
          return Es(r, a, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ce:
                h = 10;
                break e;
              case Xe:
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
  function jn(e, t, r, o) {
    return ((e = yt(7, e, o, t)), (e.lanes = r), e);
  }
  function Es(e, t, r, o) {
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
  function ay(e, t, r, o, a) {
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
      (e = new ay(e, t, r, v, w)),
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
  function uy(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ee,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function ld(e) {
    if (!e) return nn;
    e = e._reactInternals;
    e: {
      if (wn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Je(t.type)) {
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
      if (Je(r)) return Vc(e, r, t);
    }
    return t;
  }
  function ad(e, t, r, o, a, u, h, v, w) {
    return (
      (e = Gl(r, o, !0, e, a, u, h, v, w)),
      (e.context = ld(null)),
      (r = e.current),
      (o = Ye()),
      (a = cn(r)),
      (u = Wt(o, a)),
      (u.callback = t ?? null),
      on(r, u, a),
      (e.current.lanes = a),
      Nr(e, a, o),
      nt(e, o),
      e
    );
  }
  function Ns(e, t, r, o) {
    var a = t.current,
      u = Ye(),
      h = cn(a);
    return (
      (r = ld(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Wt(u, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = on(a, t, h)),
      e !== null && (Nt(e, a, h, u), is(e, a, h)),
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
  function ud(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Ql(e, t) {
    (ud(e, t), (e = e.alternate) && ud(e, t));
  }
  function cy() {
    return null;
  }
  var cd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function bl(e) {
    this._internalRoot = e;
  }
  ((As.prototype.render = bl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Ns(e, t, null, null);
    }),
    (As.prototype.unmount = bl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (An(function () {
            Ns(null, e, null, null);
          }),
            (t[Ot] = null));
        }
      }));
  function As(e) {
    this._internalRoot = e;
  }
  As.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Gu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < qt.length && t !== 0 && t < qt[r].priority; r++);
      (qt.splice(r, 0, e), r === 0 && Yu(e));
    }
  };
  function Yl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ms(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function fd() {}
  function fy(e, t, r, o, a) {
    if (a) {
      if (typeof o == "function") {
        var u = o;
        o = function () {
          var N = Rs(h);
          u.call(N);
        };
      }
      var h = ad(t, o, e, 0, null, !1, !1, "", fd);
      return (
        (e._reactRootContainer = h),
        (e[Ot] = h.current),
        Ur(e.nodeType === 8 ? e.parentNode : e),
        An(),
        h
      );
    }
    for (; (a = e.lastChild);) e.removeChild(a);
    if (typeof o == "function") {
      var v = o;
      o = function () {
        var N = Rs(w);
        v.call(N);
      };
    }
    var w = Gl(e, 0, !1, null, null, !1, !1, "", fd);
    return (
      (e._reactRootContainer = w),
      (e[Ot] = w.current),
      Ur(e.nodeType === 8 ? e.parentNode : e),
      An(function () {
        Ns(t, w, r, o);
      }),
      w
    );
  }
  function Ds(e, t, r, o, a) {
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
      Ns(t, h, e, a);
    } else h = fy(r, t, e, a, o);
    return Rs(h);
  }
  ((Hu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Er(t.pendingLanes);
          r !== 0 && (xo(t, r | 1), nt(t, Re()), (ae & 6) === 0 && ((ar = Re() + 500), rn()));
        }
        break;
      case 13:
        (An(function () {
          var o = Ut(e, 1);
          if (o !== null) {
            var a = Ye();
            Nt(o, e, 1, a);
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
          Nt(t, e, 134217728, r);
        }
        Ql(e, 134217728);
      }
    }),
    (Ku = function (e) {
      if (e.tag === 13) {
        var t = cn(e),
          r = Ut(e, t);
        if (r !== null) {
          var o = Ye();
          Nt(r, e, t, o);
        }
        Ql(e, t);
      }
    }),
    (Gu = function () {
      return he;
    }),
    (Qu = function (e, t) {
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
                var a = bi(o);
                if (!a) throw Error(s(90));
                (yu(o), ro(o, a));
              }
            }
          }
          break;
        case "textarea":
          ku(e, r);
          break;
        case "select":
          ((t = r.value), t != null && zn(e, !!r.multiple, t, !1));
      }
    }),
    (Du = Bl),
    (ju = An));
  var dy = { usingClientEntryPoint: !1, Events: [Hr, Yn, bi, Au, Mu, Bl] },
    ii = {
      findFiberByHostInstance: Sn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    hy = {
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
      currentDispatcherRef: Y.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Fu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: ii.findFiberByHostInstance || cy,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!js.isDisabled && js.supportsFiber)
      try {
        ((Ai = js.inject(hy)), (Mt = js));
      } catch {}
  }
  return (
    (rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dy),
    (rt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Yl(t)) throw Error(s(200));
      return uy(e, t, null, r);
    }),
    (rt.createRoot = function (e, t) {
      if (!Yl(e)) throw Error(s(299));
      var r = !1,
        o = "",
        a = cd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Gl(e, 1, !1, null, null, r, !1, o, a)),
        (e[Ot] = t.current),
        Ur(e.nodeType === 8 ? e.parentNode : e),
        new bl(t)
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
      return ((e = Fu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (rt.flushSync = function (e) {
      return An(e);
    }),
    (rt.hydrate = function (e, t, r) {
      if (!Ms(t)) throw Error(s(200));
      return Ds(null, e, t, !0, r);
    }),
    (rt.hydrateRoot = function (e, t, r) {
      if (!Yl(e)) throw Error(s(405));
      var o = (r != null && r.hydratedSources) || null,
        a = !1,
        u = "",
        h = cd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (h = r.onRecoverableError)),
        (t = ad(t, null, e, 1, r ?? null, a, !1, u, h)),
        (e[Ot] = t.current),
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
    (rt.render = function (e, t, r) {
      if (!Ms(t)) throw Error(s(200));
      return Ds(null, e, t, !1, r);
    }),
    (rt.unmountComponentAtNode = function (e) {
      if (!Ms(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (An(function () {
            Ds(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ot] = null));
            });
          }),
          !0)
        : !1;
    }),
    (rt.unstable_batchedUpdates = Bl),
    (rt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!Ms(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Ds(e, t, r, !1, o);
    }),
    (rt.version = "18.3.1-next-f1338f8080-20240426"),
    rt
  );
}
var xd;
function Sy() {
  if (xd) return Zl.exports;
  xd = 1;
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
  return (n(), (Zl.exports = wy()), Zl.exports);
}
var wd;
function ky() {
  if (wd) return Ls;
  wd = 1;
  var n = Sy();
  return ((Ls.createRoot = n.createRoot), (Ls.hydrateRoot = n.hydrateRoot), Ls);
}
var Py = ky();
function mn(n) {
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
function _a(n, i = "smooth") {
  if (typeof document > "u") return !1;
  const s = document.getElementById(n);
  return s ? (s.scrollIntoView({ behavior: i, block: "start" }), !0) : !1;
}
function ga(n, i = "smooth") {
  if (typeof window > "u") return;
  const s = mn(n);
  if (_a(n, i)) {
    window.history.replaceState(null, "", s);
    return;
  }
  window.location.hash = s;
}
function Ys(n) {
  typeof window > "u" || (window.location.hash = Oh(n));
}
function Fa() {
  const n = Va();
  return (n == null ? void 0 : n.kind) === "route" ? n.path : "";
}
function Ty(n) {
  return n.kind === "route" ? Oh(n.path) : mn(n.id);
}
function Cy(n, i) {
  if ((n.preventDefault(), i.kind === "route")) {
    Ys(i.path);
    return;
  }
  ga(i.id);
}
function Ih() {
  if (typeof window > "u") return;
  const n = Va();
  (n == null ? void 0 : n.kind) === "section" && requestAnimationFrame(() => _a(n.id, "auto"));
}
function zh(n, i) {
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
    (_a(l.id, "smooth"), n(""));
  };
  return (
    s(),
    window.addEventListener("hashchange", s),
    () => window.removeEventListener("hashchange", s)
  );
}
function Ey(n = "") {
  const [i, s] = z.useState(() => (typeof window < "u" ? Fa() : n));
  return (z.useEffect(() => zh(s), []), i || n);
}
function Ny({ routes: n, defaultRoute: i = "", className: s }) {
  const l = Ey(i);
  z.useEffect(() => {
    Ih();
  }, []);
  const c = l in n ? l : i,
    d = n[c] ?? n[i];
  return T.jsx("div", { className: s, children: d });
}
const Oa = z.createContext({});
function Ia(n) {
  const i = z.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const Xs = z.createContext(null),
  za = z.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
class Ry extends z.Component {
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
function Ay({ children: n, isPresent: i }) {
  const s = z.useId(),
    l = z.useRef(null),
    c = z.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: d } = z.useContext(za);
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
    T.jsx(Ry, { isPresent: i, childRef: l, sizeRef: c, children: z.cloneElement(n, { ref: l }) })
  );
}
const My = ({
  children: n,
  initial: i,
  isPresent: s,
  onExitComplete: l,
  custom: c,
  presenceAffectsLayout: d,
  mode: f,
}) => {
  const p = Ia(Dy),
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
    f === "popLayout" && (n = T.jsx(Ay, { isPresent: s, children: n })),
    T.jsx(Xs.Provider, { value: y, children: n })
  );
};
function Dy() {
  return new Map();
}
function Bh(n = !0) {
  const i = z.useContext(Xs);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: l, register: c } = i,
    d = z.useId();
  z.useEffect(() => {
    n && c(d);
  }, [n]);
  const f = z.useCallback(() => n && l && l(d), [d, l, n]);
  return !s && l ? [!1, f] : [!0];
}
const Vs = (n) => n.key || "";
function Sd(n) {
  const i = [];
  return (
    z.Children.forEach(n, (s) => {
      z.isValidElement(s) && i.push(s);
    }),
    i
  );
}
const Ba = typeof window < "u",
  Uh = Ba ? z.useLayoutEffect : z.useEffect,
  jy = ({
    children: n,
    custom: i,
    initial: s = !0,
    onExitComplete: l,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: f = !1,
  }) => {
    const [p, m] = Bh(f),
      g = z.useMemo(() => Sd(n), [n]),
      y = f && !p ? [] : g.map(Vs),
      x = z.useRef(!0),
      k = z.useRef(g),
      R = Ia(() => new Map()),
      [_, A] = z.useState(g),
      [L, O] = z.useState(g);
    Uh(() => {
      ((x.current = !1), (k.current = g));
      for (let Y = 0; Y < L.length; Y++) {
        const B = Vs(L[Y]);
        y.includes(B) ? R.delete(B) : R.get(B) !== !0 && R.set(B, !1);
      }
    }, [L, y.length, y.join("-")]);
    const W = [];
    if (g !== _) {
      let Y = [...g];
      for (let B = 0; B < L.length; B++) {
        const ee = L[B],
          le = Vs(ee);
        y.includes(le) || (Y.splice(B, 0, ee), W.push(ee));
      }
      (d === "wait" && W.length && (Y = W), O(Sd(Y)), A(g));
      return;
    }
    const { forceRender: K } = z.useContext(Oa);
    return T.jsx(T.Fragment, {
      children: L.map((Y) => {
        const B = Vs(Y),
          ee = f && !p ? !1 : g === L || y.includes(B),
          le = () => {
            if (R.has(B)) R.set(B, !0);
            else return;
            let X = !0;
            (R.forEach((ge) => {
              ge || (X = !1);
            }),
              X && (K == null || K(), O(k.current), f && (m == null || m()), l && l()));
          };
        return T.jsx(
          My,
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
let Wh = ct;
function Ua(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const mr = (n, i, s) => {
    const l = i - n;
    return l === 0 ? 1 : (s - n) / l;
  },
  Kt = (n) => n * 1e3,
  Gt = (n) => n / 1e3,
  Ly = { useManualTiming: !1 };
function Vy(n) {
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
const _s = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  _y = 40;
function $h(n, i) {
  let s = !1,
    l = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = _s.reduce((O, W) => ((O[W] = Vy(d)), O), {}),
    { read: p, resolveKeyframes: m, update: g, preRender: y, render: x, postRender: k } = f,
    R = () => {
      const O = performance.now();
      ((s = !1),
        (c.delta = l ? 1e3 / 60 : Math.max(Math.min(O - c.timestamp, _y), 1)),
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
    _ = () => {
      ((s = !0), (l = !0), c.isProcessing || n(R));
    };
  return {
    schedule: _s.reduce((O, W) => {
      const K = f[W];
      return ((O[W] = (Y, B = !1, ee = !1) => (s || _(), K.schedule(Y, B, ee))), O);
    }, {}),
    cancel: (O) => {
      for (let W = 0; W < _s.length; W++) f[_s[W]].cancel(O);
    },
    state: c,
    steps: f,
  };
}
const {
    schedule: xe,
    cancel: gn,
    state: ze,
    steps: ta,
  } = $h(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ct, !0),
  Hh = z.createContext({ strict: !1 }),
  kd = {
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
  gr = {};
for (const n in kd) gr[n] = { isEnabled: (i) => kd[n].some((s) => !!i[s]) };
function Fy(n) {
  for (const i in n) gr[i] = { ...gr[i], ...n[i] };
}
const Oy = new Set([
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
    Oy.has(n)
  );
}
let Kh = (n) => !Ws(n);
function Iy(n) {
  n && (Kh = (i) => (i.startsWith("on") ? !Ws(i) : n(i)));
}
try {
  Iy(require("@emotion/is-prop-valid").default);
} catch {}
function zy(n, i, s) {
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
function By(n) {
  if (typeof Proxy > "u") return n;
  const i = new Map(),
    s = (...l) => n(...l);
  return new Proxy(s, {
    get: (l, c) => (c === "create" ? n : (i.has(c) || i.set(c, n(c)), i.get(c))),
  });
}
const qs = z.createContext({});
function pi(n) {
  return typeof n == "string" || Array.isArray(n);
}
function Zs(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
const Wa = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  $a = ["initial", ...Wa];
function Js(n) {
  return Zs(n.animate) || $a.some((i) => pi(n[i]));
}
function Gh(n) {
  return !!(Js(n) || n.variants);
}
function Uy(n, i) {
  if (Js(n)) {
    const { initial: s, animate: l } = n;
    return { initial: s === !1 || pi(s) ? s : void 0, animate: pi(l) ? l : void 0 };
  }
  return n.inherit !== !1 ? i : {};
}
function Wy(n) {
  const { initial: i, animate: s } = Uy(n, z.useContext(qs));
  return z.useMemo(() => ({ initial: i, animate: s }), [Pd(i), Pd(s)]);
}
function Pd(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const $y = Symbol.for("motionComponentSymbol");
function cr(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function Hy(n, i, s) {
  return z.useCallback(
    (l) => {
      (l && n.onMount && n.onMount(l),
        i && (l ? i.mount(l) : i.unmount()),
        s && (typeof s == "function" ? s(l) : cr(s) && (s.current = l)));
    },
    [i],
  );
}
const Ha = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Ky = "framerAppearId",
  Qh = "data-" + Ha(Ky),
  { schedule: Ka } = $h(queueMicrotask, !1),
  bh = z.createContext({});
function Gy(n, i, s, l, c) {
  var d, f;
  const { visualElement: p } = z.useContext(qs),
    m = z.useContext(Hh),
    g = z.useContext(Xs),
    y = z.useContext(za).reducedMotion,
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
    R = z.useContext(bh);
  k && !k.projection && c && (k.type === "html" || k.type === "svg") && Qy(x.current, s, c, R);
  const _ = z.useRef(!1);
  z.useInsertionEffect(() => {
    k && _.current && k.update(s, g);
  });
  const A = s[Qh],
    L = z.useRef(
      !!A &&
        !(!((d = window.MotionHandoffIsComplete) === null || d === void 0) && d.call(window, A)) &&
        ((f = window.MotionHasOptimisedAnimation) === null || f === void 0
          ? void 0
          : f.call(window, A)),
    );
  return (
    Uh(() => {
      k &&
        ((_.current = !0),
        (window.MotionIsMounted = !0),
        k.updateFeatures(),
        Ka.render(k.render),
        L.current && k.animationState && k.animationState.animateChanges());
    }),
    z.useEffect(() => {
      k &&
        (!L.current && k.animationState && k.animationState.animateChanges(),
        L.current &&
          (queueMicrotask(() => {
            var O;
            (O = window.MotionHandoffMarkAsComplete) === null || O === void 0 || O.call(window, A);
          }),
          (L.current = !1)));
    }),
    k
  );
}
function Qy(n, i, s, l) {
  const { layoutId: c, layout: d, drag: f, dragConstraints: p, layoutScroll: m, layoutRoot: g } = i;
  ((n.projection = new s(n.latestValues, i["data-framer-portal-id"] ? void 0 : Yh(n.parent))),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (p && cr(p)),
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
function by({
  preloadedFeatures: n,
  createVisualElement: i,
  useRender: s,
  useVisualState: l,
  Component: c,
}) {
  var d, f;
  n && Fy(n);
  function p(g, y) {
    let x;
    const k = { ...z.useContext(za), ...g, layoutId: Yy(g) },
      { isStatic: R } = k,
      _ = Wy(g),
      A = l(g, R);
    if (!R && Ba) {
      Xy();
      const L = qy(k);
      ((x = L.MeasureLayout), (_.visualElement = Gy(c, A, k, i, L.ProjectionNode)));
    }
    return T.jsxs(qs.Provider, {
      value: _,
      children: [
        x && _.visualElement ? T.jsx(x, { visualElement: _.visualElement, ...k }) : null,
        s(c, g, Hy(A, _.visualElement, y), A, R, _.visualElement),
      ],
    });
  }
  p.displayName = `motion.${typeof c == "string" ? c : `create(${(f = (d = c.displayName) !== null && d !== void 0 ? d : c.name) !== null && f !== void 0 ? f : ""})`}`;
  const m = z.forwardRef(p);
  return ((m[$y] = c), m);
}
function Yy({ layoutId: n }) {
  const i = z.useContext(Oa).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function Xy(n, i) {
  z.useContext(Hh).strict;
}
function qy(n) {
  const { drag: i, layout: s } = gr;
  if (!i && !s) return {};
  const l = { ...i, ...s };
  return {
    MeasureLayout:
      (i != null && i.isEnabled(n)) || (s != null && s.isEnabled(n)) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode,
  };
}
const Zy = [
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
function Ga(n) {
  return typeof n != "string" || n.includes("-") ? !1 : !!(Zy.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function Td(n) {
  const i = [{}, {}];
  return (
    n == null ||
      n.values.forEach((s, l) => {
        ((i[0][l] = s.get()), (i[1][l] = s.getVelocity()));
      }),
    i
  );
}
function Qa(n, i, s, l) {
  if (typeof i == "function") {
    const [c, d] = Td(l);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  if ((typeof i == "string" && (i = n.variants && n.variants[i]), typeof i == "function")) {
    const [c, d] = Td(l);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  return i;
}
const ya = (n) => Array.isArray(n),
  Jy = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
  ev = (n) => (ya(n) ? n[n.length - 1] || 0 : n),
  Ke = (n) => !!(n && n.getVelocity);
function zs(n) {
  const i = Ke(n) ? n.get() : n;
  return Jy(i) ? i.toValue() : i;
}
function tv({ scrapeMotionValuesFromProps: n, createRenderState: i, onUpdate: s }, l, c, d) {
  const f = { latestValues: nv(l, c, d, n), renderState: i() };
  return (
    s && ((f.onMount = (p) => s({ props: l, current: p, ...f })), (f.onUpdate = (p) => s(p))),
    f
  );
}
const Xh = (n) => (i, s) => {
  const l = z.useContext(qs),
    c = z.useContext(Xs),
    d = () => tv(n, i, l, c);
  return s ? d() : Ia(d);
};
function nv(n, i, s, l) {
  const c = {},
    d = l(n, {});
  for (const k in d) c[k] = zs(d[k]);
  let { initial: f, animate: p } = n;
  const m = Js(n),
    g = Gh(n);
  i &&
    g &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let y = s ? s.initial === !1 : !1;
  y = y || f === !1;
  const x = y ? p : f;
  if (x && typeof x != "boolean" && !Zs(x)) {
    const k = Array.isArray(x) ? x : [x];
    for (let R = 0; R < k.length; R++) {
      const _ = Qa(n, k[R]);
      if (_) {
        const { transitionEnd: A, transition: L, ...O } = _;
        for (const W in O) {
          let K = O[W];
          if (Array.isArray(K)) {
            const Y = y ? K.length - 1 : 0;
            K = K[Y];
          }
          K !== null && (c[W] = K);
        }
        for (const W in A) c[W] = A[W];
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
  In = new Set(vr),
  qh = (n) => (i) => typeof i == "string" && i.startsWith(n),
  Zh = qh("--"),
  rv = qh("var(--"),
  ba = (n) => (rv(n) ? iv.test(n.split("/*")[0].trim()) : !1),
  iv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Jh = (n, i) => (i && typeof n == "number" ? i.transform(n) : n),
  Qt = (n, i, s) => (s > i ? i : s < n ? n : s),
  xr = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  mi = { ...xr, transform: (n) => Qt(0, 1, n) },
  Fs = { ...xr, default: 1 },
  xi = (n) => ({
    test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  pn = xi("deg"),
  _t = xi("%"),
  te = xi("px"),
  sv = xi("vh"),
  ov = xi("vw"),
  Cd = { ..._t, parse: (n) => _t.parse(n) / 100, transform: (n) => _t.transform(n * 100) },
  lv = {
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
  av = {
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
    opacity: mi,
    originX: Cd,
    originY: Cd,
    originZ: te,
  },
  Ed = { ...xr, transform: Math.round },
  Ya = { ...lv, ...av, zIndex: Ed, size: te, fillOpacity: mi, strokeOpacity: mi, numOctaves: Ed },
  uv = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  cv = vr.length;
function fv(n, i, s) {
  let l = "",
    c = !0;
  for (let d = 0; d < cv; d++) {
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
      const g = Jh(p, Ya[f]);
      if (!m) {
        c = !1;
        const y = uv[f] || f;
        l += `${y}(${g}) `;
      }
      s && (i[f] = g);
    }
  }
  return ((l = l.trim()), s ? (l = s(i, c ? "" : l)) : c && (l = "none"), l);
}
function Xa(n, i, s) {
  const { style: l, vars: c, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const g = i[m];
    if (In.has(m)) {
      f = !0;
      continue;
    } else if (Zh(m)) {
      c[m] = g;
      continue;
    } else {
      const y = Jh(g, Ya[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = y)) : (l[m] = y);
    }
  }
  if (
    (i.transform ||
      (f || s ? (l.transform = fv(i, n.transform, s)) : l.transform && (l.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: g = "50%", originZ: y = 0 } = d;
    l.transformOrigin = `${m} ${g} ${y}`;
  }
}
const dv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  hv = { offset: "strokeDashoffset", array: "strokeDasharray" };
function pv(n, i, s = 1, l = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? dv : hv;
  n[d.offset] = te.transform(-l);
  const f = te.transform(i),
    p = te.transform(s);
  n[d.array] = `${f} ${p}`;
}
function Nd(n, i, s) {
  return typeof n == "string" ? n : te.transform(i + s * n);
}
function mv(n, i, s) {
  const l = Nd(i, n.x, n.width),
    c = Nd(s, n.y, n.height);
  return `${l} ${c}`;
}
function qa(
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
  if ((Xa(n, g, x), y)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: k, style: R, dimensions: _ } = n;
  (k.transform && (_ && (R.transform = k.transform), delete k.transform),
    _ &&
      (c !== void 0 || d !== void 0 || R.transform) &&
      (R.transformOrigin = mv(_, c !== void 0 ? c : 0.5, d !== void 0 ? d : 0.5)),
    i !== void 0 && (k.x = i),
    s !== void 0 && (k.y = s),
    l !== void 0 && (k.scale = l),
    f !== void 0 && pv(k, f, p, m, !1));
}
const Za = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  ep = () => ({ ...Za(), attrs: {} }),
  Ja = (n) => typeof n == "string" && n.toLowerCase() === "svg";
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
  for (const c in i.attrs) n.setAttribute(np.has(c) ? c : Ha(c), i.attrs[c]);
}
const $s = {};
function gv(n) {
  Object.assign($s, n);
}
function ip(n, { layout: i, layoutId: s }) {
  return (
    In.has(n) || n.startsWith("origin") || ((i || s !== void 0) && (!!$s[n] || n === "opacity"))
  );
}
function eu(n, i, s) {
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
  const l = eu(n, i, s);
  for (const c in n)
    if (Ke(n[c]) || Ke(i[c])) {
      const d = vr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      l[d] = n[c];
    }
  return l;
}
function yv(n, i) {
  try {
    i.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect();
  } catch {
    i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Rd = ["x", "y", "width", "height", "cx", "cy", "r"],
  vv = {
    useVisualState: Xh({
      scrapeMotionValuesFromProps: sp,
      createRenderState: ep,
      onUpdate: ({ props: n, prevProps: i, current: s, renderState: l, latestValues: c }) => {
        if (!s) return;
        let d = !!n.drag;
        if (!d) {
          for (const p in c)
            if (In.has(p)) {
              d = !0;
              break;
            }
        }
        if (!d) return;
        let f = !i;
        if (i)
          for (let p = 0; p < Rd.length; p++) {
            const m = Rd[p];
            n[m] !== i[m] && (f = !0);
          }
        f &&
          xe.read(() => {
            (yv(s, l),
              xe.render(() => {
                (qa(l, c, Ja(s.tagName), n.transformTemplate), rp(s, l));
              }));
          });
      },
    }),
  },
  xv = { useVisualState: Xh({ scrapeMotionValuesFromProps: eu, createRenderState: Za }) };
function op(n, i, s) {
  for (const l in i) !Ke(i[l]) && !ip(l, s) && (n[l] = i[l]);
}
function wv({ transformTemplate: n }, i) {
  return z.useMemo(() => {
    const s = Za();
    return (Xa(s, i, n), Object.assign({}, s.vars, s.style));
  }, [i]);
}
function Sv(n, i) {
  const s = n.style || {},
    l = {};
  return (op(l, s, n), Object.assign(l, wv(n, i)), l);
}
function kv(n, i) {
  const s = {},
    l = Sv(n, i);
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
function Pv(n, i, s, l) {
  const c = z.useMemo(() => {
    const d = ep();
    return (qa(d, i, Ja(l), n.transformTemplate), { ...d.attrs, style: { ...d.style } });
  }, [i]);
  if (n.style) {
    const d = {};
    (op(d, n.style, n), (c.style = { ...d, ...c.style }));
  }
  return c;
}
function Tv(n = !1) {
  return (s, l, c, { latestValues: d }, f) => {
    const m = (Ga(s) ? Pv : kv)(l, d, f, s),
      g = zy(l, typeof s == "string", n),
      y = s !== z.Fragment ? { ...g, ...m, ref: c } : {},
      { children: x } = l,
      k = z.useMemo(() => (Ke(x) ? x.get() : x), [x]);
    return z.createElement(s, { ...y, children: k });
  };
}
function Cv(n, i) {
  return function (l, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Ga(l) ? vv : xv),
      preloadedFeatures: n,
      useRender: Tv(c),
      createVisualElement: i,
      Component: l,
    };
    return by(f);
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
  return Qa(l, i, s !== void 0 ? s : l.custom, n);
}
const Ev = Ua(() => window.ScrollTimeline !== void 0);
class Nv {
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
      if (Ev() && c.attachTimeline) return c.attachTimeline(i);
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
class Rv extends Nv {
  then(i, s) {
    return Promise.all(this.animations).then(i).catch(s);
  }
}
function tu(n, i) {
  return n ? n[i] || n.default || n : void 0;
}
const va = 2e4;
function ap(n) {
  let i = 0;
  const s = 50;
  let l = n.next(i);
  for (; !l.done && i < va;) ((i += s), (l = n.next(i)));
  return i >= va ? 1 / 0 : i;
}
function nu(n) {
  return typeof n == "function";
}
function Ad(n, i) {
  ((n.timeline = i), (n.onfinish = null));
}
const ru = (n) => Array.isArray(n) && typeof n[0] == "number",
  Av = { linearEasing: void 0 };
function Mv(n, i) {
  const s = Ua(n);
  return () => {
    var l;
    return (l = Av[i]) !== null && l !== void 0 ? l : s();
  };
}
const Hs = Mv(() => {
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
    for (let d = 0; d < c; d++) l += n(mr(0, c - 1, d)) + ", ";
    return `linear(${l.substring(0, l.length - 2)})`;
  };
function cp(n) {
  return !!(
    (typeof n == "function" && Hs()) ||
    !n ||
    (typeof n == "string" && (n in xa || Hs())) ||
    ru(n) ||
    (Array.isArray(n) && n.every(cp))
  );
}
const li = ([n, i, s, l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`,
  xa = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: li([0, 0.65, 0.55, 1]),
    circOut: li([0.55, 0, 1, 0.45]),
    backIn: li([0.31, 0.01, 0.66, -0.59]),
    backOut: li([0.33, 1.53, 0.69, 0.99]),
  };
function fp(n, i) {
  if (n)
    return typeof n == "function" && Hs()
      ? up(n, i)
      : ru(n)
        ? li(n)
        : Array.isArray(n)
          ? n.map((s) => fp(s, i) || xa.easeOut)
          : xa[n];
}
const Rt = { x: !1, y: !1 };
function dp() {
  return Rt.x || Rt.y;
}
function Dv(n, i, s) {
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
  const s = Dv(n),
    l = new AbortController(),
    c = { passive: !0, ...i, signal: l.signal };
  return [s, c, () => l.abort()];
}
function Md(n) {
  return (i) => {
    i.pointerType === "touch" || dp() || n(i);
  };
}
function jv(n, i, s = {}) {
  const [l, c, d] = hp(n, s),
    f = Md((p) => {
      const { target: m } = p,
        g = i(p);
      if (typeof g != "function" || !m) return;
      const y = Md((x) => {
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
  iu = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  Lv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Vv(n) {
  return Lv.has(n.tagName) || n.tabIndex !== -1;
}
const ai = new WeakSet();
function Dd(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function na(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const _v = (n, i) => {
  const s = n.currentTarget;
  if (!s) return;
  const l = Dd(() => {
    if (ai.has(s)) return;
    na(s, "down");
    const c = Dd(() => {
        na(s, "up");
      }),
      d = () => na(s, "cancel");
    (s.addEventListener("keyup", c, i), s.addEventListener("blur", d, i));
  });
  (s.addEventListener("keydown", l, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", l), i));
};
function jd(n) {
  return iu(n) && !dp();
}
function Fv(n, i, s = {}) {
  const [l, c, d] = hp(n, s),
    f = (p) => {
      const m = p.currentTarget;
      if (!jd(p) || ai.has(m)) return;
      ai.add(m);
      const g = i(p),
        y = (R, _) => {
          (window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", k),
            !(!jd(R) || !ai.has(m)) &&
              (ai.delete(m), typeof g == "function" && g(R, { success: _ })));
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
      (!Vv(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0),
        (s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        p.addEventListener("focus", (g) => _v(g, c), c));
    }),
    d
  );
}
function Ov(n) {
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
const mp = new Set(["width", "height", "top", "left", "right", "bottom", ...vr]);
let Bs;
function Iv() {
  Bs = void 0;
}
const Ft = {
  now: () => (
    Bs === void 0 &&
      Ft.set(ze.isProcessing || Ly.useManualTiming ? ze.timestamp : performance.now()),
    Bs
  ),
  set: (n) => {
    ((Bs = n), queueMicrotask(Iv));
  },
};
function su(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function ou(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
class lu {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (su(this.subscriptions, i), () => ou(this.subscriptions, i));
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
const Ld = 30,
  zv = (n) => !isNaN(parseFloat(n));
class Bv {
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
      this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = zv(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new lu());
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Ld)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Ld);
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
function gi(n, i) {
  return new Bv(n, i);
}
function Uv(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, gi(s));
}
function Wv(n, i) {
  const s = eo(n, i);
  let { transitionEnd: l = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...l };
  for (const f in d) {
    const p = ev(d[f]);
    Uv(n, f, p);
  }
}
function $v(n) {
  return !!(Ke(n) && n.add);
}
function wa(n, i) {
  const s = n.getValue("willChange");
  if ($v(s)) return s.add(i);
}
function yp(n) {
  return n.props[Qh];
}
const vp = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  Hv = 1e-7,
  Kv = 12;
function Gv(n, i, s, l, c) {
  let d,
    f,
    p = 0;
  do ((f = i + (s - i) / 2), (d = vp(f, l, c) - n), d > 0 ? (s = f) : (i = f));
  while (Math.abs(d) > Hv && ++p < Kv);
  return f;
}
function wi(n, i, s, l) {
  if (n === i && s === l) return ct;
  const c = (d) => Gv(d, 0, 1, n, s);
  return (d) => (d === 0 || d === 1 ? d : vp(c(d), i, l));
}
const xp = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  wp = (n) => (i) => 1 - n(1 - i),
  Sp = wi(0.33, 1.53, 0.69, 0.99),
  au = wp(Sp),
  kp = xp(au),
  Pp = (n) => ((n *= 2) < 1 ? 0.5 * au(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))),
  uu = (n) => 1 - Math.sin(Math.acos(n)),
  Tp = wp(uu),
  Cp = xp(uu),
  Ep = (n) => /^0[^.\s]+$/u.test(n);
function Qv(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Ep(n) : !0;
}
const ci = (n) => Math.round(n * 1e5) / 1e5,
  cu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function bv(n) {
  return n == null;
}
const Yv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  fu = (n, i) => (s) =>
    !!(
      (typeof s == "string" && Yv.test(s) && s.startsWith(n)) ||
      (i && !bv(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  Np = (n, i, s) => (l) => {
    if (typeof l != "string") return l;
    const [c, d, f, p] = l.match(cu);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  Xv = (n) => Qt(0, 255, n),
  ra = { ...xr, transform: (n) => Math.round(Xv(n)) },
  Fn = {
    test: fu("rgb", "red"),
    parse: Np("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: s, alpha: l = 1 }) =>
      "rgba(" +
      ra.transform(n) +
      ", " +
      ra.transform(i) +
      ", " +
      ra.transform(s) +
      ", " +
      ci(mi.transform(l)) +
      ")",
  };
function qv(n) {
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
const Sa = { test: fu("#"), parse: qv, transform: Fn.transform },
  fr = {
    test: fu("hsl", "hue"),
    parse: Np("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: s, alpha: l = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      _t.transform(ci(i)) +
      ", " +
      _t.transform(ci(s)) +
      ", " +
      ci(mi.transform(l)) +
      ")",
  },
  He = {
    test: (n) => Fn.test(n) || Sa.test(n) || fr.test(n),
    parse: (n) => (Fn.test(n) ? Fn.parse(n) : fr.test(n) ? fr.parse(n) : Sa.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? Fn.transform(n) : fr.transform(n),
  },
  Zv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Jv(n) {
  var i, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(cu)) === null || i === void 0 ? void 0 : i.length) || 0) +
      (((s = n.match(Zv)) === null || s === void 0 ? void 0 : s.length) || 0) >
      0
  );
}
const Rp = "number",
  Ap = "color",
  e0 = "var",
  t0 = "var(",
  Vd = "${}",
  n0 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function yi(n) {
  const i = n.toString(),
    s = [],
    l = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      n0,
      (m) => (
        He.test(m)
          ? (l.color.push(d), c.push(Ap), s.push(He.parse(m)))
          : m.startsWith(t0)
            ? (l.var.push(d), c.push(e0), s.push(m))
            : (l.number.push(d), c.push(Rp), s.push(parseFloat(m))),
        ++d,
        Vd
      ),
    )
    .split(Vd);
  return { values: s, split: p, indexes: l, types: c };
}
function Mp(n) {
  return yi(n).values;
}
function Dp(n) {
  const { split: i, types: s } = yi(n),
    l = i.length;
  return (c) => {
    let d = "";
    for (let f = 0; f < l; f++)
      if (((d += i[f]), c[f] !== void 0)) {
        const p = s[f];
        p === Rp ? (d += ci(c[f])) : p === Ap ? (d += He.transform(c[f])) : (d += c[f]);
      }
    return d;
  };
}
const r0 = (n) => (typeof n == "number" ? 0 : n);
function i0(n) {
  const i = Mp(n);
  return Dp(n)(i.map(r0));
}
const yn = { test: Jv, parse: Mp, createTransformer: Dp, getAnimatableNone: i0 },
  s0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function o0(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [l] = s.match(cu) || [];
  if (!l) return n;
  const c = s.replace(l, "");
  let d = s0.has(i) ? 1 : 0;
  return (l !== s && (d *= 100), i + "(" + d + c + ")");
}
const l0 = /\b([a-z-]*)\(.*?\)/gu,
  ka = {
    ...yn,
    getAnimatableNone: (n) => {
      const i = n.match(l0);
      return i ? i.map(o0).join(" ") : n;
    },
  },
  a0 = {
    ...Ya,
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
    filter: ka,
    WebkitFilter: ka,
  },
  du = (n) => a0[n];
function jp(n, i) {
  let s = du(n);
  return (s !== ka && (s = yn), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0);
}
const u0 = new Set(["auto", "none", "0"]);
function c0(n, i, s) {
  let l = 0,
    c;
  for (; l < n.length && !c;) {
    const d = n[l];
    (typeof d == "string" && !u0.has(d) && yi(d).values.length && (c = n[l]), l++);
  }
  if (c && s) for (const d of i) n[d] = jp(s, c);
}
const _d = (n) => n === xr || n === te,
  Fd = (n, i) => parseFloat(n.split(", ")[i]),
  Od =
    (n, i) =>
    (s, { transform: l }) => {
      if (l === "none" || !l) return 0;
      const c = l.match(/^matrix3d\((.+)\)$/u);
      if (c) return Fd(c[1], i);
      {
        const d = l.match(/^matrix\((.+)\)$/u);
        return d ? Fd(d[1], n) : 0;
      }
    },
  f0 = new Set(["x", "y", "z"]),
  d0 = vr.filter((n) => !f0.has(n));
function h0(n) {
  const i = [];
  return (
    d0.forEach((s) => {
      const l = n.getValue(s);
      l !== void 0 && (i.push([s, l.get()]), l.set(s.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const yr = {
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: s = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(s),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: s = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(s),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: Od(4, 13),
  y: Od(5, 14),
};
yr.translateX = yr.x;
yr.translateY = yr.y;
const On = new Set();
let Pa = !1,
  Ta = !1;
function Lp() {
  if (Ta) {
    const n = Array.from(On).filter((l) => l.needsMeasurement),
      i = new Set(n.map((l) => l.element)),
      s = new Map();
    (i.forEach((l) => {
      const c = h0(l);
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
  ((Ta = !1), (Pa = !1), On.forEach((n) => n.complete()), On.clear());
}
function Vp() {
  On.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (Ta = !0));
  });
}
function p0() {
  (Vp(), Lp());
}
class hu {
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
        ? (On.add(this), Pa || ((Pa = !0), xe.read(Vp), xe.resolveKeyframes(Lp)))
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
      On.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), On.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const _p = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  m0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function g0(n) {
  const i = m0.exec(n);
  if (!i) return [,];
  const [, s, l, c] = i;
  return [`--${s ?? l}`, c];
}
function Fp(n, i, s = 1) {
  const [l, c] = g0(n);
  if (!l) return;
  const d = window.getComputedStyle(i).getPropertyValue(l);
  if (d) {
    const f = d.trim();
    return _p(f) ? parseFloat(f) : f;
  }
  return ba(c) ? Fp(c, i, s + 1) : c;
}
const Op = (n) => (i) => i.test(n),
  y0 = { test: (n) => n === "auto", parse: (n) => n },
  Ip = [xr, te, _t, pn, ov, sv, y0],
  Id = (n) => Ip.find(Op(n));
class zp extends hu {
  constructor(i, s, l, c, d) {
    super(i, s, l, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: l } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let m = 0; m < i.length; m++) {
      let g = i[m];
      if (typeof g == "string" && ((g = g.trim()), ba(g))) {
        const y = Fp(g, s.current);
        (y !== void 0 && (i[m] = y), m === i.length - 1 && (this.finalKeyframe = g));
      }
    }
    if ((this.resolveNoneKeyframes(), !mp.has(l) || i.length !== 2)) return;
    const [c, d] = i,
      f = Id(c),
      p = Id(d);
    if (f !== p)
      if (_d(f) && _d(p))
        for (let m = 0; m < i.length; m++) {
          const g = i[m];
          typeof g == "string" && (i[m] = parseFloat(g));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      l = [];
    for (let c = 0; c < i.length; c++) Qv(i[c]) && l.push(c);
    l.length && c0(i, l, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: l } = this;
    if (!i || !i.current) return;
    (l === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = yr[l](i.measureViewportBox(), window.getComputedStyle(i.current))),
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
    ((c[f] = yr[l](s.measureViewportBox(), window.getComputedStyle(s.current))),
      p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
      !((i = this.removedTransforms) === null || i === void 0) &&
        i.length &&
        this.removedTransforms.forEach(([m, g]) => {
          s.getValue(m).set(g);
        }),
      this.resolveNoneKeyframes());
  }
}
const zd = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" && (yn.test(n) || n === "0") && !n.startsWith("url("))
      );
function v0(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== i) return !0;
}
function x0(n, i, s, l) {
  const c = n[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = zd(c, i),
    p = zd(d, i);
  return !f || !p ? !1 : v0(n) || ((s === "spring" || nu(s)) && l);
}
const w0 = (n) => n !== null;
function to(n, { repeat: i, repeatType: s = "loop" }, l) {
  const c = n.filter(w0),
    d = i && s !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return !d || l === void 0 ? c[d] : l;
}
const S0 = 40;
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
      ? this.resolvedAt - this.createdAt > S0
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (!this._resolved && !this.hasAttemptedResolve && p0(), this._resolved);
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
    if (!g && !x0(i, l, c, d))
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
function ia(n, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n
  );
}
function k0({ hue: n, saturation: i, lightness: s, alpha: l }) {
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
function Ks(n, i) {
  return (s) => (s > 0 ? i : n);
}
const sa = (n, i, s) => {
    const l = n * n,
      c = s * (i * i - l) + l;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  P0 = [Sa, Fn, fr],
  T0 = (n) => P0.find((i) => i.test(n));
function Bd(n) {
  const i = T0(n);
  if (!i) return !1;
  let s = i.parse(n);
  return (i === fr && (s = k0(s)), s);
}
const Ud = (n, i) => {
    const s = Bd(n),
      l = Bd(i);
    if (!s || !l) return Ks(n, i);
    const c = { ...s };
    return (d) => (
      (c.red = sa(s.red, l.red, d)),
      (c.green = sa(s.green, l.green, d)),
      (c.blue = sa(s.blue, l.blue, d)),
      (c.alpha = Te(s.alpha, l.alpha, d)),
      Fn.transform(c)
    );
  },
  C0 = (n, i) => (s) => i(n(s)),
  Si = (...n) => n.reduce(C0),
  Ca = new Set(["none", "hidden"]);
function E0(n, i) {
  return Ca.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n);
}
function N0(n, i) {
  return (s) => Te(n, i, s);
}
function pu(n) {
  return typeof n == "number"
    ? N0
    : typeof n == "string"
      ? ba(n)
        ? Ks
        : He.test(n)
          ? Ud
          : M0
      : Array.isArray(n)
        ? Up
        : typeof n == "object"
          ? He.test(n)
            ? Ud
            : R0
          : Ks;
}
function Up(n, i) {
  const s = [...n],
    l = s.length,
    c = n.map((d, f) => pu(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < l; f++) s[f] = c[f](d);
    return s;
  };
}
function R0(n, i) {
  const s = { ...n, ...i },
    l = {};
  for (const c in s) n[c] !== void 0 && i[c] !== void 0 && (l[c] = pu(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in l) s[d] = l[d](c);
    return s;
  };
}
function A0(n, i) {
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
const M0 = (n, i) => {
  const s = yn.createTransformer(i),
    l = yi(n),
    c = yi(i);
  return l.indexes.var.length === c.indexes.var.length &&
    l.indexes.color.length === c.indexes.color.length &&
    l.indexes.number.length >= c.indexes.number.length
    ? (Ca.has(n) && !c.values.length) || (Ca.has(i) && !l.values.length)
      ? E0(n, i)
      : Si(Up(A0(l, c), c.values), s)
    : Ks(n, i);
};
function Wp(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number"
    ? Te(n, i, s)
    : pu(n)(n, i);
}
const D0 = 5;
function $p(n, i, s) {
  const l = Math.max(i - D0, 0);
  return gp(s - n(l), i - l);
}
const Ne = {
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
function j0({
  duration: n = Ne.duration,
  bounce: i = Ne.bounce,
  velocity: s = Ne.velocity,
  mass: l = Ne.mass,
}) {
  let c,
    d,
    f = 1 - i;
  ((f = Qt(Ne.minDamping, Ne.maxDamping, f)),
    (n = Qt(Ne.minDuration, Ne.maxDuration, Gt(n))),
    f < 1
      ? ((c = (g) => {
          const y = g * f,
            x = y * n,
            k = y - s,
            R = Ea(g, f),
            _ = Math.exp(-x);
          return oa - (k / R) * _;
        }),
        (d = (g) => {
          const x = g * f * n,
            k = x * s + s,
            R = Math.pow(f, 2) * Math.pow(g, 2) * n,
            _ = Math.exp(-x),
            A = Ea(Math.pow(g, 2), f);
          return ((-c(g) + oa > 0 ? -1 : 1) * ((k - R) * _)) / A;
        }))
      : ((c = (g) => {
          const y = Math.exp(-g * n),
            x = (g - s) * n + 1;
          return -oa + y * x;
        }),
        (d = (g) => {
          const y = Math.exp(-g * n),
            x = (s - g) * (n * n);
          return y * x;
        })));
  const p = 5 / n,
    m = V0(c, d, p);
  if (((n = Kt(n)), isNaN(m))) return { stiffness: Ne.stiffness, damping: Ne.damping, duration: n };
  {
    const g = Math.pow(m, 2) * l;
    return { stiffness: g, damping: f * 2 * Math.sqrt(l * g), duration: n };
  }
}
const L0 = 12;
function V0(n, i, s) {
  let l = s;
  for (let c = 1; c < L0; c++) l = l - n(l) / i(l);
  return l;
}
function Ea(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const _0 = ["duration", "bounce"],
  F0 = ["stiffness", "damping", "mass"];
function Wd(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function O0(n) {
  let i = {
    velocity: Ne.velocity,
    stiffness: Ne.stiffness,
    damping: Ne.damping,
    mass: Ne.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Wd(n, F0) && Wd(n, _0))
    if (n.visualDuration) {
      const s = n.visualDuration,
        l = (2 * Math.PI) / (s * 1.2),
        c = l * l,
        d = 2 * Qt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Ne.mass, stiffness: c, damping: d };
    } else {
      const s = j0(n);
      ((i = { ...i, ...s, mass: Ne.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function Hp(n = Ne.visualDuration, i = Ne.bounce) {
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
    } = O0({ ...s, velocity: -Gt(s.velocity || 0) }),
    _ = k || 0,
    A = g / (2 * Math.sqrt(m * y)),
    L = f - d,
    O = Gt(Math.sqrt(m / y)),
    W = Math.abs(L) < 5;
  (l || (l = W ? Ne.restSpeed.granular : Ne.restSpeed.default),
    c || (c = W ? Ne.restDelta.granular : Ne.restDelta.default));
  let K;
  if (A < 1) {
    const B = Ea(O, A);
    K = (ee) => {
      const le = Math.exp(-A * O * ee);
      return f - le * (((_ + A * O * L) / B) * Math.sin(B * ee) + L * Math.cos(B * ee));
    };
  } else if (A === 1) K = (B) => f - Math.exp(-O * B) * (L + (_ + O * L) * B);
  else {
    const B = O * Math.sqrt(A * A - 1);
    K = (ee) => {
      const le = Math.exp(-A * O * ee),
        X = Math.min(B * ee, 300);
      return f - (le * ((_ + A * O * L) * Math.sinh(X) + B * L * Math.cosh(X))) / B;
    };
  }
  const Y = {
    calculatedDuration: (R && x) || null,
    next: (B) => {
      const ee = K(B);
      if (R) p.done = B >= x;
      else {
        let le = 0;
        A < 1 && (le = B === 0 ? Kt(_) : $p(K, B, ee));
        const X = Math.abs(le) <= l,
          ge = Math.abs(f - ee) <= c;
        p.done = X && ge;
      }
      return ((p.value = p.done ? f : ee), p);
    },
    toString: () => {
      const B = Math.min(ap(Y), va),
        ee = up((le) => Y.next(B * le).value, B, 30);
      return B + "ms " + ee;
    },
  };
  return Y;
}
function $d({
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
    R = (X) => (p !== void 0 && X < p) || (m !== void 0 && X > m),
    _ = (X) => (p === void 0 ? m : m === void 0 || Math.abs(p - X) < Math.abs(m - X) ? p : m);
  let A = s * i;
  const L = x + A,
    O = f === void 0 ? L : f(L);
  O !== L && (A = O - x);
  const W = (X) => -A * Math.exp(-X / l),
    K = (X) => O + W(X),
    Y = (X) => {
      const ge = W(X),
        Ce = K(X);
      ((k.done = Math.abs(ge) <= g), (k.value = k.done ? O : Ce));
    };
  let B, ee;
  const le = (X) => {
    R(k.value) &&
      ((B = X),
      (ee = Hp({
        keyframes: [k.value, _(k.value)],
        velocity: $p(K, X, k.value),
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
      next: (X) => {
        let ge = !1;
        return (
          !ee && B === void 0 && ((ge = !0), Y(X), le(X)),
          B !== void 0 && X >= B ? ee.next(X - B) : (!ge && Y(X), k)
        );
      },
    }
  );
}
const I0 = wi(0.42, 0, 1, 1),
  z0 = wi(0, 0, 0.58, 1),
  Kp = wi(0.42, 0, 0.58, 1),
  B0 = (n) => Array.isArray(n) && typeof n[0] != "number",
  U0 = {
    linear: ct,
    easeIn: I0,
    easeInOut: Kp,
    easeOut: z0,
    circIn: uu,
    circInOut: Cp,
    circOut: Tp,
    backIn: au,
    backInOut: kp,
    backOut: Sp,
    anticipate: Pp,
  },
  Hd = (n) => {
    if (ru(n)) {
      Wh(n.length === 4);
      const [i, s, l, c] = n;
      return wi(i, s, l, c);
    } else if (typeof n == "string") return U0[n];
    return n;
  };
function W0(n, i, s) {
  const l = [],
    c = s || Wp,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = c(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || ct : i;
      p = Si(m, p);
    }
    l.push(p);
  }
  return l;
}
function $0(n, i, { clamp: s = !0, ease: l, mixer: c } = {}) {
  const d = n.length;
  if ((Wh(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = W0(i, l, c),
    m = p.length,
    g = (y) => {
      if (f && y < n[0]) return i[0];
      let x = 0;
      if (m > 1) for (; x < n.length - 2 && !(y < n[x + 1]); x++);
      const k = mr(n[x], n[x + 1], y);
      return p[x](k);
    };
  return s ? (y) => g(Qt(n[0], n[d - 1], y)) : g;
}
function H0(n, i) {
  const s = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const c = mr(0, i, l);
    n.push(Te(s, 1, c));
  }
}
function K0(n) {
  const i = [0];
  return (H0(i, n.length - 1), i);
}
function G0(n, i) {
  return n.map((s) => s * i);
}
function Q0(n, i) {
  return n.map(() => i || Kp).splice(0, n.length - 1);
}
function Gs({ duration: n = 300, keyframes: i, times: s, ease: l = "easeInOut" }) {
  const c = B0(l) ? l.map(Hd) : Hd(l),
    d = { done: !1, value: i[0] },
    f = G0(s && s.length === i.length ? s : K0(i), n),
    p = $0(f, i, { ease: Array.isArray(c) ? c : Q0(i, c) });
  return { calculatedDuration: n, next: (m) => ((d.value = p(m)), (d.done = m >= n), d) };
}
const b0 = (n) => {
    const i = ({ timestamp: s }) => n(s);
    return {
      start: () => xe.update(i, !0),
      stop: () => gn(i),
      now: () => (ze.isProcessing ? ze.timestamp : Ft.now()),
    };
  },
  Y0 = { decay: $d, inertia: $d, tween: Gs, keyframes: Gs, spring: Hp },
  X0 = (n) => n / 100;
class mu extends Bp {
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
      f = (c == null ? void 0 : c.KeyframeResolver) || hu,
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
      p = nu(s) ? s : Y0[s] || Gs;
    let m, g;
    p !== Gs && typeof i[0] != "number" && ((m = Si(X0, Wp(i[0], i[1]))), (i = [0, 100]));
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
      const { keyframes: X } = this.options;
      return { done: !0, value: X[X.length - 1] };
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
    const { delay: k, repeat: R, repeatType: _, repeatDelay: A, onUpdate: L } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 && (this.startTime = Math.min(i - y / this.speed, this.startTime)),
      s
        ? (this.currentTime = i)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(i - this.startTime) * this.speed));
    const O = this.currentTime - k * (this.speed >= 0 ? 1 : -1),
      W = this.speed >= 0 ? O < 0 : O > y;
    ((this.currentTime = Math.max(O, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = y));
    let K = this.currentTime,
      Y = d;
    if (R) {
      const X = Math.min(this.currentTime, y) / x;
      let ge = Math.floor(X),
        Ce = X % 1;
      (!Ce && X >= 1 && (Ce = 1),
        Ce === 1 && ge--,
        (ge = Math.min(ge, R + 1)),
        !!(ge % 2) &&
          (_ === "reverse" ? ((Ce = 1 - Ce), A && (Ce -= A / x)) : _ === "mirror" && (Y = f)),
        (K = Qt(0, 1, Ce) * x));
    }
    const B = W ? { done: !1, value: m[0] } : Y.next(K);
    p && (B.value = p(B.value));
    let { done: ee } = B;
    !W && g !== null && (ee = this.speed >= 0 ? this.currentTime >= y : this.currentTime <= 0);
    const le =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ee));
    return (
      le && c !== void 0 && (B.value = to(m, this.options, c)),
      L && L(B.value),
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
    const { driver: i = b0, onPlay: s, startTime: l } = this.options;
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
const q0 = new Set(["opacity", "clipPath", "filter", "transform"]);
function Z0(
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
const J0 = Ua(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Qs = 10,
  ex = 2e4;
function tx(n) {
  return nu(n.type) || n.type === "spring" || !cp(n.ease);
}
function nx(n, i) {
  const s = new mu({ ...i, keyframes: n, repeat: 0, delay: 0, isGenerator: !0 });
  let l = { done: !1, value: n[0] };
  const c = [];
  let d = 0;
  for (; !l.done && d < ex;) ((l = s.sample(d)), c.push(l.value), (d += Qs));
  return { times: void 0, keyframes: c, duration: d - Qs, ease: "linear" };
}
const Gp = { anticipate: Pp, backInOut: kp, circInOut: Cp };
function rx(n) {
  return n in Gp;
}
class Kd extends Bp {
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
    if ((typeof d == "string" && Hs() && rx(d) && (d = Gp[d]), tx(this.options))) {
      const { onComplete: x, onUpdate: k, motionValue: R, element: _, ...A } = this.options,
        L = nx(i, A);
      ((i = L.keyframes),
        i.length === 1 && (i[1] = i[0]),
        (l = L.duration),
        (c = L.times),
        (d = L.ease),
        (f = "keyframes"));
    }
    const y = Z0(p.owner.current, m, i, { ...this.options, duration: l, times: c, ease: d });
    return (
      (y.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Ad(y, this.pendingTimeline), (this.pendingTimeline = void 0))
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
      Ad(l, i);
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
        _ = new mu({
          ...R,
          keyframes: l,
          duration: c,
          type: d,
          ease: f,
          times: p,
          isGenerator: !0,
        }),
        A = Kt(this.time);
      g.setWithVelocity(_.sample(A - Qs).value, _.sample(A).value, Qs);
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
    return J0() && l && q0.has(l) && !m && !g && !c && d !== "mirror" && f !== 0 && p !== "inertia";
  }
}
const ix = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  sx = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  ox = { type: "keyframes", duration: 0.8 },
  lx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ax = (n, { keyframes: i }) =>
    i.length > 2 ? ox : In.has(n) ? (n.startsWith("scale") ? sx(i[1]) : ix) : lx;
function ux({
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
const gu =
  (n, i, s, l = {}, c, d) =>
  (f) => {
    const p = tu(l, n) || {},
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
    (ux(p) || (y = { ...y, ...ax(n, y) }),
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
          new Rv([])
        );
    }
    return !d && Kd.supports(y) ? new Kd(y) : new mu(y);
  };
function cx({ protectedKeys: n, needsAnimating: i }, s) {
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
    if (R === void 0 || (y && cx(y, x))) continue;
    const _ = { delay: s, ...tu(f || {}, x) };
    let A = !1;
    if (window.MotionHandoffAnimation) {
      const O = yp(n);
      if (O) {
        const W = window.MotionHandoffAnimation(O, x, xe);
        W !== null && ((_.startTime = W), (A = !0));
      }
    }
    (wa(n, x), k.start(gu(x, k, R, n.shouldReduceMotion && mp.has(x) ? { type: !1 } : _, n, A)));
    const L = k.animation;
    L && g.push(L);
  }
  return (
    p &&
      Promise.all(g).then(() => {
        xe.update(() => {
          p && Wv(n, p);
        });
      }),
    g
  );
}
function Na(n, i, s = {}) {
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
            return fx(n, i, y + g, x, k, s);
          }
        : () => Promise.resolve(),
    { when: m } = d;
  if (m) {
    const [g, y] = m === "beforeChildren" ? [f, p] : [p, f];
    return g().then(() => y());
  } else return Promise.all([f(), p(s.delay)]);
}
function fx(n, i, s = 0, l = 0, c = 1, d) {
  const f = [],
    p = (n.variantChildren.size - 1) * l,
    m = c === 1 ? (g = 0) => g * l : (g = 0) => p - g * l;
  return (
    Array.from(n.variantChildren)
      .sort(dx)
      .forEach((g, y) => {
        (g.notify("AnimationStart", i),
          f.push(Na(g, i, { ...d, delay: s + m(y) }).then(() => g.notify("AnimationComplete", i))));
      }),
    Promise.all(f)
  );
}
function dx(n, i) {
  return n.sortNodePosition(i);
}
function hx(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const c = i.map((d) => Na(n, d, s));
    l = Promise.all(c);
  } else if (typeof i == "string") l = Na(n, i, s);
  else {
    const c = typeof i == "function" ? eo(n, i, s.custom) : i;
    l = Promise.all(Qp(n, c, s));
  }
  return l.then(() => {
    n.notify("AnimationComplete", i);
  });
}
const px = $a.length;
function bp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? bp(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const i = {};
  for (let s = 0; s < px; s++) {
    const l = $a[s],
      c = n.props[l];
    (pi(c) || c === !1) && (i[l] = c);
  }
  return i;
}
const mx = [...Wa].reverse(),
  gx = Wa.length;
function yx(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: l }) => hx(n, s, l)));
}
function vx(n) {
  let i = yx(n),
    s = Gd(),
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
      const { transition: R, transitionEnd: _, ...A } = k;
      g = { ...g, ...A, ..._ };
    }
    return g;
  };
  function d(m) {
    i = m(n);
  }
  function f(m) {
    const { props: g } = n,
      y = bp(n.parent) || {},
      x = [],
      k = new Set();
    let R = {},
      _ = 1 / 0;
    for (let L = 0; L < gx; L++) {
      const O = mx[L],
        W = s[O],
        K = g[O] !== void 0 ? g[O] : y[O],
        Y = pi(K),
        B = O === m ? W.isActive : null;
      B === !1 && (_ = L);
      let ee = K === y[O] && K !== g[O] && Y;
      if (
        (ee && l && n.manuallyAnimateOnMount && (ee = !1),
        (W.protectedKeys = { ...R }),
        (!W.isActive && B === null) || (!K && !W.prevProp) || Zs(K) || typeof K == "boolean")
      )
        continue;
      const le = xx(W.prevProp, K);
      let X = le || (O === m && W.isActive && !ee && Y) || (L > _ && Y),
        ge = !1;
      const Ce = Array.isArray(K) ? K : [K];
      let Xe = Ce.reduce(c(O), {});
      B === !1 && (Xe = {});
      const { prevResolvedValues: it = {} } = W,
        Ge = { ...it, ...Xe },
        qe = (ie) => {
          ((X = !0), k.has(ie) && ((ge = !0), k.delete(ie)), (W.needsAnimating[ie] = !0));
          const I = n.getValue(ie);
          I && (I.liveStyle = !1);
        };
      for (const ie in Ge) {
        const I = Xe[ie],
          q = it[ie];
        if (R.hasOwnProperty(ie)) continue;
        let $ = !1;
        (ya(I) && ya(q) ? ($ = !lp(I, q)) : ($ = I !== q),
          $
            ? I != null
              ? qe(ie)
              : k.add(ie)
            : I !== void 0 && k.has(ie)
              ? qe(ie)
              : (W.protectedKeys[ie] = !0));
      }
      ((W.prevProp = K),
        (W.prevResolvedValues = Xe),
        W.isActive && (R = { ...R, ...Xe }),
        l && n.blockInitialAnimation && (X = !1),
        X &&
          (!(ee && le) || ge) &&
          x.push(...Ce.map((ie) => ({ animation: ie, options: { type: O } }))));
    }
    if (k.size) {
      const L = {};
      (k.forEach((O) => {
        const W = n.getBaseTarget(O),
          K = n.getValue(O);
        (K && (K.liveStyle = !0), (L[O] = W ?? null));
      }),
        x.push({ animation: L }));
    }
    let A = !!x.length;
    return (
      l && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (A = !1),
      (l = !1),
      A ? i(x) : Promise.resolve()
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
      ((s = Gd()), (l = !0));
    },
  };
}
function xx(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !lp(i, n) : !1;
}
function Ln(n = !1) {
  return { isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Gd() {
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
class vn {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
class wx extends vn {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = vx(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Zs(i) && (this.unmountControls = i.subscribe(this.node));
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
let Sx = 0;
class kx extends vn {
  constructor() {
    (super(...arguments), (this.id = Sx++));
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
const Px = { animation: { Feature: wx }, exit: { Feature: kx } };
function vi(n, i, s, l = { passive: !0 }) {
  return (n.addEventListener(i, s, l), () => n.removeEventListener(i, s));
}
function ki(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const Tx = (n) => (i) => iu(i) && n(i, ki(i));
function fi(n, i, s, l) {
  return vi(n, i, Tx(s), l);
}
const Qd = (n, i) => Math.abs(n - i);
function Cx(n, i) {
  const s = Qd(n.x, i.x),
    l = Qd(n.y, i.y);
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
        const x = aa(this.lastMoveEventInfo, this.history),
          k = this.startEvent !== null,
          R = Cx(x.offset, { x: 0, y: 0 }) >= 3;
        if (!k && !R) return;
        const { point: _ } = x,
          { timestamp: A } = ze;
        this.history.push({ ..._, timestamp: A });
        const { onStart: L, onMove: O } = this.handlers;
        (k || (L && L(this.lastMoveEvent, x), (this.startEvent = this.lastMoveEvent)),
          O && O(this.lastMoveEvent, x));
      }),
      (this.handlePointerMove = (x, k) => {
        ((this.lastMoveEvent = x),
          (this.lastMoveEventInfo = la(k, this.transformPagePoint)),
          xe.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (x, k) => {
        this.end();
        const { onEnd: R, onSessionEnd: _, resumeAnimation: A } = this.handlers;
        if ((this.dragSnapToOrigin && A && A(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const L = aa(
          x.type === "pointercancel" ? this.lastMoveEventInfo : la(k, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && R && R(x, L), _ && _(x, L));
      }),
      !iu(i))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = l),
      (this.contextWindow = c || window));
    const f = ki(i),
      p = la(f, this.transformPagePoint),
      { point: m } = p,
      { timestamp: g } = ze;
    this.history = [{ ...m, timestamp: g }];
    const { onSessionStart: y } = s;
    (y && y(i, aa(p, this.history)),
      (this.removeListeners = Si(
        fi(this.contextWindow, "pointermove", this.handlePointerMove),
        fi(this.contextWindow, "pointerup", this.handlePointerUp),
        fi(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(), gn(this.updatePoint));
  }
}
function la(n, i) {
  return i ? { point: i(n.point) } : n;
}
function bd(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function aa({ point: n }, i) {
  return { point: n, delta: bd(n, Xp(i)), offset: bd(n, Ex(i)), velocity: Nx(i, 0.1) };
}
function Ex(n) {
  return n[0];
}
function Xp(n) {
  return n[n.length - 1];
}
function Nx(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    l = null;
  const c = Xp(n);
  for (; s >= 0 && ((l = n[s]), !(c.timestamp - l.timestamp > Kt(i)));) s--;
  if (!l) return { x: 0, y: 0 };
  const d = Gt(c.timestamp - l.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - l.x) / d, y: (c.y - l.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
const qp = 1e-4,
  Rx = 1 - qp,
  Ax = 1 + qp,
  Zp = 0.01,
  Mx = 0 - Zp,
  Dx = 0 + Zp;
function ft(n) {
  return n.max - n.min;
}
function jx(n, i, s) {
  return Math.abs(n - i) <= s;
}
function Yd(n, i, s, l = 0.5) {
  ((n.origin = l),
    (n.originPoint = Te(i.min, i.max, n.origin)),
    (n.scale = ft(s) / ft(i)),
    (n.translate = Te(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= Rx && n.scale <= Ax) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= Mx && n.translate <= Dx) || isNaN(n.translate)) && (n.translate = 0));
}
function di(n, i, s, l) {
  (Yd(n.x, i.x, s.x, l ? l.originX : void 0), Yd(n.y, i.y, s.y, l ? l.originY : void 0));
}
function Xd(n, i, s) {
  ((n.min = s.min + i.min), (n.max = n.min + ft(i)));
}
function Lx(n, i, s) {
  (Xd(n.x, i.x, s.x), Xd(n.y, i.y, s.y));
}
function qd(n, i, s) {
  ((n.min = i.min - s.min), (n.max = n.min + ft(i)));
}
function hi(n, i, s) {
  (qd(n.x, i.x, s.x), qd(n.y, i.y, s.y));
}
function Vx(n, { min: i, max: s }, l) {
  return (
    i !== void 0 && n < i
      ? (n = l ? Te(i, n, l.min) : Math.max(n, i))
      : s !== void 0 && n > s && (n = l ? Te(s, n, l.max) : Math.min(n, s)),
    n
  );
}
function Zd(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  };
}
function _x(n, { top: i, left: s, bottom: l, right: c }) {
  return { x: Zd(n.x, s, c), y: Zd(n.y, i, l) };
}
function Jd(n, i) {
  let s = i.min - n.min,
    l = i.max - n.max;
  return (i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l });
}
function Fx(n, i) {
  return { x: Jd(n.x, i.x), y: Jd(n.y, i.y) };
}
function Ox(n, i) {
  let s = 0.5;
  const l = ft(n),
    c = ft(i);
  return (
    c > l ? (s = mr(i.min, i.max - l, n.min)) : l > c && (s = mr(n.min, n.max - c, i.min)),
    Qt(0, 1, s)
  );
}
function Ix(n, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
  );
}
const Ra = 0.35;
function zx(n = Ra) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Ra),
    { x: eh(n, "left", "right"), y: eh(n, "top", "bottom") }
  );
}
function eh(n, i, s) {
  return { min: th(n, i), max: th(n, s) };
}
function th(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const nh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  dr = () => ({ x: nh(), y: nh() }),
  rh = () => ({ min: 0, max: 0 }),
  Me = () => ({ x: rh(), y: rh() });
function xt(n) {
  return [n("x"), n("y")];
}
function Jp({ top: n, left: i, right: s, bottom: l }) {
  return { x: { min: i, max: s }, y: { min: n, max: l } };
}
function Bx({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function Ux(n, i) {
  if (!i) return n;
  const s = i({ x: n.left, y: n.top }),
    l = i({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: l.y, right: l.x };
}
function ua(n) {
  return n === void 0 || n === 1;
}
function Aa({ scale: n, scaleX: i, scaleY: s }) {
  return !ua(n) || !ua(i) || !ua(s);
}
function Vn(n) {
  return Aa(n) || em(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function em(n) {
  return ih(n.x) || ih(n.y);
}
function ih(n) {
  return n && n !== "0%";
}
function bs(n, i, s) {
  const l = n - s,
    c = i * l;
  return s + c;
}
function sh(n, i, s, l, c) {
  return (c !== void 0 && (n = bs(n, c, l)), bs(n, s, l) + i);
}
function Ma(n, i = 0, s = 1, l, c) {
  ((n.min = sh(n.min, i, s, l, c)), (n.max = sh(n.max, i, s, l, c)));
}
function tm(n, { x: i, y: s }) {
  (Ma(n.x, i.translate, i.scale, i.originPoint), Ma(n.y, s.translate, s.scale, s.originPoint));
}
const oh = 0.999999999999,
  lh = 1.0000000000001;
function Wx(n, i, s, l = !1) {
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
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), tm(n, f)),
      l && Vn(d.latestValues) && pr(n, d.latestValues));
  }
  (i.x < lh && i.x > oh && (i.x = 1), i.y < lh && i.y > oh && (i.y = 1));
}
function hr(n, i) {
  ((n.min = n.min + i), (n.max = n.max + i));
}
function ah(n, i, s, l, c = 0.5) {
  const d = Te(n.min, n.max, c);
  Ma(n, i, s, d, l);
}
function pr(n, i) {
  (ah(n.x, i.x, i.scaleX, i.scale, i.originX), ah(n.y, i.y, i.scaleY, i.scale, i.originY));
}
function nm(n, i) {
  return Jp(Ux(n.getBoundingClientRect(), i));
}
function $x(n, i, s) {
  const l = nm(n, s),
    { scroll: c } = i;
  return (c && (hr(l.x, c.offset.x), hr(l.y, c.offset.y)), l);
}
const rm = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Hx = new WeakMap();
class Kx {
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
        (x ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(ki(y).point));
      },
      d = (y, x) => {
        const { drag: k, dragPropagation: R, onDragStart: _ } = this.getProps();
        if (
          k &&
          !R &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Ov(k)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          xt((L) => {
            let O = this.getAxisMotionValue(L).get() || 0;
            if (_t.test(O)) {
              const { projection: W } = this.visualElement;
              if (W && W.layout) {
                const K = W.layout.layoutBox[L];
                K && (O = ft(K) * (parseFloat(O) / 100));
              }
            }
            this.originPoint[L] = O;
          }),
          _ && xe.postRender(() => _(y, x)),
          wa(this.visualElement, "transform"));
        const { animationState: A } = this.visualElement;
        A && A.setActive("whileDrag", !0);
      },
      f = (y, x) => {
        const {
          dragPropagation: k,
          dragDirectionLock: R,
          onDirectionLock: _,
          onDrag: A,
        } = this.getProps();
        if (!k && !this.openDragLock) return;
        const { offset: L } = x;
        if (R && this.currentDirection === null) {
          ((this.currentDirection = Gx(L)),
            this.currentDirection !== null && _ && _(this.currentDirection));
          return;
        }
        (this.updateAxis("x", x.point, L),
          this.updateAxis("y", x.point, L),
          this.visualElement.render(),
          A && A(y, x));
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
    (this.constraints && this.constraints[i] && (f = Vx(f, this.constraints[i], this.elastic[i])),
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
        ? (this.constraints = _x(c.layoutBox, s))
        : (this.constraints = !1),
      (this.elastic = zx(l)),
      d !== this.constraints &&
        c &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        xt((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = Ix(c.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !cr(i)) return !1;
    const l = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = $x(l, c.root, this.visualElement.getTransformPagePoint());
    let f = Fx(c.layout.layoutBox, d);
    if (s) {
      const p = s(Bx(f));
      ((this.hasMutatedConstraints = !!p), p && (f = Jp(p)));
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
          _ = {
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
        return this.startAxisValueAnimation(y, _);
      });
    return Promise.all(g).then(p);
  }
  startAxisValueAnimation(i, s) {
    const l = this.getAxisMotionValue(i);
    return (wa(this.visualElement, i), l.start(gu(i, l, 0, s, this.visualElement, !1)));
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
    if (!cr(s) || !l || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    xt((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = Ox({ min: m, max: m }, this.constraints[f]);
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
    Hx.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = fi(i, "pointerdown", (m) => {
        const { drag: g, dragListener: y = !0 } = this.getProps();
        g && y && this.start(m);
      }),
      l = () => {
        const { dragConstraints: m } = this.getProps();
        cr(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", l);
    (c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), xe.read(l));
    const f = vi(window, "resize", () => this.scalePositionWithinConstraints()),
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
        dragElastic: f = Ra,
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
function Gx(n, i = 10) {
  let s = null;
  return (Math.abs(n.y) > i ? (s = "y") : Math.abs(n.x) > i && (s = "x"), s);
}
class Qx extends vn {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = ct),
      (this.removeListeners = ct),
      (this.controls = new Kx(i)));
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
const uh = (n) => (i, s) => {
  n && xe.postRender(() => n(i, s));
};
class bx extends vn {
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
      onSessionStart: uh(i),
      onStart: uh(s),
      onMove: l,
      onEnd: (d, f) => {
        (delete this.session, c && xe.postRender(() => c(d, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = fi(this.node.current, "pointerdown", (i) =>
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
const Us = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ch(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const oi = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (te.test(n)) n = parseFloat(n);
        else return n;
      const s = ch(n, i.target.x),
        l = ch(n, i.target.y);
      return `${s}% ${l}%`;
    },
  },
  Yx = {
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
class Xx extends z.Component {
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l, layoutId: c } = this.props,
      { projection: d } = i;
    (gv(qx),
      d &&
        (s.group && s.group.add(d),
        l && l.register && c && l.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({ ...d.options, onExitComplete: () => this.safeToRemove() })),
      (Us.hasEverUpdated = !0));
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
      Ka.postRender(() => {
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
    l = z.useContext(Oa);
  return T.jsx(Xx, {
    ...n,
    layoutGroup: l,
    switchLayoutGroup: z.useContext(bh),
    isPresent: i,
    safeToRemove: s,
  });
}
const qx = {
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
  boxShadow: Yx,
};
function Zx(n, i, s) {
  const l = Ke(n) ? n : gi(n);
  return (l.start(gu("", l, i, s)), l.animation);
}
function Jx(n) {
  return n instanceof SVGElement && n.tagName !== "svg";
}
const e1 = (n, i) => n.depth - i.depth;
class t1 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (su(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (ou(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(e1), (this.isDirty = !1), this.children.forEach(i));
  }
}
function n1(n, i) {
  const s = Ft.now(),
    l = ({ timestamp: c }) => {
      const d = c - s;
      d >= i && (gn(l), n(d - i));
    };
  return (xe.read(l, !0), () => gn(l));
}
const sm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  r1 = sm.length,
  fh = (n) => (typeof n == "string" ? parseFloat(n) : n),
  dh = (n) => typeof n == "number" || te.test(n);
function i1(n, i, s, l, c, d) {
  c
    ? ((n.opacity = Te(0, s.opacity !== void 0 ? s.opacity : 1, s1(l))),
      (n.opacityExit = Te(i.opacity !== void 0 ? i.opacity : 1, 0, o1(l))))
    : d &&
      (n.opacity = Te(
        i.opacity !== void 0 ? i.opacity : 1,
        s.opacity !== void 0 ? s.opacity : 1,
        l,
      ));
  for (let f = 0; f < r1; f++) {
    const p = `border${sm[f]}Radius`;
    let m = hh(i, p),
      g = hh(s, p);
    if (m === void 0 && g === void 0) continue;
    (m || (m = 0),
      g || (g = 0),
      m === 0 || g === 0 || dh(m) === dh(g)
        ? ((n[p] = Math.max(Te(fh(m), fh(g), l), 0)), (_t.test(g) || _t.test(m)) && (n[p] += "%"))
        : (n[p] = g));
  }
  (i.rotate || s.rotate) && (n.rotate = Te(i.rotate || 0, s.rotate || 0, l));
}
function hh(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const s1 = om(0, 0.5, Tp),
  o1 = om(0.5, 0.95, ct);
function om(n, i, s) {
  return (l) => (l < n ? 0 : l > i ? 1 : s(mr(n, i, l)));
}
function ph(n, i) {
  ((n.min = i.min), (n.max = i.max));
}
function vt(n, i) {
  (ph(n.x, i.x), ph(n.y, i.y));
}
function mh(n, i) {
  ((n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin));
}
function gh(n, i, s, l, c) {
  return ((n -= i), (n = bs(n, 1 / s, l)), c !== void 0 && (n = bs(n, 1 / c, l)), n);
}
function l1(n, i = 0, s = 1, l = 0.5, c, d = n, f = n) {
  if (
    (_t.test(i) && ((i = parseFloat(i)), (i = Te(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = Te(d.min, d.max, l);
  (n === d && (p -= i), (n.min = gh(n.min, i, s, p, c)), (n.max = gh(n.max, i, s, p, c)));
}
function yh(n, i, [s, l, c], d, f) {
  l1(n, i[s], i[l], i[c], i.scale, d, f);
}
const a1 = ["x", "scaleX", "originX"],
  u1 = ["y", "scaleY", "originY"];
function vh(n, i, s, l) {
  (yh(n.x, i, a1, s ? s.x : void 0, l ? l.x : void 0),
    yh(n.y, i, u1, s ? s.y : void 0, l ? l.y : void 0));
}
function xh(n) {
  return n.translate === 0 && n.scale === 1;
}
function lm(n) {
  return xh(n.x) && xh(n.y);
}
function wh(n, i) {
  return n.min === i.min && n.max === i.max;
}
function c1(n, i) {
  return wh(n.x, i.x) && wh(n.y, i.y);
}
function Sh(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function am(n, i) {
  return Sh(n.x, i.x) && Sh(n.y, i.y);
}
function kh(n) {
  return ft(n.x) / ft(n.y);
}
function Ph(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
class f1 {
  constructor() {
    this.members = [];
  }
  add(i) {
    (su(this.members, i), i.scheduleRender());
  }
  remove(i) {
    if ((ou(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead)) {
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
function d1(n, i, s) {
  let l = "";
  const c = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((c || d || f) && (l = `translate3d(${c}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const { transformPerspective: g, rotate: y, rotateX: x, rotateY: k, skewX: R, skewY: _ } = s;
    (g && (l = `perspective(${g}px) ${l}`),
      y && (l += `rotate(${y}deg) `),
      x && (l += `rotateX(${x}deg) `),
      k && (l += `rotateY(${k}deg) `),
      R && (l += `skewX(${R}deg) `),
      _ && (l += `skewY(${_}deg) `));
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
  ui = typeof window < "u" && window.MotionDebug !== void 0,
  ca = ["", "X", "Y", "Z"],
  h1 = { visibility: "hidden" },
  Th = 1e3;
let p1 = 0;
function fa(n, i, s, l) {
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
      ((this.id = p1++),
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
            ui && (_n.totalNodes = _n.resolvedTargetDeltas = _n.recalculatedProjection = 0),
            this.nodes.forEach(y1),
            this.nodes.forEach(k1),
            this.nodes.forEach(P1),
            this.nodes.forEach(v1),
            ui && window.MotionDebug.record(_n));
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
      this.root === this && (this.nodes = new t1());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new lu()),
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
      ((this.isSVG = Jx(f)), (this.instance = f));
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
            (x = n1(k, 250)),
            Us.hasAnimatedSinceResize &&
              ((Us.hasAnimatedSinceResize = !1), this.nodes.forEach(Eh)));
        });
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          y &&
          (m || g) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: x, hasLayoutChanged: k, hasRelativeTargetChanged: R, layout: _ }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const A = this.options.transition || y.getDefaultTransition() || R1,
                { onLayoutAnimationStart: L, onLayoutAnimationComplete: O } = y.getProps(),
                W = !this.targetLayout || !am(this.targetLayout, _) || R,
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
                const Y = { ...tu(A, "layout"), onPlay: L, onComplete: O };
                ((y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((Y.delay = 0), (Y.type = !1)),
                  this.startAnimation(Y));
              } else
                (k || Eh(this),
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(T1), this.animationId++);
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
        (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ch));
        return;
      }
      (this.isUpdating || this.nodes.forEach(w1),
        (this.isUpdating = !1),
        this.nodes.forEach(S1),
        this.nodes.forEach(m1),
        this.nodes.forEach(g1),
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
      this.updateScheduled || ((this.updateScheduled = !0), Ka.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(x1), this.sharedNodes.forEach(C1));
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
        (p || Vn(this.latestValues) || y) &&
        (c(this.instance, g), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        f && (m = this.removeTransform(m)),
        A1(m),
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
        ((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) || this.path.some(M1)
      )) {
        const { scroll: y } = this.root;
        y && (hr(m.x, y.offset.x), hr(m.y, y.offset.y));
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
          (x.wasRoot && vt(m, f), hr(m.x, x.offset.x), hr(m.y, x.offset.y));
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
          pr(m, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
          Vn(y.latestValues) && pr(m, y.latestValues));
      }
      return (Vn(this.latestValues) && pr(m, this.latestValues), m);
    }
    removeTransform(f) {
      const p = Me();
      vt(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        if (!g.instance || !Vn(g.latestValues)) continue;
        Aa(g.latestValues) && g.updateSnapshot();
        const y = Me(),
          x = g.measurePageBox();
        (vt(y, x), vh(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, y));
      }
      return (Vn(this.latestValues) && vh(p, this.latestValues), p);
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
              hi(this.relativeTargetOrigin, this.layout.layoutBox, R.layout.layoutBox),
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
                Lx(this.target, this.relativeTarget, this.relativeParent.target))
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
                hi(this.relativeTargetOrigin, this.target, R.target),
                vt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ui && _n.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Aa(this.parent.latestValues) || em(this.parent.latestValues)))
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
      (Wx(this.layoutCorrected, this.treeScale, this.path, m),
        p.layout &&
          !p.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((p.target = p.layout.layoutBox), (p.targetWithTransforms = Me())));
      const { target: _ } = p;
      if (!_) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (mh(this.prevProjectionDelta.x, this.projectionDelta.x),
          mh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        di(this.projectionDelta, this.layoutCorrected, _, this.latestValues),
        (this.treeScale.x !== k ||
          this.treeScale.y !== R ||
          !Ph(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Ph(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", _)),
        ui && _n.recalculatedProjection++);
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
        g = m ? m.latestValues : {},
        y = { ...this.latestValues },
        x = dr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const k = Me(),
        R = m ? m.source : void 0,
        _ = this.layout ? this.layout.source : void 0,
        A = R !== _,
        L = this.getStack(),
        O = !L || L.members.length <= 1,
        W = !!(A && !O && this.options.crossfade === !0 && !this.path.some(N1));
      this.animationProgress = 0;
      let K;
      ((this.mixTargetDelta = (Y) => {
        const B = Y / 1e3;
        (Nh(x.x, f.x, B),
          Nh(x.y, f.y, B),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (hi(k, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            E1(this.relativeTarget, this.relativeTargetOrigin, k, B),
            K && c1(this.relativeTarget, K) && (this.isProjectionDirty = !1),
            K || (K = Me()),
            vt(K, this.relativeTarget)),
          A && ((this.animationValues = y), i1(y, g, this.latestValues, B, W, O)),
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
          ((Us.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Zx(0, Th, {
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
        (this.mixTargetDelta && this.mixTargetDelta(Th), this.currentAnimation.stop()),
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
        (vt(p, m), pr(p, y), di(this.projectionDeltaWithTransform, this.layoutCorrected, p, y));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new f1()),
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
      m.z && fa("z", f, g, this.animationValues);
      for (let y = 0; y < ca.length; y++)
        (fa(`rotate${ca[y]}`, f, g, this.animationValues),
          fa(`skew${ca[y]}`, f, g, this.animationValues));
      f.render();
      for (const y in g)
        (f.setStaticValue(y, g[y]), this.animationValues && (this.animationValues[y] = g[y]));
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      var p, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return h1;
      const g = { visibility: "" },
        y = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (g.opacity = ""),
          (g.pointerEvents = zs(f == null ? void 0 : f.pointerEvents) || ""),
          (g.transform = y ? y(this.latestValues, "") : "none"),
          g
        );
      const x = this.getLead();
      if (!this.projectionDelta || !this.layout || !x.target) {
        const A = {};
        return (
          this.options.layoutId &&
            ((A.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (A.pointerEvents = zs(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !Vn(this.latestValues) &&
            ((A.transform = y ? y({}, "") : "none"), (this.hasProjected = !1)),
          A
        );
      }
      const k = x.animationValues || x.latestValues;
      (this.applyTransformsToTarget(),
        (g.transform = d1(this.projectionDeltaWithTransform, this.treeScale, k)),
        y && (g.transform = y(k, g.transform)));
      const { x: R, y: _ } = this.projectionDelta;
      ((g.transformOrigin = `${R.origin * 100}% ${_.origin * 100}% 0`),
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
      for (const A in $s) {
        if (k[A] === void 0) continue;
        const { correct: L, applyTo: O } = $s[A],
          W = g.transform === "none" ? k[A] : L(k[A], x);
        if (O) {
          const K = O.length;
          for (let Y = 0; Y < K; Y++) g[O[Y]] = W;
        } else g[A] = W;
      }
      return (
        this.options.layoutId &&
          (g.pointerEvents = x === this ? zs(f == null ? void 0 : f.pointerEvents) || "" : "none"),
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
        this.root.nodes.forEach(Ch),
        this.root.sharedNodes.clear());
    }
  };
}
function m1(n) {
  n.updateLayout();
}
function g1(n) {
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
    const p = dr();
    di(p, l, s.layoutBox);
    const m = dr();
    f ? di(m, n.applyTransform(c, !0), s.measuredBox) : di(m, l, s.layoutBox);
    const g = !lm(p);
    let y = !1;
    if (!n.resumeFrom) {
      const x = n.getClosestProjectingParent();
      if (x && !x.resumeFrom) {
        const { snapshot: k, layout: R } = x;
        if (k && R) {
          const _ = Me();
          hi(_, s.layoutBox, k.layoutBox);
          const A = Me();
          (hi(A, l, R.layoutBox),
            am(_, A) || (y = !0),
            x.options.layoutRoot &&
              ((n.relativeTarget = A), (n.relativeTargetOrigin = _), (n.relativeParent = x)));
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
function y1(n) {
  (ui && _n.totalNodes++,
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
function v1(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function x1(n) {
  n.clearSnapshot();
}
function Ch(n) {
  n.clearMeasurements();
}
function w1(n) {
  n.isLayoutDirty = !1;
}
function S1(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function Eh(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function k1(n) {
  n.resolveTargetDelta();
}
function P1(n) {
  n.calcProjection();
}
function T1(n) {
  n.resetSkewAndRotation();
}
function C1(n) {
  n.removeLeadSnapshot();
}
function Nh(n, i, s) {
  ((n.translate = Te(i.translate, 0, s)),
    (n.scale = Te(i.scale, 1, s)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint));
}
function Rh(n, i, s, l) {
  ((n.min = Te(i.min, s.min, l)), (n.max = Te(i.max, s.max, l)));
}
function E1(n, i, s, l) {
  (Rh(n.x, i.x, s.x, l), Rh(n.y, i.y, s.y, l));
}
function N1(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const R1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ah = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  Mh = Ah("applewebkit/") && !Ah("chrome/") ? Math.round : ct;
function Dh(n) {
  ((n.min = Mh(n.min)), (n.max = Mh(n.max)));
}
function A1(n) {
  (Dh(n.x), Dh(n.y));
}
function fm(n, i, s) {
  return n === "position" || (n === "preserve-aspect" && !jx(kh(i), kh(s), 0.2));
}
function M1(n) {
  var i;
  return n !== n.root && ((i = n.scroll) === null || i === void 0 ? void 0 : i.wasRoot);
}
const D1 = cm({
    attachResizeListener: (n, i) => vi(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  da = { current: void 0 },
  dm = cm({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!da.current) {
        const n = new D1({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (da.current = n));
      }
      return da.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  j1 = { pan: { Feature: bx }, drag: { Feature: Qx, ProjectionNode: dm, MeasureLayout: im } };
function jh(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s,
    d = l[c];
  d && xe.postRender(() => d(i, ki(i)));
}
class L1 extends vn {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = jv(i, (s) => (jh(this.node, s, "Start"), (l) => jh(this.node, l, "End"))));
  }
  unmount() {}
}
class V1 extends vn {
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
    this.unmount = Si(
      vi(this.node.current, "focus", () => this.onFocus()),
      vi(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Lh(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s),
    d = l[c];
  d && xe.postRender(() => d(i, ki(i)));
}
class _1 extends vn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = Fv(
        i,
        (s) => (
          Lh(this.node, s, "Start"),
          (l, { success: c }) => Lh(this.node, l, c ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Da = new WeakMap(),
  ha = new WeakMap(),
  F1 = (n) => {
    const i = Da.get(n.target);
    i && i(n);
  },
  O1 = (n) => {
    n.forEach(F1);
  };
function I1({ root: n, ...i }) {
  const s = n || document;
  ha.has(s) || ha.set(s, {});
  const l = ha.get(s),
    c = JSON.stringify(i);
  return (l[c] || (l[c] = new IntersectionObserver(O1, { root: n, ...i })), l[c]);
}
function z1(n, i, s) {
  const l = I1(i);
  return (
    Da.set(n, s),
    l.observe(n),
    () => {
      (Da.delete(n), l.unobserve(n));
    }
  );
}
const B1 = { some: 0, all: 1 };
class U1 extends vn {
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
        threshold: typeof c == "number" ? c : B1[c],
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
    return z1(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(W1(i, s)) && this.startObserver();
  }
  unmount() {}
}
function W1({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const $1 = {
    inView: { Feature: U1 },
    tap: { Feature: _1 },
    focus: { Feature: V1 },
    hover: { Feature: L1 },
  },
  H1 = { layout: { ProjectionNode: dm, MeasureLayout: im } },
  ja = { current: null },
  hm = { current: !1 };
function K1() {
  if (((hm.current = !0), !!Ba))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (ja.current = n.matches);
      (n.addListener(i), i());
    } else ja.current = !1;
}
const G1 = [...Ip, He, yn],
  Q1 = (n) => G1.find(Op(n)),
  Vh = new WeakMap();
function b1(n, i, s) {
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
const _h = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class Y1 {
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
      (this.KeyframeResolver = hu),
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
      (this.isControllingVariants = Js(s)),
      (this.isVariantNode = Gh(s)),
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
      Vh.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, l) => this.bindToMotionValue(l, s)),
      hm.current || K1(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : ja.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Vh.delete(this.current),
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
    const l = In.has(i),
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
    for (i in gr) {
      const s = gr[i];
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
    for (let l = 0; l < _h.length; l++) {
      const c = _h[l];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = b1(
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
        (typeof c == "string" && (_p(c) || Ep(c))
          ? (c = parseFloat(c))
          : !Q1(c) && yn.test(s) && (c = jp(i, s)),
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
      const f = Qa(
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
    return (this.events[i] || (this.events[i] = new lu()), this.events[i].add(s));
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
}
class pm extends Y1 {
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
function X1(n) {
  return window.getComputedStyle(n);
}
class q1 extends pm {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = tp));
  }
  readValueFromInstance(i, s) {
    if (In.has(s)) {
      const l = du(s);
      return (l && l.default) || 0;
    } else {
      const l = X1(i),
        c = (Zh(s) ? l.getPropertyValue(s) : l[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return nm(i, s);
  }
  build(i, s, l) {
    Xa(i, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return eu(i, s, l);
  }
}
class Z1 extends pm {
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
    if (In.has(s)) {
      const l = du(s);
      return (l && l.default) || 0;
    }
    return ((s = np.has(s) ? s : Ha(s)), i.getAttribute(s));
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return sp(i, s, l);
  }
  build(i, s, l) {
    qa(i, s, this.isSVGTag, l.transformTemplate);
  }
  renderInstance(i, s, l, c) {
    rp(i, s, l, c);
  }
  mount(i) {
    ((this.isSVGTag = Ja(i.tagName)), super.mount(i));
  }
}
const J1 = (n, i) => (Ga(n) ? new Z1(i) : new q1(i, { allowProjection: n !== z.Fragment })),
  ew = Cv({ ...Px, ...$1, ...j1, ...H1 }, J1),
  pa = By(ew);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tw = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
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
 */ var nw = {
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
 */ const rw = z.forwardRef(
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
        ...nw,
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
 */ const xn = (n, i) => {
  const s = z.forwardRef(({ className: l, ...c }, d) =>
    z.createElement(rw, { ref: d, iconNode: i, className: mm(`lucide-${tw(n)}`, l), ...c }),
  );
  return ((s.displayName = `${n}`), s);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gm = xn("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iw = xn("Calendar", [
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
 */ const sw = xn("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ow = xn("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3",
    },
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lw = xn("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aw = xn("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ym = xn("Sparkles", [
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
 */ const uw = xn("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function At({ target: n, children: i, className: s, onClick: l, ...c }) {
  return T.jsx("a", {
    href: Ty(n),
    className: s,
    onClick: (d) => {
      (Cy(d, n), l == null || l(d));
    },
    ...c,
    children: i,
  });
}
const cw =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4",
  ma = [
    { label: "Programs", path: "programs" },
    { label: "FAQ", path: "faq" },
    { label: "Contact", path: "contact" },
  ];
function fw(n) {
  if (Fa() !== "") {
    Ys("");
    const s = () => {
      (window.removeEventListener("hashchange", s), requestAnimationFrame(() => ga(n)));
    };
    window.addEventListener("hashchange", s);
    return;
  }
  ga(n);
}
function Fh({ className: n = "h-9 w-9" }) {
  return T.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    fill: "none",
    className: n,
    "aria-hidden": !0,
    children: [
      T.jsx("path", {
        d: "M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
      }),
      T.jsx("path", {
        d: "M36 24c0 6.627-5.373 12-12 12S12 30.627 12 24s5.373-12 12-12",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
      }),
    ],
  });
}
const Is = (n) =>
  `rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${n ? "bg-white/10 text-foreground" : "text-foreground/75 hover:text-foreground"}`;
function dw() {
  const [n, i] = z.useState(!1),
    [s, l] = z.useState(!1),
    [c, d] = z.useState(""),
    f = z.useRef(null);
  (z.useEffect(() => (d(Fa()), zh(d)), []),
    z.useEffect(() => {
      if (!s) return;
      const g = (y) => {
        f.current && !f.current.contains(y.target) && l(!1);
      };
      return (
        document.addEventListener("mousedown", g),
        () => document.removeEventListener("mousedown", g)
      );
    }, [s]));
  const p = c === "wellness" || ma.some((g) => g.path === c),
    m = (g) => (y) => {
      (y.preventDefault(), fw(g), i(!1), l(!1));
    };
  return T.jsxs(T.Fragment, {
    children: [
      T.jsx("header", {
        className: "fixed inset-x-0 top-0 z-50 px-5 py-4 sm:px-8",
        children: T.jsxs("div", {
          className: "mx-auto flex max-w-6xl items-center justify-between gap-3",
          children: [
            T.jsxs(At, {
              target: { kind: "route", path: "" },
              className: "flex shrink-0 items-center gap-2.5 text-foreground",
              "aria-label": "Equilibrium home",
              onClick: () => i(!1),
              children: [
                T.jsx("span", {
                  className:
                    "liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-accent",
                  children: T.jsx(Fh, { className: "h-5 w-5" }),
                }),
                T.jsx("span", {
                  "data-editable": !0,
                  className: "text-sm font-semibold tracking-tight",
                  children: "Equilibrium",
                }),
              ],
            }),
            T.jsxs("nav", {
              className:
                "liquid-glass hidden items-center gap-0.5 rounded-full px-1.5 py-1.5 md:flex",
              "aria-label": "Primary",
              children: [
                T.jsx(At, {
                  target: { kind: "route", path: "" },
                  className: Is(c === ""),
                  "data-editable": !0,
                  children: "Home",
                }),
                T.jsxs("div", {
                  className: "relative",
                  ref: f,
                  children: [
                    T.jsxs("button", {
                      type: "button",
                      className: `inline-flex items-center gap-1 ${Is(p)}`,
                      "aria-expanded": s,
                      "aria-haspopup": "true",
                      onClick: () => l((g) => !g),
                      children: [
                        T.jsx("span", { "data-editable": !0, children: "Wellness" }),
                        T.jsx(sw, { className: "h-3.5 w-3.5 opacity-70", "aria-hidden": !0 }),
                      ],
                    }),
                    s &&
                      T.jsxs("div", {
                        className:
                          "liquid-glass absolute left-0 top-full z-50 mt-2 min-w-[10.5rem] rounded-2xl p-1.5 shadow-lg",
                        children: [
                          T.jsx("a", {
                            href: mn("wellness"),
                            className:
                              "block rounded-xl px-3 py-2 text-sm text-foreground/90 hover:bg-white/5",
                            "data-editable": !0,
                            onClick: m("wellness"),
                            children: "Overview",
                          }),
                          ma.map((g) =>
                            T.jsx(
                              At,
                              {
                                target: { kind: "route", path: g.path },
                                className:
                                  "block rounded-xl px-3 py-2 text-sm text-foreground/90 hover:bg-white/5",
                                "data-editable": !0,
                                onClick: () => l(!1),
                                children: g.label,
                              },
                              g.path,
                            ),
                          ),
                        ],
                      }),
                  ],
                }),
                T.jsx("a", {
                  href: mn("routine"),
                  className: Is(!1),
                  "data-editable": !0,
                  onClick: m("routine"),
                  children: "Routine",
                }),
                T.jsx("a", {
                  href: mn("our-team"),
                  className: Is(!1),
                  "data-editable": !0,
                  onClick: m("our-team"),
                  children: "Our Team",
                }),
              ],
            }),
            T.jsxs("div", {
              className: "hidden items-center gap-2 md:flex",
              children: [
                T.jsx(At, {
                  target: { kind: "route", path: "contact" },
                  className:
                    "liquid-glass rounded-full px-4 py-2 text-sm font-medium text-foreground/85",
                  "data-editable": !0,
                  children: "Log in",
                }),
                T.jsx(At, {
                  target: { kind: "route", path: "contact" },
                  className:
                    "rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition hover:brightness-110",
                  "data-editable": !0,
                  children: "Begin Now",
                }),
              ],
            }),
            T.jsx("button", {
              type: "button",
              className:
                "liquid-glass flex h-10 w-10 items-center justify-center rounded-full md:hidden",
              onClick: () => i(!0),
              "aria-label": "Open menu",
              children: T.jsx(lw, { className: "h-[18px] w-[18px]" }),
            }),
          ],
        }),
      }),
      T.jsx(jy, {
        children:
          n &&
          T.jsxs(T.Fragment, {
            children: [
              T.jsx(pa.button, {
                type: "button",
                className: "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: () => i(!1),
                "aria-label": "Close menu backdrop",
              }),
              T.jsx(pa.aside, {
                className:
                  "fixed right-0 top-0 z-[70] flex h-[100dvh] w-[min(88vw,320px)] flex-col md:hidden",
                initial: { x: "100%" },
                animate: { x: 0 },
                exit: { x: "100%" },
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                children: T.jsxs("div", {
                  className:
                    "liquid-glass flex h-full flex-col border-l border-white/10 bg-surface/95",
                  children: [
                    T.jsxs("div", {
                      className:
                        "flex items-center justify-between border-b border-white/10 px-5 py-4",
                      children: [
                        T.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            T.jsx(Fh, { className: "h-6 w-6 text-accent" }),
                            T.jsx("span", {
                              "data-editable": !0,
                              className: "text-sm font-semibold",
                              children: "Equilibrium",
                            }),
                          ],
                        }),
                        T.jsx("button", {
                          type: "button",
                          onClick: () => i(!1),
                          "aria-label": "Close menu",
                          className:
                            "flex h-9 w-9 items-center justify-center rounded-full text-foreground/80",
                          children: T.jsx(uw, { className: "h-5 w-5" }),
                        }),
                      ],
                    }),
                    T.jsxs("nav", {
                      className: "flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6",
                      children: [
                        T.jsx(At, {
                          target: { kind: "route", path: "" },
                          className:
                            "rounded-xl px-3 py-3 text-base font-medium text-foreground/90 hover:bg-white/5",
                          "data-editable": !0,
                          onClick: () => i(!1),
                          children: "Home",
                        }),
                        T.jsx("p", {
                          className:
                            "px-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40",
                          children: "Wellness",
                        }),
                        T.jsx("a", {
                          href: mn("wellness"),
                          className:
                            "rounded-xl px-3 py-2.5 text-base font-medium text-foreground/90 hover:bg-white/5",
                          "data-editable": !0,
                          onClick: m("wellness"),
                          children: "Overview",
                        }),
                        ma.map((g, y) =>
                          T.jsx(
                            pa.div,
                            {
                              initial: { opacity: 0, x: 12 },
                              animate: { opacity: 1, x: 0 },
                              transition: { delay: 0.08 + y * 0.05 },
                              children: T.jsx(At, {
                                target: { kind: "route", path: g.path },
                                className:
                                  "block rounded-xl px-3 py-2.5 text-base font-medium text-foreground/90 hover:bg-white/5",
                                "data-editable": !0,
                                onClick: () => i(!1),
                                children: g.label,
                              }),
                            },
                            g.path,
                          ),
                        ),
                        T.jsx("a", {
                          href: mn("routine"),
                          className:
                            "rounded-xl px-3 py-3 text-base font-medium text-foreground/90 hover:bg-white/5",
                          "data-editable": !0,
                          onClick: m("routine"),
                          children: "Routine",
                        }),
                        T.jsx("a", {
                          href: mn("our-team"),
                          className:
                            "rounded-xl px-3 py-3 text-base font-medium text-foreground/90 hover:bg-white/5",
                          "data-editable": !0,
                          onClick: m("our-team"),
                          children: "Our Team",
                        }),
                      ],
                    }),
                    T.jsxs("div", {
                      className: "flex flex-col gap-2 border-t border-white/10 p-5",
                      children: [
                        T.jsx(At, {
                          target: { kind: "route", path: "contact" },
                          className:
                            "liquid-glass w-full rounded-full px-5 py-3 text-center text-sm font-medium",
                          "data-editable": !0,
                          onClick: () => i(!1),
                          children: "Log in",
                        }),
                        T.jsx(At, {
                          target: { kind: "route", path: "contact" },
                          className:
                            "w-full rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-background",
                          "data-editable": !0,
                          onClick: () => i(!1),
                          children: "Begin Now",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
      }),
    ],
  });
}
function hw() {
  return T.jsx("section", {
    className: "scroll-mt-20 border-t border-white/8 bg-background px-5 py-24 sm:px-8",
    children: T.jsxs("div", {
      className: "mx-auto max-w-xl",
      children: [
        T.jsx("p", { className: "section-eyebrow mb-3", children: "Contact" }),
        T.jsx("h2", {
          className: "text-3xl font-semibold tracking-[-0.02em] sm:text-4xl",
          children: "Begin your ritual",
        }),
        T.jsx("p", {
          className: "mt-4 text-muted",
          children: "Tell us about your schedule and goals — we respond within one business day.",
        }),
        T.jsxs("form", {
          className: "liquid-glass mt-8 space-y-4 rounded-2xl p-6",
          onSubmit: (n) => n.preventDefault(),
          children: [
            T.jsxs("label", {
              className: "block text-sm font-medium",
              children: [
                "Name",
                T.jsx("input", {
                  type: "text",
                  className:
                    "mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-accent/50",
                  placeholder: "Your name",
                }),
              ],
            }),
            T.jsxs("label", {
              className: "block text-sm font-medium",
              children: [
                "Email",
                T.jsx("input", {
                  type: "email",
                  className:
                    "mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-accent/50",
                  placeholder: "you@studio.com",
                }),
              ],
            }),
            T.jsxs("label", {
              className: "block text-sm font-medium",
              children: [
                "Message",
                T.jsx("textarea", {
                  rows: 4,
                  className:
                    "mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-accent/50",
                  placeholder: "What balance are you seeking?",
                }),
              ],
            }),
            T.jsx("button", {
              type: "submit",
              className: "w-full rounded-full bg-accent py-3 text-sm font-semibold text-background",
              children: "Send message",
            }),
          ],
        }),
        T.jsxs("p", {
          className: "mt-6 text-center text-sm text-muted",
          children: [
            "Prefer email?",
            " ",
            T.jsx("a", {
              href: "mailto:hello@equilibrium.studio",
              className: "text-accent hover:underline",
              children: "hello@equilibrium.studio",
            }),
          ],
        }),
        T.jsx("button", {
          type: "button",
          className: "mx-auto mt-6 block text-sm text-muted underline-offset-2 hover:underline",
          onClick: () => Ys(""),
          children: "Back to home",
        }),
      ],
    }),
  });
}
const pw = [
  {
    q: "Do I need prior yoga or meditation experience?",
    a: "No — coaches adapt breath pacing and mobility progressions to your baseline on day one.",
  },
  {
    q: "Are programs in-person or virtual?",
    a: "Most rituals are hybrid: virtual check-ins with optional studio immersions in select cities.",
  },
  {
    q: "Can teams enroll together?",
    a: "Yes. We offer cohort pricing with shared recovery metrics and executive coaching office hours.",
  },
];
function mw() {
  return T.jsx("section", {
    className: "scroll-mt-20 border-t border-white/8 bg-surface px-5 py-24 sm:px-8",
    children: T.jsxs("div", {
      className: "mx-auto max-w-3xl",
      children: [
        T.jsx("p", { className: "section-eyebrow mb-3", children: "FAQ" }),
        T.jsx("h2", {
          className: "text-3xl font-semibold tracking-[-0.02em] sm:text-4xl",
          children: "Questions before you begin",
        }),
        T.jsx("dl", {
          className: "mt-10 space-y-4",
          children: pw.map(({ q: n, a: i }) =>
            T.jsxs(
              "div",
              {
                className: "liquid-glass rounded-2xl p-5",
                children: [
                  T.jsx("dt", { className: "font-medium text-foreground", children: n }),
                  T.jsx("dd", {
                    className: "mt-2 text-sm leading-relaxed text-muted",
                    children: i,
                  }),
                ],
              },
              n,
            ),
          ),
        }),
      ],
    }),
  });
}
function gw() {
  return T.jsxs("section", {
    id: "home",
    className: "relative min-h-screen overflow-hidden",
    children: [
      T.jsx("video", {
        autoPlay: !0,
        loop: !0,
        muted: !0,
        playsInline: !0,
        className: "absolute inset-0 h-full w-full object-cover",
        "aria-hidden": !0,
        children: T.jsx("source", { src: cw, type: "video/mp4" }),
      }),
      T.jsx("div", {
        className: "hero-scrim pointer-events-none absolute inset-0",
        "aria-hidden": !0,
      }),
      T.jsx("div", {
        className:
          "relative z-10 flex min-h-screen flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20",
        children: T.jsxs("div", {
          className: "max-w-2xl text-left",
          children: [
            T.jsx("h1", {
              "data-editable": !0,
              className:
                "animate-blur-fade-up text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[3.35rem]",
              style: { animationDelay: "180ms" },
              children: "Live Better, Feel Whole Every Day",
            }),
            T.jsxs("div", {
              className: "animate-blur-fade-up mt-8 flex flex-wrap items-center gap-3",
              style: { animationDelay: "380ms" },
              children: [
                T.jsxs(At, {
                  target: { kind: "route", path: "contact" },
                  className:
                    "inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-background transition hover:brightness-110",
                  "data-editable": !0,
                  children: ["Start Today", T.jsx(gm, { className: "h-4 w-4", "aria-hidden": !0 })],
                }),
                T.jsx(At, {
                  target: { kind: "section", id: "wellness" },
                  className:
                    "liquid-glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-foreground",
                  "data-editable": !0,
                  children: "Discover How",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const yw = [
  { time: "06:30", label: "Grounding breath", detail: "4-7-8 pacing · 8 minutes" },
  { time: "12:00", label: "Midday reset", detail: "Desk mobility · 12 minutes" },
  { time: "18:45", label: "Strength flow", detail: "Low load · 35 minutes" },
  { time: "21:30", label: "Sleep primer", detail: "Dim light · journal · 15 minutes" },
];
function vw() {
  return T.jsx("section", {
    id: "routine",
    className: "scroll-mt-20 border-t border-white/8 bg-surface px-5 py-24 sm:px-8",
    children: T.jsx("div", {
      className: "mx-auto max-w-6xl",
      children: T.jsxs("div", {
        className: "flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between",
        children: [
          T.jsxs("div", {
            className: "max-w-md",
            children: [
              T.jsx("p", {
                "data-editable": !0,
                className: "section-eyebrow mb-3",
                children: "Routine",
              }),
              T.jsx("h2", {
                "data-editable": !0,
                className: "text-3xl font-semibold tracking-[-0.02em] sm:text-4xl",
                children: "A day shaped around your nervous system",
              }),
              T.jsx("p", {
                "data-editable": !0,
                className: "mt-4 text-muted",
                children:
                  "Routines adapt to travel, training blocks, and recovery weeks. Your coach recalibrates timing — not intensity — when life shifts.",
              }),
            ],
          }),
          T.jsx("ol", {
            className: "flex-1 space-y-3 lg:max-w-lg",
            children: yw.map((n, i) =>
              T.jsxs(
                "li",
                {
                  className: "liquid-glass flex items-center gap-4 rounded-2xl px-5 py-4",
                  children: [
                    T.jsx("span", {
                      className: "w-14 shrink-0 text-sm font-semibold tabular-nums text-accent",
                      children: n.time,
                    }),
                    T.jsxs("div", {
                      className: "min-w-0 flex-1 border-l border-white/10 pl-4",
                      children: [
                        T.jsx("p", { className: "font-medium", children: n.label }),
                        T.jsx("p", { className: "text-sm text-muted", children: n.detail }),
                      ],
                    }),
                    T.jsx("span", {
                      className: "hidden text-xs text-foreground/40 sm:inline",
                      children: String(i + 1).padStart(2, "0"),
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
const xw = [
  { name: "Dr. Amara Chen", role: "Clinical wellness lead", focus: "Sleep & recovery science" },
  { name: "Marcus Vale", role: "Movement director", focus: "Mobility & strength periodization" },
  { name: "Elena Ruiz", role: "Nutrition architect", focus: "Metabolic rhythm coaching" },
  { name: "Jordan Pike", role: "Mindfulness guide", focus: "Breathwork & stress regulation" },
];
function ww() {
  return T.jsx("section", {
    id: "our-team",
    className: "scroll-mt-20 border-t border-white/8 bg-background px-5 py-24 sm:px-8",
    children: T.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        T.jsx("p", {
          "data-editable": !0,
          className: "section-eyebrow mb-3",
          children: "Our Team",
        }),
        T.jsx("h2", {
          "data-editable": !0,
          className: "max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl",
          children: "Practitioners who measure calm, not hustle",
        }),
        T.jsx("p", {
          "data-editable": !0,
          className: "mt-4 max-w-xl text-muted",
          children:
            "Equilibrium coaches blend clinical rigor with studio warmth — every session ends with a plan you can repeat without us in the room.",
        }),
        T.jsx("div", {
          className: "mt-12 grid gap-4 sm:grid-cols-2",
          children: xw.map((n) =>
            T.jsxs(
              "article",
              {
                className:
                  "liquid-glass flex flex-col rounded-2xl p-6 sm:flex-row sm:items-center sm:gap-5",
                children: [
                  T.jsx("div", {
                    className:
                      "mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-emerald-900/40 text-lg font-semibold text-foreground sm:mb-0",
                    "aria-hidden": !0,
                    children: n.name
                      .split(" ")
                      .map((i) => i[0])
                      .join(""),
                  }),
                  T.jsxs("div", {
                    children: [
                      T.jsx("h3", { className: "font-semibold", children: n.name }),
                      T.jsx("p", { className: "text-sm text-accent", children: n.role }),
                      T.jsx("p", { className: "mt-1 text-sm text-muted", children: n.focus }),
                    ],
                  }),
                ],
              },
              n.name,
            ),
          ),
        }),
      ],
    }),
  });
}
const Sw = [
  {
    icon: ow,
    title: "Mindful movement",
    body: "Low-impact flows that restore joint mobility and nervous-system calm without burnout.",
  },
  {
    icon: aw,
    title: "Sleep architecture",
    body: "Evening protocols and breath pacing that deepen recovery between demanding days.",
  },
  {
    icon: ym,
    title: "Nutrition rhythm",
    body: "Seasonal meal cadences aligned to energy peaks — not restrictive, intentionally balanced.",
  },
];
function vm() {
  return T.jsx("section", {
    id: "wellness",
    className: "scroll-mt-20 border-t border-white/8 bg-background px-5 py-24 sm:px-8",
    children: T.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        T.jsx("p", {
          "data-editable": !0,
          className: "section-eyebrow mb-3",
          children: "Wellness",
        }),
        T.jsx("h2", {
          "data-editable": !0,
          className: "max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl",
          children: "Three pillars that hold your center",
        }),
        T.jsx("p", {
          "data-editable": !0,
          className: "mt-4 max-w-xl text-muted",
          children:
            "Every program at Equilibrium maps to movement, rest, and nourishment — the triangle that keeps high performers from tipping into depletion.",
        }),
        T.jsx("div", {
          className: "mt-12 grid gap-5 sm:grid-cols-3",
          children: Sw.map(({ icon: n, title: i, body: s }) =>
            T.jsxs(
              "article",
              {
                className: "liquid-glass rounded-2xl p-6 transition hover:bg-white/[0.06]",
                children: [
                  T.jsx("div", {
                    className:
                      "mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent",
                    children: T.jsx(n, { className: "h-5 w-5", strokeWidth: 1.5 }),
                  }),
                  T.jsx("h3", { className: "text-lg font-semibold", children: i }),
                  T.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted", children: s }),
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
function kw() {
  return T.jsxs(T.Fragment, {
    children: [T.jsx(gw, {}), T.jsx(vm, {}), T.jsx(vw, {}), T.jsx(ww, {})],
  });
}
const Pw = [
  {
    name: "Morning Reset",
    cadence: "6 weeks · 3 sessions / week",
    focus: "Breath-led mobility and nervous-system downshift before your workday peaks.",
  },
  {
    name: "Executive Recovery",
    cadence: "8 weeks · hybrid",
    focus:
      "Sleep architecture coaching, guided stillness, and nutrition rhythm for travel-heavy schedules.",
  },
  {
    name: "Studio Immersion",
    cadence: "Weekend intensive",
    focus:
      "In-person ritual design with coaches — movement labs, sauna protocols, and group reflection.",
  },
];
function Tw() {
  return T.jsx("section", {
    className: "scroll-mt-20 border-t border-white/8 bg-background px-5 py-24 sm:px-8",
    children: T.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        T.jsx("p", { className: "section-eyebrow mb-3", children: "Programs" }),
        T.jsx("h2", {
          className: "max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl",
          children: "Rituals designed for real calendars",
        }),
        T.jsx("p", {
          className: "mt-4 max-w-xl text-muted",
          children:
            "Every Equilibrium program blends movement, rest, and nourishment — paced for founders, creatives, and teams who refuse hustle-as-identity.",
        }),
        T.jsx("div", {
          className: "mt-12 grid gap-5 lg:grid-cols-3",
          children: Pw.map(({ name: n, cadence: i, focus: s }) =>
            T.jsxs(
              "article",
              {
                className: "liquid-glass rounded-2xl p-6",
                children: [
                  T.jsx("div", {
                    className:
                      "mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent",
                    children: T.jsx(iw, { className: "h-5 w-5", strokeWidth: 1.5 }),
                  }),
                  T.jsx("h3", { className: "text-lg font-semibold", children: n }),
                  T.jsx("p", {
                    className:
                      "mt-1 text-xs font-medium uppercase tracking-[0.18em] text-accent/90",
                    children: i,
                  }),
                  T.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted", children: s }),
                ],
              },
              n,
            ),
          ),
        }),
        T.jsxs("button", {
          type: "button",
          className:
            "liquid-glass mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-foreground",
          onClick: () => Ys("contact"),
          children: [
            T.jsx(ym, { className: "h-4 w-4 text-accent" }),
            "Book a discovery call",
            T.jsx(gm, { className: "h-4 w-4" }),
          ],
        }),
      ],
    }),
  });
}
function Cw() {
  return T.jsx(vm, {});
}
function Ew() {
  return (
    z.useEffect(() => {
      Ih();
    }, []),
    T.jsxs("div", {
      className: "min-h-screen bg-background text-foreground",
      children: [
        T.jsx(dw, {}),
        T.jsx("main", {
          children: T.jsx(Ny, {
            routes: {
              "": T.jsx(kw, {}),
              wellness: T.jsx(Cw, {}),
              programs: T.jsx(Tw, {}),
              faq: T.jsx(mw, {}),
              contact: T.jsx(hw, {}),
            },
          }),
        }),
        T.jsx("footer", {
          className: "border-t border-white/8 px-5 py-10 text-center text-sm text-muted sm:px-8",
          children: T.jsxs("p", {
            "data-editable": !0,
            children: ["© ", new Date().getFullYear(), " Equilibrium Wellness Studio"],
          }),
        }),
      ],
    })
  );
}
Py.createRoot(document.getElementById("root")).render(
  T.jsx(z.StrictMode, { children: T.jsx(Ew, {}) }),
);
