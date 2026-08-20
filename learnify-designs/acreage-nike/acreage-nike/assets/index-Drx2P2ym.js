(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const a of s)
      if (a.type === "childList")
        for (const c of a.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const a = {};
    return (
      s.integrity && (a.integrity = s.integrity),
      s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const a = i(s);
    fetch(s.href, a);
  }
})();
var gu =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function f0(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
function c0(p) {
  if (Object.prototype.hasOwnProperty.call(p, "__esModule")) return p;
  var r = p.default;
  if (typeof r == "function") {
    var i = function o() {
      return this instanceof o
        ? Reflect.construct(r, arguments, this.constructor)
        : r.apply(this, arguments);
    };
    i.prototype = r.prototype;
  } else i = {};
  return (
    Object.defineProperty(i, "__esModule", { value: !0 }),
    Object.keys(p).forEach(function (o) {
      var s = Object.getOwnPropertyDescriptor(p, o);
      Object.defineProperty(
        i,
        o,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return p[o];
              },
            },
      );
    }),
    i
  );
}
var vu = { exports: {} },
  zi = {},
  wu = { exports: {} },
  he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xd;
function d0() {
  if (xd) return he;
  xd = 1;
  var p = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    a = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    g = Symbol.iterator;
  function w(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (g && k[g]) || k["@@iterator"]), typeof k == "function" ? k : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    L = Object.assign,
    v = {};
  function R(k, F, oe) {
    ((this.props = k), (this.context = F), (this.refs = v), (this.updater = oe || S));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (k, F) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, k, F, "setState");
    }),
    (R.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    }));
  function C() {}
  C.prototype = R.prototype;
  function M(k, F, oe) {
    ((this.props = k), (this.context = F), (this.refs = v), (this.updater = oe || S));
  }
  var O = (M.prototype = new C());
  ((O.constructor = M), L(O, R.prototype), (O.isPureReactComponent = !0));
  var N = Array.isArray,
    T = Object.prototype.hasOwnProperty,
    U = { current: null },
    I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(k, F, oe) {
    var ue,
      pe = {},
      me = null,
      xe = null;
    if (F != null)
      for (ue in (F.ref !== void 0 && (xe = F.ref), F.key !== void 0 && (me = "" + F.key), F))
        T.call(F, ue) && !I.hasOwnProperty(ue) && (pe[ue] = F[ue]);
    var ge = arguments.length - 2;
    if (ge === 1) pe.children = oe;
    else if (1 < ge) {
      for (var ve = Array(ge), Xe = 0; Xe < ge; Xe++) ve[Xe] = arguments[Xe + 2];
      pe.children = ve;
    }
    if (k && k.defaultProps)
      for (ue in ((ge = k.defaultProps), ge)) pe[ue] === void 0 && (pe[ue] = ge[ue]);
    return { $$typeof: p, type: k, key: me, ref: xe, props: pe, _owner: U.current };
  }
  function V(k, F) {
    return { $$typeof: p, type: k.type, key: F, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function G(k) {
    return typeof k == "object" && k !== null && k.$$typeof === p;
  }
  function Z(k) {
    var F = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (oe) {
        return F[oe];
      })
    );
  }
  var ee = /\/+/g;
  function te(k, F) {
    return typeof k == "object" && k !== null && k.key != null ? Z("" + k.key) : F.toString(36);
  }
  function B(k, F, oe, ue, pe) {
    var me = typeof k;
    (me === "undefined" || me === "boolean") && (k = null);
    var xe = !1;
    if (k === null) xe = !0;
    else
      switch (me) {
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case p:
            case r:
              xe = !0;
          }
      }
    if (xe)
      return (
        (xe = k),
        (pe = pe(xe)),
        (k = ue === "" ? "." + te(xe, 0) : ue),
        N(pe)
          ? ((oe = ""),
            k != null && (oe = k.replace(ee, "$&/") + "/"),
            B(pe, F, oe, "", function (Xe) {
              return Xe;
            }))
          : pe != null &&
            (G(pe) &&
              (pe = V(
                pe,
                oe +
                  (!pe.key || (xe && xe.key === pe.key)
                    ? ""
                    : ("" + pe.key).replace(ee, "$&/") + "/") +
                  k,
              )),
            F.push(pe)),
        1
      );
    if (((xe = 0), (ue = ue === "" ? "." : ue + ":"), N(k)))
      for (var ge = 0; ge < k.length; ge++) {
        me = k[ge];
        var ve = ue + te(me, ge);
        xe += B(me, F, oe, ve, pe);
      }
    else if (((ve = w(k)), typeof ve == "function"))
      for (k = ve.call(k), ge = 0; !(me = k.next()).done;)
        ((me = me.value), (ve = ue + te(me, ge++)), (xe += B(me, F, oe, ve, pe)));
    else if (me === "object")
      throw (
        (F = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (F === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : F) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return xe;
  }
  function q(k, F, oe) {
    if (k == null) return k;
    var ue = [],
      pe = 0;
    return (
      B(k, ue, "", "", function (me) {
        return F.call(oe, me, pe++);
      }),
      ue
    );
  }
  function ae(k) {
    if (k._status === -1) {
      var F = k._result;
      ((F = F()),
        F.then(
          function (oe) {
            (k._status === 0 || k._status === -1) && ((k._status = 1), (k._result = oe));
          },
          function (oe) {
            (k._status === 0 || k._status === -1) && ((k._status = 2), (k._result = oe));
          },
        ),
        k._status === -1 && ((k._status = 0), (k._result = F)));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var se = { current: null },
    Q = { transition: null },
    H = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: Q, ReactCurrentOwner: U };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (he.Children = {
      map: q,
      forEach: function (k, F, oe) {
        q(
          k,
          function () {
            F.apply(this, arguments);
          },
          oe,
        );
      },
      count: function (k) {
        var F = 0;
        return (
          q(k, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (k) {
        return (
          q(k, function (F) {
            return F;
          }) || []
        );
      },
      only: function (k) {
        if (!G(k))
          throw Error("React.Children.only expected to receive a single React element child.");
        return k;
      },
    }),
    (he.Component = R),
    (he.Fragment = i),
    (he.Profiler = s),
    (he.PureComponent = M),
    (he.StrictMode = o),
    (he.Suspense = h),
    (he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H),
    (he.act = W),
    (he.cloneElement = function (k, F, oe) {
      if (k == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            k +
            ".",
        );
      var ue = L({}, k.props),
        pe = k.key,
        me = k.ref,
        xe = k._owner;
      if (F != null) {
        if (
          (F.ref !== void 0 && ((me = F.ref), (xe = U.current)),
          F.key !== void 0 && (pe = "" + F.key),
          k.type && k.type.defaultProps)
        )
          var ge = k.type.defaultProps;
        for (ve in F)
          T.call(F, ve) &&
            !I.hasOwnProperty(ve) &&
            (ue[ve] = F[ve] === void 0 && ge !== void 0 ? ge[ve] : F[ve]);
      }
      var ve = arguments.length - 2;
      if (ve === 1) ue.children = oe;
      else if (1 < ve) {
        ge = Array(ve);
        for (var Xe = 0; Xe < ve; Xe++) ge[Xe] = arguments[Xe + 2];
        ue.children = ge;
      }
      return { $$typeof: p, type: k.type, key: pe, ref: me, props: ue, _owner: xe };
    }),
    (he.createContext = function (k) {
      return (
        (k = {
          $$typeof: c,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: a, _context: k }),
        (k.Consumer = k)
      );
    }),
    (he.createElement = b),
    (he.createFactory = function (k) {
      var F = b.bind(null, k);
      return ((F.type = k), F);
    }),
    (he.createRef = function () {
      return { current: null };
    }),
    (he.forwardRef = function (k) {
      return { $$typeof: d, render: k };
    }),
    (he.isValidElement = G),
    (he.lazy = function (k) {
      return { $$typeof: _, _payload: { _status: -1, _result: k }, _init: ae };
    }),
    (he.memo = function (k, F) {
      return { $$typeof: m, type: k, compare: F === void 0 ? null : F };
    }),
    (he.startTransition = function (k) {
      var F = Q.transition;
      Q.transition = {};
      try {
        k();
      } finally {
        Q.transition = F;
      }
    }),
    (he.unstable_act = W),
    (he.useCallback = function (k, F) {
      return se.current.useCallback(k, F);
    }),
    (he.useContext = function (k) {
      return se.current.useContext(k);
    }),
    (he.useDebugValue = function () {}),
    (he.useDeferredValue = function (k) {
      return se.current.useDeferredValue(k);
    }),
    (he.useEffect = function (k, F) {
      return se.current.useEffect(k, F);
    }),
    (he.useId = function () {
      return se.current.useId();
    }),
    (he.useImperativeHandle = function (k, F, oe) {
      return se.current.useImperativeHandle(k, F, oe);
    }),
    (he.useInsertionEffect = function (k, F) {
      return se.current.useInsertionEffect(k, F);
    }),
    (he.useLayoutEffect = function (k, F) {
      return se.current.useLayoutEffect(k, F);
    }),
    (he.useMemo = function (k, F) {
      return se.current.useMemo(k, F);
    }),
    (he.useReducer = function (k, F, oe) {
      return se.current.useReducer(k, F, oe);
    }),
    (he.useRef = function (k) {
      return se.current.useRef(k);
    }),
    (he.useState = function (k) {
      return se.current.useState(k);
    }),
    (he.useSyncExternalStore = function (k, F, oe) {
      return se.current.useSyncExternalStore(k, F, oe);
    }),
    (he.useTransition = function () {
      return se.current.useTransition();
    }),
    (he.version = "18.3.1"),
    he
  );
}
var Sd;
function Xr() {
  return (Sd || ((Sd = 1), (wu.exports = d0())), wu.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pd;
function p0() {
  if (Pd) return zi;
  Pd = 1;
  var p = Xr(),
    r = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    s = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, h, m) {
    var _,
      g = {},
      w = null,
      S = null;
    (m !== void 0 && (w = "" + m),
      h.key !== void 0 && (w = "" + h.key),
      h.ref !== void 0 && (S = h.ref));
    for (_ in h) o.call(h, _) && !a.hasOwnProperty(_) && (g[_] = h[_]);
    if (d && d.defaultProps) for (_ in ((h = d.defaultProps), h)) g[_] === void 0 && (g[_] = h[_]);
    return { $$typeof: r, type: d, key: w, ref: S, props: g, _owner: s.current };
  }
  return ((zi.Fragment = i), (zi.jsx = c), (zi.jsxs = c), zi);
}
var kd;
function h0() {
  return (kd || ((kd = 1), (vu.exports = p0())), vu.exports);
}
var A = h0(),
  Ge = Xr(),
  uo = {},
  xu = { exports: {} },
  dt = {},
  Su = { exports: {} },
  Pu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed;
function m0() {
  return (
    Ed ||
      ((Ed = 1),
      (function (p) {
        function r(Q, H) {
          var W = Q.length;
          Q.push(H);
          e: for (; 0 < W;) {
            var k = (W - 1) >>> 1,
              F = Q[k];
            if (0 < s(F, H)) ((Q[k] = H), (Q[W] = F), (W = k));
            else break e;
          }
        }
        function i(Q) {
          return Q.length === 0 ? null : Q[0];
        }
        function o(Q) {
          if (Q.length === 0) return null;
          var H = Q[0],
            W = Q.pop();
          if (W !== H) {
            Q[0] = W;
            e: for (var k = 0, F = Q.length, oe = F >>> 1; k < oe;) {
              var ue = 2 * (k + 1) - 1,
                pe = Q[ue],
                me = ue + 1,
                xe = Q[me];
              if (0 > s(pe, W))
                me < F && 0 > s(xe, pe)
                  ? ((Q[k] = xe), (Q[me] = W), (k = me))
                  : ((Q[k] = pe), (Q[ue] = W), (k = ue));
              else if (me < F && 0 > s(xe, W)) ((Q[k] = xe), (Q[me] = W), (k = me));
              else break e;
            }
          }
          return H;
        }
        function s(Q, H) {
          var W = Q.sortIndex - H.sortIndex;
          return W !== 0 ? W : Q.id - H.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var a = performance;
          p.unstable_now = function () {
            return a.now();
          };
        } else {
          var c = Date,
            d = c.now();
          p.unstable_now = function () {
            return c.now() - d;
          };
        }
        var h = [],
          m = [],
          _ = 1,
          g = null,
          w = 3,
          S = !1,
          L = !1,
          v = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          C = typeof clearTimeout == "function" ? clearTimeout : null,
          M = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(Q) {
          for (var H = i(m); H !== null;) {
            if (H.callback === null) o(m);
            else if (H.startTime <= Q) (o(m), (H.sortIndex = H.expirationTime), r(h, H));
            else break;
            H = i(m);
          }
        }
        function N(Q) {
          if (((v = !1), O(Q), !L))
            if (i(h) !== null) ((L = !0), ae(T));
            else {
              var H = i(m);
              H !== null && se(N, H.startTime - Q);
            }
        }
        function T(Q, H) {
          ((L = !1), v && ((v = !1), C(b), (b = -1)), (S = !0));
          var W = w;
          try {
            for (O(H), g = i(h); g !== null && (!(g.expirationTime > H) || (Q && !Z()));) {
              var k = g.callback;
              if (typeof k == "function") {
                ((g.callback = null), (w = g.priorityLevel));
                var F = k(g.expirationTime <= H);
                ((H = p.unstable_now()),
                  typeof F == "function" ? (g.callback = F) : g === i(h) && o(h),
                  O(H));
              } else o(h);
              g = i(h);
            }
            if (g !== null) var oe = !0;
            else {
              var ue = i(m);
              (ue !== null && se(N, ue.startTime - H), (oe = !1));
            }
            return oe;
          } finally {
            ((g = null), (w = W), (S = !1));
          }
        }
        var U = !1,
          I = null,
          b = -1,
          V = 5,
          G = -1;
        function Z() {
          return !(p.unstable_now() - G < V);
        }
        function ee() {
          if (I !== null) {
            var Q = p.unstable_now();
            G = Q;
            var H = !0;
            try {
              H = I(!0, Q);
            } finally {
              H ? te() : ((U = !1), (I = null));
            }
          } else U = !1;
        }
        var te;
        if (typeof M == "function")
          te = function () {
            M(ee);
          };
        else if (typeof MessageChannel < "u") {
          var B = new MessageChannel(),
            q = B.port2;
          ((B.port1.onmessage = ee),
            (te = function () {
              q.postMessage(null);
            }));
        } else
          te = function () {
            R(ee, 0);
          };
        function ae(Q) {
          ((I = Q), U || ((U = !0), te()));
        }
        function se(Q, H) {
          b = R(function () {
            Q(p.unstable_now());
          }, H);
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
            L || S || ((L = !0), ae(T));
          }),
          (p.unstable_forceFrameRate = function (Q) {
            0 > Q || 125 < Q
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (V = 0 < Q ? Math.floor(1e3 / Q) : 5);
          }),
          (p.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (p.unstable_getFirstCallbackNode = function () {
            return i(h);
          }),
          (p.unstable_next = function (Q) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = w;
            }
            var W = w;
            w = H;
            try {
              return Q();
            } finally {
              w = W;
            }
          }),
          (p.unstable_pauseExecution = function () {}),
          (p.unstable_requestPaint = function () {}),
          (p.unstable_runWithPriority = function (Q, H) {
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
            var W = w;
            w = Q;
            try {
              return H();
            } finally {
              w = W;
            }
          }),
          (p.unstable_scheduleCallback = function (Q, H, W) {
            var k = p.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? k + W : k))
                : (W = k),
              Q)
            ) {
              case 1:
                var F = -1;
                break;
              case 2:
                F = 250;
                break;
              case 5:
                F = 1073741823;
                break;
              case 4:
                F = 1e4;
                break;
              default:
                F = 5e3;
            }
            return (
              (F = W + F),
              (Q = {
                id: _++,
                callback: H,
                priorityLevel: Q,
                startTime: W,
                expirationTime: F,
                sortIndex: -1,
              }),
              W > k
                ? ((Q.sortIndex = W),
                  r(m, Q),
                  i(h) === null && Q === i(m) && (v ? (C(b), (b = -1)) : (v = !0), se(N, W - k)))
                : ((Q.sortIndex = F), r(h, Q), L || S || ((L = !0), ae(T))),
              Q
            );
          }),
          (p.unstable_shouldYield = Z),
          (p.unstable_wrapCallback = function (Q) {
            var H = w;
            return function () {
              var W = w;
              w = H;
              try {
                return Q.apply(this, arguments);
              } finally {
                w = W;
              }
            };
          }));
      })(Pu)),
    Pu
  );
}
var Td;
function y0() {
  return (Td || ((Td = 1), (Su.exports = m0())), Su.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd;
function _0() {
  if (Cd) return dt;
  Cd = 1;
  var p = Xr(),
    r = y0();
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
  function a(e, t) {
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
    h = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    _ = {},
    g = {};
  function w(e) {
    return h.call(g, e) ? !0 : h.call(_, e) ? !1 : m.test(e) ? (g[e] = !0) : ((_[e] = !0), !1);
  }
  function S(e, t, n, l) {
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
  function L(e, t, n, l) {
    if (t === null || typeof t > "u" || S(e, t, n, l)) return !0;
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
  function v(e, t, n, l, u, f, y) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = l),
      (this.attributeNamespace = u),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = f),
      (this.removeEmptyString = y));
  }
  var R = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      R[e] = new v(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      R[t] = new v(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      R[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        R[e] = new v(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        R[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      R[e] = new v(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      R[e] = new v(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      R[e] = new v(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      R[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var C = /[\-:]([a-z])/g;
  function M(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(C, M);
      R[t] = new v(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(C, M);
        R[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(C, M);
      R[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      R[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (R.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      R[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function O(e, t, n, l) {
    var u = R.hasOwnProperty(t) ? R[t] : null;
    (u !== null
      ? u.type !== 0
      : l || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (L(t, n, u, l) && (n = null),
      l || u === null
        ? w(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
  var N = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    T = Symbol.for("react.element"),
    U = Symbol.for("react.portal"),
    I = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    V = Symbol.for("react.profiler"),
    G = Symbol.for("react.provider"),
    Z = Symbol.for("react.context"),
    ee = Symbol.for("react.forward_ref"),
    te = Symbol.for("react.suspense"),
    B = Symbol.for("react.suspense_list"),
    q = Symbol.for("react.memo"),
    ae = Symbol.for("react.lazy"),
    se = Symbol.for("react.offscreen"),
    Q = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Q && e[Q]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var W = Object.assign,
    k;
  function F(e) {
    if (k === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        k = (t && t[1]) || "";
      }
    return (
      `
` +
      k +
      e
    );
  }
  var oe = !1;
  function ue(e, t) {
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
          } catch (j) {
            var l = j;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (j) {
            l = j;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (j) {
          l = j;
        }
        e();
      }
    } catch (j) {
      if (j && l && typeof j.stack == "string") {
        for (
          var u = j.stack.split(`
`),
            f = l.stack.split(`
`),
            y = u.length - 1,
            x = f.length - 1;
          1 <= y && 0 <= x && u[y] !== f[x];
        )
          x--;
        for (; 1 <= y && 0 <= x; y--, x--)
          if (u[y] !== f[x]) {
            if (y !== 1 || x !== 1)
              do
                if ((y--, x--, 0 > x || u[y] !== f[x])) {
                  var P =
                    `
` + u[y].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      P.includes("<anonymous>") &&
                      (P = P.replace("<anonymous>", e.displayName)),
                    P
                  );
                }
              while (1 <= y && 0 <= x);
            break;
          }
      }
    } finally {
      ((oe = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? F(e) : "";
  }
  function pe(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = ue(e.type, !1)), e);
      case 11:
        return ((e = ue(e.type.render, !1)), e);
      case 1:
        return ((e = ue(e.type, !0)), e);
      default:
        return "";
    }
  }
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case I:
        return "Fragment";
      case U:
        return "Portal";
      case V:
        return "Profiler";
      case b:
        return "StrictMode";
      case te:
        return "Suspense";
      case B:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Z:
          return (e.displayName || "Context") + ".Consumer";
        case G:
          return (e._context.displayName || "Context") + ".Provider";
        case ee:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case q:
          return ((t = e.displayName || null), t !== null ? t : me(e.type) || "Memo");
        case ae:
          ((t = e._payload), (e = e._init));
          try {
            return me(e(t));
          } catch {}
      }
    return null;
  }
  function xe(e) {
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
  function ge(e) {
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
  function ve(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Xe(e) {
    var t = ve(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var u = n.get,
        f = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (y) {
            ((l = "" + y), f.call(this, y));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (y) {
            l = "" + y;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Zi(e) {
    e._valueTracker || (e._valueTracker = Xe(e));
  }
  function Ta(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = ve(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ji(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Eo(e, t) {
    var n = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ca(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      l = t.checked != null ? t.checked : t.defaultChecked;
    ((n = ge(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function Oa(e, t) {
    ((t = t.checked), t != null && O(e, "checked", t, !1));
  }
  function To(e, t) {
    Oa(e, t);
    var n = ge(t.value),
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
      ? Co(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Co(e, t.type, ge(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Ra(e, t, n) {
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
  function Co(e, t, n) {
    (t !== "number" || Ji(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Kr = Array.isArray;
  function dr(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < n.length; u++) t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        ((u = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== u && (e[n].selected = u),
          u && l && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + ge(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          ((e[u].selected = !0), l && (e[u].defaultSelected = !0));
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Oo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Na(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(i(92));
        if (Kr(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: ge(n) };
  }
  function Ma(e, t) {
    var n = ge(t.value),
      l = ge(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      l != null && (e.defaultValue = "" + l));
  }
  function La(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Da(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ro(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Da(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var el,
    za = (function (e) {
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
          el = el || document.createElement("div"),
            el.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = el.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function qr(e, t) {
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
    hh = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Gr).forEach(function (e) {
    hh.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gr[t] = Gr[e]));
    });
  });
  function Aa(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Gr.hasOwnProperty(e) && Gr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function ja(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var l = n.indexOf("--") === 0,
          u = Aa(n, t[n], l);
        (n === "float" && (n = "cssFloat"), l ? e.setProperty(n, u) : (e[n] = u));
      }
  }
  var mh = W(
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
  function No(e, t) {
    if (t) {
      if (mh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Mo(e, t) {
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
  var Lo = null;
  function Do(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var zo = null,
    pr = null,
    hr = null;
  function Ia(e) {
    if ((e = vi(e))) {
      if (typeof zo != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = Pl(t)), zo(e.stateNode, e.type, t));
    }
  }
  function Fa(e) {
    pr ? (hr ? hr.push(e) : (hr = [e])) : (pr = e);
  }
  function Ua() {
    if (pr) {
      var e = pr,
        t = hr;
      if (((hr = pr = null), Ia(e), t)) for (e = 0; e < t.length; e++) Ia(t[e]);
    }
  }
  function Va(e, t) {
    return e(t);
  }
  function Ba() {}
  var Ao = !1;
  function Ha(e, t, n) {
    if (Ao) return e(t, n);
    Ao = !0;
    try {
      return Va(e, t, n);
    } finally {
      ((Ao = !1), (pr !== null || hr !== null) && (Ba(), Ua()));
    }
  }
  function Zr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = Pl(n);
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
  var jo = !1;
  if (d)
    try {
      var Jr = {};
      (Object.defineProperty(Jr, "passive", {
        get: function () {
          jo = !0;
        },
      }),
        window.addEventListener("test", Jr, Jr),
        window.removeEventListener("test", Jr, Jr));
    } catch {
      jo = !1;
    }
  function yh(e, t, n, l, u, f, y, x, P) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, j);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var ei = !1,
    tl = null,
    nl = !1,
    Io = null,
    _h = {
      onError: function (e) {
        ((ei = !0), (tl = e));
      },
    };
  function gh(e, t, n, l, u, f, y, x, P) {
    ((ei = !1), (tl = null), yh.apply(_h, arguments));
  }
  function vh(e, t, n, l, u, f, y, x, P) {
    if ((gh.apply(this, arguments), ei)) {
      if (ei) {
        var j = tl;
        ((ei = !1), (tl = null));
      } else throw Error(i(198));
      nl || ((nl = !0), (Io = j));
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
  function ba(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Wa(e) {
    if (Wn(e) !== e) throw Error(i(188));
  }
  function wh(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Wn(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ;) {
      var u = n.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((l = u.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f;) {
          if (f === n) return (Wa(u), e);
          if (f === l) return (Wa(u), t);
          f = f.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== l.return) ((n = u), (l = f));
      else {
        for (var y = !1, x = u.child; x;) {
          if (x === n) {
            ((y = !0), (n = u), (l = f));
            break;
          }
          if (x === l) {
            ((y = !0), (l = u), (n = f));
            break;
          }
          x = x.sibling;
        }
        if (!y) {
          for (x = f.child; x;) {
            if (x === n) {
              ((y = !0), (n = f), (l = u));
              break;
            }
            if (x === l) {
              ((y = !0), (l = f), (n = u));
              break;
            }
            x = x.sibling;
          }
          if (!y) throw Error(i(189));
        }
      }
      if (n.alternate !== l) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function $a(e) {
    return ((e = wh(e)), e !== null ? Ya(e) : null);
  }
  function Ya(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Ya(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Qa = r.unstable_scheduleCallback,
    Xa = r.unstable_cancelCallback,
    xh = r.unstable_shouldYield,
    Sh = r.unstable_requestPaint,
    Ie = r.unstable_now,
    Ph = r.unstable_getCurrentPriorityLevel,
    Fo = r.unstable_ImmediatePriority,
    Ka = r.unstable_UserBlockingPriority,
    rl = r.unstable_NormalPriority,
    kh = r.unstable_LowPriority,
    qa = r.unstable_IdlePriority,
    il = null,
    Xt = null;
  function Eh(e) {
    if (Xt && typeof Xt.onCommitFiberRoot == "function")
      try {
        Xt.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Vt = Math.clz32 ? Math.clz32 : Oh,
    Th = Math.log,
    Ch = Math.LN2;
  function Oh(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Th(e) / Ch) | 0)) | 0);
  }
  var ll = 64,
    ol = 4194304;
  function ti(e) {
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
  function sl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      f = e.pingedLanes,
      y = n & 268435455;
    if (y !== 0) {
      var x = y & ~u;
      x !== 0 ? (l = ti(x)) : ((f &= y), f !== 0 && (l = ti(f)));
    } else ((y = n & ~u), y !== 0 ? (l = ti(y)) : f !== 0 && (l = ti(f)));
    if (l === 0) return 0;
    if (
      t !== 0 &&
      t !== l &&
      (t & u) === 0 &&
      ((u = l & -l), (f = t & -t), u >= f || (u === 16 && (f & 4194240) !== 0))
    )
      return t;
    if (((l & 4) !== 0 && (l |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= l; 0 < t;)
        ((n = 31 - Vt(t)), (u = 1 << n), (l |= e[n]), (t &= ~u));
    return l;
  }
  function Rh(e, t) {
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
  function Nh(e, t) {
    for (
      var n = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes;
      0 < f;
    ) {
      var y = 31 - Vt(f),
        x = 1 << y,
        P = u[y];
      (P === -1
        ? ((x & n) === 0 || (x & l) !== 0) && (u[y] = Rh(x, t))
        : P <= t && (e.expiredLanes |= x),
        (f &= ~x));
    }
  }
  function Uo(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function Ga() {
    var e = ll;
    return ((ll <<= 1), (ll & 4194240) === 0 && (ll = 64), e);
  }
  function Vo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ni(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Vt(t)),
      (e[t] = n));
  }
  function Mh(e, t) {
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
      var u = 31 - Vt(n),
        f = 1 << u;
      ((t[u] = 0), (l[u] = -1), (e[u] = -1), (n &= ~f));
    }
  }
  function Bo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var l = 31 - Vt(n),
        u = 1 << l;
      ((u & t) | (e[l] & t) && (e[l] |= t), (n &= ~u));
    }
  }
  var Se = 0;
  function Za(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Ja,
    Ho,
    ef,
    tf,
    nf,
    bo = !1,
    ul = [],
    yn = null,
    _n = null,
    gn = null,
    ri = new Map(),
    ii = new Map(),
    vn = [],
    Lh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function rf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        yn = null;
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
        ri.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ii.delete(t.pointerId);
    }
  }
  function li(e, t, n, l, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: f,
          targetContainers: [u],
        }),
        t !== null && ((t = vi(t)), t !== null && Ho(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Dh(e, t, n, l, u) {
    switch (t) {
      case "focusin":
        return ((yn = li(yn, e, t, n, l, u)), !0);
      case "dragenter":
        return ((_n = li(_n, e, t, n, l, u)), !0);
      case "mouseover":
        return ((gn = li(gn, e, t, n, l, u)), !0);
      case "pointerover":
        var f = u.pointerId;
        return (ri.set(f, li(ri.get(f) || null, e, t, n, l, u)), !0);
      case "gotpointercapture":
        return ((f = u.pointerId), ii.set(f, li(ii.get(f) || null, e, t, n, l, u)), !0);
    }
    return !1;
  }
  function lf(e) {
    var t = $n(e.target);
    if (t !== null) {
      var n = Wn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ba(n)), t !== null)) {
            ((e.blockedOn = t),
              nf(e.priority, function () {
                ef(n);
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
  function al(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = $o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Lo = l), n.target.dispatchEvent(l), (Lo = null));
      } else return ((t = vi(n)), t !== null && Ho(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function of(e, t, n) {
    al(e) && n.delete(t);
  }
  function zh() {
    ((bo = !1),
      yn !== null && al(yn) && (yn = null),
      _n !== null && al(_n) && (_n = null),
      gn !== null && al(gn) && (gn = null),
      ri.forEach(of),
      ii.forEach(of));
  }
  function oi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      bo || ((bo = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, zh)));
  }
  function si(e) {
    function t(u) {
      return oi(u, e);
    }
    if (0 < ul.length) {
      oi(ul[0], e);
      for (var n = 1; n < ul.length; n++) {
        var l = ul[n];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      yn !== null && oi(yn, e),
        _n !== null && oi(_n, e),
        gn !== null && oi(gn, e),
        ri.forEach(t),
        ii.forEach(t),
        n = 0;
      n < vn.length;
      n++
    )
      ((l = vn[n]), l.blockedOn === e && (l.blockedOn = null));
    for (; 0 < vn.length && ((n = vn[0]), n.blockedOn === null);)
      (lf(n), n.blockedOn === null && vn.shift());
  }
  var mr = N.ReactCurrentBatchConfig,
    fl = !0;
  function Ah(e, t, n, l) {
    var u = Se,
      f = mr.transition;
    mr.transition = null;
    try {
      ((Se = 1), Wo(e, t, n, l));
    } finally {
      ((Se = u), (mr.transition = f));
    }
  }
  function jh(e, t, n, l) {
    var u = Se,
      f = mr.transition;
    mr.transition = null;
    try {
      ((Se = 4), Wo(e, t, n, l));
    } finally {
      ((Se = u), (mr.transition = f));
    }
  }
  function Wo(e, t, n, l) {
    if (fl) {
      var u = $o(e, t, n, l);
      if (u === null) (us(e, t, l, cl, n), rf(e, l));
      else if (Dh(u, e, t, n, l)) l.stopPropagation();
      else if ((rf(e, l), t & 4 && -1 < Lh.indexOf(e))) {
        for (; u !== null;) {
          var f = vi(u);
          if (
            (f !== null && Ja(f), (f = $o(e, t, n, l)), f === null && us(e, t, l, cl, n), f === u)
          )
            break;
          u = f;
        }
        u !== null && l.stopPropagation();
      } else us(e, t, l, null, n);
    }
  }
  var cl = null;
  function $o(e, t, n, l) {
    if (((cl = null), (e = Do(l)), (e = $n(e)), e !== null))
      if (((t = Wn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ba(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((cl = e), null);
  }
  function sf(e) {
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
        switch (Ph()) {
          case Fo:
            return 1;
          case Ka:
            return 4;
          case rl:
          case kh:
            return 16;
          case qa:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var wn = null,
    Yo = null,
    dl = null;
  function uf() {
    if (dl) return dl;
    var e,
      t = Yo,
      n = t.length,
      l,
      u = "value" in wn ? wn.value : wn.textContent,
      f = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++);
    var y = n - e;
    for (l = 1; l <= y && t[n - l] === u[f - l]; l++);
    return (dl = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function pl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function hl() {
    return !0;
  }
  function af() {
    return !1;
  }
  function wt(e) {
    function t(n, l, u, f, y) {
      ((this._reactName = n),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = f),
        (this.target = y),
        (this.currentTarget = null));
      for (var x in e) e.hasOwnProperty(x) && ((n = e[x]), (this[x] = n ? n(f) : f[x]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? hl
          : af),
        (this.isPropagationStopped = af),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = hl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = hl));
        },
        persist: function () {},
        isPersistent: hl,
      }),
      t
    );
  }
  var yr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Qo = wt(yr),
    ui = W({}, yr, { view: 0, detail: 0 }),
    Ih = wt(ui),
    Xo,
    Ko,
    ai,
    ml = W({}, ui, {
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
          : (e !== ai &&
              (ai && e.type === "mousemove"
                ? ((Xo = e.screenX - ai.screenX), (Ko = e.screenY - ai.screenY))
                : (Ko = Xo = 0),
              (ai = e)),
            Xo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ko;
      },
    }),
    ff = wt(ml),
    Fh = W({}, ml, { dataTransfer: 0 }),
    Uh = wt(Fh),
    Vh = W({}, ui, { relatedTarget: 0 }),
    qo = wt(Vh),
    Bh = W({}, yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hh = wt(Bh),
    bh = W({}, yr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Wh = wt(bh),
    $h = W({}, yr, { data: 0 }),
    cf = wt($h),
    Yh = {
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
    Qh = {
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
    Xh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Kh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Xh[e]) ? !!t[e] : !1;
  }
  function Go() {
    return Kh;
  }
  var qh = W({}, ui, {
      key: function (e) {
        if (e.key) {
          var t = Yh[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = pl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Qh[e.keyCode] || "Unidentified"
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
        return e.type === "keypress" ? pl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? pl(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Gh = wt(qh),
    Zh = W({}, ml, {
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
    df = wt(Zh),
    Jh = W({}, ui, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Go,
    }),
    em = wt(Jh),
    tm = W({}, yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nm = wt(tm),
    rm = W({}, ml, {
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
    im = wt(rm),
    lm = [9, 13, 27, 32],
    Zo = d && "CompositionEvent" in window,
    fi = null;
  d && "documentMode" in document && (fi = document.documentMode);
  var om = d && "TextEvent" in window && !fi,
    pf = d && (!Zo || (fi && 8 < fi && 11 >= fi)),
    hf = " ",
    mf = !1;
  function yf(e, t) {
    switch (e) {
      case "keyup":
        return lm.indexOf(t.keyCode) !== -1;
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
  function _f(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var _r = !1;
  function sm(e, t) {
    switch (e) {
      case "compositionend":
        return _f(t);
      case "keypress":
        return t.which !== 32 ? null : ((mf = !0), hf);
      case "textInput":
        return ((e = t.data), e === hf && mf ? null : e);
      default:
        return null;
    }
  }
  function um(e, t) {
    if (_r)
      return e === "compositionend" || (!Zo && yf(e, t))
        ? ((e = uf()), (dl = Yo = wn = null), (_r = !1), e)
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
        return pf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var am = {
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
  function gf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!am[e.type] : t === "textarea";
  }
  function vf(e, t, n, l) {
    (Fa(l),
      (t = wl(t, "onChange")),
      0 < t.length &&
        ((n = new Qo("onChange", "change", null, n, l)), e.push({ event: n, listeners: t })));
  }
  var ci = null,
    di = null;
  function fm(e) {
    If(e, 0);
  }
  function yl(e) {
    var t = Sr(e);
    if (Ta(t)) return e;
  }
  function cm(e, t) {
    if (e === "change") return t;
  }
  var wf = !1;
  if (d) {
    var Jo;
    if (d) {
      var es = "oninput" in document;
      if (!es) {
        var xf = document.createElement("div");
        (xf.setAttribute("oninput", "return;"), (es = typeof xf.oninput == "function"));
      }
      Jo = es;
    } else Jo = !1;
    wf = Jo && (!document.documentMode || 9 < document.documentMode);
  }
  function Sf() {
    ci && (ci.detachEvent("onpropertychange", Pf), (di = ci = null));
  }
  function Pf(e) {
    if (e.propertyName === "value" && yl(di)) {
      var t = [];
      (vf(t, di, e, Do(e)), Ha(fm, t));
    }
  }
  function dm(e, t, n) {
    e === "focusin"
      ? (Sf(), (ci = t), (di = n), ci.attachEvent("onpropertychange", Pf))
      : e === "focusout" && Sf();
  }
  function pm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return yl(di);
  }
  function hm(e, t) {
    if (e === "click") return yl(t);
  }
  function mm(e, t) {
    if (e === "input" || e === "change") return yl(t);
  }
  function ym(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Bt = typeof Object.is == "function" ? Object.is : ym;
  function pi(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!h.call(t, u) || !Bt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function kf(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Ef(e, t) {
    var n = kf(e);
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
      n = kf(n);
    }
  }
  function Tf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Tf(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Cf() {
    for (var e = window, t = Ji(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ji(e.document);
    }
    return t;
  }
  function ts(e) {
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
  function _m(e) {
    var t = Cf(),
      n = e.focusedElem,
      l = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Tf(n.ownerDocument.documentElement, n)) {
      if (l !== null && ts(n)) {
        if (((t = l.start), (e = l.end), e === void 0 && (e = t), "selectionStart" in n))
          ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var u = n.textContent.length,
            f = Math.min(l.start, u);
          ((l = l.end === void 0 ? f : Math.min(l.end, u)),
            !e.extend && f > l && ((u = l), (l = f), (f = u)),
            (u = Ef(n, f)));
          var y = Ef(n, l);
          u &&
            y &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== y.node ||
              e.focusOffset !== y.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            f > l
              ? (e.addRange(t), e.extend(y.node, y.offset))
              : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode);)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var gm = d && "documentMode" in document && 11 >= document.documentMode,
    gr = null,
    ns = null,
    hi = null,
    rs = !1;
  function Of(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    rs ||
      gr == null ||
      gr !== Ji(l) ||
      ((l = gr),
      "selectionStart" in l && ts(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (hi && pi(hi, l)) ||
        ((hi = l),
        (l = wl(ns, "onSelect")),
        0 < l.length &&
          ((t = new Qo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = gr))));
  }
  function _l(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var vr = {
      animationend: _l("Animation", "AnimationEnd"),
      animationiteration: _l("Animation", "AnimationIteration"),
      animationstart: _l("Animation", "AnimationStart"),
      transitionend: _l("Transition", "TransitionEnd"),
    },
    is = {},
    Rf = {};
  d &&
    ((Rf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vr.animationend.animation,
      delete vr.animationiteration.animation,
      delete vr.animationstart.animation),
    "TransitionEvent" in window || delete vr.transitionend.transition);
  function gl(e) {
    if (is[e]) return is[e];
    if (!vr[e]) return e;
    var t = vr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Rf) return (is[e] = t[n]);
    return e;
  }
  var Nf = gl("animationend"),
    Mf = gl("animationiteration"),
    Lf = gl("animationstart"),
    Df = gl("transitionend"),
    zf = new Map(),
    Af =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function xn(e, t) {
    (zf.set(e, t), a(t, [e]));
  }
  for (var ls = 0; ls < Af.length; ls++) {
    var os = Af[ls],
      vm = os.toLowerCase(),
      wm = os[0].toUpperCase() + os.slice(1);
    xn(vm, "on" + wm);
  }
  (xn(Nf, "onAnimationEnd"),
    xn(Mf, "onAnimationIteration"),
    xn(Lf, "onAnimationStart"),
    xn("dblclick", "onDoubleClick"),
    xn("focusin", "onFocus"),
    xn("focusout", "onBlur"),
    xn(Df, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    a(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    a(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    a(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var mi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));
  function jf(e, t, n) {
    var l = e.type || "unknown-event";
    ((e.currentTarget = n), vh(l, t, void 0, e), (e.currentTarget = null));
  }
  function If(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        u = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = l.length - 1; 0 <= y; y--) {
            var x = l[y],
              P = x.instance,
              j = x.currentTarget;
            if (((x = x.listener), P !== f && u.isPropagationStopped())) break e;
            (jf(u, x, j), (f = P));
          }
        else
          for (y = 0; y < l.length; y++) {
            if (
              ((x = l[y]),
              (P = x.instance),
              (j = x.currentTarget),
              (x = x.listener),
              P !== f && u.isPropagationStopped())
            )
              break e;
            (jf(u, x, j), (f = P));
          }
      }
    }
    if (nl) throw ((e = Io), (nl = !1), (Io = null), e);
  }
  function Te(e, t) {
    var n = t[hs];
    n === void 0 && (n = t[hs] = new Set());
    var l = e + "__bubble";
    n.has(l) || (Ff(t, e, 2, !1), n.add(l));
  }
  function ss(e, t, n) {
    var l = 0;
    (t && (l |= 4), Ff(n, e, l, t));
  }
  var vl = "_reactListening" + Math.random().toString(36).slice(2);
  function yi(e) {
    if (!e[vl]) {
      ((e[vl] = !0),
        o.forEach(function (n) {
          n !== "selectionchange" && (xm.has(n) || ss(n, !1, e), ss(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[vl] || ((t[vl] = !0), ss("selectionchange", !1, t));
    }
  }
  function Ff(e, t, n, l) {
    switch (sf(t)) {
      case 1:
        var u = Ah;
        break;
      case 4:
        u = jh;
        break;
      default:
        u = Wo;
    }
    ((n = u.bind(null, t, n, e)),
      (u = void 0),
      !jo || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: u })
          : e.addEventListener(t, n, !0)
        : u !== void 0
          ? e.addEventListener(t, n, { passive: u })
          : e.addEventListener(t, n, !1));
  }
  function us(e, t, n, l, u) {
    var f = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var x = l.stateNode.containerInfo;
          if (x === u || (x.nodeType === 8 && x.parentNode === u)) break;
          if (y === 4)
            for (y = l.return; y !== null;) {
              var P = y.tag;
              if (
                (P === 3 || P === 4) &&
                ((P = y.stateNode.containerInfo),
                P === u || (P.nodeType === 8 && P.parentNode === u))
              )
                return;
              y = y.return;
            }
          for (; x !== null;) {
            if (((y = $n(x)), y === null)) return;
            if (((P = y.tag), P === 5 || P === 6)) {
              l = f = y;
              continue e;
            }
            x = x.parentNode;
          }
        }
        l = l.return;
      }
    Ha(function () {
      var j = f,
        Y = Do(n),
        X = [];
      e: {
        var $ = zf.get(e);
        if ($ !== void 0) {
          var J = Qo,
            re = e;
          switch (e) {
            case "keypress":
              if (pl(n) === 0) break e;
            case "keydown":
            case "keyup":
              J = Gh;
              break;
            case "focusin":
              ((re = "focus"), (J = qo));
              break;
            case "focusout":
              ((re = "blur"), (J = qo));
              break;
            case "beforeblur":
            case "afterblur":
              J = qo;
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
              J = ff;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = Uh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = em;
              break;
            case Nf:
            case Mf:
            case Lf:
              J = Hh;
              break;
            case Df:
              J = nm;
              break;
            case "scroll":
              J = Ih;
              break;
            case "wheel":
              J = im;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = Wh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = df;
          }
          var ie = (t & 4) !== 0,
            Fe = !ie && e === "scroll",
            D = ie ? ($ !== null ? $ + "Capture" : null) : $;
          ie = [];
          for (var E = j, z; E !== null;) {
            z = E;
            var K = z.stateNode;
            if (
              (z.tag === 5 &&
                K !== null &&
                ((z = K), D !== null && ((K = Zr(E, D)), K != null && ie.push(_i(E, K, z)))),
              Fe)
            )
              break;
            E = E.return;
          }
          0 < ie.length && (($ = new J($, re, null, n, Y)), X.push({ event: $, listeners: ie }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            (($ = e === "mouseover" || e === "pointerover"),
            (J = e === "mouseout" || e === "pointerout"),
            $ && n !== Lo && (re = n.relatedTarget || n.fromElement) && ($n(re) || re[rn]))
          )
            break e;
          if (
            (J || $) &&
            (($ =
              Y.window === Y
                ? Y
                : ($ = Y.ownerDocument)
                  ? $.defaultView || $.parentWindow
                  : window),
            J
              ? ((re = n.relatedTarget || n.toElement),
                (J = j),
                (re = re ? $n(re) : null),
                re !== null &&
                  ((Fe = Wn(re)), re !== Fe || (re.tag !== 5 && re.tag !== 6)) &&
                  (re = null))
              : ((J = null), (re = j)),
            J !== re)
          ) {
            if (
              ((ie = ff),
              (K = "onMouseLeave"),
              (D = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ie = df), (K = "onPointerLeave"), (D = "onPointerEnter"), (E = "pointer")),
              (Fe = J == null ? $ : Sr(J)),
              (z = re == null ? $ : Sr(re)),
              ($ = new ie(K, E + "leave", J, n, Y)),
              ($.target = Fe),
              ($.relatedTarget = z),
              (K = null),
              $n(Y) === j &&
                ((ie = new ie(D, E + "enter", re, n, Y)),
                (ie.target = z),
                (ie.relatedTarget = Fe),
                (K = ie)),
              (Fe = K),
              J && re)
            )
              t: {
                for (ie = J, D = re, E = 0, z = ie; z; z = wr(z)) E++;
                for (z = 0, K = D; K; K = wr(K)) z++;
                for (; 0 < E - z;) ((ie = wr(ie)), E--);
                for (; 0 < z - E;) ((D = wr(D)), z--);
                for (; E--;) {
                  if (ie === D || (D !== null && ie === D.alternate)) break t;
                  ((ie = wr(ie)), (D = wr(D)));
                }
                ie = null;
              }
            else ie = null;
            (J !== null && Uf(X, $, J, ie, !1),
              re !== null && Fe !== null && Uf(X, Fe, re, ie, !0));
          }
        }
        e: {
          if (
            (($ = j ? Sr(j) : window),
            (J = $.nodeName && $.nodeName.toLowerCase()),
            J === "select" || (J === "input" && $.type === "file"))
          )
            var le = cm;
          else if (gf($))
            if (wf) le = mm;
            else {
              le = pm;
              var fe = dm;
            }
          else
            (J = $.nodeName) &&
              J.toLowerCase() === "input" &&
              ($.type === "checkbox" || $.type === "radio") &&
              (le = hm);
          if (le && (le = le(e, j))) {
            vf(X, le, n, Y);
            break e;
          }
          (fe && fe(e, $, j),
            e === "focusout" &&
              (fe = $._wrapperState) &&
              fe.controlled &&
              $.type === "number" &&
              Co($, "number", $.value));
        }
        switch (((fe = j ? Sr(j) : window), e)) {
          case "focusin":
            (gf(fe) || fe.contentEditable === "true") && ((gr = fe), (ns = j), (hi = null));
            break;
          case "focusout":
            hi = ns = gr = null;
            break;
          case "mousedown":
            rs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((rs = !1), Of(X, n, Y));
            break;
          case "selectionchange":
            if (gm) break;
          case "keydown":
          case "keyup":
            Of(X, n, Y);
        }
        var ce;
        if (Zo)
          e: {
            switch (e) {
              case "compositionstart":
                var de = "onCompositionStart";
                break e;
              case "compositionend":
                de = "onCompositionEnd";
                break e;
              case "compositionupdate":
                de = "onCompositionUpdate";
                break e;
            }
            de = void 0;
          }
        else
          _r
            ? yf(e, n) && (de = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (de = "onCompositionStart");
        (de &&
          (pf &&
            n.locale !== "ko" &&
            (_r || de !== "onCompositionStart"
              ? de === "onCompositionEnd" && _r && (ce = uf())
              : ((wn = Y), (Yo = "value" in wn ? wn.value : wn.textContent), (_r = !0))),
          (fe = wl(j, de)),
          0 < fe.length &&
            ((de = new cf(de, e, null, n, Y)),
            X.push({ event: de, listeners: fe }),
            ce ? (de.data = ce) : ((ce = _f(n)), ce !== null && (de.data = ce)))),
          (ce = om ? sm(e, n) : um(e, n)) &&
            ((j = wl(j, "onBeforeInput")),
            0 < j.length &&
              ((Y = new cf("onBeforeInput", "beforeinput", null, n, Y)),
              X.push({ event: Y, listeners: j }),
              (Y.data = ce))));
      }
      If(X, t);
    });
  }
  function _i(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function wl(e, t) {
    for (var n = t + "Capture", l = []; e !== null;) {
      var u = e,
        f = u.stateNode;
      (u.tag === 5 &&
        f !== null &&
        ((u = f),
        (f = Zr(e, n)),
        f != null && l.unshift(_i(e, f, u)),
        (f = Zr(e, t)),
        f != null && l.push(_i(e, f, u))),
        (e = e.return));
    }
    return l;
  }
  function wr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Uf(e, t, n, l, u) {
    for (var f = t._reactName, y = []; n !== null && n !== l;) {
      var x = n,
        P = x.alternate,
        j = x.stateNode;
      if (P !== null && P === l) break;
      (x.tag === 5 &&
        j !== null &&
        ((x = j),
        u
          ? ((P = Zr(n, f)), P != null && y.unshift(_i(n, P, x)))
          : u || ((P = Zr(n, f)), P != null && y.push(_i(n, P, x)))),
        (n = n.return));
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var Sm = /\r\n?/g,
    Pm = /\u0000|\uFFFD/g;
  function Vf(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Sm,
        `
`,
      )
      .replace(Pm, "");
  }
  function xl(e, t, n) {
    if (((t = Vf(t)), Vf(e) !== t && n)) throw Error(i(425));
  }
  function Sl() {}
  var as = null,
    fs = null;
  function cs(e, t) {
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
  var ds = typeof setTimeout == "function" ? setTimeout : void 0,
    km = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Bf = typeof Promise == "function" ? Promise : void 0,
    Em =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Bf < "u"
          ? function (e) {
              return Bf.resolve(null).then(e).catch(Tm);
            }
          : ds;
  function Tm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ps(e, t) {
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
  function Sn(e) {
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
  function Hf(e) {
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
    Kt = "__reactFiber$" + xr,
    gi = "__reactProps$" + xr,
    rn = "__reactContainer$" + xr,
    hs = "__reactEvents$" + xr,
    Cm = "__reactListeners$" + xr,
    Om = "__reactHandles$" + xr;
  function $n(e) {
    var t = e[Kt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[rn] || n[Kt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Hf(e); e !== null;) {
            if ((n = e[Kt])) return n;
            e = Hf(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function vi(e) {
    return (
      (e = e[Kt] || e[rn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Sr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Pl(e) {
    return e[gi] || null;
  }
  var ms = [],
    Pr = -1;
  function Pn(e) {
    return { current: e };
  }
  function Ce(e) {
    0 > Pr || ((e.current = ms[Pr]), (ms[Pr] = null), Pr--);
  }
  function Ee(e, t) {
    (Pr++, (ms[Pr] = e.current), (e.current = t));
  }
  var kn = {},
    Je = Pn(kn),
    st = Pn(!1),
    Yn = kn;
  function kr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return kn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
      return l.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      f;
    for (f in n) u[f] = t[f];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function ut(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function kl() {
    (Ce(st), Ce(Je));
  }
  function bf(e, t, n) {
    if (Je.current !== kn) throw Error(i(168));
    (Ee(Je, t), Ee(st, n));
  }
  function Wf(e, t, n) {
    var l = e.stateNode;
    if (((t = t.childContextTypes), typeof l.getChildContext != "function")) return n;
    l = l.getChildContext();
    for (var u in l) if (!(u in t)) throw Error(i(108, xe(e) || "Unknown", u));
    return W({}, n, l);
  }
  function El(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kn),
      (Yn = Je.current),
      Ee(Je, e),
      Ee(st, st.current),
      !0
    );
  }
  function $f(e, t, n) {
    var l = e.stateNode;
    if (!l) throw Error(i(169));
    (n
      ? ((e = Wf(e, t, Yn)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        Ce(st),
        Ce(Je),
        Ee(Je, e))
      : Ce(st),
      Ee(st, n));
  }
  var ln = null,
    Tl = !1,
    ys = !1;
  function Yf(e) {
    ln === null ? (ln = [e]) : ln.push(e);
  }
  function Rm(e) {
    ((Tl = !0), Yf(e));
  }
  function En() {
    if (!ys && ln !== null) {
      ys = !0;
      var e = 0,
        t = Se;
      try {
        var n = ln;
        for (Se = 1; e < n.length; e++) {
          var l = n[e];
          do l = l(!0);
          while (l !== null);
        }
        ((ln = null), (Tl = !1));
      } catch (u) {
        throw (ln !== null && (ln = ln.slice(e + 1)), Qa(Fo, En), u);
      } finally {
        ((Se = t), (ys = !1));
      }
    }
    return null;
  }
  var Er = [],
    Tr = 0,
    Cl = null,
    Ol = 0,
    Mt = [],
    Lt = 0,
    Qn = null,
    on = 1,
    sn = "";
  function Xn(e, t) {
    ((Er[Tr++] = Ol), (Er[Tr++] = Cl), (Cl = e), (Ol = t));
  }
  function Qf(e, t, n) {
    ((Mt[Lt++] = on), (Mt[Lt++] = sn), (Mt[Lt++] = Qn), (Qn = e));
    var l = on;
    e = sn;
    var u = 32 - Vt(l) - 1;
    ((l &= ~(1 << u)), (n += 1));
    var f = 32 - Vt(t) + u;
    if (30 < f) {
      var y = u - (u % 5);
      ((f = (l & ((1 << y) - 1)).toString(32)),
        (l >>= y),
        (u -= y),
        (on = (1 << (32 - Vt(t) + u)) | (n << u) | l),
        (sn = f + e));
    } else ((on = (1 << f) | (n << u) | l), (sn = e));
  }
  function _s(e) {
    e.return !== null && (Xn(e, 1), Qf(e, 1, 0));
  }
  function gs(e) {
    for (; e === Cl;) ((Cl = Er[--Tr]), (Er[Tr] = null), (Ol = Er[--Tr]), (Er[Tr] = null));
    for (; e === Qn;)
      ((Qn = Mt[--Lt]),
        (Mt[Lt] = null),
        (sn = Mt[--Lt]),
        (Mt[Lt] = null),
        (on = Mt[--Lt]),
        (Mt[Lt] = null));
  }
  var xt = null,
    St = null,
    Oe = !1,
    Ht = null;
  function Xf(e, t) {
    var n = jt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Kf(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (xt = e), (St = Sn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (xt = e), (St = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Qn !== null ? { id: on, overflow: sn } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = jt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (xt = e),
              (St = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function vs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ws(e) {
    if (Oe) {
      var t = St;
      if (t) {
        var n = t;
        if (!Kf(e, t)) {
          if (vs(e)) throw Error(i(418));
          t = Sn(n.nextSibling);
          var l = xt;
          t && Kf(e, t) ? Xf(l, n) : ((e.flags = (e.flags & -4097) | 2), (Oe = !1), (xt = e));
        }
      } else {
        if (vs(e)) throw Error(i(418));
        ((e.flags = (e.flags & -4097) | 2), (Oe = !1), (xt = e));
      }
    }
  }
  function qf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    xt = e;
  }
  function Rl(e) {
    if (e !== xt) return !1;
    if (!Oe) return (qf(e), (Oe = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !cs(e.type, e.memoizedProps))),
      t && (t = St))
    ) {
      if (vs(e)) throw (Gf(), Error(i(418)));
      for (; t;) (Xf(e, t), (t = Sn(t.nextSibling)));
    }
    if ((qf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                St = Sn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        St = null;
      }
    } else St = xt ? Sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Gf() {
    for (var e = St; e;) e = Sn(e.nextSibling);
  }
  function Cr() {
    ((St = xt = null), (Oe = !1));
  }
  function xs(e) {
    Ht === null ? (Ht = [e]) : Ht.push(e);
  }
  var Nm = N.ReactCurrentBatchConfig;
  function wi(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(i(309));
          var l = n.stateNode;
        }
        if (!l) throw Error(i(147, e));
        var u = l,
          f = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === f
          ? t.ref
          : ((t = function (y) {
              var x = u.refs;
              y === null ? delete x[f] : (x[f] = y);
            }),
            (t._stringRef = f),
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
  function Zf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Jf(e) {
    function t(D, E) {
      if (e) {
        var z = D.deletions;
        z === null ? ((D.deletions = [E]), (D.flags |= 16)) : z.push(E);
      }
    }
    function n(D, E) {
      if (!e) return null;
      for (; E !== null;) (t(D, E), (E = E.sibling));
      return null;
    }
    function l(D, E) {
      for (D = new Map(); E !== null;)
        (E.key !== null ? D.set(E.key, E) : D.set(E.index, E), (E = E.sibling));
      return D;
    }
    function u(D, E) {
      return ((D = Dn(D, E)), (D.index = 0), (D.sibling = null), D);
    }
    function f(D, E, z) {
      return (
        (D.index = z),
        e
          ? ((z = D.alternate),
            z !== null ? ((z = z.index), z < E ? ((D.flags |= 2), E) : z) : ((D.flags |= 2), E))
          : ((D.flags |= 1048576), E)
      );
    }
    function y(D) {
      return (e && D.alternate === null && (D.flags |= 2), D);
    }
    function x(D, E, z, K) {
      return E === null || E.tag !== 6
        ? ((E = du(z, D.mode, K)), (E.return = D), E)
        : ((E = u(E, z)), (E.return = D), E);
    }
    function P(D, E, z, K) {
      var le = z.type;
      return le === I
        ? Y(D, E, z.props.children, K, z.key)
        : E !== null &&
            (E.elementType === le ||
              (typeof le == "object" && le !== null && le.$$typeof === ae && Zf(le) === E.type))
          ? ((K = u(E, z.props)), (K.ref = wi(D, E, z)), (K.return = D), K)
          : ((K = eo(z.type, z.key, z.props, null, D.mode, K)),
            (K.ref = wi(D, E, z)),
            (K.return = D),
            K);
    }
    function j(D, E, z, K) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== z.containerInfo ||
        E.stateNode.implementation !== z.implementation
        ? ((E = pu(z, D.mode, K)), (E.return = D), E)
        : ((E = u(E, z.children || [])), (E.return = D), E);
    }
    function Y(D, E, z, K, le) {
      return E === null || E.tag !== 7
        ? ((E = nr(z, D.mode, K, le)), (E.return = D), E)
        : ((E = u(E, z)), (E.return = D), E);
    }
    function X(D, E, z) {
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return ((E = du("" + E, D.mode, z)), (E.return = D), E);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case T:
            return (
              (z = eo(E.type, E.key, E.props, null, D.mode, z)),
              (z.ref = wi(D, null, E)),
              (z.return = D),
              z
            );
          case U:
            return ((E = pu(E, D.mode, z)), (E.return = D), E);
          case ae:
            var K = E._init;
            return X(D, K(E._payload), z);
        }
        if (Kr(E) || H(E)) return ((E = nr(E, D.mode, z, null)), (E.return = D), E);
        Nl(D, E);
      }
      return null;
    }
    function $(D, E, z, K) {
      var le = E !== null ? E.key : null;
      if ((typeof z == "string" && z !== "") || typeof z == "number")
        return le !== null ? null : x(D, E, "" + z, K);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case T:
            return z.key === le ? P(D, E, z, K) : null;
          case U:
            return z.key === le ? j(D, E, z, K) : null;
          case ae:
            return ((le = z._init), $(D, E, le(z._payload), K));
        }
        if (Kr(z) || H(z)) return le !== null ? null : Y(D, E, z, K, null);
        Nl(D, z);
      }
      return null;
    }
    function J(D, E, z, K, le) {
      if ((typeof K == "string" && K !== "") || typeof K == "number")
        return ((D = D.get(z) || null), x(E, D, "" + K, le));
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case T:
            return ((D = D.get(K.key === null ? z : K.key) || null), P(E, D, K, le));
          case U:
            return ((D = D.get(K.key === null ? z : K.key) || null), j(E, D, K, le));
          case ae:
            var fe = K._init;
            return J(D, E, z, fe(K._payload), le);
        }
        if (Kr(K) || H(K)) return ((D = D.get(z) || null), Y(E, D, K, le, null));
        Nl(E, K);
      }
      return null;
    }
    function re(D, E, z, K) {
      for (
        var le = null, fe = null, ce = E, de = (E = 0), Ye = null;
        ce !== null && de < z.length;
        de++
      ) {
        ce.index > de ? ((Ye = ce), (ce = null)) : (Ye = ce.sibling);
        var we = $(D, ce, z[de], K);
        if (we === null) {
          ce === null && (ce = Ye);
          break;
        }
        (e && ce && we.alternate === null && t(D, ce),
          (E = f(we, E, de)),
          fe === null ? (le = we) : (fe.sibling = we),
          (fe = we),
          (ce = Ye));
      }
      if (de === z.length) return (n(D, ce), Oe && Xn(D, de), le);
      if (ce === null) {
        for (; de < z.length; de++)
          ((ce = X(D, z[de], K)),
            ce !== null &&
              ((E = f(ce, E, de)), fe === null ? (le = ce) : (fe.sibling = ce), (fe = ce)));
        return (Oe && Xn(D, de), le);
      }
      for (ce = l(D, ce); de < z.length; de++)
        ((Ye = J(ce, D, de, z[de], K)),
          Ye !== null &&
            (e && Ye.alternate !== null && ce.delete(Ye.key === null ? de : Ye.key),
            (E = f(Ye, E, de)),
            fe === null ? (le = Ye) : (fe.sibling = Ye),
            (fe = Ye)));
      return (
        e &&
          ce.forEach(function (zn) {
            return t(D, zn);
          }),
        Oe && Xn(D, de),
        le
      );
    }
    function ie(D, E, z, K) {
      var le = H(z);
      if (typeof le != "function") throw Error(i(150));
      if (((z = le.call(z)), z == null)) throw Error(i(151));
      for (
        var fe = (le = null), ce = E, de = (E = 0), Ye = null, we = z.next();
        ce !== null && !we.done;
        de++, we = z.next()
      ) {
        ce.index > de ? ((Ye = ce), (ce = null)) : (Ye = ce.sibling);
        var zn = $(D, ce, we.value, K);
        if (zn === null) {
          ce === null && (ce = Ye);
          break;
        }
        (e && ce && zn.alternate === null && t(D, ce),
          (E = f(zn, E, de)),
          fe === null ? (le = zn) : (fe.sibling = zn),
          (fe = zn),
          (ce = Ye));
      }
      if (we.done) return (n(D, ce), Oe && Xn(D, de), le);
      if (ce === null) {
        for (; !we.done; de++, we = z.next())
          ((we = X(D, we.value, K)),
            we !== null &&
              ((E = f(we, E, de)), fe === null ? (le = we) : (fe.sibling = we), (fe = we)));
        return (Oe && Xn(D, de), le);
      }
      for (ce = l(D, ce); !we.done; de++, we = z.next())
        ((we = J(ce, D, de, we.value, K)),
          we !== null &&
            (e && we.alternate !== null && ce.delete(we.key === null ? de : we.key),
            (E = f(we, E, de)),
            fe === null ? (le = we) : (fe.sibling = we),
            (fe = we)));
      return (
        e &&
          ce.forEach(function (a0) {
            return t(D, a0);
          }),
        Oe && Xn(D, de),
        le
      );
    }
    function Fe(D, E, z, K) {
      if (
        (typeof z == "object" &&
          z !== null &&
          z.type === I &&
          z.key === null &&
          (z = z.props.children),
        typeof z == "object" && z !== null)
      ) {
        switch (z.$$typeof) {
          case T:
            e: {
              for (var le = z.key, fe = E; fe !== null;) {
                if (fe.key === le) {
                  if (((le = z.type), le === I)) {
                    if (fe.tag === 7) {
                      (n(D, fe.sibling), (E = u(fe, z.props.children)), (E.return = D), (D = E));
                      break e;
                    }
                  } else if (
                    fe.elementType === le ||
                    (typeof le == "object" &&
                      le !== null &&
                      le.$$typeof === ae &&
                      Zf(le) === fe.type)
                  ) {
                    (n(D, fe.sibling),
                      (E = u(fe, z.props)),
                      (E.ref = wi(D, fe, z)),
                      (E.return = D),
                      (D = E));
                    break e;
                  }
                  n(D, fe);
                  break;
                } else t(D, fe);
                fe = fe.sibling;
              }
              z.type === I
                ? ((E = nr(z.props.children, D.mode, K, z.key)), (E.return = D), (D = E))
                : ((K = eo(z.type, z.key, z.props, null, D.mode, K)),
                  (K.ref = wi(D, E, z)),
                  (K.return = D),
                  (D = K));
            }
            return y(D);
          case U:
            e: {
              for (fe = z.key; E !== null;) {
                if (E.key === fe)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === z.containerInfo &&
                    E.stateNode.implementation === z.implementation
                  ) {
                    (n(D, E.sibling), (E = u(E, z.children || [])), (E.return = D), (D = E));
                    break e;
                  } else {
                    n(D, E);
                    break;
                  }
                else t(D, E);
                E = E.sibling;
              }
              ((E = pu(z, D.mode, K)), (E.return = D), (D = E));
            }
            return y(D);
          case ae:
            return ((fe = z._init), Fe(D, E, fe(z._payload), K));
        }
        if (Kr(z)) return re(D, E, z, K);
        if (H(z)) return ie(D, E, z, K);
        Nl(D, z);
      }
      return (typeof z == "string" && z !== "") || typeof z == "number"
        ? ((z = "" + z),
          E !== null && E.tag === 6
            ? (n(D, E.sibling), (E = u(E, z)), (E.return = D), (D = E))
            : (n(D, E), (E = du(z, D.mode, K)), (E.return = D), (D = E)),
          y(D))
        : n(D, E);
    }
    return Fe;
  }
  var Or = Jf(!0),
    ec = Jf(!1),
    Ml = Pn(null),
    Ll = null,
    Rr = null,
    Ss = null;
  function Ps() {
    Ss = Rr = Ll = null;
  }
  function ks(e) {
    var t = Ml.current;
    (Ce(Ml), (e._currentValue = t));
  }
  function Es(e, t, n) {
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
    ((Ll = e),
      (Ss = Rr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (at = !0), (e.firstContext = null)));
  }
  function Dt(e) {
    var t = e._currentValue;
    if (Ss !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Rr === null)) {
        if (Ll === null) throw Error(i(308));
        ((Rr = e), (Ll.dependencies = { lanes: 0, firstContext: e }));
      } else Rr = Rr.next = e;
    return t;
  }
  var Kn = null;
  function Ts(e) {
    Kn === null ? (Kn = [e]) : Kn.push(e);
  }
  function tc(e, t, n, l) {
    var u = t.interleaved;
    return (
      u === null ? ((n.next = n), Ts(t)) : ((n.next = u.next), (u.next = n)),
      (t.interleaved = n),
      un(e, l)
    );
  }
  function un(e, t) {
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
  var Tn = !1;
  function Cs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function nc(e, t) {
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
  function an(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Cn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (_e & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        un(e, n)
      );
    }
    return (
      (u = l.interleaved),
      u === null ? ((t.next = t), Ts(l)) : ((t.next = u.next), (u.next = t)),
      (l.interleaved = t),
      un(e, n)
    );
  }
  function Dl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Bo(e, n));
    }
  }
  function rc(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var u = null,
        f = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var y = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (f === null ? (u = f = y) : (f = f.next = y), (n = n.next));
        } while (n !== null);
        f === null ? (u = f = t) : (f = f.next = t);
      } else u = f = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
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
  function zl(e, t, n, l) {
    var u = e.updateQueue;
    Tn = !1;
    var f = u.firstBaseUpdate,
      y = u.lastBaseUpdate,
      x = u.shared.pending;
    if (x !== null) {
      u.shared.pending = null;
      var P = x,
        j = P.next;
      ((P.next = null), y === null ? (f = j) : (y.next = j), (y = P));
      var Y = e.alternate;
      Y !== null &&
        ((Y = Y.updateQueue),
        (x = Y.lastBaseUpdate),
        x !== y && (x === null ? (Y.firstBaseUpdate = j) : (x.next = j), (Y.lastBaseUpdate = P)));
    }
    if (f !== null) {
      var X = u.baseState;
      ((y = 0), (Y = j = P = null), (x = f));
      do {
        var $ = x.lane,
          J = x.eventTime;
        if ((l & $) === $) {
          Y !== null &&
            (Y = Y.next =
              {
                eventTime: J,
                lane: 0,
                tag: x.tag,
                payload: x.payload,
                callback: x.callback,
                next: null,
              });
          e: {
            var re = e,
              ie = x;
            switch ((($ = t), (J = n), ie.tag)) {
              case 1:
                if (((re = ie.payload), typeof re == "function")) {
                  X = re.call(J, X, $);
                  break e;
                }
                X = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = ie.payload),
                  ($ = typeof re == "function" ? re.call(J, X, $) : re),
                  $ == null)
                )
                  break e;
                X = W({}, X, $);
                break e;
              case 2:
                Tn = !0;
            }
          }
          x.callback !== null &&
            x.lane !== 0 &&
            ((e.flags |= 64), ($ = u.effects), $ === null ? (u.effects = [x]) : $.push(x));
        } else
          ((J = {
            eventTime: J,
            lane: $,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            Y === null ? ((j = Y = J), (P = X)) : (Y = Y.next = J),
            (y |= $));
        if (((x = x.next), x === null)) {
          if (((x = u.shared.pending), x === null)) break;
          (($ = x),
            (x = $.next),
            ($.next = null),
            (u.lastBaseUpdate = $),
            (u.shared.pending = null));
        }
      } while (!0);
      if (
        (Y === null && (P = X),
        (u.baseState = P),
        (u.firstBaseUpdate = j),
        (u.lastBaseUpdate = Y),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do ((y |= u.lane), (u = u.next));
        while (u !== t);
      } else f === null && (u.shared.lanes = 0);
      ((Zn |= y), (e.lanes = y), (e.memoizedState = X));
    }
  }
  function ic(e, t, n) {
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
    qt = Pn(xi),
    Si = Pn(xi),
    Pi = Pn(xi);
  function qn(e) {
    if (e === xi) throw Error(i(174));
    return e;
  }
  function Os(e, t) {
    switch ((Ee(Pi, t), Ee(Si, e), Ee(qt, xi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ro(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ro(t, e)));
    }
    (Ce(qt), Ee(qt, t));
  }
  function Mr() {
    (Ce(qt), Ce(Si), Ce(Pi));
  }
  function lc(e) {
    qn(Pi.current);
    var t = qn(qt.current),
      n = Ro(t, e.type);
    t !== n && (Ee(Si, e), Ee(qt, n));
  }
  function Rs(e) {
    Si.current === e && (Ce(qt), Ce(Si));
  }
  var Ne = Pn(0);
  function Al(e) {
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
  var Ns = [];
  function Ms() {
    for (var e = 0; e < Ns.length; e++) Ns[e]._workInProgressVersionPrimary = null;
    Ns.length = 0;
  }
  var jl = N.ReactCurrentDispatcher,
    Ls = N.ReactCurrentBatchConfig,
    Gn = 0,
    Me = null,
    He = null,
    We = null,
    Il = !1,
    ki = !1,
    Ei = 0,
    Mm = 0;
  function et() {
    throw Error(i(321));
  }
  function Ds(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function zs(e, t, n, l, u, f) {
    if (
      ((Gn = f),
      (Me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (jl.current = e === null || e.memoizedState === null ? Am : jm),
      (e = n(l, u)),
      ki)
    ) {
      f = 0;
      do {
        if (((ki = !1), (Ei = 0), 25 <= f)) throw Error(i(301));
        ((f += 1), (We = He = null), (t.updateQueue = null), (jl.current = Im), (e = n(l, u)));
      } while (ki);
    }
    if (
      ((jl.current = Vl),
      (t = He !== null && He.next !== null),
      (Gn = 0),
      (We = He = Me = null),
      (Il = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function As() {
    var e = Ei !== 0;
    return ((Ei = 0), e);
  }
  function Gt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (We === null ? (Me.memoizedState = We = e) : (We = We.next = e), We);
  }
  function zt() {
    if (He === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = We === null ? Me.memoizedState : We.next;
    if (t !== null) ((We = t), (He = e));
    else {
      if (e === null) throw Error(i(310));
      ((He = e),
        (e = {
          memoizedState: He.memoizedState,
          baseState: He.baseState,
          baseQueue: He.baseQueue,
          queue: He.queue,
          next: null,
        }),
        We === null ? (Me.memoizedState = We = e) : (We = We.next = e));
    }
    return We;
  }
  function Ti(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function js(e) {
    var t = zt(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var l = He,
      u = l.baseQueue,
      f = n.pending;
    if (f !== null) {
      if (u !== null) {
        var y = u.next;
        ((u.next = f.next), (f.next = y));
      }
      ((l.baseQueue = u = f), (n.pending = null));
    }
    if (u !== null) {
      ((f = u.next), (l = l.baseState));
      var x = (y = null),
        P = null,
        j = f;
      do {
        var Y = j.lane;
        if ((Gn & Y) === Y)
          (P !== null &&
            (P = P.next =
              {
                lane: 0,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null,
              }),
            (l = j.hasEagerState ? j.eagerState : e(l, j.action)));
        else {
          var X = {
            lane: Y,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          };
          (P === null ? ((x = P = X), (y = l)) : (P = P.next = X), (Me.lanes |= Y), (Zn |= Y));
        }
        j = j.next;
      } while (j !== null && j !== f);
      (P === null ? (y = l) : (P.next = x),
        Bt(l, t.memoizedState) || (at = !0),
        (t.memoizedState = l),
        (t.baseState = y),
        (t.baseQueue = P),
        (n.lastRenderedState = l));
    }
    if (((e = n.interleaved), e !== null)) {
      u = e;
      do ((f = u.lane), (Me.lanes |= f), (Zn |= f), (u = u.next));
      while (u !== e);
    } else u === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Is(e) {
    var t = zt(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      u = n.pending,
      f = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var y = (u = u.next);
      do ((f = e(f, y.action)), (y = y.next));
      while (y !== u);
      (Bt(f, t.memoizedState) || (at = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (n.lastRenderedState = f));
    }
    return [f, l];
  }
  function oc() {}
  function sc(e, t) {
    var n = Me,
      l = zt(),
      u = t(),
      f = !Bt(l.memoizedState, u);
    if (
      (f && ((l.memoizedState = u), (at = !0)),
      (l = l.queue),
      Fs(fc.bind(null, n, l, e), [e]),
      l.getSnapshot !== t || f || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Ci(9, ac.bind(null, n, l, u, t), void 0, null), $e === null))
        throw Error(i(349));
      (Gn & 30) !== 0 || uc(n, t, u);
    }
    return u;
  }
  function uc(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Me.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ac(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), cc(t) && dc(e));
  }
  function fc(e, t, n) {
    return n(function () {
      cc(t) && dc(e);
    });
  }
  function cc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Bt(e, n);
    } catch {
      return !0;
    }
  }
  function dc(e) {
    var t = un(e, 1);
    t !== null && Yt(t, e, 1, -1);
  }
  function pc(e) {
    var t = Gt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ti,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = zm.bind(null, Me, e)),
      [t.memoizedState, e]
    );
  }
  function Ci(e, t, n, l) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: l, next: null }),
      (t = Me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Me.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e))),
      e
    );
  }
  function hc() {
    return zt().memoizedState;
  }
  function Fl(e, t, n, l) {
    var u = Gt();
    ((Me.flags |= e), (u.memoizedState = Ci(1 | t, n, void 0, l === void 0 ? null : l)));
  }
  function Ul(e, t, n, l) {
    var u = zt();
    l = l === void 0 ? null : l;
    var f = void 0;
    if (He !== null) {
      var y = He.memoizedState;
      if (((f = y.destroy), l !== null && Ds(l, y.deps))) {
        u.memoizedState = Ci(t, n, f, l);
        return;
      }
    }
    ((Me.flags |= e), (u.memoizedState = Ci(1 | t, n, f, l)));
  }
  function mc(e, t) {
    return Fl(8390656, 8, e, t);
  }
  function Fs(e, t) {
    return Ul(2048, 8, e, t);
  }
  function yc(e, t) {
    return Ul(4, 2, e, t);
  }
  function _c(e, t) {
    return Ul(4, 4, e, t);
  }
  function gc(e, t) {
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
  function vc(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), Ul(4, 4, gc.bind(null, t, e), n));
  }
  function Us() {}
  function wc(e, t) {
    var n = zt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return l !== null && t !== null && Ds(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function xc(e, t) {
    var n = zt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return l !== null && t !== null && Ds(t, l[1])
      ? l[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Sc(e, t, n) {
    return (Gn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = n))
      : (Bt(n, t) || ((n = Ga()), (Me.lanes |= n), (Zn |= n), (e.baseState = !0)), t);
  }
  function Lm(e, t) {
    var n = Se;
    ((Se = n !== 0 && 4 > n ? n : 4), e(!0));
    var l = Ls.transition;
    Ls.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Se = n), (Ls.transition = l));
    }
  }
  function Pc() {
    return zt().memoizedState;
  }
  function Dm(e, t, n) {
    var l = Mn(e);
    if (((n = { lane: l, action: n, hasEagerState: !1, eagerState: null, next: null }), kc(e)))
      Ec(t, n);
    else if (((n = tc(e, t, n, l)), n !== null)) {
      var u = ot();
      (Yt(n, e, l, u), Tc(n, t, l));
    }
  }
  function zm(e, t, n) {
    var l = Mn(e),
      u = { lane: l, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (kc(e)) Ec(t, u);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var y = t.lastRenderedState,
            x = f(y, n);
          if (((u.hasEagerState = !0), (u.eagerState = x), Bt(x, y))) {
            var P = t.interleaved;
            (P === null ? ((u.next = u), Ts(t)) : ((u.next = P.next), (P.next = u)),
              (t.interleaved = u));
            return;
          }
        } catch {
        } finally {
        }
      ((n = tc(e, t, u, l)), n !== null && ((u = ot()), Yt(n, e, l, u), Tc(n, t, l)));
    }
  }
  function kc(e) {
    var t = e.alternate;
    return e === Me || (t !== null && t === Me);
  }
  function Ec(e, t) {
    ki = Il = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Tc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Bo(e, n));
    }
  }
  var Vl = {
      readContext: Dt,
      useCallback: et,
      useContext: et,
      useEffect: et,
      useImperativeHandle: et,
      useInsertionEffect: et,
      useLayoutEffect: et,
      useMemo: et,
      useReducer: et,
      useRef: et,
      useState: et,
      useDebugValue: et,
      useDeferredValue: et,
      useTransition: et,
      useMutableSource: et,
      useSyncExternalStore: et,
      useId: et,
      unstable_isNewReconciler: !1,
    },
    Am = {
      readContext: Dt,
      useCallback: function (e, t) {
        return ((Gt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Dt,
      useEffect: mc,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), Fl(4194308, 4, gc.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Fl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Fl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Gt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var l = Gt();
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
          (e = e.dispatch = Dm.bind(null, Me, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Gt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: pc,
      useDebugValue: Us,
      useDeferredValue: function (e) {
        return (Gt().memoizedState = e);
      },
      useTransition: function () {
        var e = pc(!1),
          t = e[0];
        return ((e = Lm.bind(null, e[1])), (Gt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var l = Me,
          u = Gt();
        if (Oe) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = t()), $e === null)) throw Error(i(349));
          (Gn & 30) !== 0 || uc(l, t, n);
        }
        u.memoizedState = n;
        var f = { value: n, getSnapshot: t };
        return (
          (u.queue = f),
          mc(fc.bind(null, l, f, e), [e]),
          (l.flags |= 2048),
          Ci(9, ac.bind(null, l, f, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Gt(),
          t = $e.identifierPrefix;
        if (Oe) {
          var n = sn,
            l = on;
          ((n = (l & ~(1 << (32 - Vt(l) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Ei++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Mm++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    jm = {
      readContext: Dt,
      useCallback: wc,
      useContext: Dt,
      useEffect: Fs,
      useImperativeHandle: vc,
      useInsertionEffect: yc,
      useLayoutEffect: _c,
      useMemo: xc,
      useReducer: js,
      useRef: hc,
      useState: function () {
        return js(Ti);
      },
      useDebugValue: Us,
      useDeferredValue: function (e) {
        var t = zt();
        return Sc(t, He.memoizedState, e);
      },
      useTransition: function () {
        var e = js(Ti)[0],
          t = zt().memoizedState;
        return [e, t];
      },
      useMutableSource: oc,
      useSyncExternalStore: sc,
      useId: Pc,
      unstable_isNewReconciler: !1,
    },
    Im = {
      readContext: Dt,
      useCallback: wc,
      useContext: Dt,
      useEffect: Fs,
      useImperativeHandle: vc,
      useInsertionEffect: yc,
      useLayoutEffect: _c,
      useMemo: xc,
      useReducer: Is,
      useRef: hc,
      useState: function () {
        return Is(Ti);
      },
      useDebugValue: Us,
      useDeferredValue: function (e) {
        var t = zt();
        return He === null ? (t.memoizedState = e) : Sc(t, He.memoizedState, e);
      },
      useTransition: function () {
        var e = Is(Ti)[0],
          t = zt().memoizedState;
        return [e, t];
      },
      useMutableSource: oc,
      useSyncExternalStore: sc,
      useId: Pc,
      unstable_isNewReconciler: !1,
    };
  function bt(e, t) {
    if (e && e.defaultProps) {
      ((t = W({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Vs(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : W({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Bl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Wn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = ot(),
        u = Mn(e),
        f = an(l, u);
      ((f.payload = t),
        n != null && (f.callback = n),
        (t = Cn(e, f, u)),
        t !== null && (Yt(t, e, u, l), Dl(t, e, u)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = ot(),
        u = Mn(e),
        f = an(l, u);
      ((f.tag = 1),
        (f.payload = t),
        n != null && (f.callback = n),
        (t = Cn(e, f, u)),
        t !== null && (Yt(t, e, u, l), Dl(t, e, u)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ot(),
        l = Mn(e),
        u = an(n, l);
      ((u.tag = 2),
        t != null && (u.callback = t),
        (t = Cn(e, u, l)),
        t !== null && (Yt(t, e, l, n), Dl(t, e, l)));
    },
  };
  function Cc(e, t, n, l, u, f, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, f, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !pi(n, l) || !pi(u, f)
          : !0
    );
  }
  function Oc(e, t, n) {
    var l = !1,
      u = kn,
      f = t.contextType;
    return (
      typeof f == "object" && f !== null
        ? (f = Dt(f))
        : ((u = ut(t) ? Yn : Je.current),
          (l = t.contextTypes),
          (f = (l = l != null) ? kr(e, u) : kn)),
      (t = new t(n, f)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Bl),
      (e.stateNode = t),
      (t._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      t
    );
  }
  function Rc(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Bl.enqueueReplaceState(t, t.state, null));
  }
  function Bs(e, t, n, l) {
    var u = e.stateNode;
    ((u.props = n), (u.state = e.memoizedState), (u.refs = {}), Cs(e));
    var f = t.contextType;
    (typeof f == "object" && f !== null
      ? (u.context = Dt(f))
      : ((f = ut(t) ? Yn : Je.current), (u.context = kr(e, f))),
      (u.state = e.memoizedState),
      (f = t.getDerivedStateFromProps),
      typeof f == "function" && (Vs(e, t, f, n), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
        t !== u.state && Bl.enqueueReplaceState(u, u.state, null),
        zl(e, n, u, l),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Lr(e, t) {
    try {
      var n = "",
        l = t;
      do ((n += pe(l)), (l = l.return));
      while (l);
      var u = n;
    } catch (f) {
      u =
        `
Error generating stack: ` +
        f.message +
        `
` +
        f.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function Hs(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function bs(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Fm = typeof WeakMap == "function" ? WeakMap : Map;
  function Nc(e, t, n) {
    ((n = an(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var l = t.value;
    return (
      (n.callback = function () {
        (Xl || ((Xl = !0), (iu = l)), bs(e, t));
      }),
      n
    );
  }
  function Mc(e, t, n) {
    ((n = an(-1, n)), (n.tag = 3));
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = t.value;
      ((n.payload = function () {
        return l(u);
      }),
        (n.callback = function () {
          bs(e, t);
        }));
    }
    var f = e.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == "function" &&
        (n.callback = function () {
          (bs(e, t),
            typeof l != "function" && (Rn === null ? (Rn = new Set([this])) : Rn.add(this)));
          var y = t.stack;
          this.componentDidCatch(t.value, { componentStack: y !== null ? y : "" });
        }),
      n
    );
  }
  function Lc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Fm();
      var u = new Set();
      l.set(t, u);
    } else ((u = l.get(t)), u === void 0 && ((u = new Set()), l.set(t, u)));
    u.has(n) || (u.add(n), (e = Zm.bind(null, e, t, n)), t.then(e, e));
  }
  function Dc(e) {
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
  function zc(e, t, n, l, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = an(-1, 1)), (t.tag = 2), Cn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var Um = N.ReactCurrentOwner,
    at = !1;
  function lt(e, t, n, l) {
    t.child = e === null ? ec(t, null, n, l) : Or(t, e.child, n, l);
  }
  function Ac(e, t, n, l, u) {
    n = n.render;
    var f = t.ref;
    return (
      Nr(t, u),
      (l = zs(e, t, n, l, f, u)),
      (n = As()),
      e !== null && !at
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), fn(e, t, u))
        : (Oe && n && _s(t), (t.flags |= 1), lt(e, t, l, u), t.child)
    );
  }
  function jc(e, t, n, l, u) {
    if (e === null) {
      var f = n.type;
      return typeof f == "function" &&
        !cu(f) &&
        f.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = f), Ic(e, t, f, l, u))
        : ((e = eo(n.type, null, l, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), (e.lanes & u) === 0)) {
      var y = f.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : pi), n(y, l) && e.ref === t.ref))
        return fn(e, t, u);
    }
    return ((t.flags |= 1), (e = Dn(f, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ic(e, t, n, l, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (pi(f, l) && e.ref === t.ref)
        if (((at = !1), (t.pendingProps = l = f), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (at = !0);
        else return ((t.lanes = e.lanes), fn(e, t, u));
    }
    return Ws(e, t, n, l, u);
  }
  function Fc(e, t, n) {
    var l = t.pendingProps,
      u = l.children,
      f = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Ee(zr, Pt),
          (Pt |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = f !== null ? f.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Ee(zr, Pt),
            (Pt |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (l = f !== null ? f.baseLanes : n),
          Ee(zr, Pt),
          (Pt |= l));
      }
    else
      (f !== null ? ((l = f.baseLanes | n), (t.memoizedState = null)) : (l = n),
        Ee(zr, Pt),
        (Pt |= l));
    return (lt(e, t, u, n), t.child);
  }
  function Uc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ws(e, t, n, l, u) {
    var f = ut(n) ? Yn : Je.current;
    return (
      (f = kr(t, f)),
      Nr(t, u),
      (n = zs(e, t, n, l, f, u)),
      (l = As()),
      e !== null && !at
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), fn(e, t, u))
        : (Oe && l && _s(t), (t.flags |= 1), lt(e, t, n, u), t.child)
    );
  }
  function Vc(e, t, n, l, u) {
    if (ut(n)) {
      var f = !0;
      El(t);
    } else f = !1;
    if ((Nr(t, u), t.stateNode === null)) (bl(e, t), Oc(t, n, l), Bs(t, n, l, u), (l = !0));
    else if (e === null) {
      var y = t.stateNode,
        x = t.memoizedProps;
      y.props = x;
      var P = y.context,
        j = n.contextType;
      typeof j == "object" && j !== null
        ? (j = Dt(j))
        : ((j = ut(n) ? Yn : Je.current), (j = kr(t, j)));
      var Y = n.getDerivedStateFromProps,
        X = typeof Y == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      (X ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((x !== l || P !== j) && Rc(t, y, l, j)),
        (Tn = !1));
      var $ = t.memoizedState;
      ((y.state = $),
        zl(t, l, y, u),
        (P = t.memoizedState),
        x !== l || $ !== P || st.current || Tn
          ? (typeof Y == "function" && (Vs(t, n, Y, l), (P = t.memoizedState)),
            (x = Tn || Cc(t, n, x, l, $, P, j))
              ? (X ||
                  (typeof y.UNSAFE_componentWillMount != "function" &&
                    typeof y.componentWillMount != "function") ||
                  (typeof y.componentWillMount == "function" && y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == "function" &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof y.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = P)),
            (y.props = l),
            (y.state = P),
            (y.context = j),
            (l = x))
          : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), (l = !1)));
    } else {
      ((y = t.stateNode),
        nc(e, t),
        (x = t.memoizedProps),
        (j = t.type === t.elementType ? x : bt(t.type, x)),
        (y.props = j),
        (X = t.pendingProps),
        ($ = y.context),
        (P = n.contextType),
        typeof P == "object" && P !== null
          ? (P = Dt(P))
          : ((P = ut(n) ? Yn : Je.current), (P = kr(t, P))));
      var J = n.getDerivedStateFromProps;
      ((Y = typeof J == "function" || typeof y.getSnapshotBeforeUpdate == "function") ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((x !== X || $ !== P) && Rc(t, y, l, P)),
        (Tn = !1),
        ($ = t.memoizedState),
        (y.state = $),
        zl(t, l, y, u));
      var re = t.memoizedState;
      x !== X || $ !== re || st.current || Tn
        ? (typeof J == "function" && (Vs(t, n, J, l), (re = t.memoizedState)),
          (j = Tn || Cc(t, n, j, l, $, re, P) || !1)
            ? (Y ||
                (typeof y.UNSAFE_componentWillUpdate != "function" &&
                  typeof y.componentWillUpdate != "function") ||
                (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(l, re, P),
                typeof y.UNSAFE_componentWillUpdate == "function" &&
                  y.UNSAFE_componentWillUpdate(l, re, P)),
              typeof y.componentDidUpdate == "function" && (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof y.componentDidUpdate != "function" ||
                (x === e.memoizedProps && $ === e.memoizedState) ||
                (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != "function" ||
                (x === e.memoizedProps && $ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = re)),
          (y.props = l),
          (y.state = re),
          (y.context = P),
          (l = j))
        : (typeof y.componentDidUpdate != "function" ||
            (x === e.memoizedProps && $ === e.memoizedState) ||
            (t.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != "function" ||
            (x === e.memoizedProps && $ === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return $s(e, t, n, l, f, u);
  }
  function $s(e, t, n, l, u, f) {
    Uc(e, t);
    var y = (t.flags & 128) !== 0;
    if (!l && !y) return (u && $f(t, n, !1), fn(e, t, f));
    ((l = t.stateNode), (Um.current = t));
    var x = y && typeof n.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (t.flags |= 1),
      e !== null && y
        ? ((t.child = Or(t, e.child, null, f)), (t.child = Or(t, null, x, f)))
        : lt(e, t, x, f),
      (t.memoizedState = l.state),
      u && $f(t, n, !0),
      t.child
    );
  }
  function Bc(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? bf(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && bf(e, t.context, !1),
      Os(e, t.containerInfo));
  }
  function Hc(e, t, n, l, u) {
    return (Cr(), xs(u), (t.flags |= 256), lt(e, t, n, l), t.child);
  }
  var Ys = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Qs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function bc(e, t, n) {
    var l = t.pendingProps,
      u = Ne.current,
      f = !1,
      y = (t.flags & 128) !== 0,
      x;
    if (
      ((x = y) || (x = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      x ? ((f = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (u |= 1),
      Ee(Ne, u & 1),
      e === null)
    )
      return (
        ws(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((y = l.children),
            (e = l.fallback),
            f
              ? ((l = t.mode),
                (f = t.child),
                (y = { mode: "hidden", children: y }),
                (l & 1) === 0 && f !== null
                  ? ((f.childLanes = 0), (f.pendingProps = y))
                  : (f = to(y, l, 0, null)),
                (e = nr(e, l, n, null)),
                (f.return = t),
                (e.return = t),
                (f.sibling = e),
                (t.child = f),
                (t.child.memoizedState = Qs(n)),
                (t.memoizedState = Ys),
                e)
              : Xs(t, y))
      );
    if (((u = e.memoizedState), u !== null && ((x = u.dehydrated), x !== null)))
      return Vm(e, t, y, l, x, u, n);
    if (f) {
      ((f = l.fallback), (y = t.mode), (u = e.child), (x = u.sibling));
      var P = { mode: "hidden", children: l.children };
      return (
        (y & 1) === 0 && t.child !== u
          ? ((l = t.child), (l.childLanes = 0), (l.pendingProps = P), (t.deletions = null))
          : ((l = Dn(u, P)), (l.subtreeFlags = u.subtreeFlags & 14680064)),
        x !== null ? (f = Dn(x, f)) : ((f = nr(f, y, n, null)), (f.flags |= 2)),
        (f.return = t),
        (l.return = t),
        (l.sibling = f),
        (t.child = l),
        (l = f),
        (f = t.child),
        (y = e.child.memoizedState),
        (y =
          y === null
            ? Qs(n)
            : { baseLanes: y.baseLanes | n, cachePool: null, transitions: y.transitions }),
        (f.memoizedState = y),
        (f.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ys),
        l
      );
    }
    return (
      (f = e.child),
      (e = f.sibling),
      (l = Dn(f, { mode: "visible", children: l.children })),
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
  function Xs(e, t) {
    return (
      (t = to({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Hl(e, t, n, l) {
    return (
      l !== null && xs(l),
      Or(t, e.child, null, n),
      (e = Xs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Vm(e, t, n, l, u, f, y) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (l = Hs(Error(i(422)))), Hl(e, t, y, l))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((f = l.fallback),
            (u = t.mode),
            (l = to({ mode: "visible", children: l.children }, u, 0, null)),
            (f = nr(f, u, y, null)),
            (f.flags |= 2),
            (l.return = t),
            (f.return = t),
            (l.sibling = f),
            (t.child = l),
            (t.mode & 1) !== 0 && Or(t, e.child, null, y),
            (t.child.memoizedState = Qs(y)),
            (t.memoizedState = Ys),
            f);
    if ((t.mode & 1) === 0) return Hl(e, t, y, null);
    if (u.data === "$!") {
      if (((l = u.nextSibling && u.nextSibling.dataset), l)) var x = l.dgst;
      return ((l = x), (f = Error(i(419))), (l = Hs(f, l, void 0)), Hl(e, t, y, l));
    }
    if (((x = (y & e.childLanes) !== 0), at || x)) {
      if (((l = $e), l !== null)) {
        switch (y & -y) {
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
        ((u = (u & (l.suspendedLanes | y)) !== 0 ? 0 : u),
          u !== 0 && u !== f.retryLane && ((f.retryLane = u), un(e, u), Yt(l, e, u, -1)));
      }
      return (fu(), (l = Hs(Error(i(421)))), Hl(e, t, y, l));
    }
    return u.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Jm.bind(null, e)), (u._reactRetry = t), null)
      : ((e = f.treeContext),
        (St = Sn(u.nextSibling)),
        (xt = t),
        (Oe = !0),
        (Ht = null),
        e !== null &&
          ((Mt[Lt++] = on),
          (Mt[Lt++] = sn),
          (Mt[Lt++] = Qn),
          (on = e.id),
          (sn = e.overflow),
          (Qn = t)),
        (t = Xs(t, l.children)),
        (t.flags |= 4096),
        t);
  }
  function Wc(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Es(e.return, t, n));
  }
  function Ks(e, t, n, l, u) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: u,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = n),
        (f.tailMode = u));
  }
  function $c(e, t, n) {
    var l = t.pendingProps,
      u = l.revealOrder,
      f = l.tail;
    if ((lt(e, t, l.children, n), (l = Ne.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Wc(e, n, t);
          else if (e.tag === 19) Wc(e, n, t);
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
    if ((Ee(Ne, l), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (n = t.child, u = null; n !== null;)
            ((e = n.alternate), e !== null && Al(e) === null && (u = n), (n = n.sibling));
          ((n = u),
            n === null ? ((u = t.child), (t.child = null)) : ((u = n.sibling), (n.sibling = null)),
            Ks(t, !1, u, n, f));
          break;
        case "backwards":
          for (n = null, u = t.child, t.child = null; u !== null;) {
            if (((e = u.alternate), e !== null && Al(e) === null)) {
              t.child = u;
              break;
            }
            ((e = u.sibling), (u.sibling = n), (n = u), (u = e));
          }
          Ks(t, !0, n, null, f);
          break;
        case "together":
          Ks(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function bl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function fn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Zn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = Dn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        ((e = e.sibling), (n = n.sibling = Dn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Bm(e, t, n) {
    switch (t.tag) {
      case 3:
        (Bc(t), Cr());
        break;
      case 5:
        lc(t);
        break;
      case 1:
        ut(t.type) && El(t);
        break;
      case 4:
        Os(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context,
          u = t.memoizedProps.value;
        (Ee(Ml, l._currentValue), (l._currentValue = u));
        break;
      case 13:
        if (((l = t.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Ee(Ne, Ne.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? bc(e, t, n)
              : (Ee(Ne, Ne.current & 1), (e = fn(e, t, n)), e !== null ? e.sibling : null);
        Ee(Ne, Ne.current & 1);
        break;
      case 19:
        if (((l = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return $c(e, t, n);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ee(Ne, Ne.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Fc(e, t, n));
    }
    return fn(e, t, n);
  }
  var Yc, qs, Qc, Xc;
  ((Yc = function (e, t) {
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
    (qs = function () {}),
    (Qc = function (e, t, n, l) {
      var u = e.memoizedProps;
      if (u !== l) {
        ((e = t.stateNode), qn(qt.current));
        var f = null;
        switch (n) {
          case "input":
            ((u = Eo(e, u)), (l = Eo(e, l)), (f = []));
            break;
          case "select":
            ((u = W({}, u, { value: void 0 })), (l = W({}, l, { value: void 0 })), (f = []));
            break;
          case "textarea":
            ((u = Oo(e, u)), (l = Oo(e, l)), (f = []));
            break;
          default:
            typeof u.onClick != "function" && typeof l.onClick == "function" && (e.onclick = Sl);
        }
        No(n, l);
        var y;
        n = null;
        for (j in u)
          if (!l.hasOwnProperty(j) && u.hasOwnProperty(j) && u[j] != null)
            if (j === "style") {
              var x = u[j];
              for (y in x) x.hasOwnProperty(y) && (n || (n = {}), (n[y] = ""));
            } else
              j !== "dangerouslySetInnerHTML" &&
                j !== "children" &&
                j !== "suppressContentEditableWarning" &&
                j !== "suppressHydrationWarning" &&
                j !== "autoFocus" &&
                (s.hasOwnProperty(j) ? f || (f = []) : (f = f || []).push(j, null));
        for (j in l) {
          var P = l[j];
          if (
            ((x = u != null ? u[j] : void 0),
            l.hasOwnProperty(j) && P !== x && (P != null || x != null))
          )
            if (j === "style")
              if (x) {
                for (y in x)
                  !x.hasOwnProperty(y) ||
                    (P && P.hasOwnProperty(y)) ||
                    (n || (n = {}), (n[y] = ""));
                for (y in P) P.hasOwnProperty(y) && x[y] !== P[y] && (n || (n = {}), (n[y] = P[y]));
              } else (n || (f || (f = []), f.push(j, n)), (n = P));
            else
              j === "dangerouslySetInnerHTML"
                ? ((P = P ? P.__html : void 0),
                  (x = x ? x.__html : void 0),
                  P != null && x !== P && (f = f || []).push(j, P))
                : j === "children"
                  ? (typeof P != "string" && typeof P != "number") || (f = f || []).push(j, "" + P)
                  : j !== "suppressContentEditableWarning" &&
                    j !== "suppressHydrationWarning" &&
                    (s.hasOwnProperty(j)
                      ? (P != null && j === "onScroll" && Te("scroll", e), f || x === P || (f = []))
                      : (f = f || []).push(j, P));
        }
        n && (f = f || []).push("style", n);
        var j = f;
        (t.updateQueue = j) && (t.flags |= 4);
      }
    }),
    (Xc = function (e, t, n, l) {
      n !== l && (t.flags |= 4);
    }));
  function Oi(e, t) {
    if (!Oe)
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
  function tt(e) {
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
  function Hm(e, t, n) {
    var l = t.pendingProps;
    switch ((gs(t), t.tag)) {
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
        return (tt(t), null);
      case 1:
        return (ut(t.type) && kl(), tt(t), null);
      case 3:
        return (
          (l = t.stateNode),
          Mr(),
          Ce(st),
          Ce(Je),
          Ms(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Rl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ht !== null && (su(Ht), (Ht = null)))),
          qs(e, t),
          tt(t),
          null
        );
      case 5:
        Rs(t);
        var u = qn(Pi.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Qc(e, t, n, l, u), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return (tt(t), null);
          }
          if (((e = qn(qt.current)), Rl(t))) {
            ((l = t.stateNode), (n = t.type));
            var f = t.memoizedProps;
            switch (((l[Kt] = t), (l[gi] = f), (e = (t.mode & 1) !== 0), n)) {
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
                for (u = 0; u < mi.length; u++) Te(mi[u], l);
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
                (Ca(l, f), Te("invalid", l));
                break;
              case "select":
                ((l._wrapperState = { wasMultiple: !!f.multiple }), Te("invalid", l));
                break;
              case "textarea":
                (Na(l, f), Te("invalid", l));
            }
            (No(n, f), (u = null));
            for (var y in f)
              if (f.hasOwnProperty(y)) {
                var x = f[y];
                y === "children"
                  ? typeof x == "string"
                    ? l.textContent !== x &&
                      (f.suppressHydrationWarning !== !0 && xl(l.textContent, x, e),
                      (u = ["children", x]))
                    : typeof x == "number" &&
                      l.textContent !== "" + x &&
                      (f.suppressHydrationWarning !== !0 && xl(l.textContent, x, e),
                      (u = ["children", "" + x]))
                  : s.hasOwnProperty(y) && x != null && y === "onScroll" && Te("scroll", l);
              }
            switch (n) {
              case "input":
                (Zi(l), Ra(l, f, !0));
                break;
              case "textarea":
                (Zi(l), La(l));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick == "function" && (l.onclick = Sl);
            }
            ((l = u), (t.updateQueue = l), l !== null && (t.flags |= 4));
          } else {
            ((y = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Da(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = y.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == "string"
                    ? (e = y.createElement(n, { is: l.is }))
                    : ((e = y.createElement(n)),
                      n === "select" &&
                        ((y = e), l.multiple ? (y.multiple = !0) : l.size && (y.size = l.size)))
                : (e = y.createElementNS(e, n)),
              (e[Kt] = t),
              (e[gi] = l),
              Yc(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((y = Mo(n, l)), n)) {
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
                  for (u = 0; u < mi.length; u++) Te(mi[u], e);
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
                  (Ca(e, l), (u = Eo(e, l)), Te("invalid", e));
                  break;
                case "option":
                  u = l;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!l.multiple }),
                    (u = W({}, l, { value: void 0 })),
                    Te("invalid", e));
                  break;
                case "textarea":
                  (Na(e, l), (u = Oo(e, l)), Te("invalid", e));
                  break;
                default:
                  u = l;
              }
              (No(n, u), (x = u));
              for (f in x)
                if (x.hasOwnProperty(f)) {
                  var P = x[f];
                  f === "style"
                    ? ja(e, P)
                    : f === "dangerouslySetInnerHTML"
                      ? ((P = P ? P.__html : void 0), P != null && za(e, P))
                      : f === "children"
                        ? typeof P == "string"
                          ? (n !== "textarea" || P !== "") && qr(e, P)
                          : typeof P == "number" && qr(e, "" + P)
                        : f !== "suppressContentEditableWarning" &&
                          f !== "suppressHydrationWarning" &&
                          f !== "autoFocus" &&
                          (s.hasOwnProperty(f)
                            ? P != null && f === "onScroll" && Te("scroll", e)
                            : P != null && O(e, f, P, y));
                }
              switch (n) {
                case "input":
                  (Zi(e), Ra(e, l, !1));
                  break;
                case "textarea":
                  (Zi(e), La(e));
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + ge(l.value));
                  break;
                case "select":
                  ((e.multiple = !!l.multiple),
                    (f = l.value),
                    f != null
                      ? dr(e, !!l.multiple, f, !1)
                      : l.defaultValue != null && dr(e, !!l.multiple, l.defaultValue, !0));
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = Sl);
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
        return (tt(t), null);
      case 6:
        if (e && t.stateNode != null) Xc(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(i(166));
          if (((n = qn(Pi.current)), qn(qt.current), Rl(t))) {
            if (
              ((l = t.stateNode),
              (n = t.memoizedProps),
              (l[Kt] = t),
              (f = l.nodeValue !== n) && ((e = xt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  xl(l.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    xl(l.nodeValue, n, (e.mode & 1) !== 0);
              }
            f && (t.flags |= 4);
          } else
            ((l = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(l)),
              (l[Kt] = t),
              (t.stateNode = l));
        }
        return (tt(t), null);
      case 13:
        if (
          (Ce(Ne),
          (l = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Oe && St !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Gf(), Cr(), (t.flags |= 98560), (f = !1));
          else if (((f = Rl(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(i(318));
              if (((f = t.memoizedState), (f = f !== null ? f.dehydrated : null), !f))
                throw Error(i(317));
              f[Kt] = t;
            } else (Cr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (tt(t), (f = !1));
          } else (Ht !== null && (su(Ht), (Ht = null)), (f = !0));
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ne.current & 1) !== 0 ? be === 0 && (be = 3) : fu())),
            t.updateQueue !== null && (t.flags |= 4),
            tt(t),
            null);
      case 4:
        return (Mr(), qs(e, t), e === null && yi(t.stateNode.containerInfo), tt(t), null);
      case 10:
        return (ks(t.type._context), tt(t), null);
      case 17:
        return (ut(t.type) && kl(), tt(t), null);
      case 19:
        if ((Ce(Ne), (f = t.memoizedState), f === null)) return (tt(t), null);
        if (((l = (t.flags & 128) !== 0), (y = f.rendering), y === null))
          if (l) Oi(f, !1);
          else {
            if (be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((y = Al(e)), y !== null)) {
                  for (
                    t.flags |= 128,
                      Oi(f, !1),
                      l = y.updateQueue,
                      l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = n,
                      n = t.child;
                    n !== null;
                  )
                    ((f = n),
                      (e = l),
                      (f.flags &= 14680066),
                      (y = f.alternate),
                      y === null
                        ? ((f.childLanes = 0),
                          (f.lanes = e),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = y.childLanes),
                          (f.lanes = y.lanes),
                          (f.child = y.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = y.memoizedProps),
                          (f.memoizedState = y.memoizedState),
                          (f.updateQueue = y.updateQueue),
                          (f.type = y.type),
                          (e = y.dependencies),
                          (f.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (Ee(Ne, (Ne.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            f.tail !== null &&
              Ie() > Ar &&
              ((t.flags |= 128), (l = !0), Oi(f, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Al(y)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Oi(f, !0),
                f.tail === null && f.tailMode === "hidden" && !y.alternate && !Oe)
              )
                return (tt(t), null);
            } else
              2 * Ie() - f.renderingStartTime > Ar &&
                n !== 1073741824 &&
                ((t.flags |= 128), (l = !0), Oi(f, !1), (t.lanes = 4194304));
          f.isBackwards
            ? ((y.sibling = t.child), (t.child = y))
            : ((n = f.last), n !== null ? (n.sibling = y) : (t.child = y), (f.last = y));
        }
        return f.tail !== null
          ? ((t = f.tail),
            (f.rendering = t),
            (f.tail = t.sibling),
            (f.renderingStartTime = Ie()),
            (t.sibling = null),
            (n = Ne.current),
            Ee(Ne, l ? (n & 1) | 2 : n & 1),
            t)
          : (tt(t), null);
      case 22:
      case 23:
        return (
          au(),
          (l = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
          l && (t.mode & 1) !== 0
            ? (Pt & 1073741824) !== 0 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : tt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function bm(e, t) {
    switch ((gs(t), t.tag)) {
      case 1:
        return (
          ut(t.type) && kl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Mr(),
          Ce(st),
          Ce(Je),
          Ms(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Rs(t), null);
      case 13:
        if ((Ce(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(i(340));
          Cr();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Ce(Ne), null);
      case 4:
        return (Mr(), null);
      case 10:
        return (ks(t.type._context), null);
      case 22:
      case 23:
        return (au(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wl = !1,
    nt = !1,
    Wm = typeof WeakSet == "function" ? WeakSet : Set,
    ne = null;
  function Dr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Ae(e, t, l);
        }
      else n.current = null;
  }
  function Gs(e, t, n) {
    try {
      n();
    } catch (l) {
      Ae(e, t, l);
    }
  }
  var Kc = !1;
  function $m(e, t) {
    if (((as = fl), (e = Cf()), ts(e))) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var u = l.anchorOffset,
              f = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, f.nodeType);
            } catch {
              n = null;
              break e;
            }
            var y = 0,
              x = -1,
              P = -1,
              j = 0,
              Y = 0,
              X = e,
              $ = null;
            t: for (;;) {
              for (
                var J;
                X !== n || (u !== 0 && X.nodeType !== 3) || (x = y + u),
                  X !== f || (l !== 0 && X.nodeType !== 3) || (P = y + l),
                  X.nodeType === 3 && (y += X.nodeValue.length),
                  (J = X.firstChild) !== null;
              )
                (($ = X), (X = J));
              for (;;) {
                if (X === e) break t;
                if (
                  ($ === n && ++j === u && (x = y),
                  $ === f && ++Y === l && (P = y),
                  (J = X.nextSibling) !== null)
                )
                  break;
                ((X = $), ($ = X.parentNode));
              }
              X = J;
            }
            n = x === -1 || P === -1 ? null : { start: x, end: P };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (fs = { focusedElem: e, selectionRange: n }, fl = !1, ne = t; ne !== null;)
      if (((t = ne), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (ne = e));
      else
        for (; ne !== null;) {
          t = ne;
          try {
            var re = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (re !== null) {
                    var ie = re.memoizedProps,
                      Fe = re.memoizedState,
                      D = t.stateNode,
                      E = D.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ie : bt(t.type, ie),
                        Fe,
                      );
                    D.__reactInternalSnapshotBeforeUpdate = E;
                  }
                  break;
                case 3:
                  var z = t.stateNode.containerInfo;
                  z.nodeType === 1
                    ? (z.textContent = "")
                    : z.nodeType === 9 && z.documentElement && z.removeChild(z.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (K) {
            Ae(t, t.return, K);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (ne = e));
            break;
          }
          ne = t.return;
        }
    return ((re = Kc), (Kc = !1), re);
  }
  function Ri(e, t, n) {
    var l = t.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var u = (l = l.next);
      do {
        if ((u.tag & e) === e) {
          var f = u.destroy;
          ((u.destroy = void 0), f !== void 0 && Gs(t, n, f));
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
  function Zs(e) {
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
  function qc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), qc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Kt], delete t[gi], delete t[hs], delete t[Cm], delete t[Om])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Gc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Zc(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Gc(e.return)) return null;
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
  function Js(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Sl)));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (Js(e, t, n), e = e.sibling; e !== null;) (Js(e, t, n), (e = e.sibling));
  }
  function eu(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (eu(e, t, n), e = e.sibling; e !== null;) (eu(e, t, n), (e = e.sibling));
  }
  var Ke = null,
    Wt = !1;
  function On(e, t, n) {
    for (n = n.child; n !== null;) (Jc(e, t, n), (n = n.sibling));
  }
  function Jc(e, t, n) {
    if (Xt && typeof Xt.onCommitFiberUnmount == "function")
      try {
        Xt.onCommitFiberUnmount(il, n);
      } catch {}
    switch (n.tag) {
      case 5:
        nt || Dr(n, t);
      case 6:
        var l = Ke,
          u = Wt;
        ((Ke = null),
          On(e, t, n),
          (Ke = l),
          (Wt = u),
          Ke !== null &&
            (Wt
              ? ((e = Ke),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Ke.removeChild(n.stateNode)));
        break;
      case 18:
        Ke !== null &&
          (Wt
            ? ((e = Ke),
              (n = n.stateNode),
              e.nodeType === 8 ? ps(e.parentNode, n) : e.nodeType === 1 && ps(e, n),
              si(e))
            : ps(Ke, n.stateNode));
        break;
      case 4:
        ((l = Ke),
          (u = Wt),
          (Ke = n.stateNode.containerInfo),
          (Wt = !0),
          On(e, t, n),
          (Ke = l),
          (Wt = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!nt && ((l = n.updateQueue), l !== null && ((l = l.lastEffect), l !== null))) {
          u = l = l.next;
          do {
            var f = u,
              y = f.destroy;
            ((f = f.tag),
              y !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Gs(n, t, y),
              (u = u.next));
          } while (u !== l);
        }
        On(e, t, n);
        break;
      case 1:
        if (!nt && (Dr(n, t), (l = n.stateNode), typeof l.componentWillUnmount == "function"))
          try {
            ((l.props = n.memoizedProps), (l.state = n.memoizedState), l.componentWillUnmount());
          } catch (x) {
            Ae(n, t, x);
          }
        On(e, t, n);
        break;
      case 21:
        On(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((nt = (l = nt) || n.memoizedState !== null), On(e, t, n), (nt = l))
          : On(e, t, n);
        break;
      default:
        On(e, t, n);
    }
  }
  function ed(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Wm()),
        t.forEach(function (l) {
          var u = e0.bind(null, e, l);
          n.has(l) || (n.add(l), l.then(u, u));
        }));
    }
  }
  function $t(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l];
        try {
          var f = e,
            y = t,
            x = y;
          e: for (; x !== null;) {
            switch (x.tag) {
              case 5:
                ((Ke = x.stateNode), (Wt = !1));
                break e;
              case 3:
                ((Ke = x.stateNode.containerInfo), (Wt = !0));
                break e;
              case 4:
                ((Ke = x.stateNode.containerInfo), (Wt = !0));
                break e;
            }
            x = x.return;
          }
          if (Ke === null) throw Error(i(160));
          (Jc(f, y, u), (Ke = null), (Wt = !1));
          var P = u.alternate;
          (P !== null && (P.return = null), (u.return = null));
        } catch (j) {
          Ae(u, t, j);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (td(t, e), (t = t.sibling));
  }
  function td(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (($t(t, e), Zt(e), l & 4)) {
          try {
            (Ri(3, e, e.return), $l(3, e));
          } catch (ie) {
            Ae(e, e.return, ie);
          }
          try {
            Ri(5, e, e.return);
          } catch (ie) {
            Ae(e, e.return, ie);
          }
        }
        break;
      case 1:
        ($t(t, e), Zt(e), l & 512 && n !== null && Dr(n, n.return));
        break;
      case 5:
        if (($t(t, e), Zt(e), l & 512 && n !== null && Dr(n, n.return), e.flags & 32)) {
          var u = e.stateNode;
          try {
            qr(u, "");
          } catch (ie) {
            Ae(e, e.return, ie);
          }
        }
        if (l & 4 && ((u = e.stateNode), u != null)) {
          var f = e.memoizedProps,
            y = n !== null ? n.memoizedProps : f,
            x = e.type,
            P = e.updateQueue;
          if (((e.updateQueue = null), P !== null))
            try {
              (x === "input" && f.type === "radio" && f.name != null && Oa(u, f), Mo(x, y));
              var j = Mo(x, f);
              for (y = 0; y < P.length; y += 2) {
                var Y = P[y],
                  X = P[y + 1];
                Y === "style"
                  ? ja(u, X)
                  : Y === "dangerouslySetInnerHTML"
                    ? za(u, X)
                    : Y === "children"
                      ? qr(u, X)
                      : O(u, Y, X, j);
              }
              switch (x) {
                case "input":
                  To(u, f);
                  break;
                case "textarea":
                  Ma(u, f);
                  break;
                case "select":
                  var $ = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!f.multiple;
                  var J = f.value;
                  J != null
                    ? dr(u, !!f.multiple, J, !1)
                    : $ !== !!f.multiple &&
                      (f.defaultValue != null
                        ? dr(u, !!f.multiple, f.defaultValue, !0)
                        : dr(u, !!f.multiple, f.multiple ? [] : "", !1));
              }
              u[gi] = f;
            } catch (ie) {
              Ae(e, e.return, ie);
            }
        }
        break;
      case 6:
        if (($t(t, e), Zt(e), l & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          ((u = e.stateNode), (f = e.memoizedProps));
          try {
            u.nodeValue = f;
          } catch (ie) {
            Ae(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (($t(t, e), Zt(e), l & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            si(t.containerInfo);
          } catch (ie) {
            Ae(e, e.return, ie);
          }
        break;
      case 4:
        ($t(t, e), Zt(e));
        break;
      case 13:
        ($t(t, e),
          Zt(e),
          (u = e.child),
          u.flags & 8192 &&
            ((f = u.memoizedState !== null),
            (u.stateNode.isHidden = f),
            !f || (u.alternate !== null && u.alternate.memoizedState !== null) || (ru = Ie())),
          l & 4 && ed(e));
        break;
      case 22:
        if (
          ((Y = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((nt = (j = nt) || Y), $t(t, e), (nt = j)) : $t(t, e),
          Zt(e),
          l & 8192)
        ) {
          if (
            ((j = e.memoizedState !== null), (e.stateNode.isHidden = j) && !Y && (e.mode & 1) !== 0)
          )
            for (ne = e, Y = e.child; Y !== null;) {
              for (X = ne = Y; ne !== null;) {
                switch ((($ = ne), (J = $.child), $.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ri(4, $, $.return);
                    break;
                  case 1:
                    Dr($, $.return);
                    var re = $.stateNode;
                    if (typeof re.componentWillUnmount == "function") {
                      ((l = $), (n = $.return));
                      try {
                        ((t = l),
                          (re.props = t.memoizedProps),
                          (re.state = t.memoizedState),
                          re.componentWillUnmount());
                      } catch (ie) {
                        Ae(l, n, ie);
                      }
                    }
                    break;
                  case 5:
                    Dr($, $.return);
                    break;
                  case 22:
                    if ($.memoizedState !== null) {
                      id(X);
                      continue;
                    }
                }
                J !== null ? ((J.return = $), (ne = J)) : id(X);
              }
              Y = Y.sibling;
            }
          e: for (Y = null, X = e; ;) {
            if (X.tag === 5) {
              if (Y === null) {
                Y = X;
                try {
                  ((u = X.stateNode),
                    j
                      ? ((f = u.style),
                        typeof f.setProperty == "function"
                          ? f.setProperty("display", "none", "important")
                          : (f.display = "none"))
                      : ((x = X.stateNode),
                        (P = X.memoizedProps.style),
                        (y = P != null && P.hasOwnProperty("display") ? P.display : null),
                        (x.style.display = Aa("display", y))));
                } catch (ie) {
                  Ae(e, e.return, ie);
                }
              }
            } else if (X.tag === 6) {
              if (Y === null)
                try {
                  X.stateNode.nodeValue = j ? "" : X.memoizedProps;
                } catch (ie) {
                  Ae(e, e.return, ie);
                }
            } else if (
              ((X.tag !== 22 && X.tag !== 23) || X.memoizedState === null || X === e) &&
              X.child !== null
            ) {
              ((X.child.return = X), (X = X.child));
              continue;
            }
            if (X === e) break e;
            for (; X.sibling === null;) {
              if (X.return === null || X.return === e) break e;
              (Y === X && (Y = null), (X = X.return));
            }
            (Y === X && (Y = null), (X.sibling.return = X.return), (X = X.sibling));
          }
        }
        break;
      case 19:
        ($t(t, e), Zt(e), l & 4 && ed(e));
        break;
      case 21:
        break;
      default:
        ($t(t, e), Zt(e));
    }
  }
  function Zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (Gc(n)) {
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
            l.flags & 32 && (qr(u, ""), (l.flags &= -33));
            var f = Zc(e);
            eu(e, f, u);
            break;
          case 3:
          case 4:
            var y = l.stateNode.containerInfo,
              x = Zc(e);
            Js(e, x, y);
            break;
          default:
            throw Error(i(161));
        }
      } catch (P) {
        Ae(e, e.return, P);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ym(e, t, n) {
    ((ne = e), nd(e));
  }
  function nd(e, t, n) {
    for (var l = (e.mode & 1) !== 0; ne !== null;) {
      var u = ne,
        f = u.child;
      if (u.tag === 22 && l) {
        var y = u.memoizedState !== null || Wl;
        if (!y) {
          var x = u.alternate,
            P = (x !== null && x.memoizedState !== null) || nt;
          x = Wl;
          var j = nt;
          if (((Wl = y), (nt = P) && !j))
            for (ne = u; ne !== null;)
              ((y = ne),
                (P = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? ld(u)
                  : P !== null
                    ? ((P.return = y), (ne = P))
                    : ld(u));
          for (; f !== null;) ((ne = f), nd(f), (f = f.sibling));
          ((ne = u), (Wl = x), (nt = j));
        }
        rd(e);
      } else (u.subtreeFlags & 8772) !== 0 && f !== null ? ((f.return = u), (ne = f)) : rd(e);
    }
  }
  function rd(e) {
    for (; ne !== null;) {
      var t = ne;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                nt || $l(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !nt)
                  if (n === null) l.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type ? n.memoizedProps : bt(t.type, n.memoizedProps);
                    l.componentDidUpdate(u, n.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                  }
                var f = t.updateQueue;
                f !== null && ic(t, f, l);
                break;
              case 3:
                var y = t.updateQueue;
                if (y !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ic(t, y, n);
                }
                break;
              case 5:
                var x = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = x;
                  var P = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      P.autoFocus && n.focus();
                      break;
                    case "img":
                      P.src && (n.src = P.src);
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
                  var j = t.alternate;
                  if (j !== null) {
                    var Y = j.memoizedState;
                    if (Y !== null) {
                      var X = Y.dehydrated;
                      X !== null && si(X);
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
          nt || (t.flags & 512 && Zs(t));
        } catch ($) {
          Ae(t, t.return, $);
        }
      }
      if (t === e) {
        ne = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (ne = n));
        break;
      }
      ne = t.return;
    }
  }
  function id(e) {
    for (; ne !== null;) {
      var t = ne;
      if (t === e) {
        ne = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (ne = n));
        break;
      }
      ne = t.return;
    }
  }
  function ld(e) {
    for (; ne !== null;) {
      var t = ne;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              $l(4, t);
            } catch (P) {
              Ae(t, n, P);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var u = t.return;
              try {
                l.componentDidMount();
              } catch (P) {
                Ae(t, u, P);
              }
            }
            var f = t.return;
            try {
              Zs(t);
            } catch (P) {
              Ae(t, f, P);
            }
            break;
          case 5:
            var y = t.return;
            try {
              Zs(t);
            } catch (P) {
              Ae(t, y, P);
            }
        }
      } catch (P) {
        Ae(t, t.return, P);
      }
      if (t === e) {
        ne = null;
        break;
      }
      var x = t.sibling;
      if (x !== null) {
        ((x.return = t.return), (ne = x));
        break;
      }
      ne = t.return;
    }
  }
  var Qm = Math.ceil,
    Yl = N.ReactCurrentDispatcher,
    tu = N.ReactCurrentOwner,
    At = N.ReactCurrentBatchConfig,
    _e = 0,
    $e = null,
    Ve = null,
    qe = 0,
    Pt = 0,
    zr = Pn(0),
    be = 0,
    Ni = null,
    Zn = 0,
    Ql = 0,
    nu = 0,
    Mi = null,
    ft = null,
    ru = 0,
    Ar = 1 / 0,
    cn = null,
    Xl = !1,
    iu = null,
    Rn = null,
    Kl = !1,
    Nn = null,
    ql = 0,
    Li = 0,
    lu = null,
    Gl = -1,
    Zl = 0;
  function ot() {
    return (_e & 6) !== 0 ? Ie() : Gl !== -1 ? Gl : (Gl = Ie());
  }
  function Mn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (_e & 2) !== 0 && qe !== 0
        ? qe & -qe
        : Nm.transition !== null
          ? (Zl === 0 && (Zl = Ga()), Zl)
          : ((e = Se), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sf(e.type))), e);
  }
  function Yt(e, t, n, l) {
    if (50 < Li) throw ((Li = 0), (lu = null), Error(i(185)));
    (ni(e, n, l),
      ((_e & 2) === 0 || e !== $e) &&
        (e === $e && ((_e & 2) === 0 && (Ql |= n), be === 4 && Ln(e, qe)),
        ct(e, l),
        n === 1 && _e === 0 && (t.mode & 1) === 0 && ((Ar = Ie() + 500), Tl && En())));
  }
  function ct(e, t) {
    var n = e.callbackNode;
    Nh(e, t);
    var l = sl(e, e === $e ? qe : 0);
    if (l === 0) (n !== null && Xa(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = l & -l), e.callbackPriority !== t)) {
      if ((n != null && Xa(n), t === 1))
        (e.tag === 0 ? Rm(sd.bind(null, e)) : Yf(sd.bind(null, e)),
          Em(function () {
            (_e & 6) === 0 && En();
          }),
          (n = null));
      else {
        switch (Za(l)) {
          case 1:
            n = Fo;
            break;
          case 4:
            n = Ka;
            break;
          case 16:
            n = rl;
            break;
          case 536870912:
            n = qa;
            break;
          default:
            n = rl;
        }
        n = md(n, od.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function od(e, t) {
    if (((Gl = -1), (Zl = 0), (_e & 6) !== 0)) throw Error(i(327));
    var n = e.callbackNode;
    if (jr() && e.callbackNode !== n) return null;
    var l = sl(e, e === $e ? qe : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = Jl(e, l);
    else {
      t = l;
      var u = _e;
      _e |= 2;
      var f = ad();
      ($e !== e || qe !== t) && ((cn = null), (Ar = Ie() + 500), er(e, t));
      do
        try {
          qm();
          break;
        } catch (x) {
          ud(e, x);
        }
      while (!0);
      (Ps(), (Yl.current = f), (_e = u), Ve !== null ? (t = 0) : (($e = null), (qe = 0), (t = be)));
    }
    if (t !== 0) {
      if ((t === 2 && ((u = Uo(e)), u !== 0 && ((l = u), (t = ou(e, u)))), t === 1))
        throw ((n = Ni), er(e, 0), Ln(e, l), ct(e, Ie()), n);
      if (t === 6) Ln(e, l);
      else {
        if (
          ((u = e.current.alternate),
          (l & 30) === 0 &&
            !Xm(u) &&
            ((t = Jl(e, l)),
            t === 2 && ((f = Uo(e)), f !== 0 && ((l = f), (t = ou(e, f)))),
            t === 1))
        )
          throw ((n = Ni), er(e, 0), Ln(e, l), ct(e, Ie()), n);
        switch (((e.finishedWork = u), (e.finishedLanes = l), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            tr(e, ft, cn);
            break;
          case 3:
            if ((Ln(e, l), (l & 130023424) === l && ((t = ru + 500 - Ie()), 10 < t))) {
              if (sl(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & l) !== l)) {
                (ot(), (e.pingedLanes |= e.suspendedLanes & u));
                break;
              }
              e.timeoutHandle = ds(tr.bind(null, e, ft, cn), t);
              break;
            }
            tr(e, ft, cn);
            break;
          case 4:
            if ((Ln(e, l), (l & 4194240) === l)) break;
            for (t = e.eventTimes, u = -1; 0 < l;) {
              var y = 31 - Vt(l);
              ((f = 1 << y), (y = t[y]), y > u && (u = y), (l &= ~f));
            }
            if (
              ((l = u),
              (l = Ie() - l),
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
                            : 1960 * Qm(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = ds(tr.bind(null, e, ft, cn), l);
              break;
            }
            tr(e, ft, cn);
            break;
          case 5:
            tr(e, ft, cn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return (ct(e, Ie()), e.callbackNode === n ? od.bind(null, e) : null);
  }
  function ou(e, t) {
    var n = Mi;
    return (
      e.current.memoizedState.isDehydrated && (er(e, t).flags |= 256),
      (e = Jl(e, t)),
      e !== 2 && ((t = ft), (ft = n), t !== null && su(t)),
      e
    );
  }
  function su(e) {
    ft === null ? (ft = e) : ft.push.apply(ft, e);
  }
  function Xm(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var l = 0; l < n.length; l++) {
            var u = n[l],
              f = u.getSnapshot;
            u = u.value;
            try {
              if (!Bt(f(), u)) return !1;
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
  function Ln(e, t) {
    for (
      t &= ~nu, t &= ~Ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - Vt(t),
        l = 1 << n;
      ((e[n] = -1), (t &= ~l));
    }
  }
  function sd(e) {
    if ((_e & 6) !== 0) throw Error(i(327));
    jr();
    var t = sl(e, 0);
    if ((t & 1) === 0) return (ct(e, Ie()), null);
    var n = Jl(e, t);
    if (e.tag !== 0 && n === 2) {
      var l = Uo(e);
      l !== 0 && ((t = l), (n = ou(e, l)));
    }
    if (n === 1) throw ((n = Ni), er(e, 0), Ln(e, t), ct(e, Ie()), n);
    if (n === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      tr(e, ft, cn),
      ct(e, Ie()),
      null
    );
  }
  function uu(e, t) {
    var n = _e;
    _e |= 1;
    try {
      return e(t);
    } finally {
      ((_e = n), _e === 0 && ((Ar = Ie() + 500), Tl && En()));
    }
  }
  function Jn(e) {
    Nn !== null && Nn.tag === 0 && (_e & 6) === 0 && jr();
    var t = _e;
    _e |= 1;
    var n = At.transition,
      l = Se;
    try {
      if (((At.transition = null), (Se = 1), e)) return e();
    } finally {
      ((Se = l), (At.transition = n), (_e = t), (_e & 6) === 0 && En());
    }
  }
  function au() {
    ((Pt = zr.current), Ce(zr));
  }
  function er(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), km(n)), Ve !== null))
      for (n = Ve.return; n !== null;) {
        var l = n;
        switch ((gs(l), l.tag)) {
          case 1:
            ((l = l.type.childContextTypes), l != null && kl());
            break;
          case 3:
            (Mr(), Ce(st), Ce(Je), Ms());
            break;
          case 5:
            Rs(l);
            break;
          case 4:
            Mr();
            break;
          case 13:
            Ce(Ne);
            break;
          case 19:
            Ce(Ne);
            break;
          case 10:
            ks(l.type._context);
            break;
          case 22:
          case 23:
            au();
        }
        n = n.return;
      }
    if (
      (($e = e),
      (Ve = e = Dn(e.current, null)),
      (qe = Pt = t),
      (be = 0),
      (Ni = null),
      (nu = Ql = Zn = 0),
      (ft = Mi = null),
      Kn !== null)
    ) {
      for (t = 0; t < Kn.length; t++)
        if (((n = Kn[t]), (l = n.interleaved), l !== null)) {
          n.interleaved = null;
          var u = l.next,
            f = n.pending;
          if (f !== null) {
            var y = f.next;
            ((f.next = u), (l.next = y));
          }
          n.pending = l;
        }
      Kn = null;
    }
    return e;
  }
  function ud(e, t) {
    do {
      var n = Ve;
      try {
        if ((Ps(), (jl.current = Vl), Il)) {
          for (var l = Me.memoizedState; l !== null;) {
            var u = l.queue;
            (u !== null && (u.pending = null), (l = l.next));
          }
          Il = !1;
        }
        if (
          ((Gn = 0),
          (We = He = Me = null),
          (ki = !1),
          (Ei = 0),
          (tu.current = null),
          n === null || n.return === null)
        ) {
          ((be = 1), (Ni = t), (Ve = null));
          break;
        }
        e: {
          var f = e,
            y = n.return,
            x = n,
            P = t;
          if (
            ((t = qe),
            (x.flags |= 32768),
            P !== null && typeof P == "object" && typeof P.then == "function")
          ) {
            var j = P,
              Y = x,
              X = Y.tag;
            if ((Y.mode & 1) === 0 && (X === 0 || X === 11 || X === 15)) {
              var $ = Y.alternate;
              $
                ? ((Y.updateQueue = $.updateQueue),
                  (Y.memoizedState = $.memoizedState),
                  (Y.lanes = $.lanes))
                : ((Y.updateQueue = null), (Y.memoizedState = null));
            }
            var J = Dc(y);
            if (J !== null) {
              ((J.flags &= -257), zc(J, y, x, f, t), J.mode & 1 && Lc(f, j, t), (t = J), (P = j));
              var re = t.updateQueue;
              if (re === null) {
                var ie = new Set();
                (ie.add(P), (t.updateQueue = ie));
              } else re.add(P);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Lc(f, j, t), fu());
                break e;
              }
              P = Error(i(426));
            }
          } else if (Oe && x.mode & 1) {
            var Fe = Dc(y);
            if (Fe !== null) {
              ((Fe.flags & 65536) === 0 && (Fe.flags |= 256), zc(Fe, y, x, f, t), xs(Lr(P, x)));
              break e;
            }
          }
          ((f = P = Lr(P, x)),
            be !== 4 && (be = 2),
            Mi === null ? (Mi = [f]) : Mi.push(f),
            (f = y));
          do {
            switch (f.tag) {
              case 3:
                ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                var D = Nc(f, P, t);
                rc(f, D);
                break e;
              case 1:
                x = P;
                var E = f.type,
                  z = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof E.getDerivedStateFromError == "function" ||
                    (z !== null &&
                      typeof z.componentDidCatch == "function" &&
                      (Rn === null || !Rn.has(z))))
                ) {
                  ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                  var K = Mc(f, x, t);
                  rc(f, K);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        cd(n);
      } catch (le) {
        ((t = le), Ve === n && n !== null && (Ve = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ad() {
    var e = Yl.current;
    return ((Yl.current = Vl), e === null ? Vl : e);
  }
  function fu() {
    ((be === 0 || be === 3 || be === 2) && (be = 4),
      $e === null || ((Zn & 268435455) === 0 && (Ql & 268435455) === 0) || Ln($e, qe));
  }
  function Jl(e, t) {
    var n = _e;
    _e |= 2;
    var l = ad();
    ($e !== e || qe !== t) && ((cn = null), er(e, t));
    do
      try {
        Km();
        break;
      } catch (u) {
        ud(e, u);
      }
    while (!0);
    if ((Ps(), (_e = n), (Yl.current = l), Ve !== null)) throw Error(i(261));
    return (($e = null), (qe = 0), be);
  }
  function Km() {
    for (; Ve !== null;) fd(Ve);
  }
  function qm() {
    for (; Ve !== null && !xh();) fd(Ve);
  }
  function fd(e) {
    var t = hd(e.alternate, e, Pt);
    ((e.memoizedProps = e.pendingProps), t === null ? cd(e) : (Ve = t), (tu.current = null));
  }
  function cd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Hm(n, t, Pt)), n !== null)) {
          Ve = n;
          return;
        }
      } else {
        if (((n = bm(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ve = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((be = 6), (Ve = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ve = t;
        return;
      }
      Ve = t = e;
    } while (t !== null);
    be === 0 && (be = 5);
  }
  function tr(e, t, n) {
    var l = Se,
      u = At.transition;
    try {
      ((At.transition = null), (Se = 1), Gm(e, t, n, l));
    } finally {
      ((At.transition = u), (Se = l));
    }
    return null;
  }
  function Gm(e, t, n, l) {
    do jr();
    while (Nn !== null);
    if ((_e & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var u = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(i(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var f = n.lanes | n.childLanes;
    if (
      (Mh(e, f),
      e === $e && ((Ve = $e = null), (qe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Kl ||
        ((Kl = !0),
        md(rl, function () {
          return (jr(), null);
        })),
      (f = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || f)
    ) {
      ((f = At.transition), (At.transition = null));
      var y = Se;
      Se = 1;
      var x = _e;
      ((_e |= 4),
        (tu.current = null),
        $m(e, n),
        td(n, e),
        _m(fs),
        (fl = !!as),
        (fs = as = null),
        (e.current = n),
        Ym(n),
        Sh(),
        (_e = x),
        (Se = y),
        (At.transition = f));
    } else e.current = n;
    if (
      (Kl && ((Kl = !1), (Nn = e), (ql = u)),
      (f = e.pendingLanes),
      f === 0 && (Rn = null),
      Eh(n.stateNode),
      ct(e, Ie()),
      t !== null)
    )
      for (l = e.onRecoverableError, n = 0; n < t.length; n++)
        ((u = t[n]), l(u.value, { componentStack: u.stack, digest: u.digest }));
    if (Xl) throw ((Xl = !1), (e = iu), (iu = null), e);
    return (
      (ql & 1) !== 0 && e.tag !== 0 && jr(),
      (f = e.pendingLanes),
      (f & 1) !== 0 ? (e === lu ? Li++ : ((Li = 0), (lu = e))) : (Li = 0),
      En(),
      null
    );
  }
  function jr() {
    if (Nn !== null) {
      var e = Za(ql),
        t = At.transition,
        n = Se;
      try {
        if (((At.transition = null), (Se = 16 > e ? 16 : e), Nn === null)) var l = !1;
        else {
          if (((e = Nn), (Nn = null), (ql = 0), (_e & 6) !== 0)) throw Error(i(331));
          var u = _e;
          for (_e |= 4, ne = e.current; ne !== null;) {
            var f = ne,
              y = f.child;
            if ((ne.flags & 16) !== 0) {
              var x = f.deletions;
              if (x !== null) {
                for (var P = 0; P < x.length; P++) {
                  var j = x[P];
                  for (ne = j; ne !== null;) {
                    var Y = ne;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ri(8, Y, f);
                    }
                    var X = Y.child;
                    if (X !== null) ((X.return = Y), (ne = X));
                    else
                      for (; ne !== null;) {
                        Y = ne;
                        var $ = Y.sibling,
                          J = Y.return;
                        if ((qc(Y), Y === j)) {
                          ne = null;
                          break;
                        }
                        if ($ !== null) {
                          (($.return = J), (ne = $));
                          break;
                        }
                        ne = J;
                      }
                  }
                }
                var re = f.alternate;
                if (re !== null) {
                  var ie = re.child;
                  if (ie !== null) {
                    re.child = null;
                    do {
                      var Fe = ie.sibling;
                      ((ie.sibling = null), (ie = Fe));
                    } while (ie !== null);
                  }
                }
                ne = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && y !== null) ((y.return = f), (ne = y));
            else
              e: for (; ne !== null;) {
                if (((f = ne), (f.flags & 2048) !== 0))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ri(9, f, f.return);
                  }
                var D = f.sibling;
                if (D !== null) {
                  ((D.return = f.return), (ne = D));
                  break e;
                }
                ne = f.return;
              }
          }
          var E = e.current;
          for (ne = E; ne !== null;) {
            y = ne;
            var z = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && z !== null) ((z.return = y), (ne = z));
            else
              e: for (y = E; ne !== null;) {
                if (((x = ne), (x.flags & 2048) !== 0))
                  try {
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $l(9, x);
                    }
                  } catch (le) {
                    Ae(x, x.return, le);
                  }
                if (x === y) {
                  ne = null;
                  break e;
                }
                var K = x.sibling;
                if (K !== null) {
                  ((K.return = x.return), (ne = K));
                  break e;
                }
                ne = x.return;
              }
          }
          if (((_e = u), En(), Xt && typeof Xt.onPostCommitFiberRoot == "function"))
            try {
              Xt.onPostCommitFiberRoot(il, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        ((Se = n), (At.transition = t));
      }
    }
    return !1;
  }
  function dd(e, t, n) {
    ((t = Lr(n, t)),
      (t = Nc(e, t, 1)),
      (e = Cn(e, t, 1)),
      (t = ot()),
      e !== null && (ni(e, 1, t), ct(e, t)));
  }
  function Ae(e, t, n) {
    if (e.tag === 3) dd(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          dd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" && (Rn === null || !Rn.has(l)))
          ) {
            ((e = Lr(n, e)),
              (e = Mc(t, e, 1)),
              (t = Cn(t, e, 1)),
              (e = ot()),
              t !== null && (ni(t, 1, e), ct(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Zm(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (t = ot()),
      (e.pingedLanes |= e.suspendedLanes & n),
      $e === e &&
        (qe & n) === n &&
        (be === 4 || (be === 3 && (qe & 130023424) === qe && 500 > Ie() - ru)
          ? er(e, 0)
          : (nu |= n)),
      ct(e, t));
  }
  function pd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = ol), (ol <<= 1), (ol & 130023424) === 0 && (ol = 4194304)));
    var n = ot();
    ((e = un(e, t)), e !== null && (ni(e, t, n), ct(e, n)));
  }
  function Jm(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), pd(e, n));
  }
  function e0(e, t) {
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
    (l !== null && l.delete(t), pd(e, n));
  }
  var hd;
  hd = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || st.current) at = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((at = !1), Bm(e, t, n));
        at = (e.flags & 131072) !== 0;
      }
    else ((at = !1), Oe && (t.flags & 1048576) !== 0 && Qf(t, Ol, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var l = t.type;
        (bl(e, t), (e = t.pendingProps));
        var u = kr(t, Je.current);
        (Nr(t, n), (u = zs(null, t, l, e, u, n)));
        var f = As();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ut(l) ? ((f = !0), El(t)) : (f = !1),
              (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
              Cs(t),
              (u.updater = Bl),
              (t.stateNode = u),
              (u._reactInternals = t),
              Bs(t, l, e, n),
              (t = $s(null, t, l, !0, f, n)))
            : ((t.tag = 0), Oe && f && _s(t), lt(null, t, u, n), (t = t.child)),
          t
        );
      case 16:
        l = t.elementType;
        e: {
          switch (
            (bl(e, t),
            (e = t.pendingProps),
            (u = l._init),
            (l = u(l._payload)),
            (t.type = l),
            (u = t.tag = n0(l)),
            (e = bt(l, e)),
            u)
          ) {
            case 0:
              t = Ws(null, t, l, e, n);
              break e;
            case 1:
              t = Vc(null, t, l, e, n);
              break e;
            case 11:
              t = Ac(null, t, l, e, n);
              break e;
            case 14:
              t = jc(null, t, l, bt(l.type, e), n);
              break e;
          }
          throw Error(i(306, l, ""));
        }
        return t;
      case 0:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : bt(l, u)),
          Ws(e, t, l, u, n)
        );
      case 1:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : bt(l, u)),
          Vc(e, t, l, u, n)
        );
      case 3:
        e: {
          if ((Bc(t), e === null)) throw Error(i(387));
          ((l = t.pendingProps),
            (f = t.memoizedState),
            (u = f.element),
            nc(e, t),
            zl(t, l, null, n));
          var y = t.memoizedState;
          if (((l = y.element), f.isDehydrated))
            if (
              ((f = {
                element: l,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              ((u = Lr(Error(i(423)), t)), (t = Hc(e, t, l, n, u)));
              break e;
            } else if (l !== u) {
              ((u = Lr(Error(i(424)), t)), (t = Hc(e, t, l, n, u)));
              break e;
            } else
              for (
                St = Sn(t.stateNode.containerInfo.firstChild),
                  xt = t,
                  Oe = !0,
                  Ht = null,
                  n = ec(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Cr(), l === u)) {
              t = fn(e, t, n);
              break e;
            }
            lt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          lc(t),
          e === null && ws(t),
          (l = t.type),
          (u = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (y = u.children),
          cs(l, u) ? (y = null) : f !== null && cs(l, f) && (t.flags |= 32),
          Uc(e, t),
          lt(e, t, y, n),
          t.child
        );
      case 6:
        return (e === null && ws(t), null);
      case 13:
        return bc(e, t, n);
      case 4:
        return (
          Os(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Or(t, null, l, n)) : lt(e, t, l, n),
          t.child
        );
      case 11:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : bt(l, u)),
          Ac(e, t, l, u, n)
        );
      case 7:
        return (lt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (lt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (lt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((l = t.type._context),
            (u = t.pendingProps),
            (f = t.memoizedProps),
            (y = u.value),
            Ee(Ml, l._currentValue),
            (l._currentValue = y),
            f !== null)
          )
            if (Bt(f.value, y)) {
              if (f.children === u.children && !st.current) {
                t = fn(e, t, n);
                break e;
              }
            } else
              for (f = t.child, f !== null && (f.return = t); f !== null;) {
                var x = f.dependencies;
                if (x !== null) {
                  y = f.child;
                  for (var P = x.firstContext; P !== null;) {
                    if (P.context === l) {
                      if (f.tag === 1) {
                        ((P = an(-1, n & -n)), (P.tag = 2));
                        var j = f.updateQueue;
                        if (j !== null) {
                          j = j.shared;
                          var Y = j.pending;
                          (Y === null ? (P.next = P) : ((P.next = Y.next), (Y.next = P)),
                            (j.pending = P));
                        }
                      }
                      ((f.lanes |= n),
                        (P = f.alternate),
                        P !== null && (P.lanes |= n),
                        Es(f.return, n, t),
                        (x.lanes |= n));
                      break;
                    }
                    P = P.next;
                  }
                } else if (f.tag === 10) y = f.type === t.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((y = f.return), y === null)) throw Error(i(341));
                  ((y.lanes |= n),
                    (x = y.alternate),
                    x !== null && (x.lanes |= n),
                    Es(y, n, t),
                    (y = f.sibling));
                } else y = f.child;
                if (y !== null) y.return = f;
                else
                  for (y = f; y !== null;) {
                    if (y === t) {
                      y = null;
                      break;
                    }
                    if (((f = y.sibling), f !== null)) {
                      ((f.return = y.return), (y = f));
                      break;
                    }
                    y = y.return;
                  }
                f = y;
              }
          (lt(e, t, u.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (l = t.pendingProps.children),
          Nr(t, n),
          (u = Dt(u)),
          (l = l(u)),
          (t.flags |= 1),
          lt(e, t, l, n),
          t.child
        );
      case 14:
        return ((l = t.type), (u = bt(l, t.pendingProps)), (u = bt(l.type, u)), jc(e, t, l, u, n));
      case 15:
        return Ic(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : bt(l, u)),
          bl(e, t),
          (t.tag = 1),
          ut(l) ? ((e = !0), El(t)) : (e = !1),
          Nr(t, n),
          Oc(t, l, u),
          Bs(t, l, u, n),
          $s(null, t, l, !0, e, n)
        );
      case 19:
        return $c(e, t, n);
      case 22:
        return Fc(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function md(e, t) {
    return Qa(e, t);
  }
  function t0(e, t, n, l) {
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
  function jt(e, t, n, l) {
    return new t0(e, t, n, l);
  }
  function cu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function n0(e) {
    if (typeof e == "function") return cu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ee)) return 11;
      if (e === q) return 14;
    }
    return 2;
  }
  function Dn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = jt(e.tag, t, e.key, e.mode)),
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
  function eo(e, t, n, l, u, f) {
    var y = 2;
    if (((l = e), typeof e == "function")) cu(e) && (y = 1);
    else if (typeof e == "string") y = 5;
    else
      e: switch (e) {
        case I:
          return nr(n.children, u, f, t);
        case b:
          ((y = 8), (u |= 8));
          break;
        case V:
          return ((e = jt(12, n, t, u | 2)), (e.elementType = V), (e.lanes = f), e);
        case te:
          return ((e = jt(13, n, t, u)), (e.elementType = te), (e.lanes = f), e);
        case B:
          return ((e = jt(19, n, t, u)), (e.elementType = B), (e.lanes = f), e);
        case se:
          return to(n, u, f, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case G:
                y = 10;
                break e;
              case Z:
                y = 9;
                break e;
              case ee:
                y = 11;
                break e;
              case q:
                y = 14;
                break e;
              case ae:
                ((y = 16), (l = null));
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    return ((t = jt(y, n, t, u)), (t.elementType = e), (t.type = l), (t.lanes = f), t);
  }
  function nr(e, t, n, l) {
    return ((e = jt(7, e, l, t)), (e.lanes = n), e);
  }
  function to(e, t, n, l) {
    return (
      (e = jt(22, e, l, t)),
      (e.elementType = se),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function du(e, t, n) {
    return ((e = jt(6, e, null, t)), (e.lanes = n), e);
  }
  function pu(e, t, n) {
    return (
      (t = jt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function r0(e, t, n, l, u) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Vo(0)),
      (this.expirationTimes = Vo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Vo(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null));
  }
  function hu(e, t, n, l, u, f, y, x, P) {
    return (
      (e = new r0(e, t, n, x, P)),
      t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
      (f = jt(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: l,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Cs(f),
      e
    );
  }
  function i0(e, t, n) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: U,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function yd(e) {
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
            if (ut(t.type)) {
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
      if (ut(n)) return Wf(e, n, t);
    }
    return t;
  }
  function _d(e, t, n, l, u, f, y, x, P) {
    return (
      (e = hu(n, l, !0, e, u, f, y, x, P)),
      (e.context = yd(null)),
      (n = e.current),
      (l = ot()),
      (u = Mn(n)),
      (f = an(l, u)),
      (f.callback = t ?? null),
      Cn(n, f, u),
      (e.current.lanes = u),
      ni(e, u, l),
      ct(e, l),
      e
    );
  }
  function no(e, t, n, l) {
    var u = t.current,
      f = ot(),
      y = Mn(u);
    return (
      (n = yd(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = an(f, y)),
      (t.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (t.callback = l),
      (e = Cn(u, t, y)),
      e !== null && (Yt(e, u, y, f), Dl(e, u, y)),
      y
    );
  }
  function ro(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function gd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function mu(e, t) {
    (gd(e, t), (e = e.alternate) && gd(e, t));
  }
  function l0() {
    return null;
  }
  var vd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function yu(e) {
    this._internalRoot = e;
  }
  ((io.prototype.render = yu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      no(e, t, null, null);
    }),
    (io.prototype.unmount = yu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Jn(function () {
            no(null, e, null, null);
          }),
            (t[rn] = null));
        }
      }));
  function io(e) {
    this._internalRoot = e;
  }
  io.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = tf();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++);
      (vn.splice(n, 0, e), n === 0 && lf(e));
    }
  };
  function _u(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function lo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function wd() {}
  function o0(e, t, n, l, u) {
    if (u) {
      if (typeof l == "function") {
        var f = l;
        l = function () {
          var j = ro(y);
          f.call(j);
        };
      }
      var y = _d(t, l, e, 0, null, !1, !1, "", wd);
      return (
        (e._reactRootContainer = y),
        (e[rn] = y.current),
        yi(e.nodeType === 8 ? e.parentNode : e),
        Jn(),
        y
      );
    }
    for (; (u = e.lastChild);) e.removeChild(u);
    if (typeof l == "function") {
      var x = l;
      l = function () {
        var j = ro(P);
        x.call(j);
      };
    }
    var P = hu(e, 0, !1, null, null, !1, !1, "", wd);
    return (
      (e._reactRootContainer = P),
      (e[rn] = P.current),
      yi(e.nodeType === 8 ? e.parentNode : e),
      Jn(function () {
        no(t, P, n, l);
      }),
      P
    );
  }
  function oo(e, t, n, l, u) {
    var f = n._reactRootContainer;
    if (f) {
      var y = f;
      if (typeof u == "function") {
        var x = u;
        u = function () {
          var P = ro(y);
          x.call(P);
        };
      }
      no(t, y, e, u);
    } else y = o0(n, t, e, u, l);
    return ro(y);
  }
  ((Ja = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ti(t.pendingLanes);
          n !== 0 && (Bo(t, n | 1), ct(t, Ie()), (_e & 6) === 0 && ((Ar = Ie() + 500), En()));
        }
        break;
      case 13:
        (Jn(function () {
          var l = un(e, 1);
          if (l !== null) {
            var u = ot();
            Yt(l, e, 1, u);
          }
        }),
          mu(e, 1));
    }
  }),
    (Ho = function (e) {
      if (e.tag === 13) {
        var t = un(e, 134217728);
        if (t !== null) {
          var n = ot();
          Yt(t, e, 134217728, n);
        }
        mu(e, 134217728);
      }
    }),
    (ef = function (e) {
      if (e.tag === 13) {
        var t = Mn(e),
          n = un(e, t);
        if (n !== null) {
          var l = ot();
          Yt(n, e, t, l);
        }
        mu(e, t);
      }
    }),
    (tf = function () {
      return Se;
    }),
    (nf = function (e, t) {
      var n = Se;
      try {
        return ((Se = e), t());
      } finally {
        Se = n;
      }
    }),
    (zo = function (e, t, n) {
      switch (t) {
        case "input":
          if ((To(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var u = Pl(l);
                if (!u) throw Error(i(90));
                (Ta(l), To(l, u));
              }
            }
          }
          break;
        case "textarea":
          Ma(e, n);
          break;
        case "select":
          ((t = n.value), t != null && dr(e, !!n.multiple, t, !1));
      }
    }),
    (Va = uu),
    (Ba = Jn));
  var s0 = { usingClientEntryPoint: !1, Events: [vi, Sr, Pl, Fa, Ua, uu] },
    Di = {
      findFiberByHostInstance: $n,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    u0 = {
      bundleType: Di.bundleType,
      version: Di.version,
      rendererPackageName: Di.rendererPackageName,
      rendererConfig: Di.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: N.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = $a(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Di.findFiberByHostInstance || l0,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var so = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!so.isDisabled && so.supportsFiber)
      try {
        ((il = so.inject(u0)), (Xt = so));
      } catch {}
  }
  return (
    (dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s0),
    (dt.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_u(t)) throw Error(i(200));
      return i0(e, t, null, n);
    }),
    (dt.createRoot = function (e, t) {
      if (!_u(e)) throw Error(i(299));
      var n = !1,
        l = "",
        u = vd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = hu(e, 1, !1, null, null, n, !1, l, u)),
        (e[rn] = t.current),
        yi(e.nodeType === 8 ? e.parentNode : e),
        new yu(t)
      );
    }),
    (dt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return ((e = $a(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (dt.flushSync = function (e) {
      return Jn(e);
    }),
    (dt.hydrate = function (e, t, n) {
      if (!lo(t)) throw Error(i(200));
      return oo(null, e, t, !0, n);
    }),
    (dt.hydrateRoot = function (e, t, n) {
      if (!_u(e)) throw Error(i(405));
      var l = (n != null && n.hydratedSources) || null,
        u = !1,
        f = "",
        y = vd;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (u = !0),
          n.identifierPrefix !== void 0 && (f = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError)),
        (t = _d(t, null, e, 1, n ?? null, u, !1, f, y)),
        (e[rn] = t.current),
        yi(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          ((n = l[e]),
            (u = n._getVersion),
            (u = u(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, u])
              : t.mutableSourceEagerHydrationData.push(n, u));
      return new io(t);
    }),
    (dt.render = function (e, t, n) {
      if (!lo(t)) throw Error(i(200));
      return oo(null, e, t, !1, n);
    }),
    (dt.unmountComponentAtNode = function (e) {
      if (!lo(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (Jn(function () {
            oo(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[rn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (dt.unstable_batchedUpdates = uu),
    (dt.unstable_renderSubtreeIntoContainer = function (e, t, n, l) {
      if (!lo(n)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return oo(e, t, n, !1, l);
    }),
    (dt.version = "18.3.1-next-f1338f8080-20240426"),
    dt
  );
}
var Od;
function g0() {
  if (Od) return xu.exports;
  Od = 1;
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
  return (p(), (xu.exports = _0()), xu.exports);
}
var Rd;
function v0() {
  if (Rd) return uo;
  Rd = 1;
  var p = g0();
  return ((uo.createRoot = p.createRoot), (uo.hydrateRoot = p.hydrateRoot), uo);
}
var w0 = v0();
function fp(p) {
  const r = p.replace(/^\//, "").replace(/\/$/, "");
  return r ? `#/${r}` : "#/";
}
function sa(p) {
  const r = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return r
    ? r.startsWith("/")
      ? { kind: "route", path: r.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: r }
    : null;
}
function cp(p, r = "smooth") {
  if (typeof document > "u") return !1;
  const i = document.getElementById(p);
  return i ? (i.scrollIntoView({ behavior: r, block: "start" }), !0) : !1;
}
function Bi(p) {
  typeof window > "u" || (window.location.hash = fp(p));
}
function x0() {
  const p = sa();
  return (p == null ? void 0 : p.kind) === "route" ? p.path : "";
}
function dp() {
  if (typeof window > "u") return;
  const p = sa();
  (p == null ? void 0 : p.kind) === "section" && requestAnimationFrame(() => cp(p.id, "auto"));
}
function S0(p, r) {
  if (typeof window > "u") return () => {};
  const i = () => {
    const o = sa();
    if (!o) {
      p("");
      return;
    }
    if (o.kind === "route") {
      p(o.path);
      return;
    }
    (cp(o.id, "smooth"), p(""));
  };
  return (
    i(),
    window.addEventListener("hashchange", i),
    () => window.removeEventListener("hashchange", i)
  );
}
function P0(p = "") {
  const [r, i] = Ge.useState(() => (typeof window < "u" ? x0() : p));
  return (Ge.useEffect(() => S0(i), []), r || p);
}
function k0({ routes: p, defaultRoute: r = "", className: i }) {
  const o = P0(r);
  Ge.useEffect(() => {
    dp();
  }, []);
  const s = o in p ? o : r,
    a = p[s] ?? p[r];
  return A.jsx("div", { className: i, children: a });
}
function E0() {
  if (typeof window > "u") return !1;
  try {
    return window.__DRAFTLY_EDITOR_MODE__
      ? !0
      : new URLSearchParams(window.location.search).get("draftlyEditor") === "1";
  } catch {
    return !1;
  }
}
function T0() {
  if (typeof window > "u") return !1;
  try {
    return new URLSearchParams(window.location.search).get("draftlyGallery") === "1";
  } catch {
    return !1;
  }
}
function C0(p = !1) {
  const [r, i] = Ge.useState(p);
  return (
    Ge.useEffect(() => {
      (E0() || T0()) && i(!0);
      const o = () => i(!0);
      return (
        window.addEventListener("draftly-gallery-autoplay", o),
        () => window.removeEventListener("draftly-gallery-autoplay", o)
      );
    }, []),
    r
  );
}
function dn(p) {
  if (p === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return p;
}
function pp(p, r) {
  ((p.prototype = Object.create(r.prototype)), (p.prototype.constructor = p), (p.__proto__ = r));
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Ot = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
  Hi = { duration: 0.5, overwrite: !1, delay: 0 },
  ua,
  Ze,
  Re,
  Ft = 1e8,
  ke = 1 / Ft,
  Yu = Math.PI * 2,
  O0 = Yu / 4,
  R0 = 0,
  hp = Math.sqrt,
  N0 = Math.cos,
  M0 = Math.sin,
  Qe = function (r) {
    return typeof r == "string";
  },
  je = function (r) {
    return typeof r == "function";
  },
  hn = function (r) {
    return typeof r == "number";
  },
  aa = function (r) {
    return typeof r > "u";
  },
  nn = function (r) {
    return typeof r == "object";
  },
  mt = function (r) {
    return r !== !1;
  },
  fa = function () {
    return typeof window < "u";
  },
  ao = function (r) {
    return je(r) || Qe(r);
  },
  mp = (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  it = Array.isArray,
  L0 = /random\([^)]+\)/g,
  D0 = /,\s*/g,
  Nd = /(?:-?\.?\d|\.)+/gi,
  yp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Fr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  ku = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  _p = /[+-]=-?[.\d]+/,
  z0 = /[^,'"\[\]\s]+/gi,
  A0 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  De,
  Jt,
  Qu,
  ca,
  Rt = {},
  ho = {},
  gp,
  vp = function (r) {
    return (ho = br(r, Rt)) && vt;
  },
  da = function (r, i) {
    return console.warn(
      "Invalid property",
      r,
      "set to",
      i,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  bi = function (r, i) {
    return !i && console.warn(r);
  },
  wp = function (r, i) {
    return (r && (Rt[r] = i) && ho && (ho[r] = i)) || Rt;
  },
  Wi = function () {
    return 0;
  },
  j0 = { suppressEvents: !0, isStart: !0, kill: !1 },
  fo = { suppressEvents: !0, kill: !1 },
  I0 = { suppressEvents: !0 },
  pa = {},
  Fn = [],
  Xu = {},
  xp,
  kt = {},
  Eu = {},
  Md = 30,
  co = [],
  ha = "",
  ma = function (r) {
    var i = r[0],
      o,
      s;
    if ((nn(i) || je(i) || (r = [r]), !(o = (i._gsap || {}).harness))) {
      for (s = co.length; s-- && !co[s].targetTest(i););
      o = co[s];
    }
    for (s = r.length; s--;)
      (r[s] && (r[s]._gsap || (r[s]._gsap = new bp(r[s], o)))) || r.splice(s, 1);
    return r;
  },
  sr = function (r) {
    return r._gsap || ma(Ut(r))[0]._gsap;
  },
  Sp = function (r, i, o) {
    return (o = r[i]) && je(o) ? r[i]() : (aa(o) && r.getAttribute && r.getAttribute(i)) || o;
  },
  yt = function (r, i) {
    return (r = r.split(",")).forEach(i) || r;
  },
  Ue = function (r) {
    return Math.round(r * 1e5) / 1e5 || 0;
  },
  Le = function (r) {
    return Math.round(r * 1e7) / 1e7 || 0;
  },
  Vr = function (r, i) {
    var o = i.charAt(0),
      s = parseFloat(i.substr(2));
    return ((r = parseFloat(r)), o === "+" ? r + s : o === "-" ? r - s : o === "*" ? r * s : r / s);
  },
  F0 = function (r, i) {
    for (var o = i.length, s = 0; r.indexOf(i[s]) < 0 && ++s < o;);
    return s < o;
  },
  mo = function () {
    var r = Fn.length,
      i = Fn.slice(0),
      o,
      s;
    for (Xu = {}, Fn.length = 0, o = 0; o < r; o++)
      ((s = i[o]), s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0));
  },
  ya = function (r) {
    return !!(r._initted || r._startAt || r.add);
  },
  Pp = function (r, i, o, s) {
    (Fn.length && !Ze && mo(), r.render(i, o, !!(Ze && i < 0 && ya(r))), Fn.length && !Ze && mo());
  },
  kp = function (r) {
    var i = parseFloat(r);
    return (i || i === 0) && (r + "").match(z0).length < 2 ? i : Qe(r) ? r.trim() : r;
  },
  Ep = function (r) {
    return r;
  },
  Nt = function (r, i) {
    for (var o in i) o in r || (r[o] = i[o]);
    return r;
  },
  U0 = function (r) {
    return function (i, o) {
      for (var s in o) s in i || (s === "duration" && r) || s === "ease" || (i[s] = o[s]);
    };
  },
  br = function (r, i) {
    for (var o in i) r[o] = i[o];
    return r;
  },
  Ld = function p(r, i) {
    for (var o in i)
      o !== "__proto__" &&
        o !== "constructor" &&
        o !== "prototype" &&
        (r[o] = nn(i[o]) ? p(r[o] || (r[o] = {}), i[o]) : i[o]);
    return r;
  },
  yo = function (r, i) {
    var o = {},
      s;
    for (s in r) s in i || (o[s] = r[s]);
    return o;
  },
  Fi = function (r) {
    var i = r.parent || De,
      o = r.keyframes ? U0(it(r.keyframes)) : Nt;
    if (mt(r.inherit)) for (; i;) (o(r, i.vars.defaults), (i = i.parent || i._dp));
    return r;
  },
  V0 = function (r, i) {
    for (var o = r.length, s = o === i.length; s && o-- && r[o] === i[o];);
    return o < 0;
  },
  Tp = function (r, i, o, s, a) {
    var c = r[s],
      d;
    if (a) for (d = i[a]; c && c[a] > d;) c = c._prev;
    return (
      c ? ((i._next = c._next), (c._next = i)) : ((i._next = r[o]), (r[o] = i)),
      i._next ? (i._next._prev = i) : (r[s] = i),
      (i._prev = c),
      (i.parent = i._dp = r),
      i
    );
  },
  xo = function (r, i, o, s) {
    (o === void 0 && (o = "_first"), s === void 0 && (s = "_last"));
    var a = i._prev,
      c = i._next;
    (a ? (a._next = c) : r[o] === i && (r[o] = c),
      c ? (c._prev = a) : r[s] === i && (r[s] = a),
      (i._next = i._prev = i.parent = null));
  },
  Vn = function (r, i) {
    (r.parent && (!i || r.parent.autoRemoveChildren) && r.parent.remove && r.parent.remove(r),
      (r._act = 0));
  },
  ur = function (r, i) {
    if (r && (!i || i._end > r._dur || i._start < 0))
      for (var o = r; o;) ((o._dirty = 1), (o = o.parent));
    return r;
  },
  B0 = function (r) {
    for (var i = r.parent; i && i.parent;) ((i._dirty = 1), i.totalDuration(), (i = i.parent));
    return r;
  },
  Ku = function (r, i, o, s) {
    return (
      r._startAt &&
      (Ze
        ? r._startAt.revert(fo)
        : (r.vars.immediateRender && !r.vars.autoRevert) || r._startAt.render(i, !0, s))
    );
  },
  H0 = function p(r) {
    return !r || (r._ts && p(r.parent));
  },
  Dd = function (r) {
    return r._repeat ? Wr(r._tTime, (r = r.duration() + r._rDelay)) * r : 0;
  },
  Wr = function (r, i) {
    var o = Math.floor((r = Le(r / i)));
    return r && o === r ? o - 1 : o;
  },
  _o = function (r, i) {
    return (r - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
  },
  So = function (r) {
    return (r._end = Le(r._start + (r._tDur / Math.abs(r._ts || r._rts || ke) || 0)));
  },
  Po = function (r, i) {
    var o = r._dp;
    return (
      o &&
        o.smoothChildTiming &&
        r._ts &&
        ((r._start = Le(
          o._time -
            (r._ts > 0 ? i / r._ts : ((r._dirty ? r.totalDuration() : r._tDur) - i) / -r._ts),
        )),
        So(r),
        o._dirty || ur(o, r)),
      r
    );
  },
  Cp = function (r, i) {
    var o;
    if (
      ((i._time || (!i._dur && i._initted) || (i._start < r._time && (i._dur || !i.add))) &&
        ((o = _o(r.rawTime(), i)),
        (!i._dur || qi(0, i.totalDuration(), o) - i._tTime > ke) && i.render(o, !0)),
      ur(r, i)._dp && r._initted && r._time >= r._dur && r._ts)
    ) {
      if (r._dur < r.duration())
        for (o = r; o._dp;) (o.rawTime() >= 0 && o.totalTime(o._tTime), (o = o._dp));
      r._zTime = -ke;
    }
  },
  en = function (r, i, o, s) {
    return (
      i.parent && Vn(i),
      (i._start = Le((hn(o) ? o : o || r !== De ? It(r, o, i) : r._time) + i._delay)),
      (i._end = Le(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0))),
      Tp(r, i, "_first", "_last", r._sort ? "_start" : 0),
      qu(i) || (r._recent = i),
      s || Cp(r, i),
      r._ts < 0 && Po(r, r._tTime),
      r
    );
  },
  Op = function (r, i) {
    return (Rt.ScrollTrigger || da("scrollTrigger", i)) && Rt.ScrollTrigger.create(i, r);
  },
  Rp = function (r, i, o, s, a) {
    if ((ga(r, i, a), !r._initted)) return 1;
    if (
      !o &&
      r._pt &&
      !Ze &&
      ((r._dur && r.vars.lazy !== !1) || (!r._dur && r.vars.lazy)) &&
      xp !== Et.frame
    )
      return (Fn.push(r), (r._lazy = [a, s]), 1);
  },
  b0 = function p(r) {
    var i = r.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || p(i));
  },
  qu = function (r) {
    var i = r.data;
    return i === "isFromStart" || i === "isStart";
  },
  W0 = function (r, i, o, s) {
    var a = r.ratio,
      c =
        i < 0 ||
        (!i &&
          ((!r._start && b0(r) && !(!r._initted && qu(r))) ||
            ((r._ts < 0 || r._dp._ts < 0) && !qu(r))))
          ? 0
          : 1,
      d = r._rDelay,
      h = 0,
      m,
      _,
      g;
    if (
      (d &&
        r._repeat &&
        ((h = qi(0, r._tDur, i)),
        (_ = Wr(h, d)),
        r._yoyo && _ & 1 && (c = 1 - c),
        _ !== Wr(r._tTime, d) &&
          ((a = 1 - c), r.vars.repeatRefresh && r._initted && r.invalidate())),
      c !== a || Ze || s || r._zTime === ke || (!i && r._zTime))
    ) {
      if (!r._initted && Rp(r, i, s, o, h)) return;
      for (
        g = r._zTime,
          r._zTime = i || (o ? ke : 0),
          o || (o = i && !g),
          r.ratio = c,
          r._from && (c = 1 - c),
          r._time = 0,
          r._tTime = h,
          m = r._pt;
        m;
      )
        (m.r(c, m.d), (m = m._next));
      (i < 0 && Ku(r, i, o, !0),
        r._onUpdate && !o && Tt(r, "onUpdate"),
        h && r._repeat && !o && r.parent && Tt(r, "onRepeat"),
        (i >= r._tDur || i < 0) &&
          r.ratio === c &&
          (c && Vn(r, 1),
          !o && !Ze && (Tt(r, c ? "onComplete" : "onReverseComplete", !0), r._prom && r._prom())));
    } else r._zTime || (r._zTime = i);
  },
  $0 = function (r, i, o) {
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
    var a = r._repeat,
      c = Le(i) || 0,
      d = r._tTime / r._tDur;
    return (
      d && !s && (r._time *= c / r._dur),
      (r._dur = c),
      (r._tDur = a ? (a < 0 ? 1e10 : Le(c * (a + 1) + r._rDelay * a)) : c),
      d > 0 && !s && Po(r, (r._tTime = r._tDur * d)),
      r.parent && So(r),
      o || ur(r.parent, r),
      r
    );
  },
  zd = function (r) {
    return r instanceof ht ? ur(r) : $r(r, r._dur);
  },
  Y0 = { _start: 0, endTime: Wi, totalDuration: Wi },
  It = function p(r, i, o) {
    var s = r.labels,
      a = r._recent || Y0,
      c = r.duration() >= Ft ? a.endTime(!1) : r._dur,
      d,
      h,
      m;
    return Qe(i) && (isNaN(i) || i in s)
      ? ((h = i.charAt(0)),
        (m = i.substr(-1) === "%"),
        (d = i.indexOf("=")),
        h === "<" || h === ">"
          ? (d >= 0 && (i = i.replace(/=/, "")),
            (h === "<" ? a._start : a.endTime(a._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0) * (m ? (d < 0 ? a : o).totalDuration() / 100 : 1))
          : d < 0
            ? (i in s || (s[i] = c), s[i])
            : ((h = parseFloat(i.charAt(d - 1) + i.substr(d + 1))),
              m && o && (h = (h / 100) * (it(o) ? o[0] : o).totalDuration()),
              d > 1 ? p(r, i.substr(0, d - 1), o) + h : c + h))
      : i == null
        ? c
        : +i;
  },
  Ui = function (r, i, o) {
    var s = hn(i[1]),
      a = (s ? 2 : 1) + (r < 2 ? 0 : 1),
      c = i[a],
      d,
      h;
    if ((s && (c.duration = i[1]), (c.parent = o), r)) {
      for (d = c, h = o; h && !("immediateRender" in d);)
        ((d = h.vars.defaults || {}), (h = mt(h.vars.inherit) && h.parent));
      ((c.immediateRender = mt(d.immediateRender)),
        r < 2 ? (c.runBackwards = 1) : (c.startAt = i[a - 1]));
    }
    return new Be(i[0], c, i[a + 1]);
  },
  bn = function (r, i) {
    return r || r === 0 ? i(r) : i;
  },
  qi = function (r, i, o) {
    return o < r ? r : o > i ? i : o;
  },
  rt = function (r, i) {
    return !Qe(r) || !(i = A0.exec(r)) ? "" : i[1];
  },
  Q0 = function (r, i, o) {
    return bn(o, function (s) {
      return qi(r, i, s);
    });
  },
  Gu = [].slice,
  Np = function (r, i) {
    return (
      r &&
      nn(r) &&
      "length" in r &&
      ((!i && !r.length) || (r.length - 1 in r && nn(r[0]))) &&
      !r.nodeType &&
      r !== Jt
    );
  },
  X0 = function (r, i, o) {
    return (
      o === void 0 && (o = []),
      r.forEach(function (s) {
        var a;
        return (Qe(s) && !i) || Np(s, 1) ? (a = o).push.apply(a, Ut(s)) : o.push(s);
      }) || o
    );
  },
  Ut = function (r, i, o) {
    return Re && !i && Re.selector
      ? Re.selector(r)
      : Qe(r) && !o && (Qu || !Yr())
        ? Gu.call((i || ca).querySelectorAll(r), 0)
        : it(r)
          ? X0(r, o)
          : Np(r)
            ? Gu.call(r, 0)
            : r
              ? [r]
              : [];
  },
  Zu = function (r) {
    return (
      (r = Ut(r)[0] || bi("Invalid scope") || {}),
      function (i) {
        var o = r.current || r.nativeElement || r;
        return Ut(
          i,
          o.querySelectorAll ? o : o === r ? bi("Invalid scope") || ca.createElement("div") : r,
        );
      }
    );
  },
  Mp = function (r) {
    return r.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Lp = function (r) {
    if (je(r)) return r;
    var i = nn(r) ? r : { each: r },
      o = ar(i.ease),
      s = i.from || 0,
      a = parseFloat(i.base) || 0,
      c = {},
      d = s > 0 && s < 1,
      h = isNaN(s) || d,
      m = i.axis,
      _ = s,
      g = s;
    return (
      Qe(s)
        ? (_ = g = { center: 0.5, edges: 0.5, end: 1 }[s] || 0)
        : !d && h && ((_ = s[0]), (g = s[1])),
      function (w, S, L) {
        var v = (L || i).length,
          R = c[v],
          C,
          M,
          O,
          N,
          T,
          U,
          I,
          b,
          V;
        if (!R) {
          if (((V = i.grid === "auto" ? 0 : (i.grid || [1, Ft])[1]), !V)) {
            for (I = -Ft; I < (I = L[V++].getBoundingClientRect().left) && V < v;);
            V < v && V--;
          }
          for (
            R = c[v] = [],
              C = h ? Math.min(V, v) * _ - 0.5 : s % V,
              M = V === Ft ? 0 : h ? (v * g) / V - 0.5 : (s / V) | 0,
              I = 0,
              b = Ft,
              U = 0;
            U < v;
            U++
          )
            ((O = (U % V) - C),
              (N = M - ((U / V) | 0)),
              (R[U] = T = m ? Math.abs(m === "y" ? N : O) : hp(O * O + N * N)),
              T > I && (I = T),
              T < b && (b = T));
          (s === "random" && Mp(R),
            (R.max = I - b),
            (R.min = b),
            (R.v = v =
              (parseFloat(i.amount) ||
                parseFloat(i.each) *
                  (V > v ? v - 1 : m ? (m === "y" ? v / V : V) : Math.max(V, v / V)) ||
                0) * (s === "edges" ? -1 : 1)),
            (R.b = v < 0 ? a - v : a),
            (R.u = rt(i.amount || i.each) || 0),
            (o = o && v < 0 ? sy(o) : o));
        }
        return ((v = (R[w] - R.min) / R.max || 0), Le(R.b + (o ? o(v) : v) * R.v) + R.u);
      }
    );
  },
  Ju = function (r) {
    var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
    return function (o) {
      var s = Le(Math.round(parseFloat(o) / r) * r * i);
      return (s - (s % 1)) / i + (hn(o) ? 0 : rt(o));
    };
  },
  Dp = function (r, i) {
    var o = it(r),
      s,
      a;
    return (
      !o &&
        nn(r) &&
        ((s = o = r.radius || Ft),
        r.values ? ((r = Ut(r.values)), (a = !hn(r[0])) && (s *= s)) : (r = Ju(r.increment))),
      bn(
        i,
        o
          ? je(r)
            ? function (c) {
                return ((a = r(c)), Math.abs(a - c) <= s ? a : c);
              }
            : function (c) {
                for (
                  var d = parseFloat(a ? c.x : c),
                    h = parseFloat(a ? c.y : 0),
                    m = Ft,
                    _ = 0,
                    g = r.length,
                    w,
                    S;
                  g--;
                )
                  (a
                    ? ((w = r[g].x - d), (S = r[g].y - h), (w = w * w + S * S))
                    : (w = Math.abs(r[g] - d)),
                    w < m && ((m = w), (_ = g)));
                return ((_ = !s || m <= s ? r[_] : c), a || _ === c || hn(c) ? _ : _ + rt(c));
              }
          : Ju(r),
      )
    );
  },
  zp = function (r, i, o, s) {
    return bn(it(r) ? !i : o === !0 ? !!(o = 0) : !s, function () {
      return it(r)
        ? r[~~(Math.random() * r.length)]
        : (o = o || 1e-5) &&
            (s = o < 1 ? Math.pow(10, (o + "").length - 2) : 1) &&
            Math.floor(Math.round((r - o / 2 + Math.random() * (i - r + o * 0.99)) / o) * o * s) /
              s;
    });
  },
  K0 = function () {
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
    return function (s) {
      return i.reduce(function (a, c) {
        return c(a);
      }, s);
    };
  },
  q0 = function (r, i) {
    return function (o) {
      return r(parseFloat(o)) + (i || rt(o));
    };
  },
  G0 = function (r, i, o) {
    return jp(r, i, 0, 1, o);
  },
  Ap = function (r, i, o) {
    return bn(o, function (s) {
      return r[~~i(s)];
    });
  },
  Z0 = function p(r, i, o) {
    var s = i - r;
    return it(r)
      ? Ap(r, p(0, r.length), i)
      : bn(o, function (a) {
          return ((s + ((a - r) % s)) % s) + r;
        });
  },
  J0 = function p(r, i, o) {
    var s = i - r,
      a = s * 2;
    return it(r)
      ? Ap(r, p(0, r.length - 1), i)
      : bn(o, function (c) {
          return ((c = (a + ((c - r) % a)) % a || 0), r + (c > s ? a - c : c));
        });
  },
  $i = function (r) {
    return r.replace(L0, function (i) {
      var o = i.indexOf("[") + 1,
        s = i.substring(o || 7, o ? i.indexOf("]") : i.length - 1).split(D0);
      return zp(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5);
    });
  },
  jp = function (r, i, o, s, a) {
    var c = i - r,
      d = s - o;
    return bn(a, function (h) {
      return o + (((h - r) / c) * d || 0);
    });
  },
  ey = function p(r, i, o, s) {
    var a = isNaN(r + i)
      ? 0
      : function (S) {
          return (1 - S) * r + S * i;
        };
    if (!a) {
      var c = Qe(r),
        d = {},
        h,
        m,
        _,
        g,
        w;
      if ((o === !0 && (s = 1) && (o = null), c)) ((r = { p: r }), (i = { p: i }));
      else if (it(r) && !it(i)) {
        for (_ = [], g = r.length, w = g - 2, m = 1; m < g; m++) _.push(p(r[m - 1], r[m]));
        (g--,
          (a = function (L) {
            L *= g;
            var v = Math.min(w, ~~L);
            return _[v](L - v);
          }),
          (o = i));
      } else s || (r = br(it(r) ? [] : {}, r));
      if (!_) {
        for (h in i) _a.call(d, r, h, "get", i[h]);
        a = function (L) {
          return xa(L, d) || (c ? r.p : r);
        };
      }
    }
    return bn(o, a);
  },
  Ad = function (r, i, o) {
    var s = r.labels,
      a = Ft,
      c,
      d,
      h;
    for (c in s) ((d = s[c] - i), d < 0 == !!o && d && a > (d = Math.abs(d)) && ((h = c), (a = d)));
    return h;
  },
  Tt = function (r, i, o) {
    var s = r.vars,
      a = s[i],
      c = Re,
      d = r._ctx,
      h,
      m,
      _;
    if (a)
      return (
        (h = s[i + "Params"]),
        (m = s.callbackScope || r),
        o && Fn.length && mo(),
        d && (Re = d),
        (_ = h ? a.apply(m, h) : a.call(m)),
        (Re = c),
        _
      );
  },
  ji = function (r) {
    return (
      Vn(r),
      r.scrollTrigger && r.scrollTrigger.kill(!!Ze),
      r.progress() < 1 && Tt(r, "onInterrupt"),
      r
    );
  },
  Ur,
  Ip = [],
  Fp = function (r) {
    if (r)
      if (((r = (!r.name && r.default) || r), fa() || r.headless)) {
        var i = r.name,
          o = je(r),
          s =
            i && !o && r.init
              ? function () {
                  this._props = [];
                }
              : r,
          a = { init: Wi, render: xa, add: _a, kill: _y, modifier: yy, rawVars: 0 },
          c = { targetTest: 0, get: 0, getSetter: wa, aliases: {}, register: 0 };
        if ((Yr(), r !== s)) {
          if (kt[i]) return;
          (Nt(s, Nt(yo(r, a), c)),
            br(s.prototype, br(a, yo(r, c))),
            (kt[(s.prop = i)] = s),
            r.targetTest && (co.push(s), (pa[i] = 1)),
            (i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin"));
        }
        (wp(i, s), r.register && r.register(vt, s, _t));
      } else Ip.push(r);
  },
  Pe = 255,
  Ii = {
    aqua: [0, Pe, Pe],
    lime: [0, Pe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Pe],
    navy: [0, 0, 128],
    white: [Pe, Pe, Pe],
    olive: [128, 128, 0],
    yellow: [Pe, Pe, 0],
    orange: [Pe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Pe, 0, 0],
    pink: [Pe, 192, 203],
    cyan: [0, Pe, Pe],
    transparent: [Pe, Pe, Pe, 0],
  },
  Tu = function (r, i, o) {
    return (
      (r += r < 0 ? 1 : r > 1 ? -1 : 0),
      ((r * 6 < 1
        ? i + (o - i) * r * 6
        : r < 0.5
          ? o
          : r * 3 < 2
            ? i + (o - i) * (2 / 3 - r) * 6
            : i) *
        Pe +
        0.5) |
        0
    );
  },
  Up = function (r, i, o) {
    var s = r ? (hn(r) ? [r >> 16, (r >> 8) & Pe, r & Pe] : 0) : Ii.black,
      a,
      c,
      d,
      h,
      m,
      _,
      g,
      w,
      S,
      L;
    if (!s) {
      if ((r.substr(-1) === "," && (r = r.substr(0, r.length - 1)), Ii[r])) s = Ii[r];
      else if (r.charAt(0) === "#") {
        if (
          (r.length < 6 &&
            ((a = r.charAt(1)),
            (c = r.charAt(2)),
            (d = r.charAt(3)),
            (r = "#" + a + a + c + c + d + d + (r.length === 5 ? r.charAt(4) + r.charAt(4) : ""))),
          r.length === 9)
        )
          return (
            (s = parseInt(r.substr(1, 6), 16)),
            [s >> 16, (s >> 8) & Pe, s & Pe, parseInt(r.substr(7), 16) / 255]
          );
        ((r = parseInt(r.substr(1), 16)), (s = [r >> 16, (r >> 8) & Pe, r & Pe]));
      } else if (r.substr(0, 3) === "hsl") {
        if (((s = L = r.match(Nd)), !i))
          ((h = (+s[0] % 360) / 360),
            (m = +s[1] / 100),
            (_ = +s[2] / 100),
            (c = _ <= 0.5 ? _ * (m + 1) : _ + m - _ * m),
            (a = _ * 2 - c),
            s.length > 3 && (s[3] *= 1),
            (s[0] = Tu(h + 1 / 3, a, c)),
            (s[1] = Tu(h, a, c)),
            (s[2] = Tu(h - 1 / 3, a, c)));
        else if (~r.indexOf("=")) return ((s = r.match(yp)), o && s.length < 4 && (s[3] = 1), s);
      } else s = r.match(Nd) || Ii.transparent;
      s = s.map(Number);
    }
    return (
      i &&
        !L &&
        ((a = s[0] / Pe),
        (c = s[1] / Pe),
        (d = s[2] / Pe),
        (g = Math.max(a, c, d)),
        (w = Math.min(a, c, d)),
        (_ = (g + w) / 2),
        g === w
          ? (h = m = 0)
          : ((S = g - w),
            (m = _ > 0.5 ? S / (2 - g - w) : S / (g + w)),
            (h =
              g === a
                ? (c - d) / S + (c < d ? 6 : 0)
                : g === c
                  ? (d - a) / S + 2
                  : (a - c) / S + 4),
            (h *= 60)),
        (s[0] = ~~(h + 0.5)),
        (s[1] = ~~(m * 100 + 0.5)),
        (s[2] = ~~(_ * 100 + 0.5))),
      o && s.length < 4 && (s[3] = 1),
      s
    );
  },
  Vp = function (r) {
    var i = [],
      o = [],
      s = -1;
    return (
      r.split(Un).forEach(function (a) {
        var c = a.match(Fr) || [];
        (i.push.apply(i, c), o.push((s += c.length + 1)));
      }),
      (i.c = o),
      i
    );
  },
  jd = function (r, i, o) {
    var s = "",
      a = (r + s).match(Un),
      c = i ? "hsla(" : "rgba(",
      d = 0,
      h,
      m,
      _,
      g;
    if (!a) return r;
    if (
      ((a = a.map(function (w) {
        return (
          (w = Up(w, i, 1)) &&
          c + (i ? w[0] + "," + w[1] + "%," + w[2] + "%," + w[3] : w.join(",")) + ")"
        );
      })),
      o && ((_ = Vp(r)), (h = o.c), h.join(s) !== _.c.join(s)))
    )
      for (m = r.replace(Un, "1").split(Fr), g = m.length - 1; d < g; d++)
        s +=
          m[d] +
          (~h.indexOf(d) ? a.shift() || c + "0,0,0,0)" : (_.length ? _ : a.length ? a : o).shift());
    if (!m) for (m = r.split(Un), g = m.length - 1; d < g; d++) s += m[d] + a[d];
    return s + m[g];
  },
  Un = (function () {
    var p = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      r;
    for (r in Ii) p += "|" + r + "\\b";
    return new RegExp(p + ")", "gi");
  })(),
  ty = /hsl[a]?\(/,
  Bp = function (r) {
    var i = r.join(" "),
      o;
    if (((Un.lastIndex = 0), Un.test(i)))
      return ((o = ty.test(i)), (r[1] = jd(r[1], o)), (r[0] = jd(r[0], o, Vp(r[1]))), !0);
  },
  Yi,
  Et = (function () {
    var p = Date.now,
      r = 500,
      i = 33,
      o = p(),
      s = o,
      a = 1e3 / 240,
      c = a,
      d = [],
      h,
      m,
      _,
      g,
      w,
      S,
      L = function v(R) {
        var C = p() - s,
          M = R === !0,
          O,
          N,
          T,
          U;
        if (
          ((C > r || C < 0) && (o += C - i),
          (s += C),
          (T = s - o),
          (O = T - c),
          (O > 0 || M) &&
            ((U = ++g.frame),
            (w = T - g.time * 1e3),
            (g.time = T = T / 1e3),
            (c += O + (O >= a ? 4 : a - O)),
            (N = 1)),
          M || (h = m(v)),
          N)
        )
          for (S = 0; S < d.length; S++) d[S](T, w, U, R);
      };
    return (
      (g = {
        time: 0,
        frame: 0,
        tick: function () {
          L(!0);
        },
        deltaRatio: function (R) {
          return w / (1e3 / (R || 60));
        },
        wake: function () {
          gp &&
            (!Qu &&
              fa() &&
              ((Jt = Qu = window),
              (ca = Jt.document || {}),
              (Rt.gsap = vt),
              (Jt.gsapVersions || (Jt.gsapVersions = [])).push(vt.version),
              vp(ho || Jt.GreenSockGlobals || (!Jt.gsap && Jt) || {}),
              Ip.forEach(Fp)),
            (_ = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            h && g.sleep(),
            (m =
              _ ||
              function (R) {
                return setTimeout(R, (c - g.time * 1e3 + 1) | 0);
              }),
            (Yi = 1),
            L(2));
        },
        sleep: function () {
          ((_ ? cancelAnimationFrame : clearTimeout)(h), (Yi = 0), (m = Wi));
        },
        lagSmoothing: function (R, C) {
          ((r = R || 1 / 0), (i = Math.min(C || 33, r)));
        },
        fps: function (R) {
          ((a = 1e3 / (R || 240)), (c = g.time * 1e3 + a));
        },
        add: function (R, C, M) {
          var O = C
            ? function (N, T, U, I) {
                (R(N, T, U, I), g.remove(O));
              }
            : R;
          return (g.remove(R), d[M ? "unshift" : "push"](O), Yr(), O);
        },
        remove: function (R, C) {
          ~(C = d.indexOf(R)) && d.splice(C, 1) && S >= C && S--;
        },
        _listeners: d,
      }),
      g
    );
  })(),
  Yr = function () {
    return !Yi && Et.wake();
  },
  ye = {},
  ny = /^[\d.\-M][\d.\-,\s]/,
  ry = /["']/g,
  iy = function (r) {
    for (
      var i = {}, o = r.substr(1, r.length - 3).split(":"), s = o[0], a = 1, c = o.length, d, h, m;
      a < c;
      a++
    )
      ((h = o[a]),
        (d = a !== c - 1 ? h.lastIndexOf(",") : h.length),
        (m = h.substr(0, d)),
        (i[s] = isNaN(m) ? m.replace(ry, "").trim() : +m),
        (s = h.substr(d + 1).trim()));
    return i;
  },
  ly = function (r) {
    var i = r.indexOf("(") + 1,
      o = r.indexOf(")"),
      s = r.indexOf("(", i);
    return r.substring(i, ~s && s < o ? r.indexOf(")", o + 1) : o);
  },
  oy = function (r) {
    var i = (r + "").split("("),
      o = ye[i[0]];
    return o && i.length > 1 && o.config
      ? o.config.apply(null, ~r.indexOf("{") ? [iy(i[1])] : ly(r).split(",").map(kp))
      : ye._CE && ny.test(r)
        ? ye._CE("", r)
        : o;
  },
  sy = function (r) {
    return function (i) {
      return 1 - r(1 - i);
    };
  },
  ar = function (r, i) {
    return (r && (je(r) ? r : ye[r] || oy(r))) || i;
  },
  cr = function (r, i, o, s) {
    (o === void 0 &&
      (o = function (h) {
        return 1 - i(1 - h);
      }),
      s === void 0 &&
        (s = function (h) {
          return h < 0.5 ? i(h * 2) / 2 : 1 - i((1 - h) * 2) / 2;
        }));
    var a = { easeIn: i, easeOut: o, easeInOut: s },
      c;
    return (
      yt(r, function (d) {
        ((ye[d] = Rt[d] = a), (ye[(c = d.toLowerCase())] = o));
        for (var h in a)
          ye[c + (h === "easeIn" ? ".in" : h === "easeOut" ? ".out" : ".inOut")] = ye[d + "." + h] =
            a[h];
      }),
      a
    );
  },
  Hp = function (r) {
    return function (i) {
      return i < 0.5 ? (1 - r(1 - i * 2)) / 2 : 0.5 + r((i - 0.5) * 2) / 2;
    };
  },
  Cu = function p(r, i, o) {
    var s = i >= 1 ? i : 1,
      a = (o || (r ? 0.3 : 0.45)) / (i < 1 ? i : 1),
      c = (a / Yu) * (Math.asin(1 / s) || 0),
      d = function (_) {
        return _ === 1 ? 1 : s * Math.pow(2, -10 * _) * M0((_ - c) * a) + 1;
      },
      h =
        r === "out"
          ? d
          : r === "in"
            ? function (m) {
                return 1 - d(1 - m);
              }
            : Hp(d);
    return (
      (a = Yu / a),
      (h.config = function (m, _) {
        return p(r, m, _);
      }),
      h
    );
  },
  Ou = function p(r, i) {
    i === void 0 && (i = 1.70158);
    var o = function (c) {
        return c ? --c * c * ((i + 1) * c + i) + 1 : 0;
      },
      s =
        r === "out"
          ? o
          : r === "in"
            ? function (a) {
                return 1 - o(1 - a);
              }
            : Hp(o);
    return (
      (s.config = function (a) {
        return p(r, a);
      }),
      s
    );
  };
yt("Linear,Quad,Cubic,Quart,Quint,Strong", function (p, r) {
  var i = r < 5 ? r + 1 : r;
  cr(
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
ye.Linear.easeNone = ye.none = ye.Linear.easeIn;
cr("Elastic", Cu("in"), Cu("out"), Cu());
(function (p, r) {
  var i = 1 / r,
    o = 2 * i,
    s = 2.5 * i,
    a = function (d) {
      return d < i
        ? p * d * d
        : d < o
          ? p * Math.pow(d - 1.5 / r, 2) + 0.75
          : d < s
            ? p * (d -= 2.25 / r) * d + 0.9375
            : p * Math.pow(d - 2.625 / r, 2) + 0.984375;
    };
  cr(
    "Bounce",
    function (c) {
      return 1 - a(1 - c);
    },
    a,
  );
})(7.5625, 2.75);
cr("Expo", function (p) {
  return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
});
cr("Circ", function (p) {
  return -(hp(1 - p * p) - 1);
});
cr("Sine", function (p) {
  return p === 1 ? 1 : -N0(p * O0) + 1;
});
cr("Back", Ou("in"), Ou("out"), Ou());
ye.SteppedEase =
  ye.steps =
  Rt.SteppedEase =
    {
      config: function (r, i) {
        r === void 0 && (r = 1);
        var o = 1 / r,
          s = r + (i ? 0 : 1),
          a = i ? 1 : 0,
          c = 1 - ke;
        return function (d) {
          return (((s * qi(0, c, d)) | 0) + a) * o;
        };
      },
    };
Hi.ease = ye["quad.out"];
yt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (p) {
  return (ha += p + "," + p + "Params,");
});
var bp = function (r, i) {
    ((this.id = R0++),
      (r._gsap = this),
      (this.target = r),
      (this.harness = i),
      (this.get = i ? i.get : Sp),
      (this.set = i ? i.getSetter : wa));
  },
  Qi = (function () {
    function p(i) {
      ((this.vars = i),
        (this._delay = +i.delay || 0),
        (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
          ((this._rDelay = i.repeatDelay || 0), (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
        (this._ts = 1),
        $r(this, +i.duration, 1, 1),
        (this.data = i.data),
        Re && ((this._ctx = Re), Re.data.push(this)),
        Yi || Et.wake());
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
        if ((Yr(), !arguments.length)) return this._tTime;
        var a = this._dp;
        if (a && a.smoothChildTiming && this._ts) {
          for (Po(this, o), !a._dp || a.parent || Cp(a, this); a && a.parent;)
            (a.parent._time !==
              a._start +
                (a._ts >= 0 ? a._tTime / a._ts : (a.totalDuration() - a._tTime) / -a._ts) &&
              a.totalTime(a._tTime, !0),
              (a = a.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && o < this._tDur) || (this._ts < 0 && o > 0) || (!this._tDur && !o)) &&
            en(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== o ||
            (!this._dur && !s) ||
            (this._initted && Math.abs(this._zTime) === ke) ||
            (!this._initted && this._dur && o) ||
            (!o && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = o), Pp(this, o, s)),
          this
        );
      }),
      (r.time = function (o, s) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), o + Dd(this)) % (this._dur + this._rDelay) ||
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
              this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - o : o) + Dd(this),
              s,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (r.iteration = function (o, s) {
        var a = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (o - 1) * a, s)
          : this._repeat
            ? Wr(this._tTime, a) + 1
            : 1;
      }),
      (r.timeScale = function (o, s) {
        if (!arguments.length) return this._rts === -ke ? 0 : this._rts;
        if (this._rts === o) return this;
        var a = this.parent && this._ts ? _o(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +o || 0),
          (this._ts = this._ps || o === -ke ? 0 : this._rts),
          this.totalTime(qi(-Math.abs(this._delay), this.totalDuration(), a), s !== !1),
          So(this),
          B0(this)
        );
      }),
      (r.paused = function (o) {
        return arguments.length
          ? (this._ps !== o &&
              ((this._ps = o),
              o
                ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Yr(),
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
          this._start = Le(o);
          var s = this.parent || this._dp;
          return (s && (s._sort || !this.parent) && en(s, this, this._start - this._delay), this);
        }
        return this._start;
      }),
      (r.endTime = function (o) {
        return (
          this._start + (mt(o) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        );
      }),
      (r.rawTime = function (o) {
        var s = this.parent || this._dp;
        return s
          ? o && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? _o(s.rawTime(o), this)
              : this._tTime
          : this._tTime;
      }),
      (r.revert = function (o) {
        o === void 0 && (o = I0);
        var s = Ze;
        return (
          (Ze = o),
          ya(this) &&
            (this.timeline && this.timeline.revert(o), this.totalTime(-0.01, o.suppressEvents)),
          this.data !== "nested" && o.kill !== !1 && this.kill(),
          (Ze = s),
          this
        );
      }),
      (r.globalTime = function (o) {
        for (var s = this, a = arguments.length ? o : s.rawTime(); s;)
          ((a = s._start + a / (Math.abs(s._ts) || 1)), (s = s._dp));
        return !this.parent && this._sat ? this._sat.globalTime(o) : a;
      }),
      (r.repeat = function (o) {
        return arguments.length
          ? ((this._repeat = o === 1 / 0 ? -2 : o), zd(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (r.repeatDelay = function (o) {
        if (arguments.length) {
          var s = this._time;
          return ((this._rDelay = o), zd(this), s ? this.time(s) : this);
        }
        return this._rDelay;
      }),
      (r.yoyo = function (o) {
        return arguments.length ? ((this._yoyo = o), this) : this._yoyo;
      }),
      (r.seek = function (o, s) {
        return this.totalTime(It(this, o), mt(s));
      }),
      (r.restart = function (o, s) {
        return (
          this.play().totalTime(o ? -this._delay : 0, mt(s)),
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
          a;
        return !!(
          !o ||
          (this._ts &&
            this._initted &&
            o.isActive() &&
            (a = o.rawTime(!0)) >= s &&
            a < this.endTime(!0) - ke)
        );
      }),
      (r.eventCallback = function (o, s, a) {
        var c = this.vars;
        return arguments.length > 1
          ? (s
              ? ((c[o] = s), a && (c[o + "Params"] = a), o === "onUpdate" && (this._onUpdate = s))
              : delete c[o],
            this)
          : c[o];
      }),
      (r.then = function (o) {
        var s = this,
          a = s._prom;
        return new Promise(function (c) {
          var d = je(o) ? o : Ep,
            h = function () {
              var _ = s.then;
              ((s.then = null),
                a && a(),
                je(d) && (d = d(s)) && (d.then || d === s) && (s.then = _),
                c(d),
                (s.then = _));
            };
          (s._initted && s.totalProgress() === 1 && s._ts >= 0) || (!s._tTime && s._ts < 0)
            ? h()
            : (s._prom = h);
        });
      }),
      (r.kill = function () {
        ji(this);
      }),
      p
    );
  })();
Nt(Qi.prototype, {
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
var ht = (function (p) {
  pp(r, p);
  function r(o, s) {
    var a;
    return (
      o === void 0 && (o = {}),
      (a = p.call(this, o) || this),
      (a.labels = {}),
      (a.smoothChildTiming = !!o.smoothChildTiming),
      (a.autoRemoveChildren = !!o.autoRemoveChildren),
      (a._sort = mt(o.sortChildren)),
      De && en(o.parent || De, dn(a), s),
      o.reversed && a.reverse(),
      o.paused && a.paused(!0),
      o.scrollTrigger && Op(dn(a), o.scrollTrigger),
      a
    );
  }
  var i = r.prototype;
  return (
    (i.to = function (s, a, c) {
      return (Ui(0, arguments, this), this);
    }),
    (i.from = function (s, a, c) {
      return (Ui(1, arguments, this), this);
    }),
    (i.fromTo = function (s, a, c, d) {
      return (Ui(2, arguments, this), this);
    }),
    (i.set = function (s, a, c) {
      return (
        (a.duration = 0),
        (a.parent = this),
        Fi(a).repeatDelay || (a.repeat = 0),
        (a.immediateRender = !!a.immediateRender),
        new Be(s, a, It(this, c), 1),
        this
      );
    }),
    (i.call = function (s, a, c) {
      return en(this, Be.delayedCall(0, s, a), c);
    }),
    (i.staggerTo = function (s, a, c, d, h, m, _) {
      return (
        (c.duration = a),
        (c.stagger = c.stagger || d),
        (c.onComplete = m),
        (c.onCompleteParams = _),
        (c.parent = this),
        new Be(s, c, It(this, h)),
        this
      );
    }),
    (i.staggerFrom = function (s, a, c, d, h, m, _) {
      return (
        (c.runBackwards = 1),
        (Fi(c).immediateRender = mt(c.immediateRender)),
        this.staggerTo(s, a, c, d, h, m, _)
      );
    }),
    (i.staggerFromTo = function (s, a, c, d, h, m, _, g) {
      return (
        (d.startAt = c),
        (Fi(d).immediateRender = mt(d.immediateRender)),
        this.staggerTo(s, a, d, h, m, _, g)
      );
    }),
    (i.render = function (s, a, c) {
      var d = this._time,
        h = this._dirty ? this.totalDuration() : this._tDur,
        m = this._dur,
        _ = s <= 0 ? 0 : Le(s),
        g = this._zTime < 0 != s < 0 && (this._initted || !m),
        w,
        S,
        L,
        v,
        R,
        C,
        M,
        O,
        N,
        T,
        U,
        I;
      if ((this !== De && _ > h && s >= 0 && (_ = h), _ !== this._tTime || c || g)) {
        if (
          (d !== this._time && m && ((_ += this._time - d), (s += this._time - d)),
          (w = _),
          (N = this._start),
          (O = this._ts),
          (C = !O),
          g && (m || (d = this._zTime), (s || !a) && (this._zTime = s)),
          this._repeat)
        ) {
          if (((U = this._yoyo), (R = m + this._rDelay), this._repeat < -1 && s < 0))
            return this.totalTime(R * 100 + s, a, c);
          if (
            ((w = Le(_ % R)),
            _ === h
              ? ((v = this._repeat), (w = m))
              : ((T = Le(_ / R)), (v = ~~T), v && v === T && ((w = m), v--), w > m && (w = m)),
            (T = Wr(this._tTime, R)),
            !d && this._tTime && T !== v && this._tTime - T * R - this._dur <= 0 && (T = v),
            U && v & 1 && ((w = m - w), (I = 1)),
            v !== T && !this._lock)
          ) {
            var b = U && T & 1,
              V = b === (U && v & 1);
            if (
              (v < T && (b = !b),
              (d = b ? 0 : _ % m ? m : _),
              (this._lock = 1),
              (this.render(d || (I ? 0 : Le(v * R)), a, !m)._lock = 0),
              (this._tTime = _),
              !a && this.parent && Tt(this, "onRepeat"),
              this.vars.repeatRefresh && !I && ((this.invalidate()._lock = 1), (T = v)),
              (d && d !== this._time) ||
                C !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((m = this._dur),
              (h = this._tDur),
              V &&
                ((this._lock = 2),
                (d = b ? m : -1e-4),
                this.render(d, !0),
                this.vars.repeatRefresh && !I && this.invalidate()),
              (this._lock = 0),
              !this._ts && !C)
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((M = $0(this, Le(d), Le(w))), M && (_ -= w - (w = M._start))),
          (this._tTime = _),
          (this._time = w),
          (this._act = !!O),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = s),
            (d = 0)),
          !d && _ && m && !a && !T && (Tt(this, "onStart"), this._tTime !== _))
        )
          return this;
        if (w >= d && s >= 0)
          for (S = this._first; S;) {
            if (((L = S._next), (S._act || w >= S._start) && S._ts && M !== S)) {
              if (S.parent !== this) return this.render(s, a, c);
              if (
                (S.render(
                  S._ts > 0
                    ? (w - S._start) * S._ts
                    : (S._dirty ? S.totalDuration() : S._tDur) + (w - S._start) * S._ts,
                  a,
                  c,
                ),
                w !== this._time || (!this._ts && !C))
              ) {
                ((M = 0), L && (_ += this._zTime = -ke));
                break;
              }
            }
            S = L;
          }
        else {
          S = this._last;
          for (var G = s < 0 ? s : w; S;) {
            if (((L = S._prev), (S._act || G <= S._end) && S._ts && M !== S)) {
              if (S.parent !== this) return this.render(s, a, c);
              if (
                (S.render(
                  S._ts > 0
                    ? (G - S._start) * S._ts
                    : (S._dirty ? S.totalDuration() : S._tDur) + (G - S._start) * S._ts,
                  a,
                  c || (Ze && ya(S)),
                ),
                w !== this._time || (!this._ts && !C))
              ) {
                ((M = 0), L && (_ += this._zTime = G ? -ke : ke));
                break;
              }
            }
            S = L;
          }
        }
        if (
          M &&
          !a &&
          (this.pause(), (M.render(w >= d ? 0 : -ke)._zTime = w >= d ? 1 : -1), this._ts)
        )
          return ((this._start = N), So(this), this.render(s, a, c));
        (this._onUpdate && !a && Tt(this, "onUpdate", !0),
          ((_ === h && this._tTime >= this.totalDuration()) || (!_ && d)) &&
            (N === this._start || Math.abs(O) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((s || !m) && ((_ === h && this._ts > 0) || (!_ && this._ts < 0)) && Vn(this, 1),
              !a &&
                !(s < 0 && !d) &&
                (_ || d || !h) &&
                (Tt(this, _ === h && s >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(_ < h && this.timeScale() > 0) && this._prom()))));
      }
      return this;
    }),
    (i.add = function (s, a) {
      var c = this;
      if ((hn(a) || (a = It(this, a, s)), !(s instanceof Qi))) {
        if (it(s))
          return (
            s.forEach(function (d) {
              return c.add(d, a);
            }),
            this
          );
        if (Qe(s)) return this.addLabel(s, a);
        if (je(s)) s = Be.delayedCall(0, s);
        else return this;
      }
      return this !== s ? en(this, s, a) : this;
    }),
    (i.getChildren = function (s, a, c, d) {
      (s === void 0 && (s = !0),
        a === void 0 && (a = !0),
        c === void 0 && (c = !0),
        d === void 0 && (d = -Ft));
      for (var h = [], m = this._first; m;)
        (m._start >= d &&
          (m instanceof Be
            ? a && h.push(m)
            : (c && h.push(m), s && h.push.apply(h, m.getChildren(!0, a, c)))),
          (m = m._next));
      return h;
    }),
    (i.getById = function (s) {
      for (var a = this.getChildren(1, 1, 1), c = a.length; c--;)
        if (a[c].vars.id === s) return a[c];
    }),
    (i.remove = function (s) {
      return Qe(s)
        ? this.removeLabel(s)
        : je(s)
          ? this.killTweensOf(s)
          : (s.parent === this && xo(this, s),
            s === this._recent && (this._recent = this._last),
            ur(this));
    }),
    (i.totalTime = function (s, a) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Le(
              Et.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts),
            )),
          p.prototype.totalTime.call(this, s, a),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (i.addLabel = function (s, a) {
      return ((this.labels[s] = It(this, a)), this);
    }),
    (i.removeLabel = function (s) {
      return (delete this.labels[s], this);
    }),
    (i.addPause = function (s, a, c) {
      var d = Be.delayedCall(0, a || Wi, c);
      return ((d.data = "isPause"), (this._hasPause = 1), en(this, d, It(this, s)));
    }),
    (i.removePause = function (s) {
      var a = this._first;
      for (s = It(this, s); a;) (a._start === s && a.data === "isPause" && Vn(a), (a = a._next));
    }),
    (i.killTweensOf = function (s, a, c) {
      for (var d = this.getTweensOf(s, c), h = d.length; h--;) An !== d[h] && d[h].kill(s, a);
      return this;
    }),
    (i.getTweensOf = function (s, a) {
      for (var c = [], d = Ut(s), h = this._first, m = hn(a), _; h;)
        (h instanceof Be
          ? F0(h._targets, d) &&
            (m
              ? (!An || (h._initted && h._ts)) &&
                h.globalTime(0) <= a &&
                h.globalTime(h.totalDuration()) > a
              : !a || h.isActive()) &&
            c.push(h)
          : (_ = h.getTweensOf(d, a)).length && c.push.apply(c, _),
          (h = h._next));
      return c;
    }),
    (i.tweenTo = function (s, a) {
      a = a || {};
      var c = this,
        d = It(c, s),
        h = a,
        m = h.startAt,
        _ = h.onStart,
        g = h.onStartParams,
        w = h.immediateRender,
        S,
        L = Be.to(
          c,
          Nt(
            {
              ease: a.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: d,
              overwrite: "auto",
              duration:
                a.duration ||
                Math.abs((d - (m && "time" in m ? m.time : c._time)) / c.timeScale()) ||
                ke,
              onStart: function () {
                if ((c.pause(), !S)) {
                  var R =
                    a.duration ||
                    Math.abs((d - (m && "time" in m ? m.time : c._time)) / c.timeScale());
                  (L._dur !== R && $r(L, R, 0, 1).render(L._time, !0, !0), (S = 1));
                }
                _ && _.apply(L, g || []);
              },
            },
            a,
          ),
        );
      return w ? L.render(0) : L;
    }),
    (i.tweenFromTo = function (s, a, c) {
      return this.tweenTo(a, Nt({ startAt: { time: It(this, s) } }, c));
    }),
    (i.recent = function () {
      return this._recent;
    }),
    (i.nextLabel = function (s) {
      return (s === void 0 && (s = this._time), Ad(this, It(this, s)));
    }),
    (i.previousLabel = function (s) {
      return (s === void 0 && (s = this._time), Ad(this, It(this, s), 1));
    }),
    (i.currentLabel = function (s) {
      return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + ke);
    }),
    (i.shiftChildren = function (s, a, c) {
      c === void 0 && (c = 0);
      var d = this._first,
        h = this.labels,
        m;
      for (s = Le(s); d;) (d._start >= c && ((d._start += s), (d._end += s)), (d = d._next));
      if (a) for (m in h) h[m] >= c && (h[m] += s);
      return ur(this);
    }),
    (i.invalidate = function (s) {
      var a = this._first;
      for (this._lock = 0; a;) (a.invalidate(s), (a = a._next));
      return p.prototype.invalidate.call(this, s);
    }),
    (i.clear = function (s) {
      s === void 0 && (s = !0);
      for (var a = this._first, c; a;) ((c = a._next), this.remove(a), (a = c));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        s && (this.labels = {}),
        ur(this)
      );
    }),
    (i.totalDuration = function (s) {
      var a = 0,
        c = this,
        d = c._last,
        h = Ft,
        m,
        _,
        g;
      if (arguments.length)
        return c.timeScale(
          (c._repeat < 0 ? c.duration() : c.totalDuration()) / (c.reversed() ? -s : s),
        );
      if (c._dirty) {
        for (g = c.parent; d;)
          ((m = d._prev),
            d._dirty && d.totalDuration(),
            (_ = d._start),
            _ > h && c._sort && d._ts && !c._lock
              ? ((c._lock = 1), (en(c, d, _ - d._delay, 1)._lock = 0))
              : (h = _),
            _ < 0 &&
              d._ts &&
              ((a -= _),
              ((!g && !c._dp) || (g && g.smoothChildTiming)) &&
                ((c._start += Le(_ / c._ts)), (c._time -= _), (c._tTime -= _)),
              c.shiftChildren(-_, !1, -1 / 0),
              (h = 0)),
            d._end > a && d._ts && (a = d._end),
            (d = m));
        ($r(c, c === De && c._time > a ? c._time : a, 1, 1), (c._dirty = 0));
      }
      return c._tDur;
    }),
    (r.updateRoot = function (s) {
      if ((De._ts && (Pp(De, _o(s, De)), (xp = Et.frame)), Et.frame >= Md)) {
        Md += Ot.autoSleep || 120;
        var a = De._first;
        if ((!a || !a._ts) && Ot.autoSleep && Et._listeners.length < 2) {
          for (; a && !a._ts;) a = a._next;
          a || Et.sleep();
        }
      }
    }),
    r
  );
})(Qi);
Nt(ht.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var uy = function (r, i, o, s, a, c, d) {
    var h = new _t(this._pt, r, i, 0, 1, Kp, null, a),
      m = 0,
      _ = 0,
      g,
      w,
      S,
      L,
      v,
      R,
      C,
      M;
    for (
      h.b = o,
        h.e = s,
        o += "",
        s += "",
        (C = ~s.indexOf("random(")) && (s = $i(s)),
        c && ((M = [o, s]), c(M, r, i), (o = M[0]), (s = M[1])),
        w = o.match(ku) || [];
      (g = ku.exec(s));
    )
      ((L = g[0]),
        (v = s.substring(m, g.index)),
        S ? (S = (S + 1) % 5) : v.substr(-5) === "rgba(" && (S = 1),
        L !== w[_++] &&
          ((R = parseFloat(w[_ - 1]) || 0),
          (h._pt = {
            _next: h._pt,
            p: v || _ === 1 ? v : ",",
            s: R,
            c: L.charAt(1) === "=" ? Vr(R, L) - R : parseFloat(L) - R,
            m: S && S < 4 ? Math.round : 0,
          }),
          (m = ku.lastIndex)));
    return (
      (h.c = m < s.length ? s.substring(m, s.length) : ""),
      (h.fp = d),
      (_p.test(s) || C) && (h.e = 0),
      (this._pt = h),
      h
    );
  },
  _a = function (r, i, o, s, a, c, d, h, m, _) {
    je(s) && (s = s(a || 0, r, c));
    var g = r[i],
      w =
        o !== "get"
          ? o
          : je(g)
            ? m
              ? r[i.indexOf("set") || !je(r["get" + i.substr(3)]) ? i : "get" + i.substr(3)](m)
              : r[i]()
            : g,
      S = je(g) ? (m ? py : Qp) : va,
      L;
    if (
      (Qe(s) &&
        (~s.indexOf("random(") && (s = $i(s)),
        s.charAt(1) === "=" && ((L = Vr(w, s) + (rt(w) || 0)), (L || L === 0) && (s = L))),
      !_ || w !== s || ea)
    )
      return !isNaN(w * s) && s !== ""
        ? ((L = new _t(
            this._pt,
            r,
            i,
            +w || 0,
            s - (w || 0),
            typeof g == "boolean" ? my : Xp,
            0,
            S,
          )),
          m && (L.fp = m),
          d && L.modifier(d, this, r),
          (this._pt = L))
        : (!g && !(i in r) && da(i, s), uy.call(this, r, i, w, s, S, h || Ot.stringFilter, m));
  },
  ay = function (r, i, o, s, a) {
    if ((je(r) && (r = Vi(r, a, i, o, s)), !nn(r) || (r.style && r.nodeType) || it(r) || mp(r)))
      return Qe(r) ? Vi(r, a, i, o, s) : r;
    var c = {},
      d;
    for (d in r) c[d] = Vi(r[d], a, i, o, s);
    return c;
  },
  Wp = function (r, i, o, s, a, c) {
    var d, h, m, _;
    if (
      kt[r] &&
      (d = new kt[r]()).init(a, d.rawVars ? i[r] : ay(i[r], s, a, c, o), o, s, c) !== !1 &&
      ((o._pt = h = new _t(o._pt, a, r, 0, 1, d.render, d, 0, d.priority)), o !== Ur)
    )
      for (m = o._ptLookup[o._targets.indexOf(a)], _ = d._props.length; _--;) m[d._props[_]] = h;
    return d;
  },
  An,
  ea,
  ga = function p(r, i, o) {
    var s = r.vars,
      a = s.ease,
      c = s.startAt,
      d = s.immediateRender,
      h = s.lazy,
      m = s.onUpdate,
      _ = s.runBackwards,
      g = s.yoyoEase,
      w = s.keyframes,
      S = s.autoRevert,
      L = r._dur,
      v = r._startAt,
      R = r._targets,
      C = r.parent,
      M = C && C.data === "nested" ? C.vars.targets : R,
      O = r._overwrite === "auto" && !ua,
      N = r.timeline,
      T = s.easeReverse || g,
      U,
      I,
      b,
      V,
      G,
      Z,
      ee,
      te,
      B,
      q,
      ae,
      se,
      Q;
    if (
      (N && (!w || !a) && (a = "none"),
      (r._ease = ar(a, Hi.ease)),
      (r._rEase = T && (ar(T) || r._ease)),
      (r._from = !N && !!s.runBackwards),
      r._from && (r.ratio = 1),
      !N || (w && !s.stagger))
    ) {
      if (
        ((te = R[0] ? sr(R[0]).harness : 0),
        (se = te && s[te.prop]),
        (U = yo(s, pa)),
        v &&
          (v._zTime < 0 && v.progress(1),
          i < 0 && _ && d && !S ? v.render(-1, !0) : v.revert(_ && L ? fo : j0),
          (v._lazy = 0)),
        c)
      ) {
        if (
          (Vn(
            (r._startAt = Be.set(
              R,
              Nt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: C,
                  immediateRender: !0,
                  lazy: !v && mt(h),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    m &&
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
          i < 0 && (Ze || (!d && !S)) && r._startAt.revert(fo),
          d && L && i <= 0 && o <= 0)
        ) {
          i && (r._zTime = i);
          return;
        }
      } else if (_ && L && !v) {
        if (
          (i && (d = !1),
          (b = Nt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: d && !v && mt(h),
              immediateRender: d,
              stagger: 0,
              parent: C,
            },
            U,
          )),
          se && (b[te.prop] = se),
          Vn((r._startAt = Be.set(R, b))),
          (r._startAt._dp = 0),
          (r._startAt._sat = r),
          i < 0 && (Ze ? r._startAt.revert(fo) : r._startAt.render(-1, !0)),
          (r._zTime = i),
          !d)
        )
          p(r._startAt, ke, ke);
        else if (!i) return;
      }
      for (r._pt = r._ptCache = 0, h = (L && mt(h)) || (h && !L), I = 0; I < R.length; I++) {
        if (
          ((G = R[I]),
          (ee = G._gsap || ma(R)[I]._gsap),
          (r._ptLookup[I] = q = {}),
          Xu[ee.id] && Fn.length && mo(),
          (ae = M === R ? I : M.indexOf(G)),
          te &&
            (B = new te()).init(G, se || U, r, ae, M) !== !1 &&
            ((r._pt = V = new _t(r._pt, G, B.name, 0, 1, B.render, B, 0, B.priority)),
            B._props.forEach(function (H) {
              q[H] = V;
            }),
            B.priority && (Z = 1)),
          !te || se)
        )
          for (b in U)
            kt[b] && (B = Wp(b, U, r, ae, G, M))
              ? B.priority && (Z = 1)
              : (q[b] = V = _a.call(r, G, b, "get", U[b], ae, M, 0, s.stringFilter));
        (r._op && r._op[I] && r.kill(G, r._op[I]),
          O &&
            r._pt &&
            ((An = r), De.killTweensOf(G, q, r.globalTime(i)), (Q = !r.parent), (An = 0)),
          r._pt && h && (Xu[ee.id] = 1));
      }
      (Z && qp(r), r._onInit && r._onInit(r));
    }
    ((r._onUpdate = m),
      (r._initted = (!r._op || r._pt) && !Q),
      w && i <= 0 && N.render(Ft, !0, !0));
  },
  fy = function (r, i, o, s, a, c, d, h) {
    var m = ((r._pt && r._ptCache) || (r._ptCache = {}))[i],
      _,
      g,
      w,
      S;
    if (!m)
      for (m = r._ptCache[i] = [], w = r._ptLookup, S = r._targets.length; S--;) {
        if (((_ = w[S][i]), _ && _.d && _.d._pt))
          for (_ = _.d._pt; _ && _.p !== i && _.fp !== i;) _ = _._next;
        if (!_)
          return (
            (ea = 1),
            (r.vars[i] = "+=0"),
            ga(r, d),
            (ea = 0),
            h ? bi(i + " not eligible for reset. Try splitting into individual properties") : 1
          );
        m.push(_);
      }
    for (S = m.length; S--;)
      ((g = m[S]),
        (_ = g._pt || g),
        (_.s = (s || s === 0) && !a ? s : _.s + (s || 0) + c * _.c),
        (_.c = o - _.s),
        g.e && (g.e = Ue(o) + rt(g.e)),
        g.b && (g.b = _.s + rt(g.b)));
  },
  cy = function (r, i) {
    var o = r[0] ? sr(r[0]).harness : 0,
      s = o && o.aliases,
      a,
      c,
      d,
      h;
    if (!s) return i;
    a = br({}, i);
    for (c in s) if (c in a) for (h = s[c].split(","), d = h.length; d--;) a[h[d]] = a[c];
    return a;
  },
  dy = function (r, i, o, s) {
    var a = i.ease || s || "power1.inOut",
      c,
      d;
    if (it(i))
      ((d = o[r] || (o[r] = [])),
        i.forEach(function (h, m) {
          return d.push({ t: (m / (i.length - 1)) * 100, v: h, e: a });
        }));
    else
      for (c in i)
        ((d = o[c] || (o[c] = [])), c === "ease" || d.push({ t: parseFloat(r), v: i[c], e: a }));
  },
  Vi = function (r, i, o, s, a) {
    return je(r) ? r.call(i, o, s, a) : Qe(r) && ~r.indexOf("random(") ? $i(r) : r;
  },
  $p = ha + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
  Yp = {};
yt($p + ",id,stagger,delay,duration,paused,scrollTrigger", function (p) {
  return (Yp[p] = 1);
});
var Be = (function (p) {
  pp(r, p);
  function r(o, s, a, c) {
    var d;
    (typeof s == "number" && ((a.duration = s), (s = a), (a = null)),
      (d = p.call(this, c ? s : Fi(s)) || this));
    var h = d.vars,
      m = h.duration,
      _ = h.delay,
      g = h.immediateRender,
      w = h.stagger,
      S = h.overwrite,
      L = h.keyframes,
      v = h.defaults,
      R = h.scrollTrigger,
      C = s.parent || De,
      M = (it(o) || mp(o) ? hn(o[0]) : "length" in s) ? [o] : Ut(o),
      O,
      N,
      T,
      U,
      I,
      b,
      V,
      G;
    if (
      ((d._targets = M.length
        ? ma(M)
        : bi("GSAP target " + o + " not found. https://gsap.com", !Ot.nullTargetWarn) || []),
      (d._ptLookup = []),
      (d._overwrite = S),
      L || w || ao(m) || ao(_))
    ) {
      s = d.vars;
      var Z = s.easeReverse || s.yoyoEase;
      if (
        ((O = d.timeline =
          new ht({
            data: "nested",
            defaults: v || {},
            targets: C && C.data === "nested" ? C.vars.targets : M,
          })),
        O.kill(),
        (O.parent = O._dp = dn(d)),
        (O._start = 0),
        w || ao(m) || ao(_))
      ) {
        if (((U = M.length), (V = w && Lp(w)), nn(w)))
          for (I in w) ~$p.indexOf(I) && (G || (G = {}), (G[I] = w[I]));
        for (N = 0; N < U; N++)
          ((T = yo(s, Yp)),
            (T.stagger = 0),
            Z && (T.easeReverse = Z),
            G && br(T, G),
            (b = M[N]),
            (T.duration = +Vi(m, dn(d), N, b, M)),
            (T.delay = (+Vi(_, dn(d), N, b, M) || 0) - d._delay),
            !w && U === 1 && T.delay && ((d._delay = _ = T.delay), (d._start += _), (T.delay = 0)),
            O.to(b, T, V ? V(N, b, M) : 0),
            (O._ease = ye.none));
        O.duration() ? (m = _ = 0) : (d.timeline = 0);
      } else if (L) {
        (Fi(Nt(O.vars.defaults, { ease: "none" })), (O._ease = ar(L.ease || s.ease || "none")));
        var ee = 0,
          te,
          B,
          q;
        if (it(L))
          (L.forEach(function (ae) {
            return O.to(M, ae, ">");
          }),
            O.duration());
        else {
          T = {};
          for (I in L) I === "ease" || I === "easeEach" || dy(I, L[I], T, L.easeEach);
          for (I in T)
            for (
              te = T[I].sort(function (ae, se) {
                return ae.t - se.t;
              }),
                ee = 0,
                N = 0;
              N < te.length;
              N++
            )
              ((B = te[N]),
                (q = { ease: B.e, duration: ((B.t - (N ? te[N - 1].t : 0)) / 100) * m }),
                (q[I] = B.v),
                O.to(M, q, ee),
                (ee += q.duration));
          O.duration() < m && O.to({}, { duration: m - O.duration() });
        }
      }
      m || d.duration((m = O.duration()));
    } else d.timeline = 0;
    return (
      S === !0 && !ua && ((An = dn(d)), De.killTweensOf(M), (An = 0)),
      en(C, dn(d), a),
      s.reversed && d.reverse(),
      s.paused && d.paused(!0),
      (g || (!m && !L && d._start === Le(C._time) && mt(g) && H0(dn(d)) && C.data !== "nested")) &&
        ((d._tTime = -ke), d.render(Math.max(0, -_) || 0)),
      R && Op(dn(d), R),
      d
    );
  }
  var i = r.prototype;
  return (
    (i.render = function (s, a, c) {
      var d = this._time,
        h = this._tDur,
        m = this._dur,
        _ = s < 0,
        g = s > h - ke && !_ ? h : s < ke ? 0 : s,
        w,
        S,
        L,
        v,
        R,
        C,
        M,
        O;
      if (!m) W0(this, s, a, c);
      else if (
        g !== this._tTime ||
        !s ||
        c ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== _) ||
        this._lazy
      ) {
        if (((w = g), (O = this.timeline), this._repeat)) {
          if (((v = m + this._rDelay), this._repeat < -1 && _))
            return this.totalTime(v * 100 + s, a, c);
          if (
            ((w = Le(g % v)),
            g === h
              ? ((L = this._repeat), (w = m))
              : ((R = Le(g / v)), (L = ~~R), L && L === R ? ((w = m), L--) : w > m && (w = m)),
            (C = this._yoyo && L & 1),
            C && (w = m - w),
            (R = Wr(this._tTime, v)),
            w === d && !c && this._initted && L === R)
          )
            return ((this._tTime = g), this);
          L !== R &&
            this.vars.repeatRefresh &&
            !C &&
            !this._lock &&
            w !== v &&
            this._initted &&
            ((this._lock = c = 1), (this.render(Le(v * L), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (Rp(this, _ ? s : w, c, a, g)) return ((this._tTime = 0), this);
          if (d !== this._time && !(c && this.vars.repeatRefresh && L !== R)) return this;
          if (m !== this._dur) return this.render(s, a, c);
        }
        if (this._rEase) {
          var N = w < d;
          if (N !== this._inv) {
            var T = N ? d : m - d;
            ((this._inv = N),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = d),
              (this._invRecip = T ? (N ? -1 : 1) / T : 0),
              (this._invScale = N ? -this.ratio : 1 - this.ratio),
              (this._invEase = N ? this._rEase : this._ease));
          }
          this.ratio = M =
            this._invRatio + this._invScale * this._invEase((w - this._invTime) * this._invRecip);
        } else this.ratio = M = this._ease(w / m);
        if (
          (this._from && (this.ratio = M = 1 - M),
          (this._tTime = g),
          (this._time = w),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !d && g && !a && !R && (Tt(this, "onStart"), this._tTime !== g))
        )
          return this;
        for (S = this._pt; S;) (S.r(M, S.d), (S = S._next));
        ((O && O.render(s < 0 ? s : O._dur * O._ease(w / this._dur), a, c)) ||
          (this._startAt && (this._zTime = s)),
          this._onUpdate && !a && (_ && Ku(this, s, a, c), Tt(this, "onUpdate")),
          this._repeat &&
            L !== R &&
            this.vars.onRepeat &&
            !a &&
            this.parent &&
            Tt(this, "onRepeat"),
          (g === this._tDur || !g) &&
            this._tTime === g &&
            (_ && !this._onUpdate && Ku(this, s, !0, !0),
            (s || !m) &&
              ((g === this._tDur && this._ts > 0) || (!g && this._ts < 0)) &&
              Vn(this, 1),
            !a &&
              !(_ && !d) &&
              (g || d || C) &&
              (Tt(this, g === h ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(g < h && this.timeScale() > 0) && this._prom())));
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
    (i.resetTo = function (s, a, c, d, h) {
      (Yi || Et.wake(), this._ts || this.play());
      var m = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        _;
      return (
        this._initted || ga(this, m),
        (_ = this._ease(m / this._dur)),
        fy(this, s, a, c, d, _, m, h)
          ? this.resetTo(s, a, c, d, 1)
          : (Po(this, 0),
            this.parent || Tp(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
      );
    }),
    (i.kill = function (s, a) {
      if ((a === void 0 && (a = "all"), !s && (!a || a === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent ? ji(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ze),
          this
        );
      if (this.timeline) {
        var c = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(s, a, An && An.vars.overwrite !== !0)._first || ji(this),
          this.parent &&
            c !== this.timeline.totalDuration() &&
            $r(this, (this._dur * this.timeline._tDur) / c, 0, 1),
          this
        );
      }
      var d = this._targets,
        h = s ? Ut(s) : d,
        m = this._ptLookup,
        _ = this._pt,
        g,
        w,
        S,
        L,
        v,
        R,
        C;
      if ((!a || a === "all") && V0(d, h)) return (a === "all" && (this._pt = 0), ji(this));
      for (
        g = this._op = this._op || [],
          a !== "all" &&
            (Qe(a) &&
              ((v = {}),
              yt(a, function (M) {
                return (v[M] = 1);
              }),
              (a = v)),
            (a = cy(d, a))),
          C = d.length;
        C--;
      )
        if (~h.indexOf(d[C])) {
          ((w = m[C]),
            a === "all" ? ((g[C] = a), (L = w), (S = {})) : ((S = g[C] = g[C] || {}), (L = a)));
          for (v in L)
            ((R = w && w[v]),
              R && ((!("kill" in R.d) || R.d.kill(v) === !0) && xo(this, R, "_pt"), delete w[v]),
              S !== "all" && (S[v] = 1));
        }
      return (this._initted && !this._pt && _ && ji(this), this);
    }),
    (r.to = function (s, a) {
      return new r(s, a, arguments[2]);
    }),
    (r.from = function (s, a) {
      return Ui(1, arguments);
    }),
    (r.delayedCall = function (s, a, c, d) {
      return new r(a, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: s,
        onComplete: a,
        onReverseComplete: a,
        onCompleteParams: c,
        onReverseCompleteParams: c,
        callbackScope: d,
      });
    }),
    (r.fromTo = function (s, a, c) {
      return Ui(2, arguments);
    }),
    (r.set = function (s, a) {
      return ((a.duration = 0), a.repeatDelay || (a.repeat = 0), new r(s, a));
    }),
    (r.killTweensOf = function (s, a, c) {
      return De.killTweensOf(s, a, c);
    }),
    r
  );
})(Qi);
Nt(Be.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
yt("staggerTo,staggerFrom,staggerFromTo", function (p) {
  Be[p] = function () {
    var r = new ht(),
      i = Gu.call(arguments, 0);
    return (i.splice(p === "staggerFromTo" ? 5 : 4, 0, 0), r[p].apply(r, i));
  };
});
var va = function (r, i, o) {
    return (r[i] = o);
  },
  Qp = function (r, i, o) {
    return r[i](o);
  },
  py = function (r, i, o, s) {
    return r[i](s.fp, o);
  },
  hy = function (r, i, o) {
    return r.setAttribute(i, o);
  },
  wa = function (r, i) {
    return je(r[i]) ? Qp : aa(r[i]) && r.setAttribute ? hy : va;
  },
  Xp = function (r, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * r) * 1e6) / 1e6, i);
  },
  my = function (r, i) {
    return i.set(i.t, i.p, !!(i.s + i.c * r), i);
  },
  Kp = function (r, i) {
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
  xa = function (r, i) {
    for (var o = i._pt; o;) (o.r(r, o.d), (o = o._next));
  },
  yy = function (r, i, o, s) {
    for (var a = this._pt, c; a;) ((c = a._next), a.p === s && a.modifier(r, i, o), (a = c));
  },
  _y = function (r) {
    for (var i = this._pt, o, s; i;)
      ((s = i._next),
        (i.p === r && !i.op) || i.op === r ? xo(this, i, "_pt") : i.dep || (o = 1),
        (i = s));
    return !o;
  },
  gy = function (r, i, o, s) {
    s.mSet(r, i, s.m.call(s.tween, o, s.mt), s);
  },
  qp = function (r) {
    for (var i = r._pt, o, s, a, c; i;) {
      for (o = i._next, s = a; s && s.pr > i.pr;) s = s._next;
      ((i._prev = s ? s._prev : c) ? (i._prev._next = i) : (a = i),
        (i._next = s) ? (s._prev = i) : (c = i),
        (i = o));
    }
    r._pt = a;
  },
  _t = (function () {
    function p(i, o, s, a, c, d, h, m, _) {
      ((this.t = o),
        (this.s = a),
        (this.c = c),
        (this.p = s),
        (this.r = d || Xp),
        (this.d = h || this),
        (this.set = m || va),
        (this.pr = _ || 0),
        (this._next = i),
        i && (i._prev = this));
    }
    var r = p.prototype;
    return (
      (r.modifier = function (o, s, a) {
        ((this.mSet = this.mSet || this.set),
          (this.set = gy),
          (this.m = o),
          (this.mt = a),
          (this.tween = s));
      }),
      p
    );
  })();
yt(
  ha +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",
  function (p) {
    return (pa[p] = 1);
  },
);
Rt.TweenMax = Rt.TweenLite = Be;
Rt.TimelineLite = Rt.TimelineMax = ht;
De = new ht({
  sortChildren: !1,
  defaults: Hi,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Ot.stringFilter = Bp;
var fr = [],
  po = {},
  vy = [],
  Id = 0,
  wy = 0,
  Ru = function (r) {
    return (po[r] || vy).map(function (i) {
      return i();
    });
  },
  ta = function () {
    var r = Date.now(),
      i = [];
    r - Id > 2 &&
      (Ru("matchMediaInit"),
      fr.forEach(function (o) {
        var s = o.queries,
          a = o.conditions,
          c,
          d,
          h,
          m;
        for (d in s)
          ((c = Jt.matchMedia(s[d]).matches), c && (h = 1), c !== a[d] && ((a[d] = c), (m = 1)));
        m && (o.revert(), h && i.push(o));
      }),
      Ru("matchMediaRevert"),
      i.forEach(function (o) {
        return o.onMatch(o, function (s) {
          return o.add(null, s);
        });
      }),
      (Id = r),
      Ru("matchMedia"));
  },
  Gp = (function () {
    function p(i, o) {
      ((this.selector = o && Zu(o)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = wy++),
        i && this.add(i));
    }
    var r = p.prototype;
    return (
      (r.add = function (o, s, a) {
        je(o) && ((a = s), (s = o), (o = je));
        var c = this,
          d = function () {
            var m = Re,
              _ = c.selector,
              g;
            return (
              m && m !== c && m.data.push(c),
              a && (c.selector = Zu(a)),
              (Re = c),
              (g = s.apply(c, arguments)),
              je(g) && c._r.push(g),
              (Re = m),
              (c.selector = _),
              (c.isReverted = !1),
              g
            );
          };
        return (
          (c.last = d),
          o === je
            ? d(c, function (h) {
                return c.add(null, h);
              })
            : o
              ? (c[o] = d)
              : d
        );
      }),
      (r.ignore = function (o) {
        var s = Re;
        ((Re = null), o(this), (Re = s));
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
        var a = this;
        if (
          (o
            ? (function () {
                for (var d = a.getTweens(), h = a.data.length, m; h--;)
                  ((m = a.data[h]),
                    m.data === "isFlip" &&
                      (m.revert(),
                      m.getChildren(!0, !0, !1).forEach(function (_) {
                        return d.splice(d.indexOf(_), 1);
                      })));
                for (
                  d
                    .map(function (_) {
                      return {
                        g:
                          _._dur || _._delay || (_._sat && !_._sat.vars.immediateRender)
                            ? _.globalTime(0)
                            : -1 / 0,
                        t: _,
                      };
                    })
                    .sort(function (_, g) {
                      return g.g - _.g || -1 / 0;
                    })
                    .forEach(function (_) {
                      return _.t.revert(o);
                    }),
                    h = a.data.length;
                  h--;
                )
                  ((m = a.data[h]),
                    m instanceof ht
                      ? m.data !== "nested" &&
                        (m.scrollTrigger && m.scrollTrigger.revert(), m.kill())
                      : !(m instanceof Be) && m.revert && m.revert(o));
                (a._r.forEach(function (_) {
                  return _(o, a);
                }),
                  (a.isReverted = !0));
              })()
            : this.data.forEach(function (d) {
                return d.kill && d.kill();
              }),
          this.clear(),
          s)
        )
          for (var c = fr.length; c--;) fr[c].id === this.id && fr.splice(c, 1);
      }),
      (r.revert = function (o) {
        this.kill(o || {});
      }),
      p
    );
  })(),
  xy = (function () {
    function p(i) {
      ((this.contexts = []), (this.scope = i), Re && Re.data.push(this));
    }
    var r = p.prototype;
    return (
      (r.add = function (o, s, a) {
        nn(o) || (o = { matches: o });
        var c = new Gp(0, a || this.scope),
          d = (c.conditions = {}),
          h,
          m,
          _;
        (Re && !c.selector && (c.selector = Re.selector),
          this.contexts.push(c),
          (s = c.add("onMatch", s)),
          (c.queries = o));
        for (m in o)
          m === "all"
            ? (_ = 1)
            : ((h = Jt.matchMedia(o[m])),
              h &&
                (fr.indexOf(c) < 0 && fr.push(c),
                (d[m] = h.matches) && (_ = 1),
                h.addListener ? h.addListener(ta) : h.addEventListener("change", ta)));
        return (
          _ &&
            s(c, function (g) {
              return c.add(null, g);
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
  go = {
    registerPlugin: function () {
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
      i.forEach(function (s) {
        return Fp(s);
      });
    },
    timeline: function (r) {
      return new ht(r);
    },
    getTweensOf: function (r, i) {
      return De.getTweensOf(r, i);
    },
    getProperty: function (r, i, o, s) {
      Qe(r) && (r = Ut(r)[0]);
      var a = sr(r || {}).get,
        c = o ? Ep : kp;
      return (
        o === "native" && (o = ""),
        r &&
          (i
            ? c(((kt[i] && kt[i].get) || a)(r, i, o, s))
            : function (d, h, m) {
                return c(((kt[d] && kt[d].get) || a)(r, d, h, m));
              })
      );
    },
    quickSetter: function (r, i, o) {
      if (((r = Ut(r)), r.length > 1)) {
        var s = r.map(function (_) {
            return vt.quickSetter(_, i, o);
          }),
          a = s.length;
        return function (_) {
          for (var g = a; g--;) s[g](_);
        };
      }
      r = r[0] || {};
      var c = kt[i],
        d = sr(r),
        h = (d.harness && (d.harness.aliases || {})[i]) || i,
        m = c
          ? function (_) {
              var g = new c();
              ((Ur._pt = 0),
                g.init(r, o ? _ + o : _, Ur, 0, [r]),
                g.render(1, g),
                Ur._pt && xa(1, Ur));
            }
          : d.set(r, h);
      return c
        ? m
        : function (_) {
            return m(r, h, o ? _ + o : _, d, 1);
          };
    },
    quickTo: function (r, i, o) {
      var s,
        a = vt.to(
          r,
          Nt(((s = {}), (s[i] = "+=0.1"), (s.paused = !0), (s.stagger = 0), s), o || {}),
        ),
        c = function (h, m, _) {
          return a.resetTo(i, h, m, _);
        };
      return ((c.tween = a), c);
    },
    isTweening: function (r) {
      return De.getTweensOf(r, !0).length > 0;
    },
    defaults: function (r) {
      return (r && r.ease && (r.ease = ar(r.ease, Hi.ease)), Ld(Hi, r || {}));
    },
    config: function (r) {
      return Ld(Ot, r || {});
    },
    registerEffect: function (r) {
      var i = r.name,
        o = r.effect,
        s = r.plugins,
        a = r.defaults,
        c = r.extendTimeline;
      ((s || "").split(",").forEach(function (d) {
        return d && !kt[d] && !Rt[d] && bi(i + " effect requires " + d + " plugin.");
      }),
        (Eu[i] = function (d, h, m) {
          return o(Ut(d), Nt(h || {}, a), m);
        }),
        c &&
          (ht.prototype[i] = function (d, h, m) {
            return this.add(Eu[i](d, nn(h) ? h : (m = h) && {}, this), m);
          }));
    },
    registerEase: function (r, i) {
      ye[r] = ar(i);
    },
    parseEase: function (r, i) {
      return arguments.length ? ar(r, i) : ye;
    },
    getById: function (r) {
      return De.getById(r);
    },
    exportRoot: function (r, i) {
      r === void 0 && (r = {});
      var o = new ht(r),
        s,
        a;
      for (
        o.smoothChildTiming = mt(r.smoothChildTiming),
          De.remove(o),
          o._dp = 0,
          o._time = o._tTime = De._time,
          s = De._first;
        s;
      )
        ((a = s._next),
          (i || !(!s._dur && s instanceof Be && s.vars.onComplete === s._targets[0])) &&
            en(o, s, s._start - s._delay),
          (s = a));
      return (en(De, o, 0), o);
    },
    context: function (r, i) {
      return r ? new Gp(r, i) : Re;
    },
    matchMedia: function (r) {
      return new xy(r);
    },
    matchMediaRefresh: function () {
      return (
        fr.forEach(function (r) {
          var i = r.conditions,
            o,
            s;
          for (s in i) i[s] && ((i[s] = !1), (o = 1));
          o && r.revert();
        }) || ta()
      );
    },
    addEventListener: function (r, i) {
      var o = po[r] || (po[r] = []);
      ~o.indexOf(i) || o.push(i);
    },
    removeEventListener: function (r, i) {
      var o = po[r],
        s = o && o.indexOf(i);
      s >= 0 && o.splice(s, 1);
    },
    utils: {
      wrap: Z0,
      wrapYoyo: J0,
      distribute: Lp,
      random: zp,
      snap: Dp,
      normalize: G0,
      getUnit: rt,
      clamp: Q0,
      splitColor: Up,
      toArray: Ut,
      selector: Zu,
      mapRange: jp,
      pipe: K0,
      unitize: q0,
      interpolate: ey,
      shuffle: Mp,
    },
    install: vp,
    effects: Eu,
    ticker: Et,
    updateRoot: ht.updateRoot,
    plugins: kt,
    globalTimeline: De,
    core: {
      PropTween: _t,
      globals: wp,
      Tween: Be,
      Timeline: ht,
      Animation: Qi,
      getCache: sr,
      _removeLinkedListItem: xo,
      reverting: function () {
        return Ze;
      },
      context: function (r) {
        return (r && Re && (Re.data.push(r), (r._ctx = Re)), Re);
      },
      suppressOverwrites: function (r) {
        return (ua = r);
      },
    },
  };
yt("to,from,fromTo,delayedCall,set,killTweensOf", function (p) {
  return (go[p] = Be[p]);
});
Et.add(ht.updateRoot);
Ur = go.to({}, { duration: 0 });
var Sy = function (r, i) {
    for (var o = r._pt; o && o.p !== i && o.op !== i && o.fp !== i;) o = o._next;
    return o;
  },
  Py = function (r, i) {
    var o = r._targets,
      s,
      a,
      c;
    for (s in i)
      for (a = o.length; a--;)
        ((c = r._ptLookup[a][s]),
          c &&
            (c = c.d) &&
            (c._pt && (c = Sy(c, s)), c && c.modifier && c.modifier(i[s], r, o[a], s)));
  },
  Nu = function (r, i) {
    return {
      name: r,
      headless: 1,
      rawVars: 1,
      init: function (s, a, c) {
        c._onInit = function (d) {
          var h, m;
          if (
            (Qe(a) &&
              ((h = {}),
              yt(a, function (_) {
                return (h[_] = 1);
              }),
              (a = h)),
            i)
          ) {
            h = {};
            for (m in a) h[m] = i(a[m]);
            a = h;
          }
          Py(d, a);
        };
      },
    };
  },
  vt =
    go.registerPlugin(
      {
        name: "attr",
        init: function (r, i, o, s, a) {
          var c, d, h;
          this.tween = o;
          for (c in i)
            ((h = r.getAttribute(c) || ""),
              (d = this.add(r, "setAttribute", (h || 0) + "", i[c], s, a, 0, 0, c)),
              (d.op = c),
              (d.b = h),
              this._props.push(c));
        },
        render: function (r, i) {
          for (var o = i._pt; o;) (Ze ? o.set(o.t, o.p, o.b, o) : o.r(r, o.d), (o = o._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (r, i) {
          for (var o = i.length; o--;) this.add(r, o, r[o] || 0, i[o], 0, 0, 0, 0, 0, 1);
        },
      },
      Nu("roundProps", Ju),
      Nu("modifiers"),
      Nu("snap", Dp),
    ) || go;
Be.version = ht.version = vt.version = "3.15.0";
gp = 1;
fa() && Yr();
ye.Power0;
ye.Power1;
ye.Power2;
ye.Power3;
ye.Power4;
ye.Linear;
ye.Quad;
ye.Cubic;
ye.Quart;
ye.Quint;
ye.Strong;
ye.Elastic;
ye.Back;
ye.SteppedEase;
ye.Bounce;
ye.Sine;
ye.Expo;
ye.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Fd,
  jn,
  Br,
  Sa,
  or,
  Ud,
  Pa,
  ky = function () {
    return typeof window < "u";
  },
  mn = {},
  lr = 180 / Math.PI,
  Hr = Math.PI / 180,
  Ir = Math.atan2,
  Vd = 1e8,
  ka = /([A-Z])/g,
  Ey = /(left|right|width|margin|padding|x)/i,
  Ty = /[\s,\(]\S/,
  tn = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
  na = function (r, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * r) * 1e4) / 1e4 + i.u, i);
  },
  Cy = function (r, i) {
    return i.set(i.t, i.p, r === 1 ? i.e : Math.round((i.s + i.c * r) * 1e4) / 1e4 + i.u, i);
  },
  Oy = function (r, i) {
    return i.set(i.t, i.p, r ? Math.round((i.s + i.c * r) * 1e4) / 1e4 + i.u : i.b, i);
  },
  Ry = function (r, i) {
    return i.set(
      i.t,
      i.p,
      r === 1 ? i.e : r ? Math.round((i.s + i.c * r) * 1e4) / 1e4 + i.u : i.b,
      i,
    );
  },
  Ny = function (r, i) {
    var o = i.s + i.c * r;
    i.set(i.t, i.p, ~~(o + (o < 0 ? -0.5 : 0.5)) + i.u, i);
  },
  Zp = function (r, i) {
    return i.set(i.t, i.p, r ? i.e : i.b, i);
  },
  Jp = function (r, i) {
    return i.set(i.t, i.p, r !== 1 ? i.b : i.e, i);
  },
  My = function (r, i, o) {
    return (r.style[i] = o);
  },
  Ly = function (r, i, o) {
    return r.style.setProperty(i, o);
  },
  Dy = function (r, i, o) {
    return (r._gsap[i] = o);
  },
  zy = function (r, i, o) {
    return (r._gsap.scaleX = r._gsap.scaleY = o);
  },
  Ay = function (r, i, o, s, a) {
    var c = r._gsap;
    ((c.scaleX = c.scaleY = o), c.renderTransform(a, c));
  },
  jy = function (r, i, o, s, a) {
    var c = r._gsap;
    ((c[i] = o), c.renderTransform(a, c));
  },
  ze = "transform",
  gt = ze + "Origin",
  Iy = function p(r, i) {
    var o = this,
      s = this.target,
      a = s.style,
      c = s._gsap;
    if (r in mn && a) {
      if (((this.tfm = this.tfm || {}), r !== "transform"))
        ((r = tn[r] || r),
          ~r.indexOf(",")
            ? r.split(",").forEach(function (d) {
                return (o.tfm[d] = pn(s, d));
              })
            : (this.tfm[r] = c.x ? c[r] : pn(s, r)),
          r === gt && (this.tfm.zOrigin = c.zOrigin));
      else
        return tn.transform.split(",").forEach(function (d) {
          return p.call(o, d, i);
        });
      if (this.props.indexOf(ze) >= 0) return;
      (c.svg && ((this.svgo = s.getAttribute("data-svg-origin")), this.props.push(gt, i, "")),
        (r = ze));
    }
    (a || i) && this.props.push(r, i, a[r]);
  },
  eh = function (r) {
    r.translate &&
      (r.removeProperty("translate"), r.removeProperty("scale"), r.removeProperty("rotate"));
  },
  Fy = function () {
    var r = this.props,
      i = this.target,
      o = i.style,
      s = i._gsap,
      a,
      c;
    for (a = 0; a < r.length; a += 3)
      r[a + 1]
        ? r[a + 1] === 2
          ? i[r[a]](r[a + 2])
          : (i[r[a]] = r[a + 2])
        : r[a + 2]
          ? (o[r[a]] = r[a + 2])
          : o.removeProperty(
              r[a].substr(0, 2) === "--" ? r[a] : r[a].replace(ka, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (c in this.tfm) s[c] = this.tfm[c];
      (s.svg && (s.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")),
        (a = Pa()),
        (!a || !a.isStart) &&
          !o[ze] &&
          (eh(o),
          s.zOrigin &&
            o[gt] &&
            ((o[gt] += " " + s.zOrigin + "px"), (s.zOrigin = 0), s.renderTransform()),
          (s.uncache = 1)));
    }
  },
  th = function (r, i) {
    var o = { target: r, props: [], revert: Fy, save: Iy };
    return (
      r._gsap || vt.core.getCache(r),
      i &&
        r.style &&
        r.nodeType &&
        i.split(",").forEach(function (s) {
          return o.save(s);
        }),
      o
    );
  },
  nh,
  ra = function (r, i) {
    var o = jn.createElementNS
      ? jn.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), r)
      : jn.createElement(r);
    return o && o.style ? o : jn.createElement(r);
  },
  Ct = function p(r, i, o) {
    var s = getComputedStyle(r);
    return (
      s[i] ||
      s.getPropertyValue(i.replace(ka, "-$1").toLowerCase()) ||
      s.getPropertyValue(i) ||
      (!o && p(r, Qr(i) || i, 1)) ||
      ""
    );
  },
  Bd = "O,Moz,ms,Ms,Webkit".split(","),
  Qr = function (r, i, o) {
    var s = i || or,
      a = s.style,
      c = 5;
    if (r in a && !o) return r;
    for (r = r.charAt(0).toUpperCase() + r.substr(1); c-- && !(Bd[c] + r in a););
    return c < 0 ? null : (c === 3 ? "ms" : c >= 0 ? Bd[c] : "") + r;
  },
  ia = function () {
    ky() &&
      window.document &&
      ((Fd = window),
      (jn = Fd.document),
      (Br = jn.documentElement),
      (or = ra("div") || { style: {} }),
      ra("div"),
      (ze = Qr(ze)),
      (gt = ze + "Origin"),
      (or.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
      (nh = !!Qr("perspective")),
      (Pa = vt.core.reverting),
      (Sa = 1));
  },
  Hd = function (r) {
    var i = r.ownerSVGElement,
      o = ra("svg", (i && i.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
      s = r.cloneNode(!0),
      a;
    ((s.style.display = "block"), o.appendChild(s), Br.appendChild(o));
    try {
      a = s.getBBox();
    } catch {}
    return (o.removeChild(s), Br.removeChild(o), a);
  },
  bd = function (r, i) {
    for (var o = i.length; o--;) if (r.hasAttribute(i[o])) return r.getAttribute(i[o]);
  },
  rh = function (r) {
    var i, o;
    try {
      i = r.getBBox();
    } catch {
      ((i = Hd(r)), (o = 1));
    }
    return (
      (i && (i.width || i.height)) || o || (i = Hd(r)),
      i && !i.width && !i.x && !i.y
        ? {
            x: +bd(r, ["x", "cx", "x1"]) || 0,
            y: +bd(r, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : i
    );
  },
  ih = function (r) {
    return !!(r.getCTM && (!r.parentNode || r.ownerSVGElement) && rh(r));
  },
  Bn = function (r, i) {
    if (i) {
      var o = r.style,
        s;
      (i in mn && i !== gt && (i = ze),
        o.removeProperty
          ? ((s = i.substr(0, 2)),
            (s === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
            o.removeProperty(s === "--" ? i : i.replace(ka, "-$1").toLowerCase()))
          : o.removeAttribute(i));
    }
  },
  In = function (r, i, o, s, a, c) {
    var d = new _t(r._pt, i, o, 0, 1, c ? Jp : Zp);
    return ((r._pt = d), (d.b = s), (d.e = a), r._props.push(o), d);
  },
  Wd = { deg: 1, rad: 1, turn: 1 },
  Uy = { grid: 1, flex: 1 },
  Hn = function p(r, i, o, s) {
    var a = parseFloat(o) || 0,
      c = (o + "").trim().substr((a + "").length) || "px",
      d = or.style,
      h = Ey.test(i),
      m = r.tagName.toLowerCase() === "svg",
      _ = (m ? "client" : "offset") + (h ? "Width" : "Height"),
      g = 100,
      w = s === "px",
      S = s === "%",
      L,
      v,
      R,
      C;
    if (s === c || !a || Wd[s] || Wd[c]) return a;
    if (
      (c !== "px" && !w && (a = p(r, i, o, "px")),
      (C = r.getCTM && ih(r)),
      (S || c === "%") && (mn[i] || ~i.indexOf("adius")))
    )
      return (
        (L = C ? r.getBBox()[h ? "width" : "height"] : r[_]),
        Ue(S ? (a / L) * g : (a / 100) * L)
      );
    if (
      ((d[h ? "width" : "height"] = g + (w ? c : s)),
      (v =
        (s !== "rem" && ~i.indexOf("adius")) || (s === "em" && r.appendChild && !m)
          ? r
          : r.parentNode),
      C && (v = (r.ownerSVGElement || {}).parentNode),
      (!v || v === jn || !v.appendChild) && (v = jn.body),
      (R = v._gsap),
      R && S && R.width && h && R.time === Et.time && !R.uncache)
    )
      return Ue((a / R.width) * g);
    if (S && (i === "height" || i === "width")) {
      var M = r.style[i];
      ((r.style[i] = g + s), (L = r[_]), M ? (r.style[i] = M) : Bn(r, i));
    } else
      ((S || c === "%") && !Uy[Ct(v, "display")] && (d.position = Ct(r, "position")),
        v === r && (d.position = "static"),
        v.appendChild(or),
        (L = or[_]),
        v.removeChild(or),
        (d.position = "absolute"));
    return (
      h && S && ((R = sr(v)), (R.time = Et.time), (R.width = v[_])),
      Ue(w ? (L * a) / g : L && a ? (g / L) * a : 0)
    );
  },
  pn = function (r, i, o, s) {
    var a;
    return (
      Sa || ia(),
      i in tn && i !== "transform" && ((i = tn[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
      mn[i] && i !== "transform"
        ? ((a = Ki(r, s)),
          (a =
            i !== "transformOrigin"
              ? a[i]
              : a.svg
                ? a.origin
                : wo(Ct(r, gt)) + " " + a.zOrigin + "px"))
        : ((a = r.style[i]),
          (!a || a === "auto" || s || ~(a + "").indexOf("calc(")) &&
            (a = (vo[i] && vo[i](r, i, o)) || Ct(r, i) || Sp(r, i) || (i === "opacity" ? 1 : 0))),
      o && !~(a + "").trim().indexOf(" ") ? Hn(r, i, a, o) + o : a
    );
  },
  Vy = function (r, i, o, s) {
    if (!o || o === "none") {
      var a = Qr(i, r, 1),
        c = a && Ct(r, a, 1);
      c && c !== o ? ((i = a), (o = c)) : i === "borderColor" && (o = Ct(r, "borderTopColor"));
    }
    var d = new _t(this._pt, r.style, i, 0, 1, Kp),
      h = 0,
      m = 0,
      _,
      g,
      w,
      S,
      L,
      v,
      R,
      C,
      M,
      O,
      N,
      T;
    if (
      ((d.b = o),
      (d.e = s),
      (o += ""),
      (s += ""),
      s.substring(0, 6) === "var(--" && (s = Ct(r, s.substring(4, s.indexOf(")")))),
      s === "auto" &&
        ((v = r.style[i]), (r.style[i] = s), (s = Ct(r, i) || s), v ? (r.style[i] = v) : Bn(r, i)),
      (_ = [o, s]),
      Bp(_),
      (o = _[0]),
      (s = _[1]),
      (w = o.match(Fr) || []),
      (T = s.match(Fr) || []),
      T.length)
    ) {
      for (; (g = Fr.exec(s));)
        ((R = g[0]),
          (M = s.substring(h, g.index)),
          L ? (L = (L + 1) % 5) : (M.substr(-5) === "rgba(" || M.substr(-5) === "hsla(") && (L = 1),
          R !== (v = w[m++] || "") &&
            ((S = parseFloat(v) || 0),
            (N = v.substr((S + "").length)),
            R.charAt(1) === "=" && (R = Vr(S, R) + N),
            (C = parseFloat(R)),
            (O = R.substr((C + "").length)),
            (h = Fr.lastIndex - O.length),
            O || ((O = O || Ot.units[i] || N), h === s.length && ((s += O), (d.e += O))),
            N !== O && (S = Hn(r, i, v, O) || 0),
            (d._pt = {
              _next: d._pt,
              p: M || m === 1 ? M : ",",
              s: S,
              c: C - S,
              m: (L && L < 4) || i === "zIndex" ? Math.round : 0,
            })));
      d.c = h < s.length ? s.substring(h, s.length) : "";
    } else d.r = i === "display" && s === "none" ? Jp : Zp;
    return (_p.test(s) && (d.e = 0), (this._pt = d), d);
  },
  $d = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  By = function (r) {
    var i = r.split(" "),
      o = i[0],
      s = i[1] || "50%";
    return (
      (o === "top" || o === "bottom" || s === "left" || s === "right") &&
        ((r = o), (o = s), (s = r)),
      (i[0] = $d[o] || o),
      (i[1] = $d[s] || s),
      i.join(" ")
    );
  },
  Hy = function (r, i) {
    if (i.tween && i.tween._time === i.tween._dur) {
      var o = i.t,
        s = o.style,
        a = i.u,
        c = o._gsap,
        d,
        h,
        m;
      if (a === "all" || a === !0) ((s.cssText = ""), (h = 1));
      else
        for (a = a.split(","), m = a.length; --m > -1;)
          ((d = a[m]), mn[d] && ((h = 1), (d = d === "transformOrigin" ? gt : ze)), Bn(o, d));
      h &&
        (Bn(o, ze),
        c &&
          (c.svg && o.removeAttribute("transform"),
          (s.scale = s.rotate = s.translate = "none"),
          Ki(o, 1),
          (c.uncache = 1),
          eh(s)));
    }
  },
  vo = {
    clearProps: function (r, i, o, s, a) {
      if (a.data !== "isFromStart") {
        var c = (r._pt = new _t(r._pt, i, o, 0, 0, Hy));
        return ((c.u = s), (c.pr = -10), (c.tween = a), r._props.push(o), 1);
      }
    },
  },
  Xi = [1, 0, 0, 1, 0, 0],
  lh = {},
  oh = function (r) {
    return r === "matrix(1, 0, 0, 1, 0, 0)" || r === "none" || !r;
  },
  Yd = function (r) {
    var i = Ct(r, ze);
    return oh(i) ? Xi : i.substr(7).match(yp).map(Ue);
  },
  Ea = function (r, i) {
    var o = r._gsap || sr(r),
      s = r.style,
      a = Yd(r),
      c,
      d,
      h,
      m;
    return o.svg && r.getAttribute("transform")
      ? ((h = r.transform.baseVal.consolidate().matrix),
        (a = [h.a, h.b, h.c, h.d, h.e, h.f]),
        a.join(",") === "1,0,0,1,0,0" ? Xi : a)
      : (a === Xi &&
          !r.offsetParent &&
          r !== Br &&
          !o.svg &&
          ((h = s.display),
          (s.display = "block"),
          (c = r.parentNode),
          (!c || (!r.offsetParent && !r.getBoundingClientRect().width)) &&
            ((m = 1), (d = r.nextElementSibling), Br.appendChild(r)),
          (a = Yd(r)),
          h ? (s.display = h) : Bn(r, "display"),
          m && (d ? c.insertBefore(r, d) : c ? c.appendChild(r) : Br.removeChild(r))),
        i && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a);
  },
  la = function (r, i, o, s, a, c) {
    var d = r._gsap,
      h = a || Ea(r, !0),
      m = d.xOrigin || 0,
      _ = d.yOrigin || 0,
      g = d.xOffset || 0,
      w = d.yOffset || 0,
      S = h[0],
      L = h[1],
      v = h[2],
      R = h[3],
      C = h[4],
      M = h[5],
      O = i.split(" "),
      N = parseFloat(O[0]) || 0,
      T = parseFloat(O[1]) || 0,
      U,
      I,
      b,
      V;
    (o
      ? h !== Xi &&
        (I = S * R - L * v) &&
        ((b = N * (R / I) + T * (-v / I) + (v * M - R * C) / I),
        (V = N * (-L / I) + T * (S / I) - (S * M - L * C) / I),
        (N = b),
        (T = V))
      : ((U = rh(r)),
        (N = U.x + (~O[0].indexOf("%") ? (N / 100) * U.width : N)),
        (T = U.y + (~(O[1] || O[0]).indexOf("%") ? (T / 100) * U.height : T))),
      s || (s !== !1 && d.smooth)
        ? ((C = N - m),
          (M = T - _),
          (d.xOffset = g + (C * S + M * v) - C),
          (d.yOffset = w + (C * L + M * R) - M))
        : (d.xOffset = d.yOffset = 0),
      (d.xOrigin = N),
      (d.yOrigin = T),
      (d.smooth = !!s),
      (d.origin = i),
      (d.originIsAbsolute = !!o),
      (r.style[gt] = "0px 0px"),
      c &&
        (In(c, d, "xOrigin", m, N),
        In(c, d, "yOrigin", _, T),
        In(c, d, "xOffset", g, d.xOffset),
        In(c, d, "yOffset", w, d.yOffset)),
      r.setAttribute("data-svg-origin", N + " " + T));
  },
  Ki = function (r, i) {
    var o = r._gsap || new bp(r);
    if ("x" in o && !i && !o.uncache) return o;
    var s = r.style,
      a = o.scaleX < 0,
      c = "px",
      d = "deg",
      h = getComputedStyle(r),
      m = Ct(r, gt) || "0",
      _,
      g,
      w,
      S,
      L,
      v,
      R,
      C,
      M,
      O,
      N,
      T,
      U,
      I,
      b,
      V,
      G,
      Z,
      ee,
      te,
      B,
      q,
      ae,
      se,
      Q,
      H,
      W,
      k,
      F,
      oe,
      ue,
      pe;
    return (
      (_ = g = w = v = R = C = M = O = N = 0),
      (S = L = 1),
      (o.svg = !!(r.getCTM && ih(r))),
      h.translate &&
        ((h.translate !== "none" || h.scale !== "none" || h.rotate !== "none") &&
          (s[ze] =
            (h.translate !== "none"
              ? "translate3d(" + (h.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") "
              : "") +
            (h.rotate !== "none" ? "rotate(" + h.rotate + ") " : "") +
            (h.scale !== "none" ? "scale(" + h.scale.split(" ").join(",") + ") " : "") +
            (h[ze] !== "none" ? h[ze] : "")),
        (s.scale = s.rotate = s.translate = "none")),
      (I = Ea(r, o.svg)),
      o.svg &&
        (o.uncache
          ? ((Q = r.getBBox()), (m = o.xOrigin - Q.x + "px " + (o.yOrigin - Q.y) + "px"), (se = ""))
          : (se = !i && r.getAttribute("data-svg-origin")),
        la(r, se || m, !!se || o.originIsAbsolute, o.smooth !== !1, I)),
      (T = o.xOrigin || 0),
      (U = o.yOrigin || 0),
      I !== Xi &&
        ((Z = I[0]),
        (ee = I[1]),
        (te = I[2]),
        (B = I[3]),
        (_ = q = I[4]),
        (g = ae = I[5]),
        I.length === 6
          ? ((S = Math.sqrt(Z * Z + ee * ee)),
            (L = Math.sqrt(B * B + te * te)),
            (v = Z || ee ? Ir(ee, Z) * lr : 0),
            (M = te || B ? Ir(te, B) * lr + v : 0),
            M && (L *= Math.abs(Math.cos(M * Hr))),
            o.svg && ((_ -= T - (T * Z + U * te)), (g -= U - (T * ee + U * B))))
          : ((pe = I[6]),
            (oe = I[7]),
            (W = I[8]),
            (k = I[9]),
            (F = I[10]),
            (ue = I[11]),
            (_ = I[12]),
            (g = I[13]),
            (w = I[14]),
            (b = Ir(pe, F)),
            (R = b * lr),
            b &&
              ((V = Math.cos(-b)),
              (G = Math.sin(-b)),
              (se = q * V + W * G),
              (Q = ae * V + k * G),
              (H = pe * V + F * G),
              (W = q * -G + W * V),
              (k = ae * -G + k * V),
              (F = pe * -G + F * V),
              (ue = oe * -G + ue * V),
              (q = se),
              (ae = Q),
              (pe = H)),
            (b = Ir(-te, F)),
            (C = b * lr),
            b &&
              ((V = Math.cos(-b)),
              (G = Math.sin(-b)),
              (se = Z * V - W * G),
              (Q = ee * V - k * G),
              (H = te * V - F * G),
              (ue = B * G + ue * V),
              (Z = se),
              (ee = Q),
              (te = H)),
            (b = Ir(ee, Z)),
            (v = b * lr),
            b &&
              ((V = Math.cos(b)),
              (G = Math.sin(b)),
              (se = Z * V + ee * G),
              (Q = q * V + ae * G),
              (ee = ee * V - Z * G),
              (ae = ae * V - q * G),
              (Z = se),
              (q = Q)),
            R && Math.abs(R) + Math.abs(v) > 359.9 && ((R = v = 0), (C = 180 - C)),
            (S = Ue(Math.sqrt(Z * Z + ee * ee + te * te))),
            (L = Ue(Math.sqrt(ae * ae + pe * pe))),
            (b = Ir(q, ae)),
            (M = Math.abs(b) > 2e-4 ? b * lr : 0),
            (N = ue ? 1 / (ue < 0 ? -ue : ue) : 0)),
        o.svg &&
          ((se = r.getAttribute("transform")),
          (o.forceCSS = r.setAttribute("transform", "") || !oh(Ct(r, ze))),
          se && r.setAttribute("transform", se))),
      Math.abs(M) > 90 &&
        Math.abs(M) < 270 &&
        (a
          ? ((S *= -1), (M += v <= 0 ? 180 : -180), (v += v <= 0 ? 180 : -180))
          : ((L *= -1), (M += M <= 0 ? 180 : -180))),
      (i = i || o.uncache),
      (o.x =
        _ -
        ((o.xPercent =
          _ && ((!i && o.xPercent) || (Math.round(r.offsetWidth / 2) === Math.round(-_) ? -50 : 0)))
          ? (r.offsetWidth * o.xPercent) / 100
          : 0) +
        c),
      (o.y =
        g -
        ((o.yPercent =
          g &&
          ((!i && o.yPercent) || (Math.round(r.offsetHeight / 2) === Math.round(-g) ? -50 : 0)))
          ? (r.offsetHeight * o.yPercent) / 100
          : 0) +
        c),
      (o.z = w + c),
      (o.scaleX = Ue(S)),
      (o.scaleY = Ue(L)),
      (o.rotation = Ue(v) + d),
      (o.rotationX = Ue(R) + d),
      (o.rotationY = Ue(C) + d),
      (o.skewX = M + d),
      (o.skewY = O + d),
      (o.transformPerspective = N + c),
      (o.zOrigin = parseFloat(m.split(" ")[2]) || (!i && o.zOrigin) || 0) && (s[gt] = wo(m)),
      (o.xOffset = o.yOffset = 0),
      (o.force3D = Ot.force3D),
      (o.renderTransform = o.svg ? Wy : nh ? sh : by),
      (o.uncache = 0),
      o
    );
  },
  wo = function (r) {
    return (r = r.split(" "))[0] + " " + r[1];
  },
  Mu = function (r, i, o) {
    var s = rt(i);
    return Ue(parseFloat(i) + parseFloat(Hn(r, "x", o + "px", s))) + s;
  },
  by = function (r, i) {
    ((i.z = "0px"), (i.rotationY = i.rotationX = "0deg"), (i.force3D = 0), sh(r, i));
  },
  rr = "0deg",
  Ai = "0px",
  ir = ") ",
  sh = function (r, i) {
    var o = i || this,
      s = o.xPercent,
      a = o.yPercent,
      c = o.x,
      d = o.y,
      h = o.z,
      m = o.rotation,
      _ = o.rotationY,
      g = o.rotationX,
      w = o.skewX,
      S = o.skewY,
      L = o.scaleX,
      v = o.scaleY,
      R = o.transformPerspective,
      C = o.force3D,
      M = o.target,
      O = o.zOrigin,
      N = "",
      T = (C === "auto" && r && r !== 1) || C === !0;
    if (O && (g !== rr || _ !== rr)) {
      var U = parseFloat(_) * Hr,
        I = Math.sin(U),
        b = Math.cos(U),
        V;
      ((U = parseFloat(g) * Hr),
        (V = Math.cos(U)),
        (c = Mu(M, c, I * V * -O)),
        (d = Mu(M, d, -Math.sin(U) * -O)),
        (h = Mu(M, h, b * V * -O + O)));
    }
    (R !== Ai && (N += "perspective(" + R + ir),
      (s || a) && (N += "translate(" + s + "%, " + a + "%) "),
      (T || c !== Ai || d !== Ai || h !== Ai) &&
        (N +=
          h !== Ai || T
            ? "translate3d(" + c + ", " + d + ", " + h + ") "
            : "translate(" + c + ", " + d + ir),
      m !== rr && (N += "rotate(" + m + ir),
      _ !== rr && (N += "rotateY(" + _ + ir),
      g !== rr && (N += "rotateX(" + g + ir),
      (w !== rr || S !== rr) && (N += "skew(" + w + ", " + S + ir),
      (L !== 1 || v !== 1) && (N += "scale(" + L + ", " + v + ir),
      (M.style[ze] = N || "translate(0, 0)"));
  },
  Wy = function (r, i) {
    var o = i || this,
      s = o.xPercent,
      a = o.yPercent,
      c = o.x,
      d = o.y,
      h = o.rotation,
      m = o.skewX,
      _ = o.skewY,
      g = o.scaleX,
      w = o.scaleY,
      S = o.target,
      L = o.xOrigin,
      v = o.yOrigin,
      R = o.xOffset,
      C = o.yOffset,
      M = o.forceCSS,
      O = parseFloat(c),
      N = parseFloat(d),
      T,
      U,
      I,
      b,
      V;
    ((h = parseFloat(h)),
      (m = parseFloat(m)),
      (_ = parseFloat(_)),
      _ && ((_ = parseFloat(_)), (m += _), (h += _)),
      h || m
        ? ((h *= Hr),
          (m *= Hr),
          (T = Math.cos(h) * g),
          (U = Math.sin(h) * g),
          (I = Math.sin(h - m) * -w),
          (b = Math.cos(h - m) * w),
          m &&
            ((_ *= Hr),
            (V = Math.tan(m - _)),
            (V = Math.sqrt(1 + V * V)),
            (I *= V),
            (b *= V),
            _ && ((V = Math.tan(_)), (V = Math.sqrt(1 + V * V)), (T *= V), (U *= V))),
          (T = Ue(T)),
          (U = Ue(U)),
          (I = Ue(I)),
          (b = Ue(b)))
        : ((T = g), (b = w), (U = I = 0)),
      ((O && !~(c + "").indexOf("px")) || (N && !~(d + "").indexOf("px"))) &&
        ((O = Hn(S, "x", c, "px")), (N = Hn(S, "y", d, "px"))),
      (L || v || R || C) &&
        ((O = Ue(O + L - (L * T + v * I) + R)), (N = Ue(N + v - (L * U + v * b) + C))),
      (s || a) &&
        ((V = S.getBBox()), (O = Ue(O + (s / 100) * V.width)), (N = Ue(N + (a / 100) * V.height))),
      (V = "matrix(" + T + "," + U + "," + I + "," + b + "," + O + "," + N + ")"),
      S.setAttribute("transform", V),
      M && (S.style[ze] = V));
  },
  $y = function (r, i, o, s, a) {
    var c = 360,
      d = Qe(a),
      h = parseFloat(a) * (d && ~a.indexOf("rad") ? lr : 1),
      m = h - s,
      _ = s + m + "deg",
      g,
      w;
    return (
      d &&
        ((g = a.split("_")[1]),
        g === "short" && ((m %= c), m !== m % (c / 2) && (m += m < 0 ? c : -c)),
        g === "cw" && m < 0
          ? (m = ((m + c * Vd) % c) - ~~(m / c) * c)
          : g === "ccw" && m > 0 && (m = ((m - c * Vd) % c) - ~~(m / c) * c)),
      (r._pt = w = new _t(r._pt, i, o, s, m, Cy)),
      (w.e = _),
      (w.u = "deg"),
      r._props.push(o),
      w
    );
  },
  Qd = function (r, i) {
    for (var o in i) r[o] = i[o];
    return r;
  },
  Yy = function (r, i, o) {
    var s = Qd({}, o._gsap),
      a = "perspective,force3D,transformOrigin,svgOrigin",
      c = o.style,
      d,
      h,
      m,
      _,
      g,
      w,
      S,
      L;
    s.svg
      ? ((m = o.getAttribute("transform")),
        o.setAttribute("transform", ""),
        (c[ze] = i),
        (d = Ki(o, 1)),
        Bn(o, ze),
        o.setAttribute("transform", m))
      : ((m = getComputedStyle(o)[ze]), (c[ze] = i), (d = Ki(o, 1)), (c[ze] = m));
    for (h in mn)
      ((m = s[h]),
        (_ = d[h]),
        m !== _ &&
          a.indexOf(h) < 0 &&
          ((S = rt(m)),
          (L = rt(_)),
          (g = S !== L ? Hn(o, h, m, L) : parseFloat(m)),
          (w = parseFloat(_)),
          (r._pt = new _t(r._pt, d, h, g, w - g, na)),
          (r._pt.u = L || 0),
          r._props.push(h)));
    Qd(d, s);
  };
yt("padding,margin,Width,Radius", function (p, r) {
  var i = "Top",
    o = "Right",
    s = "Bottom",
    a = "Left",
    c = (r < 3 ? [i, o, s, a] : [i + a, i + o, s + o, s + a]).map(function (d) {
      return r < 2 ? p + d : "border" + d + p;
    });
  vo[r > 1 ? "border" + p : p] = function (d, h, m, _, g) {
    var w, S;
    if (arguments.length < 4)
      return (
        (w = c.map(function (L) {
          return pn(d, L, m);
        })),
        (S = w.join(" ")),
        S.split(w[0]).length === 5 ? w[0] : S
      );
    ((w = (_ + "").split(" ")),
      (S = {}),
      c.forEach(function (L, v) {
        return (S[L] = w[v] = w[v] || w[((v - 1) / 2) | 0]);
      }),
      d.init(h, S, g));
  };
});
var uh = {
  name: "css",
  register: ia,
  targetTest: function (r) {
    return r.style && r.nodeType;
  },
  init: function (r, i, o, s, a) {
    var c = this._props,
      d = r.style,
      h = o.vars.startAt,
      m,
      _,
      g,
      w,
      S,
      L,
      v,
      R,
      C,
      M,
      O,
      N,
      T,
      U,
      I,
      b,
      V;
    (Sa || ia(), (this.styles = this.styles || th(r)), (b = this.styles.props), (this.tween = o));
    for (v in i)
      if (v !== "autoRound" && ((_ = i[v]), !(kt[v] && Wp(v, i, o, s, r, a)))) {
        if (
          ((S = typeof _),
          (L = vo[v]),
          S === "function" && ((_ = _.call(o, s, r, a)), (S = typeof _)),
          S === "string" && ~_.indexOf("random(") && (_ = $i(_)),
          L)
        )
          L(this, r, v, _, o) && (I = 1);
        else if (v.substr(0, 2) === "--")
          ((m = (getComputedStyle(r).getPropertyValue(v) + "").trim()),
            (_ += ""),
            (Un.lastIndex = 0),
            Un.test(m) ||
              ((R = rt(m)), (C = rt(_)), C ? R !== C && (m = Hn(r, v, m, C) + C) : R && (_ += R)),
            this.add(d, "setProperty", m, _, s, a, 0, 0, v),
            c.push(v),
            b.push(v, 0, d[v]));
        else if (S !== "undefined") {
          if (
            (h && v in h
              ? ((m = typeof h[v] == "function" ? h[v].call(o, s, r, a) : h[v]),
                Qe(m) && ~m.indexOf("random(") && (m = $i(m)),
                rt(m + "") || m === "auto" || (m += Ot.units[v] || rt(pn(r, v)) || ""),
                (m + "").charAt(1) === "=" && (m = pn(r, v)))
              : (m = pn(r, v)),
            (w = parseFloat(m)),
            (M = S === "string" && _.charAt(1) === "=" && _.substr(0, 2)),
            M && (_ = _.substr(2)),
            (g = parseFloat(_)),
            v in tn &&
              (v === "autoAlpha" &&
                (w === 1 && pn(r, "visibility") === "hidden" && g && (w = 0),
                b.push("visibility", 0, d.visibility),
                In(this, d, "visibility", w ? "inherit" : "hidden", g ? "inherit" : "hidden", !g)),
              v !== "scale" &&
                v !== "transform" &&
                ((v = tn[v]), ~v.indexOf(",") && (v = v.split(",")[0]))),
            (O = v in mn),
            O)
          ) {
            if ((this.styles.save(v), (V = _), S === "string" && _.substring(0, 6) === "var(--")) {
              if (((_ = Ct(r, _.substring(4, _.indexOf(")")))), _.substring(0, 5) === "calc(")) {
                var G = r.style.perspective;
                ((r.style.perspective = _),
                  (_ = Ct(r, "perspective")),
                  G ? (r.style.perspective = G) : Bn(r, "perspective"));
              }
              g = parseFloat(_);
            }
            if (
              (N ||
                ((T = r._gsap),
                (T.renderTransform && !i.parseTransform) || Ki(r, i.parseTransform),
                (U = i.smoothOrigin !== !1 && T.smooth),
                (N = this._pt = new _t(this._pt, d, ze, 0, 1, T.renderTransform, T, 0, -1)),
                (N.dep = 1)),
              v === "scale")
            )
              ((this._pt = new _t(
                this._pt,
                T,
                "scaleY",
                T.scaleY,
                (M ? Vr(T.scaleY, M + g) : g) - T.scaleY || 0,
                na,
              )),
                (this._pt.u = 0),
                c.push("scaleY", v),
                (v += "X"));
            else if (v === "transformOrigin") {
              (b.push(gt, 0, d[gt]),
                (_ = By(_)),
                T.svg
                  ? la(r, _, 0, U, 0, this)
                  : ((C = parseFloat(_.split(" ")[2]) || 0),
                    C !== T.zOrigin && In(this, T, "zOrigin", T.zOrigin, C),
                    In(this, d, v, wo(m), wo(_))));
              continue;
            } else if (v === "svgOrigin") {
              la(r, _, 1, U, 0, this);
              continue;
            } else if (v in lh) {
              $y(this, T, v, w, M ? Vr(w, M + _) : _);
              continue;
            } else if (v === "smoothOrigin") {
              In(this, T, "smooth", T.smooth, _);
              continue;
            } else if (v === "force3D") {
              T[v] = _;
              continue;
            } else if (v === "transform") {
              Yy(this, _, r);
              continue;
            }
          } else v in d || (v = Qr(v) || v);
          if (O || ((g || g === 0) && (w || w === 0) && !Ty.test(_) && v in d))
            ((R = (m + "").substr((w + "").length)),
              g || (g = 0),
              (C = rt(_) || (v in Ot.units ? Ot.units[v] : R)),
              R !== C && (w = Hn(r, v, m, C)),
              (this._pt = new _t(
                this._pt,
                O ? T : d,
                v,
                w,
                (M ? Vr(w, M + g) : g) - w,
                !O && (C === "px" || v === "zIndex") && i.autoRound !== !1 ? Ny : na,
              )),
              (this._pt.u = C || 0),
              O && V !== _
                ? ((this._pt.b = m), (this._pt.e = V), (this._pt.r = Ry))
                : R !== C && C !== "%" && ((this._pt.b = m), (this._pt.r = Oy)));
          else if (v in d) Vy.call(this, r, v, m, M ? M + _ : _);
          else if (v in r) this.add(r, v, m || r[v], M ? M + _ : _, s, a);
          else if (v !== "parseTransform") {
            da(v, _);
            continue;
          }
          (O ||
            (v in d
              ? b.push(v, 0, d[v])
              : typeof r[v] == "function"
                ? b.push(v, 2, r[v]())
                : b.push(v, 1, m || r[v])),
            c.push(v));
        }
      }
    I && qp(this);
  },
  render: function (r, i) {
    if (i.tween._time || !Pa()) for (var o = i._pt; o;) (o.r(r, o.d), (o = o._next));
    else i.styles.revert();
  },
  get: pn,
  aliases: tn,
  getSetter: function (r, i, o) {
    var s = tn[i];
    return (
      s && s.indexOf(",") < 0 && (i = s),
      i in mn && i !== gt && (r._gsap.x || pn(r, "x"))
        ? o && Ud === o
          ? i === "scale"
            ? zy
            : Dy
          : (Ud = o || {}) && (i === "scale" ? Ay : jy)
        : r.style && !aa(r.style[i])
          ? My
          : ~i.indexOf("-")
            ? Ly
            : wa(r, i)
    );
  },
  core: { _removeProperty: Bn, _getMatrix: Ea },
};
vt.utils.checkPrefix = Qr;
vt.core.getStyleSaver = th;
(function (p, r, i, o) {
  var s = yt(p + "," + r + "," + i, function (a) {
    mn[a] = 1;
  });
  (yt(r, function (a) {
    ((Ot.units[a] = "deg"), (lh[a] = 1));
  }),
    (tn[s[13]] = p + "," + r),
    yt(o, function (a) {
      var c = a.split(":");
      tn[c[1]] = s[c[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
yt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (p) {
  Ot.units[p] = "px";
});
vt.registerPlugin(uh);
var Qt = vt.registerPlugin(uh) || vt;
Qt.core.Tween;
function ah({
  onMenuClick: p,
  className: r,
  style: i,
  menuAriaLabel: o = "Toggle menu",
  menuBg: s = "#fff",
  menuContentColor: a = "#111",
  useFixedPosition: c = !1,
  items: d,
  animationEase: h = "back.out(1.5)",
  animationDuration: m = 0.5,
  staggerDelay: _ = 0.12,
}) {
  const [g, w] = Ge.useState(!1),
    [S, L] = Ge.useState(!1),
    v = Ge.useRef(null),
    R = Ge.useRef([]),
    C = Ge.useRef([]),
    M = ["bubble-menu", c ? "fixed" : "absolute", r].filter(Boolean).join(" "),
    O = () => {
      const T = !g;
      (T && L(!0), w(T), p == null || p(T));
    },
    N = (T) => {
      (O(), Bi(T));
    };
  return (
    Ge.useEffect(() => {
      const T = v.current,
        U = R.current.filter(Boolean),
        I = C.current.filter(Boolean);
      !T ||
        !U.length ||
        (g
          ? (Qt.set(T, { display: "flex" }),
            Qt.killTweensOf([...U, ...I]),
            Qt.set(U, { scale: 0, transformOrigin: "50% 50%" }),
            Qt.set(I, { y: 24, autoAlpha: 0 }),
            U.forEach((b, V) => {
              const G = V * _ + Qt.utils.random(-0.05, 0.05),
                Z = Qt.timeline({ delay: G });
              (Z.to(b, { scale: 1, duration: m, ease: h }),
                I[V] &&
                  Z.to(
                    I[V],
                    { y: 0, autoAlpha: 1, duration: m, ease: "power3.out" },
                    `-=${m * 0.9}`,
                  ));
            }))
          : S &&
            (Qt.killTweensOf([...U, ...I]),
            Qt.to(I, { y: 24, autoAlpha: 0, duration: 0.2, ease: "power3.in" }),
            Qt.to(U, {
              scale: 0,
              duration: 0.2,
              ease: "power3.in",
              onComplete: () => {
                (Qt.set(T, { display: "none" }), L(!1));
              },
            })));
    }, [g, S, h, m, _]),
    A.jsxs(A.Fragment, {
      children: [
        A.jsx("nav", {
          className: M,
          style: i,
          "aria-label": "Main navigation",
          children: A.jsxs("button", {
            type: "button",
            className: `bubble toggle-bubble menu-btn ${g ? "open" : ""}`,
            onClick: O,
            "aria-label": o,
            "aria-expanded": g,
            style: { background: s },
            children: [
              A.jsx("span", { className: "menu-line", style: { background: a } }),
              A.jsx("span", { className: "menu-line short", style: { background: a } }),
            ],
          }),
        }),
        S &&
          A.jsx("div", {
            ref: v,
            className: "bubble-menu-items fixed",
            children: A.jsx("ul", {
              className: "pill-list",
              children:
                d == null
                  ? void 0
                  : d.map((T, U) => {
                      var I, b;
                      return A.jsx(
                        "li",
                        {
                          children: A.jsx("a", {
                            href: fp(T.route),
                            className: "pill-link",
                            style: {
                              "--item-rot": `${T.rotation ?? 0}deg`,
                              "--pill-bg": s,
                              "--pill-color": a,
                              "--hover-bg": (I = T.hoverStyles) == null ? void 0 : I.bgColor,
                              "--hover-color": (b = T.hoverStyles) == null ? void 0 : b.textColor,
                            },
                            ref: (V) => {
                              R.current[U] = V;
                            },
                            onClick: (V) => {
                              (V.preventDefault(), N(T.route));
                            },
                            "aria-label": T.ariaLabel ?? T.label,
                            children: A.jsx("span", {
                              className: "pill-label",
                              ref: (V) => {
                                C.current[U] = V;
                              },
                              children: T.label,
                            }),
                          }),
                        },
                        T.route,
                      );
                    }),
            }),
          }),
      ],
    })
  );
}
function oa({ width: p = 120, className: r }) {
  return A.jsx("svg", {
    width: p,
    viewBox: "135.5 361.38 420.32 149.8",
    fill: "currentColor",
    className: r,
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "Nike",
    role: "img",
    children: A.jsx("path", {
      d: "m181.86 511.11c-12.524-0.49755-22.77-3.9244-30.782-10.289-1.529-1.2159-5.1725-4.8616-6.3949-6.3992-3.2489-4.0853-5.4578-8.0611-6.931-12.472-4.5334-13.579-2.2002-31.397 6.6737-50.953 7.5979-16.742 19.322-33.347 39.776-56.344 3.013-3.384 11.986-13.281 12.043-13.281 0.0216 0-0.46749 0.84706-1.083 1.8786-5.3183 8.9082-9.8689 19.401-12.348 28.485-3.9823 14.576-3.502 27.085 1.4068 36.784 3.3862 6.6822 9.1913 12.47 15.719 15.67 11.428 5.5993 28.159 6.0625 48.592 1.3554 1.4068-0.32599 71.116-18.831 154.91-41.123 83.794-22.294 152.36-40.52 152.37-40.505 0.0237 0.0193-194.68 83.333-295.75 126.56-16.007 6.8431-20.287 8.5715-27.812 11.214-19.236 6.7551-36.467 9.9783-50.396 9.4251z",
    }),
  });
}
const Qy = "modulepreload",
  Xy = function (p) {
    return "/preset-sites/acreage-nike/" + p;
  },
  Xd = {},
  pt = function (r, i, o) {
    let s = Promise.resolve();
    if (i && i.length > 0) {
      let c = function (m) {
        return Promise.all(
          m.map((_) =>
            Promise.resolve(_).then(
              (g) => ({ status: "fulfilled", value: g }),
              (g) => ({ status: "rejected", reason: g }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const d = document.querySelector("meta[property=csp-nonce]"),
        h = (d == null ? void 0 : d.nonce) || (d == null ? void 0 : d.getAttribute("nonce"));
      s = c(
        i.map((m) => {
          if (((m = Xy(m)), m in Xd)) return;
          Xd[m] = !0;
          const _ = m.endsWith(".css"),
            g = _ ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${g}`)) return;
          const w = document.createElement("link");
          if (
            ((w.rel = _ ? "stylesheet" : Qy),
            _ || (w.as = "script"),
            (w.crossOrigin = ""),
            (w.href = m),
            h && w.setAttribute("nonce", h),
            document.head.appendChild(w),
            _)
          )
            return new Promise((S, L) => {
              (w.addEventListener("load", S),
                w.addEventListener("error", () => L(new Error(`Unable to preload CSS for ${m}`))));
            });
        }),
      );
    }
    function a(c) {
      const d = new Event("vite:preloadError", { cancelable: !0 });
      if (((d.payload = c), window.dispatchEvent(d), !d.defaultPrevented)) throw c;
    }
    return s.then((c) => {
      for (const d of c || []) d.status === "rejected" && a(d.reason);
      return r().catch(a);
    });
  };
var Lu, Kd;
function Ky() {
  if (Kd) return Lu;
  ((Kd = 1),
    (Lu = function (s, a, c) {
      var d = document.head || document.getElementsByTagName("head")[0],
        h = document.createElement("script");
      (typeof a == "function" && ((c = a), (a = {})),
        (a = a || {}),
        (c = c || function () {}),
        (h.type = a.type || "text/javascript"),
        (h.charset = a.charset || "utf8"),
        (h.async = "async" in a ? !!a.async : !0),
        (h.src = s),
        a.attrs && p(h, a.attrs),
        a.text && (h.text = "" + a.text));
      var m = "onload" in h ? r : i;
      (m(h, c), h.onload || r(h, c), d.appendChild(h));
    }));
  function p(o, s) {
    for (var a in s) o.setAttribute(a, s[a]);
  }
  function r(o, s) {
    ((o.onload = function () {
      ((this.onerror = this.onload = null), s(null, o));
    }),
      (o.onerror = function () {
        ((this.onerror = this.onload = null), s(new Error("Failed to load " + this.src), o));
      }));
  }
  function i(o, s) {
    o.onreadystatechange = function () {
      (this.readyState != "complete" && this.readyState != "loaded") ||
        ((this.onreadystatechange = null), s(null, o));
    };
  }
  return Lu;
}
var Du, qd;
function fh() {
  if (qd) return Du;
  qd = 1;
  var p = function (M) {
    return r(M) && !i(M);
  };
  function r(C) {
    return !!C && typeof C == "object";
  }
  function i(C) {
    var M = Object.prototype.toString.call(C);
    return M === "[object RegExp]" || M === "[object Date]" || a(C);
  }
  var o = typeof Symbol == "function" && Symbol.for,
    s = o ? Symbol.for("react.element") : 60103;
  function a(C) {
    return C.$$typeof === s;
  }
  function c(C) {
    return Array.isArray(C) ? [] : {};
  }
  function d(C, M) {
    return M.clone !== !1 && M.isMergeableObject(C) ? v(c(C), C, M) : C;
  }
  function h(C, M, O) {
    return C.concat(M).map(function (N) {
      return d(N, O);
    });
  }
  function m(C, M) {
    if (!M.customMerge) return v;
    var O = M.customMerge(C);
    return typeof O == "function" ? O : v;
  }
  function _(C) {
    return Object.getOwnPropertySymbols
      ? Object.getOwnPropertySymbols(C).filter(function (M) {
          return Object.propertyIsEnumerable.call(C, M);
        })
      : [];
  }
  function g(C) {
    return Object.keys(C).concat(_(C));
  }
  function w(C, M) {
    try {
      return M in C;
    } catch {
      return !1;
    }
  }
  function S(C, M) {
    return w(C, M) && !(Object.hasOwnProperty.call(C, M) && Object.propertyIsEnumerable.call(C, M));
  }
  function L(C, M, O) {
    var N = {};
    return (
      O.isMergeableObject(C) &&
        g(C).forEach(function (T) {
          N[T] = d(C[T], O);
        }),
      g(M).forEach(function (T) {
        S(C, T) ||
          (w(C, T) && O.isMergeableObject(M[T])
            ? (N[T] = m(T, O)(C[T], M[T], O))
            : (N[T] = d(M[T], O)));
      }),
      N
    );
  }
  function v(C, M, O) {
    ((O = O || {}),
      (O.arrayMerge = O.arrayMerge || h),
      (O.isMergeableObject = O.isMergeableObject || p),
      (O.cloneUnlessOtherwiseSpecified = d));
    var N = Array.isArray(M),
      T = Array.isArray(C),
      U = N === T;
    return U ? (N ? O.arrayMerge(C, M, O) : L(C, M, O)) : d(M, O);
  }
  v.all = function (M, O) {
    if (!Array.isArray(M)) throw new Error("first argument should be an array");
    return M.reduce(function (N, T) {
      return v(N, T, O);
    }, {});
  };
  var R = v;
  return ((Du = R), Du);
}
var zu, Gd;
function ko() {
  if (Gd) return zu;
  Gd = 1;
  var p = Object.create,
    r = Object.defineProperty,
    i = Object.getOwnPropertyDescriptor,
    o = Object.getOwnPropertyNames,
    s = Object.getPrototypeOf,
    a = Object.prototype.hasOwnProperty,
    c = (H, W) => {
      for (var k in W) r(H, k, { get: W[k], enumerable: !0 });
    },
    d = (H, W, k, F) => {
      if ((W && typeof W == "object") || typeof W == "function")
        for (let oe of o(W))
          !a.call(H, oe) &&
            oe !== k &&
            r(H, oe, { get: () => W[oe], enumerable: !(F = i(W, oe)) || F.enumerable });
      return H;
    },
    h = (H, W, k) => (
      (k = H != null ? p(s(H)) : {}),
      d(!H || !H.__esModule ? r(k, "default", { value: H, enumerable: !0 }) : k, H)
    ),
    m = (H) => d(r({}, "__esModule", { value: !0 }), H),
    _ = {};
  (c(_, {
    callPlayer: () => B,
    getConfig: () => ee,
    getSDK: () => Z,
    isBlobUrl: () => ae,
    isMediaStream: () => q,
    lazy: () => L,
    omit: () => te,
    parseEndTime: () => U,
    parseStartTime: () => T,
    queryString: () => b,
    randomString: () => I,
    supportsWebKitPresentationMode: () => se,
  }),
    (zu = m(_)));
  var g = h(Xr()),
    w = h(Ky()),
    S = h(fh());
  const L = (H) =>
      g.default.lazy(async () => {
        const W = await H();
        return typeof W.default == "function" ? W : W.default;
      }),
    v = /[?&#](?:start|t)=([0-9hms]+)/,
    R = /[?&#]end=([0-9hms]+)/,
    C = /(\d+)(h|m|s)/g,
    M = /^\d+$/;
  function O(H, W) {
    if (H instanceof Array) return;
    const k = H.match(W);
    if (k) {
      const F = k[1];
      if (F.match(C)) return N(F);
      if (M.test(F)) return parseInt(F);
    }
  }
  function N(H) {
    let W = 0,
      k = C.exec(H);
    for (; k !== null;) {
      const [, F, oe] = k;
      (oe === "h" && (W += parseInt(F, 10) * 60 * 60),
        oe === "m" && (W += parseInt(F, 10) * 60),
        oe === "s" && (W += parseInt(F, 10)),
        (k = C.exec(H)));
    }
    return W;
  }
  function T(H) {
    return O(H, v);
  }
  function U(H) {
    return O(H, R);
  }
  function I() {
    return Math.random().toString(36).substr(2, 5);
  }
  function b(H) {
    return Object.keys(H)
      .map((W) => `${W}=${H[W]}`)
      .join("&");
  }
  function V(H) {
    return window[H]
      ? window[H]
      : window.exports && window.exports[H]
        ? window.exports[H]
        : window.module && window.module.exports && window.module.exports[H]
          ? window.module.exports[H]
          : null;
  }
  const G = {},
    Z = function (W, k, F = null, oe = () => !0, ue = w.default) {
      const pe = V(k);
      return pe && oe(pe)
        ? Promise.resolve(pe)
        : new Promise((me, xe) => {
            if (G[W]) {
              G[W].push({ resolve: me, reject: xe });
              return;
            }
            G[W] = [{ resolve: me, reject: xe }];
            const ge = (ve) => {
              G[W].forEach((Xe) => Xe.resolve(ve));
            };
            if (F) {
              const ve = window[F];
              window[F] = function () {
                (ve && ve(), ge(V(k)));
              };
            }
            ue(W, (ve) => {
              ve ? (G[W].forEach((Xe) => Xe.reject(ve)), (G[W] = null)) : F || ge(V(k));
            });
          });
    };
  function ee(H, W) {
    return (0, S.default)(W.config, H.config);
  }
  function te(H, ...W) {
    const k = [].concat(...W),
      F = {},
      oe = Object.keys(H);
    for (const ue of oe) k.indexOf(ue) === -1 && (F[ue] = H[ue]);
    return F;
  }
  function B(H, ...W) {
    if (!this.player || !this.player[H]) {
      let k = `ReactPlayer: ${this.constructor.displayName} player could not call %c${H}%c – `;
      return (
        this.player
          ? this.player[H] || (k += "The method was not available")
          : (k += "The player was not available"),
        console.warn(k, "font-weight: bold", ""),
        null
      );
    }
    return this.player[H](...W);
  }
  function q(H) {
    return (
      typeof window < "u" && typeof window.MediaStream < "u" && H instanceof window.MediaStream
    );
  }
  function ae(H) {
    return /^blob:/.test(H);
  }
  function se(H = document.createElement("video")) {
    const W = /iPhone|iPod/.test(navigator.userAgent) === !1;
    return (
      H.webkitSupportsPresentationMode && typeof H.webkitSetPresentationMode == "function" && W
    );
  }
  function Q(H) {
    return H;
  }
  return zu;
}
var Au, Zd;
function qy() {
  if (Zd) return Au;
  Zd = 1;
  var p = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    i = Object.getOwnPropertyNames,
    o = Object.prototype.hasOwnProperty,
    s = (B, q) => {
      for (var ae in q) p(B, ae, { get: q[ae], enumerable: !0 });
    },
    a = (B, q, ae, se) => {
      if ((q && typeof q == "object") || typeof q == "function")
        for (let Q of i(q))
          !o.call(B, Q) &&
            Q !== ae &&
            p(B, Q, { get: () => q[Q], enumerable: !(se = r(q, Q)) || se.enumerable });
      return B;
    },
    c = (B) => a(p({}, "__esModule", { value: !0 }), B),
    d = {};
  (s(d, {
    AUDIO_EXTENSIONS: () => I,
    DASH_EXTENSIONS: () => G,
    FLV_EXTENSIONS: () => Z,
    HLS_EXTENSIONS: () => V,
    MATCH_URL_DAILYMOTION: () => O,
    MATCH_URL_FACEBOOK: () => S,
    MATCH_URL_FACEBOOK_WATCH: () => L,
    MATCH_URL_KALTURA: () => U,
    MATCH_URL_MIXCLOUD: () => N,
    MATCH_URL_MUX: () => w,
    MATCH_URL_SOUNDCLOUD: () => _,
    MATCH_URL_STREAMABLE: () => v,
    MATCH_URL_TWITCH_CHANNEL: () => M,
    MATCH_URL_TWITCH_VIDEO: () => C,
    MATCH_URL_VIDYARD: () => T,
    MATCH_URL_VIMEO: () => g,
    MATCH_URL_WISTIA: () => R,
    MATCH_URL_YOUTUBE: () => m,
    VIDEO_EXTENSIONS: () => b,
    canPlay: () => te,
  }),
    (Au = c(d)));
  var h = ko();
  const m =
      /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
    _ = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/,
    g = /vimeo\.com\/(?!progressive_redirect).+/,
    w = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
    S = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,
    L = /^https?:\/\/fb\.watch\/.+$/,
    v = /streamable\.com\/([a-z0-9]+)$/,
    R = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
    C = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
    M = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,
    O =
      /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,
    N = /mixcloud\.com\/([^/]+\/[^/]+)/,
    T = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,
    U =
      /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,
    I = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
    b = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
    V = /\.(m3u8)($|\?)/i,
    G = /\.(mpd)($|\?)/i,
    Z = /\.(flv)($|\?)/i,
    ee = (B) => {
      if (B instanceof Array) {
        for (const q of B) if ((typeof q == "string" && ee(q)) || ee(q.src)) return !0;
        return !1;
      }
      return (0, h.isMediaStream)(B) || (0, h.isBlobUrl)(B)
        ? !0
        : I.test(B) || b.test(B) || V.test(B) || G.test(B) || Z.test(B);
    },
    te = {
      youtube: (B) => (B instanceof Array ? B.every((q) => m.test(q)) : m.test(B)),
      soundcloud: (B) => _.test(B) && !I.test(B),
      vimeo: (B) => g.test(B) && !b.test(B) && !V.test(B),
      mux: (B) => w.test(B),
      facebook: (B) => S.test(B) || L.test(B),
      streamable: (B) => v.test(B),
      wistia: (B) => R.test(B),
      twitch: (B) => C.test(B) || M.test(B),
      dailymotion: (B) => O.test(B),
      mixcloud: (B) => N.test(B),
      vidyard: (B) => T.test(B),
      kaltura: (B) => U.test(B),
      file: ee,
    };
  return Au;
}
var ju, Jd;
function Gy() {
  if (Jd) return ju;
  Jd = 1;
  var p = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    i = Object.getOwnPropertyNames,
    o = Object.prototype.hasOwnProperty,
    s = (g, w) => {
      for (var S in w) p(g, S, { get: w[S], enumerable: !0 });
    },
    a = (g, w, S, L) => {
      if ((w && typeof w == "object") || typeof w == "function")
        for (let v of i(w))
          !o.call(g, v) &&
            v !== S &&
            p(g, v, { get: () => w[v], enumerable: !(L = r(w, v)) || L.enumerable });
      return g;
    },
    c = (g) => a(p({}, "__esModule", { value: !0 }), g),
    d = {};
  (s(d, { default: () => _ }), (ju = c(d)));
  var h = ko(),
    m = qy(),
    _ = [
      {
        key: "youtube",
        name: "YouTube",
        canPlay: m.canPlay.youtube,
        lazyPlayer: (0, h.lazy)(() =>
          pt(() => import("./YouTube-BfnMGJfV.js").then((g) => g.Y), []),
        ),
      },
      {
        key: "soundcloud",
        name: "SoundCloud",
        canPlay: m.canPlay.soundcloud,
        lazyPlayer: (0, h.lazy)(() =>
          pt(() => import("./SoundCloud-ClQsmlmH.js").then((g) => g.S), []),
        ),
      },
      {
        key: "vimeo",
        name: "Vimeo",
        canPlay: m.canPlay.vimeo,
        lazyPlayer: (0, h.lazy)(() => pt(() => import("./Vimeo-Bkf33c_B.js").then((g) => g.V), [])),
      },
      {
        key: "mux",
        name: "Mux",
        canPlay: m.canPlay.mux,
        lazyPlayer: (0, h.lazy)(() => pt(() => import("./Mux-BLae7oBR.js").then((g) => g.M), [])),
      },
      {
        key: "facebook",
        name: "Facebook",
        canPlay: m.canPlay.facebook,
        lazyPlayer: (0, h.lazy)(() =>
          pt(() => import("./Facebook-DSoGU4Vb.js").then((g) => g.F), []),
        ),
      },
      {
        key: "streamable",
        name: "Streamable",
        canPlay: m.canPlay.streamable,
        lazyPlayer: (0, h.lazy)(() =>
          pt(() => import("./Streamable-BnIiFPQq.js").then((g) => g.S), []),
        ),
      },
      {
        key: "wistia",
        name: "Wistia",
        canPlay: m.canPlay.wistia,
        lazyPlayer: (0, h.lazy)(() =>
          pt(() => import("./Wistia-DBRt4iFq.js").then((g) => g.W), []),
        ),
      },
      {
        key: "twitch",
        name: "Twitch",
        canPlay: m.canPlay.twitch,
        lazyPlayer: (0, h.lazy)(() =>
          pt(() => import("./Twitch-BN1bkerJ.js").then((g) => g.T), []),
        ),
      },
      {
        key: "dailymotion",
        name: "DailyMotion",
        canPlay: m.canPlay.dailymotion,
        lazyPlayer: (0, h.lazy)(() =>
          pt(() => import("./DailyMotion-7miXZcca.js").then((g) => g.D), []),
        ),
      },
      {
        key: "mixcloud",
        name: "Mixcloud",
        canPlay: m.canPlay.mixcloud,
        lazyPlayer: (0, h.lazy)(() =>
          pt(() => import("./Mixcloud-CrAFi2mi.js").then((g) => g.M), []),
        ),
      },
      {
        key: "vidyard",
        name: "Vidyard",
        canPlay: m.canPlay.vidyard,
        lazyPlayer: (0, h.lazy)(() =>
          pt(() => import("./Vidyard-CCquv_W5.js").then((g) => g.V), []),
        ),
      },
      {
        key: "kaltura",
        name: "Kaltura",
        canPlay: m.canPlay.kaltura,
        lazyPlayer: (0, h.lazy)(() =>
          pt(() => import("./Kaltura-vfSPqaqP.js").then((g) => g.K), []),
        ),
      },
      {
        key: "file",
        name: "FilePlayer",
        canPlay: m.canPlay.file,
        canEnablePIP: (g) =>
          m.canPlay.file(g) &&
          (document.pictureInPictureEnabled || (0, h.supportsWebKitPresentationMode)()) &&
          !m.AUDIO_EXTENSIONS.test(g),
        lazyPlayer: (0, h.lazy)(() =>
          pt(() => import("./FilePlayer-9-7-8ZzH.js").then((g) => g.F), []),
        ),
      },
    ];
  return ju;
}
var ep =
  Number.isNaN ||
  function (r) {
    return typeof r == "number" && r !== r;
  };
function Zy(p, r) {
  return !!(p === r || (ep(p) && ep(r)));
}
function Jy(p, r) {
  if (p.length !== r.length) return !1;
  for (var i = 0; i < p.length; i++) if (!Zy(p[i], r[i])) return !1;
  return !0;
}
function e_(p, r) {
  r === void 0 && (r = Jy);
  var i,
    o = [],
    s,
    a = !1;
  function c() {
    for (var d = [], h = 0; h < arguments.length; h++) d[h] = arguments[h];
    return (
      (a && i === this && r(d, o)) || ((s = p.apply(this, d)), (a = !0), (i = this), (o = d)),
      s
    );
  }
  return c;
}
const t_ = Object.freeze(
    Object.defineProperty({ __proto__: null, default: e_ }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  n_ = c0(t_);
var Iu, tp;
function ch() {
  if (tp) return Iu;
  tp = 1;
  var p = typeof Element < "u",
    r = typeof Map == "function",
    i = typeof Set == "function",
    o = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function s(a, c) {
    if (a === c) return !0;
    if (a && c && typeof a == "object" && typeof c == "object") {
      if (a.constructor !== c.constructor) return !1;
      var d, h, m;
      if (Array.isArray(a)) {
        if (((d = a.length), d != c.length)) return !1;
        for (h = d; h-- !== 0;) if (!s(a[h], c[h])) return !1;
        return !0;
      }
      var _;
      if (r && a instanceof Map && c instanceof Map) {
        if (a.size !== c.size) return !1;
        for (_ = a.entries(); !(h = _.next()).done;) if (!c.has(h.value[0])) return !1;
        for (_ = a.entries(); !(h = _.next()).done;)
          if (!s(h.value[1], c.get(h.value[0]))) return !1;
        return !0;
      }
      if (i && a instanceof Set && c instanceof Set) {
        if (a.size !== c.size) return !1;
        for (_ = a.entries(); !(h = _.next()).done;) if (!c.has(h.value[0])) return !1;
        return !0;
      }
      if (o && ArrayBuffer.isView(a) && ArrayBuffer.isView(c)) {
        if (((d = a.length), d != c.length)) return !1;
        for (h = d; h-- !== 0;) if (a[h] !== c[h]) return !1;
        return !0;
      }
      if (a.constructor === RegExp) return a.source === c.source && a.flags === c.flags;
      if (
        a.valueOf !== Object.prototype.valueOf &&
        typeof a.valueOf == "function" &&
        typeof c.valueOf == "function"
      )
        return a.valueOf() === c.valueOf();
      if (
        a.toString !== Object.prototype.toString &&
        typeof a.toString == "function" &&
        typeof c.toString == "function"
      )
        return a.toString() === c.toString();
      if (((m = Object.keys(a)), (d = m.length), d !== Object.keys(c).length)) return !1;
      for (h = d; h-- !== 0;) if (!Object.prototype.hasOwnProperty.call(c, m[h])) return !1;
      if (p && a instanceof Element) return !1;
      for (h = d; h-- !== 0;)
        if (
          !((m[h] === "_owner" || m[h] === "__v" || m[h] === "__o") && a.$$typeof) &&
          !s(a[m[h]], c[m[h]])
        )
          return !1;
      return !0;
    }
    return a !== a && c !== c;
  }
  return (
    (Iu = function (c, d) {
      try {
        return s(c, d);
      } catch (h) {
        if ((h.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw h;
      }
    }),
    Iu
  );
}
var Fu = { exports: {} },
  Uu,
  np;
function r_() {
  if (np) return Uu;
  np = 1;
  var p = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ((Uu = p), Uu);
}
var Vu, rp;
function i_() {
  if (rp) return Vu;
  rp = 1;
  var p = r_();
  function r() {}
  function i() {}
  return (
    (i.resetWarningCache = r),
    (Vu = function () {
      function o(c, d, h, m, _, g) {
        if (g !== p) {
          var w = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
          throw ((w.name = "Invariant Violation"), w);
        }
      }
      o.isRequired = o;
      function s() {
        return o;
      }
      var a = {
        array: o,
        bigint: o,
        bool: o,
        func: o,
        number: o,
        object: o,
        string: o,
        symbol: o,
        any: o,
        arrayOf: s,
        element: o,
        elementType: o,
        instanceOf: s,
        node: o,
        objectOf: s,
        oneOf: s,
        oneOfType: s,
        shape: s,
        exact: s,
        checkPropTypes: i,
        resetWarningCache: r,
      };
      return ((a.PropTypes = a), a);
    }),
    Vu
  );
}
var ip;
function l_() {
  return (ip || ((ip = 1), (Fu.exports = i_()())), Fu.exports);
}
var Bu, lp;
function dh() {
  if (lp) return Bu;
  lp = 1;
  var p = Object.create,
    r = Object.defineProperty,
    i = Object.getOwnPropertyDescriptor,
    o = Object.getOwnPropertyNames,
    s = Object.getPrototypeOf,
    a = Object.prototype.hasOwnProperty,
    c = (b, V) => {
      for (var G in V) r(b, G, { get: V[G], enumerable: !0 });
    },
    d = (b, V, G, Z) => {
      if ((V && typeof V == "object") || typeof V == "function")
        for (let ee of o(V))
          !a.call(b, ee) &&
            ee !== G &&
            r(b, ee, { get: () => V[ee], enumerable: !(Z = i(V, ee)) || Z.enumerable });
      return b;
    },
    h = (b, V, G) => (
      (G = b != null ? p(s(b)) : {}),
      d(!b || !b.__esModule ? r(G, "default", { value: b, enumerable: !0 }) : G, b)
    ),
    m = (b) => d(r({}, "__esModule", { value: !0 }), b),
    _ = {};
  (c(_, { defaultProps: () => I, propTypes: () => T }), (Bu = m(_)));
  var g = h(l_());
  const {
      string: w,
      bool: S,
      number: L,
      array: v,
      oneOfType: R,
      shape: C,
      object: M,
      func: O,
      node: N,
    } = g.default,
    T = {
      url: R([w, v, M]),
      playing: S,
      loop: S,
      controls: S,
      volume: L,
      muted: S,
      playbackRate: L,
      width: R([w, L]),
      height: R([w, L]),
      style: M,
      progressInterval: L,
      playsinline: S,
      pip: S,
      stopOnUnmount: S,
      light: R([S, w, M]),
      playIcon: N,
      previewTabIndex: L,
      previewAriaLabel: w,
      fallback: N,
      oEmbedUrl: w,
      wrapper: R([w, O, C({ render: O.isRequired })]),
      config: C({
        soundcloud: C({ options: M }),
        youtube: C({ playerVars: M, embedOptions: M, onUnstarted: O }),
        facebook: C({ appId: w, version: w, playerId: w, attributes: M }),
        dailymotion: C({ params: M }),
        vimeo: C({ playerOptions: M, title: w }),
        mux: C({ attributes: M, version: w }),
        file: C({
          attributes: M,
          tracks: v,
          forceVideo: S,
          forceAudio: S,
          forceHLS: S,
          forceSafariHLS: S,
          forceDisableHls: S,
          forceDASH: S,
          forceFLV: S,
          hlsOptions: M,
          hlsVersion: w,
          dashVersion: w,
          flvVersion: w,
        }),
        wistia: C({ options: M, playerId: w, customControls: v }),
        mixcloud: C({ options: M }),
        twitch: C({ options: M, playerId: w }),
        vidyard: C({ options: M }),
      }),
      onReady: O,
      onStart: O,
      onPlay: O,
      onPause: O,
      onBuffer: O,
      onBufferEnd: O,
      onEnded: O,
      onError: O,
      onDuration: O,
      onSeek: O,
      onPlaybackRateChange: O,
      onPlaybackQualityChange: O,
      onProgress: O,
      onClickPreview: O,
      onEnablePIP: O,
      onDisablePIP: O,
    },
    U = () => {},
    I = {
      playing: !1,
      loop: !1,
      controls: !1,
      volume: null,
      muted: !1,
      playbackRate: 1,
      width: "640px",
      height: "360px",
      style: {},
      progressInterval: 1e3,
      playsinline: !1,
      pip: !1,
      stopOnUnmount: !0,
      light: !1,
      fallback: null,
      wrapper: "div",
      previewTabIndex: 0,
      previewAriaLabel: "",
      oEmbedUrl: "https://noembed.com/embed?url={url}",
      config: {
        soundcloud: {
          options: {
            visual: !0,
            buying: !1,
            liking: !1,
            download: !1,
            sharing: !1,
            show_comments: !1,
            show_playcount: !1,
          },
        },
        youtube: {
          playerVars: { playsinline: 1, showinfo: 0, rel: 0, iv_load_policy: 3, modestbranding: 1 },
          embedOptions: {},
          onUnstarted: U,
        },
        facebook: { appId: "1309697205772819", version: "v3.3", playerId: null, attributes: {} },
        dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
        vimeo: {
          playerOptions: { autopause: !1, byline: !1, portrait: !1, title: !1 },
          title: null,
        },
        mux: { attributes: {}, version: "2" },
        file: {
          attributes: {},
          tracks: [],
          forceVideo: !1,
          forceAudio: !1,
          forceHLS: !1,
          forceDASH: !1,
          forceFLV: !1,
          hlsOptions: {},
          hlsVersion: "1.1.4",
          dashVersion: "3.1.3",
          flvVersion: "1.5.0",
          forceDisableHls: !1,
        },
        wistia: { options: {}, playerId: null, customControls: null },
        mixcloud: { options: { hide_cover: 1 } },
        twitch: { options: {}, playerId: null },
        vidyard: { options: {} },
      },
      onReady: U,
      onStart: U,
      onPlay: U,
      onPause: U,
      onBuffer: U,
      onBufferEnd: U,
      onEnded: U,
      onError: U,
      onDuration: U,
      onSeek: U,
      onPlaybackRateChange: U,
      onPlaybackQualityChange: U,
      onProgress: U,
      onClickPreview: U,
      onEnablePIP: U,
      onDisablePIP: U,
    };
  return Bu;
}
var Hu, op;
function o_() {
  if (op) return Hu;
  op = 1;
  var p = Object.create,
    r = Object.defineProperty,
    i = Object.getOwnPropertyDescriptor,
    o = Object.getOwnPropertyNames,
    s = Object.getPrototypeOf,
    a = Object.prototype.hasOwnProperty,
    c = (O, N, T) =>
      N in O ? r(O, N, { enumerable: !0, configurable: !0, writable: !0, value: T }) : (O[N] = T),
    d = (O, N) => {
      for (var T in N) r(O, T, { get: N[T], enumerable: !0 });
    },
    h = (O, N, T, U) => {
      if ((N && typeof N == "object") || typeof N == "function")
        for (let I of o(N))
          !a.call(O, I) &&
            I !== T &&
            r(O, I, { get: () => N[I], enumerable: !(U = i(N, I)) || U.enumerable });
      return O;
    },
    m = (O, N, T) => (
      (T = O != null ? p(s(O)) : {}),
      h(!O || !O.__esModule ? r(T, "default", { value: O, enumerable: !0 }) : T, O)
    ),
    _ = (O) => h(r({}, "__esModule", { value: !0 }), O),
    g = (O, N, T) => (c(O, typeof N != "symbol" ? N + "" : N, T), T),
    w = {};
  (d(w, { default: () => M }), (Hu = _(w)));
  var S = m(Xr()),
    L = m(ch()),
    v = dh(),
    R = ko();
  const C = 5e3;
  class M extends S.Component {
    constructor() {
      (super(...arguments),
        g(this, "mounted", !1),
        g(this, "isReady", !1),
        g(this, "isPlaying", !1),
        g(this, "isLoading", !0),
        g(this, "loadOnReady", null),
        g(this, "startOnPlay", !0),
        g(this, "seekOnPlay", null),
        g(this, "onDurationCalled", !1),
        g(this, "handlePlayerMount", (N) => {
          if (this.player) {
            this.progress();
            return;
          }
          ((this.player = N), this.player.load(this.props.url), this.progress());
        }),
        g(this, "getInternalPlayer", (N) => (this.player ? this.player[N] : null)),
        g(this, "progress", () => {
          if (this.props.url && this.player && this.isReady) {
            const N = this.getCurrentTime() || 0,
              T = this.getSecondsLoaded(),
              U = this.getDuration();
            if (U) {
              const I = { playedSeconds: N, played: N / U };
              (T !== null && ((I.loadedSeconds = T), (I.loaded = T / U)),
                (I.playedSeconds !== this.prevPlayed || I.loadedSeconds !== this.prevLoaded) &&
                  this.props.onProgress(I),
                (this.prevPlayed = I.playedSeconds),
                (this.prevLoaded = I.loadedSeconds));
            }
          }
          this.progressTimeout = setTimeout(
            this.progress,
            this.props.progressFrequency || this.props.progressInterval,
          );
        }),
        g(this, "handleReady", () => {
          if (!this.mounted) return;
          ((this.isReady = !0), (this.isLoading = !1));
          const { onReady: N, playing: T, volume: U, muted: I } = this.props;
          (N(),
            !I && U !== null && this.player.setVolume(U),
            this.loadOnReady
              ? (this.player.load(this.loadOnReady, !0), (this.loadOnReady = null))
              : T && this.player.play(),
            this.handleDurationCheck());
        }),
        g(this, "handlePlay", () => {
          ((this.isPlaying = !0), (this.isLoading = !1));
          const { onStart: N, onPlay: T, playbackRate: U } = this.props;
          (this.startOnPlay &&
            (this.player.setPlaybackRate && U !== 1 && this.player.setPlaybackRate(U),
            N(),
            (this.startOnPlay = !1)),
            T(),
            this.seekOnPlay && (this.seekTo(this.seekOnPlay), (this.seekOnPlay = null)),
            this.handleDurationCheck());
        }),
        g(this, "handlePause", (N) => {
          ((this.isPlaying = !1), this.isLoading || this.props.onPause(N));
        }),
        g(this, "handleEnded", () => {
          const { activePlayer: N, loop: T, onEnded: U } = this.props;
          (N.loopOnEnded && T && this.seekTo(0), T || ((this.isPlaying = !1), U()));
        }),
        g(this, "handleError", (...N) => {
          ((this.isLoading = !1), this.props.onError(...N));
        }),
        g(this, "handleDurationCheck", () => {
          clearTimeout(this.durationCheckTimeout);
          const N = this.getDuration();
          N
            ? this.onDurationCalled || (this.props.onDuration(N), (this.onDurationCalled = !0))
            : (this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100));
        }),
        g(this, "handleLoaded", () => {
          this.isLoading = !1;
        }));
    }
    componentDidMount() {
      this.mounted = !0;
    }
    componentWillUnmount() {
      (clearTimeout(this.progressTimeout),
        clearTimeout(this.durationCheckTimeout),
        this.isReady &&
          this.props.stopOnUnmount &&
          (this.player.stop(), this.player.disablePIP && this.player.disablePIP()),
        (this.mounted = !1));
    }
    componentDidUpdate(N) {
      if (!this.player) return;
      const {
        url: T,
        playing: U,
        volume: I,
        muted: b,
        playbackRate: V,
        pip: G,
        loop: Z,
        activePlayer: ee,
        disableDeferredLoading: te,
      } = this.props;
      if (!(0, L.default)(N.url, T)) {
        if (this.isLoading && !ee.forceLoad && !te && !(0, R.isMediaStream)(T)) {
          (console.warn(
            `ReactPlayer: the attempt to load ${T} is being deferred until the player has loaded`,
          ),
            (this.loadOnReady = T));
          return;
        }
        ((this.isLoading = !0),
          (this.startOnPlay = !0),
          (this.onDurationCalled = !1),
          this.player.load(T, this.isReady));
      }
      (!N.playing && U && !this.isPlaying && this.player.play(),
        N.playing && !U && this.isPlaying && this.player.pause(),
        !N.pip && G && this.player.enablePIP && this.player.enablePIP(),
        N.pip && !G && this.player.disablePIP && this.player.disablePIP(),
        N.volume !== I && I !== null && this.player.setVolume(I),
        N.muted !== b &&
          (b
            ? this.player.mute()
            : (this.player.unmute(), I !== null && setTimeout(() => this.player.setVolume(I)))),
        N.playbackRate !== V && this.player.setPlaybackRate && this.player.setPlaybackRate(V),
        N.loop !== Z && this.player.setLoop && this.player.setLoop(Z));
    }
    getDuration() {
      return this.isReady ? this.player.getDuration() : null;
    }
    getCurrentTime() {
      return this.isReady ? this.player.getCurrentTime() : null;
    }
    getSecondsLoaded() {
      return this.isReady ? this.player.getSecondsLoaded() : null;
    }
    seekTo(N, T, U) {
      if (!this.isReady) {
        N !== 0 &&
          ((this.seekOnPlay = N),
          setTimeout(() => {
            this.seekOnPlay = null;
          }, C));
        return;
      }
      if (T ? T === "fraction" : N > 0 && N < 1) {
        const b = this.player.getDuration();
        if (!b) {
          console.warn("ReactPlayer: could not seek using fraction – duration not yet available");
          return;
        }
        this.player.seekTo(b * N, U);
        return;
      }
      this.player.seekTo(N, U);
    }
    render() {
      const N = this.props.activePlayer;
      return N
        ? S.default.createElement(N, {
            ...this.props,
            onMount: this.handlePlayerMount,
            onReady: this.handleReady,
            onPlay: this.handlePlay,
            onPause: this.handlePause,
            onEnded: this.handleEnded,
            onLoaded: this.handleLoaded,
            onError: this.handleError,
          })
        : null;
    }
  }
  return (
    g(M, "displayName", "Player"),
    g(M, "propTypes", v.propTypes),
    g(M, "defaultProps", v.defaultProps),
    Hu
  );
}
var bu, sp;
function s_() {
  if (sp) return bu;
  sp = 1;
  var p = Object.create,
    r = Object.defineProperty,
    i = Object.getOwnPropertyDescriptor,
    o = Object.getOwnPropertyNames,
    s = Object.getPrototypeOf,
    a = Object.prototype.hasOwnProperty,
    c = (Z, ee, te) =>
      ee in Z
        ? r(Z, ee, { enumerable: !0, configurable: !0, writable: !0, value: te })
        : (Z[ee] = te),
    d = (Z, ee) => {
      for (var te in ee) r(Z, te, { get: ee[te], enumerable: !0 });
    },
    h = (Z, ee, te, B) => {
      if ((ee && typeof ee == "object") || typeof ee == "function")
        for (let q of o(ee))
          !a.call(Z, q) &&
            q !== te &&
            r(Z, q, { get: () => ee[q], enumerable: !(B = i(ee, q)) || B.enumerable });
      return Z;
    },
    m = (Z, ee, te) => (
      (te = Z != null ? p(s(Z)) : {}),
      h(!Z || !Z.__esModule ? r(te, "default", { value: Z, enumerable: !0 }) : te, Z)
    ),
    _ = (Z) => h(r({}, "__esModule", { value: !0 }), Z),
    g = (Z, ee, te) => (c(Z, typeof ee != "symbol" ? ee + "" : ee, te), te),
    w = {};
  (d(w, { createReactPlayer: () => G }), (bu = _(w)));
  var S = m(Xr()),
    L = m(fh()),
    v = m(n_),
    R = m(ch()),
    C = dh(),
    M = ko(),
    O = m(o_());
  const N = (0, M.lazy)(() => pt(() => import("./Preview-BXXOzT_j.js").then((Z) => Z.P), [])),
    T = typeof window < "u" && window.document && typeof document < "u",
    U = typeof gu < "u" && gu.window && gu.window.document,
    I = Object.keys(C.propTypes),
    b = T || U ? S.Suspense : () => null,
    V = [],
    G = (Z, ee) => {
      var te;
      return (
        (te = class extends S.Component {
          constructor() {
            (super(...arguments),
              g(this, "state", { showPreview: !!this.props.light }),
              g(this, "references", {
                wrapper: (B) => {
                  this.wrapper = B;
                },
                player: (B) => {
                  this.player = B;
                },
              }),
              g(this, "handleClickPreview", (B) => {
                (this.setState({ showPreview: !1 }), this.props.onClickPreview(B));
              }),
              g(this, "showPreview", () => {
                this.setState({ showPreview: !0 });
              }),
              g(this, "getDuration", () => (this.player ? this.player.getDuration() : null)),
              g(this, "getCurrentTime", () => (this.player ? this.player.getCurrentTime() : null)),
              g(this, "getSecondsLoaded", () =>
                this.player ? this.player.getSecondsLoaded() : null,
              ),
              g(this, "getInternalPlayer", (B = "player") =>
                this.player ? this.player.getInternalPlayer(B) : null,
              ),
              g(this, "seekTo", (B, q, ae) => {
                if (!this.player) return null;
                this.player.seekTo(B, q, ae);
              }),
              g(this, "handleReady", () => {
                this.props.onReady(this);
              }),
              g(
                this,
                "getActivePlayer",
                (0, v.default)((B) => {
                  for (const q of [...V, ...Z]) if (q.canPlay(B)) return q;
                  return ee || null;
                }),
              ),
              g(
                this,
                "getConfig",
                (0, v.default)((B, q) => {
                  const { config: ae } = this.props;
                  return L.default.all([
                    C.defaultProps.config,
                    C.defaultProps.config[q] || {},
                    ae,
                    ae[q] || {},
                  ]);
                }),
              ),
              g(
                this,
                "getAttributes",
                (0, v.default)((B) => (0, M.omit)(this.props, I)),
              ),
              g(this, "renderActivePlayer", (B) => {
                if (!B) return null;
                const q = this.getActivePlayer(B);
                if (!q) return null;
                const ae = this.getConfig(B, q.key);
                return S.default.createElement(O.default, {
                  ...this.props,
                  key: q.key,
                  ref: this.references.player,
                  config: ae,
                  activePlayer: q.lazyPlayer || q,
                  onReady: this.handleReady,
                });
              }));
          }
          shouldComponentUpdate(B, q) {
            return !(0, R.default)(this.props, B) || !(0, R.default)(this.state, q);
          }
          componentDidUpdate(B) {
            const { light: q } = this.props;
            (!B.light && q && this.setState({ showPreview: !0 }),
              B.light && !q && this.setState({ showPreview: !1 }));
          }
          renderPreview(B) {
            if (!B) return null;
            const {
              light: q,
              playIcon: ae,
              previewTabIndex: se,
              oEmbedUrl: Q,
              previewAriaLabel: H,
            } = this.props;
            return S.default.createElement(N, {
              url: B,
              light: q,
              playIcon: ae,
              previewTabIndex: se,
              previewAriaLabel: H,
              oEmbedUrl: Q,
              onClick: this.handleClickPreview,
            });
          }
          render() {
            const { url: B, style: q, width: ae, height: se, fallback: Q, wrapper: H } = this.props,
              { showPreview: W } = this.state,
              k = this.getAttributes(B),
              F = typeof H == "string" ? this.references.wrapper : void 0;
            return S.default.createElement(
              H,
              { ref: F, style: { ...q, width: ae, height: se }, ...k },
              S.default.createElement(
                b,
                { fallback: Q },
                W ? this.renderPreview(B) : this.renderActivePlayer(B),
              ),
            );
          }
        }),
        g(te, "displayName", "ReactPlayer"),
        g(te, "propTypes", C.propTypes),
        g(te, "defaultProps", C.defaultProps),
        g(te, "addCustomPlayer", (B) => {
          V.push(B);
        }),
        g(te, "removeCustomPlayers", () => {
          V.length = 0;
        }),
        g(te, "canPlay", (B) => {
          for (const q of [...V, ...Z]) if (q.canPlay(B)) return !0;
          return !1;
        }),
        g(te, "canEnablePIP", (B) => {
          for (const q of [...V, ...Z]) if (q.canEnablePIP && q.canEnablePIP(B)) return !0;
          return !1;
        }),
        te
      );
    };
  return bu;
}
var Wu, up;
function u_() {
  if (up) return Wu;
  up = 1;
  var p = Object.create,
    r = Object.defineProperty,
    i = Object.getOwnPropertyDescriptor,
    o = Object.getOwnPropertyNames,
    s = Object.getPrototypeOf,
    a = Object.prototype.hasOwnProperty,
    c = (v, R) => {
      for (var C in R) r(v, C, { get: R[C], enumerable: !0 });
    },
    d = (v, R, C, M) => {
      if ((R && typeof R == "object") || typeof R == "function")
        for (let O of o(R))
          !a.call(v, O) &&
            O !== C &&
            r(v, O, { get: () => R[O], enumerable: !(M = i(R, O)) || M.enumerable });
      return v;
    },
    h = (v, R, C) => (
      (C = v != null ? p(s(v)) : {}),
      d(!v || !v.__esModule ? r(C, "default", { value: v, enumerable: !0 }) : C, v)
    ),
    m = (v) => d(r({}, "__esModule", { value: !0 }), v),
    _ = {};
  (c(_, { default: () => L }), (Wu = m(_)));
  var g = h(Gy()),
    w = s_();
  const S = g.default[g.default.length - 1];
  var L = (0, w.createReactPlayer)(g.default, S);
  return Wu;
}
var a_ = u_();
const f_ = f0(a_);
function ap({ imageSrc: p, videoSrc: r, isPlaying: i = !0, baseRadius: o = 420 }) {
  const a = Ge.useRef(Array.from({ length: 6 }, () => ({ x: -1e3, y: -1e3 })));
  Ge.useEffect(() => {
    let d = window.innerWidth / 2,
      h = window.innerHeight / 2;
    const m = (w) => {
      ((d = w.clientX), (h = w.clientY));
    };
    window.addEventListener("mousemove", m);
    let _;
    const g = () => {
      const w = a.current;
      ((w[0].x += (d - w[0].x) * 0.2), (w[0].y += (h - w[0].y) * 0.2));
      for (let S = 1; S < w.length; S++)
        ((w[S].x += (w[S - 1].x - w[S].x) * 0.35), (w[S].y += (w[S - 1].y - w[S].y) * 0.35));
      for (let S = 0; S < w.length; S++) {
        const L = document.getElementById(`trail-${S}-${p.slice(-8)}`);
        L && (L.setAttribute("cx", w[S].x.toString()), L.setAttribute("cy", w[S].y.toString()));
      }
      _ = requestAnimationFrame(g);
    };
    return (
      g(),
      () => {
        (window.removeEventListener("mousemove", m), cancelAnimationFrame(_));
      }
    );
  }, [p]);
  const c = `spotlight-mask-${p.slice(-12).replace(/\W/g, "")}`;
  return A.jsxs("div", {
    className:
      "pointer-events-none absolute inset-0 z-0 flex h-full w-full items-center justify-center overflow-hidden bg-black",
    children: [
      A.jsx("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        children: A.jsx(f_, {
          url: r,
          playing: i,
          loop: !0,
          muted: !0,
          playsinline: !0,
          width: "100%",
          height: "100%",
          className: "react-player",
          config: {
            file: { attributes: { style: { width: "100%", height: "100%", objectFit: "cover" } } },
          },
        }),
      }),
      A.jsxs("svg", {
        className: "absolute inset-0 h-full w-full",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          A.jsxs("defs", {
            children: [
              A.jsxs("radialGradient", {
                id: `holeGradient-${c}`,
                children: [
                  A.jsx("stop", { offset: "0%", stopColor: "black", stopOpacity: "1" }),
                  A.jsx("stop", { offset: "60%", stopColor: "black", stopOpacity: "0.8" }),
                  A.jsx("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" }),
                ],
              }),
              A.jsxs("mask", {
                id: c,
                maskContentUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                children: [
                  A.jsx("rect", { width: "100%", height: "100%", fill: "white" }),
                  Array.from({ length: 6 })
                    .reverse()
                    .map((d, h) => {
                      const m = 5 - h;
                      return A.jsx(
                        "circle",
                        {
                          id: `trail-${m}-${p.slice(-8)}`,
                          cx: "-1000",
                          cy: "-1000",
                          r: o - m * 35,
                          fill: `url(#holeGradient-${c})`,
                          opacity: 1 - m * 0.15,
                        },
                        `trail-${m}`,
                      );
                    }),
                ],
              }),
            ],
          }),
          A.jsx("image", {
            href: p,
            width: "100%",
            height: "100%",
            preserveAspectRatio: "xMidYMid slice",
            mask: `url(#${c})`,
          }),
        ],
      }),
    ],
  });
}
const c_ = "https://github.com/dsMagnatov/Acreage-landing-assets/blob/main/0098888.jpg?raw=true",
  d_ =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260213_051817_c7d8ccc6-bfaa-417c-8474-e5cefeea26b4.mp4?token=exp=1777075200~hmac=91d86c3600a89e923130fce0912dcfb0de81f05f2cde5fc77c30f3e7ae094342",
  p_ = "https://github.com/dsMagnatov/Acreage-landing-assets/blob/main/02604201313.png?raw=true",
  h_ =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260215_121759_424f8e9c-d8bd-4974-9567-52709dfb6842.mp4?token=exp=1777075200~hmac=4202c1d0ec90137eb6dffa8e0db93ed7569a68b2016165d8b1b567f888869ff5",
  $u = "Acreage",
  ph = [
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
      label: "Contact",
      route: "contact",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
    },
  ];
function Gi({ eyebrow: p, title: r, description: i, children: o }) {
  return A.jsxs("div", {
    className: "relative min-h-[100dvh] bg-[#050505] text-white",
    children: [
      A.jsxs("header", {
        className: "relative z-50 flex items-center justify-between px-6 pt-8 md:px-12",
        children: [
          A.jsx("button", {
            type: "button",
            onClick: () => Bi(""),
            className: "text-white transition-opacity hover:opacity-80",
            "aria-label": `${$u} home`,
            children: A.jsx(oa, { width: 80 }),
          }),
          A.jsx(ah, {
            items: [...ph],
            className: "relative top-0 right-0",
            menuBg: "#ffffff",
            menuContentColor: "#111111",
          }),
        ],
      }),
      A.jsxs("main", {
        className: "relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-16 md:px-12 md:pt-24",
        children: [
          A.jsx("p", {
            className: "mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/50",
            "data-editable": !0,
            children: p,
          }),
          A.jsx("h1", {
            className:
              "font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl",
            "data-editable": !0,
            children: r,
          }),
          A.jsx("p", {
            className: "mt-6 max-w-2xl text-base leading-relaxed text-white/64 md:text-lg",
            "data-editable": !0,
            children: i,
          }),
          o,
        ],
      }),
      A.jsxs("footer", {
        className:
          "relative z-10 border-t border-white/10 px-6 py-8 text-center text-xs text-white/40",
        children: [
          A.jsxs("button", {
            type: "button",
            className: "underline-offset-4 hover:text-white hover:underline",
            onClick: () => Bi("contact"),
            children: ["Contact ", $u],
          }),
          A.jsx("span", { className: "mx-2", children: "·" }),
          A.jsxs("span", { children: ["© 2026 ", $u] }),
        ],
      }),
    ],
  });
}
const m_ = [
  { name: "Performance", count: "12 silhouettes", tone: "Elite training & court" },
  { name: "Urban", count: "8 silhouettes", tone: "City exploration" },
  { name: "Trail", count: "6 silhouettes", tone: "Light off-road" },
];
function y_() {
  return A.jsx(Gi, {
    eyebrow: "Catalog",
    title: A.jsxs(A.Fragment, {
      children: [
        "Season ",
        A.jsx("span", { className: "font-serif italic", children: "collections" }),
      ],
    }),
    description:
      "Curated lines built on one cushioning platform—tuned per use case without compromising the Acreage ride.",
    children: A.jsx("div", {
      className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
      children: m_.map((p) =>
        A.jsxs(
          "article",
          {
            className:
              "aspect-[4/5] rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 flex flex-col justify-end",
            children: [
              A.jsx("p", {
                className: "text-xs uppercase tracking-widest text-white/40",
                children: p.tone,
              }),
              A.jsx("h3", { className: "mt-2 text-2xl font-medium", children: p.name }),
              A.jsx("p", { className: "text-sm text-white/50", children: p.count }),
            ],
          },
          p.name,
        ),
      ),
    }),
  });
}
const __ = [
  { value: "240K+", label: "Run club members" },
  { value: "48", label: "City chapters" },
  { value: "12", label: "Pro athlete partners" },
];
function g_() {
  return A.jsxs(Gi, {
    eyebrow: "Together",
    title: A.jsxs(A.Fragment, {
      children: [
        "Acreage ",
        A.jsx("span", { className: "font-serif italic", children: "community" }),
      ],
    }),
    description:
      "Weekly meetups, maker workshops, and early access for members who train, explore, and shape what we build next.",
    children: [
      A.jsx("div", {
        className: "mt-12 flex flex-wrap gap-8",
        children: __.map((p) =>
          A.jsxs(
            "div",
            {
              children: [
                A.jsx("p", {
                  className: "font-serif text-5xl italic text-[#DA3A16]",
                  children: p.value,
                }),
                A.jsx("p", { className: "mt-1 text-sm text-white/50", children: p.label }),
              ],
            },
            p.label,
          ),
        ),
      }),
      A.jsxs("p", {
        className: "mt-12 max-w-xl text-sm text-white/50",
        children: [
          "Tag ",
          A.jsx("span", { className: "text-white", children: "#ArcPace" }),
          " to be featured in our global lookbook. Members get first access to fit sessions and prototype wear tests.",
        ],
      }),
    ],
  });
}
function v_() {
  return A.jsx(Gi, {
    eyebrow: "Get in touch",
    title: A.jsxs(A.Fragment, {
      children: [
        "Contact ",
        A.jsx("span", { className: "font-serif italic", children: "Acreage" }),
      ],
    }),
    description:
      "Partnerships, press, wholesale, and product questions—our team responds within two business days.",
    children: A.jsxs("form", {
      className: "mt-12 max-w-lg space-y-4",
      onSubmit: (p) => {
        p.preventDefault();
      },
      children: [
        A.jsxs("label", {
          className: "block",
          children: [
            A.jsx("span", {
              className: "text-xs uppercase tracking-widest text-white/50",
              children: "Name",
            }),
            A.jsx("input", {
              type: "text",
              className:
                "mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/40",
              placeholder: "Your name",
            }),
          ],
        }),
        A.jsxs("label", {
          className: "block",
          children: [
            A.jsx("span", {
              className: "text-xs uppercase tracking-widest text-white/50",
              children: "Email",
            }),
            A.jsx("input", {
              type: "email",
              className:
                "mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/40",
              placeholder: "you@email.com",
            }),
          ],
        }),
        A.jsxs("label", {
          className: "block",
          children: [
            A.jsx("span", {
              className: "text-xs uppercase tracking-widest text-white/50",
              children: "Message",
            }),
            A.jsx("textarea", {
              rows: 4,
              className:
                "mt-2 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/40",
              placeholder: "How can we help?",
            }),
          ],
        }),
        A.jsx("button", {
          type: "submit",
          className:
            "rounded-full bg-[#DA3A16] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#c43312]",
          children: "Send message",
        }),
      ],
    }),
  });
}
const w_ = [
  { name: "Velocity Pro X", date: "May 28", status: "Waitlist open" },
  { name: "Urban Drift 02", date: "June 12", status: "Members early access" },
  { name: "Trail Forge SE", date: "July 4", status: "Coming soon" },
];
function x_() {
  return A.jsxs(Gi, {
    eyebrow: "Limited releases",
    title: A.jsxs(A.Fragment, {
      children: ["Upcoming ", A.jsx("span", { className: "font-serif italic", children: "drops" })],
    }),
    description:
      "Reserve your pair before public release. Acreage drops are engineered in small batches with performance lab validation on every silhouette.",
    children: [
      A.jsx("ul", {
        className: "mt-12 space-y-4",
        children: w_.map((p) =>
          A.jsxs(
            "li",
            {
              className:
                "flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5",
              children: [
                A.jsxs("div", {
                  children: [
                    A.jsx("p", { className: "text-lg font-medium", children: p.name }),
                    A.jsx("p", { className: "text-sm text-white/50", children: p.date }),
                  ],
                }),
                A.jsx("span", {
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
      A.jsx("button", {
        type: "button",
        className:
          "mt-10 rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-white/90",
        onClick: () => Bi("contact"),
        children: "Join the waitlist",
      }),
    ],
  });
}
const S_ = [
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
function P_() {
  return A.jsx(Gi, {
    eyebrow: "R&D",
    title: A.jsxs(A.Fragment, {
      children: ["Innovation ", A.jsx("span", { className: "font-serif italic", children: "lab" })],
    }),
    description:
      "Acreage prototypes in Portland and Eindhoven—where biomechanics, materials science, and street culture meet.",
    children: A.jsx("div", {
      className: "mt-12 grid gap-6 md:grid-cols-3",
      children: S_.map((p) =>
        A.jsxs(
          "article",
          {
            className: "rounded-2xl border border-white/10 bg-white/5 p-6",
            children: [
              A.jsx("h3", { className: "text-lg font-medium", children: p.title }),
              A.jsx("p", {
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
function k_() {
  const p = C0(!1),
    [r, i] = Ge.useState(!1),
    [o, s] = Ge.useState(!1),
    a = p || r,
    c = p || o;
  return A.jsxs("div", {
    id: "hero",
    className: "relative flex w-full flex-col bg-[#050505]",
    children: [
      A.jsxs("section", {
        className:
          "sticky top-0 z-0 flex h-[100dvh] w-full flex-col justify-between overflow-hidden pointer-events-auto",
        children: [
          A.jsx(ap, { imageSrc: c_, videoSrc: d_, isPlaying: a }),
          A.jsx("div", {
            className: "absolute bottom-0 left-0 z-20 h-[75%] w-full",
            onMouseEnter: () => i(!0),
            onMouseLeave: () => i(!1),
            "aria-hidden": !0,
          }),
          A.jsxs("header", {
            className: "relative z-50 flex w-full items-start justify-center pt-[150px]",
            children: [
              A.jsx("button", {
                type: "button",
                onClick: () => Bi(""),
                className: "text-white",
                "aria-label": "Acreage home",
                children: A.jsx(oa, {}),
              }),
              A.jsx(ah, {
                items: [...ph],
                className: "absolute top-8 right-8 z-50",
                menuBg: "#ffffff",
                menuContentColor: "#111111",
              }),
            ],
          }),
          A.jsx("main", {
            className:
              "relative z-10 flex w-full flex-1 flex-col items-center justify-end px-4 pb-24 text-center text-white",
            children: A.jsxs("h1", {
              className:
                "mx-auto w-full translate-y-[50px] font-sans font-medium leading-[1.05] tracking-tight",
              style: { fontSize: "clamp(14px, 3vw, 51px)" },
              "data-editable": !0,
              children: [
                A.jsx("span", { className: "block", children: "Pure Comfort For" }),
                A.jsxs("span", {
                  className: "block",
                  children: [
                    "Next-Generation Athletes.",
                    " ",
                    A.jsx("span", {
                      className: "font-serif font-normal italic pr-1",
                      children: "We Craft",
                    }),
                  ],
                }),
                A.jsx("span", {
                  className: "block font-serif font-normal italic pr-1",
                  children: "The Ultimate Footwear For Elite Performance,",
                }),
                A.jsx("span", {
                  className: "block font-serif font-normal italic pr-1",
                  children: "Urban Exploration, Everyday Style.",
                }),
              ],
            }),
          }),
        ],
      }),
      A.jsxs("section", {
        id: "science",
        className: "relative z-10 h-[100dvh] w-full overflow-hidden bg-black text-white",
        style: { boxShadow: "0 -20px 50px rgba(0,0,0,0.5)" },
        children: [
          A.jsx(ap, { imageSrc: p_, videoSrc: h_, isPlaying: c, baseRadius: 520 }),
          A.jsx("div", {
            className:
              "absolute right-[calc(8%+100px)] bottom-[12%] z-30 h-[calc(50%+230px)] w-[calc(50%-50px)]",
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            "aria-hidden": !0,
          }),
          A.jsx("div", {
            className:
              "absolute left-[calc(8%+200px)] top-[calc(20%+190px)] z-30 h-[calc(22.5%+130px)] w-[calc(15%+250px)] -translate-y-full",
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            "aria-hidden": !0,
          }),
          A.jsxs("div", {
            className:
              "absolute left-[calc(8%+200px)] top-[20%] z-20 w-[320px] rounded-sm border border-white/10 px-8 py-6",
            style: {
              background: "rgba(0, 0, 0, 0.16)",
              backdropFilter: "blur(80px)",
              WebkitBackdropFilter: "blur(80px)",
            },
            children: [
              A.jsxs("div", {
                className: "mb-4 flex items-end gap-2",
                children: [
                  A.jsx("span", {
                    className:
                      "font-serif text-[72px] leading-[80px] tracking-tight text-[#DA3A16] italic",
                    "data-editable": !0,
                    children: "78%",
                  }),
                  A.jsx("div", {
                    className: "w-[11px]",
                    children: A.jsxs("svg", {
                      style: { width: "160px", height: "80px" },
                      viewBox: "0 0 289 138",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      "aria-hidden": !0,
                      children: [
                        A.jsx("g", {
                          filter: "url(#filter0_d_acreage)",
                          children: A.jsx("path", {
                            d: "M22.5 48.7306C39.7833 48.7306 49.34 54.94 63.1667 69.2965C76.9933 83.653 86.55 110.5 103.833 110.5C121.117 110.5 130.673 84.2876 144.5 59.2856C158.327 34.2837 167.883 19.5573 185.167 19.5573C202.45 19.5573 208.55 57.6673 225.833 57.6673C243.117 57.6673 249.217 19.5 266.5 19.5",
                            stroke: "#DA3A16",
                            strokeWidth: "2",
                          }),
                        }),
                        A.jsx("defs", {
                          children: A.jsxs("filter", {
                            id: "filter0_d_acreage",
                            x: "0",
                            y: "0",
                            width: "289",
                            height: "138",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                              A.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                              A.jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha",
                              }),
                              A.jsx("feOffset", { dy: "4" }),
                              A.jsx("feGaussianBlur", { stdDeviation: "11.25" }),
                              A.jsx("feComposite", { in2: "hardAlpha", operator: "out" }),
                              A.jsx("feColorMatrix", {
                                type: "matrix",
                                values:
                                  "0 0 0 0 0.854902 0 0 0 0 0.227451 0 0 0 0 0.0862745 0 0 0 1 0",
                              }),
                              A.jsx("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_acreage",
                              }),
                              A.jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_acreage",
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
              A.jsx("h3", {
                className:
                  "mb-2 font-serif text-[15px] uppercase leading-tight tracking-[0.02em] text-white",
                "data-editable": !0,
                children: "NEXT-GEN CUSHIONING ARCHITECTURE",
              }),
              A.jsx("p", {
                className: "font-serif text-[13px] text-white/64",
                "data-editable": !0,
                children: "Impact Absorption & Energy Return Dynamics",
              }),
            ],
          }),
          A.jsx("div", {
            className: "absolute bottom-[12%] left-[8%] z-20 max-w-[500px] text-white",
            children: A.jsxs("h2", {
              className: "flex flex-col text-[44px] leading-[1.05] tracking-tight",
              "data-editable": !0,
              children: [
                A.jsx("span", {
                  className: "font-sans font-medium",
                  children: "Bringing Aerospace-",
                }),
                A.jsx("span", {
                  className: "font-sans font-medium",
                  children: "Grade Infrastructure",
                }),
                A.jsxs("span", {
                  className: "pt-1 font-serif font-normal",
                  children: [
                    A.jsx("span", { className: "not-italic", children: "Directly To Your " }),
                    A.jsx("span", { className: "italic", children: "Everyday" }),
                  ],
                }),
                A.jsx("span", {
                  className: "font-serif font-normal italic",
                  children: "Urban Exploration",
                }),
              ],
            }),
          }),
          A.jsxs("div", {
            className:
              "absolute right-[calc(8%+100px)] bottom-[12%] z-20 flex flex-col items-center",
            children: [
              A.jsx("div", {
                className: "flex w-[180px] items-center justify-center bg-white py-[6px]",
                children: A.jsx("span", {
                  className:
                    "text-center font-serif text-[10px] font-bold uppercase leading-[16px] tracking-[0.08em] text-black",
                  "data-editable": !0,
                  children: "THE SCIENCE OF IMPACT CONTROL",
                }),
              }),
              A.jsx("div", {
                className: "flex h-[100px] w-[180px] items-center justify-center bg-[#DA3A16]",
                children: A.jsx(oa, { width: 86, className: "text-white" }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function E_() {
  return (
    Ge.useEffect(() => {
      dp();
    }, []),
    A.jsx(k0, {
      routes: {
        "": A.jsx(k_, {}),
        drops: A.jsx(x_, {}),
        innovation: A.jsx(P_, {}),
        collections: A.jsx(y_, {}),
        community: A.jsx(g_, {}),
        contact: A.jsx(v_, {}),
      },
    })
  );
}
w0.createRoot(document.getElementById("root")).render(
  A.jsx(Ge.StrictMode, { children: A.jsx(E_, {}) }),
);
export { pt as _, Xr as a, ko as b, f0 as g, qy as r };
