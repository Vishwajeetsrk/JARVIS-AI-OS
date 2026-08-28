(function () {
  const P = document.createElement("link").relList;
  if (P && P.supports && P.supports("modulepreload")) return;
  for (const M of document.querySelectorAll('link[rel="modulepreload"]')) te(M);
  new MutationObserver((M) => {
    for (const U of M)
      if (U.type === "childList")
        for (const ne of U.addedNodes)
          ne.tagName === "LINK" && ne.rel === "modulepreload" && te(ne);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(M) {
    const U = {};
    return (
      M.integrity && (U.integrity = M.integrity),
      M.referrerPolicy && (U.referrerPolicy = M.referrerPolicy),
      M.crossOrigin === "use-credentials"
        ? (U.credentials = "include")
        : M.crossOrigin === "anonymous"
          ? (U.credentials = "omit")
          : (U.credentials = "same-origin"),
      U
    );
  }
  function te(M) {
    if (M.ep) return;
    M.ep = !0;
    const U = m(M);
    fetch(M.href, U);
  }
})();
var _i = { exports: {} },
  kr = {},
  Ni = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Ff() {
  if (za) return j;
  za = 1;
  var N = Symbol.for("react.element"),
    P = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    te = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    U = Symbol.for("react.provider"),
    ne = Symbol.for("react.context"),
    ie = Symbol.for("react.forward_ref"),
    I = Symbol.for("react.suspense"),
    Z = Symbol.for("react.memo"),
    de = Symbol.for("react.lazy"),
    re = Symbol.iterator;
  function J(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (re && c[re]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var He = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    We = Object.assign,
    q = {};
  function Q(c, v, D) {
    ((this.props = c), (this.context = v), (this.refs = q), (this.updater = D || He));
  }
  ((Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (c, v) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, v, "setState");
    }),
    (Q.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function yt() {}
  yt.prototype = Q.prototype;
  function at(c, v, D) {
    ((this.props = c), (this.context = v), (this.refs = q), (this.updater = D || He));
  }
  var be = (at.prototype = new yt());
  ((be.constructor = at), We(be, Q.prototype), (be.isPureReactComponent = !0));
  var Se = Array.isArray,
    et = Object.prototype.hasOwnProperty,
    Ne = { current: null },
    Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, v, D) {
    var F,
      $ = {},
      B = null,
      K = null;
    if (v != null)
      for (F in (v.ref !== void 0 && (K = v.ref), v.key !== void 0 && (B = "" + v.key), v))
        et.call(v, F) && !Te.hasOwnProperty(F) && ($[F] = v[F]);
    var H = arguments.length - 2;
    if (H === 1) $.children = D;
    else if (1 < H) {
      for (var b = Array(H), Ue = 0; Ue < H; Ue++) b[Ue] = arguments[Ue + 2];
      $.children = b;
    }
    if (c && c.defaultProps) for (F in ((H = c.defaultProps), H)) $[F] === void 0 && ($[F] = H[F]);
    return { $$typeof: N, type: c, key: B, ref: K, props: $, _owner: Ne.current };
  }
  function zt(c, v) {
    return { $$typeof: N, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === N;
  }
  function Yt(c) {
    var v = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (D) {
        return v[D];
      })
    );
  }
  var ct = /\/+/g;
  function Me(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Yt("" + c.key) : v.toString(36);
  }
  function tt(c, v, D, F, $) {
    var B = typeof c;
    (B === "undefined" || B === "boolean") && (c = null);
    var K = !1;
    if (c === null) K = !0;
    else
      switch (B) {
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case N:
            case P:
              K = !0;
          }
      }
    if (K)
      return (
        (K = c),
        ($ = $(K)),
        (c = F === "" ? "." + Me(K, 0) : F),
        Se($)
          ? ((D = ""),
            c != null && (D = c.replace(ct, "$&/") + "/"),
            tt($, v, D, "", function (Ue) {
              return Ue;
            }))
          : $ != null &&
            (gt($) &&
              ($ = zt(
                $,
                D +
                  (!$.key || (K && K.key === $.key) ? "" : ("" + $.key).replace(ct, "$&/") + "/") +
                  c,
              )),
            v.push($)),
        1
      );
    if (((K = 0), (F = F === "" ? "." : F + ":"), Se(c)))
      for (var H = 0; H < c.length; H++) {
        B = c[H];
        var b = F + Me(B, H);
        K += tt(B, v, D, b, $);
      }
    else if (((b = J(c)), typeof b == "function"))
      for (c = b.call(c), H = 0; !(B = c.next()).done;)
        ((B = B.value), (b = F + Me(B, H++)), (K += tt(B, v, D, b, $)));
    else if (B === "object")
      throw (
        (v = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return K;
  }
  function ft(c, v, D) {
    if (c == null) return c;
    var F = [],
      $ = 0;
    return (
      tt(c, F, "", "", function (B) {
        return v.call(D, B, $++);
      }),
      F
    );
  }
  function Le(c) {
    if (c._status === -1) {
      var v = c._result;
      ((v = v()),
        v.then(
          function (D) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = D));
          },
          function (D) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = D));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = v)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var oe = { current: null },
    k = { transition: null },
    R = { ReactCurrentDispatcher: oe, ReactCurrentBatchConfig: k, ReactCurrentOwner: Ne };
  function x() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (j.Children = {
      map: ft,
      forEach: function (c, v, D) {
        ft(
          c,
          function () {
            v.apply(this, arguments);
          },
          D,
        );
      },
      count: function (c) {
        var v = 0;
        return (
          ft(c, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (c) {
        return (
          ft(c, function (v) {
            return v;
          }) || []
        );
      },
      only: function (c) {
        if (!gt(c))
          throw Error("React.Children.only expected to receive a single React element child.");
        return c;
      },
    }),
    (j.Component = Q),
    (j.Fragment = m),
    (j.Profiler = M),
    (j.PureComponent = at),
    (j.StrictMode = te),
    (j.Suspense = I),
    (j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
    (j.act = x),
    (j.cloneElement = function (c, v, D) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var F = We({}, c.props),
        $ = c.key,
        B = c.ref,
        K = c._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((B = v.ref), (K = Ne.current)),
          v.key !== void 0 && ($ = "" + v.key),
          c.type && c.type.defaultProps)
        )
          var H = c.type.defaultProps;
        for (b in v)
          et.call(v, b) &&
            !Te.hasOwnProperty(b) &&
            (F[b] = v[b] === void 0 && H !== void 0 ? H[b] : v[b]);
      }
      var b = arguments.length - 2;
      if (b === 1) F.children = D;
      else if (1 < b) {
        H = Array(b);
        for (var Ue = 0; Ue < b; Ue++) H[Ue] = arguments[Ue + 2];
        F.children = H;
      }
      return { $$typeof: N, type: c.type, key: $, ref: B, props: F, _owner: K };
    }),
    (j.createContext = function (c) {
      return (
        (c = {
          $$typeof: ne,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: U, _context: c }),
        (c.Consumer = c)
      );
    }),
    (j.createElement = Qe),
    (j.createFactory = function (c) {
      var v = Qe.bind(null, c);
      return ((v.type = c), v);
    }),
    (j.createRef = function () {
      return { current: null };
    }),
    (j.forwardRef = function (c) {
      return { $$typeof: ie, render: c };
    }),
    (j.isValidElement = gt),
    (j.lazy = function (c) {
      return { $$typeof: de, _payload: { _status: -1, _result: c }, _init: Le };
    }),
    (j.memo = function (c, v) {
      return { $$typeof: Z, type: c, compare: v === void 0 ? null : v };
    }),
    (j.startTransition = function (c) {
      var v = k.transition;
      k.transition = {};
      try {
        c();
      } finally {
        k.transition = v;
      }
    }),
    (j.unstable_act = x),
    (j.useCallback = function (c, v) {
      return oe.current.useCallback(c, v);
    }),
    (j.useContext = function (c) {
      return oe.current.useContext(c);
    }),
    (j.useDebugValue = function () {}),
    (j.useDeferredValue = function (c) {
      return oe.current.useDeferredValue(c);
    }),
    (j.useEffect = function (c, v) {
      return oe.current.useEffect(c, v);
    }),
    (j.useId = function () {
      return oe.current.useId();
    }),
    (j.useImperativeHandle = function (c, v, D) {
      return oe.current.useImperativeHandle(c, v, D);
    }),
    (j.useInsertionEffect = function (c, v) {
      return oe.current.useInsertionEffect(c, v);
    }),
    (j.useLayoutEffect = function (c, v) {
      return oe.current.useLayoutEffect(c, v);
    }),
    (j.useMemo = function (c, v) {
      return oe.current.useMemo(c, v);
    }),
    (j.useReducer = function (c, v, D) {
      return oe.current.useReducer(c, v, D);
    }),
    (j.useRef = function (c) {
      return oe.current.useRef(c);
    }),
    (j.useState = function (c) {
      return oe.current.useState(c);
    }),
    (j.useSyncExternalStore = function (c, v, D) {
      return oe.current.useSyncExternalStore(c, v, D);
    }),
    (j.useTransition = function () {
      return oe.current.useTransition();
    }),
    (j.version = "18.3.1"),
    j
  );
}
var Pa;
function Ri() {
  return (Pa || ((Pa = 1), (Ni.exports = Ff())), Ni.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function Mf() {
  if (Ta) return kr;
  Ta = 1;
  var N = Ri(),
    P = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    te = Object.prototype.hasOwnProperty,
    M = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(ie, I, Z) {
    var de,
      re = {},
      J = null,
      He = null;
    (Z !== void 0 && (J = "" + Z),
      I.key !== void 0 && (J = "" + I.key),
      I.ref !== void 0 && (He = I.ref));
    for (de in I) te.call(I, de) && !U.hasOwnProperty(de) && (re[de] = I[de]);
    if (ie && ie.defaultProps)
      for (de in ((I = ie.defaultProps), I)) re[de] === void 0 && (re[de] = I[de]);
    return { $$typeof: P, type: ie, key: J, ref: He, props: re, _owner: M.current };
  }
  return ((kr.Fragment = m), (kr.jsx = ne), (kr.jsxs = ne), kr);
}
var La;
function Uf() {
  return (La || ((La = 1), (_i.exports = Mf())), _i.exports);
}
var fe = Uf(),
  qe = Ri(),
  Rl = {},
  zi = { exports: {} },
  Fe = {},
  Pi = { exports: {} },
  Ti = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra;
function Af() {
  return (
    Ra ||
      ((Ra = 1),
      (function (N) {
        function P(k, R) {
          var x = k.length;
          k.push(R);
          e: for (; 0 < x;) {
            var c = (x - 1) >>> 1,
              v = k[c];
            if (0 < M(v, R)) ((k[c] = R), (k[x] = v), (x = c));
            else break e;
          }
        }
        function m(k) {
          return k.length === 0 ? null : k[0];
        }
        function te(k) {
          if (k.length === 0) return null;
          var R = k[0],
            x = k.pop();
          if (x !== R) {
            k[0] = x;
            e: for (var c = 0, v = k.length, D = v >>> 1; c < D;) {
              var F = 2 * (c + 1) - 1,
                $ = k[F],
                B = F + 1,
                K = k[B];
              if (0 > M($, x))
                B < v && 0 > M(K, $)
                  ? ((k[c] = K), (k[B] = x), (c = B))
                  : ((k[c] = $), (k[F] = x), (c = F));
              else if (B < v && 0 > M(K, x)) ((k[c] = K), (k[B] = x), (c = B));
              else break e;
            }
          }
          return R;
        }
        function M(k, R) {
          var x = k.sortIndex - R.sortIndex;
          return x !== 0 ? x : k.id - R.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var U = performance;
          N.unstable_now = function () {
            return U.now();
          };
        } else {
          var ne = Date,
            ie = ne.now();
          N.unstable_now = function () {
            return ne.now() - ie;
          };
        }
        var I = [],
          Z = [],
          de = 1,
          re = null,
          J = 3,
          He = !1,
          We = !1,
          q = !1,
          Q = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function be(k) {
          for (var R = m(Z); R !== null;) {
            if (R.callback === null) te(Z);
            else if (R.startTime <= k) (te(Z), (R.sortIndex = R.expirationTime), P(I, R));
            else break;
            R = m(Z);
          }
        }
        function Se(k) {
          if (((q = !1), be(k), !We))
            if (m(I) !== null) ((We = !0), Le(et));
            else {
              var R = m(Z);
              R !== null && oe(Se, R.startTime - k);
            }
        }
        function et(k, R) {
          ((We = !1), q && ((q = !1), yt(Qe), (Qe = -1)), (He = !0));
          var x = J;
          try {
            for (be(R), re = m(I); re !== null && (!(re.expirationTime > R) || (k && !Yt()));) {
              var c = re.callback;
              if (typeof c == "function") {
                ((re.callback = null), (J = re.priorityLevel));
                var v = c(re.expirationTime <= R);
                ((R = N.unstable_now()),
                  typeof v == "function" ? (re.callback = v) : re === m(I) && te(I),
                  be(R));
              } else te(I);
              re = m(I);
            }
            if (re !== null) var D = !0;
            else {
              var F = m(Z);
              (F !== null && oe(Se, F.startTime - R), (D = !1));
            }
            return D;
          } finally {
            ((re = null), (J = x), (He = !1));
          }
        }
        var Ne = !1,
          Te = null,
          Qe = -1,
          zt = 5,
          gt = -1;
        function Yt() {
          return !(N.unstable_now() - gt < zt);
        }
        function ct() {
          if (Te !== null) {
            var k = N.unstable_now();
            gt = k;
            var R = !0;
            try {
              R = Te(!0, k);
            } finally {
              R ? Me() : ((Ne = !1), (Te = null));
            }
          } else Ne = !1;
        }
        var Me;
        if (typeof at == "function")
          Me = function () {
            at(ct);
          };
        else if (typeof MessageChannel < "u") {
          var tt = new MessageChannel(),
            ft = tt.port2;
          ((tt.port1.onmessage = ct),
            (Me = function () {
              ft.postMessage(null);
            }));
        } else
          Me = function () {
            Q(ct, 0);
          };
        function Le(k) {
          ((Te = k), Ne || ((Ne = !0), Me()));
        }
        function oe(k, R) {
          Qe = Q(function () {
            k(N.unstable_now());
          }, R);
        }
        ((N.unstable_IdlePriority = 5),
          (N.unstable_ImmediatePriority = 1),
          (N.unstable_LowPriority = 4),
          (N.unstable_NormalPriority = 3),
          (N.unstable_Profiling = null),
          (N.unstable_UserBlockingPriority = 2),
          (N.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (N.unstable_continueExecution = function () {
            We || He || ((We = !0), Le(et));
          }),
          (N.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (zt = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (N.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (N.unstable_getFirstCallbackNode = function () {
            return m(I);
          }),
          (N.unstable_next = function (k) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = J;
            }
            var x = J;
            J = R;
            try {
              return k();
            } finally {
              J = x;
            }
          }),
          (N.unstable_pauseExecution = function () {}),
          (N.unstable_requestPaint = function () {}),
          (N.unstable_runWithPriority = function (k, R) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var x = J;
            J = k;
            try {
              return R();
            } finally {
              J = x;
            }
          }),
          (N.unstable_scheduleCallback = function (k, R, x) {
            var c = N.unstable_now();
            switch (
              (typeof x == "object" && x !== null
                ? ((x = x.delay), (x = typeof x == "number" && 0 < x ? c + x : c))
                : (x = c),
              k)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = x + v),
              (k = {
                id: de++,
                callback: R,
                priorityLevel: k,
                startTime: x,
                expirationTime: v,
                sortIndex: -1,
              }),
              x > c
                ? ((k.sortIndex = x),
                  P(Z, k),
                  m(I) === null &&
                    k === m(Z) &&
                    (q ? (yt(Qe), (Qe = -1)) : (q = !0), oe(Se, x - c)))
                : ((k.sortIndex = v), P(I, k), We || He || ((We = !0), Le(et))),
              k
            );
          }),
          (N.unstable_shouldYield = Yt),
          (N.unstable_wrapCallback = function (k) {
            var R = J;
            return function () {
              var x = J;
              J = R;
              try {
                return k.apply(this, arguments);
              } finally {
                J = x;
              }
            };
          }));
      })(Ti)),
    Ti
  );
}
var Oa;
function $f() {
  return (Oa || ((Oa = 1), (Pi.exports = Af())), Pi.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ia;
function Bf() {
  if (Ia) return Fe;
  Ia = 1;
  var N = Ri(),
    P = $f();
  function m(e) {
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
  var te = new Set(),
    M = {};
  function U(e, t) {
    (ne(e, t), ne(e + "Capture", t));
  }
  function ne(e, t) {
    for (M[e] = t, e = 0; e < t.length; e++) te.add(t[e]);
  }
  var ie = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    I = Object.prototype.hasOwnProperty,
    Z =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    de = {},
    re = {};
  function J(e) {
    return I.call(re, e) ? !0 : I.call(de, e) ? !1 : Z.test(e) ? (re[e] = !0) : ((de[e] = !0), !1);
  }
  function He(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function We(e, t, n, r) {
    if (t === null || typeof t > "u" || He(e, t, n, r)) return !0;
    if (r) return !1;
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
  function q(e, t, n, r, l, u, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i));
  }
  var Q = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Q[e] = new q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Q[t] = new q(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      Q[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        Q[e] = new q(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Q[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Q[e] = new q(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Q[e] = new q(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Q[e] = new q(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Q[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var yt = /[\-:]([a-z])/g;
  function at(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yt, at);
      Q[t] = new q(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yt, at);
        Q[t] = new q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yt, at);
      Q[t] = new q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Q[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Q.xlinkHref = new q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Q[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function be(e, t, n, r) {
    var l = Q.hasOwnProperty(t) ? Q[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (We(t, n, l, r) && (n = null),
      r || l === null
        ? J(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Se = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for("react.element"),
    Ne = Symbol.for("react.portal"),
    Te = Symbol.for("react.fragment"),
    Qe = Symbol.for("react.strict_mode"),
    zt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Me = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    oe = Symbol.for("react.offscreen"),
    k = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (k && e[k]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var x = Object.assign,
    c;
  function v(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        c = (t && t[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var D = !1;
  function F(e, t) {
    if (!e || D) return "";
    D = !0;
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
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (p) {
            r = p;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (
          var l = p.stack.split(`
`),
            u = r.stack.split(`
`),
            i = l.length - 1,
            o = u.length - 1;
          1 <= i && 0 <= o && l[i] !== u[o];
        )
          o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (l[i] !== u[o]) {
            if (i !== 1 || o !== 1)
              do
                if ((i--, o--, 0 > o || l[i] !== u[o])) {
                  var s =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      ((D = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function $(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = F(e.type, !1)), e);
      case 11:
        return ((e = F(e.type.render, !1)), e);
      case 1:
        return ((e = F(e.type, !0)), e);
      default:
        return "";
    }
  }
  function B(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Te:
        return "Fragment";
      case Ne:
        return "Portal";
      case zt:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Me:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt:
          return (e.displayName || "Context") + ".Consumer";
        case gt:
          return (e._context.displayName || "Context") + ".Provider";
        case ct:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ft:
          return ((t = e.displayName || null), t !== null ? t : B(e.type) || "Memo");
        case Le:
          ((t = e._payload), (e = e._init));
          try {
            return B(e(t));
          } catch {}
      }
    return null;
  }
  function K(e) {
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
        return B(t);
      case 8:
        return t === Qe ? "StrictMode" : "Mode";
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
  function H(e) {
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
  function b(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ue(e) {
    var t = b(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            ((r = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Oi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = b(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Er(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ol(e, t) {
    var n = t.checked;
    return x({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ii(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = H(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function Di(e, t) {
    ((t = t.checked), t != null && be(e, "checked", t, !1));
  }
  function Il(e, t) {
    Di(e, t);
    var n = H(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Dl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Dl(e, t.type, H(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function ji(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Dl(e, t, n) {
    (t !== "number" || Er(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var jn = Array.isArray;
  function cn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + H(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function jl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return x({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Fi(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (jn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: H(n) };
  }
  function Mi(e, t) {
    var n = H(t.value),
      r = H(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Ui(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Ai(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ai(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var xr,
    $i = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (
          xr = xr || document.createElement("div"),
            xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = xr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Fn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Mn = {
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
    Aa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mn).forEach(function (e) {
    Aa.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]));
    });
  });
  function Bi(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Vi(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Bi(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var $a = x(
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
  function Ml(e, t) {
    if (t) {
      if ($a[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Ul(e, t) {
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
  var Al = null;
  function $l(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Bl = null,
    fn = null,
    dn = null;
  function Hi(e) {
    if ((e = ur(e))) {
      if (typeof Bl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Kr(t)), Bl(e.stateNode, e.type, t));
    }
  }
  function Wi(e) {
    fn ? (dn ? dn.push(e) : (dn = [e])) : (fn = e);
  }
  function Qi() {
    if (fn) {
      var e = fn,
        t = dn;
      if (((dn = fn = null), Hi(e), t)) for (e = 0; e < t.length; e++) Hi(t[e]);
    }
  }
  function Ki(e, t) {
    return e(t);
  }
  function Xi() {}
  var Vl = !1;
  function Yi(e, t, n) {
    if (Vl) return e(t, n);
    Vl = !0;
    try {
      return Ki(e, t, n);
    } finally {
      ((Vl = !1), (fn !== null || dn !== null) && (Xi(), Qi()));
    }
  }
  function Un(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Kr(n);
    if (r === null) return null;
    n = r[t];
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var Hl = !1;
  if (ie)
    try {
      var An = {};
      (Object.defineProperty(An, "passive", {
        get: function () {
          Hl = !0;
        },
      }),
        window.addEventListener("test", An, An),
        window.removeEventListener("test", An, An));
    } catch {
      Hl = !1;
    }
  function Ba(e, t, n, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var $n = !1,
    Cr = null,
    _r = !1,
    Wl = null,
    Va = {
      onError: function (e) {
        (($n = !0), (Cr = e));
      },
    };
  function Ha(e, t, n, r, l, u, i, o, s) {
    (($n = !1), (Cr = null), Ba.apply(Va, arguments));
  }
  function Wa(e, t, n, r, l, u, i, o, s) {
    if ((Ha.apply(this, arguments), $n)) {
      if ($n) {
        var p = Cr;
        (($n = !1), (Cr = null));
      } else throw Error(m(198));
      _r || ((_r = !0), (Wl = p));
    }
  }
  function Gt(e) {
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
  function Gi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Zi(e) {
    if (Gt(e) !== e) throw Error(m(188));
  }
  function Qa(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Gt(e)), t === null)) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ;) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u;) {
          if (u === n) return (Zi(l), e);
          if (u === r) return (Zi(l), t);
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) ((n = l), (r = u));
      else {
        for (var i = !1, o = l.child; o;) {
          if (o === n) {
            ((i = !0), (n = l), (r = u));
            break;
          }
          if (o === r) {
            ((i = !0), (r = l), (n = u));
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o;) {
            if (o === n) {
              ((i = !0), (n = u), (r = l));
              break;
            }
            if (o === r) {
              ((i = !0), (r = u), (n = l));
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ji(e) {
    return ((e = Qa(e)), e !== null ? qi(e) : null);
  }
  function qi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = qi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bi = P.unstable_scheduleCallback,
    eo = P.unstable_cancelCallback,
    Ka = P.unstable_shouldYield,
    Xa = P.unstable_requestPaint,
    ae = P.unstable_now,
    Ya = P.unstable_getCurrentPriorityLevel,
    Ql = P.unstable_ImmediatePriority,
    to = P.unstable_UserBlockingPriority,
    Nr = P.unstable_NormalPriority,
    Ga = P.unstable_LowPriority,
    no = P.unstable_IdlePriority,
    zr = null,
    dt = null;
  function Za(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(zr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : ba,
    Ja = Math.log,
    qa = Math.LN2;
  function ba(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ja(e) / qa) | 0)) | 0);
  }
  var Pr = 64,
    Tr = 4194304;
  function Bn(e) {
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
  function Lr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? (r = Bn(o)) : ((u &= i), u !== 0 && (r = Bn(u)));
    } else ((i = n & ~l), i !== 0 ? (r = Bn(i)) : u !== 0 && (r = Bn(u)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t;)
        ((n = 31 - nt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function ec(e, t) {
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
  function tc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var i = 31 - nt(u),
        o = 1 << i,
        s = l[i];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[i] = ec(o, t))
        : s <= t && (e.expiredLanes |= o),
        (u &= ~o));
    }
  }
  function Kl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ro() {
    var e = Pr;
    return ((Pr <<= 1), (Pr & 4194240) === 0 && (Pr = 64), e);
  }
  function Xl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - nt(t)),
      (e[t] = n));
  }
  function nc(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
      var l = 31 - nt(n),
        u = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~u));
    }
  }
  function Yl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - nt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var W = 0;
  function lo(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var uo,
    Gl,
    io,
    oo,
    so,
    Zl = !1,
    Rr = [],
    Pt = null,
    Tt = null,
    Lt = null,
    Hn = new Map(),
    Wn = new Map(),
    Rt = [],
    rc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function ao(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pt = null;
        break;
      case "dragenter":
      case "dragleave":
        Tt = null;
        break;
      case "mouseover":
      case "mouseout":
        Lt = null;
        break;
      case "pointerover":
      case "pointerout":
        Hn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wn.delete(t.pointerId);
    }
  }
  function Qn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = ur(t)), t !== null && Gl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function lc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Pt = Qn(Pt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Tt = Qn(Tt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Lt = Qn(Lt, e, t, n, r, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (Hn.set(u, Qn(Hn.get(u) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), Wn.set(u, Qn(Wn.get(u) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function co(e) {
    var t = Zt(e.target);
    if (t !== null) {
      var n = Gt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Gi(n)), t !== null)) {
            ((e.blockedOn = t),
              so(e.priority, function () {
                io(n);
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
  function Or(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Al = r), n.target.dispatchEvent(r), (Al = null));
      } else return ((t = ur(n)), t !== null && Gl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function fo(e, t, n) {
    Or(e) && n.delete(t);
  }
  function uc() {
    ((Zl = !1),
      Pt !== null && Or(Pt) && (Pt = null),
      Tt !== null && Or(Tt) && (Tt = null),
      Lt !== null && Or(Lt) && (Lt = null),
      Hn.forEach(fo),
      Wn.forEach(fo));
  }
  function Kn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zl || ((Zl = !0), P.unstable_scheduleCallback(P.unstable_NormalPriority, uc)));
  }
  function Xn(e) {
    function t(l) {
      return Kn(l, e);
    }
    if (0 < Rr.length) {
      Kn(Rr[0], e);
      for (var n = 1; n < Rr.length; n++) {
        var r = Rr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Pt !== null && Kn(Pt, e),
        Tt !== null && Kn(Tt, e),
        Lt !== null && Kn(Lt, e),
        Hn.forEach(t),
        Wn.forEach(t),
        n = 0;
      n < Rt.length;
      n++
    )
      ((r = Rt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null);)
      (co(n), n.blockedOn === null && Rt.shift());
  }
  var pn = Se.ReactCurrentBatchConfig,
    Ir = !0;
  function ic(e, t, n, r) {
    var l = W,
      u = pn.transition;
    pn.transition = null;
    try {
      ((W = 1), Jl(e, t, n, r));
    } finally {
      ((W = l), (pn.transition = u));
    }
  }
  function oc(e, t, n, r) {
    var l = W,
      u = pn.transition;
    pn.transition = null;
    try {
      ((W = 4), Jl(e, t, n, r));
    } finally {
      ((W = l), (pn.transition = u));
    }
  }
  function Jl(e, t, n, r) {
    if (Ir) {
      var l = ql(e, t, n, r);
      if (l === null) (hu(e, t, r, Dr, n), ao(e, r));
      else if (lc(l, e, t, n, r)) r.stopPropagation();
      else if ((ao(e, r), t & 4 && -1 < rc.indexOf(e))) {
        for (; l !== null;) {
          var u = ur(l);
          if (
            (u !== null && uo(u), (u = ql(e, t, n, r)), u === null && hu(e, t, r, Dr, n), u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else hu(e, t, r, null, n);
    }
  }
  var Dr = null;
  function ql(e, t, n, r) {
    if (((Dr = null), (e = $l(r)), (e = Zt(e)), e !== null))
      if (((t = Gt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Gi(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Dr = e), null);
  }
  function po(e) {
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
        switch (Ya()) {
          case Ql:
            return 1;
          case to:
            return 4;
          case Nr:
          case Ga:
            return 16;
          case no:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ot = null,
    bl = null,
    jr = null;
  function mo() {
    if (jr) return jr;
    var e,
      t = bl,
      n = t.length,
      r,
      l = "value" in Ot ? Ot.value : Ot.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[u - r]; r++);
    return (jr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Fr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Mr() {
    return !0;
  }
  function ho() {
    return !1;
  }
  function Ae(e) {
    function t(n, r, l, u, i) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var o in e) e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(u) : u[o]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Mr
          : ho),
        (this.isPropagationStopped = ho),
        this
      );
    }
    return (
      x(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Mr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Mr));
        },
        persist: function () {},
        isPersistent: Mr,
      }),
      t
    );
  }
  var mn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    eu = Ae(mn),
    Yn = x({}, mn, { view: 0, detail: 0 }),
    sc = Ae(Yn),
    tu,
    nu,
    Gn,
    Ur = x({}, Yn, {
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
      getModifierState: lu,
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
          : (e !== Gn &&
              (Gn && e.type === "mousemove"
                ? ((tu = e.screenX - Gn.screenX), (nu = e.screenY - Gn.screenY))
                : (nu = tu = 0),
              (Gn = e)),
            tu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : nu;
      },
    }),
    vo = Ae(Ur),
    ac = x({}, Ur, { dataTransfer: 0 }),
    cc = Ae(ac),
    fc = x({}, Yn, { relatedTarget: 0 }),
    ru = Ae(fc),
    dc = x({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pc = Ae(dc),
    mc = x({}, mn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    hc = Ae(mc),
    vc = x({}, mn, { data: 0 }),
    yo = Ae(vc),
    yc = {
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
    gc = {
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
    wc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function kc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = wc[e]) ? !!t[e] : !1;
  }
  function lu() {
    return kc;
  }
  var Sc = x({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = yc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? gc[e.keyCode] || "Unidentified"
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
      getModifierState: lu,
      charCode: function (e) {
        return e.type === "keypress" ? Fr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Ec = Ae(Sc),
    xc = x({}, Ur, {
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
    go = Ae(xc),
    Cc = x({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lu,
    }),
    _c = Ae(Cc),
    Nc = x({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zc = Ae(Nc),
    Pc = x({}, Ur, {
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
    Tc = Ae(Pc),
    Lc = [9, 13, 27, 32],
    uu = ie && "CompositionEvent" in window,
    Zn = null;
  ie && "documentMode" in document && (Zn = document.documentMode);
  var Rc = ie && "TextEvent" in window && !Zn,
    wo = ie && (!uu || (Zn && 8 < Zn && 11 >= Zn)),
    ko = " ",
    So = !1;
  function Eo(e, t) {
    switch (e) {
      case "keyup":
        return Lc.indexOf(t.keyCode) !== -1;
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
  function xo(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var hn = !1;
  function Oc(e, t) {
    switch (e) {
      case "compositionend":
        return xo(t);
      case "keypress":
        return t.which !== 32 ? null : ((So = !0), ko);
      case "textInput":
        return ((e = t.data), e === ko && So ? null : e);
      default:
        return null;
    }
  }
  function Ic(e, t) {
    if (hn)
      return e === "compositionend" || (!uu && Eo(e, t))
        ? ((e = mo()), (jr = bl = Ot = null), (hn = !1), e)
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
        return wo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Dc = {
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
  function Co(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dc[e.type] : t === "textarea";
  }
  function _o(e, t, n, r) {
    (Wi(r),
      (t = Hr(t, "onChange")),
      0 < t.length &&
        ((n = new eu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Jn = null,
    qn = null;
  function jc(e) {
    Ho(e, 0);
  }
  function Ar(e) {
    var t = kn(e);
    if (Oi(t)) return e;
  }
  function Fc(e, t) {
    if (e === "change") return t;
  }
  var No = !1;
  if (ie) {
    var iu;
    if (ie) {
      var ou = "oninput" in document;
      if (!ou) {
        var zo = document.createElement("div");
        (zo.setAttribute("oninput", "return;"), (ou = typeof zo.oninput == "function"));
      }
      iu = ou;
    } else iu = !1;
    No = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function Po() {
    Jn && (Jn.detachEvent("onpropertychange", To), (qn = Jn = null));
  }
  function To(e) {
    if (e.propertyName === "value" && Ar(qn)) {
      var t = [];
      (_o(t, qn, e, $l(e)), Yi(jc, t));
    }
  }
  function Mc(e, t, n) {
    e === "focusin"
      ? (Po(), (Jn = t), (qn = n), Jn.attachEvent("onpropertychange", To))
      : e === "focusout" && Po();
  }
  function Uc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ar(qn);
  }
  function Ac(e, t) {
    if (e === "click") return Ar(t);
  }
  function $c(e, t) {
    if (e === "input" || e === "change") return Ar(t);
  }
  function Bc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == "function" ? Object.is : Bc;
  function bn(e, t) {
    if (rt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!I.call(t, l) || !rt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Lo(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Ro(e, t) {
    var n = Lo(e);
    e = 0;
    for (var r; n;) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
        e = r;
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
      n = Lo(n);
    }
  }
  function Oo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Oo(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Io() {
    for (var e = window, t = Er(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Er(e.document);
    }
    return t;
  }
  function su(e) {
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
  function Vc(e) {
    var t = Io(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Oo(n.ownerDocument.documentElement, n)) {
      if (r !== null && su(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
          ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            u = Math.min(r.start, l);
          ((r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = Ro(n, u)));
          var i = Ro(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode);)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var Hc = ie && "documentMode" in document && 11 >= document.documentMode,
    vn = null,
    au = null,
    er = null,
    cu = !1;
  function Do(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    cu ||
      vn == null ||
      vn !== Er(r) ||
      ((r = vn),
      "selectionStart" in r && su(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (er && bn(er, r)) ||
        ((er = r),
        (r = Hr(au, "onSelect")),
        0 < r.length &&
          ((t = new eu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = vn))));
  }
  function $r(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var yn = {
      animationend: $r("Animation", "AnimationEnd"),
      animationiteration: $r("Animation", "AnimationIteration"),
      animationstart: $r("Animation", "AnimationStart"),
      transitionend: $r("Transition", "TransitionEnd"),
    },
    fu = {},
    jo = {};
  ie &&
    ((jo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete yn.animationend.animation,
      delete yn.animationiteration.animation,
      delete yn.animationstart.animation),
    "TransitionEvent" in window || delete yn.transitionend.transition);
  function Br(e) {
    if (fu[e]) return fu[e];
    if (!yn[e]) return e;
    var t = yn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in jo) return (fu[e] = t[n]);
    return e;
  }
  var Fo = Br("animationend"),
    Mo = Br("animationiteration"),
    Uo = Br("animationstart"),
    Ao = Br("transitionend"),
    $o = new Map(),
    Bo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function It(e, t) {
    ($o.set(e, t), U(t, [e]));
  }
  for (var du = 0; du < Bo.length; du++) {
    var pu = Bo[du],
      Wc = pu.toLowerCase(),
      Qc = pu[0].toUpperCase() + pu.slice(1);
    It(Wc, "on" + Qc);
  }
  (It(Fo, "onAnimationEnd"),
    It(Mo, "onAnimationIteration"),
    It(Uo, "onAnimationStart"),
    It("dblclick", "onDoubleClick"),
    It("focusin", "onFocus"),
    It("focusout", "onBlur"),
    It(Ao, "onTransitionEnd"),
    ne("onMouseEnter", ["mouseout", "mouseover"]),
    ne("onMouseLeave", ["mouseout", "mouseover"]),
    ne("onPointerEnter", ["pointerout", "pointerover"]),
    ne("onPointerLeave", ["pointerout", "pointerover"]),
    U("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    U(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    U("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    U("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    U(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    U(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var tr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Kc = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
  function Vo(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Wa(r, t, void 0, e), (e.currentTarget = null));
  }
  function Ho(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i],
              s = o.instance,
              p = o.currentTarget;
            if (((o = o.listener), s !== u && l.isPropagationStopped())) break e;
            (Vo(l, o, p), (u = s));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((o = r[i]),
              (s = o.instance),
              (p = o.currentTarget),
              (o = o.listener),
              s !== u && l.isPropagationStopped())
            )
              break e;
            (Vo(l, o, p), (u = s));
          }
      }
    }
    if (_r) throw ((e = Wl), (_r = !1), (Wl = null), e);
  }
  function Y(e, t) {
    var n = t[Su];
    n === void 0 && (n = t[Su] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Wo(t, e, 2, !1), n.add(r));
  }
  function mu(e, t, n) {
    var r = 0;
    (t && (r |= 4), Wo(n, e, r, t));
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function nr(e) {
    if (!e[Vr]) {
      ((e[Vr] = !0),
        te.forEach(function (n) {
          n !== "selectionchange" && (Kc.has(n) || mu(n, !1, e), mu(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || ((t[Vr] = !0), mu("selectionchange", !1, t));
    }
  }
  function Wo(e, t, n, r) {
    switch (po(t)) {
      case 1:
        var l = ic;
        break;
      case 4:
        l = oc;
        break;
      default:
        l = Jl;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Hl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function hu(e, t, n, r, l) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var o = r.stateNode.containerInfo;
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null;) {
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; o !== null;) {
            if (((i = Zt(o)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Yi(function () {
      var p = u,
        y = $l(n),
        g = [];
      e: {
        var h = $o.get(e);
        if (h !== void 0) {
          var S = eu,
            C = e;
          switch (e) {
            case "keypress":
              if (Fr(n) === 0) break e;
            case "keydown":
            case "keyup":
              S = Ec;
              break;
            case "focusin":
              ((C = "focus"), (S = ru));
              break;
            case "focusout":
              ((C = "blur"), (S = ru));
              break;
            case "beforeblur":
            case "afterblur":
              S = ru;
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
              S = vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = cc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = _c;
              break;
            case Fo:
            case Mo:
            case Uo:
              S = pc;
              break;
            case Ao:
              S = zc;
              break;
            case "scroll":
              S = sc;
              break;
            case "wheel":
              S = Tc;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = go;
          }
          var _ = (t & 4) !== 0,
            ce = !_ && e === "scroll",
            f = _ ? (h !== null ? h + "Capture" : null) : h;
          _ = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w), f !== null && ((w = Un(a, f)), w != null && _.push(rr(a, w, d)))),
              ce)
            )
              break;
            a = a.return;
          }
          0 < _.length && ((h = new S(h, C, null, n, y)), g.push({ event: h, listeners: _ }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (S = e === "mouseout" || e === "pointerout"),
            h && n !== Al && (C = n.relatedTarget || n.fromElement) && (Zt(C) || C[wt]))
          )
            break e;
          if (
            (S || h) &&
            ((h =
              y.window === y
                ? y
                : (h = y.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            S
              ? ((C = n.relatedTarget || n.toElement),
                (S = p),
                (C = C ? Zt(C) : null),
                C !== null &&
                  ((ce = Gt(C)), C !== ce || (C.tag !== 5 && C.tag !== 6)) &&
                  (C = null))
              : ((S = null), (C = p)),
            S !== C)
          ) {
            if (
              ((_ = vo),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((_ = go), (w = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (ce = S == null ? h : kn(S)),
              (d = C == null ? h : kn(C)),
              (h = new _(w, a + "leave", S, n, y)),
              (h.target = ce),
              (h.relatedTarget = d),
              (w = null),
              Zt(y) === p &&
                ((_ = new _(f, a + "enter", C, n, y)),
                (_.target = d),
                (_.relatedTarget = ce),
                (w = _)),
              (ce = w),
              S && C)
            )
              t: {
                for (_ = S, f = C, a = 0, d = _; d; d = gn(d)) a++;
                for (d = 0, w = f; w; w = gn(w)) d++;
                for (; 0 < a - d;) ((_ = gn(_)), a--);
                for (; 0 < d - a;) ((f = gn(f)), d--);
                for (; a--;) {
                  if (_ === f || (f !== null && _ === f.alternate)) break t;
                  ((_ = gn(_)), (f = gn(f)));
                }
                _ = null;
              }
            else _ = null;
            (S !== null && Qo(g, h, S, _, !1), C !== null && ce !== null && Qo(g, ce, C, _, !0));
          }
        }
        e: {
          if (
            ((h = p ? kn(p) : window),
            (S = h.nodeName && h.nodeName.toLowerCase()),
            S === "select" || (S === "input" && h.type === "file"))
          )
            var z = Fc;
          else if (Co(h))
            if (No) z = $c;
            else {
              z = Uc;
              var T = Mc;
            }
          else
            (S = h.nodeName) &&
              S.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (z = Ac);
          if (z && (z = z(e, p))) {
            _o(g, z, n, y);
            break e;
          }
          (T && T(e, h, p),
            e === "focusout" &&
              (T = h._wrapperState) &&
              T.controlled &&
              h.type === "number" &&
              Dl(h, "number", h.value));
        }
        switch (((T = p ? kn(p) : window), e)) {
          case "focusin":
            (Co(T) || T.contentEditable === "true") && ((vn = T), (au = p), (er = null));
            break;
          case "focusout":
            er = au = vn = null;
            break;
          case "mousedown":
            cu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((cu = !1), Do(g, n, y));
            break;
          case "selectionchange":
            if (Hc) break;
          case "keydown":
          case "keyup":
            Do(g, n, y);
        }
        var L;
        if (uu)
          e: {
            switch (e) {
              case "compositionstart":
                var O = "onCompositionStart";
                break e;
              case "compositionend":
                O = "onCompositionEnd";
                break e;
              case "compositionupdate":
                O = "onCompositionUpdate";
                break e;
            }
            O = void 0;
          }
        else
          hn
            ? Eo(e, n) && (O = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
        (O &&
          (wo &&
            n.locale !== "ko" &&
            (hn || O !== "onCompositionStart"
              ? O === "onCompositionEnd" && hn && (L = mo())
              : ((Ot = y), (bl = "value" in Ot ? Ot.value : Ot.textContent), (hn = !0))),
          (T = Hr(p, O)),
          0 < T.length &&
            ((O = new yo(O, e, null, n, y)),
            g.push({ event: O, listeners: T }),
            L ? (O.data = L) : ((L = xo(n)), L !== null && (O.data = L)))),
          (L = Rc ? Oc(e, n) : Ic(e, n)) &&
            ((p = Hr(p, "onBeforeInput")),
            0 < p.length &&
              ((y = new yo("onBeforeInput", "beforeinput", null, n, y)),
              g.push({ event: y, listeners: p }),
              (y.data = L))));
      }
      Ho(g, t);
    });
  }
  function rr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Un(e, n)),
        u != null && r.unshift(rr(e, u, l)),
        (u = Un(e, t)),
        u != null && r.push(rr(e, u, l))),
        (e = e.return));
    }
    return r;
  }
  function gn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qo(e, t, n, r, l) {
    for (var u = t._reactName, i = []; n !== null && n !== r;) {
      var o = n,
        s = o.alternate,
        p = o.stateNode;
      if (s !== null && s === r) break;
      (o.tag === 5 &&
        p !== null &&
        ((o = p),
        l
          ? ((s = Un(n, u)), s != null && i.unshift(rr(n, s, o)))
          : l || ((s = Un(n, u)), s != null && i.push(rr(n, s, o)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Xc = /\r\n?/g,
    Yc = /\u0000|\uFFFD/g;
  function Ko(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Xc,
        `
`,
      )
      .replace(Yc, "");
  }
  function Wr(e, t, n) {
    if (((t = Ko(t)), Ko(e) !== t && n)) throw Error(m(425));
  }
  function Qr() {}
  var vu = null,
    yu = null;
  function gu(e, t) {
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
  var wu = typeof setTimeout == "function" ? setTimeout : void 0,
    Gc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xo = typeof Promise == "function" ? Promise : void 0,
    Zc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Xo < "u"
          ? function (e) {
              return Xo.resolve(null).then(e).catch(Jc);
            }
          : wu;
  function Jc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ku(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Xn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Xn(t);
  }
  function Dt(e) {
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
  function Yo(e) {
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
  var wn = Math.random().toString(36).slice(2),
    pt = "__reactFiber$" + wn,
    lr = "__reactProps$" + wn,
    wt = "__reactContainer$" + wn,
    Su = "__reactEvents$" + wn,
    qc = "__reactListeners$" + wn,
    bc = "__reactHandles$" + wn;
  function Zt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[wt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Yo(e); e !== null;) {
            if ((n = e[pt])) return n;
            e = Yo(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function ur(e) {
    return (
      (e = e[pt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Kr(e) {
    return e[lr] || null;
  }
  var Eu = [],
    Sn = -1;
  function jt(e) {
    return { current: e };
  }
  function G(e) {
    0 > Sn || ((e.current = Eu[Sn]), (Eu[Sn] = null), Sn--);
  }
  function X(e, t) {
    (Sn++, (Eu[Sn] = e.current), (e.current = t));
  }
  var Ft = {},
    Ee = jt(Ft),
    Re = jt(!1),
    Jt = Ft;
  function En(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in n) l[u] = t[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Oe(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Xr() {
    (G(Re), G(Ee));
  }
  function Go(e, t, n) {
    if (Ee.current !== Ft) throw Error(m(168));
    (X(Ee, t), X(Re, n));
  }
  function Zo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, K(e) || "Unknown", l));
    return x({}, n, r);
  }
  function Yr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
      (Jt = Ee.current),
      X(Ee, e),
      X(Re, Re.current),
      !0
    );
  }
  function Jo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Zo(e, t, Jt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        G(Re),
        G(Ee),
        X(Ee, e))
      : G(Re),
      X(Re, n));
  }
  var kt = null,
    Gr = !1,
    xu = !1;
  function qo(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function ef(e) {
    ((Gr = !0), qo(e));
  }
  function Mt() {
    if (!xu && kt !== null) {
      xu = !0;
      var e = 0,
        t = W;
      try {
        var n = kt;
        for (W = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((kt = null), (Gr = !1));
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), bi(Ql, Mt), l);
      } finally {
        ((W = t), (xu = !1));
      }
    }
    return null;
  }
  var xn = [],
    Cn = 0,
    Zr = null,
    Jr = 0,
    Ke = [],
    Xe = 0,
    qt = null,
    St = 1,
    Et = "";
  function bt(e, t) {
    ((xn[Cn++] = Jr), (xn[Cn++] = Zr), (Zr = e), (Jr = t));
  }
  function bo(e, t, n) {
    ((Ke[Xe++] = St), (Ke[Xe++] = Et), (Ke[Xe++] = qt), (qt = e));
    var r = St;
    e = Et;
    var l = 32 - nt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var u = 32 - nt(t) + l;
    if (30 < u) {
      var i = l - (l % 5);
      ((u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (St = (1 << (32 - nt(t) + l)) | (n << l) | r),
        (Et = u + e));
    } else ((St = (1 << u) | (n << l) | r), (Et = e));
  }
  function Cu(e) {
    e.return !== null && (bt(e, 1), bo(e, 1, 0));
  }
  function _u(e) {
    for (; e === Zr;) ((Zr = xn[--Cn]), (xn[Cn] = null), (Jr = xn[--Cn]), (xn[Cn] = null));
    for (; e === qt;)
      ((qt = Ke[--Xe]),
        (Ke[Xe] = null),
        (Et = Ke[--Xe]),
        (Ke[Xe] = null),
        (St = Ke[--Xe]),
        (Ke[Xe] = null));
  }
  var $e = null,
    Be = null,
    ee = !1,
    lt = null;
  function es(e, t) {
    var n = Je(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ts(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), ($e = e), (Be = Dt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), ($e = e), (Be = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = qt !== null ? { id: St, overflow: Et } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Je(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              ($e = e),
              (Be = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Nu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zu(e) {
    if (ee) {
      var t = Be;
      if (t) {
        var n = t;
        if (!ts(e, t)) {
          if (Nu(e)) throw Error(m(418));
          t = Dt(n.nextSibling);
          var r = $e;
          t && ts(e, t) ? es(r, n) : ((e.flags = (e.flags & -4097) | 2), (ee = !1), ($e = e));
        }
      } else {
        if (Nu(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (ee = !1), ($e = e));
      }
    }
  }
  function ns(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    $e = e;
  }
  function qr(e) {
    if (e !== $e) return !1;
    if (!ee) return (ns(e), (ee = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !gu(e.type, e.memoizedProps))),
      t && (t = Be))
    ) {
      if (Nu(e)) throw (rs(), Error(m(418)));
      for (; t;) (es(e, t), (t = Dt(t.nextSibling)));
    }
    if ((ns(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Be = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Be = null;
      }
    } else Be = $e ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    for (var e = Be; e;) e = Dt(e.nextSibling);
  }
  function _n() {
    ((Be = $e = null), (ee = !1));
  }
  function Pu(e) {
    lt === null ? (lt = [e]) : lt.push(e);
  }
  var tf = Se.ReactCurrentBatchConfig;
  function ir(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u
          ? t.ref
          : ((t = function (i) {
              var o = l.refs;
              i === null ? delete o[u] : (o[u] = i);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function br(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function ls(e) {
    var t = e._init;
    return t(e._payload);
  }
  function us(e) {
    function t(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null;) (t(f, a), (a = a.sibling));
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null;)
        (a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling));
      return f;
    }
    function l(f, a) {
      return ((f = Qt(f, a)), (f.index = 0), (f.sibling = null), f);
    }
    function u(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d) : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function i(f) {
      return (e && f.alternate === null && (f.flags |= 2), f);
    }
    function o(f, a, d, w) {
      return a === null || a.tag !== 6
        ? ((a = wi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, w) {
      var z = d.type;
      return z === Te
        ? y(f, a, d.props.children, w, d.key)
        : a !== null &&
            (a.elementType === z ||
              (typeof z == "object" && z !== null && z.$$typeof === Le && ls(z) === a.type))
          ? ((w = l(a, d.props)), (w.ref = ir(f, a, d)), (w.return = f), w)
          : ((w = xl(d.type, d.key, d.props, null, f.mode, w)),
            (w.ref = ir(f, a, d)),
            (w.return = f),
            w);
    }
    function p(f, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = ki(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function y(f, a, d, w, z) {
      return a === null || a.tag !== 7
        ? ((a = sn(d, f.mode, w, z)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function g(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = wi("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case et:
            return (
              (d = xl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ir(f, null, a)),
              (d.return = f),
              d
            );
          case Ne:
            return ((a = ki(a, f.mode, d)), (a.return = f), a);
          case Le:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (jn(a) || R(a)) return ((a = sn(a, f.mode, d, null)), (a.return = f), a);
        br(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var z = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return z !== null ? null : o(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case et:
            return d.key === z ? s(f, a, d, w) : null;
          case Ne:
            return d.key === z ? p(f, a, d, w) : null;
          case Le:
            return ((z = d._init), h(f, a, z(d._payload), w));
        }
        if (jn(d) || R(d)) return z !== null ? null : y(f, a, d, w, null);
        br(f, d);
      }
      return null;
    }
    function S(f, a, d, w, z) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return ((f = f.get(d) || null), o(a, f, "" + w, z));
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case et:
            return ((f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, z));
          case Ne:
            return ((f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, z));
          case Le:
            var T = w._init;
            return S(f, a, d, T(w._payload), z);
        }
        if (jn(w) || R(w)) return ((f = f.get(d) || null), y(a, f, w, z, null));
        br(a, w);
      }
      return null;
    }
    function C(f, a, d, w) {
      for (var z = null, T = null, L = a, O = (a = 0), ge = null; L !== null && O < d.length; O++) {
        L.index > O ? ((ge = L), (L = null)) : (ge = L.sibling);
        var V = h(f, L, d[O], w);
        if (V === null) {
          L === null && (L = ge);
          break;
        }
        (e && L && V.alternate === null && t(f, L),
          (a = u(V, a, O)),
          T === null ? (z = V) : (T.sibling = V),
          (T = V),
          (L = ge));
      }
      if (O === d.length) return (n(f, L), ee && bt(f, O), z);
      if (L === null) {
        for (; O < d.length; O++)
          ((L = g(f, d[O], w)),
            L !== null && ((a = u(L, a, O)), T === null ? (z = L) : (T.sibling = L), (T = L)));
        return (ee && bt(f, O), z);
      }
      for (L = r(f, L); O < d.length; O++)
        ((ge = S(L, f, O, d[O], w)),
          ge !== null &&
            (e && ge.alternate !== null && L.delete(ge.key === null ? O : ge.key),
            (a = u(ge, a, O)),
            T === null ? (z = ge) : (T.sibling = ge),
            (T = ge)));
      return (
        e &&
          L.forEach(function (Kt) {
            return t(f, Kt);
          }),
        ee && bt(f, O),
        z
      );
    }
    function _(f, a, d, w) {
      var z = R(d);
      if (typeof z != "function") throw Error(m(150));
      if (((d = z.call(d)), d == null)) throw Error(m(151));
      for (
        var T = (z = null), L = a, O = (a = 0), ge = null, V = d.next();
        L !== null && !V.done;
        O++, V = d.next()
      ) {
        L.index > O ? ((ge = L), (L = null)) : (ge = L.sibling);
        var Kt = h(f, L, V.value, w);
        if (Kt === null) {
          L === null && (L = ge);
          break;
        }
        (e && L && Kt.alternate === null && t(f, L),
          (a = u(Kt, a, O)),
          T === null ? (z = Kt) : (T.sibling = Kt),
          (T = Kt),
          (L = ge));
      }
      if (V.done) return (n(f, L), ee && bt(f, O), z);
      if (L === null) {
        for (; !V.done; O++, V = d.next())
          ((V = g(f, V.value, w)),
            V !== null && ((a = u(V, a, O)), T === null ? (z = V) : (T.sibling = V), (T = V)));
        return (ee && bt(f, O), z);
      }
      for (L = r(f, L); !V.done; O++, V = d.next())
        ((V = S(L, f, O, V.value, w)),
          V !== null &&
            (e && V.alternate !== null && L.delete(V.key === null ? O : V.key),
            (a = u(V, a, O)),
            T === null ? (z = V) : (T.sibling = V),
            (T = V)));
      return (
        e &&
          L.forEach(function (jf) {
            return t(f, jf);
          }),
        ee && bt(f, O),
        z
      );
    }
    function ce(f, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Te &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case et:
            e: {
              for (var z = d.key, T = a; T !== null;) {
                if (T.key === z) {
                  if (((z = d.type), z === Te)) {
                    if (T.tag === 7) {
                      (n(f, T.sibling), (a = l(T, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    T.elementType === z ||
                    (typeof z == "object" && z !== null && z.$$typeof === Le && ls(z) === T.type)
                  ) {
                    (n(f, T.sibling),
                      (a = l(T, d.props)),
                      (a.ref = ir(f, T, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, T);
                  break;
                } else t(f, T);
                T = T.sibling;
              }
              d.type === Te
                ? ((a = sn(d.props.children, f.mode, w, d.key)), (a.return = f), (f = a))
                : ((w = xl(d.type, d.key, d.props, null, f.mode, w)),
                  (w.ref = ir(f, a, d)),
                  (w.return = f),
                  (f = w));
            }
            return i(f);
          case Ne:
            e: {
              for (T = d.key; a !== null;) {
                if (a.key === T)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    (n(f, a.sibling), (a = l(a, d.children || [])), (a.return = f), (f = a));
                    break e;
                  } else {
                    n(f, a);
                    break;
                  }
                else t(f, a);
                a = a.sibling;
              }
              ((a = ki(d, f.mode, w)), (a.return = f), (f = a));
            }
            return i(f);
          case Le:
            return ((T = d._init), ce(f, a, T(d._payload), w));
        }
        if (jn(d)) return C(f, a, d, w);
        if (R(d)) return _(f, a, d, w);
        br(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = wi(d, f.mode, w)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return ce;
  }
  var Nn = us(!0),
    is = us(!1),
    el = jt(null),
    tl = null,
    zn = null,
    Tu = null;
  function Lu() {
    Tu = zn = tl = null;
  }
  function Ru(e) {
    var t = el.current;
    (G(el), (e._currentValue = t));
  }
  function Ou(e, t, n) {
    for (; e !== null;) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Pn(e, t) {
    ((tl = e),
      (Tu = zn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ie = !0), (e.firstContext = null)));
  }
  function Ye(e) {
    var t = e._currentValue;
    if (Tu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), zn === null)) {
        if (tl === null) throw Error(m(308));
        ((zn = e), (tl.dependencies = { lanes: 0, firstContext: e }));
      } else zn = zn.next = e;
    return t;
  }
  var en = null;
  function Iu(e) {
    en === null ? (en = [e]) : en.push(e);
  }
  function os(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Iu(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      xt(e, r)
    );
  }
  function xt(e, t) {
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
  var Ut = !1;
  function Du(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ss(e, t) {
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
  function Ct(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (A & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        xt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Iu(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      xt(e, n)
    );
  }
  function nl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n));
    }
  }
  function as(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (u === null ? (l = u = i) : (u = u.next = i), (n = n.next));
        } while (n !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function rl(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
    var u = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        p = s.next;
      ((s.next = null), i === null ? (u = p) : (i.next = p), (i = s));
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (o = y.lastBaseUpdate),
        o !== i && (o === null ? (y.firstBaseUpdate = p) : (o.next = p), (y.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var g = l.baseState;
      ((i = 0), (y = p = s = null), (o = u));
      do {
        var h = o.lane,
          S = o.eventTime;
        if ((r & h) === h) {
          y !== null &&
            (y = y.next =
              {
                eventTime: S,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var C = e,
              _ = o;
            switch (((h = t), (S = n), _.tag)) {
              case 1:
                if (((C = _.payload), typeof C == "function")) {
                  g = C.call(S, g, h);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = (C.flags & -65537) | 128;
              case 0:
                if (
                  ((C = _.payload), (h = typeof C == "function" ? C.call(S, g, h) : C), h == null)
                )
                  break e;
                g = x({}, g, h);
                break e;
              case 2:
                Ut = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64), (h = l.effects), h === null ? (l.effects = [o]) : h.push(o));
        } else
          ((S = {
            eventTime: S,
            lane: h,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            y === null ? ((p = y = S), (s = g)) : (y = y.next = S),
            (i |= h));
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          ((h = o),
            (o = h.next),
            (h.next = null),
            (l.lastBaseUpdate = h),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (y === null && (s = g),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = y),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ((rn |= i), (e.lanes = i), (e.memoizedState = g));
    }
  }
  function cs(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function")) throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var or = {},
    mt = jt(or),
    sr = jt(or),
    ar = jt(or);
  function tn(e) {
    if (e === or) throw Error(m(174));
    return e;
  }
  function ju(e, t) {
    switch ((X(ar, t), X(sr, e), X(mt, or), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Fl(t, e)));
    }
    (G(mt), X(mt, t));
  }
  function Tn() {
    (G(mt), G(sr), G(ar));
  }
  function fs(e) {
    tn(ar.current);
    var t = tn(mt.current),
      n = Fl(t, e.type);
    t !== n && (X(sr, e), X(mt, n));
  }
  function Fu(e) {
    sr.current === e && (G(mt), G(sr));
  }
  var le = jt(0);
  function ll(e) {
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
  var Mu = [];
  function Uu() {
    for (var e = 0; e < Mu.length; e++) Mu[e]._workInProgressVersionPrimary = null;
    Mu.length = 0;
  }
  var ul = Se.ReactCurrentDispatcher,
    Au = Se.ReactCurrentBatchConfig,
    nn = 0,
    ue = null,
    me = null,
    ve = null,
    il = !1,
    cr = !1,
    fr = 0,
    nf = 0;
  function xe() {
    throw Error(m(321));
  }
  function $u(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function Bu(e, t, n, r, l, u) {
    if (
      ((nn = u),
      (ue = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ul.current = e === null || e.memoizedState === null ? of : sf),
      (e = n(r, l)),
      cr)
    ) {
      u = 0;
      do {
        if (((cr = !1), (fr = 0), 25 <= u)) throw Error(m(301));
        ((u += 1), (ve = me = null), (t.updateQueue = null), (ul.current = af), (e = n(r, l)));
      } while (cr);
    }
    if (
      ((ul.current = al),
      (t = me !== null && me.next !== null),
      (nn = 0),
      (ve = me = ue = null),
      (il = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Vu() {
    var e = fr !== 0;
    return ((fr = 0), e);
  }
  function ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ve === null ? (ue.memoizedState = ve = e) : (ve = ve.next = e), ve);
  }
  function Ge() {
    if (me === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var t = ve === null ? ue.memoizedState : ve.next;
    if (t !== null) ((ve = t), (me = e));
    else {
      if (e === null) throw Error(m(310));
      ((me = e),
        (e = {
          memoizedState: me.memoizedState,
          baseState: me.baseState,
          baseQueue: me.baseQueue,
          queue: me.queue,
          next: null,
        }),
        ve === null ? (ue.memoizedState = ve = e) : (ve = ve.next = e));
    }
    return ve;
  }
  function dr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Hu(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = me,
      l = r.baseQueue,
      u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        ((l.next = u.next), (u.next = i));
      }
      ((r.baseQueue = l = u), (n.pending = null));
    }
    if (l !== null) {
      ((u = l.next), (r = r.baseState));
      var o = (i = null),
        s = null,
        p = u;
      do {
        var y = p.lane;
        if ((nn & y) === y)
          (s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action)));
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          (s === null ? ((o = s = g), (i = r)) : (s = s.next = g), (ue.lanes |= y), (rn |= y));
        }
        p = p.next;
      } while (p !== null && p !== u);
      (s === null ? (i = r) : (s.next = o),
        rt(r, t.memoizedState) || (Ie = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), (ue.lanes |= u), (rn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Wu(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do ((u = e(u, i.action)), (i = i.next));
      while (i !== l);
      (rt(u, t.memoizedState) || (Ie = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, r];
  }
  function ds() {}
  function ps(e, t) {
    var n = ue,
      r = Ge(),
      l = t(),
      u = !rt(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Ie = !0)),
      (r = r.queue),
      Qu(vs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (ve !== null && ve.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), pr(9, hs.bind(null, n, r, l, t), void 0, null), ye === null))
        throw Error(m(349));
      (nn & 30) !== 0 || ms(n, t, l);
    }
    return l;
  }
  function ms(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ue.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ue.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function hs(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ys(t) && gs(e));
  }
  function vs(e, t, n) {
    return n(function () {
      ys(t) && gs(e);
    });
  }
  function ys(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !rt(e, n);
    } catch {
      return !0;
    }
  }
  function gs(e) {
    var t = xt(e, 1);
    t !== null && st(t, e, 1, -1);
  }
  function ws(e) {
    var t = ht();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = uf.bind(null, ue, e)),
      [t.memoizedState, e]
    );
  }
  function pr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ue.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ue.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ks() {
    return Ge().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = ht();
    ((ue.flags |= e), (l.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function sl(e, t, n, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (me !== null) {
      var i = me.memoizedState;
      if (((u = i.destroy), r !== null && $u(r, i.deps))) {
        l.memoizedState = pr(t, n, u, r);
        return;
      }
    }
    ((ue.flags |= e), (l.memoizedState = pr(1 | t, n, u, r)));
  }
  function Ss(e, t) {
    return ol(8390656, 8, e, t);
  }
  function Qu(e, t) {
    return sl(2048, 8, e, t);
  }
  function Es(e, t) {
    return sl(4, 2, e, t);
  }
  function xs(e, t) {
    return sl(4, 4, e, t);
  }
  function Cs(e, t) {
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
  function _s(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), sl(4, 4, Cs.bind(null, t, e), n));
  }
  function Ku() {}
  function Ns(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $u(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function zs(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $u(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ps(e, t, n) {
    return (nn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n))
      : (rt(n, t) || ((n = ro()), (ue.lanes |= n), (rn |= n), (e.baseState = !0)), t);
  }
  function rf(e, t) {
    var n = W;
    ((W = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Au.transition;
    Au.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((W = n), (Au.transition = r));
    }
  }
  function Ts() {
    return Ge().memoizedState;
  }
  function lf(e, t, n) {
    var r = Ht(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ls(e)))
      Rs(t, n);
    else if (((n = os(e, t, n, r)), n !== null)) {
      var l = Pe();
      (st(n, e, r, l), Os(n, t, r));
    }
  }
  function uf(e, t, n) {
    var r = Ht(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ls(e)) Rs(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            o = u(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = o), rt(o, i))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), Iu(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = os(e, t, l, r)), n !== null && ((l = Pe()), st(n, e, r, l), Os(n, t, r)));
    }
  }
  function Ls(e) {
    var t = e.alternate;
    return e === ue || (t !== null && t === ue);
  }
  function Rs(e, t) {
    cr = il = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Os(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n));
    }
  }
  var al = {
      readContext: Ye,
      useCallback: xe,
      useContext: xe,
      useEffect: xe,
      useImperativeHandle: xe,
      useInsertionEffect: xe,
      useLayoutEffect: xe,
      useMemo: xe,
      useReducer: xe,
      useRef: xe,
      useState: xe,
      useDebugValue: xe,
      useDeferredValue: xe,
      useTransition: xe,
      useMutableSource: xe,
      useSyncExternalStore: xe,
      useId: xe,
      unstable_isNewReconciler: !1,
    },
    of = {
      readContext: Ye,
      useCallback: function (e, t) {
        return ((ht().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ye,
      useEffect: Ss,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), ol(4194308, 4, Cs.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return ol(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ol(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = ht();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = ht();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = lf.bind(null, ue, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ws,
      useDebugValue: Ku,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = ws(!1),
          t = e[0];
        return ((e = rf.bind(null, e[1])), (ht().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ue,
          l = ht();
        if (ee) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ye === null)) throw Error(m(349));
          (nn & 30) !== 0 || ms(r, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          Ss(vs.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          pr(9, hs.bind(null, r, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = ht(),
          t = ye.identifierPrefix;
        if (ee) {
          var n = Et,
            r = St;
          ((n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = fr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = nf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    sf = {
      readContext: Ye,
      useCallback: Ns,
      useContext: Ye,
      useEffect: Qu,
      useImperativeHandle: _s,
      useInsertionEffect: Es,
      useLayoutEffect: xs,
      useMemo: zs,
      useReducer: Hu,
      useRef: ks,
      useState: function () {
        return Hu(dr);
      },
      useDebugValue: Ku,
      useDeferredValue: function (e) {
        var t = Ge();
        return Ps(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Hu(dr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: Ts,
      unstable_isNewReconciler: !1,
    },
    af = {
      readContext: Ye,
      useCallback: Ns,
      useContext: Ye,
      useEffect: Qu,
      useImperativeHandle: _s,
      useInsertionEffect: Es,
      useLayoutEffect: xs,
      useMemo: zs,
      useReducer: Wu,
      useRef: ks,
      useState: function () {
        return Wu(dr);
      },
      useDebugValue: Ku,
      useDeferredValue: function (e) {
        var t = Ge();
        return me === null ? (t.memoizedState = e) : Ps(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Wu(dr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: Ts,
      unstable_isNewReconciler: !1,
    };
  function ut(e, t) {
    if (e && e.defaultProps) {
      ((t = x({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Xu(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : x({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var cl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Ht(e),
        u = Ct(r, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (st(t, e, l, r), nl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Ht(e),
        u = Ct(r, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (st(t, e, l, r), nl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Pe(),
        r = Ht(e),
        l = Ct(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (st(t, e, r, n), nl(t, e, r)));
    },
  };
  function Is(e, t, n, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !bn(n, r) || !bn(l, u)
          : !0
    );
  }
  function Ds(e, t, n) {
    var r = !1,
      l = Ft,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Ye(u))
        : ((l = Oe(t) ? Jt : Ee.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? En(e, l) : Ft)),
      (t = new t(n, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function js(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && cl.enqueueReplaceState(t, t.state, null));
  }
  function Yu(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Du(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = Ye(u))
      : ((u = Oe(t) ? Jt : Ee.current), (l.context = En(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (Xu(e, t, u, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && cl.enqueueReplaceState(l, l.state, null),
        rl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Ln(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += $(r)), (r = r.return));
      while (r);
      var l = n;
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
  function Gu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Zu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var cf = typeof WeakMap == "function" ? WeakMap : Map;
  function Fs(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (yl || ((yl = !0), (fi = r)), Zu(e, t));
      }),
      n
    );
  }
  function Ms(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Zu(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          (Zu(e, t),
            typeof r != "function" && (Bt === null ? (Bt = new Set([this])) : Bt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
        }),
      n
    );
  }
  function Us(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new cf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Cf.bind(null, e, t, n)), t.then(e, e));
  }
  function As(e) {
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
  function $s(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Ct(-1, 1)), (t.tag = 2), At(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var ff = Se.ReactCurrentOwner,
    Ie = !1;
  function ze(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : Nn(t, e.child, n, r);
  }
  function Bs(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Pn(t, l),
      (r = Bu(e, t, n, r, u, l)),
      (n = Vu()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (ee && n && Cu(t), (t.flags |= 1), ze(e, t, r, l), t.child)
    );
  }
  function Vs(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !gi(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Hs(e, t, u, r, l))
        : ((e = xl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var i = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : bn), n(i, r) && e.ref === t.ref))
        return _t(e, t, l);
    }
    return ((t.flags |= 1), (e = Qt(u, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Hs(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (bn(u, r) && e.ref === t.ref)
        if (((Ie = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ie = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return Ju(e, t, n, r, l);
  }
  function Ws(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          X(On, Ve),
          (Ve |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            X(On, Ve),
            (Ve |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = u !== null ? u.baseLanes : n),
          X(On, Ve),
          (Ve |= r));
      }
    else
      (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        X(On, Ve),
        (Ve |= r));
    return (ze(e, t, l, n), t.child);
  }
  function Qs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ju(e, t, n, r, l) {
    var u = Oe(n) ? Jt : Ee.current;
    return (
      (u = En(t, u)),
      Pn(t, l),
      (n = Bu(e, t, n, r, u, l)),
      (r = Vu()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (ee && r && Cu(t), (t.flags |= 1), ze(e, t, n, l), t.child)
    );
  }
  function Ks(e, t, n, r, l) {
    if (Oe(n)) {
      var u = !0;
      Yr(t);
    } else u = !1;
    if ((Pn(t, l), t.stateNode === null)) (dl(e, t), Ds(t, n, r), Yu(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var s = i.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Ye(p))
        : ((p = Oe(n) ? Jt : Ee.current), (p = En(t, p)));
      var y = n.getDerivedStateFromProps,
        g = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      (g ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && js(t, i, r, p)),
        (Ut = !1));
      var h = t.memoizedState;
      ((i.state = h),
        rl(t, r, i, l),
        (s = t.memoizedState),
        o !== r || h !== s || Re.current || Ut
          ? (typeof y == "function" && (Xu(t, n, y, r), (s = t.memoizedState)),
            (o = Ut || Is(t, n, o, r, h, s, p))
              ? (g ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" && i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = p),
            (r = o))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
    } else {
      ((i = t.stateNode),
        ss(e, t),
        (o = t.memoizedProps),
        (p = t.type === t.elementType ? o : ut(t.type, o)),
        (i.props = p),
        (g = t.pendingProps),
        (h = i.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ye(s))
          : ((s = Oe(n) ? Jt : Ee.current), (s = En(t, s))));
      var S = n.getDerivedStateFromProps;
      ((y = typeof S == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== g || h !== s) && js(t, i, r, s)),
        (Ut = !1),
        (h = t.memoizedState),
        (i.state = h),
        rl(t, r, i, l));
      var C = t.memoizedState;
      o !== g || h !== C || Re.current || Ut
        ? (typeof S == "function" && (Xu(t, n, S, r), (C = t.memoizedState)),
          (p = Ut || Is(t, n, p, r, h, C, s) || !1)
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, C, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, C, s)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = C)),
          (i.props = r),
          (i.state = C),
          (i.context = s),
          (r = p))
        : (typeof i.componentDidUpdate != "function" ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return qu(e, t, n, r, u, l);
  }
  function qu(e, t, n, r, l, u) {
    Qs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && Jo(t, n, !1), _t(e, t, u));
    ((r = t.stateNode), (ff.current = t));
    var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Nn(t, e.child, null, u)), (t.child = Nn(t, null, o, u)))
        : ze(e, t, o, u),
      (t.memoizedState = r.state),
      l && Jo(t, n, !0),
      t.child
    );
  }
  function Xs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Go(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Go(e, t.context, !1),
      ju(e, t.containerInfo));
  }
  function Ys(e, t, n, r, l) {
    return (_n(), Pu(l), (t.flags |= 256), ze(e, t, n, r), t.child);
  }
  var bu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ei(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = le.current,
      u = !1,
      i = (t.flags & 128) !== 0,
      o;
    if (
      ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      X(le, l & 1),
      e === null)
    )
      return (
        zu(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((i = r.children),
            (e = r.fallback),
            u
              ? ((r = t.mode),
                (u = t.child),
                (i = { mode: "hidden", children: i }),
                (r & 1) === 0 && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = i))
                  : (u = Cl(i, r, 0, null)),
                (e = sn(e, r, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = ei(n)),
                (t.memoizedState = bu),
                e)
              : ti(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return df(e, t, i, r, o, l, n);
    if (u) {
      ((u = r.fallback), (i = t.mode), (l = e.child), (o = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (u = Qt(o, u)) : ((u = sn(u, i, n, null)), (u.flags |= 2)),
        (u.return = t),
        (r.return = t),
        (r.sibling = u),
        (t.child = r),
        (r = u),
        (u = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? ei(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = bu),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = Qt(u, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ti(e, t) {
    return (
      (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fl(e, t, n, r) {
    return (
      r !== null && Pu(r),
      Nn(t, e.child, null, n),
      (e = ti(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function df(e, t, n, r, l, u, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Gu(Error(m(422)))), fl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = r.fallback),
            (l = t.mode),
            (r = Cl({ mode: "visible", children: r.children }, l, 0, null)),
            (u = sn(u, l, i, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            (t.mode & 1) !== 0 && Nn(t, e.child, null, i),
            (t.child.memoizedState = ei(i)),
            (t.memoizedState = bu),
            u);
    if ((t.mode & 1) === 0) return fl(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (u = Error(m(419))), (r = Gu(u, r, void 0)), fl(e, t, i, r));
    }
    if (((o = (i & e.childLanes) !== 0), Ie || o)) {
      if (((r = ye), r !== null)) {
        switch (i & -i) {
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
        ((l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
          l !== 0 && l !== u.retryLane && ((u.retryLane = l), xt(e, l), st(r, e, l, -1)));
      }
      return (yi(), (r = Gu(Error(m(421)))), fl(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = _f.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (Be = Dt(l.nextSibling)),
        ($e = t),
        (ee = !0),
        (lt = null),
        e !== null &&
          ((Ke[Xe++] = St),
          (Ke[Xe++] = Et),
          (Ke[Xe++] = qt),
          (St = e.id),
          (Et = e.overflow),
          (qt = t)),
        (t = ti(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Zs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ou(e.return, t, n));
  }
  function ni(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = n),
        (u.tailMode = l));
  }
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((ze(e, t, r.children, n), (r = le.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Zs(e, n, t);
          else if (e.tag === 19) Zs(e, n, t);
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
      r &= 1;
    }
    if ((X(le, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && ll(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ni(t, !1, l, n, u));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && ll(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ni(t, !0, n, null, u);
          break;
        case "together":
          ni(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function dl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function _t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (rn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        ((e = e.sibling), (n = n.sibling = Qt(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function pf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Xs(t), _n());
        break;
      case 5:
        fs(t);
        break;
      case 1:
        Oe(t.type) && Yr(t);
        break;
      case 4:
        ju(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (X(el, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (X(le, le.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Gs(e, t, n)
              : (X(le, le.current & 1), (e = _t(e, t, n)), e !== null ? e.sibling : null);
        X(le, le.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Js(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          X(le, le.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Ws(e, t, n));
    }
    return _t(e, t, n);
  }
  var qs, ri, bs, ea;
  ((qs = function (e, t) {
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
    (ri = function () {}),
    (bs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), tn(mt.current));
        var u = null;
        switch (n) {
          case "input":
            ((l = Ol(e, l)), (r = Ol(e, r)), (u = []));
            break;
          case "select":
            ((l = x({}, l, { value: void 0 })), (r = x({}, r, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = jl(e, l)), (r = jl(e, r)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qr);
        }
        Ml(n, r);
        var i;
        n = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var o = l[p];
              for (i in o) o.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (M.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((o = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== o && (s != null || o != null))
          )
            if (p === "style")
              if (o) {
                for (i in o)
                  !o.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in s) s.hasOwnProperty(i) && o[i] !== s[i] && (n || (n = {}), (n[i] = s[i]));
              } else (n || (u || (u = []), u.push(p, n)), (n = s));
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (u = u || []).push(p, s))
                : p === "children"
                  ? (typeof s != "string" && typeof s != "number") || (u = u || []).push(p, "" + s)
                  : p !== "suppressContentEditableWarning" &&
                    p !== "suppressHydrationWarning" &&
                    (M.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && Y("scroll", e), u || o === s || (u = []))
                      : (u = u || []).push(p, s));
        }
        n && (u = u || []).push("style", n);
        var p = u;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (ea = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function mr(e, t) {
    if (!ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null;) (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null;) (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ce(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null;)
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null;)
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function mf(e, t, n) {
    var r = t.pendingProps;
    switch ((_u(t), t.tag)) {
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
        return (Ce(t), null);
      case 1:
        return (Oe(t.type) && Xr(), Ce(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Tn(),
          G(Re),
          G(Ee),
          Uu(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (qr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), lt !== null && (mi(lt), (lt = null)))),
          ri(e, t),
          Ce(t),
          null
        );
      case 5:
        Fu(t);
        var l = tn(ar.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (bs(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Ce(t), null);
          }
          if (((e = tn(mt.current)), qr(t))) {
            ((r = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((r[pt] = t), (r[lr] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (Y("cancel", r), Y("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < tr.length; l++) Y(tr[l], r);
                break;
              case "source":
                Y("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (Y("error", r), Y("load", r));
                break;
              case "details":
                Y("toggle", r);
                break;
              case "input":
                (Ii(r, u), Y("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!u.multiple }), Y("invalid", r));
                break;
              case "textarea":
                (Fi(r, u), Y("invalid", r));
            }
            (Ml(n, u), (l = null));
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 && Wr(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (u.suppressHydrationWarning !== !0 && Wr(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : M.hasOwnProperty(i) && o != null && i === "onScroll" && Y("scroll", r);
              }
            switch (n) {
              case "input":
                (Sr(r), ji(r, u, !0));
                break;
              case "textarea":
                (Sr(r), Ui(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Qr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ai(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = i.createElement(n, { is: r.is }))
                    : ((e = i.createElement(n)),
                      n === "select" &&
                        ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[pt] = t),
              (e[lr] = r),
              qs(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Ul(n, r)), n)) {
                case "dialog":
                  (Y("cancel", e), Y("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Y("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < tr.length; l++) Y(tr[l], e);
                  l = r;
                  break;
                case "source":
                  (Y("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (Y("error", e), Y("load", e), (l = r));
                  break;
                case "details":
                  (Y("toggle", e), (l = r));
                  break;
                case "input":
                  (Ii(e, r), (l = Ol(e, r)), Y("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = x({}, r, { value: void 0 })),
                    Y("invalid", e));
                  break;
                case "textarea":
                  (Fi(e, r), (l = jl(e, r)), Y("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ml(n, l), (o = l));
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? Vi(e, s)
                    : u === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && $i(e, s))
                      : u === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Fn(e, s)
                          : typeof s == "number" && Fn(e, "" + s)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (M.hasOwnProperty(u)
                            ? s != null && u === "onScroll" && Y("scroll", e)
                            : s != null && be(e, u, s, i));
                }
              switch (n) {
                case "input":
                  (Sr(e), ji(e, r, !1));
                  break;
                case "textarea":
                  (Sr(e), Ui(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + H(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? cn(e, !!r.multiple, u, !1)
                      : r.defaultValue != null && cn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Qr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ce(t), null);
      case 6:
        if (e && t.stateNode != null) ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = tn(ar.current)), tn(mt.current), qr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (u = r.nodeValue !== n) && ((e = $e), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Wr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Wr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[pt] = t),
              (t.stateNode = r));
        }
        return (Ce(t), null);
      case 13:
        if (
          (G(le),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ee && Be !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (rs(), _n(), (t.flags |= 98560), (u = !1));
          else if (((u = qr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(m(317));
              u[pt] = t;
            } else (_n(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ce(t), (u = !1));
          } else (lt !== null && (mi(lt), (lt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (le.current & 1) !== 0 ? he === 0 && (he = 3) : yi())),
            t.updateQueue !== null && (t.flags |= 4),
            Ce(t),
            null);
      case 4:
        return (Tn(), ri(e, t), e === null && nr(t.stateNode.containerInfo), Ce(t), null);
      case 10:
        return (Ru(t.type._context), Ce(t), null);
      case 17:
        return (Oe(t.type) && Xr(), Ce(t), null);
      case 19:
        if ((G(le), (u = t.memoizedState), u === null)) return (Ce(t), null);
        if (((r = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) mr(u, !1);
          else {
            if (he !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((i = ll(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      mr(u, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((u = n),
                      (e = r),
                      (u.flags &= 14680066),
                      (i = u.alternate),
                      i === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = i.childLanes),
                          (u.lanes = i.lanes),
                          (u.child = i.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = i.memoizedProps),
                          (u.memoizedState = i.memoizedState),
                          (u.updateQueue = i.updateQueue),
                          (u.type = i.type),
                          (e = i.dependencies),
                          (u.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (X(le, (le.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              ae() > In &&
              ((t.flags |= 128), (r = !0), mr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ll(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                mr(u, !0),
                u.tail === null && u.tailMode === "hidden" && !i.alternate && !ee)
              )
                return (Ce(t), null);
            } else
              2 * ae() - u.renderingStartTime > In &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), mr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = u.last), n !== null ? (n.sibling = i) : (t.child = i), (u.last = i));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = ae()),
            (t.sibling = null),
            (n = le.current),
            X(le, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ce(t), null);
      case 22:
      case 23:
        return (
          vi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Ve & 1073741824) !== 0 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ce(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function hf(e, t) {
    switch ((_u(t), t.tag)) {
      case 1:
        return (
          Oe(t.type) && Xr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Tn(),
          G(Re),
          G(Ee),
          Uu(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Fu(t), null);
      case 13:
        if ((G(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          _n();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (G(le), null);
      case 4:
        return (Tn(), null);
      case 10:
        return (Ru(t.type._context), null);
      case 22:
      case 23:
        return (vi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pl = !1,
    _e = !1,
    vf = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;
  function Rn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          se(e, t, r);
        }
      else n.current = null;
  }
  function li(e, t, n) {
    try {
      n();
    } catch (r) {
      se(e, t, r);
    }
  }
  var ta = !1;
  function yf(e, t) {
    if (((vu = Ir), (e = Io()), su(e))) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, u.nodeType);
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              o = -1,
              s = -1,
              p = 0,
              y = 0,
              g = e,
              h = null;
            t: for (;;) {
              for (
                var S;
                g !== n || (l !== 0 && g.nodeType !== 3) || (o = i + l),
                  g !== u || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                  g.nodeType === 3 && (i += g.nodeValue.length),
                  (S = g.firstChild) !== null;
              )
                ((h = g), (g = S));
              for (;;) {
                if (g === e) break t;
                if (
                  (h === n && ++p === l && (o = i),
                  h === u && ++y === r && (s = i),
                  (S = g.nextSibling) !== null)
                )
                  break;
                ((g = h), (h = g.parentNode));
              }
              g = S;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (yu = { focusedElem: e, selectionRange: n }, Ir = !1, E = t; E !== null;)
      if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (E = e));
      else
        for (; E !== null;) {
          t = E;
          try {
            var C = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (C !== null) {
                    var _ = C.memoizedProps,
                      ce = C.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? _ : ut(t.type, _),
                        ce,
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = t.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = "")
                    : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            se(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (E = e));
            break;
          }
          E = t.return;
        }
    return ((C = ta), (ta = !1), C);
  }
  function hr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          ((l.destroy = void 0), u !== void 0 && li(t, n, u));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ml(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ui(e) {
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
  function na(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), na(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[pt], delete t[lr], delete t[Su], delete t[qc], delete t[bc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ra(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function la(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || ra(e.return)) return null;
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
  function ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Qr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ii(e, t, n), e = e.sibling; e !== null;) (ii(e, t, n), (e = e.sibling));
  }
  function oi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (oi(e, t, n), e = e.sibling; e !== null;) (oi(e, t, n), (e = e.sibling));
  }
  var we = null,
    it = !1;
  function $t(e, t, n) {
    for (n = n.child; n !== null;) (ua(e, t, n), (n = n.sibling));
  }
  function ua(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(zr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        _e || Rn(n, t);
      case 6:
        var r = we,
          l = it;
        ((we = null),
          $t(e, t, n),
          (we = r),
          (it = l),
          we !== null &&
            (it
              ? ((e = we),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : we.removeChild(n.stateNode)));
        break;
      case 18:
        we !== null &&
          (it
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8 ? ku(e.parentNode, n) : e.nodeType === 1 && ku(e, n),
              Xn(e))
            : ku(we, n.stateNode));
        break;
      case 4:
        ((r = we),
          (l = it),
          (we = n.stateNode.containerInfo),
          (it = !0),
          $t(e, t, n),
          (we = r),
          (it = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_e && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            ((u = u.tag),
              i !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && li(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        $t(e, t, n);
        break;
      case 1:
        if (!_e && (Rn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (o) {
            se(n, t, o);
          }
        $t(e, t, n);
        break;
      case 21:
        $t(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((_e = (r = _e) || n.memoizedState !== null), $t(e, t, n), (_e = r))
          : $t(e, t, n);
        break;
      default:
        $t(e, t, n);
    }
  }
  function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new vf()),
        t.forEach(function (r) {
          var l = Nf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var u = e,
            i = t,
            o = i;
          e: for (; o !== null;) {
            switch (o.tag) {
              case 5:
                ((we = o.stateNode), (it = !1));
                break e;
              case 3:
                ((we = o.stateNode.containerInfo), (it = !0));
                break e;
              case 4:
                ((we = o.stateNode.containerInfo), (it = !0));
                break e;
            }
            o = o.return;
          }
          if (we === null) throw Error(m(160));
          (ua(u, i, l), (we = null), (it = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          se(l, t, p);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (oa(t, e), (t = t.sibling));
  }
  function oa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ot(t, e), vt(e), r & 4)) {
          try {
            (hr(3, e, e.return), ml(3, e));
          } catch (_) {
            se(e, e.return, _);
          }
          try {
            hr(5, e, e.return);
          } catch (_) {
            se(e, e.return, _);
          }
        }
        break;
      case 1:
        (ot(t, e), vt(e), r & 512 && n !== null && Rn(n, n.return));
        break;
      case 5:
        if ((ot(t, e), vt(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Fn(l, "");
          } catch (_) {
            se(e, e.return, _);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = n !== null ? n.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === "input" && u.type === "radio" && u.name != null && Di(l, u), Ul(o, i));
              var p = Ul(o, u);
              for (i = 0; i < s.length; i += 2) {
                var y = s[i],
                  g = s[i + 1];
                y === "style"
                  ? Vi(l, g)
                  : y === "dangerouslySetInnerHTML"
                    ? $i(l, g)
                    : y === "children"
                      ? Fn(l, g)
                      : be(l, y, g, p);
              }
              switch (o) {
                case "input":
                  Il(l, u);
                  break;
                case "textarea":
                  Mi(l, u);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var S = u.value;
                  S != null
                    ? cn(l, !!u.multiple, S, !1)
                    : h !== !!u.multiple &&
                      (u.defaultValue != null
                        ? cn(l, !!u.multiple, u.defaultValue, !0)
                        : cn(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[lr] = u;
            } catch (_) {
              se(e, e.return, _);
            }
        }
        break;
      case 6:
        if ((ot(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (_) {
            se(e, e.return, _);
          }
        }
        break;
      case 3:
        if ((ot(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Xn(t.containerInfo);
          } catch (_) {
            se(e, e.return, _);
          }
        break;
      case 4:
        (ot(t, e), vt(e));
        break;
      case 13:
        (ot(t, e),
          vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (ci = ae())),
          r & 4 && ia(e));
        break;
      case 22:
        if (
          ((y = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((_e = (p = _e) || y), ot(t, e), (_e = p)) : ot(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !y && (e.mode & 1) !== 0)
          )
            for (E = e, y = e.child; y !== null;) {
              for (g = E = y; E !== null;) {
                switch (((h = E), (S = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hr(4, h, h.return);
                    break;
                  case 1:
                    Rn(h, h.return);
                    var C = h.stateNode;
                    if (typeof C.componentWillUnmount == "function") {
                      ((r = h), (n = h.return));
                      try {
                        ((t = r),
                          (C.props = t.memoizedProps),
                          (C.state = t.memoizedState),
                          C.componentWillUnmount());
                      } catch (_) {
                        se(r, n, _);
                      }
                    }
                    break;
                  case 5:
                    Rn(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      ca(g);
                      continue;
                    }
                }
                S !== null ? ((S.return = h), (E = S)) : ca(g);
              }
              y = y.sibling;
            }
          e: for (y = null, g = e; ;) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  ((l = g.stateNode),
                    p
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((o = g.stateNode),
                        (s = g.memoizedProps.style),
                        (i = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (o.style.display = Bi("display", i))));
                } catch (_) {
                  se(e, e.return, _);
                }
              }
            } else if (g.tag === 6) {
              if (y === null)
                try {
                  g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                } catch (_) {
                  se(e, e.return, _);
                }
            } else if (
              ((g.tag !== 22 && g.tag !== 23) || g.memoizedState === null || g === e) &&
              g.child !== null
            ) {
              ((g.child.return = g), (g = g.child));
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null;) {
              if (g.return === null || g.return === e) break e;
              (y === g && (y = null), (g = g.return));
            }
            (y === g && (y = null), (g.sibling.return = g.return), (g = g.sibling));
          }
        }
        break;
      case 19:
        (ot(t, e), vt(e), r & 4 && ia(e));
        break;
      case 21:
        break;
      default:
        (ot(t, e), vt(e));
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (ra(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Fn(l, ""), (r.flags &= -33));
            var u = la(e);
            oi(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = la(e);
            ii(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        se(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function gf(e, t, n) {
    ((E = e), sa(e));
  }
  function sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null;) {
      var l = E,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || pl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || _e;
          o = pl;
          var p = _e;
          if (((pl = i), (_e = s) && !p))
            for (E = l; E !== null;)
              ((i = E),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? fa(l)
                  : s !== null
                    ? ((s.return = i), (E = s))
                    : fa(l));
          for (; u !== null;) ((E = u), sa(u), (u = u.sibling));
          ((E = l), (pl = o), (_e = p));
        }
        aa(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = l), (E = u)) : aa(e);
    }
  }
  function aa(e) {
    for (; E !== null;) {
      var t = E;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                _e || ml(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !_e)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = t.updateQueue;
                u !== null && cs(t, u, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  cs(t, i, n);
                }
                break;
              case 5:
                var o = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = o;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && n.focus();
                      break;
                    case "img":
                      s.src && (n.src = s.src);
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
                  var p = t.alternate;
                  if (p !== null) {
                    var y = p.memoizedState;
                    if (y !== null) {
                      var g = y.dehydrated;
                      g !== null && Xn(g);
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
                throw Error(m(163));
            }
          _e || (t.flags & 512 && ui(t));
        } catch (h) {
          se(t, t.return, h);
        }
      }
      if (t === e) {
        E = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (E = n));
        break;
      }
      E = t.return;
    }
  }
  function ca(e) {
    for (; E !== null;) {
      var t = E;
      if (t === e) {
        E = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (E = n));
        break;
      }
      E = t.return;
    }
  }
  function fa(e) {
    for (; E !== null;) {
      var t = E;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ml(4, t);
            } catch (s) {
              se(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                se(t, l, s);
              }
            }
            var u = t.return;
            try {
              ui(t);
            } catch (s) {
              se(t, u, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ui(t);
            } catch (s) {
              se(t, i, s);
            }
        }
      } catch (s) {
        se(t, t.return, s);
      }
      if (t === e) {
        E = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        ((o.return = t.return), (E = o));
        break;
      }
      E = t.return;
    }
  }
  var wf = Math.ceil,
    hl = Se.ReactCurrentDispatcher,
    si = Se.ReactCurrentOwner,
    Ze = Se.ReactCurrentBatchConfig,
    A = 0,
    ye = null,
    pe = null,
    ke = 0,
    Ve = 0,
    On = jt(0),
    he = 0,
    vr = null,
    rn = 0,
    vl = 0,
    ai = 0,
    yr = null,
    De = null,
    ci = 0,
    In = 1 / 0,
    Nt = null,
    yl = !1,
    fi = null,
    Bt = null,
    gl = !1,
    Vt = null,
    wl = 0,
    gr = 0,
    di = null,
    kl = -1,
    Sl = 0;
  function Pe() {
    return (A & 6) !== 0 ? ae() : kl !== -1 ? kl : (kl = ae());
  }
  function Ht(e) {
    return (e.mode & 1) === 0
      ? 1
      : (A & 2) !== 0 && ke !== 0
        ? ke & -ke
        : tf.transition !== null
          ? (Sl === 0 && (Sl = ro()), Sl)
          : ((e = W), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : po(e.type))), e);
  }
  function st(e, t, n, r) {
    if (50 < gr) throw ((gr = 0), (di = null), Error(m(185)));
    (Vn(e, n, r),
      ((A & 2) === 0 || e !== ye) &&
        (e === ye && ((A & 2) === 0 && (vl |= n), he === 4 && Wt(e, ke)),
        je(e, r),
        n === 1 && A === 0 && (t.mode & 1) === 0 && ((In = ae() + 500), Gr && Mt())));
  }
  function je(e, t) {
    var n = e.callbackNode;
    tc(e, t);
    var r = Lr(e, e === ye ? ke : 0);
    if (r === 0) (n !== null && eo(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && eo(n), t === 1))
        (e.tag === 0 ? ef(pa.bind(null, e)) : qo(pa.bind(null, e)),
          Zc(function () {
            (A & 6) === 0 && Mt();
          }),
          (n = null));
      else {
        switch (lo(r)) {
          case 1:
            n = Ql;
            break;
          case 4:
            n = to;
            break;
          case 16:
            n = Nr;
            break;
          case 536870912:
            n = no;
            break;
          default:
            n = Nr;
        }
        n = Sa(n, da.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function da(e, t) {
    if (((kl = -1), (Sl = 0), (A & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Dn() && e.callbackNode !== n) return null;
    var r = Lr(e, e === ye ? ke : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = El(e, r);
    else {
      t = r;
      var l = A;
      A |= 2;
      var u = ha();
      (ye !== e || ke !== t) && ((Nt = null), (In = ae() + 500), un(e, t));
      do
        try {
          Ef();
          break;
        } catch (o) {
          ma(e, o);
        }
      while (!0);
      (Lu(), (hl.current = u), (A = l), pe !== null ? (t = 0) : ((ye = null), (ke = 0), (t = he)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (t = pi(e, l)))), t === 1))
        throw ((n = vr), un(e, 0), Wt(e, r), je(e, ae()), n);
      if (t === 6) Wt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !kf(l) &&
            ((t = El(e, r)),
            t === 2 && ((u = Kl(e)), u !== 0 && ((r = u), (t = pi(e, u)))),
            t === 1))
        )
          throw ((n = vr), un(e, 0), Wt(e, r), je(e, ae()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            on(e, De, Nt);
            break;
          case 3:
            if ((Wt(e, r), (r & 130023424) === r && ((t = ci + 500 - ae()), 10 < t))) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Pe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = wu(on.bind(null, e, De, Nt), t);
              break;
            }
            on(e, De, Nt);
            break;
          case 4:
            if ((Wt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var i = 31 - nt(r);
              ((u = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~u));
            }
            if (
              ((r = l),
              (r = ae() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * wf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = wu(on.bind(null, e, De, Nt), r);
              break;
            }
            on(e, De, Nt);
            break;
          case 5:
            on(e, De, Nt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (je(e, ae()), e.callbackNode === n ? da.bind(null, e) : null);
  }
  function pi(e, t) {
    var n = yr;
    return (
      e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
      (e = El(e, t)),
      e !== 2 && ((t = De), (De = n), t !== null && mi(t)),
      e
    );
  }
  function mi(e) {
    De === null ? (De = e) : De.push.apply(De, e);
  }
  function kf(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!rt(u(), l)) return !1;
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
  function Wt(e, t) {
    for (
      t &= ~ai, t &= ~vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - nt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function pa(e) {
    if ((A & 6) !== 0) throw Error(m(327));
    Dn();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return (je(e, ae()), null);
    var n = El(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Kl(e);
      r !== 0 && ((t = r), (n = pi(e, r)));
    }
    if (n === 1) throw ((n = vr), un(e, 0), Wt(e, t), je(e, ae()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      on(e, De, Nt),
      je(e, ae()),
      null
    );
  }
  function hi(e, t) {
    var n = A;
    A |= 1;
    try {
      return e(t);
    } finally {
      ((A = n), A === 0 && ((In = ae() + 500), Gr && Mt()));
    }
  }
  function ln(e) {
    Vt !== null && Vt.tag === 0 && (A & 6) === 0 && Dn();
    var t = A;
    A |= 1;
    var n = Ze.transition,
      r = W;
    try {
      if (((Ze.transition = null), (W = 1), e)) return e();
    } finally {
      ((W = r), (Ze.transition = n), (A = t), (A & 6) === 0 && Mt());
    }
  }
  function vi() {
    ((Ve = On.current), G(On));
  }
  function un(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Gc(n)), pe !== null))
      for (n = pe.return; n !== null;) {
        var r = n;
        switch ((_u(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Xr());
            break;
          case 3:
            (Tn(), G(Re), G(Ee), Uu());
            break;
          case 5:
            Fu(r);
            break;
          case 4:
            Tn();
            break;
          case 13:
            G(le);
            break;
          case 19:
            G(le);
            break;
          case 10:
            Ru(r.type._context);
            break;
          case 22:
          case 23:
            vi();
        }
        n = n.return;
      }
    if (
      ((ye = e),
      (pe = e = Qt(e.current, null)),
      (ke = Ve = t),
      (he = 0),
      (vr = null),
      (ai = vl = rn = 0),
      (De = yr = null),
      en !== null)
    ) {
      for (t = 0; t < en.length; t++)
        if (((n = en[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            u = n.pending;
          if (u !== null) {
            var i = u.next;
            ((u.next = l), (r.next = i));
          }
          n.pending = r;
        }
      en = null;
    }
    return e;
  }
  function ma(e, t) {
    do {
      var n = pe;
      try {
        if ((Lu(), (ul.current = al), il)) {
          for (var r = ue.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          il = !1;
        }
        if (
          ((nn = 0),
          (ve = me = ue = null),
          (cr = !1),
          (fr = 0),
          (si.current = null),
          n === null || n.return === null)
        ) {
          ((he = 1), (vr = t), (pe = null));
          break;
        }
        e: {
          var u = e,
            i = n.return,
            o = n,
            s = t;
          if (
            ((t = ke),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              y = o,
              g = y.tag;
            if ((y.mode & 1) === 0 && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h
                ? ((y.updateQueue = h.updateQueue),
                  (y.memoizedState = h.memoizedState),
                  (y.lanes = h.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var S = As(i);
            if (S !== null) {
              ((S.flags &= -257), $s(S, i, o, u, t), S.mode & 1 && Us(u, p, t), (t = S), (s = p));
              var C = t.updateQueue;
              if (C === null) {
                var _ = new Set();
                (_.add(s), (t.updateQueue = _));
              } else C.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Us(u, p, t), yi());
                break e;
              }
              s = Error(m(426));
            }
          } else if (ee && o.mode & 1) {
            var ce = As(i);
            if (ce !== null) {
              ((ce.flags & 65536) === 0 && (ce.flags |= 256), $s(ce, i, o, u, t), Pu(Ln(s, o)));
              break e;
            }
          }
          ((u = s = Ln(s, o)),
            he !== 4 && (he = 2),
            yr === null ? (yr = [u]) : yr.push(u),
            (u = i));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var f = Fs(u, s, t);
                as(u, f);
                break e;
              case 1:
                o = s;
                var a = u.type,
                  d = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Bt === null || !Bt.has(d))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var w = Ms(u, o, t);
                  as(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ya(n);
      } catch (z) {
        ((t = z), pe === n && n !== null && (pe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ha() {
    var e = hl.current;
    return ((hl.current = al), e === null ? al : e);
  }
  function yi() {
    ((he === 0 || he === 3 || he === 2) && (he = 4),
      ye === null || ((rn & 268435455) === 0 && (vl & 268435455) === 0) || Wt(ye, ke));
  }
  function El(e, t) {
    var n = A;
    A |= 2;
    var r = ha();
    (ye !== e || ke !== t) && ((Nt = null), un(e, t));
    do
      try {
        Sf();
        break;
      } catch (l) {
        ma(e, l);
      }
    while (!0);
    if ((Lu(), (A = n), (hl.current = r), pe !== null)) throw Error(m(261));
    return ((ye = null), (ke = 0), he);
  }
  function Sf() {
    for (; pe !== null;) va(pe);
  }
  function Ef() {
    for (; pe !== null && !Ka();) va(pe);
  }
  function va(e) {
    var t = ka(e.alternate, e, Ve);
    ((e.memoizedProps = e.pendingProps), t === null ? ya(e) : (pe = t), (si.current = null));
  }
  function ya(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = mf(n, t, Ve)), n !== null)) {
          pe = n;
          return;
        }
      } else {
        if (((n = hf(n, t)), n !== null)) {
          ((n.flags &= 32767), (pe = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((he = 6), (pe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        pe = t;
        return;
      }
      pe = t = e;
    } while (t !== null);
    he === 0 && (he = 5);
  }
  function on(e, t, n) {
    var r = W,
      l = Ze.transition;
    try {
      ((Ze.transition = null), (W = 1), xf(e, t, n, r));
    } finally {
      ((Ze.transition = l), (W = r));
    }
    return null;
  }
  function xf(e, t, n, r) {
    do Dn();
    while (Vt !== null);
    if ((A & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (nc(e, u),
      e === ye && ((pe = ye = null), (ke = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        gl ||
        ((gl = !0),
        Sa(Nr, function () {
          return (Dn(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = Ze.transition), (Ze.transition = null));
      var i = W;
      W = 1;
      var o = A;
      ((A |= 4),
        (si.current = null),
        yf(e, n),
        oa(n, e),
        Vc(yu),
        (Ir = !!vu),
        (yu = vu = null),
        (e.current = n),
        gf(n),
        Xa(),
        (A = o),
        (W = i),
        (Ze.transition = u));
    } else e.current = n;
    if (
      (gl && ((gl = !1), (Vt = e), (wl = l)),
      (u = e.pendingLanes),
      u === 0 && (Bt = null),
      Za(n.stateNode),
      je(e, ae()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (yl) throw ((yl = !1), (e = fi), (fi = null), e);
    return (
      (wl & 1) !== 0 && e.tag !== 0 && Dn(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === di ? gr++ : ((gr = 0), (di = e))) : (gr = 0),
      Mt(),
      null
    );
  }
  function Dn() {
    if (Vt !== null) {
      var e = lo(wl),
        t = Ze.transition,
        n = W;
      try {
        if (((Ze.transition = null), (W = 16 > e ? 16 : e), Vt === null)) var r = !1;
        else {
          if (((e = Vt), (Vt = null), (wl = 0), (A & 6) !== 0)) throw Error(m(331));
          var l = A;
          for (A |= 4, E = e.current; E !== null;) {
            var u = E,
              i = u.child;
            if ((E.flags & 16) !== 0) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (E = p; E !== null;) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) ((g.return = y), (E = g));
                    else
                      for (; E !== null;) {
                        y = E;
                        var h = y.sibling,
                          S = y.return;
                        if ((na(y), y === p)) {
                          E = null;
                          break;
                        }
                        if (h !== null) {
                          ((h.return = S), (E = h));
                          break;
                        }
                        E = S;
                      }
                  }
                }
                var C = u.alternate;
                if (C !== null) {
                  var _ = C.child;
                  if (_ !== null) {
                    C.child = null;
                    do {
                      var ce = _.sibling;
                      ((_.sibling = null), (_ = ce));
                    } while (_ !== null);
                  }
                }
                E = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = u), (E = i));
            else
              e: for (; E !== null;) {
                if (((u = E), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(9, u, u.return);
                  }
                var f = u.sibling;
                if (f !== null) {
                  ((f.return = u.return), (E = f));
                  break e;
                }
                E = u.return;
              }
          }
          var a = e.current;
          for (E = a; E !== null;) {
            i = E;
            var d = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = i), (E = d));
            else
              e: for (i = a; E !== null;) {
                if (((o = E), (o.flags & 2048) !== 0))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ml(9, o);
                    }
                  } catch (z) {
                    se(o, o.return, z);
                  }
                if (o === i) {
                  E = null;
                  break e;
                }
                var w = o.sibling;
                if (w !== null) {
                  ((w.return = o.return), (E = w));
                  break e;
                }
                E = o.return;
              }
          }
          if (((A = l), Mt(), dt && typeof dt.onPostCommitFiberRoot == "function"))
            try {
              dt.onPostCommitFiberRoot(zr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((W = n), (Ze.transition = t));
      }
    }
    return !1;
  }
  function ga(e, t, n) {
    ((t = Ln(n, t)),
      (t = Fs(e, t, 1)),
      (e = At(e, t, 1)),
      (t = Pe()),
      e !== null && (Vn(e, 1, t), je(e, t)));
  }
  function se(e, t, n) {
    if (e.tag === 3) ga(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          ga(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" && (Bt === null || !Bt.has(r)))
          ) {
            ((e = Ln(n, e)),
              (e = Ms(t, e, 1)),
              (t = At(t, e, 1)),
              (e = Pe()),
              t !== null && (Vn(t, 1, e), je(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Cf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Pe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ye === e &&
        (ke & n) === n &&
        (he === 4 || (he === 3 && (ke & 130023424) === ke && 500 > ae() - ci)
          ? un(e, 0)
          : (ai |= n)),
      je(e, t));
  }
  function wa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Tr), (Tr <<= 1), (Tr & 130023424) === 0 && (Tr = 4194304)));
    var n = Pe();
    ((e = xt(e, t)), e !== null && (Vn(e, t, n), je(e, n)));
  }
  function _f(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), wa(e, n));
  }
  function Nf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    (r !== null && r.delete(t), wa(e, n));
  }
  var ka;
  ka = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Re.current) Ie = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Ie = !1), pf(e, t, n));
        Ie = (e.flags & 131072) !== 0;
      }
    else ((Ie = !1), ee && (t.flags & 1048576) !== 0 && bo(t, Jr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (dl(e, t), (e = t.pendingProps));
        var l = En(t, Ee.current);
        (Pn(t, n), (l = Bu(null, t, r, e, l, n)));
        var u = Vu();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Oe(r) ? ((u = !0), Yr(t)) : (u = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Du(t),
              (l.updater = cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Yu(t, r, e, n),
              (t = qu(null, t, r, !0, u, n)))
            : ((t.tag = 0), ee && u && Cu(t), ze(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (dl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Pf(r)),
            (e = ut(r, e)),
            l)
          ) {
            case 0:
              t = Ju(null, t, r, e, n);
              break e;
            case 1:
              t = Ks(null, t, r, e, n);
              break e;
            case 11:
              t = Bs(null, t, r, e, n);
              break e;
            case 14:
              t = Vs(null, t, r, ut(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          Ju(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          Ks(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Xs(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            ss(e, t),
            rl(t, r, null, n));
          var i = t.memoizedState;
          if (((r = i.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              ((l = Ln(Error(m(423)), t)), (t = Ys(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Ln(Error(m(424)), t)), (t = Ys(e, t, r, n, l)));
              break e;
            } else
              for (
                Be = Dt(t.stateNode.containerInfo.firstChild),
                  $e = t,
                  ee = !0,
                  lt = null,
                  n = is(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((_n(), r === l)) {
              t = _t(e, t, n);
              break e;
            }
            ze(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          fs(t),
          e === null && zu(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          gu(r, l) ? (i = null) : u !== null && gu(r, u) && (t.flags |= 32),
          Qs(e, t),
          ze(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && zu(t), null);
      case 13:
        return Gs(e, t, n);
      case 4:
        return (
          ju(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Nn(t, null, r, n)) : ze(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          Bs(e, t, r, l, n)
        );
      case 7:
        return (ze(e, t, t.pendingProps, n), t.child);
      case 8:
        return (ze(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (ze(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (i = l.value),
            X(el, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (rt(u.value, i)) {
              if (u.children === l.children && !Re.current) {
                t = _t(e, t, n);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null;) {
                var o = u.dependencies;
                if (o !== null) {
                  i = u.child;
                  for (var s = o.firstContext; s !== null;) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        ((s = Ct(-1, n & -n)), (s.tag = 2));
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var y = p.pending;
                          (y === null ? (s.next = s) : ((s.next = y.next), (y.next = s)),
                            (p.pending = s));
                        }
                      }
                      ((u.lanes |= n),
                        (s = u.alternate),
                        s !== null && (s.lanes |= n),
                        Ou(u.return, n, t),
                        (o.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10) i = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((i = u.return), i === null)) throw Error(m(341));
                  ((i.lanes |= n),
                    (o = i.alternate),
                    o !== null && (o.lanes |= n),
                    Ou(i, n, t),
                    (i = u.sibling));
                } else i = u.child;
                if (i !== null) i.return = u;
                else
                  for (i = u; i !== null;) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((u = i.sibling), u !== null)) {
                      ((u.return = i.return), (i = u));
                      break;
                    }
                    i = i.return;
                  }
                u = i;
              }
          (ze(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Pn(t, n),
          (l = Ye(l)),
          (r = r(l)),
          (t.flags |= 1),
          ze(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = ut(r, t.pendingProps)), (l = ut(r.type, l)), Vs(e, t, r, l, n));
      case 15:
        return Hs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          dl(e, t),
          (t.tag = 1),
          Oe(r) ? ((e = !0), Yr(t)) : (e = !1),
          Pn(t, n),
          Ds(t, r, l),
          Yu(t, r, l, n),
          qu(null, t, r, !0, e, n)
        );
      case 19:
        return Js(e, t, n);
      case 22:
        return Ws(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function Sa(e, t) {
    return bi(e, t);
  }
  function zf(e, t, n, r) {
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
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Je(e, t, n, r) {
    return new zf(e, t, n, r);
  }
  function gi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Pf(e) {
    if (typeof e == "function") return gi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ct)) return 11;
      if (e === ft) return 14;
    }
    return 2;
  }
  function Qt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Je(e.tag, t, e.key, e.mode)),
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
  function xl(e, t, n, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == "function")) gi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Te:
          return sn(n.children, l, u, t);
        case Qe:
          ((i = 8), (l |= 8));
          break;
        case zt:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = zt), (e.lanes = u), e);
        case Me:
          return ((e = Je(13, n, t, l)), (e.elementType = Me), (e.lanes = u), e);
        case tt:
          return ((e = Je(19, n, t, l)), (e.elementType = tt), (e.lanes = u), e);
        case oe:
          return Cl(n, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gt:
                i = 10;
                break e;
              case Yt:
                i = 9;
                break e;
              case ct:
                i = 11;
                break e;
              case ft:
                i = 14;
                break e;
              case Le:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return ((t = Je(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = u), t);
  }
  function sn(e, t, n, r) {
    return ((e = Je(7, e, r, t)), (e.lanes = n), e);
  }
  function Cl(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = oe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function wi(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function ki(e, t, n) {
    return (
      (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Tf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Xl(0)),
      (this.expirationTimes = Xl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Xl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Si(e, t, n, r, l, u, i, o, s) {
    return (
      (e = new Tf(e, t, n, o, s)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = Je(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Du(u),
      e
    );
  }
  function Lf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ne,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Ea(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Gt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Oe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Oe(n)) return Zo(e, n, t);
    }
    return t;
  }
  function xa(e, t, n, r, l, u, i, o, s) {
    return (
      (e = Si(n, r, !0, e, l, u, i, o, s)),
      (e.context = Ea(null)),
      (n = e.current),
      (r = Pe()),
      (l = Ht(n)),
      (u = Ct(r, l)),
      (u.callback = t ?? null),
      At(n, u, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      je(e, r),
      e
    );
  }
  function _l(e, t, n, r) {
    var l = t.current,
      u = Pe(),
      i = Ht(l);
    return (
      (n = Ea(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(u, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, i)),
      e !== null && (st(e, l, i, u), nl(e, l, i)),
      i
    );
  }
  function Nl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ca(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ei(e, t) {
    (Ca(e, t), (e = e.alternate) && Ca(e, t));
  }
  function Rf() {
    return null;
  }
  var _a =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function xi(e) {
    this._internalRoot = e;
  }
  ((zl.prototype.render = xi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      _l(e, t, null, null);
    }),
    (zl.prototype.unmount = xi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (ln(function () {
            _l(null, e, null, null);
          }),
            (t[wt] = null));
        }
      }));
  function zl(e) {
    this._internalRoot = e;
  }
  zl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = oo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
      (Rt.splice(n, 0, e), n === 0 && co(e));
    }
  };
  function Ci(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Pl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Na() {}
  function Of(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = Nl(i);
          u.call(p);
        };
      }
      var i = xa(t, r, e, 0, null, !1, !1, "", Na);
      return (
        (e._reactRootContainer = i),
        (e[wt] = i.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        ln(),
        i
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var p = Nl(s);
        o.call(p);
      };
    }
    var s = Si(e, 0, !1, null, null, !1, !1, "", Na);
    return (
      (e._reactRootContainer = s),
      (e[wt] = s.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      ln(function () {
        _l(t, s, n, r);
      }),
      s
    );
  }
  function Tl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = Nl(i);
          o.call(s);
        };
      }
      _l(t, i, e, l);
    } else i = Of(n, t, e, l, r);
    return Nl(i);
  }
  ((uo = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 && (Yl(t, n | 1), je(t, ae()), (A & 6) === 0 && ((In = ae() + 500), Mt()));
        }
        break;
      case 13:
        (ln(function () {
          var r = xt(e, 1);
          if (r !== null) {
            var l = Pe();
            st(r, e, 1, l);
          }
        }),
          Ei(e, 1));
    }
  }),
    (Gl = function (e) {
      if (e.tag === 13) {
        var t = xt(e, 134217728);
        if (t !== null) {
          var n = Pe();
          st(t, e, 134217728, n);
        }
        Ei(e, 134217728);
      }
    }),
    (io = function (e) {
      if (e.tag === 13) {
        var t = Ht(e),
          n = xt(e, t);
        if (n !== null) {
          var r = Pe();
          st(n, e, t, r);
        }
        Ei(e, t);
      }
    }),
    (oo = function () {
      return W;
    }),
    (so = function (e, t) {
      var n = W;
      try {
        return ((W = e), t());
      } finally {
        W = n;
      }
    }),
    (Bl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Il(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Kr(r);
                if (!l) throw Error(m(90));
                (Oi(r), Il(r, l));
              }
            }
          }
          break;
        case "textarea":
          Mi(e, n);
          break;
        case "select":
          ((t = n.value), t != null && cn(e, !!n.multiple, t, !1));
      }
    }),
    (Ki = hi),
    (Xi = ln));
  var If = { usingClientEntryPoint: !1, Events: [ur, kn, Kr, Wi, Qi, hi] },
    wr = {
      findFiberByHostInstance: Zt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Df = {
      bundleType: wr.bundleType,
      version: wr.version,
      rendererPackageName: wr.rendererPackageName,
      rendererConfig: wr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Ji(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: wr.findFiberByHostInstance || Rf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ll.isDisabled && Ll.supportsFiber)
      try {
        ((zr = Ll.inject(Df)), (dt = Ll));
      } catch {}
  }
  return (
    (Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If),
    (Fe.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ci(t)) throw Error(m(200));
      return Lf(e, t, null, n);
    }),
    (Fe.createRoot = function (e, t) {
      if (!Ci(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = _a;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Si(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        new xi(t)
      );
    }),
    (Fe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = Ji(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Fe.flushSync = function (e) {
      return ln(e);
    }),
    (Fe.hydrate = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return Tl(null, e, t, !0, n);
    }),
    (Fe.hydrateRoot = function (e, t, n) {
      if (!Ci(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        i = _a;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = xa(t, null, e, 1, n ?? null, l, !1, u, i)),
        (e[wt] = t.current),
        nr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new zl(t);
    }),
    (Fe.render = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return Tl(null, e, t, !1, n);
    }),
    (Fe.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (ln(function () {
            Tl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Fe.unstable_batchedUpdates = hi),
    (Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Pl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Tl(e, t, n, !1, r);
    }),
    (Fe.version = "18.3.1-next-f1338f8080-20240426"),
    Fe
  );
}
var Da;
function Vf() {
  if (Da) return zi.exports;
  Da = 1;
  function N() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N);
      } catch (P) {
        console.error(P);
      }
  }
  return (N(), (zi.exports = Bf()), zi.exports);
}
var ja;
function Hf() {
  if (ja) return Rl;
  ja = 1;
  var N = Vf();
  return ((Rl.createRoot = N.createRoot), (Rl.hydrateRoot = N.hydrateRoot), Rl);
}
var Wf = Hf();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qf = (N) => N.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ma = (...N) =>
    N.filter((P, m, te) => !!P && P.trim() !== "" && te.indexOf(P) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Kf = {
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
 */ const Xf = qe.forwardRef(
  (
    {
      color: N = "currentColor",
      size: P = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: te,
      className: M = "",
      children: U,
      iconNode: ne,
      ...ie
    },
    I,
  ) =>
    qe.createElement(
      "svg",
      {
        ref: I,
        ...Kf,
        width: P,
        height: P,
        stroke: N,
        strokeWidth: te ? (Number(m) * 24) / Number(P) : m,
        className: Ma("lucide", M),
        ...ie,
      },
      [...ne.map(([Z, de]) => qe.createElement(Z, de)), ...(Array.isArray(U) ? U : [U])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ua = (N, P) => {
  const m = qe.forwardRef(({ className: te, ...M }, U) =>
    qe.createElement(Xf, { ref: U, iconNode: P, className: Ma(`lucide-${Qf(N)}`, te), ...M }),
  );
  return ((m.displayName = `${N}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = Ua("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fa = Ua("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ]),
  Li = [
    {
      src: "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png",
      bg: "#F4845F",
      panel: "#F79B7F",
    },
    {
      src: "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png",
      bg: "#6BBF7A",
      panel: "#85CC92",
    },
    {
      src: "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png",
      bg: "#E882B4",
      panel: "#ED9DC4",
    },
    {
      src: "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png",
      bg: "#6EB5FF",
      panel: "#8DC4FF",
    },
  ],
  Xt = 650,
  an = "cubic-bezier(0.4, 0, 0.2, 1)",
  Gf = `transform ${Xt}ms ${an}, filter ${Xt}ms ${an}, opacity ${Xt}ms ${an}, left ${Xt}ms ${an}, height ${Xt}ms ${an}, bottom ${Xt}ms ${an}`;
function Zf(N, P) {
  return N === P ? "center" : N === (P + 3) % 4 ? "left" : N === (P + 1) % 4 ? "right" : "back";
}
function Jf(N, P) {
  const m = {
    position: "absolute",
    aspectRatio: "0.6 / 1",
    transform: "translateX(-50%)",
    transition: Gf,
    willChange: "transform, filter, opacity",
  };
  switch (N) {
    case "center":
      return {
        ...m,
        transform: `translateX(-50%) scale(${P ? 1.25 : 1.68})`,
        filter: "none",
        opacity: 1,
        zIndex: 20,
        left: "50%",
        height: P ? "60%" : "92%",
        bottom: P ? "22%" : 0,
      };
    case "left":
      return {
        ...m,
        transform: "translateX(-50%) scale(1)",
        filter: "blur(2px)",
        opacity: 0.85,
        zIndex: 10,
        left: P ? "20%" : "30%",
        height: P ? "16%" : "28%",
        bottom: P ? "32%" : "12%",
      };
    case "right":
      return {
        ...m,
        transform: "translateX(-50%) scale(1)",
        filter: "blur(2px)",
        opacity: 0.85,
        zIndex: 10,
        left: P ? "80%" : "70%",
        height: P ? "16%" : "28%",
        bottom: P ? "32%" : "12%",
      };
    case "back":
      return {
        ...m,
        transform: "translateX(-50%) scale(1)",
        filter: "blur(4px)",
        opacity: 1,
        zIndex: 5,
        left: "50%",
        height: P ? "13%" : "22%",
        bottom: P ? "32%" : "12%",
      };
  }
}
const qf = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`;
function bf() {
  const [N, P] = qe.useState(0),
    [m, te] = qe.useState(!1),
    [M, U] = qe.useState(typeof window < "u" ? window.innerWidth < 640 : !1);
  (qe.useEffect(() => {
    Li.forEach((I) => {
      const Z = new Image();
      Z.src = I.src;
    });
  }, []),
    qe.useEffect(() => {
      const I = () => U(window.innerWidth < 640);
      return (
        I(),
        window.addEventListener("resize", I),
        () => window.removeEventListener("resize", I)
      );
    }, []));
  const ne = qe.useCallback(
      (I) => {
        m ||
          (te(!0),
          P((Z) => (I === "next" ? (Z + 1) % 4 : (Z + 3) % 4)),
          window.setTimeout(() => te(!1), Xt));
      },
      [m],
    ),
    ie = Li[N];
  return fe.jsx("div", {
    className: "relative w-full overflow-hidden",
    style: {
      backgroundColor: ie.bg,
      fontFamily: "'Inter', sans-serif",
      transition: `background-color ${Xt}ms ${an}`,
    },
    children: fe.jsxs("div", {
      className: "relative w-full overflow-hidden",
      style: { height: "100vh" },
      children: [
        fe.jsx("div", {
          className: "pointer-events-none absolute inset-0",
          style: {
            zIndex: 50,
            opacity: 0.4,
            backgroundImage: qf,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          },
          "aria-hidden": !0,
        }),
        fe.jsx("div", {
          className:
            "pointer-events-none absolute inset-x-0 flex select-none items-center justify-center",
          style: { top: "18%", zIndex: 2 },
          children: fe.jsx("span", {
            className: "whitespace-nowrap uppercase text-white",
            style: {
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(90px, 28vw, 380px)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            },
            children: "3D SHAPE",
          }),
        }),
        fe.jsx("div", {
          className:
            "absolute left-4 top-6 z-[60] text-xs font-semibold uppercase text-white sm:left-8",
          style: { opacity: 0.9, letterSpacing: "0.18em" },
          children: "TOONHUB",
        }),
        fe.jsx("div", {
          className: "absolute inset-0",
          style: { zIndex: 3 },
          children: Li.map((I, Z) => {
            const de = Zf(Z, N);
            return fe.jsx(
              "div",
              {
                style: Jf(de, M),
                children: fe.jsx("img", {
                  src: I.src,
                  alt: "",
                  draggable: !1,
                  className: "h-full w-full",
                  style: { objectFit: "contain", objectPosition: "bottom center" },
                }),
              },
              I.src,
            );
          }),
        }),
        fe.jsxs("div", {
          className: "absolute bottom-6 left-4 z-[60] sm:bottom-20 sm:left-24",
          style: { maxWidth: 320 },
          children: [
            fe.jsx("p", {
              className:
                "mb-2 text-base font-bold uppercase tracking-widest text-white sm:mb-3 sm:text-[22px]",
              style: { opacity: 0.95, letterSpacing: "0.02em" },
              children: "TOONHUB FIGURINES",
            }),
            fe.jsx("p", {
              className: "mb-4 hidden text-xs text-white sm:mb-5 sm:block sm:text-sm",
              style: { opacity: 0.85, lineHeight: 1.6 },
              children:
                "The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.",
            }),
            fe.jsxs("div", {
              className: "flex gap-3",
              children: [
                fe.jsx("button", {
                  type: "button",
                  "aria-label": "Previous figurine",
                  onClick: () => ne("prev"),
                  className:
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white transition-[transform,background-color] duration-150 hover:scale-[1.08] hover:bg-white/10 sm:h-16 sm:w-16",
                  children: fe.jsx(Yf, { size: 26, strokeWidth: 2.25 }),
                }),
                fe.jsx("button", {
                  type: "button",
                  "aria-label": "Next figurine",
                  onClick: () => ne("next"),
                  className:
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white transition-[transform,background-color] duration-150 hover:scale-[1.08] hover:bg-white/10 sm:h-16 sm:w-16",
                  children: fe.jsx(Fa, { size: 26, strokeWidth: 2.25 }),
                }),
              ],
            }),
          ],
        }),
        fe.jsxs("a", {
          href: "#discover",
          className:
            "absolute bottom-6 right-4 z-[60] flex items-center gap-2 uppercase text-white transition-opacity duration-200 hover:opacity-100 sm:bottom-20 sm:right-10",
          style: {
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(20px, 4vw, 56px)",
            fontWeight: 400,
            opacity: 0.95,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            textDecoration: "none",
          },
          children: [
            "DISCOVER IT",
            fe.jsx(Fa, { className: "h-5 w-5 sm:h-8 sm:w-8", strokeWidth: 2.25 }),
          ],
        }),
      ],
    }),
  });
}
Wf.createRoot(document.getElementById("root")).render(
  fe.jsx(qe.StrictMode, { children: fe.jsx(bf, {}) }),
);
