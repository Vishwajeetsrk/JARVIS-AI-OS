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
var Yl = { exports: {} },
  ii = {},
  Xl = { exports: {} },
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
function iy() {
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
    v = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function k(P) {
    return P === null || typeof P != "object"
      ? null
      : ((P = (w && P[w]) || P["@@iterator"]), typeof P == "function" ? P : null);
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
    D = {};
  function j(P, M, re) {
    ((this.props = P), (this.context = M), (this.refs = D), (this.updater = re || A));
  }
  ((j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (P, M) {
      if (typeof P != "object" && typeof P != "function" && P != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, P, M, "setState");
    }),
    (j.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, "forceUpdate");
    }));
  function I() {}
  I.prototype = j.prototype;
  function W(P, M, re) {
    ((this.props = P), (this.context = M), (this.refs = D), (this.updater = re || A));
  }
  var K = (W.prototype = new I());
  ((K.constructor = W), _(K, j.prototype), (K.isPureReactComponent = !0));
  var te = Array.isArray,
    Q = Object.prototype.hasOwnProperty,
    ne = { current: null },
    ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(P, M, re) {
    var oe,
      ue = {},
      ce = null,
      pe = null;
    if (M != null)
      for (oe in (M.ref !== void 0 && (pe = M.ref), M.key !== void 0 && (ce = "" + M.key), M))
        Q.call(M, oe) && !ae.hasOwnProperty(oe) && (ue[oe] = M[oe]);
    var de = arguments.length - 2;
    if (de === 1) ue.children = re;
    else if (1 < de) {
      for (var xe = Array(de), st = 0; st < de; st++) xe[st] = arguments[st + 2];
      ue.children = xe;
    }
    if (P && P.defaultProps)
      for (oe in ((de = P.defaultProps), de)) ue[oe] === void 0 && (ue[oe] = de[oe]);
    return { $$typeof: n, type: P, key: ce, ref: pe, props: ue, _owner: ne.current };
  }
  function Se(P, M) {
    return { $$typeof: n, type: P.type, key: M, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function Ce(P) {
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
  var it = /\/+/g;
  function Ge(P, M) {
    return typeof P == "object" && P !== null && P.key != null ? qe("" + P.key) : M.toString(36);
  }
  function Ze(P, M, re, oe, ue) {
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
        te(ue)
          ? ((re = ""),
            P != null && (re = P.replace(it, "$&/") + "/"),
            Ze(ue, M, re, "", function (st) {
              return st;
            }))
          : ue != null &&
            (Ce(ue) &&
              (ue = Se(
                ue,
                re +
                  (!ue.key || (pe && pe.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(it, "$&/") + "/") +
                  P,
              )),
            M.push(ue)),
        1
      );
    if (((pe = 0), (oe = oe === "" ? "." : oe + ":"), te(P)))
      for (var de = 0; de < P.length; de++) {
        ce = P[de];
        var xe = oe + Ge(ce, de);
        pe += Ze(ce, M, re, xe, ue);
      }
    else if (((xe = k(P)), typeof xe == "function"))
      for (P = xe.call(P), de = 0; !(ce = P.next()).done;)
        ((ce = ce.value), (xe = oe + Ge(ce, de++)), (pe += Ze(ce, M, re, xe, ue)));
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
  function wt(P, M, re) {
    if (P == null) return P;
    var oe = [],
      ue = 0;
    return (
      Ze(P, oe, "", "", function (ce) {
        return M.call(re, ce, ue++);
      }),
      oe
    );
  }
  function Qe(P) {
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
    Y = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: O, ReactCurrentOwner: ne };
  function B() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (se.Children = {
      map: wt,
      forEach: function (P, M, re) {
        wt(
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
          wt(P, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (P) {
        return (
          wt(P, function (M) {
            return M;
          }) || []
        );
      },
      only: function (P) {
        if (!Ce(P))
          throw Error("React.Children.only expected to receive a single React element child.");
        return P;
      },
    }),
    (se.Component = j),
    (se.Fragment = s),
    (se.Profiler = c),
    (se.PureComponent = W),
    (se.StrictMode = a),
    (se.Suspense = m),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (se.act = B),
    (se.cloneElement = function (P, M, re) {
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
            (oe[xe] = M[xe] === void 0 && de !== void 0 ? de[xe] : M[xe]);
      }
      var xe = arguments.length - 2;
      if (xe === 1) oe.children = re;
      else if (1 < xe) {
        de = Array(xe);
        for (var st = 0; st < xe; st++) de[st] = arguments[st + 2];
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
    (se.createElement = J),
    (se.createFactory = function (P) {
      var M = J.bind(null, P);
      return ((M.type = P), M);
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (P) {
      return { $$typeof: p, render: P };
    }),
    (se.isValidElement = Ce),
    (se.lazy = function (P) {
      return { $$typeof: v, _payload: { _status: -1, _result: P }, _init: Qe };
    }),
    (se.memo = function (P, M) {
      return { $$typeof: g, type: P, compare: M === void 0 ? null : M };
    }),
    (se.startTransition = function (P) {
      var M = O.transition;
      O.transition = {};
      try {
        P();
      } finally {
        O.transition = M;
      }
    }),
    (se.unstable_act = B),
    (se.useCallback = function (P, M) {
      return ie.current.useCallback(P, M);
    }),
    (se.useContext = function (P) {
      return ie.current.useContext(P);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (P) {
      return ie.current.useDeferredValue(P);
    }),
    (se.useEffect = function (P, M) {
      return ie.current.useEffect(P, M);
    }),
    (se.useId = function () {
      return ie.current.useId();
    }),
    (se.useImperativeHandle = function (P, M, re) {
      return ie.current.useImperativeHandle(P, M, re);
    }),
    (se.useInsertionEffect = function (P, M) {
      return ie.current.useInsertionEffect(P, M);
    }),
    (se.useLayoutEffect = function (P, M) {
      return ie.current.useLayoutEffect(P, M);
    }),
    (se.useMemo = function (P, M) {
      return ie.current.useMemo(P, M);
    }),
    (se.useReducer = function (P, M, re) {
      return ie.current.useReducer(P, M, re);
    }),
    (se.useRef = function (P) {
      return ie.current.useRef(P);
    }),
    (se.useState = function (P) {
      return ie.current.useState(P);
    }),
    (se.useSyncExternalStore = function (P, M, re) {
      return ie.current.useSyncExternalStore(P, M, re);
    }),
    (se.useTransition = function () {
      return ie.current.useTransition();
    }),
    (se.version = "18.3.1"),
    se
  );
}
var sd;
function Ra() {
  return (sd || ((sd = 1), (Xl.exports = iy())), Xl.exports);
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
function sy() {
  if (od) return ii;
  od = 1;
  var n = Ra(),
    i = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, g) {
    var v,
      w = {},
      k = null,
      A = null;
    (g !== void 0 && (k = "" + g),
      m.key !== void 0 && (k = "" + m.key),
      m.ref !== void 0 && (A = m.ref));
    for (v in m) a.call(m, v) && !d.hasOwnProperty(v) && (w[v] = m[v]);
    if (p && p.defaultProps) for (v in ((m = p.defaultProps), m)) w[v] === void 0 && (w[v] = m[v]);
    return { $$typeof: i, type: p, key: k, ref: A, props: w, _owner: c.current };
  }
  return ((ii.Fragment = s), (ii.jsx = f), (ii.jsxs = f), ii);
}
var ld;
function oy() {
  return (ld || ((ld = 1), (Yl.exports = sy())), Yl.exports);
}
var L = oy(),
  Z = Ra(),
  Ns = {},
  ql = { exports: {} },
  rt = {},
  Zl = { exports: {} },
  Jl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad;
function ly() {
  return (
    ad ||
      ((ad = 1),
      (function (n) {
        function i(O, Y) {
          var B = O.length;
          O.push(Y);
          e: for (; 0 < B;) {
            var P = (B - 1) >>> 1,
              M = O[P];
            if (0 < c(M, Y)) ((O[P] = Y), (O[B] = M), (B = P));
            else break e;
          }
        }
        function s(O) {
          return O.length === 0 ? null : O[0];
        }
        function a(O) {
          if (O.length === 0) return null;
          var Y = O[0],
            B = O.pop();
          if (B !== Y) {
            O[0] = B;
            e: for (var P = 0, M = O.length, re = M >>> 1; P < re;) {
              var oe = 2 * (P + 1) - 1,
                ue = O[oe],
                ce = oe + 1,
                pe = O[ce];
              if (0 > c(ue, B))
                ce < M && 0 > c(pe, ue)
                  ? ((O[P] = pe), (O[ce] = B), (P = ce))
                  : ((O[P] = ue), (O[oe] = B), (P = oe));
              else if (ce < M && 0 > c(pe, B)) ((O[P] = pe), (O[ce] = B), (P = ce));
              else break e;
            }
          }
          return Y;
        }
        function c(O, Y) {
          var B = O.sortIndex - Y.sortIndex;
          return B !== 0 ? B : O.id - Y.id;
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
          k = 3,
          A = !1,
          _ = !1,
          D = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function K(O) {
          for (var Y = s(g); Y !== null;) {
            if (Y.callback === null) a(g);
            else if (Y.startTime <= O) (a(g), (Y.sortIndex = Y.expirationTime), i(m, Y));
            else break;
            Y = s(g);
          }
        }
        function te(O) {
          if (((D = !1), K(O), !_))
            if (s(m) !== null) ((_ = !0), Qe(Q));
            else {
              var Y = s(g);
              Y !== null && ie(te, Y.startTime - O);
            }
        }
        function Q(O, Y) {
          ((_ = !1), D && ((D = !1), I(J), (J = -1)), (A = !0));
          var B = k;
          try {
            for (K(Y), w = s(m); w !== null && (!(w.expirationTime > Y) || (O && !qe()));) {
              var P = w.callback;
              if (typeof P == "function") {
                ((w.callback = null), (k = w.priorityLevel));
                var M = P(w.expirationTime <= Y);
                ((Y = n.unstable_now()),
                  typeof M == "function" ? (w.callback = M) : w === s(m) && a(m),
                  K(Y));
              } else a(m);
              w = s(m);
            }
            if (w !== null) var re = !0;
            else {
              var oe = s(g);
              (oe !== null && ie(te, oe.startTime - Y), (re = !1));
            }
            return re;
          } finally {
            ((w = null), (k = B), (A = !1));
          }
        }
        var ne = !1,
          ae = null,
          J = -1,
          Se = 5,
          Ce = -1;
        function qe() {
          return !(n.unstable_now() - Ce < Se);
        }
        function it() {
          if (ae !== null) {
            var O = n.unstable_now();
            Ce = O;
            var Y = !0;
            try {
              Y = ae(!0, O);
            } finally {
              Y ? Ge() : ((ne = !1), (ae = null));
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
        function ie(O, Y) {
          J = j(function () {
            O(n.unstable_now());
          }, Y);
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
            _ || A || ((_ = !0), Qe(Q));
          }),
          (n.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Se = 0 < O ? Math.floor(1e3 / O) : 5);
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
                var Y = 3;
                break;
              default:
                Y = k;
            }
            var B = k;
            k = Y;
            try {
              return O();
            } finally {
              k = B;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (O, Y) {
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
            var B = k;
            k = O;
            try {
              return Y();
            } finally {
              k = B;
            }
          }),
          (n.unstable_scheduleCallback = function (O, Y, B) {
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
                callback: Y,
                priorityLevel: O,
                startTime: B,
                expirationTime: M,
                sortIndex: -1,
              }),
              B > P
                ? ((O.sortIndex = B),
                  i(g, O),
                  s(m) === null && O === s(g) && (D ? (I(J), (J = -1)) : (D = !0), ie(te, B - P)))
                : ((O.sortIndex = M), i(m, O), _ || A || ((_ = !0), Qe(Q))),
              O
            );
          }),
          (n.unstable_shouldYield = qe),
          (n.unstable_wrapCallback = function (O) {
            var Y = k;
            return function () {
              var B = k;
              k = Y;
              try {
                return O.apply(this, arguments);
              } finally {
                k = B;
              }
            };
          }));
      })(Jl)),
    Jl
  );
}
var ud;
function ay() {
  return (ud || ((ud = 1), (Zl.exports = ly())), Zl.exports);
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
function uy() {
  if (cd) return rt;
  cd = 1;
  var n = Ra(),
    i = ay();
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
    v = {},
    w = {};
  function k(e) {
    return m.call(w, e) ? !0 : m.call(v, e) ? !1 : g.test(e) ? (w[e] = !0) : ((v[e] = !0), !1);
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
  function K(e, t, r, o) {
    var l = j.hasOwnProperty(t) ? j[t] : null;
    (l !== null
      ? l.type !== 0
      : o || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (_(t, r, l, o) && (r = null),
      o || l === null
        ? k(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
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
    Q = Symbol.for("react.element"),
    ne = Symbol.for("react.portal"),
    ae = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    Se = Symbol.for("react.profiler"),
    Ce = Symbol.for("react.provider"),
    qe = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    Ge = Symbol.for("react.suspense"),
    Ze = Symbol.for("react.suspense_list"),
    wt = Symbol.for("react.memo"),
    Qe = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    O = Symbol.iterator;
  function Y(e) {
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
          var l = E.stack.split(`
`),
            u = o.stack.split(`
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
  function Pi(e) {
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
  function Ti(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function eo(e, t) {
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
    ((t = t.checked), t != null && K(e, "checked", t, !1));
  }
  function to(e, t) {
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
      ? no(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && no(e, t.type, de(t.defaultValue)),
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
  function no(e, t, r) {
    (t !== "number" || Ti(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var xr = Array.isArray;
  function On(e, t, r, o) {
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
  function ro(e, t) {
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
  function io(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? gu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ci,
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
          Ci = Ci || document.createElement("div"),
            Ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ci.firstChild;
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
    am = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Sr).forEach(function (e) {
    am.forEach(function (t) {
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
  var um = B(
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
  function so(e, t) {
    if (t) {
      if (um[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function oo(e, t) {
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
  var lo = null;
  function ao(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var uo = null,
    In = null,
    zn = null;
  function wu(e) {
    if ((e = $r(e))) {
      if (typeof uo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Yi(t)), uo(e.stateNode, e.type, t));
    }
  }
  function Su(e) {
    In ? (zn ? zn.push(e) : (zn = [e])) : (In = e);
  }
  function ku() {
    if (In) {
      var e = In,
        t = zn;
      if (((zn = In = null), wu(e), t)) for (e = 0; e < t.length; e++) wu(t[e]);
    }
  }
  function Pu(e, t) {
    return e(t);
  }
  function Tu() {}
  var co = !1;
  function Cu(e, t, r) {
    if (co) return e(t, r);
    co = !0;
    try {
      return Pu(e, t, r);
    } finally {
      ((co = !1), (In !== null || zn !== null) && (Tu(), ku()));
    }
  }
  function kr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = Yi(r);
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
  var fo = !1;
  if (p)
    try {
      var Pr = {};
      (Object.defineProperty(Pr, "passive", {
        get: function () {
          fo = !0;
        },
      }),
        window.addEventListener("test", Pr, Pr),
        window.removeEventListener("test", Pr, Pr));
    } catch {
      fo = !1;
    }
  function cm(e, t, r, o, l, u, h, y, x) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, E);
    } catch (V) {
      this.onError(V);
    }
  }
  var Tr = !1,
    Ei = null,
    Ai = !1,
    ho = null,
    fm = {
      onError: function (e) {
        ((Tr = !0), (Ei = e));
      },
    };
  function dm(e, t, r, o, l, u, h, y, x) {
    ((Tr = !1), (Ei = null), cm.apply(fm, arguments));
  }
  function hm(e, t, r, o, l, u, h, y, x) {
    if ((dm.apply(this, arguments), Tr)) {
      if (Tr) {
        var E = Ei;
        ((Tr = !1), (Ei = null));
      } else throw Error(s(198));
      Ai || ((Ai = !0), (ho = E));
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
  function Eu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Au(e) {
    if (yn(e) !== e) throw Error(s(188));
  }
  function pm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = yn(e)), t === null)) throw Error(s(188));
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
        for (var h = !1, y = l.child; y;) {
          if (y === r) {
            ((h = !0), (r = l), (o = u));
            break;
          }
          if (y === o) {
            ((h = !0), (o = l), (r = u));
            break;
          }
          y = y.sibling;
        }
        if (!h) {
          for (y = u.child; y;) {
            if (y === r) {
              ((h = !0), (r = u), (o = l));
              break;
            }
            if (y === o) {
              ((h = !0), (o = u), (r = l));
              break;
            }
            y = y.sibling;
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
    return ((e = pm(e)), e !== null ? Du(e) : null);
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
  var Mu = i.unstable_scheduleCallback,
    Vu = i.unstable_cancelCallback,
    mm = i.unstable_shouldYield,
    gm = i.unstable_requestPaint,
    Re = i.unstable_now,
    ym = i.unstable_getCurrentPriorityLevel,
    po = i.unstable_ImmediatePriority,
    Lu = i.unstable_UserBlockingPriority,
    Ri = i.unstable_NormalPriority,
    vm = i.unstable_LowPriority,
    Nu = i.unstable_IdlePriority,
    Di = null,
    Dt = null;
  function xm(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
      try {
        Dt.onCommitFiberRoot(Di, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : km,
    wm = Math.log,
    Sm = Math.LN2;
  function km(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((wm(e) / Sm) | 0)) | 0);
  }
  var Mi = 64,
    Vi = 4194304;
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
      l = e.suspendedLanes,
      u = e.pingedLanes,
      h = r & 268435455;
    if (h !== 0) {
      var y = h & ~l;
      y !== 0 ? (o = Cr(y)) : ((u &= h), u !== 0 && (o = Cr(u)));
    } else ((h = r & ~l), h !== 0 ? (o = Cr(h)) : u !== 0 && (o = Cr(u)));
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
  function Pm(e, t) {
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
  function Tm(e, t) {
    for (
      var r = e.suspendedLanes, o = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var h = 31 - St(u),
        y = 1 << h,
        x = l[h];
      (x === -1
        ? ((y & r) === 0 || (y & o) !== 0) && (l[h] = Pm(y, t))
        : x <= t && (e.expiredLanes |= y),
        (u &= ~y));
    }
  }
  function mo(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function _u() {
    var e = Mi;
    return ((Mi <<= 1), (Mi & 4194240) === 0 && (Mi = 64), e);
  }
  function go(e) {
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
  function Cm(e, t) {
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
  function yo(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r;) {
      var o = 31 - St(r),
        l = 1 << o;
      ((l & t) | (e[o] & t) && (e[o] |= t), (r &= ~l));
    }
  }
  var he = 0;
  function ju(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Fu,
    vo,
    Ou,
    Iu,
    zu,
    xo = !1,
    Ni = [],
    Qt = null,
    Yt = null,
    Xt = null,
    Ar = new Map(),
    Rr = new Map(),
    qt = [],
    Em =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Bu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Qt = null;
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
        t !== null && ((t = $r(t)), t !== null && vo(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Am(e, t, r, o, l) {
    switch (t) {
      case "focusin":
        return ((Qt = Dr(Qt, e, t, r, o, l)), !0);
      case "dragenter":
        return ((Yt = Dr(Yt, e, t, r, o, l)), !0);
      case "mouseover":
        return ((Xt = Dr(Xt, e, t, r, o, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (Ar.set(u, Dr(Ar.get(u) || null, e, t, r, o, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), Rr.set(u, Dr(Rr.get(u) || null, e, t, r, o, l)), !0);
    }
    return !1;
  }
  function Uu(e) {
    var t = vn(e.target);
    if (t !== null) {
      var r = yn(t);
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
      var r = So(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        ((lo = o), r.target.dispatchEvent(o), (lo = null));
      } else return ((t = $r(r)), t !== null && vo(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Wu(e, t, r) {
    _i(e) && r.delete(t);
  }
  function Rm() {
    ((xo = !1),
      Qt !== null && _i(Qt) && (Qt = null),
      Yt !== null && _i(Yt) && (Yt = null),
      Xt !== null && _i(Xt) && (Xt = null),
      Ar.forEach(Wu),
      Rr.forEach(Wu));
  }
  function Mr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      xo || ((xo = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Rm)));
  }
  function Vr(e) {
    function t(l) {
      return Mr(l, e);
    }
    if (0 < Ni.length) {
      Mr(Ni[0], e);
      for (var r = 1; r < Ni.length; r++) {
        var o = Ni[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Qt !== null && Mr(Qt, e),
        Yt !== null && Mr(Yt, e),
        Xt !== null && Mr(Xt, e),
        Ar.forEach(t),
        Rr.forEach(t),
        r = 0;
      r < qt.length;
      r++
    )
      ((o = qt[r]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < qt.length && ((r = qt[0]), r.blockedOn === null);)
      (Uu(r), r.blockedOn === null && qt.shift());
  }
  var Bn = te.ReactCurrentBatchConfig,
    ji = !0;
  function Dm(e, t, r, o) {
    var l = he,
      u = Bn.transition;
    Bn.transition = null;
    try {
      ((he = 1), wo(e, t, r, o));
    } finally {
      ((he = l), (Bn.transition = u));
    }
  }
  function Mm(e, t, r, o) {
    var l = he,
      u = Bn.transition;
    Bn.transition = null;
    try {
      ((he = 4), wo(e, t, r, o));
    } finally {
      ((he = l), (Bn.transition = u));
    }
  }
  function wo(e, t, r, o) {
    if (ji) {
      var l = So(e, t, r, o);
      if (l === null) (Io(e, t, o, Fi, r), Bu(e, o));
      else if (Am(l, e, t, r, o)) o.stopPropagation();
      else if ((Bu(e, o), t & 4 && -1 < Em.indexOf(e))) {
        for (; l !== null;) {
          var u = $r(l);
          if (
            (u !== null && Fu(u), (u = So(e, t, r, o)), u === null && Io(e, t, o, Fi, r), u === l)
          )
            break;
          l = u;
        }
        l !== null && o.stopPropagation();
      } else Io(e, t, o, null, r);
    }
  }
  var Fi = null;
  function So(e, t, r, o) {
    if (((Fi = null), (e = ao(o)), (e = vn(e)), e !== null))
      if (((t = yn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Eu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Fi = e), null);
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
        switch (ym()) {
          case po:
            return 1;
          case Lu:
            return 4;
          case Ri:
          case vm:
            return 16;
          case Nu:
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
    Oi = null;
  function Hu() {
    if (Oi) return Oi;
    var e,
      t = ko,
      r = t.length,
      o,
      l = "value" in Zt ? Zt.value : Zt.textContent,
      u = l.length;
    for (e = 0; e < r && t[e] === l[e]; e++);
    var h = r - e;
    for (o = 1; o <= h && t[r - o] === l[u - o]; o++);
    return (Oi = l.slice(e, 1 < o ? 1 - o : void 0));
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
    Po = ot(Un),
    Lr = B({}, Un, { view: 0, detail: 0 }),
    Vm = ot(Lr),
    To,
    Co,
    Nr,
    Bi = B({}, Lr, {
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
          : (e !== Nr &&
              (Nr && e.type === "mousemove"
                ? ((To = e.screenX - Nr.screenX), (Co = e.screenY - Nr.screenY))
                : (Co = To = 0),
              (Nr = e)),
            To);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Co;
      },
    }),
    Gu = ot(Bi),
    Lm = B({}, Bi, { dataTransfer: 0 }),
    Nm = ot(Lm),
    _m = B({}, Lr, { relatedTarget: 0 }),
    Eo = ot(_m),
    jm = B({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fm = ot(jm),
    Om = B({}, Un, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Im = ot(Om),
    zm = B({}, Un, { data: 0 }),
    Qu = ot(zm),
    Bm = {
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
    Um = {
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
    Wm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $m(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wm[e]) ? !!t[e] : !1;
  }
  function Ao() {
    return $m;
  }
  var Hm = B({}, Lr, {
      key: function (e) {
        if (e.key) {
          var t = Bm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ii(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Um[e.keyCode] || "Unidentified"
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
    Km = ot(Hm),
    Gm = B({}, Bi, {
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
    Yu = ot(Gm),
    Qm = B({}, Lr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ao,
    }),
    Ym = ot(Qm),
    Xm = B({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qm = ot(Xm),
    Zm = B({}, Bi, {
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
    Jm = ot(Zm),
    bm = [9, 13, 27, 32],
    Ro = p && "CompositionEvent" in window,
    _r = null;
  p && "documentMode" in document && (_r = document.documentMode);
  var eg = p && "TextEvent" in window && !_r,
    Xu = p && (!Ro || (_r && 8 < _r && 11 >= _r)),
    qu = " ",
    Zu = !1;
  function Ju(e, t) {
    switch (e) {
      case "keyup":
        return bm.indexOf(t.keyCode) !== -1;
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
  function tg(e, t) {
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
  function ng(e, t) {
    if (Wn)
      return e === "compositionend" || (!Ro && Ju(e, t))
        ? ((e = Hu()), (Oi = ko = Zt = null), (Wn = !1), e)
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
  var rg = {
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
    return t === "input" ? !!rg[e.type] : t === "textarea";
  }
  function tc(e, t, r, o) {
    (Su(o),
      (t = Ki(t, "onChange")),
      0 < t.length &&
        ((r = new Po("onChange", "change", null, r, o)), e.push({ event: r, listeners: t })));
  }
  var jr = null,
    Fr = null;
  function ig(e) {
    xc(e, 0);
  }
  function Ui(e) {
    var t = Qn(e);
    if (uu(t)) return e;
  }
  function sg(e, t) {
    if (e === "change") return t;
  }
  var nc = !1;
  if (p) {
    var Do;
    if (p) {
      var Mo = "oninput" in document;
      if (!Mo) {
        var rc = document.createElement("div");
        (rc.setAttribute("oninput", "return;"), (Mo = typeof rc.oninput == "function"));
      }
      Do = Mo;
    } else Do = !1;
    nc = Do && (!document.documentMode || 9 < document.documentMode);
  }
  function ic() {
    jr && (jr.detachEvent("onpropertychange", sc), (Fr = jr = null));
  }
  function sc(e) {
    if (e.propertyName === "value" && Ui(Fr)) {
      var t = [];
      (tc(t, Fr, e, ao(e)), Cu(ig, t));
    }
  }
  function og(e, t, r) {
    e === "focusin"
      ? (ic(), (jr = t), (Fr = r), jr.attachEvent("onpropertychange", sc))
      : e === "focusout" && ic();
  }
  function lg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ui(Fr);
  }
  function ag(e, t) {
    if (e === "click") return Ui(t);
  }
  function ug(e, t) {
    if (e === "input" || e === "change") return Ui(t);
  }
  function cg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var kt = typeof Object.is == "function" ? Object.is : cg;
  function Or(e, t) {
    if (kt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var l = r[o];
      if (!m.call(t, l) || !kt(e[l], t[l])) return !1;
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
  function fg(e) {
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
  var dg = p && "documentMode" in document && 11 >= document.documentMode,
    $n = null,
    Lo = null,
    Ir = null,
    No = !1;
  function cc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    No ||
      $n == null ||
      $n !== Ti(o) ||
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
      (Ir && Or(Ir, o)) ||
        ((Ir = o),
        (o = Ki(Lo, "onSelect")),
        0 < o.length &&
          ((t = new Po("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
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
  var Hn = {
      animationend: Wi("Animation", "AnimationEnd"),
      animationiteration: Wi("Animation", "AnimationIteration"),
      animationstart: Wi("Animation", "AnimationStart"),
      transitionend: Wi("Transition", "TransitionEnd"),
    },
    _o = {},
    fc = {};
  p &&
    ((fc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Hn.animationend.animation,
      delete Hn.animationiteration.animation,
      delete Hn.animationstart.animation),
    "TransitionEvent" in window || delete Hn.transitionend.transition);
  function $i(e) {
    if (_o[e]) return _o[e];
    if (!Hn[e]) return e;
    var t = Hn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in fc) return (_o[e] = t[r]);
    return e;
  }
  var dc = $i("animationend"),
    hc = $i("animationiteration"),
    pc = $i("animationstart"),
    mc = $i("transitionend"),
    gc = new Map(),
    yc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Jt(e, t) {
    (gc.set(e, t), d(t, [e]));
  }
  for (var jo = 0; jo < yc.length; jo++) {
    var Fo = yc[jo],
      hg = Fo.toLowerCase(),
      pg = Fo[0].toUpperCase() + Fo.slice(1);
    Jt(hg, "on" + pg);
  }
  (Jt(dc, "onAnimationEnd"),
    Jt(hc, "onAnimationIteration"),
    Jt(pc, "onAnimationStart"),
    Jt("dblclick", "onDoubleClick"),
    Jt("focusin", "onFocus"),
    Jt("focusout", "onBlur"),
    Jt(mc, "onTransitionEnd"),
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
    mg = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
  function vc(e, t, r) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = r), hm(o, t, void 0, e), (e.currentTarget = null));
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
            var y = o[h],
              x = y.instance,
              E = y.currentTarget;
            if (((y = y.listener), x !== u && l.isPropagationStopped())) break e;
            (vc(l, y, E), (u = x));
          }
        else
          for (h = 0; h < o.length; h++) {
            if (
              ((y = o[h]),
              (x = y.instance),
              (E = y.currentTarget),
              (y = y.listener),
              x !== u && l.isPropagationStopped())
            )
              break e;
            (vc(l, y, E), (u = x));
          }
      }
    }
    if (Ai) throw ((e = ho), (Ai = !1), (ho = null), e);
  }
  function ge(e, t) {
    var r = t[Ho];
    r === void 0 && (r = t[Ho] = new Set());
    var o = e + "__bubble";
    r.has(o) || (wc(t, e, 2, !1), r.add(o));
  }
  function Oo(e, t, r) {
    var o = 0;
    (t && (o |= 4), wc(r, e, o, t));
  }
  var Hi = "_reactListening" + Math.random().toString(36).slice(2);
  function Br(e) {
    if (!e[Hi]) {
      ((e[Hi] = !0),
        a.forEach(function (r) {
          r !== "selectionchange" && (mg.has(r) || Oo(r, !1, e), Oo(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hi] || ((t[Hi] = !0), Oo("selectionchange", !1, t));
    }
  }
  function wc(e, t, r, o) {
    switch ($u(t)) {
      case 1:
        var l = Dm;
        break;
      case 4:
        l = Mm;
        break;
      default:
        l = wo;
    }
    ((r = l.bind(null, t, r, e)),
      (l = void 0),
      !fo || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      o
        ? l !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: l })
          : e.addEventListener(t, r, !0)
        : l !== void 0
          ? e.addEventListener(t, r, { passive: l })
          : e.addEventListener(t, r, !1));
  }
  function Io(e, t, r, o, l) {
    var u = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var h = o.tag;
        if (h === 3 || h === 4) {
          var y = o.stateNode.containerInfo;
          if (y === l || (y.nodeType === 8 && y.parentNode === l)) break;
          if (h === 4)
            for (h = o.return; h !== null;) {
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
            if (((h = vn(y)), h === null)) return;
            if (((x = h.tag), x === 5 || x === 6)) {
              o = u = h;
              continue e;
            }
            y = y.parentNode;
          }
        }
        o = o.return;
      }
    Cu(function () {
      var E = u,
        V = ao(r),
        N = [];
      e: {
        var R = gc.get(e);
        if (R !== void 0) {
          var z = Po,
            $ = e;
          switch (e) {
            case "keypress":
              if (Ii(r) === 0) break e;
            case "keydown":
            case "keyup":
              z = Km;
              break;
            case "focusin":
              (($ = "focus"), (z = Eo));
              break;
            case "focusout":
              (($ = "blur"), (z = Eo));
              break;
            case "beforeblur":
            case "afterblur":
              z = Eo;
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
              z = Nm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Ym;
              break;
            case dc:
            case hc:
            case pc:
              z = Fm;
              break;
            case mc:
              z = qm;
              break;
            case "scroll":
              z = Vm;
              break;
            case "wheel":
              z = Jm;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = Im;
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
          var H = (t & 4) !== 0,
            De = !H && e === "scroll",
            T = H ? (R !== null ? R + "Capture" : null) : R;
          H = [];
          for (var S = E, C; S !== null;) {
            C = S;
            var F = C.stateNode;
            if (
              (C.tag === 5 &&
                F !== null &&
                ((C = F), T !== null && ((F = kr(S, T)), F != null && H.push(Ur(S, F, C)))),
              De)
            )
              break;
            S = S.return;
          }
          0 < H.length && ((R = new z(R, $, null, r, V)), N.push({ event: R, listeners: H }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((R = e === "mouseover" || e === "pointerover"),
            (z = e === "mouseout" || e === "pointerout"),
            R && r !== lo && ($ = r.relatedTarget || r.fromElement) && (vn($) || $[Ft]))
          )
            break e;
          if (
            (z || R) &&
            ((R =
              V.window === V
                ? V
                : (R = V.ownerDocument)
                  ? R.defaultView || R.parentWindow
                  : window),
            z
              ? (($ = r.relatedTarget || r.toElement),
                (z = E),
                ($ = $ ? vn($) : null),
                $ !== null &&
                  ((De = yn($)), $ !== De || ($.tag !== 5 && $.tag !== 6)) &&
                  ($ = null))
              : ((z = null), ($ = E)),
            z !== $)
          ) {
            if (
              ((H = Gu),
              (F = "onMouseLeave"),
              (T = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((H = Yu), (F = "onPointerLeave"), (T = "onPointerEnter"), (S = "pointer")),
              (De = z == null ? R : Qn(z)),
              (C = $ == null ? R : Qn($)),
              (R = new H(F, S + "leave", z, r, V)),
              (R.target = De),
              (R.relatedTarget = C),
              (F = null),
              vn(V) === E &&
                ((H = new H(T, S + "enter", $, r, V)),
                (H.target = C),
                (H.relatedTarget = De),
                (F = H)),
              (De = F),
              z && $)
            )
              t: {
                for (H = z, T = $, S = 0, C = H; C; C = Kn(C)) S++;
                for (C = 0, F = T; F; F = Kn(F)) C++;
                for (; 0 < S - C;) ((H = Kn(H)), S--);
                for (; 0 < C - S;) ((T = Kn(T)), C--);
                for (; S--;) {
                  if (H === T || (T !== null && H === T.alternate)) break t;
                  ((H = Kn(H)), (T = Kn(T)));
                }
                H = null;
              }
            else H = null;
            (z !== null && Sc(N, R, z, H, !1), $ !== null && De !== null && Sc(N, De, $, H, !0));
          }
        }
        e: {
          if (
            ((R = E ? Qn(E) : window),
            (z = R.nodeName && R.nodeName.toLowerCase()),
            z === "select" || (z === "input" && R.type === "file"))
          )
            var G = sg;
          else if (ec(R))
            if (nc) G = ug;
            else {
              G = lg;
              var X = og;
            }
          else
            (z = R.nodeName) &&
              z.toLowerCase() === "input" &&
              (R.type === "checkbox" || R.type === "radio") &&
              (G = ag);
          if (G && (G = G(e, E))) {
            tc(N, G, r, V);
            break e;
          }
          (X && X(e, R, E),
            e === "focusout" &&
              (X = R._wrapperState) &&
              X.controlled &&
              R.type === "number" &&
              no(R, "number", R.value));
        }
        switch (((X = E ? Qn(E) : window), e)) {
          case "focusin":
            (ec(X) || X.contentEditable === "true") && (($n = X), (Lo = E), (Ir = null));
            break;
          case "focusout":
            Ir = Lo = $n = null;
            break;
          case "mousedown":
            No = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((No = !1), cc(N, r, V));
            break;
          case "selectionchange":
            if (dg) break;
          case "keydown":
          case "keyup":
            cc(N, r, V);
        }
        var q;
        if (Ro)
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
              ? ee === "onCompositionEnd" && Wn && (q = Hu())
              : ((Zt = V), (ko = "value" in Zt ? Zt.value : Zt.textContent), (Wn = !0))),
          (X = Ki(E, ee)),
          0 < X.length &&
            ((ee = new Qu(ee, e, null, r, V)),
            N.push({ event: ee, listeners: X }),
            q ? (ee.data = q) : ((q = bu(r)), q !== null && (ee.data = q)))),
          (q = eg ? tg(e, r) : ng(e, r)) &&
            ((E = Ki(E, "onBeforeInput")),
            0 < E.length &&
              ((V = new Qu("onBeforeInput", "beforeinput", null, r, V)),
              N.push({ event: V, listeners: E }),
              (V.data = q))));
      }
      xc(N, t);
    });
  }
  function Ur(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Ki(e, t) {
    for (var r = t + "Capture", o = []; e !== null;) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = kr(e, r)),
        u != null && o.unshift(Ur(e, u, l)),
        (u = kr(e, t)),
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
      var y = r,
        x = y.alternate,
        E = y.stateNode;
      if (x !== null && x === o) break;
      (y.tag === 5 &&
        E !== null &&
        ((y = E),
        l
          ? ((x = kr(r, u)), x != null && h.unshift(Ur(r, x, y)))
          : l || ((x = kr(r, u)), x != null && h.push(Ur(r, x, y)))),
        (r = r.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var gg = /\r\n?/g,
    yg = /\u0000|\uFFFD/g;
  function kc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        gg,
        `
`,
      )
      .replace(yg, "");
  }
  function Gi(e, t, r) {
    if (((t = kc(t)), kc(e) !== t && r)) throw Error(s(425));
  }
  function Qi() {}
  var zo = null,
    Bo = null;
  function Uo(e, t) {
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
  var Wo = typeof setTimeout == "function" ? setTimeout : void 0,
    vg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Pc = typeof Promise == "function" ? Promise : void 0,
    xg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Pc < "u"
          ? function (e) {
              return Pc.resolve(null).then(e).catch(wg);
            }
          : Wo;
  function wg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function $o(e, t) {
    var r = t,
      o = 0;
    do {
      var l = r.nextSibling;
      if ((e.removeChild(r), l && l.nodeType === 8))
        if (((r = l.data), r === "/$")) {
          if (o === 0) {
            (e.removeChild(l), Vr(t));
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = l;
    } while (r);
    Vr(t);
  }
  function bt(e) {
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
    Mt = "__reactFiber$" + Gn,
    Wr = "__reactProps$" + Gn,
    Ft = "__reactContainer$" + Gn,
    Ho = "__reactEvents$" + Gn,
    Sg = "__reactListeners$" + Gn,
    kg = "__reactHandles$" + Gn;
  function vn(e) {
    var t = e[Mt];
    if (t) return t;
    for (var r = e.parentNode; r;) {
      if ((t = r[Ft] || r[Mt])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = Tc(e); e !== null;) {
            if ((r = e[Mt])) return r;
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
      (e = e[Mt] || e[Ft]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Yi(e) {
    return e[Wr] || null;
  }
  var Ko = [],
    Yn = -1;
  function en(e) {
    return { current: e };
  }
  function ye(e) {
    0 > Yn || ((e.current = Ko[Yn]), (Ko[Yn] = null), Yn--);
  }
  function me(e, t) {
    (Yn++, (Ko[Yn] = e.current), (e.current = t));
  }
  var tn = {},
    Be = en(tn),
    Je = en(!1),
    xn = tn;
  function Xn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return tn;
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
  function Xi() {
    (ye(Je), ye(Be));
  }
  function Cc(e, t, r) {
    if (Be.current !== tn) throw Error(s(168));
    (me(Be, t), me(Je, r));
  }
  function Ec(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function")) return r;
    o = o.getChildContext();
    for (var l in o) if (!(l in t)) throw Error(s(108, pe(e) || "Unknown", l));
    return B({}, r, o);
  }
  function qi(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
      (xn = Be.current),
      me(Be, e),
      me(Je, Je.current),
      !0
    );
  }
  function Ac(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    (r
      ? ((e = Ec(e, t, xn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        ye(Je),
        ye(Be),
        me(Be, e))
      : ye(Je),
      me(Je, r));
  }
  var Ot = null,
    Zi = !1,
    Go = !1;
  function Rc(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  function Pg(e) {
    ((Zi = !0), Rc(e));
  }
  function nn() {
    if (!Go && Ot !== null) {
      Go = !0;
      var e = 0,
        t = he;
      try {
        var r = Ot;
        for (he = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        ((Ot = null), (Zi = !1));
      } catch (l) {
        throw (Ot !== null && (Ot = Ot.slice(e + 1)), Mu(po, nn), l);
      } finally {
        ((he = t), (Go = !1));
      }
    }
    return null;
  }
  var qn = [],
    Zn = 0,
    Ji = null,
    bi = 0,
    dt = [],
    ht = 0,
    wn = null,
    It = 1,
    zt = "";
  function Sn(e, t) {
    ((qn[Zn++] = bi), (qn[Zn++] = Ji), (Ji = e), (bi = t));
  }
  function Dc(e, t, r) {
    ((dt[ht++] = It), (dt[ht++] = zt), (dt[ht++] = wn), (wn = e));
    var o = It;
    e = zt;
    var l = 32 - St(o) - 1;
    ((o &= ~(1 << l)), (r += 1));
    var u = 32 - St(t) + l;
    if (30 < u) {
      var h = l - (l % 5);
      ((u = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (l -= h),
        (It = (1 << (32 - St(t) + l)) | (r << l) | o),
        (zt = u + e));
    } else ((It = (1 << u) | (r << l) | o), (zt = e));
  }
  function Qo(e) {
    e.return !== null && (Sn(e, 1), Dc(e, 1, 0));
  }
  function Yo(e) {
    for (; e === Ji;) ((Ji = qn[--Zn]), (qn[Zn] = null), (bi = qn[--Zn]), (qn[Zn] = null));
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
    we = !1,
    Pt = null;
  function Mc(e, t) {
    var r = yt(5, null, null, 0);
    ((r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function Vc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (lt = e), (at = bt(t.firstChild)), !0) : !1
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
  function Xo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function qo(e) {
    if (we) {
      var t = at;
      if (t) {
        var r = t;
        if (!Vc(e, t)) {
          if (Xo(e)) throw Error(s(418));
          t = bt(r.nextSibling);
          var o = lt;
          t && Vc(e, t) ? Mc(o, r) : ((e.flags = (e.flags & -4097) | 2), (we = !1), (lt = e));
        }
      } else {
        if (Xo(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (we = !1), (lt = e));
      }
    }
  }
  function Lc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    lt = e;
  }
  function es(e) {
    if (e !== lt) return !1;
    if (!we) return (Lc(e), (we = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !Uo(e.type, e.memoizedProps))),
      t && (t = at))
    ) {
      if (Xo(e)) throw (Nc(), Error(s(418)));
      for (; t;) (Mc(e, t), (t = bt(t.nextSibling)));
    }
    if ((Lc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                at = bt(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        at = null;
      }
    } else at = lt ? bt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Nc() {
    for (var e = at; e;) e = bt(e.nextSibling);
  }
  function Jn() {
    ((at = lt = null), (we = !1));
  }
  function Zo(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  var Tg = te.ReactCurrentBatchConfig;
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
              var y = l.refs;
              h === null ? delete y[u] : (y[u] = h);
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
  function _c(e) {
    var t = e._init;
    return t(e._payload);
  }
  function jc(e) {
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
    function l(T, S) {
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
    function y(T, S, C, F) {
      return S === null || S.tag !== 6
        ? ((S = Wl(C, T.mode, F)), (S.return = T), S)
        : ((S = l(S, C)), (S.return = T), S);
    }
    function x(T, S, C, F) {
      var G = C.type;
      return G === ae
        ? V(T, S, C.props.children, F, C.key)
        : S !== null &&
            (S.elementType === G ||
              (typeof G == "object" && G !== null && G.$$typeof === Qe && _c(G) === S.type))
          ? ((F = l(S, C.props)), (F.ref = Hr(T, S, C)), (F.return = T), F)
          : ((F = Cs(C.type, C.key, C.props, null, T.mode, F)),
            (F.ref = Hr(T, S, C)),
            (F.return = T),
            F);
    }
    function E(T, S, C, F) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== C.containerInfo ||
        S.stateNode.implementation !== C.implementation
        ? ((S = $l(C, T.mode, F)), (S.return = T), S)
        : ((S = l(S, C.children || [])), (S.return = T), S);
    }
    function V(T, S, C, F, G) {
      return S === null || S.tag !== 7
        ? ((S = Dn(C, T.mode, F, G)), (S.return = T), S)
        : ((S = l(S, C)), (S.return = T), S);
    }
    function N(T, S, C) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return ((S = Wl("" + S, T.mode, C)), (S.return = T), S);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Q:
            return (
              (C = Cs(S.type, S.key, S.props, null, T.mode, C)),
              (C.ref = Hr(T, null, S)),
              (C.return = T),
              C
            );
          case ne:
            return ((S = $l(S, T.mode, C)), (S.return = T), S);
          case Qe:
            var F = S._init;
            return N(T, F(S._payload), C);
        }
        if (xr(S) || Y(S)) return ((S = Dn(S, T.mode, C, null)), (S.return = T), S);
        ts(T, S);
      }
      return null;
    }
    function R(T, S, C, F) {
      var G = S !== null ? S.key : null;
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return G !== null ? null : y(T, S, "" + C, F);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Q:
            return C.key === G ? x(T, S, C, F) : null;
          case ne:
            return C.key === G ? E(T, S, C, F) : null;
          case Qe:
            return ((G = C._init), R(T, S, G(C._payload), F));
        }
        if (xr(C) || Y(C)) return G !== null ? null : V(T, S, C, F, null);
        ts(T, C);
      }
      return null;
    }
    function z(T, S, C, F, G) {
      if ((typeof F == "string" && F !== "") || typeof F == "number")
        return ((T = T.get(C) || null), y(S, T, "" + F, G));
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Q:
            return ((T = T.get(F.key === null ? C : F.key) || null), x(S, T, F, G));
          case ne:
            return ((T = T.get(F.key === null ? C : F.key) || null), E(S, T, F, G));
          case Qe:
            var X = F._init;
            return z(T, S, C, X(F._payload), G);
        }
        if (xr(F) || Y(F)) return ((T = T.get(C) || null), V(S, T, F, G, null));
        ts(S, F);
      }
      return null;
    }
    function $(T, S, C, F) {
      for (
        var G = null, X = null, q = S, ee = (S = 0), Fe = null;
        q !== null && ee < C.length;
        ee++
      ) {
        q.index > ee ? ((Fe = q), (q = null)) : (Fe = q.sibling);
        var fe = R(T, q, C[ee], F);
        if (fe === null) {
          q === null && (q = Fe);
          break;
        }
        (e && q && fe.alternate === null && t(T, q),
          (S = u(fe, S, ee)),
          X === null ? (G = fe) : (X.sibling = fe),
          (X = fe),
          (q = Fe));
      }
      if (ee === C.length) return (r(T, q), we && Sn(T, ee), G);
      if (q === null) {
        for (; ee < C.length; ee++)
          ((q = N(T, C[ee], F)),
            q !== null && ((S = u(q, S, ee)), X === null ? (G = q) : (X.sibling = q), (X = q)));
        return (we && Sn(T, ee), G);
      }
      for (q = o(T, q); ee < C.length; ee++)
        ((Fe = z(q, T, ee, C[ee], F)),
          Fe !== null &&
            (e && Fe.alternate !== null && q.delete(Fe.key === null ? ee : Fe.key),
            (S = u(Fe, S, ee)),
            X === null ? (G = Fe) : (X.sibling = Fe),
            (X = Fe)));
      return (
        e &&
          q.forEach(function (dn) {
            return t(T, dn);
          }),
        we && Sn(T, ee),
        G
      );
    }
    function H(T, S, C, F) {
      var G = Y(C);
      if (typeof G != "function") throw Error(s(150));
      if (((C = G.call(C)), C == null)) throw Error(s(151));
      for (
        var X = (G = null), q = S, ee = (S = 0), Fe = null, fe = C.next();
        q !== null && !fe.done;
        ee++, fe = C.next()
      ) {
        q.index > ee ? ((Fe = q), (q = null)) : (Fe = q.sibling);
        var dn = R(T, q, fe.value, F);
        if (dn === null) {
          q === null && (q = Fe);
          break;
        }
        (e && q && dn.alternate === null && t(T, q),
          (S = u(dn, S, ee)),
          X === null ? (G = dn) : (X.sibling = dn),
          (X = dn),
          (q = Fe));
      }
      if (fe.done) return (r(T, q), we && Sn(T, ee), G);
      if (q === null) {
        for (; !fe.done; ee++, fe = C.next())
          ((fe = N(T, fe.value, F)),
            fe !== null &&
              ((S = u(fe, S, ee)), X === null ? (G = fe) : (X.sibling = fe), (X = fe)));
        return (we && Sn(T, ee), G);
      }
      for (q = o(T, q); !fe.done; ee++, fe = C.next())
        ((fe = z(q, T, ee, fe.value, F)),
          fe !== null &&
            (e && fe.alternate !== null && q.delete(fe.key === null ? ee : fe.key),
            (S = u(fe, S, ee)),
            X === null ? (G = fe) : (X.sibling = fe),
            (X = fe)));
      return (
        e &&
          q.forEach(function (ry) {
            return t(T, ry);
          }),
        we && Sn(T, ee),
        G
      );
    }
    function De(T, S, C, F) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === ae &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case Q:
            e: {
              for (var G = C.key, X = S; X !== null;) {
                if (X.key === G) {
                  if (((G = C.type), G === ae)) {
                    if (X.tag === 7) {
                      (r(T, X.sibling), (S = l(X, C.props.children)), (S.return = T), (T = S));
                      break e;
                    }
                  } else if (
                    X.elementType === G ||
                    (typeof G == "object" && G !== null && G.$$typeof === Qe && _c(G) === X.type)
                  ) {
                    (r(T, X.sibling),
                      (S = l(X, C.props)),
                      (S.ref = Hr(T, X, C)),
                      (S.return = T),
                      (T = S));
                    break e;
                  }
                  r(T, X);
                  break;
                } else t(T, X);
                X = X.sibling;
              }
              C.type === ae
                ? ((S = Dn(C.props.children, T.mode, F, C.key)), (S.return = T), (T = S))
                : ((F = Cs(C.type, C.key, C.props, null, T.mode, F)),
                  (F.ref = Hr(T, S, C)),
                  (F.return = T),
                  (T = F));
            }
            return h(T);
          case ne:
            e: {
              for (X = C.key; S !== null;) {
                if (S.key === X)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === C.containerInfo &&
                    S.stateNode.implementation === C.implementation
                  ) {
                    (r(T, S.sibling), (S = l(S, C.children || [])), (S.return = T), (T = S));
                    break e;
                  } else {
                    r(T, S);
                    break;
                  }
                else t(T, S);
                S = S.sibling;
              }
              ((S = $l(C, T.mode, F)), (S.return = T), (T = S));
            }
            return h(T);
          case Qe:
            return ((X = C._init), De(T, S, X(C._payload), F));
        }
        if (xr(C)) return $(T, S, C, F);
        if (Y(C)) return H(T, S, C, F);
        ts(T, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          S !== null && S.tag === 6
            ? (r(T, S.sibling), (S = l(S, C)), (S.return = T), (T = S))
            : (r(T, S), (S = Wl(C, T.mode, F)), (S.return = T), (T = S)),
          h(T))
        : r(T, S);
    }
    return De;
  }
  var bn = jc(!0),
    Fc = jc(!1),
    ns = en(null),
    rs = null,
    er = null,
    Jo = null;
  function bo() {
    Jo = er = rs = null;
  }
  function el(e) {
    var t = ns.current;
    (ye(ns), (e._currentValue = t));
  }
  function tl(e, t, r) {
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
    ((rs = e),
      (Jo = er = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (et = !0), (e.firstContext = null)));
  }
  function pt(e) {
    var t = e._currentValue;
    if (Jo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), er === null)) {
        if (rs === null) throw Error(s(308));
        ((er = e), (rs.dependencies = { lanes: 0, firstContext: e }));
      } else er = er.next = e;
    return t;
  }
  var kn = null;
  function nl(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Oc(e, t, r, o) {
    var l = t.interleaved;
    return (
      l === null ? ((r.next = r), nl(t)) : ((r.next = l.next), (l.next = r)),
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
  function rl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ic(e, t) {
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
      l === null ? ((t.next = t), nl(o)) : ((t.next = l.next), (l.next = t)),
      (o.interleaved = t),
      Bt(e, r)
    );
  }
  function is(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), yo(e, r));
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
  function ss(e, t, r, o) {
    var l = e.updateQueue;
    rn = !1;
    var u = l.firstBaseUpdate,
      h = l.lastBaseUpdate,
      y = l.shared.pending;
    if (y !== null) {
      l.shared.pending = null;
      var x = y,
        E = x.next;
      ((x.next = null), h === null ? (u = E) : (h.next = E), (h = x));
      var V = e.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (y = V.lastBaseUpdate),
        y !== h && (y === null ? (V.firstBaseUpdate = E) : (y.next = E), (V.lastBaseUpdate = x)));
    }
    if (u !== null) {
      var N = l.baseState;
      ((h = 0), (V = E = x = null), (y = u));
      do {
        var R = y.lane,
          z = y.eventTime;
        if ((o & R) === R) {
          V !== null &&
            (V = V.next =
              {
                eventTime: z,
                lane: 0,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null,
              });
          e: {
            var $ = e,
              H = y;
            switch (((R = t), (z = r), H.tag)) {
              case 1:
                if ((($ = H.payload), typeof $ == "function")) {
                  N = $.call(z, N, R);
                  break e;
                }
                N = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = H.payload), (R = typeof $ == "function" ? $.call(z, N, R) : $), R == null)
                )
                  break e;
                N = B({}, N, R);
                break e;
              case 2:
                rn = !0;
            }
          }
          y.callback !== null &&
            y.lane !== 0 &&
            ((e.flags |= 64), (R = l.effects), R === null ? (l.effects = [y]) : R.push(y));
        } else
          ((z = {
            eventTime: z,
            lane: R,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            V === null ? ((E = V = z), (x = N)) : (V = V.next = z),
            (h |= R));
        if (((y = y.next), y === null)) {
          if (((y = l.shared.pending), y === null)) break;
          ((R = y),
            (y = R.next),
            (R.next = null),
            (l.lastBaseUpdate = R),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (V === null && (x = N),
        (l.baseState = x),
        (l.firstBaseUpdate = E),
        (l.lastBaseUpdate = V),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((h |= l.lane), (l = l.next));
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ((Cn |= h), (e.lanes = h), (e.memoizedState = N));
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
    Vt = en(Kr),
    Gr = en(Kr),
    Qr = en(Kr);
  function Pn(e) {
    if (e === Kr) throw Error(s(174));
    return e;
  }
  function il(e, t) {
    switch ((me(Qr, t), me(Gr, e), me(Vt, Kr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : io(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = io(t, e)));
    }
    (ye(Vt), me(Vt, t));
  }
  function nr() {
    (ye(Vt), ye(Gr), ye(Qr));
  }
  function Uc(e) {
    Pn(Qr.current);
    var t = Pn(Vt.current),
      r = io(t, e.type);
    t !== r && (me(Gr, e), me(Vt, r));
  }
  function sl(e) {
    Gr.current === e && (ye(Vt), ye(Gr));
  }
  var ke = en(0);
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
  var ol = [];
  function ll() {
    for (var e = 0; e < ol.length; e++) ol[e]._workInProgressVersionPrimary = null;
    ol.length = 0;
  }
  var ls = te.ReactCurrentDispatcher,
    al = te.ReactCurrentBatchConfig,
    Tn = 0,
    Pe = null,
    Le = null,
    _e = null,
    as = !1,
    Yr = !1,
    Xr = 0,
    Cg = 0;
  function Ue() {
    throw Error(s(321));
  }
  function ul(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!kt(e[r], t[r])) return !1;
    return !0;
  }
  function cl(e, t, r, o, l, u) {
    if (
      ((Tn = u),
      (Pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ls.current = e === null || e.memoizedState === null ? Dg : Mg),
      (e = r(o, l)),
      Yr)
    ) {
      u = 0;
      do {
        if (((Yr = !1), (Xr = 0), 25 <= u)) throw Error(s(301));
        ((u += 1), (_e = Le = null), (t.updateQueue = null), (ls.current = Vg), (e = r(o, l)));
      } while (Yr);
    }
    if (
      ((ls.current = fs),
      (t = Le !== null && Le.next !== null),
      (Tn = 0),
      (_e = Le = Pe = null),
      (as = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function fl() {
    var e = Xr !== 0;
    return ((Xr = 0), e);
  }
  function Lt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (_e === null ? (Pe.memoizedState = _e = e) : (_e = _e.next = e), _e);
  }
  function mt() {
    if (Le === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = _e === null ? Pe.memoizedState : _e.next;
    if (t !== null) ((_e = t), (Le = e));
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
        _e === null ? (Pe.memoizedState = _e = e) : (_e = _e.next = e));
    }
    return _e;
  }
  function qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function dl(e) {
    var t = mt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = Le,
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
      var y = (h = null),
        x = null,
        E = u;
      do {
        var V = E.lane;
        if ((Tn & V) === V)
          (x !== null &&
            (x = x.next =
              {
                lane: 0,
                action: E.action,
                hasEagerState: E.hasEagerState,
                eagerState: E.eagerState,
                next: null,
              }),
            (o = E.hasEagerState ? E.eagerState : e(o, E.action)));
        else {
          var N = {
            lane: V,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          };
          (x === null ? ((y = x = N), (h = o)) : (x = x.next = N), (Pe.lanes |= V), (Cn |= V));
        }
        E = E.next;
      } while (E !== null && E !== u);
      (x === null ? (h = o) : (x.next = y),
        kt(o, t.memoizedState) || (et = !0),
        (t.memoizedState = o),
        (t.baseState = h),
        (t.baseQueue = x),
        (r.lastRenderedState = o));
    }
    if (((e = r.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), (Pe.lanes |= u), (Cn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function hl(e) {
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
      (kt(u, t.memoizedState) || (et = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (r.lastRenderedState = u));
    }
    return [u, o];
  }
  function Wc() {}
  function $c(e, t) {
    var r = Pe,
      o = mt(),
      l = t(),
      u = !kt(o.memoizedState, l);
    if (
      (u && ((o.memoizedState = l), (et = !0)),
      (o = o.queue),
      pl(Gc.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || u || (_e !== null && _e.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), Zr(9, Kc.bind(null, r, o, l, t), void 0, null), je === null))
        throw Error(s(349));
      (Tn & 30) !== 0 || Hc(r, t, l);
    }
    return l;
  }
  function Hc(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Pe.updateQueue = t), (t.stores = [e]))
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
      return !kt(e, r);
    } catch {
      return !0;
    }
  }
  function Yc(e) {
    var t = Bt(e, 1);
    t !== null && At(t, e, 1, -1);
  }
  function Xc(e) {
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
      (e = e.dispatch = Rg.bind(null, Pe, e)),
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
  function qc() {
    return mt().memoizedState;
  }
  function us(e, t, r, o) {
    var l = Lt();
    ((Pe.flags |= e), (l.memoizedState = Zr(1 | t, r, void 0, o === void 0 ? null : o)));
  }
  function cs(e, t, r, o) {
    var l = mt();
    o = o === void 0 ? null : o;
    var u = void 0;
    if (Le !== null) {
      var h = Le.memoizedState;
      if (((u = h.destroy), o !== null && ul(o, h.deps))) {
        l.memoizedState = Zr(t, r, u, o);
        return;
      }
    }
    ((Pe.flags |= e), (l.memoizedState = Zr(1 | t, r, u, o)));
  }
  function Zc(e, t) {
    return us(8390656, 8, e, t);
  }
  function pl(e, t) {
    return cs(2048, 8, e, t);
  }
  function Jc(e, t) {
    return cs(4, 2, e, t);
  }
  function bc(e, t) {
    return cs(4, 4, e, t);
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
    return ((r = r != null ? r.concat([e]) : null), cs(4, 4, ef.bind(null, t, e), r));
  }
  function ml() {}
  function nf(e, t) {
    var r = mt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && ul(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function rf(e, t) {
    var r = mt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && ul(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function sf(e, t, r) {
    return (Tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = r))
      : (kt(r, t) || ((r = _u()), (Pe.lanes |= r), (Cn |= r), (e.baseState = !0)), t);
  }
  function Eg(e, t) {
    var r = he;
    ((he = r !== 0 && 4 > r ? r : 4), e(!0));
    var o = al.transition;
    al.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((he = r), (al.transition = o));
    }
  }
  function of() {
    return mt().memoizedState;
  }
  function Ag(e, t, r) {
    var o = un(e);
    if (((r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }), lf(e)))
      af(t, r);
    else if (((r = Oc(e, t, r, o)), r !== null)) {
      var l = Xe();
      (At(r, e, o, l), uf(r, t, o));
    }
  }
  function Rg(e, t, r) {
    var o = un(e),
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
            y = u(h, r);
          if (((l.hasEagerState = !0), (l.eagerState = y), kt(y, h))) {
            var x = t.interleaved;
            (x === null ? ((l.next = l), nl(t)) : ((l.next = x.next), (x.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((r = Oc(e, t, l, o)), r !== null && ((l = Xe()), At(r, e, o, l), uf(r, t, o)));
    }
  }
  function lf(e) {
    var t = e.alternate;
    return e === Pe || (t !== null && t === Pe);
  }
  function af(e, t) {
    Yr = as = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function uf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (r |= o), (t.lanes = r), yo(e, r));
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
    Dg = {
      readContext: pt,
      useCallback: function (e, t) {
        return ((Lt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: pt,
      useEffect: Zc,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), us(4194308, 4, ef.bind(null, t, e), r));
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
          (e = e.dispatch = Ag.bind(null, Pe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Lt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Xc,
      useDebugValue: ml,
      useDeferredValue: function (e) {
        return (Lt().memoizedState = e);
      },
      useTransition: function () {
        var e = Xc(!1),
          t = e[0];
        return ((e = Eg.bind(null, e[1])), (Lt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = Pe,
          l = Lt();
        if (we) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), je === null)) throw Error(s(349));
          (Tn & 30) !== 0 || Hc(o, t, r);
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
        var e = Lt(),
          t = je.identifierPrefix;
        if (we) {
          var r = zt,
            o = It;
          ((r = (o & ~(1 << (32 - St(o) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Xr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":"));
        } else ((r = Cg++), (t = ":" + t + "r" + r.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Mg = {
      readContext: pt,
      useCallback: nf,
      useContext: pt,
      useEffect: pl,
      useImperativeHandle: tf,
      useInsertionEffect: Jc,
      useLayoutEffect: bc,
      useMemo: rf,
      useReducer: dl,
      useRef: qc,
      useState: function () {
        return dl(qr);
      },
      useDebugValue: ml,
      useDeferredValue: function (e) {
        var t = mt();
        return sf(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = dl(qr)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Wc,
      useSyncExternalStore: $c,
      useId: of,
      unstable_isNewReconciler: !1,
    },
    Vg = {
      readContext: pt,
      useCallback: nf,
      useContext: pt,
      useEffect: pl,
      useImperativeHandle: tf,
      useInsertionEffect: Jc,
      useLayoutEffect: bc,
      useMemo: rf,
      useReducer: hl,
      useRef: qc,
      useState: function () {
        return hl(qr);
      },
      useDebugValue: ml,
      useDeferredValue: function (e) {
        var t = mt();
        return Le === null ? (t.memoizedState = e) : sf(t, Le.memoizedState, e);
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
    };
  function Tt(e, t) {
    if (e && e.defaultProps) {
      ((t = B({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function gl(e, t, r, o) {
    ((t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : B({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var ds = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? yn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = Xe(),
        l = un(e),
        u = Ut(o, l);
      ((u.payload = t),
        r != null && (u.callback = r),
        (t = sn(e, u, l)),
        t !== null && (At(t, e, l, o), is(t, e, l)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = Xe(),
        l = un(e),
        u = Ut(o, l);
      ((u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = sn(e, u, l)),
        t !== null && (At(t, e, l, o), is(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Xe(),
        o = un(e),
        l = Ut(r, o);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = sn(e, l, o)),
        t !== null && (At(t, e, o, r), is(t, e, o)));
    },
  };
  function cf(e, t, r, o, l, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, u, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Or(r, o) || !Or(l, u)
          : !0
    );
  }
  function ff(e, t, r) {
    var o = !1,
      l = tn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = pt(u))
        : ((l = be(t) ? xn : Be.current),
          (o = t.contextTypes),
          (u = (o = o != null) ? Xn(e, l) : tn)),
      (t = new t(r, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ds),
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
      t.state !== e && ds.enqueueReplaceState(t, t.state, null));
  }
  function yl(e, t, r, o) {
    var l = e.stateNode;
    ((l.props = r), (l.state = e.memoizedState), (l.refs = {}), rl(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = pt(u))
      : ((u = be(t) ? xn : Be.current), (l.context = Xn(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (gl(e, t, u, r), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && ds.enqueueReplaceState(l, l.state, null),
        ss(e, r, l, o),
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
  function vl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function xl(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Lg = typeof WeakMap == "function" ? WeakMap : Map;
  function hf(e, t, r) {
    ((r = Ut(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var o = t.value;
    return (
      (r.callback = function () {
        (xs || ((xs = !0), (_l = o)), xl(e, t));
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
          xl(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (r.callback = function () {
          (xl(e, t),
            typeof o != "function" && (ln === null ? (ln = new Set([this])) : ln.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
        }),
      r
    );
  }
  function mf(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Lg();
      var l = new Set();
      o.set(t, l);
    } else ((l = o.get(t)), l === void 0 && ((l = new Set()), o.set(t, l)));
    l.has(r) || (l.add(r), (e = Gg.bind(null, e, t, r)), t.then(e, e));
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
              (r.alternate === null ? (r.tag = 17) : ((t = Ut(-1, 1)), (t.tag = 2), sn(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Ng = te.ReactCurrentOwner,
    et = !1;
  function Ye(e, t, r, o) {
    t.child = e === null ? Fc(t, null, r, o) : bn(t, e.child, r, o);
  }
  function vf(e, t, r, o, l) {
    r = r.render;
    var u = t.ref;
    return (
      tr(t, l),
      (o = cl(e, t, r, o, u, l)),
      (r = fl()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Wt(e, t, l))
        : (we && r && Qo(t), (t.flags |= 1), Ye(e, t, o, l), t.child)
    );
  }
  function xf(e, t, r, o, l) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !Ul(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), wf(e, t, u, o, l))
        : ((e = Cs(r.type, null, o, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var h = u.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Or), r(h, o) && e.ref === t.ref))
        return Wt(e, t, l);
    }
    return ((t.flags |= 1), (e = fn(u, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function wf(e, t, r, o, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Or(u, o) && e.ref === t.ref)
        if (((et = !1), (t.pendingProps = o = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (et = !0);
        else return ((t.lanes = e.lanes), Wt(e, t, l));
    }
    return wl(e, t, r, o, l);
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
  function kf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function wl(e, t, r, o, l) {
    var u = be(r) ? xn : Be.current;
    return (
      (u = Xn(t, u)),
      tr(t, l),
      (r = cl(e, t, r, o, u, l)),
      (o = fl()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Wt(e, t, l))
        : (we && o && Qo(t), (t.flags |= 1), Ye(e, t, r, l), t.child)
    );
  }
  function Pf(e, t, r, o, l) {
    if (be(r)) {
      var u = !0;
      qi(t);
    } else u = !1;
    if ((tr(t, l), t.stateNode === null)) (ps(e, t), ff(t, r, o), yl(t, r, o, l), (o = !0));
    else if (e === null) {
      var h = t.stateNode,
        y = t.memoizedProps;
      h.props = y;
      var x = h.context,
        E = r.contextType;
      typeof E == "object" && E !== null
        ? (E = pt(E))
        : ((E = be(r) ? xn : Be.current), (E = Xn(t, E)));
      var V = r.getDerivedStateFromProps,
        N = typeof V == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (N ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((y !== o || x !== E) && df(t, h, o, E)),
        (rn = !1));
      var R = t.memoizedState;
      ((h.state = R),
        ss(t, o, h, l),
        (x = t.memoizedState),
        y !== o || R !== x || Je.current || rn
          ? (typeof V == "function" && (gl(t, r, V, o), (x = t.memoizedState)),
            (y = rn || cf(t, r, y, o, R, x, E))
              ? (N ||
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
            (h.context = E),
            (o = y))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), (o = !1)));
    } else {
      ((h = t.stateNode),
        Ic(e, t),
        (y = t.memoizedProps),
        (E = t.type === t.elementType ? y : Tt(t.type, y)),
        (h.props = E),
        (N = t.pendingProps),
        (R = h.context),
        (x = r.contextType),
        typeof x == "object" && x !== null
          ? (x = pt(x))
          : ((x = be(r) ? xn : Be.current), (x = Xn(t, x))));
      var z = r.getDerivedStateFromProps;
      ((V = typeof z == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((y !== N || R !== x) && df(t, h, o, x)),
        (rn = !1),
        (R = t.memoizedState),
        (h.state = R),
        ss(t, o, h, l));
      var $ = t.memoizedState;
      y !== N || R !== $ || Je.current || rn
        ? (typeof z == "function" && (gl(t, r, z, o), ($ = t.memoizedState)),
          (E = rn || cf(t, r, E, o, R, $, x) || !1)
            ? (V ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, $, x),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, $, x)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (y === e.memoizedProps && R === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (y === e.memoizedProps && R === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = $)),
          (h.props = o),
          (h.state = $),
          (h.context = x),
          (o = E))
        : (typeof h.componentDidUpdate != "function" ||
            (y === e.memoizedProps && R === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (y === e.memoizedProps && R === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Sl(e, t, r, o, u, l);
  }
  function Sl(e, t, r, o, l, u) {
    kf(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return (l && Ac(t, r, !1), Wt(e, t, u));
    ((o = t.stateNode), (Ng.current = t));
    var y = h && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = bn(t, e.child, null, u)), (t.child = bn(t, null, y, u)))
        : Ye(e, t, y, u),
      (t.memoizedState = o.state),
      l && Ac(t, r, !0),
      t.child
    );
  }
  function Tf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Cc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Cc(e, t.context, !1),
      il(e, t.containerInfo));
  }
  function Cf(e, t, r, o, l) {
    return (Jn(), Zo(l), (t.flags |= 256), Ye(e, t, r, o), t.child);
  }
  var kl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ef(e, t, r) {
    var o = t.pendingProps,
      l = ke.current,
      u = !1,
      h = (t.flags & 128) !== 0,
      y;
    if (
      ((y = h) || (y = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      y ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      me(ke, l & 1),
      e === null)
    )
      return (
        qo(t),
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
                (e = Dn(e, o, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Pl(r)),
                (t.memoizedState = kl),
                e)
              : Tl(t, h))
      );
    if (((l = e.memoizedState), l !== null && ((y = l.dehydrated), y !== null)))
      return _g(e, t, h, o, y, l, r);
    if (u) {
      ((u = o.fallback), (h = t.mode), (l = e.child), (y = l.sibling));
      var x = { mode: "hidden", children: o.children };
      return (
        (h & 1) === 0 && t.child !== l
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = x), (t.deletions = null))
          : ((o = fn(l, x)), (o.subtreeFlags = l.subtreeFlags & 14680064)),
        y !== null ? (u = fn(y, u)) : ((u = Dn(u, h, r, null)), (u.flags |= 2)),
        (u.return = t),
        (o.return = t),
        (o.sibling = u),
        (t.child = o),
        (o = u),
        (u = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? Pl(r)
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
  function Tl(e, t) {
    return (
      (t = Es({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function hs(e, t, r, o) {
    return (
      o !== null && Zo(o),
      bn(t, e.child, null, r),
      (e = Tl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function _g(e, t, r, o, l, u, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = vl(Error(s(422)))), hs(e, t, h, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = o.fallback),
            (l = t.mode),
            (o = Es({ mode: "visible", children: o.children }, l, 0, null)),
            (u = Dn(u, l, h, null)),
            (u.flags |= 2),
            (o.return = t),
            (u.return = t),
            (o.sibling = u),
            (t.child = o),
            (t.mode & 1) !== 0 && bn(t, e.child, null, h),
            (t.child.memoizedState = Pl(h)),
            (t.memoizedState = kl),
            u);
    if ((t.mode & 1) === 0) return hs(e, t, h, null);
    if (l.data === "$!") {
      if (((o = l.nextSibling && l.nextSibling.dataset), o)) var y = o.dgst;
      return ((o = y), (u = Error(s(419))), (o = vl(u, o, void 0)), hs(e, t, h, o));
    }
    if (((y = (h & e.childLanes) !== 0), et || y)) {
      if (((o = je), o !== null)) {
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
      return (Bl(), (o = vl(Error(s(421)))), hs(e, t, h, o));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Qg.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (at = bt(l.nextSibling)),
        (lt = t),
        (we = !0),
        (Pt = null),
        e !== null &&
          ((dt[ht++] = It),
          (dt[ht++] = zt),
          (dt[ht++] = wn),
          (It = e.id),
          (zt = e.overflow),
          (wn = t)),
        (t = Tl(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Af(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), tl(e.return, t, r));
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
    if ((Ye(e, t, o.children, r), (o = ke.current), (o & 2) !== 0))
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
    if ((me(ke, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (r = t.child, l = null; r !== null;)
            ((e = r.alternate), e !== null && os(e) === null && (l = r), (r = r.sibling));
          ((r = l),
            r === null ? ((l = t.child), (t.child = null)) : ((l = r.sibling), (r.sibling = null)),
            Cl(t, !1, l, r, u));
          break;
        case "backwards":
          for (r = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && os(e) === null)) {
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
  function ps(e, t) {
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
  function jg(e, t, r) {
    switch (t.tag) {
      case 3:
        (Tf(t), Jn());
        break;
      case 5:
        Uc(t);
        break;
      case 1:
        be(t.type) && qi(t);
        break;
      case 4:
        il(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          l = t.memoizedProps.value;
        (me(ns, o._currentValue), (o._currentValue = l));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (me(ke, ke.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Ef(e, t, r)
              : (me(ke, ke.current & 1), (e = Wt(e, t, r)), e !== null ? e.sibling : null);
        me(ke, ke.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return Rf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          me(ke, ke.current),
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
  var Df, El, Mf, Vf;
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
    (El = function () {}),
    (Mf = function (e, t, r, o) {
      var l = e.memoizedProps;
      if (l !== o) {
        ((e = t.stateNode), Pn(Vt.current));
        var u = null;
        switch (r) {
          case "input":
            ((l = eo(e, l)), (o = eo(e, o)), (u = []));
            break;
          case "select":
            ((l = B({}, l, { value: void 0 })), (o = B({}, o, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = ro(e, l)), (o = ro(e, o)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Qi);
        }
        so(r, o);
        var h;
        r = null;
        for (E in l)
          if (!o.hasOwnProperty(E) && l.hasOwnProperty(E) && l[E] != null)
            if (E === "style") {
              var y = l[E];
              for (h in y) y.hasOwnProperty(h) && (r || (r = {}), (r[h] = ""));
            } else
              E !== "dangerouslySetInnerHTML" &&
                E !== "children" &&
                E !== "suppressContentEditableWarning" &&
                E !== "suppressHydrationWarning" &&
                E !== "autoFocus" &&
                (c.hasOwnProperty(E) ? u || (u = []) : (u = u || []).push(E, null));
        for (E in o) {
          var x = o[E];
          if (
            ((y = l != null ? l[E] : void 0),
            o.hasOwnProperty(E) && x !== y && (x != null || y != null))
          )
            if (E === "style")
              if (y) {
                for (h in y)
                  !y.hasOwnProperty(h) ||
                    (x && x.hasOwnProperty(h)) ||
                    (r || (r = {}), (r[h] = ""));
                for (h in x) x.hasOwnProperty(h) && y[h] !== x[h] && (r || (r = {}), (r[h] = x[h]));
              } else (r || (u || (u = []), u.push(E, r)), (r = x));
            else
              E === "dangerouslySetInnerHTML"
                ? ((x = x ? x.__html : void 0),
                  (y = y ? y.__html : void 0),
                  x != null && y !== x && (u = u || []).push(E, x))
                : E === "children"
                  ? (typeof x != "string" && typeof x != "number") || (u = u || []).push(E, "" + x)
                  : E !== "suppressContentEditableWarning" &&
                    E !== "suppressHydrationWarning" &&
                    (c.hasOwnProperty(E)
                      ? (x != null && E === "onScroll" && ge("scroll", e), u || y === x || (u = []))
                      : (u = u || []).push(E, x));
        }
        r && (u = u || []).push("style", r);
        var E = u;
        (t.updateQueue = E) && (t.flags |= 4);
      }
    }),
    (Vf = function (e, t, r, o) {
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
  function Fg(e, t, r) {
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
        return (be(t.type) && Xi(), We(t), null);
      case 3:
        return (
          (o = t.stateNode),
          nr(),
          ye(Je),
          ye(Be),
          ll(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (es(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pt !== null && (Ol(Pt), (Pt = null)))),
          El(e, t),
          We(t),
          null
        );
      case 5:
        sl(t);
        var l = Pn(Qr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (Mf(e, t, r, o, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (We(t), null);
          }
          if (((e = Pn(Vt.current)), es(t))) {
            ((o = t.stateNode), (r = t.type));
            var u = t.memoizedProps;
            switch (((o[Mt] = t), (o[Wr] = u), (e = (t.mode & 1) !== 0), r)) {
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
            (so(r, u), (l = null));
            for (var h in u)
              if (u.hasOwnProperty(h)) {
                var y = u[h];
                h === "children"
                  ? typeof y == "string"
                    ? o.textContent !== y &&
                      (u.suppressHydrationWarning !== !0 && Gi(o.textContent, y, e),
                      (l = ["children", y]))
                    : typeof y == "number" &&
                      o.textContent !== "" + y &&
                      (u.suppressHydrationWarning !== !0 && Gi(o.textContent, y, e),
                      (l = ["children", "" + y]))
                  : c.hasOwnProperty(h) && y != null && h === "onScroll" && ge("scroll", o);
              }
            switch (r) {
              case "input":
                (Pi(o), du(o, u, !0));
                break;
              case "textarea":
                (Pi(o), mu(o));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (o.onclick = Qi);
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
              (e[Mt] = t),
              (e[Wr] = o),
              Df(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = oo(r, o)), r)) {
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
                  (cu(e, o), (l = eo(e, o)), ge("invalid", e));
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
                  (hu(e, o), (l = ro(e, o)), ge("invalid", e));
                  break;
                default:
                  l = o;
              }
              (so(r, l), (y = l));
              for (u in y)
                if (y.hasOwnProperty(u)) {
                  var x = y[u];
                  u === "style"
                    ? xu(e, x)
                    : u === "dangerouslySetInnerHTML"
                      ? ((x = x ? x.__html : void 0), x != null && yu(e, x))
                      : u === "children"
                        ? typeof x == "string"
                          ? (r !== "textarea" || x !== "") && wr(e, x)
                          : typeof x == "number" && wr(e, "" + x)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (c.hasOwnProperty(u)
                            ? x != null && u === "onScroll" && ge("scroll", e)
                            : x != null && K(e, u, x, h));
                }
              switch (r) {
                case "input":
                  (Pi(e), du(e, o, !1));
                  break;
                case "textarea":
                  (Pi(e), mu(e));
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + de(o.value));
                  break;
                case "select":
                  ((e.multiple = !!o.multiple),
                    (u = o.value),
                    u != null
                      ? On(e, !!o.multiple, u, !1)
                      : o.defaultValue != null && On(e, !!o.multiple, o.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Qi);
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
        if (e && t.stateNode != null) Vf(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((r = Pn(Qr.current)), Pn(Vt.current), es(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[Mt] = t),
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
              (o[Mt] = t),
              (t.stateNode = o));
        }
        return (We(t), null);
      case 13:
        if (
          (ye(ke),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (we && at !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Nc(), Jn(), (t.flags |= 98560), (u = !1));
          else if (((u = es(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(s(317));
              u[Mt] = t;
            } else (Jn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (We(t), (u = !1));
          } else (Pt !== null && (Ol(Pt), (Pt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ke.current & 1) !== 0 ? Ne === 0 && (Ne = 3) : Bl())),
            t.updateQueue !== null && (t.flags |= 4),
            We(t),
            null);
      case 4:
        return (nr(), El(e, t), e === null && Br(t.stateNode.containerInfo), We(t), null);
      case 10:
        return (el(t.type._context), We(t), null);
      case 17:
        return (be(t.type) && Xi(), We(t), null);
      case 19:
        if ((ye(ke), (u = t.memoizedState), u === null)) return (We(t), null);
        if (((o = (t.flags & 128) !== 0), (h = u.rendering), h === null))
          if (o) Jr(u, !1);
          else {
            if (Ne !== 0 || (e !== null && (e.flags & 128) !== 0))
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
              Re() > or &&
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
            (r = ke.current),
            me(ke, o ? (r & 1) | 2 : r & 1),
            t)
          : (We(t), null);
      case 22:
      case 23:
        return (
          zl(),
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
  function Og(e, t) {
    switch ((Yo(t), t.tag)) {
      case 1:
        return (
          be(t.type) && Xi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          nr(),
          ye(Je),
          ye(Be),
          ll(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (sl(t), null);
      case 13:
        if ((ye(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Jn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ye(ke), null);
      case 4:
        return (nr(), null);
      case 10:
        return (el(t.type._context), null);
      case 22:
      case 23:
        return (zl(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ms = !1,
    $e = !1,
    Ig = typeof WeakSet == "function" ? WeakSet : Set,
    U = null;
  function ir(e, t) {
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
  var Lf = !1;
  function zg(e, t) {
    if (((zo = ji), (e = uc()), Vo(e))) {
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
              y = -1,
              x = -1,
              E = 0,
              V = 0,
              N = e,
              R = null;
            t: for (;;) {
              for (
                var z;
                N !== r || (l !== 0 && N.nodeType !== 3) || (y = h + l),
                  N !== u || (o !== 0 && N.nodeType !== 3) || (x = h + o),
                  N.nodeType === 3 && (h += N.nodeValue.length),
                  (z = N.firstChild) !== null;
              )
                ((R = N), (N = z));
              for (;;) {
                if (N === e) break t;
                if (
                  (R === r && ++E === l && (y = h),
                  R === u && ++V === o && (x = h),
                  (z = N.nextSibling) !== null)
                )
                  break;
                ((N = R), (R = N.parentNode));
              }
              N = z;
            }
            r = y === -1 || x === -1 ? null : { start: y, end: x };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Bo = { focusedElem: e, selectionRange: r }, ji = !1, U = t; U !== null;)
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
                      S = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? H : Tt(t.type, H),
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
            ((e.return = t.return), (U = e));
            break;
          }
          U = t.return;
        }
    return (($ = Lf), (Lf = !1), $);
  }
  function br(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var l = (o = o.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          ((l.destroy = void 0), u !== void 0 && Al(t, r, u));
        }
        l = l.next;
      } while (l !== o);
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
  function Nf(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Nf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Mt], delete t[Wr], delete t[Ho], delete t[Sg], delete t[kg])),
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
  function jf(e) {
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
  function Ml(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Ml(e, t, r), e = e.sibling; e !== null;) (Ml(e, t, r), (e = e.sibling));
  }
  var Oe = null,
    Ct = !1;
  function on(e, t, r) {
    for (r = r.child; r !== null;) (Ff(e, t, r), (r = r.sibling));
  }
  function Ff(e, t, r) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(Di, r);
      } catch {}
    switch (r.tag) {
      case 5:
        $e || ir(r, t);
      case 6:
        var o = Oe,
          l = Ct;
        ((Oe = null),
          on(e, t, r),
          (Oe = o),
          (Ct = l),
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
              e.nodeType === 8 ? $o(e.parentNode, r) : e.nodeType === 1 && $o(e, r),
              Vr(e))
            : $o(Oe, r.stateNode));
        break;
      case 4:
        ((o = Oe),
          (l = Ct),
          (Oe = r.stateNode.containerInfo),
          (Ct = !0),
          on(e, t, r),
          (Oe = o),
          (Ct = l));
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
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Al(r, t, h),
              (l = l.next));
          } while (l !== o);
        }
        on(e, t, r);
        break;
      case 1:
        if (!$e && (ir(r, t), (o = r.stateNode), typeof o.componentWillUnmount == "function"))
          try {
            ((o.props = r.memoizedProps), (o.state = r.memoizedState), o.componentWillUnmount());
          } catch (y) {
            Ee(r, t, y);
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
  function Of(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Ig()),
        t.forEach(function (o) {
          var l = Yg.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(l, l));
        }));
    }
  }
  function Et(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var l = r[o];
        try {
          var u = e,
            h = t,
            y = h;
          e: for (; y !== null;) {
            switch (y.tag) {
              case 5:
                ((Oe = y.stateNode), (Ct = !1));
                break e;
              case 3:
                ((Oe = y.stateNode.containerInfo), (Ct = !0));
                break e;
              case 4:
                ((Oe = y.stateNode.containerInfo), (Ct = !0));
                break e;
            }
            y = y.return;
          }
          if (Oe === null) throw Error(s(160));
          (Ff(u, h, l), (Oe = null), (Ct = !1));
          var x = l.alternate;
          (x !== null && (x.return = null), (l.return = null));
        } catch (E) {
          Ee(l, t, E);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (If(t, e), (t = t.sibling));
  }
  function If(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Et(t, e), Nt(e), o & 4)) {
          try {
            (br(3, e, e.return), gs(3, e));
          } catch (H) {
            Ee(e, e.return, H);
          }
          try {
            br(5, e, e.return);
          } catch (H) {
            Ee(e, e.return, H);
          }
        }
        break;
      case 1:
        (Et(t, e), Nt(e), o & 512 && r !== null && ir(r, r.return));
        break;
      case 5:
        if ((Et(t, e), Nt(e), o & 512 && r !== null && ir(r, r.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            wr(l, "");
          } catch (H) {
            Ee(e, e.return, H);
          }
        }
        if (o & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            h = r !== null ? r.memoizedProps : u,
            y = e.type,
            x = e.updateQueue;
          if (((e.updateQueue = null), x !== null))
            try {
              (y === "input" && u.type === "radio" && u.name != null && fu(l, u), oo(y, h));
              var E = oo(y, u);
              for (h = 0; h < x.length; h += 2) {
                var V = x[h],
                  N = x[h + 1];
                V === "style"
                  ? xu(l, N)
                  : V === "dangerouslySetInnerHTML"
                    ? yu(l, N)
                    : V === "children"
                      ? wr(l, N)
                      : K(l, V, N, E);
              }
              switch (y) {
                case "input":
                  to(l, u);
                  break;
                case "textarea":
                  pu(l, u);
                  break;
                case "select":
                  var R = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var z = u.value;
                  z != null
                    ? On(l, !!u.multiple, z, !1)
                    : R !== !!u.multiple &&
                      (u.defaultValue != null
                        ? On(l, !!u.multiple, u.defaultValue, !0)
                        : On(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[Wr] = u;
            } catch (H) {
              Ee(e, e.return, H);
            }
        }
        break;
      case 6:
        if ((Et(t, e), Nt(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (H) {
            Ee(e, e.return, H);
          }
        }
        break;
      case 3:
        if ((Et(t, e), Nt(e), o & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            Vr(t.containerInfo);
          } catch (H) {
            Ee(e, e.return, H);
          }
        break;
      case 4:
        (Et(t, e), Nt(e));
        break;
      case 13:
        (Et(t, e),
          Nt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (Nl = Re())),
          o & 4 && Of(e));
        break;
      case 22:
        if (
          ((V = r !== null && r.memoizedState !== null),
          e.mode & 1 ? (($e = (E = $e) || V), Et(t, e), ($e = E)) : Et(t, e),
          Nt(e),
          o & 8192)
        ) {
          if (
            ((E = e.memoizedState !== null), (e.stateNode.isHidden = E) && !V && (e.mode & 1) !== 0)
          )
            for (U = e, V = e.child; V !== null;) {
              for (N = U = V; U !== null;) {
                switch (((R = U), (z = R.child), R.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    br(4, R, R.return);
                    break;
                  case 1:
                    ir(R, R.return);
                    var $ = R.stateNode;
                    if (typeof $.componentWillUnmount == "function") {
                      ((o = R), (r = R.return));
                      try {
                        ((t = o),
                          ($.props = t.memoizedProps),
                          ($.state = t.memoizedState),
                          $.componentWillUnmount());
                      } catch (H) {
                        Ee(o, r, H);
                      }
                    }
                    break;
                  case 5:
                    ir(R, R.return);
                    break;
                  case 22:
                    if (R.memoizedState !== null) {
                      Uf(N);
                      continue;
                    }
                }
                z !== null ? ((z.return = R), (U = z)) : Uf(N);
              }
              V = V.sibling;
            }
          e: for (V = null, N = e; ;) {
            if (N.tag === 5) {
              if (V === null) {
                V = N;
                try {
                  ((l = N.stateNode),
                    E
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((y = N.stateNode),
                        (x = N.memoizedProps.style),
                        (h = x != null && x.hasOwnProperty("display") ? x.display : null),
                        (y.style.display = vu("display", h))));
                } catch (H) {
                  Ee(e, e.return, H);
                }
              }
            } else if (N.tag === 6) {
              if (V === null)
                try {
                  N.stateNode.nodeValue = E ? "" : N.memoizedProps;
                } catch (H) {
                  Ee(e, e.return, H);
                }
            } else if (
              ((N.tag !== 22 && N.tag !== 23) || N.memoizedState === null || N === e) &&
              N.child !== null
            ) {
              ((N.child.return = N), (N = N.child));
              continue;
            }
            if (N === e) break e;
            for (; N.sibling === null;) {
              if (N.return === null || N.return === e) break e;
              (V === N && (V = null), (N = N.return));
            }
            (V === N && (V = null), (N.sibling.return = N.return), (N = N.sibling));
          }
        }
        break;
      case 19:
        (Et(t, e), Nt(e), o & 4 && Of(e));
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
            if (_f(r)) {
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
            var u = jf(e);
            Ml(e, u, l);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              y = jf(e);
            Dl(e, y, h);
            break;
          default:
            throw Error(s(161));
        }
      } catch (x) {
        Ee(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Bg(e, t, r) {
    ((U = e), zf(e));
  }
  function zf(e, t, r) {
    for (var o = (e.mode & 1) !== 0; U !== null;) {
      var l = U,
        u = l.child;
      if (l.tag === 22 && o) {
        var h = l.memoizedState !== null || ms;
        if (!h) {
          var y = l.alternate,
            x = (y !== null && y.memoizedState !== null) || $e;
          y = ms;
          var E = $e;
          if (((ms = h), ($e = x) && !E))
            for (U = l; U !== null;)
              ((h = U),
                (x = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Wf(l)
                  : x !== null
                    ? ((x.return = h), (U = x))
                    : Wf(l));
          for (; u !== null;) ((U = u), zf(u), (u = u.sibling));
          ((U = l), (ms = y), ($e = E));
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
                $e || gs(5, t);
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
                  var E = t.alternate;
                  if (E !== null) {
                    var V = E.memoizedState;
                    if (V !== null) {
                      var N = V.dehydrated;
                      N !== null && Vr(N);
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
        } catch (R) {
          Ee(t, t.return, R);
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
              gs(4, t);
            } catch (x) {
              Ee(t, r, x);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var l = t.return;
              try {
                o.componentDidMount();
              } catch (x) {
                Ee(t, l, x);
              }
            }
            var u = t.return;
            try {
              Rl(t);
            } catch (x) {
              Ee(t, u, x);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Rl(t);
            } catch (x) {
              Ee(t, h, x);
            }
        }
      } catch (x) {
        Ee(t, t.return, x);
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
  var Ug = Math.ceil,
    ys = te.ReactCurrentDispatcher,
    Vl = te.ReactCurrentOwner,
    gt = te.ReactCurrentBatchConfig,
    le = 0,
    je = null,
    Ve = null,
    Ie = 0,
    ut = 0,
    sr = en(0),
    Ne = 0,
    ei = null,
    Cn = 0,
    vs = 0,
    Ll = 0,
    ti = null,
    tt = null,
    Nl = 0,
    or = 1 / 0,
    $t = null,
    xs = !1,
    _l = null,
    ln = null,
    ws = !1,
    an = null,
    Ss = 0,
    ni = 0,
    jl = null,
    ks = -1,
    Ps = 0;
  function Xe() {
    return (le & 6) !== 0 ? Re() : ks !== -1 ? ks : (ks = Re());
  }
  function un(e) {
    return (e.mode & 1) === 0
      ? 1
      : (le & 2) !== 0 && Ie !== 0
        ? Ie & -Ie
        : Tg.transition !== null
          ? (Ps === 0 && (Ps = _u()), Ps)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $u(e.type))), e);
  }
  function At(e, t, r, o) {
    if (50 < ni) throw ((ni = 0), (jl = null), Error(s(185)));
    (Er(e, r, o),
      ((le & 2) === 0 || e !== je) &&
        (e === je && ((le & 2) === 0 && (vs |= r), Ne === 4 && cn(e, Ie)),
        nt(e, o),
        r === 1 && le === 0 && (t.mode & 1) === 0 && ((or = Re() + 500), Zi && nn())));
  }
  function nt(e, t) {
    var r = e.callbackNode;
    Tm(e, t);
    var o = Li(e, e === je ? Ie : 0);
    if (o === 0) (r !== null && Vu(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && Vu(r), t === 1))
        (e.tag === 0 ? Pg(Hf.bind(null, e)) : Rc(Hf.bind(null, e)),
          xg(function () {
            (le & 6) === 0 && nn();
          }),
          (r = null));
      else {
        switch (ju(o)) {
          case 1:
            r = po;
            break;
          case 4:
            r = Lu;
            break;
          case 16:
            r = Ri;
            break;
          case 536870912:
            r = Nu;
            break;
          default:
            r = Ri;
        }
        r = Jf(r, $f.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function $f(e, t) {
    if (((ks = -1), (Ps = 0), (le & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (lr() && e.callbackNode !== r) return null;
    var o = Li(e, e === je ? Ie : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Ts(e, o);
    else {
      t = o;
      var l = le;
      le |= 2;
      var u = Gf();
      (je !== e || Ie !== t) && (($t = null), (or = Re() + 500), An(e, t));
      do
        try {
          Hg();
          break;
        } catch (y) {
          Kf(e, y);
        }
      while (!0);
      (bo(), (ys.current = u), (le = l), Ve !== null ? (t = 0) : ((je = null), (Ie = 0), (t = Ne)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = mo(e)), l !== 0 && ((o = l), (t = Fl(e, l)))), t === 1))
        throw ((r = ei), An(e, 0), cn(e, o), nt(e, Re()), r);
      if (t === 6) cn(e, o);
      else {
        if (
          ((l = e.current.alternate),
          (o & 30) === 0 &&
            !Wg(l) &&
            ((t = Ts(e, o)),
            t === 2 && ((u = mo(e)), u !== 0 && ((o = u), (t = Fl(e, u)))),
            t === 1))
        )
          throw ((r = ei), An(e, 0), cn(e, o), nt(e, Re()), r);
        switch (((e.finishedWork = l), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Rn(e, tt, $t);
            break;
          case 3:
            if ((cn(e, o), (o & 130023424) === o && ((t = Nl + 500 - Re()), 10 < t))) {
              if (Li(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & o) !== o)) {
                (Xe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Wo(Rn.bind(null, e, tt, $t), t);
              break;
            }
            Rn(e, tt, $t);
            break;
          case 4:
            if ((cn(e, o), (o & 4194240) === o)) break;
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
                            : 1960 * Ug(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Wo(Rn.bind(null, e, tt, $t), o);
              break;
            }
            Rn(e, tt, $t);
            break;
          case 5:
            Rn(e, tt, $t);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (nt(e, Re()), e.callbackNode === r ? $f.bind(null, e) : null);
  }
  function Fl(e, t) {
    var r = ti;
    return (
      e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256),
      (e = Ts(e, t)),
      e !== 2 && ((t = tt), (tt = r), t !== null && Ol(t)),
      e
    );
  }
  function Ol(e) {
    tt === null ? (tt = e) : tt.push.apply(tt, e);
  }
  function Wg(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var l = r[o],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!kt(u(), l)) return !1;
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
      t &= ~Ll, t &= ~vs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
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
    var t = Li(e, 0);
    if ((t & 1) === 0) return (nt(e, Re()), null);
    var r = Ts(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = mo(e);
      o !== 0 && ((t = o), (r = Fl(e, o)));
    }
    if (r === 1) throw ((r = ei), An(e, 0), cn(e, t), nt(e, Re()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Rn(e, tt, $t),
      nt(e, Re()),
      null
    );
  }
  function Il(e, t) {
    var r = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      ((le = r), le === 0 && ((or = Re() + 500), Zi && nn()));
    }
  }
  function En(e) {
    an !== null && an.tag === 0 && (le & 6) === 0 && lr();
    var t = le;
    le |= 1;
    var r = gt.transition,
      o = he;
    try {
      if (((gt.transition = null), (he = 1), e)) return e();
    } finally {
      ((he = o), (gt.transition = r), (le = t), (le & 6) === 0 && nn());
    }
  }
  function zl() {
    ((ut = sr.current), ye(sr));
  }
  function An(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), vg(r)), Ve !== null))
      for (r = Ve.return; r !== null;) {
        var o = r;
        switch ((Yo(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Xi());
            break;
          case 3:
            (nr(), ye(Je), ye(Be), ll());
            break;
          case 5:
            sl(o);
            break;
          case 4:
            nr();
            break;
          case 13:
            ye(ke);
            break;
          case 19:
            ye(ke);
            break;
          case 10:
            el(o.type._context);
            break;
          case 22:
          case 23:
            zl();
        }
        r = r.return;
      }
    if (
      ((je = e),
      (Ve = e = fn(e.current, null)),
      (Ie = ut = t),
      (Ne = 0),
      (ei = null),
      (Ll = vs = Cn = 0),
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
      var r = Ve;
      try {
        if ((bo(), (ls.current = fs), as)) {
          for (var o = Pe.memoizedState; o !== null;) {
            var l = o.queue;
            (l !== null && (l.pending = null), (o = o.next));
          }
          as = !1;
        }
        if (
          ((Tn = 0),
          (_e = Le = Pe = null),
          (Yr = !1),
          (Xr = 0),
          (Vl.current = null),
          r === null || r.return === null)
        ) {
          ((Ne = 1), (ei = t), (Ve = null));
          break;
        }
        e: {
          var u = e,
            h = r.return,
            y = r,
            x = t;
          if (
            ((t = Ie),
            (y.flags |= 32768),
            x !== null && typeof x == "object" && typeof x.then == "function")
          ) {
            var E = x,
              V = y,
              N = V.tag;
            if ((V.mode & 1) === 0 && (N === 0 || N === 11 || N === 15)) {
              var R = V.alternate;
              R
                ? ((V.updateQueue = R.updateQueue),
                  (V.memoizedState = R.memoizedState),
                  (V.lanes = R.lanes))
                : ((V.updateQueue = null), (V.memoizedState = null));
            }
            var z = gf(h);
            if (z !== null) {
              ((z.flags &= -257), yf(z, h, y, u, t), z.mode & 1 && mf(u, E, t), (t = z), (x = E));
              var $ = t.updateQueue;
              if ($ === null) {
                var H = new Set();
                (H.add(x), (t.updateQueue = H));
              } else $.add(x);
              break e;
            } else {
              if ((t & 1) === 0) {
                (mf(u, E, t), Bl());
                break e;
              }
              x = Error(s(426));
            }
          } else if (we && y.mode & 1) {
            var De = gf(h);
            if (De !== null) {
              ((De.flags & 65536) === 0 && (De.flags |= 256), yf(De, h, y, u, t), Zo(rr(x, y)));
              break e;
            }
          }
          ((u = x = rr(x, y)),
            Ne !== 4 && (Ne = 2),
            ti === null ? (ti = [u]) : ti.push(u),
            (u = h));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var T = hf(u, x, t);
                zc(u, T);
                break e;
              case 1:
                y = x;
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
                  var F = pf(u, y, t);
                  zc(u, F);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Yf(r);
      } catch (G) {
        ((t = G), Ve === r && r !== null && (Ve = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Gf() {
    var e = ys.current;
    return ((ys.current = fs), e === null ? fs : e);
  }
  function Bl() {
    ((Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
      je === null || ((Cn & 268435455) === 0 && (vs & 268435455) === 0) || cn(je, Ie));
  }
  function Ts(e, t) {
    var r = le;
    le |= 2;
    var o = Gf();
    (je !== e || Ie !== t) && (($t = null), An(e, t));
    do
      try {
        $g();
        break;
      } catch (l) {
        Kf(e, l);
      }
    while (!0);
    if ((bo(), (le = r), (ys.current = o), Ve !== null)) throw Error(s(261));
    return ((je = null), (Ie = 0), Ne);
  }
  function $g() {
    for (; Ve !== null;) Qf(Ve);
  }
  function Hg() {
    for (; Ve !== null && !mm();) Qf(Ve);
  }
  function Qf(e) {
    var t = Zf(e.alternate, e, ut);
    ((e.memoizedProps = e.pendingProps), t === null ? Yf(e) : (Ve = t), (Vl.current = null));
  }
  function Yf(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Fg(r, t, ut)), r !== null)) {
          Ve = r;
          return;
        }
      } else {
        if (((r = Og(r, t)), r !== null)) {
          ((r.flags &= 32767), (Ve = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Ne = 6), (Ve = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ve = t;
        return;
      }
      Ve = t = e;
    } while (t !== null);
    Ne === 0 && (Ne = 5);
  }
  function Rn(e, t, r) {
    var o = he,
      l = gt.transition;
    try {
      ((gt.transition = null), (he = 1), Kg(e, t, r, o));
    } finally {
      ((gt.transition = l), (he = o));
    }
    return null;
  }
  function Kg(e, t, r, o) {
    do lr();
    while (an !== null);
    if ((le & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var l = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = r.lanes | r.childLanes;
    if (
      (Cm(e, u),
      e === je && ((Ve = je = null), (Ie = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        ws ||
        ((ws = !0),
        Jf(Ri, function () {
          return (lr(), null);
        })),
      (u = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = gt.transition), (gt.transition = null));
      var h = he;
      he = 1;
      var y = le;
      ((le |= 4),
        (Vl.current = null),
        zg(e, r),
        If(r, e),
        fg(Bo),
        (ji = !!zo),
        (Bo = zo = null),
        (e.current = r),
        Bg(r),
        gm(),
        (le = y),
        (he = h),
        (gt.transition = u));
    } else e.current = r;
    if (
      (ws && ((ws = !1), (an = e), (Ss = l)),
      (u = e.pendingLanes),
      u === 0 && (ln = null),
      xm(r.stateNode),
      nt(e, Re()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        ((l = t[r]), o(l.value, { componentStack: l.stack, digest: l.digest }));
    if (xs) throw ((xs = !1), (e = _l), (_l = null), e);
    return (
      (Ss & 1) !== 0 && e.tag !== 0 && lr(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === jl ? ni++ : ((ni = 0), (jl = e))) : (ni = 0),
      nn(),
      null
    );
  }
  function lr() {
    if (an !== null) {
      var e = ju(Ss),
        t = gt.transition,
        r = he;
      try {
        if (((gt.transition = null), (he = 16 > e ? 16 : e), an === null)) var o = !1;
        else {
          if (((e = an), (an = null), (Ss = 0), (le & 6) !== 0)) throw Error(s(331));
          var l = le;
          for (le |= 4, U = e.current; U !== null;) {
            var u = U,
              h = u.child;
            if ((U.flags & 16) !== 0) {
              var y = u.deletions;
              if (y !== null) {
                for (var x = 0; x < y.length; x++) {
                  var E = y[x];
                  for (U = E; U !== null;) {
                    var V = U;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        br(8, V, u);
                    }
                    var N = V.child;
                    if (N !== null) ((N.return = V), (U = N));
                    else
                      for (; U !== null;) {
                        V = U;
                        var R = V.sibling,
                          z = V.return;
                        if ((Nf(V), V === E)) {
                          U = null;
                          break;
                        }
                        if (R !== null) {
                          ((R.return = z), (U = R));
                          break;
                        }
                        U = z;
                      }
                  }
                }
                var $ = u.alternate;
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
            var C = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && C !== null) ((C.return = h), (U = C));
            else
              e: for (h = S; U !== null;) {
                if (((y = U), (y.flags & 2048) !== 0))
                  try {
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gs(9, y);
                    }
                  } catch (G) {
                    Ee(y, y.return, G);
                  }
                if (y === h) {
                  U = null;
                  break e;
                }
                var F = y.sibling;
                if (F !== null) {
                  ((F.return = y.return), (U = F));
                  break e;
                }
                U = y.return;
              }
          }
          if (((le = l), nn(), Dt && typeof Dt.onPostCommitFiberRoot == "function"))
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
  function Xf(e, t, r) {
    ((t = rr(r, t)),
      (t = hf(e, t, 1)),
      (e = sn(e, t, 1)),
      (t = Xe()),
      e !== null && (Er(e, 1, t), nt(e, t)));
  }
  function Ee(e, t, r) {
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
            (typeof o.componentDidCatch == "function" && (ln === null || !ln.has(o)))
          ) {
            ((e = rr(r, e)),
              (e = pf(t, e, 1)),
              (t = sn(t, e, 1)),
              (e = Xe()),
              t !== null && (Er(t, 1, e), nt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gg(e, t, r) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = Xe()),
      (e.pingedLanes |= e.suspendedLanes & r),
      je === e &&
        (Ie & r) === r &&
        (Ne === 4 || (Ne === 3 && (Ie & 130023424) === Ie && 500 > Re() - Nl)
          ? An(e, 0)
          : (Ll |= r)),
      nt(e, t));
  }
  function qf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Vi), (Vi <<= 1), (Vi & 130023424) === 0 && (Vi = 4194304)));
    var r = Xe();
    ((e = Bt(e, t)), e !== null && (Er(e, t, r), nt(e, r)));
  }
  function Qg(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), qf(e, r));
  }
  function Yg(e, t) {
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
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((et = !1), jg(e, t, r));
        et = (e.flags & 131072) !== 0;
      }
    else ((et = !1), we && (t.flags & 1048576) !== 0 && Dc(t, bi, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (ps(e, t), (e = t.pendingProps));
        var l = Xn(t, Be.current);
        (tr(t, r), (l = cl(null, t, o, e, l, r)));
        var u = fl();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              be(o) ? ((u = !0), qi(t)) : (u = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              rl(t),
              (l.updater = ds),
              (t.stateNode = l),
              (l._reactInternals = t),
              yl(t, o, e, r),
              (t = Sl(null, t, o, !0, u, r)))
            : ((t.tag = 0), we && u && Qo(t), Ye(null, t, l, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (ps(e, t),
            (e = t.pendingProps),
            (l = o._init),
            (o = l(o._payload)),
            (t.type = o),
            (l = t.tag = qg(o)),
            (e = Tt(o, e)),
            l)
          ) {
            case 0:
              t = wl(null, t, o, e, r);
              break e;
            case 1:
              t = Pf(null, t, o, e, r);
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
          wl(e, t, o, l, r)
        );
      case 1:
        return (
          (o = t.type),
          (l = t.pendingProps),
          (l = t.elementType === o ? l : Tt(o, l)),
          Pf(e, t, o, l, r)
        );
      case 3:
        e: {
          if ((Tf(t), e === null)) throw Error(s(387));
          ((o = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            Ic(e, t),
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
              ((l = rr(Error(s(423)), t)), (t = Cf(e, t, o, r, l)));
              break e;
            } else if (o !== l) {
              ((l = rr(Error(s(424)), t)), (t = Cf(e, t, o, r, l)));
              break e;
            } else
              for (
                at = bt(t.stateNode.containerInfo.firstChild),
                  lt = t,
                  we = !0,
                  Pt = null,
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
          e === null && qo(t),
          (o = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = l.children),
          Uo(o, l) ? (h = null) : u !== null && Uo(o, u) && (t.flags |= 32),
          kf(e, t),
          Ye(e, t, h, r),
          t.child
        );
      case 6:
        return (e === null && qo(t), null);
      case 13:
        return Ef(e, t, r);
      case 4:
        return (
          il(t, t.stateNode.containerInfo),
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
            me(ns, o._currentValue),
            (o._currentValue = h),
            u !== null)
          )
            if (kt(u.value, h)) {
              if (u.children === l.children && !Je.current) {
                t = Wt(e, t, r);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null;) {
                var y = u.dependencies;
                if (y !== null) {
                  h = u.child;
                  for (var x = y.firstContext; x !== null;) {
                    if (x.context === o) {
                      if (u.tag === 1) {
                        ((x = Ut(-1, r & -r)), (x.tag = 2));
                        var E = u.updateQueue;
                        if (E !== null) {
                          E = E.shared;
                          var V = E.pending;
                          (V === null ? (x.next = x) : ((x.next = V.next), (V.next = x)),
                            (E.pending = x));
                        }
                      }
                      ((u.lanes |= r),
                        (x = u.alternate),
                        x !== null && (x.lanes |= r),
                        tl(u.return, r, t),
                        (y.lanes |= r));
                      break;
                    }
                    x = x.next;
                  }
                } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((h = u.return), h === null)) throw Error(s(341));
                  ((h.lanes |= r),
                    (y = h.alternate),
                    y !== null && (y.lanes |= r),
                    tl(h, r, t),
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
          ps(e, t),
          (t.tag = 1),
          be(o) ? ((e = !0), qi(t)) : (e = !1),
          tr(t, r),
          ff(t, o, l),
          yl(t, o, l, r),
          Sl(null, t, o, !0, e, r)
        );
      case 19:
        return Rf(e, t, r);
      case 22:
        return Sf(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function Jf(e, t) {
    return Mu(e, t);
  }
  function Xg(e, t, r, o) {
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
    return new Xg(e, t, r, o);
  }
  function Ul(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function qg(e) {
    if (typeof e == "function") return Ul(e) ? 1 : 0;
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
  function Cs(e, t, r, o, l, u) {
    var h = 2;
    if (((o = e), typeof e == "function")) Ul(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case ae:
          return Dn(r.children, l, u, t);
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
          return Es(r, l, u, t);
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
    return ((t = yt(h, r, t, l)), (t.elementType = e), (t.type = o), (t.lanes = u), t);
  }
  function Dn(e, t, r, o) {
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
  function Wl(e, t, r) {
    return ((e = yt(6, e, null, t)), (e.lanes = r), e);
  }
  function $l(e, t, r) {
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
  function Zg(e, t, r, o, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = go(0)),
      (this.expirationTimes = go(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = go(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Hl(e, t, r, o, l, u, h, y, x) {
    return (
      (e = new Zg(e, t, r, y, x)),
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
      rl(u),
      e
    );
  }
  function Jg(e, t, r) {
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
      if (be(r)) return Ec(e, r, t);
    }
    return t;
  }
  function ed(e, t, r, o, l, u, h, y, x) {
    return (
      (e = Hl(r, o, !0, e, l, u, h, y, x)),
      (e.context = bf(null)),
      (r = e.current),
      (o = Xe()),
      (l = un(r)),
      (u = Ut(o, l)),
      (u.callback = t ?? null),
      sn(r, u, l),
      (e.current.lanes = l),
      Er(e, l, o),
      nt(e, o),
      e
    );
  }
  function As(e, t, r, o) {
    var l = t.current,
      u = Xe(),
      h = un(l);
    return (
      (r = bf(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Ut(u, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = sn(l, t, h)),
      e !== null && (At(e, l, h, u), is(e, l, h)),
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
  function td(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Kl(e, t) {
    (td(e, t), (e = e.alternate) && td(e, t));
  }
  function bg() {
    return null;
  }
  var nd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Gl(e) {
    this._internalRoot = e;
  }
  ((Ds.prototype.render = Gl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      As(e, t, null, null);
    }),
    (Ds.prototype.unmount = Gl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (En(function () {
            As(null, e, null, null);
          }),
            (t[Ft] = null));
        }
      }));
  function Ds(e) {
    this._internalRoot = e;
  }
  Ds.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Iu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < qt.length && t !== 0 && t < qt[r].priority; r++);
      (qt.splice(r, 0, e), r === 0 && Uu(e));
    }
  };
  function Ql(e) {
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
  function rd() {}
  function ey(e, t, r, o, l) {
    if (l) {
      if (typeof o == "function") {
        var u = o;
        o = function () {
          var E = Rs(h);
          u.call(E);
        };
      }
      var h = ed(t, o, e, 0, null, !1, !1, "", rd);
      return (
        (e._reactRootContainer = h),
        (e[Ft] = h.current),
        Br(e.nodeType === 8 ? e.parentNode : e),
        En(),
        h
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof o == "function") {
      var y = o;
      o = function () {
        var E = Rs(x);
        y.call(E);
      };
    }
    var x = Hl(e, 0, !1, null, null, !1, !1, "", rd);
    return (
      (e._reactRootContainer = x),
      (e[Ft] = x.current),
      Br(e.nodeType === 8 ? e.parentNode : e),
      En(function () {
        As(t, x, r, o);
      }),
      x
    );
  }
  function Vs(e, t, r, o, l) {
    var u = r._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var y = l;
        l = function () {
          var x = Rs(h);
          y.call(x);
        };
      }
      As(t, h, e, l);
    } else h = ey(r, t, e, l, o);
    return Rs(h);
  }
  ((Fu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Cr(t.pendingLanes);
          r !== 0 && (yo(t, r | 1), nt(t, Re()), (le & 6) === 0 && ((or = Re() + 500), nn()));
        }
        break;
      case 13:
        (En(function () {
          var o = Bt(e, 1);
          if (o !== null) {
            var l = Xe();
            At(o, e, 1, l);
          }
        }),
          Kl(e, 1));
    }
  }),
    (vo = function (e) {
      if (e.tag === 13) {
        var t = Bt(e, 134217728);
        if (t !== null) {
          var r = Xe();
          At(t, e, 134217728, r);
        }
        Kl(e, 134217728);
      }
    }),
    (Ou = function (e) {
      if (e.tag === 13) {
        var t = un(e),
          r = Bt(e, t);
        if (r !== null) {
          var o = Xe();
          At(r, e, t, o);
        }
        Kl(e, t);
      }
    }),
    (Iu = function () {
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
    (uo = function (e, t, r) {
      switch (t) {
        case "input":
          if ((to(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode;) r = r.parentNode;
            for (
              r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var l = Yi(o);
                if (!l) throw Error(s(90));
                (uu(o), to(o, l));
              }
            }
          }
          break;
        case "textarea":
          pu(e, r);
          break;
        case "select":
          ((t = r.value), t != null && On(e, !!r.multiple, t, !1));
      }
    }),
    (Pu = Il),
    (Tu = En));
  var ty = { usingClientEntryPoint: !1, Events: [$r, Qn, Yi, Su, ku, Il] },
    ri = {
      findFiberByHostInstance: vn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    ny = {
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
      findFiberByHostInstance: ri.findFiberByHostInstance || bg,
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
        ((Di = Ls.inject(ny)), (Dt = Ls));
      } catch {}
  }
  return (
    (rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ty),
    (rt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ql(t)) throw Error(s(200));
      return Jg(e, t, null, r);
    }),
    (rt.createRoot = function (e, t) {
      if (!Ql(e)) throw Error(s(299));
      var r = !1,
        o = "",
        l = nd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Hl(e, 1, !1, null, null, r, !1, o, l)),
        (e[Ft] = t.current),
        Br(e.nodeType === 8 ? e.parentNode : e),
        new Gl(t)
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
      return En(e);
    }),
    (rt.hydrate = function (e, t, r) {
      if (!Ms(t)) throw Error(s(200));
      return Vs(null, e, t, !0, r);
    }),
    (rt.hydrateRoot = function (e, t, r) {
      if (!Ql(e)) throw Error(s(405));
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
      return new Ds(t);
    }),
    (rt.render = function (e, t, r) {
      if (!Ms(t)) throw Error(s(200));
      return Vs(null, e, t, !1, r);
    }),
    (rt.unmountComponentAtNode = function (e) {
      if (!Ms(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (En(function () {
            Vs(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ft] = null));
            });
          }),
          !0)
        : !1;
    }),
    (rt.unstable_batchedUpdates = Il),
    (rt.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!Ms(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Vs(e, t, r, !1, o);
    }),
    (rt.version = "18.3.1-next-f1338f8080-20240426"),
    rt
  );
}
var fd;
function cy() {
  if (fd) return ql.exports;
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
  return (n(), (ql.exports = uy()), ql.exports);
}
var dd;
function fy() {
  if (dd) return Ns;
  dd = 1;
  var n = cy();
  return ((Ns.createRoot = n.createRoot), (Ns.hydrateRoot = n.hydrateRoot), Ns);
}
var dy = fy();
function Ah(n) {
  return `#${n}`;
}
function Rh(n) {
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
function Ma(n, i = "smooth") {
  if (typeof document > "u") return !1;
  const s = document.getElementById(n);
  return s ? (s.scrollIntoView({ behavior: i, block: "start" }), !0) : !1;
}
function hy(n, i = "smooth") {
  if (typeof window > "u") return;
  const s = Ah(n);
  if (Ma(n, i)) {
    window.history.replaceState(null, "", s);
    return;
  }
  window.location.hash = s;
}
function py(n) {
  typeof window > "u" || (window.location.hash = Rh(n));
}
function my() {
  const n = Da();
  return (n == null ? void 0 : n.kind) === "route" ? n.path : "";
}
function gy(n) {
  return n.kind === "route" ? Rh(n.path) : Ah(n.id);
}
function yy(n, i) {
  if ((n.preventDefault(), i.kind === "route")) {
    py(i.path);
    return;
  }
  hy(i.id);
}
function Dh() {
  if (typeof window > "u") return;
  const n = Da();
  (n == null ? void 0 : n.kind) === "section" && requestAnimationFrame(() => Ma(n.id, "auto"));
}
function vy(n, i) {
  if (typeof window > "u") return () => {};
  const s = () => {
    const a = Da();
    if (!a) {
      n("");
      return;
    }
    if (a.kind === "route") {
      n(a.path);
      return;
    }
    (Ma(a.id, "smooth"), n(""));
  };
  return (
    s(),
    window.addEventListener("hashchange", s),
    () => window.removeEventListener("hashchange", s)
  );
}
function xy(n = "") {
  const [i, s] = Z.useState(() => (typeof window < "u" ? my() : n));
  return (Z.useEffect(() => vy(s), []), i || n);
}
function wy({ routes: n, defaultRoute: i = "", className: s }) {
  const a = xy(i);
  Z.useEffect(() => {
    Dh();
  }, []);
  const c = a in n ? a : i,
    d = n[c] ?? n[i];
  return L.jsx("div", { className: s, children: d });
}
function oi({ target: n, children: i, className: s, ...a }) {
  return L.jsx("a", { href: gy(n), className: s, onClick: (c) => yy(c, n), ...a, children: i });
}
const Sy = {
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
function ky({ title: n, eyebrow: i = "Explore", description: s, theme: a = "dark", children: c }) {
  const d = Sy[a];
  return L.jsx("div", {
    className: d.wrap,
    children: L.jsxs("div", {
      className: "mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24",
      children: [
        L.jsx(oi, { target: "", className: d.link, children: "← Back to home" }),
        L.jsx("p", { className: `${d.eyebrow} mt-10`, children: i }),
        L.jsx("h1", { className: d.title, children: n }),
        s ? L.jsx("p", { className: d.body, children: s }) : null,
        c,
      ],
    }),
  });
}
function Py(n, i, s = "dark") {
  const a = { "": n };
  for (const c of i)
    a[c.path] = L.jsx(
      ky,
      { title: c.title, eyebrow: c.eyebrow, description: c.description, theme: s },
      c.path,
    );
  return a;
}
const Ty =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_161801_19c1f902-b569-4d42-87b0-4de571a14399.mp4",
  Cy = ["Retool", "remote", "Stripe", "Linear", "Vercel", "Notion", "Figma", "Airtable"],
  Ey = [
    "https://i.pravatar.cc/80?img=12",
    "https://i.pravatar.cc/80?img=32",
    "https://i.pravatar.cc/80?img=45",
    "https://i.pravatar.cc/80?img=68",
  ],
  Ay = "Renewable power for every community";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ry = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Mh = (...n) =>
    n
      .filter((i, s, a) => !!i && i.trim() !== "" && a.indexOf(i) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Dy = {
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
 */ const My = Z.forwardRef(
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
    Z.createElement(
      "svg",
      {
        ref: m,
        ...Dy,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: a ? (Number(s) * 24) / Number(i) : s,
        className: Mh("lucide", c),
        ...p,
      },
      [...f.map(([g, v]) => Z.createElement(g, v)), ...(Array.isArray(d) ? d : [d])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gr = (n, i) => {
  const s = Z.forwardRef(({ className: a, ...c }, d) =>
    Z.createElement(My, { ref: d, iconNode: i, className: Mh(`lucide-${Ry(n)}`, a), ...c }),
  );
  return ((s.displayName = `${n}`), s);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vy = gr("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ly = gr("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ny = gr("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _y = gr("Play", [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jy = gr("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fy = gr("Youtube", [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ]),
  Vh = Z.createContext({});
function Oy(n) {
  const i = Z.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const Va = Z.createContext(null),
  Lh = Z.createContext({ transformPagePoint: (n) => n, isStatic: !1, reducedMotion: "never" });
function Iy(n = !0) {
  const i = Z.useContext(Va);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: a, register: c } = i,
    d = Z.useId();
  Z.useEffect(() => {
    n && c(d);
  }, [n]);
  const f = Z.useCallback(() => n && a && a(d), [d, a, n]);
  return !s && a ? [!1, f] : [!0];
}
const La = typeof window < "u",
  zy = La ? Z.useLayoutEffect : Z.useEffect,
  ct = (n) => n;
let Nh = ct;
function Na(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const hr = (n, i, s) => {
    const a = i - n;
    return a === 0 ? 1 : (s - n) / a;
  },
  Ht = (n) => n * 1e3,
  Kt = (n) => n / 1e3,
  By = { useManualTiming: !1 };
function Uy(n) {
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
    schedule: (g, v = !1, w = !1) => {
      const A = w && a ? i : s;
      return (v && d.add(g), A.has(g) || A.add(g), g);
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
const _s = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  Wy = 40;
function _h(n, i) {
  let s = !1,
    a = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = _s.reduce((I, W) => ((I[W] = Uy(d)), I), {}),
    { read: p, resolveKeyframes: m, update: g, preRender: v, render: w, postRender: k } = f,
    A = () => {
      const I = performance.now();
      ((s = !1),
        (c.delta = a ? 1e3 / 60 : Math.max(Math.min(I - c.timestamp, Wy), 1)),
        (c.timestamp = I),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        g.process(c),
        v.process(c),
        w.process(c),
        k.process(c),
        (c.isProcessing = !1),
        s && i && ((a = !1), n(A)));
    },
    _ = () => {
      ((s = !0), (a = !0), c.isProcessing || n(A));
    };
  return {
    schedule: _s.reduce((I, W) => {
      const K = f[W];
      return ((I[W] = (te, Q = !1, ne = !1) => (s || _(), K.schedule(te, Q, ne))), I);
    }, {}),
    cancel: (I) => {
      for (let W = 0; W < _s.length; W++) f[_s[W]].cancel(I);
    },
    state: c,
    steps: f,
  };
}
const {
    schedule: ve,
    cancel: pn,
    state: ze,
    steps: bl,
  } = _h(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ct, !0),
  jh = Z.createContext({ strict: !1 }),
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
  pr = {};
for (const n in hd) pr[n] = { isEnabled: (i) => hd[n].some((s) => !!i[s]) };
function $y(n) {
  for (const i in n) pr[i] = { ...pr[i], ...n[i] };
}
const Hy = new Set([
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
    Hy.has(n)
  );
}
let Fh = (n) => !Ws(n);
function Ky(n) {
  n && (Fh = (i) => (i.startsWith("on") ? !Ws(i) : n(i)));
}
try {
  Ky(require("@emotion/is-prop-valid").default);
} catch {}
function Gy(n, i, s) {
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
function Qy(n) {
  if (typeof Proxy > "u") return n;
  const i = new Map(),
    s = (...a) => n(...a);
  return new Proxy(s, {
    get: (a, c) => (c === "create" ? n : (i.has(c) || i.set(c, n(c)), i.get(c))),
  });
}
const Xs = Z.createContext({});
function pi(n) {
  return typeof n == "string" || Array.isArray(n);
}
function qs(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
const _a = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  ja = ["initial", ..._a];
function Zs(n) {
  return qs(n.animate) || ja.some((i) => pi(n[i]));
}
function Oh(n) {
  return !!(Zs(n) || n.variants);
}
function Yy(n, i) {
  if (Zs(n)) {
    const { initial: s, animate: a } = n;
    return { initial: s === !1 || pi(s) ? s : void 0, animate: pi(a) ? a : void 0 };
  }
  return n.inherit !== !1 ? i : {};
}
function Xy(n) {
  const { initial: i, animate: s } = Yy(n, Z.useContext(Xs));
  return Z.useMemo(() => ({ initial: i, animate: s }), [pd(i), pd(s)]);
}
function pd(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const qy = Symbol.for("motionComponentSymbol");
function ar(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function Zy(n, i, s) {
  return Z.useCallback(
    (a) => {
      (a && n.onMount && n.onMount(a),
        i && (a ? i.mount(a) : i.unmount()),
        s && (typeof s == "function" ? s(a) : ar(s) && (s.current = a)));
    },
    [i],
  );
}
const Fa = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Jy = "framerAppearId",
  Ih = "data-" + Fa(Jy),
  { schedule: Oa } = _h(queueMicrotask, !1),
  zh = Z.createContext({});
function by(n, i, s, a, c) {
  var d, f;
  const { visualElement: p } = Z.useContext(Xs),
    m = Z.useContext(jh),
    g = Z.useContext(Va),
    v = Z.useContext(Lh).reducedMotion,
    w = Z.useRef(null);
  ((a = a || m.renderer),
    !w.current &&
      a &&
      (w.current = a(n, {
        visualState: i,
        parent: p,
        props: s,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: v,
      })));
  const k = w.current,
    A = Z.useContext(zh);
  k && !k.projection && c && (k.type === "html" || k.type === "svg") && ev(w.current, s, c, A);
  const _ = Z.useRef(!1);
  Z.useInsertionEffect(() => {
    k && _.current && k.update(s, g);
  });
  const D = s[Ih],
    j = Z.useRef(
      !!D &&
        !(!((d = window.MotionHandoffIsComplete) === null || d === void 0) && d.call(window, D)) &&
        ((f = window.MotionHasOptimisedAnimation) === null || f === void 0
          ? void 0
          : f.call(window, D)),
    );
  return (
    zy(() => {
      k &&
        ((_.current = !0),
        (window.MotionIsMounted = !0),
        k.updateFeatures(),
        Oa.render(k.render),
        j.current && k.animationState && k.animationState.animateChanges());
    }),
    Z.useEffect(() => {
      k &&
        (!j.current && k.animationState && k.animationState.animateChanges(),
        j.current &&
          (queueMicrotask(() => {
            var I;
            (I = window.MotionHandoffMarkAsComplete) === null || I === void 0 || I.call(window, D);
          }),
          (j.current = !1)));
    }),
    k
  );
}
function ev(n, i, s, a) {
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
function tv({
  preloadedFeatures: n,
  createVisualElement: i,
  useRender: s,
  useVisualState: a,
  Component: c,
}) {
  var d, f;
  n && $y(n);
  function p(g, v) {
    let w;
    const k = { ...Z.useContext(Lh), ...g, layoutId: nv(g) },
      { isStatic: A } = k,
      _ = Xy(g),
      D = a(g, A);
    if (!A && La) {
      rv();
      const j = iv(k);
      ((w = j.MeasureLayout), (_.visualElement = by(c, D, k, i, j.ProjectionNode)));
    }
    return L.jsxs(Xs.Provider, {
      value: _,
      children: [
        w && _.visualElement ? L.jsx(w, { visualElement: _.visualElement, ...k }) : null,
        s(c, g, Zy(D, _.visualElement, v), D, A, _.visualElement),
      ],
    });
  }
  p.displayName = `motion.${typeof c == "string" ? c : `create(${(f = (d = c.displayName) !== null && d !== void 0 ? d : c.name) !== null && f !== void 0 ? f : ""})`}`;
  const m = Z.forwardRef(p);
  return ((m[qy] = c), m);
}
function nv({ layoutId: n }) {
  const i = Z.useContext(Vh).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function rv(n, i) {
  Z.useContext(jh).strict;
}
function iv(n) {
  const { drag: i, layout: s } = pr;
  if (!i && !s) return {};
  const a = { ...i, ...s };
  return {
    MeasureLayout:
      (i != null && i.isEnabled(n)) || (s != null && s.isEnabled(n)) ? a.MeasureLayout : void 0,
    ProjectionNode: a.ProjectionNode,
  };
}
const sv = [
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
function Ia(n) {
  return typeof n != "string" || n.includes("-") ? !1 : !!(sv.indexOf(n) > -1 || /[A-Z]/u.test(n));
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
const da = (n) => Array.isArray(n),
  ov = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
  lv = (n) => (da(n) ? n[n.length - 1] || 0 : n),
  Ke = (n) => !!(n && n.getVelocity);
function zs(n) {
  const i = Ke(n) ? n.get() : n;
  return ov(i) ? i.toValue() : i;
}
function av({ scrapeMotionValuesFromProps: n, createRenderState: i, onUpdate: s }, a, c, d) {
  const f = { latestValues: uv(a, c, d, n), renderState: i() };
  return (
    s && ((f.onMount = (p) => s({ props: a, current: p, ...f })), (f.onUpdate = (p) => s(p))),
    f
  );
}
const Uh = (n) => (i, s) => {
  const a = Z.useContext(Xs),
    c = Z.useContext(Va),
    d = () => av(n, i, a, c);
  return s ? d() : Oy(d);
};
function uv(n, i, s, a) {
  const c = {},
    d = a(n, {});
  for (const k in d) c[k] = zs(d[k]);
  let { initial: f, animate: p } = n;
  const m = Zs(n),
    g = Oh(n);
  i &&
    g &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let v = s ? s.initial === !1 : !1;
  v = v || f === !1;
  const w = v ? p : f;
  if (w && typeof w != "boolean" && !qs(w)) {
    const k = Array.isArray(w) ? w : [w];
    for (let A = 0; A < k.length; A++) {
      const _ = za(n, k[A]);
      if (_) {
        const { transitionEnd: D, transition: j, ...I } = _;
        for (const W in I) {
          let K = I[W];
          if (Array.isArray(K)) {
            const te = v ? K.length - 1 : 0;
            K = K[te];
          }
          K !== null && (c[W] = K);
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
  cv = Wh("var(--"),
  Ba = (n) => (cv(n) ? fv.test(n.split("/*")[0].trim()) : !1),
  fv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Hh = (n, i) => (i && typeof n == "number" ? i.transform(n) : n),
  Gt = (n, i, s) => (s > i ? i : s < n ? n : s),
  vr = { test: (n) => typeof n == "number", parse: parseFloat, transform: (n) => n },
  mi = { ...vr, transform: (n) => Gt(0, 1, n) },
  js = { ...vr, default: 1 },
  xi = (n) => ({
    test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  hn = xi("deg"),
  _t = xi("%"),
  b = xi("px"),
  dv = xi("vh"),
  hv = xi("vw"),
  gd = { ..._t, parse: (n) => _t.parse(n) / 100, transform: (n) => _t.transform(n * 100) },
  pv = {
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
  mv = {
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
  Ua = { ...pv, ...mv, zIndex: yd, size: b, fillOpacity: mi, strokeOpacity: mi, numOctaves: yd },
  gv = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  yv = yr.length;
function vv(n, i, s) {
  let a = "",
    c = !0;
  for (let d = 0; d < yv; d++) {
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
        const v = gv[f] || f;
        a += `${v}(${g}) `;
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
      const v = Hh(g, Ua[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = v)) : (a[m] = v);
    }
  }
  if (
    (i.transform ||
      (f || s ? (a.transform = vv(i, n.transform, s)) : a.transform && (a.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: g = "50%", originZ: v = 0 } = d;
    a.transformOrigin = `${m} ${g} ${v}`;
  }
}
const xv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  wv = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Sv(n, i, s = 1, a = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? xv : wv;
  n[d.offset] = b.transform(-a);
  const f = b.transform(i),
    p = b.transform(s);
  n[d.array] = `${f} ${p}`;
}
function vd(n, i, s) {
  return typeof n == "string" ? n : b.transform(i + s * n);
}
function kv(n, i, s) {
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
  v,
  w,
) {
  if ((Wa(n, g, w), v)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: k, style: A, dimensions: _ } = n;
  (k.transform && (_ && (A.transform = k.transform), delete k.transform),
    _ &&
      (c !== void 0 || d !== void 0 || A.transform) &&
      (A.transformOrigin = kv(_, c !== void 0 ? c : 0.5, d !== void 0 ? d : 0.5)),
    i !== void 0 && (k.x = i),
    s !== void 0 && (k.y = s),
    a !== void 0 && (k.scale = a),
    f !== void 0 && Sv(k, f, p, m, !1));
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
function Pv(n) {
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
function Tv(n, i) {
  try {
    i.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect();
  } catch {
    i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const xd = ["x", "y", "width", "height", "cx", "cy", "r"],
  Cv = {
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
            (Tv(s, a),
              ve.render(() => {
                ($a(a, c, Ka(s.tagName), n.transformTemplate), Yh(s, a));
              }));
          });
      },
    }),
  },
  Ev = { useVisualState: Uh({ scrapeMotionValuesFromProps: Ga, createRenderState: Ha }) };
function Zh(n, i, s) {
  for (const a in i) !Ke(i[a]) && !Xh(a, s) && (n[a] = i[a]);
}
function Av({ transformTemplate: n }, i) {
  return Z.useMemo(() => {
    const s = Ha();
    return (Wa(s, i, n), Object.assign({}, s.vars, s.style));
  }, [i]);
}
function Rv(n, i) {
  const s = n.style || {},
    a = {};
  return (Zh(a, s, n), Object.assign(a, Av(n, i)), a);
}
function Dv(n, i) {
  const s = {},
    a = Rv(n, i);
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
function Mv(n, i, s, a) {
  const c = Z.useMemo(() => {
    const d = Kh();
    return ($a(d, i, Ka(a), n.transformTemplate), { ...d.attrs, style: { ...d.style } });
  }, [i]);
  if (n.style) {
    const d = {};
    (Zh(d, n.style, n), (c.style = { ...d, ...c.style }));
  }
  return c;
}
function Vv(n = !1) {
  return (s, a, c, { latestValues: d }, f) => {
    const m = (Ia(s) ? Mv : Dv)(a, d, f, s),
      g = Gy(a, typeof s == "string", n),
      v = s !== Z.Fragment ? { ...g, ...m, ref: c } : {},
      { children: w } = a,
      k = Z.useMemo(() => (Ke(w) ? w.get() : w), [w]);
    return Z.createElement(s, { ...v, children: k });
  };
}
function Lv(n, i) {
  return function (a, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Ia(a) ? Cv : Ev),
      preloadedFeatures: n,
      useRender: Vv(c),
      createVisualElement: i,
      Component: a,
    };
    return tv(f);
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
const Nv = Na(() => window.ScrollTimeline !== void 0);
class _v {
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
      if (Nv() && c.attachTimeline) return c.attachTimeline(i);
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
class jv extends _v {
  then(i, s) {
    return Promise.all(this.animations).then(i).catch(s);
  }
}
function Qa(n, i) {
  return n ? n[i] || n.default || n : void 0;
}
const ha = 2e4;
function bh(n) {
  let i = 0;
  const s = 50;
  let a = n.next(i);
  for (; !a.done && i < ha;) ((i += s), (a = n.next(i)));
  return i >= ha ? 1 / 0 : i;
}
function Ya(n) {
  return typeof n == "function";
}
function wd(n, i) {
  ((n.timeline = i), (n.onfinish = null));
}
const Xa = (n) => Array.isArray(n) && typeof n[0] == "number",
  Fv = { linearEasing: void 0 };
function Ov(n, i) {
  const s = Na(n);
  return () => {
    var a;
    return (a = Fv[i]) !== null && a !== void 0 ? a : s();
  };
}
const Hs = Ov(() => {
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
    for (let d = 0; d < c; d++) a += n(hr(0, c - 1, d)) + ", ";
    return `linear(${a.substring(0, a.length - 2)})`;
  };
function tp(n) {
  return !!(
    (typeof n == "function" && Hs()) ||
    !n ||
    (typeof n == "string" && (n in pa || Hs())) ||
    Xa(n) ||
    (Array.isArray(n) && n.every(tp))
  );
}
const li = ([n, i, s, a]) => `cubic-bezier(${n}, ${i}, ${s}, ${a})`,
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
    return typeof n == "function" && Hs()
      ? ep(n, i)
      : Xa(n)
        ? li(n)
        : Array.isArray(n)
          ? n.map((s) => np(s, i) || pa.easeOut)
          : pa[n];
}
const Rt = { x: !1, y: !1 };
function rp() {
  return Rt.x || Rt.y;
}
function Iv(n, i, s) {
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
  const s = Iv(n),
    a = new AbortController(),
    c = { passive: !0, ...i, signal: a.signal };
  return [s, c, () => a.abort()];
}
function Sd(n) {
  return (i) => {
    i.pointerType === "touch" || rp() || n(i);
  };
}
function zv(n, i, s = {}) {
  const [a, c, d] = ip(n, s),
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
const sp = (n, i) => (i ? (n === i ? !0 : sp(n, i.parentElement)) : !1),
  qa = (n) =>
    n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
  Bv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Uv(n) {
  return Bv.has(n.tagName) || n.tabIndex !== -1;
}
const ai = new WeakSet();
function kd(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function ea(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const Wv = (n, i) => {
  const s = n.currentTarget;
  if (!s) return;
  const a = kd(() => {
    if (ai.has(s)) return;
    ea(s, "down");
    const c = kd(() => {
        ea(s, "up");
      }),
      d = () => ea(s, "cancel");
    (s.addEventListener("keyup", c, i), s.addEventListener("blur", d, i));
  });
  (s.addEventListener("keydown", a, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", a), i));
};
function Pd(n) {
  return qa(n) && !rp();
}
function $v(n, i, s = {}) {
  const [a, c, d] = ip(n, s),
    f = (p) => {
      const m = p.currentTarget;
      if (!Pd(p) || ai.has(m)) return;
      ai.add(m);
      const g = i(p),
        v = (A, _) => {
          (window.removeEventListener("pointerup", w),
            window.removeEventListener("pointercancel", k),
            !(!Pd(A) || !ai.has(m)) &&
              (ai.delete(m), typeof g == "function" && g(A, { success: _ })));
        },
        w = (A) => {
          v(A, s.useGlobalTarget || sp(m, A.target));
        },
        k = (A) => {
          v(A, !1);
        };
      (window.addEventListener("pointerup", w, c), window.addEventListener("pointercancel", k, c));
    };
  return (
    a.forEach((p) => {
      (!Uv(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0),
        (s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        p.addEventListener("focus", (g) => Wv(g, c), c));
    }),
    d
  );
}
function Hv(n) {
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
const op = new Set(["width", "height", "top", "left", "right", "bottom", ...yr]);
let Bs;
function Kv() {
  Bs = void 0;
}
const jt = {
  now: () => (
    Bs === void 0 &&
      jt.set(ze.isProcessing || By.useManualTiming ? ze.timestamp : performance.now()),
    Bs
  ),
  set: (n) => {
    ((Bs = n), queueMicrotask(Kv));
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
function lp(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const Td = 30,
  Gv = (n) => !isNaN(parseFloat(n));
class Qv {
  constructor(i, s = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (a, c = !0) => {
        const d = jt.now();
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
      (this.updatedAt = jt.now()),
      this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = Gv(this.current)));
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
    const i = jt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Td)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Td);
    return lp(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
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
  return new Qv(n, i);
}
function Yv(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, gi(s));
}
function Xv(n, i) {
  const s = Js(n, i);
  let { transitionEnd: a = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...a };
  for (const f in d) {
    const p = lv(d[f]);
    Yv(n, f, p);
  }
}
function qv(n) {
  return !!(Ke(n) && n.add);
}
function ma(n, i) {
  const s = n.getValue("willChange");
  if (qv(s)) return s.add(i);
}
function ap(n) {
  return n.props[Ih];
}
const up = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  Zv = 1e-7,
  Jv = 12;
function bv(n, i, s, a, c) {
  let d,
    f,
    p = 0;
  do ((f = i + (s - i) / 2), (d = up(f, a, c) - n), d > 0 ? (s = f) : (i = f));
  while (Math.abs(d) > Zv && ++p < Jv);
  return f;
}
function wi(n, i, s, a) {
  if (n === i && s === a) return ct;
  const c = (d) => bv(d, 0, 1, n, s);
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
function e0(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || yp(n) : !0;
}
const ci = (n) => Math.round(n * 1e5) / 1e5,
  nu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function t0(n) {
  return n == null;
}
const n0 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ru = (n, i) => (s) =>
    !!(
      (typeof s == "string" && n0.test(s) && s.startsWith(n)) ||
      (i && !t0(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  vp = (n, i, s) => (a) => {
    if (typeof a != "string") return a;
    const [c, d, f, p] = a.match(nu);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  r0 = (n) => Gt(0, 255, n),
  ta = { ...vr, transform: (n) => Math.round(r0(n)) },
  _n = {
    test: ru("rgb", "red"),
    parse: vp("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: s, alpha: a = 1 }) =>
      "rgba(" +
      ta.transform(n) +
      ", " +
      ta.transform(i) +
      ", " +
      ta.transform(s) +
      ", " +
      ci(mi.transform(a)) +
      ")",
  };
function i0(n) {
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
const ga = { test: ru("#"), parse: i0, transform: _n.transform },
  ur = {
    test: ru("hsl", "hue"),
    parse: vp("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: s, alpha: a = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      _t.transform(ci(i)) +
      ", " +
      _t.transform(ci(s)) +
      ", " +
      ci(mi.transform(a)) +
      ")",
  },
  He = {
    test: (n) => _n.test(n) || ga.test(n) || ur.test(n),
    parse: (n) => (_n.test(n) ? _n.parse(n) : ur.test(n) ? ur.parse(n) : ga.parse(n)),
    transform: (n) =>
      typeof n == "string" ? n : n.hasOwnProperty("red") ? _n.transform(n) : ur.transform(n),
  },
  s0 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function o0(n) {
  var i, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(nu)) === null || i === void 0 ? void 0 : i.length) || 0) +
      (((s = n.match(s0)) === null || s === void 0 ? void 0 : s.length) || 0) >
      0
  );
}
const xp = "number",
  wp = "color",
  l0 = "var",
  a0 = "var(",
  Cd = "${}",
  u0 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function yi(n) {
  const i = n.toString(),
    s = [],
    a = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      u0,
      (m) => (
        He.test(m)
          ? (a.color.push(d), c.push(wp), s.push(He.parse(m)))
          : m.startsWith(a0)
            ? (a.var.push(d), c.push(l0), s.push(m))
            : (a.number.push(d), c.push(xp), s.push(parseFloat(m))),
        ++d,
        Cd
      ),
    )
    .split(Cd);
  return { values: s, split: p, indexes: a, types: c };
}
function Sp(n) {
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
        p === xp ? (d += ci(c[f])) : p === wp ? (d += He.transform(c[f])) : (d += c[f]);
      }
    return d;
  };
}
const c0 = (n) => (typeof n == "number" ? 0 : n);
function f0(n) {
  const i = Sp(n);
  return kp(n)(i.map(c0));
}
const mn = { test: o0, parse: Sp, createTransformer: kp, getAnimatableNone: f0 },
  d0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function h0(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [a] = s.match(nu) || [];
  if (!a) return n;
  const c = s.replace(a, "");
  let d = d0.has(i) ? 1 : 0;
  return (a !== s && (d *= 100), i + "(" + d + c + ")");
}
const p0 = /\b([a-z-]*)\(.*?\)/gu,
  ya = {
    ...mn,
    getAnimatableNone: (n) => {
      const i = n.match(p0);
      return i ? i.map(h0).join(" ") : n;
    },
  },
  m0 = {
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
    filter: ya,
    WebkitFilter: ya,
  },
  iu = (n) => m0[n];
function Pp(n, i) {
  let s = iu(n);
  return (s !== ya && (s = mn), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0);
}
const g0 = new Set(["auto", "none", "0"]);
function y0(n, i, s) {
  let a = 0,
    c;
  for (; a < n.length && !c;) {
    const d = n[a];
    (typeof d == "string" && !g0.has(d) && yi(d).values.length && (c = n[a]), a++);
  }
  if (c && s) for (const d of i) n[d] = Pp(s, c);
}
const Ed = (n) => n === vr || n === b,
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
  v0 = new Set(["x", "y", "z"]),
  x0 = yr.filter((n) => !v0.has(n));
function w0(n) {
  const i = [];
  return (
    x0.forEach((s) => {
      const a = n.getValue(s);
      a !== void 0 && (i.push([s, a.get()]), a.set(s.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const mr = {
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
mr.translateX = mr.x;
mr.translateY = mr.y;
const jn = new Set();
let va = !1,
  xa = !1;
function Tp() {
  if (xa) {
    const n = Array.from(jn).filter((a) => a.needsMeasurement),
      i = new Set(n.map((a) => a.element)),
      s = new Map();
    (i.forEach((a) => {
      const c = w0(a);
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
  ((xa = !1), (va = !1), jn.forEach((n) => n.complete()), jn.clear());
}
function Cp() {
  jn.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (xa = !0));
  });
}
function S0() {
  (Cp(), Tp());
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
        ? (jn.add(this), va || ((va = !0), ve.read(Cp), ve.resolveKeyframes(Tp)))
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
      jn.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), jn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ep = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  k0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function P0(n) {
  const i = k0.exec(n);
  if (!i) return [,];
  const [, s, a, c] = i;
  return [`--${s ?? a}`, c];
}
function Ap(n, i, s = 1) {
  const [a, c] = P0(n);
  if (!a) return;
  const d = window.getComputedStyle(i).getPropertyValue(a);
  if (d) {
    const f = d.trim();
    return Ep(f) ? parseFloat(f) : f;
  }
  return Ba(c) ? Ap(c, i, s + 1) : c;
}
const Rp = (n) => (i) => i.test(n),
  T0 = { test: (n) => n === "auto", parse: (n) => n },
  Dp = [vr, b, _t, hn, hv, dv, T0],
  Dd = (n) => Dp.find(Rp(n));
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
        const v = Ap(g, s.current);
        (v !== void 0 && (i[m] = v), m === i.length - 1 && (this.finalKeyframe = g));
      }
    }
    if ((this.resolveNoneKeyframes(), !op.has(a) || i.length !== 2)) return;
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
    const { unresolvedKeyframes: i, name: s } = this,
      a = [];
    for (let c = 0; c < i.length; c++) e0(i[c]) && a.push(c);
    a.length && y0(i, a, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: a } = this;
    if (!i || !i.current) return;
    (a === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = mr[a](i.measureViewportBox(), window.getComputedStyle(i.current))),
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
    ((c[f] = mr[a](s.measureViewportBox(), window.getComputedStyle(s.current))),
      p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
      !((i = this.removedTransforms) === null || i === void 0) &&
        i.length &&
        this.removedTransforms.forEach(([m, g]) => {
          s.getValue(m).set(g);
        }),
      this.resolveNoneKeyframes());
  }
}
const Md = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" && (mn.test(n) || n === "0") && !n.startsWith("url("))
      );
function C0(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== i) return !0;
}
function E0(n, i, s, a) {
  const c = n[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = Md(c, i),
    p = Md(d, i);
  return !f || !p ? !1 : C0(n) || ((s === "spring" || Ya(s)) && a);
}
const A0 = (n) => n !== null;
function bs(n, { repeat: i, repeatType: s = "loop" }, a) {
  const c = n.filter(A0),
    d = i && s !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return !d || a === void 0 ? c[d] : a;
}
const R0 = 40;
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
      (this.createdAt = jt.now()),
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
      ? this.resolvedAt - this.createdAt > R0
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (!this._resolved && !this.hasAttemptedResolve && S0(), this._resolved);
  }
  onKeyframesResolved(i, s) {
    ((this.resolvedAt = jt.now()), (this.hasAttemptedResolve = !0));
    const {
      name: a,
      type: c,
      velocity: d,
      delay: f,
      onComplete: p,
      onUpdate: m,
      isGenerator: g,
    } = this.options;
    if (!g && !E0(i, a, c, d))
      if (f) this.options.duration = 0;
      else {
        (m && m(bs(i, this.options, s)), p && p(), this.resolveFinishedPromise());
        return;
      }
    const v = this.initPlayback(i, s);
    v !== !1 &&
      ((this._resolved = { keyframes: i, finalKeyframe: s, ...v }), this.onPostResolved());
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
function na(n, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n
  );
}
function D0({ hue: n, saturation: i, lightness: s, alpha: a }) {
  ((n /= 360), (i /= 100), (s /= 100));
  let c = 0,
    d = 0,
    f = 0;
  if (!i) c = d = f = s;
  else {
    const p = s < 0.5 ? s * (1 + i) : s + i - s * i,
      m = 2 * s - p;
    ((c = na(m, p, n + 1 / 3)), (d = na(m, p, n)), (f = na(m, p, n - 1 / 3)));
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
const ra = (n, i, s) => {
    const a = n * n,
      c = s * (i * i - a) + a;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  M0 = [ga, _n, ur],
  V0 = (n) => M0.find((i) => i.test(n));
function Vd(n) {
  const i = V0(n);
  if (!i) return !1;
  let s = i.parse(n);
  return (i === ur && (s = D0(s)), s);
}
const Ld = (n, i) => {
    const s = Vd(n),
      a = Vd(i);
    if (!s || !a) return Ks(n, i);
    const c = { ...s };
    return (d) => (
      (c.red = ra(s.red, a.red, d)),
      (c.green = ra(s.green, a.green, d)),
      (c.blue = ra(s.blue, a.blue, d)),
      (c.alpha = Te(s.alpha, a.alpha, d)),
      _n.transform(c)
    );
  },
  L0 = (n, i) => (s) => i(n(s)),
  Si = (...n) => n.reduce(L0),
  wa = new Set(["none", "hidden"]);
function N0(n, i) {
  return wa.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n);
}
function _0(n, i) {
  return (s) => Te(n, i, s);
}
function ou(n) {
  return typeof n == "number"
    ? _0
    : typeof n == "string"
      ? Ba(n)
        ? Ks
        : He.test(n)
          ? Ld
          : O0
      : Array.isArray(n)
        ? Lp
        : typeof n == "object"
          ? He.test(n)
            ? Ld
            : j0
          : Ks;
}
function Lp(n, i) {
  const s = [...n],
    a = s.length,
    c = n.map((d, f) => ou(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < a; f++) s[f] = c[f](d);
    return s;
  };
}
function j0(n, i) {
  const s = { ...n, ...i },
    a = {};
  for (const c in s) n[c] !== void 0 && i[c] !== void 0 && (a[c] = ou(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in a) s[d] = a[d](c);
    return s;
  };
}
function F0(n, i) {
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
const O0 = (n, i) => {
  const s = mn.createTransformer(i),
    a = yi(n),
    c = yi(i);
  return a.indexes.var.length === c.indexes.var.length &&
    a.indexes.color.length === c.indexes.color.length &&
    a.indexes.number.length >= c.indexes.number.length
    ? (wa.has(n) && !c.values.length) || (wa.has(i) && !a.values.length)
      ? N0(n, i)
      : Si(Lp(F0(a, c), c.values), s)
    : Ks(n, i);
};
function Np(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number"
    ? Te(n, i, s)
    : ou(n)(n, i);
}
const I0 = 5;
function _p(n, i, s) {
  const a = Math.max(i - I0, 0);
  return lp(s - n(a), i - a);
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
  ia = 0.001;
function z0({
  duration: n = Ae.duration,
  bounce: i = Ae.bounce,
  velocity: s = Ae.velocity,
  mass: a = Ae.mass,
}) {
  let c,
    d,
    f = 1 - i;
  ((f = Gt(Ae.minDamping, Ae.maxDamping, f)),
    (n = Gt(Ae.minDuration, Ae.maxDuration, Kt(n))),
    f < 1
      ? ((c = (g) => {
          const v = g * f,
            w = v * n,
            k = v - s,
            A = Sa(g, f),
            _ = Math.exp(-w);
          return ia - (k / A) * _;
        }),
        (d = (g) => {
          const w = g * f * n,
            k = w * s + s,
            A = Math.pow(f, 2) * Math.pow(g, 2) * n,
            _ = Math.exp(-w),
            D = Sa(Math.pow(g, 2), f);
          return ((-c(g) + ia > 0 ? -1 : 1) * ((k - A) * _)) / D;
        }))
      : ((c = (g) => {
          const v = Math.exp(-g * n),
            w = (g - s) * n + 1;
          return -ia + v * w;
        }),
        (d = (g) => {
          const v = Math.exp(-g * n),
            w = (s - g) * (n * n);
          return v * w;
        })));
  const p = 5 / n,
    m = U0(c, d, p);
  if (((n = Ht(n)), isNaN(m))) return { stiffness: Ae.stiffness, damping: Ae.damping, duration: n };
  {
    const g = Math.pow(m, 2) * a;
    return { stiffness: g, damping: f * 2 * Math.sqrt(a * g), duration: n };
  }
}
const B0 = 12;
function U0(n, i, s) {
  let a = s;
  for (let c = 1; c < B0; c++) a = a - n(a) / i(a);
  return a;
}
function Sa(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const W0 = ["duration", "bounce"],
  $0 = ["stiffness", "damping", "mass"];
function Nd(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function H0(n) {
  let i = {
    velocity: Ae.velocity,
    stiffness: Ae.stiffness,
    damping: Ae.damping,
    mass: Ae.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Nd(n, $0) && Nd(n, W0))
    if (n.visualDuration) {
      const s = n.visualDuration,
        a = (2 * Math.PI) / (s * 1.2),
        c = a * a,
        d = 2 * Gt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Ae.mass, stiffness: c, damping: d };
    } else {
      const s = z0(n);
      ((i = { ...i, ...s, mass: Ae.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function jp(n = Ae.visualDuration, i = Ae.bounce) {
  const s = typeof n != "object" ? { visualDuration: n, keyframes: [0, 1], bounce: i } : n;
  let { restSpeed: a, restDelta: c } = s;
  const d = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: g,
      mass: v,
      duration: w,
      velocity: k,
      isResolvedFromDuration: A,
    } = H0({ ...s, velocity: -Kt(s.velocity || 0) }),
    _ = k || 0,
    D = g / (2 * Math.sqrt(m * v)),
    j = f - d,
    I = Kt(Math.sqrt(m / v)),
    W = Math.abs(j) < 5;
  (a || (a = W ? Ae.restSpeed.granular : Ae.restSpeed.default),
    c || (c = W ? Ae.restDelta.granular : Ae.restDelta.default));
  let K;
  if (D < 1) {
    const Q = Sa(I, D);
    K = (ne) => {
      const ae = Math.exp(-D * I * ne);
      return f - ae * (((_ + D * I * j) / Q) * Math.sin(Q * ne) + j * Math.cos(Q * ne));
    };
  } else if (D === 1) K = (Q) => f - Math.exp(-I * Q) * (j + (_ + I * j) * Q);
  else {
    const Q = I * Math.sqrt(D * D - 1);
    K = (ne) => {
      const ae = Math.exp(-D * I * ne),
        J = Math.min(Q * ne, 300);
      return f - (ae * ((_ + D * I * j) * Math.sinh(J) + Q * j * Math.cosh(J))) / Q;
    };
  }
  const te = {
    calculatedDuration: (A && w) || null,
    next: (Q) => {
      const ne = K(Q);
      if (A) p.done = Q >= w;
      else {
        let ae = 0;
        D < 1 && (ae = Q === 0 ? Ht(_) : _p(K, Q, ne));
        const J = Math.abs(ae) <= a,
          Se = Math.abs(f - ne) <= c;
        p.done = J && Se;
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
  power: s = 0.8,
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
    k = { done: !1, value: w },
    A = (J) => (p !== void 0 && J < p) || (m !== void 0 && J > m),
    _ = (J) => (p === void 0 ? m : m === void 0 || Math.abs(p - J) < Math.abs(m - J) ? p : m);
  let D = s * i;
  const j = w + D,
    I = f === void 0 ? j : f(j);
  I !== j && (D = I - w);
  const W = (J) => -D * Math.exp(-J / a),
    K = (J) => I + W(J),
    te = (J) => {
      const Se = W(J),
        Ce = K(J);
      ((k.done = Math.abs(Se) <= g), (k.value = k.done ? I : Ce));
    };
  let Q, ne;
  const ae = (J) => {
    A(k.value) &&
      ((Q = J),
      (ne = jp({
        keyframes: [k.value, _(k.value)],
        velocity: _p(K, J, k.value),
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
        let Se = !1;
        return (
          !ne && Q === void 0 && ((Se = !0), te(J), ae(J)),
          Q !== void 0 && J >= Q ? ne.next(J - Q) : (!Se && te(J), k)
        );
      },
    }
  );
}
const K0 = wi(0.42, 0, 1, 1),
  G0 = wi(0, 0, 0.58, 1),
  Fp = wi(0.42, 0, 0.58, 1),
  Q0 = (n) => Array.isArray(n) && typeof n[0] != "number",
  Y0 = {
    linear: ct,
    easeIn: K0,
    easeInOut: Fp,
    easeOut: G0,
    circIn: tu,
    circInOut: gp,
    circOut: mp,
    backIn: eu,
    backInOut: hp,
    backOut: dp,
    anticipate: pp,
  },
  jd = (n) => {
    if (Xa(n)) {
      Nh(n.length === 4);
      const [i, s, a, c] = n;
      return wi(i, s, a, c);
    } else if (typeof n == "string") return Y0[n];
    return n;
  };
function X0(n, i, s) {
  const a = [],
    c = s || Np,
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
function q0(n, i, { clamp: s = !0, ease: a, mixer: c } = {}) {
  const d = n.length;
  if ((Nh(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = X0(i, a, c),
    m = p.length,
    g = (v) => {
      if (f && v < n[0]) return i[0];
      let w = 0;
      if (m > 1) for (; w < n.length - 2 && !(v < n[w + 1]); w++);
      const k = hr(n[w], n[w + 1], v);
      return p[w](k);
    };
  return s ? (v) => g(Gt(n[0], n[d - 1], v)) : g;
}
function Z0(n, i) {
  const s = n[n.length - 1];
  for (let a = 1; a <= i; a++) {
    const c = hr(0, i, a);
    n.push(Te(s, 1, c));
  }
}
function J0(n) {
  const i = [0];
  return (Z0(i, n.length - 1), i);
}
function b0(n, i) {
  return n.map((s) => s * i);
}
function e1(n, i) {
  return n.map(() => i || Fp).splice(0, n.length - 1);
}
function Gs({ duration: n = 300, keyframes: i, times: s, ease: a = "easeInOut" }) {
  const c = Q0(a) ? a.map(jd) : jd(a),
    d = { done: !1, value: i[0] },
    f = b0(s && s.length === i.length ? s : J0(i), n),
    p = q0(f, i, { ease: Array.isArray(c) ? c : e1(i, c) });
  return { calculatedDuration: n, next: (m) => ((d.value = p(m)), (d.done = m >= n), d) };
}
const t1 = (n) => {
    const i = ({ timestamp: s }) => n(s);
    return {
      start: () => ve.update(i, !0),
      stop: () => pn(i),
      now: () => (ze.isProcessing ? ze.timestamp : jt.now()),
    };
  },
  n1 = { decay: _d, inertia: _d, tween: Gs, keyframes: Gs, spring: jp },
  r1 = (n) => n / 100;
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
      p = Ya(s) ? s : n1[s] || Gs;
    let m, g;
    p !== Gs && typeof i[0] != "number" && ((m = Si(r1, Np(i[0], i[1]))), (i = [0, 100]));
    const v = p({ ...this.options, keyframes: i });
    (d === "mirror" && (g = p({ ...this.options, keyframes: [...i].reverse(), velocity: -f })),
      v.calculatedDuration === null && (v.calculatedDuration = bh(v)));
    const { calculatedDuration: w } = v,
      k = w + c,
      A = k * (a + 1) - c;
    return {
      generator: v,
      mirroredGenerator: g,
      mapPercentToKeyframes: m,
      calculatedDuration: w,
      resolvedDuration: k,
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
    const { delay: k, repeat: A, repeatType: _, repeatDelay: D, onUpdate: j } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 && (this.startTime = Math.min(i - v / this.speed, this.startTime)),
      s
        ? (this.currentTime = i)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(i - this.startTime) * this.speed));
    const I = this.currentTime - k * (this.speed >= 0 ? 1 : -1),
      W = this.speed >= 0 ? I < 0 : I > v;
    ((this.currentTime = Math.max(I, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = v));
    let K = this.currentTime,
      te = d;
    if (A) {
      const J = Math.min(this.currentTime, v) / w;
      let Se = Math.floor(J),
        Ce = J % 1;
      (!Ce && J >= 1 && (Ce = 1),
        Ce === 1 && Se--,
        (Se = Math.min(Se, A + 1)),
        !!(Se % 2) &&
          (_ === "reverse" ? ((Ce = 1 - Ce), D && (Ce -= D / w)) : _ === "mirror" && (te = f)),
        (K = Gt(0, 1, Ce) * w));
    }
    const Q = W ? { done: !1, value: m[0] } : te.next(K);
    p && (Q.value = p(Q.value));
    let { done: ne } = Q;
    !W && g !== null && (ne = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0);
    const ae =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ne));
    return (
      ae && c !== void 0 && (Q.value = bs(m, this.options, c)),
      j && j(Q.value),
      ae && this.finish(),
      Q
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
    const { driver: i = t1, onPlay: s, startTime: a } = this.options;
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
const i1 = new Set(["opacity", "clipPath", "filter", "transform"]);
function s1(
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
const o1 = Na(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Qs = 10,
  l1 = 2e4;
function a1(n) {
  return Ya(n.type) || n.type === "spring" || !tp(n.ease);
}
function u1(n, i) {
  const s = new lu({ ...i, keyframes: n, repeat: 0, delay: 0, isGenerator: !0 });
  let a = { done: !1, value: n[0] };
  const c = [];
  let d = 0;
  for (; !a.done && d < l1;) ((a = s.sample(d)), c.push(a.value), (d += Qs));
  return { times: void 0, keyframes: c, duration: d - Qs, ease: "linear" };
}
const Op = { anticipate: pp, backInOut: hp, circInOut: gp };
function c1(n) {
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
    if ((typeof d == "string" && Hs() && c1(d) && (d = Op[d]), a1(this.options))) {
      const { onComplete: w, onUpdate: k, motionValue: A, element: _, ...D } = this.options,
        j = u1(i, D);
      ((i = j.keyframes),
        i.length === 1 && (i[1] = i[0]),
        (a = j.duration),
        (c = j.times),
        (d = j.ease),
        (f = "keyframes"));
    }
    const v = s1(p.owner.current, m, i, { ...this.options, duration: a, times: c, ease: d });
    return (
      (v.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? (wd(v, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (v.onfinish = () => {
            const { onComplete: w } = this.options;
            (p.set(bs(i, this.options, s)), w && w(), this.cancel(), this.resolveFinishedPromise());
          }),
      { animation: v, duration: a, times: c, type: f, ease: d, keyframes: i }
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
      const { motionValue: g, onUpdate: v, onComplete: w, element: k, ...A } = this.options,
        _ = new lu({
          ...A,
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
    return o1() && a && i1.has(a) && !m && !g && !c && d !== "mirror" && f !== 0 && p !== "inertia";
  }
}
const f1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  d1 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  h1 = { type: "keyframes", duration: 0.8 },
  p1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  m1 = (n, { keyframes: i }) =>
    i.length > 2 ? h1 : Fn.has(n) ? (n.startsWith("scale") ? d1(i[1]) : f1) : p1;
function g1({
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
  ...v
}) {
  return !!Object.keys(v).length;
}
const au =
  (n, i, s, a = {}, c, d) =>
  (f) => {
    const p = Qa(a, n) || {},
      m = p.delay || a.delay || 0;
    let { elapsed: g = 0 } = a;
    g = g - Ht(m);
    let v = {
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
    (g1(p) || (v = { ...v, ...m1(n, v) }),
      v.duration && (v.duration = Ht(v.duration)),
      v.repeatDelay && (v.repeatDelay = Ht(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from));
    let w = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ((v.duration = 0), v.delay === 0 && (w = !0)),
      w && !d && i.get() !== void 0)
    ) {
      const k = bs(v.keyframes, p);
      if (k !== void 0)
        return (
          ve.update(() => {
            (v.onUpdate(k), v.onComplete());
          }),
          new jv([])
        );
    }
    return !d && Fd.supports(v) ? new Fd(v) : new lu(v);
  };
function y1({ protectedKeys: n, needsAnimating: i }, s) {
  const a = n.hasOwnProperty(s) && i[s] !== !0;
  return ((i[s] = !1), a);
}
function Ip(n, i, { delay: s = 0, transitionOverride: a, type: c } = {}) {
  var d;
  let { transition: f = n.getDefaultTransition(), transitionEnd: p, ...m } = i;
  a && (f = a);
  const g = [],
    v = c && n.animationState && n.animationState.getState()[c];
  for (const w in m) {
    const k = n.getValue(w, (d = n.latestValues[w]) !== null && d !== void 0 ? d : null),
      A = m[w];
    if (A === void 0 || (v && y1(v, w))) continue;
    const _ = { delay: s, ...Qa(f || {}, w) };
    let D = !1;
    if (window.MotionHandoffAnimation) {
      const I = ap(n);
      if (I) {
        const W = window.MotionHandoffAnimation(I, w, ve);
        W !== null && ((_.startTime = W), (D = !0));
      }
    }
    (ma(n, w), k.start(au(w, k, A, n.shouldReduceMotion && op.has(w) ? { type: !1 } : _, n, D)));
    const j = k.animation;
    j && g.push(j);
  }
  return (
    p &&
      Promise.all(g).then(() => {
        ve.update(() => {
          p && Xv(n, p);
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
  const f = c ? () => Promise.all(Ip(n, c, s)) : () => Promise.resolve(),
    p =
      n.variantChildren && n.variantChildren.size
        ? (g = 0) => {
            const { delayChildren: v = 0, staggerChildren: w, staggerDirection: k } = d;
            return v1(n, i, v + g, w, k, s);
          }
        : () => Promise.resolve(),
    { when: m } = d;
  if (m) {
    const [g, v] = m === "beforeChildren" ? [f, p] : [p, f];
    return g().then(() => v());
  } else return Promise.all([f(), p(s.delay)]);
}
function v1(n, i, s = 0, a = 0, c = 1, d) {
  const f = [],
    p = (n.variantChildren.size - 1) * a,
    m = c === 1 ? (g = 0) => g * a : (g = 0) => p - g * a;
  return (
    Array.from(n.variantChildren)
      .sort(x1)
      .forEach((g, v) => {
        (g.notify("AnimationStart", i),
          f.push(ka(g, i, { ...d, delay: s + m(v) }).then(() => g.notify("AnimationComplete", i))));
      }),
    Promise.all(f)
  );
}
function x1(n, i) {
  return n.sortNodePosition(i);
}
function w1(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let a;
  if (Array.isArray(i)) {
    const c = i.map((d) => ka(n, d, s));
    a = Promise.all(c);
  } else if (typeof i == "string") a = ka(n, i, s);
  else {
    const c = typeof i == "function" ? Js(n, i, s.custom) : i;
    a = Promise.all(Ip(n, c, s));
  }
  return a.then(() => {
    n.notify("AnimationComplete", i);
  });
}
const S1 = ja.length;
function zp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? zp(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const i = {};
  for (let s = 0; s < S1; s++) {
    const a = ja[s],
      c = n.props[a];
    (pi(c) || c === !1) && (i[a] = c);
  }
  return i;
}
const k1 = [..._a].reverse(),
  P1 = _a.length;
function T1(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: a }) => w1(n, s, a)));
}
function C1(n) {
  let i = T1(n),
    s = Od(),
    a = !0;
  const c = (m) => (g, v) => {
    var w;
    const k = Js(
      n,
      v,
      m === "exit"
        ? (w = n.presenceContext) === null || w === void 0
          ? void 0
          : w.custom
        : void 0,
    );
    if (k) {
      const { transition: A, transitionEnd: _, ...D } = k;
      g = { ...g, ...D, ..._ };
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
      k = new Set();
    let A = {},
      _ = 1 / 0;
    for (let j = 0; j < P1; j++) {
      const I = k1[j],
        W = s[I],
        K = g[I] !== void 0 ? g[I] : v[I],
        te = pi(K),
        Q = I === m ? W.isActive : null;
      Q === !1 && (_ = j);
      let ne = K === v[I] && K !== g[I] && te;
      if (
        (ne && a && n.manuallyAnimateOnMount && (ne = !1),
        (W.protectedKeys = { ...A }),
        (!W.isActive && Q === null) || (!K && !W.prevProp) || qs(K) || typeof K == "boolean")
      )
        continue;
      const ae = E1(W.prevProp, K);
      let J = ae || (I === m && W.isActive && !ne && te) || (j > _ && te),
        Se = !1;
      const Ce = Array.isArray(K) ? K : [K];
      let qe = Ce.reduce(c(I), {});
      Q === !1 && (qe = {});
      const { prevResolvedValues: it = {} } = W,
        Ge = { ...it, ...qe },
        Ze = (ie) => {
          ((J = !0), k.has(ie) && ((Se = !0), k.delete(ie)), (W.needsAnimating[ie] = !0));
          const O = n.getValue(ie);
          O && (O.liveStyle = !1);
        };
      for (const ie in Ge) {
        const O = qe[ie],
          Y = it[ie];
        if (A.hasOwnProperty(ie)) continue;
        let B = !1;
        (da(O) && da(Y) ? (B = !Jh(O, Y)) : (B = O !== Y),
          B
            ? O != null
              ? Ze(ie)
              : k.add(ie)
            : O !== void 0 && k.has(ie)
              ? Ze(ie)
              : (W.protectedKeys[ie] = !0));
      }
      ((W.prevProp = K),
        (W.prevResolvedValues = qe),
        W.isActive && (A = { ...A, ...qe }),
        a && n.blockInitialAnimation && (J = !1),
        J &&
          (!(ne && ae) || Se) &&
          w.push(...Ce.map((ie) => ({ animation: ie, options: { type: I } }))));
    }
    if (k.size) {
      const j = {};
      (k.forEach((I) => {
        const W = n.getBaseTarget(I),
          K = n.getValue(I);
        (K && (K.liveStyle = !0), (j[I] = W ?? null));
      }),
        w.push({ animation: j }));
    }
    let D = !!w.length;
    return (
      a && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (D = !1),
      (a = !1),
      D ? i(w) : Promise.resolve()
    );
  }
  function p(m, g) {
    var v;
    if (s[m].isActive === g) return Promise.resolve();
    ((v = n.variantChildren) === null ||
      v === void 0 ||
      v.forEach((k) => {
        var A;
        return (A = k.animationState) === null || A === void 0 ? void 0 : A.setActive(m, g);
      }),
      (s[m].isActive = g));
    const w = f(m);
    for (const k in s) s[k].protectedKeys = {};
    return w;
  }
  return {
    animateChanges: f,
    setActive: p,
    setAnimateFunction: d,
    getState: () => s,
    reset: () => {
      ((s = Od()), (a = !0));
    },
  };
}
function E1(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !Jh(i, n) : !1;
}
function Mn(n = !1) {
  return { isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Od() {
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
class A1 extends gn {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = C1(i)));
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
let R1 = 0;
class D1 extends gn {
  constructor() {
    (super(...arguments), (this.id = R1++));
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
const M1 = { animation: { Feature: A1 }, exit: { Feature: D1 } };
function vi(n, i, s, a = { passive: !0 }) {
  return (n.addEventListener(i, s, a), () => n.removeEventListener(i, s));
}
function ki(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const V1 = (n) => (i) => qa(i) && n(i, ki(i));
function fi(n, i, s, a) {
  return vi(n, i, V1(s), a);
}
const Id = (n, i) => Math.abs(n - i);
function L1(n, i) {
  const s = Id(n.x, i.x),
    a = Id(n.y, i.y);
  return Math.sqrt(s ** 2 + a ** 2);
}
class Bp {
  constructor(i, s, { transformPagePoint: a, contextWindow: c, dragSnapToOrigin: d = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const w = oa(this.lastMoveEventInfo, this.history),
          k = this.startEvent !== null,
          A = L1(w.offset, { x: 0, y: 0 }) >= 3;
        if (!k && !A) return;
        const { point: _ } = w,
          { timestamp: D } = ze;
        this.history.push({ ..._, timestamp: D });
        const { onStart: j, onMove: I } = this.handlers;
        (k || (j && j(this.lastMoveEvent, w), (this.startEvent = this.lastMoveEvent)),
          I && I(this.lastMoveEvent, w));
      }),
      (this.handlePointerMove = (w, k) => {
        ((this.lastMoveEvent = w),
          (this.lastMoveEventInfo = sa(k, this.transformPagePoint)),
          ve.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (w, k) => {
        this.end();
        const { onEnd: A, onSessionEnd: _, resumeAnimation: D } = this.handlers;
        if ((this.dragSnapToOrigin && D && D(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const j = oa(
          w.type === "pointercancel" ? this.lastMoveEventInfo : sa(k, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && A && A(w, j), _ && _(w, j));
      }),
      !qa(i))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = a),
      (this.contextWindow = c || window));
    const f = ki(i),
      p = sa(f, this.transformPagePoint),
      { point: m } = p,
      { timestamp: g } = ze;
    this.history = [{ ...m, timestamp: g }];
    const { onSessionStart: v } = s;
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
    (this.removeListeners && this.removeListeners(), pn(this.updatePoint));
  }
}
function sa(n, i) {
  return i ? { point: i(n.point) } : n;
}
function zd(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function oa({ point: n }, i) {
  return { point: n, delta: zd(n, Up(i)), offset: zd(n, N1(i)), velocity: _1(i, 0.1) };
}
function N1(n) {
  return n[0];
}
function Up(n) {
  return n[n.length - 1];
}
function _1(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    a = null;
  const c = Up(n);
  for (; s >= 0 && ((a = n[s]), !(c.timestamp - a.timestamp > Ht(i)));) s--;
  if (!a) return { x: 0, y: 0 };
  const d = Kt(c.timestamp - a.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - a.x) / d, y: (c.y - a.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
const Wp = 1e-4,
  j1 = 1 - Wp,
  F1 = 1 + Wp,
  $p = 0.01,
  O1 = 0 - $p,
  I1 = 0 + $p;
function ft(n) {
  return n.max - n.min;
}
function z1(n, i, s) {
  return Math.abs(n - i) <= s;
}
function Bd(n, i, s, a = 0.5) {
  ((n.origin = a),
    (n.originPoint = Te(i.min, i.max, n.origin)),
    (n.scale = ft(s) / ft(i)),
    (n.translate = Te(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= j1 && n.scale <= F1) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= O1 && n.translate <= I1) || isNaN(n.translate)) && (n.translate = 0));
}
function di(n, i, s, a) {
  (Bd(n.x, i.x, s.x, a ? a.originX : void 0), Bd(n.y, i.y, s.y, a ? a.originY : void 0));
}
function Ud(n, i, s) {
  ((n.min = s.min + i.min), (n.max = n.min + ft(i)));
}
function B1(n, i, s) {
  (Ud(n.x, i.x, s.x), Ud(n.y, i.y, s.y));
}
function Wd(n, i, s) {
  ((n.min = i.min - s.min), (n.max = n.min + ft(i)));
}
function hi(n, i, s) {
  (Wd(n.x, i.x, s.x), Wd(n.y, i.y, s.y));
}
function U1(n, { min: i, max: s }, a) {
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
function W1(n, { top: i, left: s, bottom: a, right: c }) {
  return { x: $d(n.x, s, c), y: $d(n.y, i, a) };
}
function Hd(n, i) {
  let s = i.min - n.min,
    a = i.max - n.max;
  return (i.max - i.min < n.max - n.min && ([s, a] = [a, s]), { min: s, max: a });
}
function $1(n, i) {
  return { x: Hd(n.x, i.x), y: Hd(n.y, i.y) };
}
function H1(n, i) {
  let s = 0.5;
  const a = ft(n),
    c = ft(i);
  return (
    c > a ? (s = hr(i.min, i.max - a, n.min)) : a > c && (s = hr(n.min, n.max - c, i.min)),
    Gt(0, 1, s)
  );
}
function K1(n, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
  );
}
const Pa = 0.35;
function G1(n = Pa) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Pa),
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
  Me = () => ({ x: Yd(), y: Yd() });
function xt(n) {
  return [n("x"), n("y")];
}
function Hp({ top: n, left: i, right: s, bottom: a }) {
  return { x: { min: i, max: s }, y: { min: n, max: a } };
}
function Q1({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function Y1(n, i) {
  if (!i) return n;
  const s = i({ x: n.left, y: n.top }),
    a = i({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: a.y, right: a.x };
}
function la(n) {
  return n === void 0 || n === 1;
}
function Ta({ scale: n, scaleX: i, scaleY: s }) {
  return !la(n) || !la(i) || !la(s);
}
function Vn(n) {
  return Ta(n) || Kp(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Kp(n) {
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
function Gp(n, { x: i, y: s }) {
  (Ca(n.x, i.translate, i.scale, i.originPoint), Ca(n.y, s.translate, s.scale, s.originPoint));
}
const Zd = 0.999999999999,
  Jd = 1.0000000000001;
function X1(n, i, s, a = !1) {
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
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Gp(n, f)),
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
function Qp(n, i) {
  return Hp(Y1(n.getBoundingClientRect(), i));
}
function q1(n, i, s) {
  const a = Qp(n, s),
    { scroll: c } = i;
  return (c && (fr(a.x, c.offset.x), fr(a.y, c.offset.y)), a);
}
const Yp = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Z1 = new WeakMap();
class J1 {
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
    const { presenceContext: a } = this.visualElement;
    if (a && a.isPresent === !1) return;
    const c = (v) => {
        const { dragSnapToOrigin: w } = this.getProps();
        (w ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(ki(v).point));
      },
      d = (v, w) => {
        const { drag: k, dragPropagation: A, onDragStart: _ } = this.getProps();
        if (
          k &&
          !A &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Hv(k)),
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
            if (_t.test(I)) {
              const { projection: W } = this.visualElement;
              if (W && W.layout) {
                const K = W.layout.layoutBox[j];
                K && (I = ft(K) * (parseFloat(I) / 100));
              }
            }
            this.originPoint[j] = I;
          }),
          _ && ve.postRender(() => _(v, w)),
          ma(this.visualElement, "transform"));
        const { animationState: D } = this.visualElement;
        D && D.setActive("whileDrag", !0);
      },
      f = (v, w) => {
        const {
          dragPropagation: k,
          dragDirectionLock: A,
          onDirectionLock: _,
          onDrag: D,
        } = this.getProps();
        if (!k && !this.openDragLock) return;
        const { offset: j } = w;
        if (A && this.currentDirection === null) {
          ((this.currentDirection = b1(j)),
            this.currentDirection !== null && _ && _(this.currentDirection));
          return;
        }
        (this.updateAxis("x", w.point, j),
          this.updateAxis("y", w.point, j),
          this.visualElement.render(),
          D && D(v, w));
      },
      p = (v, w) => this.stop(v, w),
      m = () =>
        xt((v) => {
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
        contextWindow: Yp(this.visualElement),
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
    if (!a || !Fs(i, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + a[i];
    (this.constraints && this.constraints[i] && (f = U1(f, this.constraints[i], this.elastic[i])),
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
        ? (this.constraints = W1(c.layoutBox, s))
        : (this.constraints = !1),
      (this.elastic = G1(a)),
      d !== this.constraints &&
        c &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        xt((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = K1(c.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !ar(i)) return !1;
    const a = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = q1(a, c.root, this.visualElement.getTransformPagePoint());
    let f = $1(c.layout.layoutBox, d);
    if (s) {
      const p = s(Q1(f));
      ((this.hasMutatedConstraints = !!p), p && (f = Hp(p)));
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
      g = xt((v) => {
        if (!Fs(v, s, this.currentDirection)) return;
        let w = (m && m[v]) || {};
        f && (w = { min: 0, max: 0 });
        const k = c ? 200 : 1e6,
          A = c ? 40 : 1e7,
          _ = {
            type: "inertia",
            velocity: a ? i[v] : 0,
            bounceStiffness: k,
            bounceDamping: A,
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
  startAxisValueAnimation(i, s) {
    const a = this.getAxisMotionValue(i);
    return (ma(this.visualElement, i), a.start(au(i, a, 0, s, this.visualElement, !1)));
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
      if (!Fs(s, a, this.currentDirection)) return;
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
        c[f] = H1({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      a.root && a.root.updateScroll(),
      a.updateLayout(),
      this.resolveConstraints(),
      xt((f) => {
        if (!Fs(f, i, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: g } = this.constraints[f];
        p.set(Te(m, g, c[f]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Z1.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = fi(i, "pointerdown", (m) => {
        const { drag: g, dragListener: v = !0 } = this.getProps();
        g && v && this.start(m);
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
          (xt((v) => {
            const w = this.getAxisMotionValue(v);
            w && ((this.originPoint[v] += m[v].translate), w.set(w.get() + m[v].translate));
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
        dragElastic: f = Pa,
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
function Fs(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n);
}
function b1(n, i = 10) {
  let s = null;
  return (Math.abs(n.y) > i ? (s = "y") : Math.abs(n.x) > i && (s = "x"), s);
}
class ex extends gn {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = ct),
      (this.removeListeners = ct),
      (this.controls = new J1(i)));
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
class tx extends gn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = ct));
  }
  onPointerDown(i) {
    this.session = new Bp(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Yp(this.node),
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
  nx = {
    correct: (n, { treeScale: i, projectionDelta: s }) => {
      const a = n,
        c = mn.parse(n);
      if (c.length > 5) return a;
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
class rx extends Z.Component {
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: a, layoutId: c } = this.props,
      { projection: d } = i;
    (Pv(ix),
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
      Oa.postRender(() => {
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
function Xp(n) {
  const [i, s] = Iy(),
    a = Z.useContext(Vh);
  return L.jsx(rx, {
    ...n,
    layoutGroup: a,
    switchLayoutGroup: Z.useContext(zh),
    isPresent: i,
    safeToRemove: s,
  });
}
const ix = {
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
  boxShadow: nx,
};
function sx(n, i, s) {
  const a = Ke(n) ? n : gi(n);
  return (a.start(au("", a, i, s)), a.animation);
}
function ox(n) {
  return n instanceof SVGElement && n.tagName !== "svg";
}
const lx = (n, i) => n.depth - i.depth;
class ax {
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
    (this.isDirty && this.children.sort(lx), (this.isDirty = !1), this.children.forEach(i));
  }
}
function ux(n, i) {
  const s = jt.now(),
    a = ({ timestamp: c }) => {
      const d = c - s;
      d >= i && (pn(a), n(d - i));
    };
  return (ve.read(a, !0), () => pn(a));
}
const qp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  cx = qp.length,
  nh = (n) => (typeof n == "string" ? parseFloat(n) : n),
  rh = (n) => typeof n == "number" || b.test(n);
function fx(n, i, s, a, c, d) {
  c
    ? ((n.opacity = Te(0, s.opacity !== void 0 ? s.opacity : 1, dx(a))),
      (n.opacityExit = Te(i.opacity !== void 0 ? i.opacity : 1, 0, hx(a))))
    : d &&
      (n.opacity = Te(
        i.opacity !== void 0 ? i.opacity : 1,
        s.opacity !== void 0 ? s.opacity : 1,
        a,
      ));
  for (let f = 0; f < cx; f++) {
    const p = `border${qp[f]}Radius`;
    let m = ih(i, p),
      g = ih(s, p);
    if (m === void 0 && g === void 0) continue;
    (m || (m = 0),
      g || (g = 0),
      m === 0 || g === 0 || rh(m) === rh(g)
        ? ((n[p] = Math.max(Te(nh(m), nh(g), a), 0)), (_t.test(g) || _t.test(m)) && (n[p] += "%"))
        : (n[p] = g));
  }
  (i.rotate || s.rotate) && (n.rotate = Te(i.rotate || 0, s.rotate || 0, a));
}
function ih(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const dx = Zp(0, 0.5, mp),
  hx = Zp(0.5, 0.95, ct);
function Zp(n, i, s) {
  return (a) => (a < n ? 0 : a > i ? 1 : s(hr(n, i, a)));
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
function px(n, i = 0, s = 1, a = 0.5, c, d = n, f = n) {
  if (
    (_t.test(i) && ((i = parseFloat(i)), (i = Te(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = Te(d.min, d.max, a);
  (n === d && (p -= i), (n.min = lh(n.min, i, s, p, c)), (n.max = lh(n.max, i, s, p, c)));
}
function ah(n, i, [s, a, c], d, f) {
  px(n, i[s], i[a], i[c], i.scale, d, f);
}
const mx = ["x", "scaleX", "originX"],
  gx = ["y", "scaleY", "originY"];
function uh(n, i, s, a) {
  (ah(n.x, i, mx, s ? s.x : void 0, a ? a.x : void 0),
    ah(n.y, i, gx, s ? s.y : void 0, a ? a.y : void 0));
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
function yx(n, i) {
  return fh(n.x, i.x) && fh(n.y, i.y);
}
function dh(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function bp(n, i) {
  return dh(n.x, i.x) && dh(n.y, i.y);
}
function hh(n) {
  return ft(n.x) / ft(n.y);
}
function ph(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
class vx {
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
function xx(n, i, s) {
  let a = "";
  const c = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((c || d || f) && (a = `translate3d(${c}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (a += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const { transformPerspective: g, rotate: v, rotateX: w, rotateY: k, skewX: A, skewY: _ } = s;
    (g && (a = `perspective(${g}px) ${a}`),
      v && (a += `rotate(${v}deg) `),
      w && (a += `rotateX(${w}deg) `),
      k && (a += `rotateY(${k}deg) `),
      A && (a += `skewX(${A}deg) `),
      _ && (a += `skewY(${_}deg) `));
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return ((p !== 1 || m !== 1) && (a += `scale(${p}, ${m})`), a || "none");
}
const Ln = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ui = typeof window < "u" && window.MotionDebug !== void 0,
  aa = ["", "X", "Y", "Z"],
  wx = { visibility: "hidden" },
  mh = 1e3;
let Sx = 0;
function ua(n, i, s, a) {
  const { latestValues: c } = i;
  c[n] && ((s[n] = c[n]), i.setStaticValue(n, 0), a && (a[n] = 0));
}
function em(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const s = ap(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", ve, !(c || d));
  }
  const { parent: a } = n;
  a && !a.hasCheckedOptimisedAppear && em(a);
}
function tm({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: a,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, p = i == null ? void 0 : i()) {
      ((this.id = Sx++),
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
            ui && (Ln.totalNodes = Ln.resolvedTargetDeltas = Ln.recalculatedProjection = 0),
            this.nodes.forEach(Tx),
            this.nodes.forEach(Dx),
            this.nodes.forEach(Mx),
            this.nodes.forEach(Cx),
            ui && window.MotionDebug.record(Ln));
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
      this.root === this && (this.nodes = new ax());
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
      ((this.isSVG = ox(f)), (this.instance = f));
      const { layoutId: m, layout: g, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        p && (g || m) && (this.isLayoutDirty = !0),
        n)
      ) {
        let w;
        const k = () => (this.root.updateBlockedByResize = !1);
        n(f, () => {
          ((this.root.updateBlockedByResize = !0),
            w && w(),
            (w = ux(k, 250)),
            Us.hasAnimatedSinceResize &&
              ((Us.hasAnimatedSinceResize = !1), this.nodes.forEach(yh)));
        });
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          v &&
          (m || g) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: w, hasLayoutChanged: k, hasRelativeTargetChanged: A, layout: _ }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const D = this.options.transition || v.getDefaultTransition() || jx,
                { onLayoutAnimationStart: j, onLayoutAnimationComplete: I } = v.getProps(),
                W = !this.targetLayout || !bp(this.targetLayout, _) || A,
                K = !k && A;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                K ||
                (k && (W || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(w, K));
                const te = { ...Qa(D, "layout"), onPlay: j, onComplete: I };
                ((v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((te.delay = 0), (te.type = !1)),
                  this.startAnimation(te));
              } else
                (k || yh(this),
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Vx), this.animationId++);
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
      (this.isUpdating || this.nodes.forEach(Ax),
        (this.isUpdating = !1),
        this.nodes.forEach(Rx),
        this.nodes.forEach(kx),
        this.nodes.forEach(Px),
        this.clearAllSnapshots());
      const p = jt.now();
      ((ze.delta = Gt(0, 1e3 / 60, p - ze.timestamp)),
        (ze.timestamp = p),
        (ze.isProcessing = !0),
        bl.update.process(ze),
        bl.preRender.process(ze),
        bl.render.process(ze),
        (ze.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Oa.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Ex), this.sharedNodes.forEach(Lx));
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
          offset: s(this.instance),
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
        Fx(m),
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
        ((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) || this.path.some(Ox)
      )) {
        const { scroll: v } = this.root;
        v && (fr(m.x, v.offset.x), fr(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var p;
      const m = Me();
      if ((vt(m, f), !((p = this.scroll) === null || p === void 0) && p.wasRoot)) return m;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g],
          { scroll: w, options: k } = v;
        v !== this.root &&
          w &&
          k.layoutScroll &&
          (w.wasRoot && vt(m, f), fr(m.x, w.offset.x), fr(m.y, w.offset.y));
      }
      return m;
    }
    applyTransform(f, p = !1) {
      const m = Me();
      vt(m, f);
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        (!p &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          dr(m, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          Vn(v.latestValues) && dr(m, v.latestValues));
      }
      return (Vn(this.latestValues) && dr(m, this.latestValues), m);
    }
    removeTransform(f) {
      const p = Me();
      vt(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        if (!g.instance || !Vn(g.latestValues)) continue;
        Ta(g.latestValues) && g.updateSnapshot();
        const v = Me(),
          w = g.measurePageBox();
        (vt(v, w), uh(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, v));
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
      const { layout: w, layoutId: k } = this.options;
      if (!(!this.layout || !(w || k))) {
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
              hi(this.relativeTargetOrigin, this.layout.layoutBox, A.layout.layoutBox),
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
                B1(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : vt(this.target, this.layout.layoutBox),
                  Gp(this.target, this.targetDelta))
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
                hi(this.relativeTargetOrigin, this.target, A.target),
                vt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ui && Ln.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ta(this.parent.latestValues) || Kp(this.parent.latestValues)))
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
      vt(this.layoutCorrected, this.layout.layoutBox);
      const k = this.treeScale.x,
        A = this.treeScale.y;
      (X1(this.layoutCorrected, this.treeScale, this.path, m),
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
        : (oh(this.prevProjectionDelta.x, this.projectionDelta.x),
          oh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        di(this.projectionDelta, this.layoutCorrected, _, this.latestValues),
        (this.treeScale.x !== k ||
          this.treeScale.y !== A ||
          !ph(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !ph(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", _)),
        ui && Ln.recalculatedProjection++);
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
        v = { ...this.latestValues },
        w = cr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const k = Me(),
        A = m ? m.source : void 0,
        _ = this.layout ? this.layout.source : void 0,
        D = A !== _,
        j = this.getStack(),
        I = !j || j.members.length <= 1,
        W = !!(D && !I && this.options.crossfade === !0 && !this.path.some(_x));
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
            (hi(k, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Nx(this.relativeTarget, this.relativeTargetOrigin, k, Q),
            K && yx(this.relativeTarget, K) && (this.isProjectionDirty = !1),
            K || (K = Me()),
            vt(K, this.relativeTarget)),
          D && ((this.animationValues = v), fx(v, g, this.latestValues, Q, W, I)),
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
        this.pendingAnimation && (pn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ve.update(() => {
          ((Us.hasAnimatedSinceResize = !0),
            (this.currentAnimation = sx(0, mh, {
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
          const w = ft(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + w));
          const k = ft(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + k));
        }
        (vt(p, m), dr(p, v), di(this.projectionDeltaWithTransform, this.layoutCorrected, p, v));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new vx()),
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
      m.z && ua("z", f, g, this.animationValues);
      for (let v = 0; v < aa.length; v++)
        (ua(`rotate${aa[v]}`, f, g, this.animationValues),
          ua(`skew${aa[v]}`, f, g, this.animationValues));
      f.render();
      for (const v in g)
        (f.setStaticValue(v, g[v]), this.animationValues && (this.animationValues[v] = g[v]));
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      var p, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return wx;
      const g = { visibility: "" },
        v = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (g.opacity = ""),
          (g.pointerEvents = zs(f == null ? void 0 : f.pointerEvents) || ""),
          (g.transform = v ? v(this.latestValues, "") : "none"),
          g
        );
      const w = this.getLead();
      if (!this.projectionDelta || !this.layout || !w.target) {
        const D = {};
        return (
          this.options.layoutId &&
            ((D.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (D.pointerEvents = zs(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !Vn(this.latestValues) &&
            ((D.transform = v ? v({}, "") : "none"), (this.hasProjected = !1)),
          D
        );
      }
      const k = w.animationValues || w.latestValues;
      (this.applyTransformsToTarget(),
        (g.transform = xx(this.projectionDeltaWithTransform, this.treeScale, k)),
        v && (g.transform = v(k, g.transform)));
      const { x: A, y: _ } = this.projectionDelta;
      ((g.transformOrigin = `${A.origin * 100}% ${_.origin * 100}% 0`),
        w.animationValues
          ? (g.opacity =
              w === this
                ? (m = (p = k.opacity) !== null && p !== void 0 ? p : this.latestValues.opacity) !==
                    null && m !== void 0
                  ? m
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : k.opacityExit)
          : (g.opacity =
              w === this
                ? k.opacity !== void 0
                  ? k.opacity
                  : ""
                : k.opacityExit !== void 0
                  ? k.opacityExit
                  : 0));
      for (const D in $s) {
        if (k[D] === void 0) continue;
        const { correct: j, applyTo: I } = $s[D],
          W = g.transform === "none" ? k[D] : j(k[D], w);
        if (I) {
          const K = I.length;
          for (let te = 0; te < K; te++) g[I[te]] = W;
        } else g[D] = W;
      }
      return (
        this.options.layoutId &&
          (g.pointerEvents = w === this ? zs(f == null ? void 0 : f.pointerEvents) || "" : "none"),
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
function kx(n) {
  n.updateLayout();
}
function Px(n) {
  var i;
  const s = ((i = n.resumeFrom) === null || i === void 0 ? void 0 : i.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && s && n.hasListeners("didUpdate")) {
    const { layoutBox: a, measuredBox: c } = n.layout,
      { animationType: d } = n.options,
      f = s.source !== n.layout.source;
    d === "size"
      ? xt((w) => {
          const k = f ? s.measuredBox[w] : s.layoutBox[w],
            A = ft(k);
          ((k.min = a[w].min), (k.max = k.min + A));
        })
      : nm(d, s.layoutBox, a) &&
        xt((w) => {
          const k = f ? s.measuredBox[w] : s.layoutBox[w],
            A = ft(a[w]);
          ((k.max = k.min + A),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[w].max = n.relativeTarget[w].min + A)));
        });
    const p = cr();
    di(p, a, s.layoutBox);
    const m = cr();
    f ? di(m, n.applyTransform(c, !0), s.measuredBox) : di(m, a, s.layoutBox);
    const g = !Jp(p);
    let v = !1;
    if (!n.resumeFrom) {
      const w = n.getClosestProjectingParent();
      if (w && !w.resumeFrom) {
        const { snapshot: k, layout: A } = w;
        if (k && A) {
          const _ = Me();
          hi(_, s.layoutBox, k.layoutBox);
          const D = Me();
          (hi(D, a, A.layoutBox),
            bp(_, D) || (v = !0),
            w.options.layoutRoot &&
              ((n.relativeTarget = D), (n.relativeTargetOrigin = _), (n.relativeParent = w)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: a,
      snapshot: s,
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
function Tx(n) {
  (ui && Ln.totalNodes++,
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
function Cx(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function Ex(n) {
  n.clearSnapshot();
}
function gh(n) {
  n.clearMeasurements();
}
function Ax(n) {
  n.isLayoutDirty = !1;
}
function Rx(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform());
}
function yh(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function Dx(n) {
  n.resolveTargetDelta();
}
function Mx(n) {
  n.calcProjection();
}
function Vx(n) {
  n.resetSkewAndRotation();
}
function Lx(n) {
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
function Nx(n, i, s, a) {
  (xh(n.x, i.x, s.x, a), xh(n.y, i.y, s.y, a));
}
function _x(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const jx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  wh = (n) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
  Sh = wh("applewebkit/") && !wh("chrome/") ? Math.round : ct;
function kh(n) {
  ((n.min = Sh(n.min)), (n.max = Sh(n.max)));
}
function Fx(n) {
  (kh(n.x), kh(n.y));
}
function nm(n, i, s) {
  return n === "position" || (n === "preserve-aspect" && !z1(hh(i), hh(s), 0.2));
}
function Ox(n) {
  var i;
  return n !== n.root && ((i = n.scroll) === null || i === void 0 ? void 0 : i.wasRoot);
}
const Ix = tm({
    attachResizeListener: (n, i) => vi(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ca = { current: void 0 },
  rm = tm({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!ca.current) {
        const n = new Ix({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (ca.current = n));
      }
      return ca.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  zx = { pan: { Feature: tx }, drag: { Feature: ex, ProjectionNode: rm, MeasureLayout: Xp } };
function Ph(n, i, s) {
  const { props: a } = n;
  n.animationState && a.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s,
    d = a[c];
  d && ve.postRender(() => d(i, ki(i)));
}
class Bx extends gn {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = zv(i, (s) => (Ph(this.node, s, "Start"), (a) => Ph(this.node, a, "End"))));
  }
  unmount() {}
}
class Ux extends gn {
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
  d && ve.postRender(() => d(i, ki(i)));
}
class Wx extends gn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = $v(
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
const Ea = new WeakMap(),
  fa = new WeakMap(),
  $x = (n) => {
    const i = Ea.get(n.target);
    i && i(n);
  },
  Hx = (n) => {
    n.forEach($x);
  };
function Kx({ root: n, ...i }) {
  const s = n || document;
  fa.has(s) || fa.set(s, {});
  const a = fa.get(s),
    c = JSON.stringify(i);
  return (a[c] || (a[c] = new IntersectionObserver(Hx, { root: n, ...i })), a[c]);
}
function Gx(n, i, s) {
  const a = Kx(i);
  return (
    Ea.set(n, s),
    a.observe(n),
    () => {
      (Ea.delete(n), a.unobserve(n));
    }
  );
}
const Qx = { some: 0, all: 1 };
class Yx extends gn {
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
        threshold: typeof c == "number" ? c : Qx[c],
      },
      p = (m) => {
        const { isIntersecting: g } = m;
        if (this.isInView === g || ((this.isInView = g), d && !g && this.hasEnteredView)) return;
        (g && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", g));
        const { onViewportEnter: v, onViewportLeave: w } = this.node.getProps(),
          k = g ? v : w;
        k && k(m);
      };
    return Gx(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(Xx(i, s)) && this.startObserver();
  }
  unmount() {}
}
function Xx({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const qx = {
    inView: { Feature: Yx },
    tap: { Feature: Wx },
    focus: { Feature: Ux },
    hover: { Feature: Bx },
  },
  Zx = { layout: { ProjectionNode: rm, MeasureLayout: Xp } },
  Aa = { current: null },
  im = { current: !1 };
function Jx() {
  if (((im.current = !0), !!La))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Aa.current = n.matches);
      (n.addListener(i), i());
    } else Aa.current = !1;
}
const bx = [...Dp, He, mn],
  ew = (n) => bx.find(Rp(n)),
  Ch = new WeakMap();
function tw(n, i, s) {
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
const Eh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class nw {
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
        const A = jt.now();
        this.renderScheduledAt < A &&
          ((this.renderScheduledAt = A), ve.render(this.render, !1, !0));
      }));
    const { latestValues: m, renderState: g, onUpdate: v } = f;
    ((this.onUpdate = v),
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
      (this.isVariantNode = Oh(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: w, ...k } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const A in k) {
      const _ = k[A];
      m[A] !== void 0 && Ke(_) && _.set(m[A], !1);
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
      this.values.forEach((s, a) => this.bindToMotionValue(a, s)),
      im.current || Jx(),
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
    for (i in pr) {
      const s = pr[i];
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
    for (let a = 0; a < Eh.length; a++) {
      const c = Eh[a];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = tw(
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
        (typeof c == "string" && (Ep(c) || yp(c))
          ? (c = parseFloat(c))
          : !ew(c) && mn.test(s) && (c = Pp(i, s)),
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
class sm extends nw {
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
function rw(n) {
  return window.getComputedStyle(n);
}
class iw extends sm {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Gh));
  }
  readValueFromInstance(i, s) {
    if (Fn.has(s)) {
      const a = iu(s);
      return (a && a.default) || 0;
    } else {
      const a = rw(i),
        c = ($h(s) ? a.getPropertyValue(s) : a[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return Qp(i, s);
  }
  build(i, s, a) {
    Wa(i, s, a.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, a) {
    return Ga(i, s, a);
  }
}
class sw extends sm {
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
const ow = (n, i) => (Ia(n) ? new sw(i) : new iw(i, { allowProjection: n !== Z.Fragment })),
  lw = Lv({ ...M1, ...qx, ...zx, ...Zx }, ow),
  om = Qy(lw),
  aw = [0.22, 1, 0.36, 1];
function Nn({ children: n, className: i, delay: s = 0 }) {
  return L.jsx(om.div, {
    className: i,
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: s, duration: 0.65, ease: aw },
    children: n,
  });
}
const uw = [0.22, 1, 0.36, 1];
function cw({ text: n, className: i, delay: s = 0 }) {
  const a = [...n];
  return L.jsx("span", {
    className: i,
    "aria-label": n,
    children: a.map((c, d) =>
      L.jsx(
        om.span,
        {
          className: "inline-block",
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: s + d * 0.035, duration: 0.55, ease: uw },
          "aria-hidden": c === " ",
          children: c === " " ? " " : c,
        },
        `${c}-${d}`,
      ),
    ),
  });
}
function fw() {
  return L.jsxs("section", {
    className:
      "relative z-10 flex flex-1 flex-col justify-center px-6 pb-28 pt-6 md:px-10 md:pb-32",
    children: [
      L.jsx(Nn, {
        delay: 0.2,
        children: L.jsxs("span", {
          className:
            "liquid-glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-heading/90",
          children: [
            L.jsx("span", { "aria-hidden": !0, children: "⚡" }),
            L.jsx("span", { "aria-hidden": !0, children: "🌿" }),
            L.jsx("span", { children: "Clean grid · Solar & storage" }),
          ],
        }),
      }),
      L.jsx("h1", {
        className:
          "max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-heading sm:text-5xl md:text-6xl lg:text-7xl",
        children: L.jsx(cw, { text: Ay, delay: 0.35 }),
      }),
      L.jsx(Nn, {
        delay: 0.75,
        className: "mt-6 max-w-xl",
        children: L.jsx("p", {
          className: "text-base leading-relaxed text-heading/70 md:text-lg",
          children:
            "Deploy community-scale renewable systems with real-time monitoring and transparent impact reporting.",
        }),
      }),
      L.jsxs(Nn, {
        delay: 0.9,
        className: "mt-8 flex flex-wrap gap-3",
        children: [
          L.jsx("button", {
            type: "button",
            className:
              "btn-green-gradient rounded-full px-7 py-3 text-sm font-semibold transition md:px-8 md:py-3.5 md:text-base",
            children: "Start your project",
          }),
          L.jsx("button", {
            type: "button",
            className:
              "liquid-glass rounded-full px-7 py-3 text-sm font-semibold text-heading transition hover:bg-white/50 md:px-8 md:py-3.5 md:text-base",
            children: "View case studies",
          }),
        ],
      }),
      L.jsxs("div", {
        className:
          "pointer-events-none absolute inset-x-0 bottom-24 z-20 flex items-end justify-between px-6 md:bottom-28 md:px-10",
        children: [
          L.jsxs(Nn, {
            delay: 1,
            className:
              "pointer-events-auto flex max-w-[200px] items-start gap-2 text-sm text-heading/80",
            children: [
              L.jsx(Ny, {
                className: "mt-0.5 h-4 w-4 shrink-0 text-heading/60",
                strokeWidth: 1.75,
              }),
              L.jsxs("span", { children: ["1200 Solar Way", L.jsx("br", {}), "Austin, TX 78701"] }),
            ],
          }),
          L.jsx(Nn, {
            delay: 1.05,
            className: "pointer-events-auto absolute left-1/2 -translate-x-1/2",
            children: L.jsx("button", {
              type: "button",
              className:
                "liquid-glass flex h-14 w-14 items-center justify-center rounded-full text-heading transition hover:scale-105 md:h-16 md:w-16",
              "aria-label": "Play overview video",
              children: L.jsx(_y, {
                className: "h-6 w-6 fill-heading/80 text-heading/80 md:h-7 md:w-7",
              }),
            }),
          }),
          L.jsxs(Nn, {
            delay: 1.1,
            className: "pointer-events-auto flex flex-col items-end gap-3",
            children: [
              L.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  L.jsx("div", {
                    className: "flex -space-x-2",
                    children: Ey.map((n) =>
                      L.jsx(
                        "img",
                        {
                          src: n,
                          alt: "",
                          className:
                            "h-9 w-9 rounded-full border-2 border-canvas object-cover md:h-10 md:w-10",
                        },
                        n,
                      ),
                    ),
                  }),
                  L.jsx("span", {
                    className: "text-sm font-semibold text-heading",
                    children: "+37k",
                  }),
                ],
              }),
              L.jsx("div", {
                className: "flex items-center gap-2",
                children: [Vy, Ly, jy, Fy].map((n, i) =>
                  L.jsx(
                    "button",
                    {
                      type: "button",
                      className:
                        "liquid-glass flex h-9 w-9 items-center justify-center rounded-full text-heading/70 transition hover:text-heading",
                      "aria-label": "Social link",
                      children: L.jsx(n, { className: "h-4 w-4", strokeWidth: 1.75 }),
                    },
                    i,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Os({ speedClass: n }) {
  return L.jsx("div", {
    className: `${n} flex w-max shrink-0 items-center`,
    children: Cy.map((i) =>
      L.jsx(
        "span",
        {
          className:
            "mx-8 shrink-0 text-lg font-semibold tracking-tight text-heading/45 md:text-xl",
          children: i,
        },
        i,
      ),
    ),
  });
}
function dw() {
  return L.jsxs("div", {
    className:
      "relative z-10 w-full space-y-3 border-t border-heading/10 bg-canvas/80 py-4 backdrop-blur-sm",
    children: [
      L.jsx("div", {
        className: "overflow-hidden opacity-90",
        children: L.jsxs("div", {
          className: "flex w-max",
          children: [
            L.jsx(Os, { speedClass: "marquee-track-15" }),
            L.jsx("div", {
              "aria-hidden": !0,
              children: L.jsx(Os, { speedClass: "marquee-track-15" }),
            }),
          ],
        }),
      }),
      L.jsx("div", {
        className: "overflow-hidden opacity-70",
        children: L.jsxs("div", {
          className: "flex w-max",
          children: [
            L.jsx(Os, { speedClass: "marquee-track-30" }),
            L.jsx("div", {
              "aria-hidden": !0,
              children: L.jsx(Os, { speedClass: "marquee-track-30" }),
            }),
          ],
        }),
      }),
    ],
  });
}
const hw = [
  { label: "Solutions", path: "renewables" },
  { label: "Projects", path: "strategies" },
  { label: "Impact", path: "photovoltaic" },
  { label: "About", path: "wind" },
];
function pw() {
  return L.jsx(Nn, {
    className: "relative z-20 px-6 pt-5 md:px-10",
    delay: 0.05,
    children: L.jsxs("nav", {
      className:
        "liquid-glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 md:px-8 md:py-3.5",
      children: [
        L.jsx(oi, {
          target: "",
          className: "text-lg font-semibold tracking-tight text-heading md:text-xl",
          children: "Sunfield Energy",
        }),
        L.jsx("div", {
          className: "hidden items-center gap-8 md:flex",
          children: hw.map((n) =>
            L.jsx(
              oi,
              {
                target: n.path,
                className:
                  "text-sm font-medium text-heading/75 transition-colors hover:text-heading",
                children: n.label,
              },
              n.path,
            ),
          ),
        }),
        L.jsxs("div", {
          className: "flex items-center gap-2 sm:gap-3",
          children: [
            L.jsx(oi, {
              target: "packages",
              className:
                "hidden rounded-full px-4 py-2 text-sm font-medium text-heading/80 transition hover:bg-white/40 sm:inline-flex",
              children: "Sign in",
            }),
            L.jsx(oi, {
              target: "packages",
              className:
                "btn-green-gradient rounded-full px-5 py-2 text-sm font-semibold transition sm:px-6 sm:py-2.5",
              children: "Get started",
            }),
          ],
        }),
      ],
    }),
  });
}
const lm = {
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
function Is({ id: n, eyebrow: i, title: s, children: a, theme: c }) {
  const d = lm[c];
  return L.jsx("section", {
    id: n,
    className: `${d.section} scroll-mt-24`,
    children: L.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        L.jsx("p", { className: d.eyebrow, children: i }),
        L.jsx("h2", { className: `${d.title} mt-3`, children: s }),
        L.jsx("div", { className: "mt-8", children: a }),
      ],
    }),
  });
}
function mw({ theme: n = "dark", brand: i = "Product" }) {
  const s = lm[n],
    a = [
      { title: "Fast setup", desc: `Ship ${i} experiences in minutes with guided defaults.` },
      { title: "Built to scale", desc: "Production-ready patterns for teams that iterate daily." },
      { title: "Secure by design", desc: "Privacy-first flows with audit-friendly configuration." },
    ];
  return L.jsxs(L.Fragment, {
    children: [
      L.jsx(Is, {
        id: "features",
        eyebrow: "Features",
        title: "Everything you need in one flow",
        theme: n,
        children: L.jsx("div", {
          className: "grid gap-4 md:grid-cols-3",
          children: a.map((c) =>
            L.jsxs(
              "div",
              {
                className: s.card,
                children: [
                  L.jsx("h3", {
                    className:
                      n === "dark"
                        ? "text-lg font-medium text-white"
                        : "text-lg font-medium text-slate-900",
                    children: c.title,
                  }),
                  L.jsx("p", { className: `${s.body} mt-2 text-sm`, children: c.desc }),
                ],
              },
              c.title,
            ),
          ),
        }),
      }),
      L.jsx(Is, {
        id: "about",
        eyebrow: "About",
        title: `Why teams choose ${i}`,
        theme: n,
        children: L.jsx("p", {
          className: s.body,
          children:
            "We combine cinematic presentation with practical product storytelling—so every visit feels premium while staying effortless to keep current as you grow.",
        }),
      }),
      L.jsx(Is, {
        id: "faq",
        eyebrow: "FAQ",
        title: "Common questions",
        theme: n,
        children: L.jsx("dl", {
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
            L.jsxs(
              "div",
              {
                className: s.card,
                children: [
                  L.jsx("dt", {
                    className:
                      n === "dark" ? "font-medium text-white" : "font-medium text-slate-900",
                    children: c,
                  }),
                  L.jsx("dd", { className: `${s.body} mt-2 text-sm`, children: d }),
                ],
              },
              c,
            ),
          ),
        }),
      }),
      L.jsxs(Is, {
        id: "contact",
        eyebrow: "Contact",
        title: "Talk with our team",
        theme: n,
        children: [
          L.jsx("p", { className: s.body, children: "We respond within one business day." }),
          L.jsx("a", {
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
function gw() {
  return L.jsxs("div", {
    className: "relative min-h-screen overflow-x-hidden bg-canvas text-heading",
    children: [
      L.jsxs("div", {
        className: "relative h-screen overflow-hidden",
        children: [
          L.jsx("video", {
            className: "absolute inset-0 h-full w-full object-cover",
            src: Ty,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            "aria-hidden": !0,
          }),
          L.jsx("div", {
            className:
              "pointer-events-none absolute inset-0 bg-gradient-to-b from-canvas/55 via-canvas/25 to-canvas/75",
            "aria-hidden": !0,
          }),
          L.jsxs("div", {
            className: "relative z-10 flex h-full flex-col",
            children: [L.jsx(pw, {}), L.jsx(fw, {}), L.jsx(dw, {})],
          }),
        ],
      }),
      L.jsx(mw, { brand: "Sunfield Energy", theme: "light" }),
    ],
  });
}
const yw = [
  {
    path: "renewables",
    title: "Renewables",
    description: "Solar, wind, and storage programs for communities.",
  },
  {
    path: "strategies",
    title: "Strategies",
    description: "Grid planning and decarbonization roadmaps.",
  },
  {
    path: "photovoltaic",
    title: "Photovoltaic",
    description: "Utility-scale PV design and deployment.",
  },
  { path: "wind", title: "Wind", description: "Onshore and offshore turbine partnerships." },
  {
    path: "packages",
    title: "Packages",
    description: "Bundled energy plans for homes and businesses.",
  },
];
function vw() {
  return (
    Z.useEffect(() => {
      Dh();
    }, []),
    L.jsx(wy, { routes: Py(L.jsx(gw, {}), yw, "light") })
  );
}
dy.createRoot(document.getElementById("root")).render(
  L.jsx(Z.StrictMode, { children: L.jsx(vw, {}) }),
);
