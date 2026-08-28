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
var Yl = { exports: {} },
  ri = {},
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
function ay() {
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
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function P(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (x && k[x]) || k["@@iterator"]), typeof k == "function" ? k : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    R = {};
  function V(k, N, re) {
    ((this.props = k), (this.context = N), (this.refs = R), (this.updater = re || A));
  }
  ((V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (k, N) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, k, N, "setState");
    }),
    (V.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    }));
  function O() {}
  O.prototype = V.prototype;
  function W(k, N, re) {
    ((this.props = k), (this.context = N), (this.refs = R), (this.updater = re || A));
  }
  var K = (W.prototype = new O());
  ((K.constructor = W), _(K, V.prototype), (K.isPureReactComponent = !0));
  var Y = Array.isArray,
    B = Object.prototype.hasOwnProperty,
    ee = { current: null },
    le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(k, N, re) {
    var oe,
      ue = {},
      ce = null,
      pe = null;
    if (N != null)
      for (oe in (N.ref !== void 0 && (pe = N.ref), N.key !== void 0 && (ce = "" + N.key), N))
        B.call(N, oe) && !le.hasOwnProperty(oe) && (ue[oe] = N[oe]);
    var de = arguments.length - 2;
    if (de === 1) ue.children = re;
    else if (1 < de) {
      for (var we = Array(de), st = 0; st < de; st++) we[st] = arguments[st + 2];
      ue.children = we;
    }
    if (k && k.defaultProps)
      for (oe in ((de = k.defaultProps), de)) ue[oe] === void 0 && (ue[oe] = de[oe]);
    return { $$typeof: n, type: k, key: ce, ref: pe, props: ue, _owner: ee.current };
  }
  function ge(k, N) {
    return { $$typeof: n, type: k.type, key: N, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Ce(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }
  function qe(k) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (re) {
        return N[re];
      })
    );
  }
  var it = /\/+/g;
  function Ge(k, N) {
    return typeof k == "object" && k !== null && k.key != null ? qe("" + k.key) : N.toString(36);
  }
  function Ze(k, N, re, oe, ue) {
    var ce = typeof k;
    (ce === "undefined" || ce === "boolean") && (k = null);
    var pe = !1;
    if (k === null) pe = !0;
    else
      switch (ce) {
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case n:
            case i:
              pe = !0;
          }
      }
    if (pe)
      return (
        (pe = k),
        (ue = ue(pe)),
        (k = oe === "" ? "." + Ge(pe, 0) : oe),
        Y(ue)
          ? ((re = ""),
            k != null && (re = k.replace(it, "$&/") + "/"),
            Ze(ue, N, re, "", function (st) {
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
                  k,
              )),
            N.push(ue)),
        1
      );
    if (((pe = 0), (oe = oe === "" ? "." : oe + ":"), Y(k)))
      for (var de = 0; de < k.length; de++) {
        ce = k[de];
        var we = oe + Ge(ce, de);
        pe += Ze(ce, N, re, we, ue);
      }
    else if (((we = P(k)), typeof we == "function"))
      for (k = we.call(k), de = 0; !(ce = k.next()).done;)
        ((ce = ce.value), (we = oe + Ge(ce, de++)), (pe += Ze(ce, N, re, we, ue)));
    else if (ce === "object")
      throw (
        (N = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : N) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return pe;
  }
  function wt(k, N, re) {
    if (k == null) return k;
    var oe = [],
      ue = 0;
    return (
      Ze(k, oe, "", "", function (ce) {
        return N.call(re, ce, ue++);
      }),
      oe
    );
  }
  function Qe(k) {
    if (k._status === -1) {
      var N = k._result;
      ((N = N()),
        N.then(
          function (re) {
            (k._status === 0 || k._status === -1) && ((k._status = 1), (k._result = re));
          },
          function (re) {
            (k._status === 0 || k._status === -1) && ((k._status = 2), (k._result = re));
          },
        ),
        k._status === -1 && ((k._status = 0), (k._result = N)));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ie = { current: null },
    I = { transition: null },
    Z = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: I, ReactCurrentOwner: ee };
  function $() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (se.Children = {
      map: wt,
      forEach: function (k, N, re) {
        wt(
          k,
          function () {
            N.apply(this, arguments);
          },
          re,
        );
      },
      count: function (k) {
        var N = 0;
        return (
          wt(k, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (k) {
        return (
          wt(k, function (N) {
            return N;
          }) || []
        );
      },
      only: function (k) {
        if (!Ce(k))
          throw Error("React.Children.only expected to receive a single React element child.");
        return k;
      },
    }),
    (se.Component = V),
    (se.Fragment = s),
    (se.Profiler = c),
    (se.PureComponent = W),
    (se.StrictMode = l),
    (se.Suspense = m),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
    (se.act = $),
    (se.cloneElement = function (k, N, re) {
      if (k == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            k +
            ".",
        );
      var oe = _({}, k.props),
        ue = k.key,
        ce = k.ref,
        pe = k._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((ce = N.ref), (pe = ee.current)),
          N.key !== void 0 && (ue = "" + N.key),
          k.type && k.type.defaultProps)
        )
          var de = k.type.defaultProps;
        for (we in N)
          B.call(N, we) &&
            !le.hasOwnProperty(we) &&
            (oe[we] = N[we] === void 0 && de !== void 0 ? de[we] : N[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) oe.children = re;
      else if (1 < we) {
        de = Array(we);
        for (var st = 0; st < we; st++) de[st] = arguments[st + 2];
        oe.children = de;
      }
      return { $$typeof: n, type: k.type, key: ue, ref: ce, props: oe, _owner: pe };
    }),
    (se.createContext = function (k) {
      return (
        (k = {
          $$typeof: f,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: d, _context: k }),
        (k.Consumer = k)
      );
    }),
    (se.createElement = q),
    (se.createFactory = function (k) {
      var N = q.bind(null, k);
      return ((N.type = k), N);
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (k) {
      return { $$typeof: p, render: k };
    }),
    (se.isValidElement = Ce),
    (se.lazy = function (k) {
      return { $$typeof: y, _payload: { _status: -1, _result: k }, _init: Qe };
    }),
    (se.memo = function (k, N) {
      return { $$typeof: g, type: k, compare: N === void 0 ? null : N };
    }),
    (se.startTransition = function (k) {
      var N = I.transition;
      I.transition = {};
      try {
        k();
      } finally {
        I.transition = N;
      }
    }),
    (se.unstable_act = $),
    (se.useCallback = function (k, N) {
      return ie.current.useCallback(k, N);
    }),
    (se.useContext = function (k) {
      return ie.current.useContext(k);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (k) {
      return ie.current.useDeferredValue(k);
    }),
    (se.useEffect = function (k, N) {
      return ie.current.useEffect(k, N);
    }),
    (se.useId = function () {
      return ie.current.useId();
    }),
    (se.useImperativeHandle = function (k, N, re) {
      return ie.current.useImperativeHandle(k, N, re);
    }),
    (se.useInsertionEffect = function (k, N) {
      return ie.current.useInsertionEffect(k, N);
    }),
    (se.useLayoutEffect = function (k, N) {
      return ie.current.useLayoutEffect(k, N);
    }),
    (se.useMemo = function (k, N) {
      return ie.current.useMemo(k, N);
    }),
    (se.useReducer = function (k, N, re) {
      return ie.current.useReducer(k, N, re);
    }),
    (se.useRef = function (k) {
      return ie.current.useRef(k);
    }),
    (se.useState = function (k) {
      return ie.current.useState(k);
    }),
    (se.useSyncExternalStore = function (k, N, re) {
      return ie.current.useSyncExternalStore(k, N, re);
    }),
    (se.useTransition = function () {
      return ie.current.useTransition();
    }),
    (se.version = "18.3.1"),
    se
  );
}
var ud;
function Ra() {
  return (ud || ((ud = 1), (ql.exports = ay())), ql.exports);
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
function uy() {
  if (cd) return ri;
  cd = 1;
  var n = Ra(),
    i = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, g) {
    var y,
      x = {},
      P = null,
      A = null;
    (g !== void 0 && (P = "" + g),
      m.key !== void 0 && (P = "" + m.key),
      m.ref !== void 0 && (A = m.ref));
    for (y in m) l.call(m, y) && !d.hasOwnProperty(y) && (x[y] = m[y]);
    if (p && p.defaultProps) for (y in ((m = p.defaultProps), m)) x[y] === void 0 && (x[y] = m[y]);
    return { $$typeof: i, type: p, key: P, ref: A, props: x, _owner: c.current };
  }
  return ((ri.Fragment = s), (ri.jsx = f), (ri.jsxs = f), ri);
}
var fd;
function cy() {
  return (fd || ((fd = 1), (Yl.exports = uy())), Yl.exports);
}
var D = cy(),
  z = Ra(),
  Ns = {},
  Zl = { exports: {} },
  rt = {},
  bl = { exports: {} },
  Jl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd;
function fy() {
  return (
    dd ||
      ((dd = 1),
      (function (n) {
        function i(I, Z) {
          var $ = I.length;
          I.push(Z);
          e: for (; 0 < $;) {
            var k = ($ - 1) >>> 1,
              N = I[k];
            if (0 < c(N, Z)) ((I[k] = Z), (I[$] = N), ($ = k));
            else break e;
          }
        }
        function s(I) {
          return I.length === 0 ? null : I[0];
        }
        function l(I) {
          if (I.length === 0) return null;
          var Z = I[0],
            $ = I.pop();
          if ($ !== Z) {
            I[0] = $;
            e: for (var k = 0, N = I.length, re = N >>> 1; k < re;) {
              var oe = 2 * (k + 1) - 1,
                ue = I[oe],
                ce = oe + 1,
                pe = I[ce];
              if (0 > c(ue, $))
                ce < N && 0 > c(pe, ue)
                  ? ((I[k] = pe), (I[ce] = $), (k = ce))
                  : ((I[k] = ue), (I[oe] = $), (k = oe));
              else if (ce < N && 0 > c(pe, $)) ((I[k] = pe), (I[ce] = $), (k = ce));
              else break e;
            }
          }
          return Z;
        }
        function c(I, Z) {
          var $ = I.sortIndex - Z.sortIndex;
          return $ !== 0 ? $ : I.id - Z.id;
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
          P = 3,
          A = !1,
          _ = !1,
          R = !1,
          V = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function K(I) {
          for (var Z = s(g); Z !== null;) {
            if (Z.callback === null) l(g);
            else if (Z.startTime <= I) (l(g), (Z.sortIndex = Z.expirationTime), i(m, Z));
            else break;
            Z = s(g);
          }
        }
        function Y(I) {
          if (((R = !1), K(I), !_))
            if (s(m) !== null) ((_ = !0), Qe(B));
            else {
              var Z = s(g);
              Z !== null && ie(Y, Z.startTime - I);
            }
        }
        function B(I, Z) {
          ((_ = !1), R && ((R = !1), O(q), (q = -1)), (A = !0));
          var $ = P;
          try {
            for (K(Z), x = s(m); x !== null && (!(x.expirationTime > Z) || (I && !qe()));) {
              var k = x.callback;
              if (typeof k == "function") {
                ((x.callback = null), (P = x.priorityLevel));
                var N = k(x.expirationTime <= Z);
                ((Z = n.unstable_now()),
                  typeof N == "function" ? (x.callback = N) : x === s(m) && l(m),
                  K(Z));
              } else l(m);
              x = s(m);
            }
            if (x !== null) var re = !0;
            else {
              var oe = s(g);
              (oe !== null && ie(Y, oe.startTime - Z), (re = !1));
            }
            return re;
          } finally {
            ((x = null), (P = $), (A = !1));
          }
        }
        var ee = !1,
          le = null,
          q = -1,
          ge = 5,
          Ce = -1;
        function qe() {
          return !(n.unstable_now() - Ce < ge);
        }
        function it() {
          if (le !== null) {
            var I = n.unstable_now();
            Ce = I;
            var Z = !0;
            try {
              Z = le(!0, I);
            } finally {
              Z ? Ge() : ((ee = !1), (le = null));
            }
          } else ee = !1;
        }
        var Ge;
        if (typeof W == "function")
          Ge = function () {
            W(it);
          };
        else if (typeof MessageChannel < "u") {
          var Ze = new MessageChannel(),
            wt = Ze.port2;
          ((Ze.port1.onmessage = it),
            (Ge = function () {
              wt.postMessage(null);
            }));
        } else
          Ge = function () {
            V(it, 0);
          };
        function Qe(I) {
          ((le = I), ee || ((ee = !0), Ge()));
        }
        function ie(I, Z) {
          q = V(function () {
            I(n.unstable_now());
          }, Z);
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
            _ || A || ((_ = !0), Qe(B));
          }),
          (n.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ge = 0 < I ? Math.floor(1e3 / I) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return P;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (n.unstable_next = function (I) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = P;
            }
            var $ = P;
            P = Z;
            try {
              return I();
            } finally {
              P = $;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (I, Z) {
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
            var $ = P;
            P = I;
            try {
              return Z();
            } finally {
              P = $;
            }
          }),
          (n.unstable_scheduleCallback = function (I, Z, $) {
            var k = n.unstable_now();
            switch (
              (typeof $ == "object" && $ !== null
                ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? k + $ : k))
                : ($ = k),
              I)
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
              (N = $ + N),
              (I = {
                id: y++,
                callback: Z,
                priorityLevel: I,
                startTime: $,
                expirationTime: N,
                sortIndex: -1,
              }),
              $ > k
                ? ((I.sortIndex = $),
                  i(g, I),
                  s(m) === null && I === s(g) && (R ? (O(q), (q = -1)) : (R = !0), ie(Y, $ - k)))
                : ((I.sortIndex = N), i(m, I), _ || A || ((_ = !0), Qe(B))),
              I
            );
          }),
          (n.unstable_shouldYield = qe),
          (n.unstable_wrapCallback = function (I) {
            var Z = P;
            return function () {
              var $ = P;
              P = Z;
              try {
                return I.apply(this, arguments);
              } finally {
                P = $;
              }
            };
          }));
      })(Jl)),
    Jl
  );
}
var hd;
function dy() {
  return (hd || ((hd = 1), (bl.exports = fy())), bl.exports);
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
function hy() {
  if (pd) return rt;
  pd = 1;
  var n = Ra(),
    i = dy();
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
  function P(e) {
    return m.call(x, e) ? !0 : m.call(y, e) ? !1 : g.test(e) ? (x[e] = !0) : ((y[e] = !0), !1);
  }
  function A(e, t, r, o) {
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
    if (t === null || typeof t > "u" || A(e, t, r, o)) return !0;
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
  var V = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      V[e] = new R(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      V[t] = new R(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      V[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        V[e] = new R(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        V[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      V[e] = new R(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      V[e] = new R(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      V[e] = new R(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      V[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var O = /[\-:]([a-z])/g;
  function W(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(O, W);
      V[t] = new R(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(O, W);
        V[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(O, W);
      V[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      V[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (V.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      V[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function K(e, t, r, o) {
    var a = V.hasOwnProperty(t) ? V[t] : null;
    (a !== null
      ? a.type !== 0
      : o || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (_(t, r, a, o) && (r = null),
      o || a === null
        ? P(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
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
    q = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    Ce = Symbol.for("react.provider"),
    qe = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    Ge = Symbol.for("react.suspense"),
    Ze = Symbol.for("react.suspense_list"),
    wt = Symbol.for("react.memo"),
    Qe = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    I = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (I && e[I]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var $ = Object.assign,
    k;
  function N(e) {
    if (k === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        k = (t && t[1]) || "";
      }
    return (
      `
` +
      k +
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
      case le:
        return "Fragment";
      case ee:
        return "Portal";
      case ge:
        return "Profiler";
      case q:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case Ze:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case qe:
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
  function Si(e) {
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
  function Pi(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function to(e, t) {
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
  function no(e, t) {
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
      ? ro(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && ro(e, t.type, de(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function gu(e, t, r) {
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
  function ro(e, t, r) {
    (t !== "number" || Pi(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var vr = Array.isArray;
  function Fn(e, t, r, o) {
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
  function io(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return $({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function yu(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(s(92));
        if (vr(r)) {
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
  function so(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? wu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var ki,
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
          ki = ki || document.createElement("div"),
            ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ki.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function xr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wr = {
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
    dm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(wr).forEach(function (e) {
    dm.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wr[t] = wr[e]));
    });
  });
  function Pu(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (wr.hasOwnProperty(e) && wr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function ku(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf("--") === 0,
          a = Pu(r, t[r], o);
        (r === "float" && (r = "cssFloat"), o ? e.setProperty(r, a) : (e[r] = a));
      }
  }
  var hm = $(
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
  function oo(e, t) {
    if (t) {
      if (hm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function lo(e, t) {
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
  var ao = null;
  function uo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var co = null,
    On = null,
    In = null;
  function Tu(e) {
    if ((e = Wr(e))) {
      if (typeof co != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Gi(t)), co(e.stateNode, e.type, t));
    }
  }
  function Cu(e) {
    On ? (In ? In.push(e) : (In = [e])) : (On = e);
  }
  function Eu() {
    if (On) {
      var e = On,
        t = In;
      if (((In = On = null), Tu(e), t)) for (e = 0; e < t.length; e++) Tu(t[e]);
    }
  }
  function Au(e, t) {
    return e(t);
  }
  function Du() {}
  var fo = !1;
  function Ru(e, t, r) {
    if (fo) return e(t, r);
    fo = !0;
    try {
      return Au(e, t, r);
    } finally {
      ((fo = !1), (On !== null || In !== null) && (Du(), Eu()));
    }
  }
  function Sr(e, t) {
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
  var ho = !1;
  if (p)
    try {
      var Pr = {};
      (Object.defineProperty(Pr, "passive", {
        get: function () {
          ho = !0;
        },
      }),
        window.addEventListener("test", Pr, Pr),
        window.removeEventListener("test", Pr, Pr));
    } catch {
      ho = !1;
    }
  function pm(e, t, r, o, a, u, h, v, w) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, E);
    } catch (L) {
      this.onError(L);
    }
  }
  var kr = !1,
    Ti = null,
    Ci = !1,
    po = null,
    mm = {
      onError: function (e) {
        ((kr = !0), (Ti = e));
      },
    };
  function gm(e, t, r, o, a, u, h, v, w) {
    ((kr = !1), (Ti = null), pm.apply(mm, arguments));
  }
  function ym(e, t, r, o, a, u, h, v, w) {
    if ((gm.apply(this, arguments), kr)) {
      if (kr) {
        var E = Ti;
        ((kr = !1), (Ti = null));
      } else throw Error(s(198));
      Ci || ((Ci = !0), (po = E));
    }
  }
  function yn(e) {
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
  function Mu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Nu(e) {
    if (yn(e) !== e) throw Error(s(188));
  }
  function vm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = yn(e)), t === null)) throw Error(s(188));
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
          if (u === r) return (Nu(a), e);
          if (u === o) return (Nu(a), t);
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
  function Lu(e) {
    return ((e = vm(e)), e !== null ? Vu(e) : null);
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
    xm = i.unstable_shouldYield,
    wm = i.unstable_requestPaint,
    De = i.unstable_now,
    Sm = i.unstable_getCurrentPriorityLevel,
    mo = i.unstable_ImmediatePriority,
    Fu = i.unstable_UserBlockingPriority,
    Ei = i.unstable_NormalPriority,
    Pm = i.unstable_LowPriority,
    Ou = i.unstable_IdlePriority,
    Ai = null,
    Rt = null;
  function km(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == "function")
      try {
        Rt.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : Em,
    Tm = Math.log,
    Cm = Math.LN2;
  function Em(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Tm(e) / Cm) | 0)) | 0);
  }
  var Di = 64,
    Ri = 4194304;
  function Tr(e) {
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
  function Mi(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      a = e.suspendedLanes,
      u = e.pingedLanes,
      h = r & 268435455;
    if (h !== 0) {
      var v = h & ~a;
      v !== 0 ? (o = Tr(v)) : ((u &= h), u !== 0 && (o = Tr(u)));
    } else ((h = r & ~a), h !== 0 ? (o = Tr(h)) : u !== 0 && (o = Tr(u)));
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
  function Am(e, t) {
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
  function Dm(e, t) {
    for (
      var r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var h = 31 - St(u),
        v = 1 << h,
        w = a[h];
      (w === -1
        ? ((v & r) === 0 || (v & o) !== 0) && (a[h] = Am(v, t))
        : w <= t && (e.expiredLanes |= v),
        (u &= ~v));
    }
  }
  function go(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Iu() {
    var e = Di;
    return ((Di <<= 1), (Di & 4194240) === 0 && (Di = 64), e);
  }
  function yo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Cr(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - St(t)),
      (e[t] = r));
  }
  function Rm(e, t) {
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
  function vo(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r;) {
      var o = 31 - St(r),
        a = 1 << o;
      ((a & t) | (e[o] & t) && (e[o] |= t), (r &= ~a));
    }
  }
  var he = 0;
  function zu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Bu,
    xo,
    Uu,
    Wu,
    $u,
    wo = !1,
    Ni = [],
    Qt = null,
    Xt = null,
    Yt = null,
    Er = new Map(),
    Ar = new Map(),
    qt = [],
    Mm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Hu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Qt = null;
        break;
      case "dragenter":
      case "dragleave":
        Xt = null;
        break;
      case "mouseover":
      case "mouseout":
        Yt = null;
        break;
      case "pointerover":
      case "pointerout":
        Er.delete(t.pointerId);
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
        t !== null && ((t = Wr(t)), t !== null && xo(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function Nm(e, t, r, o, a) {
    switch (t) {
      case "focusin":
        return ((Qt = Dr(Qt, e, t, r, o, a)), !0);
      case "dragenter":
        return ((Xt = Dr(Xt, e, t, r, o, a)), !0);
      case "mouseover":
        return ((Yt = Dr(Yt, e, t, r, o, a)), !0);
      case "pointerover":
        var u = a.pointerId;
        return (Er.set(u, Dr(Er.get(u) || null, e, t, r, o, a)), !0);
      case "gotpointercapture":
        return ((u = a.pointerId), Ar.set(u, Dr(Ar.get(u) || null, e, t, r, o, a)), !0);
    }
    return !1;
  }
  function Ku(e) {
    var t = vn(e.target);
    if (t !== null) {
      var r = yn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Mu(r)), t !== null)) {
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
  function Li(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var r = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((ao = o), r.target.dispatchEvent(o), (ao = null));
      } else return ((t = Wr(r)), t !== null && xo(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Gu(e, t, r) {
    Li(e) && r.delete(t);
  }
  function Lm() {
    ((wo = !1),
      Qt !== null && Li(Qt) && (Qt = null),
      Xt !== null && Li(Xt) && (Xt = null),
      Yt !== null && Li(Yt) && (Yt = null),
      Er.forEach(Gu),
      Ar.forEach(Gu));
  }
  function Rr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      wo || ((wo = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Lm)));
  }
  function Mr(e) {
    function t(a) {
      return Rr(a, e);
    }
    if (0 < Ni.length) {
      Rr(Ni[0], e);
      for (var r = 1; r < Ni.length; r++) {
        var o = Ni[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Qt !== null && Rr(Qt, e),
        Xt !== null && Rr(Xt, e),
        Yt !== null && Rr(Yt, e),
        Er.forEach(t),
        Ar.forEach(t),
        r = 0;
      r < qt.length;
      r++
    )
      ((o = qt[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < qt.length && ((r = qt[0]), r.blockedOn === null);)
      (Ku(r), r.blockedOn === null && qt.shift());
  }
  var zn = Y.ReactCurrentBatchConfig,
    Vi = !0;
  function Vm(e, t, r, o) {
    var a = he,
      u = zn.transition;
    zn.transition = null;
    try {
      ((he = 1), So(e, t, r, o));
    } finally {
      ((he = a), (zn.transition = u));
    }
  }
  function jm(e, t, r, o) {
    var a = he,
      u = zn.transition;
    zn.transition = null;
    try {
      ((he = 4), So(e, t, r, o));
    } finally {
      ((he = a), (zn.transition = u));
    }
  }
  function So(e, t, r, o) {
    if (Vi) {
      var a = Po(e, t, r, o);
      if (a === null) (zo(e, t, o, ji, r), Hu(e, o));
      else if (Nm(a, e, t, r, o)) o.stopPropagation();
      else if ((Hu(e, o), t & 4 && -1 < Mm.indexOf(e))) {
        for (; a !== null;) {
          var u = Wr(a);
          if (
            (u !== null && Bu(u), (u = Po(e, t, r, o)), u === null && zo(e, t, o, ji, r), u === a)
          )
            break;
          a = u;
        }
        a !== null && o.stopPropagation();
      } else zo(e, t, o, null, r);
    }
  }
  var ji = null;
  function Po(e, t, r, o) {
    if (((ji = null), (e = uo(o)), (e = vn(e)), e !== null))
      if (((t = yn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Mu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((ji = e), null);
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
        switch (Sm()) {
          case mo:
            return 1;
          case Fu:
            return 4;
          case Ei:
          case Pm:
            return 16;
          case Ou:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Zt = null,
    ko = null,
    _i = null;
  function Xu() {
    if (_i) return _i;
    var e,
      t = ko,
      r = t.length,
      o,
      a = "value" in Zt ? Zt.value : Zt.textContent,
      u = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var h = r - e;
    for (o = 1; o <= h && t[r - o] === a[u - o]; o++);
    return (_i = a.slice(e, 1 < o ? 1 - o : void 0));
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
  function Yu() {
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
          ? Oi
          : Yu),
        (this.isPropagationStopped = Yu),
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
  var Bn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    To = ot(Bn),
    Nr = $({}, Bn, { view: 0, detail: 0 }),
    _m = ot(Nr),
    Co,
    Eo,
    Lr,
    Ii = $({}, Nr, {
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
          : (e !== Lr &&
              (Lr && e.type === "mousemove"
                ? ((Co = e.screenX - Lr.screenX), (Eo = e.screenY - Lr.screenY))
                : (Eo = Co = 0),
              (Lr = e)),
            Co);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Eo;
      },
    }),
    qu = ot(Ii),
    Fm = $({}, Ii, { dataTransfer: 0 }),
    Om = ot(Fm),
    Im = $({}, Nr, { relatedTarget: 0 }),
    Ao = ot(Im),
    zm = $({}, Bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bm = ot(zm),
    Um = $({}, Bn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Wm = ot(Um),
    $m = $({}, Bn, { data: 0 }),
    Zu = ot($m),
    Hm = {
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
    Km = {
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
    Gm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Qm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Gm[e]) ? !!t[e] : !1;
  }
  function Do() {
    return Qm;
  }
  var Xm = $({}, Nr, {
      key: function (e) {
        if (e.key) {
          var t = Hm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Km[e.keyCode] || "Unidentified"
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
    Ym = ot(Xm),
    qm = $({}, Ii, {
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
    bu = ot(qm),
    Zm = $({}, Nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Do,
    }),
    bm = ot(Zm),
    Jm = $({}, Bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    eg = ot(Jm),
    tg = $({}, Ii, {
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
    ng = ot(tg),
    rg = [9, 13, 27, 32],
    Ro = p && "CompositionEvent" in window,
    Vr = null;
  p && "documentMode" in document && (Vr = document.documentMode);
  var ig = p && "TextEvent" in window && !Vr,
    Ju = p && (!Ro || (Vr && 8 < Vr && 11 >= Vr)),
    ec = " ",
    tc = !1;
  function nc(e, t) {
    switch (e) {
      case "keyup":
        return rg.indexOf(t.keyCode) !== -1;
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
  var Un = !1;
  function sg(e, t) {
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
  function og(e, t) {
    if (Un)
      return e === "compositionend" || (!Ro && nc(e, t))
        ? ((e = Xu()), (_i = ko = Zt = null), (Un = !1), e)
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
        return Ju && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var lg = {
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
    return t === "input" ? !!lg[e.type] : t === "textarea";
  }
  function sc(e, t, r, o) {
    (Cu(o),
      (t = $i(t, "onChange")),
      0 < t.length &&
        ((r = new To("onChange", "change", null, r, o)), e.push({ event: r, listeners: t })));
  }
  var jr = null,
    _r = null;
  function ag(e) {
    kc(e, 0);
  }
  function zi(e) {
    var t = Gn(e);
    if (hu(t)) return e;
  }
  function ug(e, t) {
    if (e === "change") return t;
  }
  var oc = !1;
  if (p) {
    var Mo;
    if (p) {
      var No = "oninput" in document;
      if (!No) {
        var lc = document.createElement("div");
        (lc.setAttribute("oninput", "return;"), (No = typeof lc.oninput == "function"));
      }
      Mo = No;
    } else Mo = !1;
    oc = Mo && (!document.documentMode || 9 < document.documentMode);
  }
  function ac() {
    jr && (jr.detachEvent("onpropertychange", uc), (_r = jr = null));
  }
  function uc(e) {
    if (e.propertyName === "value" && zi(_r)) {
      var t = [];
      (sc(t, _r, e, uo(e)), Ru(ag, t));
    }
  }
  function cg(e, t, r) {
    e === "focusin"
      ? (ac(), (jr = t), (_r = r), jr.attachEvent("onpropertychange", uc))
      : e === "focusout" && ac();
  }
  function fg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zi(_r);
  }
  function dg(e, t) {
    if (e === "click") return zi(t);
  }
  function hg(e, t) {
    if (e === "input" || e === "change") return zi(t);
  }
  function pg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Pt = typeof Object.is == "function" ? Object.is : pg;
  function Fr(e, t) {
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
  function mg(e) {
    var t = hc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && dc(r.ownerDocument.documentElement, r)) {
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
  var gg = p && "documentMode" in document && 11 >= document.documentMode,
    Wn = null,
    Vo = null,
    Or = null,
    jo = !1;
  function pc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    jo ||
      Wn == null ||
      Wn !== Pi(o) ||
      ((o = Wn),
      "selectionStart" in o && Lo(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Or && Fr(Or, o)) ||
        ((Or = o),
        (o = $i(Vo, "onSelect")),
        0 < o.length &&
          ((t = new To("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Wn))));
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
  var $n = {
      animationend: Bi("Animation", "AnimationEnd"),
      animationiteration: Bi("Animation", "AnimationIteration"),
      animationstart: Bi("Animation", "AnimationStart"),
      transitionend: Bi("Transition", "TransitionEnd"),
    },
    _o = {},
    mc = {};
  p &&
    ((mc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete $n.animationend.animation,
      delete $n.animationiteration.animation,
      delete $n.animationstart.animation),
    "TransitionEvent" in window || delete $n.transitionend.transition);
  function Ui(e) {
    if (_o[e]) return _o[e];
    if (!$n[e]) return e;
    var t = $n[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in mc) return (_o[e] = t[r]);
    return e;
  }
  var gc = Ui("animationend"),
    yc = Ui("animationiteration"),
    vc = Ui("animationstart"),
    xc = Ui("transitionend"),
    wc = new Map(),
    Sc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function bt(e, t) {
    (wc.set(e, t), d(t, [e]));
  }
  for (var Fo = 0; Fo < Sc.length; Fo++) {
    var Oo = Sc[Fo],
      yg = Oo.toLowerCase(),
      vg = Oo[0].toUpperCase() + Oo.slice(1);
    bt(yg, "on" + vg);
  }
  (bt(gc, "onAnimationEnd"),
    bt(yc, "onAnimationIteration"),
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
  var Ir =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    xg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));
  function Pc(e, t, r) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = r), ym(o, t, void 0, e), (e.currentTarget = null));
  }
  function kc(e, t) {
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
    if (Ci) throw ((e = po), (Ci = !1), (po = null), e);
  }
  function ye(e, t) {
    var r = t[Ko];
    r === void 0 && (r = t[Ko] = new Set());
    var o = e + "__bubble";
    r.has(o) || (Tc(t, e, 2, !1), r.add(o));
  }
  function Io(e, t, r) {
    var o = 0;
    (t && (o |= 4), Tc(r, e, o, t));
  }
  var Wi = "_reactListening" + Math.random().toString(36).slice(2);
  function zr(e) {
    if (!e[Wi]) {
      ((e[Wi] = !0),
        l.forEach(function (r) {
          r !== "selectionchange" && (xg.has(r) || Io(r, !1, e), Io(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wi] || ((t[Wi] = !0), Io("selectionchange", !1, t));
    }
  }
  function Tc(e, t, r, o) {
    switch (Qu(t)) {
      case 1:
        var a = Vm;
        break;
      case 4:
        a = jm;
        break;
      default:
        a = So;
    }
    ((r = a.bind(null, t, r, e)),
      (a = void 0),
      !ho || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (a = !0),
      o
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
          ? e.addEventListener(t, r, { passive: a })
          : e.addEventListener(t, r, !1));
  }
  function zo(e, t, r, o, a) {
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
            if (((h = vn(v)), h === null)) return;
            if (((w = h.tag), w === 5 || w === 6)) {
              o = u = h;
              continue e;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    Ru(function () {
      var E = u,
        L = uo(r),
        j = [];
      e: {
        var M = wc.get(e);
        if (M !== void 0) {
          var U = To,
            G = e;
          switch (e) {
            case "keypress":
              if (Fi(r) === 0) break e;
            case "keydown":
            case "keyup":
              U = Ym;
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
              U = Om;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = bm;
              break;
            case gc:
            case yc:
            case vc:
              U = Bm;
              break;
            case xc:
              U = eg;
              break;
            case "scroll":
              U = _m;
              break;
            case "wheel":
              U = ng;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Wm;
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
            Re = !Q && e === "scroll",
            T = Q ? (M !== null ? M + "Capture" : null) : M;
          Q = [];
          for (var S = E, C; S !== null;) {
            C = S;
            var F = C.stateNode;
            if (
              (C.tag === 5 &&
                F !== null &&
                ((C = F), T !== null && ((F = Sr(S, T)), F != null && Q.push(Br(S, F, C)))),
              Re)
            )
              break;
            S = S.return;
          }
          0 < Q.length && ((M = new U(M, G, null, r, L)), j.push({ event: M, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((M = e === "mouseover" || e === "pointerover"),
            (U = e === "mouseout" || e === "pointerout"),
            M && r !== ao && (G = r.relatedTarget || r.fromElement) && (vn(G) || G[Ft]))
          )
            break e;
          if (
            (U || M) &&
            ((M =
              L.window === L
                ? L
                : (M = L.ownerDocument)
                  ? M.defaultView || M.parentWindow
                  : window),
            U
              ? ((G = r.relatedTarget || r.toElement),
                (U = E),
                (G = G ? vn(G) : null),
                G !== null &&
                  ((Re = yn(G)), G !== Re || (G.tag !== 5 && G.tag !== 6)) &&
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
              (Re = U == null ? M : Gn(U)),
              (C = G == null ? M : Gn(G)),
              (M = new Q(F, S + "leave", U, r, L)),
              (M.target = Re),
              (M.relatedTarget = C),
              (F = null),
              vn(L) === E &&
                ((Q = new Q(T, S + "enter", G, r, L)),
                (Q.target = C),
                (Q.relatedTarget = Re),
                (F = Q)),
              (Re = F),
              U && G)
            )
              t: {
                for (Q = U, T = G, S = 0, C = Q; C; C = Hn(C)) S++;
                for (C = 0, F = T; F; F = Hn(F)) C++;
                for (; 0 < S - C;) ((Q = Hn(Q)), S--);
                for (; 0 < C - S;) ((T = Hn(T)), C--);
                for (; S--;) {
                  if (Q === T || (T !== null && Q === T.alternate)) break t;
                  ((Q = Hn(Q)), (T = Hn(T)));
                }
                Q = null;
              }
            else Q = null;
            (U !== null && Cc(j, M, U, Q, !1), G !== null && Re !== null && Cc(j, Re, G, Q, !0));
          }
        }
        e: {
          if (
            ((M = E ? Gn(E) : window),
            (U = M.nodeName && M.nodeName.toLowerCase()),
            U === "select" || (U === "input" && M.type === "file"))
          )
            var X = ug;
          else if (ic(M))
            if (oc) X = hg;
            else {
              X = fg;
              var b = cg;
            }
          else
            (U = M.nodeName) &&
              U.toLowerCase() === "input" &&
              (M.type === "checkbox" || M.type === "radio") &&
              (X = dg);
          if (X && (X = X(e, E))) {
            sc(j, X, r, L);
            break e;
          }
          (b && b(e, M, E),
            e === "focusout" &&
              (b = M._wrapperState) &&
              b.controlled &&
              M.type === "number" &&
              ro(M, "number", M.value));
        }
        switch (((b = E ? Gn(E) : window), e)) {
          case "focusin":
            (ic(b) || b.contentEditable === "true") && ((Wn = b), (Vo = E), (Or = null));
            break;
          case "focusout":
            Or = Vo = Wn = null;
            break;
          case "mousedown":
            jo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((jo = !1), pc(j, r, L));
            break;
          case "selectionchange":
            if (gg) break;
          case "keydown":
          case "keyup":
            pc(j, r, L);
        }
        var J;
        if (Ro)
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
          Un
            ? nc(e, r) && (ne = "onCompositionEnd")
            : e === "keydown" && r.keyCode === 229 && (ne = "onCompositionStart");
        (ne &&
          (Ju &&
            r.locale !== "ko" &&
            (Un || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && Un && (J = Xu())
              : ((Zt = L), (ko = "value" in Zt ? Zt.value : Zt.textContent), (Un = !0))),
          (b = $i(E, ne)),
          0 < b.length &&
            ((ne = new Zu(ne, e, null, r, L)),
            j.push({ event: ne, listeners: b }),
            J ? (ne.data = J) : ((J = rc(r)), J !== null && (ne.data = J)))),
          (J = ig ? sg(e, r) : og(e, r)) &&
            ((E = $i(E, "onBeforeInput")),
            0 < E.length &&
              ((L = new Zu("onBeforeInput", "beforeinput", null, r, L)),
              j.push({ event: L, listeners: E }),
              (L.data = J))));
      }
      kc(j, t);
    });
  }
  function Br(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function $i(e, t) {
    for (var r = t + "Capture", o = []; e !== null;) {
      var a = e,
        u = a.stateNode;
      (a.tag === 5 &&
        u !== null &&
        ((a = u),
        (u = Sr(e, r)),
        u != null && o.unshift(Br(e, u, a)),
        (u = Sr(e, t)),
        u != null && o.push(Br(e, u, a))),
        (e = e.return));
    }
    return o;
  }
  function Hn(e) {
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
          ? ((w = Sr(r, u)), w != null && h.unshift(Br(r, w, v)))
          : a || ((w = Sr(r, u)), w != null && h.push(Br(r, w, v)))),
        (r = r.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var wg = /\r\n?/g,
    Sg = /\u0000|\uFFFD/g;
  function Ec(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        wg,
        `
`,
      )
      .replace(Sg, "");
  }
  function Hi(e, t, r) {
    if (((t = Ec(t)), Ec(e) !== t && r)) throw Error(s(425));
  }
  function Ki() {}
  var Bo = null,
    Uo = null;
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
  var $o = typeof setTimeout == "function" ? setTimeout : void 0,
    Pg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ac = typeof Promise == "function" ? Promise : void 0,
    kg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ac < "u"
          ? function (e) {
              return Ac.resolve(null).then(e).catch(Tg);
            }
          : $o;
  function Tg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ho(e, t) {
    var r = t,
      o = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === "/$")) {
          if (o === 0) {
            (e.removeChild(a), Mr(t));
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = a;
    } while (r);
    Mr(t);
  }
  function Jt(e) {
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
  var Kn = Math.random().toString(36).slice(2),
    Mt = "__reactFiber$" + Kn,
    Ur = "__reactProps$" + Kn,
    Ft = "__reactContainer$" + Kn,
    Ko = "__reactEvents$" + Kn,
    Cg = "__reactListeners$" + Kn,
    Eg = "__reactHandles$" + Kn;
  function vn(e) {
    var t = e[Mt];
    if (t) return t;
    for (var r = e.parentNode; r;) {
      if ((t = r[Ft] || r[Mt])) {
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
      (e = e[Mt] || e[Ft]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Gi(e) {
    return e[Ur] || null;
  }
  var Go = [],
    Qn = -1;
  function en(e) {
    return { current: e };
  }
  function ve(e) {
    0 > Qn || ((e.current = Go[Qn]), (Go[Qn] = null), Qn--);
  }
  function me(e, t) {
    (Qn++, (Go[Qn] = e.current), (e.current = t));
  }
  var tn = {},
    Be = en(tn),
    be = en(!1),
    xn = tn;
  function Xn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return tn;
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
  function Qi() {
    (ve(be), ve(Be));
  }
  function Rc(e, t, r) {
    if (Be.current !== tn) throw Error(s(168));
    (me(Be, t), me(be, r));
  }
  function Mc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function")) return r;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(s(108, pe(e) || "Unknown", a));
    return $({}, r, o);
  }
  function Xi(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
      (xn = Be.current),
      me(Be, e),
      me(be, be.current),
      !0
    );
  }
  function Nc(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    (r
      ? ((e = Mc(e, t, xn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        ve(be),
        ve(Be),
        me(Be, e))
      : ve(be),
      me(be, r));
  }
  var Ot = null,
    Yi = !1,
    Qo = !1;
  function Lc(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  function Ag(e) {
    ((Yi = !0), Lc(e));
  }
  function nn() {
    if (!Qo && Ot !== null) {
      Qo = !0;
      var e = 0,
        t = he;
      try {
        var r = Ot;
        for (he = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((Ot = null), (Yi = !1));
      } catch (a) {
        throw (Ot !== null && (Ot = Ot.slice(e + 1)), ju(mo, nn), a);
      } finally {
        ((he = t), (Qo = !1));
      }
    }
    return null;
  }
  var Yn = [],
    qn = 0,
    qi = null,
    Zi = 0,
    dt = [],
    ht = 0,
    wn = null,
    It = 1,
    zt = "";
  function Sn(e, t) {
    ((Yn[qn++] = Zi), (Yn[qn++] = qi), (qi = e), (Zi = t));
  }
  function Vc(e, t, r) {
    ((dt[ht++] = It), (dt[ht++] = zt), (dt[ht++] = wn), (wn = e));
    var o = It;
    e = zt;
    var a = 32 - St(o) - 1;
    ((o &= ~(1 << a)), (r += 1));
    var u = 32 - St(t) + a;
    if (30 < u) {
      var h = a - (a % 5);
      ((u = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (a -= h),
        (It = (1 << (32 - St(t) + a)) | (r << a) | o),
        (zt = u + e));
    } else ((It = (1 << u) | (r << a) | o), (zt = e));
  }
  function Xo(e) {
    e.return !== null && (Sn(e, 1), Vc(e, 1, 0));
  }
  function Yo(e) {
    for (; e === qi;) ((qi = Yn[--qn]), (Yn[qn] = null), (Zi = Yn[--qn]), (Yn[qn] = null));
    for (; e === wn;)
      ((wn = dt[--ht]),
        (dt[ht] = null),
        (zt = dt[--ht]),
        (dt[ht] = null),
        (It = dt[--ht]),
        (dt[ht] = null));
  }
  var lt = null,
    at = null,
    Se = !1,
    kt = null;
  function jc(e, t) {
    var r = yt(5, null, null, 0);
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
          t !== null ? ((e.stateNode = t), (lt = e), (at = Jt(t.firstChild)), !0) : !1
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
            ? ((r = wn !== null ? { id: It, overflow: zt } : null),
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
        if (!_c(e, t)) {
          if (qo(e)) throw Error(s(418));
          t = Jt(r.nextSibling);
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
  function bi(e) {
    if (e !== lt) return !1;
    if (!Se) return (Fc(e), (Se = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !Wo(e.type, e.memoizedProps))),
      t && (t = at))
    ) {
      if (qo(e)) throw (Oc(), Error(s(418)));
      for (; t;) (jc(e, t), (t = Jt(t.nextSibling)));
    }
    if ((Fc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                at = Jt(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        at = null;
      }
    } else at = lt ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Oc() {
    for (var e = at; e;) e = Jt(e.nextSibling);
  }
  function Zn() {
    ((at = lt = null), (Se = !1));
  }
  function bo(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  var Dg = Y.ReactCurrentBatchConfig;
  function $r(e, t, r) {
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
  function Ji(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function Ic(e) {
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
      return ((T = fn(T, S)), (T.index = 0), (T.sibling = null), T);
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
        ? ((S = $l(C, T.mode, F)), (S.return = T), S)
        : ((S = a(S, C)), (S.return = T), S);
    }
    function w(T, S, C, F) {
      var X = C.type;
      return X === le
        ? L(T, S, C.props.children, F, C.key)
        : S !== null &&
            (S.elementType === X ||
              (typeof X == "object" && X !== null && X.$$typeof === Qe && Ic(X) === S.type))
          ? ((F = a(S, C.props)), (F.ref = $r(T, S, C)), (F.return = T), F)
          : ((F = ks(C.type, C.key, C.props, null, T.mode, F)),
            (F.ref = $r(T, S, C)),
            (F.return = T),
            F);
    }
    function E(T, S, C, F) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== C.containerInfo ||
        S.stateNode.implementation !== C.implementation
        ? ((S = Hl(C, T.mode, F)), (S.return = T), S)
        : ((S = a(S, C.children || [])), (S.return = T), S);
    }
    function L(T, S, C, F, X) {
      return S === null || S.tag !== 7
        ? ((S = Rn(C, T.mode, F, X)), (S.return = T), S)
        : ((S = a(S, C)), (S.return = T), S);
    }
    function j(T, S, C) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return ((S = $l("" + S, T.mode, C)), (S.return = T), S);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case B:
            return (
              (C = ks(S.type, S.key, S.props, null, T.mode, C)),
              (C.ref = $r(T, null, S)),
              (C.return = T),
              C
            );
          case ee:
            return ((S = Hl(S, T.mode, C)), (S.return = T), S);
          case Qe:
            var F = S._init;
            return j(T, F(S._payload), C);
        }
        if (vr(S) || Z(S)) return ((S = Rn(S, T.mode, C, null)), (S.return = T), S);
        Ji(T, S);
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
        if (vr(C) || Z(C)) return X !== null ? null : L(T, S, C, F, null);
        Ji(T, C);
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
            var b = F._init;
            return U(T, S, C, b(F._payload), X);
        }
        if (vr(F) || Z(F)) return ((T = T.get(C) || null), L(S, T, F, X, null));
        Ji(S, F);
      }
      return null;
    }
    function G(T, S, C, F) {
      for (
        var X = null, b = null, J = S, ne = (S = 0), Fe = null;
        J !== null && ne < C.length;
        ne++
      ) {
        J.index > ne ? ((Fe = J), (J = null)) : (Fe = J.sibling);
        var fe = M(T, J, C[ne], F);
        if (fe === null) {
          J === null && (J = Fe);
          break;
        }
        (e && J && fe.alternate === null && t(T, J),
          (S = u(fe, S, ne)),
          b === null ? (X = fe) : (b.sibling = fe),
          (b = fe),
          (J = Fe));
      }
      if (ne === C.length) return (r(T, J), Se && Sn(T, ne), X);
      if (J === null) {
        for (; ne < C.length; ne++)
          ((J = j(T, C[ne], F)),
            J !== null && ((S = u(J, S, ne)), b === null ? (X = J) : (b.sibling = J), (b = J)));
        return (Se && Sn(T, ne), X);
      }
      for (J = o(T, J); ne < C.length; ne++)
        ((Fe = U(J, T, ne, C[ne], F)),
          Fe !== null &&
            (e && Fe.alternate !== null && J.delete(Fe.key === null ? ne : Fe.key),
            (S = u(Fe, S, ne)),
            b === null ? (X = Fe) : (b.sibling = Fe),
            (b = Fe)));
      return (
        e &&
          J.forEach(function (dn) {
            return t(T, dn);
          }),
        Se && Sn(T, ne),
        X
      );
    }
    function Q(T, S, C, F) {
      var X = Z(C);
      if (typeof X != "function") throw Error(s(150));
      if (((C = X.call(C)), C == null)) throw Error(s(151));
      for (
        var b = (X = null), J = S, ne = (S = 0), Fe = null, fe = C.next();
        J !== null && !fe.done;
        ne++, fe = C.next()
      ) {
        J.index > ne ? ((Fe = J), (J = null)) : (Fe = J.sibling);
        var dn = M(T, J, fe.value, F);
        if (dn === null) {
          J === null && (J = Fe);
          break;
        }
        (e && J && dn.alternate === null && t(T, J),
          (S = u(dn, S, ne)),
          b === null ? (X = dn) : (b.sibling = dn),
          (b = dn),
          (J = Fe));
      }
      if (fe.done) return (r(T, J), Se && Sn(T, ne), X);
      if (J === null) {
        for (; !fe.done; ne++, fe = C.next())
          ((fe = j(T, fe.value, F)),
            fe !== null &&
              ((S = u(fe, S, ne)), b === null ? (X = fe) : (b.sibling = fe), (b = fe)));
        return (Se && Sn(T, ne), X);
      }
      for (J = o(T, J); !fe.done; ne++, fe = C.next())
        ((fe = U(J, T, ne, fe.value, F)),
          fe !== null &&
            (e && fe.alternate !== null && J.delete(fe.key === null ? ne : fe.key),
            (S = u(fe, S, ne)),
            b === null ? (X = fe) : (b.sibling = fe),
            (b = fe)));
      return (
        e &&
          J.forEach(function (ly) {
            return t(T, ly);
          }),
        Se && Sn(T, ne),
        X
      );
    }
    function Re(T, S, C, F) {
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
              for (var X = C.key, b = S; b !== null;) {
                if (b.key === X) {
                  if (((X = C.type), X === le)) {
                    if (b.tag === 7) {
                      (r(T, b.sibling), (S = a(b, C.props.children)), (S.return = T), (T = S));
                      break e;
                    }
                  } else if (
                    b.elementType === X ||
                    (typeof X == "object" && X !== null && X.$$typeof === Qe && Ic(X) === b.type)
                  ) {
                    (r(T, b.sibling),
                      (S = a(b, C.props)),
                      (S.ref = $r(T, b, C)),
                      (S.return = T),
                      (T = S));
                    break e;
                  }
                  r(T, b);
                  break;
                } else t(T, b);
                b = b.sibling;
              }
              C.type === le
                ? ((S = Rn(C.props.children, T.mode, F, C.key)), (S.return = T), (T = S))
                : ((F = ks(C.type, C.key, C.props, null, T.mode, F)),
                  (F.ref = $r(T, S, C)),
                  (F.return = T),
                  (T = F));
            }
            return h(T);
          case ee:
            e: {
              for (b = C.key; S !== null;) {
                if (S.key === b)
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
              ((S = Hl(C, T.mode, F)), (S.return = T), (T = S));
            }
            return h(T);
          case Qe:
            return ((b = C._init), Re(T, S, b(C._payload), F));
        }
        if (vr(C)) return G(T, S, C, F);
        if (Z(C)) return Q(T, S, C, F);
        Ji(T, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          S !== null && S.tag === 6
            ? (r(T, S.sibling), (S = a(S, C)), (S.return = T), (T = S))
            : (r(T, S), (S = $l(C, T.mode, F)), (S.return = T), (T = S)),
          h(T))
        : r(T, S);
    }
    return Re;
  }
  var bn = zc(!0),
    Bc = zc(!1),
    es = en(null),
    ts = null,
    Jn = null,
    Jo = null;
  function el() {
    Jo = Jn = ts = null;
  }
  function tl(e) {
    var t = es.current;
    (ve(es), (e._currentValue = t));
  }
  function nl(e, t, r) {
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
  function er(e, t) {
    ((ts = e),
      (Jo = Jn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (et = !0), (e.firstContext = null)));
  }
  function pt(e) {
    var t = e._currentValue;
    if (Jo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Jn === null)) {
        if (ts === null) throw Error(s(308));
        ((Jn = e), (ts.dependencies = { lanes: 0, firstContext: e }));
      } else Jn = Jn.next = e;
    return t;
  }
  var Pn = null;
  function rl(e) {
    Pn === null ? (Pn = [e]) : Pn.push(e);
  }
  function Uc(e, t, r, o) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), rl(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      Bt(e, o)
    );
  }
  function Bt(e, t) {
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
  var rn = !1;
  function il(e) {
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
  function Ut(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function sn(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (ae & 2) !== 0)) {
      var a = o.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (o.pending = t),
        Bt(e, r)
      );
    }
    return (
      (a = o.interleaved),
      a === null ? ((t.next = t), rl(o)) : ((t.next = a.next), (a.next = t)),
      (o.interleaved = t),
      Bt(e, r)
    );
  }
  function ns(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), vo(e, r));
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
  function rs(e, t, r, o) {
    var a = e.updateQueue;
    rn = !1;
    var u = a.firstBaseUpdate,
      h = a.lastBaseUpdate,
      v = a.shared.pending;
    if (v !== null) {
      a.shared.pending = null;
      var w = v,
        E = w.next;
      ((w.next = null), h === null ? (u = E) : (h.next = E), (h = w));
      var L = e.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (v = L.lastBaseUpdate),
        v !== h && (v === null ? (L.firstBaseUpdate = E) : (v.next = E), (L.lastBaseUpdate = w)));
    }
    if (u !== null) {
      var j = a.baseState;
      ((h = 0), (L = E = w = null), (v = u));
      do {
        var M = v.lane,
          U = v.eventTime;
        if ((o & M) === M) {
          L !== null &&
            (L = L.next =
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
                  j = G.call(U, j, M);
                  break e;
                }
                j = G;
                break e;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = Q.payload), (M = typeof G == "function" ? G.call(U, j, M) : G), M == null)
                )
                  break e;
                j = $({}, j, M);
                break e;
              case 2:
                rn = !0;
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
            L === null ? ((E = L = U), (w = j)) : (L = L.next = U),
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
        (L === null && (w = j),
        (a.baseState = w),
        (a.firstBaseUpdate = E),
        (a.lastBaseUpdate = L),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do ((h |= a.lane), (a = a.next));
        while (a !== t);
      } else u === null && (a.shared.lanes = 0);
      ((Cn |= h), (e.lanes = h), (e.memoizedState = j));
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
  var Hr = {},
    Nt = en(Hr),
    Kr = en(Hr),
    Gr = en(Hr);
  function kn(e) {
    if (e === Hr) throw Error(s(174));
    return e;
  }
  function sl(e, t) {
    switch ((me(Gr, t), me(Kr, e), me(Nt, Hr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : so(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = so(t, e)));
    }
    (ve(Nt), me(Nt, t));
  }
  function tr() {
    (ve(Nt), ve(Kr), ve(Gr));
  }
  function Kc(e) {
    kn(Gr.current);
    var t = kn(Nt.current),
      r = so(t, e.type);
    t !== r && (me(Kr, e), me(Nt, r));
  }
  function ol(e) {
    Kr.current === e && (ve(Nt), ve(Kr));
  }
  var Pe = en(0);
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
  var ll = [];
  function al() {
    for (var e = 0; e < ll.length; e++) ll[e]._workInProgressVersionPrimary = null;
    ll.length = 0;
  }
  var ss = Y.ReactCurrentDispatcher,
    ul = Y.ReactCurrentBatchConfig,
    Tn = 0,
    ke = null,
    Le = null,
    je = null,
    os = !1,
    Qr = !1,
    Xr = 0,
    Rg = 0;
  function Ue() {
    throw Error(s(321));
  }
  function cl(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Pt(e[r], t[r])) return !1;
    return !0;
  }
  function fl(e, t, r, o, a, u) {
    if (
      ((Tn = u),
      (ke = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ss.current = e === null || e.memoizedState === null ? Vg : jg),
      (e = r(o, a)),
      Qr)
    ) {
      u = 0;
      do {
        if (((Qr = !1), (Xr = 0), 25 <= u)) throw Error(s(301));
        ((u += 1), (je = Le = null), (t.updateQueue = null), (ss.current = _g), (e = r(o, a)));
      } while (Qr);
    }
    if (
      ((ss.current = us),
      (t = Le !== null && Le.next !== null),
      (Tn = 0),
      (je = Le = ke = null),
      (os = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function dl() {
    var e = Xr !== 0;
    return ((Xr = 0), e);
  }
  function Lt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (je === null ? (ke.memoizedState = je = e) : (je = je.next = e), je);
  }
  function mt() {
    if (Le === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = je === null ? ke.memoizedState : je.next;
    if (t !== null) ((je = t), (Le = e));
    else {
      if (e === null) throw Error(s(310));
      ((Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        je === null ? (ke.memoizedState = je = e) : (je = je.next = e));
    }
    return je;
  }
  function Yr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hl(e) {
    var t = mt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = Le,
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
        var L = E.lane;
        if ((Tn & L) === L)
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
            lane: L,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          };
          (w === null ? ((v = w = j), (h = o)) : (w = w.next = j), (ke.lanes |= L), (Cn |= L));
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
      do ((u = a.lane), (ke.lanes |= u), (Cn |= u), (a = a.next));
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function pl(e) {
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
      (Pt(u, t.memoizedState) || (et = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (r.lastRenderedState = u));
    }
    return [u, o];
  }
  function Gc() {}
  function Qc(e, t) {
    var r = ke,
      o = mt(),
      a = t(),
      u = !Pt(o.memoizedState, a);
    if (
      (u && ((o.memoizedState = a), (et = !0)),
      (o = o.queue),
      ml(qc.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || u || (je !== null && je.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), qr(9, Yc.bind(null, r, o, a, t), void 0, null), _e === null))
        throw Error(s(349));
      (Tn & 30) !== 0 || Xc(r, t, a);
    }
    return a;
  }
  function Xc(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ke.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function Yc(e, t, r, o) {
    ((t.value = r), (t.getSnapshot = o), Zc(t) && bc(e));
  }
  function qc(e, t, r) {
    return r(function () {
      Zc(t) && bc(e);
    });
  }
  function Zc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Pt(e, r);
    } catch {
      return !0;
    }
  }
  function bc(e) {
    var t = Bt(e, 1);
    t !== null && At(t, e, 1, -1);
  }
  function Jc(e) {
    var t = Lt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Lg.bind(null, ke, e)),
      [t.memoizedState, e]
    );
  }
  function qr(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ke.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function ef() {
    return mt().memoizedState;
  }
  function ls(e, t, r, o) {
    var a = Lt();
    ((ke.flags |= e), (a.memoizedState = qr(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function as(e, t, r, o) {
    var a = mt();
    o = o === void 0 ? null : o;
    var u = void 0;
    if (Le !== null) {
      var h = Le.memoizedState;
      if (((u = h.destroy), o !== null && cl(o, h.deps))) {
        a.memoizedState = qr(t, r, u, o);
        return;
      }
    }
    ((ke.flags |= e), (a.memoizedState = qr(1 | t, r, u, o)));
  }
  function tf(e, t) {
    return ls(8390656, 8, e, t);
  }
  function ml(e, t) {
    return as(2048, 8, e, t);
  }
  function nf(e, t) {
    return as(4, 2, e, t);
  }
  function rf(e, t) {
    return as(4, 4, e, t);
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
    return ((r = r != null ? r.concat([e]) : null), as(4, 4, sf.bind(null, t, e), r));
  }
  function gl() {}
  function lf(e, t) {
    var r = mt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && cl(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function af(e, t) {
    var r = mt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && cl(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function uf(e, t, r) {
    return (Tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = r))
      : (Pt(r, t) || ((r = Iu()), (ke.lanes |= r), (Cn |= r), (e.baseState = !0)), t);
  }
  function Mg(e, t) {
    var r = he;
    ((he = r !== 0 && 4 > r ? r : 4), e(!0));
    var o = ul.transition;
    ul.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((he = r), (ul.transition = o));
    }
  }
  function cf() {
    return mt().memoizedState;
  }
  function Ng(e, t, r) {
    var o = un(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), ff(e)))
      df(t, r);
    else if (((r = Uc(e, t, r, o)), r !== null)) {
      var a = Ye();
      (At(r, e, o, a), hf(r, t, o));
    }
  }
  function Lg(e, t, r) {
    var o = un(e),
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
            (w === null ? ((a.next = a), rl(t)) : ((a.next = w.next), (w.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((r = Uc(e, t, a, o)), r !== null && ((a = Ye()), At(r, e, o, a), hf(r, t, o)));
    }
  }
  function ff(e) {
    var t = e.alternate;
    return e === ke || (t !== null && t === ke);
  }
  function df(e, t) {
    Qr = os = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function hf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), vo(e, r));
    }
  }
  var us = {
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
    Vg = {
      readContext: pt,
      useCallback: function (e, t) {
        return ((Lt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: pt,
      useEffect: tf,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), ls(4194308, 4, sf.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return ls(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ls(4, 2, e, t);
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
          (e = e.dispatch = Ng.bind(null, ke, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Lt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Jc,
      useDebugValue: gl,
      useDeferredValue: function (e) {
        return (Lt().memoizedState = e);
      },
      useTransition: function () {
        var e = Jc(!1),
          t = e[0];
        return ((e = Mg.bind(null, e[1])), (Lt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = ke,
          a = Lt();
        if (Se) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), _e === null)) throw Error(s(349));
          (Tn & 30) !== 0 || Xc(o, t, r);
        }
        a.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (a.queue = u),
          tf(qc.bind(null, o, u, e), [e]),
          (o.flags |= 2048),
          qr(9, Yc.bind(null, o, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Lt(),
          t = _e.identifierPrefix;
        if (Se) {
          var r = zt,
            o = It;
          ((r = (o & ~(1 << (32 - St(o) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Xr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":"));
        } else ((r = Rg++), (t = ":" + t + "r" + r.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    jg = {
      readContext: pt,
      useCallback: lf,
      useContext: pt,
      useEffect: ml,
      useImperativeHandle: of,
      useInsertionEffect: nf,
      useLayoutEffect: rf,
      useMemo: af,
      useReducer: hl,
      useRef: ef,
      useState: function () {
        return hl(Yr);
      },
      useDebugValue: gl,
      useDeferredValue: function (e) {
        var t = mt();
        return uf(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = hl(Yr)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Gc,
      useSyncExternalStore: Qc,
      useId: cf,
      unstable_isNewReconciler: !1,
    },
    _g = {
      readContext: pt,
      useCallback: lf,
      useContext: pt,
      useEffect: ml,
      useImperativeHandle: of,
      useInsertionEffect: nf,
      useLayoutEffect: rf,
      useMemo: af,
      useReducer: pl,
      useRef: ef,
      useState: function () {
        return pl(Yr);
      },
      useDebugValue: gl,
      useDeferredValue: function (e) {
        var t = mt();
        return Le === null ? (t.memoizedState = e) : uf(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = pl(Yr)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Gc,
      useSyncExternalStore: Qc,
      useId: cf,
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
  function yl(e, t, r, o) {
    ((t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : $({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var cs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? yn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = Ye(),
        a = un(e),
        u = Ut(o, a);
      ((u.payload = t),
        r != null && (u.callback = r),
        (t = sn(e, u, a)),
        t !== null && (At(t, e, a, o), ns(t, e, a)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = Ye(),
        a = un(e),
        u = Ut(o, a);
      ((u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = sn(e, u, a)),
        t !== null && (At(t, e, a, o), ns(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Ye(),
        o = un(e),
        a = Ut(r, o);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = sn(e, a, o)),
        t !== null && (At(t, e, o, r), ns(t, e, o)));
    },
  };
  function pf(e, t, r, o, a, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, u, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Fr(r, o) || !Fr(a, u)
          : !0
    );
  }
  function mf(e, t, r) {
    var o = !1,
      a = tn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = pt(u))
        : ((a = Je(t) ? xn : Be.current),
          (o = t.contextTypes),
          (u = (o = o != null) ? Xn(e, a) : tn)),
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
  function gf(e, t, r, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && cs.enqueueReplaceState(t, t.state, null));
  }
  function vl(e, t, r, o) {
    var a = e.stateNode;
    ((a.props = r), (a.state = e.memoizedState), (a.refs = {}), il(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (a.context = pt(u))
      : ((u = Je(t) ? xn : Be.current), (a.context = Xn(e, u))),
      (a.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (yl(e, t, u, r), (a.state = e.memoizedState)),
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
  function nr(e, t) {
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
  function xl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function wl(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Fg = typeof WeakMap == "function" ? WeakMap : Map;
  function yf(e, t, r) {
    ((r = Ut(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (ys || ((ys = !0), (_l = o)), wl(e, t));
      }),
      r
    );
  }
  function vf(e, t, r) {
    ((r = Ut(-1, r)), (r.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var a = t.value;
      ((r.payload = function () {
        return o(a);
      }),
        (r.callback = function () {
          wl(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (r.callback = function () {
          (wl(e, t),
            typeof o != "function" && (ln === null ? (ln = new Set([this])) : ln.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
        }),
      r
    );
  }
  function xf(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Fg();
      var a = new Set();
      o.set(t, a);
    } else ((a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a)));
    a.has(r) || (a.add(r), (e = qg.bind(null, e, t, r)), t.then(e, e));
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
              (r.alternate === null ? (r.tag = 17) : ((t = Ut(-1, 1)), (t.tag = 2), sn(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var Og = Y.ReactCurrentOwner,
    et = !1;
  function Xe(e, t, r, o) {
    t.child = e === null ? Bc(t, null, r, o) : bn(t, e.child, r, o);
  }
  function Pf(e, t, r, o, a) {
    r = r.render;
    var u = t.ref;
    return (
      er(t, a),
      (o = fl(e, t, r, o, u, a)),
      (r = dl()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Wt(e, t, a))
        : (Se && r && Xo(t), (t.flags |= 1), Xe(e, t, o, a), t.child)
    );
  }
  function kf(e, t, r, o, a) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !Wl(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Tf(e, t, u, o, a))
        : ((e = ks(r.type, null, o, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & a) === 0)) {
      var h = u.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Fr), r(h, o) && e.ref === t.ref))
        return Wt(e, t, a);
    }
    return ((t.flags |= 1), (e = fn(u, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Tf(e, t, r, o, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Fr(u, o) && e.ref === t.ref)
        if (((et = !1), (t.pendingProps = o = u), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (et = !0);
        else return ((t.lanes = e.lanes), Wt(e, t, a));
    }
    return Sl(e, t, r, o, a);
  }
  function Cf(e, t, r) {
    var o = t.pendingProps,
      a = o.children,
      u = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          me(ir, ut),
          (ut |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            me(ir, ut),
            (ut |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = u !== null ? u.baseLanes : r),
          me(ir, ut),
          (ut |= o));
      }
    else
      (u !== null ? ((o = u.baseLanes | r), (t.memoizedState = null)) : (o = r),
        me(ir, ut),
        (ut |= o));
    return (Xe(e, t, a, r), t.child);
  }
  function Ef(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Sl(e, t, r, o, a) {
    var u = Je(r) ? xn : Be.current;
    return (
      (u = Xn(t, u)),
      er(t, a),
      (r = fl(e, t, r, o, u, a)),
      (o = dl()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Wt(e, t, a))
        : (Se && o && Xo(t), (t.flags |= 1), Xe(e, t, r, a), t.child)
    );
  }
  function Af(e, t, r, o, a) {
    if (Je(r)) {
      var u = !0;
      Xi(t);
    } else u = !1;
    if ((er(t, a), t.stateNode === null)) (ds(e, t), mf(t, r, o), vl(t, r, o, a), (o = !0));
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var w = h.context,
        E = r.contextType;
      typeof E == "object" && E !== null
        ? (E = pt(E))
        : ((E = Je(r) ? xn : Be.current), (E = Xn(t, E)));
      var L = r.getDerivedStateFromProps,
        j = typeof L == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (j ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== o || w !== E) && gf(t, h, o, E)),
        (rn = !1));
      var M = t.memoizedState;
      ((h.state = M),
        rs(t, o, h, a),
        (w = t.memoizedState),
        v !== o || M !== w || be.current || rn
          ? (typeof L == "function" && (yl(t, r, L, o), (w = t.memoizedState)),
            (v = rn || pf(t, r, v, o, M, w, E))
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
        (E = t.type === t.elementType ? v : Tt(t.type, v)),
        (h.props = E),
        (j = t.pendingProps),
        (M = h.context),
        (w = r.contextType),
        typeof w == "object" && w !== null
          ? (w = pt(w))
          : ((w = Je(r) ? xn : Be.current), (w = Xn(t, w))));
      var U = r.getDerivedStateFromProps;
      ((L = typeof U == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== j || M !== w) && gf(t, h, o, w)),
        (rn = !1),
        (M = t.memoizedState),
        (h.state = M),
        rs(t, o, h, a));
      var G = t.memoizedState;
      v !== j || M !== G || be.current || rn
        ? (typeof U == "function" && (yl(t, r, U, o), (G = t.memoizedState)),
          (E = rn || pf(t, r, E, o, M, G, w) || !1)
            ? (L ||
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
    Ef(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return (a && Nc(t, r, !1), Wt(e, t, u));
    ((o = t.stateNode), (Og.current = t));
    var v = h && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = bn(t, e.child, null, u)), (t.child = bn(t, null, v, u)))
        : Xe(e, t, v, u),
      (t.memoizedState = o.state),
      a && Nc(t, r, !0),
      t.child
    );
  }
  function Df(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Rc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Rc(e, t.context, !1),
      sl(e, t.containerInfo));
  }
  function Rf(e, t, r, o, a) {
    return (Zn(), bo(a), (t.flags |= 256), Xe(e, t, r, o), t.child);
  }
  var kl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Tl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Mf(e, t, r) {
    var o = t.pendingProps,
      a = Pe.current,
      u = !1,
      h = (t.flags & 128) !== 0,
      v;
    if (
      ((v = h) || (v = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      v ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (a |= 1),
      me(Pe, a & 1),
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
                  : (u = Ts(h, o, 0, null)),
                (e = Rn(e, o, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Tl(r)),
                (t.memoizedState = kl),
                e)
              : Cl(t, h))
      );
    if (((a = e.memoizedState), a !== null && ((v = a.dehydrated), v !== null)))
      return Ig(e, t, h, o, v, a, r);
    if (u) {
      ((u = o.fallback), (h = t.mode), (a = e.child), (v = a.sibling));
      var w = { mode: "hidden", children: o.children };
      return (
        (h & 1) === 0 && t.child !== a
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = w), (t.deletions = null))
          : ((o = fn(a, w)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
        v !== null ? (u = fn(v, u)) : ((u = Rn(u, h, r, null)), (u.flags |= 2)),
        (u.return = t),
        (o.return = t),
        (o.sibling = u),
        (t.child = o),
        (o = u),
        (u = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? Tl(r)
            : { baseLanes: h.baseLanes | r, cachePool: null, transitions: h.transitions }),
        (u.memoizedState = h),
        (u.childLanes = e.childLanes & ~r),
        (t.memoizedState = kl),
        o
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (o = fn(u, { mode: "visible", children: o.children })),
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
  function Cl(e, t) {
    return (
      (t = Ts({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fs(e, t, r, o) {
    return (
      o !== null && bo(o),
      bn(t, e.child, null, r),
      (e = Cl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ig(e, t, r, o, a, u, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = xl(Error(s(422)))), fs(e, t, h, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = o.fallback),
            (a = t.mode),
            (o = Ts({ mode: "visible", children: o.children }, a, 0, null)),
            (u = Rn(u, a, h, null)),
            (u.flags |= 2),
            (o.return = t),
            (u.return = t),
            (o.sibling = u),
            (t.child = o),
            (t.mode & 1) !== 0 && bn(t, e.child, null, h),
            (t.child.memoizedState = Tl(h)),
            (t.memoizedState = kl),
            u);
    if ((t.mode & 1) === 0) return fs(e, t, h, null);
    if (a.data === "$!") {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var v = o.dgst;
      return ((o = v), (u = Error(s(419))), (o = xl(u, o, void 0)), fs(e, t, h, o));
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
          a !== 0 && a !== u.retryLane && ((u.retryLane = a), Bt(e, a), At(o, e, a, -1)));
      }
      return (Ul(), (o = xl(Error(s(421)))), fs(e, t, h, o));
    }
    return a.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Zg.bind(null, e)), (a._reactRetry = t), null)
      : ((e = u.treeContext),
        (at = Jt(a.nextSibling)),
        (lt = t),
        (Se = !0),
        (kt = null),
        e !== null &&
          ((dt[ht++] = It),
          (dt[ht++] = zt),
          (dt[ht++] = wn),
          (It = e.id),
          (zt = e.overflow),
          (wn = t)),
        (t = Cl(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Nf(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), nl(e.return, t, r));
  }
  function El(e, t, r, o, a) {
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
  function Lf(e, t, r) {
    var o = t.pendingProps,
      a = o.revealOrder,
      u = o.tail;
    if ((Xe(e, t, o.children, r), (o = Pe.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Nf(e, r, t);
          else if (e.tag === 19) Nf(e, r, t);
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
    if ((me(Pe, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (r = t.child, a = null; r !== null;)
            ((e = r.alternate), e !== null && is(e) === null && (a = r), (r = r.sibling));
          ((r = a),
            r === null ? ((a = t.child), (t.child = null)) : ((a = r.sibling), (r.sibling = null)),
            El(t, !1, a, r, u));
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null;) {
            if (((e = a.alternate), e !== null && is(e) === null)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = r), (r = a), (a = e));
          }
          El(t, !0, r, null, u);
          break;
        case "together":
          El(t, !1, null, null, void 0);
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
  function Wt(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Cn |= t.lanes), (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, r = fn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;)
        ((e = e.sibling), (r = r.sibling = fn(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function zg(e, t, r) {
    switch (t.tag) {
      case 3:
        (Df(t), Zn());
        break;
      case 5:
        Kc(t);
        break;
      case 1:
        Je(t.type) && Xi(t);
        break;
      case 4:
        sl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value;
        (me(es, o._currentValue), (o._currentValue = a));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (me(Pe, Pe.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Mf(e, t, r)
              : (me(Pe, Pe.current & 1), (e = Wt(e, t, r)), e !== null ? e.sibling : null);
        me(Pe, Pe.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return Lf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          me(Pe, Pe.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Cf(e, t, r));
    }
    return Wt(e, t, r);
  }
  var Vf, Al, jf, _f;
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
    (Al = function () {}),
    (jf = function (e, t, r, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        ((e = t.stateNode), kn(Nt.current));
        var u = null;
        switch (r) {
          case "input":
            ((a = to(e, a)), (o = to(e, o)), (u = []));
            break;
          case "select":
            ((a = $({}, a, { value: void 0 })), (o = $({}, o, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((a = io(e, a)), (o = io(e, o)), (u = []));
            break;
          default:
            typeof a.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Ki);
        }
        oo(r, o);
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
    (_f = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    }));
  function Zr(e, t) {
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
  function Bg(e, t, r) {
    var o = t.pendingProps;
    switch ((Yo(t), t.tag)) {
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
        return (Je(t.type) && Qi(), We(t), null);
      case 3:
        return (
          (o = t.stateNode),
          tr(),
          ve(be),
          ve(Be),
          al(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (bi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), kt !== null && (Il(kt), (kt = null)))),
          Al(e, t),
          We(t),
          null
        );
      case 5:
        ol(t);
        var a = kn(Gr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (jf(e, t, r, o, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (We(t), null);
          }
          if (((e = kn(Nt.current)), bi(t))) {
            ((o = t.stateNode), (r = t.type));
            var u = t.memoizedProps;
            switch (((o[Mt] = t), (o[Ur] = u), (e = (t.mode & 1) !== 0), r)) {
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
                for (a = 0; a < Ir.length; a++) ye(Ir[a], o);
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
                (pu(o, u), ye("invalid", o));
                break;
              case "select":
                ((o._wrapperState = { wasMultiple: !!u.multiple }), ye("invalid", o));
                break;
              case "textarea":
                (yu(o, u), ye("invalid", o));
            }
            (oo(r, u), (a = null));
            for (var h in u)
              if (u.hasOwnProperty(h)) {
                var v = u[h];
                h === "children"
                  ? typeof v == "string"
                    ? o.textContent !== v &&
                      (u.suppressHydrationWarning !== !0 && Hi(o.textContent, v, e),
                      (a = ["children", v]))
                    : typeof v == "number" &&
                      o.textContent !== "" + v &&
                      (u.suppressHydrationWarning !== !0 && Hi(o.textContent, v, e),
                      (a = ["children", "" + v]))
                  : c.hasOwnProperty(h) && v != null && h === "onScroll" && ye("scroll", o);
              }
            switch (r) {
              case "input":
                (Si(o), gu(o, u, !0));
                break;
              case "textarea":
                (Si(o), xu(o));
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
              (e[Mt] = t),
              (e[Ur] = o),
              Vf(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = lo(r, o)), r)) {
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
                  for (a = 0; a < Ir.length; a++) ye(Ir[a], e);
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
                  (pu(e, o), (a = to(e, o)), ye("invalid", e));
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
                  (yu(e, o), (a = io(e, o)), ye("invalid", e));
                  break;
                default:
                  a = o;
              }
              (oo(r, a), (v = a));
              for (u in v)
                if (v.hasOwnProperty(u)) {
                  var w = v[u];
                  u === "style"
                    ? ku(e, w)
                    : u === "dangerouslySetInnerHTML"
                      ? ((w = w ? w.__html : void 0), w != null && Su(e, w))
                      : u === "children"
                        ? typeof w == "string"
                          ? (r !== "textarea" || w !== "") && xr(e, w)
                          : typeof w == "number" && xr(e, "" + w)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (c.hasOwnProperty(u)
                            ? w != null && u === "onScroll" && ye("scroll", e)
                            : w != null && K(e, u, w, h));
                }
              switch (r) {
                case "input":
                  (Si(e), gu(e, o, !1));
                  break;
                case "textarea":
                  (Si(e), xu(e));
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + de(o.value));
                  break;
                case "select":
                  ((e.multiple = !!o.multiple),
                    (u = o.value),
                    u != null
                      ? Fn(e, !!o.multiple, u, !1)
                      : o.defaultValue != null && Fn(e, !!o.multiple, o.defaultValue, !0));
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
        return (We(t), null);
      case 6:
        if (e && t.stateNode != null) _f(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((r = kn(Gr.current)), kn(Nt.current), bi(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[Mt] = t),
              (u = o.nodeValue !== r) && ((e = lt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Hi(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Hi(o.nodeValue, r, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
              (o[Mt] = t),
              (t.stateNode = o));
        }
        return (We(t), null);
      case 13:
        if (
          (ve(Pe),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && at !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Oc(), Zn(), (t.flags |= 98560), (u = !1));
          else if (((u = bi(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(s(317));
              u[Mt] = t;
            } else (Zn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (We(t), (u = !1));
          } else (kt !== null && (Il(kt), (kt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Pe.current & 1) !== 0 ? Ve === 0 && (Ve = 3) : Ul())),
            t.updateQueue !== null && (t.flags |= 4),
            We(t),
            null);
      case 4:
        return (tr(), Al(e, t), e === null && zr(t.stateNode.containerInfo), We(t), null);
      case 10:
        return (tl(t.type._context), We(t), null);
      case 17:
        return (Je(t.type) && Qi(), We(t), null);
      case 19:
        if ((ve(Pe), (u = t.memoizedState), u === null)) return (We(t), null);
        if (((o = (t.flags & 128) !== 0), (h = u.rendering), h === null))
          if (o) Zr(u, !1);
          else {
            if (Ve !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((h = is(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      Zr(u, !1),
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
                  return (me(Pe, (Pe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              De() > sr &&
              ((t.flags |= 128), (o = !0), Zr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = is(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Zr(u, !0),
                u.tail === null && u.tailMode === "hidden" && !h.alternate && !Se)
              )
                return (We(t), null);
            } else
              2 * De() - u.renderingStartTime > sr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), Zr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((r = u.last), r !== null ? (r.sibling = h) : (t.child = h), (u.last = h));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = De()),
            (t.sibling = null),
            (r = Pe.current),
            me(Pe, o ? (r & 1) | 2 : r & 1),
            t)
          : (We(t), null);
      case 22:
      case 23:
        return (
          Bl(),
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
  function Ug(e, t) {
    switch ((Yo(t), t.tag)) {
      case 1:
        return (
          Je(t.type) && Qi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          tr(),
          ve(be),
          ve(Be),
          al(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ol(t), null);
      case 13:
        if ((ve(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Zn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ve(Pe), null);
      case 4:
        return (tr(), null);
      case 10:
        return (tl(t.type._context), null);
      case 22:
      case 23:
        return (Bl(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hs = !1,
    $e = !1,
    Wg = typeof WeakSet == "function" ? WeakSet : Set,
    H = null;
  function rr(e, t) {
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
  var Ff = !1;
  function $g(e, t) {
    if (((Bo = Vi), (e = hc()), Lo(e))) {
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
              L = 0,
              j = e,
              M = null;
            t: for (;;) {
              for (
                var U;
                j !== r || (a !== 0 && j.nodeType !== 3) || (v = h + a),
                  j !== u || (o !== 0 && j.nodeType !== 3) || (w = h + o),
                  j.nodeType === 3 && (h += j.nodeValue.length),
                  (U = j.firstChild) !== null;
              )
                ((M = j), (j = U));
              for (;;) {
                if (j === e) break t;
                if (
                  (M === r && ++E === a && (v = h),
                  M === u && ++L === o && (w = h),
                  (U = j.nextSibling) !== null)
                )
                  break;
                ((j = M), (M = j.parentNode));
              }
              j = U;
            }
            r = v === -1 || w === -1 ? null : { start: v, end: w };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Uo = { focusedElem: e, selectionRange: r }, Vi = !1, H = t; H !== null;)
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
                      Re = G.memoizedState,
                      T = t.stateNode,
                      S = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Q : Tt(t.type, Q),
                        Re,
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
  function Rl(e) {
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
  function Of(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Of(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Mt], delete t[Ur], delete t[Ko], delete t[Cg], delete t[Eg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function If(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function zf(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || If(e.return)) return null;
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
  function Ml(e, t, r) {
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
      for (Ml(e, t, r), e = e.sibling; e !== null;) (Ml(e, t, r), (e = e.sibling));
  }
  function Nl(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Nl(e, t, r), e = e.sibling; e !== null;) (Nl(e, t, r), (e = e.sibling));
  }
  var Oe = null,
    Ct = !1;
  function on(e, t, r) {
    for (r = r.child; r !== null;) (Bf(e, t, r), (r = r.sibling));
  }
  function Bf(e, t, r) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function")
      try {
        Rt.onCommitFiberUnmount(Ai, r);
      } catch {}
    switch (r.tag) {
      case 5:
        $e || rr(r, t);
      case 6:
        var o = Oe,
          a = Ct;
        ((Oe = null),
          on(e, t, r),
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
              e.nodeType === 8 ? Ho(e.parentNode, r) : e.nodeType === 1 && Ho(e, r),
              Mr(e))
            : Ho(Oe, r.stateNode));
        break;
      case 4:
        ((o = Oe),
          (a = Ct),
          (Oe = r.stateNode.containerInfo),
          (Ct = !0),
          on(e, t, r),
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
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Dl(r, t, h),
              (a = a.next));
          } while (a !== o);
        }
        on(e, t, r);
        break;
      case 1:
        if (!$e && (rr(r, t), (o = r.stateNode), typeof o.componentWillUnmount == "function"))
          try {
            ((o.props = r.memoizedProps), (o.state = r.memoizedState), o.componentWillUnmount());
          } catch (v) {
            Ee(r, t, v);
          }
        on(e, t, r);
        break;
      case 21:
        on(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? (($e = (o = $e) || r.memoizedState !== null), on(e, t, r), ($e = o))
          : on(e, t, r);
        break;
      default:
        on(e, t, r);
    }
  }
  function Uf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Wg()),
        t.forEach(function (o) {
          var a = bg.bind(null, e, o);
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
          (Bf(u, h, a), (Oe = null), (Ct = !1));
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
        if ((Et(t, e), Vt(e), o & 4)) {
          try {
            (br(3, e, e.return), ps(3, e));
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
        (Et(t, e), Vt(e), o & 512 && r !== null && rr(r, r.return));
        break;
      case 5:
        if ((Et(t, e), Vt(e), o & 512 && r !== null && rr(r, r.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            xr(a, "");
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
              (v === "input" && u.type === "radio" && u.name != null && mu(a, u), lo(v, h));
              var E = lo(v, u);
              for (h = 0; h < w.length; h += 2) {
                var L = w[h],
                  j = w[h + 1];
                L === "style"
                  ? ku(a, j)
                  : L === "dangerouslySetInnerHTML"
                    ? Su(a, j)
                    : L === "children"
                      ? xr(a, j)
                      : K(a, L, j, E);
              }
              switch (v) {
                case "input":
                  no(a, u);
                  break;
                case "textarea":
                  vu(a, u);
                  break;
                case "select":
                  var M = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!u.multiple;
                  var U = u.value;
                  U != null
                    ? Fn(a, !!u.multiple, U, !1)
                    : M !== !!u.multiple &&
                      (u.defaultValue != null
                        ? Fn(a, !!u.multiple, u.defaultValue, !0)
                        : Fn(a, !!u.multiple, u.multiple ? [] : "", !1));
              }
              a[Ur] = u;
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
            Mr(t.containerInfo);
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
            !u || (a.alternate !== null && a.alternate.memoizedState !== null) || (jl = De())),
          o & 4 && Uf(e));
        break;
      case 22:
        if (
          ((L = r !== null && r.memoizedState !== null),
          e.mode & 1 ? (($e = (E = $e) || L), Et(t, e), ($e = E)) : Et(t, e),
          Vt(e),
          o & 8192)
        ) {
          if (
            ((E = e.memoizedState !== null), (e.stateNode.isHidden = E) && !L && (e.mode & 1) !== 0)
          )
            for (H = e, L = e.child; L !== null;) {
              for (j = H = L; H !== null;) {
                switch (((M = H), (U = M.child), M.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    br(4, M, M.return);
                    break;
                  case 1:
                    rr(M, M.return);
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
                    rr(M, M.return);
                    break;
                  case 22:
                    if (M.memoizedState !== null) {
                      Kf(j);
                      continue;
                    }
                }
                U !== null ? ((U.return = M), (H = U)) : Kf(j);
              }
              L = L.sibling;
            }
          e: for (L = null, j = e; ;) {
            if (j.tag === 5) {
              if (L === null) {
                L = j;
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
                        (v.style.display = Pu("display", h))));
                } catch (Q) {
                  Ee(e, e.return, Q);
                }
              }
            } else if (j.tag === 6) {
              if (L === null)
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
              (L === j && (L = null), (j = j.return));
            }
            (L === j && (L = null), (j.sibling.return = j.return), (j = j.sibling));
          }
        }
        break;
      case 19:
        (Et(t, e), Vt(e), o & 4 && Uf(e));
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
            if (If(r)) {
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
            o.flags & 32 && (xr(a, ""), (o.flags &= -33));
            var u = zf(e);
            Nl(e, u, a);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              v = zf(e);
            Ml(e, v, h);
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
  function Hg(e, t, r) {
    ((H = e), $f(e));
  }
  function $f(e, t, r) {
    for (var o = (e.mode & 1) !== 0; H !== null;) {
      var a = H,
        u = a.child;
      if (a.tag === 22 && o) {
        var h = a.memoizedState !== null || hs;
        if (!h) {
          var v = a.alternate,
            w = (v !== null && v.memoizedState !== null) || $e;
          v = hs;
          var E = $e;
          if (((hs = h), ($e = w) && !E))
            for (H = a; H !== null;)
              ((h = H),
                (w = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Gf(a)
                  : w !== null
                    ? ((w.return = h), (H = w))
                    : Gf(a));
          for (; u !== null;) ((H = u), $f(u), (u = u.sibling));
          ((H = a), (hs = v), ($e = E));
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
                $e || ps(5, t);
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
                    var L = E.memoizedState;
                    if (L !== null) {
                      var j = L.dehydrated;
                      j !== null && Mr(j);
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
          $e || (t.flags & 512 && Rl(t));
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
              ps(4, t);
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
              Rl(t);
            } catch (w) {
              Ee(t, u, w);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Rl(t);
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
  var Kg = Math.ceil,
    ms = Y.ReactCurrentDispatcher,
    Ll = Y.ReactCurrentOwner,
    gt = Y.ReactCurrentBatchConfig,
    ae = 0,
    _e = null,
    Ne = null,
    Ie = 0,
    ut = 0,
    ir = en(0),
    Ve = 0,
    Jr = null,
    Cn = 0,
    gs = 0,
    Vl = 0,
    ei = null,
    tt = null,
    jl = 0,
    sr = 1 / 0,
    $t = null,
    ys = !1,
    _l = null,
    ln = null,
    vs = !1,
    an = null,
    xs = 0,
    ti = 0,
    Fl = null,
    ws = -1,
    Ss = 0;
  function Ye() {
    return (ae & 6) !== 0 ? De() : ws !== -1 ? ws : (ws = De());
  }
  function un(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && Ie !== 0
        ? Ie & -Ie
        : Dg.transition !== null
          ? (Ss === 0 && (Ss = Iu()), Ss)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qu(e.type))), e);
  }
  function At(e, t, r, o) {
    if (50 < ti) throw ((ti = 0), (Fl = null), Error(s(185)));
    (Cr(e, r, o),
      ((ae & 2) === 0 || e !== _e) &&
        (e === _e && ((ae & 2) === 0 && (gs |= r), Ve === 4 && cn(e, Ie)),
        nt(e, o),
        r === 1 && ae === 0 && (t.mode & 1) === 0 && ((sr = De() + 500), Yi && nn())));
  }
  function nt(e, t) {
    var r = e.callbackNode;
    Dm(e, t);
    var o = Mi(e, e === _e ? Ie : 0);
    if (o === 0) (r !== null && _u(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && _u(r), t === 1))
        (e.tag === 0 ? Ag(Xf.bind(null, e)) : Lc(Xf.bind(null, e)),
          kg(function () {
            (ae & 6) === 0 && nn();
          }),
          (r = null));
      else {
        switch (zu(o)) {
          case 1:
            r = mo;
            break;
          case 4:
            r = Fu;
            break;
          case 16:
            r = Ei;
            break;
          case 536870912:
            r = Ou;
            break;
          default:
            r = Ei;
        }
        r = nd(r, Qf.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function Qf(e, t) {
    if (((ws = -1), (Ss = 0), (ae & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (or() && e.callbackNode !== r) return null;
    var o = Mi(e, e === _e ? Ie : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Ps(e, o);
    else {
      t = o;
      var a = ae;
      ae |= 2;
      var u = qf();
      (_e !== e || Ie !== t) && (($t = null), (sr = De() + 500), An(e, t));
      do
        try {
          Xg();
          break;
        } catch (v) {
          Yf(e, v);
        }
      while (!0);
      (el(), (ms.current = u), (ae = a), Ne !== null ? (t = 0) : ((_e = null), (Ie = 0), (t = Ve)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = go(e)), a !== 0 && ((o = a), (t = Ol(e, a)))), t === 1))
        throw ((r = Jr), An(e, 0), cn(e, o), nt(e, De()), r);
      if (t === 6) cn(e, o);
      else {
        if (
          ((a = e.current.alternate),
          (o & 30) === 0 &&
            !Gg(a) &&
            ((t = Ps(e, o)),
            t === 2 && ((u = go(e)), u !== 0 && ((o = u), (t = Ol(e, u)))),
            t === 1))
        )
          throw ((r = Jr), An(e, 0), cn(e, o), nt(e, De()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Dn(e, tt, $t);
            break;
          case 3:
            if ((cn(e, o), (o & 130023424) === o && ((t = jl + 500 - De()), 10 < t))) {
              if (Mi(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                (Ye(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = $o(Dn.bind(null, e, tt, $t), t);
              break;
            }
            Dn(e, tt, $t);
            break;
          case 4:
            if ((cn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, a = -1; 0 < o;) {
              var h = 31 - St(o);
              ((u = 1 << h), (h = t[h]), h > a && (a = h), (o &= ~u));
            }
            if (
              ((o = a),
              (o = De() - o),
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
                            : 1960 * Kg(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = $o(Dn.bind(null, e, tt, $t), o);
              break;
            }
            Dn(e, tt, $t);
            break;
          case 5:
            Dn(e, tt, $t);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (nt(e, De()), e.callbackNode === r ? Qf.bind(null, e) : null);
  }
  function Ol(e, t) {
    var r = ei;
    return (
      e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256),
      (e = Ps(e, t)),
      e !== 2 && ((t = tt), (tt = r), t !== null && Il(t)),
      e
    );
  }
  function Il(e) {
    tt === null ? (tt = e) : tt.push.apply(tt, e);
  }
  function Gg(e) {
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
  function cn(e, t) {
    for (
      t &= ~Vl, t &= ~gs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - St(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function Xf(e) {
    if ((ae & 6) !== 0) throw Error(s(327));
    or();
    var t = Mi(e, 0);
    if ((t & 1) === 0) return (nt(e, De()), null);
    var r = Ps(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = go(e);
      o !== 0 && ((t = o), (r = Ol(e, o)));
    }
    if (r === 1) throw ((r = Jr), An(e, 0), cn(e, t), nt(e, De()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Dn(e, tt, $t),
      nt(e, De()),
      null
    );
  }
  function zl(e, t) {
    var r = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      ((ae = r), ae === 0 && ((sr = De() + 500), Yi && nn()));
    }
  }
  function En(e) {
    an !== null && an.tag === 0 && (ae & 6) === 0 && or();
    var t = ae;
    ae |= 1;
    var r = gt.transition,
      o = he;
    try {
      if (((gt.transition = null), (he = 1), e)) return e();
    } finally {
      ((he = o), (gt.transition = r), (ae = t), (ae & 6) === 0 && nn());
    }
  }
  function Bl() {
    ((ut = ir.current), ve(ir));
  }
  function An(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Pg(r)), Ne !== null))
      for (r = Ne.return; r !== null;) {
        var o = r;
        switch ((Yo(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Qi());
            break;
          case 3:
            (tr(), ve(be), ve(Be), al());
            break;
          case 5:
            ol(o);
            break;
          case 4:
            tr();
            break;
          case 13:
            ve(Pe);
            break;
          case 19:
            ve(Pe);
            break;
          case 10:
            tl(o.type._context);
            break;
          case 22:
          case 23:
            Bl();
        }
        r = r.return;
      }
    if (
      ((_e = e),
      (Ne = e = fn(e.current, null)),
      (Ie = ut = t),
      (Ve = 0),
      (Jr = null),
      (Vl = gs = Cn = 0),
      (tt = ei = null),
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
  function Yf(e, t) {
    do {
      var r = Ne;
      try {
        if ((el(), (ss.current = us), os)) {
          for (var o = ke.memoizedState; o !== null;) {
            var a = o.queue;
            (a !== null && (a.pending = null), (o = o.next));
          }
          os = !1;
        }
        if (
          ((Tn = 0),
          (je = Le = ke = null),
          (Qr = !1),
          (Xr = 0),
          (Ll.current = null),
          r === null || r.return === null)
        ) {
          ((Ve = 1), (Jr = t), (Ne = null));
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
              L = v,
              j = L.tag;
            if ((L.mode & 1) === 0 && (j === 0 || j === 11 || j === 15)) {
              var M = L.alternate;
              M
                ? ((L.updateQueue = M.updateQueue),
                  (L.memoizedState = M.memoizedState),
                  (L.lanes = M.lanes))
                : ((L.updateQueue = null), (L.memoizedState = null));
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
                (xf(u, E, t), Ul());
                break e;
              }
              w = Error(s(426));
            }
          } else if (Se && v.mode & 1) {
            var Re = wf(h);
            if (Re !== null) {
              ((Re.flags & 65536) === 0 && (Re.flags |= 256), Sf(Re, h, v, u, t), bo(nr(w, v)));
              break e;
            }
          }
          ((u = w = nr(w, v)),
            Ve !== 4 && (Ve = 2),
            ei === null ? (ei = [u]) : ei.push(u),
            (u = h));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var T = yf(u, w, t);
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
                      (ln === null || !ln.has(C))))
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
        bf(r);
      } catch (X) {
        ((t = X), Ne === r && r !== null && (Ne = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function qf() {
    var e = ms.current;
    return ((ms.current = us), e === null ? us : e);
  }
  function Ul() {
    ((Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4),
      _e === null || ((Cn & 268435455) === 0 && (gs & 268435455) === 0) || cn(_e, Ie));
  }
  function Ps(e, t) {
    var r = ae;
    ae |= 2;
    var o = qf();
    (_e !== e || Ie !== t) && (($t = null), An(e, t));
    do
      try {
        Qg();
        break;
      } catch (a) {
        Yf(e, a);
      }
    while (!0);
    if ((el(), (ae = r), (ms.current = o), Ne !== null)) throw Error(s(261));
    return ((_e = null), (Ie = 0), Ve);
  }
  function Qg() {
    for (; Ne !== null;) Zf(Ne);
  }
  function Xg() {
    for (; Ne !== null && !xm();) Zf(Ne);
  }
  function Zf(e) {
    var t = td(e.alternate, e, ut);
    ((e.memoizedProps = e.pendingProps), t === null ? bf(e) : (Ne = t), (Ll.current = null));
  }
  function bf(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Bg(r, t, ut)), r !== null)) {
          Ne = r;
          return;
        }
      } else {
        if (((r = Ug(r, t)), r !== null)) {
          ((r.flags &= 32767), (Ne = r));
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
  function Dn(e, t, r) {
    var o = he,
      a = gt.transition;
    try {
      ((gt.transition = null), (he = 1), Yg(e, t, r, o));
    } finally {
      ((gt.transition = a), (he = o));
    }
    return null;
  }
  function Yg(e, t, r, o) {
    do or();
    while (an !== null);
    if ((ae & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = r.lanes | r.childLanes;
    if (
      (Rm(e, u),
      e === _e && ((Ne = _e = null), (Ie = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        vs ||
        ((vs = !0),
        nd(Ei, function () {
          return (or(), null);
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
        $g(e, r),
        Wf(r, e),
        mg(Uo),
        (Vi = !!Bo),
        (Uo = Bo = null),
        (e.current = r),
        Hg(r),
        wm(),
        (ae = v),
        (he = h),
        (gt.transition = u));
    } else e.current = r;
    if (
      (vs && ((vs = !1), (an = e), (xs = a)),
      (u = e.pendingLanes),
      u === 0 && (ln = null),
      km(r.stateNode),
      nt(e, De()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((a = t[r]), o(a.value, { componentStack: a.stack, digest: a.digest }));
    if (ys) throw ((ys = !1), (e = _l), (_l = null), e);
    return (
      (xs & 1) !== 0 && e.tag !== 0 && or(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === Fl ? ti++ : ((ti = 0), (Fl = e))) : (ti = 0),
      nn(),
      null
    );
  }
  function or() {
    if (an !== null) {
      var e = zu(xs),
        t = gt.transition,
        r = he;
      try {
        if (((gt.transition = null), (he = 16 > e ? 16 : e), an === null)) var o = !1;
        else {
          if (((e = an), (an = null), (xs = 0), (ae & 6) !== 0)) throw Error(s(331));
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
                    var L = H;
                    switch (L.tag) {
                      case 0:
                      case 11:
                      case 15:
                        br(8, L, u);
                    }
                    var j = L.child;
                    if (j !== null) ((j.return = L), (H = j));
                    else
                      for (; H !== null;) {
                        L = H;
                        var M = L.sibling,
                          U = L.return;
                        if ((Of(L), L === E)) {
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
                      var Re = Q.sibling;
                      ((Q.sibling = null), (Q = Re));
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
                        ps(9, v);
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
          if (((ae = a), nn(), Rt && typeof Rt.onPostCommitFiberRoot == "function"))
            try {
              Rt.onPostCommitFiberRoot(Ai, e);
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
  function Jf(e, t, r) {
    ((t = nr(r, t)),
      (t = yf(e, t, 1)),
      (e = sn(e, t, 1)),
      (t = Ye()),
      e !== null && (Cr(e, 1, t), nt(e, t)));
  }
  function Ee(e, t, r) {
    if (e.tag === 3) Jf(e, e, r);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Jf(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" && (ln === null || !ln.has(o)))
          ) {
            ((e = nr(r, e)),
              (e = vf(t, e, 1)),
              (t = sn(t, e, 1)),
              (e = Ye()),
              t !== null && (Cr(t, 1, e), nt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function qg(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & r),
      _e === e &&
        (Ie & r) === r &&
        (Ve === 4 || (Ve === 3 && (Ie & 130023424) === Ie && 500 > De() - jl)
          ? An(e, 0)
          : (Vl |= r)),
      nt(e, t));
  }
  function ed(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ri), (Ri <<= 1), (Ri & 130023424) === 0 && (Ri = 4194304)));
    var r = Ye();
    ((e = Bt(e, t)), e !== null && (Cr(e, t, r), nt(e, r)));
  }
  function Zg(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), ed(e, r));
  }
  function bg(e, t) {
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
      if (e.memoizedProps !== t.pendingProps || be.current) et = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((et = !1), zg(e, t, r));
        et = (e.flags & 131072) !== 0;
      }
    else ((et = !1), Se && (t.flags & 1048576) !== 0 && Vc(t, Zi, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (ds(e, t), (e = t.pendingProps));
        var a = Xn(t, Be.current);
        (er(t, r), (a = fl(null, t, o, e, a, r)));
        var u = dl();
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
              il(t),
              (a.updater = cs),
              (t.stateNode = a),
              (a._reactInternals = t),
              vl(t, o, e, r),
              (t = Pl(null, t, o, !0, u, r)))
            : ((t.tag = 0), Se && u && Xo(t), Xe(null, t, a, r), (t = t.child)),
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
            (a = t.tag = ey(o)),
            (e = Tt(o, e)),
            a)
          ) {
            case 0:
              t = Sl(null, t, o, e, r);
              break e;
            case 1:
              t = Af(null, t, o, e, r);
              break e;
            case 11:
              t = Pf(null, t, o, e, r);
              break e;
            case 14:
              t = kf(null, t, o, Tt(o.type, e), r);
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
          Sl(e, t, o, a, r)
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
              ((a = nr(Error(s(423)), t)), (t = Rf(e, t, o, r, a)));
              break e;
            } else if (o !== a) {
              ((a = nr(Error(s(424)), t)), (t = Rf(e, t, o, r, a)));
              break e;
            } else
              for (
                at = Jt(t.stateNode.containerInfo.firstChild),
                  lt = t,
                  Se = !0,
                  kt = null,
                  r = Bc(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((Zn(), o === a)) {
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
          Kc(t),
          e === null && Zo(t),
          (o = t.type),
          (a = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = a.children),
          Wo(o, a) ? (h = null) : u !== null && Wo(o, u) && (t.flags |= 32),
          Ef(e, t),
          Xe(e, t, h, r),
          t.child
        );
      case 6:
        return (e === null && Zo(t), null);
      case 13:
        return Mf(e, t, r);
      case 4:
        return (
          sl(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = bn(t, null, o, r)) : Xe(e, t, o, r),
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
            me(es, o._currentValue),
            (o._currentValue = h),
            u !== null)
          )
            if (Pt(u.value, h)) {
              if (u.children === a.children && !be.current) {
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
                        ((w = Ut(-1, r & -r)), (w.tag = 2));
                        var E = u.updateQueue;
                        if (E !== null) {
                          E = E.shared;
                          var L = E.pending;
                          (L === null ? (w.next = w) : ((w.next = L.next), (L.next = w)),
                            (E.pending = w));
                        }
                      }
                      ((u.lanes |= r),
                        (w = u.alternate),
                        w !== null && (w.lanes |= r),
                        nl(u.return, r, t),
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
                    nl(h, r, t),
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
          er(t, r),
          (a = pt(a)),
          (o = o(a)),
          (t.flags |= 1),
          Xe(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (a = Tt(o, t.pendingProps)), (a = Tt(o.type, a)), kf(e, t, o, a, r));
      case 15:
        return Tf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Tt(o, a)),
          ds(e, t),
          (t.tag = 1),
          Je(o) ? ((e = !0), Xi(t)) : (e = !1),
          er(t, r),
          mf(t, o, a),
          vl(t, o, a, r),
          Pl(null, t, o, !0, e, r)
        );
      case 19:
        return Lf(e, t, r);
      case 22:
        return Cf(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function nd(e, t) {
    return ju(e, t);
  }
  function Jg(e, t, r, o) {
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
    return new Jg(e, t, r, o);
  }
  function Wl(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ey(e) {
    if (typeof e == "function") return Wl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === it)) return 11;
      if (e === wt) return 14;
    }
    return 2;
  }
  function fn(e, t) {
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
  function ks(e, t, r, o, a, u) {
    var h = 2;
    if (((o = e), typeof e == "function")) Wl(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case le:
          return Rn(r.children, a, u, t);
        case q:
          ((h = 8), (a |= 8));
          break;
        case ge:
          return ((e = yt(12, r, t, a | 2)), (e.elementType = ge), (e.lanes = u), e);
        case Ge:
          return ((e = yt(13, r, t, a)), (e.elementType = Ge), (e.lanes = u), e);
        case Ze:
          return ((e = yt(19, r, t, a)), (e.elementType = Ze), (e.lanes = u), e);
        case ie:
          return Ts(r, a, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ce:
                h = 10;
                break e;
              case qe:
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
  function Rn(e, t, r, o) {
    return ((e = yt(7, e, o, t)), (e.lanes = r), e);
  }
  function Ts(e, t, r, o) {
    return (
      (e = yt(22, e, o, t)),
      (e.elementType = ie),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function $l(e, t, r) {
    return ((e = yt(6, e, null, t)), (e.lanes = r), e);
  }
  function Hl(e, t, r) {
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
  function ty(e, t, r, o, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = yo(0)),
      (this.expirationTimes = yo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = yo(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Kl(e, t, r, o, a, u, h, v, w) {
    return (
      (e = new ty(e, t, r, v, w)),
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
      il(u),
      e
    );
  }
  function ny(e, t, r) {
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
    if (!e) return tn;
    e = e._reactInternals;
    e: {
      if (yn(e) !== e || e.tag !== 1) throw Error(s(170));
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
      if (Je(r)) return Mc(e, r, t);
    }
    return t;
  }
  function id(e, t, r, o, a, u, h, v, w) {
    return (
      (e = Kl(r, o, !0, e, a, u, h, v, w)),
      (e.context = rd(null)),
      (r = e.current),
      (o = Ye()),
      (a = un(r)),
      (u = Ut(o, a)),
      (u.callback = t ?? null),
      sn(r, u, a),
      (e.current.lanes = a),
      Cr(e, a, o),
      nt(e, o),
      e
    );
  }
  function Cs(e, t, r, o) {
    var a = t.current,
      u = Ye(),
      h = un(a);
    return (
      (r = rd(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Ut(u, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = sn(a, t, h)),
      e !== null && (At(e, a, h, u), ns(e, a, h)),
      h
    );
  }
  function Es(e) {
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
  function Gl(e, t) {
    (sd(e, t), (e = e.alternate) && sd(e, t));
  }
  function ry() {
    return null;
  }
  var od =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ql(e) {
    this._internalRoot = e;
  }
  ((As.prototype.render = Ql.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Cs(e, t, null, null);
    }),
    (As.prototype.unmount = Ql.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (En(function () {
            Cs(null, e, null, null);
          }),
            (t[Ft] = null));
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
      (qt.splice(r, 0, e), r === 0 && Ku(e));
    }
  };
  function Xl(e) {
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
  function ld() {}
  function iy(e, t, r, o, a) {
    if (a) {
      if (typeof o == "function") {
        var u = o;
        o = function () {
          var E = Es(h);
          u.call(E);
        };
      }
      var h = id(t, o, e, 0, null, !1, !1, "", ld);
      return (
        (e._reactRootContainer = h),
        (e[Ft] = h.current),
        zr(e.nodeType === 8 ? e.parentNode : e),
        En(),
        h
      );
    }
    for (; (a = e.lastChild);) e.removeChild(a);
    if (typeof o == "function") {
      var v = o;
      o = function () {
        var E = Es(w);
        v.call(E);
      };
    }
    var w = Kl(e, 0, !1, null, null, !1, !1, "", ld);
    return (
      (e._reactRootContainer = w),
      (e[Ft] = w.current),
      zr(e.nodeType === 8 ? e.parentNode : e),
      En(function () {
        Cs(t, w, r, o);
      }),
      w
    );
  }
  function Rs(e, t, r, o, a) {
    var u = r._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof a == "function") {
        var v = a;
        a = function () {
          var w = Es(h);
          v.call(w);
        };
      }
      Cs(t, h, e, a);
    } else h = iy(r, t, e, a, o);
    return Es(h);
  }
  ((Bu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Tr(t.pendingLanes);
          r !== 0 && (vo(t, r | 1), nt(t, De()), (ae & 6) === 0 && ((sr = De() + 500), nn()));
        }
        break;
      case 13:
        (En(function () {
          var o = Bt(e, 1);
          if (o !== null) {
            var a = Ye();
            At(o, e, 1, a);
          }
        }),
          Gl(e, 1));
    }
  }),
    (xo = function (e) {
      if (e.tag === 13) {
        var t = Bt(e, 134217728);
        if (t !== null) {
          var r = Ye();
          At(t, e, 134217728, r);
        }
        Gl(e, 134217728);
      }
    }),
    (Uu = function (e) {
      if (e.tag === 13) {
        var t = un(e),
          r = Bt(e, t);
        if (r !== null) {
          var o = Ye();
          At(r, e, t, o);
        }
        Gl(e, t);
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
    (co = function (e, t, r) {
      switch (t) {
        case "input":
          if ((no(e, r), (t = r.name), r.type === "radio" && t != null)) {
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
                (hu(o), no(o, a));
              }
            }
          }
          break;
        case "textarea":
          vu(e, r);
          break;
        case "select":
          ((t = r.value), t != null && Fn(e, !!r.multiple, t, !1));
      }
    }),
    (Au = zl),
    (Du = En));
  var sy = { usingClientEntryPoint: !1, Events: [Wr, Gn, Gi, Cu, Eu, zl] },
    ni = {
      findFiberByHostInstance: vn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    oy = {
      bundleType: ni.bundleType,
      version: ni.version,
      rendererPackageName: ni.rendererPackageName,
      rendererConfig: ni.rendererConfig,
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
        return ((e = Lu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: ni.findFiberByHostInstance || ry,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ms = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ms.isDisabled && Ms.supportsFiber)
      try {
        ((Ai = Ms.inject(oy)), (Rt = Ms));
      } catch {}
  }
  return (
    (rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sy),
    (rt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xl(t)) throw Error(s(200));
      return ny(e, t, null, r);
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
        (t = Kl(e, 1, !1, null, null, r, !1, o, a)),
        (e[Ft] = t.current),
        zr(e.nodeType === 8 ? e.parentNode : e),
        new Ql(t)
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
      return ((e = Lu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (rt.flushSync = function (e) {
      return En(e);
    }),
    (rt.hydrate = function (e, t, r) {
      if (!Ds(t)) throw Error(s(200));
      return Rs(null, e, t, !0, r);
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
        (e[Ft] = t.current),
        zr(e),
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
      return Rs(null, e, t, !1, r);
    }),
    (rt.unmountComponentAtNode = function (e) {
      if (!Ds(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (En(function () {
            Rs(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ft] = null));
            });
          }),
          !0)
        : !1;
    }),
    (rt.unstable_batchedUpdates = zl),
    (rt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!Ds(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Rs(e, t, r, !1, o);
    }),
    (rt.version = "18.3.1-next-f1338f8080-20240426"),
    rt
  );
}
var md;
function py() {
  if (md) return Zl.exports;
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
  return (n(), (Zl.exports = hy()), Zl.exports);
}
var gd;
function my() {
  if (gd) return Ns;
  gd = 1;
  var n = py();
  return ((Ns.createRoot = n.createRoot), (Ns.hydrateRoot = n.hydrateRoot), Ns);
}
var gy = my();
function Fs(n) {
  const i = n.replace(/^\//, "").replace(/\/$/, "");
  return i ? `#/${i}` : "#/";
}
function Ma(n) {
  const i = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return i
    ? i.startsWith("/")
      ? { kind: "route", path: i.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: i }
    : null;
}
function jh(n, i = "smooth") {
  if (typeof document > "u") return !1;
  const s = document.getElementById(n);
  return s ? (s.scrollIntoView({ behavior: i, block: "start" }), !0) : !1;
}
function Na(n) {
  typeof window > "u" || (window.location.hash = Fs(n));
}
function yy() {
  const n = Ma();
  return (n == null ? void 0 : n.kind) === "route" ? n.path : "";
}
function _h() {
  if (typeof window > "u") return;
  const n = Ma();
  (n == null ? void 0 : n.kind) === "section" && requestAnimationFrame(() => jh(n.id, "auto"));
}
function vy(n, i) {
  if (typeof window > "u") return () => {};
  const s = () => {
    const l = Ma();
    if (!l) {
      n("");
      return;
    }
    if (l.kind === "route") {
      n(l.path);
      return;
    }
    (jh(l.id, "smooth"), n(""));
  };
  return (
    s(),
    window.addEventListener("hashchange", s),
    () => window.removeEventListener("hashchange", s)
  );
}
function xy(n = "") {
  const [i, s] = z.useState(() => (typeof window < "u" ? yy() : n));
  return (z.useEffect(() => vy(s), []), i || n);
}
function wy({ routes: n, defaultRoute: i = "", className: s }) {
  const l = xy(i);
  z.useEffect(() => {
    _h();
  }, []);
  const c = l in n ? l : i,
    d = n[c] ?? n[i];
  return D.jsx("div", { className: s, children: d });
}
const La = z.createContext({});
function Va(n) {
  const i = z.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const Ys = z.createContext(null),
  ja = z.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
class Sy extends z.Component {
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
function Py({ children: n, isPresent: i }) {
  const s = z.useId(),
    l = z.useRef(null),
    c = z.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: d } = z.useContext(ja);
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
    D.jsx(Sy, { isPresent: i, childRef: l, sizeRef: c, children: z.cloneElement(n, { ref: l }) })
  );
}
const ky = ({
  children: n,
  initial: i,
  isPresent: s,
  onExitComplete: l,
  custom: c,
  presenceAffectsLayout: d,
  mode: f,
}) => {
  const p = Va(Ty),
    m = z.useId(),
    g = z.useCallback(
      (x) => {
        p.set(x, !0);
        for (const P of p.values()) if (!P) return;
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
      p.forEach((x, P) => p.set(P, !1));
    }, [s]),
    z.useEffect(() => {
      !s && !p.size && l && l();
    }, [s]),
    f === "popLayout" && (n = D.jsx(Py, { isPresent: s, children: n })),
    D.jsx(Ys.Provider, { value: y, children: n })
  );
};
function Ty() {
  return new Map();
}
function Fh(n = !0) {
  const i = z.useContext(Ys);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: l, register: c } = i,
    d = z.useId();
  z.useEffect(() => {
    n && c(d);
  }, [n]);
  const f = z.useCallback(() => n && l && l(d), [d, l, n]);
  return !s && l ? [!1, f] : [!0];
}
const Ls = (n) => n.key || "";
function yd(n) {
  const i = [];
  return (
    z.Children.forEach(n, (s) => {
      z.isValidElement(s) && i.push(s);
    }),
    i
  );
}
const _a = typeof window < "u",
  Oh = _a ? z.useLayoutEffect : z.useEffect,
  Cy = ({
    children: n,
    custom: i,
    initial: s = !0,
    onExitComplete: l,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: f = !1,
  }) => {
    const [p, m] = Fh(f),
      g = z.useMemo(() => yd(n), [n]),
      y = f && !p ? [] : g.map(Ls),
      x = z.useRef(!0),
      P = z.useRef(g),
      A = Va(() => new Map()),
      [_, R] = z.useState(g),
      [V, O] = z.useState(g);
    Oh(() => {
      ((x.current = !1), (P.current = g));
      for (let Y = 0; Y < V.length; Y++) {
        const B = Ls(V[Y]);
        y.includes(B) ? A.delete(B) : A.get(B) !== !0 && A.set(B, !1);
      }
    }, [V, y.length, y.join("-")]);
    const W = [];
    if (g !== _) {
      let Y = [...g];
      for (let B = 0; B < V.length; B++) {
        const ee = V[B],
          le = Ls(ee);
        y.includes(le) || (Y.splice(B, 0, ee), W.push(ee));
      }
      (d === "wait" && W.length && (Y = W), O(yd(Y)), R(g));
      return;
    }
    const { forceRender: K } = z.useContext(La);
    return D.jsx(D.Fragment, {
      children: V.map((Y) => {
        const B = Ls(Y),
          ee = f && !p ? !1 : g === V || y.includes(B),
          le = () => {
            if (A.has(B)) A.set(B, !0);
            else return;
            let q = !0;
            (A.forEach((ge) => {
              ge || (q = !1);
            }),
              q && (K == null || K(), O(P.current), f && (m == null || m()), l && l()));
          };
        return D.jsx(
          ky,
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
let Ih = ct;
function Fa(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const dr = (n, i, s) => {
    const l = i - n;
    return l === 0 ? 1 : (s - n) / l;
  },
  Ht = (n) => n * 1e3,
  Kt = (n) => n / 1e3,
  Ey = { useManualTiming: !1 };
function Ay(n) {
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
      const A = x && l ? i : s;
      return (y && d.add(g), A.has(g) || A.add(g), g);
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
const Vs = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  Dy = 40;
function zh(n, i) {
  let s = !1,
    l = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = Vs.reduce((O, W) => ((O[W] = Ay(d)), O), {}),
    { read: p, resolveKeyframes: m, update: g, preRender: y, render: x, postRender: P } = f,
    A = () => {
      const O = performance.now();
      ((s = !1),
        (c.delta = l ? 1e3 / 60 : Math.max(Math.min(O - c.timestamp, Dy), 1)),
        (c.timestamp = O),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        g.process(c),
        y.process(c),
        x.process(c),
        P.process(c),
        (c.isProcessing = !1),
        s && i && ((l = !1), n(A)));
    },
    _ = () => {
      ((s = !0), (l = !0), c.isProcessing || n(A));
    };
  return {
    schedule: Vs.reduce((O, W) => {
      const K = f[W];
      return ((O[W] = (Y, B = !1, ee = !1) => (s || _(), K.schedule(Y, B, ee))), O);
    }, {}),
    cancel: (O) => {
      for (let W = 0; W < Vs.length; W++) f[Vs[W]].cancel(O);
    },
    state: c,
    steps: f,
  };
}
const {
    schedule: xe,
    cancel: pn,
    state: ze,
    steps: ea,
  } = zh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ct, !0),
  Bh = z.createContext({ strict: !1 }),
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
  hr = {};
for (const n in vd) hr[n] = { isEnabled: (i) => vd[n].some((s) => !!i[s]) };
function Ry(n) {
  for (const i in n) hr[i] = { ...hr[i], ...n[i] };
}
const My = new Set([
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
function Us(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    My.has(n)
  );
}
let Uh = (n) => !Us(n);
function Ny(n) {
  n && (Uh = (i) => (i.startsWith("on") ? !Us(i) : n(i)));
}
try {
  Ny(require("@emotion/is-prop-valid").default);
} catch {}
function Ly(n, i, s) {
  const l = {};
  for (const c in n)
    (c === "values" && typeof n.values == "object") ||
      ((Uh(c) ||
        (s === !0 && Us(c)) ||
        (!i && !Us(c)) ||
        (n.draggable && c.startsWith("onDrag"))) &&
        (l[c] = n[c]));
  return l;
}
function Vy(n) {
  if (typeof Proxy > "u") return n;
  const i = new Map(),
    s = (...l) => n(...l);
  return new Proxy(s, {
    get: (l, c) => (c === "create" ? n : (i.has(c) || i.set(c, n(c)), i.get(c))),
  });
}
const qs = z.createContext({});
function di(n) {
  return typeof n == "string" || Array.isArray(n);
}
function Zs(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
const Oa = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Ia = ["initial", ...Oa];
function bs(n) {
  return Zs(n.animate) || Ia.some((i) => di(n[i]));
}
function Wh(n) {
  return !!(bs(n) || n.variants);
}
function jy(n, i) {
  if (bs(n)) {
    const { initial: s, animate: l } = n;
    return { initial: s === !1 || di(s) ? s : void 0, animate: di(l) ? l : void 0 };
  }
  return n.inherit !== !1 ? i : {};
}
function _y(n) {
  const { initial: i, animate: s } = jy(n, z.useContext(qs));
  return z.useMemo(() => ({ initial: i, animate: s }), [xd(i), xd(s)]);
}
function xd(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const Fy = Symbol.for("motionComponentSymbol");
function lr(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function Oy(n, i, s) {
  return z.useCallback(
    (l) => {
      (l && n.onMount && n.onMount(l),
        i && (l ? i.mount(l) : i.unmount()),
        s && (typeof s == "function" ? s(l) : lr(s) && (s.current = l)));
    },
    [i],
  );
}
const za = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Iy = "framerAppearId",
  $h = "data-" + za(Iy),
  { schedule: Ba } = zh(queueMicrotask, !1),
  Hh = z.createContext({});
function zy(n, i, s, l, c) {
  var d, f;
  const { visualElement: p } = z.useContext(qs),
    m = z.useContext(Bh),
    g = z.useContext(Ys),
    y = z.useContext(ja).reducedMotion,
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
  const P = x.current,
    A = z.useContext(Hh);
  P && !P.projection && c && (P.type === "html" || P.type === "svg") && By(x.current, s, c, A);
  const _ = z.useRef(!1);
  z.useInsertionEffect(() => {
    P && _.current && P.update(s, g);
  });
  const R = s[$h],
    V = z.useRef(
      !!R &&
        !(!((d = window.MotionHandoffIsComplete) === null || d === void 0) && d.call(window, R)) &&
        ((f = window.MotionHasOptimisedAnimation) === null || f === void 0
          ? void 0
          : f.call(window, R)),
    );
  return (
    Oh(() => {
      P &&
        ((_.current = !0),
        (window.MotionIsMounted = !0),
        P.updateFeatures(),
        Ba.render(P.render),
        V.current && P.animationState && P.animationState.animateChanges());
    }),
    z.useEffect(() => {
      P &&
        (!V.current && P.animationState && P.animationState.animateChanges(),
        V.current &&
          (queueMicrotask(() => {
            var O;
            (O = window.MotionHandoffMarkAsComplete) === null || O === void 0 || O.call(window, R);
          }),
          (V.current = !1)));
    }),
    P
  );
}
function By(n, i, s, l) {
  const { layoutId: c, layout: d, drag: f, dragConstraints: p, layoutScroll: m, layoutRoot: g } = i;
  ((n.projection = new s(n.latestValues, i["data-framer-portal-id"] ? void 0 : Kh(n.parent))),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (p && lr(p)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: l,
      layoutScroll: m,
      layoutRoot: g,
    }));
}
function Kh(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : Kh(n.parent);
}
function Uy({
  preloadedFeatures: n,
  createVisualElement: i,
  useRender: s,
  useVisualState: l,
  Component: c,
}) {
  var d, f;
  n && Ry(n);
  function p(g, y) {
    let x;
    const P = { ...z.useContext(ja), ...g, layoutId: Wy(g) },
      { isStatic: A } = P,
      _ = _y(g),
      R = l(g, A);
    if (!A && _a) {
      $y();
      const V = Hy(P);
      ((x = V.MeasureLayout), (_.visualElement = zy(c, R, P, i, V.ProjectionNode)));
    }
    return D.jsxs(qs.Provider, {
      value: _,
      children: [
        x && _.visualElement ? D.jsx(x, { visualElement: _.visualElement, ...P }) : null,
        s(c, g, Oy(R, _.visualElement, y), R, A, _.visualElement),
      ],
    });
  }
  p.displayName = `motion.${typeof c == "string" ? c : `create(${(f = (d = c.displayName) !== null && d !== void 0 ? d : c.name) !== null && f !== void 0 ? f : ""})`}`;
  const m = z.forwardRef(p);
  return ((m[Fy] = c), m);
}
function Wy({ layoutId: n }) {
  const i = z.useContext(La).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function $y(n, i) {
  z.useContext(Bh).strict;
}
function Hy(n) {
  const { drag: i, layout: s } = hr;
  if (!i && !s) return {};
  const l = { ...i, ...s };
  return {
    MeasureLayout:
      (i != null && i.isEnabled(n)) || (s != null && s.isEnabled(n)) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode,
  };
}
const Ky = [
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
function Ua(n) {
  return typeof n != "string" || n.includes("-") ? !1 : !!(Ky.indexOf(n) > -1 || /[A-Z]/u.test(n));
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
function Wa(n, i, s, l) {
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
const ha = (n) => Array.isArray(n),
  Gy = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
  Qy = (n) => (ha(n) ? n[n.length - 1] || 0 : n),
  Ke = (n) => !!(n && n.getVelocity);
function Os(n) {
  const i = Ke(n) ? n.get() : n;
  return Gy(i) ? i.toValue() : i;
}
function Xy({ scrapeMotionValuesFromProps: n, createRenderState: i, onUpdate: s }, l, c, d) {
  const f = { latestValues: Yy(l, c, d, n), renderState: i() };
  return (
    s && ((f.onMount = (p) => s({ props: l, current: p, ...f })), (f.onUpdate = (p) => s(p))),
    f
  );
}
const Gh = (n) => (i, s) => {
  const l = z.useContext(qs),
    c = z.useContext(Ys),
    d = () => Xy(n, i, l, c);
  return s ? d() : Va(d);
};
function Yy(n, i, s, l) {
  const c = {},
    d = l(n, {});
  for (const P in d) c[P] = Os(d[P]);
  let { initial: f, animate: p } = n;
  const m = bs(n),
    g = Wh(n);
  i &&
    g &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let y = s ? s.initial === !1 : !1;
  y = y || f === !1;
  const x = y ? p : f;
  if (x && typeof x != "boolean" && !Zs(x)) {
    const P = Array.isArray(x) ? x : [x];
    for (let A = 0; A < P.length; A++) {
      const _ = Wa(n, P[A]);
      if (_) {
        const { transitionEnd: R, transition: V, ...O } = _;
        for (const W in O) {
          let K = O[W];
          if (Array.isArray(K)) {
            const Y = y ? K.length - 1 : 0;
            K = K[Y];
          }
          K !== null && (c[W] = K);
        }
        for (const W in R) c[W] = R[W];
      }
    }
  }
  return c;
}
const mr = [
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
  _n = new Set(mr),
  Qh = (n) => (i) => typeof i == "string" && i.startsWith(n),
  Xh = Qh("--"),
  qy = Qh("var(--"),
  $a = (n) => (qy(n) ? Zy.test(n.split("/*")[0].trim()) : !1),
  Zy = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Yh = (n, i) => (i && typeof n == "number" ? i.transform(n) : n),
  Gt = (n, i, s) => (s > i ? i : s < n ? n : s),
  gr = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  hi = { ...gr, transform: (n) => Gt(0, 1, n) },
  js = { ...gr, default: 1 },
  yi = (n) => ({
    test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  hn = yi("deg"),
  jt = yi("%"),
  te = yi("px"),
  by = yi("vh"),
  Jy = yi("vw"),
  Sd = { ...jt, parse: (n) => jt.parse(n) / 100, transform: (n) => jt.transform(n * 100) },
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
    rotate: hn,
    rotateX: hn,
    rotateY: hn,
    rotateZ: hn,
    scale: js,
    scaleX: js,
    scaleY: js,
    scaleZ: js,
    skew: hn,
    skewX: hn,
    skewY: hn,
    distance: te,
    translateX: te,
    translateY: te,
    translateZ: te,
    x: te,
    y: te,
    z: te,
    perspective: te,
    transformPerspective: te,
    opacity: hi,
    originX: Sd,
    originY: Sd,
    originZ: te,
  },
  Pd = { ...gr, transform: Math.round },
  Ha = { ...ev, ...tv, zIndex: Pd, size: te, fillOpacity: hi, strokeOpacity: hi, numOctaves: Pd },
  nv = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  rv = mr.length;
function iv(n, i, s) {
  let l = "",
    c = !0;
  for (let d = 0; d < rv; d++) {
    const f = mr[d],
      p = n[f];
    if (p === void 0) continue;
    let m = !0;
    if (
      (typeof p == "number"
        ? (m = p === (f.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(p) === 0),
      !m || s)
    ) {
      const g = Yh(p, Ha[f]);
      if (!m) {
        c = !1;
        const y = nv[f] || f;
        l += `${y}(${g}) `;
      }
      s && (i[f] = g);
    }
  }
  return ((l = l.trim()), s ? (l = s(i, c ? "" : l)) : c && (l = "none"), l);
}
function Ka(n, i, s) {
  const { style: l, vars: c, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const g = i[m];
    if (_n.has(m)) {
      f = !0;
      continue;
    } else if (Xh(m)) {
      c[m] = g;
      continue;
    } else {
      const y = Yh(g, Ha[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = y)) : (l[m] = y);
    }
  }
  if (
    (i.transform ||
      (f || s ? (l.transform = iv(i, n.transform, s)) : l.transform && (l.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: g = "50%", originZ: y = 0 } = d;
    l.transformOrigin = `${m} ${g} ${y}`;
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
function kd(n, i, s) {
  return typeof n == "string" ? n : te.transform(i + s * n);
}
function av(n, i, s) {
  const l = kd(i, n.x, n.width),
    c = kd(s, n.y, n.height);
  return `${l} ${c}`;
}
function Ga(
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
  if ((Ka(n, g, x), y)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: P, style: A, dimensions: _ } = n;
  (P.transform && (_ && (A.transform = P.transform), delete P.transform),
    _ &&
      (c !== void 0 || d !== void 0 || A.transform) &&
      (A.transformOrigin = av(_, c !== void 0 ? c : 0.5, d !== void 0 ? d : 0.5)),
    i !== void 0 && (P.x = i),
    s !== void 0 && (P.y = s),
    l !== void 0 && (P.scale = l),
    f !== void 0 && lv(P, f, p, m, !1));
}
const Qa = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  qh = () => ({ ...Qa(), attrs: {} }),
  Xa = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function Zh(n, { style: i, vars: s }, l, c) {
  Object.assign(n.style, i, c && c.getProjectionStyles(l));
  for (const d in s) n.style.setProperty(d, s[d]);
}
const bh = new Set([
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
function Jh(n, i, s, l) {
  Zh(n, i, void 0, l);
  for (const c in i.attrs) n.setAttribute(bh.has(c) ? c : za(c), i.attrs[c]);
}
const Ws = {};
function uv(n) {
  Object.assign(Ws, n);
}
function ep(n, { layout: i, layoutId: s }) {
  return (
    _n.has(n) || n.startsWith("origin") || ((i || s !== void 0) && (!!Ws[n] || n === "opacity"))
  );
}
function Ya(n, i, s) {
  var l;
  const { style: c } = n,
    d = {};
  for (const f in c)
    (Ke(c[f]) ||
      (i.style && Ke(i.style[f])) ||
      ep(f, n) ||
      ((l = s == null ? void 0 : s.getValue(f)) === null || l === void 0 ? void 0 : l.liveStyle) !==
        void 0) &&
      (d[f] = c[f]);
  return d;
}
function tp(n, i, s) {
  const l = Ya(n, i, s);
  for (const c in n)
    if (Ke(n[c]) || Ke(i[c])) {
      const d = mr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
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
    useVisualState: Gh({
      scrapeMotionValuesFromProps: tp,
      createRenderState: qh,
      onUpdate: ({ props: n, prevProps: i, current: s, renderState: l, latestValues: c }) => {
        if (!s) return;
        let d = !!n.drag;
        if (!d) {
          for (const p in c)
            if (_n.has(p)) {
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
                (Ga(l, c, Xa(s.tagName), n.transformTemplate), Jh(s, l));
              }));
          });
      },
    }),
  },
  dv = { useVisualState: Gh({ scrapeMotionValuesFromProps: Ya, createRenderState: Qa }) };
function np(n, i, s) {
  for (const l in i) !Ke(i[l]) && !ep(l, s) && (n[l] = i[l]);
}
function hv({ transformTemplate: n }, i) {
  return z.useMemo(() => {
    const s = Qa();
    return (Ka(s, i, n), Object.assign({}, s.vars, s.style));
  }, [i]);
}
function pv(n, i) {
  const s = n.style || {},
    l = {};
  return (np(l, s, n), Object.assign(l, hv(n, i)), l);
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
function gv(n, i, s, l) {
  const c = z.useMemo(() => {
    const d = qh();
    return (Ga(d, i, Xa(l), n.transformTemplate), { ...d.attrs, style: { ...d.style } });
  }, [i]);
  if (n.style) {
    const d = {};
    (np(d, n.style, n), (c.style = { ...d, ...c.style }));
  }
  return c;
}
function yv(n = !1) {
  return (s, l, c, { latestValues: d }, f) => {
    const m = (Ua(s) ? gv : mv)(l, d, f, s),
      g = Ly(l, typeof s == "string", n),
      y = s !== z.Fragment ? { ...g, ...m, ref: c } : {},
      { children: x } = l,
      P = z.useMemo(() => (Ke(x) ? x.get() : x), [x]);
    return z.createElement(s, { ...y, children: P });
  };
}
function vv(n, i) {
  return function (l, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Ua(l) ? fv : dv),
      preloadedFeatures: n,
      useRender: yv(c),
      createVisualElement: i,
      Component: l,
    };
    return Uy(f);
  };
}
function rp(n, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== n.length) return !1;
  for (let l = 0; l < s; l++) if (i[l] !== n[l]) return !1;
  return !0;
}
function Js(n, i, s) {
  const l = n.getProps();
  return Wa(l, i, s !== void 0 ? s : l.custom, n);
}
const xv = Fa(() => window.ScrollTimeline !== void 0);
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
function qa(n, i) {
  return n ? n[i] || n.default || n : void 0;
}
const pa = 2e4;
function ip(n) {
  let i = 0;
  const s = 50;
  let l = n.next(i);
  for (; !l.done && i < pa;) ((i += s), (l = n.next(i)));
  return i >= pa ? 1 / 0 : i;
}
function Za(n) {
  return typeof n == "function";
}
function Cd(n, i) {
  ((n.timeline = i), (n.onfinish = null));
}
const ba = (n) => Array.isArray(n) && typeof n[0] == "number",
  Pv = { linearEasing: void 0 };
function kv(n, i) {
  const s = Fa(n);
  return () => {
    var l;
    return (l = Pv[i]) !== null && l !== void 0 ? l : s();
  };
}
const $s = kv(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  sp = (n, i, s = 10) => {
    let l = "";
    const c = Math.max(Math.round(i / s), 2);
    for (let d = 0; d < c; d++) l += n(dr(0, c - 1, d)) + ", ";
    return `linear(${l.substring(0, l.length - 2)})`;
  };
function op(n) {
  return !!(
    (typeof n == "function" && $s()) ||
    !n ||
    (typeof n == "string" && (n in ma || $s())) ||
    ba(n) ||
    (Array.isArray(n) && n.every(op))
  );
}
const si = ([n, i, s, l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`,
  ma = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: si([0, 0.65, 0.55, 1]),
    circOut: si([0.55, 0, 1, 0.45]),
    backIn: si([0.31, 0.01, 0.66, -0.59]),
    backOut: si([0.33, 1.53, 0.69, 0.99]),
  };
function lp(n, i) {
  if (n)
    return typeof n == "function" && $s()
      ? sp(n, i)
      : ba(n)
        ? si(n)
        : Array.isArray(n)
          ? n.map((s) => lp(s, i) || ma.easeOut)
          : ma[n];
}
const Dt = { x: !1, y: !1 };
function ap() {
  return Dt.x || Dt.y;
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
function up(n, i) {
  const s = Tv(n),
    l = new AbortController(),
    c = { passive: !0, ...i, signal: l.signal };
  return [s, c, () => l.abort()];
}
function Ed(n) {
  return (i) => {
    i.pointerType === "touch" || ap() || n(i);
  };
}
function Cv(n, i, s = {}) {
  const [l, c, d] = up(n, s),
    f = Ed((p) => {
      const { target: m } = p,
        g = i(p);
      if (typeof g != "function" || !m) return;
      const y = Ed((x) => {
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
const cp = (n, i) => (i ? (n === i ? !0 : cp(n, i.parentElement)) : !1),
  Ja = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  Ev = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Av(n) {
  return Ev.has(n.tagName) || n.tabIndex !== -1;
}
const oi = new WeakSet();
function Ad(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function ta(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const Dv = (n, i) => {
  const s = n.currentTarget;
  if (!s) return;
  const l = Ad(() => {
    if (oi.has(s)) return;
    ta(s, "down");
    const c = Ad(() => {
        ta(s, "up");
      }),
      d = () => ta(s, "cancel");
    (s.addEventListener("keyup", c, i), s.addEventListener("blur", d, i));
  });
  (s.addEventListener("keydown", l, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", l), i));
};
function Dd(n) {
  return Ja(n) && !ap();
}
function Rv(n, i, s = {}) {
  const [l, c, d] = up(n, s),
    f = (p) => {
      const m = p.currentTarget;
      if (!Dd(p) || oi.has(m)) return;
      oi.add(m);
      const g = i(p),
        y = (A, _) => {
          (window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", P),
            !(!Dd(A) || !oi.has(m)) &&
              (oi.delete(m), typeof g == "function" && g(A, { success: _ })));
        },
        x = (A) => {
          y(A, s.useGlobalTarget || cp(m, A.target));
        },
        P = (A) => {
          y(A, !1);
        };
      (window.addEventListener("pointerup", x, c), window.addEventListener("pointercancel", P, c));
    };
  return (
    l.forEach((p) => {
      (!Av(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0),
        (s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        p.addEventListener("focus", (g) => Dv(g, c), c));
    }),
    d
  );
}
function Mv(n) {
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
const fp = new Set(["width", "height", "top", "left", "right", "bottom", ...mr]);
let Is;
function Nv() {
  Is = void 0;
}
const _t = {
  now: () => (
    Is === void 0 &&
      _t.set(ze.isProcessing || Ey.useManualTiming ? ze.timestamp : performance.now()),
    Is
  ),
  set: (n) => {
    ((Is = n), queueMicrotask(Nv));
  },
};
function eu(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function tu(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
class nu {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (eu(this.subscriptions, i), () => tu(this.subscriptions, i));
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
function dp(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const Rd = 30,
  Lv = (n) => !isNaN(parseFloat(n));
class Vv {
  constructor(i, s = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (l, c = !0) => {
        const d = _t.now();
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
      (this.updatedAt = _t.now()),
      this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = Lv(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new nu());
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
    const i = _t.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Rd)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Rd);
    return dp(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
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
function pi(n, i) {
  return new Vv(n, i);
}
function jv(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, pi(s));
}
function _v(n, i) {
  const s = Js(n, i);
  let { transitionEnd: l = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...l };
  for (const f in d) {
    const p = Qy(d[f]);
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
function hp(n) {
  return n.props[$h];
}
const pp = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  Ov = 1e-7,
  Iv = 12;
function zv(n, i, s, l, c) {
  let d,
    f,
    p = 0;
  do ((f = i + (s - i) / 2), (d = pp(f, l, c) - n), d > 0 ? (s = f) : (i = f));
  while (Math.abs(d) > Ov && ++p < Iv);
  return f;
}
function vi(n, i, s, l) {
  if (n === i && s === l) return ct;
  const c = (d) => zv(d, 0, 1, n, s);
  return (d) => (d === 0 || d === 1 ? d : pp(c(d), i, l));
}
const mp = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  gp = (n) => (i) => 1 - n(1 - i),
  yp = vi(0.33, 1.53, 0.69, 0.99),
  ru = gp(yp),
  vp = mp(ru),
  xp = (n) => ((n *= 2) < 1 ? 0.5 * ru(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))),
  iu = (n) => 1 - Math.sin(Math.acos(n)),
  wp = gp(iu),
  Sp = mp(iu),
  Pp = (n) => /^0[^.\s]+$/u.test(n);
function Bv(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Pp(n) : !0;
}
const ai = (n) => Math.round(n * 1e5) / 1e5,
  su = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Uv(n) {
  return n == null;
}
const Wv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ou = (n, i) => (s) =>
    !!(
      (typeof s == "string" && Wv.test(s) && s.startsWith(n)) ||
      (i && !Uv(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  kp = (n, i, s) => (l) => {
    if (typeof l != "string") return l;
    const [c, d, f, p] = l.match(su);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  $v = (n) => Gt(0, 255, n),
  na = { ...gr, transform: (n) => Math.round($v(n)) },
  Vn = {
    test: ou("rgb", "red"),
    parse: kp("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: s, alpha: l = 1 }) =>
      "rgba(" +
      na.transform(n) +
      ", " +
      na.transform(i) +
      ", " +
      na.transform(s) +
      ", " +
      ai(hi.transform(l)) +
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
const ya = { test: ou("#"), parse: Hv, transform: Vn.transform },
  ar = {
    test: ou("hsl", "hue"),
    parse: kp("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: s, alpha: l = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      jt.transform(ai(i)) +
      ", " +
      jt.transform(ai(s)) +
      ", " +
      ai(hi.transform(l)) +
      ")",
  },
  He = {
    test: (n) => Vn.test(n) || ya.test(n) || ar.test(n),
    parse: (n) => (Vn.test(n) ? Vn.parse(n) : ar.test(n) ? ar.parse(n) : ya.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? Vn.transform(n) : ar.transform(n),
  },
  Kv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Gv(n) {
  var i, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(su)) === null || i === void 0 ? void 0 : i.length) || 0) +
      (((s = n.match(Kv)) === null || s === void 0 ? void 0 : s.length) || 0) >
      0
  );
}
const Tp = "number",
  Cp = "color",
  Qv = "var",
  Xv = "var(",
  Md = "${}",
  Yv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function mi(n) {
  const i = n.toString(),
    s = [],
    l = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      Yv,
      (m) => (
        He.test(m)
          ? (l.color.push(d), c.push(Cp), s.push(He.parse(m)))
          : m.startsWith(Xv)
            ? (l.var.push(d), c.push(Qv), s.push(m))
            : (l.number.push(d), c.push(Tp), s.push(parseFloat(m))),
        ++d,
        Md
      ),
    )
    .split(Md);
  return { values: s, split: p, indexes: l, types: c };
}
function Ep(n) {
  return mi(n).values;
}
function Ap(n) {
  const { split: i, types: s } = mi(n),
    l = i.length;
  return (c) => {
    let d = "";
    for (let f = 0; f < l; f++)
      if (((d += i[f]), c[f] !== void 0)) {
        const p = s[f];
        p === Tp ? (d += ai(c[f])) : p === Cp ? (d += He.transform(c[f])) : (d += c[f]);
      }
    return d;
  };
}
const qv = (n) => (typeof n == "number" ? 0 : n);
function Zv(n) {
  const i = Ep(n);
  return Ap(n)(i.map(qv));
}
const mn = { test: Gv, parse: Ep, createTransformer: Ap, getAnimatableNone: Zv },
  bv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Jv(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [l] = s.match(su) || [];
  if (!l) return n;
  const c = s.replace(l, "");
  let d = bv.has(i) ? 1 : 0;
  return (l !== s && (d *= 100), i + "(" + d + c + ")");
}
const e0 = /\b([a-z-]*)\(.*?\)/gu,
  va = {
    ...mn,
    getAnimatableNone: (n) => {
      const i = n.match(e0);
      return i ? i.map(Jv).join(" ") : n;
    },
  },
  t0 = {
    ...Ha,
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
    filter: va,
    WebkitFilter: va,
  },
  lu = (n) => t0[n];
function Dp(n, i) {
  let s = lu(n);
  return (s !== va && (s = mn), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0);
}
const n0 = new Set(["auto", "none", "0"]);
function r0(n, i, s) {
  let l = 0,
    c;
  for (; l < n.length && !c;) {
    const d = n[l];
    (typeof d == "string" && !n0.has(d) && mi(d).values.length && (c = n[l]), l++);
  }
  if (c && s) for (const d of i) n[d] = Dp(s, c);
}
const Nd = (n) => n === gr || n === te,
  Ld = (n, i) => parseFloat(n.split(", ")[i]),
  Vd =
    (n, i) =>
    (s, { transform: l }) => {
      if (l === "none" || !l) return 0;
      const c = l.match(/^matrix3d\((.+)\)$/u);
      if (c) return Ld(c[1], i);
      {
        const d = l.match(/^matrix\((.+)\)$/u);
        return d ? Ld(d[1], n) : 0;
      }
    },
  i0 = new Set(["x", "y", "z"]),
  s0 = mr.filter((n) => !i0.has(n));
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
const pr = {
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
pr.translateX = pr.x;
pr.translateY = pr.y;
const jn = new Set();
let xa = !1,
  wa = !1;
function Rp() {
  if (wa) {
    const n = Array.from(jn).filter((l) => l.needsMeasurement),
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
  ((wa = !1), (xa = !1), jn.forEach((n) => n.complete()), jn.clear());
}
function Mp() {
  jn.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (wa = !0));
  });
}
function l0() {
  (Mp(), Rp());
}
class au {
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
        ? (jn.add(this), xa || ((xa = !0), xe.read(Mp), xe.resolveKeyframes(Rp)))
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
      jn.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), jn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Np = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  a0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function u0(n) {
  const i = a0.exec(n);
  if (!i) return [,];
  const [, s, l, c] = i;
  return [`--${s ?? l}`, c];
}
function Lp(n, i, s = 1) {
  const [l, c] = u0(n);
  if (!l) return;
  const d = window.getComputedStyle(i).getPropertyValue(l);
  if (d) {
    const f = d.trim();
    return Np(f) ? parseFloat(f) : f;
  }
  return $a(c) ? Lp(c, i, s + 1) : c;
}
const Vp = (n) => (i) => i.test(n),
  c0 = { test: (n) => n === "auto", parse: (n) => n },
  jp = [gr, te, jt, hn, Jy, by, c0],
  jd = (n) => jp.find(Vp(n));
class _p extends au {
  constructor(i, s, l, c, d) {
    super(i, s, l, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: l } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let m = 0; m < i.length; m++) {
      let g = i[m];
      if (typeof g == "string" && ((g = g.trim()), $a(g))) {
        const y = Lp(g, s.current);
        (y !== void 0 && (i[m] = y), m === i.length - 1 && (this.finalKeyframe = g));
      }
    }
    if ((this.resolveNoneKeyframes(), !fp.has(l) || i.length !== 2)) return;
    const [c, d] = i,
      f = jd(c),
      p = jd(d);
    if (f !== p)
      if (Nd(f) && Nd(p))
        for (let m = 0; m < i.length; m++) {
          const g = i[m];
          typeof g == "string" && (i[m] = parseFloat(g));
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
      (this.measuredOrigin = pr[l](i.measureViewportBox(), window.getComputedStyle(i.current))),
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
    ((c[f] = pr[l](s.measureViewportBox(), window.getComputedStyle(s.current))),
      p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
      !((i = this.removedTransforms) === null || i === void 0) &&
        i.length &&
        this.removedTransforms.forEach(([m, g]) => {
          s.getValue(m).set(g);
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
        (typeof n == "string" && (mn.test(n) || n === "0") && !n.startsWith("url("))
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
function eo(n, { repeat: i, repeatType: s = "loop" }, l) {
  const c = n.filter(h0),
    d = i && s !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return !d || l === void 0 ? c[d] : l;
}
const p0 = 40;
class Fp {
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
      (this.createdAt = _t.now()),
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
    ((this.resolvedAt = _t.now()), (this.hasAttemptedResolve = !0));
    const {
      name: l,
      type: c,
      velocity: d,
      delay: f,
      onComplete: p,
      onUpdate: m,
      isGenerator: g,
    } = this.options;
    if (!g && !d0(i, l, c, d))
      if (f) this.options.duration = 0;
      else {
        (m && m(eo(i, this.options, s)), p && p(), this.resolveFinishedPromise());
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
function ra(n, i, s) {
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
    ((c = ra(m, p, n + 1 / 3)), (d = ra(m, p, n)), (f = ra(m, p, n - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: l,
  };
}
function Hs(n, i) {
  return (s) => (s > 0 ? i : n);
}
const ia = (n, i, s) => {
    const l = n * n,
      c = s * (i * i - l) + l;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  g0 = [ya, Vn, ar],
  y0 = (n) => g0.find((i) => i.test(n));
function Fd(n) {
  const i = y0(n);
  if (!i) return !1;
  let s = i.parse(n);
  return (i === ar && (s = m0(s)), s);
}
const Od = (n, i) => {
    const s = Fd(n),
      l = Fd(i);
    if (!s || !l) return Hs(n, i);
    const c = { ...s };
    return (d) => (
      (c.red = ia(s.red, l.red, d)),
      (c.green = ia(s.green, l.green, d)),
      (c.blue = ia(s.blue, l.blue, d)),
      (c.alpha = Te(s.alpha, l.alpha, d)),
      Vn.transform(c)
    );
  },
  v0 = (n, i) => (s) => i(n(s)),
  xi = (...n) => n.reduce(v0),
  Sa = new Set(["none", "hidden"]);
function x0(n, i) {
  return Sa.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n);
}
function w0(n, i) {
  return (s) => Te(n, i, s);
}
function uu(n) {
  return typeof n == "number"
    ? w0
    : typeof n == "string"
      ? $a(n)
        ? Hs
        : He.test(n)
          ? Od
          : k0
      : Array.isArray(n)
        ? Op
        : typeof n == "object"
          ? He.test(n)
            ? Od
            : S0
          : Hs;
}
function Op(n, i) {
  const s = [...n],
    l = s.length,
    c = n.map((d, f) => uu(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < l; f++) s[f] = c[f](d);
    return s;
  };
}
function S0(n, i) {
  const s = { ...n, ...i },
    l = {};
  for (const c in s) n[c] !== void 0 && i[c] !== void 0 && (l[c] = uu(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in l) s[d] = l[d](c);
    return s;
  };
}
function P0(n, i) {
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
const k0 = (n, i) => {
  const s = mn.createTransformer(i),
    l = mi(n),
    c = mi(i);
  return l.indexes.var.length === c.indexes.var.length &&
    l.indexes.color.length === c.indexes.color.length &&
    l.indexes.number.length >= c.indexes.number.length
    ? (Sa.has(n) && !c.values.length) || (Sa.has(i) && !l.values.length)
      ? x0(n, i)
      : xi(Op(P0(l, c), c.values), s)
    : Hs(n, i);
};
function Ip(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number"
    ? Te(n, i, s)
    : uu(n)(n, i);
}
const T0 = 5;
function zp(n, i, s) {
  const l = Math.max(i - T0, 0);
  return dp(s - n(l), i - l);
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
  sa = 0.001;
function C0({
  duration: n = Ae.duration,
  bounce: i = Ae.bounce,
  velocity: s = Ae.velocity,
  mass: l = Ae.mass,
}) {
  let c,
    d,
    f = 1 - i;
  ((f = Gt(Ae.minDamping, Ae.maxDamping, f)),
    (n = Gt(Ae.minDuration, Ae.maxDuration, Kt(n))),
    f < 1
      ? ((c = (g) => {
          const y = g * f,
            x = y * n,
            P = y - s,
            A = Pa(g, f),
            _ = Math.exp(-x);
          return sa - (P / A) * _;
        }),
        (d = (g) => {
          const x = g * f * n,
            P = x * s + s,
            A = Math.pow(f, 2) * Math.pow(g, 2) * n,
            _ = Math.exp(-x),
            R = Pa(Math.pow(g, 2), f);
          return ((-c(g) + sa > 0 ? -1 : 1) * ((P - A) * _)) / R;
        }))
      : ((c = (g) => {
          const y = Math.exp(-g * n),
            x = (g - s) * n + 1;
          return -sa + y * x;
        }),
        (d = (g) => {
          const y = Math.exp(-g * n),
            x = (s - g) * (n * n);
          return y * x;
        })));
  const p = 5 / n,
    m = A0(c, d, p);
  if (((n = Ht(n)), isNaN(m))) return { stiffness: Ae.stiffness, damping: Ae.damping, duration: n };
  {
    const g = Math.pow(m, 2) * l;
    return { stiffness: g, damping: f * 2 * Math.sqrt(l * g), duration: n };
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
const D0 = ["duration", "bounce"],
  R0 = ["stiffness", "damping", "mass"];
function Id(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function M0(n) {
  let i = {
    velocity: Ae.velocity,
    stiffness: Ae.stiffness,
    damping: Ae.damping,
    mass: Ae.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Id(n, R0) && Id(n, D0))
    if (n.visualDuration) {
      const s = n.visualDuration,
        l = (2 * Math.PI) / (s * 1.2),
        c = l * l,
        d = 2 * Gt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Ae.mass, stiffness: c, damping: d };
    } else {
      const s = C0(n);
      ((i = { ...i, ...s, mass: Ae.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function Bp(n = Ae.visualDuration, i = Ae.bounce) {
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
      velocity: P,
      isResolvedFromDuration: A,
    } = M0({ ...s, velocity: -Kt(s.velocity || 0) }),
    _ = P || 0,
    R = g / (2 * Math.sqrt(m * y)),
    V = f - d,
    O = Kt(Math.sqrt(m / y)),
    W = Math.abs(V) < 5;
  (l || (l = W ? Ae.restSpeed.granular : Ae.restSpeed.default),
    c || (c = W ? Ae.restDelta.granular : Ae.restDelta.default));
  let K;
  if (R < 1) {
    const B = Pa(O, R);
    K = (ee) => {
      const le = Math.exp(-R * O * ee);
      return f - le * (((_ + R * O * V) / B) * Math.sin(B * ee) + V * Math.cos(B * ee));
    };
  } else if (R === 1) K = (B) => f - Math.exp(-O * B) * (V + (_ + O * V) * B);
  else {
    const B = O * Math.sqrt(R * R - 1);
    K = (ee) => {
      const le = Math.exp(-R * O * ee),
        q = Math.min(B * ee, 300);
      return f - (le * ((_ + R * O * V) * Math.sinh(q) + B * V * Math.cosh(q))) / B;
    };
  }
  const Y = {
    calculatedDuration: (A && x) || null,
    next: (B) => {
      const ee = K(B);
      if (A) p.done = B >= x;
      else {
        let le = 0;
        R < 1 && (le = B === 0 ? Ht(_) : zp(K, B, ee));
        const q = Math.abs(le) <= l,
          ge = Math.abs(f - ee) <= c;
        p.done = q && ge;
      }
      return ((p.value = p.done ? f : ee), p);
    },
    toString: () => {
      const B = Math.min(ip(Y), pa),
        ee = sp((le) => Y.next(B * le).value, B, 30);
      return B + "ms " + ee;
    },
  };
  return Y;
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
  restDelta: g = 0.5,
  restSpeed: y,
}) {
  const x = n[0],
    P = { done: !1, value: x },
    A = (q) => (p !== void 0 && q < p) || (m !== void 0 && q > m),
    _ = (q) => (p === void 0 ? m : m === void 0 || Math.abs(p - q) < Math.abs(m - q) ? p : m);
  let R = s * i;
  const V = x + R,
    O = f === void 0 ? V : f(V);
  O !== V && (R = O - x);
  const W = (q) => -R * Math.exp(-q / l),
    K = (q) => O + W(q),
    Y = (q) => {
      const ge = W(q),
        Ce = K(q);
      ((P.done = Math.abs(ge) <= g), (P.value = P.done ? O : Ce));
    };
  let B, ee;
  const le = (q) => {
    A(P.value) &&
      ((B = q),
      (ee = Bp({
        keyframes: [P.value, _(P.value)],
        velocity: zp(K, q, P.value),
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
      next: (q) => {
        let ge = !1;
        return (
          !ee && B === void 0 && ((ge = !0), Y(q), le(q)),
          B !== void 0 && q >= B ? ee.next(q - B) : (!ge && Y(q), P)
        );
      },
    }
  );
}
const N0 = vi(0.42, 0, 1, 1),
  L0 = vi(0, 0, 0.58, 1),
  Up = vi(0.42, 0, 0.58, 1),
  V0 = (n) => Array.isArray(n) && typeof n[0] != "number",
  j0 = {
    linear: ct,
    easeIn: N0,
    easeInOut: Up,
    easeOut: L0,
    circIn: iu,
    circInOut: Sp,
    circOut: wp,
    backIn: ru,
    backInOut: vp,
    backOut: yp,
    anticipate: xp,
  },
  Bd = (n) => {
    if (ba(n)) {
      Ih(n.length === 4);
      const [i, s, l, c] = n;
      return vi(i, s, l, c);
    } else if (typeof n == "string") return j0[n];
    return n;
  };
function _0(n, i, s) {
  const l = [],
    c = s || Ip,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = c(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || ct : i;
      p = xi(m, p);
    }
    l.push(p);
  }
  return l;
}
function F0(n, i, { clamp: s = !0, ease: l, mixer: c } = {}) {
  const d = n.length;
  if ((Ih(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = _0(i, l, c),
    m = p.length,
    g = (y) => {
      if (f && y < n[0]) return i[0];
      let x = 0;
      if (m > 1) for (; x < n.length - 2 && !(y < n[x + 1]); x++);
      const P = dr(n[x], n[x + 1], y);
      return p[x](P);
    };
  return s ? (y) => g(Gt(n[0], n[d - 1], y)) : g;
}
function O0(n, i) {
  const s = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const c = dr(0, i, l);
    n.push(Te(s, 1, c));
  }
}
function I0(n) {
  const i = [0];
  return (O0(i, n.length - 1), i);
}
function z0(n, i) {
  return n.map((s) => s * i);
}
function B0(n, i) {
  return n.map(() => i || Up).splice(0, n.length - 1);
}
function Ks({ duration: n = 300, keyframes: i, times: s, ease: l = "easeInOut" }) {
  const c = V0(l) ? l.map(Bd) : Bd(l),
    d = { done: !1, value: i[0] },
    f = z0(s && s.length === i.length ? s : I0(i), n),
    p = F0(f, i, { ease: Array.isArray(c) ? c : B0(i, c) });
  return { calculatedDuration: n, next: (m) => ((d.value = p(m)), (d.done = m >= n), d) };
}
const U0 = (n) => {
    const i = ({ timestamp: s }) => n(s);
    return {
      start: () => xe.update(i, !0),
      stop: () => pn(i),
      now: () => (ze.isProcessing ? ze.timestamp : _t.now()),
    };
  },
  W0 = { decay: zd, inertia: zd, tween: Ks, keyframes: Ks, spring: Bp },
  $0 = (n) => n / 100;
class cu extends Fp {
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
      f = (c == null ? void 0 : c.KeyframeResolver) || au,
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
      p = Za(s) ? s : W0[s] || Ks;
    let m, g;
    p !== Ks && typeof i[0] != "number" && ((m = xi($0, Ip(i[0], i[1]))), (i = [0, 100]));
    const y = p({ ...this.options, keyframes: i });
    (d === "mirror" && (g = p({ ...this.options, keyframes: [...i].reverse(), velocity: -f })),
      y.calculatedDuration === null && (y.calculatedDuration = ip(y)));
    const { calculatedDuration: x } = y,
      P = x + c,
      A = P * (l + 1) - c;
    return {
      generator: y,
      mirroredGenerator: g,
      mapPercentToKeyframes: m,
      calculatedDuration: x,
      resolvedDuration: P,
      totalDuration: A,
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
      const { keyframes: q } = this.options;
      return { done: !0, value: q[q.length - 1] };
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
    const { delay: P, repeat: A, repeatType: _, repeatDelay: R, onUpdate: V } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 && (this.startTime = Math.min(i - y / this.speed, this.startTime)),
      s
        ? (this.currentTime = i)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(i - this.startTime) * this.speed));
    const O = this.currentTime - P * (this.speed >= 0 ? 1 : -1),
      W = this.speed >= 0 ? O < 0 : O > y;
    ((this.currentTime = Math.max(O, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = y));
    let K = this.currentTime,
      Y = d;
    if (A) {
      const q = Math.min(this.currentTime, y) / x;
      let ge = Math.floor(q),
        Ce = q % 1;
      (!Ce && q >= 1 && (Ce = 1),
        Ce === 1 && ge--,
        (ge = Math.min(ge, A + 1)),
        !!(ge % 2) &&
          (_ === "reverse" ? ((Ce = 1 - Ce), R && (Ce -= R / x)) : _ === "mirror" && (Y = f)),
        (K = Gt(0, 1, Ce) * x));
    }
    const B = W ? { done: !1, value: m[0] } : Y.next(K);
    p && (B.value = p(B.value));
    let { done: ee } = B;
    !W && g !== null && (ee = this.speed >= 0 ? this.currentTime >= y : this.currentTime <= 0);
    const le =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ee));
    return (
      le && c !== void 0 && (B.value = eo(m, this.options, c)),
      V && V(B.value),
      le && this.finish(),
      B
    );
  }
  get duration() {
    const { resolved: i } = this;
    return i ? Kt(i.calculatedDuration) : 0;
  }
  get time() {
    return Kt(this.currentTime);
  }
  set time(i) {
    ((i = Ht(i)),
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
    ((this.playbackSpeed = i), s && (this.time = Kt(this.currentTime)));
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
  const g = { [i]: s };
  m && (g.offset = m);
  const y = lp(p, c);
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
const G0 = Fa(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Gs = 10,
  Q0 = 2e4;
function X0(n) {
  return Za(n.type) || n.type === "spring" || !op(n.ease);
}
function Y0(n, i) {
  const s = new cu({ ...i, keyframes: n, repeat: 0, delay: 0, isGenerator: !0 });
  let l = { done: !1, value: n[0] };
  const c = [];
  let d = 0;
  for (; !l.done && d < Q0;) ((l = s.sample(d)), c.push(l.value), (d += Gs));
  return { times: void 0, keyframes: c, duration: d - Gs, ease: "linear" };
}
const Wp = { anticipate: xp, backInOut: vp, circInOut: Sp };
function q0(n) {
  return n in Wp;
}
class Ud extends Fp {
  constructor(i) {
    super(i);
    const { name: s, motionValue: l, element: c, keyframes: d } = this.options;
    ((this.resolver = new _p(d, (f, p) => this.onKeyframesResolved(f, p), s, l, c)),
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
    if ((typeof d == "string" && $s() && q0(d) && (d = Wp[d]), X0(this.options))) {
      const { onComplete: x, onUpdate: P, motionValue: A, element: _, ...R } = this.options,
        V = Y0(i, R);
      ((i = V.keyframes),
        i.length === 1 && (i[1] = i[0]),
        (l = V.duration),
        (c = V.times),
        (d = V.ease),
        (f = "keyframes"));
    }
    const y = K0(p.owner.current, m, i, { ...this.options, duration: l, times: c, ease: d });
    return (
      (y.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Cd(y, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (y.onfinish = () => {
            const { onComplete: x } = this.options;
            (p.set(eo(i, this.options, s)), x && x(), this.cancel(), this.resolveFinishedPromise());
          }),
      { animation: y, duration: l, times: c, type: f, ease: d, keyframes: i }
    );
  }
  get duration() {
    const { resolved: i } = this;
    if (!i) return 0;
    const { duration: s } = i;
    return Kt(s);
  }
  get time() {
    const { resolved: i } = this;
    if (!i) return 0;
    const { animation: s } = i;
    return Kt(s.currentTime || 0);
  }
  set time(i) {
    const { resolved: s } = this;
    if (!s) return;
    const { animation: l } = s;
    l.currentTime = Ht(i);
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
      Cd(l, i);
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
      const { motionValue: g, onUpdate: y, onComplete: x, element: P, ...A } = this.options,
        _ = new cu({
          ...A,
          keyframes: l,
          duration: c,
          type: d,
          ease: f,
          times: p,
          isGenerator: !0,
        }),
        R = Ht(this.time);
      g.setWithVelocity(_.sample(R - Gs).value, _.sample(R).value, Gs);
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
    return G0() && l && H0.has(l) && !m && !g && !c && d !== "mirror" && f !== 0 && p !== "inertia";
  }
}
const Z0 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  b0 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  J0 = { type: "keyframes", duration: 0.8 },
  ex = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  tx = (n, { keyframes: i }) =>
    i.length > 2 ? J0 : _n.has(n) ? (n.startsWith("scale") ? b0(i[1]) : Z0) : ex;
function nx({
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
const fu =
  (n, i, s, l = {}, c, d) =>
  (f) => {
    const p = qa(l, n) || {},
      m = p.delay || l.delay || 0;
    let { elapsed: g = 0 } = l;
    g = g - Ht(m);
    let y = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...p,
      delay: -g,
      onUpdate: (P) => {
        (i.set(P), p.onUpdate && p.onUpdate(P));
      },
      onComplete: () => {
        (f(), p.onComplete && p.onComplete());
      },
      name: n,
      motionValue: i,
      element: d ? void 0 : c,
    };
    (nx(p) || (y = { ...y, ...tx(n, y) }),
      y.duration && (y.duration = Ht(y.duration)),
      y.repeatDelay && (y.repeatDelay = Ht(y.repeatDelay)),
      y.from !== void 0 && (y.keyframes[0] = y.from));
    let x = !1;
    if (
      ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
        ((y.duration = 0), y.delay === 0 && (x = !0)),
      x && !d && i.get() !== void 0)
    ) {
      const P = eo(y.keyframes, p);
      if (P !== void 0)
        return (
          xe.update(() => {
            (y.onUpdate(P), y.onComplete());
          }),
          new Sv([])
        );
    }
    return !d && Ud.supports(y) ? new Ud(y) : new cu(y);
  };
function rx({ protectedKeys: n, needsAnimating: i }, s) {
  const l = n.hasOwnProperty(s) && i[s] !== !0;
  return ((i[s] = !1), l);
}
function $p(n, i, { delay: s = 0, transitionOverride: l, type: c } = {}) {
  var d;
  let { transition: f = n.getDefaultTransition(), transitionEnd: p, ...m } = i;
  l && (f = l);
  const g = [],
    y = c && n.animationState && n.animationState.getState()[c];
  for (const x in m) {
    const P = n.getValue(x, (d = n.latestValues[x]) !== null && d !== void 0 ? d : null),
      A = m[x];
    if (A === void 0 || (y && rx(y, x))) continue;
    const _ = { delay: s, ...qa(f || {}, x) };
    let R = !1;
    if (window.MotionHandoffAnimation) {
      const O = hp(n);
      if (O) {
        const W = window.MotionHandoffAnimation(O, x, xe);
        W !== null && ((_.startTime = W), (R = !0));
      }
    }
    (ga(n, x), P.start(fu(x, P, A, n.shouldReduceMotion && fp.has(x) ? { type: !1 } : _, n, R)));
    const V = P.animation;
    V && g.push(V);
  }
  return (
    p &&
      Promise.all(g).then(() => {
        xe.update(() => {
          p && _v(n, p);
        });
      }),
    g
  );
}
function ka(n, i, s = {}) {
  var l;
  const c = Js(
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
  const f = c ? () => Promise.all($p(n, c, s)) : () => Promise.resolve(),
    p =
      n.variantChildren && n.variantChildren.size
        ? (g = 0) => {
            const { delayChildren: y = 0, staggerChildren: x, staggerDirection: P } = d;
            return ix(n, i, y + g, x, P, s);
          }
        : () => Promise.resolve(),
    { when: m } = d;
  if (m) {
    const [g, y] = m === "beforeChildren" ? [f, p] : [p, f];
    return g().then(() => y());
  } else return Promise.all([f(), p(s.delay)]);
}
function ix(n, i, s = 0, l = 0, c = 1, d) {
  const f = [],
    p = (n.variantChildren.size - 1) * l,
    m = c === 1 ? (g = 0) => g * l : (g = 0) => p - g * l;
  return (
    Array.from(n.variantChildren)
      .sort(sx)
      .forEach((g, y) => {
        (g.notify("AnimationStart", i),
          f.push(ka(g, i, { ...d, delay: s + m(y) }).then(() => g.notify("AnimationComplete", i))));
      }),
    Promise.all(f)
  );
}
function sx(n, i) {
  return n.sortNodePosition(i);
}
function ox(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const c = i.map((d) => ka(n, d, s));
    l = Promise.all(c);
  } else if (typeof i == "string") l = ka(n, i, s);
  else {
    const c = typeof i == "function" ? Js(n, i, s.custom) : i;
    l = Promise.all($p(n, c, s));
  }
  return l.then(() => {
    n.notify("AnimationComplete", i);
  });
}
const lx = Ia.length;
function Hp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? Hp(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const i = {};
  for (let s = 0; s < lx; s++) {
    const l = Ia[s],
      c = n.props[l];
    (di(c) || c === !1) && (i[l] = c);
  }
  return i;
}
const ax = [...Oa].reverse(),
  ux = Oa.length;
function cx(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: l }) => ox(n, s, l)));
}
function fx(n) {
  let i = cx(n),
    s = Wd(),
    l = !0;
  const c = (m) => (g, y) => {
    var x;
    const P = Js(
      n,
      y,
      m === "exit"
        ? (x = n.presenceContext) === null || x === void 0
          ? void 0
          : x.custom
        : void 0,
    );
    if (P) {
      const { transition: A, transitionEnd: _, ...R } = P;
      g = { ...g, ...R, ..._ };
    }
    return g;
  };
  function d(m) {
    i = m(n);
  }
  function f(m) {
    const { props: g } = n,
      y = Hp(n.parent) || {},
      x = [],
      P = new Set();
    let A = {},
      _ = 1 / 0;
    for (let V = 0; V < ux; V++) {
      const O = ax[V],
        W = s[O],
        K = g[O] !== void 0 ? g[O] : y[O],
        Y = di(K),
        B = O === m ? W.isActive : null;
      B === !1 && (_ = V);
      let ee = K === y[O] && K !== g[O] && Y;
      if (
        (ee && l && n.manuallyAnimateOnMount && (ee = !1),
        (W.protectedKeys = { ...A }),
        (!W.isActive && B === null) || (!K && !W.prevProp) || Zs(K) || typeof K == "boolean")
      )
        continue;
      const le = dx(W.prevProp, K);
      let q = le || (O === m && W.isActive && !ee && Y) || (V > _ && Y),
        ge = !1;
      const Ce = Array.isArray(K) ? K : [K];
      let qe = Ce.reduce(c(O), {});
      B === !1 && (qe = {});
      const { prevResolvedValues: it = {} } = W,
        Ge = { ...it, ...qe },
        Ze = (ie) => {
          ((q = !0), P.has(ie) && ((ge = !0), P.delete(ie)), (W.needsAnimating[ie] = !0));
          const I = n.getValue(ie);
          I && (I.liveStyle = !1);
        };
      for (const ie in Ge) {
        const I = qe[ie],
          Z = it[ie];
        if (A.hasOwnProperty(ie)) continue;
        let $ = !1;
        (ha(I) && ha(Z) ? ($ = !rp(I, Z)) : ($ = I !== Z),
          $
            ? I != null
              ? Ze(ie)
              : P.add(ie)
            : I !== void 0 && P.has(ie)
              ? Ze(ie)
              : (W.protectedKeys[ie] = !0));
      }
      ((W.prevProp = K),
        (W.prevResolvedValues = qe),
        W.isActive && (A = { ...A, ...qe }),
        l && n.blockInitialAnimation && (q = !1),
        q &&
          (!(ee && le) || ge) &&
          x.push(...Ce.map((ie) => ({ animation: ie, options: { type: O } }))));
    }
    if (P.size) {
      const V = {};
      (P.forEach((O) => {
        const W = n.getBaseTarget(O),
          K = n.getValue(O);
        (K && (K.liveStyle = !0), (V[O] = W ?? null));
      }),
        x.push({ animation: V }));
    }
    let R = !!x.length;
    return (
      l && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (R = !1),
      (l = !1),
      R ? i(x) : Promise.resolve()
    );
  }
  function p(m, g) {
    var y;
    if (s[m].isActive === g) return Promise.resolve();
    ((y = n.variantChildren) === null ||
      y === void 0 ||
      y.forEach((P) => {
        var A;
        return (A = P.animationState) === null || A === void 0 ? void 0 : A.setActive(m, g);
      }),
      (s[m].isActive = g));
    const x = f(m);
    for (const P in s) s[P].protectedKeys = {};
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
function dx(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !rp(i, n) : !1;
}
function Mn(n = !1) {
  return { isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Wd() {
  return {
    animate: Mn(!0),
    whileInView: Mn(),
    whileHover: Mn(),
    whileTap: Mn(),
    whileDrag: Mn(),
    whileFocus: Mn(),
    exit: Mn(),
  };
}
class gn {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
class hx extends gn {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = fx(i)));
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
let px = 0;
class mx extends gn {
  constructor() {
    (super(...arguments), (this.id = px++));
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
const gx = { animation: { Feature: hx }, exit: { Feature: mx } };
function gi(n, i, s, l = { passive: !0 }) {
  return (n.addEventListener(i, s, l), () => n.removeEventListener(i, s));
}
function wi(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const yx = (n) => (i) => Ja(i) && n(i, wi(i));
function ui(n, i, s, l) {
  return gi(n, i, yx(s), l);
}
const $d = (n, i) => Math.abs(n - i);
function vx(n, i) {
  const s = $d(n.x, i.x),
    l = $d(n.y, i.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
class Kp {
  constructor(i, s, { transformPagePoint: l, contextWindow: c, dragSnapToOrigin: d = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const x = la(this.lastMoveEventInfo, this.history),
          P = this.startEvent !== null,
          A = vx(x.offset, { x: 0, y: 0 }) >= 3;
        if (!P && !A) return;
        const { point: _ } = x,
          { timestamp: R } = ze;
        this.history.push({ ..._, timestamp: R });
        const { onStart: V, onMove: O } = this.handlers;
        (P || (V && V(this.lastMoveEvent, x), (this.startEvent = this.lastMoveEvent)),
          O && O(this.lastMoveEvent, x));
      }),
      (this.handlePointerMove = (x, P) => {
        ((this.lastMoveEvent = x),
          (this.lastMoveEventInfo = oa(P, this.transformPagePoint)),
          xe.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (x, P) => {
        this.end();
        const { onEnd: A, onSessionEnd: _, resumeAnimation: R } = this.handlers;
        if ((this.dragSnapToOrigin && R && R(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const V = la(
          x.type === "pointercancel" ? this.lastMoveEventInfo : oa(P, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && A && A(x, V), _ && _(x, V));
      }),
      !Ja(i))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = l),
      (this.contextWindow = c || window));
    const f = wi(i),
      p = oa(f, this.transformPagePoint),
      { point: m } = p,
      { timestamp: g } = ze;
    this.history = [{ ...m, timestamp: g }];
    const { onSessionStart: y } = s;
    (y && y(i, la(p, this.history)),
      (this.removeListeners = xi(
        ui(this.contextWindow, "pointermove", this.handlePointerMove),
        ui(this.contextWindow, "pointerup", this.handlePointerUp),
        ui(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(), pn(this.updatePoint));
  }
}
function oa(n, i) {
  return i ? { point: i(n.point) } : n;
}
function Hd(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function la({ point: n }, i) {
  return { point: n, delta: Hd(n, Gp(i)), offset: Hd(n, xx(i)), velocity: wx(i, 0.1) };
}
function xx(n) {
  return n[0];
}
function Gp(n) {
  return n[n.length - 1];
}
function wx(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    l = null;
  const c = Gp(n);
  for (; s >= 0 && ((l = n[s]), !(c.timestamp - l.timestamp > Ht(i)));) s--;
  if (!l) return { x: 0, y: 0 };
  const d = Kt(c.timestamp - l.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - l.x) / d, y: (c.y - l.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
const Qp = 1e-4,
  Sx = 1 - Qp,
  Px = 1 + Qp,
  Xp = 0.01,
  kx = 0 - Xp,
  Tx = 0 + Xp;
function ft(n) {
  return n.max - n.min;
}
function Cx(n, i, s) {
  return Math.abs(n - i) <= s;
}
function Kd(n, i, s, l = 0.5) {
  ((n.origin = l),
    (n.originPoint = Te(i.min, i.max, n.origin)),
    (n.scale = ft(s) / ft(i)),
    (n.translate = Te(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= Sx && n.scale <= Px) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= kx && n.translate <= Tx) || isNaN(n.translate)) && (n.translate = 0));
}
function ci(n, i, s, l) {
  (Kd(n.x, i.x, s.x, l ? l.originX : void 0), Kd(n.y, i.y, s.y, l ? l.originY : void 0));
}
function Gd(n, i, s) {
  ((n.min = s.min + i.min), (n.max = n.min + ft(i)));
}
function Ex(n, i, s) {
  (Gd(n.x, i.x, s.x), Gd(n.y, i.y, s.y));
}
function Qd(n, i, s) {
  ((n.min = i.min - s.min), (n.max = n.min + ft(i)));
}
function fi(n, i, s) {
  (Qd(n.x, i.x, s.x), Qd(n.y, i.y, s.y));
}
function Ax(n, { min: i, max: s }, l) {
  return (
    i !== void 0 && n < i
      ? (n = l ? Te(i, n, l.min) : Math.max(n, i))
      : s !== void 0 && n > s && (n = l ? Te(s, n, l.max) : Math.min(n, s)),
    n
  );
}
function Xd(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  };
}
function Dx(n, { top: i, left: s, bottom: l, right: c }) {
  return { x: Xd(n.x, s, c), y: Xd(n.y, i, l) };
}
function Yd(n, i) {
  let s = i.min - n.min,
    l = i.max - n.max;
  return (i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l });
}
function Rx(n, i) {
  return { x: Yd(n.x, i.x), y: Yd(n.y, i.y) };
}
function Mx(n, i) {
  let s = 0.5;
  const l = ft(n),
    c = ft(i);
  return (
    c > l ? (s = dr(i.min, i.max - l, n.min)) : l > c && (s = dr(n.min, n.max - c, i.min)),
    Gt(0, 1, s)
  );
}
function Nx(n, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
  );
}
const Ta = 0.35;
function Lx(n = Ta) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Ta),
    { x: qd(n, "left", "right"), y: qd(n, "top", "bottom") }
  );
}
function qd(n, i, s) {
  return { min: Zd(n, i), max: Zd(n, s) };
}
function Zd(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const bd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ur = () => ({ x: bd(), y: bd() }),
  Jd = () => ({ min: 0, max: 0 }),
  Me = () => ({ x: Jd(), y: Jd() });
function xt(n) {
  return [n("x"), n("y")];
}
function Yp({ top: n, left: i, right: s, bottom: l }) {
  return { x: { min: i, max: s }, y: { min: n, max: l } };
}
function Vx({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function jx(n, i) {
  if (!i) return n;
  const s = i({ x: n.left, y: n.top }),
    l = i({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: l.y, right: l.x };
}
function aa(n) {
  return n === void 0 || n === 1;
}
function Ca({ scale: n, scaleX: i, scaleY: s }) {
  return !aa(n) || !aa(i) || !aa(s);
}
function Nn(n) {
  return Ca(n) || qp(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function qp(n) {
  return eh(n.x) || eh(n.y);
}
function eh(n) {
  return n && n !== "0%";
}
function Qs(n, i, s) {
  const l = n - s,
    c = i * l;
  return s + c;
}
function th(n, i, s, l, c) {
  return (c !== void 0 && (n = Qs(n, c, l)), Qs(n, s, l) + i);
}
function Ea(n, i = 0, s = 1, l, c) {
  ((n.min = th(n.min, i, s, l, c)), (n.max = th(n.max, i, s, l, c)));
}
function Zp(n, { x: i, y: s }) {
  (Ea(n.x, i.translate, i.scale, i.originPoint), Ea(n.y, s.translate, s.scale, s.originPoint));
}
const nh = 0.999999999999,
  rh = 1.0000000000001;
function _x(n, i, s, l = !1) {
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
        fr(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Zp(n, f)),
      l && Nn(d.latestValues) && fr(n, d.latestValues));
  }
  (i.x < rh && i.x > nh && (i.x = 1), i.y < rh && i.y > nh && (i.y = 1));
}
function cr(n, i) {
  ((n.min = n.min + i), (n.max = n.max + i));
}
function ih(n, i, s, l, c = 0.5) {
  const d = Te(n.min, n.max, c);
  Ea(n, i, s, d, l);
}
function fr(n, i) {
  (ih(n.x, i.x, i.scaleX, i.scale, i.originX), ih(n.y, i.y, i.scaleY, i.scale, i.originY));
}
function bp(n, i) {
  return Yp(jx(n.getBoundingClientRect(), i));
}
function Fx(n, i, s) {
  const l = bp(n, s),
    { scroll: c } = i;
  return (c && (cr(l.x, c.offset.x), cr(l.y, c.offset.y)), l);
}
const Jp = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Ox = new WeakMap();
class Ix {
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
        (x ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(wi(y).point));
      },
      d = (y, x) => {
        const { drag: P, dragPropagation: A, onDragStart: _ } = this.getProps();
        if (
          P &&
          !A &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Mv(P)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          xt((V) => {
            let O = this.getAxisMotionValue(V).get() || 0;
            if (jt.test(O)) {
              const { projection: W } = this.visualElement;
              if (W && W.layout) {
                const K = W.layout.layoutBox[V];
                K && (O = ft(K) * (parseFloat(O) / 100));
              }
            }
            this.originPoint[V] = O;
          }),
          _ && xe.postRender(() => _(y, x)),
          ga(this.visualElement, "transform"));
        const { animationState: R } = this.visualElement;
        R && R.setActive("whileDrag", !0);
      },
      f = (y, x) => {
        const {
          dragPropagation: P,
          dragDirectionLock: A,
          onDirectionLock: _,
          onDrag: R,
        } = this.getProps();
        if (!P && !this.openDragLock) return;
        const { offset: V } = x;
        if (A && this.currentDirection === null) {
          ((this.currentDirection = zx(V)),
            this.currentDirection !== null && _ && _(this.currentDirection));
          return;
        }
        (this.updateAxis("x", x.point, V),
          this.updateAxis("y", x.point, V),
          this.visualElement.render(),
          R && R(y, x));
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
    this.panSession = new Kp(
      i,
      { onSessionStart: c, onStart: d, onMove: f, onSessionEnd: p, resumeAnimation: m },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        contextWindow: Jp(this.visualElement),
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
    if (!l || !_s(i, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + l[i];
    (this.constraints && this.constraints[i] && (f = Ax(f, this.constraints[i], this.elastic[i])),
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
    (s && lr(s)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : s && c
        ? (this.constraints = Dx(c.layoutBox, s))
        : (this.constraints = !1),
      (this.elastic = Lx(l)),
      d !== this.constraints &&
        c &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        xt((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = Nx(c.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !lr(i)) return !1;
    const l = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = Fx(l, c.root, this.visualElement.getTransformPagePoint());
    let f = Rx(c.layout.layoutBox, d);
    if (s) {
      const p = s(Vx(f));
      ((this.hasMutatedConstraints = !!p), p && (f = Yp(p)));
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
        if (!_s(y, s, this.currentDirection)) return;
        let x = (m && m[y]) || {};
        f && (x = { min: 0, max: 0 });
        const P = c ? 200 : 1e6,
          A = c ? 40 : 1e7,
          _ = {
            type: "inertia",
            velocity: l ? i[y] : 0,
            bounceStiffness: P,
            bounceDamping: A,
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
    return (ga(this.visualElement, i), l.start(fu(i, l, 0, s, this.visualElement, !1)));
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
      if (!_s(s, l, this.currentDirection)) return;
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
    if (!lr(s) || !l || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    xt((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = Mx({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      this.resolveConstraints(),
      xt((f) => {
        if (!_s(f, i, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: g } = this.constraints[f];
        p.set(Te(m, g, c[f]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Ox.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = ui(i, "pointerdown", (m) => {
        const { drag: g, dragListener: y = !0 } = this.getProps();
        g && y && this.start(m);
      }),
      l = () => {
        const { dragConstraints: m } = this.getProps();
        lr(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", l);
    (c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), xe.read(l));
    const f = gi(window, "resize", () => this.scalePositionWithinConstraints()),
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
        dragElastic: f = Ta,
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
function _s(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n);
}
function zx(n, i = 10) {
  let s = null;
  return (Math.abs(n.y) > i ? (s = "y") : Math.abs(n.x) > i && (s = "x"), s);
}
class Bx extends gn {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = ct),
      (this.removeListeners = ct),
      (this.controls = new Ix(i)));
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
const sh = (n) => (i, s) => {
  n && xe.postRender(() => n(i, s));
};
class Ux extends gn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = ct));
  }
  onPointerDown(i) {
    this.session = new Kp(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Jp(this.node),
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
    this.removePointerDownListener = ui(this.node.current, "pointerdown", (i) =>
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
const zs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function oh(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const ii = {
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
  Wx = {
    correct: (n, { treeScale: i, projectionDelta: s }) => {
      const l = n,
        c = mn.parse(n);
      if (c.length > 5) return l;
      const d = mn.createTransformer(n),
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
class $x extends z.Component {
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l, layoutId: c } = this.props,
      { projection: d } = i;
    (uv(Hx),
      d &&
        (s.group && s.group.add(d),
        l && l.register && c && l.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({ ...d.options, onExitComplete: () => this.safeToRemove() })),
      (zs.hasEverUpdated = !0));
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
      Ba.postRender(() => {
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
function em(n) {
  const [i, s] = Fh(),
    l = z.useContext(La);
  return D.jsx($x, {
    ...n,
    layoutGroup: l,
    switchLayoutGroup: z.useContext(Hh),
    isPresent: i,
    safeToRemove: s,
  });
}
const Hx = {
  borderRadius: {
    ...ii,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: ii,
  borderTopRightRadius: ii,
  borderBottomLeftRadius: ii,
  borderBottomRightRadius: ii,
  boxShadow: Wx,
};
function Kx(n, i, s) {
  const l = Ke(n) ? n : pi(n);
  return (l.start(fu("", l, i, s)), l.animation);
}
function Gx(n) {
  return n instanceof SVGElement && n.tagName !== "svg";
}
const Qx = (n, i) => n.depth - i.depth;
class Xx {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (eu(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (tu(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(Qx), (this.isDirty = !1), this.children.forEach(i));
  }
}
function Yx(n, i) {
  const s = _t.now(),
    l = ({ timestamp: c }) => {
      const d = c - s;
      d >= i && (pn(l), n(d - i));
    };
  return (xe.read(l, !0), () => pn(l));
}
const tm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  qx = tm.length,
  lh = (n) => (typeof n == "string" ? parseFloat(n) : n),
  ah = (n) => typeof n == "number" || te.test(n);
function Zx(n, i, s, l, c, d) {
  c
    ? ((n.opacity = Te(0, s.opacity !== void 0 ? s.opacity : 1, bx(l))),
      (n.opacityExit = Te(i.opacity !== void 0 ? i.opacity : 1, 0, Jx(l))))
    : d &&
      (n.opacity = Te(
        i.opacity !== void 0 ? i.opacity : 1,
        s.opacity !== void 0 ? s.opacity : 1,
        l,
      ));
  for (let f = 0; f < qx; f++) {
    const p = `border${tm[f]}Radius`;
    let m = uh(i, p),
      g = uh(s, p);
    if (m === void 0 && g === void 0) continue;
    (m || (m = 0),
      g || (g = 0),
      m === 0 || g === 0 || ah(m) === ah(g)
        ? ((n[p] = Math.max(Te(lh(m), lh(g), l), 0)), (jt.test(g) || jt.test(m)) && (n[p] += "%"))
        : (n[p] = g));
  }
  (i.rotate || s.rotate) && (n.rotate = Te(i.rotate || 0, s.rotate || 0, l));
}
function uh(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const bx = nm(0, 0.5, wp),
  Jx = nm(0.5, 0.95, ct);
function nm(n, i, s) {
  return (l) => (l < n ? 0 : l > i ? 1 : s(dr(n, i, l)));
}
function ch(n, i) {
  ((n.min = i.min), (n.max = i.max));
}
function vt(n, i) {
  (ch(n.x, i.x), ch(n.y, i.y));
}
function fh(n, i) {
  ((n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin));
}
function dh(n, i, s, l, c) {
  return ((n -= i), (n = Qs(n, 1 / s, l)), c !== void 0 && (n = Qs(n, 1 / c, l)), n);
}
function e1(n, i = 0, s = 1, l = 0.5, c, d = n, f = n) {
  if (
    (jt.test(i) && ((i = parseFloat(i)), (i = Te(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = Te(d.min, d.max, l);
  (n === d && (p -= i), (n.min = dh(n.min, i, s, p, c)), (n.max = dh(n.max, i, s, p, c)));
}
function hh(n, i, [s, l, c], d, f) {
  e1(n, i[s], i[l], i[c], i.scale, d, f);
}
const t1 = ["x", "scaleX", "originX"],
  n1 = ["y", "scaleY", "originY"];
function ph(n, i, s, l) {
  (hh(n.x, i, t1, s ? s.x : void 0, l ? l.x : void 0),
    hh(n.y, i, n1, s ? s.y : void 0, l ? l.y : void 0));
}
function mh(n) {
  return n.translate === 0 && n.scale === 1;
}
function rm(n) {
  return mh(n.x) && mh(n.y);
}
function gh(n, i) {
  return n.min === i.min && n.max === i.max;
}
function r1(n, i) {
  return gh(n.x, i.x) && gh(n.y, i.y);
}
function yh(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function im(n, i) {
  return yh(n.x, i.x) && yh(n.y, i.y);
}
function vh(n) {
  return ft(n.x) / ft(n.y);
}
function xh(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
class i1 {
  constructor() {
    this.members = [];
  }
  add(i) {
    (eu(this.members, i), i.scheduleRender());
  }
  remove(i) {
    if ((tu(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead)) {
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
function s1(n, i, s) {
  let l = "";
  const c = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((c || d || f) && (l = `translate3d(${c}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const { transformPerspective: g, rotate: y, rotateX: x, rotateY: P, skewX: A, skewY: _ } = s;
    (g && (l = `perspective(${g}px) ${l}`),
      y && (l += `rotate(${y}deg) `),
      x && (l += `rotateX(${x}deg) `),
      P && (l += `rotateY(${P}deg) `),
      A && (l += `skewX(${A}deg) `),
      _ && (l += `skewY(${_}deg) `));
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return ((p !== 1 || m !== 1) && (l += `scale(${p}, ${m})`), l || "none");
}
const Ln = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  li = typeof window < "u" && window.MotionDebug !== void 0,
  ua = ["", "X", "Y", "Z"],
  o1 = { visibility: "hidden" },
  wh = 1e3;
let l1 = 0;
function ca(n, i, s, l) {
  const { latestValues: c } = i;
  c[n] && ((s[n] = c[n]), i.setStaticValue(n, 0), l && (l[n] = 0));
}
function sm(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const s = hp(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", xe, !(c || d));
  }
  const { parent: l } = n;
  l && !l.hasCheckedOptimisedAppear && sm(l);
}
function om({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: l,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, p = i == null ? void 0 : i()) {
      ((this.id = l1++),
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
            li && (Ln.totalNodes = Ln.resolvedTargetDeltas = Ln.recalculatedProjection = 0),
            this.nodes.forEach(c1),
            this.nodes.forEach(m1),
            this.nodes.forEach(g1),
            this.nodes.forEach(f1),
            li && window.MotionDebug.record(Ln));
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
      this.root === this && (this.nodes = new Xx());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new nu()),
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
      ((this.isSVG = Gx(f)), (this.instance = f));
      const { layoutId: m, layout: g, visualElement: y } = this.options;
      if (
        (y && !y.current && y.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        p && (g || m) && (this.isLayoutDirty = !0),
        n)
      ) {
        let x;
        const P = () => (this.root.updateBlockedByResize = !1);
        n(f, () => {
          ((this.root.updateBlockedByResize = !0),
            x && x(),
            (x = Yx(P, 250)),
            zs.hasAnimatedSinceResize &&
              ((zs.hasAnimatedSinceResize = !1), this.nodes.forEach(Ph)));
        });
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          y &&
          (m || g) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: x, hasLayoutChanged: P, hasRelativeTargetChanged: A, layout: _ }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const R = this.options.transition || y.getDefaultTransition() || S1,
                { onLayoutAnimationStart: V, onLayoutAnimationComplete: O } = y.getProps(),
                W = !this.targetLayout || !im(this.targetLayout, _) || A,
                K = !P && A;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                K ||
                (P && (W || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(x, K));
                const Y = { ...qa(R, "layout"), onPlay: V, onComplete: O };
                ((y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((Y.delay = 0), (Y.type = !1)),
                  this.startAnimation(Y));
              } else
                (P || Ph(this),
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
        pn(this.updateProjection));
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(y1), this.animationId++);
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
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && sm(this),
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
        (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Sh));
        return;
      }
      (this.isUpdating || this.nodes.forEach(h1),
        (this.isUpdating = !1),
        this.nodes.forEach(p1),
        this.nodes.forEach(a1),
        this.nodes.forEach(u1),
        this.clearAllSnapshots());
      const p = _t.now();
      ((ze.delta = Gt(0, 1e3 / 60, p - ze.timestamp)),
        (ze.timestamp = p),
        (ze.isProcessing = !0),
        ea.update.process(ze),
        ea.preRender.process(ze),
        ea.render.process(ze),
        (ze.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Ba.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(d1), this.sharedNodes.forEach(v1));
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
        p = this.projectionDelta && !rm(this.projectionDelta),
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
        P1(m),
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
        ((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) || this.path.some(k1)
      )) {
        const { scroll: y } = this.root;
        y && (cr(m.x, y.offset.x), cr(m.y, y.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var p;
      const m = Me();
      if ((vt(m, f), !((p = this.scroll) === null || p === void 0) && p.wasRoot)) return m;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g],
          { scroll: x, options: P } = y;
        y !== this.root &&
          x &&
          P.layoutScroll &&
          (x.wasRoot && vt(m, f), cr(m.x, x.offset.x), cr(m.y, x.offset.y));
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
          fr(m, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
          Nn(y.latestValues) && fr(m, y.latestValues));
      }
      return (Nn(this.latestValues) && fr(m, this.latestValues), m);
    }
    removeTransform(f) {
      const p = Me();
      vt(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        if (!g.instance || !Nn(g.latestValues)) continue;
        Ca(g.latestValues) && g.updateSnapshot();
        const y = Me(),
          x = g.measurePageBox();
        (vt(y, x), ph(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, y));
      }
      return (Nn(this.latestValues) && ph(p, this.latestValues), p);
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
      const { layout: x, layoutId: P } = this.options;
      if (!(!this.layout || !(x || P))) {
        if (
          ((this.resolvedRelativeTargetAt = ze.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const A = this.getClosestProjectingParent();
          A && A.layout && this.animationProgress !== 1
            ? ((this.relativeParent = A),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Me()),
              (this.relativeTargetOrigin = Me()),
              fi(this.relativeTargetOrigin, this.layout.layoutBox, A.layout.layoutBox),
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
                Ex(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : vt(this.target, this.layout.layoutBox),
                  Zp(this.target, this.targetDelta))
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
                (this.relativeTarget = Me()),
                (this.relativeTargetOrigin = Me()),
                fi(this.relativeTargetOrigin, this.target, A.target),
                vt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          li && Ln.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ca(this.parent.latestValues) || qp(this.parent.latestValues)))
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
      const P = this.treeScale.x,
        A = this.treeScale.y;
      (_x(this.layoutCorrected, this.treeScale, this.path, m),
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
        : (fh(this.prevProjectionDelta.x, this.projectionDelta.x),
          fh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ci(this.projectionDelta, this.layoutCorrected, _, this.latestValues),
        (this.treeScale.x !== P ||
          this.treeScale.y !== A ||
          !xh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !xh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", _)),
        li && Ln.recalculatedProjection++);
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
      ((this.prevProjectionDelta = ur()),
        (this.projectionDelta = ur()),
        (this.projectionDeltaWithTransform = ur()));
    }
    setAnimationOrigin(f, p = !1) {
      const m = this.snapshot,
        g = m ? m.latestValues : {},
        y = { ...this.latestValues },
        x = ur();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const P = Me(),
        A = m ? m.source : void 0,
        _ = this.layout ? this.layout.source : void 0,
        R = A !== _,
        V = this.getStack(),
        O = !V || V.members.length <= 1,
        W = !!(R && !O && this.options.crossfade === !0 && !this.path.some(w1));
      this.animationProgress = 0;
      let K;
      ((this.mixTargetDelta = (Y) => {
        const B = Y / 1e3;
        (kh(x.x, f.x, B),
          kh(x.y, f.y, B),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (fi(P, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            x1(this.relativeTarget, this.relativeTargetOrigin, P, B),
            K && r1(this.relativeTarget, K) && (this.isProjectionDirty = !1),
            K || (K = Me()),
            vt(K, this.relativeTarget)),
          R && ((this.animationValues = y), Zx(y, g, this.latestValues, B, W, O)),
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
        this.pendingAnimation && (pn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = xe.update(() => {
          ((zs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Kx(0, wh, {
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
      let { targetWithTransforms: p, target: m, layout: g, latestValues: y } = f;
      if (!(!p || !m || !g)) {
        if (
          this !== f &&
          this.layout &&
          g &&
          lm(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          m = this.target || Me();
          const x = ft(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + x));
          const P = ft(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + P));
        }
        (vt(p, m), fr(p, y), ci(this.projectionDeltaWithTransform, this.layoutCorrected, p, y));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new i1()),
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
      m.z && ca("z", f, g, this.animationValues);
      for (let y = 0; y < ua.length; y++)
        (ca(`rotate${ua[y]}`, f, g, this.animationValues),
          ca(`skew${ua[y]}`, f, g, this.animationValues));
      f.render();
      for (const y in g)
        (f.setStaticValue(y, g[y]), this.animationValues && (this.animationValues[y] = g[y]));
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      var p, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return o1;
      const g = { visibility: "" },
        y = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (g.opacity = ""),
          (g.pointerEvents = Os(f == null ? void 0 : f.pointerEvents) || ""),
          (g.transform = y ? y(this.latestValues, "") : "none"),
          g
        );
      const x = this.getLead();
      if (!this.projectionDelta || !this.layout || !x.target) {
        const R = {};
        return (
          this.options.layoutId &&
            ((R.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (R.pointerEvents = Os(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !Nn(this.latestValues) &&
            ((R.transform = y ? y({}, "") : "none"), (this.hasProjected = !1)),
          R
        );
      }
      const P = x.animationValues || x.latestValues;
      (this.applyTransformsToTarget(),
        (g.transform = s1(this.projectionDeltaWithTransform, this.treeScale, P)),
        y && (g.transform = y(P, g.transform)));
      const { x: A, y: _ } = this.projectionDelta;
      ((g.transformOrigin = `${A.origin * 100}% ${_.origin * 100}% 0`),
        x.animationValues
          ? (g.opacity =
              x === this
                ? (m = (p = P.opacity) !== null && p !== void 0 ? p : this.latestValues.opacity) !==
                    null && m !== void 0
                  ? m
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : P.opacityExit)
          : (g.opacity =
              x === this
                ? P.opacity !== void 0
                  ? P.opacity
                  : ""
                : P.opacityExit !== void 0
                  ? P.opacityExit
                  : 0));
      for (const R in Ws) {
        if (P[R] === void 0) continue;
        const { correct: V, applyTo: O } = Ws[R],
          W = g.transform === "none" ? P[R] : V(P[R], x);
        if (O) {
          const K = O.length;
          for (let Y = 0; Y < K; Y++) g[O[Y]] = W;
        } else g[R] = W;
      }
      return (
        this.options.layoutId &&
          (g.pointerEvents = x === this ? Os(f == null ? void 0 : f.pointerEvents) || "" : "none"),
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
        this.root.nodes.forEach(Sh),
        this.root.sharedNodes.clear());
    }
  };
}
function a1(n) {
  n.updateLayout();
}
function u1(n) {
  var i;
  const s = ((i = n.resumeFrom) === null || i === void 0 ? void 0 : i.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && s && n.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: c } = n.layout,
      { animationType: d } = n.options,
      f = s.source !== n.layout.source;
    d === "size"
      ? xt((x) => {
          const P = f ? s.measuredBox[x] : s.layoutBox[x],
            A = ft(P);
          ((P.min = l[x].min), (P.max = P.min + A));
        })
      : lm(d, s.layoutBox, l) &&
        xt((x) => {
          const P = f ? s.measuredBox[x] : s.layoutBox[x],
            A = ft(l[x]);
          ((P.max = P.min + A),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[x].max = n.relativeTarget[x].min + A)));
        });
    const p = ur();
    ci(p, l, s.layoutBox);
    const m = ur();
    f ? ci(m, n.applyTransform(c, !0), s.measuredBox) : ci(m, l, s.layoutBox);
    const g = !rm(p);
    let y = !1;
    if (!n.resumeFrom) {
      const x = n.getClosestProjectingParent();
      if (x && !x.resumeFrom) {
        const { snapshot: P, layout: A } = x;
        if (P && A) {
          const _ = Me();
          fi(_, s.layoutBox, P.layoutBox);
          const R = Me();
          (fi(R, l, A.layoutBox),
            im(_, R) || (y = !0),
            x.options.layoutRoot &&
              ((n.relativeTarget = R), (n.relativeTargetOrigin = _), (n.relativeParent = x)));
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
function c1(n) {
  (li && Ln.totalNodes++,
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
function f1(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function d1(n) {
  n.clearSnapshot();
}
function Sh(n) {
  n.clearMeasurements();
}
function h1(n) {
  n.isLayoutDirty = !1;
}
function p1(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function Ph(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function m1(n) {
  n.resolveTargetDelta();
}
function g1(n) {
  n.calcProjection();
}
function y1(n) {
  n.resetSkewAndRotation();
}
function v1(n) {
  n.removeLeadSnapshot();
}
function kh(n, i, s) {
  ((n.translate = Te(i.translate, 0, s)),
    (n.scale = Te(i.scale, 1, s)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint));
}
function Th(n, i, s, l) {
  ((n.min = Te(i.min, s.min, l)), (n.max = Te(i.max, s.max, l)));
}
function x1(n, i, s, l) {
  (Th(n.x, i.x, s.x, l), Th(n.y, i.y, s.y, l));
}
function w1(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const S1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ch = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  Eh = Ch("applewebkit/") && !Ch("chrome/") ? Math.round : ct;
function Ah(n) {
  ((n.min = Eh(n.min)), (n.max = Eh(n.max)));
}
function P1(n) {
  (Ah(n.x), Ah(n.y));
}
function lm(n, i, s) {
  return n === "position" || (n === "preserve-aspect" && !Cx(vh(i), vh(s), 0.2));
}
function k1(n) {
  var i;
  return n !== n.root && ((i = n.scroll) === null || i === void 0 ? void 0 : i.wasRoot);
}
const T1 = om({
    attachResizeListener: (n, i) => gi(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  fa = { current: void 0 },
  am = om({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!fa.current) {
        const n = new T1({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (fa.current = n));
      }
      return fa.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  C1 = { pan: { Feature: Ux }, drag: { Feature: Bx, ProjectionNode: am, MeasureLayout: em } };
function Dh(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s,
    d = l[c];
  d && xe.postRender(() => d(i, wi(i)));
}
class E1 extends gn {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = Cv(i, (s) => (Dh(this.node, s, "Start"), (l) => Dh(this.node, l, "End"))));
  }
  unmount() {}
}
class A1 extends gn {
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
    this.unmount = xi(
      gi(this.node.current, "focus", () => this.onFocus()),
      gi(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Rh(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s),
    d = l[c];
  d && xe.postRender(() => d(i, wi(i)));
}
class D1 extends gn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = Rv(
        i,
        (s) => (
          Rh(this.node, s, "Start"),
          (l, { success: c }) => Rh(this.node, l, c ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Aa = new WeakMap(),
  da = new WeakMap(),
  R1 = (n) => {
    const i = Aa.get(n.target);
    i && i(n);
  },
  M1 = (n) => {
    n.forEach(R1);
  };
function N1({ root: n, ...i }) {
  const s = n || document;
  da.has(s) || da.set(s, {});
  const l = da.get(s),
    c = JSON.stringify(i);
  return (l[c] || (l[c] = new IntersectionObserver(M1, { root: n, ...i })), l[c]);
}
function L1(n, i, s) {
  const l = N1(i);
  return (
    Aa.set(n, s),
    l.observe(n),
    () => {
      (Aa.delete(n), l.unobserve(n));
    }
  );
}
const V1 = { some: 0, all: 1 };
class j1 extends gn {
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
        threshold: typeof c == "number" ? c : V1[c],
      },
      p = (m) => {
        const { isIntersecting: g } = m;
        if (this.isInView === g || ((this.isInView = g), d && !g && this.hasEnteredView)) return;
        (g && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", g));
        const { onViewportEnter: y, onViewportLeave: x } = this.node.getProps(),
          P = g ? y : x;
        P && P(m);
      };
    return L1(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(_1(i, s)) && this.startObserver();
  }
  unmount() {}
}
function _1({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const F1 = {
    inView: { Feature: j1 },
    tap: { Feature: D1 },
    focus: { Feature: A1 },
    hover: { Feature: E1 },
  },
  O1 = { layout: { ProjectionNode: am, MeasureLayout: em } },
  Da = { current: null },
  um = { current: !1 };
function I1() {
  if (((um.current = !0), !!_a))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Da.current = n.matches);
      (n.addListener(i), i());
    } else Da.current = !1;
}
const z1 = [...jp, He, mn],
  B1 = (n) => z1.find(Vp(n)),
  Mh = new WeakMap();
function U1(n, i, s) {
  for (const l in i) {
    const c = i[l],
      d = s[l];
    if (Ke(c)) n.addValue(l, c);
    else if (Ke(d)) n.addValue(l, pi(c, { owner: n }));
    else if (d !== c)
      if (n.hasValue(l)) {
        const f = n.getValue(l);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = n.getStaticValue(l);
        n.addValue(l, pi(f !== void 0 ? f : c, { owner: n }));
      }
  }
  for (const l in s) i[l] === void 0 && n.removeValue(l);
  return i;
}
const Nh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class W1 {
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
      (this.KeyframeResolver = au),
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
        const A = _t.now();
        this.renderScheduledAt < A &&
          ((this.renderScheduledAt = A), xe.render(this.render, !1, !0));
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
      (this.isVariantNode = Wh(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: x, ...P } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const A in P) {
      const _ = P[A];
      m[A] !== void 0 && Ke(_) && _.set(m[A], !1);
    }
  }
  mount(i) {
    ((this.current = i),
      Mh.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, l) => this.bindToMotionValue(l, s)),
      um.current || I1(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Da.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Mh.delete(this.current),
      this.projection && this.projection.unmount(),
      pn(this.notifyUpdate),
      pn(this.render),
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
    const l = _n.has(i),
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
    for (i in hr) {
      const s = hr[i];
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
    for (let l = 0; l < Nh.length; l++) {
      const c = Nh[l];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = U1(
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
        ((l = pi(s === null ? void 0 : s, { owner: this })), this.addValue(i, l)),
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
        (typeof c == "string" && (Np(c) || Pp(c))
          ? (c = parseFloat(c))
          : !B1(c) && mn.test(s) && (c = Dp(i, s)),
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
      const f = Wa(
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
    return (this.events[i] || (this.events[i] = new nu()), this.events[i].add(s));
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
}
class cm extends W1 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = _p));
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
function $1(n) {
  return window.getComputedStyle(n);
}
class H1 extends cm {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Zh));
  }
  readValueFromInstance(i, s) {
    if (_n.has(s)) {
      const l = lu(s);
      return (l && l.default) || 0;
    } else {
      const l = $1(i),
        c = (Xh(s) ? l.getPropertyValue(s) : l[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return bp(i, s);
  }
  build(i, s, l) {
    Ka(i, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return Ya(i, s, l);
  }
}
class K1 extends cm {
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
    if (_n.has(s)) {
      const l = lu(s);
      return (l && l.default) || 0;
    }
    return ((s = bh.has(s) ? s : za(s)), i.getAttribute(s));
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return tp(i, s, l);
  }
  build(i, s, l) {
    Ga(i, s, this.isSVGTag, l.transformTemplate);
  }
  renderInstance(i, s, l, c) {
    Jh(i, s, l, c);
  }
  mount(i) {
    ((this.isSVGTag = Xa(i.tagName)), super.mount(i));
  }
}
const G1 = (n, i) => (Ua(n) ? new K1(i) : new H1(i, { allowProjection: n !== z.Fragment })),
  Q1 = vv({ ...gx, ...F1, ...C1, ...O1 }, G1),
  Bs = Vy(Q1);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X1 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  fm = (...n) =>
    n
      .filter((i, s, l) => !!i && i.trim() !== "" && l.indexOf(i) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Y1 = {
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
 */ const q1 = z.forwardRef(
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
        ...Y1,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: l ? (Number(s) * 24) / Number(i) : s,
        className: fm("lucide", c),
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
 */ const du = (n, i) => {
  const s = z.forwardRef(({ className: l, ...c }, d) =>
    z.createElement(q1, { ref: d, iconNode: i, className: fm(`lucide-${X1(n)}`, l), ...c }),
  );
  return ((s.displayName = `${n}`), s);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xs = du("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = du("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b1 = du("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Lh = [
    { label: "Home", route: "" },
    { label: "About Us", route: "about" },
    { label: "Courses", route: "courses" },
    { label: "Instructors", route: "instructors" },
    { label: "Testimonials", route: "testimonials" },
    { label: "Blog", route: "blog" },
    { label: "Contact us", route: "contact", arrow: !0 },
  ];
function Vh({ className: n = "h-8 w-8" }) {
  return D.jsx("span", {
    className: `inline-flex shrink-0 items-center justify-center rounded-full border-2 border-white ${n}`,
    "aria-hidden": !0,
    children: D.jsx("span", { className: "h-[38%] w-[38%] rounded-full bg-white" }),
  });
}
function J1() {
  const [n, i] = z.useState(!1),
    s = (l) => (c) => {
      (c.preventDefault(), Na(l), i(!1));
    };
  return D.jsxs(D.Fragment, {
    children: [
      D.jsx("header", {
        className: "fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8",
        children: D.jsxs("div", {
          className: "mx-auto flex max-w-7xl items-center justify-between gap-4",
          children: [
            D.jsxs("a", {
              href: Fs(""),
              className: "flex shrink-0 items-center gap-2.5 text-white",
              onClick: s(""),
              "aria-label": "DesignPro home",
              children: [
                D.jsx(Vh, { className: "h-9 w-9" }),
                D.jsx("span", {
                  className: "text-sm font-semibold tracking-tight sm:text-base",
                  children: "DesignPro",
                }),
              ],
            }),
            D.jsx("nav", {
              className: "nav-pill hidden items-center gap-0.5 rounded-full px-1.5 py-1.5 lg:flex",
              "aria-label": "Primary",
              children: Lh.map((l) =>
                D.jsxs(
                  "a",
                  {
                    href: Fs(l.route),
                    className:
                      "flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-white/80 transition-colors hover:text-white",
                    onClick: s(l.route),
                    children: [
                      l.label,
                      "arrow" in l && l.arrow
                        ? D.jsx(Xs, { className: "h-3.5 w-3.5 opacity-80", "aria-hidden": !0 })
                        : null,
                    ],
                  },
                  l.route,
                ),
              ),
            }),
            D.jsx("button", {
              type: "button",
              className:
                "nav-pill flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              onClick: () => i(!0),
              "aria-label": "Open menu",
              children: D.jsx(Z1, { className: "h-5 w-5 text-white" }),
            }),
          ],
        }),
      }),
      D.jsx(Cy, {
        children:
          n &&
          D.jsxs(D.Fragment, {
            children: [
              D.jsx(Bs.button, {
                type: "button",
                className: "fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: () => i(!1),
                "aria-label": "Close menu backdrop",
              }),
              D.jsx(Bs.aside, {
                className:
                  "fixed right-0 top-0 z-[70] flex h-[100dvh] w-[min(88vw,320px)] flex-col lg:hidden",
                initial: { x: "100%" },
                animate: { x: 0 },
                exit: { x: "100%" },
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                children: D.jsxs("div", {
                  className:
                    "flex h-full flex-col border-l border-gray-700 bg-black/95 backdrop-blur-md",
                  children: [
                    D.jsxs("div", {
                      className:
                        "flex items-center justify-between border-b border-gray-800 px-5 py-4",
                      children: [
                        D.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            D.jsx(Vh, { className: "h-8 w-8" }),
                            D.jsx("span", {
                              className: "text-sm font-semibold",
                              children: "DesignPro",
                            }),
                          ],
                        }),
                        D.jsx("button", {
                          type: "button",
                          onClick: () => i(!1),
                          "aria-label": "Close menu",
                          className:
                            "flex h-9 w-9 items-center justify-center rounded-full text-white/80",
                          children: D.jsx(b1, { className: "h-5 w-5" }),
                        }),
                      ],
                    }),
                    D.jsx("nav", {
                      className: "flex flex-1 flex-col gap-1 px-4 py-6",
                      children: Lh.map((l, c) =>
                        D.jsxs(
                          Bs.a,
                          {
                            href: Fs(l.route),
                            className:
                              "flex items-center gap-2 rounded-xl px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5",
                            initial: { opacity: 0, x: 12 },
                            animate: { opacity: 1, x: 0 },
                            transition: { delay: 0.08 + c * 0.05 },
                            onClick: s(l.route),
                            children: [
                              l.label,
                              "arrow" in l && l.arrow
                                ? D.jsx(Xs, { className: "h-4 w-4 opacity-70", "aria-hidden": !0 })
                                : null,
                            ],
                          },
                          l.route,
                        ),
                      ),
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
function yr({ eyebrow: n, title: i, description: s, children: l }) {
  return D.jsx("div", {
    className: "min-h-screen bg-black pt-24 text-white",
    children: D.jsxs("div", {
      className: "mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8",
      children: [
        D.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-white/60", children: n }),
        D.jsx("h1", {
          className: "mt-3 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl",
          children: i,
        }),
        D.jsx("p", {
          className: "mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base",
          children: s,
        }),
        D.jsx("div", { className: "mt-12", children: l }),
        D.jsx("div", {
          className: "mt-16 border-t border-white/10 pt-10",
          children: D.jsxs("button", {
            type: "button",
            onClick: () => Na("contact"),
            className:
              "group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90",
            children: [
              "Apply for Next Enrollment",
              D.jsx(Xs, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" }),
            ],
          }),
        }),
      ],
    }),
  });
}
function ew() {
  return D.jsxs(yr, {
    eyebrow: "About Us",
    title: "Transforming designers into product leaders",
    description:
      "DesignPro partners with industry operators to deliver cohort-based education that blends strategy, craft, and executive communication.",
    children: [
      D.jsx("div", {
        className: "grid gap-6 md:grid-cols-3",
        children: [
          { stat: "8,000+", label: "Alumni placed across product orgs worldwide" },
          { stat: "92%", label: "Graduates report a promotion or new role within 6 months" },
          { stat: "40+", label: "Live mentor sessions per cohort with operator feedback" },
        ].map((n) =>
          D.jsxs(
            "article",
            {
              className: "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm",
              children: [
                D.jsx("p", { className: "text-3xl font-medium tracking-tight", children: n.stat }),
                D.jsx("p", { className: "mt-2 text-sm text-white/70", children: n.label }),
              ],
            },
            n.stat,
          ),
        ),
      }),
      D.jsx("p", {
        className: "mt-10 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base",
        children:
          "Our mission is to close the gap between visual craft and product judgment. Every program pairs studio critiques with business-case drills so graduates can lead roadmaps—not just screens.",
      }),
    ],
  });
}
const tw =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4",
  nw = [
    {
      title: "Product Strategy Sprint",
      duration: "8 weeks",
      level: "Intermediate",
      desc: "Ship portfolio-ready case studies with mentorship from FAANG product leaders.",
    },
    {
      title: "Design Systems Lab",
      duration: "6 weeks",
      level: "Advanced",
      desc: "Build scalable tokens, components, and documentation for cross-platform teams.",
    },
    {
      title: "Leadership Studio",
      duration: "10 weeks",
      level: "Executive",
      desc: "Executive storytelling, stakeholder alignment, and org-level design influence.",
    },
  ],
  rw = [
    { name: "Maya Chen", role: "VP Product, Northwind", focus: "B2B SaaS growth" },
    { name: "Jordan Ellis", role: "Design Director, Lumen", focus: "Systems & accessibility" },
    { name: "Priya Nair", role: "Founder, Framecraft", focus: "Consumer mobile" },
    { name: "Alex Romero", role: "Principal PM, Atlas", focus: "AI-native workflows" },
  ],
  iw = [
    {
      quote:
        "DesignPro reframed how I present product decisions. I landed a senior role within three months of graduating.",
      author: "Sofia M., Product Designer",
    },
    {
      quote:
        "The cohort model and live critiques are unmatched. Every module ends with work you can show hiring managers.",
      author: "Devon K., Associate PM",
    },
    {
      quote:
        "Instructors push you past pixel polish into business impact. That shift alone was worth the tuition.",
      author: "Rina T., Design Lead",
    },
  ],
  sw = [
    {
      title: "How to build a product portfolio that gets interviews",
      date: "Mar 12, 2026",
      tag: "Career",
    },
    { title: "Design systems in the age of AI copilots", date: "Feb 28, 2026", tag: "Systems" },
    {
      title: "From IC to product leader: a 90-day playbook",
      date: "Feb 14, 2026",
      tag: "Leadership",
    },
  ];
function ow() {
  return D.jsx(yr, {
    eyebrow: "Blog",
    title: "Insights for aspiring product leaders",
    description:
      "Essays on portfolios, design systems, and the skills that separate senior ICs from directors.",
    children: D.jsx("ul", {
      className: "divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5",
      children: sw.map((n) =>
        D.jsxs(
          "li",
          {
            className:
              "flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between",
            children: [
              D.jsxs("div", {
                children: [
                  D.jsx("p", {
                    className: "text-xs uppercase tracking-wider text-[#64CEFB]",
                    children: n.tag,
                  }),
                  D.jsx("h2", {
                    className: "mt-1 text-base font-medium sm:text-lg",
                    children: n.title,
                  }),
                ],
              }),
              D.jsx("time", { className: "text-sm text-white/50", children: n.date }),
            ],
          },
          n.title,
        ),
      ),
    }),
  });
}
function lw() {
  return D.jsxs(yr, {
    eyebrow: "Contact us",
    title: "Apply for the next enrollment cohort",
    description:
      "Share your background and goals. Admissions reviews applications on a rolling basis until seats fill.",
    children: [
      D.jsxs("form", {
        className: "max-w-xl space-y-4",
        onSubmit: (n) => {
          n.preventDefault();
        },
        children: [
          D.jsxs("div", {
            className: "grid gap-4 sm:grid-cols-2",
            children: [
              D.jsxs("label", {
                className: "block text-sm text-white/70",
                children: [
                  "First name",
                  D.jsx("input", {
                    type: "text",
                    className:
                      "mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30",
                  }),
                ],
              }),
              D.jsxs("label", {
                className: "block text-sm text-white/70",
                children: [
                  "Last name",
                  D.jsx("input", {
                    type: "text",
                    className:
                      "mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30",
                  }),
                ],
              }),
            ],
          }),
          D.jsxs("label", {
            className: "block text-sm text-white/70",
            children: [
              "Email",
              D.jsx("input", {
                type: "email",
                className:
                  "mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30",
              }),
            ],
          }),
          D.jsxs("label", {
            className: "block text-sm text-white/70",
            children: [
              "Why DesignPro?",
              D.jsx("textarea", {
                rows: 4,
                className:
                  "mt-1.5 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30",
              }),
            ],
          }),
          D.jsx("button", {
            type: "submit",
            className:
              "rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-white/90",
            children: "Submit application",
          }),
        ],
      }),
      D.jsx("p", {
        className: "mt-8 text-sm text-white/50",
        children: "hello@designpro.studio · We respond within 2 business days.",
      }),
    ],
  });
}
function aw() {
  return D.jsx(yr, {
    eyebrow: "Courses",
    title: "Programs built for modern product teams",
    description:
      "Choose a track aligned with your career stage. Each cohort includes live critiques, async labs, and a hiring-ready capstone.",
    children: D.jsx("div", {
      className: "grid gap-5 md:grid-cols-3",
      children: nw.map((n) =>
        D.jsxs(
          "article",
          {
            className: "flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6",
            children: [
              D.jsxs("div", {
                className:
                  "flex items-center justify-between gap-2 text-xs uppercase tracking-wider text-white/50",
                children: [
                  D.jsx("span", { children: n.duration }),
                  D.jsx("span", { children: n.level }),
                ],
              }),
              D.jsx("h2", {
                className: "mt-4 text-xl font-medium tracking-tight",
                children: n.title,
              }),
              D.jsx("p", {
                className: "mt-3 flex-1 text-sm leading-relaxed text-white/70",
                children: n.desc,
              }),
            ],
          },
          n.title,
        ),
      ),
    }),
  });
}
function uw({ children: n, className: i = "" }) {
  return D.jsx(Bs.span, {
    className: `inline-block bg-clip-text text-transparent ${i}`,
    style: {
      backgroundImage:
        "linear-gradient(100deg, #64CEFB 0%, #64CEFB 30%, #ffffff 50%, #64CEFB 70%, #64CEFB 100%)",
      backgroundSize: "200% 100%",
      WebkitBackgroundClip: "text",
    },
    animate: { backgroundPosition: ["200% 0%", "-200% 0%"] },
    transition: { duration: 3, repeat: 1 / 0, ease: "linear" },
    children: n,
  });
}
function cw() {
  return D.jsxs("section", {
    className: "relative h-screen overflow-hidden bg-black",
    children: [
      D.jsx("video", {
        autoPlay: !0,
        loop: !0,
        muted: !0,
        playsInline: !0,
        className: "absolute inset-0 h-full w-full object-cover",
        children: D.jsx("source", { src: tw, type: "video/mp4" }),
      }),
      D.jsx("div", {
        className: "hero-vignette pointer-events-none absolute inset-0",
        "aria-hidden": !0,
      }),
      D.jsxs("div", {
        className:
          "relative z-10 mx-auto flex h-full max-w-7xl flex-col px-4 pb-10 pt-24 sm:px-6 lg:px-8",
        children: [
          D.jsxs("div", {
            className: "grid gap-4 lg:grid-cols-2 lg:gap-8",
            children: [
              D.jsx("p", {
                className: "text-sm text-white/80 sm:text-base",
                children:
                  "We deliver transformative programs that empower emerging product designers with cutting-edge expertise and vision to thrive globally.",
              }),
              D.jsx("p", {
                className: "text-sm text-white/80 sm:text-base lg:text-right",
                children: "8000+ Talented Designers Launched !",
              }),
            ],
          }),
          D.jsxs("div", {
            className: "flex flex-1 flex-col items-center justify-center text-center",
            children: [
              D.jsx("p", {
                className: "mb-4 text-xs uppercase tracking-tight text-white/80 sm:text-sm",
                children: "Seats for Next Program Opening Soon",
              }),
              D.jsxs("h1", {
                className: "font-medium leading-[0.85] tracking-tighter text-white",
                style: { fontSize: "clamp(3rem, 8vw, 8rem)" },
                children: [
                  D.jsx("span", { className: "block", children: "Become" }),
                  D.jsx("span", {
                    className: "block",
                    children: D.jsx(uw, { children: "Product Leader." }),
                  }),
                ],
              }),
              D.jsxs("button", {
                type: "button",
                onClick: () => Na("contact"),
                className:
                  "group mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 md:px-8 md:py-4 md:text-base",
                children: [
                  "Apply for Next Enrollment",
                  D.jsx(Xs, {
                    className: "h-5 w-5 transition-transform group-hover:translate-x-1",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function fw() {
  return D.jsx(cw, {});
}
function dw() {
  return D.jsx(yr, {
    eyebrow: "Instructors",
    title: "Learn from operators who ship at scale",
    description:
      "Our faculty includes design directors, VPs of product, and founders who still run weekly critiques with cohorts.",
    children: D.jsx("div", {
      className: "grid gap-4 sm:grid-cols-2",
      children: rw.map((n) =>
        D.jsxs(
          "article",
          {
            className: "rounded-2xl border border-white/10 bg-white/5 p-6",
            children: [
              D.jsx("h2", { className: "text-lg font-medium", children: n.name }),
              D.jsx("p", { className: "mt-1 text-sm text-white/60", children: n.role }),
              D.jsxs("p", {
                className: "mt-3 text-sm text-white/75",
                children: ["Focus: ", n.focus],
              }),
            ],
          },
          n.name,
        ),
      ),
    }),
  });
}
function hw() {
  return D.jsx(yr, {
    eyebrow: "Testimonials",
    title: "Outcomes our alumni talk about",
    description:
      "Graduates join product orgs at startups and enterprises with portfolios and narratives that hiring panels remember.",
    children: D.jsx("div", {
      className: "grid gap-5 md:grid-cols-3",
      children: iw.map((n) =>
        D.jsxs(
          "blockquote",
          {
            className: "rounded-2xl border border-white/10 bg-white/5 p-6",
            children: [
              D.jsxs("p", {
                className: "text-sm leading-relaxed text-white/85",
                children: ["“", n.quote, "”"],
              }),
              D.jsx("footer", {
                className: "mt-4 text-xs font-medium uppercase tracking-wide text-white/50",
                children: n.author,
              }),
            ],
          },
          n.author,
        ),
      ),
    }),
  });
}
function pw() {
  return (
    z.useEffect(() => {
      _h();
    }, []),
    D.jsxs("div", {
      className: "min-h-screen bg-black text-white",
      children: [
        D.jsx(J1, {}),
        D.jsx("main", {
          children: D.jsx(wy, {
            routes: {
              "": D.jsx(fw, {}),
              about: D.jsx(ew, {}),
              courses: D.jsx(aw, {}),
              instructors: D.jsx(dw, {}),
              testimonials: D.jsx(hw, {}),
              blog: D.jsx(ow, {}),
              contact: D.jsx(lw, {}),
            },
          }),
        }),
        D.jsx("footer", {
          className: "border-t border-white/10 px-4 py-8 text-center text-sm text-white/50 sm:px-6",
          children: D.jsxs("p", {
            children: ["© ", new Date().getFullYear(), " DesignPro — Product design education"],
          }),
        }),
      ],
    })
  );
}
gy.createRoot(document.getElementById("root")).render(
  D.jsx(z.StrictMode, { children: D.jsx(pw, {}) }),
);
