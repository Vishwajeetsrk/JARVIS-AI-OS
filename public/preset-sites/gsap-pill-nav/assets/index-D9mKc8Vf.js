(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const f of o)
      if (f.type === "childList")
        for (const c of f.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(o) {
    const f = {};
    return (
      o.integrity && (f.integrity = o.integrity),
      o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const f = i(o);
    fetch(o.href, f);
  }
})();
var mu = { exports: {} },
  ji = {},
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
 */ var id;
function Rm() {
  if (id) return ae;
  id = 1;
  var p = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function k(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (x && E[x]) || E["@@iterator"]), typeof E == "function" ? E : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    O = Object.assign,
    y = {};
  function R(E, D, se) {
    ((this.props = E), (this.context = D), (this.refs = y), (this.updater = se || C));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (E, D) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, D, "setState");
    }),
    (R.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function L() {}
  L.prototype = R.prototype;
  function j(E, D, se) {
    ((this.props = E), (this.context = D), (this.refs = y), (this.updater = se || C));
  }
  var I = (j.prototype = new L());
  ((I.constructor = j), O(I, R.prototype), (I.isPureReactComponent = !0));
  var B = Array.isArray,
    M = Object.prototype.hasOwnProperty,
    Y = { current: null },
    A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(E, D, se) {
    var re,
      oe = {},
      _e = null,
      ke = null;
    if (D != null)
      for (re in (D.ref !== void 0 && (ke = D.ref), D.key !== void 0 && (_e = "" + D.key), D))
        M.call(D, re) && !A.hasOwnProperty(re) && (oe[re] = D[re]);
    var ye = arguments.length - 2;
    if (ye === 1) oe.children = se;
    else if (1 < ye) {
      for (var Pe = Array(ye), vt = 0; vt < ye; vt++) Pe[vt] = arguments[vt + 2];
      oe.children = Pe;
    }
    if (E && E.defaultProps)
      for (re in ((ye = E.defaultProps), ye)) oe[re] === void 0 && (oe[re] = ye[re]);
    return { $$typeof: p, type: E, key: _e, ref: ke, props: oe, _owner: Y.current };
  }
  function V(E, D) {
    return { $$typeof: p, type: E.type, key: D, ref: E.ref, props: E.props, _owner: E._owner };
  }
  function ee(E) {
    return typeof E == "object" && E !== null && E.$$typeof === p;
  }
  function me(E) {
    var D = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (se) {
        return D[se];
      })
    );
  }
  var pe = /\/+/g;
  function ue(E, D) {
    return typeof E == "object" && E !== null && E.key != null ? me("" + E.key) : D.toString(36);
  }
  function ce(E, D, se, re, oe) {
    var _e = typeof E;
    (_e === "undefined" || _e === "boolean") && (E = null);
    var ke = !1;
    if (E === null) ke = !0;
    else
      switch (_e) {
        case "string":
        case "number":
          ke = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case p:
            case r:
              ke = !0;
          }
      }
    if (ke)
      return (
        (ke = E),
        (oe = oe(ke)),
        (E = re === "" ? "." + ue(ke, 0) : re),
        B(oe)
          ? ((se = ""),
            E != null && (se = E.replace(pe, "$&/") + "/"),
            ce(oe, D, se, "", function (vt) {
              return vt;
            }))
          : oe != null &&
            (ee(oe) &&
              (oe = V(
                oe,
                se +
                  (!oe.key || (ke && ke.key === oe.key)
                    ? ""
                    : ("" + oe.key).replace(pe, "$&/") + "/") +
                  E,
              )),
            D.push(oe)),
        1
      );
    if (((ke = 0), (re = re === "" ? "." : re + ":"), B(E)))
      for (var ye = 0; ye < E.length; ye++) {
        _e = E[ye];
        var Pe = re + ue(_e, ye);
        ke += ce(_e, D, se, Pe, oe);
      }
    else if (((Pe = k(E)), typeof Pe == "function"))
      for (E = Pe.call(E), ye = 0; !(_e = E.next()).done;)
        ((_e = _e.value), (Pe = re + ue(_e, ye++)), (ke += ce(_e, D, se, Pe, oe)));
    else if (_e === "object")
      throw (
        (D = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (D === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : D) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return ke;
  }
  function ve(E, D, se) {
    if (E == null) return E;
    var re = [],
      oe = 0;
    return (
      ce(E, re, "", "", function (_e) {
        return D.call(se, _e, oe++);
      }),
      re
    );
  }
  function de(E) {
    if (E._status === -1) {
      var D = E._result;
      ((D = D()),
        D.then(
          function (se) {
            (E._status === 0 || E._status === -1) && ((E._status = 1), (E._result = se));
          },
          function (se) {
            (E._status === 0 || E._status === -1) && ((E._status = 2), (E._result = se));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = D)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var le = { current: null },
    Q = { transition: null },
    b = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: Q, ReactCurrentOwner: Y };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ae.Children = {
      map: ve,
      forEach: function (E, D, se) {
        ve(
          E,
          function () {
            D.apply(this, arguments);
          },
          se,
        );
      },
      count: function (E) {
        var D = 0;
        return (
          ve(E, function () {
            D++;
          }),
          D
        );
      },
      toArray: function (E) {
        return (
          ve(E, function (D) {
            return D;
          }) || []
        );
      },
      only: function (E) {
        if (!ee(E))
          throw Error("React.Children.only expected to receive a single React element child.");
        return E;
      },
    }),
    (ae.Component = R),
    (ae.Fragment = i),
    (ae.Profiler = o),
    (ae.PureComponent = j),
    (ae.StrictMode = s),
    (ae.Suspense = m),
    (ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b),
    (ae.act = X),
    (ae.cloneElement = function (E, D, se) {
      if (E == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            E +
            ".",
        );
      var re = O({}, E.props),
        oe = E.key,
        _e = E.ref,
        ke = E._owner;
      if (D != null) {
        if (
          (D.ref !== void 0 && ((_e = D.ref), (ke = Y.current)),
          D.key !== void 0 && (oe = "" + D.key),
          E.type && E.type.defaultProps)
        )
          var ye = E.type.defaultProps;
        for (Pe in D)
          M.call(D, Pe) &&
            !A.hasOwnProperty(Pe) &&
            (re[Pe] = D[Pe] === void 0 && ye !== void 0 ? ye[Pe] : D[Pe]);
      }
      var Pe = arguments.length - 2;
      if (Pe === 1) re.children = se;
      else if (1 < Pe) {
        ye = Array(Pe);
        for (var vt = 0; vt < Pe; vt++) ye[vt] = arguments[vt + 2];
        re.children = ye;
      }
      return { $$typeof: p, type: E.type, key: oe, ref: _e, props: re, _owner: ke };
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
      var D = H.bind(null, E);
      return ((D.type = E), D);
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
    (ae.memo = function (E, D) {
      return { $$typeof: _, type: E, compare: D === void 0 ? null : D };
    }),
    (ae.startTransition = function (E) {
      var D = Q.transition;
      Q.transition = {};
      try {
        E();
      } finally {
        Q.transition = D;
      }
    }),
    (ae.unstable_act = X),
    (ae.useCallback = function (E, D) {
      return le.current.useCallback(E, D);
    }),
    (ae.useContext = function (E) {
      return le.current.useContext(E);
    }),
    (ae.useDebugValue = function () {}),
    (ae.useDeferredValue = function (E) {
      return le.current.useDeferredValue(E);
    }),
    (ae.useEffect = function (E, D) {
      return le.current.useEffect(E, D);
    }),
    (ae.useId = function () {
      return le.current.useId();
    }),
    (ae.useImperativeHandle = function (E, D, se) {
      return le.current.useImperativeHandle(E, D, se);
    }),
    (ae.useInsertionEffect = function (E, D) {
      return le.current.useInsertionEffect(E, D);
    }),
    (ae.useLayoutEffect = function (E, D) {
      return le.current.useLayoutEffect(E, D);
    }),
    (ae.useMemo = function (E, D) {
      return le.current.useMemo(E, D);
    }),
    (ae.useReducer = function (E, D, se) {
      return le.current.useReducer(E, D, se);
    }),
    (ae.useRef = function (E) {
      return le.current.useRef(E);
    }),
    (ae.useState = function (E) {
      return le.current.useState(E);
    }),
    (ae.useSyncExternalStore = function (E, D, se) {
      return le.current.useSyncExternalStore(E, D, se);
    }),
    (ae.useTransition = function () {
      return le.current.useTransition();
    }),
    (ae.version = "18.3.1"),
    ae
  );
}
var ld;
function $u() {
  return (ld || ((ld = 1), (_u.exports = Rm())), _u.exports);
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
function zm() {
  if (sd) return ji;
  sd = 1;
  var p = $u(),
    r = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    o = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, m, _) {
    var g,
      x = {},
      k = null,
      C = null;
    (_ !== void 0 && (k = "" + _),
      m.key !== void 0 && (k = "" + m.key),
      m.ref !== void 0 && (C = m.ref));
    for (g in m) s.call(m, g) && !f.hasOwnProperty(g) && (x[g] = m[g]);
    if (d && d.defaultProps) for (g in ((m = d.defaultProps), m)) x[g] === void 0 && (x[g] = m[g]);
    return { $$typeof: r, type: d, key: k, ref: C, props: x, _owner: o.current };
  }
  return ((ji.Fragment = i), (ji.jsx = c), (ji.jsxs = c), ji);
}
var od;
function Mm() {
  return (od || ((od = 1), (mu.exports = zm())), mu.exports);
}
var P = Mm(),
  qe = $u(),
  ss = {},
  gu = { exports: {} },
  ct = {},
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
 */ var ud;
function jm() {
  return (
    ud ||
      ((ud = 1),
      (function (p) {
        function r(Q, b) {
          var X = Q.length;
          Q.push(b);
          e: for (; 0 < X;) {
            var E = (X - 1) >>> 1,
              D = Q[E];
            if (0 < o(D, b)) ((Q[E] = b), (Q[X] = D), (X = E));
            else break e;
          }
        }
        function i(Q) {
          return Q.length === 0 ? null : Q[0];
        }
        function s(Q) {
          if (Q.length === 0) return null;
          var b = Q[0],
            X = Q.pop();
          if (X !== b) {
            Q[0] = X;
            e: for (var E = 0, D = Q.length, se = D >>> 1; E < se;) {
              var re = 2 * (E + 1) - 1,
                oe = Q[re],
                _e = re + 1,
                ke = Q[_e];
              if (0 > o(oe, X))
                _e < D && 0 > o(ke, oe)
                  ? ((Q[E] = ke), (Q[_e] = X), (E = _e))
                  : ((Q[E] = oe), (Q[re] = X), (E = re));
              else if (_e < D && 0 > o(ke, X)) ((Q[E] = ke), (Q[_e] = X), (E = _e));
              else break e;
            }
          }
          return b;
        }
        function o(Q, b) {
          var X = Q.sortIndex - b.sortIndex;
          return X !== 0 ? X : Q.id - b.id;
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
          k = 3,
          C = !1,
          O = !1,
          y = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          L = typeof clearTimeout == "function" ? clearTimeout : null,
          j = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function I(Q) {
          for (var b = i(_); b !== null;) {
            if (b.callback === null) s(_);
            else if (b.startTime <= Q) (s(_), (b.sortIndex = b.expirationTime), r(m, b));
            else break;
            b = i(_);
          }
        }
        function B(Q) {
          if (((y = !1), I(Q), !O))
            if (i(m) !== null) ((O = !0), de(M));
            else {
              var b = i(_);
              b !== null && le(B, b.startTime - Q);
            }
        }
        function M(Q, b) {
          ((O = !1), y && ((y = !1), L(H), (H = -1)), (C = !0));
          var X = k;
          try {
            for (I(b), x = i(m); x !== null && (!(x.expirationTime > b) || (Q && !me()));) {
              var E = x.callback;
              if (typeof E == "function") {
                ((x.callback = null), (k = x.priorityLevel));
                var D = E(x.expirationTime <= b);
                ((b = p.unstable_now()),
                  typeof D == "function" ? (x.callback = D) : x === i(m) && s(m),
                  I(b));
              } else s(m);
              x = i(m);
            }
            if (x !== null) var se = !0;
            else {
              var re = i(_);
              (re !== null && le(B, re.startTime - b), (se = !1));
            }
            return se;
          } finally {
            ((x = null), (k = X), (C = !1));
          }
        }
        var Y = !1,
          A = null,
          H = -1,
          V = 5,
          ee = -1;
        function me() {
          return !(p.unstable_now() - ee < V);
        }
        function pe() {
          if (A !== null) {
            var Q = p.unstable_now();
            ee = Q;
            var b = !0;
            try {
              b = A(!0, Q);
            } finally {
              b ? ue() : ((Y = !1), (A = null));
            }
          } else Y = !1;
        }
        var ue;
        if (typeof j == "function")
          ue = function () {
            j(pe);
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
            R(pe, 0);
          };
        function de(Q) {
          ((A = Q), Y || ((Y = !0), ue()));
        }
        function le(Q, b) {
          H = R(function () {
            Q(p.unstable_now());
          }, b);
        }
        ((p.unstable_IdlePriority = 5),
          (p.unstable_ImmediatePriority = 1),
          (p.unstable_LowPriority = 4),
          (p.unstable_NormalPriority = 3),
          (p.unstable_Profiling = null),
          (p.unstable_UserBlockingPriority = 2),
          (p.unstable_cancelCallback = function (Q) {
            Q.callback = null;
          }),
          (p.unstable_continueExecution = function () {
            O || C || ((O = !0), de(M));
          }),
          (p.unstable_forceFrameRate = function (Q) {
            0 > Q || 125 < Q
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (V = 0 < Q ? Math.floor(1e3 / Q) : 5);
          }),
          (p.unstable_getCurrentPriorityLevel = function () {
            return k;
          }),
          (p.unstable_getFirstCallbackNode = function () {
            return i(m);
          }),
          (p.unstable_next = function (Q) {
            switch (k) {
              case 1:
              case 2:
              case 3:
                var b = 3;
                break;
              default:
                b = k;
            }
            var X = k;
            k = b;
            try {
              return Q();
            } finally {
              k = X;
            }
          }),
          (p.unstable_pauseExecution = function () {}),
          (p.unstable_requestPaint = function () {}),
          (p.unstable_runWithPriority = function (Q, b) {
            switch (Q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                Q = 3;
            }
            var X = k;
            k = Q;
            try {
              return b();
            } finally {
              k = X;
            }
          }),
          (p.unstable_scheduleCallback = function (Q, b, X) {
            var E = p.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay), (X = typeof X == "number" && 0 < X ? E + X : E))
                : (X = E),
              Q)
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
              (D = X + D),
              (Q = {
                id: g++,
                callback: b,
                priorityLevel: Q,
                startTime: X,
                expirationTime: D,
                sortIndex: -1,
              }),
              X > E
                ? ((Q.sortIndex = X),
                  r(_, Q),
                  i(m) === null && Q === i(_) && (y ? (L(H), (H = -1)) : (y = !0), le(B, X - E)))
                : ((Q.sortIndex = D), r(m, Q), O || C || ((O = !0), de(M))),
              Q
            );
          }),
          (p.unstable_shouldYield = me),
          (p.unstable_wrapCallback = function (Q) {
            var b = k;
            return function () {
              var X = k;
              k = b;
              try {
                return Q.apply(this, arguments);
              } finally {
                k = X;
              }
            };
          }));
      })(yu)),
    yu
  );
}
var ad;
function Dm() {
  return (ad || ((ad = 1), (vu.exports = jm())), vu.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fd;
function Lm() {
  if (fd) return ct;
  fd = 1;
  var p = $u(),
    r = Dm();
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
  var s = new Set(),
    o = {};
  function f(e, t) {
    (c(e, t), c(e + "Capture", t));
  }
  function c(e, t) {
    for (o[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
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
  function k(e) {
    return m.call(x, e) ? !0 : m.call(g, e) ? !1 : _.test(e) ? (x[e] = !0) : ((g[e] = !0), !1);
  }
  function C(e, t, n, l) {
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
  function O(e, t, n, l) {
    if (t === null || typeof t > "u" || C(e, t, n, l)) return !0;
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
  var R = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      R[e] = new y(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      R[t] = new y(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      R[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        R[e] = new y(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        R[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      R[e] = new y(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      R[e] = new y(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      R[e] = new y(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      R[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var L = /[\-:]([a-z])/g;
  function j(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(L, j);
      R[t] = new y(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(L, j);
        R[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(L, j);
      R[t] = new y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      R[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (R.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      R[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function I(e, t, n, l) {
    var u = R.hasOwnProperty(t) ? R[t] : null;
    (u !== null
      ? u.type !== 0
      : l || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (O(t, n, u, l) && (n = null),
      l || u === null
        ? k(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
  var B = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    M = Symbol.for("react.element"),
    Y = Symbol.for("react.portal"),
    A = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    V = Symbol.for("react.profiler"),
    ee = Symbol.for("react.provider"),
    me = Symbol.for("react.context"),
    pe = Symbol.for("react.forward_ref"),
    ue = Symbol.for("react.suspense"),
    ce = Symbol.for("react.suspense_list"),
    ve = Symbol.for("react.memo"),
    de = Symbol.for("react.lazy"),
    le = Symbol.for("react.offscreen"),
    Q = Symbol.iterator;
  function b(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Q && e[Q]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var X = Object.assign,
    E;
  function D(e) {
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
  var se = !1;
  function re(e, t) {
    if (!e || se) return "";
    se = !0;
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
          } catch (z) {
            var l = z;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (z) {
            l = z;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (z) {
          l = z;
        }
        e();
      }
    } catch (z) {
      if (z && l && typeof z.stack == "string") {
        for (
          var u = z.stack.split(`
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
      ((se = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function oe(e) {
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
        return ((e = re(e.type, !1)), e);
      case 11:
        return ((e = re(e.type.render, !1)), e);
      case 1:
        return ((e = re(e.type, !0)), e);
      default:
        return "";
    }
  }
  function _e(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case A:
        return "Fragment";
      case Y:
        return "Portal";
      case V:
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
        case me:
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
          return ((t = e.displayName || null), t !== null ? t : _e(e.type) || "Memo");
        case de:
          ((t = e._payload), (e = e._init));
          try {
            return _e(e(t));
          } catch {}
      }
    return null;
  }
  function ke(e) {
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
        return _e(t);
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
  function qi(e) {
    e._valueTracker || (e._valueTracker = vt(e));
  }
  function aa(e) {
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
  function Zi(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ws(e, t) {
    var n = t.checked;
    return X({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function fa(e, t) {
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
  function ca(e, t) {
    ((t = t.checked), t != null && I(e, "checked", t, !1));
  }
  function Ss(e, t) {
    ca(e, t);
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
      ? ks(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && ks(e, t.type, ye(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function da(e, t, n) {
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
  function ks(e, t, n) {
    (t !== "number" || Zi(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Gr = Array.isArray;
  function cr(e, t, n, l) {
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
  function Cs(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return X({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function pa(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(i(92));
        if (Gr(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: ye(n) };
  }
  function ha(e, t) {
    var n = ye(t.value),
      l = ye(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      l != null && (e.defaultValue = "" + l));
  }
  function ma(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function _a(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Es(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? _a(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ji,
    ga = (function (e) {
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
          Ji = Ji || document.createElement("div"),
            Ji.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ji.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Kr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var qr = {
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
    Dp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qr).forEach(function (e) {
    Dp.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qr[t] = qr[e]));
    });
  });
  function va(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (qr.hasOwnProperty(e) && qr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function ya(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var l = n.indexOf("--") === 0,
          u = va(n, t[n], l);
        (n === "float" && (n = "cssFloat"), l ? e.setProperty(n, u) : (e[n] = u));
      }
  }
  var Lp = X(
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
  function Ts(e, t) {
    if (t) {
      if (Lp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Ps(e, t) {
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
  var Ns = null;
  function Os(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Rs = null,
    dr = null,
    pr = null;
  function xa(e) {
    if ((e = vi(e))) {
      if (typeof Rs != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = wl(t)), Rs(e.stateNode, e.type, t));
    }
  }
  function wa(e) {
    dr ? (pr ? pr.push(e) : (pr = [e])) : (dr = e);
  }
  function Sa() {
    if (dr) {
      var e = dr,
        t = pr;
      if (((pr = dr = null), xa(e), t)) for (e = 0; e < t.length; e++) xa(t[e]);
    }
  }
  function ka(e, t) {
    return e(t);
  }
  function Ca() {}
  var zs = !1;
  function Ea(e, t, n) {
    if (zs) return e(t, n);
    zs = !0;
    try {
      return ka(e, t, n);
    } finally {
      ((zs = !1), (dr !== null || pr !== null) && (Ca(), Sa()));
    }
  }
  function Zr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = wl(n);
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
  var Ms = !1;
  if (d)
    try {
      var Jr = {};
      (Object.defineProperty(Jr, "passive", {
        get: function () {
          Ms = !0;
        },
      }),
        window.addEventListener("test", Jr, Jr),
        window.removeEventListener("test", Jr, Jr));
    } catch {
      Ms = !1;
    }
  function Ap(e, t, n, l, u, a, h, v, w) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, z);
    } catch (U) {
      this.onError(U);
    }
  }
  var br = !1,
    bi = null,
    el = !1,
    js = null,
    Fp = {
      onError: function (e) {
        ((br = !0), (bi = e));
      },
    };
  function Ip(e, t, n, l, u, a, h, v, w) {
    ((br = !1), (bi = null), Ap.apply(Fp, arguments));
  }
  function Up(e, t, n, l, u, a, h, v, w) {
    if ((Ip.apply(this, arguments), br)) {
      if (br) {
        var z = bi;
        ((br = !1), (bi = null));
      } else throw Error(i(198));
      el || ((el = !0), (js = z));
    }
  }
  function $n(e) {
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
  function Ta(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Pa(e) {
    if ($n(e) !== e) throw Error(i(188));
  }
  function Bp(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = $n(e)), t === null)) throw Error(i(188));
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
          if (a === n) return (Pa(u), e);
          if (a === l) return (Pa(u), t);
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
  function Na(e) {
    return ((e = Bp(e)), e !== null ? Oa(e) : null);
  }
  function Oa(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Oa(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ra = r.unstable_scheduleCallback,
    za = r.unstable_cancelCallback,
    Vp = r.unstable_shouldYield,
    Wp = r.unstable_requestPaint,
    Fe = r.unstable_now,
    $p = r.unstable_getCurrentPriorityLevel,
    Ds = r.unstable_ImmediatePriority,
    Ma = r.unstable_UserBlockingPriority,
    tl = r.unstable_NormalPriority,
    Hp = r.unstable_LowPriority,
    ja = r.unstable_IdlePriority,
    nl = null,
    Xt = null;
  function Qp(e) {
    if (Xt && typeof Xt.onCommitFiberRoot == "function")
      try {
        Xt.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Ut = Math.clz32 ? Math.clz32 : Gp,
    Yp = Math.log,
    Xp = Math.LN2;
  function Gp(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Yp(e) / Xp) | 0)) | 0);
  }
  var rl = 64,
    il = 4194304;
  function ei(e) {
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
  function ll(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      a = e.pingedLanes,
      h = n & 268435455;
    if (h !== 0) {
      var v = h & ~u;
      v !== 0 ? (l = ei(v)) : ((a &= h), a !== 0 && (l = ei(a)));
    } else ((h = n & ~u), h !== 0 ? (l = ei(h)) : a !== 0 && (l = ei(a)));
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
  function Kp(e, t) {
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
  function qp(e, t) {
    for (
      var n = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, a = e.pendingLanes;
      0 < a;
    ) {
      var h = 31 - Ut(a),
        v = 1 << h,
        w = u[h];
      (w === -1
        ? ((v & n) === 0 || (v & l) !== 0) && (u[h] = Kp(v, t))
        : w <= t && (e.expiredLanes |= v),
        (a &= ~v));
    }
  }
  function Ls(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Da() {
    var e = rl;
    return ((rl <<= 1), (rl & 4194240) === 0 && (rl = 64), e);
  }
  function As(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ti(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Ut(t)),
      (e[t] = n));
  }
  function Zp(e, t) {
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
  function Fs(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var l = 31 - Ut(n),
        u = 1 << l;
      ((u & t) | (e[l] & t) && (e[l] |= t), (n &= ~u));
    }
  }
  var xe = 0;
  function La(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Aa,
    Is,
    Fa,
    Ia,
    Ua,
    Us = !1,
    sl = [],
    mn = null,
    _n = null,
    gn = null,
    ni = new Map(),
    ri = new Map(),
    vn = [],
    Jp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Ba(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        mn = null;
        break;
      case "dragenter":
      case "dragleave":
        _n = null;
        break;
      case "mouseover":
      case "mouseout":
        gn = null;
        break;
      case "pointerover":
      case "pointerout":
        ni.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ri.delete(t.pointerId);
    }
  }
  function ii(e, t, n, l, u, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: a,
          targetContainers: [u],
        }),
        t !== null && ((t = vi(t)), t !== null && Is(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function bp(e, t, n, l, u) {
    switch (t) {
      case "focusin":
        return ((mn = ii(mn, e, t, n, l, u)), !0);
      case "dragenter":
        return ((_n = ii(_n, e, t, n, l, u)), !0);
      case "mouseover":
        return ((gn = ii(gn, e, t, n, l, u)), !0);
      case "pointerover":
        var a = u.pointerId;
        return (ni.set(a, ii(ni.get(a) || null, e, t, n, l, u)), !0);
      case "gotpointercapture":
        return ((a = u.pointerId), ri.set(a, ii(ri.get(a) || null, e, t, n, l, u)), !0);
    }
    return !1;
  }
  function Va(e) {
    var t = Hn(e.target);
    if (t !== null) {
      var n = $n(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ta(n)), t !== null)) {
            ((e.blockedOn = t),
              Ua(e.priority, function () {
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
  function ol(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = Vs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Ns = l), n.target.dispatchEvent(l), (Ns = null));
      } else return ((t = vi(n)), t !== null && Is(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Wa(e, t, n) {
    ol(e) && n.delete(t);
  }
  function eh() {
    ((Us = !1),
      mn !== null && ol(mn) && (mn = null),
      _n !== null && ol(_n) && (_n = null),
      gn !== null && ol(gn) && (gn = null),
      ni.forEach(Wa),
      ri.forEach(Wa));
  }
  function li(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Us || ((Us = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, eh)));
  }
  function si(e) {
    function t(u) {
      return li(u, e);
    }
    if (0 < sl.length) {
      li(sl[0], e);
      for (var n = 1; n < sl.length; n++) {
        var l = sl[n];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      mn !== null && li(mn, e),
        _n !== null && li(_n, e),
        gn !== null && li(gn, e),
        ni.forEach(t),
        ri.forEach(t),
        n = 0;
      n < vn.length;
      n++
    )
      ((l = vn[n]), l.blockedOn === e && (l.blockedOn = null));
    for (; 0 < vn.length && ((n = vn[0]), n.blockedOn === null);)
      (Va(n), n.blockedOn === null && vn.shift());
  }
  var hr = B.ReactCurrentBatchConfig,
    ul = !0;
  function th(e, t, n, l) {
    var u = xe,
      a = hr.transition;
    hr.transition = null;
    try {
      ((xe = 1), Bs(e, t, n, l));
    } finally {
      ((xe = u), (hr.transition = a));
    }
  }
  function nh(e, t, n, l) {
    var u = xe,
      a = hr.transition;
    hr.transition = null;
    try {
      ((xe = 4), Bs(e, t, n, l));
    } finally {
      ((xe = u), (hr.transition = a));
    }
  }
  function Bs(e, t, n, l) {
    if (ul) {
      var u = Vs(e, t, n, l);
      if (u === null) (io(e, t, l, al, n), Ba(e, l));
      else if (bp(u, e, t, n, l)) l.stopPropagation();
      else if ((Ba(e, l), t & 4 && -1 < Jp.indexOf(e))) {
        for (; u !== null;) {
          var a = vi(u);
          if (
            (a !== null && Aa(a), (a = Vs(e, t, n, l)), a === null && io(e, t, l, al, n), a === u)
          )
            break;
          u = a;
        }
        u !== null && l.stopPropagation();
      } else io(e, t, l, null, n);
    }
  }
  var al = null;
  function Vs(e, t, n, l) {
    if (((al = null), (e = Os(l)), (e = Hn(e)), e !== null))
      if (((t = $n(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ta(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((al = e), null);
  }
  function $a(e) {
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
        switch ($p()) {
          case Ds:
            return 1;
          case Ma:
            return 4;
          case tl:
          case Hp:
            return 16;
          case ja:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var yn = null,
    Ws = null,
    fl = null;
  function Ha() {
    if (fl) return fl;
    var e,
      t = Ws,
      n = t.length,
      l,
      u = "value" in yn ? yn.value : yn.textContent,
      a = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++);
    var h = n - e;
    for (l = 1; l <= h && t[n - l] === u[a - l]; l++);
    return (fl = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function cl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function dl() {
    return !0;
  }
  function Qa() {
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
          ? dl
          : Qa),
        (this.isPropagationStopped = Qa),
        this
      );
    }
    return (
      X(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = dl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = dl));
        },
        persist: function () {},
        isPersistent: dl,
      }),
      t
    );
  }
  var mr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    $s = yt(mr),
    oi = X({}, mr, { view: 0, detail: 0 }),
    rh = yt(oi),
    Hs,
    Qs,
    ui,
    pl = X({}, oi, {
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
      getModifierState: Xs,
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
          : (e !== ui &&
              (ui && e.type === "mousemove"
                ? ((Hs = e.screenX - ui.screenX), (Qs = e.screenY - ui.screenY))
                : (Qs = Hs = 0),
              (ui = e)),
            Hs);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Qs;
      },
    }),
    Ya = yt(pl),
    ih = X({}, pl, { dataTransfer: 0 }),
    lh = yt(ih),
    sh = X({}, oi, { relatedTarget: 0 }),
    Ys = yt(sh),
    oh = X({}, mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uh = yt(oh),
    ah = X({}, mr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    fh = yt(ah),
    ch = X({}, mr, { data: 0 }),
    Xa = yt(ch),
    dh = {
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
    ph = {
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
    hh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function mh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = hh[e]) ? !!t[e] : !1;
  }
  function Xs() {
    return mh;
  }
  var _h = X({}, oi, {
      key: function (e) {
        if (e.key) {
          var t = dh[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = cl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? ph[e.keyCode] || "Unidentified"
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
      getModifierState: Xs,
      charCode: function (e) {
        return e.type === "keypress" ? cl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? cl(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    gh = yt(_h),
    vh = X({}, pl, {
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
    Ga = yt(vh),
    yh = X({}, oi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xs,
    }),
    xh = yt(yh),
    wh = X({}, mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sh = yt(wh),
    kh = X({}, pl, {
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
    Ch = yt(kh),
    Eh = [9, 13, 27, 32],
    Gs = d && "CompositionEvent" in window,
    ai = null;
  d && "documentMode" in document && (ai = document.documentMode);
  var Th = d && "TextEvent" in window && !ai,
    Ka = d && (!Gs || (ai && 8 < ai && 11 >= ai)),
    qa = " ",
    Za = !1;
  function Ja(e, t) {
    switch (e) {
      case "keyup":
        return Eh.indexOf(t.keyCode) !== -1;
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
  function ba(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var _r = !1;
  function Ph(e, t) {
    switch (e) {
      case "compositionend":
        return ba(t);
      case "keypress":
        return t.which !== 32 ? null : ((Za = !0), qa);
      case "textInput":
        return ((e = t.data), e === qa && Za ? null : e);
      default:
        return null;
    }
  }
  function Nh(e, t) {
    if (_r)
      return e === "compositionend" || (!Gs && Ja(e, t))
        ? ((e = Ha()), (fl = Ws = yn = null), (_r = !1), e)
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
        return Ka && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Oh = {
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
  function ef(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Oh[e.type] : t === "textarea";
  }
  function tf(e, t, n, l) {
    (wa(l),
      (t = vl(t, "onChange")),
      0 < t.length &&
        ((n = new $s("onChange", "change", null, n, l)), e.push({ event: n, listeners: t })));
  }
  var fi = null,
    ci = null;
  function Rh(e) {
    xf(e, 0);
  }
  function hl(e) {
    var t = wr(e);
    if (aa(t)) return e;
  }
  function zh(e, t) {
    if (e === "change") return t;
  }
  var nf = !1;
  if (d) {
    var Ks;
    if (d) {
      var qs = "oninput" in document;
      if (!qs) {
        var rf = document.createElement("div");
        (rf.setAttribute("oninput", "return;"), (qs = typeof rf.oninput == "function"));
      }
      Ks = qs;
    } else Ks = !1;
    nf = Ks && (!document.documentMode || 9 < document.documentMode);
  }
  function lf() {
    fi && (fi.detachEvent("onpropertychange", sf), (ci = fi = null));
  }
  function sf(e) {
    if (e.propertyName === "value" && hl(ci)) {
      var t = [];
      (tf(t, ci, e, Os(e)), Ea(Rh, t));
    }
  }
  function Mh(e, t, n) {
    e === "focusin"
      ? (lf(), (fi = t), (ci = n), fi.attachEvent("onpropertychange", sf))
      : e === "focusout" && lf();
  }
  function jh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return hl(ci);
  }
  function Dh(e, t) {
    if (e === "click") return hl(t);
  }
  function Lh(e, t) {
    if (e === "input" || e === "change") return hl(t);
  }
  function Ah(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Bt = typeof Object.is == "function" ? Object.is : Ah;
  function di(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!m.call(t, u) || !Bt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function of(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function uf(e, t) {
    var n = of(e);
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
      n = of(n);
    }
  }
  function af(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? af(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ff() {
    for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Zi(e.document);
    }
    return t;
  }
  function Zs(e) {
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
  function Fh(e) {
    var t = ff(),
      n = e.focusedElem,
      l = e.selectionRange;
    if (t !== n && n && n.ownerDocument && af(n.ownerDocument.documentElement, n)) {
      if (l !== null && Zs(n)) {
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
            (u = uf(n, a)));
          var h = uf(n, l);
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
  var Ih = d && "documentMode" in document && 11 >= document.documentMode,
    gr = null,
    Js = null,
    pi = null,
    bs = !1;
  function cf(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    bs ||
      gr == null ||
      gr !== Zi(l) ||
      ((l = gr),
      "selectionStart" in l && Zs(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (pi && di(pi, l)) ||
        ((pi = l),
        (l = vl(Js, "onSelect")),
        0 < l.length &&
          ((t = new $s("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = gr))));
  }
  function ml(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var vr = {
      animationend: ml("Animation", "AnimationEnd"),
      animationiteration: ml("Animation", "AnimationIteration"),
      animationstart: ml("Animation", "AnimationStart"),
      transitionend: ml("Transition", "TransitionEnd"),
    },
    eo = {},
    df = {};
  d &&
    ((df = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vr.animationend.animation,
      delete vr.animationiteration.animation,
      delete vr.animationstart.animation),
    "TransitionEvent" in window || delete vr.transitionend.transition);
  function _l(e) {
    if (eo[e]) return eo[e];
    if (!vr[e]) return e;
    var t = vr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in df) return (eo[e] = t[n]);
    return e;
  }
  var pf = _l("animationend"),
    hf = _l("animationiteration"),
    mf = _l("animationstart"),
    _f = _l("transitionend"),
    gf = new Map(),
    vf =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function xn(e, t) {
    (gf.set(e, t), f(t, [e]));
  }
  for (var to = 0; to < vf.length; to++) {
    var no = vf[to],
      Uh = no.toLowerCase(),
      Bh = no[0].toUpperCase() + no.slice(1);
    xn(Uh, "on" + Bh);
  }
  (xn(pf, "onAnimationEnd"),
    xn(hf, "onAnimationIteration"),
    xn(mf, "onAnimationStart"),
    xn("dblclick", "onDoubleClick"),
    xn("focusin", "onFocus"),
    xn("focusout", "onBlur"),
    xn(_f, "onTransitionEnd"),
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
  var hi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Vh = new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));
  function yf(e, t, n) {
    var l = e.type || "unknown-event";
    ((e.currentTarget = n), Up(l, t, void 0, e), (e.currentTarget = null));
  }
  function xf(e, t) {
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
              z = v.currentTarget;
            if (((v = v.listener), w !== a && u.isPropagationStopped())) break e;
            (yf(u, v, z), (a = w));
          }
        else
          for (h = 0; h < l.length; h++) {
            if (
              ((v = l[h]),
              (w = v.instance),
              (z = v.currentTarget),
              (v = v.listener),
              w !== a && u.isPropagationStopped())
            )
              break e;
            (yf(u, v, z), (a = w));
          }
      }
    }
    if (el) throw ((e = js), (el = !1), (js = null), e);
  }
  function Ee(e, t) {
    var n = t[fo];
    n === void 0 && (n = t[fo] = new Set());
    var l = e + "__bubble";
    n.has(l) || (wf(t, e, 2, !1), n.add(l));
  }
  function ro(e, t, n) {
    var l = 0;
    (t && (l |= 4), wf(n, e, l, t));
  }
  var gl = "_reactListening" + Math.random().toString(36).slice(2);
  function mi(e) {
    if (!e[gl]) {
      ((e[gl] = !0),
        s.forEach(function (n) {
          n !== "selectionchange" && (Vh.has(n) || ro(n, !1, e), ro(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gl] || ((t[gl] = !0), ro("selectionchange", !1, t));
    }
  }
  function wf(e, t, n, l) {
    switch ($a(t)) {
      case 1:
        var u = th;
        break;
      case 4:
        u = nh;
        break;
      default:
        u = Bs;
    }
    ((n = u.bind(null, t, n, e)),
      (u = void 0),
      !Ms || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: u })
          : e.addEventListener(t, n, !0)
        : u !== void 0
          ? e.addEventListener(t, n, { passive: u })
          : e.addEventListener(t, n, !1));
  }
  function io(e, t, n, l, u) {
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
            if (((h = Hn(v)), h === null)) return;
            if (((w = h.tag), w === 5 || w === 6)) {
              l = a = h;
              continue e;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    Ea(function () {
      var z = a,
        U = Os(n),
        W = [];
      e: {
        var F = gf.get(e);
        if (F !== void 0) {
          var G = $s,
            q = e;
          switch (e) {
            case "keypress":
              if (cl(n) === 0) break e;
            case "keydown":
            case "keyup":
              G = gh;
              break;
            case "focusin":
              ((q = "focus"), (G = Ys));
              break;
            case "focusout":
              ((q = "blur"), (G = Ys));
              break;
            case "beforeblur":
            case "afterblur":
              G = Ys;
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
              G = Ya;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = lh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = xh;
              break;
            case pf:
            case hf:
            case mf:
              G = uh;
              break;
            case _f:
              G = Sh;
              break;
            case "scroll":
              G = rh;
              break;
            case "wheel":
              G = Ch;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = fh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = Ga;
          }
          var Z = (t & 4) !== 0,
            Ie = !Z && e === "scroll",
            T = Z ? (F !== null ? F + "Capture" : null) : F;
          Z = [];
          for (var S = z, N; S !== null;) {
            N = S;
            var $ = N.stateNode;
            if (
              (N.tag === 5 &&
                $ !== null &&
                ((N = $), T !== null && (($ = Zr(S, T)), $ != null && Z.push(_i(S, $, N)))),
              Ie)
            )
              break;
            S = S.return;
          }
          0 < Z.length && ((F = new G(F, q, null, n, U)), W.push({ event: F, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((F = e === "mouseover" || e === "pointerover"),
            (G = e === "mouseout" || e === "pointerout"),
            F && n !== Ns && (q = n.relatedTarget || n.fromElement) && (Hn(q) || q[nn]))
          )
            break e;
          if (
            (G || F) &&
            ((F =
              U.window === U
                ? U
                : (F = U.ownerDocument)
                  ? F.defaultView || F.parentWindow
                  : window),
            G
              ? ((q = n.relatedTarget || n.toElement),
                (G = z),
                (q = q ? Hn(q) : null),
                q !== null &&
                  ((Ie = $n(q)), q !== Ie || (q.tag !== 5 && q.tag !== 6)) &&
                  (q = null))
              : ((G = null), (q = z)),
            G !== q)
          ) {
            if (
              ((Z = Ya),
              ($ = "onMouseLeave"),
              (T = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Z = Ga), ($ = "onPointerLeave"), (T = "onPointerEnter"), (S = "pointer")),
              (Ie = G == null ? F : wr(G)),
              (N = q == null ? F : wr(q)),
              (F = new Z($, S + "leave", G, n, U)),
              (F.target = Ie),
              (F.relatedTarget = N),
              ($ = null),
              Hn(U) === z &&
                ((Z = new Z(T, S + "enter", q, n, U)),
                (Z.target = N),
                (Z.relatedTarget = Ie),
                ($ = Z)),
              (Ie = $),
              G && q)
            )
              t: {
                for (Z = G, T = q, S = 0, N = Z; N; N = yr(N)) S++;
                for (N = 0, $ = T; $; $ = yr($)) N++;
                for (; 0 < S - N;) ((Z = yr(Z)), S--);
                for (; 0 < N - S;) ((T = yr(T)), N--);
                for (; S--;) {
                  if (Z === T || (T !== null && Z === T.alternate)) break t;
                  ((Z = yr(Z)), (T = yr(T)));
                }
                Z = null;
              }
            else Z = null;
            (G !== null && Sf(W, F, G, Z, !1), q !== null && Ie !== null && Sf(W, Ie, q, Z, !0));
          }
        }
        e: {
          if (
            ((F = z ? wr(z) : window),
            (G = F.nodeName && F.nodeName.toLowerCase()),
            G === "select" || (G === "input" && F.type === "file"))
          )
            var J = zh;
          else if (ef(F))
            if (nf) J = Lh;
            else {
              J = jh;
              var te = Mh;
            }
          else
            (G = F.nodeName) &&
              G.toLowerCase() === "input" &&
              (F.type === "checkbox" || F.type === "radio") &&
              (J = Dh);
          if (J && (J = J(e, z))) {
            tf(W, J, n, U);
            break e;
          }
          (te && te(e, F, z),
            e === "focusout" &&
              (te = F._wrapperState) &&
              te.controlled &&
              F.type === "number" &&
              ks(F, "number", F.value));
        }
        switch (((te = z ? wr(z) : window), e)) {
          case "focusin":
            (ef(te) || te.contentEditable === "true") && ((gr = te), (Js = z), (pi = null));
            break;
          case "focusout":
            pi = Js = gr = null;
            break;
          case "mousedown":
            bs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((bs = !1), cf(W, n, U));
            break;
          case "selectionchange":
            if (Ih) break;
          case "keydown":
          case "keyup":
            cf(W, n, U);
        }
        var ne;
        if (Gs)
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
          _r
            ? Ja(e, n) && (ie = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (ie = "onCompositionStart");
        (ie &&
          (Ka &&
            n.locale !== "ko" &&
            (_r || ie !== "onCompositionStart"
              ? ie === "onCompositionEnd" && _r && (ne = Ha())
              : ((yn = U), (Ws = "value" in yn ? yn.value : yn.textContent), (_r = !0))),
          (te = vl(z, ie)),
          0 < te.length &&
            ((ie = new Xa(ie, e, null, n, U)),
            W.push({ event: ie, listeners: te }),
            ne ? (ie.data = ne) : ((ne = ba(n)), ne !== null && (ie.data = ne)))),
          (ne = Th ? Ph(e, n) : Nh(e, n)) &&
            ((z = vl(z, "onBeforeInput")),
            0 < z.length &&
              ((U = new Xa("onBeforeInput", "beforeinput", null, n, U)),
              W.push({ event: U, listeners: z }),
              (U.data = ne))));
      }
      xf(W, t);
    });
  }
  function _i(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function vl(e, t) {
    for (var n = t + "Capture", l = []; e !== null;) {
      var u = e,
        a = u.stateNode;
      (u.tag === 5 &&
        a !== null &&
        ((u = a),
        (a = Zr(e, n)),
        a != null && l.unshift(_i(e, a, u)),
        (a = Zr(e, t)),
        a != null && l.push(_i(e, a, u))),
        (e = e.return));
    }
    return l;
  }
  function yr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Sf(e, t, n, l, u) {
    for (var a = t._reactName, h = []; n !== null && n !== l;) {
      var v = n,
        w = v.alternate,
        z = v.stateNode;
      if (w !== null && w === l) break;
      (v.tag === 5 &&
        z !== null &&
        ((v = z),
        u
          ? ((w = Zr(n, a)), w != null && h.unshift(_i(n, w, v)))
          : u || ((w = Zr(n, a)), w != null && h.push(_i(n, w, v)))),
        (n = n.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Wh = /\r\n?/g,
    $h = /\u0000|\uFFFD/g;
  function kf(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Wh,
        `
`,
      )
      .replace($h, "");
  }
  function yl(e, t, n) {
    if (((t = kf(t)), kf(e) !== t && n)) throw Error(i(425));
  }
  function xl() {}
  var lo = null,
    so = null;
  function oo(e, t) {
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
  var uo = typeof setTimeout == "function" ? setTimeout : void 0,
    Hh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Cf = typeof Promise == "function" ? Promise : void 0,
    Qh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Cf < "u"
          ? function (e) {
              return Cf.resolve(null).then(e).catch(Yh);
            }
          : uo;
  function Yh(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ao(e, t) {
    var n = t,
      l = 0;
    do {
      var u = n.nextSibling;
      if ((e.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$")) {
          if (l === 0) {
            (e.removeChild(u), si(t));
            return;
          }
          l--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || l++;
      n = u;
    } while (n);
    si(t);
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
  function Ef(e) {
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
  var xr = Math.random().toString(36).slice(2),
    Gt = "__reactFiber$" + xr,
    gi = "__reactProps$" + xr,
    nn = "__reactContainer$" + xr,
    fo = "__reactEvents$" + xr,
    Xh = "__reactListeners$" + xr,
    Gh = "__reactHandles$" + xr;
  function Hn(e) {
    var t = e[Gt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[nn] || n[Gt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Ef(e); e !== null;) {
            if ((n = e[Gt])) return n;
            e = Ef(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function vi(e) {
    return (
      (e = e[Gt] || e[nn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function wr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function wl(e) {
    return e[gi] || null;
  }
  var co = [],
    Sr = -1;
  function Sn(e) {
    return { current: e };
  }
  function Te(e) {
    0 > Sr || ((e.current = co[Sr]), (co[Sr] = null), Sr--);
  }
  function Ce(e, t) {
    (Sr++, (co[Sr] = e.current), (e.current = t));
  }
  var kn = {},
    Je = Sn(kn),
    st = Sn(!1),
    Qn = kn;
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
  function Sl() {
    (Te(st), Te(Je));
  }
  function Tf(e, t, n) {
    if (Je.current !== kn) throw Error(i(168));
    (Ce(Je, t), Ce(st, n));
  }
  function Pf(e, t, n) {
    var l = e.stateNode;
    if (((t = t.childContextTypes), typeof l.getChildContext != "function")) return n;
    l = l.getChildContext();
    for (var u in l) if (!(u in t)) throw Error(i(108, ke(e) || "Unknown", u));
    return X({}, n, l);
  }
  function kl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kn),
      (Qn = Je.current),
      Ce(Je, e),
      Ce(st, st.current),
      !0
    );
  }
  function Nf(e, t, n) {
    var l = e.stateNode;
    if (!l) throw Error(i(169));
    (n
      ? ((e = Pf(e, t, Qn)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        Te(st),
        Te(Je),
        Ce(Je, e))
      : Te(st),
      Ce(st, n));
  }
  var rn = null,
    Cl = !1,
    po = !1;
  function Of(e) {
    rn === null ? (rn = [e]) : rn.push(e);
  }
  function Kh(e) {
    ((Cl = !0), Of(e));
  }
  function Cn() {
    if (!po && rn !== null) {
      po = !0;
      var e = 0,
        t = xe;
      try {
        var n = rn;
        for (xe = 1; e < n.length; e++) {
          var l = n[e];
          do l = l(!0);
          while (l !== null);
        }
        ((rn = null), (Cl = !1));
      } catch (u) {
        throw (rn !== null && (rn = rn.slice(e + 1)), Ra(Ds, Cn), u);
      } finally {
        ((xe = t), (po = !1));
      }
    }
    return null;
  }
  var Cr = [],
    Er = 0,
    El = null,
    Tl = 0,
    Rt = [],
    zt = 0,
    Yn = null,
    ln = 1,
    sn = "";
  function Xn(e, t) {
    ((Cr[Er++] = Tl), (Cr[Er++] = El), (El = e), (Tl = t));
  }
  function Rf(e, t, n) {
    ((Rt[zt++] = ln), (Rt[zt++] = sn), (Rt[zt++] = Yn), (Yn = e));
    var l = ln;
    e = sn;
    var u = 32 - Ut(l) - 1;
    ((l &= ~(1 << u)), (n += 1));
    var a = 32 - Ut(t) + u;
    if (30 < a) {
      var h = u - (u % 5);
      ((a = (l & ((1 << h) - 1)).toString(32)),
        (l >>= h),
        (u -= h),
        (ln = (1 << (32 - Ut(t) + u)) | (n << u) | l),
        (sn = a + e));
    } else ((ln = (1 << a) | (n << u) | l), (sn = e));
  }
  function ho(e) {
    e.return !== null && (Xn(e, 1), Rf(e, 1, 0));
  }
  function mo(e) {
    for (; e === El;) ((El = Cr[--Er]), (Cr[Er] = null), (Tl = Cr[--Er]), (Cr[Er] = null));
    for (; e === Yn;)
      ((Yn = Rt[--zt]),
        (Rt[zt] = null),
        (sn = Rt[--zt]),
        (Rt[zt] = null),
        (ln = Rt[--zt]),
        (Rt[zt] = null));
  }
  var xt = null,
    wt = null,
    Ne = !1,
    Vt = null;
  function zf(e, t) {
    var n = Lt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Mf(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (xt = e), (wt = wn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (xt = e), (wt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Yn !== null ? { id: ln, overflow: sn } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Lt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (xt = e),
              (wt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function _o(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function go(e) {
    if (Ne) {
      var t = wt;
      if (t) {
        var n = t;
        if (!Mf(e, t)) {
          if (_o(e)) throw Error(i(418));
          t = wn(n.nextSibling);
          var l = xt;
          t && Mf(e, t) ? zf(l, n) : ((e.flags = (e.flags & -4097) | 2), (Ne = !1), (xt = e));
        }
      } else {
        if (_o(e)) throw Error(i(418));
        ((e.flags = (e.flags & -4097) | 2), (Ne = !1), (xt = e));
      }
    }
  }
  function jf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    xt = e;
  }
  function Pl(e) {
    if (e !== xt) return !1;
    if (!Ne) return (jf(e), (Ne = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !oo(e.type, e.memoizedProps))),
      t && (t = wt))
    ) {
      if (_o(e)) throw (Df(), Error(i(418)));
      for (; t;) (zf(e, t), (t = wn(t.nextSibling)));
    }
    if ((jf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                wt = wn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        wt = null;
      }
    } else wt = xt ? wn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Df() {
    for (var e = wt; e;) e = wn(e.nextSibling);
  }
  function Tr() {
    ((wt = xt = null), (Ne = !1));
  }
  function vo(e) {
    Vt === null ? (Vt = [e]) : Vt.push(e);
  }
  var qh = B.ReactCurrentBatchConfig;
  function yi(e, t, n) {
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
  function Nl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function Lf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Af(e) {
    function t(T, S) {
      if (e) {
        var N = T.deletions;
        N === null ? ((T.deletions = [S]), (T.flags |= 16)) : N.push(S);
      }
    }
    function n(T, S) {
      if (!e) return null;
      for (; S !== null;) (t(T, S), (S = S.sibling));
      return null;
    }
    function l(T, S) {
      for (T = new Map(); S !== null;)
        (S.key !== null ? T.set(S.key, S) : T.set(S.index, S), (S = S.sibling));
      return T;
    }
    function u(T, S) {
      return ((T = Mn(T, S)), (T.index = 0), (T.sibling = null), T);
    }
    function a(T, S, N) {
      return (
        (T.index = N),
        e
          ? ((N = T.alternate),
            N !== null ? ((N = N.index), N < S ? ((T.flags |= 2), S) : N) : ((T.flags |= 2), S))
          : ((T.flags |= 1048576), S)
      );
    }
    function h(T) {
      return (e && T.alternate === null && (T.flags |= 2), T);
    }
    function v(T, S, N, $) {
      return S === null || S.tag !== 6
        ? ((S = au(N, T.mode, $)), (S.return = T), S)
        : ((S = u(S, N)), (S.return = T), S);
    }
    function w(T, S, N, $) {
      var J = N.type;
      return J === A
        ? U(T, S, N.props.children, $, N.key)
        : S !== null &&
            (S.elementType === J ||
              (typeof J == "object" && J !== null && J.$$typeof === de && Lf(J) === S.type))
          ? (($ = u(S, N.props)), ($.ref = yi(T, S, N)), ($.return = T), $)
          : (($ = Jl(N.type, N.key, N.props, null, T.mode, $)),
            ($.ref = yi(T, S, N)),
            ($.return = T),
            $);
    }
    function z(T, S, N, $) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== N.containerInfo ||
        S.stateNode.implementation !== N.implementation
        ? ((S = fu(N, T.mode, $)), (S.return = T), S)
        : ((S = u(S, N.children || [])), (S.return = T), S);
    }
    function U(T, S, N, $, J) {
      return S === null || S.tag !== 7
        ? ((S = tr(N, T.mode, $, J)), (S.return = T), S)
        : ((S = u(S, N)), (S.return = T), S);
    }
    function W(T, S, N) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return ((S = au("" + S, T.mode, N)), (S.return = T), S);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case M:
            return (
              (N = Jl(S.type, S.key, S.props, null, T.mode, N)),
              (N.ref = yi(T, null, S)),
              (N.return = T),
              N
            );
          case Y:
            return ((S = fu(S, T.mode, N)), (S.return = T), S);
          case de:
            var $ = S._init;
            return W(T, $(S._payload), N);
        }
        if (Gr(S) || b(S)) return ((S = tr(S, T.mode, N, null)), (S.return = T), S);
        Nl(T, S);
      }
      return null;
    }
    function F(T, S, N, $) {
      var J = S !== null ? S.key : null;
      if ((typeof N == "string" && N !== "") || typeof N == "number")
        return J !== null ? null : v(T, S, "" + N, $);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case M:
            return N.key === J ? w(T, S, N, $) : null;
          case Y:
            return N.key === J ? z(T, S, N, $) : null;
          case de:
            return ((J = N._init), F(T, S, J(N._payload), $));
        }
        if (Gr(N) || b(N)) return J !== null ? null : U(T, S, N, $, null);
        Nl(T, N);
      }
      return null;
    }
    function G(T, S, N, $, J) {
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
        return ((T = T.get(N) || null), v(S, T, "" + $, J));
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case M:
            return ((T = T.get($.key === null ? N : $.key) || null), w(S, T, $, J));
          case Y:
            return ((T = T.get($.key === null ? N : $.key) || null), z(S, T, $, J));
          case de:
            var te = $._init;
            return G(T, S, N, te($._payload), J);
        }
        if (Gr($) || b($)) return ((T = T.get(N) || null), U(S, T, $, J, null));
        Nl(S, $);
      }
      return null;
    }
    function q(T, S, N, $) {
      for (
        var J = null, te = null, ne = S, ie = (S = 0), Ye = null;
        ne !== null && ie < N.length;
        ie++
      ) {
        ne.index > ie ? ((Ye = ne), (ne = null)) : (Ye = ne.sibling);
        var ge = F(T, ne, N[ie], $);
        if (ge === null) {
          ne === null && (ne = Ye);
          break;
        }
        (e && ne && ge.alternate === null && t(T, ne),
          (S = a(ge, S, ie)),
          te === null ? (J = ge) : (te.sibling = ge),
          (te = ge),
          (ne = Ye));
      }
      if (ie === N.length) return (n(T, ne), Ne && Xn(T, ie), J);
      if (ne === null) {
        for (; ie < N.length; ie++)
          ((ne = W(T, N[ie], $)),
            ne !== null &&
              ((S = a(ne, S, ie)), te === null ? (J = ne) : (te.sibling = ne), (te = ne)));
        return (Ne && Xn(T, ie), J);
      }
      for (ne = l(T, ne); ie < N.length; ie++)
        ((Ye = G(ne, T, ie, N[ie], $)),
          Ye !== null &&
            (e && Ye.alternate !== null && ne.delete(Ye.key === null ? ie : Ye.key),
            (S = a(Ye, S, ie)),
            te === null ? (J = Ye) : (te.sibling = Ye),
            (te = Ye)));
      return (
        e &&
          ne.forEach(function (jn) {
            return t(T, jn);
          }),
        Ne && Xn(T, ie),
        J
      );
    }
    function Z(T, S, N, $) {
      var J = b(N);
      if (typeof J != "function") throw Error(i(150));
      if (((N = J.call(N)), N == null)) throw Error(i(151));
      for (
        var te = (J = null), ne = S, ie = (S = 0), Ye = null, ge = N.next();
        ne !== null && !ge.done;
        ie++, ge = N.next()
      ) {
        ne.index > ie ? ((Ye = ne), (ne = null)) : (Ye = ne.sibling);
        var jn = F(T, ne, ge.value, $);
        if (jn === null) {
          ne === null && (ne = Ye);
          break;
        }
        (e && ne && jn.alternate === null && t(T, ne),
          (S = a(jn, S, ie)),
          te === null ? (J = jn) : (te.sibling = jn),
          (te = jn),
          (ne = Ye));
      }
      if (ge.done) return (n(T, ne), Ne && Xn(T, ie), J);
      if (ne === null) {
        for (; !ge.done; ie++, ge = N.next())
          ((ge = W(T, ge.value, $)),
            ge !== null &&
              ((S = a(ge, S, ie)), te === null ? (J = ge) : (te.sibling = ge), (te = ge)));
        return (Ne && Xn(T, ie), J);
      }
      for (ne = l(T, ne); !ge.done; ie++, ge = N.next())
        ((ge = G(ne, T, ie, ge.value, $)),
          ge !== null &&
            (e && ge.alternate !== null && ne.delete(ge.key === null ? ie : ge.key),
            (S = a(ge, S, ie)),
            te === null ? (J = ge) : (te.sibling = ge),
            (te = ge)));
      return (
        e &&
          ne.forEach(function (Om) {
            return t(T, Om);
          }),
        Ne && Xn(T, ie),
        J
      );
    }
    function Ie(T, S, N, $) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === A &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case M:
            e: {
              for (var J = N.key, te = S; te !== null;) {
                if (te.key === J) {
                  if (((J = N.type), J === A)) {
                    if (te.tag === 7) {
                      (n(T, te.sibling), (S = u(te, N.props.children)), (S.return = T), (T = S));
                      break e;
                    }
                  } else if (
                    te.elementType === J ||
                    (typeof J == "object" && J !== null && J.$$typeof === de && Lf(J) === te.type)
                  ) {
                    (n(T, te.sibling),
                      (S = u(te, N.props)),
                      (S.ref = yi(T, te, N)),
                      (S.return = T),
                      (T = S));
                    break e;
                  }
                  n(T, te);
                  break;
                } else t(T, te);
                te = te.sibling;
              }
              N.type === A
                ? ((S = tr(N.props.children, T.mode, $, N.key)), (S.return = T), (T = S))
                : (($ = Jl(N.type, N.key, N.props, null, T.mode, $)),
                  ($.ref = yi(T, S, N)),
                  ($.return = T),
                  (T = $));
            }
            return h(T);
          case Y:
            e: {
              for (te = N.key; S !== null;) {
                if (S.key === te)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === N.containerInfo &&
                    S.stateNode.implementation === N.implementation
                  ) {
                    (n(T, S.sibling), (S = u(S, N.children || [])), (S.return = T), (T = S));
                    break e;
                  } else {
                    n(T, S);
                    break;
                  }
                else t(T, S);
                S = S.sibling;
              }
              ((S = fu(N, T.mode, $)), (S.return = T), (T = S));
            }
            return h(T);
          case de:
            return ((te = N._init), Ie(T, S, te(N._payload), $));
        }
        if (Gr(N)) return q(T, S, N, $);
        if (b(N)) return Z(T, S, N, $);
        Nl(T, N);
      }
      return (typeof N == "string" && N !== "") || typeof N == "number"
        ? ((N = "" + N),
          S !== null && S.tag === 6
            ? (n(T, S.sibling), (S = u(S, N)), (S.return = T), (T = S))
            : (n(T, S), (S = au(N, T.mode, $)), (S.return = T), (T = S)),
          h(T))
        : n(T, S);
    }
    return Ie;
  }
  var Pr = Af(!0),
    Ff = Af(!1),
    Ol = Sn(null),
    Rl = null,
    Nr = null,
    yo = null;
  function xo() {
    yo = Nr = Rl = null;
  }
  function wo(e) {
    var t = Ol.current;
    (Te(Ol), (e._currentValue = t));
  }
  function So(e, t, n) {
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
  function Or(e, t) {
    ((Rl = e),
      (yo = Nr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (ut = !0), (e.firstContext = null)));
  }
  function Mt(e) {
    var t = e._currentValue;
    if (yo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Nr === null)) {
        if (Rl === null) throw Error(i(308));
        ((Nr = e), (Rl.dependencies = { lanes: 0, firstContext: e }));
      } else Nr = Nr.next = e;
    return t;
  }
  var Gn = null;
  function ko(e) {
    Gn === null ? (Gn = [e]) : Gn.push(e);
  }
  function If(e, t, n, l) {
    var u = t.interleaved;
    return (
      u === null ? ((n.next = n), ko(t)) : ((n.next = u.next), (u.next = n)),
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
  function Co(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Uf(e, t) {
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
  function un(e, t) {
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
      u === null ? ((t.next = t), ko(l)) : ((t.next = u.next), (u.next = t)),
      (l.interleaved = t),
      on(e, n)
    );
  }
  function zl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Fs(e, n));
    }
  }
  function Bf(e, t) {
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
  function Ml(e, t, n, l) {
    var u = e.updateQueue;
    En = !1;
    var a = u.firstBaseUpdate,
      h = u.lastBaseUpdate,
      v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var w = v,
        z = w.next;
      ((w.next = null), h === null ? (a = z) : (h.next = z), (h = w));
      var U = e.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (v = U.lastBaseUpdate),
        v !== h && (v === null ? (U.firstBaseUpdate = z) : (v.next = z), (U.lastBaseUpdate = w)));
    }
    if (a !== null) {
      var W = u.baseState;
      ((h = 0), (U = z = w = null), (v = a));
      do {
        var F = v.lane,
          G = v.eventTime;
        if ((l & F) === F) {
          U !== null &&
            (U = U.next =
              {
                eventTime: G,
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null,
              });
          e: {
            var q = e,
              Z = v;
            switch (((F = t), (G = n), Z.tag)) {
              case 1:
                if (((q = Z.payload), typeof q == "function")) {
                  W = q.call(G, W, F);
                  break e;
                }
                W = q;
                break e;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (
                  ((q = Z.payload), (F = typeof q == "function" ? q.call(G, W, F) : q), F == null)
                )
                  break e;
                W = X({}, W, F);
                break e;
              case 2:
                En = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64), (F = u.effects), F === null ? (u.effects = [v]) : F.push(v));
        } else
          ((G = {
            eventTime: G,
            lane: F,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            U === null ? ((z = U = G), (w = W)) : (U = U.next = G),
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
        (U === null && (w = W),
        (u.baseState = w),
        (u.firstBaseUpdate = z),
        (u.lastBaseUpdate = U),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do ((h |= u.lane), (u = u.next));
        while (u !== t);
      } else a === null && (u.shared.lanes = 0);
      ((Zn |= h), (e.lanes = h), (e.memoizedState = W));
    }
  }
  function Vf(e, t, n) {
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
  var xi = {},
    Kt = Sn(xi),
    wi = Sn(xi),
    Si = Sn(xi);
  function Kn(e) {
    if (e === xi) throw Error(i(174));
    return e;
  }
  function Eo(e, t) {
    switch ((Ce(Si, t), Ce(wi, e), Ce(Kt, xi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Es(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Es(t, e)));
    }
    (Te(Kt), Ce(Kt, t));
  }
  function Rr() {
    (Te(Kt), Te(wi), Te(Si));
  }
  function Wf(e) {
    Kn(Si.current);
    var t = Kn(Kt.current),
      n = Es(t, e.type);
    t !== n && (Ce(wi, e), Ce(Kt, n));
  }
  function To(e) {
    wi.current === e && (Te(Kt), Te(wi));
  }
  var Re = Sn(0);
  function jl(e) {
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
  var Po = [];
  function No() {
    for (var e = 0; e < Po.length; e++) Po[e]._workInProgressVersionPrimary = null;
    Po.length = 0;
  }
  var Dl = B.ReactCurrentDispatcher,
    Oo = B.ReactCurrentBatchConfig,
    qn = 0,
    ze = null,
    We = null,
    He = null,
    Ll = !1,
    ki = !1,
    Ci = 0,
    Zh = 0;
  function be() {
    throw Error(i(321));
  }
  function Ro(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function zo(e, t, n, l, u, a) {
    if (
      ((qn = a),
      (ze = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Dl.current = e === null || e.memoizedState === null ? tm : nm),
      (e = n(l, u)),
      ki)
    ) {
      a = 0;
      do {
        if (((ki = !1), (Ci = 0), 25 <= a)) throw Error(i(301));
        ((a += 1), (He = We = null), (t.updateQueue = null), (Dl.current = rm), (e = n(l, u)));
      } while (ki);
    }
    if (
      ((Dl.current = Il),
      (t = We !== null && We.next !== null),
      (qn = 0),
      (He = We = ze = null),
      (Ll = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function Mo() {
    var e = Ci !== 0;
    return ((Ci = 0), e);
  }
  function qt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (He === null ? (ze.memoizedState = He = e) : (He = He.next = e), He);
  }
  function jt() {
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
  function Ei(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function jo(e) {
    var t = jt(),
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
        z = a;
      do {
        var U = z.lane;
        if ((qn & U) === U)
          (w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: z.action,
                hasEagerState: z.hasEagerState,
                eagerState: z.eagerState,
                next: null,
              }),
            (l = z.hasEagerState ? z.eagerState : e(l, z.action)));
        else {
          var W = {
            lane: U,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          };
          (w === null ? ((v = w = W), (h = l)) : (w = w.next = W), (ze.lanes |= U), (Zn |= U));
        }
        z = z.next;
      } while (z !== null && z !== a);
      (w === null ? (h = l) : (w.next = v),
        Bt(l, t.memoizedState) || (ut = !0),
        (t.memoizedState = l),
        (t.baseState = h),
        (t.baseQueue = w),
        (n.lastRenderedState = l));
    }
    if (((e = n.interleaved), e !== null)) {
      u = e;
      do ((a = u.lane), (ze.lanes |= a), (Zn |= a), (u = u.next));
      while (u !== e);
    } else u === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Do(e) {
    var t = jt(),
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
      (Bt(a, t.memoizedState) || (ut = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (n.lastRenderedState = a));
    }
    return [a, l];
  }
  function $f() {}
  function Hf(e, t) {
    var n = ze,
      l = jt(),
      u = t(),
      a = !Bt(l.memoizedState, u);
    if (
      (a && ((l.memoizedState = u), (ut = !0)),
      (l = l.queue),
      Lo(Xf.bind(null, n, l, e), [e]),
      l.getSnapshot !== t || a || (He !== null && He.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Ti(9, Yf.bind(null, n, l, u, t), void 0, null), Qe === null))
        throw Error(i(349));
      (qn & 30) !== 0 || Qf(n, t, u);
    }
    return u;
  }
  function Qf(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ze.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ze.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Yf(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), Gf(t) && Kf(e));
  }
  function Xf(e, t, n) {
    return n(function () {
      Gf(t) && Kf(e);
    });
  }
  function Gf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Bt(e, n);
    } catch {
      return !0;
    }
  }
  function Kf(e) {
    var t = on(e, 1);
    t !== null && Qt(t, e, 1, -1);
  }
  function qf(e) {
    var t = qt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ei,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = em.bind(null, ze, e)),
      [t.memoizedState, e]
    );
  }
  function Ti(e, t, n, l) {
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
  function Zf() {
    return jt().memoizedState;
  }
  function Al(e, t, n, l) {
    var u = qt();
    ((ze.flags |= e), (u.memoizedState = Ti(1 | t, n, void 0, l === void 0 ? null : l)));
  }
  function Fl(e, t, n, l) {
    var u = jt();
    l = l === void 0 ? null : l;
    var a = void 0;
    if (We !== null) {
      var h = We.memoizedState;
      if (((a = h.destroy), l !== null && Ro(l, h.deps))) {
        u.memoizedState = Ti(t, n, a, l);
        return;
      }
    }
    ((ze.flags |= e), (u.memoizedState = Ti(1 | t, n, a, l)));
  }
  function Jf(e, t) {
    return Al(8390656, 8, e, t);
  }
  function Lo(e, t) {
    return Fl(2048, 8, e, t);
  }
  function bf(e, t) {
    return Fl(4, 2, e, t);
  }
  function ec(e, t) {
    return Fl(4, 4, e, t);
  }
  function tc(e, t) {
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
  function nc(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), Fl(4, 4, tc.bind(null, t, e), n));
  }
  function Ao() {}
  function rc(e, t) {
    var n = jt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return l !== null && t !== null && Ro(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function ic(e, t) {
    var n = jt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return l !== null && t !== null && Ro(t, l[1])
      ? l[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function lc(e, t, n) {
    return (qn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = n))
      : (Bt(n, t) || ((n = Da()), (ze.lanes |= n), (Zn |= n), (e.baseState = !0)), t);
  }
  function Jh(e, t) {
    var n = xe;
    ((xe = n !== 0 && 4 > n ? n : 4), e(!0));
    var l = Oo.transition;
    Oo.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((xe = n), (Oo.transition = l));
    }
  }
  function sc() {
    return jt().memoizedState;
  }
  function bh(e, t, n) {
    var l = Rn(e);
    if (((n = { lane: l, action: n, hasEagerState: !1, eagerState: null, next: null }), oc(e)))
      uc(t, n);
    else if (((n = If(e, t, n, l)), n !== null)) {
      var u = lt();
      (Qt(n, e, l, u), ac(n, t, l));
    }
  }
  function em(e, t, n) {
    var l = Rn(e),
      u = { lane: l, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (oc(e)) uc(t, u);
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
          if (((u.hasEagerState = !0), (u.eagerState = v), Bt(v, h))) {
            var w = t.interleaved;
            (w === null ? ((u.next = u), ko(t)) : ((u.next = w.next), (w.next = u)),
              (t.interleaved = u));
            return;
          }
        } catch {
        } finally {
        }
      ((n = If(e, t, u, l)), n !== null && ((u = lt()), Qt(n, e, l, u), ac(n, t, l)));
    }
  }
  function oc(e) {
    var t = e.alternate;
    return e === ze || (t !== null && t === ze);
  }
  function uc(e, t) {
    ki = Ll = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function ac(e, t, n) {
    if ((n & 4194240) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Fs(e, n));
    }
  }
  var Il = {
      readContext: Mt,
      useCallback: be,
      useContext: be,
      useEffect: be,
      useImperativeHandle: be,
      useInsertionEffect: be,
      useLayoutEffect: be,
      useMemo: be,
      useReducer: be,
      useRef: be,
      useState: be,
      useDebugValue: be,
      useDeferredValue: be,
      useTransition: be,
      useMutableSource: be,
      useSyncExternalStore: be,
      useId: be,
      unstable_isNewReconciler: !1,
    },
    tm = {
      readContext: Mt,
      useCallback: function (e, t) {
        return ((qt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Mt,
      useEffect: Jf,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Al(4194308, 4, tc.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Al(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Al(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = qt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var l = qt();
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
          (e = e.dispatch = bh.bind(null, ze, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = qt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: qf,
      useDebugValue: Ao,
      useDeferredValue: function (e) {
        return (qt().memoizedState = e);
      },
      useTransition: function () {
        var e = qf(!1),
          t = e[0];
        return ((e = Jh.bind(null, e[1])), (qt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var l = ze,
          u = qt();
        if (Ne) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = t()), Qe === null)) throw Error(i(349));
          (qn & 30) !== 0 || Qf(l, t, n);
        }
        u.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (u.queue = a),
          Jf(Xf.bind(null, l, a, e), [e]),
          (l.flags |= 2048),
          Ti(9, Yf.bind(null, l, a, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = qt(),
          t = Qe.identifierPrefix;
        if (Ne) {
          var n = sn,
            l = ln;
          ((n = (l & ~(1 << (32 - Ut(l) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Ci++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Zh++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    nm = {
      readContext: Mt,
      useCallback: rc,
      useContext: Mt,
      useEffect: Lo,
      useImperativeHandle: nc,
      useInsertionEffect: bf,
      useLayoutEffect: ec,
      useMemo: ic,
      useReducer: jo,
      useRef: Zf,
      useState: function () {
        return jo(Ei);
      },
      useDebugValue: Ao,
      useDeferredValue: function (e) {
        var t = jt();
        return lc(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = jo(Ei)[0],
          t = jt().memoizedState;
        return [e, t];
      },
      useMutableSource: $f,
      useSyncExternalStore: Hf,
      useId: sc,
      unstable_isNewReconciler: !1,
    },
    rm = {
      readContext: Mt,
      useCallback: rc,
      useContext: Mt,
      useEffect: Lo,
      useImperativeHandle: nc,
      useInsertionEffect: bf,
      useLayoutEffect: ec,
      useMemo: ic,
      useReducer: Do,
      useRef: Zf,
      useState: function () {
        return Do(Ei);
      },
      useDebugValue: Ao,
      useDeferredValue: function (e) {
        var t = jt();
        return We === null ? (t.memoizedState = e) : lc(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = Do(Ei)[0],
          t = jt().memoizedState;
        return [e, t];
      },
      useMutableSource: $f,
      useSyncExternalStore: Hf,
      useId: sc,
      unstable_isNewReconciler: !1,
    };
  function Wt(e, t) {
    if (e && e.defaultProps) {
      ((t = X({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Fo(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : X({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Ul = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? $n(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = lt(),
        u = Rn(e),
        a = un(l, u);
      ((a.payload = t),
        n != null && (a.callback = n),
        (t = Tn(e, a, u)),
        t !== null && (Qt(t, e, u, l), zl(t, e, u)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = lt(),
        u = Rn(e),
        a = un(l, u);
      ((a.tag = 1),
        (a.payload = t),
        n != null && (a.callback = n),
        (t = Tn(e, a, u)),
        t !== null && (Qt(t, e, u, l), zl(t, e, u)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = lt(),
        l = Rn(e),
        u = un(n, l);
      ((u.tag = 2),
        t != null && (u.callback = t),
        (t = Tn(e, u, l)),
        t !== null && (Qt(t, e, l, n), zl(t, e, l)));
    },
  };
  function fc(e, t, n, l, u, a, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, a, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !di(n, l) || !di(u, a)
          : !0
    );
  }
  function cc(e, t, n) {
    var l = !1,
      u = kn,
      a = t.contextType;
    return (
      typeof a == "object" && a !== null
        ? (a = Mt(a))
        : ((u = ot(t) ? Qn : Je.current),
          (l = t.contextTypes),
          (a = (l = l != null) ? kr(e, u) : kn)),
      (t = new t(n, a)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ul),
      (e.stateNode = t),
      (t._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
    );
  }
  function dc(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Ul.enqueueReplaceState(t, t.state, null));
  }
  function Io(e, t, n, l) {
    var u = e.stateNode;
    ((u.props = n), (u.state = e.memoizedState), (u.refs = {}), Co(e));
    var a = t.contextType;
    (typeof a == "object" && a !== null
      ? (u.context = Mt(a))
      : ((a = ot(t) ? Qn : Je.current), (u.context = kr(e, a))),
      (u.state = e.memoizedState),
      (a = t.getDerivedStateFromProps),
      typeof a == "function" && (Fo(e, t, a, n), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
        t !== u.state && Ul.enqueueReplaceState(u, u.state, null),
        Ml(e, n, u, l),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function zr(e, t) {
    try {
      var n = "",
        l = t;
      do ((n += oe(l)), (l = l.return));
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
  function Uo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Bo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var im = typeof WeakMap == "function" ? WeakMap : Map;
  function pc(e, t, n) {
    ((n = un(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var l = t.value;
    return (
      (n.callback = function () {
        (Yl || ((Yl = !0), (tu = l)), Bo(e, t));
      }),
      n
    );
  }
  function hc(e, t, n) {
    ((n = un(-1, n)), (n.tag = 3));
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = t.value;
      ((n.payload = function () {
        return l(u);
      }),
        (n.callback = function () {
          Bo(e, t);
        }));
    }
    var a = e.stateNode;
    return (
      a !== null &&
        typeof a.componentDidCatch == "function" &&
        (n.callback = function () {
          (Bo(e, t),
            typeof l != "function" && (Nn === null ? (Nn = new Set([this])) : Nn.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
        }),
      n
    );
  }
  function mc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new im();
      var u = new Set();
      l.set(t, u);
    } else ((u = l.get(t)), u === void 0 && ((u = new Set()), l.set(t, u)));
    u.has(n) || (u.add(n), (e = vm.bind(null, e, t, n)), t.then(e, e));
  }
  function _c(e) {
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
  function gc(e, t, n, l, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = un(-1, 1)), (t.tag = 2), Tn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var lm = B.ReactCurrentOwner,
    ut = !1;
  function it(e, t, n, l) {
    t.child = e === null ? Ff(t, null, n, l) : Pr(t, e.child, n, l);
  }
  function vc(e, t, n, l, u) {
    n = n.render;
    var a = t.ref;
    return (
      Or(t, u),
      (l = zo(e, t, n, l, a, u)),
      (n = Mo()),
      e !== null && !ut
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), an(e, t, u))
        : (Ne && n && ho(t), (t.flags |= 1), it(e, t, l, u), t.child)
    );
  }
  function yc(e, t, n, l, u) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" &&
        !uu(a) &&
        a.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = a), xc(e, t, a, l, u))
        : ((e = Jl(n.type, null, l, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((a = e.child), (e.lanes & u) === 0)) {
      var h = a.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : di), n(h, l) && e.ref === t.ref))
        return an(e, t, u);
    }
    return ((t.flags |= 1), (e = Mn(a, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function xc(e, t, n, l, u) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (di(a, l) && e.ref === t.ref)
        if (((ut = !1), (t.pendingProps = l = a), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (ut = !0);
        else return ((t.lanes = e.lanes), an(e, t, u));
    }
    return Vo(e, t, n, l, u);
  }
  function wc(e, t, n) {
    var l = t.pendingProps,
      u = l.children,
      a = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Ce(jr, St),
          (St |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = a !== null ? a.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Ce(jr, St),
            (St |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (l = a !== null ? a.baseLanes : n),
          Ce(jr, St),
          (St |= l));
      }
    else
      (a !== null ? ((l = a.baseLanes | n), (t.memoizedState = null)) : (l = n),
        Ce(jr, St),
        (St |= l));
    return (it(e, t, u, n), t.child);
  }
  function Sc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Vo(e, t, n, l, u) {
    var a = ot(n) ? Qn : Je.current;
    return (
      (a = kr(t, a)),
      Or(t, u),
      (n = zo(e, t, n, l, a, u)),
      (l = Mo()),
      e !== null && !ut
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), an(e, t, u))
        : (Ne && l && ho(t), (t.flags |= 1), it(e, t, n, u), t.child)
    );
  }
  function kc(e, t, n, l, u) {
    if (ot(n)) {
      var a = !0;
      kl(t);
    } else a = !1;
    if ((Or(t, u), t.stateNode === null)) (Vl(e, t), cc(t, n, l), Io(t, n, l, u), (l = !0));
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var w = h.context,
        z = n.contextType;
      typeof z == "object" && z !== null
        ? (z = Mt(z))
        : ((z = ot(n) ? Qn : Je.current), (z = kr(t, z)));
      var U = n.getDerivedStateFromProps,
        W = typeof U == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      (W ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== l || w !== z) && dc(t, h, l, z)),
        (En = !1));
      var F = t.memoizedState;
      ((h.state = F),
        Ml(t, l, h, u),
        (w = t.memoizedState),
        v !== l || F !== w || st.current || En
          ? (typeof U == "function" && (Fo(t, n, U, l), (w = t.memoizedState)),
            (v = En || fc(t, n, v, l, F, w, z))
              ? (W ||
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
            (h.context = z),
            (l = v))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), (l = !1)));
    } else {
      ((h = t.stateNode),
        Uf(e, t),
        (v = t.memoizedProps),
        (z = t.type === t.elementType ? v : Wt(t.type, v)),
        (h.props = z),
        (W = t.pendingProps),
        (F = h.context),
        (w = n.contextType),
        typeof w == "object" && w !== null
          ? (w = Mt(w))
          : ((w = ot(n) ? Qn : Je.current), (w = kr(t, w))));
      var G = n.getDerivedStateFromProps;
      ((U = typeof G == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== W || F !== w) && dc(t, h, l, w)),
        (En = !1),
        (F = t.memoizedState),
        (h.state = F),
        Ml(t, l, h, u));
      var q = t.memoizedState;
      v !== W || F !== q || st.current || En
        ? (typeof G == "function" && (Fo(t, n, G, l), (q = t.memoizedState)),
          (z = En || fc(t, n, z, l, F, q, w) || !1)
            ? (U ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(l, q, w),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(l, q, w)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (v === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = q)),
          (h.props = l),
          (h.state = q),
          (h.context = w),
          (l = z))
        : (typeof h.componentDidUpdate != "function" ||
            (v === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return Wo(e, t, n, l, a, u);
  }
  function Wo(e, t, n, l, u, a) {
    Sc(e, t);
    var h = (t.flags & 128) !== 0;
    if (!l && !h) return (u && Nf(t, n, !1), an(e, t, a));
    ((l = t.stateNode), (lm.current = t));
    var v = h && typeof n.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = Pr(t, e.child, null, a)), (t.child = Pr(t, null, v, a)))
        : it(e, t, v, a),
      (t.memoizedState = l.state),
      u && Nf(t, n, !0),
      t.child
    );
  }
  function Cc(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Tf(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Tf(e, t.context, !1),
      Eo(e, t.containerInfo));
  }
  function Ec(e, t, n, l, u) {
    return (Tr(), vo(u), (t.flags |= 256), it(e, t, n, l), t.child);
  }
  var $o = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ho(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Tc(e, t, n) {
    var l = t.pendingProps,
      u = Re.current,
      a = !1,
      h = (t.flags & 128) !== 0,
      v;
    if (
      ((v = h) || (v = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      v ? ((a = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (u |= 1),
      Ce(Re, u & 1),
      e === null)
    )
      return (
        go(t),
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
                  : (a = bl(h, l, 0, null)),
                (e = tr(e, l, n, null)),
                (a.return = t),
                (e.return = t),
                (a.sibling = e),
                (t.child = a),
                (t.child.memoizedState = Ho(n)),
                (t.memoizedState = $o),
                e)
              : Qo(t, h))
      );
    if (((u = e.memoizedState), u !== null && ((v = u.dehydrated), v !== null)))
      return sm(e, t, h, l, v, u, n);
    if (a) {
      ((a = l.fallback), (h = t.mode), (u = e.child), (v = u.sibling));
      var w = { mode: "hidden", children: l.children };
      return (
        (h & 1) === 0 && t.child !== u
          ? ((l = t.child), (l.childLanes = 0), (l.pendingProps = w), (t.deletions = null))
          : ((l = Mn(u, w)), (l.subtreeFlags = u.subtreeFlags & 14680064)),
        v !== null ? (a = Mn(v, a)) : ((a = tr(a, h, n, null)), (a.flags |= 2)),
        (a.return = t),
        (l.return = t),
        (l.sibling = a),
        (t.child = l),
        (l = a),
        (a = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? Ho(n)
            : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }),
        (a.memoizedState = h),
        (a.childLanes = e.childLanes & ~n),
        (t.memoizedState = $o),
        l
      );
    }
    return (
      (a = e.child),
      (e = a.sibling),
      (l = Mn(a, { mode: "visible", children: l.children })),
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
  function Qo(e, t) {
    return (
      (t = bl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Bl(e, t, n, l) {
    return (
      l !== null && vo(l),
      Pr(t, e.child, null, n),
      (e = Qo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function sm(e, t, n, l, u, a, h) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (l = Uo(Error(i(422)))), Bl(e, t, h, l))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((a = l.fallback),
            (u = t.mode),
            (l = bl({ mode: "visible", children: l.children }, u, 0, null)),
            (a = tr(a, u, h, null)),
            (a.flags |= 2),
            (l.return = t),
            (a.return = t),
            (l.sibling = a),
            (t.child = l),
            (t.mode & 1) !== 0 && Pr(t, e.child, null, h),
            (t.child.memoizedState = Ho(h)),
            (t.memoizedState = $o),
            a);
    if ((t.mode & 1) === 0) return Bl(e, t, h, null);
    if (u.data === "$!") {
      if (((l = u.nextSibling && u.nextSibling.dataset), l)) var v = l.dgst;
      return ((l = v), (a = Error(i(419))), (l = Uo(a, l, void 0)), Bl(e, t, h, l));
    }
    if (((v = (h & e.childLanes) !== 0), ut || v)) {
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
      return (ou(), (l = Uo(Error(i(421)))), Bl(e, t, h, l));
    }
    return u.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = ym.bind(null, e)), (u._reactRetry = t), null)
      : ((e = a.treeContext),
        (wt = wn(u.nextSibling)),
        (xt = t),
        (Ne = !0),
        (Vt = null),
        e !== null &&
          ((Rt[zt++] = ln),
          (Rt[zt++] = sn),
          (Rt[zt++] = Yn),
          (ln = e.id),
          (sn = e.overflow),
          (Yn = t)),
        (t = Qo(t, l.children)),
        (t.flags |= 4096),
        t);
  }
  function Pc(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), So(e.return, t, n));
  }
  function Yo(e, t, n, l, u) {
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
  function Nc(e, t, n) {
    var l = t.pendingProps,
      u = l.revealOrder,
      a = l.tail;
    if ((it(e, t, l.children, n), (l = Re.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Pc(e, n, t);
          else if (e.tag === 19) Pc(e, n, t);
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
    if ((Ce(Re, l), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (n = t.child, u = null; n !== null;)
            ((e = n.alternate), e !== null && jl(e) === null && (u = n), (n = n.sibling));
          ((n = u),
            n === null ? ((u = t.child), (t.child = null)) : ((u = n.sibling), (n.sibling = null)),
            Yo(t, !1, u, n, a));
          break;
        case "backwards":
          for (n = null, u = t.child, t.child = null; u !== null;) {
            if (((e = u.alternate), e !== null && jl(e) === null)) {
              t.child = u;
              break;
            }
            ((e = u.sibling), (u.sibling = n), (n = u), (u = e));
          }
          Yo(t, !0, n, null, a);
          break;
        case "together":
          Yo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Vl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function an(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Zn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        ((e = e.sibling), (n = n.sibling = Mn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function om(e, t, n) {
    switch (t.tag) {
      case 3:
        (Cc(t), Tr());
        break;
      case 5:
        Wf(t);
        break;
      case 1:
        ot(t.type) && kl(t);
        break;
      case 4:
        Eo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context,
          u = t.memoizedProps.value;
        (Ce(Ol, l._currentValue), (l._currentValue = u));
        break;
      case 13:
        if (((l = t.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Ce(Re, Re.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Tc(e, t, n)
              : (Ce(Re, Re.current & 1), (e = an(e, t, n)), e !== null ? e.sibling : null);
        Ce(Re, Re.current & 1);
        break;
      case 19:
        if (((l = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return Nc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ce(Re, Re.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), wc(e, t, n));
    }
    return an(e, t, n);
  }
  var Oc, Xo, Rc, zc;
  ((Oc = function (e, t) {
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
    (Xo = function () {}),
    (Rc = function (e, t, n, l) {
      var u = e.memoizedProps;
      if (u !== l) {
        ((e = t.stateNode), Kn(Kt.current));
        var a = null;
        switch (n) {
          case "input":
            ((u = ws(e, u)), (l = ws(e, l)), (a = []));
            break;
          case "select":
            ((u = X({}, u, { value: void 0 })), (l = X({}, l, { value: void 0 })), (a = []));
            break;
          case "textarea":
            ((u = Cs(e, u)), (l = Cs(e, l)), (a = []));
            break;
          default:
            typeof u.onClick != "function" && typeof l.onClick == "function" && (e.onclick = xl);
        }
        Ts(n, l);
        var h;
        n = null;
        for (z in u)
          if (!l.hasOwnProperty(z) && u.hasOwnProperty(z) && u[z] != null)
            if (z === "style") {
              var v = u[z];
              for (h in v) v.hasOwnProperty(h) && (n || (n = {}), (n[h] = ""));
            } else
              z !== "dangerouslySetInnerHTML" &&
                z !== "children" &&
                z !== "suppressContentEditableWarning" &&
                z !== "suppressHydrationWarning" &&
                z !== "autoFocus" &&
                (o.hasOwnProperty(z) ? a || (a = []) : (a = a || []).push(z, null));
        for (z in l) {
          var w = l[z];
          if (
            ((v = u != null ? u[z] : void 0),
            l.hasOwnProperty(z) && w !== v && (w != null || v != null))
          )
            if (z === "style")
              if (v) {
                for (h in v)
                  !v.hasOwnProperty(h) ||
                    (w && w.hasOwnProperty(h)) ||
                    (n || (n = {}), (n[h] = ""));
                for (h in w) w.hasOwnProperty(h) && v[h] !== w[h] && (n || (n = {}), (n[h] = w[h]));
              } else (n || (a || (a = []), a.push(z, n)), (n = w));
            else
              z === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (v = v ? v.__html : void 0),
                  w != null && v !== w && (a = a || []).push(z, w))
                : z === "children"
                  ? (typeof w != "string" && typeof w != "number") || (a = a || []).push(z, "" + w)
                  : z !== "suppressContentEditableWarning" &&
                    z !== "suppressHydrationWarning" &&
                    (o.hasOwnProperty(z)
                      ? (w != null && z === "onScroll" && Ee("scroll", e), a || v === w || (a = []))
                      : (a = a || []).push(z, w));
        }
        n && (a = a || []).push("style", n);
        var z = a;
        (t.updateQueue = z) && (t.flags |= 4);
      }
    }),
    (zc = function (e, t, n, l) {
      n !== l && (t.flags |= 4);
    }));
  function Pi(e, t) {
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
  function et(e) {
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
  function um(e, t, n) {
    var l = t.pendingProps;
    switch ((mo(t), t.tag)) {
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
        return (ot(t.type) && Sl(), et(t), null);
      case 3:
        return (
          (l = t.stateNode),
          Rr(),
          Te(st),
          Te(Je),
          No(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Pl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Vt !== null && (iu(Vt), (Vt = null)))),
          Xo(e, t),
          et(t),
          null
        );
      case 5:
        To(t);
        var u = Kn(Si.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Rc(e, t, n, l, u), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return (et(t), null);
          }
          if (((e = Kn(Kt.current)), Pl(t))) {
            ((l = t.stateNode), (n = t.type));
            var a = t.memoizedProps;
            switch (((l[Gt] = t), (l[gi] = a), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (Ee("cancel", l), Ee("close", l));
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", l);
                break;
              case "video":
              case "audio":
                for (u = 0; u < hi.length; u++) Ee(hi[u], l);
                break;
              case "source":
                Ee("error", l);
                break;
              case "img":
              case "image":
              case "link":
                (Ee("error", l), Ee("load", l));
                break;
              case "details":
                Ee("toggle", l);
                break;
              case "input":
                (fa(l, a), Ee("invalid", l));
                break;
              case "select":
                ((l._wrapperState = { wasMultiple: !!a.multiple }), Ee("invalid", l));
                break;
              case "textarea":
                (pa(l, a), Ee("invalid", l));
            }
            (Ts(n, a), (u = null));
            for (var h in a)
              if (a.hasOwnProperty(h)) {
                var v = a[h];
                h === "children"
                  ? typeof v == "string"
                    ? l.textContent !== v &&
                      (a.suppressHydrationWarning !== !0 && yl(l.textContent, v, e),
                      (u = ["children", v]))
                    : typeof v == "number" &&
                      l.textContent !== "" + v &&
                      (a.suppressHydrationWarning !== !0 && yl(l.textContent, v, e),
                      (u = ["children", "" + v]))
                  : o.hasOwnProperty(h) && v != null && h === "onScroll" && Ee("scroll", l);
              }
            switch (n) {
              case "input":
                (qi(l), da(l, a, !0));
                break;
              case "textarea":
                (qi(l), ma(l));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (l.onclick = xl);
            }
            ((l = u), (t.updateQueue = l), l !== null && (t.flags |= 4));
          } else {
            ((h = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = _a(n)),
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
              (e[Gt] = t),
              (e[gi] = l),
              Oc(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = Ps(n, l)), n)) {
                case "dialog":
                  (Ee("cancel", e), Ee("close", e), (u = l));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Ee("load", e), (u = l));
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < hi.length; u++) Ee(hi[u], e);
                  u = l;
                  break;
                case "source":
                  (Ee("error", e), (u = l));
                  break;
                case "img":
                case "image":
                case "link":
                  (Ee("error", e), Ee("load", e), (u = l));
                  break;
                case "details":
                  (Ee("toggle", e), (u = l));
                  break;
                case "input":
                  (fa(e, l), (u = ws(e, l)), Ee("invalid", e));
                  break;
                case "option":
                  u = l;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!l.multiple }),
                    (u = X({}, l, { value: void 0 })),
                    Ee("invalid", e));
                  break;
                case "textarea":
                  (pa(e, l), (u = Cs(e, l)), Ee("invalid", e));
                  break;
                default:
                  u = l;
              }
              (Ts(n, u), (v = u));
              for (a in v)
                if (v.hasOwnProperty(a)) {
                  var w = v[a];
                  a === "style"
                    ? ya(e, w)
                    : a === "dangerouslySetInnerHTML"
                      ? ((w = w ? w.__html : void 0), w != null && ga(e, w))
                      : a === "children"
                        ? typeof w == "string"
                          ? (n !== "textarea" || w !== "") && Kr(e, w)
                          : typeof w == "number" && Kr(e, "" + w)
                        : a !== "suppressContentEditableWarning" &&
                          a !== "suppressHydrationWarning" &&
                          a !== "autoFocus" &&
                          (o.hasOwnProperty(a)
                            ? w != null && a === "onScroll" && Ee("scroll", e)
                            : w != null && I(e, a, w, h));
                }
              switch (n) {
                case "input":
                  (qi(e), da(e, l, !1));
                  break;
                case "textarea":
                  (qi(e), ma(e));
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + ye(l.value));
                  break;
                case "select":
                  ((e.multiple = !!l.multiple),
                    (a = l.value),
                    a != null
                      ? cr(e, !!l.multiple, a, !1)
                      : l.defaultValue != null && cr(e, !!l.multiple, l.defaultValue, !0));
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = xl);
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
        return (et(t), null);
      case 6:
        if (e && t.stateNode != null) zc(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(i(166));
          if (((n = Kn(Si.current)), Kn(Kt.current), Pl(t))) {
            if (
              ((l = t.stateNode),
              (n = t.memoizedProps),
              (l[Gt] = t),
              (a = l.nodeValue !== n) && ((e = xt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  yl(l.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    yl(l.nodeValue, n, (e.mode & 1) !== 0);
              }
            a && (t.flags |= 4);
          } else
            ((l = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(l)),
              (l[Gt] = t),
              (t.stateNode = l));
        }
        return (et(t), null);
      case 13:
        if (
          (Te(Re),
          (l = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ne && wt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Df(), Tr(), (t.flags |= 98560), (a = !1));
          else if (((a = Pl(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(i(318));
              if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
                throw Error(i(317));
              a[Gt] = t;
            } else (Tr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (et(t), (a = !1));
          } else (Vt !== null && (iu(Vt), (Vt = null)), (a = !0));
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Re.current & 1) !== 0 ? $e === 0 && ($e = 3) : ou())),
            t.updateQueue !== null && (t.flags |= 4),
            et(t),
            null);
      case 4:
        return (Rr(), Xo(e, t), e === null && mi(t.stateNode.containerInfo), et(t), null);
      case 10:
        return (wo(t.type._context), et(t), null);
      case 17:
        return (ot(t.type) && Sl(), et(t), null);
      case 19:
        if ((Te(Re), (a = t.memoizedState), a === null)) return (et(t), null);
        if (((l = (t.flags & 128) !== 0), (h = a.rendering), h === null))
          if (l) Pi(a, !1);
          else {
            if ($e !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((h = jl(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      Pi(a, !1),
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
                  return (Ce(Re, (Re.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              Fe() > Dr &&
              ((t.flags |= 128), (l = !0), Pi(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = jl(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Pi(a, !0),
                a.tail === null && a.tailMode === "hidden" && !h.alternate && !Ne)
              )
                return (et(t), null);
            } else
              2 * Fe() - a.renderingStartTime > Dr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (l = !0), Pi(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((n = a.last), n !== null ? (n.sibling = h) : (t.child = h), (a.last = h));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = Fe()),
            (t.sibling = null),
            (n = Re.current),
            Ce(Re, l ? (n & 1) | 2 : n & 1),
            t)
          : (et(t), null);
      case 22:
      case 23:
        return (
          su(),
          (l = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
          l && (t.mode & 1) !== 0
            ? (St & 1073741824) !== 0 && (et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : et(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function am(e, t) {
    switch ((mo(t), t.tag)) {
      case 1:
        return (
          ot(t.type) && Sl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Rr(),
          Te(st),
          Te(Je),
          No(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (To(t), null);
      case 13:
        if ((Te(Re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(i(340));
          Tr();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Te(Re), null);
      case 4:
        return (Rr(), null);
      case 10:
        return (wo(t.type._context), null);
      case 22:
      case 23:
        return (su(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wl = !1,
    tt = !1,
    fm = typeof WeakSet == "function" ? WeakSet : Set,
    K = null;
  function Mr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Le(e, t, l);
        }
      else n.current = null;
  }
  function Go(e, t, n) {
    try {
      n();
    } catch (l) {
      Le(e, t, l);
    }
  }
  var Mc = !1;
  function cm(e, t) {
    if (((lo = ul), (e = ff()), Zs(e))) {
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
              z = 0,
              U = 0,
              W = e,
              F = null;
            t: for (;;) {
              for (
                var G;
                W !== n || (u !== 0 && W.nodeType !== 3) || (v = h + u),
                  W !== a || (l !== 0 && W.nodeType !== 3) || (w = h + l),
                  W.nodeType === 3 && (h += W.nodeValue.length),
                  (G = W.firstChild) !== null;
              )
                ((F = W), (W = G));
              for (;;) {
                if (W === e) break t;
                if (
                  (F === n && ++z === u && (v = h),
                  F === a && ++U === l && (w = h),
                  (G = W.nextSibling) !== null)
                )
                  break;
                ((W = F), (F = W.parentNode));
              }
              W = G;
            }
            n = v === -1 || w === -1 ? null : { start: v, end: w };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (so = { focusedElem: e, selectionRange: n }, ul = !1, K = t; K !== null;)
      if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (K = e));
      else
        for (; K !== null;) {
          t = K;
          try {
            var q = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (q !== null) {
                    var Z = q.memoizedProps,
                      Ie = q.memoizedState,
                      T = t.stateNode,
                      S = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Z : Wt(t.type, Z),
                        Ie,
                      );
                    T.__reactInternalSnapshotBeforeUpdate = S;
                  }
                  break;
                case 3:
                  var N = t.stateNode.containerInfo;
                  N.nodeType === 1
                    ? (N.textContent = "")
                    : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch ($) {
            Le(t, t.return, $);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (K = e));
            break;
          }
          K = t.return;
        }
    return ((q = Mc), (Mc = !1), q);
  }
  function Ni(e, t, n) {
    var l = t.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var u = (l = l.next);
      do {
        if ((u.tag & e) === e) {
          var a = u.destroy;
          ((u.destroy = void 0), a !== void 0 && Go(t, n, a));
        }
        u = u.next;
      } while (u !== l);
    }
  }
  function $l(e, t) {
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
  function Ko(e) {
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
  function jc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), jc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Gt], delete t[gi], delete t[fo], delete t[Xh], delete t[Gh])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Dc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Lc(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Dc(e.return)) return null;
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
  function qo(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = xl)));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (qo(e, t, n), e = e.sibling; e !== null;) (qo(e, t, n), (e = e.sibling));
  }
  function Zo(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (Zo(e, t, n), e = e.sibling; e !== null;) (Zo(e, t, n), (e = e.sibling));
  }
  var Ge = null,
    $t = !1;
  function Pn(e, t, n) {
    for (n = n.child; n !== null;) (Ac(e, t, n), (n = n.sibling));
  }
  function Ac(e, t, n) {
    if (Xt && typeof Xt.onCommitFiberUnmount == "function")
      try {
        Xt.onCommitFiberUnmount(nl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        tt || Mr(n, t);
      case 6:
        var l = Ge,
          u = $t;
        ((Ge = null),
          Pn(e, t, n),
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
              e.nodeType === 8 ? ao(e.parentNode, n) : e.nodeType === 1 && ao(e, n),
              si(e))
            : ao(Ge, n.stateNode));
        break;
      case 4:
        ((l = Ge),
          (u = $t),
          (Ge = n.stateNode.containerInfo),
          ($t = !0),
          Pn(e, t, n),
          (Ge = l),
          ($t = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!tt && ((l = n.updateQueue), l !== null && ((l = l.lastEffect), l !== null))) {
          u = l = l.next;
          do {
            var a = u,
              h = a.destroy;
            ((a = a.tag),
              h !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && Go(n, t, h),
              (u = u.next));
          } while (u !== l);
        }
        Pn(e, t, n);
        break;
      case 1:
        if (!tt && (Mr(n, t), (l = n.stateNode), typeof l.componentWillUnmount == "function"))
          try {
            ((l.props = n.memoizedProps), (l.state = n.memoizedState), l.componentWillUnmount());
          } catch (v) {
            Le(n, t, v);
          }
        Pn(e, t, n);
        break;
      case 21:
        Pn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((tt = (l = tt) || n.memoizedState !== null), Pn(e, t, n), (tt = l))
          : Pn(e, t, n);
        break;
      default:
        Pn(e, t, n);
    }
  }
  function Fc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new fm()),
        t.forEach(function (l) {
          var u = xm.bind(null, e, l);
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
          (Ac(a, h, u), (Ge = null), ($t = !1));
          var w = u.alternate;
          (w !== null && (w.return = null), (u.return = null));
        } catch (z) {
          Le(u, t, z);
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
        if ((Ht(t, e), Zt(e), l & 4)) {
          try {
            (Ni(3, e, e.return), $l(3, e));
          } catch (Z) {
            Le(e, e.return, Z);
          }
          try {
            Ni(5, e, e.return);
          } catch (Z) {
            Le(e, e.return, Z);
          }
        }
        break;
      case 1:
        (Ht(t, e), Zt(e), l & 512 && n !== null && Mr(n, n.return));
        break;
      case 5:
        if ((Ht(t, e), Zt(e), l & 512 && n !== null && Mr(n, n.return), e.flags & 32)) {
          var u = e.stateNode;
          try {
            Kr(u, "");
          } catch (Z) {
            Le(e, e.return, Z);
          }
        }
        if (l & 4 && ((u = e.stateNode), u != null)) {
          var a = e.memoizedProps,
            h = n !== null ? n.memoizedProps : a,
            v = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              (v === "input" && a.type === "radio" && a.name != null && ca(u, a), Ps(v, h));
              var z = Ps(v, a);
              for (h = 0; h < w.length; h += 2) {
                var U = w[h],
                  W = w[h + 1];
                U === "style"
                  ? ya(u, W)
                  : U === "dangerouslySetInnerHTML"
                    ? ga(u, W)
                    : U === "children"
                      ? Kr(u, W)
                      : I(u, U, W, z);
              }
              switch (v) {
                case "input":
                  Ss(u, a);
                  break;
                case "textarea":
                  ha(u, a);
                  break;
                case "select":
                  var F = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!a.multiple;
                  var G = a.value;
                  G != null
                    ? cr(u, !!a.multiple, G, !1)
                    : F !== !!a.multiple &&
                      (a.defaultValue != null
                        ? cr(u, !!a.multiple, a.defaultValue, !0)
                        : cr(u, !!a.multiple, a.multiple ? [] : "", !1));
              }
              u[gi] = a;
            } catch (Z) {
              Le(e, e.return, Z);
            }
        }
        break;
      case 6:
        if ((Ht(t, e), Zt(e), l & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          ((u = e.stateNode), (a = e.memoizedProps));
          try {
            u.nodeValue = a;
          } catch (Z) {
            Le(e, e.return, Z);
          }
        }
        break;
      case 3:
        if ((Ht(t, e), Zt(e), l & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            si(t.containerInfo);
          } catch (Z) {
            Le(e, e.return, Z);
          }
        break;
      case 4:
        (Ht(t, e), Zt(e));
        break;
      case 13:
        (Ht(t, e),
          Zt(e),
          (u = e.child),
          u.flags & 8192 &&
            ((a = u.memoizedState !== null),
            (u.stateNode.isHidden = a),
            !a || (u.alternate !== null && u.alternate.memoizedState !== null) || (eu = Fe())),
          l & 4 && Fc(e));
        break;
      case 22:
        if (
          ((U = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((tt = (z = tt) || U), Ht(t, e), (tt = z)) : Ht(t, e),
          Zt(e),
          l & 8192)
        ) {
          if (
            ((z = e.memoizedState !== null), (e.stateNode.isHidden = z) && !U && (e.mode & 1) !== 0)
          )
            for (K = e, U = e.child; U !== null;) {
              for (W = K = U; K !== null;) {
                switch (((F = K), (G = F.child), F.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ni(4, F, F.return);
                    break;
                  case 1:
                    Mr(F, F.return);
                    var q = F.stateNode;
                    if (typeof q.componentWillUnmount == "function") {
                      ((l = F), (n = F.return));
                      try {
                        ((t = l),
                          (q.props = t.memoizedProps),
                          (q.state = t.memoizedState),
                          q.componentWillUnmount());
                      } catch (Z) {
                        Le(l, n, Z);
                      }
                    }
                    break;
                  case 5:
                    Mr(F, F.return);
                    break;
                  case 22:
                    if (F.memoizedState !== null) {
                      Vc(W);
                      continue;
                    }
                }
                G !== null ? ((G.return = F), (K = G)) : Vc(W);
              }
              U = U.sibling;
            }
          e: for (U = null, W = e; ;) {
            if (W.tag === 5) {
              if (U === null) {
                U = W;
                try {
                  ((u = W.stateNode),
                    z
                      ? ((a = u.style),
                        typeof a.setProperty == "function"
                          ? a.setProperty("display", "none", "important")
                          : (a.display = "none"))
                      : ((v = W.stateNode),
                        (w = W.memoizedProps.style),
                        (h = w != null && w.hasOwnProperty("display") ? w.display : null),
                        (v.style.display = va("display", h))));
                } catch (Z) {
                  Le(e, e.return, Z);
                }
              }
            } else if (W.tag === 6) {
              if (U === null)
                try {
                  W.stateNode.nodeValue = z ? "" : W.memoizedProps;
                } catch (Z) {
                  Le(e, e.return, Z);
                }
            } else if (
              ((W.tag !== 22 && W.tag !== 23) || W.memoizedState === null || W === e) &&
              W.child !== null
            ) {
              ((W.child.return = W), (W = W.child));
              continue;
            }
            if (W === e) break e;
            for (; W.sibling === null;) {
              if (W.return === null || W.return === e) break e;
              (U === W && (U = null), (W = W.return));
            }
            (U === W && (U = null), (W.sibling.return = W.return), (W = W.sibling));
          }
        }
        break;
      case 19:
        (Ht(t, e), Zt(e), l & 4 && Fc(e));
        break;
      case 21:
        break;
      default:
        (Ht(t, e), Zt(e));
    }
  }
  function Zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (Dc(n)) {
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
            l.flags & 32 && (Kr(u, ""), (l.flags &= -33));
            var a = Lc(e);
            Zo(e, a, u);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              v = Lc(e);
            qo(e, v, h);
            break;
          default:
            throw Error(i(161));
        }
      } catch (w) {
        Le(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function dm(e, t, n) {
    ((K = e), Uc(e));
  }
  function Uc(e, t, n) {
    for (var l = (e.mode & 1) !== 0; K !== null;) {
      var u = K,
        a = u.child;
      if (u.tag === 22 && l) {
        var h = u.memoizedState !== null || Wl;
        if (!h) {
          var v = u.alternate,
            w = (v !== null && v.memoizedState !== null) || tt;
          v = Wl;
          var z = tt;
          if (((Wl = h), (tt = w) && !z))
            for (K = u; K !== null;)
              ((h = K),
                (w = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Wc(u)
                  : w !== null
                    ? ((w.return = h), (K = w))
                    : Wc(u));
          for (; a !== null;) ((K = a), Uc(a), (a = a.sibling));
          ((K = u), (Wl = v), (tt = z));
        }
        Bc(e);
      } else (u.subtreeFlags & 8772) !== 0 && a !== null ? ((a.return = u), (K = a)) : Bc(e);
    }
  }
  function Bc(e) {
    for (; K !== null;) {
      var t = K;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                tt || $l(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !tt)
                  if (n === null) l.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type ? n.memoizedProps : Wt(t.type, n.memoizedProps);
                    l.componentDidUpdate(u, n.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                  }
                var a = t.updateQueue;
                a !== null && Vf(t, a, l);
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
                  Vf(t, h, n);
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
                  var z = t.alternate;
                  if (z !== null) {
                    var U = z.memoizedState;
                    if (U !== null) {
                      var W = U.dehydrated;
                      W !== null && si(W);
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
          tt || (t.flags & 512 && Ko(t));
        } catch (F) {
          Le(t, t.return, F);
        }
      }
      if (t === e) {
        K = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (K = n));
        break;
      }
      K = t.return;
    }
  }
  function Vc(e) {
    for (; K !== null;) {
      var t = K;
      if (t === e) {
        K = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (K = n));
        break;
      }
      K = t.return;
    }
  }
  function Wc(e) {
    for (; K !== null;) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              $l(4, t);
            } catch (w) {
              Le(t, n, w);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var u = t.return;
              try {
                l.componentDidMount();
              } catch (w) {
                Le(t, u, w);
              }
            }
            var a = t.return;
            try {
              Ko(t);
            } catch (w) {
              Le(t, a, w);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Ko(t);
            } catch (w) {
              Le(t, h, w);
            }
        }
      } catch (w) {
        Le(t, t.return, w);
      }
      if (t === e) {
        K = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        ((v.return = t.return), (K = v));
        break;
      }
      K = t.return;
    }
  }
  var pm = Math.ceil,
    Hl = B.ReactCurrentDispatcher,
    Jo = B.ReactCurrentOwner,
    Dt = B.ReactCurrentBatchConfig,
    he = 0,
    Qe = null,
    Be = null,
    Ke = 0,
    St = 0,
    jr = Sn(0),
    $e = 0,
    Oi = null,
    Zn = 0,
    Ql = 0,
    bo = 0,
    Ri = null,
    at = null,
    eu = 0,
    Dr = 1 / 0,
    fn = null,
    Yl = !1,
    tu = null,
    Nn = null,
    Xl = !1,
    On = null,
    Gl = 0,
    zi = 0,
    nu = null,
    Kl = -1,
    ql = 0;
  function lt() {
    return (he & 6) !== 0 ? Fe() : Kl !== -1 ? Kl : (Kl = Fe());
  }
  function Rn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (he & 2) !== 0 && Ke !== 0
        ? Ke & -Ke
        : qh.transition !== null
          ? (ql === 0 && (ql = Da()), ql)
          : ((e = xe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $a(e.type))), e);
  }
  function Qt(e, t, n, l) {
    if (50 < zi) throw ((zi = 0), (nu = null), Error(i(185)));
    (ti(e, n, l),
      ((he & 2) === 0 || e !== Qe) &&
        (e === Qe && ((he & 2) === 0 && (Ql |= n), $e === 4 && zn(e, Ke)),
        ft(e, l),
        n === 1 && he === 0 && (t.mode & 1) === 0 && ((Dr = Fe() + 500), Cl && Cn())));
  }
  function ft(e, t) {
    var n = e.callbackNode;
    qp(e, t);
    var l = ll(e, e === Qe ? Ke : 0);
    if (l === 0) (n !== null && za(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = l & -l), e.callbackPriority !== t)) {
      if ((n != null && za(n), t === 1))
        (e.tag === 0 ? Kh(Hc.bind(null, e)) : Of(Hc.bind(null, e)),
          Qh(function () {
            (he & 6) === 0 && Cn();
          }),
          (n = null));
      else {
        switch (La(l)) {
          case 1:
            n = Ds;
            break;
          case 4:
            n = Ma;
            break;
          case 16:
            n = tl;
            break;
          case 536870912:
            n = ja;
            break;
          default:
            n = tl;
        }
        n = Jc(n, $c.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function $c(e, t) {
    if (((Kl = -1), (ql = 0), (he & 6) !== 0)) throw Error(i(327));
    var n = e.callbackNode;
    if (Lr() && e.callbackNode !== n) return null;
    var l = ll(e, e === Qe ? Ke : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = Zl(e, l);
    else {
      t = l;
      var u = he;
      he |= 2;
      var a = Yc();
      (Qe !== e || Ke !== t) && ((fn = null), (Dr = Fe() + 500), bn(e, t));
      do
        try {
          _m();
          break;
        } catch (v) {
          Qc(e, v);
        }
      while (!0);
      (xo(), (Hl.current = a), (he = u), Be !== null ? (t = 0) : ((Qe = null), (Ke = 0), (t = $e)));
    }
    if (t !== 0) {
      if ((t === 2 && ((u = Ls(e)), u !== 0 && ((l = u), (t = ru(e, u)))), t === 1))
        throw ((n = Oi), bn(e, 0), zn(e, l), ft(e, Fe()), n);
      if (t === 6) zn(e, l);
      else {
        if (
          ((u = e.current.alternate),
          (l & 30) === 0 &&
            !hm(u) &&
            ((t = Zl(e, l)),
            t === 2 && ((a = Ls(e)), a !== 0 && ((l = a), (t = ru(e, a)))),
            t === 1))
        )
          throw ((n = Oi), bn(e, 0), zn(e, l), ft(e, Fe()), n);
        switch (((e.finishedWork = u), (e.finishedLanes = l), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            er(e, at, fn);
            break;
          case 3:
            if ((zn(e, l), (l & 130023424) === l && ((t = eu + 500 - Fe()), 10 < t))) {
              if (ll(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & l) !== l)) {
                (lt(), (e.pingedLanes |= e.suspendedLanes & u));
                break;
              }
              e.timeoutHandle = uo(er.bind(null, e, at, fn), t);
              break;
            }
            er(e, at, fn);
            break;
          case 4:
            if ((zn(e, l), (l & 4194240) === l)) break;
            for (t = e.eventTimes, u = -1; 0 < l;) {
              var h = 31 - Ut(l);
              ((a = 1 << h), (h = t[h]), h > u && (u = h), (l &= ~a));
            }
            if (
              ((l = u),
              (l = Fe() - l),
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
                            : 1960 * pm(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = uo(er.bind(null, e, at, fn), l);
              break;
            }
            er(e, at, fn);
            break;
          case 5:
            er(e, at, fn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return (ft(e, Fe()), e.callbackNode === n ? $c.bind(null, e) : null);
  }
  function ru(e, t) {
    var n = Ri;
    return (
      e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256),
      (e = Zl(e, t)),
      e !== 2 && ((t = at), (at = n), t !== null && iu(t)),
      e
    );
  }
  function iu(e) {
    at === null ? (at = e) : at.push.apply(at, e);
  }
  function hm(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var l = 0; l < n.length; l++) {
            var u = n[l],
              a = u.getSnapshot;
            u = u.value;
            try {
              if (!Bt(a(), u)) return !1;
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
  function zn(e, t) {
    for (
      t &= ~bo, t &= ~Ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - Ut(t),
        l = 1 << n;
      ((e[n] = -1), (t &= ~l));
    }
  }
  function Hc(e) {
    if ((he & 6) !== 0) throw Error(i(327));
    Lr();
    var t = ll(e, 0);
    if ((t & 1) === 0) return (ft(e, Fe()), null);
    var n = Zl(e, t);
    if (e.tag !== 0 && n === 2) {
      var l = Ls(e);
      l !== 0 && ((t = l), (n = ru(e, l)));
    }
    if (n === 1) throw ((n = Oi), bn(e, 0), zn(e, t), ft(e, Fe()), n);
    if (n === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      er(e, at, fn),
      ft(e, Fe()),
      null
    );
  }
  function lu(e, t) {
    var n = he;
    he |= 1;
    try {
      return e(t);
    } finally {
      ((he = n), he === 0 && ((Dr = Fe() + 500), Cl && Cn()));
    }
  }
  function Jn(e) {
    On !== null && On.tag === 0 && (he & 6) === 0 && Lr();
    var t = he;
    he |= 1;
    var n = Dt.transition,
      l = xe;
    try {
      if (((Dt.transition = null), (xe = 1), e)) return e();
    } finally {
      ((xe = l), (Dt.transition = n), (he = t), (he & 6) === 0 && Cn());
    }
  }
  function su() {
    ((St = jr.current), Te(jr));
  }
  function bn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Hh(n)), Be !== null))
      for (n = Be.return; n !== null;) {
        var l = n;
        switch ((mo(l), l.tag)) {
          case 1:
            ((l = l.type.childContextTypes), l != null && Sl());
            break;
          case 3:
            (Rr(), Te(st), Te(Je), No());
            break;
          case 5:
            To(l);
            break;
          case 4:
            Rr();
            break;
          case 13:
            Te(Re);
            break;
          case 19:
            Te(Re);
            break;
          case 10:
            wo(l.type._context);
            break;
          case 22:
          case 23:
            su();
        }
        n = n.return;
      }
    if (
      ((Qe = e),
      (Be = e = Mn(e.current, null)),
      (Ke = St = t),
      ($e = 0),
      (Oi = null),
      (bo = Ql = Zn = 0),
      (at = Ri = null),
      Gn !== null)
    ) {
      for (t = 0; t < Gn.length; t++)
        if (((n = Gn[t]), (l = n.interleaved), l !== null)) {
          n.interleaved = null;
          var u = l.next,
            a = n.pending;
          if (a !== null) {
            var h = a.next;
            ((a.next = u), (l.next = h));
          }
          n.pending = l;
        }
      Gn = null;
    }
    return e;
  }
  function Qc(e, t) {
    do {
      var n = Be;
      try {
        if ((xo(), (Dl.current = Il), Ll)) {
          for (var l = ze.memoizedState; l !== null;) {
            var u = l.queue;
            (u !== null && (u.pending = null), (l = l.next));
          }
          Ll = !1;
        }
        if (
          ((qn = 0),
          (He = We = ze = null),
          (ki = !1),
          (Ci = 0),
          (Jo.current = null),
          n === null || n.return === null)
        ) {
          (($e = 1), (Oi = t), (Be = null));
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
            var z = w,
              U = v,
              W = U.tag;
            if ((U.mode & 1) === 0 && (W === 0 || W === 11 || W === 15)) {
              var F = U.alternate;
              F
                ? ((U.updateQueue = F.updateQueue),
                  (U.memoizedState = F.memoizedState),
                  (U.lanes = F.lanes))
                : ((U.updateQueue = null), (U.memoizedState = null));
            }
            var G = _c(h);
            if (G !== null) {
              ((G.flags &= -257), gc(G, h, v, a, t), G.mode & 1 && mc(a, z, t), (t = G), (w = z));
              var q = t.updateQueue;
              if (q === null) {
                var Z = new Set();
                (Z.add(w), (t.updateQueue = Z));
              } else q.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                (mc(a, z, t), ou());
                break e;
              }
              w = Error(i(426));
            }
          } else if (Ne && v.mode & 1) {
            var Ie = _c(h);
            if (Ie !== null) {
              ((Ie.flags & 65536) === 0 && (Ie.flags |= 256), gc(Ie, h, v, a, t), vo(zr(w, v)));
              break e;
            }
          }
          ((a = w = zr(w, v)),
            $e !== 4 && ($e = 2),
            Ri === null ? (Ri = [a]) : Ri.push(a),
            (a = h));
          do {
            switch (a.tag) {
              case 3:
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var T = pc(a, w, t);
                Bf(a, T);
                break e;
              case 1:
                v = w;
                var S = a.type,
                  N = a.stateNode;
                if (
                  (a.flags & 128) === 0 &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (N !== null &&
                      typeof N.componentDidCatch == "function" &&
                      (Nn === null || !Nn.has(N))))
                ) {
                  ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                  var $ = hc(a, v, t);
                  Bf(a, $);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        Gc(n);
      } catch (J) {
        ((t = J), Be === n && n !== null && (Be = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Yc() {
    var e = Hl.current;
    return ((Hl.current = Il), e === null ? Il : e);
  }
  function ou() {
    (($e === 0 || $e === 3 || $e === 2) && ($e = 4),
      Qe === null || ((Zn & 268435455) === 0 && (Ql & 268435455) === 0) || zn(Qe, Ke));
  }
  function Zl(e, t) {
    var n = he;
    he |= 2;
    var l = Yc();
    (Qe !== e || Ke !== t) && ((fn = null), bn(e, t));
    do
      try {
        mm();
        break;
      } catch (u) {
        Qc(e, u);
      }
    while (!0);
    if ((xo(), (he = n), (Hl.current = l), Be !== null)) throw Error(i(261));
    return ((Qe = null), (Ke = 0), $e);
  }
  function mm() {
    for (; Be !== null;) Xc(Be);
  }
  function _m() {
    for (; Be !== null && !Vp();) Xc(Be);
  }
  function Xc(e) {
    var t = Zc(e.alternate, e, St);
    ((e.memoizedProps = e.pendingProps), t === null ? Gc(e) : (Be = t), (Jo.current = null));
  }
  function Gc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = um(n, t, St)), n !== null)) {
          Be = n;
          return;
        }
      } else {
        if (((n = am(n, t)), n !== null)) {
          ((n.flags &= 32767), (Be = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          (($e = 6), (Be = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Be = t;
        return;
      }
      Be = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function er(e, t, n) {
    var l = xe,
      u = Dt.transition;
    try {
      ((Dt.transition = null), (xe = 1), gm(e, t, n, l));
    } finally {
      ((Dt.transition = u), (xe = l));
    }
    return null;
  }
  function gm(e, t, n, l) {
    do Lr();
    while (On !== null);
    if ((he & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var u = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(i(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var a = n.lanes | n.childLanes;
    if (
      (Zp(e, a),
      e === Qe && ((Be = Qe = null), (Ke = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Xl ||
        ((Xl = !0),
        Jc(tl, function () {
          return (Lr(), null);
        })),
      (a = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || a)
    ) {
      ((a = Dt.transition), (Dt.transition = null));
      var h = xe;
      xe = 1;
      var v = he;
      ((he |= 4),
        (Jo.current = null),
        cm(e, n),
        Ic(n, e),
        Fh(so),
        (ul = !!lo),
        (so = lo = null),
        (e.current = n),
        dm(n),
        Wp(),
        (he = v),
        (xe = h),
        (Dt.transition = a));
    } else e.current = n;
    if (
      (Xl && ((Xl = !1), (On = e), (Gl = u)),
      (a = e.pendingLanes),
      a === 0 && (Nn = null),
      Qp(n.stateNode),
      ft(e, Fe()),
      t !== null)
    )
      for (l = e.onRecoverableError, n = 0; n < t.length; n++)
        ((u = t[n]), l(u.value, { componentStack: u.stack, digest: u.digest }));
    if (Yl) throw ((Yl = !1), (e = tu), (tu = null), e);
    return (
      (Gl & 1) !== 0 && e.tag !== 0 && Lr(),
      (a = e.pendingLanes),
      (a & 1) !== 0 ? (e === nu ? zi++ : ((zi = 0), (nu = e))) : (zi = 0),
      Cn(),
      null
    );
  }
  function Lr() {
    if (On !== null) {
      var e = La(Gl),
        t = Dt.transition,
        n = xe;
      try {
        if (((Dt.transition = null), (xe = 16 > e ? 16 : e), On === null)) var l = !1;
        else {
          if (((e = On), (On = null), (Gl = 0), (he & 6) !== 0)) throw Error(i(331));
          var u = he;
          for (he |= 4, K = e.current; K !== null;) {
            var a = K,
              h = a.child;
            if ((K.flags & 16) !== 0) {
              var v = a.deletions;
              if (v !== null) {
                for (var w = 0; w < v.length; w++) {
                  var z = v[w];
                  for (K = z; K !== null;) {
                    var U = K;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ni(8, U, a);
                    }
                    var W = U.child;
                    if (W !== null) ((W.return = U), (K = W));
                    else
                      for (; K !== null;) {
                        U = K;
                        var F = U.sibling,
                          G = U.return;
                        if ((jc(U), U === z)) {
                          K = null;
                          break;
                        }
                        if (F !== null) {
                          ((F.return = G), (K = F));
                          break;
                        }
                        K = G;
                      }
                  }
                }
                var q = a.alternate;
                if (q !== null) {
                  var Z = q.child;
                  if (Z !== null) {
                    q.child = null;
                    do {
                      var Ie = Z.sibling;
                      ((Z.sibling = null), (Z = Ie));
                    } while (Z !== null);
                  }
                }
                K = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && h !== null) ((h.return = a), (K = h));
            else
              e: for (; K !== null;) {
                if (((a = K), (a.flags & 2048) !== 0))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ni(9, a, a.return);
                  }
                var T = a.sibling;
                if (T !== null) {
                  ((T.return = a.return), (K = T));
                  break e;
                }
                K = a.return;
              }
          }
          var S = e.current;
          for (K = S; K !== null;) {
            h = K;
            var N = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && N !== null) ((N.return = h), (K = N));
            else
              e: for (h = S; K !== null;) {
                if (((v = K), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $l(9, v);
                    }
                  } catch (J) {
                    Le(v, v.return, J);
                  }
                if (v === h) {
                  K = null;
                  break e;
                }
                var $ = v.sibling;
                if ($ !== null) {
                  (($.return = v.return), (K = $));
                  break e;
                }
                K = v.return;
              }
          }
          if (((he = u), Cn(), Xt && typeof Xt.onPostCommitFiberRoot == "function"))
            try {
              Xt.onPostCommitFiberRoot(nl, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        ((xe = n), (Dt.transition = t));
      }
    }
    return !1;
  }
  function Kc(e, t, n) {
    ((t = zr(n, t)),
      (t = pc(e, t, 1)),
      (e = Tn(e, t, 1)),
      (t = lt()),
      e !== null && (ti(e, 1, t), ft(e, t)));
  }
  function Le(e, t, n) {
    if (e.tag === 3) Kc(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Kc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" && (Nn === null || !Nn.has(l)))
          ) {
            ((e = zr(n, e)),
              (e = hc(t, e, 1)),
              (t = Tn(t, e, 1)),
              (e = lt()),
              t !== null && (ti(t, 1, e), ft(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function vm(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (t = lt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Qe === e &&
        (Ke & n) === n &&
        ($e === 4 || ($e === 3 && (Ke & 130023424) === Ke && 500 > Fe() - eu)
          ? bn(e, 0)
          : (bo |= n)),
      ft(e, t));
  }
  function qc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = il), (il <<= 1), (il & 130023424) === 0 && (il = 4194304)));
    var n = lt();
    ((e = on(e, t)), e !== null && (ti(e, t, n), ft(e, n)));
  }
  function ym(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), qc(e, n));
  }
  function xm(e, t) {
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
    (l !== null && l.delete(t), qc(e, n));
  }
  var Zc;
  Zc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || st.current) ut = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((ut = !1), om(e, t, n));
        ut = (e.flags & 131072) !== 0;
      }
    else ((ut = !1), Ne && (t.flags & 1048576) !== 0 && Rf(t, Tl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var l = t.type;
        (Vl(e, t), (e = t.pendingProps));
        var u = kr(t, Je.current);
        (Or(t, n), (u = zo(null, t, l, e, u, n)));
        var a = Mo();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ot(l) ? ((a = !0), kl(t)) : (a = !1),
              (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
              Co(t),
              (u.updater = Ul),
              (t.stateNode = u),
              (u._reactInternals = t),
              Io(t, l, e, n),
              (t = Wo(null, t, l, !0, a, n)))
            : ((t.tag = 0), Ne && a && ho(t), it(null, t, u, n), (t = t.child)),
          t
        );
      case 16:
        l = t.elementType;
        e: {
          switch (
            (Vl(e, t),
            (e = t.pendingProps),
            (u = l._init),
            (l = u(l._payload)),
            (t.type = l),
            (u = t.tag = Sm(l)),
            (e = Wt(l, e)),
            u)
          ) {
            case 0:
              t = Vo(null, t, l, e, n);
              break e;
            case 1:
              t = kc(null, t, l, e, n);
              break e;
            case 11:
              t = vc(null, t, l, e, n);
              break e;
            case 14:
              t = yc(null, t, l, Wt(l.type, e), n);
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
          Vo(e, t, l, u, n)
        );
      case 1:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : Wt(l, u)),
          kc(e, t, l, u, n)
        );
      case 3:
        e: {
          if ((Cc(t), e === null)) throw Error(i(387));
          ((l = t.pendingProps),
            (a = t.memoizedState),
            (u = a.element),
            Uf(e, t),
            Ml(t, l, null, n));
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
              ((u = zr(Error(i(423)), t)), (t = Ec(e, t, l, n, u)));
              break e;
            } else if (l !== u) {
              ((u = zr(Error(i(424)), t)), (t = Ec(e, t, l, n, u)));
              break e;
            } else
              for (
                wt = wn(t.stateNode.containerInfo.firstChild),
                  xt = t,
                  Ne = !0,
                  Vt = null,
                  n = Ff(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Tr(), l === u)) {
              t = an(e, t, n);
              break e;
            }
            it(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Wf(t),
          e === null && go(t),
          (l = t.type),
          (u = t.pendingProps),
          (a = e !== null ? e.memoizedProps : null),
          (h = u.children),
          oo(l, u) ? (h = null) : a !== null && oo(l, a) && (t.flags |= 32),
          Sc(e, t),
          it(e, t, h, n),
          t.child
        );
      case 6:
        return (e === null && go(t), null);
      case 13:
        return Tc(e, t, n);
      case 4:
        return (
          Eo(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Pr(t, null, l, n)) : it(e, t, l, n),
          t.child
        );
      case 11:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : Wt(l, u)),
          vc(e, t, l, u, n)
        );
      case 7:
        return (it(e, t, t.pendingProps, n), t.child);
      case 8:
        return (it(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (it(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((l = t.type._context),
            (u = t.pendingProps),
            (a = t.memoizedProps),
            (h = u.value),
            Ce(Ol, l._currentValue),
            (l._currentValue = h),
            a !== null)
          )
            if (Bt(a.value, h)) {
              if (a.children === u.children && !st.current) {
                t = an(e, t, n);
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
                        ((w = un(-1, n & -n)), (w.tag = 2));
                        var z = a.updateQueue;
                        if (z !== null) {
                          z = z.shared;
                          var U = z.pending;
                          (U === null ? (w.next = w) : ((w.next = U.next), (U.next = w)),
                            (z.pending = w));
                        }
                      }
                      ((a.lanes |= n),
                        (w = a.alternate),
                        w !== null && (w.lanes |= n),
                        So(a.return, n, t),
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
                    So(h, n, t),
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
          (it(e, t, u.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (l = t.pendingProps.children),
          Or(t, n),
          (u = Mt(u)),
          (l = l(u)),
          (t.flags |= 1),
          it(e, t, l, n),
          t.child
        );
      case 14:
        return ((l = t.type), (u = Wt(l, t.pendingProps)), (u = Wt(l.type, u)), yc(e, t, l, u, n));
      case 15:
        return xc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : Wt(l, u)),
          Vl(e, t),
          (t.tag = 1),
          ot(l) ? ((e = !0), kl(t)) : (e = !1),
          Or(t, n),
          cc(t, l, u),
          Io(t, l, u, n),
          Wo(null, t, l, !0, e, n)
        );
      case 19:
        return Nc(e, t, n);
      case 22:
        return wc(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Jc(e, t) {
    return Ra(e, t);
  }
  function wm(e, t, n, l) {
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
  function Lt(e, t, n, l) {
    return new wm(e, t, n, l);
  }
  function uu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Sm(e) {
    if (typeof e == "function") return uu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === pe)) return 11;
      if (e === ve) return 14;
    }
    return 2;
  }
  function Mn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Lt(e.tag, t, e.key, e.mode)),
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
  function Jl(e, t, n, l, u, a) {
    var h = 2;
    if (((l = e), typeof e == "function")) uu(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case A:
          return tr(n.children, u, a, t);
        case H:
          ((h = 8), (u |= 8));
          break;
        case V:
          return ((e = Lt(12, n, t, u | 2)), (e.elementType = V), (e.lanes = a), e);
        case ue:
          return ((e = Lt(13, n, t, u)), (e.elementType = ue), (e.lanes = a), e);
        case ce:
          return ((e = Lt(19, n, t, u)), (e.elementType = ce), (e.lanes = a), e);
        case le:
          return bl(n, u, a, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ee:
                h = 10;
                break e;
              case me:
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
    return ((t = Lt(h, n, t, u)), (t.elementType = e), (t.type = l), (t.lanes = a), t);
  }
  function tr(e, t, n, l) {
    return ((e = Lt(7, e, l, t)), (e.lanes = n), e);
  }
  function bl(e, t, n, l) {
    return (
      (e = Lt(22, e, l, t)),
      (e.elementType = le),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function au(e, t, n) {
    return ((e = Lt(6, e, null, t)), (e.lanes = n), e);
  }
  function fu(e, t, n) {
    return (
      (t = Lt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function km(e, t, n, l, u) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = As(0)),
      (this.expirationTimes = As(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = As(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null));
  }
  function cu(e, t, n, l, u, a, h, v, w) {
    return (
      (e = new km(e, t, n, v, w)),
      t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
      (a = Lt(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = {
        element: l,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Co(a),
      e
    );
  }
  function Cm(e, t, n) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Y,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function bc(e) {
    if (!e) return kn;
    e = e._reactInternals;
    e: {
      if ($n(e) !== e || e.tag !== 1) throw Error(i(170));
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
      if (ot(n)) return Pf(e, n, t);
    }
    return t;
  }
  function ed(e, t, n, l, u, a, h, v, w) {
    return (
      (e = cu(n, l, !0, e, u, a, h, v, w)),
      (e.context = bc(null)),
      (n = e.current),
      (l = lt()),
      (u = Rn(n)),
      (a = un(l, u)),
      (a.callback = t ?? null),
      Tn(n, a, u),
      (e.current.lanes = u),
      ti(e, u, l),
      ft(e, l),
      e
    );
  }
  function es(e, t, n, l) {
    var u = t.current,
      a = lt(),
      h = Rn(u);
    return (
      (n = bc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = un(a, h)),
      (t.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (t.callback = l),
      (e = Tn(u, t, h)),
      e !== null && (Qt(e, u, h, a), zl(e, u, h)),
      h
    );
  }
  function ts(e) {
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
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function du(e, t) {
    (td(e, t), (e = e.alternate) && td(e, t));
  }
  function Em() {
    return null;
  }
  var nd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function pu(e) {
    this._internalRoot = e;
  }
  ((ns.prototype.render = pu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      es(e, t, null, null);
    }),
    (ns.prototype.unmount = pu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Jn(function () {
            es(null, e, null, null);
          }),
            (t[nn] = null));
        }
      }));
  function ns(e) {
    this._internalRoot = e;
  }
  ns.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ia();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++);
      (vn.splice(n, 0, e), n === 0 && Va(e));
    }
  };
  function hu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function rs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function rd() {}
  function Tm(e, t, n, l, u) {
    if (u) {
      if (typeof l == "function") {
        var a = l;
        l = function () {
          var z = ts(h);
          a.call(z);
        };
      }
      var h = ed(t, l, e, 0, null, !1, !1, "", rd);
      return (
        (e._reactRootContainer = h),
        (e[nn] = h.current),
        mi(e.nodeType === 8 ? e.parentNode : e),
        Jn(),
        h
      );
    }
    for (; (u = e.lastChild);) e.removeChild(u);
    if (typeof l == "function") {
      var v = l;
      l = function () {
        var z = ts(w);
        v.call(z);
      };
    }
    var w = cu(e, 0, !1, null, null, !1, !1, "", rd);
    return (
      (e._reactRootContainer = w),
      (e[nn] = w.current),
      mi(e.nodeType === 8 ? e.parentNode : e),
      Jn(function () {
        es(t, w, n, l);
      }),
      w
    );
  }
  function is(e, t, n, l, u) {
    var a = n._reactRootContainer;
    if (a) {
      var h = a;
      if (typeof u == "function") {
        var v = u;
        u = function () {
          var w = ts(h);
          v.call(w);
        };
      }
      es(t, h, e, u);
    } else h = Tm(n, t, e, u, l);
    return ts(h);
  }
  ((Aa = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ei(t.pendingLanes);
          n !== 0 && (Fs(t, n | 1), ft(t, Fe()), (he & 6) === 0 && ((Dr = Fe() + 500), Cn()));
        }
        break;
      case 13:
        (Jn(function () {
          var l = on(e, 1);
          if (l !== null) {
            var u = lt();
            Qt(l, e, 1, u);
          }
        }),
          du(e, 1));
    }
  }),
    (Is = function (e) {
      if (e.tag === 13) {
        var t = on(e, 134217728);
        if (t !== null) {
          var n = lt();
          Qt(t, e, 134217728, n);
        }
        du(e, 134217728);
      }
    }),
    (Fa = function (e) {
      if (e.tag === 13) {
        var t = Rn(e),
          n = on(e, t);
        if (n !== null) {
          var l = lt();
          Qt(n, e, t, l);
        }
        du(e, t);
      }
    }),
    (Ia = function () {
      return xe;
    }),
    (Ua = function (e, t) {
      var n = xe;
      try {
        return ((xe = e), t());
      } finally {
        xe = n;
      }
    }),
    (Rs = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ss(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var u = wl(l);
                if (!u) throw Error(i(90));
                (aa(l), Ss(l, u));
              }
            }
          }
          break;
        case "textarea":
          ha(e, n);
          break;
        case "select":
          ((t = n.value), t != null && cr(e, !!n.multiple, t, !1));
      }
    }),
    (ka = lu),
    (Ca = Jn));
  var Pm = { usingClientEntryPoint: !1, Events: [vi, wr, wl, wa, Sa, lu] },
    Mi = {
      findFiberByHostInstance: Hn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Nm = {
      bundleType: Mi.bundleType,
      version: Mi.version,
      rendererPackageName: Mi.rendererPackageName,
      rendererConfig: Mi.rendererConfig,
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
        return ((e = Na(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Mi.findFiberByHostInstance || Em,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ls.isDisabled && ls.supportsFiber)
      try {
        ((nl = ls.inject(Nm)), (Xt = ls));
      } catch {}
  }
  return (
    (ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pm),
    (ct.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!hu(t)) throw Error(i(200));
      return Cm(e, t, null, n);
    }),
    (ct.createRoot = function (e, t) {
      if (!hu(e)) throw Error(i(299));
      var n = !1,
        l = "",
        u = nd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = cu(e, 1, !1, null, null, n, !1, l, u)),
        (e[nn] = t.current),
        mi(e.nodeType === 8 ? e.parentNode : e),
        new pu(t)
      );
    }),
    (ct.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return ((e = Na(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (ct.flushSync = function (e) {
      return Jn(e);
    }),
    (ct.hydrate = function (e, t, n) {
      if (!rs(t)) throw Error(i(200));
      return is(null, e, t, !0, n);
    }),
    (ct.hydrateRoot = function (e, t, n) {
      if (!hu(e)) throw Error(i(405));
      var l = (n != null && n.hydratedSources) || null,
        u = !1,
        a = "",
        h = nd;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (u = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (h = n.onRecoverableError)),
        (t = ed(t, null, e, 1, n ?? null, u, !1, a, h)),
        (e[nn] = t.current),
        mi(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          ((n = l[e]),
            (u = n._getVersion),
            (u = u(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, u])
              : t.mutableSourceEagerHydrationData.push(n, u));
      return new ns(t);
    }),
    (ct.render = function (e, t, n) {
      if (!rs(t)) throw Error(i(200));
      return is(null, e, t, !1, n);
    }),
    (ct.unmountComponentAtNode = function (e) {
      if (!rs(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (Jn(function () {
            is(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[nn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (ct.unstable_batchedUpdates = lu),
    (ct.unstable_renderSubtreeIntoContainer = function (e, t, n, l) {
      if (!rs(n)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return is(e, t, n, !1, l);
    }),
    (ct.version = "18.3.1-next-f1338f8080-20240426"),
    ct
  );
}
var cd;
function Am() {
  if (cd) return gu.exports;
  cd = 1;
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
  return (p(), (gu.exports = Lm()), gu.exports);
}
var dd;
function Fm() {
  if (dd) return ss;
  dd = 1;
  var p = Am();
  return ((ss.createRoot = p.createRoot), (ss.hydrateRoot = p.hydrateRoot), ss);
}
var Im = Fm();
function jd(p) {
  const r = p.replace(/^\//, "").replace(/\/$/, "");
  return r ? `#/${r}` : "#/";
}
function Hu(p) {
  const r = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return r
    ? r.startsWith("/")
      ? { kind: "route", path: r.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: r }
    : null;
}
function Dd(p, r = "smooth") {
  if (typeof document > "u") return !1;
  const i = document.getElementById(p);
  return i ? (i.scrollIntoView({ behavior: r, block: "start" }), !0) : !1;
}
function Bi(p) {
  typeof window > "u" || (window.location.hash = jd(p));
}
function Um() {
  const p = Hu();
  return (p == null ? void 0 : p.kind) === "route" ? p.path : "";
}
function Ld() {
  if (typeof window > "u") return;
  const p = Hu();
  (p == null ? void 0 : p.kind) === "section" && requestAnimationFrame(() => Dd(p.id, "auto"));
}
function Bm(p, r) {
  if (typeof window > "u") return () => {};
  const i = () => {
    const s = Hu();
    if (!s) {
      p("");
      return;
    }
    if (s.kind === "route") {
      p(s.path);
      return;
    }
    (Dd(s.id, "smooth"), p(""));
  };
  return (
    i(),
    window.addEventListener("hashchange", i),
    () => window.removeEventListener("hashchange", i)
  );
}
function Vm(p = "") {
  const [r, i] = qe.useState(() => (typeof window < "u" ? Um() : p));
  return (qe.useEffect(() => Bm(i), []), r || p);
}
function Wm({ routes: p, defaultRoute: r = "", className: i }) {
  const s = Vm(r);
  qe.useEffect(() => {
    Ld();
  }, []);
  const o = s in p ? s : r,
    f = p[o] ?? p[r];
  return P.jsx("div", { className: i, children: f });
}
function cn(p) {
  if (p === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return p;
}
function Ad(p, r) {
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
  Vi = { duration: 0.5, overwrite: !1, delay: 0 },
  Qu,
  Ze,
  Oe,
  Ft = 1e8,
  Se = 1 / Ft,
  Nu = Math.PI * 2,
  $m = Nu / 4,
  Hm = 0,
  Fd = Math.sqrt,
  Qm = Math.cos,
  Ym = Math.sin,
  Xe = function (r) {
    return typeof r == "string";
  },
  Ae = function (r) {
    return typeof r == "function";
  },
  pn = function (r) {
    return typeof r == "number";
  },
  Yu = function (r) {
    return typeof r > "u";
  },
  tn = function (r) {
    return typeof r == "object";
  },
  pt = function (r) {
    return r !== !1;
  },
  Xu = function () {
    return typeof window < "u";
  },
  os = function (r) {
    return Ae(r) || Xe(r);
  },
  Id = (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  rt = Array.isArray,
  Xm = /random\([^)]+\)/g,
  Gm = /,\s*/g,
  pd = /(?:-?\.?\d|\.)+/gi,
  Ud = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Fr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  xu = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Bd = /[+-]=-?[.\d]+/,
  Km = /[^,'"\[\]\s]+/gi,
  qm = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  je,
  Jt,
  Ou,
  Gu,
  Nt = {},
  cs = {},
  Vd,
  Wd = function (r) {
    return (cs = Wr(r, Nt)) && gt;
  },
  Ku = function (r, i) {
    return console.warn(
      "Invalid property",
      r,
      "set to",
      i,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  Wi = function (r, i) {
    return !i && console.warn(r);
  },
  $d = function (r, i) {
    return (r && (Nt[r] = i) && cs && (cs[r] = i)) || Nt;
  },
  $i = function () {
    return 0;
  },
  Zm = { suppressEvents: !0, isStart: !0, kill: !1 },
  us = { suppressEvents: !0, kill: !1 },
  Jm = { suppressEvents: !0 },
  qu = {},
  Fn = [],
  Ru = {},
  Hd,
  kt = {},
  wu = {},
  hd = 30,
  as = [],
  Zu = "",
  Ju = function (r) {
    var i = r[0],
      s,
      o;
    if ((tn(i) || Ae(i) || (r = [r]), !(s = (i._gsap || {}).harness))) {
      for (o = as.length; o-- && !as[o].targetTest(i););
      s = as[o];
    }
    for (o = r.length; o--;)
      (r[o] && (r[o]._gsap || (r[o]._gsap = new dp(r[o], s)))) || r.splice(o, 1);
    return r;
  },
  sr = function (r) {
    return r._gsap || Ju(It(r))[0]._gsap;
  },
  Qd = function (r, i, s) {
    return (s = r[i]) && Ae(s) ? r[i]() : (Yu(s) && r.getAttribute && r.getAttribute(i)) || s;
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
  Ur = function (r, i) {
    var s = i.charAt(0),
      o = parseFloat(i.substr(2));
    return ((r = parseFloat(r)), s === "+" ? r + o : s === "-" ? r - o : s === "*" ? r * o : r / o);
  },
  bm = function (r, i) {
    for (var s = i.length, o = 0; r.indexOf(i[o]) < 0 && ++o < s;);
    return o < s;
  },
  ds = function () {
    var r = Fn.length,
      i = Fn.slice(0),
      s,
      o;
    for (Ru = {}, Fn.length = 0, s = 0; s < r; s++)
      ((o = i[s]), o && o._lazy && (o.render(o._lazy[0], o._lazy[1], !0)._lazy = 0));
  },
  bu = function (r) {
    return !!(r._initted || r._startAt || r.add);
  },
  Yd = function (r, i, s, o) {
    (Fn.length && !Ze && ds(), r.render(i, s, !!(Ze && i < 0 && bu(r))), Fn.length && !Ze && ds());
  },
  Xd = function (r) {
    var i = parseFloat(r);
    return (i || i === 0) && (r + "").match(Km).length < 2 ? i : Xe(r) ? r.trim() : r;
  },
  Gd = function (r) {
    return r;
  },
  Ot = function (r, i) {
    for (var s in i) s in r || (r[s] = i[s]);
    return r;
  },
  e0 = function (r) {
    return function (i, s) {
      for (var o in s) o in i || (o === "duration" && r) || o === "ease" || (i[o] = s[o]);
    };
  },
  Wr = function (r, i) {
    for (var s in i) r[s] = i[s];
    return r;
  },
  md = function p(r, i) {
    for (var s in i)
      s !== "__proto__" &&
        s !== "constructor" &&
        s !== "prototype" &&
        (r[s] = tn(i[s]) ? p(r[s] || (r[s] = {}), i[s]) : i[s]);
    return r;
  },
  ps = function (r, i) {
    var s = {},
      o;
    for (o in r) o in i || (s[o] = r[o]);
    return s;
  },
  Fi = function (r) {
    var i = r.parent || je,
      s = r.keyframes ? e0(rt(r.keyframes)) : Ot;
    if (pt(r.inherit)) for (; i;) (s(r, i.vars.defaults), (i = i.parent || i._dp));
    return r;
  },
  t0 = function (r, i) {
    for (var s = r.length, o = s === i.length; o && s-- && r[s] === i[s];);
    return s < 0;
  },
  Kd = function (r, i, s, o, f) {
    var c = r[o],
      d;
    if (f) for (d = i[f]; c && c[f] > d;) c = c._prev;
    return (
      c ? ((i._next = c._next), (c._next = i)) : ((i._next = r[s]), (r[s] = i)),
      i._next ? (i._next._prev = i) : (r[o] = i),
      (i._prev = c),
      (i.parent = i._dp = r),
      i
    );
  },
  vs = function (r, i, s, o) {
    (s === void 0 && (s = "_first"), o === void 0 && (o = "_last"));
    var f = i._prev,
      c = i._next;
    (f ? (f._next = c) : r[s] === i && (r[s] = c),
      c ? (c._prev = f) : r[o] === i && (r[o] = f),
      (i._next = i._prev = i.parent = null));
  },
  Un = function (r, i) {
    (r.parent && (!i || r.parent.autoRemoveChildren) && r.parent.remove && r.parent.remove(r),
      (r._act = 0));
  },
  or = function (r, i) {
    if (r && (!i || i._end > r._dur || i._start < 0))
      for (var s = r; s;) ((s._dirty = 1), (s = s.parent));
    return r;
  },
  n0 = function (r) {
    for (var i = r.parent; i && i.parent;) ((i._dirty = 1), i.totalDuration(), (i = i.parent));
    return r;
  },
  zu = function (r, i, s, o) {
    return (
      r._startAt &&
      (Ze
        ? r._startAt.revert(us)
        : (r.vars.immediateRender && !r.vars.autoRevert) || r._startAt.render(i, !0, o))
    );
  },
  r0 = function p(r) {
    return !r || (r._ts && p(r.parent));
  },
  _d = function (r) {
    return r._repeat ? $r(r._tTime, (r = r.duration() + r._rDelay)) * r : 0;
  },
  $r = function (r, i) {
    var s = Math.floor((r = Me(r / i)));
    return r && s === r ? s - 1 : s;
  },
  hs = function (r, i) {
    return (r - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
  },
  ys = function (r) {
    return (r._end = Me(r._start + (r._tDur / Math.abs(r._ts || r._rts || Se) || 0)));
  },
  xs = function (r, i) {
    var s = r._dp;
    return (
      s &&
        s.smoothChildTiming &&
        r._ts &&
        ((r._start = Me(
          s._time -
            (r._ts > 0 ? i / r._ts : ((r._dirty ? r.totalDuration() : r._tDur) - i) / -r._ts),
        )),
        ys(r),
        s._dirty || or(s, r)),
      r
    );
  },
  qd = function (r, i) {
    var s;
    if (
      ((i._time || (!i._dur && i._initted) || (i._start < r._time && (i._dur || !i.add))) &&
        ((s = hs(r.rawTime(), i)),
        (!i._dur || Ki(0, i.totalDuration(), s) - i._tTime > Se) && i.render(s, !0)),
      or(r, i)._dp && r._initted && r._time >= r._dur && r._ts)
    ) {
      if (r._dur < r.duration())
        for (s = r; s._dp;) (s.rawTime() >= 0 && s.totalTime(s._tTime), (s = s._dp));
      r._zTime = -Se;
    }
  },
  bt = function (r, i, s, o) {
    return (
      i.parent && Un(i),
      (i._start = Me((pn(s) ? s : s || r !== je ? At(r, s, i) : r._time) + i._delay)),
      (i._end = Me(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0))),
      Kd(r, i, "_first", "_last", r._sort ? "_start" : 0),
      Mu(i) || (r._recent = i),
      o || qd(r, i),
      r._ts < 0 && xs(r, r._tTime),
      r
    );
  },
  Zd = function (r, i) {
    return (Nt.ScrollTrigger || Ku("scrollTrigger", i)) && Nt.ScrollTrigger.create(i, r);
  },
  Jd = function (r, i, s, o, f) {
    if ((ta(r, i, f), !r._initted)) return 1;
    if (
      !s &&
      r._pt &&
      !Ze &&
      ((r._dur && r.vars.lazy !== !1) || (!r._dur && r.vars.lazy)) &&
      Hd !== Ct.frame
    )
      return (Fn.push(r), (r._lazy = [f, o]), 1);
  },
  i0 = function p(r) {
    var i = r.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || p(i));
  },
  Mu = function (r) {
    var i = r.data;
    return i === "isFromStart" || i === "isStart";
  },
  l0 = function (r, i, s, o) {
    var f = r.ratio,
      c =
        i < 0 ||
        (!i &&
          ((!r._start && i0(r) && !(!r._initted && Mu(r))) ||
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
        ((m = Ki(0, r._tDur, i)),
        (g = $r(m, d)),
        r._yoyo && g & 1 && (c = 1 - c),
        g !== $r(r._tTime, d) &&
          ((f = 1 - c), r.vars.repeatRefresh && r._initted && r.invalidate())),
      c !== f || Ze || o || r._zTime === Se || (!i && r._zTime))
    ) {
      if (!r._initted && Jd(r, i, o, s, m)) return;
      for (
        x = r._zTime,
          r._zTime = i || (s ? Se : 0),
          s || (s = i && !x),
          r.ratio = c,
          r._from && (c = 1 - c),
          r._time = 0,
          r._tTime = m,
          _ = r._pt;
        _;
      )
        (_.r(c, _.d), (_ = _._next));
      (i < 0 && zu(r, i, s, !0),
        r._onUpdate && !s && Et(r, "onUpdate"),
        m && r._repeat && !s && r.parent && Et(r, "onRepeat"),
        (i >= r._tDur || i < 0) &&
          r.ratio === c &&
          (c && Un(r, 1),
          !s && !Ze && (Et(r, c ? "onComplete" : "onReverseComplete", !0), r._prom && r._prom())));
    } else r._zTime || (r._zTime = i);
  },
  s0 = function (r, i, s) {
    var o;
    if (s > i)
      for (o = r._first; o && o._start <= s;) {
        if (o.data === "isPause" && o._start > i) return o;
        o = o._next;
      }
    else
      for (o = r._last; o && o._start >= s;) {
        if (o.data === "isPause" && o._start < i) return o;
        o = o._prev;
      }
  },
  Hr = function (r, i, s, o) {
    var f = r._repeat,
      c = Me(i) || 0,
      d = r._tTime / r._tDur;
    return (
      d && !o && (r._time *= c / r._dur),
      (r._dur = c),
      (r._tDur = f ? (f < 0 ? 1e10 : Me(c * (f + 1) + r._rDelay * f)) : c),
      d > 0 && !o && xs(r, (r._tTime = r._tDur * d)),
      r.parent && ys(r),
      s || or(r.parent, r),
      r
    );
  },
  gd = function (r) {
    return r instanceof dt ? or(r) : Hr(r, r._dur);
  },
  o0 = { _start: 0, endTime: $i, totalDuration: $i },
  At = function p(r, i, s) {
    var o = r.labels,
      f = r._recent || o0,
      c = r.duration() >= Ft ? f.endTime(!1) : r._dur,
      d,
      m,
      _;
    return Xe(i) && (isNaN(i) || i in o)
      ? ((m = i.charAt(0)),
        (_ = i.substr(-1) === "%"),
        (d = i.indexOf("=")),
        m === "<" || m === ">"
          ? (d >= 0 && (i = i.replace(/=/, "")),
            (m === "<" ? f._start : f.endTime(f._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0) * (_ ? (d < 0 ? f : s).totalDuration() / 100 : 1))
          : d < 0
            ? (i in o || (o[i] = c), o[i])
            : ((m = parseFloat(i.charAt(d - 1) + i.substr(d + 1))),
              _ && s && (m = (m / 100) * (rt(s) ? s[0] : s).totalDuration()),
              d > 1 ? p(r, i.substr(0, d - 1), s) + m : c + m))
      : i == null
        ? c
        : +i;
  },
  Ii = function (r, i, s) {
    var o = pn(i[1]),
      f = (o ? 2 : 1) + (r < 2 ? 0 : 1),
      c = i[f],
      d,
      m;
    if ((o && (c.duration = i[1]), (c.parent = s), r)) {
      for (d = c, m = s; m && !("immediateRender" in d);)
        ((d = m.vars.defaults || {}), (m = pt(m.vars.inherit) && m.parent));
      ((c.immediateRender = pt(d.immediateRender)),
        r < 2 ? (c.runBackwards = 1) : (c.startAt = i[f - 1]));
    }
    return new Ve(i[0], c, i[f + 1]);
  },
  Wn = function (r, i) {
    return r || r === 0 ? i(r) : i;
  },
  Ki = function (r, i, s) {
    return s < r ? r : s > i ? i : s;
  },
  nt = function (r, i) {
    return !Xe(r) || !(i = qm.exec(r)) ? "" : i[1];
  },
  u0 = function (r, i, s) {
    return Wn(s, function (o) {
      return Ki(r, i, o);
    });
  },
  ju = [].slice,
  bd = function (r, i) {
    return (
      r &&
      tn(r) &&
      "length" in r &&
      ((!i && !r.length) || (r.length - 1 in r && tn(r[0]))) &&
      !r.nodeType &&
      r !== Jt
    );
  },
  a0 = function (r, i, s) {
    return (
      s === void 0 && (s = []),
      r.forEach(function (o) {
        var f;
        return (Xe(o) && !i) || bd(o, 1) ? (f = s).push.apply(f, It(o)) : s.push(o);
      }) || s
    );
  },
  It = function (r, i, s) {
    return Oe && !i && Oe.selector
      ? Oe.selector(r)
      : Xe(r) && !s && (Ou || !Qr())
        ? ju.call((i || Gu).querySelectorAll(r), 0)
        : rt(r)
          ? a0(r, s)
          : bd(r)
            ? ju.call(r, 0)
            : r
              ? [r]
              : [];
  },
  Du = function (r) {
    return (
      (r = It(r)[0] || Wi("Invalid scope") || {}),
      function (i) {
        var s = r.current || r.nativeElement || r;
        return It(
          i,
          s.querySelectorAll ? s : s === r ? Wi("Invalid scope") || Gu.createElement("div") : r,
        );
      }
    );
  },
  ep = function (r) {
    return r.sort(function () {
      return 0.5 - Math.random();
    });
  },
  tp = function (r) {
    if (Ae(r)) return r;
    var i = tn(r) ? r : { each: r },
      s = ur(i.ease),
      o = i.from || 0,
      f = parseFloat(i.base) || 0,
      c = {},
      d = o > 0 && o < 1,
      m = isNaN(o) || d,
      _ = i.axis,
      g = o,
      x = o;
    return (
      Xe(o)
        ? (g = x = { center: 0.5, edges: 0.5, end: 1 }[o] || 0)
        : !d && m && ((g = o[0]), (x = o[1])),
      function (k, C, O) {
        var y = (O || i).length,
          R = c[y],
          L,
          j,
          I,
          B,
          M,
          Y,
          A,
          H,
          V;
        if (!R) {
          if (((V = i.grid === "auto" ? 0 : (i.grid || [1, Ft])[1]), !V)) {
            for (A = -Ft; A < (A = O[V++].getBoundingClientRect().left) && V < y;);
            V < y && V--;
          }
          for (
            R = c[y] = [],
              L = m ? Math.min(V, y) * g - 0.5 : o % V,
              j = V === Ft ? 0 : m ? (y * x) / V - 0.5 : (o / V) | 0,
              A = 0,
              H = Ft,
              Y = 0;
            Y < y;
            Y++
          )
            ((I = (Y % V) - L),
              (B = j - ((Y / V) | 0)),
              (R[Y] = M = _ ? Math.abs(_ === "y" ? B : I) : Fd(I * I + B * B)),
              M > A && (A = M),
              M < H && (H = M));
          (o === "random" && ep(R),
            (R.max = A - H),
            (R.min = H),
            (R.v = y =
              (parseFloat(i.amount) ||
                parseFloat(i.each) *
                  (V > y ? y - 1 : _ ? (_ === "y" ? y / V : V) : Math.max(V, y / V)) ||
                0) * (o === "edges" ? -1 : 1)),
            (R.b = y < 0 ? f - y : f),
            (R.u = nt(i.amount || i.each) || 0),
            (s = s && y < 0 ? S0(s) : s));
        }
        return ((y = (R[k] - R.min) / R.max || 0), Me(R.b + (s ? s(y) : y) * R.v) + R.u);
      }
    );
  },
  Lu = function (r) {
    var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
    return function (s) {
      var o = Me(Math.round(parseFloat(s) / r) * r * i);
      return (o - (o % 1)) / i + (pn(s) ? 0 : nt(s));
    };
  },
  np = function (r, i) {
    var s = rt(r),
      o,
      f;
    return (
      !s &&
        tn(r) &&
        ((o = s = r.radius || Ft),
        r.values ? ((r = It(r.values)), (f = !pn(r[0])) && (o *= o)) : (r = Lu(r.increment))),
      Wn(
        i,
        s
          ? Ae(r)
            ? function (c) {
                return ((f = r(c)), Math.abs(f - c) <= o ? f : c);
              }
            : function (c) {
                for (
                  var d = parseFloat(f ? c.x : c),
                    m = parseFloat(f ? c.y : 0),
                    _ = Ft,
                    g = 0,
                    x = r.length,
                    k,
                    C;
                  x--;
                )
                  (f
                    ? ((k = r[x].x - d), (C = r[x].y - m), (k = k * k + C * C))
                    : (k = Math.abs(r[x] - d)),
                    k < _ && ((_ = k), (g = x)));
                return ((g = !o || _ <= o ? r[g] : c), f || g === c || pn(c) ? g : g + nt(c));
              }
          : Lu(r),
      )
    );
  },
  rp = function (r, i, s, o) {
    return Wn(rt(r) ? !i : s === !0 ? !!(s = 0) : !o, function () {
      return rt(r)
        ? r[~~(Math.random() * r.length)]
        : (s = s || 1e-5) &&
            (o = s < 1 ? Math.pow(10, (s + "").length - 2) : 1) &&
            Math.floor(Math.round((r - s / 2 + Math.random() * (i - r + s * 0.99)) / s) * s * o) /
              o;
    });
  },
  f0 = function () {
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
    return function (o) {
      return i.reduce(function (f, c) {
        return c(f);
      }, o);
    };
  },
  c0 = function (r, i) {
    return function (s) {
      return r(parseFloat(s)) + (i || nt(s));
    };
  },
  d0 = function (r, i, s) {
    return lp(r, i, 0, 1, s);
  },
  ip = function (r, i, s) {
    return Wn(s, function (o) {
      return r[~~i(o)];
    });
  },
  p0 = function p(r, i, s) {
    var o = i - r;
    return rt(r)
      ? ip(r, p(0, r.length), i)
      : Wn(s, function (f) {
          return ((o + ((f - r) % o)) % o) + r;
        });
  },
  h0 = function p(r, i, s) {
    var o = i - r,
      f = o * 2;
    return rt(r)
      ? ip(r, p(0, r.length - 1), i)
      : Wn(s, function (c) {
          return ((c = (f + ((c - r) % f)) % f || 0), r + (c > o ? f - c : c));
        });
  },
  Hi = function (r) {
    return r.replace(Xm, function (i) {
      var s = i.indexOf("[") + 1,
        o = i.substring(s || 7, s ? i.indexOf("]") : i.length - 1).split(Gm);
      return rp(s ? o : +o[0], s ? 0 : +o[1], +o[2] || 1e-5);
    });
  },
  lp = function (r, i, s, o, f) {
    var c = i - r,
      d = o - s;
    return Wn(f, function (m) {
      return s + (((m - r) / c) * d || 0);
    });
  },
  m0 = function p(r, i, s, o) {
    var f = isNaN(r + i)
      ? 0
      : function (C) {
          return (1 - C) * r + C * i;
        };
    if (!f) {
      var c = Xe(r),
        d = {},
        m,
        _,
        g,
        x,
        k;
      if ((s === !0 && (o = 1) && (s = null), c)) ((r = { p: r }), (i = { p: i }));
      else if (rt(r) && !rt(i)) {
        for (g = [], x = r.length, k = x - 2, _ = 1; _ < x; _++) g.push(p(r[_ - 1], r[_]));
        (x--,
          (f = function (O) {
            O *= x;
            var y = Math.min(k, ~~O);
            return g[y](O - y);
          }),
          (s = i));
      } else o || (r = Wr(rt(r) ? [] : {}, r));
      if (!g) {
        for (m in i) ea.call(d, r, m, "get", i[m]);
        f = function (O) {
          return ia(O, d) || (c ? r.p : r);
        };
      }
    }
    return Wn(s, f);
  },
  vd = function (r, i, s) {
    var o = r.labels,
      f = Ft,
      c,
      d,
      m;
    for (c in o) ((d = o[c] - i), d < 0 == !!s && d && f > (d = Math.abs(d)) && ((m = c), (f = d)));
    return m;
  },
  Et = function (r, i, s) {
    var o = r.vars,
      f = o[i],
      c = Oe,
      d = r._ctx,
      m,
      _,
      g;
    if (f)
      return (
        (m = o[i + "Params"]),
        (_ = o.callbackScope || r),
        s && Fn.length && ds(),
        d && (Oe = d),
        (g = m ? f.apply(_, m) : f.call(_)),
        (Oe = c),
        g
      );
  },
  Li = function (r) {
    return (
      Un(r),
      r.scrollTrigger && r.scrollTrigger.kill(!!Ze),
      r.progress() < 1 && Et(r, "onInterrupt"),
      r
    );
  },
  Ir,
  sp = [],
  op = function (r) {
    if (r)
      if (((r = (!r.name && r.default) || r), Xu() || r.headless)) {
        var i = r.name,
          s = Ae(r),
          o =
            i && !s && r.init
              ? function () {
                  this._props = [];
                }
              : r,
          f = { init: $i, render: ia, add: ea, kill: M0, modifier: z0, rawVars: 0 },
          c = { targetTest: 0, get: 0, getSetter: ra, aliases: {}, register: 0 };
        if ((Qr(), r !== o)) {
          if (kt[i]) return;
          (Ot(o, Ot(ps(r, f), c)),
            Wr(o.prototype, Wr(f, ps(r, c))),
            (kt[(o.prop = i)] = o),
            r.targetTest && (as.push(o), (qu[i] = 1)),
            (i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin"));
        }
        ($d(i, o), r.register && r.register(gt, o, mt));
      } else sp.push(r);
  },
  we = 255,
  Ai = {
    aqua: [0, we, we],
    lime: [0, we, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, we],
    navy: [0, 0, 128],
    white: [we, we, we],
    olive: [128, 128, 0],
    yellow: [we, we, 0],
    orange: [we, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [we, 0, 0],
    pink: [we, 192, 203],
    cyan: [0, we, we],
    transparent: [we, we, we, 0],
  },
  Su = function (r, i, s) {
    return (
      (r += r < 0 ? 1 : r > 1 ? -1 : 0),
      ((r * 6 < 1
        ? i + (s - i) * r * 6
        : r < 0.5
          ? s
          : r * 3 < 2
            ? i + (s - i) * (2 / 3 - r) * 6
            : i) *
        we +
        0.5) |
        0
    );
  },
  up = function (r, i, s) {
    var o = r ? (pn(r) ? [r >> 16, (r >> 8) & we, r & we] : 0) : Ai.black,
      f,
      c,
      d,
      m,
      _,
      g,
      x,
      k,
      C,
      O;
    if (!o) {
      if ((r.substr(-1) === "," && (r = r.substr(0, r.length - 1)), Ai[r])) o = Ai[r];
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
            (o = parseInt(r.substr(1, 6), 16)),
            [o >> 16, (o >> 8) & we, o & we, parseInt(r.substr(7), 16) / 255]
          );
        ((r = parseInt(r.substr(1), 16)), (o = [r >> 16, (r >> 8) & we, r & we]));
      } else if (r.substr(0, 3) === "hsl") {
        if (((o = O = r.match(pd)), !i))
          ((m = (+o[0] % 360) / 360),
            (_ = +o[1] / 100),
            (g = +o[2] / 100),
            (c = g <= 0.5 ? g * (_ + 1) : g + _ - g * _),
            (f = g * 2 - c),
            o.length > 3 && (o[3] *= 1),
            (o[0] = Su(m + 1 / 3, f, c)),
            (o[1] = Su(m, f, c)),
            (o[2] = Su(m - 1 / 3, f, c)));
        else if (~r.indexOf("=")) return ((o = r.match(Ud)), s && o.length < 4 && (o[3] = 1), o);
      } else o = r.match(pd) || Ai.transparent;
      o = o.map(Number);
    }
    return (
      i &&
        !O &&
        ((f = o[0] / we),
        (c = o[1] / we),
        (d = o[2] / we),
        (x = Math.max(f, c, d)),
        (k = Math.min(f, c, d)),
        (g = (x + k) / 2),
        x === k
          ? (m = _ = 0)
          : ((C = x - k),
            (_ = g > 0.5 ? C / (2 - x - k) : C / (x + k)),
            (m =
              x === f
                ? (c - d) / C + (c < d ? 6 : 0)
                : x === c
                  ? (d - f) / C + 2
                  : (f - c) / C + 4),
            (m *= 60)),
        (o[0] = ~~(m + 0.5)),
        (o[1] = ~~(_ * 100 + 0.5)),
        (o[2] = ~~(g * 100 + 0.5))),
      s && o.length < 4 && (o[3] = 1),
      o
    );
  },
  ap = function (r) {
    var i = [],
      s = [],
      o = -1;
    return (
      r.split(In).forEach(function (f) {
        var c = f.match(Fr) || [];
        (i.push.apply(i, c), s.push((o += c.length + 1)));
      }),
      (i.c = s),
      i
    );
  },
  yd = function (r, i, s) {
    var o = "",
      f = (r + o).match(In),
      c = i ? "hsla(" : "rgba(",
      d = 0,
      m,
      _,
      g,
      x;
    if (!f) return r;
    if (
      ((f = f.map(function (k) {
        return (
          (k = up(k, i, 1)) &&
          c + (i ? k[0] + "," + k[1] + "%," + k[2] + "%," + k[3] : k.join(",")) + ")"
        );
      })),
      s && ((g = ap(r)), (m = s.c), m.join(o) !== g.c.join(o)))
    )
      for (_ = r.replace(In, "1").split(Fr), x = _.length - 1; d < x; d++)
        o +=
          _[d] +
          (~m.indexOf(d) ? f.shift() || c + "0,0,0,0)" : (g.length ? g : f.length ? f : s).shift());
    if (!_) for (_ = r.split(In), x = _.length - 1; d < x; d++) o += _[d] + f[d];
    return o + _[x];
  },
  In = (function () {
    var p = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      r;
    for (r in Ai) p += "|" + r + "\\b";
    return new RegExp(p + ")", "gi");
  })(),
  _0 = /hsl[a]?\(/,
  fp = function (r) {
    var i = r.join(" "),
      s;
    if (((In.lastIndex = 0), In.test(i)))
      return ((s = _0.test(i)), (r[1] = yd(r[1], s)), (r[0] = yd(r[0], s, ap(r[1]))), !0);
  },
  Qi,
  Ct = (function () {
    var p = Date.now,
      r = 500,
      i = 33,
      s = p(),
      o = s,
      f = 1e3 / 240,
      c = f,
      d = [],
      m,
      _,
      g,
      x,
      k,
      C,
      O = function y(R) {
        var L = p() - o,
          j = R === !0,
          I,
          B,
          M,
          Y;
        if (
          ((L > r || L < 0) && (s += L - i),
          (o += L),
          (M = o - s),
          (I = M - c),
          (I > 0 || j) &&
            ((Y = ++x.frame),
            (k = M - x.time * 1e3),
            (x.time = M = M / 1e3),
            (c += I + (I >= f ? 4 : f - I)),
            (B = 1)),
          j || (m = _(y)),
          B)
        )
          for (C = 0; C < d.length; C++) d[C](M, k, Y, R);
      };
    return (
      (x = {
        time: 0,
        frame: 0,
        tick: function () {
          O(!0);
        },
        deltaRatio: function (R) {
          return k / (1e3 / (R || 60));
        },
        wake: function () {
          Vd &&
            (!Ou &&
              Xu() &&
              ((Jt = Ou = window),
              (Gu = Jt.document || {}),
              (Nt.gsap = gt),
              (Jt.gsapVersions || (Jt.gsapVersions = [])).push(gt.version),
              Wd(cs || Jt.GreenSockGlobals || (!Jt.gsap && Jt) || {}),
              sp.forEach(op)),
            (g = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            m && x.sleep(),
            (_ =
              g ||
              function (R) {
                return setTimeout(R, (c - x.time * 1e3 + 1) | 0);
              }),
            (Qi = 1),
            O(2));
        },
        sleep: function () {
          ((g ? cancelAnimationFrame : clearTimeout)(m), (Qi = 0), (_ = $i));
        },
        lagSmoothing: function (R, L) {
          ((r = R || 1 / 0), (i = Math.min(L || 33, r)));
        },
        fps: function (R) {
          ((f = 1e3 / (R || 240)), (c = x.time * 1e3 + f));
        },
        add: function (R, L, j) {
          var I = L
            ? function (B, M, Y, A) {
                (R(B, M, Y, A), x.remove(I));
              }
            : R;
          return (x.remove(R), d[j ? "unshift" : "push"](I), Qr(), I);
        },
        remove: function (R, L) {
          ~(L = d.indexOf(R)) && d.splice(L, 1) && C >= L && C--;
        },
        _listeners: d,
      }),
      x
    );
  })(),
  Qr = function () {
    return !Qi && Ct.wake();
  },
  fe = {},
  g0 = /^[\d.\-M][\d.\-,\s]/,
  v0 = /["']/g,
  y0 = function (r) {
    for (
      var i = {}, s = r.substr(1, r.length - 3).split(":"), o = s[0], f = 1, c = s.length, d, m, _;
      f < c;
      f++
    )
      ((m = s[f]),
        (d = f !== c - 1 ? m.lastIndexOf(",") : m.length),
        (_ = m.substr(0, d)),
        (i[o] = isNaN(_) ? _.replace(v0, "").trim() : +_),
        (o = m.substr(d + 1).trim()));
    return i;
  },
  x0 = function (r) {
    var i = r.indexOf("(") + 1,
      s = r.indexOf(")"),
      o = r.indexOf("(", i);
    return r.substring(i, ~o && o < s ? r.indexOf(")", s + 1) : s);
  },
  w0 = function (r) {
    var i = (r + "").split("("),
      s = fe[i[0]];
    return s && i.length > 1 && s.config
      ? s.config.apply(null, ~r.indexOf("{") ? [y0(i[1])] : x0(r).split(",").map(Xd))
      : fe._CE && g0.test(r)
        ? fe._CE("", r)
        : s;
  },
  S0 = function (r) {
    return function (i) {
      return 1 - r(1 - i);
    };
  },
  ur = function (r, i) {
    return (r && (Ae(r) ? r : fe[r] || w0(r))) || i;
  },
  fr = function (r, i, s, o) {
    (s === void 0 &&
      (s = function (m) {
        return 1 - i(1 - m);
      }),
      o === void 0 &&
        (o = function (m) {
          return m < 0.5 ? i(m * 2) / 2 : 1 - i((1 - m) * 2) / 2;
        }));
    var f = { easeIn: i, easeOut: s, easeInOut: o },
      c;
    return (
      ht(r, function (d) {
        ((fe[d] = Nt[d] = f), (fe[(c = d.toLowerCase())] = s));
        for (var m in f)
          fe[c + (m === "easeIn" ? ".in" : m === "easeOut" ? ".out" : ".inOut")] = fe[d + "." + m] =
            f[m];
      }),
      f
    );
  },
  cp = function (r) {
    return function (i) {
      return i < 0.5 ? (1 - r(1 - i * 2)) / 2 : 0.5 + r((i - 0.5) * 2) / 2;
    };
  },
  ku = function p(r, i, s) {
    var o = i >= 1 ? i : 1,
      f = (s || (r ? 0.3 : 0.45)) / (i < 1 ? i : 1),
      c = (f / Nu) * (Math.asin(1 / o) || 0),
      d = function (g) {
        return g === 1 ? 1 : o * Math.pow(2, -10 * g) * Ym((g - c) * f) + 1;
      },
      m =
        r === "out"
          ? d
          : r === "in"
            ? function (_) {
                return 1 - d(1 - _);
              }
            : cp(d);
    return (
      (f = Nu / f),
      (m.config = function (_, g) {
        return p(r, _, g);
      }),
      m
    );
  },
  Cu = function p(r, i) {
    i === void 0 && (i = 1.70158);
    var s = function (c) {
        return c ? --c * c * ((i + 1) * c + i) + 1 : 0;
      },
      o =
        r === "out"
          ? s
          : r === "in"
            ? function (f) {
                return 1 - s(1 - f);
              }
            : cp(s);
    return (
      (o.config = function (f) {
        return p(r, f);
      }),
      o
    );
  };
ht("Linear,Quad,Cubic,Quart,Quint,Strong", function (p, r) {
  var i = r < 5 ? r + 1 : r;
  fr(
    p + ",Power" + (i - 1),
    r
      ? function (s) {
          return Math.pow(s, i);
        }
      : function (s) {
          return s;
        },
    function (s) {
      return 1 - Math.pow(1 - s, i);
    },
    function (s) {
      return s < 0.5 ? Math.pow(s * 2, i) / 2 : 1 - Math.pow((1 - s) * 2, i) / 2;
    },
  );
});
fe.Linear.easeNone = fe.none = fe.Linear.easeIn;
fr("Elastic", ku("in"), ku("out"), ku());
(function (p, r) {
  var i = 1 / r,
    s = 2 * i,
    o = 2.5 * i,
    f = function (d) {
      return d < i
        ? p * d * d
        : d < s
          ? p * Math.pow(d - 1.5 / r, 2) + 0.75
          : d < o
            ? p * (d -= 2.25 / r) * d + 0.9375
            : p * Math.pow(d - 2.625 / r, 2) + 0.984375;
    };
  fr(
    "Bounce",
    function (c) {
      return 1 - f(1 - c);
    },
    f,
  );
})(7.5625, 2.75);
fr("Expo", function (p) {
  return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
});
fr("Circ", function (p) {
  return -(Fd(1 - p * p) - 1);
});
fr("Sine", function (p) {
  return p === 1 ? 1 : -Qm(p * $m) + 1;
});
fr("Back", Cu("in"), Cu("out"), Cu());
fe.SteppedEase =
  fe.steps =
  Nt.SteppedEase =
    {
      config: function (r, i) {
        r === void 0 && (r = 1);
        var s = 1 / r,
          o = r + (i ? 0 : 1),
          f = i ? 1 : 0,
          c = 1 - Se;
        return function (d) {
          return (((o * Ki(0, c, d)) | 0) + f) * s;
        };
      },
    };
Vi.ease = fe["quad.out"];
ht("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (p) {
  return (Zu += p + "," + p + "Params,");
});
var dp = function (r, i) {
    ((this.id = Hm++),
      (r._gsap = this),
      (this.target = r),
      (this.harness = i),
      (this.get = i ? i.get : Qd),
      (this.set = i ? i.getSetter : ra));
  },
  Yi = (function () {
    function p(i) {
      ((this.vars = i),
        (this._delay = +i.delay || 0),
        (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
          ((this._rDelay = i.repeatDelay || 0), (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
        (this._ts = 1),
        Hr(this, +i.duration, 1, 1),
        (this.data = i.data),
        Oe && ((this._ctx = Oe), Oe.data.push(this)),
        Qi || Ct.wake());
    }
    var r = p.prototype;
    return (
      (r.delay = function (s) {
        return s || s === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + s - this._delay),
            (this._delay = s),
            this)
          : this._delay;
      }),
      (r.duration = function (s) {
        return arguments.length
          ? this.totalDuration(this._repeat > 0 ? s + (s + this._rDelay) * this._repeat : s)
          : this.totalDuration() && this._dur;
      }),
      (r.totalDuration = function (s) {
        return arguments.length
          ? ((this._dirty = 0),
            Hr(this, this._repeat < 0 ? s : (s - this._repeat * this._rDelay) / (this._repeat + 1)))
          : this._tDur;
      }),
      (r.totalTime = function (s, o) {
        if ((Qr(), !arguments.length)) return this._tTime;
        var f = this._dp;
        if (f && f.smoothChildTiming && this._ts) {
          for (xs(this, s), !f._dp || f.parent || qd(f, this); f && f.parent;)
            (f.parent._time !==
              f._start +
                (f._ts >= 0 ? f._tTime / f._ts : (f.totalDuration() - f._tTime) / -f._ts) &&
              f.totalTime(f._tTime, !0),
              (f = f.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && s < this._tDur) || (this._ts < 0 && s > 0) || (!this._tDur && !s)) &&
            bt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== s ||
            (!this._dur && !o) ||
            (this._initted && Math.abs(this._zTime) === Se) ||
            (!this._initted && this._dur && s) ||
            (!s && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = s), Yd(this, s, o)),
          this
        );
      }),
      (r.time = function (s, o) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), s + _d(this)) % (this._dur + this._rDelay) ||
                (s ? this._dur : 0),
              o,
            )
          : this._time;
      }),
      (r.totalProgress = function (s, o) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * s, o)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (r.progress = function (s, o) {
        return arguments.length
          ? this.totalTime(
              this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - s : s) + _d(this),
              o,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (r.iteration = function (s, o) {
        var f = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (s - 1) * f, o)
          : this._repeat
            ? $r(this._tTime, f) + 1
            : 1;
      }),
      (r.timeScale = function (s, o) {
        if (!arguments.length) return this._rts === -Se ? 0 : this._rts;
        if (this._rts === s) return this;
        var f = this.parent && this._ts ? hs(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +s || 0),
          (this._ts = this._ps || s === -Se ? 0 : this._rts),
          this.totalTime(Ki(-Math.abs(this._delay), this.totalDuration(), f), o !== !1),
          ys(this),
          n0(this)
        );
      }),
      (r.paused = function (s) {
        return arguments.length
          ? (this._ps !== s &&
              ((this._ps = s),
              s
                ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Qr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 && Math.abs(this._zTime) !== Se && (this._tTime -= Se),
                  ))),
            this)
          : this._ps;
      }),
      (r.startTime = function (s) {
        if (arguments.length) {
          this._start = Me(s);
          var o = this.parent || this._dp;
          return (o && (o._sort || !this.parent) && bt(o, this, this._start - this._delay), this);
        }
        return this._start;
      }),
      (r.endTime = function (s) {
        return (
          this._start + (pt(s) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        );
      }),
      (r.rawTime = function (s) {
        var o = this.parent || this._dp;
        return o
          ? s && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? hs(o.rawTime(s), this)
              : this._tTime
          : this._tTime;
      }),
      (r.revert = function (s) {
        s === void 0 && (s = Jm);
        var o = Ze;
        return (
          (Ze = s),
          bu(this) &&
            (this.timeline && this.timeline.revert(s), this.totalTime(-0.01, s.suppressEvents)),
          this.data !== "nested" && s.kill !== !1 && this.kill(),
          (Ze = o),
          this
        );
      }),
      (r.globalTime = function (s) {
        for (var o = this, f = arguments.length ? s : o.rawTime(); o;)
          ((f = o._start + f / (Math.abs(o._ts) || 1)), (o = o._dp));
        return !this.parent && this._sat ? this._sat.globalTime(s) : f;
      }),
      (r.repeat = function (s) {
        return arguments.length
          ? ((this._repeat = s === 1 / 0 ? -2 : s), gd(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (r.repeatDelay = function (s) {
        if (arguments.length) {
          var o = this._time;
          return ((this._rDelay = s), gd(this), o ? this.time(o) : this);
        }
        return this._rDelay;
      }),
      (r.yoyo = function (s) {
        return arguments.length ? ((this._yoyo = s), this) : this._yoyo;
      }),
      (r.seek = function (s, o) {
        return this.totalTime(At(this, s), pt(o));
      }),
      (r.restart = function (s, o) {
        return (
          this.play().totalTime(s ? -this._delay : 0, pt(o)),
          this._dur || (this._zTime = -Se),
          this
        );
      }),
      (r.play = function (s, o) {
        return (s != null && this.seek(s, o), this.reversed(!1).paused(!1));
      }),
      (r.reverse = function (s, o) {
        return (s != null && this.seek(s || this.totalDuration(), o), this.reversed(!0).paused(!1));
      }),
      (r.pause = function (s, o) {
        return (s != null && this.seek(s, o), this.paused(!0));
      }),
      (r.resume = function () {
        return this.paused(!1);
      }),
      (r.reversed = function (s) {
        return arguments.length
          ? (!!s !== this.reversed() && this.timeScale(-this._rts || (s ? -Se : 0)), this)
          : this._rts < 0;
      }),
      (r.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -Se), this);
      }),
      (r.isActive = function () {
        var s = this.parent || this._dp,
          o = this._start,
          f;
        return !!(
          !s ||
          (this._ts &&
            this._initted &&
            s.isActive() &&
            (f = s.rawTime(!0)) >= o &&
            f < this.endTime(!0) - Se)
        );
      }),
      (r.eventCallback = function (s, o, f) {
        var c = this.vars;
        return arguments.length > 1
          ? (o
              ? ((c[s] = o), f && (c[s + "Params"] = f), s === "onUpdate" && (this._onUpdate = o))
              : delete c[s],
            this)
          : c[s];
      }),
      (r.then = function (s) {
        var o = this,
          f = o._prom;
        return new Promise(function (c) {
          var d = Ae(s) ? s : Gd,
            m = function () {
              var g = o.then;
              ((o.then = null),
                f && f(),
                Ae(d) && (d = d(o)) && (d.then || d === o) && (o.then = g),
                c(d),
                (o.then = g));
            };
          (o._initted && o.totalProgress() === 1 && o._ts >= 0) || (!o._tTime && o._ts < 0)
            ? m()
            : (o._prom = m);
        });
      }),
      (r.kill = function () {
        Li(this);
      }),
      p
    );
  })();
Ot(Yi.prototype, {
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
  _zTime: -Se,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var dt = (function (p) {
  Ad(r, p);
  function r(s, o) {
    var f;
    return (
      s === void 0 && (s = {}),
      (f = p.call(this, s) || this),
      (f.labels = {}),
      (f.smoothChildTiming = !!s.smoothChildTiming),
      (f.autoRemoveChildren = !!s.autoRemoveChildren),
      (f._sort = pt(s.sortChildren)),
      je && bt(s.parent || je, cn(f), o),
      s.reversed && f.reverse(),
      s.paused && f.paused(!0),
      s.scrollTrigger && Zd(cn(f), s.scrollTrigger),
      f
    );
  }
  var i = r.prototype;
  return (
    (i.to = function (o, f, c) {
      return (Ii(0, arguments, this), this);
    }),
    (i.from = function (o, f, c) {
      return (Ii(1, arguments, this), this);
    }),
    (i.fromTo = function (o, f, c, d) {
      return (Ii(2, arguments, this), this);
    }),
    (i.set = function (o, f, c) {
      return (
        (f.duration = 0),
        (f.parent = this),
        Fi(f).repeatDelay || (f.repeat = 0),
        (f.immediateRender = !!f.immediateRender),
        new Ve(o, f, At(this, c), 1),
        this
      );
    }),
    (i.call = function (o, f, c) {
      return bt(this, Ve.delayedCall(0, o, f), c);
    }),
    (i.staggerTo = function (o, f, c, d, m, _, g) {
      return (
        (c.duration = f),
        (c.stagger = c.stagger || d),
        (c.onComplete = _),
        (c.onCompleteParams = g),
        (c.parent = this),
        new Ve(o, c, At(this, m)),
        this
      );
    }),
    (i.staggerFrom = function (o, f, c, d, m, _, g) {
      return (
        (c.runBackwards = 1),
        (Fi(c).immediateRender = pt(c.immediateRender)),
        this.staggerTo(o, f, c, d, m, _, g)
      );
    }),
    (i.staggerFromTo = function (o, f, c, d, m, _, g, x) {
      return (
        (d.startAt = c),
        (Fi(d).immediateRender = pt(d.immediateRender)),
        this.staggerTo(o, f, d, m, _, g, x)
      );
    }),
    (i.render = function (o, f, c) {
      var d = this._time,
        m = this._dirty ? this.totalDuration() : this._tDur,
        _ = this._dur,
        g = o <= 0 ? 0 : Me(o),
        x = this._zTime < 0 != o < 0 && (this._initted || !_),
        k,
        C,
        O,
        y,
        R,
        L,
        j,
        I,
        B,
        M,
        Y,
        A;
      if ((this !== je && g > m && o >= 0 && (g = m), g !== this._tTime || c || x)) {
        if (
          (d !== this._time && _ && ((g += this._time - d), (o += this._time - d)),
          (k = g),
          (B = this._start),
          (I = this._ts),
          (L = !I),
          x && (_ || (d = this._zTime), (o || !f) && (this._zTime = o)),
          this._repeat)
        ) {
          if (((Y = this._yoyo), (R = _ + this._rDelay), this._repeat < -1 && o < 0))
            return this.totalTime(R * 100 + o, f, c);
          if (
            ((k = Me(g % R)),
            g === m
              ? ((y = this._repeat), (k = _))
              : ((M = Me(g / R)), (y = ~~M), y && y === M && ((k = _), y--), k > _ && (k = _)),
            (M = $r(this._tTime, R)),
            !d && this._tTime && M !== y && this._tTime - M * R - this._dur <= 0 && (M = y),
            Y && y & 1 && ((k = _ - k), (A = 1)),
            y !== M && !this._lock)
          ) {
            var H = Y && M & 1,
              V = H === (Y && y & 1);
            if (
              (y < M && (H = !H),
              (d = H ? 0 : g % _ ? _ : g),
              (this._lock = 1),
              (this.render(d || (A ? 0 : Me(y * R)), f, !_)._lock = 0),
              (this._tTime = g),
              !f && this.parent && Et(this, "onRepeat"),
              this.vars.repeatRefresh && !A && ((this.invalidate()._lock = 1), (M = y)),
              (d && d !== this._time) ||
                L !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((_ = this._dur),
              (m = this._tDur),
              V &&
                ((this._lock = 2),
                (d = H ? _ : -1e-4),
                this.render(d, !0),
                this.vars.repeatRefresh && !A && this.invalidate()),
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
            ((j = s0(this, Me(d), Me(k))), j && (g -= k - (k = j._start))),
          (this._tTime = g),
          (this._time = k),
          (this._act = !!I),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = o),
            (d = 0)),
          !d && g && _ && !f && !M && (Et(this, "onStart"), this._tTime !== g))
        )
          return this;
        if (k >= d && o >= 0)
          for (C = this._first; C;) {
            if (((O = C._next), (C._act || k >= C._start) && C._ts && j !== C)) {
              if (C.parent !== this) return this.render(o, f, c);
              if (
                (C.render(
                  C._ts > 0
                    ? (k - C._start) * C._ts
                    : (C._dirty ? C.totalDuration() : C._tDur) + (k - C._start) * C._ts,
                  f,
                  c,
                ),
                k !== this._time || (!this._ts && !L))
              ) {
                ((j = 0), O && (g += this._zTime = -Se));
                break;
              }
            }
            C = O;
          }
        else {
          C = this._last;
          for (var ee = o < 0 ? o : k; C;) {
            if (((O = C._prev), (C._act || ee <= C._end) && C._ts && j !== C)) {
              if (C.parent !== this) return this.render(o, f, c);
              if (
                (C.render(
                  C._ts > 0
                    ? (ee - C._start) * C._ts
                    : (C._dirty ? C.totalDuration() : C._tDur) + (ee - C._start) * C._ts,
                  f,
                  c || (Ze && bu(C)),
                ),
                k !== this._time || (!this._ts && !L))
              ) {
                ((j = 0), O && (g += this._zTime = ee ? -Se : Se));
                break;
              }
            }
            C = O;
          }
        }
        if (
          j &&
          !f &&
          (this.pause(), (j.render(k >= d ? 0 : -Se)._zTime = k >= d ? 1 : -1), this._ts)
        )
          return ((this._start = B), ys(this), this.render(o, f, c));
        (this._onUpdate && !f && Et(this, "onUpdate", !0),
          ((g === m && this._tTime >= this.totalDuration()) || (!g && d)) &&
            (B === this._start || Math.abs(I) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((o || !_) && ((g === m && this._ts > 0) || (!g && this._ts < 0)) && Un(this, 1),
              !f &&
                !(o < 0 && !d) &&
                (g || d || !m) &&
                (Et(this, g === m && o >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(g < m && this.timeScale() > 0) && this._prom()))));
      }
      return this;
    }),
    (i.add = function (o, f) {
      var c = this;
      if ((pn(f) || (f = At(this, f, o)), !(o instanceof Yi))) {
        if (rt(o))
          return (
            o.forEach(function (d) {
              return c.add(d, f);
            }),
            this
          );
        if (Xe(o)) return this.addLabel(o, f);
        if (Ae(o)) o = Ve.delayedCall(0, o);
        else return this;
      }
      return this !== o ? bt(this, o, f) : this;
    }),
    (i.getChildren = function (o, f, c, d) {
      (o === void 0 && (o = !0),
        f === void 0 && (f = !0),
        c === void 0 && (c = !0),
        d === void 0 && (d = -Ft));
      for (var m = [], _ = this._first; _;)
        (_._start >= d &&
          (_ instanceof Ve
            ? f && m.push(_)
            : (c && m.push(_), o && m.push.apply(m, _.getChildren(!0, f, c)))),
          (_ = _._next));
      return m;
    }),
    (i.getById = function (o) {
      for (var f = this.getChildren(1, 1, 1), c = f.length; c--;)
        if (f[c].vars.id === o) return f[c];
    }),
    (i.remove = function (o) {
      return Xe(o)
        ? this.removeLabel(o)
        : Ae(o)
          ? this.killTweensOf(o)
          : (o.parent === this && vs(this, o),
            o === this._recent && (this._recent = this._last),
            or(this));
    }),
    (i.totalTime = function (o, f) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Me(
              Ct.time - (this._ts > 0 ? o / this._ts : (this.totalDuration() - o) / -this._ts),
            )),
          p.prototype.totalTime.call(this, o, f),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (i.addLabel = function (o, f) {
      return ((this.labels[o] = At(this, f)), this);
    }),
    (i.removeLabel = function (o) {
      return (delete this.labels[o], this);
    }),
    (i.addPause = function (o, f, c) {
      var d = Ve.delayedCall(0, f || $i, c);
      return ((d.data = "isPause"), (this._hasPause = 1), bt(this, d, At(this, o)));
    }),
    (i.removePause = function (o) {
      var f = this._first;
      for (o = At(this, o); f;) (f._start === o && f.data === "isPause" && Un(f), (f = f._next));
    }),
    (i.killTweensOf = function (o, f, c) {
      for (var d = this.getTweensOf(o, c), m = d.length; m--;) Dn !== d[m] && d[m].kill(o, f);
      return this;
    }),
    (i.getTweensOf = function (o, f) {
      for (var c = [], d = It(o), m = this._first, _ = pn(f), g; m;)
        (m instanceof Ve
          ? bm(m._targets, d) &&
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
    (i.tweenTo = function (o, f) {
      f = f || {};
      var c = this,
        d = At(c, o),
        m = f,
        _ = m.startAt,
        g = m.onStart,
        x = m.onStartParams,
        k = m.immediateRender,
        C,
        O = Ve.to(
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
                Se,
              onStart: function () {
                if ((c.pause(), !C)) {
                  var R =
                    f.duration ||
                    Math.abs((d - (_ && "time" in _ ? _.time : c._time)) / c.timeScale());
                  (O._dur !== R && Hr(O, R, 0, 1).render(O._time, !0, !0), (C = 1));
                }
                g && g.apply(O, x || []);
              },
            },
            f,
          ),
        );
      return k ? O.render(0) : O;
    }),
    (i.tweenFromTo = function (o, f, c) {
      return this.tweenTo(f, Ot({ startAt: { time: At(this, o) } }, c));
    }),
    (i.recent = function () {
      return this._recent;
    }),
    (i.nextLabel = function (o) {
      return (o === void 0 && (o = this._time), vd(this, At(this, o)));
    }),
    (i.previousLabel = function (o) {
      return (o === void 0 && (o = this._time), vd(this, At(this, o), 1));
    }),
    (i.currentLabel = function (o) {
      return arguments.length ? this.seek(o, !0) : this.previousLabel(this._time + Se);
    }),
    (i.shiftChildren = function (o, f, c) {
      c === void 0 && (c = 0);
      var d = this._first,
        m = this.labels,
        _;
      for (o = Me(o); d;) (d._start >= c && ((d._start += o), (d._end += o)), (d = d._next));
      if (f) for (_ in m) m[_] >= c && (m[_] += o);
      return or(this);
    }),
    (i.invalidate = function (o) {
      var f = this._first;
      for (this._lock = 0; f;) (f.invalidate(o), (f = f._next));
      return p.prototype.invalidate.call(this, o);
    }),
    (i.clear = function (o) {
      o === void 0 && (o = !0);
      for (var f = this._first, c; f;) ((c = f._next), this.remove(f), (f = c));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        o && (this.labels = {}),
        or(this)
      );
    }),
    (i.totalDuration = function (o) {
      var f = 0,
        c = this,
        d = c._last,
        m = Ft,
        _,
        g,
        x;
      if (arguments.length)
        return c.timeScale(
          (c._repeat < 0 ? c.duration() : c.totalDuration()) / (c.reversed() ? -o : o),
        );
      if (c._dirty) {
        for (x = c.parent; d;)
          ((_ = d._prev),
            d._dirty && d.totalDuration(),
            (g = d._start),
            g > m && c._sort && d._ts && !c._lock
              ? ((c._lock = 1), (bt(c, d, g - d._delay, 1)._lock = 0))
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
        (Hr(c, c === je && c._time > f ? c._time : f, 1, 1), (c._dirty = 0));
      }
      return c._tDur;
    }),
    (r.updateRoot = function (o) {
      if ((je._ts && (Yd(je, hs(o, je)), (Hd = Ct.frame)), Ct.frame >= hd)) {
        hd += Pt.autoSleep || 120;
        var f = je._first;
        if ((!f || !f._ts) && Pt.autoSleep && Ct._listeners.length < 2) {
          for (; f && !f._ts;) f = f._next;
          f || Ct.sleep();
        }
      }
    }),
    r
  );
})(Yi);
Ot(dt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var k0 = function (r, i, s, o, f, c, d) {
    var m = new mt(this._pt, r, i, 0, 1, vp, null, f),
      _ = 0,
      g = 0,
      x,
      k,
      C,
      O,
      y,
      R,
      L,
      j;
    for (
      m.b = s,
        m.e = o,
        s += "",
        o += "",
        (L = ~o.indexOf("random(")) && (o = Hi(o)),
        c && ((j = [s, o]), c(j, r, i), (s = j[0]), (o = j[1])),
        k = s.match(xu) || [];
      (x = xu.exec(o));
    )
      ((O = x[0]),
        (y = o.substring(_, x.index)),
        C ? (C = (C + 1) % 5) : y.substr(-5) === "rgba(" && (C = 1),
        O !== k[g++] &&
          ((R = parseFloat(k[g - 1]) || 0),
          (m._pt = {
            _next: m._pt,
            p: y || g === 1 ? y : ",",
            s: R,
            c: O.charAt(1) === "=" ? Ur(R, O) - R : parseFloat(O) - R,
            m: C && C < 4 ? Math.round : 0,
          }),
          (_ = xu.lastIndex)));
    return (
      (m.c = _ < o.length ? o.substring(_, o.length) : ""),
      (m.fp = d),
      (Bd.test(o) || L) && (m.e = 0),
      (this._pt = m),
      m
    );
  },
  ea = function (r, i, s, o, f, c, d, m, _, g) {
    Ae(o) && (o = o(f || 0, r, c));
    var x = r[i],
      k =
        s !== "get"
          ? s
          : Ae(x)
            ? _
              ? r[i.indexOf("set") || !Ae(r["get" + i.substr(3)]) ? i : "get" + i.substr(3)](_)
              : r[i]()
            : x,
      C = Ae(x) ? (_ ? N0 : _p) : na,
      O;
    if (
      (Xe(o) &&
        (~o.indexOf("random(") && (o = Hi(o)),
        o.charAt(1) === "=" && ((O = Ur(k, o) + (nt(k) || 0)), (O || O === 0) && (o = O))),
      !g || k !== o || Au)
    )
      return !isNaN(k * o) && o !== ""
        ? ((O = new mt(
            this._pt,
            r,
            i,
            +k || 0,
            o - (k || 0),
            typeof x == "boolean" ? R0 : gp,
            0,
            C,
          )),
          _ && (O.fp = _),
          d && O.modifier(d, this, r),
          (this._pt = O))
        : (!x && !(i in r) && Ku(i, o), k0.call(this, r, i, k, o, C, m || Pt.stringFilter, _));
  },
  C0 = function (r, i, s, o, f) {
    if ((Ae(r) && (r = Ui(r, f, i, s, o)), !tn(r) || (r.style && r.nodeType) || rt(r) || Id(r)))
      return Xe(r) ? Ui(r, f, i, s, o) : r;
    var c = {},
      d;
    for (d in r) c[d] = Ui(r[d], f, i, s, o);
    return c;
  },
  pp = function (r, i, s, o, f, c) {
    var d, m, _, g;
    if (
      kt[r] &&
      (d = new kt[r]()).init(f, d.rawVars ? i[r] : C0(i[r], o, f, c, s), s, o, c) !== !1 &&
      ((s._pt = m = new mt(s._pt, f, r, 0, 1, d.render, d, 0, d.priority)), s !== Ir)
    )
      for (_ = s._ptLookup[s._targets.indexOf(f)], g = d._props.length; g--;) _[d._props[g]] = m;
    return d;
  },
  Dn,
  Au,
  ta = function p(r, i, s) {
    var o = r.vars,
      f = o.ease,
      c = o.startAt,
      d = o.immediateRender,
      m = o.lazy,
      _ = o.onUpdate,
      g = o.runBackwards,
      x = o.yoyoEase,
      k = o.keyframes,
      C = o.autoRevert,
      O = r._dur,
      y = r._startAt,
      R = r._targets,
      L = r.parent,
      j = L && L.data === "nested" ? L.vars.targets : R,
      I = r._overwrite === "auto" && !Qu,
      B = r.timeline,
      M = o.easeReverse || x,
      Y,
      A,
      H,
      V,
      ee,
      me,
      pe,
      ue,
      ce,
      ve,
      de,
      le,
      Q;
    if (
      (B && (!k || !f) && (f = "none"),
      (r._ease = ur(f, Vi.ease)),
      (r._rEase = M && (ur(M) || r._ease)),
      (r._from = !B && !!o.runBackwards),
      r._from && (r.ratio = 1),
      !B || (k && !o.stagger))
    ) {
      if (
        ((ue = R[0] ? sr(R[0]).harness : 0),
        (le = ue && o[ue.prop]),
        (Y = ps(o, qu)),
        y &&
          (y._zTime < 0 && y.progress(1),
          i < 0 && g && d && !C ? y.render(-1, !0) : y.revert(g && O ? us : Zm),
          (y._lazy = 0)),
        c)
      ) {
        if (
          (Un(
            (r._startAt = Ve.set(
              R,
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
                      return Et(r, "onUpdate");
                    },
                  stagger: 0,
                },
                c,
              ),
            )),
          ),
          (r._startAt._dp = 0),
          (r._startAt._sat = r),
          i < 0 && (Ze || (!d && !C)) && r._startAt.revert(us),
          d && O && i <= 0 && s <= 0)
        ) {
          i && (r._zTime = i);
          return;
        }
      } else if (g && O && !y) {
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
            Y,
          )),
          le && (H[ue.prop] = le),
          Un((r._startAt = Ve.set(R, H))),
          (r._startAt._dp = 0),
          (r._startAt._sat = r),
          i < 0 && (Ze ? r._startAt.revert(us) : r._startAt.render(-1, !0)),
          (r._zTime = i),
          !d)
        )
          p(r._startAt, Se, Se);
        else if (!i) return;
      }
      for (r._pt = r._ptCache = 0, m = (O && pt(m)) || (m && !O), A = 0; A < R.length; A++) {
        if (
          ((ee = R[A]),
          (pe = ee._gsap || Ju(R)[A]._gsap),
          (r._ptLookup[A] = ve = {}),
          Ru[pe.id] && Fn.length && ds(),
          (de = j === R ? A : j.indexOf(ee)),
          ue &&
            (ce = new ue()).init(ee, le || Y, r, de, j) !== !1 &&
            ((r._pt = V = new mt(r._pt, ee, ce.name, 0, 1, ce.render, ce, 0, ce.priority)),
            ce._props.forEach(function (b) {
              ve[b] = V;
            }),
            ce.priority && (me = 1)),
          !ue || le)
        )
          for (H in Y)
            kt[H] && (ce = pp(H, Y, r, de, ee, j))
              ? ce.priority && (me = 1)
              : (ve[H] = V = ea.call(r, ee, H, "get", Y[H], de, j, 0, o.stringFilter));
        (r._op && r._op[A] && r.kill(ee, r._op[A]),
          I &&
            r._pt &&
            ((Dn = r), je.killTweensOf(ee, ve, r.globalTime(i)), (Q = !r.parent), (Dn = 0)),
          r._pt && m && (Ru[pe.id] = 1));
      }
      (me && yp(r), r._onInit && r._onInit(r));
    }
    ((r._onUpdate = _),
      (r._initted = (!r._op || r._pt) && !Q),
      k && i <= 0 && B.render(Ft, !0, !0));
  },
  E0 = function (r, i, s, o, f, c, d, m) {
    var _ = ((r._pt && r._ptCache) || (r._ptCache = {}))[i],
      g,
      x,
      k,
      C;
    if (!_)
      for (_ = r._ptCache[i] = [], k = r._ptLookup, C = r._targets.length; C--;) {
        if (((g = k[C][i]), g && g.d && g.d._pt))
          for (g = g.d._pt; g && g.p !== i && g.fp !== i;) g = g._next;
        if (!g)
          return (
            (Au = 1),
            (r.vars[i] = "+=0"),
            ta(r, d),
            (Au = 0),
            m ? Wi(i + " not eligible for reset. Try splitting into individual properties") : 1
          );
        _.push(g);
      }
    for (C = _.length; C--;)
      ((x = _[C]),
        (g = x._pt || x),
        (g.s = (o || o === 0) && !f ? o : g.s + (o || 0) + c * g.c),
        (g.c = s - g.s),
        x.e && (x.e = Ue(s) + nt(x.e)),
        x.b && (x.b = g.s + nt(x.b)));
  },
  T0 = function (r, i) {
    var s = r[0] ? sr(r[0]).harness : 0,
      o = s && s.aliases,
      f,
      c,
      d,
      m;
    if (!o) return i;
    f = Wr({}, i);
    for (c in o) if (c in f) for (m = o[c].split(","), d = m.length; d--;) f[m[d]] = f[c];
    return f;
  },
  P0 = function (r, i, s, o) {
    var f = i.ease || o || "power1.inOut",
      c,
      d;
    if (rt(i))
      ((d = s[r] || (s[r] = [])),
        i.forEach(function (m, _) {
          return d.push({ t: (_ / (i.length - 1)) * 100, v: m, e: f });
        }));
    else
      for (c in i)
        ((d = s[c] || (s[c] = [])), c === "ease" || d.push({ t: parseFloat(r), v: i[c], e: f }));
  },
  Ui = function (r, i, s, o, f) {
    return Ae(r) ? r.call(i, s, o, f) : Xe(r) && ~r.indexOf("random(") ? Hi(r) : r;
  },
  hp = Zu + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
  mp = {};
ht(hp + ",id,stagger,delay,duration,paused,scrollTrigger", function (p) {
  return (mp[p] = 1);
});
var Ve = (function (p) {
  Ad(r, p);
  function r(s, o, f, c) {
    var d;
    (typeof o == "number" && ((f.duration = o), (o = f), (f = null)),
      (d = p.call(this, c ? o : Fi(o)) || this));
    var m = d.vars,
      _ = m.duration,
      g = m.delay,
      x = m.immediateRender,
      k = m.stagger,
      C = m.overwrite,
      O = m.keyframes,
      y = m.defaults,
      R = m.scrollTrigger,
      L = o.parent || je,
      j = (rt(s) || Id(s) ? pn(s[0]) : "length" in o) ? [s] : It(s),
      I,
      B,
      M,
      Y,
      A,
      H,
      V,
      ee;
    if (
      ((d._targets = j.length
        ? Ju(j)
        : Wi("GSAP target " + s + " not found. https://gsap.com", !Pt.nullTargetWarn) || []),
      (d._ptLookup = []),
      (d._overwrite = C),
      O || k || os(_) || os(g))
    ) {
      o = d.vars;
      var me = o.easeReverse || o.yoyoEase;
      if (
        ((I = d.timeline =
          new dt({
            data: "nested",
            defaults: y || {},
            targets: L && L.data === "nested" ? L.vars.targets : j,
          })),
        I.kill(),
        (I.parent = I._dp = cn(d)),
        (I._start = 0),
        k || os(_) || os(g))
      ) {
        if (((Y = j.length), (V = k && tp(k)), tn(k)))
          for (A in k) ~hp.indexOf(A) && (ee || (ee = {}), (ee[A] = k[A]));
        for (B = 0; B < Y; B++)
          ((M = ps(o, mp)),
            (M.stagger = 0),
            me && (M.easeReverse = me),
            ee && Wr(M, ee),
            (H = j[B]),
            (M.duration = +Ui(_, cn(d), B, H, j)),
            (M.delay = (+Ui(g, cn(d), B, H, j) || 0) - d._delay),
            !k && Y === 1 && M.delay && ((d._delay = g = M.delay), (d._start += g), (M.delay = 0)),
            I.to(H, M, V ? V(B, H, j) : 0),
            (I._ease = fe.none));
        I.duration() ? (_ = g = 0) : (d.timeline = 0);
      } else if (O) {
        (Fi(Ot(I.vars.defaults, { ease: "none" })), (I._ease = ur(O.ease || o.ease || "none")));
        var pe = 0,
          ue,
          ce,
          ve;
        if (rt(O))
          (O.forEach(function (de) {
            return I.to(j, de, ">");
          }),
            I.duration());
        else {
          M = {};
          for (A in O) A === "ease" || A === "easeEach" || P0(A, O[A], M, O.easeEach);
          for (A in M)
            for (
              ue = M[A].sort(function (de, le) {
                return de.t - le.t;
              }),
                pe = 0,
                B = 0;
              B < ue.length;
              B++
            )
              ((ce = ue[B]),
                (ve = { ease: ce.e, duration: ((ce.t - (B ? ue[B - 1].t : 0)) / 100) * _ }),
                (ve[A] = ce.v),
                I.to(j, ve, pe),
                (pe += ve.duration));
          I.duration() < _ && I.to({}, { duration: _ - I.duration() });
        }
      }
      _ || d.duration((_ = I.duration()));
    } else d.timeline = 0;
    return (
      C === !0 && !Qu && ((Dn = cn(d)), je.killTweensOf(j), (Dn = 0)),
      bt(L, cn(d), f),
      o.reversed && d.reverse(),
      o.paused && d.paused(!0),
      (x || (!_ && !O && d._start === Me(L._time) && pt(x) && r0(cn(d)) && L.data !== "nested")) &&
        ((d._tTime = -Se), d.render(Math.max(0, -g) || 0)),
      R && Zd(cn(d), R),
      d
    );
  }
  var i = r.prototype;
  return (
    (i.render = function (o, f, c) {
      var d = this._time,
        m = this._tDur,
        _ = this._dur,
        g = o < 0,
        x = o > m - Se && !g ? m : o < Se ? 0 : o,
        k,
        C,
        O,
        y,
        R,
        L,
        j,
        I;
      if (!_) l0(this, o, f, c);
      else if (
        x !== this._tTime ||
        !o ||
        c ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== g) ||
        this._lazy
      ) {
        if (((k = x), (I = this.timeline), this._repeat)) {
          if (((y = _ + this._rDelay), this._repeat < -1 && g))
            return this.totalTime(y * 100 + o, f, c);
          if (
            ((k = Me(x % y)),
            x === m
              ? ((O = this._repeat), (k = _))
              : ((R = Me(x / y)), (O = ~~R), O && O === R ? ((k = _), O--) : k > _ && (k = _)),
            (L = this._yoyo && O & 1),
            L && (k = _ - k),
            (R = $r(this._tTime, y)),
            k === d && !c && this._initted && O === R)
          )
            return ((this._tTime = x), this);
          O !== R &&
            this.vars.repeatRefresh &&
            !L &&
            !this._lock &&
            k !== y &&
            this._initted &&
            ((this._lock = c = 1), (this.render(Me(y * O), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (Jd(this, g ? o : k, c, f, x)) return ((this._tTime = 0), this);
          if (d !== this._time && !(c && this.vars.repeatRefresh && O !== R)) return this;
          if (_ !== this._dur) return this.render(o, f, c);
        }
        if (this._rEase) {
          var B = k < d;
          if (B !== this._inv) {
            var M = B ? d : _ - d;
            ((this._inv = B),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = d),
              (this._invRecip = M ? (B ? -1 : 1) / M : 0),
              (this._invScale = B ? -this.ratio : 1 - this.ratio),
              (this._invEase = B ? this._rEase : this._ease));
          }
          this.ratio = j =
            this._invRatio + this._invScale * this._invEase((k - this._invTime) * this._invRecip);
        } else this.ratio = j = this._ease(k / _);
        if (
          (this._from && (this.ratio = j = 1 - j),
          (this._tTime = x),
          (this._time = k),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !d && x && !f && !R && (Et(this, "onStart"), this._tTime !== x))
        )
          return this;
        for (C = this._pt; C;) (C.r(j, C.d), (C = C._next));
        ((I && I.render(o < 0 ? o : I._dur * I._ease(k / this._dur), f, c)) ||
          (this._startAt && (this._zTime = o)),
          this._onUpdate && !f && (g && zu(this, o, f, c), Et(this, "onUpdate")),
          this._repeat &&
            O !== R &&
            this.vars.onRepeat &&
            !f &&
            this.parent &&
            Et(this, "onRepeat"),
          (x === this._tDur || !x) &&
            this._tTime === x &&
            (g && !this._onUpdate && zu(this, o, !0, !0),
            (o || !_) &&
              ((x === this._tDur && this._ts > 0) || (!x && this._ts < 0)) &&
              Un(this, 1),
            !f &&
              !(g && !d) &&
              (x || d || L) &&
              (Et(this, x === m ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(x < m && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (i.targets = function () {
      return this._targets;
    }),
    (i.invalidate = function (o) {
      return (
        (!o || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(o),
        p.prototype.invalidate.call(this, o)
      );
    }),
    (i.resetTo = function (o, f, c, d, m) {
      (Qi || Ct.wake(), this._ts || this.play());
      var _ = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        g;
      return (
        this._initted || ta(this, _),
        (g = this._ease(_ / this._dur)),
        E0(this, o, f, c, d, g, _, m)
          ? this.resetTo(o, f, c, d, 1)
          : (xs(this, 0),
            this.parent || Kd(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
      );
    }),
    (i.kill = function (o, f) {
      if ((f === void 0 && (f = "all"), !o && (!f || f === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent ? Li(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ze),
          this
        );
      if (this.timeline) {
        var c = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(o, f, Dn && Dn.vars.overwrite !== !0)._first || Li(this),
          this.parent &&
            c !== this.timeline.totalDuration() &&
            Hr(this, (this._dur * this.timeline._tDur) / c, 0, 1),
          this
        );
      }
      var d = this._targets,
        m = o ? It(o) : d,
        _ = this._ptLookup,
        g = this._pt,
        x,
        k,
        C,
        O,
        y,
        R,
        L;
      if ((!f || f === "all") && t0(d, m)) return (f === "all" && (this._pt = 0), Li(this));
      for (
        x = this._op = this._op || [],
          f !== "all" &&
            (Xe(f) &&
              ((y = {}),
              ht(f, function (j) {
                return (y[j] = 1);
              }),
              (f = y)),
            (f = T0(d, f))),
          L = d.length;
        L--;
      )
        if (~m.indexOf(d[L])) {
          ((k = _[L]),
            f === "all" ? ((x[L] = f), (O = k), (C = {})) : ((C = x[L] = x[L] || {}), (O = f)));
          for (y in O)
            ((R = k && k[y]),
              R && ((!("kill" in R.d) || R.d.kill(y) === !0) && vs(this, R, "_pt"), delete k[y]),
              C !== "all" && (C[y] = 1));
        }
      return (this._initted && !this._pt && g && Li(this), this);
    }),
    (r.to = function (o, f) {
      return new r(o, f, arguments[2]);
    }),
    (r.from = function (o, f) {
      return Ii(1, arguments);
    }),
    (r.delayedCall = function (o, f, c, d) {
      return new r(f, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: o,
        onComplete: f,
        onReverseComplete: f,
        onCompleteParams: c,
        onReverseCompleteParams: c,
        callbackScope: d,
      });
    }),
    (r.fromTo = function (o, f, c) {
      return Ii(2, arguments);
    }),
    (r.set = function (o, f) {
      return ((f.duration = 0), f.repeatDelay || (f.repeat = 0), new r(o, f));
    }),
    (r.killTweensOf = function (o, f, c) {
      return je.killTweensOf(o, f, c);
    }),
    r
  );
})(Yi);
Ot(Ve.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
ht("staggerTo,staggerFrom,staggerFromTo", function (p) {
  Ve[p] = function () {
    var r = new dt(),
      i = ju.call(arguments, 0);
    return (i.splice(p === "staggerFromTo" ? 5 : 4, 0, 0), r[p].apply(r, i));
  };
});
var na = function (r, i, s) {
    return (r[i] = s);
  },
  _p = function (r, i, s) {
    return r[i](s);
  },
  N0 = function (r, i, s, o) {
    return r[i](o.fp, s);
  },
  O0 = function (r, i, s) {
    return r.setAttribute(i, s);
  },
  ra = function (r, i) {
    return Ae(r[i]) ? _p : Yu(r[i]) && r.setAttribute ? O0 : na;
  },
  gp = function (r, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * r) * 1e6) / 1e6, i);
  },
  R0 = function (r, i) {
    return i.set(i.t, i.p, !!(i.s + i.c * r), i);
  },
  vp = function (r, i) {
    var s = i._pt,
      o = "";
    if (!r && i.b) o = i.b;
    else if (r === 1 && i.e) o = i.e;
    else {
      for (; s;)
        ((o = s.p + (s.m ? s.m(s.s + s.c * r) : Math.round((s.s + s.c * r) * 1e4) / 1e4) + o),
          (s = s._next));
      o += i.c;
    }
    i.set(i.t, i.p, o, i);
  },
  ia = function (r, i) {
    for (var s = i._pt; s;) (s.r(r, s.d), (s = s._next));
  },
  z0 = function (r, i, s, o) {
    for (var f = this._pt, c; f;) ((c = f._next), f.p === o && f.modifier(r, i, s), (f = c));
  },
  M0 = function (r) {
    for (var i = this._pt, s, o; i;)
      ((o = i._next),
        (i.p === r && !i.op) || i.op === r ? vs(this, i, "_pt") : i.dep || (s = 1),
        (i = o));
    return !s;
  },
  j0 = function (r, i, s, o) {
    o.mSet(r, i, o.m.call(o.tween, s, o.mt), o);
  },
  yp = function (r) {
    for (var i = r._pt, s, o, f, c; i;) {
      for (s = i._next, o = f; o && o.pr > i.pr;) o = o._next;
      ((i._prev = o ? o._prev : c) ? (i._prev._next = i) : (f = i),
        (i._next = o) ? (o._prev = i) : (c = i),
        (i = s));
    }
    r._pt = f;
  },
  mt = (function () {
    function p(i, s, o, f, c, d, m, _, g) {
      ((this.t = s),
        (this.s = f),
        (this.c = c),
        (this.p = o),
        (this.r = d || gp),
        (this.d = m || this),
        (this.set = _ || na),
        (this.pr = g || 0),
        (this._next = i),
        i && (i._prev = this));
    }
    var r = p.prototype;
    return (
      (r.modifier = function (s, o, f) {
        ((this.mSet = this.mSet || this.set),
          (this.set = j0),
          (this.m = s),
          (this.mt = f),
          (this.tween = o));
      }),
      p
    );
  })();
ht(
  Zu +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",
  function (p) {
    return (qu[p] = 1);
  },
);
Nt.TweenMax = Nt.TweenLite = Ve;
Nt.TimelineLite = Nt.TimelineMax = dt;
je = new dt({
  sortChildren: !1,
  defaults: Vi,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Pt.stringFilter = fp;
var ar = [],
  fs = {},
  D0 = [],
  xd = 0,
  L0 = 0,
  Eu = function (r) {
    return (fs[r] || D0).map(function (i) {
      return i();
    });
  },
  Fu = function () {
    var r = Date.now(),
      i = [];
    r - xd > 2 &&
      (Eu("matchMediaInit"),
      ar.forEach(function (s) {
        var o = s.queries,
          f = s.conditions,
          c,
          d,
          m,
          _;
        for (d in o)
          ((c = Jt.matchMedia(o[d]).matches), c && (m = 1), c !== f[d] && ((f[d] = c), (_ = 1)));
        _ && (s.revert(), m && i.push(s));
      }),
      Eu("matchMediaRevert"),
      i.forEach(function (s) {
        return s.onMatch(s, function (o) {
          return s.add(null, o);
        });
      }),
      (xd = r),
      Eu("matchMedia"));
  },
  xp = (function () {
    function p(i, s) {
      ((this.selector = s && Du(s)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = L0++),
        i && this.add(i));
    }
    var r = p.prototype;
    return (
      (r.add = function (s, o, f) {
        Ae(s) && ((f = o), (o = s), (s = Ae));
        var c = this,
          d = function () {
            var _ = Oe,
              g = c.selector,
              x;
            return (
              _ && _ !== c && _.data.push(c),
              f && (c.selector = Du(f)),
              (Oe = c),
              (x = o.apply(c, arguments)),
              Ae(x) && c._r.push(x),
              (Oe = _),
              (c.selector = g),
              (c.isReverted = !1),
              x
            );
          };
        return (
          (c.last = d),
          s === Ae
            ? d(c, function (m) {
                return c.add(null, m);
              })
            : s
              ? (c[s] = d)
              : d
        );
      }),
      (r.ignore = function (s) {
        var o = Oe;
        ((Oe = null), s(this), (Oe = o));
      }),
      (r.getTweens = function () {
        var s = [];
        return (
          this.data.forEach(function (o) {
            return o instanceof p
              ? s.push.apply(s, o.getTweens())
              : o instanceof Ve && !(o.parent && o.parent.data === "nested") && s.push(o);
          }),
          s
        );
      }),
      (r.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (r.kill = function (s, o) {
        var f = this;
        if (
          (s
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
                      return g.t.revert(s);
                    }),
                    m = f.data.length;
                  m--;
                )
                  ((_ = f.data[m]),
                    _ instanceof dt
                      ? _.data !== "nested" &&
                        (_.scrollTrigger && _.scrollTrigger.revert(), _.kill())
                      : !(_ instanceof Ve) && _.revert && _.revert(s));
                (f._r.forEach(function (g) {
                  return g(s, f);
                }),
                  (f.isReverted = !0));
              })()
            : this.data.forEach(function (d) {
                return d.kill && d.kill();
              }),
          this.clear(),
          o)
        )
          for (var c = ar.length; c--;) ar[c].id === this.id && ar.splice(c, 1);
      }),
      (r.revert = function (s) {
        this.kill(s || {});
      }),
      p
    );
  })(),
  A0 = (function () {
    function p(i) {
      ((this.contexts = []), (this.scope = i), Oe && Oe.data.push(this));
    }
    var r = p.prototype;
    return (
      (r.add = function (s, o, f) {
        tn(s) || (s = { matches: s });
        var c = new xp(0, f || this.scope),
          d = (c.conditions = {}),
          m,
          _,
          g;
        (Oe && !c.selector && (c.selector = Oe.selector),
          this.contexts.push(c),
          (o = c.add("onMatch", o)),
          (c.queries = s));
        for (_ in s)
          _ === "all"
            ? (g = 1)
            : ((m = Jt.matchMedia(s[_])),
              m &&
                (ar.indexOf(c) < 0 && ar.push(c),
                (d[_] = m.matches) && (g = 1),
                m.addListener ? m.addListener(Fu) : m.addEventListener("change", Fu)));
        return (
          g &&
            o(c, function (x) {
              return c.add(null, x);
            }),
          this
        );
      }),
      (r.revert = function (s) {
        this.kill(s || {});
      }),
      (r.kill = function (s) {
        this.contexts.forEach(function (o) {
          return o.kill(s, !0);
        });
      }),
      p
    );
  })(),
  ms = {
    registerPlugin: function () {
      for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
      i.forEach(function (o) {
        return op(o);
      });
    },
    timeline: function (r) {
      return new dt(r);
    },
    getTweensOf: function (r, i) {
      return je.getTweensOf(r, i);
    },
    getProperty: function (r, i, s, o) {
      Xe(r) && (r = It(r)[0]);
      var f = sr(r || {}).get,
        c = s ? Gd : Xd;
      return (
        s === "native" && (s = ""),
        r &&
          (i
            ? c(((kt[i] && kt[i].get) || f)(r, i, s, o))
            : function (d, m, _) {
                return c(((kt[d] && kt[d].get) || f)(r, d, m, _));
              })
      );
    },
    quickSetter: function (r, i, s) {
      if (((r = It(r)), r.length > 1)) {
        var o = r.map(function (g) {
            return gt.quickSetter(g, i, s);
          }),
          f = o.length;
        return function (g) {
          for (var x = f; x--;) o[x](g);
        };
      }
      r = r[0] || {};
      var c = kt[i],
        d = sr(r),
        m = (d.harness && (d.harness.aliases || {})[i]) || i,
        _ = c
          ? function (g) {
              var x = new c();
              ((Ir._pt = 0),
                x.init(r, s ? g + s : g, Ir, 0, [r]),
                x.render(1, x),
                Ir._pt && ia(1, Ir));
            }
          : d.set(r, m);
      return c
        ? _
        : function (g) {
            return _(r, m, s ? g + s : g, d, 1);
          };
    },
    quickTo: function (r, i, s) {
      var o,
        f = gt.to(
          r,
          Ot(((o = {}), (o[i] = "+=0.1"), (o.paused = !0), (o.stagger = 0), o), s || {}),
        ),
        c = function (m, _, g) {
          return f.resetTo(i, m, _, g);
        };
      return ((c.tween = f), c);
    },
    isTweening: function (r) {
      return je.getTweensOf(r, !0).length > 0;
    },
    defaults: function (r) {
      return (r && r.ease && (r.ease = ur(r.ease, Vi.ease)), md(Vi, r || {}));
    },
    config: function (r) {
      return md(Pt, r || {});
    },
    registerEffect: function (r) {
      var i = r.name,
        s = r.effect,
        o = r.plugins,
        f = r.defaults,
        c = r.extendTimeline;
      ((o || "").split(",").forEach(function (d) {
        return d && !kt[d] && !Nt[d] && Wi(i + " effect requires " + d + " plugin.");
      }),
        (wu[i] = function (d, m, _) {
          return s(It(d), Ot(m || {}, f), _);
        }),
        c &&
          (dt.prototype[i] = function (d, m, _) {
            return this.add(wu[i](d, tn(m) ? m : (_ = m) && {}, this), _);
          }));
    },
    registerEase: function (r, i) {
      fe[r] = ur(i);
    },
    parseEase: function (r, i) {
      return arguments.length ? ur(r, i) : fe;
    },
    getById: function (r) {
      return je.getById(r);
    },
    exportRoot: function (r, i) {
      r === void 0 && (r = {});
      var s = new dt(r),
        o,
        f;
      for (
        s.smoothChildTiming = pt(r.smoothChildTiming),
          je.remove(s),
          s._dp = 0,
          s._time = s._tTime = je._time,
          o = je._first;
        o;
      )
        ((f = o._next),
          (i || !(!o._dur && o instanceof Ve && o.vars.onComplete === o._targets[0])) &&
            bt(s, o, o._start - o._delay),
          (o = f));
      return (bt(je, s, 0), s);
    },
    context: function (r, i) {
      return r ? new xp(r, i) : Oe;
    },
    matchMedia: function (r) {
      return new A0(r);
    },
    matchMediaRefresh: function () {
      return (
        ar.forEach(function (r) {
          var i = r.conditions,
            s,
            o;
          for (o in i) i[o] && ((i[o] = !1), (s = 1));
          s && r.revert();
        }) || Fu()
      );
    },
    addEventListener: function (r, i) {
      var s = fs[r] || (fs[r] = []);
      ~s.indexOf(i) || s.push(i);
    },
    removeEventListener: function (r, i) {
      var s = fs[r],
        o = s && s.indexOf(i);
      o >= 0 && s.splice(o, 1);
    },
    utils: {
      wrap: p0,
      wrapYoyo: h0,
      distribute: tp,
      random: rp,
      snap: np,
      normalize: d0,
      getUnit: nt,
      clamp: u0,
      splitColor: up,
      toArray: It,
      selector: Du,
      mapRange: lp,
      pipe: f0,
      unitize: c0,
      interpolate: m0,
      shuffle: ep,
    },
    install: Wd,
    effects: wu,
    ticker: Ct,
    updateRoot: dt.updateRoot,
    plugins: kt,
    globalTimeline: je,
    core: {
      PropTween: mt,
      globals: $d,
      Tween: Ve,
      Timeline: dt,
      Animation: Yi,
      getCache: sr,
      _removeLinkedListItem: vs,
      reverting: function () {
        return Ze;
      },
      context: function (r) {
        return (r && Oe && (Oe.data.push(r), (r._ctx = Oe)), Oe);
      },
      suppressOverwrites: function (r) {
        return (Qu = r);
      },
    },
  };
ht("to,from,fromTo,delayedCall,set,killTweensOf", function (p) {
  return (ms[p] = Ve[p]);
});
Ct.add(dt.updateRoot);
Ir = ms.to({}, { duration: 0 });
var F0 = function (r, i) {
    for (var s = r._pt; s && s.p !== i && s.op !== i && s.fp !== i;) s = s._next;
    return s;
  },
  I0 = function (r, i) {
    var s = r._targets,
      o,
      f,
      c;
    for (o in i)
      for (f = s.length; f--;)
        ((c = r._ptLookup[f][o]),
          c &&
            (c = c.d) &&
            (c._pt && (c = F0(c, o)), c && c.modifier && c.modifier(i[o], r, s[f], o)));
  },
  Tu = function (r, i) {
    return {
      name: r,
      headless: 1,
      rawVars: 1,
      init: function (o, f, c) {
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
          I0(d, f);
        };
      },
    };
  },
  gt =
    ms.registerPlugin(
      {
        name: "attr",
        init: function (r, i, s, o, f) {
          var c, d, m;
          this.tween = s;
          for (c in i)
            ((m = r.getAttribute(c) || ""),
              (d = this.add(r, "setAttribute", (m || 0) + "", i[c], o, f, 0, 0, c)),
              (d.op = c),
              (d.b = m),
              this._props.push(c));
        },
        render: function (r, i) {
          for (var s = i._pt; s;) (Ze ? s.set(s.t, s.p, s.b, s) : s.r(r, s.d), (s = s._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (r, i) {
          for (var s = i.length; s--;) this.add(r, s, r[s] || 0, i[s], 0, 0, 0, 0, 0, 1);
        },
      },
      Tu("roundProps", Lu),
      Tu("modifiers"),
      Tu("snap", np),
    ) || ms;
Ve.version = dt.version = gt.version = "3.15.0";
Vd = 1;
Xu() && Qr();
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
 */ var wd,
  Ln,
  Br,
  la,
  lr,
  Sd,
  sa,
  U0 = function () {
    return typeof window < "u";
  },
  hn = {},
  ir = 180 / Math.PI,
  Vr = Math.PI / 180,
  Ar = Math.atan2,
  kd = 1e8,
  oa = /([A-Z])/g,
  B0 = /(left|right|width|margin|padding|x)/i,
  V0 = /[\s,\(]\S/,
  en = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
  Iu = function (r, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * r) * 1e4) / 1e4 + i.u, i);
  },
  W0 = function (r, i) {
    return i.set(i.t, i.p, r === 1 ? i.e : Math.round((i.s + i.c * r) * 1e4) / 1e4 + i.u, i);
  },
  $0 = function (r, i) {
    return i.set(i.t, i.p, r ? Math.round((i.s + i.c * r) * 1e4) / 1e4 + i.u : i.b, i);
  },
  H0 = function (r, i) {
    return i.set(
      i.t,
      i.p,
      r === 1 ? i.e : r ? Math.round((i.s + i.c * r) * 1e4) / 1e4 + i.u : i.b,
      i,
    );
  },
  Q0 = function (r, i) {
    var s = i.s + i.c * r;
    i.set(i.t, i.p, ~~(s + (s < 0 ? -0.5 : 0.5)) + i.u, i);
  },
  wp = function (r, i) {
    return i.set(i.t, i.p, r ? i.e : i.b, i);
  },
  Sp = function (r, i) {
    return i.set(i.t, i.p, r !== 1 ? i.b : i.e, i);
  },
  Y0 = function (r, i, s) {
    return (r.style[i] = s);
  },
  X0 = function (r, i, s) {
    return r.style.setProperty(i, s);
  },
  G0 = function (r, i, s) {
    return (r._gsap[i] = s);
  },
  K0 = function (r, i, s) {
    return (r._gsap.scaleX = r._gsap.scaleY = s);
  },
  q0 = function (r, i, s, o, f) {
    var c = r._gsap;
    ((c.scaleX = c.scaleY = s), c.renderTransform(f, c));
  },
  Z0 = function (r, i, s, o, f) {
    var c = r._gsap;
    ((c[i] = s), c.renderTransform(f, c));
  },
  De = "transform",
  _t = De + "Origin",
  J0 = function p(r, i) {
    var s = this,
      o = this.target,
      f = o.style,
      c = o._gsap;
    if (r in hn && f) {
      if (((this.tfm = this.tfm || {}), r !== "transform"))
        ((r = en[r] || r),
          ~r.indexOf(",")
            ? r.split(",").forEach(function (d) {
                return (s.tfm[d] = dn(o, d));
              })
            : (this.tfm[r] = c.x ? c[r] : dn(o, r)),
          r === _t && (this.tfm.zOrigin = c.zOrigin));
      else
        return en.transform.split(",").forEach(function (d) {
          return p.call(s, d, i);
        });
      if (this.props.indexOf(De) >= 0) return;
      (c.svg && ((this.svgo = o.getAttribute("data-svg-origin")), this.props.push(_t, i, "")),
        (r = De));
    }
    (f || i) && this.props.push(r, i, f[r]);
  },
  kp = function (r) {
    r.translate &&
      (r.removeProperty("translate"), r.removeProperty("scale"), r.removeProperty("rotate"));
  },
  b0 = function () {
    var r = this.props,
      i = this.target,
      s = i.style,
      o = i._gsap,
      f,
      c;
    for (f = 0; f < r.length; f += 3)
      r[f + 1]
        ? r[f + 1] === 2
          ? i[r[f]](r[f + 2])
          : (i[r[f]] = r[f + 2])
        : r[f + 2]
          ? (s[r[f]] = r[f + 2])
          : s.removeProperty(
              r[f].substr(0, 2) === "--" ? r[f] : r[f].replace(oa, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (c in this.tfm) o[c] = this.tfm[c];
      (o.svg && (o.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")),
        (f = sa()),
        (!f || !f.isStart) &&
          !s[De] &&
          (kp(s),
          o.zOrigin &&
            s[_t] &&
            ((s[_t] += " " + o.zOrigin + "px"), (o.zOrigin = 0), o.renderTransform()),
          (o.uncache = 1)));
    }
  },
  Cp = function (r, i) {
    var s = { target: r, props: [], revert: b0, save: J0 };
    return (
      r._gsap || gt.core.getCache(r),
      i &&
        r.style &&
        r.nodeType &&
        i.split(",").forEach(function (o) {
          return s.save(o);
        }),
      s
    );
  },
  Ep,
  Uu = function (r, i) {
    var s = Ln.createElementNS
      ? Ln.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), r)
      : Ln.createElement(r);
    return s && s.style ? s : Ln.createElement(r);
  },
  Tt = function p(r, i, s) {
    var o = getComputedStyle(r);
    return (
      o[i] ||
      o.getPropertyValue(i.replace(oa, "-$1").toLowerCase()) ||
      o.getPropertyValue(i) ||
      (!s && p(r, Yr(i) || i, 1)) ||
      ""
    );
  },
  Cd = "O,Moz,ms,Ms,Webkit".split(","),
  Yr = function (r, i, s) {
    var o = i || lr,
      f = o.style,
      c = 5;
    if (r in f && !s) return r;
    for (r = r.charAt(0).toUpperCase() + r.substr(1); c-- && !(Cd[c] + r in f););
    return c < 0 ? null : (c === 3 ? "ms" : c >= 0 ? Cd[c] : "") + r;
  },
  Bu = function () {
    U0() &&
      window.document &&
      ((wd = window),
      (Ln = wd.document),
      (Br = Ln.documentElement),
      (lr = Uu("div") || { style: {} }),
      Uu("div"),
      (De = Yr(De)),
      (_t = De + "Origin"),
      (lr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ep = !!Yr("perspective")),
      (sa = gt.core.reverting),
      (la = 1));
  },
  Ed = function (r) {
    var i = r.ownerSVGElement,
      s = Uu("svg", (i && i.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
      o = r.cloneNode(!0),
      f;
    ((o.style.display = "block"), s.appendChild(o), Br.appendChild(s));
    try {
      f = o.getBBox();
    } catch {}
    return (s.removeChild(o), Br.removeChild(s), f);
  },
  Td = function (r, i) {
    for (var s = i.length; s--;) if (r.hasAttribute(i[s])) return r.getAttribute(i[s]);
  },
  Tp = function (r) {
    var i, s;
    try {
      i = r.getBBox();
    } catch {
      ((i = Ed(r)), (s = 1));
    }
    return (
      (i && (i.width || i.height)) || s || (i = Ed(r)),
      i && !i.width && !i.x && !i.y
        ? {
            x: +Td(r, ["x", "cx", "x1"]) || 0,
            y: +Td(r, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : i
    );
  },
  Pp = function (r) {
    return !!(r.getCTM && (!r.parentNode || r.ownerSVGElement) && Tp(r));
  },
  Bn = function (r, i) {
    if (i) {
      var s = r.style,
        o;
      (i in hn && i !== _t && (i = De),
        s.removeProperty
          ? ((o = i.substr(0, 2)),
            (o === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
            s.removeProperty(o === "--" ? i : i.replace(oa, "-$1").toLowerCase()))
          : s.removeAttribute(i));
    }
  },
  An = function (r, i, s, o, f, c) {
    var d = new mt(r._pt, i, s, 0, 1, c ? Sp : wp);
    return ((r._pt = d), (d.b = o), (d.e = f), r._props.push(s), d);
  },
  Pd = { deg: 1, rad: 1, turn: 1 },
  e_ = { grid: 1, flex: 1 },
  Vn = function p(r, i, s, o) {
    var f = parseFloat(s) || 0,
      c = (s + "").trim().substr((f + "").length) || "px",
      d = lr.style,
      m = B0.test(i),
      _ = r.tagName.toLowerCase() === "svg",
      g = (_ ? "client" : "offset") + (m ? "Width" : "Height"),
      x = 100,
      k = o === "px",
      C = o === "%",
      O,
      y,
      R,
      L;
    if (o === c || !f || Pd[o] || Pd[c]) return f;
    if (
      (c !== "px" && !k && (f = p(r, i, s, "px")),
      (L = r.getCTM && Pp(r)),
      (C || c === "%") && (hn[i] || ~i.indexOf("adius")))
    )
      return (
        (O = L ? r.getBBox()[m ? "width" : "height"] : r[g]),
        Ue(C ? (f / O) * x : (f / 100) * O)
      );
    if (
      ((d[m ? "width" : "height"] = x + (k ? c : o)),
      (y =
        (o !== "rem" && ~i.indexOf("adius")) || (o === "em" && r.appendChild && !_)
          ? r
          : r.parentNode),
      L && (y = (r.ownerSVGElement || {}).parentNode),
      (!y || y === Ln || !y.appendChild) && (y = Ln.body),
      (R = y._gsap),
      R && C && R.width && m && R.time === Ct.time && !R.uncache)
    )
      return Ue((f / R.width) * x);
    if (C && (i === "height" || i === "width")) {
      var j = r.style[i];
      ((r.style[i] = x + o), (O = r[g]), j ? (r.style[i] = j) : Bn(r, i));
    } else
      ((C || c === "%") && !e_[Tt(y, "display")] && (d.position = Tt(r, "position")),
        y === r && (d.position = "static"),
        y.appendChild(lr),
        (O = lr[g]),
        y.removeChild(lr),
        (d.position = "absolute"));
    return (
      m && C && ((R = sr(y)), (R.time = Ct.time), (R.width = y[g])),
      Ue(k ? (O * f) / x : O && f ? (x / O) * f : 0)
    );
  },
  dn = function (r, i, s, o) {
    var f;
    return (
      la || Bu(),
      i in en && i !== "transform" && ((i = en[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
      hn[i] && i !== "transform"
        ? ((f = Gi(r, o)),
          (f =
            i !== "transformOrigin"
              ? f[i]
              : f.svg
                ? f.origin
                : gs(Tt(r, _t)) + " " + f.zOrigin + "px"))
        : ((f = r.style[i]),
          (!f || f === "auto" || o || ~(f + "").indexOf("calc(")) &&
            (f = (_s[i] && _s[i](r, i, s)) || Tt(r, i) || Qd(r, i) || (i === "opacity" ? 1 : 0))),
      s && !~(f + "").trim().indexOf(" ") ? Vn(r, i, f, s) + s : f
    );
  },
  t_ = function (r, i, s, o) {
    if (!s || s === "none") {
      var f = Yr(i, r, 1),
        c = f && Tt(r, f, 1);
      c && c !== s ? ((i = f), (s = c)) : i === "borderColor" && (s = Tt(r, "borderTopColor"));
    }
    var d = new mt(this._pt, r.style, i, 0, 1, vp),
      m = 0,
      _ = 0,
      g,
      x,
      k,
      C,
      O,
      y,
      R,
      L,
      j,
      I,
      B,
      M;
    if (
      ((d.b = s),
      (d.e = o),
      (s += ""),
      (o += ""),
      o.substring(0, 6) === "var(--" && (o = Tt(r, o.substring(4, o.indexOf(")")))),
      o === "auto" &&
        ((y = r.style[i]), (r.style[i] = o), (o = Tt(r, i) || o), y ? (r.style[i] = y) : Bn(r, i)),
      (g = [s, o]),
      fp(g),
      (s = g[0]),
      (o = g[1]),
      (k = s.match(Fr) || []),
      (M = o.match(Fr) || []),
      M.length)
    ) {
      for (; (x = Fr.exec(o));)
        ((R = x[0]),
          (j = o.substring(m, x.index)),
          O ? (O = (O + 1) % 5) : (j.substr(-5) === "rgba(" || j.substr(-5) === "hsla(") && (O = 1),
          R !== (y = k[_++] || "") &&
            ((C = parseFloat(y) || 0),
            (B = y.substr((C + "").length)),
            R.charAt(1) === "=" && (R = Ur(C, R) + B),
            (L = parseFloat(R)),
            (I = R.substr((L + "").length)),
            (m = Fr.lastIndex - I.length),
            I || ((I = I || Pt.units[i] || B), m === o.length && ((o += I), (d.e += I))),
            B !== I && (C = Vn(r, i, y, I) || 0),
            (d._pt = {
              _next: d._pt,
              p: j || _ === 1 ? j : ",",
              s: C,
              c: L - C,
              m: (O && O < 4) || i === "zIndex" ? Math.round : 0,
            })));
      d.c = m < o.length ? o.substring(m, o.length) : "";
    } else d.r = i === "display" && o === "none" ? Sp : wp;
    return (Bd.test(o) && (d.e = 0), (this._pt = d), d);
  },
  Nd = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  n_ = function (r) {
    var i = r.split(" "),
      s = i[0],
      o = i[1] || "50%";
    return (
      (s === "top" || s === "bottom" || o === "left" || o === "right") &&
        ((r = s), (s = o), (o = r)),
      (i[0] = Nd[s] || s),
      (i[1] = Nd[o] || o),
      i.join(" ")
    );
  },
  r_ = function (r, i) {
    if (i.tween && i.tween._time === i.tween._dur) {
      var s = i.t,
        o = s.style,
        f = i.u,
        c = s._gsap,
        d,
        m,
        _;
      if (f === "all" || f === !0) ((o.cssText = ""), (m = 1));
      else
        for (f = f.split(","), _ = f.length; --_ > -1;)
          ((d = f[_]), hn[d] && ((m = 1), (d = d === "transformOrigin" ? _t : De)), Bn(s, d));
      m &&
        (Bn(s, De),
        c &&
          (c.svg && s.removeAttribute("transform"),
          (o.scale = o.rotate = o.translate = "none"),
          Gi(s, 1),
          (c.uncache = 1),
          kp(o)));
    }
  },
  _s = {
    clearProps: function (r, i, s, o, f) {
      if (f.data !== "isFromStart") {
        var c = (r._pt = new mt(r._pt, i, s, 0, 0, r_));
        return ((c.u = o), (c.pr = -10), (c.tween = f), r._props.push(s), 1);
      }
    },
  },
  Xi = [1, 0, 0, 1, 0, 0],
  Np = {},
  Op = function (r) {
    return r === "matrix(1, 0, 0, 1, 0, 0)" || r === "none" || !r;
  },
  Od = function (r) {
    var i = Tt(r, De);
    return Op(i) ? Xi : i.substr(7).match(Ud).map(Ue);
  },
  ua = function (r, i) {
    var s = r._gsap || sr(r),
      o = r.style,
      f = Od(r),
      c,
      d,
      m,
      _;
    return s.svg && r.getAttribute("transform")
      ? ((m = r.transform.baseVal.consolidate().matrix),
        (f = [m.a, m.b, m.c, m.d, m.e, m.f]),
        f.join(",") === "1,0,0,1,0,0" ? Xi : f)
      : (f === Xi &&
          !r.offsetParent &&
          r !== Br &&
          !s.svg &&
          ((m = o.display),
          (o.display = "block"),
          (c = r.parentNode),
          (!c || (!r.offsetParent && !r.getBoundingClientRect().width)) &&
            ((_ = 1), (d = r.nextElementSibling), Br.appendChild(r)),
          (f = Od(r)),
          m ? (o.display = m) : Bn(r, "display"),
          _ && (d ? c.insertBefore(r, d) : c ? c.appendChild(r) : Br.removeChild(r))),
        i && f.length > 6 ? [f[0], f[1], f[4], f[5], f[12], f[13]] : f);
  },
  Vu = function (r, i, s, o, f, c) {
    var d = r._gsap,
      m = f || ua(r, !0),
      _ = d.xOrigin || 0,
      g = d.yOrigin || 0,
      x = d.xOffset || 0,
      k = d.yOffset || 0,
      C = m[0],
      O = m[1],
      y = m[2],
      R = m[3],
      L = m[4],
      j = m[5],
      I = i.split(" "),
      B = parseFloat(I[0]) || 0,
      M = parseFloat(I[1]) || 0,
      Y,
      A,
      H,
      V;
    (s
      ? m !== Xi &&
        (A = C * R - O * y) &&
        ((H = B * (R / A) + M * (-y / A) + (y * j - R * L) / A),
        (V = B * (-O / A) + M * (C / A) - (C * j - O * L) / A),
        (B = H),
        (M = V))
      : ((Y = Tp(r)),
        (B = Y.x + (~I[0].indexOf("%") ? (B / 100) * Y.width : B)),
        (M = Y.y + (~(I[1] || I[0]).indexOf("%") ? (M / 100) * Y.height : M))),
      o || (o !== !1 && d.smooth)
        ? ((L = B - _),
          (j = M - g),
          (d.xOffset = x + (L * C + j * y) - L),
          (d.yOffset = k + (L * O + j * R) - j))
        : (d.xOffset = d.yOffset = 0),
      (d.xOrigin = B),
      (d.yOrigin = M),
      (d.smooth = !!o),
      (d.origin = i),
      (d.originIsAbsolute = !!s),
      (r.style[_t] = "0px 0px"),
      c &&
        (An(c, d, "xOrigin", _, B),
        An(c, d, "yOrigin", g, M),
        An(c, d, "xOffset", x, d.xOffset),
        An(c, d, "yOffset", k, d.yOffset)),
      r.setAttribute("data-svg-origin", B + " " + M));
  },
  Gi = function (r, i) {
    var s = r._gsap || new dp(r);
    if ("x" in s && !i && !s.uncache) return s;
    var o = r.style,
      f = s.scaleX < 0,
      c = "px",
      d = "deg",
      m = getComputedStyle(r),
      _ = Tt(r, _t) || "0",
      g,
      x,
      k,
      C,
      O,
      y,
      R,
      L,
      j,
      I,
      B,
      M,
      Y,
      A,
      H,
      V,
      ee,
      me,
      pe,
      ue,
      ce,
      ve,
      de,
      le,
      Q,
      b,
      X,
      E,
      D,
      se,
      re,
      oe;
    return (
      (g = x = k = y = R = L = j = I = B = 0),
      (C = O = 1),
      (s.svg = !!(r.getCTM && Pp(r))),
      m.translate &&
        ((m.translate !== "none" || m.scale !== "none" || m.rotate !== "none") &&
          (o[De] =
            (m.translate !== "none"
              ? "translate3d(" + (m.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") "
              : "") +
            (m.rotate !== "none" ? "rotate(" + m.rotate + ") " : "") +
            (m.scale !== "none" ? "scale(" + m.scale.split(" ").join(",") + ") " : "") +
            (m[De] !== "none" ? m[De] : "")),
        (o.scale = o.rotate = o.translate = "none")),
      (A = ua(r, s.svg)),
      s.svg &&
        (s.uncache
          ? ((Q = r.getBBox()), (_ = s.xOrigin - Q.x + "px " + (s.yOrigin - Q.y) + "px"), (le = ""))
          : (le = !i && r.getAttribute("data-svg-origin")),
        Vu(r, le || _, !!le || s.originIsAbsolute, s.smooth !== !1, A)),
      (M = s.xOrigin || 0),
      (Y = s.yOrigin || 0),
      A !== Xi &&
        ((me = A[0]),
        (pe = A[1]),
        (ue = A[2]),
        (ce = A[3]),
        (g = ve = A[4]),
        (x = de = A[5]),
        A.length === 6
          ? ((C = Math.sqrt(me * me + pe * pe)),
            (O = Math.sqrt(ce * ce + ue * ue)),
            (y = me || pe ? Ar(pe, me) * ir : 0),
            (j = ue || ce ? Ar(ue, ce) * ir + y : 0),
            j && (O *= Math.abs(Math.cos(j * Vr))),
            s.svg && ((g -= M - (M * me + Y * ue)), (x -= Y - (M * pe + Y * ce))))
          : ((oe = A[6]),
            (se = A[7]),
            (X = A[8]),
            (E = A[9]),
            (D = A[10]),
            (re = A[11]),
            (g = A[12]),
            (x = A[13]),
            (k = A[14]),
            (H = Ar(oe, D)),
            (R = H * ir),
            H &&
              ((V = Math.cos(-H)),
              (ee = Math.sin(-H)),
              (le = ve * V + X * ee),
              (Q = de * V + E * ee),
              (b = oe * V + D * ee),
              (X = ve * -ee + X * V),
              (E = de * -ee + E * V),
              (D = oe * -ee + D * V),
              (re = se * -ee + re * V),
              (ve = le),
              (de = Q),
              (oe = b)),
            (H = Ar(-ue, D)),
            (L = H * ir),
            H &&
              ((V = Math.cos(-H)),
              (ee = Math.sin(-H)),
              (le = me * V - X * ee),
              (Q = pe * V - E * ee),
              (b = ue * V - D * ee),
              (re = ce * ee + re * V),
              (me = le),
              (pe = Q),
              (ue = b)),
            (H = Ar(pe, me)),
            (y = H * ir),
            H &&
              ((V = Math.cos(H)),
              (ee = Math.sin(H)),
              (le = me * V + pe * ee),
              (Q = ve * V + de * ee),
              (pe = pe * V - me * ee),
              (de = de * V - ve * ee),
              (me = le),
              (ve = Q)),
            R && Math.abs(R) + Math.abs(y) > 359.9 && ((R = y = 0), (L = 180 - L)),
            (C = Ue(Math.sqrt(me * me + pe * pe + ue * ue))),
            (O = Ue(Math.sqrt(de * de + oe * oe))),
            (H = Ar(ve, de)),
            (j = Math.abs(H) > 2e-4 ? H * ir : 0),
            (B = re ? 1 / (re < 0 ? -re : re) : 0)),
        s.svg &&
          ((le = r.getAttribute("transform")),
          (s.forceCSS = r.setAttribute("transform", "") || !Op(Tt(r, De))),
          le && r.setAttribute("transform", le))),
      Math.abs(j) > 90 &&
        Math.abs(j) < 270 &&
        (f
          ? ((C *= -1), (j += y <= 0 ? 180 : -180), (y += y <= 0 ? 180 : -180))
          : ((O *= -1), (j += j <= 0 ? 180 : -180))),
      (i = i || s.uncache),
      (s.x =
        g -
        ((s.xPercent =
          g && ((!i && s.xPercent) || (Math.round(r.offsetWidth / 2) === Math.round(-g) ? -50 : 0)))
          ? (r.offsetWidth * s.xPercent) / 100
          : 0) +
        c),
      (s.y =
        x -
        ((s.yPercent =
          x &&
          ((!i && s.yPercent) || (Math.round(r.offsetHeight / 2) === Math.round(-x) ? -50 : 0)))
          ? (r.offsetHeight * s.yPercent) / 100
          : 0) +
        c),
      (s.z = k + c),
      (s.scaleX = Ue(C)),
      (s.scaleY = Ue(O)),
      (s.rotation = Ue(y) + d),
      (s.rotationX = Ue(R) + d),
      (s.rotationY = Ue(L) + d),
      (s.skewX = j + d),
      (s.skewY = I + d),
      (s.transformPerspective = B + c),
      (s.zOrigin = parseFloat(_.split(" ")[2]) || (!i && s.zOrigin) || 0) && (o[_t] = gs(_)),
      (s.xOffset = s.yOffset = 0),
      (s.force3D = Pt.force3D),
      (s.renderTransform = s.svg ? l_ : Ep ? Rp : i_),
      (s.uncache = 0),
      s
    );
  },
  gs = function (r) {
    return (r = r.split(" "))[0] + " " + r[1];
  },
  Pu = function (r, i, s) {
    var o = nt(i);
    return Ue(parseFloat(i) + parseFloat(Vn(r, "x", s + "px", o))) + o;
  },
  i_ = function (r, i) {
    ((i.z = "0px"), (i.rotationY = i.rotationX = "0deg"), (i.force3D = 0), Rp(r, i));
  },
  nr = "0deg",
  Di = "0px",
  rr = ") ",
  Rp = function (r, i) {
    var s = i || this,
      o = s.xPercent,
      f = s.yPercent,
      c = s.x,
      d = s.y,
      m = s.z,
      _ = s.rotation,
      g = s.rotationY,
      x = s.rotationX,
      k = s.skewX,
      C = s.skewY,
      O = s.scaleX,
      y = s.scaleY,
      R = s.transformPerspective,
      L = s.force3D,
      j = s.target,
      I = s.zOrigin,
      B = "",
      M = (L === "auto" && r && r !== 1) || L === !0;
    if (I && (x !== nr || g !== nr)) {
      var Y = parseFloat(g) * Vr,
        A = Math.sin(Y),
        H = Math.cos(Y),
        V;
      ((Y = parseFloat(x) * Vr),
        (V = Math.cos(Y)),
        (c = Pu(j, c, A * V * -I)),
        (d = Pu(j, d, -Math.sin(Y) * -I)),
        (m = Pu(j, m, H * V * -I + I)));
    }
    (R !== Di && (B += "perspective(" + R + rr),
      (o || f) && (B += "translate(" + o + "%, " + f + "%) "),
      (M || c !== Di || d !== Di || m !== Di) &&
        (B +=
          m !== Di || M
            ? "translate3d(" + c + ", " + d + ", " + m + ") "
            : "translate(" + c + ", " + d + rr),
      _ !== nr && (B += "rotate(" + _ + rr),
      g !== nr && (B += "rotateY(" + g + rr),
      x !== nr && (B += "rotateX(" + x + rr),
      (k !== nr || C !== nr) && (B += "skew(" + k + ", " + C + rr),
      (O !== 1 || y !== 1) && (B += "scale(" + O + ", " + y + rr),
      (j.style[De] = B || "translate(0, 0)"));
  },
  l_ = function (r, i) {
    var s = i || this,
      o = s.xPercent,
      f = s.yPercent,
      c = s.x,
      d = s.y,
      m = s.rotation,
      _ = s.skewX,
      g = s.skewY,
      x = s.scaleX,
      k = s.scaleY,
      C = s.target,
      O = s.xOrigin,
      y = s.yOrigin,
      R = s.xOffset,
      L = s.yOffset,
      j = s.forceCSS,
      I = parseFloat(c),
      B = parseFloat(d),
      M,
      Y,
      A,
      H,
      V;
    ((m = parseFloat(m)),
      (_ = parseFloat(_)),
      (g = parseFloat(g)),
      g && ((g = parseFloat(g)), (_ += g), (m += g)),
      m || _
        ? ((m *= Vr),
          (_ *= Vr),
          (M = Math.cos(m) * x),
          (Y = Math.sin(m) * x),
          (A = Math.sin(m - _) * -k),
          (H = Math.cos(m - _) * k),
          _ &&
            ((g *= Vr),
            (V = Math.tan(_ - g)),
            (V = Math.sqrt(1 + V * V)),
            (A *= V),
            (H *= V),
            g && ((V = Math.tan(g)), (V = Math.sqrt(1 + V * V)), (M *= V), (Y *= V))),
          (M = Ue(M)),
          (Y = Ue(Y)),
          (A = Ue(A)),
          (H = Ue(H)))
        : ((M = x), (H = k), (Y = A = 0)),
      ((I && !~(c + "").indexOf("px")) || (B && !~(d + "").indexOf("px"))) &&
        ((I = Vn(C, "x", c, "px")), (B = Vn(C, "y", d, "px"))),
      (O || y || R || L) &&
        ((I = Ue(I + O - (O * M + y * A) + R)), (B = Ue(B + y - (O * Y + y * H) + L))),
      (o || f) &&
        ((V = C.getBBox()), (I = Ue(I + (o / 100) * V.width)), (B = Ue(B + (f / 100) * V.height))),
      (V = "matrix(" + M + "," + Y + "," + A + "," + H + "," + I + "," + B + ")"),
      C.setAttribute("transform", V),
      j && (C.style[De] = V));
  },
  s_ = function (r, i, s, o, f) {
    var c = 360,
      d = Xe(f),
      m = parseFloat(f) * (d && ~f.indexOf("rad") ? ir : 1),
      _ = m - o,
      g = o + _ + "deg",
      x,
      k;
    return (
      d &&
        ((x = f.split("_")[1]),
        x === "short" && ((_ %= c), _ !== _ % (c / 2) && (_ += _ < 0 ? c : -c)),
        x === "cw" && _ < 0
          ? (_ = ((_ + c * kd) % c) - ~~(_ / c) * c)
          : x === "ccw" && _ > 0 && (_ = ((_ - c * kd) % c) - ~~(_ / c) * c)),
      (r._pt = k = new mt(r._pt, i, s, o, _, W0)),
      (k.e = g),
      (k.u = "deg"),
      r._props.push(s),
      k
    );
  },
  Rd = function (r, i) {
    for (var s in i) r[s] = i[s];
    return r;
  },
  o_ = function (r, i, s) {
    var o = Rd({}, s._gsap),
      f = "perspective,force3D,transformOrigin,svgOrigin",
      c = s.style,
      d,
      m,
      _,
      g,
      x,
      k,
      C,
      O;
    o.svg
      ? ((_ = s.getAttribute("transform")),
        s.setAttribute("transform", ""),
        (c[De] = i),
        (d = Gi(s, 1)),
        Bn(s, De),
        s.setAttribute("transform", _))
      : ((_ = getComputedStyle(s)[De]), (c[De] = i), (d = Gi(s, 1)), (c[De] = _));
    for (m in hn)
      ((_ = o[m]),
        (g = d[m]),
        _ !== g &&
          f.indexOf(m) < 0 &&
          ((C = nt(_)),
          (O = nt(g)),
          (x = C !== O ? Vn(s, m, _, O) : parseFloat(_)),
          (k = parseFloat(g)),
          (r._pt = new mt(r._pt, d, m, x, k - x, Iu)),
          (r._pt.u = O || 0),
          r._props.push(m)));
    Rd(d, o);
  };
ht("padding,margin,Width,Radius", function (p, r) {
  var i = "Top",
    s = "Right",
    o = "Bottom",
    f = "Left",
    c = (r < 3 ? [i, s, o, f] : [i + f, i + s, o + s, o + f]).map(function (d) {
      return r < 2 ? p + d : "border" + d + p;
    });
  _s[r > 1 ? "border" + p : p] = function (d, m, _, g, x) {
    var k, C;
    if (arguments.length < 4)
      return (
        (k = c.map(function (O) {
          return dn(d, O, _);
        })),
        (C = k.join(" ")),
        C.split(k[0]).length === 5 ? k[0] : C
      );
    ((k = (g + "").split(" ")),
      (C = {}),
      c.forEach(function (O, y) {
        return (C[O] = k[y] = k[y] || k[((y - 1) / 2) | 0]);
      }),
      d.init(m, C, x));
  };
});
var zp = {
  name: "css",
  register: Bu,
  targetTest: function (r) {
    return r.style && r.nodeType;
  },
  init: function (r, i, s, o, f) {
    var c = this._props,
      d = r.style,
      m = s.vars.startAt,
      _,
      g,
      x,
      k,
      C,
      O,
      y,
      R,
      L,
      j,
      I,
      B,
      M,
      Y,
      A,
      H,
      V;
    (la || Bu(), (this.styles = this.styles || Cp(r)), (H = this.styles.props), (this.tween = s));
    for (y in i)
      if (y !== "autoRound" && ((g = i[y]), !(kt[y] && pp(y, i, s, o, r, f)))) {
        if (
          ((C = typeof g),
          (O = _s[y]),
          C === "function" && ((g = g.call(s, o, r, f)), (C = typeof g)),
          C === "string" && ~g.indexOf("random(") && (g = Hi(g)),
          O)
        )
          O(this, r, y, g, s) && (A = 1);
        else if (y.substr(0, 2) === "--")
          ((_ = (getComputedStyle(r).getPropertyValue(y) + "").trim()),
            (g += ""),
            (In.lastIndex = 0),
            In.test(_) ||
              ((R = nt(_)), (L = nt(g)), L ? R !== L && (_ = Vn(r, y, _, L) + L) : R && (g += R)),
            this.add(d, "setProperty", _, g, o, f, 0, 0, y),
            c.push(y),
            H.push(y, 0, d[y]));
        else if (C !== "undefined") {
          if (
            (m && y in m
              ? ((_ = typeof m[y] == "function" ? m[y].call(s, o, r, f) : m[y]),
                Xe(_) && ~_.indexOf("random(") && (_ = Hi(_)),
                nt(_ + "") || _ === "auto" || (_ += Pt.units[y] || nt(dn(r, y)) || ""),
                (_ + "").charAt(1) === "=" && (_ = dn(r, y)))
              : (_ = dn(r, y)),
            (k = parseFloat(_)),
            (j = C === "string" && g.charAt(1) === "=" && g.substr(0, 2)),
            j && (g = g.substr(2)),
            (x = parseFloat(g)),
            y in en &&
              (y === "autoAlpha" &&
                (k === 1 && dn(r, "visibility") === "hidden" && x && (k = 0),
                H.push("visibility", 0, d.visibility),
                An(this, d, "visibility", k ? "inherit" : "hidden", x ? "inherit" : "hidden", !x)),
              y !== "scale" &&
                y !== "transform" &&
                ((y = en[y]), ~y.indexOf(",") && (y = y.split(",")[0]))),
            (I = y in hn),
            I)
          ) {
            if ((this.styles.save(y), (V = g), C === "string" && g.substring(0, 6) === "var(--")) {
              if (((g = Tt(r, g.substring(4, g.indexOf(")")))), g.substring(0, 5) === "calc(")) {
                var ee = r.style.perspective;
                ((r.style.perspective = g),
                  (g = Tt(r, "perspective")),
                  ee ? (r.style.perspective = ee) : Bn(r, "perspective"));
              }
              x = parseFloat(g);
            }
            if (
              (B ||
                ((M = r._gsap),
                (M.renderTransform && !i.parseTransform) || Gi(r, i.parseTransform),
                (Y = i.smoothOrigin !== !1 && M.smooth),
                (B = this._pt = new mt(this._pt, d, De, 0, 1, M.renderTransform, M, 0, -1)),
                (B.dep = 1)),
              y === "scale")
            )
              ((this._pt = new mt(
                this._pt,
                M,
                "scaleY",
                M.scaleY,
                (j ? Ur(M.scaleY, j + x) : x) - M.scaleY || 0,
                Iu,
              )),
                (this._pt.u = 0),
                c.push("scaleY", y),
                (y += "X"));
            else if (y === "transformOrigin") {
              (H.push(_t, 0, d[_t]),
                (g = n_(g)),
                M.svg
                  ? Vu(r, g, 0, Y, 0, this)
                  : ((L = parseFloat(g.split(" ")[2]) || 0),
                    L !== M.zOrigin && An(this, M, "zOrigin", M.zOrigin, L),
                    An(this, d, y, gs(_), gs(g))));
              continue;
            } else if (y === "svgOrigin") {
              Vu(r, g, 1, Y, 0, this);
              continue;
            } else if (y in Np) {
              s_(this, M, y, k, j ? Ur(k, j + g) : g);
              continue;
            } else if (y === "smoothOrigin") {
              An(this, M, "smooth", M.smooth, g);
              continue;
            } else if (y === "force3D") {
              M[y] = g;
              continue;
            } else if (y === "transform") {
              o_(this, g, r);
              continue;
            }
          } else y in d || (y = Yr(y) || y);
          if (I || ((x || x === 0) && (k || k === 0) && !V0.test(g) && y in d))
            ((R = (_ + "").substr((k + "").length)),
              x || (x = 0),
              (L = nt(g) || (y in Pt.units ? Pt.units[y] : R)),
              R !== L && (k = Vn(r, y, _, L)),
              (this._pt = new mt(
                this._pt,
                I ? M : d,
                y,
                k,
                (j ? Ur(k, j + x) : x) - k,
                !I && (L === "px" || y === "zIndex") && i.autoRound !== !1 ? Q0 : Iu,
              )),
              (this._pt.u = L || 0),
              I && V !== g
                ? ((this._pt.b = _), (this._pt.e = V), (this._pt.r = H0))
                : R !== L && L !== "%" && ((this._pt.b = _), (this._pt.r = $0)));
          else if (y in d) t_.call(this, r, y, _, j ? j + g : g);
          else if (y in r) this.add(r, y, _ || r[y], j ? j + g : g, o, f);
          else if (y !== "parseTransform") {
            Ku(y, g);
            continue;
          }
          (I ||
            (y in d
              ? H.push(y, 0, d[y])
              : typeof r[y] == "function"
                ? H.push(y, 2, r[y]())
                : H.push(y, 1, _ || r[y])),
            c.push(y));
        }
      }
    A && yp(this);
  },
  render: function (r, i) {
    if (i.tween._time || !sa()) for (var s = i._pt; s;) (s.r(r, s.d), (s = s._next));
    else i.styles.revert();
  },
  get: dn,
  aliases: en,
  getSetter: function (r, i, s) {
    var o = en[i];
    return (
      o && o.indexOf(",") < 0 && (i = o),
      i in hn && i !== _t && (r._gsap.x || dn(r, "x"))
        ? s && Sd === s
          ? i === "scale"
            ? K0
            : G0
          : (Sd = s || {}) && (i === "scale" ? q0 : Z0)
        : r.style && !Yu(r.style[i])
          ? Y0
          : ~i.indexOf("-")
            ? X0
            : ra(r, i)
    );
  },
  core: { _removeProperty: Bn, _getMatrix: ua },
};
gt.utils.checkPrefix = Yr;
gt.core.getStyleSaver = Cp;
(function (p, r, i, s) {
  var o = ht(p + "," + r + "," + i, function (f) {
    hn[f] = 1;
  });
  (ht(r, function (f) {
    ((Pt.units[f] = "deg"), (Np[f] = 1));
  }),
    (en[o[13]] = p + "," + r),
    ht(s, function (f) {
      var c = f.split(":");
      en[c[1]] = o[c[0]];
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
gt.registerPlugin(zp);
var Yt = gt.registerPlugin(zp) || gt;
Yt.core.Tween;
function Mp({
  onMenuClick: p,
  className: r,
  style: i,
  menuAriaLabel: s = "Toggle menu",
  menuBg: o = "#fff",
  menuContentColor: f = "#111",
  useFixedPosition: c = !1,
  items: d,
  animationEase: m = "back.out(1.5)",
  animationDuration: _ = 0.5,
  staggerDelay: g = 0.12,
}) {
  const [x, k] = qe.useState(!1),
    [C, O] = qe.useState(!1),
    y = qe.useRef(null),
    R = qe.useRef([]),
    L = qe.useRef([]),
    j = ["bubble-menu", c ? "fixed" : "absolute", r].filter(Boolean).join(" "),
    I = () => {
      const M = !x;
      (M && O(!0), k(M), p == null || p(M));
    },
    B = (M) => {
      (I(), Bi(M));
    };
  return (
    qe.useEffect(() => {
      const M = y.current,
        Y = R.current.filter(Boolean),
        A = L.current.filter(Boolean);
      !M ||
        !Y.length ||
        (x
          ? (Yt.set(M, { display: "flex" }),
            Yt.killTweensOf([...Y, ...A]),
            Yt.set(Y, { scale: 0, transformOrigin: "50% 50%" }),
            Yt.set(A, { y: 24, autoAlpha: 0 }),
            Y.forEach((H, V) => {
              const ee = V * g + Yt.utils.random(-0.05, 0.05),
                me = Yt.timeline({ delay: ee });
              (me.to(H, { scale: 1, duration: _, ease: m }),
                A[V] &&
                  me.to(
                    A[V],
                    { y: 0, autoAlpha: 1, duration: _, ease: "power3.out" },
                    `-=${_ * 0.9}`,
                  ));
            }))
          : C &&
            (Yt.killTweensOf([...Y, ...A]),
            Yt.to(A, { y: 24, autoAlpha: 0, duration: 0.2, ease: "power3.in" }),
            Yt.to(Y, {
              scale: 0,
              duration: 0.2,
              ease: "power3.in",
              onComplete: () => {
                (Yt.set(M, { display: "none" }), O(!1));
              },
            })));
    }, [x, C, m, _, g]),
    P.jsxs(P.Fragment, {
      children: [
        P.jsx("nav", {
          className: j,
          style: i,
          "aria-label": "Main navigation",
          children: P.jsxs("button", {
            type: "button",
            className: `bubble toggle-bubble menu-btn ${x ? "open" : ""}`,
            onClick: I,
            "aria-label": s,
            "aria-expanded": x,
            style: { background: o },
            children: [
              P.jsx("span", { className: "menu-line", style: { background: f } }),
              P.jsx("span", { className: "menu-line short", style: { background: f } }),
            ],
          }),
        }),
        C &&
          P.jsx("div", {
            ref: y,
            className: "bubble-menu-items fixed",
            children: P.jsx("ul", {
              className: "pill-list",
              children:
                d == null
                  ? void 0
                  : d.map((M, Y) => {
                      var A, H;
                      return P.jsx(
                        "li",
                        {
                          children: P.jsx("a", {
                            href: jd(M.route),
                            className: "pill-link",
                            style: {
                              "--item-rot": `${M.rotation ?? 0}deg`,
                              "--pill-bg": o,
                              "--pill-color": f,
                              "--hover-bg": (A = M.hoverStyles) == null ? void 0 : A.bgColor,
                              "--hover-color": (H = M.hoverStyles) == null ? void 0 : H.textColor,
                            },
                            ref: (V) => {
                              R.current[Y] = V;
                            },
                            onClick: (V) => {
                              (V.preventDefault(), B(M.route));
                            },
                            "aria-label": M.ariaLabel ?? M.label,
                            children: P.jsx("span", {
                              className: "pill-label",
                              ref: (V) => {
                                L.current[Y] = V;
                              },
                              children: M.label,
                            }),
                          }),
                        },
                        M.route,
                      );
                    }),
            }),
          }),
      ],
    })
  );
}
function Wu({ width: p = 120, className: r }) {
  return P.jsx("svg", {
    width: p,
    viewBox: "135.5 361.38 420.32 149.8",
    fill: "currentColor",
    className: r,
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": !0,
    children: P.jsx("path", {
      d: "m181.86 511.11c-12.524-0.49755-22.77-3.9244-30.782-10.289-1.529-1.2159-5.1725-4.8616-6.3949-6.3992-3.2489-4.0853-5.4578-8.0611-6.931-12.472-4.5334-13.579-2.2002-31.397 6.6737-50.953 7.5979-16.742 19.322-33.347 39.776-56.344 3.013-3.384 11.986-13.281 12.043-13.281 0.0216 0-0.46749 0.84706-1.083 1.8786-5.3183 8.9082-9.8689 19.401-12.348 28.485-3.9823 14.576-3.502 27.085 1.4068 36.784 3.3862 6.6822 9.1913 12.47 15.719 15.67 11.428 5.5993 28.159 6.0625 48.592 1.3554 1.4068-0.32599 71.116-18.831 154.91-41.123 83.794-22.294 152.36-40.52 152.37-40.505 0.0237 0.0193-194.68 83.333-295.75 126.56-16.007 6.8431-20.287 8.5715-27.812 11.214-19.236 6.7551-36.467 9.9783-50.396 9.4251z",
    }),
  });
}
const jp = [
    {
      label: "Drops",
      route: "drops",
      rotation: -8,
      hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
    },
    {
      label: "Innovation",
      route: "innovation",
      rotation: 8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
    },
    {
      label: "Collections",
      route: "collections",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "Community",
      route: "community",
      rotation: 8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    },
    {
      label: "Stores",
      route: "stores",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
    },
  ],
  u_ = "https://github.com/dsMagnatov/Acreage-landing-assets/blob/main/0098888.jpg?raw=true",
  a_ =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260213_051817_c7d8ccc6-bfaa-417c-8474-e5cefeea26b4.mp4?token=exp=1777075200~hmac=91d86c3600a89e923130fce0912dcfb0de81f05f2cde5fc77c30f3e7ae094342",
  f_ = "https://github.com/dsMagnatov/Acreage-landing-assets/blob/main/02604201313.png?raw=true",
  c_ =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260215_121759_424f8e9c-d8bd-4974-9567-52709dfb6842.mp4?token=exp=1777075200~hmac=4202c1d0ec90137eb6dffa8e0db93ed7569a68b2016165d8b1b567f888869ff5",
  zd = "ARC PACE";
function Xr({ eyebrow: p, title: r, description: i, children: s }) {
  return P.jsxs("div", {
    className: "relative min-h-[100dvh] bg-[#050505] text-white",
    children: [
      P.jsxs("header", {
        className: "relative z-50 flex items-center justify-between px-6 pt-8 md:px-12",
        children: [
          P.jsx("button", {
            type: "button",
            onClick: () => Bi(""),
            className: "text-white transition-opacity hover:opacity-80",
            "aria-label": `${zd} home`,
            children: P.jsx(Wu, { width: 80 }),
          }),
          P.jsx(Mp, {
            items: [...jp],
            className: "relative top-0 right-0",
            menuBg: "#ffffff",
            menuContentColor: "#111111",
          }),
        ],
      }),
      P.jsxs("main", {
        className: "relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-16 md:px-12 md:pt-24",
        children: [
          P.jsx("p", {
            className: "mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/50",
            children: p,
          }),
          P.jsx("h1", {
            className:
              "font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl",
            children: r,
          }),
          P.jsx("p", {
            className: "mt-6 max-w-2xl text-base leading-relaxed text-white/64 md:text-lg",
            children: i,
          }),
          s,
        ],
      }),
      P.jsxs("footer", {
        className:
          "relative z-10 border-t border-white/10 px-6 py-8 text-center text-xs text-white/40",
        children: [
          P.jsx("button", {
            type: "button",
            className: "underline-offset-4 hover:text-white hover:underline",
            onClick: () => Bi("contact"),
            children: "Contact ARC PACE",
          }),
          P.jsx("span", { className: "mx-2", children: "·" }),
          P.jsxs("span", { children: ["© 2026 ", zd] }),
        ],
      }),
    ],
  });
}
const d_ = [
  { name: "Performance", count: "12 silhouettes", tone: "Elite training & court" },
  { name: "Urban", count: "8 silhouettes", tone: "City exploration" },
  { name: "Trail", count: "6 silhouettes", tone: "Light off-road" },
];
function p_() {
  return P.jsx(Xr, {
    eyebrow: "Catalog",
    title: P.jsxs(P.Fragment, {
      children: [
        "Season ",
        P.jsx("span", { className: "font-serif italic", children: "collections" }),
      ],
    }),
    description:
      "Curated lines built on one cushioning platform—tuned per use case without compromising the ARC PACE ride.",
    children: P.jsx("div", {
      className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
      children: d_.map((p) =>
        P.jsxs(
          "article",
          {
            className:
              "aspect-[4/5] rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 flex flex-col justify-end",
            children: [
              P.jsx("p", {
                className: "text-xs uppercase tracking-widest text-white/40",
                children: p.tone,
              }),
              P.jsx("h3", { className: "mt-2 text-2xl font-medium", children: p.name }),
              P.jsx("p", { className: "text-sm text-white/50", children: p.count }),
            ],
          },
          p.name,
        ),
      ),
    }),
  });
}
const h_ = [
  { value: "240K+", label: "Run club members" },
  { value: "48", label: "City chapters" },
  { value: "12", label: "Pro athlete partners" },
];
function m_() {
  return P.jsxs(Xr, {
    eyebrow: "Together",
    title: P.jsxs(P.Fragment, {
      children: [
        "ARC PACE ",
        P.jsx("span", { className: "font-serif italic", children: "community" }),
      ],
    }),
    description:
      "Weekly meetups, maker workshops, and early access for members who train, explore, and shape what we build next.",
    children: [
      P.jsx("div", {
        className: "mt-12 flex flex-wrap gap-8",
        children: h_.map((p) =>
          P.jsxs(
            "div",
            {
              children: [
                P.jsx("p", {
                  className: "font-serif text-5xl italic text-[#DA3A16]",
                  children: p.value,
                }),
                P.jsx("p", { className: "mt-1 text-sm text-white/50", children: p.label }),
              ],
            },
            p.label,
          ),
        ),
      }),
      P.jsxs("p", {
        className: "mt-12 max-w-xl text-sm text-white/50",
        children: [
          "Tag ",
          P.jsx("span", { className: "text-white", children: "#ArcPace" }),
          " to be featured in our global lookbook. Members get first access to fit sessions and prototype wear tests.",
        ],
      }),
    ],
  });
}
function __() {
  return P.jsx(Xr, {
    eyebrow: "Get in touch",
    title: P.jsxs(P.Fragment, {
      children: [
        "Contact ",
        P.jsx("span", { className: "font-serif italic", children: "ARC PACE" }),
      ],
    }),
    description:
      "Partnerships, press, wholesale, and product questions—our team responds within two business days.",
    children: P.jsxs("form", {
      className: "mt-12 max-w-lg space-y-4",
      onSubmit: (p) => {
        p.preventDefault();
      },
      children: [
        P.jsxs("label", {
          className: "block",
          children: [
            P.jsx("span", {
              className: "text-xs uppercase tracking-widest text-white/50",
              children: "Name",
            }),
            P.jsx("input", {
              type: "text",
              className:
                "mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/40",
              placeholder: "Your name",
            }),
          ],
        }),
        P.jsxs("label", {
          className: "block",
          children: [
            P.jsx("span", {
              className: "text-xs uppercase tracking-widest text-white/50",
              children: "Email",
            }),
            P.jsx("input", {
              type: "email",
              className:
                "mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/40",
              placeholder: "you@email.com",
            }),
          ],
        }),
        P.jsxs("label", {
          className: "block",
          children: [
            P.jsx("span", {
              className: "text-xs uppercase tracking-widest text-white/50",
              children: "Message",
            }),
            P.jsx("textarea", {
              rows: 4,
              className:
                "mt-2 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/40",
              placeholder: "How can we help?",
            }),
          ],
        }),
        P.jsx("button", {
          type: "submit",
          className:
            "rounded-full bg-[#DA3A16] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#c43312]",
          children: "Send message",
        }),
      ],
    }),
  });
}
const g_ = [
  { name: "Velocity Pro X", date: "May 28", status: "Waitlist open" },
  { name: "Urban Drift 02", date: "June 12", status: "Members early access" },
  { name: "Trail Forge SE", date: "July 4", status: "Coming soon" },
];
function v_() {
  return P.jsxs(Xr, {
    eyebrow: "Limited releases",
    title: P.jsxs(P.Fragment, {
      children: ["Upcoming ", P.jsx("span", { className: "font-serif italic", children: "drops" })],
    }),
    description:
      "Reserve your pair before public release. ARC PACE drops are engineered in small batches with performance lab validation on every silhouette.",
    children: [
      P.jsx("ul", {
        className: "mt-12 space-y-4",
        children: g_.map((p) =>
          P.jsxs(
            "li",
            {
              className:
                "flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5",
              children: [
                P.jsxs("div", {
                  children: [
                    P.jsx("p", { className: "text-lg font-medium", children: p.name }),
                    P.jsx("p", { className: "text-sm text-white/50", children: p.date }),
                  ],
                }),
                P.jsx("span", {
                  className:
                    "rounded-full bg-[#DA3A16]/20 px-4 py-1 text-xs font-medium text-[#DA3A16]",
                  children: p.status,
                }),
              ],
            },
            p.name,
          ),
        ),
      }),
      P.jsx("button", {
        type: "button",
        className:
          "mt-10 rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-white/90",
        onClick: () => Bi("contact"),
        children: "Join the waitlist",
      }),
    ],
  });
}
function Md({ imageSrc: p, videoSrc: r, isPlaying: i = !0, baseRadius: s = 420 }) {
  const f = qe.useRef(null),
    c = qe.useRef(Array.from({ length: 6 }, () => ({ x: -1e3, y: -1e3 })));
  (qe.useEffect(() => {
    f.current && (i ? f.current.play() : f.current.pause());
  }, [i]),
    qe.useEffect(() => {
      let m = window.innerWidth / 2,
        _ = window.innerHeight / 2;
      const g = (C) => {
        ((m = C.clientX), (_ = C.clientY));
      };
      window.addEventListener("mousemove", g);
      let x;
      const k = () => {
        const C = c.current;
        ((C[0].x += (m - C[0].x) * 0.2), (C[0].y += (_ - C[0].y) * 0.2));
        for (let O = 1; O < C.length; O++)
          ((C[O].x += (C[O - 1].x - C[O].x) * 0.35), (C[O].y += (C[O - 1].y - C[O].y) * 0.35));
        for (let O = 0; O < C.length; O++) {
          const y = document.getElementById(`trail-${O}-${p.slice(-8)}`);
          y && (y.setAttribute("cx", C[O].x.toString()), y.setAttribute("cy", C[O].y.toString()));
        }
        x = requestAnimationFrame(k);
      };
      return (
        k(),
        () => {
          (window.removeEventListener("mousemove", g), cancelAnimationFrame(x));
        }
      );
    }, [p]));
  const d = `spotlight-mask-${p.slice(-12).replace(/\W/g, "")}`;
  return P.jsxs("div", {
    className:
      "absolute inset-0 z-0 flex h-full w-full items-center justify-center overflow-hidden bg-black pointer-events-none",
    children: [
      P.jsx("div", {
        className:
          "pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden",
        children: P.jsx("video", {
          ref: f,
          src: r,
          className: "absolute inset-0 h-full w-full object-cover",
          muted: !0,
          loop: !0,
          playsInline: !0,
        }),
      }),
      P.jsxs("svg", {
        className: "absolute inset-0 h-full w-full",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          P.jsxs("defs", {
            children: [
              P.jsxs("radialGradient", {
                id: `holeGradient-${d}`,
                children: [
                  P.jsx("stop", { offset: "0%", stopColor: "black", stopOpacity: "1" }),
                  P.jsx("stop", { offset: "60%", stopColor: "black", stopOpacity: "0.8" }),
                  P.jsx("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" }),
                ],
              }),
              P.jsxs("mask", {
                id: d,
                maskContentUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                children: [
                  P.jsx("rect", { width: "100%", height: "100%", fill: "white" }),
                  Array.from({ length: 6 })
                    .reverse()
                    .map((m, _) => {
                      const g = 5 - _;
                      return P.jsx(
                        "circle",
                        {
                          id: `trail-${g}-${p.slice(-8)}`,
                          cx: "-1000",
                          cy: "-1000",
                          r: s - g * 35,
                          fill: `url(#holeGradient-${d})`,
                          opacity: 1 - g * 0.15,
                        },
                        `trail-${g}`,
                      );
                    }),
                ],
              }),
            ],
          }),
          P.jsx("image", {
            href: p,
            width: "100%",
            height: "100%",
            preserveAspectRatio: "xMidYMid slice",
            mask: `url(#${d})`,
          }),
        ],
      }),
    ],
  });
}
function y_() {
  const [p, r] = qe.useState(!1),
    [i, s] = qe.useState(!1);
  return P.jsxs("div", {
    className: "relative flex w-full flex-col bg-[#050505]",
    children: [
      P.jsxs("section", {
        className:
          "sticky top-0 z-0 flex h-[100dvh] w-full flex-col justify-between overflow-hidden pointer-events-auto",
        children: [
          P.jsx(Md, { imageSrc: u_, videoSrc: a_, isPlaying: p }),
          P.jsx("div", {
            className: "absolute bottom-0 left-0 z-20 h-[75%] w-full",
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
          }),
          P.jsxs("header", {
            className: "relative z-50 flex w-full items-start justify-center pt-[150px]",
            children: [
              P.jsx("button", {
                type: "button",
                onClick: () => Bi(""),
                className: "text-white",
                "aria-label": "ARC PACE home",
                children: P.jsx(Wu, {}),
              }),
              P.jsx(Mp, {
                items: [...jp],
                className: "absolute top-8 right-8 z-50",
                menuBg: "#ffffff",
                menuContentColor: "#111111",
              }),
            ],
          }),
          P.jsx("main", {
            className:
              "relative z-10 flex w-full flex-1 flex-col items-center justify-end px-4 pb-24 text-center text-white",
            children: P.jsxs("h1", {
              className:
                "mx-auto w-full translate-y-[50px] font-sans font-medium leading-[1.05] tracking-tight",
              style: { fontSize: "clamp(14px, 3vw, 51px)" },
              children: [
                P.jsx("span", { className: "block", children: "Pure Comfort For" }),
                P.jsxs("span", {
                  className: "block",
                  children: [
                    "Next-Generation Athletes.",
                    " ",
                    P.jsx("span", {
                      className: "font-serif font-normal italic pr-1",
                      children: "We Craft",
                    }),
                  ],
                }),
                P.jsx("span", {
                  className: "block font-serif font-normal italic pr-1",
                  children: "The Ultimate Footwear For Elite Performance,",
                }),
                P.jsx("span", {
                  className: "block font-serif font-normal italic pr-1",
                  children: "Urban Exploration, Everyday Style.",
                }),
              ],
            }),
          }),
        ],
      }),
      P.jsxs("section", {
        className: "relative z-10 h-[100dvh] w-full overflow-hidden bg-black text-white",
        style: { boxShadow: "0 -20px 50px rgba(0,0,0,0.5)" },
        children: [
          P.jsx(Md, { imageSrc: f_, videoSrc: c_, isPlaying: i, baseRadius: 520 }),
          P.jsx("div", {
            className:
              "absolute right-[calc(8%+100px)] bottom-[12%] z-30 h-[calc(50%+230px)] w-[calc(50%-50px)]",
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
          }),
          P.jsx("div", {
            className:
              "absolute left-[calc(8%+200px)] top-[calc(20%+190px)] z-30 h-[calc(22.5%+130px)] w-[calc(15%+250px)] -translate-y-full",
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
          }),
          P.jsxs("div", {
            className:
              "absolute left-[calc(8%+200px)] top-[20%] z-20 w-[320px] rounded-sm border border-white/10 px-8 py-6",
            style: {
              background: "rgba(0, 0, 0, 0.16)",
              backdropFilter: "blur(80px)",
              WebkitBackdropFilter: "blur(80px)",
            },
            children: [
              P.jsxs("div", {
                className: "mb-4 flex items-end gap-2",
                children: [
                  P.jsx("span", {
                    className:
                      "font-serif text-[72px] leading-[80px] tracking-tight text-[#DA3A16] italic",
                    children: "78%",
                  }),
                  P.jsx("div", {
                    className: "w-[11px]",
                    children: P.jsxs("svg", {
                      style: { width: "160px", height: "80px" },
                      viewBox: "0 0 289 138",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      "aria-hidden": !0,
                      children: [
                        P.jsx("g", {
                          filter: "url(#filter0_d_878_28499)",
                          children: P.jsx("path", {
                            d: "M22.5 48.7306C39.7833 48.7306 49.34 54.94 63.1667 69.2965C76.9933 83.653 86.55 110.5 103.833 110.5C121.117 110.5 130.673 84.2876 144.5 59.2856C158.327 34.2837 167.883 19.5573 185.167 19.5573C202.45 19.5573 208.55 57.6673 225.833 57.6673C243.117 57.6673 249.217 19.5 266.5 19.5",
                            stroke: "#DA3A16",
                            strokeWidth: "2",
                          }),
                        }),
                        P.jsx("defs", {
                          children: P.jsxs("filter", {
                            id: "filter0_d_878_28499",
                            x: "0",
                            y: "0",
                            width: "289",
                            height: "138",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                              P.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                              P.jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha",
                              }),
                              P.jsx("feOffset", { dy: "4" }),
                              P.jsx("feGaussianBlur", { stdDeviation: "11.25" }),
                              P.jsx("feComposite", { in2: "hardAlpha", operator: "out" }),
                              P.jsx("feColorMatrix", {
                                type: "matrix",
                                values:
                                  "0 0 0 0 0.854902 0 0 0 0 0.227451 0 0 0 0 0.0862745 0 0 0 1 0",
                              }),
                              P.jsx("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_878_28499",
                              }),
                              P.jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_878_28499",
                                result: "shape",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              P.jsx("h3", {
                className:
                  "mb-2 font-serif text-[15px] uppercase leading-tight tracking-[0.02em] text-white",
                children: "NEXT-GEN CUSHIONING ARCHITECTURE",
              }),
              P.jsx("p", {
                className: "font-serif text-[13px] text-white/64",
                children: "Impact Absorption & Energy Return Dynamics",
              }),
            ],
          }),
          P.jsx("div", {
            className: "absolute bottom-[12%] left-[8%] z-20 max-w-[500px] text-white",
            children: P.jsxs("h2", {
              className: "flex flex-col text-[44px] leading-[1.05] tracking-tight",
              children: [
                P.jsx("span", {
                  className: "font-sans font-medium",
                  children: "Bringing Aerospace-",
                }),
                P.jsx("span", {
                  className: "font-sans font-medium",
                  children: "Grade Infrastructure",
                }),
                P.jsxs("span", {
                  className: "pt-1 font-serif font-normal",
                  children: [
                    P.jsx("span", { className: "not-italic", children: "Directly To Your " }),
                    P.jsx("span", { className: "italic", children: "Everyday" }),
                  ],
                }),
                P.jsx("span", {
                  className: "font-serif font-normal italic",
                  children: "Urban Exploration",
                }),
              ],
            }),
          }),
          P.jsxs("div", {
            className:
              "absolute right-[calc(8%+100px)] bottom-[12%] z-20 flex flex-col items-center",
            children: [
              P.jsx("div", {
                className: "flex w-[180px] items-center justify-center bg-white py-[6px]",
                children: P.jsx("span", {
                  className:
                    "text-center font-serif text-[10px] font-bold uppercase leading-[16px] tracking-[0.08em] text-black",
                  children: "THE SCIENCE OF IMPACT CONTROL",
                }),
              }),
              P.jsx("div", {
                className: "flex h-[100px] w-[180px] items-center justify-center bg-[#DA3A16]",
                children: P.jsx(Wu, { width: 86, className: "text-white" }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const x_ = [
  {
    title: "Reactive foam lattice",
    body: "78% energy return measured in our impact lab across 12,000 strike cycles.",
  },
  {
    title: "Breathable shell weave",
    body: "Micro-perforated upper mapped to heat zones for all-day urban wear.",
  },
  {
    title: "Carbon trail plate",
    body: "Aerospace-grade plate geometry adapted for pavement and light trail.",
  },
];
function w_() {
  return P.jsx(Xr, {
    eyebrow: "R&D",
    title: P.jsxs(P.Fragment, {
      children: ["Innovation ", P.jsx("span", { className: "font-serif italic", children: "lab" })],
    }),
    description:
      "ARC PACE prototypes in Portland and Eindhoven—where biomechanics, materials science, and street culture meet.",
    children: P.jsx("div", {
      className: "mt-12 grid gap-6 md:grid-cols-3",
      children: x_.map((p) =>
        P.jsxs(
          "article",
          {
            className: "rounded-2xl border border-white/10 bg-white/5 p-6",
            children: [
              P.jsx("h3", { className: "text-lg font-medium", children: p.title }),
              P.jsx("p", {
                className: "mt-3 text-sm leading-relaxed text-white/60",
                children: p.body,
              }),
            ],
          },
          p.title,
        ),
      ),
    }),
  });
}
const S_ = [
  { city: "New York", address: "SoHo — 142 Spring St" },
  { city: "London", address: "Shoreditch — 18 Redchurch St" },
  { city: "Tokyo", address: "Harajuku — 3-18-12 Jingumae" },
  { city: "Los Angeles", address: "Abbot Kinney — 1214 Abbot Kinney Blvd" },
];
function k_() {
  return P.jsx(Xr, {
    eyebrow: "Find us",
    title: P.jsxs(P.Fragment, {
      children: [
        "Flagship ",
        P.jsx("span", { className: "font-serif italic", children: "stores" }),
      ],
    }),
    description:
      "Book a gait analysis, try full collections, and customize lace kits in our experience studios.",
    children: P.jsx("ul", {
      className: "mt-12 divide-y divide-white/10 rounded-2xl border border-white/10",
      children: S_.map((p) =>
        P.jsxs(
          "li",
          {
            className: "flex flex-wrap justify-between gap-2 px-6 py-5",
            children: [
              P.jsx("span", { className: "font-medium", children: p.city }),
              P.jsx("span", { className: "text-sm text-white/50", children: p.address }),
            ],
          },
          p.city,
        ),
      ),
    }),
  });
}
function C_() {
  return (
    qe.useEffect(() => {
      Ld();
    }, []),
    P.jsx(Wm, {
      routes: {
        "": P.jsx(y_, {}),
        drops: P.jsx(v_, {}),
        innovation: P.jsx(w_, {}),
        collections: P.jsx(p_, {}),
        community: P.jsx(m_, {}),
        stores: P.jsx(k_, {}),
        contact: P.jsx(__, {}),
      },
    })
  );
}
Im.createRoot(document.getElementById("root")).render(
  P.jsx(qe.StrictMode, { children: P.jsx(C_, {}) }),
);
