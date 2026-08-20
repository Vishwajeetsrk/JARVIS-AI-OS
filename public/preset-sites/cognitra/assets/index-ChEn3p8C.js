(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) a(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const f of d.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && a(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
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
    const d = o(c);
    fetch(c.href, d);
  }
})();
var Ql = { exports: {} },
  oi = {},
  Xl = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id;
function uy() {
  if (id) return oe;
  id = 1;
  var n = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function T(P) {
    return P === null || typeof P != "object"
      ? null
      : ((P = (w && P[w]) || P["@@iterator"]), typeof P == "function" ? P : null);
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
    j = {};
  function N(P, M, re) {
    ((this.props = P), (this.context = M), (this.refs = j), (this.updater = re || R));
  }
  ((N.prototype.isReactComponent = {}),
    (N.prototype.setState = function (P, M) {
      if (typeof P != "object" && typeof P != "function" && P != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, P, M, "setState");
    }),
    (N.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, "forceUpdate");
    }));
  function F() {}
  F.prototype = N.prototype;
  function W(P, M, re) {
    ((this.props = P), (this.context = M), (this.refs = j), (this.updater = re || R));
  }
  var K = (W.prototype = new F());
  ((K.constructor = W), _(K, N.prototype), (K.isPureReactComponent = !0));
  var te = Array.isArray,
    Q = Object.prototype.hasOwnProperty,
    ne = { current: null },
    ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(P, M, re) {
    var se,
      ue = {},
      ce = null,
      pe = null;
    if (M != null)
      for (se in (M.ref !== void 0 && (pe = M.ref), M.key !== void 0 && (ce = "" + M.key), M))
        Q.call(M, se) && !ae.hasOwnProperty(se) && (ue[se] = M[se]);
    var de = arguments.length - 2;
    if (de === 1) ue.children = re;
    else if (1 < de) {
      for (var xe = Array(de), st = 0; st < de; st++) xe[st] = arguments[st + 2];
      ue.children = xe;
    }
    if (P && P.defaultProps)
      for (se in ((de = P.defaultProps), de)) ue[se] === void 0 && (ue[se] = de[se]);
    return { $$typeof: n, type: P, key: ce, ref: pe, props: ue, _owner: ne.current };
  }
  function Te(P, M) {
    return { $$typeof: n, type: P.type, key: M, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function Ee(P) {
    return typeof P == "object" && P !== null && P.$$typeof === n;
  }
  function qe(P) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      P.replace(/[=:]/g, function (re) {
        return M[re];
      })
    );
  }
  var ot = /\/+/g;
  function Qe(P, M) {
    return typeof P == "object" && P !== null && P.key != null ? qe("" + P.key) : M.toString(36);
  }
  function Je(P, M, re, se, ue) {
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
        (P = se === "" ? "." + Qe(pe, 0) : se),
        te(ue)
          ? ((re = ""),
            P != null && (re = P.replace(ot, "$&/") + "/"),
            Je(ue, M, re, "", function (st) {
              return st;
            }))
          : ue != null &&
            (Ee(ue) &&
              (ue = Te(
                ue,
                re +
                  (!ue.key || (pe && pe.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(ot, "$&/") + "/") +
                  P,
              )),
            M.push(ue)),
        1
      );
    if (((pe = 0), (se = se === "" ? "." : se + ":"), te(P)))
      for (var de = 0; de < P.length; de++) {
        ce = P[de];
        var xe = se + Qe(ce, de);
        pe += Je(ce, M, re, xe, ue);
      }
    else if (((xe = T(P)), typeof xe == "function"))
      for (P = xe.call(P), de = 0; !(ce = P.next()).done;)
        ((ce = ce.value), (xe = se + Qe(ce, de++)), (pe += Je(ce, M, re, xe, ue)));
    else if (ce === "object")
      throw (
        (M = String(P)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : M) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return pe;
  }
  function St(P, M, re) {
    if (P == null) return P;
    var se = [],
      ue = 0;
    return (
      Je(P, se, "", "", function (ce) {
        return M.call(re, ce, ue++);
      }),
      se
    );
  }
  function Xe(P) {
    if (P._status === -1) {
      var M = P._result;
      ((M = M()),
        M.then(
          function (re) {
            (P._status === 0 || P._status === -1) && ((P._status = 1), (P._result = re));
          },
          function (re) {
            (P._status === 0 || P._status === -1) && ((P._status = 2), (P._result = re));
          },
        ),
        P._status === -1 && ((P._status = 0), (P._result = M)));
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var ie = { current: null },
    O = { transition: null },
    X = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: O, ReactCurrentOwner: ne };
  function B() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (oe.Children = {
      map: St,
      forEach: function (P, M, re) {
        St(
          P,
          function () {
            M.apply(this, arguments);
          },
          re,
        );
      },
      count: function (P) {
        var M = 0;
        return (
          St(P, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (P) {
        return (
          St(P, function (M) {
            return M;
          }) || []
        );
      },
      only: function (P) {
        if (!Ee(P))
          throw Error("React.Children.only expected to receive a single React element child.");
        return P;
      },
    }),
    (oe.Component = N),
    (oe.Fragment = o),
    (oe.Profiler = c),
    (oe.PureComponent = W),
    (oe.StrictMode = a),
    (oe.Suspense = m),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (oe.act = B),
    (oe.cloneElement = function (P, M, re) {
      if (P == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            P +
            ".",
        );
      var se = _({}, P.props),
        ue = P.key,
        ce = P.ref,
        pe = P._owner;
      if (M != null) {
        if (
          (M.ref !== void 0 && ((ce = M.ref), (pe = ne.current)),
          M.key !== void 0 && (ue = "" + M.key),
          P.type && P.type.defaultProps)
        )
          var de = P.type.defaultProps;
        for (xe in M)
          Q.call(M, xe) &&
            !ae.hasOwnProperty(xe) &&
            (se[xe] = M[xe] === void 0 && de !== void 0 ? de[xe] : M[xe]);
      }
      var xe = arguments.length - 2;
      if (xe === 1) se.children = re;
      else if (1 < xe) {
        de = Array(xe);
        for (var st = 0; st < xe; st++) de[st] = arguments[st + 2];
        se.children = de;
      }
      return { $$typeof: n, type: P.type, key: ue, ref: ce, props: se, _owner: pe };
    }),
    (oe.createContext = function (P) {
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
    (oe.createElement = J),
    (oe.createFactory = function (P) {
      var M = J.bind(null, P);
      return ((M.type = P), M);
    }),
    (oe.createRef = function () {
      return { current: null };
    }),
    (oe.forwardRef = function (P) {
      return { $$typeof: p, render: P };
    }),
    (oe.isValidElement = Ee),
    (oe.lazy = function (P) {
      return { $$typeof: v, _payload: { _status: -1, _result: P }, _init: Xe };
    }),
    (oe.memo = function (P, M) {
      return { $$typeof: g, type: P, compare: M === void 0 ? null : M };
    }),
    (oe.startTransition = function (P) {
      var M = O.transition;
      O.transition = {};
      try {
        P();
      } finally {
        O.transition = M;
      }
    }),
    (oe.unstable_act = B),
    (oe.useCallback = function (P, M) {
      return ie.current.useCallback(P, M);
    }),
    (oe.useContext = function (P) {
      return ie.current.useContext(P);
    }),
    (oe.useDebugValue = function () {}),
    (oe.useDeferredValue = function (P) {
      return ie.current.useDeferredValue(P);
    }),
    (oe.useEffect = function (P, M) {
      return ie.current.useEffect(P, M);
    }),
    (oe.useId = function () {
      return ie.current.useId();
    }),
    (oe.useImperativeHandle = function (P, M, re) {
      return ie.current.useImperativeHandle(P, M, re);
    }),
    (oe.useInsertionEffect = function (P, M) {
      return ie.current.useInsertionEffect(P, M);
    }),
    (oe.useLayoutEffect = function (P, M) {
      return ie.current.useLayoutEffect(P, M);
    }),
    (oe.useMemo = function (P, M) {
      return ie.current.useMemo(P, M);
    }),
    (oe.useReducer = function (P, M, re) {
      return ie.current.useReducer(P, M, re);
    }),
    (oe.useRef = function (P) {
      return ie.current.useRef(P);
    }),
    (oe.useState = function (P) {
      return ie.current.useState(P);
    }),
    (oe.useSyncExternalStore = function (P, M, re) {
      return ie.current.useSyncExternalStore(P, M, re);
    }),
    (oe.useTransition = function () {
      return ie.current.useTransition();
    }),
    (oe.version = "18.3.1"),
    oe
  );
}
var od;
function Ra() {
  return (od || ((od = 1), (Xl.exports = uy())), Xl.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sd;
function cy() {
  if (sd) return oi;
  sd = 1;
  var n = Ra(),
    i = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, g) {
    var v,
      w = {},
      T = null,
      R = null;
    (g !== void 0 && (T = "" + g),
      m.key !== void 0 && (T = "" + m.key),
      m.ref !== void 0 && (R = m.ref));
    for (v in m) a.call(m, v) && !d.hasOwnProperty(v) && (w[v] = m[v]);
    if (p && p.defaultProps) for (v in ((m = p.defaultProps), m)) w[v] === void 0 && (w[v] = m[v]);
    return { $$typeof: i, type: p, key: T, ref: R, props: w, _owner: c.current };
  }
  return ((oi.Fragment = o), (oi.jsx = f), (oi.jsxs = f), oi);
}
var ld;
function fy() {
  return (ld || ((ld = 1), (Ql.exports = cy())), Ql.exports);
}
var k = fy(),
  q = Ra(),
  _o = {},
  Yl = { exports: {} },
  it = {},
  Zl = { exports: {} },
  ql = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad;
function dy() {
  return (
    ad ||
      ((ad = 1),
      (function (n) {
        function i(O, X) {
          var B = O.length;
          O.push(X);
          e: for (; 0 < B;) {
            var P = (B - 1) >>> 1,
              M = O[P];
            if (0 < c(M, X)) ((O[P] = X), (O[B] = M), (B = P));
            else break e;
          }
        }
        function o(O) {
          return O.length === 0 ? null : O[0];
        }
        function a(O) {
          if (O.length === 0) return null;
          var X = O[0],
            B = O.pop();
          if (B !== X) {
            O[0] = B;
            e: for (var P = 0, M = O.length, re = M >>> 1; P < re;) {
              var se = 2 * (P + 1) - 1,
                ue = O[se],
                ce = se + 1,
                pe = O[ce];
              if (0 > c(ue, B))
                ce < M && 0 > c(pe, ue)
                  ? ((O[P] = pe), (O[ce] = B), (P = ce))
                  : ((O[P] = ue), (O[se] = B), (P = se));
              else if (ce < M && 0 > c(pe, B)) ((O[P] = pe), (O[ce] = B), (P = ce));
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
          v = 1,
          w = null,
          T = 3,
          R = !1,
          _ = !1,
          j = !1,
          N = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function K(O) {
          for (var X = o(g); X !== null;) {
            if (X.callback === null) a(g);
            else if (X.startTime <= O) (a(g), (X.sortIndex = X.expirationTime), i(m, X));
            else break;
            X = o(g);
          }
        }
        function te(O) {
          if (((j = !1), K(O), !_))
            if (o(m) !== null) ((_ = !0), Xe(Q));
            else {
              var X = o(g);
              X !== null && ie(te, X.startTime - O);
            }
        }
        function Q(O, X) {
          ((_ = !1), j && ((j = !1), F(J), (J = -1)), (R = !0));
          var B = T;
          try {
            for (K(X), w = o(m); w !== null && (!(w.expirationTime > X) || (O && !qe()));) {
              var P = w.callback;
              if (typeof P == "function") {
                ((w.callback = null), (T = w.priorityLevel));
                var M = P(w.expirationTime <= X);
                ((X = n.unstable_now()),
                  typeof M == "function" ? (w.callback = M) : w === o(m) && a(m),
                  K(X));
              } else a(m);
              w = o(m);
            }
            if (w !== null) var re = !0;
            else {
              var se = o(g);
              (se !== null && ie(te, se.startTime - X), (re = !1));
            }
            return re;
          } finally {
            ((w = null), (T = B), (R = !1));
          }
        }
        var ne = !1,
          ae = null,
          J = -1,
          Te = 5,
          Ee = -1;
        function qe() {
          return !(n.unstable_now() - Ee < Te);
        }
        function ot() {
          if (ae !== null) {
            var O = n.unstable_now();
            Ee = O;
            var X = !0;
            try {
              X = ae(!0, O);
            } finally {
              X ? Qe() : ((ne = !1), (ae = null));
            }
          } else ne = !1;
        }
        var Qe;
        if (typeof W == "function")
          Qe = function () {
            W(ot);
          };
        else if (typeof MessageChannel < "u") {
          var Je = new MessageChannel(),
            St = Je.port2;
          ((Je.port1.onmessage = ot),
            (Qe = function () {
              St.postMessage(null);
            }));
        } else
          Qe = function () {
            N(ot, 0);
          };
        function Xe(O) {
          ((ae = O), ne || ((ne = !0), Qe()));
        }
        function ie(O, X) {
          J = N(function () {
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
            _ || R || ((_ = !0), Xe(Q));
          }),
          (n.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Te = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return o(m);
          }),
          (n.unstable_next = function (O) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = T;
            }
            var B = T;
            T = X;
            try {
              return O();
            } finally {
              T = B;
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
            var B = T;
            T = O;
            try {
              return X();
            } finally {
              T = B;
            }
          }),
          (n.unstable_scheduleCallback = function (O, X, B) {
            var P = n.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? P + B : P))
                : (B = P),
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
                id: v++,
                callback: X,
                priorityLevel: O,
                startTime: B,
                expirationTime: M,
                sortIndex: -1,
              }),
              B > P
                ? ((O.sortIndex = B),
                  i(g, O),
                  o(m) === null && O === o(g) && (j ? (F(J), (J = -1)) : (j = !0), ie(te, B - P)))
                : ((O.sortIndex = M), i(m, O), _ || R || ((_ = !0), Xe(Q))),
              O
            );
          }),
          (n.unstable_shouldYield = qe),
          (n.unstable_wrapCallback = function (O) {
            var X = T;
            return function () {
              var B = T;
              T = X;
              try {
                return O.apply(this, arguments);
              } finally {
                T = B;
              }
            };
          }));
      })(ql)),
    ql
  );
}
var ud;
function hy() {
  return (ud || ((ud = 1), (Zl.exports = dy())), Zl.exports);
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
function py() {
  if (cd) return it;
  cd = 1;
  var n = Ra(),
    i = hy();
  function o(e) {
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
    v = {},
    w = {};
  function T(e) {
    return m.call(w, e) ? !0 : m.call(v, e) ? !1 : g.test(e) ? (w[e] = !0) : ((v[e] = !0), !1);
  }
  function R(e, t, r, s) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s
          ? !1
          : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function _(e, t, r, s) {
    if (t === null || typeof t > "u" || R(e, t, r, s)) return !0;
    if (s) return !1;
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
  function j(e, t, r, s, l, u, h) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = s),
      (this.attributeNamespace = l),
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
      N[e] = new j(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      N[t] = new j(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      N[e] = new j(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        N[e] = new j(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        N[e] = new j(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      N[e] = new j(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      N[e] = new j(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      N[e] = new j(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      N[e] = new j(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var F = /[\-:]([a-z])/g;
  function W(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(F, W);
      N[t] = new j(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(F, W);
        N[t] = new j(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(F, W);
      N[t] = new j(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      N[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (N.xlinkHref = new j("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      N[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function K(e, t, r, s) {
    var l = N.hasOwnProperty(t) ? N[t] : null;
    (l !== null
      ? l.type !== 0
      : s || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (_(t, r, l, s) && (r = null),
      s || l === null
        ? T(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : l.mustUseProperty
          ? (e[l.propertyName] = r === null ? (l.type === 3 ? !1 : "") : r)
          : ((t = l.attributeName),
            (s = l.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (r = l === 3 || (l === 4 && r === !0) ? "" : "" + r),
                s ? e.setAttributeNS(s, t, r) : e.setAttribute(t, r))));
  }
  var te = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Q = Symbol.for("react.element"),
    ne = Symbol.for("react.portal"),
    ae = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    Te = Symbol.for("react.profiler"),
    Ee = Symbol.for("react.provider"),
    qe = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    Qe = Symbol.for("react.suspense"),
    Je = Symbol.for("react.suspense_list"),
    St = Symbol.for("react.memo"),
    Xe = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    O = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (O && e[O]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var B = Object.assign,
    P;
  function M(e) {
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
  function se(e, t) {
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
          } catch (A) {
            var s = A;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (A) {
            s = A;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (A) {
          s = A;
        }
        e();
      }
    } catch (A) {
      if (A && s && typeof A.stack == "string") {
        for (
          var l = A.stack.split(`
`),
            u = s.stack.split(`
`),
            h = l.length - 1,
            y = u.length - 1;
          1 <= h && 0 <= y && l[h] !== u[y];
        )
          y--;
        for (; 1 <= h && 0 <= y; h--, y--)
          if (l[h] !== u[y]) {
            if (h !== 1 || y !== 1)
              do
                if ((h--, y--, 0 > y || l[h] !== u[y])) {
                  var x =
                    `
` + l[h].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      x.includes("<anonymous>") &&
                      (x = x.replace("<anonymous>", e.displayName)),
                    x
                  );
                }
              while (1 <= h && 0 <= y);
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
        return ((e = se(e.type, !1)), e);
      case 11:
        return ((e = se(e.type.render, !1)), e);
      case 1:
        return ((e = se(e.type, !0)), e);
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
      case Te:
        return "Profiler";
      case J:
        return "StrictMode";
      case Qe:
        return "Suspense";
      case Je:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case qe:
          return (e.displayName || "Context") + ".Consumer";
        case Ee:
          return (e._context.displayName || "Context") + ".Provider";
        case ot:
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
        case Xe:
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
      s = "" + e[t];
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
            ((s = "" + h), u.call(this, h));
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (h) {
            s = "" + h;
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
  function uu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      s = "";
    return (
      e && (s = xe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = s),
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
  function es(e, t) {
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
      s = t.checked != null ? t.checked : t.defaultChecked;
    ((r = de(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: s,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function fu(e, t) {
    ((t = t.checked), t != null && K(e, "checked", t, !1));
  }
  function ts(e, t) {
    fu(e, t);
    var r = de(t.value),
      s = t.type;
    if (r != null)
      s === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? ns(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && ns(e, t.type, de(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function du(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!((s !== "submit" && s !== "reset") || (t.value !== void 0 && t.value !== null))) return;
      ((t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r));
  }
  function ns(e, t, r) {
    (t !== "number" || ki(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var wr = Array.isArray;
  function Fn(e, t, r, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
      for (r = 0; r < e.length; r++)
        ((l = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== l && (e[r].selected = l),
          l && s && (e[r].defaultSelected = !0));
    } else {
      for (r = "" + de(r), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === r) {
          ((e[l].selected = !0), s && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function rs(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
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
        if (t != null) throw Error(o(92));
        if (wr(r)) {
          if (1 < r.length) throw Error(o(93));
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
      s = de(t.defaultValue);
    (r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      s != null && (e.defaultValue = "" + s));
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
  function is(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? gu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ci,
    yu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, s, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, s, l);
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
    hm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Tr).forEach(function (e) {
    hm.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]));
    });
  });
  function vu(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function xu(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var s = r.indexOf("--") === 0,
          l = vu(r, t[r], s);
        (r === "float" && (r = "cssFloat"), s ? e.setProperty(r, l) : (e[r] = l));
      }
  }
  var pm = B(
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
  function os(e, t) {
    if (t) {
      if (pm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function ss(e, t) {
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
  var ls = null;
  function as(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var us = null,
    zn = null,
    Bn = null;
  function wu(e) {
    if ((e = $r(e))) {
      if (typeof us != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = Xi(t)), us(e.stateNode, e.type, t));
    }
  }
  function Su(e) {
    zn ? (Bn ? Bn.push(e) : (Bn = [e])) : (zn = e);
  }
  function Tu() {
    if (zn) {
      var e = zn,
        t = Bn;
      if (((Bn = zn = null), wu(e), t)) for (e = 0; e < t.length; e++) wu(t[e]);
    }
  }
  function Pu(e, t) {
    return e(t);
  }
  function ku() {}
  var cs = !1;
  function Cu(e, t, r) {
    if (cs) return e(t, r);
    cs = !0;
    try {
      return Pu(e, t, r);
    } finally {
      ((cs = !1), (zn !== null || Bn !== null) && (ku(), Tu()));
    }
  }
  function Pr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var s = Xi(r);
    if (s === null) return null;
    r = s[t];
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
    if (r && typeof r != "function") throw Error(o(231, t, typeof r));
    return r;
  }
  var fs = !1;
  if (p)
    try {
      var kr = {};
      (Object.defineProperty(kr, "passive", {
        get: function () {
          fs = !0;
        },
      }),
        window.addEventListener("test", kr, kr),
        window.removeEventListener("test", kr, kr));
    } catch {
      fs = !1;
    }
  function mm(e, t, r, s, l, u, h, y, x) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, A);
    } catch (L) {
      this.onError(L);
    }
  }
  var Cr = !1,
    Ei = null,
    Ai = !1,
    ds = null,
    gm = {
      onError: function (e) {
        ((Cr = !0), (Ei = e));
      },
    };
  function ym(e, t, r, s, l, u, h, y, x) {
    ((Cr = !1), (Ei = null), mm.apply(gm, arguments));
  }
  function vm(e, t, r, s, l, u, h, y, x) {
    if ((ym.apply(this, arguments), Cr)) {
      if (Cr) {
        var A = Ei;
        ((Cr = !1), (Ei = null));
      } else throw Error(o(198));
      Ai || ((Ai = !0), (ds = A));
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
  function Eu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Au(e) {
    if (xn(e) !== e) throw Error(o(188));
  }
  function xm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = xn(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var r = e, s = t; ;) {
      var l = r.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((s = l.return), s !== null)) {
          r = s;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u;) {
          if (u === r) return (Au(l), e);
          if (u === s) return (Au(l), t);
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== s.return) ((r = l), (s = u));
      else {
        for (var h = !1, y = l.child; y;) {
          if (y === r) {
            ((h = !0), (r = l), (s = u));
            break;
          }
          if (y === s) {
            ((h = !0), (s = l), (r = u));
            break;
          }
          y = y.sibling;
        }
        if (!h) {
          for (y = u.child; y;) {
            if (y === r) {
              ((h = !0), (r = u), (s = l));
              break;
            }
            if (y === s) {
              ((h = !0), (s = u), (r = l));
              break;
            }
            y = y.sibling;
          }
          if (!h) throw Error(o(189));
        }
      }
      if (r.alternate !== s) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : t;
  }
  function Ru(e) {
    return ((e = xm(e)), e !== null ? Du(e) : null);
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
  var ju = i.unstable_scheduleCallback,
    Mu = i.unstable_cancelCallback,
    wm = i.unstable_shouldYield,
    Sm = i.unstable_requestPaint,
    De = i.unstable_now,
    Tm = i.unstable_getCurrentPriorityLevel,
    hs = i.unstable_ImmediatePriority,
    Lu = i.unstable_UserBlockingPriority,
    Ri = i.unstable_NormalPriority,
    Pm = i.unstable_LowPriority,
    Vu = i.unstable_IdlePriority,
    Di = null,
    jt = null;
  function km(e) {
    if (jt && typeof jt.onCommitFiberRoot == "function")
      try {
        jt.onCommitFiberRoot(Di, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Tt = Math.clz32 ? Math.clz32 : Am,
    Cm = Math.log,
    Em = Math.LN2;
  function Am(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Cm(e) / Em) | 0)) | 0);
  }
  var ji = 64,
    Mi = 4194304;
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
  function Li(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      h = r & 268435455;
    if (h !== 0) {
      var y = h & ~l;
      y !== 0 ? (s = Er(y)) : ((u &= h), u !== 0 && (s = Er(u)));
    } else ((h = r & ~l), h !== 0 ? (s = Er(h)) : u !== 0 && (s = Er(u)));
    if (s === 0) return 0;
    if (
      t !== 0 &&
      t !== s &&
      (t & l) === 0 &&
      ((l = s & -s), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return t;
    if (((s & 4) !== 0 && (s |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= s; 0 < t;)
        ((r = 31 - Tt(t)), (l = 1 << r), (s |= e[r]), (t &= ~l));
    return s;
  }
  function Rm(e, t) {
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
      var r = e.suspendedLanes, s = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var h = 31 - Tt(u),
        y = 1 << h,
        x = l[h];
      (x === -1
        ? ((y & r) === 0 || (y & s) !== 0) && (l[h] = Rm(y, t))
        : x <= t && (e.expiredLanes |= y),
        (u &= ~y));
    }
  }
  function ps(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function _u() {
    var e = ji;
    return ((ji <<= 1), (ji & 4194240) === 0 && (ji = 64), e);
  }
  function ms(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Ar(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Tt(t)),
      (e[t] = r));
  }
  function jm(e, t) {
    var r = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < r;) {
      var l = 31 - Tt(r),
        u = 1 << l;
      ((t[l] = 0), (s[l] = -1), (e[l] = -1), (r &= ~u));
    }
  }
  function gs(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r;) {
      var s = 31 - Tt(r),
        l = 1 << s;
      ((l & t) | (e[s] & t) && (e[s] |= t), (r &= ~l));
    }
  }
  var he = 0;
  function Nu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Iu,
    ys,
    Ou,
    Fu,
    zu,
    vs = !1,
    Vi = [],
    Yt = null,
    Zt = null,
    qt = null,
    Rr = new Map(),
    Dr = new Map(),
    Jt = [],
    Mm =
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
        Zt = null;
        break;
      case "mouseover":
      case "mouseout":
        qt = null;
        break;
      case "pointerover":
      case "pointerout":
        Rr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dr.delete(t.pointerId);
    }
  }
  function jr(e, t, r, s, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: s,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = $r(t)), t !== null && ys(t)),
        e)
      : ((e.eventSystemFlags |= s),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Lm(e, t, r, s, l) {
    switch (t) {
      case "focusin":
        return ((Yt = jr(Yt, e, t, r, s, l)), !0);
      case "dragenter":
        return ((Zt = jr(Zt, e, t, r, s, l)), !0);
      case "mouseover":
        return ((qt = jr(qt, e, t, r, s, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (Rr.set(u, jr(Rr.get(u) || null, e, t, r, s, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), Dr.set(u, jr(Dr.get(u) || null, e, t, r, s, l)), !0);
    }
    return !1;
  }
  function Uu(e) {
    var t = wn(e.target);
    if (t !== null) {
      var r = xn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Eu(r)), t !== null)) {
            ((e.blockedOn = t),
              zu(e.priority, function () {
                Ou(r);
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
      var r = ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var s = new r.constructor(r.type, r);
        ((ls = s), r.target.dispatchEvent(s), (ls = null));
      } else return ((t = $r(r)), t !== null && ys(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Wu(e, t, r) {
    _i(e) && r.delete(t);
  }
  function Vm() {
    ((vs = !1),
      Yt !== null && _i(Yt) && (Yt = null),
      Zt !== null && _i(Zt) && (Zt = null),
      qt !== null && _i(qt) && (qt = null),
      Rr.forEach(Wu),
      Dr.forEach(Wu));
  }
  function Mr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      vs || ((vs = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Vm)));
  }
  function Lr(e) {
    function t(l) {
      return Mr(l, e);
    }
    if (0 < Vi.length) {
      Mr(Vi[0], e);
      for (var r = 1; r < Vi.length; r++) {
        var s = Vi[r];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (
      Yt !== null && Mr(Yt, e),
        Zt !== null && Mr(Zt, e),
        qt !== null && Mr(qt, e),
        Rr.forEach(t),
        Dr.forEach(t),
        r = 0;
      r < Jt.length;
      r++
    )
      ((s = Jt[r]), s.blockedOn === e && (s.blockedOn = null));
    for (; 0 < Jt.length && ((r = Jt[0]), r.blockedOn === null);)
      (Uu(r), r.blockedOn === null && Jt.shift());
  }
  var Un = te.ReactCurrentBatchConfig,
    Ni = !0;
  function _m(e, t, r, s) {
    var l = he,
      u = Un.transition;
    Un.transition = null;
    try {
      ((he = 1), xs(e, t, r, s));
    } finally {
      ((he = l), (Un.transition = u));
    }
  }
  function Nm(e, t, r, s) {
    var l = he,
      u = Un.transition;
    Un.transition = null;
    try {
      ((he = 4), xs(e, t, r, s));
    } finally {
      ((he = l), (Un.transition = u));
    }
  }
  function xs(e, t, r, s) {
    if (Ni) {
      var l = ws(e, t, r, s);
      if (l === null) (Os(e, t, s, Ii, r), Bu(e, s));
      else if (Lm(l, e, t, r, s)) s.stopPropagation();
      else if ((Bu(e, s), t & 4 && -1 < Mm.indexOf(e))) {
        for (; l !== null;) {
          var u = $r(l);
          if (
            (u !== null && Iu(u), (u = ws(e, t, r, s)), u === null && Os(e, t, s, Ii, r), u === l)
          )
            break;
          l = u;
        }
        l !== null && s.stopPropagation();
      } else Os(e, t, s, null, r);
    }
  }
  var Ii = null;
  function ws(e, t, r, s) {
    if (((Ii = null), (e = as(s)), (e = wn(e)), e !== null))
      if (((t = xn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Eu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Ii = e), null);
  }
  function Hu(e) {
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
        switch (Tm()) {
          case hs:
            return 1;
          case Lu:
            return 4;
          case Ri:
          case Pm:
            return 16;
          case Vu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var bt = null,
    Ss = null,
    Oi = null;
  function $u() {
    if (Oi) return Oi;
    var e,
      t = Ss,
      r = t.length,
      s,
      l = "value" in bt ? bt.value : bt.textContent,
      u = l.length;
    for (e = 0; e < r && t[e] === l[e]; e++);
    var h = r - e;
    for (s = 1; s <= h && t[r - s] === l[u - s]; s++);
    return (Oi = l.slice(e, 1 < s ? 1 - s : void 0));
  }
  function Fi(e) {
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
  function Ku() {
    return !1;
  }
  function lt(e) {
    function t(r, s, l, u, h) {
      ((this._reactName = r),
        (this._targetInst = l),
        (this.type = s),
        (this.nativeEvent = u),
        (this.target = h),
        (this.currentTarget = null));
      for (var y in e) e.hasOwnProperty(y) && ((r = e[y]), (this[y] = r ? r(u) : u[y]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? zi
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
  var Wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ts = lt(Wn),
    Vr = B({}, Wn, { view: 0, detail: 0 }),
    Im = lt(Vr),
    Ps,
    ks,
    _r,
    Bi = B({}, Vr, {
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
      getModifierState: Es,
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
                ? ((Ps = e.screenX - _r.screenX), (ks = e.screenY - _r.screenY))
                : (ks = Ps = 0),
              (_r = e)),
            Ps);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ks;
      },
    }),
    Gu = lt(Bi),
    Om = B({}, Bi, { dataTransfer: 0 }),
    Fm = lt(Om),
    zm = B({}, Vr, { relatedTarget: 0 }),
    Cs = lt(zm),
    Bm = B({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Um = lt(Bm),
    Wm = B({}, Wn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Hm = lt(Wm),
    $m = B({}, Wn, { data: 0 }),
    Qu = lt($m),
    Km = {
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
    Gm = {
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
    Qm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Xm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qm[e]) ? !!t[e] : !1;
  }
  function Es() {
    return Xm;
  }
  var Ym = B({}, Vr, {
      key: function (e) {
        if (e.key) {
          var t = Km[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Gm[e.keyCode] || "Unidentified"
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
      getModifierState: Es,
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
    Zm = lt(Ym),
    qm = B({}, Bi, {
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
    Xu = lt(qm),
    Jm = B({}, Vr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Es,
    }),
    bm = lt(Jm),
    eg = B({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tg = lt(eg),
    ng = B({}, Bi, {
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
    rg = lt(ng),
    ig = [9, 13, 27, 32],
    As = p && "CompositionEvent" in window,
    Nr = null;
  p && "documentMode" in document && (Nr = document.documentMode);
  var og = p && "TextEvent" in window && !Nr,
    Yu = p && (!As || (Nr && 8 < Nr && 11 >= Nr)),
    Zu = " ",
    qu = !1;
  function Ju(e, t) {
    switch (e) {
      case "keyup":
        return ig.indexOf(t.keyCode) !== -1;
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
  var Hn = !1;
  function sg(e, t) {
    switch (e) {
      case "compositionend":
        return bu(t);
      case "keypress":
        return t.which !== 32 ? null : ((qu = !0), Zu);
      case "textInput":
        return ((e = t.data), e === Zu && qu ? null : e);
      default:
        return null;
    }
  }
  function lg(e, t) {
    if (Hn)
      return e === "compositionend" || (!As && Ju(e, t))
        ? ((e = $u()), (Oi = Ss = bt = null), (Hn = !1), e)
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
        return Yu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ag = {
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
    return t === "input" ? !!ag[e.type] : t === "textarea";
  }
  function tc(e, t, r, s) {
    (Su(s),
      (t = Ki(t, "onChange")),
      0 < t.length &&
        ((r = new Ts("onChange", "change", null, r, s)), e.push({ event: r, listeners: t })));
  }
  var Ir = null,
    Or = null;
  function ug(e) {
    xc(e, 0);
  }
  function Ui(e) {
    var t = Xn(e);
    if (uu(t)) return e;
  }
  function cg(e, t) {
    if (e === "change") return t;
  }
  var nc = !1;
  if (p) {
    var Rs;
    if (p) {
      var Ds = "oninput" in document;
      if (!Ds) {
        var rc = document.createElement("div");
        (rc.setAttribute("oninput", "return;"), (Ds = typeof rc.oninput == "function"));
      }
      Rs = Ds;
    } else Rs = !1;
    nc = Rs && (!document.documentMode || 9 < document.documentMode);
  }
  function ic() {
    Ir && (Ir.detachEvent("onpropertychange", oc), (Or = Ir = null));
  }
  function oc(e) {
    if (e.propertyName === "value" && Ui(Or)) {
      var t = [];
      (tc(t, Or, e, as(e)), Cu(ug, t));
    }
  }
  function fg(e, t, r) {
    e === "focusin"
      ? (ic(), (Ir = t), (Or = r), Ir.attachEvent("onpropertychange", oc))
      : e === "focusout" && ic();
  }
  function dg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ui(Or);
  }
  function hg(e, t) {
    if (e === "click") return Ui(t);
  }
  function pg(e, t) {
    if (e === "input" || e === "change") return Ui(t);
  }
  function mg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Pt = typeof Object.is == "function" ? Object.is : mg;
  function Fr(e, t) {
    if (Pt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e),
      s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (s = 0; s < r.length; s++) {
      var l = r[s];
      if (!m.call(t, l) || !Pt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function sc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function lc(e, t) {
    var r = sc(e);
    e = 0;
    for (var s; r;) {
      if (r.nodeType === 3) {
        if (((s = e + r.textContent.length), e <= t && s >= t)) return { node: r, offset: t - e };
        e = s;
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
      r = sc(r);
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
  function js(e) {
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
  function gg(e) {
    var t = uc(),
      r = e.focusedElem,
      s = e.selectionRange;
    if (t !== r && r && r.ownerDocument && ac(r.ownerDocument.documentElement, r)) {
      if (s !== null && js(r)) {
        if (((t = s.start), (e = s.end), e === void 0 && (e = t), "selectionStart" in r))
          ((r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length)));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var l = r.textContent.length,
            u = Math.min(s.start, l);
          ((s = s.end === void 0 ? u : Math.min(s.end, l)),
            !e.extend && u > s && ((l = s), (s = u), (u = l)),
            (l = lc(r, u)));
          var h = lc(r, s);
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
            u > s
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
  var yg = p && "documentMode" in document && 11 >= document.documentMode,
    $n = null,
    Ms = null,
    zr = null,
    Ls = !1;
  function cc(e, t, r) {
    var s = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Ls ||
      $n == null ||
      $n !== ki(s) ||
      ((s = $n),
      "selectionStart" in s && js(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = ((s.ownerDocument && s.ownerDocument.defaultView) || window).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (zr && Fr(zr, s)) ||
        ((zr = s),
        (s = Ki(Ms, "onSelect")),
        0 < s.length &&
          ((t = new Ts("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: s }),
          (t.target = $n))));
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
  var Kn = {
      animationend: Wi("Animation", "AnimationEnd"),
      animationiteration: Wi("Animation", "AnimationIteration"),
      animationstart: Wi("Animation", "AnimationStart"),
      transitionend: Wi("Transition", "TransitionEnd"),
    },
    Vs = {},
    fc = {};
  p &&
    ((fc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Kn.animationend.animation,
      delete Kn.animationiteration.animation,
      delete Kn.animationstart.animation),
    "TransitionEvent" in window || delete Kn.transitionend.transition);
  function Hi(e) {
    if (Vs[e]) return Vs[e];
    if (!Kn[e]) return e;
    var t = Kn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in fc) return (Vs[e] = t[r]);
    return e;
  }
  var dc = Hi("animationend"),
    hc = Hi("animationiteration"),
    pc = Hi("animationstart"),
    mc = Hi("transitionend"),
    gc = new Map(),
    yc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function en(e, t) {
    (gc.set(e, t), d(t, [e]));
  }
  for (var _s = 0; _s < yc.length; _s++) {
    var Ns = yc[_s],
      vg = Ns.toLowerCase(),
      xg = Ns[0].toUpperCase() + Ns.slice(1);
    en(vg, "on" + xg);
  }
  (en(dc, "onAnimationEnd"),
    en(hc, "onAnimationIteration"),
    en(pc, "onAnimationStart"),
    en("dblclick", "onDoubleClick"),
    en("focusin", "onFocus"),
    en("focusout", "onBlur"),
    en(mc, "onTransitionEnd"),
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
    wg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));
  function vc(e, t, r) {
    var s = e.type || "unknown-event";
    ((e.currentTarget = r), vm(s, t, void 0, e), (e.currentTarget = null));
  }
  function xc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var s = e[r],
        l = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var h = s.length - 1; 0 <= h; h--) {
            var y = s[h],
              x = y.instance,
              A = y.currentTarget;
            if (((y = y.listener), x !== u && l.isPropagationStopped())) break e;
            (vc(l, y, A), (u = x));
          }
        else
          for (h = 0; h < s.length; h++) {
            if (
              ((y = s[h]),
              (x = y.instance),
              (A = y.currentTarget),
              (y = y.listener),
              x !== u && l.isPropagationStopped())
            )
              break e;
            (vc(l, y, A), (u = x));
          }
      }
    }
    if (Ai) throw ((e = ds), (Ai = !1), (ds = null), e);
  }
  function ge(e, t) {
    var r = t[Hs];
    r === void 0 && (r = t[Hs] = new Set());
    var s = e + "__bubble";
    r.has(s) || (wc(t, e, 2, !1), r.add(s));
  }
  function Is(e, t, r) {
    var s = 0;
    (t && (s |= 4), wc(r, e, s, t));
  }
  var $i = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[$i]) {
      ((e[$i] = !0),
        a.forEach(function (r) {
          r !== "selectionchange" && (wg.has(r) || Is(r, !1, e), Is(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$i] || ((t[$i] = !0), Is("selectionchange", !1, t));
    }
  }
  function wc(e, t, r, s) {
    switch (Hu(t)) {
      case 1:
        var l = _m;
        break;
      case 4:
        l = Nm;
        break;
      default:
        l = xs;
    }
    ((r = l.bind(null, t, r, e)),
      (l = void 0),
      !fs || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      s
        ? l !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: l })
          : e.addEventListener(t, r, !0)
        : l !== void 0
          ? e.addEventListener(t, r, { passive: l })
          : e.addEventListener(t, r, !1));
  }
  function Os(e, t, r, s, l) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (;;) {
        if (s === null) return;
        var h = s.tag;
        if (h === 3 || h === 4) {
          var y = s.stateNode.containerInfo;
          if (y === l || (y.nodeType === 8 && y.parentNode === l)) break;
          if (h === 4)
            for (h = s.return; h !== null;) {
              var x = h.tag;
              if (
                (x === 3 || x === 4) &&
                ((x = h.stateNode.containerInfo),
                x === l || (x.nodeType === 8 && x.parentNode === l))
              )
                return;
              h = h.return;
            }
          for (; y !== null;) {
            if (((h = wn(y)), h === null)) return;
            if (((x = h.tag), x === 5 || x === 6)) {
              s = u = h;
              continue e;
            }
            y = y.parentNode;
          }
        }
        s = s.return;
      }
    Cu(function () {
      var A = u,
        L = as(r),
        V = [];
      e: {
        var D = gc.get(e);
        if (D !== void 0) {
          var z = Ts,
            H = e;
          switch (e) {
            case "keypress":
              if (Fi(r) === 0) break e;
            case "keydown":
            case "keyup":
              z = Zm;
              break;
            case "focusin":
              ((H = "focus"), (z = Cs));
              break;
            case "focusout":
              ((H = "blur"), (z = Cs));
              break;
            case "beforeblur":
            case "afterblur":
              z = Cs;
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
              z = Fm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = bm;
              break;
            case dc:
            case hc:
            case pc:
              z = Um;
              break;
            case mc:
              z = tg;
              break;
            case "scroll":
              z = Im;
              break;
            case "wheel":
              z = rg;
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
              z = Xu;
          }
          var $ = (t & 4) !== 0,
            je = !$ && e === "scroll",
            C = $ ? (D !== null ? D + "Capture" : null) : D;
          $ = [];
          for (var S = A, E; S !== null;) {
            E = S;
            var I = E.stateNode;
            if (
              (E.tag === 5 &&
                I !== null &&
                ((E = I), C !== null && ((I = Pr(S, C)), I != null && $.push(Wr(S, I, E)))),
              je)
            )
              break;
            S = S.return;
          }
          0 < $.length && ((D = new z(D, H, null, r, L)), V.push({ event: D, listeners: $ }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((D = e === "mouseover" || e === "pointerover"),
            (z = e === "mouseout" || e === "pointerout"),
            D && r !== ls && (H = r.relatedTarget || r.fromElement) && (wn(H) || H[Ot]))
          )
            break e;
          if (
            (z || D) &&
            ((D =
              L.window === L
                ? L
                : (D = L.ownerDocument)
                  ? D.defaultView || D.parentWindow
                  : window),
            z
              ? ((H = r.relatedTarget || r.toElement),
                (z = A),
                (H = H ? wn(H) : null),
                H !== null &&
                  ((je = xn(H)), H !== je || (H.tag !== 5 && H.tag !== 6)) &&
                  (H = null))
              : ((z = null), (H = A)),
            z !== H)
          ) {
            if (
              (($ = Gu),
              (I = "onMouseLeave"),
              (C = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                (($ = Xu), (I = "onPointerLeave"), (C = "onPointerEnter"), (S = "pointer")),
              (je = z == null ? D : Xn(z)),
              (E = H == null ? D : Xn(H)),
              (D = new $(I, S + "leave", z, r, L)),
              (D.target = je),
              (D.relatedTarget = E),
              (I = null),
              wn(L) === A &&
                (($ = new $(C, S + "enter", H, r, L)),
                ($.target = E),
                ($.relatedTarget = je),
                (I = $)),
              (je = I),
              z && H)
            )
              t: {
                for ($ = z, C = H, S = 0, E = $; E; E = Gn(E)) S++;
                for (E = 0, I = C; I; I = Gn(I)) E++;
                for (; 0 < S - E;) (($ = Gn($)), S--);
                for (; 0 < E - S;) ((C = Gn(C)), E--);
                for (; S--;) {
                  if ($ === C || (C !== null && $ === C.alternate)) break t;
                  (($ = Gn($)), (C = Gn(C)));
                }
                $ = null;
              }
            else $ = null;
            (z !== null && Sc(V, D, z, $, !1), H !== null && je !== null && Sc(V, je, H, $, !0));
          }
        }
        e: {
          if (
            ((D = A ? Xn(A) : window),
            (z = D.nodeName && D.nodeName.toLowerCase()),
            z === "select" || (z === "input" && D.type === "file"))
          )
            var G = cg;
          else if (ec(D))
            if (nc) G = pg;
            else {
              G = dg;
              var Y = fg;
            }
          else
            (z = D.nodeName) &&
              z.toLowerCase() === "input" &&
              (D.type === "checkbox" || D.type === "radio") &&
              (G = hg);
          if (G && (G = G(e, A))) {
            tc(V, G, r, L);
            break e;
          }
          (Y && Y(e, D, A),
            e === "focusout" &&
              (Y = D._wrapperState) &&
              Y.controlled &&
              D.type === "number" &&
              ns(D, "number", D.value));
        }
        switch (((Y = A ? Xn(A) : window), e)) {
          case "focusin":
            (ec(Y) || Y.contentEditable === "true") && (($n = Y), (Ms = A), (zr = null));
            break;
          case "focusout":
            zr = Ms = $n = null;
            break;
          case "mousedown":
            Ls = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ls = !1), cc(V, r, L));
            break;
          case "selectionchange":
            if (yg) break;
          case "keydown":
          case "keyup":
            cc(V, r, L);
        }
        var Z;
        if (As)
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
          Hn
            ? Ju(e, r) && (ee = "onCompositionEnd")
            : e === "keydown" && r.keyCode === 229 && (ee = "onCompositionStart");
        (ee &&
          (Yu &&
            r.locale !== "ko" &&
            (Hn || ee !== "onCompositionStart"
              ? ee === "onCompositionEnd" && Hn && (Z = $u())
              : ((bt = L), (Ss = "value" in bt ? bt.value : bt.textContent), (Hn = !0))),
          (Y = Ki(A, ee)),
          0 < Y.length &&
            ((ee = new Qu(ee, e, null, r, L)),
            V.push({ event: ee, listeners: Y }),
            Z ? (ee.data = Z) : ((Z = bu(r)), Z !== null && (ee.data = Z)))),
          (Z = og ? sg(e, r) : lg(e, r)) &&
            ((A = Ki(A, "onBeforeInput")),
            0 < A.length &&
              ((L = new Qu("onBeforeInput", "beforeinput", null, r, L)),
              V.push({ event: L, listeners: A }),
              (L.data = Z))));
      }
      xc(V, t);
    });
  }
  function Wr(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Ki(e, t) {
    for (var r = t + "Capture", s = []; e !== null;) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Pr(e, r)),
        u != null && s.unshift(Wr(e, u, l)),
        (u = Pr(e, t)),
        u != null && s.push(Wr(e, u, l))),
        (e = e.return));
    }
    return s;
  }
  function Gn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Sc(e, t, r, s, l) {
    for (var u = t._reactName, h = []; r !== null && r !== s;) {
      var y = r,
        x = y.alternate,
        A = y.stateNode;
      if (x !== null && x === s) break;
      (y.tag === 5 &&
        A !== null &&
        ((y = A),
        l
          ? ((x = Pr(r, u)), x != null && h.unshift(Wr(r, x, y)))
          : l || ((x = Pr(r, u)), x != null && h.push(Wr(r, x, y)))),
        (r = r.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Sg = /\r\n?/g,
    Tg = /\u0000|\uFFFD/g;
  function Tc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Sg,
        `
`,
      )
      .replace(Tg, "");
  }
  function Gi(e, t, r) {
    if (((t = Tc(t)), Tc(e) !== t && r)) throw Error(o(425));
  }
  function Qi() {}
  var Fs = null,
    zs = null;
  function Bs(e, t) {
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
  var Us = typeof setTimeout == "function" ? setTimeout : void 0,
    Pg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Pc = typeof Promise == "function" ? Promise : void 0,
    kg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Pc < "u"
          ? function (e) {
              return Pc.resolve(null).then(e).catch(Cg);
            }
          : Us;
  function Cg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ws(e, t) {
    var r = t,
      s = 0;
    do {
      var l = r.nextSibling;
      if ((e.removeChild(r), l && l.nodeType === 8))
        if (((r = l.data), r === "/$")) {
          if (s === 0) {
            (e.removeChild(l), Lr(t));
            return;
          }
          s--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || s++;
      r = l;
    } while (r);
    Lr(t);
  }
  function tn(e) {
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
  function kc(e) {
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
    Hr = "__reactProps$" + Qn,
    Ot = "__reactContainer$" + Qn,
    Hs = "__reactEvents$" + Qn,
    Eg = "__reactListeners$" + Qn,
    Ag = "__reactHandles$" + Qn;
  function wn(e) {
    var t = e[Mt];
    if (t) return t;
    for (var r = e.parentNode; r;) {
      if ((t = r[Ot] || r[Mt])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = kc(e); e !== null;) {
            if ((r = e[Mt])) return r;
            e = kc(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function $r(e) {
    return (
      (e = e[Mt] || e[Ot]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Xn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Xi(e) {
    return e[Hr] || null;
  }
  var $s = [],
    Yn = -1;
  function nn(e) {
    return { current: e };
  }
  function ye(e) {
    0 > Yn || ((e.current = $s[Yn]), ($s[Yn] = null), Yn--);
  }
  function me(e, t) {
    (Yn++, ($s[Yn] = e.current), (e.current = t));
  }
  var rn = {},
    Ue = nn(rn),
    be = nn(!1),
    Sn = rn;
  function Zn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return rn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
      return s.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in r) l[u] = t[u];
    return (
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function et(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Yi() {
    (ye(be), ye(Ue));
  }
  function Cc(e, t, r) {
    if (Ue.current !== rn) throw Error(o(168));
    (me(Ue, t), me(be, r));
  }
  function Ec(e, t, r) {
    var s = e.stateNode;
    if (((t = t.childContextTypes), typeof s.getChildContext != "function")) return r;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(o(108, pe(e) || "Unknown", l));
    return B({}, r, s);
  }
  function Zi(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
      (Sn = Ue.current),
      me(Ue, e),
      me(be, be.current),
      !0
    );
  }
  function Ac(e, t, r) {
    var s = e.stateNode;
    if (!s) throw Error(o(169));
    (r
      ? ((e = Ec(e, t, Sn)),
        (s.__reactInternalMemoizedMergedChildContext = e),
        ye(be),
        ye(Ue),
        me(Ue, e))
      : ye(be),
      me(be, r));
  }
  var Ft = null,
    qi = !1,
    Ks = !1;
  function Rc(e) {
    Ft === null ? (Ft = [e]) : Ft.push(e);
  }
  function Rg(e) {
    ((qi = !0), Rc(e));
  }
  function on() {
    if (!Ks && Ft !== null) {
      Ks = !0;
      var e = 0,
        t = he;
      try {
        var r = Ft;
        for (he = 1; e < r.length; e++) {
          var s = r[e];
          do s = s(!0);
          while (s !== null);
        }
        ((Ft = null), (qi = !1));
      } catch (l) {
        throw (Ft !== null && (Ft = Ft.slice(e + 1)), ju(hs, on), l);
      } finally {
        ((he = t), (Ks = !1));
      }
    }
    return null;
  }
  var qn = [],
    Jn = 0,
    Ji = null,
    bi = 0,
    ht = [],
    pt = 0,
    Tn = null,
    zt = 1,
    Bt = "";
  function Pn(e, t) {
    ((qn[Jn++] = bi), (qn[Jn++] = Ji), (Ji = e), (bi = t));
  }
  function Dc(e, t, r) {
    ((ht[pt++] = zt), (ht[pt++] = Bt), (ht[pt++] = Tn), (Tn = e));
    var s = zt;
    e = Bt;
    var l = 32 - Tt(s) - 1;
    ((s &= ~(1 << l)), (r += 1));
    var u = 32 - Tt(t) + l;
    if (30 < u) {
      var h = l - (l % 5);
      ((u = (s & ((1 << h) - 1)).toString(32)),
        (s >>= h),
        (l -= h),
        (zt = (1 << (32 - Tt(t) + l)) | (r << l) | s),
        (Bt = u + e));
    } else ((zt = (1 << u) | (r << l) | s), (Bt = e));
  }
  function Gs(e) {
    e.return !== null && (Pn(e, 1), Dc(e, 1, 0));
  }
  function Qs(e) {
    for (; e === Ji;) ((Ji = qn[--Jn]), (qn[Jn] = null), (bi = qn[--Jn]), (qn[Jn] = null));
    for (; e === Tn;)
      ((Tn = ht[--pt]),
        (ht[pt] = null),
        (Bt = ht[--pt]),
        (ht[pt] = null),
        (zt = ht[--pt]),
        (ht[pt] = null));
  }
  var at = null,
    ut = null,
    we = !1,
    kt = null;
  function jc(e, t) {
    var r = vt(5, null, null, 0);
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
          t !== null ? ((e.stateNode = t), (at = e), (ut = tn(t.firstChild)), !0) : !1
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
            ? ((r = Tn !== null ? { id: zt, overflow: Bt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
              (r = vt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (at = e),
              (ut = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Xs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ys(e) {
    if (we) {
      var t = ut;
      if (t) {
        var r = t;
        if (!Mc(e, t)) {
          if (Xs(e)) throw Error(o(418));
          t = tn(r.nextSibling);
          var s = at;
          t && Mc(e, t) ? jc(s, r) : ((e.flags = (e.flags & -4097) | 2), (we = !1), (at = e));
        }
      } else {
        if (Xs(e)) throw Error(o(418));
        ((e.flags = (e.flags & -4097) | 2), (we = !1), (at = e));
      }
    }
  }
  function Lc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    at = e;
  }
  function eo(e) {
    if (e !== at) return !1;
    if (!we) return (Lc(e), (we = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !Bs(e.type, e.memoizedProps))),
      t && (t = ut))
    ) {
      if (Xs(e)) throw (Vc(), Error(o(418)));
      for (; t;) (jc(e, t), (t = tn(t.nextSibling)));
    }
    if ((Lc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                ut = tn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ut = null;
      }
    } else ut = at ? tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Vc() {
    for (var e = ut; e;) e = tn(e.nextSibling);
  }
  function bn() {
    ((ut = at = null), (we = !1));
  }
  function Zs(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  var Dg = te.ReactCurrentBatchConfig;
  function Kr(e, t, r) {
    if (((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(o(309));
          var s = r.stateNode;
        }
        if (!s) throw Error(o(147, e));
        var l = s,
          u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u
          ? t.ref
          : ((t = function (h) {
              var y = l.refs;
              h === null ? delete y[u] : (y[u] = h);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!r._owner) throw Error(o(290, e));
    }
    return e;
  }
  function to(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function _c(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Nc(e) {
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
    function s(C, S) {
      for (C = new Map(); S !== null;)
        (S.key !== null ? C.set(S.key, S) : C.set(S.index, S), (S = S.sibling));
      return C;
    }
    function l(C, S) {
      return ((C = hn(C, S)), (C.index = 0), (C.sibling = null), C);
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
    function y(C, S, E, I) {
      return S === null || S.tag !== 6
        ? ((S = Ul(E, C.mode, I)), (S.return = C), S)
        : ((S = l(S, E)), (S.return = C), S);
    }
    function x(C, S, E, I) {
      var G = E.type;
      return G === ae
        ? L(C, S, E.props.children, I, E.key)
        : S !== null &&
            (S.elementType === G ||
              (typeof G == "object" && G !== null && G.$$typeof === Xe && _c(G) === S.type))
          ? ((I = l(S, E.props)), (I.ref = Kr(C, S, E)), (I.return = C), I)
          : ((I = Eo(E.type, E.key, E.props, null, C.mode, I)),
            (I.ref = Kr(C, S, E)),
            (I.return = C),
            I);
    }
    function A(C, S, E, I) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== E.containerInfo ||
        S.stateNode.implementation !== E.implementation
        ? ((S = Wl(E, C.mode, I)), (S.return = C), S)
        : ((S = l(S, E.children || [])), (S.return = C), S);
    }
    function L(C, S, E, I, G) {
      return S === null || S.tag !== 7
        ? ((S = Mn(E, C.mode, I, G)), (S.return = C), S)
        : ((S = l(S, E)), (S.return = C), S);
    }
    function V(C, S, E) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return ((S = Ul("" + S, C.mode, E)), (S.return = C), S);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Q:
            return (
              (E = Eo(S.type, S.key, S.props, null, C.mode, E)),
              (E.ref = Kr(C, null, S)),
              (E.return = C),
              E
            );
          case ne:
            return ((S = Wl(S, C.mode, E)), (S.return = C), S);
          case Xe:
            var I = S._init;
            return V(C, I(S._payload), E);
        }
        if (wr(S) || X(S)) return ((S = Mn(S, C.mode, E, null)), (S.return = C), S);
        to(C, S);
      }
      return null;
    }
    function D(C, S, E, I) {
      var G = S !== null ? S.key : null;
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return G !== null ? null : y(C, S, "" + E, I);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Q:
            return E.key === G ? x(C, S, E, I) : null;
          case ne:
            return E.key === G ? A(C, S, E, I) : null;
          case Xe:
            return ((G = E._init), D(C, S, G(E._payload), I));
        }
        if (wr(E) || X(E)) return G !== null ? null : L(C, S, E, I, null);
        to(C, E);
      }
      return null;
    }
    function z(C, S, E, I, G) {
      if ((typeof I == "string" && I !== "") || typeof I == "number")
        return ((C = C.get(E) || null), y(S, C, "" + I, G));
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Q:
            return ((C = C.get(I.key === null ? E : I.key) || null), x(S, C, I, G));
          case ne:
            return ((C = C.get(I.key === null ? E : I.key) || null), A(S, C, I, G));
          case Xe:
            var Y = I._init;
            return z(C, S, E, Y(I._payload), G);
        }
        if (wr(I) || X(I)) return ((C = C.get(E) || null), L(S, C, I, G, null));
        to(S, I);
      }
      return null;
    }
    function H(C, S, E, I) {
      for (
        var G = null, Y = null, Z = S, ee = (S = 0), Oe = null;
        Z !== null && ee < E.length;
        ee++
      ) {
        Z.index > ee ? ((Oe = Z), (Z = null)) : (Oe = Z.sibling);
        var fe = D(C, Z, E[ee], I);
        if (fe === null) {
          Z === null && (Z = Oe);
          break;
        }
        (e && Z && fe.alternate === null && t(C, Z),
          (S = u(fe, S, ee)),
          Y === null ? (G = fe) : (Y.sibling = fe),
          (Y = fe),
          (Z = Oe));
      }
      if (ee === E.length) return (r(C, Z), we && Pn(C, ee), G);
      if (Z === null) {
        for (; ee < E.length; ee++)
          ((Z = V(C, E[ee], I)),
            Z !== null && ((S = u(Z, S, ee)), Y === null ? (G = Z) : (Y.sibling = Z), (Y = Z)));
        return (we && Pn(C, ee), G);
      }
      for (Z = s(C, Z); ee < E.length; ee++)
        ((Oe = z(Z, C, ee, E[ee], I)),
          Oe !== null &&
            (e && Oe.alternate !== null && Z.delete(Oe.key === null ? ee : Oe.key),
            (S = u(Oe, S, ee)),
            Y === null ? (G = Oe) : (Y.sibling = Oe),
            (Y = Oe)));
      return (
        e &&
          Z.forEach(function (pn) {
            return t(C, pn);
          }),
        we && Pn(C, ee),
        G
      );
    }
    function $(C, S, E, I) {
      var G = X(E);
      if (typeof G != "function") throw Error(o(150));
      if (((E = G.call(E)), E == null)) throw Error(o(151));
      for (
        var Y = (G = null), Z = S, ee = (S = 0), Oe = null, fe = E.next();
        Z !== null && !fe.done;
        ee++, fe = E.next()
      ) {
        Z.index > ee ? ((Oe = Z), (Z = null)) : (Oe = Z.sibling);
        var pn = D(C, Z, fe.value, I);
        if (pn === null) {
          Z === null && (Z = Oe);
          break;
        }
        (e && Z && pn.alternate === null && t(C, Z),
          (S = u(pn, S, ee)),
          Y === null ? (G = pn) : (Y.sibling = pn),
          (Y = pn),
          (Z = Oe));
      }
      if (fe.done) return (r(C, Z), we && Pn(C, ee), G);
      if (Z === null) {
        for (; !fe.done; ee++, fe = E.next())
          ((fe = V(C, fe.value, I)),
            fe !== null &&
              ((S = u(fe, S, ee)), Y === null ? (G = fe) : (Y.sibling = fe), (Y = fe)));
        return (we && Pn(C, ee), G);
      }
      for (Z = s(C, Z); !fe.done; ee++, fe = E.next())
        ((fe = z(Z, C, ee, fe.value, I)),
          fe !== null &&
            (e && fe.alternate !== null && Z.delete(fe.key === null ? ee : fe.key),
            (S = u(fe, S, ee)),
            Y === null ? (G = fe) : (Y.sibling = fe),
            (Y = fe)));
      return (
        e &&
          Z.forEach(function (ay) {
            return t(C, ay);
          }),
        we && Pn(C, ee),
        G
      );
    }
    function je(C, S, E, I) {
      if (
        (typeof E == "object" &&
          E !== null &&
          E.type === ae &&
          E.key === null &&
          (E = E.props.children),
        typeof E == "object" && E !== null)
      ) {
        switch (E.$$typeof) {
          case Q:
            e: {
              for (var G = E.key, Y = S; Y !== null;) {
                if (Y.key === G) {
                  if (((G = E.type), G === ae)) {
                    if (Y.tag === 7) {
                      (r(C, Y.sibling), (S = l(Y, E.props.children)), (S.return = C), (C = S));
                      break e;
                    }
                  } else if (
                    Y.elementType === G ||
                    (typeof G == "object" && G !== null && G.$$typeof === Xe && _c(G) === Y.type)
                  ) {
                    (r(C, Y.sibling),
                      (S = l(Y, E.props)),
                      (S.ref = Kr(C, Y, E)),
                      (S.return = C),
                      (C = S));
                    break e;
                  }
                  r(C, Y);
                  break;
                } else t(C, Y);
                Y = Y.sibling;
              }
              E.type === ae
                ? ((S = Mn(E.props.children, C.mode, I, E.key)), (S.return = C), (C = S))
                : ((I = Eo(E.type, E.key, E.props, null, C.mode, I)),
                  (I.ref = Kr(C, S, E)),
                  (I.return = C),
                  (C = I));
            }
            return h(C);
          case ne:
            e: {
              for (Y = E.key; S !== null;) {
                if (S.key === Y)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === E.containerInfo &&
                    S.stateNode.implementation === E.implementation
                  ) {
                    (r(C, S.sibling), (S = l(S, E.children || [])), (S.return = C), (C = S));
                    break e;
                  } else {
                    r(C, S);
                    break;
                  }
                else t(C, S);
                S = S.sibling;
              }
              ((S = Wl(E, C.mode, I)), (S.return = C), (C = S));
            }
            return h(C);
          case Xe:
            return ((Y = E._init), je(C, S, Y(E._payload), I));
        }
        if (wr(E)) return H(C, S, E, I);
        if (X(E)) return $(C, S, E, I);
        to(C, E);
      }
      return (typeof E == "string" && E !== "") || typeof E == "number"
        ? ((E = "" + E),
          S !== null && S.tag === 6
            ? (r(C, S.sibling), (S = l(S, E)), (S.return = C), (C = S))
            : (r(C, S), (S = Ul(E, C.mode, I)), (S.return = C), (C = S)),
          h(C))
        : r(C, S);
    }
    return je;
  }
  var er = Nc(!0),
    Ic = Nc(!1),
    no = nn(null),
    ro = null,
    tr = null,
    qs = null;
  function Js() {
    qs = tr = ro = null;
  }
  function bs(e) {
    var t = no.current;
    (ye(no), (e._currentValue = t));
  }
  function el(e, t, r) {
    for (; e !== null;) {
      var s = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
          : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function nr(e, t) {
    ((ro = e),
      (qs = tr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (tt = !0), (e.firstContext = null)));
  }
  function mt(e) {
    var t = e._currentValue;
    if (qs !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), tr === null)) {
        if (ro === null) throw Error(o(308));
        ((tr = e), (ro.dependencies = { lanes: 0, firstContext: e }));
      } else tr = tr.next = e;
    return t;
  }
  var kn = null;
  function tl(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Oc(e, t, r, s) {
    var l = t.interleaved;
    return (
      l === null ? ((r.next = r), tl(t)) : ((r.next = l.next), (l.next = r)),
      (t.interleaved = r),
      Ut(e, s)
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
  function nl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Fc(e, t) {
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
  function ln(e, t, r) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (le & 2) !== 0)) {
      var l = s.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (s.pending = t),
        Ut(e, r)
      );
    }
    return (
      (l = s.interleaved),
      l === null ? ((t.next = t), tl(s)) : ((t.next = l.next), (l.next = t)),
      (s.interleaved = t),
      Ut(e, r)
    );
  }
  function io(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var s = t.lanes;
      ((s &= e.pendingLanes), (r |= s), (t.lanes = r), gs(e, r));
    }
  }
  function zc(e, t) {
    var r = e.updateQueue,
      s = e.alternate;
    if (s !== null && ((s = s.updateQueue), r === s)) {
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
        baseState: s.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: s.shared,
        effects: s.effects,
      }),
        (e.updateQueue = r));
      return;
    }
    ((e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t));
  }
  function oo(e, t, r, s) {
    var l = e.updateQueue;
    sn = !1;
    var u = l.firstBaseUpdate,
      h = l.lastBaseUpdate,
      y = l.shared.pending;
    if (y !== null) {
      l.shared.pending = null;
      var x = y,
        A = x.next;
      ((x.next = null), h === null ? (u = A) : (h.next = A), (h = x));
      var L = e.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (y = L.lastBaseUpdate),
        y !== h && (y === null ? (L.firstBaseUpdate = A) : (y.next = A), (L.lastBaseUpdate = x)));
    }
    if (u !== null) {
      var V = l.baseState;
      ((h = 0), (L = A = x = null), (y = u));
      do {
        var D = y.lane,
          z = y.eventTime;
        if ((s & D) === D) {
          L !== null &&
            (L = L.next =
              {
                eventTime: z,
                lane: 0,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null,
              });
          e: {
            var H = e,
              $ = y;
            switch (((D = t), (z = r), $.tag)) {
              case 1:
                if (((H = $.payload), typeof H == "function")) {
                  V = H.call(z, V, D);
                  break e;
                }
                V = H;
                break e;
              case 3:
                H.flags = (H.flags & -65537) | 128;
              case 0:
                if (
                  ((H = $.payload), (D = typeof H == "function" ? H.call(z, V, D) : H), D == null)
                )
                  break e;
                V = B({}, V, D);
                break e;
              case 2:
                sn = !0;
            }
          }
          y.callback !== null &&
            y.lane !== 0 &&
            ((e.flags |= 64), (D = l.effects), D === null ? (l.effects = [y]) : D.push(y));
        } else
          ((z = {
            eventTime: z,
            lane: D,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            L === null ? ((A = L = z), (x = V)) : (L = L.next = z),
            (h |= D));
        if (((y = y.next), y === null)) {
          if (((y = l.shared.pending), y === null)) break;
          ((D = y),
            (y = D.next),
            (D.next = null),
            (l.lastBaseUpdate = D),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (L === null && (x = V),
        (l.baseState = x),
        (l.firstBaseUpdate = A),
        (l.lastBaseUpdate = L),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((h |= l.lane), (l = l.next));
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ((An |= h), (e.lanes = h), (e.memoizedState = V));
    }
  }
  function Bc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var s = e[t],
          l = s.callback;
        if (l !== null) {
          if (((s.callback = null), (s = r), typeof l != "function")) throw Error(o(191, l));
          l.call(s);
        }
      }
  }
  var Gr = {},
    Lt = nn(Gr),
    Qr = nn(Gr),
    Xr = nn(Gr);
  function Cn(e) {
    if (e === Gr) throw Error(o(174));
    return e;
  }
  function rl(e, t) {
    switch ((me(Xr, t), me(Qr, e), me(Lt, Gr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : is(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = is(t, e)));
    }
    (ye(Lt), me(Lt, t));
  }
  function rr() {
    (ye(Lt), ye(Qr), ye(Xr));
  }
  function Uc(e) {
    Cn(Xr.current);
    var t = Cn(Lt.current),
      r = is(t, e.type);
    t !== r && (me(Qr, e), me(Lt, r));
  }
  function il(e) {
    Qr.current === e && (ye(Lt), ye(Qr));
  }
  var Pe = nn(0);
  function so(e) {
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
  var ol = [];
  function sl() {
    for (var e = 0; e < ol.length; e++) ol[e]._workInProgressVersionPrimary = null;
    ol.length = 0;
  }
  var lo = te.ReactCurrentDispatcher,
    ll = te.ReactCurrentBatchConfig,
    En = 0,
    ke = null,
    Ve = null,
    Ne = null,
    ao = !1,
    Yr = !1,
    Zr = 0,
    jg = 0;
  function We() {
    throw Error(o(321));
  }
  function al(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Pt(e[r], t[r])) return !1;
    return !0;
  }
  function ul(e, t, r, s, l, u) {
    if (
      ((En = u),
      (ke = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (lo.current = e === null || e.memoizedState === null ? _g : Ng),
      (e = r(s, l)),
      Yr)
    ) {
      u = 0;
      do {
        if (((Yr = !1), (Zr = 0), 25 <= u)) throw Error(o(301));
        ((u += 1), (Ne = Ve = null), (t.updateQueue = null), (lo.current = Ig), (e = r(s, l)));
      } while (Yr);
    }
    if (
      ((lo.current = fo),
      (t = Ve !== null && Ve.next !== null),
      (En = 0),
      (Ne = Ve = ke = null),
      (ao = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function cl() {
    var e = Zr !== 0;
    return ((Zr = 0), e);
  }
  function Vt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ne === null ? (ke.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne);
  }
  function gt() {
    if (Ve === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = Ne === null ? ke.memoizedState : Ne.next;
    if (t !== null) ((Ne = t), (Ve = e));
    else {
      if (e === null) throw Error(o(310));
      ((Ve = e),
        (e = {
          memoizedState: Ve.memoizedState,
          baseState: Ve.baseState,
          baseQueue: Ve.baseQueue,
          queue: Ve.queue,
          next: null,
        }),
        Ne === null ? (ke.memoizedState = Ne = e) : (Ne = Ne.next = e));
    }
    return Ne;
  }
  function qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function fl(e) {
    var t = gt(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var s = Ve,
      l = s.baseQueue,
      u = r.pending;
    if (u !== null) {
      if (l !== null) {
        var h = l.next;
        ((l.next = u.next), (u.next = h));
      }
      ((s.baseQueue = l = u), (r.pending = null));
    }
    if (l !== null) {
      ((u = l.next), (s = s.baseState));
      var y = (h = null),
        x = null,
        A = u;
      do {
        var L = A.lane;
        if ((En & L) === L)
          (x !== null &&
            (x = x.next =
              {
                lane: 0,
                action: A.action,
                hasEagerState: A.hasEagerState,
                eagerState: A.eagerState,
                next: null,
              }),
            (s = A.hasEagerState ? A.eagerState : e(s, A.action)));
        else {
          var V = {
            lane: L,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null,
          };
          (x === null ? ((y = x = V), (h = s)) : (x = x.next = V), (ke.lanes |= L), (An |= L));
        }
        A = A.next;
      } while (A !== null && A !== u);
      (x === null ? (h = s) : (x.next = y),
        Pt(s, t.memoizedState) || (tt = !0),
        (t.memoizedState = s),
        (t.baseState = h),
        (t.baseQueue = x),
        (r.lastRenderedState = s));
    }
    if (((e = r.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), (ke.lanes |= u), (An |= u), (l = l.next));
      while (l !== e);
    } else l === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function dl(e) {
    var t = gt(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var s = r.dispatch,
      l = r.pending,
      u = t.memoizedState;
    if (l !== null) {
      r.pending = null;
      var h = (l = l.next);
      do ((u = e(u, h.action)), (h = h.next));
      while (h !== l);
      (Pt(u, t.memoizedState) || (tt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (r.lastRenderedState = u));
    }
    return [u, s];
  }
  function Wc() {}
  function Hc(e, t) {
    var r = ke,
      s = gt(),
      l = t(),
      u = !Pt(s.memoizedState, l);
    if (
      (u && ((s.memoizedState = l), (tt = !0)),
      (s = s.queue),
      hl(Gc.bind(null, r, s, e), [e]),
      s.getSnapshot !== t || u || (Ne !== null && Ne.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), Jr(9, Kc.bind(null, r, s, l, t), void 0, null), Ie === null))
        throw Error(o(349));
      (En & 30) !== 0 || $c(r, t, l);
    }
    return l;
  }
  function $c(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ke.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function Kc(e, t, r, s) {
    ((t.value = r), (t.getSnapshot = s), Qc(t) && Xc(e));
  }
  function Gc(e, t, r) {
    return r(function () {
      Qc(t) && Xc(e);
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
  function Xc(e) {
    var t = Ut(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function Yc(e) {
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
      (e = e.dispatch = Vg.bind(null, ke, e)),
      [t.memoizedState, e]
    );
  }
  function Jr(e, t, r, s) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ke.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
      e
    );
  }
  function Zc() {
    return gt().memoizedState;
  }
  function uo(e, t, r, s) {
    var l = Vt();
    ((ke.flags |= e), (l.memoizedState = Jr(1 | t, r, void 0, s === void 0 ? null : s)));
  }
  function co(e, t, r, s) {
    var l = gt();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (Ve !== null) {
      var h = Ve.memoizedState;
      if (((u = h.destroy), s !== null && al(s, h.deps))) {
        l.memoizedState = Jr(t, r, u, s);
        return;
      }
    }
    ((ke.flags |= e), (l.memoizedState = Jr(1 | t, r, u, s)));
  }
  function qc(e, t) {
    return uo(8390656, 8, e, t);
  }
  function hl(e, t) {
    return co(2048, 8, e, t);
  }
  function Jc(e, t) {
    return co(4, 2, e, t);
  }
  function bc(e, t) {
    return co(4, 4, e, t);
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
    return ((r = r != null ? r.concat([e]) : null), co(4, 4, ef.bind(null, t, e), r));
  }
  function pl() {}
  function nf(e, t) {
    var r = gt();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && al(t, s[1]) ? s[0] : ((r.memoizedState = [e, t]), e);
  }
  function rf(e, t) {
    var r = gt();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && al(t, s[1])
      ? s[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function of(e, t, r) {
    return (En & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = r))
      : (Pt(r, t) || ((r = _u()), (ke.lanes |= r), (An |= r), (e.baseState = !0)), t);
  }
  function Mg(e, t) {
    var r = he;
    ((he = r !== 0 && 4 > r ? r : 4), e(!0));
    var s = ll.transition;
    ll.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((he = r), (ll.transition = s));
    }
  }
  function sf() {
    return gt().memoizedState;
  }
  function Lg(e, t, r) {
    var s = fn(e);
    if (((r = { lane: s, action: r, hasEagerState: !1, eagerState: null, next: null }), lf(e)))
      af(t, r);
    else if (((r = Oc(e, t, r, s)), r !== null)) {
      var l = Ze();
      (Rt(r, e, s, l), uf(r, t, s));
    }
  }
  function Vg(e, t, r) {
    var s = fn(e),
      l = { lane: s, action: r, hasEagerState: !1, eagerState: null, next: null };
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
            y = u(h, r);
          if (((l.hasEagerState = !0), (l.eagerState = y), Pt(y, h))) {
            var x = t.interleaved;
            (x === null ? ((l.next = l), tl(t)) : ((l.next = x.next), (x.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((r = Oc(e, t, l, s)), r !== null && ((l = Ze()), Rt(r, e, s, l), uf(r, t, s)));
    }
  }
  function lf(e) {
    var t = e.alternate;
    return e === ke || (t !== null && t === ke);
  }
  function af(e, t) {
    Yr = ao = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function uf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var s = t.lanes;
      ((s &= e.pendingLanes), (r |= s), (t.lanes = r), gs(e, r));
    }
  }
  var fo = {
      readContext: mt,
      useCallback: We,
      useContext: We,
      useEffect: We,
      useImperativeHandle: We,
      useInsertionEffect: We,
      useLayoutEffect: We,
      useMemo: We,
      useReducer: We,
      useRef: We,
      useState: We,
      useDebugValue: We,
      useDeferredValue: We,
      useTransition: We,
      useMutableSource: We,
      useSyncExternalStore: We,
      useId: We,
      unstable_isNewReconciler: !1,
    },
    _g = {
      readContext: mt,
      useCallback: function (e, t) {
        return ((Vt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: mt,
      useEffect: qc,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), uo(4194308, 4, ef.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return uo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return uo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Vt();
        return ((t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, r) {
        var s = Vt();
        return (
          (t = r !== void 0 ? r(t) : t),
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
          (e = e.dispatch = Lg.bind(null, ke, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Vt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Yc,
      useDebugValue: pl,
      useDeferredValue: function (e) {
        return (Vt().memoizedState = e);
      },
      useTransition: function () {
        var e = Yc(!1),
          t = e[0];
        return ((e = Mg.bind(null, e[1])), (Vt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var s = ke,
          l = Vt();
        if (we) {
          if (r === void 0) throw Error(o(407));
          r = r();
        } else {
          if (((r = t()), Ie === null)) throw Error(o(349));
          (En & 30) !== 0 || $c(s, t, r);
        }
        l.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (l.queue = u),
          qc(Gc.bind(null, s, u, e), [e]),
          (s.flags |= 2048),
          Jr(9, Kc.bind(null, s, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Vt(),
          t = Ie.identifierPrefix;
        if (we) {
          var r = Bt,
            s = zt;
          ((r = (s & ~(1 << (32 - Tt(s) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Zr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":"));
        } else ((r = jg++), (t = ":" + t + "r" + r.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ng = {
      readContext: mt,
      useCallback: nf,
      useContext: mt,
      useEffect: hl,
      useImperativeHandle: tf,
      useInsertionEffect: Jc,
      useLayoutEffect: bc,
      useMemo: rf,
      useReducer: fl,
      useRef: Zc,
      useState: function () {
        return fl(qr);
      },
      useDebugValue: pl,
      useDeferredValue: function (e) {
        var t = gt();
        return of(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = fl(qr)[0],
          t = gt().memoizedState;
        return [e, t];
      },
      useMutableSource: Wc,
      useSyncExternalStore: Hc,
      useId: sf,
      unstable_isNewReconciler: !1,
    },
    Ig = {
      readContext: mt,
      useCallback: nf,
      useContext: mt,
      useEffect: hl,
      useImperativeHandle: tf,
      useInsertionEffect: Jc,
      useLayoutEffect: bc,
      useMemo: rf,
      useReducer: dl,
      useRef: Zc,
      useState: function () {
        return dl(qr);
      },
      useDebugValue: pl,
      useDeferredValue: function (e) {
        var t = gt();
        return Ve === null ? (t.memoizedState = e) : of(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = dl(qr)[0],
          t = gt().memoizedState;
        return [e, t];
      },
      useMutableSource: Wc,
      useSyncExternalStore: Hc,
      useId: sf,
      unstable_isNewReconciler: !1,
    };
  function Ct(e, t) {
    if (e && e.defaultProps) {
      ((t = B({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function ml(e, t, r, s) {
    ((t = e.memoizedState),
      (r = r(s, t)),
      (r = r == null ? t : B({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var ho = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? xn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var s = Ze(),
        l = fn(e),
        u = Wt(s, l);
      ((u.payload = t),
        r != null && (u.callback = r),
        (t = ln(e, u, l)),
        t !== null && (Rt(t, e, l, s), io(t, e, l)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var s = Ze(),
        l = fn(e),
        u = Wt(s, l);
      ((u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = ln(e, u, l)),
        t !== null && (Rt(t, e, l, s), io(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Ze(),
        s = fn(e),
        l = Wt(r, s);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = ln(e, l, s)),
        t !== null && (Rt(t, e, s, r), io(t, e, s)));
    },
  };
  function cf(e, t, r, s, l, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(s, u, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Fr(r, s) || !Fr(l, u)
          : !0
    );
  }
  function ff(e, t, r) {
    var s = !1,
      l = rn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = mt(u))
        : ((l = et(t) ? Sn : Ue.current),
          (s = t.contextTypes),
          (u = (s = s != null) ? Zn(e, l) : rn)),
      (t = new t(r, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ho),
      (e.stateNode = t),
      (t._reactInternals = e),
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function df(e, t, r, s) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, s),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, s),
      t.state !== e && ho.enqueueReplaceState(t, t.state, null));
  }
  function gl(e, t, r, s) {
    var l = e.stateNode;
    ((l.props = r), (l.state = e.memoizedState), (l.refs = {}), nl(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = mt(u))
      : ((u = et(t) ? Sn : Ue.current), (l.context = Zn(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (ml(e, t, u, r), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && ho.enqueueReplaceState(l, l.state, null),
        oo(e, r, l, s),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function ir(e, t) {
    try {
      var r = "",
        s = t;
      do ((r += ue(s)), (s = s.return));
      while (s);
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
  function yl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function vl(e, t) {
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
    ((r = Wt(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var s = t.value;
    return (
      (r.callback = function () {
        (wo || ((wo = !0), (Vl = s)), vl(e, t));
      }),
      r
    );
  }
  function pf(e, t, r) {
    ((r = Wt(-1, r)), (r.tag = 3));
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      ((r.payload = function () {
        return s(l);
      }),
        (r.callback = function () {
          vl(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (r.callback = function () {
          (vl(e, t),
            typeof s != "function" && (un === null ? (un = new Set([this])) : un.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
        }),
      r
    );
  }
  function mf(e, t, r) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Og();
      var l = new Set();
      s.set(t, l);
    } else ((l = s.get(t)), l === void 0 && ((l = new Set()), s.set(t, l)));
    l.has(r) || (l.add(r), (e = qg.bind(null, e, t, r)), t.then(e, e));
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
  function yf(e, t, r, s, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null ? (r.tag = 17) : ((t = Wt(-1, 1)), (t.tag = 2), ln(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Fg = te.ReactCurrentOwner,
    tt = !1;
  function Ye(e, t, r, s) {
    t.child = e === null ? Ic(t, null, r, s) : er(t, e.child, r, s);
  }
  function vf(e, t, r, s, l) {
    r = r.render;
    var u = t.ref;
    return (
      nr(t, l),
      (s = ul(e, t, r, s, u, l)),
      (r = cl()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ht(e, t, l))
        : (we && r && Gs(t), (t.flags |= 1), Ye(e, t, s, l), t.child)
    );
  }
  function xf(e, t, r, s, l) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !Bl(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), wf(e, t, u, s, l))
        : ((e = Eo(r.type, null, s, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var h = u.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Fr), r(h, s) && e.ref === t.ref))
        return Ht(e, t, l);
    }
    return ((t.flags |= 1), (e = hn(u, s)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function wf(e, t, r, s, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Fr(u, s) && e.ref === t.ref)
        if (((tt = !1), (t.pendingProps = s = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (tt = !0);
        else return ((t.lanes = e.lanes), Ht(e, t, l));
    }
    return xl(e, t, r, s, l);
  }
  function Sf(e, t, r) {
    var s = t.pendingProps,
      l = s.children,
      u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          me(sr, ct),
          (ct |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            me(sr, ct),
            (ct |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (s = u !== null ? u.baseLanes : r),
          me(sr, ct),
          (ct |= s));
      }
    else
      (u !== null ? ((s = u.baseLanes | r), (t.memoizedState = null)) : (s = r),
        me(sr, ct),
        (ct |= s));
    return (Ye(e, t, l, r), t.child);
  }
  function Tf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function xl(e, t, r, s, l) {
    var u = et(r) ? Sn : Ue.current;
    return (
      (u = Zn(t, u)),
      nr(t, l),
      (r = ul(e, t, r, s, u, l)),
      (s = cl()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ht(e, t, l))
        : (we && s && Gs(t), (t.flags |= 1), Ye(e, t, r, l), t.child)
    );
  }
  function Pf(e, t, r, s, l) {
    if (et(r)) {
      var u = !0;
      Zi(t);
    } else u = !1;
    if ((nr(t, l), t.stateNode === null)) (mo(e, t), ff(t, r, s), gl(t, r, s, l), (s = !0));
    else if (e === null) {
      var h = t.stateNode,
        y = t.memoizedProps;
      h.props = y;
      var x = h.context,
        A = r.contextType;
      typeof A == "object" && A !== null
        ? (A = mt(A))
        : ((A = et(r) ? Sn : Ue.current), (A = Zn(t, A)));
      var L = r.getDerivedStateFromProps,
        V = typeof L == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (V ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((y !== s || x !== A) && df(t, h, s, A)),
        (sn = !1));
      var D = t.memoizedState;
      ((h.state = D),
        oo(t, s, h, l),
        (x = t.memoizedState),
        y !== s || D !== x || be.current || sn
          ? (typeof L == "function" && (ml(t, r, L, s), (x = t.memoizedState)),
            (y = sn || cf(t, r, y, s, D, x, A))
              ? (V ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" && h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = x)),
            (h.props = s),
            (h.state = x),
            (h.context = A),
            (s = y))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), (s = !1)));
    } else {
      ((h = t.stateNode),
        Fc(e, t),
        (y = t.memoizedProps),
        (A = t.type === t.elementType ? y : Ct(t.type, y)),
        (h.props = A),
        (V = t.pendingProps),
        (D = h.context),
        (x = r.contextType),
        typeof x == "object" && x !== null
          ? (x = mt(x))
          : ((x = et(r) ? Sn : Ue.current), (x = Zn(t, x))));
      var z = r.getDerivedStateFromProps;
      ((L = typeof z == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((y !== V || D !== x) && df(t, h, s, x)),
        (sn = !1),
        (D = t.memoizedState),
        (h.state = D),
        oo(t, s, h, l));
      var H = t.memoizedState;
      y !== V || D !== H || be.current || sn
        ? (typeof z == "function" && (ml(t, r, z, s), (H = t.memoizedState)),
          (A = sn || cf(t, r, A, s, D, H, x) || !1)
            ? (L ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(s, H, x),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(s, H, x)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (y === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (y === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = H)),
          (h.props = s),
          (h.state = H),
          (h.context = x),
          (s = A))
        : (typeof h.componentDidUpdate != "function" ||
            (y === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (y === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return wl(e, t, r, s, u, l);
  }
  function wl(e, t, r, s, l, u) {
    Tf(e, t);
    var h = (t.flags & 128) !== 0;
    if (!s && !h) return (l && Ac(t, r, !1), Ht(e, t, u));
    ((s = t.stateNode), (Fg.current = t));
    var y = h && typeof r.getDerivedStateFromError != "function" ? null : s.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = er(t, e.child, null, u)), (t.child = er(t, null, y, u)))
        : Ye(e, t, y, u),
      (t.memoizedState = s.state),
      l && Ac(t, r, !0),
      t.child
    );
  }
  function kf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Cc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Cc(e, t.context, !1),
      rl(e, t.containerInfo));
  }
  function Cf(e, t, r, s, l) {
    return (bn(), Zs(l), (t.flags |= 256), Ye(e, t, r, s), t.child);
  }
  var Sl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Tl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ef(e, t, r) {
    var s = t.pendingProps,
      l = Pe.current,
      u = !1,
      h = (t.flags & 128) !== 0,
      y;
    if (
      ((y = h) || (y = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      y ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      me(Pe, l & 1),
      e === null)
    )
      return (
        Ys(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((h = s.children),
            (e = s.fallback),
            u
              ? ((s = t.mode),
                (u = t.child),
                (h = { mode: "hidden", children: h }),
                (s & 1) === 0 && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = h))
                  : (u = Ao(h, s, 0, null)),
                (e = Mn(e, s, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Tl(r)),
                (t.memoizedState = Sl),
                e)
              : Pl(t, h))
      );
    if (((l = e.memoizedState), l !== null && ((y = l.dehydrated), y !== null)))
      return zg(e, t, h, s, y, l, r);
    if (u) {
      ((u = s.fallback), (h = t.mode), (l = e.child), (y = l.sibling));
      var x = { mode: "hidden", children: s.children };
      return (
        (h & 1) === 0 && t.child !== l
          ? ((s = t.child), (s.childLanes = 0), (s.pendingProps = x), (t.deletions = null))
          : ((s = hn(l, x)), (s.subtreeFlags = l.subtreeFlags & 14680064)),
        y !== null ? (u = hn(y, u)) : ((u = Mn(u, h, r, null)), (u.flags |= 2)),
        (u.return = t),
        (s.return = t),
        (s.sibling = u),
        (t.child = s),
        (s = u),
        (u = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? Tl(r)
            : { baseLanes: h.baseLanes | r, cachePool: null, transitions: h.transitions }),
        (u.memoizedState = h),
        (u.childLanes = e.childLanes & ~r),
        (t.memoizedState = Sl),
        s
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (s = hn(u, { mode: "visible", children: s.children })),
      (t.mode & 1) === 0 && (s.lanes = r),
      (s.return = t),
      (s.sibling = null),
      e !== null &&
        ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = s),
      (t.memoizedState = null),
      s
    );
  }
  function Pl(e, t) {
    return (
      (t = Ao({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function po(e, t, r, s) {
    return (
      s !== null && Zs(s),
      er(t, e.child, null, r),
      (e = Pl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function zg(e, t, r, s, l, u, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (s = yl(Error(o(422)))), po(e, t, h, s))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = s.fallback),
            (l = t.mode),
            (s = Ao({ mode: "visible", children: s.children }, l, 0, null)),
            (u = Mn(u, l, h, null)),
            (u.flags |= 2),
            (s.return = t),
            (u.return = t),
            (s.sibling = u),
            (t.child = s),
            (t.mode & 1) !== 0 && er(t, e.child, null, h),
            (t.child.memoizedState = Tl(h)),
            (t.memoizedState = Sl),
            u);
    if ((t.mode & 1) === 0) return po(e, t, h, null);
    if (l.data === "$!") {
      if (((s = l.nextSibling && l.nextSibling.dataset), s)) var y = s.dgst;
      return ((s = y), (u = Error(o(419))), (s = yl(u, s, void 0)), po(e, t, h, s));
    }
    if (((y = (h & e.childLanes) !== 0), tt || y)) {
      if (((s = Ie), s !== null)) {
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
        ((l = (l & (s.suspendedLanes | h)) !== 0 ? 0 : l),
          l !== 0 && l !== u.retryLane && ((u.retryLane = l), Ut(e, l), Rt(s, e, l, -1)));
      }
      return (zl(), (s = yl(Error(o(421)))), po(e, t, h, s));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Jg.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (ut = tn(l.nextSibling)),
        (at = t),
        (we = !0),
        (kt = null),
        e !== null &&
          ((ht[pt++] = zt),
          (ht[pt++] = Bt),
          (ht[pt++] = Tn),
          (zt = e.id),
          (Bt = e.overflow),
          (Tn = t)),
        (t = Pl(t, s.children)),
        (t.flags |= 4096),
        t);
  }
  function Af(e, t, r) {
    e.lanes |= t;
    var s = e.alternate;
    (s !== null && (s.lanes |= t), el(e.return, t, r));
  }
  function kl(e, t, r, s, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: r,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = s),
        (u.tail = r),
        (u.tailMode = l));
  }
  function Rf(e, t, r) {
    var s = t.pendingProps,
      l = s.revealOrder,
      u = s.tail;
    if ((Ye(e, t, s.children, r), (s = Pe.current), (s & 2) !== 0))
      ((s = (s & 1) | 2), (t.flags |= 128));
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
      s &= 1;
    }
    if ((me(Pe, s), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (r = t.child, l = null; r !== null;)
            ((e = r.alternate), e !== null && so(e) === null && (l = r), (r = r.sibling));
          ((r = l),
            r === null ? ((l = t.child), (t.child = null)) : ((l = r.sibling), (r.sibling = null)),
            kl(t, !1, l, r, u));
          break;
        case "backwards":
          for (r = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && so(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = r), (r = l), (l = e));
          }
          kl(t, !0, r, null, u);
          break;
        case "together":
          kl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function mo(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ht(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (An |= t.lanes), (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, r = hn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;)
        ((e = e.sibling), (r = r.sibling = hn(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function Bg(e, t, r) {
    switch (t.tag) {
      case 3:
        (kf(t), bn());
        break;
      case 5:
        Uc(t);
        break;
      case 1:
        et(t.type) && Zi(t);
        break;
      case 4:
        rl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context,
          l = t.memoizedProps.value;
        (me(no, s._currentValue), (s._currentValue = l));
        break;
      case 13:
        if (((s = t.memoizedState), s !== null))
          return s.dehydrated !== null
            ? (me(Pe, Pe.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Ef(e, t, r)
              : (me(Pe, Pe.current & 1), (e = Ht(e, t, r)), e !== null ? e.sibling : null);
        me(Pe, Pe.current & 1);
        break;
      case 19:
        if (((s = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (s) return Rf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          me(Pe, Pe.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Sf(e, t, r));
    }
    return Ht(e, t, r);
  }
  var Df, Cl, jf, Mf;
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
    (Cl = function () {}),
    (jf = function (e, t, r, s) {
      var l = e.memoizedProps;
      if (l !== s) {
        ((e = t.stateNode), Cn(Lt.current));
        var u = null;
        switch (r) {
          case "input":
            ((l = es(e, l)), (s = es(e, s)), (u = []));
            break;
          case "select":
            ((l = B({}, l, { value: void 0 })), (s = B({}, s, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = rs(e, l)), (s = rs(e, s)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof s.onClick == "function" && (e.onclick = Qi);
        }
        os(r, s);
        var h;
        r = null;
        for (A in l)
          if (!s.hasOwnProperty(A) && l.hasOwnProperty(A) && l[A] != null)
            if (A === "style") {
              var y = l[A];
              for (h in y) y.hasOwnProperty(h) && (r || (r = {}), (r[h] = ""));
            } else
              A !== "dangerouslySetInnerHTML" &&
                A !== "children" &&
                A !== "suppressContentEditableWarning" &&
                A !== "suppressHydrationWarning" &&
                A !== "autoFocus" &&
                (c.hasOwnProperty(A) ? u || (u = []) : (u = u || []).push(A, null));
        for (A in s) {
          var x = s[A];
          if (
            ((y = l != null ? l[A] : void 0),
            s.hasOwnProperty(A) && x !== y && (x != null || y != null))
          )
            if (A === "style")
              if (y) {
                for (h in y)
                  !y.hasOwnProperty(h) ||
                    (x && x.hasOwnProperty(h)) ||
                    (r || (r = {}), (r[h] = ""));
                for (h in x) x.hasOwnProperty(h) && y[h] !== x[h] && (r || (r = {}), (r[h] = x[h]));
              } else (r || (u || (u = []), u.push(A, r)), (r = x));
            else
              A === "dangerouslySetInnerHTML"
                ? ((x = x ? x.__html : void 0),
                  (y = y ? y.__html : void 0),
                  x != null && y !== x && (u = u || []).push(A, x))
                : A === "children"
                  ? (typeof x != "string" && typeof x != "number") || (u = u || []).push(A, "" + x)
                  : A !== "suppressContentEditableWarning" &&
                    A !== "suppressHydrationWarning" &&
                    (c.hasOwnProperty(A)
                      ? (x != null && A === "onScroll" && ge("scroll", e), u || y === x || (u = []))
                      : (u = u || []).push(A, x));
        }
        r && (u = u || []).push("style", r);
        var A = u;
        (t.updateQueue = A) && (t.flags |= 4);
      }
    }),
    (Mf = function (e, t, r, s) {
      r !== s && (t.flags |= 4);
    }));
  function br(e, t) {
    if (!we)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null;) (t.alternate !== null && (r = t), (t = t.sibling));
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var s = null; r !== null;) (r.alternate !== null && (s = r), (r = r.sibling));
          s === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      s = 0;
    if (t)
      for (var l = e.child; l !== null;)
        ((r |= l.lanes | l.childLanes),
          (s |= l.subtreeFlags & 14680064),
          (s |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null;)
        ((r |= l.lanes | l.childLanes),
          (s |= l.subtreeFlags),
          (s |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= s), (e.childLanes = r), t);
  }
  function Ug(e, t, r) {
    var s = t.pendingProps;
    switch ((Qs(t), t.tag)) {
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
        return (He(t), null);
      case 1:
        return (et(t.type) && Yi(), He(t), null);
      case 3:
        return (
          (s = t.stateNode),
          rr(),
          ye(be),
          ye(Ue),
          sl(),
          s.pendingContext && ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (eo(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), kt !== null && (Il(kt), (kt = null)))),
          Cl(e, t),
          He(t),
          null
        );
      case 5:
        il(t);
        var l = Cn(Xr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (jf(e, t, r, s, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return (He(t), null);
          }
          if (((e = Cn(Lt.current)), eo(t))) {
            ((s = t.stateNode), (r = t.type));
            var u = t.memoizedProps;
            switch (((s[Mt] = t), (s[Hr] = u), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                (ge("cancel", s), ge("close", s));
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Br.length; l++) ge(Br[l], s);
                break;
              case "source":
                ge("error", s);
                break;
              case "img":
              case "image":
              case "link":
                (ge("error", s), ge("load", s));
                break;
              case "details":
                ge("toggle", s);
                break;
              case "input":
                (cu(s, u), ge("invalid", s));
                break;
              case "select":
                ((s._wrapperState = { wasMultiple: !!u.multiple }), ge("invalid", s));
                break;
              case "textarea":
                (hu(s, u), ge("invalid", s));
            }
            (os(r, u), (l = null));
            for (var h in u)
              if (u.hasOwnProperty(h)) {
                var y = u[h];
                h === "children"
                  ? typeof y == "string"
                    ? s.textContent !== y &&
                      (u.suppressHydrationWarning !== !0 && Gi(s.textContent, y, e),
                      (l = ["children", y]))
                    : typeof y == "number" &&
                      s.textContent !== "" + y &&
                      (u.suppressHydrationWarning !== !0 && Gi(s.textContent, y, e),
                      (l = ["children", "" + y]))
                  : c.hasOwnProperty(h) && y != null && h === "onScroll" && ge("scroll", s);
              }
            switch (r) {
              case "input":
                (Pi(s), du(s, u, !0));
                break;
              case "textarea":
                (Pi(s), mu(s));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = Qi);
            }
            ((s = l), (t.updateQueue = s), s !== null && (t.flags |= 4));
          } else {
            ((h = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = gu(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = h.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof s.is == "string"
                    ? (e = h.createElement(r, { is: s.is }))
                    : ((e = h.createElement(r)),
                      r === "select" &&
                        ((h = e), s.multiple ? (h.multiple = !0) : s.size && (h.size = s.size)))
                : (e = h.createElementNS(e, r)),
              (e[Mt] = t),
              (e[Hr] = s),
              Df(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = ss(r, s)), r)) {
                case "dialog":
                  (ge("cancel", e), ge("close", e), (l = s));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ge("load", e), (l = s));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Br.length; l++) ge(Br[l], e);
                  l = s;
                  break;
                case "source":
                  (ge("error", e), (l = s));
                  break;
                case "img":
                case "image":
                case "link":
                  (ge("error", e), ge("load", e), (l = s));
                  break;
                case "details":
                  (ge("toggle", e), (l = s));
                  break;
                case "input":
                  (cu(e, s), (l = es(e, s)), ge("invalid", e));
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!s.multiple }),
                    (l = B({}, s, { value: void 0 })),
                    ge("invalid", e));
                  break;
                case "textarea":
                  (hu(e, s), (l = rs(e, s)), ge("invalid", e));
                  break;
                default:
                  l = s;
              }
              (os(r, l), (y = l));
              for (u in y)
                if (y.hasOwnProperty(u)) {
                  var x = y[u];
                  u === "style"
                    ? xu(e, x)
                    : u === "dangerouslySetInnerHTML"
                      ? ((x = x ? x.__html : void 0), x != null && yu(e, x))
                      : u === "children"
                        ? typeof x == "string"
                          ? (r !== "textarea" || x !== "") && Sr(e, x)
                          : typeof x == "number" && Sr(e, "" + x)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (c.hasOwnProperty(u)
                            ? x != null && u === "onScroll" && ge("scroll", e)
                            : x != null && K(e, u, x, h));
                }
              switch (r) {
                case "input":
                  (Pi(e), du(e, s, !1));
                  break;
                case "textarea":
                  (Pi(e), mu(e));
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + de(s.value));
                  break;
                case "select":
                  ((e.multiple = !!s.multiple),
                    (u = s.value),
                    u != null
                      ? Fn(e, !!s.multiple, u, !1)
                      : s.defaultValue != null && Fn(e, !!s.multiple, s.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Qi);
              }
              switch (r) {
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
        return (He(t), null);
      case 6:
        if (e && t.stateNode != null) Mf(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
          if (((r = Cn(Xr.current)), Cn(Lt.current), eo(t))) {
            if (
              ((s = t.stateNode),
              (r = t.memoizedProps),
              (s[Mt] = t),
              (u = s.nodeValue !== r) && ((e = at), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Gi(s.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Gi(s.nodeValue, r, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s)),
              (s[Mt] = t),
              (t.stateNode = s));
        }
        return (He(t), null);
      case 13:
        if (
          (ye(Pe),
          (s = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (we && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Vc(), bn(), (t.flags |= 98560), (u = !1));
          else if (((u = eo(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(o(317));
              u[Mt] = t;
            } else (bn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (He(t), (u = !1));
          } else (kt !== null && (Il(kt), (kt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((s = s !== null),
            s !== (e !== null && e.memoizedState !== null) &&
              s &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Pe.current & 1) !== 0 ? _e === 0 && (_e = 3) : zl())),
            t.updateQueue !== null && (t.flags |= 4),
            He(t),
            null);
      case 4:
        return (rr(), Cl(e, t), e === null && Ur(t.stateNode.containerInfo), He(t), null);
      case 10:
        return (bs(t.type._context), He(t), null);
      case 17:
        return (et(t.type) && Yi(), He(t), null);
      case 19:
        if ((ye(Pe), (u = t.memoizedState), u === null)) return (He(t), null);
        if (((s = (t.flags & 128) !== 0), (h = u.rendering), h === null))
          if (s) br(u, !1);
          else {
            if (_e !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((h = so(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      br(u, !1),
                      s = h.updateQueue,
                      s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      s = r,
                      r = t.child;
                    r !== null;
                  )
                    ((u = r),
                      (e = s),
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
              De() > lr &&
              ((t.flags |= 128), (s = !0), br(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = so(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                br(u, !0),
                u.tail === null && u.tailMode === "hidden" && !h.alternate && !we)
              )
                return (He(t), null);
            } else
              2 * De() - u.renderingStartTime > lr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (s = !0), br(u, !1), (t.lanes = 4194304));
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
            me(Pe, s ? (r & 1) | 2 : r & 1),
            t)
          : (He(t), null);
      case 22:
      case 23:
        return (
          Fl(),
          (s = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
          s && (t.mode & 1) !== 0
            ? (ct & 1073741824) !== 0 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : He(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Wg(e, t) {
    switch ((Qs(t), t.tag)) {
      case 1:
        return (
          et(t.type) && Yi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          rr(),
          ye(be),
          ye(Ue),
          sl(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (il(t), null);
      case 13:
        if ((ye(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(o(340));
          bn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ye(Pe), null);
      case 4:
        return (rr(), null);
      case 10:
        return (bs(t.type._context), null);
      case 22:
      case 23:
        return (Fl(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var go = !1,
    $e = !1,
    Hg = typeof WeakSet == "function" ? WeakSet : Set,
    U = null;
  function or(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (s) {
          Ae(e, t, s);
        }
      else r.current = null;
  }
  function El(e, t, r) {
    try {
      r();
    } catch (s) {
      Ae(e, t, s);
    }
  }
  var Lf = !1;
  function $g(e, t) {
    if (((Fs = Ni), (e = uc()), js(e))) {
      if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var s = r.getSelection && r.getSelection();
          if (s && s.rangeCount !== 0) {
            r = s.anchorNode;
            var l = s.anchorOffset,
              u = s.focusNode;
            s = s.focusOffset;
            try {
              (r.nodeType, u.nodeType);
            } catch {
              r = null;
              break e;
            }
            var h = 0,
              y = -1,
              x = -1,
              A = 0,
              L = 0,
              V = e,
              D = null;
            t: for (;;) {
              for (
                var z;
                V !== r || (l !== 0 && V.nodeType !== 3) || (y = h + l),
                  V !== u || (s !== 0 && V.nodeType !== 3) || (x = h + s),
                  V.nodeType === 3 && (h += V.nodeValue.length),
                  (z = V.firstChild) !== null;
              )
                ((D = V), (V = z));
              for (;;) {
                if (V === e) break t;
                if (
                  (D === r && ++A === l && (y = h),
                  D === u && ++L === s && (x = h),
                  (z = V.nextSibling) !== null)
                )
                  break;
                ((V = D), (D = V.parentNode));
              }
              V = z;
            }
            r = y === -1 || x === -1 ? null : { start: y, end: x };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (zs = { focusedElem: e, selectionRange: r }, Ni = !1, U = t; U !== null;)
      if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (U = e));
      else
        for (; U !== null;) {
          t = U;
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
                    var $ = H.memoizedProps,
                      je = H.memoizedState,
                      C = t.stateNode,
                      S = C.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? $ : Ct(t.type, $),
                        je,
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
                  throw Error(o(163));
              }
          } catch (I) {
            Ae(t, t.return, I);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (U = e));
            break;
          }
          U = t.return;
        }
    return ((H = Lf), (Lf = !1), H);
  }
  function ei(e, t, r) {
    var s = t.updateQueue;
    if (((s = s !== null ? s.lastEffect : null), s !== null)) {
      var l = (s = s.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          ((l.destroy = void 0), u !== void 0 && El(t, r, u));
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function yo(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var s = r.create;
          r.destroy = s();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Al(e) {
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
  function Vf(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Vf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Mt], delete t[Hr], delete t[Hs], delete t[Eg], delete t[Ag])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function _f(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Nf(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || _f(e.return)) return null;
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
  function Rl(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
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
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Rl(e, t, r), e = e.sibling; e !== null;) (Rl(e, t, r), (e = e.sibling));
  }
  function Dl(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Dl(e, t, r), e = e.sibling; e !== null;) (Dl(e, t, r), (e = e.sibling));
  }
  var Fe = null,
    Et = !1;
  function an(e, t, r) {
    for (r = r.child; r !== null;) (If(e, t, r), (r = r.sibling));
  }
  function If(e, t, r) {
    if (jt && typeof jt.onCommitFiberUnmount == "function")
      try {
        jt.onCommitFiberUnmount(Di, r);
      } catch {}
    switch (r.tag) {
      case 5:
        $e || or(r, t);
      case 6:
        var s = Fe,
          l = Et;
        ((Fe = null),
          an(e, t, r),
          (Fe = s),
          (Et = l),
          Fe !== null &&
            (Et
              ? ((e = Fe),
                (r = r.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
              : Fe.removeChild(r.stateNode)));
        break;
      case 18:
        Fe !== null &&
          (Et
            ? ((e = Fe),
              (r = r.stateNode),
              e.nodeType === 8 ? Ws(e.parentNode, r) : e.nodeType === 1 && Ws(e, r),
              Lr(e))
            : Ws(Fe, r.stateNode));
        break;
      case 4:
        ((s = Fe),
          (l = Et),
          (Fe = r.stateNode.containerInfo),
          (Et = !0),
          an(e, t, r),
          (Fe = s),
          (Et = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$e && ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))) {
          l = s = s.next;
          do {
            var u = l,
              h = u.destroy;
            ((u = u.tag),
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && El(r, t, h),
              (l = l.next));
          } while (l !== s);
        }
        an(e, t, r);
        break;
      case 1:
        if (!$e && (or(r, t), (s = r.stateNode), typeof s.componentWillUnmount == "function"))
          try {
            ((s.props = r.memoizedProps), (s.state = r.memoizedState), s.componentWillUnmount());
          } catch (y) {
            Ae(r, t, y);
          }
        an(e, t, r);
        break;
      case 21:
        an(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? (($e = (s = $e) || r.memoizedState !== null), an(e, t, r), ($e = s))
          : an(e, t, r);
        break;
      default:
        an(e, t, r);
    }
  }
  function Of(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Hg()),
        t.forEach(function (s) {
          var l = bg.bind(null, e, s);
          r.has(s) || (r.add(s), s.then(l, l));
        }));
    }
  }
  function At(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var s = 0; s < r.length; s++) {
        var l = r[s];
        try {
          var u = e,
            h = t,
            y = h;
          e: for (; y !== null;) {
            switch (y.tag) {
              case 5:
                ((Fe = y.stateNode), (Et = !1));
                break e;
              case 3:
                ((Fe = y.stateNode.containerInfo), (Et = !0));
                break e;
              case 4:
                ((Fe = y.stateNode.containerInfo), (Et = !0));
                break e;
            }
            y = y.return;
          }
          if (Fe === null) throw Error(o(160));
          (If(u, h, l), (Fe = null), (Et = !1));
          var x = l.alternate;
          (x !== null && (x.return = null), (l.return = null));
        } catch (A) {
          Ae(l, t, A);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (Ff(t, e), (t = t.sibling));
  }
  function Ff(e, t) {
    var r = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((At(t, e), _t(e), s & 4)) {
          try {
            (ei(3, e, e.return), yo(3, e));
          } catch ($) {
            Ae(e, e.return, $);
          }
          try {
            ei(5, e, e.return);
          } catch ($) {
            Ae(e, e.return, $);
          }
        }
        break;
      case 1:
        (At(t, e), _t(e), s & 512 && r !== null && or(r, r.return));
        break;
      case 5:
        if ((At(t, e), _t(e), s & 512 && r !== null && or(r, r.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Sr(l, "");
          } catch ($) {
            Ae(e, e.return, $);
          }
        }
        if (s & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            h = r !== null ? r.memoizedProps : u,
            y = e.type,
            x = e.updateQueue;
          if (((e.updateQueue = null), x !== null))
            try {
              (y === "input" && u.type === "radio" && u.name != null && fu(l, u), ss(y, h));
              var A = ss(y, u);
              for (h = 0; h < x.length; h += 2) {
                var L = x[h],
                  V = x[h + 1];
                L === "style"
                  ? xu(l, V)
                  : L === "dangerouslySetInnerHTML"
                    ? yu(l, V)
                    : L === "children"
                      ? Sr(l, V)
                      : K(l, L, V, A);
              }
              switch (y) {
                case "input":
                  ts(l, u);
                  break;
                case "textarea":
                  pu(l, u);
                  break;
                case "select":
                  var D = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var z = u.value;
                  z != null
                    ? Fn(l, !!u.multiple, z, !1)
                    : D !== !!u.multiple &&
                      (u.defaultValue != null
                        ? Fn(l, !!u.multiple, u.defaultValue, !0)
                        : Fn(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[Hr] = u;
            } catch ($) {
              Ae(e, e.return, $);
            }
        }
        break;
      case 6:
        if ((At(t, e), _t(e), s & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch ($) {
            Ae(e, e.return, $);
          }
        }
        break;
      case 3:
        if ((At(t, e), _t(e), s & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            Lr(t.containerInfo);
          } catch ($) {
            Ae(e, e.return, $);
          }
        break;
      case 4:
        (At(t, e), _t(e));
        break;
      case 13:
        (At(t, e),
          _t(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (Ll = De())),
          s & 4 && Of(e));
        break;
      case 22:
        if (
          ((L = r !== null && r.memoizedState !== null),
          e.mode & 1 ? (($e = (A = $e) || L), At(t, e), ($e = A)) : At(t, e),
          _t(e),
          s & 8192)
        ) {
          if (
            ((A = e.memoizedState !== null), (e.stateNode.isHidden = A) && !L && (e.mode & 1) !== 0)
          )
            for (U = e, L = e.child; L !== null;) {
              for (V = U = L; U !== null;) {
                switch (((D = U), (z = D.child), D.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ei(4, D, D.return);
                    break;
                  case 1:
                    or(D, D.return);
                    var H = D.stateNode;
                    if (typeof H.componentWillUnmount == "function") {
                      ((s = D), (r = D.return));
                      try {
                        ((t = s),
                          (H.props = t.memoizedProps),
                          (H.state = t.memoizedState),
                          H.componentWillUnmount());
                      } catch ($) {
                        Ae(s, r, $);
                      }
                    }
                    break;
                  case 5:
                    or(D, D.return);
                    break;
                  case 22:
                    if (D.memoizedState !== null) {
                      Uf(V);
                      continue;
                    }
                }
                z !== null ? ((z.return = D), (U = z)) : Uf(V);
              }
              L = L.sibling;
            }
          e: for (L = null, V = e; ;) {
            if (V.tag === 5) {
              if (L === null) {
                L = V;
                try {
                  ((l = V.stateNode),
                    A
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((y = V.stateNode),
                        (x = V.memoizedProps.style),
                        (h = x != null && x.hasOwnProperty("display") ? x.display : null),
                        (y.style.display = vu("display", h))));
                } catch ($) {
                  Ae(e, e.return, $);
                }
              }
            } else if (V.tag === 6) {
              if (L === null)
                try {
                  V.stateNode.nodeValue = A ? "" : V.memoizedProps;
                } catch ($) {
                  Ae(e, e.return, $);
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
              (L === V && (L = null), (V = V.return));
            }
            (L === V && (L = null), (V.sibling.return = V.return), (V = V.sibling));
          }
        }
        break;
      case 19:
        (At(t, e), _t(e), s & 4 && Of(e));
        break;
      case 21:
        break;
      default:
        (At(t, e), _t(e));
    }
  }
  function _t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null;) {
            if (_f(r)) {
              var s = r;
              break e;
            }
            r = r.return;
          }
          throw Error(o(160));
        }
        switch (s.tag) {
          case 5:
            var l = s.stateNode;
            s.flags & 32 && (Sr(l, ""), (s.flags &= -33));
            var u = Nf(e);
            Dl(e, u, l);
            break;
          case 3:
          case 4:
            var h = s.stateNode.containerInfo,
              y = Nf(e);
            Rl(e, y, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (x) {
        Ae(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Kg(e, t, r) {
    ((U = e), zf(e));
  }
  function zf(e, t, r) {
    for (var s = (e.mode & 1) !== 0; U !== null;) {
      var l = U,
        u = l.child;
      if (l.tag === 22 && s) {
        var h = l.memoizedState !== null || go;
        if (!h) {
          var y = l.alternate,
            x = (y !== null && y.memoizedState !== null) || $e;
          y = go;
          var A = $e;
          if (((go = h), ($e = x) && !A))
            for (U = l; U !== null;)
              ((h = U),
                (x = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Wf(l)
                  : x !== null
                    ? ((x.return = h), (U = x))
                    : Wf(l));
          for (; u !== null;) ((U = u), zf(u), (u = u.sibling));
          ((U = l), (go = y), ($e = A));
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
                $e || yo(5, t);
                break;
              case 1:
                var s = t.stateNode;
                if (t.flags & 4 && !$e)
                  if (r === null) s.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? r.memoizedProps : Ct(t.type, r.memoizedProps);
                    s.componentDidUpdate(l, r.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = t.updateQueue;
                u !== null && Bc(t, u, s);
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
                var y = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = y;
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
                  var A = t.alternate;
                  if (A !== null) {
                    var L = A.memoizedState;
                    if (L !== null) {
                      var V = L.dehydrated;
                      V !== null && Lr(V);
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
          $e || (t.flags & 512 && Al(t));
        } catch (D) {
          Ae(t, t.return, D);
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
              yo(4, t);
            } catch (x) {
              Ae(t, r, x);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var l = t.return;
              try {
                s.componentDidMount();
              } catch (x) {
                Ae(t, l, x);
              }
            }
            var u = t.return;
            try {
              Al(t);
            } catch (x) {
              Ae(t, u, x);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Al(t);
            } catch (x) {
              Ae(t, h, x);
            }
        }
      } catch (x) {
        Ae(t, t.return, x);
      }
      if (t === e) {
        U = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        ((y.return = t.return), (U = y));
        break;
      }
      U = t.return;
    }
  }
  var Gg = Math.ceil,
    vo = te.ReactCurrentDispatcher,
    jl = te.ReactCurrentOwner,
    yt = te.ReactCurrentBatchConfig,
    le = 0,
    Ie = null,
    Le = null,
    ze = 0,
    ct = 0,
    sr = nn(0),
    _e = 0,
    ti = null,
    An = 0,
    xo = 0,
    Ml = 0,
    ni = null,
    nt = null,
    Ll = 0,
    lr = 1 / 0,
    $t = null,
    wo = !1,
    Vl = null,
    un = null,
    So = !1,
    cn = null,
    To = 0,
    ri = 0,
    _l = null,
    Po = -1,
    ko = 0;
  function Ze() {
    return (le & 6) !== 0 ? De() : Po !== -1 ? Po : (Po = De());
  }
  function fn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (le & 2) !== 0 && ze !== 0
        ? ze & -ze
        : Dg.transition !== null
          ? (ko === 0 && (ko = _u()), ko)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Hu(e.type))), e);
  }
  function Rt(e, t, r, s) {
    if (50 < ri) throw ((ri = 0), (_l = null), Error(o(185)));
    (Ar(e, r, s),
      ((le & 2) === 0 || e !== Ie) &&
        (e === Ie && ((le & 2) === 0 && (xo |= r), _e === 4 && dn(e, ze)),
        rt(e, s),
        r === 1 && le === 0 && (t.mode & 1) === 0 && ((lr = De() + 500), qi && on())));
  }
  function rt(e, t) {
    var r = e.callbackNode;
    Dm(e, t);
    var s = Li(e, e === Ie ? ze : 0);
    if (s === 0) (r !== null && Mu(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = s & -s), e.callbackPriority !== t)) {
      if ((r != null && Mu(r), t === 1))
        (e.tag === 0 ? Rg($f.bind(null, e)) : Rc($f.bind(null, e)),
          kg(function () {
            (le & 6) === 0 && on();
          }),
          (r = null));
      else {
        switch (Nu(s)) {
          case 1:
            r = hs;
            break;
          case 4:
            r = Lu;
            break;
          case 16:
            r = Ri;
            break;
          case 536870912:
            r = Vu;
            break;
          default:
            r = Ri;
        }
        r = Jf(r, Hf.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function Hf(e, t) {
    if (((Po = -1), (ko = 0), (le & 6) !== 0)) throw Error(o(327));
    var r = e.callbackNode;
    if (ar() && e.callbackNode !== r) return null;
    var s = Li(e, e === Ie ? ze : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Co(e, s);
    else {
      t = s;
      var l = le;
      le |= 2;
      var u = Gf();
      (Ie !== e || ze !== t) && (($t = null), (lr = De() + 500), Dn(e, t));
      do
        try {
          Yg();
          break;
        } catch (y) {
          Kf(e, y);
        }
      while (!0);
      (Js(), (vo.current = u), (le = l), Le !== null ? (t = 0) : ((Ie = null), (ze = 0), (t = _e)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = ps(e)), l !== 0 && ((s = l), (t = Nl(e, l)))), t === 1))
        throw ((r = ti), Dn(e, 0), dn(e, s), rt(e, De()), r);
      if (t === 6) dn(e, s);
      else {
        if (
          ((l = e.current.alternate),
          (s & 30) === 0 &&
            !Qg(l) &&
            ((t = Co(e, s)),
            t === 2 && ((u = ps(e)), u !== 0 && ((s = u), (t = Nl(e, u)))),
            t === 1))
        )
          throw ((r = ti), Dn(e, 0), dn(e, s), rt(e, De()), r);
        switch (((e.finishedWork = l), (e.finishedLanes = s), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            jn(e, nt, $t);
            break;
          case 3:
            if ((dn(e, s), (s & 130023424) === s && ((t = Ll + 500 - De()), 10 < t))) {
              if (Li(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & s) !== s)) {
                (Ze(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Us(jn.bind(null, e, nt, $t), t);
              break;
            }
            jn(e, nt, $t);
            break;
          case 4:
            if ((dn(e, s), (s & 4194240) === s)) break;
            for (t = e.eventTimes, l = -1; 0 < s;) {
              var h = 31 - Tt(s);
              ((u = 1 << h), (h = t[h]), h > l && (l = h), (s &= ~u));
            }
            if (
              ((s = l),
              (s = De() - s),
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
                            : 1960 * Gg(s / 1960)) - s),
              10 < s)
            ) {
              e.timeoutHandle = Us(jn.bind(null, e, nt, $t), s);
              break;
            }
            jn(e, nt, $t);
            break;
          case 5:
            jn(e, nt, $t);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return (rt(e, De()), e.callbackNode === r ? Hf.bind(null, e) : null);
  }
  function Nl(e, t) {
    var r = ni;
    return (
      e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256),
      (e = Co(e, t)),
      e !== 2 && ((t = nt), (nt = r), t !== null && Il(t)),
      e
    );
  }
  function Il(e) {
    nt === null ? (nt = e) : nt.push.apply(nt, e);
  }
  function Qg(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var s = 0; s < r.length; s++) {
            var l = r[s],
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
  function dn(e, t) {
    for (
      t &= ~Ml, t &= ~xo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var r = 31 - Tt(t),
        s = 1 << r;
      ((e[r] = -1), (t &= ~s));
    }
  }
  function $f(e) {
    if ((le & 6) !== 0) throw Error(o(327));
    ar();
    var t = Li(e, 0);
    if ((t & 1) === 0) return (rt(e, De()), null);
    var r = Co(e, t);
    if (e.tag !== 0 && r === 2) {
      var s = ps(e);
      s !== 0 && ((t = s), (r = Nl(e, s)));
    }
    if (r === 1) throw ((r = ti), Dn(e, 0), dn(e, t), rt(e, De()), r);
    if (r === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      jn(e, nt, $t),
      rt(e, De()),
      null
    );
  }
  function Ol(e, t) {
    var r = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      ((le = r), le === 0 && ((lr = De() + 500), qi && on()));
    }
  }
  function Rn(e) {
    cn !== null && cn.tag === 0 && (le & 6) === 0 && ar();
    var t = le;
    le |= 1;
    var r = yt.transition,
      s = he;
    try {
      if (((yt.transition = null), (he = 1), e)) return e();
    } finally {
      ((he = s), (yt.transition = r), (le = t), (le & 6) === 0 && on());
    }
  }
  function Fl() {
    ((ct = sr.current), ye(sr));
  }
  function Dn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Pg(r)), Le !== null))
      for (r = Le.return; r !== null;) {
        var s = r;
        switch ((Qs(s), s.tag)) {
          case 1:
            ((s = s.type.childContextTypes), s != null && Yi());
            break;
          case 3:
            (rr(), ye(be), ye(Ue), sl());
            break;
          case 5:
            il(s);
            break;
          case 4:
            rr();
            break;
          case 13:
            ye(Pe);
            break;
          case 19:
            ye(Pe);
            break;
          case 10:
            bs(s.type._context);
            break;
          case 22:
          case 23:
            Fl();
        }
        r = r.return;
      }
    if (
      ((Ie = e),
      (Le = e = hn(e.current, null)),
      (ze = ct = t),
      (_e = 0),
      (ti = null),
      (Ml = xo = An = 0),
      (nt = ni = null),
      kn !== null)
    ) {
      for (t = 0; t < kn.length; t++)
        if (((r = kn[t]), (s = r.interleaved), s !== null)) {
          r.interleaved = null;
          var l = s.next,
            u = r.pending;
          if (u !== null) {
            var h = u.next;
            ((u.next = l), (s.next = h));
          }
          r.pending = s;
        }
      kn = null;
    }
    return e;
  }
  function Kf(e, t) {
    do {
      var r = Le;
      try {
        if ((Js(), (lo.current = fo), ao)) {
          for (var s = ke.memoizedState; s !== null;) {
            var l = s.queue;
            (l !== null && (l.pending = null), (s = s.next));
          }
          ao = !1;
        }
        if (
          ((En = 0),
          (Ne = Ve = ke = null),
          (Yr = !1),
          (Zr = 0),
          (jl.current = null),
          r === null || r.return === null)
        ) {
          ((_e = 1), (ti = t), (Le = null));
          break;
        }
        e: {
          var u = e,
            h = r.return,
            y = r,
            x = t;
          if (
            ((t = ze),
            (y.flags |= 32768),
            x !== null && typeof x == "object" && typeof x.then == "function")
          ) {
            var A = x,
              L = y,
              V = L.tag;
            if ((L.mode & 1) === 0 && (V === 0 || V === 11 || V === 15)) {
              var D = L.alternate;
              D
                ? ((L.updateQueue = D.updateQueue),
                  (L.memoizedState = D.memoizedState),
                  (L.lanes = D.lanes))
                : ((L.updateQueue = null), (L.memoizedState = null));
            }
            var z = gf(h);
            if (z !== null) {
              ((z.flags &= -257), yf(z, h, y, u, t), z.mode & 1 && mf(u, A, t), (t = z), (x = A));
              var H = t.updateQueue;
              if (H === null) {
                var $ = new Set();
                ($.add(x), (t.updateQueue = $));
              } else H.add(x);
              break e;
            } else {
              if ((t & 1) === 0) {
                (mf(u, A, t), zl());
                break e;
              }
              x = Error(o(426));
            }
          } else if (we && y.mode & 1) {
            var je = gf(h);
            if (je !== null) {
              ((je.flags & 65536) === 0 && (je.flags |= 256), yf(je, h, y, u, t), Zs(ir(x, y)));
              break e;
            }
          }
          ((u = x = ir(x, y)),
            _e !== 4 && (_e = 2),
            ni === null ? (ni = [u]) : ni.push(u),
            (u = h));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var C = hf(u, x, t);
                zc(u, C);
                break e;
              case 1:
                y = x;
                var S = u.type,
                  E = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (E !== null &&
                      typeof E.componentDidCatch == "function" &&
                      (un === null || !un.has(E))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var I = pf(u, y, t);
                  zc(u, I);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Xf(r);
      } catch (G) {
        ((t = G), Le === r && r !== null && (Le = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Gf() {
    var e = vo.current;
    return ((vo.current = fo), e === null ? fo : e);
  }
  function zl() {
    ((_e === 0 || _e === 3 || _e === 2) && (_e = 4),
      Ie === null || ((An & 268435455) === 0 && (xo & 268435455) === 0) || dn(Ie, ze));
  }
  function Co(e, t) {
    var r = le;
    le |= 2;
    var s = Gf();
    (Ie !== e || ze !== t) && (($t = null), Dn(e, t));
    do
      try {
        Xg();
        break;
      } catch (l) {
        Kf(e, l);
      }
    while (!0);
    if ((Js(), (le = r), (vo.current = s), Le !== null)) throw Error(o(261));
    return ((Ie = null), (ze = 0), _e);
  }
  function Xg() {
    for (; Le !== null;) Qf(Le);
  }
  function Yg() {
    for (; Le !== null && !wm();) Qf(Le);
  }
  function Qf(e) {
    var t = qf(e.alternate, e, ct);
    ((e.memoizedProps = e.pendingProps), t === null ? Xf(e) : (Le = t), (jl.current = null));
  }
  function Xf(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Ug(r, t, ct)), r !== null)) {
          Le = r;
          return;
        }
      } else {
        if (((r = Wg(r, t)), r !== null)) {
          ((r.flags &= 32767), (Le = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((_e = 6), (Le = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    _e === 0 && (_e = 5);
  }
  function jn(e, t, r) {
    var s = he,
      l = yt.transition;
    try {
      ((yt.transition = null), (he = 1), Zg(e, t, r, s));
    } finally {
      ((yt.transition = l), (he = s));
    }
    return null;
  }
  function Zg(e, t, r, s) {
    do ar();
    while (cn !== null);
    if ((le & 6) !== 0) throw Error(o(327));
    r = e.finishedWork;
    var l = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(o(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = r.lanes | r.childLanes;
    if (
      (jm(e, u),
      e === Ie && ((Le = Ie = null), (ze = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        So ||
        ((So = !0),
        Jf(Ri, function () {
          return (ar(), null);
        })),
      (u = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = yt.transition), (yt.transition = null));
      var h = he;
      he = 1;
      var y = le;
      ((le |= 4),
        (jl.current = null),
        $g(e, r),
        Ff(r, e),
        gg(zs),
        (Ni = !!Fs),
        (zs = Fs = null),
        (e.current = r),
        Kg(r),
        Sm(),
        (le = y),
        (he = h),
        (yt.transition = u));
    } else e.current = r;
    if (
      (So && ((So = !1), (cn = e), (To = l)),
      (u = e.pendingLanes),
      u === 0 && (un = null),
      km(r.stateNode),
      rt(e, De()),
      t !== null)
    )
      for (s = e.onRecoverableError, r = 0; r < t.length; r++)
        ((l = t[r]), s(l.value, { componentStack: l.stack, digest: l.digest }));
    if (wo) throw ((wo = !1), (e = Vl), (Vl = null), e);
    return (
      (To & 1) !== 0 && e.tag !== 0 && ar(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === _l ? ri++ : ((ri = 0), (_l = e))) : (ri = 0),
      on(),
      null
    );
  }
  function ar() {
    if (cn !== null) {
      var e = Nu(To),
        t = yt.transition,
        r = he;
      try {
        if (((yt.transition = null), (he = 16 > e ? 16 : e), cn === null)) var s = !1;
        else {
          if (((e = cn), (cn = null), (To = 0), (le & 6) !== 0)) throw Error(o(331));
          var l = le;
          for (le |= 4, U = e.current; U !== null;) {
            var u = U,
              h = u.child;
            if ((U.flags & 16) !== 0) {
              var y = u.deletions;
              if (y !== null) {
                for (var x = 0; x < y.length; x++) {
                  var A = y[x];
                  for (U = A; U !== null;) {
                    var L = U;
                    switch (L.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ei(8, L, u);
                    }
                    var V = L.child;
                    if (V !== null) ((V.return = L), (U = V));
                    else
                      for (; U !== null;) {
                        L = U;
                        var D = L.sibling,
                          z = L.return;
                        if ((Vf(L), L === A)) {
                          U = null;
                          break;
                        }
                        if (D !== null) {
                          ((D.return = z), (U = D));
                          break;
                        }
                        U = z;
                      }
                  }
                }
                var H = u.alternate;
                if (H !== null) {
                  var $ = H.child;
                  if ($ !== null) {
                    H.child = null;
                    do {
                      var je = $.sibling;
                      (($.sibling = null), ($ = je));
                    } while ($ !== null);
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
                      ei(9, u, u.return);
                  }
                var C = u.sibling;
                if (C !== null) {
                  ((C.return = u.return), (U = C));
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
                if (((y = U), (y.flags & 2048) !== 0))
                  try {
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yo(9, y);
                    }
                  } catch (G) {
                    Ae(y, y.return, G);
                  }
                if (y === h) {
                  U = null;
                  break e;
                }
                var I = y.sibling;
                if (I !== null) {
                  ((I.return = y.return), (U = I));
                  break e;
                }
                U = y.return;
              }
          }
          if (((le = l), on(), jt && typeof jt.onPostCommitFiberRoot == "function"))
            try {
              jt.onPostCommitFiberRoot(Di, e);
            } catch {}
          s = !0;
        }
        return s;
      } finally {
        ((he = r), (yt.transition = t));
      }
    }
    return !1;
  }
  function Yf(e, t, r) {
    ((t = ir(r, t)),
      (t = hf(e, t, 1)),
      (e = ln(e, t, 1)),
      (t = Ze()),
      e !== null && (Ar(e, 1, t), rt(e, t)));
  }
  function Ae(e, t, r) {
    if (e.tag === 3) Yf(e, e, r);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Yf(t, e, r);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" && (un === null || !un.has(s)))
          ) {
            ((e = ir(r, e)),
              (e = pf(t, e, 1)),
              (t = ln(t, e, 1)),
              (e = Ze()),
              t !== null && (Ar(t, 1, e), rt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function qg(e, t, r) {
    var s = e.pingCache;
    (s !== null && s.delete(t),
      (t = Ze()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Ie === e &&
        (ze & r) === r &&
        (_e === 4 || (_e === 3 && (ze & 130023424) === ze && 500 > De() - Ll)
          ? Dn(e, 0)
          : (Ml |= r)),
      rt(e, t));
  }
  function Zf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Mi), (Mi <<= 1), (Mi & 130023424) === 0 && (Mi = 4194304)));
    var r = Ze();
    ((e = Ut(e, t)), e !== null && (Ar(e, t, r), rt(e, r)));
  }
  function Jg(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), Zf(e, r));
  }
  function bg(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode,
          l = e.memoizedState;
        l !== null && (r = l.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    (s !== null && s.delete(t), Zf(e, r));
  }
  var qf;
  qf = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || be.current) tt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((tt = !1), Bg(e, t, r));
        tt = (e.flags & 131072) !== 0;
      }
    else ((tt = !1), we && (t.flags & 1048576) !== 0 && Dc(t, bi, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var s = t.type;
        (mo(e, t), (e = t.pendingProps));
        var l = Zn(t, Ue.current);
        (nr(t, r), (l = ul(null, t, s, e, l, r)));
        var u = cl();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              et(s) ? ((u = !0), Zi(t)) : (u = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              nl(t),
              (l.updater = ho),
              (t.stateNode = l),
              (l._reactInternals = t),
              gl(t, s, e, r),
              (t = wl(null, t, s, !0, u, r)))
            : ((t.tag = 0), we && u && Gs(t), Ye(null, t, l, r), (t = t.child)),
          t
        );
      case 16:
        s = t.elementType;
        e: {
          switch (
            (mo(e, t),
            (e = t.pendingProps),
            (l = s._init),
            (s = l(s._payload)),
            (t.type = s),
            (l = t.tag = ty(s)),
            (e = Ct(s, e)),
            l)
          ) {
            case 0:
              t = xl(null, t, s, e, r);
              break e;
            case 1:
              t = Pf(null, t, s, e, r);
              break e;
            case 11:
              t = vf(null, t, s, e, r);
              break e;
            case 14:
              t = xf(null, t, s, Ct(s.type, e), r);
              break e;
          }
          throw Error(o(306, s, ""));
        }
        return t;
      case 0:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : Ct(s, l)),
          xl(e, t, s, l, r)
        );
      case 1:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : Ct(s, l)),
          Pf(e, t, s, l, r)
        );
      case 3:
        e: {
          if ((kf(t), e === null)) throw Error(o(387));
          ((s = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            Fc(e, t),
            oo(t, s, null, r));
          var h = t.memoizedState;
          if (((s = h.element), u.isDehydrated))
            if (
              ((u = {
                element: s,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              ((l = ir(Error(o(423)), t)), (t = Cf(e, t, s, r, l)));
              break e;
            } else if (s !== l) {
              ((l = ir(Error(o(424)), t)), (t = Cf(e, t, s, r, l)));
              break e;
            } else
              for (
                ut = tn(t.stateNode.containerInfo.firstChild),
                  at = t,
                  we = !0,
                  kt = null,
                  r = Ic(t, null, s, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((bn(), s === l)) {
              t = Ht(e, t, r);
              break e;
            }
            Ye(e, t, s, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Uc(t),
          e === null && Ys(t),
          (s = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = l.children),
          Bs(s, l) ? (h = null) : u !== null && Bs(s, u) && (t.flags |= 32),
          Tf(e, t),
          Ye(e, t, h, r),
          t.child
        );
      case 6:
        return (e === null && Ys(t), null);
      case 13:
        return Ef(e, t, r);
      case 4:
        return (
          rl(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = er(t, null, s, r)) : Ye(e, t, s, r),
          t.child
        );
      case 11:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : Ct(s, l)),
          vf(e, t, s, l, r)
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
            ((s = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (h = l.value),
            me(no, s._currentValue),
            (s._currentValue = h),
            u !== null)
          )
            if (Pt(u.value, h)) {
              if (u.children === l.children && !be.current) {
                t = Ht(e, t, r);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null;) {
                var y = u.dependencies;
                if (y !== null) {
                  h = u.child;
                  for (var x = y.firstContext; x !== null;) {
                    if (x.context === s) {
                      if (u.tag === 1) {
                        ((x = Wt(-1, r & -r)), (x.tag = 2));
                        var A = u.updateQueue;
                        if (A !== null) {
                          A = A.shared;
                          var L = A.pending;
                          (L === null ? (x.next = x) : ((x.next = L.next), (L.next = x)),
                            (A.pending = x));
                        }
                      }
                      ((u.lanes |= r),
                        (x = u.alternate),
                        x !== null && (x.lanes |= r),
                        el(u.return, r, t),
                        (y.lanes |= r));
                      break;
                    }
                    x = x.next;
                  }
                } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((h = u.return), h === null)) throw Error(o(341));
                  ((h.lanes |= r),
                    (y = h.alternate),
                    y !== null && (y.lanes |= r),
                    el(h, r, t),
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
          (s = t.pendingProps.children),
          nr(t, r),
          (l = mt(l)),
          (s = s(l)),
          (t.flags |= 1),
          Ye(e, t, s, r),
          t.child
        );
      case 14:
        return ((s = t.type), (l = Ct(s, t.pendingProps)), (l = Ct(s.type, l)), xf(e, t, s, l, r));
      case 15:
        return wf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : Ct(s, l)),
          mo(e, t),
          (t.tag = 1),
          et(s) ? ((e = !0), Zi(t)) : (e = !1),
          nr(t, r),
          ff(t, s, l),
          gl(t, s, l, r),
          wl(null, t, s, !0, e, r)
        );
      case 19:
        return Rf(e, t, r);
      case 22:
        return Sf(e, t, r);
    }
    throw Error(o(156, t.tag));
  };
  function Jf(e, t) {
    return ju(e, t);
  }
  function ey(e, t, r, s) {
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
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function vt(e, t, r, s) {
    return new ey(e, t, r, s);
  }
  function Bl(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ty(e) {
    if (typeof e == "function") return Bl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ot)) return 11;
      if (e === St) return 14;
    }
    return 2;
  }
  function hn(e, t) {
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
  function Eo(e, t, r, s, l, u) {
    var h = 2;
    if (((s = e), typeof e == "function")) Bl(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case ae:
          return Mn(r.children, l, u, t);
        case J:
          ((h = 8), (l |= 8));
          break;
        case Te:
          return ((e = vt(12, r, t, l | 2)), (e.elementType = Te), (e.lanes = u), e);
        case Qe:
          return ((e = vt(13, r, t, l)), (e.elementType = Qe), (e.lanes = u), e);
        case Je:
          return ((e = vt(19, r, t, l)), (e.elementType = Je), (e.lanes = u), e);
        case ie:
          return Ao(r, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ee:
                h = 10;
                break e;
              case qe:
                h = 9;
                break e;
              case ot:
                h = 11;
                break e;
              case St:
                h = 14;
                break e;
              case Xe:
                ((h = 16), (s = null));
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return ((t = vt(h, r, t, l)), (t.elementType = e), (t.type = s), (t.lanes = u), t);
  }
  function Mn(e, t, r, s) {
    return ((e = vt(7, e, s, t)), (e.lanes = r), e);
  }
  function Ao(e, t, r, s) {
    return (
      (e = vt(22, e, s, t)),
      (e.elementType = ie),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ul(e, t, r) {
    return ((e = vt(6, e, null, t)), (e.lanes = r), e);
  }
  function Wl(e, t, r) {
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
  function ny(e, t, r, s, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ms(0)),
      (this.expirationTimes = ms(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ms(0)),
      (this.identifierPrefix = s),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Hl(e, t, r, s, l, u, h, y, x) {
    return (
      (e = new ny(e, t, r, y, x)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = vt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: s,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      nl(u),
      e
    );
  }
  function ry(e, t, r) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ne,
      key: s == null ? null : "" + s,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function bf(e) {
    if (!e) return rn;
    e = e._reactInternals;
    e: {
      if (xn(e) !== e || e.tag !== 1) throw Error(o(170));
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
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (et(r)) return Ec(e, r, t);
    }
    return t;
  }
  function ed(e, t, r, s, l, u, h, y, x) {
    return (
      (e = Hl(r, s, !0, e, l, u, h, y, x)),
      (e.context = bf(null)),
      (r = e.current),
      (s = Ze()),
      (l = fn(r)),
      (u = Wt(s, l)),
      (u.callback = t ?? null),
      ln(r, u, l),
      (e.current.lanes = l),
      Ar(e, l, s),
      rt(e, s),
      e
    );
  }
  function Ro(e, t, r, s) {
    var l = t.current,
      u = Ze(),
      h = fn(l);
    return (
      (r = bf(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Wt(u, h)),
      (t.payload = { element: e }),
      (s = s === void 0 ? null : s),
      s !== null && (t.callback = s),
      (e = ln(l, t, h)),
      e !== null && (Rt(e, l, h, u), io(e, l, h)),
      h
    );
  }
  function Do(e) {
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
  function $l(e, t) {
    (td(e, t), (e = e.alternate) && td(e, t));
  }
  function iy() {
    return null;
  }
  var nd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Kl(e) {
    this._internalRoot = e;
  }
  ((jo.prototype.render = Kl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      Ro(e, t, null, null);
    }),
    (jo.prototype.unmount = Kl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Rn(function () {
            Ro(null, e, null, null);
          }),
            (t[Ot] = null));
        }
      }));
  function jo(e) {
    this._internalRoot = e;
  }
  jo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Fu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Jt.length && t !== 0 && t < Jt[r].priority; r++);
      (Jt.splice(r, 0, e), r === 0 && Uu(e));
    }
  };
  function Gl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Mo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function rd() {}
  function oy(e, t, r, s, l) {
    if (l) {
      if (typeof s == "function") {
        var u = s;
        s = function () {
          var A = Do(h);
          u.call(A);
        };
      }
      var h = ed(t, s, e, 0, null, !1, !1, "", rd);
      return (
        (e._reactRootContainer = h),
        (e[Ot] = h.current),
        Ur(e.nodeType === 8 ? e.parentNode : e),
        Rn(),
        h
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof s == "function") {
      var y = s;
      s = function () {
        var A = Do(x);
        y.call(A);
      };
    }
    var x = Hl(e, 0, !1, null, null, !1, !1, "", rd);
    return (
      (e._reactRootContainer = x),
      (e[Ot] = x.current),
      Ur(e.nodeType === 8 ? e.parentNode : e),
      Rn(function () {
        Ro(t, x, r, s);
      }),
      x
    );
  }
  function Lo(e, t, r, s, l) {
    var u = r._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var y = l;
        l = function () {
          var x = Do(h);
          y.call(x);
        };
      }
      Ro(t, h, e, l);
    } else h = oy(r, t, e, l, s);
    return Do(h);
  }
  ((Iu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Er(t.pendingLanes);
          r !== 0 && (gs(t, r | 1), rt(t, De()), (le & 6) === 0 && ((lr = De() + 500), on()));
        }
        break;
      case 13:
        (Rn(function () {
          var s = Ut(e, 1);
          if (s !== null) {
            var l = Ze();
            Rt(s, e, 1, l);
          }
        }),
          $l(e, 1));
    }
  }),
    (ys = function (e) {
      if (e.tag === 13) {
        var t = Ut(e, 134217728);
        if (t !== null) {
          var r = Ze();
          Rt(t, e, 134217728, r);
        }
        $l(e, 134217728);
      }
    }),
    (Ou = function (e) {
      if (e.tag === 13) {
        var t = fn(e),
          r = Ut(e, t);
        if (r !== null) {
          var s = Ze();
          Rt(r, e, t, s);
        }
        $l(e, t);
      }
    }),
    (Fu = function () {
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
    (us = function (e, t, r) {
      switch (t) {
        case "input":
          if ((ts(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode;) r = r.parentNode;
            for (
              r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < r.length;
              t++
            ) {
              var s = r[t];
              if (s !== e && s.form === e.form) {
                var l = Xi(s);
                if (!l) throw Error(o(90));
                (uu(s), ts(s, l));
              }
            }
          }
          break;
        case "textarea":
          pu(e, r);
          break;
        case "select":
          ((t = r.value), t != null && Fn(e, !!r.multiple, t, !1));
      }
    }),
    (Pu = Ol),
    (ku = Rn));
  var sy = { usingClientEntryPoint: !1, Events: [$r, Xn, Xi, Su, Tu, Ol] },
    ii = {
      findFiberByHostInstance: wn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    ly = {
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
      currentDispatcherRef: te.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Ru(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: ii.findFiberByHostInstance || iy,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vo.isDisabled && Vo.supportsFiber)
      try {
        ((Di = Vo.inject(ly)), (jt = Vo));
      } catch {}
  }
  return (
    (it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sy),
    (it.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Gl(t)) throw Error(o(200));
      return ry(e, t, null, r);
    }),
    (it.createRoot = function (e, t) {
      if (!Gl(e)) throw Error(o(299));
      var r = !1,
        s = "",
        l = nd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Hl(e, 1, !1, null, null, r, !1, s, l)),
        (e[Ot] = t.current),
        Ur(e.nodeType === 8 ? e.parentNode : e),
        new Kl(t)
      );
    }),
    (it.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return ((e = Ru(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (it.flushSync = function (e) {
      return Rn(e);
    }),
    (it.hydrate = function (e, t, r) {
      if (!Mo(t)) throw Error(o(200));
      return Lo(null, e, t, !0, r);
    }),
    (it.hydrateRoot = function (e, t, r) {
      if (!Gl(e)) throw Error(o(405));
      var s = (r != null && r.hydratedSources) || null,
        l = !1,
        u = "",
        h = nd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (h = r.onRecoverableError)),
        (t = ed(t, null, e, 1, r ?? null, l, !1, u, h)),
        (e[Ot] = t.current),
        Ur(e),
        s)
      )
        for (e = 0; e < s.length; e++)
          ((r = s[e]),
            (l = r._getVersion),
            (l = l(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, l])
              : t.mutableSourceEagerHydrationData.push(r, l));
      return new jo(t);
    }),
    (it.render = function (e, t, r) {
      if (!Mo(t)) throw Error(o(200));
      return Lo(null, e, t, !1, r);
    }),
    (it.unmountComponentAtNode = function (e) {
      if (!Mo(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (Rn(function () {
            Lo(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ot] = null));
            });
          }),
          !0)
        : !1;
    }),
    (it.unstable_batchedUpdates = Ol),
    (it.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
      if (!Mo(r)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Lo(e, t, r, !1, s);
    }),
    (it.version = "18.3.1-next-f1338f8080-20240426"),
    it
  );
}
var fd;
function my() {
  if (fd) return Yl.exports;
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
  return (n(), (Yl.exports = py()), Yl.exports);
}
var dd;
function gy() {
  if (dd) return _o;
  dd = 1;
  var n = my();
  return ((_o.createRoot = n.createRoot), (_o.hydrateRoot = n.hydrateRoot), _o);
}
var yy = gy();
function Fo(n) {
  return `#${n}`;
}
function vy(n) {
  const i = n.replace(/^\//, "").replace(/\/$/, "");
  return i ? `#/${i}` : "#/";
}
function Da(n) {
  const i = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return i
    ? i.startsWith("/")
      ? { kind: "route", path: i.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: i }
    : null;
}
function ja(n, i = "smooth") {
  if (typeof document > "u") return !1;
  const o = document.getElementById(n);
  return o ? (o.scrollIntoView({ behavior: i, block: "start" }), !0) : !1;
}
function fa(n, i = "smooth") {
  if (typeof window > "u") return;
  const o = Fo(n);
  if (ja(n, i)) {
    window.history.replaceState(null, "", o);
    return;
  }
  window.location.hash = o;
}
function Ah(n) {
  typeof window > "u" || (window.location.hash = vy(n));
}
function Rh() {
  const n = Da();
  return (n == null ? void 0 : n.kind) === "route" ? n.path : "";
}
function Dh() {
  if (typeof window > "u") return;
  const n = Da();
  (n == null ? void 0 : n.kind) === "section" && requestAnimationFrame(() => ja(n.id, "auto"));
}
function xy(n, i) {
  if (typeof window > "u") return () => {};
  const o = () => {
    const a = Da();
    if (!a) {
      n("");
      return;
    }
    if (a.kind === "route") {
      n(a.path);
      return;
    }
    (ja(a.id, "smooth"), n(""));
  };
  return (
    o(),
    window.addEventListener("hashchange", o),
    () => window.removeEventListener("hashchange", o)
  );
}
function wy(n = "") {
  const [i, o] = q.useState(() => (typeof window < "u" ? Rh() : n));
  return (q.useEffect(() => xy(o), []), i || n);
}
function Sy({ routes: n, defaultRoute: i = "", className: o }) {
  const a = wy(i);
  q.useEffect(() => {
    Dh();
  }, []);
  const c = a in n ? a : i,
    d = n[c] ?? n[i];
  return k.jsx("div", { className: o, children: d });
}
const Ty =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4",
  jh = [
    {
      video:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_220333_48163edc-995f-4513-9f44-48dbb07a7329.mp4",
      title: "Process Streamlining",
      text: "We automate your processes by linking together the daily tools you rely upon. Lifting throughput and improving overall output.",
    },
    {
      video:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221040_e6ba7c5a-864e-46e9-871e-341a176a7e3e.mp4",
      title: "Strategic advisory",
      text: "We craft intelligent assistants that are adaptive, grasp context, and are skilled enough to handle highly intricate customer requests.",
    },
    {
      video:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221104_fb538584-5b87-495f-952e-09ddd5a1792a.mp4",
      title: "Assistant engineering",
      text: "Through our knowledge, we explore deep into your business and advise you on how AI powered automations may transform your operations.",
    },
  ],
  Py = [
    {
      client: "Northline Logistics",
      outcome: "42% faster quote turnaround after workflow automation.",
      tag: "Operations",
    },
    {
      client: "Harbor Health",
      outcome: "AI triage assistant handling 68% of inbound scheduling requests.",
      tag: "Healthcare",
    },
    {
      client: "Meridian Retail",
      outcome: "Unified product data pipeline across 11 legacy tools.",
      tag: "Commerce",
    },
  ],
  ky = [
    {
      name: "Discovery",
      price: "$4,800",
      period: "one-time sprint",
      features: ["Workflow audit", "Automation roadmap", "Executive readout"],
    },
    {
      name: "Build",
      price: "$12,500",
      period: "per month",
      features: ["Custom AI products", "Integration engineering", "Dedicated squad"],
      highlight: !0,
    },
    {
      name: "Scale",
      price: "Custom",
      period: "enterprise",
      features: ["Multi-team rollout", "SLA & governance", "24/7 optimization"],
    },
  ],
  Cy = [
    { name: "Elena Voss", role: "Founding Partner", focus: "Automation strategy" },
    { name: "Marcus Hale", role: "Lead Engineer", focus: "Assistant systems" },
    { name: "Priya Nair", role: "Product Director", focus: "Client delivery" },
    { name: "Jonah Reed", role: "Solutions Architect", focus: "Integrations" },
  ];
function Ey() {
  return k.jsx("video", {
    autoPlay: !0,
    muted: !0,
    loop: !0,
    playsInline: !0,
    src: Ty,
    "aria-hidden": !0,
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      objectFit: "cover",
      zIndex: 0,
    },
  });
}
const Mh = q.createContext({});
function Ay(n) {
  const i = q.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const Ma = q.createContext(null),
  Lh = q.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
function Ry(n = !0) {
  const i = q.useContext(Ma);
  if (i === null) return [!0, null];
  const { isPresent: o, onExitComplete: a, register: c } = i,
    d = q.useId();
  q.useEffect(() => {
    n && c(d);
  }, [n]);
  const f = q.useCallback(() => n && a && a(d), [d, a, n]);
  return !o && a ? [!1, f] : [!0];
}
const La = typeof window < "u",
  Dy = La ? q.useLayoutEffect : q.useEffect,
  ft = (n) => n;
let Vh = ft;
function Va(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const pr = (n, i, o) => {
    const a = i - n;
    return a === 0 ? 1 : (o - n) / a;
  },
  Gt = (n) => n * 1e3,
  Qt = (n) => n / 1e3,
  jy = { useManualTiming: !1 };
function My(n) {
  let i = new Set(),
    o = new Set(),
    a = !1,
    c = !1;
  const d = new WeakSet();
  let f = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(g) {
    (d.has(g) && (m.schedule(g), n()), g(f));
  }
  const m = {
    schedule: (g, v = !1, w = !1) => {
      const R = w && a ? i : o;
      return (v && d.add(g), R.has(g) || R.add(g), g);
    },
    cancel: (g) => {
      (o.delete(g), d.delete(g));
    },
    process: (g) => {
      if (((f = g), a)) {
        c = !0;
        return;
      }
      ((a = !0),
        ([i, o] = [o, i]),
        i.forEach(p),
        i.clear(),
        (a = !1),
        c && ((c = !1), m.process(g)));
    },
  };
  return m;
}
const No = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  Ly = 40;
function _h(n, i) {
  let o = !1,
    a = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (o = !0),
    f = No.reduce((F, W) => ((F[W] = My(d)), F), {}),
    { read: p, resolveKeyframes: m, update: g, preRender: v, render: w, postRender: T } = f,
    R = () => {
      const F = performance.now();
      ((o = !1),
        (c.delta = a ? 1e3 / 60 : Math.max(Math.min(F - c.timestamp, Ly), 1)),
        (c.timestamp = F),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        g.process(c),
        v.process(c),
        w.process(c),
        T.process(c),
        (c.isProcessing = !1),
        o && i && ((a = !1), n(R)));
    },
    _ = () => {
      ((o = !0), (a = !0), c.isProcessing || n(R));
    };
  return {
    schedule: No.reduce((F, W) => {
      const K = f[W];
      return ((F[W] = (te, Q = !1, ne = !1) => (o || _(), K.schedule(te, Q, ne))), F);
    }, {}),
    cancel: (F) => {
      for (let W = 0; W < No.length; W++) f[No[W]].cancel(F);
    },
    state: c,
    steps: f,
  };
}
const {
    schedule: ve,
    cancel: gn,
    state: Be,
    steps: Jl,
  } = _h(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ft, !0),
  Nh = q.createContext({ strict: !1 }),
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
for (const n in hd) mr[n] = { isEnabled: (i) => hd[n].some((o) => !!i[o]) };
function Vy(n) {
  for (const i in n) mr[i] = { ...mr[i], ...n[i] };
}
const _y = new Set([
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
function Wo(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    _y.has(n)
  );
}
let Ih = (n) => !Wo(n);
function Ny(n) {
  n && (Ih = (i) => (i.startsWith("on") ? !Wo(i) : n(i)));
}
try {
  Ny(require("@emotion/is-prop-valid").default);
} catch {}
function Iy(n, i, o) {
  const a = {};
  for (const c in n)
    (c === "values" && typeof n.values == "object") ||
      ((Ih(c) ||
        (o === !0 && Wo(c)) ||
        (!i && !Wo(c)) ||
        (n.draggable && c.startsWith("onDrag"))) &&
        (a[c] = n[c]));
  return a;
}
function Oy(n) {
  if (typeof Proxy > "u") return n;
  const i = new Map(),
    o = (...a) => n(...a);
  return new Proxy(o, {
    get: (a, c) => (c === "create" ? n : (i.has(c) || i.set(c, n(c)), i.get(c))),
  });
}
const Yo = q.createContext({});
function pi(n) {
  return typeof n == "string" || Array.isArray(n);
}
function Zo(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
const _a = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Na = ["initial", ..._a];
function qo(n) {
  return Zo(n.animate) || Na.some((i) => pi(n[i]));
}
function Oh(n) {
  return !!(qo(n) || n.variants);
}
function Fy(n, i) {
  if (qo(n)) {
    const { initial: o, animate: a } = n;
    return { initial: o === !1 || pi(o) ? o : void 0, animate: pi(a) ? a : void 0 };
  }
  return n.inherit !== !1 ? i : {};
}
function zy(n) {
  const { initial: i, animate: o } = Fy(n, q.useContext(Yo));
  return q.useMemo(() => ({ initial: i, animate: o }), [pd(i), pd(o)]);
}
function pd(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const By = Symbol.for("motionComponentSymbol");
function ur(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function Uy(n, i, o) {
  return q.useCallback(
    (a) => {
      (a && n.onMount && n.onMount(a),
        i && (a ? i.mount(a) : i.unmount()),
        o && (typeof o == "function" ? o(a) : ur(o) && (o.current = a)));
    },
    [i],
  );
}
const Ia = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Wy = "framerAppearId",
  Fh = "data-" + Ia(Wy),
  { schedule: Oa } = _h(queueMicrotask, !1),
  zh = q.createContext({});
function Hy(n, i, o, a, c) {
  var d, f;
  const { visualElement: p } = q.useContext(Yo),
    m = q.useContext(Nh),
    g = q.useContext(Ma),
    v = q.useContext(Lh).reducedMotion,
    w = q.useRef(null);
  ((a = a || m.renderer),
    !w.current &&
      a &&
      (w.current = a(n, {
        visualState: i,
        parent: p,
        props: o,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: v,
      })));
  const T = w.current,
    R = q.useContext(zh);
  T && !T.projection && c && (T.type === "html" || T.type === "svg") && $y(w.current, o, c, R);
  const _ = q.useRef(!1);
  q.useInsertionEffect(() => {
    T && _.current && T.update(o, g);
  });
  const j = o[Fh],
    N = q.useRef(
      !!j &&
        !(!((d = window.MotionHandoffIsComplete) === null || d === void 0) && d.call(window, j)) &&
        ((f = window.MotionHasOptimisedAnimation) === null || f === void 0
          ? void 0
          : f.call(window, j)),
    );
  return (
    Dy(() => {
      T &&
        ((_.current = !0),
        (window.MotionIsMounted = !0),
        T.updateFeatures(),
        Oa.render(T.render),
        N.current && T.animationState && T.animationState.animateChanges());
    }),
    q.useEffect(() => {
      T &&
        (!N.current && T.animationState && T.animationState.animateChanges(),
        N.current &&
          (queueMicrotask(() => {
            var F;
            (F = window.MotionHandoffMarkAsComplete) === null || F === void 0 || F.call(window, j);
          }),
          (N.current = !1)));
    }),
    T
  );
}
function $y(n, i, o, a) {
  const { layoutId: c, layout: d, drag: f, dragConstraints: p, layoutScroll: m, layoutRoot: g } = i;
  ((n.projection = new o(n.latestValues, i["data-framer-portal-id"] ? void 0 : Bh(n.parent))),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (p && ur(p)),
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
function Ky({
  preloadedFeatures: n,
  createVisualElement: i,
  useRender: o,
  useVisualState: a,
  Component: c,
}) {
  var d, f;
  n && Vy(n);
  function p(g, v) {
    let w;
    const T = { ...q.useContext(Lh), ...g, layoutId: Gy(g) },
      { isStatic: R } = T,
      _ = zy(g),
      j = a(g, R);
    if (!R && La) {
      Qy();
      const N = Xy(T);
      ((w = N.MeasureLayout), (_.visualElement = Hy(c, j, T, i, N.ProjectionNode)));
    }
    return k.jsxs(Yo.Provider, {
      value: _,
      children: [
        w && _.visualElement ? k.jsx(w, { visualElement: _.visualElement, ...T }) : null,
        o(c, g, Uy(j, _.visualElement, v), j, R, _.visualElement),
      ],
    });
  }
  p.displayName = `motion.${typeof c == "string" ? c : `create(${(f = (d = c.displayName) !== null && d !== void 0 ? d : c.name) !== null && f !== void 0 ? f : ""})`}`;
  const m = q.forwardRef(p);
  return ((m[By] = c), m);
}
function Gy({ layoutId: n }) {
  const i = q.useContext(Mh).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function Qy(n, i) {
  q.useContext(Nh).strict;
}
function Xy(n) {
  const { drag: i, layout: o } = mr;
  if (!i && !o) return {};
  const a = { ...i, ...o };
  return {
    MeasureLayout:
      (i != null && i.isEnabled(n)) || (o != null && o.isEnabled(n)) ? a.MeasureLayout : void 0,
    ProjectionNode: a.ProjectionNode,
  };
}
const Yy = [
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
function Fa(n) {
  return typeof n != "string" || n.includes("-") ? !1 : !!(Yy.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function md(n) {
  const i = [{}, {}];
  return (
    n == null ||
      n.values.forEach((o, a) => {
        ((i[0][a] = o.get()), (i[1][a] = o.getVelocity()));
      }),
    i
  );
}
function za(n, i, o, a) {
  if (typeof i == "function") {
    const [c, d] = md(a);
    i = i(o !== void 0 ? o : n.custom, c, d);
  }
  if ((typeof i == "string" && (i = n.variants && n.variants[i]), typeof i == "function")) {
    const [c, d] = md(a);
    i = i(o !== void 0 ? o : n.custom, c, d);
  }
  return i;
}
const da = (n) => Array.isArray(n),
  Zy = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
  qy = (n) => (da(n) ? n[n.length - 1] || 0 : n),
  Ge = (n) => !!(n && n.getVelocity);
function zo(n) {
  const i = Ge(n) ? n.get() : n;
  return Zy(i) ? i.toValue() : i;
}
function Jy({ scrapeMotionValuesFromProps: n, createRenderState: i, onUpdate: o }, a, c, d) {
  const f = { latestValues: by(a, c, d, n), renderState: i() };
  return (
    o && ((f.onMount = (p) => o({ props: a, current: p, ...f })), (f.onUpdate = (p) => o(p))),
    f
  );
}
const Uh = (n) => (i, o) => {
  const a = q.useContext(Yo),
    c = q.useContext(Ma),
    d = () => Jy(n, i, a, c);
  return o ? d() : Ay(d);
};
function by(n, i, o, a) {
  const c = {},
    d = a(n, {});
  for (const T in d) c[T] = zo(d[T]);
  let { initial: f, animate: p } = n;
  const m = qo(n),
    g = Oh(n);
  i &&
    g &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let v = o ? o.initial === !1 : !1;
  v = v || f === !1;
  const w = v ? p : f;
  if (w && typeof w != "boolean" && !Zo(w)) {
    const T = Array.isArray(w) ? w : [w];
    for (let R = 0; R < T.length; R++) {
      const _ = za(n, T[R]);
      if (_) {
        const { transitionEnd: j, transition: N, ...F } = _;
        for (const W in F) {
          let K = F[W];
          if (Array.isArray(K)) {
            const te = v ? K.length - 1 : 0;
            K = K[te];
          }
          K !== null && (c[W] = K);
        }
        for (const W in j) c[W] = j[W];
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
  Wh = (n) => (i) => typeof i == "string" && i.startsWith(n),
  Hh = Wh("--"),
  ev = Wh("var(--"),
  Ba = (n) => (ev(n) ? tv.test(n.split("/*")[0].trim()) : !1),
  tv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  $h = (n, i) => (i && typeof n == "number" ? i.transform(n) : n),
  Xt = (n, i, o) => (o > i ? i : o < n ? n : o),
  vr = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  mi = { ...vr, transform: (n) => Xt(0, 1, n) },
  Io = { ...vr, default: 1 },
  xi = (n) => ({
    test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  mn = xi("deg"),
  Nt = xi("%"),
  b = xi("px"),
  nv = xi("vh"),
  rv = xi("vw"),
  gd = { ...Nt, parse: (n) => Nt.parse(n) / 100, transform: (n) => Nt.transform(n * 100) },
  iv = {
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
  ov = {
    rotate: mn,
    rotateX: mn,
    rotateY: mn,
    rotateZ: mn,
    scale: Io,
    scaleX: Io,
    scaleY: Io,
    scaleZ: Io,
    skew: mn,
    skewX: mn,
    skewY: mn,
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
  Ua = { ...iv, ...ov, zIndex: yd, size: b, fillOpacity: mi, strokeOpacity: mi, numOctaves: yd },
  sv = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  lv = yr.length;
function av(n, i, o) {
  let a = "",
    c = !0;
  for (let d = 0; d < lv; d++) {
    const f = yr[d],
      p = n[f];
    if (p === void 0) continue;
    let m = !0;
    if (
      (typeof p == "number"
        ? (m = p === (f.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(p) === 0),
      !m || o)
    ) {
      const g = $h(p, Ua[f]);
      if (!m) {
        c = !1;
        const v = sv[f] || f;
        a += `${v}(${g}) `;
      }
      o && (i[f] = g);
    }
  }
  return ((a = a.trim()), o ? (a = o(i, c ? "" : a)) : c && (a = "none"), a);
}
function Wa(n, i, o) {
  const { style: a, vars: c, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const g = i[m];
    if (On.has(m)) {
      f = !0;
      continue;
    } else if (Hh(m)) {
      c[m] = g;
      continue;
    } else {
      const v = $h(g, Ua[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = v)) : (a[m] = v);
    }
  }
  if (
    (i.transform ||
      (f || o ? (a.transform = av(i, n.transform, o)) : a.transform && (a.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: g = "50%", originZ: v = 0 } = d;
    a.transformOrigin = `${m} ${g} ${v}`;
  }
}
const uv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  cv = { offset: "strokeDashoffset", array: "strokeDasharray" };
function fv(n, i, o = 1, a = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? uv : cv;
  n[d.offset] = b.transform(-a);
  const f = b.transform(i),
    p = b.transform(o);
  n[d.array] = `${f} ${p}`;
}
function vd(n, i, o) {
  return typeof n == "string" ? n : b.transform(i + o * n);
}
function dv(n, i, o) {
  const a = vd(i, n.x, n.width),
    c = vd(o, n.y, n.height);
  return `${a} ${c}`;
}
function Ha(
  n,
  {
    attrX: i,
    attrY: o,
    attrScale: a,
    originX: c,
    originY: d,
    pathLength: f,
    pathSpacing: p = 1,
    pathOffset: m = 0,
    ...g
  },
  v,
  w,
) {
  if ((Wa(n, g, w), v)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: T, style: R, dimensions: _ } = n;
  (T.transform && (_ && (R.transform = T.transform), delete T.transform),
    _ &&
      (c !== void 0 || d !== void 0 || R.transform) &&
      (R.transformOrigin = dv(_, c !== void 0 ? c : 0.5, d !== void 0 ? d : 0.5)),
    i !== void 0 && (T.x = i),
    o !== void 0 && (T.y = o),
    a !== void 0 && (T.scale = a),
    f !== void 0 && fv(T, f, p, m, !1));
}
const $a = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Kh = () => ({ ...$a(), attrs: {} }),
  Ka = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function Gh(n, { style: i, vars: o }, a, c) {
  Object.assign(n.style, i, c && c.getProjectionStyles(a));
  for (const d in o) n.style.setProperty(d, o[d]);
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
function Xh(n, i, o, a) {
  Gh(n, i, void 0, a);
  for (const c in i.attrs) n.setAttribute(Qh.has(c) ? c : Ia(c), i.attrs[c]);
}
const Ho = {};
function hv(n) {
  Object.assign(Ho, n);
}
function Yh(n, { layout: i, layoutId: o }) {
  return (
    On.has(n) || n.startsWith("origin") || ((i || o !== void 0) && (!!Ho[n] || n === "opacity"))
  );
}
function Ga(n, i, o) {
  var a;
  const { style: c } = n,
    d = {};
  for (const f in c)
    (Ge(c[f]) ||
      (i.style && Ge(i.style[f])) ||
      Yh(f, n) ||
      ((a = o == null ? void 0 : o.getValue(f)) === null || a === void 0 ? void 0 : a.liveStyle) !==
        void 0) &&
      (d[f] = c[f]);
  return d;
}
function Zh(n, i, o) {
  const a = Ga(n, i, o);
  for (const c in n)
    if (Ge(n[c]) || Ge(i[c])) {
      const d = yr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      a[d] = n[c];
    }
  return a;
}
function pv(n, i) {
  try {
    i.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect();
  } catch {
    i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const xd = ["x", "y", "width", "height", "cx", "cy", "r"],
  mv = {
    useVisualState: Uh({
      scrapeMotionValuesFromProps: Zh,
      createRenderState: Kh,
      onUpdate: ({ props: n, prevProps: i, current: o, renderState: a, latestValues: c }) => {
        if (!o) return;
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
          for (let p = 0; p < xd.length; p++) {
            const m = xd[p];
            n[m] !== i[m] && (f = !0);
          }
        f &&
          ve.read(() => {
            (pv(o, a),
              ve.render(() => {
                (Ha(a, c, Ka(o.tagName), n.transformTemplate), Xh(o, a));
              }));
          });
      },
    }),
  },
  gv = { useVisualState: Uh({ scrapeMotionValuesFromProps: Ga, createRenderState: $a }) };
function qh(n, i, o) {
  for (const a in i) !Ge(i[a]) && !Yh(a, o) && (n[a] = i[a]);
}
function yv({ transformTemplate: n }, i) {
  return q.useMemo(() => {
    const o = $a();
    return (Wa(o, i, n), Object.assign({}, o.vars, o.style));
  }, [i]);
}
function vv(n, i) {
  const o = n.style || {},
    a = {};
  return (qh(a, o, n), Object.assign(a, yv(n, i)), a);
}
function xv(n, i) {
  const o = {},
    a = vv(n, i);
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
function wv(n, i, o, a) {
  const c = q.useMemo(() => {
    const d = Kh();
    return (Ha(d, i, Ka(a), n.transformTemplate), { ...d.attrs, style: { ...d.style } });
  }, [i]);
  if (n.style) {
    const d = {};
    (qh(d, n.style, n), (c.style = { ...d, ...c.style }));
  }
  return c;
}
function Sv(n = !1) {
  return (o, a, c, { latestValues: d }, f) => {
    const m = (Fa(o) ? wv : xv)(a, d, f, o),
      g = Iy(a, typeof o == "string", n),
      v = o !== q.Fragment ? { ...g, ...m, ref: c } : {},
      { children: w } = a,
      T = q.useMemo(() => (Ge(w) ? w.get() : w), [w]);
    return q.createElement(o, { ...v, children: T });
  };
}
function Tv(n, i) {
  return function (a, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Fa(a) ? mv : gv),
      preloadedFeatures: n,
      useRender: Sv(c),
      createVisualElement: i,
      Component: a,
    };
    return Ky(f);
  };
}
function Jh(n, i) {
  if (!Array.isArray(i)) return !1;
  const o = i.length;
  if (o !== n.length) return !1;
  for (let a = 0; a < o; a++) if (i[a] !== n[a]) return !1;
  return !0;
}
function Jo(n, i, o) {
  const a = n.getProps();
  return za(a, i, o !== void 0 ? o : a.custom, n);
}
const Pv = Va(() => window.ScrollTimeline !== void 0);
class kv {
  constructor(i) {
    ((this.stop = () => this.runAll("stop")), (this.animations = i.filter(Boolean)));
  }
  get finished() {
    return Promise.all(this.animations.map((i) => ("finished" in i ? i.finished : i)));
  }
  getAll(i) {
    return this.animations[0][i];
  }
  setAll(i, o) {
    for (let a = 0; a < this.animations.length; a++) this.animations[a][i] = o;
  }
  attachTimeline(i, o) {
    const a = this.animations.map((c) => {
      if (Pv() && c.attachTimeline) return c.attachTimeline(i);
      if (typeof o == "function") return o(c);
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
    for (let o = 0; o < this.animations.length; o++) i = Math.max(i, this.animations[o].duration);
    return i;
  }
  runAll(i) {
    this.animations.forEach((o) => o[i]());
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
class Cv extends kv {
  then(i, o) {
    return Promise.all(this.animations).then(i).catch(o);
  }
}
function Qa(n, i) {
  return n ? n[i] || n.default || n : void 0;
}
const ha = 2e4;
function bh(n) {
  let i = 0;
  const o = 50;
  let a = n.next(i);
  for (; !a.done && i < ha;) ((i += o), (a = n.next(i)));
  return i >= ha ? 1 / 0 : i;
}
function Xa(n) {
  return typeof n == "function";
}
function wd(n, i) {
  ((n.timeline = i), (n.onfinish = null));
}
const Ya = (n) => Array.isArray(n) && typeof n[0] == "number",
  Ev = { linearEasing: void 0 };
function Av(n, i) {
  const o = Va(n);
  return () => {
    var a;
    return (a = Ev[i]) !== null && a !== void 0 ? a : o();
  };
}
const $o = Av(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ep = (n, i, o = 10) => {
    let a = "";
    const c = Math.max(Math.round(i / o), 2);
    for (let d = 0; d < c; d++) a += n(pr(0, c - 1, d)) + ", ";
    return `linear(${a.substring(0, a.length - 2)})`;
  };
function tp(n) {
  return !!(
    (typeof n == "function" && $o()) ||
    !n ||
    (typeof n == "string" && (n in pa || $o())) ||
    Ya(n) ||
    (Array.isArray(n) && n.every(tp))
  );
}
const li = ([n, i, o, a]) => `cubic-bezier(${n}, ${i}, ${o}, ${a})`,
  pa = {
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
    return typeof n == "function" && $o()
      ? ep(n, i)
      : Ya(n)
        ? li(n)
        : Array.isArray(n)
          ? n.map((o) => np(o, i) || pa.easeOut)
          : pa[n];
}
const Dt = { x: !1, y: !1 };
function rp() {
  return Dt.x || Dt.y;
}
function Rv(n, i, o) {
  var a;
  if (n instanceof Element) return [n];
  if (typeof n == "string") {
    let c = document;
    const d = (a = void 0) !== null && a !== void 0 ? a : c.querySelectorAll(n);
    return d ? Array.from(d) : [];
  }
  return Array.from(n);
}
function ip(n, i) {
  const o = Rv(n),
    a = new AbortController(),
    c = { passive: !0, ...i, signal: a.signal };
  return [o, c, () => a.abort()];
}
function Sd(n) {
  return (i) => {
    i.pointerType === "touch" || rp() || n(i);
  };
}
function Dv(n, i, o = {}) {
  const [a, c, d] = ip(n, o),
    f = Sd((p) => {
      const { target: m } = p,
        g = i(p);
      if (typeof g != "function" || !m) return;
      const v = Sd((w) => {
        (g(w), m.removeEventListener("pointerleave", v));
      });
      m.addEventListener("pointerleave", v, c);
    });
  return (
    a.forEach((p) => {
      p.addEventListener("pointerenter", f, c);
    }),
    d
  );
}
const op = (n, i) => (i ? (n === i ? !0 : op(n, i.parentElement)) : !1),
  Za = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  jv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Mv(n) {
  return jv.has(n.tagName) || n.tabIndex !== -1;
}
const ai = new WeakSet();
function Td(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function bl(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const Lv = (n, i) => {
  const o = n.currentTarget;
  if (!o) return;
  const a = Td(() => {
    if (ai.has(o)) return;
    bl(o, "down");
    const c = Td(() => {
        bl(o, "up");
      }),
      d = () => bl(o, "cancel");
    (o.addEventListener("keyup", c, i), o.addEventListener("blur", d, i));
  });
  (o.addEventListener("keydown", a, i),
    o.addEventListener("blur", () => o.removeEventListener("keydown", a), i));
};
function Pd(n) {
  return Za(n) && !rp();
}
function Vv(n, i, o = {}) {
  const [a, c, d] = ip(n, o),
    f = (p) => {
      const m = p.currentTarget;
      if (!Pd(p) || ai.has(m)) return;
      ai.add(m);
      const g = i(p),
        v = (R, _) => {
          (window.removeEventListener("pointerup", w),
            window.removeEventListener("pointercancel", T),
            !(!Pd(R) || !ai.has(m)) &&
              (ai.delete(m), typeof g == "function" && g(R, { success: _ })));
        },
        w = (R) => {
          v(R, o.useGlobalTarget || op(m, R.target));
        },
        T = (R) => {
          v(R, !1);
        };
      (window.addEventListener("pointerup", w, c), window.addEventListener("pointercancel", T, c));
    };
  return (
    a.forEach((p) => {
      (!Mv(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0),
        (o.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        p.addEventListener("focus", (g) => Lv(g, c), c));
    }),
    d
  );
}
function _v(n) {
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
const sp = new Set(["width", "height", "top", "left", "right", "bottom", ...yr]);
let Bo;
function Nv() {
  Bo = void 0;
}
const It = {
  now: () => (
    Bo === void 0 &&
      It.set(Be.isProcessing || jy.useManualTiming ? Be.timestamp : performance.now()),
    Bo
  ),
  set: (n) => {
    ((Bo = n), queueMicrotask(Nv));
  },
};
function qa(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function Ja(n, i) {
  const o = n.indexOf(i);
  o > -1 && n.splice(o, 1);
}
class ba {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (qa(this.subscriptions, i), () => Ja(this.subscriptions, i));
  }
  notify(i, o, a) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](i, o, a);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(i, o, a);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function lp(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const kd = 30,
  Iv = (n) => !isNaN(parseFloat(n));
class Ov {
  constructor(i, o = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (a, c = !0) => {
        const d = It.now();
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
      (this.owner = o.owner));
  }
  setCurrent(i) {
    ((this.current = i),
      (this.updatedAt = It.now()),
      this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = Iv(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, o) {
    this.events[i] || (this.events[i] = new ba());
    const a = this.events[i].add(o);
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
  attach(i, o) {
    ((this.passiveEffect = i), (this.stopPassiveEffect = o));
  }
  set(i, o = !0) {
    !o || !this.passiveEffect
      ? this.updateAndNotify(i, o)
      : this.passiveEffect(i, this.updateAndNotify);
  }
  setWithVelocity(i, o, a) {
    (this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - a));
  }
  jump(i, o = !0) {
    (this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = It.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > kd)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, kd);
    return lp(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((o) => {
        ((this.hasAnimated = !0),
          (this.animation = i(o)),
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
  return new Ov(n, i);
}
function Fv(n, i, o) {
  n.hasValue(i) ? n.getValue(i).set(o) : n.addValue(i, gi(o));
}
function zv(n, i) {
  const o = Jo(n, i);
  let { transitionEnd: a = {}, transition: c = {}, ...d } = o || {};
  d = { ...d, ...a };
  for (const f in d) {
    const p = qy(d[f]);
    Fv(n, f, p);
  }
}
function Bv(n) {
  return !!(Ge(n) && n.add);
}
function ma(n, i) {
  const o = n.getValue("willChange");
  if (Bv(o)) return o.add(i);
}
function ap(n) {
  return n.props[Fh];
}
const up = (n, i, o) => (((1 - 3 * o + 3 * i) * n + (3 * o - 6 * i)) * n + 3 * i) * n,
  Uv = 1e-7,
  Wv = 12;
function Hv(n, i, o, a, c) {
  let d,
    f,
    p = 0;
  do ((f = i + (o - i) / 2), (d = up(f, a, c) - n), d > 0 ? (o = f) : (i = f));
  while (Math.abs(d) > Uv && ++p < Wv);
  return f;
}
function wi(n, i, o, a) {
  if (n === i && o === a) return ft;
  const c = (d) => Hv(d, 0, 1, n, o);
  return (d) => (d === 0 || d === 1 ? d : up(c(d), i, a));
}
const cp = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  fp = (n) => (i) => 1 - n(1 - i),
  dp = wi(0.33, 1.53, 0.69, 0.99),
  eu = fp(dp),
  hp = cp(eu),
  pp = (n) => ((n *= 2) < 1 ? 0.5 * eu(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))),
  tu = (n) => 1 - Math.sin(Math.acos(n)),
  mp = fp(tu),
  gp = cp(tu),
  yp = (n) => /^0[^.\s]+$/u.test(n);
function $v(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || yp(n) : !0;
}
const ci = (n) => Math.round(n * 1e5) / 1e5,
  nu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Kv(n) {
  return n == null;
}
const Gv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ru = (n, i) => (o) =>
    !!(
      (typeof o == "string" && Gv.test(o) && o.startsWith(n)) ||
      (i && !Kv(o) && Object.prototype.hasOwnProperty.call(o, i))
    ),
  vp = (n, i, o) => (a) => {
    if (typeof a != "string") return a;
    const [c, d, f, p] = a.match(nu);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [o]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  Qv = (n) => Xt(0, 255, n),
  ea = { ...vr, transform: (n) => Math.round(Qv(n)) },
  Nn = {
    test: ru("rgb", "red"),
    parse: vp("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: o, alpha: a = 1 }) =>
      "rgba(" +
      ea.transform(n) +
      ", " +
      ea.transform(i) +
      ", " +
      ea.transform(o) +
      ", " +
      ci(mi.transform(a)) +
      ")",
  };
function Xv(n) {
  let i = "",
    o = "",
    a = "",
    c = "";
  return (
    n.length > 5
      ? ((i = n.substring(1, 3)),
        (o = n.substring(3, 5)),
        (a = n.substring(5, 7)),
        (c = n.substring(7, 9)))
      : ((i = n.substring(1, 2)),
        (o = n.substring(2, 3)),
        (a = n.substring(3, 4)),
        (c = n.substring(4, 5)),
        (i += i),
        (o += o),
        (a += a),
        (c += c)),
    {
      red: parseInt(i, 16),
      green: parseInt(o, 16),
      blue: parseInt(a, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const ga = { test: ru("#"), parse: Xv, transform: Nn.transform },
  cr = {
    test: ru("hsl", "hue"),
    parse: vp("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: o, alpha: a = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      Nt.transform(ci(i)) +
      ", " +
      Nt.transform(ci(o)) +
      ", " +
      ci(mi.transform(a)) +
      ")",
  },
  Ke = {
    test: (n) => Nn.test(n) || ga.test(n) || cr.test(n),
    parse: (n) => (Nn.test(n) ? Nn.parse(n) : cr.test(n) ? cr.parse(n) : ga.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? Nn.transform(n) : cr.transform(n),
  },
  Yv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Zv(n) {
  var i, o;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(nu)) === null || i === void 0 ? void 0 : i.length) || 0) +
      (((o = n.match(Yv)) === null || o === void 0 ? void 0 : o.length) || 0) >
      0
  );
}
const xp = "number",
  wp = "color",
  qv = "var",
  Jv = "var(",
  Cd = "${}",
  bv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function yi(n) {
  const i = n.toString(),
    o = [],
    a = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      bv,
      (m) => (
        Ke.test(m)
          ? (a.color.push(d), c.push(wp), o.push(Ke.parse(m)))
          : m.startsWith(Jv)
            ? (a.var.push(d), c.push(qv), o.push(m))
            : (a.number.push(d), c.push(xp), o.push(parseFloat(m))),
        ++d,
        Cd
      ),
    )
    .split(Cd);
  return { values: o, split: p, indexes: a, types: c };
}
function Sp(n) {
  return yi(n).values;
}
function Tp(n) {
  const { split: i, types: o } = yi(n),
    a = i.length;
  return (c) => {
    let d = "";
    for (let f = 0; f < a; f++)
      if (((d += i[f]), c[f] !== void 0)) {
        const p = o[f];
        p === xp ? (d += ci(c[f])) : p === wp ? (d += Ke.transform(c[f])) : (d += c[f]);
      }
    return d;
  };
}
const e0 = (n) => (typeof n == "number" ? 0 : n);
function t0(n) {
  const i = Sp(n);
  return Tp(n)(i.map(e0));
}
const yn = { test: Zv, parse: Sp, createTransformer: Tp, getAnimatableNone: t0 },
  n0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function r0(n) {
  const [i, o] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [a] = o.match(nu) || [];
  if (!a) return n;
  const c = o.replace(a, "");
  let d = n0.has(i) ? 1 : 0;
  return (a !== o && (d *= 100), i + "(" + d + c + ")");
}
const i0 = /\b([a-z-]*)\(.*?\)/gu,
  ya = {
    ...yn,
    getAnimatableNone: (n) => {
      const i = n.match(i0);
      return i ? i.map(r0).join(" ") : n;
    },
  },
  o0 = {
    ...Ua,
    color: Ke,
    backgroundColor: Ke,
    outlineColor: Ke,
    fill: Ke,
    stroke: Ke,
    borderColor: Ke,
    borderTopColor: Ke,
    borderRightColor: Ke,
    borderBottomColor: Ke,
    borderLeftColor: Ke,
    filter: ya,
    WebkitFilter: ya,
  },
  iu = (n) => o0[n];
function Pp(n, i) {
  let o = iu(n);
  return (o !== ya && (o = yn), o.getAnimatableNone ? o.getAnimatableNone(i) : void 0);
}
const s0 = new Set(["auto", "none", "0"]);
function l0(n, i, o) {
  let a = 0,
    c;
  for (; a < n.length && !c;) {
    const d = n[a];
    (typeof d == "string" && !s0.has(d) && yi(d).values.length && (c = n[a]), a++);
  }
  if (c && o) for (const d of i) n[d] = Pp(o, c);
}
const Ed = (n) => n === vr || n === b,
  Ad = (n, i) => parseFloat(n.split(", ")[i]),
  Rd =
    (n, i) =>
    (o, { transform: a }) => {
      if (a === "none" || !a) return 0;
      const c = a.match(/^matrix3d\((.+)\)$/u);
      if (c) return Ad(c[1], i);
      {
        const d = a.match(/^matrix\((.+)\)$/u);
        return d ? Ad(d[1], n) : 0;
      }
    },
  a0 = new Set(["x", "y", "z"]),
  u0 = yr.filter((n) => !a0.has(n));
function c0(n) {
  const i = [];
  return (
    u0.forEach((o) => {
      const a = n.getValue(o);
      a !== void 0 && (i.push([o, a.get()]), a.set(o.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const gr = {
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: o = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(o),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: o = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(o),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: Rd(4, 13),
  y: Rd(5, 14),
};
gr.translateX = gr.x;
gr.translateY = gr.y;
const In = new Set();
let va = !1,
  xa = !1;
function kp() {
  if (xa) {
    const n = Array.from(In).filter((a) => a.needsMeasurement),
      i = new Set(n.map((a) => a.element)),
      o = new Map();
    (i.forEach((a) => {
      const c = c0(a);
      c.length && (o.set(a, c), a.render());
    }),
      n.forEach((a) => a.measureInitialState()),
      i.forEach((a) => {
        a.render();
        const c = o.get(a);
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
  ((xa = !1), (va = !1), In.forEach((n) => n.complete()), In.clear());
}
function Cp() {
  In.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (xa = !0));
  });
}
function f0() {
  (Cp(), kp());
}
class ou {
  constructor(i, o, a, c, d, f = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = o),
      (this.name = a),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (In.add(this), va || ((va = !0), ve.read(Cp), ve.resolveKeyframes(kp)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: o, element: a, motionValue: c } = this;
    for (let d = 0; d < i.length; d++)
      if (i[d] === null)
        if (d === 0) {
          const f = c == null ? void 0 : c.get(),
            p = i[i.length - 1];
          if (f !== void 0) i[0] = f;
          else if (a && o) {
            const m = a.readValue(o, p);
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
const Ep = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  d0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function h0(n) {
  const i = d0.exec(n);
  if (!i) return [,];
  const [, o, a, c] = i;
  return [`--${o ?? a}`, c];
}
function Ap(n, i, o = 1) {
  const [a, c] = h0(n);
  if (!a) return;
  const d = window.getComputedStyle(i).getPropertyValue(a);
  if (d) {
    const f = d.trim();
    return Ep(f) ? parseFloat(f) : f;
  }
  return Ba(c) ? Ap(c, i, o + 1) : c;
}
const Rp = (n) => (i) => i.test(n),
  p0 = { test: (n) => n === "auto", parse: (n) => n },
  Dp = [vr, b, Nt, mn, rv, nv, p0],
  Dd = (n) => Dp.find(Rp(n));
class jp extends ou {
  constructor(i, o, a, c, d) {
    super(i, o, a, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: o, name: a } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let m = 0; m < i.length; m++) {
      let g = i[m];
      if (typeof g == "string" && ((g = g.trim()), Ba(g))) {
        const v = Ap(g, o.current);
        (v !== void 0 && (i[m] = v), m === i.length - 1 && (this.finalKeyframe = g));
      }
    }
    if ((this.resolveNoneKeyframes(), !sp.has(a) || i.length !== 2)) return;
    const [c, d] = i,
      f = Dd(c),
      p = Dd(d);
    if (f !== p)
      if (Ed(f) && Ed(p))
        for (let m = 0; m < i.length; m++) {
          const g = i[m];
          typeof g == "string" && (i[m] = parseFloat(g));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: o } = this,
      a = [];
    for (let c = 0; c < i.length; c++) $v(i[c]) && a.push(c);
    a.length && l0(i, a, o);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: o, name: a } = this;
    if (!i || !i.current) return;
    (a === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = gr[a](i.measureViewportBox(), window.getComputedStyle(i.current))),
      (o[0] = this.measuredOrigin));
    const c = o[o.length - 1];
    c !== void 0 && i.getValue(a, c).jump(c, !1);
  }
  measureEndState() {
    var i;
    const { element: o, name: a, unresolvedKeyframes: c } = this;
    if (!o || !o.current) return;
    const d = o.getValue(a);
    d && d.jump(this.measuredOrigin, !1);
    const f = c.length - 1,
      p = c[f];
    ((c[f] = gr[a](o.measureViewportBox(), window.getComputedStyle(o.current))),
      p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
      !((i = this.removedTransforms) === null || i === void 0) &&
        i.length &&
        this.removedTransforms.forEach(([m, g]) => {
          o.getValue(m).set(g);
        }),
      this.resolveNoneKeyframes());
  }
}
const jd = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" && (yn.test(n) || n === "0") && !n.startsWith("url("))
      );
function m0(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let o = 0; o < n.length; o++) if (n[o] !== i) return !0;
}
function g0(n, i, o, a) {
  const c = n[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = jd(c, i),
    p = jd(d, i);
  return !f || !p ? !1 : m0(n) || ((o === "spring" || Xa(o)) && a);
}
const y0 = (n) => n !== null;
function bo(n, { repeat: i, repeatType: o = "loop" }, a) {
  const c = n.filter(y0),
    d = i && o !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return !d || a === void 0 ? c[d] : a;
}
const v0 = 40;
class Mp {
  constructor({
    autoplay: i = !0,
    delay: o = 0,
    type: a = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    ...p
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = It.now()),
      (this.options = {
        autoplay: i,
        delay: o,
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
      ? this.resolvedAt - this.createdAt > v0
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (!this._resolved && !this.hasAttemptedResolve && f0(), this._resolved);
  }
  onKeyframesResolved(i, o) {
    ((this.resolvedAt = It.now()), (this.hasAttemptedResolve = !0));
    const {
      name: a,
      type: c,
      velocity: d,
      delay: f,
      onComplete: p,
      onUpdate: m,
      isGenerator: g,
    } = this.options;
    if (!g && !g0(i, a, c, d))
      if (f) this.options.duration = 0;
      else {
        (m && m(bo(i, this.options, o)), p && p(), this.resolveFinishedPromise());
        return;
      }
    const v = this.initPlayback(i, o);
    v !== !1 &&
      ((this._resolved = { keyframes: i, finalKeyframe: o, ...v }), this.onPostResolved());
  }
  onPostResolved() {}
  then(i, o) {
    return this.currentFinishedPromise.then(i, o);
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
const Ce = (n, i, o) => n + (i - n) * o;
function ta(n, i, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6 ? n + (i - n) * 6 * o : o < 1 / 2 ? i : o < 2 / 3 ? n + (i - n) * (2 / 3 - o) * 6 : n
  );
}
function x0({ hue: n, saturation: i, lightness: o, alpha: a }) {
  ((n /= 360), (i /= 100), (o /= 100));
  let c = 0,
    d = 0,
    f = 0;
  if (!i) c = d = f = o;
  else {
    const p = o < 0.5 ? o * (1 + i) : o + i - o * i,
      m = 2 * o - p;
    ((c = ta(m, p, n + 1 / 3)), (d = ta(m, p, n)), (f = ta(m, p, n - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: a,
  };
}
function Ko(n, i) {
  return (o) => (o > 0 ? i : n);
}
const na = (n, i, o) => {
    const a = n * n,
      c = o * (i * i - a) + a;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  w0 = [ga, Nn, cr],
  S0 = (n) => w0.find((i) => i.test(n));
function Md(n) {
  const i = S0(n);
  if (!i) return !1;
  let o = i.parse(n);
  return (i === cr && (o = x0(o)), o);
}
const Ld = (n, i) => {
    const o = Md(n),
      a = Md(i);
    if (!o || !a) return Ko(n, i);
    const c = { ...o };
    return (d) => (
      (c.red = na(o.red, a.red, d)),
      (c.green = na(o.green, a.green, d)),
      (c.blue = na(o.blue, a.blue, d)),
      (c.alpha = Ce(o.alpha, a.alpha, d)),
      Nn.transform(c)
    );
  },
  T0 = (n, i) => (o) => i(n(o)),
  Si = (...n) => n.reduce(T0),
  wa = new Set(["none", "hidden"]);
function P0(n, i) {
  return wa.has(n) ? (o) => (o <= 0 ? n : i) : (o) => (o >= 1 ? i : n);
}
function k0(n, i) {
  return (o) => Ce(n, i, o);
}
function su(n) {
  return typeof n == "number"
    ? k0
    : typeof n == "string"
      ? Ba(n)
        ? Ko
        : Ke.test(n)
          ? Ld
          : A0
      : Array.isArray(n)
        ? Lp
        : typeof n == "object"
          ? Ke.test(n)
            ? Ld
            : C0
          : Ko;
}
function Lp(n, i) {
  const o = [...n],
    a = o.length,
    c = n.map((d, f) => su(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < a; f++) o[f] = c[f](d);
    return o;
  };
}
function C0(n, i) {
  const o = { ...n, ...i },
    a = {};
  for (const c in o) n[c] !== void 0 && i[c] !== void 0 && (a[c] = su(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in a) o[d] = a[d](c);
    return o;
  };
}
function E0(n, i) {
  var o;
  const a = [],
    c = { color: 0, var: 0, number: 0 };
  for (let d = 0; d < i.values.length; d++) {
    const f = i.types[d],
      p = n.indexes[f][c[f]],
      m = (o = n.values[p]) !== null && o !== void 0 ? o : 0;
    ((a[d] = m), c[f]++);
  }
  return a;
}
const A0 = (n, i) => {
  const o = yn.createTransformer(i),
    a = yi(n),
    c = yi(i);
  return a.indexes.var.length === c.indexes.var.length &&
    a.indexes.color.length === c.indexes.color.length &&
    a.indexes.number.length >= c.indexes.number.length
    ? (wa.has(n) && !c.values.length) || (wa.has(i) && !a.values.length)
      ? P0(n, i)
      : Si(Lp(E0(a, c), c.values), o)
    : Ko(n, i);
};
function Vp(n, i, o) {
  return typeof n == "number" && typeof i == "number" && typeof o == "number"
    ? Ce(n, i, o)
    : su(n)(n, i);
}
const R0 = 5;
function _p(n, i, o) {
  const a = Math.max(i - R0, 0);
  return lp(o - n(a), i - a);
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
  ra = 0.001;
function D0({
  duration: n = Re.duration,
  bounce: i = Re.bounce,
  velocity: o = Re.velocity,
  mass: a = Re.mass,
}) {
  let c,
    d,
    f = 1 - i;
  ((f = Xt(Re.minDamping, Re.maxDamping, f)),
    (n = Xt(Re.minDuration, Re.maxDuration, Qt(n))),
    f < 1
      ? ((c = (g) => {
          const v = g * f,
            w = v * n,
            T = v - o,
            R = Sa(g, f),
            _ = Math.exp(-w);
          return ra - (T / R) * _;
        }),
        (d = (g) => {
          const w = g * f * n,
            T = w * o + o,
            R = Math.pow(f, 2) * Math.pow(g, 2) * n,
            _ = Math.exp(-w),
            j = Sa(Math.pow(g, 2), f);
          return ((-c(g) + ra > 0 ? -1 : 1) * ((T - R) * _)) / j;
        }))
      : ((c = (g) => {
          const v = Math.exp(-g * n),
            w = (g - o) * n + 1;
          return -ra + v * w;
        }),
        (d = (g) => {
          const v = Math.exp(-g * n),
            w = (o - g) * (n * n);
          return v * w;
        })));
  const p = 5 / n,
    m = M0(c, d, p);
  if (((n = Gt(n)), isNaN(m))) return { stiffness: Re.stiffness, damping: Re.damping, duration: n };
  {
    const g = Math.pow(m, 2) * a;
    return { stiffness: g, damping: f * 2 * Math.sqrt(a * g), duration: n };
  }
}
const j0 = 12;
function M0(n, i, o) {
  let a = o;
  for (let c = 1; c < j0; c++) a = a - n(a) / i(a);
  return a;
}
function Sa(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const L0 = ["duration", "bounce"],
  V0 = ["stiffness", "damping", "mass"];
function Vd(n, i) {
  return i.some((o) => n[o] !== void 0);
}
function _0(n) {
  let i = {
    velocity: Re.velocity,
    stiffness: Re.stiffness,
    damping: Re.damping,
    mass: Re.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Vd(n, V0) && Vd(n, L0))
    if (n.visualDuration) {
      const o = n.visualDuration,
        a = (2 * Math.PI) / (o * 1.2),
        c = a * a,
        d = 2 * Xt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Re.mass, stiffness: c, damping: d };
    } else {
      const o = D0(n);
      ((i = { ...i, ...o, mass: Re.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function Np(n = Re.visualDuration, i = Re.bounce) {
  const o = typeof n != "object" ? { visualDuration: n, keyframes: [0, 1], bounce: i } : n;
  let { restSpeed: a, restDelta: c } = o;
  const d = o.keyframes[0],
    f = o.keyframes[o.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: g,
      mass: v,
      duration: w,
      velocity: T,
      isResolvedFromDuration: R,
    } = _0({ ...o, velocity: -Qt(o.velocity || 0) }),
    _ = T || 0,
    j = g / (2 * Math.sqrt(m * v)),
    N = f - d,
    F = Qt(Math.sqrt(m / v)),
    W = Math.abs(N) < 5;
  (a || (a = W ? Re.restSpeed.granular : Re.restSpeed.default),
    c || (c = W ? Re.restDelta.granular : Re.restDelta.default));
  let K;
  if (j < 1) {
    const Q = Sa(F, j);
    K = (ne) => {
      const ae = Math.exp(-j * F * ne);
      return f - ae * (((_ + j * F * N) / Q) * Math.sin(Q * ne) + N * Math.cos(Q * ne));
    };
  } else if (j === 1) K = (Q) => f - Math.exp(-F * Q) * (N + (_ + F * N) * Q);
  else {
    const Q = F * Math.sqrt(j * j - 1);
    K = (ne) => {
      const ae = Math.exp(-j * F * ne),
        J = Math.min(Q * ne, 300);
      return f - (ae * ((_ + j * F * N) * Math.sinh(J) + Q * N * Math.cosh(J))) / Q;
    };
  }
  const te = {
    calculatedDuration: (R && w) || null,
    next: (Q) => {
      const ne = K(Q);
      if (R) p.done = Q >= w;
      else {
        let ae = 0;
        j < 1 && (ae = Q === 0 ? Gt(_) : _p(K, Q, ne));
        const J = Math.abs(ae) <= a,
          Te = Math.abs(f - ne) <= c;
        p.done = J && Te;
      }
      return ((p.value = p.done ? f : ne), p);
    },
    toString: () => {
      const Q = Math.min(bh(te), ha),
        ne = ep((ae) => te.next(Q * ae).value, Q, 30);
      return Q + "ms " + ne;
    },
  };
  return te;
}
function _d({
  keyframes: n,
  velocity: i = 0,
  power: o = 0.8,
  timeConstant: a = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: p,
  max: m,
  restDelta: g = 0.5,
  restSpeed: v,
}) {
  const w = n[0],
    T = { done: !1, value: w },
    R = (J) => (p !== void 0 && J < p) || (m !== void 0 && J > m),
    _ = (J) => (p === void 0 ? m : m === void 0 || Math.abs(p - J) < Math.abs(m - J) ? p : m);
  let j = o * i;
  const N = w + j,
    F = f === void 0 ? N : f(N);
  F !== N && (j = F - w);
  const W = (J) => -j * Math.exp(-J / a),
    K = (J) => F + W(J),
    te = (J) => {
      const Te = W(J),
        Ee = K(J);
      ((T.done = Math.abs(Te) <= g), (T.value = T.done ? F : Ee));
    };
  let Q, ne;
  const ae = (J) => {
    R(T.value) &&
      ((Q = J),
      (ne = Np({
        keyframes: [T.value, _(T.value)],
        velocity: _p(K, J, T.value),
        damping: c,
        stiffness: d,
        restDelta: g,
        restSpeed: v,
      })));
  };
  return (
    ae(0),
    {
      calculatedDuration: null,
      next: (J) => {
        let Te = !1;
        return (
          !ne && Q === void 0 && ((Te = !0), te(J), ae(J)),
          Q !== void 0 && J >= Q ? ne.next(J - Q) : (!Te && te(J), T)
        );
      },
    }
  );
}
const N0 = wi(0.42, 0, 1, 1),
  I0 = wi(0, 0, 0.58, 1),
  Ip = wi(0.42, 0, 0.58, 1),
  O0 = (n) => Array.isArray(n) && typeof n[0] != "number",
  F0 = {
    linear: ft,
    easeIn: N0,
    easeInOut: Ip,
    easeOut: I0,
    circIn: tu,
    circInOut: gp,
    circOut: mp,
    backIn: eu,
    backInOut: hp,
    backOut: dp,
    anticipate: pp,
  },
  Nd = (n) => {
    if (Ya(n)) {
      Vh(n.length === 4);
      const [i, o, a, c] = n;
      return wi(i, o, a, c);
    } else if (typeof n == "string") return F0[n];
    return n;
  };
function z0(n, i, o) {
  const a = [],
    c = o || Vp,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = c(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || ft : i;
      p = Si(m, p);
    }
    a.push(p);
  }
  return a;
}
function B0(n, i, { clamp: o = !0, ease: a, mixer: c } = {}) {
  const d = n.length;
  if ((Vh(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = z0(i, a, c),
    m = p.length,
    g = (v) => {
      if (f && v < n[0]) return i[0];
      let w = 0;
      if (m > 1) for (; w < n.length - 2 && !(v < n[w + 1]); w++);
      const T = pr(n[w], n[w + 1], v);
      return p[w](T);
    };
  return o ? (v) => g(Xt(n[0], n[d - 1], v)) : g;
}
function U0(n, i) {
  const o = n[n.length - 1];
  for (let a = 1; a <= i; a++) {
    const c = pr(0, i, a);
    n.push(Ce(o, 1, c));
  }
}
function W0(n) {
  const i = [0];
  return (U0(i, n.length - 1), i);
}
function H0(n, i) {
  return n.map((o) => o * i);
}
function $0(n, i) {
  return n.map(() => i || Ip).splice(0, n.length - 1);
}
function Go({ duration: n = 300, keyframes: i, times: o, ease: a = "easeInOut" }) {
  const c = O0(a) ? a.map(Nd) : Nd(a),
    d = { done: !1, value: i[0] },
    f = H0(o && o.length === i.length ? o : W0(i), n),
    p = B0(f, i, { ease: Array.isArray(c) ? c : $0(i, c) });
  return { calculatedDuration: n, next: (m) => ((d.value = p(m)), (d.done = m >= n), d) };
}
const K0 = (n) => {
    const i = ({ timestamp: o }) => n(o);
    return {
      start: () => ve.update(i, !0),
      stop: () => gn(i),
      now: () => (Be.isProcessing ? Be.timestamp : It.now()),
    };
  },
  G0 = { decay: _d, inertia: _d, tween: Go, keyframes: Go, spring: Np },
  Q0 = (n) => n / 100;
class lu extends Mp {
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
    const { name: o, motionValue: a, element: c, keyframes: d } = this.options,
      f = (c == null ? void 0 : c.KeyframeResolver) || ou,
      p = (m, g) => this.onKeyframesResolved(m, g);
    ((this.resolver = new f(d, p, o, a, c)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes)));
  }
  initPlayback(i) {
    const {
        type: o = "keyframes",
        repeat: a = 0,
        repeatDelay: c = 0,
        repeatType: d,
        velocity: f = 0,
      } = this.options,
      p = Xa(o) ? o : G0[o] || Go;
    let m, g;
    p !== Go && typeof i[0] != "number" && ((m = Si(Q0, Vp(i[0], i[1]))), (i = [0, 100]));
    const v = p({ ...this.options, keyframes: i });
    (d === "mirror" && (g = p({ ...this.options, keyframes: [...i].reverse(), velocity: -f })),
      v.calculatedDuration === null && (v.calculatedDuration = bh(v)));
    const { calculatedDuration: w } = v,
      T = w + c,
      R = T * (a + 1) - c;
    return {
      generator: v,
      mirroredGenerator: g,
      mapPercentToKeyframes: m,
      calculatedDuration: w,
      resolvedDuration: T,
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
  tick(i, o = !1) {
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
      totalDuration: v,
      resolvedDuration: w,
    } = a;
    if (this.startTime === null) return d.next(0);
    const { delay: T, repeat: R, repeatType: _, repeatDelay: j, onUpdate: N } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 && (this.startTime = Math.min(i - v / this.speed, this.startTime)),
      o
        ? (this.currentTime = i)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(i - this.startTime) * this.speed));
    const F = this.currentTime - T * (this.speed >= 0 ? 1 : -1),
      W = this.speed >= 0 ? F < 0 : F > v;
    ((this.currentTime = Math.max(F, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = v));
    let K = this.currentTime,
      te = d;
    if (R) {
      const J = Math.min(this.currentTime, v) / w;
      let Te = Math.floor(J),
        Ee = J % 1;
      (!Ee && J >= 1 && (Ee = 1),
        Ee === 1 && Te--,
        (Te = Math.min(Te, R + 1)),
        !!(Te % 2) &&
          (_ === "reverse" ? ((Ee = 1 - Ee), j && (Ee -= j / w)) : _ === "mirror" && (te = f)),
        (K = Xt(0, 1, Ee) * w));
    }
    const Q = W ? { done: !1, value: m[0] } : te.next(K);
    p && (Q.value = p(Q.value));
    let { done: ne } = Q;
    !W && g !== null && (ne = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0);
    const ae =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ne));
    return (
      ae && c !== void 0 && (Q.value = bo(m, this.options, c)),
      N && N(Q.value),
      ae && this.finish(),
      Q
    );
  }
  get duration() {
    const { resolved: i } = this;
    return i ? Qt(i.calculatedDuration) : 0;
  }
  get time() {
    return Qt(this.currentTime);
  }
  set time(i) {
    ((i = Gt(i)),
      (this.currentTime = i),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = i)
        : this.driver && (this.startTime = this.driver.now() - i / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const o = this.playbackSpeed !== i;
    ((this.playbackSpeed = i), o && (this.time = Qt(this.currentTime)));
  }
  play() {
    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: i = K0, onPlay: o, startTime: a } = this.options;
    (this.driver || (this.driver = i((d) => this.tick(d))), o && o());
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
const X0 = new Set(["opacity", "clipPath", "filter", "transform"]);
function Y0(
  n,
  i,
  o,
  {
    delay: a = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: p = "easeInOut",
    times: m,
  } = {},
) {
  const g = { [i]: o };
  m && (g.offset = m);
  const v = np(p, c);
  return (
    Array.isArray(v) && (g.easing = v),
    n.animate(g, {
      delay: a,
      duration: c,
      easing: Array.isArray(v) ? "linear" : v,
      fill: "both",
      iterations: d + 1,
      direction: f === "reverse" ? "alternate" : "normal",
    })
  );
}
const Z0 = Va(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Qo = 10,
  q0 = 2e4;
function J0(n) {
  return Xa(n.type) || n.type === "spring" || !tp(n.ease);
}
function b0(n, i) {
  const o = new lu({ ...i, keyframes: n, repeat: 0, delay: 0, isGenerator: !0 });
  let a = { done: !1, value: n[0] };
  const c = [];
  let d = 0;
  for (; !a.done && d < q0;) ((a = o.sample(d)), c.push(a.value), (d += Qo));
  return { times: void 0, keyframes: c, duration: d - Qo, ease: "linear" };
}
const Op = { anticipate: pp, backInOut: hp, circInOut: gp };
function e1(n) {
  return n in Op;
}
class Id extends Mp {
  constructor(i) {
    super(i);
    const { name: o, motionValue: a, element: c, keyframes: d } = this.options;
    ((this.resolver = new jp(d, (f, p) => this.onKeyframesResolved(f, p), o, a, c)),
      this.resolver.scheduleResolve());
  }
  initPlayback(i, o) {
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
    if ((typeof d == "string" && $o() && e1(d) && (d = Op[d]), J0(this.options))) {
      const { onComplete: w, onUpdate: T, motionValue: R, element: _, ...j } = this.options,
        N = b0(i, j);
      ((i = N.keyframes),
        i.length === 1 && (i[1] = i[0]),
        (a = N.duration),
        (c = N.times),
        (d = N.ease),
        (f = "keyframes"));
    }
    const v = Y0(p.owner.current, m, i, { ...this.options, duration: a, times: c, ease: d });
    return (
      (v.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? (wd(v, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (v.onfinish = () => {
            const { onComplete: w } = this.options;
            (p.set(bo(i, this.options, o)), w && w(), this.cancel(), this.resolveFinishedPromise());
          }),
      { animation: v, duration: a, times: c, type: f, ease: d, keyframes: i }
    );
  }
  get duration() {
    const { resolved: i } = this;
    if (!i) return 0;
    const { duration: o } = i;
    return Qt(o);
  }
  get time() {
    const { resolved: i } = this;
    if (!i) return 0;
    const { animation: o } = i;
    return Qt(o.currentTime || 0);
  }
  set time(i) {
    const { resolved: o } = this;
    if (!o) return;
    const { animation: a } = o;
    a.currentTime = Gt(i);
  }
  get speed() {
    const { resolved: i } = this;
    if (!i) return 1;
    const { animation: o } = i;
    return o.playbackRate;
  }
  set speed(i) {
    const { resolved: o } = this;
    if (!o) return;
    const { animation: a } = o;
    a.playbackRate = i;
  }
  get state() {
    const { resolved: i } = this;
    if (!i) return "idle";
    const { animation: o } = i;
    return o.playState;
  }
  get startTime() {
    const { resolved: i } = this;
    if (!i) return null;
    const { animation: o } = i;
    return o.startTime;
  }
  attachTimeline(i) {
    if (!this._resolved) this.pendingTimeline = i;
    else {
      const { resolved: o } = this;
      if (!o) return ft;
      const { animation: a } = o;
      wd(a, i);
    }
    return ft;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: i } = this;
    if (!i) return;
    const { animation: o } = i;
    (o.playState === "finished" && this.updateFinishedPromise(), o.play());
  }
  pause() {
    const { resolved: i } = this;
    if (!i) return;
    const { animation: o } = i;
    o.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")) return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: i } = this;
    if (!i) return;
    const { animation: o, keyframes: a, duration: c, type: d, ease: f, times: p } = i;
    if (o.playState === "idle" || o.playState === "finished") return;
    if (this.time) {
      const { motionValue: g, onUpdate: v, onComplete: w, element: T, ...R } = this.options,
        _ = new lu({
          ...R,
          keyframes: a,
          duration: c,
          type: d,
          ease: f,
          times: p,
          isGenerator: !0,
        }),
        j = Gt(this.time);
      g.setWithVelocity(_.sample(j - Qo).value, _.sample(j).value, Qo);
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
    const { motionValue: o, name: a, repeatDelay: c, repeatType: d, damping: f, type: p } = i;
    if (!o || !o.owner || !(o.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: m, transformTemplate: g } = o.owner.getProps();
    return Z0() && a && X0.has(a) && !m && !g && !c && d !== "mirror" && f !== 0 && p !== "inertia";
  }
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
  o1 = (n, { keyframes: i }) =>
    i.length > 2 ? r1 : On.has(n) ? (n.startsWith("scale") ? n1(i[1]) : t1) : i1;
function s1({
  when: n,
  delay: i,
  delayChildren: o,
  staggerChildren: a,
  staggerDirection: c,
  repeat: d,
  repeatType: f,
  repeatDelay: p,
  from: m,
  elapsed: g,
  ...v
}) {
  return !!Object.keys(v).length;
}
const au =
  (n, i, o, a = {}, c, d) =>
  (f) => {
    const p = Qa(a, n) || {},
      m = p.delay || a.delay || 0;
    let { elapsed: g = 0 } = a;
    g = g - Gt(m);
    let v = {
      keyframes: Array.isArray(o) ? o : [null, o],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...p,
      delay: -g,
      onUpdate: (T) => {
        (i.set(T), p.onUpdate && p.onUpdate(T));
      },
      onComplete: () => {
        (f(), p.onComplete && p.onComplete());
      },
      name: n,
      motionValue: i,
      element: d ? void 0 : c,
    };
    (s1(p) || (v = { ...v, ...o1(n, v) }),
      v.duration && (v.duration = Gt(v.duration)),
      v.repeatDelay && (v.repeatDelay = Gt(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from));
    let w = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ((v.duration = 0), v.delay === 0 && (w = !0)),
      w && !d && i.get() !== void 0)
    ) {
      const T = bo(v.keyframes, p);
      if (T !== void 0)
        return (
          ve.update(() => {
            (v.onUpdate(T), v.onComplete());
          }),
          new Cv([])
        );
    }
    return !d && Id.supports(v) ? new Id(v) : new lu(v);
  };
function l1({ protectedKeys: n, needsAnimating: i }, o) {
  const a = n.hasOwnProperty(o) && i[o] !== !0;
  return ((i[o] = !1), a);
}
function Fp(n, i, { delay: o = 0, transitionOverride: a, type: c } = {}) {
  var d;
  let { transition: f = n.getDefaultTransition(), transitionEnd: p, ...m } = i;
  a && (f = a);
  const g = [],
    v = c && n.animationState && n.animationState.getState()[c];
  for (const w in m) {
    const T = n.getValue(w, (d = n.latestValues[w]) !== null && d !== void 0 ? d : null),
      R = m[w];
    if (R === void 0 || (v && l1(v, w))) continue;
    const _ = { delay: o, ...Qa(f || {}, w) };
    let j = !1;
    if (window.MotionHandoffAnimation) {
      const F = ap(n);
      if (F) {
        const W = window.MotionHandoffAnimation(F, w, ve);
        W !== null && ((_.startTime = W), (j = !0));
      }
    }
    (ma(n, w), T.start(au(w, T, R, n.shouldReduceMotion && sp.has(w) ? { type: !1 } : _, n, j)));
    const N = T.animation;
    N && g.push(N);
  }
  return (
    p &&
      Promise.all(g).then(() => {
        ve.update(() => {
          p && zv(n, p);
        });
      }),
    g
  );
}
function Ta(n, i, o = {}) {
  var a;
  const c = Jo(
    n,
    i,
    o.type === "exit"
      ? (a = n.presenceContext) === null || a === void 0
        ? void 0
        : a.custom
      : void 0,
  );
  let { transition: d = n.getDefaultTransition() || {} } = c || {};
  o.transitionOverride && (d = o.transitionOverride);
  const f = c ? () => Promise.all(Fp(n, c, o)) : () => Promise.resolve(),
    p =
      n.variantChildren && n.variantChildren.size
        ? (g = 0) => {
            const { delayChildren: v = 0, staggerChildren: w, staggerDirection: T } = d;
            return a1(n, i, v + g, w, T, o);
          }
        : () => Promise.resolve(),
    { when: m } = d;
  if (m) {
    const [g, v] = m === "beforeChildren" ? [f, p] : [p, f];
    return g().then(() => v());
  } else return Promise.all([f(), p(o.delay)]);
}
function a1(n, i, o = 0, a = 0, c = 1, d) {
  const f = [],
    p = (n.variantChildren.size - 1) * a,
    m = c === 1 ? (g = 0) => g * a : (g = 0) => p - g * a;
  return (
    Array.from(n.variantChildren)
      .sort(u1)
      .forEach((g, v) => {
        (g.notify("AnimationStart", i),
          f.push(Ta(g, i, { ...d, delay: o + m(v) }).then(() => g.notify("AnimationComplete", i))));
      }),
    Promise.all(f)
  );
}
function u1(n, i) {
  return n.sortNodePosition(i);
}
function c1(n, i, o = {}) {
  n.notify("AnimationStart", i);
  let a;
  if (Array.isArray(i)) {
    const c = i.map((d) => Ta(n, d, o));
    a = Promise.all(c);
  } else if (typeof i == "string") a = Ta(n, i, o);
  else {
    const c = typeof i == "function" ? Jo(n, i, o.custom) : i;
    a = Promise.all(Fp(n, c, o));
  }
  return a.then(() => {
    n.notify("AnimationComplete", i);
  });
}
const f1 = Na.length;
function zp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const o = n.parent ? zp(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (o.initial = n.props.initial), o);
  }
  const i = {};
  for (let o = 0; o < f1; o++) {
    const a = Na[o],
      c = n.props[a];
    (pi(c) || c === !1) && (i[a] = c);
  }
  return i;
}
const d1 = [..._a].reverse(),
  h1 = _a.length;
function p1(n) {
  return (i) => Promise.all(i.map(({ animation: o, options: a }) => c1(n, o, a)));
}
function m1(n) {
  let i = p1(n),
    o = Od(),
    a = !0;
  const c = (m) => (g, v) => {
    var w;
    const T = Jo(
      n,
      v,
      m === "exit"
        ? (w = n.presenceContext) === null || w === void 0
          ? void 0
          : w.custom
        : void 0,
    );
    if (T) {
      const { transition: R, transitionEnd: _, ...j } = T;
      g = { ...g, ...j, ..._ };
    }
    return g;
  };
  function d(m) {
    i = m(n);
  }
  function f(m) {
    const { props: g } = n,
      v = zp(n.parent) || {},
      w = [],
      T = new Set();
    let R = {},
      _ = 1 / 0;
    for (let N = 0; N < h1; N++) {
      const F = d1[N],
        W = o[F],
        K = g[F] !== void 0 ? g[F] : v[F],
        te = pi(K),
        Q = F === m ? W.isActive : null;
      Q === !1 && (_ = N);
      let ne = K === v[F] && K !== g[F] && te;
      if (
        (ne && a && n.manuallyAnimateOnMount && (ne = !1),
        (W.protectedKeys = { ...R }),
        (!W.isActive && Q === null) || (!K && !W.prevProp) || Zo(K) || typeof K == "boolean")
      )
        continue;
      const ae = g1(W.prevProp, K);
      let J = ae || (F === m && W.isActive && !ne && te) || (N > _ && te),
        Te = !1;
      const Ee = Array.isArray(K) ? K : [K];
      let qe = Ee.reduce(c(F), {});
      Q === !1 && (qe = {});
      const { prevResolvedValues: ot = {} } = W,
        Qe = { ...ot, ...qe },
        Je = (ie) => {
          ((J = !0), T.has(ie) && ((Te = !0), T.delete(ie)), (W.needsAnimating[ie] = !0));
          const O = n.getValue(ie);
          O && (O.liveStyle = !1);
        };
      for (const ie in Qe) {
        const O = qe[ie],
          X = ot[ie];
        if (R.hasOwnProperty(ie)) continue;
        let B = !1;
        (da(O) && da(X) ? (B = !Jh(O, X)) : (B = O !== X),
          B
            ? O != null
              ? Je(ie)
              : T.add(ie)
            : O !== void 0 && T.has(ie)
              ? Je(ie)
              : (W.protectedKeys[ie] = !0));
      }
      ((W.prevProp = K),
        (W.prevResolvedValues = qe),
        W.isActive && (R = { ...R, ...qe }),
        a && n.blockInitialAnimation && (J = !1),
        J &&
          (!(ne && ae) || Te) &&
          w.push(...Ee.map((ie) => ({ animation: ie, options: { type: F } }))));
    }
    if (T.size) {
      const N = {};
      (T.forEach((F) => {
        const W = n.getBaseTarget(F),
          K = n.getValue(F);
        (K && (K.liveStyle = !0), (N[F] = W ?? null));
      }),
        w.push({ animation: N }));
    }
    let j = !!w.length;
    return (
      a && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (j = !1),
      (a = !1),
      j ? i(w) : Promise.resolve()
    );
  }
  function p(m, g) {
    var v;
    if (o[m].isActive === g) return Promise.resolve();
    ((v = n.variantChildren) === null ||
      v === void 0 ||
      v.forEach((T) => {
        var R;
        return (R = T.animationState) === null || R === void 0 ? void 0 : R.setActive(m, g);
      }),
      (o[m].isActive = g));
    const w = f(m);
    for (const T in o) o[T].protectedKeys = {};
    return w;
  }
  return {
    animateChanges: f,
    setActive: p,
    setAnimateFunction: d,
    getState: () => o,
    reset: () => {
      ((o = Od()), (a = !0));
    },
  };
}
function g1(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !Jh(i, n) : !1;
}
function Ln(n = !1) {
  return { isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Od() {
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
class y1 extends vn {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = m1(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Zo(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    i !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var i;
    (this.node.animationState.reset(),
      (i = this.unmountControls) === null || i === void 0 || i.call(this));
  }
}
let v1 = 0;
class x1 extends vn {
  constructor() {
    (super(...arguments), (this.id = v1++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: o } = this.node.presenceContext,
      { isPresent: a } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === a) return;
    const c = this.node.animationState.setActive("exit", !i);
    o && !i && c.then(() => o(this.id));
  }
  mount() {
    const { register: i } = this.node.presenceContext || {};
    i && (this.unmount = i(this.id));
  }
  unmount() {}
}
const w1 = { animation: { Feature: y1 }, exit: { Feature: x1 } };
function vi(n, i, o, a = { passive: !0 }) {
  return (n.addEventListener(i, o, a), () => n.removeEventListener(i, o));
}
function Ti(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const S1 = (n) => (i) => Za(i) && n(i, Ti(i));
function fi(n, i, o, a) {
  return vi(n, i, S1(o), a);
}
const Fd = (n, i) => Math.abs(n - i);
function T1(n, i) {
  const o = Fd(n.x, i.x),
    a = Fd(n.y, i.y);
  return Math.sqrt(o ** 2 + a ** 2);
}
class Bp {
  constructor(i, o, { transformPagePoint: a, contextWindow: c, dragSnapToOrigin: d = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const w = oa(this.lastMoveEventInfo, this.history),
          T = this.startEvent !== null,
          R = T1(w.offset, { x: 0, y: 0 }) >= 3;
        if (!T && !R) return;
        const { point: _ } = w,
          { timestamp: j } = Be;
        this.history.push({ ..._, timestamp: j });
        const { onStart: N, onMove: F } = this.handlers;
        (T || (N && N(this.lastMoveEvent, w), (this.startEvent = this.lastMoveEvent)),
          F && F(this.lastMoveEvent, w));
      }),
      (this.handlePointerMove = (w, T) => {
        ((this.lastMoveEvent = w),
          (this.lastMoveEventInfo = ia(T, this.transformPagePoint)),
          ve.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (w, T) => {
        this.end();
        const { onEnd: R, onSessionEnd: _, resumeAnimation: j } = this.handlers;
        if ((this.dragSnapToOrigin && j && j(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const N = oa(
          w.type === "pointercancel" ? this.lastMoveEventInfo : ia(T, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && R && R(w, N), _ && _(w, N));
      }),
      !Za(i))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = o),
      (this.transformPagePoint = a),
      (this.contextWindow = c || window));
    const f = Ti(i),
      p = ia(f, this.transformPagePoint),
      { point: m } = p,
      { timestamp: g } = Be;
    this.history = [{ ...m, timestamp: g }];
    const { onSessionStart: v } = o;
    (v && v(i, oa(p, this.history)),
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
function ia(n, i) {
  return i ? { point: i(n.point) } : n;
}
function zd(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function oa({ point: n }, i) {
  return { point: n, delta: zd(n, Up(i)), offset: zd(n, P1(i)), velocity: k1(i, 0.1) };
}
function P1(n) {
  return n[0];
}
function Up(n) {
  return n[n.length - 1];
}
function k1(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let o = n.length - 1,
    a = null;
  const c = Up(n);
  for (; o >= 0 && ((a = n[o]), !(c.timestamp - a.timestamp > Gt(i)));) o--;
  if (!a) return { x: 0, y: 0 };
  const d = Qt(c.timestamp - a.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - a.x) / d, y: (c.y - a.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
const Wp = 1e-4,
  C1 = 1 - Wp,
  E1 = 1 + Wp,
  Hp = 0.01,
  A1 = 0 - Hp,
  R1 = 0 + Hp;
function dt(n) {
  return n.max - n.min;
}
function D1(n, i, o) {
  return Math.abs(n - i) <= o;
}
function Bd(n, i, o, a = 0.5) {
  ((n.origin = a),
    (n.originPoint = Ce(i.min, i.max, n.origin)),
    (n.scale = dt(o) / dt(i)),
    (n.translate = Ce(o.min, o.max, n.origin) - n.originPoint),
    ((n.scale >= C1 && n.scale <= E1) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= A1 && n.translate <= R1) || isNaN(n.translate)) && (n.translate = 0));
}
function di(n, i, o, a) {
  (Bd(n.x, i.x, o.x, a ? a.originX : void 0), Bd(n.y, i.y, o.y, a ? a.originY : void 0));
}
function Ud(n, i, o) {
  ((n.min = o.min + i.min), (n.max = n.min + dt(i)));
}
function j1(n, i, o) {
  (Ud(n.x, i.x, o.x), Ud(n.y, i.y, o.y));
}
function Wd(n, i, o) {
  ((n.min = i.min - o.min), (n.max = n.min + dt(i)));
}
function hi(n, i, o) {
  (Wd(n.x, i.x, o.x), Wd(n.y, i.y, o.y));
}
function M1(n, { min: i, max: o }, a) {
  return (
    i !== void 0 && n < i
      ? (n = a ? Ce(i, n, a.min) : Math.max(n, i))
      : o !== void 0 && n > o && (n = a ? Ce(o, n, a.max) : Math.min(n, o)),
    n
  );
}
function Hd(n, i, o) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: o !== void 0 ? n.max + o - (n.max - n.min) : void 0,
  };
}
function L1(n, { top: i, left: o, bottom: a, right: c }) {
  return { x: Hd(n.x, o, c), y: Hd(n.y, i, a) };
}
function $d(n, i) {
  let o = i.min - n.min,
    a = i.max - n.max;
  return (i.max - i.min < n.max - n.min && ([o, a] = [a, o]), { min: o, max: a });
}
function V1(n, i) {
  return { x: $d(n.x, i.x), y: $d(n.y, i.y) };
}
function _1(n, i) {
  let o = 0.5;
  const a = dt(n),
    c = dt(i);
  return (
    c > a ? (o = pr(i.min, i.max - a, n.min)) : a > c && (o = pr(n.min, n.max - c, i.min)),
    Xt(0, 1, o)
  );
}
function N1(n, i) {
  const o = {};
  return (
    i.min !== void 0 && (o.min = i.min - n.min),
    i.max !== void 0 && (o.max = i.max - n.min),
    o
  );
}
const Pa = 0.35;
function I1(n = Pa) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Pa),
    { x: Kd(n, "left", "right"), y: Kd(n, "top", "bottom") }
  );
}
function Kd(n, i, o) {
  return { min: Gd(n, i), max: Gd(n, o) };
}
function Gd(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const Qd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  fr = () => ({ x: Qd(), y: Qd() }),
  Xd = () => ({ min: 0, max: 0 }),
  Me = () => ({ x: Xd(), y: Xd() });
function wt(n) {
  return [n("x"), n("y")];
}
function $p({ top: n, left: i, right: o, bottom: a }) {
  return { x: { min: i, max: o }, y: { min: n, max: a } };
}
function O1({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function F1(n, i) {
  if (!i) return n;
  const o = i({ x: n.left, y: n.top }),
    a = i({ x: n.right, y: n.bottom });
  return { top: o.y, left: o.x, bottom: a.y, right: a.x };
}
function sa(n) {
  return n === void 0 || n === 1;
}
function ka({ scale: n, scaleX: i, scaleY: o }) {
  return !sa(n) || !sa(i) || !sa(o);
}
function Vn(n) {
  return ka(n) || Kp(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Kp(n) {
  return Yd(n.x) || Yd(n.y);
}
function Yd(n) {
  return n && n !== "0%";
}
function Xo(n, i, o) {
  const a = n - o,
    c = i * a;
  return o + c;
}
function Zd(n, i, o, a, c) {
  return (c !== void 0 && (n = Xo(n, c, a)), Xo(n, o, a) + i);
}
function Ca(n, i = 0, o = 1, a, c) {
  ((n.min = Zd(n.min, i, o, a, c)), (n.max = Zd(n.max, i, o, a, c)));
}
function Gp(n, { x: i, y: o }) {
  (Ca(n.x, i.translate, i.scale, i.originPoint), Ca(n.y, o.translate, o.scale, o.originPoint));
}
const qd = 0.999999999999,
  Jd = 1.0000000000001;
function z1(n, i, o, a = !1) {
  const c = o.length;
  if (!c) return;
  i.x = i.y = 1;
  let d, f;
  for (let p = 0; p < c; p++) {
    ((d = o[p]), (f = d.projectionDelta));
    const { visualElement: m } = d.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (a &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        hr(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Gp(n, f)),
      a && Vn(d.latestValues) && hr(n, d.latestValues));
  }
  (i.x < Jd && i.x > qd && (i.x = 1), i.y < Jd && i.y > qd && (i.y = 1));
}
function dr(n, i) {
  ((n.min = n.min + i), (n.max = n.max + i));
}
function bd(n, i, o, a, c = 0.5) {
  const d = Ce(n.min, n.max, c);
  Ca(n, i, o, d, a);
}
function hr(n, i) {
  (bd(n.x, i.x, i.scaleX, i.scale, i.originX), bd(n.y, i.y, i.scaleY, i.scale, i.originY));
}
function Qp(n, i) {
  return $p(F1(n.getBoundingClientRect(), i));
}
function B1(n, i, o) {
  const a = Qp(n, o),
    { scroll: c } = i;
  return (c && (dr(a.x, c.offset.x), dr(a.y, c.offset.y)), a);
}
const Xp = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  U1 = new WeakMap();
class W1 {
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
  start(i, { snapToCursor: o = !1 } = {}) {
    const { presenceContext: a } = this.visualElement;
    if (a && a.isPresent === !1) return;
    const c = (v) => {
        const { dragSnapToOrigin: w } = this.getProps();
        (w ? this.pauseAnimation() : this.stopAnimation(), o && this.snapToCursor(Ti(v).point));
      },
      d = (v, w) => {
        const { drag: T, dragPropagation: R, onDragStart: _ } = this.getProps();
        if (
          T &&
          !R &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = _v(T)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          wt((N) => {
            let F = this.getAxisMotionValue(N).get() || 0;
            if (Nt.test(F)) {
              const { projection: W } = this.visualElement;
              if (W && W.layout) {
                const K = W.layout.layoutBox[N];
                K && (F = dt(K) * (parseFloat(F) / 100));
              }
            }
            this.originPoint[N] = F;
          }),
          _ && ve.postRender(() => _(v, w)),
          ma(this.visualElement, "transform"));
        const { animationState: j } = this.visualElement;
        j && j.setActive("whileDrag", !0);
      },
      f = (v, w) => {
        const {
          dragPropagation: T,
          dragDirectionLock: R,
          onDirectionLock: _,
          onDrag: j,
        } = this.getProps();
        if (!T && !this.openDragLock) return;
        const { offset: N } = w;
        if (R && this.currentDirection === null) {
          ((this.currentDirection = H1(N)),
            this.currentDirection !== null && _ && _(this.currentDirection));
          return;
        }
        (this.updateAxis("x", w.point, N),
          this.updateAxis("y", w.point, N),
          this.visualElement.render(),
          j && j(v, w));
      },
      p = (v, w) => this.stop(v, w),
      m = () =>
        wt((v) => {
          var w;
          return (
            this.getAnimationState(v) === "paused" &&
            ((w = this.getAxisMotionValue(v).animation) === null || w === void 0
              ? void 0
              : w.play())
          );
        }),
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new Bp(
      i,
      { onSessionStart: c, onStart: d, onMove: f, onSessionEnd: p, resumeAnimation: m },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        contextWindow: Xp(this.visualElement),
      },
    );
  }
  stop(i, o) {
    const a = this.isDragging;
    if ((this.cancel(), !a)) return;
    const { velocity: c } = o;
    this.startAnimation(c);
    const { onDragEnd: d } = this.getProps();
    d && ve.postRender(() => d(i, o));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: o } = this.visualElement;
    (i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: a } = this.getProps();
    (!a && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1));
  }
  updateAxis(i, o, a) {
    const { drag: c } = this.getProps();
    if (!a || !Oo(i, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + a[i];
    (this.constraints && this.constraints[i] && (f = M1(f, this.constraints[i], this.elastic[i])),
      d.set(f));
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: o, dragElastic: a } = this.getProps(),
      c =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (i = this.visualElement.projection) === null || i === void 0
            ? void 0
            : i.layout,
      d = this.constraints;
    (o && ur(o)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : o && c
        ? (this.constraints = L1(c.layoutBox, o))
        : (this.constraints = !1),
      (this.elastic = I1(a)),
      d !== this.constraints &&
        c &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        wt((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = N1(c.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: o } = this.getProps();
    if (!i || !ur(i)) return !1;
    const a = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = B1(a, c.root, this.visualElement.getTransformPagePoint());
    let f = V1(c.layout.layoutBox, d);
    if (o) {
      const p = o(O1(f));
      ((this.hasMutatedConstraints = !!p), p && (f = $p(p)));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: o,
        dragMomentum: a,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: p,
      } = this.getProps(),
      m = this.constraints || {},
      g = wt((v) => {
        if (!Oo(v, o, this.currentDirection)) return;
        let w = (m && m[v]) || {};
        f && (w = { min: 0, max: 0 });
        const T = c ? 200 : 1e6,
          R = c ? 40 : 1e7,
          _ = {
            type: "inertia",
            velocity: a ? i[v] : 0,
            bounceStiffness: T,
            bounceDamping: R,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...w,
          };
        return this.startAxisValueAnimation(v, _);
      });
    return Promise.all(g).then(p);
  }
  startAxisValueAnimation(i, o) {
    const a = this.getAxisMotionValue(i);
    return (ma(this.visualElement, i), a.start(au(i, a, 0, o, this.visualElement, !1)));
  }
  stopAnimation() {
    wt((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    wt((i) => {
      var o;
      return (o = this.getAxisMotionValue(i).animation) === null || o === void 0
        ? void 0
        : o.pause();
    });
  }
  getAnimationState(i) {
    var o;
    return (o = this.getAxisMotionValue(i).animation) === null || o === void 0 ? void 0 : o.state;
  }
  getAxisMotionValue(i) {
    const o = `_drag${i.toUpperCase()}`,
      a = this.visualElement.getProps(),
      c = a[o];
    return c || this.visualElement.getValue(i, (a.initial ? a.initial[i] : void 0) || 0);
  }
  snapToCursor(i) {
    wt((o) => {
      const { drag: a } = this.getProps();
      if (!Oo(o, a, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: f, max: p } = c.layout.layoutBox[o];
        d.set(i[o] - Ce(f, p, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: o } = this.getProps(),
      { projection: a } = this.visualElement;
    if (!ur(o) || !a || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    wt((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = _1({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      a.root && a.root.updateScroll(),
      a.updateLayout(),
      this.resolveConstraints(),
      wt((f) => {
        if (!Oo(f, i, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: g } = this.constraints[f];
        p.set(Ce(m, g, c[f]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    U1.set(this.visualElement, this);
    const i = this.visualElement.current,
      o = fi(i, "pointerdown", (m) => {
        const { drag: g, dragListener: v = !0 } = this.getProps();
        g && v && this.start(m);
      }),
      a = () => {
        const { dragConstraints: m } = this.getProps();
        ur(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", a);
    (c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), ve.read(a));
    const f = vi(window, "resize", () => this.scalePositionWithinConstraints()),
      p = c.addEventListener("didUpdate", ({ delta: m, hasLayoutChanged: g }) => {
        this.isDragging &&
          g &&
          (wt((v) => {
            const w = this.getAxisMotionValue(v);
            w && ((this.originPoint[v] += m[v].translate), w.set(w.get() + m[v].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (f(), o(), d(), p && p());
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: a = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: f = Pa,
        dragMomentum: p = !0,
      } = i;
    return {
      ...i,
      drag: o,
      dragDirectionLock: a,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: p,
    };
  }
}
function Oo(n, i, o) {
  return (i === !0 || i === n) && (o === null || o === n);
}
function H1(n, i = 10) {
  let o = null;
  return (Math.abs(n.y) > i ? (o = "y") : Math.abs(n.x) > i && (o = "x"), o);
}
class $1 extends vn {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = ft),
      (this.removeListeners = ft),
      (this.controls = new W1(i)));
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
const eh = (n) => (i, o) => {
  n && ve.postRender(() => n(i, o));
};
class K1 extends vn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = ft));
  }
  onPointerDown(i) {
    this.session = new Bp(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Xp(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: o, onPan: a, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: eh(i),
      onStart: eh(o),
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
const Uo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function th(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const si = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (b.test(n)) n = parseFloat(n);
        else return n;
      const o = th(n, i.target.x),
        a = th(n, i.target.y);
      return `${o}% ${a}%`;
    },
  },
  G1 = {
    correct: (n, { treeScale: i, projectionDelta: o }) => {
      const a = n,
        c = yn.parse(n);
      if (c.length > 5) return a;
      const d = yn.createTransformer(n),
        f = typeof c[0] != "number" ? 1 : 0,
        p = o.x.scale * i.x,
        m = o.y.scale * i.y;
      ((c[0 + f] /= p), (c[1 + f] /= m));
      const g = Ce(p, m, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= g),
        typeof c[3 + f] == "number" && (c[3 + f] /= g),
        d(c)
      );
    },
  };
class Q1 extends q.Component {
  componentDidMount() {
    const { visualElement: i, layoutGroup: o, switchLayoutGroup: a, layoutId: c } = this.props,
      { projection: d } = i;
    (hv(X1),
      d &&
        (o.group && o.group.add(d),
        a && a.register && c && a.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({ ...d.options, onExitComplete: () => this.safeToRemove() })),
      (Uo.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: o, visualElement: a, drag: c, isPresent: d } = this.props,
      f = a.projection;
    return (
      f &&
        ((f.isPresent = d),
        c || i.layoutDependency !== o || o === void 0 ? f.willUpdate() : this.safeToRemove(),
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
      Oa.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: o, switchLayoutGroup: a } = this.props,
      { projection: c } = i;
    c &&
      (c.scheduleCheckAfterUnmount(),
      o && o.group && o.group.remove(c),
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
function Yp(n) {
  const [i, o] = Ry(),
    a = q.useContext(Mh);
  return k.jsx(Q1, {
    ...n,
    layoutGroup: a,
    switchLayoutGroup: q.useContext(zh),
    isPresent: i,
    safeToRemove: o,
  });
}
const X1 = {
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
  boxShadow: G1,
};
function Y1(n, i, o) {
  const a = Ge(n) ? n : gi(n);
  return (a.start(au("", a, i, o)), a.animation);
}
function Z1(n) {
  return n instanceof SVGElement && n.tagName !== "svg";
}
const q1 = (n, i) => n.depth - i.depth;
class J1 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (qa(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (Ja(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(q1), (this.isDirty = !1), this.children.forEach(i));
  }
}
function b1(n, i) {
  const o = It.now(),
    a = ({ timestamp: c }) => {
      const d = c - o;
      d >= i && (gn(a), n(d - i));
    };
  return (ve.read(a, !0), () => gn(a));
}
const Zp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  ex = Zp.length,
  nh = (n) => (typeof n == "string" ? parseFloat(n) : n),
  rh = (n) => typeof n == "number" || b.test(n);
function tx(n, i, o, a, c, d) {
  c
    ? ((n.opacity = Ce(0, o.opacity !== void 0 ? o.opacity : 1, nx(a))),
      (n.opacityExit = Ce(i.opacity !== void 0 ? i.opacity : 1, 0, rx(a))))
    : d &&
      (n.opacity = Ce(
        i.opacity !== void 0 ? i.opacity : 1,
        o.opacity !== void 0 ? o.opacity : 1,
        a,
      ));
  for (let f = 0; f < ex; f++) {
    const p = `border${Zp[f]}Radius`;
    let m = ih(i, p),
      g = ih(o, p);
    if (m === void 0 && g === void 0) continue;
    (m || (m = 0),
      g || (g = 0),
      m === 0 || g === 0 || rh(m) === rh(g)
        ? ((n[p] = Math.max(Ce(nh(m), nh(g), a), 0)), (Nt.test(g) || Nt.test(m)) && (n[p] += "%"))
        : (n[p] = g));
  }
  (i.rotate || o.rotate) && (n.rotate = Ce(i.rotate || 0, o.rotate || 0, a));
}
function ih(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const nx = qp(0, 0.5, mp),
  rx = qp(0.5, 0.95, ft);
function qp(n, i, o) {
  return (a) => (a < n ? 0 : a > i ? 1 : o(pr(n, i, a)));
}
function oh(n, i) {
  ((n.min = i.min), (n.max = i.max));
}
function xt(n, i) {
  (oh(n.x, i.x), oh(n.y, i.y));
}
function sh(n, i) {
  ((n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin));
}
function lh(n, i, o, a, c) {
  return ((n -= i), (n = Xo(n, 1 / o, a)), c !== void 0 && (n = Xo(n, 1 / c, a)), n);
}
function ix(n, i = 0, o = 1, a = 0.5, c, d = n, f = n) {
  if (
    (Nt.test(i) && ((i = parseFloat(i)), (i = Ce(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = Ce(d.min, d.max, a);
  (n === d && (p -= i), (n.min = lh(n.min, i, o, p, c)), (n.max = lh(n.max, i, o, p, c)));
}
function ah(n, i, [o, a, c], d, f) {
  ix(n, i[o], i[a], i[c], i.scale, d, f);
}
const ox = ["x", "scaleX", "originX"],
  sx = ["y", "scaleY", "originY"];
function uh(n, i, o, a) {
  (ah(n.x, i, ox, o ? o.x : void 0, a ? a.x : void 0),
    ah(n.y, i, sx, o ? o.y : void 0, a ? a.y : void 0));
}
function ch(n) {
  return n.translate === 0 && n.scale === 1;
}
function Jp(n) {
  return ch(n.x) && ch(n.y);
}
function fh(n, i) {
  return n.min === i.min && n.max === i.max;
}
function lx(n, i) {
  return fh(n.x, i.x) && fh(n.y, i.y);
}
function dh(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function bp(n, i) {
  return dh(n.x, i.x) && dh(n.y, i.y);
}
function hh(n) {
  return dt(n.x) / dt(n.y);
}
function ph(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
class ax {
  constructor() {
    this.members = [];
  }
  add(i) {
    (qa(this.members, i), i.scheduleRender());
  }
  remove(i) {
    if ((Ja(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead)) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(i) {
    const o = this.members.findIndex((c) => i === c);
    if (o === 0) return !1;
    let a;
    for (let c = o; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        a = d;
        break;
      }
    }
    return a ? (this.promote(a), !0) : !1;
  }
  promote(i, o) {
    const a = this.lead;
    if (i !== a && ((this.prevLead = a), (this.lead = i), i.show(), a)) {
      (a.instance && a.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = a),
        o && (i.resumeFrom.preserveOpacity = !0),
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
      const { options: o, resumingFrom: a } = i;
      (o.onExitComplete && o.onExitComplete(),
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
function ux(n, i, o) {
  let a = "";
  const c = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = (o == null ? void 0 : o.z) || 0;
  if (
    ((c || d || f) && (a = `translate3d(${c}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (a += `scale(${1 / i.x}, ${1 / i.y}) `),
    o)
  ) {
    const { transformPerspective: g, rotate: v, rotateX: w, rotateY: T, skewX: R, skewY: _ } = o;
    (g && (a = `perspective(${g}px) ${a}`),
      v && (a += `rotate(${v}deg) `),
      w && (a += `rotateX(${w}deg) `),
      T && (a += `rotateY(${T}deg) `),
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
  la = ["", "X", "Y", "Z"],
  cx = { visibility: "hidden" },
  mh = 1e3;
let fx = 0;
function aa(n, i, o, a) {
  const { latestValues: c } = i;
  c[n] && ((o[n] = c[n]), i.setStaticValue(n, 0), a && (a[n] = 0));
}
function em(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const o = ap(i);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(o, "transform", ve, !(c || d));
  }
  const { parent: a } = n;
  a && !a.hasCheckedOptimisedAppear && em(a);
}
function tm({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: o,
  checkIsScrollRoot: a,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, p = i == null ? void 0 : i()) {
      ((this.id = fx++),
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
            this.nodes.forEach(px),
            this.nodes.forEach(xx),
            this.nodes.forEach(wx),
            this.nodes.forEach(mx),
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
      this.root === this && (this.nodes = new J1());
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
      ((this.isSVG = Z1(f)), (this.instance = f));
      const { layoutId: m, layout: g, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        p && (g || m) && (this.isLayoutDirty = !0),
        n)
      ) {
        let w;
        const T = () => (this.root.updateBlockedByResize = !1);
        n(f, () => {
          ((this.root.updateBlockedByResize = !0),
            w && w(),
            (w = b1(T, 250)),
            Uo.hasAnimatedSinceResize &&
              ((Uo.hasAnimatedSinceResize = !1), this.nodes.forEach(yh)));
        });
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          v &&
          (m || g) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: w, hasLayoutChanged: T, hasRelativeTargetChanged: R, layout: _ }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const j = this.options.transition || v.getDefaultTransition() || Cx,
                { onLayoutAnimationStart: N, onLayoutAnimationComplete: F } = v.getProps(),
                W = !this.targetLayout || !bp(this.targetLayout, _) || R,
                K = !T && R;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                K ||
                (T && (W || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(w, K));
                const te = { ...Qa(j, "layout"), onPlay: N, onComplete: F };
                ((v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((te.delay = 0), (te.type = !1)),
                  this.startAnimation(te));
              } else
                (T || yh(this),
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Sx), this.animationId++);
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
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && em(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const w = this.path[v];
        ((w.shouldResetTransform = !0),
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
        (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(gh));
        return;
      }
      (this.isUpdating || this.nodes.forEach(yx),
        (this.isUpdating = !1),
        this.nodes.forEach(vx),
        this.nodes.forEach(dx),
        this.nodes.forEach(hx),
        this.clearAllSnapshots());
      const p = It.now();
      ((Be.delta = Xt(0, 1e3 / 60, p - Be.timestamp)),
        (Be.timestamp = p),
        (Be.isProcessing = !0),
        Jl.update.process(Be),
        Jl.preRender.process(Be),
        Jl.render.process(Be),
        (Be.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Oa.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(gx), this.sharedNodes.forEach(Tx));
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
      if (!c) return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !Jp(this.projectionDelta),
        m = this.getTransformTemplate(),
        g = m ? m(this.latestValues, "") : void 0,
        v = g !== this.prevTransformTemplateValue;
      f &&
        (p || Vn(this.latestValues) || v) &&
        (c(this.instance, g), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        f && (m = this.removeTransform(m)),
        Ex(m),
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
        ((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) || this.path.some(Ax)
      )) {
        const { scroll: v } = this.root;
        v && (dr(m.x, v.offset.x), dr(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var p;
      const m = Me();
      if ((xt(m, f), !((p = this.scroll) === null || p === void 0) && p.wasRoot)) return m;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g],
          { scroll: w, options: T } = v;
        v !== this.root &&
          w &&
          T.layoutScroll &&
          (w.wasRoot && xt(m, f), dr(m.x, w.offset.x), dr(m.y, w.offset.y));
      }
      return m;
    }
    applyTransform(f, p = !1) {
      const m = Me();
      xt(m, f);
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        (!p &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          hr(m, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          Vn(v.latestValues) && hr(m, v.latestValues));
      }
      return (Vn(this.latestValues) && hr(m, this.latestValues), m);
    }
    removeTransform(f) {
      const p = Me();
      xt(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        if (!g.instance || !Vn(g.latestValues)) continue;
        ka(g.latestValues) && g.updateSnapshot();
        const v = Me(),
          w = g.measurePageBox();
        (xt(v, w), uh(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, v));
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
        this.relativeParent.resolvedRelativeTargetAt !== Be.timestamp &&
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
      const { layout: w, layoutId: T } = this.options;
      if (!(!this.layout || !(w || T))) {
        if (
          ((this.resolvedRelativeTargetAt = Be.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const R = this.getClosestProjectingParent();
          R && R.layout && this.animationProgress !== 1
            ? ((this.relativeParent = R),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Me()),
              (this.relativeTargetOrigin = Me()),
              hi(this.relativeTargetOrigin, this.layout.layoutBox, R.layout.layoutBox),
              xt(this.relativeTarget, this.relativeTargetOrigin))
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
                j1(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : xt(this.target, this.layout.layoutBox),
                  Gp(this.target, this.targetDelta))
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
                (this.relativeTarget = Me()),
                (this.relativeTargetOrigin = Me()),
                hi(this.relativeTargetOrigin, this.target, R.target),
                xt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ui && _n.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ka(this.parent.latestValues) || Kp(this.parent.latestValues)))
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
        this.resolvedRelativeTargetAt === Be.timestamp && (g = !1),
        g)
      )
        return;
      const { layout: v, layoutId: w } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(v || w))
      )
        return;
      xt(this.layoutCorrected, this.layout.layoutBox);
      const T = this.treeScale.x,
        R = this.treeScale.y;
      (z1(this.layoutCorrected, this.treeScale, this.path, m),
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
        : (sh(this.prevProjectionDelta.x, this.projectionDelta.x),
          sh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        di(this.projectionDelta, this.layoutCorrected, _, this.latestValues),
        (this.treeScale.x !== T ||
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
      ((this.prevProjectionDelta = fr()),
        (this.projectionDelta = fr()),
        (this.projectionDeltaWithTransform = fr()));
    }
    setAnimationOrigin(f, p = !1) {
      const m = this.snapshot,
        g = m ? m.latestValues : {},
        v = { ...this.latestValues },
        w = fr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const T = Me(),
        R = m ? m.source : void 0,
        _ = this.layout ? this.layout.source : void 0,
        j = R !== _,
        N = this.getStack(),
        F = !N || N.members.length <= 1,
        W = !!(j && !F && this.options.crossfade === !0 && !this.path.some(kx));
      this.animationProgress = 0;
      let K;
      ((this.mixTargetDelta = (te) => {
        const Q = te / 1e3;
        (vh(w.x, f.x, Q),
          vh(w.y, f.y, Q),
          this.setTargetDelta(w),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (hi(T, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Px(this.relativeTarget, this.relativeTargetOrigin, T, Q),
            K && lx(this.relativeTarget, K) && (this.isProjectionDirty = !1),
            K || (K = Me()),
            xt(K, this.relativeTarget)),
          j && ((this.animationValues = v), tx(v, g, this.latestValues, Q, W, F)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = Q));
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
        (this.pendingAnimation = ve.update(() => {
          ((Uo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Y1(0, mh, {
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
      let { targetWithTransforms: p, target: m, layout: g, latestValues: v } = f;
      if (!(!p || !m || !g)) {
        if (
          this !== f &&
          this.layout &&
          g &&
          nm(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          m = this.target || Me();
          const w = dt(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + w));
          const T = dt(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + T));
        }
        (xt(p, m), hr(p, v), di(this.projectionDeltaWithTransform, this.layoutCorrected, p, v));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new ax()),
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
      m.z && aa("z", f, g, this.animationValues);
      for (let v = 0; v < la.length; v++)
        (aa(`rotate${la[v]}`, f, g, this.animationValues),
          aa(`skew${la[v]}`, f, g, this.animationValues));
      f.render();
      for (const v in g)
        (f.setStaticValue(v, g[v]), this.animationValues && (this.animationValues[v] = g[v]));
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      var p, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return cx;
      const g = { visibility: "" },
        v = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (g.opacity = ""),
          (g.pointerEvents = zo(f == null ? void 0 : f.pointerEvents) || ""),
          (g.transform = v ? v(this.latestValues, "") : "none"),
          g
        );
      const w = this.getLead();
      if (!this.projectionDelta || !this.layout || !w.target) {
        const j = {};
        return (
          this.options.layoutId &&
            ((j.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (j.pointerEvents = zo(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !Vn(this.latestValues) &&
            ((j.transform = v ? v({}, "") : "none"), (this.hasProjected = !1)),
          j
        );
      }
      const T = w.animationValues || w.latestValues;
      (this.applyTransformsToTarget(),
        (g.transform = ux(this.projectionDeltaWithTransform, this.treeScale, T)),
        v && (g.transform = v(T, g.transform)));
      const { x: R, y: _ } = this.projectionDelta;
      ((g.transformOrigin = `${R.origin * 100}% ${_.origin * 100}% 0`),
        w.animationValues
          ? (g.opacity =
              w === this
                ? (m = (p = T.opacity) !== null && p !== void 0 ? p : this.latestValues.opacity) !==
                    null && m !== void 0
                  ? m
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : T.opacityExit)
          : (g.opacity =
              w === this
                ? T.opacity !== void 0
                  ? T.opacity
                  : ""
                : T.opacityExit !== void 0
                  ? T.opacityExit
                  : 0));
      for (const j in Ho) {
        if (T[j] === void 0) continue;
        const { correct: N, applyTo: F } = Ho[j],
          W = g.transform === "none" ? T[j] : N(T[j], w);
        if (F) {
          const K = F.length;
          for (let te = 0; te < K; te++) g[F[te]] = W;
        } else g[j] = W;
      }
      return (
        this.options.layoutId &&
          (g.pointerEvents = w === this ? zo(f == null ? void 0 : f.pointerEvents) || "" : "none"),
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
function dx(n) {
  n.updateLayout();
}
function hx(n) {
  var i;
  const o = ((i = n.resumeFrom) === null || i === void 0 ? void 0 : i.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && o && n.hasListeners("didUpdate")) {
    const { layoutBox: a, measuredBox: c } = n.layout,
      { animationType: d } = n.options,
      f = o.source !== n.layout.source;
    d === "size"
      ? wt((w) => {
          const T = f ? o.measuredBox[w] : o.layoutBox[w],
            R = dt(T);
          ((T.min = a[w].min), (T.max = T.min + R));
        })
      : nm(d, o.layoutBox, a) &&
        wt((w) => {
          const T = f ? o.measuredBox[w] : o.layoutBox[w],
            R = dt(a[w]);
          ((T.max = T.min + R),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[w].max = n.relativeTarget[w].min + R)));
        });
    const p = fr();
    di(p, a, o.layoutBox);
    const m = fr();
    f ? di(m, n.applyTransform(c, !0), o.measuredBox) : di(m, a, o.layoutBox);
    const g = !Jp(p);
    let v = !1;
    if (!n.resumeFrom) {
      const w = n.getClosestProjectingParent();
      if (w && !w.resumeFrom) {
        const { snapshot: T, layout: R } = w;
        if (T && R) {
          const _ = Me();
          hi(_, o.layoutBox, T.layoutBox);
          const j = Me();
          (hi(j, a, R.layoutBox),
            bp(_, j) || (v = !0),
            w.options.layoutRoot &&
              ((n.relativeTarget = j), (n.relativeTargetOrigin = _), (n.relativeParent = w)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: a,
      snapshot: o,
      delta: m,
      layoutDelta: p,
      hasLayoutChanged: g,
      hasRelativeTargetChanged: v,
    });
  } else if (n.isLead()) {
    const { onExitComplete: a } = n.options;
    a && a();
  }
  n.options.transition = void 0;
}
function px(n) {
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
function mx(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function gx(n) {
  n.clearSnapshot();
}
function gh(n) {
  n.clearMeasurements();
}
function yx(n) {
  n.isLayoutDirty = !1;
}
function vx(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function yh(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function xx(n) {
  n.resolveTargetDelta();
}
function wx(n) {
  n.calcProjection();
}
function Sx(n) {
  n.resetSkewAndRotation();
}
function Tx(n) {
  n.removeLeadSnapshot();
}
function vh(n, i, o) {
  ((n.translate = Ce(i.translate, 0, o)),
    (n.scale = Ce(i.scale, 1, o)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint));
}
function xh(n, i, o, a) {
  ((n.min = Ce(i.min, o.min, a)), (n.max = Ce(i.max, o.max, a)));
}
function Px(n, i, o, a) {
  (xh(n.x, i.x, o.x, a), xh(n.y, i.y, o.y, a));
}
function kx(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const Cx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  wh = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  Sh = wh("applewebkit/") && !wh("chrome/") ? Math.round : ft;
function Th(n) {
  ((n.min = Sh(n.min)), (n.max = Sh(n.max)));
}
function Ex(n) {
  (Th(n.x), Th(n.y));
}
function nm(n, i, o) {
  return n === "position" || (n === "preserve-aspect" && !D1(hh(i), hh(o), 0.2));
}
function Ax(n) {
  var i;
  return n !== n.root && ((i = n.scroll) === null || i === void 0 ? void 0 : i.wasRoot);
}
const Rx = tm({
    attachResizeListener: (n, i) => vi(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ua = { current: void 0 },
  rm = tm({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!ua.current) {
        const n = new Rx({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (ua.current = n));
      }
      return ua.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  Dx = { pan: { Feature: K1 }, drag: { Feature: $1, ProjectionNode: rm, MeasureLayout: Yp } };
function Ph(n, i, o) {
  const { props: a } = n;
  n.animationState && a.whileHover && n.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o,
    d = a[c];
  d && ve.postRender(() => d(i, Ti(i)));
}
class jx extends vn {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = Dv(i, (o) => (Ph(this.node, o, "Start"), (a) => Ph(this.node, a, "End"))));
  }
  unmount() {}
}
class Mx extends vn {
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
function kh(n, i, o) {
  const { props: a } = n;
  n.animationState && a.whileTap && n.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o),
    d = a[c];
  d && ve.postRender(() => d(i, Ti(i)));
}
class Lx extends vn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = Vv(
        i,
        (o) => (
          kh(this.node, o, "Start"),
          (a, { success: c }) => kh(this.node, a, c ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Ea = new WeakMap(),
  ca = new WeakMap(),
  Vx = (n) => {
    const i = Ea.get(n.target);
    i && i(n);
  },
  _x = (n) => {
    n.forEach(Vx);
  };
function Nx({ root: n, ...i }) {
  const o = n || document;
  ca.has(o) || ca.set(o, {});
  const a = ca.get(o),
    c = JSON.stringify(i);
  return (a[c] || (a[c] = new IntersectionObserver(_x, { root: n, ...i })), a[c]);
}
function Ix(n, i, o) {
  const a = Nx(i);
  return (
    Ea.set(n, o),
    a.observe(n),
    () => {
      (Ea.delete(n), a.unobserve(n));
    }
  );
}
const Ox = { some: 0, all: 1 };
class Fx extends vn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: o, margin: a, amount: c = "some", once: d } = i,
      f = {
        root: o ? o.current : void 0,
        rootMargin: a,
        threshold: typeof c == "number" ? c : Ox[c],
      },
      p = (m) => {
        const { isIntersecting: g } = m;
        if (this.isInView === g || ((this.isInView = g), d && !g && this.hasEnteredView)) return;
        (g && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", g));
        const { onViewportEnter: v, onViewportLeave: w } = this.node.getProps(),
          T = g ? v : w;
        T && T(m);
      };
    return Ix(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(zx(i, o)) && this.startObserver();
  }
  unmount() {}
}
function zx({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (o) => n[o] !== i[o];
}
const Bx = {
    inView: { Feature: Fx },
    tap: { Feature: Lx },
    focus: { Feature: Mx },
    hover: { Feature: jx },
  },
  Ux = { layout: { ProjectionNode: rm, MeasureLayout: Yp } },
  Aa = { current: null },
  im = { current: !1 };
function Wx() {
  if (((im.current = !0), !!La))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Aa.current = n.matches);
      (n.addListener(i), i());
    } else Aa.current = !1;
}
const Hx = [...Dp, Ke, yn],
  $x = (n) => Hx.find(Rp(n)),
  Ch = new WeakMap();
function Kx(n, i, o) {
  for (const a in i) {
    const c = i[a],
      d = o[a];
    if (Ge(c)) n.addValue(a, c);
    else if (Ge(d)) n.addValue(a, gi(c, { owner: n }));
    else if (d !== c)
      if (n.hasValue(a)) {
        const f = n.getValue(a);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = n.getStaticValue(a);
        n.addValue(a, gi(f !== void 0 ? f : c, { owner: n }));
      }
  }
  for (const a in o) i[a] === void 0 && n.removeValue(a);
  return i;
}
const Eh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class Gx {
  scrapeMotionValuesFromProps(i, o, a) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: o,
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
      (this.KeyframeResolver = ou),
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
        const R = It.now();
        this.renderScheduledAt < R &&
          ((this.renderScheduledAt = R), ve.render(this.render, !1, !0));
      }));
    const { latestValues: m, renderState: g, onUpdate: v } = f;
    ((this.onUpdate = v),
      (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = o.initial ? { ...m } : {}),
      (this.renderState = g),
      (this.parent = i),
      (this.props = o),
      (this.presenceContext = a),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = p),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = qo(o)),
      (this.isVariantNode = Oh(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: w, ...T } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const R in T) {
      const _ = T[R];
      m[R] !== void 0 && Ge(_) && _.set(m[R], !1);
    }
  }
  mount(i) {
    ((this.current = i),
      Ch.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, a) => this.bindToMotionValue(a, o)),
      im.current || Wx(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Aa.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Ch.delete(this.current),
      this.projection && this.projection.unmount(),
      gn(this.notifyUpdate),
      gn(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const o = this.features[i];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(i, o) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const a = On.has(i),
      c = o.on("change", (p) => {
        ((this.latestValues[i] = p),
          this.props.onUpdate && ve.preRender(this.notifyUpdate),
          a && this.projection && (this.projection.isTransformDirty = !0));
      }),
      d = o.on("renderRequest", this.scheduleRender);
    let f;
    (window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, i, o)),
      this.valueSubscriptions.set(i, () => {
        (c(), d(), f && f(), o.owner && o.stop());
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
      const o = mr[i];
      if (!o) continue;
      const { isEnabled: a, Feature: c } = o;
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Me();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, o) {
    this.latestValues[i] = o;
  }
  update(i, o) {
    ((i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o));
    for (let a = 0; a < Eh.length; a++) {
      const c = Eh[a];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = Kx(
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
    const o = this.getClosestVariantNode();
    if (o)
      return (o.variantChildren && o.variantChildren.add(i), () => o.variantChildren.delete(i));
  }
  addValue(i, o) {
    const a = this.values.get(i);
    o !== a &&
      (a && this.removeValue(i),
      this.bindToMotionValue(i, o),
      this.values.set(i, o),
      (this.latestValues[i] = o.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const o = this.valueSubscriptions.get(i);
    (o && (o(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState));
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, o) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let a = this.values.get(i);
    return (
      a === void 0 &&
        o !== void 0 &&
        ((a = gi(o === null ? void 0 : o, { owner: this })), this.addValue(i, a)),
      a
    );
  }
  readValue(i, o) {
    var a;
    let c =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (a = this.getBaseTargetFromProps(this.props, i)) !== null && a !== void 0
          ? a
          : this.readValueFromInstance(this.current, i, this.options);
    return (
      c != null &&
        (typeof c == "string" && (Ep(c) || yp(c))
          ? (c = parseFloat(c))
          : !$x(c) && yn.test(o) && (c = Pp(i, o)),
        this.setBaseTarget(i, Ge(c) ? c.get() : c)),
      Ge(c) ? c.get() : c
    );
  }
  setBaseTarget(i, o) {
    this.baseTarget[i] = o;
  }
  getBaseTarget(i) {
    var o;
    const { initial: a } = this.props;
    let c;
    if (typeof a == "string" || typeof a == "object") {
      const f = za(
        this.props,
        a,
        (o = this.presenceContext) === null || o === void 0 ? void 0 : o.custom,
      );
      f && (c = f[i]);
    }
    if (a && c !== void 0) return c;
    const d = this.getBaseTargetFromProps(this.props, i);
    return d !== void 0 && !Ge(d)
      ? d
      : this.initialValues[i] !== void 0 && c === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, o) {
    return (this.events[i] || (this.events[i] = new ba()), this.events[i].add(o));
  }
  notify(i, ...o) {
    this.events[i] && this.events[i].notify(...o);
  }
}
class om extends Gx {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = jp));
  }
  sortInstanceNodePosition(i, o) {
    return i.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, o) {
    return i.style ? i.style[o] : void 0;
  }
  removeValueFromRenderState(i, { vars: o, style: a }) {
    (delete o[i], delete a[i]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    Ge(i) &&
      (this.childSubscription = i.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
function Qx(n) {
  return window.getComputedStyle(n);
}
class Xx extends om {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Gh));
  }
  readValueFromInstance(i, o) {
    if (On.has(o)) {
      const a = iu(o);
      return (a && a.default) || 0;
    } else {
      const a = Qx(i),
        c = (Hh(o) ? a.getPropertyValue(o) : a[o]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: o }) {
    return Qp(i, o);
  }
  build(i, o, a) {
    Wa(i, o, a.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, o, a) {
    return Ga(i, o, a);
  }
}
class Yx extends om {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Me));
  }
  getBaseTargetFromProps(i, o) {
    return i[o];
  }
  readValueFromInstance(i, o) {
    if (On.has(o)) {
      const a = iu(o);
      return (a && a.default) || 0;
    }
    return ((o = Qh.has(o) ? o : Ia(o)), i.getAttribute(o));
  }
  scrapeMotionValuesFromProps(i, o, a) {
    return Zh(i, o, a);
  }
  build(i, o, a) {
    Ha(i, o, this.isSVGTag, a.transformTemplate);
  }
  renderInstance(i, o, a, c) {
    Xh(i, o, a, c);
  }
  mount(i) {
    ((this.isSVGTag = Ka(i.tagName)), super.mount(i));
  }
}
const Zx = (n, i) => (Fa(n) ? new Yx(i) : new Xx(i, { allowProjection: n !== q.Fragment })),
  qx = Tv({ ...w1, ...Bx, ...Dx, ...Ux }, Zx),
  Kt = Oy(qx),
  Jx = {
    div: Kt.div,
    section: Kt.section,
    span: Kt.span,
    h1: Kt.h1,
    h2: Kt.h2,
    h3: Kt.h3,
    p: Kt.p,
    nav: Kt.nav,
  };
function Se({
  children: n,
  delay: i = 0,
  duration: o = 0.7,
  y: a = 24,
  className: c,
  style: d,
  as: f = "div",
  once: p = !0,
}) {
  const m = Jx[f] ?? Kt.div;
  return k.jsx(m, {
    initial: { opacity: 0, y: a },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: p, amount: 0.2 },
    transition: { duration: o, delay: i, ease: [0.22, 1, 0.36, 1] },
    className: c,
    style: d,
    children: n,
  });
}
const bx = [
    { label: "MAIN", section: "main" },
    { label: "OFFERING", section: "offering" },
    { label: "CASE", section: "case" },
    { label: "RATES", section: "rates" },
  ],
  ew = [
    { label: "CREW", section: "crew" },
    { label: "CONNECT", section: "connect" },
  ];
function tw(n) {
  if (Rh() !== "") {
    (Ah(""),
      window.addEventListener(
        "hashchange",
        () => {
          requestAnimationFrame(() => fa(n));
        },
        { once: !0 },
      ));
    return;
  }
  fa(n);
}
function nw() {
  const n = (i) => (o) => {
    (o.preventDefault(), tw(i));
  };
  return k.jsxs("nav", {
    className: "cognitra-nav",
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      background: "transparent",
      borderBottom: "1px solid rgba(0,0,0,0.18)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 32px",
    },
    children: [
      k.jsx(Se, {
        delay: 0,
        children: k.jsx("a", {
          href: Fo("main"),
          onClick: n("main"),
          className: "cognitra-nav-brand cognitra-nav-link",
          style: {
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#1a1a1a",
            textDecoration: "none",
          },
          children: "COGNITRA",
        }),
      }),
      k.jsx("div", {
        className: "cognitra-nav-links hidden sm:flex",
        style: { gap: 48, alignItems: "center" },
        children: bx.map((i, o) =>
          k.jsx(
            Se,
            {
              delay: 0.05 + o * 0.05,
              children: k.jsx("a", {
                href: Fo(i.section),
                onClick: n(i.section),
                className: "cognitra-nav-link",
                style: {
                  fontSize: 11,
                  letterSpacing: "0.06em",
                  color: "#1a1a1a",
                  fontWeight: 400,
                  textDecoration: "none",
                },
                children: i.label,
              }),
            },
            i.section,
          ),
        ),
      }),
      k.jsx("div", {
        className: "cognitra-nav-links cognitra-nav-links-secondary flex",
        style: { gap: 48, alignItems: "center" },
        children: ew.map((i, o) =>
          k.jsx(
            Se,
            {
              delay: 0.3 + o * 0.05,
              children: k.jsx("a", {
                href: Fo(i.section),
                onClick: n(i.section),
                className: "cognitra-nav-link",
                style: {
                  fontSize: 11,
                  letterSpacing: "0.06em",
                  color: "#1a1a1a",
                  fontWeight: 400,
                  textDecoration: "none",
                },
                children: i.label,
              }),
            },
            i.section,
          ),
        ),
      }),
    ],
  });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rw = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  sm = (...n) =>
    n
      .filter((i, o, a) => !!i && i.trim() !== "" && a.indexOf(i) === o)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var iw = {
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
 */ const ow = q.forwardRef(
  (
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: a,
      className: c = "",
      children: d,
      iconNode: f,
      ...p
    },
    m,
  ) =>
    q.createElement(
      "svg",
      {
        ref: m,
        ...iw,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: a ? (Number(o) * 24) / Number(i) : o,
        className: sm("lucide", c),
        ...p,
      },
      [...f.map(([g, v]) => q.createElement(g, v)), ...(Array.isArray(d) ? d : [d])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lm = (n, i) => {
  const o = q.forwardRef(({ className: a, ...c }, d) =>
    q.createElement(ow, { ref: d, iconNode: i, className: sm(`lucide-${rw(n)}`, a), ...c }),
  );
  return ((o.displayName = `${n}`), o);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sw = lm("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lw = lm("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
]);
function aw() {
  return k.jsxs("button", {
    type: "button",
    className: "cognitra-nav-link",
    style: {
      position: "fixed",
      bottom: 32,
      right: 32,
      zIndex: 5,
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "rgba(0,0,0,0.8)",
      fontSize: 11,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      cursor: "pointer",
      background: "none",
      border: "none",
      fontFamily: "inherit",
    },
    onClick: () => {
      typeof navigator < "u" &&
        navigator.share &&
        navigator.share({ title: "COGNITRA", url: window.location.href });
    },
    children: [k.jsx(lw, { size: 14, strokeWidth: 2, "aria-hidden": !0 }), "REPOST"],
  });
}
function uw() {
  return k.jsx("div", {
    "aria-hidden": !0,
    style: { position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 5 },
    children: k.jsx("div", {
      style: {
        width: 22,
        height: 36,
        border: "1.5px solid rgba(0,0,0,0.75)",
        borderRadius: 11,
        display: "flex",
        justifyContent: "center",
        paddingTop: 6,
      },
      children: k.jsx("div", {
        className: "cognitra-scroll-dot",
        style: { width: 3, height: 8, background: "rgba(0,0,0,0.85)", borderRadius: 2 },
      }),
    }),
  });
}
function cw({ children: n, showChrome: i = !0 }) {
  return k.jsxs("div", {
    style: { position: "relative" },
    children: [
      k.jsx(Ey, {}),
      k.jsx(nw, {}),
      n,
      i && k.jsxs(k.Fragment, { children: [k.jsx(uw, {}), k.jsx(aw, {})] }),
    ],
  });
}
function am() {
  return k.jsxs(k.Fragment, {
    children: [
      k.jsx("section", {
        id: "privacy",
        style: {
          position: "relative",
          zIndex: 2,
          background: "#C5C5C5",
          borderTop: "1px solid rgba(0,0,0,0.18)",
          padding: "70px 32px",
        },
        children: k.jsxs("div", {
          style: { maxWidth: 720 },
          children: [
            k.jsx("h2", {
              style: {
                fontSize: "clamp(22px, 2.5vw, 32px)",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#1a1a1a",
                margin: 0,
              },
              children: "Privacy Policy",
            }),
            k.jsx("p", {
              style: {
                marginTop: 16,
                fontSize: 14,
                lineHeight: 1.65,
                color: "#3a3a3a",
                maxWidth: 560,
              },
              children:
                "COGNITRA collects only the information required to deliver automation engagements.",
            }),
          ],
        }),
      }),
      k.jsx("section", {
        id: "terms",
        style: {
          position: "relative",
          zIndex: 2,
          background: "#b8b8b8",
          borderTop: "1px solid rgba(0,0,0,0.18)",
          padding: "70px 32px",
        },
        children: k.jsxs("div", {
          style: { maxWidth: 720 },
          children: [
            k.jsx("h2", {
              style: {
                fontSize: "clamp(22px, 2.5vw, 32px)",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#1a1a1a",
                margin: 0,
              },
              children: "Terms of Service",
            }),
            k.jsx("p", {
              style: {
                marginTop: 16,
                fontSize: 14,
                lineHeight: 1.65,
                color: "#3a3a3a",
                maxWidth: 560,
              },
              children:
                "Use of this site constitutes agreement to COGNITRA's engagement terms. Update with jurisdiction-specific policies before going live.",
            }),
          ],
        }),
      }),
    ],
  });
}
function xr({ counter: n, title: i, subtitle: o, children: a }) {
  return k.jsxs("section", {
    style: {
      position: "relative",
      zIndex: 2,
      background: "#C5C5C5",
      minHeight: "100vh",
      padding: "120px 32px 80px",
    },
    children: [
      k.jsx(Se, {
        delay: 0,
        children: k.jsx("p", {
          style: { fontSize: 11, letterSpacing: "0.08em", color: "#666", margin: "0 0 20px" },
          children: n,
        }),
      }),
      k.jsx(Se, {
        as: "h1",
        delay: 0.1,
        children: k.jsx("h1", {
          style: {
            fontSize: "clamp(26px, 3vw, 42px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "#1a1a1a",
            maxWidth: 520,
            margin: 0,
          },
          children: i,
        }),
      }),
      o &&
        k.jsx(Se, {
          as: "p",
          delay: 0.25,
          children: k.jsx("p", {
            style: {
              marginTop: 20,
              fontSize: 14,
              lineHeight: 1.65,
              color: "#3a3a3a",
              maxWidth: 420,
            },
            children: o,
          }),
        }),
      k.jsx("div", { style: { marginTop: 48 }, children: a }),
    ],
  });
}
function um({ embedded: n = !1 }) {
  const i = k.jsx(xr, {
    counter: "004 / 005",
    title: "Selected client work",
    subtitle: "Automation systems shipped for logistics, health, and retail teams.",
    children: k.jsx("div", {
      style: { display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 },
      children: Py.map((o, a) =>
        k.jsx(
          Se,
          {
            delay: 0.15 + a * 0.1,
            children: k.jsxs("div", {
              style: {
                border: "1px solid rgba(0,0,0,0.18)",
                borderRadius: 16,
                padding: "24px 28px",
                background: "rgba(255,255,255,0.35)",
              },
              children: [
                k.jsx("span", {
                  style: {
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#666",
                  },
                  children: o.tag,
                }),
                k.jsx("h3", {
                  style: { fontSize: 18, fontWeight: 600, color: "#1a1a1a", margin: "8px 0 6px" },
                  children: o.client,
                }),
                k.jsx("p", {
                  style: { fontSize: 13, lineHeight: 1.6, color: "#3a3a3a", margin: 0 },
                  children: o.outcome,
                }),
              ],
            }),
          },
          o.client,
        ),
      ),
    }),
  });
  return i;
}
function cm({ embedded: n = !1 }) {
  const i = k.jsxs(xr, {
    counter: "005 / 005",
    title: "Connect",
    subtitle: "Tell us about your workflows — we reply within two business days.",
    children: [
      k.jsx(Se, {
        delay: 0.2,
        children: k.jsxs("a", {
          href: "mailto:hello@cognitra.ai",
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontSize: 16,
            color: "#1a1a1a",
            textDecoration: "none",
          },
          children: [k.jsx(sw, { size: 18, strokeWidth: 1.5 }), "hello@cognitra.ai"],
        }),
      }),
      k.jsx(Se, {
        delay: 0.35,
        children: k.jsxs("form", {
          style: {
            marginTop: 32,
            maxWidth: 420,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          },
          onSubmit: (o) => o.preventDefault(),
          children: [
            k.jsx("input", {
              type: "text",
              placeholder: "Company",
              "aria-label": "Company",
              style: {
                border: "1px solid rgba(0,0,0,0.18)",
                borderRadius: 9999,
                padding: "12px 20px",
                fontSize: 13,
                background: "rgba(255,255,255,0.5)",
              },
            }),
            k.jsx("input", {
              type: "email",
              placeholder: "Work email",
              "aria-label": "Work email",
              style: {
                border: "1px solid rgba(0,0,0,0.18)",
                borderRadius: 9999,
                padding: "12px 20px",
                fontSize: 13,
                background: "rgba(255,255,255,0.5)",
              },
            }),
            k.jsx("textarea", {
              placeholder: "What should we automate?",
              "aria-label": "Message",
              rows: 4,
              style: {
                border: "1px solid rgba(0,0,0,0.18)",
                borderRadius: 16,
                padding: "12px 20px",
                fontSize: 13,
                background: "rgba(255,255,255,0.5)",
                resize: "vertical",
              },
            }),
            k.jsx("button", {
              type: "submit",
              className: "btn-cognitra-primary",
              style: { alignSelf: "flex-start" },
              children: "SEND MESSAGE",
            }),
          ],
        }),
      }),
    ],
  });
  return i;
}
function fm({ embedded: n = !1 }) {
  const i = k.jsx(xr, {
    counter: "002 / 005",
    title: "The crew",
    subtitle: "Strategists and engineers building bespoke AI products for ambitious teams.",
    children: k.jsx("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 16,
      },
      children: Cy.map((o, a) =>
        k.jsx(
          Se,
          {
            delay: 0.1 + a * 0.08,
            children: k.jsxs("div", {
              style: {
                border: "1px solid rgba(0,0,0,0.18)",
                borderRadius: 16,
                padding: 24,
                background: "rgba(255,255,255,0.35)",
              },
              children: [
                k.jsx("h3", {
                  style: { fontSize: 16, fontWeight: 600, margin: "0 0 4px", color: "#1a1a1a" },
                  children: o.name,
                }),
                k.jsx("p", {
                  style: {
                    fontSize: 12,
                    letterSpacing: "0.06em",
                    margin: "0 0 8px",
                    color: "#666",
                  },
                  children: o.role,
                }),
                k.jsx("p", {
                  style: { fontSize: 13, lineHeight: 1.5, margin: 0, color: "#3a3a3a" },
                  children: o.focus,
                }),
              ],
            }),
          },
          o.name,
        ),
      ),
    }),
  });
  return i;
}
function fw() {
  const n = (i) => (o) => {
    (o.preventDefault(), fa(i));
  };
  return k.jsxs("section", {
    id: "main",
    style: { position: "relative", zIndex: 1, height: "100vh" },
    children: [
      k.jsx("div", {
        className: "cognitra-hero-overlay",
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "48%",
          background: "#C5C5C5",
          display: "flex",
          flexDirection: "column",
          paddingTop: 70,
        },
        children: k.jsx("div", {
          style: { flex: 1, display: "flex", alignItems: "flex-end", padding: "0 32px 24px 32px" },
          children: k.jsxs("div", {
            className: "cognitra-hero-row",
            style: { display: "flex", alignItems: "stretch", width: "100%", gap: 48 },
            children: [
              k.jsxs("div", {
                className: "cognitra-hero-col-left",
                style: {
                  width: "32%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 80,
                },
                children: [
                  k.jsx(Se, {
                    as: "h1",
                    delay: 0.1,
                    children: k.jsxs("h1", {
                      style: {
                        fontSize: "clamp(26px, 3vw, 42px)",
                        fontWeight: 700,
                        lineHeight: 1.05,
                        letterSpacing: "-0.01em",
                        textTransform: "uppercase",
                        color: "#1a1a1a",
                        margin: 0,
                        whiteSpace: "pre-line",
                      },
                      children: [
                        "SCALING",
                        `
`,
                        "FASTER USING AI",
                      ],
                    }),
                  }),
                  k.jsx(Se, {
                    delay: 0.5,
                    children: k.jsx("p", {
                      style: { fontSize: 11, letterSpacing: "0.08em", color: "#666", margin: 0 },
                      children: "001 / 005",
                    }),
                  }),
                ],
              }),
              k.jsxs("div", {
                className: "cognitra-hero-col-right",
                style: {
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 80,
                },
                children: [
                  k.jsx(Se, {
                    as: "p",
                    delay: 0.25,
                    children: k.jsx("p", {
                      style: {
                        fontSize: 18,
                        lineHeight: 1.6,
                        color: "#5a5a5a",
                        maxWidth: 340,
                        margin: 0,
                      },
                      children:
                        "We engineer custom automation flows and personalized AI products for ambitious modern businesses.",
                    }),
                  }),
                  k.jsx(Se, {
                    delay: 0.4,
                    children: k.jsxs("div", {
                      className: "cognitra-hero-buttons",
                      style: { display: "flex", gap: 10 },
                      children: [
                        k.jsx("button", {
                          type: "button",
                          className: "btn-cognitra-primary",
                          onClick: n("connect"),
                          children: "BOOK A CALL!",
                        }),
                        k.jsx("button", {
                          type: "button",
                          className: "btn-cognitra-secondary",
                          onClick: n("offering"),
                          children: "OUR PRODUCTS",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      k.jsx(Se, {
        delay: 0.6,
        className: "cognitra-hero-bottom-text",
        style: {
          position: "absolute",
          top: "74%",
          transform: "translateY(-50%)",
          left: 32,
          maxWidth: 260,
        },
        children: k.jsx("p", {
          style: { fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.9)", margin: 0 },
          children:
            "Guiding future-minded companies forward with bespoke AI products and streamlined workflows.",
        }),
      }),
    ],
  });
}
const dw = "EXPLORE WHAT WE OFFER".split(" ");
function hw() {
  return k.jsxs("section", {
    id: "offering",
    className: "cognitra-section-3 cognitra-section-pad-lg",
    style: {
      position: "relative",
      zIndex: 2,
      background: "#C5C5C5",
      display: "flex",
      flexDirection: "column",
      padding: "70px 32px 80px 32px",
      minHeight: "auto",
    },
    children: [
      k.jsx(Se, {
        delay: 0,
        children: k.jsx("p", {
          style: {
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "#666",
            marginBottom: 20,
            marginTop: 0,
          },
          children: "003 / 005",
        }),
      }),
      k.jsxs("div", {
        className: "cognitra-services-head-row",
        style: { display: "flex", gap: 48, alignItems: "flex-start", marginBottom: 32 },
        children: [
          k.jsx("div", {
            className: "cognitra-services-head-col",
            style: { width: "32%" },
            children: k.jsx("h2", {
              style: {
                fontSize: "clamp(26px, 3vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: "#1a1a1a",
                maxWidth: 320,
                display: "flex",
                flexWrap: "wrap",
                gap: "0.25em",
                margin: 0,
              },
              children: dw.map((n, i) =>
                k.jsx(
                  Se,
                  {
                    as: "span",
                    delay: 0.1 + i * 0.1,
                    y: 28,
                    children: k.jsx("span", { children: n }),
                  },
                  n + i,
                ),
              ),
            }),
          }),
          k.jsx("div", {
            className: "cognitra-services-head-col",
            style: { flex: 1, paddingTop: 8 },
            children: k.jsx(Se, {
              as: "p",
              delay: 0.25,
              children: k.jsx("p", {
                style: {
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "#3a3a3a",
                  maxWidth: 320,
                  margin: 0,
                },
                children: "We provide all-in-one AI automation services in one place.",
              }),
            }),
          }),
        ],
      }),
      k.jsx("div", {
        className: "cognitra-cards-grid",
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          gridAutoRows: "1fr",
        },
        children: jh.map((n, i) =>
          k.jsx(
            Se,
            {
              delay: 0.4 + i * 0.15,
              children: k.jsxs("article", {
                style: {
                  background: "transparent",
                  border: "1px solid rgba(0,0,0,0.18)",
                  borderRadius: 20,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: 16,
                  height: "100%",
                },
                children: [
                  k.jsx("div", {
                    style: {
                      width: "100%",
                      aspectRatio: "4/3",
                      position: "relative",
                      overflow: "hidden",
                    },
                    children: k.jsx("video", {
                      autoPlay: !0,
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      src: n.video,
                      style: {
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      },
                    }),
                  }),
                  k.jsxs("div", {
                    style: { padding: "24px 28px 28px 28px" },
                    children: [
                      k.jsx("h3", {
                        style: {
                          fontSize: 18,
                          fontWeight: 600,
                          color: "#1a1a1a",
                          marginBottom: 14,
                          marginTop: 0,
                        },
                        children: n.title,
                      }),
                      k.jsx("p", {
                        style: { fontSize: 13, lineHeight: 1.6, color: "#3a3a3a", margin: 0 },
                        children: n.text,
                      }),
                    ],
                  }),
                ],
              }),
            },
            n.title,
          ),
        ),
      }),
    ],
  });
}
const pw = "WE BUILD END-TO-END AI AUTOMATION SYSTEMS.".split(" ");
function mw() {
  return k.jsx("section", {
    className: "cognitra-section-pad",
    style: {
      position: "relative",
      zIndex: 1,
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "70px 32px 32px 32px",
    },
    children: k.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: 720,
        padding: "80px 0",
      },
      children: [
        k.jsx("h2", {
          style: {
            fontSize: "clamp(26px, 3vw, 42px)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "#fff",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.25em",
            margin: 0,
          },
          children: pw.map((n, i) =>
            k.jsx(
              Se,
              {
                as: "span",
                delay: 0.15 + i * 0.08,
                y: 32,
                children: k.jsx("span", { children: n }),
              },
              n + i,
            ),
          ),
        }),
        k.jsx(Se, {
          as: "p",
          delay: 0.9,
          children: k.jsx("p", {
            style: {
              marginTop: 24,
              fontSize: 14,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 260,
            },
            children: "We provide all-in-one AI automation services in one place.",
          }),
        }),
      ],
    }),
  });
}
function dm({ embedded: n = !1 }) {
  const i = k.jsxs(xr, {
    counter: "005 / 005",
    title: "Engagement rates",
    subtitle: "Transparent tiers from discovery sprint through enterprise scale.",
    children: [
      k.jsx("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        },
        children: ky.map((o, a) => {
          const c = "highlight" in o && o.highlight;
          return k.jsx(
            Se,
            {
              delay: 0.15 + a * 0.1,
              children: k.jsxs("div", {
                style: {
                  border: "1px solid rgba(0,0,0,0.18)",
                  borderRadius: 20,
                  padding: 28,
                  background: c ? "#1a1a1a" : "rgba(255,255,255,0.35)",
                  color: c ? "#fff" : "#1a1a1a",
                },
                children: [
                  k.jsx("p", {
                    style: { fontSize: 11, letterSpacing: "0.08em", margin: 0, opacity: 0.7 },
                    children: o.period,
                  }),
                  k.jsx("h3", {
                    style: { fontSize: 22, fontWeight: 700, margin: "8px 0 4px" },
                    children: o.name,
                  }),
                  k.jsx("p", {
                    style: { fontSize: 28, fontWeight: 700, margin: "0 0 16px" },
                    children: o.price,
                  }),
                  k.jsx("ul", {
                    style: { margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.7 },
                    children: o.features.map((d) => k.jsx("li", { children: d }, d)),
                  }),
                ],
              }),
            },
            o.name,
          );
        }),
      }),
      k.jsx(Se, {
        delay: 0.5,
        children: k.jsx("button", {
          type: "button",
          className: "btn-cognitra-primary",
          style: { marginTop: 32 },
          onClick: () => Ah("connect"),
          children: "BOOK A CALL!",
        }),
      }),
    ],
  });
  return i;
}
function gw() {
  return k.jsxs(k.Fragment, {
    children: [
      k.jsx(fw, {}),
      k.jsx(mw, {}),
      k.jsx(hw, {}),
      k.jsx("div", { id: "case", className: "scroll-mt-8", children: k.jsx(um, { embedded: !0 }) }),
      k.jsx("div", {
        id: "rates",
        className: "scroll-mt-8",
        children: k.jsx(dm, { embedded: !0 }),
      }),
      k.jsx("div", { id: "crew", className: "scroll-mt-8", children: k.jsx(fm, { embedded: !0 }) }),
      k.jsx("div", {
        id: "connect",
        className: "scroll-mt-8",
        children: k.jsx(cm, { embedded: !0 }),
      }),
    ],
  });
}
function yw({ embedded: n = !1 }) {
  const i = k.jsx(xr, {
    counter: "003 / 005",
    title: "Explore what we offer",
    subtitle:
      "End-to-end AI automation — advisory, engineering, and process design under one roof.",
    children: k.jsx("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 20,
      },
      children: jh.map((o, a) =>
        k.jsx(
          Se,
          {
            delay: 0.2 + a * 0.1,
            children: k.jsxs("article", {
              style: {
                border: "1px solid rgba(0,0,0,0.18)",
                borderRadius: 20,
                overflow: "hidden",
                background: "rgba(255,255,255,0.35)",
              },
              children: [
                k.jsx("div", {
                  style: { aspectRatio: "4/3", position: "relative" },
                  children: k.jsx("video", {
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    src: o.video,
                    style: {
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    },
                  }),
                }),
                k.jsxs("div", {
                  style: { padding: 24 },
                  children: [
                    k.jsx("h3", {
                      style: {
                        fontSize: 18,
                        fontWeight: 600,
                        color: "#1a1a1a",
                        margin: "0 0 10px",
                      },
                      children: o.title,
                    }),
                    k.jsx("p", {
                      style: { fontSize: 13, lineHeight: 1.6, color: "#3a3a3a", margin: 0 },
                      children: o.text,
                    }),
                  ],
                }),
              ],
            }),
          },
          o.title,
        ),
      ),
    }),
  });
  return i;
}
function vw() {
  return k.jsxs(k.Fragment, {
    children: [
      k.jsx(xr, {
        counter: "LEGAL",
        title: "Policies",
        subtitle: "Privacy and terms stubs for COGNITRA engagements.",
        children: k.jsx(k.Fragment, {}),
      }),
      k.jsx(am, {}),
    ],
  });
}
function xw() {
  return (
    q.useEffect(() => {
      Dh();
    }, []),
    k.jsxs(cw, {
      children: [
        k.jsx(Sy, {
          routes: {
            "": k.jsx(gw, {}),
            offering: k.jsx(yw, {}),
            case: k.jsx(um, {}),
            rates: k.jsx(dm, {}),
            crew: k.jsx(fm, {}),
            connect: k.jsx(cm, {}),
            privacy: k.jsx(vw, {}),
          },
        }),
        k.jsx(am, {}),
        k.jsx("footer", {
          style: {
            position: "relative",
            zIndex: 2,
            background: "#1a1a1a",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            padding: "24px 32px",
            fontSize: 11,
            letterSpacing: "0.06em",
          },
          children: "© 2026 COGNITRA",
        }),
      ],
    })
  );
}
yy.createRoot(document.getElementById("root")).render(
  k.jsx(q.StrictMode, { children: k.jsx(xw, {}) }),
);
