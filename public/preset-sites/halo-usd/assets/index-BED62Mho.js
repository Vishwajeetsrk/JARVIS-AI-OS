(function () {
  const N = document.createElement("link").relList;
  if (N && N.supports && N.supports("modulepreload")) return;
  for (const F of document.querySelectorAll('link[rel="modulepreload"]')) A(F);
  new MutationObserver((F) => {
    for (const U of F)
      if (U.type === "childList")
        for (const ne of U.addedNodes) ne.tagName === "LINK" && ne.rel === "modulepreload" && A(ne);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(F) {
    const U = {};
    return (
      F.integrity && (U.integrity = F.integrity),
      F.referrerPolicy && (U.referrerPolicy = F.referrerPolicy),
      F.crossOrigin === "use-credentials"
        ? (U.credentials = "include")
        : F.crossOrigin === "anonymous"
          ? (U.credentials = "omit")
          : (U.credentials = "same-origin"),
      U
    );
  }
  function A(F) {
    if (F.ep) return;
    F.ep = !0;
    const U = m(F);
    fetch(F.href, U);
  }
})();
var jo = { exports: {} },
  wr = {},
  Po = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Gf() {
  if (za) return I;
  za = 1;
  var g = Symbol.for("react.element"),
    N = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    A = Symbol.for("react.strict_mode"),
    F = Symbol.for("react.profiler"),
    U = Symbol.for("react.provider"),
    ne = Symbol.for("react.context"),
    ce = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    ye = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    re = Symbol.iterator;
  function q(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (re && c[re]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var Ve = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    $e = Object.assign,
    b = {};
  function Y(c, y, O) {
    ((this.props = c), (this.context = y), (this.refs = b), (this.updater = O || Ve));
  }
  ((Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (c, y) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, y, "setState");
    }),
    (Y.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function gt() {}
  gt.prototype = Y.prototype;
  function at(c, y, O) {
    ((this.props = c), (this.context = y), (this.refs = b), (this.updater = O || Ve));
  }
  var be = (at.prototype = new gt());
  ((be.constructor = at), $e(be, Y.prototype), (be.isPureReactComponent = !0));
  var Se = Array.isArray,
    et = Object.prototype.hasOwnProperty,
    Ce = { current: null },
    ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, y, O) {
    var M,
      W = {},
      B = null,
      G = null;
    if (y != null)
      for (M in (y.ref !== void 0 && (G = y.ref), y.key !== void 0 && (B = "" + y.key), y))
        et.call(y, M) && !ze.hasOwnProperty(M) && (W[M] = y[M]);
    var Q = arguments.length - 2;
    if (Q === 1) W.children = O;
    else if (1 < Q) {
      for (var ee = Array(Q), Ue = 0; Ue < Q; Ue++) ee[Ue] = arguments[Ue + 2];
      W.children = ee;
    }
    if (c && c.defaultProps) for (M in ((Q = c.defaultProps), Q)) W[M] === void 0 && (W[M] = Q[M]);
    return { $$typeof: g, type: c, key: B, ref: G, props: W, _owner: Ce.current };
  }
  function jt(c, y) {
    return { $$typeof: g, type: c.type, key: y, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function yt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === g;
  }
  function Yt(c) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (O) {
        return y[O];
      })
    );
  }
  var ct = /\/+/g;
  function Me(c, y) {
    return typeof c == "object" && c !== null && c.key != null ? Yt("" + c.key) : y.toString(36);
  }
  function tt(c, y, O, M, W) {
    var B = typeof c;
    (B === "undefined" || B === "boolean") && (c = null);
    var G = !1;
    if (c === null) G = !0;
    else
      switch (B) {
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case g:
            case N:
              G = !0;
          }
      }
    if (G)
      return (
        (G = c),
        (W = W(G)),
        (c = M === "" ? "." + Me(G, 0) : M),
        Se(W)
          ? ((O = ""),
            c != null && (O = c.replace(ct, "$&/") + "/"),
            tt(W, y, O, "", function (Ue) {
              return Ue;
            }))
          : W != null &&
            (yt(W) &&
              (W = jt(
                W,
                O +
                  (!W.key || (G && G.key === W.key) ? "" : ("" + W.key).replace(ct, "$&/") + "/") +
                  c,
              )),
            y.push(W)),
        1
      );
    if (((G = 0), (M = M === "" ? "." : M + ":"), Se(c)))
      for (var Q = 0; Q < c.length; Q++) {
        B = c[Q];
        var ee = M + Me(B, Q);
        G += tt(B, y, O, ee, W);
      }
    else if (((ee = q(c)), typeof ee == "function"))
      for (c = ee.call(c), Q = 0; !(B = c.next()).done;)
        ((B = B.value), (ee = M + Me(B, Q++)), (G += tt(B, y, O, ee, W)));
    else if (B === "object")
      throw (
        (y = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return G;
  }
  function ft(c, y, O) {
    if (c == null) return c;
    var M = [],
      W = 0;
    return (
      tt(c, M, "", "", function (B) {
        return y.call(O, B, W++);
      }),
      M
    );
  }
  function Le(c) {
    if (c._status === -1) {
      var y = c._result;
      ((y = y()),
        y.then(
          function (O) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = O));
          },
          function (O) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = O));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = y)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var oe = { current: null },
    k = { transition: null },
    R = { ReactCurrentDispatcher: oe, ReactCurrentBatchConfig: k, ReactCurrentOwner: Ce };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (I.Children = {
      map: ft,
      forEach: function (c, y, O) {
        ft(
          c,
          function () {
            y.apply(this, arguments);
          },
          O,
        );
      },
      count: function (c) {
        var y = 0;
        return (
          ft(c, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (c) {
        return (
          ft(c, function (y) {
            return y;
          }) || []
        );
      },
      only: function (c) {
        if (!yt(c))
          throw Error("React.Children.only expected to receive a single React element child.");
        return c;
      },
    }),
    (I.Component = Y),
    (I.Fragment = m),
    (I.Profiler = F),
    (I.PureComponent = at),
    (I.StrictMode = A),
    (I.Suspense = $),
    (I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
    (I.act = C),
    (I.cloneElement = function (c, y, O) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var M = $e({}, c.props),
        W = c.key,
        B = c.ref,
        G = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((B = y.ref), (G = Ce.current)),
          y.key !== void 0 && (W = "" + y.key),
          c.type && c.type.defaultProps)
        )
          var Q = c.type.defaultProps;
        for (ee in y)
          et.call(y, ee) &&
            !ze.hasOwnProperty(ee) &&
            (M[ee] = y[ee] === void 0 && Q !== void 0 ? Q[ee] : y[ee]);
      }
      var ee = arguments.length - 2;
      if (ee === 1) M.children = O;
      else if (1 < ee) {
        Q = Array(ee);
        for (var Ue = 0; Ue < ee; Ue++) Q[Ue] = arguments[Ue + 2];
        M.children = Q;
      }
      return { $$typeof: g, type: c.type, key: W, ref: B, props: M, _owner: G };
    }),
    (I.createContext = function (c) {
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
    (I.createElement = Qe),
    (I.createFactory = function (c) {
      var y = Qe.bind(null, c);
      return ((y.type = c), y);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (c) {
      return { $$typeof: ce, render: c };
    }),
    (I.isValidElement = yt),
    (I.lazy = function (c) {
      return { $$typeof: me, _payload: { _status: -1, _result: c }, _init: Le };
    }),
    (I.memo = function (c, y) {
      return { $$typeof: ye, type: c, compare: y === void 0 ? null : y };
    }),
    (I.startTransition = function (c) {
      var y = k.transition;
      k.transition = {};
      try {
        c();
      } finally {
        k.transition = y;
      }
    }),
    (I.unstable_act = C),
    (I.useCallback = function (c, y) {
      return oe.current.useCallback(c, y);
    }),
    (I.useContext = function (c) {
      return oe.current.useContext(c);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (c) {
      return oe.current.useDeferredValue(c);
    }),
    (I.useEffect = function (c, y) {
      return oe.current.useEffect(c, y);
    }),
    (I.useId = function () {
      return oe.current.useId();
    }),
    (I.useImperativeHandle = function (c, y, O) {
      return oe.current.useImperativeHandle(c, y, O);
    }),
    (I.useInsertionEffect = function (c, y) {
      return oe.current.useInsertionEffect(c, y);
    }),
    (I.useLayoutEffect = function (c, y) {
      return oe.current.useLayoutEffect(c, y);
    }),
    (I.useMemo = function (c, y) {
      return oe.current.useMemo(c, y);
    }),
    (I.useReducer = function (c, y, O) {
      return oe.current.useReducer(c, y, O);
    }),
    (I.useRef = function (c) {
      return oe.current.useRef(c);
    }),
    (I.useState = function (c) {
      return oe.current.useState(c);
    }),
    (I.useSyncExternalStore = function (c, y, O) {
      return oe.current.useSyncExternalStore(c, y, O);
    }),
    (I.useTransition = function () {
      return oe.current.useTransition();
    }),
    (I.version = "18.3.1"),
    I
  );
}
var La;
function Fo() {
  return (La || ((La = 1), (Po.exports = Gf())), Po.exports);
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
function Xf() {
  if (Ta) return wr;
  Ta = 1;
  var g = Fo(),
    N = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    A = Object.prototype.hasOwnProperty,
    F = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(ce, $, ye) {
    var me,
      re = {},
      q = null,
      Ve = null;
    (ye !== void 0 && (q = "" + ye),
      $.key !== void 0 && (q = "" + $.key),
      $.ref !== void 0 && (Ve = $.ref));
    for (me in $) A.call($, me) && !U.hasOwnProperty(me) && (re[me] = $[me]);
    if (ce && ce.defaultProps)
      for (me in (($ = ce.defaultProps), $)) re[me] === void 0 && (re[me] = $[me]);
    return { $$typeof: N, type: ce, key: q, ref: Ve, props: re, _owner: F.current };
  }
  return ((wr.Fragment = m), (wr.jsx = ne), (wr.jsxs = ne), wr);
}
var Fa;
function Zf() {
  return (Fa || ((Fa = 1), (jo.exports = Xf())), jo.exports);
}
var p = Zf(),
  qe = Fo(),
  Tl = {},
  zo = { exports: {} },
  Ie = {},
  Lo = { exports: {} },
  To = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra;
function Jf() {
  return (
    Ra ||
      ((Ra = 1),
      (function (g) {
        function N(k, R) {
          var C = k.length;
          k.push(R);
          e: for (; 0 < C;) {
            var c = (C - 1) >>> 1,
              y = k[c];
            if (0 < F(y, R)) ((k[c] = R), (k[C] = y), (C = c));
            else break e;
          }
        }
        function m(k) {
          return k.length === 0 ? null : k[0];
        }
        function A(k) {
          if (k.length === 0) return null;
          var R = k[0],
            C = k.pop();
          if (C !== R) {
            k[0] = C;
            e: for (var c = 0, y = k.length, O = y >>> 1; c < O;) {
              var M = 2 * (c + 1) - 1,
                W = k[M],
                B = M + 1,
                G = k[B];
              if (0 > F(W, C))
                B < y && 0 > F(G, W)
                  ? ((k[c] = G), (k[B] = C), (c = B))
                  : ((k[c] = W), (k[M] = C), (c = M));
              else if (B < y && 0 > F(G, C)) ((k[c] = G), (k[B] = C), (c = B));
              else break e;
            }
          }
          return R;
        }
        function F(k, R) {
          var C = k.sortIndex - R.sortIndex;
          return C !== 0 ? C : k.id - R.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var U = performance;
          g.unstable_now = function () {
            return U.now();
          };
        } else {
          var ne = Date,
            ce = ne.now();
          g.unstable_now = function () {
            return ne.now() - ce;
          };
        }
        var $ = [],
          ye = [],
          me = 1,
          re = null,
          q = 3,
          Ve = !1,
          $e = !1,
          b = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          gt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function be(k) {
          for (var R = m(ye); R !== null;) {
            if (R.callback === null) A(ye);
            else if (R.startTime <= k) (A(ye), (R.sortIndex = R.expirationTime), N($, R));
            else break;
            R = m(ye);
          }
        }
        function Se(k) {
          if (((b = !1), be(k), !$e))
            if (m($) !== null) (($e = !0), Le(et));
            else {
              var R = m(ye);
              R !== null && oe(Se, R.startTime - k);
            }
        }
        function et(k, R) {
          (($e = !1), b && ((b = !1), gt(Qe), (Qe = -1)), (Ve = !0));
          var C = q;
          try {
            for (be(R), re = m($); re !== null && (!(re.expirationTime > R) || (k && !Yt()));) {
              var c = re.callback;
              if (typeof c == "function") {
                ((re.callback = null), (q = re.priorityLevel));
                var y = c(re.expirationTime <= R);
                ((R = g.unstable_now()),
                  typeof y == "function" ? (re.callback = y) : re === m($) && A($),
                  be(R));
              } else A($);
              re = m($);
            }
            if (re !== null) var O = !0;
            else {
              var M = m(ye);
              (M !== null && oe(Se, M.startTime - R), (O = !1));
            }
            return O;
          } finally {
            ((re = null), (q = C), (Ve = !1));
          }
        }
        var Ce = !1,
          ze = null,
          Qe = -1,
          jt = 5,
          yt = -1;
        function Yt() {
          return !(g.unstable_now() - yt < jt);
        }
        function ct() {
          if (ze !== null) {
            var k = g.unstable_now();
            yt = k;
            var R = !0;
            try {
              R = ze(!0, k);
            } finally {
              R ? Me() : ((Ce = !1), (ze = null));
            }
          } else Ce = !1;
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
            Y(ct, 0);
          };
        function Le(k) {
          ((ze = k), Ce || ((Ce = !0), Me()));
        }
        function oe(k, R) {
          Qe = Y(function () {
            k(g.unstable_now());
          }, R);
        }
        ((g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (g.unstable_continueExecution = function () {
            $e || Ve || (($e = !0), Le(et));
          }),
          (g.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (jt = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return m($);
          }),
          (g.unstable_next = function (k) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = q;
            }
            var C = q;
            q = R;
            try {
              return k();
            } finally {
              q = C;
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (k, R) {
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
            var C = q;
            q = k;
            try {
              return R();
            } finally {
              q = C;
            }
          }),
          (g.unstable_scheduleCallback = function (k, R, C) {
            var c = g.unstable_now();
            switch (
              (typeof C == "object" && C !== null
                ? ((C = C.delay), (C = typeof C == "number" && 0 < C ? c + C : c))
                : (C = c),
              k)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = C + y),
              (k = {
                id: me++,
                callback: R,
                priorityLevel: k,
                startTime: C,
                expirationTime: y,
                sortIndex: -1,
              }),
              C > c
                ? ((k.sortIndex = C),
                  N(ye, k),
                  m($) === null &&
                    k === m(ye) &&
                    (b ? (gt(Qe), (Qe = -1)) : (b = !0), oe(Se, C - c)))
                : ((k.sortIndex = y), N($, k), $e || Ve || (($e = !0), Le(et))),
              k
            );
          }),
          (g.unstable_shouldYield = Yt),
          (g.unstable_wrapCallback = function (k) {
            var R = q;
            return function () {
              var C = q;
              q = R;
              try {
                return k.apply(this, arguments);
              } finally {
                q = C;
              }
            };
          }));
      })(To)),
    To
  );
}
var Da;
function qf() {
  return (Da || ((Da = 1), (Lo.exports = Jf())), Lo.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oa;
function bf() {
  if (Oa) return Ie;
  Oa = 1;
  var g = Fo(),
    N = qf();
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
  var A = new Set(),
    F = {};
  function U(e, t) {
    (ne(e, t), ne(e + "Capture", t));
  }
  function ne(e, t) {
    for (F[e] = t, e = 0; e < t.length; e++) A.add(t[e]);
  }
  var ce = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    $ = Object.prototype.hasOwnProperty,
    ye =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    me = {},
    re = {};
  function q(e) {
    return $.call(re, e) ? !0 : $.call(me, e) ? !1 : ye.test(e) ? (re[e] = !0) : ((me[e] = !0), !1);
  }
  function Ve(e, t, n, r) {
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
  function $e(e, t, n, r) {
    if (t === null || typeof t > "u" || Ve(e, t, n, r)) return !0;
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
  function b(e, t, n, r, l, i, o) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o));
  }
  var Y = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Y[e] = new b(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Y[t] = new b(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      Y[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        Y[e] = new b(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Y[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Y[e] = new b(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Y[e] = new b(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Y[e] = new b(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Y[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var gt = /[\-:]([a-z])/g;
  function at(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(gt, at);
      Y[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(gt, at);
        Y[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(gt, at);
      Y[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Y[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Y.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Y[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function be(e, t, n, r) {
    var l = Y.hasOwnProperty(t) ? Y[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      ($e(t, n, l, r) && (n = null),
      r || l === null
        ? q(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
  var Se = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for("react.element"),
    Ce = Symbol.for("react.portal"),
    ze = Symbol.for("react.fragment"),
    Qe = Symbol.for("react.strict_mode"),
    jt = Symbol.for("react.profiler"),
    yt = Symbol.for("react.provider"),
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
  var C = Object.assign,
    c;
  function y(e) {
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
  var O = !1;
  function M(e, t) {
    if (!e || O) return "";
    O = !0;
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
          } catch (h) {
            var r = h;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (h) {
            r = h;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (
          var l = h.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            u = i.length - 1;
          1 <= o && 0 <= u && l[o] !== i[u];
        )
          u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (l[o] !== i[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || l[o] !== i[u])) {
                  var s =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      ((O = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function W(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = M(e.type, !1)), e);
      case 11:
        return ((e = M(e.type.render, !1)), e);
      case 1:
        return ((e = M(e.type, !0)), e);
      default:
        return "";
    }
  }
  function B(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ze:
        return "Fragment";
      case Ce:
        return "Portal";
      case jt:
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
        case yt:
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
  function G(e) {
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
  function Q(e) {
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
  function ee(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ue(e) {
    var t = ee(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            ((r = "" + o), i.call(this, o));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
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
  function Oo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ee(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function kr(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rl(e, t) {
    var n = t.checked;
    return C({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Io(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Q(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function Mo(e, t) {
    ((t = t.checked), t != null && be(e, "checked", t, !1));
  }
  function Dl(e, t) {
    Mo(e, t);
    var n = Q(t.value),
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
      ? Ol(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ol(e, t.type, Q(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Uo(e, t, n) {
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
  function Ol(e, t, n) {
    (t !== "number" || kr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Dn = Array.isArray;
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Q(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Il(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return C({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ao(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (Dn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Q(n) };
  }
  function Ho(e, t) {
    var n = Q(t.value),
      r = Q(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Wo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Bo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ml(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Bo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Er,
    Vo = (function (e) {
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
          Er = Er || document.createElement("div"),
            Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Er.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function On(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var In = {
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
    Ja = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function (e) {
    Ja.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]));
    });
  });
  function $o(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (In.hasOwnProperty(e) && In[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Qo(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = $o(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var qa = C(
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
  function Ul(e, t) {
    if (t) {
      if (qa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Al(e, t) {
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
  var Hl = null;
  function Wl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Bl = null,
    cn = null,
    fn = null;
  function Ko(e) {
    if ((e = lr(e))) {
      if (typeof Bl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Kr(t)), Bl(e.stateNode, e.type, t));
    }
  }
  function Yo(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function Go() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), Ko(e), t)) for (e = 0; e < t.length; e++) Ko(t[e]);
    }
  }
  function Xo(e, t) {
    return e(t);
  }
  function Zo() {}
  var Vl = !1;
  function Jo(e, t, n) {
    if (Vl) return e(t, n);
    Vl = !0;
    try {
      return Xo(e, t, n);
    } finally {
      ((Vl = !1), (cn !== null || fn !== null) && (Zo(), Go()));
    }
  }
  function Mn(e, t) {
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
  var $l = !1;
  if (ce)
    try {
      var Un = {};
      (Object.defineProperty(Un, "passive", {
        get: function () {
          $l = !0;
        },
      }),
        window.addEventListener("test", Un, Un),
        window.removeEventListener("test", Un, Un));
    } catch {
      $l = !1;
    }
  function ba(e, t, n, r, l, i, o, u, s) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (w) {
      this.onError(w);
    }
  }
  var An = !1,
    Nr = null,
    _r = !1,
    Ql = null,
    ec = {
      onError: function (e) {
        ((An = !0), (Nr = e));
      },
    };
  function tc(e, t, n, r, l, i, o, u, s) {
    ((An = !1), (Nr = null), ba.apply(ec, arguments));
  }
  function nc(e, t, n, r, l, i, o, u, s) {
    if ((tc.apply(this, arguments), An)) {
      if (An) {
        var h = Nr;
        ((An = !1), (Nr = null));
      } else throw Error(m(198));
      _r || ((_r = !0), (Ql = h));
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
  function qo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function bo(e) {
    if (Gt(e) !== e) throw Error(m(188));
  }
  function rc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Gt(e)), t === null)) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ;) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i;) {
          if (i === n) return (bo(l), e);
          if (i === r) return (bo(l), t);
          i = i.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) ((n = l), (r = i));
      else {
        for (var o = !1, u = l.child; u;) {
          if (u === n) {
            ((o = !0), (n = l), (r = i));
            break;
          }
          if (u === r) {
            ((o = !0), (r = l), (n = i));
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u;) {
            if (u === n) {
              ((o = !0), (n = i), (r = l));
              break;
            }
            if (u === r) {
              ((o = !0), (r = i), (n = l));
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function eu(e) {
    return ((e = rc(e)), e !== null ? tu(e) : null);
  }
  function tu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = tu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var nu = N.unstable_scheduleCallback,
    ru = N.unstable_cancelCallback,
    lc = N.unstable_shouldYield,
    ic = N.unstable_requestPaint,
    se = N.unstable_now,
    oc = N.unstable_getCurrentPriorityLevel,
    Kl = N.unstable_ImmediatePriority,
    lu = N.unstable_UserBlockingPriority,
    Cr = N.unstable_NormalPriority,
    uc = N.unstable_LowPriority,
    iu = N.unstable_IdlePriority,
    jr = null,
    dt = null;
  function sc(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(jr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : fc,
    ac = Math.log,
    cc = Math.LN2;
  function fc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((ac(e) / cc) | 0)) | 0);
  }
  var Pr = 64,
    zr = 4194304;
  function Hn(e) {
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
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? (r = Hn(u)) : ((i &= o), i !== 0 && (r = Hn(i)));
    } else ((o = n & ~l), o !== 0 ? (r = Hn(o)) : i !== 0 && (r = Hn(i)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t;)
        ((n = 31 - nt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function dc(e, t) {
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
  function pc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - nt(i),
        u = 1 << o,
        s = l[o];
      (s === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = dc(u, t))
        : s <= t && (e.expiredLanes |= u),
        (i &= ~u));
    }
  }
  function Yl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ou() {
    var e = Pr;
    return ((Pr <<= 1), (Pr & 4194240) === 0 && (Pr = 64), e);
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Wn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - nt(t)),
      (e[t] = n));
  }
  function mc(e, t) {
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
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - nt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var K = 0;
  function uu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var su,
    Zl,
    au,
    cu,
    fu,
    Jl = !1,
    Tr = [],
    Pt = null,
    zt = null,
    Lt = null,
    Bn = new Map(),
    Vn = new Map(),
    Tt = [],
    hc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function du(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pt = null;
        break;
      case "dragenter":
      case "dragleave":
        zt = null;
        break;
      case "mouseover":
      case "mouseout":
        Lt = null;
        break;
      case "pointerover":
      case "pointerout":
        Bn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vn.delete(t.pointerId);
    }
  }
  function $n(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && Zl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function vc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Pt = $n(Pt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((zt = $n(zt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Lt = $n(Lt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Bn.set(i, $n(Bn.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((i = l.pointerId), Vn.set(i, $n(Vn.get(i) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function pu(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Gt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = qo(n)), t !== null)) {
            ((e.blockedOn = t),
              fu(e.priority, function () {
                au(n);
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
  function Fr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Hl = r), n.target.dispatchEvent(r), (Hl = null));
      } else return ((t = lr(n)), t !== null && Zl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function mu(e, t, n) {
    Fr(e) && n.delete(t);
  }
  function gc() {
    ((Jl = !1),
      Pt !== null && Fr(Pt) && (Pt = null),
      zt !== null && Fr(zt) && (zt = null),
      Lt !== null && Fr(Lt) && (Lt = null),
      Bn.forEach(mu),
      Vn.forEach(mu));
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl || ((Jl = !0), N.unstable_scheduleCallback(N.unstable_NormalPriority, gc)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < Tr.length) {
      Qn(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Pt !== null && Qn(Pt, e),
        zt !== null && Qn(zt, e),
        Lt !== null && Qn(Lt, e),
        Bn.forEach(t),
        Vn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null);)
      (pu(n), n.blockedOn === null && Tt.shift());
  }
  var dn = Se.ReactCurrentBatchConfig,
    Rr = !0;
  function yc(e, t, n, r) {
    var l = K,
      i = dn.transition;
    dn.transition = null;
    try {
      ((K = 1), ql(e, t, n, r));
    } finally {
      ((K = l), (dn.transition = i));
    }
  }
  function wc(e, t, n, r) {
    var l = K,
      i = dn.transition;
    dn.transition = null;
    try {
      ((K = 4), ql(e, t, n, r));
    } finally {
      ((K = l), (dn.transition = i));
    }
  }
  function ql(e, t, n, r) {
    if (Rr) {
      var l = bl(e, t, n, r);
      if (l === null) (vi(e, t, r, Dr, n), du(e, r));
      else if (vc(l, e, t, n, r)) r.stopPropagation();
      else if ((du(e, r), t & 4 && -1 < hc.indexOf(e))) {
        for (; l !== null;) {
          var i = lr(l);
          if (
            (i !== null && su(i), (i = bl(e, t, n, r)), i === null && vi(e, t, r, Dr, n), i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else vi(e, t, r, null, n);
    }
  }
  var Dr = null;
  function bl(e, t, n, r) {
    if (((Dr = null), (e = Wl(r)), (e = Xt(e)), e !== null))
      if (((t = Gt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = qo(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Dr = e), null);
  }
  function hu(e) {
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
        switch (oc()) {
          case Kl:
            return 1;
          case lu:
            return 4;
          case Cr:
          case uc:
            return 16;
          case iu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ft = null,
    ei = null,
    Or = null;
  function vu() {
    if (Or) return Or;
    var e,
      t = ei,
      n = t.length,
      r,
      l = "value" in Ft ? Ft.value : Ft.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ir(e) {
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
  function gu() {
    return !1;
  }
  function Ae(e) {
    function t(n, r, l, i, o) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null));
      for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Mr
          : gu),
        (this.isPropagationStopped = gu),
        this
      );
    }
    return (
      C(t.prototype, {
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
  var pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ti = Ae(pn),
    Yn = C({}, pn, { view: 0, detail: 0 }),
    xc = Ae(Yn),
    ni,
    ri,
    Gn,
    Ur = C({}, Yn, {
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
      getModifierState: ii,
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
                ? ((ni = e.screenX - Gn.screenX), (ri = e.screenY - Gn.screenY))
                : (ri = ni = 0),
              (Gn = e)),
            ni);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ri;
      },
    }),
    yu = Ae(Ur),
    Sc = C({}, Ur, { dataTransfer: 0 }),
    kc = Ae(Sc),
    Ec = C({}, Yn, { relatedTarget: 0 }),
    li = Ae(Ec),
    Nc = C({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _c = Ae(Nc),
    Cc = C({}, pn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    jc = Ae(Cc),
    Pc = C({}, pn, { data: 0 }),
    wu = Ae(Pc),
    zc = {
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
    Lc = {
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
    Tc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Fc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Tc[e]) ? !!t[e] : !1;
  }
  function ii() {
    return Fc;
  }
  var Rc = C({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = zc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Lc[e.keyCode] || "Unidentified"
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
      getModifierState: ii,
      charCode: function (e) {
        return e.type === "keypress" ? Ir(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ir(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Dc = Ae(Rc),
    Oc = C({}, Ur, {
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
    xu = Ae(Oc),
    Ic = C({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ii,
    }),
    Mc = Ae(Ic),
    Uc = C({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ac = Ae(Uc),
    Hc = C({}, Ur, {
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
    Wc = Ae(Hc),
    Bc = [9, 13, 27, 32],
    oi = ce && "CompositionEvent" in window,
    Xn = null;
  ce && "documentMode" in document && (Xn = document.documentMode);
  var Vc = ce && "TextEvent" in window && !Xn,
    Su = ce && (!oi || (Xn && 8 < Xn && 11 >= Xn)),
    ku = " ",
    Eu = !1;
  function Nu(e, t) {
    switch (e) {
      case "keyup":
        return Bc.indexOf(t.keyCode) !== -1;
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
  function _u(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var mn = !1;
  function $c(e, t) {
    switch (e) {
      case "compositionend":
        return _u(t);
      case "keypress":
        return t.which !== 32 ? null : ((Eu = !0), ku);
      case "textInput":
        return ((e = t.data), e === ku && Eu ? null : e);
      default:
        return null;
    }
  }
  function Qc(e, t) {
    if (mn)
      return e === "compositionend" || (!oi && Nu(e, t))
        ? ((e = vu()), (Or = ei = Ft = null), (mn = !1), e)
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
        return Su && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Kc = {
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
  function Cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Kc[e.type] : t === "textarea";
  }
  function ju(e, t, n, r) {
    (Yo(r),
      (t = Vr(t, "onChange")),
      0 < t.length &&
        ((n = new ti("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Zn = null,
    Jn = null;
  function Yc(e) {
    Qu(e, 0);
  }
  function Ar(e) {
    var t = wn(e);
    if (Oo(t)) return e;
  }
  function Gc(e, t) {
    if (e === "change") return t;
  }
  var Pu = !1;
  if (ce) {
    var ui;
    if (ce) {
      var si = "oninput" in document;
      if (!si) {
        var zu = document.createElement("div");
        (zu.setAttribute("oninput", "return;"), (si = typeof zu.oninput == "function"));
      }
      ui = si;
    } else ui = !1;
    Pu = ui && (!document.documentMode || 9 < document.documentMode);
  }
  function Lu() {
    Zn && (Zn.detachEvent("onpropertychange", Tu), (Jn = Zn = null));
  }
  function Tu(e) {
    if (e.propertyName === "value" && Ar(Jn)) {
      var t = [];
      (ju(t, Jn, e, Wl(e)), Jo(Yc, t));
    }
  }
  function Xc(e, t, n) {
    e === "focusin"
      ? (Lu(), (Zn = t), (Jn = n), Zn.attachEvent("onpropertychange", Tu))
      : e === "focusout" && Lu();
  }
  function Zc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ar(Jn);
  }
  function Jc(e, t) {
    if (e === "click") return Ar(t);
  }
  function qc(e, t) {
    if (e === "input" || e === "change") return Ar(t);
  }
  function bc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == "function" ? Object.is : bc;
  function qn(e, t) {
    if (rt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!$.call(t, l) || !rt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Fu(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Ru(e, t) {
    var n = Fu(e);
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
      n = Fu(n);
    }
  }
  function Du(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Du(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ou() {
    for (var e = window, t = kr(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = kr(e.document);
    }
    return t;
  }
  function ai(e) {
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
  function ef(e) {
    var t = Ou(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Du(n.ownerDocument.documentElement, n)) {
      if (r !== null && ai(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
          ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          ((r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = Ru(n, i)));
          var o = Ru(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode);)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var tf = ce && "documentMode" in document && 11 >= document.documentMode,
    hn = null,
    ci = null,
    bn = null,
    fi = !1;
  function Iu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fi ||
      hn == null ||
      hn !== kr(r) ||
      ((r = hn),
      "selectionStart" in r && ai(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (bn && qn(bn, r)) ||
        ((bn = r),
        (r = Vr(ci, "onSelect")),
        0 < r.length &&
          ((t = new ti("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = hn))));
  }
  function Hr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var vn = {
      animationend: Hr("Animation", "AnimationEnd"),
      animationiteration: Hr("Animation", "AnimationIteration"),
      animationstart: Hr("Animation", "AnimationStart"),
      transitionend: Hr("Transition", "TransitionEnd"),
    },
    di = {},
    Mu = {};
  ce &&
    ((Mu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vn.animationend.animation,
      delete vn.animationiteration.animation,
      delete vn.animationstart.animation),
    "TransitionEvent" in window || delete vn.transitionend.transition);
  function Wr(e) {
    if (di[e]) return di[e];
    if (!vn[e]) return e;
    var t = vn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Mu) return (di[e] = t[n]);
    return e;
  }
  var Uu = Wr("animationend"),
    Au = Wr("animationiteration"),
    Hu = Wr("animationstart"),
    Wu = Wr("transitionend"),
    Bu = new Map(),
    Vu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Rt(e, t) {
    (Bu.set(e, t), U(t, [e]));
  }
  for (var pi = 0; pi < Vu.length; pi++) {
    var mi = Vu[pi],
      nf = mi.toLowerCase(),
      rf = mi[0].toUpperCase() + mi.slice(1);
    Rt(nf, "on" + rf);
  }
  (Rt(Uu, "onAnimationEnd"),
    Rt(Au, "onAnimationIteration"),
    Rt(Hu, "onAnimationStart"),
    Rt("dblclick", "onDoubleClick"),
    Rt("focusin", "onFocus"),
    Rt("focusout", "onBlur"),
    Rt(Wu, "onTransitionEnd"),
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
  var er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
  function $u(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), nc(r, t, void 0, e), (e.currentTarget = null));
  }
  function Qu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              s = u.instance,
              h = u.currentTarget;
            if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
            ($u(l, u, h), (i = s));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (s = u.instance),
              (h = u.currentTarget),
              (u = u.listener),
              s !== i && l.isPropagationStopped())
            )
              break e;
            ($u(l, u, h), (i = s));
          }
      }
    }
    if (_r) throw ((e = Ql), (_r = !1), (Ql = null), e);
  }
  function Z(e, t) {
    var n = t[ki];
    n === void 0 && (n = t[ki] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ku(t, e, 2, !1), n.add(r));
  }
  function hi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ku(n, e, r, t));
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Br]) {
      ((e[Br] = !0),
        A.forEach(function (n) {
          n !== "selectionchange" && (lf.has(n) || hi(n, !1, e), hi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || ((t[Br] = !0), hi("selectionchange", !1, t));
    }
  }
  function Ku(e, t, n, r) {
    switch (hu(t)) {
      case 1:
        var l = yc;
        break;
      case 4:
        l = wc;
        break;
      default:
        l = ql;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !$l || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function vi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null;) {
              var s = o.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = o.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; u !== null;) {
            if (((o = Xt(u)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Jo(function () {
      var h = i,
        w = Wl(n),
        x = [];
      e: {
        var v = Bu.get(e);
        if (v !== void 0) {
          var E = ti,
            j = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = Dc;
              break;
            case "focusin":
              ((j = "focus"), (E = li));
              break;
            case "focusout":
              ((j = "blur"), (E = li));
              break;
            case "beforeblur":
            case "afterblur":
              E = li;
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
              E = yu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = kc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Mc;
              break;
            case Uu:
            case Au:
            case Hu:
              E = _c;
              break;
            case Wu:
              E = Ac;
              break;
            case "scroll":
              E = xc;
              break;
            case "wheel":
              E = Wc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = jc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = xu;
          }
          var P = (t & 4) !== 0,
            ae = !P && e === "scroll",
            f = P ? (v !== null ? v + "Capture" : null) : v;
          P = [];
          for (var a = h, d; a !== null;) {
            d = a;
            var S = d.stateNode;
            if (
              (d.tag === 5 &&
                S !== null &&
                ((d = S), f !== null && ((S = Mn(a, f)), S != null && P.push(nr(a, S, d)))),
              ae)
            )
              break;
            a = a.return;
          }
          0 < P.length && ((v = new E(v, j, null, n, w)), x.push({ event: v, listeners: P }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (E = e === "mouseout" || e === "pointerout"),
            v && n !== Hl && (j = n.relatedTarget || n.fromElement) && (Xt(j) || j[wt]))
          )
            break e;
          if (
            (E || v) &&
            ((v =
              w.window === w
                ? w
                : (v = w.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            E
              ? ((j = n.relatedTarget || n.toElement),
                (E = h),
                (j = j ? Xt(j) : null),
                j !== null &&
                  ((ae = Gt(j)), j !== ae || (j.tag !== 5 && j.tag !== 6)) &&
                  (j = null))
              : ((E = null), (j = h)),
            E !== j)
          ) {
            if (
              ((P = yu),
              (S = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((P = xu), (S = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (ae = E == null ? v : wn(E)),
              (d = j == null ? v : wn(j)),
              (v = new P(S, a + "leave", E, n, w)),
              (v.target = ae),
              (v.relatedTarget = d),
              (S = null),
              Xt(w) === h &&
                ((P = new P(f, a + "enter", j, n, w)),
                (P.target = d),
                (P.relatedTarget = ae),
                (S = P)),
              (ae = S),
              E && j)
            )
              t: {
                for (P = E, f = j, a = 0, d = P; d; d = gn(d)) a++;
                for (d = 0, S = f; S; S = gn(S)) d++;
                for (; 0 < a - d;) ((P = gn(P)), a--);
                for (; 0 < d - a;) ((f = gn(f)), d--);
                for (; a--;) {
                  if (P === f || (f !== null && P === f.alternate)) break t;
                  ((P = gn(P)), (f = gn(f)));
                }
                P = null;
              }
            else P = null;
            (E !== null && Yu(x, v, E, P, !1), j !== null && ae !== null && Yu(x, ae, j, P, !0));
          }
        }
        e: {
          if (
            ((v = h ? wn(h) : window),
            (E = v.nodeName && v.nodeName.toLowerCase()),
            E === "select" || (E === "input" && v.type === "file"))
          )
            var z = Gc;
          else if (Cu(v))
            if (Pu) z = qc;
            else {
              z = Zc;
              var L = Xc;
            }
          else
            (E = v.nodeName) &&
              E.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (z = Jc);
          if (z && (z = z(e, h))) {
            ju(x, z, n, w);
            break e;
          }
          (L && L(e, v, h),
            e === "focusout" &&
              (L = v._wrapperState) &&
              L.controlled &&
              v.type === "number" &&
              Ol(v, "number", v.value));
        }
        switch (((L = h ? wn(h) : window), e)) {
          case "focusin":
            (Cu(L) || L.contentEditable === "true") && ((hn = L), (ci = h), (bn = null));
            break;
          case "focusout":
            bn = ci = hn = null;
            break;
          case "mousedown":
            fi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((fi = !1), Iu(x, n, w));
            break;
          case "selectionchange":
            if (tf) break;
          case "keydown":
          case "keyup":
            Iu(x, n, w);
        }
        var T;
        if (oi)
          e: {
            switch (e) {
              case "compositionstart":
                var D = "onCompositionStart";
                break e;
              case "compositionend":
                D = "onCompositionEnd";
                break e;
              case "compositionupdate":
                D = "onCompositionUpdate";
                break e;
            }
            D = void 0;
          }
        else
          mn
            ? Nu(e, n) && (D = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
        (D &&
          (Su &&
            n.locale !== "ko" &&
            (mn || D !== "onCompositionStart"
              ? D === "onCompositionEnd" && mn && (T = vu())
              : ((Ft = w), (ei = "value" in Ft ? Ft.value : Ft.textContent), (mn = !0))),
          (L = Vr(h, D)),
          0 < L.length &&
            ((D = new wu(D, e, null, n, w)),
            x.push({ event: D, listeners: L }),
            T ? (D.data = T) : ((T = _u(n)), T !== null && (D.data = T)))),
          (T = Vc ? $c(e, n) : Qc(e, n)) &&
            ((h = Vr(h, "onBeforeInput")),
            0 < h.length &&
              ((w = new wu("onBeforeInput", "beforeinput", null, n, w)),
              x.push({ event: w, listeners: h }),
              (w.data = T))));
      }
      Qu(x, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Vr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Mn(e, n)),
        i != null && r.unshift(nr(e, i, l)),
        (i = Mn(e, t)),
        i != null && r.push(nr(e, i, l))),
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
  function Yu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
      var u = n,
        s = u.alternate,
        h = u.stateNode;
      if (s !== null && s === r) break;
      (u.tag === 5 &&
        h !== null &&
        ((u = h),
        l
          ? ((s = Mn(n, i)), s != null && o.unshift(nr(n, s, u)))
          : l || ((s = Mn(n, i)), s != null && o.push(nr(n, s, u)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var of = /\r\n?/g,
    uf = /\u0000|\uFFFD/g;
  function Gu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        of,
        `
`,
      )
      .replace(uf, "");
  }
  function $r(e, t, n) {
    if (((t = Gu(t)), Gu(e) !== t && n)) throw Error(m(425));
  }
  function Qr() {}
  var gi = null,
    yi = null;
  function wi(e, t) {
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
  var xi = typeof setTimeout == "function" ? setTimeout : void 0,
    sf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xu = typeof Promise == "function" ? Promise : void 0,
    af =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Xu < "u"
          ? function (e) {
              return Xu.resolve(null).then(e).catch(cf);
            }
          : xi;
  function cf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Si(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Kn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Kn(t);
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
  function Zu(e) {
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
  var yn = Math.random().toString(36).slice(2),
    pt = "__reactFiber$" + yn,
    rr = "__reactProps$" + yn,
    wt = "__reactContainer$" + yn,
    ki = "__reactEvents$" + yn,
    ff = "__reactListeners$" + yn,
    df = "__reactHandles$" + yn;
  function Xt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[wt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Zu(e); e !== null;) {
            if ((n = e[pt])) return n;
            e = Zu(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function lr(e) {
    return (
      (e = e[pt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Kr(e) {
    return e[rr] || null;
  }
  var Ei = [],
    xn = -1;
  function Ot(e) {
    return { current: e };
  }
  function J(e) {
    0 > xn || ((e.current = Ei[xn]), (Ei[xn] = null), xn--);
  }
  function X(e, t) {
    (xn++, (Ei[xn] = e.current), (e.current = t));
  }
  var It = {},
    ke = Ot(It),
    Te = Ot(!1),
    Zt = It;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return It;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Fe(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Yr() {
    (J(Te), J(ke));
  }
  function Ju(e, t, n) {
    if (ke.current !== It) throw Error(m(168));
    (X(ke, t), X(Te, n));
  }
  function qu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, G(e) || "Unknown", l));
    return C({}, n, r);
  }
  function Gr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
      (Zt = ke.current),
      X(ke, e),
      X(Te, Te.current),
      !0
    );
  }
  function bu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = qu(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        J(Te),
        J(ke),
        X(ke, e))
      : J(Te),
      X(Te, n));
  }
  var xt = null,
    Xr = !1,
    Ni = !1;
  function es(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  function pf(e) {
    ((Xr = !0), es(e));
  }
  function Mt() {
    if (!Ni && xt !== null) {
      Ni = !0;
      var e = 0,
        t = K;
      try {
        var n = xt;
        for (K = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((xt = null), (Xr = !1));
      } catch (l) {
        throw (xt !== null && (xt = xt.slice(e + 1)), nu(Kl, Mt), l);
      } finally {
        ((K = t), (Ni = !1));
      }
    }
    return null;
  }
  var kn = [],
    En = 0,
    Zr = null,
    Jr = 0,
    Ke = [],
    Ye = 0,
    Jt = null,
    St = 1,
    kt = "";
  function qt(e, t) {
    ((kn[En++] = Jr), (kn[En++] = Zr), (Zr = e), (Jr = t));
  }
  function ts(e, t, n) {
    ((Ke[Ye++] = St), (Ke[Ye++] = kt), (Ke[Ye++] = Jt), (Jt = e));
    var r = St;
    e = kt;
    var l = 32 - nt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - nt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      ((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (St = (1 << (32 - nt(t) + l)) | (n << l) | r),
        (kt = i + e));
    } else ((St = (1 << i) | (n << l) | r), (kt = e));
  }
  function _i(e) {
    e.return !== null && (qt(e, 1), ts(e, 1, 0));
  }
  function Ci(e) {
    for (; e === Zr;) ((Zr = kn[--En]), (kn[En] = null), (Jr = kn[--En]), (kn[En] = null));
    for (; e === Jt;)
      ((Jt = Ke[--Ye]),
        (Ke[Ye] = null),
        (kt = Ke[--Ye]),
        (Ke[Ye] = null),
        (St = Ke[--Ye]),
        (Ke[Ye] = null));
  }
  var He = null,
    We = null,
    te = !1,
    lt = null;
  function ns(e, t) {
    var n = Je(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function rs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (He = e), (We = Dt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (He = e), (We = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: St, overflow: kt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Je(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (He = e),
              (We = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ji(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Pi(e) {
    if (te) {
      var t = We;
      if (t) {
        var n = t;
        if (!rs(e, t)) {
          if (ji(e)) throw Error(m(418));
          t = Dt(n.nextSibling);
          var r = He;
          t && rs(e, t) ? ns(r, n) : ((e.flags = (e.flags & -4097) | 2), (te = !1), (He = e));
        }
      } else {
        if (ji(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (te = !1), (He = e));
      }
    }
  }
  function ls(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    He = e;
  }
  function qr(e) {
    if (e !== He) return !1;
    if (!te) return (ls(e), (te = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps))),
      t && (t = We))
    ) {
      if (ji(e)) throw (is(), Error(m(418)));
      for (; t;) (ns(e, t), (t = Dt(t.nextSibling)));
    }
    if ((ls(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                We = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        We = null;
      }
    } else We = He ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function is() {
    for (var e = We; e;) e = Dt(e.nextSibling);
  }
  function Nn() {
    ((We = He = null), (te = !1));
  }
  function zi(e) {
    lt === null ? (lt = [e]) : lt.push(e);
  }
  var mf = Se.ReactCurrentBatchConfig;
  function ir(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var u = l.refs;
              o === null ? delete u[i] : (u[i] = o);
            }),
            (t._stringRef = i),
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
  function os(e) {
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
    function i(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d) : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function o(f) {
      return (e && f.alternate === null && (f.flags |= 2), f);
    }
    function u(f, a, d, S) {
      return a === null || a.tag !== 6
        ? ((a = So(d, f.mode, S)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, S) {
      var z = d.type;
      return z === ze
        ? w(f, a, d.props.children, S, d.key)
        : a !== null &&
            (a.elementType === z ||
              (typeof z == "object" && z !== null && z.$$typeof === Le && os(z) === a.type))
          ? ((S = l(a, d.props)), (S.ref = ir(f, a, d)), (S.return = f), S)
          : ((S = El(d.type, d.key, d.props, null, f.mode, S)),
            (S.ref = ir(f, a, d)),
            (S.return = f),
            S);
    }
    function h(f, a, d, S) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = ko(d, f.mode, S)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function w(f, a, d, S, z) {
      return a === null || a.tag !== 7
        ? ((a = un(d, f.mode, S, z)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function x(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = So("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case et:
            return (
              (d = El(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ir(f, null, a)),
              (d.return = f),
              d
            );
          case Ce:
            return ((a = ko(a, f.mode, d)), (a.return = f), a);
          case Le:
            var S = a._init;
            return x(f, S(a._payload), d);
        }
        if (Dn(a) || R(a)) return ((a = un(a, f.mode, d, null)), (a.return = f), a);
        br(f, a);
      }
      return null;
    }
    function v(f, a, d, S) {
      var z = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return z !== null ? null : u(f, a, "" + d, S);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case et:
            return d.key === z ? s(f, a, d, S) : null;
          case Ce:
            return d.key === z ? h(f, a, d, S) : null;
          case Le:
            return ((z = d._init), v(f, a, z(d._payload), S));
        }
        if (Dn(d) || R(d)) return z !== null ? null : w(f, a, d, S, null);
        br(f, d);
      }
      return null;
    }
    function E(f, a, d, S, z) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return ((f = f.get(d) || null), u(a, f, "" + S, z));
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case et:
            return ((f = f.get(S.key === null ? d : S.key) || null), s(a, f, S, z));
          case Ce:
            return ((f = f.get(S.key === null ? d : S.key) || null), h(a, f, S, z));
          case Le:
            var L = S._init;
            return E(f, a, d, L(S._payload), z);
        }
        if (Dn(S) || R(S)) return ((f = f.get(d) || null), w(a, f, S, z, null));
        br(a, S);
      }
      return null;
    }
    function j(f, a, d, S) {
      for (var z = null, L = null, T = a, D = (a = 0), ge = null; T !== null && D < d.length; D++) {
        T.index > D ? ((ge = T), (T = null)) : (ge = T.sibling);
        var V = v(f, T, d[D], S);
        if (V === null) {
          T === null && (T = ge);
          break;
        }
        (e && T && V.alternate === null && t(f, T),
          (a = i(V, a, D)),
          L === null ? (z = V) : (L.sibling = V),
          (L = V),
          (T = ge));
      }
      if (D === d.length) return (n(f, T), te && qt(f, D), z);
      if (T === null) {
        for (; D < d.length; D++)
          ((T = x(f, d[D], S)),
            T !== null && ((a = i(T, a, D)), L === null ? (z = T) : (L.sibling = T), (L = T)));
        return (te && qt(f, D), z);
      }
      for (T = r(f, T); D < d.length; D++)
        ((ge = E(T, f, D, d[D], S)),
          ge !== null &&
            (e && ge.alternate !== null && T.delete(ge.key === null ? D : ge.key),
            (a = i(ge, a, D)),
            L === null ? (z = ge) : (L.sibling = ge),
            (L = ge)));
      return (
        e &&
          T.forEach(function (Kt) {
            return t(f, Kt);
          }),
        te && qt(f, D),
        z
      );
    }
    function P(f, a, d, S) {
      var z = R(d);
      if (typeof z != "function") throw Error(m(150));
      if (((d = z.call(d)), d == null)) throw Error(m(151));
      for (
        var L = (z = null), T = a, D = (a = 0), ge = null, V = d.next();
        T !== null && !V.done;
        D++, V = d.next()
      ) {
        T.index > D ? ((ge = T), (T = null)) : (ge = T.sibling);
        var Kt = v(f, T, V.value, S);
        if (Kt === null) {
          T === null && (T = ge);
          break;
        }
        (e && T && Kt.alternate === null && t(f, T),
          (a = i(Kt, a, D)),
          L === null ? (z = Kt) : (L.sibling = Kt),
          (L = Kt),
          (T = ge));
      }
      if (V.done) return (n(f, T), te && qt(f, D), z);
      if (T === null) {
        for (; !V.done; D++, V = d.next())
          ((V = x(f, V.value, S)),
            V !== null && ((a = i(V, a, D)), L === null ? (z = V) : (L.sibling = V), (L = V)));
        return (te && qt(f, D), z);
      }
      for (T = r(f, T); !V.done; D++, V = d.next())
        ((V = E(T, f, D, V.value, S)),
          V !== null &&
            (e && V.alternate !== null && T.delete(V.key === null ? D : V.key),
            (a = i(V, a, D)),
            L === null ? (z = V) : (L.sibling = V),
            (L = V)));
      return (
        e &&
          T.forEach(function (Yf) {
            return t(f, Yf);
          }),
        te && qt(f, D),
        z
      );
    }
    function ae(f, a, d, S) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === ze &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case et:
            e: {
              for (var z = d.key, L = a; L !== null;) {
                if (L.key === z) {
                  if (((z = d.type), z === ze)) {
                    if (L.tag === 7) {
                      (n(f, L.sibling), (a = l(L, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    L.elementType === z ||
                    (typeof z == "object" && z !== null && z.$$typeof === Le && os(z) === L.type)
                  ) {
                    (n(f, L.sibling),
                      (a = l(L, d.props)),
                      (a.ref = ir(f, L, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, L);
                  break;
                } else t(f, L);
                L = L.sibling;
              }
              d.type === ze
                ? ((a = un(d.props.children, f.mode, S, d.key)), (a.return = f), (f = a))
                : ((S = El(d.type, d.key, d.props, null, f.mode, S)),
                  (S.ref = ir(f, a, d)),
                  (S.return = f),
                  (f = S));
            }
            return o(f);
          case Ce:
            e: {
              for (L = d.key; a !== null;) {
                if (a.key === L)
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
              ((a = ko(d, f.mode, S)), (a.return = f), (f = a));
            }
            return o(f);
          case Le:
            return ((L = d._init), ae(f, a, L(d._payload), S));
        }
        if (Dn(d)) return j(f, a, d, S);
        if (R(d)) return P(f, a, d, S);
        br(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = So(d, f.mode, S)), (a.return = f), (f = a)),
          o(f))
        : n(f, a);
    }
    return ae;
  }
  var _n = us(!0),
    ss = us(!1),
    el = Ot(null),
    tl = null,
    Cn = null,
    Li = null;
  function Ti() {
    Li = Cn = tl = null;
  }
  function Fi(e) {
    var t = el.current;
    (J(el), (e._currentValue = t));
  }
  function Ri(e, t, n) {
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
  function jn(e, t) {
    ((tl = e),
      (Li = Cn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Re = !0), (e.firstContext = null)));
  }
  function Ge(e) {
    var t = e._currentValue;
    if (Li !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
        if (tl === null) throw Error(m(308));
        ((Cn = e), (tl.dependencies = { lanes: 0, firstContext: e }));
      } else Cn = Cn.next = e;
    return t;
  }
  var bt = null;
  function Di(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function as(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Di(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Et(e, r)
    );
  }
  function Et(e, t) {
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
  function Oi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function cs(e, t) {
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
  function Nt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (H & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Et(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Di(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Et(e, n)
    );
  }
  function nl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  function fs(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (l = i = o) : (i = i.next = o), (n = n.next));
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
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
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        h = s.next;
      ((s.next = null), o === null ? (i = h) : (o.next = h), (o = s));
      var w = e.alternate;
      w !== null &&
        ((w = w.updateQueue),
        (u = w.lastBaseUpdate),
        u !== o && (u === null ? (w.firstBaseUpdate = h) : (u.next = h), (w.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var x = l.baseState;
      ((o = 0), (w = h = s = null), (u = i));
      do {
        var v = u.lane,
          E = u.eventTime;
        if ((r & v) === v) {
          w !== null &&
            (w = w.next =
              {
                eventTime: E,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var j = e,
              P = u;
            switch (((v = t), (E = n), P.tag)) {
              case 1:
                if (((j = P.payload), typeof j == "function")) {
                  x = j.call(E, x, v);
                  break e;
                }
                x = j;
                break e;
              case 3:
                j.flags = (j.flags & -65537) | 128;
              case 0:
                if (
                  ((j = P.payload), (v = typeof j == "function" ? j.call(E, x, v) : j), v == null)
                )
                  break e;
                x = C({}, x, v);
                break e;
              case 2:
                Ut = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (v = l.effects), v === null ? (l.effects = [u]) : v.push(u));
        } else
          ((E = {
            eventTime: E,
            lane: v,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            w === null ? ((h = w = E), (s = x)) : (w = w.next = E),
            (o |= v));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((v = u),
            (u = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (w === null && (s = x),
        (l.baseState = s),
        (l.firstBaseUpdate = h),
        (l.lastBaseUpdate = w),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((o |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((nn |= o), (e.lanes = o), (e.memoizedState = x));
    }
  }
  function ds(e, t, n) {
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
    mt = Ot(or),
    ur = Ot(or),
    sr = Ot(or);
  function en(e) {
    if (e === or) throw Error(m(174));
    return e;
  }
  function Ii(e, t) {
    switch ((X(sr, t), X(ur, e), X(mt, or), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ml(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ml(t, e)));
    }
    (J(mt), X(mt, t));
  }
  function Pn() {
    (J(mt), J(ur), J(sr));
  }
  function ps(e) {
    en(sr.current);
    var t = en(mt.current),
      n = Ml(t, e.type);
    t !== n && (X(ur, e), X(mt, n));
  }
  function Mi(e) {
    ur.current === e && (J(mt), J(ur));
  }
  var le = Ot(0);
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
  var Ui = [];
  function Ai() {
    for (var e = 0; e < Ui.length; e++) Ui[e]._workInProgressVersionPrimary = null;
    Ui.length = 0;
  }
  var il = Se.ReactCurrentDispatcher,
    Hi = Se.ReactCurrentBatchConfig,
    tn = 0,
    ie = null,
    de = null,
    he = null,
    ol = !1,
    ar = !1,
    cr = 0,
    hf = 0;
  function Ee() {
    throw Error(m(321));
  }
  function Wi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function Bi(e, t, n, r, l, i) {
    if (
      ((tn = i),
      (ie = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (il.current = e === null || e.memoizedState === null ? wf : xf),
      (e = n(r, l)),
      ar)
    ) {
      i = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= i)) throw Error(m(301));
        ((i += 1), (he = de = null), (t.updateQueue = null), (il.current = Sf), (e = n(r, l)));
      } while (ar);
    }
    if (
      ((il.current = al),
      (t = de !== null && de.next !== null),
      (tn = 0),
      (he = de = ie = null),
      (ol = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Vi() {
    var e = cr !== 0;
    return ((cr = 0), e);
  }
  function ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (he === null ? (ie.memoizedState = he = e) : (he = he.next = e), he);
  }
  function Xe() {
    if (de === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var t = he === null ? ie.memoizedState : he.next;
    if (t !== null) ((he = t), (de = e));
    else {
      if (e === null) throw Error(m(310));
      ((de = e),
        (e = {
          memoizedState: de.memoizedState,
          baseState: de.baseState,
          baseQueue: de.baseQueue,
          queue: de.queue,
          next: null,
        }),
        he === null ? (ie.memoizedState = he = e) : (he = he.next = e));
    }
    return he;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $i(e) {
    var t = Xe(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = de,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        ((l.next = i.next), (i.next = o));
      }
      ((r.baseQueue = l = i), (n.pending = null));
    }
    if (l !== null) {
      ((i = l.next), (r = r.baseState));
      var u = (o = null),
        s = null,
        h = i;
      do {
        var w = h.lane;
        if ((tn & w) === w)
          (s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: h.action,
                hasEagerState: h.hasEagerState,
                eagerState: h.eagerState,
                next: null,
              }),
            (r = h.hasEagerState ? h.eagerState : e(r, h.action)));
        else {
          var x = {
            lane: w,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          };
          (s === null ? ((u = s = x), (o = r)) : (s = s.next = x), (ie.lanes |= w), (nn |= w));
        }
        h = h.next;
      } while (h !== null && h !== i);
      (s === null ? (o = r) : (s.next = u),
        rt(r, t.memoizedState) || (Re = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (ie.lanes |= i), (nn |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Qi(e) {
    var t = Xe(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do ((i = e(i, o.action)), (o = o.next));
      while (o !== l);
      (rt(i, t.memoizedState) || (Re = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function ms() {}
  function hs(e, t) {
    var n = ie,
      r = Xe(),
      l = t(),
      i = !rt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Re = !0)),
      (r = r.queue),
      Ki(ys.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), dr(9, gs.bind(null, n, r, l, t), void 0, null), ve === null))
        throw Error(m(349));
      (tn & 30) !== 0 || vs(n, t, l);
    }
    return l;
  }
  function vs(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ie.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ie.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function gs(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ws(t) && xs(e));
  }
  function ys(e, t, n) {
    return n(function () {
      ws(t) && xs(e);
    });
  }
  function ws(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !rt(e, n);
    } catch {
      return !0;
    }
  }
  function xs(e) {
    var t = Et(e, 1);
    t !== null && st(t, e, 1, -1);
  }
  function Ss(e) {
    var t = ht();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = yf.bind(null, ie, e)),
      [t.memoizedState, e]
    );
  }
  function dr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ie.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ie.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ks() {
    return Xe().memoizedState;
  }
  function ul(e, t, n, r) {
    var l = ht();
    ((ie.flags |= e), (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function sl(e, t, n, r) {
    var l = Xe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (de !== null) {
      var o = de.memoizedState;
      if (((i = o.destroy), r !== null && Wi(r, o.deps))) {
        l.memoizedState = dr(t, n, i, r);
        return;
      }
    }
    ((ie.flags |= e), (l.memoizedState = dr(1 | t, n, i, r)));
  }
  function Es(e, t) {
    return ul(8390656, 8, e, t);
  }
  function Ki(e, t) {
    return sl(2048, 8, e, t);
  }
  function Ns(e, t) {
    return sl(4, 2, e, t);
  }
  function _s(e, t) {
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
  function js(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), sl(4, 4, Cs.bind(null, t, e), n));
  }
  function Yi() {}
  function Ps(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function zs(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ls(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n))
      : (rt(n, t) || ((n = ou()), (ie.lanes |= n), (nn |= n), (e.baseState = !0)), t);
  }
  function vf(e, t) {
    var n = K;
    ((K = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Hi.transition;
    Hi.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((K = n), (Hi.transition = r));
    }
  }
  function Ts() {
    return Xe().memoizedState;
  }
  function gf(e, t, n) {
    var r = Vt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Fs(e)))
      Rs(t, n);
    else if (((n = as(e, t, n, r)), n !== null)) {
      var l = Pe();
      (st(n, e, r, l), Ds(n, t, r));
    }
  }
  function yf(e, t, n) {
    var r = Vt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Fs(e)) Rs(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            u = i(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), rt(u, o))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), Di(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = as(e, t, l, r)), n !== null && ((l = Pe()), st(n, e, r, l), Ds(n, t, r)));
    }
  }
  function Fs(e) {
    var t = e.alternate;
    return e === ie || (t !== null && t === ie);
  }
  function Rs(e, t) {
    ar = ol = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Ds(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  var al = {
      readContext: Ge,
      useCallback: Ee,
      useContext: Ee,
      useEffect: Ee,
      useImperativeHandle: Ee,
      useInsertionEffect: Ee,
      useLayoutEffect: Ee,
      useMemo: Ee,
      useReducer: Ee,
      useRef: Ee,
      useState: Ee,
      useDebugValue: Ee,
      useDeferredValue: Ee,
      useTransition: Ee,
      useMutableSource: Ee,
      useSyncExternalStore: Ee,
      useId: Ee,
      unstable_isNewReconciler: !1,
    },
    wf = {
      readContext: Ge,
      useCallback: function (e, t) {
        return ((ht().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ge,
      useEffect: Es,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), ul(4194308, 4, Cs.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return ul(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ul(4, 2, e, t);
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
          (e = e.dispatch = gf.bind(null, ie, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Ss,
      useDebugValue: Yi,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = Ss(!1),
          t = e[0];
        return ((e = vf.bind(null, e[1])), (ht().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ie,
          l = ht();
        if (te) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ve === null)) throw Error(m(349));
          (tn & 30) !== 0 || vs(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Es(ys.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          dr(9, gs.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = ht(),
          t = ve.identifierPrefix;
        if (te) {
          var n = kt,
            r = St;
          ((n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = cr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = hf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    xf = {
      readContext: Ge,
      useCallback: Ps,
      useContext: Ge,
      useEffect: Ki,
      useImperativeHandle: js,
      useInsertionEffect: Ns,
      useLayoutEffect: _s,
      useMemo: zs,
      useReducer: $i,
      useRef: ks,
      useState: function () {
        return $i(fr);
      },
      useDebugValue: Yi,
      useDeferredValue: function (e) {
        var t = Xe();
        return Ls(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = $i(fr)[0],
          t = Xe().memoizedState;
        return [e, t];
      },
      useMutableSource: ms,
      useSyncExternalStore: hs,
      useId: Ts,
      unstable_isNewReconciler: !1,
    },
    Sf = {
      readContext: Ge,
      useCallback: Ps,
      useContext: Ge,
      useEffect: Ki,
      useImperativeHandle: js,
      useInsertionEffect: Ns,
      useLayoutEffect: _s,
      useMemo: zs,
      useReducer: Qi,
      useRef: ks,
      useState: function () {
        return Qi(fr);
      },
      useDebugValue: Yi,
      useDeferredValue: function (e) {
        var t = Xe();
        return de === null ? (t.memoizedState = e) : Ls(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Qi(fr)[0],
          t = Xe().memoizedState;
        return [e, t];
      },
      useMutableSource: ms,
      useSyncExternalStore: hs,
      useId: Ts,
      unstable_isNewReconciler: !1,
    };
  function it(e, t) {
    if (e && e.defaultProps) {
      ((t = C({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Gi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : C({}, t, n)),
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
        l = Vt(e),
        i = Nt(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (st(t, e, l, r), nl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Vt(e),
        i = Nt(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (st(t, e, l, r), nl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Pe(),
        r = Vt(e),
        l = Nt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (st(t, e, r, n), nl(t, e, r)));
    },
  };
  function Os(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !qn(n, r) || !qn(l, i)
          : !0
    );
  }
  function Is(e, t, n) {
    var r = !1,
      l = It,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ge(i))
        : ((l = Fe(t) ? Zt : ke.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Sn(e, l) : It)),
      (t = new t(n, i)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Ms(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && cl.enqueueReplaceState(t, t.state, null));
  }
  function Xi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Oi(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Ge(i))
      : ((i = Fe(t) ? Zt : ke.current), (l.context = Sn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Gi(e, t, i, n), (l.state = e.memoizedState)),
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
  function zn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += W(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Zi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ji(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var kf = typeof WeakMap == "function" ? WeakMap : Map;
  function Us(e, t, n) {
    ((n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (gl || ((gl = !0), (po = r)), Ji(e, t));
      }),
      n
    );
  }
  function As(e, t, n) {
    ((n = Nt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Ji(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (Ji(e, t),
            typeof r != "function" && (Wt === null ? (Wt = new Set([this])) : Wt.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
        }),
      n
    );
  }
  function Hs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new kf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = If.bind(null, e, t, n)), t.then(e, e));
  }
  function Ws(e) {
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
  function Bs(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Nt(-1, 1)), (t.tag = 2), At(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Ef = Se.ReactCurrentOwner,
    Re = !1;
  function je(e, t, n, r) {
    t.child = e === null ? ss(t, null, n, r) : _n(t, e.child, n, r);
  }
  function Vs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      jn(t, l),
      (r = Bi(e, t, n, r, i, l)),
      (n = Vi()),
      e !== null && !Re
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (te && n && _i(t), (t.flags |= 1), je(e, t, r, l), t.child)
    );
  }
  function $s(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !xo(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Qs(e, t, i, r, l))
        : ((e = El(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : qn), n(o, r) && e.ref === t.ref))
        return _t(e, t, l);
    }
    return ((t.flags |= 1), (e = Qt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Qs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (qn(i, r) && e.ref === t.ref)
        if (((Re = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Re = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return qi(e, t, n, r, l);
  }
  function Ks(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          X(Tn, Be),
          (Be |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            X(Tn, Be),
            (Be |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = i !== null ? i.baseLanes : n),
          X(Tn, Be),
          (Be |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        X(Tn, Be),
        (Be |= r));
    return (je(e, t, l, n), t.child);
  }
  function Ys(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qi(e, t, n, r, l) {
    var i = Fe(n) ? Zt : ke.current;
    return (
      (i = Sn(t, i)),
      jn(t, l),
      (n = Bi(e, t, n, r, i, l)),
      (r = Vi()),
      e !== null && !Re
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (te && r && _i(t), (t.flags |= 1), je(e, t, n, l), t.child)
    );
  }
  function Gs(e, t, n, r, l) {
    if (Fe(n)) {
      var i = !0;
      Gr(t);
    } else i = !1;
    if ((jn(t, l), t.stateNode === null)) (dl(e, t), Is(t, n, r), Xi(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var s = o.context,
        h = n.contextType;
      typeof h == "object" && h !== null
        ? (h = Ge(h))
        : ((h = Fe(n) ? Zt : ke.current), (h = Sn(t, h)));
      var w = n.getDerivedStateFromProps,
        x = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      (x ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || s !== h) && Ms(t, o, r, h)),
        (Ut = !1));
      var v = t.memoizedState;
      ((o.state = v),
        rl(t, r, o, l),
        (s = t.memoizedState),
        u !== r || v !== s || Te.current || Ut
          ? (typeof w == "function" && (Gi(t, n, w, r), (s = t.memoizedState)),
            (u = Ut || Os(t, n, u, r, v, s, h))
              ? (x ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" && o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (o.props = r),
            (o.state = s),
            (o.context = h),
            (r = u))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
    } else {
      ((o = t.stateNode),
        cs(e, t),
        (u = t.memoizedProps),
        (h = t.type === t.elementType ? u : it(t.type, u)),
        (o.props = h),
        (x = t.pendingProps),
        (v = o.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = Fe(n) ? Zt : ke.current), (s = Sn(t, s))));
      var E = n.getDerivedStateFromProps;
      ((w = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== x || v !== s) && Ms(t, o, r, s)),
        (Ut = !1),
        (v = t.memoizedState),
        (o.state = v),
        rl(t, r, o, l));
      var j = t.memoizedState;
      u !== x || v !== j || Te.current || Ut
        ? (typeof E == "function" && (Gi(t, n, E, r), (j = t.memoizedState)),
          (h = Ut || Os(t, n, h, r, v, j, s) || !1)
            ? (w ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, j, s),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, j, s)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = j)),
          (o.props = r),
          (o.state = j),
          (o.context = s),
          (r = h))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return bi(e, t, n, r, i, l);
  }
  function bi(e, t, n, r, l, i) {
    Ys(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && bu(t, n, !1), _t(e, t, i));
    ((r = t.stateNode), (Ef.current = t));
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = _n(t, e.child, null, i)), (t.child = _n(t, null, u, i)))
        : je(e, t, u, i),
      (t.memoizedState = r.state),
      l && bu(t, n, !0),
      t.child
    );
  }
  function Xs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ju(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ju(e, t.context, !1),
      Ii(e, t.containerInfo));
  }
  function Zs(e, t, n, r, l) {
    return (Nn(), zi(l), (t.flags |= 256), je(e, t, n, r), t.child);
  }
  var eo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function to(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = le.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      u;
    if (
      ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      X(le, l & 1),
      e === null)
    )
      return (
        Pi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((o = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (o = { mode: "hidden", children: o }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = Nl(o, r, 0, null)),
                (e = un(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = to(n)),
                (t.memoizedState = eo),
                e)
              : no(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return Nf(e, t, o, r, u, l, n);
    if (i) {
      ((i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (o & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (i = Qt(u, i)) : ((i = un(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? to(n)
            : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = eo),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Qt(i, { mode: "visible", children: r.children })),
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
  function no(e, t) {
    return (
      (t = Nl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fl(e, t, n, r) {
    return (
      r !== null && zi(r),
      _n(t, e.child, null, n),
      (e = no(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Nf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zi(Error(m(422)))), fl(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = Nl({ mode: "visible", children: r.children }, l, 0, null)),
            (i = un(i, l, o, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && _n(t, e.child, null, o),
            (t.child.memoizedState = to(o)),
            (t.memoizedState = eo),
            i);
    if ((t.mode & 1) === 0) return fl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (i = Error(m(419))), (r = Zi(i, r, void 0)), fl(e, t, o, r));
    }
    if (((u = (o & e.childLanes) !== 0), Re || u)) {
      if (((r = ve), r !== null)) {
        switch (o & -o) {
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
        ((l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
          l !== 0 && l !== i.retryLane && ((i.retryLane = l), Et(e, l), st(r, e, l, -1)));
      }
      return (wo(), (r = Zi(Error(m(421)))), fl(e, t, o, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Mf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = i.treeContext),
        (We = Dt(l.nextSibling)),
        (He = t),
        (te = !0),
        (lt = null),
        e !== null &&
          ((Ke[Ye++] = St),
          (Ke[Ye++] = kt),
          (Ke[Ye++] = Jt),
          (St = e.id),
          (kt = e.overflow),
          (Jt = t)),
        (t = no(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function qs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ri(e.return, t, n));
  }
  function ro(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function bs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((je(e, t, r.children, n), (r = le.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && qs(e, n, t);
          else if (e.tag === 19) qs(e, n, t);
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
            ro(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && ll(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ro(t, !0, n, null, i);
          break;
        case "together":
          ro(t, !1, null, null, void 0);
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
      (e !== null && (t.dependencies = e.dependencies), (nn |= t.lanes), (n & t.childLanes) === 0)
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
  function _f(e, t, n) {
    switch (t.tag) {
      case 3:
        (Xs(t), Nn());
        break;
      case 5:
        ps(t);
        break;
      case 1:
        Fe(t.type) && Gr(t);
        break;
      case 4:
        Ii(t, t.stateNode.containerInfo);
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
              ? Js(e, t, n)
              : (X(le, le.current & 1), (e = _t(e, t, n)), e !== null ? e.sibling : null);
        X(le, le.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return bs(e, t, n);
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
        return ((t.lanes = 0), Ks(e, t, n));
    }
    return _t(e, t, n);
  }
  var ea, lo, ta, na;
  ((ea = function (e, t) {
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
    (lo = function () {}),
    (ta = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(mt.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = Rl(e, l)), (r = Rl(e, r)), (i = []));
            break;
          case "select":
            ((l = C({}, l, { value: void 0 })), (r = C({}, r, { value: void 0 })), (i = []));
            break;
          case "textarea":
            ((l = Il(e, l)), (r = Il(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qr);
        }
        Ul(n, r);
        var o;
        n = null;
        for (h in l)
          if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null)
            if (h === "style") {
              var u = l[h];
              for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              h !== "dangerouslySetInnerHTML" &&
                h !== "children" &&
                h !== "suppressContentEditableWarning" &&
                h !== "suppressHydrationWarning" &&
                h !== "autoFocus" &&
                (F.hasOwnProperty(h) ? i || (i = []) : (i = i || []).push(h, null));
        for (h in r) {
          var s = r[h];
          if (
            ((u = l != null ? l[h] : void 0),
            r.hasOwnProperty(h) && s !== u && (s != null || u != null))
          )
            if (h === "style")
              if (u) {
                for (o in u)
                  !u.hasOwnProperty(o) ||
                    (s && s.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
              } else (n || (i || (i = []), i.push(h, n)), (n = s));
            else
              h === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  s != null && u !== s && (i = i || []).push(h, s))
                : h === "children"
                  ? (typeof s != "string" && typeof s != "number") || (i = i || []).push(h, "" + s)
                  : h !== "suppressContentEditableWarning" &&
                    h !== "suppressHydrationWarning" &&
                    (F.hasOwnProperty(h)
                      ? (s != null && h === "onScroll" && Z("scroll", e), i || u === s || (i = []))
                      : (i = i || []).push(h, s));
        }
        n && (i = i || []).push("style", n);
        var h = i;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (na = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function pr(e, t) {
    if (!te)
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
  function Ne(e) {
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
  function Cf(e, t, n) {
    var r = t.pendingProps;
    switch ((Ci(t), t.tag)) {
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
        return (Ne(t), null);
      case 1:
        return (Fe(t.type) && Yr(), Ne(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Pn(),
          J(Te),
          J(ke),
          Ai(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (qr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), lt !== null && (vo(lt), (lt = null)))),
          lo(e, t),
          Ne(t),
          null
        );
      case 5:
        Mi(t);
        var l = en(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ta(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Ne(t), null);
          }
          if (((e = en(mt.current)), qr(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[pt] = t), (r[rr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (Z("cancel", r), Z("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) Z(er[l], r);
                break;
              case "source":
                Z("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (Z("error", r), Z("load", r));
                break;
              case "details":
                Z("toggle", r);
                break;
              case "input":
                (Io(r, i), Z("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }), Z("invalid", r));
                break;
              case "textarea":
                (Ao(r, i), Z("invalid", r));
            }
            (Ul(n, i), (l = null));
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var u = i[o];
                o === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (i.suppressHydrationWarning !== !0 && $r(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (i.suppressHydrationWarning !== !0 && $r(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : F.hasOwnProperty(o) && u != null && o === "onScroll" && Z("scroll", r);
              }
            switch (n) {
              case "input":
                (Sr(r), Uo(r, i, !0));
                break;
              case "textarea":
                (Sr(r), Wo(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Qr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Bo(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = o.createElement(n, { is: r.is }))
                    : ((e = o.createElement(n)),
                      n === "select" &&
                        ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[pt] = t),
              (e[rr] = r),
              ea(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = Al(n, r)), n)) {
                case "dialog":
                  (Z("cancel", e), Z("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Z("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < er.length; l++) Z(er[l], e);
                  l = r;
                  break;
                case "source":
                  (Z("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (Z("error", e), Z("load", e), (l = r));
                  break;
                case "details":
                  (Z("toggle", e), (l = r));
                  break;
                case "input":
                  (Io(e, r), (l = Rl(e, r)), Z("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = C({}, r, { value: void 0 })),
                    Z("invalid", e));
                  break;
                case "textarea":
                  (Ao(e, r), (l = Il(e, r)), Z("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ul(n, l), (u = l));
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var s = u[i];
                  i === "style"
                    ? Qo(e, s)
                    : i === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Vo(e, s))
                      : i === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && On(e, s)
                          : typeof s == "number" && On(e, "" + s)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (F.hasOwnProperty(i)
                            ? s != null && i === "onScroll" && Z("scroll", e)
                            : s != null && be(e, i, s, o));
                }
              switch (n) {
                case "input":
                  (Sr(e), Uo(e, r, !1));
                  break;
                case "textarea":
                  (Sr(e), Wo(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? an(e, !!r.multiple, i, !1)
                      : r.defaultValue != null && an(e, !!r.multiple, r.defaultValue, !0));
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
        return (Ne(t), null);
      case 6:
        if (e && t.stateNode != null) na(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = en(sr.current)), en(mt.current), qr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (i = r.nodeValue !== n) && ((e = He), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $r(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[pt] = t),
              (t.stateNode = r));
        }
        return (Ne(t), null);
      case 13:
        if (
          (J(le),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && We !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (is(), Nn(), (t.flags |= 98560), (i = !1));
          else if (((i = qr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(m(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(m(317));
              i[pt] = t;
            } else (Nn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ne(t), (i = !1));
          } else (lt !== null && (vo(lt), (lt = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (le.current & 1) !== 0 ? pe === 0 && (pe = 3) : wo())),
            t.updateQueue !== null && (t.flags |= 4),
            Ne(t),
            null);
      case 4:
        return (Pn(), lo(e, t), e === null && tr(t.stateNode.containerInfo), Ne(t), null);
      case 10:
        return (Fi(t.type._context), Ne(t), null);
      case 17:
        return (Fe(t.type) && Yr(), Ne(t), null);
      case 19:
        if ((J(le), (i = t.memoizedState), i === null)) return (Ne(t), null);
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) pr(i, !1);
          else {
            if (pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((o = ll(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      pr(i, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (X(le, (le.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              se() > Fn &&
              ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ll(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(i, !0),
                i.tail === null && i.tailMode === "hidden" && !o.alternate && !te)
              )
                return (Ne(t), null);
            } else
              2 * se() - i.renderingStartTime > Fn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = se()),
            (t.sibling = null),
            (n = le.current),
            X(le, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ne(t), null);
      case 22:
      case 23:
        return (
          yo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Be & 1073741824) !== 0 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ne(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function jf(e, t) {
    switch ((Ci(t), t.tag)) {
      case 1:
        return (
          Fe(t.type) && Yr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pn(),
          J(Te),
          J(ke),
          Ai(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Mi(t), null);
      case 13:
        if ((J(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          Nn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (J(le), null);
      case 4:
        return (Pn(), null);
      case 10:
        return (Fi(t.type._context), null);
      case 22:
      case 23:
        return (yo(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pl = !1,
    _e = !1,
    Pf = typeof WeakSet == "function" ? WeakSet : Set,
    _ = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ue(e, t, r);
        }
      else n.current = null;
  }
  function io(e, t, n) {
    try {
      n();
    } catch (r) {
      ue(e, t, r);
    }
  }
  var ra = !1;
  function zf(e, t) {
    if (((gi = Rr), (e = Ou()), ai(e))) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              u = -1,
              s = -1,
              h = 0,
              w = 0,
              x = e,
              v = null;
            t: for (;;) {
              for (
                var E;
                x !== n || (l !== 0 && x.nodeType !== 3) || (u = o + l),
                  x !== i || (r !== 0 && x.nodeType !== 3) || (s = o + r),
                  x.nodeType === 3 && (o += x.nodeValue.length),
                  (E = x.firstChild) !== null;
              )
                ((v = x), (x = E));
              for (;;) {
                if (x === e) break t;
                if (
                  (v === n && ++h === l && (u = o),
                  v === i && ++w === r && (s = o),
                  (E = x.nextSibling) !== null)
                )
                  break;
                ((x = v), (v = x.parentNode));
              }
              x = E;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (yi = { focusedElem: e, selectionRange: n }, Rr = !1, _ = t; _ !== null;)
      if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (_ = e));
      else
        for (; _ !== null;) {
          t = _;
          try {
            var j = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (j !== null) {
                    var P = j.memoizedProps,
                      ae = j.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? P : it(t.type, P),
                        ae,
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
          } catch (S) {
            ue(t, t.return, S);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (_ = e));
            break;
          }
          _ = t.return;
        }
    return ((j = ra), (ra = !1), j);
  }
  function mr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && io(t, n, i));
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
  function oo(e) {
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
  function la(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), la(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[pt], delete t[rr], delete t[ki], delete t[ff], delete t[df])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ia(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function oa(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || ia(e.return)) return null;
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
  function uo(e, t, n) {
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
      for (uo(e, t, n), e = e.sibling; e !== null;) (uo(e, t, n), (e = e.sibling));
  }
  function so(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (so(e, t, n), e = e.sibling; e !== null;) (so(e, t, n), (e = e.sibling));
  }
  var we = null,
    ot = !1;
  function Ht(e, t, n) {
    for (n = n.child; n !== null;) (ua(e, t, n), (n = n.sibling));
  }
  function ua(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(jr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        _e || Ln(n, t);
      case 6:
        var r = we,
          l = ot;
        ((we = null),
          Ht(e, t, n),
          (we = r),
          (ot = l),
          we !== null &&
            (ot
              ? ((e = we),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : we.removeChild(n.stateNode)));
        break;
      case 18:
        we !== null &&
          (ot
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8 ? Si(e.parentNode, n) : e.nodeType === 1 && Si(e, n),
              Kn(e))
            : Si(we, n.stateNode));
        break;
      case 4:
        ((r = we),
          (l = ot),
          (we = n.stateNode.containerInfo),
          (ot = !0),
          Ht(e, t, n),
          (we = r),
          (ot = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_e && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            ((i = i.tag),
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && io(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        Ht(e, t, n);
        break;
      case 1:
        if (!_e && (Ln(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            ue(n, t, u);
          }
        Ht(e, t, n);
        break;
      case 21:
        Ht(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((_e = (r = _e) || n.memoizedState !== null), Ht(e, t, n), (_e = r))
          : Ht(e, t, n);
        break;
      default:
        Ht(e, t, n);
    }
  }
  function sa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Pf()),
        t.forEach(function (r) {
          var l = Uf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function ut(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            o = t,
            u = o;
          e: for (; u !== null;) {
            switch (u.tag) {
              case 5:
                ((we = u.stateNode), (ot = !1));
                break e;
              case 3:
                ((we = u.stateNode.containerInfo), (ot = !0));
                break e;
              case 4:
                ((we = u.stateNode.containerInfo), (ot = !0));
                break e;
            }
            u = u.return;
          }
          if (we === null) throw Error(m(160));
          (ua(i, o, l), (we = null), (ot = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (h) {
          ue(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (aa(t, e), (t = t.sibling));
  }
  function aa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ut(t, e), vt(e), r & 4)) {
          try {
            (mr(3, e, e.return), ml(3, e));
          } catch (P) {
            ue(e, e.return, P);
          }
          try {
            mr(5, e, e.return);
          } catch (P) {
            ue(e, e.return, P);
          }
        }
        break;
      case 1:
        (ut(t, e), vt(e), r & 512 && n !== null && Ln(n, n.return));
        break;
      case 5:
        if ((ut(t, e), vt(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            On(l, "");
          } catch (P) {
            ue(e, e.return, P);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (u === "input" && i.type === "radio" && i.name != null && Mo(l, i), Al(u, o));
              var h = Al(u, i);
              for (o = 0; o < s.length; o += 2) {
                var w = s[o],
                  x = s[o + 1];
                w === "style"
                  ? Qo(l, x)
                  : w === "dangerouslySetInnerHTML"
                    ? Vo(l, x)
                    : w === "children"
                      ? On(l, x)
                      : be(l, w, x, h);
              }
              switch (u) {
                case "input":
                  Dl(l, i);
                  break;
                case "textarea":
                  Ho(l, i);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var E = i.value;
                  E != null
                    ? an(l, !!i.multiple, E, !1)
                    : v !== !!i.multiple &&
                      (i.defaultValue != null
                        ? an(l, !!i.multiple, i.defaultValue, !0)
                        : an(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[rr] = i;
            } catch (P) {
              ue(e, e.return, P);
            }
        }
        break;
      case 6:
        if ((ut(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (P) {
            ue(e, e.return, P);
          }
        }
        break;
      case 3:
        if ((ut(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Kn(t.containerInfo);
          } catch (P) {
            ue(e, e.return, P);
          }
        break;
      case 4:
        (ut(t, e), vt(e));
        break;
      case 13:
        (ut(t, e),
          vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (fo = se())),
          r & 4 && sa(e));
        break;
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((_e = (h = _e) || w), ut(t, e), (_e = h)) : ut(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null), (e.stateNode.isHidden = h) && !w && (e.mode & 1) !== 0)
          )
            for (_ = e, w = e.child; w !== null;) {
              for (x = _ = w; _ !== null;) {
                switch (((v = _), (E = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, v, v.return);
                    break;
                  case 1:
                    Ln(v, v.return);
                    var j = v.stateNode;
                    if (typeof j.componentWillUnmount == "function") {
                      ((r = v), (n = v.return));
                      try {
                        ((t = r),
                          (j.props = t.memoizedProps),
                          (j.state = t.memoizedState),
                          j.componentWillUnmount());
                      } catch (P) {
                        ue(r, n, P);
                      }
                    }
                    break;
                  case 5:
                    Ln(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      da(x);
                      continue;
                    }
                }
                E !== null ? ((E.return = v), (_ = E)) : da(x);
              }
              w = w.sibling;
            }
          e: for (w = null, x = e; ;) {
            if (x.tag === 5) {
              if (w === null) {
                w = x;
                try {
                  ((l = x.stateNode),
                    h
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((u = x.stateNode),
                        (s = x.memoizedProps.style),
                        (o = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (u.style.display = $o("display", o))));
                } catch (P) {
                  ue(e, e.return, P);
                }
              }
            } else if (x.tag === 6) {
              if (w === null)
                try {
                  x.stateNode.nodeValue = h ? "" : x.memoizedProps;
                } catch (P) {
                  ue(e, e.return, P);
                }
            } else if (
              ((x.tag !== 22 && x.tag !== 23) || x.memoizedState === null || x === e) &&
              x.child !== null
            ) {
              ((x.child.return = x), (x = x.child));
              continue;
            }
            if (x === e) break e;
            for (; x.sibling === null;) {
              if (x.return === null || x.return === e) break e;
              (w === x && (w = null), (x = x.return));
            }
            (w === x && (w = null), (x.sibling.return = x.return), (x = x.sibling));
          }
        }
        break;
      case 19:
        (ut(t, e), vt(e), r & 4 && sa(e));
        break;
      case 21:
        break;
      default:
        (ut(t, e), vt(e));
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (ia(n)) {
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
            r.flags & 32 && (On(l, ""), (r.flags &= -33));
            var i = oa(e);
            so(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = oa(e);
            uo(e, u, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ue(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lf(e, t, n) {
    ((_ = e), ca(e));
  }
  function ca(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null;) {
      var l = _,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || pl;
        if (!o) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || _e;
          u = pl;
          var h = _e;
          if (((pl = o), (_e = s) && !h))
            for (_ = l; _ !== null;)
              ((o = _),
                (s = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? pa(l)
                  : s !== null
                    ? ((s.return = o), (_ = s))
                    : pa(l));
          for (; i !== null;) ((_ = i), ca(i), (i = i.sibling));
          ((_ = l), (pl = u), (_e = h));
        }
        fa(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), (_ = i)) : fa(e);
    }
  }
  function fa(e) {
    for (; _ !== null;) {
      var t = _;
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
                      t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = t.updateQueue;
                i !== null && ds(t, i, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ds(t, o, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
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
                  var h = t.alternate;
                  if (h !== null) {
                    var w = h.memoizedState;
                    if (w !== null) {
                      var x = w.dehydrated;
                      x !== null && Kn(x);
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
          _e || (t.flags & 512 && oo(t));
        } catch (v) {
          ue(t, t.return, v);
        }
      }
      if (t === e) {
        _ = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (_ = n));
        break;
      }
      _ = t.return;
    }
  }
  function da(e) {
    for (; _ !== null;) {
      var t = _;
      if (t === e) {
        _ = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (_ = n));
        break;
      }
      _ = t.return;
    }
  }
  function pa(e) {
    for (; _ !== null;) {
      var t = _;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ml(4, t);
            } catch (s) {
              ue(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ue(t, l, s);
              }
            }
            var i = t.return;
            try {
              oo(t);
            } catch (s) {
              ue(t, i, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              oo(t);
            } catch (s) {
              ue(t, o, s);
            }
        }
      } catch (s) {
        ue(t, t.return, s);
      }
      if (t === e) {
        _ = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (_ = u));
        break;
      }
      _ = t.return;
    }
  }
  var Tf = Math.ceil,
    hl = Se.ReactCurrentDispatcher,
    ao = Se.ReactCurrentOwner,
    Ze = Se.ReactCurrentBatchConfig,
    H = 0,
    ve = null,
    fe = null,
    xe = 0,
    Be = 0,
    Tn = Ot(0),
    pe = 0,
    hr = null,
    nn = 0,
    vl = 0,
    co = 0,
    vr = null,
    De = null,
    fo = 0,
    Fn = 1 / 0,
    Ct = null,
    gl = !1,
    po = null,
    Wt = null,
    yl = !1,
    Bt = null,
    wl = 0,
    gr = 0,
    mo = null,
    xl = -1,
    Sl = 0;
  function Pe() {
    return (H & 6) !== 0 ? se() : xl !== -1 ? xl : (xl = se());
  }
  function Vt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (H & 2) !== 0 && xe !== 0
        ? xe & -xe
        : mf.transition !== null
          ? (Sl === 0 && (Sl = ou()), Sl)
          : ((e = K), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : hu(e.type))), e);
  }
  function st(e, t, n, r) {
    if (50 < gr) throw ((gr = 0), (mo = null), Error(m(185)));
    (Wn(e, n, r),
      ((H & 2) === 0 || e !== ve) &&
        (e === ve && ((H & 2) === 0 && (vl |= n), pe === 4 && $t(e, xe)),
        Oe(e, r),
        n === 1 && H === 0 && (t.mode & 1) === 0 && ((Fn = se() + 500), Xr && Mt())));
  }
  function Oe(e, t) {
    var n = e.callbackNode;
    pc(e, t);
    var r = Lr(e, e === ve ? xe : 0);
    if (r === 0) (n !== null && ru(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ru(n), t === 1))
        (e.tag === 0 ? pf(ha.bind(null, e)) : es(ha.bind(null, e)),
          af(function () {
            (H & 6) === 0 && Mt();
          }),
          (n = null));
      else {
        switch (uu(r)) {
          case 1:
            n = Kl;
            break;
          case 4:
            n = lu;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = iu;
            break;
          default:
            n = Cr;
        }
        n = Ea(n, ma.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function ma(e, t) {
    if (((xl = -1), (Sl = 0), (H & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n) return null;
    var r = Lr(e, e === ve ? xe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = kl(e, r);
    else {
      t = r;
      var l = H;
      H |= 2;
      var i = ga();
      (ve !== e || xe !== t) && ((Ct = null), (Fn = se() + 500), ln(e, t));
      do
        try {
          Df();
          break;
        } catch (u) {
          va(e, u);
        }
      while (!0);
      (Ti(), (hl.current = i), (H = l), fe !== null ? (t = 0) : ((ve = null), (xe = 0), (t = pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Yl(e)), l !== 0 && ((r = l), (t = ho(e, l)))), t === 1))
        throw ((n = hr), ln(e, 0), $t(e, r), Oe(e, se()), n);
      if (t === 6) $t(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Ff(l) &&
            ((t = kl(e, r)),
            t === 2 && ((i = Yl(e)), i !== 0 && ((r = i), (t = ho(e, i)))),
            t === 1))
        )
          throw ((n = hr), ln(e, 0), $t(e, r), Oe(e, se()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            on(e, De, Ct);
            break;
          case 3:
            if (($t(e, r), (r & 130023424) === r && ((t = fo + 500 - se()), 10 < t))) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Pe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = xi(on.bind(null, e, De, Ct), t);
              break;
            }
            on(e, De, Ct);
            break;
          case 4:
            if (($t(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var o = 31 - nt(r);
              ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
            }
            if (
              ((r = l),
              (r = se() - r),
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
                            : 1960 * Tf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = xi(on.bind(null, e, De, Ct), r);
              break;
            }
            on(e, De, Ct);
            break;
          case 5:
            on(e, De, Ct);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (Oe(e, se()), e.callbackNode === n ? ma.bind(null, e) : null);
  }
  function ho(e, t) {
    var n = vr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = kl(e, t)),
      e !== 2 && ((t = De), (De = n), t !== null && vo(t)),
      e
    );
  }
  function vo(e) {
    De === null ? (De = e) : De.push.apply(De, e);
  }
  function Ff(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!rt(i(), l)) return !1;
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
  function $t(e, t) {
    for (
      t &= ~co, t &= ~vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - nt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ha(e) {
    if ((H & 6) !== 0) throw Error(m(327));
    Rn();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return (Oe(e, se()), null);
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && ((t = r), (n = ho(e, r)));
    }
    if (n === 1) throw ((n = hr), ln(e, 0), $t(e, t), Oe(e, se()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      on(e, De, Ct),
      Oe(e, se()),
      null
    );
  }
  function go(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      ((H = n), H === 0 && ((Fn = se() + 500), Xr && Mt()));
    }
  }
  function rn(e) {
    Bt !== null && Bt.tag === 0 && (H & 6) === 0 && Rn();
    var t = H;
    H |= 1;
    var n = Ze.transition,
      r = K;
    try {
      if (((Ze.transition = null), (K = 1), e)) return e();
    } finally {
      ((K = r), (Ze.transition = n), (H = t), (H & 6) === 0 && Mt());
    }
  }
  function yo() {
    ((Be = Tn.current), J(Tn));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), sf(n)), fe !== null))
      for (n = fe.return; n !== null;) {
        var r = n;
        switch ((Ci(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Yr());
            break;
          case 3:
            (Pn(), J(Te), J(ke), Ai());
            break;
          case 5:
            Mi(r);
            break;
          case 4:
            Pn();
            break;
          case 13:
            J(le);
            break;
          case 19:
            J(le);
            break;
          case 10:
            Fi(r.type._context);
            break;
          case 22:
          case 23:
            yo();
        }
        n = n.return;
      }
    if (
      ((ve = e),
      (fe = e = Qt(e.current, null)),
      (xe = Be = t),
      (pe = 0),
      (hr = null),
      (co = vl = nn = 0),
      (De = vr = null),
      bt !== null)
    ) {
      for (t = 0; t < bt.length; t++)
        if (((n = bt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            ((i.next = l), (r.next = o));
          }
          n.pending = r;
        }
      bt = null;
    }
    return e;
  }
  function va(e, t) {
    do {
      var n = fe;
      try {
        if ((Ti(), (il.current = al), ol)) {
          for (var r = ie.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ol = !1;
        }
        if (
          ((tn = 0),
          (he = de = ie = null),
          (ar = !1),
          (cr = 0),
          (ao.current = null),
          n === null || n.return === null)
        ) {
          ((pe = 1), (hr = t), (fe = null));
          break;
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            s = t;
          if (
            ((t = xe),
            (u.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var h = s,
              w = u,
              x = w.tag;
            if ((w.mode & 1) === 0 && (x === 0 || x === 11 || x === 15)) {
              var v = w.alternate;
              v
                ? ((w.updateQueue = v.updateQueue),
                  (w.memoizedState = v.memoizedState),
                  (w.lanes = v.lanes))
                : ((w.updateQueue = null), (w.memoizedState = null));
            }
            var E = Ws(o);
            if (E !== null) {
              ((E.flags &= -257), Bs(E, o, u, i, t), E.mode & 1 && Hs(i, h, t), (t = E), (s = h));
              var j = t.updateQueue;
              if (j === null) {
                var P = new Set();
                (P.add(s), (t.updateQueue = P));
              } else j.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Hs(i, h, t), wo());
                break e;
              }
              s = Error(m(426));
            }
          } else if (te && u.mode & 1) {
            var ae = Ws(o);
            if (ae !== null) {
              ((ae.flags & 65536) === 0 && (ae.flags |= 256), Bs(ae, o, u, i, t), zi(zn(s, u)));
              break e;
            }
          }
          ((i = s = zn(s, u)),
            pe !== 4 && (pe = 2),
            vr === null ? (vr = [i]) : vr.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var f = Us(i, s, t);
                fs(i, f);
                break e;
              case 1:
                u = s;
                var a = i.type,
                  d = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Wt === null || !Wt.has(d))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var S = As(i, u, t);
                  fs(i, S);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        wa(n);
      } catch (z) {
        ((t = z), fe === n && n !== null && (fe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ga() {
    var e = hl.current;
    return ((hl.current = al), e === null ? al : e);
  }
  function wo() {
    ((pe === 0 || pe === 3 || pe === 2) && (pe = 4),
      ve === null || ((nn & 268435455) === 0 && (vl & 268435455) === 0) || $t(ve, xe));
  }
  function kl(e, t) {
    var n = H;
    H |= 2;
    var r = ga();
    (ve !== e || xe !== t) && ((Ct = null), ln(e, t));
    do
      try {
        Rf();
        break;
      } catch (l) {
        va(e, l);
      }
    while (!0);
    if ((Ti(), (H = n), (hl.current = r), fe !== null)) throw Error(m(261));
    return ((ve = null), (xe = 0), pe);
  }
  function Rf() {
    for (; fe !== null;) ya(fe);
  }
  function Df() {
    for (; fe !== null && !lc();) ya(fe);
  }
  function ya(e) {
    var t = ka(e.alternate, e, Be);
    ((e.memoizedProps = e.pendingProps), t === null ? wa(e) : (fe = t), (ao.current = null));
  }
  function wa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Cf(n, t, Be)), n !== null)) {
          fe = n;
          return;
        }
      } else {
        if (((n = jf(n, t)), n !== null)) {
          ((n.flags &= 32767), (fe = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((pe = 6), (fe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    pe === 0 && (pe = 5);
  }
  function on(e, t, n) {
    var r = K,
      l = Ze.transition;
    try {
      ((Ze.transition = null), (K = 1), Of(e, t, n, r));
    } finally {
      ((Ze.transition = l), (K = r));
    }
    return null;
  }
  function Of(e, t, n, r) {
    do Rn();
    while (Bt !== null);
    if ((H & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (mc(e, i),
      e === ve && ((fe = ve = null), (xe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        yl ||
        ((yl = !0),
        Ea(Cr, function () {
          return (Rn(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = Ze.transition), (Ze.transition = null));
      var o = K;
      K = 1;
      var u = H;
      ((H |= 4),
        (ao.current = null),
        zf(e, n),
        aa(n, e),
        ef(yi),
        (Rr = !!gi),
        (yi = gi = null),
        (e.current = n),
        Lf(n),
        ic(),
        (H = u),
        (K = o),
        (Ze.transition = i));
    } else e.current = n;
    if (
      (yl && ((yl = !1), (Bt = e), (wl = l)),
      (i = e.pendingLanes),
      i === 0 && (Wt = null),
      sc(n.stateNode),
      Oe(e, se()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (gl) throw ((gl = !1), (e = po), (po = null), e);
    return (
      (wl & 1) !== 0 && e.tag !== 0 && Rn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === mo ? gr++ : ((gr = 0), (mo = e))) : (gr = 0),
      Mt(),
      null
    );
  }
  function Rn() {
    if (Bt !== null) {
      var e = uu(wl),
        t = Ze.transition,
        n = K;
      try {
        if (((Ze.transition = null), (K = 16 > e ? 16 : e), Bt === null)) var r = !1;
        else {
          if (((e = Bt), (Bt = null), (wl = 0), (H & 6) !== 0)) throw Error(m(331));
          var l = H;
          for (H |= 4, _ = e.current; _ !== null;) {
            var i = _,
              o = i.child;
            if ((_.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var h = u[s];
                  for (_ = h; _ !== null;) {
                    var w = _;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, w, i);
                    }
                    var x = w.child;
                    if (x !== null) ((x.return = w), (_ = x));
                    else
                      for (; _ !== null;) {
                        w = _;
                        var v = w.sibling,
                          E = w.return;
                        if ((la(w), w === h)) {
                          _ = null;
                          break;
                        }
                        if (v !== null) {
                          ((v.return = E), (_ = v));
                          break;
                        }
                        _ = E;
                      }
                  }
                }
                var j = i.alternate;
                if (j !== null) {
                  var P = j.child;
                  if (P !== null) {
                    j.child = null;
                    do {
                      var ae = P.sibling;
                      ((P.sibling = null), (P = ae));
                    } while (P !== null);
                  }
                }
                _ = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) ((o.return = i), (_ = o));
            else
              e: for (; _ !== null;) {
                if (((i = _), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  ((f.return = i.return), (_ = f));
                  break e;
                }
                _ = i.return;
              }
          }
          var a = e.current;
          for (_ = a; _ !== null;) {
            o = _;
            var d = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = o), (_ = d));
            else
              e: for (o = a; _ !== null;) {
                if (((u = _), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ml(9, u);
                    }
                  } catch (z) {
                    ue(u, u.return, z);
                  }
                if (u === o) {
                  _ = null;
                  break e;
                }
                var S = u.sibling;
                if (S !== null) {
                  ((S.return = u.return), (_ = S));
                  break e;
                }
                _ = u.return;
              }
          }
          if (((H = l), Mt(), dt && typeof dt.onPostCommitFiberRoot == "function"))
            try {
              dt.onPostCommitFiberRoot(jr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((K = n), (Ze.transition = t));
      }
    }
    return !1;
  }
  function xa(e, t, n) {
    ((t = zn(n, t)),
      (t = Us(e, t, 1)),
      (e = At(e, t, 1)),
      (t = Pe()),
      e !== null && (Wn(e, 1, t), Oe(e, t)));
  }
  function ue(e, t, n) {
    if (e.tag === 3) xa(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          xa(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r)))
          ) {
            ((e = zn(n, e)),
              (e = As(t, e, 1)),
              (t = At(t, e, 1)),
              (e = Pe()),
              t !== null && (Wn(t, 1, e), Oe(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function If(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Pe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (xe & n) === n &&
        (pe === 4 || (pe === 3 && (xe & 130023424) === xe && 500 > se() - fo)
          ? ln(e, 0)
          : (co |= n)),
      Oe(e, t));
  }
  function Sa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = Pe();
    ((e = Et(e, t)), e !== null && (Wn(e, t, n), Oe(e, n)));
  }
  function Mf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Sa(e, n));
  }
  function Uf(e, t) {
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
    (r !== null && r.delete(t), Sa(e, n));
  }
  var ka;
  ka = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Te.current) Re = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Re = !1), _f(e, t, n));
        Re = (e.flags & 131072) !== 0;
      }
    else ((Re = !1), te && (t.flags & 1048576) !== 0 && ts(t, Jr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (dl(e, t), (e = t.pendingProps));
        var l = Sn(t, ke.current);
        (jn(t, n), (l = Bi(null, t, r, e, l, n)));
        var i = Vi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Fe(r) ? ((i = !0), Gr(t)) : (i = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Oi(t),
              (l.updater = cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Xi(t, r, e, n),
              (t = bi(null, t, r, !0, i, n)))
            : ((t.tag = 0), te && i && _i(t), je(null, t, l, n), (t = t.child)),
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
            (l = t.tag = Hf(r)),
            (e = it(r, e)),
            l)
          ) {
            case 0:
              t = qi(null, t, r, e, n);
              break e;
            case 1:
              t = Gs(null, t, r, e, n);
              break e;
            case 11:
              t = Vs(null, t, r, e, n);
              break e;
            case 14:
              t = $s(null, t, r, it(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          qi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          Gs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Xs(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            cs(e, t),
            rl(t, r, null, n));
          var o = t.memoizedState;
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((l = zn(Error(m(423)), t)), (t = Zs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = zn(Error(m(424)), t)), (t = Zs(e, t, r, n, l)));
              break e;
            } else
              for (
                We = Dt(t.stateNode.containerInfo.firstChild),
                  He = t,
                  te = !0,
                  lt = null,
                  n = ss(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Nn(), r === l)) {
              t = _t(e, t, n);
              break e;
            }
            je(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ps(t),
          e === null && Pi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          wi(r, l) ? (o = null) : i !== null && wi(r, i) && (t.flags |= 32),
          Ys(e, t),
          je(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && Pi(t), null);
      case 13:
        return Js(e, t, n);
      case 4:
        return (
          Ii(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = _n(t, null, r, n)) : je(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          Vs(e, t, r, l, n)
        );
      case 7:
        return (je(e, t, t.pendingProps, n), t.child);
      case 8:
        return (je(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (je(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            X(el, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (rt(i.value, o)) {
              if (i.children === l.children && !Te.current) {
                t = _t(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null;) {
                var u = i.dependencies;
                if (u !== null) {
                  o = i.child;
                  for (var s = u.firstContext; s !== null;) {
                    if (s.context === r) {
                      if (i.tag === 1) {
                        ((s = Nt(-1, n & -n)), (s.tag = 2));
                        var h = i.updateQueue;
                        if (h !== null) {
                          h = h.shared;
                          var w = h.pending;
                          (w === null ? (s.next = s) : ((s.next = w.next), (w.next = s)),
                            (h.pending = s));
                        }
                      }
                      ((i.lanes |= n),
                        (s = i.alternate),
                        s !== null && (s.lanes |= n),
                        Ri(i.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(m(341));
                  ((o.lanes |= n),
                    (u = o.alternate),
                    u !== null && (u.lanes |= n),
                    Ri(o, n, t),
                    (o = i.sibling));
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                  for (o = i; o !== null;) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((i = o.sibling), i !== null)) {
                      ((i.return = o.return), (o = i));
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          (je(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          jn(t, n),
          (l = Ge(l)),
          (r = r(l)),
          (t.flags |= 1),
          je(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = it(r, t.pendingProps)), (l = it(r.type, l)), $s(e, t, r, l, n));
      case 15:
        return Qs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          dl(e, t),
          (t.tag = 1),
          Fe(r) ? ((e = !0), Gr(t)) : (e = !1),
          jn(t, n),
          Is(t, r, l),
          Xi(t, r, l, n),
          bi(null, t, r, !0, e, n)
        );
      case 19:
        return bs(e, t, n);
      case 22:
        return Ks(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function Ea(e, t) {
    return nu(e, t);
  }
  function Af(e, t, n, r) {
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
    return new Af(e, t, n, r);
  }
  function xo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Hf(e) {
    if (typeof e == "function") return xo(e) ? 1 : 0;
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
  function El(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) xo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case ze:
          return un(n.children, l, i, t);
        case Qe:
          ((o = 8), (l |= 8));
          break;
        case jt:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = jt), (e.lanes = i), e);
        case Me:
          return ((e = Je(13, n, t, l)), (e.elementType = Me), (e.lanes = i), e);
        case tt:
          return ((e = Je(19, n, t, l)), (e.elementType = tt), (e.lanes = i), e);
        case oe:
          return Nl(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case yt:
                o = 10;
                break e;
              case Yt:
                o = 9;
                break e;
              case ct:
                o = 11;
                break e;
              case ft:
                o = 14;
                break e;
              case Le:
                ((o = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return ((t = Je(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
  }
  function un(e, t, n, r) {
    return ((e = Je(7, e, r, t)), (e.lanes = n), e);
  }
  function Nl(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = oe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function So(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function ko(e, t, n) {
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
  function Wf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Gl(0)),
      (this.expirationTimes = Gl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Eo(e, t, n, r, l, i, o, u, s) {
    return (
      (e = new Wf(e, t, n, u, s)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = Je(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Oi(i),
      e
    );
  }
  function Bf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ce,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Na(e) {
    if (!e) return It;
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
            if (Fe(t.type)) {
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
      if (Fe(n)) return qu(e, n, t);
    }
    return t;
  }
  function _a(e, t, n, r, l, i, o, u, s) {
    return (
      (e = Eo(n, r, !0, e, l, i, o, u, s)),
      (e.context = Na(null)),
      (n = e.current),
      (r = Pe()),
      (l = Vt(n)),
      (i = Nt(r, l)),
      (i.callback = t ?? null),
      At(n, i, l),
      (e.current.lanes = l),
      Wn(e, l, r),
      Oe(e, r),
      e
    );
  }
  function _l(e, t, n, r) {
    var l = t.current,
      i = Pe(),
      o = Vt(l);
    return (
      (n = Na(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Nt(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, o)),
      e !== null && (st(e, l, o, i), nl(e, l, o)),
      o
    );
  }
  function Cl(e) {
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
  function No(e, t) {
    (Ca(e, t), (e = e.alternate) && Ca(e, t));
  }
  function Vf() {
    return null;
  }
  var ja =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function _o(e) {
    this._internalRoot = e;
  }
  ((jl.prototype.render = _o.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      _l(e, t, null, null);
    }),
    (jl.prototype.unmount = _o.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (rn(function () {
            _l(null, e, null, null);
          }),
            (t[wt] = null));
        }
      }));
  function jl(e) {
    this._internalRoot = e;
  }
  jl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = cu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      (Tt.splice(n, 0, e), n === 0 && pu(e));
    }
  };
  function Co(e) {
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
  function Pa() {}
  function $f(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var h = Cl(o);
          i.call(h);
        };
      }
      var o = _a(t, r, e, 0, null, !1, !1, "", Pa);
      return (
        (e._reactRootContainer = o),
        (e[wt] = o.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        rn(),
        o
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var h = Cl(s);
        u.call(h);
      };
    }
    var s = Eo(e, 0, !1, null, null, !1, !1, "", Pa);
    return (
      (e._reactRootContainer = s),
      (e[wt] = s.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        _l(t, s, n, r);
      }),
      s
    );
  }
  function zl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var s = Cl(o);
          u.call(s);
        };
      }
      _l(t, o, e, l);
    } else o = $f(n, t, e, l, r);
    return Cl(o);
  }
  ((su = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Hn(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), Oe(t, se()), (H & 6) === 0 && ((Fn = se() + 500), Mt()));
        }
        break;
      case 13:
        (rn(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = Pe();
            st(r, e, 1, l);
          }
        }),
          No(e, 1));
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = Pe();
          st(t, e, 134217728, n);
        }
        No(e, 134217728);
      }
    }),
    (au = function (e) {
      if (e.tag === 13) {
        var t = Vt(e),
          n = Et(e, t);
        if (n !== null) {
          var r = Pe();
          st(n, e, t, r);
        }
        No(e, t);
      }
    }),
    (cu = function () {
      return K;
    }),
    (fu = function (e, t) {
      var n = K;
      try {
        return ((K = e), t());
      } finally {
        K = n;
      }
    }),
    (Bl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Dl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                (Oo(r), Dl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Ho(e, n);
          break;
        case "select":
          ((t = n.value), t != null && an(e, !!n.multiple, t, !1));
      }
    }),
    (Xo = go),
    (Zo = rn));
  var Qf = { usingClientEntryPoint: !1, Events: [lr, wn, Kr, Yo, Go, go] },
    yr = {
      findFiberByHostInstance: Xt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Kf = {
      bundleType: yr.bundleType,
      version: yr.version,
      rendererPackageName: yr.rendererPackageName,
      rendererConfig: yr.rendererConfig,
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
        return ((e = eu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || Vf,
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
        ((jr = Ll.inject(Kf)), (dt = Ll));
      } catch {}
  }
  return (
    (Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qf),
    (Ie.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Co(t)) throw Error(m(200));
      return Bf(e, t, null, n);
    }),
    (Ie.createRoot = function (e, t) {
      if (!Co(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = ja;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Eo(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new _o(t)
      );
    }),
    (Ie.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = eu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ie.flushSync = function (e) {
      return rn(e);
    }),
    (Ie.hydrate = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return zl(null, e, t, !0, n);
    }),
    (Ie.hydrateRoot = function (e, t, n) {
      if (!Co(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = ja;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = _a(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[wt] = t.current),
        tr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new jl(t);
    }),
    (Ie.render = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return zl(null, e, t, !1, n);
    }),
    (Ie.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rn(function () {
            zl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ie.unstable_batchedUpdates = go),
    (Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Pl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return zl(e, t, n, !1, r);
    }),
    (Ie.version = "18.3.1-next-f1338f8080-20240426"),
    Ie
  );
}
var Ia;
function ed() {
  if (Ia) return zo.exports;
  Ia = 1;
  function g() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (N) {
        console.error(N);
      }
  }
  return (g(), (zo.exports = bf()), zo.exports);
}
var Ma;
function td() {
  if (Ma) return Tl;
  Ma = 1;
  var g = ed();
  return ((Tl.createRoot = g.createRoot), (Tl.hydrateRoot = g.hydrateRoot), Tl);
}
var nd = td();
function Ua(g) {
  return `#${g}`;
}
function Aa(g) {
  const N = g.replace(/^\//, "").replace(/\/$/, "");
  return N ? `#/${N}` : "#/";
}
function Ro(g) {
  const N = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return N
    ? N.startsWith("/")
      ? { kind: "route", path: N.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: N }
    : null;
}
function Do(g, N = "smooth") {
  if (typeof document > "u") return !1;
  const m = document.getElementById(g);
  return m ? (m.scrollIntoView({ behavior: N, block: "start" }), !0) : !1;
}
function rd(g, N = "smooth") {
  if (typeof window > "u") return;
  const m = Ua(g);
  if (Do(g, N)) {
    window.history.replaceState(null, "", m);
    return;
  }
  window.location.hash = m;
}
function ld(g) {
  typeof window > "u" || (window.location.hash = Aa(g));
}
function Ha() {
  const g = Ro();
  return (g == null ? void 0 : g.kind) === "route" ? g.path : "";
}
function id(g) {
  return g.kind === "route" ? Aa(g.path) : Ua(g.id);
}
function od(g, N) {
  if ((g.preventDefault(), N.kind === "route")) {
    ld(N.path);
    return;
  }
  rd(N.id);
}
function Wa() {
  if (typeof window > "u") return;
  const g = Ro();
  (g == null ? void 0 : g.kind) === "section" && requestAnimationFrame(() => Do(g.id, "auto"));
}
function Ba(g, N) {
  if (typeof window > "u") return () => {};
  const m = () => {
    const A = Ro();
    if (!A) {
      g("");
      return;
    }
    if (A.kind === "route") {
      g(A.path);
      return;
    }
    (Do(A.id, "smooth"), g(""));
  };
  return (
    m(),
    window.addEventListener("hashchange", m),
    () => window.removeEventListener("hashchange", m)
  );
}
function ud(g = "") {
  const [N, m] = qe.useState(() => (typeof window < "u" ? Ha() : g));
  return (qe.useEffect(() => Ba(m), []), N || g);
}
function sd({ routes: g, defaultRoute: N = "", className: m }) {
  const A = ud(N);
  qe.useEffect(() => {
    Wa();
  }, []);
  const F = A in g ? A : N,
    U = g[F] ?? g[N];
  return p.jsx("div", { className: m, children: U });
}
const ad =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4",
  cd =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85",
  fd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4",
  dd = [
    { label: "Network", path: "network" },
    { label: "Ecosystem", path: "ecosystem" },
    { label: "Rewards", path: "rewards" },
    { label: "Help", path: "help" },
    { label: "News", path: "news" },
    { label: "Wallet", path: "wallet" },
  ],
  pd = [
    {
      name: "Stripe",
      fontFamily: "Georgia, serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: "15px",
    },
    {
      name: "Coinbase",
      fontFamily: "Arial, sans-serif",
      fontWeight: 900,
      letterSpacing: "0.08em",
      fontSize: "13px",
      textTransform: "uppercase",
    },
    {
      name: "Uniswap",
      fontFamily: "Trebuchet MS, sans-serif",
      fontWeight: 600,
      letterSpacing: "0.01em",
      fontSize: "15px",
      fontStyle: "italic",
    },
    {
      name: "Aave",
      fontFamily: "Courier New, monospace",
      fontWeight: 700,
      letterSpacing: "0.12em",
      fontSize: "13px",
      textTransform: "uppercase",
    },
    {
      name: "Compound",
      fontFamily: 'Palatino, "Book Antiqua", serif',
      fontWeight: 400,
      letterSpacing: "-0.01em",
      fontSize: "16px",
    },
    {
      name: "MakerDAO",
      fontFamily: 'Impact, "Arial Narrow", sans-serif',
      fontWeight: 400,
      letterSpacing: "0.04em",
      fontSize: "14px",
    },
    {
      name: "Chainlink",
      fontFamily: "Verdana, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.03em",
      fontSize: "13px",
    },
  ],
  md = [
    {
      name: "Fundamental Labs",
      fontFamily: "Times New Roman, serif",
      fontWeight: 400,
      letterSpacing: "0.02em",
      fontSize: "14px",
    },
    {
      name: "KUCOIN",
      fontFamily: '"Arial Black", sans-serif',
      fontWeight: 900,
      letterSpacing: "0.08em",
      fontSize: "16px",
    },
    {
      name: "NGC",
      fontFamily: "Impact, sans-serif",
      fontWeight: 700,
      letterSpacing: "0.05em",
      fontSize: "18px",
    },
    {
      name: "NxGen",
      fontFamily: "Georgia, serif",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      fontSize: "17px",
    },
    {
      name: "Matter Labs",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      fontSize: "15px",
    },
    {
      name: "DEXTools",
      fontFamily: "Verdana, sans-serif",
      fontWeight: 700,
      letterSpacing: "0.06em",
      fontSize: "14px",
      textTransform: "uppercase",
    },
    {
      name: "NGRAVE",
      fontFamily: "Courier New, monospace",
      fontWeight: 700,
      letterSpacing: "0.18em",
      fontSize: "14px",
    },
    {
      name: "Polychain",
      fontFamily: "Palatino, serif",
      fontWeight: 500,
      letterSpacing: "0.03em",
      fontSize: "15px",
    },
  ];
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hd = (g) => g.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Va = (...g) =>
    g
      .filter((N, m, A) => !!N && N.trim() !== "" && A.indexOf(N) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var vd = {
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
 */ const gd = qe.forwardRef(
  (
    {
      color: g = "currentColor",
      size: N = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: A,
      className: F = "",
      children: U,
      iconNode: ne,
      ...ce
    },
    $,
  ) =>
    qe.createElement(
      "svg",
      {
        ref: $,
        ...vd,
        width: N,
        height: N,
        stroke: g,
        strokeWidth: A ? (Number(m) * 24) / Number(N) : m,
        className: Va("lucide", F),
        ...ce,
      },
      [...ne.map(([ye, me]) => qe.createElement(ye, me)), ...(Array.isArray(U) ? U : [U])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yd = (g, N) => {
  const m = qe.forwardRef(({ className: A, ...F }, U) =>
    qe.createElement(gd, { ref: U, iconNode: N, className: Va(`lucide-${hd(g)}`, A), ...F }),
  );
  return ((m.displayName = `${g}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $a = yd("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
function Fl({ target: g, children: N, className: m, ...A }) {
  return p.jsx("a", { href: id(g), className: m, onClick: (F) => od(F, g), ...A, children: N });
}
function xr({ children: g, size: N = "lg", route: m, onClick: A }) {
  const F = N === "lg" ? "text-base md:text-lg pl-8 pr-2 py-2" : "text-base pl-6 pr-1.5 py-1.5",
    U = p.jsxs(p.Fragment, {
      children: [
        p.jsx("span", { children: g }),
        p.jsx("span", {
          className:
            "rounded-full bg-white p-2 transition-colors duration-200 group-hover:bg-white",
          children: p.jsx($a, { className: "h-5 w-5 text-black" }),
        }),
      ],
    }),
    ne = `group inline-flex items-center gap-3 rounded-full bg-black font-medium text-white transition-colors duration-200 hover:bg-gray-800 ${F}`;
  return m
    ? p.jsx(Fl, { target: { kind: "route", path: m }, className: ne, children: U })
    : p.jsx("button", { type: "button", className: ne, onClick: A, children: U });
}
function Qa() {
  return p.jsx("section", {
    id: "ecosystem",
    className: "scroll-mt-20 bg-[#F5F5F5] px-6 py-24",
    children: p.jsxs("div", {
      className: "mx-auto max-w-[88rem]",
      children: [
        p.jsxs("div", {
          className: "mb-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2",
          children: [
            p.jsxs("div", {
              id: "rewards",
              className: "scroll-mt-24",
              children: [
                p.jsx("h2", {
                  className: "mb-8 text-4xl leading-tight font-medium text-black md:text-5xl",
                  style: { letterSpacing: "-0.03em" },
                  children: "Meet USD Halo.",
                }),
                p.jsx(xr, { size: "base", href: "#ecosystem", children: "Discover it" }),
              ],
            }),
            p.jsx("p", {
              className: "text-2xl leading-relaxed text-black/70 md:text-3xl",
              children:
                "USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar.",
            }),
          ],
        }),
        p.jsxs("div", {
          className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
          children: [
            p.jsxs("div", {
              className: "flex min-h-80 flex-col justify-between rounded-2xl p-7 lg:col-span-2",
              style: {
                backgroundImage: `url(${cd})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              },
              children: [
                p.jsx("h3", {
                  className: "text-2xl leading-snug font-medium text-black",
                  style: { letterSpacing: "-0.02em" },
                  children: "Savings that bloom",
                }),
                p.jsx("p", {
                  className: "max-w-xs text-base text-black/70",
                  children:
                    "Gain steady returns as your dollar tokens are routed into top-performing DeFi strategies.",
                }),
              ],
            }),
            p.jsxs("div", {
              className: "flex min-h-80 flex-col justify-between rounded-2xl bg-[#2B2644] p-7",
              children: [
                p.jsxs("h3", {
                  className: "text-2xl leading-snug font-medium text-white",
                  style: { letterSpacing: "-0.02em" },
                  children: ["Always fluid,", p.jsx("br", {}), "always pegged."],
                }),
                p.jsx("p", {
                  className: "text-base text-white/60",
                  children:
                    "Keep fully dollar-anchored with on-demand access to funds — no lockups or waits.",
                }),
              ],
            }),
            p.jsxs("div", {
              className: "flex min-h-80 flex-col justify-between rounded-2xl bg-[#2B2644] p-7",
              children: [
                p.jsxs("h3", {
                  className: "text-2xl leading-snug font-medium text-white",
                  style: { letterSpacing: "-0.02em" },
                  children: ["Fully", p.jsx("br", {}), "automated"],
                }),
                p.jsx("p", {
                  className: "text-base text-white/60",
                  children:
                    "Skip the task of tuning positions yourself. USD Halo runs in the background for you.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function wd({ className: g = "w-7 h-7" }) {
  return p.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    fill: "currentColor",
    className: g,
    "aria-hidden": !0,
    children: p.jsx("path", {
      d: "M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z",
    }),
  });
}
function sn() {
  const [g, N] = qe.useState("");
  return (
    qe.useEffect(() => (N(Ha()), Ba(N)), []),
    p.jsx("nav", {
      className: "absolute top-0 right-0 left-0 z-20 px-6 py-5",
      children: p.jsxs("div", {
        className: "mx-auto flex max-w-[88rem] items-center justify-between",
        children: [
          p.jsxs(Fl, {
            target: { kind: "route", path: "" },
            className: "flex items-center gap-2 text-black",
            children: [
              p.jsx(wd, { className: "h-7 w-7 text-black" }),
              p.jsx("span", { className: "text-2xl font-medium tracking-tight", children: "Halo" }),
            ],
          }),
          p.jsx("div", {
            className: "hidden items-center gap-8 md:flex",
            children: dd.map((m) =>
              p.jsx(
                Fl,
                {
                  target: { kind: "route", path: m.path },
                  className: `text-base font-medium transition-colors duration-200 hover:text-black ${g === m.path ? "text-black" : "text-gray-700"}`,
                  children: m.label,
                },
                m.path,
              ),
            ),
          }),
          p.jsx(Fl, {
            target: { kind: "route", path: "wallet" },
            className:
              "rounded-full bg-black px-7 py-2.5 text-base font-medium text-white transition-colors duration-200 hover:bg-gray-800",
            children: "Open Wallet",
          }),
        ],
      }),
    })
  );
}
function xd() {
  return p.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5]",
    children: [
      p.jsx("div", { className: "relative pt-20", children: p.jsx(sn, {}) }),
      p.jsx(Qa, {}),
    ],
  });
}
function Ka() {
  return p.jsx("section", {
    id: "help",
    className: "scroll-mt-20 bg-[#F5F5F5] px-6 py-24",
    children: p.jsxs("div", {
      className: "mx-auto grid max-w-[88rem] grid-cols-1 items-start gap-8 md:grid-cols-2",
      children: [
        p.jsxs("div", {
          className: "md:pr-12 md:pt-2",
          children: [
            p.jsx("p", {
              className: "mb-2 text-sm text-black/60",
              children: "USD Halo in Practice",
            }),
            p.jsx("h2", {
              className: "mb-6 text-5xl leading-none font-medium text-black md:text-6xl",
              style: { letterSpacing: "-0.04em" },
              children: "Use modes",
            }),
            p.jsx("p", {
              className: "max-w-sm text-base leading-relaxed text-black/60",
              children:
                "USD Halo powers a wide range of modes for builders, companies and treasuries wanting safe and rewarding stablecoin integrations plus more",
            }),
          ],
        }),
        p.jsxs("div", {
          className: "relative min-h-[720px] overflow-hidden rounded-3xl",
          children: [
            p.jsx("video", {
              className: "absolute inset-0 h-full w-full object-cover",
              src: fd,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
            }),
            p.jsxs("div", {
              className: "relative z-10 p-10 md:p-12",
              children: [
                p.jsx("h3", {
                  className: "mb-5 text-4xl leading-tight font-medium text-black md:text-5xl",
                  style: { letterSpacing: "-0.03em" },
                  children: "Commerce",
                }),
                p.jsx("p", {
                  className: "mb-8 max-w-md text-base text-black/70",
                  children:
                    "Lift customer retention by offering USD Halo, a trusted dollar-backed stablecoin with strong yields, letting your patrons earn with zero effort on your platform.",
                }),
                p.jsxs("a", {
                  href: "#ecosystem",
                  className:
                    "group inline-flex items-center gap-3 text-base font-medium text-black transition-colors hover:text-black/80",
                  children: [
                    "Know more",
                    p.jsx("span", {
                      className:
                        "flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur transition-colors duration-200 group-hover:bg-white",
                      children: p.jsx($a, { className: "h-4 w-4 text-black" }),
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
function Sd() {
  return p.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5]",
    children: [
      p.jsx("div", { className: "relative pt-20", children: p.jsx(sn, {}) }),
      p.jsx(Ka, {}),
    ],
  });
}
function Ya({ brands: g, trackClass: N, itemSpacing: m = "mx-7" }) {
  const A = g.map((F) =>
    p.jsx(
      "span",
      {
        className: `${m} shrink-0 whitespace-nowrap text-black/60`,
        style: {
          fontFamily: F.fontFamily,
          fontWeight: F.fontWeight,
          letterSpacing: F.letterSpacing,
          fontSize: F.fontSize,
          fontStyle: F.fontStyle,
          textTransform: F.textTransform,
        },
        children: F.name,
      },
      F.name,
    ),
  );
  return p.jsx("div", {
    className: "w-full overflow-hidden",
    children: p.jsxs("div", { className: N, children: [A, A] }),
  });
}
function Ga() {
  return p.jsx("section", {
    id: "news",
    className: "scroll-mt-20 bg-[#F5F5F5] px-6 py-16",
    children: p.jsxs("div", {
      className: "mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-8 md:grid-cols-4",
      children: [
        p.jsxs("p", {
          className: "text-base leading-relaxed text-black/70",
          children: [
            "Funded by premier partners",
            p.jsx("br", {}),
            "and forward-thinking leaders.",
          ],
        }),
        p.jsx("div", {
          className: "overflow-hidden md:col-span-3",
          children: p.jsx(Ya, {
            brands: md,
            trackClass: "backers-track",
            opacityClass: "text-black/50",
            itemSpacing: "mx-10",
          }),
        }),
      ],
    }),
  });
}
function Xa() {
  return p.jsx("section", {
    id: "network",
    className: "relative flex flex-1 flex-col px-6 pt-20 pb-6",
    children: p.jsxs("div", {
      className: "relative w-full overflow-hidden rounded-2xl",
      style: { height: "calc(100vh - 96px)" },
      children: [
        p.jsx("video", {
          className: "absolute inset-0 h-full w-full object-cover",
          src: ad,
          autoPlay: !0,
          muted: !0,
          loop: !0,
          playsInline: !0,
        }),
        p.jsxs("div", {
          className: "relative z-10 flex h-full flex-col items-start justify-start p-12 pt-36",
          children: [
            p.jsxs("h1", {
              className: "mb-4 max-w-xl text-5xl leading-tight font-medium text-black md:text-6xl",
              style: { letterSpacing: "-0.04em" },
              children: ["Your Wealth", p.jsx("br", {}), "Works"],
            }),
            p.jsx("p", {
              className: "mb-8 max-w-md text-base leading-relaxed text-black/70 md:text-lg",
              style: { fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" },
              children:
                "An automated, reward-powered digital dollar built for native passive earnings and effortless connection into DeFi.",
            }),
            p.jsx(xr, { href: "#ecosystem", children: "Join us" }),
            p.jsx("div", {
              className: "mt-24 w-full max-w-md overflow-hidden",
              children: p.jsx(Ya, { brands: pd, trackClass: "marquee-track" }),
            }),
          ],
        }),
      ],
    }),
  });
}
function Za() {
  return p.jsx("section", {
    id: "wallet",
    className: "scroll-mt-24 border-t border-black/5 bg-[#F5F5F5] px-6 py-20",
    "aria-label": "Wallet",
    children: p.jsxs("div", {
      className: "mx-auto max-w-[88rem] text-center",
      children: [
        p.jsx("h2", {
          className: "mb-4 text-3xl font-medium text-black md:text-4xl",
          style: { letterSpacing: "-0.03em" },
          children: "Connect your wallet",
        }),
        p.jsx("p", {
          className: "mx-auto mb-8 max-w-md text-base text-black/60",
          children:
            "Link a compatible wallet to hold USD Halo, view rewards, and move funds on-chain.",
        }),
        p.jsx(xr, { size: "base", children: "Open Wallet" }),
      ],
    }),
  });
}
function kd() {
  return p.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5]",
    children: [
      p.jsx(sn, {}),
      p.jsx(Xa, {}),
      p.jsx("section", {
        id: "network",
        className: "scroll-mt-24 px-6 py-24",
        children: p.jsxs("div", {
          className: "mx-auto max-w-[88rem]",
          children: [
            p.jsx("h2", {
              className: "text-4xl font-medium text-black md:text-5xl",
              style: { letterSpacing: "-0.03em" },
              children: "Halo network",
            }),
            p.jsx("p", {
              className: "mt-6 max-w-2xl text-xl text-black/70",
              children:
                "Institutional validators, seamless DeFi connectivity, and reward-earning dollars—USD Halo stays pegged while your wealth works across the network.",
            }),
          ],
        }),
      }),
      p.jsx("div", { id: "ecosystem", className: "scroll-mt-24", children: p.jsx(Qa, {}) }),
      p.jsx("section", {
        id: "rewards",
        className: "scroll-mt-24 px-6 py-24",
        children: p.jsxs("div", {
          className: "mx-auto max-w-[88rem]",
          children: [
            p.jsx("h2", {
              className: "mb-8 text-4xl font-medium text-black md:text-5xl",
              style: { letterSpacing: "-0.03em" },
              children: "Meet USD Halo rewards",
            }),
            p.jsx("p", {
              className: "max-w-2xl text-2xl leading-relaxed text-black/70 md:text-3xl",
              children:
                "USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar—always fluid, always pegged, fully automated in the background.",
            }),
            p.jsxs("div", {
              className: "mt-12 grid gap-4 sm:grid-cols-2",
              children: [
                p.jsxs("article", {
                  className: "rounded-2xl bg-[#2B2644] p-7 text-white",
                  children: [
                    p.jsx("h3", { className: "text-2xl font-medium", children: "Passive yield" }),
                    p.jsx("p", {
                      className: "mt-4 text-white/60",
                      children: "Top-performing DeFi strategies routed automatically.",
                    }),
                  ],
                }),
                p.jsxs("article", {
                  className: "rounded-2xl bg-[#2B2644] p-7 text-white",
                  children: [
                    p.jsx("h3", { className: "text-2xl font-medium", children: "No lockups" }),
                    p.jsx("p", {
                      className: "mt-4 text-white/60",
                      children: "On-demand access with dollar anchoring intact.",
                    }),
                  ],
                }),
              ],
            }),
            p.jsx("div", {
              className: "mt-10",
              children: p.jsx(xr, { size: "base", route: "wallet", children: "Open Wallet" }),
            }),
          ],
        }),
      }),
      p.jsx("div", { id: "wallet", className: "scroll-mt-24", children: p.jsx(Za, {}) }),
      p.jsx("div", { id: "news", className: "scroll-mt-24", children: p.jsx(Ga, {}) }),
      p.jsx("div", { id: "help", className: "scroll-mt-24", children: p.jsx(Ka, {}) }),
    ],
  });
}
function Ed() {
  return p.jsxs("div", {
    className: "flex min-h-screen flex-col bg-[#F5F5F5]",
    children: [
      p.jsxs("div", {
        className: "flex h-screen flex-col overflow-hidden",
        children: [p.jsx(sn, {}), p.jsx(Xa, {})],
      }),
      p.jsx("section", {
        className: "px-6 py-24",
        children: p.jsxs("div", {
          className: "mx-auto max-w-[88rem]",
          children: [
            p.jsx("h2", {
              className: "text-4xl font-medium text-black md:text-5xl",
              style: { letterSpacing: "-0.03em" },
              children: "Halo network",
            }),
            p.jsx("p", {
              className: "mt-6 max-w-2xl text-xl text-black/70",
              children:
                "Institutional validators, seamless DeFi connectivity, and reward-earning dollars—USD Halo stays pegged while your wealth works across the network.",
            }),
          ],
        }),
      }),
    ],
  });
}
function Nd() {
  return p.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5]",
    children: [
      p.jsx("div", { className: "relative pt-20", children: p.jsx(sn, {}) }),
      p.jsx(Ga, {}),
    ],
  });
}
function _d() {
  return p.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5]",
    children: [
      p.jsx("div", { className: "relative pt-20", children: p.jsx(sn, {}) }),
      p.jsx("section", {
        className: "scroll-mt-20 px-6 py-24",
        children: p.jsxs("div", {
          className: "mx-auto max-w-[88rem]",
          children: [
            p.jsx("h2", {
              className: "mb-8 text-4xl font-medium text-black md:text-5xl",
              style: { letterSpacing: "-0.03em" },
              children: "Meet USD Halo rewards",
            }),
            p.jsx("p", {
              className: "max-w-2xl text-2xl leading-relaxed text-black/70 md:text-3xl",
              children:
                "USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar—always fluid, always pegged, fully automated in the background.",
            }),
            p.jsxs("div", {
              className: "mt-12 grid gap-4 sm:grid-cols-2",
              children: [
                p.jsxs("article", {
                  className: "rounded-2xl bg-[#2B2644] p-7 text-white",
                  children: [
                    p.jsx("h3", { className: "text-2xl font-medium", children: "Passive yield" }),
                    p.jsx("p", {
                      className: "mt-4 text-white/60",
                      children: "Top-performing DeFi strategies routed automatically.",
                    }),
                  ],
                }),
                p.jsxs("article", {
                  className: "rounded-2xl bg-[#2B2644] p-7 text-white",
                  children: [
                    p.jsx("h3", { className: "text-2xl font-medium", children: "No lockups" }),
                    p.jsx("p", {
                      className: "mt-4 text-white/60",
                      children: "On-demand access with dollar anchoring intact.",
                    }),
                  ],
                }),
              ],
            }),
            p.jsx(xr, {
              size: "base",
              route: "wallet",
              className: "mt-10",
              children: "Open Wallet",
            }),
          ],
        }),
      }),
    ],
  });
}
function Cd() {
  return p.jsxs("div", {
    className: "min-h-screen bg-[#F5F5F5]",
    children: [
      p.jsx("div", { className: "relative pt-20", children: p.jsx(sn, {}) }),
      p.jsx(Za, {}),
    ],
  });
}
function jd() {
  return (
    qe.useEffect(() => {
      Wa();
    }, []),
    p.jsx("div", {
      className: "flex flex-col bg-[#F5F5F5]",
      children: p.jsx(sd, {
        routes: {
          "": p.jsx(kd, {}),
          network: p.jsx(Ed, {}),
          ecosystem: p.jsx(xd, {}),
          rewards: p.jsx(_d, {}),
          help: p.jsx(Sd, {}),
          news: p.jsx(Nd, {}),
          wallet: p.jsx(Cd, {}),
        },
      }),
    })
  );
}
nd.createRoot(document.getElementById("root")).render(
  p.jsx(qe.StrictMode, { children: p.jsx(jd, {}) }),
);
