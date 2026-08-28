(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) a(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const f of d.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && a(f);
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
  function a(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = s(c);
    fetch(c.href, d);
  }
})();
var Xl = { exports: {} },
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
 */ var id;
function cy() {
  if (id) return se;
  id = 1;
  var n = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
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
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    D = {};
  function j(k, M, re) {
    ((this.props = k), (this.context = M), (this.refs = D), (this.updater = re || R));
  }
  ((j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (k, M) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, k, M, "setState");
    }),
    (j.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    }));
  function I() {}
  I.prototype = j.prototype;
  function W(k, M, re) {
    ((this.props = k), (this.context = M), (this.refs = D), (this.updater = re || R));
  }
  var G = (W.prototype = new I());
  ((G.constructor = W), _(G, j.prototype), (G.isPureReactComponent = !0));
  var te = Array.isArray,
    Y = Object.prototype.hasOwnProperty,
    ne = { current: null },
    ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(k, M, re) {
    var oe,
      ue = {},
      ce = null,
      pe = null;
    if (M != null)
      for (oe in (M.ref !== void 0 && (pe = M.ref), M.key !== void 0 && (ce = "" + M.key), M))
        Y.call(M, oe) && !ae.hasOwnProperty(oe) && (ue[oe] = M[oe]);
    var de = arguments.length - 2;
    if (de === 1) ue.children = re;
    else if (1 < de) {
      for (var xe = Array(de), st = 0; st < de; st++) xe[st] = arguments[st + 2];
      ue.children = xe;
    }
    if (k && k.defaultProps)
      for (oe in ((de = k.defaultProps), de)) ue[oe] === void 0 && (ue[oe] = de[oe]);
    return { $$typeof: n, type: k, key: ce, ref: pe, props: ue, _owner: ne.current };
  }
  function Se(k, M) {
    return { $$typeof: n, type: k.type, key: M, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Ee(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }
  function qe(k) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (re) {
        return M[re];
      })
    );
  }
  var it = /\/+/g;
  function Ge(k, M) {
    return typeof k == "object" && k !== null && k.key != null ? qe("" + k.key) : M.toString(36);
  }
  function Ze(k, M, re, oe, ue) {
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
        te(ue)
          ? ((re = ""),
            k != null && (re = k.replace(it, "$&/") + "/"),
            Ze(ue, M, re, "", function (st) {
              return st;
            }))
          : ue != null &&
            (Ee(ue) &&
              (ue = Se(
                ue,
                re +
                  (!ue.key || (pe && pe.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(it, "$&/") + "/") +
                  k,
              )),
            M.push(ue)),
        1
      );
    if (((pe = 0), (oe = oe === "" ? "." : oe + ":"), te(k)))
      for (var de = 0; de < k.length; de++) {
        ce = k[de];
        var xe = oe + Ge(ce, de);
        pe += Ze(ce, M, re, xe, ue);
      }
    else if (((xe = P(k)), typeof xe == "function"))
      for (k = xe.call(k), de = 0; !(ce = k.next()).done;)
        ((ce = ce.value), (xe = oe + Ge(ce, de++)), (pe += Ze(ce, M, re, xe, ue)));
    else if (ce === "object")
      throw (
        (M = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : M) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return pe;
  }
  function wt(k, M, re) {
    if (k == null) return k;
    var oe = [],
      ue = 0;
    return (
      Ze(k, oe, "", "", function (ce) {
        return M.call(re, ce, ue++);
      }),
      oe
    );
  }
  function Qe(k) {
    if (k._status === -1) {
      var M = k._result;
      ((M = M()),
        M.then(
          function (re) {
            (k._status === 0 || k._status === -1) && ((k._status = 1), (k._result = re));
          },
          function (re) {
            (k._status === 0 || k._status === -1) && ((k._status = 2), (k._result = re));
          },
        ),
        k._status === -1 && ((k._status = 0), (k._result = M)));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ie = { current: null },
    O = { transition: null },
    X = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: O, ReactCurrentOwner: ne };
  function B() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (se.Children = {
      map: wt,
      forEach: function (k, M, re) {
        wt(
          k,
          function () {
            M.apply(this, arguments);
          },
          re,
        );
      },
      count: function (k) {
        var M = 0;
        return (
          wt(k, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (k) {
        return (
          wt(k, function (M) {
            return M;
          }) || []
        );
      },
      only: function (k) {
        if (!Ee(k))
          throw Error("React.Children.only expected to receive a single React element child.");
        return k;
      },
    }),
    (se.Component = j),
    (se.Fragment = s),
    (se.Profiler = c),
    (se.PureComponent = W),
    (se.StrictMode = a),
    (se.Suspense = m),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (se.act = B),
    (se.cloneElement = function (k, M, re) {
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
      if (M != null) {
        if (
          (M.ref !== void 0 && ((ce = M.ref), (pe = ne.current)),
          M.key !== void 0 && (ue = "" + M.key),
          k.type && k.type.defaultProps)
        )
          var de = k.type.defaultProps;
        for (xe in M)
          Y.call(M, xe) &&
            !ae.hasOwnProperty(xe) &&
            (oe[xe] = M[xe] === void 0 && de !== void 0 ? de[xe] : M[xe]);
      }
      var xe = arguments.length - 2;
      if (xe === 1) oe.children = re;
      else if (1 < xe) {
        de = Array(xe);
        for (var st = 0; st < xe; st++) de[st] = arguments[st + 2];
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
    (se.createElement = J),
    (se.createFactory = function (k) {
      var M = J.bind(null, k);
      return ((M.type = k), M);
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (k) {
      return { $$typeof: p, render: k };
    }),
    (se.isValidElement = Ee),
    (se.lazy = function (k) {
      return { $$typeof: y, _payload: { _status: -1, _result: k }, _init: Qe };
    }),
    (se.memo = function (k, M) {
      return { $$typeof: g, type: k, compare: M === void 0 ? null : M };
    }),
    (se.startTransition = function (k) {
      var M = O.transition;
      O.transition = {};
      try {
        k();
      } finally {
        O.transition = M;
      }
    }),
    (se.unstable_act = B),
    (se.useCallback = function (k, M) {
      return ie.current.useCallback(k, M);
    }),
    (se.useContext = function (k) {
      return ie.current.useContext(k);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (k) {
      return ie.current.useDeferredValue(k);
    }),
    (se.useEffect = function (k, M) {
      return ie.current.useEffect(k, M);
    }),
    (se.useId = function () {
      return ie.current.useId();
    }),
    (se.useImperativeHandle = function (k, M, re) {
      return ie.current.useImperativeHandle(k, M, re);
    }),
    (se.useInsertionEffect = function (k, M) {
      return ie.current.useInsertionEffect(k, M);
    }),
    (se.useLayoutEffect = function (k, M) {
      return ie.current.useLayoutEffect(k, M);
    }),
    (se.useMemo = function (k, M) {
      return ie.current.useMemo(k, M);
    }),
    (se.useReducer = function (k, M, re) {
      return ie.current.useReducer(k, M, re);
    }),
    (se.useRef = function (k) {
      return ie.current.useRef(k);
    }),
    (se.useState = function (k) {
      return ie.current.useState(k);
    }),
    (se.useSyncExternalStore = function (k, M, re) {
      return ie.current.useSyncExternalStore(k, M, re);
    }),
    (se.useTransition = function () {
      return ie.current.useTransition();
    }),
    (se.version = "18.3.1"),
    se
  );
}
var sd;
function Da() {
  return (sd || ((sd = 1), (ql.exports = cy())), ql.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var od;
function fy() {
  if (od) return ii;
  od = 1;
  var n = Da(),
    i = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, g) {
    var y,
      x = {},
      P = null,
      R = null;
    (g !== void 0 && (P = "" + g),
      m.key !== void 0 && (P = "" + m.key),
      m.ref !== void 0 && (R = m.ref));
    for (y in m) a.call(m, y) && !d.hasOwnProperty(y) && (x[y] = m[y]);
    if (p && p.defaultProps) for (y in ((m = p.defaultProps), m)) x[y] === void 0 && (x[y] = m[y]);
    return { $$typeof: i, type: p, key: P, ref: R, props: x, _owner: c.current };
  }
  return ((ii.Fragment = s), (ii.jsx = f), (ii.jsxs = f), ii);
}
var ld;
function dy() {
  return (ld || ((ld = 1), (Xl.exports = fy())), Xl.exports);
}
var A = dy(),
  H = Da(),
  Ls = {},
  Zl = { exports: {} },
  rt = {},
  Jl = { exports: {} },
  bl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad;
function hy() {
  return (
    ad ||
      ((ad = 1),
      (function (n) {
        function i(O, X) {
          var B = O.length;
          O.push(X);
          e: for (; 0 < B;) {
            var k = (B - 1) >>> 1,
              M = O[k];
            if (0 < c(M, X)) ((O[k] = X), (O[B] = M), (B = k));
            else break e;
          }
        }
        function s(O) {
          return O.length === 0 ? null : O[0];
        }
        function a(O) {
          if (O.length === 0) return null;
          var X = O[0],
            B = O.pop();
          if (B !== X) {
            O[0] = B;
            e: for (var k = 0, M = O.length, re = M >>> 1; k < re;) {
              var oe = 2 * (k + 1) - 1,
                ue = O[oe],
                ce = oe + 1,
                pe = O[ce];
              if (0 > c(ue, B))
                ce < M && 0 > c(pe, ue)
                  ? ((O[k] = pe), (O[ce] = B), (k = ce))
                  : ((O[k] = ue), (O[oe] = B), (k = oe));
              else if (ce < M && 0 > c(pe, B)) ((O[k] = pe), (O[ce] = B), (k = ce));
              else break e;
            }
          }
          return X;
        }
        function c(O, X) {
          var B = O.sortIndex - X.sortIndex;
          return B !== 0 ? B : O.id - X.id;
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
          R = !1,
          _ = !1,
          D = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function G(O) {
          for (var X = s(g); X !== null;) {
            if (X.callback === null) a(g);
            else if (X.startTime <= O) (a(g), (X.sortIndex = X.expirationTime), i(m, X));
            else break;
            X = s(g);
          }
        }
        function te(O) {
          if (((D = !1), G(O), !_))
            if (s(m) !== null) ((_ = !0), Qe(Y));
            else {
              var X = s(g);
              X !== null && ie(te, X.startTime - O);
            }
        }
        function Y(O, X) {
          ((_ = !1), D && ((D = !1), I(J), (J = -1)), (R = !0));
          var B = P;
          try {
            for (G(X), x = s(m); x !== null && (!(x.expirationTime > X) || (O && !qe()));) {
              var k = x.callback;
              if (typeof k == "function") {
                ((x.callback = null), (P = x.priorityLevel));
                var M = k(x.expirationTime <= X);
                ((X = n.unstable_now()),
                  typeof M == "function" ? (x.callback = M) : x === s(m) && a(m),
                  G(X));
              } else a(m);
              x = s(m);
            }
            if (x !== null) var re = !0;
            else {
              var oe = s(g);
              (oe !== null && ie(te, oe.startTime - X), (re = !1));
            }
            return re;
          } finally {
            ((x = null), (P = B), (R = !1));
          }
        }
        var ne = !1,
          ae = null,
          J = -1,
          Se = 5,
          Ee = -1;
        function qe() {
          return !(n.unstable_now() - Ee < Se);
        }
        function it() {
          if (ae !== null) {
            var O = n.unstable_now();
            Ee = O;
            var X = !0;
            try {
              X = ae(!0, O);
            } finally {
              X ? Ge() : ((ne = !1), (ae = null));
            }
          } else ne = !1;
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
            j(it, 0);
          };
        function Qe(O) {
          ((ae = O), ne || ((ne = !0), Ge()));
        }
        function ie(O, X) {
          J = j(function () {
            O(n.unstable_now());
          }, X);
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
            _ || R || ((_ = !0), Qe(Y));
          }),
          (n.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Se = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return P;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (n.unstable_next = function (O) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = P;
            }
            var B = P;
            P = X;
            try {
              return O();
            } finally {
              P = B;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (O, X) {
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
            var B = P;
            P = O;
            try {
              return X();
            } finally {
              P = B;
            }
          }),
          (n.unstable_scheduleCallback = function (O, X, B) {
            var k = n.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? k + B : k))
                : (B = k),
              O)
            ) {
              case 1:
                var M = -1;
                break;
              case 2:
                M = 250;
                break;
              case 5:
                M = 1073741823;
                break;
              case 4:
                M = 1e4;
                break;
              default:
                M = 5e3;
            }
            return (
              (M = B + M),
              (O = {
                id: y++,
                callback: X,
                priorityLevel: O,
                startTime: B,
                expirationTime: M,
                sortIndex: -1,
              }),
              B > k
                ? ((O.sortIndex = B),
                  i(g, O),
                  s(m) === null && O === s(g) && (D ? (I(J), (J = -1)) : (D = !0), ie(te, B - k)))
                : ((O.sortIndex = M), i(m, O), _ || R || ((_ = !0), Qe(Y))),
              O
            );
          }),
          (n.unstable_shouldYield = qe),
          (n.unstable_wrapCallback = function (O) {
            var X = P;
            return function () {
              var B = P;
              P = X;
              try {
                return O.apply(this, arguments);
              } finally {
                P = B;
              }
            };
          }));
      })(bl)),
    bl
  );
}
var ud;
function py() {
  return (ud || ((ud = 1), (Jl.exports = hy())), Jl.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cd;
function my() {
  if (cd) return rt;
  cd = 1;
  var n = Da(),
    i = py();
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
  var a = new Set(),
    c = {};
  function d(e, t) {
    (f(e, t), f(e + "Capture", t));
  }
  function f(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
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
  function D(e, t, r, o, l, u, h) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = l),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
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
  function G(e, t, r, o) {
    var l = j.hasOwnProperty(t) ? j[t] : null;
    (l !== null
      ? l.type !== 0
      : o || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (_(t, r, l, o) && (r = null),
      o || l === null
        ? P(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : l.mustUseProperty
          ? (e[l.propertyName] = r === null ? (l.type === 3 ? !1 : "") : r)
          : ((t = l.attributeName),
            (o = l.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (r = l === 3 || (l === 4 && r === !0) ? "" : "" + r),
                o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))));
  }
  var te = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Y = Symbol.for("react.element"),
    ne = Symbol.for("react.portal"),
    ae = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    Se = Symbol.for("react.profiler"),
    Ee = Symbol.for("react.provider"),
    qe = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    Ge = Symbol.for("react.suspense"),
    Ze = Symbol.for("react.suspense_list"),
    wt = Symbol.for("react.memo"),
    Qe = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    O = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (O && e[O]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var B = Object.assign,
    k;
  function M(e) {
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
          var l = C.stack.split(`
`),
            u = o.stack.split(`
`),
            h = l.length - 1,
            v = u.length - 1;
          1 <= h && 0 <= v && l[h] !== u[v];
        )
          v--;
        for (; 1 <= h && 0 <= v; h--, v--)
          if (l[h] !== u[v]) {
            if (h !== 1 || v !== 1)
              do
                if ((h--, v--, 0 > v || l[h] !== u[v])) {
                  var w =
                    `
` + l[h].replace(" at new ", " at ");
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
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return M(e.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
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
      case J:
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
        case Ee:
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
        return t === J ? "StrictMode" : "Mode";
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
  function xe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function st(e) {
    var t = xe(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var l = r.get,
        u = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
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
  function Ei(e) {
    e._valueTracker || (e._valueTracker = st(e));
  }
  function uu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = "";
    return (
      e && (o = xe(e) ? (e.checked ? "true" : "false") : e.value),
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
  function to(e, t) {
    var r = t.checked;
    return B({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function cu(e, t) {
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
  function fu(e, t) {
    ((t = t.checked), t != null && G(e, "checked", t, !1));
  }
  function no(e, t) {
    fu(e, t);
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
  function du(e, t, r) {
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
    (t !== "number" || Ci(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var xr = Array.isArray;
  function In(e, t, r, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
      for (r = 0; r < e.length; r++)
        ((l = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== l && (e[r].selected = l),
          l && o && (e[r].defaultSelected = !0));
    } else {
      for (r = "" + de(r), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === r) {
          ((e[l].selected = !0), o && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function io(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return B({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function hu(e, t) {
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
  function pu(e, t) {
    var r = de(t.value),
      o = de(t.defaultValue);
    (r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = "" + o));
  }
  function mu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function gu(e) {
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
      ? gu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ai,
    yu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, o, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, o, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (
          Ai = Ai || document.createElement("div"),
            Ai.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ai.firstChild;
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
    pm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Sr).forEach(function (e) {
    pm.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sr[t] = Sr[e]));
    });
  });
  function vu(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Sr.hasOwnProperty(e) && Sr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function xu(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf("--") === 0,
          l = vu(r, t[r], o);
        (r === "float" && (r = "cssFloat"), o ? e.setProperty(r, l) : (e[r] = l));
      }
  }
  var mm = B(
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
      if (mm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    zn = null;
  function wu(e) {
    if ((e = $r(e))) {
      if (typeof co != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = qi(t)), co(e.stateNode, e.type, t));
    }
  }
  function Su(e) {
    On ? (zn ? zn.push(e) : (zn = [e])) : (On = e);
  }
  function Pu() {
    if (On) {
      var e = On,
        t = zn;
      if (((zn = On = null), wu(e), t)) for (e = 0; e < t.length; e++) wu(t[e]);
    }
  }
  function ku(e, t) {
    return e(t);
  }
  function Tu() {}
  var fo = !1;
  function Eu(e, t, r) {
    if (fo) return e(t, r);
    fo = !0;
    try {
      return ku(e, t, r);
    } finally {
      ((fo = !1), (On !== null || zn !== null) && (Tu(), Pu()));
    }
  }
  function Pr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = qi(r);
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
      var kr = {};
      (Object.defineProperty(kr, "passive", {
        get: function () {
          ho = !0;
        },
      }),
        window.addEventListener("test", kr, kr),
        window.removeEventListener("test", kr, kr));
    } catch {
      ho = !1;
    }
  function gm(e, t, r, o, l, u, h, v, w) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, C);
    } catch (V) {
      this.onError(V);
    }
  }
  var Tr = !1,
    Ri = null,
    Di = !1,
    po = null,
    ym = {
      onError: function (e) {
        ((Tr = !0), (Ri = e));
      },
    };
  function vm(e, t, r, o, l, u, h, v, w) {
    ((Tr = !1), (Ri = null), gm.apply(ym, arguments));
  }
  function xm(e, t, r, o, l, u, h, v, w) {
    if ((vm.apply(this, arguments), Tr)) {
      if (Tr) {
        var C = Ri;
        ((Tr = !1), (Ri = null));
      } else throw Error(s(198));
      Di || ((Di = !0), (po = C));
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
  function Cu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Au(e) {
    if (vn(e) !== e) throw Error(s(188));
  }
  function wm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = vn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var r = e, o = t; ;) {
      var l = r.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((o = l.return), o !== null)) {
          r = o;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u;) {
          if (u === r) return (Au(l), e);
          if (u === o) return (Au(l), t);
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== o.return) ((r = l), (o = u));
      else {
        for (var h = !1, v = l.child; v;) {
          if (v === r) {
            ((h = !0), (r = l), (o = u));
            break;
          }
          if (v === o) {
            ((h = !0), (o = l), (r = u));
            break;
          }
          v = v.sibling;
        }
        if (!h) {
          for (v = u.child; v;) {
            if (v === r) {
              ((h = !0), (r = u), (o = l));
              break;
            }
            if (v === o) {
              ((h = !0), (o = u), (r = l));
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
  function Ru(e) {
    return ((e = wm(e)), e !== null ? Du(e) : null);
  }
  function Du(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Du(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Nu = i.unstable_scheduleCallback,
    Mu = i.unstable_cancelCallback,
    Sm = i.unstable_shouldYield,
    Pm = i.unstable_requestPaint,
    Re = i.unstable_now,
    km = i.unstable_getCurrentPriorityLevel,
    mo = i.unstable_ImmediatePriority,
    Vu = i.unstable_UserBlockingPriority,
    Ni = i.unstable_NormalPriority,
    Tm = i.unstable_LowPriority,
    _u = i.unstable_IdlePriority,
    Mi = null,
    Dt = null;
  function Em(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
      try {
        Dt.onCommitFiberRoot(Mi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : Rm,
    Cm = Math.log,
    Am = Math.LN2;
  function Rm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Cm(e) / Am) | 0)) | 0);
  }
  var Vi = 64,
    _i = 4194304;
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
      l = e.suspendedLanes,
      u = e.pingedLanes,
      h = r & 268435455;
    if (h !== 0) {
      var v = h & ~l;
      v !== 0 ? (o = Er(v)) : ((u &= h), u !== 0 && (o = Er(u)));
    } else ((h = r & ~l), h !== 0 ? (o = Er(h)) : u !== 0 && (o = Er(u)));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & l) === 0 &&
      ((l = o & -o), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t;)
        ((r = 31 - St(t)), (l = 1 << r), (o |= e[r]), (t &= ~l));
    return o;
  }
  function Dm(e, t) {
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
      var r = e.suspendedLanes, o = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var h = 31 - St(u),
        v = 1 << h,
        w = l[h];
      (w === -1
        ? ((v & r) === 0 || (v & o) !== 0) && (l[h] = Dm(v, t))
        : w <= t && (e.expiredLanes |= v),
        (u &= ~v));
    }
  }
  function go(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ju() {
    var e = Vi;
    return ((Vi <<= 1), (Vi & 4194240) === 0 && (Vi = 64), e);
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
  function Mm(e, t) {
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
      var l = 31 - St(r),
        u = 1 << l;
      ((t[l] = 0), (o[l] = -1), (e[l] = -1), (r &= ~u));
    }
  }
  function vo(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r;) {
      var o = 31 - St(r),
        l = 1 << o;
      ((l & t) | (e[o] & t) && (e[o] |= t), (r &= ~l));
    }
  }
  var he = 0;
  function Lu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Fu,
    xo,
    Iu,
    Ou,
    zu,
    wo = !1,
    Li = [],
    Yt = null,
    Xt = null,
    qt = null,
    Ar = new Map(),
    Rr = new Map(),
    Zt = [],
    Vm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Bu(e, t) {
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
        qt = null;
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
  function Dr(e, t, r, o, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = $r(t)), t !== null && xo(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function _m(e, t, r, o, l) {
    switch (t) {
      case "focusin":
        return ((Yt = Dr(Yt, e, t, r, o, l)), !0);
      case "dragenter":
        return ((Xt = Dr(Xt, e, t, r, o, l)), !0);
      case "mouseover":
        return ((qt = Dr(qt, e, t, r, o, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (Ar.set(u, Dr(Ar.get(u) || null, e, t, r, o, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), Rr.set(u, Dr(Rr.get(u) || null, e, t, r, o, l)), !0);
    }
    return !1;
  }
  function Uu(e) {
    var t = xn(e.target);
    if (t !== null) {
      var r = vn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Cu(r)), t !== null)) {
            ((e.blockedOn = t),
              zu(e.priority, function () {
                Iu(r);
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
  function Fi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var r = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((ao = o), r.target.dispatchEvent(o), (ao = null));
      } else return ((t = $r(r)), t !== null && xo(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Wu(e, t, r) {
    Fi(e) && r.delete(t);
  }
  function jm() {
    ((wo = !1),
      Yt !== null && Fi(Yt) && (Yt = null),
      Xt !== null && Fi(Xt) && (Xt = null),
      qt !== null && Fi(qt) && (qt = null),
      Ar.forEach(Wu),
      Rr.forEach(Wu));
  }
  function Nr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      wo || ((wo = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, jm)));
  }
  function Mr(e) {
    function t(l) {
      return Nr(l, e);
    }
    if (0 < Li.length) {
      Nr(Li[0], e);
      for (var r = 1; r < Li.length; r++) {
        var o = Li[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Yt !== null && Nr(Yt, e),
        Xt !== null && Nr(Xt, e),
        qt !== null && Nr(qt, e),
        Ar.forEach(t),
        Rr.forEach(t),
        r = 0;
      r < Zt.length;
      r++
    )
      ((o = Zt[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < Zt.length && ((r = Zt[0]), r.blockedOn === null);)
      (Uu(r), r.blockedOn === null && Zt.shift());
  }
  var Bn = te.ReactCurrentBatchConfig,
    Ii = !0;
  function Lm(e, t, r, o) {
    var l = he,
      u = Bn.transition;
    Bn.transition = null;
    try {
      ((he = 1), So(e, t, r, o));
    } finally {
      ((he = l), (Bn.transition = u));
    }
  }
  function Fm(e, t, r, o) {
    var l = he,
      u = Bn.transition;
    Bn.transition = null;
    try {
      ((he = 4), So(e, t, r, o));
    } finally {
      ((he = l), (Bn.transition = u));
    }
  }
  function So(e, t, r, o) {
    if (Ii) {
      var l = Po(e, t, r, o);
      if (l === null) (zo(e, t, o, Oi, r), Bu(e, o));
      else if (_m(l, e, t, r, o)) o.stopPropagation();
      else if ((Bu(e, o), t & 4 && -1 < Vm.indexOf(e))) {
        for (; l !== null;) {
          var u = $r(l);
          if (
            (u !== null && Fu(u), (u = Po(e, t, r, o)), u === null && zo(e, t, o, Oi, r), u === l)
          )
            break;
          l = u;
        }
        l !== null && o.stopPropagation();
      } else zo(e, t, o, null, r);
    }
  }
  var Oi = null;
  function Po(e, t, r, o) {
    if (((Oi = null), (e = uo(o)), (e = xn(e)), e !== null))
      if (((t = vn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Cu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Oi = e), null);
  }
  function $u(e) {
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
        switch (km()) {
          case mo:
            return 1;
          case Vu:
            return 4;
          case Ni:
          case Tm:
            return 16;
          case _u:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jt = null,
    ko = null,
    zi = null;
  function Hu() {
    if (zi) return zi;
    var e,
      t = ko,
      r = t.length,
      o,
      l = "value" in Jt ? Jt.value : Jt.textContent,
      u = l.length;
    for (e = 0; e < r && t[e] === l[e]; e++);
    var h = r - e;
    for (o = 1; o <= h && t[r - o] === l[u - o]; o++);
    return (zi = l.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Bi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ui() {
    return !0;
  }
  function Ku() {
    return !1;
  }
  function ot(e) {
    function t(r, o, l, u, h) {
      ((this._reactName = r),
        (this._targetInst = l),
        (this.type = o),
        (this.nativeEvent = u),
        (this.target = h),
        (this.currentTarget = null));
      for (var v in e) e.hasOwnProperty(v) && ((r = e[v]), (this[v] = r ? r(u) : u[v]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ui
          : Ku),
        (this.isPropagationStopped = Ku),
        this
      );
    }
    return (
      B(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Ui));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Ui));
        },
        persist: function () {},
        isPersistent: Ui,
      }),
      t
    );
  }
  var Un = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    To = ot(Un),
    Vr = B({}, Un, { view: 0, detail: 0 }),
    Im = ot(Vr),
    Eo,
    Co,
    _r,
    Wi = B({}, Vr, {
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
          : (e !== _r &&
              (_r && e.type === "mousemove"
                ? ((Eo = e.screenX - _r.screenX), (Co = e.screenY - _r.screenY))
                : (Co = Eo = 0),
              (_r = e)),
            Eo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Co;
      },
    }),
    Gu = ot(Wi),
    Om = B({}, Wi, { dataTransfer: 0 }),
    zm = ot(Om),
    Bm = B({}, Vr, { relatedTarget: 0 }),
    Ao = ot(Bm),
    Um = B({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wm = ot(Um),
    $m = B({}, Un, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Hm = ot($m),
    Km = B({}, Un, { data: 0 }),
    Qu = ot(Km),
    Gm = {
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
    Qm = {
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
    Ym = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Xm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ym[e]) ? !!t[e] : !1;
  }
  function Ro() {
    return Xm;
  }
  var qm = B({}, Vr, {
      key: function (e) {
        if (e.key) {
          var t = Gm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Bi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Qm[e.keyCode] || "Unidentified"
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
        return e.type === "keypress" ? Bi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Bi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Zm = ot(qm),
    Jm = B({}, Wi, {
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
    Yu = ot(Jm),
    bm = B({}, Vr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ro,
    }),
    eg = ot(bm),
    tg = B({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ng = ot(tg),
    rg = B({}, Wi, {
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
    ig = ot(rg),
    sg = [9, 13, 27, 32],
    Do = p && "CompositionEvent" in window,
    jr = null;
  p && "documentMode" in document && (jr = document.documentMode);
  var og = p && "TextEvent" in window && !jr,
    Xu = p && (!Do || (jr && 8 < jr && 11 >= jr)),
    qu = " ",
    Zu = !1;
  function Ju(e, t) {
    switch (e) {
      case "keyup":
        return sg.indexOf(t.keyCode) !== -1;
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
  function bu(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var Wn = !1;
  function lg(e, t) {
    switch (e) {
      case "compositionend":
        return bu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Zu = !0), qu);
      case "textInput":
        return ((e = t.data), e === qu && Zu ? null : e);
      default:
        return null;
    }
  }
  function ag(e, t) {
    if (Wn)
      return e === "compositionend" || (!Do && Ju(e, t))
        ? ((e = Hu()), (zi = ko = Jt = null), (Wn = !1), e)
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
        return Xu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ug = {
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
  function ec(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ug[e.type] : t === "textarea";
  }
  function tc(e, t, r, o) {
    (Su(o),
      (t = Qi(t, "onChange")),
      0 < t.length &&
        ((r = new To("onChange", "change", null, r, o)), e.push({ event: r, listeners: t })));
  }
  var Lr = null,
    Fr = null;
  function cg(e) {
    xc(e, 0);
  }
  function $i(e) {
    var t = Qn(e);
    if (uu(t)) return e;
  }
  function fg(e, t) {
    if (e === "change") return t;
  }
  var nc = !1;
  if (p) {
    var No;
    if (p) {
      var Mo = "oninput" in document;
      if (!Mo) {
        var rc = document.createElement("div");
        (rc.setAttribute("oninput", "return;"), (Mo = typeof rc.oninput == "function"));
      }
      No = Mo;
    } else No = !1;
    nc = No && (!document.documentMode || 9 < document.documentMode);
  }
  function ic() {
    Lr && (Lr.detachEvent("onpropertychange", sc), (Fr = Lr = null));
  }
  function sc(e) {
    if (e.propertyName === "value" && $i(Fr)) {
      var t = [];
      (tc(t, Fr, e, uo(e)), Eu(cg, t));
    }
  }
  function dg(e, t, r) {
    e === "focusin"
      ? (ic(), (Lr = t), (Fr = r), Lr.attachEvent("onpropertychange", sc))
      : e === "focusout" && ic();
  }
  function hg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return $i(Fr);
  }
  function pg(e, t) {
    if (e === "click") return $i(t);
  }
  function mg(e, t) {
    if (e === "input" || e === "change") return $i(t);
  }
  function gg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Pt = typeof Object.is == "function" ? Object.is : gg;
  function Ir(e, t) {
    if (Pt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var l = r[o];
      if (!m.call(t, l) || !Pt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function oc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function lc(e, t) {
    var r = oc(e);
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
      r = oc(r);
    }
  }
  function ac(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ac(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function uc() {
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
  function yg(e) {
    var t = uc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && ac(r.ownerDocument.documentElement, r)) {
      if (o !== null && Vo(r)) {
        if (((t = o.start), (e = o.end), e === void 0 && (e = t), "selectionStart" in r))
          ((r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length)));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var l = r.textContent.length,
            u = Math.min(o.start, l);
          ((o = o.end === void 0 ? u : Math.min(o.end, l)),
            !e.extend && u > o && ((l = o), (o = u), (u = l)),
            (l = lc(r, u)));
          var h = lc(r, o);
          l &&
            h &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== h.node ||
              e.focusOffset !== h.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
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
  var vg = p && "documentMode" in document && 11 >= document.documentMode,
    $n = null,
    _o = null,
    Or = null,
    jo = !1;
  function cc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    jo ||
      $n == null ||
      $n !== Ci(o) ||
      ((o = $n),
      "selectionStart" in o && Vo(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Or && Ir(Or, o)) ||
        ((Or = o),
        (o = Qi(_o, "onSelect")),
        0 < o.length &&
          ((t = new To("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = $n))));
  }
  function Hi(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var Hn = {
      animationend: Hi("Animation", "AnimationEnd"),
      animationiteration: Hi("Animation", "AnimationIteration"),
      animationstart: Hi("Animation", "AnimationStart"),
      transitionend: Hi("Transition", "TransitionEnd"),
    },
    Lo = {},
    fc = {};
  p &&
    ((fc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Hn.animationend.animation,
      delete Hn.animationiteration.animation,
      delete Hn.animationstart.animation),
    "TransitionEvent" in window || delete Hn.transitionend.transition);
  function Ki(e) {
    if (Lo[e]) return Lo[e];
    if (!Hn[e]) return e;
    var t = Hn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in fc) return (Lo[e] = t[r]);
    return e;
  }
  var dc = Ki("animationend"),
    hc = Ki("animationiteration"),
    pc = Ki("animationstart"),
    mc = Ki("transitionend"),
    gc = new Map(),
    yc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function bt(e, t) {
    (gc.set(e, t), d(t, [e]));
  }
  for (var Fo = 0; Fo < yc.length; Fo++) {
    var Io = yc[Fo],
      xg = Io.toLowerCase(),
      wg = Io[0].toUpperCase() + Io.slice(1);
    bt(xg, "on" + wg);
  }
  (bt(dc, "onAnimationEnd"),
    bt(hc, "onAnimationIteration"),
    bt(pc, "onAnimationStart"),
    bt("dblclick", "onDoubleClick"),
    bt("focusin", "onFocus"),
    bt("focusout", "onBlur"),
    bt(mc, "onTransitionEnd"),
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
    Sg = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
  function vc(e, t, r) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = r), xm(o, t, void 0, e), (e.currentTarget = null));
  }
  function xc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        l = o.event;
      o = o.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var h = o.length - 1; 0 <= h; h--) {
            var v = o[h],
              w = v.instance,
              C = v.currentTarget;
            if (((v = v.listener), w !== u && l.isPropagationStopped())) break e;
            (vc(l, v, C), (u = w));
          }
        else
          for (h = 0; h < o.length; h++) {
            if (
              ((v = o[h]),
              (w = v.instance),
              (C = v.currentTarget),
              (v = v.listener),
              w !== u && l.isPropagationStopped())
            )
              break e;
            (vc(l, v, C), (u = w));
          }
      }
    }
    if (Di) throw ((e = po), (Di = !1), (po = null), e);
  }
  function ge(e, t) {
    var r = t[Ko];
    r === void 0 && (r = t[Ko] = new Set());
    var o = e + "__bubble";
    r.has(o) || (wc(t, e, 2, !1), r.add(o));
  }
  function Oo(e, t, r) {
    var o = 0;
    (t && (o |= 4), wc(r, e, o, t));
  }
  var Gi = "_reactListening" + Math.random().toString(36).slice(2);
  function Br(e) {
    if (!e[Gi]) {
      ((e[Gi] = !0),
        a.forEach(function (r) {
          r !== "selectionchange" && (Sg.has(r) || Oo(r, !1, e), Oo(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gi] || ((t[Gi] = !0), Oo("selectionchange", !1, t));
    }
  }
  function wc(e, t, r, o) {
    switch ($u(t)) {
      case 1:
        var l = Lm;
        break;
      case 4:
        l = Fm;
        break;
      default:
        l = So;
    }
    ((r = l.bind(null, t, r, e)),
      (l = void 0),
      !ho || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      o
        ? l !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: l })
          : e.addEventListener(t, r, !0)
        : l !== void 0
          ? e.addEventListener(t, r, { passive: l })
          : e.addEventListener(t, r, !1));
  }
  function zo(e, t, r, o, l) {
    var u = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var h = o.tag;
        if (h === 3 || h === 4) {
          var v = o.stateNode.containerInfo;
          if (v === l || (v.nodeType === 8 && v.parentNode === l)) break;
          if (h === 4)
            for (h = o.return; h !== null;) {
              var w = h.tag;
              if (
                (w === 3 || w === 4) &&
                ((w = h.stateNode.containerInfo),
                w === l || (w.nodeType === 8 && w.parentNode === l))
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
    Eu(function () {
      var C = u,
        V = uo(r),
        L = [];
      e: {
        var N = gc.get(e);
        if (N !== void 0) {
          var z = To,
            $ = e;
          switch (e) {
            case "keypress":
              if (Bi(r) === 0) break e;
            case "keydown":
            case "keyup":
              z = Zm;
              break;
            case "focusin":
              (($ = "focus"), (z = Ao));
              break;
            case "focusout":
              (($ = "blur"), (z = Ao));
              break;
            case "beforeblur":
            case "afterblur":
              z = Ao;
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
              z = Gu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = zm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = eg;
              break;
            case dc:
            case hc:
            case pc:
              z = Wm;
              break;
            case mc:
              z = ng;
              break;
            case "scroll":
              z = Im;
              break;
            case "wheel":
              z = ig;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = Hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Yu;
          }
          var K = (t & 4) !== 0,
            De = !K && e === "scroll",
            T = K ? (N !== null ? N + "Capture" : null) : N;
          K = [];
          for (var S = C, E; S !== null;) {
            E = S;
            var F = E.stateNode;
            if (
              (E.tag === 5 &&
                F !== null &&
                ((E = F), T !== null && ((F = Pr(S, T)), F != null && K.push(Ur(S, F, E)))),
              De)
            )
              break;
            S = S.return;
          }
          0 < K.length && ((N = new z(N, $, null, r, V)), L.push({ event: N, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((N = e === "mouseover" || e === "pointerover"),
            (z = e === "mouseout" || e === "pointerout"),
            N && r !== ao && ($ = r.relatedTarget || r.fromElement) && (xn($) || $[Ft]))
          )
            break e;
          if (
            (z || N) &&
            ((N =
              V.window === V
                ? V
                : (N = V.ownerDocument)
                  ? N.defaultView || N.parentWindow
                  : window),
            z
              ? (($ = r.relatedTarget || r.toElement),
                (z = C),
                ($ = $ ? xn($) : null),
                $ !== null &&
                  ((De = vn($)), $ !== De || ($.tag !== 5 && $.tag !== 6)) &&
                  ($ = null))
              : ((z = null), ($ = C)),
            z !== $)
          ) {
            if (
              ((K = Gu),
              (F = "onMouseLeave"),
              (T = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((K = Yu), (F = "onPointerLeave"), (T = "onPointerEnter"), (S = "pointer")),
              (De = z == null ? N : Qn(z)),
              (E = $ == null ? N : Qn($)),
              (N = new K(F, S + "leave", z, r, V)),
              (N.target = De),
              (N.relatedTarget = E),
              (F = null),
              xn(V) === C &&
                ((K = new K(T, S + "enter", $, r, V)),
                (K.target = E),
                (K.relatedTarget = De),
                (F = K)),
              (De = F),
              z && $)
            )
              t: {
                for (K = z, T = $, S = 0, E = K; E; E = Kn(E)) S++;
                for (E = 0, F = T; F; F = Kn(F)) E++;
                for (; 0 < S - E;) ((K = Kn(K)), S--);
                for (; 0 < E - S;) ((T = Kn(T)), E--);
                for (; S--;) {
                  if (K === T || (T !== null && K === T.alternate)) break t;
                  ((K = Kn(K)), (T = Kn(T)));
                }
                K = null;
              }
            else K = null;
            (z !== null && Sc(L, N, z, K, !1), $ !== null && De !== null && Sc(L, De, $, K, !0));
          }
        }
        e: {
          if (
            ((N = C ? Qn(C) : window),
            (z = N.nodeName && N.nodeName.toLowerCase()),
            z === "select" || (z === "input" && N.type === "file"))
          )
            var Q = fg;
          else if (ec(N))
            if (nc) Q = mg;
            else {
              Q = hg;
              var q = dg;
            }
          else
            (z = N.nodeName) &&
              z.toLowerCase() === "input" &&
              (N.type === "checkbox" || N.type === "radio") &&
              (Q = pg);
          if (Q && (Q = Q(e, C))) {
            tc(L, Q, r, V);
            break e;
          }
          (q && q(e, N, C),
            e === "focusout" &&
              (q = N._wrapperState) &&
              q.controlled &&
              N.type === "number" &&
              ro(N, "number", N.value));
        }
        switch (((q = C ? Qn(C) : window), e)) {
          case "focusin":
            (ec(q) || q.contentEditable === "true") && (($n = q), (_o = C), (Or = null));
            break;
          case "focusout":
            Or = _o = $n = null;
            break;
          case "mousedown":
            jo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((jo = !1), cc(L, r, V));
            break;
          case "selectionchange":
            if (vg) break;
          case "keydown":
          case "keyup":
            cc(L, r, V);
        }
        var Z;
        if (Do)
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
          Wn
            ? Ju(e, r) && (ee = "onCompositionEnd")
            : e === "keydown" && r.keyCode === 229 && (ee = "onCompositionStart");
        (ee &&
          (Xu &&
            r.locale !== "ko" &&
            (Wn || ee !== "onCompositionStart"
              ? ee === "onCompositionEnd" && Wn && (Z = Hu())
              : ((Jt = V), (ko = "value" in Jt ? Jt.value : Jt.textContent), (Wn = !0))),
          (q = Qi(C, ee)),
          0 < q.length &&
            ((ee = new Qu(ee, e, null, r, V)),
            L.push({ event: ee, listeners: q }),
            Z ? (ee.data = Z) : ((Z = bu(r)), Z !== null && (ee.data = Z)))),
          (Z = og ? lg(e, r) : ag(e, r)) &&
            ((C = Qi(C, "onBeforeInput")),
            0 < C.length &&
              ((V = new Qu("onBeforeInput", "beforeinput", null, r, V)),
              L.push({ event: V, listeners: C }),
              (V.data = Z))));
      }
      xc(L, t);
    });
  }
  function Ur(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Qi(e, t) {
    for (var r = t + "Capture", o = []; e !== null;) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Pr(e, r)),
        u != null && o.unshift(Ur(e, u, l)),
        (u = Pr(e, t)),
        u != null && o.push(Ur(e, u, l))),
        (e = e.return));
    }
    return o;
  }
  function Kn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Sc(e, t, r, o, l) {
    for (var u = t._reactName, h = []; r !== null && r !== o;) {
      var v = r,
        w = v.alternate,
        C = v.stateNode;
      if (w !== null && w === o) break;
      (v.tag === 5 &&
        C !== null &&
        ((v = C),
        l
          ? ((w = Pr(r, u)), w != null && h.unshift(Ur(r, w, v)))
          : l || ((w = Pr(r, u)), w != null && h.push(Ur(r, w, v)))),
        (r = r.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Pg = /\r\n?/g,
    kg = /\u0000|\uFFFD/g;
  function Pc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Pg,
        `
`,
      )
      .replace(kg, "");
  }
  function Yi(e, t, r) {
    if (((t = Pc(t)), Pc(e) !== t && r)) throw Error(s(425));
  }
  function Xi() {}
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
    Tg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    kc = typeof Promise == "function" ? Promise : void 0,
    Eg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof kc < "u"
          ? function (e) {
              return kc.resolve(null).then(e).catch(Cg);
            }
          : $o;
  function Cg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ho(e, t) {
    var r = t,
      o = 0;
    do {
      var l = r.nextSibling;
      if ((e.removeChild(r), l && l.nodeType === 8))
        if (((r = l.data), r === "/$")) {
          if (o === 0) {
            (e.removeChild(l), Mr(t));
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = l;
    } while (r);
    Mr(t);
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
  function Tc(e) {
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
  var Gn = Math.random().toString(36).slice(2),
    Nt = "__reactFiber$" + Gn,
    Wr = "__reactProps$" + Gn,
    Ft = "__reactContainer$" + Gn,
    Ko = "__reactEvents$" + Gn,
    Ag = "__reactListeners$" + Gn,
    Rg = "__reactHandles$" + Gn;
  function xn(e) {
    var t = e[Nt];
    if (t) return t;
    for (var r = e.parentNode; r;) {
      if ((t = r[Ft] || r[Nt])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = Tc(e); e !== null;) {
            if ((r = e[Nt])) return r;
            e = Tc(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function $r(e) {
    return (
      (e = e[Nt] || e[Ft]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function qi(e) {
    return e[Wr] || null;
  }
  var Go = [],
    Yn = -1;
  function tn(e) {
    return { current: e };
  }
  function ye(e) {
    0 > Yn || ((e.current = Go[Yn]), (Go[Yn] = null), Yn--);
  }
  function me(e, t) {
    (Yn++, (Go[Yn] = e.current), (e.current = t));
  }
  var nn = {},
    Be = tn(nn),
    Je = tn(!1),
    wn = nn;
  function Xn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return nn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in r) l[u] = t[u];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function be(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Zi() {
    (ye(Je), ye(Be));
  }
  function Ec(e, t, r) {
    if (Be.current !== nn) throw Error(s(168));
    (me(Be, t), me(Je, r));
  }
  function Cc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function")) return r;
    o = o.getChildContext();
    for (var l in o) if (!(l in t)) throw Error(s(108, pe(e) || "Unknown", l));
    return B({}, r, o);
  }
  function Ji(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
      (wn = Be.current),
      me(Be, e),
      me(Je, Je.current),
      !0
    );
  }
  function Ac(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    (r
      ? ((e = Cc(e, t, wn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        ye(Je),
        ye(Be),
        me(Be, e))
      : ye(Je),
      me(Je, r));
  }
  var It = null,
    bi = !1,
    Qo = !1;
  function Rc(e) {
    It === null ? (It = [e]) : It.push(e);
  }
  function Dg(e) {
    ((bi = !0), Rc(e));
  }
  function rn() {
    if (!Qo && It !== null) {
      Qo = !0;
      var e = 0,
        t = he;
      try {
        var r = It;
        for (he = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((It = null), (bi = !1));
      } catch (l) {
        throw (It !== null && (It = It.slice(e + 1)), Nu(mo, rn), l);
      } finally {
        ((he = t), (Qo = !1));
      }
    }
    return null;
  }
  var qn = [],
    Zn = 0,
    es = null,
    ts = 0,
    dt = [],
    ht = 0,
    Sn = null,
    Ot = 1,
    zt = "";
  function Pn(e, t) {
    ((qn[Zn++] = ts), (qn[Zn++] = es), (es = e), (ts = t));
  }
  function Dc(e, t, r) {
    ((dt[ht++] = Ot), (dt[ht++] = zt), (dt[ht++] = Sn), (Sn = e));
    var o = Ot;
    e = zt;
    var l = 32 - St(o) - 1;
    ((o &= ~(1 << l)), (r += 1));
    var u = 32 - St(t) + l;
    if (30 < u) {
      var h = l - (l % 5);
      ((u = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (l -= h),
        (Ot = (1 << (32 - St(t) + l)) | (r << l) | o),
        (zt = u + e));
    } else ((Ot = (1 << u) | (r << l) | o), (zt = e));
  }
  function Yo(e) {
    e.return !== null && (Pn(e, 1), Dc(e, 1, 0));
  }
  function Xo(e) {
    for (; e === es;) ((es = qn[--Zn]), (qn[Zn] = null), (ts = qn[--Zn]), (qn[Zn] = null));
    for (; e === Sn;)
      ((Sn = dt[--ht]),
        (dt[ht] = null),
        (zt = dt[--ht]),
        (dt[ht] = null),
        (Ot = dt[--ht]),
        (dt[ht] = null));
  }
  var lt = null,
    at = null,
    we = !1,
    kt = null;
  function Nc(e, t) {
    var r = yt(5, null, null, 0);
    ((r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function Mc(e, t) {
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
            ? ((r = Sn !== null ? { id: Ot, overflow: zt } : null),
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
    if (we) {
      var t = at;
      if (t) {
        var r = t;
        if (!Mc(e, t)) {
          if (qo(e)) throw Error(s(418));
          t = en(r.nextSibling);
          var o = lt;
          t && Mc(e, t) ? Nc(o, r) : ((e.flags = (e.flags & -4097) | 2), (we = !1), (lt = e));
        }
      } else {
        if (qo(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (we = !1), (lt = e));
      }
    }
  }
  function Vc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    lt = e;
  }
  function ns(e) {
    if (e !== lt) return !1;
    if (!we) return (Vc(e), (we = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !Wo(e.type, e.memoizedProps))),
      t && (t = at))
    ) {
      if (qo(e)) throw (_c(), Error(s(418)));
      for (; t;) (Nc(e, t), (t = en(t.nextSibling)));
    }
    if ((Vc(e), e.tag === 13)) {
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
  function _c() {
    for (var e = at; e;) e = en(e.nextSibling);
  }
  function Jn() {
    ((at = lt = null), (we = !1));
  }
  function Jo(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  var Ng = te.ReactCurrentBatchConfig;
  function Hr(e, t, r) {
    if (((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(s(309));
          var o = r.stateNode;
        }
        if (!o) throw Error(s(147, e));
        var l = o,
          u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u
          ? t.ref
          : ((t = function (h) {
              var v = l.refs;
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
  function rs(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function jc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Lc(e) {
    function t(T, S) {
      if (e) {
        var E = T.deletions;
        E === null ? ((T.deletions = [S]), (T.flags |= 16)) : E.push(S);
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
    function l(T, S) {
      return ((T = dn(T, S)), (T.index = 0), (T.sibling = null), T);
    }
    function u(T, S, E) {
      return (
        (T.index = E),
        e
          ? ((E = T.alternate),
            E !== null ? ((E = E.index), E < S ? ((T.flags |= 2), S) : E) : ((T.flags |= 2), S))
          : ((T.flags |= 1048576), S)
      );
    }
    function h(T) {
      return (e && T.alternate === null && (T.flags |= 2), T);
    }
    function v(T, S, E, F) {
      return S === null || S.tag !== 6
        ? ((S = $l(E, T.mode, F)), (S.return = T), S)
        : ((S = l(S, E)), (S.return = T), S);
    }
    function w(T, S, E, F) {
      var Q = E.type;
      return Q === ae
        ? V(T, S, E.props.children, F, E.key)
        : S !== null &&
            (S.elementType === Q ||
              (typeof Q == "object" && Q !== null && Q.$$typeof === Qe && jc(Q) === S.type))
          ? ((F = l(S, E.props)), (F.ref = Hr(T, S, E)), (F.return = T), F)
          : ((F = As(E.type, E.key, E.props, null, T.mode, F)),
            (F.ref = Hr(T, S, E)),
            (F.return = T),
            F);
    }
    function C(T, S, E, F) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== E.containerInfo ||
        S.stateNode.implementation !== E.implementation
        ? ((S = Hl(E, T.mode, F)), (S.return = T), S)
        : ((S = l(S, E.children || [])), (S.return = T), S);
    }
    function V(T, S, E, F, Q) {
      return S === null || S.tag !== 7
        ? ((S = Nn(E, T.mode, F, Q)), (S.return = T), S)
        : ((S = l(S, E)), (S.return = T), S);
    }
    function L(T, S, E) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return ((S = $l("" + S, T.mode, E)), (S.return = T), S);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Y:
            return (
              (E = As(S.type, S.key, S.props, null, T.mode, E)),
              (E.ref = Hr(T, null, S)),
              (E.return = T),
              E
            );
          case ne:
            return ((S = Hl(S, T.mode, E)), (S.return = T), S);
          case Qe:
            var F = S._init;
            return L(T, F(S._payload), E);
        }
        if (xr(S) || X(S)) return ((S = Nn(S, T.mode, E, null)), (S.return = T), S);
        rs(T, S);
      }
      return null;
    }
    function N(T, S, E, F) {
      var Q = S !== null ? S.key : null;
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return Q !== null ? null : v(T, S, "" + E, F);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Y:
            return E.key === Q ? w(T, S, E, F) : null;
          case ne:
            return E.key === Q ? C(T, S, E, F) : null;
          case Qe:
            return ((Q = E._init), N(T, S, Q(E._payload), F));
        }
        if (xr(E) || X(E)) return Q !== null ? null : V(T, S, E, F, null);
        rs(T, E);
      }
      return null;
    }
    function z(T, S, E, F, Q) {
      if ((typeof F == "string" && F !== "") || typeof F == "number")
        return ((T = T.get(E) || null), v(S, T, "" + F, Q));
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Y:
            return ((T = T.get(F.key === null ? E : F.key) || null), w(S, T, F, Q));
          case ne:
            return ((T = T.get(F.key === null ? E : F.key) || null), C(S, T, F, Q));
          case Qe:
            var q = F._init;
            return z(T, S, E, q(F._payload), Q);
        }
        if (xr(F) || X(F)) return ((T = T.get(E) || null), V(S, T, F, Q, null));
        rs(S, F);
      }
      return null;
    }
    function $(T, S, E, F) {
      for (
        var Q = null, q = null, Z = S, ee = (S = 0), Fe = null;
        Z !== null && ee < E.length;
        ee++
      ) {
        Z.index > ee ? ((Fe = Z), (Z = null)) : (Fe = Z.sibling);
        var fe = N(T, Z, E[ee], F);
        if (fe === null) {
          Z === null && (Z = Fe);
          break;
        }
        (e && Z && fe.alternate === null && t(T, Z),
          (S = u(fe, S, ee)),
          q === null ? (Q = fe) : (q.sibling = fe),
          (q = fe),
          (Z = Fe));
      }
      if (ee === E.length) return (r(T, Z), we && Pn(T, ee), Q);
      if (Z === null) {
        for (; ee < E.length; ee++)
          ((Z = L(T, E[ee], F)),
            Z !== null && ((S = u(Z, S, ee)), q === null ? (Q = Z) : (q.sibling = Z), (q = Z)));
        return (we && Pn(T, ee), Q);
      }
      for (Z = o(T, Z); ee < E.length; ee++)
        ((Fe = z(Z, T, ee, E[ee], F)),
          Fe !== null &&
            (e && Fe.alternate !== null && Z.delete(Fe.key === null ? ee : Fe.key),
            (S = u(Fe, S, ee)),
            q === null ? (Q = Fe) : (q.sibling = Fe),
            (q = Fe)));
      return (
        e &&
          Z.forEach(function (hn) {
            return t(T, hn);
          }),
        we && Pn(T, ee),
        Q
      );
    }
    function K(T, S, E, F) {
      var Q = X(E);
      if (typeof Q != "function") throw Error(s(150));
      if (((E = Q.call(E)), E == null)) throw Error(s(151));
      for (
        var q = (Q = null), Z = S, ee = (S = 0), Fe = null, fe = E.next();
        Z !== null && !fe.done;
        ee++, fe = E.next()
      ) {
        Z.index > ee ? ((Fe = Z), (Z = null)) : (Fe = Z.sibling);
        var hn = N(T, Z, fe.value, F);
        if (hn === null) {
          Z === null && (Z = Fe);
          break;
        }
        (e && Z && hn.alternate === null && t(T, Z),
          (S = u(hn, S, ee)),
          q === null ? (Q = hn) : (q.sibling = hn),
          (q = hn),
          (Z = Fe));
      }
      if (fe.done) return (r(T, Z), we && Pn(T, ee), Q);
      if (Z === null) {
        for (; !fe.done; ee++, fe = E.next())
          ((fe = L(T, fe.value, F)),
            fe !== null &&
              ((S = u(fe, S, ee)), q === null ? (Q = fe) : (q.sibling = fe), (q = fe)));
        return (we && Pn(T, ee), Q);
      }
      for (Z = o(T, Z); !fe.done; ee++, fe = E.next())
        ((fe = z(Z, T, ee, fe.value, F)),
          fe !== null &&
            (e && fe.alternate !== null && Z.delete(fe.key === null ? ee : fe.key),
            (S = u(fe, S, ee)),
            q === null ? (Q = fe) : (q.sibling = fe),
            (q = fe)));
      return (
        e &&
          Z.forEach(function (uy) {
            return t(T, uy);
          }),
        we && Pn(T, ee),
        Q
      );
    }
    function De(T, S, E, F) {
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
              for (var Q = E.key, q = S; q !== null;) {
                if (q.key === Q) {
                  if (((Q = E.type), Q === ae)) {
                    if (q.tag === 7) {
                      (r(T, q.sibling), (S = l(q, E.props.children)), (S.return = T), (T = S));
                      break e;
                    }
                  } else if (
                    q.elementType === Q ||
                    (typeof Q == "object" && Q !== null && Q.$$typeof === Qe && jc(Q) === q.type)
                  ) {
                    (r(T, q.sibling),
                      (S = l(q, E.props)),
                      (S.ref = Hr(T, q, E)),
                      (S.return = T),
                      (T = S));
                    break e;
                  }
                  r(T, q);
                  break;
                } else t(T, q);
                q = q.sibling;
              }
              E.type === ae
                ? ((S = Nn(E.props.children, T.mode, F, E.key)), (S.return = T), (T = S))
                : ((F = As(E.type, E.key, E.props, null, T.mode, F)),
                  (F.ref = Hr(T, S, E)),
                  (F.return = T),
                  (T = F));
            }
            return h(T);
          case ne:
            e: {
              for (q = E.key; S !== null;) {
                if (S.key === q)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === E.containerInfo &&
                    S.stateNode.implementation === E.implementation
                  ) {
                    (r(T, S.sibling), (S = l(S, E.children || [])), (S.return = T), (T = S));
                    break e;
                  } else {
                    r(T, S);
                    break;
                  }
                else t(T, S);
                S = S.sibling;
              }
              ((S = Hl(E, T.mode, F)), (S.return = T), (T = S));
            }
            return h(T);
          case Qe:
            return ((q = E._init), De(T, S, q(E._payload), F));
        }
        if (xr(E)) return $(T, S, E, F);
        if (X(E)) return K(T, S, E, F);
        rs(T, E);
      }
      return (typeof E == "string" && E !== "") || typeof E == "number"
        ? ((E = "" + E),
          S !== null && S.tag === 6
            ? (r(T, S.sibling), (S = l(S, E)), (S.return = T), (T = S))
            : (r(T, S), (S = $l(E, T.mode, F)), (S.return = T), (T = S)),
          h(T))
        : r(T, S);
    }
    return De;
  }
  var bn = Lc(!0),
    Fc = Lc(!1),
    is = tn(null),
    ss = null,
    er = null,
    bo = null;
  function el() {
    bo = er = ss = null;
  }
  function tl(e) {
    var t = is.current;
    (ye(is), (e._currentValue = t));
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
  function tr(e, t) {
    ((ss = e),
      (bo = er = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (et = !0), (e.firstContext = null)));
  }
  function pt(e) {
    var t = e._currentValue;
    if (bo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), er === null)) {
        if (ss === null) throw Error(s(308));
        ((er = e), (ss.dependencies = { lanes: 0, firstContext: e }));
      } else er = er.next = e;
    return t;
  }
  var kn = null;
  function rl(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Ic(e, t, r, o) {
    var l = t.interleaved;
    return (
      l === null ? ((r.next = r), rl(t)) : ((r.next = l.next), (l.next = r)),
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
  var sn = !1;
  function il(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Oc(e, t) {
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
  function on(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (le & 2) !== 0)) {
      var l = o.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (o.pending = t),
        Bt(e, r)
      );
    }
    return (
      (l = o.interleaved),
      l === null ? ((t.next = t), rl(o)) : ((t.next = l.next), (l.next = t)),
      (o.interleaved = t),
      Bt(e, r)
    );
  }
  function os(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), vo(e, r));
    }
  }
  function zc(e, t) {
    var r = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var l = null,
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
          (u === null ? (l = u = h) : (u = u.next = h), (r = r.next));
        } while (r !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      ((r = {
        baseState: o.baseState,
        firstBaseUpdate: l,
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
  function ls(e, t, r, o) {
    var l = e.updateQueue;
    sn = !1;
    var u = l.firstBaseUpdate,
      h = l.lastBaseUpdate,
      v = l.shared.pending;
    if (v !== null) {
      l.shared.pending = null;
      var w = v,
        C = w.next;
      ((w.next = null), h === null ? (u = C) : (h.next = C), (h = w));
      var V = e.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (v = V.lastBaseUpdate),
        v !== h && (v === null ? (V.firstBaseUpdate = C) : (v.next = C), (V.lastBaseUpdate = w)));
    }
    if (u !== null) {
      var L = l.baseState;
      ((h = 0), (V = C = w = null), (v = u));
      do {
        var N = v.lane,
          z = v.eventTime;
        if ((o & N) === N) {
          V !== null &&
            (V = V.next =
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
              K = v;
            switch (((N = t), (z = r), K.tag)) {
              case 1:
                if ((($ = K.payload), typeof $ == "function")) {
                  L = $.call(z, L, N);
                  break e;
                }
                L = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = K.payload), (N = typeof $ == "function" ? $.call(z, L, N) : $), N == null)
                )
                  break e;
                L = B({}, L, N);
                break e;
              case 2:
                sn = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64), (N = l.effects), N === null ? (l.effects = [v]) : N.push(v));
        } else
          ((z = {
            eventTime: z,
            lane: N,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            V === null ? ((C = V = z), (w = L)) : (V = V.next = z),
            (h |= N));
        if (((v = v.next), v === null)) {
          if (((v = l.shared.pending), v === null)) break;
          ((N = v),
            (v = N.next),
            (N.next = null),
            (l.lastBaseUpdate = N),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (V === null && (w = L),
        (l.baseState = w),
        (l.firstBaseUpdate = C),
        (l.lastBaseUpdate = V),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((h |= l.lane), (l = l.next));
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ((Cn |= h), (e.lanes = h), (e.memoizedState = L));
    }
  }
  function Bc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          l = o.callback;
        if (l !== null) {
          if (((o.callback = null), (o = r), typeof l != "function")) throw Error(s(191, l));
          l.call(o);
        }
      }
  }
  var Kr = {},
    Mt = tn(Kr),
    Gr = tn(Kr),
    Qr = tn(Kr);
  function Tn(e) {
    if (e === Kr) throw Error(s(174));
    return e;
  }
  function sl(e, t) {
    switch ((me(Qr, t), me(Gr, e), me(Mt, Kr), (e = t.nodeType), e)) {
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
    (ye(Mt), me(Mt, t));
  }
  function nr() {
    (ye(Mt), ye(Gr), ye(Qr));
  }
  function Uc(e) {
    Tn(Qr.current);
    var t = Tn(Mt.current),
      r = so(t, e.type);
    t !== r && (me(Gr, e), me(Mt, r));
  }
  function ol(e) {
    Gr.current === e && (ye(Mt), ye(Gr));
  }
  var Pe = tn(0);
  function as(e) {
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
  var us = te.ReactCurrentDispatcher,
    ul = te.ReactCurrentBatchConfig,
    En = 0,
    ke = null,
    Ve = null,
    je = null,
    cs = !1,
    Yr = !1,
    Xr = 0,
    Mg = 0;
  function Ue() {
    throw Error(s(321));
  }
  function cl(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Pt(e[r], t[r])) return !1;
    return !0;
  }
  function fl(e, t, r, o, l, u) {
    if (
      ((En = u),
      (ke = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (us.current = e === null || e.memoizedState === null ? Lg : Fg),
      (e = r(o, l)),
      Yr)
    ) {
      u = 0;
      do {
        if (((Yr = !1), (Xr = 0), 25 <= u)) throw Error(s(301));
        ((u += 1), (je = Ve = null), (t.updateQueue = null), (us.current = Ig), (e = r(o, l)));
      } while (Yr);
    }
    if (
      ((us.current = hs),
      (t = Ve !== null && Ve.next !== null),
      (En = 0),
      (je = Ve = ke = null),
      (cs = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function dl() {
    var e = Xr !== 0;
    return ((Xr = 0), e);
  }
  function Vt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (je === null ? (ke.memoizedState = je = e) : (je = je.next = e), je);
  }
  function mt() {
    if (Ve === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = je === null ? ke.memoizedState : je.next;
    if (t !== null) ((je = t), (Ve = e));
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
        je === null ? (ke.memoizedState = je = e) : (je = je.next = e));
    }
    return je;
  }
  function qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hl(e) {
    var t = mt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = Ve,
      l = o.baseQueue,
      u = r.pending;
    if (u !== null) {
      if (l !== null) {
        var h = l.next;
        ((l.next = u.next), (u.next = h));
      }
      ((o.baseQueue = l = u), (r.pending = null));
    }
    if (l !== null) {
      ((u = l.next), (o = o.baseState));
      var v = (h = null),
        w = null,
        C = u;
      do {
        var V = C.lane;
        if ((En & V) === V)
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
          var L = {
            lane: V,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          };
          (w === null ? ((v = w = L), (h = o)) : (w = w.next = L), (ke.lanes |= V), (Cn |= V));
        }
        C = C.next;
      } while (C !== null && C !== u);
      (w === null ? (h = o) : (w.next = v),
        Pt(o, t.memoizedState) || (et = !0),
        (t.memoizedState = o),
        (t.baseState = h),
        (t.baseQueue = w),
        (r.lastRenderedState = o));
    }
    if (((e = r.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), (ke.lanes |= u), (Cn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function pl(e) {
    var t = mt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch,
      l = r.pending,
      u = t.memoizedState;
    if (l !== null) {
      r.pending = null;
      var h = (l = l.next);
      do ((u = e(u, h.action)), (h = h.next));
      while (h !== l);
      (Pt(u, t.memoizedState) || (et = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (r.lastRenderedState = u));
    }
    return [u, o];
  }
  function Wc() {}
  function $c(e, t) {
    var r = ke,
      o = mt(),
      l = t(),
      u = !Pt(o.memoizedState, l);
    if (
      (u && ((o.memoizedState = l), (et = !0)),
      (o = o.queue),
      ml(Gc.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || u || (je !== null && je.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), Zr(9, Kc.bind(null, r, o, l, t), void 0, null), Le === null))
        throw Error(s(349));
      (En & 30) !== 0 || Hc(r, t, l);
    }
    return l;
  }
  function Hc(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ke.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function Kc(e, t, r, o) {
    ((t.value = r), (t.getSnapshot = o), Qc(t) && Yc(e));
  }
  function Gc(e, t, r) {
    return r(function () {
      Qc(t) && Yc(e);
    });
  }
  function Qc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Pt(e, r);
    } catch {
      return !0;
    }
  }
  function Yc(e) {
    var t = Bt(e, 1);
    t !== null && At(t, e, 1, -1);
  }
  function Xc(e) {
    var t = Vt();
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
      (e = e.dispatch = jg.bind(null, ke, e)),
      [t.memoizedState, e]
    );
  }
  function Zr(e, t, r, o) {
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
  function qc() {
    return mt().memoizedState;
  }
  function fs(e, t, r, o) {
    var l = Vt();
    ((ke.flags |= e), (l.memoizedState = Zr(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function ds(e, t, r, o) {
    var l = mt();
    o = o === void 0 ? null : o;
    var u = void 0;
    if (Ve !== null) {
      var h = Ve.memoizedState;
      if (((u = h.destroy), o !== null && cl(o, h.deps))) {
        l.memoizedState = Zr(t, r, u, o);
        return;
      }
    }
    ((ke.flags |= e), (l.memoizedState = Zr(1 | t, r, u, o)));
  }
  function Zc(e, t) {
    return fs(8390656, 8, e, t);
  }
  function ml(e, t) {
    return ds(2048, 8, e, t);
  }
  function Jc(e, t) {
    return ds(4, 2, e, t);
  }
  function bc(e, t) {
    return ds(4, 4, e, t);
  }
  function ef(e, t) {
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
  function tf(e, t, r) {
    return ((r = r != null ? r.concat([e]) : null), ds(4, 4, ef.bind(null, t, e), r));
  }
  function gl() {}
  function nf(e, t) {
    var r = mt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && cl(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function rf(e, t) {
    var r = mt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && cl(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function sf(e, t, r) {
    return (En & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = r))
      : (Pt(r, t) || ((r = ju()), (ke.lanes |= r), (Cn |= r), (e.baseState = !0)), t);
  }
  function Vg(e, t) {
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
  function of() {
    return mt().memoizedState;
  }
  function _g(e, t, r) {
    var o = cn(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), lf(e)))
      af(t, r);
    else if (((r = Ic(e, t, r, o)), r !== null)) {
      var l = Xe();
      (At(r, e, o, l), uf(r, t, o));
    }
  }
  function jg(e, t, r) {
    var o = cn(e),
      l = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (lf(e)) af(t, l);
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
          if (((l.hasEagerState = !0), (l.eagerState = v), Pt(v, h))) {
            var w = t.interleaved;
            (w === null ? ((l.next = l), rl(t)) : ((l.next = w.next), (w.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((r = Ic(e, t, l, o)), r !== null && ((l = Xe()), At(r, e, o, l), uf(r, t, o)));
    }
  }
  function lf(e) {
    var t = e.alternate;
    return e === ke || (t !== null && t === ke);
  }
  function af(e, t) {
    Yr = cs = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function uf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), vo(e, r));
    }
  }
  var hs = {
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
    Lg = {
      readContext: pt,
      useCallback: function (e, t) {
        return ((Vt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: pt,
      useEffect: Zc,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), fs(4194308, 4, ef.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return fs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return fs(4, 2, e, t);
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
          (e = e.dispatch = _g.bind(null, ke, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Vt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Xc,
      useDebugValue: gl,
      useDeferredValue: function (e) {
        return (Vt().memoizedState = e);
      },
      useTransition: function () {
        var e = Xc(!1),
          t = e[0];
        return ((e = Vg.bind(null, e[1])), (Vt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = ke,
          l = Vt();
        if (we) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), Le === null)) throw Error(s(349));
          (En & 30) !== 0 || Hc(o, t, r);
        }
        l.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (l.queue = u),
          Zc(Gc.bind(null, o, u, e), [e]),
          (o.flags |= 2048),
          Zr(9, Kc.bind(null, o, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Vt(),
          t = Le.identifierPrefix;
        if (we) {
          var r = zt,
            o = Ot;
          ((r = (o & ~(1 << (32 - St(o) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Xr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":"));
        } else ((r = Mg++), (t = ":" + t + "r" + r.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Fg = {
      readContext: pt,
      useCallback: nf,
      useContext: pt,
      useEffect: ml,
      useImperativeHandle: tf,
      useInsertionEffect: Jc,
      useLayoutEffect: bc,
      useMemo: rf,
      useReducer: hl,
      useRef: qc,
      useState: function () {
        return hl(qr);
      },
      useDebugValue: gl,
      useDeferredValue: function (e) {
        var t = mt();
        return sf(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = hl(qr)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Wc,
      useSyncExternalStore: $c,
      useId: of,
      unstable_isNewReconciler: !1,
    },
    Ig = {
      readContext: pt,
      useCallback: nf,
      useContext: pt,
      useEffect: ml,
      useImperativeHandle: tf,
      useInsertionEffect: Jc,
      useLayoutEffect: bc,
      useMemo: rf,
      useReducer: pl,
      useRef: qc,
      useState: function () {
        return pl(qr);
      },
      useDebugValue: gl,
      useDeferredValue: function (e) {
        var t = mt();
        return Ve === null ? (t.memoizedState = e) : sf(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = pl(qr)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Wc,
      useSyncExternalStore: $c,
      useId: of,
      unstable_isNewReconciler: !1,
    };
  function Tt(e, t) {
    if (e && e.defaultProps) {
      ((t = B({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function yl(e, t, r, o) {
    ((t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : B({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var ps = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? vn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = Xe(),
        l = cn(e),
        u = Ut(o, l);
      ((u.payload = t),
        r != null && (u.callback = r),
        (t = on(e, u, l)),
        t !== null && (At(t, e, l, o), os(t, e, l)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = Xe(),
        l = cn(e),
        u = Ut(o, l);
      ((u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = on(e, u, l)),
        t !== null && (At(t, e, l, o), os(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Xe(),
        o = cn(e),
        l = Ut(r, o);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = on(e, l, o)),
        t !== null && (At(t, e, o, r), os(t, e, o)));
    },
  };
  function cf(e, t, r, o, l, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, u, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ir(r, o) || !Ir(l, u)
          : !0
    );
  }
  function ff(e, t, r) {
    var o = !1,
      l = nn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = pt(u))
        : ((l = be(t) ? wn : Be.current),
          (o = t.contextTypes),
          (u = (o = o != null) ? Xn(e, l) : nn)),
      (t = new t(r, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ps),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function df(e, t, r, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && ps.enqueueReplaceState(t, t.state, null));
  }
  function vl(e, t, r, o) {
    var l = e.stateNode;
    ((l.props = r), (l.state = e.memoizedState), (l.refs = {}), il(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = pt(u))
      : ((u = be(t) ? wn : Be.current), (l.context = Xn(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (yl(e, t, u, r), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && ps.enqueueReplaceState(l, l.state, null),
        ls(e, r, l, o),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function rr(e, t) {
    try {
      var r = "",
        o = t;
      do ((r += ue(o)), (o = o.return));
      while (o);
      var l = r;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
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
  var Og = typeof WeakMap == "function" ? WeakMap : Map;
  function hf(e, t, r) {
    ((r = Ut(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (Ss || ((Ss = !0), (Ll = o)), wl(e, t));
      }),
      r
    );
  }
  function pf(e, t, r) {
    ((r = Ut(-1, r)), (r.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var l = t.value;
      ((r.payload = function () {
        return o(l);
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
            typeof o != "function" && (an === null ? (an = new Set([this])) : an.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
        }),
      r
    );
  }
  function mf(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Og();
      var l = new Set();
      o.set(t, l);
    } else ((l = o.get(t)), l === void 0 && ((l = new Set()), o.set(t, l)));
    l.has(r) || (l.add(r), (e = Jg.bind(null, e, t, r)), t.then(e, e));
  }
  function gf(e) {
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
  function yf(e, t, r, o, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null ? (r.tag = 17) : ((t = Ut(-1, 1)), (t.tag = 2), on(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var zg = te.ReactCurrentOwner,
    et = !1;
  function Ye(e, t, r, o) {
    t.child = e === null ? Fc(t, null, r, o) : bn(t, e.child, r, o);
  }
  function vf(e, t, r, o, l) {
    r = r.render;
    var u = t.ref;
    return (
      tr(t, l),
      (o = fl(e, t, r, o, u, l)),
      (r = dl()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Wt(e, t, l))
        : (we && r && Yo(t), (t.flags |= 1), Ye(e, t, o, l), t.child)
    );
  }
  function xf(e, t, r, o, l) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !Wl(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), wf(e, t, u, o, l))
        : ((e = As(r.type, null, o, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var h = u.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Ir), r(h, o) && e.ref === t.ref))
        return Wt(e, t, l);
    }
    return ((t.flags |= 1), (e = dn(u, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function wf(e, t, r, o, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ir(u, o) && e.ref === t.ref)
        if (((et = !1), (t.pendingProps = o = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (et = !0);
        else return ((t.lanes = e.lanes), Wt(e, t, l));
    }
    return Sl(e, t, r, o, l);
  }
  function Sf(e, t, r) {
    var o = t.pendingProps,
      l = o.children,
      u = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          me(sr, ut),
          (ut |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            me(sr, ut),
            (ut |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = u !== null ? u.baseLanes : r),
          me(sr, ut),
          (ut |= o));
      }
    else
      (u !== null ? ((o = u.baseLanes | r), (t.memoizedState = null)) : (o = r),
        me(sr, ut),
        (ut |= o));
    return (Ye(e, t, l, r), t.child);
  }
  function Pf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Sl(e, t, r, o, l) {
    var u = be(r) ? wn : Be.current;
    return (
      (u = Xn(t, u)),
      tr(t, l),
      (r = fl(e, t, r, o, u, l)),
      (o = dl()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Wt(e, t, l))
        : (we && o && Yo(t), (t.flags |= 1), Ye(e, t, r, l), t.child)
    );
  }
  function kf(e, t, r, o, l) {
    if (be(r)) {
      var u = !0;
      Ji(t);
    } else u = !1;
    if ((tr(t, l), t.stateNode === null)) (gs(e, t), ff(t, r, o), vl(t, r, o, l), (o = !0));
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var w = h.context,
        C = r.contextType;
      typeof C == "object" && C !== null
        ? (C = pt(C))
        : ((C = be(r) ? wn : Be.current), (C = Xn(t, C)));
      var V = r.getDerivedStateFromProps,
        L = typeof V == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (L ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== o || w !== C) && df(t, h, o, C)),
        (sn = !1));
      var N = t.memoizedState;
      ((h.state = N),
        ls(t, o, h, l),
        (w = t.memoizedState),
        v !== o || N !== w || Je.current || sn
          ? (typeof V == "function" && (yl(t, r, V, o), (w = t.memoizedState)),
            (v = sn || cf(t, r, v, o, N, w, C))
              ? (L ||
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
        Oc(e, t),
        (v = t.memoizedProps),
        (C = t.type === t.elementType ? v : Tt(t.type, v)),
        (h.props = C),
        (L = t.pendingProps),
        (N = h.context),
        (w = r.contextType),
        typeof w == "object" && w !== null
          ? (w = pt(w))
          : ((w = be(r) ? wn : Be.current), (w = Xn(t, w))));
      var z = r.getDerivedStateFromProps;
      ((V = typeof z == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== L || N !== w) && df(t, h, o, w)),
        (sn = !1),
        (N = t.memoizedState),
        (h.state = N),
        ls(t, o, h, l));
      var $ = t.memoizedState;
      v !== L || N !== $ || Je.current || sn
        ? (typeof z == "function" && (yl(t, r, z, o), ($ = t.memoizedState)),
          (C = sn || cf(t, r, C, o, N, $, w) || !1)
            ? (V ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, $, w),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, $, w)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (v === e.memoizedProps && N === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && N === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = $)),
          (h.props = o),
          (h.state = $),
          (h.context = w),
          (o = C))
        : (typeof h.componentDidUpdate != "function" ||
            (v === e.memoizedProps && N === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && N === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Pl(e, t, r, o, u, l);
  }
  function Pl(e, t, r, o, l, u) {
    Pf(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return (l && Ac(t, r, !1), Wt(e, t, u));
    ((o = t.stateNode), (zg.current = t));
    var v = h && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = bn(t, e.child, null, u)), (t.child = bn(t, null, v, u)))
        : Ye(e, t, v, u),
      (t.memoizedState = o.state),
      l && Ac(t, r, !0),
      t.child
    );
  }
  function Tf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ec(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ec(e, t.context, !1),
      sl(e, t.containerInfo));
  }
  function Ef(e, t, r, o, l) {
    return (Jn(), Jo(l), (t.flags |= 256), Ye(e, t, r, o), t.child);
  }
  var kl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Tl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Cf(e, t, r) {
    var o = t.pendingProps,
      l = Pe.current,
      u = !1,
      h = (t.flags & 128) !== 0,
      v;
    if (
      ((v = h) || (v = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      v ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      me(Pe, l & 1),
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
                  : (u = Rs(h, o, 0, null)),
                (e = Nn(e, o, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Tl(r)),
                (t.memoizedState = kl),
                e)
              : El(t, h))
      );
    if (((l = e.memoizedState), l !== null && ((v = l.dehydrated), v !== null)))
      return Bg(e, t, h, o, v, l, r);
    if (u) {
      ((u = o.fallback), (h = t.mode), (l = e.child), (v = l.sibling));
      var w = { mode: "hidden", children: o.children };
      return (
        (h & 1) === 0 && t.child !== l
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = w), (t.deletions = null))
          : ((o = dn(l, w)), (o.subtreeFlags = l.subtreeFlags & 14680064)),
        v !== null ? (u = dn(v, u)) : ((u = Nn(u, h, r, null)), (u.flags |= 2)),
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
      (t = Rs({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ms(e, t, r, o) {
    return (
      o !== null && Jo(o),
      bn(t, e.child, null, r),
      (e = El(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Bg(e, t, r, o, l, u, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = xl(Error(s(422)))), ms(e, t, h, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = o.fallback),
            (l = t.mode),
            (o = Rs({ mode: "visible", children: o.children }, l, 0, null)),
            (u = Nn(u, l, h, null)),
            (u.flags |= 2),
            (o.return = t),
            (u.return = t),
            (o.sibling = u),
            (t.child = o),
            (t.mode & 1) !== 0 && bn(t, e.child, null, h),
            (t.child.memoizedState = Tl(h)),
            (t.memoizedState = kl),
            u);
    if ((t.mode & 1) === 0) return ms(e, t, h, null);
    if (l.data === "$!") {
      if (((o = l.nextSibling && l.nextSibling.dataset), o)) var v = o.dgst;
      return ((o = v), (u = Error(s(419))), (o = xl(u, o, void 0)), ms(e, t, h, o));
    }
    if (((v = (h & e.childLanes) !== 0), et || v)) {
      if (((o = Le), o !== null)) {
        switch (h & -h) {
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
        ((l = (l & (o.suspendedLanes | h)) !== 0 ? 0 : l),
          l !== 0 && l !== u.retryLane && ((u.retryLane = l), Bt(e, l), At(o, e, l, -1)));
      }
      return (Ul(), (o = xl(Error(s(421)))), ms(e, t, h, o));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = bg.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (at = en(l.nextSibling)),
        (lt = t),
        (we = !0),
        (kt = null),
        e !== null &&
          ((dt[ht++] = Ot),
          (dt[ht++] = zt),
          (dt[ht++] = Sn),
          (Ot = e.id),
          (zt = e.overflow),
          (Sn = t)),
        (t = El(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Af(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), nl(e.return, t, r));
  }
  function Cl(e, t, r, o, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = o),
        (u.tail = r),
        (u.tailMode = l));
  }
  function Rf(e, t, r) {
    var o = t.pendingProps,
      l = o.revealOrder,
      u = o.tail;
    if ((Ye(e, t, o.children, r), (o = Pe.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Af(e, r, t);
          else if (e.tag === 19) Af(e, r, t);
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
      switch (l) {
        case "forwards":
          for (r = t.child, l = null; r !== null;)
            ((e = r.alternate), e !== null && as(e) === null && (l = r), (r = r.sibling));
          ((r = l),
            r === null ? ((l = t.child), (t.child = null)) : ((l = r.sibling), (r.sibling = null)),
            Cl(t, !1, l, r, u));
          break;
        case "backwards":
          for (r = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && as(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = r), (r = l), (l = e));
          }
          Cl(t, !0, r, null, u);
          break;
        case "together":
          Cl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function gs(e, t) {
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
      for (e = t.child, r = dn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;)
        ((e = e.sibling), (r = r.sibling = dn(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function Ug(e, t, r) {
    switch (t.tag) {
      case 3:
        (Tf(t), Jn());
        break;
      case 5:
        Uc(t);
        break;
      case 1:
        be(t.type) && Ji(t);
        break;
      case 4:
        sl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          l = t.memoizedProps.value;
        (me(is, o._currentValue), (o._currentValue = l));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (me(Pe, Pe.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Cf(e, t, r)
              : (me(Pe, Pe.current & 1), (e = Wt(e, t, r)), e !== null ? e.sibling : null);
        me(Pe, Pe.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return Rf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          me(Pe, Pe.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Sf(e, t, r));
    }
    return Wt(e, t, r);
  }
  var Df, Al, Nf, Mf;
  ((Df = function (e, t) {
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
    (Nf = function (e, t, r, o) {
      var l = e.memoizedProps;
      if (l !== o) {
        ((e = t.stateNode), Tn(Mt.current));
        var u = null;
        switch (r) {
          case "input":
            ((l = to(e, l)), (o = to(e, o)), (u = []));
            break;
          case "select":
            ((l = B({}, l, { value: void 0 })), (o = B({}, o, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = io(e, l)), (o = io(e, o)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Xi);
        }
        oo(r, o);
        var h;
        r = null;
        for (C in l)
          if (!o.hasOwnProperty(C) && l.hasOwnProperty(C) && l[C] != null)
            if (C === "style") {
              var v = l[C];
              for (h in v) v.hasOwnProperty(h) && (r || (r = {}), (r[h] = ""));
            } else
              C !== "dangerouslySetInnerHTML" &&
                C !== "children" &&
                C !== "suppressContentEditableWarning" &&
                C !== "suppressHydrationWarning" &&
                C !== "autoFocus" &&
                (c.hasOwnProperty(C) ? u || (u = []) : (u = u || []).push(C, null));
        for (C in o) {
          var w = o[C];
          if (
            ((v = l != null ? l[C] : void 0),
            o.hasOwnProperty(C) && w !== v && (w != null || v != null))
          )
            if (C === "style")
              if (v) {
                for (h in v)
                  !v.hasOwnProperty(h) ||
                    (w && w.hasOwnProperty(h)) ||
                    (r || (r = {}), (r[h] = ""));
                for (h in w) w.hasOwnProperty(h) && v[h] !== w[h] && (r || (r = {}), (r[h] = w[h]));
              } else (r || (u || (u = []), u.push(C, r)), (r = w));
            else
              C === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (v = v ? v.__html : void 0),
                  w != null && v !== w && (u = u || []).push(C, w))
                : C === "children"
                  ? (typeof w != "string" && typeof w != "number") || (u = u || []).push(C, "" + w)
                  : C !== "suppressContentEditableWarning" &&
                    C !== "suppressHydrationWarning" &&
                    (c.hasOwnProperty(C)
                      ? (w != null && C === "onScroll" && ge("scroll", e), u || v === w || (u = []))
                      : (u = u || []).push(C, w));
        }
        r && (u = u || []).push("style", r);
        var C = u;
        (t.updateQueue = C) && (t.flags |= 4);
      }
    }),
    (Mf = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    }));
  function Jr(e, t) {
    if (!we)
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
      for (var l = e.child; l !== null;)
        ((r |= l.lanes | l.childLanes),
          (o |= l.subtreeFlags & 14680064),
          (o |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null;)
        ((r |= l.lanes | l.childLanes),
          (o |= l.subtreeFlags),
          (o |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = r), t);
  }
  function Wg(e, t, r) {
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
        return (be(t.type) && Zi(), We(t), null);
      case 3:
        return (
          (o = t.stateNode),
          nr(),
          ye(Je),
          ye(Be),
          al(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (ns(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), kt !== null && (Ol(kt), (kt = null)))),
          Al(e, t),
          We(t),
          null
        );
      case 5:
        ol(t);
        var l = Tn(Qr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (Nf(e, t, r, o, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (We(t), null);
          }
          if (((e = Tn(Mt.current)), ns(t))) {
            ((o = t.stateNode), (r = t.type));
            var u = t.memoizedProps;
            switch (((o[Nt] = t), (o[Wr] = u), (e = (t.mode & 1) !== 0), r)) {
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
                for (l = 0; l < zr.length; l++) ge(zr[l], o);
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
                (cu(o, u), ge("invalid", o));
                break;
              case "select":
                ((o._wrapperState = { wasMultiple: !!u.multiple }), ge("invalid", o));
                break;
              case "textarea":
                (hu(o, u), ge("invalid", o));
            }
            (oo(r, u), (l = null));
            for (var h in u)
              if (u.hasOwnProperty(h)) {
                var v = u[h];
                h === "children"
                  ? typeof v == "string"
                    ? o.textContent !== v &&
                      (u.suppressHydrationWarning !== !0 && Yi(o.textContent, v, e),
                      (l = ["children", v]))
                    : typeof v == "number" &&
                      o.textContent !== "" + v &&
                      (u.suppressHydrationWarning !== !0 && Yi(o.textContent, v, e),
                      (l = ["children", "" + v]))
                  : c.hasOwnProperty(h) && v != null && h === "onScroll" && ge("scroll", o);
              }
            switch (r) {
              case "input":
                (Ei(o), du(o, u, !0));
                break;
              case "textarea":
                (Ei(o), mu(o));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (o.onclick = Xi);
            }
            ((o = l), (t.updateQueue = o), o !== null && (t.flags |= 4));
          } else {
            ((h = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = gu(r)),
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
              (e[Wr] = o),
              Df(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = lo(r, o)), r)) {
                case "dialog":
                  (ge("cancel", e), ge("close", e), (l = o));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ge("load", e), (l = o));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < zr.length; l++) ge(zr[l], e);
                  l = o;
                  break;
                case "source":
                  (ge("error", e), (l = o));
                  break;
                case "img":
                case "image":
                case "link":
                  (ge("error", e), ge("load", e), (l = o));
                  break;
                case "details":
                  (ge("toggle", e), (l = o));
                  break;
                case "input":
                  (cu(e, o), (l = to(e, o)), ge("invalid", e));
                  break;
                case "option":
                  l = o;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (l = B({}, o, { value: void 0 })),
                    ge("invalid", e));
                  break;
                case "textarea":
                  (hu(e, o), (l = io(e, o)), ge("invalid", e));
                  break;
                default:
                  l = o;
              }
              (oo(r, l), (v = l));
              for (u in v)
                if (v.hasOwnProperty(u)) {
                  var w = v[u];
                  u === "style"
                    ? xu(e, w)
                    : u === "dangerouslySetInnerHTML"
                      ? ((w = w ? w.__html : void 0), w != null && yu(e, w))
                      : u === "children"
                        ? typeof w == "string"
                          ? (r !== "textarea" || w !== "") && wr(e, w)
                          : typeof w == "number" && wr(e, "" + w)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (c.hasOwnProperty(u)
                            ? w != null && u === "onScroll" && ge("scroll", e)
                            : w != null && G(e, u, w, h));
                }
              switch (r) {
                case "input":
                  (Ei(e), du(e, o, !1));
                  break;
                case "textarea":
                  (Ei(e), mu(e));
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
                  typeof l.onClick == "function" && (e.onclick = Xi);
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
        if (e && t.stateNode != null) Mf(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((r = Tn(Qr.current)), Tn(Mt.current), ns(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[Nt] = t),
              (u = o.nodeValue !== r) && ((e = lt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Yi(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Yi(o.nodeValue, r, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
              (o[Nt] = t),
              (t.stateNode = o));
        }
        return (We(t), null);
      case 13:
        if (
          (ye(Pe),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (we && at !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (_c(), Jn(), (t.flags |= 98560), (u = !1));
          else if (((u = ns(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(s(317));
              u[Nt] = t;
            } else (Jn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (We(t), (u = !1));
          } else (kt !== null && (Ol(kt), (kt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Pe.current & 1) !== 0 ? _e === 0 && (_e = 3) : Ul())),
            t.updateQueue !== null && (t.flags |= 4),
            We(t),
            null);
      case 4:
        return (nr(), Al(e, t), e === null && Br(t.stateNode.containerInfo), We(t), null);
      case 10:
        return (tl(t.type._context), We(t), null);
      case 17:
        return (be(t.type) && Zi(), We(t), null);
      case 19:
        if ((ye(Pe), (u = t.memoizedState), u === null)) return (We(t), null);
        if (((o = (t.flags & 128) !== 0), (h = u.rendering), h === null))
          if (o) Jr(u, !1);
          else {
            if (_e !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((h = as(e)), h !== null)) {
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
                  return (me(Pe, (Pe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Re() > or &&
              ((t.flags |= 128), (o = !0), Jr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = as(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Jr(u, !0),
                u.tail === null && u.tailMode === "hidden" && !h.alternate && !we)
              )
                return (We(t), null);
            } else
              2 * Re() - u.renderingStartTime > or &&
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
  function $g(e, t) {
    switch ((Xo(t), t.tag)) {
      case 1:
        return (
          be(t.type) && Zi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          nr(),
          ye(Je),
          ye(Be),
          al(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ol(t), null);
      case 13:
        if ((ye(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Jn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ye(Pe), null);
      case 4:
        return (nr(), null);
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
  var ys = !1,
    $e = !1,
    Hg = typeof WeakSet == "function" ? WeakSet : Set,
    U = null;
  function ir(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (o) {
          Ce(e, t, o);
        }
      else r.current = null;
  }
  function Rl(e, t, r) {
    try {
      r();
    } catch (o) {
      Ce(e, t, o);
    }
  }
  var Vf = !1;
  function Kg(e, t) {
    if (((Bo = Ii), (e = uc()), Vo(e))) {
      if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var o = r.getSelection && r.getSelection();
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode;
            var l = o.anchorOffset,
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
              C = 0,
              V = 0,
              L = e,
              N = null;
            t: for (;;) {
              for (
                var z;
                L !== r || (l !== 0 && L.nodeType !== 3) || (v = h + l),
                  L !== u || (o !== 0 && L.nodeType !== 3) || (w = h + o),
                  L.nodeType === 3 && (h += L.nodeValue.length),
                  (z = L.firstChild) !== null;
              )
                ((N = L), (L = z));
              for (;;) {
                if (L === e) break t;
                if (
                  (N === r && ++C === l && (v = h),
                  N === u && ++V === o && (w = h),
                  (z = L.nextSibling) !== null)
                )
                  break;
                ((L = N), (N = L.parentNode));
              }
              L = z;
            }
            r = v === -1 || w === -1 ? null : { start: v, end: w };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Uo = { focusedElem: e, selectionRange: r }, Ii = !1, U = t; U !== null;)
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
                    var K = $.memoizedProps,
                      De = $.memoizedState,
                      T = t.stateNode,
                      S = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? K : Tt(t.type, K),
                        De,
                      );
                    T.__reactInternalSnapshotBeforeUpdate = S;
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
            Ce(t, t.return, F);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (U = e));
            break;
          }
          U = t.return;
        }
    return (($ = Vf), (Vf = !1), $);
  }
  function br(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var l = (o = o.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          ((l.destroy = void 0), u !== void 0 && Rl(t, r, u));
        }
        l = l.next;
      } while (l !== o);
    }
  }
  function vs(e, t) {
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
  function _f(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), _f(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Nt], delete t[Wr], delete t[Ko], delete t[Ag], delete t[Rg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function jf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Lf(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || jf(e.return)) return null;
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
            r != null || t.onclick !== null || (t.onclick = Xi)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Nl(e, t, r), e = e.sibling; e !== null;) (Nl(e, t, r), (e = e.sibling));
  }
  function Ml(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Ml(e, t, r), e = e.sibling; e !== null;) (Ml(e, t, r), (e = e.sibling));
  }
  var Ie = null,
    Et = !1;
  function ln(e, t, r) {
    for (r = r.child; r !== null;) (Ff(e, t, r), (r = r.sibling));
  }
  function Ff(e, t, r) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(Mi, r);
      } catch {}
    switch (r.tag) {
      case 5:
        $e || ir(r, t);
      case 6:
        var o = Ie,
          l = Et;
        ((Ie = null),
          ln(e, t, r),
          (Ie = o),
          (Et = l),
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
              e.nodeType === 8 ? Ho(e.parentNode, r) : e.nodeType === 1 && Ho(e, r),
              Mr(e))
            : Ho(Ie, r.stateNode));
        break;
      case 4:
        ((o = Ie),
          (l = Et),
          (Ie = r.stateNode.containerInfo),
          (Et = !0),
          ln(e, t, r),
          (Ie = o),
          (Et = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$e && ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          l = o = o.next;
          do {
            var u = l,
              h = u.destroy;
            ((u = u.tag),
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Rl(r, t, h),
              (l = l.next));
          } while (l !== o);
        }
        ln(e, t, r);
        break;
      case 1:
        if (!$e && (ir(r, t), (o = r.stateNode), typeof o.componentWillUnmount == "function"))
          try {
            ((o.props = r.memoizedProps), (o.state = r.memoizedState), o.componentWillUnmount());
          } catch (v) {
            Ce(r, t, v);
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
  function If(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Hg()),
        t.forEach(function (o) {
          var l = ey.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(l, l));
        }));
    }
  }
  function Ct(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var l = r[o];
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
          (Ff(u, h, l), (Ie = null), (Et = !1));
          var w = l.alternate;
          (w !== null && (w.return = null), (l.return = null));
        } catch (C) {
          Ce(l, t, C);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (Of(t, e), (t = t.sibling));
  }
  function Of(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ct(t, e), _t(e), o & 4)) {
          try {
            (br(3, e, e.return), vs(3, e));
          } catch (K) {
            Ce(e, e.return, K);
          }
          try {
            br(5, e, e.return);
          } catch (K) {
            Ce(e, e.return, K);
          }
        }
        break;
      case 1:
        (Ct(t, e), _t(e), o & 512 && r !== null && ir(r, r.return));
        break;
      case 5:
        if ((Ct(t, e), _t(e), o & 512 && r !== null && ir(r, r.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            wr(l, "");
          } catch (K) {
            Ce(e, e.return, K);
          }
        }
        if (o & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            h = r !== null ? r.memoizedProps : u,
            v = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              (v === "input" && u.type === "radio" && u.name != null && fu(l, u), lo(v, h));
              var C = lo(v, u);
              for (h = 0; h < w.length; h += 2) {
                var V = w[h],
                  L = w[h + 1];
                V === "style"
                  ? xu(l, L)
                  : V === "dangerouslySetInnerHTML"
                    ? yu(l, L)
                    : V === "children"
                      ? wr(l, L)
                      : G(l, V, L, C);
              }
              switch (v) {
                case "input":
                  no(l, u);
                  break;
                case "textarea":
                  pu(l, u);
                  break;
                case "select":
                  var N = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var z = u.value;
                  z != null
                    ? In(l, !!u.multiple, z, !1)
                    : N !== !!u.multiple &&
                      (u.defaultValue != null
                        ? In(l, !!u.multiple, u.defaultValue, !0)
                        : In(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[Wr] = u;
            } catch (K) {
              Ce(e, e.return, K);
            }
        }
        break;
      case 6:
        if ((Ct(t, e), _t(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (K) {
            Ce(e, e.return, K);
          }
        }
        break;
      case 3:
        if ((Ct(t, e), _t(e), o & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            Mr(t.containerInfo);
          } catch (K) {
            Ce(e, e.return, K);
          }
        break;
      case 4:
        (Ct(t, e), _t(e));
        break;
      case 13:
        (Ct(t, e),
          _t(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (jl = Re())),
          o & 4 && If(e));
        break;
      case 22:
        if (
          ((V = r !== null && r.memoizedState !== null),
          e.mode & 1 ? (($e = (C = $e) || V), Ct(t, e), ($e = C)) : Ct(t, e),
          _t(e),
          o & 8192)
        ) {
          if (
            ((C = e.memoizedState !== null), (e.stateNode.isHidden = C) && !V && (e.mode & 1) !== 0)
          )
            for (U = e, V = e.child; V !== null;) {
              for (L = U = V; U !== null;) {
                switch (((N = U), (z = N.child), N.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    br(4, N, N.return);
                    break;
                  case 1:
                    ir(N, N.return);
                    var $ = N.stateNode;
                    if (typeof $.componentWillUnmount == "function") {
                      ((o = N), (r = N.return));
                      try {
                        ((t = o),
                          ($.props = t.memoizedProps),
                          ($.state = t.memoizedState),
                          $.componentWillUnmount());
                      } catch (K) {
                        Ce(o, r, K);
                      }
                    }
                    break;
                  case 5:
                    ir(N, N.return);
                    break;
                  case 22:
                    if (N.memoizedState !== null) {
                      Uf(L);
                      continue;
                    }
                }
                z !== null ? ((z.return = N), (U = z)) : Uf(L);
              }
              V = V.sibling;
            }
          e: for (V = null, L = e; ;) {
            if (L.tag === 5) {
              if (V === null) {
                V = L;
                try {
                  ((l = L.stateNode),
                    C
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((v = L.stateNode),
                        (w = L.memoizedProps.style),
                        (h = w != null && w.hasOwnProperty("display") ? w.display : null),
                        (v.style.display = vu("display", h))));
                } catch (K) {
                  Ce(e, e.return, K);
                }
              }
            } else if (L.tag === 6) {
              if (V === null)
                try {
                  L.stateNode.nodeValue = C ? "" : L.memoizedProps;
                } catch (K) {
                  Ce(e, e.return, K);
                }
            } else if (
              ((L.tag !== 22 && L.tag !== 23) || L.memoizedState === null || L === e) &&
              L.child !== null
            ) {
              ((L.child.return = L), (L = L.child));
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null;) {
              if (L.return === null || L.return === e) break e;
              (V === L && (V = null), (L = L.return));
            }
            (V === L && (V = null), (L.sibling.return = L.return), (L = L.sibling));
          }
        }
        break;
      case 19:
        (Ct(t, e), _t(e), o & 4 && If(e));
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
          for (var r = e.return; r !== null;) {
            if (jf(r)) {
              var o = r;
              break e;
            }
            r = r.return;
          }
          throw Error(s(160));
        }
        switch (o.tag) {
          case 5:
            var l = o.stateNode;
            o.flags & 32 && (wr(l, ""), (o.flags &= -33));
            var u = Lf(e);
            Ml(e, u, l);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              v = Lf(e);
            Nl(e, v, h);
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
  function Gg(e, t, r) {
    ((U = e), zf(e));
  }
  function zf(e, t, r) {
    for (var o = (e.mode & 1) !== 0; U !== null;) {
      var l = U,
        u = l.child;
      if (l.tag === 22 && o) {
        var h = l.memoizedState !== null || ys;
        if (!h) {
          var v = l.alternate,
            w = (v !== null && v.memoizedState !== null) || $e;
          v = ys;
          var C = $e;
          if (((ys = h), ($e = w) && !C))
            for (U = l; U !== null;)
              ((h = U),
                (w = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Wf(l)
                  : w !== null
                    ? ((w.return = h), (U = w))
                    : Wf(l));
          for (; u !== null;) ((U = u), zf(u), (u = u.sibling));
          ((U = l), (ys = v), ($e = C));
        }
        Bf(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = l), (U = u)) : Bf(e);
    }
  }
  function Bf(e) {
    for (; U !== null;) {
      var t = U;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                $e || vs(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !$e)
                  if (r === null) o.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? r.memoizedProps : Tt(t.type, r.memoizedProps);
                    o.componentDidUpdate(l, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = t.updateQueue;
                u !== null && Bc(t, u, o);
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
                  Bc(t, h, r);
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
                  var C = t.alternate;
                  if (C !== null) {
                    var V = C.memoizedState;
                    if (V !== null) {
                      var L = V.dehydrated;
                      L !== null && Mr(L);
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
        } catch (N) {
          Ce(t, t.return, N);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        ((r.return = t.return), (U = r));
        break;
      }
      U = t.return;
    }
  }
  function Uf(e) {
    for (; U !== null;) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        ((r.return = t.return), (U = r));
        break;
      }
      U = t.return;
    }
  }
  function Wf(e) {
    for (; U !== null;) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              vs(4, t);
            } catch (w) {
              Ce(t, r, w);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var l = t.return;
              try {
                o.componentDidMount();
              } catch (w) {
                Ce(t, l, w);
              }
            }
            var u = t.return;
            try {
              Dl(t);
            } catch (w) {
              Ce(t, u, w);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Dl(t);
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
  var Qg = Math.ceil,
    xs = te.ReactCurrentDispatcher,
    Vl = te.ReactCurrentOwner,
    gt = te.ReactCurrentBatchConfig,
    le = 0,
    Le = null,
    Me = null,
    Oe = 0,
    ut = 0,
    sr = tn(0),
    _e = 0,
    ei = null,
    Cn = 0,
    ws = 0,
    _l = 0,
    ti = null,
    tt = null,
    jl = 0,
    or = 1 / 0,
    $t = null,
    Ss = !1,
    Ll = null,
    an = null,
    Ps = !1,
    un = null,
    ks = 0,
    ni = 0,
    Fl = null,
    Ts = -1,
    Es = 0;
  function Xe() {
    return (le & 6) !== 0 ? Re() : Ts !== -1 ? Ts : (Ts = Re());
  }
  function cn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (le & 2) !== 0 && Oe !== 0
        ? Oe & -Oe
        : Ng.transition !== null
          ? (Es === 0 && (Es = ju()), Es)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $u(e.type))), e);
  }
  function At(e, t, r, o) {
    if (50 < ni) throw ((ni = 0), (Fl = null), Error(s(185)));
    (Cr(e, r, o),
      ((le & 2) === 0 || e !== Le) &&
        (e === Le && ((le & 2) === 0 && (ws |= r), _e === 4 && fn(e, Oe)),
        nt(e, o),
        r === 1 && le === 0 && (t.mode & 1) === 0 && ((or = Re() + 500), bi && rn())));
  }
  function nt(e, t) {
    var r = e.callbackNode;
    Nm(e, t);
    var o = ji(e, e === Le ? Oe : 0);
    if (o === 0) (r !== null && Mu(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && Mu(r), t === 1))
        (e.tag === 0 ? Dg(Hf.bind(null, e)) : Rc(Hf.bind(null, e)),
          Eg(function () {
            (le & 6) === 0 && rn();
          }),
          (r = null));
      else {
        switch (Lu(o)) {
          case 1:
            r = mo;
            break;
          case 4:
            r = Vu;
            break;
          case 16:
            r = Ni;
            break;
          case 536870912:
            r = _u;
            break;
          default:
            r = Ni;
        }
        r = Jf(r, $f.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function $f(e, t) {
    if (((Ts = -1), (Es = 0), (le & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (lr() && e.callbackNode !== r) return null;
    var o = ji(e, e === Le ? Oe : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Cs(e, o);
    else {
      t = o;
      var l = le;
      le |= 2;
      var u = Gf();
      (Le !== e || Oe !== t) && (($t = null), (or = Re() + 500), Rn(e, t));
      do
        try {
          qg();
          break;
        } catch (v) {
          Kf(e, v);
        }
      while (!0);
      (el(), (xs.current = u), (le = l), Me !== null ? (t = 0) : ((Le = null), (Oe = 0), (t = _e)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = go(e)), l !== 0 && ((o = l), (t = Il(e, l)))), t === 1))
        throw ((r = ei), Rn(e, 0), fn(e, o), nt(e, Re()), r);
      if (t === 6) fn(e, o);
      else {
        if (
          ((l = e.current.alternate),
          (o & 30) === 0 &&
            !Yg(l) &&
            ((t = Cs(e, o)),
            t === 2 && ((u = go(e)), u !== 0 && ((o = u), (t = Il(e, u)))),
            t === 1))
        )
          throw ((r = ei), Rn(e, 0), fn(e, o), nt(e, Re()), r);
        switch (((e.finishedWork = l), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Dn(e, tt, $t);
            break;
          case 3:
            if ((fn(e, o), (o & 130023424) === o && ((t = jl + 500 - Re()), 10 < t))) {
              if (ji(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & o) !== o)) {
                (Xe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = $o(Dn.bind(null, e, tt, $t), t);
              break;
            }
            Dn(e, tt, $t);
            break;
          case 4:
            if ((fn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, l = -1; 0 < o;) {
              var h = 31 - St(o);
              ((u = 1 << h), (h = t[h]), h > l && (l = h), (o &= ~u));
            }
            if (
              ((o = l),
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
                            : 1960 * Qg(o / 1960)) - o),
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
    return (nt(e, Re()), e.callbackNode === r ? $f.bind(null, e) : null);
  }
  function Il(e, t) {
    var r = ti;
    return (
      e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
      (e = Cs(e, t)),
      e !== 2 && ((t = tt), (tt = r), t !== null && Ol(t)),
      e
    );
  }
  function Ol(e) {
    tt === null ? (tt = e) : tt.push.apply(tt, e);
  }
  function Yg(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var l = r[o],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!Pt(u(), l)) return !1;
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
      t &= ~_l, t &= ~ws, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - St(t),
        o = 1 << r;
      ((e[r] = -1), (t &= ~o));
    }
  }
  function Hf(e) {
    if ((le & 6) !== 0) throw Error(s(327));
    lr();
    var t = ji(e, 0);
    if ((t & 1) === 0) return (nt(e, Re()), null);
    var r = Cs(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = go(e);
      o !== 0 && ((t = o), (r = Il(e, o)));
    }
    if (r === 1) throw ((r = ei), Rn(e, 0), fn(e, t), nt(e, Re()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Dn(e, tt, $t),
      nt(e, Re()),
      null
    );
  }
  function zl(e, t) {
    var r = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      ((le = r), le === 0 && ((or = Re() + 500), bi && rn()));
    }
  }
  function An(e) {
    un !== null && un.tag === 0 && (le & 6) === 0 && lr();
    var t = le;
    le |= 1;
    var r = gt.transition,
      o = he;
    try {
      if (((gt.transition = null), (he = 1), e)) return e();
    } finally {
      ((he = o), (gt.transition = r), (le = t), (le & 6) === 0 && rn());
    }
  }
  function Bl() {
    ((ut = sr.current), ye(sr));
  }
  function Rn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Tg(r)), Me !== null))
      for (r = Me.return; r !== null;) {
        var o = r;
        switch ((Xo(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Zi());
            break;
          case 3:
            (nr(), ye(Je), ye(Be), al());
            break;
          case 5:
            ol(o);
            break;
          case 4:
            nr();
            break;
          case 13:
            ye(Pe);
            break;
          case 19:
            ye(Pe);
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
      ((Le = e),
      (Me = e = dn(e.current, null)),
      (Oe = ut = t),
      (_e = 0),
      (ei = null),
      (_l = ws = Cn = 0),
      (tt = ti = null),
      kn !== null)
    ) {
      for (t = 0; t < kn.length; t++)
        if (((r = kn[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var l = o.next,
            u = r.pending;
          if (u !== null) {
            var h = u.next;
            ((u.next = l), (o.next = h));
          }
          r.pending = o;
        }
      kn = null;
    }
    return e;
  }
  function Kf(e, t) {
    do {
      var r = Me;
      try {
        if ((el(), (us.current = hs), cs)) {
          for (var o = ke.memoizedState; o !== null;) {
            var l = o.queue;
            (l !== null && (l.pending = null), (o = o.next));
          }
          cs = !1;
        }
        if (
          ((En = 0),
          (je = Ve = ke = null),
          (Yr = !1),
          (Xr = 0),
          (Vl.current = null),
          r === null || r.return === null)
        ) {
          ((_e = 1), (ei = t), (Me = null));
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
            var C = w,
              V = v,
              L = V.tag;
            if ((V.mode & 1) === 0 && (L === 0 || L === 11 || L === 15)) {
              var N = V.alternate;
              N
                ? ((V.updateQueue = N.updateQueue),
                  (V.memoizedState = N.memoizedState),
                  (V.lanes = N.lanes))
                : ((V.updateQueue = null), (V.memoizedState = null));
            }
            var z = gf(h);
            if (z !== null) {
              ((z.flags &= -257), yf(z, h, v, u, t), z.mode & 1 && mf(u, C, t), (t = z), (w = C));
              var $ = t.updateQueue;
              if ($ === null) {
                var K = new Set();
                (K.add(w), (t.updateQueue = K));
              } else $.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                (mf(u, C, t), Ul());
                break e;
              }
              w = Error(s(426));
            }
          } else if (we && v.mode & 1) {
            var De = gf(h);
            if (De !== null) {
              ((De.flags & 65536) === 0 && (De.flags |= 256), yf(De, h, v, u, t), Jo(rr(w, v)));
              break e;
            }
          }
          ((u = w = rr(w, v)),
            _e !== 4 && (_e = 2),
            ti === null ? (ti = [u]) : ti.push(u),
            (u = h));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var T = hf(u, w, t);
                zc(u, T);
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
                  var F = pf(u, v, t);
                  zc(u, F);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Yf(r);
      } catch (Q) {
        ((t = Q), Me === r && r !== null && (Me = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Gf() {
    var e = xs.current;
    return ((xs.current = hs), e === null ? hs : e);
  }
  function Ul() {
    ((_e === 0 || _e === 3 || _e === 2) && (_e = 4),
      Le === null || ((Cn & 268435455) === 0 && (ws & 268435455) === 0) || fn(Le, Oe));
  }
  function Cs(e, t) {
    var r = le;
    le |= 2;
    var o = Gf();
    (Le !== e || Oe !== t) && (($t = null), Rn(e, t));
    do
      try {
        Xg();
        break;
      } catch (l) {
        Kf(e, l);
      }
    while (!0);
    if ((el(), (le = r), (xs.current = o), Me !== null)) throw Error(s(261));
    return ((Le = null), (Oe = 0), _e);
  }
  function Xg() {
    for (; Me !== null;) Qf(Me);
  }
  function qg() {
    for (; Me !== null && !Sm();) Qf(Me);
  }
  function Qf(e) {
    var t = Zf(e.alternate, e, ut);
    ((e.memoizedProps = e.pendingProps), t === null ? Yf(e) : (Me = t), (Vl.current = null));
  }
  function Yf(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Wg(r, t, ut)), r !== null)) {
          Me = r;
          return;
        }
      } else {
        if (((r = $g(r, t)), r !== null)) {
          ((r.flags &= 32767), (Me = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((_e = 6), (Me = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    _e === 0 && (_e = 5);
  }
  function Dn(e, t, r) {
    var o = he,
      l = gt.transition;
    try {
      ((gt.transition = null), (he = 1), Zg(e, t, r, o));
    } finally {
      ((gt.transition = l), (he = o));
    }
    return null;
  }
  function Zg(e, t, r, o) {
    do lr();
    while (un !== null);
    if ((le & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var l = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = r.lanes | r.childLanes;
    if (
      (Mm(e, u),
      e === Le && ((Me = Le = null), (Oe = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Ps ||
        ((Ps = !0),
        Jf(Ni, function () {
          return (lr(), null);
        })),
      (u = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = gt.transition), (gt.transition = null));
      var h = he;
      he = 1;
      var v = le;
      ((le |= 4),
        (Vl.current = null),
        Kg(e, r),
        Of(r, e),
        yg(Uo),
        (Ii = !!Bo),
        (Uo = Bo = null),
        (e.current = r),
        Gg(r),
        Pm(),
        (le = v),
        (he = h),
        (gt.transition = u));
    } else e.current = r;
    if (
      (Ps && ((Ps = !1), (un = e), (ks = l)),
      (u = e.pendingLanes),
      u === 0 && (an = null),
      Em(r.stateNode),
      nt(e, Re()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((l = t[r]), o(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Ss) throw ((Ss = !1), (e = Ll), (Ll = null), e);
    return (
      (ks & 1) !== 0 && e.tag !== 0 && lr(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === Fl ? ni++ : ((ni = 0), (Fl = e))) : (ni = 0),
      rn(),
      null
    );
  }
  function lr() {
    if (un !== null) {
      var e = Lu(ks),
        t = gt.transition,
        r = he;
      try {
        if (((gt.transition = null), (he = 16 > e ? 16 : e), un === null)) var o = !1;
        else {
          if (((e = un), (un = null), (ks = 0), (le & 6) !== 0)) throw Error(s(331));
          var l = le;
          for (le |= 4, U = e.current; U !== null;) {
            var u = U,
              h = u.child;
            if ((U.flags & 16) !== 0) {
              var v = u.deletions;
              if (v !== null) {
                for (var w = 0; w < v.length; w++) {
                  var C = v[w];
                  for (U = C; U !== null;) {
                    var V = U;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        br(8, V, u);
                    }
                    var L = V.child;
                    if (L !== null) ((L.return = V), (U = L));
                    else
                      for (; U !== null;) {
                        V = U;
                        var N = V.sibling,
                          z = V.return;
                        if ((_f(V), V === C)) {
                          U = null;
                          break;
                        }
                        if (N !== null) {
                          ((N.return = z), (U = N));
                          break;
                        }
                        U = z;
                      }
                  }
                }
                var $ = u.alternate;
                if ($ !== null) {
                  var K = $.child;
                  if (K !== null) {
                    $.child = null;
                    do {
                      var De = K.sibling;
                      ((K.sibling = null), (K = De));
                    } while (K !== null);
                  }
                }
                U = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null) ((h.return = u), (U = h));
            else
              e: for (; U !== null;) {
                if (((u = U), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(9, u, u.return);
                  }
                var T = u.sibling;
                if (T !== null) {
                  ((T.return = u.return), (U = T));
                  break e;
                }
                U = u.return;
              }
          }
          var S = e.current;
          for (U = S; U !== null;) {
            h = U;
            var E = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && E !== null) ((E.return = h), (U = E));
            else
              e: for (h = S; U !== null;) {
                if (((v = U), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vs(9, v);
                    }
                  } catch (Q) {
                    Ce(v, v.return, Q);
                  }
                if (v === h) {
                  U = null;
                  break e;
                }
                var F = v.sibling;
                if (F !== null) {
                  ((F.return = v.return), (U = F));
                  break e;
                }
                U = v.return;
              }
          }
          if (((le = l), rn(), Dt && typeof Dt.onPostCommitFiberRoot == "function"))
            try {
              Dt.onPostCommitFiberRoot(Mi, e);
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
  function Xf(e, t, r) {
    ((t = rr(r, t)),
      (t = hf(e, t, 1)),
      (e = on(e, t, 1)),
      (t = Xe()),
      e !== null && (Cr(e, 1, t), nt(e, t)));
  }
  function Ce(e, t, r) {
    if (e.tag === 3) Xf(e, e, r);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Xf(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" && (an === null || !an.has(o)))
          ) {
            ((e = rr(r, e)),
              (e = pf(t, e, 1)),
              (t = on(t, e, 1)),
              (e = Xe()),
              t !== null && (Cr(t, 1, e), nt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jg(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = Xe()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Le === e &&
        (Oe & r) === r &&
        (_e === 4 || (_e === 3 && (Oe & 130023424) === Oe && 500 > Re() - jl)
          ? Rn(e, 0)
          : (_l |= r)),
      nt(e, t));
  }
  function qf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = _i), (_i <<= 1), (_i & 130023424) === 0 && (_i = 4194304)));
    var r = Xe();
    ((e = Bt(e, t)), e !== null && (Cr(e, t, r), nt(e, r)));
  }
  function bg(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), qf(e, r));
  }
  function ey(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          l = e.memoizedState;
        l !== null && (r = l.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    (o !== null && o.delete(t), qf(e, r));
  }
  var Zf;
  Zf = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Je.current) et = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((et = !1), Ug(e, t, r));
        et = (e.flags & 131072) !== 0;
      }
    else ((et = !1), we && (t.flags & 1048576) !== 0 && Dc(t, ts, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (gs(e, t), (e = t.pendingProps));
        var l = Xn(t, Be.current);
        (tr(t, r), (l = fl(null, t, o, e, l, r)));
        var u = dl();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              be(o) ? ((u = !0), Ji(t)) : (u = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              il(t),
              (l.updater = ps),
              (t.stateNode = l),
              (l._reactInternals = t),
              vl(t, o, e, r),
              (t = Pl(null, t, o, !0, u, r)))
            : ((t.tag = 0), we && u && Yo(t), Ye(null, t, l, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (gs(e, t),
            (e = t.pendingProps),
            (l = o._init),
            (o = l(o._payload)),
            (t.type = o),
            (l = t.tag = ny(o)),
            (e = Tt(o, e)),
            l)
          ) {
            case 0:
              t = Sl(null, t, o, e, r);
              break e;
            case 1:
              t = kf(null, t, o, e, r);
              break e;
            case 11:
              t = vf(null, t, o, e, r);
              break e;
            case 14:
              t = xf(null, t, o, Tt(o.type, e), r);
              break e;
          }
          throw Error(s(306, o, ""));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (l = t.pendingProps),
          (l = t.elementType === o ? l : Tt(o, l)),
          Sl(e, t, o, l, r)
        );
      case 1:
        return (
          (o = t.type),
          (l = t.pendingProps),
          (l = t.elementType === o ? l : Tt(o, l)),
          kf(e, t, o, l, r)
        );
      case 3:
        e: {
          if ((Tf(t), e === null)) throw Error(s(387));
          ((o = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            Oc(e, t),
            ls(t, o, null, r));
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
              ((l = rr(Error(s(423)), t)), (t = Ef(e, t, o, r, l)));
              break e;
            } else if (o !== l) {
              ((l = rr(Error(s(424)), t)), (t = Ef(e, t, o, r, l)));
              break e;
            } else
              for (
                at = en(t.stateNode.containerInfo.firstChild),
                  lt = t,
                  we = !0,
                  kt = null,
                  r = Fc(t, null, o, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((Jn(), o === l)) {
              t = Wt(e, t, r);
              break e;
            }
            Ye(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Uc(t),
          e === null && Zo(t),
          (o = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = l.children),
          Wo(o, l) ? (h = null) : u !== null && Wo(o, u) && (t.flags |= 32),
          Pf(e, t),
          Ye(e, t, h, r),
          t.child
        );
      case 6:
        return (e === null && Zo(t), null);
      case 13:
        return Cf(e, t, r);
      case 4:
        return (
          sl(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = bn(t, null, o, r)) : Ye(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (l = t.pendingProps),
          (l = t.elementType === o ? l : Tt(o, l)),
          vf(e, t, o, l, r)
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
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (h = l.value),
            me(is, o._currentValue),
            (o._currentValue = h),
            u !== null)
          )
            if (Pt(u.value, h)) {
              if (u.children === l.children && !Je.current) {
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
                        var C = u.updateQueue;
                        if (C !== null) {
                          C = C.shared;
                          var V = C.pending;
                          (V === null ? (w.next = w) : ((w.next = V.next), (V.next = w)),
                            (C.pending = w));
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
          (Ye(e, t, l.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (o = t.pendingProps.children),
          tr(t, r),
          (l = pt(l)),
          (o = o(l)),
          (t.flags |= 1),
          Ye(e, t, o, r),
          t.child
        );
      case 14:
        return ((o = t.type), (l = Tt(o, t.pendingProps)), (l = Tt(o.type, l)), xf(e, t, o, l, r));
      case 15:
        return wf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (l = t.pendingProps),
          (l = t.elementType === o ? l : Tt(o, l)),
          gs(e, t),
          (t.tag = 1),
          be(o) ? ((e = !0), Ji(t)) : (e = !1),
          tr(t, r),
          ff(t, o, l),
          vl(t, o, l, r),
          Pl(null, t, o, !0, e, r)
        );
      case 19:
        return Rf(e, t, r);
      case 22:
        return Sf(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function Jf(e, t) {
    return Nu(e, t);
  }
  function ty(e, t, r, o) {
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
    return new ty(e, t, r, o);
  }
  function Wl(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ny(e) {
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
  function As(e, t, r, o, l, u) {
    var h = 2;
    if (((o = e), typeof e == "function")) Wl(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case ae:
          return Nn(r.children, l, u, t);
        case J:
          ((h = 8), (l |= 8));
          break;
        case Se:
          return ((e = yt(12, r, t, l | 2)), (e.elementType = Se), (e.lanes = u), e);
        case Ge:
          return ((e = yt(13, r, t, l)), (e.elementType = Ge), (e.lanes = u), e);
        case Ze:
          return ((e = yt(19, r, t, l)), (e.elementType = Ze), (e.lanes = u), e);
        case ie:
          return Rs(r, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ee:
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
    return ((t = yt(h, r, t, l)), (t.elementType = e), (t.type = o), (t.lanes = u), t);
  }
  function Nn(e, t, r, o) {
    return ((e = yt(7, e, o, t)), (e.lanes = r), e);
  }
  function Rs(e, t, r, o) {
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
  function ry(e, t, r, o, l) {
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
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Kl(e, t, r, o, l, u, h, v, w) {
    return (
      (e = new ry(e, t, r, v, w)),
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
  function iy(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ne,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function bf(e) {
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
      if (be(r)) return Cc(e, r, t);
    }
    return t;
  }
  function ed(e, t, r, o, l, u, h, v, w) {
    return (
      (e = Kl(r, o, !0, e, l, u, h, v, w)),
      (e.context = bf(null)),
      (r = e.current),
      (o = Xe()),
      (l = cn(r)),
      (u = Ut(o, l)),
      (u.callback = t ?? null),
      on(r, u, l),
      (e.current.lanes = l),
      Cr(e, l, o),
      nt(e, o),
      e
    );
  }
  function Ds(e, t, r, o) {
    var l = t.current,
      u = Xe(),
      h = cn(l);
    return (
      (r = bf(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Ut(u, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = on(l, t, h)),
      e !== null && (At(e, l, h, u), os(e, l, h)),
      h
    );
  }
  function Ns(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function td(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Gl(e, t) {
    (td(e, t), (e = e.alternate) && td(e, t));
  }
  function sy() {
    return null;
  }
  var nd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ql(e) {
    this._internalRoot = e;
  }
  ((Ms.prototype.render = Ql.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Ds(e, t, null, null);
    }),
    (Ms.prototype.unmount = Ql.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (An(function () {
            Ds(null, e, null, null);
          }),
            (t[Ft] = null));
        }
      }));
  function Ms(e) {
    this._internalRoot = e;
  }
  Ms.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ou();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Zt.length && t !== 0 && t < Zt[r].priority; r++);
      (Zt.splice(r, 0, e), r === 0 && Uu(e));
    }
  };
  function Yl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Vs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function rd() {}
  function oy(e, t, r, o, l) {
    if (l) {
      if (typeof o == "function") {
        var u = o;
        o = function () {
          var C = Ns(h);
          u.call(C);
        };
      }
      var h = ed(t, o, e, 0, null, !1, !1, "", rd);
      return (
        (e._reactRootContainer = h),
        (e[Ft] = h.current),
        Br(e.nodeType === 8 ? e.parentNode : e),
        An(),
        h
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof o == "function") {
      var v = o;
      o = function () {
        var C = Ns(w);
        v.call(C);
      };
    }
    var w = Kl(e, 0, !1, null, null, !1, !1, "", rd);
    return (
      (e._reactRootContainer = w),
      (e[Ft] = w.current),
      Br(e.nodeType === 8 ? e.parentNode : e),
      An(function () {
        Ds(t, w, r, o);
      }),
      w
    );
  }
  function _s(e, t, r, o, l) {
    var u = r._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var v = l;
        l = function () {
          var w = Ns(h);
          v.call(w);
        };
      }
      Ds(t, h, e, l);
    } else h = oy(r, t, e, l, o);
    return Ns(h);
  }
  ((Fu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Er(t.pendingLanes);
          r !== 0 && (vo(t, r | 1), nt(t, Re()), (le & 6) === 0 && ((or = Re() + 500), rn()));
        }
        break;
      case 13:
        (An(function () {
          var o = Bt(e, 1);
          if (o !== null) {
            var l = Xe();
            At(o, e, 1, l);
          }
        }),
          Gl(e, 1));
    }
  }),
    (xo = function (e) {
      if (e.tag === 13) {
        var t = Bt(e, 134217728);
        if (t !== null) {
          var r = Xe();
          At(t, e, 134217728, r);
        }
        Gl(e, 134217728);
      }
    }),
    (Iu = function (e) {
      if (e.tag === 13) {
        var t = cn(e),
          r = Bt(e, t);
        if (r !== null) {
          var o = Xe();
          At(r, e, t, o);
        }
        Gl(e, t);
      }
    }),
    (Ou = function () {
      return he;
    }),
    (zu = function (e, t) {
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
                var l = qi(o);
                if (!l) throw Error(s(90));
                (uu(o), no(o, l));
              }
            }
          }
          break;
        case "textarea":
          pu(e, r);
          break;
        case "select":
          ((t = r.value), t != null && In(e, !!r.multiple, t, !1));
      }
    }),
    (ku = zl),
    (Tu = An));
  var ly = { usingClientEntryPoint: !1, Events: [$r, Qn, qi, Su, Pu, zl] },
    ri = {
      findFiberByHostInstance: xn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    ay = {
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
      currentDispatcherRef: te.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Ru(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: ri.findFiberByHostInstance || sy,
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
        ((Mi = js.inject(ay)), (Dt = js));
      } catch {}
  }
  return (
    (rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ly),
    (rt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Yl(t)) throw Error(s(200));
      return iy(e, t, null, r);
    }),
    (rt.createRoot = function (e, t) {
      if (!Yl(e)) throw Error(s(299));
      var r = !1,
        o = "",
        l = nd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Kl(e, 1, !1, null, null, r, !1, o, l)),
        (e[Ft] = t.current),
        Br(e.nodeType === 8 ? e.parentNode : e),
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
      return ((e = Ru(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (rt.flushSync = function (e) {
      return An(e);
    }),
    (rt.hydrate = function (e, t, r) {
      if (!Vs(t)) throw Error(s(200));
      return _s(null, e, t, !0, r);
    }),
    (rt.hydrateRoot = function (e, t, r) {
      if (!Yl(e)) throw Error(s(405));
      var o = (r != null && r.hydratedSources) || null,
        l = !1,
        u = "",
        h = nd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (h = r.onRecoverableError)),
        (t = ed(t, null, e, 1, r ?? null, l, !1, u, h)),
        (e[Ft] = t.current),
        Br(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((r = o[e]),
            (l = r._getVersion),
            (l = l(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, l])
              : t.mutableSourceEagerHydrationData.push(r, l));
      return new Ms(t);
    }),
    (rt.render = function (e, t, r) {
      if (!Vs(t)) throw Error(s(200));
      return _s(null, e, t, !1, r);
    }),
    (rt.unmountComponentAtNode = function (e) {
      if (!Vs(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (An(function () {
            _s(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ft] = null));
            });
          }),
          !0)
        : !1;
    }),
    (rt.unstable_batchedUpdates = zl),
    (rt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!Vs(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return _s(e, t, r, !1, o);
    }),
    (rt.version = "18.3.1-next-f1338f8080-20240426"),
    rt
  );
}
var fd;
function gy() {
  if (fd) return Zl.exports;
  fd = 1;
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
  return (n(), (Zl.exports = my()), Zl.exports);
}
var dd;
function yy() {
  if (dd) return Ls;
  dd = 1;
  var n = gy();
  return ((Ls.createRoot = n.createRoot), (Ls.hydrateRoot = n.hydrateRoot), Ls);
}
var vy = yy();
function oi(n) {
  const i = n.replace(/^\//, "").replace(/\/$/, "");
  return i ? `#/${i}` : "#/";
}
function Na(n) {
  const i = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return i
    ? i.startsWith("/")
      ? { kind: "route", path: i.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: i }
    : null;
}
function Rh(n, i = "smooth") {
  if (typeof document > "u") return !1;
  const s = document.getElementById(n);
  return s ? (s.scrollIntoView({ behavior: i, block: "start" }), !0) : !1;
}
function Dh(n) {
  typeof window > "u" || (window.location.hash = oi(n));
}
function xy() {
  const n = Na();
  return (n == null ? void 0 : n.kind) === "route" ? n.path : "";
}
function Nh() {
  if (typeof window > "u") return;
  const n = Na();
  (n == null ? void 0 : n.kind) === "section" && requestAnimationFrame(() => Rh(n.id, "auto"));
}
function wy(n, i) {
  if (typeof window > "u") return () => {};
  const s = () => {
    const a = Na();
    if (!a) {
      n("");
      return;
    }
    if (a.kind === "route") {
      n(a.path);
      return;
    }
    (Rh(a.id, "smooth"), n(""));
  };
  return (
    s(),
    window.addEventListener("hashchange", s),
    () => window.removeEventListener("hashchange", s)
  );
}
function Sy(n = "") {
  const [i, s] = H.useState(() => (typeof window < "u" ? xy() : n));
  return (H.useEffect(() => wy(s), []), i || n);
}
function Py({ routes: n, defaultRoute: i = "", className: s }) {
  const a = Sy(i);
  H.useEffect(() => {
    Nh();
  }, []);
  const c = a in n ? a : i,
    d = n[c] ?? n[i];
  return A.jsx("div", { className: s, children: d });
}
const Mh = H.createContext({});
function ky(n) {
  const i = H.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const Ma = H.createContext(null),
  Vh = H.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
function Ty(n = !0) {
  const i = H.useContext(Ma);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: a, register: c } = i,
    d = H.useId();
  H.useEffect(() => {
    n && c(d);
  }, [n]);
  const f = H.useCallback(() => n && a && a(d), [d, a, n]);
  return !s && a ? [!1, f] : [!0];
}
const Va = typeof window < "u",
  Ey = Va ? H.useLayoutEffect : H.useEffect,
  ct = (n) => n;
let _h = ct;
function _a(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const pr = (n, i, s) => {
    const a = i - n;
    return a === 0 ? 1 : (s - n) / a;
  },
  Ht = (n) => n * 1e3,
  Kt = (n) => n / 1e3,
  Cy = { useManualTiming: !1 };
function Ay(n) {
  let i = new Set(),
    s = new Set(),
    a = !1,
    c = !1;
  const d = new WeakSet();
  let f = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(g) {
    (d.has(g) && (m.schedule(g), n()), g(f));
  }
  const m = {
    schedule: (g, y = !1, x = !1) => {
      const R = x && a ? i : s;
      return (y && d.add(g), R.has(g) || R.add(g), g);
    },
    cancel: (g) => {
      (s.delete(g), d.delete(g));
    },
    process: (g) => {
      if (((f = g), a)) {
        c = !0;
        return;
      }
      ((a = !0),
        ([i, s] = [s, i]),
        i.forEach(p),
        i.clear(),
        (a = !1),
        c && ((c = !1), m.process(g)));
    },
  };
  return m;
}
const Fs = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  Ry = 40;
function jh(n, i) {
  let s = !1,
    a = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = Fs.reduce((I, W) => ((I[W] = Ay(d)), I), {}),
    { read: p, resolveKeyframes: m, update: g, preRender: y, render: x, postRender: P } = f,
    R = () => {
      const I = performance.now();
      ((s = !1),
        (c.delta = a ? 1e3 / 60 : Math.max(Math.min(I - c.timestamp, Ry), 1)),
        (c.timestamp = I),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        g.process(c),
        y.process(c),
        x.process(c),
        P.process(c),
        (c.isProcessing = !1),
        s && i && ((a = !1), n(R)));
    },
    _ = () => {
      ((s = !0), (a = !0), c.isProcessing || n(R));
    };
  return {
    schedule: Fs.reduce((I, W) => {
      const G = f[W];
      return ((I[W] = (te, Y = !1, ne = !1) => (s || _(), G.schedule(te, Y, ne))), I);
    }, {}),
    cancel: (I) => {
      for (let W = 0; W < Fs.length; W++) f[Fs[W]].cancel(I);
    },
    state: c,
    steps: f,
  };
}
const {
    schedule: ve,
    cancel: mn,
    state: ze,
    steps: ea,
  } = jh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ct, !0),
  Lh = H.createContext({ strict: !1 }),
  hd = {
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
for (const n in hd) mr[n] = { isEnabled: (i) => hd[n].some((s) => !!i[s]) };
function Dy(n) {
  for (const i in n) mr[i] = { ...mr[i], ...n[i] };
}
const Ny = new Set([
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
    Ny.has(n)
  );
}
let Fh = (n) => !Ws(n);
function My(n) {
  n && (Fh = (i) => (i.startsWith("on") ? !Ws(i) : n(i)));
}
try {
  My(require("@emotion/is-prop-valid").default);
} catch {}
function Vy(n, i, s) {
  const a = {};
  for (const c in n)
    (c === "values" && typeof n.values == "object") ||
      ((Fh(c) ||
        (s === !0 && Ws(c)) ||
        (!i && !Ws(c)) ||
        (n.draggable && c.startsWith("onDrag"))) &&
        (a[c] = n[c]));
  return a;
}
function _y(n) {
  if (typeof Proxy > "u") return n;
  const i = new Map(),
    s = (...a) => n(...a);
  return new Proxy(s, {
    get: (a, c) => (c === "create" ? n : (i.has(c) || i.set(c, n(c)), i.get(c))),
  });
}
const Xs = H.createContext({});
function pi(n) {
  return typeof n == "string" || Array.isArray(n);
}
function qs(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
const ja = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  La = ["initial", ...ja];
function Zs(n) {
  return qs(n.animate) || La.some((i) => pi(n[i]));
}
function Ih(n) {
  return !!(Zs(n) || n.variants);
}
function jy(n, i) {
  if (Zs(n)) {
    const { initial: s, animate: a } = n;
    return { initial: s === !1 || pi(s) ? s : void 0, animate: pi(a) ? a : void 0 };
  }
  return n.inherit !== !1 ? i : {};
}
function Ly(n) {
  const { initial: i, animate: s } = jy(n, H.useContext(Xs));
  return H.useMemo(() => ({ initial: i, animate: s }), [pd(i), pd(s)]);
}
function pd(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const Fy = Symbol.for("motionComponentSymbol");
function ar(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function Iy(n, i, s) {
  return H.useCallback(
    (a) => {
      (a && n.onMount && n.onMount(a),
        i && (a ? i.mount(a) : i.unmount()),
        s && (typeof s == "function" ? s(a) : ar(s) && (s.current = a)));
    },
    [i],
  );
}
const Fa = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Oy = "framerAppearId",
  Oh = "data-" + Fa(Oy),
  { schedule: Ia } = jh(queueMicrotask, !1),
  zh = H.createContext({});
function zy(n, i, s, a, c) {
  var d, f;
  const { visualElement: p } = H.useContext(Xs),
    m = H.useContext(Lh),
    g = H.useContext(Ma),
    y = H.useContext(Vh).reducedMotion,
    x = H.useRef(null);
  ((a = a || m.renderer),
    !x.current &&
      a &&
      (x.current = a(n, {
        visualState: i,
        parent: p,
        props: s,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: y,
      })));
  const P = x.current,
    R = H.useContext(zh);
  P && !P.projection && c && (P.type === "html" || P.type === "svg") && By(x.current, s, c, R);
  const _ = H.useRef(!1);
  H.useInsertionEffect(() => {
    P && _.current && P.update(s, g);
  });
  const D = s[Oh],
    j = H.useRef(
      !!D &&
        !(!((d = window.MotionHandoffIsComplete) === null || d === void 0) && d.call(window, D)) &&
        ((f = window.MotionHasOptimisedAnimation) === null || f === void 0
          ? void 0
          : f.call(window, D)),
    );
  return (
    Ey(() => {
      P &&
        ((_.current = !0),
        (window.MotionIsMounted = !0),
        P.updateFeatures(),
        Ia.render(P.render),
        j.current && P.animationState && P.animationState.animateChanges());
    }),
    H.useEffect(() => {
      P &&
        (!j.current && P.animationState && P.animationState.animateChanges(),
        j.current &&
          (queueMicrotask(() => {
            var I;
            (I = window.MotionHandoffMarkAsComplete) === null || I === void 0 || I.call(window, D);
          }),
          (j.current = !1)));
    }),
    P
  );
}
function By(n, i, s, a) {
  const { layoutId: c, layout: d, drag: f, dragConstraints: p, layoutScroll: m, layoutRoot: g } = i;
  ((n.projection = new s(n.latestValues, i["data-framer-portal-id"] ? void 0 : Bh(n.parent))),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (p && ar(p)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: a,
      layoutScroll: m,
      layoutRoot: g,
    }));
}
function Bh(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : Bh(n.parent);
}
function Uy({
  preloadedFeatures: n,
  createVisualElement: i,
  useRender: s,
  useVisualState: a,
  Component: c,
}) {
  var d, f;
  n && Dy(n);
  function p(g, y) {
    let x;
    const P = { ...H.useContext(Vh), ...g, layoutId: Wy(g) },
      { isStatic: R } = P,
      _ = Ly(g),
      D = a(g, R);
    if (!R && Va) {
      $y();
      const j = Hy(P);
      ((x = j.MeasureLayout), (_.visualElement = zy(c, D, P, i, j.ProjectionNode)));
    }
    return A.jsxs(Xs.Provider, {
      value: _,
      children: [
        x && _.visualElement ? A.jsx(x, { visualElement: _.visualElement, ...P }) : null,
        s(c, g, Iy(D, _.visualElement, y), D, R, _.visualElement),
      ],
    });
  }
  p.displayName = `motion.${typeof c == "string" ? c : `create(${(f = (d = c.displayName) !== null && d !== void 0 ? d : c.name) !== null && f !== void 0 ? f : ""})`}`;
  const m = H.forwardRef(p);
  return ((m[Fy] = c), m);
}
function Wy({ layoutId: n }) {
  const i = H.useContext(Mh).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function $y(n, i) {
  H.useContext(Lh).strict;
}
function Hy(n) {
  const { drag: i, layout: s } = mr;
  if (!i && !s) return {};
  const a = { ...i, ...s };
  return {
    MeasureLayout:
      (i != null && i.isEnabled(n)) || (s != null && s.isEnabled(n)) ? a.MeasureLayout : void 0,
    ProjectionNode: a.ProjectionNode,
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
function Oa(n) {
  return typeof n != "string" || n.includes("-") ? !1 : !!(Ky.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function md(n) {
  const i = [{}, {}];
  return (
    n == null ||
      n.values.forEach((s, a) => {
        ((i[0][a] = s.get()), (i[1][a] = s.getVelocity()));
      }),
    i
  );
}
function za(n, i, s, a) {
  if (typeof i == "function") {
    const [c, d] = md(a);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  if ((typeof i == "string" && (i = n.variants && n.variants[i]), typeof i == "function")) {
    const [c, d] = md(a);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  return i;
}
const ha = (n) => Array.isArray(n),
  Gy = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
  Qy = (n) => (ha(n) ? n[n.length - 1] || 0 : n),
  Ke = (n) => !!(n && n.getVelocity);
function zs(n) {
  const i = Ke(n) ? n.get() : n;
  return Gy(i) ? i.toValue() : i;
}
function Yy({ scrapeMotionValuesFromProps: n, createRenderState: i, onUpdate: s }, a, c, d) {
  const f = { latestValues: Xy(a, c, d, n), renderState: i() };
  return (
    s && ((f.onMount = (p) => s({ props: a, current: p, ...f })), (f.onUpdate = (p) => s(p))),
    f
  );
}
const Uh = (n) => (i, s) => {
  const a = H.useContext(Xs),
    c = H.useContext(Ma),
    d = () => Yy(n, i, a, c);
  return s ? d() : ky(d);
};
function Xy(n, i, s, a) {
  const c = {},
    d = a(n, {});
  for (const P in d) c[P] = zs(d[P]);
  let { initial: f, animate: p } = n;
  const m = Zs(n),
    g = Ih(n);
  i &&
    g &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let y = s ? s.initial === !1 : !1;
  y = y || f === !1;
  const x = y ? p : f;
  if (x && typeof x != "boolean" && !qs(x)) {
    const P = Array.isArray(x) ? x : [x];
    for (let R = 0; R < P.length; R++) {
      const _ = za(n, P[R]);
      if (_) {
        const { transitionEnd: D, transition: j, ...I } = _;
        for (const W in I) {
          let G = I[W];
          if (Array.isArray(G)) {
            const te = y ? G.length - 1 : 0;
            G = G[te];
          }
          G !== null && (c[W] = G);
        }
        for (const W in D) c[W] = D[W];
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
  Fn = new Set(yr),
  Wh = (n) => (i) => typeof i == "string" && i.startsWith(n),
  $h = Wh("--"),
  qy = Wh("var(--"),
  Ba = (n) => (qy(n) ? Zy.test(n.split("/*")[0].trim()) : !1),
  Zy = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Hh = (n, i) => (i && typeof n == "number" ? i.transform(n) : n),
  Qt = (n, i, s) => (s > i ? i : s < n ? n : s),
  vr = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  mi = { ...vr, transform: (n) => Qt(0, 1, n) },
  Is = { ...vr, default: 1 },
  xi = (n) => ({
    test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  pn = xi("deg"),
  jt = xi("%"),
  b = xi("px"),
  Jy = xi("vh"),
  by = xi("vw"),
  gd = { ...jt, parse: (n) => jt.parse(n) / 100, transform: (n) => jt.transform(n * 100) },
  ev = {
    borderWidth: b,
    borderTopWidth: b,
    borderRightWidth: b,
    borderBottomWidth: b,
    borderLeftWidth: b,
    borderRadius: b,
    radius: b,
    borderTopLeftRadius: b,
    borderTopRightRadius: b,
    borderBottomRightRadius: b,
    borderBottomLeftRadius: b,
    width: b,
    maxWidth: b,
    height: b,
    maxHeight: b,
    top: b,
    right: b,
    bottom: b,
    left: b,
    padding: b,
    paddingTop: b,
    paddingRight: b,
    paddingBottom: b,
    paddingLeft: b,
    margin: b,
    marginTop: b,
    marginRight: b,
    marginBottom: b,
    marginLeft: b,
    backgroundPositionX: b,
    backgroundPositionY: b,
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
    distance: b,
    translateX: b,
    translateY: b,
    translateZ: b,
    x: b,
    y: b,
    z: b,
    perspective: b,
    transformPerspective: b,
    opacity: mi,
    originX: gd,
    originY: gd,
    originZ: b,
  },
  yd = { ...vr, transform: Math.round },
  Ua = { ...ev, ...tv, zIndex: yd, size: b, fillOpacity: mi, strokeOpacity: mi, numOctaves: yd },
  nv = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  rv = yr.length;
function iv(n, i, s) {
  let a = "",
    c = !0;
  for (let d = 0; d < rv; d++) {
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
      const g = Hh(p, Ua[f]);
      if (!m) {
        c = !1;
        const y = nv[f] || f;
        a += `${y}(${g}) `;
      }
      s && (i[f] = g);
    }
  }
  return ((a = a.trim()), s ? (a = s(i, c ? "" : a)) : c && (a = "none"), a);
}
function Wa(n, i, s) {
  const { style: a, vars: c, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const g = i[m];
    if (Fn.has(m)) {
      f = !0;
      continue;
    } else if ($h(m)) {
      c[m] = g;
      continue;
    } else {
      const y = Hh(g, Ua[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = y)) : (a[m] = y);
    }
  }
  if (
    (i.transform ||
      (f || s ? (a.transform = iv(i, n.transform, s)) : a.transform && (a.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: g = "50%", originZ: y = 0 } = d;
    a.transformOrigin = `${m} ${g} ${y}`;
  }
}
const sv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  ov = { offset: "strokeDashoffset", array: "strokeDasharray" };
function lv(n, i, s = 1, a = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? sv : ov;
  n[d.offset] = b.transform(-a);
  const f = b.transform(i),
    p = b.transform(s);
  n[d.array] = `${f} ${p}`;
}
function vd(n, i, s) {
  return typeof n == "string" ? n : b.transform(i + s * n);
}
function av(n, i, s) {
  const a = vd(i, n.x, n.width),
    c = vd(s, n.y, n.height);
  return `${a} ${c}`;
}
function $a(
  n,
  {
    attrX: i,
    attrY: s,
    attrScale: a,
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
  if ((Wa(n, g, x), y)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: P, style: R, dimensions: _ } = n;
  (P.transform && (_ && (R.transform = P.transform), delete P.transform),
    _ &&
      (c !== void 0 || d !== void 0 || R.transform) &&
      (R.transformOrigin = av(_, c !== void 0 ? c : 0.5, d !== void 0 ? d : 0.5)),
    i !== void 0 && (P.x = i),
    s !== void 0 && (P.y = s),
    a !== void 0 && (P.scale = a),
    f !== void 0 && lv(P, f, p, m, !1));
}
const Ha = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Kh = () => ({ ...Ha(), attrs: {} }),
  Ka = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function Gh(n, { style: i, vars: s }, a, c) {
  Object.assign(n.style, i, c && c.getProjectionStyles(a));
  for (const d in s) n.style.setProperty(d, s[d]);
}
const Qh = new Set([
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
function Yh(n, i, s, a) {
  Gh(n, i, void 0, a);
  for (const c in i.attrs) n.setAttribute(Qh.has(c) ? c : Fa(c), i.attrs[c]);
}
const $s = {};
function uv(n) {
  Object.assign($s, n);
}
function Xh(n, { layout: i, layoutId: s }) {
  return (
    Fn.has(n) || n.startsWith("origin") || ((i || s !== void 0) && (!!$s[n] || n === "opacity"))
  );
}
function Ga(n, i, s) {
  var a;
  const { style: c } = n,
    d = {};
  for (const f in c)
    (Ke(c[f]) ||
      (i.style && Ke(i.style[f])) ||
      Xh(f, n) ||
      ((a = s == null ? void 0 : s.getValue(f)) === null || a === void 0 ? void 0 : a.liveStyle) !==
        void 0) &&
      (d[f] = c[f]);
  return d;
}
function qh(n, i, s) {
  const a = Ga(n, i, s);
  for (const c in n)
    if (Ke(n[c]) || Ke(i[c])) {
      const d = yr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      a[d] = n[c];
    }
  return a;
}
function cv(n, i) {
  try {
    i.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect();
  } catch {
    i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const xd = ["x", "y", "width", "height", "cx", "cy", "r"],
  fv = {
    useVisualState: Uh({
      scrapeMotionValuesFromProps: qh,
      createRenderState: Kh,
      onUpdate: ({ props: n, prevProps: i, current: s, renderState: a, latestValues: c }) => {
        if (!s) return;
        let d = !!n.drag;
        if (!d) {
          for (const p in c)
            if (Fn.has(p)) {
              d = !0;
              break;
            }
        }
        if (!d) return;
        let f = !i;
        if (i)
          for (let p = 0; p < xd.length; p++) {
            const m = xd[p];
            n[m] !== i[m] && (f = !0);
          }
        f &&
          ve.read(() => {
            (cv(s, a),
              ve.render(() => {
                ($a(a, c, Ka(s.tagName), n.transformTemplate), Yh(s, a));
              }));
          });
      },
    }),
  },
  dv = { useVisualState: Uh({ scrapeMotionValuesFromProps: Ga, createRenderState: Ha }) };
function Zh(n, i, s) {
  for (const a in i) !Ke(i[a]) && !Xh(a, s) && (n[a] = i[a]);
}
function hv({ transformTemplate: n }, i) {
  return H.useMemo(() => {
    const s = Ha();
    return (Wa(s, i, n), Object.assign({}, s.vars, s.style));
  }, [i]);
}
function pv(n, i) {
  const s = n.style || {},
    a = {};
  return (Zh(a, s, n), Object.assign(a, hv(n, i)), a);
}
function mv(n, i) {
  const s = {},
    a = pv(n, i);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((s.draggable = !1),
      (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
      (a.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0),
    (s.style = a),
    s
  );
}
function gv(n, i, s, a) {
  const c = H.useMemo(() => {
    const d = Kh();
    return ($a(d, i, Ka(a), n.transformTemplate), { ...d.attrs, style: { ...d.style } });
  }, [i]);
  if (n.style) {
    const d = {};
    (Zh(d, n.style, n), (c.style = { ...d, ...c.style }));
  }
  return c;
}
function yv(n = !1) {
  return (s, a, c, { latestValues: d }, f) => {
    const m = (Oa(s) ? gv : mv)(a, d, f, s),
      g = Vy(a, typeof s == "string", n),
      y = s !== H.Fragment ? { ...g, ...m, ref: c } : {},
      { children: x } = a,
      P = H.useMemo(() => (Ke(x) ? x.get() : x), [x]);
    return H.createElement(s, { ...y, children: P });
  };
}
function vv(n, i) {
  return function (a, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Oa(a) ? fv : dv),
      preloadedFeatures: n,
      useRender: yv(c),
      createVisualElement: i,
      Component: a,
    };
    return Uy(f);
  };
}
function Jh(n, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== n.length) return !1;
  for (let a = 0; a < s; a++) if (i[a] !== n[a]) return !1;
  return !0;
}
function Js(n, i, s) {
  const a = n.getProps();
  return za(a, i, s !== void 0 ? s : a.custom, n);
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
    for (let a = 0; a < this.animations.length; a++) this.animations[a][i] = s;
  }
  attachTimeline(i, s) {
    const a = this.animations.map((c) => {
      if (xv() && c.attachTimeline) return c.attachTimeline(i);
      if (typeof s == "function") return s(c);
    });
    return () => {
      a.forEach((c, d) => {
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
function Qa(n, i) {
  return n ? n[i] || n.default || n : void 0;
}
const pa = 2e4;
function bh(n) {
  let i = 0;
  const s = 50;
  let a = n.next(i);
  for (; !a.done && i < pa;) ((i += s), (a = n.next(i)));
  return i >= pa ? 1 / 0 : i;
}
function Ya(n) {
  return typeof n == "function";
}
function wd(n, i) {
  ((n.timeline = i), (n.onfinish = null));
}
const Xa = (n) => Array.isArray(n) && typeof n[0] == "number",
  Pv = { linearEasing: void 0 };
function kv(n, i) {
  const s = _a(n);
  return () => {
    var a;
    return (a = Pv[i]) !== null && a !== void 0 ? a : s();
  };
}
const Hs = kv(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ep = (n, i, s = 10) => {
    let a = "";
    const c = Math.max(Math.round(i / s), 2);
    for (let d = 0; d < c; d++) a += n(pr(0, c - 1, d)) + ", ";
    return `linear(${a.substring(0, a.length - 2)})`;
  };
function tp(n) {
  return !!(
    (typeof n == "function" && Hs()) ||
    !n ||
    (typeof n == "string" && (n in ma || Hs())) ||
    Xa(n) ||
    (Array.isArray(n) && n.every(tp))
  );
}
const li = ([n, i, s, a]) => `cubic-bezier(${n}, ${i}, ${s}, ${a})`,
  ma = {
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
function np(n, i) {
  if (n)
    return typeof n == "function" && Hs()
      ? ep(n, i)
      : Xa(n)
        ? li(n)
        : Array.isArray(n)
          ? n.map((s) => np(s, i) || ma.easeOut)
          : ma[n];
}
const Rt = { x: !1, y: !1 };
function rp() {
  return Rt.x || Rt.y;
}
function ip(n, i, s) {
  var a;
  if (n instanceof Element) return [n];
  if (typeof n == "string") {
    let c = document;
    const d = (a = void 0) !== null && a !== void 0 ? a : c.querySelectorAll(n);
    return d ? Array.from(d) : [];
  }
  return Array.from(n);
}
function sp(n, i) {
  const s = ip(n),
    a = new AbortController(),
    c = { passive: !0, ...i, signal: a.signal };
  return [s, c, () => a.abort()];
}
function Sd(n) {
  return (i) => {
    i.pointerType === "touch" || rp() || n(i);
  };
}
function Tv(n, i, s = {}) {
  const [a, c, d] = sp(n, s),
    f = Sd((p) => {
      const { target: m } = p,
        g = i(p);
      if (typeof g != "function" || !m) return;
      const y = Sd((x) => {
        (g(x), m.removeEventListener("pointerleave", y));
      });
      m.addEventListener("pointerleave", y, c);
    });
  return (
    a.forEach((p) => {
      p.addEventListener("pointerenter", f, c);
    }),
    d
  );
}
const op = (n, i) => (i ? (n === i ? !0 : op(n, i.parentElement)) : !1),
  qa = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  Ev = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Cv(n) {
  return Ev.has(n.tagName) || n.tabIndex !== -1;
}
const ai = new WeakSet();
function Pd(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function ta(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const Av = (n, i) => {
  const s = n.currentTarget;
  if (!s) return;
  const a = Pd(() => {
    if (ai.has(s)) return;
    ta(s, "down");
    const c = Pd(() => {
        ta(s, "up");
      }),
      d = () => ta(s, "cancel");
    (s.addEventListener("keyup", c, i), s.addEventListener("blur", d, i));
  });
  (s.addEventListener("keydown", a, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", a), i));
};
function kd(n) {
  return qa(n) && !rp();
}
function Rv(n, i, s = {}) {
  const [a, c, d] = sp(n, s),
    f = (p) => {
      const m = p.currentTarget;
      if (!kd(p) || ai.has(m)) return;
      ai.add(m);
      const g = i(p),
        y = (R, _) => {
          (window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", P),
            !(!kd(R) || !ai.has(m)) &&
              (ai.delete(m), typeof g == "function" && g(R, { success: _ })));
        },
        x = (R) => {
          y(R, s.useGlobalTarget || op(m, R.target));
        },
        P = (R) => {
          y(R, !1);
        };
      (window.addEventListener("pointerup", x, c), window.addEventListener("pointercancel", P, c));
    };
  return (
    a.forEach((p) => {
      (!Cv(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0),
        (s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        p.addEventListener("focus", (g) => Av(g, c), c));
    }),
    d
  );
}
function Dv(n) {
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
const lp = new Set(["width", "height", "top", "left", "right", "bottom", ...yr]);
let Bs;
function Nv() {
  Bs = void 0;
}
const Lt = {
  now: () => (
    Bs === void 0 &&
      Lt.set(ze.isProcessing || Cy.useManualTiming ? ze.timestamp : performance.now()),
    Bs
  ),
  set: (n) => {
    ((Bs = n), queueMicrotask(Nv));
  },
};
function Za(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function Ja(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
class ba {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (Za(this.subscriptions, i), () => Ja(this.subscriptions, i));
  }
  notify(i, s, a) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](i, s, a);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(i, s, a);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function ap(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const Td = 30,
  Mv = (n) => !isNaN(parseFloat(n));
class Vv {
  constructor(i, s = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (a, c = !0) => {
        const d = Lt.now();
        (this.updatedAt !== d && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(a),
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
      (this.updatedAt = Lt.now()),
      this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = Mv(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new ba());
    const a = this.events[i].add(s);
    return i === "change"
      ? () => {
          (a(),
            ve.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : a;
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
  setWithVelocity(i, s, a) {
    (this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - a));
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
    const i = Lt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Td)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Td);
    return ap(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
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
function _v(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, gi(s));
}
function jv(n, i) {
  const s = Js(n, i);
  let { transitionEnd: a = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...a };
  for (const f in d) {
    const p = Qy(d[f]);
    _v(n, f, p);
  }
}
function Lv(n) {
  return !!(Ke(n) && n.add);
}
function ga(n, i) {
  const s = n.getValue("willChange");
  if (Lv(s)) return s.add(i);
}
function up(n) {
  return n.props[Oh];
}
const cp = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  Fv = 1e-7,
  Iv = 12;
function Ov(n, i, s, a, c) {
  let d,
    f,
    p = 0;
  do ((f = i + (s - i) / 2), (d = cp(f, a, c) - n), d > 0 ? (s = f) : (i = f));
  while (Math.abs(d) > Fv && ++p < Iv);
  return f;
}
function wi(n, i, s, a) {
  if (n === i && s === a) return ct;
  const c = (d) => Ov(d, 0, 1, n, s);
  return (d) => (d === 0 || d === 1 ? d : cp(c(d), i, a));
}
const fp = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  dp = (n) => (i) => 1 - n(1 - i),
  hp = wi(0.33, 1.53, 0.69, 0.99),
  eu = dp(hp),
  pp = fp(eu),
  mp = (n) => ((n *= 2) < 1 ? 0.5 * eu(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))),
  tu = (n) => 1 - Math.sin(Math.acos(n)),
  gp = dp(tu),
  yp = fp(tu),
  vp = (n) => /^0[^.\s]+$/u.test(n);
function zv(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || vp(n) : !0;
}
const ci = (n) => Math.round(n * 1e5) / 1e5,
  nu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Bv(n) {
  return n == null;
}
const Uv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ru = (n, i) => (s) =>
    !!(
      (typeof s == "string" && Uv.test(s) && s.startsWith(n)) ||
      (i && !Bv(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  xp = (n, i, s) => (a) => {
    if (typeof a != "string") return a;
    const [c, d, f, p] = a.match(nu);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  Wv = (n) => Qt(0, 255, n),
  na = { ...vr, transform: (n) => Math.round(Wv(n)) },
  jn = {
    test: ru("rgb", "red"),
    parse: xp("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: s, alpha: a = 1 }) =>
      "rgba(" +
      na.transform(n) +
      ", " +
      na.transform(i) +
      ", " +
      na.transform(s) +
      ", " +
      ci(mi.transform(a)) +
      ")",
  };
function $v(n) {
  let i = "",
    s = "",
    a = "",
    c = "";
  return (
    n.length > 5
      ? ((i = n.substring(1, 3)),
        (s = n.substring(3, 5)),
        (a = n.substring(5, 7)),
        (c = n.substring(7, 9)))
      : ((i = n.substring(1, 2)),
        (s = n.substring(2, 3)),
        (a = n.substring(3, 4)),
        (c = n.substring(4, 5)),
        (i += i),
        (s += s),
        (a += a),
        (c += c)),
    {
      red: parseInt(i, 16),
      green: parseInt(s, 16),
      blue: parseInt(a, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const ya = { test: ru("#"), parse: $v, transform: jn.transform },
  ur = {
    test: ru("hsl", "hue"),
    parse: xp("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: s, alpha: a = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      jt.transform(ci(i)) +
      ", " +
      jt.transform(ci(s)) +
      ", " +
      ci(mi.transform(a)) +
      ")",
  },
  He = {
    test: (n) => jn.test(n) || ya.test(n) || ur.test(n),
    parse: (n) => (jn.test(n) ? jn.parse(n) : ur.test(n) ? ur.parse(n) : ya.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? jn.transform(n) : ur.transform(n),
  },
  Hv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Kv(n) {
  var i, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(nu)) === null || i === void 0 ? void 0 : i.length) || 0) +
      (((s = n.match(Hv)) === null || s === void 0 ? void 0 : s.length) || 0) >
      0
  );
}
const wp = "number",
  Sp = "color",
  Gv = "var",
  Qv = "var(",
  Ed = "${}",
  Yv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function yi(n) {
  const i = n.toString(),
    s = [],
    a = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      Yv,
      (m) => (
        He.test(m)
          ? (a.color.push(d), c.push(Sp), s.push(He.parse(m)))
          : m.startsWith(Qv)
            ? (a.var.push(d), c.push(Gv), s.push(m))
            : (a.number.push(d), c.push(wp), s.push(parseFloat(m))),
        ++d,
        Ed
      ),
    )
    .split(Ed);
  return { values: s, split: p, indexes: a, types: c };
}
function Pp(n) {
  return yi(n).values;
}
function kp(n) {
  const { split: i, types: s } = yi(n),
    a = i.length;
  return (c) => {
    let d = "";
    for (let f = 0; f < a; f++)
      if (((d += i[f]), c[f] !== void 0)) {
        const p = s[f];
        p === wp ? (d += ci(c[f])) : p === Sp ? (d += He.transform(c[f])) : (d += c[f]);
      }
    return d;
  };
}
const Xv = (n) => (typeof n == "number" ? 0 : n);
function qv(n) {
  const i = Pp(n);
  return kp(n)(i.map(Xv));
}
const gn = { test: Kv, parse: Pp, createTransformer: kp, getAnimatableNone: qv },
  Zv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Jv(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [a] = s.match(nu) || [];
  if (!a) return n;
  const c = s.replace(a, "");
  let d = Zv.has(i) ? 1 : 0;
  return (a !== s && (d *= 100), i + "(" + d + c + ")");
}
const bv = /\b([a-z-]*)\(.*?\)/gu,
  va = {
    ...gn,
    getAnimatableNone: (n) => {
      const i = n.match(bv);
      return i ? i.map(Jv).join(" ") : n;
    },
  },
  e0 = {
    ...Ua,
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
  iu = (n) => e0[n];
function Tp(n, i) {
  let s = iu(n);
  return (s !== va && (s = gn), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0);
}
const t0 = new Set(["auto", "none", "0"]);
function n0(n, i, s) {
  let a = 0,
    c;
  for (; a < n.length && !c;) {
    const d = n[a];
    (typeof d == "string" && !t0.has(d) && yi(d).values.length && (c = n[a]), a++);
  }
  if (c && s) for (const d of i) n[d] = Tp(s, c);
}
const Cd = (n) => n === vr || n === b,
  Ad = (n, i) => parseFloat(n.split(", ")[i]),
  Rd =
    (n, i) =>
    (s, { transform: a }) => {
      if (a === "none" || !a) return 0;
      const c = a.match(/^matrix3d\((.+)\)$/u);
      if (c) return Ad(c[1], i);
      {
        const d = a.match(/^matrix\((.+)\)$/u);
        return d ? Ad(d[1], n) : 0;
      }
    },
  r0 = new Set(["x", "y", "z"]),
  i0 = yr.filter((n) => !r0.has(n));
function s0(n) {
  const i = [];
  return (
    i0.forEach((s) => {
      const a = n.getValue(s);
      a !== void 0 && (i.push([s, a.get()]), a.set(s.startsWith("scale") ? 1 : 0));
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
  x: Rd(4, 13),
  y: Rd(5, 14),
};
gr.translateX = gr.x;
gr.translateY = gr.y;
const Ln = new Set();
let xa = !1,
  wa = !1;
function Ep() {
  if (wa) {
    const n = Array.from(Ln).filter((a) => a.needsMeasurement),
      i = new Set(n.map((a) => a.element)),
      s = new Map();
    (i.forEach((a) => {
      const c = s0(a);
      c.length && (s.set(a, c), a.render());
    }),
      n.forEach((a) => a.measureInitialState()),
      i.forEach((a) => {
        a.render();
        const c = s.get(a);
        c &&
          c.forEach(([d, f]) => {
            var p;
            (p = a.getValue(d)) === null || p === void 0 || p.set(f);
          });
      }),
      n.forEach((a) => a.measureEndState()),
      n.forEach((a) => {
        a.suspendedScrollY !== void 0 && window.scrollTo(0, a.suspendedScrollY);
      }));
  }
  ((wa = !1), (xa = !1), Ln.forEach((n) => n.complete()), Ln.clear());
}
function Cp() {
  Ln.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (wa = !0));
  });
}
function o0() {
  (Cp(), Ep());
}
class su {
  constructor(i, s, a, c, d, f = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = s),
      (this.name = a),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (Ln.add(this), xa || ((xa = !0), ve.read(Cp), ve.resolveKeyframes(Ep)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: s, element: a, motionValue: c } = this;
    for (let d = 0; d < i.length; d++)
      if (i[d] === null)
        if (d === 0) {
          const f = c == null ? void 0 : c.get(),
            p = i[i.length - 1];
          if (f !== void 0) i[0] = f;
          else if (a && s) {
            const m = a.readValue(s, p);
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
      Ln.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Ln.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ap = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  l0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function a0(n) {
  const i = l0.exec(n);
  if (!i) return [,];
  const [, s, a, c] = i;
  return [`--${s ?? a}`, c];
}
function Rp(n, i, s = 1) {
  const [a, c] = a0(n);
  if (!a) return;
  const d = window.getComputedStyle(i).getPropertyValue(a);
  if (d) {
    const f = d.trim();
    return Ap(f) ? parseFloat(f) : f;
  }
  return Ba(c) ? Rp(c, i, s + 1) : c;
}
const Dp = (n) => (i) => i.test(n),
  u0 = { test: (n) => n === "auto", parse: (n) => n },
  Np = [vr, b, jt, pn, by, Jy, u0],
  Dd = (n) => Np.find(Dp(n));
class Mp extends su {
  constructor(i, s, a, c, d) {
    super(i, s, a, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: a } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let m = 0; m < i.length; m++) {
      let g = i[m];
      if (typeof g == "string" && ((g = g.trim()), Ba(g))) {
        const y = Rp(g, s.current);
        (y !== void 0 && (i[m] = y), m === i.length - 1 && (this.finalKeyframe = g));
      }
    }
    if ((this.resolveNoneKeyframes(), !lp.has(a) || i.length !== 2)) return;
    const [c, d] = i,
      f = Dd(c),
      p = Dd(d);
    if (f !== p)
      if (Cd(f) && Cd(p))
        for (let m = 0; m < i.length; m++) {
          const g = i[m];
          typeof g == "string" && (i[m] = parseFloat(g));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      a = [];
    for (let c = 0; c < i.length; c++) zv(i[c]) && a.push(c);
    a.length && n0(i, a, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: a } = this;
    if (!i || !i.current) return;
    (a === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = gr[a](i.measureViewportBox(), window.getComputedStyle(i.current))),
      (s[0] = this.measuredOrigin));
    const c = s[s.length - 1];
    c !== void 0 && i.getValue(a, c).jump(c, !1);
  }
  measureEndState() {
    var i;
    const { element: s, name: a, unresolvedKeyframes: c } = this;
    if (!s || !s.current) return;
    const d = s.getValue(a);
    d && d.jump(this.measuredOrigin, !1);
    const f = c.length - 1,
      p = c[f];
    ((c[f] = gr[a](s.measureViewportBox(), window.getComputedStyle(s.current))),
      p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
      !((i = this.removedTransforms) === null || i === void 0) &&
        i.length &&
        this.removedTransforms.forEach(([m, g]) => {
          s.getValue(m).set(g);
        }),
      this.resolveNoneKeyframes());
  }
}
const Nd = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" && (gn.test(n) || n === "0") && !n.startsWith("url("))
      );
function c0(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== i) return !0;
}
function f0(n, i, s, a) {
  const c = n[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = Nd(c, i),
    p = Nd(d, i);
  return !f || !p ? !1 : c0(n) || ((s === "spring" || Ya(s)) && a);
}
const d0 = (n) => n !== null;
function bs(n, { repeat: i, repeatType: s = "loop" }, a) {
  const c = n.filter(d0),
    d = i && s !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return !d || a === void 0 ? c[d] : a;
}
const h0 = 40;
class Vp {
  constructor({
    autoplay: i = !0,
    delay: s = 0,
    type: a = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    ...p
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Lt.now()),
      (this.options = {
        autoplay: i,
        delay: s,
        type: a,
        repeat: c,
        repeatDelay: d,
        repeatType: f,
        ...p,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > h0
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (!this._resolved && !this.hasAttemptedResolve && o0(), this._resolved);
  }
  onKeyframesResolved(i, s) {
    ((this.resolvedAt = Lt.now()), (this.hasAttemptedResolve = !0));
    const {
      name: a,
      type: c,
      velocity: d,
      delay: f,
      onComplete: p,
      onUpdate: m,
      isGenerator: g,
    } = this.options;
    if (!g && !f0(i, a, c, d))
      if (f) this.options.duration = 0;
      else {
        (m && m(bs(i, this.options, s)), p && p(), this.resolveFinishedPromise());
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
function p0({ hue: n, saturation: i, lightness: s, alpha: a }) {
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
    alpha: a,
  };
}
function Ks(n, i) {
  return (s) => (s > 0 ? i : n);
}
const ia = (n, i, s) => {
    const a = n * n,
      c = s * (i * i - a) + a;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  m0 = [ya, jn, ur],
  g0 = (n) => m0.find((i) => i.test(n));
function Md(n) {
  const i = g0(n);
  if (!i) return !1;
  let s = i.parse(n);
  return (i === ur && (s = p0(s)), s);
}
const Vd = (n, i) => {
    const s = Md(n),
      a = Md(i);
    if (!s || !a) return Ks(n, i);
    const c = { ...s };
    return (d) => (
      (c.red = ia(s.red, a.red, d)),
      (c.green = ia(s.green, a.green, d)),
      (c.blue = ia(s.blue, a.blue, d)),
      (c.alpha = Te(s.alpha, a.alpha, d)),
      jn.transform(c)
    );
  },
  y0 = (n, i) => (s) => i(n(s)),
  Si = (...n) => n.reduce(y0),
  Sa = new Set(["none", "hidden"]);
function v0(n, i) {
  return Sa.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n);
}
function x0(n, i) {
  return (s) => Te(n, i, s);
}
function ou(n) {
  return typeof n == "number"
    ? x0
    : typeof n == "string"
      ? Ba(n)
        ? Ks
        : He.test(n)
          ? Vd
          : P0
      : Array.isArray(n)
        ? _p
        : typeof n == "object"
          ? He.test(n)
            ? Vd
            : w0
          : Ks;
}
function _p(n, i) {
  const s = [...n],
    a = s.length,
    c = n.map((d, f) => ou(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < a; f++) s[f] = c[f](d);
    return s;
  };
}
function w0(n, i) {
  const s = { ...n, ...i },
    a = {};
  for (const c in s) n[c] !== void 0 && i[c] !== void 0 && (a[c] = ou(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in a) s[d] = a[d](c);
    return s;
  };
}
function S0(n, i) {
  var s;
  const a = [],
    c = { color: 0, var: 0, number: 0 };
  for (let d = 0; d < i.values.length; d++) {
    const f = i.types[d],
      p = n.indexes[f][c[f]],
      m = (s = n.values[p]) !== null && s !== void 0 ? s : 0;
    ((a[d] = m), c[f]++);
  }
  return a;
}
const P0 = (n, i) => {
  const s = gn.createTransformer(i),
    a = yi(n),
    c = yi(i);
  return a.indexes.var.length === c.indexes.var.length &&
    a.indexes.color.length === c.indexes.color.length &&
    a.indexes.number.length >= c.indexes.number.length
    ? (Sa.has(n) && !c.values.length) || (Sa.has(i) && !a.values.length)
      ? v0(n, i)
      : Si(_p(S0(a, c), c.values), s)
    : Ks(n, i);
};
function jp(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number"
    ? Te(n, i, s)
    : ou(n)(n, i);
}
const k0 = 5;
function Lp(n, i, s) {
  const a = Math.max(i - k0, 0);
  return ap(s - n(a), i - a);
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
function T0({
  duration: n = Ae.duration,
  bounce: i = Ae.bounce,
  velocity: s = Ae.velocity,
  mass: a = Ae.mass,
}) {
  let c,
    d,
    f = 1 - i;
  ((f = Qt(Ae.minDamping, Ae.maxDamping, f)),
    (n = Qt(Ae.minDuration, Ae.maxDuration, Kt(n))),
    f < 1
      ? ((c = (g) => {
          const y = g * f,
            x = y * n,
            P = y - s,
            R = Pa(g, f),
            _ = Math.exp(-x);
          return sa - (P / R) * _;
        }),
        (d = (g) => {
          const x = g * f * n,
            P = x * s + s,
            R = Math.pow(f, 2) * Math.pow(g, 2) * n,
            _ = Math.exp(-x),
            D = Pa(Math.pow(g, 2), f);
          return ((-c(g) + sa > 0 ? -1 : 1) * ((P - R) * _)) / D;
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
    m = C0(c, d, p);
  if (((n = Ht(n)), isNaN(m))) return { stiffness: Ae.stiffness, damping: Ae.damping, duration: n };
  {
    const g = Math.pow(m, 2) * a;
    return { stiffness: g, damping: f * 2 * Math.sqrt(a * g), duration: n };
  }
}
const E0 = 12;
function C0(n, i, s) {
  let a = s;
  for (let c = 1; c < E0; c++) a = a - n(a) / i(a);
  return a;
}
function Pa(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const A0 = ["duration", "bounce"],
  R0 = ["stiffness", "damping", "mass"];
function _d(n, i) {
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
  if (!_d(n, R0) && _d(n, A0))
    if (n.visualDuration) {
      const s = n.visualDuration,
        a = (2 * Math.PI) / (s * 1.2),
        c = a * a,
        d = 2 * Qt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Ae.mass, stiffness: c, damping: d };
    } else {
      const s = T0(n);
      ((i = { ...i, ...s, mass: Ae.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function Fp(n = Ae.visualDuration, i = Ae.bounce) {
  const s = typeof n != "object" ? { visualDuration: n, keyframes: [0, 1], bounce: i } : n;
  let { restSpeed: a, restDelta: c } = s;
  const d = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: g,
      mass: y,
      duration: x,
      velocity: P,
      isResolvedFromDuration: R,
    } = D0({ ...s, velocity: -Kt(s.velocity || 0) }),
    _ = P || 0,
    D = g / (2 * Math.sqrt(m * y)),
    j = f - d,
    I = Kt(Math.sqrt(m / y)),
    W = Math.abs(j) < 5;
  (a || (a = W ? Ae.restSpeed.granular : Ae.restSpeed.default),
    c || (c = W ? Ae.restDelta.granular : Ae.restDelta.default));
  let G;
  if (D < 1) {
    const Y = Pa(I, D);
    G = (ne) => {
      const ae = Math.exp(-D * I * ne);
      return f - ae * (((_ + D * I * j) / Y) * Math.sin(Y * ne) + j * Math.cos(Y * ne));
    };
  } else if (D === 1) G = (Y) => f - Math.exp(-I * Y) * (j + (_ + I * j) * Y);
  else {
    const Y = I * Math.sqrt(D * D - 1);
    G = (ne) => {
      const ae = Math.exp(-D * I * ne),
        J = Math.min(Y * ne, 300);
      return f - (ae * ((_ + D * I * j) * Math.sinh(J) + Y * j * Math.cosh(J))) / Y;
    };
  }
  const te = {
    calculatedDuration: (R && x) || null,
    next: (Y) => {
      const ne = G(Y);
      if (R) p.done = Y >= x;
      else {
        let ae = 0;
        D < 1 && (ae = Y === 0 ? Ht(_) : Lp(G, Y, ne));
        const J = Math.abs(ae) <= a,
          Se = Math.abs(f - ne) <= c;
        p.done = J && Se;
      }
      return ((p.value = p.done ? f : ne), p);
    },
    toString: () => {
      const Y = Math.min(bh(te), pa),
        ne = ep((ae) => te.next(Y * ae).value, Y, 30);
      return Y + "ms " + ne;
    },
  };
  return te;
}
function jd({
  keyframes: n,
  velocity: i = 0,
  power: s = 0.8,
  timeConstant: a = 325,
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
    R = (J) => (p !== void 0 && J < p) || (m !== void 0 && J > m),
    _ = (J) => (p === void 0 ? m : m === void 0 || Math.abs(p - J) < Math.abs(m - J) ? p : m);
  let D = s * i;
  const j = x + D,
    I = f === void 0 ? j : f(j);
  I !== j && (D = I - x);
  const W = (J) => -D * Math.exp(-J / a),
    G = (J) => I + W(J),
    te = (J) => {
      const Se = W(J),
        Ee = G(J);
      ((P.done = Math.abs(Se) <= g), (P.value = P.done ? I : Ee));
    };
  let Y, ne;
  const ae = (J) => {
    R(P.value) &&
      ((Y = J),
      (ne = Fp({
        keyframes: [P.value, _(P.value)],
        velocity: Lp(G, J, P.value),
        damping: c,
        stiffness: d,
        restDelta: g,
        restSpeed: y,
      })));
  };
  return (
    ae(0),
    {
      calculatedDuration: null,
      next: (J) => {
        let Se = !1;
        return (
          !ne && Y === void 0 && ((Se = !0), te(J), ae(J)),
          Y !== void 0 && J >= Y ? ne.next(J - Y) : (!Se && te(J), P)
        );
      },
    }
  );
}
const N0 = wi(0.42, 0, 1, 1),
  M0 = wi(0, 0, 0.58, 1),
  Ip = wi(0.42, 0, 0.58, 1),
  V0 = (n) => Array.isArray(n) && typeof n[0] != "number",
  _0 = {
    linear: ct,
    easeIn: N0,
    easeInOut: Ip,
    easeOut: M0,
    circIn: tu,
    circInOut: yp,
    circOut: gp,
    backIn: eu,
    backInOut: pp,
    backOut: hp,
    anticipate: mp,
  },
  Ld = (n) => {
    if (Xa(n)) {
      _h(n.length === 4);
      const [i, s, a, c] = n;
      return wi(i, s, a, c);
    } else if (typeof n == "string") return _0[n];
    return n;
  };
function j0(n, i, s) {
  const a = [],
    c = s || jp,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = c(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || ct : i;
      p = Si(m, p);
    }
    a.push(p);
  }
  return a;
}
function L0(n, i, { clamp: s = !0, ease: a, mixer: c } = {}) {
  const d = n.length;
  if ((_h(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = j0(i, a, c),
    m = p.length,
    g = (y) => {
      if (f && y < n[0]) return i[0];
      let x = 0;
      if (m > 1) for (; x < n.length - 2 && !(y < n[x + 1]); x++);
      const P = pr(n[x], n[x + 1], y);
      return p[x](P);
    };
  return s ? (y) => g(Qt(n[0], n[d - 1], y)) : g;
}
function F0(n, i) {
  const s = n[n.length - 1];
  for (let a = 1; a <= i; a++) {
    const c = pr(0, i, a);
    n.push(Te(s, 1, c));
  }
}
function I0(n) {
  const i = [0];
  return (F0(i, n.length - 1), i);
}
function O0(n, i) {
  return n.map((s) => s * i);
}
function z0(n, i) {
  return n.map(() => i || Ip).splice(0, n.length - 1);
}
function Gs({ duration: n = 300, keyframes: i, times: s, ease: a = "easeInOut" }) {
  const c = V0(a) ? a.map(Ld) : Ld(a),
    d = { done: !1, value: i[0] },
    f = O0(s && s.length === i.length ? s : I0(i), n),
    p = L0(f, i, { ease: Array.isArray(c) ? c : z0(i, c) });
  return { calculatedDuration: n, next: (m) => ((d.value = p(m)), (d.done = m >= n), d) };
}
const B0 = (n) => {
    const i = ({ timestamp: s }) => n(s);
    return {
      start: () => ve.update(i, !0),
      stop: () => mn(i),
      now: () => (ze.isProcessing ? ze.timestamp : Lt.now()),
    };
  },
  U0 = { decay: jd, inertia: jd, tween: Gs, keyframes: Gs, spring: Fp },
  W0 = (n) => n / 100;
class lu extends Vp {
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
    const { name: s, motionValue: a, element: c, keyframes: d } = this.options,
      f = (c == null ? void 0 : c.KeyframeResolver) || su,
      p = (m, g) => this.onKeyframesResolved(m, g);
    ((this.resolver = new f(d, p, s, a, c)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes)));
  }
  initPlayback(i) {
    const {
        type: s = "keyframes",
        repeat: a = 0,
        repeatDelay: c = 0,
        repeatType: d,
        velocity: f = 0,
      } = this.options,
      p = Ya(s) ? s : U0[s] || Gs;
    let m, g;
    p !== Gs && typeof i[0] != "number" && ((m = Si(W0, jp(i[0], i[1]))), (i = [0, 100]));
    const y = p({ ...this.options, keyframes: i });
    (d === "mirror" && (g = p({ ...this.options, keyframes: [...i].reverse(), velocity: -f })),
      y.calculatedDuration === null && (y.calculatedDuration = bh(y)));
    const { calculatedDuration: x } = y,
      P = x + c,
      R = P * (a + 1) - c;
    return {
      generator: y,
      mirroredGenerator: g,
      mapPercentToKeyframes: m,
      calculatedDuration: x,
      resolvedDuration: P,
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
    const { resolved: a } = this;
    if (!a) {
      const { keyframes: J } = this.options;
      return { done: !0, value: J[J.length - 1] };
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
    } = a;
    if (this.startTime === null) return d.next(0);
    const { delay: P, repeat: R, repeatType: _, repeatDelay: D, onUpdate: j } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 && (this.startTime = Math.min(i - y / this.speed, this.startTime)),
      s
        ? (this.currentTime = i)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(i - this.startTime) * this.speed));
    const I = this.currentTime - P * (this.speed >= 0 ? 1 : -1),
      W = this.speed >= 0 ? I < 0 : I > y;
    ((this.currentTime = Math.max(I, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = y));
    let G = this.currentTime,
      te = d;
    if (R) {
      const J = Math.min(this.currentTime, y) / x;
      let Se = Math.floor(J),
        Ee = J % 1;
      (!Ee && J >= 1 && (Ee = 1),
        Ee === 1 && Se--,
        (Se = Math.min(Se, R + 1)),
        !!(Se % 2) &&
          (_ === "reverse" ? ((Ee = 1 - Ee), D && (Ee -= D / x)) : _ === "mirror" && (te = f)),
        (G = Qt(0, 1, Ee) * x));
    }
    const Y = W ? { done: !1, value: m[0] } : te.next(G);
    p && (Y.value = p(Y.value));
    let { done: ne } = Y;
    !W && g !== null && (ne = this.speed >= 0 ? this.currentTime >= y : this.currentTime <= 0);
    const ae =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ne));
    return (
      ae && c !== void 0 && (Y.value = bs(m, this.options, c)),
      j && j(Y.value),
      ae && this.finish(),
      Y
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
    const { driver: i = B0, onPlay: s, startTime: a } = this.options;
    (this.driver || (this.driver = i((d) => this.tick(d))), s && s());
    const c = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = c - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = c)
        : (this.startTime = a ?? this.calcStartTime()),
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
const $0 = new Set(["opacity", "clipPath", "filter", "transform"]);
function H0(
  n,
  i,
  s,
  {
    delay: a = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: p = "easeInOut",
    times: m,
  } = {},
) {
  const g = { [i]: s };
  m && (g.offset = m);
  const y = np(p, c);
  return (
    Array.isArray(y) && (g.easing = y),
    n.animate(g, {
      delay: a,
      duration: c,
      easing: Array.isArray(y) ? "linear" : y,
      fill: "both",
      iterations: d + 1,
      direction: f === "reverse" ? "alternate" : "normal",
    })
  );
}
const K0 = _a(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Qs = 10,
  G0 = 2e4;
function Q0(n) {
  return Ya(n.type) || n.type === "spring" || !tp(n.ease);
}
function Y0(n, i) {
  const s = new lu({ ...i, keyframes: n, repeat: 0, delay: 0, isGenerator: !0 });
  let a = { done: !1, value: n[0] };
  const c = [];
  let d = 0;
  for (; !a.done && d < G0;) ((a = s.sample(d)), c.push(a.value), (d += Qs));
  return { times: void 0, keyframes: c, duration: d - Qs, ease: "linear" };
}
const Op = { anticipate: mp, backInOut: pp, circInOut: yp };
function X0(n) {
  return n in Op;
}
class Fd extends Vp {
  constructor(i) {
    super(i);
    const { name: s, motionValue: a, element: c, keyframes: d } = this.options;
    ((this.resolver = new Mp(d, (f, p) => this.onKeyframesResolved(f, p), s, a, c)),
      this.resolver.scheduleResolve());
  }
  initPlayback(i, s) {
    let {
      duration: a = 300,
      times: c,
      ease: d,
      type: f,
      motionValue: p,
      name: m,
      startTime: g,
    } = this.options;
    if (!p.owner || !p.owner.current) return !1;
    if ((typeof d == "string" && Hs() && X0(d) && (d = Op[d]), Q0(this.options))) {
      const { onComplete: x, onUpdate: P, motionValue: R, element: _, ...D } = this.options,
        j = Y0(i, D);
      ((i = j.keyframes),
        i.length === 1 && (i[1] = i[0]),
        (a = j.duration),
        (c = j.times),
        (d = j.ease),
        (f = "keyframes"));
    }
    const y = H0(p.owner.current, m, i, { ...this.options, duration: a, times: c, ease: d });
    return (
      (y.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? (wd(y, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (y.onfinish = () => {
            const { onComplete: x } = this.options;
            (p.set(bs(i, this.options, s)), x && x(), this.cancel(), this.resolveFinishedPromise());
          }),
      { animation: y, duration: a, times: c, type: f, ease: d, keyframes: i }
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
    const { animation: a } = s;
    a.currentTime = Ht(i);
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
    const { animation: a } = s;
    a.playbackRate = i;
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
      const { animation: a } = s;
      wd(a, i);
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
    const { animation: s, keyframes: a, duration: c, type: d, ease: f, times: p } = i;
    if (s.playState === "idle" || s.playState === "finished") return;
    if (this.time) {
      const { motionValue: g, onUpdate: y, onComplete: x, element: P, ...R } = this.options,
        _ = new lu({
          ...R,
          keyframes: a,
          duration: c,
          type: d,
          ease: f,
          times: p,
          isGenerator: !0,
        }),
        D = Ht(this.time);
      g.setWithVelocity(_.sample(D - Qs).value, _.sample(D).value, Qs);
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
    const { motionValue: s, name: a, repeatDelay: c, repeatType: d, damping: f, type: p } = i;
    if (!s || !s.owner || !(s.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: m, transformTemplate: g } = s.owner.getProps();
    return K0() && a && $0.has(a) && !m && !g && !c && d !== "mirror" && f !== 0 && p !== "inertia";
  }
}
const q0 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Z0 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  J0 = { type: "keyframes", duration: 0.8 },
  b0 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ex = (n, { keyframes: i }) =>
    i.length > 2 ? J0 : Fn.has(n) ? (n.startsWith("scale") ? Z0(i[1]) : q0) : b0;
function tx({
  when: n,
  delay: i,
  delayChildren: s,
  staggerChildren: a,
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
const au =
  (n, i, s, a = {}, c, d) =>
  (f) => {
    const p = Qa(a, n) || {},
      m = p.delay || a.delay || 0;
    let { elapsed: g = 0 } = a;
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
    (tx(p) || (y = { ...y, ...ex(n, y) }),
      y.duration && (y.duration = Ht(y.duration)),
      y.repeatDelay && (y.repeatDelay = Ht(y.repeatDelay)),
      y.from !== void 0 && (y.keyframes[0] = y.from));
    let x = !1;
    if (
      ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
        ((y.duration = 0), y.delay === 0 && (x = !0)),
      x && !d && i.get() !== void 0)
    ) {
      const P = bs(y.keyframes, p);
      if (P !== void 0)
        return (
          ve.update(() => {
            (y.onUpdate(P), y.onComplete());
          }),
          new Sv([])
        );
    }
    return !d && Fd.supports(y) ? new Fd(y) : new lu(y);
  };
function nx({ protectedKeys: n, needsAnimating: i }, s) {
  const a = n.hasOwnProperty(s) && i[s] !== !0;
  return ((i[s] = !1), a);
}
function zp(n, i, { delay: s = 0, transitionOverride: a, type: c } = {}) {
  var d;
  let { transition: f = n.getDefaultTransition(), transitionEnd: p, ...m } = i;
  a && (f = a);
  const g = [],
    y = c && n.animationState && n.animationState.getState()[c];
  for (const x in m) {
    const P = n.getValue(x, (d = n.latestValues[x]) !== null && d !== void 0 ? d : null),
      R = m[x];
    if (R === void 0 || (y && nx(y, x))) continue;
    const _ = { delay: s, ...Qa(f || {}, x) };
    let D = !1;
    if (window.MotionHandoffAnimation) {
      const I = up(n);
      if (I) {
        const W = window.MotionHandoffAnimation(I, x, ve);
        W !== null && ((_.startTime = W), (D = !0));
      }
    }
    (ga(n, x), P.start(au(x, P, R, n.shouldReduceMotion && lp.has(x) ? { type: !1 } : _, n, D)));
    const j = P.animation;
    j && g.push(j);
  }
  return (
    p &&
      Promise.all(g).then(() => {
        ve.update(() => {
          p && jv(n, p);
        });
      }),
    g
  );
}
function ka(n, i, s = {}) {
  var a;
  const c = Js(
    n,
    i,
    s.type === "exit"
      ? (a = n.presenceContext) === null || a === void 0
        ? void 0
        : a.custom
      : void 0,
  );
  let { transition: d = n.getDefaultTransition() || {} } = c || {};
  s.transitionOverride && (d = s.transitionOverride);
  const f = c ? () => Promise.all(zp(n, c, s)) : () => Promise.resolve(),
    p =
      n.variantChildren && n.variantChildren.size
        ? (g = 0) => {
            const { delayChildren: y = 0, staggerChildren: x, staggerDirection: P } = d;
            return rx(n, i, y + g, x, P, s);
          }
        : () => Promise.resolve(),
    { when: m } = d;
  if (m) {
    const [g, y] = m === "beforeChildren" ? [f, p] : [p, f];
    return g().then(() => y());
  } else return Promise.all([f(), p(s.delay)]);
}
function rx(n, i, s = 0, a = 0, c = 1, d) {
  const f = [],
    p = (n.variantChildren.size - 1) * a,
    m = c === 1 ? (g = 0) => g * a : (g = 0) => p - g * a;
  return (
    Array.from(n.variantChildren)
      .sort(ix)
      .forEach((g, y) => {
        (g.notify("AnimationStart", i),
          f.push(ka(g, i, { ...d, delay: s + m(y) }).then(() => g.notify("AnimationComplete", i))));
      }),
    Promise.all(f)
  );
}
function ix(n, i) {
  return n.sortNodePosition(i);
}
function sx(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let a;
  if (Array.isArray(i)) {
    const c = i.map((d) => ka(n, d, s));
    a = Promise.all(c);
  } else if (typeof i == "string") a = ka(n, i, s);
  else {
    const c = typeof i == "function" ? Js(n, i, s.custom) : i;
    a = Promise.all(zp(n, c, s));
  }
  return a.then(() => {
    n.notify("AnimationComplete", i);
  });
}
const ox = La.length;
function Bp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? Bp(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const i = {};
  for (let s = 0; s < ox; s++) {
    const a = La[s],
      c = n.props[a];
    (pi(c) || c === !1) && (i[a] = c);
  }
  return i;
}
const lx = [...ja].reverse(),
  ax = ja.length;
function ux(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: a }) => sx(n, s, a)));
}
function cx(n) {
  let i = ux(n),
    s = Id(),
    a = !0;
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
      const { transition: R, transitionEnd: _, ...D } = P;
      g = { ...g, ...D, ..._ };
    }
    return g;
  };
  function d(m) {
    i = m(n);
  }
  function f(m) {
    const { props: g } = n,
      y = Bp(n.parent) || {},
      x = [],
      P = new Set();
    let R = {},
      _ = 1 / 0;
    for (let j = 0; j < ax; j++) {
      const I = lx[j],
        W = s[I],
        G = g[I] !== void 0 ? g[I] : y[I],
        te = pi(G),
        Y = I === m ? W.isActive : null;
      Y === !1 && (_ = j);
      let ne = G === y[I] && G !== g[I] && te;
      if (
        (ne && a && n.manuallyAnimateOnMount && (ne = !1),
        (W.protectedKeys = { ...R }),
        (!W.isActive && Y === null) || (!G && !W.prevProp) || qs(G) || typeof G == "boolean")
      )
        continue;
      const ae = fx(W.prevProp, G);
      let J = ae || (I === m && W.isActive && !ne && te) || (j > _ && te),
        Se = !1;
      const Ee = Array.isArray(G) ? G : [G];
      let qe = Ee.reduce(c(I), {});
      Y === !1 && (qe = {});
      const { prevResolvedValues: it = {} } = W,
        Ge = { ...it, ...qe },
        Ze = (ie) => {
          ((J = !0), P.has(ie) && ((Se = !0), P.delete(ie)), (W.needsAnimating[ie] = !0));
          const O = n.getValue(ie);
          O && (O.liveStyle = !1);
        };
      for (const ie in Ge) {
        const O = qe[ie],
          X = it[ie];
        if (R.hasOwnProperty(ie)) continue;
        let B = !1;
        (ha(O) && ha(X) ? (B = !Jh(O, X)) : (B = O !== X),
          B
            ? O != null
              ? Ze(ie)
              : P.add(ie)
            : O !== void 0 && P.has(ie)
              ? Ze(ie)
              : (W.protectedKeys[ie] = !0));
      }
      ((W.prevProp = G),
        (W.prevResolvedValues = qe),
        W.isActive && (R = { ...R, ...qe }),
        a && n.blockInitialAnimation && (J = !1),
        J &&
          (!(ne && ae) || Se) &&
          x.push(...Ee.map((ie) => ({ animation: ie, options: { type: I } }))));
    }
    if (P.size) {
      const j = {};
      (P.forEach((I) => {
        const W = n.getBaseTarget(I),
          G = n.getValue(I);
        (G && (G.liveStyle = !0), (j[I] = W ?? null));
      }),
        x.push({ animation: j }));
    }
    let D = !!x.length;
    return (
      a && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (D = !1),
      (a = !1),
      D ? i(x) : Promise.resolve()
    );
  }
  function p(m, g) {
    var y;
    if (s[m].isActive === g) return Promise.resolve();
    ((y = n.variantChildren) === null ||
      y === void 0 ||
      y.forEach((P) => {
        var R;
        return (R = P.animationState) === null || R === void 0 ? void 0 : R.setActive(m, g);
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
      ((s = Id()), (a = !0));
    },
  };
}
function fx(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !Jh(i, n) : !1;
}
function Mn(n = !1) {
  return { isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Id() {
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
class yn {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
class dx extends yn {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = cx(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    qs(i) && (this.unmountControls = i.subscribe(this.node));
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
let hx = 0;
class px extends yn {
  constructor() {
    (super(...arguments), (this.id = hx++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: s } = this.node.presenceContext,
      { isPresent: a } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === a) return;
    const c = this.node.animationState.setActive("exit", !i);
    s && !i && c.then(() => s(this.id));
  }
  mount() {
    const { register: i } = this.node.presenceContext || {};
    i && (this.unmount = i(this.id));
  }
  unmount() {}
}
const mx = { animation: { Feature: dx }, exit: { Feature: px } };
function vi(n, i, s, a = { passive: !0 }) {
  return (n.addEventListener(i, s, a), () => n.removeEventListener(i, s));
}
function Pi(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const gx = (n) => (i) => qa(i) && n(i, Pi(i));
function fi(n, i, s, a) {
  return vi(n, i, gx(s), a);
}
const Od = (n, i) => Math.abs(n - i);
function yx(n, i) {
  const s = Od(n.x, i.x),
    a = Od(n.y, i.y);
  return Math.sqrt(s ** 2 + a ** 2);
}
class Up {
  constructor(i, s, { transformPagePoint: a, contextWindow: c, dragSnapToOrigin: d = !1 } = {}) {
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
          R = yx(x.offset, { x: 0, y: 0 }) >= 3;
        if (!P && !R) return;
        const { point: _ } = x,
          { timestamp: D } = ze;
        this.history.push({ ..._, timestamp: D });
        const { onStart: j, onMove: I } = this.handlers;
        (P || (j && j(this.lastMoveEvent, x), (this.startEvent = this.lastMoveEvent)),
          I && I(this.lastMoveEvent, x));
      }),
      (this.handlePointerMove = (x, P) => {
        ((this.lastMoveEvent = x),
          (this.lastMoveEventInfo = oa(P, this.transformPagePoint)),
          ve.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (x, P) => {
        this.end();
        const { onEnd: R, onSessionEnd: _, resumeAnimation: D } = this.handlers;
        if ((this.dragSnapToOrigin && D && D(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const j = la(
          x.type === "pointercancel" ? this.lastMoveEventInfo : oa(P, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && R && R(x, j), _ && _(x, j));
      }),
      !qa(i))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = a),
      (this.contextWindow = c || window));
    const f = Pi(i),
      p = oa(f, this.transformPagePoint),
      { point: m } = p,
      { timestamp: g } = ze;
    this.history = [{ ...m, timestamp: g }];
    const { onSessionStart: y } = s;
    (y && y(i, la(p, this.history)),
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
    (this.removeListeners && this.removeListeners(), mn(this.updatePoint));
  }
}
function oa(n, i) {
  return i ? { point: i(n.point) } : n;
}
function zd(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function la({ point: n }, i) {
  return { point: n, delta: zd(n, Wp(i)), offset: zd(n, vx(i)), velocity: xx(i, 0.1) };
}
function vx(n) {
  return n[0];
}
function Wp(n) {
  return n[n.length - 1];
}
function xx(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    a = null;
  const c = Wp(n);
  for (; s >= 0 && ((a = n[s]), !(c.timestamp - a.timestamp > Ht(i)));) s--;
  if (!a) return { x: 0, y: 0 };
  const d = Kt(c.timestamp - a.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - a.x) / d, y: (c.y - a.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
const $p = 1e-4,
  wx = 1 - $p,
  Sx = 1 + $p,
  Hp = 0.01,
  Px = 0 - Hp,
  kx = 0 + Hp;
function ft(n) {
  return n.max - n.min;
}
function Tx(n, i, s) {
  return Math.abs(n - i) <= s;
}
function Bd(n, i, s, a = 0.5) {
  ((n.origin = a),
    (n.originPoint = Te(i.min, i.max, n.origin)),
    (n.scale = ft(s) / ft(i)),
    (n.translate = Te(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= wx && n.scale <= Sx) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= Px && n.translate <= kx) || isNaN(n.translate)) && (n.translate = 0));
}
function di(n, i, s, a) {
  (Bd(n.x, i.x, s.x, a ? a.originX : void 0), Bd(n.y, i.y, s.y, a ? a.originY : void 0));
}
function Ud(n, i, s) {
  ((n.min = s.min + i.min), (n.max = n.min + ft(i)));
}
function Ex(n, i, s) {
  (Ud(n.x, i.x, s.x), Ud(n.y, i.y, s.y));
}
function Wd(n, i, s) {
  ((n.min = i.min - s.min), (n.max = n.min + ft(i)));
}
function hi(n, i, s) {
  (Wd(n.x, i.x, s.x), Wd(n.y, i.y, s.y));
}
function Cx(n, { min: i, max: s }, a) {
  return (
    i !== void 0 && n < i
      ? (n = a ? Te(i, n, a.min) : Math.max(n, i))
      : s !== void 0 && n > s && (n = a ? Te(s, n, a.max) : Math.min(n, s)),
    n
  );
}
function $d(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  };
}
function Ax(n, { top: i, left: s, bottom: a, right: c }) {
  return { x: $d(n.x, s, c), y: $d(n.y, i, a) };
}
function Hd(n, i) {
  let s = i.min - n.min,
    a = i.max - n.max;
  return (i.max - i.min < n.max - n.min && ([s, a] = [a, s]), { min: s, max: a });
}
function Rx(n, i) {
  return { x: Hd(n.x, i.x), y: Hd(n.y, i.y) };
}
function Dx(n, i) {
  let s = 0.5;
  const a = ft(n),
    c = ft(i);
  return (
    c > a ? (s = pr(i.min, i.max - a, n.min)) : a > c && (s = pr(n.min, n.max - c, i.min)),
    Qt(0, 1, s)
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
function Mx(n = Ta) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Ta),
    { x: Kd(n, "left", "right"), y: Kd(n, "top", "bottom") }
  );
}
function Kd(n, i, s) {
  return { min: Gd(n, i), max: Gd(n, s) };
}
function Gd(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const Qd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  cr = () => ({ x: Qd(), y: Qd() }),
  Yd = () => ({ min: 0, max: 0 }),
  Ne = () => ({ x: Yd(), y: Yd() });
function xt(n) {
  return [n("x"), n("y")];
}
function Kp({ top: n, left: i, right: s, bottom: a }) {
  return { x: { min: i, max: s }, y: { min: n, max: a } };
}
function Vx({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function _x(n, i) {
  if (!i) return n;
  const s = i({ x: n.left, y: n.top }),
    a = i({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: a.y, right: a.x };
}
function aa(n) {
  return n === void 0 || n === 1;
}
function Ea({ scale: n, scaleX: i, scaleY: s }) {
  return !aa(n) || !aa(i) || !aa(s);
}
function Vn(n) {
  return Ea(n) || Gp(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Gp(n) {
  return Xd(n.x) || Xd(n.y);
}
function Xd(n) {
  return n && n !== "0%";
}
function Ys(n, i, s) {
  const a = n - s,
    c = i * a;
  return s + c;
}
function qd(n, i, s, a, c) {
  return (c !== void 0 && (n = Ys(n, c, a)), Ys(n, s, a) + i);
}
function Ca(n, i = 0, s = 1, a, c) {
  ((n.min = qd(n.min, i, s, a, c)), (n.max = qd(n.max, i, s, a, c)));
}
function Qp(n, { x: i, y: s }) {
  (Ca(n.x, i.translate, i.scale, i.originPoint), Ca(n.y, s.translate, s.scale, s.originPoint));
}
const Zd = 0.999999999999,
  Jd = 1.0000000000001;
function jx(n, i, s, a = !1) {
  const c = s.length;
  if (!c) return;
  i.x = i.y = 1;
  let d, f;
  for (let p = 0; p < c; p++) {
    ((d = s[p]), (f = d.projectionDelta));
    const { visualElement: m } = d.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (a &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        dr(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Qp(n, f)),
      a && Vn(d.latestValues) && dr(n, d.latestValues));
  }
  (i.x < Jd && i.x > Zd && (i.x = 1), i.y < Jd && i.y > Zd && (i.y = 1));
}
function fr(n, i) {
  ((n.min = n.min + i), (n.max = n.max + i));
}
function bd(n, i, s, a, c = 0.5) {
  const d = Te(n.min, n.max, c);
  Ca(n, i, s, d, a);
}
function dr(n, i) {
  (bd(n.x, i.x, i.scaleX, i.scale, i.originX), bd(n.y, i.y, i.scaleY, i.scale, i.originY));
}
function Yp(n, i) {
  return Kp(_x(n.getBoundingClientRect(), i));
}
function Lx(n, i, s) {
  const a = Yp(n, s),
    { scroll: c } = i;
  return (c && (fr(a.x, c.offset.x), fr(a.y, c.offset.y)), a);
}
const Xp = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Fx = new WeakMap();
class Ix {
  constructor(i) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ne()),
      (this.visualElement = i));
  }
  start(i, { snapToCursor: s = !1 } = {}) {
    const { presenceContext: a } = this.visualElement;
    if (a && a.isPresent === !1) return;
    const c = (y) => {
        const { dragSnapToOrigin: x } = this.getProps();
        (x ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(Pi(y).point));
      },
      d = (y, x) => {
        const { drag: P, dragPropagation: R, onDragStart: _ } = this.getProps();
        if (
          P &&
          !R &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Dv(P)),
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
            if (jt.test(I)) {
              const { projection: W } = this.visualElement;
              if (W && W.layout) {
                const G = W.layout.layoutBox[j];
                G && (I = ft(G) * (parseFloat(I) / 100));
              }
            }
            this.originPoint[j] = I;
          }),
          _ && ve.postRender(() => _(y, x)),
          ga(this.visualElement, "transform"));
        const { animationState: D } = this.visualElement;
        D && D.setActive("whileDrag", !0);
      },
      f = (y, x) => {
        const {
          dragPropagation: P,
          dragDirectionLock: R,
          onDirectionLock: _,
          onDrag: D,
        } = this.getProps();
        if (!P && !this.openDragLock) return;
        const { offset: j } = x;
        if (R && this.currentDirection === null) {
          ((this.currentDirection = Ox(j)),
            this.currentDirection !== null && _ && _(this.currentDirection));
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
    this.panSession = new Up(
      i,
      { onSessionStart: c, onStart: d, onMove: f, onSessionEnd: p, resumeAnimation: m },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        contextWindow: Xp(this.visualElement),
      },
    );
  }
  stop(i, s) {
    const a = this.isDragging;
    if ((this.cancel(), !a)) return;
    const { velocity: c } = s;
    this.startAnimation(c);
    const { onDragEnd: d } = this.getProps();
    d && ve.postRender(() => d(i, s));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: s } = this.visualElement;
    (i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: a } = this.getProps();
    (!a && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1));
  }
  updateAxis(i, s, a) {
    const { drag: c } = this.getProps();
    if (!a || !Os(i, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + a[i];
    (this.constraints && this.constraints[i] && (f = Cx(f, this.constraints[i], this.elastic[i])),
      d.set(f));
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: s, dragElastic: a } = this.getProps(),
      c =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (i = this.visualElement.projection) === null || i === void 0
            ? void 0
            : i.layout,
      d = this.constraints;
    (s && ar(s)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : s && c
        ? (this.constraints = Ax(c.layoutBox, s))
        : (this.constraints = !1),
      (this.elastic = Mx(a)),
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
    if (!i || !ar(i)) return !1;
    const a = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = Lx(a, c.root, this.visualElement.getTransformPagePoint());
    let f = Rx(c.layout.layoutBox, d);
    if (s) {
      const p = s(Vx(f));
      ((this.hasMutatedConstraints = !!p), p && (f = Kp(p)));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: s,
        dragMomentum: a,
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
        const P = c ? 200 : 1e6,
          R = c ? 40 : 1e7,
          _ = {
            type: "inertia",
            velocity: a ? i[y] : 0,
            bounceStiffness: P,
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
    const a = this.getAxisMotionValue(i);
    return (ga(this.visualElement, i), a.start(au(i, a, 0, s, this.visualElement, !1)));
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
      a = this.visualElement.getProps(),
      c = a[s];
    return c || this.visualElement.getValue(i, (a.initial ? a.initial[i] : void 0) || 0);
  }
  snapToCursor(i) {
    xt((s) => {
      const { drag: a } = this.getProps();
      if (!Os(s, a, this.currentDirection)) return;
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
      { projection: a } = this.visualElement;
    if (!ar(s) || !a || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    xt((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = Dx({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      a.root && a.root.updateScroll(),
      a.updateLayout(),
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
    Fx.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = fi(i, "pointerdown", (m) => {
        const { drag: g, dragListener: y = !0 } = this.getProps();
        g && y && this.start(m);
      }),
      a = () => {
        const { dragConstraints: m } = this.getProps();
        ar(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", a);
    (c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), ve.read(a));
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
        dragDirectionLock: a = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: f = Ta,
        dragMomentum: p = !0,
      } = i;
    return {
      ...i,
      drag: s,
      dragDirectionLock: a,
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
function Ox(n, i = 10) {
  let s = null;
  return (Math.abs(n.y) > i ? (s = "y") : Math.abs(n.x) > i && (s = "x"), s);
}
class zx extends yn {
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
const eh = (n) => (i, s) => {
  n && ve.postRender(() => n(i, s));
};
class Bx extends yn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = ct));
  }
  onPointerDown(i) {
    this.session = new Up(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Xp(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: s, onPan: a, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: eh(i),
      onStart: eh(s),
      onMove: a,
      onEnd: (d, f) => {
        (delete this.session, c && ve.postRender(() => c(d, f)));
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
function th(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const si = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (b.test(n)) n = parseFloat(n);
        else return n;
      const s = th(n, i.target.x),
        a = th(n, i.target.y);
      return `${s}% ${a}%`;
    },
  },
  Ux = {
    correct: (n, { treeScale: i, projectionDelta: s }) => {
      const a = n,
        c = gn.parse(n);
      if (c.length > 5) return a;
      const d = gn.createTransformer(n),
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
class Wx extends H.Component {
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: a, layoutId: c } = this.props,
      { projection: d } = i;
    (uv($x),
      d &&
        (s.group && s.group.add(d),
        a && a.register && c && a.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({ ...d.options, onExitComplete: () => this.safeToRemove() })),
      (Us.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: s, visualElement: a, drag: c, isPresent: d } = this.props,
      f = a.projection;
    return (
      f &&
        ((f.isPresent = d),
        c || i.layoutDependency !== s || s === void 0 ? f.willUpdate() : this.safeToRemove(),
        i.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              ve.postRender(() => {
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
      Ia.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: a } = this.props,
      { projection: c } = i;
    c &&
      (c.scheduleCheckAfterUnmount(),
      s && s.group && s.group.remove(c),
      a && a.deregister && a.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function qp(n) {
  const [i, s] = Ty(),
    a = H.useContext(Mh);
  return A.jsx(Wx, {
    ...n,
    layoutGroup: a,
    switchLayoutGroup: H.useContext(zh),
    isPresent: i,
    safeToRemove: s,
  });
}
const $x = {
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
  boxShadow: Ux,
};
function Hx(n, i, s) {
  const a = Ke(n) ? n : gi(n);
  return (a.start(au("", a, i, s)), a.animation);
}
function Kx(n) {
  return n instanceof SVGElement && n.tagName !== "svg";
}
const Gx = (n, i) => n.depth - i.depth;
class Qx {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (Za(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (Ja(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(Gx), (this.isDirty = !1), this.children.forEach(i));
  }
}
function Yx(n, i) {
  const s = Lt.now(),
    a = ({ timestamp: c }) => {
      const d = c - s;
      d >= i && (mn(a), n(d - i));
    };
  return (ve.read(a, !0), () => mn(a));
}
const Zp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Xx = Zp.length,
  nh = (n) => (typeof n == "string" ? parseFloat(n) : n),
  rh = (n) => typeof n == "number" || b.test(n);
function qx(n, i, s, a, c, d) {
  c
    ? ((n.opacity = Te(0, s.opacity !== void 0 ? s.opacity : 1, Zx(a))),
      (n.opacityExit = Te(i.opacity !== void 0 ? i.opacity : 1, 0, Jx(a))))
    : d &&
      (n.opacity = Te(
        i.opacity !== void 0 ? i.opacity : 1,
        s.opacity !== void 0 ? s.opacity : 1,
        a,
      ));
  for (let f = 0; f < Xx; f++) {
    const p = `border${Zp[f]}Radius`;
    let m = ih(i, p),
      g = ih(s, p);
    if (m === void 0 && g === void 0) continue;
    (m || (m = 0),
      g || (g = 0),
      m === 0 || g === 0 || rh(m) === rh(g)
        ? ((n[p] = Math.max(Te(nh(m), nh(g), a), 0)), (jt.test(g) || jt.test(m)) && (n[p] += "%"))
        : (n[p] = g));
  }
  (i.rotate || s.rotate) && (n.rotate = Te(i.rotate || 0, s.rotate || 0, a));
}
function ih(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const Zx = Jp(0, 0.5, gp),
  Jx = Jp(0.5, 0.95, ct);
function Jp(n, i, s) {
  return (a) => (a < n ? 0 : a > i ? 1 : s(pr(n, i, a)));
}
function sh(n, i) {
  ((n.min = i.min), (n.max = i.max));
}
function vt(n, i) {
  (sh(n.x, i.x), sh(n.y, i.y));
}
function oh(n, i) {
  ((n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin));
}
function lh(n, i, s, a, c) {
  return ((n -= i), (n = Ys(n, 1 / s, a)), c !== void 0 && (n = Ys(n, 1 / c, a)), n);
}
function bx(n, i = 0, s = 1, a = 0.5, c, d = n, f = n) {
  if (
    (jt.test(i) && ((i = parseFloat(i)), (i = Te(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = Te(d.min, d.max, a);
  (n === d && (p -= i), (n.min = lh(n.min, i, s, p, c)), (n.max = lh(n.max, i, s, p, c)));
}
function ah(n, i, [s, a, c], d, f) {
  bx(n, i[s], i[a], i[c], i.scale, d, f);
}
const e1 = ["x", "scaleX", "originX"],
  t1 = ["y", "scaleY", "originY"];
function uh(n, i, s, a) {
  (ah(n.x, i, e1, s ? s.x : void 0, a ? a.x : void 0),
    ah(n.y, i, t1, s ? s.y : void 0, a ? a.y : void 0));
}
function ch(n) {
  return n.translate === 0 && n.scale === 1;
}
function bp(n) {
  return ch(n.x) && ch(n.y);
}
function fh(n, i) {
  return n.min === i.min && n.max === i.max;
}
function n1(n, i) {
  return fh(n.x, i.x) && fh(n.y, i.y);
}
function dh(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function em(n, i) {
  return dh(n.x, i.x) && dh(n.y, i.y);
}
function hh(n) {
  return ft(n.x) / ft(n.y);
}
function ph(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
class r1 {
  constructor() {
    this.members = [];
  }
  add(i) {
    (Za(this.members, i), i.scheduleRender());
  }
  remove(i) {
    if ((Ja(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead)) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(i) {
    const s = this.members.findIndex((c) => i === c);
    if (s === 0) return !1;
    let a;
    for (let c = s; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        a = d;
        break;
      }
    }
    return a ? (this.promote(a), !0) : !1;
  }
  promote(i, s) {
    const a = this.lead;
    if (i !== a && ((this.prevLead = a), (this.lead = i), i.show(), a)) {
      (a.instance && a.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = a),
        s && (i.resumeFrom.preserveOpacity = !0),
        a.snapshot &&
          ((i.snapshot = a.snapshot),
          (i.snapshot.latestValues = a.animationValues || a.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0));
      const { crossfade: c } = i.options;
      c === !1 && a.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: s, resumingFrom: a } = i;
      (s.onExitComplete && s.onExitComplete(),
        a && a.options.onExitComplete && a.options.onExitComplete());
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
function i1(n, i, s) {
  let a = "";
  const c = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((c || d || f) && (a = `translate3d(${c}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (a += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const { transformPerspective: g, rotate: y, rotateX: x, rotateY: P, skewX: R, skewY: _ } = s;
    (g && (a = `perspective(${g}px) ${a}`),
      y && (a += `rotate(${y}deg) `),
      x && (a += `rotateX(${x}deg) `),
      P && (a += `rotateY(${P}deg) `),
      R && (a += `skewX(${R}deg) `),
      _ && (a += `skewY(${_}deg) `));
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return ((p !== 1 || m !== 1) && (a += `scale(${p}, ${m})`), a || "none");
}
const _n = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ui = typeof window < "u" && window.MotionDebug !== void 0,
  ua = ["", "X", "Y", "Z"],
  s1 = { visibility: "hidden" },
  mh = 1e3;
let o1 = 0;
function ca(n, i, s, a) {
  const { latestValues: c } = i;
  c[n] && ((s[n] = c[n]), i.setStaticValue(n, 0), a && (a[n] = 0));
}
function tm(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const s = up(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", ve, !(c || d));
  }
  const { parent: a } = n;
  a && !a.hasCheckedOptimisedAppear && tm(a);
}
function nm({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: a,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, p = i == null ? void 0 : i()) {
      ((this.id = o1++),
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
            this.nodes.forEach(u1),
            this.nodes.forEach(p1),
            this.nodes.forEach(m1),
            this.nodes.forEach(c1),
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
      this.root === this && (this.nodes = new Qx());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new ba()),
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
      ((this.isSVG = Kx(f)), (this.instance = f));
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
            Us.hasAnimatedSinceResize &&
              ((Us.hasAnimatedSinceResize = !1), this.nodes.forEach(yh)));
        });
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          y &&
          (m || g) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: x, hasLayoutChanged: P, hasRelativeTargetChanged: R, layout: _ }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const D = this.options.transition || y.getDefaultTransition() || w1,
                { onLayoutAnimationStart: j, onLayoutAnimationComplete: I } = y.getProps(),
                W = !this.targetLayout || !em(this.targetLayout, _) || R,
                G = !P && R;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                G ||
                (P && (W || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(x, G));
                const te = { ...Qa(D, "layout"), onPlay: j, onComplete: I };
                ((y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((te.delay = 0), (te.type = !1)),
                  this.startAnimation(te));
              } else
                (P || yh(this),
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(g1), this.animationId++);
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
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && tm(this),
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
        (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(gh));
        return;
      }
      (this.isUpdating || this.nodes.forEach(d1),
        (this.isUpdating = !1),
        this.nodes.forEach(h1),
        this.nodes.forEach(l1),
        this.nodes.forEach(a1),
        this.clearAllSnapshots());
      const p = Lt.now();
      ((ze.delta = Qt(0, 1e3 / 60, p - ze.timestamp)),
        (ze.timestamp = p),
        (ze.isProcessing = !0),
        ea.update.process(ze),
        ea.preRender.process(ze),
        ea.render.process(ze),
        (ze.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Ia.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(f1), this.sharedNodes.forEach(y1));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), ve.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ve.postRender(() => {
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
        (this.layoutCorrected = Ne()),
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
        const m = a(this.instance);
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
        (p || Vn(this.latestValues) || y) &&
        (c(this.instance, g), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        f && (m = this.removeTransform(m)),
        S1(m),
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
      if (!p) return Ne();
      const m = p.measureViewportBox();
      if (!(
        ((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) || this.path.some(P1)
      )) {
        const { scroll: y } = this.root;
        y && (fr(m.x, y.offset.x), fr(m.y, y.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var p;
      const m = Ne();
      if ((vt(m, f), !((p = this.scroll) === null || p === void 0) && p.wasRoot)) return m;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g],
          { scroll: x, options: P } = y;
        y !== this.root &&
          x &&
          P.layoutScroll &&
          (x.wasRoot && vt(m, f), fr(m.x, x.offset.x), fr(m.y, x.offset.y));
      }
      return m;
    }
    applyTransform(f, p = !1) {
      const m = Ne();
      vt(m, f);
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        (!p &&
          y.options.layoutScroll &&
          y.scroll &&
          y !== y.root &&
          dr(m, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
          Vn(y.latestValues) && dr(m, y.latestValues));
      }
      return (Vn(this.latestValues) && dr(m, this.latestValues), m);
    }
    removeTransform(f) {
      const p = Ne();
      vt(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        if (!g.instance || !Vn(g.latestValues)) continue;
        Ea(g.latestValues) && g.updateSnapshot();
        const y = Ne(),
          x = g.measurePageBox();
        (vt(y, x), uh(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, y));
      }
      return (Vn(this.latestValues) && uh(p, this.latestValues), p);
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
          const R = this.getClosestProjectingParent();
          R && R.layout && this.animationProgress !== 1
            ? ((this.relativeParent = R),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ne()),
              (this.relativeTargetOrigin = Ne()),
              hi(this.relativeTargetOrigin, this.layout.layoutBox, R.layout.layoutBox),
              vt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = Ne()), (this.targetWithTransforms = Ne())),
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
                  Qp(this.target, this.targetDelta))
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
                (this.relativeTarget = Ne()),
                (this.relativeTargetOrigin = Ne()),
                hi(this.relativeTargetOrigin, this.target, R.target),
                vt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ui && _n.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ea(this.parent.latestValues) || Gp(this.parent.latestValues)))
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
        R = this.treeScale.y;
      (jx(this.layoutCorrected, this.treeScale, this.path, m),
        p.layout &&
          !p.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((p.target = p.layout.layoutBox), (p.targetWithTransforms = Ne())));
      const { target: _ } = p;
      if (!_) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (oh(this.prevProjectionDelta.x, this.projectionDelta.x),
          oh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        di(this.projectionDelta, this.layoutCorrected, _, this.latestValues),
        (this.treeScale.x !== P ||
          this.treeScale.y !== R ||
          !ph(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !ph(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
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
      ((this.prevProjectionDelta = cr()),
        (this.projectionDelta = cr()),
        (this.projectionDeltaWithTransform = cr()));
    }
    setAnimationOrigin(f, p = !1) {
      const m = this.snapshot,
        g = m ? m.latestValues : {},
        y = { ...this.latestValues },
        x = cr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const P = Ne(),
        R = m ? m.source : void 0,
        _ = this.layout ? this.layout.source : void 0,
        D = R !== _,
        j = this.getStack(),
        I = !j || j.members.length <= 1,
        W = !!(D && !I && this.options.crossfade === !0 && !this.path.some(x1));
      this.animationProgress = 0;
      let G;
      ((this.mixTargetDelta = (te) => {
        const Y = te / 1e3;
        (vh(x.x, f.x, Y),
          vh(x.y, f.y, Y),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (hi(P, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            v1(this.relativeTarget, this.relativeTargetOrigin, P, Y),
            G && n1(this.relativeTarget, G) && (this.isProjectionDirty = !1),
            G || (G = Ne()),
            vt(G, this.relativeTarget)),
          D && ((this.animationValues = y), qx(y, g, this.latestValues, Y, W, I)),
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
        this.pendingAnimation && (mn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ve.update(() => {
          ((Us.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Hx(0, mh, {
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
        (this.mixTargetDelta && this.mixTargetDelta(mh), this.currentAnimation.stop()),
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
          rm(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          m = this.target || Ne();
          const x = ft(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + x));
          const P = ft(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + P));
        }
        (vt(p, m), dr(p, y), di(this.projectionDeltaWithTransform, this.layoutCorrected, p, y));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new r1()),
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
      if (!this.isVisible) return s1;
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
        const D = {};
        return (
          this.options.layoutId &&
            ((D.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (D.pointerEvents = zs(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !Vn(this.latestValues) &&
            ((D.transform = y ? y({}, "") : "none"), (this.hasProjected = !1)),
          D
        );
      }
      const P = x.animationValues || x.latestValues;
      (this.applyTransformsToTarget(),
        (g.transform = i1(this.projectionDeltaWithTransform, this.treeScale, P)),
        y && (g.transform = y(P, g.transform)));
      const { x: R, y: _ } = this.projectionDelta;
      ((g.transformOrigin = `${R.origin * 100}% ${_.origin * 100}% 0`),
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
      for (const D in $s) {
        if (P[D] === void 0) continue;
        const { correct: j, applyTo: I } = $s[D],
          W = g.transform === "none" ? P[D] : j(P[D], x);
        if (I) {
          const G = I.length;
          for (let te = 0; te < G; te++) g[I[te]] = W;
        } else g[D] = W;
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
        this.root.nodes.forEach(gh),
        this.root.sharedNodes.clear());
    }
  };
}
function l1(n) {
  n.updateLayout();
}
function a1(n) {
  var i;
  const s = ((i = n.resumeFrom) === null || i === void 0 ? void 0 : i.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && s && n.hasListeners("didUpdate")) {
    const { layoutBox: a, measuredBox: c } = n.layout,
      { animationType: d } = n.options,
      f = s.source !== n.layout.source;
    d === "size"
      ? xt((x) => {
          const P = f ? s.measuredBox[x] : s.layoutBox[x],
            R = ft(P);
          ((P.min = a[x].min), (P.max = P.min + R));
        })
      : rm(d, s.layoutBox, a) &&
        xt((x) => {
          const P = f ? s.measuredBox[x] : s.layoutBox[x],
            R = ft(a[x]);
          ((P.max = P.min + R),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[x].max = n.relativeTarget[x].min + R)));
        });
    const p = cr();
    di(p, a, s.layoutBox);
    const m = cr();
    f ? di(m, n.applyTransform(c, !0), s.measuredBox) : di(m, a, s.layoutBox);
    const g = !bp(p);
    let y = !1;
    if (!n.resumeFrom) {
      const x = n.getClosestProjectingParent();
      if (x && !x.resumeFrom) {
        const { snapshot: P, layout: R } = x;
        if (P && R) {
          const _ = Ne();
          hi(_, s.layoutBox, P.layoutBox);
          const D = Ne();
          (hi(D, a, R.layoutBox),
            em(_, D) || (y = !0),
            x.options.layoutRoot &&
              ((n.relativeTarget = D), (n.relativeTargetOrigin = _), (n.relativeParent = x)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: a,
      snapshot: s,
      delta: m,
      layoutDelta: p,
      hasLayoutChanged: g,
      hasRelativeTargetChanged: y,
    });
  } else if (n.isLead()) {
    const { onExitComplete: a } = n.options;
    a && a();
  }
  n.options.transition = void 0;
}
function u1(n) {
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
function c1(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function f1(n) {
  n.clearSnapshot();
}
function gh(n) {
  n.clearMeasurements();
}
function d1(n) {
  n.isLayoutDirty = !1;
}
function h1(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function yh(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function p1(n) {
  n.resolveTargetDelta();
}
function m1(n) {
  n.calcProjection();
}
function g1(n) {
  n.resetSkewAndRotation();
}
function y1(n) {
  n.removeLeadSnapshot();
}
function vh(n, i, s) {
  ((n.translate = Te(i.translate, 0, s)),
    (n.scale = Te(i.scale, 1, s)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint));
}
function xh(n, i, s, a) {
  ((n.min = Te(i.min, s.min, a)), (n.max = Te(i.max, s.max, a)));
}
function v1(n, i, s, a) {
  (xh(n.x, i.x, s.x, a), xh(n.y, i.y, s.y, a));
}
function x1(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const w1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  wh = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  Sh = wh("applewebkit/") && !wh("chrome/") ? Math.round : ct;
function Ph(n) {
  ((n.min = Sh(n.min)), (n.max = Sh(n.max)));
}
function S1(n) {
  (Ph(n.x), Ph(n.y));
}
function rm(n, i, s) {
  return n === "position" || (n === "preserve-aspect" && !Tx(hh(i), hh(s), 0.2));
}
function P1(n) {
  var i;
  return n !== n.root && ((i = n.scroll) === null || i === void 0 ? void 0 : i.wasRoot);
}
const k1 = nm({
    attachResizeListener: (n, i) => vi(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  fa = { current: void 0 },
  im = nm({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!fa.current) {
        const n = new k1({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (fa.current = n));
      }
      return fa.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  T1 = { pan: { Feature: Bx }, drag: { Feature: zx, ProjectionNode: im, MeasureLayout: qp } };
function kh(n, i, s) {
  const { props: a } = n;
  n.animationState && a.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s,
    d = a[c];
  d && ve.postRender(() => d(i, Pi(i)));
}
class E1 extends yn {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = Tv(i, (s) => (kh(this.node, s, "Start"), (a) => kh(this.node, a, "End"))));
  }
  unmount() {}
}
class C1 extends yn {
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
function Th(n, i, s) {
  const { props: a } = n;
  n.animationState && a.whileTap && n.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s),
    d = a[c];
  d && ve.postRender(() => d(i, Pi(i)));
}
class A1 extends yn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = Rv(
        i,
        (s) => (
          Th(this.node, s, "Start"),
          (a, { success: c }) => Th(this.node, a, c ? "End" : "Cancel")
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
  D1 = (n) => {
    n.forEach(R1);
  };
function N1({ root: n, ...i }) {
  const s = n || document;
  da.has(s) || da.set(s, {});
  const a = da.get(s),
    c = JSON.stringify(i);
  return (a[c] || (a[c] = new IntersectionObserver(D1, { root: n, ...i })), a[c]);
}
function M1(n, i, s) {
  const a = N1(i);
  return (
    Aa.set(n, s),
    a.observe(n),
    () => {
      (Aa.delete(n), a.unobserve(n));
    }
  );
}
const V1 = { some: 0, all: 1 };
class _1 extends yn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: s, margin: a, amount: c = "some", once: d } = i,
      f = {
        root: s ? s.current : void 0,
        rootMargin: a,
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
    return M1(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(j1(i, s)) && this.startObserver();
  }
  unmount() {}
}
function j1({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const L1 = {
    inView: { Feature: _1 },
    tap: { Feature: A1 },
    focus: { Feature: C1 },
    hover: { Feature: E1 },
  },
  F1 = { layout: { ProjectionNode: im, MeasureLayout: qp } },
  Ra = { current: null },
  sm = { current: !1 };
function I1() {
  if (((sm.current = !0), !!Va))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Ra.current = n.matches);
      (n.addListener(i), i());
    } else Ra.current = !1;
}
const O1 = [...Np, He, gn],
  z1 = (n) => O1.find(Dp(n)),
  Eh = new WeakMap();
function B1(n, i, s) {
  for (const a in i) {
    const c = i[a],
      d = s[a];
    if (Ke(c)) n.addValue(a, c);
    else if (Ke(d)) n.addValue(a, gi(c, { owner: n }));
    else if (d !== c)
      if (n.hasValue(a)) {
        const f = n.getValue(a);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = n.getStaticValue(a);
        n.addValue(a, gi(f !== void 0 ? f : c, { owner: n }));
      }
  }
  for (const a in s) i[a] === void 0 && n.removeValue(a);
  return i;
}
const Ch = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class U1 {
  scrapeMotionValuesFromProps(i, s, a) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: s,
      presenceContext: a,
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
      (this.KeyframeResolver = su),
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
        const R = Lt.now();
        this.renderScheduledAt < R &&
          ((this.renderScheduledAt = R), ve.render(this.render, !1, !0));
      }));
    const { latestValues: m, renderState: g, onUpdate: y } = f;
    ((this.onUpdate = y),
      (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = s.initial ? { ...m } : {}),
      (this.renderState = g),
      (this.parent = i),
      (this.props = s),
      (this.presenceContext = a),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = p),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = Zs(s)),
      (this.isVariantNode = Ih(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: x, ...P } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const R in P) {
      const _ = P[R];
      m[R] !== void 0 && Ke(_) && _.set(m[R], !1);
    }
  }
  mount(i) {
    ((this.current = i),
      Eh.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, a) => this.bindToMotionValue(a, s)),
      sm.current || I1(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Ra.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Eh.delete(this.current),
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
    const a = Fn.has(i),
      c = s.on("change", (p) => {
        ((this.latestValues[i] = p),
          this.props.onUpdate && ve.preRender(this.notifyUpdate),
          a && this.projection && (this.projection.isTransformDirty = !0));
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
      const { isEnabled: a, Feature: c } = s;
      if (
        (!this.features[i] && c && a(this.props) && (this.features[i] = new c(this)),
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ne();
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
    for (let a = 0; a < Ch.length; a++) {
      const c = Ch[a];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = B1(
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
    const a = this.values.get(i);
    s !== a &&
      (a && this.removeValue(i),
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
    let a = this.values.get(i);
    return (
      a === void 0 &&
        s !== void 0 &&
        ((a = gi(s === null ? void 0 : s, { owner: this })), this.addValue(i, a)),
      a
    );
  }
  readValue(i, s) {
    var a;
    let c =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (a = this.getBaseTargetFromProps(this.props, i)) !== null && a !== void 0
          ? a
          : this.readValueFromInstance(this.current, i, this.options);
    return (
      c != null &&
        (typeof c == "string" && (Ap(c) || vp(c))
          ? (c = parseFloat(c))
          : !z1(c) && gn.test(s) && (c = Tp(i, s)),
        this.setBaseTarget(i, Ke(c) ? c.get() : c)),
      Ke(c) ? c.get() : c
    );
  }
  setBaseTarget(i, s) {
    this.baseTarget[i] = s;
  }
  getBaseTarget(i) {
    var s;
    const { initial: a } = this.props;
    let c;
    if (typeof a == "string" || typeof a == "object") {
      const f = za(
        this.props,
        a,
        (s = this.presenceContext) === null || s === void 0 ? void 0 : s.custom,
      );
      f && (c = f[i]);
    }
    if (a && c !== void 0) return c;
    const d = this.getBaseTargetFromProps(this.props, i);
    return d !== void 0 && !Ke(d)
      ? d
      : this.initialValues[i] !== void 0 && c === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, s) {
    return (this.events[i] || (this.events[i] = new ba()), this.events[i].add(s));
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
}
class om extends U1 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Mp));
  }
  sortInstanceNodePosition(i, s) {
    return i.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, s) {
    return i.style ? i.style[s] : void 0;
  }
  removeValueFromRenderState(i, { vars: s, style: a }) {
    (delete s[i], delete a[i]);
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
function W1(n) {
  return window.getComputedStyle(n);
}
class $1 extends om {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Gh));
  }
  readValueFromInstance(i, s) {
    if (Fn.has(s)) {
      const a = iu(s);
      return (a && a.default) || 0;
    } else {
      const a = W1(i),
        c = ($h(s) ? a.getPropertyValue(s) : a[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return Yp(i, s);
  }
  build(i, s, a) {
    Wa(i, s, a.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, a) {
    return Ga(i, s, a);
  }
}
class H1 extends om {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ne));
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (Fn.has(s)) {
      const a = iu(s);
      return (a && a.default) || 0;
    }
    return ((s = Qh.has(s) ? s : Fa(s)), i.getAttribute(s));
  }
  scrapeMotionValuesFromProps(i, s, a) {
    return qh(i, s, a);
  }
  build(i, s, a) {
    $a(i, s, this.isSVGTag, a.transformTemplate);
  }
  renderInstance(i, s, a, c) {
    Yh(i, s, a, c);
  }
  mount(i) {
    ((this.isSVGTag = Ka(i.tagName)), super.mount(i));
  }
}
const K1 = (n, i) => (Oa(n) ? new H1(i) : new $1(i, { allowProjection: n !== H.Fragment })),
  G1 = vv({ ...mx, ...L1, ...T1, ...F1 }, K1),
  Gt = _y(G1),
  Q1 = { some: 0, all: 1 };
function Y1(n, i, { root: s, margin: a, amount: c = "some" } = {}) {
  const d = ip(n),
    f = new WeakMap(),
    p = (g) => {
      g.forEach((y) => {
        const x = f.get(y.target);
        if (y.isIntersecting !== !!x)
          if (y.isIntersecting) {
            const P = i(y);
            typeof P == "function" ? f.set(y.target, P) : m.unobserve(y.target);
          } else typeof x == "function" && (x(y), f.delete(y.target));
      });
    },
    m = new IntersectionObserver(p, {
      root: s,
      rootMargin: a,
      threshold: typeof c == "number" ? c : Q1[c],
    });
  return (d.forEach((g) => m.observe(g)), () => m.disconnect());
}
function eo(n, { root: i, margin: s, amount: a, once: c = !1 } = {}) {
  const [d, f] = H.useState(!1);
  return (
    H.useEffect(() => {
      if (!n.current || (c && d)) return;
      const p = () => (f(!0), c ? void 0 : () => f(!1)),
        m = { root: (i && i.current) || void 0, margin: s, amount: a };
      return Y1(n.current, p, m);
    }, [i, n, s, c, a]),
    d
  );
}
const X1 =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4",
  q1 =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4",
  Z1 =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4",
  Ah = {
    strategy:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
    craft:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
  },
  hr = "'Instrument Serif', serif";
function lm() {
  const n = H.useRef(null),
    i = eo(n, { once: !0, margin: "-100px" });
  return A.jsxs("section", {
    ref: n,
    className: "relative overflow-hidden bg-black px-6 pb-10 pt-32 md:pb-14 md:pt-44",
    children: [
      A.jsx("div", {
        className:
          "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)]",
        "aria-hidden": !0,
      }),
      A.jsxs("div", {
        className: "relative mx-auto max-w-6xl",
        children: [
          A.jsx(Gt.p, {
            initial: { opacity: 0, y: 20 },
            animate: i ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.6 },
            className: "text-sm uppercase tracking-widest text-white/40",
            children: "About Us",
          }),
          A.jsxs(Gt.h2, {
            initial: { opacity: 0, y: 40 },
            animate: i ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.8, delay: 0.1 },
            className:
              "mt-6 text-4xl leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl",
            style: { fontFamily: hr },
            children: [
              "Pioneering",
              " ",
              A.jsx("em", {
                className: "text-white/60",
                style: { fontFamily: hr },
                children: "ideas",
              }),
              " ",
              "for",
              A.jsx("br", { className: "hidden md:block" }),
              "minds that",
              " ",
              A.jsx("em", {
                className: "text-white/60",
                style: { fontFamily: hr },
                children: "create, build, and inspire.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function am() {
  const n = H.useRef(null),
    i = eo(n, { once: !0, margin: "-80px" });
  return A.jsx("section", {
    ref: n,
    className: "overflow-hidden bg-black px-6 py-28 md:py-40",
    children: A.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        A.jsxs(Gt.h2, {
          initial: { opacity: 0, y: 40 },
          animate: i ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.8 },
          className: "mb-16 text-5xl tracking-tight text-white md:mb-24 md:text-7xl lg:text-8xl",
          style: { fontFamily: hr },
          children: [
            "Innovation",
            " ",
            A.jsx("em", { className: "text-white/40", style: { fontFamily: hr }, children: "×" }),
            " ",
            "Vision",
          ],
        }),
        A.jsxs("div", {
          className: "grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12",
          children: [
            A.jsx(Gt.div, {
              initial: { opacity: 0, x: -40 },
              animate: i ? { opacity: 1, x: 0 } : {},
              transition: { duration: 0.8, delay: 0.1 },
              className: "aspect-[4/3] overflow-hidden rounded-3xl",
              children: A.jsx("video", {
                src: Z1,
                className: "h-full w-full object-cover",
                muted: !0,
                autoPlay: !0,
                loop: !0,
                playsInline: !0,
                preload: "auto",
              }),
            }),
            A.jsxs(Gt.div, {
              initial: { opacity: 0, x: 40 },
              animate: i ? { opacity: 1, x: 0 } : {},
              transition: { duration: 0.8, delay: 0.15 },
              className: "space-y-10",
              children: [
                A.jsxs("div", {
                  children: [
                    A.jsx("p", {
                      className: "mb-4 text-xs uppercase tracking-widest text-white/40",
                      children: "Choose your space",
                    }),
                    A.jsx("p", {
                      className: "text-base leading-relaxed text-white/70 md:text-lg",
                      children:
                        "Every meaningful breakthrough begins at the intersection of disciplined strategy and remarkable creative vision. We operate at that crossroads, turning bold thinking into tangible outcomes that move people and reshape industries.",
                    }),
                  ],
                }),
                A.jsx("div", { className: "h-px w-full bg-white/10" }),
                A.jsxs("div", {
                  children: [
                    A.jsx("p", {
                      className: "mb-4 text-xs uppercase tracking-widest text-white/40",
                      children: "Shape the future",
                    }),
                    A.jsx("p", {
                      className: "text-base leading-relaxed text-white/70 md:text-lg",
                      children:
                        "We believe that the best work emerges when curiosity meets conviction. Our process is designed to uncover hidden opportunities and translate them into experiences that resonate long after the first impression.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function J1() {
  return A.jsxs("main", { children: [A.jsx(lm, {}), A.jsx(am, {})] });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b1 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  um = (...n) =>
    n
      .filter((i, s, a) => !!i && i.trim() !== "" && a.indexOf(i) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ew = {
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
 */ const tw = H.forwardRef(
  (
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: c = "",
      children: d,
      iconNode: f,
      ...p
    },
    m,
  ) =>
    H.createElement(
      "svg",
      {
        ref: m,
        ...ew,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: a ? (Number(s) * 24) / Number(i) : s,
        className: um("lucide", c),
        ...p,
      },
      [...f.map(([g, y]) => H.createElement(g, y)), ...(Array.isArray(d) ? d : [d])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ki = (n, i) => {
  const s = H.forwardRef(({ className: a, ...c }, d) =>
    H.createElement(tw, { ref: d, iconNode: i, className: um(`lucide-${b1(n)}`, a), ...c }),
  );
  return ((s.displayName = `${n}`), s);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cm = ki("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nw = ki("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fm = ki("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rw = ki("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iw = ki("Twitter", [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ]),
  sw = [
    { label: "Features", route: "features" },
    { label: "Pricing", route: "pricing" },
    { label: "About", route: "about" },
  ];
function dm() {
  const n = (i) => (s) => {
    (s.preventDefault(), Dh(i));
  };
  return A.jsx("nav", {
    className: "relative z-20 px-6 py-6",
    children: A.jsxs("div", {
      className:
        "liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3",
      children: [
        A.jsxs("div", {
          className: "flex items-center gap-8",
          children: [
            A.jsxs("a", {
              href: oi(""),
              onClick: n(""),
              className: "flex items-center gap-2 text-lg font-semibold text-white",
              "aria-label": "Asme home",
              children: [A.jsx(fm, { className: "h-6 w-6", "aria-hidden": !0 }), "Asme"],
            }),
            A.jsx("div", {
              className: "hidden items-center gap-8 md:flex",
              children: sw.map((i) =>
                A.jsx(
                  "a",
                  {
                    href: oi(i.route),
                    onClick: n(i.route),
                    className:
                      "text-sm font-medium text-white/80 transition-colors hover:text-white",
                    children: i.label,
                  },
                  i.route,
                ),
              ),
            }),
          ],
        }),
        A.jsxs("div", {
          className: "flex items-center gap-4",
          children: [
            A.jsx("a", {
              href: oi("pricing"),
              onClick: n("pricing"),
              className: "text-sm font-medium text-white transition-colors hover:text-white/90",
              children: "Sign Up",
            }),
            A.jsx("a", {
              href: oi("contact"),
              onClick: n("contact"),
              className:
                "liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5",
              children: "Login",
            }),
          ],
        }),
      ],
    }),
  });
}
function Ti({ title: n, eyebrow: i, children: s }) {
  return A.jsxs("div", {
    className: "min-h-screen bg-black text-white",
    children: [
      A.jsx(dm, {}),
      A.jsxs("div", {
        className: "mx-auto max-w-4xl px-6 pb-24 pt-28 md:pt-36",
        children: [
          i
            ? A.jsx("p", {
                className: "text-sm uppercase tracking-widest text-white/40",
                children: i,
              })
            : null,
          A.jsx("h1", {
            className: "mt-4 text-4xl tracking-tight md:text-6xl",
            style: { fontFamily: "'Instrument Serif', serif" },
            children: n,
          }),
          s ? A.jsx("div", { className: "mt-8 space-y-4 text-white/65", children: s }) : null,
        ],
      }),
    ],
  });
}
function ow() {
  return A.jsxs(Ti, {
    title: "Contact",
    eyebrow: "Reach us",
    children: [
      A.jsx("p", { children: "hello@asme.studio — partnerships, press, and studio inquiries." }),
      A.jsxs("form", {
        className: "mt-8 flex max-w-xl flex-col gap-4",
        onSubmit: (n) => n.preventDefault(),
        children: [
          A.jsx("input", {
            type: "text",
            name: "name",
            placeholder: "Your name",
            className:
              "liquid-glass rounded-full border-none bg-transparent px-6 py-3 text-base text-white placeholder:text-white/40 outline-none",
          }),
          A.jsx("input", {
            type: "email",
            name: "email",
            required: !0,
            placeholder: "Your email",
            className:
              "liquid-glass rounded-full border-none bg-transparent px-6 py-3 text-base text-white placeholder:text-white/40 outline-none",
          }),
          A.jsx("textarea", {
            name: "message",
            rows: 4,
            placeholder: "How can we help?",
            className:
              "liquid-glass rounded-3xl border-none bg-transparent px-6 py-4 text-base text-white placeholder:text-white/40 outline-none",
          }),
          A.jsxs("button", {
            type: "submit",
            className:
              "inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-85",
            children: ["Send message", A.jsx(cm, { className: "h-4 w-4" })],
          }),
        ],
      }),
    ],
  });
}
const lw = [
  {
    tag: "Strategy",
    title: "Research & Insight",
    description:
      "We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change.",
    video: Ah.strategy,
  },
  {
    tag: "Craft",
    title: "Design & Execution",
    description:
      "From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary.",
    video: Ah.craft,
  },
];
function hm() {
  const n = H.useRef(null),
    i = eo(n, { once: !0, margin: "-80px" });
  return A.jsxs("section", {
    ref: n,
    className: "relative overflow-hidden bg-black px-6 py-28 md:py-40",
    children: [
      A.jsx("div", {
        className:
          "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]",
        "aria-hidden": !0,
      }),
      A.jsxs("div", {
        className: "relative mx-auto max-w-6xl",
        children: [
          A.jsxs(Gt.div, {
            initial: { opacity: 0, y: 30 },
            animate: i ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.7 },
            className: "mb-12 flex items-end justify-between md:mb-16",
            children: [
              A.jsx("h2", {
                className: "text-3xl tracking-tight text-white md:text-5xl",
                children: "What we do",
              }),
              A.jsx("span", {
                className: "hidden text-sm text-white/40 md:block",
                children: "Our services",
              }),
            ],
          }),
          A.jsx("div", {
            className: "grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8",
            children: lw.map((s, a) =>
              A.jsxs(
                Gt.article,
                {
                  initial: { opacity: 0, y: 50 },
                  animate: i ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8, delay: a * 0.15 },
                  className: "liquid-glass group overflow-hidden rounded-3xl",
                  children: [
                    A.jsxs("div", {
                      className: "relative aspect-video overflow-hidden",
                      children: [
                        A.jsx("video", {
                          src: s.video,
                          className:
                            "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
                          muted: !0,
                          autoPlay: !0,
                          loop: !0,
                          playsInline: !0,
                          preload: "auto",
                        }),
                        A.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent",
                        }),
                      ],
                    }),
                    A.jsxs("div", {
                      className: "p-6 md:p-8",
                      children: [
                        A.jsxs("div", {
                          className: "mb-4 flex items-start justify-between gap-4",
                          children: [
                            A.jsx("span", {
                              className: "text-xs uppercase tracking-widest text-white/40",
                              children: s.tag,
                            }),
                            A.jsx("span", {
                              className: "liquid-glass rounded-full p-2 text-white/80",
                              children: A.jsx(nw, { className: "h-4 w-4" }),
                            }),
                          ],
                        }),
                        A.jsx("h3", {
                          className: "mb-3 text-xl tracking-tight text-white md:text-2xl",
                          children: s.title,
                        }),
                        A.jsx("p", {
                          className: "text-sm leading-relaxed text-white/50",
                          children: s.description,
                        }),
                      ],
                    }),
                  ],
                },
                s.title,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function aw() {
  return A.jsxs(A.Fragment, {
    children: [
      A.jsx(Ti, {
        title: "Features",
        eyebrow: "Capabilities",
        children: A.jsx("p", {
          children:
            "Curiosity-led research, liquid-glass product surfaces, and cinematic storytelling—built for teams who ship ideas that matter.",
        }),
      }),
      A.jsx(hm, {}),
    ],
  });
}
function uw() {
  const n = H.useRef(null),
    i = eo(n, { once: !0, margin: "-80px" });
  return A.jsx("section", {
    ref: n,
    className: "overflow-hidden bg-black px-6 pb-20 pt-6 md:pb-32 md:pt-10",
    children: A.jsxs(Gt.div, {
      initial: { opacity: 0, y: 60 },
      animate: i ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9 },
      className: "relative mx-auto aspect-video max-w-6xl overflow-hidden rounded-3xl",
      children: [
        A.jsx("video", {
          src: q1,
          className: "h-full w-full object-cover",
          muted: !0,
          autoPlay: !0,
          loop: !0,
          playsInline: !0,
          preload: "auto",
        }),
        A.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent",
        }),
        A.jsxs("div", {
          className:
            "absolute bottom-0 left-0 right-0 flex flex-col gap-6 p-6 md:flex-row md:items-end md:justify-between md:p-10",
          children: [
            A.jsxs("div", {
              className: "liquid-glass max-w-md rounded-2xl p-6 md:p-8",
              children: [
                A.jsx("p", {
                  className: "mb-3 text-xs uppercase tracking-widest text-white/50",
                  children: "Our Approach",
                }),
                A.jsx("p", {
                  className: "text-sm leading-relaxed text-white md:text-base",
                  children:
                    "We believe in the power of curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to innovation.",
                }),
              ],
            }),
            A.jsx(Gt.button, {
              type: "button",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className:
                "liquid-glass shrink-0 self-start rounded-full px-8 py-3 text-sm font-medium text-white md:self-auto",
              children: "Explore more",
            }),
          ],
        }),
      ],
    }),
  });
}
function cw({ src: n, className: i, style: s, shiftY: a }) {
  const c = H.useRef(null),
    d = H.useRef(null),
    f = H.useRef(!1),
    [p, m] = H.useState(!1),
    g = (y, x = 500) => {
      const P = c.current;
      if (!P || p) return;
      d.current !== null && (cancelAnimationFrame(d.current), (d.current = null));
      const R = P.style.opacity ? parseFloat(P.style.opacity) : 0,
        _ = performance.now(),
        D = (j) => {
          const I = Math.min((j - _) / x, 1);
          ((P.style.opacity = String(R + (y - R) * I)),
            I < 1 ? (d.current = requestAnimationFrame(D)) : (d.current = null));
        };
      d.current = requestAnimationFrame(D);
    };
  return (
    H.useEffect(() => {
      m(!1);
      const y = c.current;
      if (!y) return;
      ((y.loop = !1), (y.style.opacity = "0"), (f.current = !1));
      const x = () => {
          ((y.style.opacity = "0"),
            y
              .play()
              .then(() => g(1))
              .catch(() => g(1)));
        },
        P = () => {
          const D = y.duration;
          if (!D || f.current) return;
          const j = D - y.currentTime;
          j <= 0.55 && j > 0 && ((f.current = !0), g(0));
        },
        R = () => {
          ((y.style.opacity = "0"),
            d.current !== null && cancelAnimationFrame(d.current),
            window.setTimeout(() => {
              c.current &&
                ((c.current.currentTime = 0),
                c.current
                  .play()
                  .then(() => {
                    ((f.current = !1), g(1));
                  })
                  .catch(() => {}));
            }, 100));
        },
        _ = () => m(!0);
      return (
        y.addEventListener("canplay", x),
        y.addEventListener("timeupdate", P),
        y.addEventListener("ended", R),
        y.addEventListener("error", _),
        y.readyState >= 2 && x(),
        () => {
          (y.removeEventListener("canplay", x),
            y.removeEventListener("timeupdate", P),
            y.removeEventListener("ended", R),
            y.removeEventListener("error", _),
            d.current !== null && cancelAnimationFrame(d.current));
        }
      );
    }, [n, p]),
    p
      ? A.jsx("div", { className: `video-fallback ${i ?? ""}`, style: s, "aria-hidden": !0 })
      : A.jsx("video", {
          ref: c,
          src: n,
          className: `${a ? "translate-y-[17%]" : ""} ${i ?? ""}`,
          style: { opacity: 0, ...s },
          muted: !0,
          autoPlay: !0,
          playsInline: !0,
          preload: "auto",
        })
  );
}
function fw() {
  const [n, i] = H.useState(!1),
    s = (a) => {
      (a.preventDefault(), i(!0));
    };
  return A.jsxs("section", {
    id: "hero",
    className: "relative flex min-h-screen flex-col overflow-hidden bg-black",
    children: [
      A.jsx("div", {
        className: "absolute inset-0",
        children: A.jsx(cw, { src: X1, shiftY: !0, className: "h-full w-full object-cover" }),
      }),
      A.jsxs("div", {
        className: "relative z-10 flex min-h-screen flex-col",
        children: [
          A.jsx(dm, {}),
          A.jsxs("div", {
            className:
              "flex flex-1 flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]",
            children: [
              A.jsx("h1", {
                className:
                  "mb-8 whitespace-nowrap text-5xl tracking-tight text-white md:text-6xl lg:text-7xl",
                style: { fontFamily: hr },
                children: "Built for the curious",
              }),
              A.jsxs("div", {
                className: "w-full max-w-xl space-y-4",
                children: [
                  n
                    ? A.jsx("p", {
                        className:
                          "liquid-glass rounded-full px-6 py-4 text-sm font-medium text-white",
                        role: "status",
                        children: "You're on the list — we'll be in touch soon.",
                      })
                    : A.jsxs("form", {
                        className:
                          "liquid-glass flex items-center gap-3 rounded-full py-2 pl-6 pr-2",
                        onSubmit: s,
                        children: [
                          A.jsx("input", {
                            type: "email",
                            name: "email",
                            required: !0,
                            placeholder: "Enter your email",
                            className:
                              "min-w-0 flex-1 border-none bg-transparent text-base text-white placeholder:text-white/40 outline-none",
                          }),
                          A.jsx("button", {
                            type: "submit",
                            className:
                              "rounded-full bg-white p-3 text-black transition-transform hover:translate-x-0.5",
                            "aria-label": "Subscribe",
                            children: A.jsx(cm, { className: "h-5 w-5" }),
                          }),
                        ],
                      }),
                  A.jsx("p", {
                    className: "px-4 text-sm leading-relaxed text-white",
                    children:
                      "Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.",
                  }),
                  A.jsx("button", {
                    type: "button",
                    className:
                      "liquid-glass rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5",
                    onClick: () => Dh("manifesto"),
                    children: "Manifesto",
                  }),
                ],
              }),
            ],
          }),
          A.jsx("div", {
            className: "relative z-10 flex justify-center gap-4 pb-12",
            children: [
              { Icon: rw, label: "Instagram" },
              { Icon: iw, label: "Twitter" },
              { Icon: fm, label: "Website" },
            ].map(({ Icon: a, label: c }) =>
              A.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": c,
                  className:
                    "liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white",
                  children: A.jsx(a, { className: "h-5 w-5" }),
                },
                c,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function dw() {
  return A.jsxs("main", {
    children: [A.jsx(fw, {}), A.jsx(lm, {}), A.jsx(uw, {}), A.jsx(am, {}), A.jsx(hm, {})],
  });
}
function hw() {
  return A.jsxs(Ti, {
    title: "Manifesto",
    eyebrow: "Our belief",
    children: [
      A.jsx("p", {
        children:
          "We build for people who ask better questions—who treat curiosity as a discipline, not a distraction.",
      }),
      A.jsx("p", {
        children:
          "Asme exists to connect ideas, craft, and community. Every story we publish, every product we ship, and every collaboration we nurture starts with wonder and ends with clarity.",
      }),
      A.jsx("p", {
        children:
          "Join us to explore what happens when liquid-glass interfaces meet cinematic storytelling and research-grade insight.",
      }),
    ],
  });
}
const pw = [
  { name: "Explorer", price: "Free", detail: "Newsletter + community access", cta: "Start free" },
  {
    name: "Studio",
    price: "$24/mo",
    detail: "Workshops, archives, and member events",
    cta: "Join Studio",
  },
  {
    name: "Collective",
    price: "Custom",
    detail: "Brand partnerships and research sprints",
    cta: "Talk to us",
  },
];
function mw() {
  return A.jsxs(Ti, {
    title: "Pricing",
    eyebrow: "Plans",
    children: [
      A.jsx("p", {
        children: "Choose the level of access that fits how deeply you want to explore with Asme.",
      }),
      A.jsx("div", {
        className: "mt-10 grid gap-6 md:grid-cols-3",
        children: pw.map((n) =>
          A.jsxs(
            "div",
            {
              className: "liquid-glass rounded-3xl p-6 md:p-8",
              children: [
                A.jsx("p", {
                  className: "text-xs uppercase tracking-widest text-white/40",
                  children: n.name,
                }),
                A.jsx("p", {
                  className: "mt-3 text-3xl text-white",
                  style: { fontFamily: "'Instrument Serif', serif" },
                  children: n.price,
                }),
                A.jsx("p", { className: "mt-3 text-sm text-white/50", children: n.detail }),
                A.jsx("a", {
                  href: "#/contact",
                  className:
                    "mt-6 inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-85",
                  children: n.cta,
                }),
              ],
            },
            n.name,
          ),
        ),
      }),
    ],
  });
}
function gw() {
  return A.jsx("section", {
    className: "border-t border-white/10 px-6 py-16 md:py-20",
    children: A.jsxs("div", {
      className: "mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-white/50",
      children: [
        A.jsx("h2", {
          id: "privacy",
          className: "text-lg font-medium text-white",
          children: "Privacy",
        }),
        A.jsx("p", {
          children:
            "Asme collects only the information needed to deliver our newsletter and improve your experience. We do not sell personal data to third parties.",
        }),
        A.jsx("h2", {
          id: "terms",
          className: "text-lg font-medium text-white",
          children: "Terms",
        }),
        A.jsx("p", {
          children:
            "By using Asme you agree to receive product updates and accept our standard terms of service. You may unsubscribe at any time from any email we send.",
        }),
      ],
    }),
  });
}
function yw() {
  return A.jsxs(A.Fragment, {
    children: [A.jsx(Ti, { title: "Legal", eyebrow: "Policies" }), A.jsx(gw, {})],
  });
}
function vw() {
  return (
    H.useEffect(() => {
      Nh();
    }, []),
    A.jsx(Py, {
      routes: {
        "": A.jsx(dw, {}),
        features: A.jsx(aw, {}),
        pricing: A.jsx(mw, {}),
        about: A.jsx(J1, {}),
        manifesto: A.jsx(hw, {}),
        contact: A.jsx(ow, {}),
        privacy: A.jsx(yw, {}),
      },
    })
  );
}
vy.createRoot(document.getElementById("root")).render(
  A.jsx(H.StrictMode, { children: A.jsx(vw, {}) }),
);
