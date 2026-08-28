(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const f of s)
      if (f.type === "childList")
        for (const c of f.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const f = {};
    return (
      s.integrity && (f.integrity = s.integrity),
      s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const f = i(s);
    fetch(s.href, f);
  }
})();
var mu = { exports: {} },
  zi = {},
  _u = { exports: {} },
  ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function Pm() {
  if (nd) return ae;
  nd = 1;
  var p = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function S(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (x && E[x]) || E["@@iterator"]), typeof E == "function" ? E : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    y = {};
  function N(E, M, oe) {
    ((this.props = E), (this.context = M), (this.refs = y), (this.updater = oe || T));
  }
  ((N.prototype.isReactComponent = {}),
    (N.prototype.setState = function (E, M) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, M, "setState");
    }),
    (N.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function L() {}
  L.prototype = N.prototype;
  function D(E, M, oe) {
    ((this.props = E), (this.context = M), (this.refs = y), (this.updater = oe || T));
  }
  var A = (D.prototype = new L());
  ((A.constructor = D), R(A, N.prototype), (A.isPureReactComponent = !0));
  var j = Array.isArray,
    z = Object.prototype.hasOwnProperty,
    Q = { current: null },
    V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(E, M, oe) {
    var re,
      se = {},
      me = null,
      Se = null;
    if (M != null)
      for (re in (M.ref !== void 0 && (Se = M.ref), M.key !== void 0 && (me = "" + M.key), M))
        z.call(M, re) && !V.hasOwnProperty(re) && (se[re] = M[re]);
    var ye = arguments.length - 2;
    if (ye === 1) se.children = oe;
    else if (1 < ye) {
      for (var Pe = Array(ye), vt = 0; vt < ye; vt++) Pe[vt] = arguments[vt + 2];
      se.children = Pe;
    }
    if (E && E.defaultProps)
      for (re in ((ye = E.defaultProps), ye)) se[re] === void 0 && (se[re] = ye[re]);
    return { $$typeof: p, type: E, key: me, ref: Se, props: se, _owner: Q.current };
  }
  function W(E, M) {
    return { $$typeof: p, type: E.type, key: M, ref: E.ref, props: E.props, _owner: E._owner };
  }
  function ee(E) {
    return typeof E == "object" && E !== null && E.$$typeof === p;
  }
  function ge(E) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (oe) {
        return M[oe];
      })
    );
  }
  var pe = /\/+/g;
  function ue(E, M) {
    return typeof E == "object" && E !== null && E.key != null ? ge("" + E.key) : M.toString(36);
  }
  function ce(E, M, oe, re, se) {
    var me = typeof E;
    (me === "undefined" || me === "boolean") && (E = null);
    var Se = !1;
    if (E === null) Se = !0;
    else
      switch (me) {
        case "string":
        case "number":
          Se = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case p:
            case r:
              Se = !0;
          }
      }
    if (Se)
      return (
        (Se = E),
        (se = se(Se)),
        (E = re === "" ? "." + ue(Se, 0) : re),
        j(se)
          ? ((oe = ""),
            E != null && (oe = E.replace(pe, "$&/") + "/"),
            ce(se, M, oe, "", function (vt) {
              return vt;
            }))
          : se != null &&
            (ee(se) &&
              (se = W(
                se,
                oe +
                  (!se.key || (Se && Se.key === se.key)
                    ? ""
                    : ("" + se.key).replace(pe, "$&/") + "/") +
                  E,
              )),
            M.push(se)),
        1
      );
    if (((Se = 0), (re = re === "" ? "." : re + ":"), j(E)))
      for (var ye = 0; ye < E.length; ye++) {
        me = E[ye];
        var Pe = re + ue(me, ye);
        Se += ce(me, M, oe, Pe, se);
      }
    else if (((Pe = S(E)), typeof Pe == "function"))
      for (E = Pe.call(E), ye = 0; !(me = E.next()).done;)
        ((me = me.value), (Pe = re + ue(me, ye++)), (Se += ce(me, M, oe, Pe, se)));
    else if (me === "object")
      throw (
        (M = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : M) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return Se;
  }
  function ve(E, M, oe) {
    if (E == null) return E;
    var re = [],
      se = 0;
    return (
      ce(E, re, "", "", function (me) {
        return M.call(oe, me, se++);
      }),
      re
    );
  }
  function de(E) {
    if (E._status === -1) {
      var M = E._result;
      ((M = M()),
        M.then(
          function (oe) {
            (E._status === 0 || E._status === -1) && ((E._status = 1), (E._result = oe));
          },
          function (oe) {
            (E._status === 0 || E._status === -1) && ((E._status = 2), (E._result = oe));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = M)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var le = { current: null },
    $ = { transition: null },
    b = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: $, ReactCurrentOwner: Q };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ae.Children = {
      map: ve,
      forEach: function (E, M, oe) {
        ve(
          E,
          function () {
            M.apply(this, arguments);
          },
          oe,
        );
      },
      count: function (E) {
        var M = 0;
        return (
          ve(E, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (E) {
        return (
          ve(E, function (M) {
            return M;
          }) || []
        );
      },
      only: function (E) {
        if (!ee(E))
          throw Error("React.Children.only expected to receive a single React element child.");
        return E;
      },
    }),
    (ae.Component = N),
    (ae.Fragment = i),
    (ae.Profiler = s),
    (ae.PureComponent = D),
    (ae.StrictMode = o),
    (ae.Suspense = m),
    (ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b),
    (ae.act = Y),
    (ae.cloneElement = function (E, M, oe) {
      if (E == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            E +
            ".",
        );
      var re = R({}, E.props),
        se = E.key,
        me = E.ref,
        Se = E._owner;
      if (M != null) {
        if (
          (M.ref !== void 0 && ((me = M.ref), (Se = Q.current)),
          M.key !== void 0 && (se = "" + M.key),
          E.type && E.type.defaultProps)
        )
          var ye = E.type.defaultProps;
        for (Pe in M)
          z.call(M, Pe) &&
            !V.hasOwnProperty(Pe) &&
            (re[Pe] = M[Pe] === void 0 && ye !== void 0 ? ye[Pe] : M[Pe]);
      }
      var Pe = arguments.length - 2;
      if (Pe === 1) re.children = oe;
      else if (1 < Pe) {
        ye = Array(Pe);
        for (var vt = 0; vt < Pe; vt++) ye[vt] = arguments[vt + 2];
        re.children = ye;
      }
      return { $$typeof: p, type: E.type, key: se, ref: me, props: re, _owner: Se };
    }),
    (ae.createContext = function (E) {
      return (
        (E = {
          $$typeof: c,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (E.Provider = { $$typeof: f, _context: E }),
        (E.Consumer = E)
      );
    }),
    (ae.createElement = H),
    (ae.createFactory = function (E) {
      var M = H.bind(null, E);
      return ((M.type = E), M);
    }),
    (ae.createRef = function () {
      return { current: null };
    }),
    (ae.forwardRef = function (E) {
      return { $$typeof: d, render: E };
    }),
    (ae.isValidElement = ee),
    (ae.lazy = function (E) {
      return { $$typeof: g, _payload: { _status: -1, _result: E }, _init: de };
    }),
    (ae.memo = function (E, M) {
      return { $$typeof: _, type: E, compare: M === void 0 ? null : M };
    }),
    (ae.startTransition = function (E) {
      var M = $.transition;
      $.transition = {};
      try {
        E();
      } finally {
        $.transition = M;
      }
    }),
    (ae.unstable_act = Y),
    (ae.useCallback = function (E, M) {
      return le.current.useCallback(E, M);
    }),
    (ae.useContext = function (E) {
      return le.current.useContext(E);
    }),
    (ae.useDebugValue = function () {}),
    (ae.useDeferredValue = function (E) {
      return le.current.useDeferredValue(E);
    }),
    (ae.useEffect = function (E, M) {
      return le.current.useEffect(E, M);
    }),
    (ae.useId = function () {
      return le.current.useId();
    }),
    (ae.useImperativeHandle = function (E, M, oe) {
      return le.current.useImperativeHandle(E, M, oe);
    }),
    (ae.useInsertionEffect = function (E, M) {
      return le.current.useInsertionEffect(E, M);
    }),
    (ae.useLayoutEffect = function (E, M) {
      return le.current.useLayoutEffect(E, M);
    }),
    (ae.useMemo = function (E, M) {
      return le.current.useMemo(E, M);
    }),
    (ae.useReducer = function (E, M, oe) {
      return le.current.useReducer(E, M, oe);
    }),
    (ae.useRef = function (E) {
      return le.current.useRef(E);
    }),
    (ae.useState = function (E) {
      return le.current.useState(E);
    }),
    (ae.useSyncExternalStore = function (E, M, oe) {
      return le.current.useSyncExternalStore(E, M, oe);
    }),
    (ae.useTransition = function () {
      return le.current.useTransition();
    }),
    (ae.version = "18.3.1"),
    ae
  );
}
var rd;
function Wu() {
  return (rd || ((rd = 1), (_u.exports = Pm())), _u.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id;
function Nm() {
  if (id) return zi;
  id = 1;
  var p = Wu(),
    r = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    s = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, m, _) {
    var g,
      x = {},
      S = null,
      T = null;
    (_ !== void 0 && (S = "" + _),
      m.key !== void 0 && (S = "" + m.key),
      m.ref !== void 0 && (T = m.ref));
    for (g in m) o.call(m, g) && !f.hasOwnProperty(g) && (x[g] = m[g]);
    if (d && d.defaultProps) for (g in ((m = d.defaultProps), m)) x[g] === void 0 && (x[g] = m[g]);
    return { $$typeof: r, type: d, key: S, ref: T, props: x, _owner: s.current };
  }
  return ((zi.Fragment = i), (zi.jsx = c), (zi.jsxs = c), zi);
}
var ld;
function Om() {
  return (ld || ((ld = 1), (mu.exports = Nm())), mu.exports);
}
var Z = Om(),
  ct = Wu(),
  ro = {},
  gu = { exports: {} },
  ft = {},
  vu = { exports: {} },
  yu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var od;
function Rm() {
  return (
    od ||
      ((od = 1),
      (function (p) {
        function r($, b) {
          var Y = $.length;
          $.push(b);
          e: for (; 0 < Y;) {
            var E = (Y - 1) >>> 1,
              M = $[E];
            if (0 < s(M, b)) (($[E] = b), ($[Y] = M), (Y = E));
            else break e;
          }
        }
        function i($) {
          return $.length === 0 ? null : $[0];
        }
        function o($) {
          if ($.length === 0) return null;
          var b = $[0],
            Y = $.pop();
          if (Y !== b) {
            $[0] = Y;
            e: for (var E = 0, M = $.length, oe = M >>> 1; E < oe;) {
              var re = 2 * (E + 1) - 1,
                se = $[re],
                me = re + 1,
                Se = $[me];
              if (0 > s(se, Y))
                me < M && 0 > s(Se, se)
                  ? (($[E] = Se), ($[me] = Y), (E = me))
                  : (($[E] = se), ($[re] = Y), (E = re));
              else if (me < M && 0 > s(Se, Y)) (($[E] = Se), ($[me] = Y), (E = me));
              else break e;
            }
          }
          return b;
        }
        function s($, b) {
          var Y = $.sortIndex - b.sortIndex;
          return Y !== 0 ? Y : $.id - b.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var f = performance;
          p.unstable_now = function () {
            return f.now();
          };
        } else {
          var c = Date,
            d = c.now();
          p.unstable_now = function () {
            return c.now() - d;
          };
        }
        var m = [],
          _ = [],
          g = 1,
          x = null,
          S = 3,
          T = !1,
          R = !1,
          y = !1,
          N = typeof setTimeout == "function" ? setTimeout : null,
          L = typeof clearTimeout == "function" ? clearTimeout : null,
          D = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function A($) {
          for (var b = i(_); b !== null;) {
            if (b.callback === null) o(_);
            else if (b.startTime <= $) (o(_), (b.sortIndex = b.expirationTime), r(m, b));
            else break;
            b = i(_);
          }
        }
        function j($) {
          if (((y = !1), A($), !R))
            if (i(m) !== null) ((R = !0), de(z));
            else {
              var b = i(_);
              b !== null && le(j, b.startTime - $);
            }
        }
        function z($, b) {
          ((R = !1), y && ((y = !1), L(H), (H = -1)), (T = !0));
          var Y = S;
          try {
            for (A(b), x = i(m); x !== null && (!(x.expirationTime > b) || ($ && !ge()));) {
              var E = x.callback;
              if (typeof E == "function") {
                ((x.callback = null), (S = x.priorityLevel));
                var M = E(x.expirationTime <= b);
                ((b = p.unstable_now()),
                  typeof M == "function" ? (x.callback = M) : x === i(m) && o(m),
                  A(b));
              } else o(m);
              x = i(m);
            }
            if (x !== null) var oe = !0;
            else {
              var re = i(_);
              (re !== null && le(j, re.startTime - b), (oe = !1));
            }
            return oe;
          } finally {
            ((x = null), (S = Y), (T = !1));
          }
        }
        var Q = !1,
          V = null,
          H = -1,
          W = 5,
          ee = -1;
        function ge() {
          return !(p.unstable_now() - ee < W);
        }
        function pe() {
          if (V !== null) {
            var $ = p.unstable_now();
            ee = $;
            var b = !0;
            try {
              b = V(!0, $);
            } finally {
              b ? ue() : ((Q = !1), (V = null));
            }
          } else Q = !1;
        }
        var ue;
        if (typeof D == "function")
          ue = function () {
            D(pe);
          };
        else if (typeof MessageChannel < "u") {
          var ce = new MessageChannel(),
            ve = ce.port2;
          ((ce.port1.onmessage = pe),
            (ue = function () {
              ve.postMessage(null);
            }));
        } else
          ue = function () {
            N(pe, 0);
          };
        function de($) {
          ((V = $), Q || ((Q = !0), ue()));
        }
        function le($, b) {
          H = N(function () {
            $(p.unstable_now());
          }, b);
        }
        ((p.unstable_IdlePriority = 5),
          (p.unstable_ImmediatePriority = 1),
          (p.unstable_LowPriority = 4),
          (p.unstable_NormalPriority = 3),
          (p.unstable_Profiling = null),
          (p.unstable_UserBlockingPriority = 2),
          (p.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (p.unstable_continueExecution = function () {
            R || T || ((R = !0), de(z));
          }),
          (p.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (W = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (p.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (p.unstable_getFirstCallbackNode = function () {
            return i(m);
          }),
          (p.unstable_next = function ($) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var b = 3;
                break;
              default:
                b = S;
            }
            var Y = S;
            S = b;
            try {
              return $();
            } finally {
              S = Y;
            }
          }),
          (p.unstable_pauseExecution = function () {}),
          (p.unstable_requestPaint = function () {}),
          (p.unstable_runWithPriority = function ($, b) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var Y = S;
            S = $;
            try {
              return b();
            } finally {
              S = Y;
            }
          }),
          (p.unstable_scheduleCallback = function ($, b, Y) {
            var E = p.unstable_now();
            switch (
              (typeof Y == "object" && Y !== null
                ? ((Y = Y.delay), (Y = typeof Y == "number" && 0 < Y ? E + Y : E))
                : (Y = E),
              $)
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
              (M = Y + M),
              ($ = {
                id: g++,
                callback: b,
                priorityLevel: $,
                startTime: Y,
                expirationTime: M,
                sortIndex: -1,
              }),
              Y > E
                ? (($.sortIndex = Y),
                  r(_, $),
                  i(m) === null && $ === i(_) && (y ? (L(H), (H = -1)) : (y = !0), le(j, Y - E)))
                : (($.sortIndex = M), r(m, $), R || T || ((R = !0), de(z))),
              $
            );
          }),
          (p.unstable_shouldYield = ge),
          (p.unstable_wrapCallback = function ($) {
            var b = S;
            return function () {
              var Y = S;
              S = b;
              try {
                return $.apply(this, arguments);
              } finally {
                S = Y;
              }
            };
          }));
      })(yu)),
    yu
  );
}
var sd;
function zm() {
  return (sd || ((sd = 1), (vu.exports = Rm())), vu.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud;
function Mm() {
  if (ud) return ft;
  ud = 1;
  var p = Wu(),
    r = zm();
  function i(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var o = new Set(),
    s = {};
  function f(e, t) {
    (c(e, t), c(e + "Capture", t));
  }
  function c(e, t) {
    for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
  }
  var d = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    _ =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    x = {};
  function S(e) {
    return m.call(x, e) ? !0 : m.call(g, e) ? !1 : _.test(e) ? (x[e] = !0) : ((g[e] = !0), !1);
  }
  function T(e, t, n, l) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function R(e, t, n, l) {
    if (t === null || typeof t > "u" || T(e, t, n, l)) return !0;
    if (l) return !1;
    if (n !== null)
      switch (n.type) {
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
  function y(e, t, n, l, u, a, h) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = l),
      (this.attributeNamespace = u),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = a),
      (this.removeEmptyString = h));
  }
  var N = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      N[e] = new y(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      N[t] = new y(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      N[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        N[e] = new y(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        N[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      N[e] = new y(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      N[e] = new y(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      N[e] = new y(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      N[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var L = /[\-:]([a-z])/g;
  function D(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(L, D);
      N[t] = new y(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(L, D);
        N[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(L, D);
      N[t] = new y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      N[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (N.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      N[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function A(e, t, n, l) {
    var u = N.hasOwnProperty(t) ? N[t] : null;
    (u !== null
      ? u.type !== 0
      : l || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (R(t, n, u, l) && (n = null),
      l || u === null
        ? S(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : u.mustUseProperty
          ? (e[u.propertyName] = n === null ? (u.type === 3 ? !1 : "") : n)
          : ((t = u.attributeName),
            (l = u.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((u = u.type),
                (n = u === 3 || (u === 4 && n === !0) ? "" : "" + n),
                l ? e.setAttributeNS(l, t, n) : e.setAttribute(t, n))));
  }
  var j = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    z = Symbol.for("react.element"),
    Q = Symbol.for("react.portal"),
    V = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    W = Symbol.for("react.profiler"),
    ee = Symbol.for("react.provider"),
    ge = Symbol.for("react.context"),
    pe = Symbol.for("react.forward_ref"),
    ue = Symbol.for("react.suspense"),
    ce = Symbol.for("react.suspense_list"),
    ve = Symbol.for("react.memo"),
    de = Symbol.for("react.lazy"),
    le = Symbol.for("react.offscreen"),
    $ = Symbol.iterator;
  function b(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = ($ && e[$]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var Y = Object.assign,
    E;
  function M(e) {
    if (E === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        E = (t && t[1]) || "";
      }
    return (
      `
` +
      E +
      e
    );
  }
  var oe = !1;
  function re(e, t) {
    if (!e || oe) return "";
    oe = !0;
    var n = Error.prepareStackTrace;
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
          } catch (O) {
            var l = O;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (O) {
            l = O;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (O) {
          l = O;
        }
        e();
      }
    } catch (O) {
      if (O && l && typeof O.stack == "string") {
        for (
          var u = O.stack.split(`
`),
            a = l.stack.split(`
`),
            h = u.length - 1,
            v = a.length - 1;
          1 <= h && 0 <= v && u[h] !== a[v];
        )
          v--;
        for (; 1 <= h && 0 <= v; h--, v--)
          if (u[h] !== a[v]) {
            if (h !== 1 || v !== 1)
              do
                if ((h--, v--, 0 > v || u[h] !== a[v])) {
                  var w =
                    `
` + u[h].replace(" at new ", " at ");
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
      ((oe = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function se(e) {
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
        return ((e = re(e.type, !1)), e);
      case 11:
        return ((e = re(e.type.render, !1)), e);
      case 1:
        return ((e = re(e.type, !0)), e);
      default:
        return "";
    }
  }
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case V:
        return "Fragment";
      case Q:
        return "Portal";
      case W:
        return "Profiler";
      case H:
        return "StrictMode";
      case ue:
        return "Suspense";
      case ce:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ge:
          return (e.displayName || "Context") + ".Consumer";
        case ee:
          return (e._context.displayName || "Context") + ".Provider";
        case pe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ve:
          return ((t = e.displayName || null), t !== null ? t : me(e.type) || "Memo");
        case de:
          ((t = e._payload), (e = e._init));
          try {
            return me(e(t));
          } catch {}
      }
    return null;
  }
  function Se(e) {
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
        return me(t);
      case 8:
        return t === H ? "StrictMode" : "Mode";
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
  function Pe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function vt(e) {
    var t = Pe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var u = n.get,
        a = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (h) {
            ((l = "" + h), a.call(this, h));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (h) {
            l = "" + h;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Xi(e) {
    e._valueTracker || (e._valueTracker = vt(e));
  }
  function sa(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = Pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Gi(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ko(e, t) {
    var n = t.checked;
    return Y({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ua(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      l = t.checked != null ? t.checked : t.defaultChecked;
    ((n = ye(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function aa(e, t) {
    ((t = t.checked), t != null && A(e, "checked", t, !1));
  }
  function So(e, t) {
    aa(e, t);
    var n = ye(t.value),
      l = t.type;
    if (n != null)
      l === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Eo(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Eo(e, t.type, ye(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function fa(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type;
      if (!((l !== "submit" && l !== "reset") || (t.value !== void 0 && t.value !== null))) return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Eo(e, t, n) {
    (t !== "number" || Gi(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Yr = Array.isArray;
  function fr(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < n.length; u++) t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        ((u = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== u && (e[n].selected = u),
          u && l && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + ye(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          ((e[u].selected = !0), l && (e[u].defaultSelected = !0));
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function To(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return Y({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ca(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(i(92));
        if (Yr(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: ye(n) };
  }
  function da(e, t) {
    var n = ye(t.value),
      l = ye(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      l != null && (e.defaultValue = "" + l));
  }
  function pa(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ha(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Co(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ha(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ki,
    ma = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, l, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, l, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (
          Ki = Ki || document.createElement("div"),
            Ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ki.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Xr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gr = {
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
    zp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Gr).forEach(function (e) {
    zp.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gr[t] = Gr[e]));
    });
  });
  function _a(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Gr.hasOwnProperty(e) && Gr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function ga(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var l = n.indexOf("--") === 0,
          u = _a(n, t[n], l);
        (n === "float" && (n = "cssFloat"), l ? e.setProperty(n, u) : (e[n] = u));
      }
  }
  var Mp = Y(
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
  function Po(e, t) {
    if (t) {
      if (Mp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function No(e, t) {
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
  var Oo = null;
  function Ro(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var zo = null,
    cr = null,
    dr = null;
  function va(e) {
    if ((e = _i(e))) {
      if (typeof zo != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = vl(t)), zo(e.stateNode, e.type, t));
    }
  }
  function ya(e) {
    cr ? (dr ? dr.push(e) : (dr = [e])) : (cr = e);
  }
  function wa() {
    if (cr) {
      var e = cr,
        t = dr;
      if (((dr = cr = null), va(e), t)) for (e = 0; e < t.length; e++) va(t[e]);
    }
  }
  function xa(e, t) {
    return e(t);
  }
  function ka() {}
  var Mo = !1;
  function Sa(e, t, n) {
    if (Mo) return e(t, n);
    Mo = !0;
    try {
      return xa(e, t, n);
    } finally {
      ((Mo = !1), (cr !== null || dr !== null) && (ka(), wa()));
    }
  }
  function Kr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = vl(n);
    if (l === null) return null;
    n = l[t];
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
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var Do = !1;
  if (d)
    try {
      var qr = {};
      (Object.defineProperty(qr, "passive", {
        get: function () {
          Do = !0;
        },
      }),
        window.addEventListener("test", qr, qr),
        window.removeEventListener("test", qr, qr));
    } catch {
      Do = !1;
    }
  function Dp(e, t, n, l, u, a, h, v, w) {
    var O = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, O);
    } catch (I) {
      this.onError(I);
    }
  }
  var Zr = !1,
    qi = null,
    Zi = !1,
    Lo = null,
    Lp = {
      onError: function (e) {
        ((Zr = !0), (qi = e));
      },
    };
  function Fp(e, t, n, l, u, a, h, v, w) {
    ((Zr = !1), (qi = null), Dp.apply(Lp, arguments));
  }
  function Ip(e, t, n, l, u, a, h, v, w) {
    if ((Fp.apply(this, arguments), Zr)) {
      if (Zr) {
        var O = qi;
        ((Zr = !1), (qi = null));
      } else throw Error(i(198));
      Zi || ((Zi = !0), (Lo = O));
    }
  }
  function Wn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ea(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Ta(e) {
    if (Wn(e) !== e) throw Error(i(188));
  }
  function Ap(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Wn(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ;) {
      var u = n.return;
      if (u === null) break;
      var a = u.alternate;
      if (a === null) {
        if (((l = u.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === a.child) {
        for (a = u.child; a;) {
          if (a === n) return (Ta(u), e);
          if (a === l) return (Ta(u), t);
          a = a.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== l.return) ((n = u), (l = a));
      else {
        for (var h = !1, v = u.child; v;) {
          if (v === n) {
            ((h = !0), (n = u), (l = a));
            break;
          }
          if (v === l) {
            ((h = !0), (l = u), (n = a));
            break;
          }
          v = v.sibling;
        }
        if (!h) {
          for (v = a.child; v;) {
            if (v === n) {
              ((h = !0), (n = a), (l = u));
              break;
            }
            if (v === l) {
              ((h = !0), (l = a), (n = u));
              break;
            }
            v = v.sibling;
          }
          if (!h) throw Error(i(189));
        }
      }
      if (n.alternate !== l) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ca(e) {
    return ((e = Ap(e)), e !== null ? Pa(e) : null);
  }
  function Pa(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Pa(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Na = r.unstable_scheduleCallback,
    Oa = r.unstable_cancelCallback,
    jp = r.unstable_shouldYield,
    Up = r.unstable_requestPaint,
    Ae = r.unstable_now,
    Vp = r.unstable_getCurrentPriorityLevel,
    Fo = r.unstable_ImmediatePriority,
    Ra = r.unstable_UserBlockingPriority,
    Ji = r.unstable_NormalPriority,
    Bp = r.unstable_LowPriority,
    za = r.unstable_IdlePriority,
    bi = null,
    Yt = null;
  function Wp(e) {
    if (Yt && typeof Yt.onCommitFiberRoot == "function")
      try {
        Yt.onCommitFiberRoot(bi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Ut = Math.clz32 ? Math.clz32 : Qp,
    $p = Math.log,
    Hp = Math.LN2;
  function Qp(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - (($p(e) / Hp) | 0)) | 0);
  }
  var el = 64,
    tl = 4194304;
  function Jr(e) {
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
  function nl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      a = e.pingedLanes,
      h = n & 268435455;
    if (h !== 0) {
      var v = h & ~u;
      v !== 0 ? (l = Jr(v)) : ((a &= h), a !== 0 && (l = Jr(a)));
    } else ((h = n & ~u), h !== 0 ? (l = Jr(h)) : a !== 0 && (l = Jr(a)));
    if (l === 0) return 0;
    if (
      t !== 0 &&
      t !== l &&
      (t & u) === 0 &&
      ((u = l & -l), (a = t & -t), u >= a || (u === 16 && (a & 4194240) !== 0))
    )
      return t;
    if (((l & 4) !== 0 && (l |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= l; 0 < t;)
        ((n = 31 - Ut(t)), (u = 1 << n), (l |= e[n]), (t &= ~u));
    return l;
  }
  function Yp(e, t) {
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
  function Xp(e, t) {
    for (
      var n = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, a = e.pendingLanes;
      0 < a;
    ) {
      var h = 31 - Ut(a),
        v = 1 << h,
        w = u[h];
      (w === -1
        ? ((v & n) === 0 || (v & l) !== 0) && (u[h] = Yp(v, t))
        : w <= t && (e.expiredLanes |= v),
        (a &= ~v));
    }
  }
  function Io(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Ma() {
    var e = el;
    return ((el <<= 1), (el & 4194240) === 0 && (el = 64), e);
  }
  function Ao(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function br(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Ut(t)),
      (e[t] = n));
  }
  function Gp(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
      var u = 31 - Ut(n),
        a = 1 << u;
      ((t[u] = 0), (l[u] = -1), (e[u] = -1), (n &= ~a));
    }
  }
  function jo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var l = 31 - Ut(n),
        u = 1 << l;
      ((u & t) | (e[l] & t) && (e[l] |= t), (n &= ~u));
    }
  }
  var we = 0;
  function Da(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var La,
    Uo,
    Fa,
    Ia,
    Aa,
    Vo = !1,
    rl = [],
    hn = null,
    mn = null,
    _n = null,
    ei = new Map(),
    ti = new Map(),
    gn = [],
    Kp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function ja(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        hn = null;
        break;
      case "dragenter":
      case "dragleave":
        mn = null;
        break;
      case "mouseover":
      case "mouseout":
        _n = null;
        break;
      case "pointerover":
      case "pointerout":
        ei.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ti.delete(t.pointerId);
    }
  }
  function ni(e, t, n, l, u, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: a,
          targetContainers: [u],
        }),
        t !== null && ((t = _i(t)), t !== null && Uo(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function qp(e, t, n, l, u) {
    switch (t) {
      case "focusin":
        return ((hn = ni(hn, e, t, n, l, u)), !0);
      case "dragenter":
        return ((mn = ni(mn, e, t, n, l, u)), !0);
      case "mouseover":
        return ((_n = ni(_n, e, t, n, l, u)), !0);
      case "pointerover":
        var a = u.pointerId;
        return (ei.set(a, ni(ei.get(a) || null, e, t, n, l, u)), !0);
      case "gotpointercapture":
        return ((a = u.pointerId), ti.set(a, ni(ti.get(a) || null, e, t, n, l, u)), !0);
    }
    return !1;
  }
  function Ua(e) {
    var t = $n(e.target);
    if (t !== null) {
      var n = Wn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ea(n)), t !== null)) {
            ((e.blockedOn = t),
              Aa(e.priority, function () {
                Fa(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function il(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = Wo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Oo = l), n.target.dispatchEvent(l), (Oo = null));
      } else return ((t = _i(n)), t !== null && Uo(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Va(e, t, n) {
    il(e) && n.delete(t);
  }
  function Zp() {
    ((Vo = !1),
      hn !== null && il(hn) && (hn = null),
      mn !== null && il(mn) && (mn = null),
      _n !== null && il(_n) && (_n = null),
      ei.forEach(Va),
      ti.forEach(Va));
  }
  function ri(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Vo || ((Vo = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Zp)));
  }
  function ii(e) {
    function t(u) {
      return ri(u, e);
    }
    if (0 < rl.length) {
      ri(rl[0], e);
      for (var n = 1; n < rl.length; n++) {
        var l = rl[n];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      hn !== null && ri(hn, e),
        mn !== null && ri(mn, e),
        _n !== null && ri(_n, e),
        ei.forEach(t),
        ti.forEach(t),
        n = 0;
      n < gn.length;
      n++
    )
      ((l = gn[n]), l.blockedOn === e && (l.blockedOn = null));
    for (; 0 < gn.length && ((n = gn[0]), n.blockedOn === null);)
      (Ua(n), n.blockedOn === null && gn.shift());
  }
  var pr = j.ReactCurrentBatchConfig,
    ll = !0;
  function Jp(e, t, n, l) {
    var u = we,
      a = pr.transition;
    pr.transition = null;
    try {
      ((we = 1), Bo(e, t, n, l));
    } finally {
      ((we = u), (pr.transition = a));
    }
  }
  function bp(e, t, n, l) {
    var u = we,
      a = pr.transition;
    pr.transition = null;
    try {
      ((we = 4), Bo(e, t, n, l));
    } finally {
      ((we = u), (pr.transition = a));
    }
  }
  function Bo(e, t, n, l) {
    if (ll) {
      var u = Wo(e, t, n, l);
      if (u === null) (ls(e, t, l, ol, n), ja(e, l));
      else if (qp(u, e, t, n, l)) l.stopPropagation();
      else if ((ja(e, l), t & 4 && -1 < Kp.indexOf(e))) {
        for (; u !== null;) {
          var a = _i(u);
          if (
            (a !== null && La(a), (a = Wo(e, t, n, l)), a === null && ls(e, t, l, ol, n), a === u)
          )
            break;
          u = a;
        }
        u !== null && l.stopPropagation();
      } else ls(e, t, l, null, n);
    }
  }
  var ol = null;
  function Wo(e, t, n, l) {
    if (((ol = null), (e = Ro(l)), (e = $n(e)), e !== null))
      if (((t = Wn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ea(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((ol = e), null);
  }
  function Ba(e) {
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
        switch (Vp()) {
          case Fo:
            return 1;
          case Ra:
            return 4;
          case Ji:
          case Bp:
            return 16;
          case za:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var vn = null,
    $o = null,
    sl = null;
  function Wa() {
    if (sl) return sl;
    var e,
      t = $o,
      n = t.length,
      l,
      u = "value" in vn ? vn.value : vn.textContent,
      a = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++);
    var h = n - e;
    for (l = 1; l <= h && t[n - l] === u[a - l]; l++);
    return (sl = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function ul(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function al() {
    return !0;
  }
  function $a() {
    return !1;
  }
  function yt(e) {
    function t(n, l, u, a, h) {
      ((this._reactName = n),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = a),
        (this.target = h),
        (this.currentTarget = null));
      for (var v in e) e.hasOwnProperty(v) && ((n = e[v]), (this[v] = n ? n(a) : a[v]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? al
          : $a),
        (this.isPropagationStopped = $a),
        this
      );
    }
    return (
      Y(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = al));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = al));
        },
        persist: function () {},
        isPersistent: al,
      }),
      t
    );
  }
  var hr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ho = yt(hr),
    li = Y({}, hr, { view: 0, detail: 0 }),
    eh = yt(li),
    Qo,
    Yo,
    oi,
    fl = Y({}, li, {
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
      getModifierState: Go,
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
          : (e !== oi &&
              (oi && e.type === "mousemove"
                ? ((Qo = e.screenX - oi.screenX), (Yo = e.screenY - oi.screenY))
                : (Yo = Qo = 0),
              (oi = e)),
            Qo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Yo;
      },
    }),
    Ha = yt(fl),
    th = Y({}, fl, { dataTransfer: 0 }),
    nh = yt(th),
    rh = Y({}, li, { relatedTarget: 0 }),
    Xo = yt(rh),
    ih = Y({}, hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lh = yt(ih),
    oh = Y({}, hr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    sh = yt(oh),
    uh = Y({}, hr, { data: 0 }),
    Qa = yt(uh),
    ah = {
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
    fh = {
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
    ch = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function dh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ch[e]) ? !!t[e] : !1;
  }
  function Go() {
    return dh;
  }
  var ph = Y({}, li, {
      key: function (e) {
        if (e.key) {
          var t = ah[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ul(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? fh[e.keyCode] || "Unidentified"
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
      getModifierState: Go,
      charCode: function (e) {
        return e.type === "keypress" ? ul(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ul(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    hh = yt(ph),
    mh = Y({}, fl, {
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
    Ya = yt(mh),
    _h = Y({}, li, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Go,
    }),
    gh = yt(_h),
    vh = Y({}, hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yh = yt(vh),
    wh = Y({}, fl, {
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
    xh = yt(wh),
    kh = [9, 13, 27, 32],
    Ko = d && "CompositionEvent" in window,
    si = null;
  d && "documentMode" in document && (si = document.documentMode);
  var Sh = d && "TextEvent" in window && !si,
    Xa = d && (!Ko || (si && 8 < si && 11 >= si)),
    Ga = " ",
    Ka = !1;
  function qa(e, t) {
    switch (e) {
      case "keyup":
        return kh.indexOf(t.keyCode) !== -1;
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
  function Za(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var mr = !1;
  function Eh(e, t) {
    switch (e) {
      case "compositionend":
        return Za(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ka = !0), Ga);
      case "textInput":
        return ((e = t.data), e === Ga && Ka ? null : e);
      default:
        return null;
    }
  }
  function Th(e, t) {
    if (mr)
      return e === "compositionend" || (!Ko && qa(e, t))
        ? ((e = Wa()), (sl = $o = vn = null), (mr = !1), e)
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
        return Xa && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ch = {
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
  function Ja(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ch[e.type] : t === "textarea";
  }
  function ba(e, t, n, l) {
    (ya(l),
      (t = ml(t, "onChange")),
      0 < t.length &&
        ((n = new Ho("onChange", "change", null, n, l)), e.push({ event: n, listeners: t })));
  }
  var ui = null,
    ai = null;
  function Ph(e) {
    vf(e, 0);
  }
  function cl(e) {
    var t = wr(e);
    if (sa(t)) return e;
  }
  function Nh(e, t) {
    if (e === "change") return t;
  }
  var ef = !1;
  if (d) {
    var qo;
    if (d) {
      var Zo = "oninput" in document;
      if (!Zo) {
        var tf = document.createElement("div");
        (tf.setAttribute("oninput", "return;"), (Zo = typeof tf.oninput == "function"));
      }
      qo = Zo;
    } else qo = !1;
    ef = qo && (!document.documentMode || 9 < document.documentMode);
  }
  function nf() {
    ui && (ui.detachEvent("onpropertychange", rf), (ai = ui = null));
  }
  function rf(e) {
    if (e.propertyName === "value" && cl(ai)) {
      var t = [];
      (ba(t, ai, e, Ro(e)), Sa(Ph, t));
    }
  }
  function Oh(e, t, n) {
    e === "focusin"
      ? (nf(), (ui = t), (ai = n), ui.attachEvent("onpropertychange", rf))
      : e === "focusout" && nf();
  }
  function Rh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return cl(ai);
  }
  function zh(e, t) {
    if (e === "click") return cl(t);
  }
  function Mh(e, t) {
    if (e === "input" || e === "change") return cl(t);
  }
  function Dh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Vt = typeof Object.is == "function" ? Object.is : Dh;
  function fi(e, t) {
    if (Vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!m.call(t, u) || !Vt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function lf(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function of(e, t) {
    var n = lf(e);
    e = 0;
    for (var l; n;) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t)) return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = lf(n);
    }
  }
  function sf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? sf(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function uf() {
    for (var e = window, t = Gi(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Gi(e.document);
    }
    return t;
  }
  function Jo(e) {
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
  function Lh(e) {
    var t = uf(),
      n = e.focusedElem,
      l = e.selectionRange;
    if (t !== n && n && n.ownerDocument && sf(n.ownerDocument.documentElement, n)) {
      if (l !== null && Jo(n)) {
        if (((t = l.start), (e = l.end), e === void 0 && (e = t), "selectionStart" in n))
          ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var u = n.textContent.length,
            a = Math.min(l.start, u);
          ((l = l.end === void 0 ? a : Math.min(l.end, u)),
            !e.extend && a > l && ((u = l), (l = a), (a = u)),
            (u = of(n, a)));
          var h = of(n, l);
          u &&
            h &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== h.node ||
              e.focusOffset !== h.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            a > l
              ? (e.addRange(t), e.extend(h.node, h.offset))
              : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode);)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var Fh = d && "documentMode" in document && 11 >= document.documentMode,
    _r = null,
    bo = null,
    ci = null,
    es = !1;
  function af(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    es ||
      _r == null ||
      _r !== Gi(l) ||
      ((l = _r),
      "selectionStart" in l && Jo(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (ci && fi(ci, l)) ||
        ((ci = l),
        (l = ml(bo, "onSelect")),
        0 < l.length &&
          ((t = new Ho("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = _r))));
  }
  function dl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var gr = {
      animationend: dl("Animation", "AnimationEnd"),
      animationiteration: dl("Animation", "AnimationIteration"),
      animationstart: dl("Animation", "AnimationStart"),
      transitionend: dl("Transition", "TransitionEnd"),
    },
    ts = {},
    ff = {};
  d &&
    ((ff = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete gr.animationend.animation,
      delete gr.animationiteration.animation,
      delete gr.animationstart.animation),
    "TransitionEvent" in window || delete gr.transitionend.transition);
  function pl(e) {
    if (ts[e]) return ts[e];
    if (!gr[e]) return e;
    var t = gr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ff) return (ts[e] = t[n]);
    return e;
  }
  var cf = pl("animationend"),
    df = pl("animationiteration"),
    pf = pl("animationstart"),
    hf = pl("transitionend"),
    mf = new Map(),
    _f =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function yn(e, t) {
    (mf.set(e, t), f(t, [e]));
  }
  for (var ns = 0; ns < _f.length; ns++) {
    var rs = _f[ns],
      Ih = rs.toLowerCase(),
      Ah = rs[0].toUpperCase() + rs.slice(1);
    yn(Ih, "on" + Ah);
  }
  (yn(cf, "onAnimationEnd"),
    yn(df, "onAnimationIteration"),
    yn(pf, "onAnimationStart"),
    yn("dblclick", "onDoubleClick"),
    yn("focusin", "onFocus"),
    yn("focusout", "onBlur"),
    yn(hf, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    f(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    f(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    f(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var di =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    jh = new Set("cancel close invalid load scroll toggle".split(" ").concat(di));
  function gf(e, t, n) {
    var l = e.type || "unknown-event";
    ((e.currentTarget = n), Ip(l, t, void 0, e), (e.currentTarget = null));
  }
  function vf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        u = l.event;
      l = l.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var h = l.length - 1; 0 <= h; h--) {
            var v = l[h],
              w = v.instance,
              O = v.currentTarget;
            if (((v = v.listener), w !== a && u.isPropagationStopped())) break e;
            (gf(u, v, O), (a = w));
          }
        else
          for (h = 0; h < l.length; h++) {
            if (
              ((v = l[h]),
              (w = v.instance),
              (O = v.currentTarget),
              (v = v.listener),
              w !== a && u.isPropagationStopped())
            )
              break e;
            (gf(u, v, O), (a = w));
          }
      }
    }
    if (Zi) throw ((e = Lo), (Zi = !1), (Lo = null), e);
  }
  function Te(e, t) {
    var n = t[cs];
    n === void 0 && (n = t[cs] = new Set());
    var l = e + "__bubble";
    n.has(l) || (yf(t, e, 2, !1), n.add(l));
  }
  function is(e, t, n) {
    var l = 0;
    (t && (l |= 4), yf(n, e, l, t));
  }
  var hl = "_reactListening" + Math.random().toString(36).slice(2);
  function pi(e) {
    if (!e[hl]) {
      ((e[hl] = !0),
        o.forEach(function (n) {
          n !== "selectionchange" && (jh.has(n) || is(n, !1, e), is(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[hl] || ((t[hl] = !0), is("selectionchange", !1, t));
    }
  }
  function yf(e, t, n, l) {
    switch (Ba(t)) {
      case 1:
        var u = Jp;
        break;
      case 4:
        u = bp;
        break;
      default:
        u = Bo;
    }
    ((n = u.bind(null, t, n, e)),
      (u = void 0),
      !Do || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: u })
          : e.addEventListener(t, n, !0)
        : u !== void 0
          ? e.addEventListener(t, n, { passive: u })
          : e.addEventListener(t, n, !1));
  }
  function ls(e, t, n, l, u) {
    var a = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var h = l.tag;
        if (h === 3 || h === 4) {
          var v = l.stateNode.containerInfo;
          if (v === u || (v.nodeType === 8 && v.parentNode === u)) break;
          if (h === 4)
            for (h = l.return; h !== null;) {
              var w = h.tag;
              if (
                (w === 3 || w === 4) &&
                ((w = h.stateNode.containerInfo),
                w === u || (w.nodeType === 8 && w.parentNode === u))
              )
                return;
              h = h.return;
            }
          for (; v !== null;) {
            if (((h = $n(v)), h === null)) return;
            if (((w = h.tag), w === 5 || w === 6)) {
              l = a = h;
              continue e;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    Sa(function () {
      var O = a,
        I = Ro(n),
        U = [];
      e: {
        var F = mf.get(e);
        if (F !== void 0) {
          var X = Ho,
            K = e;
          switch (e) {
            case "keypress":
              if (ul(n) === 0) break e;
            case "keydown":
            case "keyup":
              X = hh;
              break;
            case "focusin":
              ((K = "focus"), (X = Xo));
              break;
            case "focusout":
              ((K = "blur"), (X = Xo));
              break;
            case "beforeblur":
            case "afterblur":
              X = Xo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              X = Ha;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = nh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = gh;
              break;
            case cf:
            case df:
            case pf:
              X = lh;
              break;
            case hf:
              X = yh;
              break;
            case "scroll":
              X = eh;
              break;
            case "wheel":
              X = xh;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = sh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = Ya;
          }
          var q = (t & 4) !== 0,
            je = !q && e === "scroll",
            C = q ? (F !== null ? F + "Capture" : null) : F;
          q = [];
          for (var k = O, P; k !== null;) {
            P = k;
            var B = P.stateNode;
            if (
              (P.tag === 5 &&
                B !== null &&
                ((P = B), C !== null && ((B = Kr(k, C)), B != null && q.push(hi(k, B, P)))),
              je)
            )
              break;
            k = k.return;
          }
          0 < q.length && ((F = new X(F, K, null, n, I)), U.push({ event: F, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((F = e === "mouseover" || e === "pointerover"),
            (X = e === "mouseout" || e === "pointerout"),
            F && n !== Oo && (K = n.relatedTarget || n.fromElement) && ($n(K) || K[tn]))
          )
            break e;
          if (
            (X || F) &&
            ((F =
              I.window === I
                ? I
                : (F = I.ownerDocument)
                  ? F.defaultView || F.parentWindow
                  : window),
            X
              ? ((K = n.relatedTarget || n.toElement),
                (X = O),
                (K = K ? $n(K) : null),
                K !== null &&
                  ((je = Wn(K)), K !== je || (K.tag !== 5 && K.tag !== 6)) &&
                  (K = null))
              : ((X = null), (K = O)),
            X !== K)
          ) {
            if (
              ((q = Ha),
              (B = "onMouseLeave"),
              (C = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((q = Ya), (B = "onPointerLeave"), (C = "onPointerEnter"), (k = "pointer")),
              (je = X == null ? F : wr(X)),
              (P = K == null ? F : wr(K)),
              (F = new q(B, k + "leave", X, n, I)),
              (F.target = je),
              (F.relatedTarget = P),
              (B = null),
              $n(I) === O &&
                ((q = new q(C, k + "enter", K, n, I)),
                (q.target = P),
                (q.relatedTarget = je),
                (B = q)),
              (je = B),
              X && K)
            )
              t: {
                for (q = X, C = K, k = 0, P = q; P; P = vr(P)) k++;
                for (P = 0, B = C; B; B = vr(B)) P++;
                for (; 0 < k - P;) ((q = vr(q)), k--);
                for (; 0 < P - k;) ((C = vr(C)), P--);
                for (; k--;) {
                  if (q === C || (C !== null && q === C.alternate)) break t;
                  ((q = vr(q)), (C = vr(C)));
                }
                q = null;
              }
            else q = null;
            (X !== null && wf(U, F, X, q, !1), K !== null && je !== null && wf(U, je, K, q, !0));
          }
        }
        e: {
          if (
            ((F = O ? wr(O) : window),
            (X = F.nodeName && F.nodeName.toLowerCase()),
            X === "select" || (X === "input" && F.type === "file"))
          )
            var J = Nh;
          else if (Ja(F))
            if (ef) J = Mh;
            else {
              J = Rh;
              var te = Oh;
            }
          else
            (X = F.nodeName) &&
              X.toLowerCase() === "input" &&
              (F.type === "checkbox" || F.type === "radio") &&
              (J = zh);
          if (J && (J = J(e, O))) {
            ba(U, J, n, I);
            break e;
          }
          (te && te(e, F, O),
            e === "focusout" &&
              (te = F._wrapperState) &&
              te.controlled &&
              F.type === "number" &&
              Eo(F, "number", F.value));
        }
        switch (((te = O ? wr(O) : window), e)) {
          case "focusin":
            (Ja(te) || te.contentEditable === "true") && ((_r = te), (bo = O), (ci = null));
            break;
          case "focusout":
            ci = bo = _r = null;
            break;
          case "mousedown":
            es = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((es = !1), af(U, n, I));
            break;
          case "selectionchange":
            if (Fh) break;
          case "keydown":
          case "keyup":
            af(U, n, I);
        }
        var ne;
        if (Ko)
          e: {
            switch (e) {
              case "compositionstart":
                var ie = "onCompositionStart";
                break e;
              case "compositionend":
                ie = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ie = "onCompositionUpdate";
                break e;
            }
            ie = void 0;
          }
        else
          mr
            ? qa(e, n) && (ie = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (ie = "onCompositionStart");
        (ie &&
          (Xa &&
            n.locale !== "ko" &&
            (mr || ie !== "onCompositionStart"
              ? ie === "onCompositionEnd" && mr && (ne = Wa())
              : ((vn = I), ($o = "value" in vn ? vn.value : vn.textContent), (mr = !0))),
          (te = ml(O, ie)),
          0 < te.length &&
            ((ie = new Qa(ie, e, null, n, I)),
            U.push({ event: ie, listeners: te }),
            ne ? (ie.data = ne) : ((ne = Za(n)), ne !== null && (ie.data = ne)))),
          (ne = Sh ? Eh(e, n) : Th(e, n)) &&
            ((O = ml(O, "onBeforeInput")),
            0 < O.length &&
              ((I = new Qa("onBeforeInput", "beforeinput", null, n, I)),
              U.push({ event: I, listeners: O }),
              (I.data = ne))));
      }
      vf(U, t);
    });
  }
  function hi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ml(e, t) {
    for (var n = t + "Capture", l = []; e !== null;) {
      var u = e,
        a = u.stateNode;
      (u.tag === 5 &&
        a !== null &&
        ((u = a),
        (a = Kr(e, n)),
        a != null && l.unshift(hi(e, a, u)),
        (a = Kr(e, t)),
        a != null && l.push(hi(e, a, u))),
        (e = e.return));
    }
    return l;
  }
  function vr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function wf(e, t, n, l, u) {
    for (var a = t._reactName, h = []; n !== null && n !== l;) {
      var v = n,
        w = v.alternate,
        O = v.stateNode;
      if (w !== null && w === l) break;
      (v.tag === 5 &&
        O !== null &&
        ((v = O),
        u
          ? ((w = Kr(n, a)), w != null && h.unshift(hi(n, w, v)))
          : u || ((w = Kr(n, a)), w != null && h.push(hi(n, w, v)))),
        (n = n.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Uh = /\r\n?/g,
    Vh = /\u0000|\uFFFD/g;
  function xf(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Uh,
        `
`,
      )
      .replace(Vh, "");
  }
  function _l(e, t, n) {
    if (((t = xf(t)), xf(e) !== t && n)) throw Error(i(425));
  }
  function gl() {}
  var os = null,
    ss = null;
  function us(e, t) {
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
  var as = typeof setTimeout == "function" ? setTimeout : void 0,
    Bh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    kf = typeof Promise == "function" ? Promise : void 0,
    Wh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof kf < "u"
          ? function (e) {
              return kf.resolve(null).then(e).catch($h);
            }
          : as;
  function $h(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function fs(e, t) {
    var n = t,
      l = 0;
    do {
      var u = n.nextSibling;
      if ((e.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$")) {
          if (l === 0) {
            (e.removeChild(u), ii(t));
            return;
          }
          l--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || l++;
      n = u;
    } while (n);
    ii(t);
  }
  function wn(e) {
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
  function Sf(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yr = Math.random().toString(36).slice(2),
    Xt = "__reactFiber$" + yr,
    mi = "__reactProps$" + yr,
    tn = "__reactContainer$" + yr,
    cs = "__reactEvents$" + yr,
    Hh = "__reactListeners$" + yr,
    Qh = "__reactHandles$" + yr;
  function $n(e) {
    var t = e[Xt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[tn] || n[Xt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Sf(e); e !== null;) {
            if ((n = e[Xt])) return n;
            e = Sf(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function _i(e) {
    return (
      (e = e[Xt] || e[tn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function wr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function vl(e) {
    return e[mi] || null;
  }
  var ds = [],
    xr = -1;
  function xn(e) {
    return { current: e };
  }
  function Ce(e) {
    0 > xr || ((e.current = ds[xr]), (ds[xr] = null), xr--);
  }
  function Ee(e, t) {
    (xr++, (ds[xr] = e.current), (e.current = t));
  }
  var kn = {},
    Ze = xn(kn),
    lt = xn(!1),
    Hn = kn;
  function kr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return kn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
      return l.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      a;
    for (a in n) u[a] = t[a];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function ot(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function yl() {
    (Ce(lt), Ce(Ze));
  }
  function Ef(e, t, n) {
    if (Ze.current !== kn) throw Error(i(168));
    (Ee(Ze, t), Ee(lt, n));
  }
  function Tf(e, t, n) {
    var l = e.stateNode;
    if (((t = t.childContextTypes), typeof l.getChildContext != "function")) return n;
    l = l.getChildContext();
    for (var u in l) if (!(u in t)) throw Error(i(108, Se(e) || "Unknown", u));
    return Y({}, n, l);
  }
  function wl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kn),
      (Hn = Ze.current),
      Ee(Ze, e),
      Ee(lt, lt.current),
      !0
    );
  }
  function Cf(e, t, n) {
    var l = e.stateNode;
    if (!l) throw Error(i(169));
    (n
      ? ((e = Tf(e, t, Hn)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        Ce(lt),
        Ce(Ze),
        Ee(Ze, e))
      : Ce(lt),
      Ee(lt, n));
  }
  var nn = null,
    xl = !1,
    ps = !1;
  function Pf(e) {
    nn === null ? (nn = [e]) : nn.push(e);
  }
  function Yh(e) {
    ((xl = !0), Pf(e));
  }
  function Sn() {
    if (!ps && nn !== null) {
      ps = !0;
      var e = 0,
        t = we;
      try {
        var n = nn;
        for (we = 1; e < n.length; e++) {
          var l = n[e];
          do l = l(!0);
          while (l !== null);
        }
        ((nn = null), (xl = !1));
      } catch (u) {
        throw (nn !== null && (nn = nn.slice(e + 1)), Na(Fo, Sn), u);
      } finally {
        ((we = t), (ps = !1));
      }
    }
    return null;
  }
  var Sr = [],
    Er = 0,
    kl = null,
    Sl = 0,
    Rt = [],
    zt = 0,
    Qn = null,
    rn = 1,
    ln = "";
  function Yn(e, t) {
    ((Sr[Er++] = Sl), (Sr[Er++] = kl), (kl = e), (Sl = t));
  }
  function Nf(e, t, n) {
    ((Rt[zt++] = rn), (Rt[zt++] = ln), (Rt[zt++] = Qn), (Qn = e));
    var l = rn;
    e = ln;
    var u = 32 - Ut(l) - 1;
    ((l &= ~(1 << u)), (n += 1));
    var a = 32 - Ut(t) + u;
    if (30 < a) {
      var h = u - (u % 5);
      ((a = (l & ((1 << h) - 1)).toString(32)),
        (l >>= h),
        (u -= h),
        (rn = (1 << (32 - Ut(t) + u)) | (n << u) | l),
        (ln = a + e));
    } else ((rn = (1 << a) | (n << u) | l), (ln = e));
  }
  function hs(e) {
    e.return !== null && (Yn(e, 1), Nf(e, 1, 0));
  }
  function ms(e) {
    for (; e === kl;) ((kl = Sr[--Er]), (Sr[Er] = null), (Sl = Sr[--Er]), (Sr[Er] = null));
    for (; e === Qn;)
      ((Qn = Rt[--zt]),
        (Rt[zt] = null),
        (ln = Rt[--zt]),
        (Rt[zt] = null),
        (rn = Rt[--zt]),
        (Rt[zt] = null));
  }
  var wt = null,
    xt = null,
    Ne = !1,
    Bt = null;
  function Of(e, t) {
    var n = Ft(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Rf(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (wt = e), (xt = wn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (wt = e), (xt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Qn !== null ? { id: rn, overflow: ln } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Ft(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (wt = e),
              (xt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function _s(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function gs(e) {
    if (Ne) {
      var t = xt;
      if (t) {
        var n = t;
        if (!Rf(e, t)) {
          if (_s(e)) throw Error(i(418));
          t = wn(n.nextSibling);
          var l = wt;
          t && Rf(e, t) ? Of(l, n) : ((e.flags = (e.flags & -4097) | 2), (Ne = !1), (wt = e));
        }
      } else {
        if (_s(e)) throw Error(i(418));
        ((e.flags = (e.flags & -4097) | 2), (Ne = !1), (wt = e));
      }
    }
  }
  function zf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    wt = e;
  }
  function El(e) {
    if (e !== wt) return !1;
    if (!Ne) return (zf(e), (Ne = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !us(e.type, e.memoizedProps))),
      t && (t = xt))
    ) {
      if (_s(e)) throw (Mf(), Error(i(418)));
      for (; t;) (Of(e, t), (t = wn(t.nextSibling)));
    }
    if ((zf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                xt = wn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        xt = null;
      }
    } else xt = wt ? wn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Mf() {
    for (var e = xt; e;) e = wn(e.nextSibling);
  }
  function Tr() {
    ((xt = wt = null), (Ne = !1));
  }
  function vs(e) {
    Bt === null ? (Bt = [e]) : Bt.push(e);
  }
  var Xh = j.ReactCurrentBatchConfig;
  function gi(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(i(309));
          var l = n.stateNode;
        }
        if (!l) throw Error(i(147, e));
        var u = l,
          a = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a
          ? t.ref
          : ((t = function (h) {
              var v = u.refs;
              h === null ? delete v[a] : (v[a] = h);
            }),
            (t._stringRef = a),
            t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Tl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function Df(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Lf(e) {
    function t(C, k) {
      if (e) {
        var P = C.deletions;
        P === null ? ((C.deletions = [k]), (C.flags |= 16)) : P.push(k);
      }
    }
    function n(C, k) {
      if (!e) return null;
      for (; k !== null;) (t(C, k), (k = k.sibling));
      return null;
    }
    function l(C, k) {
      for (C = new Map(); k !== null;)
        (k.key !== null ? C.set(k.key, k) : C.set(k.index, k), (k = k.sibling));
      return C;
    }
    function u(C, k) {
      return ((C = zn(C, k)), (C.index = 0), (C.sibling = null), C);
    }
    function a(C, k, P) {
      return (
        (C.index = P),
        e
          ? ((P = C.alternate),
            P !== null ? ((P = P.index), P < k ? ((C.flags |= 2), k) : P) : ((C.flags |= 2), k))
          : ((C.flags |= 1048576), k)
      );
    }
    function h(C) {
      return (e && C.alternate === null && (C.flags |= 2), C);
    }
    function v(C, k, P, B) {
      return k === null || k.tag !== 6
        ? ((k = au(P, C.mode, B)), (k.return = C), k)
        : ((k = u(k, P)), (k.return = C), k);
    }
    function w(C, k, P, B) {
      var J = P.type;
      return J === V
        ? I(C, k, P.props.children, B, P.key)
        : k !== null &&
            (k.elementType === J ||
              (typeof J == "object" && J !== null && J.$$typeof === de && Df(J) === k.type))
          ? ((B = u(k, P.props)), (B.ref = gi(C, k, P)), (B.return = C), B)
          : ((B = Kl(P.type, P.key, P.props, null, C.mode, B)),
            (B.ref = gi(C, k, P)),
            (B.return = C),
            B);
    }
    function O(C, k, P, B) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== P.containerInfo ||
        k.stateNode.implementation !== P.implementation
        ? ((k = fu(P, C.mode, B)), (k.return = C), k)
        : ((k = u(k, P.children || [])), (k.return = C), k);
    }
    function I(C, k, P, B, J) {
      return k === null || k.tag !== 7
        ? ((k = er(P, C.mode, B, J)), (k.return = C), k)
        : ((k = u(k, P)), (k.return = C), k);
    }
    function U(C, k, P) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((k = au("" + k, C.mode, P)), (k.return = C), k);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case z:
            return (
              (P = Kl(k.type, k.key, k.props, null, C.mode, P)),
              (P.ref = gi(C, null, k)),
              (P.return = C),
              P
            );
          case Q:
            return ((k = fu(k, C.mode, P)), (k.return = C), k);
          case de:
            var B = k._init;
            return U(C, B(k._payload), P);
        }
        if (Yr(k) || b(k)) return ((k = er(k, C.mode, P, null)), (k.return = C), k);
        Tl(C, k);
      }
      return null;
    }
    function F(C, k, P, B) {
      var J = k !== null ? k.key : null;
      if ((typeof P == "string" && P !== "") || typeof P == "number")
        return J !== null ? null : v(C, k, "" + P, B);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case z:
            return P.key === J ? w(C, k, P, B) : null;
          case Q:
            return P.key === J ? O(C, k, P, B) : null;
          case de:
            return ((J = P._init), F(C, k, J(P._payload), B));
        }
        if (Yr(P) || b(P)) return J !== null ? null : I(C, k, P, B, null);
        Tl(C, P);
      }
      return null;
    }
    function X(C, k, P, B, J) {
      if ((typeof B == "string" && B !== "") || typeof B == "number")
        return ((C = C.get(P) || null), v(k, C, "" + B, J));
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case z:
            return ((C = C.get(B.key === null ? P : B.key) || null), w(k, C, B, J));
          case Q:
            return ((C = C.get(B.key === null ? P : B.key) || null), O(k, C, B, J));
          case de:
            var te = B._init;
            return X(C, k, P, te(B._payload), J);
        }
        if (Yr(B) || b(B)) return ((C = C.get(P) || null), I(k, C, B, J, null));
        Tl(k, B);
      }
      return null;
    }
    function K(C, k, P, B) {
      for (
        var J = null, te = null, ne = k, ie = (k = 0), Ye = null;
        ne !== null && ie < P.length;
        ie++
      ) {
        ne.index > ie ? ((Ye = ne), (ne = null)) : (Ye = ne.sibling);
        var _e = F(C, ne, P[ie], B);
        if (_e === null) {
          ne === null && (ne = Ye);
          break;
        }
        (e && ne && _e.alternate === null && t(C, ne),
          (k = a(_e, k, ie)),
          te === null ? (J = _e) : (te.sibling = _e),
          (te = _e),
          (ne = Ye));
      }
      if (ie === P.length) return (n(C, ne), Ne && Yn(C, ie), J);
      if (ne === null) {
        for (; ie < P.length; ie++)
          ((ne = U(C, P[ie], B)),
            ne !== null &&
              ((k = a(ne, k, ie)), te === null ? (J = ne) : (te.sibling = ne), (te = ne)));
        return (Ne && Yn(C, ie), J);
      }
      for (ne = l(C, ne); ie < P.length; ie++)
        ((Ye = X(ne, C, ie, P[ie], B)),
          Ye !== null &&
            (e && Ye.alternate !== null && ne.delete(Ye.key === null ? ie : Ye.key),
            (k = a(Ye, k, ie)),
            te === null ? (J = Ye) : (te.sibling = Ye),
            (te = Ye)));
      return (
        e &&
          ne.forEach(function (Mn) {
            return t(C, Mn);
          }),
        Ne && Yn(C, ie),
        J
      );
    }
    function q(C, k, P, B) {
      var J = b(P);
      if (typeof J != "function") throw Error(i(150));
      if (((P = J.call(P)), P == null)) throw Error(i(151));
      for (
        var te = (J = null), ne = k, ie = (k = 0), Ye = null, _e = P.next();
        ne !== null && !_e.done;
        ie++, _e = P.next()
      ) {
        ne.index > ie ? ((Ye = ne), (ne = null)) : (Ye = ne.sibling);
        var Mn = F(C, ne, _e.value, B);
        if (Mn === null) {
          ne === null && (ne = Ye);
          break;
        }
        (e && ne && Mn.alternate === null && t(C, ne),
          (k = a(Mn, k, ie)),
          te === null ? (J = Mn) : (te.sibling = Mn),
          (te = Mn),
          (ne = Ye));
      }
      if (_e.done) return (n(C, ne), Ne && Yn(C, ie), J);
      if (ne === null) {
        for (; !_e.done; ie++, _e = P.next())
          ((_e = U(C, _e.value, B)),
            _e !== null &&
              ((k = a(_e, k, ie)), te === null ? (J = _e) : (te.sibling = _e), (te = _e)));
        return (Ne && Yn(C, ie), J);
      }
      for (ne = l(C, ne); !_e.done; ie++, _e = P.next())
        ((_e = X(ne, C, ie, _e.value, B)),
          _e !== null &&
            (e && _e.alternate !== null && ne.delete(_e.key === null ? ie : _e.key),
            (k = a(_e, k, ie)),
            te === null ? (J = _e) : (te.sibling = _e),
            (te = _e)));
      return (
        e &&
          ne.forEach(function (Cm) {
            return t(C, Cm);
          }),
        Ne && Yn(C, ie),
        J
      );
    }
    function je(C, k, P, B) {
      if (
        (typeof P == "object" &&
          P !== null &&
          P.type === V &&
          P.key === null &&
          (P = P.props.children),
        typeof P == "object" && P !== null)
      ) {
        switch (P.$$typeof) {
          case z:
            e: {
              for (var J = P.key, te = k; te !== null;) {
                if (te.key === J) {
                  if (((J = P.type), J === V)) {
                    if (te.tag === 7) {
                      (n(C, te.sibling), (k = u(te, P.props.children)), (k.return = C), (C = k));
                      break e;
                    }
                  } else if (
                    te.elementType === J ||
                    (typeof J == "object" && J !== null && J.$$typeof === de && Df(J) === te.type)
                  ) {
                    (n(C, te.sibling),
                      (k = u(te, P.props)),
                      (k.ref = gi(C, te, P)),
                      (k.return = C),
                      (C = k));
                    break e;
                  }
                  n(C, te);
                  break;
                } else t(C, te);
                te = te.sibling;
              }
              P.type === V
                ? ((k = er(P.props.children, C.mode, B, P.key)), (k.return = C), (C = k))
                : ((B = Kl(P.type, P.key, P.props, null, C.mode, B)),
                  (B.ref = gi(C, k, P)),
                  (B.return = C),
                  (C = B));
            }
            return h(C);
          case Q:
            e: {
              for (te = P.key; k !== null;) {
                if (k.key === te)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === P.containerInfo &&
                    k.stateNode.implementation === P.implementation
                  ) {
                    (n(C, k.sibling), (k = u(k, P.children || [])), (k.return = C), (C = k));
                    break e;
                  } else {
                    n(C, k);
                    break;
                  }
                else t(C, k);
                k = k.sibling;
              }
              ((k = fu(P, C.mode, B)), (k.return = C), (C = k));
            }
            return h(C);
          case de:
            return ((te = P._init), je(C, k, te(P._payload), B));
        }
        if (Yr(P)) return K(C, k, P, B);
        if (b(P)) return q(C, k, P, B);
        Tl(C, P);
      }
      return (typeof P == "string" && P !== "") || typeof P == "number"
        ? ((P = "" + P),
          k !== null && k.tag === 6
            ? (n(C, k.sibling), (k = u(k, P)), (k.return = C), (C = k))
            : (n(C, k), (k = au(P, C.mode, B)), (k.return = C), (C = k)),
          h(C))
        : n(C, k);
    }
    return je;
  }
  var Cr = Lf(!0),
    Ff = Lf(!1),
    Cl = xn(null),
    Pl = null,
    Pr = null,
    ys = null;
  function ws() {
    ys = Pr = Pl = null;
  }
  function xs(e) {
    var t = Cl.current;
    (Ce(Cl), (e._currentValue = t));
  }
  function ks(e, t, n) {
    for (; e !== null;) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Nr(e, t) {
    ((Pl = e),
      (ys = Pr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (st = !0), (e.firstContext = null)));
  }
  function Mt(e) {
    var t = e._currentValue;
    if (ys !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Pr === null)) {
        if (Pl === null) throw Error(i(308));
        ((Pr = e), (Pl.dependencies = { lanes: 0, firstContext: e }));
      } else Pr = Pr.next = e;
    return t;
  }
  var Xn = null;
  function Ss(e) {
    Xn === null ? (Xn = [e]) : Xn.push(e);
  }
  function If(e, t, n, l) {
    var u = t.interleaved;
    return (
      u === null ? ((n.next = n), Ss(t)) : ((n.next = u.next), (u.next = n)),
      (t.interleaved = n),
      on(e, l)
    );
  }
  function on(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var En = !1;
  function Es(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Af(e, t) {
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
  function sn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Tn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (he & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        on(e, n)
      );
    }
    return (
      (u = l.interleaved),
      u === null ? ((t.next = t), Ss(l)) : ((t.next = u.next), (u.next = t)),
      (l.interleaved = t),
      on(e, n)
    );
  }
  function Nl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), jo(e, n));
    }
  }
  function jf(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var u = null,
        a = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var h = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (a === null ? (u = a = h) : (a = a.next = h), (n = n.next));
        } while (n !== null);
        a === null ? (u = a = t) : (a = a.next = t);
      } else u = a = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: a,
        shared: l.shared,
        effects: l.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Ol(e, t, n, l) {
    var u = e.updateQueue;
    En = !1;
    var a = u.firstBaseUpdate,
      h = u.lastBaseUpdate,
      v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var w = v,
        O = w.next;
      ((w.next = null), h === null ? (a = O) : (h.next = O), (h = w));
      var I = e.alternate;
      I !== null &&
        ((I = I.updateQueue),
        (v = I.lastBaseUpdate),
        v !== h && (v === null ? (I.firstBaseUpdate = O) : (v.next = O), (I.lastBaseUpdate = w)));
    }
    if (a !== null) {
      var U = u.baseState;
      ((h = 0), (I = O = w = null), (v = a));
      do {
        var F = v.lane,
          X = v.eventTime;
        if ((l & F) === F) {
          I !== null &&
            (I = I.next =
              {
                eventTime: X,
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null,
              });
          e: {
            var K = e,
              q = v;
            switch (((F = t), (X = n), q.tag)) {
              case 1:
                if (((K = q.payload), typeof K == "function")) {
                  U = K.call(X, U, F);
                  break e;
                }
                U = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = q.payload), (F = typeof K == "function" ? K.call(X, U, F) : K), F == null)
                )
                  break e;
                U = Y({}, U, F);
                break e;
              case 2:
                En = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64), (F = u.effects), F === null ? (u.effects = [v]) : F.push(v));
        } else
          ((X = {
            eventTime: X,
            lane: F,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            I === null ? ((O = I = X), (w = U)) : (I = I.next = X),
            (h |= F));
        if (((v = v.next), v === null)) {
          if (((v = u.shared.pending), v === null)) break;
          ((F = v),
            (v = F.next),
            (F.next = null),
            (u.lastBaseUpdate = F),
            (u.shared.pending = null));
        }
      } while (!0);
      if (
        (I === null && (w = U),
        (u.baseState = w),
        (u.firstBaseUpdate = O),
        (u.lastBaseUpdate = I),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do ((h |= u.lane), (u = u.next));
        while (u !== t);
      } else a === null && (u.shared.lanes = 0);
      ((qn |= h), (e.lanes = h), (e.memoizedState = U));
    }
  }
  function Uf(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var l = e[t],
          u = l.callback;
        if (u !== null) {
          if (((l.callback = null), (l = n), typeof u != "function")) throw Error(i(191, u));
          u.call(l);
        }
      }
  }
  var vi = {},
    Gt = xn(vi),
    yi = xn(vi),
    wi = xn(vi);
  function Gn(e) {
    if (e === vi) throw Error(i(174));
    return e;
  }
  function Ts(e, t) {
    switch ((Ee(wi, t), Ee(yi, e), Ee(Gt, vi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Co(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Co(t, e)));
    }
    (Ce(Gt), Ee(Gt, t));
  }
  function Or() {
    (Ce(Gt), Ce(yi), Ce(wi));
  }
  function Vf(e) {
    Gn(wi.current);
    var t = Gn(Gt.current),
      n = Co(t, e.type);
    t !== n && (Ee(yi, e), Ee(Gt, n));
  }
  function Cs(e) {
    yi.current === e && (Ce(Gt), Ce(yi));
  }
  var Re = xn(0);
  function Rl(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!"))
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
  var Ps = [];
  function Ns() {
    for (var e = 0; e < Ps.length; e++) Ps[e]._workInProgressVersionPrimary = null;
    Ps.length = 0;
  }
  var zl = j.ReactCurrentDispatcher,
    Os = j.ReactCurrentBatchConfig,
    Kn = 0,
    ze = null,
    We = null,
    He = null,
    Ml = !1,
    xi = !1,
    ki = 0,
    Gh = 0;
  function Je() {
    throw Error(i(321));
  }
  function Rs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Vt(e[n], t[n])) return !1;
    return !0;
  }
  function zs(e, t, n, l, u, a) {
    if (
      ((Kn = a),
      (ze = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (zl.current = e === null || e.memoizedState === null ? Jh : bh),
      (e = n(l, u)),
      xi)
    ) {
      a = 0;
      do {
        if (((xi = !1), (ki = 0), 25 <= a)) throw Error(i(301));
        ((a += 1), (He = We = null), (t.updateQueue = null), (zl.current = em), (e = n(l, u)));
      } while (xi);
    }
    if (
      ((zl.current = Fl),
      (t = We !== null && We.next !== null),
      (Kn = 0),
      (He = We = ze = null),
      (Ml = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function Ms() {
    var e = ki !== 0;
    return ((ki = 0), e);
  }
  function Kt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (He === null ? (ze.memoizedState = He = e) : (He = He.next = e), He);
  }
  function Dt() {
    if (We === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = We.next;
    var t = He === null ? ze.memoizedState : He.next;
    if (t !== null) ((He = t), (We = e));
    else {
      if (e === null) throw Error(i(310));
      ((We = e),
        (e = {
          memoizedState: We.memoizedState,
          baseState: We.baseState,
          baseQueue: We.baseQueue,
          queue: We.queue,
          next: null,
        }),
        He === null ? (ze.memoizedState = He = e) : (He = He.next = e));
    }
    return He;
  }
  function Si(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ds(e) {
    var t = Dt(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var l = We,
      u = l.baseQueue,
      a = n.pending;
    if (a !== null) {
      if (u !== null) {
        var h = u.next;
        ((u.next = a.next), (a.next = h));
      }
      ((l.baseQueue = u = a), (n.pending = null));
    }
    if (u !== null) {
      ((a = u.next), (l = l.baseState));
      var v = (h = null),
        w = null,
        O = a;
      do {
        var I = O.lane;
        if ((Kn & I) === I)
          (w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: O.action,
                hasEagerState: O.hasEagerState,
                eagerState: O.eagerState,
                next: null,
              }),
            (l = O.hasEagerState ? O.eagerState : e(l, O.action)));
        else {
          var U = {
            lane: I,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null,
          };
          (w === null ? ((v = w = U), (h = l)) : (w = w.next = U), (ze.lanes |= I), (qn |= I));
        }
        O = O.next;
      } while (O !== null && O !== a);
      (w === null ? (h = l) : (w.next = v),
        Vt(l, t.memoizedState) || (st = !0),
        (t.memoizedState = l),
        (t.baseState = h),
        (t.baseQueue = w),
        (n.lastRenderedState = l));
    }
    if (((e = n.interleaved), e !== null)) {
      u = e;
      do ((a = u.lane), (ze.lanes |= a), (qn |= a), (u = u.next));
      while (u !== e);
    } else u === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ls(e) {
    var t = Dt(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      u = n.pending,
      a = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var h = (u = u.next);
      do ((a = e(a, h.action)), (h = h.next));
      while (h !== u);
      (Vt(a, t.memoizedState) || (st = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (n.lastRenderedState = a));
    }
    return [a, l];
  }
  function Bf() {}
  function Wf(e, t) {
    var n = ze,
      l = Dt(),
      u = t(),
      a = !Vt(l.memoizedState, u);
    if (
      (a && ((l.memoizedState = u), (st = !0)),
      (l = l.queue),
      Fs(Qf.bind(null, n, l, e), [e]),
      l.getSnapshot !== t || a || (He !== null && He.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Ei(9, Hf.bind(null, n, l, u, t), void 0, null), Qe === null))
        throw Error(i(349));
      (Kn & 30) !== 0 || $f(n, t, u);
    }
    return u;
  }
  function $f(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ze.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ze.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Hf(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), Yf(t) && Xf(e));
  }
  function Qf(e, t, n) {
    return n(function () {
      Yf(t) && Xf(e);
    });
  }
  function Yf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Vt(e, n);
    } catch {
      return !0;
    }
  }
  function Xf(e) {
    var t = on(e, 1);
    t !== null && Qt(t, e, 1, -1);
  }
  function Gf(e) {
    var t = Kt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Si,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Zh.bind(null, ze, e)),
      [t.memoizedState, e]
    );
  }
  function Ei(e, t, n, l) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: l, next: null }),
      (t = ze.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ze.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e))),
      e
    );
  }
  function Kf() {
    return Dt().memoizedState;
  }
  function Dl(e, t, n, l) {
    var u = Kt();
    ((ze.flags |= e), (u.memoizedState = Ei(1 | t, n, void 0, l === void 0 ? null : l)));
  }
  function Ll(e, t, n, l) {
    var u = Dt();
    l = l === void 0 ? null : l;
    var a = void 0;
    if (We !== null) {
      var h = We.memoizedState;
      if (((a = h.destroy), l !== null && Rs(l, h.deps))) {
        u.memoizedState = Ei(t, n, a, l);
        return;
      }
    }
    ((ze.flags |= e), (u.memoizedState = Ei(1 | t, n, a, l)));
  }
  function qf(e, t) {
    return Dl(8390656, 8, e, t);
  }
  function Fs(e, t) {
    return Ll(2048, 8, e, t);
  }
  function Zf(e, t) {
    return Ll(4, 2, e, t);
  }
  function Jf(e, t) {
    return Ll(4, 4, e, t);
  }
  function bf(e, t) {
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
  function ec(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), Ll(4, 4, bf.bind(null, t, e), n));
  }
  function Is() {}
  function tc(e, t) {
    var n = Dt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return l !== null && t !== null && Rs(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function nc(e, t) {
    var n = Dt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return l !== null && t !== null && Rs(t, l[1])
      ? l[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function rc(e, t, n) {
    return (Kn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = n))
      : (Vt(n, t) || ((n = Ma()), (ze.lanes |= n), (qn |= n), (e.baseState = !0)), t);
  }
  function Kh(e, t) {
    var n = we;
    ((we = n !== 0 && 4 > n ? n : 4), e(!0));
    var l = Os.transition;
    Os.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((we = n), (Os.transition = l));
    }
  }
  function ic() {
    return Dt().memoizedState;
  }
  function qh(e, t, n) {
    var l = On(e);
    if (((n = { lane: l, action: n, hasEagerState: !1, eagerState: null, next: null }), lc(e)))
      oc(t, n);
    else if (((n = If(e, t, n, l)), n !== null)) {
      var u = it();
      (Qt(n, e, l, u), sc(n, t, l));
    }
  }
  function Zh(e, t, n) {
    var l = On(e),
      u = { lane: l, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (lc(e)) oc(t, u);
    else {
      var a = e.alternate;
      if (
        e.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = t.lastRenderedReducer), a !== null)
      )
        try {
          var h = t.lastRenderedState,
            v = a(h, n);
          if (((u.hasEagerState = !0), (u.eagerState = v), Vt(v, h))) {
            var w = t.interleaved;
            (w === null ? ((u.next = u), Ss(t)) : ((u.next = w.next), (w.next = u)),
              (t.interleaved = u));
            return;
          }
        } catch {
        } finally {
        }
      ((n = If(e, t, u, l)), n !== null && ((u = it()), Qt(n, e, l, u), sc(n, t, l)));
    }
  }
  function lc(e) {
    var t = e.alternate;
    return e === ze || (t !== null && t === ze);
  }
  function oc(e, t) {
    xi = Ml = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function sc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), jo(e, n));
    }
  }
  var Fl = {
      readContext: Mt,
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
    Jh = {
      readContext: Mt,
      useCallback: function (e, t) {
        return ((Kt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Mt,
      useEffect: qf,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Dl(4194308, 4, bf.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Dl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Dl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Kt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var l = Kt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (l.memoizedState = l.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (l.queue = e),
          (e = e.dispatch = qh.bind(null, ze, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Kt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Gf,
      useDebugValue: Is,
      useDeferredValue: function (e) {
        return (Kt().memoizedState = e);
      },
      useTransition: function () {
        var e = Gf(!1),
          t = e[0];
        return ((e = Kh.bind(null, e[1])), (Kt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var l = ze,
          u = Kt();
        if (Ne) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = t()), Qe === null)) throw Error(i(349));
          (Kn & 30) !== 0 || $f(l, t, n);
        }
        u.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (u.queue = a),
          qf(Qf.bind(null, l, a, e), [e]),
          (l.flags |= 2048),
          Ei(9, Hf.bind(null, l, a, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Kt(),
          t = Qe.identifierPrefix;
        if (Ne) {
          var n = ln,
            l = rn;
          ((n = (l & ~(1 << (32 - Ut(l) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ki++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Gh++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    bh = {
      readContext: Mt,
      useCallback: tc,
      useContext: Mt,
      useEffect: Fs,
      useImperativeHandle: ec,
      useInsertionEffect: Zf,
      useLayoutEffect: Jf,
      useMemo: nc,
      useReducer: Ds,
      useRef: Kf,
      useState: function () {
        return Ds(Si);
      },
      useDebugValue: Is,
      useDeferredValue: function (e) {
        var t = Dt();
        return rc(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = Ds(Si)[0],
          t = Dt().memoizedState;
        return [e, t];
      },
      useMutableSource: Bf,
      useSyncExternalStore: Wf,
      useId: ic,
      unstable_isNewReconciler: !1,
    },
    em = {
      readContext: Mt,
      useCallback: tc,
      useContext: Mt,
      useEffect: Fs,
      useImperativeHandle: ec,
      useInsertionEffect: Zf,
      useLayoutEffect: Jf,
      useMemo: nc,
      useReducer: Ls,
      useRef: Kf,
      useState: function () {
        return Ls(Si);
      },
      useDebugValue: Is,
      useDeferredValue: function (e) {
        var t = Dt();
        return We === null ? (t.memoizedState = e) : rc(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = Ls(Si)[0],
          t = Dt().memoizedState;
        return [e, t];
      },
      useMutableSource: Bf,
      useSyncExternalStore: Wf,
      useId: ic,
      unstable_isNewReconciler: !1,
    };
  function Wt(e, t) {
    if (e && e.defaultProps) {
      ((t = Y({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function As(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : Y({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Il = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Wn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = it(),
        u = On(e),
        a = sn(l, u);
      ((a.payload = t),
        n != null && (a.callback = n),
        (t = Tn(e, a, u)),
        t !== null && (Qt(t, e, u, l), Nl(t, e, u)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = it(),
        u = On(e),
        a = sn(l, u);
      ((a.tag = 1),
        (a.payload = t),
        n != null && (a.callback = n),
        (t = Tn(e, a, u)),
        t !== null && (Qt(t, e, u, l), Nl(t, e, u)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = it(),
        l = On(e),
        u = sn(n, l);
      ((u.tag = 2),
        t != null && (u.callback = t),
        (t = Tn(e, u, l)),
        t !== null && (Qt(t, e, l, n), Nl(t, e, l)));
    },
  };
  function uc(e, t, n, l, u, a, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, a, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !fi(n, l) || !fi(u, a)
          : !0
    );
  }
  function ac(e, t, n) {
    var l = !1,
      u = kn,
      a = t.contextType;
    return (
      typeof a == "object" && a !== null
        ? (a = Mt(a))
        : ((u = ot(t) ? Hn : Ze.current),
          (l = t.contextTypes),
          (a = (l = l != null) ? kr(e, u) : kn)),
      (t = new t(n, a)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Il),
      (e.stateNode = t),
      (t._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
    );
  }
  function fc(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Il.enqueueReplaceState(t, t.state, null));
  }
  function js(e, t, n, l) {
    var u = e.stateNode;
    ((u.props = n), (u.state = e.memoizedState), (u.refs = {}), Es(e));
    var a = t.contextType;
    (typeof a == "object" && a !== null
      ? (u.context = Mt(a))
      : ((a = ot(t) ? Hn : Ze.current), (u.context = kr(e, a))),
      (u.state = e.memoizedState),
      (a = t.getDerivedStateFromProps),
      typeof a == "function" && (As(e, t, a, n), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
        t !== u.state && Il.enqueueReplaceState(u, u.state, null),
        Ol(e, n, u, l),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Rr(e, t) {
    try {
      var n = "",
        l = t;
      do ((n += se(l)), (l = l.return));
      while (l);
      var u = n;
    } catch (a) {
      u =
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function Us(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Vs(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var tm = typeof WeakMap == "function" ? WeakMap : Map;
  function cc(e, t, n) {
    ((n = sn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var l = t.value;
    return (
      (n.callback = function () {
        ($l || (($l = !0), (tu = l)), Vs(e, t));
      }),
      n
    );
  }
  function dc(e, t, n) {
    ((n = sn(-1, n)), (n.tag = 3));
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = t.value;
      ((n.payload = function () {
        return l(u);
      }),
        (n.callback = function () {
          Vs(e, t);
        }));
    }
    var a = e.stateNode;
    return (
      a !== null &&
        typeof a.componentDidCatch == "function" &&
        (n.callback = function () {
          (Vs(e, t),
            typeof l != "function" && (Pn === null ? (Pn = new Set([this])) : Pn.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
        }),
      n
    );
  }
  function pc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new tm();
      var u = new Set();
      l.set(t, u);
    } else ((u = l.get(t)), u === void 0 && ((u = new Set()), l.set(t, u)));
    u.has(n) || (u.add(n), (e = mm.bind(null, e, t, n)), t.then(e, e));
  }
  function hc(e) {
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
  function mc(e, t, n, l, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = sn(-1, 1)), (t.tag = 2), Tn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var nm = j.ReactCurrentOwner,
    st = !1;
  function rt(e, t, n, l) {
    t.child = e === null ? Ff(t, null, n, l) : Cr(t, e.child, n, l);
  }
  function _c(e, t, n, l, u) {
    n = n.render;
    var a = t.ref;
    return (
      Nr(t, u),
      (l = zs(e, t, n, l, a, u)),
      (n = Ms()),
      e !== null && !st
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), un(e, t, u))
        : (Ne && n && hs(t), (t.flags |= 1), rt(e, t, l, u), t.child)
    );
  }
  function gc(e, t, n, l, u) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" &&
        !uu(a) &&
        a.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = a), vc(e, t, a, l, u))
        : ((e = Kl(n.type, null, l, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((a = e.child), (e.lanes & u) === 0)) {
      var h = a.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : fi), n(h, l) && e.ref === t.ref))
        return un(e, t, u);
    }
    return ((t.flags |= 1), (e = zn(a, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function vc(e, t, n, l, u) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (fi(a, l) && e.ref === t.ref)
        if (((st = !1), (t.pendingProps = l = a), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (st = !0);
        else return ((t.lanes = e.lanes), un(e, t, u));
    }
    return Bs(e, t, n, l, u);
  }
  function yc(e, t, n) {
    var l = t.pendingProps,
      u = l.children,
      a = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Ee(Mr, kt),
          (kt |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = a !== null ? a.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Ee(Mr, kt),
            (kt |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (l = a !== null ? a.baseLanes : n),
          Ee(Mr, kt),
          (kt |= l));
      }
    else
      (a !== null ? ((l = a.baseLanes | n), (t.memoizedState = null)) : (l = n),
        Ee(Mr, kt),
        (kt |= l));
    return (rt(e, t, u, n), t.child);
  }
  function wc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Bs(e, t, n, l, u) {
    var a = ot(n) ? Hn : Ze.current;
    return (
      (a = kr(t, a)),
      Nr(t, u),
      (n = zs(e, t, n, l, a, u)),
      (l = Ms()),
      e !== null && !st
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), un(e, t, u))
        : (Ne && l && hs(t), (t.flags |= 1), rt(e, t, n, u), t.child)
    );
  }
  function xc(e, t, n, l, u) {
    if (ot(n)) {
      var a = !0;
      wl(t);
    } else a = !1;
    if ((Nr(t, u), t.stateNode === null)) (jl(e, t), ac(t, n, l), js(t, n, l, u), (l = !0));
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var w = h.context,
        O = n.contextType;
      typeof O == "object" && O !== null
        ? (O = Mt(O))
        : ((O = ot(n) ? Hn : Ze.current), (O = kr(t, O)));
      var I = n.getDerivedStateFromProps,
        U = typeof I == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (U ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== l || w !== O) && fc(t, h, l, O)),
        (En = !1));
      var F = t.memoizedState;
      ((h.state = F),
        Ol(t, l, h, u),
        (w = t.memoizedState),
        v !== l || F !== w || lt.current || En
          ? (typeof I == "function" && (As(t, n, I, l), (w = t.memoizedState)),
            (v = En || uc(t, n, v, l, F, w, O))
              ? (U ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" && h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = w)),
            (h.props = l),
            (h.state = w),
            (h.context = O),
            (l = v))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), (l = !1)));
    } else {
      ((h = t.stateNode),
        Af(e, t),
        (v = t.memoizedProps),
        (O = t.type === t.elementType ? v : Wt(t.type, v)),
        (h.props = O),
        (U = t.pendingProps),
        (F = h.context),
        (w = n.contextType),
        typeof w == "object" && w !== null
          ? (w = Mt(w))
          : ((w = ot(n) ? Hn : Ze.current), (w = kr(t, w))));
      var X = n.getDerivedStateFromProps;
      ((I = typeof X == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== U || F !== w) && fc(t, h, l, w)),
        (En = !1),
        (F = t.memoizedState),
        (h.state = F),
        Ol(t, l, h, u));
      var K = t.memoizedState;
      v !== U || F !== K || lt.current || En
        ? (typeof X == "function" && (As(t, n, X, l), (K = t.memoizedState)),
          (O = En || uc(t, n, O, l, F, K, w) || !1)
            ? (I ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(l, K, w),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(l, K, w)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (v === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = K)),
          (h.props = l),
          (h.state = K),
          (h.context = w),
          (l = O))
        : (typeof h.componentDidUpdate != "function" ||
            (v === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return Ws(e, t, n, l, a, u);
  }
  function Ws(e, t, n, l, u, a) {
    wc(e, t);
    var h = (t.flags & 128) !== 0;
    if (!l && !h) return (u && Cf(t, n, !1), un(e, t, a));
    ((l = t.stateNode), (nm.current = t));
    var v = h && typeof n.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = Cr(t, e.child, null, a)), (t.child = Cr(t, null, v, a)))
        : rt(e, t, v, a),
      (t.memoizedState = l.state),
      u && Cf(t, n, !0),
      t.child
    );
  }
  function kc(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ef(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ef(e, t.context, !1),
      Ts(e, t.containerInfo));
  }
  function Sc(e, t, n, l, u) {
    return (Tr(), vs(u), (t.flags |= 256), rt(e, t, n, l), t.child);
  }
  var $s = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Hs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ec(e, t, n) {
    var l = t.pendingProps,
      u = Re.current,
      a = !1,
      h = (t.flags & 128) !== 0,
      v;
    if (
      ((v = h) || (v = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      v ? ((a = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (u |= 1),
      Ee(Re, u & 1),
      e === null)
    )
      return (
        gs(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((h = l.children),
            (e = l.fallback),
            a
              ? ((l = t.mode),
                (a = t.child),
                (h = { mode: "hidden", children: h }),
                (l & 1) === 0 && a !== null
                  ? ((a.childLanes = 0), (a.pendingProps = h))
                  : (a = ql(h, l, 0, null)),
                (e = er(e, l, n, null)),
                (a.return = t),
                (e.return = t),
                (a.sibling = e),
                (t.child = a),
                (t.child.memoizedState = Hs(n)),
                (t.memoizedState = $s),
                e)
              : Qs(t, h))
      );
    if (((u = e.memoizedState), u !== null && ((v = u.dehydrated), v !== null)))
      return rm(e, t, h, l, v, u, n);
    if (a) {
      ((a = l.fallback), (h = t.mode), (u = e.child), (v = u.sibling));
      var w = { mode: "hidden", children: l.children };
      return (
        (h & 1) === 0 && t.child !== u
          ? ((l = t.child), (l.childLanes = 0), (l.pendingProps = w), (t.deletions = null))
          : ((l = zn(u, w)), (l.subtreeFlags = u.subtreeFlags & 14680064)),
        v !== null ? (a = zn(v, a)) : ((a = er(a, h, n, null)), (a.flags |= 2)),
        (a.return = t),
        (l.return = t),
        (l.sibling = a),
        (t.child = l),
        (l = a),
        (a = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? Hs(n)
            : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }),
        (a.memoizedState = h),
        (a.childLanes = e.childLanes & ~n),
        (t.memoizedState = $s),
        l
      );
    }
    return (
      (a = e.child),
      (e = a.sibling),
      (l = zn(a, { mode: "visible", children: l.children })),
      (t.mode & 1) === 0 && (l.lanes = n),
      (l.return = t),
      (l.sibling = null),
      e !== null &&
        ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = l),
      (t.memoizedState = null),
      l
    );
  }
  function Qs(e, t) {
    return (
      (t = ql({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Al(e, t, n, l) {
    return (
      l !== null && vs(l),
      Cr(t, e.child, null, n),
      (e = Qs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function rm(e, t, n, l, u, a, h) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (l = Us(Error(i(422)))), Al(e, t, h, l))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((a = l.fallback),
            (u = t.mode),
            (l = ql({ mode: "visible", children: l.children }, u, 0, null)),
            (a = er(a, u, h, null)),
            (a.flags |= 2),
            (l.return = t),
            (a.return = t),
            (l.sibling = a),
            (t.child = l),
            (t.mode & 1) !== 0 && Cr(t, e.child, null, h),
            (t.child.memoizedState = Hs(h)),
            (t.memoizedState = $s),
            a);
    if ((t.mode & 1) === 0) return Al(e, t, h, null);
    if (u.data === "$!") {
      if (((l = u.nextSibling && u.nextSibling.dataset), l)) var v = l.dgst;
      return ((l = v), (a = Error(i(419))), (l = Us(a, l, void 0)), Al(e, t, h, l));
    }
    if (((v = (h & e.childLanes) !== 0), st || v)) {
      if (((l = Qe), l !== null)) {
        switch (h & -h) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
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
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        ((u = (u & (l.suspendedLanes | h)) !== 0 ? 0 : u),
          u !== 0 && u !== a.retryLane && ((a.retryLane = u), on(e, u), Qt(l, e, u, -1)));
      }
      return (su(), (l = Us(Error(i(421)))), Al(e, t, h, l));
    }
    return u.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = _m.bind(null, e)), (u._reactRetry = t), null)
      : ((e = a.treeContext),
        (xt = wn(u.nextSibling)),
        (wt = t),
        (Ne = !0),
        (Bt = null),
        e !== null &&
          ((Rt[zt++] = rn),
          (Rt[zt++] = ln),
          (Rt[zt++] = Qn),
          (rn = e.id),
          (ln = e.overflow),
          (Qn = t)),
        (t = Qs(t, l.children)),
        (t.flags |= 4096),
        t);
  }
  function Tc(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), ks(e.return, t, n));
  }
  function Ys(e, t, n, l, u) {
    var a = e.memoizedState;
    a === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: u,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = l),
        (a.tail = n),
        (a.tailMode = u));
  }
  function Cc(e, t, n) {
    var l = t.pendingProps,
      u = l.revealOrder,
      a = l.tail;
    if ((rt(e, t, l.children, n), (l = Re.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Tc(e, n, t);
          else if (e.tag === 19) Tc(e, n, t);
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
      l &= 1;
    }
    if ((Ee(Re, l), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (n = t.child, u = null; n !== null;)
            ((e = n.alternate), e !== null && Rl(e) === null && (u = n), (n = n.sibling));
          ((n = u),
            n === null ? ((u = t.child), (t.child = null)) : ((u = n.sibling), (n.sibling = null)),
            Ys(t, !1, u, n, a));
          break;
        case "backwards":
          for (n = null, u = t.child, t.child = null; u !== null;) {
            if (((e = u.alternate), e !== null && Rl(e) === null)) {
              t.child = u;
              break;
            }
            ((e = u.sibling), (u.sibling = n), (n = u), (u = e));
          }
          Ys(t, !0, n, null, a);
          break;
        case "together":
          Ys(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function jl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function un(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (qn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = zn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        ((e = e.sibling), (n = n.sibling = zn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function im(e, t, n) {
    switch (t.tag) {
      case 3:
        (kc(t), Tr());
        break;
      case 5:
        Vf(t);
        break;
      case 1:
        ot(t.type) && wl(t);
        break;
      case 4:
        Ts(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context,
          u = t.memoizedProps.value;
        (Ee(Cl, l._currentValue), (l._currentValue = u));
        break;
      case 13:
        if (((l = t.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Ee(Re, Re.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ec(e, t, n)
              : (Ee(Re, Re.current & 1), (e = un(e, t, n)), e !== null ? e.sibling : null);
        Ee(Re, Re.current & 1);
        break;
      case 19:
        if (((l = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return Cc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ee(Re, Re.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), yc(e, t, n));
    }
    return un(e, t, n);
  }
  var Pc, Xs, Nc, Oc;
  ((Pc = function (e, t) {
    for (var n = t.child; n !== null;) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (Xs = function () {}),
    (Nc = function (e, t, n, l) {
      var u = e.memoizedProps;
      if (u !== l) {
        ((e = t.stateNode), Gn(Gt.current));
        var a = null;
        switch (n) {
          case "input":
            ((u = ko(e, u)), (l = ko(e, l)), (a = []));
            break;
          case "select":
            ((u = Y({}, u, { value: void 0 })), (l = Y({}, l, { value: void 0 })), (a = []));
            break;
          case "textarea":
            ((u = To(e, u)), (l = To(e, l)), (a = []));
            break;
          default:
            typeof u.onClick != "function" && typeof l.onClick == "function" && (e.onclick = gl);
        }
        Po(n, l);
        var h;
        n = null;
        for (O in u)
          if (!l.hasOwnProperty(O) && u.hasOwnProperty(O) && u[O] != null)
            if (O === "style") {
              var v = u[O];
              for (h in v) v.hasOwnProperty(h) && (n || (n = {}), (n[h] = ""));
            } else
              O !== "dangerouslySetInnerHTML" &&
                O !== "children" &&
                O !== "suppressContentEditableWarning" &&
                O !== "suppressHydrationWarning" &&
                O !== "autoFocus" &&
                (s.hasOwnProperty(O) ? a || (a = []) : (a = a || []).push(O, null));
        for (O in l) {
          var w = l[O];
          if (
            ((v = u != null ? u[O] : void 0),
            l.hasOwnProperty(O) && w !== v && (w != null || v != null))
          )
            if (O === "style")
              if (v) {
                for (h in v)
                  !v.hasOwnProperty(h) ||
                    (w && w.hasOwnProperty(h)) ||
                    (n || (n = {}), (n[h] = ""));
                for (h in w) w.hasOwnProperty(h) && v[h] !== w[h] && (n || (n = {}), (n[h] = w[h]));
              } else (n || (a || (a = []), a.push(O, n)), (n = w));
            else
              O === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (v = v ? v.__html : void 0),
                  w != null && v !== w && (a = a || []).push(O, w))
                : O === "children"
                  ? (typeof w != "string" && typeof w != "number") || (a = a || []).push(O, "" + w)
                  : O !== "suppressContentEditableWarning" &&
                    O !== "suppressHydrationWarning" &&
                    (s.hasOwnProperty(O)
                      ? (w != null && O === "onScroll" && Te("scroll", e), a || v === w || (a = []))
                      : (a = a || []).push(O, w));
        }
        n && (a = a || []).push("style", n);
        var O = a;
        (t.updateQueue = O) && (t.flags |= 4);
      }
    }),
    (Oc = function (e, t, n, l) {
      n !== l && (t.flags |= 4);
    }));
  function Ti(e, t) {
    if (!Ne)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null;) (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null;) (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var u = e.child; u !== null;)
        ((n |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 14680064),
          (l |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null;)
        ((n |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = n), t);
  }
  function lm(e, t, n) {
    var l = t.pendingProps;
    switch ((ms(t), t.tag)) {
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
        return (be(t), null);
      case 1:
        return (ot(t.type) && yl(), be(t), null);
      case 3:
        return (
          (l = t.stateNode),
          Or(),
          Ce(lt),
          Ce(Ze),
          Ns(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (El(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Bt !== null && (iu(Bt), (Bt = null)))),
          Xs(e, t),
          be(t),
          null
        );
      case 5:
        Cs(t);
        var u = Gn(wi.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Nc(e, t, n, l, u), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return (be(t), null);
          }
          if (((e = Gn(Gt.current)), El(t))) {
            ((l = t.stateNode), (n = t.type));
            var a = t.memoizedProps;
            switch (((l[Xt] = t), (l[mi] = a), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (Te("cancel", l), Te("close", l));
                break;
              case "iframe":
              case "object":
              case "embed":
                Te("load", l);
                break;
              case "video":
              case "audio":
                for (u = 0; u < di.length; u++) Te(di[u], l);
                break;
              case "source":
                Te("error", l);
                break;
              case "img":
              case "image":
              case "link":
                (Te("error", l), Te("load", l));
                break;
              case "details":
                Te("toggle", l);
                break;
              case "input":
                (ua(l, a), Te("invalid", l));
                break;
              case "select":
                ((l._wrapperState = { wasMultiple: !!a.multiple }), Te("invalid", l));
                break;
              case "textarea":
                (ca(l, a), Te("invalid", l));
            }
            (Po(n, a), (u = null));
            for (var h in a)
              if (a.hasOwnProperty(h)) {
                var v = a[h];
                h === "children"
                  ? typeof v == "string"
                    ? l.textContent !== v &&
                      (a.suppressHydrationWarning !== !0 && _l(l.textContent, v, e),
                      (u = ["children", v]))
                    : typeof v == "number" &&
                      l.textContent !== "" + v &&
                      (a.suppressHydrationWarning !== !0 && _l(l.textContent, v, e),
                      (u = ["children", "" + v]))
                  : s.hasOwnProperty(h) && v != null && h === "onScroll" && Te("scroll", l);
              }
            switch (n) {
              case "input":
                (Xi(l), fa(l, a, !0));
                break;
              case "textarea":
                (Xi(l), pa(l));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (l.onclick = gl);
            }
            ((l = u), (t.updateQueue = l), l !== null && (t.flags |= 4));
          } else {
            ((h = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ha(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = h.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == "string"
                    ? (e = h.createElement(n, { is: l.is }))
                    : ((e = h.createElement(n)),
                      n === "select" &&
                        ((h = e), l.multiple ? (h.multiple = !0) : l.size && (h.size = l.size)))
                : (e = h.createElementNS(e, n)),
              (e[Xt] = t),
              (e[mi] = l),
              Pc(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = No(n, l)), n)) {
                case "dialog":
                  (Te("cancel", e), Te("close", e), (u = l));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Te("load", e), (u = l));
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < di.length; u++) Te(di[u], e);
                  u = l;
                  break;
                case "source":
                  (Te("error", e), (u = l));
                  break;
                case "img":
                case "image":
                case "link":
                  (Te("error", e), Te("load", e), (u = l));
                  break;
                case "details":
                  (Te("toggle", e), (u = l));
                  break;
                case "input":
                  (ua(e, l), (u = ko(e, l)), Te("invalid", e));
                  break;
                case "option":
                  u = l;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!l.multiple }),
                    (u = Y({}, l, { value: void 0 })),
                    Te("invalid", e));
                  break;
                case "textarea":
                  (ca(e, l), (u = To(e, l)), Te("invalid", e));
                  break;
                default:
                  u = l;
              }
              (Po(n, u), (v = u));
              for (a in v)
                if (v.hasOwnProperty(a)) {
                  var w = v[a];
                  a === "style"
                    ? ga(e, w)
                    : a === "dangerouslySetInnerHTML"
                      ? ((w = w ? w.__html : void 0), w != null && ma(e, w))
                      : a === "children"
                        ? typeof w == "string"
                          ? (n !== "textarea" || w !== "") && Xr(e, w)
                          : typeof w == "number" && Xr(e, "" + w)
                        : a !== "suppressContentEditableWarning" &&
                          a !== "suppressHydrationWarning" &&
                          a !== "autoFocus" &&
                          (s.hasOwnProperty(a)
                            ? w != null && a === "onScroll" && Te("scroll", e)
                            : w != null && A(e, a, w, h));
                }
              switch (n) {
                case "input":
                  (Xi(e), fa(e, l, !1));
                  break;
                case "textarea":
                  (Xi(e), pa(e));
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + ye(l.value));
                  break;
                case "select":
                  ((e.multiple = !!l.multiple),
                    (a = l.value),
                    a != null
                      ? fr(e, !!l.multiple, a, !1)
                      : l.defaultValue != null && fr(e, !!l.multiple, l.defaultValue, !0));
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = gl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (be(t), null);
      case 6:
        if (e && t.stateNode != null) Oc(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(i(166));
          if (((n = Gn(wi.current)), Gn(Gt.current), El(t))) {
            if (
              ((l = t.stateNode),
              (n = t.memoizedProps),
              (l[Xt] = t),
              (a = l.nodeValue !== n) && ((e = wt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  _l(l.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    _l(l.nodeValue, n, (e.mode & 1) !== 0);
              }
            a && (t.flags |= 4);
          } else
            ((l = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(l)),
              (l[Xt] = t),
              (t.stateNode = l));
        }
        return (be(t), null);
      case 13:
        if (
          (Ce(Re),
          (l = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ne && xt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Mf(), Tr(), (t.flags |= 98560), (a = !1));
          else if (((a = El(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(i(318));
              if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
                throw Error(i(317));
              a[Xt] = t;
            } else (Tr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (be(t), (a = !1));
          } else (Bt !== null && (iu(Bt), (Bt = null)), (a = !0));
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Re.current & 1) !== 0 ? $e === 0 && ($e = 3) : su())),
            t.updateQueue !== null && (t.flags |= 4),
            be(t),
            null);
      case 4:
        return (Or(), Xs(e, t), e === null && pi(t.stateNode.containerInfo), be(t), null);
      case 10:
        return (xs(t.type._context), be(t), null);
      case 17:
        return (ot(t.type) && yl(), be(t), null);
      case 19:
        if ((Ce(Re), (a = t.memoizedState), a === null)) return (be(t), null);
        if (((l = (t.flags & 128) !== 0), (h = a.rendering), h === null))
          if (l) Ti(a, !1);
          else {
            if ($e !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((h = Rl(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      Ti(a, !1),
                      l = h.updateQueue,
                      l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = n,
                      n = t.child;
                    n !== null;
                  )
                    ((a = n),
                      (e = l),
                      (a.flags &= 14680066),
                      (h = a.alternate),
                      h === null
                        ? ((a.childLanes = 0),
                          (a.lanes = e),
                          (a.child = null),
                          (a.subtreeFlags = 0),
                          (a.memoizedProps = null),
                          (a.memoizedState = null),
                          (a.updateQueue = null),
                          (a.dependencies = null),
                          (a.stateNode = null))
                        : ((a.childLanes = h.childLanes),
                          (a.lanes = h.lanes),
                          (a.child = h.child),
                          (a.subtreeFlags = 0),
                          (a.deletions = null),
                          (a.memoizedProps = h.memoizedProps),
                          (a.memoizedState = h.memoizedState),
                          (a.updateQueue = h.updateQueue),
                          (a.type = h.type),
                          (e = h.dependencies),
                          (a.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (Ee(Re, (Re.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              Ae() > Dr &&
              ((t.flags |= 128), (l = !0), Ti(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Rl(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Ti(a, !0),
                a.tail === null && a.tailMode === "hidden" && !h.alternate && !Ne)
              )
                return (be(t), null);
            } else
              2 * Ae() - a.renderingStartTime > Dr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (l = !0), Ti(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((n = a.last), n !== null ? (n.sibling = h) : (t.child = h), (a.last = h));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = Ae()),
            (t.sibling = null),
            (n = Re.current),
            Ee(Re, l ? (n & 1) | 2 : n & 1),
            t)
          : (be(t), null);
      case 22:
      case 23:
        return (
          ou(),
          (l = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
          l && (t.mode & 1) !== 0
            ? (kt & 1073741824) !== 0 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : be(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function om(e, t) {
    switch ((ms(t), t.tag)) {
      case 1:
        return (
          ot(t.type) && yl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Or(),
          Ce(lt),
          Ce(Ze),
          Ns(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Cs(t), null);
      case 13:
        if ((Ce(Re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(i(340));
          Tr();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Ce(Re), null);
      case 4:
        return (Or(), null);
      case 10:
        return (xs(t.type._context), null);
      case 22:
      case 23:
        return (ou(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ul = !1,
    et = !1,
    sm = typeof WeakSet == "function" ? WeakSet : Set,
    G = null;
  function zr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Fe(e, t, l);
        }
      else n.current = null;
  }
  function Gs(e, t, n) {
    try {
      n();
    } catch (l) {
      Fe(e, t, l);
    }
  }
  var Rc = !1;
  function um(e, t) {
    if (((os = ll), (e = uf()), Jo(e))) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var u = l.anchorOffset,
              a = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, a.nodeType);
            } catch {
              n = null;
              break e;
            }
            var h = 0,
              v = -1,
              w = -1,
              O = 0,
              I = 0,
              U = e,
              F = null;
            t: for (;;) {
              for (
                var X;
                U !== n || (u !== 0 && U.nodeType !== 3) || (v = h + u),
                  U !== a || (l !== 0 && U.nodeType !== 3) || (w = h + l),
                  U.nodeType === 3 && (h += U.nodeValue.length),
                  (X = U.firstChild) !== null;
              )
                ((F = U), (U = X));
              for (;;) {
                if (U === e) break t;
                if (
                  (F === n && ++O === u && (v = h),
                  F === a && ++I === l && (w = h),
                  (X = U.nextSibling) !== null)
                )
                  break;
                ((U = F), (F = U.parentNode));
              }
              U = X;
            }
            n = v === -1 || w === -1 ? null : { start: v, end: w };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ss = { focusedElem: e, selectionRange: n }, ll = !1, G = t; G !== null;)
      if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (G = e));
      else
        for (; G !== null;) {
          t = G;
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
                    var q = K.memoizedProps,
                      je = K.memoizedState,
                      C = t.stateNode,
                      k = C.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? q : Wt(t.type, q),
                        je,
                      );
                    C.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var P = t.stateNode.containerInfo;
                  P.nodeType === 1
                    ? (P.textContent = "")
                    : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (B) {
            Fe(t, t.return, B);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (G = e));
            break;
          }
          G = t.return;
        }
    return ((K = Rc), (Rc = !1), K);
  }
  function Ci(e, t, n) {
    var l = t.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var u = (l = l.next);
      do {
        if ((u.tag & e) === e) {
          var a = u.destroy;
          ((u.destroy = void 0), a !== void 0 && Gs(t, n, a));
        }
        u = u.next;
      } while (u !== l);
    }
  }
  function Vl(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var l = n.create;
          n.destroy = l();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ks(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function zc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), zc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Xt], delete t[mi], delete t[cs], delete t[Hh], delete t[Qh])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Mc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Dc(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Mc(e.return)) return null;
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
  function qs(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = gl)));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (qs(e, t, n), e = e.sibling; e !== null;) (qs(e, t, n), (e = e.sibling));
  }
  function Zs(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (Zs(e, t, n), e = e.sibling; e !== null;) (Zs(e, t, n), (e = e.sibling));
  }
  var Ge = null,
    $t = !1;
  function Cn(e, t, n) {
    for (n = n.child; n !== null;) (Lc(e, t, n), (n = n.sibling));
  }
  function Lc(e, t, n) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function")
      try {
        Yt.onCommitFiberUnmount(bi, n);
      } catch {}
    switch (n.tag) {
      case 5:
        et || zr(n, t);
      case 6:
        var l = Ge,
          u = $t;
        ((Ge = null),
          Cn(e, t, n),
          (Ge = l),
          ($t = u),
          Ge !== null &&
            ($t
              ? ((e = Ge),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Ge.removeChild(n.stateNode)));
        break;
      case 18:
        Ge !== null &&
          ($t
            ? ((e = Ge),
              (n = n.stateNode),
              e.nodeType === 8 ? fs(e.parentNode, n) : e.nodeType === 1 && fs(e, n),
              ii(e))
            : fs(Ge, n.stateNode));
        break;
      case 4:
        ((l = Ge),
          (u = $t),
          (Ge = n.stateNode.containerInfo),
          ($t = !0),
          Cn(e, t, n),
          (Ge = l),
          ($t = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!et && ((l = n.updateQueue), l !== null && ((l = l.lastEffect), l !== null))) {
          u = l = l.next;
          do {
            var a = u,
              h = a.destroy;
            ((a = a.tag),
              h !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && Gs(n, t, h),
              (u = u.next));
          } while (u !== l);
        }
        Cn(e, t, n);
        break;
      case 1:
        if (!et && (zr(n, t), (l = n.stateNode), typeof l.componentWillUnmount == "function"))
          try {
            ((l.props = n.memoizedProps), (l.state = n.memoizedState), l.componentWillUnmount());
          } catch (v) {
            Fe(n, t, v);
          }
        Cn(e, t, n);
        break;
      case 21:
        Cn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((et = (l = et) || n.memoizedState !== null), Cn(e, t, n), (et = l))
          : Cn(e, t, n);
        break;
      default:
        Cn(e, t, n);
    }
  }
  function Fc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new sm()),
        t.forEach(function (l) {
          var u = gm.bind(null, e, l);
          n.has(l) || (n.add(l), l.then(u, u));
        }));
    }
  }
  function Ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l];
        try {
          var a = e,
            h = t,
            v = h;
          e: for (; v !== null;) {
            switch (v.tag) {
              case 5:
                ((Ge = v.stateNode), ($t = !1));
                break e;
              case 3:
                ((Ge = v.stateNode.containerInfo), ($t = !0));
                break e;
              case 4:
                ((Ge = v.stateNode.containerInfo), ($t = !0));
                break e;
            }
            v = v.return;
          }
          if (Ge === null) throw Error(i(160));
          (Lc(a, h, u), (Ge = null), ($t = !1));
          var w = u.alternate;
          (w !== null && (w.return = null), (u.return = null));
        } catch (O) {
          Fe(u, t, O);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (Ic(t, e), (t = t.sibling));
  }
  function Ic(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ht(t, e), qt(e), l & 4)) {
          try {
            (Ci(3, e, e.return), Vl(3, e));
          } catch (q) {
            Fe(e, e.return, q);
          }
          try {
            Ci(5, e, e.return);
          } catch (q) {
            Fe(e, e.return, q);
          }
        }
        break;
      case 1:
        (Ht(t, e), qt(e), l & 512 && n !== null && zr(n, n.return));
        break;
      case 5:
        if ((Ht(t, e), qt(e), l & 512 && n !== null && zr(n, n.return), e.flags & 32)) {
          var u = e.stateNode;
          try {
            Xr(u, "");
          } catch (q) {
            Fe(e, e.return, q);
          }
        }
        if (l & 4 && ((u = e.stateNode), u != null)) {
          var a = e.memoizedProps,
            h = n !== null ? n.memoizedProps : a,
            v = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              (v === "input" && a.type === "radio" && a.name != null && aa(u, a), No(v, h));
              var O = No(v, a);
              for (h = 0; h < w.length; h += 2) {
                var I = w[h],
                  U = w[h + 1];
                I === "style"
                  ? ga(u, U)
                  : I === "dangerouslySetInnerHTML"
                    ? ma(u, U)
                    : I === "children"
                      ? Xr(u, U)
                      : A(u, I, U, O);
              }
              switch (v) {
                case "input":
                  So(u, a);
                  break;
                case "textarea":
                  da(u, a);
                  break;
                case "select":
                  var F = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!a.multiple;
                  var X = a.value;
                  X != null
                    ? fr(u, !!a.multiple, X, !1)
                    : F !== !!a.multiple &&
                      (a.defaultValue != null
                        ? fr(u, !!a.multiple, a.defaultValue, !0)
                        : fr(u, !!a.multiple, a.multiple ? [] : "", !1));
              }
              u[mi] = a;
            } catch (q) {
              Fe(e, e.return, q);
            }
        }
        break;
      case 6:
        if ((Ht(t, e), qt(e), l & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          ((u = e.stateNode), (a = e.memoizedProps));
          try {
            u.nodeValue = a;
          } catch (q) {
            Fe(e, e.return, q);
          }
        }
        break;
      case 3:
        if ((Ht(t, e), qt(e), l & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            ii(t.containerInfo);
          } catch (q) {
            Fe(e, e.return, q);
          }
        break;
      case 4:
        (Ht(t, e), qt(e));
        break;
      case 13:
        (Ht(t, e),
          qt(e),
          (u = e.child),
          u.flags & 8192 &&
            ((a = u.memoizedState !== null),
            (u.stateNode.isHidden = a),
            !a || (u.alternate !== null && u.alternate.memoizedState !== null) || (eu = Ae())),
          l & 4 && Fc(e));
        break;
      case 22:
        if (
          ((I = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((et = (O = et) || I), Ht(t, e), (et = O)) : Ht(t, e),
          qt(e),
          l & 8192)
        ) {
          if (
            ((O = e.memoizedState !== null), (e.stateNode.isHidden = O) && !I && (e.mode & 1) !== 0)
          )
            for (G = e, I = e.child; I !== null;) {
              for (U = G = I; G !== null;) {
                switch (((F = G), (X = F.child), F.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ci(4, F, F.return);
                    break;
                  case 1:
                    zr(F, F.return);
                    var K = F.stateNode;
                    if (typeof K.componentWillUnmount == "function") {
                      ((l = F), (n = F.return));
                      try {
                        ((t = l),
                          (K.props = t.memoizedProps),
                          (K.state = t.memoizedState),
                          K.componentWillUnmount());
                      } catch (q) {
                        Fe(l, n, q);
                      }
                    }
                    break;
                  case 5:
                    zr(F, F.return);
                    break;
                  case 22:
                    if (F.memoizedState !== null) {
                      Uc(U);
                      continue;
                    }
                }
                X !== null ? ((X.return = F), (G = X)) : Uc(U);
              }
              I = I.sibling;
            }
          e: for (I = null, U = e; ;) {
            if (U.tag === 5) {
              if (I === null) {
                I = U;
                try {
                  ((u = U.stateNode),
                    O
                      ? ((a = u.style),
                        typeof a.setProperty == "function"
                          ? a.setProperty("display", "none", "important")
                          : (a.display = "none"))
                      : ((v = U.stateNode),
                        (w = U.memoizedProps.style),
                        (h = w != null && w.hasOwnProperty("display") ? w.display : null),
                        (v.style.display = _a("display", h))));
                } catch (q) {
                  Fe(e, e.return, q);
                }
              }
            } else if (U.tag === 6) {
              if (I === null)
                try {
                  U.stateNode.nodeValue = O ? "" : U.memoizedProps;
                } catch (q) {
                  Fe(e, e.return, q);
                }
            } else if (
              ((U.tag !== 22 && U.tag !== 23) || U.memoizedState === null || U === e) &&
              U.child !== null
            ) {
              ((U.child.return = U), (U = U.child));
              continue;
            }
            if (U === e) break e;
            for (; U.sibling === null;) {
              if (U.return === null || U.return === e) break e;
              (I === U && (I = null), (U = U.return));
            }
            (I === U && (I = null), (U.sibling.return = U.return), (U = U.sibling));
          }
        }
        break;
      case 19:
        (Ht(t, e), qt(e), l & 4 && Fc(e));
        break;
      case 21:
        break;
      default:
        (Ht(t, e), qt(e));
    }
  }
  function qt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (Mc(n)) {
              var l = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (l.tag) {
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (Xr(u, ""), (l.flags &= -33));
            var a = Dc(e);
            Zs(e, a, u);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              v = Dc(e);
            qs(e, v, h);
            break;
          default:
            throw Error(i(161));
        }
      } catch (w) {
        Fe(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function am(e, t, n) {
    ((G = e), Ac(e));
  }
  function Ac(e, t, n) {
    for (var l = (e.mode & 1) !== 0; G !== null;) {
      var u = G,
        a = u.child;
      if (u.tag === 22 && l) {
        var h = u.memoizedState !== null || Ul;
        if (!h) {
          var v = u.alternate,
            w = (v !== null && v.memoizedState !== null) || et;
          v = Ul;
          var O = et;
          if (((Ul = h), (et = w) && !O))
            for (G = u; G !== null;)
              ((h = G),
                (w = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Vc(u)
                  : w !== null
                    ? ((w.return = h), (G = w))
                    : Vc(u));
          for (; a !== null;) ((G = a), Ac(a), (a = a.sibling));
          ((G = u), (Ul = v), (et = O));
        }
        jc(e);
      } else (u.subtreeFlags & 8772) !== 0 && a !== null ? ((a.return = u), (G = a)) : jc(e);
    }
  }
  function jc(e) {
    for (; G !== null;) {
      var t = G;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                et || Vl(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !et)
                  if (n === null) l.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type ? n.memoizedProps : Wt(t.type, n.memoizedProps);
                    l.componentDidUpdate(u, n.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                  }
                var a = t.updateQueue;
                a !== null && Uf(t, a, l);
                break;
              case 3:
                var h = t.updateQueue;
                if (h !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Uf(t, h, n);
                }
                break;
              case 5:
                var v = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = v;
                  var w = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && n.focus();
                      break;
                    case "img":
                      w.src && (n.src = w.src);
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
                  var O = t.alternate;
                  if (O !== null) {
                    var I = O.memoizedState;
                    if (I !== null) {
                      var U = I.dehydrated;
                      U !== null && ii(U);
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
                throw Error(i(163));
            }
          et || (t.flags & 512 && Ks(t));
        } catch (F) {
          Fe(t, t.return, F);
        }
      }
      if (t === e) {
        G = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (G = n));
        break;
      }
      G = t.return;
    }
  }
  function Uc(e) {
    for (; G !== null;) {
      var t = G;
      if (t === e) {
        G = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (G = n));
        break;
      }
      G = t.return;
    }
  }
  function Vc(e) {
    for (; G !== null;) {
      var t = G;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Vl(4, t);
            } catch (w) {
              Fe(t, n, w);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var u = t.return;
              try {
                l.componentDidMount();
              } catch (w) {
                Fe(t, u, w);
              }
            }
            var a = t.return;
            try {
              Ks(t);
            } catch (w) {
              Fe(t, a, w);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Ks(t);
            } catch (w) {
              Fe(t, h, w);
            }
        }
      } catch (w) {
        Fe(t, t.return, w);
      }
      if (t === e) {
        G = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        ((v.return = t.return), (G = v));
        break;
      }
      G = t.return;
    }
  }
  var fm = Math.ceil,
    Bl = j.ReactCurrentDispatcher,
    Js = j.ReactCurrentOwner,
    Lt = j.ReactCurrentBatchConfig,
    he = 0,
    Qe = null,
    Ve = null,
    Ke = 0,
    kt = 0,
    Mr = xn(0),
    $e = 0,
    Pi = null,
    qn = 0,
    Wl = 0,
    bs = 0,
    Ni = null,
    ut = null,
    eu = 0,
    Dr = 1 / 0,
    an = null,
    $l = !1,
    tu = null,
    Pn = null,
    Hl = !1,
    Nn = null,
    Ql = 0,
    Oi = 0,
    nu = null,
    Yl = -1,
    Xl = 0;
  function it() {
    return (he & 6) !== 0 ? Ae() : Yl !== -1 ? Yl : (Yl = Ae());
  }
  function On(e) {
    return (e.mode & 1) === 0
      ? 1
      : (he & 2) !== 0 && Ke !== 0
        ? Ke & -Ke
        : Xh.transition !== null
          ? (Xl === 0 && (Xl = Ma()), Xl)
          : ((e = we), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ba(e.type))), e);
  }
  function Qt(e, t, n, l) {
    if (50 < Oi) throw ((Oi = 0), (nu = null), Error(i(185)));
    (br(e, n, l),
      ((he & 2) === 0 || e !== Qe) &&
        (e === Qe && ((he & 2) === 0 && (Wl |= n), $e === 4 && Rn(e, Ke)),
        at(e, l),
        n === 1 && he === 0 && (t.mode & 1) === 0 && ((Dr = Ae() + 500), xl && Sn())));
  }
  function at(e, t) {
    var n = e.callbackNode;
    Xp(e, t);
    var l = nl(e, e === Qe ? Ke : 0);
    if (l === 0) (n !== null && Oa(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = l & -l), e.callbackPriority !== t)) {
      if ((n != null && Oa(n), t === 1))
        (e.tag === 0 ? Yh(Wc.bind(null, e)) : Pf(Wc.bind(null, e)),
          Wh(function () {
            (he & 6) === 0 && Sn();
          }),
          (n = null));
      else {
        switch (Da(l)) {
          case 1:
            n = Fo;
            break;
          case 4:
            n = Ra;
            break;
          case 16:
            n = Ji;
            break;
          case 536870912:
            n = za;
            break;
          default:
            n = Ji;
        }
        n = qc(n, Bc.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Bc(e, t) {
    if (((Yl = -1), (Xl = 0), (he & 6) !== 0)) throw Error(i(327));
    var n = e.callbackNode;
    if (Lr() && e.callbackNode !== n) return null;
    var l = nl(e, e === Qe ? Ke : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = Gl(e, l);
    else {
      t = l;
      var u = he;
      he |= 2;
      var a = Hc();
      (Qe !== e || Ke !== t) && ((an = null), (Dr = Ae() + 500), Jn(e, t));
      do
        try {
          pm();
          break;
        } catch (v) {
          $c(e, v);
        }
      while (!0);
      (ws(), (Bl.current = a), (he = u), Ve !== null ? (t = 0) : ((Qe = null), (Ke = 0), (t = $e)));
    }
    if (t !== 0) {
      if ((t === 2 && ((u = Io(e)), u !== 0 && ((l = u), (t = ru(e, u)))), t === 1))
        throw ((n = Pi), Jn(e, 0), Rn(e, l), at(e, Ae()), n);
      if (t === 6) Rn(e, l);
      else {
        if (
          ((u = e.current.alternate),
          (l & 30) === 0 &&
            !cm(u) &&
            ((t = Gl(e, l)),
            t === 2 && ((a = Io(e)), a !== 0 && ((l = a), (t = ru(e, a)))),
            t === 1))
        )
          throw ((n = Pi), Jn(e, 0), Rn(e, l), at(e, Ae()), n);
        switch (((e.finishedWork = u), (e.finishedLanes = l), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            bn(e, ut, an);
            break;
          case 3:
            if ((Rn(e, l), (l & 130023424) === l && ((t = eu + 500 - Ae()), 10 < t))) {
              if (nl(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & l) !== l)) {
                (it(), (e.pingedLanes |= e.suspendedLanes & u));
                break;
              }
              e.timeoutHandle = as(bn.bind(null, e, ut, an), t);
              break;
            }
            bn(e, ut, an);
            break;
          case 4:
            if ((Rn(e, l), (l & 4194240) === l)) break;
            for (t = e.eventTimes, u = -1; 0 < l;) {
              var h = 31 - Ut(l);
              ((a = 1 << h), (h = t[h]), h > u && (u = h), (l &= ~a));
            }
            if (
              ((l = u),
              (l = Ae() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                    ? 480
                    : 1080 > l
                      ? 1080
                      : 1920 > l
                        ? 1920
                        : 3e3 > l
                          ? 3e3
                          : 4320 > l
                            ? 4320
                            : 1960 * fm(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = as(bn.bind(null, e, ut, an), l);
              break;
            }
            bn(e, ut, an);
            break;
          case 5:
            bn(e, ut, an);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return (at(e, Ae()), e.callbackNode === n ? Bc.bind(null, e) : null);
  }
  function ru(e, t) {
    var n = Ni;
    return (
      e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256),
      (e = Gl(e, t)),
      e !== 2 && ((t = ut), (ut = n), t !== null && iu(t)),
      e
    );
  }
  function iu(e) {
    ut === null ? (ut = e) : ut.push.apply(ut, e);
  }
  function cm(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var l = 0; l < n.length; l++) {
            var u = n[l],
              a = u.getSnapshot;
            u = u.value;
            try {
              if (!Vt(a(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
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
  function Rn(e, t) {
    for (
      t &= ~bs, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - Ut(t),
        l = 1 << n;
      ((e[n] = -1), (t &= ~l));
    }
  }
  function Wc(e) {
    if ((he & 6) !== 0) throw Error(i(327));
    Lr();
    var t = nl(e, 0);
    if ((t & 1) === 0) return (at(e, Ae()), null);
    var n = Gl(e, t);
    if (e.tag !== 0 && n === 2) {
      var l = Io(e);
      l !== 0 && ((t = l), (n = ru(e, l)));
    }
    if (n === 1) throw ((n = Pi), Jn(e, 0), Rn(e, t), at(e, Ae()), n);
    if (n === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      bn(e, ut, an),
      at(e, Ae()),
      null
    );
  }
  function lu(e, t) {
    var n = he;
    he |= 1;
    try {
      return e(t);
    } finally {
      ((he = n), he === 0 && ((Dr = Ae() + 500), xl && Sn()));
    }
  }
  function Zn(e) {
    Nn !== null && Nn.tag === 0 && (he & 6) === 0 && Lr();
    var t = he;
    he |= 1;
    var n = Lt.transition,
      l = we;
    try {
      if (((Lt.transition = null), (we = 1), e)) return e();
    } finally {
      ((we = l), (Lt.transition = n), (he = t), (he & 6) === 0 && Sn());
    }
  }
  function ou() {
    ((kt = Mr.current), Ce(Mr));
  }
  function Jn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Bh(n)), Ve !== null))
      for (n = Ve.return; n !== null;) {
        var l = n;
        switch ((ms(l), l.tag)) {
          case 1:
            ((l = l.type.childContextTypes), l != null && yl());
            break;
          case 3:
            (Or(), Ce(lt), Ce(Ze), Ns());
            break;
          case 5:
            Cs(l);
            break;
          case 4:
            Or();
            break;
          case 13:
            Ce(Re);
            break;
          case 19:
            Ce(Re);
            break;
          case 10:
            xs(l.type._context);
            break;
          case 22:
          case 23:
            ou();
        }
        n = n.return;
      }
    if (
      ((Qe = e),
      (Ve = e = zn(e.current, null)),
      (Ke = kt = t),
      ($e = 0),
      (Pi = null),
      (bs = Wl = qn = 0),
      (ut = Ni = null),
      Xn !== null)
    ) {
      for (t = 0; t < Xn.length; t++)
        if (((n = Xn[t]), (l = n.interleaved), l !== null)) {
          n.interleaved = null;
          var u = l.next,
            a = n.pending;
          if (a !== null) {
            var h = a.next;
            ((a.next = u), (l.next = h));
          }
          n.pending = l;
        }
      Xn = null;
    }
    return e;
  }
  function $c(e, t) {
    do {
      var n = Ve;
      try {
        if ((ws(), (zl.current = Fl), Ml)) {
          for (var l = ze.memoizedState; l !== null;) {
            var u = l.queue;
            (u !== null && (u.pending = null), (l = l.next));
          }
          Ml = !1;
        }
        if (
          ((Kn = 0),
          (He = We = ze = null),
          (xi = !1),
          (ki = 0),
          (Js.current = null),
          n === null || n.return === null)
        ) {
          (($e = 1), (Pi = t), (Ve = null));
          break;
        }
        e: {
          var a = e,
            h = n.return,
            v = n,
            w = t;
          if (
            ((t = Ke),
            (v.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var O = w,
              I = v,
              U = I.tag;
            if ((I.mode & 1) === 0 && (U === 0 || U === 11 || U === 15)) {
              var F = I.alternate;
              F
                ? ((I.updateQueue = F.updateQueue),
                  (I.memoizedState = F.memoizedState),
                  (I.lanes = F.lanes))
                : ((I.updateQueue = null), (I.memoizedState = null));
            }
            var X = hc(h);
            if (X !== null) {
              ((X.flags &= -257), mc(X, h, v, a, t), X.mode & 1 && pc(a, O, t), (t = X), (w = O));
              var K = t.updateQueue;
              if (K === null) {
                var q = new Set();
                (q.add(w), (t.updateQueue = q));
              } else K.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                (pc(a, O, t), su());
                break e;
              }
              w = Error(i(426));
            }
          } else if (Ne && v.mode & 1) {
            var je = hc(h);
            if (je !== null) {
              ((je.flags & 65536) === 0 && (je.flags |= 256), mc(je, h, v, a, t), vs(Rr(w, v)));
              break e;
            }
          }
          ((a = w = Rr(w, v)),
            $e !== 4 && ($e = 2),
            Ni === null ? (Ni = [a]) : Ni.push(a),
            (a = h));
          do {
            switch (a.tag) {
              case 3:
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var C = cc(a, w, t);
                jf(a, C);
                break e;
              case 1:
                v = w;
                var k = a.type,
                  P = a.stateNode;
                if (
                  (a.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == "function" ||
                    (P !== null &&
                      typeof P.componentDidCatch == "function" &&
                      (Pn === null || !Pn.has(P))))
                ) {
                  ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                  var B = dc(a, v, t);
                  jf(a, B);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        Yc(n);
      } catch (J) {
        ((t = J), Ve === n && n !== null && (Ve = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Hc() {
    var e = Bl.current;
    return ((Bl.current = Fl), e === null ? Fl : e);
  }
  function su() {
    (($e === 0 || $e === 3 || $e === 2) && ($e = 4),
      Qe === null || ((qn & 268435455) === 0 && (Wl & 268435455) === 0) || Rn(Qe, Ke));
  }
  function Gl(e, t) {
    var n = he;
    he |= 2;
    var l = Hc();
    (Qe !== e || Ke !== t) && ((an = null), Jn(e, t));
    do
      try {
        dm();
        break;
      } catch (u) {
        $c(e, u);
      }
    while (!0);
    if ((ws(), (he = n), (Bl.current = l), Ve !== null)) throw Error(i(261));
    return ((Qe = null), (Ke = 0), $e);
  }
  function dm() {
    for (; Ve !== null;) Qc(Ve);
  }
  function pm() {
    for (; Ve !== null && !jp();) Qc(Ve);
  }
  function Qc(e) {
    var t = Kc(e.alternate, e, kt);
    ((e.memoizedProps = e.pendingProps), t === null ? Yc(e) : (Ve = t), (Js.current = null));
  }
  function Yc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = lm(n, t, kt)), n !== null)) {
          Ve = n;
          return;
        }
      } else {
        if (((n = om(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ve = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          (($e = 6), (Ve = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ve = t;
        return;
      }
      Ve = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function bn(e, t, n) {
    var l = we,
      u = Lt.transition;
    try {
      ((Lt.transition = null), (we = 1), hm(e, t, n, l));
    } finally {
      ((Lt.transition = u), (we = l));
    }
    return null;
  }
  function hm(e, t, n, l) {
    do Lr();
    while (Nn !== null);
    if ((he & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var u = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(i(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var a = n.lanes | n.childLanes;
    if (
      (Gp(e, a),
      e === Qe && ((Ve = Qe = null), (Ke = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Hl ||
        ((Hl = !0),
        qc(Ji, function () {
          return (Lr(), null);
        })),
      (a = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || a)
    ) {
      ((a = Lt.transition), (Lt.transition = null));
      var h = we;
      we = 1;
      var v = he;
      ((he |= 4),
        (Js.current = null),
        um(e, n),
        Ic(n, e),
        Lh(ss),
        (ll = !!os),
        (ss = os = null),
        (e.current = n),
        am(n),
        Up(),
        (he = v),
        (we = h),
        (Lt.transition = a));
    } else e.current = n;
    if (
      (Hl && ((Hl = !1), (Nn = e), (Ql = u)),
      (a = e.pendingLanes),
      a === 0 && (Pn = null),
      Wp(n.stateNode),
      at(e, Ae()),
      t !== null)
    )
      for (l = e.onRecoverableError, n = 0; n < t.length; n++)
        ((u = t[n]), l(u.value, { componentStack: u.stack, digest: u.digest }));
    if ($l) throw (($l = !1), (e = tu), (tu = null), e);
    return (
      (Ql & 1) !== 0 && e.tag !== 0 && Lr(),
      (a = e.pendingLanes),
      (a & 1) !== 0 ? (e === nu ? Oi++ : ((Oi = 0), (nu = e))) : (Oi = 0),
      Sn(),
      null
    );
  }
  function Lr() {
    if (Nn !== null) {
      var e = Da(Ql),
        t = Lt.transition,
        n = we;
      try {
        if (((Lt.transition = null), (we = 16 > e ? 16 : e), Nn === null)) var l = !1;
        else {
          if (((e = Nn), (Nn = null), (Ql = 0), (he & 6) !== 0)) throw Error(i(331));
          var u = he;
          for (he |= 4, G = e.current; G !== null;) {
            var a = G,
              h = a.child;
            if ((G.flags & 16) !== 0) {
              var v = a.deletions;
              if (v !== null) {
                for (var w = 0; w < v.length; w++) {
                  var O = v[w];
                  for (G = O; G !== null;) {
                    var I = G;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ci(8, I, a);
                    }
                    var U = I.child;
                    if (U !== null) ((U.return = I), (G = U));
                    else
                      for (; G !== null;) {
                        I = G;
                        var F = I.sibling,
                          X = I.return;
                        if ((zc(I), I === O)) {
                          G = null;
                          break;
                        }
                        if (F !== null) {
                          ((F.return = X), (G = F));
                          break;
                        }
                        G = X;
                      }
                  }
                }
                var K = a.alternate;
                if (K !== null) {
                  var q = K.child;
                  if (q !== null) {
                    K.child = null;
                    do {
                      var je = q.sibling;
                      ((q.sibling = null), (q = je));
                    } while (q !== null);
                  }
                }
                G = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && h !== null) ((h.return = a), (G = h));
            else
              e: for (; G !== null;) {
                if (((a = G), (a.flags & 2048) !== 0))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ci(9, a, a.return);
                  }
                var C = a.sibling;
                if (C !== null) {
                  ((C.return = a.return), (G = C));
                  break e;
                }
                G = a.return;
              }
          }
          var k = e.current;
          for (G = k; G !== null;) {
            h = G;
            var P = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && P !== null) ((P.return = h), (G = P));
            else
              e: for (h = k; G !== null;) {
                if (((v = G), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vl(9, v);
                    }
                  } catch (J) {
                    Fe(v, v.return, J);
                  }
                if (v === h) {
                  G = null;
                  break e;
                }
                var B = v.sibling;
                if (B !== null) {
                  ((B.return = v.return), (G = B));
                  break e;
                }
                G = v.return;
              }
          }
          if (((he = u), Sn(), Yt && typeof Yt.onPostCommitFiberRoot == "function"))
            try {
              Yt.onPostCommitFiberRoot(bi, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        ((we = n), (Lt.transition = t));
      }
    }
    return !1;
  }
  function Xc(e, t, n) {
    ((t = Rr(n, t)),
      (t = cc(e, t, 1)),
      (e = Tn(e, t, 1)),
      (t = it()),
      e !== null && (br(e, 1, t), at(e, t)));
  }
  function Fe(e, t, n) {
    if (e.tag === 3) Xc(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Xc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" && (Pn === null || !Pn.has(l)))
          ) {
            ((e = Rr(n, e)),
              (e = dc(t, e, 1)),
              (t = Tn(t, e, 1)),
              (e = it()),
              t !== null && (br(t, 1, e), at(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function mm(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (t = it()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Qe === e &&
        (Ke & n) === n &&
        ($e === 4 || ($e === 3 && (Ke & 130023424) === Ke && 500 > Ae() - eu)
          ? Jn(e, 0)
          : (bs |= n)),
      at(e, t));
  }
  function Gc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = tl), (tl <<= 1), (tl & 130023424) === 0 && (tl = 4194304)));
    var n = it();
    ((e = on(e, t)), e !== null && (br(e, t, n), at(e, n)));
  }
  function _m(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Gc(e, n));
  }
  function gm(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          u = e.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    (l !== null && l.delete(t), Gc(e, n));
  }
  var Kc;
  Kc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || lt.current) st = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((st = !1), im(e, t, n));
        st = (e.flags & 131072) !== 0;
      }
    else ((st = !1), Ne && (t.flags & 1048576) !== 0 && Nf(t, Sl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var l = t.type;
        (jl(e, t), (e = t.pendingProps));
        var u = kr(t, Ze.current);
        (Nr(t, n), (u = zs(null, t, l, e, u, n)));
        var a = Ms();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ot(l) ? ((a = !0), wl(t)) : (a = !1),
              (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
              Es(t),
              (u.updater = Il),
              (t.stateNode = u),
              (u._reactInternals = t),
              js(t, l, e, n),
              (t = Ws(null, t, l, !0, a, n)))
            : ((t.tag = 0), Ne && a && hs(t), rt(null, t, u, n), (t = t.child)),
          t
        );
      case 16:
        l = t.elementType;
        e: {
          switch (
            (jl(e, t),
            (e = t.pendingProps),
            (u = l._init),
            (l = u(l._payload)),
            (t.type = l),
            (u = t.tag = ym(l)),
            (e = Wt(l, e)),
            u)
          ) {
            case 0:
              t = Bs(null, t, l, e, n);
              break e;
            case 1:
              t = xc(null, t, l, e, n);
              break e;
            case 11:
              t = _c(null, t, l, e, n);
              break e;
            case 14:
              t = gc(null, t, l, Wt(l.type, e), n);
              break e;
          }
          throw Error(i(306, l, ""));
        }
        return t;
      case 0:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : Wt(l, u)),
          Bs(e, t, l, u, n)
        );
      case 1:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : Wt(l, u)),
          xc(e, t, l, u, n)
        );
      case 3:
        e: {
          if ((kc(t), e === null)) throw Error(i(387));
          ((l = t.pendingProps),
            (a = t.memoizedState),
            (u = a.element),
            Af(e, t),
            Ol(t, l, null, n));
          var h = t.memoizedState;
          if (((l = h.element), a.isDehydrated))
            if (
              ((a = {
                element: l,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              t.flags & 256)
            ) {
              ((u = Rr(Error(i(423)), t)), (t = Sc(e, t, l, n, u)));
              break e;
            } else if (l !== u) {
              ((u = Rr(Error(i(424)), t)), (t = Sc(e, t, l, n, u)));
              break e;
            } else
              for (
                xt = wn(t.stateNode.containerInfo.firstChild),
                  wt = t,
                  Ne = !0,
                  Bt = null,
                  n = Ff(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Tr(), l === u)) {
              t = un(e, t, n);
              break e;
            }
            rt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Vf(t),
          e === null && gs(t),
          (l = t.type),
          (u = t.pendingProps),
          (a = e !== null ? e.memoizedProps : null),
          (h = u.children),
          us(l, u) ? (h = null) : a !== null && us(l, a) && (t.flags |= 32),
          wc(e, t),
          rt(e, t, h, n),
          t.child
        );
      case 6:
        return (e === null && gs(t), null);
      case 13:
        return Ec(e, t, n);
      case 4:
        return (
          Ts(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Cr(t, null, l, n)) : rt(e, t, l, n),
          t.child
        );
      case 11:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : Wt(l, u)),
          _c(e, t, l, u, n)
        );
      case 7:
        return (rt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (rt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (rt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((l = t.type._context),
            (u = t.pendingProps),
            (a = t.memoizedProps),
            (h = u.value),
            Ee(Cl, l._currentValue),
            (l._currentValue = h),
            a !== null)
          )
            if (Vt(a.value, h)) {
              if (a.children === u.children && !lt.current) {
                t = un(e, t, n);
                break e;
              }
            } else
              for (a = t.child, a !== null && (a.return = t); a !== null;) {
                var v = a.dependencies;
                if (v !== null) {
                  h = a.child;
                  for (var w = v.firstContext; w !== null;) {
                    if (w.context === l) {
                      if (a.tag === 1) {
                        ((w = sn(-1, n & -n)), (w.tag = 2));
                        var O = a.updateQueue;
                        if (O !== null) {
                          O = O.shared;
                          var I = O.pending;
                          (I === null ? (w.next = w) : ((w.next = I.next), (I.next = w)),
                            (O.pending = w));
                        }
                      }
                      ((a.lanes |= n),
                        (w = a.alternate),
                        w !== null && (w.lanes |= n),
                        ks(a.return, n, t),
                        (v.lanes |= n));
                      break;
                    }
                    w = w.next;
                  }
                } else if (a.tag === 10) h = a.type === t.type ? null : a.child;
                else if (a.tag === 18) {
                  if (((h = a.return), h === null)) throw Error(i(341));
                  ((h.lanes |= n),
                    (v = h.alternate),
                    v !== null && (v.lanes |= n),
                    ks(h, n, t),
                    (h = a.sibling));
                } else h = a.child;
                if (h !== null) h.return = a;
                else
                  for (h = a; h !== null;) {
                    if (h === t) {
                      h = null;
                      break;
                    }
                    if (((a = h.sibling), a !== null)) {
                      ((a.return = h.return), (h = a));
                      break;
                    }
                    h = h.return;
                  }
                a = h;
              }
          (rt(e, t, u.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (l = t.pendingProps.children),
          Nr(t, n),
          (u = Mt(u)),
          (l = l(u)),
          (t.flags |= 1),
          rt(e, t, l, n),
          t.child
        );
      case 14:
        return ((l = t.type), (u = Wt(l, t.pendingProps)), (u = Wt(l.type, u)), gc(e, t, l, u, n));
      case 15:
        return vc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : Wt(l, u)),
          jl(e, t),
          (t.tag = 1),
          ot(l) ? ((e = !0), wl(t)) : (e = !1),
          Nr(t, n),
          ac(t, l, u),
          js(t, l, u, n),
          Ws(null, t, l, !0, e, n)
        );
      case 19:
        return Cc(e, t, n);
      case 22:
        return yc(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function qc(e, t) {
    return Na(e, t);
  }
  function vm(e, t, n, l) {
    ((this.tag = e),
      (this.key = n),
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
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ft(e, t, n, l) {
    return new vm(e, t, n, l);
  }
  function uu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ym(e) {
    if (typeof e == "function") return uu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === pe)) return 11;
      if (e === ve) return 14;
    }
    return 2;
  }
  function zn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ft(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Kl(e, t, n, l, u, a) {
    var h = 2;
    if (((l = e), typeof e == "function")) uu(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case V:
          return er(n.children, u, a, t);
        case H:
          ((h = 8), (u |= 8));
          break;
        case W:
          return ((e = Ft(12, n, t, u | 2)), (e.elementType = W), (e.lanes = a), e);
        case ue:
          return ((e = Ft(13, n, t, u)), (e.elementType = ue), (e.lanes = a), e);
        case ce:
          return ((e = Ft(19, n, t, u)), (e.elementType = ce), (e.lanes = a), e);
        case le:
          return ql(n, u, a, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ee:
                h = 10;
                break e;
              case ge:
                h = 9;
                break e;
              case pe:
                h = 11;
                break e;
              case ve:
                h = 14;
                break e;
              case de:
                ((h = 16), (l = null));
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    return ((t = Ft(h, n, t, u)), (t.elementType = e), (t.type = l), (t.lanes = a), t);
  }
  function er(e, t, n, l) {
    return ((e = Ft(7, e, l, t)), (e.lanes = n), e);
  }
  function ql(e, t, n, l) {
    return (
      (e = Ft(22, e, l, t)),
      (e.elementType = le),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function au(e, t, n) {
    return ((e = Ft(6, e, null, t)), (e.lanes = n), e);
  }
  function fu(e, t, n) {
    return (
      (t = Ft(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function wm(e, t, n, l, u) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ao(0)),
      (this.expirationTimes = Ao(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ao(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null));
  }
  function cu(e, t, n, l, u, a, h, v, w) {
    return (
      (e = new wm(e, t, n, v, w)),
      t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
      (a = Ft(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = {
        element: l,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Es(a),
      e
    );
  }
  function xm(e, t, n) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Q,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Zc(e) {
    if (!e) return kn;
    e = e._reactInternals;
    e: {
      if (Wn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ot(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (ot(n)) return Tf(e, n, t);
    }
    return t;
  }
  function Jc(e, t, n, l, u, a, h, v, w) {
    return (
      (e = cu(n, l, !0, e, u, a, h, v, w)),
      (e.context = Zc(null)),
      (n = e.current),
      (l = it()),
      (u = On(n)),
      (a = sn(l, u)),
      (a.callback = t ?? null),
      Tn(n, a, u),
      (e.current.lanes = u),
      br(e, u, l),
      at(e, l),
      e
    );
  }
  function Zl(e, t, n, l) {
    var u = t.current,
      a = it(),
      h = On(u);
    return (
      (n = Zc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = sn(a, h)),
      (t.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (t.callback = l),
      (e = Tn(u, t, h)),
      e !== null && (Qt(e, u, h, a), Nl(e, u, h)),
      h
    );
  }
  function Jl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function bc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function du(e, t) {
    (bc(e, t), (e = e.alternate) && bc(e, t));
  }
  function km() {
    return null;
  }
  var ed =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function pu(e) {
    this._internalRoot = e;
  }
  ((bl.prototype.render = pu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      Zl(e, t, null, null);
    }),
    (bl.prototype.unmount = pu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Zn(function () {
            Zl(null, e, null, null);
          }),
            (t[tn] = null));
        }
      }));
  function bl(e) {
    this._internalRoot = e;
  }
  bl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ia();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < gn.length && t !== 0 && t < gn[n].priority; n++);
      (gn.splice(n, 0, e), n === 0 && Ua(e));
    }
  };
  function hu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function eo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function td() {}
  function Sm(e, t, n, l, u) {
    if (u) {
      if (typeof l == "function") {
        var a = l;
        l = function () {
          var O = Jl(h);
          a.call(O);
        };
      }
      var h = Jc(t, l, e, 0, null, !1, !1, "", td);
      return (
        (e._reactRootContainer = h),
        (e[tn] = h.current),
        pi(e.nodeType === 8 ? e.parentNode : e),
        Zn(),
        h
      );
    }
    for (; (u = e.lastChild);) e.removeChild(u);
    if (typeof l == "function") {
      var v = l;
      l = function () {
        var O = Jl(w);
        v.call(O);
      };
    }
    var w = cu(e, 0, !1, null, null, !1, !1, "", td);
    return (
      (e._reactRootContainer = w),
      (e[tn] = w.current),
      pi(e.nodeType === 8 ? e.parentNode : e),
      Zn(function () {
        Zl(t, w, n, l);
      }),
      w
    );
  }
  function to(e, t, n, l, u) {
    var a = n._reactRootContainer;
    if (a) {
      var h = a;
      if (typeof u == "function") {
        var v = u;
        u = function () {
          var w = Jl(h);
          v.call(w);
        };
      }
      Zl(t, h, e, u);
    } else h = Sm(n, t, e, u, l);
    return Jl(h);
  }
  ((La = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Jr(t.pendingLanes);
          n !== 0 && (jo(t, n | 1), at(t, Ae()), (he & 6) === 0 && ((Dr = Ae() + 500), Sn()));
        }
        break;
      case 13:
        (Zn(function () {
          var l = on(e, 1);
          if (l !== null) {
            var u = it();
            Qt(l, e, 1, u);
          }
        }),
          du(e, 1));
    }
  }),
    (Uo = function (e) {
      if (e.tag === 13) {
        var t = on(e, 134217728);
        if (t !== null) {
          var n = it();
          Qt(t, e, 134217728, n);
        }
        du(e, 134217728);
      }
    }),
    (Fa = function (e) {
      if (e.tag === 13) {
        var t = On(e),
          n = on(e, t);
        if (n !== null) {
          var l = it();
          Qt(n, e, t, l);
        }
        du(e, t);
      }
    }),
    (Ia = function () {
      return we;
    }),
    (Aa = function (e, t) {
      var n = we;
      try {
        return ((we = e), t());
      } finally {
        we = n;
      }
    }),
    (zo = function (e, t, n) {
      switch (t) {
        case "input":
          if ((So(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var u = vl(l);
                if (!u) throw Error(i(90));
                (sa(l), So(l, u));
              }
            }
          }
          break;
        case "textarea":
          da(e, n);
          break;
        case "select":
          ((t = n.value), t != null && fr(e, !!n.multiple, t, !1));
      }
    }),
    (xa = lu),
    (ka = Zn));
  var Em = { usingClientEntryPoint: !1, Events: [_i, wr, vl, ya, wa, lu] },
    Ri = {
      findFiberByHostInstance: $n,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Tm = {
      bundleType: Ri.bundleType,
      version: Ri.version,
      rendererPackageName: Ri.rendererPackageName,
      rendererConfig: Ri.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: j.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Ca(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Ri.findFiberByHostInstance || km,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var no = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!no.isDisabled && no.supportsFiber)
      try {
        ((bi = no.inject(Tm)), (Yt = no));
      } catch {}
  }
  return (
    (ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em),
    (ft.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!hu(t)) throw Error(i(200));
      return xm(e, t, null, n);
    }),
    (ft.createRoot = function (e, t) {
      if (!hu(e)) throw Error(i(299));
      var n = !1,
        l = "",
        u = ed;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = cu(e, 1, !1, null, null, n, !1, l, u)),
        (e[tn] = t.current),
        pi(e.nodeType === 8 ? e.parentNode : e),
        new pu(t)
      );
    }),
    (ft.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return ((e = Ca(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (ft.flushSync = function (e) {
      return Zn(e);
    }),
    (ft.hydrate = function (e, t, n) {
      if (!eo(t)) throw Error(i(200));
      return to(null, e, t, !0, n);
    }),
    (ft.hydrateRoot = function (e, t, n) {
      if (!hu(e)) throw Error(i(405));
      var l = (n != null && n.hydratedSources) || null,
        u = !1,
        a = "",
        h = ed;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (u = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (h = n.onRecoverableError)),
        (t = Jc(t, null, e, 1, n ?? null, u, !1, a, h)),
        (e[tn] = t.current),
        pi(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          ((n = l[e]),
            (u = n._getVersion),
            (u = u(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, u])
              : t.mutableSourceEagerHydrationData.push(n, u));
      return new bl(t);
    }),
    (ft.render = function (e, t, n) {
      if (!eo(t)) throw Error(i(200));
      return to(null, e, t, !1, n);
    }),
    (ft.unmountComponentAtNode = function (e) {
      if (!eo(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (Zn(function () {
            to(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[tn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (ft.unstable_batchedUpdates = lu),
    (ft.unstable_renderSubtreeIntoContainer = function (e, t, n, l) {
      if (!eo(n)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return to(e, t, n, !1, l);
    }),
    (ft.version = "18.3.1-next-f1338f8080-20240426"),
    ft
  );
}
var ad;
function Dm() {
  if (ad) return gu.exports;
  ad = 1;
  function p() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (r) {
        console.error(r);
      }
  }
  return (p(), (gu.exports = Mm()), gu.exports);
}
var fd;
function Lm() {
  if (fd) return ro;
  fd = 1;
  var p = Dm();
  return ((ro.createRoot = p.createRoot), (ro.hydrateRoot = p.hydrateRoot), ro);
}
var Fm = Lm();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Im = (p) => p.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  zd = (...p) =>
    p
      .filter((r, i, o) => !!r && r.trim() !== "" && o.indexOf(r) === i)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Am = {
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
 */ const jm = ct.forwardRef(
  (
    {
      color: p = "currentColor",
      size: r = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: o,
      className: s = "",
      children: f,
      iconNode: c,
      ...d
    },
    m,
  ) =>
    ct.createElement(
      "svg",
      {
        ref: m,
        ...Am,
        width: r,
        height: r,
        stroke: p,
        strokeWidth: o ? (Number(i) * 24) / Number(r) : i,
        className: zd("lucide", s),
        ...d,
      },
      [...c.map(([_, g]) => ct.createElement(_, g)), ...(Array.isArray(f) ? f : [f])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Um = (p, r) => {
  const i = ct.forwardRef(({ className: o, ...s }, f) =>
    ct.createElement(jm, { ref: f, iconNode: r, className: zd(`lucide-${Im(p)}`, o), ...s }),
  );
  return ((i.displayName = `${p}`), i);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vm = Um("Lock", [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ]),
  Md = {
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
function io({ id: p, eyebrow: r, title: i, children: o, theme: s }) {
  const f = Md[s];
  return Z.jsx("section", {
    id: p,
    className: `${f.section} scroll-mt-24`,
    children: Z.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        Z.jsx("p", { className: f.eyebrow, children: r }),
        Z.jsx("h2", { className: `${f.title} mt-3`, children: i }),
        Z.jsx("div", { className: "mt-8", children: o }),
      ],
    }),
  });
}
function Bm({ theme: p = "dark", brand: r = "Product" }) {
  const i = Md[p],
    o = [
      { title: "Fast setup", desc: `Ship ${r} experiences in minutes with guided defaults.` },
      { title: "Built to scale", desc: "Production-ready patterns for teams that iterate daily." },
      { title: "Secure by design", desc: "Privacy-first flows with audit-friendly configuration." },
    ];
  return Z.jsxs(Z.Fragment, {
    children: [
      Z.jsx(io, {
        id: "features",
        eyebrow: "Features",
        title: "Everything you need in one flow",
        theme: p,
        children: Z.jsx("div", {
          className: "grid gap-4 md:grid-cols-3",
          children: o.map((s) =>
            Z.jsxs(
              "div",
              {
                className: i.card,
                children: [
                  Z.jsx("h3", {
                    className:
                      p === "dark"
                        ? "text-lg font-medium text-white"
                        : "text-lg font-medium text-slate-900",
                    children: s.title,
                  }),
                  Z.jsx("p", { className: `${i.body} mt-2 text-sm`, children: s.desc }),
                ],
              },
              s.title,
            ),
          ),
        }),
      }),
      Z.jsx(io, {
        id: "about",
        eyebrow: "About",
        title: `Why teams choose ${r}`,
        theme: p,
        children: Z.jsx("p", {
          className: i.body,
          children:
            "We combine cinematic presentation with practical product storytelling—so every visit feels premium while staying effortless to keep current as you grow.",
        }),
      }),
      Z.jsx(io, {
        id: "faq",
        eyebrow: "FAQ",
        title: "Common questions",
        theme: p,
        children: Z.jsx("dl", {
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
          ].map(([s, f]) =>
            Z.jsxs(
              "div",
              {
                className: i.card,
                children: [
                  Z.jsx("dt", {
                    className:
                      p === "dark" ? "font-medium text-white" : "font-medium text-slate-900",
                    children: s,
                  }),
                  Z.jsx("dd", { className: `${i.body} mt-2 text-sm`, children: f }),
                ],
              },
              s,
            ),
          ),
        }),
      }),
      Z.jsxs(io, {
        id: "contact",
        eyebrow: "Contact",
        title: "Talk with our team",
        theme: p,
        children: [
          Z.jsx("p", { className: i.body, children: "We respond within one business day." }),
          Z.jsx("a", {
            href: "#contact",
            className:
              p === "dark"
                ? "mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
                : "mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white",
            children: "Get in touch",
          }),
        ],
      }),
    ],
  });
}
function Wm(p) {
  const r = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return r
    ? r.startsWith("/")
      ? { kind: "route", path: r.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: r }
    : null;
}
function $m(p, r = "smooth") {
  if (typeof document > "u") return !1;
  const i = document.getElementById(p);
  return i ? (i.scrollIntoView({ behavior: r, block: "start" }), !0) : !1;
}
function Hm() {
  if (typeof window > "u") return;
  const p = Wm();
  (p == null ? void 0 : p.kind) === "section" && requestAnimationFrame(() => $m(p.id, "auto"));
}
function fn(p) {
  if (p === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return p;
}
function Dd(p, r) {
  ((p.prototype = Object.create(r.prototype)), (p.prototype.constructor = p), (p.__proto__ = r));
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Pt = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
  ji = { duration: 0.5, overwrite: !1, delay: 0 },
  $u,
  qe,
  Oe,
  At = 1e8,
  ke = 1 / At,
  Nu = Math.PI * 2,
  Qm = Nu / 4,
  Ym = 0,
  Ld = Math.sqrt,
  Xm = Math.cos,
  Gm = Math.sin,
  Xe = function (r) {
    return typeof r == "string";
  },
  Ie = function (r) {
    return typeof r == "function";
  },
  dn = function (r) {
    return typeof r == "number";
  },
  Hu = function (r) {
    return typeof r > "u";
  },
  en = function (r) {
    return typeof r == "object";
  },
  pt = function (r) {
    return r !== !1;
  },
  Qu = function () {
    return typeof window < "u";
  },
  lo = function (r) {
    return Ie(r) || Xe(r);
  },
  Fd = (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  nt = Array.isArray,
  Km = /random\([^)]+\)/g,
  qm = /,\s*/g,
  cd = /(?:-?\.?\d|\.)+/gi,
  Id = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Ir = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  wu = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Ad = /[+-]=-?[.\d]+/,
  Zm = /[^,'"\[\]\s]+/gi,
  Jm = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  De,
  Zt,
  Ou,
  Yu,
  Nt = {},
  co = {},
  jd,
  Ud = function (r) {
    return (co = Br(r, Nt)) && gt;
  },
  Xu = function (r, i) {
    return console.warn(
      "Invalid property",
      r,
      "set to",
      i,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  Ui = function (r, i) {
    return !i && console.warn(r);
  },
  Vd = function (r, i) {
    return (r && (Nt[r] = i) && co && (co[r] = i)) || Nt;
  },
  Vi = function () {
    return 0;
  },
  bm = { suppressEvents: !0, isStart: !0, kill: !1 },
  uo = { suppressEvents: !0, kill: !1 },
  e0 = { suppressEvents: !0 },
  Gu = {},
  In = [],
  Ru = {},
  Bd,
  St = {},
  xu = {},
  dd = 30,
  ao = [],
  Ku = "",
  qu = function (r) {
    var i = r[0],
      o,
      s;
    if ((en(i) || Ie(i) || (r = [r]), !(o = (i._gsap || {}).harness))) {
      for (s = ao.length; s-- && !ao[s].targetTest(i););
      o = ao[s];
    }
    for (s = r.length; s--;)
      (r[s] && (r[s]._gsap || (r[s]._gsap = new ap(r[s], o)))) || r.splice(s, 1);
    return r;
  },
  lr = function (r) {
    return r._gsap || qu(jt(r))[0]._gsap;
  },
  Wd = function (r, i, o) {
    return (o = r[i]) && Ie(o) ? r[i]() : (Hu(o) && r.getAttribute && r.getAttribute(i)) || o;
  },
  ht = function (r, i) {
    return (r = r.split(",")).forEach(i) || r;
  },
  Ue = function (r) {
    return Math.round(r * 1e5) / 1e5 || 0;
  },
  Me = function (r) {
    return Math.round(r * 1e7) / 1e7 || 0;
  },
  jr = function (r, i) {
    var o = i.charAt(0),
      s = parseFloat(i.substr(2));
    return ((r = parseFloat(r)), o === "+" ? r + s : o === "-" ? r - s : o === "*" ? r * s : r / s);
  },
  t0 = function (r, i) {
    for (var o = i.length, s = 0; r.indexOf(i[s]) < 0 && ++s < o;);
    return s < o;
  },
  po = function () {
    var r = In.length,
      i = In.slice(0),
      o,
      s;
    for (Ru = {}, In.length = 0, o = 0; o < r; o++)
      ((s = i[o]), s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0));
  },
  Zu = function (r) {
    return !!(r._initted || r._startAt || r.add);
  },
  $d = function (r, i, o, s) {
    (In.length && !qe && po(), r.render(i, o, !!(qe && i < 0 && Zu(r))), In.length && !qe && po());
  },
  Hd = function (r) {
    var i = parseFloat(r);
    return (i || i === 0) && (r + "").match(Zm).length < 2 ? i : Xe(r) ? r.trim() : r;
  },
  Qd = function (r) {
    return r;
  },
  Ot = function (r, i) {
    for (var o in i) o in r || (r[o] = i[o]);
    return r;
  },
  n0 = function (r) {
    return function (i, o) {
      for (var s in o) s in i || (s === "duration" && r) || s === "ease" || (i[s] = o[s]);
    };
  },
  Br = function (r, i) {
    for (var o in i) r[o] = i[o];
    return r;
  },
  pd = function p(r, i) {
    for (var o in i)
      o !== "__proto__" &&
        o !== "constructor" &&
        o !== "prototype" &&
        (r[o] = en(i[o]) ? p(r[o] || (r[o] = {}), i[o]) : i[o]);
    return r;
  },
  ho = function (r, i) {
    var o = {},
      s;
    for (s in r) s in i || (o[s] = r[s]);
    return o;
  },
  Fi = function (r) {
    var i = r.parent || De,
      o = r.keyframes ? n0(nt(r.keyframes)) : Ot;
    if (pt(r.inherit)) for (; i;) (o(r, i.vars.defaults), (i = i.parent || i._dp));
    return r;
  },
  r0 = function (r, i) {
    for (var o = r.length, s = o === i.length; s && o-- && r[o] === i[o];);
    return o < 0;
  },
  Yd = function (r, i, o, s, f) {
    var c = r[s],
      d;
    if (f) for (d = i[f]; c && c[f] > d;) c = c._prev;
    return (
      c ? ((i._next = c._next), (c._next = i)) : ((i._next = r[o]), (r[o] = i)),
      i._next ? (i._next._prev = i) : (r[s] = i),
      (i._prev = c),
      (i.parent = i._dp = r),
      i
    );
  },
  yo = function (r, i, o, s) {
    (o === void 0 && (o = "_first"), s === void 0 && (s = "_last"));
    var f = i._prev,
      c = i._next;
    (f ? (f._next = c) : r[o] === i && (r[o] = c),
      c ? (c._prev = f) : r[s] === i && (r[s] = f),
      (i._next = i._prev = i.parent = null));
  },
  jn = function (r, i) {
    (r.parent && (!i || r.parent.autoRemoveChildren) && r.parent.remove && r.parent.remove(r),
      (r._act = 0));
  },
  or = function (r, i) {
    if (r && (!i || i._end > r._dur || i._start < 0))
      for (var o = r; o;) ((o._dirty = 1), (o = o.parent));
    return r;
  },
  i0 = function (r) {
    for (var i = r.parent; i && i.parent;) ((i._dirty = 1), i.totalDuration(), (i = i.parent));
    return r;
  },
  zu = function (r, i, o, s) {
    return (
      r._startAt &&
      (qe
        ? r._startAt.revert(uo)
        : (r.vars.immediateRender && !r.vars.autoRevert) || r._startAt.render(i, !0, s))
    );
  },
  l0 = function p(r) {
    return !r || (r._ts && p(r.parent));
  },
  hd = function (r) {
    return r._repeat ? Wr(r._tTime, (r = r.duration() + r._rDelay)) * r : 0;
  },
  Wr = function (r, i) {
    var o = Math.floor((r = Me(r / i)));
    return r && o === r ? o - 1 : o;
  },
  mo = function (r, i) {
    return (r - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
  },
  wo = function (r) {
    return (r._end = Me(r._start + (r._tDur / Math.abs(r._ts || r._rts || ke) || 0)));
  },
  xo = function (r, i) {
    var o = r._dp;
    return (
      o &&
        o.smoothChildTiming &&
        r._ts &&
        ((r._start = Me(
          o._time -
            (r._ts > 0 ? i / r._ts : ((r._dirty ? r.totalDuration() : r._tDur) - i) / -r._ts),
        )),
        wo(r),
        o._dirty || or(o, r)),
      r
    );
  },
  Xd = function (r, i) {
    var o;
    if (
      ((i._time || (!i._dur && i._initted) || (i._start < r._time && (i._dur || !i.add))) &&
        ((o = mo(r.rawTime(), i)),
        (!i._dur || Yi(0, i.totalDuration(), o) - i._tTime > ke) && i.render(o, !0)),
      or(r, i)._dp && r._initted && r._time >= r._dur && r._ts)
    ) {
      if (r._dur < r.duration())
        for (o = r; o._dp;) (o.rawTime() >= 0 && o.totalTime(o._tTime), (o = o._dp));
      r._zTime = -ke;
    }
  },
  Jt = function (r, i, o, s) {
    return (
      i.parent && jn(i),
      (i._start = Me((dn(o) ? o : o || r !== De ? It(r, o, i) : r._time) + i._delay)),
      (i._end = Me(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0))),
      Yd(r, i, "_first", "_last", r._sort ? "_start" : 0),
      Mu(i) || (r._recent = i),
      s || Xd(r, i),
      r._ts < 0 && xo(r, r._tTime),
      r
    );
  },
  Gd = function (r, i) {
    return (Nt.ScrollTrigger || Xu("scrollTrigger", i)) && Nt.ScrollTrigger.create(i, r);
  },
  Kd = function (r, i, o, s, f) {
    if ((bu(r, i, f), !r._initted)) return 1;
    if (
      !o &&
      r._pt &&
      !qe &&
      ((r._dur && r.vars.lazy !== !1) || (!r._dur && r.vars.lazy)) &&
      Bd !== Et.frame
    )
      return (In.push(r), (r._lazy = [f, s]), 1);
  },
  o0 = function p(r) {
    var i = r.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || p(i));
  },
  Mu = function (r) {
    var i = r.data;
    return i === "isFromStart" || i === "isStart";
  },
  s0 = function (r, i, o, s) {
    var f = r.ratio,
      c =
        i < 0 ||
        (!i &&
          ((!r._start && o0(r) && !(!r._initted && Mu(r))) ||
            ((r._ts < 0 || r._dp._ts < 0) && !Mu(r))))
          ? 0
          : 1,
      d = r._rDelay,
      m = 0,
      _,
      g,
      x;
    if (
      (d &&
        r._repeat &&
        ((m = Yi(0, r._tDur, i)),
        (g = Wr(m, d)),
        r._yoyo && g & 1 && (c = 1 - c),
        g !== Wr(r._tTime, d) &&
          ((f = 1 - c), r.vars.repeatRefresh && r._initted && r.invalidate())),
      c !== f || qe || s || r._zTime === ke || (!i && r._zTime))
    ) {
      if (!r._initted && Kd(r, i, s, o, m)) return;
      for (
        x = r._zTime,
          r._zTime = i || (o ? ke : 0),
          o || (o = i && !x),
          r.ratio = c,
          r._from && (c = 1 - c),
          r._time = 0,
          r._tTime = m,
          _ = r._pt;
        _;
      )
        (_.r(c, _.d), (_ = _._next));
      (i < 0 && zu(r, i, o, !0),
        r._onUpdate && !o && Tt(r, "onUpdate"),
        m && r._repeat && !o && r.parent && Tt(r, "onRepeat"),
        (i >= r._tDur || i < 0) &&
          r.ratio === c &&
          (c && jn(r, 1),
          !o && !qe && (Tt(r, c ? "onComplete" : "onReverseComplete", !0), r._prom && r._prom())));
    } else r._zTime || (r._zTime = i);
  },
  u0 = function (r, i, o) {
    var s;
    if (o > i)
      for (s = r._first; s && s._start <= o;) {
        if (s.data === "isPause" && s._start > i) return s;
        s = s._next;
      }
    else
      for (s = r._last; s && s._start >= o;) {
        if (s.data === "isPause" && s._start < i) return s;
        s = s._prev;
      }
  },
  $r = function (r, i, o, s) {
    var f = r._repeat,
      c = Me(i) || 0,
      d = r._tTime / r._tDur;
    return (
      d && !s && (r._time *= c / r._dur),
      (r._dur = c),
      (r._tDur = f ? (f < 0 ? 1e10 : Me(c * (f + 1) + r._rDelay * f)) : c),
      d > 0 && !s && xo(r, (r._tTime = r._tDur * d)),
      r.parent && wo(r),
      o || or(r.parent, r),
      r
    );
  },
  md = function (r) {
    return r instanceof dt ? or(r) : $r(r, r._dur);
  },
  a0 = { _start: 0, endTime: Vi, totalDuration: Vi },
  It = function p(r, i, o) {
    var s = r.labels,
      f = r._recent || a0,
      c = r.duration() >= At ? f.endTime(!1) : r._dur,
      d,
      m,
      _;
    return Xe(i) && (isNaN(i) || i in s)
      ? ((m = i.charAt(0)),
        (_ = i.substr(-1) === "%"),
        (d = i.indexOf("=")),
        m === "<" || m === ">"
          ? (d >= 0 && (i = i.replace(/=/, "")),
            (m === "<" ? f._start : f.endTime(f._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0) * (_ ? (d < 0 ? f : o).totalDuration() / 100 : 1))
          : d < 0
            ? (i in s || (s[i] = c), s[i])
            : ((m = parseFloat(i.charAt(d - 1) + i.substr(d + 1))),
              _ && o && (m = (m / 100) * (nt(o) ? o[0] : o).totalDuration()),
              d > 1 ? p(r, i.substr(0, d - 1), o) + m : c + m))
      : i == null
        ? c
        : +i;
  },
  Ii = function (r, i, o) {
    var s = dn(i[1]),
      f = (s ? 2 : 1) + (r < 2 ? 0 : 1),
      c = i[f],
      d,
      m;
    if ((s && (c.duration = i[1]), (c.parent = o), r)) {
      for (d = c, m = o; m && !("immediateRender" in d);)
        ((d = m.vars.defaults || {}), (m = pt(m.vars.inherit) && m.parent));
      ((c.immediateRender = pt(d.immediateRender)),
        r < 2 ? (c.runBackwards = 1) : (c.startAt = i[f - 1]));
    }
    return new Be(i[0], c, i[f + 1]);
  },
  Bn = function (r, i) {
    return r || r === 0 ? i(r) : i;
  },
  Yi = function (r, i, o) {
    return o < r ? r : o > i ? i : o;
  },
  tt = function (r, i) {
    return !Xe(r) || !(i = Jm.exec(r)) ? "" : i[1];
  },
  f0 = function (r, i, o) {
    return Bn(o, function (s) {
      return Yi(r, i, s);
    });
  },
  Du = [].slice,
  qd = function (r, i) {
    return (
      r &&
      en(r) &&
      "length" in r &&
      ((!i && !r.length) || (r.length - 1 in r && en(r[0]))) &&
      !r.nodeType &&
      r !== Zt
    );
  },
  c0 = function (r, i, o) {
    return (
      o === void 0 && (o = []),
      r.forEach(function (s) {
        var f;
        return (Xe(s) && !i) || qd(s, 1) ? (f = o).push.apply(f, jt(s)) : o.push(s);
      }) || o
    );
  },
  jt = function (r, i, o) {
    return Oe && !i && Oe.selector
      ? Oe.selector(r)
      : Xe(r) && !o && (Ou || !Hr())
        ? Du.call((i || Yu).querySelectorAll(r), 0)
        : nt(r)
          ? c0(r, o)
          : qd(r)
            ? Du.call(r, 0)
            : r
              ? [r]
              : [];
  },
  Lu = function (r) {
    return (
      (r = jt(r)[0] || Ui("Invalid scope") || {}),
      function (i) {
        var o = r.current || r.nativeElement || r;
        return jt(
          i,
          o.querySelectorAll ? o : o === r ? Ui("Invalid scope") || Yu.createElement("div") : r,
        );
      }
    );
  },
  Zd = function (r) {
    return r.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Jd = function (r) {
    if (Ie(r)) return r;
    var i = en(r) ? r : { each: r },
      o = sr(i.ease),
      s = i.from || 0,
      f = parseFloat(i.base) || 0,
      c = {},
      d = s > 0 && s < 1,
      m = isNaN(s) || d,
      _ = i.axis,
      g = s,
      x = s;
    return (
      Xe(s)
        ? (g = x = { center: 0.5, edges: 0.5, end: 1 }[s] || 0)
        : !d && m && ((g = s[0]), (x = s[1])),
      function (S, T, R) {
        var y = (R || i).length,
          N = c[y],
          L,
          D,
          A,
          j,
          z,
          Q,
          V,
          H,
          W;
        if (!N) {
          if (((W = i.grid === "auto" ? 0 : (i.grid || [1, At])[1]), !W)) {
            for (V = -At; V < (V = R[W++].getBoundingClientRect().left) && W < y;);
            W < y && W--;
          }
          for (
            N = c[y] = [],
              L = m ? Math.min(W, y) * g - 0.5 : s % W,
              D = W === At ? 0 : m ? (y * x) / W - 0.5 : (s / W) | 0,
              V = 0,
              H = At,
              Q = 0;
            Q < y;
            Q++
          )
            ((A = (Q % W) - L),
              (j = D - ((Q / W) | 0)),
              (N[Q] = z = _ ? Math.abs(_ === "y" ? j : A) : Ld(A * A + j * j)),
              z > V && (V = z),
              z < H && (H = z));
          (s === "random" && Zd(N),
            (N.max = V - H),
            (N.min = H),
            (N.v = y =
              (parseFloat(i.amount) ||
                parseFloat(i.each) *
                  (W > y ? y - 1 : _ ? (_ === "y" ? y / W : W) : Math.max(W, y / W)) ||
                0) * (s === "edges" ? -1 : 1)),
            (N.b = y < 0 ? f - y : f),
            (N.u = tt(i.amount || i.each) || 0),
            (o = o && y < 0 ? E0(o) : o));
        }
        return ((y = (N[S] - N.min) / N.max || 0), Me(N.b + (o ? o(y) : y) * N.v) + N.u);
      }
    );
  },
  Fu = function (r) {
    var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
    return function (o) {
      var s = Me(Math.round(parseFloat(o) / r) * r * i);
      return (s - (s % 1)) / i + (dn(o) ? 0 : tt(o));
    };
  },
  bd = function (r, i) {
    var o = nt(r),
      s,
      f;
    return (
      !o &&
        en(r) &&
        ((s = o = r.radius || At),
        r.values ? ((r = jt(r.values)), (f = !dn(r[0])) && (s *= s)) : (r = Fu(r.increment))),
      Bn(
        i,
        o
          ? Ie(r)
            ? function (c) {
                return ((f = r(c)), Math.abs(f - c) <= s ? f : c);
              }
            : function (c) {
                for (
                  var d = parseFloat(f ? c.x : c),
                    m = parseFloat(f ? c.y : 0),
                    _ = At,
                    g = 0,
                    x = r.length,
                    S,
                    T;
                  x--;
                )
                  (f
                    ? ((S = r[x].x - d), (T = r[x].y - m), (S = S * S + T * T))
                    : (S = Math.abs(r[x] - d)),
                    S < _ && ((_ = S), (g = x)));
                return ((g = !s || _ <= s ? r[g] : c), f || g === c || dn(c) ? g : g + tt(c));
              }
          : Fu(r),
      )
    );
  },
  ep = function (r, i, o, s) {
    return Bn(nt(r) ? !i : o === !0 ? !!(o = 0) : !s, function () {
      return nt(r)
        ? r[~~(Math.random() * r.length)]
        : (o = o || 1e-5) &&
            (s = o < 1 ? Math.pow(10, (o + "").length - 2) : 1) &&
            Math.floor(Math.round((r - o / 2 + Math.random() * (i - r + o * 0.99)) / o) * o * s) /
              s;
    });
  },
  d0 = function () {
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
    return function (s) {
      return i.reduce(function (f, c) {
        return c(f);
      }, s);
    };
  },
  p0 = function (r, i) {
    return function (o) {
      return r(parseFloat(o)) + (i || tt(o));
    };
  },
  h0 = function (r, i, o) {
    return np(r, i, 0, 1, o);
  },
  tp = function (r, i, o) {
    return Bn(o, function (s) {
      return r[~~i(s)];
    });
  },
  m0 = function p(r, i, o) {
    var s = i - r;
    return nt(r)
      ? tp(r, p(0, r.length), i)
      : Bn(o, function (f) {
          return ((s + ((f - r) % s)) % s) + r;
        });
  },
  _0 = function p(r, i, o) {
    var s = i - r,
      f = s * 2;
    return nt(r)
      ? tp(r, p(0, r.length - 1), i)
      : Bn(o, function (c) {
          return ((c = (f + ((c - r) % f)) % f || 0), r + (c > s ? f - c : c));
        });
  },
  Bi = function (r) {
    return r.replace(Km, function (i) {
      var o = i.indexOf("[") + 1,
        s = i.substring(o || 7, o ? i.indexOf("]") : i.length - 1).split(qm);
      return ep(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5);
    });
  },
  np = function (r, i, o, s, f) {
    var c = i - r,
      d = s - o;
    return Bn(f, function (m) {
      return o + (((m - r) / c) * d || 0);
    });
  },
  g0 = function p(r, i, o, s) {
    var f = isNaN(r + i)
      ? 0
      : function (T) {
          return (1 - T) * r + T * i;
        };
    if (!f) {
      var c = Xe(r),
        d = {},
        m,
        _,
        g,
        x,
        S;
      if ((o === !0 && (s = 1) && (o = null), c)) ((r = { p: r }), (i = { p: i }));
      else if (nt(r) && !nt(i)) {
        for (g = [], x = r.length, S = x - 2, _ = 1; _ < x; _++) g.push(p(r[_ - 1], r[_]));
        (x--,
          (f = function (R) {
            R *= x;
            var y = Math.min(S, ~~R);
            return g[y](R - y);
          }),
          (o = i));
      } else s || (r = Br(nt(r) ? [] : {}, r));
      if (!g) {
        for (m in i) Ju.call(d, r, m, "get", i[m]);
        f = function (R) {
          return na(R, d) || (c ? r.p : r);
        };
      }
    }
    return Bn(o, f);
  },
  _d = function (r, i, o) {
    var s = r.labels,
      f = At,
      c,
      d,
      m;
    for (c in s) ((d = s[c] - i), d < 0 == !!o && d && f > (d = Math.abs(d)) && ((m = c), (f = d)));
    return m;
  },
  Tt = function (r, i, o) {
    var s = r.vars,
      f = s[i],
      c = Oe,
      d = r._ctx,
      m,
      _,
      g;
    if (f)
      return (
        (m = s[i + "Params"]),
        (_ = s.callbackScope || r),
        o && In.length && po(),
        d && (Oe = d),
        (g = m ? f.apply(_, m) : f.call(_)),
        (Oe = c),
        g
      );
  },
  Di = function (r) {
    return (
      jn(r),
      r.scrollTrigger && r.scrollTrigger.kill(!!qe),
      r.progress() < 1 && Tt(r, "onInterrupt"),
      r
    );
  },
  Ar,
  rp = [],
  ip = function (r) {
    if (r)
      if (((r = (!r.name && r.default) || r), Qu() || r.headless)) {
        var i = r.name,
          o = Ie(r),
          s =
            i && !o && r.init
              ? function () {
                  this._props = [];
                }
              : r,
          f = { init: Vi, render: na, add: Ju, kill: L0, modifier: D0, rawVars: 0 },
          c = { targetTest: 0, get: 0, getSetter: ta, aliases: {}, register: 0 };
        if ((Hr(), r !== s)) {
          if (St[i]) return;
          (Ot(s, Ot(ho(r, f), c)),
            Br(s.prototype, Br(f, ho(r, c))),
            (St[(s.prop = i)] = s),
            r.targetTest && (ao.push(s), (Gu[i] = 1)),
            (i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin"));
        }
        (Vd(i, s), r.register && r.register(gt, s, mt));
      } else rp.push(r);
  },
  xe = 255,
  Li = {
    aqua: [0, xe, xe],
    lime: [0, xe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, xe],
    navy: [0, 0, 128],
    white: [xe, xe, xe],
    olive: [128, 128, 0],
    yellow: [xe, xe, 0],
    orange: [xe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [xe, 0, 0],
    pink: [xe, 192, 203],
    cyan: [0, xe, xe],
    transparent: [xe, xe, xe, 0],
  },
  ku = function (r, i, o) {
    return (
      (r += r < 0 ? 1 : r > 1 ? -1 : 0),
      ((r * 6 < 1
        ? i + (o - i) * r * 6
        : r < 0.5
          ? o
          : r * 3 < 2
            ? i + (o - i) * (2 / 3 - r) * 6
            : i) *
        xe +
        0.5) |
        0
    );
  },
  lp = function (r, i, o) {
    var s = r ? (dn(r) ? [r >> 16, (r >> 8) & xe, r & xe] : 0) : Li.black,
      f,
      c,
      d,
      m,
      _,
      g,
      x,
      S,
      T,
      R;
    if (!s) {
      if ((r.substr(-1) === "," && (r = r.substr(0, r.length - 1)), Li[r])) s = Li[r];
      else if (r.charAt(0) === "#") {
        if (
          (r.length < 6 &&
            ((f = r.charAt(1)),
            (c = r.charAt(2)),
            (d = r.charAt(3)),
            (r = "#" + f + f + c + c + d + d + (r.length === 5 ? r.charAt(4) + r.charAt(4) : ""))),
          r.length === 9)
        )
          return (
            (s = parseInt(r.substr(1, 6), 16)),
            [s >> 16, (s >> 8) & xe, s & xe, parseInt(r.substr(7), 16) / 255]
          );
        ((r = parseInt(r.substr(1), 16)), (s = [r >> 16, (r >> 8) & xe, r & xe]));
      } else if (r.substr(0, 3) === "hsl") {
        if (((s = R = r.match(cd)), !i))
          ((m = (+s[0] % 360) / 360),
            (_ = +s[1] / 100),
            (g = +s[2] / 100),
            (c = g <= 0.5 ? g * (_ + 1) : g + _ - g * _),
            (f = g * 2 - c),
            s.length > 3 && (s[3] *= 1),
            (s[0] = ku(m + 1 / 3, f, c)),
            (s[1] = ku(m, f, c)),
            (s[2] = ku(m - 1 / 3, f, c)));
        else if (~r.indexOf("=")) return ((s = r.match(Id)), o && s.length < 4 && (s[3] = 1), s);
      } else s = r.match(cd) || Li.transparent;
      s = s.map(Number);
    }
    return (
      i &&
        !R &&
        ((f = s[0] / xe),
        (c = s[1] / xe),
        (d = s[2] / xe),
        (x = Math.max(f, c, d)),
        (S = Math.min(f, c, d)),
        (g = (x + S) / 2),
        x === S
          ? (m = _ = 0)
          : ((T = x - S),
            (_ = g > 0.5 ? T / (2 - x - S) : T / (x + S)),
            (m =
              x === f
                ? (c - d) / T + (c < d ? 6 : 0)
                : x === c
                  ? (d - f) / T + 2
                  : (f - c) / T + 4),
            (m *= 60)),
        (s[0] = ~~(m + 0.5)),
        (s[1] = ~~(_ * 100 + 0.5)),
        (s[2] = ~~(g * 100 + 0.5))),
      o && s.length < 4 && (s[3] = 1),
      s
    );
  },
  op = function (r) {
    var i = [],
      o = [],
      s = -1;
    return (
      r.split(An).forEach(function (f) {
        var c = f.match(Ir) || [];
        (i.push.apply(i, c), o.push((s += c.length + 1)));
      }),
      (i.c = o),
      i
    );
  },
  gd = function (r, i, o) {
    var s = "",
      f = (r + s).match(An),
      c = i ? "hsla(" : "rgba(",
      d = 0,
      m,
      _,
      g,
      x;
    if (!f) return r;
    if (
      ((f = f.map(function (S) {
        return (
          (S = lp(S, i, 1)) &&
          c + (i ? S[0] + "," + S[1] + "%," + S[2] + "%," + S[3] : S.join(",")) + ")"
        );
      })),
      o && ((g = op(r)), (m = o.c), m.join(s) !== g.c.join(s)))
    )
      for (_ = r.replace(An, "1").split(Ir), x = _.length - 1; d < x; d++)
        s +=
          _[d] +
          (~m.indexOf(d) ? f.shift() || c + "0,0,0,0)" : (g.length ? g : f.length ? f : o).shift());
    if (!_) for (_ = r.split(An), x = _.length - 1; d < x; d++) s += _[d] + f[d];
    return s + _[x];
  },
  An = (function () {
    var p = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      r;
    for (r in Li) p += "|" + r + "\\b";
    return new RegExp(p + ")", "gi");
  })(),
  v0 = /hsl[a]?\(/,
  sp = function (r) {
    var i = r.join(" "),
      o;
    if (((An.lastIndex = 0), An.test(i)))
      return ((o = v0.test(i)), (r[1] = gd(r[1], o)), (r[0] = gd(r[0], o, op(r[1]))), !0);
  },
  Wi,
  Et = (function () {
    var p = Date.now,
      r = 500,
      i = 33,
      o = p(),
      s = o,
      f = 1e3 / 240,
      c = f,
      d = [],
      m,
      _,
      g,
      x,
      S,
      T,
      R = function y(N) {
        var L = p() - s,
          D = N === !0,
          A,
          j,
          z,
          Q;
        if (
          ((L > r || L < 0) && (o += L - i),
          (s += L),
          (z = s - o),
          (A = z - c),
          (A > 0 || D) &&
            ((Q = ++x.frame),
            (S = z - x.time * 1e3),
            (x.time = z = z / 1e3),
            (c += A + (A >= f ? 4 : f - A)),
            (j = 1)),
          D || (m = _(y)),
          j)
        )
          for (T = 0; T < d.length; T++) d[T](z, S, Q, N);
      };
    return (
      (x = {
        time: 0,
        frame: 0,
        tick: function () {
          R(!0);
        },
        deltaRatio: function (N) {
          return S / (1e3 / (N || 60));
        },
        wake: function () {
          jd &&
            (!Ou &&
              Qu() &&
              ((Zt = Ou = window),
              (Yu = Zt.document || {}),
              (Nt.gsap = gt),
              (Zt.gsapVersions || (Zt.gsapVersions = [])).push(gt.version),
              Ud(co || Zt.GreenSockGlobals || (!Zt.gsap && Zt) || {}),
              rp.forEach(ip)),
            (g = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            m && x.sleep(),
            (_ =
              g ||
              function (N) {
                return setTimeout(N, (c - x.time * 1e3 + 1) | 0);
              }),
            (Wi = 1),
            R(2));
        },
        sleep: function () {
          ((g ? cancelAnimationFrame : clearTimeout)(m), (Wi = 0), (_ = Vi));
        },
        lagSmoothing: function (N, L) {
          ((r = N || 1 / 0), (i = Math.min(L || 33, r)));
        },
        fps: function (N) {
          ((f = 1e3 / (N || 240)), (c = x.time * 1e3 + f));
        },
        add: function (N, L, D) {
          var A = L
            ? function (j, z, Q, V) {
                (N(j, z, Q, V), x.remove(A));
              }
            : N;
          return (x.remove(N), d[D ? "unshift" : "push"](A), Hr(), A);
        },
        remove: function (N, L) {
          ~(L = d.indexOf(N)) && d.splice(L, 1) && T >= L && T--;
        },
        _listeners: d,
      }),
      x
    );
  })(),
  Hr = function () {
    return !Wi && Et.wake();
  },
  fe = {},
  y0 = /^[\d.\-M][\d.\-,\s]/,
  w0 = /["']/g,
  x0 = function (r) {
    for (
      var i = {}, o = r.substr(1, r.length - 3).split(":"), s = o[0], f = 1, c = o.length, d, m, _;
      f < c;
      f++
    )
      ((m = o[f]),
        (d = f !== c - 1 ? m.lastIndexOf(",") : m.length),
        (_ = m.substr(0, d)),
        (i[s] = isNaN(_) ? _.replace(w0, "").trim() : +_),
        (s = m.substr(d + 1).trim()));
    return i;
  },
  k0 = function (r) {
    var i = r.indexOf("(") + 1,
      o = r.indexOf(")"),
      s = r.indexOf("(", i);
    return r.substring(i, ~s && s < o ? r.indexOf(")", o + 1) : o);
  },
  S0 = function (r) {
    var i = (r + "").split("("),
      o = fe[i[0]];
    return o && i.length > 1 && o.config
      ? o.config.apply(null, ~r.indexOf("{") ? [x0(i[1])] : k0(r).split(",").map(Hd))
      : fe._CE && y0.test(r)
        ? fe._CE("", r)
        : o;
  },
  E0 = function (r) {
    return function (i) {
      return 1 - r(1 - i);
    };
  },
  sr = function (r, i) {
    return (r && (Ie(r) ? r : fe[r] || S0(r))) || i;
  },
  ar = function (r, i, o, s) {
    (o === void 0 &&
      (o = function (m) {
        return 1 - i(1 - m);
      }),
      s === void 0 &&
        (s = function (m) {
          return m < 0.5 ? i(m * 2) / 2 : 1 - i((1 - m) * 2) / 2;
        }));
    var f = { easeIn: i, easeOut: o, easeInOut: s },
      c;
    return (
      ht(r, function (d) {
        ((fe[d] = Nt[d] = f), (fe[(c = d.toLowerCase())] = o));
        for (var m in f)
          fe[c + (m === "easeIn" ? ".in" : m === "easeOut" ? ".out" : ".inOut")] = fe[d + "." + m] =
            f[m];
      }),
      f
    );
  },
  up = function (r) {
    return function (i) {
      return i < 0.5 ? (1 - r(1 - i * 2)) / 2 : 0.5 + r((i - 0.5) * 2) / 2;
    };
  },
  Su = function p(r, i, o) {
    var s = i >= 1 ? i : 1,
      f = (o || (r ? 0.3 : 0.45)) / (i < 1 ? i : 1),
      c = (f / Nu) * (Math.asin(1 / s) || 0),
      d = function (g) {
        return g === 1 ? 1 : s * Math.pow(2, -10 * g) * Gm((g - c) * f) + 1;
      },
      m =
        r === "out"
          ? d
          : r === "in"
            ? function (_) {
                return 1 - d(1 - _);
              }
            : up(d);
    return (
      (f = Nu / f),
      (m.config = function (_, g) {
        return p(r, _, g);
      }),
      m
    );
  },
  Eu = function p(r, i) {
    i === void 0 && (i = 1.70158);
    var o = function (c) {
        return c ? --c * c * ((i + 1) * c + i) + 1 : 0;
      },
      s =
        r === "out"
          ? o
          : r === "in"
            ? function (f) {
                return 1 - o(1 - f);
              }
            : up(o);
    return (
      (s.config = function (f) {
        return p(r, f);
      }),
      s
    );
  };
ht("Linear,Quad,Cubic,Quart,Quint,Strong", function (p, r) {
  var i = r < 5 ? r + 1 : r;
  ar(
    p + ",Power" + (i - 1),
    r
      ? function (o) {
          return Math.pow(o, i);
        }
      : function (o) {
          return o;
        },
    function (o) {
      return 1 - Math.pow(1 - o, i);
    },
    function (o) {
      return o < 0.5 ? Math.pow(o * 2, i) / 2 : 1 - Math.pow((1 - o) * 2, i) / 2;
    },
  );
});
fe.Linear.easeNone = fe.none = fe.Linear.easeIn;
ar("Elastic", Su("in"), Su("out"), Su());
(function (p, r) {
  var i = 1 / r,
    o = 2 * i,
    s = 2.5 * i,
    f = function (d) {
      return d < i
        ? p * d * d
        : d < o
          ? p * Math.pow(d - 1.5 / r, 2) + 0.75
          : d < s
            ? p * (d -= 2.25 / r) * d + 0.9375
            : p * Math.pow(d - 2.625 / r, 2) + 0.984375;
    };
  ar(
    "Bounce",
    function (c) {
      return 1 - f(1 - c);
    },
    f,
  );
})(7.5625, 2.75);
ar("Expo", function (p) {
  return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
});
ar("Circ", function (p) {
  return -(Ld(1 - p * p) - 1);
});
ar("Sine", function (p) {
  return p === 1 ? 1 : -Xm(p * Qm) + 1;
});
ar("Back", Eu("in"), Eu("out"), Eu());
fe.SteppedEase =
  fe.steps =
  Nt.SteppedEase =
    {
      config: function (r, i) {
        r === void 0 && (r = 1);
        var o = 1 / r,
          s = r + (i ? 0 : 1),
          f = i ? 1 : 0,
          c = 1 - ke;
        return function (d) {
          return (((s * Yi(0, c, d)) | 0) + f) * o;
        };
      },
    };
ji.ease = fe["quad.out"];
ht("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (p) {
  return (Ku += p + "," + p + "Params,");
});
var ap = function (r, i) {
    ((this.id = Ym++),
      (r._gsap = this),
      (this.target = r),
      (this.harness = i),
      (this.get = i ? i.get : Wd),
      (this.set = i ? i.getSetter : ta));
  },
  $i = (function () {
    function p(i) {
      ((this.vars = i),
        (this._delay = +i.delay || 0),
        (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
          ((this._rDelay = i.repeatDelay || 0), (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
        (this._ts = 1),
        $r(this, +i.duration, 1, 1),
        (this.data = i.data),
        Oe && ((this._ctx = Oe), Oe.data.push(this)),
        Wi || Et.wake());
    }
    var r = p.prototype;
    return (
      (r.delay = function (o) {
        return o || o === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + o - this._delay),
            (this._delay = o),
            this)
          : this._delay;
      }),
      (r.duration = function (o) {
        return arguments.length
          ? this.totalDuration(this._repeat > 0 ? o + (o + this._rDelay) * this._repeat : o)
          : this.totalDuration() && this._dur;
      }),
      (r.totalDuration = function (o) {
        return arguments.length
          ? ((this._dirty = 0),
            $r(this, this._repeat < 0 ? o : (o - this._repeat * this._rDelay) / (this._repeat + 1)))
          : this._tDur;
      }),
      (r.totalTime = function (o, s) {
        if ((Hr(), !arguments.length)) return this._tTime;
        var f = this._dp;
        if (f && f.smoothChildTiming && this._ts) {
          for (xo(this, o), !f._dp || f.parent || Xd(f, this); f && f.parent;)
            (f.parent._time !==
              f._start +
                (f._ts >= 0 ? f._tTime / f._ts : (f.totalDuration() - f._tTime) / -f._ts) &&
              f.totalTime(f._tTime, !0),
              (f = f.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && o < this._tDur) || (this._ts < 0 && o > 0) || (!this._tDur && !o)) &&
            Jt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== o ||
            (!this._dur && !s) ||
            (this._initted && Math.abs(this._zTime) === ke) ||
            (!this._initted && this._dur && o) ||
            (!o && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = o), $d(this, o, s)),
          this
        );
      }),
      (r.time = function (o, s) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), o + hd(this)) % (this._dur + this._rDelay) ||
                (o ? this._dur : 0),
              s,
            )
          : this._time;
      }),
      (r.totalProgress = function (o, s) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * o, s)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (r.progress = function (o, s) {
        return arguments.length
          ? this.totalTime(
              this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - o : o) + hd(this),
              s,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (r.iteration = function (o, s) {
        var f = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (o - 1) * f, s)
          : this._repeat
            ? Wr(this._tTime, f) + 1
            : 1;
      }),
      (r.timeScale = function (o, s) {
        if (!arguments.length) return this._rts === -ke ? 0 : this._rts;
        if (this._rts === o) return this;
        var f = this.parent && this._ts ? mo(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +o || 0),
          (this._ts = this._ps || o === -ke ? 0 : this._rts),
          this.totalTime(Yi(-Math.abs(this._delay), this.totalDuration(), f), s !== !1),
          wo(this),
          i0(this)
        );
      }),
      (r.paused = function (o) {
        return arguments.length
          ? (this._ps !== o &&
              ((this._ps = o),
              o
                ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Hr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 && Math.abs(this._zTime) !== ke && (this._tTime -= ke),
                  ))),
            this)
          : this._ps;
      }),
      (r.startTime = function (o) {
        if (arguments.length) {
          this._start = Me(o);
          var s = this.parent || this._dp;
          return (s && (s._sort || !this.parent) && Jt(s, this, this._start - this._delay), this);
        }
        return this._start;
      }),
      (r.endTime = function (o) {
        return (
          this._start + (pt(o) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        );
      }),
      (r.rawTime = function (o) {
        var s = this.parent || this._dp;
        return s
          ? o && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? mo(s.rawTime(o), this)
              : this._tTime
          : this._tTime;
      }),
      (r.revert = function (o) {
        o === void 0 && (o = e0);
        var s = qe;
        return (
          (qe = o),
          Zu(this) &&
            (this.timeline && this.timeline.revert(o), this.totalTime(-0.01, o.suppressEvents)),
          this.data !== "nested" && o.kill !== !1 && this.kill(),
          (qe = s),
          this
        );
      }),
      (r.globalTime = function (o) {
        for (var s = this, f = arguments.length ? o : s.rawTime(); s;)
          ((f = s._start + f / (Math.abs(s._ts) || 1)), (s = s._dp));
        return !this.parent && this._sat ? this._sat.globalTime(o) : f;
      }),
      (r.repeat = function (o) {
        return arguments.length
          ? ((this._repeat = o === 1 / 0 ? -2 : o), md(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (r.repeatDelay = function (o) {
        if (arguments.length) {
          var s = this._time;
          return ((this._rDelay = o), md(this), s ? this.time(s) : this);
        }
        return this._rDelay;
      }),
      (r.yoyo = function (o) {
        return arguments.length ? ((this._yoyo = o), this) : this._yoyo;
      }),
      (r.seek = function (o, s) {
        return this.totalTime(It(this, o), pt(s));
      }),
      (r.restart = function (o, s) {
        return (
          this.play().totalTime(o ? -this._delay : 0, pt(s)),
          this._dur || (this._zTime = -ke),
          this
        );
      }),
      (r.play = function (o, s) {
        return (o != null && this.seek(o, s), this.reversed(!1).paused(!1));
      }),
      (r.reverse = function (o, s) {
        return (o != null && this.seek(o || this.totalDuration(), s), this.reversed(!0).paused(!1));
      }),
      (r.pause = function (o, s) {
        return (o != null && this.seek(o, s), this.paused(!0));
      }),
      (r.resume = function () {
        return this.paused(!1);
      }),
      (r.reversed = function (o) {
        return arguments.length
          ? (!!o !== this.reversed() && this.timeScale(-this._rts || (o ? -ke : 0)), this)
          : this._rts < 0;
      }),
      (r.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -ke), this);
      }),
      (r.isActive = function () {
        var o = this.parent || this._dp,
          s = this._start,
          f;
        return !!(
          !o ||
          (this._ts &&
            this._initted &&
            o.isActive() &&
            (f = o.rawTime(!0)) >= s &&
            f < this.endTime(!0) - ke)
        );
      }),
      (r.eventCallback = function (o, s, f) {
        var c = this.vars;
        return arguments.length > 1
          ? (s
              ? ((c[o] = s), f && (c[o + "Params"] = f), o === "onUpdate" && (this._onUpdate = s))
              : delete c[o],
            this)
          : c[o];
      }),
      (r.then = function (o) {
        var s = this,
          f = s._prom;
        return new Promise(function (c) {
          var d = Ie(o) ? o : Qd,
            m = function () {
              var g = s.then;
              ((s.then = null),
                f && f(),
                Ie(d) && (d = d(s)) && (d.then || d === s) && (s.then = g),
                c(d),
                (s.then = g));
            };
          (s._initted && s.totalProgress() === 1 && s._ts >= 0) || (!s._tTime && s._ts < 0)
            ? m()
            : (s._prom = m);
        });
      }),
      (r.kill = function () {
        Di(this);
      }),
      p
    );
  })();
Ot($i.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ke,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var dt = (function (p) {
  Dd(r, p);
  function r(o, s) {
    var f;
    return (
      o === void 0 && (o = {}),
      (f = p.call(this, o) || this),
      (f.labels = {}),
      (f.smoothChildTiming = !!o.smoothChildTiming),
      (f.autoRemoveChildren = !!o.autoRemoveChildren),
      (f._sort = pt(o.sortChildren)),
      De && Jt(o.parent || De, fn(f), s),
      o.reversed && f.reverse(),
      o.paused && f.paused(!0),
      o.scrollTrigger && Gd(fn(f), o.scrollTrigger),
      f
    );
  }
  var i = r.prototype;
  return (
    (i.to = function (s, f, c) {
      return (Ii(0, arguments, this), this);
    }),
    (i.from = function (s, f, c) {
      return (Ii(1, arguments, this), this);
    }),
    (i.fromTo = function (s, f, c, d) {
      return (Ii(2, arguments, this), this);
    }),
    (i.set = function (s, f, c) {
      return (
        (f.duration = 0),
        (f.parent = this),
        Fi(f).repeatDelay || (f.repeat = 0),
        (f.immediateRender = !!f.immediateRender),
        new Be(s, f, It(this, c), 1),
        this
      );
    }),
    (i.call = function (s, f, c) {
      return Jt(this, Be.delayedCall(0, s, f), c);
    }),
    (i.staggerTo = function (s, f, c, d, m, _, g) {
      return (
        (c.duration = f),
        (c.stagger = c.stagger || d),
        (c.onComplete = _),
        (c.onCompleteParams = g),
        (c.parent = this),
        new Be(s, c, It(this, m)),
        this
      );
    }),
    (i.staggerFrom = function (s, f, c, d, m, _, g) {
      return (
        (c.runBackwards = 1),
        (Fi(c).immediateRender = pt(c.immediateRender)),
        this.staggerTo(s, f, c, d, m, _, g)
      );
    }),
    (i.staggerFromTo = function (s, f, c, d, m, _, g, x) {
      return (
        (d.startAt = c),
        (Fi(d).immediateRender = pt(d.immediateRender)),
        this.staggerTo(s, f, d, m, _, g, x)
      );
    }),
    (i.render = function (s, f, c) {
      var d = this._time,
        m = this._dirty ? this.totalDuration() : this._tDur,
        _ = this._dur,
        g = s <= 0 ? 0 : Me(s),
        x = this._zTime < 0 != s < 0 && (this._initted || !_),
        S,
        T,
        R,
        y,
        N,
        L,
        D,
        A,
        j,
        z,
        Q,
        V;
      if ((this !== De && g > m && s >= 0 && (g = m), g !== this._tTime || c || x)) {
        if (
          (d !== this._time && _ && ((g += this._time - d), (s += this._time - d)),
          (S = g),
          (j = this._start),
          (A = this._ts),
          (L = !A),
          x && (_ || (d = this._zTime), (s || !f) && (this._zTime = s)),
          this._repeat)
        ) {
          if (((Q = this._yoyo), (N = _ + this._rDelay), this._repeat < -1 && s < 0))
            return this.totalTime(N * 100 + s, f, c);
          if (
            ((S = Me(g % N)),
            g === m
              ? ((y = this._repeat), (S = _))
              : ((z = Me(g / N)), (y = ~~z), y && y === z && ((S = _), y--), S > _ && (S = _)),
            (z = Wr(this._tTime, N)),
            !d && this._tTime && z !== y && this._tTime - z * N - this._dur <= 0 && (z = y),
            Q && y & 1 && ((S = _ - S), (V = 1)),
            y !== z && !this._lock)
          ) {
            var H = Q && z & 1,
              W = H === (Q && y & 1);
            if (
              (y < z && (H = !H),
              (d = H ? 0 : g % _ ? _ : g),
              (this._lock = 1),
              (this.render(d || (V ? 0 : Me(y * N)), f, !_)._lock = 0),
              (this._tTime = g),
              !f && this.parent && Tt(this, "onRepeat"),
              this.vars.repeatRefresh && !V && ((this.invalidate()._lock = 1), (z = y)),
              (d && d !== this._time) ||
                L !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((_ = this._dur),
              (m = this._tDur),
              W &&
                ((this._lock = 2),
                (d = H ? _ : -1e-4),
                this.render(d, !0),
                this.vars.repeatRefresh && !V && this.invalidate()),
              (this._lock = 0),
              !this._ts && !L)
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((D = u0(this, Me(d), Me(S))), D && (g -= S - (S = D._start))),
          (this._tTime = g),
          (this._time = S),
          (this._act = !!A),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = s),
            (d = 0)),
          !d && g && _ && !f && !z && (Tt(this, "onStart"), this._tTime !== g))
        )
          return this;
        if (S >= d && s >= 0)
          for (T = this._first; T;) {
            if (((R = T._next), (T._act || S >= T._start) && T._ts && D !== T)) {
              if (T.parent !== this) return this.render(s, f, c);
              if (
                (T.render(
                  T._ts > 0
                    ? (S - T._start) * T._ts
                    : (T._dirty ? T.totalDuration() : T._tDur) + (S - T._start) * T._ts,
                  f,
                  c,
                ),
                S !== this._time || (!this._ts && !L))
              ) {
                ((D = 0), R && (g += this._zTime = -ke));
                break;
              }
            }
            T = R;
          }
        else {
          T = this._last;
          for (var ee = s < 0 ? s : S; T;) {
            if (((R = T._prev), (T._act || ee <= T._end) && T._ts && D !== T)) {
              if (T.parent !== this) return this.render(s, f, c);
              if (
                (T.render(
                  T._ts > 0
                    ? (ee - T._start) * T._ts
                    : (T._dirty ? T.totalDuration() : T._tDur) + (ee - T._start) * T._ts,
                  f,
                  c || (qe && Zu(T)),
                ),
                S !== this._time || (!this._ts && !L))
              ) {
                ((D = 0), R && (g += this._zTime = ee ? -ke : ke));
                break;
              }
            }
            T = R;
          }
        }
        if (
          D &&
          !f &&
          (this.pause(), (D.render(S >= d ? 0 : -ke)._zTime = S >= d ? 1 : -1), this._ts)
        )
          return ((this._start = j), wo(this), this.render(s, f, c));
        (this._onUpdate && !f && Tt(this, "onUpdate", !0),
          ((g === m && this._tTime >= this.totalDuration()) || (!g && d)) &&
            (j === this._start || Math.abs(A) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((s || !_) && ((g === m && this._ts > 0) || (!g && this._ts < 0)) && jn(this, 1),
              !f &&
                !(s < 0 && !d) &&
                (g || d || !m) &&
                (Tt(this, g === m && s >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(g < m && this.timeScale() > 0) && this._prom()))));
      }
      return this;
    }),
    (i.add = function (s, f) {
      var c = this;
      if ((dn(f) || (f = It(this, f, s)), !(s instanceof $i))) {
        if (nt(s))
          return (
            s.forEach(function (d) {
              return c.add(d, f);
            }),
            this
          );
        if (Xe(s)) return this.addLabel(s, f);
        if (Ie(s)) s = Be.delayedCall(0, s);
        else return this;
      }
      return this !== s ? Jt(this, s, f) : this;
    }),
    (i.getChildren = function (s, f, c, d) {
      (s === void 0 && (s = !0),
        f === void 0 && (f = !0),
        c === void 0 && (c = !0),
        d === void 0 && (d = -At));
      for (var m = [], _ = this._first; _;)
        (_._start >= d &&
          (_ instanceof Be
            ? f && m.push(_)
            : (c && m.push(_), s && m.push.apply(m, _.getChildren(!0, f, c)))),
          (_ = _._next));
      return m;
    }),
    (i.getById = function (s) {
      for (var f = this.getChildren(1, 1, 1), c = f.length; c--;)
        if (f[c].vars.id === s) return f[c];
    }),
    (i.remove = function (s) {
      return Xe(s)
        ? this.removeLabel(s)
        : Ie(s)
          ? this.killTweensOf(s)
          : (s.parent === this && yo(this, s),
            s === this._recent && (this._recent = this._last),
            or(this));
    }),
    (i.totalTime = function (s, f) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Me(
              Et.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts),
            )),
          p.prototype.totalTime.call(this, s, f),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (i.addLabel = function (s, f) {
      return ((this.labels[s] = It(this, f)), this);
    }),
    (i.removeLabel = function (s) {
      return (delete this.labels[s], this);
    }),
    (i.addPause = function (s, f, c) {
      var d = Be.delayedCall(0, f || Vi, c);
      return ((d.data = "isPause"), (this._hasPause = 1), Jt(this, d, It(this, s)));
    }),
    (i.removePause = function (s) {
      var f = this._first;
      for (s = It(this, s); f;) (f._start === s && f.data === "isPause" && jn(f), (f = f._next));
    }),
    (i.killTweensOf = function (s, f, c) {
      for (var d = this.getTweensOf(s, c), m = d.length; m--;) Dn !== d[m] && d[m].kill(s, f);
      return this;
    }),
    (i.getTweensOf = function (s, f) {
      for (var c = [], d = jt(s), m = this._first, _ = dn(f), g; m;)
        (m instanceof Be
          ? t0(m._targets, d) &&
            (_
              ? (!Dn || (m._initted && m._ts)) &&
                m.globalTime(0) <= f &&
                m.globalTime(m.totalDuration()) > f
              : !f || m.isActive()) &&
            c.push(m)
          : (g = m.getTweensOf(d, f)).length && c.push.apply(c, g),
          (m = m._next));
      return c;
    }),
    (i.tweenTo = function (s, f) {
      f = f || {};
      var c = this,
        d = It(c, s),
        m = f,
        _ = m.startAt,
        g = m.onStart,
        x = m.onStartParams,
        S = m.immediateRender,
        T,
        R = Be.to(
          c,
          Ot(
            {
              ease: f.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: d,
              overwrite: "auto",
              duration:
                f.duration ||
                Math.abs((d - (_ && "time" in _ ? _.time : c._time)) / c.timeScale()) ||
                ke,
              onStart: function () {
                if ((c.pause(), !T)) {
                  var N =
                    f.duration ||
                    Math.abs((d - (_ && "time" in _ ? _.time : c._time)) / c.timeScale());
                  (R._dur !== N && $r(R, N, 0, 1).render(R._time, !0, !0), (T = 1));
                }
                g && g.apply(R, x || []);
              },
            },
            f,
          ),
        );
      return S ? R.render(0) : R;
    }),
    (i.tweenFromTo = function (s, f, c) {
      return this.tweenTo(f, Ot({ startAt: { time: It(this, s) } }, c));
    }),
    (i.recent = function () {
      return this._recent;
    }),
    (i.nextLabel = function (s) {
      return (s === void 0 && (s = this._time), _d(this, It(this, s)));
    }),
    (i.previousLabel = function (s) {
      return (s === void 0 && (s = this._time), _d(this, It(this, s), 1));
    }),
    (i.currentLabel = function (s) {
      return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + ke);
    }),
    (i.shiftChildren = function (s, f, c) {
      c === void 0 && (c = 0);
      var d = this._first,
        m = this.labels,
        _;
      for (s = Me(s); d;) (d._start >= c && ((d._start += s), (d._end += s)), (d = d._next));
      if (f) for (_ in m) m[_] >= c && (m[_] += s);
      return or(this);
    }),
    (i.invalidate = function (s) {
      var f = this._first;
      for (this._lock = 0; f;) (f.invalidate(s), (f = f._next));
      return p.prototype.invalidate.call(this, s);
    }),
    (i.clear = function (s) {
      s === void 0 && (s = !0);
      for (var f = this._first, c; f;) ((c = f._next), this.remove(f), (f = c));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        s && (this.labels = {}),
        or(this)
      );
    }),
    (i.totalDuration = function (s) {
      var f = 0,
        c = this,
        d = c._last,
        m = At,
        _,
        g,
        x;
      if (arguments.length)
        return c.timeScale(
          (c._repeat < 0 ? c.duration() : c.totalDuration()) / (c.reversed() ? -s : s),
        );
      if (c._dirty) {
        for (x = c.parent; d;)
          ((_ = d._prev),
            d._dirty && d.totalDuration(),
            (g = d._start),
            g > m && c._sort && d._ts && !c._lock
              ? ((c._lock = 1), (Jt(c, d, g - d._delay, 1)._lock = 0))
              : (m = g),
            g < 0 &&
              d._ts &&
              ((f -= g),
              ((!x && !c._dp) || (x && x.smoothChildTiming)) &&
                ((c._start += Me(g / c._ts)), (c._time -= g), (c._tTime -= g)),
              c.shiftChildren(-g, !1, -1 / 0),
              (m = 0)),
            d._end > f && d._ts && (f = d._end),
            (d = _));
        ($r(c, c === De && c._time > f ? c._time : f, 1, 1), (c._dirty = 0));
      }
      return c._tDur;
    }),
    (r.updateRoot = function (s) {
      if ((De._ts && ($d(De, mo(s, De)), (Bd = Et.frame)), Et.frame >= dd)) {
        dd += Pt.autoSleep || 120;
        var f = De._first;
        if ((!f || !f._ts) && Pt.autoSleep && Et._listeners.length < 2) {
          for (; f && !f._ts;) f = f._next;
          f || Et.sleep();
        }
      }
    }),
    r
  );
})($i);
Ot(dt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var T0 = function (r, i, o, s, f, c, d) {
    var m = new mt(this._pt, r, i, 0, 1, mp, null, f),
      _ = 0,
      g = 0,
      x,
      S,
      T,
      R,
      y,
      N,
      L,
      D;
    for (
      m.b = o,
        m.e = s,
        o += "",
        s += "",
        (L = ~s.indexOf("random(")) && (s = Bi(s)),
        c && ((D = [o, s]), c(D, r, i), (o = D[0]), (s = D[1])),
        S = o.match(wu) || [];
      (x = wu.exec(s));
    )
      ((R = x[0]),
        (y = s.substring(_, x.index)),
        T ? (T = (T + 1) % 5) : y.substr(-5) === "rgba(" && (T = 1),
        R !== S[g++] &&
          ((N = parseFloat(S[g - 1]) || 0),
          (m._pt = {
            _next: m._pt,
            p: y || g === 1 ? y : ",",
            s: N,
            c: R.charAt(1) === "=" ? jr(N, R) - N : parseFloat(R) - N,
            m: T && T < 4 ? Math.round : 0,
          }),
          (_ = wu.lastIndex)));
    return (
      (m.c = _ < s.length ? s.substring(_, s.length) : ""),
      (m.fp = d),
      (Ad.test(s) || L) && (m.e = 0),
      (this._pt = m),
      m
    );
  },
  Ju = function (r, i, o, s, f, c, d, m, _, g) {
    Ie(s) && (s = s(f || 0, r, c));
    var x = r[i],
      S =
        o !== "get"
          ? o
          : Ie(x)
            ? _
              ? r[i.indexOf("set") || !Ie(r["get" + i.substr(3)]) ? i : "get" + i.substr(3)](_)
              : r[i]()
            : x,
      T = Ie(x) ? (_ ? R0 : pp) : ea,
      R;
    if (
      (Xe(s) &&
        (~s.indexOf("random(") && (s = Bi(s)),
        s.charAt(1) === "=" && ((R = jr(S, s) + (tt(S) || 0)), (R || R === 0) && (s = R))),
      !g || S !== s || Iu)
    )
      return !isNaN(S * s) && s !== ""
        ? ((R = new mt(
            this._pt,
            r,
            i,
            +S || 0,
            s - (S || 0),
            typeof x == "boolean" ? M0 : hp,
            0,
            T,
          )),
          _ && (R.fp = _),
          d && R.modifier(d, this, r),
          (this._pt = R))
        : (!x && !(i in r) && Xu(i, s), T0.call(this, r, i, S, s, T, m || Pt.stringFilter, _));
  },
  C0 = function (r, i, o, s, f) {
    if ((Ie(r) && (r = Ai(r, f, i, o, s)), !en(r) || (r.style && r.nodeType) || nt(r) || Fd(r)))
      return Xe(r) ? Ai(r, f, i, o, s) : r;
    var c = {},
      d;
    for (d in r) c[d] = Ai(r[d], f, i, o, s);
    return c;
  },
  fp = function (r, i, o, s, f, c) {
    var d, m, _, g;
    if (
      St[r] &&
      (d = new St[r]()).init(f, d.rawVars ? i[r] : C0(i[r], s, f, c, o), o, s, c) !== !1 &&
      ((o._pt = m = new mt(o._pt, f, r, 0, 1, d.render, d, 0, d.priority)), o !== Ar)
    )
      for (_ = o._ptLookup[o._targets.indexOf(f)], g = d._props.length; g--;) _[d._props[g]] = m;
    return d;
  },
  Dn,
  Iu,
  bu = function p(r, i, o) {
    var s = r.vars,
      f = s.ease,
      c = s.startAt,
      d = s.immediateRender,
      m = s.lazy,
      _ = s.onUpdate,
      g = s.runBackwards,
      x = s.yoyoEase,
      S = s.keyframes,
      T = s.autoRevert,
      R = r._dur,
      y = r._startAt,
      N = r._targets,
      L = r.parent,
      D = L && L.data === "nested" ? L.vars.targets : N,
      A = r._overwrite === "auto" && !$u,
      j = r.timeline,
      z = s.easeReverse || x,
      Q,
      V,
      H,
      W,
      ee,
      ge,
      pe,
      ue,
      ce,
      ve,
      de,
      le,
      $;
    if (
      (j && (!S || !f) && (f = "none"),
      (r._ease = sr(f, ji.ease)),
      (r._rEase = z && (sr(z) || r._ease)),
      (r._from = !j && !!s.runBackwards),
      r._from && (r.ratio = 1),
      !j || (S && !s.stagger))
    ) {
      if (
        ((ue = N[0] ? lr(N[0]).harness : 0),
        (le = ue && s[ue.prop]),
        (Q = ho(s, Gu)),
        y &&
          (y._zTime < 0 && y.progress(1),
          i < 0 && g && d && !T ? y.render(-1, !0) : y.revert(g && R ? uo : bm),
          (y._lazy = 0)),
        c)
      ) {
        if (
          (jn(
            (r._startAt = Be.set(
              N,
              Ot(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: L,
                  immediateRender: !0,
                  lazy: !y && pt(m),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    _ &&
                    function () {
                      return Tt(r, "onUpdate");
                    },
                  stagger: 0,
                },
                c,
              ),
            )),
          ),
          (r._startAt._dp = 0),
          (r._startAt._sat = r),
          i < 0 && (qe || (!d && !T)) && r._startAt.revert(uo),
          d && R && i <= 0 && o <= 0)
        ) {
          i && (r._zTime = i);
          return;
        }
      } else if (g && R && !y) {
        if (
          (i && (d = !1),
          (H = Ot(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: d && !y && pt(m),
              immediateRender: d,
              stagger: 0,
              parent: L,
            },
            Q,
          )),
          le && (H[ue.prop] = le),
          jn((r._startAt = Be.set(N, H))),
          (r._startAt._dp = 0),
          (r._startAt._sat = r),
          i < 0 && (qe ? r._startAt.revert(uo) : r._startAt.render(-1, !0)),
          (r._zTime = i),
          !d)
        )
          p(r._startAt, ke, ke);
        else if (!i) return;
      }
      for (r._pt = r._ptCache = 0, m = (R && pt(m)) || (m && !R), V = 0; V < N.length; V++) {
        if (
          ((ee = N[V]),
          (pe = ee._gsap || qu(N)[V]._gsap),
          (r._ptLookup[V] = ve = {}),
          Ru[pe.id] && In.length && po(),
          (de = D === N ? V : D.indexOf(ee)),
          ue &&
            (ce = new ue()).init(ee, le || Q, r, de, D) !== !1 &&
            ((r._pt = W = new mt(r._pt, ee, ce.name, 0, 1, ce.render, ce, 0, ce.priority)),
            ce._props.forEach(function (b) {
              ve[b] = W;
            }),
            ce.priority && (ge = 1)),
          !ue || le)
        )
          for (H in Q)
            St[H] && (ce = fp(H, Q, r, de, ee, D))
              ? ce.priority && (ge = 1)
              : (ve[H] = W = Ju.call(r, ee, H, "get", Q[H], de, D, 0, s.stringFilter));
        (r._op && r._op[V] && r.kill(ee, r._op[V]),
          A &&
            r._pt &&
            ((Dn = r), De.killTweensOf(ee, ve, r.globalTime(i)), ($ = !r.parent), (Dn = 0)),
          r._pt && m && (Ru[pe.id] = 1));
      }
      (ge && _p(r), r._onInit && r._onInit(r));
    }
    ((r._onUpdate = _),
      (r._initted = (!r._op || r._pt) && !$),
      S && i <= 0 && j.render(At, !0, !0));
  },
  P0 = function (r, i, o, s, f, c, d, m) {
    var _ = ((r._pt && r._ptCache) || (r._ptCache = {}))[i],
      g,
      x,
      S,
      T;
    if (!_)
      for (_ = r._ptCache[i] = [], S = r._ptLookup, T = r._targets.length; T--;) {
        if (((g = S[T][i]), g && g.d && g.d._pt))
          for (g = g.d._pt; g && g.p !== i && g.fp !== i;) g = g._next;
        if (!g)
          return (
            (Iu = 1),
            (r.vars[i] = "+=0"),
            bu(r, d),
            (Iu = 0),
            m ? Ui(i + " not eligible for reset. Try splitting into individual properties") : 1
          );
        _.push(g);
      }
    for (T = _.length; T--;)
      ((x = _[T]),
        (g = x._pt || x),
        (g.s = (s || s === 0) && !f ? s : g.s + (s || 0) + c * g.c),
        (g.c = o - g.s),
        x.e && (x.e = Ue(o) + tt(x.e)),
        x.b && (x.b = g.s + tt(x.b)));
  },
  N0 = function (r, i) {
    var o = r[0] ? lr(r[0]).harness : 0,
      s = o && o.aliases,
      f,
      c,
      d,
      m;
    if (!s) return i;
    f = Br({}, i);
    for (c in s) if (c in f) for (m = s[c].split(","), d = m.length; d--;) f[m[d]] = f[c];
    return f;
  },
  O0 = function (r, i, o, s) {
    var f = i.ease || s || "power1.inOut",
      c,
      d;
    if (nt(i))
      ((d = o[r] || (o[r] = [])),
        i.forEach(function (m, _) {
          return d.push({ t: (_ / (i.length - 1)) * 100, v: m, e: f });
        }));
    else
      for (c in i)
        ((d = o[c] || (o[c] = [])), c === "ease" || d.push({ t: parseFloat(r), v: i[c], e: f }));
  },
  Ai = function (r, i, o, s, f) {
    return Ie(r) ? r.call(i, o, s, f) : Xe(r) && ~r.indexOf("random(") ? Bi(r) : r;
  },
  cp = Ku + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
  dp = {};
ht(cp + ",id,stagger,delay,duration,paused,scrollTrigger", function (p) {
  return (dp[p] = 1);
});
var Be = (function (p) {
  Dd(r, p);
  function r(o, s, f, c) {
    var d;
    (typeof s == "number" && ((f.duration = s), (s = f), (f = null)),
      (d = p.call(this, c ? s : Fi(s)) || this));
    var m = d.vars,
      _ = m.duration,
      g = m.delay,
      x = m.immediateRender,
      S = m.stagger,
      T = m.overwrite,
      R = m.keyframes,
      y = m.defaults,
      N = m.scrollTrigger,
      L = s.parent || De,
      D = (nt(o) || Fd(o) ? dn(o[0]) : "length" in s) ? [o] : jt(o),
      A,
      j,
      z,
      Q,
      V,
      H,
      W,
      ee;
    if (
      ((d._targets = D.length
        ? qu(D)
        : Ui("GSAP target " + o + " not found. https://gsap.com", !Pt.nullTargetWarn) || []),
      (d._ptLookup = []),
      (d._overwrite = T),
      R || S || lo(_) || lo(g))
    ) {
      s = d.vars;
      var ge = s.easeReverse || s.yoyoEase;
      if (
        ((A = d.timeline =
          new dt({
            data: "nested",
            defaults: y || {},
            targets: L && L.data === "nested" ? L.vars.targets : D,
          })),
        A.kill(),
        (A.parent = A._dp = fn(d)),
        (A._start = 0),
        S || lo(_) || lo(g))
      ) {
        if (((Q = D.length), (W = S && Jd(S)), en(S)))
          for (V in S) ~cp.indexOf(V) && (ee || (ee = {}), (ee[V] = S[V]));
        for (j = 0; j < Q; j++)
          ((z = ho(s, dp)),
            (z.stagger = 0),
            ge && (z.easeReverse = ge),
            ee && Br(z, ee),
            (H = D[j]),
            (z.duration = +Ai(_, fn(d), j, H, D)),
            (z.delay = (+Ai(g, fn(d), j, H, D) || 0) - d._delay),
            !S && Q === 1 && z.delay && ((d._delay = g = z.delay), (d._start += g), (z.delay = 0)),
            A.to(H, z, W ? W(j, H, D) : 0),
            (A._ease = fe.none));
        A.duration() ? (_ = g = 0) : (d.timeline = 0);
      } else if (R) {
        (Fi(Ot(A.vars.defaults, { ease: "none" })), (A._ease = sr(R.ease || s.ease || "none")));
        var pe = 0,
          ue,
          ce,
          ve;
        if (nt(R))
          (R.forEach(function (de) {
            return A.to(D, de, ">");
          }),
            A.duration());
        else {
          z = {};
          for (V in R) V === "ease" || V === "easeEach" || O0(V, R[V], z, R.easeEach);
          for (V in z)
            for (
              ue = z[V].sort(function (de, le) {
                return de.t - le.t;
              }),
                pe = 0,
                j = 0;
              j < ue.length;
              j++
            )
              ((ce = ue[j]),
                (ve = { ease: ce.e, duration: ((ce.t - (j ? ue[j - 1].t : 0)) / 100) * _ }),
                (ve[V] = ce.v),
                A.to(D, ve, pe),
                (pe += ve.duration));
          A.duration() < _ && A.to({}, { duration: _ - A.duration() });
        }
      }
      _ || d.duration((_ = A.duration()));
    } else d.timeline = 0;
    return (
      T === !0 && !$u && ((Dn = fn(d)), De.killTweensOf(D), (Dn = 0)),
      Jt(L, fn(d), f),
      s.reversed && d.reverse(),
      s.paused && d.paused(!0),
      (x || (!_ && !R && d._start === Me(L._time) && pt(x) && l0(fn(d)) && L.data !== "nested")) &&
        ((d._tTime = -ke), d.render(Math.max(0, -g) || 0)),
      N && Gd(fn(d), N),
      d
    );
  }
  var i = r.prototype;
  return (
    (i.render = function (s, f, c) {
      var d = this._time,
        m = this._tDur,
        _ = this._dur,
        g = s < 0,
        x = s > m - ke && !g ? m : s < ke ? 0 : s,
        S,
        T,
        R,
        y,
        N,
        L,
        D,
        A;
      if (!_) s0(this, s, f, c);
      else if (
        x !== this._tTime ||
        !s ||
        c ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== g) ||
        this._lazy
      ) {
        if (((S = x), (A = this.timeline), this._repeat)) {
          if (((y = _ + this._rDelay), this._repeat < -1 && g))
            return this.totalTime(y * 100 + s, f, c);
          if (
            ((S = Me(x % y)),
            x === m
              ? ((R = this._repeat), (S = _))
              : ((N = Me(x / y)), (R = ~~N), R && R === N ? ((S = _), R--) : S > _ && (S = _)),
            (L = this._yoyo && R & 1),
            L && (S = _ - S),
            (N = Wr(this._tTime, y)),
            S === d && !c && this._initted && R === N)
          )
            return ((this._tTime = x), this);
          R !== N &&
            this.vars.repeatRefresh &&
            !L &&
            !this._lock &&
            S !== y &&
            this._initted &&
            ((this._lock = c = 1), (this.render(Me(y * R), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (Kd(this, g ? s : S, c, f, x)) return ((this._tTime = 0), this);
          if (d !== this._time && !(c && this.vars.repeatRefresh && R !== N)) return this;
          if (_ !== this._dur) return this.render(s, f, c);
        }
        if (this._rEase) {
          var j = S < d;
          if (j !== this._inv) {
            var z = j ? d : _ - d;
            ((this._inv = j),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = d),
              (this._invRecip = z ? (j ? -1 : 1) / z : 0),
              (this._invScale = j ? -this.ratio : 1 - this.ratio),
              (this._invEase = j ? this._rEase : this._ease));
          }
          this.ratio = D =
            this._invRatio + this._invScale * this._invEase((S - this._invTime) * this._invRecip);
        } else this.ratio = D = this._ease(S / _);
        if (
          (this._from && (this.ratio = D = 1 - D),
          (this._tTime = x),
          (this._time = S),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !d && x && !f && !N && (Tt(this, "onStart"), this._tTime !== x))
        )
          return this;
        for (T = this._pt; T;) (T.r(D, T.d), (T = T._next));
        ((A && A.render(s < 0 ? s : A._dur * A._ease(S / this._dur), f, c)) ||
          (this._startAt && (this._zTime = s)),
          this._onUpdate && !f && (g && zu(this, s, f, c), Tt(this, "onUpdate")),
          this._repeat &&
            R !== N &&
            this.vars.onRepeat &&
            !f &&
            this.parent &&
            Tt(this, "onRepeat"),
          (x === this._tDur || !x) &&
            this._tTime === x &&
            (g && !this._onUpdate && zu(this, s, !0, !0),
            (s || !_) &&
              ((x === this._tDur && this._ts > 0) || (!x && this._ts < 0)) &&
              jn(this, 1),
            !f &&
              !(g && !d) &&
              (x || d || L) &&
              (Tt(this, x === m ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(x < m && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (i.targets = function () {
      return this._targets;
    }),
    (i.invalidate = function (s) {
      return (
        (!s || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(s),
        p.prototype.invalidate.call(this, s)
      );
    }),
    (i.resetTo = function (s, f, c, d, m) {
      (Wi || Et.wake(), this._ts || this.play());
      var _ = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        g;
      return (
        this._initted || bu(this, _),
        (g = this._ease(_ / this._dur)),
        P0(this, s, f, c, d, g, _, m)
          ? this.resetTo(s, f, c, d, 1)
          : (xo(this, 0),
            this.parent || Yd(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
      );
    }),
    (i.kill = function (s, f) {
      if ((f === void 0 && (f = "all"), !s && (!f || f === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent ? Di(this) : this.scrollTrigger && this.scrollTrigger.kill(!!qe),
          this
        );
      if (this.timeline) {
        var c = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(s, f, Dn && Dn.vars.overwrite !== !0)._first || Di(this),
          this.parent &&
            c !== this.timeline.totalDuration() &&
            $r(this, (this._dur * this.timeline._tDur) / c, 0, 1),
          this
        );
      }
      var d = this._targets,
        m = s ? jt(s) : d,
        _ = this._ptLookup,
        g = this._pt,
        x,
        S,
        T,
        R,
        y,
        N,
        L;
      if ((!f || f === "all") && r0(d, m)) return (f === "all" && (this._pt = 0), Di(this));
      for (
        x = this._op = this._op || [],
          f !== "all" &&
            (Xe(f) &&
              ((y = {}),
              ht(f, function (D) {
                return (y[D] = 1);
              }),
              (f = y)),
            (f = N0(d, f))),
          L = d.length;
        L--;
      )
        if (~m.indexOf(d[L])) {
          ((S = _[L]),
            f === "all" ? ((x[L] = f), (R = S), (T = {})) : ((T = x[L] = x[L] || {}), (R = f)));
          for (y in R)
            ((N = S && S[y]),
              N && ((!("kill" in N.d) || N.d.kill(y) === !0) && yo(this, N, "_pt"), delete S[y]),
              T !== "all" && (T[y] = 1));
        }
      return (this._initted && !this._pt && g && Di(this), this);
    }),
    (r.to = function (s, f) {
      return new r(s, f, arguments[2]);
    }),
    (r.from = function (s, f) {
      return Ii(1, arguments);
    }),
    (r.delayedCall = function (s, f, c, d) {
      return new r(f, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: s,
        onComplete: f,
        onReverseComplete: f,
        onCompleteParams: c,
        onReverseCompleteParams: c,
        callbackScope: d,
      });
    }),
    (r.fromTo = function (s, f, c) {
      return Ii(2, arguments);
    }),
    (r.set = function (s, f) {
      return ((f.duration = 0), f.repeatDelay || (f.repeat = 0), new r(s, f));
    }),
    (r.killTweensOf = function (s, f, c) {
      return De.killTweensOf(s, f, c);
    }),
    r
  );
})($i);
Ot(Be.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
ht("staggerTo,staggerFrom,staggerFromTo", function (p) {
  Be[p] = function () {
    var r = new dt(),
      i = Du.call(arguments, 0);
    return (i.splice(p === "staggerFromTo" ? 5 : 4, 0, 0), r[p].apply(r, i));
  };
});
var ea = function (r, i, o) {
    return (r[i] = o);
  },
  pp = function (r, i, o) {
    return r[i](o);
  },
  R0 = function (r, i, o, s) {
    return r[i](s.fp, o);
  },
  z0 = function (r, i, o) {
    return r.setAttribute(i, o);
  },
  ta = function (r, i) {
    return Ie(r[i]) ? pp : Hu(r[i]) && r.setAttribute ? z0 : ea;
  },
  hp = function (r, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * r) * 1e6) / 1e6, i);
  },
  M0 = function (r, i) {
    return i.set(i.t, i.p, !!(i.s + i.c * r), i);
  },
  mp = function (r, i) {
    var o = i._pt,
      s = "";
    if (!r && i.b) s = i.b;
    else if (r === 1 && i.e) s = i.e;
    else {
      for (; o;)
        ((s = o.p + (o.m ? o.m(o.s + o.c * r) : Math.round((o.s + o.c * r) * 1e4) / 1e4) + s),
          (o = o._next));
      s += i.c;
    }
    i.set(i.t, i.p, s, i);
  },
  na = function (r, i) {
    for (var o = i._pt; o;) (o.r(r, o.d), (o = o._next));
  },
  D0 = function (r, i, o, s) {
    for (var f = this._pt, c; f;) ((c = f._next), f.p === s && f.modifier(r, i, o), (f = c));
  },
  L0 = function (r) {
    for (var i = this._pt, o, s; i;)
      ((s = i._next),
        (i.p === r && !i.op) || i.op === r ? yo(this, i, "_pt") : i.dep || (o = 1),
        (i = s));
    return !o;
  },
  F0 = function (r, i, o, s) {
    s.mSet(r, i, s.m.call(s.tween, o, s.mt), s);
  },
  _p = function (r) {
    for (var i = r._pt, o, s, f, c; i;) {
      for (o = i._next, s = f; s && s.pr > i.pr;) s = s._next;
      ((i._prev = s ? s._prev : c) ? (i._prev._next = i) : (f = i),
        (i._next = s) ? (s._prev = i) : (c = i),
        (i = o));
    }
    r._pt = f;
  },
  mt = (function () {
    function p(i, o, s, f, c, d, m, _, g) {
      ((this.t = o),
        (this.s = f),
        (this.c = c),
        (this.p = s),
        (this.r = d || hp),
        (this.d = m || this),
        (this.set = _ || ea),
        (this.pr = g || 0),
        (this._next = i),
        i && (i._prev = this));
    }
    var r = p.prototype;
    return (
      (r.modifier = function (o, s, f) {
        ((this.mSet = this.mSet || this.set),
          (this.set = F0),
          (this.m = o),
          (this.mt = f),
          (this.tween = s));
      }),
      p
    );
  })();
ht(
  Ku +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",
  function (p) {
    return (Gu[p] = 1);
  },
);
Nt.TweenMax = Nt.TweenLite = Be;
Nt.TimelineLite = Nt.TimelineMax = dt;
De = new dt({
  sortChildren: !1,
  defaults: ji,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Pt.stringFilter = sp;
var ur = [],
  fo = {},
  I0 = [],
  vd = 0,
  A0 = 0,
  Tu = function (r) {
    return (fo[r] || I0).map(function (i) {
      return i();
    });
  },
  Au = function () {
    var r = Date.now(),
      i = [];
    r - vd > 2 &&
      (Tu("matchMediaInit"),
      ur.forEach(function (o) {
        var s = o.queries,
          f = o.conditions,
          c,
          d,
          m,
          _;
        for (d in s)
          ((c = Zt.matchMedia(s[d]).matches), c && (m = 1), c !== f[d] && ((f[d] = c), (_ = 1)));
        _ && (o.revert(), m && i.push(o));
      }),
      Tu("matchMediaRevert"),
      i.forEach(function (o) {
        return o.onMatch(o, function (s) {
          return o.add(null, s);
        });
      }),
      (vd = r),
      Tu("matchMedia"));
  },
  gp = (function () {
    function p(i, o) {
      ((this.selector = o && Lu(o)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = A0++),
        i && this.add(i));
    }
    var r = p.prototype;
    return (
      (r.add = function (o, s, f) {
        Ie(o) && ((f = s), (s = o), (o = Ie));
        var c = this,
          d = function () {
            var _ = Oe,
              g = c.selector,
              x;
            return (
              _ && _ !== c && _.data.push(c),
              f && (c.selector = Lu(f)),
              (Oe = c),
              (x = s.apply(c, arguments)),
              Ie(x) && c._r.push(x),
              (Oe = _),
              (c.selector = g),
              (c.isReverted = !1),
              x
            );
          };
        return (
          (c.last = d),
          o === Ie
            ? d(c, function (m) {
                return c.add(null, m);
              })
            : o
              ? (c[o] = d)
              : d
        );
      }),
      (r.ignore = function (o) {
        var s = Oe;
        ((Oe = null), o(this), (Oe = s));
      }),
      (r.getTweens = function () {
        var o = [];
        return (
          this.data.forEach(function (s) {
            return s instanceof p
              ? o.push.apply(o, s.getTweens())
              : s instanceof Be && !(s.parent && s.parent.data === "nested") && o.push(s);
          }),
          o
        );
      }),
      (r.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (r.kill = function (o, s) {
        var f = this;
        if (
          (o
            ? (function () {
                for (var d = f.getTweens(), m = f.data.length, _; m--;)
                  ((_ = f.data[m]),
                    _.data === "isFlip" &&
                      (_.revert(),
                      _.getChildren(!0, !0, !1).forEach(function (g) {
                        return d.splice(d.indexOf(g), 1);
                      })));
                for (
                  d
                    .map(function (g) {
                      return {
                        g:
                          g._dur || g._delay || (g._sat && !g._sat.vars.immediateRender)
                            ? g.globalTime(0)
                            : -1 / 0,
                        t: g,
                      };
                    })
                    .sort(function (g, x) {
                      return x.g - g.g || -1 / 0;
                    })
                    .forEach(function (g) {
                      return g.t.revert(o);
                    }),
                    m = f.data.length;
                  m--;
                )
                  ((_ = f.data[m]),
                    _ instanceof dt
                      ? _.data !== "nested" &&
                        (_.scrollTrigger && _.scrollTrigger.revert(), _.kill())
                      : !(_ instanceof Be) && _.revert && _.revert(o));
                (f._r.forEach(function (g) {
                  return g(o, f);
                }),
                  (f.isReverted = !0));
              })()
            : this.data.forEach(function (d) {
                return d.kill && d.kill();
              }),
          this.clear(),
          s)
        )
          for (var c = ur.length; c--;) ur[c].id === this.id && ur.splice(c, 1);
      }),
      (r.revert = function (o) {
        this.kill(o || {});
      }),
      p
    );
  })(),
  j0 = (function () {
    function p(i) {
      ((this.contexts = []), (this.scope = i), Oe && Oe.data.push(this));
    }
    var r = p.prototype;
    return (
      (r.add = function (o, s, f) {
        en(o) || (o = { matches: o });
        var c = new gp(0, f || this.scope),
          d = (c.conditions = {}),
          m,
          _,
          g;
        (Oe && !c.selector && (c.selector = Oe.selector),
          this.contexts.push(c),
          (s = c.add("onMatch", s)),
          (c.queries = o));
        for (_ in o)
          _ === "all"
            ? (g = 1)
            : ((m = Zt.matchMedia(o[_])),
              m &&
                (ur.indexOf(c) < 0 && ur.push(c),
                (d[_] = m.matches) && (g = 1),
                m.addListener ? m.addListener(Au) : m.addEventListener("change", Au)));
        return (
          g &&
            s(c, function (x) {
              return c.add(null, x);
            }),
          this
        );
      }),
      (r.revert = function (o) {
        this.kill(o || {});
      }),
      (r.kill = function (o) {
        this.contexts.forEach(function (s) {
          return s.kill(o, !0);
        });
      }),
      p
    );
  })(),
  _o = {
    registerPlugin: function () {
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
      i.forEach(function (s) {
        return ip(s);
      });
    },
    timeline: function (r) {
      return new dt(r);
    },
    getTweensOf: function (r, i) {
      return De.getTweensOf(r, i);
    },
    getProperty: function (r, i, o, s) {
      Xe(r) && (r = jt(r)[0]);
      var f = lr(r || {}).get,
        c = o ? Qd : Hd;
      return (
        o === "native" && (o = ""),
        r &&
          (i
            ? c(((St[i] && St[i].get) || f)(r, i, o, s))
            : function (d, m, _) {
                return c(((St[d] && St[d].get) || f)(r, d, m, _));
              })
      );
    },
    quickSetter: function (r, i, o) {
      if (((r = jt(r)), r.length > 1)) {
        var s = r.map(function (g) {
            return gt.quickSetter(g, i, o);
          }),
          f = s.length;
        return function (g) {
          for (var x = f; x--;) s[x](g);
        };
      }
      r = r[0] || {};
      var c = St[i],
        d = lr(r),
        m = (d.harness && (d.harness.aliases || {})[i]) || i,
        _ = c
          ? function (g) {
              var x = new c();
              ((Ar._pt = 0),
                x.init(r, o ? g + o : g, Ar, 0, [r]),
                x.render(1, x),
                Ar._pt && na(1, Ar));
            }
          : d.set(r, m);
      return c
        ? _
        : function (g) {
            return _(r, m, o ? g + o : g, d, 1);
          };
    },
    quickTo: function (r, i, o) {
      var s,
        f = gt.to(
          r,
          Ot(((s = {}), (s[i] = "+=0.1"), (s.paused = !0), (s.stagger = 0), s), o || {}),
        ),
        c = function (m, _, g) {
          return f.resetTo(i, m, _, g);
        };
      return ((c.tween = f), c);
    },
    isTweening: function (r) {
      return De.getTweensOf(r, !0).length > 0;
    },
    defaults: function (r) {
      return (r && r.ease && (r.ease = sr(r.ease, ji.ease)), pd(ji, r || {}));
    },
    config: function (r) {
      return pd(Pt, r || {});
    },
    registerEffect: function (r) {
      var i = r.name,
        o = r.effect,
        s = r.plugins,
        f = r.defaults,
        c = r.extendTimeline;
      ((s || "").split(",").forEach(function (d) {
        return d && !St[d] && !Nt[d] && Ui(i + " effect requires " + d + " plugin.");
      }),
        (xu[i] = function (d, m, _) {
          return o(jt(d), Ot(m || {}, f), _);
        }),
        c &&
          (dt.prototype[i] = function (d, m, _) {
            return this.add(xu[i](d, en(m) ? m : (_ = m) && {}, this), _);
          }));
    },
    registerEase: function (r, i) {
      fe[r] = sr(i);
    },
    parseEase: function (r, i) {
      return arguments.length ? sr(r, i) : fe;
    },
    getById: function (r) {
      return De.getById(r);
    },
    exportRoot: function (r, i) {
      r === void 0 && (r = {});
      var o = new dt(r),
        s,
        f;
      for (
        o.smoothChildTiming = pt(r.smoothChildTiming),
          De.remove(o),
          o._dp = 0,
          o._time = o._tTime = De._time,
          s = De._first;
        s;
      )
        ((f = s._next),
          (i || !(!s._dur && s instanceof Be && s.vars.onComplete === s._targets[0])) &&
            Jt(o, s, s._start - s._delay),
          (s = f));
      return (Jt(De, o, 0), o);
    },
    context: function (r, i) {
      return r ? new gp(r, i) : Oe;
    },
    matchMedia: function (r) {
      return new j0(r);
    },
    matchMediaRefresh: function () {
      return (
        ur.forEach(function (r) {
          var i = r.conditions,
            o,
            s;
          for (s in i) i[s] && ((i[s] = !1), (o = 1));
          o && r.revert();
        }) || Au()
      );
    },
    addEventListener: function (r, i) {
      var o = fo[r] || (fo[r] = []);
      ~o.indexOf(i) || o.push(i);
    },
    removeEventListener: function (r, i) {
      var o = fo[r],
        s = o && o.indexOf(i);
      s >= 0 && o.splice(s, 1);
    },
    utils: {
      wrap: m0,
      wrapYoyo: _0,
      distribute: Jd,
      random: ep,
      snap: bd,
      normalize: h0,
      getUnit: tt,
      clamp: f0,
      splitColor: lp,
      toArray: jt,
      selector: Lu,
      mapRange: np,
      pipe: d0,
      unitize: p0,
      interpolate: g0,
      shuffle: Zd,
    },
    install: Ud,
    effects: xu,
    ticker: Et,
    updateRoot: dt.updateRoot,
    plugins: St,
    globalTimeline: De,
    core: {
      PropTween: mt,
      globals: Vd,
      Tween: Be,
      Timeline: dt,
      Animation: $i,
      getCache: lr,
      _removeLinkedListItem: yo,
      reverting: function () {
        return qe;
      },
      context: function (r) {
        return (r && Oe && (Oe.data.push(r), (r._ctx = Oe)), Oe);
      },
      suppressOverwrites: function (r) {
        return ($u = r);
      },
    },
  };
ht("to,from,fromTo,delayedCall,set,killTweensOf", function (p) {
  return (_o[p] = Be[p]);
});
Et.add(dt.updateRoot);
Ar = _o.to({}, { duration: 0 });
var U0 = function (r, i) {
    for (var o = r._pt; o && o.p !== i && o.op !== i && o.fp !== i;) o = o._next;
    return o;
  },
  V0 = function (r, i) {
    var o = r._targets,
      s,
      f,
      c;
    for (s in i)
      for (f = o.length; f--;)
        ((c = r._ptLookup[f][s]),
          c &&
            (c = c.d) &&
            (c._pt && (c = U0(c, s)), c && c.modifier && c.modifier(i[s], r, o[f], s)));
  },
  Cu = function (r, i) {
    return {
      name: r,
      headless: 1,
      rawVars: 1,
      init: function (s, f, c) {
        c._onInit = function (d) {
          var m, _;
          if (
            (Xe(f) &&
              ((m = {}),
              ht(f, function (g) {
                return (m[g] = 1);
              }),
              (f = m)),
            i)
          ) {
            m = {};
            for (_ in f) m[_] = i(f[_]);
            f = m;
          }
          V0(d, f);
        };
      },
    };
  },
  gt =
    _o.registerPlugin(
      {
        name: "attr",
        init: function (r, i, o, s, f) {
          var c, d, m;
          this.tween = o;
          for (c in i)
            ((m = r.getAttribute(c) || ""),
              (d = this.add(r, "setAttribute", (m || 0) + "", i[c], s, f, 0, 0, c)),
              (d.op = c),
              (d.b = m),
              this._props.push(c));
        },
        render: function (r, i) {
          for (var o = i._pt; o;) (qe ? o.set(o.t, o.p, o.b, o) : o.r(r, o.d), (o = o._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (r, i) {
          for (var o = i.length; o--;) this.add(r, o, r[o] || 0, i[o], 0, 0, 0, 0, 0, 1);
        },
      },
      Cu("roundProps", Fu),
      Cu("modifiers"),
      Cu("snap", bd),
    ) || _o;
Be.version = dt.version = gt.version = "3.15.0";
jd = 1;
Qu() && Hr();
fe.Power0;
fe.Power1;
fe.Power2;
fe.Power3;
fe.Power4;
fe.Linear;
fe.Quad;
fe.Cubic;
fe.Quart;
fe.Quint;
fe.Strong;
fe.Elastic;
fe.Back;
fe.SteppedEase;
fe.Bounce;
fe.Sine;
fe.Expo;
fe.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var yd,
  Ln,
  Ur,
  ra,
  ir,
  wd,
  ia,
  B0 = function () {
    return typeof window < "u";
  },
  pn = {},
  rr = 180 / Math.PI,
  Vr = Math.PI / 180,
  Fr = Math.atan2,
  xd = 1e8,
  la = /([A-Z])/g,
  W0 = /(left|right|width|margin|padding|x)/i,
  $0 = /[\s,\(]\S/,
  bt = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
  ju = function (r, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * r) * 1e4) / 1e4 + i.u, i);
  },
  H0 = function (r, i) {
    return i.set(i.t, i.p, r === 1 ? i.e : Math.round((i.s + i.c * r) * 1e4) / 1e4 + i.u, i);
  },
  Q0 = function (r, i) {
    return i.set(i.t, i.p, r ? Math.round((i.s + i.c * r) * 1e4) / 1e4 + i.u : i.b, i);
  },
  Y0 = function (r, i) {
    return i.set(
      i.t,
      i.p,
      r === 1 ? i.e : r ? Math.round((i.s + i.c * r) * 1e4) / 1e4 + i.u : i.b,
      i,
    );
  },
  X0 = function (r, i) {
    var o = i.s + i.c * r;
    i.set(i.t, i.p, ~~(o + (o < 0 ? -0.5 : 0.5)) + i.u, i);
  },
  vp = function (r, i) {
    return i.set(i.t, i.p, r ? i.e : i.b, i);
  },
  yp = function (r, i) {
    return i.set(i.t, i.p, r !== 1 ? i.b : i.e, i);
  },
  G0 = function (r, i, o) {
    return (r.style[i] = o);
  },
  K0 = function (r, i, o) {
    return r.style.setProperty(i, o);
  },
  q0 = function (r, i, o) {
    return (r._gsap[i] = o);
  },
  Z0 = function (r, i, o) {
    return (r._gsap.scaleX = r._gsap.scaleY = o);
  },
  J0 = function (r, i, o, s, f) {
    var c = r._gsap;
    ((c.scaleX = c.scaleY = o), c.renderTransform(f, c));
  },
  b0 = function (r, i, o, s, f) {
    var c = r._gsap;
    ((c[i] = o), c.renderTransform(f, c));
  },
  Le = "transform",
  _t = Le + "Origin",
  e_ = function p(r, i) {
    var o = this,
      s = this.target,
      f = s.style,
      c = s._gsap;
    if (r in pn && f) {
      if (((this.tfm = this.tfm || {}), r !== "transform"))
        ((r = bt[r] || r),
          ~r.indexOf(",")
            ? r.split(",").forEach(function (d) {
                return (o.tfm[d] = cn(s, d));
              })
            : (this.tfm[r] = c.x ? c[r] : cn(s, r)),
          r === _t && (this.tfm.zOrigin = c.zOrigin));
      else
        return bt.transform.split(",").forEach(function (d) {
          return p.call(o, d, i);
        });
      if (this.props.indexOf(Le) >= 0) return;
      (c.svg && ((this.svgo = s.getAttribute("data-svg-origin")), this.props.push(_t, i, "")),
        (r = Le));
    }
    (f || i) && this.props.push(r, i, f[r]);
  },
  wp = function (r) {
    r.translate &&
      (r.removeProperty("translate"), r.removeProperty("scale"), r.removeProperty("rotate"));
  },
  t_ = function () {
    var r = this.props,
      i = this.target,
      o = i.style,
      s = i._gsap,
      f,
      c;
    for (f = 0; f < r.length; f += 3)
      r[f + 1]
        ? r[f + 1] === 2
          ? i[r[f]](r[f + 2])
          : (i[r[f]] = r[f + 2])
        : r[f + 2]
          ? (o[r[f]] = r[f + 2])
          : o.removeProperty(
              r[f].substr(0, 2) === "--" ? r[f] : r[f].replace(la, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (c in this.tfm) s[c] = this.tfm[c];
      (s.svg && (s.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")),
        (f = ia()),
        (!f || !f.isStart) &&
          !o[Le] &&
          (wp(o),
          s.zOrigin &&
            o[_t] &&
            ((o[_t] += " " + s.zOrigin + "px"), (s.zOrigin = 0), s.renderTransform()),
          (s.uncache = 1)));
    }
  },
  xp = function (r, i) {
    var o = { target: r, props: [], revert: t_, save: e_ };
    return (
      r._gsap || gt.core.getCache(r),
      i &&
        r.style &&
        r.nodeType &&
        i.split(",").forEach(function (s) {
          return o.save(s);
        }),
      o
    );
  },
  kp,
  Uu = function (r, i) {
    var o = Ln.createElementNS
      ? Ln.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), r)
      : Ln.createElement(r);
    return o && o.style ? o : Ln.createElement(r);
  },
  Ct = function p(r, i, o) {
    var s = getComputedStyle(r);
    return (
      s[i] ||
      s.getPropertyValue(i.replace(la, "-$1").toLowerCase()) ||
      s.getPropertyValue(i) ||
      (!o && p(r, Qr(i) || i, 1)) ||
      ""
    );
  },
  kd = "O,Moz,ms,Ms,Webkit".split(","),
  Qr = function (r, i, o) {
    var s = i || ir,
      f = s.style,
      c = 5;
    if (r in f && !o) return r;
    for (r = r.charAt(0).toUpperCase() + r.substr(1); c-- && !(kd[c] + r in f););
    return c < 0 ? null : (c === 3 ? "ms" : c >= 0 ? kd[c] : "") + r;
  },
  Vu = function () {
    B0() &&
      window.document &&
      ((yd = window),
      (Ln = yd.document),
      (Ur = Ln.documentElement),
      (ir = Uu("div") || { style: {} }),
      Uu("div"),
      (Le = Qr(Le)),
      (_t = Le + "Origin"),
      (ir.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
      (kp = !!Qr("perspective")),
      (ia = gt.core.reverting),
      (ra = 1));
  },
  Sd = function (r) {
    var i = r.ownerSVGElement,
      o = Uu("svg", (i && i.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
      s = r.cloneNode(!0),
      f;
    ((s.style.display = "block"), o.appendChild(s), Ur.appendChild(o));
    try {
      f = s.getBBox();
    } catch {}
    return (o.removeChild(s), Ur.removeChild(o), f);
  },
  Ed = function (r, i) {
    for (var o = i.length; o--;) if (r.hasAttribute(i[o])) return r.getAttribute(i[o]);
  },
  Sp = function (r) {
    var i, o;
    try {
      i = r.getBBox();
    } catch {
      ((i = Sd(r)), (o = 1));
    }
    return (
      (i && (i.width || i.height)) || o || (i = Sd(r)),
      i && !i.width && !i.x && !i.y
        ? {
            x: +Ed(r, ["x", "cx", "x1"]) || 0,
            y: +Ed(r, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : i
    );
  },
  Ep = function (r) {
    return !!(r.getCTM && (!r.parentNode || r.ownerSVGElement) && Sp(r));
  },
  Un = function (r, i) {
    if (i) {
      var o = r.style,
        s;
      (i in pn && i !== _t && (i = Le),
        o.removeProperty
          ? ((s = i.substr(0, 2)),
            (s === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
            o.removeProperty(s === "--" ? i : i.replace(la, "-$1").toLowerCase()))
          : o.removeAttribute(i));
    }
  },
  Fn = function (r, i, o, s, f, c) {
    var d = new mt(r._pt, i, o, 0, 1, c ? yp : vp);
    return ((r._pt = d), (d.b = s), (d.e = f), r._props.push(o), d);
  },
  Td = { deg: 1, rad: 1, turn: 1 },
  n_ = { grid: 1, flex: 1 },
  Vn = function p(r, i, o, s) {
    var f = parseFloat(o) || 0,
      c = (o + "").trim().substr((f + "").length) || "px",
      d = ir.style,
      m = W0.test(i),
      _ = r.tagName.toLowerCase() === "svg",
      g = (_ ? "client" : "offset") + (m ? "Width" : "Height"),
      x = 100,
      S = s === "px",
      T = s === "%",
      R,
      y,
      N,
      L;
    if (s === c || !f || Td[s] || Td[c]) return f;
    if (
      (c !== "px" && !S && (f = p(r, i, o, "px")),
      (L = r.getCTM && Ep(r)),
      (T || c === "%") && (pn[i] || ~i.indexOf("adius")))
    )
      return (
        (R = L ? r.getBBox()[m ? "width" : "height"] : r[g]),
        Ue(T ? (f / R) * x : (f / 100) * R)
      );
    if (
      ((d[m ? "width" : "height"] = x + (S ? c : s)),
      (y =
        (s !== "rem" && ~i.indexOf("adius")) || (s === "em" && r.appendChild && !_)
          ? r
          : r.parentNode),
      L && (y = (r.ownerSVGElement || {}).parentNode),
      (!y || y === Ln || !y.appendChild) && (y = Ln.body),
      (N = y._gsap),
      N && T && N.width && m && N.time === Et.time && !N.uncache)
    )
      return Ue((f / N.width) * x);
    if (T && (i === "height" || i === "width")) {
      var D = r.style[i];
      ((r.style[i] = x + s), (R = r[g]), D ? (r.style[i] = D) : Un(r, i));
    } else
      ((T || c === "%") && !n_[Ct(y, "display")] && (d.position = Ct(r, "position")),
        y === r && (d.position = "static"),
        y.appendChild(ir),
        (R = ir[g]),
        y.removeChild(ir),
        (d.position = "absolute"));
    return (
      m && T && ((N = lr(y)), (N.time = Et.time), (N.width = y[g])),
      Ue(S ? (R * f) / x : R && f ? (x / R) * f : 0)
    );
  },
  cn = function (r, i, o, s) {
    var f;
    return (
      ra || Vu(),
      i in bt && i !== "transform" && ((i = bt[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
      pn[i] && i !== "transform"
        ? ((f = Qi(r, s)),
          (f =
            i !== "transformOrigin"
              ? f[i]
              : f.svg
                ? f.origin
                : vo(Ct(r, _t)) + " " + f.zOrigin + "px"))
        : ((f = r.style[i]),
          (!f || f === "auto" || s || ~(f + "").indexOf("calc(")) &&
            (f = (go[i] && go[i](r, i, o)) || Ct(r, i) || Wd(r, i) || (i === "opacity" ? 1 : 0))),
      o && !~(f + "").trim().indexOf(" ") ? Vn(r, i, f, o) + o : f
    );
  },
  r_ = function (r, i, o, s) {
    if (!o || o === "none") {
      var f = Qr(i, r, 1),
        c = f && Ct(r, f, 1);
      c && c !== o ? ((i = f), (o = c)) : i === "borderColor" && (o = Ct(r, "borderTopColor"));
    }
    var d = new mt(this._pt, r.style, i, 0, 1, mp),
      m = 0,
      _ = 0,
      g,
      x,
      S,
      T,
      R,
      y,
      N,
      L,
      D,
      A,
      j,
      z;
    if (
      ((d.b = o),
      (d.e = s),
      (o += ""),
      (s += ""),
      s.substring(0, 6) === "var(--" && (s = Ct(r, s.substring(4, s.indexOf(")")))),
      s === "auto" &&
        ((y = r.style[i]), (r.style[i] = s), (s = Ct(r, i) || s), y ? (r.style[i] = y) : Un(r, i)),
      (g = [o, s]),
      sp(g),
      (o = g[0]),
      (s = g[1]),
      (S = o.match(Ir) || []),
      (z = s.match(Ir) || []),
      z.length)
    ) {
      for (; (x = Ir.exec(s));)
        ((N = x[0]),
          (D = s.substring(m, x.index)),
          R ? (R = (R + 1) % 5) : (D.substr(-5) === "rgba(" || D.substr(-5) === "hsla(") && (R = 1),
          N !== (y = S[_++] || "") &&
            ((T = parseFloat(y) || 0),
            (j = y.substr((T + "").length)),
            N.charAt(1) === "=" && (N = jr(T, N) + j),
            (L = parseFloat(N)),
            (A = N.substr((L + "").length)),
            (m = Ir.lastIndex - A.length),
            A || ((A = A || Pt.units[i] || j), m === s.length && ((s += A), (d.e += A))),
            j !== A && (T = Vn(r, i, y, A) || 0),
            (d._pt = {
              _next: d._pt,
              p: D || _ === 1 ? D : ",",
              s: T,
              c: L - T,
              m: (R && R < 4) || i === "zIndex" ? Math.round : 0,
            })));
      d.c = m < s.length ? s.substring(m, s.length) : "";
    } else d.r = i === "display" && s === "none" ? yp : vp;
    return (Ad.test(s) && (d.e = 0), (this._pt = d), d);
  },
  Cd = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  i_ = function (r) {
    var i = r.split(" "),
      o = i[0],
      s = i[1] || "50%";
    return (
      (o === "top" || o === "bottom" || s === "left" || s === "right") &&
        ((r = o), (o = s), (s = r)),
      (i[0] = Cd[o] || o),
      (i[1] = Cd[s] || s),
      i.join(" ")
    );
  },
  l_ = function (r, i) {
    if (i.tween && i.tween._time === i.tween._dur) {
      var o = i.t,
        s = o.style,
        f = i.u,
        c = o._gsap,
        d,
        m,
        _;
      if (f === "all" || f === !0) ((s.cssText = ""), (m = 1));
      else
        for (f = f.split(","), _ = f.length; --_ > -1;)
          ((d = f[_]), pn[d] && ((m = 1), (d = d === "transformOrigin" ? _t : Le)), Un(o, d));
      m &&
        (Un(o, Le),
        c &&
          (c.svg && o.removeAttribute("transform"),
          (s.scale = s.rotate = s.translate = "none"),
          Qi(o, 1),
          (c.uncache = 1),
          wp(s)));
    }
  },
  go = {
    clearProps: function (r, i, o, s, f) {
      if (f.data !== "isFromStart") {
        var c = (r._pt = new mt(r._pt, i, o, 0, 0, l_));
        return ((c.u = s), (c.pr = -10), (c.tween = f), r._props.push(o), 1);
      }
    },
  },
  Hi = [1, 0, 0, 1, 0, 0],
  Tp = {},
  Cp = function (r) {
    return r === "matrix(1, 0, 0, 1, 0, 0)" || r === "none" || !r;
  },
  Pd = function (r) {
    var i = Ct(r, Le);
    return Cp(i) ? Hi : i.substr(7).match(Id).map(Ue);
  },
  oa = function (r, i) {
    var o = r._gsap || lr(r),
      s = r.style,
      f = Pd(r),
      c,
      d,
      m,
      _;
    return o.svg && r.getAttribute("transform")
      ? ((m = r.transform.baseVal.consolidate().matrix),
        (f = [m.a, m.b, m.c, m.d, m.e, m.f]),
        f.join(",") === "1,0,0,1,0,0" ? Hi : f)
      : (f === Hi &&
          !r.offsetParent &&
          r !== Ur &&
          !o.svg &&
          ((m = s.display),
          (s.display = "block"),
          (c = r.parentNode),
          (!c || (!r.offsetParent && !r.getBoundingClientRect().width)) &&
            ((_ = 1), (d = r.nextElementSibling), Ur.appendChild(r)),
          (f = Pd(r)),
          m ? (s.display = m) : Un(r, "display"),
          _ && (d ? c.insertBefore(r, d) : c ? c.appendChild(r) : Ur.removeChild(r))),
        i && f.length > 6 ? [f[0], f[1], f[4], f[5], f[12], f[13]] : f);
  },
  Bu = function (r, i, o, s, f, c) {
    var d = r._gsap,
      m = f || oa(r, !0),
      _ = d.xOrigin || 0,
      g = d.yOrigin || 0,
      x = d.xOffset || 0,
      S = d.yOffset || 0,
      T = m[0],
      R = m[1],
      y = m[2],
      N = m[3],
      L = m[4],
      D = m[5],
      A = i.split(" "),
      j = parseFloat(A[0]) || 0,
      z = parseFloat(A[1]) || 0,
      Q,
      V,
      H,
      W;
    (o
      ? m !== Hi &&
        (V = T * N - R * y) &&
        ((H = j * (N / V) + z * (-y / V) + (y * D - N * L) / V),
        (W = j * (-R / V) + z * (T / V) - (T * D - R * L) / V),
        (j = H),
        (z = W))
      : ((Q = Sp(r)),
        (j = Q.x + (~A[0].indexOf("%") ? (j / 100) * Q.width : j)),
        (z = Q.y + (~(A[1] || A[0]).indexOf("%") ? (z / 100) * Q.height : z))),
      s || (s !== !1 && d.smooth)
        ? ((L = j - _),
          (D = z - g),
          (d.xOffset = x + (L * T + D * y) - L),
          (d.yOffset = S + (L * R + D * N) - D))
        : (d.xOffset = d.yOffset = 0),
      (d.xOrigin = j),
      (d.yOrigin = z),
      (d.smooth = !!s),
      (d.origin = i),
      (d.originIsAbsolute = !!o),
      (r.style[_t] = "0px 0px"),
      c &&
        (Fn(c, d, "xOrigin", _, j),
        Fn(c, d, "yOrigin", g, z),
        Fn(c, d, "xOffset", x, d.xOffset),
        Fn(c, d, "yOffset", S, d.yOffset)),
      r.setAttribute("data-svg-origin", j + " " + z));
  },
  Qi = function (r, i) {
    var o = r._gsap || new ap(r);
    if ("x" in o && !i && !o.uncache) return o;
    var s = r.style,
      f = o.scaleX < 0,
      c = "px",
      d = "deg",
      m = getComputedStyle(r),
      _ = Ct(r, _t) || "0",
      g,
      x,
      S,
      T,
      R,
      y,
      N,
      L,
      D,
      A,
      j,
      z,
      Q,
      V,
      H,
      W,
      ee,
      ge,
      pe,
      ue,
      ce,
      ve,
      de,
      le,
      $,
      b,
      Y,
      E,
      M,
      oe,
      re,
      se;
    return (
      (g = x = S = y = N = L = D = A = j = 0),
      (T = R = 1),
      (o.svg = !!(r.getCTM && Ep(r))),
      m.translate &&
        ((m.translate !== "none" || m.scale !== "none" || m.rotate !== "none") &&
          (s[Le] =
            (m.translate !== "none"
              ? "translate3d(" + (m.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") "
              : "") +
            (m.rotate !== "none" ? "rotate(" + m.rotate + ") " : "") +
            (m.scale !== "none" ? "scale(" + m.scale.split(" ").join(",") + ") " : "") +
            (m[Le] !== "none" ? m[Le] : "")),
        (s.scale = s.rotate = s.translate = "none")),
      (V = oa(r, o.svg)),
      o.svg &&
        (o.uncache
          ? (($ = r.getBBox()), (_ = o.xOrigin - $.x + "px " + (o.yOrigin - $.y) + "px"), (le = ""))
          : (le = !i && r.getAttribute("data-svg-origin")),
        Bu(r, le || _, !!le || o.originIsAbsolute, o.smooth !== !1, V)),
      (z = o.xOrigin || 0),
      (Q = o.yOrigin || 0),
      V !== Hi &&
        ((ge = V[0]),
        (pe = V[1]),
        (ue = V[2]),
        (ce = V[3]),
        (g = ve = V[4]),
        (x = de = V[5]),
        V.length === 6
          ? ((T = Math.sqrt(ge * ge + pe * pe)),
            (R = Math.sqrt(ce * ce + ue * ue)),
            (y = ge || pe ? Fr(pe, ge) * rr : 0),
            (D = ue || ce ? Fr(ue, ce) * rr + y : 0),
            D && (R *= Math.abs(Math.cos(D * Vr))),
            o.svg && ((g -= z - (z * ge + Q * ue)), (x -= Q - (z * pe + Q * ce))))
          : ((se = V[6]),
            (oe = V[7]),
            (Y = V[8]),
            (E = V[9]),
            (M = V[10]),
            (re = V[11]),
            (g = V[12]),
            (x = V[13]),
            (S = V[14]),
            (H = Fr(se, M)),
            (N = H * rr),
            H &&
              ((W = Math.cos(-H)),
              (ee = Math.sin(-H)),
              (le = ve * W + Y * ee),
              ($ = de * W + E * ee),
              (b = se * W + M * ee),
              (Y = ve * -ee + Y * W),
              (E = de * -ee + E * W),
              (M = se * -ee + M * W),
              (re = oe * -ee + re * W),
              (ve = le),
              (de = $),
              (se = b)),
            (H = Fr(-ue, M)),
            (L = H * rr),
            H &&
              ((W = Math.cos(-H)),
              (ee = Math.sin(-H)),
              (le = ge * W - Y * ee),
              ($ = pe * W - E * ee),
              (b = ue * W - M * ee),
              (re = ce * ee + re * W),
              (ge = le),
              (pe = $),
              (ue = b)),
            (H = Fr(pe, ge)),
            (y = H * rr),
            H &&
              ((W = Math.cos(H)),
              (ee = Math.sin(H)),
              (le = ge * W + pe * ee),
              ($ = ve * W + de * ee),
              (pe = pe * W - ge * ee),
              (de = de * W - ve * ee),
              (ge = le),
              (ve = $)),
            N && Math.abs(N) + Math.abs(y) > 359.9 && ((N = y = 0), (L = 180 - L)),
            (T = Ue(Math.sqrt(ge * ge + pe * pe + ue * ue))),
            (R = Ue(Math.sqrt(de * de + se * se))),
            (H = Fr(ve, de)),
            (D = Math.abs(H) > 2e-4 ? H * rr : 0),
            (j = re ? 1 / (re < 0 ? -re : re) : 0)),
        o.svg &&
          ((le = r.getAttribute("transform")),
          (o.forceCSS = r.setAttribute("transform", "") || !Cp(Ct(r, Le))),
          le && r.setAttribute("transform", le))),
      Math.abs(D) > 90 &&
        Math.abs(D) < 270 &&
        (f
          ? ((T *= -1), (D += y <= 0 ? 180 : -180), (y += y <= 0 ? 180 : -180))
          : ((R *= -1), (D += D <= 0 ? 180 : -180))),
      (i = i || o.uncache),
      (o.x =
        g -
        ((o.xPercent =
          g && ((!i && o.xPercent) || (Math.round(r.offsetWidth / 2) === Math.round(-g) ? -50 : 0)))
          ? (r.offsetWidth * o.xPercent) / 100
          : 0) +
        c),
      (o.y =
        x -
        ((o.yPercent =
          x &&
          ((!i && o.yPercent) || (Math.round(r.offsetHeight / 2) === Math.round(-x) ? -50 : 0)))
          ? (r.offsetHeight * o.yPercent) / 100
          : 0) +
        c),
      (o.z = S + c),
      (o.scaleX = Ue(T)),
      (o.scaleY = Ue(R)),
      (o.rotation = Ue(y) + d),
      (o.rotationX = Ue(N) + d),
      (o.rotationY = Ue(L) + d),
      (o.skewX = D + d),
      (o.skewY = A + d),
      (o.transformPerspective = j + c),
      (o.zOrigin = parseFloat(_.split(" ")[2]) || (!i && o.zOrigin) || 0) && (s[_t] = vo(_)),
      (o.xOffset = o.yOffset = 0),
      (o.force3D = Pt.force3D),
      (o.renderTransform = o.svg ? s_ : kp ? Pp : o_),
      (o.uncache = 0),
      o
    );
  },
  vo = function (r) {
    return (r = r.split(" "))[0] + " " + r[1];
  },
  Pu = function (r, i, o) {
    var s = tt(i);
    return Ue(parseFloat(i) + parseFloat(Vn(r, "x", o + "px", s))) + s;
  },
  o_ = function (r, i) {
    ((i.z = "0px"), (i.rotationY = i.rotationX = "0deg"), (i.force3D = 0), Pp(r, i));
  },
  tr = "0deg",
  Mi = "0px",
  nr = ") ",
  Pp = function (r, i) {
    var o = i || this,
      s = o.xPercent,
      f = o.yPercent,
      c = o.x,
      d = o.y,
      m = o.z,
      _ = o.rotation,
      g = o.rotationY,
      x = o.rotationX,
      S = o.skewX,
      T = o.skewY,
      R = o.scaleX,
      y = o.scaleY,
      N = o.transformPerspective,
      L = o.force3D,
      D = o.target,
      A = o.zOrigin,
      j = "",
      z = (L === "auto" && r && r !== 1) || L === !0;
    if (A && (x !== tr || g !== tr)) {
      var Q = parseFloat(g) * Vr,
        V = Math.sin(Q),
        H = Math.cos(Q),
        W;
      ((Q = parseFloat(x) * Vr),
        (W = Math.cos(Q)),
        (c = Pu(D, c, V * W * -A)),
        (d = Pu(D, d, -Math.sin(Q) * -A)),
        (m = Pu(D, m, H * W * -A + A)));
    }
    (N !== Mi && (j += "perspective(" + N + nr),
      (s || f) && (j += "translate(" + s + "%, " + f + "%) "),
      (z || c !== Mi || d !== Mi || m !== Mi) &&
        (j +=
          m !== Mi || z
            ? "translate3d(" + c + ", " + d + ", " + m + ") "
            : "translate(" + c + ", " + d + nr),
      _ !== tr && (j += "rotate(" + _ + nr),
      g !== tr && (j += "rotateY(" + g + nr),
      x !== tr && (j += "rotateX(" + x + nr),
      (S !== tr || T !== tr) && (j += "skew(" + S + ", " + T + nr),
      (R !== 1 || y !== 1) && (j += "scale(" + R + ", " + y + nr),
      (D.style[Le] = j || "translate(0, 0)"));
  },
  s_ = function (r, i) {
    var o = i || this,
      s = o.xPercent,
      f = o.yPercent,
      c = o.x,
      d = o.y,
      m = o.rotation,
      _ = o.skewX,
      g = o.skewY,
      x = o.scaleX,
      S = o.scaleY,
      T = o.target,
      R = o.xOrigin,
      y = o.yOrigin,
      N = o.xOffset,
      L = o.yOffset,
      D = o.forceCSS,
      A = parseFloat(c),
      j = parseFloat(d),
      z,
      Q,
      V,
      H,
      W;
    ((m = parseFloat(m)),
      (_ = parseFloat(_)),
      (g = parseFloat(g)),
      g && ((g = parseFloat(g)), (_ += g), (m += g)),
      m || _
        ? ((m *= Vr),
          (_ *= Vr),
          (z = Math.cos(m) * x),
          (Q = Math.sin(m) * x),
          (V = Math.sin(m - _) * -S),
          (H = Math.cos(m - _) * S),
          _ &&
            ((g *= Vr),
            (W = Math.tan(_ - g)),
            (W = Math.sqrt(1 + W * W)),
            (V *= W),
            (H *= W),
            g && ((W = Math.tan(g)), (W = Math.sqrt(1 + W * W)), (z *= W), (Q *= W))),
          (z = Ue(z)),
          (Q = Ue(Q)),
          (V = Ue(V)),
          (H = Ue(H)))
        : ((z = x), (H = S), (Q = V = 0)),
      ((A && !~(c + "").indexOf("px")) || (j && !~(d + "").indexOf("px"))) &&
        ((A = Vn(T, "x", c, "px")), (j = Vn(T, "y", d, "px"))),
      (R || y || N || L) &&
        ((A = Ue(A + R - (R * z + y * V) + N)), (j = Ue(j + y - (R * Q + y * H) + L))),
      (s || f) &&
        ((W = T.getBBox()), (A = Ue(A + (s / 100) * W.width)), (j = Ue(j + (f / 100) * W.height))),
      (W = "matrix(" + z + "," + Q + "," + V + "," + H + "," + A + "," + j + ")"),
      T.setAttribute("transform", W),
      D && (T.style[Le] = W));
  },
  u_ = function (r, i, o, s, f) {
    var c = 360,
      d = Xe(f),
      m = parseFloat(f) * (d && ~f.indexOf("rad") ? rr : 1),
      _ = m - s,
      g = s + _ + "deg",
      x,
      S;
    return (
      d &&
        ((x = f.split("_")[1]),
        x === "short" && ((_ %= c), _ !== _ % (c / 2) && (_ += _ < 0 ? c : -c)),
        x === "cw" && _ < 0
          ? (_ = ((_ + c * xd) % c) - ~~(_ / c) * c)
          : x === "ccw" && _ > 0 && (_ = ((_ - c * xd) % c) - ~~(_ / c) * c)),
      (r._pt = S = new mt(r._pt, i, o, s, _, H0)),
      (S.e = g),
      (S.u = "deg"),
      r._props.push(o),
      S
    );
  },
  Nd = function (r, i) {
    for (var o in i) r[o] = i[o];
    return r;
  },
  a_ = function (r, i, o) {
    var s = Nd({}, o._gsap),
      f = "perspective,force3D,transformOrigin,svgOrigin",
      c = o.style,
      d,
      m,
      _,
      g,
      x,
      S,
      T,
      R;
    s.svg
      ? ((_ = o.getAttribute("transform")),
        o.setAttribute("transform", ""),
        (c[Le] = i),
        (d = Qi(o, 1)),
        Un(o, Le),
        o.setAttribute("transform", _))
      : ((_ = getComputedStyle(o)[Le]), (c[Le] = i), (d = Qi(o, 1)), (c[Le] = _));
    for (m in pn)
      ((_ = s[m]),
        (g = d[m]),
        _ !== g &&
          f.indexOf(m) < 0 &&
          ((T = tt(_)),
          (R = tt(g)),
          (x = T !== R ? Vn(o, m, _, R) : parseFloat(_)),
          (S = parseFloat(g)),
          (r._pt = new mt(r._pt, d, m, x, S - x, ju)),
          (r._pt.u = R || 0),
          r._props.push(m)));
    Nd(d, s);
  };
ht("padding,margin,Width,Radius", function (p, r) {
  var i = "Top",
    o = "Right",
    s = "Bottom",
    f = "Left",
    c = (r < 3 ? [i, o, s, f] : [i + f, i + o, s + o, s + f]).map(function (d) {
      return r < 2 ? p + d : "border" + d + p;
    });
  go[r > 1 ? "border" + p : p] = function (d, m, _, g, x) {
    var S, T;
    if (arguments.length < 4)
      return (
        (S = c.map(function (R) {
          return cn(d, R, _);
        })),
        (T = S.join(" ")),
        T.split(S[0]).length === 5 ? S[0] : T
      );
    ((S = (g + "").split(" ")),
      (T = {}),
      c.forEach(function (R, y) {
        return (T[R] = S[y] = S[y] || S[((y - 1) / 2) | 0]);
      }),
      d.init(m, T, x));
  };
});
var Np = {
  name: "css",
  register: Vu,
  targetTest: function (r) {
    return r.style && r.nodeType;
  },
  init: function (r, i, o, s, f) {
    var c = this._props,
      d = r.style,
      m = o.vars.startAt,
      _,
      g,
      x,
      S,
      T,
      R,
      y,
      N,
      L,
      D,
      A,
      j,
      z,
      Q,
      V,
      H,
      W;
    (ra || Vu(), (this.styles = this.styles || xp(r)), (H = this.styles.props), (this.tween = o));
    for (y in i)
      if (y !== "autoRound" && ((g = i[y]), !(St[y] && fp(y, i, o, s, r, f)))) {
        if (
          ((T = typeof g),
          (R = go[y]),
          T === "function" && ((g = g.call(o, s, r, f)), (T = typeof g)),
          T === "string" && ~g.indexOf("random(") && (g = Bi(g)),
          R)
        )
          R(this, r, y, g, o) && (V = 1);
        else if (y.substr(0, 2) === "--")
          ((_ = (getComputedStyle(r).getPropertyValue(y) + "").trim()),
            (g += ""),
            (An.lastIndex = 0),
            An.test(_) ||
              ((N = tt(_)), (L = tt(g)), L ? N !== L && (_ = Vn(r, y, _, L) + L) : N && (g += N)),
            this.add(d, "setProperty", _, g, s, f, 0, 0, y),
            c.push(y),
            H.push(y, 0, d[y]));
        else if (T !== "undefined") {
          if (
            (m && y in m
              ? ((_ = typeof m[y] == "function" ? m[y].call(o, s, r, f) : m[y]),
                Xe(_) && ~_.indexOf("random(") && (_ = Bi(_)),
                tt(_ + "") || _ === "auto" || (_ += Pt.units[y] || tt(cn(r, y)) || ""),
                (_ + "").charAt(1) === "=" && (_ = cn(r, y)))
              : (_ = cn(r, y)),
            (S = parseFloat(_)),
            (D = T === "string" && g.charAt(1) === "=" && g.substr(0, 2)),
            D && (g = g.substr(2)),
            (x = parseFloat(g)),
            y in bt &&
              (y === "autoAlpha" &&
                (S === 1 && cn(r, "visibility") === "hidden" && x && (S = 0),
                H.push("visibility", 0, d.visibility),
                Fn(this, d, "visibility", S ? "inherit" : "hidden", x ? "inherit" : "hidden", !x)),
              y !== "scale" &&
                y !== "transform" &&
                ((y = bt[y]), ~y.indexOf(",") && (y = y.split(",")[0]))),
            (A = y in pn),
            A)
          ) {
            if ((this.styles.save(y), (W = g), T === "string" && g.substring(0, 6) === "var(--")) {
              if (((g = Ct(r, g.substring(4, g.indexOf(")")))), g.substring(0, 5) === "calc(")) {
                var ee = r.style.perspective;
                ((r.style.perspective = g),
                  (g = Ct(r, "perspective")),
                  ee ? (r.style.perspective = ee) : Un(r, "perspective"));
              }
              x = parseFloat(g);
            }
            if (
              (j ||
                ((z = r._gsap),
                (z.renderTransform && !i.parseTransform) || Qi(r, i.parseTransform),
                (Q = i.smoothOrigin !== !1 && z.smooth),
                (j = this._pt = new mt(this._pt, d, Le, 0, 1, z.renderTransform, z, 0, -1)),
                (j.dep = 1)),
              y === "scale")
            )
              ((this._pt = new mt(
                this._pt,
                z,
                "scaleY",
                z.scaleY,
                (D ? jr(z.scaleY, D + x) : x) - z.scaleY || 0,
                ju,
              )),
                (this._pt.u = 0),
                c.push("scaleY", y),
                (y += "X"));
            else if (y === "transformOrigin") {
              (H.push(_t, 0, d[_t]),
                (g = i_(g)),
                z.svg
                  ? Bu(r, g, 0, Q, 0, this)
                  : ((L = parseFloat(g.split(" ")[2]) || 0),
                    L !== z.zOrigin && Fn(this, z, "zOrigin", z.zOrigin, L),
                    Fn(this, d, y, vo(_), vo(g))));
              continue;
            } else if (y === "svgOrigin") {
              Bu(r, g, 1, Q, 0, this);
              continue;
            } else if (y in Tp) {
              u_(this, z, y, S, D ? jr(S, D + g) : g);
              continue;
            } else if (y === "smoothOrigin") {
              Fn(this, z, "smooth", z.smooth, g);
              continue;
            } else if (y === "force3D") {
              z[y] = g;
              continue;
            } else if (y === "transform") {
              a_(this, g, r);
              continue;
            }
          } else y in d || (y = Qr(y) || y);
          if (A || ((x || x === 0) && (S || S === 0) && !$0.test(g) && y in d))
            ((N = (_ + "").substr((S + "").length)),
              x || (x = 0),
              (L = tt(g) || (y in Pt.units ? Pt.units[y] : N)),
              N !== L && (S = Vn(r, y, _, L)),
              (this._pt = new mt(
                this._pt,
                A ? z : d,
                y,
                S,
                (D ? jr(S, D + x) : x) - S,
                !A && (L === "px" || y === "zIndex") && i.autoRound !== !1 ? X0 : ju,
              )),
              (this._pt.u = L || 0),
              A && W !== g
                ? ((this._pt.b = _), (this._pt.e = W), (this._pt.r = Y0))
                : N !== L && L !== "%" && ((this._pt.b = _), (this._pt.r = Q0)));
          else if (y in d) r_.call(this, r, y, _, D ? D + g : g);
          else if (y in r) this.add(r, y, _ || r[y], D ? D + g : g, s, f);
          else if (y !== "parseTransform") {
            Xu(y, g);
            continue;
          }
          (A ||
            (y in d
              ? H.push(y, 0, d[y])
              : typeof r[y] == "function"
                ? H.push(y, 2, r[y]())
                : H.push(y, 1, _ || r[y])),
            c.push(y));
        }
      }
    V && _p(this);
  },
  render: function (r, i) {
    if (i.tween._time || !ia()) for (var o = i._pt; o;) (o.r(r, o.d), (o = o._next));
    else i.styles.revert();
  },
  get: cn,
  aliases: bt,
  getSetter: function (r, i, o) {
    var s = bt[i];
    return (
      s && s.indexOf(",") < 0 && (i = s),
      i in pn && i !== _t && (r._gsap.x || cn(r, "x"))
        ? o && wd === o
          ? i === "scale"
            ? Z0
            : q0
          : (wd = o || {}) && (i === "scale" ? J0 : b0)
        : r.style && !Hu(r.style[i])
          ? G0
          : ~i.indexOf("-")
            ? K0
            : ta(r, i)
    );
  },
  core: { _removeProperty: Un, _getMatrix: oa },
};
gt.utils.checkPrefix = Qr;
gt.core.getStyleSaver = xp;
(function (p, r, i, o) {
  var s = ht(p + "," + r + "," + i, function (f) {
    pn[f] = 1;
  });
  (ht(r, function (f) {
    ((Pt.units[f] = "deg"), (Tp[f] = 1));
  }),
    (bt[s[13]] = p + "," + r),
    ht(o, function (f) {
      var c = f.split(":");
      bt[c[1]] = s[c[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
ht("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (p) {
  Pt.units[p] = "px";
});
gt.registerPlugin(Np);
var Op = gt.registerPlugin(Np) || gt;
Op.core.Tween;
const f_ =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260510_060007_60275ce7-030c-4668-a160-8f364ec537d3.mp4",
  Od = 0.06,
  Rd = 28;
function c_({ className: p = "" }) {
  const r = ct.useRef(null),
    i = ct.useRef(null),
    o = ct.useRef({ x: 0, y: 0 }),
    s = ct.useRef({ x: 0, y: 0 }),
    f = ct.useRef(null);
  return (
    ct.useEffect(() => {
      const c = r.current;
      if (!c) return;
      const d = (_) => {
          const g = (_.clientX / window.innerWidth - 0.5) * 2,
            x = (_.clientY / window.innerHeight - 0.5) * 2;
          ((o.current.x = g * Rd), (o.current.y = x * Rd));
        },
        m = () => {
          ((s.current.x += (o.current.x - s.current.x) * Od),
            (s.current.y += (o.current.y - s.current.y) * Od),
            Op.set(c, { x: s.current.x, y: s.current.y }),
            (f.current = requestAnimationFrame(m)));
        };
      return (
        window.addEventListener("mousemove", d, { passive: !0 }),
        (f.current = requestAnimationFrame(m)),
        () => {
          (window.removeEventListener("mousemove", d),
            f.current !== null && cancelAnimationFrame(f.current));
        }
      );
    }, []),
    ct.useEffect(() => {
      const c = i.current;
      if (!c) return;
      const d = () => {
        c.playbackRate = 1.25;
      };
      return (
        c.addEventListener("loadedmetadata", d),
        c.readyState >= 1 && d(),
        () => c.removeEventListener("loadedmetadata", d)
      );
    }, []),
    Z.jsx("div", {
      ref: r,
      className: `hero-video-wrap absolute inset-[-4%] z-0 ${p}`,
      "aria-hidden": !0,
      children: Z.jsx("video", {
        ref: i,
        className: "absolute inset-0 h-full w-full object-cover",
        src: f_,
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
      }),
    })
  );
}
function Rp(p) {
  return p
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
function oo(p) {
  return `#${Rp(p)}`;
}
function so(p, r, i) {
  p.preventDefault();
  const o = document.getElementById(r);
  o &&
    (o.scrollIntoView({ behavior: "smooth", block: "start" }),
    window.history.replaceState(null, "", `#${r}`));
}
const d_ = ["JOURNEY", "BENEFITS", "JOURNAL", "GUIDEBOOK"];
function p_() {
  return (
    ct.useEffect(() => {
      Hm();
    }, []),
    Z.jsxs("div", {
      className: "relative min-h-screen overflow-x-hidden bg-black text-white",
      style: { fontFamily: "'Inter', sans-serif" },
      children: [
        Z.jsxs("section", {
          id: "journey",
          className: "relative min-h-screen",
          children: [
            Z.jsx(c_, {}),
            Z.jsxs("header", {
              className: "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-10 py-8",
              children: [
                Z.jsxs("a", {
                  href: oo("journey"),
                  onClick: (p) => so(p, "journey"),
                  className: "text-[17px] font-semibold tracking-tight",
                  children: [
                    "Wanderful",
                    Z.jsx("sup", { className: "ml-0.5 text-[0.55em]", children: "TM" }),
                  ],
                }),
                Z.jsx("nav", {
                  className:
                    "liquid-glass hidden items-center gap-1 rounded-full px-2 py-2 md:flex",
                  "aria-label": "Primary",
                  children: d_.map((p) =>
                    Z.jsx(
                      "a",
                      {
                        href: oo(p),
                        onClick: (r) => so(r, Rp(p)),
                        className:
                          "rounded-full px-4 py-1.5 font-body text-[11px] font-medium tracking-[0.12em] text-white/90 transition-colors duration-200 hover:text-white",
                        children: p,
                      },
                      p,
                    ),
                  ),
                }),
                Z.jsx("a", {
                  href: oo("roaming"),
                  onClick: (p) => so(p, "roaming"),
                  className:
                    "liquid-glass hidden rounded-full px-5 py-2.5 font-body text-[11px] font-medium tracking-[0.12em] text-white/90 transition-colors hover:text-white md:inline-flex",
                  children: "GET ROAMING",
                }),
                Z.jsx("a", {
                  href: oo("roaming"),
                  onClick: (p) => so(p, "roaming"),
                  className:
                    "liquid-glass rounded-full px-5 py-2.5 font-body text-[11px] font-medium tracking-[0.12em] text-white/90 md:hidden",
                  children: "GET ROAMING",
                }),
              ],
            }),
            Z.jsxs("div", {
              className:
                "pointer-events-none fixed inset-x-0 top-[120px] z-20 flex flex-col items-center text-center",
              children: [
                Z.jsx("h1", {
                  className:
                    "hero-fade-in font-hero text-[clamp(40px,5.4vw,72px)] font-normal leading-[1.1] tracking-[-0.02em] text-white",
                  children: "Venture without edges.",
                }),
                Z.jsx("p", {
                  className:
                    "hero-fade-in font-hero text-[clamp(40px,5.4vw,72px)] font-normal leading-[1.1] tracking-[-0.02em]",
                  style: { color: "rgba(255,255,255,0.55)" },
                  children: "Uncover with keen instinct.",
                }),
              ],
            }),
            Z.jsxs("div", {
              className:
                "pointer-events-auto fixed inset-x-0 bottom-14 z-20 flex flex-col items-center gap-6 px-6",
              children: [
                Z.jsxs("p", {
                  className:
                    "hero-fade-in-delay max-w-[620px] text-center text-[15px] leading-relaxed",
                  children: [
                    Z.jsx("span", {
                      className: "text-white",
                      children:
                        "Our smart itineraries shape around you — your rhythm, your vibe, your hunger for adventure.",
                    }),
                    Z.jsxs("span", {
                      className: "text-white/55",
                      children: [" ", "Each getaway is tailored, seamless, and wholly yours."],
                    }),
                  ],
                }),
                Z.jsx("button", {
                  type: "button",
                  className:
                    "hero-fade-in-delay rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-black transition hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(255,255,255,0.2)] active:scale-[0.97]",
                  children: "Plan my escape today",
                }),
                Z.jsxs("div", {
                  className: "hero-fade-in-delay flex items-center gap-2",
                  children: [
                    Z.jsx(Vm, { size: 13, strokeWidth: 1.5, className: "text-white/70" }),
                    Z.jsx("span", {
                      className:
                        "font-body text-[11px] font-medium tracking-[0.14em] text-white/70",
                      children: "SECURE BY DESIGN. ZERO DATA LEAKS.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        Z.jsxs("section", {
          id: "benefits",
          className: "scroll-mt-24 border-t border-white/10 bg-black px-6 py-20 md:px-12",
          children: [
            Z.jsx("h2", {
              className: "font-body text-xs uppercase tracking-[0.2em] text-white/50",
              children: "Benefits",
            }),
            Z.jsx("p", {
              className: "mt-4 max-w-2xl text-lg text-white/80",
              children:
                "Roaming plans adapt to your calendar, budget, and preferred pace—no generic packages.",
            }),
          ],
        }),
        Z.jsxs("section", {
          id: "journal",
          className: "scroll-mt-24 border-t border-white/10 bg-black px-6 py-20 md:px-12",
          children: [
            Z.jsx("h2", {
              className: "font-body text-xs uppercase tracking-[0.2em] text-white/50",
              children: "Journal",
            }),
            Z.jsx("p", {
              className: "mt-4 max-w-2xl text-white/70",
              children:
                "Field notes from Patagonia, Kyoto, and the Atacama—written by travelers, not algorithms alone.",
            }),
          ],
        }),
        Z.jsxs("section", {
          id: "guidebook",
          className: "scroll-mt-24 border-t border-white/10 bg-black px-6 py-20 md:px-12",
          children: [
            Z.jsx("h2", {
              className: "font-body text-xs uppercase tracking-[0.2em] text-white/50",
              children: "Guidebook",
            }),
            Z.jsx("p", {
              className: "mt-4 max-w-2xl text-white/70",
              children:
                "Offline maps, phrase cards, and local hosts vetted by the Wanderful network.",
            }),
          ],
        }),
        Z.jsxs("section", {
          id: "roaming",
          className:
            "scroll-mt-24 border-t border-white/10 bg-black px-6 py-24 text-center md:px-12",
          children: [
            Z.jsx("h2", { className: "text-3xl font-semibold", children: "Get roaming" }),
            Z.jsx("p", {
              className: "mx-auto mt-4 max-w-md text-white/60",
              children: "Activate your eSIM in under two minutes.",
            }),
            Z.jsx("button", {
              type: "button",
              className:
                "mt-8 rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-black",
              children: "Start now",
            }),
          ],
        }),
        Z.jsx(Bm, { theme: "dark", brand: "Wanderful" }),
      ],
    })
  );
}
Fm.createRoot(document.getElementById("root")).render(
  Z.jsx(ct.StrictMode, { children: Z.jsx(p_, {}) }),
);
